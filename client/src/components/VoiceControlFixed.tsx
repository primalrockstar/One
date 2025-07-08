import React, { useState, useEffect, useRef } from 'react';

interface VoiceControlProps {
  onNavigate: (destination: string) => void;
}

export const VoiceControl: React.FC<VoiceControlProps> = ({ onNavigate }) => {
  const [isListening, setIsListening] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [confidence, setConfidence] = useState(0);
  const [lastCommand, setLastCommand] = useState('');
  const [isAutoMode, setIsAutoMode] = useState(false);
  const [status, setStatus] = useState('Ready');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const restartTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Enhanced medical terminology dictionary - using EXACT tab names from App-new.tsx
  const medicalTerms = {
    // Main Navigation Pages (exact matches from switch statement)
    'drug reference': 'medications',
    'medication reference': 'medications',
    'medications': 'medications',
    'drugs': 'medications',
    'assessment tools': 'assessment',
    'assessment': 'assessment',
    'body systems': 'anatomy',
    'anatomy': 'anatomy',
    'physiology': 'anatomy',
    'medical terminology': 'terminology',
    'terminology': 'terminology',
    'emergency protocols': 'protocols',
    'protocols': 'protocols',
    'flashcards': 'flashcards',
    'study cards': 'flashcards',
    'training scenarios': 'scenarios',
    'scenarios': 'scenarios',
    'medication simulations': 'med-simulations',
    'simulations': 'med-simulations',
    'ai recommendations': 'ai-recommendations',
    'ai medication': 'ai-recommendations',
    'ar visualization': 'ar-visualization',
    'augmented reality': 'ar-visualization',
    'equipment checklist': 'equipment',
    'equipment': 'equipment',
    'clinical calculators': 'calculators',
    'calculators': 'calculators',
    'procedures guide': 'procedures',
    'procedures': 'procedures',
    'ecg reference': 'ecg',
    'ecg': 'ecg',
    'ekg': 'ecg',
    'pediatrics guide': 'pediatrics',
    'pediatrics': 'pediatrics',
    'pediatric': 'pediatrics',
    'trauma guide': 'trauma',
    'trauma protocol': 'trauma',
    'ob gyn guide': 'obgyn',
    'obstetrics': 'obgyn',
    'patient assessment': 'patient-assessment',
    'regional guidelines': 'regional-guidelines',
    'about': 'about',
    'home': 'dashboard',
    'dashboard': 'dashboard',
    'main menu': 'dashboard',
    
    // Emergency Protocols
    'cardiac arrest': 'protocols',
    'heart attack': 'protocols',
    'cpr': 'protocols',
    'airway management': 'procedures',
    'airway': 'procedures',
    'breathing': 'procedures',
    'respiratory': 'procedures',
    'shock': 'protocols',
    'bleeding': 'trauma',
    'trauma': 'trauma',
    'stroke': 'protocols',
    'seizure': 'protocols',
    'overdose': 'protocols',
    'poisoning': 'protocols',
    'anaphylaxis': 'protocols',
    'allergic reaction': 'protocols',
    
    // Specific Medications
    'epinephrine': 'medications',
    'epi': 'medications',
    'adrenaline': 'medications',
    'naloxone': 'medications',
    'narcan': 'medications',
    'albuterol': 'medications',
    'ventolin': 'medications',
    'nitroglycerin': 'medications',
    'nitro': 'medications',
    'aspirin': 'medications',
    'asa': 'medications',
    'oxygen': 'medications',
    'glucose': 'medications',
    'dextrose': 'medications',
    'atropine': 'medications',
    'amiodarone': 'medications',
    'lidocaine': 'medications',
    'morphine': 'medications',
    'fentanyl': 'medications',
    'midazolam': 'medications',
    'versed': 'medications',
    'diazepam': 'medications',
    'valium': 'medications',
    'lorazepam': 'medications',
    'ativan': 'medications',
    
    // Assessment Tools
    'glasgow coma scale': 'calculators',
    'gcs': 'calculators',
    'sample history': 'assessment',
    'sample': 'assessment',
    'opqrst': 'assessment',
    'dcap btls': 'assessment',
    'dcap': 'assessment',
    'trauma assessment': 'assessment',
    'primary survey': 'patient-assessment',
    'secondary survey': 'patient-assessment',
    'reassessment': 'patient-assessment',
    'vital signs': 'assessment',
    'vitals': 'assessment'
  };

  // Initialize speech recognition
  useEffect(() => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    
    if (SpeechRecognition) {
      setIsSupported(true);
      
      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = 'en-US';
      recognition.maxAlternatives = 3;
      
      recognition.onstart = () => {
        setIsListening(true);
        setStatus('Listening...');
      };
      
      recognition.onresult = (event: any) => {
        let finalTranscript = '';
        let interimTranscript = '';
        
        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript;
          const confidence = event.results[i][0].confidence;
          
          if (event.results[i].isFinal) {
            finalTranscript += transcript;
            setConfidence(confidence);
          } else {
            interimTranscript += transcript;
          }
        }
        
        setTranscript(finalTranscript || interimTranscript);
        
        if (finalTranscript) {
          const command = finalTranscript.toLowerCase().trim();
          
          // Stop listening in manual mode after receiving a command
          if (!isAutoMode) {
            recognition.stop();
          }
          
          handleVoiceCommand(command);
        }
      };
      
      recognition.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
        setStatus(`Error: ${event.error}`);
        setIsListening(false);
        
        if (isAutoMode && event.error !== 'no-speech') {
          restartListening();
        }
      };
      
      recognition.onend = () => {
        setIsListening(false);
        setStatus('Ready');
        
        if (isAutoMode) {
          restartListening();
        }
      };
      
      recognitionRef.current = recognition;
    }
    
    return () => {
      if (restartTimeoutRef.current) {
        clearTimeout(restartTimeoutRef.current);
      }
    };
  }, [isAutoMode]);

  const restartListening = () => {
    if (restartTimeoutRef.current) {
      clearTimeout(restartTimeoutRef.current);
    }
    
    restartTimeoutRef.current = setTimeout(() => {
      if (recognitionRef.current && isAutoMode) {
        try {
          recognitionRef.current.start();
        } catch (error) {
          console.error('Error restarting recognition:', error);
        }
      }
    }, 1000);
  };

  const handleVoiceCommand = (command: string) => {
    setLastCommand(command);
    
    // Stop any ongoing speech to prevent repetition
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    
    // Find matching medical term with better matching logic
    const normalizedCommand = command.toLowerCase().trim();
    const matchedTerm = Object.keys(medicalTerms).find(term => {
      const normalizedTerm = term.toLowerCase();
      return normalizedCommand.includes(normalizedTerm) || 
             normalizedTerm.includes(normalizedCommand) ||
             normalizedCommand === normalizedTerm;
    });
    
    // Handle help commands specially
    if (normalizedCommand.includes('help') || normalizedCommand.includes('available commands')) {
      setStatus('Available voice commands listed below');
      setSuggestions(['drug reference', 'assessment tools', 'emergency protocols', 'flashcards', 'body systems']);
      
      if ('speechSynthesis' in window) {
        setTimeout(() => {
          const utterance = new SpeechSynthesisUtterance('Available commands are displayed below. Try saying drug reference, assessment tools, or emergency protocols.');
          utterance.rate = 0.9;
          utterance.pitch = 1;
          utterance.volume = 0.8;
          window.speechSynthesis.speak(utterance);
        }, 100);
      }
      return;
    }
    
    if (matchedTerm) {
      const destination = medicalTerms[matchedTerm as keyof typeof medicalTerms];
      setStatus(`Opening ${matchedTerm}...`);
      
      // Clear any existing suggestions
      setSuggestions([]);
      
      // Speak confirmation once
      if ('speechSynthesis' in window) {
        setTimeout(() => {
          const utterance = new SpeechSynthesisUtterance(`Opening ${matchedTerm}`);
          utterance.rate = 0.9;
          utterance.pitch = 1;
          utterance.volume = 0.8;
          window.speechSynthesis.speak(utterance);
        }, 100);
      }
      
      // Navigate immediately
      setTimeout(() => {
        onNavigate(destination);
        setStatus('Command executed successfully');
        setTranscript(''); // Clear transcript after successful navigation
      }, 500);
    } else {
      // Generate suggestions based on partial matches
      const commandWords = normalizedCommand.split(' ');
      const suggestions = Object.keys(medicalTerms).filter(term => {
        return commandWords.some(word => 
          word.length > 2 && term.toLowerCase().includes(word)
        );
      }).slice(0, 3);
      
      setSuggestions(suggestions);
      setStatus('Command not recognized. Try suggestions below or say "help" for available commands.');
    }
  };

  const startListening = () => {
    if (recognitionRef.current && !isListening) {
      setTranscript('');
      setConfidence(0);
      setSuggestions([]);
      try {
        recognitionRef.current.start();
      } catch (error) {
        console.error('Error starting recognition:', error);
        setStatus('Error starting voice recognition');
      }
    }
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
      setStatus('Ready');
    }
  };

  const toggleAutoMode = () => {
    setIsAutoMode(!isAutoMode);
    if (!isAutoMode) {
      startListening();
    } else {
      stopListening();
    }
  };

  if (!isSupported) {
    return (
      <div className="bg-gray-100 rounded-lg p-3 mb-4 border border-gray-200">
        <p className="text-sm text-gray-600 flex items-center">
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          Voice control not supported in this browser. Try Chrome or Edge.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-200 mb-4 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
            isListening 
              ? 'bg-red-500 animate-pulse' 
              : 'bg-blue-500 hover:bg-blue-600'
          }`}>
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 715 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
            </svg>
          </div>
          
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-blue-800">🎤 Enhanced Voice Control</h3>
            <p className="text-sm text-blue-600">{status}</p>
          </div>
        </div>
        
        <div className="flex space-x-2">
          <button
            onClick={toggleAutoMode}
            className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
              isAutoMode 
                ? 'bg-green-500 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {isAutoMode ? 'AUTO' : 'MANUAL'}
          </button>
          
          <button
            onClick={isListening ? stopListening : startListening}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${
              isListening
                ? 'bg-red-500 text-white hover:bg-red-600'
                : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
          >
            {isListening ? 'Stop' : 'Voice'}
          </button>
        </div>
      </div>
      
      {transcript && (
        <div className="bg-white rounded-md p-3 mb-3 border border-blue-200">
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-medium text-gray-700">Transcript:</span>
            <span className="text-xs text-gray-500">
              Confidence: {Math.round(confidence * 100)}%
            </span>
          </div>
          <p className="text-blue-800 font-medium">{transcript}</p>
        </div>
      )}
      
      {lastCommand && (
        <div className="bg-green-50 rounded-md p-2 mb-3 border border-green-200">
          <p className="text-sm text-green-800">
            <strong>Last Command:</strong> {lastCommand}
          </p>
        </div>
      )}
      
      {suggestions.length > 0 && (
        <div className="bg-yellow-50 rounded-md p-2 mb-3 border border-yellow-200">
          <p className="text-sm text-yellow-800 mb-1">
            <strong>Did you mean:</strong>
          </p>
          <div className="flex flex-wrap gap-1">
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => handleVoiceCommand(suggestion)}
                className="px-2 py-1 bg-yellow-200 text-yellow-800 rounded text-xs hover:bg-yellow-300"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      )}
      
      <div className="text-xs text-blue-600 space-y-1">
        <p><strong>🚨 Emergency:</strong> "Cardiac arrest protocol", "Trauma protocol", "Airway management"</p>
        <p><strong>🧭 Navigation:</strong> "Drug reference", "Assessment tools", "Vital signs"</p>
        <p><strong>💊 Medical:</strong> "Epinephrine", "Glasgow coma scale", "Sample history"</p>
        <p><strong>❓ Help:</strong> Say "help" or "available commands" for complete list</p>
      </div>
    </div>
  );
};