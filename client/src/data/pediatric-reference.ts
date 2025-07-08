export interface PediatricVitals {
  ageGroup: string;
  weight: string;
  heartRate: { normal: string; danger: string };
  respiratoryRate: { normal: string; danger: string };
  bloodPressure: { normal: string; danger: string };
  temperature: { normal: string; danger: string };
}

export const pediatricVitals: PediatricVitals[] = [
  {
    ageGroup: "Newborn (0-1 month)",
    weight: "2.5-4.5 kg",
    heartRate: { normal: "120-160 bpm", danger: "<100 or >180 bpm" },
    respiratoryRate: { normal: "30-50 /min", danger: "<20 or >60 /min" },
    bloodPressure: { normal: "65-85/45-55 mmHg", danger: "<50/30 mmHg" },
    temperature: { normal: "36.5-37.5°C", danger: "<36°C or >38°C" }
  },
  {
    ageGroup: "Infant (1-12 months)",
    weight: "4-10 kg",
    heartRate: { normal: "100-160 bpm", danger: "<90 or >170 bpm" },
    respiratoryRate: { normal: "25-40 /min", danger: "<20 or >50 /min" },
    bloodPressure: { normal: "70-100/50-65 mmHg", danger: "<60/40 mmHg" },
    temperature: { normal: "36.5-37.5°C", danger: "<36°C or >38.5°C" }
  },
  {
    ageGroup: "Toddler (1-3 years)",
    weight: "10-15 kg",
    heartRate: { normal: "90-150 bpm", danger: "<80 or >160 bpm" },
    respiratoryRate: { normal: "20-30 /min", danger: "<15 or >40 /min" },
    bloodPressure: { normal: "80-110/50-70 mmHg", danger: "<70/45 mmHg" },
    temperature: { normal: "36.5-37.5°C", danger: "<36°C or >39°C" }
  }
];

export interface PediatricDosing {
  medication: string;
  indication: string;
  dose: string;
  route: string;
  maxDose: string;
  notes: string;
}

export const pediatricDosing: PediatricDosing[] = [
  {
    medication: "Epinephrine",
    indication: "Anaphylaxis",
    dose: "0.01 mg/kg IM",
    route: "IM (anterolateral thigh)",
    maxDose: "0.3 mg",
    notes: "Can repeat q5-15min. Use 1:1,000 concentration"
  },
  {
    medication: "Epinephrine",
    indication: "Cardiac arrest",
    dose: "0.01 mg/kg IV/IO",
    route: "IV/IO",
    maxDose: "1 mg",
    notes: "Use 1:10,000 concentration. Can repeat q3-5min"
  },
  {
    medication: "Dextrose",
    indication: "Hypoglycemia",
    dose: "D25: 2-4 mL/kg IV",
    route: "IV",
    maxDose: "50 mL (12.5 g)",
    notes: "Use D25 in children, D10 in neonates"
  },
  {
    medication: "Naloxone",
    indication: "Opioid overdose",
    dose: "0.1 mg/kg IV/IM/IN",
    route: "IV/IM/IN",
    maxDose: "2 mg",
    notes: "Can use 2mg IN for all pediatric patients"
  },
  {
    medication: "Albuterol",
    indication: "Bronchospasm",
    dose: "0.15 mg/kg (min 2.5mg)",
    route: "Nebulized",
    maxDose: "5 mg",
    notes: "Can be given continuously in severe cases"
  }
];

export interface PediatricEmergency {
  condition: string;
  ageGroup: string;
  signs: string[];
  treatment: string[];
  redFlags: string[];
}

export const pediatricEmergencies: PediatricEmergency[] = [
  {
    condition: "Febrile Seizure",
    ageGroup: "6 months - 5 years",
    signs: [
      "Generalized tonic-clonic seizure",
      "Fever >38°C (100.4°F)",
      "Post-ictal period",
      "No focal neurological deficits"
    ],
    treatment: [
      "Cooling measures",
      "Antipyretics (acetaminophen/ibuprofen)",
      "Benzodiazepines only if seizure >5 minutes",
      "Transport for evaluation"
    ],
    redFlags: [
      "Seizure >15 minutes",
      "Focal seizure",
      "Age <6 months or >5 years",
      "Abnormal neurological exam"
    ]
  },
  {
    condition: "Croup",
    ageGroup: "6 months - 3 years",
    signs: [
      "Seal-bark cough",
      "Stridor",
      "Hoarse voice",
      "Low-grade fever"
    ],
    treatment: [
      "Cool mist or humidified oxygen",
      "Nebulized saline",
      "Position of comfort",
      "Consider nebulized epinephrine if severe"
    ],
    redFlags: [
      "Severe stridor at rest",
      "Drooling",
      "High fever",
      "Toxic appearance"
    ]
  },
  {
    condition: "Bronchiolitis",
    ageGroup: "0-24 months",
    signs: [
      "Wheezing",
      "Tachypnea",
      "Retractions",
      "Poor feeding"
    ],
    treatment: [
      "Supportive care",
      "Oxygen if hypoxic",
      "Suctioning if needed",
      "IV fluids if dehydrated"
    ],
    redFlags: [
      "Apnea",
      "Severe dehydration",
      "Cyanosis",
      "Inability to feed"
    ]
  }
];