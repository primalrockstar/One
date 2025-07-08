export interface SymptomChecklist {
  id: string;
  emergency: string;
  category: 'cardiac' | 'respiratory' | 'neurological' | 'trauma' | 'medical';
  priority: 'critical' | 'high' | 'moderate';
  primarySymptoms: string[];
  secondarySymptoms: string[];
  redFlags: string[];
  assessmentMnemonics: string[];
  interventions: string[];
}

export const symptomChecklists: SymptomChecklist[] = [
  {
    id: 'chest-pain',
    emergency: 'Chest Pain',
    category: 'cardiac',
    priority: 'critical',
    primarySymptoms: [
      'Chest discomfort/pressure',
      'Shortness of breath',
      'Diaphoresis (sweating)',
      'Nausea/vomiting'
    ],
    secondarySymptoms: [
      'Radiation to arm/jaw/back',
      'Fatigue',
      'Dizziness',
      'Palpitations'
    ],
    redFlags: [
      'Crushing chest pain',
      'Pain radiating to left arm/jaw',
      'Diaphoresis with chest pain',
      'SBP <90 mmHg',
      'HR >100 or <60 bpm'
    ],
    assessmentMnemonics: ['OPQRST', 'SAMPLE'],
    interventions: [
      'Oxygen if SpO2 <94%',
      'Aspirin 324mg (chewed)',
      'Nitroglycerin if available',
      '12-lead ECG',
      'IV access'
    ]
  },
  {
    id: 'stroke',
    emergency: 'Stroke',
    category: 'neurological',
    priority: 'critical',
    primarySymptoms: [
      'Facial drooping',
      'Arm weakness/drift',
      'Speech difficulties',
      'Sudden severe headache'
    ],
    secondarySymptoms: [
      'Vision changes',
      'Confusion',
      'Balance problems',
      'Numbness'
    ],
    redFlags: [
      'Sudden onset symptoms',
      'FAST positive',
      'GCS <15',
      'Blood glucose abnormal',
      'Unequal pupils'
    ],
    assessmentMnemonics: ['FAST', 'BEFAST', 'GCS'],
    interventions: [
      'Note time of onset',
      'Blood glucose check',
      'Oxygen if hypoxic',
      'IV access',
      'Stroke alert activation'
    ]
  },
  {
    id: 'trauma',
    emergency: 'Major Trauma',
    category: 'trauma',
    priority: 'critical',
    primarySymptoms: [
      'Mechanism of injury',
      'Obvious deformities',
      'Active bleeding',
      'Altered mental status'
    ],
    secondarySymptoms: [
      'Pain',
      'Swelling',
      'Discoloration',
      'Loss of function'
    ],
    redFlags: [
      'Penetrating trauma',
      'High-speed MVC',
      'Fall >20 feet',
      'Unstable vitals',
      'GCS <13'
    ],
    assessmentMnemonics: ['MARCH', 'DCAP-BTLS', 'SAMPLE'],
    interventions: [
      'Control bleeding',
      'C-spine precautions',
      'High-flow oxygen',
      'Large bore IVs',
      'Trauma center transport'
    ]
  },
  {
    id: 'respiratory-distress',
    emergency: 'Respiratory Distress',
    category: 'respiratory',
    priority: 'high',
    primarySymptoms: [
      'Shortness of breath',
      'Abnormal breathing sounds',
      'Use of accessory muscles',
      'Cyanosis'
    ],
    secondarySymptoms: [
      'Chest tightness',
      'Wheezing',
      'Cough',
      'Fatigue'
    ],
    redFlags: [
      'SpO2 <90%',
      'Unable to speak full sentences',
      'Tripod positioning',
      'Silent chest',
      'Cyanosis'
    ],
    assessmentMnemonics: ['OPQRST', 'SAMPLE'],
    interventions: [
      'High-flow oxygen',
      'Albuterol nebulizer',
      'Assisted ventilation if needed',
      'IV access',
      'Consider CPAP'
    ]
  },
  {
    id: 'altered-mental-status',
    emergency: 'Altered Mental Status',
    category: 'neurological',
    priority: 'high',
    primarySymptoms: [
      'Confusion',
      'Disorientation',
      'Agitation',
      'Decreased responsiveness'
    ],
    secondarySymptoms: [
      'Memory problems',
      'Inappropriate behavior',
      'Slurred speech',
      'Unsteady gait'
    ],
    redFlags: [
      'GCS <13',
      'Blood glucose abnormal',
      'Fever with confusion',
      'Signs of trauma',
      'Posturing'
    ],
    assessmentMnemonics: ['AEIOU-TIPS', 'GCS', 'SAMPLE'],
    interventions: [
      'Blood glucose check',
      'Thiamine if alcoholic',
      'Oxygen if hypoxic',
      'IV access',
      'Consider naloxone'
    ]
  }
];

export const dcapBtlsAssessment = {
  acronym: 'DCAP-BTLS',
  description: 'Physical examination mnemonic for trauma assessment',
  components: [
    { letter: 'D', term: 'Deformities', description: 'Abnormal shape or contour' },
    { letter: 'C', term: 'Contusions', description: 'Bruising or discoloration' },
    { letter: 'A', term: 'Abrasions', description: 'Scrapes or surface wounds' },
    { letter: 'P', term: 'Punctures', description: 'Penetrating wounds or holes' },
    { letter: 'B', term: 'Burns', description: 'Thermal, chemical, or electrical injury' },
    { letter: 'T', term: 'Tenderness', description: 'Pain upon palpation' },
    { letter: 'L', term: 'Lacerations', description: 'Cuts or tears in tissue' },
    { letter: 'S', term: 'Swelling', description: 'Edema or enlargement' }
  ]
};