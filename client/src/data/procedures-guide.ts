export interface Procedure {
  id: string;
  name: string;
  category: 'airway' | 'circulation' | 'monitoring' | 'trauma' | 'ob';
  certificationLevel: 'EMT' | 'AEMT' | 'Paramedic';
  indications: string[];
  contraindications: string[];
  equipment: string[];
  steps: ProcedureStep[];
  complications: string[];
  tips: string[];
}

export interface ProcedureStep {
  number: number;
  action: string;
  details?: string;
  warning?: string;
}

export const procedures: Procedure[] = [
  {
    id: 'endotracheal-intubation',
    name: 'Endotracheal Intubation',
    category: 'airway',
    certificationLevel: 'Paramedic',
    indications: [
      'Cardiac arrest',
      'Respiratory failure',
      'Inability to protect airway',
      'Need for prolonged ventilation'
    ],
    contraindications: [
      'Severe facial trauma (relative)',
      'Suspected epiglottitis in children',
      'Cervical spine injury (use inline stabilization)'
    ],
    equipment: [
      'Laryngoscope with Mac/Miller blades',
      'ETT tubes (6.0-9.0mm)',
      'Stylet',
      'BVM with mask',
      'Suction (Yankauer)',
      'EtCO2 detector',
      'Stethoscope'
    ],
    steps: [
      {
        number: 1,
        action: 'Preoxygenate patient',
        details: '100% oxygen for 3-5 minutes via BVM'
      },
      {
        number: 2,
        action: 'Position patient',
        details: 'Sniffing position or ramped position for obese patients'
      },
      {
        number: 3,
        action: 'Insert laryngoscope',
        details: 'Left hand, insert blade and advance to vallecula (Mac) or lift epiglottis (Miller)'
      },
      {
        number: 4,
        action: 'Visualize vocal cords',
        details: 'Lift blade up and forward, do not rock back',
        warning: 'If no view, try BURP or different blade'
      },
      {
        number: 5,
        action: 'Insert ETT',
        details: 'Pass tube through cords, see cuff disappear, remove stylet'
      },
      {
        number: 6,
        action: 'Inflate cuff',
        details: '5-10mL air, check pilot balloon'
      },
      {
        number: 7,
        action: 'Confirm placement',
        details: 'EtCO2, bilateral breath sounds, chest rise',
        warning: 'Must have EtCO2 confirmation'
      },
      {
        number: 8,
        action: 'Secure tube',
        details: 'Tape or commercial device, note depth at teeth'
      }
    ],
    complications: [
      'Esophageal intubation',
      'Right mainstem intubation',
      'Aspiration',
      'Laryngeal trauma',
      'Hypoxia during procedure'
    ],
    tips: [
      'Time limit: 30 seconds per attempt',
      'If difficult airway, consider King LT or LMA',
      'Always have backup plan',
      'Continuous EtCO2 monitoring'
    ]
  },
  {
    id: 'iv-access',
    name: 'Intravenous Access',
    category: 'circulation',
    certificationLevel: 'AEMT',
    indications: [
      'Medication administration',
      'Fluid resuscitation',
      'Blood sampling',
      'Emergency vascular access'
    ],
    contraindications: [
      'Infection at insertion site',
      'Hematoma or injury at site',
      'AV fistula or graft in arm'
    ],
    equipment: [
      'IV catheters (14-24 gauge)',
      'IV tubing and fluid bags',
      'Alcohol prep pads',
      'Gloves',
      'Tourniquet',
      'Tape or dressing',
      'Saline flushes'
    ],
    steps: [
      {
        number: 1,
        action: 'Select appropriate site',
        details: 'Antecubital, forearm, or hand veins'
      },
      {
        number: 2,
        action: 'Apply tourniquet',
        details: '4-6 inches above insertion site'
      },
      {
        number: 3,
        action: 'Prep site',
        details: 'Clean with alcohol in circular motion'
      },
      {
        number: 4,
        action: 'Insert catheter',
        details: '15-30 degree angle, bevel up, advance until flash'
      },
      {
        number: 5,
        action: 'Advance catheter',
        details: 'Lower angle, advance catheter over needle'
      },
      {
        number: 6,
        action: 'Remove tourniquet',
        details: 'Apply pressure, remove needle'
      },
      {
        number: 7,
        action: 'Connect tubing',
        details: 'Attach IV tubing and check for patency'
      },
      {
        number: 8,
        action: 'Secure catheter',
        details: 'Tape securely, label with date/time'
      }
    ],
    complications: [
      'Infiltration',
      'Phlebitis',
      'Air embolism',
      'Nerve damage',
      'Arterial puncture'
    ],
    tips: [
      'Use largest gauge appropriate for patient',
      'Warm hands improve vein visibility',
      'Multiple attempts increase infection risk',
      'Consider IO if IV difficult'
    ]
  },
  {
    id: 'io-access',
    name: 'Intraosseous Access',
    category: 'circulation',
    certificationLevel: 'AEMT',
    indications: [
      'Failed IV access',
      'Emergency medication administration',
      'Cardiac arrest',
      'Shock states'
    ],
    contraindications: [
      'Fracture at insertion site',
      'Infection at insertion site',
      'Previous orthopedic hardware'
    ],
    equipment: [
      'IO drill and needles',
      'Saline flush',
      'Lidocaine for conscious patients',
      'Alcohol prep',
      'Gloves'
    ],
    steps: [
      {
        number: 1,
        action: 'Select insertion site',
        details: 'Proximal tibia (most common) or humeral head'
      },
      {
        number: 2,
        action: 'Prep site',
        details: 'Clean with alcohol prep'
      },
      {
        number: 3,
        action: 'Insert needle',
        details: 'Perpendicular to bone, drill until pop felt'
      },
      {
        number: 4,
        action: 'Remove stylet',
        details: 'Should stand upright without support'
      },
      {
        number: 5,
        action: 'Flush with saline',
        details: '5-10mL saline to confirm placement'
      },
      {
        number: 6,
        action: 'Secure needle',
        details: 'Tape and secure tubing'
      }
    ],
    complications: [
      'Osteomyelitis (rare)',
      'Compartment syndrome',
      'Infiltration',
      'Pain during infusion'
    ],
    tips: [
      'Use lidocaine before infusion in conscious patients',
      'Pressure bag may be needed for rapid infusion',
      'Remove within 24 hours if possible'
    ]
  }
];