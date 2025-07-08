// Patient Assessment Data from Chapter 10
export interface AssessmentStep {
  id: string;
  title: string;
  description: string;
  category: 'scene-size-up' | 'primary' | 'history' | 'secondary' | 'reassessment';
  priority: 'critical' | 'high' | 'medium' | 'low';
  timeLimit?: number; // in minutes
  items: AssessmentItem[];
}

export interface AssessmentItem {
  id: string;
  text: string;
  critical?: boolean;
  mnemonic?: string;
  details?: string;
}

export const patientAssessmentSteps: AssessmentStep[] = [
  {
    id: "scene-size-up",
    title: "Scene Size-Up",
    description: "Checking the conditions where you will work and ensuring scene safety",
    category: "scene-size-up",
    priority: "critical",
    timeLimit: 2,
    items: [
      {
        id: "scene-safety",
        text: "Ensure scene safety - identify and mitigate hazards",
        critical: true,
        details: "Environmental, physical, chemical, electrical, water, fire, explosion, or violence hazards"
      },
      {
        id: "standard-precautions",
        text: "Take Standard Precautions and don appropriate PPE",
        critical: true,
        details: "At minimum wear gloves before patient contact. Consider glasses and mask."
      },
      {
        id: "moi-noi",
        text: "Determine Mechanism of Injury (MOI) or Nature of Illness (NOI)",
        critical: false,
        details: "Trauma injuries from physical force vs medical conditions"
      },
      {
        id: "patient-count",
        text: "Determine number of patients accurately",
        critical: true,
        details: "For multiple patients, initiate incident command system and triage"
      },
      {
        id: "additional-resources",
        text: "Consider need for additional resources",
        critical: false,
        details: "More ambulances, police, helicopter, fire, ALS, air medical transport"
      }
    ]
  },
  {
    id: "primary-assessment",
    title: "Primary Assessment",
    description: "Find and treat immediate life threats - ABCs",
    category: "primary",
    priority: "critical",
    timeLimit: 5,
    items: [
      {
        id: "general-impression",
        text: "Form general impression of patient",
        critical: true,
        details: "Age, sex, race, distress level, overall appearance, position"
      },
      {
        id: "chief-complaint",
        text: "Identify chief complaint",
        critical: true,
        details: "Address patient by name, introduce yourself, ask about main concern"
      },
      {
        id: "loc-assessment",
        text: "Assess Level of Consciousness using AVPU",
        critical: true,
        mnemonic: "AVPU",
        details: "Alert, Verbal, Painful, Unresponsive"
      },
      {
        id: "mental-status",
        text: "Check orientation (Person, Place, Time, Event)",
        critical: false,
        details: "A&Ox4 = Alert and Oriented times four"
      },
      {
        id: "airway-assessment",
        text: "Assess and manage Airway (A)",
        critical: true,
        details: "Check for obstruction, ensure patency. Use jaw-thrust if trauma suspected"
      },
      {
        id: "breathing-assessment",
        text: "Assess Breathing adequacy (B)",
        critical: true,
        details: "Rate, depth, effort. SpO2 goal 94-99%. Provide ventilation or oxygen as needed"
      },
      {
        id: "circulation-assessment",
        text: "Assess Circulation (C) - pulse, skin, bleeding",
        critical: true,
        details: "Radial pulse (responsive >1yr), carotid (unresponsive >1yr), brachial (<1yr)"
      },
      {
        id: "rapid-scan",
        text: "Perform rapid scan (60-90 seconds)",
        critical: true,
        details: "Quick scan for life-threatening injuries, not full physical exam"
      },
      {
        id: "priority-determination",
        text: "Determine transport priority",
        critical: true,
        details: "High priority conditions require immediate transport"
      }
    ]
  },
  {
    id: "history-taking",
    title: "History Taking",
    description: "Gather patient history and present illness details",
    category: "history",
    priority: "high",
    timeLimit: 10,
    items: [
      {
        id: "opqrst",
        text: "Use OPQRST for present illness history",
        critical: false,
        mnemonic: "OPQRST",
        details: "Onset, Provocation, Quality, Region/Radiation, Severity (0-10), Timing"
      },
      {
        id: "sample-history",
        text: "Obtain SAMPLE history",
        critical: false,
        mnemonic: "SAMPLE",
        details: "Signs/Symptoms, Allergies, Medications, Past history, Last intake, Events"
      },
      {
        id: "pertinent-negatives",
        text: "Identify pertinent negatives",
        critical: false,
        details: "Negative findings that rule out certain conditions"
      },
      {
        id: "medical-alert",
        text: "Check for medical alert jewelry or cards",
        critical: false,
        details: "Important medical history information"
      }
    ]
  },
  {
    id: "secondary-assessment",
    title: "Secondary Assessment",
    description: "Systematic physical examination using D-CAP BTLS",
    category: "secondary",
    priority: "medium",
    timeLimit: 15,
    items: [
      {
        id: "systematic-exam",
        text: "Perform systematic physical examination",
        critical: false,
        details: "Inspect, palpate, auscultate affected areas"
      },
      {
        id: "dcap-btls",
        text: "Use D-CAP BTLS mnemonic for trauma assessment",
        critical: false,
        mnemonic: "D-CAP BTLS",
        details: "Deformities, Contusions, Abrasions, Punctures, Burns, Tenderness, Lacerations, Swelling"
      },
      {
        id: "bilateral-comparison",
        text: "Compare bilateral findings",
        critical: false,
        details: "Compare one side of body to the other"
      },
      {
        id: "focused-assessment",
        text: "Focus on chief complaint area",
        critical: false,
        details: "Target examination based on patient's primary concern"
      }
    ]
  },
  {
    id: "reassessment",
    title: "Reassessment",
    description: "Ongoing monitoring and re-evaluation during transport",
    category: "reassessment",
    priority: "high",
    timeLimit: 5,
    items: [
      {
        id: "repeat-primary",
        text: "Repeat primary assessment components",
        critical: true,
        details: "Re-check ABCs, mental status, vital signs"
      },
      {
        id: "intervention-effectiveness",
        text: "Assess effectiveness of interventions",
        critical: true,
        details: "Are treatments working? Any changes needed?"
      },
      {
        id: "trending",
        text: "Note trends in patient condition",
        critical: true,
        details: "Is patient improving, stable, or deteriorating?"
      }
    ]
  }
];

export const highPriorityConditions = [
  "Unresponsive",
  "Difficulty breathing", 
  "Uncontrolled bleeding",
  "Altered level of consciousness",
  "Severe chest pain",
  "Pale skin or signs of poor perfusion",
  "Complicated childbirth",
  "Severe pain anywhere"
];

export const hazardTypes = [
  { type: "Environmental", examples: ["Weather", "Terrain"] },
  { type: "Physical", examples: ["Traffic", "Unstable structures"] },
  { type: "Chemical", examples: ["Hazardous materials"] },
  { type: "Electrical", examples: ["Downed power lines"] },
  { type: "Water", examples: ["Drowning risk"] },
  { type: "Fire", examples: ["Flames", "Smoke"] },
  { type: "Explosions", examples: ["Blast zones"] },
  { type: "Physical Violence", examples: ["Violent patients", "Angry crowds"] }
];

export const goldenHourPhases = [
  {
    phase: "Discovery & EMS Call",
    timeframe: "First 20 minutes",
    description: "Accident discovery and calling EMS"
  },
  {
    phase: "Platinum 10 Minutes", 
    timeframe: "10 minutes on scene",
    description: "Initial assessment, care, and patient preparation"
  },
  {
    phase: "Transport & Hospital",
    timeframe: "Remaining time",
    description: "EMS transport and initial hospital care"
  }
];