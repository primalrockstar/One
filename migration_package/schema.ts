import { pgTable, text, serial, integer, boolean, jsonb, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  name: text("name").notNull(),
  certification: text("certification").notNull(), // EMT, AEMT, Paramedic, etc.
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const protocols = pgTable("protocols", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  category: text("category").notNull(), // cardiac, trauma, respiratory, neurological
  severity: text("severity").notNull(), // critical, urgent, routine
  description: text("description").notNull(),
  steps: jsonb("steps").notNull(), // Array of protocol steps
  medications: jsonb("medications").notNull(), // Associated medications
  guidelines: text("guidelines").notNull(), // AHA, NREMT, etc.
  lastUpdated: timestamp("last_updated").defaultNow().notNull(),
});

export const medications = pgTable("medications", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  genericName: text("generic_name"),
  category: text("category").notNull(), // cardiac, analgesic, respiratory, etc.
  dosage: text("dosage").notNull(),
  route: text("route").notNull(), // IV, IM, PO, etc.
  indications: jsonb("indications").notNull(), // Array of indications
  contraindications: jsonb("contraindications").notNull(),
  sideEffects: jsonb("side_effects").notNull(),
  pediatricDosage: text("pediatric_dosage"),
  certificationLevel: text("certification_level").notNull(), // EMT, AEMT, Paramedic
  administrationNotes: text("administration_notes"),
});

export const patientMedications = pgTable("patient_medications", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  brandNames: jsonb("brand_names").notNull(), // Array of brand names
  genericName: text("generic_name"),
  category: text("category").notNull(), // cardiac, analgesic, diabetes, etc.
  commonDose: text("common_dose"),
  use: text("use").notNull(), // Primary indication
  emsRelevantInfo: text("ems_relevant_info").notNull(), // Key safety concerns
  interactions: jsonb("interactions").notNull(), // Array of drug interactions
  toxicitySymptoms: jsonb("toxicity_symptoms"), // Array of overdose symptoms
  reversal: text("reversal"), // Antidote if any
  isHerbal: boolean("is_herbal").default(false),
});

export const simulations = pgTable("simulations", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  category: text("category").notNull(),
  difficulty: text("difficulty").notNull(), // beginner, intermediate, advanced
  estimatedTime: integer("estimated_time").notNull(), // in minutes
  scenario: jsonb("scenario").notNull(), // Complete scenario data
  learningObjectives: jsonb("learning_objectives").notNull(),
});

export const userProgress = pgTable("user_progress", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull(),
  simulationId: integer("simulation_id"),
  protocolId: integer("protocol_id"),
  category: text("category").notNull(), // simulation, protocol, medication
  score: integer("score"), // percentage score
  completed: boolean("completed").default(false),
  completedAt: timestamp("completed_at"),
  timeSpent: integer("time_spent"), // in minutes
});

export const assessments = pgTable("assessments", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull(),
  patientData: jsonb("patient_data").notNull(),
  symptoms: jsonb("symptoms").notNull(),
  vitals: jsonb("vitals").notNull(),
  interventions: jsonb("interventions").notNull(),
  outcome: text("outcome"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Zod schemas
export const insertUserSchema = createInsertSchema(users).omit({
  id: true,
  createdAt: true,
});

export const insertProtocolSchema = createInsertSchema(protocols).omit({
  id: true,
  lastUpdated: true,
});

export const insertMedicationSchema = createInsertSchema(medications).omit({
  id: true,
});

export const insertPatientMedicationSchema = createInsertSchema(patientMedications).omit({
  id: true,
});

export const insertSimulationSchema = createInsertSchema(simulations).omit({
  id: true,
});

export const insertUserProgressSchema = createInsertSchema(userProgress).omit({
  id: true,
  completedAt: true,
});

export const insertAssessmentSchema = createInsertSchema(assessments).omit({
  id: true,
  createdAt: true,
});

// Types
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertProtocol = z.infer<typeof insertProtocolSchema>;
export type Protocol = typeof protocols.$inferSelect;

export type InsertMedication = z.infer<typeof insertMedicationSchema>;
export type Medication = typeof medications.$inferSelect;

export type InsertPatientMedication = z.infer<typeof insertPatientMedicationSchema>;
export type PatientMedication = typeof patientMedications.$inferSelect;

export type InsertSimulation = z.infer<typeof insertSimulationSchema>;
export type Simulation = typeof simulations.$inferSelect;

export type InsertUserProgress = z.infer<typeof insertUserProgressSchema>;
export type UserProgress = typeof userProgress.$inferSelect;

export type InsertAssessment = z.infer<typeof insertAssessmentSchema>;
export type Assessment = typeof assessments.$inferSelect;
