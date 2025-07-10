// @ts-nocheck
// To be fixed
import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, Mic, MicOff } from 'lucide-react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { medications } from '../data/medications';
import { protocols, EMSProtocol } from '../data/protocols'; // Assuming EMSProtocol is exported
import Fuse from 'fuse.js';

const EMSChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; sender: 'user' | 'bot' }[]>([]);
  const [inputValue, setInputValue] = useState('');
  const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();
  const recognitionRef = useRef<any>(null);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const fuseProtocols = new Fuse(protocols, { keys: ['title', 'category', 'keywords'], threshold: 0.4 });
  const fuseMedications = new Fuse(medications, { keys: ['name', 'genericName'], threshold: 0.4 });

  useEffect(() => {
    if (transcript) {
      setInputValue(transcript);
    }
  }, [transcript]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (!browserSupportsSpeechRecognition) {
    // You can render a message or disable the mic button
    console.warn("Browser does not support speech recognition.");
  } else {
    recognitionRef.current = SpeechRecognition;
  }

  const toggleListening = () => {
    if (listening) {
      if (recognitionRef.current) {
        recognitionRef.current.stopListening();
      }
    } else {
      resetTranscript();
      if (recognitionRef.current) {
        recognitionRef.current.startListening({ continuous: true });
      }
    }
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;
    
    const userMessage = { text: inputValue, sender: 'user' as 'user' };
    setMessages(prev => [...prev, userMessage]);
    
    processUserMessage(inputValue);
    
    setInputValue('');
    resetTranscript();
  };
  
  const processUserMessage = (message: string) => {
    const lowerCaseMessage = message.toLowerCase();
    let botResponse = "I'm sorry, I couldn't find information on that. Can you be more specific?";

    // Search protocols
    const protocolResults = fuseProtocols.search(lowerCaseMessage);
    if (protocolResults.length > 0) {
        const topResult = protocolResults[0].item as EMSProtocol;
        botResponse = `For "${topResult.title}", here's a summary: ${topResult.description || 'No description available.'} You can find more details under the protocols section.`;
    }

    // Search medications
    const medResults = fuseMedications.search(lowerCaseMessage);
    if (medResults.length > 0) {
        const topResult = medResults[0].item;
        botResponse = `For ${topResult.name}: It is used for ${topResult.indications?.[0] || 'various purposes'}. The adult dosage is typically ${topResult.dosage?.adult || 'variable'}. Check the medications section for full details.`;
    }
    
    // Simple greetings and other interactions
    if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')) {
        botResponse = "Hello! How can I help you with EMS protocols or medications today?";
    }

    if (lowerCaseMessage.includes('gcs')) {
        botResponse = "The Glasgow Coma Scale (GCS) calculator is available under the 'Calculators' section. It assesses eye, verbal, and motor responses.";
    }

    setTimeout(() => {
        const botMessage = { text: botResponse, sender: 'bot' as 'bot' };
        setMessages(prev => [...prev, botMessage]);
    }, 500);
  };

  return (
    <>
      <div className="fixed bottom-5 right-5 z-50">
        <button onClick={() => setIsOpen(!isOpen)} className="bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 transition-colors">
          {isOpen ? <X /> : <MessageSquare />}
        </button>
      </div>
      {isOpen && (
        <div className="fixed bottom-20 right-5 w-96 h-[32rem] bg-white rounded-lg shadow-2xl flex flex-col z-50">
          <div className="p-4 bg-gray-800 text-white rounded-t-lg">
            <h3 className="font-bold text-lg">ProMedix Assistant</h3>
          </div>
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((msg, index) => (
              <div key={index} className={`mb-3 p-3 rounded-lg max-w-[85%] ${msg.sender === 'user' ? 'bg-blue-100 ml-auto' : 'bg-gray-200 mr-auto'}`}>
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="p-4 border-t flex">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask about a protocol or drug..."
              className="flex-1 p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {browserSupportsSpeechRecognition && (
              <button onClick={toggleListening} className={`p-3 border-t border-b ${listening ? 'text-red-500' : 'text-gray-500'}`}>
                {listening ? <MicOff /> : <Mic />}
              </button>
            )}
            <button onClick={handleSendMessage} className="bg-blue-600 text-white p-3 rounded-r-md hover:bg-blue-700">Send</button>
          </div>
        </div>
      )}
    </>
  );
};

export default EMSChatbot;
