import { createClient, SupabaseClient } from '@supabase/supabase-js';

/**
 * Interface for the visitors table structure
 */
interface Visitor {
  id: string;
  project_id: string;
  ip_hash: string;
  created_at: string;
}

/**
 * Interface for the Supabase database schema
 */
interface Database {
  public: {
    Tables: {
      visitors: {
        Row: Visitor;
        Insert: Omit<Visitor, 'id' | 'created_at'>;
        Update: Partial<Omit<Visitor, 'id' | 'created_at'>>;
      };
    };
  };
}

/**
 * Fetches the visitor's IP address from ipify.org
 * @returns Promise<string> - The visitor's IP address
 */
async function getVisitorIP(): Promise<string> {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    if (!response.ok) {
      throw new Error(`Failed to fetch IP: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    return data.ip;
  } catch (error) {
    throw new Error(`Failed to get visitor IP: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

/**
 * Creates a SHA-256 hash of the given string
 * @param input - The string to hash
 * @returns Promise<string> - The hexadecimal hash
 */
async function createHash(input: string): Promise<string> {
  try {
    const encoder = new TextEncoder();
    const data = encoder.encode(input);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
  } catch (error) {
    throw new Error(`Failed to create hash: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

/**
 * Gets the total unique visitor count for a project
 * @param projectId - The unique identifier for the project/website
 * @param supabaseUrl - The Supabase project URL
 * @param supabaseKey - The Supabase anonymous key
 * @returns Promise<number> - The total unique visitor count
 */
export async function getVisitorCount(
  projectId: string,
  supabaseUrl: string,
  supabaseKey: string
): Promise<number> {
  try {
    // Validate inputs
    if (!projectId || !supabaseUrl || !supabaseKey) {
      throw new Error('All parameters are required: projectId, supabaseUrl, and supabaseKey');
    }

    // Get visitor IP and hash it
    const visitorIP = await getVisitorIP();
    const ipHash = await createHash(visitorIP);

    // Create Supabase client
    const supabase: SupabaseClient<Database> = createClient(supabaseUrl, supabaseKey);

    // Try to insert the visitor (will fail if duplicate due to unique constraint)
    try {
      await supabase
        .from('visitors')
        .insert({
          project_id: projectId,
          ip_hash: ipHash
        });
    } catch (insertError: any) {
      // If it's a duplicate key error, that's fine - just continue
      // Other errors should be re-thrown
      if (insertError.code !== '23505') { // PostgreSQL unique constraint violation code
        throw insertError;
      }
    }

    // Get the total count of unique visitors for this project
    const { count, error } = await supabase
      .from('visitors')
      .select('*', { count: 'exact', head: true })
      .eq('project_id', projectId);

    if (error) {
      throw new Error(`Failed to get visitor count: ${error.message}`);
    }

    return count || 0;
  } catch (error) {
    throw new Error(`getVisitorCount failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

// Export types for consumers
export type { Visitor, Database };
