export interface VitalSignsRange {
  ageGroup: string;
  ageRange: string;
  heartRate: {
    normal: string;
    danger: string;
  };
  respiratoryRate: {
    normal: string;
    danger: string;
  };
  bloodPressure: {
    systolic: string;
    diastolic: string;
    danger: string;
  };
  temperature: {
    normal: string;
    danger: string;
  };
  oxygenSaturation: {
    normal: string;
    danger: string;
  };
}

export const vitalSignsReference: VitalSignsRange[] = [
  {
    ageGroup: "Newborn",
    ageRange: "0-1 month",
    heartRate: {
      normal: "120-160 bpm",
      danger: "<100 or >180 bpm"
    },
    respiratoryRate: {
      normal: "30-50 breaths/min",
      danger: "<20 or >60 breaths/min"
    },
    bloodPressure: {
      systolic: "60-90 mmHg",
      diastolic: "20-60 mmHg",
      danger: "Systolic <50 or >100 mmHg"
    },
    temperature: {
      normal: "97.7-99.5°F (36.5-37.5°C)",
      danger: "<96°F or >100.4°F"
    },
    oxygenSaturation: {
      normal: "95-100%",
      danger: "<95%"
    }
  },
  {
    ageGroup: "Infant",
    ageRange: "1-12 months",
    heartRate: {
      normal: "100-150 bpm",
      danger: "<90 or >170 bpm"
    },
    respiratoryRate: {
      normal: "25-40 breaths/min",
      danger: "<15 or >50 breaths/min"
    },
    bloodPressure: {
      systolic: "70-100 mmHg",
      diastolic: "35-65 mmHg",
      danger: "Systolic <60 or >110 mmHg"
    },
    temperature: {
      normal: "97.9-99.7°F (36.6-37.6°C)",
      danger: "<96°F or >100.4°F"
    },
    oxygenSaturation: {
      normal: "95-100%",
      danger: "<95%"
    }
  },
  {
    ageGroup: "Toddler",
    ageRange: "1-3 years",
    heartRate: {
      normal: "90-140 bpm",
      danger: "<80 or >160 bpm"
    },
    respiratoryRate: {
      normal: "20-30 breaths/min",
      danger: "<12 or >40 breaths/min"
    },
    bloodPressure: {
      systolic: "80-110 mmHg",
      diastolic: "50-80 mmHg",
      danger: "Systolic <70 or >120 mmHg"
    },
    temperature: {
      normal: "97.9-99.7°F (36.6-37.6°C)",
      danger: "<96°F or >100.4°F"
    },
    oxygenSaturation: {
      normal: "95-100%",
      danger: "<95%"
    }
  },
  {
    ageGroup: "Preschooler",
    ageRange: "3-6 years",
    heartRate: {
      normal: "80-120 bpm",
      danger: "<70 or >140 bpm"
    },
    respiratoryRate: {
      normal: "20-25 breaths/min",
      danger: "<12 or >35 breaths/min"
    },
    bloodPressure: {
      systolic: "90-110 mmHg",
      diastolic: "50-70 mmHg",
      danger: "Systolic <80 or >120 mmHg"
    },
    temperature: {
      normal: "98.1-99.3°F (36.7-37.4°C)",
      danger: "<96°F or >100.4°F"
    },
    oxygenSaturation: {
      normal: "95-100%",
      danger: "<95%"
    }
  },
  {
    ageGroup: "School Age",
    ageRange: "6-12 years",
    heartRate: {
      normal: "70-110 bpm",
      danger: "<60 or >130 bpm"
    },
    respiratoryRate: {
      normal: "18-22 breaths/min",
      danger: "<12 or >30 breaths/min"
    },
    bloodPressure: {
      systolic: "90-120 mmHg",
      diastolic: "60-80 mmHg",
      danger: "Systolic <85 or >130 mmHg"
    },
    temperature: {
      normal: "98.1-99.3°F (36.7-37.4°C)",
      danger: "<96°F or >100.4°F"
    },
    oxygenSaturation: {
      normal: "95-100%",
      danger: "<95%"
    }
  },
  {
    ageGroup: "Adolescent",
    ageRange: "12-18 years",
    heartRate: {
      normal: "60-100 bpm",
      danger: "<50 or >120 bpm"
    },
    respiratoryRate: {
      normal: "16-20 breaths/min",
      danger: "<12 or >28 breaths/min"
    },
    bloodPressure: {
      systolic: "100-120 mmHg",
      diastolic: "60-80 mmHg",
      danger: "Systolic <90 or >140 mmHg"
    },
    temperature: {
      normal: "98.6°F (37°C)",
      danger: "<96°F or >100.4°F"
    },
    oxygenSaturation: {
      normal: "95-100%",
      danger: "<95%"
    }
  },
  {
    ageGroup: "Young Adult",
    ageRange: "18-40 years",
    heartRate: {
      normal: "60-100 bpm",
      danger: "<50 or >120 bpm"
    },
    respiratoryRate: {
      normal: "12-20 breaths/min",
      danger: "<10 or >28 breaths/min"
    },
    bloodPressure: {
      systolic: "90-120 mmHg",
      diastolic: "60-80 mmHg",
      danger: "Systolic <90 or >180 mmHg"
    },
    temperature: {
      normal: "98.6°F (37°C)",
      danger: "<95°F or >101°F"
    },
    oxygenSaturation: {
      normal: "95-100%",
      danger: "<95%"
    }
  },
  {
    ageGroup: "Middle Age",
    ageRange: "40-65 years",
    heartRate: {
      normal: "60-100 bpm",
      danger: "<50 or >120 bpm"
    },
    respiratoryRate: {
      normal: "12-20 breaths/min",
      danger: "<10 or >28 breaths/min"
    },
    bloodPressure: {
      systolic: "90-140 mmHg",
      diastolic: "60-90 mmHg",
      danger: "Systolic <90 or >180 mmHg"
    },
    temperature: {
      normal: "98.6°F (37°C)",
      danger: "<95°F or >101°F"
    },
    oxygenSaturation: {
      normal: "95-100%",
      danger: "<95%"
    }
  },
  {
    ageGroup: "Elderly",
    ageRange: "65+ years",
    heartRate: {
      normal: "60-100 bpm",
      danger: "<50 or >110 bpm"
    },
    respiratoryRate: {
      normal: "12-18 breaths/min",
      danger: "<8 or >25 breaths/min"
    },
    bloodPressure: {
      systolic: "90-150 mmHg",
      diastolic: "60-90 mmHg",
      danger: "Systolic <90 or >180 mmHg"
    },
    temperature: {
      normal: "97-99°F (36.1-37.2°C)",
      danger: "<95°F or >100°F"
    },
    oxygenSaturation: {
      normal: "95-100%",
      danger: "<92%"
    }
  }
];

export interface CommonFieldCall {
  condition: string;
  category: "Cardiac" | "Respiratory" | "Neurological" | "Trauma" | "Medical" | "Psychiatric";
  commonSigns: string[];
  commonSymptoms: string[];
  criticalFindings: string[];
  interventions: string[];
  transportPriority: "Emergent" | "Urgent" | "Non-urgent";
}

export const commonFieldCalls: CommonFieldCall[] = [
  {
    condition: "Myocardial Infarction (Heart Attack)",
    category: "Cardiac",
    commonSigns: [
      "Diaphoresis (sweating)",
      "Pale, cool, clammy skin",
      "Irregular pulse",
      "Hypotension",
      "Jugular vein distention",
      "Peripheral edema"
    ],
    commonSymptoms: [
      "Crushing chest pain",
      "Pain radiating to left arm, jaw, or back",
      "Shortness of breath",
      "Nausea and vomiting",
      "Weakness/fatigue",
      "Sense of impending doom"
    ],
    criticalFindings: [
      "Systolic BP <90 mmHg",
      "Heart rate <50 or >150 bpm",
      "Oxygen saturation <90%",
      "Altered mental status",
      "Pulmonary edema"
    ],
    interventions: [
      "High-flow oxygen",
      "Aspirin 324mg (if not allergic)",
      "Nitroglycerin (if prescribed)",
      "IV access",
      "12-lead ECG",
      "Continuous monitoring"
    ],
    transportPriority: "Emergent"
  },
  {
    condition: "COPD Exacerbation",
    category: "Respiratory",
    commonSigns: [
      "Tripod positioning",
      "Pursed-lip breathing",
      "Use of accessory muscles",
      "Barrel chest",
      "Cyanosis (central/peripheral)",
      "Prolonged expiratory phase"
    ],
    commonSymptoms: [
      "Severe shortness of breath",
      "Productive cough",
      "Wheezing",
      "Chest tightness",
      "Fatigue",
      "Unable to speak in full sentences"
    ],
    criticalFindings: [
      "Oxygen saturation <88%",
      "Respiratory rate >30 or <8",
      "Altered mental status",
      "Silent chest on auscultation",
      "Severe accessory muscle use"
    ],
    interventions: [
      "Controlled oxygen therapy",
      "Bronchodilators (albuterol)",
      "CPAP if indicated",
      "Corticosteroids",
      "IV access",
      "Position of comfort"
    ],
    transportPriority: "Urgent"
  },
  {
    condition: "Pulmonary Embolism (PE)",
    category: "Respiratory",
    commonSigns: [
      "Tachypnea",
      "Tachycardia",
      "Hypotension",
      "Cyanosis",
      "Unilateral leg swelling",
      "Low-grade fever"
    ],
    commonSymptoms: [
      "Sudden onset dyspnea",
      "Sharp chest pain (pleuritic)",
      "Cough (may be bloody)",
      "Anxiety/apprehension",
      "Leg pain or swelling",
      "Lightheadedness"
    ],
    criticalFindings: [
      "Massive PE with shock",
      "Oxygen saturation <90%",
      "Systolic BP <90 mmHg",
      "Heart rate >100 bpm",
      "Altered mental status"
    ],
    interventions: [
      "High-flow oxygen",
      "IV access",
      "Fluid resuscitation if hypotensive",
      "Position of comfort",
      "Continuous monitoring",
      "Rapid transport"
    ],
    transportPriority: "Emergent"
  },
  {
    condition: "Stroke/CVA",
    category: "Neurological",
    commonSigns: [
      "Facial droop",
      "Arm drift/weakness",
      "Speech slurred/absent",
      "Unequal pupils",
      "Altered mental status",
      "Abnormal reflexes"
    ],
    commonSymptoms: [
      "Sudden weakness/numbness",
      "Confusion",
      "Trouble speaking",
      "Vision problems",
      "Severe headache",
      "Dizziness/loss of balance"
    ],
    criticalFindings: [
      "FAST positive findings",
      "Altered level of consciousness",
      "Severe hypertension >220/120",
      "Hypoglycemia ruled out",
      "Time of onset <4.5 hours"
    ],
    interventions: [
      "Oxygen if indicated",
      "IV access",
      "Blood glucose check",
      "FAST assessment",
      "Time of onset documentation",
      "Stroke center transport"
    ],
    transportPriority: "Emergent"
  },
  {
    condition: "Diabetic Emergency",
    category: "Medical",
    commonSigns: [
      "Altered mental status",
      "Diaphoresis",
      "Tremors/shaking",
      "Tachycardia",
      "Fruity breath odor (DKA)",
      "Dehydration"
    ],
    commonSymptoms: [
      "Weakness/fatigue",
      "Hunger (hypoglycemia)",
      "Thirst (hyperglycemia)",
      "Frequent urination",
      "Nausea/vomiting",
      "Blurred vision"
    ],
    criticalFindings: [
      "Blood glucose <60 or >400 mg/dL",
      "Unconsciousness",
      "Seizure activity",
      "Severe dehydration",
      "Ketoacidosis signs"
    ],
    interventions: [
      "Blood glucose measurement",
      "Oral glucose (if conscious)",
      "IV dextrose (if unconscious)",
      "IV fluid replacement",
      "Airway management",
      "Continuous monitoring"
    ],
    transportPriority: "Urgent"
  },
  {
    condition: "Seizure",
    category: "Neurological",
    commonSigns: [
      "Tonic-clonic movements",
      "Loss of consciousness",
      "Tongue biting",
      "Incontinence",
      "Post-ictal confusion",
      "Cyanosis during seizure"
    ],
    commonSymptoms: [
      "Aura before seizure",
      "Confusion after seizure",
      "Muscle aches",
      "Fatigue",
      "Headache",
      "Memory loss"
    ],
    criticalFindings: [
      "Status epilepticus (>5 minutes)",
      "Continuous seizures",
      "Respiratory compromise",
      "Head trauma",
      "Hypoglycemia"
    ],
    interventions: [
      "Airway protection",
      "Oxygen administration",
      "Blood glucose check",
      "IV access",
      "Benzodiazepines if prolonged",
      "Scene safety"
    ],
    transportPriority: "Urgent"
  },
  {
    condition: "Anaphylaxis",
    category: "Medical",
    commonSigns: [
      "Hives/urticaria",
      "Angioedema (swelling)",
      "Stridor",
      "Wheezing",
      "Hypotension",
      "Tachycardia"
    ],
    commonSymptoms: [
      "Itching",
      "Difficulty breathing",
      "Throat tightness",
      "Nausea/vomiting",
      "Dizziness",
      "Sense of doom"
    ],
    criticalFindings: [
      "Airway compromise",
      "Respiratory distress",
      "Shock/hypotension",
      "Altered mental status",
      "Severe bronchospasm"
    ],
    interventions: [
      "Epinephrine injection",
      "High-flow oxygen",
      "IV fluid bolus",
      "Bronchodilators",
      "Corticosteroids",
      "Antihistamines"
    ],
    transportPriority: "Emergent"
  },
  {
    condition: "Overdose/Poisoning",
    category: "Medical",
    commonSigns: [
      "Altered mental status",
      "Abnormal vital signs",
      "Miosis/mydriasis",
      "Track marks",
      "Pill bottles/paraphernalia",
      "Vomitus"
    ],
    commonSymptoms: [
      "Nausea/vomiting",
      "Confusion",
      "Drowsiness",
      "Difficulty breathing",
      "Chest pain",
      "Abdominal pain"
    ],
    criticalFindings: [
      "Respiratory depression",
      "Cardiac arrhythmias",
      "Coma",
      "Seizures",
      "Severe hypothermia/hyperthermia"
    ],
    interventions: [
      "Airway management",
      "Oxygen administration",
      "IV access",
      "Naloxone (opioid overdose)",
      "Activated charcoal (if indicated)",
      "Poison control consultation"
    ],
    transportPriority: "Emergent"
  }
];