import express, { type Request, Response, NextFunction } from "express";
import path from "path";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import { setupHealthCheck } from "./health";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  try {
    log("Starting ProMedix EMS server...");
    
    // Initialize storage system
    log("Initializing storage system...");
    const { storage } = await import("./storage");
    log("Memory storage initialized successfully");
    
    // Setup health check endpoints
    setupHealthCheck(app);
    
    const server = await registerRoutes(app);

    app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
      const status = err.status || err.statusCode || 500;
      const message = err.message || "Internal Server Error";
      
      log(`Error ${status}: ${message}`, "error");
      res.status(status).json({ message });
    });

    // Force production mode for stability
    const forceProduction = true;
    const isProduction = forceProduction || process.env.NODE_ENV === "production";
    log(`Environment detected: ${isProduction ? 'production (forced)' : 'development'}`);
    
    if (isProduction) {
      log("Setting up static file serving for production");
      
      // Custom static file serving for production
      const distPath = path.resolve(process.cwd(), "dist", "public");
      const fs = await import("fs");
      
      if (fs.existsSync(distPath)) {
        app.use(express.static(distPath));
        app.use("*", (_req, res) => {
          res.sendFile(path.resolve(distPath, "index.html"));
        });
        log(`Serving static files from: ${distPath}`);
      } else {
        log("Static files not found, falling back to Vite development server");
        await setupVite(app, server);
      }
    } else {
      log("Setting up Vite development server");
      await setupVite(app, server);
    }
    
    // Enhanced production stability
    if (isProduction) {
      log("Enhanced keep-alive mechanism activated for production stability");
      
      // Prevent automatic restarts
      process.on('SIGTERM', () => {
        log('Production server received SIGTERM - maintaining stability');
      });
      
      process.on('SIGINT', () => {
        log('Production server received SIGINT - maintaining stability');
      });
      
      // Health monitoring for production
      setInterval(() => {
        log('Production health check - Server stable', 'health');
      }, 300000); // Every 5 minutes
    }
    
    // Ensure external accessibility
    app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
      res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
      next();
    });

    // ALWAYS serve the app on port 5000
    // this serves both the API and the client.
    // It is the only port that is not firewalled.
    const port = parseInt(process.env.PORT || '5000');
    
    // Optimized server configuration for stability
    server.keepAliveTimeout = 600000; // 10 minutes
    server.headersTimeout = 605000; // Slightly more than keepAlive
    server.requestTimeout = 0; // No timeout
    server.timeout = 0; // No timeout
    
    server.listen(port, "0.0.0.0", () => {
      log(`Server successfully started on port ${port}`);
      log(`Environment: ${process.env.NODE_ENV || 'development'}`);
      log(`Host: 0.0.0.0 (deployment compatible)`);
      log(`Health check available at /health`);
    });

    // Graceful shutdown handling
    process.on('SIGTERM', () => {
      log('SIGTERM received, shutting down gracefully');
      server.close(() => {
        log('Server closed');
        process.exit(0);
      });
    });

    process.on('SIGINT', () => {
      log('SIGINT received, shutting down gracefully');
      server.close(() => {
        log('Server closed');
        process.exit(0);
      });
    });

    // Enhanced keep-alive mechanism for maximum stability
    const keepAlive = () => {
      log('EMS Platform heartbeat - staying alive');
      // Force garbage collection if available
      if (global.gc) {
        global.gc();
      }
    };
    
    if (process.env.NODE_ENV === 'production') {
      setInterval(keepAlive, 15 * 60 * 1000); // Every 15 minutes for production
      log('Enhanced keep-alive mechanism activated for production stability');
    } else {
      setInterval(keepAlive, 60 * 60 * 1000); // Every hour for development
      log('Stability monitoring activated - hourly maintenance cycle');
    }
    
    // Additional stability measures for development
    if (process.env.NODE_ENV !== 'production') {
      const devHeartbeat = () => {
        const mem = process.memoryUsage();
        const heapMB = Math.round(mem.heapUsed / 1024 / 1024);
        if (heapMB > 400 && global.gc) {
          global.gc();
          log(`[dev] Memory cleanup: ${heapMB}MB`);
        }
        
        // Self-health check to ensure server responsiveness
        try {
          fetch(`http://localhost:${port}/health`)
            .then(() => log('[dev] Health check passed'))
            .catch(() => log('[dev] Health check failed - server may need restart'));
        } catch (error) {
          log('[dev] Health check error - continuing operation');
        }
      };
      setInterval(devHeartbeat, 90 * 1000); // Every 90 seconds in development for maximum monitoring
    }

    // Enhanced error handling with recovery mechanisms
    process.on('uncaughtException', (error) => {
      log(`Uncaught Exception - attempting recovery: ${error.message}`, "error");
      console.error('Stack:', error.stack);
      
      // Force garbage collection on errors
      if (global.gc) {
        global.gc();
        log('Emergency garbage collection completed');
      }
    });

    process.on('unhandledRejection', (reason, promise) => {
      log(`Unhandled Rejection - server continuing: ${reason}`, "error");
      console.error('Promise:', promise);
      
      // Log memory usage on rejections
      const mem = process.memoryUsage();
      log(`Memory at rejection: Heap ${Math.round(mem.heapUsed/1024/1024)}MB, RSS ${Math.round(mem.rss/1024/1024)}MB`);
    });

  } catch (error) {
    log(`Failed to start server: ${error instanceof Error ? error.message : 'Unknown error'}`, "error");
    console.error('Server startup error:', error);
    
    // Enhanced restart strategy for maximum uptime
    if (process.env.NODE_ENV === 'production') {
      setTimeout(() => {
        log('Production restart initiated...');
        process.exit(1);
      }, 3000);
    } else {
      // Development mode - attempt graceful recovery
      setTimeout(() => {
        log('Development restart initiated...');
        if (global.gc) {
          global.gc();
        }
        process.exit(1);
      }, 500);
    }
  }
})();
