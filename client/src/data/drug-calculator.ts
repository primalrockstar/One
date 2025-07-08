export interface DrugDosage {
  name: string;
  genericName?: string;
  indication: string;
  certificationLevel: 'EMT' | 'AEMT' | 'Paramedic';
  routes: string[];
  adultDose: {
    amount: string;
    route: string;
    frequency?: string;
    maxDose?: string;
  };
  pediatricDose?: {
    weightBased: string;
    maxDose: string;
    ageRestrictions?: string;
  };
  contraindications: string[];
  warnings: string[];
  interactions?: string[];
}

export const emsFormulary: DrugDosage[] = [
  {
    name: "Aspirin",
    indication: "Acute Coronary Syndrome",
    certificationLevel: "EMT",
    routes: ["PO"],
    adultDose: {
      amount: "324 mg",
      route: "PO (chewed)",
      frequency: "Once"
    },
    pediatricDose: {
      weightBased: "10-15 mg/kg",
      maxDose: "324 mg",
      ageRestrictions: "Avoid in children <16 years (Reye syndrome)"
    },
    contraindications: ["Allergy", "Active GI bleeding", "Severe asthma"],
    warnings: ["GI bleeding risk", "Tinnitus with overdose"]
  },
  {
    name: "Epinephrine",
    genericName: "Adrenaline",
    indication: "Anaphylaxis, Cardiac Arrest",
    certificationLevel: "EMT",
    routes: ["IM", "IV", "ET"],
    adultDose: {
      amount: "0.3 mg IM (anaphylaxis) / 1 mg IV (cardiac arrest)",
      route: "IM/IV",
      frequency: "q5-15min PRN"
    },
    pediatricDose: {
      weightBased: "0.01 mg/kg IM (max 0.3 mg) / 0.01 mg/kg IV",
      maxDose: "0.3 mg IM, 1 mg IV"
    },
    contraindications: ["None in life-threatening situations"],
    warnings: ["Hypertension", "Arrhythmias", "Pulmonary edema"]
  },
  {
    name: "Naloxone",
    genericName: "Narcan",
    indication: "Opioid Overdose",
    certificationLevel: "EMT",
    routes: ["IN", "IM", "IV"],
    adultDose: {
      amount: "4 mg IN or 0.4-2 mg IV/IM",
      route: "IN/IV/IM",
      frequency: "q2-3min PRN"
    },
    pediatricDose: {
      weightBased: "0.1 mg/kg IV/IM (max 2 mg) or 2 mg IN",
      maxDose: "2 mg per dose"
    },
    contraindications: ["None in overdose"],
    warnings: ["Precipitates withdrawal", "Short half-life (redosing needed)"]
  },
  {
    name: "Albuterol",
    genericName: "Salbutamol",
    indication: "Bronchospasm, Asthma, COPD",
    certificationLevel: "EMT",
    routes: ["Nebulized", "MDI"],
    adultDose: {
      amount: "2.5 mg in 3 mL NS",
      route: "Nebulized",
      frequency: "q20min PRN"
    },
    pediatricDose: {
      weightBased: "0.15 mg/kg (min 2.5 mg)",
      maxDose: "5 mg per dose"
    },
    contraindications: ["Hypersensitivity"],
    warnings: ["Tachycardia", "Tremor", "Hypokalemia with repeated doses"]
  },
  {
    name: "Nitroglycerin",
    indication: "Chest Pain, CHF",
    certificationLevel: "AEMT",
    routes: ["SL", "Spray"],
    adultDose: {
      amount: "0.4 mg",
      route: "SL",
      frequency: "q5min x3 doses",
      maxDose: "1.2 mg"
    },
    contraindications: ["SBP <90 mmHg", "RV infarction", "ED medications", "Head trauma"],
    warnings: ["Hypotension", "Headache", "Reflex tachycardia"]
  },
  {
    name: "Dextrose 50%",
    genericName: "D50",
    indication: "Hypoglycemia",
    certificationLevel: "AEMT",
    routes: ["IV"],
    adultDose: {
      amount: "25 g (50 mL)",
      route: "IV slow push"
    },
    pediatricDose: {
      weightBased: "D25: 2-4 mL/kg or D10: 5-10 mL/kg",
      maxDose: "25 g equivalent"
    },
    contraindications: ["No IV access"],
    warnings: ["Extravasation causes tissue necrosis", "Give thiamine first in alcoholics"]
  },
  {
    name: "Fentanyl",
    indication: "Pain Management",
    certificationLevel: "Paramedic",
    routes: ["IV", "IM", "IN"],
    adultDose: {
      amount: "1-2 mcg/kg",
      route: "IV",
      frequency: "q5-10min PRN",
      maxDose: "100 mcg per dose"
    },
    pediatricDose: {
      weightBased: "1-2 mcg/kg",
      maxDose: "50 mcg per dose"
    },
    contraindications: ["Respiratory depression", "Head trauma with altered LOC"],
    warnings: ["Respiratory depression", "Chest wall rigidity", "Short duration"],
    interactions: ["CNS depressants", "MAOIs"]
  },
  {
    name: "Amiodarone",
    indication: "VT/VF, SVT",
    certificationLevel: "Paramedic",
    routes: ["IV"],
    adultDose: {
      amount: "300 mg IV (VF/VT), then 150 mg",
      route: "IV",
      frequency: "Once, then 150 mg if needed"
    },
    pediatricDose: {
      weightBased: "5 mg/kg IV/IO",
      maxDose: "300 mg"
    },
    contraindications: ["Bradycardia", "AV block", "Torsades de pointes"],
    warnings: ["Hypotension", "Bradycardia", "Pulmonary toxicity (chronic use)"]
  }
];

export interface DrugCalculation {
  patientWeight: number;
  patientAge?: number;
  drugName: string;
  calculation: {
    dose: string;
    volume: string;
    concentration: string;
  };
  warnings: string[];
  maxDoseExceeded?: boolean;
}

export function calculatePediatricDose(drug: DrugDosage, weightKg: number, ageYears?: number): DrugCalculation {
  if (!drug.pediatricDose) {
    return {
      patientWeight: weightKg,
      patientAge: ageYears,
      drugName: drug.name,
      calculation: {
        dose: "Pediatric dosing not available",
        volume: "N/A",
        concentration: "N/A"
      },
      warnings: ["Pediatric dosing not established for this medication"]
    };
  }

  // Parse weight-based dosing (e.g., "0.01 mg/kg" or "1-2 mcg/kg")
  const doseMatch = drug.pediatricDose.weightBased.match(/([\d.-]+)(?:-([\d.]+))?\s*(\w+)\/kg/);
  if (!doseMatch) {
    return {
      patientWeight: weightKg,
      patientAge: ageYears,
      drugName: drug.name,
      calculation: {
        dose: "Unable to parse dosing",
        volume: "N/A",
        concentration: "N/A"
      },
      warnings: ["Unable to calculate dose"]
    };
  }

  const minDose = parseFloat(doseMatch[1]);
  const maxDose = doseMatch[2] ? parseFloat(doseMatch[2]) : minDose;
  const unit = doseMatch[3];
  
  const calculatedDose = minDose * weightKg;
  const maxAllowed = parseFloat(drug.pediatricDose.maxDose.split(' ')[0]);
  const finalDose = Math.min(calculatedDose, maxAllowed);
  
  const warnings = [];
  if (calculatedDose > maxAllowed) {
    warnings.push(`Calculated dose exceeds maximum. Using max dose of ${drug.pediatricDose.maxDose}`);
  }
  
  if (drug.pediatricDose.ageRestrictions && ageYears) {
    warnings.push(drug.pediatricDose.ageRestrictions);
  }

  return {
    patientWeight: weightKg,
    patientAge: ageYears,
    drugName: drug.name,
    calculation: {
      dose: `${finalDose.toFixed(2)} ${unit}`,
      volume: "Depends on concentration",
      concentration: "Check drug concentration"
    },
    warnings,
    maxDoseExceeded: calculatedDose > maxAllowed
  };
}