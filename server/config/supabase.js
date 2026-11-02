import './env.js';
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL =
  process.env.SUPABASE_URL;

const SUPABASE_ANON_KEY =
  process.env.SUPABASE_ANON_KEY;

const SUPABASE_SERVICE_ROLE_KEY =
  process.env.SUPABASE_SERVICE_ROLE_KEY;


let supabaseClient = null;
let supabaseAdminClient = null;


/**
 * ============================================================================
 * PUBLIC / USER CLIENT
 * ============================================================================
 *
 * Uses the anon key.
 *
 * Use this client when working with the authenticated user's JWT.
 */
if (
  SUPABASE_URL &&
  SUPABASE_ANON_KEY
) {
  supabaseClient = createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
        detectSessionInUrl: false
      }
    }
  );

  console.log(
    '[Supabase] Public client initialized successfully.'
  );
} else {
  console.warn(
    '[Supabase] SUPABASE_URL or SUPABASE_ANON_KEY is missing.'
  );
}


/**
 * ============================================================================
 * ADMIN / SERVER CLIENT
 * ============================================================================
 *
 * Uses the service-role key.
 *
 * IMPORTANT:
 * NEVER expose this key to React/frontend code.
 */
if (
  SUPABASE_URL &&
  SUPABASE_SERVICE_ROLE_KEY
) {
  supabaseAdminClient =
    createClient(
      SUPABASE_URL,
      SUPABASE_SERVICE_ROLE_KEY,
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
          detectSessionInUrl: false
        }
      }
    );

  console.log(
    '[Supabase] Admin client initialized successfully.'
  );
} else {
  console.warn(
    '[Supabase] SUPABASE_SERVICE_ROLE_KEY is missing. Admin operations will be unavailable.'
  );
}


/**
 * ============================================================================
 * CHECK SUPABASE CONFIGURATION
 * ============================================================================
 */

/**
 * Check whether the normal Supabase client is configured.
 */
export function isSupabaseConfigured() {
  return Boolean(
    supabaseClient
  );
}


/**
 * Check whether the admin Supabase client is configured.
 */
export function isSupabaseAdminConfigured() {
  return Boolean(
    supabaseAdminClient
  );
}


/**
 * ============================================================================
 * CLIENT ACCESS
 * ============================================================================
 */

/**
 * Get the public Supabase client.
 */
export function getSupabaseClient() {
  return supabaseClient;
}


/**
 * Get the admin Supabase client.
 */
export function getSupabaseAdminClient() {
  return supabaseAdminClient;
}


/**
 * ============================================================================
 * AUTHENTICATION
 * ============================================================================
 */

/**
 * Verify a Supabase access token.
 *
 * This uses the public client and passes
 * the user's JWT.
 *
 * @param {string} accessToken
 * @returns {Promise<object>}
 */
export async function getUserFromToken(
  accessToken
) {
  if (!supabaseClient) {
    throw new Error(
      'Supabase is not configured.'
    );
  }

  if (!accessToken) {
    throw new Error(
      'Access token is required.'
    );
  }

  const {
    data,
    error
  } =
    await supabaseClient.auth.getUser(
      accessToken
    );

  if (error) {
    throw error;
  }

  if (!data?.user) {
    throw new Error(
      'Invalid or expired access token.'
    );
  }

  return data.user;
}


/**
 * ============================================================================
 * ADMIN CLIENT
 * ============================================================================
 */

/**
 * Create/use the server-side admin client
 * for trusted operations.
 *
 * Useful for:
 * - inserting submissions
 * - updating XP
 * - recording mistakes
 * - storing mastery
 *
 * Do not send this client or its key
 * to the frontend.
 */
export function requireAdminClient() {
  if (!supabaseAdminClient) {
    throw new Error(
      'Supabase admin client is not configured. ' +
      'Set SUPABASE_SERVICE_ROLE_KEY in server/.env.'
    );
  }

  return supabaseAdminClient;
}


/**
 * ============================================================================
 * EXPORT CLIENTS
 * ============================================================================
 */

export const supabase =
  supabaseClient;

export const supabaseAdmin =
  supabaseAdminClient;

export {
  SUPABASE_URL
};