import { 
  users, protocols, medications, patientMedications, simulations, userProgress, assessments,
  type User, type InsertUser,
  type Protocol, type InsertProtocol,
  type Medication, type InsertMedication,
  type PatientMedication, type InsertPatientMedication,
  type Simulation, type InsertSimulation,
  type UserProgress, type InsertUserProgress,
  type Assessment, type InsertAssessment
} from "@shared/schema";
import { db } from "./db";
import { eq, ilike } from "drizzle-orm";
import { protocolsData } from "../client/src/data/protocols";
import { medicationsData } from "../client/src/data/medications";
import { patientMedicationsData } from "../client/src/data/patient-medications";
import { simulationsData } from "../client/src/data/simulations";

export interface IStorage {
  // Users
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Protocols
  getProtocols(): Promise<Protocol[]>;
  getProtocol(id: number): Promise<Protocol | undefined>;
  getProtocolsByCategory(category: string): Promise<Protocol[]>;
  createProtocol(protocol: InsertProtocol): Promise<Protocol>;

  // Medications
  getMedications(): Promise<Medication[]>;
  getMedication(id: number): Promise<Medication | undefined>;
  getMedicationsByCategory(category: string): Promise<Medication[]>;
  searchMedications(query: string): Promise<Medication[]>;
  createMedication(medication: InsertMedication): Promise<Medication>;

  // Patient Medications
  getPatientMedications(): Promise<PatientMedication[]>;
  getPatientMedication(id: number): Promise<PatientMedication | undefined>;
  getPatientMedicationsByCategory(category: string): Promise<PatientMedication[]>;
  searchPatientMedications(query: string): Promise<PatientMedication[]>;
  getHerbalMedications(): Promise<PatientMedication[]>;
  createPatientMedication(medication: InsertPatientMedication): Promise<PatientMedication>;

  // Simulations
  getSimulations(): Promise<Simulation[]>;
  getSimulation(id: number): Promise<Simulation | undefined>;
  getSimulationsByDifficulty(difficulty: string): Promise<Simulation[]>;
  createSimulation(simulation: InsertSimulation): Promise<Simulation>;

  // User Progress
  getUserProgress(userId: number): Promise<UserProgress[]>;
  getUserProgressByCategory(userId: number, category: string): Promise<UserProgress[]>;
  createUserProgress(progress: InsertUserProgress): Promise<UserProgress>;
  updateUserProgress(id: number, updates: Partial<UserProgress>): Promise<UserProgress>;

  // Assessments
  getUserAssessments(userId: number): Promise<Assessment[]>;
  createAssessment(assessment: InsertAssessment): Promise<Assessment>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User> = new Map();
  private protocols: Map<number, Protocol> = new Map();
  private medications: Map<number, Medication> = new Map();
  private patientMedications: Map<number, PatientMedication> = new Map();
  private simulations: Map<number, Simulation> = new Map();
  private userProgress: Map<number, UserProgress> = new Map();
  private assessments: Map<number, Assessment> = new Map();
  
  private currentUserId = 1;
  private currentProtocolId = 1;
  private currentMedicationId = 1;
  private currentPatientMedicationId = 1;
  private currentSimulationId = 1;
  private currentProgressId = 1;
  private currentAssessmentId = 1;

  constructor() {
    this.seedData();
  }

  private seedData() {
    // Seed sample user
    const sampleUser: User = {
      id: 1,
      username: "sarah.johnson",
      password: "password123",
      name: "Dr. Sarah Johnson",
      certification: "Paramedic - NREMT-P",
      createdAt: new Date(),
    };
    this.users.set(1, sampleUser);
    this.currentUserId = 2;

    // Seed protocols
    const chestPainProtocol: Protocol = {
      id: 1,
      name: "Chest Pain Assessment",
      category: "cardiac",
      severity: "critical",
      description: "Comprehensive chest pain evaluation and treatment protocol",
      steps: [
        { step: 1, title: "Initial Assessment", items: ["Primary survey (ABCDE)", "Vital signs & SpO2", "12-lead ECG", "Pain scale (OPQRST)"] },
        { step: 2, title: "Risk Stratification", items: ["HEART score calculation", "STEMI identification", "High-risk features", "Differential diagnosis"] },
        { step: 3, title: "Treatment & Transport", items: ["Oxygen if indicated", "Nitroglycerine protocol", "Aspirin administration", "Destination selection"] }
      ],
      medications: ["nitroglycerin", "aspirin", "morphine"],
      guidelines: "AHA/NREMT",
      lastUpdated: new Date(),
    };
    this.protocols.set(1, chestPainProtocol);
    this.currentProtocolId = 2;

    // Seed medications
    const medications = [
      {
        id: 1,
        name: "Epinephrine",
        genericName: "epinephrine",
        category: "cardiac",
        dosage: "1mg IV/IO",
        route: "IV/IO",
        indications: ["Cardiac arrest", "Anaphylaxis", "Severe asthma"],
        contraindications: ["None in cardiac arrest"],
        sideEffects: ["Tachycardia", "Hypertension", "Anxiety"],
        pediatricDosage: "0.01mg/kg IV/IO",
      },
      {
        id: 2,
        name: "Amiodarone",
        genericName: "amiodarone hydrochloride",
        category: "cardiac",
        dosage: "300mg IV",
        route: "IV",
        indications: ["V-fib", "V-tach", "Atrial fibrillation"],
        contraindications: ["Bradycardia", "Heart block"],
        sideEffects: ["Hypotension", "Bradycardia"],
        pediatricDosage: "5mg/kg IV",
      }
    ];
    medications.forEach(med => this.medications.set(med.id, med as Medication));
    this.currentMedicationId = 3;
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(user => user.username === username);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const user: User = {
      ...insertUser,
      id: this.currentUserId++,
      createdAt: new Date(),
    };
    this.users.set(user.id, user);
    return user;
  }

  // Protocol methods
  async getProtocols(): Promise<Protocol[]> {
    return Array.from(this.protocols.values());
  }

  async getProtocol(id: number): Promise<Protocol | undefined> {
    return this.protocols.get(id);
  }

  async getProtocolsByCategory(category: string): Promise<Protocol[]> {
    return Array.from(this.protocols.values()).filter(p => p.category === category);
  }

  async createProtocol(insertProtocol: InsertProtocol): Promise<Protocol> {
    const protocol: Protocol = {
      ...insertProtocol,
      id: this.currentProtocolId++,
      lastUpdated: new Date(),
    };
    this.protocols.set(protocol.id, protocol);
    return protocol;
  }

  // Medication methods
  async getMedications(): Promise<Medication[]> {
    return Array.from(this.medications.values());
  }

  async getMedication(id: number): Promise<Medication | undefined> {
    return this.medications.get(id);
  }

  async getMedicationsByCategory(category: string): Promise<Medication[]> {
    return Array.from(this.medications.values()).filter(m => m.category === category);
  }

  async searchMedications(query: string): Promise<Medication[]> {
    const lowerQuery = query.toLowerCase();
    return Array.from(this.medications.values()).filter(m => 
      m.name.toLowerCase().includes(lowerQuery) ||
      m.genericName?.toLowerCase().includes(lowerQuery) ||
      m.category.toLowerCase().includes(lowerQuery)
    );
  }

  async createMedication(insertMedication: InsertMedication): Promise<Medication> {
    const medication: Medication = {
      ...insertMedication,
      id: this.currentMedicationId++,
      genericName: insertMedication.genericName ?? null,
      pediatricDosage: insertMedication.pediatricDosage ?? null,
      administrationNotes: insertMedication.administrationNotes ?? null,
    };
    this.medications.set(medication.id, medication);
    return medication;
  }

  // Patient Medication methods
  async getPatientMedications(): Promise<PatientMedication[]> {
    return Array.from(this.patientMedications.values());
  }

  async getPatientMedication(id: number): Promise<PatientMedication | undefined> {
    return this.patientMedications.get(id);
  }

  async getPatientMedicationsByCategory(category: string): Promise<PatientMedication[]> {
    return Array.from(this.patientMedications.values()).filter(m => m.category === category);
  }

  async searchPatientMedications(query: string): Promise<PatientMedication[]> {
    const lowerQuery = query.toLowerCase();
    return Array.from(this.patientMedications.values()).filter(m => 
      m.name.toLowerCase().includes(lowerQuery) ||
      m.genericName?.toLowerCase().includes(lowerQuery) ||
      m.brandNames.some((brand: string) => brand.toLowerCase().includes(lowerQuery)) ||
      m.category.toLowerCase().includes(lowerQuery)
    );
  }

  async getHerbalMedications(): Promise<PatientMedication[]> {
    return Array.from(this.patientMedications.values()).filter(m => m.isHerbal);
  }

  async createPatientMedication(insertPatientMedication: InsertPatientMedication): Promise<PatientMedication> {
    const patientMedication: PatientMedication = {
      ...insertPatientMedication,
      id: this.currentPatientMedicationId++,
      genericName: insertPatientMedication.genericName ?? null,
      commonDose: insertPatientMedication.commonDose ?? null,
      toxicitySymptoms: insertPatientMedication.toxicitySymptoms ?? null,
      reversal: insertPatientMedication.reversal ?? null,
    };
    this.patientMedications.set(patientMedication.id, patientMedication);
    return patientMedication;
  }

  // Simulation methods
  async getSimulations(): Promise<Simulation[]> {
    return Array.from(this.simulations.values());
  }

  async getSimulation(id: number): Promise<Simulation | undefined> {
    return this.simulations.get(id);
  }

  async getSimulationsByDifficulty(difficulty: string): Promise<Simulation[]> {
    return Array.from(this.simulations.values()).filter(s => s.difficulty === difficulty);
  }

  async createSimulation(insertSimulation: InsertSimulation): Promise<Simulation> {
    const simulation: Simulation = {
      ...insertSimulation,
      id: this.currentSimulationId++,
    };
    this.simulations.set(simulation.id, simulation);
    return simulation;
  }

  // User Progress methods
  async getUserProgress(userId: number): Promise<UserProgress[]> {
    return Array.from(this.userProgress.values()).filter(p => p.userId === userId);
  }

  async getUserProgressByCategory(userId: number, category: string): Promise<UserProgress[]> {
    return Array.from(this.userProgress.values()).filter(p => 
      p.userId === userId && p.category === category
    );
  }

  async createUserProgress(insertProgress: InsertUserProgress): Promise<UserProgress> {
    const progress: UserProgress = {
      ...insertProgress,
      id: this.currentProgressId++,
      simulationId: insertProgress.simulationId ?? null,
      protocolId: insertProgress.protocolId ?? null,
      score: insertProgress.score ?? null,
      completed: insertProgress.completed ?? null,
      timeSpent: insertProgress.timeSpent ?? null,
      completedAt: insertProgress.completed ? new Date() : null,
    };
    this.userProgress.set(progress.id, progress);
    return progress;
  }

  async updateUserProgress(id: number, updates: Partial<UserProgress>): Promise<UserProgress> {
    const existing = this.userProgress.get(id);
    if (!existing) throw new Error("Progress not found");
    
    const updated: UserProgress = {
      ...existing,
      ...updates,
      completedAt: updates.completed ? new Date() : existing.completedAt,
    };
    this.userProgress.set(id, updated);
    return updated;
  }

  // Assessment methods
  async getUserAssessments(userId: number): Promise<Assessment[]> {
    return Array.from(this.assessments.values()).filter(a => a.userId === userId);
  }

  async createAssessment(insertAssessment: InsertAssessment): Promise<Assessment> {
    const assessment: Assessment = {
      ...insertAssessment,
      id: this.currentAssessmentId++,
      outcome: insertAssessment.outcome ?? null,
      createdAt: new Date(),
    };
    this.assessments.set(assessment.id, assessment);
    return assessment;
  }
}

// Database Storage Implementation
export class DatabaseStorage implements IStorage {
  private ensureDb() {
    if (!db) {
      throw new Error('Database connection not available');
    }
    return db;
  }

  async getUser(id: number): Promise<User | undefined> {
    const database = this.ensureDb();
    const [user] = await database.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const database = this.ensureDb();
    const [user] = await database.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const database = this.ensureDb();
    const [user] = await database
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async getProtocols(): Promise<Protocol[]> {
    return db.select().from(protocols);
  }

  async getProtocol(id: number): Promise<Protocol | undefined> {
    const [protocol] = await db.select().from(protocols).where(eq(protocols.id, id));
    return protocol || undefined;
  }

  async getProtocolsByCategory(category: string): Promise<Protocol[]> {
    return db.select().from(protocols).where(eq(protocols.category, category));
  }

  async createProtocol(insertProtocol: InsertProtocol): Promise<Protocol> {
    const [protocol] = await db
      .insert(protocols)
      .values(insertProtocol)
      .returning();
    return protocol;
  }

  async getMedications(): Promise<Medication[]> {
    return db.select().from(medications);
  }

  async getMedication(id: number): Promise<Medication | undefined> {
    const [medication] = await db.select().from(medications).where(eq(medications.id, id));
    return medication || undefined;
  }

  async getMedicationsByCategory(category: string): Promise<Medication[]> {
    return db.select().from(medications).where(eq(medications.category, category));
  }

  async searchMedications(query: string): Promise<Medication[]> {
    return db.select().from(medications).where(
      ilike(medications.name, `%${query}%`)
    );
  }

  async createMedication(insertMedication: InsertMedication): Promise<Medication> {
    const [medication] = await db
      .insert(medications)
      .values(insertMedication)
      .returning();
    return medication;
  }

  // Patient Medication methods
  async getPatientMedications(): Promise<PatientMedication[]> {
    return db.select().from(patientMedications);
  }

  async getPatientMedication(id: number): Promise<PatientMedication | undefined> {
    const [patientMedication] = await db.select().from(patientMedications).where(eq(patientMedications.id, id));
    return patientMedication || undefined;
  }

  async getPatientMedicationsByCategory(category: string): Promise<PatientMedication[]> {
    return db.select().from(patientMedications).where(eq(patientMedications.category, category));
  }

  async searchPatientMedications(query: string): Promise<PatientMedication[]> {
    return db.select().from(patientMedications).where(
      ilike(patientMedications.name, `%${query}%`)
    );
  }

  async getHerbalMedications(): Promise<PatientMedication[]> {
    return db.select().from(patientMedications).where(eq(patientMedications.isHerbal, true));
  }

  async createPatientMedication(insertPatientMedication: InsertPatientMedication): Promise<PatientMedication> {
    const [patientMedication] = await db
      .insert(patientMedications)
      .values(insertPatientMedication)
      .returning();
    return patientMedication;
  }

  async getSimulations(): Promise<Simulation[]> {
    return db.select().from(simulations);
  }

  async getSimulation(id: number): Promise<Simulation | undefined> {
    const [simulation] = await db.select().from(simulations).where(eq(simulations.id, id));
    return simulation || undefined;
  }

  async getSimulationsByDifficulty(difficulty: string): Promise<Simulation[]> {
    return db.select().from(simulations).where(eq(simulations.difficulty, difficulty));
  }

  async createSimulation(insertSimulation: InsertSimulation): Promise<Simulation> {
    const [simulation] = await db
      .insert(simulations)
      .values(insertSimulation)
      .returning();
    return simulation;
  }

  async getUserProgress(userId: number): Promise<UserProgress[]> {
    return db.select().from(userProgress).where(eq(userProgress.userId, userId));
  }

  async getUserProgressByCategory(userId: number, category: string): Promise<UserProgress[]> {
    return db.select().from(userProgress).where(
      eq(userProgress.userId, userId)
    );
  }

  async createUserProgress(insertProgress: InsertUserProgress): Promise<UserProgress> {
    const [progress] = await db
      .insert(userProgress)
      .values(insertProgress)
      .returning();
    return progress;
  }

  async updateUserProgress(id: number, updates: Partial<UserProgress>): Promise<UserProgress> {
    const [progress] = await db
      .update(userProgress)
      .set(updates)
      .where(eq(userProgress.id, id))
      .returning();
    return progress;
  }

  async getUserAssessments(userId: number): Promise<Assessment[]> {
    return db.select().from(assessments).where(eq(assessments.userId, userId));
  }

  async createAssessment(insertAssessment: InsertAssessment): Promise<Assessment> {
    const [assessment] = await db
      .insert(assessments)
      .values(insertAssessment)
      .returning();
    return assessment;
  }

  // Seed data method for initial setup
  async seedData(): Promise<void> {
    try {
      // Check if data already exists
      const existingProtocols = await this.getProtocols();
      if (existingProtocols.length > 0) {
        return; // Data already seeded
      }
    } catch (error) {
      // If we can't check existing data, proceed with seeding
      console.warn('Could not check existing data, proceeding with seed:', error);
    }

    // Seed sample user
    await this.createUser({
      username: "admin",
      password: "hashed_password",
      name: "Admin User",
      certification: "paramedic"
    });

    // Seed protocols
    for (const protocolData of protocolsData) {
      await this.createProtocol({
        name: protocolData.name,
        category: protocolData.category,
        severity: protocolData.severity,
        description: protocolData.description,
        steps: protocolData.steps as any,
        medications: protocolData.medications as any,
        guidelines: protocolData.guidelines
      });
    }

    // Seed medications
    for (const medicationData of medicationsData) {
      await this.createMedication({
        name: medicationData.name,
        category: medicationData.category,
        dosage: medicationData.dosage,
        route: medicationData.route,
        indications: medicationData.indications as any,
        contraindications: medicationData.contraindications as any,
        sideEffects: medicationData.sideEffects as any,
        genericName: medicationData.genericName,
        pediatricDosage: medicationData.pediatricDosage,
        certificationLevel: medicationData.certificationLevel,
        administrationNotes: medicationData.administrationNotes
      });
    }

    // Seed patient medications
    for (const patientMedData of patientMedicationsData) {
      await this.createPatientMedication({
        name: patientMedData.name,
        brandNames: patientMedData.brandNames as any,
        genericName: patientMedData.genericName,
        category: patientMedData.category,
        commonDose: patientMedData.commonDose,
        use: patientMedData.use,
        emsRelevantInfo: patientMedData.emsRelevantInfo,
        interactions: patientMedData.interactions as any,
        toxicitySymptoms: patientMedData.toxicitySymptoms as any,
        reversal: patientMedData.reversal,
        isHerbal: patientMedData.isHerbal
      });
    }

    // Seed simulations
    for (const simulationData of simulationsData) {
      await this.createSimulation({
        category: simulationData.category,
        description: simulationData.description,
        title: simulationData.title,
        difficulty: simulationData.difficulty,
        estimatedTime: simulationData.estimatedTime,
        scenario: simulationData.scenario as any,
        learningObjectives: simulationData.learningObjectives as any
      });
    }
  }
}

// Create storage instance with fallback handling
let storage: IStorage;

// Use memory storage to avoid database connection issues
console.log('Using memory storage for stable operation');
storage = new MemStorage();

export { storage };
