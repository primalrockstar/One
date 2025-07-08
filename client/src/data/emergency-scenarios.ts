export interface EmergencyScenario {
  id: string;
  title: string;
  type: 'medical' | 'trauma' | 'pediatric' | 'cardiac' | 'respiratory' | 'neurological';
  difficulty: 'basic' | 'intermediate' | 'advanced';
  ageGroup: 'adult' | 'pediatric' | 'geriatric';
  chiefComplaint: string;
  patientPresentation: {
    appearance: string;
    vitals: {
      hr: string;
      bp: string;
      rr: string;
      spo2: string;
      temp: string;
    };
    mentalStatus: string;
  };
  history: string;
  physicalFindings: string[];
  differentialDiagnosis: string[];
  criticalActions: string[];
  medications: string[];
  expectedOutcome: string;
  learningObjectives: string[];
}

export const emergencyScenarios: EmergencyScenario[] = [
  {
    id: 'scenario-001',
    title: 'Acute MI - Inferior Wall',
    type: 'cardiac',
    difficulty: 'intermediate',
    ageGroup: 'adult',
    chiefComplaint: '67-year-old male with crushing chest pain',
    patientPresentation: {
      appearance: 'Pale, diaphoretic, clutching chest',
      vitals: {
        hr: '58 bpm',
        bp: '88/54 mmHg',
        rr: '22/min',
        spo2: '96% on RA',
        temp: '98.6°F'
      },
      mentalStatus: 'Alert and oriented, anxious'
    },
    history: 'Sudden onset severe chest pain 45 minutes ago while mowing lawn. Pain radiates to jaw. History of hypertension, takes lisinopril.',
    physicalFindings: [
      'Diaphoresis',
      'Chest pain 8/10',
      'Pain radiates to jaw and left arm',
      'Bradycardia with hypotension',
      'Clear lung sounds'
    ],
    differentialDiagnosis: [
      'Acute MI (likely inferior)',
      'Unstable angina',
      'Aortic dissection',
      'Pulmonary embolism'
    ],
    criticalActions: [
      'Oxygen if SpO2 <94%',
      'Aspirin 324mg chewed',
      'IV access x2',
      '12-lead ECG',
      'Avoid nitroglycerin (hypotensive)',
      'Consider atropine for bradycardia',
      'STEMI alert if indicated'
    ],
    medications: [
      'Aspirin 324mg PO',
      'Atropine 0.5mg IV if HR <50',
      'Normal saline bolus for hypotension'
    ],
    expectedOutcome: 'Stabilization, pain reduction, transport to PCI center',
    learningObjectives: [
      'Recognize inferior MI presentation',
      'Understand bradycardia/hypotension relationship',
      'Know when to avoid nitroglycerin'
    ]
  },
  {
    id: 'scenario-002',
    title: 'Severe Asthma Exacerbation',
    type: 'respiratory',
    difficulty: 'intermediate',
    ageGroup: 'adult',
    chiefComplaint: '28-year-old female with severe shortness of breath',
    patientPresentation: {
      appearance: 'Sitting upright, tripod position, using accessory muscles',
      vitals: {
        hr: '128 bpm',
        bp: '142/88 mmHg',
        rr: '32/min',
        spo2: '89% on RA',
        temp: '99.1°F'
      },
      mentalStatus: 'Alert but anxious, speaks in 2-3 word sentences'
    },
    history: 'Known asthmatic, ran out of inhaler 3 days ago. Symptoms worsening over 2 hours. No recent illness.',
    physicalFindings: [
      'Widespread expiratory wheeze',
      'Use of accessory muscles',
      'Prolonged expiratory phase',
      'Peak flow 40% of baseline',
      'Diaphoresis'
    ],
    differentialDiagnosis: [
      'Severe asthma exacerbation',
      'COPD exacerbation',
      'Pneumonia',
      'Anaphylaxis'
    ],
    criticalActions: [
      'High-flow oxygen',
      'Albuterol nebulizer 2.5mg',
      'Ipratropium if available',
      'IV access',
      'Consider CPAP',
      'Steroids (methylprednisolone)',
      'Prepare for intubation if deteriorating'
    ],
    medications: [
      'Albuterol 2.5mg nebulized',
      'Ipratropium 0.5mg nebulized',
      'Methylprednisolone 125mg IV',
      'Magnesium sulfate 2g IV if severe'
    ],
    expectedOutcome: 'Bronchodilation, improved air movement, stable transport',
    learningObjectives: [
      'Recognize status asthmaticus',
      'Understand combination bronchodilator therapy',
      'Know when to consider intubation'
    ]
  },
  {
    id: 'scenario-003',
    title: 'Traumatic Brain Injury',
    type: 'trauma',
    difficulty: 'advanced',
    ageGroup: 'adult',
    chiefComplaint: '32-year-old male motorcycle vs car accident',
    patientPresentation: {
      appearance: 'Unconscious, blood from ears and nose',
      vitals: {
        hr: '56 bpm',
        bp: '168/92 mmHg',
        rr: '8/min irregular',
        spo2: '92% on RA',
        temp: '97.8°F'
      },
      mentalStatus: 'GCS 6 (E2V1M3) - responds to pain only'
    },
    history: 'High-speed motorcycle collision, no helmet. Found unconscious at scene. Unknown medical history.',
    physicalFindings: [
      'Battle signs (bruising behind ears)',
      'Raccoon eyes',
      'CSF rhinorrhea',
      'Right pupil 6mm fixed',
      'Left pupil 3mm reactive',
      'Decerebrate posturing'
    ],
    differentialDiagnosis: [
      'Severe traumatic brain injury',
      'Intracranial hemorrhage',
      'Basilar skull fracture',
      'Cervical spine injury'
    ],
    criticalActions: [
      'Secure airway (RSI)',
      'C-spine immobilization',
      'High-flow oxygen',
      'Hyperventilate to PCO2 30-35',
      'IV access x2',
      'Maintain SBP >90',
      'Avoid hypotonic fluids',
      'Trauma center transport'
    ],
    medications: [
      'RSI medications per protocol',
      'Mannitol 1g/kg IV if herniation signs',
      'Normal saline for hypotension',
      'Avoid glucose unless hypoglycemic'
    ],
    expectedOutcome: 'Secured airway, ICP management, rapid transport',
    learningObjectives: [
      'Recognize signs of increased ICP',
      'Understand RSI indications',
      'Know neuroprotective strategies'
    ]
  },
  {
    id: 'scenario-004',
    title: 'Pediatric Febrile Seizure',
    type: 'pediatric',
    difficulty: 'basic',
    ageGroup: 'pediatric',
    chiefComplaint: '18-month-old with seizure activity',
    patientPresentation: {
      appearance: 'Post-ictal, lethargic but arousable',
      vitals: {
        hr: '145 bpm',
        bp: '85/50 mmHg',
        rr: '28/min',
        spo2: '98% on RA',
        temp: '103.2°F'
      },
      mentalStatus: 'Drowsy, responds to voice'
    },
    history: 'Mother reports 2-minute generalized seizure. Child has been febrile for 12 hours with URI symptoms. No previous seizures.',
    physicalFindings: [
      'High fever',
      'Post-ictal state',
      'No focal neurological deficits',
      'Clear lung sounds',
      'Normal pupil response'
    ],
    differentialDiagnosis: [
      'Simple febrile seizure',
      'Complex febrile seizure',
      'Meningitis',
      'Metabolic disorder'
    ],
    criticalActions: [
      'Cooling measures',
      'Oxygen if needed',
      'Blood glucose check',
      'IV access if prolonged',
      'Antipyretics',
      'Monitor for recurrent seizures',
      'Reassure parents'
    ],
    medications: [
      'Acetaminophen 15mg/kg PR',
      'Ibuprofen 10mg/kg PO if >6 months',
      'Diazepam 0.2mg/kg IV if seizure >5 minutes'
    ],
    expectedOutcome: 'Temperature reduction, no recurrent seizures',
    learningObjectives: [
      'Differentiate simple vs complex febrile seizures',
      'Understand pediatric seizure management',
      'Know when to be concerned about meningitis'
    ]
  },
  {
    id: 'scenario-005',
    title: 'Anaphylactic Shock',
    type: 'medical',
    difficulty: 'intermediate',
    ageGroup: 'adult',
    chiefComplaint: '24-year-old female with allergic reaction after bee sting',
    patientPresentation: {
      appearance: 'Flushed, swollen face and lips, obvious distress',
      vitals: {
        hr: '135 bpm',
        bp: '78/42 mmHg',
        rr: '28/min',
        spo2: '91% on RA',
        temp: '98.9°F'
      },
      mentalStatus: 'Anxious, coherent but panicked'
    },
    history: 'Bee sting 15 minutes ago. Immediate swelling and rash. Known bee allergy, forgot EpiPen. Taking oral antihistamines.',
    physicalFindings: [
      'Generalized urticaria',
      'Angioedema of face/lips',
      'Stridor',
      'Wheezing',
      'Hypotension',
      'Tachycardia'
    ],
    differentialDiagnosis: [
      'Anaphylactic shock',
      'Severe allergic reaction',
      'Vasovagal reaction',
      'Panic attack'
    ],
    criticalActions: [
      'Epinephrine 0.3mg IM immediately',
      'High-flow oxygen',
      'IV access x2',
      'Normal saline bolus',
      'Albuterol for bronchospasm',
      'Diphenhydramine 25-50mg IV',
      'Methylprednisolone 125mg IV',
      'Prepare for airway management'
    ],
    medications: [
      'Epinephrine 0.3mg IM (repeat q5-15min PRN)',
      'Normal saline 1-2L IV bolus',
      'Diphenhydramine 25-50mg IV',
      'Methylprednisolone 125mg IV',
      'Albuterol 2.5mg nebulized'
    ],
    expectedOutcome: 'Hemodynamic stabilization, improved airway',
    learningObjectives: [
      'Recognize anaphylaxis criteria',
      'Understand epinephrine as first-line treatment',
      'Know multi-modal anaphylaxis management'
    ]
  },
  {
    id: 'scenario-006',
    title: 'Severe Allergic Reaction - Anaphylaxis',
    type: 'medical',
    difficulty: 'intermediate',
    ageGroup: 'adult',
    chiefComplaint: '35-year-old female with severe allergic reaction to shellfish',
    patientPresentation: {
      appearance: 'Anxious, flushed, swollen face and lips',
      vitals: {
        hr: '125 bpm',
        bp: '85/50 mmHg',
        rr: '26/min',
        spo2: '92% on RA',
        temp: '99.2°F'
      },
      mentalStatus: 'Alert but panicked'
    },
    history: 'Ate shrimp 20 minutes ago, immediate onset of symptoms. Known shellfish allergy, no EpiPen available.',
    physicalFindings: [
      'Generalized urticaria',
      'Angioedema of face/lips',
      'Stridor on inspiration',
      'Wheezing bilaterally',
      'Hypotension'
    ],
    differentialDiagnosis: [
      'Anaphylactic shock',
      'Severe allergic reaction',
      'Panic attack',
      'Asthma exacerbation'
    ],
    criticalActions: [
      'Epinephrine 0.3mg IM immediately',
      'High-flow oxygen',
      'IV access x2',
      'Normal saline bolus',
      'Albuterol nebulizer',
      'Diphenhydramine 25-50mg IV',
      'Methylprednisolone 125mg IV'
    ],
    medications: [
      'Epinephrine 0.3mg IM (repeat PRN)',
      'Normal saline 1-2L IV',
      'Diphenhydramine 25-50mg IV',
      'Albuterol 2.5mg nebulized'
    ],
    expectedOutcome: 'Hemodynamic stabilization, airway protection',
    learningObjectives: [
      'Recognize anaphylaxis criteria',
      'Understand epinephrine as first-line',
      'Multi-modal anaphylaxis management'
    ]
  },
  {
    id: 'scenario-007',
    title: 'Diabetic Ketoacidosis',
    type: 'medical',
    difficulty: 'advanced',
    ageGroup: 'adult',
    chiefComplaint: '28-year-old Type 1 diabetic with altered mental status',
    patientPresentation: {
      appearance: 'Dehydrated, fruity breath odor, lethargic',
      vitals: {
        hr: '118 bpm',
        bp: '95/60 mmHg',
        rr: '28/min deep',
        spo2: '98% on RA',
        temp: '100.8°F'
      },
      mentalStatus: 'Confused, responds to voice'
    },
    history: 'Ran out of insulin 3 days ago. Nausea, vomiting, polyuria for 2 days. Family reports unusual behavior.',
    physicalFindings: [
      'Kussmaul respirations',
      'Fruity breath odor',
      'Dry mucous membranes',
      'Tachycardia',
      'Abdominal tenderness'
    ],
    differentialDiagnosis: [
      'Diabetic ketoacidosis',
      'Hyperosmolar hyperglycemic state',
      'Sepsis',
      'Drug intoxication'
    ],
    criticalActions: [
      'Blood glucose check',
      'IV access x2',
      'Normal saline 1L bolus',
      'Consider insulin per protocol',
      'Monitor electrolytes',
      'Thiamine 100mg IV'
    ],
    medications: [
      'Normal saline 1-2L IV',
      'Regular insulin per protocol',
      'Thiamine 100mg IV',
      'Potassium replacement PRN'
    ],
    expectedOutcome: 'Fluid resuscitation, glucose control, electrolyte balance',
    learningObjectives: [
      'Recognize DKA presentation',
      'Understand fluid resuscitation priorities',
      'Know insulin administration protocols'
    ]
  },
  {
    id: 'scenario-008',
    title: 'Acute STEMI - Anterior Wall',
    type: 'cardiac',
    difficulty: 'advanced',
    ageGroup: 'adult',
    chiefComplaint: '58-year-old male with crushing chest pain',
    patientPresentation: {
      appearance: 'Pale, diaphoretic, clutching chest',
      vitals: {
        hr: '95 bpm',
        bp: '140/85 mmHg',
        rr: '20/min',
        spo2: '97% on RA',
        temp: '98.4°F'
      },
      mentalStatus: 'Alert, anxious about dying'
    },
    history: 'Sudden onset severe chest pain 30 minutes ago while lifting boxes. Radiates to left arm and jaw. Smoker, hypertension.',
    physicalFindings: [
      'Diaphoresis',
      'Chest pain 9/10',
      'Pain radiates to left arm/jaw',
      'S4 gallop on cardiac exam',
      'No peripheral edema'
    ],
    differentialDiagnosis: [
      'Acute STEMI',
      'Unstable angina',
      'Aortic dissection',
      'Pulmonary embolism'
    ],
    criticalActions: [
      'Oxygen if SpO2 <94%',
      'Aspirin 324mg chewed',
      'IV access',
      '12-lead ECG',
      'Nitroglycerin 0.4mg SL',
      'Morphine for pain',
      'STEMI alert activation'
    ],
    medications: [
      'Aspirin 324mg PO',
      'Nitroglycerin 0.4mg SL q5min x3',
      'Morphine 2-4mg IV PRN pain',
      'Metoprolol if no contraindications'
    ],
    expectedOutcome: 'Pain reduction, PCI within 90 minutes',
    learningObjectives: [
      'Recognize STEMI presentation',
      'Understand door-to-balloon goals',
      'Know contraindications to thrombolytics'
    ]
  },
  {
    id: 'scenario-009',
    title: 'Respiratory Failure - COPD Exacerbation',
    type: 'respiratory',
    difficulty: 'intermediate',
    ageGroup: 'geriatric',
    chiefComplaint: '72-year-old male with severe shortness of breath',
    patientPresentation: {
      appearance: 'Tripod position, pursed lip breathing, barrel chest',
      vitals: {
        hr: '110 bpm',
        bp: '150/90 mmHg',
        rr: '28/min',
        spo2: '86% on RA',
        temp: '99.8°F'
      },
      mentalStatus: 'Alert but anxious, speaks in 2-word sentences'
    },
    history: 'Known COPD, ran out of inhalers 2 days ago. Productive cough with yellow sputum. 40-pack-year smoking history.',
    physicalFindings: [
      'Barrel chest',
      'Use of accessory muscles',
      'Rhonchi and expiratory wheeze',
      'Prolonged expiratory phase',
      'Peripheral edema'
    ],
    differentialDiagnosis: [
      'COPD exacerbation',
      'Pneumonia',
      'Congestive heart failure',
      'Pulmonary embolism'
    ],
    criticalActions: [
      'High-flow oxygen (controlled)',
      'Albuterol and ipratropium nebulizer',
      'IV access',
      'Methylprednisolone 125mg IV',
      'Consider CPAP',
      'Monitor for CO2 retention'
    ],
    medications: [
      'Albuterol 2.5mg + Ipratropium 0.5mg nebulized',
      'Methylprednisolone 125mg IV',
      'Oxygen 2-4L NC (titrate to SpO2 88-92%)'
    ],
    expectedOutcome: 'Improved ventilation, bronchodilation',
    learningObjectives: [
      'Understand COPD pathophysiology',
      'Know controlled oxygen therapy principles',
      'Recognize when to use CPAP'
    ]
  },
  {
    id: 'scenario-010',
    title: 'Penetrating Trauma - Chest Wound',
    type: 'trauma',
    difficulty: 'advanced',
    ageGroup: 'adult',
    chiefComplaint: '25-year-old male stabbed in left chest',
    patientPresentation: {
      appearance: 'Pale, diaphoretic, obvious distress',
      vitals: {
        hr: '128 bpm',
        bp: '90/60 mmHg',
        rr: '32/min',
        spo2: '89% on RA',
        temp: '97.2°F'
      },
      mentalStatus: 'Alert but anxious'
    },
    history: 'Assault 15 minutes ago. Single stab wound to left chest with 6-inch knife. No other apparent injuries.',
    physicalFindings: [
      'Penetrating wound 5th intercostal space',
      'Diminished breath sounds left side',
      'Tracheal deviation to right',
      'JVD present',
      'Tachycardia and hypotension'
    ],
    differentialDiagnosis: [
      'Tension pneumothorax',
      'Hemothorax',
      'Cardiac tamponade',
      'Simple pneumothorax'
    ],
    criticalActions: [
      'Do not remove knife',
      'High-flow oxygen',
      'Large bore IV access x2',
      'Needle decompression if tension pneumo',
      'Occlusive dressing around knife',
      'Rapid transport to trauma center'
    ],
    medications: [
      'Normal saline bolus for hypotension',
      'Pain management per protocol',
      'Blood products if available'
    ],
    expectedOutcome: 'Hemodynamic stabilization, surgical intervention',
    learningObjectives: [
      'Recognize tension pneumothorax',
      'Understand penetrating trauma management',
      'Know when to perform needle decompression'
    ]
  }
];