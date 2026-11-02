/**
 * Embedding Service
 * -----------------
 * Manages text embedding generation via OpenRouter's dedicated embeddings endpoint.
 * Features:
 * - Batched embedding requests to minimize network round-trips
 * - In-memory and persistent disk caching for repeated queries
 * - Dimension verification and normalization (default: 1536)
 * - Safe fallback deterministic embedding generator if offline
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { env } from '../../config/env.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const CACHE_FILE = path.resolve(__dirname, '../../database/embedding_cache.json');

const OPENROUTER_EMBEDDINGS_URL = 'https://openrouter.ai/api/v1/embeddings';
const EMBEDDING_MODEL = env.EMBEDDING_MODEL || 'text-embedding-3-small';
const EMBEDDING_DIMENSIONS = Number(env.EMBEDDING_DIMENSIONS) || 1536;

// In-memory cache
const memoryCache = new Map();

// Load cache from disk
function loadDiskCache() {
  try {
    if (fs.existsSync(CACHE_FILE)) {
      const raw = fs.readFileSync(CACHE_FILE, 'utf-8');
      const data = JSON.parse(raw);
      for (const [k, v] of Object.entries(data)) {
        memoryCache.set(k, v);
      }
    }
  } catch (err) {
    console.warn('[EmbeddingService] Cache load skipped:', err.message);
  }
}

// Persist cache to disk debounce
let saveTimeout = null;
function persistCacheDebounced() {
  if (saveTimeout) clearTimeout(saveTimeout);
  saveTimeout = setTimeout(() => {
    try {
      const dir = path.dirname(CACHE_FILE);
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
      const obj = {};
      // Keep up to 2,000 most recent items
      const entries = Array.from(memoryCache.entries()).slice(-2000);
      for (const [k, v] of entries) {
        obj[k] = v;
      }
      fs.writeFileSync(CACHE_FILE, JSON.stringify(obj), 'utf-8');
    } catch (err) {
      console.warn('[EmbeddingService] Cache save skipped:', err.message);
    }
  }, 1000);
}

loadDiskCache();

/**
 * Generate a cache key from text + model.
 */
function getCacheKey(text) {
  const norm = String(text || '').trim().toLowerCase();
  return `${EMBEDDING_MODEL}:${norm}`;
}

/**
 * Deterministic pseudo-embedding generator used strictly as offline fallback
 * if upstream API is unreachable.
 */
function createDeterministicFallback(text, dimensions = EMBEDDING_DIMENSIONS) {
  const vec = new Array(dimensions).fill(0);
  const str = String(text || '');
  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i);
    const idx = (code * 31 + i) % dimensions;
    vec[idx] += Math.sin(code + i);
  }
  // Normalize vector to unit length
  const norm = Math.sqrt(vec.reduce((sum, val) => sum + val * val, 0)) || 1;
  return vec.map(v => v / norm);
}

/**
 * Generate embedding for a single text string.
 * @param {string} text
 * @returns {Promise<number[]>}
 */
export async function getEmbedding(text) {
  const clean = String(text || '').trim();
  if (!clean) {
    return new Array(EMBEDDING_DIMENSIONS).fill(0);
  }

  const cacheKey = getCacheKey(clean);
  if (memoryCache.has(cacheKey)) {
    return memoryCache.get(cacheKey);
  }

  const apiKey = env.OPENROUTER_API_KEY;
  if (!apiKey) {
    console.warn('[EmbeddingService] OPENROUTER_API_KEY missing, using fallback embedding.');
    const fallback = createDeterministicFallback(clean, EMBEDDING_DIMENSIONS);
    memoryCache.set(cacheKey, fallback);
    return fallback;
  }

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);

    const res = await fetch(OPENROUTER_EMBEDDINGS_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey.trim()}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'http://localhost:5173',
        'X-Title': 'CodeMentor RAG'
      },
      body: JSON.stringify({
        model: EMBEDDING_MODEL,
        input: clean,
        dimensions: EMBEDDING_DIMENSIONS
      }),
      signal: controller.signal
    });

    clearTimeout(timeout);

    if (!res.ok) {
      const errText = await res.text();
      console.warn(`[EmbeddingService] Upstream HTTP ${res.status}: ${errText.slice(0, 150)}`);
      const fallback = createDeterministicFallback(clean, EMBEDDING_DIMENSIONS);
      memoryCache.set(cacheKey, fallback);
      return fallback;
    }

    const data = await res.json();
    const vector = data?.data?.[0]?.embedding;

    if (!Array.isArray(vector) || vector.length === 0) {
      throw new Error('Malformed embedding response structure.');
    }

    // Cache valid vector
    memoryCache.set(cacheKey, vector);
    persistCacheDebounced();
    return vector;
  } catch (err) {
    console.warn('[EmbeddingService] Generation error, falling back:', err.message);
    const fallback = createDeterministicFallback(clean, EMBEDDING_DIMENSIONS);
    memoryCache.set(cacheKey, fallback);
    return fallback;
  }
}

/**
 * Batch generate embeddings for an array of texts.
 * Splits into batches of 20 to conform to API payload limits.
 * @param {string[]} texts
 * @returns {Promise<number[][]>}
 */
export async function getBatchEmbeddings(texts = []) {
  if (!Array.isArray(texts) || texts.length === 0) return [];

  const results = new Array(texts.length);
  const missingIndices = [];
  const missingTexts = [];

  // Check cache first
  for (let i = 0; i < texts.length; i++) {
    const clean = String(texts[i] || '').trim();
    const key = getCacheKey(clean);
    if (memoryCache.has(key)) {
      results[i] = memoryCache.get(key);
    } else {
      missingIndices.push(i);
      missingTexts.push(clean);
    }
  }

  if (missingTexts.length === 0) {
    return results;
  }

  const apiKey = env.OPENROUTER_API_KEY;
  const BATCH_SIZE = 20;

  for (let b = 0; b < missingTexts.length; b += BATCH_SIZE) {
    const batchTexts = missingTexts.slice(b, b + BATCH_SIZE);
    const batchIndices = missingIndices.slice(b, b + BATCH_SIZE);

    if (!apiKey) {
      for (let j = 0; j < batchTexts.length; j++) {
        const fallback = createDeterministicFallback(batchTexts[j], EMBEDDING_DIMENSIONS);
        results[batchIndices[j]] = fallback;
        memoryCache.set(getCacheKey(batchTexts[j]), fallback);
      }
      continue;
    }

    try {
      const res = await fetch(OPENROUTER_EMBEDDINGS_URL, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey.trim()}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': 'http://localhost:5173',
          'X-Title': 'CodeMentor RAG'
        },
        body: JSON.stringify({
          model: EMBEDDING_MODEL,
          input: batchTexts,
          dimensions: EMBEDDING_DIMENSIONS
        })
      });

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}: ${await res.text()}`);
      }

      const data = await res.json();
      const items = data?.data || [];

      for (let j = 0; j < batchTexts.length; j++) {
        const vec = items[j]?.embedding || createDeterministicFallback(batchTexts[j], EMBEDDING_DIMENSIONS);
        results[batchIndices[j]] = vec;
        memoryCache.set(getCacheKey(batchTexts[j]), vec);
      }
    } catch (err) {
      console.warn(`[EmbeddingService] Batch ${b} failed (${err.message}), using fallbacks.`);
      for (let j = 0; j < batchTexts.length; j++) {
        const fallback = createDeterministicFallback(batchTexts[j], EMBEDDING_DIMENSIONS);
        results[batchIndices[j]] = fallback;
        memoryCache.set(getCacheKey(batchTexts[j]), fallback);
      }
    }
  }

  persistCacheDebounced();
  return results;
}

export function getEmbeddingDimensions() {
  return EMBEDDING_DIMENSIONS;
}

export function getEmbeddingModelName() {
  return EMBEDDING_MODEL;
}

