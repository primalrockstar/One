export interface DeliveryStage {
  stage: string;
  duration: string;
  characteristics: string[];
  interventions: string[];
}

export const laborStages: DeliveryStage[] = [
  {
    stage: 'First Stage - Early Labor',
    duration: '6-12 hours (primigravida)',
    characteristics: [
      'Cervical dilation 0-3 cm',
      'Mild, irregular contractions',
      'Contractions 5-20 minutes apart',
      'Patient can talk through contractions'
    ],
    interventions: [
      'Encourage ambulation',
      'Hydration',
      'Support and reassurance',
      'Monitor fetal heart rate'
    ]
  },
  {
    stage: 'First Stage - Active Labor',
    duration: '3-5 hours (primigravida)',
    characteristics: [
      'Cervical dilation 4-7 cm',
      'Strong, regular contractions',
      'Contractions 3-5 minutes apart',
      'Patient focuses inward during contractions'
    ],
    interventions: [
      'Position of comfort',
      'IV access if transport indicated',
      'Pain management as appropriate',
      'Continuous monitoring'
    ]
  },
  {
    stage: 'First Stage - Transition',
    duration: '30 minutes - 2 hours',
    characteristics: [
      'Cervical dilation 8-10 cm',
      'Very strong contractions',
      'Contractions 2-3 minutes apart',
      'Urge to push may begin'
    ],
    interventions: [
      'Prepare for imminent delivery',
      'Discourage pushing until fully dilated',
      'Support and encouragement',
      'Prepare delivery equipment'
    ]
  },
  {
    stage: 'Second Stage - Delivery',
    duration: '30 minutes - 3 hours',
    characteristics: [
      'Complete cervical dilation',
      'Strong urge to push',
      'Crowning visible',
      'Birth of baby'
    ],
    interventions: [
      'Support perineum',
      'Control head delivery',
      'Clear airway immediately',
      'Clamp and cut cord'
    ]
  },
  {
    stage: 'Third Stage - Placenta',
    duration: '5-30 minutes',
    characteristics: [
      'Placental separation',
      'Gush of blood',
      'Cord lengthening',
      'Uterine contraction'
    ],
    interventions: [
      'Do not pull on cord',
      'Massage uterus if bleeding',
      'Inspect placenta if delivered',
      'Monitor for hemorrhage'
    ]
  }
];

export interface ApgarScore {
  component: string;
  score0: string;
  score1: string;
  score2: string;
}

export const apgarScoring: ApgarScore[] = [
  {
    component: 'Appearance (Color)',
    score0: 'Blue/Pale all over',
    score1: 'Pink body, blue extremities',
    score2: 'Pink all over'
  },
  {
    component: 'Pulse (Heart Rate)',
    score0: 'Absent',
    score1: '<100 bpm',
    score2: '>100 bpm'
  },
  {
    component: 'Grimace (Reflex)',
    score0: 'No response',
    score1: 'Grimace/weak cry',
    score2: 'Vigorous cry'
  },
  {
    component: 'Activity (Tone)',
    score0: 'Limp',
    score1: 'Some flexion',
    score2: 'Active motion'
  },
  {
    component: 'Respiration',
    score0: 'Absent',
    score1: 'Slow/irregular',
    score2: 'Good cry'
  }
];

export interface NeonatalResuscitation {
  step: number;
  assessment: string;
  action: string;
  timeframe: string;
}

export const nrpSteps: NeonatalResuscitation[] = [
  {
    step: 1,
    assessment: 'Initial assessment',
    action: 'Warm, position, clear airway if needed, dry, stimulate',
    timeframe: '0-30 seconds'
  },
  {
    step: 2,
    assessment: 'Breathing and heart rate',
    action: 'If apneic or HR <100: PPV with 21% oxygen',
    timeframe: '30-60 seconds'
  },
  {
    step: 3,
    assessment: 'Heart rate after PPV',
    action: 'If HR <60: Continue PPV + chest compressions',
    timeframe: '60-90 seconds'
  },
  {
    step: 4,
    assessment: 'Heart rate with compressions',
    action: 'If HR <60: Epinephrine 0.01-0.03 mg/kg IV',
    timeframe: 'After 90 seconds'
  }
];

export interface OBEmergency {
  condition: string;
  signs: string[];
  treatment: string[];
  complications: string[];
}

export const obEmergencies: OBEmergency[] = [
  {
    condition: 'Preeclampsia/Eclampsia',
    signs: [
      'Hypertension >140/90',
      'Proteinuria',
      'Headache',
      'Visual disturbances',
      'Seizures (eclampsia)'
    ],
    treatment: [
      'Left lateral position',
      'Magnesium sulfate 4-6g IV over 20 min',
      'Benzodiazepines for seizures',
      'Rapid transport'
    ],
    complications: [
      'Maternal seizures',
      'Stroke',
      'Placental abruption',
      'Fetal compromise'
    ]
  },
  {
    condition: 'Postpartum Hemorrhage',
    signs: [
      'Blood loss >500mL vaginal delivery',
      'Blood loss >1000mL C-section',
      'Soaking >1 pad per hour',
      'Signs of shock'
    ],
    treatment: [
      'Uterine massage',
      'IV access x2',
      'Rapid fluid resuscitation',
      'Oxytocin if available'
    ],
    complications: [
      'Hypovolemic shock',
      'DIC',
      'Maternal death'
    ]
  }
];