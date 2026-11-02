import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

/*
 * __dirname does not exist in ES modules.
 * Recreate it using import.meta.url.
 */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/*
 * Load .env from the server directory.
 *
 * Expected structure:
 *
 * project/
 * ├── server/
 * │   ├── config/
 * │   │   └── env.js
 * │   └── .env
 * └── client/
 */
const envPath = path.resolve(__dirname, '../.env');

const result = dotenv.config({
  path: envPath,
});

if (result.error) {
  console.warn(
    `[ENV] Could not load .env from: ${envPath}`
  );
} else {
  console.log(
    `[ENV] Environment variables loaded from: ${envPath}`
  );
}

/**
 * Read an environment variable safely.
 */
export function getEnv(
  name,
  defaultValue = undefined
) {
  const value = process.env[name];

  if (
    value === undefined ||
    value === null ||
    value.trim() === ''
  ) {
    return defaultValue;
  }

  return value.trim();
}

/**
 * Environment configuration.
 */
export const env = {
  NODE_ENV: getEnv(
    'NODE_ENV',
    'development'
  ),

  PORT: Number(
    getEnv('PORT', '5000')
  ),

  OPENROUTER_API_KEY: getEnv(
    'OPENROUTER_API_KEY'
  ),

  OPENROUTER_MODEL: getEnv(
    'OPENROUTER_MODEL',
    'meta-llama/llama-3.3-70b-instruct'
  ),

  GEMINI_API_KEY: getEnv(
    'GEMINI_API_KEY'
  ),

  GEMINI_MODEL: getEnv(
    'GEMINI_MODEL',
    'meta-llama/llama-3.3-70b-instruct'
  ),

  SUPABASE_URL: getEnv(
    'SUPABASE_URL'
  ),

  SUPABASE_ANON_KEY: getEnv(
    'SUPABASE_ANON_KEY'
  ),

  SUPABASE_SERVICE_ROLE_KEY: getEnv(
    'SUPABASE_SERVICE_ROLE_KEY'
  ),

  EMBEDDING_MODEL: getEnv(
    'EMBEDDING_MODEL',
    'text-embedding-3-small'
  ),

  EMBEDDING_DIMENSIONS: Number(
    getEnv('EMBEDDING_DIMENSIONS', '1536')
  ),

  RAG_RERANKING_ENABLED: getEnv(
    'RAG_RERANKING_ENABLED',
    'false'
  ) === 'true',

  SUPER_ADMIN_1_EMAIL: getEnv('SUPER_ADMIN_1_EMAIL'),
  SUPER_ADMIN_1_PASSWORD: getEnv('SUPER_ADMIN_1_PASSWORD'),
  SUPER_ADMIN_2_EMAIL: getEnv('SUPER_ADMIN_2_EMAIL'),
  SUPER_ADMIN_2_PASSWORD: getEnv('SUPER_ADMIN_2_PASSWORD'),
};

/*
 * Keep `config` as an alias because server.js
 * currently imports `config`.
 *
 * This avoids breaking the existing server.js.
 */
export const config = env;

/**
 * Validate environment variables.
 */
export function validateEnv(options = {}) {
  const {
    strict = false,
  } = options;

  const missing = [];

  if (!env.OPENROUTER_API_KEY && !env.GEMINI_API_KEY) {
    missing.push('OPENROUTER_API_KEY');
  }

  if (!env.SUPABASE_URL) {
    missing.push('SUPABASE_URL');
  }

  if (!env.SUPABASE_ANON_KEY) {
    missing.push('SUPABASE_ANON_KEY');
  }

  /*
   * Service-role key is checked separately.
   *
   * The application can technically run without it,
   * but server-side persistence requiring admin access
   * will not work.
   */
  if (!env.SUPABASE_SERVICE_ROLE_KEY) {
    console.warn(
      '[ENV] SUPABASE_SERVICE_ROLE_KEY is missing. ' +
      'Admin Supabase operations will be unavailable.'
    );
  }

  if (missing.length === 0) {
    console.log(
      '[ENV] All required environment variables are configured.'
    );

    return {
      valid: true,
      missing: [],
    };
  }

  console.warn(
    `[ENV] Missing environment variables: ${missing.join(', ')}`
  );

  if (strict) {
    throw new Error(
      `Missing required environment variables: ${missing.join(', ')}`
    );
  }

  return {
    valid: false,
    missing,
  };
}

/**
 * Return a safe configuration object.
 *
 * API keys are NEVER returned.
 */
export function getConfig() {
  return {
    nodeEnv: env.NODE_ENV,

    port: env.PORT,

    openrouter: {
      apiKeyConfigured:
        Boolean(env.OPENROUTER_API_KEY),

      model: env.OPENROUTER_MODEL,
    },

    gemini: {
      apiKeyConfigured:
        Boolean(env.OPENROUTER_API_KEY || env.GEMINI_API_KEY),

      model: env.OPENROUTER_MODEL,
    },

    supabase: {
      url:
        env.SUPABASE_URL || null,

      anonKeyConfigured:
        Boolean(env.SUPABASE_ANON_KEY),

      serviceRoleKeyConfigured:
        Boolean(
          env.SUPABASE_SERVICE_ROLE_KEY
        ),
    },
  };
}