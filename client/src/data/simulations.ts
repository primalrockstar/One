import type { Simulation } from "@shared/schema";

export const simulationsData: Omit<Simulation, 'id'>[] = [
  {
    title: "Acute Myocardial Infarction",
    description: "67-year-old male presents with crushing chest pain radiating to left arm. Practice STEMI recognition and treatment protocols.",
    category: "cardiac",
    difficulty: "intermediate",
    estimatedTime: 15,
    scenario: {
      patient: {
        age: 67,
        gender: "male",
        chiefComplaint: "Chest pain for 2 hours",
        history: "Hypertension, diabetes, smoking history"
      },
      vitals: {
        bp: "160/90",
        hr: 88,
        rr: 20,
        spo2: 94,
        temp: "98.2°F",
        pain: "8/10"
      },
      presentation: "Diaphoretic, anxious, describing crushing chest pain",
      ecg: "ST elevation in leads II, III, aVF indicating inferior STEMI"
    },
    learningObjectives: [
      "Recognize STEMI patterns on 12-lead ECG",
      "Apply appropriate cardiac protocols",
      "Administer medications per ACS guidelines",
      "Coordinate rapid transport to PCI facility",
      "Monitor for complications during transport"
    ]
  },
  {
    title: "Multi-Trauma Motor Vehicle Accident",
    description: "High-speed collision with multiple patients requiring triage and systematic trauma assessment. Practice primary and secondary surveys.",
    category: "trauma",
    difficulty: "advanced",
    estimatedTime: 25,
    scenario: {
      scene: "Head-on collision, 2 vehicles, 4 patients total",
      weather: "Rainy conditions, poor visibility",
      resources: "Additional units en route, helicopter available",
      patients: [
        { priority: "red", injuries: "unconscious, probable head injury" },
        { priority: "yellow", injuries: "chest pain, possible rib fractures" },
        { priority: "green", injuries: "minor lacerations, walking wounded" },
        { priority: "black", injuries: "obvious fatal injuries" }
      ]
    },
    learningObjectives: [
      "Apply START triage protocol effectively",
      "Perform systematic primary trauma survey",
      "Manage multiple patients with limited resources",
      "Coordinate with other emergency responders",
      "Make critical transport decisions under pressure"
    ]
  },
  {
    title: "Pediatric Febrile Seizure",
    description: "18-month-old child presents with active seizure and high fever. Mother is hysterical. Practice pediatric emergency protocols.",
    category: "neurological",
    difficulty: "intermediate",
    estimatedTime: 12,
    scenario: {
      patient: {
        age: "18 months",
        gender: "female",
        weight: "12 kg",
        chiefComplaint: "Seizure activity for 5 minutes"
      },
      vitals: {
        hr: 140,
        rr: 28,
        temp: "104.2°F",
        spo2: 88
      },
      presentation: "Generalized tonic-clonic seizure, hypoxic",
      family: "Panicked mother, language barrier present"
    },
    learningObjectives: [
      "Manage pediatric seizure emergencies",
      "Calculate weight-based medication dosages",
      "Provide family support and education",
      "Recognize febrile seizure vs. status epilepticus",
      "Apply appropriate cooling measures"
    ]
  },
  {
    title: "Anaphylactic Shock",
    description: "35-year-old woman develops severe allergic reaction after bee sting. Rapidly progressing to respiratory distress and shock.",
    category: "respiratory",
    difficulty: "intermediate",
    estimatedTime: 10,
    scenario: {
      patient: {
        age: 35,
        gender: "female",
        chiefComplaint: "Difficulty breathing after bee sting",
        allergies: "Known bee sting allergy, carries EpiPen"
      },
      vitals: {
        bp: "80/40",
        hr: 120,
        rr: 32,
        spo2: 85,
        temp: "99.1°F"
      },
      presentation: "Hives, swollen face and throat, wheezing, weak pulse",
      progression: "Condition deteriorating rapidly"
    },
    learningObjectives: [
      "Recognize signs of anaphylaxis quickly",
      "Administer epinephrine correctly and timely",
      "Manage airway compromise in allergic reactions",
      "Provide supportive care for shock",
      "Monitor for biphasic allergic reactions"
    ]
  },
  {
    title: "Stroke Assessment (Large Vessel Occlusion)",
    description: "72-year-old presents with sudden onset weakness and speech difficulties. Family witnessed symptom onset 45 minutes ago.",
    category: "neurological",
    difficulty: "advanced",
    estimatedTime: 18,
    scenario: {
      patient: {
        age: 72,
        gender: "male",
        lastSeenNormal: "45 minutes ago",
        history: "Atrial fibrillation, not on anticoagulation"
      },
      vitals: {
        bp: "180/100",
        hr: 88,
        rr: 16,
        spo2: 96,
        glucose: 110
      },
      examination: {
        fast: "Positive - facial droop, arm weakness, speech slurred",
        nihss: "Score 16 - severe stroke",
        lvo: "Positive screening for large vessel occlusion"
      }
    },
    learningObjectives: [
      "Perform comprehensive stroke assessments",
      "Calculate and interpret stroke scales",
      "Identify large vessel occlusion candidates",
      "Navigate stroke center selection criteria",
      "Coordinate with neuro-interventional teams"
    ]
  },
  {
    title: "Diabetic Ketoacidosis",
    description: "28-year-old type 1 diabetic presents with altered mental status, dehydration, and fruity breath odor.",
    category: "endocrine",
    difficulty: "intermediate",
    estimatedTime: 20,
    scenario: {
      patient: {
        age: 28,
        gender: "female",
        history: "Type 1 diabetes, recent illness",
        medications: "Insulin pump - possibly malfunctioning"
      },
      vitals: {
        bp: "90/60",
        hr: 110,
        rr: 28,
        spo2: 98,
        temp: "100.8°F",
        glucose: 450
      },
      presentation: "Kussmaul respirations, fruity breath, dehydrated",
      labs: "High glucose, ketones present"
    },
    learningObjectives: [
      "Recognize signs and symptoms of DKA",
      "Understand fluid and electrolyte management",
      "Coordinate with endocrinology team",
      "Monitor for complications during treatment",
      "Educate patient on diabetes management"
    ]
  },
  {
    title: "Opioid Overdose with Complications",
    description: "26-year-old found unresponsive with drug paraphernalia nearby. Initial naloxone response complicated by combative behavior.",
    category: "toxicology",
    difficulty: "beginner",
    estimatedTime: 12,
    scenario: {
      patient: {
        age: 26,
        gender: "male",
        found: "Unresponsive in public restroom",
        paraphernalia: "Syringes and white powder present"
      },
      vitals: {
        bp: "100/70",
        hr: 45,
        rr: 6,
        spo2: 78,
        temp: "96.8°F"
      },
      response: "Initially responsive to naloxone, becomes combative",
      complications: "Possible poly-drug use"
    },
    learningObjectives: [
      "Recognize opioid overdose presentation",
      "Administer naloxone effectively",
      "Manage combative patient safely",
      "Understand naloxone pharmacokinetics",
      "Coordinate with law enforcement appropriately"
    ]
  },
  {
    title: "Acute Asthma Exacerbation",
    description: "45-year-old with history of asthma presents with severe shortness of breath and wheezing after exposure to allergens.",
    category: "respiratory",
    difficulty: "beginner",
    estimatedTime: 15,
    scenario: {
      patient: {
        age: 45,
        gender: "female",
        history: "Severe asthma, multiple hospitalizations",
        trigger: "Exposure to cat dander at friend's house"
      },
      vitals: {
        bp: "140/90",
        hr: 125,
        rr: 32,
        spo2: 88,
        peakFlow: "150 (normal 400)"
      },
      presentation: "Accessory muscle use, tripod positioning, audible wheeze",
      medications: "Albuterol inhaler used multiple times"
    },
    learningObjectives: [
      "Assess severity of asthma exacerbation",
      "Provide appropriate bronchodilator therapy",
      "Recognize need for corticosteroids",
      "Monitor response to treatment",
      "Identify criteria for critical care transport"
    ]
  }
];
