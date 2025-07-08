import type { Medication } from "@shared/schema";

export const medicationsData: Omit<Medication, 'id'>[] = [
  // EMT BASIC MEDICATIONS
  {
    name: "Aspirin",
    genericName: "acetylsalicylic acid",
    category: "cardiac",
    dosage: "324 mg PO (chewed)",
    route: "PO",
    indications: [
      "Acute Coronary Syndrome (ACS)",
      "Suspected myocardial infarction",
      "Chest pain of cardiac origin"
    ],
    contraindications: [
      "Allergy to aspirin",
      "Active GI bleeding"
    ],
    sideEffects: [
      "Gastrointestinal irritation",
      "Increased bleeding risk",
      "Allergic reactions"
    ],
    pediatricDosage: "Not recommended in children",
    certificationLevel: "EMT",
    administrationNotes: "Must be chewed for rapid absorption"
  },
  {
    name: "Oxygen",
    genericName: "oxygen",
    category: "respiratory",
    dosage: "2–15 L/min (NC/NRB)",
    route: "Inhalation",
    indications: [
      "Hypoxia (SpO2 < 94%)",
      "Respiratory distress",
      "Chest pain",
      "Altered mental status"
    ],
    contraindications: [
      "COPD with CO2 retention (use titrated O2)"
    ],
    sideEffects: [
      "Oxygen toxicity (prolonged high concentration)",
      "Dry mucous membranes"
    ],
    pediatricDosage: "Same as adult, titrated to SpO2",
    certificationLevel: "EMT",
    administrationNotes: "Titrate to maintain SpO2 94-99%"
  },
  {
    name: "Epinephrine 1:1,000",
    genericName: "epinephrine",
    category: "emergency",
    dosage: "0.3 mg IM (auto-injector or vial)",
    route: "IM",
    indications: [
      "Anaphylaxis",
      "Severe allergic reactions"
    ],
    contraindications: [
      "None in anaphylaxis"
    ],
    sideEffects: [
      "Tachycardia",
      "Hypertension",
      "Anxiety",
      "Tremor",
      "Headache"
    ],
    pediatricDosage: "0.15 mg IM (pediatric auto-injector)",
    certificationLevel: "EMT",
    administrationNotes: "Administer in lateral thigh muscle"
  },
  {
    name: "Naloxone",
    genericName: "naloxone hydrochloride",
    category: "neurological",
    dosage: "4 mg IN or 0.4 mg IM/IV (if allowed)",
    route: "IN/IM/IV",
    indications: [
      "Opioid overdose",
      "Respiratory depression from opioids"
    ],
    contraindications: [
      "None in overdose"
    ],
    sideEffects: [
      "Withdrawal syndrome in dependent users",
      "Agitation",
      "Nausea and vomiting"
    ],
    pediatricDosage: "0.1 mg/kg IM/IN",
    certificationLevel: "EMT",
    administrationNotes: "May need repeated doses"
  },
  {
    name: "Albuterol",
    genericName: "albuterol sulfate",
    category: "respiratory",
    dosage: "2.5 mg nebulized",
    route: "Inhalation",
    indications: [
      "Asthma exacerbation",
      "COPD with bronchospasm"
    ],
    contraindications: [
      "Tachycardia (use with caution)"
    ],
    sideEffects: [
      "Tachycardia",
      "Tremor",
      "Nervousness",
      "Hyperglycemia"
    ],
    pediatricDosage: "1.25-2.5 mg nebulized",
    certificationLevel: "EMT",
    administrationNotes: "Monitor heart rate during administration"
  },
  {
    name: "Oral Glucose",
    genericName: "dextrose gel",
    category: "neurological",
    dosage: "15–25 g PO (paste/gel)",
    route: "PO",
    indications: [
      "Hypoglycemia in conscious patients",
      "Altered mental status with low blood sugar"
    ],
    contraindications: [
      "Unconsciousness (use glucagon)",
      "Inability to swallow"
    ],
    sideEffects: [
      "Nausea",
      "Hyperglycemia if overused"
    ],
    pediatricDosage: "0.5-1 g/kg PO",
    certificationLevel: "EMT",
    administrationNotes: "Patient must be conscious and able to swallow"
  },
  {
    name: "Activated Charcoal",
    genericName: "activated charcoal",
    category: "toxicology",
    dosage: "25–50 g PO",
    route: "PO",
    indications: [
      "Poisoning (certain substances)",
      "Drug overdose (specific medications)"
    ],
    contraindications: [
      "Altered LOC",
      "Caustic ingestion",
      "Hydrocarbon ingestion"
    ],
    sideEffects: [
      "Vomiting",
      "Constipation",
      "Black stools"
    ],
    pediatricDosage: "1 g/kg PO",
    certificationLevel: "EMT",
    administrationNotes: "Some states only - check local protocols"
  },

  // AEMT MEDICATIONS
  {
    name: "Nitroglycerin",
    genericName: "nitroglycerin",
    category: "cardiac",
    dosage: "0.4 mg SL/spray q5min (max 3 doses)",
    route: "Sublingual",
    indications: [
      "Acute Coronary Syndrome (ACS)",
      "Congestive Heart Failure (CHF)",
      "Chest pain of cardiac origin"
    ],
    contraindications: [
      "SBP <90 mmHg",
      "ED medications (e.g., Viagra)",
      "Right heart failure"
    ],
    sideEffects: [
      "Hypotension",
      "Headache",
      "Dizziness",
      "Flushing"
    ],
    pediatricDosage: "Not typically used in pediatrics",
    certificationLevel: "AEMT",
    administrationNotes: "Check BP before each dose"
  },
  {
    name: "Glucagon",
    genericName: "glucagon",
    category: "neurological",
    dosage: "1 mg IM",
    route: "IM",
    indications: [
      "Hypoglycemia without IV access",
      "Unconscious diabetic patient"
    ],
    contraindications: [
      "None (if no IV access)"
    ],
    sideEffects: [
      "Nausea and vomiting",
      "Hyperglycemia",
      "Hypokalemia"
    ],
    pediatricDosage: "0.5 mg IM (< 20 kg)",
    certificationLevel: "AEMT",
    administrationNotes: "Patient may vomit after regaining consciousness"
  },
  {
    name: "Diphenhydramine",
    genericName: "diphenhydramine hydrochloride",
    category: "emergency",
    dosage: "25–50 mg IV/IM",
    route: "IV/IM",
    indications: [
      "Allergic reactions",
      "Anaphylaxis (adjunct to epinephrine)",
      "Mild to moderate allergic symptoms"
    ],
    contraindications: [
      "Acute asthma (can thicken secretions)"
    ],
    sideEffects: [
      "Sedation",
      "Dry mouth",
      "Blurred vision",
      "Urinary retention"
    ],
    pediatricDosage: "1-1.25 mg/kg IV/IM",
    certificationLevel: "AEMT",
    administrationNotes: "Causes significant sedation"
  },
  {
    name: "Dextrose 50%",
    genericName: "dextrose",
    category: "neurological",
    dosage: "25 g IV (pediatrics: D25 2–4 mL/kg)",
    route: "IV",
    indications: [
      "Hypoglycemia",
      "Altered mental status with documented low glucose"
    ],
    contraindications: [
      "No IV access (use glucagon)"
    ],
    sideEffects: [
      "Tissue necrosis if extravasated",
      "Hyperglycemia",
      "Phlebitis"
    ],
    pediatricDosage: "D25: 2-4 mL/kg IV",
    certificationLevel: "AEMT",
    administrationNotes: "Ensure good IV access - very hypertonic"
  },
  {
    name: "Ipratropium",
    genericName: "ipratropium bromide",
    category: "respiratory",
    dosage: "0.5 mg nebulized (with albuterol)",
    route: "Inhalation",
    indications: [
      "COPD exacerbation",
      "Severe asthma (with albuterol)"
    ],
    contraindications: [
      "Soy/peanut allergy (rare)"
    ],
    sideEffects: [
      "Dry mouth",
      "Cough",
      "Headache"
    ],
    pediatricDosage: "0.25 mg nebulized",
    certificationLevel: "AEMT",
    administrationNotes: "Often combined with albuterol"
  },

  // PARAMEDIC MEDICATIONS
  {
    name: "Fentanyl",
    genericName: "fentanyl citrate",
    category: "analgesic",
    dosage: "1–2 mcg/kg IV/IN (max 100 mcg/dose)",
    route: "IV/IN",
    indications: [
      "Severe pain management",
      "Procedural sedation"
    ],
    contraindications: [
      "Severe respiratory depression"
    ],
    sideEffects: [
      "Respiratory depression",
      "Hypotension",
      "Sedation",
      "Muscle rigidity (high doses)"
    ],
    pediatricDosage: "1-2 mcg/kg IV/IN",
    certificationLevel: "Paramedic",
    administrationNotes: "Rapid onset, monitor respirations closely"
  },
  {
    name: "Morphine",
    genericName: "morphine sulfate",
    category: "analgesic",
    dosage: "2–5 mg IV q5–10min (max 10 mg)",
    route: "IV",
    indications: [
      "Severe pain",
      "ACS pain management"
    ],
    contraindications: [
      "Hypotension",
      "Head injury",
      "Respiratory depression"
    ],
    sideEffects: [
      "Respiratory depression",
      "Hypotension",
      "Nausea and vomiting",
      "Sedation"
    ],
    pediatricDosage: "0.05-0.1 mg/kg IV",
    certificationLevel: "Paramedic",
    administrationNotes: "Monitor vital signs closely"
  },
  {
    name: "Ketamine",
    genericName: "ketamine hydrochloride",
    category: "analgesic",
    dosage: "Pain: 0.1–0.3 mg/kg IV, Sedation: 1–2 mg/kg IV (RSI)",
    route: "IV/IM",
    indications: [
      "Pain management",
      "Procedural sedation",
      "RSI induction"
    ],
    contraindications: [
      "Schizophrenia",
      "Uncontrolled hypertension"
    ],
    sideEffects: [
      "Hallucinations",
      "Hypertension",
      "Tachycardia",
      "Increased ICP"
    ],
    pediatricDosage: "1-2 mg/kg IV/IM",
    certificationLevel: "Paramedic",
    administrationNotes: "May cause emergence phenomena"
  },
  {
    name: "Amiodarone",
    genericName: "amiodarone hydrochloride",
    category: "cardiac",
    dosage: "300 mg IV (repeat 150 mg if refractory)",
    route: "IV/IO",
    indications: [
      "Ventricular fibrillation (VF)",
      "Ventricular tachycardia (VT)"
    ],
    contraindications: [
      "Bradycardia",
      "Torsades de pointes"
    ],
    sideEffects: [
      "Hypotension",
      "Bradycardia",
      "Heart block",
      "Prolonged QT interval"
    ],
    pediatricDosage: "5 mg/kg IV/IO",
    certificationLevel: "Paramedic",
    administrationNotes: "Monitor for hypotension during infusion"
  },
  {
    name: "Dopamine",
    genericName: "dopamine hydrochloride",
    category: "cardiac",
    dosage: "5–20 mcg/kg/min IV drip",
    route: "IV",
    indications: [
      "Cardiogenic shock",
      "Hypotension",
      "Bradycardia (refractory)"
    ],
    contraindications: [
      "Tachyarrhythmias",
      "Pheochromocytoma"
    ],
    sideEffects: [
      "Tachycardia",
      "Hypertension",
      "Arrhythmias",
      "Tissue necrosis if extravasated"
    ],
    pediatricDosage: "5-20 mcg/kg/min IV",
    certificationLevel: "Paramedic",
    administrationNotes: "Requires continuous monitoring and IV pump"
  },
  {
    name: "Succinylcholine",
    genericName: "succinylcholine chloride",
    category: "neuromuscular",
    dosage: "1.5 mg/kg IV",
    route: "IV",
    indications: [
      "RSI muscle relaxation",
      "Intubation facilitation"
    ],
    contraindications: [
      "Hyperkalemia",
      "Malignant hyperthermia risk",
      "Neuromuscular disease"
    ],
    sideEffects: [
      "Fasciculations",
      "Hyperkalemia",
      "Malignant hyperthermia",
      "Bradycardia"
    ],
    pediatricDosage: "2 mg/kg IV",
    certificationLevel: "Paramedic",
    administrationNotes: "Depolarizing neuromuscular blocker - rapid onset"
  },
  {
    name: "Etomidate",
    genericName: "etomidate",
    category: "sedative",
    dosage: "0.3 mg/kg IV",
    route: "IV",
    indications: [
      "RSI induction",
      "Procedural sedation"
    ],
    contraindications: [
      "Adrenal insufficiency",
      "Septic shock"
    ],
    sideEffects: [
      "Adrenal suppression",
      "Myoclonus",
      "Nausea and vomiting"
    ],
    pediatricDosage: "0.3 mg/kg IV",
    certificationLevel: "Paramedic",
    administrationNotes: "Hemodynamically stable induction agent"
  }
];