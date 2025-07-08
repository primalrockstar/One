export interface MedicationSimulation {
  id: string;
  title: string;
  medication: string;
  certificationLevel: 'EMT' | 'AEMT' | 'Paramedic';
  scenario: string;
  patientPresentation: {
    vitals: {
      hr: number;
      bp: string;
      rr: number;
      spo2: number;
      temp?: number;
    };
    symptoms: string[];
    allergies: string[];
    currentMedications: string[];
  };
  steps: SimulationStep[];
  criticalActions: string[];
  commonMistakes: string[];
  learningObjectives: string[];
  timeLimit: number; // minutes
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  clinicalReferences?: string[];
}

export interface SimulationStep {
  id: number;
  action: string;
  description: string;
  options: string[];
  correctOption: number;
  rationale: string;
  criticalStep: boolean;
  timeAllowed?: number; // seconds
  feedback: {
    correct: string;
    incorrect: string;
  };
  clinicalExplanation?: string;
}

export interface SimulationProgress {
  simulationId?: string;
  currentStep: number;
  score: number;
  timeElapsed: number;
  correctActions: number;
  totalActions: number;
  mistakes: string[];
  correctAnswers?: number;
  criticalActionsMissed?: string[];
  timeRemaining?: number;
  totalSteps?: number;
  completed?: boolean;
  startTime?: number;
}

export interface SimulationResult {
  simulationId?: string;
  completed: boolean;
  score: number;
  grade: 'Pass' | 'Fail';
  timeElapsed: number;
  correctActions: number;
  totalActions: number;
  mistakes: string[];
  recommendations: string[];
  passed?: boolean;
  passingScore?: number;
  correctAnswers?: number;
  totalSteps?: number;
  timeUsed?: number;
  criticalActionsMissed?: string[];
  certificationLevel?: string;
}

export const medicationSimulations: MedicationSimulation[] = [
  {
    id: 'epi_anaphylaxis',
    title: 'Epinephrine Administration for Anaphylaxis',
    medication: 'Epinephrine Auto-Injector',
    certificationLevel: 'EMT',
    scenario: 'You respond to a 28-year-old female at a restaurant experiencing severe allergic reaction after eating shellfish. She is conscious but severely distressed.',
    patientPresentation: {
      vitals: {
        hr: 125,
        bp: '88/52',
        rr: 28,
        spo2: 89,
        temp: 98.6
      },
      symptoms: ['facial swelling', 'hives', 'difficulty breathing', 'hoarse voice'],
      allergies: ['shellfish'],
      currentMedications: []
    },
    steps: [
      {
        id: 1,
        action: 'Initial Assessment',
        description: 'Patient shows signs of severe allergic reaction. What is your first priority?',
        options: [
          'Administer epinephrine immediately',
          'Establish IV access first',
          'Give oxygen and assess airway',
          'Take detailed allergy history'
        ],
        correctOption: 2,
        rationale: 'Airway assessment and oxygen are critical first steps before medication administration.',
        criticalStep: true,
        timeAllowed: 30,
        feedback: {
          correct: 'Excellent! Airway assessment is always the priority in anaphylaxis.',
          incorrect: 'While epinephrine is important, airway assessment and oxygen should come first.'
        }
      },
      {
        id: 2,
        action: 'Epinephrine Preparation',
        description: 'You need to prepare the epinephrine auto-injector. What is the correct dose?',
        options: [
          '0.15mg for adults',
          '0.3mg for adults',
          '0.5mg for adults',
          '1.0mg for adults'
        ],
        correctOption: 1,
        rationale: 'Adult epinephrine auto-injector contains 0.3mg of epinephrine.',
        criticalStep: true,
        timeAllowed: 20,
        feedback: {
          correct: 'Correct! Adult EpiPen contains 0.3mg of epinephrine.',
          incorrect: 'Adult auto-injectors contain 0.3mg. 0.15mg is for pediatric patients.'
        }
      },
      {
        id: 3,
        action: 'Administration Site',
        description: 'Where should you administer the epinephrine auto-injector?',
        options: [
          'Deltoid muscle',
          'Vastus lateralis (outer thigh)',
          'Gluteal muscle',
          'Subcutaneous in arm'
        ],
        correctOption: 1,
        rationale: 'Vastus lateralis provides rapid absorption and is safest injection site.',
        criticalStep: true,
        timeAllowed: 15,
        feedback: {
          correct: 'Perfect! Vastus lateralis ensures rapid absorption.',
          incorrect: 'The outer thigh (vastus lateralis) is the preferred site for auto-injectors.'
        }
      },
      {
        id: 4,
        action: 'Post-Administration',
        description: 'After giving epinephrine, what should you do next?',
        options: [
          'Wait 15 minutes before transport',
          'Prepare for immediate transport',
          'Give second dose immediately',
          'Administer Benadryl'
        ],
        correctOption: 1,
        rationale: 'Rapid transport is essential as epinephrine effects are temporary.',
        criticalStep: true,
        timeAllowed: 25,
        feedback: {
          correct: 'Excellent! Rapid transport is critical as epinephrine effects last only 15-20 minutes.',
          incorrect: 'Immediate transport preparation is essential after epinephrine administration.'
        }
      }
    ],
    criticalActions: [
      'Assess and maintain airway',
      'Administer high-flow oxygen',
      'Give epinephrine 0.3mg IM to vastus lateralis',
      'Prepare for rapid transport',
      'Monitor for improvement or deterioration'
    ],
    commonMistakes: [
      'Delaying epinephrine administration',
      'Wrong injection site selection',
      'Incorrect dosage',
      'Not preparing for transport',
      'Failing to monitor airway'
    ],
    learningObjectives: [
      'Recognize signs and symptoms of anaphylaxis',
      'Demonstrate proper epinephrine auto-injector technique',
      'Understand importance of rapid transport',
      'Identify appropriate injection sites',
      'Manage airway in allergic reactions'
    ],
    timeLimit: 10,
    difficulty: 'Intermediate'
  },
  {
    id: 'naloxone_overdose',
    title: 'Naloxone Administration for Opioid Overdose',
    medication: 'Naloxone (Narcan)',
    certificationLevel: 'EMT',
    scenario: 'You respond to a 32-year-old male found unconscious in a bathroom with suspected opioid overdose. He has pinpoint pupils and slow, shallow breathing.',
    patientPresentation: {
      vitals: {
        hr: 55,
        bp: '100/70',
        rr: 6,
        spo2: 82
      },
      symptoms: ['unconscious', 'pinpoint pupils', 'slow shallow breathing', 'cyanotic'],
      allergies: ['unknown'],
      currentMedications: ['unknown']
    },
    steps: [
      {
        id: 1,
        action: 'Scene Assessment',
        description: 'You find drug paraphernalia nearby. What is your immediate priority?',
        options: [
          'Secure the scene and look for drugs',
          'Check airway and breathing immediately',
          'Ask bystanders about drug use',
          'Start chest compressions'
        ],
        correctOption: 1,
        rationale: 'Airway and breathing are critical in opioid overdose due to respiratory depression.',
        criticalStep: true,
        timeAllowed: 20,
        feedback: {
          correct: 'Correct! Respiratory depression is the primary concern in opioid overdose.',
          incorrect: 'While scene safety is important, this patient needs immediate airway/breathing support.'
        }
      },
      {
        id: 2,
        action: 'Naloxone Preparation',
        description: 'Patient is barely breathing. What is the appropriate initial naloxone dose?',
        options: [
          '0.4mg IV/IM',
          '2mg intranasal',
          '4mg intranasal',
          '0.1mg IV'
        ],
        correctOption: 1,
        rationale: '2mg intranasal is standard initial dose for EMT administration.',
        criticalStep: true,
        timeAllowed: 25,
        feedback: {
          correct: 'Excellent! 2mg intranasal is the standard EMT dose.',
          incorrect: '2mg intranasal naloxone is the appropriate starting dose for EMTs.'
        }
      },
      {
        id: 3,
        action: 'Administration Technique',
        description: 'How should you administer intranasal naloxone?',
        options: [
          'Spray in one nostril only',
          'Half dose in each nostril',
          'Spray while patient is supine',
          'Mix with saline first'
        ],
        correctOption: 1,
        rationale: 'Half the dose (1mg) should be given in each nostril for better absorption.',
        criticalStep: true,
        timeAllowed: 20,
        feedback: {
          correct: 'Perfect! Splitting the dose between nostrils improves absorption.',
          incorrect: 'Best practice is to give half the dose (1mg) in each nostril.'
        }
      },
      {
        id: 4,
        action: 'Post-Administration Monitoring',
        description: 'After giving naloxone, what should you expect?',
        options: [
          'Immediate full consciousness',
          'Gradual improvement over 2-5 minutes',
          'No change for 10-15 minutes',
          'Immediate aggressive behavior'
        ],
        correctOption: 1,
        rationale: 'Naloxone typically works within 2-5 minutes, with gradual improvement.',
        criticalStep: false,
        timeAllowed: 15,
        feedback: {
          correct: 'Correct! Naloxone usually shows effects within 2-5 minutes.',
          incorrect: 'Naloxone typically begins working within 2-5 minutes of administration.'
        }
      },
      {
        id: 5,
        action: 'Re-dosing Decision',
        description: 'Patient shows minimal improvement after 3 minutes. What should you do?',
        options: [
          'Wait longer for effect',
          'Give second dose of naloxone',
          'Start chest compressions',
          'Administer IV fluids'
        ],
        correctOption: 1,
        rationale: 'Second dose is indicated if minimal response after 2-3 minutes.',
        criticalStep: true,
        timeAllowed: 20,
        feedback: {
          correct: 'Excellent! Repeat dosing is appropriate with minimal response.',
          incorrect: 'A second dose of naloxone is indicated when response is inadequate.'
        }
      }
    ],
    criticalActions: [
      'Assess and support airway/breathing',
      'Administer naloxone 2mg intranasal',
      'Monitor for response',
      'Be prepared for repeat dosing',
      'Prepare for potential combative behavior',
      'Transport to hospital'
    ],
    commonMistakes: [
      'Delaying naloxone administration',
      'Wrong dosage calculation',
      'Poor intranasal technique',
      'Not preparing for aggressive awakening',
      'Failing to transport after recovery'
    ],
    learningObjectives: [
      'Recognize signs of opioid overdose',
      'Demonstrate proper naloxone administration',
      'Understand naloxone onset and duration',
      'Manage potentially combative patients',
      'Recognize need for repeat dosing'
    ],
    timeLimit: 8,
    difficulty: 'Intermediate'
  },
  {
    id: 'glucose_hypoglycemia',
    title: 'Oral Glucose for Hypoglycemia',
    medication: 'Oral Glucose (Glutose)',
    certificationLevel: 'EMT',
    scenario: 'You respond to a 45-year-old diabetic male found confused and diaphoretic by family. He is conscious but disoriented. Blood glucose reads 38 mg/dL.',
    patientPresentation: {
      vitals: {
        hr: 110,
        bp: '140/90',
        rr: 20,
        spo2: 98
      },
      symptoms: ['confusion', 'diaphoresis', 'weakness', 'shakiness'],
      allergies: [],
      currentMedications: ['insulin', 'metformin']
    },
    steps: [
      {
        id: 1,
        action: 'Assessment',
        description: 'Blood glucose is 38 mg/dL. What indicates oral glucose is appropriate?',
        options: [
          'Patient is conscious and can swallow',
          'Blood glucose is below 80 mg/dL',
          'Patient has diabetes history',
          'All of the above'
        ],
        correctOption: 3,
        rationale: 'All criteria must be met: conscious, able to swallow, diabetic, and hypoglycemic.',
        criticalStep: true,
        timeAllowed: 25,
        feedback: {
          correct: 'Perfect! All criteria are necessary for safe oral glucose administration.',
          incorrect: 'All factors are important - consciousness, ability to swallow, diabetes history, and low glucose.'
        }
      },
      {
        id: 2,
        action: 'Dosage',
        description: 'What is the appropriate dose of oral glucose?',
        options: [
          '10 grams',
          '15 grams',
          '25 grams',
          '50 grams'
        ],
        correctOption: 1,
        rationale: '15 grams is the standard dose of oral glucose for hypoglycemia.',
        criticalStep: true,
        timeAllowed: 15,
        feedback: {
          correct: 'Correct! 15 grams is the standard oral glucose dose.',
          incorrect: 'The standard dose is 15 grams of oral glucose.'
        }
      },
      {
        id: 3,
        action: 'Administration Method',
        description: 'How should you administer the oral glucose?',
        options: [
          'Place entire tube on tongue at once',
          'Apply small amounts to tongue/buccal mucosa',
          'Mix with water and have patient drink',
          'Inject into cheek with syringe'
        ],
        correctOption: 1,
        rationale: 'Small amounts on tongue/buccal mucosa allow for better absorption and reduce choking risk.',
        criticalStep: true,
        timeAllowed: 20,
        feedback: {
          correct: 'Excellent! Small amounts prevent choking and improve absorption.',
          incorrect: 'Apply small amounts to tongue/inside of cheek to prevent choking.'
        }
      },
      {
        id: 4,
        action: 'Monitoring',
        description: 'After giving oral glucose, when should you recheck blood glucose?',
        options: [
          'After 5 minutes',
          'After 15 minutes',
          'After 30 minutes',
          'Before transport only'
        ],
        correctOption: 1,
        rationale: 'Recheck blood glucose after 15 minutes to assess treatment effectiveness.',
        criticalStep: false,
        timeAllowed: 15,
        feedback: {
          correct: 'Correct! 15 minutes allows time for glucose absorption.',
          incorrect: '15 minutes is appropriate timing to assess treatment response.'
        }
      },
      {
        id: 5,
        action: 'Follow-up Care',
        description: 'Patient improves but glucose is now 65 mg/dL. What should you do?',
        options: [
          'Give another dose of oral glucose',
          'Encourage patient to eat a meal',
          'Transport to hospital for evaluation',
          'Clear patient and leave scene'
        ],
        correctOption: 2,
        rationale: 'Transport is necessary to prevent recurrent hypoglycemia and address underlying cause.',
        criticalStep: true,
        timeAllowed: 25,
        feedback: {
          correct: 'Excellent! Transport is essential even after successful treatment.',
          incorrect: 'All hypoglycemic patients need hospital evaluation regardless of improvement.'
        }
      }
    ],
    criticalActions: [
      'Confirm patient can swallow safely',
      'Administer 15g oral glucose',
      'Monitor for improvement',
      'Recheck blood glucose in 15 minutes',
      'Transport to hospital',
      'Document response to treatment'
    ],
    commonMistakes: [
      'Giving to unconscious patient',
      'Wrong dosage amount',
      'Administering too quickly causing choking',
      'Not rechecking glucose level',
      'Releasing patient after improvement'
    ],
    learningObjectives: [
      'Identify appropriate candidates for oral glucose',
      'Demonstrate safe administration technique',
      'Understand timing of reassessment',
      'Recognize need for hospital transport',
      'Manage hypoglycemic emergencies'
    ],
    timeLimit: 12,
    difficulty: 'Beginner'
  },
  {
    id: 'albuterol_asthma',
    title: 'Albuterol for Severe Asthma',
    medication: 'Albuterol Sulfate',
    certificationLevel: 'AEMT',
    scenario: 'You respond to a 16-year-old female with severe asthma exacerbation. She can barely speak, has audible wheezing, and is using accessory muscles.',
    patientPresentation: {
      vitals: {
        hr: 130,
        bp: '110/70',
        rr: 35,
        spo2: 88
      },
      symptoms: ['severe wheezing', 'accessory muscle use', 'inability to speak full sentences', 'anxiety'],
      allergies: ['peanuts'],
      currentMedications: ['albuterol inhaler', 'fluticasone']
    },
    steps: [
      {
        id: 1,
        action: 'Severity Assessment',
        description: 'Patient cannot speak in full sentences. This indicates:',
        options: [
          'Mild asthma exacerbation',
          'Moderate asthma exacerbation',
          'Severe asthma exacerbation',
          'Normal for this patient'
        ],
        correctOption: 2,
        rationale: 'Inability to speak in full sentences indicates severe asthma exacerbation.',
        criticalStep: true,
        timeAllowed: 20,
        feedback: {
          correct: 'Correct! This patient has severe asthma based on inability to speak.',
          incorrect: 'Inability to speak in complete sentences indicates severe asthma exacerbation.'
        }
      },
      {
        id: 2,
        action: 'Albuterol Preparation',
        description: 'What is the appropriate albuterol dose for nebulization?',
        options: [
          '1.25mg in 3ml saline',
          '2.5mg in 3ml saline',
          '5mg in 3ml saline',
          '10mg in 3ml saline'
        ],
        correctOption: 1,
        rationale: '2.5mg in 3ml normal saline is the standard nebulizer dose.',
        criticalStep: true,
        timeAllowed: 20,
        feedback: {
          correct: 'Perfect! 2.5mg is the standard adult/adolescent dose.',
          incorrect: 'Standard albuterol nebulizer dose is 2.5mg in 3ml normal saline.'
        }
      },
      {
        id: 3,
        action: 'Oxygen Flow Rate',
        description: 'What oxygen flow rate should you use for the nebulizer?',
        options: [
          '2-4 L/min',
          '6-8 L/min',
          '10-12 L/min',
          '15 L/min'
        ],
        correctOption: 1,
        rationale: '6-8 L/min provides optimal nebulization without waste.',
        criticalStep: true,
        timeAllowed: 15,
        feedback: {
          correct: 'Excellent! 6-8 L/min creates proper nebulization.',
          incorrect: '6-8 L/min oxygen flow is needed for effective nebulization.'
        }
      },
      {
        id: 4,
        action: 'Administration Instructions',
        description: 'How should you instruct the patient to breathe during nebulization?',
        options: [
          'Breathe normally through nose',
          'Take deep breaths through mouth',
          'Hold breath after each inhalation',
          'Breathe as fast as possible'
        ],
        correctOption: 1,
        rationale: 'Deep breathing through mouth maximizes medication delivery to lower airways.',
        criticalStep: false,
        timeAllowed: 20,
        feedback: {
          correct: 'Perfect! Deep mouth breathing optimizes drug delivery.',
          incorrect: 'Deep breathing through the mouth delivers medication most effectively.'
        }
      },
      {
        id: 5,
        action: 'Monitoring Response',
        description: 'After 5 minutes of albuterol, patient shows minimal improvement. What should you do?',
        options: [
          'Stop treatment and transport',
          'Give second albuterol treatment',
          'Switch to oral medications',
          'Wait 30 minutes before reassessing'
        ],
        correctOption: 1,
        rationale: 'Back-to-back albuterol treatments are appropriate for severe asthma.',
        criticalStep: true,
        timeAllowed: 25,
        feedback: {
          correct: 'Correct! Continuous or back-to-back treatments may be needed.',
          incorrect: 'Severe asthma may require repeat albuterol treatments.'
        }
      }
    ],
    criticalActions: [
      'Assess severity of asthma exacerbation',
      'Prepare albuterol 2.5mg nebulizer',
      'Set oxygen flow at 6-8 L/min',
      'Coach patient on proper breathing technique',
      'Monitor response and vital signs',
      'Prepare for additional treatments if needed'
    ],
    commonMistakes: [
      'Incorrect medication dosage',
      'Wrong oxygen flow rate',
      'Poor patient instruction',
      'Not monitoring response',
      'Delaying repeat treatments'
    ],
    learningObjectives: [
      'Assess asthma exacerbation severity',
      'Demonstrate proper nebulizer setup',
      'Understand albuterol dosing protocols',
      'Monitor treatment effectiveness',
      'Recognize need for additional interventions'
    ],
    timeLimit: 15,
    difficulty: 'Intermediate'
  },
  {
    id: 'nitroglycerin_chest_pain',
    title: 'Nitroglycerin for Chest Pain',
    medication: 'Nitroglycerin',
    certificationLevel: 'AEMT',
    scenario: 'You respond to a 58-year-old male with crushing chest pain radiating to left arm. Pain started 45 minutes ago while moving furniture. He has his own nitroglycerin.',
    patientPresentation: {
      vitals: {
        hr: 95,
        bp: '160/95',
        rr: 22,
        spo2: 96
      },
      symptoms: ['crushing chest pain', 'left arm pain', 'diaphoresis', 'nausea'],
      allergies: [],
      currentMedications: ['lisinopril', 'atorvastatin', 'nitroglycerin PRN']
    },
    steps: [
      {
        id: 1,
        action: 'Contraindication Check',
        description: 'Before giving nitroglycerin, what must you assess?',
        options: [
          'Blood pressure and recent ED medication use',
          'Heart rate and respiratory rate',
          'Pain scale and onset time',
          'Medical history only'
        ],
        correctOption: 0,
        rationale: 'Blood pressure and recent ED medication use are critical contraindications.',
        criticalStep: true,
        timeAllowed: 25,
        feedback: {
          correct: 'Excellent! Blood pressure and ED medications are key contraindications.',
          incorrect: 'Always check BP (must be >100 systolic) and ask about ED medications.'
        }
      },
      {
        id: 2,
        action: 'Dosage Verification',
        description: 'What is the standard nitroglycerin sublingual dose?',
        options: [
          '0.2mg',
          '0.4mg',
          '0.6mg',
          '0.8mg'
        ],
        correctOption: 1,
        rationale: '0.4mg (1/150 grain) is the standard sublingual nitroglycerin dose.',
        criticalStep: true,
        timeAllowed: 15,
        feedback: {
          correct: 'Perfect! 0.4mg is the standard sublingual dose.',
          incorrect: 'Standard nitroglycerin sublingual dose is 0.4mg (1/150 grain).'
        }
      },
      {
        id: 3,
        action: 'Administration Technique',
        description: 'How should nitroglycerin be administered?',
        options: [
          'Place under tongue, do not swallow',
          'Chew thoroughly before swallowing',
          'Swallow whole with water',
          'Dissolve in water first'
        ],
        correctOption: 0,
        rationale: 'Sublingual administration allows rapid absorption through mucous membranes.',
        criticalStep: true,
        timeAllowed: 20,
        feedback: {
          correct: 'Correct! Sublingual placement ensures rapid absorption.',
          incorrect: 'Nitroglycerin must be placed under the tongue for sublingual absorption.'
        }
      },
      {
        id: 4,
        action: 'Timing Protocol',
        description: 'If pain persists, when can you give the second dose?',
        options: [
          'After 2 minutes',
          'After 5 minutes',
          'After 10 minutes',
          'After 15 minutes'
        ],
        correctOption: 1,
        rationale: 'Wait 5 minutes between doses, maximum of 3 doses.',
        criticalStep: true,
        timeAllowed: 20,
        feedback: {
          correct: 'Excellent! 5-minute intervals between doses is correct.',
          incorrect: 'Wait 5 minutes between nitroglycerin doses, maximum of 3 total.'
        }
      },
      {
        id: 5,
        action: 'Side Effect Management',
        description: 'After first dose, patient complains of headache and BP drops to 110/70. What should you do?',
        options: [
          'Give second dose immediately',
          'Hold further doses and monitor',
          'Place patient in Trendelenburg position',
          'Administer IV fluids'
        ],
        correctOption: 1,
        rationale: 'Headache is normal, but monitor for further BP drops before additional doses.',
        criticalStep: false,
        timeAllowed: 25,
        feedback: {
          correct: 'Good! Monitor closely as BP is dropping but still acceptable.',
          incorrect: 'Headache is expected, but monitor BP carefully before giving more doses.'
        }
      }
    ],
    criticalActions: [
      'Check blood pressure >100 systolic',
      'Verify no recent ED medication use',
      'Assist with 0.4mg sublingual nitroglycerin',
      'Monitor blood pressure after each dose',
      'Wait 5 minutes between doses',
      'Maximum 3 doses total'
    ],
    commonMistakes: [
      'Not checking contraindications',
      'Wrong dosage administration',
      'Incorrect timing between doses',
      'Not monitoring blood pressure',
      'Giving more than 3 doses'
    ],
    learningObjectives: [
      'Identify nitroglycerin contraindications',
      'Demonstrate proper sublingual technique',
      'Understand dosing intervals and limits',
      'Monitor for side effects',
      'Manage hypotension from nitroglycerin'
    ],
    timeLimit: 18,
    difficulty: 'Intermediate'
  },
  {
    id: 'albuterol_asthma',
    title: 'Albuterol Administration for Severe Asthma',
    medication: 'Albuterol (Proventil/Ventolin)',
    certificationLevel: 'AEMT',
    scenario: 'You respond to a 28-year-old female experiencing severe asthma exacerbation. She is sitting tripod position, speaking in 2-word sentences, with audible wheezing.',
    patientPresentation: {
      vitals: {
        hr: 135,
        bp: '150/90',
        rr: 32,
        spo2: 85,
        temp: 98.4
      },
      symptoms: ['Severe dyspnea', 'Tripod positioning', 'Audible wheezing', 'Accessory muscle use', 'Diaphoresis'],
      allergies: ['Shellfish'],
      currentMedications: ['Rescue inhaler - ran out yesterday']
    },
    steps: [
      {
        id: 1,
        action: 'Assessment Priority',
        description: 'In severe asthma, your immediate assessment should focus on:',
        options: [
          'Peak flow measurement',
          'Respiratory effort and oxygenation',
          'Blood pressure',
          'Temperature'
        ],
        correctOption: 1,
        rationale: 'Respiratory distress assessment is critical - look for signs of impending respiratory failure.',
        criticalStep: true,
        feedback: {
          correct: 'Correct! Assess breathing effort, accessory muscle use, and ability to speak.',
          incorrect: 'Focus on respiratory assessment first - severe asthma can rapidly progress to respiratory failure.'
        }
      },
      {
        id: 2,
        action: 'Oxygen Decision',
        description: 'With SpO2 of 85%, your oxygen therapy should be:',
        options: [
          'Nasal cannula 2L',
          'Non-rebreather mask 15L',
          'No oxygen needed',
          'CPAP immediately'
        ],
        correctOption: 1,
        rationale: 'Severe hypoxemia requires high-flow oxygen via non-rebreather mask.',
        criticalStep: true,
        feedback: {
          correct: 'Excellent! High-flow oxygen is essential for severe hypoxemia.',
          incorrect: 'SpO2 85% requires aggressive oxygen therapy with non-rebreather mask.'
        }
      },
      {
        id: 3,
        action: 'Albuterol Preparation',
        description: 'For nebulized albuterol, the standard adult dose is:',
        options: [
          '1.25 mg in 3 ml saline',
          '2.5 mg in 3 ml saline',
          '5.0 mg in 5 ml saline',
          '0.5 mg in 2 ml saline'
        ],
        correctOption: 1,
        rationale: '2.5 mg is the standard adult dose for albuterol nebulizer treatment.',
        criticalStep: true,
        feedback: {
          correct: 'Perfect! 2.5 mg is the correct standard adult dose.',
          incorrect: 'Standard adult albuterol nebulizer dose is 2.5 mg in 3 ml normal saline.'
        }
      },
      {
        id: 4,
        action: 'Administration Method',
        description: 'Best method for albuterol delivery in this patient:',
        options: [
          'MDI with spacer',
          'Nebulizer with mask',
          'Dry powder inhaler',
          'IV albuterol'
        ],
        correctOption: 1,
        rationale: 'Nebulizer provides continuous delivery and requires less patient coordination.',
        criticalStep: true,
        feedback: {
          correct: 'Right! Nebulizer is preferred for severe distress - continuous delivery.',
          incorrect: 'Nebulizer is best for severe asthma - provides continuous medication delivery.'
        }
      },
      {
        id: 5,
        action: 'Monitoring Parameters',
        description: 'During albuterol treatment, monitor for:',
        options: [
          'Blood pressure only',
          'Heart rate and rhythm changes',
          'Temperature changes',
          'Blood glucose'
        ],
        correctOption: 1,
        rationale: 'Albuterol can cause tachycardia and arrhythmias, especially with repeated doses.',
        criticalStep: false,
        feedback: {
          correct: 'Correct! Monitor cardiac effects - albuterol increases heart rate.',
          incorrect: 'Watch for tachycardia and arrhythmias - common albuterol side effects.'
        }
      },
      {
        id: 6,
        action: 'Repeat Dosing',
        description: 'If minimal improvement after first treatment, you should:',
        options: [
          'Wait 1 hour before repeat',
          'Give second treatment in 20 minutes',
          'Switch to different medication',
          'Transport without further treatment'
        ],
        correctOption: 1,
        rationale: 'Severe asthma may require back-to-back treatments every 20 minutes.',
        criticalStep: false,
        feedback: {
          correct: 'Good! Severe asthma often requires repeated treatments.',
          incorrect: 'Severe cases may need back-to-back albuterol treatments every 20 minutes.'
        }
      }
    ],
    criticalActions: [
      'Recognize severity of asthma exacerbation',
      'Provide high-flow oxygen',
      'Administer proper albuterol dose',
      'Monitor for side effects and improvement'
    ],
    commonMistakes: [
      'Inadequate oxygen therapy',
      'Wrong albuterol dose',
      'Not recognizing treatment failure',
      'Missing cardiac monitoring'
    ],
    learningObjectives: [
      'Assess asthma severity',
      'Demonstrate proper nebulizer setup',
      'Monitor treatment response',
      'Recognize need for additional interventions'
    ],
    timeLimit: 15,
    difficulty: 'Intermediate'
  },
  {
    id: 'aspirin_acs',
    title: 'Aspirin Administration for Acute Coronary Syndrome',
    medication: 'Aspirin (ASA)',
    certificationLevel: 'EMT',
    scenario: 'You respond to a 58-year-old male with crushing chest pain for 45 minutes. Pain radiates to left arm, accompanied by nausea and diaphoresis.',
    patientPresentation: {
      vitals: {
        hr: 95,
        bp: '160/95',
        rr: 22,
        spo2: 96,
        temp: 98.6
      },
      symptoms: ['Crushing chest pain 8/10', 'Left arm radiation', 'Nausea', 'Diaphoresis', 'Anxiety'],
      allergies: ['NKDA'],
      currentMedications: ['Lisinopril', 'Simvastatin']
    },
    steps: [
      {
        id: 1,
        action: 'Pain Assessment',
        description: 'This chest pain presentation suggests:',
        options: [
          'Muscle strain',
          'Acute coronary syndrome',
          'Heartburn',
          'Anxiety attack'
        ],
        correctOption: 1,
        rationale: 'Classic ACS presentation: crushing pain, radiation, associated symptoms.',
        criticalStep: true,
        feedback: {
          correct: 'Excellent recognition of ACS - classic presentation with high-risk features.',
          incorrect: 'This presentation has classic ACS features: crushing pain, radiation, diaphoresis.'
        }
      },
      {
        id: 2,
        action: 'Aspirin Contraindications',
        description: 'Before giving aspirin, you must check for:',
        options: [
          'Diabetes only',
          'Allergy to aspirin and active bleeding',
          'High blood pressure',
          'Age over 65'
        ],
        correctOption: 1,
        rationale: 'Aspirin allergy and active bleeding are absolute contraindications.',
        criticalStep: true,
        feedback: {
          correct: 'Critical! Always check for aspirin allergy and bleeding before administration.',
          incorrect: 'Must screen for aspirin allergy and active bleeding - absolute contraindications.'
        }
      },
      {
        id: 3,
        action: 'Aspirin Dosage',
        description: 'Appropriate aspirin dose for suspected ACS:',
        options: [
          '81 mg (baby aspirin)',
          '162 mg (2 baby aspirins)',
          '324 mg (4 baby aspirins)',
          '650 mg (2 regular aspirins)'
        ],
        correctOption: 2,
        rationale: '324 mg provides optimal antiplatelet effect for ACS - should be chewed.',
        criticalStep: true,
        feedback: {
          correct: 'Perfect! 324 mg chewed provides rapid antiplatelet effect.',
          incorrect: '324 mg (4 baby aspirins) chewed is the standard ACS dose.'
        }
      },
      {
        id: 4,
        action: 'Administration Method',
        description: 'Aspirin for ACS should be:',
        options: [
          'Swallowed whole with water',
          'Chewed thoroughly',
          'Dissolved in water first',
          'Given sublingually'
        ],
        correctOption: 1,
        rationale: 'Chewing aspirin provides faster absorption and antiplatelet effect.',
        criticalStep: true,
        feedback: {
          correct: 'Correct! Chewing provides faster absorption for emergency situations.',
          incorrect: 'Chew aspirin for ACS - faster absorption than swallowing whole.'
        }
      },
      {
        id: 5,
        action: 'Additional Interventions',
        description: 'After aspirin administration, priority intervention is:',
        options: [
          'Pain medication',
          '12-lead ECG',
          'Blood pressure check',
          'IV access'
        ],
        correctOption: 1,
        rationale: '12-lead ECG is critical for ACS diagnosis and determines treatment pathway.',
        criticalStep: false,
        feedback: {
          correct: 'Excellent! 12-lead ECG is essential for ACS evaluation.',
          incorrect: '12-lead ECG should be obtained quickly to assess for STEMI.'
        }
      },
      {
        id: 6,
        action: 'Patient Education',
        description: 'You should inform the patient that aspirin:',
        options: [
          'Will stop the heart attack',
          'Helps prevent clot formation',
          'Eliminates chest pain',
          'Lower blood pressure'
        ],
        correctOption: 1,
        rationale: 'Aspirin prevents further clot formation but doesn\'t eliminate existing clots.',
        criticalStep: false,
        feedback: {
          correct: 'Right! Aspirin helps prevent additional clot formation.',
          incorrect: 'Aspirin works as antiplatelet therapy - prevents further clot formation.'
        }
      }
    ],
    criticalActions: [
      'Recognize ACS presentation',
      'Check contraindications',
      'Give appropriate dose',
      'Ensure chewing for rapid effect'
    ],
    commonMistakes: [
      'Not checking for aspirin allergy',
      'Wrong dose administration',
      'Having patient swallow instead of chew',
      'Delaying other ACS interventions'
    ],
    learningObjectives: [
      'Identify ACS signs and symptoms',
      'Know aspirin contraindications',
      'Understand antiplatelet mechanism',
      'Integrate aspirin into ACS care'
    ],
    timeLimit: 8,
    difficulty: 'Beginner'
  },
  {
    id: 'atropine_bradycardia',
    title: 'Atropine for Symptomatic Bradycardia',
    medication: 'Atropine Sulfate',
    certificationLevel: 'Paramedic',
    scenario: 'You respond to a 72-year-old male with weakness and dizziness. He appears pale and diaphoretic with a heart rate of 38 bpm and hypotension.',
    patientPresentation: {
      vitals: {
        hr: 38,
        bp: '85/45',
        rr: 18,
        spo2: 94,
        temp: 97.8
      },
      symptoms: ['Weakness', 'Dizziness', 'Pallor', 'Diaphoresis', 'Nausea'],
      allergies: ['Penicillin'],
      currentMedications: ['Metoprolol', 'Digoxin', 'Furosemide']
    },
    steps: [
      {
        id: 1,
        action: 'Clinical Assessment',
        description: 'This presentation indicates:',
        options: [
          'Stable bradycardia - monitor only',
          'Symptomatic bradycardia requiring intervention',
          'Normal findings for elderly patient',
          'Medication overdose only'
        ],
        correctOption: 1,
        rationale: 'HR 38 with hypotension and symptoms indicates hemodynamically significant bradycardia.',
        criticalStep: true,
        feedback: {
          correct: 'Correct! Signs of poor perfusion with bradycardia require immediate treatment.',
          incorrect: 'Hypotension and symptoms with bradycardia indicate hemodynamic compromise.'
        }
      },
      {
        id: 2,
        action: 'Atropine Indication',
        description: 'Atropine is indicated because:',
        options: [
          'Heart rate is below 60',
          'Patient has symptomatic bradycardia with poor perfusion',
          'Patient is elderly',
          'Medications may be causing bradycardia'
        ],
        correctOption: 1,
        rationale: 'Atropine treats symptomatic bradycardia with signs of poor perfusion.',
        criticalStep: true,
        feedback: {
          correct: 'Perfect! Atropine is for symptomatic bradycardia with hemodynamic compromise.',
          incorrect: 'Atropine indication is symptomatic bradycardia causing poor perfusion, not just slow HR.'
        }
      },
      {
        id: 3,
        action: 'Atropine Dosage',
        description: 'Initial atropine dose for symptomatic bradycardia:',
        options: [
          '0.1 mg IV',
          '0.5 mg IV',
          '1.0 mg IV',
          '2.0 mg IV'
        ],
        correctOption: 1,
        rationale: '0.5 mg IV is the standard initial dose, can repeat every 3-5 minutes.',
        criticalStep: true,
        feedback: {
          correct: 'Correct! 0.5 mg is the standard initial atropine dose.',
          incorrect: 'Initial atropine dose is 0.5 mg IV, repeated every 3-5 minutes as needed.'
        }
      },
      {
        id: 4,
        action: 'Maximum Dosing',
        description: 'Maximum total atropine dose for bradycardia is:',
        options: [
          '1.0 mg',
          '2.0 mg',
          '3.0 mg',
          '5.0 mg'
        ],
        correctOption: 2,
        rationale: 'Maximum total dose is 3.0 mg - beyond this, unlikely to be effective.',
        criticalStep: true,
        feedback: {
          correct: 'Right! Maximum total dose is 3.0 mg - further doses unlikely effective.',
          incorrect: 'Total maximum atropine dose is 3.0 mg for symptomatic bradycardia.'
        }
      },
      {
        id: 5,
        action: 'Response Monitoring',
        description: 'After atropine, you should monitor for:',
        options: [
          'Decreased heart rate',
          'Increased heart rate and improved perfusion',
          'Blood pressure drop',
          'Respiratory depression'
        ],
        correctOption: 1,
        rationale: 'Atropine should increase heart rate and improve signs of perfusion.',
        criticalStep: false,
        feedback: {
          correct: 'Excellent! Look for increased HR and improved perfusion signs.',
          incorrect: 'Monitor for HR increase and improved perfusion after atropine.'
        }
      },
      {
        id: 6,
        action: 'Alternative Treatment',
        description: 'If atropine fails to improve bradycardia, next intervention:',
        options: [
          'More atropine',
          'Transcutaneous pacing',
          'Epinephrine infusion',
          'Cardioversion'
        ],
        correctOption: 1,
        rationale: 'TCP is next line treatment for atropine-refractory symptomatic bradycardia.',
        criticalStep: false,
        feedback: {
          correct: 'Perfect! TCP is indicated when atropine fails in symptomatic bradycardia.',
          incorrect: 'Transcutaneous pacing is next step when atropine doesn\'t work.'
        }
      }
    ],
    criticalActions: [
      'Recognize symptomatic bradycardia',
      'Administer correct initial dose',
      'Monitor response appropriately',
      'Prepare for alternative treatments'
    ],
    commonMistakes: [
      'Giving atropine for asymptomatic bradycardia',
      'Wrong initial dose',
      'Exceeding maximum total dose',
      'Not preparing for TCP if needed'
    ],
    learningObjectives: [
      'Identify symptomatic bradycardia',
      'Understand atropine mechanism',
      'Know proper dosing protocol',
      'Recognize when additional interventions needed'
    ],
    timeLimit: 12,
    difficulty: 'Advanced'
  },
  {
    id: 'adenosine_svt',
    title: 'Adenosine for Supraventricular Tachycardia',
    medication: 'Adenosine (Adenocard)',
    certificationLevel: 'Paramedic',
    scenario: 'You respond to a 35-year-old female with sudden onset palpitations and chest tightness. Monitor shows narrow-complex tachycardia at 180 bpm.',
    patientPresentation: {
      vitals: {
        hr: 180,
        bp: '110/70',
        rr: 24,
        spo2: 97,
        temp: 98.2
      },
      symptoms: ['Palpitations', 'Chest tightness', 'Mild shortness of breath', 'Anxiety'],
      allergies: ['NKDA'],
      currentMedications: ['Birth control pills']
    },
    steps: [
      {
        id: 1,
        action: 'Rhythm Recognition',
        description: 'Narrow-complex tachycardia at 180 bpm suggests:',
        options: [
          'Ventricular tachycardia',
          'Supraventricular tachycardia',
          'Atrial flutter',
          'Sinus tachycardia'
        ],
        correctOption: 1,
        rationale: 'Regular narrow-complex tachycardia >150 bpm typically indicates SVT.',
        criticalStep: true,
        feedback: {
          correct: 'Excellent rhythm recognition! Classic SVT presentation.',
          incorrect: 'Regular narrow-complex tachycardia >150 bpm suggests SVT.'
        }
      },
      {
        id: 2,
        action: 'Initial Management',
        description: 'Before adenosine, first attempt should be:',
        options: [
          'Cardioversion',
          'Vagal maneuvers',
          'IV fluids',
          'Oxygen therapy'
        ],
        correctOption: 1,
        rationale: 'Vagal maneuvers should be attempted first for stable SVT patients.',
        criticalStep: true,
        feedback: {
          correct: 'Perfect! Try conservative measures first in stable patients.',
          incorrect: 'Vagal maneuvers (Valsalva, carotid massage) should be tried first.'
        }
      },
      {
        id: 3,
        action: 'Adenosine Preparation',
        description: 'Adenosine must be administered:',
        options: [
          'Slowly over 2-3 minutes',
          'Rapid IV push followed by saline flush',
          'Mixed with D5W',
          'Through small peripheral IV'
        ],
        correctOption: 1,
        rationale: 'Adenosine has 10-second half-life - must give rapid push with immediate flush.',
        criticalStep: true,
        feedback: {
          correct: 'Critical! Rapid administration is essential due to short half-life.',
          incorrect: 'Adenosine must be rapid IV push with immediate saline flush.'
        }
      },
      {
        id: 4,
        action: 'Initial Dose',
        description: 'First adenosine dose for SVT is:',
        options: [
          '3 mg IV',
          '6 mg IV',
          '12 mg IV',
          '18 mg IV'
        ],
        correctOption: 1,
        rationale: '6 mg is initial dose, can follow with 12 mg if no response.',
        criticalStep: true,
        feedback: {
          correct: 'Correct! Start with 6 mg rapid IV push.',
          incorrect: 'Initial adenosine dose is 6 mg IV push, followed by saline flush.'
        }
      },
      {
        id: 5,
        action: 'Expected Response',
        description: 'Successful adenosine administration typically causes:',
        options: [
          'Gradual heart rate decrease',
          'Brief asystole then normal rhythm',
          'Immediate blood pressure drop',
          'Chest pain relief'
        ],
        correctOption: 1,
        rationale: 'Adenosine briefly stops AV conduction, causing momentary asystole.',
        criticalStep: false,
        feedback: {
          correct: 'Exactly! Brief asystole is normal and expected with adenosine.',
          incorrect: 'Adenosine briefly blocks AV node - expect momentary pause then conversion.'
        }
      },
      {
        id: 6,
        action: 'Second Dose Protocol',
        description: 'If 6 mg fails to convert SVT, next dose should be:',
        options: [
          '6 mg again',
          '9 mg',
          '12 mg',
          '15 mg'
        ],
        correctOption: 2,
        rationale: 'If first dose fails, give 12 mg. Can repeat 12 mg once more if needed.',
        criticalStep: false,
        feedback: {
          correct: 'Perfect! Second dose is 12 mg if initial 6 mg fails.',
          incorrect: 'Second adenosine dose is 12 mg, can repeat 12 mg once more.'
        }
      }
    ],
    criticalActions: [
      'Recognize SVT rhythm',
      'Attempt vagal maneuvers first',
      'Ensure rapid IV administration',
      'Monitor for brief asystole'
    ],
    commonMistakes: [
      'Slow adenosine administration',
      'Using small IV or wrong location',
      'Not warning patient about symptoms',
      'Not having backup pacing ready'
    ],
    learningObjectives: [
      'Identify SVT on monitor',
      'Understand adenosine mechanism',
      'Master rapid administration technique',
      'Recognize normal adenosine response'
    ],
    timeLimit: 10,
    difficulty: 'Advanced'
  },
  {
    id: 'glucose_hypoglycemia',
    title: 'Oral Glucose for Hypoglycemia',
    medication: 'Oral Glucose (Insta-Glucose)',
    certificationLevel: 'EMT',
    scenario: 'You respond to a 45-year-old diabetic male found by family acting confused and irritable. Blood glucose reads 55 mg/dL. Patient is conscious and able to swallow.',
    patientPresentation: {
      vitals: {
        hr: 105,
        bp: '135/85',
        rr: 18,
        spo2: 98,
        temp: 98.1
      },
      symptoms: ['Confusion', 'Irritability', 'Diaphoresis', 'Shakiness'],
      allergies: ['NKDA'],
      currentMedications: ['Insulin', 'Metformin']
    },
    steps: [
      {
        id: 1,
        action: 'Glucose Level Assessment',
        description: 'Blood glucose of 55 mg/dL indicates:',
        options: [
          'Normal glucose level',
          'Mild hypoglycemia',
          'Significant hypoglycemia requiring treatment',
          'Severe hyperglycemia'
        ],
        correctOption: 2,
        rationale: 'Glucose <70 mg/dL with symptoms indicates hypoglycemia requiring treatment.',
        criticalStep: true,
        feedback: {
          correct: 'Correct! <70 mg/dL with symptoms requires immediate glucose administration.',
          incorrect: 'Glucose <70 mg/dL with altered mental status requires treatment.'
        }
      },
      {
        id: 2,
        action: 'Treatment Decision',
        description: 'For conscious hypoglycemic patient who can swallow:',
        options: [
          'IV dextrose only',
          'Glucagon injection',
          'Oral glucose administration',
          'Transport without treatment'
        ],
        correctOption: 2,
        rationale: 'Conscious patients who can swallow safely can receive oral glucose.',
        criticalStep: true,
        feedback: {
          correct: 'Perfect! Oral glucose is appropriate for conscious patients who can swallow.',
          incorrect: 'Conscious hypoglycemic patients who can swallow should receive oral glucose.'
        }
      },
      {
        id: 3,
        action: 'Oral Glucose Dose',
        description: 'Standard oral glucose dose for hypoglycemia:',
        options: [
          '5-10 grams',
          '15 grams',
          '25 grams',
          '50 grams'
        ],
        correctOption: 1,
        rationale: '15 grams is standard oral glucose dose - one tube of gel or 3-4 glucose tablets.',
        criticalStep: true,
        feedback: {
          correct: 'Excellent! 15 grams is the standard oral glucose dose.',
          incorrect: 'Standard dose is 15 grams - one tube of glucose gel.'
        }
      },
      {
        id: 4,
        action: 'Administration Method',
        description: 'Oral glucose should be administered:',
        options: [
          'Mixed with water and swallowed',
          'Placed under tongue',
          'Applied to buccal mucosa and swallowed',
          'Given with food'
        ],
        correctOption: 2,
        rationale: 'Apply to buccal mucosa (inside cheek) for faster absorption, then swallow.',
        criticalStep: true,
        feedback: {
          correct: 'Right! Buccal administration provides faster absorption.',
          incorrect: 'Apply to inside of cheek for faster absorption before swallowing.'
        }
      },
      {
        id: 5,
        action: 'Response Timeline',
        description: 'Expect improvement in glucose and symptoms within:',
        options: [
          '2-3 minutes',
          '10-15 minutes',
          '30 minutes',
          '1 hour'
        ],
        correctOption: 1,
        rationale: 'Oral glucose typically improves symptoms within 10-15 minutes.',
        criticalStep: false,
        feedback: {
          correct: 'Correct! Most patients improve within 10-15 minutes.',
          incorrect: 'Oral glucose usually works within 10-15 minutes of administration.'
        }
      },
      {
        id: 6,
        action: 'Follow-up Care',
        description: 'After glucose administration, you should:',
        options: [
          'Recheck glucose and encourage food intake',
          'Transport immediately',
          'Give another dose right away',
          'No further intervention needed'
        ],
        correctOption: 0,
        rationale: 'Recheck glucose to confirm improvement and encourage food to prevent recurrence.',
        criticalStep: false,
        feedback: {
          correct: 'Perfect! Recheck glucose and encourage food to prevent rebound hypoglycemia.',
          incorrect: 'Always recheck glucose and encourage food intake after treatment.'
        }
      }
    ],
    criticalActions: [
      'Confirm hypoglycemia with symptoms',
      'Ensure patient can safely swallow',
      'Give appropriate dose',
      'Monitor response and recheck glucose'
    ],
    commonMistakes: [
      'Giving to unconscious patients',
      'Wrong dose calculation',
      'Not rechecking glucose level',
      'Not encouraging follow-up food intake'
    ],
    learningObjectives: [
      'Recognize hypoglycemia signs',
      'Assess swallowing ability',
      'Understand oral glucose pharmacology',
      'Prevent recurrent hypoglycemia'
    ],
    timeLimit: 12,
    difficulty: 'Beginner'
  },
  {
    id: 'morphine_chest_pain',
    title: 'Morphine for Severe Chest Pain',
    medication: 'Morphine Sulfate',
    certificationLevel: 'Paramedic',
    scenario: 'You respond to a 62-year-old male with severe crushing chest pain 9/10 that is not relieved by nitroglycerin. 12-lead ECG shows ST elevation in leads II, III, aVF.',
    patientPresentation: {
      vitals: {
        hr: 88,
        bp: '140/85',
        rr: 22,
        spo2: 95,
        temp: 98.4
      },
      symptoms: ['Severe crushing chest pain 9/10', 'Diaphoresis', 'Nausea', 'Shortness of breath'],
      allergies: ['NKDA'],
      currentMedications: ['Atorvastatin', 'Metoprolol']
    },
    clinicalReferences: {
      indication: 'Morphine is indicated for severe pain management in STEMI when pain is not controlled by nitroglycerin',
      mechanism: 'Opioid receptor agonist providing analgesia and reducing myocardial oxygen demand through venodilation',
      contraindications: ['Respiratory depression', 'Severe hypotension', 'Known opioid allergy', 'Head injury with altered LOC'],
      guidelines: 'AHA 2020 Guidelines recommend morphine 2-4mg IV every 5-15 minutes for uncontrolled chest pain in ACS'
    },
    steps: [
      {
        id: 1,
        action: 'Pain Assessment',
        description: 'Before morphine administration, assess:',
        options: [
          'Only pain level',
          'Pain level, respiratory status, and blood pressure',
          'Heart rate only',
          'Temperature'
        ],
        correctOption: 1,
        rationale: 'Morphine can cause respiratory depression and hypotension - assess baseline vitals.',
        criticalStep: true,
        clinicalExplanation: 'Morphine depresses the respiratory center in the medulla and causes venodilation leading to decreased preload. Baseline assessment prevents complications.',
        feedback: {
          correct: 'Correct! Complete assessment prevents morphine-related complications.',
          incorrect: 'Always assess pain, breathing, and BP before morphine - prevents respiratory depression and hypotension.'
        }
      },
      {
        id: 2,
        action: 'Initial Dose',
        description: 'Appropriate initial morphine dose for chest pain:',
        options: [
          '1-2 mg IV',
          '2-4 mg IV',
          '5-10 mg IV',
          '10-15 mg IV'
        ],
        correctOption: 1,
        rationale: '2-4 mg IV is standard initial dose, can repeat every 5-15 minutes as needed.',
        criticalStep: true,
        clinicalExplanation: 'Starting with 2-4 mg allows for titration while minimizing risk of respiratory depression. Higher initial doses increase complication risk.',
        feedback: {
          correct: 'Perfect! 2-4 mg provides effective analgesia with acceptable risk profile.',
          incorrect: 'Initial morphine dose should be 2-4 mg IV to balance efficacy with safety.'
        }
      },
      {
        id: 3,
        action: 'Administration Rate',
        description: 'Morphine should be administered:',
        options: [
          'Rapid IV push',
          'Slowly over 2-3 minutes',
          'As continuous infusion',
          'Intramuscularly only'
        ],
        correctOption: 1,
        rationale: 'Slow IV administration reduces risk of respiratory depression and hemodynamic instability.',
        criticalStep: true,
        clinicalExplanation: 'Slow administration allows for better titration and reduces the risk of precipitous drops in respiratory rate or blood pressure.',
        feedback: {
          correct: 'Excellent! Slow administration is safer and allows better control.',
          incorrect: 'Give morphine slowly over 2-3 minutes to prevent respiratory depression.'
        }
      },
      {
        id: 4,
        action: 'Monitoring Priority',
        description: 'Most critical parameter to monitor after morphine:',
        options: [
          'Heart rate',
          'Respiratory rate and effort',
          'Temperature',
          'Blood glucose'
        ],
        correctOption: 1,
        rationale: 'Respiratory depression is the most serious morphine complication requiring immediate intervention.',
        criticalStep: true,
        clinicalExplanation: 'Morphine binds to μ-opioid receptors in the respiratory center, potentially causing life-threatening respiratory depression.',
        feedback: {
          correct: 'Critical monitoring! Respiratory depression is the most dangerous morphine effect.',
          incorrect: 'Monitor respiratory rate closely - morphine can cause life-threatening respiratory depression.'
        }
      },
      {
        id: 5,
        action: 'Repeat Dosing',
        description: 'If pain persists after initial dose, repeat morphine:',
        options: [
          'Immediately',
          'Every 5-15 minutes as needed',
          'Every 30 minutes',
          'Only once more'
        ],
        correctOption: 1,
        rationale: 'Can repeat every 5-15 minutes until pain controlled or side effects occur.',
        criticalStep: false,
        clinicalExplanation: 'Morphine has variable onset and duration. Careful titration every 5-15 minutes allows effective pain control while monitoring for complications.',
        feedback: {
          correct: 'Correct timing for morphine redosing while maintaining safety.',
          incorrect: 'Morphine can be repeated every 5-15 minutes until adequate pain control.'
        }
      },
      {
        id: 6,
        action: 'Reversal Agent',
        description: 'If respiratory depression occurs, administer:',
        options: [
          'Flumazenil',
          'Naloxone',
          'Atropine',
          'Epinephrine'
        ],
        correctOption: 1,
        rationale: 'Naloxone is the specific opioid antagonist that reverses morphine effects.',
        criticalStep: false,
        clinicalExplanation: 'Naloxone competitively blocks opioid receptors, rapidly reversing morphine-induced respiratory depression. Dose is 0.4-2mg IV.',
        feedback: {
          correct: 'Perfect! Naloxone is the specific antidote for opioid overdose.',
          incorrect: 'Naloxone reverses morphine effects - keep readily available during administration.'
        }
      }
    ],
    criticalActions: [
      'Assess baseline respiratory status',
      'Use appropriate initial dose',
      'Administer slowly',
      'Monitor respiratory rate continuously'
    ],
    commonMistakes: [
      'Not assessing respiratory status first',
      'Giving too much too fast',
      'Inadequate respiratory monitoring',
      'Not having naloxone available'
    ],
    learningObjectives: [
      'Understand morphine pharmacology',
      'Recognize appropriate indications',
      'Master safe administration technique',
      'Identify and manage complications'
    ],
    timeLimit: 15,
    difficulty: 'Advanced'
  },
  {
    id: 'ipratropium_copd',
    title: 'Ipratropium for COPD Exacerbation',
    medication: 'Ipratropium Bromide (Atrovent)',
    certificationLevel: 'AEMT',
    scenario: 'You respond to a 68-year-old male with severe shortness of breath. He has a history of COPD and appears to be in respiratory distress with pursed-lip breathing.',
    patientPresentation: {
      vitals: {
        hr: 115,
        bp: '155/90',
        rr: 28,
        spo2: 88,
        temp: 99.1
      },
      symptoms: ['Severe dyspnea', 'Pursed-lip breathing', 'Tripod positioning', 'Productive cough', 'Accessory muscle use'],
      allergies: ['Shellfish'],
      currentMedications: ['Albuterol inhaler', 'Prednisone', 'Theophylline']
    },
    clinicalReferences: {
      indication: 'Ipratropium is indicated for COPD exacerbations as an anticholinergic bronchodilator',
      mechanism: 'Blocks muscarinic receptors in airways, reducing bronchoconstriction and mucus secretion',
      contraindications: ['Hypersensitivity to atropine or derivatives', 'Narrow-angle glaucoma', 'Prostatic hypertrophy'],
      guidelines: 'GOLD Guidelines recommend ipratropium with albuterol for severe COPD exacerbations'
    },
    steps: [
      {
        id: 1,
        action: 'COPD Assessment',
        description: 'Key findings suggesting COPD exacerbation include:',
        options: [
          'Fever only',
          'Increased dyspnea, cough, and sputum production',
          'Chest pain',
          'Palpitations'
        ],
        correctOption: 1,
        rationale: 'COPD exacerbation triad: worsening dyspnea, increased cough, and changed sputum.',
        criticalStep: true,
        clinicalExplanation: 'COPD exacerbations are defined by acute worsening of respiratory symptoms beyond normal daily variation, requiring additional treatment.',
        feedback: {
          correct: 'Excellent recognition of COPD exacerbation criteria.',
          incorrect: 'COPD exacerbation involves worsening dyspnea, cough, and sputum changes.'
        }
      },
      {
        id: 2,
        action: 'Combination Therapy',
        description: 'Ipratropium should be given with:',
        options: [
          'Oxygen only',
          'Albuterol for synergistic effect',
          'Epinephrine',
          'Morphine'
        ],
        correctOption: 1,
        rationale: 'Combination of ipratropium and albuterol provides superior bronchodilation.',
        criticalStep: true,
        clinicalExplanation: 'Ipratropium (anticholinergic) and albuterol (β2-agonist) work through different mechanisms, providing additive bronchodilation effects.',
        feedback: {
          correct: 'Perfect! Combination therapy maximizes bronchodilation.',
          incorrect: 'Ipratropium plus albuterol provides superior bronchodilation than either alone.'
        }
      },
      {
        id: 3,
        action: 'Ipratropium Dose',
        description: 'Standard ipratropium dose for COPD exacerbation:',
        options: [
          '0.25 mg nebulized',
          '0.5 mg nebulized',
          '1.0 mg nebulized',
          '2.0 mg nebulized'
        ],
        correctOption: 1,
        rationale: '0.5 mg nebulized is the standard adult dose for COPD exacerbation.',
        criticalStep: true,
        clinicalExplanation: '0.5 mg provides optimal anticholinergic effect while minimizing systemic side effects like dry mouth and urinary retention.',
        feedback: {
          correct: 'Correct! 0.5 mg is the standard effective dose.',
          incorrect: 'Standard ipratropium dose is 0.5 mg nebulized for COPD exacerbation.'
        }
      },
      {
        id: 4,
        action: 'Administration Method',
        description: 'Best delivery method for ipratropium in severe COPD:',
        options: [
          'MDI with spacer',
          'Nebulizer with mask',
          'Dry powder inhaler',
          'IV administration'
        ],
        correctOption: 1,
        rationale: 'Nebulizer provides continuous delivery and requires minimal patient coordination.',
        criticalStep: true,
        clinicalExplanation: 'During severe exacerbations, patients may have difficulty coordinating MDI use. Nebulizers provide consistent drug delivery regardless of breathing pattern.',
        feedback: {
          correct: 'Excellent choice! Nebulizer ensures effective delivery during distress.',
          incorrect: 'Nebulizer is preferred for severe COPD - consistent delivery despite poor coordination.'
        }
      },
      {
        id: 5,
        action: 'Onset of Action',
        description: 'Ipratropium typically begins working within:',
        options: [
          '1-2 minutes',
          '15-30 minutes',
          '1 hour',
          '2-3 hours'
        ],
        correctOption: 1,
        rationale: 'Ipratropium has slower onset than albuterol, typically 15-30 minutes.',
        criticalStep: false,
        clinicalExplanation: 'Anticholinergics have slower onset than β2-agonists due to different receptor mechanisms. Peak effect occurs at 1-2 hours.',
        feedback: {
          correct: 'Right! Ipratropium has slower onset than beta-agonists.',
          incorrect: 'Ipratropium takes 15-30 minutes to start working - slower than albuterol.'
        }
      },
      {
        id: 6,
        action: 'Side Effect Monitoring',
        description: 'Monitor for ipratropium side effects including:',
        options: [
          'Tachycardia',
          'Dry mouth and urinary retention',
          'Hypotension',
          'Sedation'
        ],
        correctOption: 1,
        rationale: 'Anticholinergic effects include dry mouth, urinary retention, and constipation.',
        criticalStep: false,
        clinicalExplanation: 'Muscarinic receptor blockade causes classic anticholinergic effects: dry mouth, urinary retention, constipation, and potential confusion in elderly.',
        feedback: {
          correct: 'Correct! Monitor for classic anticholinergic side effects.',
          incorrect: 'Watch for anticholinergic effects: dry mouth, urinary retention, confusion.'
        }
      }
    ],
    criticalActions: [
      'Recognize COPD exacerbation',
      'Combine with albuterol therapy',
      'Use appropriate dose and delivery method',
      'Monitor for anticholinergic effects'
    ],
    commonMistakes: [
      'Using ipratropium alone without albuterol',
      'Wrong dose calculation',
      'Using MDI during severe distress',
      'Not monitoring for side effects'
    ],
    learningObjectives: [
      'Identify COPD exacerbation signs',
      'Understand anticholinergic mechanism',
      'Master combination therapy approach',
      'Recognize onset and side effects'
    ],
    timeLimit: 18,
    difficulty: 'Intermediate'
  },
  {
    id: 'lidocaine_vt',
    title: 'Lidocaine for Ventricular Tachycardia',
    medication: 'Lidocaine (Xylocaine)',
    certificationLevel: 'Paramedic',
    scenario: 'You respond to a 55-year-old male with sustained wide-complex tachycardia at 200 bpm. Patient is conscious but weak. No pulse with compressions.',
    patientPresentation: {
      vitals: {
        hr: 200,
        bp: '80/50',
        rr: 26,
        spo2: 90,
        temp: 98.5
      },
      symptoms: ['Weakness', 'Dizziness', 'Chest discomfort', 'Diaphoresis'],
      allergies: ['NKDA'],
      currentMedications: ['Lisinopril', 'Carvedilol']
    },
    clinicalReferences: {
      indication: 'Lidocaine is second-line antiarrhythmic for VT/VF when amiodarone unavailable',
      mechanism: 'Class IB antiarrhythmic that blocks sodium channels, stabilizing cardiac membranes',
      contraindications: ['Complete heart block', 'Severe bradycardia', 'Known lidocaine allergy'],
      guidelines: 'AHA 2020 Guidelines list lidocaine as alternative to amiodarone in VT/VF arrest'
    },
    steps: [
      {
        id: 1,
        action: 'Rhythm Analysis',
        description: 'Wide-complex tachycardia at 200 bpm suggests:',
        options: [
          'Supraventricular tachycardia',
          'Ventricular tachycardia',
          'Atrial flutter',
          'Normal sinus rhythm'
        ],
        correctOption: 1,
        rationale: 'Wide QRS >120ms with rate >150 bpm indicates ventricular tachycardia.',
        criticalStep: true,
        clinicalExplanation: 'VT originates below the AV node, causing abnormal ventricular depolarization and wide QRS complexes. Rate typically >150 bpm.',
        feedback: {
          correct: 'Excellent rhythm recognition! Classic VT presentation.',
          incorrect: 'Wide-complex tachycardia >150 bpm typically indicates ventricular tachycardia.'
        }
      },
      {
        id: 2,
        action: 'Stability Assessment',
        description: 'This patient is hemodynamically:',
        options: [
          'Stable - medical management',
          'Unstable - requires immediate cardioversion',
          'Stable - observation only',
          'Unstable - CPR indicated'
        ],
        correctOption: 1,
        rationale: 'Hypotension, weakness, and poor perfusion indicate unstable VT requiring cardioversion.',
        criticalStep: true,
        clinicalExplanation: 'Unstable VT presents with hypotension, altered mental status, chest pain, or signs of shock requiring immediate electrical cardioversion.',
        feedback: {
          correct: 'Critical assessment! Unstable VT requires immediate cardioversion.',
          incorrect: 'Hypotension and weakness indicate unstable VT - cardiovert immediately.'
        }
      },
      {
        id: 3,
        action: 'Lidocaine Indication',
        description: 'Lidocaine would be appropriate if:',
        options: [
          'As first-line treatment',
          'After failed cardioversion or if amiodarone unavailable',
          'Instead of cardioversion',
          'Only in cardiac arrest'
        ],
        correctOption: 1,
        rationale: 'Lidocaine is second-line after amiodarone or when amiodarone is unavailable.',
        criticalStep: true,
        clinicalExplanation: 'Amiodarone is preferred for VT due to superior efficacy. Lidocaine is alternative when amiodarone unavailable or contraindicated.',
        feedback: {
          correct: 'Correct! Lidocaine is second-line or alternative antiarrhythmic.',
          incorrect: 'Use lidocaine after failed cardioversion or when amiodarone unavailable.'
        }
      },
      {
        id: 4,
        action: 'Loading Dose',
        description: 'Lidocaine loading dose for VT is:',
        options: [
          '0.5-1 mg/kg IV',
          '1-1.5 mg/kg IV',
          '2-3 mg/kg IV',
          '5 mg/kg IV'
        ],
        correctOption: 1,
        rationale: '1-1.5 mg/kg IV bolus is standard loading dose for VT.',
        criticalStep: true,
        clinicalExplanation: 'Loading dose achieves therapeutic levels quickly. For 70kg patient, this equals 70-105mg IV bolus.',
        feedback: {
          correct: 'Perfect! Standard loading dose for therapeutic levels.',
          incorrect: 'Lidocaine loading dose is 1-1.5 mg/kg IV for ventricular arrhythmias.'
        }
      },
      {
        id: 5,
        action: 'Infusion Rate',
        description: 'After loading dose, lidocaine infusion rate is:',
        options: [
          '0.5-1 mg/min',
          '1-4 mg/min',
          '5-10 mg/min',
          '10-20 mg/min'
        ],
        correctOption: 1,
        rationale: '1-4 mg/min maintains therapeutic levels after loading dose.',
        criticalStep: false,
        clinicalExplanation: 'Maintenance infusion prevents recurrent arrhythmias. Start at 1-4 mg/min and titrate based on response and toxicity.',
        feedback: {
          correct: 'Correct maintenance infusion rate for sustained effect.',
          incorrect: 'Lidocaine infusion should be 1-4 mg/min after loading dose.'
        }
      },
      {
        id: 6,
        action: 'Toxicity Signs',
        description: 'Signs of lidocaine toxicity include:',
        options: [
          'Hypertension',
          'CNS effects: confusion, seizures',
          'Bradycardia only',
          'Respiratory depression'
        ],
        correctOption: 1,
        rationale: 'Lidocaine toxicity primarily affects CNS: confusion, seizures, coma.',
        criticalStep: false,
        clinicalExplanation: 'Lidocaine crosses blood-brain barrier causing dose-dependent CNS toxicity: perioral numbness, confusion, seizures, coma.',
        feedback: {
          correct: 'Important recognition of lidocaine toxicity signs.',
          incorrect: 'Watch for CNS toxicity: confusion, seizures, and neurological changes.'
        }
      }
    ],
    criticalActions: [
      'Recognize ventricular tachycardia',
      'Assess hemodynamic stability',
      'Use appropriate loading dose',
      'Monitor for toxicity'
    ],
    commonMistakes: [
      'Using lidocaine first-line instead of amiodarone',
      'Wrong loading dose calculation',
      'Not recognizing toxicity signs',
      'Delaying cardioversion in unstable VT'
    ],
    learningObjectives: [
      'Differentiate stable vs unstable VT',
      'Understand lidocaine pharmacology',
      'Know proper dosing protocols',
      'Recognize and manage toxicity'
    ],
    timeLimit: 20,
    difficulty: 'Advanced'
  },
  {
    id: 'methylprednisolone_asthma',
    title: 'Methylprednisolone for Severe Asthma',
    medication: 'Methylprednisolone (Solu-Medrol)',
    certificationLevel: 'Paramedic',
    scenario: 'You respond to a 22-year-old female with severe asthma exacerbation. She received multiple albuterol treatments with minimal improvement and appears exhausted.',
    patientPresentation: {
      vitals: {
        hr: 140,
        bp: '160/95',
        rr: 35,
        spo2: 86,
        temp: 98.8
      },
      symptoms: ['Severe dyspnea', 'Tripod positioning', 'Minimal air movement', 'Fatigue', 'Difficulty speaking'],
      allergies: ['Penicillin'],
      currentMedications: ['Albuterol inhaler', 'Singulair']
    },
    clinicalReferences: {
      indication: 'Methylprednisolone is indicated for severe asthma exacerbations to reduce airway inflammation',
      mechanism: 'Glucocorticoid that reduces inflammatory mediators and airway hyperresponsiveness',
      contraindications: ['Systemic fungal infections', 'Live virus vaccines', 'Known hypersensitivity'],
      guidelines: 'NAEPP Guidelines recommend systemic corticosteroids for severe asthma exacerbations'
    },
    steps: [
      {
        id: 1,
        action: 'Severity Assessment',
        description: 'This asthma exacerbation is classified as:',
        options: [
          'Mild - outpatient management',
          'Moderate - standard treatment',
          'Severe - requiring aggressive therapy',
          'Life-threatening - imminent arrest'
        ],
        correctOption: 2,
        rationale: 'Minimal air movement, fatigue, and poor response to bronchodilators indicates severe exacerbation.',
        criticalStep: true,
        clinicalExplanation: 'Severe asthma features include: accessory muscle use, tripod positioning, difficulty speaking, SpO2 <90%, poor response to initial treatment.',
        feedback: {
          correct: 'Excellent severity recognition requiring aggressive intervention.',
          incorrect: 'Minimal air movement and poor bronchodilator response indicates severe exacerbation.'
        }
      },
      {
        id: 2,
        action: 'Steroid Indication',
        description: 'Methylprednisolone is indicated because:',
        options: [
          'All asthma patients need steroids',
          'Severe exacerbation with poor bronchodilator response',
          'Patient requests medication',
          'Prevents future attacks only'
        ],
        correctOption: 1,
        rationale: 'Severe exacerbations require steroids to reduce inflammation and prevent deterioration.',
        criticalStep: true,
        clinicalExplanation: 'Steroids reduce airway inflammation, mucus production, and bronchial hyperresponsiveness. Essential in severe exacerbations to prevent respiratory failure.',
        feedback: {
          correct: 'Perfect indication for systemic corticosteroids.',
          incorrect: 'Severe asthma with poor bronchodilator response requires systemic steroids.'
        }
      },
      {
        id: 3,
        action: 'Dosage Calculation',
        description: 'Appropriate methylprednisolone dose for severe asthma:',
        options: [
          '20-40 mg IV',
          '60-80 mg IV',
          '125 mg IV',
          '250 mg IV'
        ],
        correctOption: 2,
        rationale: '125 mg IV is standard dose for severe asthma exacerbation in adults.',
        criticalStep: true,
        clinicalExplanation: 'High-dose steroids (125mg) are needed to quickly suppress severe inflammatory response. Lower doses may be insufficient for severe cases.',
        feedback: {
          correct: 'Correct! 125 mg provides adequate anti-inflammatory effect.',
          incorrect: 'Standard dose for severe asthma is 125 mg methylprednisolone IV.'
        }
      },
      {
        id: 4,
        action: 'Onset of Action',
        description: 'Methylprednisolone clinical effects begin:',
        options: [
          'Within 5 minutes',
          '30-60 minutes',
          '4-6 hours',
          '24 hours'
        ],
        correctOption: 2,
        rationale: 'Steroids have delayed onset, typically 4-6 hours for clinical improvement.',
        criticalStep: false,
        clinicalExplanation: 'Steroids work by altering gene transcription, requiring time for protein synthesis changes. Clinical effects are delayed but sustained.',
        feedback: {
          correct: 'Right! Steroids have delayed but important anti-inflammatory effects.',
          incorrect: 'Steroid effects are delayed 4-6 hours - continue bronchodilator therapy.'
        }
      },
      {
        id: 5,
        action: 'Concurrent Therapy',
        description: 'With methylprednisolone, continue:',
        options: [
          'No other medications needed',
          'Aggressive bronchodilator therapy',
          'Antibiotics only',
          'Sedation for comfort'
        ],
        correctOption: 1,
        rationale: 'Continue aggressive bronchodilator therapy as steroids have delayed onset.',
        criticalStep: true,
        clinicalExplanation: 'Steroids complement but don\'t replace bronchodilators. Continue albuterol/ipratropium while waiting for steroid effects.',
        feedback: {
          correct: 'Essential! Continue bronchodilators while steroids take effect.',
          incorrect: 'Keep giving bronchodilators - steroids take hours to work.'
        }
      },
      {
        id: 6,
        action: 'Side Effect Awareness',
        description: 'Immediate methylprednisolone side effects may include:',
        options: [
          'Hypoglycemia',
          'Hyperglycemia and mood changes',
          'Respiratory depression',
          'Bradycardia'
        ],
        correctOption: 1,
        rationale: 'Acute steroid effects include hyperglycemia, mood changes, and hypertension.',
        criticalStep: false,
        clinicalExplanation: 'Steroids increase gluconeogenesis causing hyperglycemia, and can cause euphoria, agitation, or mood lability acutely.',
        feedback: {
          correct: 'Correct awareness of acute steroid effects.',
          incorrect: 'Monitor for hyperglycemia and mood changes with high-dose steroids.'
        }
      }
    ],
    criticalActions: [
      'Recognize severe asthma exacerbation',
      'Administer appropriate steroid dose',
      'Continue aggressive bronchodilator therapy',
      'Monitor for steroid side effects'
    ],
    commonMistakes: [
      'Using steroids for mild asthma',
      'Inadequate dosing for severe cases',
      'Stopping bronchodilators after steroid administration',
      'Expecting immediate steroid effects'
    ],
    learningObjectives: [
      'Assess asthma exacerbation severity',
      'Understand steroid mechanism and timing',
      'Know appropriate dosing protocols',
      'Integrate steroids with bronchodilator therapy'
    ],
    timeLimit: 16,
    difficulty: 'Advanced'
  },
  {
    id: 'lorazepam_seizure',
    title: 'Lorazepam for Status Epilepticus',
    medication: 'Lorazepam (Ativan)',
    certificationLevel: 'Paramedic',
    scenario: 'You respond to a 35-year-old male having continuous seizure activity for 8 minutes. Family reports no known seizure history.',
    patientPresentation: {
      vitals: {
        hr: 125,
        bp: '180/110',
        rr: 18,
        spo2: 88,
        temp: 101.2
      },
      symptoms: ['Continuous tonic-clonic seizure', 'Hyperthermia', 'Cyanosis', 'Profuse salivation'],
      allergies: ['Unknown'],
      currentMedications: ['Unknown']
    },
    clinicalReferences: {
      indication: 'Lorazepam is first-line treatment for status epilepticus (seizures >5 minutes)',
      mechanism: 'GABA-A receptor agonist that enhances inhibitory neurotransmission in the brain',
      contraindications: ['Severe respiratory depression', 'Acute narrow-angle glaucoma', 'Known benzodiazepine allergy'],
      guidelines: 'AES Guidelines define status epilepticus as seizures >5 minutes requiring immediate intervention'
    },
    steps: [
      {
        id: 1,
        action: 'Status Epilepticus Recognition',
        description: 'Seizure activity >5 minutes indicates:',
        options: [
          'Normal seizure - observe only',
          'Status epilepticus requiring immediate treatment',
          'Pseudoseizure',
          'Alcohol withdrawal'
        ],
        correctOption: 1,
        rationale: 'Status epilepticus is defined as seizures >5 minutes or recurrent seizures without recovery.',
        criticalStep: true,
        clinicalExplanation: 'Prolonged seizures cause neuronal damage, hyperthermia, and respiratory compromise. Early intervention prevents permanent brain injury.',
        feedback: {
          correct: 'Critical recognition! Status epilepticus is a neurological emergency.',
          incorrect: 'Seizures >5 minutes constitute status epilepticus requiring immediate treatment.'
        }
      },
      {
        id: 2,
        action: 'Airway Management',
        description: 'Priority during active seizure:',
        options: [
          'Force oral airway insertion',
          'Protect airway, suction as needed',
          'Immediate intubation',
          'Restrain patient'
        ],
        correctOption: 1,
        rationale: 'Protect airway without forcing devices. Suction secretions and position appropriately.',
        criticalStep: true,
        clinicalExplanation: 'Forcing objects into seizing patient\'s mouth can cause dental trauma or aspiration. Focus on positioning and suctioning.',
        feedback: {
          correct: 'Excellent airway management during seizures.',
          incorrect: 'Protect airway naturally - never force objects into seizing patient\'s mouth.'
        }
      },
      {
        id: 3,
        action: 'Lorazepam Dosage',
        description: 'Initial lorazepam dose for status epilepticus:',
        options: [
          '1 mg IV',
          '2-4 mg IV',
          '5-10 mg IV',
          '0.5 mg IV'
        ],
        correctOption: 1,
        rationale: '2-4 mg IV (0.1 mg/kg) is standard initial dose for status epilepticus.',
        criticalStep: true,
        clinicalExplanation: 'Dose of 0.1 mg/kg (2-4mg for average adult) provides therapeutic levels while minimizing respiratory depression risk.',
        feedback: {
          correct: 'Perfect! Appropriate initial dose for seizure termination.',
          incorrect: 'Initial lorazepam dose is 2-4 mg IV for status epilepticus.'
        }
      },
      {
        id: 4,
        action: 'Administration Rate',
        description: 'Lorazepam should be given:',
        options: [
          'Rapid IV push',
          'Slowly over 2-3 minutes',
          'As continuous infusion',
          'Intramuscularly only'
        ],
        correctOption: 1,
        rationale: 'Slow IV administration reduces respiratory depression risk while maintaining efficacy.',
        criticalStep: true,
        clinicalExplanation: 'Slow administration prevents precipitous respiratory depression while allowing effective brain penetration for seizure control.',
        feedback: {
          correct: 'Correct! Slow administration balances efficacy with safety.',
          incorrect: 'Give lorazepam slowly to prevent respiratory depression complications.'
        }
      },
      {
        id: 5,
        action: 'Repeat Dosing',
        description: 'If seizure continues after first dose:',
        options: [
          'Wait 30 minutes',
          'Repeat 2-4 mg in 10-15 minutes',
          'Give different medication',
          'No additional doses'
        ],
        correctOption: 1,
        rationale: 'Can repeat lorazepam dose once if seizures persist after 10-15 minutes.',
        criticalStep: false,
        clinicalExplanation: 'Maximum total lorazepam dose is 8mg. If still seizing after second dose, consider alternative agents like phenytoin.',
        feedback: {
          correct: 'Appropriate redosing protocol for refractory seizures.',
          incorrect: 'Can repeat lorazepam once after 10-15 minutes if seizures continue.'
        }
      },
      {
        id: 6,
        action: 'Side Effect Monitoring',
        description: 'Primary concern with lorazepam administration:',
        options: [
          'Hypertension',
          'Respiratory depression',
          'Tachycardia',
          'Hyperglycemia'
        ],
        correctOption: 1,
        rationale: 'Respiratory depression is the most serious lorazepam complication, especially in combination with other depressants.',
        criticalStep: false,
        clinicalExplanation: 'Benzodiazepines depress respiratory center. Risk increases with higher doses, rapid administration, or concurrent opioids.',
        feedback: {
          correct: 'Critical monitoring! Respiratory depression is the main lorazepam risk.',
          incorrect: 'Monitor breathing closely - respiratory depression is primary lorazepam complication.'
        }
      }
    ],
    criticalActions: [
      'Recognize status epilepticus',
      'Protect airway during seizure',
      'Administer appropriate lorazepam dose',
      'Monitor respiratory status'
    ],
    commonMistakes: [
      'Waiting too long to treat prolonged seizures',
      'Forcing airway devices during active seizure',
      'Wrong lorazepam dosing',
      'Not monitoring respiratory status'
    ],
    learningObjectives: [
      'Define and recognize status epilepticus',
      'Understand lorazepam pharmacology',
      'Master safe seizure management',
      'Monitor for complications'
    ],
    timeLimit: 10,
    difficulty: 'Advanced'
  },
  {
    id: 'calcium_chloride_hyperkalemia',
    title: 'Calcium Chloride for Hyperkalemia',
    medication: 'Calcium Chloride 10%',
    certificationLevel: 'Paramedic',
    scenario: 'You respond to a 55-year-old dialysis patient with weakness and peaked T-waves on ECG. Potassium level reported as 7.2 mEq/L.',
    patientPresentation: {
      vitals: {
        hr: 45,
        bp: '90/60',
        rr: 16,
        spo2: 96,
        temp: 98.1
      },
      symptoms: ['Muscle weakness', 'Fatigue', 'Nausea', 'Palpitations'],
      allergies: ['NKDA'],
      currentMedications: ['Lisinopril', 'Kayexalate', 'Phosphorus binders']
    },
    clinicalReferences: {
      indication: 'Calcium chloride stabilizes cardiac membranes in severe hyperkalemia with ECG changes',
      mechanism: 'Antagonizes potassium effects on cardiac conduction without lowering serum potassium',
      contraindications: ['Hypercalcemia', 'Digitalis toxicity', 'Ventricular fibrillation'],
      guidelines: 'AHA Guidelines recommend calcium for hyperkalemia with ECG changes or K+ >6.5 mEq/L'
    },
    steps: [
      {
        id: 1,
        action: 'Hyperkalemia Recognition',
        description: 'ECG findings of hyperkalemia include:',
        options: [
          'ST elevation',
          'Peaked T-waves and wide QRS',
          'U waves',
          'Prolonged QT interval'
        ],
        correctOption: 1,
        rationale: 'Hyperkalemia causes peaked T-waves, wide QRS, and eventually sine wave pattern.',
        criticalStep: true,
        clinicalExplanation: 'Progressive hyperkalemia causes: peaked T-waves → wide QRS → loss of P-waves → sine wave → asystole',
        feedback: {
          correct: 'Excellent ECG interpretation! Classic hyperkalemia changes.',
          incorrect: 'Hyperkalemia causes peaked T-waves and progressive conduction blocks.'
        }
      },
      {
        id: 2,
        action: 'Treatment Priority',
        description: 'Calcium chloride works by:',
        options: [
          'Lowering serum potassium',
          'Stabilizing cardiac membranes',
          'Increasing urine output',
          'Blocking potassium absorption'
        ],
        correctOption: 1,
        rationale: 'Calcium antagonizes potassium effects on cardiac conduction without changing K+ levels.',
        criticalStep: true,
        clinicalExplanation: 'Calcium increases threshold potential, making cardiac cells less excitable despite elevated potassium levels.',
        feedback: {
          correct: 'Perfect understanding of calcium\'s protective mechanism.',
          incorrect: 'Calcium protects the heart from potassium effects without lowering K+ levels.'
        }
      },
      {
        id: 3,
        action: 'Calcium Chloride Dose',
        description: 'Standard calcium chloride dose for hyperkalemia:',
        options: [
          '500 mg (5 mL of 10%)',
          '1000 mg (10 mL of 10%)',
          '1500 mg (15 mL of 10%)',
          '2000 mg (20 mL of 10%)'
        ],
        correctOption: 1,
        rationale: '1000 mg (10 mL of 10% solution) is standard dose for severe hyperkalemia.',
        criticalStep: true,
        clinicalExplanation: '10 mL of 10% calcium chloride provides 1000mg elemental calcium, adequate for cardiac membrane stabilization.',
        feedback: {
          correct: 'Correct! Standard dose for cardiac protection.',
          incorrect: 'Give 1000 mg (10 mL of 10%) calcium chloride for hyperkalemia.'
        }
      },
      {
        id: 4,
        action: 'Administration Route',
        description: 'Calcium chloride must be given:',
        options: [
          'Intramuscularly',
          'Via central line or large peripheral IV',
          'Orally',
          'Subcutaneously'
        ],
        correctOption: 1,
        rationale: 'Calcium chloride is highly irritating and can cause tissue necrosis if extravasated.',
        criticalStep: true,
        clinicalExplanation: 'Calcium chloride is hyperosmolar and caustic. Extravasation causes severe tissue necrosis requiring surgical debridement.',
        feedback: {
          correct: 'Critical safety point! Calcium chloride requires secure IV access.',
          incorrect: 'Use large IV or central line - calcium chloride causes tissue necrosis if extravasated.'
        }
      },
      {
        id: 5,
        action: 'Administration Rate',
        description: 'Calcium chloride should be given:',
        options: [
          'Rapid IV push',
          'Slowly over 3-5 minutes',
          'As continuous infusion',
          'Mixed with other medications'
        ],
        correctOption: 1,
        rationale: 'Slow administration prevents arrhythmias and allows monitoring of response.',
        criticalStep: true,
        clinicalExplanation: 'Rapid calcium administration can cause bradycardia, hypotension, or cardiac arrest, especially in digitalized patients.',
        feedback: {
          correct: 'Excellent! Slow administration prevents cardiac complications.',
          incorrect: 'Give calcium slowly over 3-5 minutes to prevent arrhythmias.'
        }
      },
      {
        id: 6,
        action: 'Duration of Effect',
        description: 'Calcium chloride cardiac protection lasts:',
        options: [
          '10-15 minutes',
          '30-60 minutes',
          '2-4 hours',
          '12-24 hours'
        ],
        correctOption: 1,
        rationale: 'Calcium effects are temporary (30-60 minutes), requiring additional potassium-lowering treatments.',
        criticalStep: false,
        clinicalExplanation: 'Calcium provides temporary cardiac protection. Additional treatments (insulin/glucose, albuterol) needed to actually lower potassium.',
        feedback: {
          correct: 'Important! Calcium is temporary - need other treatments too.',
          incorrect: 'Calcium effects last 30-60 minutes - temporary cardiac protection only.'
        }
      }
    ],
    criticalActions: [
      'Recognize hyperkalemia ECG changes',
      'Ensure secure IV access',
      'Give appropriate calcium dose slowly',
      'Plan additional potassium-lowering treatments'
    ],
    commonMistakes: [
      'Using small or questionable IV',
      'Giving calcium too rapidly',
      'Not following with other treatments',
      'Missing ECG changes'
    ],
    learningObjectives: [
      'Interpret hyperkalemia ECG changes',
      'Understand calcium\'s protective mechanism',
      'Master safe calcium administration',
      'Plan comprehensive hyperkalemia treatment'
    ],
    timeLimit: 12,
    difficulty: 'Advanced'
  },
  {
    id: 'thiamine_altered_mental_status',
    title: 'Thiamine for Altered Mental Status',
    medication: 'Thiamine (Vitamin B1)',
    certificationLevel: 'Paramedic',
    scenario: 'You respond to a 48-year-old homeless male found confused and disoriented. Strong alcohol odor present, blood glucose 85 mg/dL.',
    patientPresentation: {
      vitals: {
        hr: 95,
        bp: '130/80',
        rr: 18,
        spo2: 95,
        temp: 97.5
      },
      symptoms: ['Confusion', 'Disorientation', 'Ataxia', 'Nystagmus', 'Poor hygiene'],
      allergies: ['Unknown'],
      currentMedications: ['Unknown']
    },
    clinicalReferences: {
      indication: 'Thiamine prevents Wernicke encephalopathy in malnourished patients receiving glucose',
      mechanism: 'Essential cofactor for glucose metabolism; deficiency causes neuronal damage',
      contraindications: ['Known thiamine hypersensitivity (rare)'],
      guidelines: 'Give thiamine before or with glucose in suspected alcoholics or malnourished patients'
    },
    steps: [
      {
        id: 1,
        action: 'Risk Assessment',
        description: 'This patient is at risk for:',
        options: [
          'Simple intoxication only',
          'Wernicke encephalopathy from thiamine deficiency',
          'Diabetic ketoacidosis',
          'Head injury only'
        ],
        correctOption: 1,
        rationale: 'Alcoholics and malnourished patients are at high risk for thiamine deficiency.',
        criticalStep: true,
        clinicalExplanation: 'Chronic alcohol use impairs thiamine absorption and depletes stores. Giving glucose without thiamine can precipitate Wernicke encephalopathy.',
        feedback: {
          correct: 'Critical recognition! Alcoholics need thiamine protection.',
          incorrect: 'Malnourished alcoholics are at high risk for thiamine deficiency complications.'
        }
      },
      {
        id: 2,
        action: 'Wernicke Triad',
        description: 'Classic Wernicke encephalopathy triad includes:',
        options: [
          'Fever, headache, photophobia',
          'Confusion, ataxia, ophthalmoplegia',
          'Chest pain, dyspnea, edema',
          'Nausea, vomiting, diarrhea'
        ],
        correctOption: 1,
        rationale: 'Wernicke triad: mental status changes, ataxia, and eye movement abnormalities.',
        criticalStep: true,
        clinicalExplanation: 'Only 10% of patients have complete triad. Any component in at-risk patient warrants thiamine administration.',
        feedback: {
          correct: 'Excellent knowledge of Wernicke encephalopathy presentation.',
          incorrect: 'Wernicke triad: confusion, ataxia, and eye movement problems.'
        }
      },
      {
        id: 3,
        action: 'Thiamine Dosage',
        description: 'Appropriate thiamine dose for Wernicke prevention:',
        options: [
          '50 mg IV',
          '100 mg IV',
          '200 mg IV',
          '500 mg IV'
        ],
        correctOption: 1,
        rationale: '100 mg IV is standard prophylactic dose for at-risk patients.',
        criticalStep: true,
        clinicalExplanation: '100 mg IV replenishes thiamine stores and prevents Wernicke encephalopathy when glucose is administered.',
        feedback: {
          correct: 'Perfect! Standard prophylactic dose for thiamine deficiency.',
          incorrect: 'Give 100 mg thiamine IV to prevent Wernicke encephalopathy.'
        }
      },
      {
        id: 4,
        action: 'Timing with Glucose',
        description: 'Thiamine should be given:',
        options: [
          'After glucose administration',
          'Before or simultaneously with glucose',
          'Only if glucose is normal',
          '24 hours after glucose'
        ],
        correctOption: 1,
        rationale: 'Thiamine must be given before glucose to prevent precipitating Wernicke encephalopathy.',
        criticalStep: true,
        clinicalExplanation: 'Glucose metabolism requires thiamine as cofactor. Giving glucose without thiamine can exhaust remaining stores and cause Wernicke.',
        feedback: {
          correct: 'Critical timing! Thiamine before glucose prevents complications.',
          incorrect: 'Always give thiamine before glucose in at-risk patients.'
        }
      },
      {
        id: 5,
        action: 'Administration Safety',
        description: 'Thiamine administration is:',
        options: [
          'High risk with many contraindications',
          'Very safe with minimal side effects',
          'Requires cardiac monitoring',
          'Contraindicated in kidney disease'
        ],
        correctOption: 1,
        rationale: 'Thiamine is extremely safe water-soluble vitamin with virtually no contraindications.',
        criticalStep: false,
        clinicalExplanation: 'Thiamine is water-soluble with no significant toxicity. Rare anaphylactic reactions reported but extremely uncommon.',
        feedback: {
          correct: 'Right! Thiamine is very safe with minimal risks.',
          incorrect: 'Thiamine is extremely safe - give liberally to at-risk patients.'
        }
      },
      {
        id: 6,
        action: 'Patient Education',
        description: 'Thiamine deficiency is primarily caused by:',
        options: [
          'Excessive exercise',
          'Poor nutrition and alcohol abuse',
          'Too much vitamin intake',
          'Genetic factors only'
        ],
        correctOption: 1,
        rationale: 'Chronic malnutrition and alcohol abuse are primary causes of thiamine deficiency.',
        criticalStep: false,
        clinicalExplanation: 'Alcohol impairs thiamine absorption, storage, and utilization. Poor nutrition provides inadequate intake.',
        feedback: {
          correct: 'Correct understanding of thiamine deficiency causes.',
          incorrect: 'Alcohol abuse and malnutrition are main causes of thiamine deficiency.'
        }
      }
    ],
    criticalActions: [
      'Recognize at-risk patient population',
      'Identify Wernicke encephalopathy signs',
      'Give thiamine before glucose',
      'Use appropriate prophylactic dose'
    ],
    commonMistakes: [
      'Giving glucose without thiamine',
      'Not recognizing at-risk patients',
      'Inadequate thiamine dosing',
      'Waiting for complete Wernicke triad'
    ],
    learningObjectives: [
      'Identify thiamine deficiency risk factors',
      'Recognize Wernicke encephalopathy',
      'Understand glucose-thiamine relationship',
      'Prevent iatrogenic complications'
    ],
    timeLimit: 8,
    difficulty: 'Intermediate'
  },
  {
    id: 'magnesium_torsades',
    title: 'Magnesium for Torsades de Pointes',
    medication: 'Magnesium Sulfate',
    certificationLevel: 'Paramedic',
    scenario: 'You respond to a 42-year-old female with recurrent episodes of polymorphic ventricular tachycardia. ECG shows prolonged QT interval.',
    patientPresentation: {
      vitals: {
        hr: 180,
        bp: '70/40',
        rr: 24,
        spo2: 88,
        temp: 98.3
      },
      symptoms: ['Syncope', 'Dizziness', 'Palpitations', 'Weakness'],
      allergies: ['NKDA'],
      currentMedications: ['Quinidine', 'Furosemide', 'Potassium supplements']
    },
    clinicalReferences: {
      indication: 'Magnesium is first-line treatment for Torsades de Pointes regardless of serum magnesium level',
      mechanism: 'Stabilizes cardiac membranes and shortens action potential duration',
      contraindications: ['Severe renal failure', 'Heart block', 'Severe hypotension'],
      guidelines: 'AHA Guidelines recommend magnesium as first-line therapy for Torsades de Pointes'
    },
    steps: [
      {
        id: 1,
        action: 'Rhythm Recognition',
        description: 'Torsades de Pointes is characterized by:',
        options: [
          'Regular wide complex tachycardia',
          'Polymorphic VT with twisting QRS morphology',
          'Narrow complex tachycardia',
          'Irregular atrial fibrillation'
        ],
        correctOption: 1,
        rationale: 'Torsades shows characteristic "twisting of points" with changing QRS morphology.',
        criticalStep: true,
        clinicalExplanation: 'Torsades de Pointes is polymorphic VT associated with prolonged QT interval, showing characteristic twisting pattern around baseline.',
        feedback: {
          correct: 'Excellent rhythm recognition! Classic Torsades pattern.',
          incorrect: 'Torsades shows polymorphic VT with characteristic twisting QRS morphology.'
        }
      },
      {
        id: 2,
        action: 'QT Assessment',
        description: 'Torsades is associated with:',
        options: [
          'Short QT interval',
          'Prolonged QT interval',
          'Normal QT interval',
          'Absent QT interval'
        ],
        correctOption: 1,
        rationale: 'Prolonged QT interval predisposes to Torsades de Pointes.',
        criticalStep: true,
        clinicalExplanation: 'QT prolongation (>440ms men, >460ms women) creates substrate for early afterdepolarizations triggering Torsades.',
        feedback: {
          correct: 'Critical association! Prolonged QT enables Torsades.',
          incorrect: 'Torsades occurs in setting of prolonged QT interval.'
        }
      },
      {
        id: 3,
        action: 'Magnesium Indication',
        description: 'Magnesium is given for Torsades because it:',
        options: [
          'Cardioverts the rhythm',
          'Suppresses triggering arrhythmias',
          'Increases heart rate',
          'Lowers blood pressure'
        ],
        correctOption: 1,
        rationale: 'Magnesium suppresses early afterdepolarizations that trigger Torsades.',
        criticalStep: true,
        clinicalExplanation: 'Magnesium blocks calcium channels and stabilizes membranes, preventing the triggered activity that initiates Torsades.',
        feedback: {
          correct: 'Perfect understanding of magnesium\'s antiarrhythmic mechanism.',
          incorrect: 'Magnesium prevents the triggers that cause Torsades episodes.'
        }
      },
      {
        id: 4,
        action: 'Magnesium Dosage',
        description: 'Initial magnesium dose for Torsades:',
        options: [
          '1-2 grams IV',
          '3-4 grams IV',
          '5-6 grams IV',
          '10 grams IV'
        ],
        correctOption: 0,
        rationale: '1-2 grams IV is standard initial dose for Torsades de Pointes.',
        criticalStep: true,
        clinicalExplanation: '1-2 grams magnesium sulfate provides therapeutic levels quickly while minimizing toxicity risk.',
        feedback: {
          correct: 'Correct! Standard loading dose for Torsades suppression.',
          incorrect: 'Give 1-2 grams magnesium IV for Torsades de Pointes.'
        }
      },
      {
        id: 5,
        action: 'Administration Rate',
        description: 'Magnesium for Torsades should be given:',
        options: [
          'Rapid IV push',
          'Over 5-10 minutes',
          'Over 30 minutes',
          'As continuous infusion only'
        ],
        correctOption: 1,
        rationale: 'Give over 5-10 minutes for emergent Torsades, slower for non-emergent situations.',
        criticalStep: true,
        clinicalExplanation: 'Rapid administration (5-10 min) is acceptable for life-threatening Torsades. Slower rates risk recurrent episodes.',
        feedback: {
          correct: 'Appropriate rate for emergent Torsades treatment.',
          incorrect: 'Give magnesium over 5-10 minutes for active Torsades.'
        }
      },
      {
        id: 6,
        action: 'Follow-up Treatment',
        description: 'After magnesium, additional therapy may include:',
        options: [
          'Cardioversion',
          'Overdrive pacing to shorten QT',
          'More antiarrhythmic drugs',
          'Immediate transport only'
        ],
        correctOption: 1,
        rationale: 'Overdrive pacing shortens QT interval and prevents Torsades recurrence.',
        criticalStep: false,
        clinicalExplanation: 'Temporary pacing at 90-110 bpm shortens QT interval and suppresses Torsades. Magnesium may need repeat dosing.',
        feedback: {
          correct: 'Excellent knowledge of advanced Torsades management.',
          incorrect: 'Overdrive pacing helps prevent Torsades recurrence by shortening QT.'
        }
      }
    ],
    criticalActions: [
      'Recognize Torsades de Pointes pattern',
      'Identify prolonged QT interval',
      'Administer appropriate magnesium dose',
      'Consider overdrive pacing'
    ],
    commonMistakes: [
      'Misdiagnosing as regular VT',
      'Using conventional antiarrhythmics',
      'Wrong magnesium dosing',
      'Not addressing underlying QT prolongation'
    ],
    learningObjectives: [
      'Recognize Torsades de Pointes',
      'Understand QT interval significance',
      'Master magnesium therapy',
      'Plan comprehensive management'
    ],
    timeLimit: 15,
    difficulty: 'Advanced'
  },
  {
    id: 'dopamine_shock',
    title: 'Dopamine for Cardiogenic Shock',
    medication: 'Dopamine',
    certificationLevel: 'Paramedic',
    scenario: 'You respond to a 68-year-old male with acute MI complicated by cardiogenic shock. BP 70/40, cool extremities, altered mental status.',
    patientPresentation: {
      vitals: {
        hr: 110,
        bp: '70/40',
        rr: 28,
        spo2: 90,
        temp: 97.8
      },
      symptoms: ['Severe weakness', 'Cool, clammy skin', 'Altered mental status', 'Decreased urine output'],
      allergies: ['NKDA'],
      currentMedications: ['Aspirin', 'Metoprolol', 'Lisinopril']
    },
    clinicalReferences: {
      indication: 'Dopamine provides inotropic and vasopressor support in cardiogenic shock',
      mechanism: 'Dose-dependent: low-dose (dopaminergic), mid-dose (β1), high-dose (α-adrenergic)',
      contraindications: ['Pheochromocytoma', 'Ventricular fibrillation', 'Concurrent MAOI use'],
      guidelines: 'AHA Guidelines recommend dopamine for hypotensive cardiogenic shock when fluid resuscitation inadequate'
    },
    steps: [
      {
        id: 1,
        action: 'Shock Recognition',
        description: 'This presentation indicates:',
        options: [
          'Hypovolemic shock',
          'Cardiogenic shock',
          'Septic shock',
          'Neurogenic shock'
        ],
        correctOption: 1,
        rationale: 'Post-MI hypotension with cool extremities and altered mental status indicates cardiogenic shock.',
        criticalStep: true,
        clinicalExplanation: 'Cardiogenic shock: adequate preload but inadequate cardiac output due to pump failure, causing hypotension and hypoperfusion.',
        feedback: {
          correct: 'Excellent shock classification! Post-MI pump failure.',
          incorrect: 'MI with hypotension and poor perfusion indicates cardiogenic shock.'
        }
      },
      {
        id: 2,
        action: 'Dopamine Mechanism',
        description: 'At moderate doses (5-10 mcg/kg/min), dopamine primarily:',
        options: [
          'Causes vasoconstriction',
          'Increases cardiac contractility (β1 effects)',
          'Dilates renal vessels only',
          'Blocks pain receptors'
        ],
        correctOption: 1,
        rationale: 'Mid-dose dopamine stimulates β1 receptors, increasing cardiac contractility and output.',
        criticalStep: true,
        clinicalExplanation: 'Dopamine has dose-dependent effects: 2-5 mcg/kg/min (dopaminergic), 5-10 mcg/kg/min (β1), >10 mcg/kg/min (α-adrenergic)',
        feedback: {
          correct: 'Perfect understanding of dopamine\'s dose-dependent effects.',
          incorrect: 'Mid-dose dopamine primarily increases heart contractility through β1 stimulation.'
        }
      },
      {
        id: 3,
        action: 'Starting Dose',
        description: 'Initial dopamine dose for cardiogenic shock:',
        options: [
          '2-5 mcg/kg/min',
          '5-10 mcg/kg/min',
          '15-20 mcg/kg/min',
          '25-30 mcg/kg/min'
        ],
        correctOption: 1,
        rationale: 'Start at 5-10 mcg/kg/min for inotropic support in cardiogenic shock.',
        criticalStep: true,
        clinicalExplanation: 'Starting dose provides β1 inotropic effects while avoiding excessive α-mediated vasoconstriction that worsens cardiac workload.',
        feedback: {
          correct: 'Correct starting dose for inotropic support.',
          incorrect: 'Start dopamine at 5-10 mcg/kg/min for cardiogenic shock.'
        }
      },
      {
        id: 4,
        action: 'Administration Route',
        description: 'Dopamine must be given via:',
        options: [
          'Peripheral IV',
          'Central line or large peripheral IV',
          'Intramuscular injection',
          'Oral route'
        ],
        correctOption: 1,
        rationale: 'Dopamine is a vesicant that can cause tissue necrosis if extravasated.',
        criticalStep: true,
        clinicalExplanation: 'Dopamine extravasation causes vasoconstriction and tissue necrosis. Use central line or largest possible peripheral IV.',
        feedback: {
          correct: 'Critical safety point! Dopamine requires secure vascular access.',
          incorrect: 'Use central line or large IV - dopamine causes tissue necrosis if extravasated.'
        }
      },
      {
        id: 5,
        action: 'Dose Titration',
        description: 'Dopamine dose should be titrated to:',
        options: [
          'Fixed dose regardless of response',
          'Systolic BP >90 mmHg and improved perfusion',
          'Heart rate >150 bpm',
          'Maximum dose immediately'
        ],
        correctOption: 1,
        rationale: 'Titrate to adequate blood pressure and signs of improved organ perfusion.',
        criticalStep: true,
        clinicalExplanation: 'Goal is systolic BP >90 mmHg with improved mental status, urine output, and skin perfusion while avoiding excessive tachycardia.',
        feedback: {
          correct: 'Perfect titration goals for dopamine therapy.',
          incorrect: 'Titrate dopamine to BP >90 mmHg and improved perfusion signs.'
        }
      },
      {
        id: 6,
        action: 'Side Effects',
        description: 'Major dopamine side effects include:',
        options: [
          'Bradycardia and hypotension',
          'Tachycardia and arrhythmias',
          'Respiratory depression',
          'Renal failure'
        ],
        correctOption: 1,
        rationale: 'Dopamine can cause significant tachycardia and ventricular arrhythmias.',
        criticalStep: false,
        clinicalExplanation: 'β1 stimulation increases heart rate and contractility. High doses can precipitate ventricular arrhythmias, especially in ischemic hearts.',
        feedback: {
          correct: 'Important monitoring! Watch for cardiac side effects.',
          incorrect: 'Monitor for tachycardia and arrhythmias with dopamine infusion.'
        }
      }
    ],
    criticalActions: [
      'Recognize cardiogenic shock',
      'Use appropriate starting dose',
      'Ensure secure vascular access',
      'Titrate to hemodynamic goals'
    ],
    commonMistakes: [
      'Starting with too high dose',
      'Using inadequate IV access',
      'Not titrating to clinical response',
      'Missing arrhythmic complications'
    ],
    learningObjectives: [
      'Identify cardiogenic shock',
      'Understand dopamine pharmacology',
      'Master dose-dependent effects',
      'Monitor for complications'
    ],
    timeLimit: 18,
    difficulty: 'Advanced'
  },
  {
    id: 'vasopressin_cardiac_arrest',
    title: 'Vasopressin in Cardiac Arrest',
    medication: 'Vasopressin (Antidiuretic Hormone)',
    certificationLevel: 'Paramedic',
    scenario: 'You respond to a 45-year-old male in VF cardiac arrest. After 2 rounds of CPR and defibrillation with epinephrine, the rhythm remains VF.',
    patientPresentation: {
      vitals: { hr: 0, bp: '0/0', rr: 0, spo2: 0, temp: 98.2 },
      symptoms: ['Cardiac arrest', 'Ventricular fibrillation', 'Unresponsive'],
      allergies: ['Unknown'], currentMedications: ['Unknown']
    },
    clinicalReferences: {
      indication: 'Vasopressin is alternative to epinephrine in cardiac arrest, particularly effective in prolonged arrest',
      mechanism: 'V1 receptor agonist causing intense vasoconstriction and increased coronary perfusion pressure',
      contraindications: ['Responsive patients', 'Chronic nephritis'],
      guidelines: 'AHA 2020 allows vasopressin 40 units IV as alternative to epinephrine in cardiac arrest'
    },
    steps: [
      {
        id: 1, action: 'Arrest Duration Assessment', description: 'Vasopressin may be more effective in:',
        options: ['Early arrest (<5 minutes)', 'Prolonged arrest (>10 minutes)', 'Any arrest duration', 'Never in VF'],
        correctOption: 1, rationale: 'Vasopressin may be superior to epinephrine in prolonged cardiac arrest.',
        criticalStep: true, clinicalExplanation: 'As arrest duration increases, endogenous catecholamine stores deplete. Vasopressin effectiveness doesn\'t diminish with acidosis like epinephrine.',
        feedback: { correct: 'Correct! Vasopressin maintains effectiveness in prolonged arrest.', incorrect: 'Vasopressin may be more effective than epinephrine in prolonged cardiac arrest.' }
      },
      {
        id: 2, action: 'Vasopressin vs Epinephrine', description: 'Vasopressin advantage over epinephrine:',
        options: ['Works faster', 'Maintains effectiveness despite acidosis', 'Lower cost', 'Easier to give'],
        correctOption: 1, rationale: 'Unlike epinephrine, vasopressin effectiveness is not reduced by acidosis or hypoxia.',
        criticalStep: true, clinicalExplanation: 'Epinephrine\'s α and β effects are blunted by acidosis. Vasopressin V1 receptors maintain responsiveness in adverse conditions.',
        feedback: { correct: 'Excellent understanding of vasopressin physiology!', incorrect: 'Vasopressin works even when acidosis reduces epinephrine effectiveness.' }
      },
      {
        id: 3, action: 'Dosage Protocol', description: 'Vasopressin dose for cardiac arrest:',
        options: ['20 units IV', '40 units IV', '80 units IV', '100 units IV'],
        correctOption: 1, rationale: '40 units IV is the standard one-time dose for cardiac arrest.',
        criticalStep: true, clinicalExplanation: 'Single 40-unit dose provides sustained vasoconstriction for 10-20 minutes due to vasopressin\'s longer half-life.',
        feedback: { correct: 'Perfect! Single 40-unit dose for cardiac arrest.', incorrect: 'Give 40 units IV once - vasopressin has long duration of action.' }
      },
      {
        id: 4, action: 'Repeat Dosing', description: 'Vasopressin in cardiac arrest should be:',
        options: ['Repeated every 3-5 minutes', 'Given as one-time dose only', 'Alternated with epinephrine', 'Given continuously'],
        correctOption: 1, rationale: 'Vasopressin is given as single dose due to its prolonged duration of action.',
        criticalStep: true, clinicalExplanation: 'Vasopressin has 10-20 minute half-life compared to epinephrine\'s 2-3 minutes. One dose provides sustained effect.',
        feedback: { correct: 'Right! Single dose due to long duration of action.', incorrect: 'Give vasopressin once only - it has prolonged effects unlike epinephrine.' }
      },
      {
        id: 5, action: 'Mechanism Understanding', description: 'Vasopressin improves outcomes by:',
        options: ['Increasing heart rate', 'Improving coronary perfusion pressure', 'Dilating bronchi', 'Lowering blood pressure'],
        correctOption: 1, rationale: 'Intense vasoconstriction increases diastolic pressure and coronary perfusion pressure.',
        criticalStep: false, clinicalExplanation: 'Higher diastolic pressure during chest compressions improves coronary blood flow, potentially enhancing defibrillation success.',
        feedback: { correct: 'Excellent! Better coronary perfusion may improve resuscitation success.', incorrect: 'Vasopressin\'s vasoconstriction improves coronary perfusion during CPR.' }
      },
      {
        id: 6, action: 'Post-ROSC Considerations', description: 'After ROSC with vasopressin use:',
        options: ['Give more vasopressin', 'Monitor for hypertension', 'Give epinephrine', 'No special monitoring'],
        correctOption: 1, rationale: 'Vasopressin can cause severe hypertension post-ROSC due to intense vasoconstriction.',
        criticalStep: false, clinicalExplanation: 'Post-ROSC, vasopressin\'s intense vasoconstriction may cause dangerous hypertension requiring antihypertensive therapy.',
        feedback: { correct: 'Important monitoring! Vasopressin can cause severe post-ROSC hypertension.', incorrect: 'Watch for severe hypertension after ROSC - vasopressin causes intense vasoconstriction.' }
      }
    ],
    criticalActions: ['Consider in prolonged arrest', 'Give single 40-unit dose', 'Don\'t repeat dosing', 'Monitor post-ROSC hypertension'],
    commonMistakes: ['Repeating vasopressin doses', 'Using in early arrest only', 'Wrong dosage', 'Not monitoring post-ROSC BP'],
    learningObjectives: ['Understand vasopressin vs epinephrine', 'Know single-dose protocol', 'Recognize prolonged arrest indications', 'Monitor post-resuscitation effects'],
    timeLimit: 15, difficulty: 'Advanced'
  },
  {
    id: 'furosemide_chf',
    title: 'Furosemide for Acute CHF',
    medication: 'Furosemide (Lasix)',
    certificationLevel: 'Paramedic',
    scenario: 'You respond to a 72-year-old female with severe shortness of breath. She has bilateral rales, JVD, and peripheral edema.',
    patientPresentation: {
      vitals: { hr: 125, bp: '180/110', rr: 32, spo2: 85, temp: 98.6 },
      symptoms: ['Severe dyspnea', 'Orthopnea', 'Bilateral rales', 'JVD', 'Peripheral edema'],
      allergies: ['Sulfa drugs'], currentMedications: ['Lisinopril', 'Carvedilol', 'Furosemide 40mg daily']
    },
    clinicalReferences: {
      indication: 'Furosemide reduces preload in acute CHF by promoting diuresis and venodilation',
      mechanism: 'Loop diuretic blocking Na-K-2Cl cotransporter; immediate venodilation, delayed diuresis',
      contraindications: ['Anuria', 'Severe hypovolemia', 'Sulfa allergy'],
      guidelines: 'AHA Heart Failure Guidelines recommend IV diuretics for volume overload in acute CHF'
    },
    steps: [
      {
        id: 1, action: 'CHF Recognition', description: 'This presentation indicates:',
        options: ['Pneumonia', 'Acute congestive heart failure', 'Asthma exacerbation', 'Pulmonary embolism'],
        correctOption: 1, rationale: 'Classic CHF triad: dyspnea, rales, and volume overload signs (JVD, edema).',
        criticalStep: true, clinicalExplanation: 'CHF presents with forward failure (poor perfusion) and backward failure (pulmonary/systemic congestion).',
        feedback: { correct: 'Excellent CHF recognition! Classic volume overload presentation.', incorrect: 'Dyspnea, rales, JVD, and edema indicate acute congestive heart failure.' }
      },
      {
        id: 2, action: 'Sulfa Allergy Assessment', description: 'Patient has sulfa allergy. Furosemide:',
        options: ['Is absolutely contraindicated', 'Can be used with premedication', 'Is safe - no cross-reactivity', 'Requires different diuretic'],
        correctOption: 2, rationale: 'Furosemide doesn\'t cross-react with sulfonamide antibiotics in most patients.',
        criticalStep: true, clinicalExplanation: 'Loop diuretics like furosemide rarely cross-react with sulfonamide antibiotics. Different chemical structures and mechanisms.',
        feedback: { correct: 'Correct! Furosemide is generally safe in sulfa-allergic patients.', incorrect: 'Furosemide usually doesn\'t cross-react with sulfa antibiotics - different mechanisms.' }
      },
      {
        id: 3, action: 'Furosemide Dosing', description: 'For acute CHF, appropriate furosemide dose:',
        options: ['20 mg IV', '40-80 mg IV', '120-160 mg IV', '200 mg IV'],
        correctOption: 1, rationale: '40-80 mg IV is standard for acute CHF; higher doses for severe cases or renal impairment.',
        criticalStep: true, clinicalExplanation: 'Dose depends on home diuretic use and severity. Start with 40mg if diuretic-naive, or double home dose.',
        feedback: { correct: 'Perfect dosing for acute CHF presentation.', incorrect: 'Standard acute CHF dose is 40-80 mg IV, adjusted for home medications.' }
      },
      {
        id: 4, action: 'Immediate vs Delayed Effects', description: 'Furosemide\'s immediate benefit in CHF comes from:',
        options: ['Rapid diuresis', 'Venodilation reducing preload', 'Improved contractility', 'Bronchodilation'],
        correctOption: 1, rationale: 'Immediate venodilation occurs within minutes, before significant diuresis.',
        criticalStep: true, clinicalExplanation: 'Furosemide causes immediate venodilation (5-15 min) reducing preload before diuresis (30-60 min) begins.',
        feedback: { correct: 'Excellent understanding! Immediate venodilation precedes diuresis.', incorrect: 'Furosemide causes immediate venodilation, then delayed diuresis.' }
      },
      {
        id: 5, action: 'Monitoring Parameters', description: 'After furosemide, monitor for:',
        options: ['Increased blood pressure', 'Hypotension and electrolyte changes', 'Bradycardia', 'Hyperglycemia'],
        correctOption: 1, rationale: 'Diuresis can cause hypotension, hypokalemia, and hyponatremia.',
        criticalStep: false, clinicalExplanation: 'Loop diuretics cause potassium, sodium, and magnesium wasting. Excessive diuresis leads to hypotension.',
        feedback: { correct: 'Important monitoring! Watch for hypotension and electrolyte depletion.', incorrect: 'Monitor for hypotension and electrolyte losses with furosemide.' }
      },
      {
        id: 6, action: 'Treatment Goals', description: 'Furosemide success in CHF is measured by:',
        options: ['Increased urine output only', 'Improved breathing and reduced rales', 'Higher blood pressure', 'Faster heart rate'],
        correctOption: 1, rationale: 'Clinical improvement (easier breathing, fewer rales) indicates effective preload reduction.',
        criticalStep: false, clinicalExplanation: 'Goal is symptom relief through reduced pulmonary congestion, not just diuresis. Improved oxygenation and less work of breathing.',
        feedback: { correct: 'Perfect! Clinical improvement is the primary goal.', incorrect: 'Success measured by improved breathing and reduced pulmonary congestion.' }
      }
    ],
    criticalActions: ['Recognize acute CHF', 'Assess sulfa allergy implications', 'Use appropriate dose', 'Monitor for hypotension'],
    commonMistakes: ['Avoiding furosemide in sulfa allergy', 'Inadequate dosing', 'Not monitoring electrolytes', 'Expecting immediate diuresis'],
    learningObjectives: ['Identify acute CHF presentation', 'Understand furosemide mechanisms', 'Know appropriate dosing', 'Monitor for complications'],
    timeLimit: 14, difficulty: 'Advanced'
  },
  {
    id: 'activated_charcoal_overdose',
    title: 'Activated Charcoal for Drug Overdose',
    medication: 'Activated Charcoal',
    certificationLevel: 'EMT',
    scenario: 'You respond to a 25-year-old female who ingested unknown pills 30 minutes ago. She is conscious, alert, and cooperative.',
    patientPresentation: {
      vitals: { hr: 95, bp: '120/80', rr: 18, spo2: 98, temp: 98.4 },
      symptoms: ['Mild nausea', 'Anxiety', 'Normal mental status'],
      allergies: ['NKDA'], currentMedications: ['Birth control pills']
    },
    clinicalReferences: {
      indication: 'Activated charcoal binds toxins in GI tract, preventing absorption',
      mechanism: 'Large surface area adsorbs drugs and toxins, preventing intestinal absorption',
      contraindications: ['Altered mental status', 'Absent bowel sounds', 'Caustic ingestion', 'Hydrocarbon ingestion'],
      guidelines: 'Poison Control Centers recommend charcoal within 1-2 hours of ingestion for appropriate toxins'
    },
    steps: [
      {
        id: 1, action: 'Ingestion Timeline', description: 'Activated charcoal is most effective when given:',
        options: ['Within 30 minutes', 'Within 1-2 hours', 'Within 6 hours', 'Anytime after ingestion'],
        correctOption: 1, rationale: 'Greatest benefit within 1-2 hours; minimal benefit after 2-4 hours.',
        criticalStep: true, clinicalExplanation: 'Drug absorption occurs rapidly. Charcoal effectiveness decreases significantly after 2 hours as drugs move beyond reach.',
        feedback: { correct: 'Perfect timing knowledge! Early administration is crucial.', incorrect: 'Charcoal works best within 1-2 hours of ingestion - time is critical.' }
      },
      {
        id: 2, action: 'Contraindication Assessment', description: 'Activated charcoal is contraindicated in:',
        options: ['All conscious patients', 'Patients who can\'t protect airway', 'Hypertensive patients', 'Young adults'],
        correctOption: 1, rationale: 'Airway protection is essential - charcoal aspiration can cause severe pneumonitis.',
        criticalStep: true, clinicalExplanation: 'Altered mental status increases aspiration risk. Charcoal aspiration causes severe chemical pneumonitis with high mortality.',
        feedback: { correct: 'Critical safety assessment! Airway protection is paramount.', incorrect: 'Never give charcoal if patient can\'t protect their airway - aspiration risk.' }
      },
      {
        id: 3, action: 'Appropriate Toxins', description: 'Activated charcoal is NOT effective for:',
        options: ['Acetaminophen', 'Iron and lithium', 'Aspirin', 'Antidepressants'],
        correctOption: 1, rationale: 'Charcoal doesn\'t bind metals (iron), electrolytes (lithium), or alcohols.',
        criticalStep: true, clinicalExplanation: 'Charcoal binds organic compounds but not metals, electrolytes, caustics, or hydrocarbons. Know what it won\'t help.',
        feedback: { correct: 'Excellent knowledge of charcoal limitations!', incorrect: 'Charcoal doesn\'t bind metals like iron or electrolytes like lithium.' }
      },
      {
        id: 4, action: 'Dosage Guidelines', description: 'Standard activated charcoal dose for adults:',
        options: ['25 grams', '50-100 grams', '150 grams', '200 grams'],
        correctOption: 1, rationale: '50-100 grams (1 g/kg) is standard adult dose mixed in water.',
        criticalStep: true, clinicalExplanation: 'Dose should be 10:1 ratio of charcoal to ingested drug when known. Standard 50-100g covers most scenarios.',
        feedback: { correct: 'Correct standard dosing for overdose treatment.', incorrect: 'Give 50-100 grams activated charcoal for adult overdose patients.' }
      },
      {
        id: 5, action: 'Administration Method', description: 'Activated charcoal should be:',
        options: ['Given dry', 'Mixed with milk', 'Mixed with water or juice', 'Given with ipecac'],
        correctOption: 2, rationale: 'Mix with water or flavored drink to improve palatability and administration.',
        criticalStep: false, clinicalExplanation: 'Mixing with liquid creates slurry that\'s easier to drink. Flavoring helps with compliance but avoid dairy products.',
        feedback: { correct: 'Good preparation technique for patient compliance.', incorrect: 'Mix charcoal with water or juice to make it easier to drink.' }
      },
      {
        id: 6, action: 'Side Effects', description: 'Common activated charcoal side effects include:',
        options: ['Diarrhea', 'Constipation and black stools', 'Kidney damage', 'Liver toxicity'],
        correctOption: 1, rationale: 'Charcoal commonly causes constipation and turns stools black for several days.',
        criticalStep: false, clinicalExplanation: 'Black stools are normal and harmless. Constipation may require stool softeners. No organ toxicity.',
        feedback: { correct: 'Normal expected effects - reassure patient about black stools.', incorrect: 'Expect constipation and black stools - normal charcoal effects.' }
      }
    ],
    criticalActions: ['Assess ingestion timing', 'Ensure airway protection', 'Verify appropriate toxin', 'Give correct dose'],
    commonMistakes: ['Giving too late after ingestion', 'Using in altered mental status', 'Wrong toxin indications', 'Inadequate mixing'],
    learningObjectives: ['Know charcoal timing windows', 'Identify contraindications', 'Understand toxin specificity', 'Master safe administration'],
    timeLimit: 10, difficulty: 'Beginner'
  },
  {
    id: 'normal_saline_dehydration',
    title: 'Normal Saline for Severe Dehydration',
    medication: 'Normal Saline (0.9% NaCl)',
    certificationLevel: 'EMT',
    scenario: 'You respond to a 35-year-old male with 3 days of vomiting and diarrhea. He appears dehydrated with poor skin turgor and dry mucous membranes.',
    patientPresentation: {
      vitals: { hr: 125, bp: '90/60', rr: 22, spo2: 96, temp: 99.8 },
      symptoms: ['Weakness', 'Dizziness', 'Dry mouth', 'Poor skin turgor', 'Dark urine'],
      allergies: ['NKDA'], currentMedications: ['None']
    },
    clinicalReferences: {
      indication: 'Normal saline replaces intravascular volume in dehydration and shock',
      mechanism: 'Isotonic crystalloid that expands intravascular space without causing hemolysis',
      contraindications: ['Congestive heart failure', 'Renal failure', 'Hypernatremia'],
      guidelines: 'Restore circulating volume with 20 mL/kg boluses in dehydrated patients'
    },
    steps: [
      {
        id: 1, action: 'Dehydration Assessment', description: 'Signs of moderate to severe dehydration include:',
        options: ['Mild thirst only', 'Tachycardia, hypotension, poor skin turgor', 'Normal vital signs', 'Hypertension'],
        correctOption: 1, rationale: 'Moderate-severe dehydration causes hemodynamic changes and physical signs.',
        criticalStep: true, clinicalExplanation: 'Dehydration progresses from thirst to tachycardia, hypotension, poor skin turgor, and altered mental status.',
        feedback: { correct: 'Excellent dehydration assessment! Recognizing severity is crucial.', incorrect: 'Tachycardia, hypotension, and poor skin turgor indicate significant dehydration.' }
      },
      {
        id: 2, action: 'Fluid Choice Rationale', description: 'Normal saline is preferred because it:',
        options: ['Is hypotonic', 'Is isotonic and stays intravascular', 'Contains glucose', 'Is less expensive'],
        correctOption: 1, rationale: 'Isotonic solution doesn\'t cause cell swelling or hemolysis and effectively expands blood volume.',
        criticalStep: true, clinicalExplanation: 'Normal saline (308 mOsm/L) matches plasma osmolality, preventing cellular fluid shifts while restoring circulating volume.',
        feedback: { correct: 'Perfect understanding of isotonic fluid physiology!', incorrect: 'Normal saline is isotonic - stays in blood vessels and restores volume effectively.' }
      },
      {
        id: 3, action: 'Initial Bolus Dosing', description: 'Initial fluid bolus for this dehydrated adult:',
        options: ['250 mL', '500-1000 mL', '2000 mL', '100 mL'],
        correctOption: 1, rationale: '500-1000 mL (20 mL/kg) is appropriate initial bolus for moderate dehydration.',
        criticalStep: true, clinicalExplanation: '20 mL/kg bolus (about 1 liter for 70kg adult) safely restores volume without overloading compromised patients.',
        feedback: { correct: 'Correct initial bolus for volume restoration.', incorrect: 'Give 500-1000 mL initial bolus (20 mL/kg) for moderate dehydration.' }
      },
      {
        id: 4, action: 'Administration Rate', description: 'Initial normal saline bolus should be given:',
        options: ['Over 2-3 hours', 'Over 15-30 minutes', 'Over 1 minute', 'Over 6 hours'],
        correctOption: 1, rationale: 'Rapid administration (15-30 minutes) for volume resuscitation in hemodynamically unstable patient.',
        criticalStep: true, clinicalExplanation: 'Dehydrated patients need rapid volume restoration. Slower rates used for maintenance, not resuscitation.',
        feedback: { correct: 'Appropriate rate for volume resuscitation.', incorrect: 'Give bolus rapidly over 15-30 minutes for dehydration resuscitation.' }
      },
      {
        id: 5, action: 'Response Assessment', description: 'Successful fluid resuscitation is indicated by:',
        options: ['No change in vital signs', 'Improved blood pressure and heart rate', 'Decreased urine output', 'Increased temperature'],
        correctOption: 1, rationale: 'Volume restoration improves BP, decreases HR, and enhances perfusion.',
        criticalStep: false, clinicalExplanation: 'Adequate resuscitation normalizes vital signs, improves skin turgor, and increases urine output.',
        feedback: { correct: 'Excellent understanding of resuscitation endpoints.', incorrect: 'Look for improved BP, decreased HR, and better perfusion as resuscitation goals.' }
      },
      {
        id: 6, action: 'Fluid Overload Prevention', description: 'Signs that fluid administration should be slowed:',
        options: ['Improved mental status', 'Pulmonary edema or JVD', 'Better skin turgor', 'Normal heart rate'],
        correctOption: 1, rationale: 'Pulmonary edema or JVD indicates volume overload requiring slower or stopped fluid administration.',
        criticalStep: false, clinicalExplanation: 'Monitor for signs of volume overload: rales, JVD, peripheral edema. Stop fluids if these develop.',
        feedback: { correct: 'Important safety monitoring for fluid overload.', incorrect: 'Watch for pulmonary edema or JVD - signs to slow or stop fluids.' }
      }
    ],
    criticalActions: ['Assess dehydration severity', 'Choose appropriate fluid type', 'Give adequate initial bolus', 'Monitor response and complications'],
    commonMistakes: ['Inadequate initial volume', 'Too slow administration', 'Not monitoring for overload', 'Using hypotonic fluids'],
    learningObjectives: ['Recognize dehydration severity', 'Understand isotonic fluid benefits', 'Know appropriate bolus dosing', 'Monitor resuscitation response'],
    timeLimit: 12, difficulty: 'Beginner'
  },
  {
    id: 'sodium_bicarbonate_acidosis',
    title: 'Sodium Bicarbonate for Severe Acidosis',
    medication: 'Sodium Bicarbonate 8.4%',
    certificationLevel: 'Paramedic',
    scenario: 'You respond to a 28-year-old diabetic in DKA with Kussmaul respirations and pH 6.9 on blood gas.',
    patientPresentation: {
      vitals: { hr: 130, bp: '85/50', rr: 35, spo2: 98, temp: 99.5 },
      symptoms: ['Deep rapid breathing', 'Fruity breath odor', 'Dehydration', 'Altered mental status'],
      allergies: ['NKDA'], currentMedications: ['Insulin', 'Metformin']
    },
    clinicalReferences: {
      indication: 'Sodium bicarbonate for severe acidosis (pH <7.1) when standard treatment insufficient',
      mechanism: 'Alkalinizing agent that buffers excess hydrogen ions',
      contraindications: ['Respiratory acidosis', 'Chloride-responsive alkalosis', 'Hypocalcemia'],
      guidelines: 'ADA Guidelines recommend bicarbonate only for severe DKA with pH <6.9'
    },
    steps: [
      {
        id: 1, action: 'Acidosis Recognition', description: 'Kussmaul respirations indicate:',
        options: ['Respiratory alkalosis', 'Compensatory hyperventilation for metabolic acidosis', 'Pneumonia', 'Asthma'],
        correctOption: 1, rationale: 'Deep, rapid breathing compensates for metabolic acidosis by eliminating CO2.',
        criticalStep: true, clinicalExplanation: 'Kussmaul respirations are compensatory hyperventilation to eliminate CO2 and raise pH in metabolic acidosis.',
        feedback: { correct: 'Excellent recognition of compensatory hyperventilation!', incorrect: 'Kussmaul breathing compensates for severe metabolic acidosis.' }
      },
      {
        id: 2, action: 'Bicarbonate Indication', description: 'Bicarbonate is indicated when:',
        options: ['pH <7.35', 'pH <7.1 or severe hemodynamic compromise', 'pH <7.25', 'Always in DKA'],
        correctOption: 1, rationale: 'Reserved for severe acidosis (pH <7.1) due to potential complications.',
        criticalStep: true, clinicalExplanation: 'Bicarbonate use is controversial. Reserved for life-threatening acidosis due to risks of paradoxical CNS acidosis and hypokalemia.',
        feedback: { correct: 'Correct indication for bicarbonate therapy.', incorrect: 'Bicarbonate reserved for severe acidosis pH <7.1 due to potential complications.' }
      },
      {
        id: 3, action: 'Dosage Calculation', description: 'Bicarbonate dose calculation uses:',
        options: ['Fixed 50 mEq dose', 'Body weight × base deficit', '1-2 mEq/kg initial dose', 'Maximum possible dose'],
        correctOption: 2, rationale: '1-2 mEq/kg provides initial correction without overcorrection.',
        criticalStep: true, clinicalExplanation: 'Conservative dosing (1-2 mEq/kg) provides partial correction. Full correction can cause dangerous shifts in potassium and CNS pH.',
        feedback: { correct: 'Appropriate conservative dosing approach.', incorrect: 'Use 1-2 mEq/kg initial dose to avoid overcorrection complications.' }
      },
      {
        id: 4, action: 'Administration Method', description: 'Sodium bicarbonate should be:',
        options: ['Given rapidly as bolus', 'Diluted and given slowly', 'Mixed with insulin', 'Given orally'],
        correctOption: 1, rationale: 'Dilute and give slowly to prevent hyperosmolality and rapid pH changes.',
        criticalStep: true, clinicalExplanation: 'Rapid bicarbonate causes hyperosmolality, paradoxical CNS acidosis, and dangerous electrolyte shifts.',
        feedback: { correct: 'Critical safety measure! Slow administration prevents complications.', incorrect: 'Always dilute and give bicarbonate slowly to prevent dangerous complications.' }
      },
      {
        id: 5, action: 'Monitoring Parameters', description: 'After bicarbonate, monitor for:',
        options: ['Hyperkalemia', 'Hypokalemia and overcorrection', 'Hyperglycemia', 'Bradycardia'],
        correctOption: 1, rationale: 'Bicarbonate shifts potassium intracellularly, potentially causing dangerous hypokalemia.',
        criticalStep: false, clinicalExplanation: 'pH correction drives potassium into cells. Combined with insulin therapy, this can cause life-threatening hypokalemia.',
        feedback: { correct: 'Critical monitoring! Hypokalemia is major bicarbonate risk.', incorrect: 'Watch for hypokalemia - bicarbonate and insulin both shift potassium into cells.' }
      },
      {
        id: 6, action: 'Alternative Approach', description: 'Instead of bicarbonate, prioritize:',
        options: ['More bicarbonate', 'Insulin, fluids, and treating underlying cause', 'Mechanical ventilation', 'Steroid therapy'],
        correctOption: 1, rationale: 'Treating underlying DKA with insulin and fluids is more important than bicarbonate.',
        criticalStep: false, clinicalExplanation: 'Correcting dehydration and stopping ketogenesis with insulin is primary therapy. Bicarbonate is adjunctive in severe cases.',
        feedback: { correct: 'Excellent prioritization of primary DKA therapy.', incorrect: 'Focus on insulin and fluid therapy - bicarbonate is secondary in DKA treatment.' }
      }
    ],
    criticalActions: ['Recognize severe acidosis', 'Use conservative dosing', 'Dilute and give slowly', 'Monitor for hypokalemia'],
    commonMistakes: ['Using bicarbonate too liberally', 'Rapid administration', 'Not monitoring potassium', 'Neglecting primary therapy'],
    learningObjectives: ['Identify severe acidosis indications', 'Understand bicarbonate risks', 'Know conservative dosing', 'Prioritize primary therapies'],
    timeLimit: 16, difficulty: 'Advanced'
  }
];
