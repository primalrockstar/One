import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import ws from "ws";
import * as schema from "@shared/schema";

// Configure Neon for WebSocket support
neonConfig.webSocketConstructor = ws;

if (!process.env.DATABASE_URL) {
  console.warn("DATABASE_URL not found, database features will be unavailable");
}

let pool: Pool | null = null;
let db: any = null;

if (process.env.DATABASE_URL) {
  try {
    // Create pool with optimized settings for serverless
    pool = new Pool({ 
      connectionString: process.env.DATABASE_URL,
      max: 1, // Reduce max connections for serverless
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 10000
    });

    db = drizzle({ client: pool, schema });
  } catch (error) {
    console.warn('Failed to initialize database connection:', error);
  }
}

export { pool, db };