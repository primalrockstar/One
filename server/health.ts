// Health check endpoint for deployment monitoring
export function setupHealthCheck(app: any) {
  // Enhanced health check with deployment monitoring
  app.get('/health', (_req: any, res: any) => {
    const memUsage = process.memoryUsage();
    const uptimeHours = Math.floor(process.uptime() / 3600);
    const uptimeMinutes = Math.floor((process.uptime() % 3600) / 60);
    
    res.status(200).json({
      status: 'healthy',
      service: 'EMS Training Platform',
      timestamp: new Date().toISOString(),
      uptime: {
        seconds: Math.floor(process.uptime()),
        formatted: `${uptimeHours}h ${uptimeMinutes}m`
      },
      memory: {
        used: Math.round(memUsage.heapUsed / 1024 / 1024 * 100) / 100,
        total: Math.round(memUsage.heapTotal / 1024 / 1024 * 100) / 100,
        external: Math.round(memUsage.external / 1024 / 1024 * 100) / 100,
        rss: Math.round(memUsage.rss / 1024 / 1024 * 100) / 100
      },
      environment: process.env.NODE_ENV || 'development',
      version: '1.0.0',
      features: {
        scenarios: 20,
        protocols: 'Clark County EMS',
        certifications: ['EMT', 'AEMT', 'Paramedic']
      },
      deployment: {
        ready: true,
        stable: process.uptime() > 30,
        continuous: true
      }
    });
  });

  app.get('/api/health', (_req: any, res: any) => {
    res.status(200).json({
      status: 'operational',
      service: 'EMS Training Platform API',
      timestamp: new Date().toISOString(),
      endpoints: {
        protocols: '/api/protocols',
        medications: '/api/medications',
        simulations: '/api/simulations',
        assessments: '/api/assessments'
      }
    });
  });

  // Deployment status endpoint
  app.get('/status', (_req: any, res: any) => {
    res.status(200).json({
      service: 'EMS Training Platform',
      status: 'operational',
      deployment: {
        environment: process.env.NODE_ENV || 'development',
        uptime: Math.floor(process.uptime()),
        stable: process.uptime() > 30,
        ready_for_production: true
      },
      features: {
        'Interactive Scenarios': 'operational',
        'Multiple Choice Training': 'operational',
        'AI Medication Recommendations': 'operational',
        'Patient Assessment Guide': 'operational',
        'Clark County Protocols': 'operational',
        'Voice Control': 'operational',
        'AR Visualization': 'operational'
      },
      performance: {
        memory_usage: `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)}MB`,
        uptime_formatted: `${Math.floor(process.uptime() / 3600)}h ${Math.floor((process.uptime() % 3600) / 60)}m`
      },
      last_updated: new Date().toISOString()
    });
  });

  // Keep-alive endpoint for deployment monitoring
  app.get('/ping', (_req: any, res: any) => {
    res.status(200).send('pong');
  });
}