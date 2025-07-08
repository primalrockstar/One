#!/bin/bash

# ProMedix EMS Production Startup Script
# Maintains stable 24/7 operation

echo "Starting ProMedix EMS in production mode..."

# Set production environment
export NODE_ENV=production
export PORT=5000

# Start the production server
node dist/index.js