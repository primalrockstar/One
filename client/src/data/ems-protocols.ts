export interface EMSProtocol {
  id: string;
  name: string;
  category: 'adult' | 'pediatric' | 'operations';
  certificationLevel: 'EMT' | 'AEMT' | 'Paramedic' | 'All';
  indications: string[];
  assessment: string[];
  interventions: string[];
  medications: string[];
  transport: string[];
  contraindications?: string[];
  specialConsiderations?: string[];
}

export const emsProtocols: EMSProtocol[] = [
  {
    id: 'cardiac-arrest-adult',
    name: 'Cardiac Arrest (Non-Traumatic) - Adult',
    category: 'adult',
    certificationLevel: 'All',
    indications: [
      'Unresponsive patient',
      'No pulse',
      'Not breathing or agonal respirations'
    ],
    assessment: [
      'Check responsiveness',
      'Check pulse and breathing simultaneously',
      'Attach AED/monitor',
      'Identify reversible causes (H\'s and T\'s)'
    ],
    interventions: [
      'Begin high-quality CPR immediately',
      'Provide ventilations with 100% oxygen',
      'Defibrillate VF/VT per AED/monitor',
      'Rotate compressors every 2 minutes',
      'Minimize interruptions in chest compressions'
    ],
    medications: [
      'Epinephrine 1mg IV/IO every 3-5 minutes',
      'Amiodarone 300mg IV/IO for VF/VT (Paramedic)',
      'Consider reversible causes treatment'
    ],
    transport: [
      'Transport immediately with ongoing resuscitation',
      'Consider termination criteria per protocol',
      'Notify receiving facility'
    ],
    specialConsiderations: [
      'Continuous chest compressions with supraglottic airway',
      'Consider ECPR if available',
      'Target ETCO2 >10mmHg during CPR'
    ]
  },
  {
    id: 'acute-coronary-syndrome',
    name: 'Acute Coronary Syndrome',
    category: 'adult',
    certificationLevel: 'All',
    indications: [
      'Chest pain suggestive of cardiac origin',
      'ST elevation on 12-lead ECG',
      'History of coronary artery disease',
      'Cardiac risk factors present'
    ],
    assessment: [
      'Complete SAMPLE history',
      'Obtain 12-lead ECG within 10 minutes',
      'Assess pain using OPQRST',
      'Check vital signs every 5 minutes',
      'Evaluate for contraindications to aspirin/nitroglycerin'
    ],
    interventions: [
      'Position patient in position of comfort',
      'Administer high-flow oxygen if SpO2 <94%',
      'Establish IV access',
      'Continuous cardiac monitoring',
      'Prepare for rapid transport to STEMI center'
    ],
    medications: [
      'Aspirin 325mg chewed (EMT)',
      'Nitroglycerin 0.4mg SL every 5 minutes x3 (EMT)',
      'Morphine 2-4mg IV for pain management (AEMT/Paramedic)',
      'Clopidogrel 600mg loading dose (Paramedic)'
    ],
    transport: [
      'Rapid transport to appropriate facility',
      'Bypass closer facilities for STEMI center if indicated',
      'Transmit 12-lead ECG to receiving facility',
      'Continuous monitoring during transport'
    ],
    contraindications: [
      'Aspirin: Known allergy, active bleeding',
      'Nitroglycerin: Hypotension, recent ED medication use',
      'Right heart infarction (inferior STEMI)'
    ]
  },
  {
    id: 'stroke-alert',
    name: 'Stroke Alert Protocol',
    category: 'adult',
    certificationLevel: 'All',
    indications: [
      'Sudden onset neurological deficits',
      'Facial droop, arm weakness, speech difficulties',
      'Time of onset <4.5 hours',
      'Positive stroke screen (FAST, CPSS)'
    ],
    assessment: [
      'Establish time of last known normal',
      'Perform stroke screening tool (FAST)',
      'Check blood glucose level',
      'Assess airway, breathing, circulation',
      'Complete neurological assessment'
    ],
    interventions: [
      'Maintain airway patency',
      'Position head elevated 30 degrees if no trauma',
      'Establish IV access',
      'Nothing by mouth (NPO)',
      'Protect affected extremities'
    ],
    medications: [
      'Dextrose 25g IV if glucose <60mg/dL',
      'Thiamine 100mg IV before dextrose if chronic alcoholism',
      'Avoid antihypertensives unless >220/120'
    ],
    transport: [
      'Rapid transport to stroke center',
      'Notify receiving facility with stroke alert',
      'Continuous monitoring',
      'Document exact time of symptom onset'
    ],
    specialConsiderations: [
      'Time is brain - minimize scene time',
      'Consider helicopter transport if distance >30 minutes',
      'Family member should accompany if possible'
    ]
  },
  {
    id: 'anaphylaxis',
    name: 'Anaphylaxis Protocol',
    category: 'adult',
    certificationLevel: 'All',
    indications: [
      'Severe allergic reaction',
      'Respiratory distress with known allergen exposure',
      'Hypotension with allergic symptoms',
      'Multi-system involvement'
    ],
    assessment: [
      'Identify triggering allergen',
      'Assess airway for swelling',
      'Monitor for respiratory compromise',
      'Check for urticaria/angioedema',
      'Frequent vital sign monitoring'
    ],
    interventions: [
      'Remove/avoid continued allergen exposure',
      'Maintain airway - prepare for surgical airway',
      'High-flow oxygen',
      'Large bore IV access x2',
      'Aggressive fluid resuscitation if hypotensive'
    ],
    medications: [
      'Epinephrine 0.3mg IM (EMT auto-injector)',
      'Epinephrine 0.1mg IV push if severe (Paramedic)',
      'Albuterol 2.5mg nebulized (AEMT)',
      'Diphenhydramine 25-50mg IV (AEMT)',
      'Methylprednisolone 125mg IV (Paramedic)'
    ],
    transport: [
      'Rapid transport to emergency department',
      'Continuous monitoring',
      'Be prepared for repeat epinephrine',
      'Notify hospital of anaphylaxis'
    ]
  },
  {
    id: 'respiratory-failure',
    name: 'Acute Respiratory Failure',
    category: 'adult',
    certificationLevel: 'All',
    indications: [
      'SpO2 <90% on room air',
      'Severe respiratory distress',
      'Altered mental status with respiratory cause',
      'Cyanosis'
    ],
    assessment: [
      'Assess work of breathing',
      'Listen to lung sounds',
      'Check for JVD, peripheral edema',
      'Evaluate for pneumothorax',
      'Continuous pulse oximetry'
    ],
    interventions: [
      'Position patient upright if possible',
      'High-flow oxygen or CPAP',
      'Assist ventilations if needed',
      'Establish IV access',
      'Prepare for intubation if severe'
    ],
    medications: [
      'Albuterol 2.5mg nebulized for bronchospasm',
      'Furosemide 40mg IV for CHF (Paramedic)',
      'CPAP 5-10cm H2O pressure',
      'Consider nitroglycerin for CHF'
    ],
    transport: [
      'Rapid transport',
      'Continuous monitoring',
      'Be prepared for decompensation',
      'Notify receiving facility'
    ]
  },
  {
    id: 'diabetic-emergency',
    name: 'Diabetic Emergency',
    category: 'adult',
    certificationLevel: 'All',
    indications: [
      'Known diabetic with altered mental status',
      'Blood glucose <60 or >250mg/dL',
      'Signs of hypoglycemia or DKA',
      'Unconscious patient with diabetes history'
    ],
    assessment: [
      'Check blood glucose level',
      'Assess level of consciousness',
      'Look for medical alert tags',
      'Evaluate for signs of dehydration',
      'Check for fruity breath odor'
    ],
    interventions: [
      'Ensure airway patency',
      'Establish IV access',
      'Position patient appropriately',
      'Continuous monitoring',
      'Protect from injury if seizing'
    ],
    medications: [
      'Oral glucose 15g if conscious and able to swallow',
      'Dextrose 25g IV if glucose <60mg/dL',
      'Glucagon 1mg IM if no IV access',
      'Normal saline for dehydration in DKA'
    ],
    transport: [
      'Transport to appropriate facility',
      'Monitor blood glucose during transport',
      'Be prepared for rapid changes in consciousness',
      'Document response to treatment'
    ]
  },
  {
    id: 'seizure-adult',
    name: 'Seizure - Adult',
    category: 'adult',
    certificationLevel: 'All',
    indications: [
      'Active seizure activity',
      'Post-ictal state',
      'Status epilepticus',
      'First-time seizure'
    ],
    assessment: [
      'Ensure scene safety',
      'Assess duration of seizure',
      'Check blood glucose',
      'Evaluate for trauma',
      'Obtain seizure history'
    ],
    interventions: [
      'Protect patient from injury',
      'Do not restrain or place objects in mouth',
      'Position in recovery position post-ictally',
      'Suction airway if needed',
      'Establish IV access post-ictally'
    ],
    medications: [
      'Dextrose 25g IV if glucose <60mg/dL',
      'Lorazepam 2-4mg IV for status epilepticus (Paramedic)',
      'Diazepam 5-10mg rectal if no IV (AEMT)'
    ],
    transport: [
      'Transport to emergency department',
      'Monitor for recurrent seizures',
      'Document seizure characteristics',
      'Reassure patient post-ictally'
    ]
  },
  {
    id: 'overdose-opioid',
    name: 'Opioid Overdose',
    category: 'adult',
    certificationLevel: 'All',
    indications: [
      'Respiratory depression',
      'Pinpoint pupils',
      'Decreased level of consciousness',
      'Known or suspected opioid use'
    ],
    assessment: [
      'Assess respiratory effort',
      'Check pupil size',
      'Evaluate level of consciousness',
      'Look for track marks',
      'Check for other drug use'
    ],
    interventions: [
      'Ensure airway patency',
      'Assist ventilations if needed',
      'Establish IV access',
      'Continuous monitoring',
      'Prepare for aggressive behavior post-naloxone'
    ],
    medications: [
      'Naloxone 0.4-2mg IV/IM/IN',
      'Repeat naloxone every 2-3 minutes',
      'Consider naloxone drip for long-acting opioids'
    ],
    transport: [
      'Transport all patients',
      'Monitor for re-sedation',
      'Be prepared for combative behavior',
      'Document response to naloxone'
    ]
  },
  {
    id: 'trauma-multi-system',
    name: 'Multi-System Trauma',
    category: 'adult',
    certificationLevel: 'All',
    indications: [
      'High-energy mechanism of injury',
      'Multi-system involvement',
      'Hemodynamic instability',
      'Penetrating trauma'
    ],
    assessment: [
      'Primary survey (ABCDE)',
      'Rapid trauma assessment',
      'Identify life-threatening injuries',
      'Continuous reassessment',
      'Trauma team activation criteria'
    ],
    interventions: [
      'Maintain cervical spine immobilization',
      'Control hemorrhage',
      'Establish large bore IV access x2',
      'Aggressive fluid resuscitation',
      'Prepare for rapid transport'
    ],
    medications: [
      'Normal saline or LR for hypotension',
      'TXA 1g IV within 3 hours (Paramedic)',
      'Pain management with caution',
      'Avoid excessive fluids in penetrating trauma'
    ],
    transport: [
      'Rapid transport to trauma center',
      'Minimize scene time',
      'Continuous monitoring',
      'Trauma team notification'
    ]
  },
  {
    id: 'pediatric-respiratory',
    name: 'Pediatric Respiratory Distress',
    category: 'pediatric',
    certificationLevel: 'All',
    indications: [
      'Increased work of breathing',
      'Abnormal lung sounds',
      'Cyanosis or pallor',
      'Altered mental status'
    ],
    assessment: [
      'Pediatric Assessment Triangle',
      'Count respiratory rate',
      'Assess for retractions',
      'Listen to lung sounds',
      'Check oxygen saturation'
    ],
    interventions: [
      'Position of comfort',
      'Blow-by oxygen if tolerated',
      'Avoid agitating child',
      'Prepare appropriately sized equipment',
      'Consider CPAP if age appropriate'
    ],
    medications: [
      'Albuterol 2.5mg nebulized',
      'Epinephrine 1:1000 0.01mg/kg SQ for croup',
      'Dexamethasone 0.6mg/kg PO/IV for croup'
    ],
    transport: [
      'Transport to pediatric-capable facility',
      'Allow parent/caregiver to accompany',
      'Continuous monitoring',
      'Be prepared for decompensation'
    ]
  },
  {
    id: 'pediatric-seizure',
    name: 'Pediatric Seizure',
    category: 'pediatric',
    certificationLevel: 'All',
    indications: [
      'Active seizure in child',
      'Febrile seizure',
      'Status epilepticus',
      'Post-ictal state'
    ],
    assessment: [
      'Ensure scene safety',
      'Check rectal temperature',
      'Assess blood glucose',
      'Evaluate for trauma',
      'Obtain seizure history from parents'
    ],
    interventions: [
      'Protect from injury',
      'Position appropriately',
      'Suction if needed',
      'Cooling measures for fever',
      'Establish IV/IO access'
    ],
    medications: [
      'Dextrose 2-4ml/kg of D25 if hypoglycemic',
      'Lorazepam 0.1mg/kg IV for status epilepticus',
      'Diazepam 0.5mg/kg rectal if no IV access'
    ],
    transport: [
      'Transport to pediatric emergency department',
      'Allow parent to accompany',
      'Document seizure characteristics',
      'Monitor for recurrent seizures'
    ]
  },
  {
    id: 'psychiatric-emergency',
    name: 'Psychiatric Emergency',
    category: 'adult',
    certificationLevel: 'All',
    indications: [
      'Threat to self or others',
      'Altered behavior/judgment',
      'Suicidal or homicidal ideation',
      'Acute psychosis'
    ],
    assessment: [
      'Ensure scene safety',
      'Assess level of consciousness',
      'Check vital signs',
      'Evaluate for medical causes',
      'Assess suicide/violence risk'
    ],
    interventions: [
      'Maintain calm environment',
      'Establish rapport',
      'Remove potential weapons',
      'Consider physical restraints if necessary',
      'Establish IV access if medical cause suspected'
    ],
    medications: [
      'Dextrose if hypoglycemic',
      'Thiamine if chronic alcoholism',
      'Haloperidol 5mg IM for severe agitation (Paramedic)',
      'Lorazepam 2mg IM for agitation (Paramedic)'
    ],
    transport: [
      'Transport to appropriate facility',
      'Consider law enforcement escort',
      'Continuous monitoring',
      'Document thoroughly'
    ]
  },
  {
    id: 'obstetric-emergency',
    name: 'Obstetric Emergency',
    category: 'adult',
    certificationLevel: 'All',
    indications: [
      'Active labor',
      'Imminent delivery',
      'Pregnancy complications',
      'Postpartum hemorrhage'
    ],
    assessment: [
      'Assess stage of labor',
      'Check for crowning',
      'Evaluate fetal heart rate',
      'Assess for complications',
      'Check vital signs frequently'
    ],
    interventions: [
      'Position mother appropriately',
      'Prepare delivery kit',
      'Support perineum during delivery',
      'Clear airway of newborn',
      'Clamp and cut umbilical cord'
    ],
    medications: [
      'Oxytocin 10 units IM after delivery of placenta',
      'IV fluids for hemorrhage',
      'Terbutaline for uterine relaxation if needed'
    ],
    transport: [
      'Transport mother and baby together',
      'Continuous monitoring of both',
      'Keep newborn warm',
      'Notify obstetric team'
    ]
  },
  {
    id: 'burn-injury',
    name: 'Burn Injury Management',
    category: 'adult',
    certificationLevel: 'All',
    indications: [
      'Thermal burns',
      'Chemical burns',
      'Electrical burns',
      'Significant burn surface area'
    ],
    assessment: [
      'Calculate percentage of burns (Rule of Nines)',
      'Assess depth of burns',
      'Evaluate for inhalation injury',
      'Check for other trauma',
      'Monitor for shock'
    ],
    interventions: [
      'Remove from source',
      'Remove burning clothing/jewelry',
      'Cool burns with room temperature water',
      'Cover with sterile dressings',
      'Establish large bore IV access'
    ],
    medications: [
      'Morphine 2-10mg IV for pain (titrate carefully)',
      'Normal saline for fluid resuscitation',
      'Consider Parkland formula for large burns'
    ],
    transport: [
      'Rapid transport to burn center if indicated',
      'Maintain body temperature',
      'Continuous pain assessment',
      'Document burn characteristics'
    ]
  },
  {
    id: 'hypothermia',
    name: 'Hypothermia Protocol',
    category: 'adult',
    certificationLevel: 'All',
    indications: [
      'Core body temperature <35°C (95°F)',
      'Exposure to cold environment',
      'Altered mental status in cold',
      'Shivering or absence of shivering'
    ],
    assessment: [
      'Check core temperature',
      'Assess level of consciousness',
      'Evaluate for frostbite',
      'Check cardiac rhythm',
      'Assess for underlying conditions'
    ],
    interventions: [
      'Handle patient gently',
      'Remove from cold environment',
      'Remove wet clothing',
      'Passive rewarming with blankets',
      'Active external rewarming if severe'
    ],
    medications: [
      'Warm IV fluids (39°C/102°F)',
      'Avoid aggressive warming',
      'Consider thiamine if alcoholic',
      'Dextrose if hypoglycemic'
    ],
    transport: [
      'Gentle handling during transport',
      'Continuous cardiac monitoring',
      'Gradual rewarming',
      'Notify receiving facility'
    ],
    specialConsiderations: [
      'Risk of ventricular fibrillation with rough handling',
      'Core temperature may continue to drop initially',
      'Consider extracorporeal rewarming for severe cases'
    ]
  }
];
