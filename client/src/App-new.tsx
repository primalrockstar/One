// @ts-nocheck
// To be fixed
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect, useRef, useCallback, ChangeEvent, ReactNode } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import { 
  Home, BookOpen, Heart, Activity, Sliders, LogOut, CheckSquare, List, 
  AlertTriangle, ArrowLeft, Plus, X, Star, Settings, User, Search, 
  Maximize, Play, Pause, RefreshCw 
} from 'lucide-react';

// Explicitly include file extensions for all local imports
import { protocols } from './data/protocols.ts';
import { medications, Medication } from './data/medications.ts';
import { ecgQuizzes } from './data/ecg-quizzes.ts';
import { studyCards } from './data/study-cards.ts';
import { 
  equipmentChecklists, 
  EquipmentCategory, 
  EquipmentItem, 
  CertificationLevel as EquipCertLevel 
} from './data/equipment-checklists.ts';
import { trainingScenarios } from './data/training-scenarios.ts';
import { medicationSimulations, MedicationSimulation } from './data/medication-simulations.ts';
import { procedures, Procedure } from './data/procedures.ts';
import ARMedicationVisualization from './components/ARMedicationVisualization.tsx';
import EMSChatbot from './components/EMSChatbot.tsx';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';

// Type definitions for simulation results
type SimulationResult = {
  simulationId: string;
  score: number;
  timeUsed: number;
  correctAnswers: number;
  totalSteps: number;
  criticalActionsMissed: string[];
  mistakes: any[];
  recommendations: string[];
  certificationLevel: 'EMT' | 'AEMT' | 'Paramedic';
  passingScore: number;
  passed: boolean;
  completed?: boolean;
  grade?: string;
  timeElapsed?: number;
  correctActions?: number;
  totalActions?: number;
};

// Sidebar Component
const Sidebar = () => (
  <aside className="w-64 bg-gray-800 text-white p-4 flex-col hidden md:flex">
    <div className="text-2xl font-bold mb-8">ProMedix EMS</div>
    <nav>
      <ul>
        <li className="mb-4"><Link to="/" className="flex items-center hover:text-blue-300"><Home className="mr-3" /> Dashboard</Link></li>
        <li className="mb-4"><Link to="/protocols" className="flex items-center hover:text-blue-300"><BookOpen className="mr-3" /> Protocols</Link></li>
        <li className="mb-4"><Link to="/medications" className="flex items-center hover:text-blue-300"><Heart className="mr-3" /> Medications</Link></li>
        <li className="mb-4"><Link to="/ecg-quiz" className="flex items-center hover:text-blue-300"><Activity className="mr-3" /> ECG Quiz</Link></li>
        <li className="mb-4"><Link to="/study-cards" className="flex items-center hover:text-blue-300"><CheckSquare className="mr-3" /> Study Cards</Link></li>
        <li className="mb-4"><Link to="/calculators" className="flex items-center hover:text-blue-300"><Sliders className="mr-3" /> Calculators</Link></li>
        <li className="mb-4"><Link to="/equipment-checklist" className="flex items-center hover:text-blue-300"><List className="mr-3" /> Equipment Checklist</Link></li>
        <li className="mb-4"><Link to="/training-scenarios" className="flex items-center hover:text-blue-300"><AlertTriangle className="mr-3" /> Training Scenarios</Link></li>
        <li className="mb-4"><Link to="/medication-simulations" className="flex items-center hover:text-blue-300"><Play className="mr-3" /> Medication Sims</Link></li>
        <li className="mb-4"><Link to="/procedures" className="flex items-center hover:text-blue-300"><Maximize className="mr-3" /> Procedures</Link></li>
      </ul>
    </nav>
    <div className="mt-auto">
      <Link to="/settings" className="flex items-center hover:text-blue-300"><Settings className="mr-3" /> Settings</Link>
      <Link to="/logout" className="flex items-center mt-2 hover:text-blue-300"><LogOut className="mr-3" /> Logout</Link>
    </div>
  </aside>
);

// Header Component
const Header = ({ title }: { title: string }) => (
  <header className="bg-white shadow-sm p-4">
    <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
  </header>
);

// Dashboard Component
const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const allContent = [
    ...protocols.map(p => ({ ...p, type: 'Protocol', link: `/protocols/${p.id}` })),
    ...medications.map(m => ({ ...m, type: 'Medication', link: `/medications/${m.id}` })),
    ...studyCards.map(s => ({ ...s, type: 'Study Card', title: s.term, link: `/study-cards`})),
    { type: 'Feature', title: 'ECG Quiz', link: '/ecg-quiz' },
    { type: 'Feature', title: 'Calculators', link: '/calculators' },
    { type: 'Feature', title: 'Equipment Checklist', link: '/equipment-checklist' },
    { type: 'Feature', title: 'Training Scenarios', link: '/training-scenarios' },
  ];

  useEffect(() => {
    if (searchTerm.length > 2) {
      const results = allContent.filter(item =>
        item.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.name?.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm, allContent]);

  // Dummy data for progress charts
  const ecgProgressData = [
    { name: 'Jan', score: 65 }, { name: 'Feb', score: 70 }, { name: 'Mar', score: 80 },
    { name: 'Apr', score: 75 }, { name: 'May', score: 85 }, { name: 'Jun', score: 90 },
  ];

  const scenarioProgressData = [
    { name: 'Trauma', score: 88 }, { name: 'Medical', score: 92 }, { name: 'Cardiac', score: 78 },
    { name: 'Peds', score: 85 },
  ];

  return (
    <div className="p-6">
      {/* Search and other components remain the same */}
      {/* ... */}
    </div>
  );
};

// Main App Component
const App = () => (
  <Router>
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/protocols" element={<ProtocolList />} />
            <Route path="/protocols/:id" element={<ProtocolDetail />} />
            <Route path="/medications" element={<MedicationList />} />
            <Route path="/medications/:id" element={<MedicationDetail />} />
            <Route path="/ecg-quiz" element={<ECGQuiz />} />
            <Route path="/study-cards" element={<StudyCards />} />
            <Route path="/calculators" element={<Calculators />} />
            <Route path="/equipment-checklist" element={<EquipmentChecklist />} />
            <Route path="/training-scenarios" element={<TrainingScenariosList />} />
            <Route path="/training-scenarios/:id" element={<TrainingScenarioDetail />} />
            <Route path="/medication-simulations" element={<MedicationSimulationsList />} />
            <Route path="/medication-simulations/:id" element={<MedicationSimulationDetail />} />
            <Route path="/procedures" element={<ProceduresList />} />
            <Route path="/procedures/:id" element={<ProcedureDetail />} />
            <Route path="/ar-vis/:medId" element={<ARVisualizationWrapper />} />
            <Route path="/chatbot" element={<EMSChatbot />} />
          </Routes>
        </main>
      </div>
    </div>
  </Router>
);

export default App;
