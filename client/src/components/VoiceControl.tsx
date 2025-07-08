import { useState, useEffect, useRef, useCallback } from 'react';

interface VoiceControlProps {
  onNavigate: (tab: string) => void;
  currentTab: string;
}

interface VoiceCommand {
  patterns: string[];
  action: () => void;
  description: string;
  category: 'navigation' | 'emergency' | 'assessment' | 'documentation';
  confidence: number;
  aliases: string[];
}

interface RecognitionState {
  isListening: boolean;
  isInitialized: boolean;
  continuousMode: boolean;
  noiseLevel: number;
  confidenceThreshold: number;
}

interface AudioProcessingSettings {
  enableNoiseFilter: boolean;
  enableAutoGain: boolean;
  volumeNormalization: boolean;
  directionalFocus: boolean;
}

export function VoiceControl({ onNavigate, currentTab }: VoiceControlProps) {
  const [state, setState] = useState<RecognitionState>({
    isListening: false,
    isInitialized: false,
    continuousMode: false,
    noiseLevel: 0,
    confidenceThreshold: 0.7
  });
  
  const [transcript, setTranscript] = useState('');
  const [isSupported, setIsSupported] = useState(false);
  const [lastCommand, setLastCommand] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [audioSettings, setAudioSettings] = useState<AudioProcessingSettings>({
    enableNoiseFilter: true,
    enableAutoGain: true,
    volumeNormalization: true,
    directionalFocus: true
  });
  
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const synthRef = useRef<SpeechSynthesisUtterance | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);

  // Comprehensive EMS Medical Terminology Dictionary
  const medicalTerminology = {
    medications: [
      'epinephrine', 'epi', 'adrenaline',
      'nitroglycerin', 'nitro', 'sublingual nitro',
      'albuterol', 'ventolin', 'bronchodilator',
      'morphine', 'pain medication', 'narcotic',
      'dextrose', 'glucose', 'sugar',
      'naloxone', 'narcan', 'opioid reversal',
      'atropine', 'anticholinergic', 'bradycardia medication',
      'adenosine', 'antiarrhythmic', 'SVT medication',
      'amiodarone', 'cardiac medication', 'rhythm control',
      'lidocaine', 'local anesthetic', 'antiarrhythmic',
      'diazepam', 'valium', 'benzodiazepine',
      'lorazepam', 'ativan', 'anxiolytic',
      'furosemide', 'lasix', 'diuretic',
      'dopamine', 'vasopressor', 'inotrope',
      'norepinephrine', 'levophed', 'vasoconstrictor'
    ],
    procedures: [
      'intubation', 'endotracheal intubation', 'secure airway',
      'defibrillation', 'shock', 'cardioversion',
      'iv access', 'intravenous', 'venous access',
      'chest compressions', 'cpr', 'cardiac massage',
      'bag valve mask', 'bvm', 'positive pressure ventilation',
      'needle decompression', 'chest decompression', 'pneumothorax treatment',
      'cricothyrotomy', 'surgical airway', 'emergency airway',
      'lumbar puncture', 'spinal tap', 'csf sampling',
      'chest tube', 'thoracostomy', 'pleural drainage',
      'pericardiocentesis', 'cardiac tamponade relief', 'pericardial drainage'
    ],
    assessment: [
      'glasgow coma scale', 'gcs', 'consciousness level',
      'sample history', 'patient history', 'background assessment',
      'opqrst', 'pain assessment', 'symptom evaluation',
      'avpu', 'mental status', 'responsiveness check',
      'dcap btls', 'trauma assessment', 'injury evaluation',
      'primary survey', 'abcde', 'initial assessment',
      'secondary survey', 'detailed exam', 'comprehensive assessment',
      'vital signs', 'vitals', 'physiological parameters',
      'capnography', 'end tidal co2', 'ventilation monitoring',
      'pulse oximetry', 'oxygen saturation', 'spo2'
    ],
    anatomy: [
      'subcutaneous', 'subq', 'under the skin',
      'intravenous', 'iv', 'into the vein',
      'sublingual', 'under the tongue', 'sl administration',
      'intramuscular', 'im', 'into the muscle',
      'intranasal', 'nasal', 'through the nose',
      'endotracheal', 'et', 'through the breathing tube',
      'intraosseous', 'io', 'into the bone',
      'epidural', 'spinal space', 'nerve block',
      'pericardial', 'around the heart', 'cardiac membrane',
      'pleural', 'lung lining', 'chest cavity'
    ],
    conditions: [
      'anaphylaxis', 'severe allergic reaction', 'anaphylactic shock',
      'myocardial infarction', 'heart attack', 'mi',
      'pneumothorax', 'collapsed lung', 'air in chest',
      'pulmonary embolism', 'pe', 'lung clot',
      'stroke', 'cva', 'cerebrovascular accident',
      'sepsis', 'blood infection', 'systemic infection',
      'diabetic ketoacidosis', 'dka', 'diabetic emergency',
      'status epilepticus', 'continuous seizure', 'prolonged seizure',
      'acute coronary syndrome', 'acs', 'heart emergency',
      'congestive heart failure', 'chf', 'heart failure'
    ],
    equipment: [
      'bag valve mask', 'bvm', 'ambu bag',
      'automated external defibrillator', 'aed', 'shock device',
      'pulse oximeter', 'pulse ox', 'oxygen monitor',
      'blood pressure cuff', 'bp cuff', 'sphygmomanometer',
      'electrocardiogram', 'ecg', 'ekg', 'heart monitor',
      'laryngoscope', 'intubation tool', 'airway visualization',
      'king airway', 'supraglottic airway', 'airway device',
      'nasopharyngeal airway', 'npa', 'nasal trumpet',
      'oropharyngeal airway', 'opa', 'oral airway',
      'cervical collar', 'c collar', 'neck immobilization'
    ]
  };

  // Enhanced speech synthesis with medical pronunciation
  const speak = useCallback((text: string, priority: 'low' | 'normal' | 'high' = 'normal') => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = priority === 'high' ? 1.1 : 0.9;
      utterance.pitch = 1;
      utterance.volume = priority === 'high' ? 1 : 0.8;
      utterance.lang = 'en-US';
      
      // Use medical voice if available
      const voices = window.speechSynthesis.getVoices();
      const medicalVoice = voices.find(voice => 
        voice.name.includes('Medical') || 
        voice.name.includes('Karen') || 
        voice.name.includes('Daniel')
      );
      if (medicalVoice) {
        utterance.voice = medicalVoice;
      }
      
      synthRef.current = utterance;
      window.speechSynthesis.speak(utterance);
    }
  }, []);

  // Enhanced Voice Commands with Multiple Patterns and Medical Context
  const voiceCommands: VoiceCommand[] = [
    // Navigation Commands
    {
      patterns: ['go to dashboard', 'show dashboard', 'home', 'main menu', 'dashboard'],
      action: () => onNavigate('dashboard'),
      description: 'Navigate to main dashboard',
      category: 'navigation',
      confidence: 0.9,
      aliases: ['home screen', 'main page', 'start page']
    },
    {
      patterns: ['open protocols', 'show protocols', 'emergency protocols', 'medical protocols', 'protocols'],
      action: () => onNavigate('emergency'),
      description: 'Open emergency protocols',
      category: 'navigation',
      confidence: 0.95,
      aliases: ['treatment protocols', 'clinical protocols', 'emergency procedures']
    },
    {
      patterns: ['drug reference', 'medications', 'show drugs', 'medication guide', 'drug lookup', 'formulary'],
      action: () => onNavigate('medications'),
      description: 'Open drug reference and medication guide',
      category: 'navigation',
      confidence: 0.95,
      aliases: ['med guide', 'drug database', 'pharmacology']
    },
    {
      patterns: ['assessment tools', 'patient assessment', 'clinical assessment', 'evaluation tools'],
      action: () => onNavigate('assessment'),
      description: 'Open patient assessment tools',
      category: 'assessment',
      confidence: 0.9,
      aliases: ['assessment guide', 'evaluation methods', 'clinical tools']
    },
    {
      patterns: ['body systems', 'anatomy', 'physiology', 'human body', 'organ systems'],
      action: () => onNavigate('anatomy'),
      description: 'Show body systems and anatomy',
      category: 'navigation',
      confidence: 0.85,
      aliases: ['anatomical systems', 'body structure', 'physiological systems']
    },
    {
      patterns: ['calculators', 'clinical calculators', 'dose calculator', 'medical calculator', 'drug calculation'],
      action: () => onNavigate('calculators'),
      description: 'Open clinical calculators',
      category: 'navigation',
      confidence: 0.9,
      aliases: ['calculation tools', 'dosage calculator', 'clinical math']
    },

    // Emergency Commands - Cardiac
    {
      patterns: ['cardiac arrest protocol', 'code blue', 'cpr protocol', 'heart stopped', 'cardiac emergency'],
      action: () => { 
        onNavigate('emergency');
        speak('Opening cardiac arrest protocol. Begin CPR if patient is unresponsive and not breathing normally.', 'high');
      },
      description: 'Cardiac arrest emergency protocol',
      category: 'emergency',
      confidence: 0.98,
      aliases: ['heart attack protocol', 'cardiac code', 'resuscitation protocol']
    },
    {
      patterns: ['chest pain protocol', 'acute coronary syndrome', 'acs protocol', 'heart attack', 'mi protocol'],
      action: () => {
        onNavigate('emergency');
        speak('Opening chest pain protocol. Assess for OPQRST, obtain 12-lead ECG, administer oxygen and aspirin if indicated.', 'high');
      },
      description: 'Chest pain and ACS protocol',
      category: 'emergency',
      confidence: 0.95,
      aliases: ['cardiac chest pain', 'coronary syndrome', 'angina protocol']
    },

    // Emergency Commands - Respiratory
    {
      patterns: ['airway management', 'secure airway', 'intubation protocol', 'airway emergency', 'breathing problems'],
      action: () => {
        onNavigate('emergency');
        speak('Opening airway management protocol. Assess airway patency and consider advanced airway if indicated.', 'high');
      },
      description: 'Airway management and intubation',
      category: 'emergency',
      confidence: 0.95,
      aliases: ['respiratory emergency', 'breathing difficulty', 'ventilation protocol']
    },
    {
      patterns: ['asthma protocol', 'bronchospasm', 'wheezing', 'respiratory distress', 'shortness of breath'],
      action: () => {
        onNavigate('emergency');
        speak('Opening respiratory distress protocol. Administer bronchodilators and assess for improvement.', 'high');
      },
      description: 'Asthma and respiratory distress',
      category: 'emergency',
      confidence: 0.9,
      aliases: ['breathing emergency', 'bronchial constriction', 'respiratory crisis']
    },

    // Emergency Commands - Trauma
    {
      patterns: ['trauma protocol', 'major trauma', 'trauma assessment', 'injury protocol', 'trauma patient'],
      action: () => {
        onNavigate('emergency');
        speak('Opening trauma protocol. Perform primary survey: airway, breathing, circulation, disability, exposure.', 'high');
      },
      description: 'Major trauma assessment and treatment',
      category: 'emergency',
      confidence: 0.95,
      aliases: ['injury assessment', 'trauma evaluation', 'emergency trauma']
    },
    {
      patterns: ['bleeding control', 'hemorrhage control', 'massive bleeding', 'blood loss', 'severe bleeding'],
      action: () => {
        onNavigate('emergency');
        speak('Opening bleeding control protocol. Apply direct pressure, elevate if possible, consider tourniquet for extremity bleeding.', 'high');
      },
      description: 'Bleeding control and hemorrhage management',
      category: 'emergency',
      confidence: 0.95,
      aliases: ['blood control', 'hemorrhage protocol', 'bleeding emergency']
    },

    // Assessment Commands
    {
      patterns: ['glasgow coma scale', 'gcs', 'consciousness level', 'neurological assessment', 'mental status'],
      action: () => {
        onNavigate('assessment');
        speak('Glasgow Coma Scale: Eye opening 4, Verbal response 5, Motor response 6. Maximum score 15.');
      },
      description: 'Glasgow Coma Scale assessment',
      category: 'assessment',
      confidence: 0.95,
      aliases: ['coma scale', 'neuro assessment', 'consciousness check']
    },
    {
      patterns: ['vital signs', 'take vitals', 'record vitals', 'check vitals', 'physiological parameters'],
      action: () => {
        onNavigate('vitals');
        speak('Opening vital signs reference. Check heart rate, blood pressure, respiratory rate, temperature, and oxygen saturation.');
      },
      description: 'Vital signs assessment and recording',
      category: 'assessment',
      confidence: 0.9,
      aliases: ['vitals check', 'physiological signs', 'patient vitals']
    },
    {
      patterns: ['sample history', 'patient history', 'medical history', 'background assessment', 'sample'],
      action: () => {
        onNavigate('assessment');
        speak('SAMPLE history: Signs and symptoms, Allergies, Medications, Past medical history, Last oral intake, Events leading to illness.');
      },
      description: 'SAMPLE history assessment',
      category: 'assessment',
      confidence: 0.9,
      aliases: ['patient background', 'medical background', 'clinical history']
    },

    // Documentation Commands
    {
      patterns: ['start documentation', 'begin report', 'record patient', 'patient report', 'documentation'],
      action: () => {
        onNavigate('assessment');
        speak('Starting patient documentation. Begin with chief complaint and vital signs.');
      },
      description: 'Begin patient care documentation',
      category: 'documentation',
      confidence: 0.85,
      aliases: ['start report', 'begin documentation', 'patient record']
    },

    // Help and System Commands
    {
      patterns: ['help', 'voice commands', 'what can you do', 'available commands', 'command list'],
      action: () => {
        const helpText = 'Available voice commands: Open protocols, Drug reference, Assessment tools, Cardiac arrest protocol, Trauma protocol, Vital signs, Glasgow coma scale, and many more. Say any medical emergency or procedure name.';
        speak(helpText);
      },
      description: 'Show available voice commands',
      category: 'navigation',
      confidence: 0.95,
      aliases: ['voice help', 'command help', 'instructions']
    }
  ];

  // Enhanced command matching with fuzzy logic and medical terminology
  const getCommandSuggestions = useCallback((input: string): string[] => {
    const lowerInput = input.toLowerCase();
    const suggestions: string[] = [];
    
    // Check all command patterns
    voiceCommands.forEach(command => {
      command.patterns.forEach(pattern => {
        if (pattern.includes(lowerInput) || lowerInput.includes(pattern)) {
          suggestions.push(pattern);
        }
      });
    });
    
    // Check medical terminology
    Object.values(medicalTerminology).flat().forEach(term => {
      if (term.includes(lowerInput) || lowerInput.includes(term)) {
        suggestions.push(`What is ${term}?`);
      }
    });
    
    return suggestions.slice(0, 3); // Top 3 suggestions
  }, []);

  // Advanced command processing with confidence scoring
  const processVoiceCommand = useCallback((command: string, confidence: number = 1) => {
    const lowerCommand = command.toLowerCase().trim();
    setLastCommand(lowerCommand);
    setCommandHistory(prev => [lowerCommand, ...prev.slice(0, 9)]); // Keep last 10 commands
    
    // Clear previous suggestions
    setSuggestions([]);

    // Find exact pattern matches first
    for (const cmd of voiceCommands) {
      for (const pattern of cmd.patterns) {
        if (lowerCommand.includes(pattern.toLowerCase()) || 
            pattern.toLowerCase().includes(lowerCommand)) {
          
          // Calculate match confidence
          const matchConfidence = confidence * cmd.confidence;
          
          if (matchConfidence >= state.confidenceThreshold) {
            cmd.action();
            speak(`Command executed: ${cmd.description}`);
            return;
          }
        }
      }
    }

    // Check for medical terminology queries
    let medicalMatch = false;
    Object.entries(medicalTerminology).forEach(([category, terms]) => {
      terms.forEach(term => {
        if (lowerCommand.includes(term.toLowerCase()) ||
            lowerCommand.includes(`what is ${term.toLowerCase()}`) ||
            lowerCommand.includes(`tell me about ${term.toLowerCase()}`)) {
          
          // Provide medical information
          speak(`${term} is a ${category.slice(0, -1)} used in emergency medical services. Check the ${category} reference for detailed information.`);
          onNavigate('medications');
          medicalMatch = true;
          return;
        }
      });
    });

    if (medicalMatch) return;

    // Fallback: suggest similar commands
    const suggestions = getCommandSuggestions(lowerCommand);
    if (suggestions.length > 0) {
      setSuggestions(suggestions);
      speak(`I didn't understand "${lowerCommand}". Did you mean: ${suggestions[0]}? Say "help" for all available commands.`);
    } else {
      speak(`Command "${lowerCommand}" not recognized. Say "help" for available commands or try saying "open protocols" or "drug reference".`);
    }
  }, [state.confidenceThreshold, getCommandSuggestions, speak, onNavigate]);

  // Enhanced Audio Processing and Noise Filtering
  const initializeAudioProcessing = useCallback(async () => {
    try {
      if (audioSettings.enableNoiseFilter && navigator.mediaDevices) {
        const stream = await navigator.mediaDevices.getUserMedia({ 
          audio: { 
            echoCancellation: true,
            noiseSuppression: true,
            autoGainControl: audioSettings.enableAutoGain,
            sampleRate: 16000
          } 
        });
        
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
        analyserRef.current = audioContextRef.current.createAnalyser();
        const source = audioContextRef.current.createMediaStreamSource(stream);
        source.connect(analyserRef.current);
        
        // Monitor noise levels
        const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount);
        const checkNoise = () => {
          if (analyserRef.current) {
            analyserRef.current.getByteFrequencyData(dataArray);
            const average = dataArray.reduce((a, b) => a + b) / dataArray.length;
            setState(prev => ({ ...prev, noiseLevel: average }));
            
            if (state.isListening) {
              requestAnimationFrame(checkNoise);
            }
          }
        };
        checkNoise();
      }
    } catch (error) {
      console.warn('Audio processing setup failed:', error);
    }
  }, [audioSettings, state.isListening]);

  // Advanced Speech Recognition Initialization
  useEffect(() => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    
    if (SpeechRecognition) {
      setIsSupported(true);
      
      const recognition = new SpeechRecognition();
      
      // Enhanced configuration for medical environments
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = 'en-US';
      recognition.maxAlternatives = 3; // Get multiple interpretations
      
      recognition.onstart = () => {
        setState(prev => ({ ...prev, isListening: true }));
        initializeAudioProcessing();
        
        // Set extended timeout for emergency use
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
          if (state.continuousMode) {
            try {
              recognition.start(); // Auto-restart in continuous mode
            } catch (error) {
              console.log('Auto-restart prevented:', error);
            }
          }
        }, 30000); // 30-second timeout
      };

      recognition.onresult = (event: any) => {
        let interimTranscript = '';
        let finalTranscript = '';
        let highestConfidence = 0;
        let bestResult = '';

        for (let i = event.resultIndex; i < event.results.length; i++) {
          const result = event.results[i];
          const transcript = result[0].transcript;
          const confidence = result[0].confidence || 0;

          if (result.isFinal) {
            finalTranscript += transcript;
            if (confidence > highestConfidence) {
              highestConfidence = confidence;
              bestResult = transcript;
            }
          } else {
            interimTranscript += transcript;
          }
        }

        setTranscript(finalTranscript || interimTranscript);

        // Only process commands with sufficient confidence
        if (finalTranscript && highestConfidence >= state.confidenceThreshold) {
          processVoiceCommand(bestResult, highestConfidence);
        } else if (finalTranscript && highestConfidence < state.confidenceThreshold) {
          // Low confidence - ask for clarification
          speak(`I heard "${bestResult}" but I'm not sure. Please repeat or say "help" for available commands.`);
          setSuggestions(getCommandSuggestions(bestResult));
        }
      };

      recognition.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
        setState(prev => ({ ...prev, isListening: false }));
        
        switch (event.error) {
          case 'not-allowed':
            speak('Microphone access denied. Please enable microphone permissions for voice control.', 'high');
            break;
          case 'no-speech':
            speak('No speech detected. Click voice button to try again.');
            break;
          case 'audio-capture':
            speak('Audio capture error. Check microphone connection.', 'high');
            break;
          case 'network':
            speak('Network error. Voice recognition may be limited.');
            break;
          default:
            speak('Voice recognition error. Please try again.');
        }
      };

      recognition.onend = () => {
        setState(prev => ({ ...prev, isListening: false }));
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        
        // Auto-restart in continuous mode
        if (state.continuousMode && !state.isListening) {
          setTimeout(() => {
            try {
              recognition.start();
            } catch (error) {
              console.log('Auto-restart prevented:', error);
            }
          }, 500);
        }
      };

      recognitionRef.current = recognition;
      setState(prev => ({ ...prev, isInitialized: true }));
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.abort();
      }
      if (synthRef.current) {
        window.speechSynthesis.cancel();
      }
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [initializeAudioProcessing, state.continuousMode, state.confidenceThreshold, processVoiceCommand]);

  // Voice control functions
  const startListening = useCallback(() => {
    if (recognitionRef.current && !state.isListening) {
      try {
        recognitionRef.current.start();
      } catch (error) {
        console.error('Error starting recognition:', error);
        speak('Unable to start voice recognition. Please try again.');
      }
    }
  }, [state.isListening, speak]);

  const stopListening = useCallback(() => {
    if (recognitionRef.current && state.isListening) {
      recognitionRef.current.stop();
    }
  }, [state.isListening]);

  const toggleListening = useCallback(() => {
    if (state.isListening) {
      stopListening();
    } else {
      startListening();
    }
  }, [state.isListening, startListening, stopListening]);

  const toggleContinuousMode = useCallback(() => {
    setState(prev => ({ ...prev, continuousMode: !prev.continuousMode }));
    speak(state.continuousMode ? 'Continuous mode disabled' : 'Continuous mode enabled. Voice control will stay active.');
  }, [state.continuousMode, speak]);

  if (!isSupported) {
    return (
      <div className="bg-gray-100 rounded-lg p-3 mb-4 border border-gray-200">
        <p className="text-sm text-gray-600 flex items-center">
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          Voice control not supported in this browser. Use Chrome or Edge for full functionality.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-200 mb-4 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
            state.isListening 
              ? 'bg-red-500 animate-pulse shadow-lg' 
              : 'bg-blue-500 hover:bg-blue-600'
          }`}>
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 715 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
            </svg>
          </div>
          
          <div className="flex-1">
            <div className="flex items-center space-x-2">
              <span className="font-medium text-blue-900 text-sm">EMS Voice Control</span>
              {state.continuousMode && (
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                  CONTINUOUS
                </span>
              )}
              {state.noiseLevel > 50 && (
                <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
                  NOISY
                </span>
              )}
            </div>
            <span className="text-blue-700 text-xs">
              {state.isListening 
                ? 'Listening for medical commands...' 
                : 'Say "Cardiac arrest protocol" or "Drug reference"'
              }
            </span>
          </div>
        </div>
        
        <div className="flex space-x-2">
          <button
            onClick={toggleContinuousMode}
            className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
              state.continuousMode
                ? 'bg-green-100 text-green-700 hover:bg-green-200'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            title="Toggle continuous listening mode"
          >
            AUTO
          </button>
          
          <button
            onClick={toggleListening}
            className={`px-4 py-1 rounded text-sm font-medium transition-colors ${
              state.isListening
                ? 'bg-red-500 hover:bg-red-600 text-white'
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            {state.isListening ? 'Stop' : 'Voice'}
          </button>
        </div>
      </div>

      {/* Current transcript */}
      {transcript && (
        <div className="bg-white rounded p-2 mb-2 border border-blue-100">
          <p className="text-sm text-gray-700">
            <span className="font-medium">Heard: </span>
            "{transcript}"
          </p>
        </div>
      )}

      {/* Last command */}
      {lastCommand && (
        <div className="bg-blue-100 rounded p-2 mb-2">
          <p className="text-sm text-blue-800">
            <span className="font-medium">Last command: </span>
            "{lastCommand}"
          </p>
        </div>
      )}

      {/* Suggestions */}
      {suggestions.length > 0 && (
        <div className="bg-yellow-50 rounded p-2 mb-2 border border-yellow-200">
          <p className="text-sm text-yellow-800 font-medium mb-1">Did you mean:</p>
          <div className="flex flex-wrap gap-1">
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => processVoiceCommand(suggestion)}
                className="bg-yellow-100 hover:bg-yellow-200 text-yellow-800 text-xs px-2 py-1 rounded transition-colors"
              >
                "{suggestion}"
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Quick command examples */}
      <div className="text-xs text-blue-600 space-y-1">
        <p><strong>Emergency:</strong> "Cardiac arrest protocol", "Trauma protocol", "Airway management"</p>
        <p><strong>Navigation:</strong> "Drug reference", "Assessment tools", "Vital signs"</p>
        <p><strong>Help:</strong> Say "help" for all available commands</p>
      </div>
    </div>
  );
}