// Website Visitor Counter v3.1.0
// Multi-platform cloud adapter system with improved security and scalability

// Platform adapters
export interface CloudPlatformAdapter {
  name: string;
  getCounterUrl(project: string, options?: VisitorCounterOptions): string;
  getCountUrl(project: string): string;
  getResetUrl(project: string): string;
  getHealthUrl(): string;
  getStatsUrl(): string;
}

export class RailwayAdapter implements CloudPlatformAdapter {
  name = 'railway';
  private baseUrl: string;

  constructor(baseUrl?: string) {
    this.baseUrl = baseUrl || process.env.RAILWAY_API_BASE || 'https://websitevisiotrscounter-production.up.railway.app';
  }

  getCounterUrl(project: string, options?: VisitorCounterOptions): string {
    return `${this.baseUrl}/counter?project=${encodeURIComponent(project)}&${this.buildQueryString(options)}`;
  }

  getCountUrl(project: string): string {
    return `${this.baseUrl}/count/${encodeURIComponent(project)}`;
  }

  getResetUrl(project: string): string {
    return `${this.baseUrl}/reset/${encodeURIComponent(project)}`;
  }

  getHealthUrl(): string {
    return `${this.baseUrl}/health`;
  }

  getStatsUrl(): string {
    return `${this.baseUrl}/stats`;
  }

  private buildQueryString(options?: VisitorCounterOptions): string {
    if (!options) return '';
    const params = new URLSearchParams();
    if (options.label) params.append('label', options.label);
    if (options.color) params.append('color', options.color);
    if (options.style) params.append('style', options.style);
    if (options.base) params.append('base', options.base.toString());
    if (options.abbreviated) params.append('abbreviated', options.abbreviated.toString());
    return params.toString();
  }
}

export class VercelAdapter implements CloudPlatformAdapter {
  name = 'vercel';
  private baseUrl: string;

  constructor(baseUrl?: string) {
    this.baseUrl = baseUrl || process.env.VERCEL_API_BASE || 'https://your-vercel-app.vercel.app';
  }

  getCounterUrl(project: string, options?: VisitorCounterOptions): string {
    return `${this.baseUrl}/counter?project=${encodeURIComponent(project)}&${this.buildQueryString(options)}`;
  }

  getCountUrl(project: string): string {
    return `${this.baseUrl}/count/${encodeURIComponent(project)}`;
  }

  getResetUrl(project: string): string {
    return `${this.baseUrl}/reset/${encodeURIComponent(project)}`;
  }

  getHealthUrl(): string {
    return `${this.baseUrl}/health`;
  }

  getStatsUrl(): string {
    return `${this.baseUrl}/stats`;
  }

  private buildQueryString(options?: VisitorCounterOptions): string {
    if (!options) return '';
    const params = new URLSearchParams();
    if (options.label) params.append('label', options.label);
    if (options.color) params.append('color', options.color);
    if (options.style) params.append('style', options.style);
    if (options.base) params.append('base', options.base.toString());
    if (options.abbreviated) params.append('abbreviated', options.abbreviated.toString());
    return params.toString();
  }
}

export class NetlifyAdapter implements CloudPlatformAdapter {
  name = 'netlify';
  private baseUrl: string;

  constructor(baseUrl?: string) {
    this.baseUrl = baseUrl || process.env.NETLIFY_API_BASE || 'https://your-netlify-app.netlify.app';
  }

  getCounterUrl(project: string, options?: VisitorCounterOptions): string {
    return `${this.baseUrl}/counter?project=${encodeURIComponent(project)}&${this.buildQueryString(options)}`;
  }

  getCountUrl(project: string): string {
    return `${this.baseUrl}/count/${encodeURIComponent(project)}`;
  }

  getResetUrl(project: string): string {
    return `${this.baseUrl}/reset/${encodeURIComponent(project)}`;
  }

  getHealthUrl(): string {
    return `${this.baseUrl}/health`;
  }

  getStatsUrl(): string {
    return `${this.baseUrl}/stats`;
  }

  private buildQueryString(options?: VisitorCounterOptions): string {
    if (!options) return '';
    const params = new URLSearchParams();
    if (options.label) params.append('label', options.label);
    if (options.color) params.append('color', options.color);
    if (options.style) params.append('style', options.style);
    if (options.base) params.append('base', options.base.toString());
    if (options.abbreviated) params.append('abbreviated', options.abbreviated.toString());
    return params.toString();
  }
}

export class CloudflareAdapter implements CloudPlatformAdapter {
  name = 'cloudflare';
  private baseUrl: string;

  constructor(baseUrl?: string) {
    this.baseUrl = baseUrl || process.env.CLOUDFLARE_API_BASE || 'https://your-cloudflare-app.pages.dev';
  }

  getCounterUrl(project: string, options?: VisitorCounterOptions): string {
    return `${this.baseUrl}/counter?project=${encodeURIComponent(project)}&${this.buildQueryString(options)}`;
  }

  getCountUrl(project: string): string {
    return `${this.baseUrl}/count/${encodeURIComponent(project)}`;
  }

  getResetUrl(project: string): string {
    return `${this.baseUrl}/reset/${encodeURIComponent(project)}`;
  }

  getHealthUrl(): string {
    return `${this.baseUrl}/health`;
  }

  getStatsUrl(): string {
    return `${this.baseUrl}/stats`;
  }

  private buildQueryString(options?: VisitorCounterOptions): string {
    if (!options) return '';
    const params = new URLSearchParams();
    if (options.label) params.append('label', options.label);
    if (options.color) params.append('color', options.color);
    if (options.style) params.append('style', options.style);
    if (options.base) params.append('base', options.base.toString());
    if (options.abbreviated) params.append('abbreviated', options.abbreviated.toString());
    return params.toString();
  }
}

// Default adapter (Railway for backward compatibility)
const defaultAdapter = new RailwayAdapter();

// Visitor counter options interface
export interface VisitorCounterOptions {
  label?: string;
  color?: string;
  style?: 'flat' | 'flat-square' | 'for-the-badge' | 'plastic' | 'social';
  base?: number;
  abbreviated?: boolean;
  platform?: 'railway' | 'vercel' | 'netlify' | 'cloudflare' | 'custom';
  customBaseUrl?: string;
}

// Platform factory
export function createPlatformAdapter(options?: VisitorCounterOptions): CloudPlatformAdapter {
  if (options?.customBaseUrl) {
    return new RailwayAdapter(options.customBaseUrl); // Use Railway adapter as base for custom URLs
  }

  switch (options?.platform) {
    case 'vercel':
      return new VercelAdapter();
    case 'netlify':
      return new NetlifyAdapter();
    case 'cloudflare':
      return new CloudflareAdapter();
    case 'railway':
    default:
      return defaultAdapter;
  }
}

// Core functions with improved security and error handling
export async function getVisitorCounterBadge(project: string, options?: VisitorCounterOptions): Promise<string> {
  try {
    const adapter = createPlatformAdapter(options);
    
    // Add rate limiting check
    if (!isRateLimitAllowed(project)) {
      throw new Error('Rate limit exceeded');
    }

    const response = await fetch(adapter.getCounterUrl(project, options), {
      method: 'GET',
      headers: {
        'User-Agent': 'Website-Visitor-Counter/3.1.0',
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    return data.badgeUrl || data.url || `https://img.shields.io/badge/visitors-${data.count || 0}-blue`;
  } catch (error) {
    console.warn('Failed to fetch from backend, using fallback:', error);
    // Fallback to shields.io with base count
    const count = options?.base || 0;
    return `https://img.shields.io/badge/visitors-${count}-blue`;
  }
}

export async function getVisitorCount(project: string, options?: VisitorCounterOptions): Promise<number> {
  try {
    const adapter = createPlatformAdapter(options);
    
    if (!isRateLimitAllowed(project)) {
      throw new Error('Rate limit exceeded');
    }

    const response = await fetch(adapter.getCountUrl(project), {
      method: 'GET',
      headers: {
        'User-Agent': 'Website-Visitor-Counter/3.1.0',
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    return data.count || 0;
  } catch (error) {
    console.warn('Failed to fetch visitor count:', error);
    return options?.base || 0;
  }
}

export async function resetVisitorCount(project: string, options?: VisitorCounterOptions): Promise<boolean> {
  try {
    const adapter = createPlatformAdapter(options);
    
    if (!isRateLimitAllowed(project)) {
      throw new Error('Rate limit exceeded');
    }

    const response = await fetch(adapter.getResetUrl(project), {
      method: 'POST',
      headers: {
        'User-Agent': 'Website-Visitor-Counter/3.1.0',
        'Content-Type': 'application/json',
      },
    });

    return response.ok;
  } catch (error) {
    console.warn('Failed to reset visitor count:', error);
    return false;
  }
}

// Utility functions
export function getSimpleVisitorBadge(project: string, options?: VisitorCounterOptions): string {
  const adapter = createPlatformAdapter(options);
  return adapter.getCounterUrl(project, options);
}

export function getVisitorCounterHTML(project: string, options?: VisitorCounterOptions): string {
  const badgeUrl = getSimpleVisitorBadge(project, options);
  return `<img src="${badgeUrl}" alt="visitors" />`;
}

export function getVisitorCounterMarkdown(project: string, options?: VisitorCounterOptions): string {
  const badgeUrl = getSimpleVisitorBadge(project, options);
  return `![visitors](${badgeUrl})`;
}

export function getVisitorCounterReact(project: string, options?: VisitorCounterOptions): string {
  const badgeUrl = getSimpleVisitorBadge(project, options);
  return `<img src="${badgeUrl}" alt="visitors" />`;
}

// Backend monitoring functions
export async function getBackendHealth(options?: VisitorCounterOptions): Promise<boolean> {
  try {
    const adapter = createPlatformAdapter(options);
    const response = await fetch(adapter.getHealthUrl(), {
      method: 'GET',
      headers: {
        'User-Agent': 'Website-Visitor-Counter/3.1.0',
        'Accept': 'application/json',
      },
    });
    return response.ok;
  } catch (error) {
    return false;
  }
}

export async function getBackendStats(options?: VisitorCounterOptions): Promise<any> {
  try {
    const adapter = createPlatformAdapter(options);
    const response = await fetch(adapter.getStatsUrl(), {
      method: 'GET',
      headers: {
        'User-Agent': 'Website-Visitor-Counter/3.1.0',
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.warn('Failed to fetch backend stats:', error);
    return { error: 'Failed to fetch stats' };
  }
}

// Rate limiting implementation
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const RATE_LIMIT_MAX = 10; // 10 requests per minute

function isRateLimitAllowed(project: string): boolean {
  const now = Date.now();
  const key = `rate_limit_${project}`;
  const current = rateLimitMap.get(key);

  if (!current || now > current.resetTime) {
    rateLimitMap.set(key, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (current.count >= RATE_LIMIT_MAX) {
    return false;
  }

  current.count++;
  return true;
}










