import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import NodeCache from 'node-cache';

const app = express();
const PORT = process.env.PORT || 3001;

// Security middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Rate limiting
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 100, // limit each IP to 100 requests per windowMs
  message: {
    error: 'Too many requests. Please try again later.',
    retryAfter: 60
  },
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(limiter);

// In-memory storage (in production, use Redis or database)
const visitorCache = new NodeCache({ stdTTL: 0 }); // No expiration
const ipCache = new NodeCache({ stdTTL: 86400 }); // 24 hours for IP tracking

// Helper function to get real IP address
function getRealIP(req) {
  return req.headers['x-forwarded-for']?.split(',')[0] || 
         req.headers['x-real-ip'] || 
         req.connection.remoteAddress || 
         req.socket.remoteAddress || 
         req.ip || 
         '127.0.0.1';
}

// Helper function to create SHA-256 hash
async function createHash(input) {
  const encoder = new TextEncoder();
  const data = encoder.encode(input);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// Helper function to generate badge URL
function generateBadgeUrl(label, count, color, style) {
  const encodedLabel = encodeURIComponent(label);
  return `https://img.shields.io/badge/${encodedLabel}-${count}-${color}?style=${style}`;
}

// Main visitor counter endpoint
app.get('/counter', async (req, res) => {
  try {
    const { project, label = 'visitors', color = '0e75b6', style = 'flat', base = 0 } = req.query;
    
    if (!project) {
      return res.status(400).json({ error: 'Project parameter is required' });
    }
    
    // Get real IP address
    const realIP = getRealIP(req);
    const ipHash = await createHash(realIP);
    
    // Create unique project identifier
    const projectKey = `project:${project}`;
    const ipKey = `ip:${project}:${ipHash}`;
    
    // Get current project data
    let projectData = visitorCache.get(projectKey) || {
      count: parseInt(base) || 0,
      visitors: new Set()
    };
    
    // Check if this is a new visitor
    const isNewVisitor = !ipCache.get(ipKey);
    
    if (isNewVisitor) {
      // Store IP hash for 24 hours
      ipCache.set(ipKey, true);
      
      // Increment count and add visitor
      projectData.count++;
      projectData.visitors.add(ipHash);
      
      // Update cache
      visitorCache.set(projectKey, projectData);
    }
    
    // Generate badge URL
    const badgeUrl = generateBadgeUrl(label, projectData.count, color, style);
    
    // Return both badge URL and count data
    res.json({
      success: true,
      project,
      count: projectData.count,
      uniqueVisitors: projectData.visitors.size,
      badgeUrl,
      isNewVisitor,
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('Error in counter endpoint:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get visitor count without incrementing
app.get('/count/:project', async (req, res) => {
  try {
    const { project } = req.params;
    const projectKey = `project:${project}`;
    
    const projectData = visitorCache.get(projectKey);
    
    if (!projectData) {
      return res.json({
        success: true,
        project,
        count: 0,
        uniqueVisitors: 0
      });
    }
    
    res.json({
      success: true,
      project,
      count: projectData.count,
      uniqueVisitors: projectData.visitors.size
    });
    
  } catch (error) {
    console.error('Error in count endpoint:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Reset visitor count for a project
app.post('/reset/:project', async (req, res) => {
  try {
    const { project } = req.params;
    const projectKey = `project:${project}`;
    
    // Clear project data
    visitorCache.del(projectKey);
    
    // Clear all IPs for this project
    const keys = ipCache.keys();
    keys.forEach(key => {
      if (key.startsWith(`ip:${project}:`)) {
        ipCache.del(key);
      }
    });
    
    res.json({
      success: true,
      message: `Visitor count reset for project: ${project}`,
      project
    });
    
  } catch (error) {
    console.error('Error in reset endpoint:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    projects: visitorCache.keys().length
  });
});

// Stats endpoint
app.get('/stats', (req, res) => {
  const projects = visitorCache.keys();
  const stats = {};
  
  projects.forEach(key => {
    const projectName = key.replace('project:', '');
    const data = visitorCache.get(key);
    stats[projectName] = {
      count: data.count,
      uniqueVisitors: data.visitors.size
    };
  });
  
  res.json({
    success: true,
    totalProjects: projects.length,
    projects: stats,
    timestamp: new Date().toISOString()
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Visitor Counter Backend running on port ${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/health`);
  console.log(`📈 Stats: http://localhost:${PORT}/stats`);
  console.log(`🔢 Counter: http://localhost:${PORT}/counter?project=your-project`);
});

export default app;
