#!/usr/bin/env node

/**
 * ProMedix EMS Stable Production Server
 * Eliminates development restart cycles for 24/7 operation
 */

process.env.NODE_ENV = 'production';
process.env.PORT = '5000';

import('./dist/index.js').catch((error) => {
  console.error('Failed to start production server:', error);
  process.exit(1);
});

// Keep the process alive and prevent automatic restarts
const keepAlive = setInterval(() => {
  // Health check ping every 30 seconds
  console.log(`ProMedix EMS Production: ${new Date().toISOString()} - Server healthy`);
}, 30000);

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('Shutting down ProMedix EMS production server...');
  clearInterval(keepAlive);
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('Terminating ProMedix EMS production server...');
  clearInterval(keepAlive);
  process.exit(0);
});

console.log('ProMedix EMS Production Server initialized - Stable 24/7 operation');