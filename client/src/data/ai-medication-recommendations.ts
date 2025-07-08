export interface PatientPresentation {
  age: number;
  weight?: number;
  symptoms: string[];
  vitals: {
    hr: number;
    sbp: number;
    dbp: number;
    rr: number;
    spo2: number;
    temp?: number;
    glucometer?: number;
  };
  allergies: string[];
  currentMedications: string[];
  medicalHistory: string[];
  chiefComplaint: string;
  painScale?: number;
  mentalStatus: string;
  skinCondition: string[];
}

export interface MedicationRecommendation {
  medication: string;
  reasoning: string[];
  dosage: string;
  route: string;
  contraindications: string[];
  certificationLevel: 'EMT' | 'AEMT' | 'Paramedic';
  priority: 'High' | 'Medium' | 'Low';
  timeframe: string;
  warnings: string[];
  monitoringParameters: string[];
  alternativeOptions: string[];
  protocolReference: string;
  confidenceScore: number; // 0-100
}

export interface ClinicalDecisionTree {
  id: string;
  condition: string;
  criteria: (patient: PatientPresentation) => boolean;
  recommendations: MedicationRecommendation[];
}

export class AIRecommendationEngine {
  private decisionTrees: ClinicalDecisionTree[] = [
    {
      id: 'anaphylaxis',
      condition: 'Anaphylaxis',
      criteria: (patient) => {
        const anaphylaxisSymptoms = ['hives', 'facial swelling', 'difficulty breathing', 'wheezing', 'stridor'];
        const hasSymptoms = patient.symptoms.some(symptom => 
          anaphylaxisSymptoms.some(anaSymptom => symptom.toLowerCase().includes(anaSymptom.toLowerCase()))
        );
        const hypotensive = patient.vitals.sbp < 90;
        const recentExposure = patient.chiefComplaint.toLowerCase().includes('allergy') ||
                              patient.chiefComplaint.toLowerCase().includes('bee sting') ||
                              patient.chiefComplaint.toLowerCase().includes('food') ||
                              patient.chiefComplaint.toLowerCase().includes('restaurant');
        
        console.log('Anaphylaxis check:', { hasSymptoms, hypotensive, recentExposure, symptoms: patient.symptoms });
        return hasSymptoms && (hypotensive || recentExposure);
      },
      recommendations: [
        {
          medication: 'Epinephrine Auto-Injector',
          reasoning: [
            'First-line treatment for anaphylaxis',
            'Reverses vasodilation and bronchospasm',
            'Life-saving intervention for severe allergic reaction',
            'Should be administered immediately upon recognition'
          ],
          dosage: 'Adult: 0.3mg IM, Pediatric: 0.15mg IM',
          route: 'Intramuscular (anterolateral thigh)',
          contraindications: ['None in true anaphylaxis'],
          certificationLevel: 'EMT',
          priority: 'High',
          timeframe: 'Immediate (within 2-3 minutes)',
          warnings: ['May repeat in 5-15 minutes if no improvement', 'Monitor for cardiac effects'],
          monitoringParameters: ['Blood pressure', 'Heart rate', 'Respiratory status', 'Mental status'],
          alternativeOptions: ['High-flow oxygen', 'Diphenhydramine (adjunct)', 'Corticosteroids (delayed effect)'],
          protocolReference: 'Anaphylaxis Protocol - Emergency Response',
          confidenceScore: 95
        }
      ]
    },
    {
      id: 'opioid_overdose',
      condition: 'Opioid Overdose',
      criteria: (patient) => {
        const opioidSymptoms = ['pinpoint pupils', 'respiratory depression', 'altered mental status', 'cyanosis'];
        const hasSymptoms = patient.symptoms.some(symptom => 
          opioidSymptoms.some(opioidSymptom => symptom.toLowerCase().includes(opioidSymptom.toLowerCase()))
        );
        const lowRespiratory = patient.vitals.rr < 10;
        const lowOxygen = patient.vitals.spo2 < 90;
        const suspectedOpioid = patient.chiefComplaint.toLowerCase().includes('overdose') ||
                              patient.chiefComplaint.toLowerCase().includes('heroin') ||
                              patient.chiefComplaint.toLowerCase().includes('fentanyl') ||
                              patient.chiefComplaint.toLowerCase().includes('pills');
        
        return (hasSymptoms || lowRespiratory || lowOxygen) && suspectedOpioid;
      },
      recommendations: [
        {
          medication: 'Naloxone (Narcan)',
          reasoning: [
            'Opioid receptor antagonist',
            'Reverses respiratory depression from opioids',
            'Life-saving intervention for overdose',
            'Safe to administer even if opioid involvement uncertain'
          ],
          dosage: 'Intranasal: 2-4mg (1-2 sprays), IM: 0.4-2mg',
          route: 'Intranasal or Intramuscular',
          contraindications: ['None in suspected opioid overdose'],
          certificationLevel: 'EMT',
          priority: 'High',
          timeframe: 'Immediate (within 2-3 minutes)',
          warnings: ['May precipitate withdrawal', 'Short half-life - monitor for re-sedation', 'May require repeat doses'],
          monitoringParameters: ['Respiratory rate', 'Oxygen saturation', 'Mental status', 'Pupil size'],
          alternativeOptions: ['Bag-mask ventilation', 'Airway management', 'IV access for repeat dosing'],
          protocolReference: 'Overdose Protocol - Opioid Reversal',
          confidenceScore: 92
        }
      ]
    },
    {
      id: 'hypoglycemia',
      condition: 'Hypoglycemia',
      criteria: (patient) => {
        const hypoglycemicSymptoms = ['confusion', 'diaphoresis', 'altered mental status', 'weakness', 'shakiness'];
        const hasSymptoms = patient.symptoms.some(symptom => 
          hypoglycemicSymptoms.some(hypoSymptom => symptom.toLowerCase().includes(hypoSymptom.toLowerCase()))
        );
        const lowGlucose = patient.vitals.glucometer !== undefined && patient.vitals.glucometer < 70;
        const diabeticHistory = patient.medicalHistory.some(history => 
          history.toLowerCase().includes('diabetes') || history.toLowerCase().includes('insulin')
        ) || patient.currentMedications.some(med => 
          med.toLowerCase().includes('insulin') || med.toLowerCase().includes('metformin')
        );
        
        console.log('Hypoglycemia check:', { hasSymptoms, lowGlucose, diabeticHistory, glucose: patient.vitals.glucometer });
        return (hasSymptoms && diabeticHistory) || lowGlucose;
      },
      recommendations: [
        {
          medication: 'Dextrose 50% (D50W)',
          reasoning: [
            'Rapidly corrects severe hypoglycemia',
            'IV administration provides immediate glucose availability',
            'Standard treatment for unconscious hypoglycemic patients',
            'More effective than oral glucose in severe cases'
          ],
          dosage: '25 grams (50 mL) IV push slowly',
          route: 'Intravenous',
          contraindications: ['Hyperglycemia', 'Questionable IV patency'],
          certificationLevel: 'AEMT',
          priority: 'High',
          timeframe: 'Within 5 minutes of recognition',
          warnings: ['Confirm IV patency - extravasation causes tissue necrosis', 'Administer slowly over 2-3 minutes'],
          monitoringParameters: ['Blood glucose', 'Mental status', 'IV site', 'Neurological response'],
          alternativeOptions: ['Oral glucose (if conscious)', 'Glucagon IM (if no IV access)', 'D10W (preferred in some protocols)'],
          protocolReference: 'Diabetic Emergency Protocol - Hypoglycemia',
          confidenceScore: 88
        },
        {
          medication: 'Oral Glucose',
          reasoning: [
            'Safe first-line treatment for conscious patients',
            'Non-invasive route of administration',
            'Effective for mild to moderate hypoglycemia',
            'Available at EMT level'
          ],
          dosage: '15-20 grams (1 tube gel)',
          route: 'Oral/Buccal',
          contraindications: ['Unconscious patient', 'Unable to swallow safely', 'Severe hypoglycemia'],
          certificationLevel: 'EMT',
          priority: 'Medium',
          timeframe: 'Within 5 minutes if conscious',
          warnings: ['Risk of aspiration if altered swallowing', 'May not be sufficient for severe cases'],
          monitoringParameters: ['Mental status', 'Blood glucose (15 minutes post)', 'Swallowing ability'],
          alternativeOptions: ['Glucagon IM', 'IV Dextrose', 'Complex carbohydrates after improvement'],
          protocolReference: 'Diabetic Emergency Protocol - Conscious Hypoglycemia',
          confidenceScore: 75
        }
      ]
    },
    {
      id: 'chest_pain_acs',
      condition: 'Acute Coronary Syndrome',
      criteria: (patient) => {
        const chestPainSymptoms = ['chest pain', 'chest pressure', 'shortness of breath', 'nausea', 'diaphoresis', 'arm pain'];
        const hasSymptoms = patient.symptoms.some(symptom => 
          chestPainSymptoms.some(acsSymptom => symptom.toLowerCase().includes(acsSymptom.toLowerCase()))
        );
        const chestPainChief = patient.chiefComplaint.toLowerCase().includes('chest pain') ||
                              patient.chiefComplaint.toLowerCase().includes('heart attack');
        const ageRisk = patient.age > 35;
        const cardiacHistory = patient.medicalHistory.some(history => 
          history.toLowerCase().includes('heart') || 
          history.toLowerCase().includes('cardiac') ||
          history.toLowerCase().includes('coronary')
        );
        
        return (hasSymptoms || chestPainChief) && (ageRisk || cardiacHistory);
      },
      recommendations: [
        {
          medication: 'Aspirin (Chewable)',
          reasoning: [
            'Antiplatelet therapy reduces clot formation',
            'Proven mortality benefit in acute coronary syndrome',
            'Safe and effective first-line treatment',
            'Should be given as early as possible'
          ],
          dosage: '324mg (4 x 81mg tablets) chewed',
          route: 'Oral (chewed)',
          contraindications: ['Active GI bleeding', 'Known aspirin allergy', 'Children under 16'],
          certificationLevel: 'EMT',
          priority: 'High',
          timeframe: 'Within 10 minutes of recognition',
          warnings: ['Risk of GI bleeding', 'Reye syndrome in children'],
          monitoringParameters: ['Chest pain relief', 'Vital signs', 'Signs of bleeding'],
          alternativeOptions: ['Nitroglycerin (if BP >90)', 'Oxygen therapy', 'IV access'],
          protocolReference: 'Acute Coronary Syndrome Protocol',
          confidenceScore: 85
        },
        {
          medication: 'Nitroglycerin (Sublingual)',
          reasoning: [
            'Reduces cardiac preload and afterload',
            'Improves coronary artery perfusion',
            'Provides symptomatic relief of chest pain',
            'Standard treatment for angina/ACS'
          ],
          dosage: '0.4mg SL every 5 minutes (max 3 doses)',
          route: 'Sublingual',
          contraindications: ['SBP <90 mmHg', 'Recent sildenafil use', 'Right heart failure'],
          certificationLevel: 'AEMT',
          priority: 'Medium',
          timeframe: 'After aspirin administration',
          warnings: ['Check BP before each dose', 'May cause significant hypotension'],
          monitoringParameters: ['Blood pressure', 'Chest pain level', 'Heart rate'],
          alternativeOptions: ['Morphine for pain (Paramedic)', 'Beta-blockers (hospital)', 'Clopidogrel (hospital)'],
          protocolReference: 'Chest Pain Protocol - Nitroglycerin Administration',
          confidenceScore: 78
        }
      ]
    },
    {
      id: 'acute_stroke',
      condition: 'Acute Stroke/CVA',
      criteria: (patient) => {
        const strokeSymptoms = ['altered mental status', 'slurred speech', 'weakness', 'facial droop', 'paralysis', 'speech problems', 'difficulty speaking'];
        const hasStrokeSymptoms = patient.symptoms.some(symptom => 
          strokeSymptoms.some(strokeSymptom => symptom.toLowerCase().includes(strokeSymptom.toLowerCase()))
        );
        const strokeChief = patient.chiefComplaint.toLowerCase().includes('weakness') &&
                           patient.chiefComplaint.toLowerCase().includes('speech') ||
                           patient.chiefComplaint.toLowerCase().includes('stroke');
        const unilateralWeakness = patient.symptoms.some(symptom => 
          symptom.toLowerCase().includes('right-sided') || 
          symptom.toLowerCase().includes('left-sided') ||
          symptom.toLowerCase().includes('one-sided')
        );
        const hypertension = patient.vitals.sbp > 180;
        const ageRisk = patient.age > 45;
        
        return (hasStrokeSymptoms || strokeChief || unilateralWeakness) && (hypertension || ageRisk);
      },
      recommendations: [
        {
          medication: 'Oxygen Therapy',
          reasoning: [
            'Maintain adequate cerebral oxygenation',
            'Prevent hypoxic brain injury',
            'Standard supportive care for stroke patients',
            'No contraindications in stroke care'
          ],
          dosage: '2-4 L/min via nasal cannula (target SpO2 >94%)',
          route: 'Inhalation',
          contraindications: ['None for stroke patients'],
          certificationLevel: 'EMT',
          priority: 'High',
          timeframe: 'Immediately upon recognition',
          warnings: ['Avoid hyperoxia - target normal oxygen saturation'],
          monitoringParameters: ['Oxygen saturation', 'Respiratory status', 'Mental status'],
          alternativeOptions: ['Non-rebreather mask if SpO2 <90%', 'BVM if respiratory failure'],
          protocolReference: 'Stroke Protocol - Supportive Care',
          confidenceScore: 95
        },
        {
          medication: 'IV Normal Saline',
          reasoning: [
            'Maintain adequate blood pressure and perfusion',
            'Prevent dehydration and hypotension',
            'Prepare for potential medication administration',
            'Standard stroke protocol supportive care'
          ],
          dosage: 'IV access, fluid bolus if hypotensive (SBP <120)',
          route: 'Intravenous',
          contraindications: ['Evidence of CHF or pulmonary edema'],
          certificationLevel: 'EMT',
          priority: 'Medium',
          timeframe: 'Within 10 minutes of recognition',
          warnings: ['Do NOT lower blood pressure in acute stroke', 'Avoid fluid overload'],
          monitoringParameters: ['Blood pressure', 'Heart rate', 'Lung sounds', 'Mental status'],
          alternativeOptions: ['Avoid hypotonic solutions', 'Consider glucose check'],
          protocolReference: 'Stroke Protocol - IV Access and Fluids',
          confidenceScore: 88
        },
        {
          medication: 'Dextrose 50% (if hypoglycemic)',
          reasoning: [
            'Rule out hypoglycemia as stroke mimic',
            'Hypoglycemia can present identically to stroke',
            'Reversible cause must be treated immediately',
            'Standard stroke protocol requirement'
          ],
          dosage: '25g (50mL) IV push if glucose <60 mg/dL',
          route: 'Intravenous',
          contraindications: ['Normal blood glucose', 'Hyperglycemia'],
          certificationLevel: 'AEMT',
          priority: 'High',
          timeframe: 'Immediately if hypoglycemic',
          warnings: ['Check glucose first', 'Do not give if glucose >60 mg/dL'],
          monitoringParameters: ['Blood glucose', 'Mental status', 'Neurological response'],
          alternativeOptions: ['Oral glucose if conscious and glucose 60-80', 'Glucagon if no IV access'],
          protocolReference: 'Stroke Protocol - Hypoglycemia Exclusion',
          confidenceScore: 92
        }
      ]
    },
    {
      id: 'severe_asthma',
      condition: 'Severe Asthma/Bronchospasm',
      criteria: (patient) => {
        const asthmaSymptoms = ['wheezing', 'difficulty breathing', 'tight chest', 'cough', 'accessory muscle use'];
        const hasSymptoms = patient.symptoms.some(symptom => 
          asthmaSymptoms.some(asthmaSymptom => symptom.toLowerCase().includes(asthmaSymptom.toLowerCase()))
        );
        const lowOxygen = patient.vitals.spo2 < 92;
        const highRespiratory = patient.vitals.rr > 24;
        const asthmaHistory = patient.medicalHistory.some(history => 
          history.toLowerCase().includes('asthma') || history.toLowerCase().includes('copd')
        );
        
        return hasSymptoms && (lowOxygen || highRespiratory || asthmaHistory);
      },
      recommendations: [
        {
          medication: 'Albuterol (Nebulized)',
          reasoning: [
            'Beta-2 agonist bronchodilator',
            'Rapidly reverses bronchospasm',
            'First-line treatment for acute asthma',
            'Safe and effective for respiratory distress'
          ],
          dosage: '2.5mg in 3mL normal saline, nebulized',
          route: 'Nebulized inhalation',
          contraindications: ['Hypersensitivity to albuterol'],
          certificationLevel: 'AEMT',
          priority: 'High',
          timeframe: 'Within 5 minutes of recognition',
          warnings: ['May cause tachycardia and tremor', 'Monitor heart rate'],
          monitoringParameters: ['Oxygen saturation', 'Respiratory rate', 'Breath sounds', 'Heart rate'],
          alternativeOptions: ['Ipratropium (DuoNeb)', 'Magnesium sulfate (severe cases)', 'Epinephrine (life-threatening)'],
          protocolReference: 'Respiratory Emergency Protocol - Bronchospasm',
          confidenceScore: 90
        }
      ]
    },
    {
      id: 'ventricular_fibrillation',
      condition: 'Ventricular Fibrillation/Pulseless VT',
      criteria: (patient) => {
        const cardiacArrest = patient.vitals.hr === 0 || patient.mentalStatus === 'unresponsive';
        const vfHistory = patient.chiefComplaint.toLowerCase().includes('cardiac arrest') ||
                         patient.chiefComplaint.toLowerCase().includes('down') ||
                         patient.chiefComplaint.toLowerCase().includes('collapse');
        
        return cardiacArrest && vfHistory;
      },
      recommendations: [
        {
          medication: 'Epinephrine (Cardiac Arrest)',
          reasoning: [
            'Increases coronary and cerebral perfusion pressure',
            'Standard medication in cardiac arrest algorithms',
            'Improves likelihood of return of spontaneous circulation',
            'Given every 3-5 minutes during arrest'
          ],
          dosage: '1mg IV/IO every 3-5 minutes',
          route: 'Intravenous or Intraosseous',
          contraindications: ['None in cardiac arrest'],
          certificationLevel: 'AEMT',
          priority: 'High',
          timeframe: 'After first unsuccessful defibrillation',
          warnings: ['Continue high-quality CPR', 'Do not delay defibrillation'],
          monitoringParameters: ['Rhythm analysis', 'Pulse checks', 'End-tidal CO2'],
          alternativeOptions: ['Vasopressin (alternative)', 'Amiodarone (refractory VF/VT)'],
          protocolReference: 'ACLS Cardiac Arrest Protocol',
          confidenceScore: 95
        },
        {
          medication: 'Amiodarone (Refractory VF/VT)',
          reasoning: [
            'Antiarrhythmic for shock-refractory VF/VT',
            'Improves defibrillation success rate',
            'Standard after second unsuccessful shock',
            'More effective than lidocaine in cardiac arrest'
          ],
          dosage: '300mg IV/IO first dose, 150mg second dose',
          route: 'Intravenous or Intraosseous',
          contraindications: ['Bradycardia', 'Heart block (when not in arrest)'],
          certificationLevel: 'Paramedic',
          priority: 'High',
          timeframe: 'After second unsuccessful defibrillation',
          warnings: ['Dilute in 20mL D5W or NS', 'May cause hypotension'],
          monitoringParameters: ['Rhythm conversion', 'Blood pressure (post-ROSC)', 'Pulse quality'],
          alternativeOptions: ['Lidocaine (alternative antiarrhythmic)', 'Magnesium (torsades)'],
          protocolReference: 'ACLS VF/VT Protocol - Medications',
          confidenceScore: 88
        }
      ]
    }
  ];

  generateRecommendations(patient: PatientPresentation): MedicationRecommendation[] {
    console.log('AI Engine: Starting recommendation generation');
    console.log('AI Engine: Patient input:', patient);
    console.log('AI Engine: Available decision trees:', this.decisionTrees.length);
    
    const recommendations: MedicationRecommendation[] = [];
    
    // Evaluate each decision tree
    for (const tree of this.decisionTrees) {
      console.log(`AI Engine: Evaluating tree "${tree.condition}"`);
      try {
        const matches = tree.criteria(patient);
        console.log(`AI Engine: Tree "${tree.condition}" matches:`, matches);
        
        if (matches) {
          console.log(`AI Engine: Adding ${tree.recommendations.length} recommendations from "${tree.condition}"`);
          recommendations.push(...tree.recommendations);
        }
      } catch (error) {
        console.error(`AI Engine: Error evaluating tree "${tree.condition}":`, error);
      }
    }
    
    console.log(`AI Engine: Total recommendations before sorting: ${recommendations.length}`);
    
    // Sort by priority and confidence score
    const sorted = recommendations.sort((a, b) => {
      const priorityOrder = { 'High': 3, 'Medium': 2, 'Low': 1 };
      const priorityDiff = priorityOrder[b.priority] - priorityOrder[a.priority];
      if (priorityDiff !== 0) return priorityDiff;
      return b.confidenceScore - a.confidenceScore;
    });
    
    console.log(`AI Engine: Final recommendations count: ${sorted.length}`);
    return sorted;
  }

  validateRecommendations(
    recommendations: MedicationRecommendation[], 
    patient: PatientPresentation
  ): MedicationRecommendation[] {
    return recommendations.filter(rec => {
      // Check allergies
      const hasAllergy = patient.allergies.some(allergy => 
        rec.medication.toLowerCase().includes(allergy.toLowerCase()) ||
        allergy.toLowerCase().includes(rec.medication.toLowerCase())
      );
      
      if (hasAllergy) {
        rec.warnings.push(`ALLERGY ALERT: Patient allergic to ${patient.allergies.join(', ')}`);
        rec.contraindications.push('Patient has documented allergy');
        rec.confidenceScore = Math.max(0, rec.confidenceScore - 30);
      }
      
      // Age-based contraindications
      if (patient.age < 18 && rec.medication.toLowerCase().includes('aspirin')) {
        rec.contraindications.push('Age <18 years (Reye syndrome risk)');
        rec.confidenceScore = Math.max(0, rec.confidenceScore - 40);
      }
      
      // Vital signs contraindications
      if (patient.vitals.sbp < 90 && rec.medication.toLowerCase().includes('nitroglycerin')) {
        rec.contraindications.push('Hypotension (SBP <90 mmHg)');
        rec.confidenceScore = Math.max(0, rec.confidenceScore - 50);
      }
      
      return rec.confidenceScore > 20; // Minimum confidence threshold
    });
  }

  getInteractionWarnings(recommendations: MedicationRecommendation[], patient: PatientPresentation): string[] {
    const warnings: string[] = [];
    
    // Check for drug interactions with current medications
    const currentMeds = patient.currentMedications.map(med => med.toLowerCase());
    
    recommendations.forEach(rec => {
      const medication = rec.medication.toLowerCase();
      
      // Common interactions
      if (medication.includes('aspirin') && currentMeds.some(med => med.includes('warfarin'))) {
        warnings.push('WARNING: Aspirin + Warfarin increases bleeding risk');
      }
      
      if (medication.includes('nitroglycerin') && currentMeds.some(med => 
        med.includes('sildenafil') || med.includes('tadalafil') || med.includes('vardenafil')
      )) {
        warnings.push('WARNING: Nitroglycerin + ED medications can cause severe hypotension');
      }
      
      if (medication.includes('epinephrine') && currentMeds.some(med => 
        med.includes('beta blocker') || med.includes('propranolol') || med.includes('metoprolol')
      )) {
        warnings.push('CAUTION: Epinephrine with beta blockers may cause paradoxical hypertension');
      }
    });
    
    return warnings;
  }

  generateClinicalReasoning(
    patient: PatientPresentation, 
    recommendations: MedicationRecommendation[]
  ): string {
    const reasoning = [];
    
    reasoning.push(`Patient Assessment: ${patient.age}yo with chief complaint of "${patient.chiefComplaint}"`);
    reasoning.push(`Vital Signs: HR ${patient.vitals.hr}, BP ${patient.vitals.sbp}/${patient.vitals.dbp}, RR ${patient.vitals.rr}, SpO2 ${patient.vitals.spo2}%`);
    
    if (patient.symptoms.length > 0) {
      reasoning.push(`Key Symptoms: ${patient.symptoms.join(', ')}`);
    }
    
    if (patient.medicalHistory.length > 0) {
      reasoning.push(`Medical History: ${patient.medicalHistory.join(', ')}`);
    }
    
    if (recommendations.length > 0) {
      reasoning.push(`Primary Recommendation: ${recommendations[0].medication} (${recommendations[0].priority} priority, ${recommendations[0].confidenceScore}% confidence)`);
      reasoning.push(`Clinical Indication: ${recommendations[0].reasoning[0]}`);
    }
    
    return reasoning.join('\n');
  }
}

export const aiRecommendationEngine = new AIRecommendationEngine();

// Predefined patient scenarios for testing
export const testScenarios: PatientPresentation[] = [
  {
    age: 28,
    weight: 70,
    symptoms: ['facial swelling', 'hives', 'difficulty breathing', 'hoarse voice'],
    vitals: { hr: 125, sbp: 88, dbp: 52, rr: 28, spo2: 89 },
    allergies: ['Shellfish'],
    currentMedications: [],
    medicalHistory: [],
    chiefComplaint: 'Allergic reaction after eating at restaurant',
    mentalStatus: 'anxious but alert',
    skinCondition: ['flushed', 'hives on arms and chest']
  },
  {
    age: 45,
    symptoms: ['confusion', 'diaphoresis', 'weakness', 'shakiness'],
    vitals: { hr: 110, sbp: 140, dbp: 90, rr: 20, spo2: 98, glucometer: 35 },
    allergies: [],
    currentMedications: ['Insulin', 'Metformin'],
    medicalHistory: ['Type 1 Diabetes'],
    chiefComplaint: 'Found confused and sweaty by family',
    mentalStatus: 'confused, disoriented',
    skinCondition: ['diaphoretic', 'pale']
  },
  {
    age: 62,
    symptoms: ['chest pain', 'shortness of breath', 'nausea', 'diaphoresis'],
    vitals: { hr: 95, sbp: 150, dbp: 95, rr: 22, spo2: 96 },
    allergies: [],
    currentMedications: ['Lisinopril', 'Atorvastatin'],
    medicalHistory: ['Hypertension', 'High cholesterol'],
    chiefComplaint: 'Crushing chest pain started 30 minutes ago',
    painScale: 8,
    mentalStatus: 'alert and oriented',
    skinCondition: ['diaphoretic', 'pale']
  },
  {
    age: 24,
    symptoms: ['severe asthma exacerbation', 'tripod positioning', 'accessory muscle use', 'peak flow 150'],
    vitals: { hr: 140, sbp: 160, dbp: 95, rr: 35, spo2: 84 },
    allergies: ['Penicillin'],
    currentMedications: ['Albuterol inhaler', 'Singulair'],
    medicalHistory: ['Asthma since childhood'],
    chiefComplaint: 'Severe asthma attack, unable to speak full sentences',
    mentalStatus: 'alert but anxious',
    skinCondition: ['cyanotic', 'diaphoretic']
  },
  {
    age: 78,
    symptoms: ['altered mental status', 'slurred speech', 'right-sided weakness', 'facial droop'],
    vitals: { hr: 88, sbp: 190, dbp: 110, rr: 20, spo2: 95, glucometer: 120 },
    allergies: ['Aspirin'],
    currentMedications: ['Warfarin', 'Metoprolol', 'Lisinopril'],
    medicalHistory: ['Atrial fibrillation', 'Hypertension', 'Previous stroke'],
    chiefComplaint: 'Sudden onset weakness and speech problems 45 minutes ago',
    mentalStatus: 'confused, follows simple commands',
    skinCondition: ['normal color']
  },
  {
    age: 35,
    symptoms: ['continuous seizure', 'hyperthermia', 'cyanosis', 'profuse salivation'],
    vitals: { hr: 125, sbp: 180, dbp: 110, rr: 18, spo2: 88, temp: 101.2 },
    allergies: ['Unknown'],
    currentMedications: ['Unknown'],
    medicalHistory: ['No known seizure history'],
    chiefComplaint: 'Continuous seizure activity for 8 minutes',
    mentalStatus: 'unresponsive during seizure',
    skinCondition: ['cyanotic', 'diaphoretic']
  },
  {
    age: 52,
    symptoms: ['severe bradycardia', 'weakness', 'dizziness', 'syncope episodes'],
    vitals: { hr: 35, sbp: 80, dbp: 50, rr: 16, spo2: 94 },
    allergies: ['NKDA'],
    currentMedications: ['Metoprolol', 'Digoxin', 'Furosemide'],
    medicalHistory: ['Heart failure', 'Hypertension'],
    chiefComplaint: 'Feeling weak and dizzy, had two fainting episodes',
    mentalStatus: 'alert but weak',
    skinCondition: ['pale', 'cool']
  },
  {
    age: 29,
    symptoms: ['acute psychosis', 'agitation', 'violent behavior', 'hyperthermia'],
    vitals: { hr: 150, sbp: 200, dbp: 120, rr: 25, spo2: 98, temp: 103.5 },
    allergies: ['Unknown'],
    currentMedications: ['Unknown'],
    medicalHistory: ['Substance abuse history'],
    chiefComplaint: 'Agitated and violent, found by police acting erratically',
    mentalStatus: 'agitated, paranoid, combative',
    skinCondition: ['flushed', 'diaphoretic', 'hyperthermic']
  },
  {
    age: 65,
    symptoms: ['severe chest pain', 'pulmonary edema', 'JVD', 'bilateral rales'],
    vitals: { hr: 110, sbp: 200, dbp: 120, rr: 30, spo2: 82 },
    allergies: ['Sulfa drugs'],
    currentMedications: ['Carvedilol', 'Lisinopril', 'Furosemide 40mg daily'],
    medicalHistory: ['Congestive heart failure', 'Previous MI'],
    chiefComplaint: 'Severe shortness of breath, cannot lie flat',
    mentalStatus: 'alert and oriented',
    skinCondition: ['pale', 'diaphoretic', 'peripheral edema']
  },
  {
    age: 19,
    symptoms: ['opioid overdose', 'pinpoint pupils', 'respiratory depression', 'unresponsive'],
    vitals: { hr: 45, sbp: 90, dbp: 60, rr: 6, spo2: 78 },
    allergies: ['Unknown'],
    currentMedications: ['Unknown'],
    medicalHistory: ['Unknown'],
    chiefComplaint: 'Found unresponsive in bathroom, suspected overdose',
    mentalStatus: 'unresponsive to voice, responds to pain',
    skinCondition: ['cyanotic', 'cool']
  },
  {
    age: 41,
    symptoms: ['massive hemorrhage', 'gunshot wound', 'shock', 'altered mental status'],
    vitals: { hr: 135, sbp: 70, dbp: 40, rr: 28, spo2: 88 },
    allergies: ['NKDA'],
    currentMedications: ['None'],
    medicalHistory: ['None'],
    chiefComplaint: 'Gunshot wound to abdomen with significant blood loss',
    mentalStatus: 'confused, follows commands',
    skinCondition: ['pale', 'cool', 'diaphoretic']
  },
  {
    age: 33,
    symptoms: ['diabetic ketoacidosis', 'Kussmaul respirations', 'fruity breath', 'dehydration'],
    vitals: { hr: 130, sbp: 85, dbp: 50, rr: 35, spo2: 98, glucometer: 450 },
    allergies: ['NKDA'],
    currentMedications: ['Insulin', 'Metformin'],
    medicalHistory: ['Type 1 Diabetes'],
    chiefComplaint: 'Nausea, vomiting, and deep breathing for 2 days',
    mentalStatus: 'lethargic but responsive',
    skinCondition: ['dry', 'poor skin turgor']
  },
  {
    age: 7,
    weight: 25,
    symptoms: ['febrile seizure', 'high fever', 'post-ictal state'],
    vitals: { hr: 160, sbp: 90, dbp: 60, rr: 30, spo2: 96, temp: 104.2 },
    allergies: ['NKDA'],
    currentMedications: ['None'],
    medicalHistory: ['Previously healthy'],
    chiefComplaint: 'Child had seizure at home, very high fever',
    mentalStatus: 'post-ictal, gradually improving',
    skinCondition: ['flushed', 'hot', 'dry']
  },
  {
    age: 26,
    symptoms: ['preeclampsia', 'severe headache', 'visual changes', 'epigastric pain'],
    vitals: { hr: 100, sbp: 180, dbp: 120, rr: 22, spo2: 98 },
    allergies: ['NKDA'],
    currentMedications: ['Prenatal vitamins'],
    medicalHistory: ['32 weeks pregnant', 'Previous normal pregnancy'],
    chiefComplaint: 'Severe headache and seeing spots, 32 weeks pregnant',
    mentalStatus: 'alert and oriented',
    skinCondition: ['normal', 'mild edema']
  },
  {
    age: 88,
    symptoms: ['massive MI', 'cardiogenic shock', 'severe chest pain', 'pulmonary edema'],
    vitals: { hr: 125, sbp: 70, dbp: 40, rr: 32, spo2: 85 },
    allergies: ['NKDA'],
    currentMedications: ['Multiple cardiac medications'],
    medicalHistory: ['Previous MI', 'CHF', 'Diabetes'],
    chiefComplaint: 'Severe chest pain with difficulty breathing',
    mentalStatus: 'alert but distressed',
    skinCondition: ['pale', 'cool', 'diaphoretic']
  },
  {
    age: 44,
    symptoms: ['hyperkalemia', 'muscle weakness', 'peaked T-waves on ECG'],
    vitals: { hr: 45, sbp: 90, dbp: 60, rr: 16, spo2: 96 },
    allergies: ['NKDA'],
    currentMedications: ['Lisinopril', 'Kayexalate', 'Phosphorus binders'],
    medicalHistory: ['End-stage renal disease', 'Dialysis patient'],
    chiefComplaint: 'Weakness and fatigue, missed dialysis yesterday',
    mentalStatus: 'alert and oriented',
    skinCondition: ['normal']
  },
  {
    age: 16,
    symptoms: ['acetaminophen overdose', 'nausea', 'vomiting', 'altered mental status'],
    vitals: { hr: 110, sbp: 100, dbp: 70, rr: 20, spo2: 98 },
    allergies: ['NKDA'],
    currentMedications: ['None'],
    medicalHistory: ['Depression'],
    chiefComplaint: 'Took entire bottle of Tylenol 4 hours ago',
    mentalStatus: 'depressed but cooperative',
    skinCondition: ['normal']
  },
  {
    age: 58,
    symptoms: ['polymorphic VT', 'Torsades de Pointes', 'syncope', 'palpitations'],
    vitals: { hr: 180, sbp: 70, dbp: 40, rr: 24, spo2: 88 },
    allergies: ['NKDA'],
    currentMedications: ['Quinidine', 'Furosemide', 'Potassium supplements'],
    medicalHistory: ['Atrial fibrillation', 'Heart failure'],
    chiefComplaint: 'Recurrent fainting spells with fast heart rate',
    mentalStatus: 'alert between episodes',
    skinCondition: ['pale']
  },
  {
    age: 72,
    symptoms: ['COPD exacerbation', 'pursed-lip breathing', 'tripod position', 'accessory muscles'],
    vitals: { hr: 115, sbp: 155, dbp: 90, rr: 28, spo2: 88, temp: 99.1 },
    allergies: ['Shellfish'],
    currentMedications: ['Albuterol inhaler', 'Prednisone', 'Theophylline'],
    medicalHistory: ['COPD', 'Former smoker'],
    chiefComplaint: 'Severe shortness of breath for 3 days, getting worse',
    mentalStatus: 'alert and oriented',
    skinCondition: ['cyanotic lips']
  },
  {
    age: 39,
    symptoms: ['alcohol withdrawal', 'delirium tremens', 'hallucinations', 'tremors'],
    vitals: { hr: 140, sbp: 180, dbp: 110, rr: 24, spo2: 96, temp: 101.8 },
    allergies: ['NKDA'],
    currentMedications: ['None'],
    medicalHistory: ['Chronic alcoholism'],
    chiefComplaint: 'Seeing things, shaking, stopped drinking 3 days ago',
    mentalStatus: 'confused, agitated, hallucinating',
    skinCondition: ['diaphoretic', 'tremulous']
  },
  {
    age: 31,
    symptoms: ['narcotic withdrawal', 'severe pain', 'nausea', 'muscle cramps'],
    vitals: { hr: 120, sbp: 160, dbp: 100, rr: 22, spo2: 98 },
    allergies: ['NKDA'],
    currentMedications: ['None'],
    medicalHistory: ['Opioid addiction'],
    chiefComplaint: 'Severe withdrawal symptoms, last used heroin 24 hours ago',
    mentalStatus: 'alert and oriented, anxious',
    skinCondition: ['diaphoretic', 'goose bumps']
  },
  {
    age: 14,
    weight: 45,
    symptoms: ['status asthmaticus', 'silent chest', 'extreme distress', 'fatigue'],
    vitals: { hr: 150, sbp: 140, dbp: 90, rr: 40, spo2: 80 },
    allergies: ['Tree nuts'],
    currentMedications: ['Multiple inhalers', 'Prednisone'],
    medicalHistory: ['Severe asthma'],
    chiefComplaint: 'Severe asthma attack not responding to home medications',
    mentalStatus: 'alert but exhausted',
    skinCondition: ['cyanotic', 'accessory muscle use']
  },
  {
    age: 25,
    symptoms: ['excited delirium', 'hyperthermia', 'superhuman strength', 'paranoia'],
    vitals: { hr: 180, sbp: 220, dbp: 130, rr: 30, spo2: 95, temp: 105.8 },
    allergies: ['Unknown'],
    currentMedications: ['Unknown'],
    medicalHistory: ['Stimulant abuse'],
    chiefComplaint: 'Extremely agitated, breaking restraints, hyperthermic',
    mentalStatus: 'extremely agitated, paranoid, combative',
    skinCondition: ['hot', 'flushed', 'profusely diaphoretic']
  },
  {
    age: 67,
    symptoms: ['sudden cardiac arrest', 'ventricular fibrillation', 'unresponsive', 'cyanotic'],
    vitals: { hr: 0, sbp: 0, dbp: 0, rr: 0, spo2: 0 },
    allergies: ['NKDA'],
    currentMedications: ['Aspirin', 'Metoprolol', 'Lisinopril'],
    medicalHistory: ['Coronary artery disease', 'Previous MI'],
    chiefComplaint: 'Witnessed cardiac arrest, bystander CPR in progress',
    mentalStatus: 'unresponsive, pulseless',
    skinCondition: ['cyanotic', 'mottled']
  },
  {
    age: 54,
    symptoms: ['organophosphate poisoning', 'excessive salivation', 'miosis', 'muscle fasciculations'],
    vitals: { hr: 55, sbp: 90, dbp: 60, rr: 8, spo2: 82 },
    allergies: ['NKDA'],
    currentMedications: ['None'],
    medicalHistory: ['Farm worker'],
    chiefComplaint: 'Pesticide exposure, excessive sweating and drooling',
    mentalStatus: 'confused, agitated',
    skinCondition: ['diaphoretic', 'pale', 'excessive salivation']
  }
];