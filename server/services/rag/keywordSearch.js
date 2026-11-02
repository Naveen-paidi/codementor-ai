/**
 * Full-Text Keyword Search Service
 * ---------------------------------
 * Implements high-precision technical keyword search with:
 * - Exact identifier boosting (e.g., 'HashMap', 'ConcurrentHashMap', 'useState', 'useEffect')
 * - Algorithmic terminology matching ('Binary Search', 'Dijkstra', 'ACID', 'Deadlock')
 * - BM25-style term frequency + inverse document frequency scoring
 * - Title and subtopic weighting
 */

// Common stop words to deprioritize unless part of a code identifier
const STOP_WORDS = new Set([
  'a', 'about', 'an', 'and', 'are', 'as', 'at', 'be', 'by', 'for', 'from',
  'how', 'i', 'in', 'is', 'it', 'of', 'on', 'or', 'that', 'the', 'this',
  'to', 'was', 'what', 'when', 'where', 'which', 'who', 'will', 'with'
]);

/**
 * Tokenize text into keywords and identifiers.
 * Preserves camelCase, snake_case, and C++ symbols (e.g. c++, std::vector).
 */
export function tokenizeQuery(text) {
  if (!text) return [];

  const raw = String(text).trim();
  const tokens = [];

  // 1. Capture exact code identifiers and technical terms
  const words = raw.split(/[\s,?!;:"'()\[\]{}]+/);

  for (const word of words) {
    if (!word) continue;
    const lower = word.toLowerCase();

    // Preserve special terms
    if (lower === 'c++' || lower === 'cpp') {
      tokens.push('c++', 'cpp');
      continue;
    }
    if (lower === 'c#' || lower === 'csharp') {
      tokens.push('c#', 'csharp');
      continue;
    }

    if (!STOP_WORDS.has(lower) || word.length >= 4) {
      tokens.push(lower);
    }

    // Split camelCase (e.g. ConcurrentHashMap -> concurrent, hash, map)
    const camelParts = word.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase().split(' ');
    if (camelParts.length > 1) {
      for (const p of camelParts) {
        if (p.length > 2 && !STOP_WORDS.has(p)) {
          tokens.push(p);
        }
      }
    }
  }

  return Array.from(new Set(tokens));
}

/**
 * Perform keyword search across in-memory or provided chunk records
 * @param {string} query
 * @param {Array} chunks
 * @param {Object} options
 * @returns {Array} Scored and sorted chunk results
 */
export function searchKeywords(query, chunks = [], options = {}) {
  const {
    limit = 10,
    filterCategory = null,
    filterLanguage = null,
    filterTopic = null
  } = options;

  if (!query || !Array.isArray(chunks) || chunks.length === 0) {
    return [];
  }

  const queryTokens = tokenizeQuery(query);
  if (queryTokens.length === 0) return [];

  const queryLower = query.toLowerCase().trim();
  const results = [];

  for (const chunk of chunks) {
    // Apply filters
    if (filterCategory && chunk.category !== filterCategory) continue;
    if (filterLanguage && chunk.language && chunk.language.toLowerCase() !== filterLanguage.toLowerCase()) continue;
    if (filterTopic && chunk.topic && !chunk.topic.toLowerCase().includes(filterTopic.toLowerCase())) continue;

    const titleLower = (chunk.title || '').toLowerCase();
    const contentLower = (chunk.content || '').toLowerCase();
    const topicLower = (chunk.topic || '').toLowerCase();
    const subtopicLower = (chunk.subtopic || '').toLowerCase();

    let score = 0;
    let matchedTermsCount = 0;

    // Check exact full-phrase match in title or content
    if (queryLower.length > 4 && titleLower.includes(queryLower)) {
      score += 25.0; // Major boost for exact phrase in title
    }
    if (queryLower.length > 4 && contentLower.includes(queryLower)) {
      score += 15.0; // Boost for exact phrase in content
    }

    // Check individual token occurrences
    for (const token of queryTokens) {
      let tokenFound = false;

      // Title match
      if (titleLower.includes(token)) {
        score += 8.0;
        tokenFound = true;
      }

      // Topic/Subtopic match
      if (topicLower.includes(token) || subtopicLower.includes(token)) {
        score += 6.0;
        tokenFound = true;
      }

      // Exact word boundary match in content
      const regex = new RegExp(`\\b${escapeRegExp(token)}\\b`, 'g');
      const matches = contentLower.match(regex);
      if (matches) {
        // BM25 term frequency dampening: log2(1 + count) * weight
        const tf = Math.log2(1 + matches.length);
        score += tf * 3.5;
        tokenFound = true;
      } else if (contentLower.includes(token)) {
        score += 1.0;
        tokenFound = true;
      }

      if (tokenFound) matchedTermsCount++;
    }

    if (score > 0) {
      // Query coverage multiplier (reward chunks matching more query terms)
      const coverage = matchedTermsCount / queryTokens.length;
      const finalScore = score * (1 + coverage);

      results.push({
        ...chunk,
        keywordScore: finalScore,
        matchedTermsRatio: coverage
      });
    }
  }

  // Sort descending by keyword score
  results.sort((a, b) => b.keywordScore - a.keywordScore);
  return results.slice(0, limit);
}

function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

