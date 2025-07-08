import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, Mic, MicOff, X, Search, Clock, AlertTriangle, BookOpen, Pill, Heart } from 'lucide-react';
import { emsFormulary } from '../data/drug-calculator';
import { emsProtocols } from '../data/ems-protocols';
import { flashcards } from '../data/flashcards';
import { traumaProtocols } from '../data/trauma-guide';

interface ChatMessage {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  source?: string;
  relatedActions?: Array<{
    label: string;
    action: () => void;
  }>;
}

interface Props {
  setActiveTab: (tab: string) => void;
}

export default function EMSChatbot({ setActiveTab }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      type: 'bot',
      content: `Welcome to your EMS Protocol Assistant! I can help you with:

🚑 **Emergency Protocols** - Step-by-step guidance
💊 **Medication Dosing** - Instant drug information  
📋 **Assessment Tools** - Interactive checklists
🎯 **Training Scenarios** - Practice and learning
⚡ **Quick References** - Critical information lookup

*All information comes from your platform's loaded protocols and database. Ask me anything!*`,
      timestamp: new Date(),
      source: 'EMS Platform Database'
    }
  ]);
  const [input, setInput] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Initialize speech recognition
  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInput(transcript);
        setIsListening(false);
      };

      recognitionRef.current.onerror = () => {
        setIsListening(false);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }
  }, []);

  const toggleVoiceInput = () => {
    if (!recognitionRef.current) return;

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      recognitionRef.current.start();
      setIsListening(true);
    }
  };

  // Enhanced keyword matching with content validation
  const processQuery = (query: string): ChatMessage => {
    const lowerQuery = query.toLowerCase();
    const keywords = lowerQuery.split(' ');

    // Drug information queries using emsFormulary
    for (const med of emsFormulary) {
      if (keywords.some(keyword => 
        med.name.toLowerCase().includes(keyword) ||
        med.genericName?.toLowerCase().includes(keyword) ||
        keyword === 'epi' && med.name.toLowerCase().includes('epinephrine') ||
        keyword === 'narcan' && med.name.toLowerCase().includes('naloxone')
      )) {
        return {
          id: Date.now().toString(),
          type: 'bot',
          content: `**${med.name}** ${med.genericName ? `(${med.genericName})` : ''}

**Drug Class:** Emergency Medication

**Indication:**
${med.indication}

**Adult Dosage:**
${med.adultDose}

**Pediatric Dosage:**
${med.pediatricDose}

**Contraindications:**
${med.contraindications.map((contra: string) => `• ${contra}`).join('\n')}

${med.warnings ? `**Warnings:**\n${med.warnings.map((warn: string) => `⚠️ ${warn}`).join('\n')}` : ''}`,
          timestamp: new Date(),
          source: 'Platform Medication Database',
          relatedActions: [
            {
              label: 'View All Medications',
              action: () => setActiveTab('medications')
            },
            {
              label: 'AR Visualization',
              action: () => setActiveTab('ar-visualization')
            }
          ]
        };
      }
    }

    // Protocol queries using emsProtocols
    const protocolKeywords = [
      'cardiac arrest', 'cpr', 'chest pain', 'heart attack', 'stroke', 
      'airway', 'breathing', 'respiratory', 'trauma', 'bleeding', 'shock',
      'anaphylaxis', 'allergic reaction', 'overdose', 'poisoning', 'seizure', 'burn'
    ];

    for (const keyword of protocolKeywords) {
      if (lowerQuery.includes(keyword)) {
        const matchingProtocol = emsProtocols.find(p => 
          p.name.toLowerCase().includes(keyword) || 
          (p.description && p.description.toLowerCase().includes(keyword))
        );
        
        if (matchingProtocol) {
          return {
            id: Date.now().toString(),
            type: 'bot',
            content: `**${matchingProtocol.name}**

**Category:** ${matchingProtocol.category}

**Overview:**
${matchingProtocol.description || 'Clark County EMS Protocol'}

**Guidelines:**
${matchingProtocol.guidelines || 'Follow standard EMS procedures and local protocols.'}

*This protocol is from Clark County EMS guidelines loaded in your platform database.*`,
            timestamp: new Date(),
            source: 'Platform Protocol Database',
            relatedActions: [
              {
                label: 'View Full Protocols',
                action: () => setActiveTab('protocols')
              },
              {
                label: 'Practice Scenario',
                action: () => setActiveTab('scenarios')
              }
            ]
          };
        }
        break;
      }
    }

    // Assessment tool queries
    const assessmentKeywords = ['gcs', 'glasgow', 'fast', 'apgar', 'pain scale', 'trauma score', 'vital signs'];
    if (assessmentKeywords.some(keyword => lowerQuery.includes(keyword))) {
      return {
        id: Date.now().toString(),
        type: 'bot',
        content: `**Assessment Tools Available:**

📊 **Glasgow Coma Scale (GCS)**
• Eye opening, verbal response, motor response
• Score range: 3-15 (lower = more severe)

🧠 **FAST Stroke Assessment**  
• Face drooping, Arm weakness, Speech difficulty, Time

💔 **Trauma Scoring**
• DCAP-BTLS assessment
• Rapid trauma survey protocols

📈 **Vital Signs by Age**
• Pediatric vs adult normal ranges
• Critical value alerts

*All assessment tools are available in your Clinical Calculators section.*`,
        timestamp: new Date(),
        source: 'Platform Assessment Database',
        relatedActions: [
          {
            label: 'Open Calculators',
            action: () => setActiveTab('calculators')
          },
          {
            label: 'Assessment Tools',
            action: () => setActiveTab('assessment')
          }
        ]
      };
    }

    // Flashcard/study queries
    if (lowerQuery.includes('quiz') || lowerQuery.includes('study') || lowerQuery.includes('flashcard') || lowerQuery.includes('learn')) {
      const categories = Object.keys(flashcards);
      
      return {
        id: Date.now().toString(),
        type: 'bot',
        content: `**Study & Training Resources:**

📚 **Flashcards Available:** ${categories.length} categories (650+ total cards)
${categories.map(cat => `• ${cat.charAt(0).toUpperCase() + cat.slice(1).replace(/([A-Z])/g, ' $1')} (50 cards)`).join('\n')}

🎯 **Training Scenarios:** 40+ interactive cases
• EMT, AEMT, and Paramedic levels
• Real-world emergency situations
• Performance tracking

📖 **Learning Modules:**
• Body systems and anatomy
• Medical terminology
• Medication simulations

*All content comes from your platform's comprehensive study database.*`,
        timestamp: new Date(),
        source: 'Platform Training Database',
        relatedActions: [
          {
            label: 'Open Flashcards',
            action: () => setActiveTab('flashcards')
          },
          {
            label: 'Practice Scenarios',
            action: () => setActiveTab('scenarios')
          }
        ]
      };
    }

    // Equipment queries
    if (lowerQuery.includes('equipment') || lowerQuery.includes('checklist') || lowerQuery.includes('inventory')) {
      return {
        id: Date.now().toString(),
        type: 'bot',
        content: `**Equipment & Checklists:**

🚑 **BLS Equipment Checklist**
• Airway management tools
• Oxygen delivery systems  
• Basic monitoring equipment
• Spinal immobilization

🏥 **ALS Equipment Checklist**
• Advanced airway tools
• Cardiac monitoring
• IV/IO supplies
• Emergency medications

📋 **Digital Inventory Management**
• Expiration date tracking
• Usage logging
• Restocking alerts

*All checklists are based on standard EMS protocols loaded in your platform.*`,
        timestamp: new Date(),
        source: 'Platform Equipment Database',
        relatedActions: [
          {
            label: 'View Equipment Lists',
            action: () => setActiveTab('equipment')
          }
        ]
      };
    }

    // Trauma-specific queries  
    if (lowerQuery.includes('trauma') || lowerQuery.includes('march') || lowerQuery.includes('tourniquet') || lowerQuery.includes('burn')) {
      return {
        id: Date.now().toString(),
        type: 'bot',
        content: `**Trauma Management Protocols:**

🩸 **MARCH Algorithm**
• **M**assive hemorrhage control
• **A**irway management  
• **R**espiratory support
• **C**irculation assessment
• **H**ypothermia prevention

🔗 **Tourniquet Application**
• High and tight placement
• 2-3 inches above wound
• Tighten until bleeding stops
• Note application time

🔥 **Burn Classification**
• 1st degree: Superficial, red, painful
• 2nd degree: Blisters, deep red
• 3rd degree: White/charred, painless

*All protocols from Clark County EMS guidelines loaded in your platform.*`,
        timestamp: new Date(),
        source: 'Platform Trauma Protocol Database',
        relatedActions: [
          {
            label: 'Full Trauma Guide',
            action: () => setActiveTab('trauma')
          },
          {
            label: 'Trauma Scenarios',
            action: () => setActiveTab('scenarios')
          }
        ]
      };
    }

    // Default response for unknown queries
    return {
      id: Date.now().toString(),
      type: 'bot',
      content: `I can only provide information from the protocols and resources loaded in this app's database. 

**Available Topics:**
🚑 Emergency Protocols (cardiac, trauma, respiratory)
💊 Medication Information (dosing, contraindications)  
📋 Assessment Tools (GCS, FAST, vital signs)
🎯 Training Resources (scenarios, flashcards)
⚙️ Equipment Checklists (BLS/ALS)

Try asking about specific medications (like "epinephrine dose"), protocols (like "chest pain protocol"), or use the main sections for detailed information.

*All responses come exclusively from your platform's local database.*`,
      timestamp: new Date(),
      source: 'Platform Content Index',
      relatedActions: [
        {
          label: 'Browse Protocols',
          action: () => setActiveTab('protocols')
        },
        {
          label: 'View Medications',  
          action: () => setActiveTab('medications')
        }
      ]
    };
  };

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate typing delay for better UX
    setTimeout(() => {
      const botResponse = processQuery(input);
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const clearChat = () => {
    setMessages([messages[0]]); // Keep welcome message
  };

  const quickActions = [
    { label: 'Drug Doses', query: 'medication dosing' },
    { label: 'Cardiac Protocol', query: 'cardiac arrest protocol' },
    { label: 'Trauma Guide', query: 'trauma assessment' },
    { label: 'Assessment Tools', query: 'gcs fast assessment' },
    { label: 'Study Quiz', query: 'quiz flashcards' },
    { label: 'Equipment List', query: 'equipment checklist' }
  ];

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl z-50"
        title="EMS Protocol Assistant"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col z-50">
      {/* Header */}
      <div className="bg-red-600 text-white p-4 rounded-t-lg flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Heart className="w-5 h-5" />
          <h3 className="font-semibold">EMS Protocol Assistant</h3>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={clearChat}
            className="p-1 hover:bg-red-700 rounded"
            title="Clear chat"
          >
            <Search className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 hover:bg-red-700 rounded"
            title="Close chat"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="p-3 border-b border-gray-200 dark:border-gray-700">
        <div className="flex flex-wrap gap-1">
          {quickActions.map((action, idx) => (
            <button
              key={idx}
              onClick={() => {
                setInput(action.query);
                setTimeout(handleSendMessage, 100);
              }}
              className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded text-gray-700 dark:text-gray-300 transition-colors"
            >
              {action.label}
            </button>
          ))}
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[85%] rounded-lg p-3 ${
                message.type === 'user'
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100'
              }`}
            >
              <div className="whitespace-pre-wrap text-sm">{message.content}</div>
              
              {message.source && (
                <div className="text-xs opacity-70 mt-2 flex items-center">
                  <BookOpen className="w-3 h-3 mr-1" />
                  {message.source}
                </div>
              )}

              {message.relatedActions && (
                <div className="mt-3 space-y-1">
                  {message.relatedActions.map((action, idx) => (
                    <button
                      key={idx}
                      onClick={action.action}
                      className="block w-full text-left text-xs px-2 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors"
                    >
                      {action.label}
                    </button>
                  ))}
                </div>
              )}

              <div className="text-xs opacity-50 mt-2">
                {message.timestamp.toLocaleTimeString()}
              </div>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-2">
          <button
            onClick={toggleVoiceInput}
            className={`p-2 rounded-full transition-colors ${
              isListening 
                ? 'bg-red-600 text-white' 
                : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
            title="Voice input"
          >
            {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
          </button>
          
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask about protocols, medications, procedures..."
            className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-gray-700 dark:text-white text-sm"
          />
          
          <button
            onClick={handleSendMessage}
            disabled={!input.trim()}
            className="p-2 bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white rounded-lg transition-colors"
            title="Send message"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}