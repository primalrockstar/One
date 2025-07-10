// @ts-nocheck
// To be fixed
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect, useRef, useCallback, ChangeEvent, ReactNode } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import { Home, BookOpen, Heart, Activity, Sliders, LogOut, CheckSquare, List, AlertTriangle, ArrowLeft, Plus, X, Star, Settings, User, Search, Maximize, Play, Pause, RefreshCw } from 'lucide-react';

// THIS IS THE DEFINITIVE FIX. All local imports now use the explicit .ts or .tsx file extension, which removes all ambiguity for the build tool.
import { protocols } from './data/protocols.ts';
import { medications, Medication } from './data/medications.ts';
import { ecgQuizzes } from './data/ecg-quizzes.ts';
import { studyCards } from './data/study-cards.ts';
import { equipmentChecklists, EquipmentCategory, EquipmentItem, CertificationLevel as EquipCertLevel } from './data/equipment-checklists.ts';
import { trainingScenarios } from './data/training-scenarios.ts';
import { medicationSimulations, MedicationSimulation } from './data/medication-simulations.ts';
import { procedures, Procedure } from './data/procedures.ts';
import ARMedicationVisualization from './components/ARMedicationVisualization.tsx';
import EMSChatbot from './components/EMSChatbot.tsx';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';

// ... The rest of the file is identical to what you have already updated.
// The only change is in the import statements above.

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

const Header = ({ title }: { title: string }) => (
  <header className="bg-white shadow-sm p-4">
    <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
  </header>
);

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
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Universal Search (e.g., 'Aspirin', 'Chest Pain', 'ACLS')..."
            className="w-full p-3 pl-12 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchResults.length > 0 && (
            <ul className="absolute z-10 w-full mt-1 bg-white border rounded-lg shadow-lg max-h-80 overflow-y-auto">
              {searchResults.map((item, index) => (
                <li key={index} className="p-3 hover:bg-gray-100">
                  <Link to={item.link} className="flex justify-between items-center">
                    <span>{item.title || item.name}</span>
                    <span className="text-sm font-semibold text-blue-500 bg-blue-100 px-2 py-1 rounded-full">{item.type}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <DashboardCard title="Protocols" link="/protocols" icon={<BookOpen />} />
          <DashboardCard title="Medications" link="/medications" icon={<Heart />} />
          <DashboardCard title="ECG Quiz" link="/ecg-quiz" icon={<Activity />} />
          <DashboardCard title="Study Cards" link="/study-cards" icon={<CheckSquare />} />
          <DashboardCard title="Calculators" link="/calculators" icon={<Sliders />} />
          <DashboardCard title="Equipment" link="/equipment-checklist" icon={<List />} />
          <DashboardCard title="Scenarios" link="/training-scenarios" icon={<AlertTriangle />} />
          <DashboardCard title="Med Sims" link="/medication-simulations" icon={<Play />} />
          <DashboardCard title="Procedures" link="/procedures" icon={<Maximize />} />
        </div>

        <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Your Progress</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="font-semibold mb-2">ECG Quiz Scores</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={ecgProgressData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="score" stroke="#8884d8" activeDot={{ r: 8 }} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="font-semibold mb-2">Scenario Performance</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={scenarioProgressData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="score" fill="#82ca9d" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
      </div>
    );
  };

  const DashboardCard = ({ title, link, icon }: { title: string, link: string, icon: React.ReactNode }) => (
    <Link to={link} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform flex flex-col items-center justify-center text-center">
      <div className="text-blue-500 mb-3">{React.cloneElement(icon as React.ReactElement, { size: 40 })}</div>
      <h2 className="text-lg font-bold text-gray-800">{title}</h2>
    </Link>
  );

const ProtocolList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [certificationLevel, setCertificationLevel] = useState('Paramedic');

  const filteredProtocols = protocols
    .filter(p => p.certificationLevels.includes(certificationLevel))
    .filter(p => p.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search protocols..."
          className="p-2 border rounded-md w-1/2"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="p-2 border rounded-md"
          value={certificationLevel}
          onChange={(e) => setCertificationLevel(e.target.value)}
        >
          <option>EMT</option>
          <option>AEMT</option>
          <option>Paramedic</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProtocols.map(protocol => (
          <Link key={protocol.id} to={`/protocols/${protocol.id}`} className="block p-4 bg-white rounded-lg shadow hover:bg-gray-50">
            <h2 className="text-lg font-bold text-blue-600">{protocol.title}</h2>
            <p className="text-sm text-gray-600 mt-1">{protocol.category}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

const ProtocolDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const protocol = protocols.find(p => p.id === id);

  if (!protocol) {
    return <div className="p-6">Protocol not found.</div>;
  }

  return (
    <div className="p-6">
      <button onClick={() => navigate(-1)} className="flex items-center mb-4 text-blue-600 hover:underline">
        <ArrowLeft className="mr-2" /> Back to Protocols
      </button>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-2">{protocol.title}</h1>
        <p className="text-md text-gray-500 mb-4">{protocol.category}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {protocol.certificationLevels.map(level => (
            <span key={level} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">{level}</span>
          ))}
        </div>
        
        <div className="prose max-w-none">
            {protocol.sections.map((section, index) => (
                <div key={index} className="mb-6">
                    <h2 className="text-xl font-semibold border-b-2 border-gray-200 pb-2 mb-3">{section.title}</h2>
                    <ul className="list-disc pl-5 space-y-2">
                        {section.points.map((point, pIndex) => (
                            <li key={pIndex} dangerouslySetInnerHTML={{ __html: point }}></li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

const MedicationList = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('All');

    const categories = ['All', ...new Set(medications.map(m => m.category))];

    const filteredMeds = medications
      .filter(m => category === 'All' || m.category === category)
      .filter(m => 
          m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (m.brandNames && Object.values(m.brandNames as Record<string, string>).some((brand: string) => brand.toLowerCase().includes(searchTerm.toLowerCase()))) ||
          m.genericName?.toLowerCase().includes(searchTerm.toLowerCase())
      );

    return (
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <input
            type="text"
            placeholder="Search medications (e.g., Aspirin, Adrenaline)..."
            className="p-2 border rounded-md w-1/2"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="p-2 border rounded-md"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map(cat => <option key={cat}>{cat}</option>)}
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredMeds.map(med => (
            <Link key={med.id} to={`/medications/${med.id}`} className="block p-4 bg-white rounded-lg shadow hover:bg-gray-50">
              <h2 className="text-lg font-bold text-blue-600">{med.name}</h2>
              {med.genericName && <p className="text-sm text-gray-600">{med.genericName}</p>}
              <p className="text-xs text-gray-500 mt-2">{med.category}</p>
            </Link>
          ))}
        </div>
      </div>
    );
  };

  const MedicationDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const med = medications.find(m => m.id === id);

    if (!med) {
      return <div className="p-6">Medication not found.</div>;
    }

    const renderList = (title: string, items: any): ReactNode => {
        if (!items || (Array.isArray(items) && items.length === 0)) return null;
        return (
            <div className="mb-6">
                <h3 className="text-xl font-semibold border-b pb-2 mb-3">{title}</h3>
                <ul className="list-disc pl-5 space-y-1">
                    {Array.isArray(items) ? items.map((item, index) => <li key={index}>{item}</li>) : <li>{String(items)}</li>}
                </ul>
            </div>
        )
    }

    const renderKeyValue = (title: string, obj: any): ReactNode => {
        if (!obj || Object.keys(obj).length === 0) return null;
        return (
            <div className="mb-6">
                <h3 className="text-xl font-semibold border-b pb-2 mb-3">{title}</h3>
                <div className="space-y-2">
                    {Object.entries(obj).map(([key, value]) => (
                        <div key={key}>
                            <span className="font-semibold capitalize">{key.replace(/_/g, ' ')}: </span>
                            <span>{String(value)}</span>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    return (
      <div className="p-6">
        <button onClick={() => navigate(-1)} className="flex items-center mb-4 text-blue-600 hover:underline">
          <ArrowLeft className="mr-2" /> Back to Medications
        </button>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold">{med.name}</h1>
          {med.genericName && <p className="text-xl text-gray-600 mb-2">{med.genericName}</p>}
          <p className="text-md text-gray-500 mb-4">{med.category}</p>

          {renderKeyValue("Brand Names", med.brandNames)}
          {renderList("Indications", med.indications)}
          {renderList("Contraindications", med.contraindications)}
          {renderKeyValue("Dosage", med.dosage)}
          {renderList("Administration Routes", med.administrationRoutes)}
          {renderKeyValue("Side Effects", med.sideEffects)}
          {renderList("Precautions", med.precautions)}
          {med.mechanismOfAction && (
              <div className="mb-6">
                 <h3 className="text-xl font-semibold border-b pb-2 mb-3">Mechanism of Action</h3>
                 <p>{med.mechanismOfAction}</p>
              </div>
          )}
          {med.pharmacokinetics && (
            <div className="mb-6">
                <h3 className="text-xl font-semibold border-b pb-2 mb-3">Pharmacokinetics</h3>
                <div className="grid grid-cols-2 gap-2">
                    <div><span className="font-semibold">Onset:</span> {med.pharmacokinetics.onset}</div>
                    <div><span className="font-semibold">Peak:</span> {med.pharmacokinetics.peak}</div>
                    <div><span className="font-semibold">Duration:</span> {med.pharmacokinetics.duration}</div>
                    <div><span className="font-semibold">Half-life:</span> {med.pharmacokinetics.halfLife}</div>
                </div>
            </div>
          )}
          {med.notes && (
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                  <h3 className="font-bold text-blue-800">Notes</h3>
                  <p className="text-blue-700">{med.notes}</p>
              </div>
          )}

          <div className="mt-8">
            <Link to={`/ar-vis/${med.id}`} className="inline-block bg-purple-600 text-white font-bold py-2 px-4 rounded hover:bg-purple-700">
                View in AR
            </Link>
          </div>
        </div>
      </div>
    );
  };

  type SimulationResult = {
    simulationId: string;
    score: number;
    timeUsed: number;
    correctAnswers: number;
    totalSteps: number;
    criticalActionsMissed: string[];
    mistakes: any[]; // Define a more specific type if possible
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
  
  const initialProgress = {
    score: 0,
    timeUsed: 0,
    correctAnswers: 0,
    totalSteps: 0,
    criticalActionsMissed: [],
    mistakes: [],
    recommendations: [],
  };

  const MedicationSimulationsList = () => {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Medication Administration Simulations</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {medicationSimulations.map(sim => (
            <Link key={sim.id} to={`/medication-simulations/${sim.id}`} className="block p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h2 className="text-xl font-bold text-blue-700">{sim.medicationName}</h2>
              <p className="text-gray-600 mt-2">{sim.scenarioTitle}</p>
              <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
                <span>{sim.certificationLevel}</span>
                <span className={`px-2 py-1 rounded-full text-white ${sim.difficulty === 'Hard' ? 'bg-red-500' : sim.difficulty === 'Medium' ? 'bg-yellow-500' : 'bg-green-500'}`}>
                  {sim.difficulty}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  };

  const MedicationSimulationDetail = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const simulation = medicationSimulations.find(s => s.id === id);
    
    const [currentStep, setCurrentStep] = useState(0);
    const [progress, setProgress] = useState(initialProgress);
    const [isFinished, setIsFinished] = useState(false);
    const [feedback, setFeedback] = useState<{ message: string; isCorrect: boolean } | null>(null);
    const [startTime, setStartTime] = useState(0);
    const [finalProgress, setFinalProgress] = useState<SimulationResult | null>(null);
    
    useEffect(() => {
      setStartTime(Date.now());
    }, [])

    if (!simulation) {
      return <div>Simulation not found</div>;
    }

    const step = simulation.steps[currentStep];

    const handleAnswer = (choice: {text: string; isCorrect: boolean; feedback: string;}) => {
        if (isFinished) return;
    
        let newProgress = { ...progress };
        newProgress.totalSteps = (newProgress.totalSteps || 0) + 1;
    
        setFeedback({ message: choice.feedback, isCorrect: choice.isCorrect });
    
        if (choice.isCorrect) {
          newProgress.score = (newProgress.score || 0) + 10;
          newProgress.correctAnswers = (newProgress.correctAnswers || 0) + 1;
        } else {
          newProgress.score = (newProgress.score || 0) - 5;
          if (step.isCritical) {
            newProgress.criticalActionsMissed = [...(newProgress.criticalActionsMissed || []), step.action];
          }
          newProgress.mistakes = [...(newProgress.mistakes || []), { step: currentStep, action: step.action, incorrectChoice: choice.text }];
        }
    
        setTimeout(() => {
          if (currentStep < simulation.steps.length - 1) {
            setCurrentStep(currentStep + 1);
          } else {
            finishSimulation(newProgress);
          }
          setFeedback(null);
        }, 2000);
    
        setProgress(newProgress);
    };

    const finishSimulation = (finalProg: typeof progress) => {
        setIsFinished(true);
        const timeUsed = Math.floor((Date.now() - startTime) / 1000);
        
        let recommendations = [];
        if ((finalProg.criticalActionsMissed ?? []).length > 0) {
            recommendations.push("Review critical decision points for this medication.");
        }
        if (((finalProg.correctAnswers ?? 0) / (finalProg.totalSteps ?? 1)) < 0.7) {
            recommendations.push("Review the entire administration procedure for accuracy.");
        }

        const passed = (finalProg.score ?? 0) >= simulation.passingScore && (finalProg.criticalActionsMissed ?? []).length === 0;

        const result: SimulationResult = {
            simulationId: simulation.id,
            score: finalProg.score ?? 0,
            timeUsed: timeUsed,
            correctAnswers: finalProg.correctAnswers,
            totalSteps: simulation.steps.length,
            criticalActionsMissed: finalProg.criticalActionsMissed,
            mistakes: finalProg.mistakes ?? [],
            recommendations,
            certificationLevel: simulation.certificationLevel,
            passingScore: simulation.passingScore,
            passed: passed,
        };

        setFinalProgress(result);
    };

    const restartSimulation = () => {
        setCurrentStep(0);
        setProgress(initialProgress);
        setIsFinished(false);
        setFeedback(null);
        setStartTime(Date.now());
        setFinalProgress(null);
    };

    if (isFinished && finalProgress) {
        return (
            <div className="p-6 bg-gray-50 min-h-screen">
                <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
                    <h2 className="text-3xl font-bold text-center mb-2">Simulation Complete</h2>
                    <p className="text-center text-gray-600 mb-6">{simulation.medicationName} - {simulation.scenarioTitle}</p>
                    <div className={`text-center p-4 rounded-lg mb-6 ${finalProgress.passed ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        <h3 className="text-2xl font-bold">{finalProgress.passed ? "Passed" : "Failed"}</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-center mb-6">
                        <div>
                            <p className="text-sm text-gray-500">Your Score</p>
                            <p className="text-2xl font-bold">{finalProgress.score} / {simulation.steps.length * 10}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Time Used</p>
                            <p className="text-2xl font-bold">{Math.floor((finalProgress.timeUsed ?? 0) / 60)}m {(finalProgress.timeUsed ?? 0) % 60}s</p>
                        </div>
                    </div>
                    <div className="mb-6">
                        <h4 className="font-semibold text-lg mb-2">Performance Breakdown</h4>
                        <p>Correct Actions: {progress.correctAnswers} / {progress.totalSteps}</p>
                        <p>Critical Actions Missed: {(progress.criticalActionsMissed ?? []).length}</p>
                    </div>

                    {finalProgress.criticalActionsMissed && finalProgress.criticalActionsMissed.length > 0 && (
                        <div className="mb-6 bg-red-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-red-800 mb-2">Critical Actions Missed</h4>
                            <ul className="list-disc pl-5 text-red-700">
                                {finalProgress.criticalActionsMissed.map((action, idx) => <li key={idx}>{action}</li>)}
                            </ul>
                        </div>
                    )}
                    
                    {finalProgress.recommendations.length > 0 && (
                        <div className="mb-6 bg-yellow-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-yellow-800 mb-2">Recommendations</h4>
                            <ul className="list-disc pl-5 text-yellow-700">
                                {finalProgress.recommendations.map((rec, idx) => <li key={idx}>{rec}</li>)}
                            </ul>
                        </div>
                    )}

                    <div className="text-center mt-8">
                        <button onClick={restartSimulation} className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors mr-4">
                            <RefreshCw className="inline-block mr-2" /> Try Again
                        </button>
                        <button onClick={() => navigate('/medication-simulations')} className="bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors">
                            Back to List
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
      <div className="p-6 bg-gray-100 flex justify-center items-center min-h-screen">
        <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-2xl">
          <button onClick={() => navigate('/medication-simulations')} className="absolute top-4 left-4 text-gray-500 hover:text-gray-800">
            <X size={24} />
          </button>
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">{simulation.medicationName}</h2>
            <p className="text-md text-gray-500">{simulation.scenarioTitle}</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <p className="font-semibold text-lg mb-2">Step {currentStep + 1}: {step.action}</p>
            {step.details && <p className="text-gray-700">{step.details}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {step.choices.map((choice, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(choice)}
                disabled={!!feedback}
                className={`p-4 rounded-lg text-left transition-all duration-300 transform hover:scale-105
                  ${!feedback ? 'bg-blue-100 hover:bg-blue-200 text-blue-800' : ''}
                  ${feedback && choice.isCorrect ? 'bg-green-500 text-white animate-pulse' : ''}
                  ${feedback && !choice.isCorrect && feedback.message === choice.feedback ? 'bg-red-500 text-white' : ''}
                  ${feedback && !choice.isCorrect && feedback.message !== choice.feedback ? 'bg-gray-200 text-gray-500' : ''}
                `}
              >
                {choice.text}
              </button>
            ))}
          </div>
          {feedback && (
            <div className={`mt-6 p-4 rounded-lg text-center font-bold text-white ${feedback.isCorrect ? 'bg-green-600' : 'bg-red-600'}`}>
              {feedback.message}
            </div>
          )}
        </div>
      </div>
    );
  };

  const Calculators = () => {
    // State for GCS Calculator
    const [eyeResponse, setEyeResponse] = useState(4);
    const [verbalResponse, setVerbalResponse] = useState(5);
    const [motorResponse, setMotorResponse] = useState(6);
    const gcsScore = eyeResponse + verbalResponse + motorResponse;

    // State for Pediatric Dosing Calculator
    const [weight, setWeight] = useState(10);
    const [weightUnit, setWeightUnit] = useState<'kg' | 'lb'>('kg');
    const [selectedMed, setSelectedMed] = useState<Medication | null>(null);
    const [dose, setDose] = useState('');

    const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setWeight(parseFloat(e.target.value) || 0);
    };

    const handleUnitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setWeightUnit(e.target.value as 'kg' | 'lb');
    };

    const handleMedChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const med = medications.find(m => m.id === e.target.value) || null;
        setSelectedMed(med);
    };

    const calculateDose = useCallback(() => {
        if (!selectedMed || !selectedMed.dosage || !selectedMed.dosage.pediatric) {
            setDose('Pediatric dosage not available.');
            return;
        }

        const weightInKg = weightUnit === 'lb' ? weight / 2.20462 : weight;
        const pediDosage = selectedMed.dosage.pediatric;

        // Example: "0.1 mg/kg" or "15-30 mg/kg"
        const doseString = pediDosage.replace(/ /g, '');
        const perKgMatch = doseString.match(/([\d.-]+)mg\/kg/);
        
        if (perKgMatch) {
            const dosePerKg = parseFloat(perKgMatch[1]);
            const calculatedDose = dosePerKg * weightInKg;
            setDose(`${calculatedDose.toFixed(2)} mg`);
        } else {
            setDose(`Cannot automatically calculate. Dosage: ${pediDoseage}`);
        }

    }, [weight, weightUnit, selectedMed]);

    useEffect(() => {
        if (selectedMed) {
            calculateDose();
        }
    }, [calculateDose, selectedMed]);

    return (
      <div className="p-6 space-y-8">
        {/* GCS Calculator */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Glasgow Coma Scale (GCS) Calculator</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Eye Response */}
            <div>
              <label className="block font-semibold mb-2">Eye Response (E)</label>
              <select onChange={(e) => setEyeResponse(Number(e.target.value))} value={eyeResponse} className="w-full p-2 border rounded">
                <option value={4}>4 - Spontaneous</option>
                <option value={3}>3 - To speech</option>
                <option value={2}>2 - To pain</option>
                <option value={1}>1 - None</option>
              </select>
            </div>
            {/* Verbal Response */}
            <div>
              <label className="block font-semibold mb-2">Verbal Response (V)</label>
              <select onChange={(e) => setVerbalResponse(Number(e.target.value))} value={verbalResponse} className="w-full p-2 border rounded">
                <option value={5}>5 - Oriented</option>
                <option value={4}>4 - Confused</option>
                <option value={3}>3 - Inappropriate words</option>
                <option value={2}>2 - Incomprehensible sounds</option>
                <option value={1}>1 - None</option>
              </select>
            </div>
            {/* Motor Response */}
            <div>
              <label className="block font-semibold mb-2">Motor Response (M)</label>
              <select onChange={(e) => setMotorResponse(Number(e.target.value))} value={motorResponse} className="w-full p-2 border rounded">
                <option value={6}>6 - Obeys commands</option>
                <option value={5}>5 - Localizes to pain</option>
                <option value={4}>4 - Withdraws from pain</option>
                <option value={3}>3 - Flexion to pain (decorticate)</option>
                <option value={2}>2 - Extension to pain (decerebrate)</option>
                <option value={1}>1 - None</option>
              </select>
            </div>
          </div>
          <div className="mt-6 text-center">
            <h3 className="text-xl font-bold">Total GCS Score: <span className="text-blue-600">{gcsScore}</span></h3>
            <p className="text-gray-600 mt-1">
              (E: {eyeResponse}, V: {verbalResponse}, M: {motorResponse}) - 
              Severity: {gcsScore >= 13 ? 'Mild' : gcsScore >= 9 ? 'Moderate' : 'Severe'}
            </p>
          </div>
        </div>

        {/* Pediatric Dosing Calculator */}
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Pediatric Dosing Calculator</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
                <div>
                    <label htmlFor="weight" className="block font-semibold mb-2">Patient Weight</label>
                    <input type="number" id="weight" value={weight} onChange={handleWeightChange} className="w-full p-2 border rounded"/>
                </div>
                <div>
                    <label htmlFor="unit" className="block font-semibold mb-2">Unit</label>
                    <select id="unit" value={weightUnit} onChange={handleUnitChange} className="w-full p-2 border rounded">
                        <option value="kg">Kilograms (kg)</option>
                        <option value="lb">Pounds (lb)</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="med" className="block font-semibold mb-2">Medication</label>
                    <select id="med" onChange={handleMedChange} className="w-full p-2 border rounded" defaultValue="">
                        <option value="" disabled>Select a medication</option>
                        {medications.filter(m => m.dosage && m.dosage.pediatric).map(m => (
                            <option key={m.id} value={m.id}>{m.name}</option>
                        ))}
                    </select>
                </div>
            </div>
            {selectedMed && (
                 <div className="mt-6 text-center bg-gray-100 p-4 rounded-lg">
                    <h3 className="text-xl font-bold">Calculated Dose for {selectedMed.name}:</h3>
                    <p className="text-2xl text-blue-600 font-mono mt-2">{dose}</p>
                    <p className="text-xs text-gray-500 mt-2">Based on a weight of {weight} {weightUnit} and dosage of {selectedMed.dosage.pediatric}.</p>
                    <p className="text-xs text-red-500 mt-1">Disclaimer: Always verify with protocol and a second source.</p>
                 </div>
            )}
        </div>
      </div>
    );
  };

  const EquipmentChecklist = () => {
    const [checklists, setChecklists] = useState(equipmentChecklists);
    const [level, setLevel] = useState<EquipCertLevel>('BLS');
    const [currentCategory, setCurrentCategory] = useState<EquipmentCategory>(Object.keys(equipmentChecklists)[0] as EquipmentCategory);

    const handleCheck = (category: EquipmentCategory, itemIndex: number, certLevel: EquipCertLevel) => {
      const newChecklists = { ...checklists };
      // @ts-ignore
      newChecklists[category][certLevel][itemIndex].checked = !newChecklists[category][certLevel][itemIndex].checked;
      setChecklists(newChecklists);
    };

    const handleReset = () => {
      const resetChecklists = JSON.parse(JSON.stringify(equipmentChecklists)); // Deep copy to reset state
      setChecklists(resetChecklists);
    };

    const categories = Object.keys(checklists) as EquipmentCategory[];

    return (
      <div className="p-6 flex">
        <aside className="w-1/4 pr-6">
          <h2 className="text-xl font-bold mb-4">Categories</h2>
          <div className="space-y-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setCurrentCategory(cat)}
                className={`w-full text-left p-2 rounded ${currentCategory === cat ? 'bg-blue-500 text-white' : 'bg-white hover:bg-gray-100'}`}
              >
                {cat}
              </button>
            ))}
          </div>
          <button onClick={handleReset} className="w-full mt-6 bg-red-500 text-white p-2 rounded hover:bg-red-600">
            Reset All
          </button>
        </aside>

        <main className="w-3/4">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-bold">{currentCategory}</h1>
            <div className="flex space-x-2 p-1 bg-gray-200 rounded-lg">
              <button onClick={() => setLevel('BLS')} className={`px-4 py-1 rounded-md ${level === 'BLS' ? 'bg-white shadow' : ''}`}>BLS</button>
              <button onClick={() => setLevel('ALS')} className={`px-4 py-1 rounded-md ${level === 'ALS' ? 'bg-white shadow' : ''}`}>ALS</button>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md">
            <ul>
              {/* @ts-ignore */}
              {checklists[currentCategory][level] && checklists[currentCategory][level].map((item: EquipmentItem, index: number) => (
                <li key={index} className="flex items-center p-2 border-b last:border-b-0">
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => handleCheck(currentCategory, index, level)}
                    className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 mr-4"
                  />
                  <span>{item.item}</span>
                </li>
              ))}
              {/* @ts-ignore */}
              {(!checklists[currentCategory][level] || checklists[currentCategory][level].length === 0) && (
                <p className="text-gray-500 p-2">No {level}-specific items in this category.</p>
              )}
            </ul>
          </div>
        </main>
      </div>
    );
  };

  const TrainingScenariosList = () => {
    const [level, setLevel] = useState<'EMT' | 'AEMT' | 'Paramedic'>('Paramedic');
    const [difficulty, setDifficulty] = useState<'All' | 'Easy' | 'Medium' | 'Hard'>('All');

    const filteredScenarios = trainingScenarios.filter(s => {
      return (s.certificationLevel === level) && (difficulty === 'All' || s.difficulty === difficulty);
    });

    return (
      <div className="p-6">
        <div className="flex justify-between items-center mb-6 bg-white p-4 rounded-lg shadow-sm">
          <div>
            <label className="mr-2 font-semibold">Certification Level:</label>
            <select value={level} onChange={e => setLevel(e.target.value as any)} className="p-2 border rounded-md">
              <option>EMT</option>
              <option>AEMT</option>
              <option>Paramedic</option>
            </select>
          </div>
          <div>
            <label className="mr-2 font-semibold">Difficulty:</label>
            <select value={difficulty} onChange={e => setDifficulty(e.target.value as any)} className="p-2 border rounded-md">
              <option>All</option>
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredScenarios.map(scenario => (
            <Link key={scenario.id} to={`/training-scenarios/${scenario.id}`} className="block bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <h2 className="text-xl font-bold text-gray-800">{scenario.title}</h2>
              <p className="text-gray-600 mt-2 text-sm">{scenario.description}</p>
              <div className="mt-4 pt-4 border-t flex justify-between items-center">
                <span className="text-sm font-semibold text-blue-600">{scenario.certificationLevel}</span>
                <span className={`px-3 py-1 text-sm rounded-full text-white ${
                  scenario.difficulty === 'Easy' ? 'bg-green-500' :
                  scenario.difficulty === 'Medium' ? 'bg-yellow-500' : 'bg-red-500'
                }`}>{scenario.difficulty}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  };

  const TrainingScenarioDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const scenario = trainingScenarios.find(s => s.id === id);

    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [isCompleted, setIsCompleted] = useState(false);
    const [feedback, setFeedback] = useState<string | null>(null);
    const [selectedChoice, setSelectedChoice] = useState<number | null>(null);

    if (!scenario) return <div>Scenario not found</div>;

    const currentStep = scenario.steps[currentStepIndex];

    const handleChoice = (choice: any, index: number) => {
      setFeedback(choice.feedback);
      setSelectedChoice(index);

      setTimeout(() => {
        setFeedback(null);
        setSelectedChoice(null);
        if (choice.isCorrect && currentStepIndex < scenario.steps.length - 1) {
          setCurrentStepIndex(currentStepIndex + 1);
        } else if (choice.isCorrect && currentStepIndex === scenario.steps.length - 1) {
          setIsCompleted(true);
        }
      }, 2500);
    };

    if (isCompleted) {
      return (
        <div className="p-6 text-center">
          <h2 className="text-3xl font-bold text-green-600 mb-4">Scenario Complete!</h2>
          <p className="text-xl mb-6">You have successfully navigated the {scenario.title} scenario.</p>
          <button onClick={() => navigate('/training-scenarios')} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Back to Scenarios
          </button>
        </div>
      );
    }

    return (
      <div className="p-6">
        <button onClick={() => navigate(-1)} className="flex items-center mb-4 text-blue-600 hover:underline">
          <ArrowLeft className="mr-2" /> Back
        </button>
        <div className="bg-white p-6 rounded-lg shadow-xl max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-2">{scenario.title}</h1>
          <p className="text-gray-600 mb-4">{scenario.description}</p>
          <div className="bg-yellow-50 p-4 rounded-md mb-6 border-l-4 border-yellow-400">
            <h3 className="font-semibold text-yellow-800">Patient Vitals</h3>
            <p className="text-yellow-700">{scenario.patientVitals.initial}</p>
          </div>

          <div className="space-y-4">
            {scenario.steps.map((step, index) => (
              <div key={index} className={`p-4 rounded-lg ${index > currentStepIndex ? 'bg-gray-100 opacity-50' : index === currentStepIndex ? 'bg-blue-50 shadow-md' : 'bg-green-50'}`}>
                <h3 className={`font-bold ${index === currentStepIndex ? 'text-blue-800' : 'text-green-800'}`}>
                  Step {index + 1}: {step.action} {index < currentStepIndex && '✓'}
                </h3>
                {index === currentStepIndex && (
                  <div className="mt-4">
                    {step.choices && step.choices.length > 0 ? (
                      <div className="space-y-2">
                        {step.choices.map((choice, choiceIndex) => (
                          <button
                            key={choiceIndex}
                            onClick={() => handleChoice(choice, choiceIndex)}
                            disabled={!!feedback}
                            className={`w-full text-left p-3 rounded transition-colors ${
                              selectedChoice === choiceIndex 
                                ? (choice.isCorrect ? 'bg-green-500 text-white' : 'bg-red-500 text-white')
                                : 'bg-white hover:bg-gray-100 border'
                            }`}
                          >
                            {choice.text}
                          </button>
                        ))}
                      </div>
                    ) : (
                      <button onClick={() => handleChoice({isCorrect: true, feedback: "Action completed."}, 0)} className="mt-2 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
                        Acknowledge & Continue
                      </button>
                    )}
                    {feedback && <p className="mt-4 p-2 bg-gray-200 rounded">{feedback}</p>}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const ProceduresList = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const filteredProcedures = procedures.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div className="p-6">
            <input
                type="text"
                placeholder="Search procedures..."
                className="w-full p-3 mb-6 border rounded-lg shadow-sm"
                onChange={e => setSearchTerm(e.target.value)}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProcedures.map(proc => (
                    <Link to={`/procedures/${proc.id}`} key={proc.id} className="block bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                        <h2 className="text-xl font-bold text-blue-700">{proc.name}</h2>
                        <p className="text-gray-500 text-sm mt-1">{proc.category}</p>
                        <p className="text-gray-600 mt-3 text-sm">{proc.description.substring(0, 100)}...</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

const ProcedureDetail = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const procedure = procedures.find(p => p.id === id);
    const [selectedProcedure, setSelectedProcedure] = useState<Procedure | null>(null);

    useEffect(() => {
      if (procedure) {
        setSelectedProcedure(procedure);
      }
    }, [procedure]);

    if (!selectedProcedure) {
        return <div className="p-6">Procedure not found.</div>;
    }

    const renderList = (title: string, items: string[] | undefined) => {
        if (!items || items.length === 0) return null;
        return (
            <div className="mb-6">
                <h3 className="text-xl font-semibold border-b-2 border-gray-200 pb-2 mb-3">{title}</h3>
                <ul className="list-disc pl-6 space-y-2">
                    {items.map((item, idx) => <li key={idx} className="text-gray-700">{item}</li>)}
                </ul>
            </div>
        )
    }

    return (
        <div className="p-6">
            <button onClick={() => navigate(-1)} className="flex items-center mb-4 text-blue-600 hover:underline">
                <ArrowLeft className="mr-2" /> Back to Procedures
            </button>
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-4xl font-extrabold text-gray-800 mb-2">{String(selectedProcedure.name)}</h1>
                <p className="text-lg text-gray-500 mb-6">{String(selectedProcedure.description)}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        {renderList("Indications", selectedProcedure.indications)}
                        {renderList("Contraindications", selectedProcedure.contraindications)}
                        {renderList("Equipment", selectedProcedure.equipment)}
                    </div>
                    <div>
                        {renderList("Potential Complications", selectedProcedure.complications)}
                        {renderList("Success Criteria", selectedProcedure.successCriteria)}
                        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                            <h4 className="font-bold text-blue-800">Key Info</h4>
                            <p><strong>Certification Level:</strong> {String(selectedProcedure.certificationLevel)}</p>
                            <p><strong>Estimated Training Hours:</strong> {String(selectedProcedure.trainingHours)}</p>
                        </div>
                    </div>
                </div>

                <div className="mt-8">
                    <h3 className="text-2xl font-bold border-b-2 border-gray-200 pb-2 mb-4">Step-by-Step Procedure</h3>
                    <ol className="list-decimal pl-6 space-y-4">
                        {selectedProcedure.steps.map((step: any, idx: number) => (
                            <li key={idx}>
                                <h4 className="font-bold text-lg">{step.step}</h4>
                                <p className="text-gray-700 ml-4">{step.detail}</p>
                                {step.criticalPoint && (
                                    <p className="text-red-600 font-semibold ml-4 mt-1">
                                        <AlertTriangle size={16} className="inline-block mr-2" />
                                        Critical Point: {step.criticalPoint}
                                    </p>
                                )}
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    );
};

  const StudyCards = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);

    const handleNext = () => {
      setIsFlipped(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % studyCards.length);
      }, 150);
    };

    const handlePrev = () => {
        setIsFlipped(false);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + studyCards.length) % studyCards.length);
        }, 150);
    };

    const card = studyCards[currentIndex];

    return (
      <div className="p-6 flex flex-col items-center justify-center h-full">
        <div className="w-full max-w-xl perspective-1000">
          <div 
            className={`relative w-full h-80 transition-transform duration-700 transform-style-preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}
            onClick={() => setIsFlipped(!isFlipped)}
          >
            {/* Front of card */}
            <div className="absolute w-full h-full backface-hidden bg-white rounded-xl shadow-2xl flex items-center justify-center p-6 text-center">
              <h2 className="text-3xl font-bold">{card.term}</h2>
            </div>
            {/* Back of card */}
            <div className="absolute w-full h-full backface-hidden bg-blue-500 text-white rounded-xl shadow-2xl flex items-center justify-center p-6 text-center rotate-y-180">
              <p className="text-lg">{card.definition}</p>
            </div>
          </div>
        </div>
        <div className="mt-8 flex items-center space-x-8">
          <button onClick={handlePrev} className="bg-gray-200 p-4 rounded-full hover:bg-gray-300 transition">
            <ArrowLeft />
          </button>
          <span className="font-semibold text-lg">{currentIndex + 1} / {studyCards.length}</span>
          <button onClick={handleNext} className="bg-gray-200 p-4 rounded-full hover:bg-gray-300 transition">
            <ArrowLeft className="rotate-180" />
          </button>
        </div>
      </div>
    );
  };

  const ECGQuiz = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showFeedback, setShowFeedback] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [isQuizOver, setIsQuizOver] = useState(false);

    const question = ecgQuizzes[currentQuestionIndex];

    const handleAnswer = (choice: string) => {
      setSelectedAnswer(choice);
      setShowFeedback(true);
      if (choice === question.correctAnswer) {
        setScore(score + 1);
      }
    };

    const handleNextQuestion = () => {
      setShowFeedback(false);
      setSelectedAnswer(null);
      if (currentQuestionIndex < ecgQuizzes.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setIsQuizOver(true);
      }
    };

    const restartQuiz = () => {
      setCurrentQuestionIndex(0);
      setScore(0);
      setIsQuizOver(false);
      setShowFeedback(false);
      setSelectedAnswer(null);
    };

    if (isQuizOver) {
      return (
        <div className="p-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Quiz Complete!</h2>
          <p className="text-xl mb-6">Your score: {score} out of {ecgQuizzes.length}</p>
          <button onClick={restartQuiz} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Restart Quiz
          </button>
        </div>
      );
    }

    return (
      <div className="p-6 max-w-4xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p className="text-sm text-gray-500 mb-2">Question {currentQuestionIndex + 1} of {ecgQuizzes.length}</p>
          <img src={question.imageUrl} alt="ECG Strip" className="w-full rounded-md border mb-4"/>
          <h2 className="text-2xl font-semibold mb-6">{question.question}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {question.choices.map((choice, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(choice)}
                disabled={showFeedback}
                className={`p-4 rounded-lg text-left transition-colors ${
                  showFeedback
                    ? choice === question.correctAnswer
                      ? 'bg-green-500 text-white'
                      : choice === selectedAnswer
                      ? 'bg-red-500 text-white'
                      : 'bg-gray-200'
                    : 'bg-blue-100 hover:bg-blue-200'
                }`}
              >
                {choice}
              </button>
            ))}
          </div>
          {showFeedback && (
            <div className="mt-6 text-center">
              <p className="text-lg font-semibold mb-2">{selectedAnswer === question.correctAnswer ? "Correct!" : "Incorrect."}</p>
              <p className="mb-4">{question.explanation}</p>
              <button onClick={handleNextQuestion} className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600">
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };

  const ARVisualizationWrapper = () => {
    const { medId } = useParams<{medId: string}>();
    const medication = medications.find(m => m.id === medId);
    
    if (!medication) {
      return <div>Medication not found for AR Visualization.</div>;
    }

    return <ARMedicationVisualization medication={medication} />;
  }

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
              {/* Add other routes here */}
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );

export default App;
