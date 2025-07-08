import type { Protocol } from "@shared/schema";

export const protocolsData: Omit<Protocol, 'id' | 'lastUpdated'>[] = [
  {
    name: "Chest Pain Assessment",
    category: "cardiac",
    severity: "critical",
    description: "Comprehensive chest pain evaluation and treatment protocol for suspected acute coronary syndrome",
    steps: [
      {
        step: 1,
        title: "Initial Assessment",
        items: [
          "Ensure scene safety and BSI precautions",
          "Primary survey (ABCDE approach)",
          "Obtain vital signs including SpO2",
          "Apply cardiac monitor and obtain 12-lead ECG",
          "Assess pain using OPQRST method",
          "Establish IV access if indicated"
        ]
      },
      {
        step: 2,
        title: "Risk Stratification",
        items: [
          "Calculate HEART score for risk assessment",
          "Identify STEMI patterns on ECG",
          "Assess for high-risk features",
          "Consider differential diagnosis",
          "Evaluate contraindications for treatment",
          "Determine appropriate destination facility"
        ]
      },
      {
        step: 3,
        title: "Treatment & Transport",
        items: [
          "Administer oxygen if SpO2 < 94%",
          "Give aspirin 324mg chewed (if not contraindicated)",
          "Consider nitroglycerin per protocol",
          "Provide pain management as appropriate",
          "Prepare for potential complications",
          "Transport to appropriate facility with notification"
        ]
      }
    ],
    medications: ["aspirin", "nitroglycerin", "morphine", "oxygen"],
    guidelines: "AHA/ACC 2021 Guidelines"
  },
  {
    name: "Stroke Assessment (FAST)",
    category: "neurological",
    severity: "critical",
    description: "Rapid stroke identification and management protocol using FAST assessment tools",
    steps: [
      {
        step: 1,
        title: "Rapid Assessment",
        items: [
          "Perform FAST assessment (Face, Arms, Speech, Time)",
          "Document exact time of symptom onset",
          "Check blood glucose level",
          "Obtain baseline vital signs and neurological assessment",
          "Assess for trauma or fall injuries"
        ]
      },
      {
        step: 2,
        title: "Stroke Scale Evaluation",
        items: [
          "Complete Cincinnati Prehospital Stroke Scale",
          "Assess for Large Vessel Occlusion (LVO) signs",
          "Document NIH Stroke Scale if trained",
          "Identify stroke mimics and exclusions",
          "Evaluate for thrombolytic contraindications"
        ]
      },
      {
        step: 3,
        title: "Management & Transport",
        items: [
          "Maintain airway and oxygenation",
          "Keep head elevated 30 degrees",
          "Avoid excessive IV fluids",
          "Transport to stroke center within window",
          "Provide early notification to receiving facility",
          "Continuous monitoring during transport"
        ]
      }
    ],
    medications: ["dextrose", "thiamine"],
    guidelines: "AHA/ASA 2019 Guidelines"
  },
  {
    name: "Major Trauma Protocol",
    category: "trauma",
    severity: "critical",
    description: "Systematic approach to major trauma patient assessment and management",
    steps: [
      {
        step: 1,
        title: "Primary Survey (ABCDE)",
        items: [
          "A - Airway with C-spine protection",
          "B - Breathing and ventilation assessment",
          "C - Circulation with hemorrhage control",
          "D - Disability (neurological assessment)",
          "E - Exposure and environmental control",
          "Identify and treat life-threatening injuries"
        ]
      },
      {
        step: 2,
        title: "Secondary Survey",
        items: [
          "Head-to-toe examination",
          "Vital signs and focused assessments",
          "Pain assessment and management",
          "Mechanism of injury evaluation",
          "History and allergies (SAMPLE)",
          "Reassess primary survey findings"
        ]
      },
      {
        step: 3,
        title: "Treatment & Transport",
        items: [
          "Immobilization and splinting as needed",
          "IV access and fluid resuscitation",
          "Pain management per protocol",
          "Continuous monitoring of vital signs",
          "Rapid transport to trauma center",
          "Early notification and report to facility"
        ]
      }
    ],
    medications: ["normal_saline", "morphine", "fentanyl"],
    guidelines: "ATLS 10th Edition"
  },
  {
    name: "Respiratory Distress Management",
    category: "respiratory",
    severity: "urgent",
    description: "Assessment and treatment protocol for patients with acute respiratory distress",
    steps: [
      {
        step: 1,
        title: "Initial Assessment",
        items: [
          "Assess work of breathing and respiratory rate",
          "Evaluate oxygen saturation and skin color",
          "Perform lung auscultation",
          "Check for accessory muscle use",
          "Obtain peak flow if able (asthma/COPD)",
          "Position patient for optimal breathing"
        ]
      },
      {
        step: 2,
        title: "Identify Underlying Cause",
        items: [
          "Differentiate between cardiac vs pulmonary causes",
          "Assess for pneumothorax or tension pneumothorax",
          "Evaluate for pulmonary edema",
          "Consider asthma, COPD, or allergic reaction",
          "Check for foreign body obstruction",
          "Review medication history and allergies"
        ]
      },
      {
        step: 3,
        title: "Treatment Interventions",
        items: [
          "Administer oxygen per protocol",
          "Bronchodilator therapy if indicated",
          "CPAP for pulmonary edema",
          "Epinephrine for anaphylaxis",
          "IV access and medications as appropriate",
          "Transport with continuous monitoring"
        ]
      }
    ],
    medications: ["albuterol", "ipratropium", "epinephrine", "furosemide"],
    guidelines: "AHA/ERC 2020 Guidelines"
  },
  {
    name: "Cardiac Arrest (ACLS)",
    category: "cardiac",
    severity: "critical",
    description: "Advanced Cardiac Life Support protocol for cardiac arrest management",
    steps: [
      {
        step: 1,
        title: "Immediate Actions",
        items: [
          "Verify unresponsiveness and absence of pulse",
          "Begin high-quality CPR (30:2 ratio)",
          "Apply AED/monitor and analyze rhythm",
          "Ensure proper chest compression depth and rate",
          "Minimize interruptions in CPR",
          "Assign roles to team members"
        ]
      },
      {
        step: 2,
        title: "Rhythm Analysis & Treatment",
        items: [
          "Identify shockable vs non-shockable rhythms",
          "Defibrillate VF/VT with appropriate energy",
          "Administer epinephrine every 3-5 minutes",
          "Consider amiodarone for refractory VF/VT",
          "Treat reversible causes (H's and T's)",
          "Advanced airway management"
        ]
      },
      {
        step: 3,
        title: "Post-Resuscitation Care",
        items: [
          "Confirm return of spontaneous circulation",
          "Optimize ventilation and oxygenation",
          "Treat hypotension and arrhythmias",
          "Targeted temperature management",
          "Rapid transport to appropriate facility",
          "Continuous monitoring and reassessment"
        ]
      }
    ],
    medications: ["epinephrine", "amiodarone", "lidocaine", "atropine"],
    guidelines: "AHA ACLS 2020 Guidelines"
  }
];
