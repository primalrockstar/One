export interface AssessmentTool {
  id: string;
  name: string;
  category: "Trauma" | "Medical" | "Neurological" | "Cardiac";
  description: string;
  steps: AssessmentStep[];
  criticalFindings: string[];
  mnemonics?: string;
}

export interface AssessmentStep {
  step: string;
  description: string;
  normalFindings?: string[];
  abnormalFindings?: string[];
  criticalActions?: string[];
}

// DCAP-BTLS Trauma Assessment
export const dcapBtlsAssessment: AssessmentTool = {
  id: "dcap-btls",
  name: "DCAP-BTLS Trauma Assessment",
  category: "Trauma",
  description: "Systematic trauma assessment using DCAP-BTLS mnemonic for comprehensive injury evaluation",
  mnemonics: "DCAP-BTLS = Deformities, Contusions, Abrasions, Punctures/Penetrations, Burns, Tenderness, Lacerations, Swelling",
  steps: [
    {
      step: "D - Deformities",
      description: "Look for abnormal shapes or positions of body parts",
      normalFindings: ["Normal anatomical alignment", "Symmetrical appearance"],
      abnormalFindings: ["Angulation of extremities", "Asymmetry", "Obvious fractures"],
      criticalActions: ["Immobilize suspected fractures", "Note mechanism of injury"]
    },
    {
      step: "C - Contusions",
      description: "Examine for bruising or discoloration",
      normalFindings: ["No bruising", "Normal skin color"],
      abnormalFindings: ["Ecchymosis", "Hematomas", "Pattern bruising"],
      criticalActions: ["Document pattern and location", "Consider internal injuries"]
    },
    {
      step: "A - Abrasions",
      description: "Check for scrapes or scratches on skin surface",
      normalFindings: ["Intact skin", "No surface wounds"],
      abnormalFindings: ["Road rash", "Scratches", "Superficial wounds"],
      criticalActions: ["Clean if time permits", "Cover to prevent infection"]
    },
    {
      step: "P - Punctures/Penetrations",
      description: "Look for holes or penetrating wounds",
      normalFindings: ["No penetrating wounds", "Intact skin barrier"],
      abnormalFindings: ["Stab wounds", "Gunshot wounds", "Impaled objects"],
      criticalActions: ["Do NOT remove impaled objects", "Control bleeding", "Stabilize objects"]
    },
    {
      step: "B - Burns",
      description: "Assess for thermal, chemical, or electrical burns",
      normalFindings: ["No burn injuries", "Normal skin appearance"],
      abnormalFindings: ["First/second/third degree burns", "Singed hair", "Chemical exposure"],
      criticalActions: ["Cool burns with sterile water", "Cover with sterile dressings", "Estimate body surface area"]
    },
    {
      step: "T - Tenderness",
      description: "Palpate for pain or sensitivity (patient response)",
      normalFindings: ["No tenderness", "Normal response to palpation"],
      abnormalFindings: ["Point tenderness", "Guarding", "Rebound tenderness"],
      criticalActions: ["Note location of pain", "Assess for internal injuries", "Handle gently"]
    },
    {
      step: "L - Lacerations",
      description: "Examine for cuts or tears in the skin",
      normalFindings: ["No lacerations", "Intact skin"],
      abnormalFindings: ["Deep cuts", "Jagged wounds", "Bleeding lacerations"],
      criticalActions: ["Control bleeding", "Assess depth", "Document size and location"]
    },
    {
      step: "S - Swelling",
      description: "Look for edema or swelling in tissues",
      normalFindings: ["No swelling", "Normal tissue appearance"],
      abnormalFindings: ["Localized swelling", "Generalized edema", "Joint effusion"],
      criticalActions: ["Elevate if possible", "Apply ice for acute injuries", "Monitor circulation"]
    }
  ],
  criticalFindings: [
    "Multiple deformities suggesting polytrauma",
    "Penetrating wounds to chest/abdomen",
    "Burns >15% BSA in adults, >10% in children",
    "Tenderness with hemodynamic instability",
    "Lacerations with active arterial bleeding",
    "Compartment syndrome signs"
  ]
};

// FAST Stroke Assessment
export const fastStrokeAssessment: AssessmentTool = {
  id: "fast-stroke",
  name: "FAST Stroke Assessment",
  category: "Neurological",
  description: "Rapid stroke screening tool to identify signs of acute cerebrovascular accident",
  mnemonics: "FAST = Face, Arms, Speech, Time",
  steps: [
    {
      step: "F - Face",
      description: "Assess for facial droop or asymmetry",
      normalFindings: ["Symmetrical smile", "Even facial movement", "Normal facial expression"],
      abnormalFindings: ["Facial droop on one side", "Asymmetrical smile", "Unable to show teeth evenly"],
      criticalActions: ["Ask patient to smile", "Look for drooping", "Note which side affected"]
    },
    {
      step: "A - Arms",
      description: "Test for arm weakness or drift",
      normalFindings: ["Both arms stay up equally", "Symmetrical strength", "No drift"],
      abnormalFindings: ["One arm drifts down", "Weakness on one side", "Unable to lift arm"],
      criticalActions: ["Have patient hold both arms up for 10 seconds", "Look for pronator drift", "Test grip strength"]
    },
    {
      step: "S - Speech",
      description: "Evaluate speech clarity and comprehension",
      normalFindings: ["Clear speech", "Normal comprehension", "Appropriate responses"],
      abnormalFindings: ["Slurred speech", "Difficulty finding words", "Unable to repeat phrases"],
      criticalActions: ["Ask patient to repeat simple phrase", "Assess comprehension", "Note speech patterns"]
    },
    {
      step: "T - Time",
      description: "Document time of symptom onset and current time",
      normalFindings: ["Clear timeline established", "Onset time documented"],
      abnormalFindings: ["Unknown onset time", "Symptoms worsening", "Delayed presentation"],
      criticalActions: ["Record last known normal time", "Note current time", "Calculate window for intervention"]
    }
  ],
  criticalFindings: [
    "Any positive FAST findings",
    "Altered level of consciousness",
    "Severe hypertension (>220/120)",
    "Blood glucose abnormalities",
    "Seizure activity",
    "Signs of increased intracranial pressure"
  ]
};

// BE-FAST (Enhanced Stroke Assessment)
export const beFastStrokeAssessment: AssessmentTool = {
  id: "be-fast-stroke",
  name: "BE-FAST Stroke Assessment",
  category: "Neurological",
  description: "Enhanced stroke assessment including balance and eyes for posterior circulation strokes",
  mnemonics: "BE-FAST = Balance, Eyes, Face, Arms, Speech, Time",
  steps: [
    {
      step: "B - Balance",
      description: "Assess for sudden loss of balance, coordination, or dizziness",
      normalFindings: ["Normal balance", "Steady gait", "No dizziness"],
      abnormalFindings: ["Sudden dizziness", "Loss of coordination", "Unable to walk"],
      criticalActions: ["Ask about sudden onset", "Observe gait if safe", "Note associated symptoms"]
    },
    {
      step: "E - Eyes",
      description: "Check for sudden vision loss or changes",
      normalFindings: ["Normal vision", "No visual field defects", "Equal pupils"],
      abnormalFindings: ["Sudden vision loss", "Visual field cuts", "Double vision"],
      criticalActions: ["Test visual fields", "Check pupil response", "Ask about vision changes"]
    },
    {
      step: "F - Face",
      description: "Assess for facial droop or asymmetry",
      normalFindings: ["Symmetrical smile", "Even facial movement"],
      abnormalFindings: ["Facial droop", "Asymmetrical smile"],
      criticalActions: ["Ask patient to smile", "Note affected side"]
    },
    {
      step: "A - Arms",
      description: "Test for arm weakness or drift",
      normalFindings: ["Both arms stay up equally", "Symmetrical strength"],
      abnormalFindings: ["Arm drift", "Weakness on one side"],
      criticalActions: ["Hold arms up test", "Check grip strength"]
    },
    {
      step: "S - Speech",
      description: "Evaluate speech and language function",
      normalFindings: ["Clear speech", "Normal comprehension"],
      abnormalFindings: ["Slurred speech", "Difficulty understanding"],
      criticalActions: ["Speech clarity test", "Comprehension check"]
    },
    {
      step: "T - Time",
      description: "Critical time documentation for intervention window",
      normalFindings: ["Timeline established"],
      abnormalFindings: ["Unknown onset", "Outside window"],
      criticalActions: ["Document last normal", "Calculate intervention window"]
    }
  ],
  criticalFindings: [
    "Any positive BE-FAST findings",
    "Posterior circulation stroke signs",
    "Rapid symptom progression",
    "Associated cardiac arrhythmias"
  ]
};

// Cincinnati Prehospital Stroke Scale
export const cincinnatiStrokeScale: AssessmentTool = {
  id: "cincinnati-stroke",
  name: "Cincinnati Prehospital Stroke Scale",
  category: "Neurological",
  description: "Three-item stroke assessment scale for prehospital identification",
  steps: [
    {
      step: "Facial Droop Test",
      description: "Have patient show teeth or smile",
      normalFindings: ["Both sides of face move equally"],
      abnormalFindings: ["One side of face does not move as well as the other"],
      criticalActions: ["Score: Normal = 0, Abnormal = 1"]
    },
    {
      step: "Arm Drift Test",
      description: "Patient holds both arms out for 10 seconds",
      normalFindings: ["Both arms move the same or both arms do not move at all"],
      abnormalFindings: ["One arm does not move or one arm drifts down compared to the other"],
      criticalActions: ["Score: Normal = 0, Abnormal = 1"]
    },
    {
      step: "Speech Test",
      description: "Have patient say 'The sky is blue in Cincinnati'",
      normalFindings: ["Patient uses correct words with no slurring"],
      abnormalFindings: ["Patient slurs words, uses wrong words, or is unable to speak"],
      criticalActions: ["Score: Normal = 0, Abnormal = 1"]
    }
  ],
  criticalFindings: [
    "Any abnormal finding (score ≥1)",
    "Total score of 3 indicates high stroke probability",
    "Rapid transport to stroke center indicated"
  ]
};

// Glasgow Coma Scale
export const glasgowComaScale: AssessmentTool = {
  id: "glasgow-coma",
  name: "Glasgow Coma Scale",
  category: "Neurological",
  description: "Standardized neurological assessment of consciousness level",
  steps: [
    {
      step: "Eye Opening Response",
      description: "Assess patient's eye opening response",
      normalFindings: ["Opens eyes spontaneously (4 points)"],
      abnormalFindings: [
        "Opens eyes to verbal command (3 points)",
        "Opens eyes to pain (2 points)",
        "No eye opening (1 point)"
      ]
    },
    {
      step: "Verbal Response",
      description: "Evaluate patient's verbal response",
      normalFindings: ["Oriented conversation (5 points)"],
      abnormalFindings: [
        "Confused conversation (4 points)",
        "Inappropriate words (3 points)",
        "Incomprehensible sounds (2 points)",
        "No verbal response (1 point)"
      ]
    },
    {
      step: "Motor Response",
      description: "Test patient's motor response",
      normalFindings: ["Obeys commands (6 points)"],
      abnormalFindings: [
        "Localizes pain (5 points)",
        "Withdraws from pain (4 points)",
        "Flexion to pain (3 points)",
        "Extension to pain (2 points)",
        "No motor response (1 point)"
      ]
    }
  ],
  criticalFindings: [
    "GCS ≤8 indicates severe brain injury",
    "GCS 9-12 indicates moderate brain injury",
    "GCS 13-15 indicates mild brain injury",
    "Declining GCS requires immediate intervention"
  ]
};

export const enhancedAssessmentTools = [
  dcapBtlsAssessment,
  fastStrokeAssessment,
  beFastStrokeAssessment,
  cincinnatiStrokeScale,
  glasgowComaScale
];