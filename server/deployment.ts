import express from "express";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { setupHealthCheck } from './health.js';
import { registerRoutes } from './routes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function startDeploymentServer() {
  const app = express();
  const port = parseInt(process.env.PORT || '3000', 10);

  // Middleware
  app.use(express.json({ limit: '50mb' }));
  app.use(express.urlencoded({ extended: true, limit: '50mb' }));

  // CORS for deployment
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    
    if (req.method === 'OPTIONS') {
      return res.sendStatus(200);
    }
    next();
  });

  // Setup routes
  setupHealthCheck(app);
  const server = await registerRoutes(app);

  // Static files
  const publicPath = join(__dirname, '..', 'dist', 'public');
  app.use(express.static(publicPath));
  
  // SPA fallback
  app.get('*', (_req, res) => {
    res.sendFile(join(publicPath, 'index.html'));
  });

  // Error handler
  app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
    console.error('Deployment error:', err);
    if (!res.headersSent) {
      res.status(500).json({ error: 'Server error' });
    }
  });

  // Start server
  const httpServer = server.listen(port, '0.0.0.0', () => {
    console.log(`EMS Training Platform deployed on port ${port}`);
    console.log('Features: 20+ scenarios, AI recommendations, Clark County protocols');
  });

  return httpServer;
}

startDeploymentServer().catch((error) => {
  console.error('Deployment failed:', error);
  process.exit(1);
});