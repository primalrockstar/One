// @ts-nocheck
// To be fixed
type ScenarioStep = {
    action: string;
    choices?: {
      text: string;
      isCorrect: boolean;
      feedback: string;
    }[];
    timeLimit?: number; // in seconds
    beyondScope?: ('EMT' | 'AEMT' | 'Paramedic')[];
    consequence?: string; // for failing time limit or wrong action
    // New properties for added complexity
    complexityLevel?: 'standard' | 'advanced' | 'expert';
    alternativeActions?: string[];
    contraindications?: string[];
  };

  type TrainingScenario = {
    id: string;
    title: string;
    description: string;
    patientVitals: {
      initial: string;
      changes?: { afterStep: number; newVitals: string }[];
    };
    certificationLevel: 'EMT' | 'AEMT' | 'Paramedic';
    difficulty: 'Easy' | 'Medium' | 'Hard';
    steps: ScenarioStep[];
  };

  export const trainingScenarios: TrainingScenario[] = [
    {
        id: "chest-pain-1",
        title: "Chest Pain in an Elderly Male",
        description: "You are dispatched to a 72-year-old male complaining of chest pain.",
        patientVitals: {
            initial: "HR: 98, BP: 150/90, RR: 18, SpO2: 95% on room air, GCS: 15. Patient appears anxious and is clutching his chest.",
            changes: [
                { afterStep: 4, newVitals: "HR: 105, BP: 160/95, RR: 20, SpO2: 94%. Patient states the pain is worsening." },
                { afterStep: 6, newVitals: "HR: 80, BP: 110/70, RR: 16, SpO2: 96%. Patient reports some relief after interventions." }
            ]
        },
        certificationLevel: "Paramedic",
        difficulty: "Medium",
        steps: [
            {
                action: "Perform Scene Size-Up and BSI.",
                complexityLevel: 'standard',
                choices: []
            },
            {
                action: "Perform Primary Assessment (ABC).",
                choices: []
            },
            {
                action: "Obtain patient history using OPQRST and SAMPLE.",
                choices: [
                    { text: "Patient describes a 'crushing' substernal pain that started 30 minutes ago, rated 8/10. It radiates to his left arm. He has a history of hypertension and high cholesterol.", isCorrect: true, feedback: "Excellent history taking. This information is critical." },
                    { text: "Ask only about the pain.", isCorrect: false, feedback: "A full SAMPLE and OPQRST history is necessary to rule out other causes and identify risk factors." }
                ],
                timeLimit: 120
            },
            {
                action: "Administer Oxygen.",
                choices: [
                    { text: "Apply a nasal cannula at 2-4 LPM.", isCorrect: true, feedback: "Correct. The patient's SpO2 is >94%, so high-flow O2 is not immediately indicated, but supplemental O2 is appropriate." },
                    { text: "Apply a non-rebreather mask at 15 LPM.", isCorrect: false, feedback: "Not indicated at this time as SpO2 is 95%. This could cause oxygen toxicity and vasoconstriction." }
                ]
            },
            {
                action: "Administer Aspirin.",
                choices: [
                    { text: "Administer 324mg (4 x 81mg tablets) of chewable aspirin.", isCorrect: true, feedback: "Correct. Aspirin is a key anti-platelet medication in suspected ACS." },
                    { text: "Do not administer aspirin as his BP is high.", isCorrect: false, feedback: "Aspirin is not contraindicated by hypertension in this context." }
                ],
                contraindications: ["Known allergy", "Active bleeding"]
            },
            {
                action: "Acquire a 12-Lead ECG.",
                beyondScope: ["EMT", "AEMT"],
                timeLimit: 180,
                consequence: "Delay in diagnosis and treatment.",
                choices: [
                    { text: "Acquire and interpret the 12-Lead ECG.", isCorrect: true, feedback: "The ECG shows ST-elevation in leads II, III, and aVF, indicating an inferior wall STEMI." },
                    { text: "Decide to wait until arrival at the hospital.", isCorrect: false, feedback: "Early acquisition of a 12-Lead is crucial for activating the cath lab and reducing door-to-balloon time." }
                ]
            },
            {
                action: "Administer Nitroglycerin.",
                beyondScope: ["EMT"],
                choices: [
                    { text: "Administer 0.4mg sublingual nitroglycerin after confirming no contraindications (BP > 90 systolic, no phosphodiesterase inhibitors).", isCorrect: true, feedback: "Correct. This may alleviate pain and reduce preload." },
                    { text: "Administer nitroglycerin without checking BP.", isCorrect: false, feedback: "This is dangerous. Nitroglycerin can cause profound hypotension." },
                    { text: "Do not give nitro because it's an inferior STEMI.", isCorrect: false, feedback: "While caution is advised with inferior MIs (especially with right-sided involvement), it is not an absolute contraindication if the patient is not hypotensive, bradycardic, or tachycardic." }
                ]
            },
            {
                action: "Initiate transport to a PCI-capable hospital.",
                choices: []
            },
            {
                action: "Establish IV access.",
                beyondScope: ["EMT"],
                choices: [
                    { text: "Establish a large-bore IV in the AC fossa.", isCorrect: true, feedback: "Good access is vital for administering further medications or fluids if needed." },
                    { text: "Delay IV access until the patient's condition worsens.", isCorrect: false, feedback: "It's better to establish access when the patient is stable." }
                ]
            },
            {
                action: "Notify the receiving hospital of a 'STEMI Alert'.",
                choices: []
            }
        ]
    },
    {
        id: "anaphylaxis-1",
        title: "Anaphylactic Reaction to Bee Sting",
        description: "You are called to a park for a 28-year-old female who was stung by a bee.",
        patientVitals: {
            initial: "HR: 120, BP: 90/50, RR: 24 (with audible wheezing), SpO2: 91% on room air. Diffuse hives are visible on her arms and neck.",
            changes: [
                { afterStep: 3, newVitals: "HR: 100, BP: 110/70, RR: 18, SpO2: 96%. Wheezing has diminished and the patient feels less 'impending doom'." }
            ]
        },
        certificationLevel: "AEMT",
        difficulty: "Easy",
        steps: [
            {
                action: "Perform Scene Size-Up and BSI.",
                choices: []
            },
            {
                action: "Primary Assessment (ABC). Airway is compromised due to swelling and bronchoconstriction.",
                choices: []
            },
            {
                action: "Administer Epinephrine.",
                timeLimit: 60,
                consequence: "Patient's airway may close completely, leading to respiratory arrest.",
                choices: [
                    { text: "Administer 0.3mg of Epinephrine (1:1,000) via intramuscular injection into the lateral thigh.", isCorrect: true, feedback: "Correct and immediate life-saving intervention for anaphylaxis." },
                    { text: "Administer an EpiPen from the patient's bag.", isCorrect: true, feedback: "Correct. Using the patient's own prescribed EpiPen is a primary intervention." },
                    { text: "Apply high-flow oxygen and wait to see if she improves.", isCorrect: false, feedback: "Oxygen is necessary, but delaying epinephrine is a critical error." }
                ]
            },
            {
                action: "Administer High-Flow Oxygen.",
                choices: [
                    { text: "Apply a non-rebreather mask at 15 LPM.", isCorrect: true, feedback: "Correct. The patient is hypoxic and in respiratory distress." }
                ],
            },
            {
                action: "Establish IV access (AEMT/Paramedic).",
                beyondScope: ["EMT"],
                choices: [
                    { text: "Establish IV access and prepare for a fluid bolus.", isCorrect: true, feedback: "Correct. Anaphylaxis causes vasodilation and hypotension. Fluids will be needed." },
                    { text: "IV access is not necessary.", isCorrect: false, feedback: "IV access is crucial for administering fluids and other medications like diphenhydramine and steroids." }
                ]
            },
            {
                action: "Administer Diphenhydramine (Benadryl) and a Steroid (Solu-Medrol).",
                beyondScope: ["EMT"],
                complexityLevel: 'advanced',
                choices: [
                    { text: "Administer 25-50mg of Diphenhydramine IV/IM.", isCorrect: true, feedback: "Correct. This H1 blocker helps with hives and itching." },
                    { text: "Administer 125mg of Solu-Medrol IV.", isCorrect: true, feedback: "Correct. Corticosteroids help prevent the biphasic reaction." },
                    { text: "These medications are not needed since Epi was given.", isCorrect: false, feedback: "These are important secondary treatments to manage symptoms and prevent recurrence." }
                ]
            },
            {
                action: "Prepare for transport and continuous reassessment.",
                choices: []
            }
        ]
    },
    // Adding more scenarios here...
    {
        id: "seizure-1",
        title: "Active Seizure in a Known Epileptic",
        description: "Dispatch to a residence for a 19-year-old female actively seizing. Family states she has a history of epilepsy and missed her medication today.",
        patientVitals: {
            initial: "Patient is in a tonic-clonic seizure. HR: 140, BP: 160/100 (difficult to obtain), RR: Irregular/agonal, SpO2: 85% on room air.",
            changes: [
                { afterStep: 2, newVitals: "Seizure has stopped. Patient is postictal, responsive only to pain. HR: 110, BP: 130/80, RR: 12 (shallow), SpO2: 90%." }
            ]
        },
        certificationLevel: "Paramedic",
        difficulty: "Medium",
        steps: [
            {
                action: "Scene Size-Up, BSI. Ensure patient is in a safe position, away from furniture.",
                timeLimit: 30,
                consequence: "Patient may sustain further injury during the seizure.",
                choices: []
            },
            {
                action: "Primary Assessment (ABC). Position airway with jaw-thrust, prepare suction.",
                choices: [
                    { text: "Position airway, apply oxygen via NRB, and prepare suction.", isCorrect: true, feedback: "Correct. Protect the airway and maximize oxygenation during the seizure." },
                    { text: "Attempt to insert an OPA during the seizure.", isCorrect: false, feedback: "Incorrect. Forcing an airway adjunct into a clenched jaw can cause significant dental and soft tissue trauma." }
                ]
            },
            {
                action: "Administer a Benzodiazepine if seizure has lasted > 5 minutes or per protocol.",
                beyondScope: ["EMT", "AEMT"],
                timeLimit: 120,
                consequence: "Prolonged seizure activity (status epilepticus) can lead to permanent brain damage.",
                choices: [
                    { text: "Administer Midazolam (Versed) 5mg via IN or IM route.", isCorrect: true, feedback: "Correct. IN/IM routes are preferred during active seizures when IV access is difficult." },
                    { text: "Establish IV and administer Lorazepam (Ativan) 2-4mg IV.", isCorrect: true, feedback: "Correct. IV is the definitive route if access can be obtained." },
                    { text: "Wait for the seizure to stop on its own.", isCorrect: false, feedback: "This could be status epilepticus. Intervention is required to break the seizure." }
                ]
            },
            {
                action: "Check blood glucose level.",
                choices: [
                    { text: "Obtain a blood glucose reading.", isCorrect: true, feedback: "Correct. Hypoglycemia is a common and easily reversible cause of seizures. The reading is 75 mg/dL." },
                    { text: "Assume the cause is epilepsy and forego a glucose check.", isCorrect: false, feedback: "Always check for reversible causes, even in patients with a known seizure history." }
                ]
            },
            {
                action: "Manage postictal state.",
                choices: [
                    { text: "Continue to support airway and ventilation. Suction as needed. Maintain oxygen.", isCorrect: true, feedback: "Excellent. Postictal patients are at high risk for airway compromise." }
                ]
            },
            {
                action: "Initiate transport and continuously monitor vitals and neurological status.",
                choices: []
            }
        ]
    },
    {
      id: "hypoglycemia-1",
      title: "Altered Mental Status in a Diabetic",
      description: "You are called to an office building for a 45-year-old male with altered mental status. Coworkers state he is a diabetic and seemed 'off' after skipping lunch.",
      patientVitals: {
          initial: "HR: 110, BP: 130/80, RR: 20, SpO2: 98% on RA. Skin is pale, cool, and diaphoretic. Patient is combative and confused.",
          changes: [
              { afterStep: 2, newVitals: "Patient is now calm, alert, and oriented x4. Skin is warm and dry. HR: 88, BP: 124/76, RR: 16." }
          ]
      },
      certificationLevel: "EMT",
      difficulty: "Easy",
      steps: [
          {
              action: "Scene Size-Up, BSI. Ensure the scene is safe, especially with a potentially combative patient.",
              choices: []
          },
          {
              action: "Check blood glucose level.",
              timeLimit: 90,
              consequence: "Delay in treating hypoglycemia can lead to seizure, coma, or death.",
              choices: [
                  { text: "Perform a fingerstick blood glucose test.", isCorrect: true, feedback: "Correct. The reading is 42 mg/dL. This confirms severe hypoglycemia." },
                  { text: "Assume the patient is intoxicated and prepare for restraint.", isCorrect: false, feedback: "Always rule out medical causes before assuming intoxication. Checking a blood sugar is a critical first step." }
              ]
          },
          {
              action: "Administer Oral Glucose.",
              choices: [
                  { text: "Administer one tube of oral glucose between the patient's cheek and gum, as he is conscious but confused.", isCorrect: true, feedback: "Correct. The patient can protect his own airway, so oral glucose is appropriate." },
                  { text: "Attempt to force the patient to drink orange juice.", isCorrect: false, feedback: "This poses a high risk of aspiration in a patient with altered mental status." },
                  { text: "Do nothing, as only paramedics can give 'medication'.", isCorrect: false, feedback: "Oral glucose is within the EMT scope of practice for treating hypoglycemia." }
              ]
          },
          {
              action: "Reassess patient and vital signs.",
              choices: [
                  { text: "Recheck blood glucose and vitals after 10-15 minutes.", isCorrect: true, feedback: "Correct. The new reading is 110 mg/dL. The patient's mental status has returned to normal." }
              ]
          },
          {
              action: "Make a transport decision.",
              choices: [
                  { text: "Strongly encourage the patient to be transported for further evaluation and to prevent another episode.", isCorrect: true, feedback: "Correct. Even though the immediate issue is resolved, the underlying cause needs to be evaluated." },
                  { text: "Obtain a signed refusal (AMA) after ensuring the patient is fully competent and understands the risks, and has a plan to eat a complex carbohydrate.", isCorrect: true, feedback: "This is also a possible outcome, but transport should be the primary recommendation." }
              ]
          }
      ]
  },
  {
      id: "asthma-exacerbation-1",
      title: "Pediatric Asthma Exacerbation",
      description: "A 6-year-old female is in severe respiratory distress. Her mother states she has asthma and her rescue inhaler isn't working.",
      patientVitals: {
          initial: "HR: 145, BP: 100/70, RR: 35 (labored, with retractions), SpO2: 89% on RA. Audible wheezing in all lung fields. Patient is in tripod position.",
          changes: [
              { afterStep: 1, newVitals: "After treatment, HR: 130, RR: 28 (less labored), SpO2: 94%. Wheezing is less pronounced." }
          ]
      },
      certificationLevel: "AEMT",
      difficulty: "Medium",
      steps: [
          {
              action: "Scene Size-Up, BSI. Approach calmly to avoid further agitating the child.",
              choices: []
          },
          {
              action: "Administer a DuoNeb (Albuterol/Ipratropium) nebulizer treatment.",
              timeLimit: 120,
              consequence: "Worsening bronchoconstriction can lead to respiratory failure.",
              choices: [
                  { text: "Assemble the nebulizer and administer Albuterol and Ipratropium with oxygen at 6-8 LPM.", isCorrect: true, feedback: "Correct. This is the first-line treatment for a severe asthma attack." },
                  { text: "Only administer Albuterol.", isCorrect: false, feedback: "In a severe exacerbation, the addition of Ipratropium (an anticholinergic) provides synergistic bronchodilation. DuoNeb is preferred." }
              ]
          },
          {
              action: "Consider Continuous Positive Airway Pressure (CPAP).",
              beyondScope: ["EMT"],
              complexityLevel: 'advanced',
              choices: [
                  { text: "If the patient is tiring and initial nebs are not effective, consider applying CPAP.", isCorrect: true, feedback: "CPAP can help reduce the work of breathing and stent open airways, preventing respiratory failure. This is an advanced skill." },
                  { text: "CPAP is only for CHF patients.", isCorrect: false, feedback: "CPAP has proven to be very effective in severe asthma exacerbations." }
              ]
          },
          {
              action: "Administer Corticosteroids (Paramedic).",
              beyondScope: ["EMT", "AEMT"],
              choices: [
                  { text: "Administer Solu-Medrol 1-2 mg/kg.", isCorrect: true, feedback: "Correct. Steroids are crucial for reducing airway inflammation, though their effects are not immediate." }
              ]
          },
          {
              action: "Consider Epinephrine for refractory asthma (Paramedic).",
              beyondScope: ["EMT", "AEMT"],
              complexityLevel: 'expert',
              choices: [
                  { text: "If the patient is not responding to other treatments and is nearing respiratory arrest, administer Epinephrine (1:1,000) 0.01 mg/kg IM.", isCorrect: true, feedback: "This is a last-resort, life-saving measure for severe, refractory bronchospasm." },
                  { text: "Epinephrine is only for anaphylaxis.", isCorrect: false, feedback: "Its potent Beta-2 agonist effects make it a powerful bronchodilator, useful in the most severe asthma cases." }
              ]
          },
          {
              action: "Initiate rapid transport.",
              choices: []
          }
      ]
  }
  ];
