export interface EmergencyCall {
  id: string;
  callType: string;
  dispatchInfo: string;
  primaryDiagnosis: string;
  secondaryDiagnoses: string[];
  keyInterventions: string[];
  transportDecision: 'emergent' | 'non-emergent' | 'refusal' | 'dead-on-scene';
  protocolReference: string;
  commonMistakes: string[];
  teachingPoints: string[];
}

export const commonEmergencyCalls: EmergencyCall[] = [
  {
    id: 'call-001',
    callType: 'Chest Pain',
    dispatchInfo: '65-year-old male, chest pain, difficulty breathing',
    primaryDiagnosis: 'Acute Myocardial Infarction (STEMI)',
    secondaryDiagnoses: ['Unstable Angina', 'GERD', 'Anxiety'],
    keyInterventions: [
      'Oxygen if SpO2 <94%',
      'Aspirin 324mg chewed',
      '12-lead ECG',
      'IV access',
      'Nitroglycerin 0.4mg SL (if SBP >90)',
      'Morphine 2-4mg IV for pain'
    ],
    transportDecision: 'emergent',
    protocolReference: 'Cardiac Protocol 1.0',
    commonMistakes: [
      'Giving NTG with hypotension',
      'Delaying aspirin',
      'Not obtaining 12-lead ECG'
    ],
    teachingPoints: [
      'Time is muscle - door to balloon <90 minutes',
      'Inferior MI may present with bradycardia/hypotension',
      'Atypical presentations in women/diabetics'
    ]
  },
  {
    id: 'call-002',
    callType: 'Difficulty Breathing',
    dispatchInfo: '45-year-old female, shortness of breath, wheezing',
    primaryDiagnosis: 'Acute Asthma Exacerbation',
    secondaryDiagnoses: ['COPD Exacerbation', 'Pneumonia', 'CHF'],
    keyInterventions: [
      'High-flow oxygen',
      'Albuterol 2.5mg nebulized',
      'Ipratropium 0.5mg nebulized',
      'IV access',
      'Methylprednisolone 125mg IV',
      'Monitor for fatigue/silent chest'
    ],
    transportDecision: 'emergent',
    protocolReference: 'Respiratory Protocol 2.0',
    commonMistakes: [
      'Over-sedating anxious patient',
      'Missing silent chest (impending respiratory failure)',
      'Not considering CPAP early enough'
    ],
    teachingPoints: [
      'Silent chest = medical emergency',
      'Peak flow <25% predicted = severe',
      'Combination therapy more effective than single agent'
    ]
  },
  {
    id: 'call-003',
    callType: 'Unconscious Person',
    dispatchInfo: '28-year-old male, found unconscious, unknown medical history',
    primaryDiagnosis: 'Opioid Overdose',
    secondaryDiagnoses: ['Hypoglycemia', 'Alcohol Intoxication', 'Head Trauma'],
    keyInterventions: [
      'Airway management',
      'Bag-mask ventilation',
      'Naloxone 4mg IN or 0.4mg IV',
      'Blood glucose check',
      'IV access',
      'Thiamine 100mg IV (if alcoholic)'
    ],
    transportDecision: 'emergent',
    protocolReference: 'Altered Mental Status Protocol 3.0',
    commonMistakes: [
      'Not checking blood glucose',
      'Inadequate ventilation before naloxone',
      'Single dose naloxone for long-acting opioids'
    ],
    teachingPoints: [
      'Fentanyl may require multiple naloxone doses',
      'Always check glucose in altered mental status',
      'AEIOU-TIPS mnemonic for differential'
    ]
  },
  {
    id: 'call-004',
    callType: 'Seizure',
    dispatchInfo: '16-year-old female, active seizure, still seizing on arrival',
    primaryDiagnosis: 'Status Epilepticus',
    secondaryDiagnoses: ['Breakthrough Seizure', 'Hypoglycemia', 'Intoxication'],
    keyInterventions: [
      'Protect airway',
      'High-flow oxygen',
      'Blood glucose check',
      'IV access',
      'Lorazepam 2-4mg IV slow push',
      'Consider midazolam 5mg IM if no IV'
    ],
    transportDecision: 'emergent',
    protocolReference: 'Neurological Protocol 4.0',
    commonMistakes: [
      'Restraining patient during seizure',
      'Not checking glucose',
      'Inadequate benzodiazepine dosing'
    ],
    teachingPoints: [
      'Status epilepticus = seizure >5 minutes',
      'Glucose should be checked in all seizure patients',
      'Benzodiazepines are first-line for active seizures'
    ]
  },
  {
    id: 'call-005',
    callType: 'Motor Vehicle Collision',
    dispatchInfo: 'High-speed MVC, multiple patients, entrapment reported',
    primaryDiagnosis: 'Multi-system Trauma',
    secondaryDiagnoses: ['Traumatic Brain Injury', 'Hemorrhagic Shock', 'Pneumothorax'],
    keyInterventions: [
      'Scene safety assessment',
      'C-spine immobilization',
      'Control major bleeding',
      'High-flow oxygen',
      'Large bore IV access x2',
      'Rapid trauma assessment'
    ],
    transportDecision: 'emergent',
    protocolReference: 'Trauma Protocol 5.0',
    commonMistakes: [
      'Not securing scene safety',
      'Inadequate spinal immobilization',
      'Delaying transport for procedures'
    ],
    teachingPoints: [
      'Golden hour concept - minimize scene time',
      'MARCH algorithm prioritizes massive hemorrhage',
      'Trauma centers improve outcomes for severe injuries'
    ]
  },
  {
    id: 'call-006',
    callType: 'Stroke Alert',
    dispatchInfo: '72-year-old male, facial droop, speech problems, wife called 911',
    primaryDiagnosis: 'Acute Ischemic Stroke',
    secondaryDiagnoses: ['Transient Ischemic Attack', 'Hypoglycemia', 'Bell\'s Palsy'],
    keyInterventions: [
      'Time of onset documentation',
      'FAST assessment',
      'Blood glucose check',
      'Blood pressure monitoring',
      'IV access',
      'Stroke center notification'
    ],
    transportDecision: 'emergent',
    protocolReference: 'Stroke Protocol 6.0',
    commonMistakes: [
      'Not documenting time of onset',
      'Treating hypertension too aggressively',
      'Giving glucose without checking level first'
    ],
    teachingPoints: [
      'Time window for thrombolytics is critical',
      'BEFAST adds balance and eyes to FAST',
      'Blood pressure should not be lowered in field'
    ]
  },
  {
    id: 'call-007',
    callType: 'Cardiac Arrest',
    dispatchInfo: '58-year-old male, CPR in progress, family performed CPR',
    primaryDiagnosis: 'Ventricular Fibrillation Cardiac Arrest',
    secondaryDiagnoses: ['Ventricular Tachycardia', 'PEA', 'Asystole'],
    keyInterventions: [
      'High-quality CPR',
      'Early defibrillation',
      'Advanced airway management',
      'IV/IO access',
      'Epinephrine 1mg IV q3-5min',
      'Treat reversible causes'
    ],
    transportDecision: 'emergent',
    protocolReference: 'Cardiac Arrest Protocol 7.0',
    commonMistakes: [
      'Interrupting CPR for rhythm checks',
      'Hyperventilation',
      'Not treating reversible causes (H\'s and T\'s)'
    ],
    teachingPoints: [
      'Minimize interruptions in chest compressions',
      'Early CPR and defibrillation save lives',
      'Consider therapeutic hypothermia post-ROSC'
    ]
  },
  {
    id: 'call-008',
    callType: 'Allergic Reaction',
    dispatchInfo: '35-year-old female, swelling, difficulty breathing after eating shellfish',
    primaryDiagnosis: 'Anaphylactic Shock',
    secondaryDiagnoses: ['Severe Allergic Reaction', 'Angioedema', 'Panic Attack'],
    keyInterventions: [
      'Epinephrine 0.3mg IM',
      'High-flow oxygen',
      'IV access x2',
      'Normal saline bolus',
      'Diphenhydramine 25-50mg IV',
      'Methylprednisolone 125mg IV'
    ],
    transportDecision: 'emergent',
    protocolReference: 'Allergy Protocol 8.0',
    commonMistakes: [
      'Delaying epinephrine',
      'Using epinephrine 1:10,000 instead of 1:1,000',
      'Not treating hypotension aggressively'
    ],
    teachingPoints: [
      'Epinephrine is first-line treatment',
      'Biphasic reactions can occur 4-8 hours later',
      'Multiple doses of epinephrine may be needed'
    ]
  },
  {
    id: 'call-009',
    callType: 'Diabetic Emergency',
    dispatchInfo: '42-year-old male, altered mental status, diabetic, family concerned',
    primaryDiagnosis: 'Severe Hypoglycemia',
    secondaryDiagnoses: ['Diabetic Ketoacidosis', 'Hyperosmolar Crisis', 'Stroke'],
    keyInterventions: [
      'Blood glucose check',
      'D50 25g IV if hypoglycemic',
      'Glucagon 1mg IM if no IV access',
      'Thiamine 100mg IV',
      'IV access',
      'Continuous monitoring'
    ],
    transportDecision: 'non-emergent',
    protocolReference: 'Diabetic Protocol 9.0',
    commonMistakes: [
      'Not checking glucose before treatment',
      'Giving oral glucose to unconscious patient',
      'Not giving thiamine with glucose in alcoholics'
    ],
    teachingPoints: [
      'Glucose <70 mg/dL requires treatment',
      'Glucagon takes 10-15 minutes to work',
      'Always give thiamine before or with glucose in alcoholics'
    ]
  },
  {
    id: 'call-010',
    callType: 'Overdose',
    dispatchInfo: '25-year-old female, found with empty pill bottles, altered mental status',
    primaryDiagnosis: 'Mixed Drug Overdose',
    secondaryDiagnoses: ['Acetaminophen Overdose', 'Tricyclic Overdose', 'Benzodiazepine Overdose'],
    keyInterventions: [
      'Airway management',
      'Blood glucose check',
      'IV access',
      'Activated charcoal if appropriate',
      'Naloxone if opioid suspected',
      'ECG monitoring'
    ],
    transportDecision: 'emergent',
    protocolReference: 'Toxicology Protocol 10.0',
    commonMistakes: [
      'Not protecting airway',
      'Giving charcoal to unconscious patient',
      'Not monitoring for arrhythmias'
    ],
    teachingPoints: [
      'Mixed overdoses are common',
      'Wide QRS may indicate tricyclic overdose',
      'Activated charcoal within 1-2 hours of ingestion'
    ]
  }
];

// Additional 15 common calls would continue here...