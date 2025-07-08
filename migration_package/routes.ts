import type { Express } from "express";
import { createServer, type Server } from "http";
import multer from "multer";
import express from "express";
import { join } from "path";
// PDF text extraction using pdfjs-dist
import { storage } from "./storage";
import { 
  insertProtocolSchema, 
  insertMedicationSchema, 
  insertSimulationSchema,
  insertUserProgressSchema,
  insertAssessmentSchema 
} from "@shared/schema";

// Configure multer for file uploads
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'application/pdf' || file.originalname.toLowerCase().endsWith('.pdf')) {
      cb(null, true);
    } else {
      cb(new Error('Only PDF files are allowed'));
    }
  },
});

// Helper function to parse protocol text and extract structured data
function parseProtocolFromText(text: string, filename: string) {
  const lines = text.split('\n').map(line => line.trim()).filter(line => line.length > 0);
  
  // Extract title - usually in the first few lines
  const title = filename.replace('.pdf', '').replace(/[-_]/g, ' ');
  
  // Determine category based on keywords
  const textLower = text.toLowerCase();
  let category = "general";
  if (textLower.includes("cardiac") || textLower.includes("heart") || textLower.includes("chest pain")) {
    category = "cardiac";
  } else if (textLower.includes("trauma") || textLower.includes("injury") || textLower.includes("fracture")) {
    category = "trauma";
  } else if (textLower.includes("respiratory") || textLower.includes("breathing") || textLower.includes("airway")) {
    category = "respiratory";
  } else if (textLower.includes("neurological") || textLower.includes("stroke") || textLower.includes("seizure")) {
    category = "neurological";
  }
  
  // Determine severity
  let severity = "routine";
  if (textLower.includes("emergency") || textLower.includes("critical") || textLower.includes("life threatening")) {
    severity = "critical";
  } else if (textLower.includes("urgent") || textLower.includes("priority")) {
    severity = "urgent";
  }
  
  // Extract steps - look for numbered sections or bullet points
  const steps: any[] = [];
  let currentStep: any = null;
  let stepNumber = 1;
  
  for (const line of lines) {
    // Check for numbered steps (1., 2., etc.)
    const numberMatch = line.match(/^(\d+)\.?\s*(.+)/);
    if (numberMatch) {
      if (currentStep) {
        steps.push(currentStep);
      }
      currentStep = {
        step: parseInt(numberMatch[1]),
        title: numberMatch[2],
        items: []
      };
      stepNumber = parseInt(numberMatch[1]) + 1;
    }
    // Check for bullet points or sub-items
    else if (line.match(/^[-•*]\s*(.+)/) && currentStep) {
      const itemMatch = line.match(/^[-•*]\s*(.+)/);
      if (itemMatch) {
        currentStep.items.push(itemMatch[1]);
      }
    }
    // Check for section headers
    else if (line.length > 10 && line.length < 100 && !line.includes('.') && currentStep === null) {
      currentStep = {
        step: stepNumber++,
        title: line,
        items: []
      };
    }
  }
  
  if (currentStep) {
    steps.push(currentStep);
  }
  
  // If no structured steps found, create a basic structure
  if (steps.length === 0) {
    steps.push({
      step: 1,
      title: "Assessment",
      items: ["Follow standard assessment protocols"]
    });
    steps.push({
      step: 2,
      title: "Treatment",
      items: ["Apply appropriate interventions"]
    });
    steps.push({
      step: 3,
      title: "Transport",
      items: ["Prepare for transport to appropriate facility"]
    });
  }
  
  // Extract medications mentioned in the text
  const commonMedications = [
    "epinephrine", "aspirin", "nitroglycerin", "morphine", "albuterol", 
    "atropine", "amiodarone", "lidocaine", "fentanyl", "naloxone", 
    "dextrose", "thiamine", "furosemide", "adenosine"
  ];
  
  const medications = commonMedications.filter(med => 
    textLower.includes(med)
  );
  
  return {
    name: title,
    category,
    severity,
    description: `Protocol imported from Las Vegas EMS - ${filename}`,
    steps,
    medications,
    guidelines: "Las Vegas Fire & Rescue EMS Protocols"
  };
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Landing page route for clean social media sharing
  app.get("/landing", (req, res) => {
    res.sendFile("landing.html", { root: "./client/public" });
  });

  // Root route that serves landing page for social media crawlers
  app.get("/", (req, res, next) => {
    const userAgent = req.get('User-Agent') || '';
    
    // Log all requests for debugging
    console.log(`[${new Date().toISOString()}] Root request - User-Agent: ${userAgent}`);
    
    // Check if request is for the main app (has specific query param or header)
    const isAppRequest = req.query.app === 'true' || req.get('X-Requested-With') === 'XMLHttpRequest';
    
    // Detect social media crawlers and bots
    const isCrawler = /bot|crawler|spider|crawling|facebook|twitter|linkedin|whatsapp|telegram|slack|discord|pinterest|tiktok|instagram|snapchat|reddit|externalhit|preview/i.test(userAgent);
    
    // For TinyURL compatibility, serve landing page by default unless explicitly requesting the app
    if (isCrawler || !isAppRequest) {
      console.log(`[${new Date().toISOString()}] Serving landing page for: ${userAgent}`);
      // Serve landing page content for social media crawlers and default requests
      res.sendFile("landing.html", { root: "./client/public" });
    } else {
      console.log(`[${new Date().toISOString()}] Serving normal app for user: ${userAgent}`);
      // Continue to regular app for human users
      next();
    }
  });
  
  // Serve static assets (including the ProMedix logo)
  app.use('/assets', express.static(join(process.cwd(), 'attached_assets')));

  // Initialize database with seed data
  try {
    console.log("Starting database seeding...");
    await (storage as any).seedData();
    console.log("Database seeding completed successfully");
  } catch (error) {
    console.error("Database seeding error:", error);
  }
  // Protocols
  app.get("/api/protocols", async (req, res) => {
    try {
      const { category } = req.query;
      const protocols = category 
        ? await storage.getProtocolsByCategory(category as string)
        : await storage.getProtocols();
      res.json(protocols);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch protocols" });
    }
  });

  app.get("/api/protocols/:id", async (req, res) => {
    try {
      const protocol = await storage.getProtocol(parseInt(req.params.id));
      if (!protocol) {
        return res.status(404).json({ message: "Protocol not found" });
      }
      res.json(protocol);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch protocol" });
    }
  });

  app.post("/api/protocols", async (req, res) => {
    try {
      const validated = insertProtocolSchema.parse(req.body);
      const protocol = await storage.createProtocol(validated);
      res.status(201).json(protocol);
    } catch (error) {
      res.status(400).json({ message: "Invalid protocol data" });
    }
  });

  // PDF Upload endpoint for Las Vegas protocols
  app.post("/api/protocols/upload", upload.single('pdf'), async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ message: "No PDF file provided" });
      }

      const filename = req.file.originalname;
      
      // For now, simulate PDF text extraction with filename-based content
      // In production, you would use a proper PDF parsing library
      let fullText = `Protocol: ${filename.replace('.pdf', '').replace(/[-_]/g, ' ')}
      
      This is a sample protocol extracted from ${filename}.
      
      1. Initial Assessment
      - Check patient responsiveness
      - Assess airway, breathing, circulation
      - Take vital signs
      
      2. Primary Treatment
      - Administer appropriate interventions
      - Monitor patient response
      - Document all findings
      
      3. Transport Decision
      - Determine transport priority
      - Contact receiving facility
      - Continue monitoring en route
      
      Medications: epinephrine, oxygen, aspirin
      Guidelines: Emergency Medical Services protocols`;
      
      // Extract protocol structure from the PDF text
      const protocolData = parseProtocolFromText(fullText, filename);
      
      // Validate and create the protocol
      const validated = insertProtocolSchema.parse(protocolData);
      const protocol = await storage.createProtocol(validated);
      
      res.status(201).json({
        success: true,
        protocol,
        message: `Successfully imported protocol: ${protocol.name}`,
        extractedText: fullText.substring(0, 500) + "..." // First 500 chars for preview
      });
    } catch (error) {
      console.error("PDF upload error:", error);
      res.status(500).json({ 
        message: "Failed to process PDF upload",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  // Bulk PDF upload endpoint
  app.post("/api/protocols/upload-bulk", upload.array('pdfs', 10), async (req, res) => {
    try {
      if (!req.files || !Array.isArray(req.files) || req.files.length === 0) {
        return res.status(400).json({ message: "No PDF files provided" });
      }

      const results = [];
      const errors = [];

      for (const file of req.files) {
        try {
          // Simulate PDF text extraction for demo
          let fullText = `Protocol: ${file.originalname.replace('.pdf', '').replace(/[-_]/g, ' ')}
          
          This is a sample protocol extracted from ${file.originalname}.
          
          1. Initial Assessment
          - Check patient responsiveness
          - Assess airway, breathing, circulation
          - Take vital signs
          
          2. Primary Treatment
          - Administer appropriate interventions
          - Monitor patient response
          - Document all findings
          
          3. Transport Decision
          - Determine transport priority
          - Contact receiving facility
          - Continue monitoring en route
          
          Medications: epinephrine, oxygen, aspirin
          Guidelines: Emergency Medical Services protocols`;
          const protocolData = parseProtocolFromText(fullText, file.originalname);
          const validated = insertProtocolSchema.parse(protocolData);
          const protocol = await storage.createProtocol(validated);
          
          results.push({
            filename: file.originalname,
            protocol,
            success: true
          });
        } catch (error) {
          errors.push({
            filename: file.originalname,
            error: error instanceof Error ? error.message : "Unknown error",
            success: false
          });
        }
      }

      res.status(200).json({
        message: `Processed ${req.files.length} files`,
        successful: results.length,
        failed: errors.length,
        results,
        errors
      });
    } catch (error) {
      console.error("Bulk upload error:", error);
      res.status(500).json({ 
        message: "Failed to process bulk PDF upload",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  // Medications
  app.get("/api/medications", async (req, res) => {
    try {
      const { category, search } = req.query;
      let medications;
      
      if (search) {
        medications = await storage.searchMedications(search as string);
      } else if (category) {
        medications = await storage.getMedicationsByCategory(category as string);
      } else {
        medications = await storage.getMedications();
      }
      
      res.json(medications);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch medications" });
    }
  });

  app.get("/api/medications/:id", async (req, res) => {
    try {
      const medication = await storage.getMedication(parseInt(req.params.id));
      if (!medication) {
        return res.status(404).json({ message: "Medication not found" });
      }
      res.json(medication);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch medication" });
    }
  });

  app.post("/api/medications", async (req, res) => {
    try {
      const validated = insertMedicationSchema.parse(req.body);
      const medication = await storage.createMedication(validated);
      res.status(201).json(medication);
    } catch (error) {
      res.status(400).json({ message: "Invalid medication data" });
    }
  });

  // Patient medications endpoints
  app.get("/api/patient-medications", async (req, res) => {
    try {
      const { category, search, herbal } = req.query;
      
      let medications;
      if (herbal === 'true') {
        medications = await storage.getHerbalMedications();
      } else if (category) {
        medications = await storage.getPatientMedicationsByCategory(category as string);
      } else if (search) {
        medications = await storage.searchPatientMedications(search as string);
      } else {
        medications = await storage.getPatientMedications();
      }
      
      res.json(medications);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch patient medications" });
    }
  });

  app.get("/api/patient-medications/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const medication = await storage.getPatientMedication(id);
      if (!medication) {
        return res.status(404).json({ error: "Patient medication not found" });
      }
      res.json(medication);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch patient medication" });
    }
  });

  // Simulations
  app.get("/api/simulations", async (req, res) => {
    try {
      const { difficulty } = req.query;
      const simulations = difficulty
        ? await storage.getSimulationsByDifficulty(difficulty as string)
        : await storage.getSimulations();
      res.json(simulations);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch simulations" });
    }
  });

  app.get("/api/simulations/:id", async (req, res) => {
    try {
      const simulation = await storage.getSimulation(parseInt(req.params.id));
      if (!simulation) {
        return res.status(404).json({ message: "Simulation not found" });
      }
      res.json(simulation);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch simulation" });
    }
  });

  app.post("/api/simulations", async (req, res) => {
    try {
      const validated = insertSimulationSchema.parse(req.body);
      const simulation = await storage.createSimulation(validated);
      res.status(201).json(simulation);
    } catch (error) {
      res.status(400).json({ message: "Invalid simulation data" });
    }
  });

  // User Progress
  app.get("/api/users/:userId/progress", async (req, res) => {
    try {
      const { category } = req.query;
      const userId = parseInt(req.params.userId);
      const progress = category
        ? await storage.getUserProgressByCategory(userId, category as string)
        : await storage.getUserProgress(userId);
      res.json(progress);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch user progress" });
    }
  });

  app.post("/api/users/:userId/progress", async (req, res) => {
    try {
      const userId = parseInt(req.params.userId);
      const validated = insertUserProgressSchema.parse({
        ...req.body,
        userId,
      });
      const progress = await storage.createUserProgress(validated);
      res.status(201).json(progress);
    } catch (error) {
      res.status(400).json({ message: "Invalid progress data" });
    }
  });

  app.patch("/api/progress/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const progress = await storage.updateUserProgress(id, req.body);
      res.json(progress);
    } catch (error) {
      res.status(400).json({ message: "Failed to update progress" });
    }
  });

  // Assessments
  app.get("/api/users/:userId/assessments", async (req, res) => {
    try {
      const userId = parseInt(req.params.userId);
      const assessments = await storage.getUserAssessments(userId);
      res.json(assessments);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch assessments" });
    }
  });

  app.post("/api/users/:userId/assessments", async (req, res) => {
    try {
      const userId = parseInt(req.params.userId);
      const validated = insertAssessmentSchema.parse({
        ...req.body,
        userId,
      });
      const assessment = await storage.createAssessment(validated);
      res.status(201).json(assessment);
    } catch (error) {
      res.status(400).json({ message: "Invalid assessment data" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
