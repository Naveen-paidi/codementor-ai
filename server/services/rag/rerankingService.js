/**
 * Reranking Service
 * -----------------
 * Optional relevance reranking for retrieved candidate chunks.
 * Re-scores candidates by evaluating term density, code presence match,
 * and exact intent alignment without adding unnecessary latency.
 */

import { env } from '../../config/env.js';

export class RerankingService {
  /**
   * Reranks candidate chunks based on semantic alignment with user query.
   * @param {string} query
   * @param {Array} candidates
   * @param {Object} options
   * @returns {Array}
   */
  static rerank(query, candidates = [], options = {}) {
    const isEnabled = options.forceEnabled ?? env.RAG_RERANKING_ENABLED;
    if (!isEnabled || !Array.isArray(candidates) || candidates.length <= 1) {
      return candidates;
    }

    const qLower = query.toLowerCase().trim();
    const qWords = qLower.split(/\s+/).filter(w => w.length > 2);
    const requiresCode = /\b(code|example|implement|syntax|write|function|class)\b/i.test(qLower);

    const scored = candidates.map((item, originalIndex) => {
      let rerankScore = item.hybridScore || item.similarity || 0.5;

      const titleLower = (item.title || '').toLowerCase();
      const contentLower = (item.content || '').toLowerCase();

      // Title alignment boost
      if (titleLower.includes(qLower)) {
        rerankScore += 0.25;
      }

      // Query word coverage in content
      let matchedCount = 0;
      for (const w of qWords) {
        if (contentLower.includes(w)) matchedCount++;
      }
      const coverage = qWords.length > 0 ? (matchedCount / qWords.length) : 0;
      rerankScore += coverage * 0.2;

      // Code alignment
      const hasCode = contentLower.includes('```') || contentLower.includes('def ') || contentLower.includes('function ') || contentLower.includes('class ');
      if (requiresCode && hasCode) {
        rerankScore += 0.15;
      }

      return {
        ...item,
        rerankScore,
        originalIndex
      };
    });

    scored.sort((a, b) => b.rerankScore - a.rerankScore);
    return scored;
  }
}

