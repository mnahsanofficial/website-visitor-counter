/**
 * Website Visitor Counter - Version 2.0.0
 * Badge-based visitor counter similar to GitHub profile views
 * No database setup required - just use the badge URL!
 */

/**
 * Interface for visitor counter options
 */
export interface VisitorCounterOptions {
  project: string;
  label?: string;
  color?: string;
  style?: 'flat' | 'plastic' | 'for-the-badge' | 'social';
  logo?: string;
  logoColor?: string;
}

/**
 * Default options for the visitor counter
 */
const DEFAULT_OPTIONS: Required<VisitorCounterOptions> = {
  project: '',
  label: 'visitors',
  color: '0e75b6',
  style: 'flat',
  logo: '',
  logoColor: 'white'
};

/**
 * Generates a visitor counter badge URL
 * @param options - Configuration options for the badge
 * @returns Promise<string> - The badge URL
 */
export async function getVisitorCounterBadge(options: VisitorCounterOptions): Promise<string> {
  try {
    const config = { ...DEFAULT_OPTIONS, ...options };
    
    if (!config.project) {
      throw new Error('Project name is required');
    }

    // For now, we'll use a mock service
    // In production, this would be your hosted service
    const baseUrl = 'https://your-visitor-counter-service.com';
    
    const params = new URLSearchParams({
      project: config.project,
      label: config.label,
      color: config.color,
      style: config.style,
      logo: config.logo,
      logoColor: config.logoColor
    });

    return `${baseUrl}/counter?${params.toString()}`;
  } catch (error) {
    throw new Error(`Failed to generate badge URL: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

/**
 * Generates a simple visitor count badge URL (most common use case)
 * @param project - Your project/website name
 * @returns Promise<string> - The badge URL
 */
export async function getSimpleVisitorBadge(project: string): Promise<string> {
  return getVisitorCounterBadge({ project });
}

/**
 * Generates an HTML img tag for the visitor counter
 * @param options - Configuration options for the badge
 * @returns Promise<string> - HTML img tag
 */
export async function getVisitorCounterHTML(options: VisitorCounterOptions): Promise<string> {
  try {
    const badgeUrl = await getVisitorCounterBadge(options);
    const altText = `${options.label || 'visitors'} count for ${options.project}`;
    
    return `<img src="${badgeUrl}" alt="${altText}" />`;
  } catch (error) {
    throw new Error(`Failed to generate HTML: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

/**
 * Generates a Markdown badge for the visitor counter
 * @param options - Configuration options for the badge
 * @returns Promise<string> - Markdown badge
 */
export async function getVisitorCounterMarkdown(options: VisitorCounterOptions): Promise<string> {
  try {
    const badgeUrl = await getVisitorCounterBadge(options);
    const altText = `${options.label || 'visitors'} count for ${options.project}`;
    
    return `![${altText}](${badgeUrl})`;
  } catch (error) {
    throw new Error(`Failed to generate Markdown: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

/**
 * Generates a React component for the visitor counter
 * @param options - Configuration options for the badge
 * @returns Promise<string> - React component code
 */
export async function getVisitorCounterReact(options: VisitorCounterOptions): Promise<string> {
  try {
    const badgeUrl = await getVisitorCounterBadge(options);
    const altText = `${options.label || 'visitors'} count for ${options.project}`;
    
    return `import React from 'react';

function VisitorCounter() {
  return (
    <img 
      src="${badgeUrl}" 
      alt="${altText}"
      style={{ display: 'inline-block' }}
    />
  );
}

export default VisitorCounter;`;
  } catch (error) {
    throw new Error(`Failed to generate React component: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}


