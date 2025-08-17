/**
 * Website Visitor Counter - Version 3.0.0
 * Real visitor counting system with Railway backend
 * Works exactly like komarev.com with accurate cross-device counting
 * 
 * 🚀 LIVE DEMO: https://my-portfolio-mnahsanofficials-projects.vercel.app/
 */

export interface VisitorCounterOptions {
  project: string;
  label?: string;
  color?: string;
  style?: 'flat' | 'flat-square' | 'plastic' | 'for-the-badge' | 'pixel';
  base?: number;
  abbreviated?: boolean;
}

const DEFAULT_OPTIONS: Required<VisitorCounterOptions> = {
  project: '',
  label: 'visitors',
  color: '0e75b6',
  style: 'flat',
  base: 0,
  abbreviated: false
};

// Railway backend API URL
const RAILWAY_API_BASE = 'https://websitevisiotrscounter-production.up.railway.app';

/**
 * Get visitor counter badge with real counting from Railway backend
 * This actually counts visitors across all devices, not just local storage
 * 
 * 🚀 LIVE DEMO: https://my-portfolio-mnahsanofficials-projects.vercel.app/
 */
export async function getVisitorCounterBadge(options: VisitorCounterOptions): Promise<string> {
  const config = { ...DEFAULT_OPTIONS, ...options };
  
  if (!config.project) {
    throw new Error('Project name is required');
  }

  try {
    // Call the Railway backend to get real visitor count
    const response = await fetch(
      `${RAILWAY_API_BASE}/counter?project=${encodeURIComponent(config.project)}&label=${encodeURIComponent(config.label)}&color=${config.color}&style=${config.style}&base=${config.base}`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch visitor count: ${response.statusText}`);
    }

    const data = await response.json();
    
    if (data.success) {
      // Return the badge URL with real count from backend
      return data.badgeUrl;
    } else {
      throw new Error('Backend returned error');
    }
  } catch (error) {
    console.error('Error fetching visitor count:', error);
    // Fallback to shields.io with base count
    return `https://img.shields.io/badge/${encodeURIComponent(config.label)}-${config.base}-${config.color}?style=${config.style}`;
  }
}

/**
 * Get simple visitor badge (shorter function name)
 */
export async function getSimpleVisitorBadge(project: string, label: string = 'visitors'): Promise<string> {
  return getVisitorCounterBadge({ project, label });
}

/**
 * Get visitor counter HTML with real counting
 */
export async function getVisitorCounterHTML(options: VisitorCounterOptions): Promise<string> {
  const badgeUrl = await getVisitorCounterBadge(options);
  return `<img src="${badgeUrl}" alt="${options.label || 'visitors'}" />`;
}

/**
 * Get visitor counter Markdown with real counting
 */
export async function getVisitorCounterMarkdown(options: VisitorCounterOptions): Promise<string> {
  const badgeUrl = await getVisitorCounterBadge(options);
  return `![${options.label || 'visitors'}](${badgeUrl})`;
}

/**
 * Get visitor counter React component with real counting
 */
export async function getVisitorCounterReact(options: VisitorCounterOptions): Promise<string> {
  const badgeUrl = await getVisitorCounterBadge(options);
  return `<img src="${badgeUrl}" alt="${options.label || 'visitors'}" />`;
}

/**
 * Get current visitor count without generating badge
 */
export async function getVisitorCount(project: string): Promise<number> {
  try {
    const response = await fetch(`${RAILWAY_API_BASE}/count/${encodeURIComponent(project)}`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch count: ${response.statusText}`);
    }

    const data = await response.json();
    
    if (data.success) {
      return data.count;
    } else {
      throw new Error('Backend returned error');
    }
  } catch (error) {
    console.error('Error fetching visitor count:', error);
    return 0;
  }
}

/**
 * Reset visitor count for a project
 */
export async function resetVisitorCount(project: string): Promise<void> {
  try {
    const response = await fetch(`${RAILWAY_API_BASE}/reset/${encodeURIComponent(project)}`, {
      method: 'POST'
    });

    if (!response.ok) {
      throw new Error(`Failed to reset count: ${response.statusText}`);
    }

    const data = await response.json();
    
    if (!data.success) {
      throw new Error('Backend returned error');
    }
  } catch (error) {
    console.error('Error resetting visitor count:', error);
    throw error;
  }
}

/**
 * Get Railway backend health status
 */
export async function getBackendHealth(): Promise<{ status: string; timestamp: string }> {
  try {
    const response = await fetch(`${RAILWAY_API_BASE}/health`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch health: ${response.statusText}`);
    }

    const data = await response.json();
    return {
      status: data.status,
      timestamp: data.timestamp
    };
  } catch (error) {
    console.error('Error fetching backend health:', error);
    return {
      status: 'unhealthy',
      timestamp: new Date().toISOString()
    };
  }
}

/**
 * Get backend statistics
 */
export async function getBackendStats(): Promise<{ totalProjects: number; projects: Record<string, any> }> {
  try {
    const response = await fetch(`${RAILWAY_API_BASE}/stats`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch stats: ${response.statusText}`);
    }

    const data = await response.json();
    
    if (data.success) {
      return {
        totalProjects: data.totalProjects,
        projects: data.projects
      };
    } else {
      throw new Error('Backend returned error');
    }
  } catch (error) {
    console.error('Error fetching backend stats:', error);
    return {
      totalProjects: 0,
      projects: {}
    };
  }
}








