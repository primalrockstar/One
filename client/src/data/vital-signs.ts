export interface VitalSigns {
  ageGroup: string;
  heartRate: { normal: string; danger: string };
  respiratoryRate: { normal: string; danger: string };
  bloodPressure: { normal: string; danger: string };
  temperature: { normal: string; danger: string };
  oxygenSaturation: { normal: string; danger: string };
}

export const vitalSignsByAge: VitalSigns[] = [
  {
    ageGroup: "Newborn (0-1 month)",
    heartRate: { normal: "120-160 bpm", danger: "<100 or >180 bpm" },
    respiratoryRate: { normal: "30-50 /min", danger: "<20 or >60 /min" },
    bloodPressure: { normal: "65-85/45-55 mmHg", danger: "<50/30 or >90/65 mmHg" },
    temperature: { normal: "36.5-37.5°C (97.7-99.5°F)", danger: "<36°C or >38°C" },
    oxygenSaturation: { normal: "95-100%", danger: "<95%" }
  },
  {
    ageGroup: "Infant (1-12 months)",
    heartRate: { normal: "100-160 bpm", danger: "<90 or >170 bpm" },
    respiratoryRate: { normal: "25-40 /min", danger: "<20 or >50 /min" },
    bloodPressure: { normal: "70-100/50-65 mmHg", danger: "<60/40 or >110/75 mmHg" },
    temperature: { normal: "36.5-37.5°C (97.7-99.5°F)", danger: "<36°C or >38.5°C" },
    oxygenSaturation: { normal: "95-100%", danger: "<95%" }
  },
  {
    ageGroup: "Toddler (1-3 years)",
    heartRate: { normal: "90-150 bpm", danger: "<80 or >160 bpm" },
    respiratoryRate: { normal: "20-30 /min", danger: "<15 or >40 /min" },
    bloodPressure: { normal: "80-110/50-70 mmHg", danger: "<70/45 or >120/80 mmHg" },
    temperature: { normal: "36.5-37.5°C (97.7-99.5°F)", danger: "<36°C or >39°C" },
    oxygenSaturation: { normal: "95-100%", danger: "<95%" }
  },
  {
    ageGroup: "Preschool (3-6 years)",
    heartRate: { normal: "80-120 bpm", danger: "<70 or >130 bpm" },
    respiratoryRate: { normal: "20-25 /min", danger: "<15 or >35 /min" },
    bloodPressure: { normal: "85-115/55-75 mmHg", danger: "<75/50 or >125/85 mmHg" },
    temperature: { normal: "36.5-37.5°C (97.7-99.5°F)", danger: "<36°C or >39°C" },
    oxygenSaturation: { normal: "95-100%", danger: "<95%" }
  },
  {
    ageGroup: "School Age (6-12 years)",
    heartRate: { normal: "70-110 bpm", danger: "<60 or >120 bpm" },
    respiratoryRate: { normal: "15-20 /min", danger: "<12 or >30 /min" },
    bloodPressure: { normal: "90-120/60-80 mmHg", danger: "<80/55 or >130/90 mmHg" },
    temperature: { normal: "36.5-37.5°C (97.7-99.5°F)", danger: "<36°C or >39°C" },
    oxygenSaturation: { normal: "95-100%", danger: "<95%" }
  },
  {
    ageGroup: "Adolescent (12-18 years)",
    heartRate: { normal: "60-100 bpm", danger: "<50 or >110 bpm" },
    respiratoryRate: { normal: "12-20 /min", danger: "<10 or >25 /min" },
    bloodPressure: { normal: "100-130/65-85 mmHg", danger: "<90/60 or >140/95 mmHg" },
    temperature: { normal: "36.5-37.5°C (97.7-99.5°F)", danger: "<36°C or >39°C" },
    oxygenSaturation: { normal: "95-100%", danger: "<95%" }
  },
  {
    ageGroup: "Adult (18-65 years)",
    heartRate: { normal: "60-100 bpm", danger: "<50 or >110 bpm" },
    respiratoryRate: { normal: "12-20 /min", danger: "<10 or >25 /min" },
    bloodPressure: { normal: "120/80 mmHg", danger: "<90/60 or >140/90 mmHg" },
    temperature: { normal: "36.5-37.5°C (97.7-99.5°F)", danger: "<35°C or >40°C" },
    oxygenSaturation: { normal: "95-100%", danger: "<95%" }
  },
  {
    ageGroup: "Elderly (65+ years)",
    heartRate: { normal: "60-100 bpm", danger: "<50 or >110 bpm" },
    respiratoryRate: { normal: "12-20 /min", danger: "<10 or >25 /min" },
    bloodPressure: { normal: "130/80 mmHg", danger: "<100/70 or >150/95 mmHg" },
    temperature: { normal: "36.5-37.5°C (97.7-99.5°F)", danger: "<35°C or >39°C" },
    oxygenSaturation: { normal: "95-100%", danger: "<95%" }
  }
];