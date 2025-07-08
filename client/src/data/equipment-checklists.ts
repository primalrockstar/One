export interface EquipmentItem {
  id: string;
  name: string;
  category: 'airway' | 'breathing' | 'circulation' | 'medications' | 'trauma' | 'monitoring' | 'immobilization' | 'delivery';
  required: boolean;
  quantity: number;
  expirationTracked: boolean;
  notes?: string;
  certification: 'BLS' | 'ALS' | 'Both';
}

export interface ChecklistTemplate {
  id: string;
  name: string;
  type: 'daily' | 'weekly' | 'monthly' | 'post-call';
  ambulanceType: 'BLS' | 'ALS';
  items: EquipmentItem[];
}

export const blsEquipmentChecklist: ChecklistTemplate = {
  id: 'bls-daily',
  name: 'BLS Ambulance Daily Check',
  type: 'daily',
  ambulanceType: 'BLS',
  items: [
    // Airway Management
    {
      id: 'bvm-adult',
      name: 'Adult BVM with reservoir',
      category: 'airway',
      required: true,
      quantity: 1,
      expirationTracked: false,
      certification: 'BLS'
    },
    {
      id: 'bvm-peds',
      name: 'Pediatric BVM',
      category: 'airway',
      required: true,
      quantity: 1,
      expirationTracked: false,
      certification: 'BLS'
    },
    {
      id: 'opa-set',
      name: 'OPA Set (sizes 0-5)',
      category: 'airway',
      required: true,
      quantity: 6,
      expirationTracked: false,
      certification: 'BLS'
    },
    {
      id: 'npa-set',
      name: 'NPA Set (sizes 6-9 Fr)',
      category: 'airway',
      required: true,
      quantity: 4,
      expirationTracked: false,
      certification: 'BLS'
    },
    {
      id: 'suction-portable',
      name: 'Portable Suction Unit',
      category: 'airway',
      required: true,
      quantity: 1,
      expirationTracked: false,
      certification: 'BLS'
    },
    {
      id: 'yankauer',
      name: 'Yankauer Suction Tips',
      category: 'airway',
      required: true,
      quantity: 3,
      expirationTracked: false,
      certification: 'BLS'
    },
    
    // Breathing
    {
      id: 'o2-tank-d',
      name: 'D-Size Oxygen Tank (Full)',
      category: 'breathing',
      required: true,
      quantity: 2,
      expirationTracked: true,
      notes: 'Check pressure >1800 PSI',
      certification: 'BLS'
    },
    {
      id: 'o2-tank-e',
      name: 'E-Size Oxygen Tank (Portable)',
      category: 'breathing',
      required: true,
      quantity: 1,
      expirationTracked: true,
      certification: 'BLS'
    },
    {
      id: 'nasal-cannula',
      name: 'Nasal Cannula (Adult/Peds)',
      category: 'breathing',
      required: true,
      quantity: 4,
      expirationTracked: true,
      certification: 'BLS'
    },
    {
      id: 'nrb-mask',
      name: 'Non-Rebreather Masks',
      category: 'breathing',
      required: true,
      quantity: 3,
      expirationTracked: true,
      certification: 'BLS'
    },
    
    // Circulation
    {
      id: 'aed',
      name: 'AED with Pads',
      category: 'circulation',
      required: true,
      quantity: 1,
      expirationTracked: true,
      notes: 'Check battery and pad expiration',
      certification: 'BLS'
    },
    {
      id: 'bp-cuff-adult',
      name: 'Adult BP Cuff',
      category: 'circulation',
      required: true,
      quantity: 1,
      expirationTracked: false,
      certification: 'BLS'
    },
    {
      id: 'bp-cuff-peds',
      name: 'Pediatric BP Cuff',
      category: 'circulation',
      required: true,
      quantity: 1,
      expirationTracked: false,
      certification: 'BLS'
    },
    {
      id: 'stethoscope',
      name: 'Stethoscope',
      category: 'circulation',
      required: true,
      quantity: 2,
      expirationTracked: false,
      certification: 'BLS'
    },
    
    // Trauma
    {
      id: 'trauma-dressings',
      name: 'Trauma Dressings (5x9, 8x10)',
      category: 'trauma',
      required: true,
      quantity: 6,
      expirationTracked: true,
      certification: 'BLS'
    },
    {
      id: 'gauze-4x4',
      name: '4x4 Gauze Pads',
      category: 'trauma',
      required: true,
      quantity: 20,
      expirationTracked: true,
      certification: 'BLS'
    },
    {
      id: 'kerlix-rolls',
      name: 'Kerlix Bandage Rolls',
      category: 'trauma',
      required: true,
      quantity: 6,
      expirationTracked: true,
      certification: 'BLS'
    },
    {
      id: 'triangular-bandages',
      name: 'Triangular Bandages',
      category: 'trauma',
      required: true,
      quantity: 4,
      expirationTracked: false,
      certification: 'BLS'
    },
    {
      id: 'tape-medical',
      name: 'Medical Tape (1", 2")',
      category: 'trauma',
      required: true,
      quantity: 4,
      expirationTracked: false,
      certification: 'BLS'
    },
    {
      id: 'tourniquet',
      name: 'CAT Tourniquet',
      category: 'trauma',
      required: true,
      quantity: 2,
      expirationTracked: false,
      certification: 'BLS'
    },
    
    // Medications (BLS Level)
    {
      id: 'aspirin',
      name: 'Aspirin 324mg',
      category: 'medications',
      required: true,
      quantity: 10,
      expirationTracked: true,
      certification: 'BLS'
    },
    {
      id: 'oral-glucose',
      name: 'Oral Glucose Gel',
      category: 'medications',
      required: true,
      quantity: 3,
      expirationTracked: true,
      certification: 'BLS'
    },
    {
      id: 'epi-pen',
      name: 'Epinephrine Auto-Injector',
      category: 'medications',
      required: true,
      quantity: 2,
      expirationTracked: true,
      certification: 'BLS'
    },
    {
      id: 'naloxone',
      name: 'Naloxone (Narcan) 4mg IN',
      category: 'medications',
      required: true,
      quantity: 4,
      expirationTracked: true,
      certification: 'BLS'
    },
    {
      id: 'albuterol',
      name: 'Albuterol 2.5mg Nebules',
      category: 'medications',
      required: true,
      quantity: 6,
      expirationTracked: true,
      certification: 'BLS'
    },
    
    // Immobilization
    {
      id: 'cervical-collars',
      name: 'C-Collar Set (Adult/Peds)',
      category: 'immobilization',
      required: true,
      quantity: 4,
      expirationTracked: false,
      certification: 'BLS'
    },
    {
      id: 'long-board',
      name: 'Long Spine Board',
      category: 'immobilization',
      required: true,
      quantity: 1,
      expirationTracked: false,
      certification: 'BLS'
    },
    {
      id: 'head-blocks',
      name: 'Head Immobilization Blocks',
      category: 'immobilization',
      required: true,
      quantity: 1,
      expirationTracked: false,
      certification: 'BLS'
    },
    {
      id: 'straps',
      name: 'Immobilization Straps',
      category: 'immobilization',
      required: true,
      quantity: 6,
      expirationTracked: false,
      certification: 'BLS'
    }
  ]
};

export const alsEquipmentChecklist: ChecklistTemplate = {
  id: 'als-daily',
  name: 'ALS Ambulance Daily Check',
  type: 'daily',
  ambulanceType: 'ALS',
  items: [
    // Include all BLS items plus ALS-specific
    ...blsEquipmentChecklist.items,
    
    // Advanced Airway
    {
      id: 'intubation-kit',
      name: 'Intubation Kit with Laryngoscope',
      category: 'airway',
      required: true,
      quantity: 1,
      expirationTracked: false,
      certification: 'ALS'
    },
    {
      id: 'ett-tubes',
      name: 'ET Tubes (sizes 6.0-9.0)',
      category: 'airway',
      required: true,
      quantity: 8,
      expirationTracked: true,
      certification: 'ALS'
    },
    {
      id: 'bougie',
      name: 'Bougie/Stylet',
      category: 'airway',
      required: true,
      quantity: 2,
      expirationTracked: false,
      certification: 'ALS'
    },
    {
      id: 'king-airway',
      name: 'King LT Airway (sizes 3-5)',
      category: 'airway',
      required: true,
      quantity: 3,
      expirationTracked: true,
      certification: 'ALS'
    },
    {
      id: 'etco2-detector',
      name: 'EtCO2 Detector/Capnography',
      category: 'airway',
      required: true,
      quantity: 1,
      expirationTracked: false,
      certification: 'ALS'
    },
    
    // Advanced Circulation
    {
      id: 'monitor-defibrillator',
      name: 'Monitor/Defibrillator',
      category: 'circulation',
      required: true,
      quantity: 1,
      expirationTracked: false,
      notes: 'Check battery, paper, leads',
      certification: 'ALS'
    },
    {
      id: 'pacing-pads',
      name: 'Transcutaneous Pacing Pads',
      category: 'circulation',
      required: true,
      quantity: 2,
      expirationTracked: true,
      certification: 'ALS'
    },
    {
      id: 'iv-catheters',
      name: 'IV Catheters (18-24 gauge)',
      category: 'circulation',
      required: true,
      quantity: 12,
      expirationTracked: true,
      certification: 'ALS'
    },
    {
      id: 'iv-tubing',
      name: 'IV Administration Sets',
      category: 'circulation',
      required: true,
      quantity: 6,
      expirationTracked: true,
      certification: 'ALS'
    },
    {
      id: 'normal-saline',
      name: 'Normal Saline 1000mL',
      category: 'circulation',
      required: true,
      quantity: 4,
      expirationTracked: true,
      certification: 'ALS'
    },
    {
      id: 'io-kit',
      name: 'Intraosseous Drill Kit',
      category: 'circulation',
      required: true,
      quantity: 1,
      expirationTracked: false,
      certification: 'ALS'
    },
    
    // Advanced Medications
    {
      id: 'epinephrine-1-10000',
      name: 'Epinephrine 1:10,000 (1mg/10mL)',
      category: 'medications',
      required: true,
      quantity: 6,
      expirationTracked: true,
      certification: 'ALS'
    },
    {
      id: 'atropine',
      name: 'Atropine 1mg/10mL',
      category: 'medications',
      required: true,
      quantity: 4,
      expirationTracked: true,
      certification: 'ALS'
    },
    {
      id: 'amiodarone',
      name: 'Amiodarone 150mg/3mL',
      category: 'medications',
      required: true,
      quantity: 4,
      expirationTracked: true,
      certification: 'ALS'
    },
    {
      id: 'dextrose-50',
      name: 'Dextrose 50% (25g/50mL)',
      category: 'medications',
      required: true,
      quantity: 4,
      expirationTracked: true,
      certification: 'ALS'
    },
    {
      id: 'narcan-iv',
      name: 'Naloxone 0.4mg/mL vials',
      category: 'medications',
      required: true,
      quantity: 6,
      expirationTracked: true,
      certification: 'ALS'
    },
    {
      id: 'versed',
      name: 'Midazolam 5mg/mL',
      category: 'medications',
      required: true,
      quantity: 4,
      expirationTracked: true,
      certification: 'ALS'
    }
  ]
};

export const weeklyMaintenanceChecklist: ChecklistTemplate = {
  id: 'weekly-maintenance',
  name: 'Weekly Equipment Maintenance',
  type: 'weekly',
  ambulanceType: 'Both',
  items: [
    {
      id: 'suction-function',
      name: 'Test suction unit function',
      category: 'airway',
      required: true,
      quantity: 1,
      expirationTracked: false,
      notes: 'Check vacuum pressure >300 mmHg',
      certification: 'Both'
    },
    {
      id: 'o2-regulator',
      name: 'Test oxygen regulator/flowmeter',
      category: 'breathing',
      required: true,
      quantity: 1,
      expirationTracked: false,
      certification: 'Both'
    },
    {
      id: 'aed-self-test',
      name: 'Verify AED self-test passed',
      category: 'circulation',
      required: true,
      quantity: 1,
      expirationTracked: false,
      certification: 'Both'
    },
    {
      id: 'monitor-calibration',
      name: 'Monitor/defibrillator calibration check',
      category: 'circulation',
      required: true,
      quantity: 1,
      expirationTracked: false,
      notes: 'ALS units only',
      certification: 'ALS'
    },
    {
      id: 'expiration-audit',
      name: 'Medication expiration audit',
      category: 'medications',
      required: true,
      quantity: 1,
      expirationTracked: false,
      notes: 'Replace items expiring within 30 days',
      certification: 'Both'
    }
  ]
};