export interface TrainingScenario {
  id: string;
  title: string;
  certificationLevel: 'EMT' | 'AEMT' | 'Paramedic';
  difficulty: 'Basic' | 'Intermediate' | 'Advanced' | 'Expert';
  category: string;
  chiefComplaint: string;
  vitals: {
    initialVitals: Record<string, string>;
    followUpVitals?: Record<string, string>;
    criticalVitals?: Record<string, string>;
  };
  patientInfo: {
    age: string;
    gender: string;
    weight?: string;
    allergies?: string;
    medications?: string;
    history?: string;
    familyHistory?: string;
    socialHistory?: string;
  };
  presentation: string;
  criticalActions: Array<{
    action: string;
    timeLimit?: number;
    beyondScope?: string[];
    consequence?: string;
    complexityLevel?: 'standard' | 'advanced' | 'expert';
    alternativeActions?: string[];
    contraindications?: string[];
    choices: Array<{
      text: string;
      correct: boolean;
      feedback: string;
      consequence?: {
        patientEffect: string;
        timeDelay: number;
      };
    }>;
  }>;
  learningPoints: string[];
  debrief: string[];
  timer?: number;
  tags: string[];
  challengeModifiers?: {
    multiplePresentations?: boolean;
    deterioratingCondition?: boolean;
    familyInterference?: boolean;
    equipmentFailure?: boolean;
    resourceLimitations?: boolean;
    weatherConditions?: boolean;
    massCasualty?: boolean;
  };
  expertChallenges?: {
    differentialDiagnosis: string[];
    redHerrings: string[];
    timeConstraints: number;
    compoundingFactors: string[];
  };
}

export const trainingScenarios: TrainingScenario[] = [
  // EMT-Basic Scenarios (5) - Enhanced with Challenge Modifiers
  {
    id: 'emt-choking-infant',
    title: 'Choking Infant - Panicked Family Challenge',
    certificationLevel: 'EMT',
    difficulty: 'Advanced',
    category: 'Airway Management',
    chiefComplaint: '8-month-old infant choking on food',
    vitals: {
      initialVitals: {
        'Heart Rate': '140 bpm',
        'Respiratory Rate': 'Absent effective breathing',
        'Blood Pressure': 'Unable to obtain',
        'Oxygen Saturation': '85% and falling',
        'Temperature': '98.6°F',
        'AVPU': 'Alert but distressed'
      },
      criticalVitals: {
        'Heart Rate': '165 bpm (if hypoxia continues)',
        'Oxygen Saturation': '65% (if intervention delayed >90 seconds)',
        'Mental Status': 'Becoming limp and unresponsive'
      },
      followUpVitals: {
        'Heart Rate': '120 bpm (post-intervention)',
        'Respiratory Rate': '30/min (post-intervention)',
        'Oxygen Saturation': '98% (post-intervention)'
      }
    },
    patientInfo: {
      age: '8 months',
      gender: 'Female',
      weight: '8 kg',
      allergies: 'None known',
      medications: 'None',
      history: 'No significant medical history'
    },
    presentation: 'Parent reports infant was eating solid food when suddenly began choking. Infant is conscious but unable to cry effectively, with weak cough and cyanosis around lips. CHALLENGE: Hysterical mother grabbing at you, grandmother suggesting "turn baby upside down," father yelling conflicting advice. Cramped apartment with limited working space.',
    criticalActions: [
      {
        action: 'What is your first step?',
        timeLimit: 30,
        consequence: 'Delayed recognition leads to hypoxia',
        choices: [
          {
            text: 'Assess for complete vs partial obstruction - look for weak cry, cyanosis',
            correct: true,
            feedback: 'Correct! Clark County Protocol requires immediate assessment of obstruction severity.',
            consequence: { patientEffect: 'Obstruction severity confirmed', timeDelay: 0 }
          },
          {
            text: 'Immediately perform finger sweep to remove object',
            correct: false,
            feedback: 'Incorrect! Blind finger sweeps are contraindicated and may push object deeper.',
            consequence: { patientEffect: 'Risk of worsening obstruction', timeDelay: 5 }
          },
          {
            text: 'Place infant supine and begin CPR compressions',
            correct: false,
            feedback: 'Incorrect! CPR is not indicated for conscious choking infant.',
            consequence: { patientEffect: 'Inappropriate intervention', timeDelay: 5 }
          }
        ]
      },
      {
        action: 'What is your next step?',
        timeLimit: 45,
        consequence: 'Proper positioning critical for effectiveness',
        choices: [
          {
            text: 'Place infant face-down on forearm, support head/jaw, keep head lower than chest',
            correct: true,
            feedback: 'Excellent! Proper Clark County positioning for infant back blows.',
            consequence: { patientEffect: 'Optimal positioning achieved', timeDelay: 0 }
          },
          {
            text: 'Hold infant upright and perform gentle back pats',
            correct: false,
            feedback: 'Incorrect positioning. Back blows require head-down position for gravity assist.',
            consequence: { patientEffect: 'Ineffective positioning', timeDelay: 5 }
          },
          {
            text: 'Place infant on flat surface for back blows',
            correct: false,
            feedback: 'Incorrect! Infant must be supported on forearm with head down.',
            consequence: { patientEffect: 'Wrong positioning technique', timeDelay: 5 }
          }
        ]
      },
      {
        action: 'What is your next step?',
        timeLimit: 30,
        consequence: 'Technique must follow Clark County standards',
        choices: [
          {
            text: 'Deliver 5 sharp back blows between shoulder blades with heel of hand',
            correct: true,
            feedback: 'Correct! Clark County protocol specifies 5 back blows with proper force.',
            consequence: { patientEffect: 'Effective back blows delivered', timeDelay: 0 }
          },
          {
            text: 'Gently pat the back to avoid injury',
            correct: false,
            feedback: 'Insufficient force. Protocol requires sharp, forceful blows.',
            consequence: { patientEffect: 'Inadequate force applied', timeDelay: 5 }
          },
          {
            text: 'Perform continuous back blows until object dislodges',
            correct: false,
            feedback: 'Incorrect! Must alternate with chest thrusts per protocol.',
            consequence: { patientEffect: 'Protocol not followed', timeDelay: 5 }
          }
        ]
      },
      {
        action: 'What is your next step?',
        timeLimit: 30,
        consequence: 'Must alternate techniques as specified',
        choices: [
          {
            text: 'Turn infant face-up, deliver 5 chest thrusts with 2 fingers on lower sternum',
            correct: true,
            feedback: 'Perfect! Correct technique per Clark County choking protocol.',
            consequence: { patientEffect: 'Proper chest thrusts delivered', timeDelay: 0 }
          },
          {
            text: 'Continue back blows until obstruction clears',
            correct: false,
            feedback: 'Incorrect! Protocol requires alternating back blows and chest thrusts.',
            consequence: { patientEffect: 'Protocol deviation', timeDelay: 5 }
          },
          {
            text: 'Perform abdominal thrusts on infant',
            correct: false,
            feedback: 'Dangerous! Abdominal thrusts contraindicated in infants under 1 year.',
            consequence: { patientEffect: 'Risk of injury', timeDelay: 5 }
          }
        ]
      },
      {
        action: 'What is your next step?',
        timeLimit: 15,
        consequence: 'Visual confirmation required before finger sweeps',
        choices: [
          {
            text: 'Look in mouth, remove only if object is visible',
            correct: true,
            feedback: 'Correct! Only remove visible objects per Clark County guidelines.',
            consequence: { patientEffect: 'Safe object removal technique', timeDelay: 0 }
          },
          {
            text: 'Perform blind finger sweep to find object',
            correct: false,
            feedback: 'Dangerous! Blind finger sweeps can push object deeper.',
            consequence: { patientEffect: 'Risk of worsening obstruction', timeDelay: 5 }
          },
          {
            text: 'Use suction to remove any objects',
            correct: false,
            feedback: 'Incorrect timing. Visual confirmation needed first.',
            consequence: { patientEffect: 'Premature intervention', timeDelay: 5 }
          }
        ]
      }
    ],
    learningPoints: [
      'Infant choking technique differs from adult/child methods',
      'Never perform blind finger sweeps in infants',
      'Back blows and chest thrusts are alternated until obstruction clears',
      'Be prepared for post-obstruction respiratory support',
      'Complete obstruction requires immediate intervention'
    ],
    debrief: [
      'Recognize signs of complete vs. partial airway obstruction',
      'Proper infant positioning prevents caregiver injury',
      'Continue cycles until obstruction clears or infant becomes unconscious',
      'If unconscious, begin CPR with airway checks between cycles'
    ],
    timer: 300,
    tags: ['airway', 'pediatric', 'choking', 'BLS']
  },

  {
    id: 'emt-diabetic-emergency',
    title: 'Diabetic Emergency',
    certificationLevel: 'EMT',
    difficulty: 'Basic',
    category: 'Medical Emergency',
    chiefComplaint: 'Altered mental status in known diabetic',
    vitals: {
      initialVitals: {
        'Heart Rate': '110 bpm',
        'Respiratory Rate': '16/min',
        'Blood Pressure': '140/85 mmHg',
        'Oxygen Saturation': '97% on room air',
        'Temperature': '98.2°F',
        'Blood Glucose': '45 mg/dL',
        'AVPU': 'Verbal (confused)'
      },
      followUpVitals: {
        'Heart Rate': '88 bpm (post-glucose)',
        'Blood Glucose': '110 mg/dL (15 min post-glucose)',
        'AVPU': 'Alert and oriented'
      }
    },
    patientInfo: {
      age: '45 years',
      gender: 'Male',
      weight: '80 kg',
      allergies: 'NKDA',
      medications: 'Metformin, Insulin glargine',
      history: 'Type 1 Diabetes for 20 years'
    },
    presentation: 'Patient found by family confused and diaphoretic. States he took his insulin but forgot to eat breakfast. Can follow simple commands but disoriented to time and place.',
    criticalActions: [
      {
        action: 'What is your first step?',
        timeLimit: 120,
        consequence: 'Cannot determine if hypo or hyperglycemic without glucose check',
        choices: [
          {
            text: 'Obtain blood glucose reading immediately',
            correct: true,
            feedback: 'Correct! Blood glucose check is essential to differentiate hypo/hyperglycemia.',
            consequence: { patientEffect: 'Blood glucose: 45 mg/dL confirmed', timeDelay: 0 }
          },
          {
            text: 'Administer oral glucose immediately without testing',
            correct: false,
            feedback: 'Incorrect! Must confirm hypoglycemia before treatment.',
            consequence: { patientEffect: 'Cannot confirm diagnosis', timeDelay: 5 }
          },
          {
            text: 'Start IV and transport immediately',
            correct: false,
            feedback: 'Premature. Need glucose reading first per Clark County protocol.',
            consequence: { patientEffect: 'Delayed proper assessment', timeDelay: 5 }
          }
        ]
      },
      {
        action: 'What is your next step?',
        timeLimit: 60,
        consequence: 'Oral glucose in unconscious patient can cause aspiration',
        choices: [
          {
            text: 'Assess patient\'s ability to swallow safely',
            correct: true,
            feedback: 'Excellent! Must ensure safe swallowing before oral glucose.',
            consequence: { patientEffect: 'Patient able to follow commands', timeDelay: 0 }
          },
          {
            text: 'Force oral glucose gel into mouth',
            correct: false,
            feedback: 'Dangerous! Risk of aspiration in altered mental status.',
            consequence: { patientEffect: 'Aspiration risk created', timeDelay: 5 }
          },
          {
            text: 'Place patient supine for glucose administration',
            correct: false,
            feedback: 'Incorrect positioning increases aspiration risk.',
            consequence: { patientEffect: 'Increased aspiration risk', timeDelay: 5 }
          }
        ]
      },
      {
        action: 'What is your next step?',
        timeLimit: 180,
        consequence: 'Delayed treatment worsens neurological symptoms',
        choices: [
          {
            text: 'Administer 15g oral glucose gel',
            correct: true,
            feedback: 'Correct! Standard dose per Clark County protocol.',
            consequence: { patientEffect: 'Glucose administered safely', timeDelay: 0 }
          },
          {
            text: 'Give orange juice instead of glucose gel',
            correct: false,
            feedback: 'Suboptimal. Glucose gel is preferred for faster absorption.',
            consequence: { patientEffect: 'Slower treatment response', timeDelay: 5 }
          },
          {
            text: 'Wait for ALS to administer IV dextrose',
            correct: false,
            feedback: 'Unnecessary delay. Oral glucose is appropriate.',
            consequence: { patientEffect: 'Treatment delayed', timeDelay: 5 }
          }
        ]
      },
      {
        action: 'What is your next step?',
        timeLimit: 900,
        consequence: 'Need to monitor treatment effectiveness',
        choices: [
          {
            text: 'Reassess glucose level after 15 minutes',
            correct: true,
            feedback: 'Perfect! Standard monitoring per protocol.',
            consequence: { patientEffect: 'Glucose improved to 85 mg/dL', timeDelay: 0 }
          },
          {
            text: 'Immediately give second dose',
            correct: false,
            feedback: 'Premature. Must wait 15 minutes to assess effectiveness.',
            consequence: { patientEffect: 'Risk of rebound hyperglycemia', timeDelay: 5 }
          },
          {
            text: 'Transport immediately without reassessment',
            correct: false,
            feedback: 'Incomplete care. Must monitor treatment response.',
            consequence: { patientEffect: 'Unknown treatment effectiveness', timeDelay: 5 }
          }
        ]
      },
      {
        action: 'What is your next step?',
        timeLimit: 60,
        consequence: 'May need repeated doses for severe hypoglycemia',
        choices: [
          {
            text: 'Consider second dose if glucose still low and patient conscious',
            correct: true,
            feedback: 'Appropriate! May repeat if glucose remains <70 mg/dL.',
            consequence: { patientEffect: 'Complete resolution achieved', timeDelay: 0 }
          },
          {
            text: 'No further treatment needed regardless of glucose',
            correct: false,
            feedback: 'Incorrect. May need repeat dose if still hypoglycemic.',
            consequence: { patientEffect: 'Incomplete treatment', timeDelay: 5 }
          },
          {
            text: 'Switch to IV dextrose automatically',
            correct: false,
            feedback: 'Unnecessary if oral route still effective.',
            consequence: { patientEffect: 'Overly aggressive treatment', timeDelay: 5 }
          }
        ]
      }
    ],
    learningPoints: [
      'Blood glucose <70 mg/dL confirms hypoglycemia',
      'Oral glucose contraindicated in unconscious patients',
      'Conscious patient must be able to swallow safely',
      'Recheck glucose 15 minutes after treatment',
      'Consider causes: medication timing, missed meals, illness'
    ],
    debrief: [
      'Hypoglycemia can rapidly progress to unconsciousness',
      'Always assess swallowing ability before oral glucose',
      'If unconscious or unable to swallow, prepare for ALS intercept',
      'Educate patient on glucose monitoring and meal timing'
    ],
    timer: 600,
    tags: ['diabetes', 'hypoglycemia', 'oral-glucose', 'altered-mental-status']
  },

  {
    id: 'emt-elderly-fall',
    title: 'Elderly Fall - Hidden Hip Fracture',
    certificationLevel: 'EMT',
    difficulty: 'Intermediate',
    category: 'Trauma',
    chiefComplaint: '78-year-old female fell at home',
    vitals: {
      initialVitals: {
        'Heart Rate': '105 bpm',
        'Respiratory Rate': '20/min',
        'Blood Pressure': '160/90 mmHg',
        'Oxygen Saturation': '95% on room air',
        'Temperature': '97.8°F',
        'AVPU': 'Alert but confused'
      }
    },
    patientInfo: {
      age: '78 years',
      gender: 'Female',
      weight: '65 kg',
      allergies: 'Penicillin',
      medications: 'Warfarin, Metoprolol, Donepezil',
      history: 'Alzheimer\'s disease, Atrial fibrillation, Osteoporosis'
    },
    presentation: 'Patient found on bathroom floor by daughter. States she "just slipped" but cannot remember details. Complains of mild hip discomfort but denies severe pain. Able to move leg but reluctant to bear weight.',
    criticalActions: [
      {
        action: 'What is your first step?',
        timeLimit: 300,
        consequence: 'Falls can cause multiple injuries in elderly patients',
        choices: [
          {
            text: 'Complete trauma assessment with C-spine precautions',
            correct: true,
            feedback: 'Correct! All trauma patients need systematic assessment.',
            consequence: { patientEffect: 'Full assessment completed safely', timeDelay: 0 }
          },
          {
            text: 'Focus only on the hip complaint',
            correct: false,
            feedback: 'Incomplete! Falls can cause multiple injuries.',
            consequence: { patientEffect: 'Missed potential injuries', timeDelay: 5 }
          },
          {
            text: 'Have patient stand to test mobility',
            correct: false,
            feedback: 'Dangerous! Never test weight bearing with suspected fracture.',
            consequence: { patientEffect: 'Risk of worsening injury', timeDelay: 5 }
          }
        ]
      },
      {
        action: 'What is your next step?',
        timeLimit: 120,
        consequence: 'Hip fractures may have subtle presentation in elderly',
        choices: [
          {
            text: 'Palpate pelvis and hip for deformity/tenderness',
            correct: true,
            feedback: 'Excellent! Gentle palpation can reveal fractures.',
            consequence: { patientEffect: 'Tenderness found over greater trochanter', timeDelay: 0 }
          },
          {
            text: 'Apply traction to straighten the leg',
            correct: false,
            feedback: 'Contraindicated! Never apply traction to suspected fractures.',
            consequence: { patientEffect: 'Severe pain and possible displacement', timeDelay: 5 }
          },
          {
            text: 'Skip physical exam due to patient age',
            correct: false,
            feedback: 'Incomplete care. Gentle assessment is still needed.',
            consequence: { patientEffect: 'Fracture goes undetected', timeDelay: 5 }
          }
        ]
      },
      {
        action: 'What is your next step?',
        timeLimit: 60,
        consequence: 'Classic signs of hip fracture may be minimal',
        choices: [
          {
            text: 'Assess for external rotation and leg shortening',
            correct: true,
            feedback: 'Perfect! Classic signs of hip fracture.',
            consequence: { patientEffect: 'External rotation noted', timeDelay: 0 }
          },
          {
            text: 'Perform range of motion testing',
            correct: false,
            feedback: 'Inappropriate! ROM testing can worsen fracture.',
            consequence: { patientEffect: 'Increased pain and injury', timeDelay: 5 }
          },
          {
            text: 'Apply ice directly to skin',
            correct: false,
            feedback: 'Risk of frostbite in elderly. Use barrier if applying cold.',
            consequence: { patientEffect: 'Skin injury risk', timeDelay: 5 }
          }
        ]
      },
      {
        action: 'What is your next step?',
        timeLimit: 30,
        consequence: 'Movement can worsen fracture and increase pain',
        choices: [
          {
            text: 'Do NOT attempt to straighten or move the leg',
            correct: true,
            feedback: 'Absolutely correct! Immobilize in position found.',
            consequence: { patientEffect: 'Position maintained safely', timeDelay: 0 }
          },
          {
            text: 'Straighten leg to anatomical position',
            correct: false,
            feedback: 'Dangerous! This can worsen fracture displacement.',
            consequence: { patientEffect: 'Fracture displacement worsened', timeDelay: 5 }
          },
          {
            text: 'Have patient try to move leg to assess function',
            correct: false,
            feedback: 'Inappropriate! Patient movement can cause harm.',
            consequence: { patientEffect: 'Severe pain and possible damage', timeDelay: 5 }
          }
        ]
      },
      {
        action: 'What is your next step?',
        timeLimit: 180,
        consequence: 'Proper immobilization reduces pain and prevents further injury',
        choices: [
          {
            text: 'Immobilize in position of comfort with pillows and blankets',
            correct: true,
            feedback: 'Excellent! Proper immobilization technique.',
            consequence: { patientEffect: 'Pain reduced, stable position', timeDelay: 0 }
          },
          {
            text: 'Apply rigid splint to straighten leg',
            correct: false,
            feedback: 'Wrong approach! Use position of comfort.',
            consequence: { patientEffect: 'Increased pain', timeDelay: 5 }
          },
          {
            text: 'No immobilization needed for elderly patients',
            correct: false,
            feedback: 'Incorrect! All fractures need immobilization.',
            consequence: { patientEffect: 'Continued pain and instability', timeDelay: 5 }
          }
        ]
      },
      {
        action: 'What is your next step?',
        timeLimit: 60,
        consequence: 'Elderly patients can deteriorate rapidly with blood loss',
        choices: [
          {
            text: 'Monitor for signs of shock (elderly compensate poorly)',
            correct: true,
            feedback: 'Critical! Elderly patients decompensate quickly.',
            consequence: { patientEffect: 'Vital signs stable and monitored', timeDelay: 0 }
          },
          {
            text: 'Focus only on pain management',
            correct: false,
            feedback: 'Incomplete! Must monitor for shock development.',
            consequence: { patientEffect: 'Shock signs missed', timeDelay: 5 }
          },
          {
            text: 'Assume stable because patient is talking',
            correct: false,
            feedback: 'Dangerous assumption! Elderly can talk while in shock.',
            consequence: { patientEffect: 'Deterioration undetected', timeDelay: 5 }
          }
        ]
      }
    ],
    learningPoints: [
      'Hip fractures in elderly may present with minimal pain',
      'Dementia patients may not communicate pain effectively',
      'Warfarin increases bleeding risk with fractures',
      'Look for subtle signs: external rotation, leg shortening',
      'Never force straightening of suspected fractures'
    ],
    debrief: [
      'High index of suspicion needed for elderly fall patients',
      'Mechanism of injury may be unclear with dementia',
      'Consider medical causes of fall (syncope, medication effects)',
      'Gentle handling prevents additional trauma'
    ],
    timer: 900,
    tags: ['trauma', 'elderly', 'hip-fracture', 'dementia', 'fall']
  },

  {
    id: 'emt-asthma-silent-chest',
    title: 'Asthma Attack - Silent Chest',
    certificationLevel: 'EMT',
    difficulty: 'Advanced',
    category: 'Respiratory Emergency',
    chiefComplaint: '16-year-old with severe asthma attack',
    vitals: {
      initialVitals: {
        'Heart Rate': '145 bpm',
        'Respiratory Rate': '8/min (shallow)',
        'Blood Pressure': '110/70 mmHg',
        'Oxygen Saturation': '78% on room air',
        'Temperature': '98.9°F',
        'Peak Flow': 'Unable to perform',
        'AVPU': 'Alert but exhausted'
      },
      followUpVitals: {
        'Heart Rate': '135 bpm (post high-flow O2)',
        'Respiratory Rate': '12/min',
        'Oxygen Saturation': '85% on 15L NRB'
      }
    },
    patientInfo: {
      age: '16 years',
      gender: 'Male',
      weight: '70 kg',
      allergies: 'Environmental allergens',
      medications: 'Albuterol inhaler (empty), Prednisone',
      history: 'Severe asthma, multiple hospitalizations'
    },
    presentation: 'Patient in tripod position, speaking in single words, appears exhausted. Family states he has been wheezing for 2 days but now "sounds quiet." Used entire rescue inhaler with no relief. Minimal air movement on auscultation.',
    criticalActions: [
      {
        action: 'What is your first step?',
        timeLimit: 60,
        consequence: 'Silent chest indicates minimal air movement - life threatening',
        choices: [
          {
            text: 'Recognize "silent chest" as sign of severe bronchospasm',
            correct: true,
            feedback: 'Critical recognition! Silent chest is more dangerous than wheezing.',
            consequence: { patientEffect: 'Severity properly assessed', timeDelay: 0 }
          },
          {
            text: 'Assume patient is improving since wheezing stopped',
            correct: false,
            feedback: 'Dangerous misconception! Silent chest indicates worsening.',
            consequence: { patientEffect: 'Critical delay in treatment', timeDelay: 5 }
          },
          {
            text: 'Focus on getting patient history first',
            correct: false,
            feedback: 'Wrong priority! Life-threatening signs need immediate recognition.',
            consequence: { patientEffect: 'Delayed critical intervention', timeDelay: 5 }
          }
        ]
      },
      {
        action: 'What is your next step?',
        timeLimit: 30,
        consequence: 'Severe hypoxemia requires immediate oxygenation',
        choices: [
          {
            text: 'Apply high-flow oxygen immediately (15L NRB)',
            correct: true,
            feedback: 'Excellent! High-flow oxygen is critical first intervention.',
            consequence: { patientEffect: 'Oxygen saturation improves to 89%', timeDelay: 0 }
          },
          {
            text: 'Start with low-flow oxygen (2L nasal cannula)',
            correct: false,
            feedback: 'Insufficient! Severe hypoxemia requires high-flow oxygen.',
            consequence: { patientEffect: 'Inadequate oxygenation', timeDelay: 5 }
          },
          {
            text: 'Wait for patient permission before applying oxygen',
            correct: false,
            feedback: 'Life-threatening emergency! Implied consent applies.',
            consequence: { patientEffect: 'Continued severe hypoxia', timeDelay: 5 }
          }
        ]
      },
      {
        action: 'What is your next step?',
        timeLimit: 120,
        consequence: 'Bronchodilator may help even in severe cases',
        choices: [
          {
            text: 'Assist with patient\'s albuterol inhaler if available',
            correct: true,
            feedback: 'Correct! EMTs can assist with patient-owned bronchodilators.',
            consequence: { patientEffect: 'Some improvement in air movement', timeDelay: 0 }
          },
          {
            text: 'Tell patient inhalers won\'t work in severe cases',
            correct: false,
            feedback: 'Incorrect! Even severe cases may respond to bronchodilators.',
            consequence: { patientEffect: 'Missed treatment opportunity', timeDelay: 5 }
          },
          {
            text: 'Administer epinephrine instead of albuterol',
            correct: false,
            feedback: 'Beyond EMT scope and inappropriate for asthma.',
            consequence: { patientEffect: 'Inappropriate medication choice', timeDelay: 5 }
          }
        ]
      },
      {
        action: 'What is your next step?',
        timeLimit: 30,
        consequence: 'Supine position worsens respiratory distress',
        choices: [
          {
            text: 'Position patient upright/tripod - do not force supine',
            correct: true,
            feedback: 'Perfect! Tripod position optimizes breathing mechanics.',
            consequence: { patientEffect: 'Breathing effort slightly improved', timeDelay: 0 }
          },
          {
            text: 'Place patient supine for easier assessment',
            correct: false,
            feedback: 'Dangerous! Supine position worsens respiratory distress.',
            consequence: { patientEffect: 'Severe worsening of distress', timeDelay: 5 }
          },
          {
            text: 'Have patient lie on side',
            correct: false,
            feedback: 'Suboptimal positioning for respiratory distress.',
            consequence: { patientEffect: 'Continued breathing difficulty', timeDelay: 5 }
          }
        ]
      },
      {
        action: 'What is your next step?',
        timeLimit: 60,
        consequence: 'Silent chest can progress to respiratory failure',
        choices: [
          {
            text: 'Prepare for possible respiratory arrest - ready BVM',
            correct: true,
            feedback: 'Excellent preparation! Silent chest can progress rapidly.',
            consequence: { patientEffect: 'Equipment ready for deterioration', timeDelay: 0 }
          },
          {
            text: 'Assume patient is stable since they\'re conscious',
            correct: false,
            feedback: 'False security! Silent chest patients can arrest suddenly.',
            consequence: { patientEffect: 'Unprepared for deterioration', timeDelay: 5 }
          },
          {
            text: 'Focus on comfort measures only',
            correct: false,
            feedback: 'Inadequate! Must prepare for potential respiratory failure.',
            consequence: { patientEffect: 'Not prepared for emergency', timeDelay: 5 }
          }
        ]
      },
      {
        action: 'What is your next step?',
        timeLimit: 30,
        consequence: 'Patient needs advanced interventions beyond EMT scope',
        choices: [
          {
            text: 'Request ALS intercept immediately',
            correct: true,
            feedback: 'Critical decision! Silent chest requires advanced interventions.',
            consequence: { patientEffect: 'Advanced care en route', timeDelay: 0 }
          },
          {
            text: 'Transport to closest hospital without ALS',
            correct: false,
            feedback: 'Suboptimal! ALS interventions may be life-saving.',
            consequence: { patientEffect: 'Delayed advanced treatment', timeDelay: 5 }
          },
          {
            text: 'Continue BLS treatment only',
            correct: false,
            feedback: 'Insufficient! Silent chest often requires ALS interventions.',
            consequence: { patientEffect: 'Inadequate level of care', timeDelay: 5 }
          }
        ]
      }
    ],
    learningPoints: [
      'Silent chest = no wheezing due to minimal air movement',
      'This is MORE dangerous than loud wheezing',
      'Patient may appear calm but is severely compromised',
      'Exhaustion indicates impending respiratory failure',
      'High-flow oxygen is critical first intervention'
    ],
    debrief: [
      'Silent chest is an ominous sign requiring immediate action',
      'Absence of wheezing does not mean improvement',
      'Recognize signs of respiratory failure: exhaustion, cyanosis, altered mental status',
      'ALS interventions (steroids, continuous nebulizers) often needed'
    ],
    timer: 240,
    tags: ['asthma', 'silent-chest', 'respiratory-failure', 'pediatric', 'critical']
  },

  {
    id: 'emt-opioid-overdose',
    title: 'Opioid Overdose - Naloxone Administration',
    certificationLevel: 'EMT',
    difficulty: 'Basic',
    category: 'Toxicology',
    chiefComplaint: 'Unresponsive person found in bathroom',
    vitals: {
      initialVitals: {
        'Heart Rate': '45 bpm',
        'Respiratory Rate': '4/min (shallow)',
        'Blood Pressure': '90/50 mmHg',
        'Oxygen Saturation': '78% on room air',
        'Temperature': '96.8°F',
        'AVPU': 'Unresponsive',
        'Pupils': 'Pinpoint, nonreactive'
      },
      followUpVitals: {
        'Heart Rate': '85 bpm (post-naloxone)',
        'Respiratory Rate': '16/min (post-naloxone)',
        'Oxygen Saturation': '95% on room air',
        'AVPU': 'Verbal (post-naloxone)'
      }
    },
    patientInfo: {
      age: '28 years',
      gender: 'Male',
      weight: '75 kg',
      allergies: 'Unknown',
      medications: 'Unknown',
      history: 'Unknown - found by roommate'
    },
    presentation: 'Patient found unresponsive on bathroom floor. Roommate states patient has history of heroin use. Shallow, slow breathing with blue lips. Needle and spoon found nearby.',
    criticalActions: [
      {
        action: 'What is your first step?',
        timeLimit: 30,
        consequence: 'Needlestick injury risk in drug use environments',
        choices: [
          {
            text: 'Ensure scene safety - check for needles/paraphernalia',
            correct: true,
            feedback: 'Essential! Scene safety prevents needlestick injuries.',
            consequence: { patientEffect: 'Scene secured safely', timeDelay: 0 }
          },
          {
            text: 'Rush to patient immediately without scene assessment',
            correct: false,
            feedback: 'Dangerous! Drug scenes have needlestick injury risks.',
            consequence: { patientEffect: 'Safety risk to responders', timeDelay: 5 }
          },
          {
            text: 'Wait for police before approaching patient',
            correct: false,
            feedback: 'Unnecessary delay! Quick safety check is sufficient.',
            consequence: { patientEffect: 'Treatment delayed', timeDelay: 5 }
          }
        ]
      },
      {
        action: 'What is your next step?',
        timeLimit: 60,
        consequence: 'Respiratory depression is primary concern in opioid OD',
        choices: [
          {
            text: 'Assess airway, breathing, circulation',
            correct: true,
            feedback: 'Perfect! ABC assessment is critical for opioid overdose.',
            consequence: { patientEffect: 'Respiratory depression confirmed', timeDelay: 0 }
          },
          {
            text: 'Check for identification and medical history first',
            correct: false,
            feedback: 'Wrong priority! ABCs come first in unresponsive patients.',
            consequence: { patientEffect: 'Delayed life-saving assessment', timeDelay: 5 }
          },
          {
            text: 'Immediately administer naloxone without assessment',
            correct: false,
            feedback: 'Premature! Must assess breathing status first.',
            consequence: { patientEffect: 'Incomplete assessment', timeDelay: 5 }
          }
        ]
      },
      {
        action: 'What is your next step?',
        timeLimit: 120,
        consequence: 'Hypoventilation leads to hypoxia and cardiac arrest',
        choices: [
          {
            text: 'Provide assisted ventilation with BVM if RR <10',
            correct: true,
            feedback: 'Critical intervention! BVM ventilation for respiratory depression.',
            consequence: { patientEffect: 'Ventilation improved, SpO2 rising', timeDelay: 0 }
          },
          {
            text: 'Apply high-flow oxygen only without ventilation assistance',
            correct: false,
            feedback: 'Insufficient! Severe hypoventilation needs assisted ventilation.',
            consequence: { patientEffect: 'Continued hypoxia', timeDelay: 5 }
          },
          {
            text: 'Give naloxone first before addressing breathing',
            correct: false,
            feedback: 'Wrong sequence! Address airway/breathing before medications.',
            consequence: { patientEffect: 'Continued respiratory compromise', timeDelay: 5 }
          }
        ]
      },
      {
        action: 'What is your next step?',
        timeLimit: 180,
        consequence: 'Naloxone reverses opioid effects on respiratory drive',
        choices: [
          {
            text: 'Administer naloxone 0.4-2mg IV/IM/IN per protocol',
            correct: true,
            feedback: 'Correct! Naloxone is the specific antidote for opioid overdose.',
            consequence: { patientEffect: 'Patient begins to respond, breathing improves', timeDelay: 0 }
          },
          {
            text: 'Give oral flumazenil for suspected benzodiazepine overdose',
            correct: false,
            feedback: 'Wrong medication! Pinpoint pupils indicate opioid overdose.',
            consequence: { patientEffect: 'No improvement in condition', timeDelay: 5 }
          },
          {
            text: 'Wait to see if patient improves with oxygen alone',
            correct: false,
            feedback: 'Dangerous delay! Opioid overdose requires naloxone.',
            consequence: { patientEffect: 'Continued respiratory depression', timeDelay: 5 }
          }
        ]
      },
      {
        action: 'What is your next step?',
        timeLimit: 60,
        consequence: 'Patients may become combative or agitated',
        choices: [
          {
            text: 'Monitor for withdrawal symptoms after naloxone',
            correct: true,
            feedback: 'Important! Naloxone can precipitate withdrawal symptoms.',
            consequence: { patientEffect: 'Patient monitored for agitation', timeDelay: 0 }
          },
          {
            text: 'Restrain patient immediately after naloxone',
            correct: false,
            feedback: 'Premature! Monitor first, restrain only if necessary.',
            consequence: { patientEffect: 'Unnecessary confrontation', timeDelay: 5 }
          },
          {
            text: 'Leave patient alone after naloxone administration',
            correct: false,
            feedback: 'Unsafe! Must monitor for withdrawal and re-sedation.',
            consequence: { patientEffect: 'Unmonitored complications', timeDelay: 5 }
          }
        ]
      },
      {
        action: 'What is your next step?',
        timeLimit: 300,
        consequence: 'Long-acting opioids may require repeated naloxone doses',
        choices: [
          {
            text: 'Prepare for re-sedation (naloxone has short half-life)',
            correct: true,
            feedback: 'Critical awareness! Naloxone duration shorter than most opioids.',
            consequence: { patientEffect: 'Prepared for potential re-dosing', timeDelay: 0 }
          },
          {
            text: 'Assume patient is permanently cured',
            correct: false,
            feedback: 'Dangerous! Patient can re-sedate as naloxone wears off.',
            consequence: { patientEffect: 'Risk of re-sedation', timeDelay: 5 }
          },
          {
            text: 'Discharge patient immediately',
            correct: false,
            feedback: 'Inappropriate! All overdose patients need hospital evaluation.',
            consequence: { patientEffect: 'Unsafe discharge', timeDelay: 5 }
          }
        ]
      }
    ],
    learningPoints: [
      'Opioid triad: altered mental status, respiratory depression, pinpoint pupils',
      'Naloxone onset: IV (2-3 min), IM (5-10 min), IN (5-10 min)',
      'Duration of naloxone is 30-90 minutes',
      'Fentanyl may require higher naloxone doses',
      'Withdrawal can cause patient to become combative'
    ],
    debrief: [
      'Scene safety critical in drug overdose situations',
      'Ventilation takes priority over medication administration',
      'Start with lower naloxone doses to avoid severe withdrawal',
      'Transport all overdose patients - re-sedation risk'
    ],
    timer: 480,
    tags: ['overdose', 'naloxone', 'opioids', 'respiratory-depression', 'toxicology']
  },

  // AEMT Scenarios (5)
  {
    id: 'aemt-anaphylaxis',
    title: 'Anaphylaxis - Epinephrine Dosing',
    certificationLevel: 'AEMT',
    difficulty: 'Intermediate',
    category: 'Allergic Reaction',
    chiefComplaint: 'Severe allergic reaction after bee sting',
    vitals: {
      initialVitals: {
        'Heart Rate': '125 bpm',
        'Respiratory Rate': '28/min with stridor',
        'Blood Pressure': '85/45 mmHg',
        'Oxygen Saturation': '88% on room air',
        'Temperature': '99.2°F',
        'AVPU': 'Alert but anxious'
      },
      followUpVitals: {
        'Heart Rate': '105 bpm (post-epinephrine)',
        'Blood Pressure': '110/70 mmHg (post-epinephrine)',
        'Oxygen Saturation': '94% on high-flow O2'
      }
    },
    patientInfo: {
      age: '34 years',
      gender: 'Female',
      weight: '68 kg',
      allergies: 'Bee stings (known)',
      medications: 'EpiPen (used), Birth control',
      history: 'Previous anaphylaxis episode'
    },
    presentation: 'Patient stung by bee 10 minutes ago. Rapid onset of hives, facial swelling, and difficulty breathing. Self-administered EpiPen but symptoms worsening. Audible stridor, widespread urticaria.',
    criticalActions: [
      {
        action: 'What is your first step?',
        timeLimit: 60,
        consequence: 'Delayed recognition leads to cardiovascular collapse',
        choices: [
          {
            text: 'Recognize anaphylaxis criteria (multi-system involvement)',
            correct: true,
            feedback: 'Correct! Multi-system involvement confirms anaphylaxis.',
            consequence: { patientEffect: 'Anaphylaxis properly identified', timeDelay: 0 }
          },
          {
            text: 'Treat as simple allergic reaction with antihistamines only',
            correct: false,
            feedback: 'Dangerous! This is anaphylaxis requiring epinephrine.',
            consequence: { patientEffect: 'Critical delay in treatment', timeDelay: 5 }
          },
          {
            text: 'Focus on hives treatment only',
            correct: false,
            feedback: 'Incomplete assessment! Missing respiratory/cardiovascular signs.',
            consequence: { patientEffect: 'Missed life-threatening diagnosis', timeDelay: 5 }
          }
        ]
      },
      {
        action: 'What is your next step?',
        timeLimit: 30,
        consequence: 'Upper airway swelling causes hypoxia',
        choices: [
          {
            text: 'Apply high-flow oxygen for respiratory distress',
            correct: true,
            feedback: 'Essential! High-flow oxygen addresses upper airway swelling.',
            consequence: { patientEffect: 'Oxygen saturation improves to 92%', timeDelay: 0 }
          },
          {
            text: 'Give antihistamines first before oxygen',
            correct: false,
            feedback: 'Wrong priority! Airway management comes first.',
            consequence: { patientEffect: 'Continued hypoxia', timeDelay: 5 }
          },
          {
            text: 'Wait to see if breathing improves spontaneously',
            correct: false,
            feedback: 'Dangerous delay! Airway swelling can progress rapidly.',
            consequence: { patientEffect: 'Worsening respiratory distress', timeDelay: 5 }
          }
        ]
      },
      {
        action: 'What is your next step?',
        timeLimit: 180,
        beyondScope: ['EMT'],
        consequence: 'Vascular access needed for fluid resuscitation and medications',
        choices: [
          {
            text: 'Establish IV access with large-bore catheter',
            correct: true,
            feedback: 'Correct AEMT intervention! Large bore needed for fluids.',
            consequence: { patientEffect: 'IV access established', timeDelay: 0 }
          },
          {
            text: 'Skip IV access to save time',
            correct: false,
            feedback: 'Wrong! IV access critical for medications and fluids.',
            consequence: { patientEffect: 'Cannot administer IV medications', timeDelay: 5 }
          },
          {
            text: 'Use small catheter to minimize discomfort',
            correct: false,
            feedback: 'Inadequate! Large bore needed for rapid fluid administration.',
            consequence: { patientEffect: 'Insufficient IV access', timeDelay: 5 }
          }
        ]
      },
      {
        action: 'What is your next step?',
        timeLimit: 120,
        beyondScope: ['EMT'],
        consequence: 'IM epinephrine is first-line treatment for anaphylaxis',
        choices: [
          {
            text: 'Administer epinephrine 1:1000, 0.3mg IM (NOT IV)',
            correct: true,
            feedback: 'Life-saving! Correct dose and route per protocol.',
            consequence: { patientEffect: 'Blood pressure improves, stridor decreases', timeDelay: 0 }
          },
          {
            text: 'Give epinephrine 1:10,000 IV push',
            correct: false,
            feedback: 'Dangerous error! Wrong concentration and route.',
            consequence: { patientEffect: 'Risk of cardiac arrest', timeDelay: 5 }
          },
          {
            text: 'Wait for patient to use their own EpiPen',
            correct: false,
            feedback: 'Already used and ineffective! Need medical-grade dose.',
            consequence: { patientEffect: 'Continued deterioration', timeDelay: 5 }
          }
        ]
      },
      {
        action: 'What is your next step?',
        timeLimit: 300,
        beyondScope: ['EMT'],
        consequence: 'Distributive shock requires volume replacement',
        choices: [
          {
            text: 'Fluid bolus 500-1000mL NS for hypotension',
            correct: true,
            feedback: 'Excellent! Fluid resuscitation for distributive shock.',
            consequence: { patientEffect: 'Blood pressure stabilized', timeDelay: 0 }
          },
          {
            text: 'Avoid fluids to prevent fluid overload',
            correct: false,
            feedback: 'Wrong! Anaphylactic shock needs aggressive fluid resuscitation.',
            consequence: { patientEffect: 'Persistent hypotension', timeDelay: 5 }
          },
          {
            text: 'Give small fluid bolus only (250mL)',
            correct: false,
            feedback: 'Insufficient! Anaphylaxis requires large volume resuscitation.',
            consequence: { patientEffect: 'Inadequate volume expansion', timeDelay: 5 }
          }
        ]
      }
    ],
    learningPoints: [
      'Anaphylaxis = multi-system allergic reaction with cardiovascular or respiratory compromise',
      'Epinephrine 1:1000 concentration given IM, NOT IV',
      'Dose: 0.3mg adult, 0.15mg pediatric (<30kg)',
      'IV epinephrine can cause cardiac arrest',
      'Antihistamines are adjunctive, not primary treatment'
    ],
    debrief: [
      'Common dosing error: confusing 1:1000 vs 1:10,000 concentrations',
      'IM absorption more predictable than IV in shock states',
      'Monitor for biphasic reactions (second wave after 4-12 hours)',
      'All anaphylaxis patients need hospital evaluation'
    ],
    timer: 600,
    tags: ['anaphylaxis', 'epinephrine', 'allergic-reaction', 'IV-access', 'medication-errors']
  },

  {
    id: 'aemt-copd-overoxygenation',
    title: 'COPD Overoxygenation - CO₂ Narcosis',
    certificationLevel: 'AEMT',
    difficulty: 'Advanced',
    category: 'Respiratory Emergency',
    chiefComplaint: 'COPD patient with worsening confusion',
    vitals: {
      initialVitals: {
        'Heart Rate': '110 bpm',
        'Respiratory Rate': '10/min (shallow)',
        'Blood Pressure': '140/85 mmHg',
        'Oxygen Saturation': '99% on 15L NRB',
        'Temperature': '98.5°F',
        'AVPU': 'Verbal (confused)',
        'EtCO2': '65 mmHg'
      },
      followUpVitals: {
        'Respiratory Rate': '16/min (after O2 reduction)',
        'Oxygen Saturation': '90% on 2L NC',
        'AVPU': 'Alert and oriented (after O2 reduction)',
        'EtCO2': '55 mmHg'
      }
    },
    patientInfo: {
      age: '72 years',
      gender: 'Male',
      weight: '80 kg',
      allergies: 'NKDA',
      medications: 'Albuterol, Spiriva, Prednisone',
      history: 'Severe COPD, on home oxygen 2L'
    },
    presentation: 'Family called because patient became increasingly confused after EMTs applied high-flow oxygen for "low oxygen levels." Patient normally alert but now difficult to arouse. Family states his normal oxygen saturation is 88-90%.',
    criticalActions: [
      {
        action: 'What is your first step?',
        timeLimit: 120,
        consequence: 'High oxygen suppresses hypoxic drive in severe COPD',
        choices: [
          {
            text: 'Recognize CO₂ narcosis from excessive oxygen',
            correct: true,
            feedback: 'Excellent recognition! High oxygen suppressed respiratory drive.',
            consequence: { patientEffect: 'Cause of confusion identified', timeDelay: 0 }
          },
          {
            text: 'Increase oxygen further to improve saturation',
            correct: false,
            feedback: 'Dangerous! This will worsen CO₂ narcosis.',
            consequence: { patientEffect: 'Further respiratory depression', timeDelay: 5 }
          },
          {
            text: 'Assume confusion is from infection',
            correct: false,
            feedback: 'Missing the oxygen connection! Consider iatrogenic causes.',
            consequence: { patientEffect: 'Root cause missed', timeDelay: 5 }
          }
        ]
      },
      {
        action: 'What is your next step?',
        timeLimit: 60,
        consequence: 'Target SpO2 88-92% in COPD patients',
        choices: [
          {
            text: 'Reduce oxygen to patient\'s baseline (2-4L NC)',
            correct: true,
            feedback: 'Correct! COPD patients tolerate lower oxygen saturations.',
            consequence: { patientEffect: 'Respiratory drive begins to improve', timeDelay: 0 }
          },
          {
            text: 'Continue high-flow oxygen to maintain 100% saturation',
            correct: false,
            feedback: 'Wrong! COPD patients don\'t need 100% saturation.',
            consequence: { patientEffect: 'Continued respiratory suppression', timeDelay: 5 }
          },
          {
            text: 'Remove oxygen completely',
            correct: false,
            feedback: 'Too aggressive! Patient still needs baseline oxygen.',
            consequence: { patientEffect: 'Risk of hypoxemia', timeDelay: 5 }
          }
        ]
      },
      {
        action: 'What is your next step?',
        timeLimit: 180,
        consequence: 'Watch for improvement in respiratory drive',
        choices: [
          {
            text: 'Monitor respiratory rate and effort closely',
            correct: true,
            feedback: 'Essential monitoring! Watch for respiratory drive return.',
            consequence: { patientEffect: 'Respiratory rate improving to 16/min', timeDelay: 0 }
          },
          {
            text: 'Focus only on oxygen saturation numbers',
            correct: false,
            feedback: 'Incomplete! Respiratory drive more important than SpO2.',
            consequence: { patientEffect: 'Missing clinical improvement signs', timeDelay: 5 }
          },
          {
            text: 'Immediately begin assisted ventilation',
            correct: false,
            feedback: 'Premature! Give reduced oxygen time to work first.',
            consequence: { patientEffect: 'Unnecessary intervention', timeDelay: 5 }
          }
        ]
      }
    ],
    learningPoints: [
      'COPD patients rely on hypoxic drive for respiration',
      'Target SpO2 88-92% in known COPD patients',
      'High oxygen can suppress respiratory drive',
      'CO₂ narcosis presents as altered mental status',
      'Family knowledge of baseline vitals is crucial'
    ],
    debrief: [
      'Not all patients need 100% oxygen saturation',
      'Chronic CO2 retainers have altered respiratory drives',
      'When in doubt, titrate oxygen to clinical improvement',
      'Consider patient\'s baseline when interpreting vital signs'
    ],
    timer: 450,
    tags: ['COPD', 'oxygen-therapy', 'CO2-narcosis', 'respiratory-drive', 'titration']
  },

  {
    id: 'aemt-seizure-stroke-mimic',
    title: 'Seizure Management - Postictal Stroke Mimic',
    certificationLevel: 'AEMT',
    difficulty: 'Advanced',
    category: 'Neurological Emergency',
    chiefComplaint: 'Seizure with persistent weakness',
    vitals: {
      initialVitals: {
        'Heart Rate': '95 bpm',
        'Respiratory Rate': '16/min',
        'Blood Pressure': '160/90 mmHg',
        'Oxygen Saturation': '96% on room air',
        'Temperature': '99.8°F',
        'Blood Glucose': '110 mg/dL',
        'AVPU': 'Alert but confused'
      }
    },
    patientInfo: {
      age: '58 years',
      gender: 'Female',
      weight: '70 kg',
      allergies: 'NKDA',
      medications: 'Phenytoin, Lisinopril',
      history: 'Epilepsy (well-controlled), Hypertension'
    },
    presentation: 'Patient had witnessed tonic-clonic seizure lasting 3 minutes. Now awake but confused with right-sided weakness and slurred speech. Family concerned this is different from her usual post-seizure state.',
    criticalActions: [
      {
        action: 'What is your first step?',
        timeLimit: 180,
        consequence: 'Need to differentiate postictal state from stroke',
        choices: [
          {
            text: 'Complete neurological assessment (FAST exam)',
            correct: true,
            feedback: 'Essential! Must differentiate between postictal and stroke.',
            consequence: { patientEffect: 'Right-sided weakness and speech changes confirmed', timeDelay: 0 }
          },
          {
            text: 'Assume this is normal postictal confusion',
            correct: false,
            feedback: 'Dangerous assumption! New focal deficits need evaluation.',
            consequence: { patientEffect: 'Potential stroke missed', timeDelay: 5 }
          },
          {
            text: 'Wait for patient to fully recover',
            correct: false,
            feedback: 'Time critical! Stroke protocols have time windows.',
            consequence: { patientEffect: 'Delay in stroke recognition', timeDelay: 5 }
          }
        ]
      },
      {
        action: 'What is your next step?',
        timeLimit: 60,
        consequence: 'Hypoglycemia can cause both seizures and focal deficits',
        choices: [
          {
            text: 'Obtain blood glucose to rule out hypoglycemia',
            correct: true,
            feedback: 'Critical test! Hypoglycemia can mimic stroke.',
            consequence: { patientEffect: 'Blood glucose 95 mg/dL - normal', timeDelay: 0 }
          },
          {
            text: 'Skip glucose check since patient had seizure',
            correct: false,
            feedback: 'Wrong! Hypoglycemia causes both seizures and focal signs.',
            consequence: { patientEffect: 'Missed reversible cause', timeDelay: 5 }
          },
          {
            text: 'Treat empirically with oral glucose',
            correct: false,
            feedback: 'Inappropriate! Patient altered - need IV access for dextrose.',
            consequence: { patientEffect: 'Aspiration risk in altered patient', timeDelay: 5 }
          }
        ]
      },
      {
        action: 'What is your next step?',
        timeLimit: 120,
        consequence: 'Need to know patient\'s normal post-seizure presentation',
        choices: [
          {
            text: 'Assess baseline neurological function from family',
            correct: true,
            feedback: 'Important history! Family knows normal postictal pattern.',
            consequence: { patientEffect: 'Family reports this is different from usual', timeDelay: 0 }
          },
          {
            text: 'Assume all seizure patients have focal deficits',
            correct: false,
            feedback: 'Incorrect! This pattern is unusual per family.',
            consequence: { patientEffect: 'Missing important clinical context', timeDelay: 5 }
          },
          {
            text: 'Focus only on current neurological exam',
            correct: false,
            feedback: 'Incomplete! Baseline function comparison crucial.',
            consequence: { patientEffect: 'Unable to determine significance', timeDelay: 5 }
          }
        ]
      }
    ],
    learningPoints: [
      'Todd\'s paralysis = temporary weakness after seizure',
      'Can mimic stroke symptoms for hours',
      'Family history of normal postictal state is crucial',
      'Focal seizures can cause persistent deficits',
      'When in doubt, activate stroke protocols'
    ],
    debrief: [
      'Postictal deficits usually resolve within 24 hours',
      'Stroke and seizure can coexist',
      'Document exact symptom timeline for neurologist',
      'Consider causes of breakthrough seizures: medication compliance, illness, stress'
    ],
    timer: 720,
    tags: ['seizure', 'postictal', 'stroke-mimic', 'neurological-assessment', 'differential-diagnosis']
  },

  {
    id: 'aemt-pediatric-fever',
    title: 'Pediatric Fever - Febrile Seizure Risk',
    certificationLevel: 'AEMT',
    difficulty: 'Intermediate',
    category: 'Pediatric Emergency',
    chiefComplaint: '18-month-old with high fever',
    vitals: {
      initialVitals: {
        'Heart Rate': '160 bpm',
        'Respiratory Rate': '32/min',
        'Blood Pressure': '90/50 mmHg',
        'Oxygen Saturation': '98% on room air',
        'Temperature': '104.2°F (40.1°C)',
        'AVPU': 'Alert but irritable'
      },
      followUpVitals: {
        'Temperature': '101.8°F (after cooling measures)',
        'Heart Rate': '140 bpm',
        'AVPU': 'Alert and interactive'
      }
    },
    patientInfo: {
      age: '18 months',
      gender: 'Male',
      weight: '12 kg',
      allergies: 'NKDA',
      medications: 'Tylenol given 2 hours ago',
      history: 'Previously healthy, up-to-date immunizations'
    },
    presentation: 'Child with 2-day history of fever, decreased appetite, and irritability. Temperature spiked this morning. Parents concerned about febrile seizures as older sibling had them. Child appears ill but interactive.',
    criticalActions: [
      {
        action: 'What is your first step?',
        timeLimit: 180,
        consequence: 'Meningitis, sepsis can present with fever in children',
        choices: [
          {
            text: 'Assess for signs of serious bacterial infection (neck stiffness, rash, lethargy)',
            correct: true,
            feedback: 'Critical assessment! Must rule out serious bacterial infections.',
            consequence: { patientEffect: 'No meningeal signs found', timeDelay: 0 }
          },
          {
            text: 'Focus only on fever reduction',
            correct: false,
            feedback: 'Incomplete! Must assess for serious bacterial causes first.',
            consequence: { patientEffect: 'Missed potential serious infection', timeDelay: 5 }
          },
          {
            text: 'Assume simple viral illness',
            correct: false,
            feedback: 'Dangerous assumption! High fever requires thorough assessment.',
            consequence: { patientEffect: 'Serious conditions not ruled out', timeDelay: 5 }
          }
        ]
      },
      {
        action: 'What is your next step?',
        timeLimit: 60,
        consequence: 'Rapid temperature reduction decreases seizure risk',
        choices: [
          {
            text: 'Initiate passive cooling measures (remove clothing, cool environment)',
            correct: true,
            feedback: 'Excellent! Gentle cooling reduces febrile seizure risk.',
            consequence: { patientEffect: 'Temperature begins to decrease', timeDelay: 0 }
          },
          {
            text: 'Apply ice packs to reduce fever quickly',
            correct: false,
            feedback: 'Too aggressive! Can cause shivering and rebound fever.',
            consequence: { patientEffect: 'Child begins shivering', timeDelay: 5 }
          },
          {
            text: 'Wait for fever to break naturally',
            correct: false,
            feedback: 'Risky! Active cooling needed to prevent seizures.',
            consequence: { patientEffect: 'Fever remains dangerously high', timeDelay: 5 }
          }
        ]
      },
      {
        action: 'What is your next step?',
        timeLimit: 300,
        consequence: 'Febrile seizures occur with rapid temperature rise',
        choices: [
          {
            text: 'Monitor for seizure activity during transport',
            correct: true,
            feedback: 'Essential monitoring! Febrile seizures can occur suddenly.',
            consequence: { patientEffect: 'Continuous seizure monitoring established', timeDelay: 0 }
          },
          {
            text: 'Assume no seizure risk since child is alert',
            correct: false,
            feedback: 'False security! Alert children can still have febrile seizures.',
            consequence: { patientEffect: 'Unprepared for potential seizure', timeDelay: 5 }
          },
          {
            text: 'Focus only on fever management',
            correct: false,
            feedback: 'Incomplete! Must monitor for complications.',
            consequence: { patientEffect: 'Missing seizure precautions', timeDelay: 5 }
          }
        ]
      }
    ],
    learningPoints: [
      'Febrile seizures occur in 2-5% of children aged 6mo-5yr',
      'Risk highest with rapid temperature rise >101°F',
      'Simple febrile seizures: <15 minutes, generalized, no recurrence in 24hr',
      'Cooling measures: remove clothing, tepid sponging',
      'Never use ice baths or alcohol for cooling'
    ],
    debrief: [
      'Family history increases febrile seizure risk',
      'Most febrile seizures are benign and self-limiting',
      'Focus on underlying cause of fever',
      'Gradual cooling preferred over rapid temperature drop'
    ],
    timer: 600,
    tags: ['pediatric', 'fever', 'febrile-seizure', 'cooling-measures', 'temperature-management']
  },

  {
    id: 'aemt-psychiatric-crisis',
    title: 'Psychiatric Crisis - Restraint Safety',
    certificationLevel: 'AEMT',
    difficulty: 'Advanced',
    category: 'Behavioral Emergency',
    chiefComplaint: 'Agitated patient threatening self-harm',
    vitals: {
      initialVitals: {
        'Heart Rate': '130 bpm',
        'Respiratory Rate': '24/min',
        'Blood Pressure': '150/95 mmHg',
        'Oxygen Saturation': '97% on room air',
        'Temperature': '99.5°F',
        'AVPU': 'Alert but agitated'
      }
    },
    patientInfo: {
      age: '32 years',
      gender: 'Male',
      weight: '85 kg',
      allergies: 'NKDA',
      medications: 'Stopped taking lithium 1 week ago',
      history: 'Bipolar disorder, previous hospitalizations'
    },
    presentation: 'Patient found by police after 911 call from family. Threatening to jump from balcony. Appears paranoid, speaking rapidly about conspiracy theories. Cooperative with EMS but agitated and unpredictable.',
    criticalActions: [
      {
        action: 'What is your first step?',
        timeLimit: 30,
        consequence: 'Agitated patients can become violent unpredictably',
        choices: [
          {
            text: 'Ensure scene safety - confirm police present',
            correct: true,
            feedback: 'Essential! Scene safety is paramount with psychiatric emergencies.',
            consequence: { patientEffect: 'Scene secured with police backup', timeDelay: 0 }
          },
          {
            text: 'Approach patient immediately to begin assessment',
            correct: false,
            feedback: 'Dangerous! Suicidal patients can become violent suddenly.',
            consequence: { patientEffect: 'Safety risk to EMS crew', timeDelay: 5 }
          },
          {
            text: 'Wait for patient to calm down naturally',
            correct: false,
            feedback: 'Inappropriate! Active intervention needed for suicidal ideation.',
            consequence: { patientEffect: 'Delay in critical mental health care', timeDelay: 5 }
          }
        ]
      },
      {
        action: 'What is your next step?',
        timeLimit: 180,
        consequence: 'Hypoglycemia, hypoxia, drugs can mimic psychiatric illness',
        choices: [
          {
            text: 'Assess for medical causes of altered behavior (glucose, vitals, pupils)',
            correct: true,
            feedback: 'Critical assessment! Medical causes must be ruled out first.',
            consequence: { patientEffect: 'Blood glucose 85 mg/dL - normal', timeDelay: 0 }
          },
          {
            text: 'Assume behavior is purely psychiatric',
            correct: false,
            feedback: 'Dangerous assumption! Medical causes can mimic psychiatric illness.',
            consequence: { patientEffect: 'Missed treatable medical condition', timeDelay: 5 }
          },
          {
            text: 'Focus only on restraint application',
            correct: false,
            feedback: 'Wrong priority! Medical assessment comes before restraints.',
            consequence: { patientEffect: 'Inappropriate treatment approach', timeDelay: 5 }
          }
        ]
      },
      {
        action: 'What is your next step?',
        timeLimit: 300,
        consequence: 'Calm, respectful communication often prevents need for restraints',
        choices: [
          {
            text: 'Use verbal de-escalation techniques (calm voice, respect, empathy)',
            correct: true,
            feedback: 'Excellent approach! De-escalation prevents need for restraints.',
            consequence: { patientEffect: 'Patient becomes more cooperative', timeDelay: 0 }
          },
          {
            text: 'Use firm, authoritative commands',
            correct: false,
            feedback: 'Counterproductive! Can escalate psychiatric emergencies.',
            consequence: { patientEffect: 'Increased agitation and resistance', timeDelay: 5 }
          },
          {
            text: 'Apply restraints immediately for safety',
            correct: false,
            feedback: 'Premature! Try verbal de-escalation first.',
            consequence: { patientEffect: 'Unnecessary escalation of situation', timeDelay: 5 }
          }
        ]
      }
    ],
    learningPoints: [
      'Physical restraints are last resort for patient/provider safety',
      'Never restrain in prone position - risk of asphyxia',
      'Monitor for excited delirium: hyperthermia, acidosis',
      'Verbal de-escalation is first-line intervention',
      'Consider medical causes before assuming psychiatric'
    ],
    debrief: [
      'Restraint-related deaths often involve positional asphyxia',
      'Continuous monitoring required when restraints applied',
      'Document medical necessity for restraint use',
      'Consider underlying psychiatric medication compliance'
    ],
    timer: 900,
    tags: ['psychiatric', 'restraints', 'de-escalation', 'positional-asphyxia', 'behavioral-emergency']
  },

  // Paramedic Scenarios (10)
  {
    id: 'paramedic-inferior-stemi-viagra',
    title: 'Inferior STEMI + Viagra - Nitro Contraindication',
    certificationLevel: 'Paramedic',
    difficulty: 'Advanced',
    category: 'Cardiac Emergency',
    chiefComplaint: '55-year-old male with chest pain',
    vitals: {
      initialVitals: {
        'Heart Rate': '58 bpm',
        'Respiratory Rate': '18/min',
        'Blood Pressure': '110/70 mmHg',
        'Oxygen Saturation': '96% on room air',
        'Temperature': '98.6°F',
        'AVPU': 'Alert and oriented'
      },
      followUpVitals: {
        'Blood Pressure': '70/40 mmHg (after nitroglycerin)',
        'Heart Rate': '45 bpm'
      }
    },
    patientInfo: {
      age: '55 years',
      gender: 'Male',
      weight: '85 kg',
      allergies: 'NKDA',
      medications: 'Metoprolol, "little blue pills"',
      history: 'Hypertension, erectile dysfunction'
    },
    presentation: 'Chest pain started 45 minutes ago during physical activity. Patient reluctant to discuss medications. 12-lead shows ST elevation in leads II, III, aVF with reciprocal changes in I, aVL.',
    criticalActions: [
      {
        action: 'Obtain 12-lead ECG within 10 minutes',
        timeLimit: 600,
        beyondScope: ['EMT', 'AEMT'],
        consequence: 'Early ECG crucial for STEMI diagnosis'
      },
      {
        action: 'Specifically ask about PDE-5 inhibitors (Viagra, Cialis)',
        timeLimit: 120,
        consequence: 'Patient may be embarrassed but information is life-saving'
      },
      {
        action: 'Recognize inferior STEMI pattern',
        timeLimit: 180,
        consequence: 'ST elevation in II, III, aVF indicates RCA occlusion'
      },
      {
        action: 'What is your next step?',
        timeLimit: 180,
        consequence: 'ASA reduces mortality in acute MI',
        choices: [
          {
            text: 'Administer aspirin 324mg chewed (safe alternative to nitro)',
            correct: true,
            feedback: 'Excellent! ASA is safe and reduces MI mortality.',
            consequence: { patientEffect: 'Aspirin given - antiplatelet effect achieved', timeDelay: 0 }
          },
          {
            text: 'Give morphine for pain instead of aspirin',
            correct: false,
            feedback: 'Incomplete! ASA has proven mortality benefit in MI.',
            consequence: { patientEffect: 'Missing mortality-reducing intervention', timeDelay: 5 }
          },
          {
            text: 'Skip all medications due to drug interaction',
            correct: false,
            feedback: 'Overly cautious! ASA is safe with PDE-5 inhibitors.',
            consequence: { patientEffect: 'Patient denied beneficial MI treatment', timeDelay: 5 }
          }
        ]
      },
      {
        action: 'What is your next step?',
        timeLimit: 300,
        consequence: 'Door-to-balloon time <90 minutes improves outcomes',
        choices: [
          {
            text: 'Activate STEMI alert and prepare for immediate cath lab',
            correct: true,
            feedback: 'Time-critical! Early cath lab activation saves heart muscle.',
            consequence: { patientEffect: 'STEMI alert activated - cath lab ready', timeDelay: 0 }
          },
          {
            text: 'Wait for troponin results before activating alert',
            correct: false,
            feedback: 'Dangerous delay! STEMI diagnosis is based on ECG.',
            consequence: { patientEffect: 'Critical time lost - door-to-balloon delayed', timeDelay: 5 }
          },
          {
            text: 'Transport to closest hospital without STEMI capability',
            correct: false,
            feedback: 'Wrong destination! STEMI patients need PCI-capable facility.',
            consequence: { patientEffect: 'Transfer delays definitive treatment', timeDelay: 5 }
          }
        ]
      }
    ],
    learningPoints: [
      'PDE-5 inhibitors contraindicate nitrates for 24-48 hours',
      'Patients may not volunteer ED medication history',
      'Inferior STEMI often involves RCA, can cause heart blocks',
      'ASA is safe alternative when nitrates contraindicated',
      'Time is muscle - rapid recognition and transport crucial'
    ],
    debrief: [
      'Always ask specifically about erectile dysfunction medications',
      'Use respectful, medical terminology to encourage disclosure',
      'Consider atropine for symptomatic bradycardia in inferior MI',
      'Document medication contraindications clearly for receiving facility'
    ],
    timer: 900,
    tags: ['STEMI', 'nitroglycerin', 'viagra', 'contraindications', 'medication-history']
  },

  {
    id: 'paramedic-hyperkalemia-arrest',
    title: 'Hyperkalemic Arrest - Calcium Before Pacing',
    certificationLevel: 'Paramedic',
    difficulty: 'Advanced',
    category: 'Cardiac Emergency',
    chiefComplaint: 'Dialysis patient in cardiac arrest',
    vitals: {
      initialVitals: {
        'Heart Rate': 'Wide complex bradycardia 35 bpm',
        'Respiratory Rate': 'Agonal',
        'Blood Pressure': 'No pulse',
        'Oxygen Saturation': 'Unmeasurable',
        'Temperature': '97.2°F',
        'AVPU': 'Unresponsive'
      },
      followUpVitals: {
        'Heart Rate': '70 bpm (after calcium)',
        'Blood Pressure': '90/60 mmHg (ROSC achieved)'
      }
    },
    patientInfo: {
      age: '68 years',
      gender: 'Female',
      weight: '70 kg',
      allergies: 'NKDA',
      medications: 'Multiple cardiac meds, phosphate binders',
      history: 'ESRD on hemodialysis, missed dialysis x2 days'
    },
    presentation: 'Patient collapsed at home. Family states she missed dialysis for 2 days due to transportation issues. Monitor shows sine wave pattern with wide QRS complexes. No pulse palpable.',
    criticalActions: [
      {
        action: 'What is your first step?',
        timeLimit: 60,
        beyondScope: ['EMT', 'AEMT'],
        consequence: 'Hyperkalemia causes progressive cardiac conduction blocks',
        choices: [
          {
            text: 'Recognize hyperkalemic ECG changes (sine wave pattern, wide QRS)',
            correct: true,
            feedback: 'Critical recognition! Sine wave indicates severe hyperkalemia.',
            consequence: { patientEffect: 'Hyperkalemic cardiac arrest identified', timeDelay: 0 }
          },
          {
            text: 'Treat as standard cardiac arrest without considering cause',
            correct: false,
            feedback: 'Incomplete! Must identify and treat underlying hyperkalemia.',
            consequence: { patientEffect: 'Missed treatable cause of arrest', timeDelay: 5 }
          },
          {
            text: 'Focus only on CPR without ECG interpretation',
            correct: false,
            feedback: 'Inadequate! ECG pattern guides specific treatment.',
            consequence: { patientEffect: 'No targeted therapy for hyperkalemia', timeDelay: 5 }
          }
        ]
      },
      {
        action: 'What is your next step?',
        timeLimit: 180,
        beyondScope: ['EMT', 'AEMT'],
        consequence: 'Calcium stabilizes cardiac membrane and improves conduction',
        choices: [
          {
            text: 'Administer calcium chloride 1g IV push immediately',
            correct: true,
            feedback: 'Life-saving! Calcium stabilizes the cardiac membrane.',
            consequence: { patientEffect: 'ECG improves, QRS narrows slightly', timeDelay: 0 }
          },
          {
            text: 'Give epinephrine first per ACLS protocol',
            correct: false,
            feedback: 'Wrong priority! Calcium addresses the underlying cause.',
            consequence: { patientEffect: 'No improvement in hyperkalemic arrest', timeDelay: 5 }
          },
          {
            text: 'Start bicarbonate before calcium',
            correct: false,
            feedback: 'Wrong sequence! Calcium works immediately.',
            consequence: { patientEffect: 'Delayed membrane stabilization', timeDelay: 5 }
          }
        ]
      },
      {
        action: 'What is your next step?',
        timeLimit: 240,
        beyondScope: ['EMT', 'AEMT'],
        consequence: 'Bicarbonate shifts potassium intracellularly',
        choices: [
          {
            text: 'Give sodium bicarbonate 50 mEq IV push',
            correct: true,
            feedback: 'Excellent! Bicarbonate shifts potassium into cells.',
            consequence: { patientEffect: 'Further ECG improvement, ROSC achieved', timeDelay: 0 }
          },
          {
            text: 'Repeat calcium chloride only',
            correct: false,
            feedback: 'Incomplete! Need to lower potassium levels.',
            consequence: { patientEffect: 'Limited improvement without K+ shifting', timeDelay: 5 }
          },
          {
            text: 'Wait to see calcium effect before other drugs',
            correct: false,
            feedback: 'Suboptimal! Multiple therapies work synergistically.',
            consequence: { patientEffect: 'Slower recovery from hyperkalemia', timeDelay: 5 }
          }
        ]
      }
    ],
    learningPoints: [
      'Hyperkalemia progression: tall T waves → wide QRS → sine wave → asystole',
      'Calcium stabilizes membrane but doesn\'t lower potassium',
      'Bicarbonate and albuterol shift K+ into cells temporarily',
      'Avoid calcium in digoxin toxicity patients',
      'Dialysis is definitive treatment for hyperkalemia'
    ],
    debrief: [
      'Think hyperkalemia in dialysis patients who miss treatments',
      'Calcium works immediately but effect is temporary',
      'Multiple modalities needed: calcium, bicarbonate, albuterol',
      'Consider D50 + insulin if available (also shifts K+ intracellularly)'
    ],
    timer: 600,
    tags: ['hyperkalemia', 'dialysis', 'calcium-chloride', 'cardiac-arrest', 'electrolyte-emergency']
  },

  {
    id: 'paramedic-toxic-shock',
    title: 'Toxic Shock - Early Pressor Use',
    certificationLevel: 'Paramedic',
    difficulty: 'Advanced',
    category: 'Infectious Disease',
    chiefComplaint: '24-year-old female with fever and rash',
    vitals: {
      initialVitals: {
        'Heart Rate': '145 bpm',
        'Respiratory Rate': '26/min',
        'Blood Pressure': '70/40 mmHg',
        'Oxygen Saturation': '94% on room air',
        'Temperature': '103.8°F',
        'AVPU': 'Verbal (confused)'
      },
      followUpVitals: {
        'Blood Pressure': '85/55 mmHg (after 2L fluid)',
        'Heart Rate': '135 bpm',
        'Blood Pressure Post-Dopamine': '105/65 mmHg (after dopamine)'
      }
    },
    patientInfo: {
      age: '24 years',
      gender: 'Female',
      weight: '60 kg',
      allergies: 'NKDA',
      medications: 'Birth control pills',
      history: 'Healthy, currently menstruating'
    },
    presentation: 'Patient with 2-day history of fever, vomiting, and diarrhea. Family noticed rash developing today. Patient appears toxic with diffuse erythematous rash, hypotension, and altered mental status.',
    criticalActions: [
      {
        action: 'What is your first step?',
        timeLimit: 180,
        beyondScope: ['EMT', 'AEMT'],
        consequence: 'TSS is rapidly progressive and can be fatal',
        choices: [
          {
            text: 'Recognize toxic shock syndrome criteria (fever, rash, hypotension, multi-organ involvement)',
            correct: true,
            feedback: 'Critical recognition! TSS is rapidly progressive and fatal.',
            consequence: { patientEffect: 'TSS criteria met - immediate intervention needed', timeDelay: 0 }
          },
          {
            text: 'Treat as simple viral illness with supportive care',
            correct: false,
            feedback: 'Dangerous misdiagnosis! This is life-threatening TSS.',
            consequence: { patientEffect: 'Critical delay in lifesaving treatment', timeDelay: 5 }
          },
          {
            text: 'Focus only on rash management',
            correct: false,
            feedback: 'Missing the systemic crisis! TSS affects multiple organs.',
            consequence: { patientEffect: 'Shock and organ failure progress', timeDelay: 5 }
          }
        ]
      },
      {
        action: 'What is your next step?',
        timeLimit: 300,
        consequence: 'Initial fluid resuscitation for hypotension',
        choices: [
          {
            text: 'Administer aggressive fluid resuscitation (1-2L normal saline bolus)',
            correct: true,
            feedback: 'Life-saving! Distributive shock needs immediate fluid resuscitation.',
            consequence: { patientEffect: 'BP improves from 70/40 to 85/55', timeDelay: 0 }
          },
          {
            text: 'Give small fluid boluses to avoid overload',
            correct: false,
            feedback: 'Insufficient! TSS shock requires aggressive initial fluids.',
            consequence: { patientEffect: 'Continued hypotension and organ hypoperfusion', timeDelay: 5 }
          },
          {
            text: 'Start pressors before fluid resuscitation',
            correct: false,
            feedback: 'Wrong sequence! Fluid resuscitation before vasopressors.',
            consequence: { patientEffect: 'Ineffective pressor response without adequate preload', timeDelay: 5 }
          }
        ]
      },
      {
        action: 'What is your next step?',
        timeLimit: 60,
        consequence: 'Source control is critical in TSS',
        choices: [
          {
            text: 'Obtain menstrual history and remove any tampon/foreign body source',
            correct: true,
            feedback: 'Essential source control! Removing toxin source can be life-saving.',
            consequence: { patientEffect: 'Tampon removed - toxin source eliminated', timeDelay: 0 }
          },
          {
            text: 'Avoid intimate examination in emergency setting',
            correct: false,
            feedback: 'Wrong priority! Source removal is critical in TSS.',
            consequence: { patientEffect: 'Continued toxin production and exposure', timeDelay: 5 }
          },
          {
            text: 'Focus only on hemodynamic support',
            correct: false,
            feedback: 'Incomplete! Must address underlying toxin source.',
            consequence: { patientEffect: 'TSS continues to progress despite supportive care', timeDelay: 5 }
          }
        ]
      }
    ],
    learningPoints: [
      'TSS triad: fever >102°F, rash, hypotension',
      'Caused by staph or strep toxins',
      'Distributive shock requires early fluid + pressors',
      'Dopamine preferred over norepinephrine in TSS',
      'Remove source if identifiable (tampons, nasal packing)'
    ],
    debrief: [
      'Don\'t delay pressors in refractory distributive shock',
      'TSS can progress to multi-organ failure rapidly',
      'Consider TSS in menstruating women with fever and rash',
      'Early recognition and aggressive treatment improves survival'
    ],
    timer: 720,
    tags: ['toxic-shock', 'distributive-shock', 'vasopressors', 'sepsis', 'multi-organ-failure']
  },

  {
    id: 'paramedic-tension-pneumo',
    title: 'Tension Pneumothorax - Needle Decompression',
    certificationLevel: 'Paramedic',
    difficulty: 'Advanced',
    category: 'Trauma',
    chiefComplaint: 'Motor vehicle crash with respiratory distress',
    vitals: {
      initialVitals: {
        'Heart Rate': '135 bpm',
        'Respiratory Rate': '32/min shallow',
        'Blood Pressure': '85/60 mmHg',
        'Oxygen Saturation': '82% on high-flow O2',
        'Temperature': '97.8°F',
        'AVPU': 'Alert but anxious'
      },
      followUpVitals: {
        'Heart Rate': '110 bpm (post-decompression)',
        'Blood Pressure': '110/75 mmHg',
        'Oxygen Saturation': '95% on high-flow O2'
      }
    },
    patientInfo: {
      age: '42 years',
      gender: 'Male',
      weight: '90 kg',
      allergies: 'NKDA',
      medications: 'None',
      history: 'No significant medical history'
    },
    presentation: 'High-speed MVA with steering wheel impact. Patient has severe respiratory distress, tracheal deviation to left, absent breath sounds on right, distended neck veins, and subcutaneous emphysema.',
    criticalActions: [
      {
        action: 'What is your first step?',
        timeLimit: 60,
        beyondScope: ['EMT', 'AEMT'],
        consequence: 'Tension pneumo is rapidly fatal without decompression',
        choices: [
          {
            text: 'Recognize tension pneumothorax clinical signs (tracheal deviation, JVD, absent breath sounds)',
            correct: true,
            feedback: 'Critical recognition! Classic tension pneumo presentation.',
            consequence: { patientEffect: 'Diagnosis confirmed - immediate action needed', timeDelay: 0 }
          },
          {
            text: 'Start IV access before addressing breathing',
            correct: false,
            feedback: 'Wrong priority! Airway/breathing before circulation.',
            consequence: { patientEffect: 'Patient continues to deteriorate', timeDelay: 5 }
          },
          {
            text: 'Wait for chest X-ray confirmation',
            correct: false,
            feedback: 'Dangerous delay! Tension pneumo is clinical diagnosis.',
            consequence: { patientEffect: 'Life-threatening delay', timeDelay: 5 }
          }
        ]
      },
      {
        action: 'What is your next step?',
        timeLimit: 30,
        consequence: 'Cannot wait for IV access or other interventions',
        choices: [
          {
            text: 'Prepare for immediate needle decompression',
            correct: true,
            feedback: 'Life-saving decision! No time for other interventions.',
            consequence: { patientEffect: 'Equipment ready for decompression', timeDelay: 0 }
          },
          {
            text: 'Apply high-flow oxygen and wait',
            correct: false,
            feedback: 'Insufficient! Tension pneumo needs immediate decompression.',
            consequence: { patientEffect: 'Continued cardiovascular collapse', timeDelay: 5 }
          },
          {
            text: 'Transport immediately without intervention',
            correct: false,
            feedback: 'Patient will arrest en route! Decompress now.',
            consequence: { patientEffect: 'Risk of cardiac arrest', timeDelay: 5 }
          }
        ]
      },
      {
        action: 'What is your next step?',
        timeLimit: 60,
        beyondScope: ['EMT', 'AEMT'],
        consequence: 'Correct anatomical landmarks crucial for safety',
        choices: [
          {
            text: 'Locate 2nd intercostal space, midclavicular line on affected side',
            correct: true,
            feedback: 'Perfect anatomical landmark identification!',
            consequence: { patientEffect: 'Correct site identified for decompression', timeDelay: 0 }
          },
          {
            text: 'Use 5th intercostal space, anterior axillary line',
            correct: false,
            feedback: 'Alternative site, but 2nd ICS midclavicular is preferred.',
            consequence: { patientEffect: 'Suboptimal needle placement', timeDelay: 5 }
          },
          {
            text: 'Insert needle wherever breath sounds are absent',
            correct: false,
            feedback: 'Dangerous! Specific anatomical landmarks required.',
            consequence: { patientEffect: 'Risk of organ injury', timeDelay: 5 }
          }
        ]
      },
      {
        action: 'What is your next step?',
        timeLimit: 30,
        beyondScope: ['EMT', 'AEMT'],
        consequence: 'Large bore needle needed to release pressure',
        choices: [
          {
            text: 'Insert 14-gauge needle perpendicular to chest wall',
            correct: true,
            feedback: 'Correct technique! 14G needed for adequate decompression.',
            consequence: { patientEffect: 'Rush of air heard - pressure released', timeDelay: 0 }
          },
          {
            text: 'Use 18-gauge needle to minimize trauma',
            correct: false,
            feedback: 'Too small! 14G needed for tension pneumo decompression.',
            consequence: { patientEffect: 'Inadequate decompression', timeDelay: 5 }
          },
          {
            text: 'Insert needle at 45-degree angle',
            correct: false,
            feedback: 'Wrong angle! Must be perpendicular to chest wall.',
            consequence: { patientEffect: 'Inadequate penetration', timeDelay: 5 }
          }
        ]
      },
      {
        action: 'What is your next step?',
        timeLimit: 120,
        consequence: 'Document improvement after intervention',
        choices: [
          {
            text: 'Reassess breath sounds and vital signs for improvement',
            correct: true,
            feedback: 'Essential reassessment! Confirms successful decompression.',
            consequence: { patientEffect: 'Improved breath sounds, BP stabilizing', timeDelay: 0 }
          },
          {
            text: 'Assume successful and move to transport',
            correct: false,
            feedback: 'Must confirm improvement! Document intervention success.',
            consequence: { patientEffect: 'Missing potential complications', timeDelay: 5 }
          },
          {
            text: 'Remove needle immediately after insertion',
            correct: false,
            feedback: 'Wrong! Secure catheter and monitor for re-accumulation.',
            consequence: { patientEffect: 'Re-accumulation of pressure', timeDelay: 5 }
          }
        ]
      }
    ],
    learningPoints: [
      'Tension pneumo signs: absent breath sounds, tracheal deviation, JVD, hypotension',
      'Needle decompression location: 2nd ICS, midclavicular line',
      'Use 14-gauge needle, at least 3 inches long',
      'Should hear air rushing out when pressure released',
      'May need bilateral decompression in severe trauma'
    ],
    debrief: [
      'Don\'t wait for X-ray confirmation in obvious tension pneumo',
      'Incorrect needle placement can cause iatrogenic injury',
      'Consider 5th ICS, anterior axillary line if 2nd ICS unsuccessful',
      'Chest tube placement is definitive treatment'
    ],
    timer: 240,
    tags: ['tension-pneumothorax', 'needle-decompression', 'trauma', 'respiratory-emergency', 'life-threatening']
  },

  {
    id: 'paramedic-pediatric-dka',
    title: 'Pediatric DKA - Fluid Calculation Pitfalls',
    certificationLevel: 'Paramedic',
    difficulty: 'Advanced',
    category: 'Pediatric Emergency',
    chiefComplaint: '8-year-old with vomiting and altered mental status',
    vitals: {
      initialVitals: {
        'Heart Rate': '150 bpm',
        'Respiratory Rate': '32/min deep',
        'Blood Pressure': '90/55 mmHg',
        'Oxygen Saturation': '99% on room air',
        'Temperature': '98.8°F',
        'Blood Glucose': '450 mg/dL',
        'AVPU': 'Verbal (lethargic)'
      }
    },
    patientInfo: {
      age: '8 years',
      gender: 'Female',
      weight: '25 kg',
      allergies: 'NKDA',
      medications: 'None',
      history: 'No known diabetes, recent viral illness'
    },
    presentation: 'Child with 3-day history of vomiting, increased urination, and progressive lethargy. Parents note fruity breath odor. Kussmaul respirations present, appears dehydrated.',
    criticalActions: [
      {
        action: 'What is your first step?',
        timeLimit: 120,
        beyondScope: ['EMT', 'AEMT'],
        consequence: 'DKA can rapidly progress to coma and death',
        choices: [
          {
            text: 'Recognize DKA triad: hyperglycemia + ketosis + acidosis (Kussmaul breathing)',
            correct: true,
            feedback: 'Essential recognition! DKA requires all three components.',
            consequence: { patientEffect: 'DKA confirmed - careful management required', timeDelay: 0 }
          },
          {
            text: 'Treat as simple hyperglycemia',
            correct: false,
            feedback: 'Incomplete! DKA is more than just high glucose.',
            consequence: { patientEffect: 'Missing acidosis and ketosis components', timeDelay: 5 }
          },
          {
            text: 'Focus only on dehydration',
            correct: false,
            feedback: 'Dangerous! DKA has specific fluid management requirements.',
            consequence: { patientEffect: 'Risk of cerebral edema from inappropriate fluids', timeDelay: 5 }
          }
        ]
      },
      {
        action: 'What is your next step?',
        timeLimit: 240,
        beyondScope: ['EMT', 'AEMT'],
        consequence: 'Limit initial fluids to prevent brain swelling',
        choices: [
          {
            text: 'Start with careful fluid bolus (10-20 mL/kg NS) only if shocked',
            correct: true,
            feedback: 'Critical pediatric approach! Limited fluids prevent cerebral edema.',
            consequence: { patientEffect: 'Controlled rehydration without brain swelling', timeDelay: 0 }
          },
          {
            text: 'Use aggressive adult DKA fluid protocols',
            correct: false,
            feedback: 'Dangerous! Pediatric DKA has different requirements.',
            consequence: { patientEffect: 'High risk of cerebral edema', timeDelay: 5 }
          },
          {
            text: 'Withhold all fluids until hospital',
            correct: false,
            feedback: 'Too conservative! Some controlled rehydration needed.',
            consequence: { patientEffect: 'Continued severe dehydration', timeDelay: 5 }
          }
        ]
      },
      {
        action: 'What is your next step?',
        timeLimit: 300,
        consequence: 'Headache, altered mental status, bradycardia are warning signs',
        choices: [
          {
            text: 'Monitor neurological status closely for cerebral edema signs',
            correct: true,
            feedback: 'Life-saving monitoring! Cerebral edema is leading cause of death.',
            consequence: { patientEffect: 'Continuous neuro monitoring - no deterioration', timeDelay: 0 }
          },
          {
            text: 'Focus only on glucose management',
            correct: false,
            feedback: 'Incomplete! Neurological monitoring is critical.',
            consequence: { patientEffect: 'Missing early signs of cerebral edema', timeDelay: 5 }
          },
          {
            text: 'Assume neurological changes are from DKA',
            correct: false,
            feedback: 'Dangerous assumption! Could be cerebral edema.',
            consequence: { patientEffect: 'Delayed recognition of brain swelling', timeDelay: 5 }
          }
        ]
      }
    ],
    learningPoints: [
      'Pediatric DKA has higher risk of cerebral edema than adults',
      'Limit initial fluids: 10-20 mL/kg only if shocked',
      'Never give insulin prehospital in pediatric DKA',
      'Kussmaul respirations = compensatory hyperventilation',
      'New-onset diabetes often presents as DKA in children'
    ],
    debrief: [
      'Adult DKA fluid protocols don\'t apply to children',
      'Cerebral edema is leading cause of death in pediatric DKA',
      'Slow, careful rehydration prevents brain swelling',
      'Hospital will need precise weight-based calculations'
    ],
    timer: 600,
    tags: ['pediatric', 'DKA', 'fluid-management', 'cerebral-edema', 'diabetes']
  },

  {
    id: 'paramedic-ectopic-pregnancy',
    title: 'Ectopic Pregnancy - False-Negative hCG',
    certificationLevel: 'Paramedic',
    difficulty: 'Advanced',
    category: 'Obstetric Emergency',
    chiefComplaint: '28-year-old female with abdominal pain',
    vitals: {
      initialVitals: {
        'Heart Rate': '110 bpm',
        'Respiratory Rate': '20/min',
        'Blood Pressure': '100/65 mmHg',
        'Oxygen Saturation': '98% on room air',
        'Temperature': '98.9°F',
        'AVPU': 'Alert and oriented'
      },
      followUpVitals: {
        'Heart Rate': '125 bpm',
        'Blood Pressure': '85/50 mmHg (after position change)',
        'AVPU': 'Alert but anxious'
      }
    },
    patientInfo: {
      age: '28 years',
      gender: 'Female',
      weight: '65 kg',
      allergies: 'NKDA',
      medications: 'Birth control pills',
      history: 'G2P1, last menstrual period 5 weeks ago'
    },
    presentation: 'Sharp right lower abdominal pain that started suddenly 2 hours ago. Denies vaginal bleeding. Home pregnancy test negative this morning. Pain worsens with movement.',
    criticalActions: [
      {
        action: 'What is your first step?',
        timeLimit: 180,
        consequence: 'Ectopic pregnancy can occur despite negative home test',
        choices: [
          {
            text: 'Obtain detailed menstrual and pregnancy history (last period, sexual activity)',
            correct: true,
            feedback: 'Essential history! Ectopic can occur with negative home tests.',
            consequence: { patientEffect: 'Last period 5 weeks ago confirmed', timeDelay: 0 }
          },
          {
            text: 'Rule out pregnancy based on negative test',
            correct: false,
            feedback: 'Dangerous! Home tests can be false negative in ectopic.',
            consequence: { patientEffect: 'Critical diagnosis missed', timeDelay: 5 }
          },
          {
            text: 'Focus only on appendicitis workup',
            correct: false,
            feedback: 'Incomplete! Reproductive age women need pregnancy consideration.',
            consequence: { patientEffect: 'Life-threatening condition overlooked', timeDelay: 5 }
          }
        ]
      },
      {
        action: 'What is your next step?',
        timeLimit: 120,
        consequence: 'Early sign of volume loss from internal bleeding',
        choices: [
          {
            text: 'Test for orthostatic vital signs',
            correct: true,
            feedback: 'Critical assessment! Orthostatics reveal hidden blood loss.',
            consequence: { patientEffect: 'HR increases 25 bpm when standing', timeDelay: 0 }
          },
          {
            text: 'Skip vital sign changes since patient looks stable',
            correct: false,
            feedback: 'Dangerous! Internal bleeding can be occult initially.',
            consequence: { patientEffect: 'Missed early signs of hemorrhage', timeDelay: 5 }
          },
          {
            text: 'Only check blood pressure lying down',
            correct: false,
            feedback: 'Incomplete! Position changes reveal volume loss.',
            consequence: { patientEffect: 'Hidden blood loss undetected', timeDelay: 5 }
          }
        ]
      },
      {
        action: 'What is your next step?',
        timeLimit: 240,
        consequence: 'Ruptured ectopic can cause rapid decompensation',
        choices: [
          {
            text: 'Prepare for shock management (IV access, fluid resuscitation)',
            correct: true,
            feedback: 'Life-saving preparation! Ectopic can rupture suddenly.',
            consequence: { patientEffect: 'Large-bore IV established, fluids ready', timeDelay: 0 }
          },
          {
            text: 'Assume stable since patient is talking',
            correct: false,
            feedback: 'False security! Ectopic can rupture without warning.',
            consequence: { patientEffect: 'Unprepared for sudden deterioration', timeDelay: 5 }
          },
          {
            text: 'Focus only on pain management',
            correct: false,
            feedback: 'Inadequate! Must prepare for hemorrhagic shock.',
            consequence: { patientEffect: 'Missing life-threatening preparation', timeDelay: 5 }
          }
        ]
      }
    ],
    learningPoints: [
      'Home pregnancy tests can be false negative in ectopic pregnancy',
      'Classic triad: abdominal pain, amenorrhea, vaginal bleeding',
      'Only 50% present with classic triad',
      'Ruptured ectopic can cause rapid hemorrhagic shock',
      'Any woman of childbearing age with abdominal pain = pregnancy until proven otherwise'
    ],
    debrief: [
      'Low threshold for suspecting ectopic pregnancy',
      'Negative home pregnancy test doesn\'t rule out ectopic',
      'Hospital quantitative hCG needed for diagnosis',
      'Orthostatic changes may be earliest sign of rupture'
    ],
    timer: 720,
    tags: ['ectopic-pregnancy', 'internal-bleeding', 'false-negative', 'obstetric-emergency', 'hemorrhage']
  },

  {
    id: 'paramedic-beta-blocker-od',
    title: 'Beta-Blocker Overdose - High-Dose Insulin',
    certificationLevel: 'Paramedic',
    difficulty: 'Advanced',
    category: 'Toxicology',
    chiefComplaint: 'Overdose patient with bradycardia and hypotension',
    vitals: {
      initialVitals: {
        'Heart Rate': '35 bpm',
        'Respiratory Rate': '14/min',
        'Blood Pressure': '70/40 mmHg',
        'Oxygen Saturation': '96% on room air',
        'Temperature': '96.8°F',
        'Blood Glucose': '180 mg/dL',
        'AVPU': 'Verbal (confused)'
      },
      followUpVitals: {
        'Heart Rate': '55 bpm (post-treatment)',
        'Blood Pressure': '95/60 mmHg'
      }
    },
    patientInfo: {
      age: '45 years',
      gender: 'Female',
      weight: '70 kg',
      allergies: 'NKDA',
      medications: 'Metoprolol, Sertraline',
      history: 'Depression, hypertension, suicide attempt'
    },
    presentation: 'Patient found by family with empty metoprolol bottle nearby. Suicide note present. Patient lethargic with severe bradycardia and hypotension refractory to atropine.',
    criticalActions: [
      {
        action: 'Recognize beta-blocker toxicity pattern',
        timeLimit: 60,
        beyondScope: ['EMT', 'AEMT'],
        consequence: 'BB overdose causes refractory bradycardia and shock'
      },
      {
        action: 'Administer atropine 0.5-1mg IV (may be ineffective)',
        timeLimit: 120,
        beyondScope: ['EMT', 'AEMT'],
        consequence: 'Try conventional therapy first but expect poor response'
      },
      {
        action: 'Check blood glucose before insulin therapy',
        timeLimit: 60,
        consequence: 'Need baseline glucose before high-dose insulin'
      },
      {
        action: 'Administer D50 1 amp IV if glucose <250mg/dL',
        timeLimit: 120,
        beyondScope: ['EMT', 'AEMT'],
        consequence: 'Raise glucose before insulin to prevent hypoglycemia'
      },
      {
        action: 'Give regular insulin 1 unit/kg IV bolus',
        timeLimit: 180,
        beyondScope: ['EMT', 'AEMT'],
        consequence: 'High-dose insulin improves cardiac contractility'
      },
      {
        action: 'Start insulin drip 1 unit/kg/hr if available',
        timeLimit: 300,
        beyondScope: ['EMT', 'AEMT'],
        consequence: 'Continuous therapy needed for sustained effect'
      },
      {
        action: 'Monitor glucose every 15 minutes',
        timeLimit: 900,
        consequence: 'High-dose insulin can cause severe hypoglycemia'
      }
    ],
    learningPoints: [
      'Beta-blocker overdose causes refractory shock',
      'Atropine often ineffective in BB poisoning',
      'High-dose insulin is antidote of choice',
      'Insulin improves cardiac contractility and glucose utilization',
      'Must monitor glucose closely with insulin therapy'
    ],
    debrief: [
      'Think beta-blocker overdose in refractory bradycardia',
      'Conventional therapies (atropine, dopamine) often fail',
      'High-dose insulin euglycemia therapy is first-line antidote',
      'May need massive dextrose supplementation'
    ],
    timer: 600,
    tags: ['beta-blocker', 'overdose', 'insulin', 'antidote', 'refractory-shock']
  },

  {
    id: 'paramedic-submersion-injury',
    title: 'Submersion Injury - ARDS Prevention',
    certificationLevel: 'Paramedic',
    difficulty: 'Advanced',
    category: 'Environmental Emergency',
    chiefComplaint: 'Near-drowning victim pulled from pool',
    vitals: {
      initialVitals: {
        'Heart Rate': '125 bpm',
        'Respiratory Rate': '28/min labored',
        'Blood Pressure': '110/70 mmHg',
        'Oxygen Saturation': '88% on room air',
        'Temperature': '95.2°F',
        'AVPU': 'Alert but anxious'
      },
      followUpVitals: {
        'Oxygen Saturation': '94% on CPAP 10cmH2O',
        'Respiratory Rate': '22/min'
      }
    },
    patientInfo: {
      age: '16 years',
      gender: 'Male',
      weight: '65 kg',
      allergies: 'NKDA',
      medications: 'None',
      history: 'Healthy teenager, strong swimmer'
    },
    presentation: 'Patient was underwater for approximately 2-3 minutes after hitting head on diving board. Self-rescued but coughing up frothy sputum. Appears anxious with increased work of breathing.',
    criticalActions: [
      {
        action: 'Assess for cervical spine injury (diving accident)',
        timeLimit: 60,
        consequence: 'Diving injuries commonly cause C-spine trauma'
      },
      {
        action: 'Apply high-flow oxygen or CPAP for respiratory distress',
        timeLimit: 120,
        beyondScope: ['EMT', 'AEMT in some regions'],
        consequence: 'Submersion causes pulmonary edema and V/Q mismatch'
      },
      {
        action: 'Initiate rewarming for hypothermia',
        timeLimit: 180,
        consequence: 'Cold water submersion causes rapid heat loss'
      },
      {
        action: 'Avoid prophylactic positive pressure ventilation',
        timeLimit: 60,
        consequence: 'Unnecessary PPV can worsen lung injury'
      },
      {
        action: 'Monitor for delayed pulmonary edema',
        timeLimit: 300,
        consequence: 'Secondary drowning can occur hours later'
      },
      {
        action: 'Consider gastric decompression if distended',
        timeLimit: 240,
        beyondScope: ['EMT', 'AEMT'],
        consequence: 'Swallowed water can cause gastric distension'
      },
      {
        action: 'Prepare for intubation if respiratory failure develops',
        timeLimit: 600,
        beyondScope: ['EMT', 'AEMT'],
        consequence: 'May need advanced airway for ARDS'
      }
    ],
    learningPoints: [
      'All submersion victims need hospital evaluation',
      'Secondary drowning can occur 4-24 hours later',
      'Fresh water causes different pathophysiology than salt water',
      'Hypothermia is protective in cold water drowning',
      'Avoid aggressive ventilation unless clearly indicated'
    ],
    debrief: [
      'Consider spinal immobilization in diving accidents',
      'CPAP may prevent need for intubation',
      'Monitor for delayed respiratory deterioration',
      'Cold water drowning has better neurologic outcomes'
    ],
    timer: 720,
    tags: ['submersion', 'drowning', 'CPAP', 'secondary-drowning', 'environmental']
  },

  {
    id: 'paramedic-mass-casualty',
    title: 'Mass Casualty - START Triage Practice',
    certificationLevel: 'Paramedic',
    difficulty: 'Advanced',
    category: 'Disaster Medicine',
    chiefComplaint: 'Multi-vehicle accident with 8 victims',
    vitals: {
      initialVitals: {
        'Victim 1': 'Walking, minor lacerations',
        'Victim 2': 'RR 35, radial pulse present, follows commands',
        'Victim 3': 'Not breathing, no pulse after airway positioning',
        'Victim 4': 'RR 8, no radial pulse, unconscious',
        'Victim 5': 'RR 24, radial pulse absent, confused'
      }
    },
    patientInfo: {
      age: 'Multiple patients ages 25-65',
      gender: 'Mixed',
      weight: 'Various',
      allergies: 'Unknown',
      medications: 'Unknown',
      history: 'Unknown in emergency setting'
    },
    presentation: 'Multiple vehicle collision on highway. Limited resources available. First EMS unit on scene with backup 15 minutes out. Must triage multiple patients quickly.',
    criticalActions: [
      {
        action: 'What is your first step?',
        timeLimit: 60,
        beyondScope: ['EMT', 'AEMT without MCI training'],
        consequence: 'Organized response prevents chaos and improves outcomes',
        choices: [
          {
            text: 'Implement Incident Command System (ICS) structure',
            correct: true,
            feedback: 'Essential! ICS prevents chaos in mass casualty events.',
            consequence: { patientEffect: 'Organized response structure established', timeDelay: 0 }
          },
          {
            text: 'Start treating the most injured patient first',
            correct: false,
            feedback: 'Wrong approach! Triage before treatment in MCI.',
            consequence: { patientEffect: 'Resources wasted on single patient', timeDelay: 5 }
          },
          {
            text: 'Wait for additional units before starting',
            correct: false,
            feedback: 'Dangerous delay! Begin triage immediately.',
            consequence: { patientEffect: 'Critical time lost', timeDelay: 5 }
          }
        ]
      },
      {
        action: 'What is your next step?',
        timeLimit: 120,
        consequence: 'Walking patients are lowest priority',
        choices: [
          {
            text: 'Begin START triage - identify walking wounded first (GREEN)',
            correct: true,
            feedback: 'Correct! Walking patients get GREEN tags - lowest priority.',
            consequence: { patientEffect: '2 walking patients tagged GREEN', timeDelay: 0 }
          },
          {
            text: 'Focus on unconscious patients first',
            correct: false,
            feedback: 'Wrong sequence! Walking wounded first in START triage.',
            consequence: { patientEffect: 'Inefficient triage process', timeDelay: 5 }
          },
          {
            text: 'Treat all patients equally',
            correct: false,
            feedback: 'Ineffective! Triage sorts by priority - greatest good for greatest number.',
            consequence: { patientEffect: 'Resources misallocated', timeDelay: 5 }
          }
        ]
      },
      {
        action: 'What is your next step?',
        timeLimit: 60,
        consequence: 'Don\'t waste resources on unsalvageable patients',
        choices: [
          {
            text: 'Tag non-breathing patients as BLACK after airway positioning',
            correct: true,
            feedback: 'Difficult but correct! BLACK tags for unsalvageable patients.',
            consequence: { patientEffect: '1 patient tagged BLACK after failed airway', timeDelay: 0 }
          },
          {
            text: 'Attempt CPR on all non-breathing patients',
            correct: false,
            feedback: 'Resource waste! No CPR in mass casualty situations.',
            consequence: { patientEffect: 'Resources tied up on unsalvageable patient', timeDelay: 5 }
          },
          {
            text: 'Skip the non-breathing patients',
            correct: false,
            feedback: 'Must check airway first! May be simple obstruction.',
            consequence: { patientEffect: 'Potentially salvageable patient missed', timeDelay: 5 }
          }
        ]
      }
    ],
    learningPoints: [
      'START: Simple Triage And Rapid Treatment',
      'Goal: Greatest good for greatest number',
      'Triage categories: RED (immediate), YELLOW (delayed), GREEN (minor), BLACK (deceased)',
      'Don\'t get fixated on one patient',
      'Re-triage frequently as conditions change'
    ],
    debrief: [
      'Triage decisions are difficult but necessary',
      'Focus on salvageable patients first',
      'Communicate clearly with incoming resources',
      'Document triage decisions for quality improvement'
    ],
    timer: 900,
    tags: ['mass-casualty', 'triage', 'START', 'incident-command', 'disaster-medicine']
  },

  {
    id: 'paramedic-difficult-airway',
    title: 'Difficult Airway - Failed Intubation Drill',
    certificationLevel: 'Paramedic',
    difficulty: 'Advanced',
    category: 'Airway Management',
    chiefComplaint: 'Respiratory arrest requiring advanced airway',
    vitals: {
      initialVitals: {
        'Heart Rate': '55 bpm',
        'Respiratory Rate': '0/min',
        'Blood Pressure': '70/40 mmHg',
        'Oxygen Saturation': '75% on BVM',
        'Temperature': '98.2°F',
        'AVPU': 'Unresponsive'
      },
      followUpVitals: {
        'Oxygen Saturation': '85% on BVM (post-positioning)',
        'Heart Rate': '65 bpm'
      }
    },
    patientInfo: {
      age: '68 years',
      gender: 'Male',
      weight: '130 kg',
      allergies: 'NKDA',
      medications: 'Multiple cardiac meds',
      history: 'Morbid obesity, sleep apnea, short neck'
    },
    presentation: 'Obese patient in respiratory arrest. Difficult BVM ventilation due to body habitus. Short neck, limited mouth opening, and receding chin suggest difficult intubation.',
    criticalActions: [
      {
        action: 'What is your first step?',
        timeLimit: 60,
        beyondScope: ['EMT', 'AEMT'],
        consequence: 'LEMON criteria: Look, Evaluate, Mallampati, Obstruction, Neck',
        choices: [
          {
            text: 'Recognize difficult airway predictors (obesity, short neck, limited mouth opening)',
            correct: true,
            feedback: 'Critical recognition! LEMON criteria predict difficult intubation.',
            consequence: { patientEffect: 'Difficult airway identified - prepare alternatives', timeDelay: 0 }
          },
          {
            text: 'Proceed with standard intubation approach',
            correct: false,
            feedback: 'Dangerous! Must recognize and prepare for difficult airway.',
            consequence: { patientEffect: 'Unprepared for failed intubation', timeDelay: 5 }
          },
          {
            text: 'Skip airway assessment due to urgency',
            correct: false,
            feedback: 'Wrong! Quick assessment prevents multiple failed attempts.',
            consequence: { patientEffect: 'High risk of airway disaster', timeDelay: 5 }
          }
        ]
      },
      {
        action: 'What is your next step?',
        timeLimit: 120,
        consequence: 'Two-person BVM with OPA/NPA may be sufficient',
        choices: [
          {
            text: 'Optimize BVM ventilation first (two-person technique, OPA/NPA)',
            correct: true,
            feedback: 'Excellent! Optimize BVM before attempting intubation.',
            consequence: { patientEffect: 'Ventilation improves to 85% SpO2', timeDelay: 0 }
          },
          {
            text: 'Immediately attempt intubation',
            correct: false,
            feedback: 'Wrong sequence! Optimize BVM first.',
            consequence: { patientEffect: 'Failed intubation with worsening hypoxia', timeDelay: 5 }
          },
          {
            text: 'Use one-person BVM technique',
            correct: false,
            feedback: 'Inadequate! Obese patients need two-person BVM.',
            consequence: { patientEffect: 'Poor ventilation continues', timeDelay: 5 }
          }
        ]
      },
      {
        action: 'What is your next step?',
        timeLimit: 180,
        beyondScope: ['EMT', 'AEMT'],
        consequence: 'King airway, cricothyrotomy kit ready',
        choices: [
          {
            text: 'Prepare backup airway devices before first intubation attempt',
            correct: true,
            feedback: 'Life-saving preparation! Always have Plan B ready.',
            consequence: { patientEffect: 'King LT and surgical kit prepared', timeDelay: 0 }
          },
          {
            text: 'Focus only on intubation equipment',
            correct: false,
            feedback: 'Dangerous! High likelihood of intubation failure.',
            consequence: { patientEffect: 'No backup plan when intubation fails', timeDelay: 5 }
          },
          {
            text: 'Wait until after failed attempt to prepare alternatives',
            correct: false,
            feedback: 'Too late! Backup devices must be ready immediately.',
            consequence: { patientEffect: 'Critical delay when primary plan fails', timeDelay: 5 }
          }
        ]
      }
    ],
    learningPoints: [
      'LEMON criteria predict difficult intubation',
      'Optimize positioning and BVM before intubation',
      'Have backup plan ready before first attempt',
      'Three attempts rule: stop after 3 failed attempts',
      'Supraglottic airways are excellent rescue devices'
    ],
    debrief: [
      'Good BVM ventilation may be better than poor intubation',
      'Don\'t let ego drive continued failed attempts',
      'Practice with difficult airway algorithms regularly',
      'Consider awake intubation techniques in obvious difficult airways'
    ],
    timer: 480,
    tags: ['difficult-airway', 'failed-intubation', 'rescue-airway', 'LEMON', 'supraglottic']
  }
];

export default trainingScenarios;