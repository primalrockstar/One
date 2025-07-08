export interface TraumaProtocol {
  id: string;
  name: string;
  category: 'assessment' | 'intervention' | 'transport';
  steps: string[];
  criticalActions: string[];
  redFlags: string[];
}

export const traumaProtocols: TraumaProtocol[] = [
  {
    id: 'march-algorithm',
    name: 'MARCH Algorithm',
    category: 'assessment',
    steps: [
      'M - Massive Hemorrhage: Control life-threatening bleeding first',
      'A - Airway: Secure airway with C-spine protection',
      'R - Respiratory: Assess breathing and treat pneumothorax',
      'C - Circulation: Check pulse, treat shock, IV access',
      'H - Hypothermia: Prevent heat loss, warm patient'
    ],
    criticalActions: [
      'Direct pressure for bleeding',
      'Tourniquet for extremity hemorrhage',
      'Jaw thrust for airway',
      'Needle decompression for tension pneumo',
      'Fluid resuscitation for shock'
    ],
    redFlags: [
      'Penetrating torso trauma',
      'Unstable vital signs',
      'Altered mental status',
      'Severe mechanism of injury'
    ]
  },
  {
    id: 'rapid-trauma-assessment',
    name: 'Rapid Trauma Assessment',
    category: 'assessment',
    steps: [
      'Head-to-toe systematic examination',
      'DCAP-BTLS for each body region',
      'Assess for hidden injuries',
      'Document all findings',
      'Reassess frequently'
    ],
    criticalActions: [
      'Log roll with spinal immobilization',
      'Palpate all bones and joints',
      'Check distal pulses and sensation',
      'Inspect for entrance/exit wounds'
    ],
    redFlags: [
      'Penetrating wounds',
      'Obvious deformities',
      'Absent pulses',
      'Neurological deficits'
    ]
  }
];

export interface BurnAssessment {
  degree: string;
  characteristics: string[];
  treatment: string[];
  prognosis: string;
}

export const burnClassification: BurnAssessment[] = [
  {
    degree: 'First Degree (Superficial)',
    characteristics: [
      'Red, dry skin',
      'Painful to touch',
      'No blisters',
      'Blanches with pressure'
    ],
    treatment: [
      'Cool water irrigation',
      'Pain control',
      'Topical aloe vera',
      'Usually outpatient management'
    ],
    prognosis: 'Heals in 3-7 days without scarring'
  },
  {
    degree: 'Second Degree (Partial Thickness)',
    characteristics: [
      'Red, moist skin',
      'Blisters present',
      'Very painful',
      'May appear white or pale'
    ],
    treatment: [
      'Cool irrigation (not ice)',
      'Sterile dressings',
      'Pain management',
      'IV fluids if >20% BSA'
    ],
    prognosis: 'Heals in 1-3 weeks, may scar'
  },
  {
    degree: 'Third Degree (Full Thickness)',
    characteristics: [
      'White, brown, or charred',
      'Dry, leathery texture',
      'Painless (nerve destruction)',
      'Does not blanch'
    ],
    treatment: [
      'Immediate burn center',
      'Aggressive fluid resuscitation',
      'Airway management',
      'Pain control'
    ],
    prognosis: 'Requires skin grafting'
  }
];

export interface TourniquetApplication {
  indications: string[];
  contraindications: string[];
  steps: string[];
  complications: string[];
}

export const tourniquetGuide: TourniquetApplication = {
  indications: [
    'Severe extremity hemorrhage',
    'Traumatic amputation',
    'Arterial bleeding not controlled by pressure',
    'Multiple casualties (triage situation)'
  ],
  contraindications: [
    'Venous bleeding only',
    'Bleeding easily controlled by pressure',
    'Crush injuries with tissue destruction'
  ],
  steps: [
    'Place 2-3 inches above wound (closer to heart)',
    'Tighten until bleeding stops completely',
    'Note time of application',
    'Do not remove in field',
    'Document and communicate to receiving facility'
  ],
  complications: [
    'Tissue necrosis if left too long',
    'Compartment syndrome',
    'Nerve damage',
    'Conversion to amputation'
  ]
};