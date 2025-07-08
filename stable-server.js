import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 5000;

// Enhanced CORS and middleware
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    service: 'EMS Training Platform',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: 'production-stable',
    features: {
      scenarios: 25,
      protocols: 'Clark County EMS',
      certifications: ['EMT', 'AEMT', 'Paramedic']
    }
  });
});

// Serve development app directly
app.get('/', (req, res) => {
  const userAgent = req.get('User-Agent') || '';
  
  // Serve landing page for social media crawlers
  if (userAgent.includes('facebookexternalhit') || 
      userAgent.includes('Twitterbot') || 
      userAgent.includes('LinkedInBot') ||
      userAgent.includes('WhatsApp') ||
      userAgent.includes('Telegram')) {
    return res.send(`
<!DOCTYPE html>
<html>
<head>
  <title>EMS Training Platform - Professional Emergency Medical Services Training</title>
  <meta name="description" content="Professional EMS training platform for EMT, AEMT, and Paramedic certification levels with AI-powered medication recommendations and Clark County protocols.">
  <meta property="og:title" content="EMS Training Platform - Professional Emergency Medical Services Training">
  <meta property="og:description" content="Professional EMS training platform for EMT, AEMT, and Paramedic certification levels with AI-powered medication recommendations and Clark County protocols.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://tinyurl.com/MEDICLAND">
</head>
<body style="font-family: Arial, sans-serif; max-width: 800px; margin: 50px auto; padding: 20px;">
  <h1>🚑 EMS Training Platform</h1>
  <p>Professional Emergency Medical Services training platform for EMT, AEMT, and Paramedic certification levels.</p>
  <p><strong>Features:</strong> AI-powered medication recommendations, Clark County protocols, interactive training scenarios.</p>
  <p><a href="https://tinyurl.com/MEDICLAND" style="color: #d32f2f; text-decoration: none; font-weight: bold;">Access Platform →</a></p>
</body>
</html>
    `);
  }

  // For all other users, redirect to development server
  return res.redirect('http://localhost:5000');
});

// Health check
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    service: 'EMS Training Platform',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: 'stable-proxy',
    redirect: 'Development server active'
  });
});

// All other routes redirect to development server
app.get('*', (req, res) => {
  res.redirect('http://localhost:5000' + req.path);
});

// Enhanced error handling
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  if (!res.headersSent) {
    res.status(500).json({ error: 'Server error', timestamp: new Date().toISOString() });
  }
});

// Start server with enhanced stability
const server = app.listen(port, '0.0.0.0', () => {
  console.log(`🚑 EMS Training Platform running on port ${port}`);
  console.log(`✅ Environment: production-stable`);
  console.log(`✅ Features: 25 AI scenarios, Clark County protocols`);
  console.log(`✅ Professional URL: https://tinyurl.com/MEDICLAND`);
});

// Enhanced error handling for server
server.on('error', (error) => {
  console.error('Server error:', error);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully');
  server.close(() => {
    console.log('Process terminated');
  });
});

process.on('SIGINT', () => {
  console.log('SIGINT received, shutting down gracefully');
  server.close(() => {
    console.log('Process terminated');
  });
});

export default app;