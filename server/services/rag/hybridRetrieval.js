/**
 * Hybrid Retrieval Engine
 * -----------------------
 * Core retrieval engine executing Vector Similarity + Keyword Full-Text Search in parallel.
 * Combines candidates using Reciprocal Rank Fusion (RRF) with constant k=60.
 *
 * Flow:
 * 1. Generate query embedding (cached/batched)
 * 2. Vector search (pgvector / local cosine similarity)
 * 3. Keyword full-text search (BM25 identifier boosted)
 * 4. Reciprocal Rank Fusion (RRF)
 * 5. Deduplication & metadata filtering
 * 6. Top 5-8 candidate selection
 * 7. Optional reranking stage
 */

import { getEmbedding } from './embeddingService.js';
import { vectorStore } from './vectorStore.js';
import { searchKeywords } from './keywordSearch.js';
import { RerankingService } from './rerankingService.js';

const RRF_K = 60; // Standard Reciprocal Rank Fusion constant
const DEFAULT_RETRIEVAL_LIMIT = 6;

/**
 * Execute Hybrid Retrieval
 * @param {string} query
 * @param {Object} options
 * @returns {Promise<{ chunks: Array, latencyMs: number, strategy: string }>}
 */
export async function hybridRetrieve(query, options = {}) {
  const startTime = Date.now();
  const cleanQuery = String(query || '').trim();

  const {
    limit = DEFAULT_RETRIEVAL_LIMIT,
    filterCategory = null,
    filterLanguage = null,
    filterTopic = null,
    enableReranking = false
  } = options;

  if (!cleanQuery) {
    return { chunks: [], latencyMs: 0, strategy: 'empty' };
  }

  // 1. Vector Search & Keyword Search in parallel
  const [vectorCandidates, keywordCandidates] = await Promise.all([
    // Vector search branch
    (async () => {
      try {
        const queryVec = await getEmbedding(cleanQuery);
        return await vectorStore.searchVectorSimilarity(queryVec, {
          limit: limit * 2,
          threshold: 0.30,
          filterCategory,
          filterLanguage,
          filterTopic,
          queryText: cleanQuery
        });
      } catch (err) {
        console.warn('[HybridRetrieval] Vector branch error:', err.message);
        return [];
      }
    })(),

    // Keyword search branch
    (async () => {
      try {
        const allChunks = vectorStore.getAllChunks();
        return searchKeywords(cleanQuery, allChunks, {
          limit: limit * 2,
          filterCategory,
          filterLanguage,
          filterTopic
        });
      } catch (err) {
        console.warn('[HybridRetrieval] Keyword branch error:', err.message);
        return [];
      }
    })()
  ]);

  // 2. Reciprocal Rank Fusion (RRF)
  const scoreMap = new Map(); // chunkId -> { chunk, rrfScore, vectorRank, keywordRank }

  // Process Vector ranks (1-indexed)
  vectorCandidates.forEach((item, index) => {
    const rank = index + 1;
    const rrf = 1 / (RRF_K + rank);
    const existing = scoreMap.get(item.id) || {
      chunk: item,
      rrfScore: 0,
      vectorRank: null,
      keywordRank: null
    };
    existing.rrfScore += rrf;
    existing.vectorRank = rank;
    existing.similarity = item.similarity;
    scoreMap.set(item.id, existing);
  });

  // Process Keyword ranks (1-indexed)
  keywordCandidates.forEach((item, index) => {
    const rank = index + 1;
    const rrf = 1 / (RRF_K + rank);
    const existing = scoreMap.get(item.id) || {
      chunk: item,
      rrfScore: 0,
      vectorRank: null,
      keywordRank: null
    };
    existing.rrfScore += rrf;
    existing.keywordRank = rank;
    existing.keywordScore = item.keywordScore;
    scoreMap.set(item.id, existing);
  });

  // Convert to sorted candidate list
  let fusedCandidates = Array.from(scoreMap.values())
    .map(entry => ({
      ...entry.chunk,
      hybridScore: entry.rrfScore,
      vectorRank: entry.vectorRank,
      keywordRank: entry.keywordRank,
      similarity: entry.similarity ?? null
    }))
    .sort((a, b) => b.hybridScore - a.hybridScore);

  // 3. Remove duplicate chunks with identical content or headings
  const seenContent = new Set();
  const deduplicated = [];
  for (const c of fusedCandidates) {
    const signature = (c.content || '').slice(0, 120).trim();
    if (!seenContent.has(signature)) {
      seenContent.add(signature);
      deduplicated.push(c);
    }
  }

  // 4. Select top candidates
  let topChunks = deduplicated.slice(0, limit);

  // 5. Optional Reranking stage
  if (enableReranking && topChunks.length > 1) {
    topChunks = RerankingService.rerank(cleanQuery, topChunks, { forceEnabled: true });
  }

  const latencyMs = Date.now() - startTime;

  return {
    chunks: topChunks,
    latencyMs,
    strategy: 'hybrid_rrf',
    vectorCount: vectorCandidates.length,
    keywordCount: keywordCandidates.length
  };
}

