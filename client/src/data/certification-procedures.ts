export interface Procedure {
  id: string;
  name: string;
  description: string;
  certificationLevel: 'EMT' | 'AEMT' | 'Paramedic';
  category: string;
  difficulty: 'Basic' | 'Intermediate' | 'Advanced';
  equipment: string[];
  indications: string[];
  contraindications: string[];
  steps: ProcedureStep[];
  complications: string[];
  successCriteria: string[];
  protocolReference?: string;
  trainingHours: number;
}

export interface ProcedureStep {
  stepNumber: number;
  description: string;
  criticalAction: boolean;
  safetyNote?: string;
  equipmentNeeded?: string[];
}

export const certificationProcedures: Procedure[] = [
  // EMT Level Procedures
  {
    id: 'bvm-ventilation',
    name: 'Bag-Valve-Mask Ventilation',
    description: 'Manual positive pressure ventilation using bag-valve-mask device',
    certificationLevel: 'EMT',
    category: 'Airway Management',
    difficulty: 'Basic',
    equipment: ['BVM device', 'Oxygen tubing', 'Oxygen source', 'Appropriately sized mask'],
    indications: ['Respiratory arrest', 'Inadequate breathing', 'Apnea'],
    contraindications: ['None in emergency situations'],
    trainingHours: 4,
    steps: [
      {
        stepNumber: 1,
        description: 'Position patient supine with head in neutral position',
        criticalAction: true,
        safetyNote: 'Maintain C-spine precautions if trauma suspected'
      },
      {
        stepNumber: 2,
        description: 'Select appropriate mask size covering nose and mouth',
        criticalAction: true,
        equipmentNeeded: ['Appropriate mask size']
      },
      {
        stepNumber: 3,
        description: 'Connect oxygen tubing and set flow to 15 L/min',
        criticalAction: true,
        equipmentNeeded: ['Oxygen tubing', 'Oxygen source']
      },
      {
        stepNumber: 4,
        description: 'Position yourself at head of patient',
        criticalAction: false
      },
      {
        stepNumber: 5,
        description: 'Create mask seal using C-E technique',
        criticalAction: true,
        safetyNote: 'Ensure proper seal without excessive pressure'
      },
      {
        stepNumber: 6,
        description: 'Squeeze bag smoothly over 1 second',
        criticalAction: true,
        safetyNote: 'Watch for chest rise - stop squeezing when adequate'
      },
      {
        stepNumber: 7,
        description: 'Allow complete exhalation between breaths',
        criticalAction: true
      },
      {
        stepNumber: 8,
        description: 'Maintain rate of 10-12 breaths per minute for adults',
        criticalAction: true
      }
    ],
    complications: ['Gastric distension', 'Pneumothorax', 'Aspiration', 'Inadequate ventilation'],
    successCriteria: ['Visible chest rise', 'Improved oxygen saturation', 'Improved skin color', 'Bilateral breath sounds'],
    protocolReference: 'EMT Airway Management Protocol 3.1'
  },
  {
    id: 'spinal-immobilization',
    name: 'Spinal Immobilization',
    description: 'Complete spinal immobilization using backboard and cervical collar',
    certificationLevel: 'EMT',
    category: 'Trauma Management',
    difficulty: 'Intermediate',
    equipment: ['Long backboard', 'Cervical collar', 'Head blocks', 'Straps', 'Blanket rolls'],
    indications: ['Mechanism suggesting spinal injury', 'Neurological deficits', 'Spinal pain/tenderness'],
    contraindications: ['Penetrating trauma to torso', 'Combative patient compromising airway'],
    trainingHours: 6,
    steps: [
      {
        stepNumber: 1,
        description: 'Establish manual cervical spine control',
        criticalAction: true,
        safetyNote: 'Maintain neutral alignment throughout procedure'
      },
      {
        stepNumber: 2,
        description: 'Apply appropriately sized cervical collar',
        criticalAction: true,
        equipmentNeeded: ['Cervical collar']
      },
      {
        stepNumber: 3,
        description: 'Position backboard next to patient',
        criticalAction: false,
        equipmentNeeded: ['Long backboard']
      },
      {
        stepNumber: 4,
        description: 'Log roll patient onto backboard maintaining alignment',
        criticalAction: true,
        safetyNote: 'Minimum 4 people for safe log roll'
      },
      {
        stepNumber: 5,
        description: 'Center patient on backboard',
        criticalAction: true
      },
      {
        stepNumber: 6,
        description: 'Secure torso with straps',
        criticalAction: true,
        equipmentNeeded: ['Straps']
      },
      {
        stepNumber: 7,
        description: 'Place head blocks and secure head',
        criticalAction: true,
        equipmentNeeded: ['Head blocks', 'Tape/straps']
      },
      {
        stepNumber: 8,
        description: 'Secure legs and arms',
        criticalAction: true
      },
      {
        stepNumber: 9,
        description: 'Reassess neurological function',
        criticalAction: true
      }
    ],
    complications: ['Pressure sores', 'Respiratory compromise', 'Increased injury from movement'],
    successCriteria: ['Patient completely immobilized', 'No movement of spine', 'Maintained neurological function'],
    protocolReference: 'EMT Trauma Protocol 4.2'
  },
  {
    id: 'hemorrhage-control',
    name: 'Hemorrhage Control',
    description: 'Control of external bleeding using direct pressure and tourniquets',
    certificationLevel: 'EMT',
    category: 'Trauma Management',
    difficulty: 'Basic',
    equipment: ['Gauze pads', 'Roller bandages', 'Tourniquet', 'Pressure dressing'],
    indications: ['External bleeding', 'Arterial hemorrhage', 'Venous bleeding'],
    contraindications: ['Suspected fracture at pressure point', 'Impaled objects'],
    trainingHours: 3,
    steps: [
      {
        stepNumber: 1,
        description: 'Ensure scene safety and use appropriate PPE',
        criticalAction: true,
        safetyNote: 'Wear gloves, eye protection, and gown if heavy bleeding'
      },
      {
        stepNumber: 2,
        description: 'Expose the bleeding site',
        criticalAction: true
      },
      {
        stepNumber: 3,
        description: 'Apply direct pressure with gauze pad',
        criticalAction: true,
        equipmentNeeded: ['Gauze pads']
      },
      {
        stepNumber: 4,
        description: 'If bleeding continues, apply additional pressure',
        criticalAction: true
      },
      {
        stepNumber: 5,
        description: 'If bleeding not controlled, apply tourniquet 2-3 inches above wound',
        criticalAction: true,
        equipmentNeeded: ['Tourniquet'],
        safetyNote: 'Note time of tourniquet application'
      },
      {
        stepNumber: 6,
        description: 'Tighten tourniquet until bleeding stops',
        criticalAction: true
      },
      {
        stepNumber: 7,
        description: 'Secure tourniquet and mark time',
        criticalAction: true
      },
      {
        stepNumber: 8,
        description: 'Bandage wound and monitor for continued bleeding',
        criticalAction: true,
        equipmentNeeded: ['Roller bandages']
      }
    ],
    complications: ['Tissue necrosis from tourniquet', 'Infection', 'Shock from blood loss'],
    successCriteria: ['Bleeding controlled', 'Maintained circulation distal to injury', 'Stable vital signs'],
    protocolReference: 'EMT Trauma Protocol 4.1'
  },
  {
    id: 'aed-operation',
    name: 'Automated External Defibrillator Operation',
    description: 'Proper use of AED for cardiac arrest management',
    certificationLevel: 'EMT',
    category: 'Cardiac Management',
    difficulty: 'Basic',
    equipment: ['AED unit', 'AED pads', 'Razor', 'Towel'],
    indications: ['Cardiac arrest', 'Unresponsive with no pulse'],
    contraindications: ['Patient responsive', 'Pulse present', 'Water contact'],
    trainingHours: 4,
    steps: [
      {
        stepNumber: 1,
        description: 'Confirm cardiac arrest - no pulse, unresponsive',
        criticalAction: true
      },
      {
        stepNumber: 2,
        description: 'Begin CPR immediately',
        criticalAction: true,
        safetyNote: 'Continue until AED ready'
      },
      {
        stepNumber: 3,
        description: 'Turn on AED and follow voice prompts',
        criticalAction: true,
        equipmentNeeded: ['AED unit']
      },
      {
        stepNumber: 4,
        description: 'Expose chest and ensure dry surface',
        criticalAction: true,
        equipmentNeeded: ['Towel', 'Razor if needed']
      },
      {
        stepNumber: 5,
        description: 'Apply AED pads in correct positions',
        criticalAction: true,
        equipmentNeeded: ['AED pads'],
        safetyNote: 'Right upper chest and left lower chest'
      },
      {
        stepNumber: 6,
        description: 'Ensure all personnel clear patient',
        criticalAction: true,
        safetyNote: 'Look around and announce "Clear!"'
      },
      {
        stepNumber: 7,
        description: 'Press analyze button when prompted',
        criticalAction: true
      },
      {
        stepNumber: 8,
        description: 'Deliver shock if advised, then resume CPR',
        criticalAction: true,
        safetyNote: 'Immediately resume compressions after shock'
      }
    ],
    complications: ['Inappropriate shock', 'Electrical injury to rescuer', 'Delay in CPR'],
    successCriteria: ['Successful rhythm analysis', 'Appropriate shock delivery if indicated', 'Minimal CPR interruption'],
    protocolReference: 'EMT Cardiac Protocol 2.1'
  },
  // AEMT Level Procedures
  {
    id: 'iv-cannulation',
    name: 'Intravenous Cannulation',
    description: 'Establishment of peripheral intravenous access',
    certificationLevel: 'AEMT',
    category: 'Vascular Access',
    difficulty: 'Intermediate',
    equipment: ['IV catheter', 'IV tubing', 'IV fluid', 'Tourniquet', 'Alcohol swabs', 'Tape', 'Gauze'],
    indications: ['Need for fluid resuscitation', 'Medication administration', 'Blood sampling'],
    contraindications: ['Infection at insertion site', 'Severe peripheral vascular disease'],
    trainingHours: 8,
    steps: [
      {
        stepNumber: 1,
        description: 'Gather all equipment and verify IV fluid',
        criticalAction: true,
        equipmentNeeded: ['All IV supplies']
      },
      {
        stepNumber: 2,
        description: 'Spike IV bag and prime tubing',
        criticalAction: true,
        equipmentNeeded: ['IV fluid', 'IV tubing']
      },
      {
        stepNumber: 3,
        description: 'Select appropriate vein and apply tourniquet',
        criticalAction: true,
        equipmentNeeded: ['Tourniquet']
      },
      {
        stepNumber: 4,
        description: 'Cleanse insertion site with alcohol',
        criticalAction: true,
        equipmentNeeded: ['Alcohol swabs']
      },
      {
        stepNumber: 5,
        description: 'Insert catheter at 15-30 degree angle',
        criticalAction: true,
        equipmentNeeded: ['IV catheter']
      },
      {
        stepNumber: 6,
        description: 'Advance catheter and remove needle',
        criticalAction: true,
        safetyNote: 'Watch for blood return in catheter hub'
      },
      {
        stepNumber: 7,
        description: 'Connect IV tubing and remove tourniquet',
        criticalAction: true
      },
      {
        stepNumber: 8,
        description: 'Secure catheter with tape and dress site',
        criticalAction: true,
        equipmentNeeded: ['Tape', 'Gauze']
      },
      {
        stepNumber: 9,
        description: 'Adjust flow rate and monitor for infiltration',
        criticalAction: true
      }
    ],
    complications: ['Infiltration', 'Phlebitis', 'Air embolism', 'Nerve injury', 'Infection'],
    successCriteria: ['Patent IV access', 'Appropriate flow rate', 'No signs of infiltration'],
    protocolReference: 'AEMT Vascular Access Protocol 5.1'
  },
  {
    id: 'io-insertion',
    name: 'Intraosseous Insertion',
    description: 'Intraosseous access for emergency vascular access',
    certificationLevel: 'AEMT',
    category: 'Vascular Access',
    difficulty: 'Advanced',
    equipment: ['IO drill', 'IO needle', 'Pressure bag', 'Local anesthetic', 'IV tubing'],
    indications: ['Failed IV access', 'Cardiac arrest', 'Pediatric emergency access'],
    contraindications: ['Fracture at insertion site', 'Infection at site', 'Previous orthopedic hardware'],
    trainingHours: 6,
    steps: [
      {
        stepNumber: 1,
        description: 'Select appropriate insertion site (proximal tibia)',
        criticalAction: true,
        safetyNote: 'Locate tibial tuberosity landmark'
      },
      {
        stepNumber: 2,
        description: 'Prepare skin with antiseptic',
        criticalAction: true
      },
      {
        stepNumber: 3,
        description: 'Assemble IO needle and drill',
        criticalAction: true,
        equipmentNeeded: ['IO drill', 'IO needle']
      },
      {
        stepNumber: 4,
        description: 'Insert needle perpendicular to bone',
        criticalAction: true,
        safetyNote: 'Apply steady pressure while drilling'
      },
      {
        stepNumber: 5,
        description: 'Stop when pop/give felt and remove stylet',
        criticalAction: true
      },
      {
        stepNumber: 6,
        description: 'Aspirate to confirm placement',
        criticalAction: true,
        safetyNote: 'Should get marrow return'
      },
      {
        stepNumber: 7,
        description: 'Flush with saline to confirm patency',
        criticalAction: true
      },
      {
        stepNumber: 8,
        description: 'Connect IV tubing and secure needle',
        criticalAction: true,
        equipmentNeeded: ['IV tubing']
      }
    ],
    complications: ['Osteomyelitis', 'Compartment syndrome', 'Fracture', 'Infiltration into soft tissue'],
    successCriteria: ['Needle stable in bone', 'Easy fluid infusion', 'No extravasation'],
    protocolReference: 'AEMT Vascular Access Protocol 5.2'
  },
  {
    id: 'supraglottic-airway',
    name: 'Supraglottic Airway Insertion',
    description: 'Insertion of supraglottic airway device (King LT or LMA)',
    certificationLevel: 'AEMT',
    category: 'Advanced Airway',
    difficulty: 'Advanced',
    equipment: ['Supraglottic airway', 'Lubricant', 'Syringe', 'BVM', 'Stethoscope'],
    indications: ['Unable to ventilate with BVM', 'Cardiac arrest', 'Respiratory failure'],
    contraindications: ['Intact gag reflex', 'Caustic ingestion', 'Upper airway obstruction'],
    trainingHours: 10,
    steps: [
      {
        stepNumber: 1,
        description: 'Select appropriate size airway device',
        criticalAction: true,
        safetyNote: 'Size based on patient weight'
      },
      {
        stepNumber: 2,
        description: 'Test cuff integrity and deflate completely',
        criticalAction: true,
        equipmentNeeded: ['Syringe']
      },
      {
        stepNumber: 3,
        description: 'Lubricate tip of airway device',
        criticalAction: true,
        equipmentNeeded: ['Lubricant']
      },
      {
        stepNumber: 4,
        description: 'Position patient with head extended',
        criticalAction: true,
        safetyNote: 'Unless C-spine injury suspected'
      },
      {
        stepNumber: 5,
        description: 'Insert airway behind tongue to depth marker',
        criticalAction: true
      },
      {
        stepNumber: 6,
        description: 'Inflate cuff to appropriate pressure',
        criticalAction: true,
        equipmentNeeded: ['Syringe']
      },
      {
        stepNumber: 7,
        description: 'Connect BVM and ventilate',
        criticalAction: true,
        equipmentNeeded: ['BVM']
      },
      {
        stepNumber: 8,
        description: 'Confirm placement with bilateral breath sounds',
        criticalAction: true,
        equipmentNeeded: ['Stethoscope']
      },
      {
        stepNumber: 9,
        description: 'Secure airway and monitor continuously',
        criticalAction: true
      }
    ],
    complications: ['Aspiration', 'Esophageal placement', 'Laryngospasm', 'Dental trauma'],
    successCriteria: ['Bilateral breath sounds', 'Visible chest rise', 'No air leak', 'Improved oxygenation'],
    protocolReference: 'AEMT Advanced Airway Protocol 3.3'
  },
  // Paramedic Level Procedures
  {
    id: 'endotracheal-intubation',
    name: 'Endotracheal Intubation',
    description: 'Definitive airway management via endotracheal tube placement',
    certificationLevel: 'Paramedic',
    category: 'Advanced Airway',
    difficulty: 'Advanced',
    equipment: ['Laryngoscope', 'Blades', 'ET tubes', 'Stylet', 'Capnography', 'Tape'],
    indications: ['Respiratory failure', 'Cardiac arrest', 'Inability to maintain airway'],
    contraindications: ['Severe facial trauma', 'Suspected c-spine injury without RSI'],
    trainingHours: 20,
    steps: [
      {
        stepNumber: 1,
        description: 'Pre-oxygenate patient with 100% oxygen',
        criticalAction: true,
        safetyNote: 'Minimum 3 minutes or 8 vital capacity breaths'
      },
      {
        stepNumber: 2,
        description: 'Select appropriate ET tube size and test cuff',
        criticalAction: true,
        equipmentNeeded: ['ET tube', 'Syringe']
      },
      {
        stepNumber: 3,
        description: 'Prepare laryngoscope and check light',
        criticalAction: true,
        equipmentNeeded: ['Laryngoscope', 'Blade']
      },
      {
        stepNumber: 4,
        description: 'Position patient in sniffing position',
        criticalAction: true,
        safetyNote: 'Unless C-spine precautions needed'
      },
      {
        stepNumber: 5,
        description: 'Insert laryngoscope blade and visualize vocal cords',
        criticalAction: true
      },
      {
        stepNumber: 6,
        description: 'Insert ET tube through vocal cords',
        criticalAction: true,
        safetyNote: 'Stop when cuff passes cords'
      },
      {
        stepNumber: 7,
        description: 'Inflate cuff and remove stylet',
        criticalAction: true
      },
      {
        stepNumber: 8,
        description: 'Confirm placement with multiple methods',
        criticalAction: true,
        safetyNote: 'Capnography, bilateral breath sounds, chest rise'
      },
      {
        stepNumber: 9,
        description: 'Secure tube and document depth',
        criticalAction: true,
        equipmentNeeded: ['Tape']
      }
    ],
    complications: ['Esophageal intubation', 'Right mainstem intubation', 'Aspiration', 'Hypoxia', 'Dental trauma'],
    successCriteria: ['Capnography waveform', 'Bilateral breath sounds', 'Visible chest rise', 'Stable oxygen saturation'],
    protocolReference: 'Paramedic Advanced Airway Protocol 3.4'
  },
  {
    id: 'cardioversion',
    name: 'Synchronized Cardioversion',
    description: 'Electrical cardioversion for unstable tachyarrhythmias',
    certificationLevel: 'Paramedic',
    category: 'Cardiac Management',
    difficulty: 'Advanced',
    equipment: ['Monitor/defibrillator', 'Pads', 'Sedation medication', 'IV access'],
    indications: ['Unstable SVT', 'Unstable atrial fibrillation', 'Unstable VT with pulse'],
    contraindications: ['Digitalis toxicity', 'Multifocal atrial tachycardia', 'Stable patient'],
    trainingHours: 12,
    steps: [
      {
        stepNumber: 1,
        description: 'Assess patient stability and obtain consent if possible',
        criticalAction: true
      },
      {
        stepNumber: 2,
        description: 'Establish IV access and attach monitor',
        criticalAction: true,
        equipmentNeeded: ['IV supplies', 'Monitor pads']
      },
      {
        stepNumber: 3,
        description: 'Administer sedation if patient conscious',
        criticalAction: false,
        safetyNote: 'Versed 2-5mg IV or Etomidate 0.3mg/kg'
      },
      {
        stepNumber: 4,
        description: 'Select synchronized mode on defibrillator',
        criticalAction: true,
        safetyNote: 'Ensure sync markers appear on QRS complexes'
      },
      {
        stepNumber: 5,
        description: 'Select appropriate energy level',
        criticalAction: true,
        safetyNote: 'SVT: 50J, AFib: 120-200J, VT: 100J'
      },
      {
        stepNumber: 6,
        description: 'Charge defibrillator and ensure all clear',
        criticalAction: true,
        safetyNote: 'Look around and announce "All clear"'
      },
      {
        stepNumber: 7,
        description: 'Deliver shock when ready',
        criticalAction: true
      },
      {
        stepNumber: 8,
        description: 'Reassess rhythm and patient status',
        criticalAction: true
      },
      {
        stepNumber: 9,
        description: 'Increase energy and repeat if unsuccessful',
        criticalAction: false
      }
    ],
    complications: ['VF/VT induction', 'Myocardial stunning', 'Skin burns', 'Prolonged sedation'],
    successCriteria: ['Conversion to stable rhythm', 'Improved hemodynamics', 'Maintained consciousness'],
    protocolReference: 'Paramedic Cardiac Protocol 2.4'
  },
  {
    id: 'chest-decompression',
    name: 'Needle Chest Decompression',
    description: 'Emergency treatment of tension pneumothorax',
    certificationLevel: 'Paramedic',
    category: 'Trauma Management',
    difficulty: 'Advanced',
    equipment: ['14G needle/catheter', 'Antiseptic', 'Flutter valve', 'Tape'],
    indications: ['Tension pneumothorax', 'Severe respiratory distress with unilateral chest trauma'],
    contraindications: ['Pneumonia', 'Pleural adhesions', 'Coagulopathy'],
    trainingHours: 8,
    steps: [
      {
        stepNumber: 1,
        description: 'Identify tension pneumothorax signs',
        criticalAction: true,
        safetyNote: 'JVD, tracheal deviation, absent breath sounds'
      },
      {
        stepNumber: 2,
        description: 'Locate 2nd intercostal space, midclavicular line',
        criticalAction: true,
        safetyNote: 'On affected side'
      },
      {
        stepNumber: 3,
        description: 'Prepare skin with antiseptic',
        criticalAction: true,
        equipmentNeeded: ['Antiseptic']
      },
      {
        stepNumber: 4,
        description: 'Insert 14G needle perpendicular to chest wall',
        criticalAction: true,
        equipmentNeeded: ['14G needle'],
        safetyNote: 'Should hear rush of air'
      },
      {
        stepNumber: 5,
        description: 'Advance catheter and remove needle',
        criticalAction: true
      },
      {
        stepNumber: 6,
        description: 'Attach flutter valve or tape catheter open',
        criticalAction: true,
        equipmentNeeded: ['Flutter valve', 'Tape']
      },
      {
        stepNumber: 7,
        description: 'Secure catheter to chest wall',
        criticalAction: true
      },
      {
        stepNumber: 8,
        description: 'Reassess breath sounds and vital signs',
        criticalAction: true
      }
    ],
    complications: ['Pneumothorax creation', 'Hemothorax', 'Infection', 'Lung laceration'],
    successCriteria: ['Improved breath sounds', 'Reduced respiratory distress', 'Stable vital signs'],
    protocolReference: 'Paramedic Trauma Protocol 4.5'
  },
  {
    id: 'aed-operation',
    name: 'Automated External Defibrillator Operation',
    description: 'Use of AED for cardiac arrest with shockable rhythms',
    certificationLevel: 'EMT',
    category: 'Cardiac Resuscitation',
    difficulty: 'Basic',
    equipment: ['AED unit', 'AED pads', 'Razor', 'Towel'],
    indications: ['Cardiac arrest', 'Unresponsive patient with no pulse'],
    contraindications: ['Patient in water', 'Patient on metal surface', 'Implanted device under pad'],
    trainingHours: 6,
    steps: [
      {
        stepNumber: 1,
        description: 'Confirm cardiac arrest and begin CPR',
        criticalAction: true,
        safetyNote: 'Ensure scene safety and check responsiveness'
      },
      {
        stepNumber: 2,
        description: 'Turn on AED and follow voice prompts',
        criticalAction: true,
        equipmentNeeded: ['AED unit']
      },
      {
        stepNumber: 3,
        description: 'Expose and prepare chest (dry, shave if necessary)',
        criticalAction: true,
        equipmentNeeded: ['Towel', 'Razor if needed']
      },
      {
        stepNumber: 4,
        description: 'Apply pads according to diagram',
        criticalAction: true,
        safetyNote: 'Right upper chest, left lower lateral chest'
      },
      {
        stepNumber: 5,
        description: 'Ensure all personnel clear before analysis',
        criticalAction: true,
        safetyNote: 'Call "CLEAR" and visually check'
      },
      {
        stepNumber: 6,
        description: 'Press analyze button if prompted',
        criticalAction: true
      },
      {
        stepNumber: 7,
        description: 'If shock advised, ensure clear and press shock button',
        criticalAction: true,
        safetyNote: 'Visually confirm no one touching patient'
      },
      {
        stepNumber: 8,
        description: 'Immediately resume CPR after shock',
        criticalAction: true
      }
    ],
    complications: ['Shock to bystander', 'Burns from poor pad contact', 'Failure to shock VF/VT'],
    successCriteria: ['Successful rhythm analysis', 'Appropriate shock delivery', 'Return of pulse'],
    protocolReference: 'Cardiac Arrest Protocol'
  },
  {
    id: 'spinal-immobilization',
    name: 'Spinal Immobilization',
    description: 'Immobilization of the spine to prevent further injury',
    certificationLevel: 'EMT',
    category: 'Trauma Management',
    difficulty: 'Intermediate',
    equipment: ['Backboard', 'Cervical collar', 'Head blocks', 'Straps', 'Blankets/padding'],
    indications: ['Suspected spinal injury', 'Altered mental status with trauma', 'Neurological deficits'],
    contraindications: ['Life-threatening conditions requiring immediate movement'],
    trainingHours: 8,
    steps: [
      {
        stepNumber: 1,
        description: 'Maintain manual in-line spinal stabilization',
        criticalAction: true,
        safetyNote: 'Hold head in neutral position throughout procedure'
      },
      {
        stepNumber: 2,
        description: 'Apply appropriately sized cervical collar',
        criticalAction: true,
        equipmentNeeded: ['Cervical collar']
      },
      {
        stepNumber: 3,
        description: 'Position backboard and prepare for transfer',
        criticalAction: true,
        equipmentNeeded: ['Backboard', 'Straps']
      },
      {
        stepNumber: 4,
        description: 'Log roll patient onto backboard using team approach',
        criticalAction: true,
        safetyNote: 'Team leader controls head and neck'
      },
      {
        stepNumber: 5,
        description: 'Secure patient to backboard with straps',
        criticalAction: true,
        safetyNote: 'Chest, hips, and legs - avoid pressure on abdomen'
      },
      {
        stepNumber: 6,
        description: 'Secure head with head blocks and tape',
        criticalAction: true,
        equipmentNeeded: ['Head blocks', 'Tape']
      },
      {
        stepNumber: 7,
        description: 'Reassess neurological function',
        criticalAction: true
      }
    ],
    complications: ['Pressure sores', 'Respiratory compromise', 'Further spinal injury'],
    successCriteria: ['Maintained spinal alignment', 'Secure immobilization', 'No neurological deterioration'],
    protocolReference: 'Spinal Trauma Protocol'
  },
  {
    id: 'glucose-administration',
    name: 'Oral Glucose Administration',
    description: 'Administration of oral glucose for conscious hypoglycemic patients',
    certificationLevel: 'EMT',
    category: 'Medical Interventions',
    difficulty: 'Basic',
    equipment: ['Oral glucose tube', 'Tongue depressor', 'Glucometer', 'Test strips'],
    indications: ['Conscious patient with hypoglycemia', 'BGL <70 mg/dL with symptoms'],
    contraindications: ['Unconscious patient', 'Unable to swallow', 'Vomiting'],
    trainingHours: 2,
    steps: [
      {
        stepNumber: 1,
        description: 'Confirm hypoglycemia with glucometer reading',
        criticalAction: true,
        equipmentNeeded: ['Glucometer', 'Test strips']
      },
      {
        stepNumber: 2,
        description: 'Ensure patient is conscious and able to swallow',
        criticalAction: true,
        safetyNote: 'Patient must be alert enough to manage secretions'
      },
      {
        stepNumber: 3,
        description: 'Open oral glucose tube and squeeze onto tongue depressor',
        criticalAction: false,
        equipmentNeeded: ['Oral glucose tube', 'Tongue depressor']
      },
      {
        stepNumber: 4,
        description: 'Place glucose between cheek and gum',
        criticalAction: true,
        safetyNote: 'Avoid placing too far back to prevent choking'
      },
      {
        stepNumber: 5,
        description: 'Encourage patient to swallow when able',
        criticalAction: false
      },
      {
        stepNumber: 6,
        description: 'Recheck blood glucose in 15 minutes',
        criticalAction: true
      }
    ],
    complications: ['Aspiration', 'Choking', 'Inadequate absorption'],
    successCriteria: ['Improved blood glucose level', 'Improved mental status', 'No aspiration'],
    protocolReference: 'Diabetic Emergency Protocol'
  },

  // AEMT Level Procedures
  {
    id: 'iv-cannulation',
    name: 'Intravenous Cannulation',
    description: 'Establishment of peripheral intravenous access',
    certificationLevel: 'AEMT',
    category: 'Vascular Access',
    difficulty: 'Intermediate',
    equipment: ['IV catheter', 'Tourniquet', 'Alcohol swabs', 'Tape', 'IV tubing', 'Saline flush'],
    indications: ['Need for IV medications', 'Fluid resuscitation', 'Blood sampling'],
    contraindications: ['Infection at site', 'AV fistula in extremity', 'Severe peripheral vascular disease'],
    trainingHours: 12,
    steps: [
      {
        stepNumber: 1,
        description: 'Select appropriate vein and catheter size',
        criticalAction: true,
        safetyNote: 'Choose largest vein that accommodates procedure needs'
      },
      {
        stepNumber: 2,
        description: 'Apply tourniquet 4-6 inches above insertion site',
        criticalAction: true,
        equipmentNeeded: ['Tourniquet']
      },
      {
        stepNumber: 3,
        description: 'Cleanse site with alcohol in circular motion',
        criticalAction: true,
        equipmentNeeded: ['Alcohol swabs']
      },
      {
        stepNumber: 4,
        description: 'Insert catheter at 15-30 degree angle with bevel up',
        criticalAction: true,
        safetyNote: 'Watch for blood flashback in hub'
      },
      {
        stepNumber: 5,
        description: 'Advance catheter and remove needle',
        criticalAction: true,
        safetyNote: 'Lower angle and advance plastic catheter'
      },
      {
        stepNumber: 6,
        description: 'Remove tourniquet and connect IV tubing',
        criticalAction: true,
        equipmentNeeded: ['IV tubing']
      },
      {
        stepNumber: 7,
        description: 'Secure catheter with tape and label',
        criticalAction: true,
        equipmentNeeded: ['Tape']
      },
      {
        stepNumber: 8,
        description: 'Assess IV patency with saline flush',
        criticalAction: true,
        equipmentNeeded: ['Saline flush']
      }
    ],
    complications: ['Phlebitis', 'Infiltration', 'Hematoma', 'Nerve injury', 'Arterial puncture'],
    successCriteria: ['Patent IV line', 'No infiltration', 'Appropriate flow rate'],
    protocolReference: 'Vascular Access Protocol'
  },
  {
    id: 'dextrose-administration',
    name: 'Dextrose 50% Administration',
    description: 'IV administration of concentrated dextrose for severe hypoglycemia',
    certificationLevel: 'AEMT',
    category: 'Medical Interventions',
    difficulty: 'Intermediate',
    equipment: ['D50W ampule', 'Large bore IV', 'Saline flush', 'Syringe'],
    indications: ['Severe hypoglycemia', 'Unconscious diabetic patient', 'BGL <50 mg/dL'],
    contraindications: ['No IV access', 'Hyperglycemia', 'Questionable IV patency'],
    trainingHours: 6,
    steps: [
      {
        stepNumber: 1,
        description: 'Confirm hypoglycemia with glucometer',
        criticalAction: true,
        safetyNote: 'Document baseline glucose level'
      },
      {
        stepNumber: 2,
        description: 'Ensure patent large-bore IV access',
        criticalAction: true,
        safetyNote: 'D50 is hyperosmolar and can cause tissue necrosis if infiltrated'
      },
      {
        stepNumber: 3,
        description: 'Draw up 25 grams (50 mL) D50W into syringe',
        criticalAction: true,
        equipmentNeeded: ['D50W ampule', 'Syringe']
      },
      {
        stepNumber: 4,
        description: 'Administer slowly over 2-3 minutes',
        criticalAction: true,
        safetyNote: 'Monitor IV site for infiltration during administration'
      },
      {
        stepNumber: 5,
        description: 'Flush IV line with normal saline',
        criticalAction: true,
        equipmentNeeded: ['Saline flush']
      },
      {
        stepNumber: 6,
        description: 'Reassess patient mental status and vital signs',
        criticalAction: true
      },
      {
        stepNumber: 7,
        description: 'Recheck blood glucose in 10-15 minutes',
        criticalAction: true
      }
    ],
    complications: ['Tissue necrosis from infiltration', 'Hyperglycemia', 'Cerebral edema'],
    successCriteria: ['Improved blood glucose', 'Improved mental status', 'No IV complications'],
    protocolReference: 'Diabetic Emergency Protocol'
  },
  {
    id: 'supraglottic-airway',
    name: 'Supraglottic Airway Insertion',
    description: 'Insertion of King LT or i-gel supraglottic airway device',
    certificationLevel: 'AEMT',
    category: 'Advanced Airway',
    difficulty: 'Intermediate',
    equipment: ['Supraglottic airway device', 'Lubricant', 'Syringe', 'BVM', 'Capnography'],
    indications: ['Failed BVM ventilation', 'Prolonged ventilation needed', 'Cardiac arrest'],
    contraindications: ['Conscious patient', 'Intact gag reflex', 'Suspected airway obstruction'],
    trainingHours: 16,
    steps: [
      {
        stepNumber: 1,
        description: 'Select appropriate size device based on patient weight',
        criticalAction: true,
        safetyNote: 'Size 3 for small adults, Size 4 for average adults, Size 5 for large adults'
      },
      {
        stepNumber: 2,
        description: 'Pre-oxygenate patient with BVM',
        criticalAction: true,
        equipmentNeeded: ['BVM']
      },
      {
        stepNumber: 3,
        description: 'Lubricate device and check cuff integrity',
        criticalAction: true,
        equipmentNeeded: ['Lubricant', 'Syringe']
      },
      {
        stepNumber: 4,
        description: 'Position patient with head in sniffing position',
        criticalAction: true
      },
      {
        stepNumber: 5,
        description: 'Insert device following natural curve of airway',
        criticalAction: true,
        safetyNote: 'Insert until base of connector aligns with teeth'
      },
      {
        stepNumber: 6,
        description: 'Inflate cuff with recommended volume',
        criticalAction: true,
        safetyNote: 'Usually 60-80 mL for adult sizes'
      },
      {
        stepNumber: 7,
        description: 'Confirm placement with capnography and chest rise',
        criticalAction: true,
        equipmentNeeded: ['Capnography']
      },
      {
        stepNumber: 8,
        description: 'Secure device and continue ventilation',
        criticalAction: true
      }
    ],
    complications: ['Esophageal placement', 'Laryngospasm', 'Aspiration', 'Gastric distension'],
    successCriteria: ['End-tidal CO2 present', 'Bilateral breath sounds', 'Appropriate chest rise'],
    protocolReference: 'Advanced Airway Protocol'
  },
  {
    id: 'cpap-application',
    name: 'CPAP Application',
    description: 'Application of continuous positive airway pressure for respiratory distress',
    certificationLevel: 'AEMT',
    category: 'Respiratory Support',
    difficulty: 'Intermediate',
    equipment: ['CPAP device', 'Appropriate mask', 'Oxygen source', 'Pressure valve'],
    indications: ['Pulmonary edema', 'COPD exacerbation', 'Sleep apnea', 'Respiratory failure'],
    contraindications: ['Pneumothorax', 'Facial trauma', 'Vomiting', 'Inability to cooperate'],
    trainingHours: 8,
    steps: [
      {
        stepNumber: 1,
        description: 'Assess patient for CPAP candidacy',
        criticalAction: true,
        safetyNote: 'Patient must be alert and cooperative'
      },
      {
        stepNumber: 2,
        description: 'Select appropriate mask size',
        criticalAction: true,
        equipmentNeeded: ['Appropriate mask']
      },
      {
        stepNumber: 3,
        description: 'Connect CPAP device to oxygen source',
        criticalAction: true,
        equipmentNeeded: ['CPAP device', 'Oxygen source']
      },
      {
        stepNumber: 4,
        description: 'Set initial pressure to 5 cm H2O',
        criticalAction: true,
        equipmentNeeded: ['Pressure valve']
      },
      {
        stepNumber: 5,
        description: 'Apply mask and secure with straps',
        criticalAction: true,
        safetyNote: 'Ensure good seal without over-tightening'
      },
      {
        stepNumber: 6,
        description: 'Gradually increase pressure to 8-10 cm H2O',
        criticalAction: true,
        safetyNote: 'Monitor patient tolerance and vital signs'
      },
      {
        stepNumber: 7,
        description: 'Monitor for improvement in work of breathing',
        criticalAction: true
      }
    ],
    complications: ['Pneumothorax', 'Gastric distension', 'Mask intolerance', 'Hypotension'],
    successCriteria: ['Improved work of breathing', 'Improved oxygen saturation', 'Patient tolerance'],
    protocolReference: 'Respiratory Distress Protocol'
  },

  // Paramedic Level Procedures
  {
    id: 'endotracheal-intubation',
    name: 'Endotracheal Intubation',
    description: 'Direct laryngoscopy and endotracheal tube placement',
    certificationLevel: 'Paramedic',
    category: 'Advanced Airway',
    difficulty: 'Advanced',
    equipment: ['Laryngoscope', 'ET tubes', 'Stylet', 'BVM', 'Capnography', 'Magill forceps'],
    indications: ['Respiratory arrest', 'Failed airway', 'Prolonged ventilation', 'Airway protection'],
    contraindications: ['Severe facial trauma', 'Suspected C-spine injury (relative)'],
    trainingHours: 40,
    steps: [
      {
        stepNumber: 1,
        description: 'Pre-oxygenate patient for 3-5 minutes',
        criticalAction: true,
        equipmentNeeded: ['BVM'],
        safetyNote: 'Achieve oxygen saturation >95% before attempt'
      },
      {
        stepNumber: 2,
        description: 'Select appropriate ET tube size and check equipment',
        criticalAction: true,
        equipmentNeeded: ['ET tubes', 'Laryngoscope'],
        safetyNote: 'Adult male 8-8.5mm, adult female 7.5-8mm'
      },
      {
        stepNumber: 3,
        description: 'Position patient in sniffing position',
        criticalAction: true,
        safetyNote: 'Align oral, pharyngeal, and laryngeal axes'
      },
      {
        stepNumber: 4,
        description: 'Insert laryngoscope blade and visualize vocal cords',
        criticalAction: true,
        safetyNote: 'Lift up and forward, do not rock or pry'
      },
      {
        stepNumber: 5,
        description: 'Pass ET tube through vocal cords under direct visualization',
        criticalAction: true,
        safetyNote: 'Watch tube pass through cords, advance 1-2 cm past cords'
      },
      {
        stepNumber: 6,
        description: 'Remove laryngoscope and stylet, inflate cuff',
        criticalAction: true,
        safetyNote: 'Inflate with 5-10 mL air until minimal leak'
      },
      {
        stepNumber: 7,
        description: 'Confirm placement with capnography and auscultation',
        criticalAction: true,
        equipmentNeeded: ['Capnography'],
        safetyNote: 'Must have end-tidal CO2 and bilateral breath sounds'
      },
      {
        stepNumber: 8,
        description: 'Secure tube and document depth at teeth',
        criticalAction: true
      }
    ],
    complications: ['Esophageal intubation', 'Right mainstem intubation', 'Aspiration', 'Dental trauma'],
    successCriteria: ['End-tidal CO2 present', 'Bilateral equal breath sounds', 'Fogging in tube'],
    protocolReference: 'Advanced Airway Protocol'
  },
  {
    id: 'needle-cricothyrotomy',
    name: 'Needle Cricothyrotomy',
    description: 'Emergency surgical airway through cricothyroid membrane',
    certificationLevel: 'Paramedic',
    category: 'Surgical Airway',
    difficulty: 'Advanced',
    equipment: ['Large bore IV catheter', 'Syringe', 'Jet ventilator', 'Scalpel'],
    indications: ['Complete airway obstruction', 'Failed intubation', 'Severe facial trauma'],
    contraindications: ['Laryngeal trauma', 'Infection at site', 'Coagulopathy'],
    trainingHours: 20,
    steps: [
      {
        stepNumber: 1,
        description: 'Identify cricothyroid membrane by palpation',
        criticalAction: true,
        safetyNote: 'Feel for depression between thyroid and cricoid cartilage'
      },
      {
        stepNumber: 2,
        description: 'Stabilize thyroid cartilage with non-dominant hand',
        criticalAction: true
      },
      {
        stepNumber: 3,
        description: 'Insert 14G catheter at 45-degree angle caudally',
        criticalAction: true,
        equipmentNeeded: ['Large bore IV catheter'],
        safetyNote: 'Advance while aspirating until air is obtained'
      },
      {
        stepNumber: 4,
        description: 'Remove needle and advance catheter',
        criticalAction: true,
        safetyNote: 'Confirm placement by aspirating air easily'
      },
      {
        stepNumber: 5,
        description: 'Connect to jet ventilator or BVM adapter',
        criticalAction: true,
        equipmentNeeded: ['Jet ventilator']
      },
      {
        stepNumber: 6,
        description: 'Begin ventilation with appropriate pressure',
        criticalAction: true,
        safetyNote: 'Use 1 second on, 4 seconds off pattern'
      }
    ],
    complications: ['Hemorrhage', 'Subcutaneous emphysema', 'Pneumothorax', 'Esophageal perforation'],
    successCriteria: ['Easy air aspiration', 'Chest rise with ventilation', 'Improved oxygenation'],
    protocolReference: 'Emergency Surgical Airway Protocol'
  },
  {
    id: 'chest-decompression',
    name: 'Needle Chest Decompression',
    description: 'Emergency decompression of tension pneumothorax',
    certificationLevel: 'Paramedic',
    category: 'Emergency Procedures',
    difficulty: 'Advanced',
    equipment: ['Large bore catheter', 'Syringe', 'Antiseptic', 'One-way valve'],
    indications: ['Tension pneumothorax', 'Severe respiratory distress with decreased breath sounds'],
    contraindications: ['Simple pneumothorax', 'Pleural infection'],
    trainingHours: 12,
    steps: [
      {
        stepNumber: 1,
        description: 'Identify second intercostal space, midclavicular line',
        criticalAction: true,
        safetyNote: 'Feel for space below second rib on affected side'
      },
      {
        stepNumber: 2,
        description: 'Cleanse site with antiseptic',
        criticalAction: true,
        equipmentNeeded: ['Antiseptic']
      },
      {
        stepNumber: 3,
        description: 'Insert 14G catheter perpendicular to chest wall',
        criticalAction: true,
        equipmentNeeded: ['Large bore catheter'],
        safetyNote: 'Insert just above third rib to avoid vessels'
      },
      {
        stepNumber: 4,
        description: 'Advance until pleural space entered (rush of air)',
        criticalAction: true,
        safetyNote: 'Listen for hissing sound indicating pressure release'
      },
      {
        stepNumber: 5,
        description: 'Remove needle, leave catheter in place',
        criticalAction: true
      },
      {
        stepNumber: 6,
        description: 'Attach one-way valve or finger cut from glove',
        criticalAction: true,
        equipmentNeeded: ['One-way valve']
      },
      {
        stepNumber: 7,
        description: 'Reassess breath sounds and respiratory status',
        criticalAction: true
      }
    ],
    complications: ['Hemothorax', 'Pneumothorax', 'Injury to intercostal vessels', 'Ineffective decompression'],
    successCriteria: ['Rush of air heard', 'Improved breath sounds', 'Improved respiratory status'],
    protocolReference: 'Chest Trauma Protocol'
  },
  {
    id: 'synchronized-cardioversion',
    name: 'Synchronized Cardioversion',
    description: 'Electrical conversion of unstable tachyarrhythmias',
    certificationLevel: 'Paramedic',
    category: 'Cardiac Procedures',
    difficulty: 'Advanced',
    equipment: ['Defibrillator/monitor', 'Pads/paddles', 'Sedation medication', 'IV access'],
    indications: ['Unstable SVT', 'Unstable atrial fibrillation', 'Unstable VT with pulse'],
    contraindications: ['Stable rhythms', 'Digitalis toxicity', 'No IV access for sedation'],
    trainingHours: 16,
    steps: [
      {
        stepNumber: 1,
        description: 'Confirm unstable rhythm and hemodynamic compromise',
        criticalAction: true,
        safetyNote: 'Ensure rhythm is truly unstable before proceeding'
      },
      {
        stepNumber: 2,
        description: 'Establish IV access and consider sedation',
        criticalAction: true,
        equipmentNeeded: ['IV access', 'Sedation medication'],
        safetyNote: 'Use midazolam 1-2 mg IV if patient conscious'
      },
      {
        stepNumber: 3,
        description: 'Apply pads/paddles in appropriate positions',
        criticalAction: true,
        equipmentNeeded: ['Pads/paddles']
      },
      {
        stepNumber: 4,
        description: 'Set energy level based on rhythm',
        criticalAction: true,
        safetyNote: 'SVT: 50-100J, A-fib: 120-200J, VT: 100J'
      },
      {
        stepNumber: 5,
        description: 'Activate sync mode on defibrillator',
        criticalAction: true,
        safetyNote: 'Confirm sync markers appear on QRS complexes'
      },
      {
        stepNumber: 6,
        description: 'Charge defibrillator and ensure area clear',
        criticalAction: true,
        safetyNote: 'Call "CLEAR" and visually confirm'
      },
      {
        stepNumber: 7,
        description: 'Deliver synchronized shock',
        criticalAction: true,
        safetyNote: 'May need to hold buttons until shock delivered'
      },
      {
        stepNumber: 8,
        description: 'Reassess rhythm and patient status',
        criticalAction: true
      }
    ],
    complications: ['Ventricular fibrillation', 'Asystole', 'Burns', 'Embolization'],
    successCriteria: ['Conversion to stable rhythm', 'Improved hemodynamics', 'Improved mental status'],
    protocolReference: 'Tachyarrhythmia Protocol'
  },
  {
    id: 'central-line-access',
    name: 'Central Venous Access',
    description: 'Placement of central venous catheter for emergency access',
    certificationLevel: 'Paramedic',
    category: 'Advanced Vascular Access',
    difficulty: 'Advanced',
    equipment: ['Central line kit', 'Ultrasound', 'Sterile drapes', 'Antiseptic', 'Suture'],
    indications: ['Failed peripheral access', 'Need for large volume resuscitation', 'Drug administration'],
    contraindications: ['Infection at site', 'Coagulopathy', 'Anatomical abnormalities'],
    trainingHours: 30,
    steps: [
      {
        stepNumber: 1,
        description: 'Position patient and identify landmarks',
        criticalAction: true,
        safetyNote: 'Use ultrasound guidance when available'
      },
      {
        stepNumber: 2,
        description: 'Don sterile gown, gloves, and prepare sterile field',
        criticalAction: true,
        equipmentNeeded: ['Sterile drapes']
      },
      {
        stepNumber: 3,
        description: 'Cleanse site with antiseptic solution',
        criticalAction: true,
        equipmentNeeded: ['Antiseptic']
      },
      {
        stepNumber: 4,
        description: 'Anesthetize skin with lidocaine',
        criticalAction: true,
        safetyNote: 'Use 1-2% lidocaine for local anesthesia'
      },
      {
        stepNumber: 5,
        description: 'Insert introducer needle at appropriate angle',
        criticalAction: true,
        safetyNote: 'Aspirate during advancement until blood return'
      },
      {
        stepNumber: 6,
        description: 'Insert guidewire through needle',
        criticalAction: true,
        safetyNote: 'Never force wire, should pass easily'
      },
      {
        stepNumber: 7,
        description: 'Remove needle and insert dilator/catheter',
        criticalAction: true,
        safetyNote: 'Make small skin incision if needed'
      },
      {
        stepNumber: 8,
        description: 'Remove guidewire and confirm blood return',
        criticalAction: true
      },
      {
        stepNumber: 9,
        description: 'Secure catheter and obtain chest X-ray',
        criticalAction: true,
        equipmentNeeded: ['Suture']
      }
    ],
    complications: ['Pneumothorax', 'Hemothorax', 'Arterial puncture', 'Air embolism', 'Infection'],
    successCriteria: ['Good blood return', 'No complications', 'Appropriate catheter position on X-ray'],
    protocolReference: 'Central Venous Access Protocol'
  }
];

export const proceduresByLevel = {
  EMT: certificationProcedures.filter(proc => proc.certificationLevel === 'EMT'),
  AEMT: certificationProcedures.filter(proc => proc.certificationLevel === 'AEMT'),
  Paramedic: certificationProcedures.filter(proc => proc.certificationLevel === 'Paramedic')
};

export const proceduresByCategory = {
  'Airway Management': certificationProcedures.filter(proc => proc.category === 'Airway Management'),
  'Advanced Airway': certificationProcedures.filter(proc => proc.category === 'Advanced Airway'),
  'Vascular Access': certificationProcedures.filter(proc => proc.category === 'Vascular Access'),
  'Cardiac Procedures': certificationProcedures.filter(proc => proc.category === 'Cardiac Procedures'),
  'Emergency Procedures': certificationProcedures.filter(proc => proc.category === 'Emergency Procedures'),
  'Medical Interventions': certificationProcedures.filter(proc => proc.category === 'Medical Interventions'),
  'Trauma Management': certificationProcedures.filter(proc => proc.category === 'Trauma Management')
};