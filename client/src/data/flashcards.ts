export interface Flashcard {
  id: string;
  question: string;
  answer: string;
  category: string;
  subcategory?: string;
  difficulty: 'Basic' | 'Intermediate' | 'Advanced';
  certificationLevel: 'EMT' | 'AEMT' | 'Paramedic' | 'All';
  tags: string[];
}

export interface FlashcardCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  subcategories: string[];
  totalCards: number;
}

export const flashcardCategories: FlashcardCategory[] = [
  {
    id: 'integumentary',
    name: 'Integumentary System',
    description: 'Skin, temperature regulation, protection',
    icon: '🧴',
    subcategories: ['Functions', 'Layers', 'Temperature Regulation', 'Conditions'],
    totalCards: 50
  },
  {
    id: 'skeletal',
    name: 'Skeletal System',
    description: 'Bones, joints, protection, movement',
    icon: '🦴',
    subcategories: ['Bone Structure', 'Joints', 'Fractures', 'Functions'],
    totalCards: 50
  },
  {
    id: 'muscular',
    name: 'Muscular System',
    description: 'Muscle types, movement, injuries',
    icon: '💪',
    subcategories: ['Muscle Types', 'Functions', 'Injuries', 'Physiology'],
    totalCards: 50
  },
  {
    id: 'nervous',
    name: 'Nervous System',
    description: 'Brain, spinal cord, neurological emergencies',
    icon: '🧠',
    subcategories: ['Brain Anatomy', 'Neurological Assessment', 'Stroke', 'Seizures', 'Head Trauma'],
    totalCards: 50
  },
  {
    id: 'cardiovascular',
    name: 'Cardiovascular System',
    description: 'Heart, blood vessels, cardiac emergencies',
    icon: '❤️',
    subcategories: ['Heart Anatomy', 'ACS', 'Arrhythmias', 'Heart Failure', 'Advanced Cardiology'],
    totalCards: 50
  },
  {
    id: 'respiratory',
    name: 'Respiratory System',
    description: 'Lungs, breathing, respiratory emergencies',
    icon: '🫁',
    subcategories: ['Anatomy', 'COPD', 'Asthma', 'Pneumothorax', 'Assessment'],
    totalCards: 50
  },
  {
    id: 'medical',
    name: 'Medical Emergencies',
    description: 'Endocrine, GI, hematologic, infectious diseases',
    icon: '🩺',
    subcategories: ['Diabetes', 'GI Emergencies', 'Hematologic', 'Infectious Disease', 'General Medical'],
    totalCards: 50
  },
  {
    id: 'trauma',
    name: 'Trauma Emergencies',
    description: 'Injuries, bleeding, fractures, burns',
    icon: '🚑',
    subcategories: ['Trauma Assessment', 'Bleeding Control', 'Fractures', 'Burns', 'Spinal Injuries'],
    totalCards: 50
  },
  {
    id: 'emt_scenarios',
    name: 'EMT Scenarios',
    description: 'Real-world emergency situations',
    icon: '🎭',
    subcategories: ['Assessment', 'Treatment', 'Protocols', 'Equipment'],
    totalCards: 50
  },
  {
    id: 'shock_management',
    name: 'Shock Management',
    description: 'Types of shock and treatment protocols',
    icon: '⚡',
    subcategories: ['Hypovolemic', 'Cardiogenic', 'Distributive', 'Obstructive'],
    totalCards: 50
  },
  {
    id: 'obstetrics',
    name: 'OB/GYN & Pediatrics',
    description: 'Obstetric emergencies and pediatric care',
    icon: '👶',
    subcategories: ['Pregnancy', 'Delivery', 'Pediatric Assessment', 'Child Emergencies'],
    totalCards: 50
  },
  {
    id: 'medical_assessment',
    name: 'Medical Patient Assessment',
    description: 'Systematic assessment of medical patients',
    icon: '🔍',
    subcategories: ['Primary Assessment', 'Secondary Assessment', 'History Taking', 'Vital Signs', 'Documentation'],
    totalCards: 50
  },
  {
    id: 'trauma_assessment',
    name: 'Trauma Patient Assessment',
    description: 'Systematic assessment of trauma patients',
    icon: '📋',
    subcategories: ['Primary Survey', 'Secondary Survey', 'Mechanism of Injury', 'Trauma Triage', 'Rapid Assessment'],
    totalCards: 50
  },
  {
    id: 'ems_systems',
    name: 'EMS Systems & Professional Standards',
    description: 'EMS provider levels, system components, professional attributes',
    icon: '🚑',
    subcategories: ['Provider Levels', 'System Components', 'Medical Direction', 'Professional Attributes', 'EMS Agenda'],
    totalCards: 50
  },
  {
    id: 'safety_wellness',
    name: 'Safety & Wellness',
    description: 'Scene safety, PPE, infection control, stress management',
    icon: '🛡️',
    subcategories: ['Scene Safety', 'PPE', 'Infection Control', 'Stress Management', 'Wellness Foundation'],
    totalCards: 50
  },
  {
    id: 'legal_ethics',
    name: 'Legal & Ethical Issues',
    description: 'Consent, negligence, confidentiality, advanced directives',
    icon: '⚖️',
    subcategories: ['Consent Types', 'Legal Concepts', 'HIPAA', 'Advanced Directives', 'Mandatory Reporting'],
    totalCards: 50
  },
  {
    id: 'communications',
    name: 'Communications & Documentation',
    description: 'Therapeutic communication, radio protocols, PCR documentation',
    icon: '📡',
    subcategories: ['Therapeutic Communication', 'Special Populations', 'Radio Protocols', 'Documentation', 'Medical Control'],
    totalCards: 50
  }
];

export const flashcards: Flashcard[] = [
  // Integumentary System
  {
    id: 'int_001',
    question: 'What are the 4 main functions of the skin?',
    answer: 'Protection, temperature regulation, sensation, vitamin D synthesis',
    category: 'integumentary',
    subcategory: 'Functions',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['skin', 'functions', 'protection']
  },
  {
    id: 'int_002',
    question: 'Which layer of skin contains sweat glands and hair follicles?',
    answer: 'Dermis',
    category: 'integumentary',
    subcategory: 'Layers',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['skin layers', 'dermis', 'anatomy']
  },
  {
    id: 'int_003',
    question: 'What is the body\'s first defense against pathogens?',
    answer: 'Skin (physical barrier)',
    category: 'integumentary',
    subcategory: 'Functions',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['defense', 'barrier', 'infection control']
  },
  {
    id: 'int_004',
    question: 'What condition results from prolonged pressure on skin?',
    answer: 'Pressure ulcer (decubitus ulcer)',
    category: 'integumentary',
    subcategory: 'Conditions',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['pressure sores', 'wounds', 'complications']
  },
  {
    id: 'int_005',
    question: 'How does the skin regulate body temperature?',
    answer: 'Sweating (cooling) and vasodilation/vasoconstriction (blood flow)',
    category: 'integumentary',
    subcategory: 'Temperature Regulation',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['temperature', 'thermoregulation', 'sweating']
  },

  // Skeletal System
  {
    id: 'skel_001',
    question: 'How many bones are in the adult human body?',
    answer: '206',
    category: 'skeletal',
    subcategory: 'Bone Structure',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['bones', 'anatomy', 'structure']
  },
  {
    id: 'skel_002',
    question: 'What type of joint is the knee?',
    answer: 'Synovial joint (hinge joint)',
    category: 'skeletal',
    subcategory: 'Joints',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['joints', 'knee', 'movement']
  },
  {
    id: 'skel_003',
    question: 'Which bone protects the brain?',
    answer: 'Skull (cranium)',
    category: 'skeletal',
    subcategory: 'Functions',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['skull', 'protection', 'brain']
  },
  {
    id: 'skel_004',
    question: 'What is the function of red bone marrow?',
    answer: 'Produces blood cells (hematopoiesis)',
    category: 'skeletal',
    subcategory: 'Functions',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['bone marrow', 'blood production', 'hematopoiesis']
  },
  {
    id: 'skel_005',
    question: 'What are ribs 1–7 called?',
    answer: 'True ribs (attach directly to sternum)',
    category: 'skeletal',
    subcategory: 'Bone Structure',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['ribs', 'sternum', 'chest']
  },
  {
    id: 'skel_006',
    question: 'What is a compound fracture?',
    answer: 'Bone breaks through the skin',
    category: 'skeletal',
    subcategory: 'Fractures',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['fractures', 'compound', 'open fracture']
  },
  {
    id: 'skel_007',
    question: 'What connects bone to bone?',
    answer: 'Ligaments',
    category: 'skeletal',
    subcategory: 'Functions',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['ligaments', 'connections', 'joints']
  },

  // Muscular System
  {
    id: 'musc_001',
    question: 'What connects muscle to bone?',
    answer: 'Tendons',
    category: 'muscular',
    subcategory: 'Functions',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['tendons', 'muscle attachment', 'movement']
  },
  {
    id: 'musc_002',
    question: 'Which muscle type is involuntary?',
    answer: 'Smooth muscle (e.g., intestines) and cardiac muscle',
    category: 'muscular',
    subcategory: 'Muscle Types',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['muscle types', 'involuntary', 'smooth muscle']
  },
  {
    id: 'musc_003',
    question: 'What is the strongest muscle in the body?',
    answer: 'Masseter (jaw muscle)',
    category: 'muscular',
    subcategory: 'Functions',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['jaw muscle', 'strength', 'masseter']
  },
  {
    id: 'musc_004',
    question: 'What is the function of the diaphragm?',
    answer: 'Primary muscle for breathing (contracts during inhalation)',
    category: 'muscular',
    subcategory: 'Functions',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['diaphragm', 'breathing', 'respiratory']
  },
  {
    id: 'musc_005',
    question: 'What is rhabdomyolysis?',
    answer: 'Muscle breakdown releasing toxic proteins (e.g., from crush injuries)',
    category: 'muscular',
    subcategory: 'Injuries',
    difficulty: 'Advanced',
    certificationLevel: 'Paramedic',
    tags: ['rhabdomyolysis', 'crush injury', 'muscle breakdown']
  },

  // Nervous System
  {
    id: 'nerv_001',
    question: 'What are the 3 parts of the brainstem?',
    answer: 'Midbrain, pons, medulla oblongata',
    category: 'nervous',
    subcategory: 'Brain Anatomy',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['brainstem', 'anatomy', 'midbrain']
  },
  {
    id: 'nerv_002',
    question: 'Which part of the brain controls balance?',
    answer: 'Cerebellum',
    category: 'nervous',
    subcategory: 'Brain Anatomy',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['cerebellum', 'balance', 'coordination']
  },
  {
    id: 'nerv_003',
    question: 'What is a concussion?',
    answer: 'Temporary brain dysfunction from head trauma',
    category: 'nervous',
    subcategory: 'Head Trauma',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['concussion', 'head trauma', 'TBI']
  },
  {
    id: 'nerv_004',
    question: 'What is Cushing\'s triad?',
    answer: 'Signs of increased ICP: hypertension, bradycardia, irregular respirations',
    category: 'nervous',
    subcategory: 'Neurological Assessment',
    difficulty: 'Advanced',
    certificationLevel: 'Paramedic',
    tags: ['Cushing triad', 'ICP', 'hypertension']
  },
  {
    id: 'nerv_005',
    question: 'What is the Glasgow Coma Scale used for?',
    answer: 'Assessing level of consciousness (eye, verbal, motor response)',
    category: 'nervous',
    subcategory: 'Neurological Assessment',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['GCS', 'consciousness', 'assessment']
  },
  {
    id: 'nerv_006',
    question: 'What is a stroke?',
    answer: 'An interruption of blood flow to the brain, causing loss of function',
    category: 'nervous',
    subcategory: 'Stroke',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['stroke', 'brain', 'blood flow']
  },
  {
    id: 'nerv_007',
    question: 'What are the two main types of stroke?',
    answer: 'Ischemic (87%) and hemorrhagic (13%)',
    category: 'nervous',
    subcategory: 'Stroke',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['stroke types', 'ischemic', 'hemorrhagic']
  },
  {
    id: 'nerv_008',
    question: 'What is a TIA?',
    answer: 'Transient Ischemic Attack; stroke-like symptoms that resolve within 24 hours',
    category: 'nervous',
    subcategory: 'Stroke',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['TIA', 'transient', 'mini stroke']
  },
  {
    id: 'nerv_009',
    question: 'What are the three components of the Cincinnati Prehospital Stroke Scale?',
    answer: 'Facial droop, arm drift, abnormal speech',
    category: 'nervous',
    subcategory: 'Stroke',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['Cincinnati scale', 'stroke assessment', 'FAST']
  },
  {
    id: 'nerv_010',
    question: 'What is status epilepticus?',
    answer: 'Seizures lasting >30 minutes or recurring without regaining consciousness',
    category: 'nervous',
    subcategory: 'Seizures',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['status epilepticus', 'seizures', 'emergency']
  },

  // Cardiovascular System
  {
    id: 'card_001',
    question: 'Which artery carries deoxygenated blood?',
    answer: 'Pulmonary artery',
    category: 'cardiovascular',
    subcategory: 'Heart Anatomy',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['pulmonary artery', 'circulation', 'deoxygenated']
  },
  {
    id: 'card_002',
    question: 'What is the normal adult heart rate?',
    answer: '60–100 bpm',
    category: 'cardiovascular',
    subcategory: 'Heart Anatomy',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['heart rate', 'vital signs', 'normal values']
  },
  {
    id: 'card_003',
    question: 'What is the largest artery in the body?',
    answer: 'Aorta',
    category: 'cardiovascular',
    subcategory: 'Heart Anatomy',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['aorta', 'arteries', 'circulation']
  },
  {
    id: 'card_004',
    question: 'What is the pacemaker of the heart?',
    answer: 'SA node (sinoatrial node)',
    category: 'cardiovascular',
    subcategory: 'Heart Anatomy',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['SA node', 'pacemaker', 'electrical conduction']
  },
  {
    id: 'card_005',
    question: 'What is myocardial infarction?',
    answer: 'Heart attack (blocked coronary artery)',
    category: 'cardiovascular',
    subcategory: 'ACS',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['MI', 'heart attack', 'coronary']
  },
  {
    id: 'card_006',
    question: 'What is the difference between angina and MI?',
    answer: 'Angina is temporary heart pain; MI is permanent damage',
    category: 'cardiovascular',
    subcategory: 'ACS',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['angina', 'MI', 'chest pain']
  },
  {
    id: 'card_007',
    question: 'What is the normal BP range for adults?',
    answer: '120/80 mmHg',
    category: 'cardiovascular',
    subcategory: 'Heart Anatomy',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['blood pressure', 'vital signs', 'normal']
  },
  {
    id: 'card_008',
    question: 'What is the first sign of shock?',
    answer: 'Tachycardia (rapid pulse)',
    category: 'cardiovascular',
    subcategory: 'Heart Failure',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['shock', 'tachycardia', 'early signs']
  },
  {
    id: 'card_009',
    question: 'What is Beck\'s triad?',
    answer: 'Signs of cardiac tamponade: JVD, muffled heart sounds, hypotension',
    category: 'cardiovascular',
    subcategory: 'Advanced Cardiology',
    difficulty: 'Advanced',
    certificationLevel: 'Paramedic',
    tags: ['Beck triad', 'cardiac tamponade', 'JVD']
  },
  {
    id: 'card_010',
    question: 'What are the 5 H\'s and T\'s of PEA arrest?',
    answer: 'Hypovolemia, Hypoxia, Hydrogen ions (acidosis), Hyper/Hypokalemia, Hypothermia; Tamponade, Tension pneumo, Toxins, Thrombosis (pulmonary), Thrombosis (coronary)',
    category: 'cardiovascular',
    subcategory: 'Arrhythmias',
    difficulty: 'Advanced',
    certificationLevel: 'Paramedic',
    tags: ['PEA', 'H and T', 'cardiac arrest']
  },

  // Respiratory System
  {
    id: 'resp_001',
    question: 'What is the primary muscle for breathing?',
    answer: 'Diaphragm',
    category: 'respiratory',
    subcategory: 'Anatomy',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['diaphragm', 'breathing', 'primary muscle']
  },
  {
    id: 'resp_002',
    question: 'Where does gas exchange occur?',
    answer: 'Alveoli',
    category: 'respiratory',
    subcategory: 'Anatomy',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['alveoli', 'gas exchange', 'lungs']
  },
  {
    id: 'resp_003',
    question: 'What is the normal respiratory rate for adults?',
    answer: '12–20 breaths/min',
    category: 'respiratory',
    subcategory: 'Assessment',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['respiratory rate', 'vital signs', 'normal']
  },
  {
    id: 'resp_004',
    question: 'What is the term for difficulty breathing?',
    answer: 'Dyspnea',
    category: 'respiratory',
    subcategory: 'Assessment',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['dyspnea', 'difficulty breathing', 'symptoms']
  },
  {
    id: 'resp_005',
    question: 'What is the most common cause of airway obstruction?',
    answer: 'Tongue (in unconscious patients)',
    category: 'respiratory',
    subcategory: 'Assessment',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['airway obstruction', 'tongue', 'unconscious']
  },
  {
    id: 'resp_006',
    question: 'What are the signs of respiratory failure?',
    answer: 'Altered mental status, cyanosis, accessory muscle use, SpO2 <90%',
    category: 'respiratory',
    subcategory: 'Assessment',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['respiratory failure', 'cyanosis', 'hypoxia']
  },
  {
    id: 'resp_007',
    question: 'What is the difference between COPD and asthma?',
    answer: 'COPD is irreversible; asthma is reversible bronchospasm',
    category: 'respiratory',
    subcategory: 'COPD',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['COPD', 'asthma', 'bronchospasm']
  },
  {
    id: 'resp_008',
    question: 'What is the hallmark of a tension pneumothorax?',
    answer: 'Tracheal deviation, JVD, unilateral absent breath sounds',
    category: 'respiratory',
    subcategory: 'Pneumothorax',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['tension pneumothorax', 'tracheal deviation', 'emergency']
  },

  // Medical Emergencies
  {
    id: 'med_001',
    question: 'What is Type 1 diabetes?',
    answer: 'Autoimmune destruction of insulin-producing cells; requires insulin',
    category: 'medical',
    subcategory: 'Diabetes',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['Type 1 diabetes', 'insulin', 'autoimmune']
  },
  {
    id: 'med_002',
    question: 'What is hypoglycemia?',
    answer: 'Low blood glucose (<70 mg/dL); causes confusion, seizures',
    category: 'medical',
    subcategory: 'Diabetes',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['hypoglycemia', 'low glucose', 'confusion']
  },
  {
    id: 'med_003',
    question: 'What is DKA?',
    answer: 'Diabetic ketoacidosis; high glucose, ketones, Kussmaul respirations',
    category: 'medical',
    subcategory: 'Diabetes',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['DKA', 'ketoacidosis', 'Kussmaul']
  },
  {
    id: 'med_004',
    question: 'What is sickle cell disease?',
    answer: 'Inherited disorder causing misshapen RBCs, leading to clots/pain',
    category: 'medical',
    subcategory: 'Hematologic',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['sickle cell', 'RBCs', 'inherited disorder']
  },
  {
    id: 'med_005',
    question: 'What triggers a sickle cell crisis?',
    answer: 'Dehydration, infection, or hypoxia',
    category: 'medical',
    subcategory: 'Hematologic',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['sickle cell crisis', 'dehydration', 'hypoxia']
  },

  // EMT Scenarios
  {
    id: 'emt_001',
    question: 'What are the ABCs of patient assessment?',
    answer: 'Airway, Breathing, Circulation',
    category: 'emt_scenarios',
    subcategory: 'Assessment',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['ABCs', 'primary assessment', 'basics']
  },
  {
    id: 'emt_002',
    question: 'How do you treat hypoglycemia?',
    answer: 'Administer oral glucose (if conscious)',
    category: 'emt_scenarios',
    subcategory: 'Treatment',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['hypoglycemia treatment', 'oral glucose', 'conscious patient']
  },
  {
    id: 'emt_003',
    question: 'What is the first step in bleeding control?',
    answer: 'Direct pressure',
    category: 'emt_scenarios',
    subcategory: 'Treatment',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['bleeding control', 'direct pressure', 'hemorrhage']
  },
  {
    id: 'emt_004',
    question: 'What are signs of opioid overdose?',
    answer: 'Pinpoint pupils, respiratory depression',
    category: 'emt_scenarios',
    subcategory: 'Assessment',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['opioid overdose', 'pinpoint pupils', 'respiratory depression']
  },
  {
    id: 'emt_005',
    question: 'How do you treat anaphylaxis?',
    answer: 'Epinephrine (EpiPen), oxygen, antihistamines',
    category: 'emt_scenarios',
    subcategory: 'Treatment',
    difficulty: 'Intermediate',
    certificationLevel: 'EMT',
    tags: ['anaphylaxis', 'epinephrine', 'allergic reaction']
  },
  {
    id: 'emt_006',
    question: 'What is the correct rate for chest compressions during CPR?',
    answer: '100-120 compressions per minute',
    category: 'emt_scenarios',
    subcategory: 'Protocols',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['CPR', 'compression rate', '100-120 per minute']
  },

  // Additional Integumentary System Cards
  {
    id: 'int_006',
    question: 'What is the largest organ in the body?',
    answer: 'Skin',
    category: 'integumentary',
    subcategory: 'Functions',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['skin', 'largest organ', 'anatomy']
  },
  {
    id: 'int_007',
    question: 'What are the three layers of skin?',
    answer: 'Epidermis (outer), dermis (middle), hypodermis/subcutaneous (inner)',
    category: 'integumentary',
    subcategory: 'Layers',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['skin layers', 'epidermis', 'dermis']
  },
  {
    id: 'int_008',
    question: 'What causes hypothermia in relation to skin function?',
    answer: 'Loss of temperature regulation due to damaged skin or prolonged cold exposure',
    category: 'integumentary',
    subcategory: 'Temperature Regulation',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['hypothermia', 'temperature regulation', 'cold exposure']
  },

  // Additional Skeletal System Cards
  {
    id: 'skel_008',
    question: 'What is the collarbone called?',
    answer: 'Clavicle',
    category: 'skeletal',
    subcategory: 'Bone Structure',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['clavicle', 'collarbone', 'shoulder']
  },
  {
    id: 'skel_009',
    question: 'Which mineral is stored in bones?',
    answer: 'Calcium',
    category: 'skeletal',
    subcategory: 'Functions',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['calcium', 'mineral storage', 'bone function']
  },
  {
    id: 'skel_010',
    question: 'Which spinal curvature abnormality involves a hunched back?',
    answer: 'Kyphosis',
    category: 'skeletal',
    subcategory: 'Bone Structure',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['kyphosis', 'spinal curvature', 'hunched back']
  },
  {
    id: 'skel_011',
    question: 'What is the difference between a sprain and strain?',
    answer: 'Sprain = ligament injury; strain = muscle/tendon injury',
    category: 'skeletal',
    subcategory: 'Injuries',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['sprain', 'strain', 'ligament', 'muscle']
  },
  {
    id: 'skel_012',
    question: 'What are ribs 8-12 called?',
    answer: 'False ribs (8-10 attach indirectly, 11-12 are floating ribs)',
    category: 'skeletal',
    subcategory: 'Bone Structure',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['false ribs', 'floating ribs', 'chest anatomy']
  },

  // Additional Muscular System Cards
  {
    id: 'musc_006',
    question: 'Which muscle group extends the knee?',
    answer: 'Quadriceps',
    category: 'muscular',
    subcategory: 'Functions',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['quadriceps', 'knee extension', 'leg muscles']
  },
  {
    id: 'musc_007',
    question: 'What is the term for muscle wasting?',
    answer: 'Atrophy',
    category: 'muscular',
    subcategory: 'Injuries',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['atrophy', 'muscle wasting', 'disuse']
  },
  {
    id: 'musc_008',
    question: 'What neurotransmitter stimulates muscle contraction?',
    answer: 'Acetylcholine',
    category: 'muscular',
    subcategory: 'Physiology',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['acetylcholine', 'neurotransmitter', 'muscle contraction']
  },
  {
    id: 'musc_009',
    question: 'What causes muscle cramps?',
    answer: 'Dehydration, electrolyte imbalance, overuse',
    category: 'muscular',
    subcategory: 'Injuries',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['muscle cramps', 'dehydration', 'electrolytes']
  },
  {
    id: 'musc_010',
    question: 'What is a strain?',
    answer: 'Overstretched or torn muscle',
    category: 'muscular',
    subcategory: 'Injuries',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['strain', 'muscle injury', 'torn muscle']
  },
  {
    id: 'musc_011',
    question: 'What are the three types of muscle tissue?',
    answer: 'Skeletal, smooth, and cardiac muscle',
    category: 'muscular',
    subcategory: 'Muscle Types',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['muscle types', 'skeletal', 'smooth', 'cardiac']
  },
  {
    id: 'musc_012',
    question: 'Which muscle type is striated and voluntary?',
    answer: 'Skeletal muscle',
    category: 'muscular',
    subcategory: 'Muscle Types',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['skeletal muscle', 'striated', 'voluntary']
  },
  {
    id: 'musc_013',
    question: 'What is the primary function of the muscular system?',
    answer: 'Movement, posture maintenance, and heat production',
    category: 'muscular',
    subcategory: 'Functions',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['muscle function', 'movement', 'posture', 'heat']
  },
  {
    id: 'musc_014',
    question: 'What connects bone to bone?',
    answer: 'Ligaments',
    category: 'muscular',
    subcategory: 'Functions',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['ligaments', 'bone connection', 'joints']
  },
  {
    id: 'musc_015',
    question: 'What is muscle tone?',
    answer: 'The partial contraction of muscles at rest',
    category: 'muscular',
    subcategory: 'Physiology',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['muscle tone', 'partial contraction', 'resting state']
  },
  {
    id: 'musc_016',
    question: 'What is the origin of a muscle?',
    answer: 'The stationary attachment point (usually proximal)',
    category: 'muscular',
    subcategory: 'Functions',
    difficulty: 'Intermediate',
    certificationLevel: 'AEMT',
    tags: ['muscle origin', 'attachment', 'stationary']
  },
  {
    id: 'musc_017',
    question: 'What is the insertion of a muscle?',
    answer: 'The moveable attachment point (usually distal)',
    category: 'muscular',
    subcategory: 'Functions',
    difficulty: 'Intermediate',
    certificationLevel: 'AEMT',
    tags: ['muscle insertion', 'moveable', 'distal']
  },
  {
    id: 'musc_018',
    question: 'What is an antagonist muscle?',
    answer: 'A muscle that opposes the action of another muscle',
    category: 'muscular',
    subcategory: 'Functions',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['antagonist', 'opposing action', 'muscle pairs']
  },
  {
    id: 'musc_019',
    question: 'What is an agonist muscle?',
    answer: 'The primary muscle responsible for a specific movement',
    category: 'muscular',
    subcategory: 'Functions',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['agonist', 'primary muscle', 'movement']
  },
  {
    id: 'musc_020',
    question: 'What muscle flexes the arm at the elbow?',
    answer: 'Biceps brachii',
    category: 'muscular',
    subcategory: 'Functions',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['biceps', 'arm flexion', 'elbow']
  },
  {
    id: 'musc_021',
    question: 'What muscle extends the arm at the elbow?',
    answer: 'Triceps brachii',
    category: 'muscular',
    subcategory: 'Functions',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['triceps', 'arm extension', 'elbow']
  },
  {
    id: 'musc_022',
    question: 'What causes muscle fatigue?',
    answer: 'Accumulation of lactic acid and depletion of ATP',
    category: 'muscular',
    subcategory: 'Physiology',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['muscle fatigue', 'lactic acid', 'ATP depletion']
  },
  {
    id: 'musc_023',
    question: 'What is rigor mortis?',
    answer: 'Muscle stiffness after death due to ATP depletion',
    category: 'muscular',
    subcategory: 'Physiology',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['rigor mortis', 'death', 'muscle stiffness']
  },
  {
    id: 'musc_024',
    question: 'What is the difference between isometric and isotonic contractions?',
    answer: 'Isometric: muscle contracts without movement; Isotonic: muscle contracts with movement',
    category: 'muscular',
    subcategory: 'Physiology',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['isometric', 'isotonic', 'muscle contraction types']
  },
  {
    id: 'musc_025',
    question: 'What is myasthenia gravis?',
    answer: 'Autoimmune disease causing muscle weakness due to blocked acetylcholine receptors',
    category: 'muscular',
    subcategory: 'Injuries',
    difficulty: 'Advanced',
    certificationLevel: 'Paramedic',
    tags: ['myasthenia gravis', 'autoimmune', 'muscle weakness']
  },
  {
    id: 'musc_026',
    question: 'What is muscular dystrophy?',
    answer: 'Genetic disorder causing progressive muscle weakness and degeneration',
    category: 'muscular',
    subcategory: 'Injuries',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['muscular dystrophy', 'genetic disorder', 'progressive weakness']
  },
  {
    id: 'musc_027',
    question: 'What is compartment syndrome?',
    answer: 'Increased pressure in muscle compartment restricting blood flow',
    category: 'muscular',
    subcategory: 'Injuries',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['compartment syndrome', 'pressure', 'blood flow restriction']
  },
  {
    id: 'musc_028',
    question: 'What are the signs of compartment syndrome?',
    answer: 'Pain out of proportion, pallor, paresthesia, pulselessness, paralysis (5 Ps)',
    category: 'muscular',
    subcategory: 'Injuries',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['compartment syndrome signs', '5 Ps', 'pain pallor']
  },
  {
    id: 'musc_029',
    question: 'What is the largest muscle in the body?',
    answer: 'Gluteus maximus',
    category: 'muscular',
    subcategory: 'Functions',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['gluteus maximus', 'largest muscle', 'buttocks']
  },
  {
    id: 'musc_030',
    question: 'What muscle group flexes the knee?',
    answer: 'Hamstrings',
    category: 'muscular',
    subcategory: 'Functions',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['hamstrings', 'knee flexion', 'posterior thigh']
  },
  {
    id: 'musc_031',
    question: 'What is the primary muscle for plantar flexion?',
    answer: 'Gastrocnemius (calf muscle)',
    category: 'muscular',
    subcategory: 'Functions',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['gastrocnemius', 'plantar flexion', 'calf muscle']
  },
  {
    id: 'musc_032',
    question: 'What is a contracture?',
    answer: 'Permanent shortening of muscle due to prolonged contraction',
    category: 'muscular',
    subcategory: 'Injuries',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['contracture', 'muscle shortening', 'permanent']
  },
  {
    id: 'musc_033',
    question: 'What is tetanus?',
    answer: 'Sustained muscle contraction due to bacterial toxin',
    category: 'muscular',
    subcategory: 'Injuries',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['tetanus', 'bacterial toxin', 'sustained contraction']
  },
  {
    id: 'musc_034',
    question: 'What is the treatment for muscle cramps?',
    answer: 'Gentle stretching, hydration, electrolyte replacement',
    category: 'muscular',
    subcategory: 'Injuries',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['muscle cramp treatment', 'stretching', 'hydration']
  },
  {
    id: 'musc_035',
    question: 'What is delayed onset muscle soreness (DOMS)?',
    answer: 'Muscle pain 24-48 hours after exercise due to microscopic tears',
    category: 'muscular',
    subcategory: 'Injuries',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['DOMS', 'delayed soreness', 'microscopic tears']
  },
  {
    id: 'musc_036',
    question: 'What is the role of calcium in muscle contraction?',
    answer: 'Binds to troponin, allowing actin and myosin to interact',
    category: 'muscular',
    subcategory: 'Physiology',
    difficulty: 'Advanced',
    certificationLevel: 'Paramedic',
    tags: ['calcium', 'troponin', 'actin myosin']
  },
  {
    id: 'musc_037',
    question: 'What is the sliding filament theory?',
    answer: 'Muscle contraction occurs when actin and myosin filaments slide past each other',
    category: 'muscular',
    subcategory: 'Physiology',
    difficulty: 'Advanced',
    certificationLevel: 'Paramedic',
    tags: ['sliding filament', 'actin', 'myosin']
  },
  {
    id: 'musc_038',
    question: 'What is the energy source for muscle contraction?',
    answer: 'ATP (adenosine triphosphate)',
    category: 'muscular',
    subcategory: 'Physiology',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['ATP', 'energy source', 'muscle contraction']
  },
  {
    id: 'musc_039',
    question: 'What is the neuromuscular junction?',
    answer: 'The synapse between a motor neuron and muscle fiber',
    category: 'muscular',
    subcategory: 'Physiology',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['neuromuscular junction', 'synapse', 'motor neuron']
  },
  {
    id: 'musc_040',
    question: 'What is a motor unit?',
    answer: 'A motor neuron and all the muscle fibers it innervates',
    category: 'muscular',
    subcategory: 'Physiology',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['motor unit', 'motor neuron', 'muscle fibers']
  },
  {
    id: 'musc_041',
    question: 'What is muscle hypertrophy?',
    answer: 'Increase in muscle size due to increased protein synthesis',
    category: 'muscular',
    subcategory: 'Physiology',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['hypertrophy', 'muscle growth', 'protein synthesis']
  },
  {
    id: 'musc_042',
    question: 'What is the difference between fast-twitch and slow-twitch muscle fibers?',
    answer: 'Fast-twitch: quick, powerful contractions; Slow-twitch: endurance, fatigue-resistant',
    category: 'muscular',
    subcategory: 'Physiology',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['fast-twitch', 'slow-twitch', 'muscle fiber types']
  },
  {
    id: 'musc_043',
    question: 'What is the treatment for a muscle strain?',
    answer: 'RICE: Rest, Ice, Compression, Elevation',
    category: 'muscular',
    subcategory: 'Injuries',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['strain treatment', 'RICE', 'rest ice compression']
  },
  {
    id: 'musc_044',
    question: 'What is the difference between a strain and a sprain?',
    answer: 'Strain: muscle/tendon injury; Sprain: ligament injury',
    category: 'muscular',
    subcategory: 'Injuries',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['strain vs sprain', 'muscle tendon', 'ligament']
  },
  {
    id: 'musc_045',
    question: 'What is fibromyalgia?',
    answer: 'Chronic condition causing widespread muscle pain and tender points',
    category: 'muscular',
    subcategory: 'Injuries',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['fibromyalgia', 'chronic pain', 'tender points']
  },
  {
    id: 'musc_046',
    question: 'What is the function of smooth muscle?',
    answer: 'Controls involuntary movements in organs (digestion, blood vessel dilation)',
    category: 'muscular',
    subcategory: 'Muscle Types',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['smooth muscle', 'involuntary', 'organs']
  },
  {
    id: 'musc_047',
    question: 'What is the characteristic of cardiac muscle?',
    answer: 'Involuntary, striated, found only in the heart, has intercalated discs',
    category: 'muscular',
    subcategory: 'Muscle Types',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['cardiac muscle', 'involuntary striated', 'intercalated discs']
  },
  {
    id: 'musc_048',
    question: 'What is heat stroke in relation to muscles?',
    answer: 'Muscle cramping and breakdown due to excessive heat and dehydration',
    category: 'muscular',
    subcategory: 'Injuries',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['heat stroke', 'muscle cramping', 'dehydration']
  },
  {
    id: 'musc_049',
    question: 'What is the rotator cuff?',
    answer: 'Group of four muscles that stabilize the shoulder joint',
    category: 'muscular',
    subcategory: 'Functions',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['rotator cuff', 'shoulder stabilization', 'four muscles']
  },
  {
    id: 'musc_050',
    question: 'What causes muscle fasciculations?',
    answer: 'Involuntary muscle twitches due to nerve irritation or electrolyte imbalance',
    category: 'muscular',
    subcategory: 'Injuries',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['fasciculations', 'muscle twitches', 'nerve irritation']
  },

  // Additional Nervous System Cards
  {
    id: 'nerv_011',
    question: 'What is the autonomic nervous system responsible for?',
    answer: 'Involuntary functions (e.g., heart rate, digestion)',
    category: 'nervous',
    subcategory: 'Brain Anatomy',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['autonomic nervous system', 'involuntary functions', 'heart rate']
  },
  {
    id: 'nerv_012',
    question: 'What is the fight-or-flight response controlled by?',
    answer: 'Sympathetic nervous system',
    category: 'nervous',
    subcategory: 'Brain Anatomy',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['sympathetic nervous system', 'fight or flight', 'stress response']
  },
  {
    id: 'nerv_013',
    question: 'What is the function of the hypothalamus?',
    answer: 'Regulates temperature, hunger, thirst, and hormones',
    category: 'nervous',
    subcategory: 'Brain Anatomy',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['hypothalamus', 'temperature regulation', 'hormones']
  },
  {
    id: 'nerv_014',
    question: 'What is the difference between epidural and subdural hematoma?',
    answer: 'Epidural is arterial (lucid interval); subdural is venous (slow bleed)',
    category: 'nervous',
    subcategory: 'Head Trauma',
    difficulty: 'Advanced',
    certificationLevel: 'Paramedic',
    tags: ['epidural hematoma', 'subdural hematoma', 'head trauma']
  },
  {
    id: 'nerv_015',
    question: 'What are common signs of a stroke?',
    answer: 'Facial drooping, arm drift, slurred speech (BE FAST: Balance, Eyes, Face, Arm, Speech, Time)',
    category: 'nervous',
    subcategory: 'Stroke',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['stroke signs', 'BE FAST', 'facial droop']
  },
  {
    id: 'nerv_016',
    question: 'What conditions can mimic a stroke?',
    answer: 'Hypoglycemia, postictal state (after seizure), or intracranial bleeding',
    category: 'nervous',
    subcategory: 'Stroke',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['stroke mimics', 'hypoglycemia', 'postictal state']
  },
  {
    id: 'nerv_017',
    question: 'What is a seizure?',
    answer: 'A surge of electrical activity in the brain causing convulsions or altered consciousness',
    category: 'nervous',
    subcategory: 'Seizures',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['seizure', 'electrical activity', 'convulsions']
  },
  {
    id: 'nerv_018',
    question: 'What is the postictal state?',
    answer: 'Period after a seizure with lethargy/confusion',
    category: 'nervous',
    subcategory: 'Seizures',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['postictal state', 'seizure recovery', 'lethargy']
  },
  {
    id: 'nerv_019',
    question: 'What causes altered mental status?',
    answer: 'Hypoglycemia, hypoxemia, intoxication, head injury, or infection',
    category: 'nervous',
    subcategory: 'Neurological Assessment',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['altered mental status', 'hypoglycemia', 'hypoxia']
  },
  {
    id: 'nerv_020',
    question: 'What is dysarthria?',
    answer: 'Slurred speech due to muscle weakness',
    category: 'nervous',
    subcategory: 'Stroke',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['dysarthria', 'slurred speech', 'muscle weakness']
  },
  {
    id: 'nerv_021',
    question: 'What is aphasia?',
    answer: 'Difficulty with speech comprehension or production',
    category: 'nervous',
    subcategory: 'Stroke',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['aphasia', 'speech difficulty', 'comprehension']
  },
  {
    id: 'nerv_022',
    question: 'What is the priority care for a stroke patient?',
    answer: 'Rapid transport to a stroke center for potential clot-busting meds',
    category: 'nervous',
    subcategory: 'Stroke',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['stroke care', 'rapid transport', 'stroke center']
  },
  {
    id: 'nerv_023',
    question: 'What is the priority care for a seizure patient?',
    answer: 'Protect from injury, maintain airway, give oxygen',
    category: 'nervous',
    subcategory: 'Seizures',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['seizure care', 'protect airway', 'oxygen']
  },
  {
    id: 'nerv_024',
    question: 'What are common headache types?',
    answer: 'Tension, migraine, sinus, and serious (e.g., hemorrhagic stroke)',
    category: 'nervous',
    subcategory: 'Neurological Assessment',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['headache types', 'tension', 'migraine']
  },
  {
    id: 'nerv_025',
    question: 'What headache type is a "throbbing" pain with nausea?',
    answer: 'Migraine',
    category: 'nervous',
    subcategory: 'Neurological Assessment',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['migraine', 'throbbing pain', 'nausea']
  },
  {
    id: 'nerv_026',
    question: 'What is a red flag for a serious headache?',
    answer: 'Fever, altered mental status, or sudden onset ("worst headache of life")',
    category: 'nervous',
    subcategory: 'Neurological Assessment',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['serious headache', 'red flags', 'worst headache']
  },
  {
    id: 'nerv_027',
    question: 'What is the most sensitive sign of increased ICP?',
    answer: 'Altered mental status',
    category: 'nervous',
    subcategory: 'Head Trauma',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['increased ICP', 'altered mental status', 'brain injury']
  },
  {
    id: 'nerv_028',
    question: 'What is the treatment for status epilepticus?',
    answer: 'Benzodiazepines (e.g., midazolam IM/IN)',
    category: 'nervous',
    subcategory: 'Seizures',
    difficulty: 'Advanced',
    certificationLevel: 'Paramedic',
    tags: ['status epilepticus', 'benzodiazepines', 'midazolam']
  },
  {
    id: 'nerv_029',
    question: 'What is the most common cause of altered mental status in EMS?',
    answer: 'Hypoglycemia',
    category: 'nervous',
    subcategory: 'Neurological Assessment',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['altered mental status', 'hypoglycemia', 'common cause']
  },
  {
    id: 'nerv_030',
    question: 'What is the role of the myelin sheath?',
    answer: 'Speeds up nerve impulse transmission',
    category: 'nervous',
    subcategory: 'Brain Anatomy',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['myelin sheath', 'nerve impulse', 'transmission']
  },
  {
    id: 'nerv_031',
    question: 'What is the term for "pinched nerve" pain radiating down the leg?',
    answer: 'Sciatica',
    category: 'nervous',
    subcategory: 'Neurological Assessment',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['sciatica', 'pinched nerve', 'leg pain']
  },
  {
    id: 'nerv_032',
    question: 'What part of the neuron receives signals?',
    answer: 'Dendrites',
    category: 'nervous',
    subcategory: 'Brain Anatomy',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['dendrites', 'neuron', 'signal reception']
  },
  {
    id: 'nerv_033',
    question: 'What is Broca\'s area responsible for?',
    answer: 'Speech production',
    category: 'nervous',
    subcategory: 'Brain Anatomy',
    difficulty: 'Advanced',
    certificationLevel: 'Paramedic',
    tags: ['Broca area', 'speech production', 'brain function']
  },
  {
    id: 'nerv_034',
    question: 'What is autonomic dysreflexia?',
    answer: 'Life-threatening HTN in spinal cord injuries (T6 or above)',
    category: 'nervous',
    subcategory: 'Neurological Assessment',
    difficulty: 'Advanced',
    certificationLevel: 'Paramedic',
    tags: ['autonomic dysreflexia', 'spinal cord injury', 'hypertension']
  },
  {
    id: 'nerv_035',
    question: 'What is the most common spinal cord injury in EMS?',
    answer: 'C5-C7 (whiplash mechanism)',
    category: 'nervous',
    subcategory: 'Head Trauma',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['spinal cord injury', 'C5-C7', 'whiplash']
  },
  {
    id: 'nerv_036',
    question: 'What is the difference between complete and incomplete spinal cord injury?',
    answer: 'Complete: No function below injury level; Incomplete: Some function remains',
    category: 'nervous',
    subcategory: 'Head Trauma',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['spinal cord injury', 'complete incomplete', 'function loss']
  },
  {
    id: 'nerv_037',
    question: 'What is neurogenic shock?',
    answer: 'Loss of sympathetic control causing hypotension and bradycardia',
    category: 'nervous',
    subcategory: 'Head Trauma',
    difficulty: 'Advanced',
    certificationLevel: 'Paramedic',
    tags: ['neurogenic shock', 'sympathetic loss', 'hypotension bradycardia']
  },
  {
    id: 'nerv_038',
    question: 'What is the normal intracranial pressure?',
    answer: '5-15 mmHg',
    category: 'nervous',
    subcategory: 'Head Trauma',
    difficulty: 'Advanced',
    certificationLevel: 'Paramedic',
    tags: ['intracranial pressure', 'normal values', 'ICP']
  },
  {
    id: 'nerv_039',
    question: 'What are the components of the cranial nerves?',
    answer: '12 pairs controlling sensation, movement, and special senses',
    category: 'nervous',
    subcategory: 'Brain Anatomy',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['cranial nerves', '12 pairs', 'sensation movement']
  },
  {
    id: 'nerv_040',
    question: 'What is the vagus nerve responsible for?',
    answer: 'Heart rate, digestion, and breathing control (cranial nerve X)',
    category: 'nervous',
    subcategory: 'Brain Anatomy',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['vagus nerve', 'heart rate', 'digestion breathing']
  },
  {
    id: 'nerv_041',
    question: 'What is Bell\'s palsy?',
    answer: 'Temporary facial paralysis due to cranial nerve VII inflammation',
    category: 'nervous',
    subcategory: 'Neurological Assessment',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['Bell palsy', 'facial paralysis', 'cranial nerve VII']
  },
  {
    id: 'nerv_042',
    question: 'What is the difference between central and peripheral vertigo?',
    answer: 'Central: Brain stem/cerebellum; Peripheral: Inner ear problem',
    category: 'nervous',
    subcategory: 'Neurological Assessment',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['vertigo', 'central peripheral', 'brain stem inner ear']
  },
  {
    id: 'nerv_043',
    question: 'What is a febrile seizure?',
    answer: 'Seizure in children due to rapid temperature rise',
    category: 'nervous',
    subcategory: 'Seizures',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['febrile seizure', 'children', 'temperature rise']
  },
  {
    id: 'nerv_044',
    question: 'What is Todd\'s paralysis?',
    answer: 'Temporary weakness after a seizure',
    category: 'nervous',
    subcategory: 'Seizures',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['Todd paralysis', 'post-seizure', 'temporary weakness']
  },
  {
    id: 'nerv_045',
    question: 'What is the blood-brain barrier?',
    answer: 'Protective mechanism preventing toxins from entering brain tissue',
    category: 'nervous',
    subcategory: 'Brain Anatomy',
    difficulty: 'Advanced',
    certificationLevel: 'Paramedic',
    tags: ['blood-brain barrier', 'protection', 'toxins']
  },
  {
    id: 'nerv_046',
    question: 'What is cerebrospinal fluid (CSF)?',
    answer: 'Clear fluid cushioning the brain and spinal cord',
    category: 'nervous',
    subcategory: 'Brain Anatomy',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['cerebrospinal fluid', 'CSF', 'brain cushioning']
  },
  {
    id: 'nerv_047',
    question: 'What is hydrocephalus?',
    answer: 'Abnormal accumulation of CSF in the brain',
    category: 'nervous',
    subcategory: 'Head Trauma',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['hydrocephalus', 'CSF accumulation', 'brain swelling']
  },
  {
    id: 'nerv_048',
    question: 'What is the difference between delirium and dementia?',
    answer: 'Delirium: Acute, reversible confusion; Dementia: Chronic, progressive',
    category: 'nervous',
    subcategory: 'Neurological Assessment',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['delirium dementia', 'acute chronic', 'confusion']
  },
  {
    id: 'nerv_049',
    question: 'What is Parkinson\'s disease?',
    answer: 'Progressive neurological disorder causing tremors and movement problems',
    category: 'nervous',
    subcategory: 'Neurological Assessment',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['Parkinson disease', 'tremors', 'movement disorder']
  },
  {
    id: 'nerv_050',
    question: 'What is multiple sclerosis (MS)?',
    answer: 'Autoimmune disease attacking myelin sheaths in the nervous system',
    category: 'nervous',
    subcategory: 'Neurological Assessment',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['multiple sclerosis', 'autoimmune', 'myelin damage']
  },

  // Additional Cardiovascular System Cards
  {
    id: 'card_011',
    question: 'What is the leading cause of death in America?',
    answer: 'Cardiovascular disease, causing about 1 in 3 deaths',
    category: 'cardiovascular',
    subcategory: 'Heart Anatomy',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['cardiovascular disease', 'leading cause', 'death']
  },
  {
    id: 'card_012',
    question: 'Which ventricle is stronger and why?',
    answer: 'The left ventricle; it pumps blood to the entire body',
    category: 'cardiovascular',
    subcategory: 'Heart Anatomy',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['left ventricle', 'stronger', 'systemic circulation']
  },
  {
    id: 'card_013',
    question: 'What initiates the heart\'s electrical signal?',
    answer: 'The SA (sinoatrial) node',
    category: 'cardiovascular',
    subcategory: 'Heart Anatomy',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['SA node', 'electrical signal', 'pacemaker']
  },
  {
    id: 'card_014',
    question: 'Define cardiac output (CO)',
    answer: 'The amount of blood the heart pumps in one minute',
    category: 'cardiovascular',
    subcategory: 'Heart Anatomy',
    difficulty: 'Intermediate',
    certificationLevel: 'AEMT',
    tags: ['cardiac output', 'blood volume', 'heart function']
  },
  {
    id: 'card_015',
    question: 'What is atherosclerosis?',
    answer: 'Plaque buildup inside arteries, leading to blocked blood flow',
    category: 'cardiovascular',
    subcategory: 'ACS',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['atherosclerosis', 'plaque buildup', 'artery blockage']
  },
  {
    id: 'card_016',
    question: 'What is acute coronary syndrome (ACS)?',
    answer: 'Symptoms caused by heart ischemia, including unstable angina and AMI',
    category: 'cardiovascular',
    subcategory: 'ACS',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['ACS', 'ischemia', 'unstable angina']
  },
  {
    id: 'card_017',
    question: 'Describe angina pectoris',
    answer: 'Crushing/squeezing chest pain due to insufficient oxygen, lasting 3–8 minutes, often relieved by rest or nitroglycerin',
    category: 'cardiovascular',
    subcategory: 'ACS',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['angina pectoris', 'chest pain', 'nitroglycerin']
  },
  {
    id: 'card_018',
    question: 'What are the three major problems after an AMI?',
    answer: 'Sudden death (from dysrhythmias), cardiogenic shock, and congestive heart failure (CHF)',
    category: 'cardiovascular',
    subcategory: 'ACS',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['AMI complications', 'sudden death', 'cardiogenic shock']
  },
  {
    id: 'card_019',
    question: 'What is ventricular fibrillation (VF)?',
    answer: 'A lethal rhythm where ventricles quiver, preventing blood pumping; treated with defibrillation',
    category: 'cardiovascular',
    subcategory: 'Arrhythmias',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['ventricular fibrillation', 'lethal rhythm', 'defibrillation']
  },
  {
    id: 'card_020',
    question: 'Describe cardiogenic shock',
    answer: 'The heart can\'t pump enough blood, causing pale skin, anxiety, fast pulse, and low BP (late sign)',
    category: 'cardiovascular',
    subcategory: 'Heart Failure',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['cardiogenic shock', 'pump failure', 'hypotension']
  },
  {
    id: 'card_021',
    question: 'What are signs of CHF?',
    answer: 'Dyspnea (worse when lying flat), crackles in lungs, swollen neck veins/ankles, and frothy sputum',
    category: 'cardiovascular',
    subcategory: 'Heart Failure',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['CHF signs', 'dyspnea', 'crackles']
  },
  {
    id: 'card_022',
    question: 'What defines a hypertensive emergency?',
    answer: 'Systolic BP >180 mmHg with symptoms like severe headache, nausea, or altered mental status',
    category: 'cardiovascular',
    subcategory: 'Advanced Cardiology',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['hypertensive emergency', 'high blood pressure', 'symptoms']
  },
  {
    id: 'card_023',
    question: 'What is a dissecting aortic aneurysm?',
    answer: 'Separation of aortic layers, causing sudden severe pain; may present with unequal arm BPs',
    category: 'cardiovascular',
    subcategory: 'Advanced Cardiology',
    difficulty: 'Advanced',
    certificationLevel: 'Paramedic',
    tags: ['aortic aneurysm', 'dissection', 'unequal BP']
  },
  {
    id: 'card_024',
    question: 'What does OPQRST stand for in history-taking?',
    answer: 'Onset, Provocation, Quality, Radiation, Severity, Time',
    category: 'cardiovascular',
    subcategory: 'ACS',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['OPQRST', 'history taking', 'chest pain assessment']
  },
  {
    id: 'card_025',
    question: 'What are general care steps for chest pain?',
    answer: 'Position comfortably (often sitting), loosen clothes, give oxygen, administer aspirin (if no contraindications), and consider nitroglycerin',
    category: 'cardiovascular',
    subcategory: 'ACS',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['chest pain care', 'aspirin', 'nitroglycerin']
  },
  {
    id: 'card_026',
    question: 'When is nitroglycerin contraindicated?',
    answer: 'If systolic BP <100 mmHg, recent ED drug use, or max dose given',
    category: 'cardiovascular',
    subcategory: 'ACS',
    difficulty: 'Intermediate',
    certificationLevel: 'EMT',
    tags: ['nitroglycerin contraindications', 'hypotension', 'ED drugs']
  },
  {
    id: 'card_027',
    question: 'What is the chain of survival?',
    answer: 'Call EMS → CPR → Defibrillation → Advanced care → Hospital care → Recovery',
    category: 'cardiovascular',
    subcategory: 'Arrhythmias',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['chain of survival', 'CPR', 'defibrillation']
  },
  {
    id: 'card_028',
    question: 'What rhythms are shockable by an AED?',
    answer: 'Ventricular fibrillation (VF) and pulseless ventricular tachycardia (VT)',
    category: 'cardiovascular',
    subcategory: 'Arrhythmias',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['shockable rhythms', 'VF', 'pulseless VT']
  },
  {
    id: 'card_029',
    question: 'What distinguishes asystole from PEA?',
    answer: 'Asystole: Flatline (no electrical activity). PEA: Electrical activity but no pulse',
    category: 'cardiovascular',
    subcategory: 'Arrhythmias',
    difficulty: 'Intermediate',
    certificationLevel: 'EMT',
    tags: ['asystole', 'PEA', 'electrical activity']
  },
  {
    id: 'card_030',
    question: 'Can you use an AED near water?',
    answer: 'No—dry the patient\'s chest first to avoid conductivity hazards',
    category: 'cardiovascular',
    subcategory: 'Arrhythmias',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['AED safety', 'water hazard', 'dry chest']
  },
  {
    id: 'card_031',
    question: 'What actions follow ROSC?',
    answer: 'Monitor breathing, give oxygen, check BP, and transport immediately',
    category: 'cardiovascular',
    subcategory: 'Arrhythmias',
    difficulty: 'Intermediate',
    certificationLevel: 'EMT',
    tags: ['ROSC', 'return of circulation', 'post-arrest care']
  },
  {
    id: 'card_032',
    question: 'What is the difference between CABG and PTCA?',
    answer: 'CABG: Uses a graft to bypass blocked arteries. PTCA: Uses a balloon to open arteries (angioplasty)',
    category: 'cardiovascular',
    subcategory: 'Advanced Cardiology',
    difficulty: 'Advanced',
    certificationLevel: 'Paramedic',
    tags: ['CABG', 'PTCA', 'angioplasty']
  },
  {
    id: 'card_033',
    question: 'How should you manage a patient with an AICD during an AMI?',
    answer: 'Treat like any AMI patient; avoid AED pads directly over the device',
    category: 'cardiovascular',
    subcategory: 'Advanced Cardiology',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['AICD', 'implanted device', 'AED placement']
  },
  {
    id: 'card_034',
    question: 'Why might an LVAD patient lack a palpable pulse?',
    answer: 'The device pumps blood continuously, often without a pulsatile flow',
    category: 'cardiovascular',
    subcategory: 'Advanced Cardiology',
    difficulty: 'Advanced',
    certificationLevel: 'Paramedic',
    tags: ['LVAD', 'continuous flow', 'no pulse']
  },
  {
    id: 'card_035',
    question: 'Why give aspirin in AMI?',
    answer: 'Inhibits platelet clotting (162–324 mg chewable)',
    category: 'cardiovascular',
    subcategory: 'ACS',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['aspirin', 'antiplatelet', 'clotting']
  },
  {
    id: 'card_036',
    question: 'What is a silent MI?',
    answer: 'AMI without classic chest pain (common in diabetics/elderly)',
    category: 'cardiovascular',
    subcategory: 'ACS',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['silent MI', 'diabetics', 'elderly']
  },
  {
    id: 'card_037',
    question: 'Where should AED pads be placed?',
    answer: 'Upper right sternum and left lateral chest (avoid pacemakers)',
    category: 'cardiovascular',
    subcategory: 'Arrhythmias',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['AED pad placement', 'sternum', 'lateral chest']
  },
  {
    id: 'card_038',
    question: 'How do symptoms differ between right and left-sided heart failure?',
    answer: 'Left-sided: Pulmonary edema, crackles, dyspnea. Right-sided: Peripheral edema, JVD, liver congestion',
    category: 'cardiovascular',
    subcategory: 'Heart Failure',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['heart failure types', 'pulmonary edema', 'peripheral edema']
  },
  {
    id: 'card_039',
    question: 'What causes commotio cordis?',
    answer: 'Blunt chest trauma during T-wave that triggers VF',
    category: 'cardiovascular',
    subcategory: 'Arrhythmias',
    difficulty: 'Advanced',
    certificationLevel: 'Paramedic',
    tags: ['commotio cordis', 'chest trauma', 'VF trigger']
  },
  {
    id: 'card_040',
    question: 'What distinguishes hypertensive emergency from urgency?',
    answer: 'Emergency has end-organ damage (e.g., AMI, stroke); urgency has high BP without damage',
    category: 'cardiovascular',
    subcategory: 'Advanced Cardiology',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['hypertensive emergency', 'end-organ damage', 'urgency']
  },
  {
    id: 'card_041',
    question: 'How does aortic dissection pain typically present?',
    answer: 'Tearing/ripping pain radiating to back, unequal arm BPs',
    category: 'cardiovascular',
    subcategory: 'Advanced Cardiology',
    difficulty: 'Advanced',
    certificationLevel: 'Paramedic',
    tags: ['aortic dissection', 'tearing pain', 'unequal BP']
  },
  {
    id: 'card_042',
    question: 'What does an S3 gallop indicate?',
    answer: 'Fluid overload/CHF (blood hitting stiff ventricle)',
    category: 'cardiovascular',
    subcategory: 'Heart Failure',
    difficulty: 'Advanced',
    certificationLevel: 'Paramedic',
    tags: ['S3 gallop', 'fluid overload', 'CHF']
  },
  {
    id: 'card_043',
    question: 'What is preload?',
    answer: 'The amount of blood returning to the heart (venous return)',
    category: 'cardiovascular',
    subcategory: 'Heart Anatomy',
    difficulty: 'Advanced',
    certificationLevel: 'Paramedic',
    tags: ['preload', 'venous return', 'cardiac physiology']
  },
  {
    id: 'card_044',
    question: 'What is afterload?',
    answer: 'The resistance the heart must overcome to pump blood out',
    category: 'cardiovascular',
    subcategory: 'Heart Anatomy',
    difficulty: 'Advanced',
    certificationLevel: 'Paramedic',
    tags: ['afterload', 'resistance', 'cardiac output']
  },
  {
    id: 'card_045',
    question: 'What is stroke volume?',
    answer: 'The amount of blood pumped with each heartbeat (normally 70mL)',
    category: 'cardiovascular',
    subcategory: 'Heart Anatomy',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['stroke volume', 'cardiac output', 'heartbeat']
  },
  {
    id: 'card_046',
    question: 'What is the normal ejection fraction?',
    answer: '55-70% (percentage of blood pumped out of left ventricle)',
    category: 'cardiovascular',
    subcategory: 'Heart Anatomy',
    difficulty: 'Advanced',
    certificationLevel: 'Paramedic',
    tags: ['ejection fraction', 'left ventricle', 'cardiac function']
  },
  {
    id: 'card_047',
    question: 'What is pericarditis?',
    answer: 'Inflammation of the membrane surrounding the heart',
    category: 'cardiovascular',
    subcategory: 'Advanced Cardiology',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['pericarditis', 'heart inflammation', 'pericardium']
  },
  {
    id: 'card_048',
    question: 'What is the Frank-Starling mechanism?',
    answer: 'The more the heart fills, the stronger it contracts (up to a point)',
    category: 'cardiovascular',
    subcategory: 'Heart Anatomy',
    difficulty: 'Advanced',
    certificationLevel: 'Paramedic',
    tags: ['Frank-Starling', 'cardiac filling', 'contraction strength']
  },
  {
    id: 'card_049',
    question: 'What are the contraindications for thrombolytic therapy?',
    answer: 'Recent surgery, bleeding, stroke history, uncontrolled hypertension',
    category: 'cardiovascular',
    subcategory: 'ACS',
    difficulty: 'Advanced',
    certificationLevel: 'Paramedic',
    tags: ['thrombolytics', 'contraindications', 'bleeding risk']
  },
  {
    id: 'card_050',
    question: 'What is the difference between stable and unstable angina?',
    answer: 'Stable: Predictable with exertion; Unstable: Unpredictable, at rest',
    category: 'cardiovascular',
    subcategory: 'ACS',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['stable angina', 'unstable angina', 'chest pain patterns']
  },

  // Additional Respiratory System Cards
  {
    id: 'resp_009',
    question: 'What is the Adam\'s apple?',
    answer: 'Laryngeal prominence (part of the larynx)',
    category: 'respiratory',
    subcategory: 'Anatomy',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['Adams apple', 'larynx', 'anatomy']
  },
  {
    id: 'resp_010',
    question: 'What is the purpose of surfactant in the lungs?',
    answer: 'Reduces surface tension to prevent alveoli collapse',
    category: 'respiratory',
    subcategory: 'Anatomy',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['surfactant', 'surface tension', 'alveoli']
  },
  {
    id: 'resp_011',
    question: 'What is the term for bluish skin from lack of oxygen?',
    answer: 'Cyanosis',
    category: 'respiratory',
    subcategory: 'Assessment',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['cyanosis', 'bluish skin', 'hypoxia']
  },
  {
    id: 'resp_012',
    question: 'What is the difference between emphysema and chronic bronchitis?',
    answer: 'Emphysema destroys alveoli; bronchitis inflames airways',
    category: 'respiratory',
    subcategory: 'COPD',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['emphysema', 'chronic bronchitis', 'COPD types']
  },
  {
    id: 'resp_013',
    question: 'What is the function of the epiglottis?',
    answer: 'Prevents food from entering the trachea',
    category: 'respiratory',
    subcategory: 'Anatomy',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['epiglottis', 'prevent aspiration', 'trachea']
  },
  {
    id: 'resp_014',
    question: 'How to differentiate COPD and CHF?',
    answer: 'COPD: Barrel chest, wheezing, pursed-lip breathing, history of smoking. CHF: Crackles in lungs, dyspnea when lying flat, peripheral edema',
    category: 'respiratory',
    subcategory: 'COPD',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['COPD vs CHF', 'barrel chest', 'peripheral edema']
  },
  {
    id: 'resp_015',
    question: 'What is hypoxic drive?',
    answer: 'In COPD, the brain relies on low oxygen (not high CO2) to regulate breathing; avoid high-flow O2',
    category: 'respiratory',
    subcategory: 'COPD',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['hypoxic drive', 'COPD', 'oxygen caution']
  },
  {
    id: 'resp_016',
    question: 'What is pulmonary edema?',
    answer: 'Fluid in lungs (often from CHF), causing crackles, frothy sputum, and severe dyspnea',
    category: 'respiratory',
    subcategory: 'Assessment',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['pulmonary edema', 'CHF', 'frothy sputum']
  },
  {
    id: 'resp_017',
    question: 'Describe anaphylaxis',
    answer: 'Severe allergic reaction with airway swelling, hives, and shock; treat with epinephrine',
    category: 'respiratory',
    subcategory: 'Assessment',
    difficulty: 'Intermediate',
    certificationLevel: 'EMT',
    tags: ['anaphylaxis', 'allergic reaction', 'epinephrine']
  },
  {
    id: 'resp_018',
    question: 'What is a pneumothorax?',
    answer: 'Air in pleural space, causing lung collapse; symptoms include unilateral absent breath sounds',
    category: 'respiratory',
    subcategory: 'Pneumothorax',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['pneumothorax', 'lung collapse', 'pleural space']
  },
  {
    id: 'resp_019',
    question: 'What is the priority for carbon monoxide poisoning?',
    answer: 'High-flow oxygen to displace CO from hemoglobin',
    category: 'respiratory',
    subcategory: 'Assessment',
    difficulty: 'Intermediate',
    certificationLevel: 'EMT',
    tags: ['carbon monoxide', 'high-flow oxygen', 'displacement']
  },
  {
    id: 'resp_020',
    question: 'How to manage asthma?',
    answer: 'Bronchodilators (e.g., albuterol), oxygen, and positioning',
    category: 'respiratory',
    subcategory: 'Asthma',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['asthma management', 'albuterol', 'bronchodilators']
  },
  {
    id: 'resp_021',
    question: 'What is the treatment for anaphylaxis-induced stridor?',
    answer: 'Epinephrine 1:1,000 IM, consider nebulized epi',
    category: 'respiratory',
    subcategory: 'Assessment',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['anaphylaxis stridor', 'epinephrine IM', 'nebulized epi']
  },
  {
    id: 'resp_022',
    question: 'What is the most common cause of upper airway obstruction in adults?',
    answer: 'Foreign body (food)',
    category: 'respiratory',
    subcategory: 'Assessment',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['airway obstruction', 'foreign body', 'food']
  },
  {
    id: 'resp_023',
    question: 'What is the difference between rhonchi and rales?',
    answer: 'Rhonchi are low-pitched (mucus); rales are crackles (fluid)',
    category: 'respiratory',
    subcategory: 'Assessment',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['rhonchi', 'rales', 'lung sounds']
  },
  {
    id: 'resp_024',
    question: 'What is the normal end-tidal CO2 (EtCO2) range?',
    answer: '35-45 mmHg',
    category: 'respiratory',
    subcategory: 'Assessment',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['EtCO2', 'capnography', 'normal range']
  },
  {
    id: 'resp_025',
    question: 'What does a "shark fin" waveform on capnography indicate?',
    answer: 'Severe bronchospasm (e.g., asthma/COPD exacerbation)',
    category: 'respiratory',
    subcategory: 'Assessment',
    difficulty: 'Advanced',
    certificationLevel: 'Paramedic',
    tags: ['shark fin waveform', 'bronchospasm', 'capnography']
  },
  {
    id: 'resp_026',
    question: 'What is the first-line treatment for COPD exacerbation?',
    answer: 'Oxygen (controlled), bronchodilators, steroids',
    category: 'respiratory',
    subcategory: 'COPD',
    difficulty: 'Intermediate',
    certificationLevel: 'EMT',
    tags: ['COPD exacerbation', 'controlled oxygen', 'bronchodilators']
  },
  {
    id: 'resp_027',
    question: 'What is the most common cause of pulmonary embolism?',
    answer: 'Deep vein thrombosis (DVT)',
    category: 'respiratory',
    subcategory: 'Assessment',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['pulmonary embolism', 'DVT', 'blood clot']
  },
  {
    id: 'resp_028',
    question: 'What are late signs of tension pneumothorax?',
    answer: 'Tracheal deviation, hypotension, absent breath sounds',
    category: 'respiratory',
    subcategory: 'Pneumothorax',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['tension pneumothorax', 'tracheal deviation', 'late signs']
  },
  {
    id: 'resp_029',
    question: 'What is the treatment for tension pneumothorax?',
    answer: 'Needle decompression at 2nd intercostal space, midclavicular line',
    category: 'respiratory',
    subcategory: 'Pneumothorax',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['needle decompression', '2nd intercostal', 'tension pneumothorax']
  },
  {
    id: 'resp_030',
    question: 'What is the difference between pneumothorax and hemothorax?',
    answer: 'Pneumothorax: Air in pleural space; Hemothorax: Blood in pleural space',
    category: 'respiratory',
    subcategory: 'Pneumothorax',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['pneumothorax', 'hemothorax', 'pleural space']
  },
  {
    id: 'resp_031',
    question: 'What is the normal tidal volume?',
    answer: '500mL (amount of air breathed in one normal breath)',
    category: 'respiratory',
    subcategory: 'Anatomy',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['tidal volume', '500mL', 'normal breathing']
  },
  {
    id: 'resp_032',
    question: 'What is minute ventilation?',
    answer: 'Tidal volume × respiratory rate (normally 6000mL/min)',
    category: 'respiratory',
    subcategory: 'Anatomy',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['minute ventilation', 'tidal volume', 'respiratory rate']
  },
  {
    id: 'resp_033',
    question: 'What is dead space?',
    answer: 'Areas of lung that receive air but no blood flow (no gas exchange)',
    category: 'respiratory',
    subcategory: 'Anatomy',
    difficulty: 'Advanced',
    certificationLevel: 'Paramedic',
    tags: ['dead space', 'no gas exchange', 'ventilation perfusion']
  },
  {
    id: 'resp_034',
    question: 'What is the difference between ventilation and respiration?',
    answer: 'Ventilation: Moving air; Respiration: Gas exchange at cellular level',
    category: 'respiratory',
    subcategory: 'Anatomy',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['ventilation', 'respiration', 'gas exchange']
  },
  {
    id: 'resp_035',
    question: 'What is hypoxic drive?',
    answer: 'Breathing stimulated by low oxygen instead of high CO2 (COPD patients)',
    category: 'respiratory',
    subcategory: 'COPD',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['hypoxic drive', 'COPD', 'oxygen stimulus']
  },
  {
    id: 'resp_036',
    question: 'What is the normal oxygen saturation range?',
    answer: '95-100% (COPD patients may run 88-92%)',
    category: 'respiratory',
    subcategory: 'Assessment',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['oxygen saturation', 'SpO2', 'normal values']
  },
  {
    id: 'resp_037',
    question: 'What is cor pulmonale?',
    answer: 'Right heart failure caused by lung disease',
    category: 'respiratory',
    subcategory: 'COPD',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['cor pulmonale', 'right heart failure', 'lung disease']
  },
  {
    id: 'resp_038',
    question: 'What is the pink puffer vs blue bloater?',
    answer: 'Pink puffer: Emphysema (thin, dyspneic); Blue bloater: Chronic bronchitis (overweight, cyanotic)',
    category: 'respiratory',
    subcategory: 'COPD',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['pink puffer', 'blue bloater', 'emphysema bronchitis']
  },
  {
    id: 'resp_039',
    question: 'What is atelectasis?',
    answer: 'Collapse of lung tissue or alveoli',
    category: 'respiratory',
    subcategory: 'Assessment',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['atelectasis', 'lung collapse', 'alveoli']
  },
  {
    id: 'resp_040',
    question: 'What is the difference between inspiratory and expiratory stridor?',
    answer: 'Inspiratory: Upper airway obstruction; Expiratory: Lower airway obstruction',
    category: 'respiratory',
    subcategory: 'Assessment',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['stridor', 'inspiratory expiratory', 'airway obstruction']
  },
  {
    id: 'resp_041',
    question: 'What is sleep apnea?',
    answer: 'Repeated interruptions in breathing during sleep',
    category: 'respiratory',
    subcategory: 'Assessment',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['sleep apnea', 'breathing interruption', 'sleep disorder']
  },
  {
    id: 'resp_042',
    question: 'What is the Hering-Breuer reflex?',
    answer: 'Prevents over-inflation of lungs by stopping inspiration',
    category: 'respiratory',
    subcategory: 'Anatomy',
    difficulty: 'Advanced',
    certificationLevel: 'Paramedic',
    tags: ['Hering-Breuer reflex', 'lung inflation', 'inspiration control']
  },
  {
    id: 'resp_043',
    question: 'What is silicosis?',
    answer: 'Lung disease from inhaling silica dust (occupational)',
    category: 'respiratory',
    subcategory: 'Assessment',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['silicosis', 'silica dust', 'occupational lung disease']
  },
  {
    id: 'resp_044',
    question: 'What is asbestosis?',
    answer: 'Lung scarring from asbestos exposure (leads to mesothelioma)',
    category: 'respiratory',
    subcategory: 'Assessment',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['asbestosis', 'asbestos exposure', 'mesothelioma']
  },
  {
    id: 'resp_045',
    question: 'What is the purpose of surfactant?',
    answer: 'Reduces surface tension to prevent alveolar collapse',
    category: 'respiratory',
    subcategory: 'Anatomy',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['surfactant', 'surface tension', 'alveolar collapse']
  },
  {
    id: 'resp_046',
    question: 'What is the difference between Type I and Type II respiratory failure?',
    answer: 'Type I: Low oxygen only; Type II: Low oxygen AND high CO2',
    category: 'respiratory',
    subcategory: 'Assessment',
    difficulty: 'Advanced',
    certificationLevel: 'Paramedic',
    tags: ['respiratory failure', 'Type I Type II', 'oxygen CO2']
  },
  {
    id: 'resp_047',
    question: 'What is the normal respiratory drive?',
    answer: 'High CO2 levels (hypercapnic drive) in healthy individuals',
    category: 'respiratory',
    subcategory: 'Anatomy',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['respiratory drive', 'hypercapnic', 'CO2 levels']
  },
  {
    id: 'resp_048',
    question: 'What is Kussmaul breathing?',
    answer: 'Deep, rapid breathing to compensate for metabolic acidosis',
    category: 'respiratory',
    subcategory: 'Assessment',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['Kussmaul breathing', 'metabolic acidosis', 'compensation']
  },
  {
    id: 'resp_049',
    question: 'What is the V/Q ratio?',
    answer: 'Ventilation to perfusion ratio (normally 0.8)',
    category: 'respiratory',
    subcategory: 'Anatomy',
    difficulty: 'Advanced',
    certificationLevel: 'Paramedic',
    tags: ['V/Q ratio', 'ventilation perfusion', 'gas exchange']
  },
  {
    id: 'resp_050',
    question: 'What is the difference between central and peripheral cyanosis?',
    answer: 'Central: Core hypoxia (lips, tongue); Peripheral: Poor circulation (fingers, toes)',
    category: 'respiratory',
    subcategory: 'Assessment',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['central cyanosis', 'peripheral cyanosis', 'hypoxia circulation']
  },

  // Additional Medical Emergency Cards
  {
    id: 'med_006',
    question: 'What is Type 2 diabetes?',
    answer: 'Insulin resistance; managed with diet, meds, or insulin',
    category: 'medical',
    subcategory: 'Diabetes',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['Type 2 diabetes', 'insulin resistance', 'management']
  },
  {
    id: 'med_007',
    question: 'What is hyperglycemia?',
    answer: 'High blood glucose; causes thirst, frequent urination, coma',
    category: 'medical',
    subcategory: 'Diabetes',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['hyperglycemia', 'high glucose', 'thirst']
  },
  {
    id: 'med_008',
    question: 'What is HHNS?',
    answer: 'Hyperosmolar Hyperglycemic Nonketotic Syndrome; severe dehydration, high glucose',
    category: 'medical',
    subcategory: 'Diabetes',
    difficulty: 'Advanced',
    certificationLevel: 'Paramedic',
    tags: ['HHNS', 'hyperosmolar', 'dehydration']
  },
  {
    id: 'med_009',
    question: 'What are signs of hypoglycemia?',
    answer: 'Pale/clammy skin, rapid pulse, altered mental status',
    category: 'medical',
    subcategory: 'Diabetes',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['hypoglycemia signs', 'clammy skin', 'altered mental status']
  },
  {
    id: 'med_010',
    question: 'What are signs of hyperglycemia?',
    answer: 'Warm/dry skin, fruity breath, polyuria',
    category: 'medical',
    subcategory: 'Diabetes',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['hyperglycemia signs', 'fruity breath', 'polyuria']
  },
  {
    id: 'med_011',
    question: 'How do you treat hypoglycemia in a conscious patient?',
    answer: 'Oral glucose (tablets/juice)',
    category: 'medical',
    subcategory: 'Diabetes',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['hypoglycemia treatment', 'oral glucose', 'conscious patient']
  },
  {
    id: 'med_012',
    question: 'What is a contraindication for oral glucose?',
    answer: 'Inability to swallow or unconsciousness',
    category: 'medical',
    subcategory: 'Diabetes',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['oral glucose contraindication', 'unconscious', 'swallowing']
  },
  {
    id: 'med_013',
    question: 'What is the first action for an unresponsive diabetic?',
    answer: 'Open the airway, check glucose, give IV dextrose if ALS',
    category: 'medical',
    subcategory: 'Diabetes',
    difficulty: 'Intermediate',
    certificationLevel: 'AEMT',
    tags: ['unresponsive diabetic', 'airway', 'IV dextrose']
  },
  {
    id: 'med_014',
    question: 'What causes Kussmaul respirations?',
    answer: 'Body compensating for acidosis (e.g., DKA)',
    category: 'medical',
    subcategory: 'Diabetes',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['Kussmaul respirations', 'acidosis', 'DKA']
  },
  {
    id: 'med_015',
    question: 'Why are diabetics dehydrated in DKA?',
    answer: 'Kidneys excrete excess glucose and water',
    category: 'medical',
    subcategory: 'Diabetes',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['DKA dehydration', 'glucose excretion', 'kidneys']
  },
  {
    id: 'med_016',
    question: 'What mimics a stroke in diabetics?',
    answer: 'Hypoglycemia (can cause one-sided weakness)',
    category: 'medical',
    subcategory: 'Diabetes',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['hypoglycemia stroke mimic', 'one-sided weakness', 'diabetics']
  },
  {
    id: 'med_017',
    question: 'What is a common cause of hypoglycemia?',
    answer: 'Taking insulin without eating',
    category: 'medical',
    subcategory: 'Diabetes',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['hypoglycemia cause', 'insulin', 'not eating']
  },
  {
    id: 'med_018',
    question: 'What is the normal blood glucose range?',
    answer: '80–120 mg/dL (non-fasting)',
    category: 'medical',
    subcategory: 'Diabetes',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['normal glucose', 'blood sugar range', 'non-fasting']
  },
  {
    id: 'med_019',
    question: 'What is the priority for a diabetic seizure?',
    answer: 'Protect airway, check glucose, give dextrose if hypoglycemic',
    category: 'medical',
    subcategory: 'Diabetes',
    difficulty: 'Intermediate',
    certificationLevel: 'AEMT',
    tags: ['diabetic seizure', 'airway protection', 'dextrose']
  },
  {
    id: 'med_020',
    question: 'What is the "fruity breath" sign?',
    answer: 'Ketones in DKA',
    category: 'medical',
    subcategory: 'Diabetes',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['fruity breath', 'ketones', 'DKA']
  },
  {
    id: 'med_021',
    question: 'What is polydipsia?',
    answer: 'Excessive thirst (sign of hyperglycemia)',
    category: 'medical',
    subcategory: 'Diabetes',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['polydipsia', 'excessive thirst', 'hyperglycemia']
  },
  {
    id: 'med_022',
    question: 'What is polyphagia?',
    answer: 'Excessive hunger (sign of hyperglycemia)',
    category: 'medical',
    subcategory: 'Diabetes',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['polyphagia', 'excessive hunger', 'hyperglycemia']
  },
  {
    id: 'med_023',
    question: 'What are signs of sickle cell crisis?',
    answer: 'Pain (joints/chest), swelling, jaundice, tachycardia',
    category: 'medical',
    subcategory: 'Hematologic',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['sickle cell crisis', 'joint pain', 'jaundice']
  },
  {
    id: 'med_024',
    question: 'What is hemophilia?',
    answer: 'Disorder impairing blood clotting (lack of clotting factors)',
    category: 'medical',
    subcategory: 'Hematologic',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['hemophilia', 'clotting disorder', 'bleeding']
  },
  {
    id: 'med_025',
    question: 'What is thrombophilia?',
    answer: 'Disorder causing excessive clotting',
    category: 'medical',
    subcategory: 'Hematologic',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['thrombophilia', 'excessive clotting', 'blood disorder']
  },
  {
    id: 'med_026',
    question: 'What is DVT?',
    answer: 'Deep vein thrombosis; risk factors include immobility/surgery',
    category: 'medical',
    subcategory: 'Hematologic',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['DVT', 'deep vein thrombosis', 'immobility']
  },
  {
    id: 'med_027',
    question: 'What is a pulmonary embolism?',
    answer: 'Clot from DVT traveling to the lungs',
    category: 'medical',
    subcategory: 'Hematologic',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['pulmonary embolism', 'DVT clot', 'lungs']
  },
  {
    id: 'med_028',
    question: 'What is anemia?',
    answer: 'Low RBCs; causes fatigue, pallor, hypoxia',
    category: 'medical',
    subcategory: 'Hematologic',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['anemia', 'low RBCs', 'fatigue']
  },
  {
    id: 'med_029',
    question: 'Why might pulse ox be inaccurate in anemia?',
    answer: 'Measures saturation, not RBC count',
    category: 'medical',
    subcategory: 'Hematologic',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['pulse ox accuracy', 'anemia', 'saturation vs count']
  },
  {
    id: 'med_030',
    question: 'What is priapism?',
    answer: 'Painful prolonged erection (complication of sickle cell)',
    category: 'medical',
    subcategory: 'Hematologic',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['priapism', 'sickle cell complication', 'painful erection']
  },
  {
    id: 'med_031',
    question: 'How do you manage sickle cell crisis?',
    answer: 'Oxygen, IV fluids, pain control, rapid transport',
    category: 'medical',
    subcategory: 'Hematologic',
    difficulty: 'Intermediate',
    certificationLevel: 'EMT',
    tags: ['sickle cell management', 'oxygen', 'IV fluids']
  },
  {
    id: 'med_032',
    question: 'What is a hematologic emergency in hemophilia?',
    answer: 'Uncontrolled bleeding (e.g., intracranial)',
    category: 'medical',
    subcategory: 'Hematologic',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['hemophilia emergency', 'uncontrolled bleeding', 'intracranial']
  },
  {
    id: 'med_033',
    question: 'What are platelets responsible for?',
    answer: 'Clot formation',
    category: 'medical',
    subcategory: 'Hematologic',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['platelets', 'clot formation', 'bleeding control']
  },
  {
    id: 'med_034',
    question: 'What is plasma?',
    answer: 'Liquid part of blood carrying cells/proteins',
    category: 'medical',
    subcategory: 'Hematologic',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['plasma', 'blood component', 'liquid']
  },
  {
    id: 'med_035',
    question: 'What is jaundice?',
    answer: 'Yellow skin from RBC breakdown (seen in sickle cell)',
    category: 'medical',
    subcategory: 'Hematologic',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['jaundice', 'yellow skin', 'RBC breakdown']
  },
  {
    id: 'med_036',
    question: 'What is the priority for DVT?',
    answer: 'Anticoagulants, avoid movement to prevent embolism',
    category: 'medical',
    subcategory: 'Hematologic',
    difficulty: 'Advanced',
    certificationLevel: 'Paramedic',
    tags: ['DVT treatment', 'anticoagulants', 'prevent embolism']
  },
  {
    id: 'med_037',
    question: 'What causes anemia?',
    answer: 'Blood loss, vitamin deficiency (e.g., iron/B12)',
    category: 'medical',
    subcategory: 'Hematologic',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['anemia causes', 'blood loss', 'vitamin deficiency']
  },
  {
    id: 'med_038',
    question: 'What is a sign of hemophilia?',
    answer: 'Prolonged bleeding after minor injury',
    category: 'medical',
    subcategory: 'Hematologic',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['hemophilia sign', 'prolonged bleeding', 'minor injury']
  },
  {
    id: 'med_039',
    question: 'What are solid abdominal organs?',
    answer: 'Liver, spleen, pancreas, kidneys (can bleed if injured)',
    category: 'medical',
    subcategory: 'GI Emergencies',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['solid organs', 'liver', 'spleen', 'bleeding']
  },
  {
    id: 'med_040',
    question: 'What are hollow abdominal organs?',
    answer: 'Stomach, intestines, gallbladder (rupture causes contamination)',
    category: 'medical',
    subcategory: 'GI Emergencies',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['hollow organs', 'stomach', 'contamination']
  },
  {
    id: 'med_041',
    question: 'What is peritonitis?',
    answer: 'Inflammation of the abdominal lining, causing rigidity/guarding',
    category: 'medical',
    subcategory: 'GI Emergencies',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['peritonitis', 'abdominal inflammation', 'rigidity']
  },
  {
    id: 'med_042',
    question: 'What are signs of acute abdomen?',
    answer: 'Sudden severe pain, distension, tachycardia, tenderness',
    category: 'medical',
    subcategory: 'GI Emergencies',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['acute abdomen', 'severe pain', 'distension']
  },
  {
    id: 'med_043',
    question: 'What is appendicitis pain like?',
    answer: 'Starts dull near the navel, shifts to right lower quadrant',
    category: 'medical',
    subcategory: 'GI Emergencies',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['appendicitis', 'navel pain', 'right lower quadrant']
  },
  {
    id: 'med_044',
    question: 'What is a key sign of GI hemorrhage?',
    answer: 'Vomiting blood (hematemesis) or black/tarry stools (melena)',
    category: 'medical',
    subcategory: 'GI Emergencies',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['GI hemorrhage', 'hematemesis', 'melena']
  },
  {
    id: 'med_045',
    question: 'How should you transport a patient with acute abdominal pain?',
    answer: 'On their side with knees flexed',
    category: 'medical',
    subcategory: 'GI Emergencies',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['abdominal pain transport', 'side position', 'knees flexed']
  },
  {
    id: 'med_046',
    question: 'What is sepsis?',
    answer: 'Life-threatening organ dysfunction due to infection',
    category: 'medical',
    subcategory: 'Infectious Diseases',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['sepsis', 'organ dysfunction', 'infection']
  },
  {
    id: 'med_047',
    question: 'What are the signs of meningitis?',
    answer: 'Fever, headache, neck stiffness, altered mental status',
    category: 'medical',
    subcategory: 'Infectious Diseases',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['meningitis', 'fever headache', 'neck stiffness']
  },
  {
    id: 'med_048',
    question: 'What is sickle cell crisis?',
    answer: 'Painful episode when sickled red blood cells block blood flow',
    category: 'medical',
    subcategory: 'Hematologic',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['sickle cell crisis', 'blocked blood flow', 'pain episode']
  },
  {
    id: 'med_049',
    question: 'What is hemophilia?',
    answer: 'Inherited bleeding disorder due to clotting factor deficiency',
    category: 'medical',
    subcategory: 'Hematologic',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['hemophilia', 'bleeding disorder', 'clotting factors']
  },
  {
    id: 'med_050',
    question: 'What is the treatment for hypothermia?',
    answer: 'Gradual rewarming, warm IV fluids, handle gently',
    category: 'medical',
    subcategory: 'Environmental',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['hypothermia treatment', 'gradual rewarming', 'warm fluids']
  },

  // Additional Trauma Cards
  {
    id: 'trauma_001',
    question: 'What is the first priority in trauma assessment?',
    answer: 'Control massive hemorrhage (MARCH protocol)',
    category: 'trauma',
    subcategory: 'Trauma Assessment',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['trauma priority', 'massive hemorrhage', 'MARCH']
  },
  {
    id: 'trauma_002',
    question: 'What are the 5 lethal chest injuries?',
    answer: 'Tension pneumo, cardiac tamponade, massive hemothorax, flail chest, open pneumothorax',
    category: 'trauma',
    subcategory: 'Trauma Assessment',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['lethal chest injuries', 'tension pneumo', 'cardiac tamponade']
  },
  {
    id: 'trauma_003',
    question: 'What is the treatment for flail chest?',
    answer: 'Positive pressure ventilation (CPAP/BiPAP if available)',
    category: 'trauma',
    subcategory: 'Trauma Assessment',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['flail chest', 'positive pressure', 'CPAP']
  },
  {
    id: 'trauma_004',
    question: 'What is the Kehr\'s sign?',
    answer: 'Left shoulder pain (referred from splenic injury)',
    category: 'trauma',
    subcategory: 'Trauma Assessment',
    difficulty: 'Advanced',
    certificationLevel: 'Paramedic',
    tags: ['Kehrs sign', 'left shoulder pain', 'splenic injury']
  },
  {
    id: 'trauma_005',
    question: 'What is the most common injury in blunt chest trauma?',
    answer: 'Rib fractures',
    category: 'trauma',
    subcategory: 'Fractures',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['blunt chest trauma', 'rib fractures', 'common injury']
  },
  {
    id: 'trauma_006',
    question: 'What is the "triad of death" in trauma?',
    answer: 'Hypothermia, acidosis, coagulopathy',
    category: 'trauma',
    subcategory: 'Trauma Assessment',
    difficulty: 'Advanced',
    certificationLevel: 'Paramedic',
    tags: ['triad of death', 'hypothermia', 'acidosis']
  },
  {
    id: 'trauma_007',
    question: 'What is the treatment for a sucking chest wound?',
    answer: 'Occlusive dressing taped on 3 sides',
    category: 'trauma',
    subcategory: 'Trauma Assessment',
    difficulty: 'Intermediate',
    certificationLevel: 'EMT',
    tags: ['sucking chest wound', 'occlusive dressing', '3 sides']
  },
  {
    id: 'trauma_008',
    question: 'What is the most sensitive sign of pelvic fracture?',
    answer: 'Pelvic instability on exam',
    category: 'trauma',
    subcategory: 'Fractures',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['pelvic fracture', 'instability', 'examination']
  },
  {
    id: 'trauma_009',
    question: 'What is the #1 cause of preventable trauma death?',
    answer: 'Airway obstruction',
    category: 'trauma',
    subcategory: 'Trauma Assessment',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['preventable death', 'airway obstruction', 'trauma']
  },
  {
    id: 'trauma_010',
    question: 'What is the Parkland formula for burns?',
    answer: '4 mL LR × kg × %TBSA (1/2 in first 8h)',
    category: 'trauma',
    subcategory: 'Burns',
    difficulty: 'Advanced',
    certificationLevel: 'Paramedic',
    tags: ['Parkland formula', 'burns', 'fluid resuscitation']
  },
  {
    id: 'trauma_011',
    question: 'What is the most common complication of fractures?',
    answer: 'Fat embolism syndrome (long bones)',
    category: 'trauma',
    subcategory: 'Fractures',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['fracture complication', 'fat embolism', 'long bones']
  },
  {
    id: 'trauma_012',
    question: 'What is the treatment for compartment syndrome?',
    answer: 'Rapid transport for fasciotomy',
    category: 'trauma',
    subcategory: 'Fractures',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['compartment syndrome', 'fasciotomy', 'rapid transport']
  },
  {
    id: 'trauma_013',
    question: 'What is the rule of nines for burns?',
    answer: 'Estimates total body surface area burned',
    category: 'trauma',
    subcategory: 'Burns',
    difficulty: 'Intermediate',
    certificationLevel: 'EMT',
    tags: ['rule of nines', 'burn assessment', 'TBSA']
  },
  {
    id: 'trauma_014',
    question: 'What is the recovery position used for?',
    answer: 'Unconscious, breathing patients to maintain airway',
    category: 'trauma',
    subcategory: 'Spinal Injuries',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['recovery position', 'unconscious patient', 'airway maintenance']
  },
  {
    id: 'trauma_015',
    question: 'What is the purpose of a tourniquet?',
    answer: 'Stop severe arterial bleeding (last resort)',
    category: 'trauma',
    subcategory: 'Bleeding Control',
    difficulty: 'Intermediate',
    certificationLevel: 'EMT',
    tags: ['tourniquet', 'arterial bleeding', 'last resort']
  },
  {
    id: 'trauma_016',
    question: 'What causes traumatic asphyxia?',
    answer: 'Severe chest compression → facial/conjunctival petechiae',
    category: 'trauma',
    subcategory: 'Trauma Assessment',
    difficulty: 'Advanced',
    certificationLevel: 'Paramedic',
    tags: ['traumatic asphyxia', 'chest compression', 'petechiae']
  },
  {
    id: 'trauma_017',
    question: 'What does flail chest affect?',
    answer: 'Paradoxical movement impairs ventilation',
    category: 'trauma',
    subcategory: 'Trauma Assessment',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['flail chest', 'paradoxical movement', 'ventilation']
  },
  {
    id: 'trauma_018',
    question: 'What is ARDS (Acute Respiratory Distress Syndrome)?',
    answer: 'Refractory hypoxia, bilateral infiltrates, non-cardiac pulmonary edema',
    category: 'trauma',
    subcategory: 'Trauma Assessment',
    difficulty: 'Advanced',
    certificationLevel: 'Paramedic',
    tags: ['ARDS', 'refractory hypoxia', 'bilateral infiltrates']
  },
  {
    id: 'trauma_019',
    question: 'What are the signs of shock?',
    answer: 'Tachycardia, hypotension, altered mental status, cool/clammy skin',
    category: 'trauma',
    subcategory: 'Bleeding Control',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['shock signs', 'tachycardia', 'hypotension']
  },
  {
    id: 'trauma_020',
    question: 'What is golden hour in trauma?',
    answer: 'First hour after injury when treatment is most critical',
    category: 'trauma',
    subcategory: 'Trauma Assessment',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['golden hour', 'critical time', 'trauma treatment']
  },
  {
    id: 'trauma_021',
    question: 'What is compartment syndrome?',
    answer: 'Increased pressure in muscle compartment causing tissue death',
    category: 'trauma',
    subcategory: 'Fractures',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['compartment syndrome', 'muscle pressure', 'tissue death']
  },
  {
    id: 'trauma_022',
    question: 'What are the 5 Ps of compartment syndrome?',
    answer: 'Pain, Pallor, Paresthesia, Pulselessness, Paralysis',
    category: 'trauma',
    subcategory: 'Fractures',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['5 Ps', 'compartment syndrome', 'assessment signs']
  },
  {
    id: 'trauma_023',
    question: 'What is a penetrating trauma?',
    answer: 'Injury that breaks through the skin and enters the body',
    category: 'trauma',
    subcategory: 'Trauma Assessment',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['penetrating trauma', 'breaks skin', 'enters body']
  },
  {
    id: 'trauma_024',
    question: 'What is blunt trauma?',
    answer: 'Injury from impact without breaking the skin',
    category: 'trauma',
    subcategory: 'Trauma Assessment',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['blunt trauma', 'impact injury', 'no skin break']
  },
  {
    id: 'trauma_025',
    question: 'What is a avulsion?',
    answer: 'Forceful tearing away of tissue or body part',
    category: 'trauma',
    subcategory: 'Injuries',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['avulsion', 'forceful tearing', 'tissue removal']
  },
  {
    id: 'trauma_026',
    question: 'What is a laceration?',
    answer: 'Jagged cut through skin and tissue',
    category: 'trauma',
    subcategory: 'Injuries',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['laceration', 'jagged cut', 'skin tissue']
  },
  {
    id: 'trauma_027',
    question: 'What is an abrasion?',
    answer: 'Scraping away of superficial skin layers',
    category: 'trauma',
    subcategory: 'Injuries',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['abrasion', 'scraping skin', 'superficial']
  },
  {
    id: 'trauma_028',
    question: 'What is a contusion?',
    answer: 'Bruise from blunt trauma causing bleeding under skin',
    category: 'trauma',
    subcategory: 'Injuries',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['contusion', 'bruise', 'bleeding under skin']
  },
  {
    id: 'trauma_029',
    question: 'What is a hematoma?',
    answer: 'Collection of blood outside blood vessels',
    category: 'trauma',
    subcategory: 'Injuries',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['hematoma', 'blood collection', 'outside vessels']
  },
  {
    id: 'trauma_030',
    question: 'What is first-degree burn?',
    answer: 'Superficial burn affecting only epidermis (red, painful)',
    category: 'trauma',
    subcategory: 'Burns',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['first-degree burn', 'epidermis only', 'red painful']
  },
  {
    id: 'trauma_031',
    question: 'What is second-degree burn?',
    answer: 'Partial thickness burn with blisters (epidermis + dermis)',
    category: 'trauma',
    subcategory: 'Burns',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['second-degree burn', 'partial thickness', 'blisters']
  },
  {
    id: 'trauma_032',
    question: 'What is third-degree burn?',
    answer: 'Full thickness burn through all skin layers (white/charred)',
    category: 'trauma',
    subcategory: 'Burns',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['third-degree burn', 'full thickness', 'white charred']
  },
  {
    id: 'trauma_033',
    question: 'What is the rule of nines for burns?',
    answer: 'Method to estimate burn percentage: Head 9%, Arms 9% each, Legs 18% each, Torso 36%, Genitals 1%',
    category: 'trauma',
    subcategory: 'Burns',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['rule of nines', 'burn percentage', 'body surface area']
  },
  {
    id: 'trauma_034',
    question: 'What burns require transport to burn center?',
    answer: 'Partial thickness >10%, full thickness >5%, airway burns, electrical burns',
    category: 'trauma',
    subcategory: 'Burns',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['burn center criteria', 'transport decision', 'severe burns']
  },
  {
    id: 'trauma_035',
    question: 'What is the treatment for electrical burns?',
    answer: 'Ensure scene safety, monitor cardiac rhythm, fluid resuscitation',
    category: 'trauma',
    subcategory: 'Burns',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['electrical burns', 'scene safety', 'cardiac monitoring']
  },
  {
    id: 'trauma_036',
    question: 'What is flail chest?',
    answer: 'Three or more adjacent ribs fractured in two places',
    category: 'trauma',
    subcategory: 'Fractures',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['flail chest', 'multiple rib fractures', 'paradoxical movement']
  },
  {
    id: 'trauma_037',
    question: 'What is paradoxical chest movement?',
    answer: 'Flail segment moves opposite to rest of chest during breathing',
    category: 'trauma',
    subcategory: 'Fractures',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['paradoxical movement', 'flail chest', 'opposite breathing']
  },
  {
    id: 'trauma_038',
    question: 'What is a sucking chest wound?',
    answer: 'Open pneumothorax allowing air to enter pleural space',
    category: 'trauma',
    subcategory: 'Injuries',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['sucking chest wound', 'open pneumothorax', 'pleural space']
  },
  {
    id: 'trauma_039',
    question: 'How do you treat a sucking chest wound?',
    answer: 'Three-sided occlusive dressing (tape three sides only)',
    category: 'trauma',
    subcategory: 'Injuries',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['sucking chest treatment', 'three-sided dressing', 'occlusive']
  },
  {
    id: 'trauma_040',
    question: 'What is Beck\'s triad?',
    answer: 'Signs of cardiac tamponade: JVD, muffled heart sounds, hypotension',
    category: 'trauma',
    subcategory: 'Injuries',
    difficulty: 'Advanced',
    certificationLevel: 'Paramedic',
    tags: ['Beck triad', 'cardiac tamponade', 'JVD muffled hypotension']
  },
  {
    id: 'trauma_041',
    question: 'What is pericardial tamponade?',
    answer: 'Blood or fluid in pericardium compressing the heart',
    category: 'trauma',
    subcategory: 'Injuries',
    difficulty: 'Advanced',
    certificationLevel: 'Paramedic',
    tags: ['pericardial tamponade', 'heart compression', 'pericardium fluid']
  },
  {
    id: 'trauma_042',
    question: 'What is a pneumothorax?',
    answer: 'Air in the pleural space causing lung collapse',
    category: 'trauma',
    subcategory: 'Injuries',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['pneumothorax', 'pleural space air', 'lung collapse']
  },
  {
    id: 'trauma_043',
    question: 'What is FAST exam?',
    answer: 'Focused Assessment Sonography in Trauma (ultrasound for bleeding)',
    category: 'trauma',
    subcategory: 'Trauma Assessment',
    difficulty: 'Advanced',
    certificationLevel: 'Paramedic',
    tags: ['FAST exam', 'ultrasound trauma', 'internal bleeding']
  },
  {
    id: 'trauma_044',
    question: 'What is the load and go decision?',
    answer: 'Rapid transport for unstable trauma patients (< 10 min scene time)',
    category: 'trauma',
    subcategory: 'Trauma Assessment',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['load and go', 'rapid transport', 'unstable trauma']
  },
  {
    id: 'trauma_045',
    question: 'What is hemorrhagic shock classification?',
    answer: 'Class I: <15% loss, Class II: 15-30%, Class III: 30-40%, Class IV: >40%',
    category: 'trauma',
    subcategory: 'Bleeding Control',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['shock classification', 'blood loss percentage', 'hemorrhagic']
  },
  {
    id: 'trauma_046',
    question: 'What is permissive hypotension?',
    answer: 'Allowing lower BP to reduce bleeding until definitive care',
    category: 'trauma',
    subcategory: 'Bleeding Control',
    difficulty: 'Advanced',
    certificationLevel: 'Paramedic',
    tags: ['permissive hypotension', 'controlled bleeding', 'lower BP']
  },
  {
    id: 'trauma_047',
    question: 'What is damage control resuscitation?',
    answer: 'Early blood products, minimize crystalloids, control bleeding',
    category: 'trauma',
    subcategory: 'Bleeding Control',
    difficulty: 'Advanced',
    certificationLevel: 'Paramedic',
    tags: ['damage control', 'blood products', 'minimize crystalloids']
  },
  {
    id: 'trauma_048',
    question: 'What is the lethal triad of trauma?',
    answer: 'Hypothermia, acidosis, and coagulopathy',
    category: 'trauma',
    subcategory: 'Trauma Assessment',
    difficulty: 'Advanced',
    certificationLevel: 'Paramedic',
    tags: ['lethal triad', 'hypothermia acidosis coagulopathy', 'trauma death']
  },
  {
    id: 'trauma_049',
    question: 'What is secondary brain injury?',
    answer: 'Brain damage from hypoxia, hypotension, or increased ICP after initial trauma',
    category: 'trauma',
    subcategory: 'Injuries',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['secondary brain injury', 'hypoxia hypotension', 'increased ICP']
  },
  {
    id: 'trauma_050',
    question: 'What is the trauma triad of death prevention?',
    answer: 'Maintain normothermia, prevent acidosis, preserve coagulation',
    category: 'trauma',
    subcategory: 'Trauma Assessment',
    difficulty: 'Advanced',
    certificationLevel: 'Paramedic',
    tags: ['trauma triad prevention', 'normothermia', 'prevent acidosis']
  },

  // EMT Scenario Cards (50 total)
  {
    id: 'scenario_001',
    question: 'Patient complains of chest pain radiating to left arm. What is your priority assessment?',
    answer: 'Check pulse, blood pressure, obtain 12-lead ECG, administer oxygen, aspirin if not allergic',
    category: 'scenarios',
    subcategory: 'Assessment',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['chest pain', 'cardiac assessment', 'ECG priority']
  },
  {
    id: 'scenario_002',
    question: 'Unconscious diabetic patient with blood glucose of 45 mg/dL. What is your treatment?',
    answer: 'Secure airway, IV access, administer dextrose 25g IV or glucagon 1mg IM',
    category: 'scenarios',
    subcategory: 'Treatment',
    difficulty: 'Intermediate',
    certificationLevel: 'AEMT',
    tags: ['hypoglycemia', 'dextrose administration', 'diabetic emergency']
  },
  {
    id: 'scenario_003',
    question: 'Patient having severe asthma attack, can only speak 1-2 words. What is your immediate action?',
    answer: 'High-flow oxygen, albuterol nebulizer, consider epinephrine if severe',
    category: 'scenarios',
    subcategory: 'Treatment',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['severe asthma', 'albuterol treatment', 'respiratory emergency']
  },
  {
    id: 'scenario_004',
    question: 'Motor vehicle collision with patient trapped, weak pulse, altered mental status. What is your priority?',
    answer: 'Scene safety, cervical spine immobilization, rapid trauma assessment, load and go',
    category: 'scenarios',
    subcategory: 'Protocols',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['trauma priority', 'spinal immobilization', 'load and go']
  },
  {
    id: 'scenario_005',
    question: 'Patient with anaphylaxis, difficulty breathing, hives, hypotension. What medication do you give?',
    answer: 'Epinephrine 0.3mg IM (adult), oxygen, IV fluids, transport rapidly',
    category: 'scenarios',
    subcategory: 'Treatment',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['anaphylaxis', 'epinephrine dosage', 'allergic reaction']
  },
  {
    id: 'scenario_006',
    question: 'Seizure patient actively seizing for 10 minutes. What is your treatment protocol?',
    answer: 'Protect airway, oxygen, IV access, consider benzodiazepines (diazepam or lorazepam)',
    category: 'scenarios',
    subcategory: 'Treatment',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['status epilepticus', 'benzodiazepines', 'seizure management']
  },
  {
    id: 'scenario_007',
    question: 'Overdose patient unresponsive with pinpoint pupils and slow breathing. What drug do you administer?',
    answer: 'Naloxone (Narcan) 0.4-2mg IV/IM/IN, support ventilation, repeat as needed',
    category: 'scenarios',
    subcategory: 'Treatment',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['opioid overdose', 'naloxone administration', 'respiratory depression']
  },
  {
    id: 'scenario_008',
    question: 'Stroke patient with facial droop, arm weakness, slurred speech onset 1 hour ago. What is your priority?',
    answer: 'Rapid stroke assessment (FAST), protect airway, IV access, rapid transport to stroke center',
    category: 'scenarios',
    subcategory: 'Assessment',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['stroke assessment', 'FAST exam', 'time critical']
  },
  {
    id: 'scenario_009',
    question: 'Psychiatric patient threatening self-harm with knife. How do you approach?',
    answer: 'Scene safety first, wait for police, de-escalation techniques, never turn back on patient',
    category: 'scenarios',
    subcategory: 'Protocols',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['psychiatric emergency', 'scene safety', 'de-escalation']
  },
  {
    id: 'scenario_010',
    question: 'Hypothermic patient found outdoors, core temp 85°F, shivering stopped. What is your treatment?',
    answer: 'Handle gently, passive rewarming, warm IV fluids, avoid rough movement',
    category: 'scenarios',
    subcategory: 'Treatment',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['severe hypothermia', 'gentle handling', 'rewarming protocol']
  },
  {
    id: 'scenario_011',
    question: 'Burn patient with 20% body surface area burns, what is your fluid resuscitation calculation?',
    answer: 'Parkland formula: 4mL × weight(kg) × %burn ÷ 2 = first 8 hours fluid need',
    category: 'scenarios',
    subcategory: 'Treatment',
    difficulty: 'Advanced',
    certificationLevel: 'Paramedic',
    tags: ['burn resuscitation', 'Parkland formula', 'fluid calculation']
  },
  {
    id: 'scenario_012',
    question: 'Patient fell from ladder, complaining of back pain, unable to move legs. What is your spinal assessment?',
    answer: 'Check sensation, motor function, reflexes, maintain spinal immobilization',
    category: 'scenarios',
    subcategory: 'Assessment',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['spinal injury', 'neurological assessment', 'immobilization']
  },
  {
    id: 'scenario_013',
    question: 'Choking adult patient, conscious but cannot speak or cough. What is your immediate action?',
    answer: 'Abdominal thrusts (Heimlich maneuver), continue until object expelled or unconscious',
    category: 'scenarios',
    subcategory: 'Treatment',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['choking', 'Heimlich maneuver', 'airway obstruction']
  },
  {
    id: 'scenario_014',
    question: 'Cardiac arrest patient, no pulse, what is your compression-to-ventilation ratio?',
    answer: '30:2 for adults, 100-120 compressions per minute, 2-inch depth',
    category: 'scenarios',
    subcategory: 'Protocols',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['cardiac arrest', 'CPR ratio', 'compression depth']
  },
  {
    id: 'scenario_015',
    question: 'Patient with suspected heart attack complaining of nausea and shortness of breath. What medication protocol?',
    answer: 'Oxygen if hypoxic, aspirin 324mg chewed, nitroglycerin if prescribed, morphine for pain',
    category: 'scenarios',
    subcategory: 'Treatment',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['heart attack', 'aspirin protocol', 'MONA protocol']
  },
  {
    id: 'scenario_016',
    question: 'Pregnant woman 38 weeks, contractions 2 minutes apart, urge to push. What is your preparation?',
    answer: 'Prepare delivery kit, position supine with knees flexed, coach breathing, support perineum',
    category: 'scenarios',
    subcategory: 'Protocols',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['emergency delivery', 'imminent birth', 'perineum support']
  },
  {
    id: 'scenario_017',
    question: 'Elderly patient fell, hip deformity, unable to bear weight. What is your immobilization technique?',
    answer: 'Splint in position found, traction splint if femur fracture, careful log roll to backboard',
    category: 'scenarios',
    subcategory: 'Treatment',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['hip fracture', 'splinting', 'elderly trauma']
  },
  {
    id: 'scenario_018',
    question: 'House fire victim with facial burns, singed nose hairs, hoarse voice. What is your priority concern?',
    answer: 'Airway compromise, high-flow oxygen, prepare for intubation, rapid transport',
    category: 'scenarios',
    subcategory: 'Assessment',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['inhalation injury', 'airway burns', 'smoke inhalation']
  },
  {
    id: 'scenario_019',
    question: 'Patient with chest pain and blood pressure 220/120. What is your treatment approach?',
    answer: 'Monitor closely, IV access, nitroglycerin cautiously, avoid rapid BP reduction',
    category: 'scenarios',
    subcategory: 'Treatment',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['hypertensive emergency', 'careful BP reduction', 'stroke risk']
  },
  {
    id: 'scenario_020',
    question: 'Construction worker with penetrating abdominal injury, object still in place. What is your management?',
    answer: 'Do not remove object, stabilize in place, cover with moist sterile dressing, rapid transport',
    category: 'scenarios',
    subcategory: 'Treatment',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['penetrating trauma', 'impaled object', 'do not remove']
  },
  {
    id: 'scenario_021',
    question: 'Drowning victim pulled from water, unconscious, no pulse. What is your resuscitation sequence?',
    answer: 'Clear airway, rescue breathing, chest compressions, warm patient, continue CPR',
    category: 'scenarios',
    subcategory: 'Protocols',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['drowning resuscitation', 'hypothermia', 'prolonged CPR']
  },
  {
    id: 'scenario_022',
    question: 'Patient stung by bee, developing facial swelling and difficulty breathing. What medication and dose?',
    answer: 'Epinephrine 0.3mg IM adult (0.15mg pediatric), oxygen, IV fluids, diphenhydramine',
    category: 'scenarios',
    subcategory: 'Treatment',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['bee sting anaphylaxis', 'epinephrine dosing', 'pediatric dose']
  },
  {
    id: 'scenario_023',
    question: 'Altered mental status patient, blood glucose 350 mg/dL, fruity breath odor. What condition and treatment?',
    answer: 'Diabetic ketoacidosis (DKA), IV fluids, insulin protocol, monitor electrolytes',
    category: 'scenarios',
    subcategory: 'Assessment',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['DKA', 'ketoacidosis', 'fruity breath']
  },
  {
    id: 'scenario_024',
    question: 'Patient reporting sudden severe headache "worst of my life" with neck stiffness. What is your concern?',
    answer: 'Subarachnoid hemorrhage, protect airway, IV access, avoid narcotics, rapid transport',
    category: 'scenarios',
    subcategory: 'Assessment',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['subarachnoid hemorrhage', 'worst headache', 'thunderclap headache']
  },
  {
    id: 'scenario_025',
    question: 'Gunshot wound to chest, exit wound present, difficulty breathing. What is your treatment priority?',
    answer: 'Seal both entry and exit wounds, monitor for tension pneumothorax, IV access, rapid transport',
    category: 'scenarios',
    subcategory: 'Treatment',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['gunshot wound', 'through-and-through', 'seal wounds']
  },
  {
    id: 'scenario_026',
    question: 'Elderly patient on warfarin fell and hit head, GCS 13, what is your concern?',
    answer: 'Increased bleeding risk, monitor neurological status closely, rapid transport for CT',
    category: 'scenarios',
    subcategory: 'Assessment',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['anticoagulation', 'head injury', 'bleeding risk']
  },
  {
    id: 'scenario_027',
    question: 'Food poisoning outbreak, multiple patients with vomiting and diarrhea. What is your fluid replacement strategy?',
    answer: 'IV normal saline, replace losses, monitor electrolytes, anti-emetics if available',
    category: 'scenarios',
    subcategory: 'Treatment',
    difficulty: 'Intermediate',
    certificationLevel: 'AEMT',
    tags: ['dehydration', 'fluid replacement', 'electrolyte loss']
  },
  {
    id: 'scenario_028',
    question: 'Patient with kidney stones, 10/10 pain, unable to find comfortable position. What pain management?',
    answer: 'IV access, morphine or fentanyl for pain, anti-emetic, IV fluids',
    category: 'scenarios',
    subcategory: 'Treatment',
    difficulty: 'Advanced',
    certificationLevel: 'Paramedic',
    tags: ['renal colic', 'severe pain', 'narcotic analgesia']
  },
  {
    id: 'scenario_029',
    question: 'Lightning strike victim, found unconscious with burns. What are your assessment priorities?',
    answer: 'Check for cardiac arrhythmias, neurological deficit, burn assessment, spinal immobilization',
    category: 'scenarios',
    subcategory: 'Assessment',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['lightning strike', 'cardiac arrhythmia', 'electrical injury']
  },
  {
    id: 'scenario_030',
    question: 'Motorcycle accident, rider wearing helmet, unconscious with raccoon eyes. What injury do you suspect?',
    answer: 'Basilar skull fracture, handle gently, monitor for CSF leak, cervical immobilization',
    category: 'scenarios',
    subcategory: 'Assessment',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['basilar skull fracture', 'raccoon eyes', 'CSF leak']
  },
  {
    id: 'scenario_031',
    question: 'Patient with severe depression threatening suicide with medication overdose. What is your approach?',
    answer: 'Scene safety, gather medication bottles, contact poison control, supportive care',
    category: 'scenarios',
    subcategory: 'Protocols',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['suicide attempt', 'overdose', 'poison control']
  },
  {
    id: 'scenario_032',
    question: 'Dialysis patient missed last two sessions, difficulty breathing, swollen feet. What condition?',
    answer: 'Fluid overload/pulmonary edema, high-flow oxygen, consider CPAP, rapid transport',
    category: 'scenarios',
    subcategory: 'Assessment',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['dialysis patient', 'fluid overload', 'pulmonary edema']
  },
  {
    id: 'scenario_033',
    question: 'Patient with sickle cell disease complaining of severe bone pain. What is your pain management?',
    answer: 'High-flow oxygen, IV fluids, narcotic pain medication, keep patient warm',
    category: 'scenarios',
    subcategory: 'Treatment',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['sickle cell crisis', 'vaso-occlusive pain', 'oxygen therapy']
  },
  {
    id: 'scenario_034',
    question: 'Heat stroke patient, core temperature 105°F, altered mental status. What cooling methods?',
    answer: 'Aggressive cooling: ice packs to groin/axilla/neck, fan, remove clothing, cold IV fluids',
    category: 'scenarios',
    subcategory: 'Treatment',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['heat stroke', 'hyperthermia', 'aggressive cooling']
  },
  {
    id: 'scenario_035',
    question: 'Newborn not breathing after delivery, limp, cyanotic. What is your resuscitation protocol?',
    answer: 'Dry and warm, position airway, suction, bag-mask ventilation, chest compressions if no pulse',
    category: 'scenarios',
    subcategory: 'Protocols',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['neonatal resuscitation', 'newborn CPR', 'bag-mask ventilation']
  },
  {
    id: 'scenario_036',
    question: 'Patient with COPD exacerbation, using accessory muscles, tripod position. What oxygen delivery?',
    answer: 'Start with low-flow oxygen 2-4L nasal cannula, monitor for CO2 retention',
    category: 'scenarios',
    subcategory: 'Treatment',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['COPD exacerbation', 'low-flow oxygen', 'CO2 retention']
  },
  {
    id: 'scenario_037',
    question: 'Chemical plant worker exposed to unknown gas, difficulty breathing, burning eyes. What is your decontamination?',
    answer: 'Scene safety, hazmat team, remove from area, irrigation of eyes, supportive care',
    category: 'scenarios',
    subcategory: 'Protocols',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['chemical exposure', 'hazmat', 'decontamination']
  },
  {
    id: 'scenario_038',
    question: 'Patient with acute abdominal pain, guarding, rebound tenderness. What condition do you suspect?',
    answer: 'Peritonitis/appendicitis, IV access, pain management, NPO, rapid transport',
    category: 'scenarios',
    subcategory: 'Assessment',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['acute abdomen', 'peritonitis', 'rebound tenderness']
  },
  {
    id: 'scenario_039',
    question: 'Psychiatric patient experiencing hallucinations, agitated, refusing treatment. What is your approach?',
    answer: 'Calm environment, de-escalation, avoid restraints unless necessary, consider chemical restraint',
    category: 'scenarios',
    subcategory: 'Protocols',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['psychiatric emergency', 'hallucinations', 'agitation']
  },
  {
    id: 'scenario_040',
    question: 'Patient with chest trauma, absent breath sounds on right, tracheal deviation left. What condition?',
    answer: 'Tension pneumothorax, immediate needle decompression 2nd intercostal space',
    category: 'scenarios',
    subcategory: 'Treatment',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['tension pneumothorax', 'needle decompression', 'tracheal deviation']
  },
  {
    id: 'scenario_041',
    question: 'Allergic reaction patient improving after epinephrine, what is your concern during transport?',
    answer: 'Biphasic reaction - second phase can occur 4-8 hours later, continue monitoring',
    category: 'scenarios',
    subcategory: 'Assessment',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['biphasic reaction', 'anaphylaxis', 'delayed reaction']
  },
  {
    id: 'scenario_042',
    question: 'Patient with acute MI and cardiogenic shock, blood pressure 70/40. What vasopressor?',
    answer: 'Dopamine 5-20 mcg/kg/min or norepinephrine, consider IABP, rapid transport',
    category: 'scenarios',
    subcategory: 'Treatment',
    difficulty: 'Advanced',
    certificationLevel: 'Paramedic',
    tags: ['cardiogenic shock', 'vasopressors', 'dopamine']
  },
  {
    id: 'scenario_043',
    question: 'Elderly patient fell in bathroom, found after 6 hours, confused, weak. What do you assess for?',
    answer: 'Dehydration, rhabdomyolysis, hypothermia, fractures, medication effects',
    category: 'scenarios',
    subcategory: 'Assessment',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['elderly fall', 'prolonged down time', 'rhabdomyolysis']
  },
  {
    id: 'scenario_044',
    question: 'Patient with acute stroke, blood pressure 200/110, what is your BP management?',
    answer: 'Avoid aggressive BP reduction unless >220/120, may worsen stroke',
    category: 'scenarios',
    subcategory: 'Treatment',
    difficulty: 'Advanced',
    certificationLevel: 'Paramedic',
    tags: ['stroke hypertension', 'permissive hypertension', 'BP management']
  },
  {
    id: 'scenario_045',
    question: 'Patient with GI bleeding, black tarry stools, hypotensive. What IV fluid strategy?',
    answer: 'Large bore IVs, normal saline bolus, blood transfusion if available, rapid transport',
    category: 'scenarios',
    subcategory: 'Treatment',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['GI bleeding', 'melena', 'volume resuscitation']
  },
  {
    id: 'scenario_046',
    question: 'Patient with severe anxiety, hyperventilating, carpopedal spasm. What is the cause and treatment?',
    answer: 'Respiratory alkalosis from hyperventilation, coach slow breathing, paper bag if needed',
    category: 'scenarios',
    subcategory: 'Treatment',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['hyperventilation', 'carpopedal spasm', 'respiratory alkalosis']
  },
  {
    id: 'scenario_047',
    question: 'Factory worker with crush injury to leg, massive swelling, no pulse. What is your immediate concern?',
    answer: 'Compartment syndrome, fasciotomy needed, pain management, rapid transport',
    category: 'scenarios',
    subcategory: 'Assessment',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['crush injury', 'compartment syndrome', 'fasciotomy']
  },
  {
    id: 'scenario_048',
    question: 'Patient with esophageal varices bleeding, vomiting bright red blood. What position and treatment?',
    answer: 'Fowler position, large bore IVs, blood products, avoid nasogastric tube',
    category: 'scenarios',
    subcategory: 'Treatment',
    difficulty: 'Advanced',
    certificationLevel: 'Paramedic',
    tags: ['esophageal varices', 'upper GI bleed', 'Fowler position']
  },
  {
    id: 'scenario_049',
    question: 'Carbon monoxide poisoning patient, cherry red skin, altered mental status. What oxygen therapy?',
    answer: 'High-flow oxygen 100%, consider hyperbaric oxygen, carboxyhemoglobin levels',
    category: 'scenarios',
    subcategory: 'Treatment',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['carbon monoxide', 'cherry red skin', 'hyperbaric oxygen']
  },
  {
    id: 'scenario_050',
    question: 'Multiple casualty incident, 20 patients, limited resources. What triage system do you use?',
    answer: 'START triage: Simple Triage and Rapid Treatment, red-yellow-green-black categories',
    category: 'scenarios',
    subcategory: 'Protocols',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['mass casualty', 'START triage', 'resource allocation']
  },

  // Pediatric Cards (25 total)
  {
    id: 'pediatric_001',
    question: 'What is the normal heart rate for a newborn?',
    answer: '120-160 beats per minute',
    category: 'pediatric',
    subcategory: 'Assessment',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['newborn', 'heart rate', 'vital signs']
  },
  {
    id: 'pediatric_002',
    question: 'What is the normal respiratory rate for a 2-year-old?',
    answer: '20-30 breaths per minute',
    category: 'pediatric',
    subcategory: 'Assessment',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['toddler', 'respiratory rate', 'vital signs']
  },
  {
    id: 'pediatric_003',
    question: 'What is the pediatric dose of epinephrine for anaphylaxis?',
    answer: '0.15mg IM for children 15-30kg, 0.3mg for >30kg',
    category: 'pediatric',
    subcategory: 'Treatment',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['pediatric epinephrine', 'anaphylaxis', 'weight-based dosing']
  },
  {
    id: 'pediatric_004',
    question: 'How do you calculate pediatric fluid bolus?',
    answer: '20mL/kg normal saline or lactated Ringer\'s',
    category: 'pediatric',
    subcategory: 'Treatment',
    difficulty: 'Intermediate',
    certificationLevel: 'AEMT',
    tags: ['pediatric fluids', 'bolus calculation', 'weight-based']
  },
  {
    id: 'pediatric_005',
    question: 'What is the most common cause of cardiac arrest in children?',
    answer: 'Respiratory failure leading to hypoxia',
    category: 'pediatric',
    subcategory: 'Assessment',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['pediatric arrest', 'respiratory failure', 'hypoxia']
  },
  {
    id: 'pediatric_006',
    question: 'What is the compression-to-ventilation ratio for pediatric CPR with 2 rescuers?',
    answer: '15:2 (30:2 for single rescuer)',
    category: 'pediatric',
    subcategory: 'Treatment',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['pediatric CPR', '15:2 ratio', 'two rescuer']
  },
  {
    id: 'pediatric_007',
    question: 'What is the normal blood pressure for a 5-year-old?',
    answer: 'Systolic: 90-110 mmHg, Diastolic: 50-70 mmHg',
    category: 'pediatric',
    subcategory: 'Assessment',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['pediatric BP', '5-year-old', 'normal values']
  },
  {
    id: 'pediatric_008',
    question: 'How do you assess dehydration in children?',
    answer: 'Skin turgor, mucous membranes, capillary refill, fontanelle (infants)',
    category: 'pediatric',
    subcategory: 'Assessment',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['pediatric dehydration', 'skin turgor', 'fontanelle']
  },
  {
    id: 'pediatric_009',
    question: 'What is the pediatric dose of naloxone?',
    answer: '0.1mg/kg IV/IM/IN (minimum 0.4mg, maximum 2mg)',
    category: 'pediatric',
    subcategory: 'Treatment',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['pediatric naloxone', 'weight-based dosing', 'opioid reversal']
  },
  {
    id: 'pediatric_010',
    question: 'What is croup and how does it present?',
    answer: 'Viral airway inflammation with barking cough, stridor, fever',
    category: 'pediatric',
    subcategory: 'Assessment',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['croup', 'barking cough', 'stridor']
  },
  {
    id: 'pediatric_011',
    question: 'How do you treat severe croup?',
    answer: 'Cool mist, racemic epinephrine nebulizer, dexamethasone',
    category: 'pediatric',
    subcategory: 'Treatment',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['croup treatment', 'racemic epinephrine', 'dexamethasone']
  },
  {
    id: 'pediatric_012',
    question: 'What is epiglottitis and its classic presentation?',
    answer: 'Bacterial infection with drooling, muffled voice, tripod position',
    category: 'pediatric',
    subcategory: 'Assessment',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['epiglottitis', 'drooling', 'tripod position']
  },
  {
    id: 'pediatric_013',
    question: 'What is the treatment for pediatric seizures?',
    answer: 'Protect airway, oxygen, check glucose, diazepam or lorazepam if prolonged',
    category: 'pediatric',
    subcategory: 'Treatment',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['pediatric seizures', 'benzodiazepines', 'airway protection']
  },
  {
    id: 'pediatric_014',
    question: 'What is normal capillary refill time in children?',
    answer: 'Less than 2 seconds (3 seconds may be normal in infants)',
    category: 'pediatric',
    subcategory: 'Assessment',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['capillary refill', 'pediatric assessment', 'circulation']
  },
  {
    id: 'pediatric_015',
    question: 'How do you calculate maintenance IV fluids for children?',
    answer: '100mL/kg first 10kg, 50mL/kg next 10kg, 20mL/kg each additional kg',
    category: 'pediatric',
    subcategory: 'Treatment',
    difficulty: 'Advanced',
    certificationLevel: 'Paramedic',
    tags: ['maintenance fluids', 'holiday method', 'pediatric calculation']
  },
  {
    id: 'pediatric_016',
    question: 'What is bronchiolitis and who does it affect?',
    answer: 'Viral lower respiratory infection, typically infants under 2 years',
    category: 'pediatric',
    subcategory: 'Assessment',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['bronchiolitis', 'infants', 'RSV']
  },
  {
    id: 'pediatric_017',
    question: 'What is the treatment for pediatric bronchiolitis?',
    answer: 'Supportive care, suction, oxygen, bronchodilators (limited effectiveness)',
    category: 'pediatric',
    subcategory: 'Treatment',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['bronchiolitis treatment', 'supportive care', 'suction']
  },
  {
    id: 'pediatric_018',
    question: 'What is intussusception and its classic signs?',
    answer: 'Bowel telescoping with colicky pain, currant jelly stools, palpable mass',
    category: 'pediatric',
    subcategory: 'Assessment',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['intussusception', 'currant jelly stool', 'bowel obstruction']
  },
  {
    id: 'pediatric_019',
    question: 'What is the normal urine output for children?',
    answer: '1-2 mL/kg/hour (infants may be 2-3 mL/kg/hour)',
    category: 'pediatric',
    subcategory: 'Assessment',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['urine output', 'pediatric kidney function', 'fluid status']
  },
  {
    id: 'pediatric_020',
    question: 'How do you approach a pediatric patient to reduce anxiety?',
    answer: 'Calm voice, get on child\'s level, involve parents, explain procedures',
    category: 'pediatric',
    subcategory: 'Assessment',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['pediatric approach', 'anxiety reduction', 'family-centered care']
  },
  {
    id: 'pediatric_021',
    question: 'What is the dose of dextrose for pediatric hypoglycemia?',
    answer: '0.5-1g/kg (D25: 2-4mL/kg or D10: 5-10mL/kg)',
    category: 'pediatric',
    subcategory: 'Treatment',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['pediatric dextrose', 'hypoglycemia', 'D25 D10']
  },
  {
    id: 'pediatric_022',
    question: 'What is sudden infant death syndrome (SIDS)?',
    answer: 'Unexplained death of infant under 1 year, peak 2-4 months',
    category: 'pediatric',
    subcategory: 'Assessment',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['SIDS', 'infant death', 'unexplained']
  },
  {
    id: 'pediatric_023',
    question: 'What is the Glasgow Coma Scale modification for children?',
    answer: 'Modified verbal response: crying, words, sounds, none (age-appropriate)',
    category: 'pediatric',
    subcategory: 'Assessment',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['pediatric GCS', 'modified scale', 'neurological assessment']
  },
  {
    id: 'pediatric_024',
    question: 'How do you treat pediatric anaphylaxis in a 20kg child?',
    answer: 'Epinephrine 0.15mg IM (EpiPen Jr), oxygen, IV fluids, albuterol if needed',
    category: 'pediatric',
    subcategory: 'Treatment',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['pediatric anaphylaxis', 'EpiPen Jr', '20kg child']
  },
  {
    id: 'pediatric_025',
    question: 'What are signs of child abuse to watch for?',
    answer: 'Inconsistent story, unusual injury patterns, withdrawn behavior, fear of parents',
    category: 'pediatric',
    subcategory: 'Assessment',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['child abuse', 'suspicious injuries', 'mandatory reporting']
  },
  {
    id: 'pediatric_026',
    question: 'What is the normal weight for a term newborn?',
    answer: '2.5-4 kg (5.5-8.8 lbs)',
    category: 'pediatric',
    subcategory: 'Assessment',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['newborn weight', 'term infant', 'normal range']
  },
  {
    id: 'pediatric_027',
    question: 'How do you calculate pediatric medication doses?',
    answer: 'Weight-based dosing: mg/kg or mcg/kg body weight',
    category: 'pediatric',
    subcategory: 'Treatment',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['pediatric dosing', 'weight-based', 'mg/kg']
  },
  {
    id: 'pediatric_028',
    question: 'What is respiratory syncytial virus (RSV)?',
    answer: 'Common viral infection causing bronchiolitis in infants',
    category: 'pediatric',
    subcategory: 'Assessment',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['RSV', 'bronchiolitis', 'viral infection']
  },
  {
    id: 'pediatric_029',
    question: 'What is pyloric stenosis?',
    answer: 'Narrowing of pylorus causing projectile vomiting in infants',
    category: 'pediatric',
    subcategory: 'Assessment',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['pyloric stenosis', 'projectile vomiting', 'infants']
  },
  {
    id: 'pediatric_030',
    question: 'What is the pediatric triangle of assessment?',
    answer: 'Appearance, Work of breathing, Circulation to skin',
    category: 'pediatric',
    subcategory: 'Assessment',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['pediatric triangle', 'appearance breathing circulation', 'PAT']
  },
  {
    id: 'pediatric_031',
    question: 'How do you assess work of breathing in children?',
    answer: 'Retractions, nasal flaring, accessory muscle use, tripod position',
    category: 'pediatric',
    subcategory: 'Assessment',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['work of breathing', 'retractions', 'nasal flaring']
  },
  {
    id: 'pediatric_032',
    question: 'What is meningitis in children and its signs?',
    answer: 'Brain/spinal cord infection with fever, headache, neck stiffness, rash',
    category: 'pediatric',
    subcategory: 'Assessment',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['pediatric meningitis', 'fever headache', 'petechial rash']
  },
  {
    id: 'pediatric_033',
    question: 'What is Kawasaki disease?',
    answer: 'Inflammatory condition with high fever, rash, swollen lymph nodes',
    category: 'pediatric',
    subcategory: 'Assessment',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['Kawasaki disease', 'inflammatory', 'high fever rash']
  },
  {
    id: 'pediatric_034',
    question: 'How do you treat pediatric hypoglycemia without IV access?',
    answer: 'Glucagon 1mg IM (if >20kg) or 0.5mg IM (if <20kg)',
    category: 'pediatric',
    subcategory: 'Treatment',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['pediatric glucagon', 'hypoglycemia', 'no IV access']
  },
  {
    id: 'pediatric_035',
    question: 'What is the leading cause of injury death in children?',
    answer: 'Motor vehicle accidents',
    category: 'pediatric',
    subcategory: 'Assessment',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['pediatric trauma', 'motor vehicle accidents', 'leading cause']
  },
  {
    id: 'pediatric_036',
    question: 'What is child safety seat positioning by age?',
    answer: 'Rear-facing <2 years, forward-facing 2-4 years, booster seat 4-8 years',
    category: 'pediatric',
    subcategory: 'Assessment',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['car seat safety', 'age positioning', 'rear-facing']
  },
  {
    id: 'pediatric_037',
    question: 'What is shaken baby syndrome?',
    answer: 'Brain injury from violent shaking causing bleeding and swelling',
    category: 'pediatric',
    subcategory: 'Assessment',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['shaken baby syndrome', 'brain injury', 'violent shaking']
  },
  {
    id: 'pediatric_038',
    question: 'What are normal growth patterns for infants?',
    answer: 'Double birth weight by 6 months, triple by 12 months',
    category: 'pediatric',
    subcategory: 'Assessment',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['infant growth', 'weight milestones', 'normal development']
  },
  {
    id: 'pediatric_039',
    question: 'What is the treatment for pediatric foreign body airway obstruction?',
    answer: 'Back blows and chest thrusts for infants, abdominal thrusts for children',
    category: 'pediatric',
    subcategory: 'Treatment',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['foreign body obstruction', 'back blows', 'chest thrusts']
  },
  {
    id: 'pediatric_040',
    question: 'What is hand, foot, and mouth disease?',
    answer: 'Viral infection with fever, sores in mouth, rash on hands and feet',
    category: 'pediatric',
    subcategory: 'Assessment',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['hand foot mouth', 'viral infection', 'rash fever']
  },
  {
    id: 'pediatric_041',
    question: 'What is the normal fontanelle appearance in infants?',
    answer: 'Soft, flat, not bulging or sunken when upright',
    category: 'pediatric',
    subcategory: 'Assessment',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['fontanelle', 'soft spot', 'infant assessment']
  },
  {
    id: 'pediatric_042',
    question: 'What does a bulging fontanelle indicate?',
    answer: 'Increased intracranial pressure or infection',
    category: 'pediatric',
    subcategory: 'Assessment',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['bulging fontanelle', 'increased ICP', 'infection']
  },
  {
    id: 'pediatric_043',
    question: 'What does a sunken fontanelle indicate?',
    answer: 'Dehydration',
    category: 'pediatric',
    subcategory: 'Assessment',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['sunken fontanelle', 'dehydration', 'volume loss']
  },
  {
    id: 'pediatric_044',
    question: 'What is the treatment for pediatric burns?',
    answer: 'Cool water, remove from heat source, assess airway, fluid resuscitation',
    category: 'pediatric',
    subcategory: 'Treatment',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['pediatric burns', 'cool water', 'fluid resuscitation']
  },
  {
    id: 'pediatric_045',
    question: 'What percentage of burns requires burn center transfer in children?',
    answer: 'Partial thickness >10% or full thickness >5%',
    category: 'pediatric',
    subcategory: 'Assessment',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['pediatric burn center', 'transfer criteria', 'percentage thresholds']
  },
  {
    id: 'pediatric_046',
    question: 'What is whooping cough (pertussis)?',
    answer: 'Bacterial infection with characteristic "whooping" cough sound',
    category: 'pediatric',
    subcategory: 'Assessment',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['whooping cough', 'pertussis', 'bacterial infection']
  },
  {
    id: 'pediatric_047',
    question: 'What is the treatment for severe pediatric asthma?',
    answer: 'High-flow oxygen, albuterol, ipratropium, systemic steroids, epinephrine if severe',
    category: 'pediatric',
    subcategory: 'Treatment',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['pediatric asthma', 'bronchodilators', 'systemic steroids']
  },
  {
    id: 'pediatric_048',
    question: 'What is normal heart rate for a 1-year-old?',
    answer: '100-150 beats per minute',
    category: 'pediatric',
    subcategory: 'Assessment',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['1-year-old', 'heart rate', 'vital signs']
  },
  {
    id: 'pediatric_049',
    question: 'What is failure to thrive?',
    answer: 'Poor physical growth and development in children',
    category: 'pediatric',
    subcategory: 'Assessment',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['failure to thrive', 'poor growth', 'development delay']
  },
  {
    id: 'pediatric_050',
    question: 'What are key differences in pediatric anatomy affecting EMS care?',
    answer: 'Larger head, smaller airway, faster metabolism, greater surface area to volume ratio',
    category: 'pediatric',
    subcategory: 'Assessment',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['pediatric anatomy', 'physiological differences', 'EMS considerations']
  },

  // Obstetric Cards (25 total)
  {
    id: 'obstetric_001',
    question: 'What are the stages of labor?',
    answer: 'Stage 1: Cervical dilation, Stage 2: Delivery, Stage 3: Placenta delivery',
    category: 'obstetric',
    subcategory: 'Delivery',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['stages of labor', 'cervical dilation', 'placenta delivery']
  },
  {
    id: 'obstetric_002',
    question: 'What is considered full cervical dilation?',
    answer: '10 centimeters',
    category: 'obstetric',
    subcategory: 'Delivery',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['cervical dilation', '10 centimeters', 'full dilation']
  },
  {
    id: 'obstetric_003',
    question: 'What is the normal presentation for delivery?',
    answer: 'Vertex (head first) with occiput anterior',
    category: 'obstetric',
    subcategory: 'Delivery',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['vertex presentation', 'occiput anterior', 'normal delivery']
  },
  {
    id: 'obstetric_004',
    question: 'What is a breech presentation?',
    answer: 'Buttocks or feet presenting first instead of head',
    category: 'obstetric',
    subcategory: 'Delivery',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['breech presentation', 'buttocks first', 'abnormal presentation']
  },
  {
    id: 'obstetric_005',
    question: 'How do you manage a breech delivery?',
    answer: 'Support body, never pull, allow natural delivery, clear airway when head delivers',
    category: 'obstetric',
    subcategory: 'Delivery',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['breech delivery', 'support body', 'never pull']
  },
  {
    id: 'obstetric_006',
    question: 'What is a prolapsed cord?',
    answer: 'Umbilical cord presents before the baby',
    category: 'obstetric',
    subcategory: 'Pregnancy',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['prolapsed cord', 'cord first', 'emergency']
  },
  {
    id: 'obstetric_007',
    question: 'How do you treat a prolapsed cord?',
    answer: 'Knee-chest position, lift presenting part off cord, rapid transport, do not push cord back',
    category: 'obstetric',
    subcategory: 'Pregnancy',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['prolapsed cord treatment', 'knee-chest position', 'rapid transport']
  },
  {
    id: 'obstetric_008',
    question: 'What is placenta previa?',
    answer: 'Placenta covers cervical opening, causing bleeding',
    category: 'obstetric',
    subcategory: 'Pregnancy',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['placenta previa', 'cervical covering', 'bleeding']
  },
  {
    id: 'obstetric_009',
    question: 'What is abruptio placentae?',
    answer: 'Premature separation of placenta from uterine wall',
    category: 'obstetric',
    subcategory: 'Pregnancy',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['abruptio placentae', 'placental separation', 'bleeding']
  },
  {
    id: 'obstetric_010',
    question: 'What is eclampsia?',
    answer: 'Seizures in pregnant woman with preeclampsia',
    category: 'obstetric',
    subcategory: 'Pregnancy',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['eclampsia', 'seizures', 'preeclampsia']
  },
  {
    id: 'obstetric_011',
    question: 'What is preeclampsia?',
    answer: 'High blood pressure and protein in urine during pregnancy',
    category: 'obstetric',
    subcategory: 'Pregnancy',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['preeclampsia', 'hypertension', 'proteinuria']
  },
  {
    id: 'obstetric_012',
    question: 'How do you treat eclamptic seizures?',
    answer: 'Protect airway, left lateral position, magnesium sulfate, rapid transport',
    category: 'obstetric',
    subcategory: 'Pregnancy',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['eclamptic seizures', 'magnesium sulfate', 'left lateral']
  },
  {
    id: 'obstetric_013',
    question: 'What is the APGAR score and when is it assessed?',
    answer: 'Newborn assessment at 1 and 5 minutes: Appearance, Pulse, Grimace, Activity, Respirations',
    category: 'obstetric',
    subcategory: 'Delivery',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['APGAR score', 'newborn assessment', '1 and 5 minutes']
  },
  {
    id: 'obstetric_014',
    question: 'When do you cut the umbilical cord?',
    answer: 'After cord stops pulsating and baby is breathing well',
    category: 'obstetric',
    subcategory: 'Delivery',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['umbilical cord', 'cord clamping', 'stops pulsating']
  },
  {
    id: 'obstetric_015',
    question: 'How do you clamp and cut the umbilical cord?',
    answer: 'Clamp 6 inches from baby, second clamp 4 inches away, cut between clamps',
    category: 'obstetric',
    subcategory: 'Delivery',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['cord clamping', '6 inches', 'cut between clamps']
  },
  {
    id: 'obstetric_016',
    question: 'What is postpartum hemorrhage?',
    answer: 'Blood loss >500mL after vaginal delivery or >1000mL after C-section',
    category: 'obstetric',
    subcategory: 'Delivery',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['postpartum hemorrhage', 'blood loss', '500mL threshold']
  },
  {
    id: 'obstetric_017',
    question: 'How do you treat postpartum hemorrhage?',
    answer: 'Uterine massage, IV fluids, position supine, rapid transport',
    category: 'obstetric',
    subcategory: 'Delivery',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['postpartum hemorrhage', 'uterine massage', 'IV fluids']
  },
  {
    id: 'obstetric_018',
    question: 'What position should you transport a pregnant patient?',
    answer: 'Left lateral or supine with left hip elevated',
    category: 'obstetric',
    subcategory: 'Pregnancy',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['pregnant transport', 'left lateral', 'hip elevation']
  },
  {
    id: 'obstetric_019',
    question: 'What is supine hypotensive syndrome?',
    answer: 'Low blood pressure when pregnant woman lies flat due to vena cava compression',
    category: 'obstetric',
    subcategory: 'Pregnancy',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['supine hypotensive syndrome', 'vena cava compression', 'positioning']
  },
  {
    id: 'obstetric_020',
    question: 'What medications can pregnant women safely receive?',
    answer: 'Oxygen, normal saline, epinephrine for anaphylaxis, naloxone for overdose',
    category: 'obstetric',
    subcategory: 'Treatment',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['pregnancy medications', 'safe drugs', 'limited options']
  },
  {
    id: 'obstetric_021',
    question: 'What is an ectopic pregnancy?',
    answer: 'Pregnancy outside the uterus, usually in fallopian tube',
    category: 'obstetric',
    subcategory: 'Pregnancy',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['ectopic pregnancy', 'fallopian tube', 'outside uterus']
  },
  {
    id: 'obstetric_022',
    question: 'What are signs of ectopic pregnancy?',
    answer: 'Abdominal pain, missed period, vaginal bleeding, shoulder pain',
    category: 'obstetric',
    subcategory: 'Pregnancy',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['ectopic signs', 'shoulder pain', 'abdominal pain']
  },
  {
    id: 'obstetric_023',
    question: 'What is hyperemesis gravidarum?',
    answer: 'Severe nausea and vomiting during pregnancy causing dehydration',
    category: 'obstetric',
    subcategory: 'Pregnancy',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['hyperemesis gravidarum', 'severe vomiting', 'dehydration']
  },
  {
    id: 'obstetric_024',
    question: 'What is a miscarriage (abortion)?',
    answer: 'Loss of pregnancy before 20 weeks gestation',
    category: 'obstetric',
    subcategory: 'Pregnancy',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['miscarriage', 'abortion', 'before 20 weeks']
  },
  {
    id: 'obstetric_025',
    question: 'How do you manage a patient with threatened abortion?',
    answer: 'IV access, emotional support, save all tissue, rapid transport',
    category: 'obstetric',
    subcategory: 'Pregnancy',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['threatened abortion', 'save tissue', 'emotional support']
  },
  {
    id: 'obstetric_026',
    question: 'What is gestational diabetes?',
    answer: 'High blood sugar that develops during pregnancy',
    category: 'obstetric',
    subcategory: 'Pregnancy',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['gestational diabetes', 'high blood sugar', 'pregnancy complication']
  },
  {
    id: 'obstetric_027',
    question: 'What is placental abruption vs placenta previa?',
    answer: 'Abruption: Placenta separates early; Previa: Placenta covers cervix',
    category: 'obstetric',
    subcategory: 'Pregnancy',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['abruption vs previa', 'placental complications', 'bleeding causes']
  },
  {
    id: 'obstetric_028',
    question: 'What is amniotic fluid embolism?',
    answer: 'Life-threatening condition when amniotic fluid enters maternal bloodstream',
    category: 'obstetric',
    subcategory: 'Delivery',
    difficulty: 'Advanced',
    certificationLevel: 'Paramedic',
    tags: ['amniotic embolism', 'life-threatening', 'maternal emergency']
  },
  {
    id: 'obstetric_029',
    question: 'What is shoulder dystocia?',
    answer: 'Baby\'s shoulder gets stuck behind mother\'s pubic bone during delivery',
    category: 'obstetric',
    subcategory: 'Delivery',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['shoulder dystocia', 'stuck shoulder', 'delivery complication']
  },
  {
    id: 'obstetric_030',
    question: 'How do you manage shoulder dystocia?',
    answer: 'McRoberts maneuver (flex hips to chest), suprapubic pressure, episiotomy',
    category: 'obstetric',
    subcategory: 'Delivery',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['McRoberts maneuver', 'suprapubic pressure', 'shoulder dystocia']
  },
  {
    id: 'obstetric_031',
    question: 'What is normal fetal heart rate?',
    answer: '110-160 beats per minute',
    category: 'obstetric',
    subcategory: 'Assessment',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['fetal heart rate', 'normal range', 'fetal monitoring']
  },
  {
    id: 'obstetric_032',
    question: 'What indicates fetal distress?',
    answer: 'Fetal heart rate <110 or >160 bpm, meconium-stained fluid',
    category: 'obstetric',
    subcategory: 'Assessment',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['fetal distress', 'abnormal heart rate', 'meconium']
  },
  {
    id: 'obstetric_033',
    question: 'What is meconium and its significance?',
    answer: 'First fetal stool; if present in amniotic fluid, indicates possible fetal distress',
    category: 'obstetric',
    subcategory: 'Assessment',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['meconium', 'fetal stool', 'amniotic fluid']
  },
  {
    id: 'obstetric_034',
    question: 'How do you manage meconium during delivery?',
    answer: 'Suction mouth and nose immediately when head delivers, before shoulders',
    category: 'obstetric',
    subcategory: 'Delivery',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['meconium management', 'immediate suction', 'before shoulders']
  },
  {
    id: 'obstetric_035',
    question: 'What is precipitous delivery?',
    answer: 'Very rapid labor and delivery, usually less than 3 hours',
    category: 'obstetric',
    subcategory: 'Delivery',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['precipitous delivery', 'rapid labor', 'less than 3 hours']
  },
  {
    id: 'obstetric_036',
    question: 'What is nuchal cord?',
    answer: 'Umbilical cord wrapped around baby\'s neck',
    category: 'obstetric',
    subcategory: 'Delivery',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['nuchal cord', 'cord around neck', 'delivery complication']
  },
  {
    id: 'obstetric_037',
    question: 'How do you manage nuchal cord?',
    answer: 'Try to slip cord over head; if tight, clamp and cut cord before delivering shoulders',
    category: 'obstetric',
    subcategory: 'Delivery',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['nuchal cord management', 'slip over head', 'clamp and cut']
  },
  {
    id: 'obstetric_038',
    question: 'What is the third stage of labor?',
    answer: 'Delivery of the placenta, usually within 30 minutes',
    category: 'obstetric',
    subcategory: 'Delivery',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['third stage labor', 'placenta delivery', '30 minutes']
  },
  {
    id: 'obstetric_039',
    question: 'What should you never do with the placenta?',
    answer: 'Never pull on the cord to deliver placenta',
    category: 'obstetric',
    subcategory: 'Delivery',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['placenta delivery', 'never pull cord', 'natural delivery']
  },
  {
    id: 'obstetric_040',
    question: 'What is retained placenta?',
    answer: 'Placenta not delivered within 30 minutes after baby',
    category: 'obstetric',
    subcategory: 'Delivery',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['retained placenta', '30 minutes', 'delivery complication']
  },
  {
    id: 'obstetric_041',
    question: 'What is uterine rupture?',
    answer: 'Tear in uterine wall, life-threatening emergency',
    category: 'obstetric',
    subcategory: 'Pregnancy',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['uterine rupture', 'uterine tear', 'life-threatening']
  },
  {
    id: 'obstetric_042',
    question: 'What is inverted uterus?',
    answer: 'Uterus turns inside out after delivery, severe emergency',
    category: 'obstetric',
    subcategory: 'Delivery',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['inverted uterus', 'inside out', 'severe emergency']
  },
  {
    id: 'obstetric_043',
    question: 'What medications are contraindicated in pregnancy?',
    answer: 'ACE inhibitors, warfarin, most seizure medications, certain antibiotics',
    category: 'obstetric',
    subcategory: 'Treatment',
    difficulty: 'Advanced',
    certificationLevel: 'Paramedic',
    tags: ['pregnancy contraindications', 'ACE inhibitors', 'warfarin']
  },
  {
    id: 'obstetric_044',
    question: 'What is normal weight gain during pregnancy?',
    answer: '25-35 pounds for normal BMI women',
    category: 'obstetric',
    subcategory: 'Pregnancy',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['pregnancy weight gain', '25-35 pounds', 'normal BMI']
  },
  {
    id: 'obstetric_045',
    question: 'What is multiple gestation?',
    answer: 'Pregnancy with twins, triplets, or more babies',
    category: 'obstetric',
    subcategory: 'Pregnancy',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['multiple gestation', 'twins triplets', 'multiple babies']
  },
  {
    id: 'obstetric_046',
    question: 'What special considerations exist for multiple births?',
    answer: 'Higher risk of complications, premature birth, cord prolapse between babies',
    category: 'obstetric',
    subcategory: 'Delivery',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['multiple birth risks', 'premature birth', 'cord prolapse']
  },
  {
    id: 'obstetric_047',
    question: 'What is premature rupture of membranes (PROM)?',
    answer: 'Water breaks before labor begins',
    category: 'obstetric',
    subcategory: 'Pregnancy',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['PROM', 'water breaks early', 'membrane rupture']
  },
  {
    id: 'obstetric_048',
    question: 'What is oligohydramnios?',
    answer: 'Too little amniotic fluid',
    category: 'obstetric',
    subcategory: 'Pregnancy',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['oligohydramnios', 'low amniotic fluid', 'pregnancy complication']
  },
  {
    id: 'obstetric_049',
    question: 'What is polyhydramnios?',
    answer: 'Too much amniotic fluid',
    category: 'obstetric',
    subcategory: 'Pregnancy',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['polyhydramnios', 'excess amniotic fluid', 'pregnancy complication']
  },
  {
    id: 'obstetric_050',
    question: 'What are the key obstetric history questions?',
    answer: 'Gravida (pregnancies), Para (births), LMP (last menstrual period), EDC (due date)',
    category: 'obstetric',
    subcategory: 'Assessment',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['obstetric history', 'gravida para', 'LMP EDC']
  },
  {
    id: 'emt_007',
    question: 'What is the term for low blood sugar?',
    answer: 'Hypoglycemia',
    category: 'emt_scenarios',
    subcategory: 'Assessment',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['low blood sugar', 'hypoglycemia', 'glucose']
  },
  {
    id: 'emt_008',
    question: 'What is the term for difficulty swallowing?',
    answer: 'Dysphagia',
    category: 'emt_scenarios',
    subcategory: 'Assessment',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['difficulty swallowing', 'dysphagia', 'swallowing disorder']
  },
  {
    id: 'emt_009',
    question: 'What is the most common cause of cardiac arrest?',
    answer: 'Ventricular fibrillation',
    category: 'emt_scenarios',
    subcategory: 'Protocols',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['cardiac arrest', 'ventricular fibrillation', 'VF']
  },
  {
    id: 'emt_010',
    question: 'What is the first step in CPR?',
    answer: 'Check for responsiveness and call for help',
    category: 'emt_scenarios',
    subcategory: 'Protocols',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['CPR', 'responsiveness', 'call for help']
  },
  {
    id: 'emt_011',
    question: 'What is the difference between a stroke and TIA?',
    answer: 'TIA symptoms resolve within 24 hours',
    category: 'emt_scenarios',
    subcategory: 'Assessment',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['stroke vs TIA', 'transient', '24 hours']
  },
  {
    id: 'emt_012',
    question: 'What equipment is needed for basic airway management?',
    answer: 'OPA, NPA, BVM, oxygen, suction',
    category: 'emt_scenarios',
    subcategory: 'Equipment',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['airway equipment', 'OPA', 'BVM']
  },
  {
    id: 'emt_013',
    question: 'What is the proper compression depth for adult CPR?',
    answer: 'At least 2 inches (5 cm)',
    category: 'emt_scenarios',
    subcategory: 'Protocols',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['CPR compression depth', '2 inches', 'adult']
  },
  {
    id: 'emt_014',
    question: 'What is the proper compression rate for CPR?',
    answer: '100-120 compressions per minute',
    category: 'emt_scenarios',
    subcategory: 'Protocols',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['CPR rate', '100-120', 'compressions per minute']
  },
  {
    id: 'emt_015',
    question: 'What is the compression to ventilation ratio for adult CPR?',
    answer: '30:2 (30 compressions to 2 ventilations)',
    category: 'emt_scenarios',
    subcategory: 'Protocols',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['CPR ratio', '30:2', 'compressions to ventilations']
  },
  {
    id: 'emt_016',
    question: 'When should you use an AED?',
    answer: 'On unresponsive patients with no pulse',
    category: 'emt_scenarios',
    subcategory: 'Equipment',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['AED use', 'unresponsive', 'no pulse']
  },
  {
    id: 'emt_017',
    question: 'What are the signs of adequate breathing?',
    answer: 'Normal rate (12-20), adequate depth, clear speech, normal skin color',
    category: 'emt_scenarios',
    subcategory: 'Assessment',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['adequate breathing', 'normal rate', 'clear speech']
  },
  {
    id: 'emt_018',
    question: 'What are the signs of inadequate breathing?',
    answer: 'Abnormal rate, shallow depth, cyanosis, accessory muscle use',
    category: 'emt_scenarios',
    subcategory: 'Assessment',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['inadequate breathing', 'cyanosis', 'accessory muscles']
  },
  {
    id: 'emt_019',
    question: 'What is the proper flow rate for a non-rebreather mask?',
    answer: '12-15 LPM to keep reservoir bag inflated',
    category: 'emt_scenarios',
    subcategory: 'Equipment',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['non-rebreather', 'flow rate', '12-15 LPM']
  },
  {
    id: 'emt_020',
    question: 'What is the proper flow rate for a nasal cannula?',
    answer: '1-6 LPM',
    category: 'emt_scenarios',
    subcategory: 'Equipment',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['nasal cannula', 'flow rate', '1-6 LPM']
  },
  {
    id: 'emt_021',
    question: 'What is SAMPLE history?',
    answer: 'Signs/Symptoms, Allergies, Medications, Past medical history, Last oral intake, Events',
    category: 'emt_scenarios',
    subcategory: 'Assessment',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['SAMPLE history', 'assessment tool', 'patient history']
  },
  {
    id: 'emt_022',
    question: 'What is OPQRST for pain assessment?',
    answer: 'Onset, Provocation, Quality, Radiation, Severity, Time',
    category: 'emt_scenarios',
    subcategory: 'Assessment',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['OPQRST', 'pain assessment', 'chest pain']
  },
  {
    id: 'emt_023',
    question: 'What is the normal respiratory rate for adults?',
    answer: '12-20 breaths per minute',
    category: 'emt_scenarios',
    subcategory: 'Assessment',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['respiratory rate', 'adults', '12-20']
  },
  {
    id: 'emt_024',
    question: 'What is the normal pulse rate for adults?',
    answer: '60-100 beats per minute',
    category: 'emt_scenarios',
    subcategory: 'Assessment',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['pulse rate', 'adults', '60-100']
  },
  {
    id: 'emt_025',
    question: 'What is the normal blood pressure for adults?',
    answer: 'Systolic 90-140, Diastolic 60-90 mmHg',
    category: 'emt_scenarios',
    subcategory: 'Assessment',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['blood pressure', 'normal values', 'systolic diastolic']
  },
  {
    id: 'emt_026',
    question: 'What is the Glasgow Coma Scale maximum score?',
    answer: '15 (Eyes 4 + Verbal 5 + Motor 6)',
    category: 'emt_scenarios',
    subcategory: 'Assessment',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['Glasgow Coma Scale', 'GCS', 'maximum score 15']
  },
  {
    id: 'emt_027',
    question: 'What does SAMPLE stand for in patient history?',
    answer: 'Signs/Symptoms, Allergies, Medications, Past history, Last meal, Events',
    category: 'emt_scenarios',
    subcategory: 'Assessment',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['SAMPLE history', 'patient assessment', 'acronym']
  },
  {
    id: 'emt_028',
    question: 'What does OPQRST stand for in pain assessment?',
    answer: 'Onset, Provocation, Quality, Region/Radiation, Severity, Time',
    category: 'emt_scenarios',
    subcategory: 'Assessment',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['OPQRST', 'pain assessment', 'acronym']
  },
  {
    id: 'emt_029',
    question: 'What is the rule of nines for burn assessment?',
    answer: 'Head 9%, each arm 9%, chest 18%, back 18%, each leg 18%, genitals 1%',
    category: 'emt_scenarios',
    subcategory: 'Assessment',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['rule of nines', 'burn assessment', 'body surface area']
  },
  {
    id: 'emt_030',
    question: 'What is the most common cause of airway obstruction?',
    answer: 'The tongue',
    category: 'emt_scenarios',
    subcategory: 'Assessment',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['airway obstruction', 'tongue', 'common cause']
  },
  {
    id: 'emt_031',
    question: 'What is the minimum oxygen flow rate for a non-rebreather mask?',
    answer: '10-15 liters per minute',
    category: 'emt_scenarios',
    subcategory: 'Treatment',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['non-rebreather mask', 'oxygen flow', '10-15 LPM']
  },
  {
    id: 'emt_032',
    question: 'What is the correct ratio for chest compressions to ventilations in adult CPR?',
    answer: '30:2',
    category: 'emt_scenarios',
    subcategory: 'Protocols',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['CPR ratio', '30:2', 'compressions ventilations']
  },
  {
    id: 'emt_033',
    question: 'What is the first medication given for anaphylaxis?',
    answer: 'Epinephrine',
    category: 'emt_scenarios',
    subcategory: 'Treatment',
    difficulty: 'Intermediate',
    certificationLevel: 'EMT',
    tags: ['anaphylaxis', 'epinephrine', 'first medication']
  },
  {
    id: 'emt_034',
    question: 'What position should an unconscious patient be placed in?',
    answer: 'Recovery position (lateral recumbent)',
    category: 'emt_scenarios',
    subcategory: 'Treatment',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['recovery position', 'unconscious patient', 'lateral recumbent']
  },
  {
    id: 'emt_035',
    question: 'What is the normal respiratory rate for adults?',
    answer: '12-20 breaths per minute',
    category: 'emt_scenarios',
    subcategory: 'Assessment',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['respiratory rate', 'normal adult', '12-20 BPM']
  },
  {
    id: 'emt_036',
    question: 'What does BSI stand for in EMS?',
    answer: 'Body Substance Isolation',
    category: 'emt_scenarios',
    subcategory: 'Protocols',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['BSI', 'body substance isolation', 'infection control']
  },
  {
    id: 'emt_037',
    question: 'What is the first step in any emergency scene?',
    answer: 'Scene safety assessment',
    category: 'emt_scenarios',
    subcategory: 'Protocols',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['scene safety', 'first step', 'assessment']
  },
  {
    id: 'emt_038',
    question: 'What is the difference between a sign and a symptom?',
    answer: 'Sign: what you observe, Symptom: what patient reports',
    category: 'emt_scenarios',
    subcategory: 'Assessment',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['signs vs symptoms', 'objective subjective', 'assessment']
  },
  {
    id: 'emt_039',
    question: 'What is the proper hand placement for chest compressions?',
    answer: 'Center of chest, lower half of breastbone',
    category: 'emt_scenarios',
    subcategory: 'Protocols',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['chest compressions', 'hand placement', 'breastbone']
  },
  {
    id: 'emt_040',
    question: 'What is shock in medical terms?',
    answer: 'Inadequate perfusion/oxygen delivery to tissues',
    category: 'emt_scenarios',
    subcategory: 'Assessment',
    difficulty: 'Intermediate',
    certificationLevel: 'EMT',
    tags: ['shock definition', 'inadequate perfusion', 'oxygen delivery']
  },
  {
    id: 'emt_041',
    question: 'What is the normal capillary refill time?',
    answer: 'Less than 2 seconds',
    category: 'emt_scenarios',
    subcategory: 'Assessment',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['capillary refill', 'normal time', 'less than 2 seconds']
  },
  {
    id: 'emt_042',
    question: 'What does AED stand for?',
    answer: 'Automated External Defibrillator',
    category: 'emt_scenarios',
    subcategory: 'Equipment',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['AED', 'automated external defibrillator', 'equipment']
  },
  {
    id: 'emt_043',
    question: 'What is the treatment for severe bleeding?',
    answer: 'Direct pressure, elevation, pressure points, tourniquet if needed',
    category: 'emt_scenarios',
    subcategory: 'Treatment',
    difficulty: 'Intermediate',
    certificationLevel: 'EMT',
    tags: ['bleeding control', 'direct pressure', 'tourniquet']
  },
  {
    id: 'emt_044',
    question: 'What is the normal body temperature?',
    answer: '98.6°F (37°C)',
    category: 'emt_scenarios',
    subcategory: 'Assessment',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['normal temperature', '98.6 degrees', 'vital signs']
  },
  {
    id: 'emt_045',
    question: 'What are the ABCs of emergency care?',
    answer: 'Airway, Breathing, Circulation',
    category: 'emt_scenarios',
    subcategory: 'Protocols',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['ABCs', 'airway breathing circulation', 'emergency care']
  },
  {
    id: 'emt_046',
    question: 'What is the medical term for difficulty breathing?',
    answer: 'Dyspnea',
    category: 'emt_scenarios',
    subcategory: 'Assessment',
    difficulty: 'Intermediate',
    certificationLevel: 'EMT',
    tags: ['dyspnea', 'difficulty breathing', 'medical terminology']
  },
  {
    id: 'emt_047',
    question: 'What is the correct flow rate for nasal cannula?',
    answer: '1-6 liters per minute',
    category: 'emt_scenarios',
    subcategory: 'Treatment',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['nasal cannula', 'oxygen flow', '1-6 LPM']
  },
  {
    id: 'emt_048',
    question: 'What is the heimlich maneuver used for?',
    answer: 'Choking/foreign body airway obstruction',
    category: 'emt_scenarios',
    subcategory: 'Treatment',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['heimlich maneuver', 'choking', 'airway obstruction']
  },
  {
    id: 'emt_049',
    question: 'What does DNR stand for?',
    answer: 'Do Not Resuscitate',
    category: 'emt_scenarios',
    subcategory: 'Protocols',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['DNR', 'do not resuscitate', 'advance directive']
  },
  {
    id: 'emt_050',
    question: 'What is the primary assessment sequence?',
    answer: 'General impression, LOC, Airway, Breathing, Circulation, Transport decision',
    category: 'emt_scenarios',
    subcategory: 'Assessment',
    difficulty: 'Intermediate',
    certificationLevel: 'EMT',
    tags: ['primary assessment', 'ABCDE', 'sequence']
  },

  // OB/GYN & Pediatrics Cards
  {
    id: 'ob_001',
    question: 'What are the stages of labor?',
    answer: 'First: onset to full cervical dilation. Second: full dilation to delivery. Third: delivery to placenta expulsion',
    category: 'obstetrics',
    subcategory: 'Delivery',
    difficulty: 'Intermediate',
    certificationLevel: 'EMT',
    tags: ['stages of labor', 'cervical dilation', 'placenta']
  },
  {
    id: 'ob_002',
    question: 'What is crowning?',
    answer: 'When the baby\'s head becomes visible at the vaginal opening',
    category: 'obstetrics',
    subcategory: 'Delivery',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['crowning', 'baby head', 'vaginal opening']
  },
  {
    id: 'ob_003',
    question: 'What should you do if the umbilical cord is around the baby\'s neck?',
    answer: 'Try to slip it over the head; if tight, clamp and cut',
    category: 'obstetrics',
    subcategory: 'Delivery',
    difficulty: 'Intermediate',
    certificationLevel: 'EMT',
    tags: ['nuchal cord', 'umbilical cord', 'clamp and cut']
  },
  {
    id: 'ob_004',
    question: 'What is preeclampsia?',
    answer: 'High blood pressure during pregnancy with protein in urine',
    category: 'obstetrics',
    subcategory: 'Pregnancy',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['preeclampsia', 'high blood pressure', 'pregnancy']
  },
  {
    id: 'ob_005',
    question: 'What is eclampsia?',
    answer: 'Preeclampsia with seizures',
    category: 'obstetrics',
    subcategory: 'Pregnancy',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['eclampsia', 'preeclampsia', 'seizures']
  },
  {
    id: 'ob_006',
    question: 'What is placenta previa?',
    answer: 'Placenta covers the cervical opening, causing painless bleeding',
    category: 'obstetrics',
    subcategory: 'Pregnancy',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['placenta previa', 'cervical opening', 'painless bleeding']
  },
  {
    id: 'ob_007',
    question: 'What is abruptio placentae?',
    answer: 'Premature separation of placenta, causing painful bleeding',
    category: 'obstetrics',
    subcategory: 'Pregnancy',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['abruptio placentae', 'placental separation', 'painful bleeding']
  },
  {
    id: 'ob_008',
    question: 'What is the normal heart rate for a newborn?',
    answer: '120-160 beats per minute',
    category: 'obstetrics',
    subcategory: 'Pediatric Assessment',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['newborn heart rate', '120-160', 'pediatric']
  },
  {
    id: 'ob_009',
    question: 'What is the normal respiratory rate for a newborn?',
    answer: '30-60 breaths per minute',
    category: 'obstetrics',
    subcategory: 'Pediatric Assessment',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['newborn respiratory rate', '30-60', 'breathing']
  },
  {
    id: 'ob_010',
    question: 'What should you do immediately after delivering a baby?',
    answer: 'Clear airway, stimulate breathing, dry and warm, assess APGAR',
    category: 'obstetrics',
    subcategory: 'Delivery',
    difficulty: 'Intermediate',
    certificationLevel: 'EMT',
    tags: ['newborn care', 'clear airway', 'APGAR']
  },
  {
    id: 'ob_011',
    question: 'What does APGAR stand for?',
    answer: 'Appearance, Pulse, Grimace, Activity, Respirations',
    category: 'obstetrics',
    subcategory: 'Pediatric Assessment',
    difficulty: 'Intermediate',
    certificationLevel: 'EMT',
    tags: ['APGAR score', 'newborn assessment', 'vital signs']
  },
  {
    id: 'ob_012',
    question: 'When should you cut the umbilical cord?',
    answer: 'After it stops pulsating and baby is breathing well',
    category: 'obstetrics',
    subcategory: 'Delivery',
    difficulty: 'Intermediate',
    certificationLevel: 'EMT',
    tags: ['umbilical cord cutting', 'stops pulsating', 'breathing well']
  },
  {
    id: 'ob_013',
    question: 'What is supine hypotensive syndrome?',
    answer: 'Pregnant woman lying on back compresses vena cava, reducing blood flow',
    category: 'obstetrics',
    subcategory: 'Pregnancy',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['supine hypotensive', 'vena cava', 'pregnant positioning']
  },
  {
    id: 'ob_014',
    question: 'What is the difference between pediatric and adult vital signs?',
    answer: 'Children have faster heart rates, respirations, and lower blood pressures',
    category: 'obstetrics',
    subcategory: 'Pediatric Assessment',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['pediatric vitals', 'faster rates', 'lower BP']
  },
  {
    id: 'ob_015',
    question: 'What is the most common cause of cardiac arrest in children?',
    answer: 'Respiratory failure leading to hypoxia',
    category: 'obstetrics',
    subcategory: 'Child Emergencies',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['pediatric cardiac arrest', 'respiratory failure', 'hypoxia']
  },
  {
    id: 'ob_016',
    question: 'What is normal fetal heart rate during pregnancy?',
    answer: '110-160 beats per minute',
    category: 'obstetrics',
    subcategory: 'Delivery',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['fetal heart rate', 'normal range', 'pregnancy monitoring']
  },
  {
    id: 'ob_017',
    question: 'What position is best for pregnant patients during transport?',
    answer: 'Left lateral or tilted left 15-30 degrees',
    category: 'obstetrics',
    subcategory: 'Delivery',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['pregnancy positioning', 'left lateral', 'transport']
  },
  {
    id: 'ob_018',
    question: 'What is supine hypotensive syndrome?',
    answer: 'Compression of vena cava by gravid uterus causing low blood pressure',
    category: 'obstetrics',
    subcategory: 'Delivery',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['supine hypotensive syndrome', 'vena cava compression', 'pregnancy']
  },
  {
    id: 'ob_019',
    question: 'What is considered full-term pregnancy?',
    answer: '37-42 weeks gestation',
    category: 'obstetrics',
    subcategory: 'Delivery',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['full-term pregnancy', '37-42 weeks', 'gestation']
  },
  {
    id: 'ob_020',
    question: 'What is a breech presentation?',
    answer: 'Baby presents buttocks or feet first instead of head',
    category: 'obstetrics',
    subcategory: 'Delivery',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['breech presentation', 'buttocks first', 'abnormal delivery']
  },
  {
    id: 'ob_021',
    question: 'How do you manage a prolapsed umbilical cord?',
    answer: 'Elevate hips, apply moist sterile dressing, do not push cord back',
    category: 'obstetrics',
    subcategory: 'Delivery',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['prolapsed cord', 'elevate hips', 'emergency management']
  },
  {
    id: 'ob_022',
    question: 'What is postpartum hemorrhage?',
    answer: 'Excessive bleeding after delivery (>500mL vaginal, >1000mL C-section)',
    category: 'obstetrics',
    subcategory: 'Delivery',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['postpartum hemorrhage', 'excessive bleeding', 'blood loss']
  },
  {
    id: 'ob_023',
    question: 'How do you treat postpartum hemorrhage?',
    answer: 'Fundal massage, IV fluids, position legs up, rapid transport',
    category: 'obstetrics',
    subcategory: 'Delivery',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['fundal massage', 'postpartum treatment', 'IV fluids']
  },
  {
    id: 'ob_024',
    question: 'What is shoulder dystocia?',
    answer: 'Baby\'s shoulder becomes trapped behind mother\'s pubic bone',
    category: 'obstetrics',
    subcategory: 'Delivery',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['shoulder dystocia', 'trapped shoulder', 'delivery emergency']
  },
  {
    id: 'ob_025',
    question: 'What is the McRoberts maneuver?',
    answer: 'Hyperflexing mother\'s hips to help with shoulder dystocia',
    category: 'obstetrics',
    subcategory: 'Delivery',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['McRoberts maneuver', 'hip flexion', 'shoulder dystocia']
  },
  {
    id: 'ob_026',
    question: 'When should you cut the umbilical cord?',
    answer: 'After cord stops pulsating and baby is stable',
    category: 'obstetrics',
    subcategory: 'Delivery',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['umbilical cord', 'cord clamping', 'timing']
  },
  {
    id: 'ob_027',
    question: 'What is meconium and its significance?',
    answer: 'First fetal stool; green-stained fluid indicates possible fetal distress',
    category: 'obstetrics',
    subcategory: 'Delivery',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['meconium', 'fetal distress', 'green staining']
  },
  {
    id: 'ob_028',
    question: 'How do you manage meconium-stained amniotic fluid?',
    answer: 'Have suction ready, suction mouth and nose when head delivers',
    category: 'obstetrics',
    subcategory: 'Delivery',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['meconium management', 'suction', 'airway clearance']
  },
  {
    id: 'ob_029',
    question: 'What is precipitous labor?',
    answer: 'Rapid labor and delivery occurring in less than 3 hours',
    category: 'obstetrics',
    subcategory: 'Delivery',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['precipitous labor', 'rapid delivery', 'less than 3 hours']
  },
  {
    id: 'ob_030',
    question: 'What is an ectopic pregnancy?',
    answer: 'Pregnancy implanted outside the uterus (usually fallopian tube)',
    category: 'obstetrics',
    subcategory: 'Delivery',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['ectopic pregnancy', 'outside uterus', 'fallopian tube']
  },
  {
    id: 'ob_031',
    question: 'What are signs of ectopic pregnancy?',
    answer: 'Abdominal pain, vaginal bleeding, missed period, shoulder pain',
    category: 'obstetrics',
    subcategory: 'Delivery',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['ectopic signs', 'abdominal pain', 'shoulder pain']
  },
  {
    id: 'ob_032',
    question: 'What is placenta previa?',
    answer: 'Placenta partially or completely covers the cervical opening',
    category: 'obstetrics',
    subcategory: 'Delivery',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['placenta previa', 'cervical covering', 'bleeding']
  },
  {
    id: 'ob_033',
    question: 'What is abruptio placentae?',
    answer: 'Premature separation of normally implanted placenta',
    category: 'obstetrics',
    subcategory: 'Delivery',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['abruptio placentae', 'placental separation', 'bleeding']
  },
  {
    id: 'ob_034',
    question: 'What is preeclampsia?',
    answer: 'High blood pressure and protein in urine during pregnancy',
    category: 'obstetrics',
    subcategory: 'Delivery',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['preeclampsia', 'hypertension', 'proteinuria']
  },
  {
    id: 'ob_035',
    question: 'What is eclampsia?',
    answer: 'Seizures occurring in a woman with preeclampsia',
    category: 'obstetrics',
    subcategory: 'Delivery',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['eclampsia', 'seizures', 'preeclampsia']
  },
  {
    id: 'ob_036',
    question: 'How do you treat eclamptic seizures?',
    answer: 'Protect airway, left lateral position, prevent injury, rapid transport',
    category: 'obstetrics',
    subcategory: 'Delivery',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['eclamptic seizures', 'airway protection', 'left lateral']
  },
  {
    id: 'ob_037',
    question: 'What is normal newborn weight?',
    answer: '2.5-4.0 kg (5.5-8.8 lbs)',
    category: 'obstetrics',
    subcategory: 'Child Emergencies',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['newborn weight', 'normal range', 'term infant']
  },
  {
    id: 'ob_038',
    question: 'What is the APGAR score?',
    answer: 'Assessment of newborn at 1 and 5 minutes: Activity, Pulse, Grimace, Appearance, Respirations',
    category: 'obstetrics',
    subcategory: 'Child Emergencies',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['APGAR score', 'newborn assessment', '1 and 5 minutes']
  },
  {
    id: 'ob_039',
    question: 'What APGAR score requires immediate intervention?',
    answer: 'Score of 0-3 requires immediate resuscitation',
    category: 'obstetrics',
    subcategory: 'Child Emergencies',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['APGAR 0-3', 'immediate resuscitation', 'newborn emergency']
  },
  {
    id: 'ob_040',
    question: 'What is the normal pediatric heart rate for newborns?',
    answer: '120-160 beats per minute',
    category: 'obstetrics',
    subcategory: 'Child Emergencies',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['newborn heart rate', '120-160 bpm', 'vital signs']
  },
  {
    id: 'ob_041',
    question: 'What is the normal pediatric respiratory rate for newborns?',
    answer: '30-60 breaths per minute',
    category: 'obstetrics',
    subcategory: 'Child Emergencies',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['newborn respiratory rate', '30-60 bpm', 'vital signs']
  },
  {
    id: 'ob_042',
    question: 'How do you warm a newborn?',
    answer: 'Dry immediately, skin-to-skin contact, warm blankets, hat',
    category: 'obstetrics',
    subcategory: 'Child Emergencies',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['newborn warming', 'skin-to-skin', 'temperature regulation']
  },
  {
    id: 'ob_043',
    question: 'What is the leading cause of pediatric emergencies?',
    answer: 'Respiratory problems',
    category: 'obstetrics',
    subcategory: 'Child Emergencies',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['pediatric emergencies', 'respiratory problems', 'leading cause']
  },
  {
    id: 'ob_044',
    question: 'What is normal capillary refill time in children?',
    answer: 'Less than 2 seconds',
    category: 'obstetrics',
    subcategory: 'Child Emergencies',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['pediatric capillary refill', 'less than 2 seconds', 'circulation']
  },
  {
    id: 'ob_045',
    question: 'What is the pediatric assessment triangle?',
    answer: 'Appearance, Work of breathing, Circulation to skin',
    category: 'obstetrics',
    subcategory: 'Child Emergencies',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['pediatric triangle', 'appearance breathing circulation', 'assessment']
  },
  {
    id: 'ob_046',
    question: 'What is croup and how does it present?',
    answer: 'Viral infection causing barking cough and stridor',
    category: 'obstetrics',
    subcategory: 'Child Emergencies',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['croup', 'barking cough', 'stridor']
  },
  {
    id: 'ob_047',
    question: 'What is epiglottitis?',
    answer: 'Bacterial infection of epiglottis causing drooling and tripod position',
    category: 'obstetrics',
    subcategory: 'Child Emergencies',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['epiglottitis', 'bacterial infection', 'tripod position']
  },
  {
    id: 'ob_048',
    question: 'What is febrile seizure?',
    answer: 'Seizure caused by rapid rise in body temperature in children',
    category: 'obstetrics',
    subcategory: 'Child Emergencies',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['febrile seizure', 'temperature rise', 'pediatric seizure']
  },
  {
    id: 'ob_049',
    question: 'What age group is most affected by febrile seizures?',
    answer: '6 months to 5 years old',
    category: 'obstetrics',
    subcategory: 'Child Emergencies',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['febrile seizure age', '6 months to 5 years', 'pediatric']
  },
  {
    id: 'ob_050',
    question: 'What is the most important treatment for pediatric emergencies?',
    answer: 'Maintain airway and support breathing',
    category: 'obstetrics',
    subcategory: 'Child Emergencies',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['pediatric treatment', 'airway breathing', 'priority care']
  },

  // Additional Integumentary System Cards (complete to 50)
  {
    id: 'int_009',
    question: 'What are the five functions of the skin?',
    answer: 'Protection, thermoregulation, sensation, excretion, vitamin D synthesis',
    category: 'integumentary',
    subcategory: 'Functions',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['skin functions', 'protection', 'thermoregulation']
  },
  {
    id: 'int_010',
    question: 'What is the subcutaneous layer composed of?',
    answer: 'Adipose (fat) tissue and connective tissue',
    category: 'integumentary',
    subcategory: 'Layers',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['subcutaneous layer', 'adipose tissue', 'fat layer']
  },
  {
    id: 'int_011',
    question: 'What causes frostbite?',
    answer: 'Ice crystals forming in tissue cells, causing cell death',
    category: 'integumentary',
    subcategory: 'Temperature Regulation',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['frostbite', 'ice crystals', 'cell death']
  },
  {
    id: 'int_012',
    question: 'What is cellulitis?',
    answer: 'Bacterial infection of the deep layers of skin and soft tissue',
    category: 'integumentary',
    subcategory: 'Conditions',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['cellulitis', 'bacterial infection', 'soft tissue']
  },
  {
    id: 'int_013',
    question: 'What is the difference between superficial and partial thickness burns?',
    answer: 'Superficial: epidermis only, red/painful. Partial: extends into dermis, blisters',
    category: 'integumentary',
    subcategory: 'Conditions',
    difficulty: 'Intermediate',
    certificationLevel: 'EMT',
    tags: ['burn classification', 'superficial burns', 'partial thickness']
  },
  {
    id: 'int_014',
    question: 'What characterizes a full thickness burn?',
    answer: 'Destroys all skin layers, appears white/charred, painless due to nerve damage',
    category: 'integumentary',
    subcategory: 'Conditions',
    difficulty: 'Advanced',
    certificationLevel: 'EMT',
    tags: ['full thickness burn', 'nerve damage', 'painless']
  },
  {
    id: 'int_015',
    question: 'What is erythema?',
    answer: 'Redness of the skin due to capillary dilation',
    category: 'integumentary',
    subcategory: 'Conditions',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['erythema', 'skin redness', 'capillary dilation']
  },
  {
    id: 'int_016',
    question: 'What is petechiae?',
    answer: 'Small red or purple spots caused by bleeding under the skin',
    category: 'integumentary',
    subcategory: 'Conditions',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['petechiae', 'bleeding spots', 'skin discoloration']
  },
  {
    id: 'int_017',
    question: 'What is diaphoresis?',
    answer: 'Excessive sweating, often associated with shock or cardiac events',
    category: 'integumentary',
    subcategory: 'Temperature Regulation',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['diaphoresis', 'excessive sweating', 'shock']
  },
  {
    id: 'int_018',
    question: 'What is pallor?',
    answer: 'Pale appearance of skin due to reduced blood flow or low hemoglobin',
    category: 'integumentary',
    subcategory: 'Conditions',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['pallor', 'pale skin', 'reduced blood flow']
  },
  {
    id: 'int_019',
    question: 'What is mottling?',
    answer: 'Patchy discoloration of skin, often indicating poor circulation',
    category: 'integumentary',
    subcategory: 'Conditions',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['mottling', 'skin discoloration', 'poor circulation']
  },
  {
    id: 'int_020',
    question: 'What causes central cyanosis?',
    answer: 'Low oxygen levels in arterial blood (hypoxemia)',
    category: 'integumentary',
    subcategory: 'Conditions',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['central cyanosis', 'hypoxemia', 'low oxygen']
  },
  {
    id: 'int_021',
    question: 'What causes peripheral cyanosis?',
    answer: 'Poor circulation or vasoconstriction in extremities',
    category: 'integumentary',
    subcategory: 'Conditions',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['peripheral cyanosis', 'poor circulation', 'vasoconstriction']
  },
  {
    id: 'int_022',
    question: 'What is jaundice in the skin?',
    answer: 'Yellow discoloration due to elevated bilirubin levels',
    category: 'integumentary',
    subcategory: 'Conditions',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['jaundice', 'yellow skin', 'bilirubin']
  },
  {
    id: 'int_023',
    question: 'What is urticaria?',
    answer: 'Hives - raised, itchy welts on the skin from allergic reactions',
    category: 'integumentary',
    subcategory: 'Conditions',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['urticaria', 'hives', 'allergic reaction']
  },
  {
    id: 'int_024',
    question: 'What is angioedema?',
    answer: 'Swelling of deeper skin layers, often around eyes and lips',
    category: 'integumentary',
    subcategory: 'Conditions',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['angioedema', 'facial swelling', 'allergic reaction']
  },
  {
    id: 'int_025',
    question: 'What is the capillary refill test?',
    answer: 'Press nail bed, release, and count seconds for color to return (normal <2 seconds)',
    category: 'integumentary',
    subcategory: 'Functions',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['capillary refill', 'perfusion test', 'circulation']
  },
  {
    id: 'int_026',
    question: 'What does delayed capillary refill indicate?',
    answer: 'Poor circulation, shock, or hypothermia',
    category: 'integumentary',
    subcategory: 'Functions',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['delayed capillary refill', 'poor circulation', 'shock']
  },
  {
    id: 'int_027',
    question: 'What is skin turgor?',
    answer: 'Test of skin elasticity to assess hydration status',
    category: 'integumentary',
    subcategory: 'Functions',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['skin turgor', 'elasticity', 'hydration']
  },
  {
    id: 'int_028',
    question: 'What does poor skin turgor indicate?',
    answer: 'Dehydration or advanced age',
    category: 'integumentary',
    subcategory: 'Functions',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['poor skin turgor', 'dehydration', 'elderly']
  },
  {
    id: 'int_029',
    question: 'What are sebaceous glands?',
    answer: 'Oil glands that secrete sebum to lubricate skin and hair',
    category: 'integumentary',
    subcategory: 'Layers',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['sebaceous glands', 'oil glands', 'sebum']
  },
  {
    id: 'int_030',
    question: 'What are eccrine glands?',
    answer: 'Sweat glands that help regulate body temperature',
    category: 'integumentary',
    subcategory: 'Temperature Regulation',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['eccrine glands', 'sweat glands', 'temperature regulation']
  },
  {
    id: 'int_031',
    question: 'What is heat stroke?',
    answer: 'Life-threatening condition where body temperature regulation fails',
    category: 'integumentary',
    subcategory: 'Temperature Regulation',
    difficulty: 'Intermediate',
    certificationLevel: 'EMT',
    tags: ['heat stroke', 'hyperthermia', 'temperature regulation']
  },
  {
    id: 'int_032',
    question: 'What are the signs of heat exhaustion?',
    answer: 'Heavy sweating, weakness, nausea, headache, muscle cramps',
    category: 'integumentary',
    subcategory: 'Temperature Regulation',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['heat exhaustion', 'sweating', 'dehydration']
  },
  {
    id: 'int_033',
    question: 'What is the difference between heat exhaustion and heat stroke?',
    answer: 'Heat stroke: altered mental status, hot/dry skin. Heat exhaustion: normal mental status, sweaty',
    category: 'integumentary',
    subcategory: 'Temperature Regulation',
    difficulty: 'Intermediate',
    certificationLevel: 'EMT',
    tags: ['heat emergencies', 'altered mental status', 'sweating']
  },
  {
    id: 'int_034',
    question: 'What is hypothermia?',
    answer: 'Core body temperature below 95°F (35°C)',
    category: 'integumentary',
    subcategory: 'Temperature Regulation',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['hypothermia', 'low body temperature', 'cold exposure']
  },
  {
    id: 'int_035',
    question: 'What are the stages of hypothermia?',
    answer: 'Mild (90-95°F): shivering. Moderate (82-90°F): altered mental status. Severe (<82°F): cardiac arrest risk',
    category: 'integumentary',
    subcategory: 'Temperature Regulation',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['hypothermia stages', 'temperature ranges', 'severity']
  },
  {
    id: 'int_036',
    question: 'What is frostbite classification?',
    answer: 'Superficial: skin redness/pain. Deep: blisters, numbness, tissue death',
    category: 'integumentary',
    subcategory: 'Temperature Regulation',
    difficulty: 'Intermediate',
    certificationLevel: 'EMT',
    tags: ['frostbite classification', 'superficial', 'deep frostbite']
  },
  {
    id: 'int_037',
    question: 'What is chilblains?',
    answer: 'Painful inflammation of small blood vessels from cold exposure',
    category: 'integumentary',
    subcategory: 'Temperature Regulation',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['chilblains', 'cold exposure', 'blood vessel inflammation']
  },
  {
    id: 'int_038',
    question: 'What is trench foot?',
    answer: 'Tissue damage from prolonged exposure to wet, cold conditions',
    category: 'integumentary',
    subcategory: 'Temperature Regulation',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['trench foot', 'wet conditions', 'tissue damage']
  },
  {
    id: 'int_039',
    question: 'What is contact dermatitis?',
    answer: 'Skin inflammation from direct contact with irritants or allergens',
    category: 'integumentary',
    subcategory: 'Conditions',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['contact dermatitis', 'skin inflammation', 'allergens']
  },
  {
    id: 'int_040',
    question: 'What is impetigo?',
    answer: 'Superficial bacterial skin infection with honey-crusted lesions',
    category: 'integumentary',
    subcategory: 'Conditions',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['impetigo', 'bacterial infection', 'honey-crusted lesions']
  },
  {
    id: 'int_041',
    question: 'What is psoriasis?',
    answer: 'Chronic autoimmune condition causing scaly, red skin patches',
    category: 'integumentary',
    subcategory: 'Conditions',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['psoriasis', 'autoimmune', 'scaly patches']
  },
  {
    id: 'int_042',
    question: 'What is eczema?',
    answer: 'Chronic inflammatory skin condition causing itchy, red, dry skin',
    category: 'integumentary',
    subcategory: 'Conditions',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['eczema', 'inflammatory', 'itchy skin']
  },
  {
    id: 'int_043',
    question: 'What is melanin?',
    answer: 'Pigment that gives skin color and protects against UV radiation',
    category: 'integumentary',
    subcategory: 'Functions',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['melanin', 'pigment', 'UV protection']
  },
  {
    id: 'int_044',
    question: 'What is vitiligo?',
    answer: 'Condition where melanocytes are destroyed, causing white patches',
    category: 'integumentary',
    subcategory: 'Conditions',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['vitiligo', 'melanocytes', 'white patches']
  },
  {
    id: 'int_045',
    question: 'What are pressure points for skin assessment?',
    answer: 'Heels, sacrum, elbows, back of head - areas prone to pressure ulcers',
    category: 'integumentary',
    subcategory: 'Conditions',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['pressure points', 'pressure ulcers', 'skin assessment']
  },
  {
    id: 'int_046',
    question: 'What is skin pH?',
    answer: 'Slightly acidic (4.5-6.5) to inhibit bacterial growth',
    category: 'integumentary',
    subcategory: 'Functions',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['skin pH', 'acidic', 'bacterial inhibition']
  },
  {
    id: 'int_047',
    question: 'What is the role of keratin in skin?',
    answer: 'Protein that provides strength and waterproofing to skin',
    category: 'integumentary',
    subcategory: 'Layers',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['keratin', 'protein', 'waterproofing']
  },
  {
    id: 'int_048',
    question: 'What is the stratum corneum?',
    answer: 'Outermost layer of epidermis consisting of dead, keratinized cells',
    category: 'integumentary',
    subcategory: 'Layers',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['stratum corneum', 'epidermis', 'keratinized cells']
  },
  {
    id: 'int_049',
    question: 'What is dermatome mapping?',
    answer: 'Areas of skin innervated by specific spinal nerve roots',
    category: 'integumentary',
    subcategory: 'Functions',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['dermatomes', 'spinal nerves', 'skin innervation']
  },
  {
    id: 'int_050',
    question: 'What is the role of Langerhans cells?',
    answer: 'Immune cells in epidermis that detect and respond to pathogens',
    category: 'integumentary',
    subcategory: 'Functions',
    difficulty: 'Advanced',
    certificationLevel: 'Paramedic',
    tags: ['Langerhans cells', 'immune response', 'epidermis']
  },

  // Medical Patient Assessment Cards (50 cards)
  {
    id: 'med_assess_001',
    question: 'What is the primary survey in medical assessment?',
    answer: 'A-B-C-D-E: Airway, Breathing, Circulation, Disability (neurologic), Exposure',
    category: 'medical_assessment',
    subcategory: 'Primary Assessment',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['primary survey', 'ABCDE', 'medical assessment']
  },
  {
    id: 'med_assess_002',
    question: 'What is AVPU?',
    answer: 'Alert, Verbal response, Painful response, Unresponsive - consciousness assessment',
    category: 'medical_assessment',
    subcategory: 'Primary Assessment',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['AVPU', 'consciousness', 'mental status']
  },
  {
    id: 'med_assess_003',
    question: 'What is SAMPLE history?',
    answer: 'Signs/Symptoms, Allergies, Medications, Past medical history, Last oral intake, Events',
    category: 'medical_assessment',
    subcategory: 'History Taking',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['SAMPLE', 'history taking', 'patient assessment']
  },
  {
    id: 'med_assess_004',
    question: 'What is OPQRST for pain assessment?',
    answer: 'Onset, Provocation, Quality, Radiation, Severity, Time',
    category: 'medical_assessment',
    subcategory: 'History Taking',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['OPQRST', 'pain assessment', 'symptom analysis']
  },
  {
    id: 'med_assess_005',
    question: 'What are normal vital signs for adults?',
    answer: 'HR: 60-100, RR: 12-20, BP: 90-140/60-90, Temp: 97.8-99.1°F, SpO2: >95%',
    category: 'medical_assessment',
    subcategory: 'Vital Signs',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['normal vital signs', 'adults', 'reference values']
  },
  {
    id: 'med_assess_006',
    question: 'What is the Glasgow Coma Scale?',
    answer: 'Eye opening (4) + Verbal response (5) + Motor response (6) = 3-15 points',
    category: 'medical_assessment',
    subcategory: 'Primary Assessment',
    difficulty: 'Intermediate',
    certificationLevel: 'EMT',
    tags: ['Glasgow Coma Scale', 'GCS', 'neurological assessment']
  },
  {
    id: 'med_assess_007',
    question: 'What GCS score indicates severe brain injury?',
    answer: '8 or less',
    category: 'medical_assessment',
    subcategory: 'Primary Assessment',
    difficulty: 'Intermediate',
    certificationLevel: 'EMT',
    tags: ['GCS', 'severe brain injury', 'neurological deficit']
  },
  {
    id: 'med_assess_008',
    question: 'What is the chief complaint?',
    answer: 'The primary reason the patient or family called for medical assistance',
    category: 'medical_assessment',
    subcategory: 'History Taking',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['chief complaint', 'primary concern', 'reason for call']
  },
  {
    id: 'med_assess_009',
    question: 'What is the difference between signs and symptoms?',
    answer: 'Signs: objective findings you observe. Symptoms: subjective complaints patient reports',
    category: 'medical_assessment',
    subcategory: 'History Taking',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['signs vs symptoms', 'objective', 'subjective']
  },
  {
    id: 'med_assess_010',
    question: 'What is general impression?',
    answer: 'Overall initial assessment of patient\'s condition and urgency',
    category: 'medical_assessment',
    subcategory: 'Primary Assessment',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['general impression', 'initial assessment', 'patient condition']
  },
  {
    id: 'med_assess_011',
    question: 'What are the components of scene size-up?',
    answer: 'Scene safety, nature of illness, number of patients, need for additional resources',
    category: 'medical_assessment',
    subcategory: 'Primary Assessment',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['scene size-up', 'safety', 'nature of illness']
  },
  {
    id: 'med_assess_012',
    question: 'What is focused history and physical exam?',
    answer: 'Detailed assessment concentrating on chief complaint and relevant body systems',
    category: 'medical_assessment',
    subcategory: 'Secondary Assessment',
    difficulty: 'Intermediate',
    certificationLevel: 'EMT',
    tags: ['focused exam', 'chief complaint', 'body systems']
  },
  {
    id: 'med_assess_013',
    question: 'When do you perform a rapid full-body scan?',
    answer: 'Unresponsive medical patients or when nature of illness is unclear',
    category: 'medical_assessment',
    subcategory: 'Secondary Assessment',
    difficulty: 'Intermediate',
    certificationLevel: 'EMT',
    tags: ['rapid scan', 'unresponsive patient', 'unclear illness']
  },
  {
    id: 'med_assess_014',
    question: 'What is baseline vital signs?',
    answer: 'Initial set of vital signs obtained during primary assessment',
    category: 'medical_assessment',
    subcategory: 'Vital Signs',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['baseline vitals', 'initial measurements', 'comparison']
  },
  {
    id: 'med_assess_015',
    question: 'How often should you reassess stable patients?',
    answer: 'Every 15 minutes',
    category: 'medical_assessment',
    subcategory: 'Primary Assessment',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['reassessment', 'stable patients', '15 minutes']
  },
  {
    id: 'med_assess_016',
    question: 'How often should you reassess unstable patients?',
    answer: 'Every 5 minutes',
    category: 'medical_assessment',
    subcategory: 'Primary Assessment',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['reassessment', 'unstable patients', '5 minutes']
  },
  {
    id: 'med_assess_017',
    question: 'What is trending vital signs?',
    answer: 'Comparing serial vital signs to identify improvement or deterioration',
    category: 'medical_assessment',
    subcategory: 'Vital Signs',
    difficulty: 'Intermediate',
    certificationLevel: 'EMT',
    tags: ['trending', 'serial vitals', 'patient monitoring']
  },
  {
    id: 'med_assess_018',
    question: 'What does PEARL stand for?',
    answer: 'Pupils Equal And Reactive to Light',
    category: 'medical_assessment',
    subcategory: 'Primary Assessment',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['PEARL', 'pupil assessment', 'neurological exam']
  },
  {
    id: 'med_assess_019',
    question: 'What does altered mental status indicate?',
    answer: 'Potential hypoxia, hypoglycemia, drug intoxication, or neurological problem',
    category: 'medical_assessment',
    subcategory: 'Primary Assessment',
    difficulty: 'Intermediate',
    certificationLevel: 'EMT',
    tags: ['altered mental status', 'hypoxia', 'hypoglycemia']
  },
  {
    id: 'med_assess_020',
    question: 'What is orthostatic vital signs?',
    answer: 'Blood pressure and pulse measured lying down, sitting, and standing',
    category: 'medical_assessment',
    subcategory: 'Vital Signs',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['orthostatic vitals', 'position changes', 'volume status']
  },
  {
    id: 'med_assess_021',
    question: 'What indicates positive orthostatic changes?',
    answer: 'Drop in systolic BP >20mmHg or increase in HR >20bpm when standing',
    category: 'medical_assessment',
    subcategory: 'Vital Signs',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['orthostatic hypotension', 'blood pressure drop', 'dehydration']
  },
  {
    id: 'med_assess_022',
    question: 'What is the purpose of blood glucose testing?',
    answer: 'Identify hypoglycemia or hyperglycemia in altered mental status patients',
    category: 'medical_assessment',
    subcategory: 'Vital Signs',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['blood glucose', 'hypoglycemia', 'altered mental status']
  },
  {
    id: 'med_assess_023',
    question: 'What are normal blood glucose levels?',
    answer: '80-120 mg/dL (fasting), 70-140 mg/dL (random)',
    category: 'medical_assessment',
    subcategory: 'Vital Signs',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['normal glucose', 'blood sugar levels', 'reference range']
  },
  {
    id: 'med_assess_024',
    question: 'What is pulse oximetry?',
    answer: 'Non-invasive measurement of oxygen saturation in arterial blood',
    category: 'medical_assessment',
    subcategory: 'Vital Signs',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['pulse oximetry', 'oxygen saturation', 'SpO2']
  },
  {
    id: 'med_assess_025',
    question: 'What factors can affect pulse oximetry accuracy?',
    answer: 'Poor circulation, carbon monoxide poisoning, nail polish, ambient light',
    category: 'medical_assessment',
    subcategory: 'Vital Signs',
    difficulty: 'Intermediate',
    certificationLevel: 'EMT',
    tags: ['pulse ox accuracy', 'limitations', 'false readings']
  },
  {
    id: 'med_assess_026',
    question: 'What is capnography?',
    answer: 'Measurement of exhaled CO2 to assess ventilation and circulation',
    category: 'medical_assessment',
    subcategory: 'Vital Signs',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['capnography', 'EtCO2', 'ventilation monitoring']
  },
  {
    id: 'med_assess_027',
    question: 'What is normal EtCO2?',
    answer: '35-45 mmHg',
    category: 'medical_assessment',
    subcategory: 'Vital Signs',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['normal EtCO2', 'capnography', 'CO2 levels']
  },
  {
    id: 'med_assess_028',
    question: 'What does low EtCO2 indicate?',
    answer: 'Hyperventilation, poor circulation, or cardiac arrest',
    category: 'medical_assessment',
    subcategory: 'Vital Signs',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['low EtCO2', 'hyperventilation', 'poor circulation']
  },
  {
    id: 'med_assess_029',
    question: 'What does high EtCO2 indicate?',
    answer: 'Hypoventilation, respiratory depression, or CO2 retention',
    category: 'medical_assessment',
    subcategory: 'Vital Signs',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['high EtCO2', 'hypoventilation', 'CO2 retention']
  },
  {
    id: 'med_assess_030',
    question: 'What is the purpose of 12-lead ECG?',
    answer: 'Identify cardiac rhythms, ischemia, and electrical conduction problems',
    category: 'medical_assessment',
    subcategory: 'Secondary Assessment',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['12-lead ECG', 'cardiac monitoring', 'ischemia detection']
  },
  {
    id: 'med_assess_031',
    question: 'What is inspection in physical exam?',
    answer: 'Visual observation of patient\'s appearance, behavior, and obvious abnormalities',
    category: 'medical_assessment',
    subcategory: 'Secondary Assessment',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['inspection', 'visual examination', 'observation']
  },
  {
    id: 'med_assess_032',
    question: 'What is palpation in physical exam?',
    answer: 'Using hands to feel for masses, tenderness, temperature, and pulses',
    category: 'medical_assessment',
    subcategory: 'Secondary Assessment',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['palpation', 'physical examination', 'hands-on assessment']
  },
  {
    id: 'med_assess_033',
    question: 'What is auscultation?',
    answer: 'Listening to body sounds with a stethoscope (heart, lungs, abdomen)',
    category: 'medical_assessment',
    subcategory: 'Secondary Assessment',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['auscultation', 'stethoscope', 'body sounds']
  },
  {
    id: 'med_assess_034',
    question: 'What is percussion in physical exam?',
    answer: 'Tapping body surfaces to assess underlying structures (advanced technique)',
    category: 'medical_assessment',
    subcategory: 'Secondary Assessment',
    difficulty: 'Advanced',
    certificationLevel: 'Paramedic',
    tags: ['percussion', 'advanced examination', 'body structures']
  },
  {
    id: 'med_assess_035',
    question: 'What are the 4 quadrants of the abdomen?',
    answer: 'Right upper, left upper, right lower, left lower quadrants',
    category: 'medical_assessment',
    subcategory: 'Secondary Assessment',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['abdominal quadrants', 'anatomy', 'physical exam']
  },
  {
    id: 'med_assess_036',
    question: 'What is guarding in abdominal exam?',
    answer: 'Voluntary or involuntary muscle tensing to protect painful areas',
    category: 'medical_assessment',
    subcategory: 'Secondary Assessment',
    difficulty: 'Intermediate',
    certificationLevel: 'EMT',
    tags: ['abdominal guarding', 'muscle tension', 'pain protection']
  },
  {
    id: 'med_assess_037',
    question: 'What is rebound tenderness?',
    answer: 'Pain that occurs when pressure is suddenly released from abdomen',
    category: 'medical_assessment',
    subcategory: 'Secondary Assessment',
    difficulty: 'Intermediate',
    certificationLevel: 'EMT',
    tags: ['rebound tenderness', 'abdominal pain', 'peritonitis sign']
  },
  {
    id: 'med_assess_038',
    question: 'What is jugular vein distention (JVD)?',
    answer: 'Visible neck vein enlargement indicating elevated central venous pressure',
    category: 'medical_assessment',
    subcategory: 'Secondary Assessment',
    difficulty: 'Intermediate',
    certificationLevel: 'EMT',
    tags: ['JVD', 'neck veins', 'heart failure']
  },
  {
    id: 'med_assess_039',
    question: 'What does JVD indicate?',
    answer: 'Right heart failure, cardiac tamponade, or tension pneumothorax',
    category: 'medical_assessment',
    subcategory: 'Secondary Assessment',
    difficulty: 'Intermediate',
    certificationLevel: 'EMT',
    tags: ['JVD causes', 'heart failure', 'cardiac tamponade']
  },
  {
    id: 'med_assess_040',
    question: 'What is peripheral edema?',
    answer: 'Swelling in extremities due to fluid accumulation',
    category: 'medical_assessment',
    subcategory: 'Secondary Assessment',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['peripheral edema', 'swelling', 'fluid retention']
  },
  {
    id: 'med_assess_041',
    question: 'What causes peripheral edema?',
    answer: 'Heart failure, kidney disease, liver disease, or prolonged immobility',
    category: 'medical_assessment',
    subcategory: 'Secondary Assessment',
    difficulty: 'Intermediate',
    certificationLevel: 'EMT',
    tags: ['edema causes', 'heart failure', 'organ dysfunction']
  },
  {
    id: 'med_assess_042',
    question: 'What is pitting edema?',
    answer: 'Swelling that leaves an indentation when pressed',
    category: 'medical_assessment',
    subcategory: 'Secondary Assessment',
    difficulty: 'Intermediate',
    certificationLevel: 'EMT',
    tags: ['pitting edema', 'indentation', 'fluid assessment']
  },
  {
    id: 'med_assess_043',
    question: 'What is the medical assessment priority sequence?',
    answer: 'Life threats first, then systematic head-to-toe or focused exam based on complaint',
    category: 'medical_assessment',
    subcategory: 'Primary Assessment',
    difficulty: 'Intermediate',
    certificationLevel: 'EMT',
    tags: ['assessment priority', 'life threats', 'systematic approach']
  },
  {
    id: 'med_assess_044',
    question: 'What are red flag symptoms requiring immediate transport?',
    answer: 'Chest pain, difficulty breathing, altered mental status, severe bleeding',
    category: 'medical_assessment',
    subcategory: 'Primary Assessment',
    difficulty: 'Intermediate',
    certificationLevel: 'EMT',
    tags: ['red flag symptoms', 'immediate transport', 'critical conditions']
  },
  {
    id: 'med_assess_045',
    question: 'What is medication reconciliation?',
    answer: 'Verifying all medications patient takes to identify interactions or contraindications',
    category: 'medical_assessment',
    subcategory: 'History Taking',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['medication reconciliation', 'drug interactions', 'safety']
  },
  {
    id: 'med_assess_046',
    question: 'What questions should you ask about medications?',
    answer: 'What medications, dosages, when last taken, compliance, allergies',
    category: 'medical_assessment',
    subcategory: 'History Taking',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['medication history', 'dosages', 'compliance']
  },
  {
    id: 'med_assess_047',
    question: 'What is the significance of recent medication changes?',
    answer: 'May indicate disease progression or could be causing current symptoms',
    category: 'medical_assessment',
    subcategory: 'History Taking',
    difficulty: 'Intermediate',
    certificationLevel: 'EMT',
    tags: ['medication changes', 'disease progression', 'side effects']
  },
  {
    id: 'med_assess_048',
    question: 'What is psychosocial assessment?',
    answer: 'Evaluating patient\'s mental status, emotional state, and social circumstances',
    category: 'medical_assessment',
    subcategory: 'Secondary Assessment',
    difficulty: 'Intermediate',
    certificationLevel: 'EMT',
    tags: ['psychosocial assessment', 'mental health', 'social factors']
  },
  {
    id: 'med_assess_049',
    question: 'What documentation is required for medical patients?',
    answer: 'Chief complaint, history, physical findings, vital signs, treatments, response',
    category: 'medical_assessment',
    subcategory: 'Documentation',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['medical documentation', 'patient care report', 'record keeping']
  },
  {
    id: 'med_assess_050',
    question: 'What is continuous quality improvement in assessment?',
    answer: 'Reviewing cases to identify assessment errors and improve patient care',
    category: 'medical_assessment',
    subcategory: 'Documentation',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['quality improvement', 'case review', 'assessment accuracy']
  },

  // Trauma Patient Assessment Cards (50 cards)
  {
    id: 'trauma_assess_001',
    question: 'What is the trauma primary survey?',
    answer: 'A-B-C-D-E: Airway with C-spine, Breathing, Circulation with bleeding control, Disability (neurologic), Exposure/Environment',
    category: 'trauma_assessment',
    subcategory: 'Primary Survey',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['trauma primary survey', 'ABCDE', 'C-spine control']
  },
  {
    id: 'trauma_assess_002',
    question: 'What is mechanism of injury (MOI)?',
    answer: 'The force or energy that caused the injury and how it was transmitted to the body',
    category: 'trauma_assessment',
    subcategory: 'Mechanism of Injury',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['mechanism of injury', 'MOI', 'energy transfer']
  },
  {
    id: 'trauma_assess_003',
    question: 'What are significant mechanisms of injury?',
    answer: 'High-speed crashes, falls >20 feet, penetrating trauma, motorcycle crashes, ejection',
    category: 'trauma_assessment',
    subcategory: 'Mechanism of Injury',
    difficulty: 'Intermediate',
    certificationLevel: 'EMT',
    tags: ['significant MOI', 'high-speed crash', 'penetrating trauma']
  },
  {
    id: 'trauma_assess_004',
    question: 'What is the golden hour in trauma?',
    answer: 'First hour after injury when definitive care has greatest impact on survival',
    category: 'trauma_assessment',
    subcategory: 'Trauma Triage',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['golden hour', 'trauma survival', 'definitive care']
  },
  {
    id: 'trauma_assess_005',
    question: 'What is the platinum 10 minutes?',
    answer: 'Target time for scene assessment and stabilization before transport',
    category: 'trauma_assessment',
    subcategory: 'Trauma Triage',
    difficulty: 'Intermediate',
    certificationLevel: 'EMT',
    tags: ['platinum 10', 'scene time', 'rapid transport']
  },
  {
    id: 'trauma_assess_006',
    question: 'What is load and go patient?',
    answer: 'Trauma patient requiring immediate transport due to life-threatening injuries',
    category: 'trauma_assessment',
    subcategory: 'Trauma Triage',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['load and go', 'immediate transport', 'life-threatening']
  },
  {
    id: 'trauma_assess_007',
    question: 'What is stay and play patient?',
    answer: 'Stable trauma patient who can receive more thorough assessment and treatment on scene',
    category: 'trauma_assessment',
    subcategory: 'Trauma Triage',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['stay and play', 'stable patient', 'thorough assessment']
  },
  {
    id: 'trauma_assess_008',
    question: 'What is the rapid trauma assessment?',
    answer: 'Quick head-to-toe examination to identify life-threatening injuries',
    category: 'trauma_assessment',
    subcategory: 'Rapid Assessment',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['rapid trauma assessment', 'head-to-toe', 'life threats']
  },
  {
    id: 'trauma_assess_009',
    question: 'When do you perform rapid trauma assessment?',
    answer: 'Significant MOI, altered mental status, or multiple injuries',
    category: 'trauma_assessment',
    subcategory: 'Rapid Assessment',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['rapid assessment indications', 'significant MOI', 'multiple injuries']
  },
  {
    id: 'trauma_assess_010',
    question: 'What is focused trauma assessment?',
    answer: 'Detailed examination of specific injury site in stable patients',
    category: 'trauma_assessment',
    subcategory: 'Secondary Survey',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['focused assessment', 'specific injury', 'stable patient']
  },
  {
    id: 'trauma_assess_011',
    question: 'What is DCAP-BTLS?',
    answer: 'Deformities, Contusions, Abrasions, Punctures/Penetrations, Burns, Tenderness, Lacerations, Swelling',
    category: 'trauma_assessment',
    subcategory: 'Secondary Survey',
    difficulty: 'Intermediate',
    certificationLevel: 'EMT',
    tags: ['DCAP-BTLS', 'injury assessment', 'physical findings']
  },
  {
    id: 'trauma_assess_012',
    question: 'What is the Glasgow Coma Scale in trauma?',
    answer: 'Neurological assessment: Eye opening + Verbal response + Motor response (3-15)',
    category: 'trauma_assessment',
    subcategory: 'Primary Survey',
    difficulty: 'Intermediate',
    certificationLevel: 'EMT',
    tags: ['GCS trauma', 'neurological assessment', 'brain injury']
  },
  {
    id: 'trauma_assess_013',
    question: 'What GCS indicates severe traumatic brain injury?',
    answer: '8 or less',
    category: 'trauma_assessment',
    subcategory: 'Primary Survey',
    difficulty: 'Intermediate',
    certificationLevel: 'EMT',
    tags: ['severe TBI', 'GCS 8', 'brain injury']
  },
  {
    id: 'trauma_assess_014',
    question: 'What is spinal immobilization criteria?',
    answer: 'Altered mental status, spinal pain/tenderness, neurologic deficits, significant MOI',
    category: 'trauma_assessment',
    subcategory: 'Primary Survey',
    difficulty: 'Intermediate',
    certificationLevel: 'EMT',
    tags: ['spinal immobilization', 'C-spine criteria', 'neurologic deficits']
  },
  {
    id: 'trauma_assess_015',
    question: 'What is selective spinal immobilization?',
    answer: 'Evidence-based criteria to determine which patients need spinal immobilization',
    category: 'trauma_assessment',
    subcategory: 'Primary Survey',
    difficulty: 'Advanced',
    certificationLevel: 'EMT',
    tags: ['selective immobilization', 'evidence-based', 'clinical criteria']
  },
  {
    id: 'trauma_assess_016',
    question: 'What are high-risk criteria for C-spine injury?',
    answer: 'Age >65, dangerous MOI, paresthesias in extremities',
    category: 'trauma_assessment',
    subcategory: 'Primary Survey',
    difficulty: 'Advanced',
    certificationLevel: 'EMT',
    tags: ['C-spine risk factors', 'age criteria', 'paresthesias']
  },
  {
    id: 'trauma_assess_017',
    question: 'What is hemorrhage control priority?',
    answer: 'Direct pressure, pressure dressing, tourniquet for extremity bleeding',
    category: 'trauma_assessment',
    subcategory: 'Primary Survey',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['hemorrhage control', 'direct pressure', 'tourniquet']
  },
  {
    id: 'trauma_assess_018',
    question: 'What is the trauma triad of death?',
    answer: 'Hypothermia, acidosis, coagulopathy - worsening cycle in severe trauma',
    category: 'trauma_assessment',
    subcategory: 'Primary Survey',
    difficulty: 'Advanced',
    certificationLevel: 'Paramedic',
    tags: ['trauma triad', 'hypothermia', 'coagulopathy']
  },
  {
    id: 'trauma_assess_019',
    question: 'What is shock in trauma patients?',
    answer: 'Inadequate tissue perfusion usually from blood loss (hemorrhagic shock)',
    category: 'trauma_assessment',
    subcategory: 'Primary Survey',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['hemorrhagic shock', 'blood loss', 'tissue perfusion']
  },
  {
    id: 'trauma_assess_020',
    question: 'What are early signs of shock in trauma?',
    answer: 'Tachycardia, anxiety, restlessness, pale skin',
    category: 'trauma_assessment',
    subcategory: 'Primary Survey',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['early shock signs', 'tachycardia', 'compensated shock']
  },
  {
    id: 'trauma_assess_021',
    question: 'What are late signs of shock in trauma?',
    answer: 'Hypotension, altered mental status, weak pulse, cold/clammy skin',
    category: 'trauma_assessment',
    subcategory: 'Primary Survey',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['late shock signs', 'hypotension', 'decompensated shock']
  },
  {
    id: 'trauma_assess_022',
    question: 'What is compensated shock?',
    answer: 'Body maintains blood pressure through increased heart rate and vasoconstriction',
    category: 'trauma_assessment',
    subcategory: 'Primary Survey',
    difficulty: 'Intermediate',
    certificationLevel: 'EMT',
    tags: ['compensated shock', 'normal BP', 'compensation mechanisms']
  },
  {
    id: 'trauma_assess_023',
    question: 'What is decompensated shock?',
    answer: 'Body can no longer maintain blood pressure, leading to hypotension',
    category: 'trauma_assessment',
    subcategory: 'Primary Survey',
    difficulty: 'Intermediate',
    certificationLevel: 'EMT',
    tags: ['decompensated shock', 'hypotension', 'compensation failure']
  },
  {
    id: 'trauma_assess_024',
    question: 'What is the rule of nines for burns?',
    answer: 'Head 9%, each arm 9%, chest 18%, back 18%, each leg 18%, perineum 1%',
    category: 'trauma_assessment',
    subcategory: 'Secondary Survey',
    difficulty: 'Intermediate',
    certificationLevel: 'EMT',
    tags: ['rule of nines', 'burn assessment', 'body surface area']
  },
  {
    id: 'trauma_assess_025',
    question: 'What is pediatric rule of nines modification?',
    answer: 'Head 18%, each leg 14% (larger head, smaller legs than adults)',
    category: 'trauma_assessment',
    subcategory: 'Secondary Survey',
    difficulty: 'Advanced',
    certificationLevel: 'EMT',
    tags: ['pediatric burns', 'rule of nines', 'body proportions']
  },
  {
    id: 'trauma_assess_026',
    question: 'What is tension pneumothorax assessment?',
    answer: 'Severe respiratory distress, absent breath sounds, tracheal deviation, JVD',
    category: 'trauma_assessment',
    subcategory: 'Primary Survey',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['tension pneumothorax', 'tracheal deviation', 'life threat']
  },
  {
    id: 'trauma_assess_027',
    question: 'What is cardiac tamponade assessment?',
    answer: 'Beck\'s triad: JVD, muffled heart sounds, hypotension',
    category: 'trauma_assessment',
    subcategory: 'Primary Survey',
    difficulty: 'Advanced',
    certificationLevel: 'Paramedic',
    tags: ['cardiac tamponade', 'Becks triad', 'chest trauma']
  },
  {
    id: 'trauma_assess_028',
    question: 'What is flail chest assessment?',
    answer: 'Paradoxical chest wall movement, multiple rib fractures, respiratory distress',
    category: 'trauma_assessment',
    subcategory: 'Secondary Survey',
    difficulty: 'Intermediate',
    certificationLevel: 'EMT',
    tags: ['flail chest', 'paradoxical movement', 'rib fractures']
  },
  {
    id: 'trauma_assess_029',
    question: 'What is open pneumothorax assessment?',
    answer: 'Sucking chest wound, air moving in/out of chest wall defect',
    category: 'trauma_assessment',
    subcategory: 'Secondary Survey',
    difficulty: 'Intermediate',
    certificationLevel: 'EMT',
    tags: ['open pneumothorax', 'sucking chest wound', 'chest wall defect']
  },
  {
    id: 'trauma_assess_030',
    question: 'What is massive hemothorax assessment?',
    answer: 'Severe respiratory distress, dullness to percussion, absent breath sounds',
    category: 'trauma_assessment',
    subcategory: 'Secondary Survey',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['massive hemothorax', 'blood in chest', 'respiratory distress']
  },
  {
    id: 'trauma_assess_031',
    question: 'What is abdominal trauma assessment?',
    answer: 'Inspect for distension, contusions, penetrations; palpate for tenderness, rigidity',
    category: 'trauma_assessment',
    subcategory: 'Secondary Survey',
    difficulty: 'Intermediate',
    certificationLevel: 'EMT',
    tags: ['abdominal trauma', 'distension', 'rigidity']
  },
  {
    id: 'trauma_assess_032',
    question: 'What is Cullen\'s sign?',
    answer: 'Bluish discoloration around umbilicus indicating internal bleeding',
    category: 'trauma_assessment',
    subcategory: 'Secondary Survey',
    difficulty: 'Advanced',
    certificationLevel: 'Paramedic',
    tags: ['Cullens sign', 'umbilical bruising', 'internal bleeding']
  },
  {
    id: 'trauma_assess_033',
    question: 'What is Grey Turner\'s sign?',
    answer: 'Bluish discoloration of flanks indicating retroperitoneal bleeding',
    category: 'trauma_assessment',
    subcategory: 'Secondary Survey',
    difficulty: 'Advanced',
    certificationLevel: 'Paramedic',
    tags: ['Grey Turners sign', 'flank bruising', 'retroperitoneal bleeding']
  },
  {
    id: 'trauma_assess_034',
    question: 'What is Kehr\'s sign in trauma?',
    answer: 'Left shoulder pain from splenic injury (referred pain)',
    category: 'trauma_assessment',
    subcategory: 'Secondary Survey',
    difficulty: 'Advanced',
    certificationLevel: 'Paramedic',
    tags: ['Kehrs sign', 'splenic injury', 'referred pain']
  },
  {
    id: 'trauma_assess_035',
    question: 'What is extremity trauma assessment?',
    answer: 'Check pulse, motor, sensation (PMS) before and after splinting',
    category: 'trauma_assessment',
    subcategory: 'Secondary Survey',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['extremity trauma', 'PMS check', 'neurovascular assessment']
  },
  {
    id: 'trauma_assess_036',
    question: 'What is compartment syndrome assessment?',
    answer: '5 P\'s: Pain, Pallor, Paresthesias, Pulselessness, Paralysis',
    category: 'trauma_assessment',
    subcategory: 'Secondary Survey',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['compartment syndrome', '5 Ps', 'neurovascular compromise']
  },
  {
    id: 'trauma_assess_037',
    question: 'What is pelvic fracture assessment?',
    answer: 'Pelvic instability, pain, leg length discrepancy, internal bleeding signs',
    category: 'trauma_assessment',
    subcategory: 'Secondary Survey',
    difficulty: 'Intermediate',
    certificationLevel: 'EMT',
    tags: ['pelvic fracture', 'instability', 'internal bleeding']
  },
  {
    id: 'trauma_assess_038',
    question: 'When should you avoid pelvic manipulation?',
    answer: 'When fracture is suspected - manipulation can worsen bleeding',
    category: 'trauma_assessment',
    subcategory: 'Secondary Survey',
    difficulty: 'Intermediate',
    certificationLevel: 'EMT',
    tags: ['pelvic fracture', 'avoid manipulation', 'bleeding risk']
  },
  {
    id: 'trauma_assess_039',
    question: 'What is trauma center criteria?',
    answer: 'Physiologic, anatomic, and mechanism of injury criteria for transport decisions',
    category: 'trauma_assessment',
    subcategory: 'Trauma Triage',
    difficulty: 'Advanced',
    certificationLevel: 'EMT',
    tags: ['trauma center criteria', 'triage decisions', 'transport']
  },
  {
    id: 'trauma_assess_040',
    question: 'What are physiologic trauma criteria?',
    answer: 'GCS <14, SBP <90, RR <10 or >29, need for airway support',
    category: 'trauma_assessment',
    subcategory: 'Trauma Triage',
    difficulty: 'Advanced',
    certificationLevel: 'EMT',
    tags: ['physiologic criteria', 'vital signs', 'trauma triage']
  },
  {
    id: 'trauma_assess_041',
    question: 'What are anatomic trauma criteria?',
    answer: 'Penetrating trauma, flail chest, multiple long bone fractures, amputation',
    category: 'trauma_assessment',
    subcategory: 'Trauma Triage',
    difficulty: 'Advanced',
    certificationLevel: 'EMT',
    tags: ['anatomic criteria', 'specific injuries', 'trauma center']
  },
  {
    id: 'trauma_assess_042',
    question: 'What is trauma team activation?',
    answer: 'Pre-hospital notification to prepare trauma team for patient arrival',
    category: 'trauma_assessment',
    subcategory: 'Trauma Triage',
    difficulty: 'Intermediate',
    certificationLevel: 'EMT',
    tags: ['trauma activation', 'hospital notification', 'team preparation']
  },
  {
    id: 'trauma_assess_043',
    question: 'What information is included in trauma notification?',
    answer: 'Age, MOI, injuries found, vital signs, ETA, interventions performed',
    category: 'trauma_assessment',
    subcategory: 'Trauma Triage',
    difficulty: 'Intermediate',
    certificationLevel: 'EMT',
    tags: ['trauma notification', 'hospital report', 'patient information']
  },
  {
    id: 'trauma_assess_044',
    question: 'What is multi-system trauma?',
    answer: 'Injuries affecting two or more body systems requiring complex management',
    category: 'trauma_assessment',
    subcategory: 'Rapid Assessment',
    difficulty: 'Advanced',
    certificationLevel: 'EMT',
    tags: ['multi-system trauma', 'multiple injuries', 'complex management']
  },
  {
    id: 'trauma_assess_045',
    question: 'What is the trauma assessment mnemonic AVPU?',
    answer: 'Alert, Verbal response, Painful response, Unresponsive',
    category: 'trauma_assessment',
    subcategory: 'Primary Survey',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['AVPU', 'mental status', 'neurological assessment']
  },
  {
    id: 'trauma_assess_046',
    question: 'What is penetrating trauma assessment?',
    answer: 'Identify entry/exit wounds, assume internal organ damage, control bleeding',
    category: 'trauma_assessment',
    subcategory: 'Secondary Survey',
    difficulty: 'Intermediate',
    certificationLevel: 'EMT',
    tags: ['penetrating trauma', 'entry wound', 'internal damage']
  },
  {
    id: 'trauma_assess_047',
    question: 'What is blunt trauma assessment?',
    answer: 'Look for surface injuries indicating internal damage based on MOI',
    category: 'trauma_assessment',
    subcategory: 'Secondary Survey',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['blunt trauma', 'surface injuries', 'internal damage']
  },
  {
    id: 'trauma_assess_048',
    question: 'What is the importance of scene time in trauma?',
    answer: 'Minimize on-scene time to get patient to definitive care quickly',
    category: 'trauma_assessment',
    subcategory: 'Trauma Triage',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['scene time', 'rapid transport', 'definitive care']
  },
  {
    id: 'trauma_assess_049',
    question: 'What is trauma documentation priority?',
    answer: 'MOI, injuries found, treatments given, patient response, frequent vitals',
    category: 'trauma_assessment',
    subcategory: 'Secondary Survey',
    difficulty: 'Intermediate',
    certificationLevel: 'EMT',
    tags: ['trauma documentation', 'MOI', 'treatment response']
  },
  {
    id: 'trauma_assess_050',
    question: 'What is trauma reassessment frequency?',
    answer: 'Every 5 minutes for unstable patients, every 15 minutes for stable',
    category: 'trauma_assessment',
    subcategory: 'Rapid Assessment',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['trauma reassessment', 'monitoring frequency', 'patient stability']
  },

  // Additional Skeletal System Cards (complete to 50)
  {
    id: 'skel_013',
    question: 'What is the axial skeleton?',
    answer: 'Skull, vertebral column, and rib cage - central supporting structure',
    category: 'skeletal',
    subcategory: 'Bone Structure',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['axial skeleton', 'skull', 'vertebral column']
  },
  {
    id: 'skel_014',
    question: 'What is the appendicular skeleton?',
    answer: 'Arms, legs, pelvis, and shoulder girdle - limbs and their attachments',
    category: 'skeletal',
    subcategory: 'Bone Structure',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['appendicular skeleton', 'limbs', 'pelvis']
  },
  {
    id: 'skel_015',
    question: 'What are the five types of bone?',
    answer: 'Long, short, flat, irregular, and sesamoid bones',
    category: 'skeletal',
    subcategory: 'Bone Structure',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['bone types', 'long bones', 'flat bones']
  },
  {
    id: 'skel_016',
    question: 'What is the longest bone in the body?',
    answer: 'Femur (thighbone)',
    category: 'skeletal',
    subcategory: 'Bone Structure',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['femur', 'longest bone', 'thighbone']
  },
  {
    id: 'skel_017',
    question: 'What is the smallest bone in the body?',
    answer: 'Stapes (in the middle ear)',
    category: 'skeletal',
    subcategory: 'Bone Structure',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['stapes', 'smallest bone', 'middle ear']
  },
  {
    id: 'skel_018',
    question: 'What is a greenstick fracture?',
    answer: 'Incomplete fracture where bone bends and partially breaks (common in children)',
    category: 'skeletal',
    subcategory: 'Fractures',
    difficulty: 'Intermediate',
    certificationLevel: 'EMT',
    tags: ['greenstick fracture', 'pediatric', 'incomplete fracture']
  },
  {
    id: 'skel_019',
    question: 'What is a comminuted fracture?',
    answer: 'Bone is shattered into multiple fragments',
    category: 'skeletal',
    subcategory: 'Fractures',
    difficulty: 'Intermediate',
    certificationLevel: 'EMT',
    tags: ['comminuted fracture', 'multiple fragments', 'shattered bone']
  },
  {
    id: 'skel_020',
    question: 'What is a spiral fracture?',
    answer: 'Twisting injury causing fracture line to spiral around bone',
    category: 'skeletal',
    subcategory: 'Fractures',
    difficulty: 'Intermediate',
    certificationLevel: 'EMT',
    tags: ['spiral fracture', 'twisting injury', 'child abuse']
  },
  {
    id: 'skel_021',
    question: 'What is an avulsion fracture?',
    answer: 'Small piece of bone pulled away by tendon or ligament',
    category: 'skeletal',
    subcategory: 'Fractures',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['avulsion fracture', 'tendon injury', 'bone fragment']
  },
  {
    id: 'skel_022',
    question: 'What is a pathologic fracture?',
    answer: 'Fracture through diseased or weakened bone (cancer, osteoporosis)',
    category: 'skeletal',
    subcategory: 'Fractures',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['pathologic fracture', 'diseased bone', 'osteoporosis']
  },
  {
    id: 'skel_023',
    question: 'What is the difference between osteoblasts and osteoclasts?',
    answer: 'Osteoblasts build bone; osteoclasts break down bone',
    category: 'skeletal',
    subcategory: 'Functions',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['osteoblasts', 'osteoclasts', 'bone remodeling']
  },
  {
    id: 'skel_024',
    question: 'What is the epiphyseal plate?',
    answer: 'Growth plate in long bones where bone lengthening occurs',
    category: 'skeletal',
    subcategory: 'Bone Structure',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['growth plate', 'epiphyseal plate', 'bone growth']
  },
  {
    id: 'skel_025',
    question: 'What is the diaphysis?',
    answer: 'Shaft or main portion of a long bone',
    category: 'skeletal',
    subcategory: 'Bone Structure',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['diaphysis', 'bone shaft', 'long bone anatomy']
  },
  {
    id: 'skel_026',
    question: 'What is the epiphysis?',
    answer: 'End portion of a long bone, contains spongy bone',
    category: 'skeletal',
    subcategory: 'Bone Structure',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['epiphysis', 'bone end', 'spongy bone']
  },
  {
    id: 'skel_027',
    question: 'What is the periosteum?',
    answer: 'Outer membrane covering bone, contains blood vessels and nerves',
    category: 'skeletal',
    subcategory: 'Bone Structure',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['periosteum', 'bone membrane', 'blood supply']
  },
  {
    id: 'skel_028',
    question: 'What is compact bone?',
    answer: 'Dense, hard outer layer of bone providing strength',
    category: 'skeletal',
    subcategory: 'Bone Structure',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['compact bone', 'cortical bone', 'bone strength']
  },
  {
    id: 'skel_029',
    question: 'What is spongy bone?',
    answer: 'Inner trabecular bone with spaces, contains bone marrow',
    category: 'skeletal',
    subcategory: 'Bone Structure',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['spongy bone', 'trabecular bone', 'bone marrow']
  },
  {
    id: 'skel_030',
    question: 'What is a ball and socket joint?',
    answer: 'Joint allowing movement in all directions (hip, shoulder)',
    category: 'skeletal',
    subcategory: 'Joints',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['ball and socket', 'hip joint', 'shoulder joint']
  },
  {
    id: 'skel_031',
    question: 'What is a hinge joint?',
    answer: 'Joint allowing movement in one plane only (knee, elbow)',
    category: 'skeletal',
    subcategory: 'Joints',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['hinge joint', 'knee', 'elbow']
  },
  {
    id: 'skel_032',
    question: 'What is a pivot joint?',
    answer: 'Joint allowing rotational movement (atlas-axis, radioulnar)',
    category: 'skeletal',
    subcategory: 'Joints',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['pivot joint', 'rotation', 'atlas-axis']
  },
  {
    id: 'skel_033',
    question: 'What is synovial fluid?',
    answer: 'Lubricating fluid in joint cavities that reduces friction',
    category: 'skeletal',
    subcategory: 'Joints',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['synovial fluid', 'joint lubrication', 'friction reduction']
  },
  {
    id: 'skel_034',
    question: 'What is arthritis?',
    answer: 'Inflammation of joints causing pain, swelling, and stiffness',
    category: 'skeletal',
    subcategory: 'Joints',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['arthritis', 'joint inflammation', 'pain']
  },
  {
    id: 'skel_035',
    question: 'What is osteoporosis?',
    answer: 'Condition where bones become weak and brittle due to calcium loss',
    category: 'skeletal',
    subcategory: 'Functions',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['osteoporosis', 'bone weakness', 'calcium loss']
  },
  {
    id: 'skel_036',
    question: 'What is rickets?',
    answer: 'Childhood disease causing soft, weak bones due to vitamin D deficiency',
    category: 'skeletal',
    subcategory: 'Functions',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['rickets', 'vitamin D deficiency', 'childhood disease']
  },
  {
    id: 'skel_037',
    question: 'What is lordosis?',
    answer: 'Excessive inward curvature of the lower back (swayback)',
    category: 'skeletal',
    subcategory: 'Bone Structure',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['lordosis', 'spinal curvature', 'swayback']
  },
  {
    id: 'skel_038',
    question: 'What is scoliosis?',
    answer: 'Lateral (sideways) curvature of the spine',
    category: 'skeletal',
    subcategory: 'Bone Structure',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['scoliosis', 'lateral curvature', 'spine']
  },
  {
    id: 'skel_039',
    question: 'What is the sternum?',
    answer: 'Breastbone - flat bone in center of chest protecting heart and lungs',
    category: 'skeletal',
    subcategory: 'Bone Structure',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['sternum', 'breastbone', 'chest protection']
  },
  {
    id: 'skel_040',
    question: 'What is the xiphoid process?',
    answer: 'Lower tip of sternum, landmark for CPR hand placement',
    category: 'skeletal',
    subcategory: 'Bone Structure',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['xiphoid process', 'sternum', 'CPR landmark']
  },
  {
    id: 'skel_041',
    question: 'What is the mandible?',
    answer: 'Lower jaw bone - largest facial bone',
    category: 'skeletal',
    subcategory: 'Bone Structure',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['mandible', 'jaw bone', 'facial bones']
  },
  {
    id: 'skel_042',
    question: 'What is the maxilla?',
    answer: 'Upper jaw bone forming part of eye socket and nasal cavity',
    category: 'skeletal',
    subcategory: 'Bone Structure',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['maxilla', 'upper jaw', 'facial bones']
  },
  {
    id: 'skel_043',
    question: 'What is the hyoid bone?',
    answer: 'U-shaped bone in neck that supports tongue, only bone not connected to others',
    category: 'skeletal',
    subcategory: 'Bone Structure',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['hyoid bone', 'neck', 'tongue support']
  },
  {
    id: 'skel_044',
    question: 'What is the pelvis composed of?',
    answer: 'Two hip bones (ilium, ischium, pubis), sacrum, and coccyx',
    category: 'skeletal',
    subcategory: 'Bone Structure',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['pelvis', 'hip bones', 'sacrum']
  },
  {
    id: 'skel_045',
    question: 'What is the acetabulum?',
    answer: 'Hip socket where femur head articulates with pelvis',
    category: 'skeletal',
    subcategory: 'Joints',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['acetabulum', 'hip socket', 'femur articulation']
  },
  {
    id: 'skel_046',
    question: 'What is the patella?',
    answer: 'Kneecap - largest sesamoid bone, protects knee joint',
    category: 'skeletal',
    subcategory: 'Bone Structure',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['patella', 'kneecap', 'sesamoid bone']
  },
  {
    id: 'skel_047',
    question: 'What are the bones of the forearm?',
    answer: 'Radius (thumb side) and ulna (pinky side)',
    category: 'skeletal',
    subcategory: 'Bone Structure',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['radius', 'ulna', 'forearm bones']
  },
  {
    id: 'skel_048',
    question: 'What are the bones of the lower leg?',
    answer: 'Tibia (larger, weight-bearing) and fibula (smaller, lateral)',
    category: 'skeletal',
    subcategory: 'Bone Structure',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['tibia', 'fibula', 'lower leg bones']
  },
  {
    id: 'skel_049',
    question: 'What is bone remodeling?',
    answer: 'Continuous process of bone breakdown and rebuilding throughout life',
    category: 'skeletal',
    subcategory: 'Functions',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['bone remodeling', 'bone turnover', 'osteoblasts']
  },
  {
    id: 'skel_050',
    question: 'What factors affect bone healing?',
    answer: 'Age, nutrition, blood supply, immobilization, infection, smoking',
    category: 'skeletal',
    subcategory: 'Fractures',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['bone healing', 'fracture recovery', 'healing factors']
  },

  // Shock Management Cards (50 total)
  {
    id: 'shock_001',
    question: 'What is shock?',
    answer: 'Widespread failure of the circulatory system to supply adequate oxygen and nourishment to tissues and organs',
    category: 'shock_management',
    subcategory: 'Hypovolemic',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['shock definition', 'circulatory failure', 'oxygen delivery']
  },
  {
    id: 'shock_002',
    question: 'What are the four main types of shock?',
    answer: 'Hypovolemic, cardiogenic, distributive (septic/anaphylactic/neurogenic), and obstructive',
    category: 'shock_management',
    subcategory: 'Hypovolemic',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['shock types', 'classification', 'four types']
  },
  {
    id: 'shock_003',
    question: 'What causes hypovolemic shock?',
    answer: 'Significant reduction in blood volume from hemorrhage or severe dehydration',
    category: 'shock_management',
    subcategory: 'Hypovolemic',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['hypovolemic shock', 'blood loss', 'dehydration']
  },
  {
    id: 'shock_004',
    question: 'What is the EMT treatment for hypovolemic shock?',
    answer: 'High-flow oxygen, control bleeding, position supine with legs elevated, keep warm, rapid transport',
    category: 'shock_management',
    subcategory: 'Hypovolemic',
    difficulty: 'Intermediate',
    certificationLevel: 'EMT',
    tags: ['EMT scope', 'hypovolemic treatment', 'basic life support']
  },
  {
    id: 'shock_005',
    question: 'What is the AEMT treatment for hypovolemic shock?',
    answer: 'All EMT interventions plus large-bore IV access, normal saline bolus, advanced airway management',
    category: 'shock_management',
    subcategory: 'Hypovolemic',
    difficulty: 'Intermediate',
    certificationLevel: 'AEMT',
    tags: ['AEMT scope', 'IV access', 'fluid resuscitation']
  },
  {
    id: 'shock_006',
    question: 'What is the Paramedic treatment for hypovolemic shock?',
    answer: 'All AEMT interventions plus multiple large-bore IVs, aggressive fluid resuscitation (20ml/kg boluses), vasopressors if needed',
    category: 'shock_management',
    subcategory: 'Hypovolemic',
    difficulty: 'Advanced',
    certificationLevel: 'Paramedic',
    tags: ['paramedic scope', 'aggressive fluids', 'vasopressors']
  },
  {
    id: 'shock_007',
    question: 'What causes cardiogenic shock?',
    answer: 'Heart\'s inability to pump effectively, resulting in inadequate cardiac output',
    category: 'shock_management',
    subcategory: 'Cardiogenic',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['cardiogenic shock', 'heart failure', 'cardiac output']
  },
  {
    id: 'shock_008',
    question: 'Should you give IV fluids in cardiogenic shock?',
    answer: 'NO - IV fluids are contraindicated in cardiogenic shock as they worsen pulmonary edema',
    category: 'shock_management',
    subcategory: 'Cardiogenic',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['cardiogenic shock', 'contraindicated fluids', 'pulmonary edema']
  },
  {
    id: 'shock_009',
    question: 'What is the EMT treatment for cardiogenic shock?',
    answer: 'High-flow oxygen, position sitting up (if conscious), assist with nitroglycerin, rapid transport to cardiac center',
    category: 'shock_management',
    subcategory: 'Cardiogenic',
    difficulty: 'Intermediate',
    certificationLevel: 'EMT',
    tags: ['EMT cardiogenic', 'positioning', 'nitroglycerin']
  },
  {
    id: 'shock_010',
    question: 'What is septic shock?',
    answer: 'Shock from severe infection causing widespread vasodilation and increased capillary permeability',
    category: 'shock_management',
    subcategory: 'Distributive',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['septic shock', 'infection', 'vasodilation']
  },
  {
    id: 'shock_011',
    question: 'What is the initial fluid bolus for septic shock?',
    answer: '30ml/kg of normal saline or lactated ringers',
    category: 'shock_management',
    subcategory: 'Distributive',
    difficulty: 'Advanced',
    certificationLevel: 'Paramedic',
    tags: ['septic shock', 'fluid bolus', '30ml/kg']
  },
  {
    id: 'shock_012',
    question: 'What is anaphylactic shock?',
    answer: 'Severe, life-threatening allergic reaction causing widespread vasodilation and increased vascular permeability',
    category: 'shock_management',
    subcategory: 'Distributive',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['anaphylactic shock', 'allergic reaction', 'vasodilation']
  },
  {
    id: 'shock_013',
    question: 'What is the first-line treatment for anaphylactic shock?',
    answer: 'Epinephrine 0.3mg IM (EpiPen) - remove allergen exposure',
    category: 'shock_management',
    subcategory: 'Distributive',
    difficulty: 'Intermediate',
    certificationLevel: 'EMT',
    tags: ['anaphylaxis', 'epinephrine', 'first-line treatment']
  },
  {
    id: 'shock_014',
    question: 'What is neurogenic shock?',
    answer: 'Shock from loss of sympathetic nervous system control, typically from spinal cord injury',
    category: 'shock_management',
    subcategory: 'Distributive',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['neurogenic shock', 'spinal cord injury', 'sympathetic control']
  },
  {
    id: 'shock_015',
    question: 'What is the classic triad of neurogenic shock?',
    answer: 'Hypotension with bradycardia and neurological deficits',
    category: 'shock_management',
    subcategory: 'Distributive',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['neurogenic shock', 'classic triad', 'bradycardia']
  },
  {
    id: 'shock_016',
    question: 'What causes obstructive shock?',
    answer: 'Physical obstruction of blood flow preventing adequate venous return or cardiac output',
    category: 'shock_management',
    subcategory: 'Obstructive',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['obstructive shock', 'blood flow obstruction', 'venous return']
  },
  {
    id: 'shock_017',
    question: 'What is Beck\'s triad?',
    answer: 'JVD (jugular vein distention), muffled heart sounds, and hypotension - seen in cardiac tamponade',
    category: 'shock_management',
    subcategory: 'Obstructive',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['Beck\'s triad', 'cardiac tamponade', 'JVD']
  },
  {
    id: 'shock_018',
    question: 'What are the signs of tension pneumothorax?',
    answer: 'Severe respiratory distress, absent breath sounds on affected side, tracheal deviation, hypotension',
    category: 'shock_management',
    subcategory: 'Obstructive',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['tension pneumothorax', 'tracheal deviation', 'absent breath sounds']
  },
  {
    id: 'shock_019',
    question: 'What is the Paramedic treatment for tension pneumothorax?',
    answer: 'Needle decompression at 2nd intercostal space, midclavicular line',
    category: 'shock_management',
    subcategory: 'Obstructive',
    difficulty: 'Advanced',
    certificationLevel: 'Paramedic',
    tags: ['needle decompression', '2nd ICS', 'midclavicular line']
  },
  {
    id: 'shock_020',
    question: 'What are the early signs of compensated shock?',
    answer: 'Tachycardia, normal to slightly decreased BP, pale/cool/clammy skin, anxiety',
    category: 'shock_management',
    subcategory: 'Hypovolemic',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['compensated shock', 'early signs', 'tachycardia']
  },
  {
    id: 'shock_021',
    question: 'What are the late signs of decompensated shock?',
    answer: 'Severe hypotension, weak thready pulse, altered mental status, mottled skin, delayed capillary refill',
    category: 'shock_management',
    subcategory: 'Hypovolemic',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['decompensated shock', 'late signs', 'hypotension']
  },
  {
    id: 'shock_022',
    question: 'What is the appropriate IV gauge for hypovolemic shock?',
    answer: '14-16 gauge large-bore catheters for maximum flow rate',
    category: 'shock_management',
    subcategory: 'Hypovolemic',
    difficulty: 'Intermediate',
    certificationLevel: 'AEMT',
    tags: ['IV gauge', 'large-bore', 'flow rate']
  },
  {
    id: 'shock_023',
    question: 'What is the fluid bolus amount for pediatric shock?',
    answer: '20ml/kg normal saline or lactated ringers, reassess after each bolus',
    category: 'shock_management',
    subcategory: 'Hypovolemic',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['pediatric shock', '20ml/kg', 'fluid bolus']
  },
  {
    id: 'shock_024',
    question: 'What causes warm shock in sepsis?',
    answer: 'Early septic shock with vasodilation causing warm, flushed skin despite hypotension',
    category: 'shock_management',
    subcategory: 'Distributive',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['warm shock', 'sepsis', 'vasodilation']
  },
  {
    id: 'shock_025',
    question: 'What causes cold shock in sepsis?',
    answer: 'Late septic shock with vasoconstriction causing cool, mottled skin and severe hypotension',
    category: 'shock_management',
    subcategory: 'Distributive',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['cold shock', 'sepsis', 'vasoconstriction']
  },
  {
    id: 'shock_026',
    question: 'What is the correct epinephrine dose for severe anaphylaxis?',
    answer: 'EMT: 0.3mg IM; Paramedic: 0.1mg IV push for severe cases',
    category: 'shock_management',
    subcategory: 'Distributive',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['epinephrine dosing', 'anaphylaxis', 'IM vs IV']
  },
  {
    id: 'shock_027',
    question: 'What adjunct medications are used for anaphylaxis?',
    answer: 'Diphenhydramine (Benadryl) 25-50mg IV/IM, methylprednisolone (Solu-Medrol) 125mg IV',
    category: 'shock_management',
    subcategory: 'Distributive',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['anaphylaxis adjuncts', 'Benadryl', 'Solu-Medrol']
  },
  {
    id: 'shock_028',
    question: 'What causes priapism in neurogenic shock?',
    answer: 'Loss of sympathetic control causing unopposed parasympathetic stimulation',
    category: 'shock_management',
    subcategory: 'Distributive',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['priapism', 'neurogenic shock', 'parasympathetic']
  },
  {
    id: 'shock_029',
    question: 'What medication treats bradycardia in neurogenic shock?',
    answer: 'Atropine 0.5-1mg IV for severe bradycardia',
    category: 'shock_management',
    subcategory: 'Distributive',
    difficulty: 'Advanced',
    certificationLevel: 'Paramedic',
    tags: ['atropine', 'neurogenic bradycardia', 'parasympathetic blockade']
  },
  {
    id: 'shock_030',
    question: 'What is pulsus paradoxus?',
    answer: 'Systolic BP drop >10mmHg during inspiration, seen in cardiac tamponade',
    category: 'shock_management',
    subcategory: 'Obstructive',
    difficulty: 'Advanced',
    certificationLevel: 'Paramedic',
    tags: ['pulsus paradoxus', 'cardiac tamponade', 'blood pressure']
  },
  {
    id: 'shock_031',
    question: 'Where do you perform needle decompression?',
    answer: '2nd intercostal space, midclavicular line on affected side',
    category: 'shock_management',
    subcategory: 'Obstructive',
    difficulty: 'Advanced',
    certificationLevel: 'Paramedic',
    tags: ['needle decompression', '2nd ICS', 'tension pneumothorax']
  },
  {
    id: 'shock_032',
    question: 'What size needle is used for decompression?',
    answer: '14-gauge needle, at least 3.25 inches long',
    category: 'shock_management',
    subcategory: 'Obstructive',
    difficulty: 'Advanced',
    certificationLevel: 'Paramedic',
    tags: ['needle decompression', '14-gauge', 'needle length']
  },
  {
    id: 'shock_033',
    question: 'What are common vasopressor medications?',
    answer: 'Dopamine, norepinephrine (Levophed), epinephrine, vasopressin',
    category: 'shock_management',
    subcategory: 'Cardiogenic',
    difficulty: 'Advanced',
    certificationLevel: 'Paramedic',
    tags: ['vasopressors', 'dopamine', 'norepinephrine']
  },
  {
    id: 'shock_034',
    question: 'What is the dopamine dose range?',
    answer: '2-20 mcg/kg/min IV infusion (dose-dependent effects)',
    category: 'shock_management',
    subcategory: 'Cardiogenic',
    difficulty: 'Advanced',
    certificationLevel: 'Paramedic',
    tags: ['dopamine dosing', 'mcg/kg/min', 'dose-dependent']
  },
  {
    id: 'shock_035',
    question: 'What causes massive pulmonary embolism shock?',
    answer: 'Large clot blocking major pulmonary vessels, preventing venous return',
    category: 'shock_management',
    subcategory: 'Obstructive',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['pulmonary embolism', 'clot', 'venous return']
  },
  {
    id: 'shock_036',
    question: 'What is the shock index?',
    answer: 'Heart rate divided by systolic BP; normal <0.9, shock >1.0',
    category: 'shock_management',
    subcategory: 'Hypovolemic',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['shock index', 'HR/SBP ratio', 'assessment tool']
  },
  {
    id: 'shock_037',
    question: 'What IV fluid is preferred for trauma shock?',
    answer: 'Lactated Ringers (most physiologic) or Normal Saline',
    category: 'shock_management',
    subcategory: 'Hypovolemic',
    difficulty: 'Intermediate',
    certificationLevel: 'AEMT',
    tags: ['IV fluids', 'lactated ringers', 'trauma']
  },
  {
    id: 'shock_038',
    question: 'What is permissive hypotension?',
    answer: 'Controlled fluid resuscitation maintaining SBP 80-90mmHg to prevent re-bleeding',
    category: 'shock_management',
    subcategory: 'Hypovolemic',
    difficulty: 'Advanced',
    certificationLevel: 'Paramedic',
    tags: ['permissive hypotension', 'controlled resuscitation', 'trauma']
  },
  {
    id: 'shock_039',
    question: 'What are the ABCs of shock management?',
    answer: 'Airway, Breathing, Circulation - address in order of priority',
    category: 'shock_management',
    subcategory: 'Hypovolemic',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['ABCs', 'primary assessment', 'priority']
  },
  {
    id: 'shock_040',
    question: 'When should you consider helicopter transport?',
    answer: 'Severe shock, remote location >30 minutes from trauma center, need for specialized care',
    category: 'shock_management',
    subcategory: 'Hypovolemic',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['helicopter transport', 'trauma center', 'specialized care']
  },
  {
    id: 'shock_041',
    question: 'What is the definition of refractory shock?',
    answer: 'Shock that does not respond to standard fluid resuscitation and vasopressor therapy',
    category: 'shock_management',
    subcategory: 'Cardiogenic',
    difficulty: 'Advanced',
    certificationLevel: 'Paramedic',
    tags: ['refractory shock', 'non-responsive', 'advanced therapy']
  },
  {
    id: 'shock_042',
    question: 'What position is best for cardiogenic shock?',
    answer: 'High Fowlers (sitting up) to reduce venous return and decrease preload',
    category: 'shock_management',
    subcategory: 'Cardiogenic',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['positioning', 'high fowlers', 'reduce preload']
  },
  {
    id: 'shock_043',
    question: 'What is the main cause of death in anaphylactic shock?',
    answer: 'Upper airway obstruction from laryngeal edema',
    category: 'shock_management',
    subcategory: 'Distributive',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['anaphylaxis death', 'airway obstruction', 'laryngeal edema']
  },
  {
    id: 'shock_044',
    question: 'What are the contraindications to MAST/PASG?',
    answer: 'Pregnancy, abdominal injury, chest injury, head injury',
    category: 'shock_management',
    subcategory: 'Hypovolemic',
    difficulty: 'Advanced',
    certificationLevel: 'EMT',
    tags: ['MAST contraindications', 'PASG', 'pregnancy']
  },
  {
    id: 'shock_045',
    question: 'What is distributive shock?',
    answer: 'Shock caused by massive vasodilation leading to relative hypovolemia',
    category: 'shock_management',
    subcategory: 'Distributive',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['distributive shock', 'vasodilation', 'relative hypovolemia']
  },
  {
    id: 'shock_046',
    question: 'What are the signs of tension pneumothorax?',
    answer: 'Absent breath sounds, tracheal deviation, JVD, severe dyspnea, shock',
    category: 'shock_management',
    subcategory: 'Obstructive',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['tension pneumo signs', 'tracheal deviation', 'absent sounds']
  },
  {
    id: 'shock_047',
    question: 'What is the goal of shock treatment?',
    answer: 'Restore adequate tissue perfusion and oxygen delivery',
    category: 'shock_management',
    subcategory: 'Hypovolemic',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['treatment goal', 'tissue perfusion', 'oxygen delivery']
  },
  {
    id: 'shock_048',
    question: 'What are the stages of shock progression?',
    answer: 'Compensated → Decompensated → Irreversible',
    category: 'shock_management',
    subcategory: 'Hypovolemic',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['shock stages', 'progression', 'compensated']
  },
  {
    id: 'shock_049',
    question: 'What is the best predictor of shock in children?',
    answer: 'Tachycardia and altered mental status (hypotension is a late sign)',
    category: 'shock_management',
    subcategory: 'Hypovolemic',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['pediatric shock', 'tachycardia', 'late hypotension']
  },
  {
    id: 'shock_050',
    question: 'What is the universal shock protocol?',
    answer: 'ABC assessment, high-flow oxygen, IV access, fluid/medication per type, rapid transport',
    category: 'shock_management',
    subcategory: 'Hypovolemic',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['universal protocol', 'ABC assessment', 'systematic approach']
  },

  // Respiratory Emergency Cards (50 total)
  {
    id: 'resp_001',
    question: 'What is the difference between respiratory distress and respiratory failure?',
    answer: 'Distress: Working harder to breathe but maintaining adequate oxygenation. Failure: Cannot maintain adequate oxygenation/ventilation despite increased work',
    category: 'respiratory_emergencies',
    subcategory: 'Assessment',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['respiratory distress', 'respiratory failure', 'assessment']
  },
  {
    id: 'resp_002',
    question: 'What causes asthma bronchospasm?',
    answer: 'Bronchial smooth muscle contraction, airway inflammation and edema, increased mucus secretion',
    category: 'respiratory_emergencies',
    subcategory: 'Asthma',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['asthma', 'bronchospasm', 'pathophysiology']
  },
  {
    id: 'resp_003',
    question: 'What is silent chest in asthma?',
    answer: 'Absence of wheezing due to severe airway obstruction - indicates near-fatal asthma requiring immediate intervention',
    category: 'respiratory_emergencies',
    subcategory: 'Asthma',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['silent chest', 'near-fatal asthma', 'critical sign']
  },
  {
    id: 'resp_004',
    question: 'What is the EMT treatment for asthma?',
    answer: 'Position of comfort (usually sitting), high-flow oxygen 15L NRB, assist with prescribed inhaler, calm patient',
    category: 'respiratory_emergencies',
    subcategory: 'Asthma',
    difficulty: 'Intermediate',
    certificationLevel: 'EMT',
    tags: ['EMT scope', 'asthma treatment', 'positioning']
  },
  {
    id: 'resp_005',
    question: 'What is the AEMT treatment for asthma?',
    answer: 'All EMT interventions plus albuterol 2.5mg nebulized, CPAP 5-10cmH2O, IV access',
    category: 'respiratory_emergencies',
    subcategory: 'Asthma',
    difficulty: 'Intermediate',
    certificationLevel: 'AEMT',
    tags: ['AEMT scope', 'albuterol', 'CPAP']
  },
  {
    id: 'resp_006',
    question: 'What is the Paramedic treatment for severe asthma?',
    answer: 'All AEMT interventions plus ipratropium 0.5mg, magnesium sulfate 2g IV, methylprednisolone 125mg IV, epinephrine 0.3mg IM for near-fatal',
    category: 'respiratory_emergencies',
    subcategory: 'Asthma',
    difficulty: 'Advanced',
    certificationLevel: 'Paramedic',
    tags: ['paramedic scope', 'ipratropium', 'magnesium']
  },
  {
    id: 'resp_007',
    question: 'What is COPD exacerbation?',
    answer: 'Worsening of chronic bronchitis/emphysema with increased dyspnea, change in sputum, increased cough, often triggered by infection',
    category: 'respiratory_emergencies',
    subcategory: 'COPD',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['COPD exacerbation', 'chronic bronchitis', 'emphysema']
  },
  {
    id: 'resp_008',
    question: 'Should you give high-flow oxygen to COPD patients?',
    answer: 'YES - Give high-flow oxygen for COPD patients in respiratory distress. Hypoxic drive theory has been debunked',
    category: 'respiratory_emergencies',
    subcategory: 'COPD',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['COPD oxygen', 'high-flow oxygen', 'hypoxic drive myth']
  },
  {
    id: 'resp_009',
    question: 'What is acute pulmonary edema?',
    answer: 'Fluid accumulation in lungs due to heart failure causing impaired gas exchange and pink frothy sputum',
    category: 'respiratory_emergencies',
    subcategory: 'CHF',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['pulmonary edema', 'heart failure', 'pink frothy sputum']
  },
  {
    id: 'resp_010',
    question: 'What position is best for CHF patients?',
    answer: 'Sitting upright with legs dependent to reduce venous return and decrease preload',
    category: 'respiratory_emergencies',
    subcategory: 'CHF',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['CHF positioning', 'reduce preload', 'sitting upright']
  },
  {
    id: 'resp_011',
    question: 'What is the standard of care for CHF patients?',
    answer: 'CPAP (Continuous Positive Airway Pressure) - dramatically improves outcomes',
    category: 'respiratory_emergencies',
    subcategory: 'CHF',
    difficulty: 'Intermediate',
    certificationLevel: 'AEMT',
    tags: ['CPAP', 'CHF standard care', 'positive pressure']
  },
  {
    id: 'resp_012',
    question: 'What medications can Paramedics give for CHF?',
    answer: 'Furosemide (Lasix) 40-80mg IV, nitroglycerin IV drip, morphine 2-4mg IV if hypertensive',
    category: 'respiratory_emergencies',
    subcategory: 'CHF',
    difficulty: 'Advanced',
    certificationLevel: 'Paramedic',
    tags: ['furosemide', 'nitroglycerin', 'CHF medications']
  },
  {
    id: 'resp_013',
    question: 'What is tension pneumothorax?',
    answer: 'Progressive air accumulation in pleural space causing lung collapse and cardiovascular compromise',
    category: 'respiratory_emergencies',
    subcategory: 'Pneumothorax',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['tension pneumothorax', 'pleural space', 'cardiovascular compromise']
  },
  {
    id: 'resp_014',
    question: 'What are the signs of tension pneumothorax?',
    answer: 'Severe respiratory distress, absent breath sounds, tracheal deviation, JVD, hypotension',
    category: 'respiratory_emergencies',
    subcategory: 'Pneumothorax',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['tension pneumo signs', 'tracheal deviation', 'absent sounds']
  },
  {
    id: 'resp_015',
    question: 'Where do you perform needle decompression?',
    answer: '2nd intercostal space, midclavicular line on affected side using 14-gauge needle, at least 3.25 inches long',
    category: 'respiratory_emergencies',
    subcategory: 'Pneumothorax',
    difficulty: 'Advanced',
    certificationLevel: 'Paramedic',
    tags: ['needle decompression', '2nd ICS', 'midclavicular']
  },
  {
    id: 'resp_016',
    question: 'What is pulmonary embolism?',
    answer: 'Blockage of pulmonary arteries by blood clots, causing sudden dyspnea, chest pain, and hypoxemia',
    category: 'respiratory_emergencies',
    subcategory: 'Pulmonary Embolism',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['pulmonary embolism', 'blood clots', 'sudden dyspnea']
  },
  {
    id: 'resp_017',
    question: 'What are classic PE risk factors?',
    answer: 'Recent surgery/immobilization, pregnancy, oral contraceptives, malignancy, DVT history',
    category: 'respiratory_emergencies',
    subcategory: 'Pulmonary Embolism',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['PE risk factors', 'surgery', 'immobilization']
  },
  {
    id: 'resp_018',
    question: 'What is pneumonia?',
    answer: 'Infection of lung parenchyma causing inflammation and fluid accumulation in alveoli',
    category: 'respiratory_emergencies',
    subcategory: 'Pneumonia',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['pneumonia', 'lung infection', 'alveoli']
  },
  {
    id: 'resp_019',
    question: 'What are pneumonia signs and symptoms?',
    answer: 'Fever, chills, productive cough with purulent sputum, dyspnea, chest pain, crackles',
    category: 'respiratory_emergencies',
    subcategory: 'Pneumonia',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['pneumonia symptoms', 'fever', 'productive cough']
  },
  {
    id: 'resp_020',
    question: 'What is croup?',
    answer: 'Viral laryngotracheobronchitis causing barking cough, inspiratory stridor, hoarse voice in children',
    category: 'respiratory_emergencies',
    subcategory: 'Pediatric',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['croup', 'barking cough', 'pediatric']
  },
  {
    id: 'resp_021',
    question: 'What is the treatment for croup?',
    answer: 'Cool mist, racemic epinephrine nebulized, dexamethasone 0.6mg/kg PO/IV',
    category: 'respiratory_emergencies',
    subcategory: 'Pediatric',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['croup treatment', 'cool mist', 'racemic epinephrine']
  },
  {
    id: 'resp_022',
    question: 'What is epiglottitis?',
    answer: 'Bacterial infection causing epiglottal swelling with high fever, drooling, tripod positioning, muffled voice',
    category: 'respiratory_emergencies',
    subcategory: 'Pediatric',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['epiglottitis', 'drooling', 'tripod position']
  },
  {
    id: 'resp_023',
    question: 'What should you NEVER do with epiglottitis?',
    answer: 'DO NOT examine the throat - can cause complete airway obstruction. Keep child calm, transport immediately',
    category: 'respiratory_emergencies',
    subcategory: 'Pediatric',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['epiglottitis contraindication', 'throat exam', 'airway obstruction']
  },
  {
    id: 'resp_024',
    question: 'What is bronchiolitis?',
    answer: 'Viral infection (usually RSV) causing wheezing, fine crackles, fever in infants and toddlers',
    category: 'respiratory_emergencies',
    subcategory: 'Pediatric',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['bronchiolitis', 'RSV', 'wheezing']
  },
  {
    id: 'resp_025',
    question: 'What are CPAP indications?',
    answer: 'CHF with pulmonary edema, COPD exacerbation, pneumonia with hypoxemic respiratory failure, selected asthma cases',
    category: 'respiratory_emergencies',
    subcategory: 'CPAP',
    difficulty: 'Intermediate',
    certificationLevel: 'AEMT',
    tags: ['CPAP indications', 'pulmonary edema', 'hypoxemic failure']
  },
  {
    id: 'resp_026',
    question: 'What are CPAP contraindications?',
    answer: 'Respiratory arrest, vomiting, upper airway obstruction, facial trauma, pneumothorax, hemodynamic instability',
    category: 'respiratory_emergencies',
    subcategory: 'CPAP',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['CPAP contraindications', 'respiratory arrest', 'facial trauma']
  },
  {
    id: 'resp_027',
    question: 'What are normal CPAP settings?',
    answer: 'Pressure: 5-10 cmH2O (start low, titrate up), FiO2: 21-100% as needed',
    category: 'respiratory_emergencies',
    subcategory: 'CPAP',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['CPAP settings', '5-10 cmH2O', 'titrate pressure']
  },
  {
    id: 'resp_028',
    question: 'What oxygen delivery device provides the highest FiO2?',
    answer: 'Non-rebreather mask at 15L provides 80-95% FiO2',
    category: 'respiratory_emergencies',
    subcategory: 'Oxygen Delivery',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['oxygen delivery', 'non-rebreather', 'highest FiO2']
  },
  {
    id: 'resp_029',
    question: 'What FiO2 does nasal cannula provide?',
    answer: '1-6L provides 24-44% FiO2 (approximately 4% increase per liter)',
    category: 'respiratory_emergencies',
    subcategory: 'Oxygen Delivery',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['nasal cannula', '24-44% FiO2', 'oxygen percentage']
  },
  {
    id: 'resp_030',
    question: 'What are signs of impending respiratory failure?',
    answer: 'Altered mental status, inability to speak in full sentences, accessory muscle use, paradoxical breathing, bradycardia',
    category: 'respiratory_emergencies',
    subcategory: 'Assessment',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['respiratory failure signs', 'altered mental status', 'bradycardia']
  },
  {
    id: 'resp_031',
    question: 'What is the difference between inspiratory and expiratory stridor?',
    answer: 'Inspiratory stridor: Upper airway obstruction (croup, epiglottitis). Expiratory stridor: Lower airway obstruction (asthma)',
    category: 'respiratory_emergencies',
    subcategory: 'Assessment',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['stridor types', 'inspiratory', 'expiratory']
  },
  {
    id: 'resp_032',
    question: 'What is tripod positioning?',
    answer: 'Sitting upright, leaning forward with hands on knees - indicates severe respiratory distress',
    category: 'respiratory_emergencies',
    subcategory: 'Assessment',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['tripod position', 'respiratory distress', 'positioning']
  },
  {
    id: 'resp_033',
    question: 'What are normal respiratory rates by age?',
    answer: 'Newborn: 30-60, Infant: 20-30, Child: 15-25, Adult: 12-20 breaths per minute',
    category: 'respiratory_emergencies',
    subcategory: 'Assessment',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['respiratory rates', 'age groups', 'normal values']
  },
  {
    id: 'resp_034',
    question: 'What medication opens bronchi in asthma/COPD?',
    answer: 'Albuterol (beta-2 agonist) 2.5mg nebulized - first-line bronchodilator',
    category: 'respiratory_emergencies',
    subcategory: 'Medications',
    difficulty: 'Intermediate',
    certificationLevel: 'AEMT',
    tags: ['albuterol', 'bronchodilator', 'beta-2 agonist']
  },
  {
    id: 'resp_035',
    question: 'What is ipratropium bromide?',
    answer: 'Anticholinergic bronchodilator (0.5mg nebulized) - combined with albuterol for severe bronchospasm',
    category: 'respiratory_emergencies',
    subcategory: 'Medications',
    difficulty: 'Advanced',
    certificationLevel: 'Paramedic',
    tags: ['ipratropium', 'anticholinergic', 'combination therapy']
  },
  {
    id: 'resp_036',
    question: 'What is magnesium sulfate used for?',
    answer: 'Severe bronchospasm in asthma - 2g IV over 20 minutes (smooth muscle relaxation)',
    category: 'respiratory_emergencies',
    subcategory: 'Medications',
    difficulty: 'Advanced',
    certificationLevel: 'Paramedic',
    tags: ['magnesium sulfate', 'severe bronchospasm', 'smooth muscle']
  },
  {
    id: 'resp_037',
    question: 'What steroid is given for respiratory emergencies?',
    answer: 'Methylprednisolone (Solu-Medrol) 125mg IV - reduces inflammation in asthma/COPD',
    category: 'respiratory_emergencies',
    subcategory: 'Medications',
    difficulty: 'Advanced',
    certificationLevel: 'AEMT',
    tags: ['methylprednisolone', 'steroids', 'anti-inflammatory']
  },
  {
    id: 'resp_038',
    question: 'What are V/Q mismatches?',
    answer: 'Ventilation/Perfusion mismatches - areas of lung with poor airflow relative to blood flow (shunt) or vice versa (dead space)',
    category: 'respiratory_emergencies',
    subcategory: 'Physiology',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['V/Q mismatch', 'shunt', 'dead space']
  },
  {
    id: 'resp_039',
    question: 'What is the difference between hypoxia and hypoxemia?',
    answer: 'Hypoxemia: Low oxygen in blood (SpO2 <90%). Hypoxia: Inadequate oxygen delivery to tissues',
    category: 'respiratory_emergencies',
    subcategory: 'Physiology',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['hypoxia', 'hypoxemia', 'oxygen delivery']
  },
  {
    id: 'resp_040',
    question: 'When should you consider helicopter transport?',
    answer: 'Respiratory failure, remote location >30 minutes from hospital, need for specialized respiratory care',
    category: 'respiratory_emergencies',
    subcategory: 'Transport',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['helicopter transport', 'respiratory failure', 'specialized care']
  },
  {
    id: 'resp_041',
    question: 'What is the goal of respiratory emergency treatment?',
    answer: 'Maintain adequate oxygenation and ventilation, reduce work of breathing, treat underlying cause',
    category: 'respiratory_emergencies',
    subcategory: 'Treatment Goals',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['treatment goals', 'oxygenation', 'work of breathing']
  },
  {
    id: 'resp_042',
    question: 'What is pursed-lip breathing?',
    answer: 'Breathing technique seen in COPD patients - exhaling through pursed lips to maintain airway pressure and prevent collapse',
    category: 'respiratory_emergencies',
    subcategory: 'COPD',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['pursed-lip breathing', 'COPD', 'airway pressure']
  },
  {
    id: 'resp_043',
    question: 'What is orthopnea?',
    answer: 'Difficulty breathing when lying flat - classic sign of CHF requiring upright positioning',
    category: 'respiratory_emergencies',
    subcategory: 'CHF',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['orthopnea', 'CHF', 'lying flat']
  },
  {
    id: 'resp_044',
    question: 'What is paroxysmal nocturnal dyspnea?',
    answer: 'Sudden awakening with severe shortness of breath - early sign of CHF',
    category: 'respiratory_emergencies',
    subcategory: 'CHF',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['PND', 'nocturnal dyspnea', 'CHF early sign']
  },
  {
    id: 'resp_045',
    question: 'What is the best predictor of asthma severity?',
    answer: 'Ability to speak in full sentences - inability indicates severe distress',
    category: 'respiratory_emergencies',
    subcategory: 'Asthma',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['asthma severity', 'speech assessment', 'severe distress']
  },
  {
    id: 'resp_046',
    question: 'What is pulsus paradoxus?',
    answer: 'Systolic BP drop >10mmHg during inspiration - seen in severe asthma and cardiac tamponade',
    category: 'respiratory_emergencies',
    subcategory: 'Assessment',
    difficulty: 'Advanced',
    certificationLevel: 'Paramedic',
    tags: ['pulsus paradoxus', 'severe asthma', 'blood pressure']
  },
  {
    id: 'resp_047',
    question: 'What are accessory muscles of respiration?',
    answer: 'Neck muscles (SCM, scalenes), intercostal muscles, abdominal muscles - used when respiratory distress increases work of breathing',
    category: 'respiratory_emergencies',
    subcategory: 'Assessment',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['accessory muscles', 'SCM', 'increased work']
  },
  {
    id: 'resp_048',
    question: 'What causes barrel chest in COPD?',
    answer: 'Air trapping and hyperinflation causing increased anterior-posterior chest diameter',
    category: 'respiratory_emergencies',
    subcategory: 'COPD',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['barrel chest', 'air trapping', 'hyperinflation']
  },
  {
    id: 'resp_049',
    question: 'What is the universal airway management approach?',
    answer: 'Head-tilt chin-lift (or jaw-thrust if trauma), clear airway, assess breathing, provide oxygen as needed',
    category: 'respiratory_emergencies',
    subcategory: 'Airway Management',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['airway management', 'head-tilt chin-lift', 'universal approach']
  },
  {
    id: 'resp_050',
    question: 'What are the ABCs of respiratory emergency assessment?',
    answer: 'Airway (patent/compromised), Breathing (rate/depth/effort), Circulation (pulse/perfusion) - systematic approach',
    category: 'respiratory_emergencies',
    subcategory: 'Assessment',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['ABCs', 'systematic assessment', 'respiratory emergencies']
  },

  // Trauma & Bleeding Emergency Cards (50 total)
  {
    id: 'trauma_001',
    question: 'What is the Golden Hour principle in trauma?',
    answer: 'Critical trauma patients need definitive care within one hour of injury for best survival outcomes',
    category: 'trauma_bleeding',
    subcategory: 'General Principles',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['golden hour', 'trauma principles', 'critical care']
  },
  {
    id: 'trauma_002',
    question: 'What is the maximum scene time for critical trauma patients?',
    answer: '10 minutes or less - focus on rapid assessment, bleeding control, and transport',
    category: 'trauma_bleeding',
    subcategory: 'General Principles',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['scene time', 'critical patients', 'rapid transport']
  },
  {
    id: 'trauma_003',
    question: 'What is the correct order for external bleeding control?',
    answer: '1. Direct pressure (5+ min), 2. Pressure dressing, 3. Tourniquet, 4. Hemostatic dressing/wound packing',
    category: 'trauma_bleeding',
    subcategory: 'Bleeding Control',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['bleeding control', 'hemorrhage management', 'priority order']
  },
  {
    id: 'trauma_004',
    question: 'How do you distinguish arterial from venous bleeding?',
    answer: 'Arterial: bright red, spurts with pulse, difficult control. Venous: dark red, steady flow, easier control',
    category: 'trauma_bleeding',
    subcategory: 'Bleeding Control',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['arterial bleeding', 'venous bleeding', 'bleeding types']
  },
  {
    id: 'trauma_005',
    question: 'What are the three collisions in motor vehicle crashes?',
    answer: '1. Vehicle vs object, 2. Passenger vs interior, 3. Organs vs body structures (most dangerous)',
    category: 'trauma_bleeding',
    subcategory: 'Mechanism of Injury',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['motor vehicle crash', 'three collisions', 'mechanism of injury']
  },
  {
    id: 'trauma_006',
    question: 'Which type of motor vehicle crash is most lethal?',
    answer: 'Lateral (side-impact) crashes - highest risk of chest, abdominal, and pelvic injuries',
    category: 'trauma_bleeding',
    subcategory: 'Mechanism of Injury',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['lateral crash', 'side impact', 'lethal injuries']
  },
  {
    id: 'trauma_007',
    question: 'What are signs of internal bleeding?',
    answer: 'Early: pain, swelling, hematoma, bleeding from openings. Late: tachycardia, weak pulse, cool/clammy skin, altered mental status',
    category: 'trauma_bleeding',
    subcategory: 'Internal Bleeding',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['internal bleeding', 'hemorrhage signs', 'shock signs']
  },
  {
    id: 'trauma_008',
    question: 'What is the body\'s tolerance limit for blood loss?',
    answer: '20% blood loss (approximately 2 pints) - beyond this, shock develops rapidly',
    category: 'trauma_bleeding',
    subcategory: 'Internal Bleeding',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['blood loss', '20 percent rule', 'shock threshold']
  },
  {
    id: 'trauma_009',
    question: 'When should tourniquets be used?',
    answer: 'Severe extremity bleeding only, applied above bleeding site, avoid joints, never for closed injuries',
    category: 'trauma_bleeding',
    subcategory: 'Bleeding Control',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['tourniquet', 'extremity bleeding', 'hemorrhage control']
  },
  {
    id: 'trauma_010',
    question: 'What must you document when applying a tourniquet?',
    answer: 'Application time - critical for hospital handoff and preventing tissue death',
    category: 'trauma_bleeding',
    subcategory: 'Bleeding Control',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['tourniquet time', 'documentation', 'tissue preservation']
  },
  {
    id: 'trauma_011',
    question: 'What are high-risk mechanism of injury indicators?',
    answer: 'Death of occupant, severe vehicle deformity, ejection, falls >20 feet, pedestrian thrown/dragged',
    category: 'trauma_bleeding',
    subcategory: 'Mechanism of Injury',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['high-risk MOI', 'trauma indicators', 'injury prediction']
  },
  {
    id: 'trauma_012',
    question: 'What is the difference between temporary and permanent cavitation?',
    answer: 'Temporary: tissue stretching from pressure wave. Permanent: lasting damage along bullet path',
    category: 'trauma_bleeding',
    subcategory: 'Penetrating Trauma',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['cavitation', 'bullet wounds', 'tissue damage']
  },
  {
    id: 'trauma_013',
    question: 'What are the four mechanisms of blast injuries?',
    answer: '1. Primary: pressure wave, 2. Secondary: flying debris, 3. Tertiary: body thrown, 4. Quaternary: burns/toxic gases',
    category: 'trauma_bleeding',
    subcategory: 'Blast Injuries',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['blast injuries', 'explosion trauma', 'multiple mechanisms']
  },
  {
    id: 'trauma_014',
    question: 'Which organs are most vulnerable in blast injuries?',
    answer: 'Air-containing organs: ears, lungs, and GI tract - susceptible to pressure wave damage',
    category: 'trauma_bleeding',
    subcategory: 'Blast Injuries',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['blast vulnerable organs', 'pressure wave', 'air-containing organs']
  },
  {
    id: 'trauma_015',
    question: 'What is DCAP-BTLS used for?',
    answer: 'Systematic trauma assessment: Deformities, Contusions, Abrasions, Punctures, Burns, Tenderness, Lacerations, Swelling',
    category: 'trauma_bleeding',
    subcategory: 'Assessment',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['DCAP-BTLS', 'trauma assessment', 'systematic exam']
  },
  {
    id: 'trauma_016',
    question: 'What are rapid transport criteria for trauma?',
    answer: 'Dangerous MOI, decreased LOC, ABC threats, signs of shock, uncontrolled bleeding, extremes of age',
    category: 'trauma_bleeding',
    subcategory: 'Transport Decisions',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['rapid transport', 'trauma criteria', 'critical patients']
  },
  {
    id: 'trauma_017',
    question: 'What vital sign changes occur with blood loss?',
    answer: 'Increased heart rate, increased respiratory rate, decreased blood pressure, decreased pulse quality, cool/clammy skin',
    category: 'trauma_bleeding',
    subcategory: 'Assessment',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['vital signs', 'blood loss', 'hemorrhage assessment']
  },
  {
    id: 'trauma_018',
    question: 'What should you NEVER do with impaled objects?',
    answer: 'NEVER remove impaled objects - stabilize in place to prevent further injury and bleeding',
    category: 'trauma_bleeding',
    subcategory: 'Penetrating Trauma',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['impaled objects', 'penetrating trauma', 'stabilization']
  },
  {
    id: 'trauma_019',
    question: 'What is hematemesis?',
    answer: 'Vomiting blood - indicates upper GI bleeding or swallowed blood from trauma',
    category: 'trauma_bleeding',
    subcategory: 'Internal Bleeding',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['hematemesis', 'vomiting blood', 'GI bleeding']
  },
  {
    id: 'trauma_020',
    question: 'What is melena?',
    answer: 'Black, tarry stool indicating upper GI bleeding - blood has been digested',
    category: 'trauma_bleeding',
    subcategory: 'Internal Bleeding',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['melena', 'GI bleeding', 'internal hemorrhage']
  },
  {
    id: 'trauma_021',
    question: 'What is the difference between frontal and lateral crash injuries?',
    answer: 'Frontal: lower extremity fractures, ribs, head trauma. Lateral: most lethal - chest/abdominal, pelvis injuries',
    category: 'trauma_bleeding',
    subcategory: 'Mechanism of Injury',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['crash patterns', 'injury prediction', 'MOI assessment']
  },
  {
    id: 'trauma_022',
    question: 'What special considerations apply to hemophilia patients?',
    answer: 'Lack clotting factors - all injuries potentially serious, spontaneous bleeding possible, immediate transport required',
    category: 'trauma_bleeding',
    subcategory: 'Special Populations',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['hemophilia', 'clotting disorders', 'bleeding risk']
  },
  {
    id: 'trauma_023',
    question: 'How long should direct pressure be applied for bleeding control?',
    answer: 'Minimum 5 minutes of continuous direct pressure before considering other methods',
    category: 'trauma_bleeding',
    subcategory: 'Bleeding Control',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['direct pressure', 'bleeding control', 'time requirements']
  },
  {
    id: 'trauma_024',
    question: 'What are trauma center level capabilities?',
    answer: 'Level I: complete trauma care. Level II: initial definitive care. Level III: assessment/stabilization. Level IV: advanced life support',
    category: 'trauma_bleeding',
    subcategory: 'Transport Decisions',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['trauma centers', 'facility levels', 'transport decisions']
  },
  {
    id: 'trauma_025',
    question: 'When should air medical transport be considered?',
    answer: 'Distance >20-25 miles to trauma center, extended extrication, no ground ALS, traffic delays, mass casualty',
    category: 'trauma_bleeding',
    subcategory: 'Transport Decisions',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['air medical', 'helicopter transport', 'trauma transport']
  },
  {
    id: 'trauma_026',
    question: 'What is hematuria?',
    answer: 'Blood in urine - indicates kidney injury, bladder trauma, or urethral damage',
    category: 'trauma_bleeding',
    subcategory: 'Internal Bleeding',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['hematuria', 'blood in urine', 'genitourinary trauma']
  },
  {
    id: 'trauma_027',
    question: 'What is hemoptysis?',
    answer: 'Coughing up blood - indicates lung injury, chest trauma, or respiratory bleeding',
    category: 'trauma_bleeding',
    subcategory: 'Internal Bleeding',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['hemoptysis', 'coughing blood', 'respiratory bleeding']
  },
  {
    id: 'trauma_028',
    question: 'What is the primary assessment sequence for trauma (ABCDE)?',
    answer: 'Airway (spinal protection), Breathing (ventilation), Circulation (bleeding control), Disability (neurologic), Exposure (prevent hypothermia)',
    category: 'trauma_bleeding',
    subcategory: 'Assessment',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['ABCDE', 'primary assessment', 'trauma evaluation']
  },
  {
    id: 'trauma_029',
    question: 'What can cause epistaxis (nosebleeds) in trauma?',
    answer: 'Facial trauma, skull fracture (concerning), or simple septal bleeding - assess for head injury',
    category: 'trauma_bleeding',
    subcategory: 'Head Trauma',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['epistaxis', 'nosebleeds', 'head injury']
  },
  {
    id: 'trauma_030',
    question: 'How should epistaxis be managed?',
    answer: 'Pinch nostrils for septal bleeding, forward positioning to prevent aspiration, avoid excessive pressure if head injury suspected',
    category: 'trauma_bleeding',
    subcategory: 'Head Trauma',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['epistaxis management', 'nosebleed control', 'positioning']
  },
  {
    id: 'trauma_031',
    question: 'What is energy transfer in trauma?',
    answer: 'Energy cannot be destroyed, only transferred - assess patterns of energy transfer to predict injuries',
    category: 'trauma_bleeding',
    subcategory: 'General Principles',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['energy transfer', 'trauma physics', 'injury prediction']
  },
  {
    id: 'trauma_032',
    question: 'What makes rollover crashes particularly dangerous?',
    answer: 'High ejection risk leading to severe multi-trauma - restraint use is critical for survival',
    category: 'trauma_bleeding',
    subcategory: 'Mechanism of Injury',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['rollover crash', 'ejection risk', 'multi-trauma']
  },
  {
    id: 'trauma_033',
    question: 'What is the significance of a rigid, distended abdomen?',
    answer: 'Internal bleeding until proven otherwise - indicates potential organ injury and hemorrhage',
    category: 'trauma_bleeding',
    subcategory: 'Internal Bleeding',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['rigid abdomen', 'internal bleeding', 'abdominal trauma']
  },
  {
    id: 'trauma_034',
    question: 'What is capillary refill time significance in children?',
    answer: 'Greater than 2 seconds in children is a significant finding indicating poor perfusion',
    category: 'trauma_bleeding',
    subcategory: 'Assessment',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['capillary refill', 'pediatric assessment', 'perfusion']
  },
  {
    id: 'trauma_035',
    question: 'What is a target/halo stain on dressing?',
    answer: 'Possible CSF leak - clear fluid with blood creating halo pattern, indicates skull fracture',
    category: 'trauma_bleeding',
    subcategory: 'Head Trauma',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['halo sign', 'CSF leak', 'skull fracture']
  },
  {
    id: 'trauma_036',
    question: 'What are solid vs hollow organ injuries?',
    answer: 'Solid organs (liver, spleen) cause bleeding. Hollow organs (stomach, intestines) cause infection/peritonitis',
    category: 'trauma_bleeding',
    subcategory: 'Abdominal Trauma',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['solid organs', 'hollow organs', 'abdominal injury']
  },
  {
    id: 'trauma_037',
    question: 'Why is abdominal trauma particularly dangerous?',
    answer: 'High blood flow to abdominal organs leads to rapid deterioration from internal bleeding',
    category: 'trauma_bleeding',
    subcategory: 'Abdominal Trauma',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['abdominal trauma', 'rapid deterioration', 'blood flow']
  },
  {
    id: 'trauma_038',
    question: 'What are chest injury complications?',
    answer: 'Broken ribs compromise breathing, heart bruising causes arrhythmias, vessel tears cause massive bleeding',
    category: 'trauma_bleeding',
    subcategory: 'Chest Trauma',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['chest injuries', 'rib fractures', 'cardiac contusion']
  },
  {
    id: 'trauma_039',
    question: 'What makes neck/throat injuries concerning?',
    answer: 'Airway compromise risk from swelling, bleeding, or cartilage fracture - frequent monitoring required',
    category: 'trauma_bleeding',
    subcategory: 'Neck Trauma',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['neck trauma', 'airway compromise', 'throat injuries']
  },
  {
    id: 'trauma_040',
    question: 'What is normal clotting time?',
    answer: 'Approximately 10 minutes for normal clotting response in healthy individuals',
    category: 'trauma_bleeding',
    subcategory: 'Bleeding Control',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['clotting time', 'hemostasis', 'bleeding control']
  },
  {
    id: 'trauma_041',
    question: 'What are reassessment intervals for trauma patients?',
    answer: 'Every 5 minutes for unstable patients, every 15 minutes for stable patients',
    category: 'trauma_bleeding',
    subcategory: 'Assessment',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['reassessment', 'monitoring intervals', 'patient stability']
  },
  {
    id: 'trauma_042',
    question: 'What should you NEVER remove in trauma?',
    answer: 'Never remove impaled objects or successful pressure dressings - can worsen bleeding',
    category: 'trauma_bleeding',
    subcategory: 'General Principles',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['contraindications', 'never remove', 'trauma management']
  },
  {
    id: 'trauma_043',
    question: 'What is the SAMPLE history for trauma?',
    answer: 'Signs/Symptoms, Allergies, Medications (especially blood thinners), Past history, Last intake, Events leading to injury',
    category: 'trauma_bleeding',
    subcategory: 'Assessment',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['SAMPLE history', 'patient history', 'trauma assessment']
  },
  {
    id: 'trauma_044',
    question: 'What is the AVPU scale?',
    answer: 'Alert, Verbal response, Painful response, Unresponsive - rapid neurologic assessment tool',
    category: 'trauma_bleeding',
    subcategory: 'Assessment',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['AVPU scale', 'neurologic assessment', 'consciousness level']
  },
  {
    id: 'trauma_045',
    question: 'What PPE is essential for trauma calls?',
    answer: 'Standard precautions including gloves, eye protection, masks - blood exposure risk is high',
    category: 'trauma_bleeding',
    subcategory: 'Safety',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['PPE', 'standard precautions', 'bloodborne pathogens']
  },
  {
    id: 'trauma_046',
    question: 'Why maintain body temperature in trauma patients?',
    answer: 'Hypothermia worsens bleeding by impairing clotting function - prevent heat loss',
    category: 'trauma_bleeding',
    subcategory: 'General Principles',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['hypothermia', 'temperature control', 'clotting function']
  },
  {
    id: 'trauma_047',
    question: 'What communication is critical for trauma transport?',
    answer: 'Estimated blood loss, bleeding control methods used, patient stability, ETA, receiving facility needs',
    category: 'trauma_bleeding',
    subcategory: 'Communication',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['trauma communication', 'hospital report', 'critical information']
  },
  {
    id: 'trauma_048',
    question: 'When can rapid bleeding cause shock even with <20% loss?',
    answer: 'Rate of bleeding matters - rapid blood loss can cause shock even before reaching 20% threshold',
    category: 'trauma_bleeding',
    subcategory: 'Internal Bleeding',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['rapid bleeding', 'shock development', 'bleeding rate']
  },
  {
    id: 'trauma_049',
    question: 'What makes internal bleeding more dangerous than external?',
    answer: 'Cannot see extent of bleeding, harder to control, often involves multiple organs, delayed recognition',
    category: 'trauma_bleeding',
    subcategory: 'Internal Bleeding',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['internal bleeding', 'hidden hemorrhage', 'delayed recognition']
  },
  {
    id: 'trauma_050',
    question: 'What is the trauma treatment principle?',
    answer: 'When in doubt, treat for worst-case scenario - better to over-treat than under-treat in trauma',
    category: 'trauma_bleeding',
    subcategory: 'General Principles',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['trauma principles', 'worst-case scenario', 'treatment philosophy']
  },

  // Medical Emergency Cards (50 total) - Organized by EMS Level
  {
    id: 'medical_001',
    question: 'What is anaphylaxis?',
    answer: 'Extreme, life-threatening allergic reaction involving multiple organ systems with respiratory compromise and/or hypotension',
    category: 'medical_emergencies',
    subcategory: 'Anaphylaxis',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['anaphylaxis', 'allergic reaction', 'life-threatening']
  },
  {
    id: 'medical_002',
    question: 'What is the most reliable indicator of upper airway swelling in anaphylaxis?',
    answer: 'STRIDOR - audible high-pitched sound indicating severe upper airway obstruction',
    category: 'medical_emergencies',
    subcategory: 'Anaphylaxis',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['stridor', 'upper airway', 'anaphylaxis']
  },
  {
    id: 'medical_003',
    question: 'When should EMTs give epinephrine for allergic reactions?',
    answer: 'Give epinephrine if patient has respiratory compromise OR hypotension - do NOT give if neither present',
    category: 'medical_emergencies',
    subcategory: 'Anaphylaxis',
    difficulty: 'Intermediate',
    certificationLevel: 'EMT',
    tags: ['epinephrine decision', 'EMT scope', 'allergic reaction']
  },
  {
    id: 'medical_004',
    question: 'What are the epinephrine dosages?',
    answer: 'Adult: 0.3mg, Child/Infant: 0.15mg - hold for at least 10 seconds, onset within 1 minute',
    category: 'medical_emergencies',
    subcategory: 'Anaphylaxis',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['epinephrine dosage', 'adult pediatric', 'administration']
  },
  {
    id: 'medical_005',
    question: 'What additional medications can AEMTs give for anaphylaxis?',
    answer: 'Diphenhydramine 25-50mg IV, albuterol if bronchospasm present, IV access for fluid support',
    category: 'medical_emergencies',
    subcategory: 'Anaphylaxis',
    difficulty: 'Intermediate',
    certificationLevel: 'AEMT',
    tags: ['AEMT scope', 'diphenhydramine', 'albuterol']
  },
  {
    id: 'medical_006',
    question: 'What advanced anaphylaxis treatments can Paramedics provide?',
    answer: 'Methylprednisolone 125mg IV, epinephrine drip for refractory cases, advanced airway if needed',
    category: 'medical_emergencies',
    subcategory: 'Anaphylaxis',
    difficulty: 'Advanced',
    certificationLevel: 'Paramedic',
    tags: ['paramedic scope', 'methylprednisolone', 'epinephrine drip']
  },
  {
    id: 'medical_007',
    question: 'What are the five categories of common allergens?',
    answer: '1. Foods (most common), 2. Medications (2nd most), 3. Plants, 4. Chemicals, 5. Insects',
    category: 'medical_emergencies',
    subcategory: 'Anaphylaxis',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['allergen categories', 'foods', 'medications']
  },
  {
    id: 'medical_008',
    question: 'What is the activated charcoal dose for poisoning?',
    answer: '1 gram per kilogram body weight (pounds ÷ 2.2 = kg) - requires medical control approval',
    category: 'medical_emergencies',
    subcategory: 'Toxicology',
    difficulty: 'Intermediate',
    certificationLevel: 'EMT',
    tags: ['activated charcoal', 'dosage calculation', 'poisoning']
  },
  {
    id: 'medical_009',
    question: 'What are the four routes of toxic exposure?',
    answer: 'Ingestion (80%), Inhalation, Absorption, Injection - each requires different treatment approaches',
    category: 'medical_emergencies',
    subcategory: 'Toxicology',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['exposure routes', 'ingestion', 'toxicology']
  },
  {
    id: 'medical_010',
    question: 'When should EMTs NOT give activated charcoal?',
    answer: 'Decreased LOC, alkali poisons, cyanide, ethanol, iron, lithium, methanol, acids, solvents',
    category: 'medical_emergencies',
    subcategory: 'Toxicology',
    difficulty: 'Advanced',
    certificationLevel: 'EMT',
    tags: ['activated charcoal contraindications', 'EMT scope', 'poisoning']
  },
  {
    id: 'medical_011',
    question: 'What opioid antidote can AEMTs administer?',
    answer: 'Naloxone (Narcan) 0.4-2mg IV/IM/intranasal for severe respiratory depression and pinpoint pupils',
    category: 'medical_emergencies',
    subcategory: 'Toxicology',
    difficulty: 'Intermediate',
    certificationLevel: 'AEMT',
    tags: ['naloxone', 'AEMT scope', 'opioid overdose']
  },
  {
    id: 'medical_012',
    question: 'What advanced antidotes can Paramedics use?',
    answer: 'Atropine for cholinergics, flumazenil for benzodiazepines, DuoDote for nerve agents',
    category: 'medical_emergencies',
    subcategory: 'Toxicology',
    difficulty: 'Advanced',
    certificationLevel: 'Paramedic',
    tags: ['paramedic antidotes', 'atropine', 'flumazenil']
  },
  {
    id: 'medical_013',
    question: 'What is the anticholinergic toxidrome?',
    answer: '"Hot as hare, blind as bat, dry as bone, red as beet, mad as hatter" - death possible within 30 minutes',
    category: 'medical_emergencies',
    subcategory: 'Toxicology',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['anticholinergic', 'toxidrome', 'mnemonic']
  },
  {
    id: 'medical_014',
    question: 'What is the cholinergic toxidrome (DUMBELS)?',
    answer: 'Diarrhea, Urination, Miosis, Bradycardia, Emesis, Lacrimation, Seizures - nerve gas/organophosphates',
    category: 'medical_emergencies',
    subcategory: 'Toxicology',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['cholinergic', 'DUMBELS', 'organophosphates']
  },
  {
    id: 'medical_015',
    question: 'What are signs of sympathomimetic overdose?',
    answer: 'Hypertension, tachycardia, dilated pupils, paranoia - risk of seizures and cardiac dysrhythmias',
    category: 'medical_emergencies',
    subcategory: 'Toxicology',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['sympathomimetics', 'stimulants', 'cocaine amphetamines']
  },
  {
    id: 'medical_016',
    question: 'What is the priority for EMTs in behavioral emergencies?',
    answer: 'Scene safety FIRST - verbal de-escalation before restraints, may need law enforcement backup',
    category: 'medical_emergencies',
    subcategory: 'Behavioral Health',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['scene safety', 'EMT scope', 'de-escalation']
  },
  {
    id: 'medical_017',
    question: 'What is excited delirium?',
    answer: 'Hyperactive/irrational behavior with hallucinations, hypertension, tachycardia - high risk sudden cardiac arrest',
    category: 'medical_emergencies',
    subcategory: 'Behavioral Health',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['excited delirium', 'sudden cardiac arrest', 'never leave unattended']
  },
  {
    id: 'medical_018',
    question: 'What chemical restraints can AEMTs consider?',
    answer: 'Limited chemical restraint options - primarily IV access and supportive care until Paramedic arrival',
    category: 'medical_emergencies',
    subcategory: 'Behavioral Health',
    difficulty: 'Intermediate',
    certificationLevel: 'AEMT',
    tags: ['AEMT scope', 'chemical restraint', 'supportive care']
  },
  {
    id: 'medical_019',
    question: 'What medications can Paramedics use for severe agitation?',
    answer: 'Haloperidol 5-10mg IM, lorazepam 2-4mg IV for severe agitation and psychosis',
    category: 'medical_emergencies',
    subcategory: 'Behavioral Health',
    difficulty: 'Advanced',
    certificationLevel: 'Paramedic',
    tags: ['haloperidol', 'lorazepam', 'paramedic scope']
  },
  {
    id: 'medical_020',
    question: 'What are restraint safety requirements?',
    answer: 'Never leave unattended, reassess every 5 minutes for circulation/respiration, monitor for positional asphyxia',
    category: 'medical_emergencies',
    subcategory: 'Behavioral Health',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['restraint safety', 'positional asphyxia', 'monitoring']
  },
  {
    id: 'medical_021',
    question: 'What is the EMT approach to gynecologic emergencies?',
    answer: 'External bleeding control, maintain privacy/dignity, female EMT preferred, never pack vagina',
    category: 'medical_emergencies',
    subcategory: 'Gynecologic',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['EMT scope', 'privacy dignity', 'external bleeding']
  },
  {
    id: 'medical_022',
    question: 'What can AEMTs provide for gynecologic bleeding?',
    answer: 'IV access for significant bleeding, pain management within scope, fluid resuscitation',
    category: 'medical_emergencies',
    subcategory: 'Gynecologic',
    difficulty: 'Intermediate',
    certificationLevel: 'AEMT',
    tags: ['AEMT scope', 'IV access', 'pain management']
  },
  {
    id: 'medical_023',
    question: 'What advanced care can Paramedics provide for gynecologic emergencies?',
    answer: 'Advanced pain control, fluid resuscitation protocols, comprehensive assessment and stabilization',
    category: 'medical_emergencies',
    subcategory: 'Gynecologic',
    difficulty: 'Advanced',
    certificationLevel: 'Paramedic',
    tags: ['paramedic scope', 'advanced pain control', 'comprehensive care']
  },
  {
    id: 'medical_024',
    question: 'What are signs of Pelvic Inflammatory Disease (PID)?',
    answer: 'Lower abdominal pain, shuffling gait (worse with walking), foul discharge, fever, malaise',
    category: 'medical_emergencies',
    subcategory: 'Gynecologic',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['PID signs', 'shuffling gait', 'infection']
  },
  {
    id: 'medical_025',
    question: 'What causes most food poisoning cases?',
    answer: 'Salmonella (severe GI, 72 hours), Staphylococcus (sudden onset 2-12 hours), Botulism (most severe, neurologic)',
    category: 'medical_emergencies',
    subcategory: 'Toxicology',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['food poisoning', 'salmonella', 'botulism']
  },
  {
    id: 'medical_026',
    question: 'What are violence risk factors in behavioral emergencies?',
    answer: 'Previous violence history, tense posture/clenched fists, near weapons, loud erratic speech, poor impulse control',
    category: 'medical_emergencies',
    subcategory: 'Behavioral Health',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['violence risk', 'behavioral assessment', 'scene safety']
  },
  {
    id: 'medical_027',
    question: 'What are suicide risk factors?',
    answer: 'Depression (most significant), specific plans, hopelessness, detachment from future, previous attempts',
    category: 'medical_emergencies',
    subcategory: 'Behavioral Health',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['suicide risk', 'depression', 'assessment']
  },
  {
    id: 'medical_028',
    question: 'What should EMTs remember about sexual assault cases?',
    answer: 'Female EMT preferred, persuade patient not to clean themselves, evidence preservation, psychological support',
    category: 'medical_emergencies',
    subcategory: 'Gynecologic',
    difficulty: 'Advanced',
    certificationLevel: 'EMT',
    tags: ['sexual assault', 'evidence preservation', 'EMT approach']
  },
  {
    id: 'medical_029',
    question: 'What is the bee stinger removal technique?',
    answer: 'Scrape with stiff object (credit card) - do NOT use tweezers/forceps, honey bee stinger embeds 20 minutes',
    category: 'medical_emergencies',
    subcategory: 'Anaphylaxis',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['bee stinger removal', 'technique', 'honey bee']
  },
  {
    id: 'medical_030',
    question: 'What positioning is used for anaphylaxis patients?',
    answer: 'High Fowler\'s (sitting upright) for comfort or supine if shock present - based on patient condition',
    category: 'medical_emergencies',
    subcategory: 'Anaphylaxis',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['positioning', 'High Fowlers', 'shock position']
  },
  {
    id: 'medical_031',
    question: 'Why must patients be transported after epinephrine?',
    answer: 'Epinephrine effects wear off - patients can deteriorate again even if they feel better initially',
    category: 'medical_emergencies',
    subcategory: 'Anaphylaxis',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['epinephrine duration', 'transport decision', 'deterioration risk']
  },
  {
    id: 'medical_032',
    question: 'What are organic vs functional causes of behavioral emergencies?',
    answer: 'Organic: hypoglycemia, hypoxia, TBI, seizures, drugs. Functional: schizophrenia, anxiety, depression',
    category: 'medical_emergencies',
    subcategory: 'Behavioral Health',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['organic causes', 'functional causes', 'medical first']
  },
  {
    id: 'medical_033',
    question: 'What is the cervix?',
    answer: 'Narrowest part of the uterus that opens to the vagina - important anatomical landmark',
    category: 'medical_emergencies',
    subcategory: 'Gynecologic',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['cervix anatomy', 'uterus', 'reproductive anatomy']
  },
  {
    id: 'medical_034',
    question: 'What is the vagina in reproductive anatomy?',
    answer: 'Outermost cavity of the female reproductive system - external opening',
    category: 'medical_emergencies',
    subcategory: 'Gynecologic',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['vagina anatomy', 'reproductive system', 'outermost cavity']
  },
  {
    id: 'medical_035',
    question: 'When does menstruation occur?',
    answer: 'If no fertilization occurs within 14 days of ovulation - normal reproductive cycle',
    category: 'medical_emergencies',
    subcategory: 'Gynecologic',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['menstruation', 'reproductive cycle', '14 days']
  },
  {
    id: 'medical_036',
    question: 'What are the ages for menarche and menopause?',
    answer: 'Menarche: onset menstruation (ages 11-16), Menopause: end menstrual activity (~50 years)',
    category: 'medical_emergencies',
    subcategory: 'Gynecologic',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['menarche', 'menopause', 'reproductive timeline']
  },
  {
    id: 'medical_037',
    question: 'What special considerations apply to combat veterans with PTSD?',
    answer: 'Eliminate excess noise, don\'t touch without explanation, calm tone, respect space - trained with weapons',
    category: 'medical_emergencies',
    subcategory: 'Behavioral Health',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['PTSD veterans', 'special considerations', 'weapon training']
  },
  {
    id: 'medical_038',
    question: 'What are the most common STDs by category?',
    answer: 'Chlamydia: most common STD in US. Bacterial vaginosis: most common infection ages 15-44',
    category: 'medical_emergencies',
    subcategory: 'Gynecologic',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['STDs', 'chlamydia', 'bacterial vaginosis']
  },
  {
    id: 'medical_039',
    question: 'What alcohol withdrawal signs indicate DTs?',
    answer: 'Delirium tremens: agitation, fever, sweating, tremors, seizures - medical emergency',
    category: 'medical_emergencies',
    subcategory: 'Toxicology',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['DTs', 'alcohol withdrawal', 'delirium tremens']
  },
  {
    id: 'medical_040',
    question: 'Why check blood sugar in alcohol intoxication?',
    answer: 'Alcohol can cause hypoglycemia as a complication - check glucose levels',
    category: 'medical_emergencies',
    subcategory: 'Toxicology',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['alcohol hypoglycemia', 'blood sugar', 'complications']
  },
  {
    id: 'medical_041',
    question: 'What is the restraint team composition?',
    answer: 'Five people ideal - four-point restraints preferred over two-point restraints',
    category: 'medical_emergencies',
    subcategory: 'Behavioral Health',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['restraint team', 'five people', 'four-point restraints']
  },
  {
    id: 'medical_042',
    question: 'What makes botulism the most severe food poisoning?',
    answer: 'Neurologic symptoms (blurred vision, weakness), onset 24 hours to 4 days, potentially fatal',
    category: 'medical_emergencies',
    subcategory: 'Toxicology',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['botulism', 'neurologic symptoms', 'most severe']
  },
  {
    id: 'medical_043',
    question: 'What are the injection route toxicology priorities?',
    answer: 'Cannot remove or dilute - supportive care and prompt transport are priorities',
    category: 'medical_emergencies',
    subcategory: 'Toxicology',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['injection route', 'cannot remove', 'supportive care']
  },
  {
    id: 'medical_044',
    question: 'What absorption route decontamination should be done first?',
    answer: 'Brush dry powder first, then flush with water - order matters for effectiveness',
    category: 'medical_emergencies',
    subcategory: 'Toxicology',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['absorption decontamination', 'brush first', 'then flush']
  },
  {
    id: 'medical_045',
    question: 'What latex allergy consideration affects EMS?',
    answer: 'Use nitrile gloves, not latex - latex is a chemical allergen category',
    category: 'medical_emergencies',
    subcategory: 'Anaphylaxis',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['latex allergy', 'nitrile gloves', 'EMS equipment']
  },
  {
    id: 'medical_046',
    question: 'What are the key anaphylaxis organ systems affected?',
    answer: 'Skin: urticaria/angioedema, Respiratory: wheezing/stridor, Cardiovascular: hypotension, GI: nausea/vomiting',
    category: 'medical_emergencies',
    subcategory: 'Anaphylaxis',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['organ systems', 'multisystem reaction', 'anaphylaxis signs']
  },
  {
    id: 'medical_047',
    question: 'What chemical causes allergic reaction symptoms?',
    answer: 'Histamines and leukotrienes - key chemicals released by immune system during allergic reactions',
    category: 'medical_emergencies',
    subcategory: 'Anaphylaxis',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['histamines', 'leukotrienes', 'immune system']
  },
  {
    id: 'medical_048',
    question: 'What is the false belief about suicide threats?',
    answer: 'FALSE: "Those who threaten won\'t do it" - all suicide threats must be taken seriously',
    category: 'medical_emergencies',
    subcategory: 'Behavioral Health',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['suicide myths', 'threats seriously', 'false belief']
  },
  {
    id: 'medical_049',
    question: 'What epinephrine mechanism helps anaphylaxis?',
    answer: 'Sympathomimetic hormone: constricts blood vessels (reverses hypotension), increases cardiac contractility, relieves bronchospasms',
    category: 'medical_emergencies',
    subcategory: 'Anaphylaxis',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['epinephrine mechanism', 'sympathomimetic', 'bronchospasm relief']
  },
  {
    id: 'medical_050',
    question: 'What is the key principle for behavioral emergency management?',
    answer: 'Most people with mental health disorders are NOT dangerous - EMS sees more violent patients because we respond to crises',
    category: 'medical_emergencies',
    subcategory: 'Behavioral Health',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['behavioral principles', 'not dangerous', 'crisis response']
  },

  // ===============================
  // EMS SYSTEMS & PROFESSIONAL STANDARDS
  // ===============================

  // Provider Levels (12 cards)
  {
    id: 'ems_001',
    question: 'What are the 4 main EMS provider levels and their training hours?',
    answer: 'EMR (Basic first aid), EMT (150-200 hrs), AEMT (EMT + Advanced), Paramedic (1000+ hrs)',
    category: 'ems_systems',
    subcategory: 'Provider Levels',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['provider levels', 'training', 'scope']
  },
  {
    id: 'ems_002',
    question: 'What are the key capabilities of an EMT compared to an EMR?',
    answer: 'EMT can work independently, provide BLS, assist with medications, use airway adjuncts. EMR cannot work independently.',
    category: 'ems_systems',
    subcategory: 'Provider Levels',
    difficulty: 'Basic',
    certificationLevel: 'EMT',
    tags: ['EMT scope', 'independence', 'BLS']
  },
  {
    id: 'ems_003',
    question: 'What additional capabilities does an AEMT have beyond EMT level?',
    answer: 'IV access, limited emergency medications, advanced airway management (but no intubation)',
    category: 'ems_systems',
    subcategory: 'Provider Levels',
    difficulty: 'Intermediate',
    certificationLevel: 'AEMT',
    tags: ['AEMT scope', 'IV access', 'advanced care']
  },
  {
    id: 'ems_004',
    question: 'What is the highest level of pre-hospital care and its capabilities?',
    answer: 'Paramedic - ALS, intubation, full pharmacology, cardiac monitoring, advanced procedures',
    category: 'ems_systems',
    subcategory: 'Provider Levels',
    difficulty: 'Basic',
    certificationLevel: 'Paramedic',
    tags: ['paramedic scope', 'ALS', 'intubation']
  },
  {
    id: 'ems_005',
    question: 'Which EMS level can perform intubation?',
    answer: 'Paramedic only - AEMTs have advanced airway management but cannot intubate',
    category: 'ems_systems',
    subcategory: 'Provider Levels',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['intubation', 'scope limits', 'advanced airway']
  },
  {
    id: 'ems_006',
    question: 'What medications can EMTs assist with versus independently administer?',
    answer: 'EMTs assist with patient-prescribed medications but independently give epinephrine, naloxone, oxygen, oral glucose, aspirin',
    category: 'ems_systems',
    subcategory: 'Provider Levels',
    difficulty: 'Intermediate',
    certificationLevel: 'EMT',
    tags: ['EMT medications', 'assistance vs independent', 'scope']
  },
  {
    id: 'ems_007',
    question: 'Why cannot EMRs work independently in most EMS systems?',
    answer: 'Limited training and scope - designed to assist higher-level providers, not provide primary EMS care',
    category: 'ems_systems',
    subcategory: 'Provider Levels',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['EMR limitations', 'supervision', 'scope']
  },
  {
    id: 'ems_008',
    question: 'What is the training hour difference between EMT and Paramedic?',
    answer: 'EMT: 150-200 hours, Paramedic: 1000+ hours (5-6 times more training)',
    category: 'ems_systems',
    subcategory: 'Provider Levels',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['training hours', 'education comparison']
  },
  {
    id: 'ems_009',
    question: 'Which provider level has limited emergency medications but no full pharmacology?',
    answer: 'AEMT - can give some emergency medications but not the full range available to Paramedics',
    category: 'ems_systems',
    subcategory: 'Provider Levels',
    difficulty: 'Intermediate',
    certificationLevel: 'AEMT',
    tags: ['AEMT medications', 'limited pharmacology']
  },
  {
    id: 'ems_010',
    question: 'What does BLS stand for and which levels provide it?',
    answer: 'Basic Life Support - provided by EMT, AEMT, and Paramedic levels',
    category: 'ems_systems',
    subcategory: 'Provider Levels',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['BLS', 'basic life support', 'care levels']
  },
  {
    id: 'ems_011',
    question: 'What does ALS stand for and which level provides it?',
    answer: 'Advanced Life Support - provided by Paramedics only',
    category: 'ems_systems',
    subcategory: 'Provider Levels',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['ALS', 'advanced life support', 'paramedic']
  },
  {
    id: 'ems_012',
    question: 'Can AEMTs perform cardiac monitoring?',
    answer: 'No - cardiac monitoring is typically a Paramedic-level skill as part of ALS care',
    category: 'ems_systems',
    subcategory: 'Provider Levels',
    difficulty: 'Intermediate',
    certificationLevel: 'AEMT',
    tags: ['AEMT limitations', 'cardiac monitoring', 'scope']
  },

  // System Components (13 cards)
  {
    id: 'ems_013',
    question: 'What are the 5 components of the EMS System according to EMS Agenda 2050?',
    answer: '1. Comprehensive Care, 2. Public Access, 3. Human Resources, 4. Medical Direction, 5. Integration',
    category: 'ems_systems',
    subcategory: 'System Components',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['EMS Agenda 2050', 'system components']
  },
  {
    id: 'ems_014',
    question: 'What does "Comprehensive Care" mean in EMS Agenda 2050?',
    answer: 'Evidence-based clinical care throughout the continuum from prevention to rehabilitation',
    category: 'ems_systems',
    subcategory: 'System Components',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['comprehensive care', 'evidence-based', 'continuum']
  },
  {
    id: 'ems_015',
    question: 'What is included in "Public Access" component of EMS systems?',
    answer: '911 system, Emergency Medical Dispatch (EMD), public education, first aid training',
    category: 'ems_systems',
    subcategory: 'System Components',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['public access', '911', 'EMD']
  },
  {
    id: 'ems_016',
    question: 'What does "Human Resources" encompass in EMS systems?',
    answer: 'Qualified workforce, appropriate training, certification, continuing education, career development',
    category: 'ems_systems',
    subcategory: 'System Components',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['human resources', 'workforce', 'training']
  },
  {
    id: 'ems_017',
    question: 'What is "Integration" in EMS systems?',
    answer: 'Healthcare coordination, Mobile Integrated Healthcare (MIH), community paramedicine, hospital integration',
    category: 'ems_systems',
    subcategory: 'System Components',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['integration', 'MIH', 'coordination']
  },
  {
    id: 'ems_018',
    question: 'What does EMD stand for and what is its purpose?',
    answer: 'Emergency Medical Dispatch - provides pre-arrival instructions and ensures appropriate resource allocation',
    category: 'ems_systems',
    subcategory: 'System Components',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['EMD', 'dispatch', 'pre-arrival']
  },
  {
    id: 'ems_019',
    question: 'What is Mobile Integrated Healthcare (MIH)?',
    answer: 'EMS integration with healthcare system for preventive care, chronic disease management, and reducing hospital readmissions',
    category: 'ems_systems',
    subcategory: 'System Components',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['MIH', 'integration', 'preventive care']
  },
  {
    id: 'ems_020',
    question: 'What role does quality improvement play in EMS systems?',
    answer: 'Continuous monitoring of performance, outcome measurement, protocol refinement, and system optimization',
    category: 'ems_systems',
    subcategory: 'System Components',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['quality improvement', 'performance', 'outcomes']
  },
  {
    id: 'ems_021',
    question: 'What is community paramedicine?',
    answer: 'Paramedics providing healthcare services in community settings, focusing on prevention and management of chronic conditions',
    category: 'ems_systems',
    subcategory: 'System Components',
    difficulty: 'Advanced',
    certificationLevel: 'Paramedic',
    tags: ['community paramedicine', 'prevention', 'chronic care']
  },
  {
    id: 'ems_022',
    question: 'How do EMS systems ensure evidence-based care?',
    answer: 'Through research, clinical guidelines, protocol development, outcome studies, and continuous education',
    category: 'ems_systems',
    subcategory: 'System Components',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['evidence-based', 'research', 'protocols']
  },
  {
    id: 'ems_023',
    question: 'What is the purpose of EMS system integration with hospitals?',
    answer: 'Seamless patient handoffs, shared protocols, outcome feedback, and coordinated care planning',
    category: 'ems_systems',
    subcategory: 'System Components',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['hospital integration', 'handoffs', 'coordination']
  },
  {
    id: 'ems_024',
    question: 'Why is public education important in EMS systems?',
    answer: 'Teaches injury prevention, when to call 911, basic first aid, and bystander CPR to improve outcomes',
    category: 'ems_systems',
    subcategory: 'System Components',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['public education', 'prevention', 'bystander care']
  },
  {
    id: 'ems_025',
    question: 'What is the role of research in modern EMS systems?',
    answer: 'Validates treatments, improves protocols, measures outcomes, and advances evidence-based practice',
    category: 'ems_systems',
    subcategory: 'System Components',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['research', 'validation', 'evidence-based']
  },

  // Medical Direction (12 cards)
  {
    id: 'ems_026',
    question: 'What are the two types of medical control in EMS?',
    answer: 'Offline (Indirect) medical control and Online (Direct) medical control',
    category: 'ems_systems',
    subcategory: 'Medical Direction',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['medical control', 'offline', 'online']
  },
  {
    id: 'ems_027',
    question: 'What is included in offline (indirect) medical control?',
    answer: 'Standing orders, protocols, training, quality improvement, equipment standards',
    category: 'ems_systems',
    subcategory: 'Medical Direction',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['offline control', 'protocols', 'standing orders']
  },
  {
    id: 'ems_028',
    question: 'What is online (direct) medical control?',
    answer: 'Real-time physician orders given via radio or phone during patient care',
    category: 'ems_systems',
    subcategory: 'Medical Direction',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['online control', 'real-time', 'physician orders']
  },
  {
    id: 'ems_029',
    question: 'When might you need to contact online medical control?',
    answer: 'When protocols don\'t address the situation, patient refuses care, unusual circumstances, or medication orders needed',
    category: 'ems_systems',
    subcategory: 'Medical Direction',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['online control', 'indications', 'unusual circumstances']
  },
  {
    id: 'ems_030',
    question: 'Who provides medical direction to EMS systems?',
    answer: 'Licensed physicians (usually emergency medicine or EMS medical directors)',
    category: 'ems_systems',
    subcategory: 'Medical Direction',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['medical director', 'physician', 'oversight']
  },
  {
    id: 'ems_031',
    question: 'What is the purpose of standing orders in EMS?',
    answer: 'Allow EMS providers to perform certain treatments without direct physician contact based on protocols',
    category: 'ems_systems',
    subcategory: 'Medical Direction',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['standing orders', 'protocols', 'autonomy']
  },
  {
    id: 'ems_032',
    question: 'How do protocols differ from standing orders?',
    answer: 'Protocols are comprehensive treatment guidelines; standing orders are specific pre-authorized treatments within protocols',
    category: 'ems_systems',
    subcategory: 'Medical Direction',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['protocols vs orders', 'guidelines', 'authorization']
  },
  {
    id: 'ems_033',
    question: 'What role does the medical director play in EMS training?',
    answer: 'Approves curricula, oversees competency testing, provides clinical oversight, ensures quality standards',
    category: 'ems_systems',
    subcategory: 'Medical Direction',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['medical director', 'training', 'competency']
  },
  {
    id: 'ems_034',
    question: 'Can EMS providers deviate from established protocols?',
    answer: 'Only with direct physician order (online medical control) or in extraordinary circumstances per system policy',
    category: 'ems_systems',
    subcategory: 'Medical Direction',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['protocol deviation', 'physician orders', 'extraordinary circumstances']
  },
  {
    id: 'ems_035',
    question: 'What is the legal relationship between medical control and EMS providers?',
    answer: 'Physician extends their license to EMS providers operating under medical direction and protocols',
    category: 'ems_systems',
    subcategory: 'Medical Direction',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['legal relationship', 'physician license', 'medical direction']
  },
  {
    id: 'ems_036',
    question: 'How often should EMS protocols be reviewed and updated?',
    answer: 'Regularly (typically annually) based on new evidence, system experience, and medical director guidance',
    category: 'ems_systems',
    subcategory: 'Medical Direction',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['protocol updates', 'evidence-based', 'annual review']
  },
  {
    id: 'ems_037',
    question: 'What documentation is required when contacting medical control?',
    answer: 'Record time of contact, physician name, orders received, patient response, and confirmation of understanding',
    category: 'ems_systems',
    subcategory: 'Medical Direction',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['documentation', 'medical control', 'orders']
  },

  // Professional Attributes (13 cards)
  {
    id: 'ems_038',
    question: 'What are the 7 key professional attributes of EMTs?',
    answer: 'Integrity, Empathy, Self-motivation, Professional appearance, Self-confidence, Communication, Patient advocacy',
    category: 'ems_systems',
    subcategory: 'Professional Attributes',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['professional attributes', 'EMT qualities']
  },
  {
    id: 'ems_039',
    question: 'How is integrity demonstrated in EMS practice?',
    answer: 'Honest and consistent behavior, admitting mistakes, following protocols, truthful documentation',
    category: 'ems_systems',
    subcategory: 'Professional Attributes',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['integrity', 'honesty', 'consistency']
  },
  {
    id: 'ems_040',
    question: 'What does empathy mean in patient care?',
    answer: 'Understanding and identifying with patient needs and concerns without personal judgment',
    category: 'ems_systems',
    subcategory: 'Professional Attributes',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['empathy', 'understanding', 'non-judgmental']
  },
  {
    id: 'ems_041',
    question: 'How does self-motivation manifest in EMS professionals?',
    answer: 'Taking initiative, problem-solving, continuing education, maintaining skills without constant supervision',
    category: 'ems_systems',
    subcategory: 'Professional Attributes',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['self-motivation', 'initiative', 'problem-solving']
  },
  {
    id: 'ems_042',
    question: 'Why is professional appearance important in EMS?',
    answer: 'Builds patient trust and credibility, reflects competence, maintains public confidence in EMS',
    category: 'ems_systems',
    subcategory: 'Professional Attributes',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['professional appearance', 'trust', 'credibility']
  },
  {
    id: 'ems_043',
    question: 'What does appropriate self-confidence mean for EMTs?',
    answer: 'Knowing your capabilities and limitations, requesting help when needed, making decisions within scope',
    category: 'ems_systems',
    subcategory: 'Professional Attributes',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['self-confidence', 'limitations', 'appropriate help']
  },
  {
    id: 'ems_044',
    question: 'What makes communication therapeutic in EMS?',
    answer: 'Clear, empathetic interaction that reduces patient anxiety and builds trust during crisis',
    category: 'ems_systems',
    subcategory: 'Professional Attributes',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['therapeutic communication', 'empathy', 'trust building']
  },
  {
    id: 'ems_045',
    question: 'How do EMTs demonstrate patient advocacy?',
    answer: 'Making patient-centered decisions, respecting patient rights, ensuring appropriate care and dignity',
    category: 'ems_systems',
    subcategory: 'Professional Attributes',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['patient advocacy', 'patient-centered', 'dignity']
  },
  {
    id: 'ems_046',
    question: 'What behaviors would demonstrate lack of integrity?',
    answer: 'Falsifying documentation, not following protocols, blaming others for mistakes, dishonest reporting',
    category: 'ems_systems',
    subcategory: 'Professional Attributes',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['integrity violations', 'unprofessional behavior']
  },
  {
    id: 'ems_047',
    question: 'When should an EMT ask for help or additional resources?',
    answer: 'When patient needs exceed capabilities, scene is unsafe, multiple patients, or uncertain about treatment',
    category: 'ems_systems',
    subcategory: 'Professional Attributes',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['asking for help', 'recognizing limits', 'resources']
  },
  {
    id: 'ems_048',
    question: 'How can EMTs maintain professional relationships with difficult patients?',
    answer: 'Remain calm, use therapeutic communication, focus on medical needs, avoid taking behavior personally',
    category: 'ems_systems',
    subcategory: 'Professional Attributes',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['difficult patients', 'professionalism', 'therapeutic communication']
  },
  {
    id: 'ems_049',
    question: 'What is the relationship between self-confidence and competence?',
    answer: 'True self-confidence comes from actual competence and knowing your scope of practice limitations',
    category: 'ems_systems',
    subcategory: 'Professional Attributes',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['self-confidence', 'competence', 'scope awareness']
  },
  {
    id: 'ems_050',
    question: 'How do professional attributes affect patient outcomes?',
    answer: 'Professional behavior builds trust, improves compliance, reduces anxiety, and enhances therapeutic relationships',
    category: 'ems_systems',
    subcategory: 'Professional Attributes',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['professional attributes', 'patient outcomes', 'therapeutic relationships']
  },

  // ===============================
  // SAFETY & WELLNESS
  // ===============================

  // Scene Safety (12 cards)
  {
    id: 'safety_001',
    question: 'What is the personal safety hierarchy in EMS?',
    answer: 'SELF → PARTNER → PATIENT → BYSTANDERS. You cannot help others if you become a casualty.',
    category: 'safety_wellness',
    subcategory: 'Scene Safety',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['safety hierarchy', 'self first', 'scene safety']
  },
  {
    id: 'safety_002',
    question: 'What does the mnemonic "SPPB" help remember for scene safety?',
    answer: 'Self → Partner → Patient → Bystanders - the priority order for safety',
    category: 'safety_wellness',
    subcategory: 'Scene Safety',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['SPPB mnemonic', 'safety priorities']
  },
  {
    id: 'safety_003',
    question: 'What are the key scene safety assessments before patient contact?',
    answer: 'PPE donned, scene marked and illuminated, vehicle positioned safely, hazards identified, additional resources requested',
    category: 'safety_wellness',
    subcategory: 'Scene Safety',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['scene assessment', 'safety checklist']
  },
  {
    id: 'safety_004',
    question: 'What is the safe distance for electrical hazards?',
    answer: 'One span of power poles (typically 150+ feet). Never approach downed lines - assume energized.',
    category: 'safety_wellness',
    subcategory: 'Scene Safety',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['electrical safety', 'power lines', 'safe distance']
  },
  {
    id: 'safety_005',
    question: 'For hazmat incidents, where should you position yourself?',
    answer: 'Upwind and uphill, read placards from distance. Do not enter until scene cleared by specialists.',
    category: 'safety_wellness',
    subcategory: 'Scene Safety',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['hazmat safety', 'upwind positioning', 'specialists']
  },
  {
    id: 'safety_006',
    question: 'What are the main hazards at fire scenes?',
    answer: 'Smoke inhalation, oxygen deficiency, toxic gases, structural collapse, secondary explosions',
    category: 'safety_wellness',
    subcategory: 'Scene Safety',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['fire hazards', 'smoke inhalation', 'collapse zone']
  },
  {
    id: 'safety_007',
    question: 'What is the difference between cover and concealment?',
    answer: 'Cover protects from bullets (concrete, steel); Concealment only hides you from view (bushes, vehicles)',
    category: 'safety_wellness',
    subcategory: 'Scene Safety',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['violence safety', 'cover vs concealment', 'tactical']
  },
  {
    id: 'safety_008',
    question: 'What positioning is crucial at vehicle crash scenes?',
    answer: 'Upstream traffic control, reflective markers placed, vehicle positioned for escape route, scene illumination',
    category: 'safety_wellness',
    subcategory: 'Scene Safety',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['vehicle crashes', 'traffic control', 'positioning']
  },
  {
    id: 'safety_009',
    question: 'When must you wait for law enforcement before entering a scene?',
    answer: 'Violence, domestic disputes, criminal activity, hostile crowds, weapons involved, threatened personnel',
    category: 'safety_wellness',
    subcategory: 'Scene Safety',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['law enforcement', 'violence', 'scene security']
  },
  {
    id: 'safety_010',
    question: 'What information should you gather during scene size-up?',
    answer: 'Number of patients, mechanism of injury, additional hazards, need for resources, access/egress routes',
    category: 'safety_wellness',
    subcategory: 'Scene Safety',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['scene size-up', 'information gathering']
  },
  {
    id: 'safety_011',
    question: 'Why is vehicle positioning important for safety?',
    answer: 'Provides escape route, protects from traffic, allows equipment access, positions for rapid departure',
    category: 'safety_wellness',
    subcategory: 'Scene Safety',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['vehicle positioning', 'escape routes', 'safety']
  },
  {
    id: 'safety_012',
    question: 'What are the priority communication needs during scene safety assessment?',
    answer: '1. Scene Safety (first), 2. Dispatch Updates, 3. Medical Control, 4. Patient Care communications',
    category: 'safety_wellness',
    subcategory: 'Scene Safety',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['communication priorities', 'scene safety first']
  },

  // PPE (13 cards)
  {
    id: 'safety_013',
    question: 'What is the correct order for donning PPE?',
    answer: '1. Gown, 2. Mask/Respirator, 3. Eye protection, 4. Gloves',
    category: 'safety_wellness',
    subcategory: 'PPE',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['PPE donning', 'sequence', 'infection control']
  },
  {
    id: 'safety_014',
    question: 'What is the correct order for doffing PPE?',
    answer: '1. Gloves FIRST (most contaminated), 2. Eye protection, 3. Gown, 4. Mask/Respirator LAST',
    category: 'safety_wellness',
    subcategory: 'PPE',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['PPE doffing', 'gloves first', 'contamination']
  },
  {
    id: 'safety_015',
    question: 'Why are gloves removed first when doffing PPE?',
    answer: 'Gloves are most contaminated from direct patient contact and can contaminate other equipment during removal',
    category: 'safety_wellness',
    subcategory: 'PPE',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['gloves', 'contamination', 'removal priority']
  },
  {
    id: 'safety_016',
    question: 'What does Standard Precautions mean?',
    answer: 'Treat all patients as potentially infected - use appropriate PPE for all patient contacts',
    category: 'safety_wellness',
    subcategory: 'PPE',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['standard precautions', 'all patients', 'infection control']
  },
  {
    id: 'safety_017',
    question: 'What are Universal Precautions?',
    answer: 'OSHA bloodborne pathogen guidelines - specific protections against blood and body fluid exposure',
    category: 'safety_wellness',
    subcategory: 'PPE',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['universal precautions', 'OSHA', 'bloodborne pathogens']
  },
  {
    id: 'safety_018',
    question: 'When should you use N95 respirators instead of surgical masks?',
    answer: 'Airborne diseases (TB, COVID-19), suspected respiratory pathogens, prolonged close contact with coughing patients',
    category: 'safety_wellness',
    subcategory: 'PPE',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['N95 respirator', 'airborne precautions', 'respiratory protection']
  },
  {
    id: 'safety_019',
    question: 'What PPE is required for all patient contacts?',
    answer: 'Gloves at minimum; additional PPE based on exposure risk (mask, eye protection, gown)',
    category: 'safety_wellness',
    subcategory: 'PPE',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['minimum PPE', 'gloves', 'risk assessment']
  },
  {
    id: 'safety_020',
    question: 'When should you wear protective eyewear?',
    answer: 'Risk of splash or spray from blood/body fluids, intubation, IV starts, trauma with bleeding',
    category: 'safety_wellness',
    subcategory: 'PPE',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['eye protection', 'splash risk', 'body fluids']
  },
  {
    id: 'safety_021',
    question: 'What is the purpose of barrier protection in EMS?',
    answer: 'Prevent transmission of infectious diseases between patients and healthcare providers',
    category: 'safety_wellness',
    subcategory: 'PPE',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['barrier protection', 'disease transmission', 'prevention']
  },
  {
    id: 'safety_022',
    question: 'How often should you change gloves during patient care?',
    answer: 'Between patients, when visibly contaminated, after removing and before donning other PPE',
    category: 'safety_wellness',
    subcategory: 'PPE',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['glove changes', 'contamination', 'patient safety']
  },
  {
    id: 'safety_023',
    question: 'What PPE is appropriate for routine patient transport?',
    answer: 'Gloves for all patients; mask if patient coughing; eye protection if procedures planned',
    category: 'safety_wellness',
    subcategory: 'PPE',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['transport PPE', 'routine care', 'risk assessment']
  },
  {
    id: 'safety_024',
    question: 'When can PPE be reused?',
    answer: 'Only when manufacturer guidelines allow and PPE is not visibly contaminated or damaged',
    category: 'safety_wellness',
    subcategory: 'PPE',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['PPE reuse', 'guidelines', 'contamination']
  },
  {
    id: 'safety_025',
    question: 'What is the most effective method for disease prevention in healthcare?',
    answer: 'Hand washing - more effective than any other single intervention for preventing disease transmission',
    category: 'safety_wellness',
    subcategory: 'PPE',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['hand washing', 'disease prevention', 'most effective']
  },

  // Infection Control (12 cards)
  {
    id: 'safety_026',
    question: 'What is the infection control hierarchy from most to least effective?',
    answer: '1. Hand washing, 2. Standard Precautions, 3. Universal Precautions, 4. PPE with proper sequence',
    category: 'safety_wellness',
    subcategory: 'Infection Control',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['infection control hierarchy', 'hand washing', 'effectiveness']
  },
  {
    id: 'safety_027',
    question: 'When should you wash your hands in patient care?',
    answer: 'Before patient contact, after removing gloves, after patient contact, before eating, after restroom use',
    category: 'safety_wellness',
    subcategory: 'Infection Control',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['hand washing timing', 'patient contact', 'hygiene']
  },
  {
    id: 'safety_028',
    question: 'What body fluids require Standard Precautions?',
    answer: 'All body fluids, blood, secretions, excretions (except sweat), non-intact skin, mucous membranes',
    category: 'safety_wellness',
    subcategory: 'Infection Control',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['body fluids', 'standard precautions', 'exposure risk']
  },
  {
    id: 'safety_029',
    question: 'What diseases require airborne precautions?',
    answer: 'Tuberculosis, measles, chickenpox, COVID-19, and other respiratory droplet diseases',
    category: 'safety_wellness',
    subcategory: 'Infection Control',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['airborne precautions', 'TB', 'respiratory diseases']
  },
  {
    id: 'safety_030',
    question: 'How long should hand washing last for effectiveness?',
    answer: 'At least 15-20 seconds with soap and water, or until hands are visibly clean',
    category: 'safety_wellness',
    subcategory: 'Infection Control',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['hand washing duration', '15-20 seconds', 'effectiveness']
  },
  {
    id: 'safety_031',
    question: 'When is alcohol-based hand sanitizer appropriate?',
    answer: 'When hands not visibly soiled and soap/water unavailable; NOT effective against C. diff spores',
    category: 'safety_wellness',
    subcategory: 'Infection Control',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['hand sanitizer', 'alcohol-based', 'limitations']
  },
  {
    id: 'safety_032',
    question: 'What should you do after potential bloodborne pathogen exposure?',
    answer: 'Immediate wound care, report to supervisor, medical evaluation, baseline testing, follow-up care',
    category: 'safety_wellness',
    subcategory: 'Infection Control',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['exposure protocol', 'bloodborne pathogens', 'reporting']
  },
  {
    id: 'safety_033',
    question: 'What are the main routes of disease transmission in EMS?',
    answer: 'Direct contact, droplet transmission, airborne transmission, vehicle/vector transmission',
    category: 'safety_wellness',
    subcategory: 'Infection Control',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['transmission routes', 'disease spread', 'prevention']
  },
  {
    id: 'safety_034',
    question: 'How should contaminated equipment be handled?',
    answer: 'Immediate cleaning with appropriate disinfectant, proper disposal of single-use items, quarantine if necessary',
    category: 'safety_wellness',
    subcategory: 'Infection Control',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['equipment decontamination', 'cleaning', 'disposal']
  },
  {
    id: 'safety_035',
    question: 'What vaccinations should EMS personnel maintain?',
    answer: 'Hepatitis B, annual influenza, tetanus/diphtheria, MMR, and others per local health department',
    category: 'safety_wellness',
    subcategory: 'Infection Control',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['vaccinations', 'Hepatitis B', 'immunizations']
  },
  {
    id: 'safety_036',
    question: 'What is the purpose of post-exposure prophylaxis?',
    answer: 'Prevent disease development after known exposure to HIV, Hepatitis B, or other infectious agents',
    category: 'safety_wellness',
    subcategory: 'Infection Control',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['post-exposure prophylaxis', 'prevention', 'HIV']
  },
  {
    id: 'safety_037',
    question: 'How should sharps be disposed of in the field?',
    answer: 'Immediately into puncture-resistant sharps container, never recap needles, never overfill containers',
    category: 'safety_wellness',
    subcategory: 'Infection Control',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['sharps disposal', 'needle safety', 'puncture-resistant']
  },

  // Stress Management (13 cards)
  {
    id: 'safety_038',
    question: 'What are the physical symptoms of stress in EMS?',
    answer: 'Fatigue, appetite changes, GI problems, headaches, insomnia, muscle tension',
    category: 'safety_wellness',
    subcategory: 'Stress Management',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['stress symptoms', 'physical', 'fatigue']
  },
  {
    id: 'safety_039',
    question: 'What are the psychological symptoms of stress?',
    answer: 'Fear, depression, guilt, anger, frustration, isolation, anxiety, mood changes',
    category: 'safety_wellness',
    subcategory: 'Stress Management',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['stress symptoms', 'psychological', 'depression']
  },
  {
    id: 'safety_040',
    question: 'What stress management strategies should EMS providers use?',
    answer: 'Minimize controllable stressors, change perspective on uncontrollable stressors, seek professional help when needed',
    category: 'safety_wellness',
    subcategory: 'Stress Management',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['stress management', 'controllable stressors', 'perspective']
  },
  {
    id: 'safety_041',
    question: 'What role does social support play in stress management?',
    answer: 'Provides emotional outlet, shared experiences, coping strategies, but should extend beyond work relationships',
    category: 'safety_wellness',
    subcategory: 'Stress Management',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['social support', 'coping', 'relationships']
  },
  {
    id: 'safety_042',
    question: 'What stimulants should be limited for better stress management?',
    answer: 'Caffeine, alcohol, tobacco - these can worsen stress response and interfere with sleep',
    category: 'safety_wellness',
    subcategory: 'Stress Management',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['stimulants', 'caffeine', 'alcohol limits']
  },
  {
    id: 'safety_043',
    question: 'What events typically trigger Critical Incident Stress Management (CISM)?',
    answer: 'Mass casualties, pediatric deaths, coworker injury/death, unusual violence, personal threat',
    category: 'safety_wellness',
    subcategory: 'Stress Management',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['CISM triggers', 'critical incidents', 'pediatric deaths']
  },
  {
    id: 'safety_044',
    question: 'What is defusing in CISM?',
    answer: 'Immediate stress intervention during or right after a critical incident to provide initial support',
    category: 'safety_wellness',
    subcategory: 'Stress Management',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['CISM defusing', 'immediate intervention', 'initial support']
  },
  {
    id: 'safety_045',
    question: 'When does debriefing occur in CISM?',
    answer: '24-72 hours post-incident - structured group discussion to process the critical event',
    category: 'safety_wellness',
    subcategory: 'Stress Management',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['CISM debriefing', '24-72 hours', 'group discussion']
  },
  {
    id: 'safety_046',
    question: 'What are warning signs of PTSD in EMS personnel?',
    answer: 'Re-experiencing events, hypervigilance, avoidance behaviors, sleep disturbance, emotional numbing',
    category: 'safety_wellness',
    subcategory: 'Stress Management',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['PTSD warning signs', 're-experiencing', 'hypervigilance']
  },
  {
    id: 'safety_047',
    question: 'Why is professional counseling important for EMS stress?',
    answer: 'Provides objective perspective, coping strategies, early intervention for serious mental health issues',
    category: 'safety_wellness',
    subcategory: 'Stress Management',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['professional counseling', 'objective perspective', 'early intervention']
  },
  {
    id: 'safety_048',
    question: 'How can EMS providers build resilience to stress?',
    answer: 'Regular exercise, healthy nutrition, adequate sleep, social connections, mindfulness practices, hobby activities',
    category: 'safety_wellness',
    subcategory: 'Stress Management',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['resilience building', 'exercise', 'nutrition']
  },
  {
    id: 'safety_049',
    question: 'What is the difference between stress and critical incident stress?',
    answer: 'Stress is ongoing job-related pressure; critical incident stress is acute reaction to traumatic events',
    category: 'safety_wellness',
    subcategory: 'Stress Management',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['stress vs critical incident', 'acute reaction', 'traumatic events']
  },
  {
    id: 'safety_050',
    question: 'When should EMS providers seek immediate help for stress?',
    answer: 'Thoughts of self-harm, substance abuse, inability to function, persistent depression, relationship breakdown',
    category: 'safety_wellness',
    subcategory: 'Stress Management',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['immediate help', 'self-harm thoughts', 'substance abuse']
  },

  // ===============================
  // LEGAL & ETHICAL ISSUES
  // ===============================

  // Consent Types (12 cards)
  {
    id: 'legal_001',
    question: 'What are the 4 main types of consent in EMS?',
    answer: 'Express consent, Implied consent, Involuntary consent, Minor consent (parent/guardian)',
    category: 'legal_ethics',
    subcategory: 'Consent Types',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['consent types', 'express', 'implied', 'involuntary']
  },
  {
    id: 'legal_002',
    question: 'When is express consent required?',
    answer: 'Conscious and competent adult patients - requires direct verbal or written agreement to treatment',
    category: 'legal_ethics',
    subcategory: 'Consent Types',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['express consent', 'conscious', 'competent', 'agreement']
  },
  {
    id: 'legal_003',
    question: 'When does implied consent apply?',
    answer: 'Unconscious patients or immediate life-threatening emergencies where a reasonable person would want care',
    category: 'legal_ethics',
    subcategory: 'Consent Types',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['implied consent', 'unconscious', 'life-threatening', 'reasonable person']
  },
  {
    id: 'legal_004',
    question: 'What is involuntary consent and when does it apply?',
    answer: 'Legal authority grants consent for patients with mental illness, behavioral emergencies, or in police custody',
    category: 'legal_ethics',
    subcategory: 'Consent Types',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['involuntary consent', 'mental illness', 'legal authority']
  },
  {
    id: 'legal_005',
    question: 'Who can provide consent for minor patients?',
    answer: 'Parent or legal guardian, except for emancipated minors or emergency situations',
    category: 'legal_ethics',
    subcategory: 'Consent Types',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['minor consent', 'parent', 'guardian', 'emancipated']
  },
  {
    id: 'legal_006',
    question: 'What makes consent "informed"?',
    answer: 'Patient understands the treatment, risks, benefits, and alternatives before agreeing',
    category: 'legal_ethics',
    subcategory: 'Consent Types',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['informed consent', 'understanding', 'risks', 'benefits']
  },
  {
    id: 'legal_007',
    question: 'Can an intoxicated patient give valid consent?',
    answer: 'No - alcohol/drug impairment affects decision-making capacity, may require involuntary consent',
    category: 'legal_ethics',
    subcategory: 'Consent Types',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['intoxicated consent', 'impairment', 'decision-making']
  },
  {
    id: 'legal_008',
    question: 'What consent applies for psychiatric patients?',
    answer: 'Depends on competency assessment - may require involuntary consent with legal authority',
    category: 'legal_ethics',
    subcategory: 'Consent Types',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['psychiatric consent', 'competency', 'involuntary']
  },
  {
    id: 'legal_009',
    question: 'When can you treat a minor without parental consent?',
    answer: 'Emergency situations, emancipated minors, or when parent/guardian cannot be contacted',
    category: 'legal_ethics',
    subcategory: 'Consent Types',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['minor emergency', 'emancipated', 'parental contact']
  },
  {
    id: 'legal_010',
    question: 'What is the difference between consent and assent?',
    answer: 'Consent is legal agreement from competent person; assent is cooperation from someone who cannot legally consent',
    category: 'legal_ethics',
    subcategory: 'Consent Types',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['consent vs assent', 'legal agreement', 'cooperation']
  },
  {
    id: 'legal_011',
    question: 'Can conscious patients withdraw consent during treatment?',
    answer: 'Yes - competent patients can withdraw consent at any time, but must understand consequences',
    category: 'legal_ethics',
    subcategory: 'Consent Types',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['withdraw consent', 'competent', 'consequences']
  },
  {
    id: 'legal_012',
    question: 'What documentation is required for consent issues?',
    answer: 'Patient competency assessment, explanation given, patient response, witness signatures when needed',
    category: 'legal_ethics',
    subcategory: 'Consent Types',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['consent documentation', 'competency', 'witness']
  },

  // Legal Concepts (13 cards)
  {
    id: 'legal_013',
    question: 'What are the 4 required elements of negligence?',
    answer: 'Duty, Breach of duty, Damages, and Causation (memory: "Duty Breached Damages Caused")',
    category: 'legal_ethics',
    subcategory: 'Legal Concepts',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['negligence elements', 'duty', 'breach', 'damages', 'causation']
  },
  {
    id: 'legal_014',
    question: 'What is "duty" in the context of negligence?',
    answer: 'Legal obligation to provide care once patient contact is established',
    category: 'legal_ethics',
    subcategory: 'Legal Concepts',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['duty', 'legal obligation', 'patient contact']
  },
  {
    id: 'legal_015',
    question: 'What constitutes "breach of duty" in EMS?',
    answer: 'Failing to meet the standard of care that a similarly trained person would provide',
    category: 'legal_ethics',
    subcategory: 'Legal Concepts',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['breach of duty', 'standard of care', 'similarly trained']
  },
  {
    id: 'legal_016',
    question: 'What is the difference between assault and battery?',
    answer: 'Assault is threat of bodily harm (verbal threat); Battery is unlawful touching without consent (physical contact)',
    category: 'legal_ethics',
    subcategory: 'Legal Concepts',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['assault vs battery', 'threat', 'unlawful touching']
  },
  {
    id: 'legal_017',
    question: 'What is abandonment in EMS?',
    answer: 'Terminating care without patient consent or transferring to equal or higher level of care',
    category: 'legal_ethics',
    subcategory: 'Legal Concepts',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['abandonment', 'terminating care', 'consent', 'transfer']
  },
  {
    id: 'legal_018',
    question: 'What is scope of practice?',
    answer: 'Care you are legally authorized to provide based on your certification level and training',
    category: 'legal_ethics',
    subcategory: 'Legal Concepts',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['scope of practice', 'legal authorization', 'certification']
  },
  {
    id: 'legal_019',
    question: 'What is standard of care?',
    answer: 'How a similarly trained person would act in the same situation with similar resources',
    category: 'legal_ethics',
    subcategory: 'Legal Concepts',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['standard of care', 'similarly trained', 'same situation']
  },
  {
    id: 'legal_020',
    question: 'What protection do Good Samaritan Laws provide?',
    answer: 'Legal protection for good faith care provided within your training level, usually off-duty',
    category: 'legal_ethics',
    subcategory: 'Legal Concepts',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['Good Samaritan', 'legal protection', 'good faith', 'off-duty']
  },
  {
    id: 'legal_021',
    question: 'When do Good Samaritan Laws NOT protect you?',
    answer: 'Gross negligence, acting outside training, expecting payment, or on-duty situations',
    category: 'legal_ethics',
    subcategory: 'Legal Concepts',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['Good Samaritan limits', 'gross negligence', 'outside training']
  },
  {
    id: 'legal_022',
    question: 'What is the legal relationship between EMTs and medical directors?',
    answer: 'Physician extends their medical license to EMTs operating under protocols and supervision',
    category: 'legal_ethics',
    subcategory: 'Legal Concepts',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['medical director', 'license extension', 'protocols']
  },
  {
    id: 'legal_023',
    question: 'What is the difference between criminal and civil liability?',
    answer: 'Criminal: prosecution by state for crimes; Civil: lawsuits by individuals for damages/compensation',
    category: 'legal_ethics',
    subcategory: 'Legal Concepts',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['criminal vs civil', 'prosecution', 'lawsuits']
  },
  {
    id: 'legal_024',
    question: 'What constitutes false imprisonment in EMS?',
    answer: 'Transporting competent patient against their will without legal authority or proper consent',
    category: 'legal_ethics',
    subcategory: 'Legal Concepts',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['false imprisonment', 'against will', 'competent patient']
  },
  {
    id: 'legal_025',
    question: 'When can you be held liable for damages as an EMT?',
    answer: 'When all 4 elements of negligence are proven: duty, breach, damages, and causation',
    category: 'legal_ethics',
    subcategory: 'Legal Concepts',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['liability', 'negligence elements', 'damages']
  },

  // HIPAA (12 cards)
  {
    id: 'legal_026',
    question: 'What does HIPAA stand for and what does it protect?',
    answer: 'Health Insurance Portability and Accountability Act - protects Protected Health Information (PHI)',
    category: 'legal_ethics',
    subcategory: 'HIPAA',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['HIPAA', 'protected health information', 'PHI']
  },
  {
    id: 'legal_027',
    question: 'What is Protected Health Information (PHI)?',
    answer: 'Medical information combined with identifiable information (name, address, SSN, etc.)',
    category: 'legal_ethics',
    subcategory: 'HIPAA',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['PHI', 'medical information', 'identifiable']
  },
  {
    id: 'legal_028',
    question: 'When can PHI be released without patient authorization?',
    answer: 'Treatment/payment/healthcare operations, legal subpoena, court order, public health reporting',
    category: 'legal_ethics',
    subcategory: 'HIPAA',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['PHI release', 'authorization', 'subpoena', 'court order']
  },
  {
    id: 'legal_029',
    question: 'What is the minimum necessary rule under HIPAA?',
    answer: 'Only share the minimum amount of PHI necessary to accomplish the intended purpose',
    category: 'legal_ethics',
    subcategory: 'HIPAA',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['minimum necessary', 'limited sharing', 'purpose']
  },
  {
    id: 'legal_030',
    question: 'Can you discuss patient information with family members?',
    answer: 'Only with patient consent or if patient lacks capacity and family is making healthcare decisions',
    category: 'legal_ethics',
    subcategory: 'HIPAA',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['family discussion', 'patient consent', 'healthcare decisions']
  },
  {
    id: 'legal_031',
    question: 'What HIPAA rules apply to social media and EMS?',
    answer: 'Never post patient information online - professional conduct standards apply to all social media',
    category: 'legal_ethics',
    subcategory: 'HIPAA',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['social media', 'patient information', 'professional conduct']
  },
  {
    id: 'legal_032',
    question: 'When can patient information be shared with other healthcare providers?',
    answer: 'For treatment, payment, and healthcare operations (TPO) without specific patient authorization',
    category: 'legal_ethics',
    subcategory: 'HIPAA',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['healthcare sharing', 'TPO', 'treatment payment operations']
  },
  {
    id: 'legal_033',
    question: 'What constitutes a HIPAA violation in EMS?',
    answer: 'Unauthorized access, sharing PHI without permission, inadequate security, gossiping about patients',
    category: 'legal_ethics',
    subcategory: 'HIPAA',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['HIPAA violation', 'unauthorized access', 'gossiping']
  },
  {
    id: 'legal_034',
    question: 'Can you use patient information for research purposes?',
    answer: 'Only with proper authorization, de-identification, or institutional review board approval',
    category: 'legal_ethics',
    subcategory: 'HIPAA',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['research use', 'authorization', 'de-identification']
  },
  {
    id: 'legal_035',
    question: 'What should you do if you witness a HIPAA violation?',
    answer: 'Report to supervisor, compliance officer, or privacy officer according to organization policy',
    category: 'legal_ethics',
    subcategory: 'HIPAA',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['reporting violations', 'supervisor', 'compliance officer']
  },
  {
    id: 'legal_036',
    question: 'How long must healthcare records be retained?',
    answer: 'Varies by state law (typically 7-10 years for adults, longer for minors)',
    category: 'legal_ethics',
    subcategory: 'HIPAA',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['record retention', 'state law', 'adults vs minors']
  },
  {
    id: 'legal_037',
    question: 'What is de-identified health information?',
    answer: 'Health information with all identifying elements removed - not subject to HIPAA restrictions',
    category: 'legal_ethics',
    subcategory: 'HIPAA',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['de-identified', 'identifying elements', 'no restrictions']
  },

  // Advanced Directives (13 cards)
  {
    id: 'legal_038',
    question: 'What are the 4 requirements for a valid DNR order?',
    answer: '1. Clear statement of medical condition, 2. Patient/guardian signature, 3. Physician signature, 4. Dated within timeframe (varies by state)',
    category: 'legal_ethics',
    subcategory: 'Advanced Directives',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['DNR requirements', 'valid DNR', 'signatures', 'timeframe']
  },
  {
    id: 'legal_039',
    question: 'What does DNR stand for and what does it mean?',
    answer: 'Do Not Resuscitate - no CPR or advanced life support, but comfort care and supportive measures continue',
    category: 'legal_ethics',
    subcategory: 'Advanced Directives',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['DNR', 'do not resuscitate', 'comfort care']
  },
  {
    id: 'legal_040',
    question: 'What is the most important thing to remember about DNR orders?',
    answer: 'DNR does NOT equal "Do Not Treat" - provide comfort care, pain management, and supportive measures',
    category: 'legal_ethics',
    subcategory: 'Advanced Directives',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['DNR not do not treat', 'comfort care', 'pain management']
  },
  {
    id: 'legal_041',
    question: 'What care can you provide to a patient with a valid DNR?',
    answer: 'Comfort care, pain management, airway obstruction removal, basic supportive measures, emotional support',
    category: 'legal_ethics',
    subcategory: 'Advanced Directives',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['DNR care allowed', 'comfort care', 'supportive measures']
  },
  {
    id: 'legal_042',
    question: 'What should you do if a DNR order seems questionable or invalid?',
    answer: 'Contact medical control, err on the side of providing care, document concerns thoroughly',
    category: 'legal_ethics',
    subcategory: 'Advanced Directives',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['questionable DNR', 'medical control', 'err on side of care']
  },
  {
    id: 'legal_043',
    question: 'Who can sign a DNR order for an incompetent patient?',
    answer: 'Legal guardian, healthcare proxy, or person with power of attorney for healthcare decisions',
    category: 'legal_ethics',
    subcategory: 'Advanced Directives',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['incompetent patient', 'legal guardian', 'healthcare proxy']
  },
  {
    id: 'legal_044',
    question: 'What is a living will?',
    answer: 'Written document expressing patient wishes for medical care when unable to communicate',
    category: 'legal_ethics',
    subcategory: 'Advanced Directives',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['living will', 'patient wishes', 'unable to communicate']
  },
  {
    id: 'legal_045',
    question: 'What is a healthcare proxy or power of attorney?',
    answer: 'Person designated to make healthcare decisions when patient cannot make decisions',
    category: 'legal_ethics',
    subcategory: 'Advanced Directives',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['healthcare proxy', 'power of attorney', 'decision making']
  },
  {
    id: 'legal_046',
    question: 'Can family members override a valid DNR order?',
    answer: 'No - family cannot override valid DNR unless they have legal authority (guardian, proxy)',
    category: 'legal_ethics',
    subcategory: 'Advanced Directives',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['family override', 'valid DNR', 'legal authority']
  },
  {
    id: 'legal_047',
    question: 'What should you do if family demands resuscitation despite valid DNR?',
    answer: 'Contact medical control, explain DNR validity, document family demands, follow medical direction',
    category: 'legal_ethics',
    subcategory: 'Advanced Directives',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['family demands', 'valid DNR', 'medical control']
  },
  {
    id: 'legal_048',
    question: 'When might you ignore a DNR order?',
    answer: 'If clearly invalid, forged, expired, or medical control directs you to proceed with resuscitation',
    category: 'legal_ethics',
    subcategory: 'Advanced Directives',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['ignore DNR', 'invalid', 'medical control direction']
  },
  {
    id: 'legal_049',
    question: 'What is the difference between DNR and DNI?',
    answer: 'DNR = Do Not Resuscitate (no CPR); DNI = Do Not Intubate (no advanced airway management)',
    category: 'legal_ethics',
    subcategory: 'Advanced Directives',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['DNR vs DNI', 'resuscitation', 'intubation']
  },
  {
    id: 'legal_050',
    question: 'How should DNR orders be documented in patient care reports?',
    answer: 'Note DNR status, validity assessment, care provided, family interactions, medical control contact',
    category: 'legal_ethics',
    subcategory: 'Advanced Directives',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['DNR documentation', 'validity', 'care provided']
  },

  // ===============================
  // COMMUNICATIONS & DOCUMENTATION
  // ===============================

  // Therapeutic Communication (12 cards)
  {
    id: 'comm_001',
    question: 'What are the two main types of questions in therapeutic communication?',
    answer: 'Open-ended questions (preferred for gathering information) and Closed-ended questions (when specific answers needed)',
    category: 'communications',
    subcategory: 'Therapeutic Communication',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['open-ended', 'closed-ended', 'questions']
  },
  {
    id: 'comm_002',
    question: 'Give an example of an open-ended question for patient assessment.',
    answer: '"What seems to be bothering you?" or "Can you tell me what happened?" - encourages patient to provide details',
    category: 'communications',
    subcategory: 'Therapeutic Communication',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['open-ended examples', 'patient assessment', 'details']
  },
  {
    id: 'comm_003',
    question: 'Give an example of a closed-ended question in EMS.',
    answer: '"Are you having chest pain?" or "Is the pain worse now?" - requires specific yes/no or brief answers',
    category: 'communications',
    subcategory: 'Therapeutic Communication',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['closed-ended examples', 'specific answers', 'yes/no']
  },
  {
    id: 'comm_004',
    question: 'What is facilitation in therapeutic communication?',
    answer: 'Encouraging the patient to continue talking by using phrases like "go on" or "tell me more"',
    category: 'communications',
    subcategory: 'Therapeutic Communication',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['facilitation', 'encouraging', 'continue talking']
  },
  {
    id: 'comm_005',
    question: 'What is reflection in therapeutic communication?',
    answer: 'Restating the patient\'s words to confirm understanding and show you\'re listening',
    category: 'communications',
    subcategory: 'Therapeutic Communication',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['reflection', 'restating', 'confirm understanding']
  },
  {
    id: 'comm_006',
    question: 'How do you demonstrate empathy in patient communication?',
    answer: 'Acknowledge patient feelings without judgment: "This must be scary for you" or "I can see you\'re worried"',
    category: 'communications',
    subcategory: 'Therapeutic Communication',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['empathy', 'acknowledge feelings', 'no judgment']
  },
  {
    id: 'comm_007',
    question: 'What is clarification and when should you use it?',
    answer: 'Asking for more specific information: "Can you explain what you mean by...?" when patient statements are unclear',
    category: 'communications',
    subcategory: 'Therapeutic Communication',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['clarification', 'specific information', 'unclear statements']
  },
  {
    id: 'comm_008',
    question: 'What non-verbal communication is important in EMS?',
    answer: 'Eye contact, calm body language, appropriate tone of voice, active listening posture',
    category: 'communications',
    subcategory: 'Therapeutic Communication',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['non-verbal', 'eye contact', 'body language', 'tone']
  },
  {
    id: 'comm_009',
    question: 'How should you communicate with anxious or scared patients?',
    answer: 'Speak slowly and calmly, explain what you\'re doing, provide reassurance, maintain eye contact',
    category: 'communications',
    subcategory: 'Therapeutic Communication',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['anxious patients', 'speak calmly', 'explain actions', 'reassurance']
  },
  {
    id: 'comm_010',
    question: 'What communication barriers should EMTs be aware of?',
    answer: 'Pain, fear, medications, language differences, hearing/vision impairments, cultural differences',
    category: 'communications',
    subcategory: 'Therapeutic Communication',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['communication barriers', 'pain', 'fear', 'language', 'impairments']
  },
  {
    id: 'comm_011',
    question: 'How can you build rapport with patients quickly?',
    answer: 'Introduce yourself, use patient\'s name, show genuine concern, listen actively, respect dignity',
    category: 'communications',
    subcategory: 'Therapeutic Communication',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['build rapport', 'introduce', 'patient name', 'genuine concern']
  },
  {
    id: 'comm_012',
    question: 'What should you avoid saying to distressed patients?',
    answer: 'Avoid: "Calm down," "Everything will be fine," "I know how you feel" - these minimize their concerns',
    category: 'communications',
    subcategory: 'Therapeutic Communication',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['avoid saying', 'minimize concerns', 'distressed patients']
  },

  // Special Populations (13 cards)
  {
    id: 'comm_013',
    question: 'What are key communication strategies for elderly patients?',
    answer: 'Identify yourself and credentials, don\'t assume confusion, allow extra time, locate hearing aids/glasses',
    category: 'communications',
    subcategory: 'Special Populations',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['elderly communication', 'identify credentials', 'hearing aids']
  },
  {
    id: 'comm_014',
    question: 'Why shouldn\'t you assume elderly patients are confused?',
    answer: 'Confusion may be due to medical emergency, medications, or hypoxia - not normal aging',
    category: 'communications',
    subcategory: 'Special Populations',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['elderly confusion', 'medical emergency', 'not normal aging']
  },
  {
    id: 'comm_015',
    question: 'What should you address with elderly patients beyond medical needs?',
    answer: 'Concerns about pets, home security, medication management, family notification',
    category: 'communications',
    subcategory: 'Special Populations',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['elderly concerns', 'pets', 'home security', 'medications']
  },
  {
    id: 'comm_016',
    question: 'How should you communicate with pediatric patients?',
    answer: 'Understand developmental fears, allow comfort items, keep family present, be honest in age-appropriate language',
    category: 'communications',
    subcategory: 'Special Populations',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['pediatric communication', 'developmental fears', 'comfort items']
  },
  {
    id: 'comm_017',
    question: 'What position should you take when talking to children?',
    answer: 'Position yourself at the child\'s eye level to appear less threatening and more approachable',
    category: 'communications',
    subcategory: 'Special Populations',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['child position', 'eye level', 'less threatening']
  },
  {
    id: 'comm_018',
    question: 'How should you communicate with hearing-impaired patients?',
    answer: 'Position for lip reading, speak slowly and clearly (never shout), have paper/pen available, secure hearing aids',
    category: 'communications',
    subcategory: 'Special Populations',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['hearing impaired', 'lip reading', 'speak clearly', 'paper pen']
  },
  {
    id: 'comm_019',
    question: 'What basic sign language should EMTs know?',
    answer: 'Basic signs for "sick," "hurt," "help," "hospital," and "pain" can improve communication',
    category: 'communications',
    subcategory: 'Special Populations',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['sign language', 'basic signs', 'sick hurt help']
  },
  {
    id: 'comm_020',
    question: 'How should you communicate with visually impaired patients?',
    answer: 'Ask about degree of vision loss, explain everything you\'re doing, maintain appropriate physical contact, transport aids',
    category: 'communications',
    subcategory: 'Special Populations',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['visually impaired', 'explain actions', 'physical contact', 'transport aids']
  },
  {
    id: 'comm_021',
    question: 'What should you do with guide dogs during patient transport?',
    answer: 'Transport guide dogs when possible - they provide emotional support and independence for the patient',
    category: 'communications',
    subcategory: 'Special Populations',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['guide dogs', 'transport', 'emotional support', 'independence']
  },
  {
    id: 'comm_022',
    question: 'How should you communicate with non-English speaking patients?',
    answer: 'Use short simple questions, point to body parts, use family interpreter temporarily, request hospital translator',
    category: 'communications',
    subcategory: 'Special Populations',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['non-English', 'simple questions', 'point', 'translator']
  },
  {
    id: 'comm_023',
    question: 'What common phrases should EMTs learn in local languages?',
    answer: 'Basic phrases like "sick," "pain," "help," "hospital," "medicine," and "family" in prevalent local languages',
    category: 'communications',
    subcategory: 'Special Populations',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['local languages', 'common phrases', 'sick pain help']
  },
  {
    id: 'comm_024',
    question: 'Why is respecting modesty important even in young children?',
    answer: 'Protects dignity, builds trust, follows appropriate boundaries, reduces trauma and fear',
    category: 'communications',
    subcategory: 'Special Populations',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['child modesty', 'dignity', 'trust', 'appropriate boundaries']
  },
  {
    id: 'comm_025',
    question: 'What are the 5 components of emotional intelligence in EMS?',
    answer: 'Self-awareness, Self-regulation, Motivation, Empathy, Social skills',
    category: 'communications',
    subcategory: 'Special Populations',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['emotional intelligence', 'self-awareness', 'empathy', 'social skills']
  },

  // Radio Protocols (12 cards)
  {
    id: 'comm_026',
    question: 'What information must you provide to dispatch upon scene arrival?',
    answer: 'Unit arrival on scene, scene size-up findings, additional resource needs, initial patient condition',
    category: 'communications',
    subcategory: 'Radio Protocols',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['dispatch arrival', 'scene size-up', 'resources', 'patient condition']
  },
  {
    id: 'comm_027',
    question: 'What are the required communications to dispatch during a call?',
    answer: 'Scene arrival, resource needs, patient updates, departure from scene, hospital arrival, return to service',
    category: 'communications',
    subcategory: 'Radio Protocols',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['required communications', 'arrival departure', 'return to service']
  },
  {
    id: 'comm_028',
    question: 'Who regulates EMS radio communications?',
    answer: 'Federal Communications Commission (FCC) - allocates frequencies, issues licenses, sets equipment standards',
    category: 'communications',
    subcategory: 'Radio Protocols',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['FCC regulation', 'frequencies', 'licenses', 'standards']
  },
  {
    id: 'comm_029',
    question: 'What does the FCC regulate in EMS communications?',
    answer: 'Specific frequencies, licenses and call signs, equipment standards, transmitter power, operations monitoring',
    category: 'communications',
    subcategory: 'Radio Protocols',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['FCC duties', 'call signs', 'transmitter power', 'monitoring']
  },
  {
    id: 'comm_030',
    question: 'What is the purpose of using clear, concise radio communication?',
    answer: 'Minimize airtime usage, reduce misunderstanding, ensure critical information transfer, maintain professional image',
    category: 'communications',
    subcategory: 'Radio Protocols',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['clear communication', 'minimize airtime', 'critical information']
  },
  {
    id: 'comm_031',
    question: 'When should you use plain English instead of codes on the radio?',
    answer: 'Most modern EMS systems prefer plain English for clarity and universal understanding',
    category: 'communications',
    subcategory: 'Radio Protocols',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['plain English', 'clarity', 'universal understanding']
  },
  {
    id: 'comm_032',
    question: 'What radio etiquette rules should EMTs follow?',
    answer: 'Wait for clear channel, listen before transmitting, speak clearly, use proper unit identification',
    category: 'communications',
    subcategory: 'Radio Protocols',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['radio etiquette', 'clear channel', 'unit identification']
  },
  {
    id: 'comm_033',
    question: 'How should you handle equipment failure during radio communication?',
    answer: 'Switch to backup method, notify dispatch of failure, continue patient care priorities, document issues',
    category: 'communications',
    subcategory: 'Radio Protocols',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['equipment failure', 'backup method', 'patient care priority']
  },
  {
    id: 'comm_034',
    question: 'What backup communication methods should be available?',
    answer: 'Cell phones, alternative radio channels, neighboring unit relay, direct hospital contact',
    category: 'communications',
    subcategory: 'Radio Protocols',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['backup communication', 'cell phones', 'alternative channels']
  },
  {
    id: 'comm_035',
    question: 'What information should NOT be transmitted over the radio?',
    answer: 'Patient names, specific addresses (use cross streets), sensitive personal information, opinions',
    category: 'communications',
    subcategory: 'Radio Protocols',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['radio restrictions', 'patient names', 'sensitive information']
  },
  {
    id: 'comm_036',
    question: 'How should you confirm understanding of radio orders?',
    answer: 'Repeat order word-for-word, receive confirmation, question orders that don\'t make sense',
    category: 'communications',
    subcategory: 'Radio Protocols',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['confirm orders', 'repeat word-for-word', 'question unclear']
  },
  {
    id: 'comm_037',
    question: 'What should you do if you don\'t understand a radio transmission?',
    answer: 'Ask for clarification immediately, don\'t assume meaning, repeat back what you think you heard',
    category: 'communications',
    subcategory: 'Radio Protocols',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['clarification', 'don\'t assume', 'repeat back']
  },

  // Documentation (13 cards)
  {
    id: 'comm_038',
    question: 'What are the 5 main functions of Patient Care Reports (PCR)?',
    answer: '1. Legal protection, 2. Billing/reimbursement, 3. Quality improvement, 4. Continuity of care, 5. Research',
    category: 'communications',
    subcategory: 'Documentation',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['PCR functions', 'legal protection', 'billing', 'quality improvement']
  },
  {
    id: 'comm_039',
    question: 'What does the CHART documentation method include?',
    answer: 'Chief complaint, History, Assessment, Treatment, Transport',
    category: 'communications',
    subcategory: 'Documentation',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['CHART method', 'chief complaint', 'history', 'assessment']
  },
  {
    id: 'comm_040',
    question: 'What does the SOAP documentation method include?',
    answer: 'Subjective (patient statements), Objective (findings), Assessment (clinical impression), Plan (treatment)',
    category: 'communications',
    subcategory: 'Documentation',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['SOAP method', 'subjective', 'objective', 'clinical impression']
  },
  {
    id: 'comm_041',
    question: 'What are the essential documentation rules for legal protection?',
    answer: 'Write legibly, use approved abbreviations, include all times, document all assessments, record treatments and responses',
    category: 'communications',
    subcategory: 'Documentation',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['legal documentation', 'legible', 'approved abbreviations', 'all times']
  },
  {
    id: 'comm_042',
    question: 'How should you correct errors in documentation?',
    answer: 'Draw single line through error, initial and date the correction, write correct information nearby, NEVER erase',
    category: 'communications',
    subcategory: 'Documentation',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['error correction', 'single line', 'initial and date', 'never erase']
  },
  {
    id: 'comm_043',
    question: 'What should you NEVER use to correct documentation errors?',
    answer: 'Correction fluid (white out), erasers, or any method that completely obscures the original writing',
    category: 'communications',
    subcategory: 'Documentation',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['never use', 'correction fluid', 'erasers', 'obscure writing']
  },
  {
    id: 'comm_044',
    question: 'What times must be documented in patient care reports?',
    answer: 'Dispatch time, arrival time, patient contact, departure from scene, hospital arrival',
    category: 'communications',
    subcategory: 'Documentation',
    difficulty: 'Basic',
    certificationLevel: 'All',
    tags: ['required times', 'dispatch', 'arrival', 'departure', 'hospital']
  },
  {
    id: 'comm_045',
    question: 'What is the SAFER framework for Health Information Exchanges?',
    answer: 'Search hospital records, Alert hospitals of incoming patients, File EMS data, Reconcile with outcome feedback',
    category: 'communications',
    subcategory: 'Documentation',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['SAFER framework', 'HIE', 'search alert file reconcile']
  },
  {
    id: 'comm_046',
    question: 'Why is thorough documentation especially important for refusals?',
    answer: 'Refusals are high-risk for lawsuits - must prove patient was competent and fully informed of risks',
    category: 'communications',
    subcategory: 'Documentation',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['refusal documentation', 'high-risk', 'competent', 'informed risks']
  },
  {
    id: 'comm_047',
    question: 'What should be documented for every patient refusal?',
    answer: 'Capacity assessment, risks/benefits explained, medical control contact, refusal form signed, alternative care offered',
    category: 'communications',
    subcategory: 'Documentation',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['refusal requirements', 'capacity assessment', 'medical control', 'signed form']
  },
  {
    id: 'comm_048',
    question: 'How do PCRs support quality improvement in EMS?',
    answer: 'Provide data for performance analysis, protocol effectiveness, outcome measurement, system optimization',
    category: 'communications',
    subcategory: 'Documentation',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['quality improvement', 'performance analysis', 'outcome measurement']
  },
  {
    id: 'comm_049',
    question: 'What makes documentation admissible in court?',
    answer: 'Contemporaneous recording, legible writing, no alterations, factual observations, proper signatures',
    category: 'communications',
    subcategory: 'Documentation',
    difficulty: 'Advanced',
    certificationLevel: 'All',
    tags: ['court admissible', 'contemporaneous', 'factual observations']
  },
  {
    id: 'comm_050',
    question: 'How should you document subjective vs objective information?',
    answer: 'Subjective: "Patient states..." Objective: "Patient appears..." or measurable findings',
    category: 'communications',
    subcategory: 'Documentation',
    difficulty: 'Intermediate',
    certificationLevel: 'All',
    tags: ['subjective vs objective', 'patient states', 'measurable findings']
  }
];

export const getFlashcardsByCategory = (categoryId: string): Flashcard[] => {
  return flashcards.filter(card => card.category === categoryId);
};

export const getFlashcardsByLevel = (level: string): Flashcard[] => {
  return flashcards.filter(card => card.certificationLevel === level || card.certificationLevel === 'All');
};

export const getFlashcardsByDifficulty = (difficulty: string): Flashcard[] => {
  return flashcards.filter(card => card.difficulty === difficulty);
};

export const searchFlashcards = (query: string): Flashcard[] => {
  const lowercaseQuery = query.toLowerCase();
  return flashcards.filter(card => 
    card.question.toLowerCase().includes(lowercaseQuery) ||
    card.answer.toLowerCase().includes(lowercaseQuery) ||
    card.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};