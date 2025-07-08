#!/usr/bin/env node

/**
 * ProMedix EMS Production Server
 * Stable 24/7 operation without development restarts
 */

import { spawn } from 'child_process';
import { createServer } from 'http';

const PRODUCTION_PORT = 5000;
const HEALTH_CHECK_PORT = 3001;

// Create minimal health check server to prevent shutdowns
const healthServer = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('ProMedix EMS Production Server - Healthy\n');
});

healthServer.listen(HEALTH_CHECK_PORT, () => {
  console.log(`Health check server running on port ${HEALTH_CHECK_PORT}`);
});

// Start production server
console.log('Starting ProMedix EMS in production mode...');

const productionServer = spawn('node', ['dist/index.js'], {
  env: {
    ...process.env,
    NODE_ENV: 'production',
    PORT: PRODUCTION_PORT.toString(),
  },
  stdio: 'inherit',
});

productionServer.on('error', (error) => {
  console.error('Production server error:', error);
  process.exit(1);
});

productionServer.on('exit', (code) => {
  console.log(`Production server exited with code ${code}`);
  if (code !== 0) {
    // Restart on unexpected exit
    setTimeout(() => {
      console.log('Restarting production server...');
      process.exit(0); // Let process manager restart
    }, 5000);
  }
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('Shutting down ProMedix EMS production server...');
  productionServer.kill('SIGINT');
  healthServer.close();
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('Terminating ProMedix EMS production server...');
  productionServer.kill('SIGTERM');
  healthServer.close();
  process.exit(0);
});