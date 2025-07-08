import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 80;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static assets
app.use('/assets', express.static(join(__dirname, 'attached_assets')));

// CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', '*');
  if (req.method === 'OPTIONS') return res.sendStatus(200);
  next();
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

// Main route
app.get('*', (req, res) => {
  const userAgent = req.get('User-Agent') || '';
  const isBot = userAgent.includes('bot') || userAgent.includes('crawler') || 
                userAgent.includes('facebook') || userAgent.includes('twitter');

  if (isBot) {
    res.send(`<!DOCTYPE html>
<html><head>
<title>ProMedix EMS - Professional Emergency Medical Services Training</title>
<meta name="description" content="ProMedix EMS: Professional training platform for EMT, AEMT, and Paramedic certification levels.">
<meta property="og:title" content="ProMedix EMS - Professional Emergency Medical Services Training">
<meta property="og:description" content="ProMedix EMS: Professional training platform for EMT, AEMT, and Paramedic certification levels.">
</head><body>
<h1>ProMedix EMS</h1>
<p>Professional Emergency Medical Services training platform.</p>
<p>Features: 25 AI scenarios, Clark County protocols, interactive training.</p>
</body></html>`);
  } else {
    res.send(`<!DOCTYPE html>
<html><head>
<title>ProMedix EMS - Online</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background: #f0f0f0; }
.container { max-width: 600px; margin: 0 auto; background: white; padding: 30px; border-radius: 10px; text-align: center; }
.status { background: #e8f5e8; border: 2px solid #4caf50; padding: 15px; margin: 20px 0; border-radius: 5px; }
.btn { background: #d32f2f; color: white; padding: 12px 24px; border: none; border-radius: 5px; text-decoration: none; display: inline-block; margin: 10px; }
</style>
</head><body>
<div class="container">
<img src="/assets/1000033648_1751583830297.png" alt="ProMedix EMS Logo" style="max-width: 300px; height: auto; margin-bottom: 20px;">
<h1>ProMedix EMS</h1>
<div class="status">
<h3 style="color: #4caf50; margin: 0;">✅ ONLINE & STABLE</h3>
<p style="margin: 10px 0 0 0;">Production server running continuously</p>
</div>
<p><strong>Professional EMS Training Features:</strong></p>
<ul style="text-align: left;">
<li>25 AI-powered medication scenarios</li>
<li>Clark County EMS protocols</li>
<li>Interactive training simulations</li>
<li>Voice-controlled operation</li>
<li>Mobile-optimized for field use</li>
</ul>
<p><strong>Created by:</strong> Shaun Williamson<br>
<strong>For:</strong> Guardian Elite Medical Service, Las Vegas</p>
<a href="https://tinyurl.com/MEDICLAND" class="btn">Access Full Platform</a>
</div></body></html>`);
  }
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚑 EMS Training Platform running on port ${PORT}`);
  console.log(`✅ Production server - Always online`);
});

// Error handling
process.on('uncaughtException', (err) => {
  console.log('Error caught:', err.message);
});

process.on('unhandledRejection', (reason) => {
  console.log('Rejection caught:', reason);
});

// Keep alive
setInterval(() => {
  console.log(`[${new Date().toISOString()}] Server running - uptime: ${Math.floor(process.uptime())}s`);
}, 60000);