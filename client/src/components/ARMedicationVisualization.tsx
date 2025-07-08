import { useState, useRef, useEffect } from 'react';

interface ARVisualizationProps {
  medication: {
    name: string;
    concentration: string;
    dose: string;
    volume: string;
    route: string;
  };
  onClose: () => void;
}

interface SyringeVisualization {
  totalVolume: number;
  doseVolume: number;
  concentration: number;
  medication: string;
}

export function ARMedicationVisualization({ medication, onClose }: ARVisualizationProps) {
  const [isARSupported, setIsARSupported] = useState(false);
  const [isARActive, setIsARActive] = useState(false);
  const [currentView, setCurrentView] = useState<'syringe' | 'vial' | 'injection' | 'nasal'>('syringe');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Check for WebXR AR support
    if (navigator.xr) {
      navigator.xr.isSessionSupported('immersive-ar').then((supported) => {
        setIsARSupported(supported);
      });
    }
  }, []);

  const parseDosage = (medication: any): SyringeVisualization => {
    // Parse medication dosage information
    const dose = parseFloat(medication.dose.match(/(\d+(?:\.\d+)?)/)?.[1] || '0');
    const volume = parseFloat(medication.volume?.match(/(\d+(?:\.\d+)?)/)?.[1] || '1');
    const concentration = parseFloat(medication.concentration?.match(/(\d+(?:\.\d+)?)/)?.[1] || '1');
    
    return {
      totalVolume: volume,
      doseVolume: dose / concentration,
      concentration,
      medication: medication.name
    };
  };

  // Check if medication is Naloxone and determine administration method
  const isNaloxone = medication.name.toLowerCase().includes('naloxone');
  const isNasalSpray = medication.route?.toUpperCase() === 'IN' || medication.concentration?.includes('spray');
  
  // Set default view based on medication type
  useEffect(() => {
    if (isNaloxone && isNasalSpray) {
      setCurrentView('nasal');
    }
  }, [isNaloxone, isNasalSpray]);

  const syringeData = parseDosage(medication);

  const SyringeVisualization3D = ({ data }: { data: SyringeVisualization }) => {
    const canvasWidth = 400;
    const canvasHeight = 300;
    
    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Clear canvas
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      
      // Draw syringe barrel
      const syringeX = 50;
      const syringeY = 100;
      const syringeWidth = 250;
      const syringeHeight = 40;
      
      // Syringe outline
      ctx.strokeStyle = '#333';
      ctx.lineWidth = 2;
      ctx.fillStyle = '#f8f9fa';
      ctx.fillRect(syringeX, syringeY, syringeWidth, syringeHeight);
      ctx.strokeRect(syringeX, syringeY, syringeWidth, syringeHeight);
      
      // Graduation marks
      const totalMarks = 10;
      for (let i = 0; i <= totalMarks; i++) {
        const x = syringeX + (syringeWidth * i / totalMarks);
        ctx.beginPath();
        ctx.moveTo(x, syringeY);
        ctx.lineTo(x, syringeY + (i % 5 === 0 ? 10 : 5));
        ctx.stroke();
        
        if (i % 5 === 0) {
          ctx.fillStyle = '#333';
          ctx.font = '10px Arial';
          ctx.fillText(`${(data.totalVolume * i / totalMarks).toFixed(1)}`, x - 8, syringeY - 5);
        }
      }
      
      // Medication liquid
      const medicationWidth = (data.doseVolume / data.totalVolume) * syringeWidth;
      ctx.fillStyle = '#007bff';
      ctx.fillRect(syringeX + 2, syringeY + 2, medicationWidth - 4, syringeHeight - 4);
      
      // Plunger
      const plungerX = syringeX + medicationWidth;
      ctx.fillStyle = '#6c757d';
      ctx.fillRect(plungerX - 5, syringeY - 5, 10, syringeHeight + 10);
      
      // Needle
      ctx.fillStyle = '#333';
      ctx.fillRect(syringeX + syringeWidth, syringeY + syringeHeight/2 - 1, 40, 2);
      
      // Needle tip
      ctx.beginPath();
      ctx.moveTo(syringeX + syringeWidth + 40, syringeY + syringeHeight/2 - 3);
      ctx.lineTo(syringeX + syringeWidth + 50, syringeY + syringeHeight/2);
      ctx.lineTo(syringeX + syringeWidth + 40, syringeY + syringeHeight/2 + 3);
      ctx.closePath();
      ctx.fill();
      
      // Labels
      ctx.fillStyle = '#333';
      ctx.font = '14px Arial';
      ctx.fillText(`${data.medication}`, syringeX, syringeY - 20);
      ctx.fillText(`Dose: ${data.doseVolume.toFixed(2)} mL`, syringeX, syringeY + syringeHeight + 20);
      ctx.fillText(`Concentration: ${data.concentration} mg/mL`, syringeX, syringeY + syringeHeight + 35);
      
    }, [data]);

    return (
      <canvas 
        ref={canvasRef} 
        width={canvasWidth} 
        height={canvasHeight}
        className="border border-gray-300 rounded"
      />
    );
  };

  const VialVisualization3D = () => {
    return (
      <div className="flex flex-col items-center space-y-4">
        <div className="relative">
          {/* Vial Container */}
          <div className="w-24 h-40 bg-gradient-to-b from-gray-100 to-gray-200 rounded-lg border-2 border-gray-400 relative">
            {/* Medication Level */}
            <div 
              className="absolute bottom-2 left-2 right-2 bg-blue-400 rounded-sm transition-all duration-1000"
              style={{ height: `${Math.min(85, (syringeData.doseVolume / syringeData.totalVolume) * 85)}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-500 rounded-sm opacity-80"></div>
            </div>
            
            {/* Vial Cap */}
            <div className="absolute -top-2 left-2 right-2 h-4 bg-gray-600 rounded-t-lg"></div>
            
            {/* Volume Markings */}
            <div className="absolute left-0 top-4 space-y-4">
              {[1, 0.8, 0.6, 0.4, 0.2].map((mark, idx) => (
                <div key={idx} className="flex items-center">
                  <div className="w-2 h-0.5 bg-gray-500"></div>
                  <span className="text-xs ml-1 text-gray-600">{mark * syringeData.totalVolume}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Needle Insertion */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8">
            <div className="w-1 h-12 bg-gray-400 rounded-full"></div>
            <div className="w-3 h-6 bg-blue-600 rounded-t-full -mt-1"></div>
          </div>
        </div>
        
        <div className="text-center space-y-2">
          <h4 className="font-semibold text-gray-900">{medication.name}</h4>
          <p className="text-sm text-gray-600">Withdraw: {syringeData.doseVolume.toFixed(2)} mL</p>
          <p className="text-xs text-gray-500">Total Volume: {syringeData.totalVolume} mL</p>
        </div>
      </div>
    );
  };

  const NasalSprayVisualization = () => {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900">Nasal Spray Administration</h3>
          <p className="text-sm text-gray-600">{medication.name} - Intranasal Route</p>
        </div>

        {/* 3D Nasal Spray Device */}
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1 flex justify-center">
            <div className="relative">
              {/* Nasal Spray Device */}
              <div className="w-32 h-48 bg-gradient-to-b from-blue-100 to-blue-200 rounded-lg border-2 border-blue-300 relative">
                {/* Device Body */}
                <div className="absolute inset-x-2 top-8 bottom-12 bg-gradient-to-b from-blue-200 to-blue-300 rounded"></div>
                
                {/* Medication Chamber */}
                <div className="absolute inset-x-4 top-12 bottom-16 bg-gradient-to-b from-orange-300 to-orange-400 rounded opacity-80"></div>
                
                {/* Spray Nozzle */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-6 h-8 bg-gray-400 rounded-t-lg"></div>
                
                {/* Actuator Button */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-red-500 rounded-full border-2 border-red-600"></div>
                
                {/* Label */}
                <div className="absolute inset-x-1 top-16 bottom-20 flex items-center justify-center">
                  <div className="bg-white rounded px-1 py-0.5 text-xs font-bold text-gray-800 transform -rotate-90">
                    NARCAN
                  </div>
                </div>
              </div>
              
              {/* Spray Effect */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1 h-6 bg-blue-300 rounded-full opacity-60 animate-pulse"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-3">Dosage Information</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Medication:</span>
                  <span className="font-medium">{medication.name}</span>
                </div>
                <div className="flex justify-between">
                  <span>Concentration:</span>
                  <span className="font-medium">{medication.concentration}</span>
                </div>
                <div className="flex justify-between">
                  <span>Standard Dose:</span>
                  <span className="font-medium">{medication.dose}</span>
                </div>
                <div className="flex justify-between">
                  <span>Volume/Sprays:</span>
                  <span className="font-medium">{medication.volume}</span>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 className="font-semibold text-yellow-800 mb-3">Safety Checks</h4>
              <div className="space-y-2 text-sm text-yellow-700">
                <div className="flex items-center space-x-2">
                  <span className="text-green-600">✓</span>
                  <span>Verify patient identity</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-600">✓</span>
                  <span>Check medication name and concentration</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-600">✓</span>
                  <span>Confirm dose calculation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-600">✓</span>
                  <span>Check expiration date</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-600">✓</span>
                  <span>Ensure device is primed</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Administration Technique */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-semibold text-gray-900 mb-3">Nasal Spray Technique</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <div className="flex items-start space-x-2">
                <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0">1</span>
                <span>Remove device from packaging and check for damage</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0">2</span>
                <span>Do not prime or test the device before use</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0">3</span>
                <span>Tilt patient's head back slightly</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0">4</span>
                <span>Insert nozzle into one nostril until fingers touch bottom of nose</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-start space-x-2">
                <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0">5</span>
                <span>Press plunger firmly to release dose</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0">6</span>
                <span>Remove device from nostril after spraying</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0">7</span>
                <span>If no response in 2-3 minutes, give second dose in other nostril</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0">8</span>
                <span>Monitor patient response and prepare for transport</span>
              </div>
            </div>
          </div>
        </div>

        {/* Key Points */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h4 className="font-semibold text-red-800 mb-3">Important Notes</h4>
          <div className="space-y-2 text-sm text-red-700">
            <p>• Each device contains ONE dose only - use new device for second dose</p>
            <p>• May need multiple doses for synthetic opioids (fentanyl)</p>
            <p>• Effects are temporary - transport immediately</p>
            <p>• Patient may become combative as they regain consciousness</p>
            <p>• Continue ventilatory support as needed</p>
          </div>
        </div>
      </div>
    );
  };

  const InjectionSiteVisualization = () => {
    const injectionSites = {
      'IM': { name: 'Intramuscular', sites: ['Deltoid', 'Vastus Lateralis', 'Gluteus Medius'] },
      'IV': { name: 'Intravenous', sites: ['Antecubital', 'Hand', 'Forearm'] },
      'SQ': { name: 'Subcutaneous', sites: ['Upper Arm', 'Abdomen', 'Thigh'] },
      'IN': { name: 'Intranasal', sites: ['Nostril'] }
    };

    const currentRoute = medication.route?.toUpperCase() || 'IM';
    const siteInfo = injectionSites[currentRoute as keyof typeof injectionSites] || injectionSites['IM'];

    return (
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900">{siteInfo.name} Administration</h3>
          <p className="text-sm text-gray-600">{medication.name} - {medication.route}</p>
        </div>

        {/* 3D Body Model Representation */}
        <div className="relative mx-auto w-64 h-80 bg-gradient-to-b from-blue-50 to-blue-100 rounded-lg border-2 border-blue-200">
          {/* Human Silhouette */}
          <svg viewBox="0 0 100 120" className="w-full h-full">
            {/* Head */}
            <circle cx="50" cy="15" r="8" fill="#e3f2fd" stroke="#1976d2" strokeWidth="1"/>
            
            {/* Body */}
            <rect x="40" y="22" width="20" height="35" rx="10" fill="#e3f2fd" stroke="#1976d2" strokeWidth="1"/>
            
            {/* Arms */}
            <rect x="25" y="25" width="15" height="4" rx="2" fill="#e3f2fd" stroke="#1976d2" strokeWidth="1"/>
            <rect x="60" y="25" width="15" height="4" rx="2" fill="#e3f2fd" stroke="#1976d2" strokeWidth="1"/>
            
            {/* Legs */}
            <rect x="43" y="55" width="6" height="25" rx="3" fill="#e3f2fd" stroke="#1976d2" strokeWidth="1"/>
            <rect x="51" y="55" width="6" height="25" rx="3" fill="#e3f2fd" stroke="#1976d2" strokeWidth="1"/>

            {/* Injection Sites */}
            {currentRoute === 'IM' && (
              <>
                <circle cx="32" cy="27" r="3" fill="#ff4444" className="animate-pulse"/>
                <circle cx="50" cy="65" r="3" fill="#ff4444" className="animate-pulse"/>
              </>
            )}
            {currentRoute === 'IV' && (
              <circle cx="32" cy="35" r="3" fill="#44ff44" className="animate-pulse"/>
            )}
            {currentRoute === 'SQ' && (
              <circle cx="68" cy="27" r="3" fill="#4444ff" className="animate-pulse"/>
            )}
          </svg>

          {/* Site Labels */}
          <div className="absolute inset-0 pointer-events-none">
            {siteInfo.sites.map((site, idx) => (
              <div 
                key={idx}
                className="absolute bg-white px-2 py-1 rounded shadow-sm text-xs font-medium"
                style={{
                  top: `${20 + idx * 25}%`,
                  left: '110%',
                  transform: 'translateY(-50%)'
                }}
              >
                {site}
              </div>
            ))}
          </div>
        </div>

        {/* Technique Steps */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-semibold text-gray-900 mb-3">Injection Technique</h4>
          <div className="space-y-2 text-sm">
            <div className="flex items-center space-x-2">
              <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs">1</span>
              <span>Clean injection site with alcohol</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs">2</span>
              <span>Insert needle at {currentRoute === 'IM' ? '90°' : currentRoute === 'SQ' ? '45°' : 'appropriate'} angle</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs">3</span>
              <span>Aspirate (if applicable) and inject slowly</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs">4</span>
              <span>Remove needle and apply pressure</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const startARSession = async () => {
    if (!navigator.xr) return;
    
    try {
      const session = await navigator.xr.requestSession('immersive-ar');
      setIsARActive(true);
      // AR session setup would go here
      console.log('AR session started');
    } catch (error) {
      console.error('Failed to start AR session:', error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">AR Medication Visualization</h2>
              <p className="text-gray-600">{medication.name} - {medication.dose}</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>
          </div>

          {/* View Controls */}
          <div className="flex flex-wrap gap-2 mb-6">
            {!isNasalSpray && (
              <>
                <button
                  onClick={() => setCurrentView('syringe')}
                  className={`px-4 py-2 rounded-lg font-medium ${
                    currentView === 'syringe'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  📏 Syringe Dosing
                </button>
                <button
                  onClick={() => setCurrentView('vial')}
                  className={`px-4 py-2 rounded-lg font-medium ${
                    currentView === 'vial'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  🧪 Vial Withdrawal
                </button>
                <button
                  onClick={() => setCurrentView('injection')}
                  className={`px-4 py-2 rounded-lg font-medium ${
                    currentView === 'injection'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  💉 Injection Sites
                </button>
              </>
            )}
            {isNaloxone && (
              <button
                onClick={() => setCurrentView('nasal')}
                className={`px-4 py-2 rounded-lg font-medium ${
                  currentView === 'nasal'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                👃 Nasal Spray
              </button>
            )}
          </div>

          {/* AR Controls */}
          {isARSupported && (
            <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-blue-900">Augmented Reality Mode</h3>
                  <p className="text-sm text-blue-700">View 3D medication models in your environment</p>
                </div>
                <button
                  onClick={startARSession}
                  disabled={isARActive}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
                >
                  {isARActive ? 'AR Active' : 'Start AR'}
                </button>
              </div>
            </div>
          )}

          {/* Content Area */}
          <div className="space-y-6">
            {currentView === 'nasal' && <NasalSprayVisualization />}
            {currentView === 'syringe' && !isNasalSpray && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Syringe Preparation</h3>
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-1">
                    <SyringeVisualization3D data={syringeData} />
                  </div>
                  <div className="flex-1 space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-3">Dosage Calculation</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Medication:</span>
                          <span className="font-medium">{medication.name}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Concentration:</span>
                          <span className="font-medium">{medication.concentration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Ordered Dose:</span>
                          <span className="font-medium">{medication.dose}</span>
                        </div>
                        <div className="flex justify-between border-t pt-2">
                          <span>Volume to Draw:</span>
                          <span className="font-bold text-blue-600">{syringeData.doseVolume.toFixed(2)} mL</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-yellow-50 border border-yellow-200 rounded p-3">
                      <h5 className="font-semibold text-yellow-800 mb-2">Safety Checks</h5>
                      <ul className="text-sm text-yellow-700 space-y-1">
                        <li>✓ Verify patient identity</li>
                        <li>✓ Check medication name and concentration</li>
                        <li>✓ Confirm dose calculation</li>
                        <li>✓ Check expiration date</li>
                        <li>✓ Inspect for particles or discoloration</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {currentView === 'vial' && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Medication Withdrawal</h3>
                <div className="flex flex-col lg:flex-row gap-6 items-center">
                  <div className="flex-1 flex justify-center">
                    <VialVisualization3D />
                  </div>
                  <div className="flex-1 space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-3">Withdrawal Steps</h4>
                      <div className="space-y-3">
                        {[
                          'Clean vial top with alcohol',
                          'Draw air equal to dose volume',
                          'Insert needle through rubber stopper',
                          'Inject air into vial',
                          'Invert vial and withdraw medication',
                          'Remove air bubbles and check dose'
                        ].map((step, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                              {idx + 1}
                            </span>
                            <span className="text-sm">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {currentView === 'injection' && !isNasalSpray && <InjectionSiteVisualization />}
          </div>

          {/* Interactive Controls */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-green-600">📐</span>
                </div>
                <div className="text-sm font-medium">Precise Dosing</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-blue-600">🔍</span>
                </div>
                <div className="text-sm font-medium">3D Visualization</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-purple-600">🎯</span>
                </div>
                <div className="text-sm font-medium">Site Selection</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-orange-600">🛡️</span>
                </div>
                <div className="text-sm font-medium">Safety Checks</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}