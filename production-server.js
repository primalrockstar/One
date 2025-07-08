const express = require('express');
const { createServer } = require('http');
const path = require('path');
const fs = require('fs');

const app = express();
const server = createServer(app);
const PORT = process.env.PORT || 80;

// Enhanced middleware
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// CORS headers
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
    environment: 'production',
    version: '1.0.0'
  });
});

// Landing page for social media crawlers
app.get('/', (req, res) => {
  const userAgent = req.get('User-Agent') || '';
  
  // Serve landing page for social media crawlers
  if (userAgent.includes('facebookexternalhit') || 
      userAgent.includes('Twitterbot') || 
      userAgent.includes('LinkedInBot') ||
      userAgent.includes('WhatsApp') ||
      userAgent.includes('Telegram') ||
      userAgent.includes('bot') ||
      userAgent.includes('crawler')) {
    return res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>EMS Training Platform - Professional Emergency Medical Services Training</title>
  <meta name="description" content="Professional EMS training platform for EMT, AEMT, and Paramedic certification levels with AI-powered medication recommendations and Clark County protocols.">
  <meta property="og:title" content="EMS Training Platform - Professional Emergency Medical Services Training">
  <meta property="og:description" content="Professional EMS training platform for EMT, AEMT, and Paramedic certification levels with AI-powered medication recommendations and Clark County protocols.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://tinyurl.com/MEDICLAND">
  <meta property="og:image" content="https://tinyurl.com/MEDICLAND/icon-512.png">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="EMS Training Platform">
  <meta name="twitter:description" content="Professional EMS training platform for EMT, AEMT, and Paramedic certification levels">
</head>
<body style="font-family: Arial, sans-serif; max-width: 800px; margin: 50px auto; padding: 20px; background: #f8f9fa;">
  <div style="text-align: center; background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
    <h1 style="color: #d32f2f; margin-bottom: 20px;">🚑 EMS Training Platform</h1>
    <p style="font-size: 18px; color: #333; margin-bottom: 20px;">Professional Emergency Medical Services training platform for EMT, AEMT, and Paramedic certification levels.</p>
    <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
      <h3 style="color: #d32f2f; margin-bottom: 15px;">Platform Features:</h3>
      <ul style="text-align: left; color: #555;">
        <li>✅ 25 AI-powered medication recommendation scenarios</li>
        <li>✅ Clark County EMS protocol compliance</li>
        <li>✅ Interactive training scenarios and simulations</li>
        <li>✅ Comprehensive emergency protocol reference</li>
        <li>✅ Voice-controlled hands-free operation</li>
        <li>✅ Mobile-optimized for field use</li>
      </ul>
    </div>
    <p style="margin-top: 30px;">
      <a href="https://tinyurl.com/MEDICLAND" style="background: #d32f2f; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block;">Access Platform →</a>
    </p>
  </div>
</body>
</html>
    `);
  }

  // For regular users, serve the main app
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>EMS Training Platform</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 20px;
      background: #f8f9fa;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
    }
    .container {
      text-align: center;
      background: white;
      padding: 40px;
      border-radius: 10px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      max-width: 600px;
    }
    .loading {
      color: #d32f2f;
      font-size: 18px;
      margin: 20px 0;
    }
    .spinner {
      border: 4px solid #f3f3f3;
      border-top: 4px solid #d32f2f;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      animation: spin 1s linear infinite;
      margin: 20px auto;
    }
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1 style="color: #d32f2f;">🚑 EMS Training Platform</h1>
    <div class="spinner"></div>
    <p class="loading">Loading professional EMS training platform...</p>
    <p style="color: #666;">Platform is starting up. Please wait a moment.</p>
  </div>
  <script>
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  </script>
</body>
</html>
  `);
});

// Start server with enhanced error handling
server.listen(PORT, '0.0.0.0', () => {
  console.log(`🚑 EMS Training Platform PRODUCTION SERVER running on port ${PORT}`);
  console.log(`✅ Environment: production`);
  console.log(`✅ Professional URL: https://tinyurl.com/MEDICLAND`);
  console.log(`✅ Health check: /health`);
});

// Enhanced error handling
server.on('error', (error) => {
  console.error('Production server error:', error);
  // Attempt restart
  setTimeout(() => {
    server.listen(PORT, '0.0.0.0');
  }, 1000);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully');
  server.close(() => {
    console.log('Production server terminated');
  });
});

process.on('SIGINT', () => {
  console.log('SIGINT received, shutting down gracefully');
  server.close(() => {
    console.log('Production server terminated');
  });
});

// Keep alive mechanism
setInterval(() => {
  console.log(`[${new Date().toISOString()}] Production server alive - uptime: ${process.uptime()}s`);
}, 30000);

module.exports = server;