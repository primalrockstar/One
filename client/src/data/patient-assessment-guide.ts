export interface AssessmentPhase {
  id: string;
  name: string;
  order: number;
  description: string;
  keyPoints: string[];
  mnemonics?: Mnemonic[];
  timeframe?: string;
  priority: 'critical' | 'urgent' | 'routine';
}

export interface Mnemonic {
  acronym: string;
  fullName: string;
  breakdown: MnemonicItem[];
  usage: string;
}

export interface MnemonicItem {
  letter: string;
  word: string;
  description: string;
  examples?: string[];
}

// Scene Size-Up - PENMAN
export const penmanMnemonic: Mnemonic = {
  acronym: "PENMAN",
  fullName: "Scene Size-Up Assessment",
  usage: "Systematic approach to scene assessment for EMT safety and patient care planning",
  breakdown: [
    {
      letter: "P",
      word: "Personal, Partner, Patient Safety",
      description: "Priority order for safety assessment",
      examples: ["Check for hazards before approaching", "Ensure scene security", "Protect yourself first"]
    },
    {
      letter: "E",
      word: "Environmental Hazards",
      description: "Identify potential dangers on scene",
      examples: ["Traffic hazards", "Unstable structures", "Weather conditions", "Aggressive animals"]
    },
    {
      letter: "N",
      word: "Number of Patients",
      description: "Determine total patient count and resource needs",
      examples: ["Single patient", "Multiple casualties", "Mass casualty incident", "Need for additional ambulances"]
    },
    {
      letter: "M",
      word: "Mechanism of Injury / Nature of Illness",
      description: "Identify cause of injury or medical condition",
      examples: ["Fall from height", "Motor vehicle collision", "Chest pain", "Difficulty breathing"]
    },
    {
      letter: "A",
      word: "Additional Resources",
      description: "Determine need for extra help",
      examples: ["ALS intercept", "Fire department", "Police", "Helicopter transport"]
    },
    {
      letter: "N",
      word: "Need for Extrication/Spinal Immobilization",
      description: "Assess need for special procedures",
      examples: ["Vehicle entrapment", "C-spine precautions", "Technical rescue", "Rapid extraction"]
    }
  ]
};

// Level of Consciousness - AVPU
export const avpuMnemonic: Mnemonic = {
  acronym: "AVPU",
  fullName: "Level of Consciousness Assessment",
  usage: "Quick neurological assessment of patient responsiveness",
  breakdown: [
    {
      letter: "A",
      word: "Awake and Alert",
      description: "Patient's eyes are open, tracking, responsive to presence",
      examples: ["Following commands", "Making eye contact", "Oriented to surroundings"]
    },
    {
      letter: "V",
      word: "Verbal Stimuli",
      description: "Patient responds to verbal commands or calling their name",
      examples: ["Opens eyes to voice", "Responds when spoken to", "May be confused but responsive"]
    },
    {
      letter: "P",
      word: "Painful Stimuli",
      description: "Patient only responds to physical pain",
      examples: ["Sternal rub", "Trapezius pinch", "Peripheral pain response"]
    },
    {
      letter: "U",
      word: "Unresponsive",
      description: "No response to verbal or painful stimuli",
      examples: ["No reaction to pain", "No eye opening", "No verbal response"]
    }
  ]
};

// Circulation Assessment - COPS
export const copsMnemonic: Mnemonic = {
  acronym: "COPS",
  fullName: "Circulation Assessment",
  usage: "Systematic evaluation of patient's circulatory status",
  breakdown: [
    {
      letter: "C",
      word: "Capillary Refill",
      description: "Test peripheral perfusion by pressing nail bed",
      examples: ["<2 seconds normal", ">2 seconds delayed", "Indicates perfusion status"]
    },
    {
      letter: "O",
      word: "Obvious Signs of Bleeding",
      description: "Identify and control external hemorrhage",
      examples: ["Direct pressure", "Elevation", "Tourniquet if needed", "Pressure points"]
    },
    {
      letter: "P",
      word: "Pulse",
      description: "Assess heart rate, rhythm, and strength",
      examples: ["Radial pulse (conscious)", "Carotid pulse (unconscious)", "Rate and quality"]
    },
    {
      letter: "S",
      word: "Skin Signs",
      description: "Evaluate skin condition, temperature, moisture, color",
      examples: ["Normal: warm, dry, pink", "Shock: cool, pale, diaphoretic", "Fever: hot, flushed"]
    }
  ]
};

// Patient History - SAMPLE
export const sampleMnemonic: Mnemonic = {
  acronym: "SAMPLE",
  fullName: "Patient History Assessment",
  usage: "Comprehensive patient history gathering for medical decision making",
  breakdown: [
    {
      letter: "S",
      word: "Signs and Symptoms",
      description: "Objective observations and subjective complaints",
      examples: ["Chief complaint", "Associated symptoms", "Pain description", "Visual findings"]
    },
    {
      letter: "A",
      word: "Allergies",
      description: "Known allergies to medications, foods, or environmental factors",
      examples: ["Drug allergies", "Food allergies", "Environmental allergies", "Previous reactions"]
    },
    {
      letter: "M",
      word: "Medications",
      description: "Current medications, dosages, and compliance",
      examples: ["Prescription drugs", "Over-the-counter medications", "Herbal supplements", "Recent changes"]
    },
    {
      letter: "P",
      word: "Past Medical History",
      description: "Previous medical conditions, surgeries, hospitalizations",
      examples: ["Chronic conditions", "Previous surgeries", "Hospitalizations", "Family history"]
    },
    {
      letter: "L",
      word: "Last Oral Intake",
      description: "Time and content of last meal or drink",
      examples: ["Last meal time", "What was consumed", "Relevant for surgery", "Aspiration risk"]
    },
    {
      letter: "E",
      word: "Events Leading Up",
      description: "Circumstances and timeline of current episode",
      examples: ["What patient was doing", "Onset of symptoms", "Progression", "Precipitating factors"]
    }
  ]
};

// Pain Assessment - OPQRST
export const opqrstMnemonic: Mnemonic = {
  acronym: "OPQRST",
  fullName: "Pain Assessment",
  usage: "Detailed pain evaluation for medical patients",
  breakdown: [
    {
      letter: "O",
      word: "Onset",
      description: "When did the pain begin? Sudden or gradual?",
      examples: ["Sudden onset", "Gradual onset", "Related to activity", "Time of day"]
    },
    {
      letter: "P",
      word: "Provocation/Palliation",
      description: "What makes the pain better or worse?",
      examples: ["Movement worsens", "Rest improves", "Position changes", "Medications help"]
    },
    {
      letter: "Q",
      word: "Quality",
      description: "Description of pain character",
      examples: ["Sharp", "Dull", "Crushing", "Burning", "Stabbing", "Aching"]
    },
    {
      letter: "R",
      word: "Region/Radiation",
      description: "Location and spread of pain",
      examples: ["Point with one finger", "Radiates to arm", "Moves to back", "Localized vs diffuse"]
    },
    {
      letter: "S",
      word: "Severity",
      description: "Pain intensity on 1-10 scale",
      examples: ["0 = no pain", "10 = worst imaginable", "Functional impact", "Comparison to previous pain"]
    },
    {
      letter: "T",
      word: "Time/Timing",
      description: "Duration and pattern of pain",
      examples: ["Constant", "Intermittent", "Getting worse", "Comes and goes"]
    }
  ]
};

// Full Vitals - BELLS RP
export const bellsRpMnemonic: Mnemonic = {
  acronym: "BELLS RP",
  fullName: "Complete Vital Signs Assessment",
  usage: "Comprehensive vital signs evaluation during secondary assessment",
  breakdown: [
    {
      letter: "B",
      word: "Blood Pressure",
      description: "Manual auscultation of systolic and diastolic pressure",
      examples: ["Inflate cuff properly", "Listen for Korotkoff sounds", "Note first and last sounds", "Never estimate"]
    },
    {
      letter: "E",
      word: "Eyes (PERRL)",
      description: "Pupil assessment for neurological function",
      examples: ["Pupils Equal", "Round", "Reactive to Light", "Check size and response"]
    },
    {
      letter: "L",
      word: "Lung Sounds",
      description: "Auscultation of respiratory sounds",
      examples: ["Clear bilateral", "Wheezing", "Crackles", "Stridor", "Multiple locations"]
    },
    {
      letter: "L",
      word: "Level of Consciousness",
      description: "Recheck mental status and orientation",
      examples: ["Person, Place, Time, Event", "A&O x4", "Baseline comparison", "Changes from initial"]
    },
    {
      letter: "S",
      word: "Skin Signs",
      description: "Re-evaluate skin condition",
      examples: ["Color changes", "Temperature", "Moisture", "Perfusion status"]
    },
    {
      letter: "R",
      word: "Respirations",
      description: "Full 30-second respiratory assessment",
      examples: ["Rate (multiply by 2)", "Depth", "Effort", "Pattern", "12-20 normal adult"]
    },
    {
      letter: "P",
      word: "Pulse",
      description: "Complete pulse evaluation",
      examples: ["Full 30-second count", "Rate and rhythm", "Strength", "Regularity"]
    }
  ]
};

// Primary Assessment Phases
export const assessmentPhases: AssessmentPhase[] = [
  {
    id: "scene-size-up",
    name: "Scene Size-Up",
    order: 1,
    description: "Initial scene assessment focusing on safety and situational awareness",
    timeframe: "First 30-60 seconds",
    priority: "critical",
    keyPoints: [
      "Ensure scene safety before patient contact",
      "Use Standard Precautions and appropriate PPE",
      "Identify mechanism of injury or nature of illness",
      "Determine number of patients and need for additional resources",
      "Consider environmental hazards and extrication needs"
    ],
    mnemonics: [penmanMnemonic]
  },
  {
    id: "primary-assessment",
    name: "Primary Assessment",
    order: 2,
    description: "Rapid identification and treatment of life-threatening conditions",
    timeframe: "60-90 seconds",
    priority: "critical",
    keyPoints: [
      "Form general impression of patient condition",
      "Assess level of consciousness using AVPU",
      "Evaluate and manage airway patency",
      "Assess breathing adequacy and provide ventilatory support",
      "Check circulation and control major bleeding",
      "Perform rapid scan for life threats",
      "Determine transport priority"
    ],
    mnemonics: [avpuMnemonic, copsMnemonic]
  },
  {
    id: "history-taking",
    name: "History Taking",
    order: 3,
    description: "Detailed patient and illness history gathering",
    timeframe: "3-5 minutes",
    priority: "urgent",
    keyPoints: [
      "Obtain detailed chief complaint using OPQRST",
      "Gather complete SAMPLE history",
      "Document current medications and allergies",
      "Identify pertinent positives and negatives",
      "Consider special populations and sensitive topics"
    ],
    mnemonics: [sampleMnemonic, opqrstMnemonic]
  },
  {
    id: "secondary-assessment",
    name: "Secondary Assessment",
    order: 4,
    description: "Systematic physical examination and detailed vital signs",
    timeframe: "5-10 minutes",
    priority: "routine",
    keyPoints: [
      "Perform focused or comprehensive physical exam",
      "Use DCAP-BTLS for trauma assessment",
      "Obtain complete set of baseline vital signs",
      "Document objective findings",
      "Prepare for transport decisions"
    ],
    mnemonics: [bellsRpMnemonic]
  },
  {
    id: "reassessment",
    name: "Reassessment",
    order: 5,
    description: "Continuous monitoring and re-evaluation during transport",
    timeframe: "Every 5-15 minutes",
    priority: "urgent",
    keyPoints: [
      "Critical patients: reassess every 5 minutes",
      "Stable patients: reassess every 15 minutes",
      "Monitor response to treatments",
      "Watch for changes in condition",
      "Document trends and interventions"
    ]
  }
];

// High Priority Conditions for Transport
export const highPriorityConditions = [
  "Unresponsive or altered level of consciousness",
  "Difficulty breathing or respiratory distress",
  "Uncontrolled bleeding or signs of shock",
  "Severe chest pain or cardiac symptoms",
  "Pale skin or poor perfusion signs",
  "Complicated childbirth",
  "Severe pain anywhere",
  "Signs of stroke or neurological emergency",
  "Traumatic injuries with unstable vital signs",
  "Suspected internal bleeding"
];

// Golden Hour Concept
export const goldenHourPhases = [
  {
    phase: "Discovery and EMS Activation",
    timeframe: "First 20 minutes",
    description: "Time from incident occurrence to EMS dispatch",
    keyActions: ["Incident recognition", "911 call", "Dispatch", "Unit response"]
  },
  {
    phase: "Platinum 10 Minutes",
    timeframe: "10 minutes on scene",
    description: "Critical on-scene time for assessment and stabilization",
    keyActions: ["Primary assessment", "Life-saving interventions", "Package for transport", "Load and go"]
  },
  {
    phase: "Transport and Hospital Care",
    timeframe: "Remaining time to definitive care",
    description: "Rapid transport to appropriate facility",
    keyActions: ["Continuous monitoring", "Advanced interventions", "Hospital notification", "Definitive care"]
  }
];

export const patientAssessmentGuide = {
  phases: assessmentPhases,
  mnemonics: [penmanMnemonic, avpuMnemonic, copsMnemonic, sampleMnemonic, opqrstMnemonic, bellsRpMnemonic],
  highPriorityConditions,
  goldenHourPhases
};