export interface ECGRhythm {
  id: string;
  name: string;
  category: 'normal' | 'bradycardia' | 'tachycardia' | 'irregular' | 'blocks' | 'lethal';
  rate: string;
  characteristics: string[];
  treatment: string[];
  considerations: string[];
}

export const ecgRhythms: ECGRhythm[] = [
  {
    id: 'normal-sinus',
    name: 'Normal Sinus Rhythm',
    category: 'normal',
    rate: '60-100 bpm',
    characteristics: [
      'P wave before each QRS',
      'PR interval 0.12-0.20 seconds',
      'QRS < 0.12 seconds',
      'Regular rhythm'
    ],
    treatment: ['No treatment required'],
    considerations: ['Normal cardiac rhythm']
  },
  {
    id: 'sinus-brady',
    name: 'Sinus Bradycardia',
    category: 'bradycardia',
    rate: '<60 bpm',
    characteristics: [
      'P wave before each QRS',
      'Regular rhythm',
      'Rate < 60 bpm',
      'Normal P-wave morphology'
    ],
    treatment: [
      'Atropine 0.5mg IV if symptomatic',
      'Transcutaneous pacing if severe',
      'Epinephrine infusion if refractory'
    ],
    considerations: [
      'May be normal in athletes',
      'Consider underlying causes (drugs, MI, increased ICP)'
    ]
  },
  {
    id: 'sinus-tachy',
    name: 'Sinus Tachycardia',
    category: 'tachycardia',
    rate: '>100 bpm',
    characteristics: [
      'P wave before each QRS',
      'Regular rhythm',
      'Rate > 100 bpm',
      'Normal P-wave morphology'
    ],
    treatment: [
      'Treat underlying cause',
      'IV fluids if dehydrated',
      'Beta-blockers if appropriate'
    ],
    considerations: [
      'Usually secondary to underlying condition',
      'Consider pain, fever, hypovolemia, drugs'
    ]
  },
  {
    id: 'afib',
    name: 'Atrial Fibrillation',
    category: 'irregular',
    rate: 'Variable (usually 80-180 bpm)',
    characteristics: [
      'Irregularly irregular rhythm',
      'No discernible P waves',
      'Fibrillatory waves (f waves)',
      'Variable ventricular response'
    ],
    treatment: [
      'Rate control: Metoprolol, Diltiazem',
      'Anticoagulation if indicated',
      'Cardioversion if unstable'
    ],
    considerations: [
      'Stroke risk assessment',
      'New onset vs chronic',
      'Hemodynamic stability'
    ]
  },
  {
    id: 'vtach',
    name: 'Ventricular Tachycardia',
    category: 'lethal',
    rate: '150-250 bpm',
    characteristics: [
      'Wide QRS complexes (>0.12 sec)',
      'Regular rhythm',
      'Rate 150-250 bpm',
      'No discernible P waves'
    ],
    treatment: [
      'If pulseless: Defibrillation',
      'If stable: Amiodarone 150mg IV',
      'Synchronized cardioversion if unstable'
    ],
    considerations: [
      'Check pulse immediately',
      'Distinguish from SVT with aberrancy',
      'Consider underlying ischemia'
    ]
  },
  {
    id: 'vfib',
    name: 'Ventricular Fibrillation',
    category: 'lethal',
    rate: 'No organized rate',
    characteristics: [
      'Chaotic, irregular waveform',
      'No organized QRS complexes',
      'Coarse vs fine V-fib',
      'No pulse'
    ],
    treatment: [
      'Immediate defibrillation',
      'CPR between shocks',
      'Epinephrine 1mg IV q3-5min',
      'Amiodarone 300mg IV'
    ],
    considerations: [
      'Most common arrest rhythm',
      'Survival decreases 7-10% per minute',
      'High-quality CPR essential'
    ]
  }
];

export interface TwelveLeadFinding {
  id: string;
  name: string;
  leads: string[];
  significance: string;
  treatment: string[];
}

export const twelveLeadFindings: TwelveLeadFinding[] = [
  {
    id: 'anterior-stemi',
    name: 'Anterior STEMI',
    leads: ['V1', 'V2', 'V3', 'V4'],
    significance: 'LAD occlusion - large territory infarct',
    treatment: [
      'Aspirin 324mg',
      'Clopidogrel 600mg',
      'Heparin per protocol',
      'Primary PCI < 90 minutes'
    ]
  },
  {
    id: 'inferior-stemi',
    name: 'Inferior STEMI',
    leads: ['II', 'III', 'aVF'],
    significance: 'RCA occlusion - watch for bradycardia',
    treatment: [
      'Right-sided ECG',
      'Avoid nitroglycerin if RV involvement',
      'Atropine for bradycardia',
      'Primary PCI'
    ]
  },
  {
    id: 'lateral-stemi',
    name: 'Lateral STEMI',
    leads: ['I', 'aVL', 'V5', 'V6'],
    significance: 'Circumflex artery occlusion',
    treatment: [
      'Standard STEMI protocol',
      'Watch for posterior involvement',
      'Primary PCI indicated'
    ]
  }
];