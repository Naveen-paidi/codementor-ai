import {
  generateEmbedding,
  isGeminiConfigured
} from '../config/gemini.js';

import {
  supabase,
  isSupabaseConfigured
} from '../config/supabase.js';


/**
 * ============================================================================
 * RAG SERVICE
 * ============================================================================
 *
 * Retrieval-Augmented Generation for the programming tutor.
 *
 * Flow:
 *
 * User question
 *      ↓
 * Generate Gemini embedding
 *      ↓
 * Supabase pgvector
 *      ↓
 * match_documents()
 *      ↓
 * Relevant curriculum context
 *      ↓
 * Gemini Tutor
 *
 * JavaScript only.
 */

const DEFAULT_MATCH_THRESHOLD = 0.50;
const DEFAULT_MATCH_COUNT = 5;


/**
 * Normalise language names.
 */
function normalizeLanguage(language) {
  if (!language) return null;

  const value = String(language)
    .trim()
    .toLowerCase();

  const aliases = {
    js: 'javascript',
    'java script': 'javascript',
    py: 'python',
    'c++': 'cpp',
    cplusplus: 'cpp'
  };

  return aliases[value] || value;
}


/**
 * Simple fallback curriculum knowledge.
 *
 * This is only used when Supabase/Gemini RAG is unavailable.
 * The canonical curriculum remains the primary source of truth.
 */
const FALLBACK_KNOWLEDGE = {
  python: [
    {
      keywords: [
        'variable',
        'variables',
        'let',
        'value'
      ],
      content:
        'Python variables are names bound to objects. Python is dynamically typed, so a variable can refer to objects of different types at different times.'
    },
    {
      keywords: [
        'input',
        'input()',
        'output',
        'print'
      ],
      content:
        'Python uses input() to read text from standard input and print() to display output. input() returns a string by default.'
    },
    {
      keywords: [
        'if',
        'elif',
        'else',
        'condition',
        'conditional'
      ],
      content:
        'Python uses if, elif and else to control which block of code executes based on conditions. Indentation defines the code blocks.'
    },
    {
      keywords: [
        'loop',
        'for',
        'while',
        'break',
        'continue'
      ],
      content:
        'Python provides for and while loops for repetition. break exits a loop and continue skips to the next iteration.'
    }
  ],

  javascript: [
    {
      keywords: [
        'let',
        'const',
        'var',
        'variable'
      ],
      content:
        'Modern JavaScript commonly uses let for reassignable variables and const for bindings that should not be reassigned. Both are block scoped.'
    },
    {
      keywords: [
        'function',
        'arrow',
        'arrow function'
      ],
      content:
        'JavaScript supports regular functions and arrow functions. Arrow functions have lexical this and do not create their own this binding.'
    },
    {
      keywords: [
        'promise',
        'async',
        'await',
        'asynchronous'
      ],
      content:
        'Promises represent the eventual result of an asynchronous operation. async functions return Promises, and await pauses the async function until the Promise settles.'
    }
  ],

  java: [
    {
      keywords: [
        'class',
        'object',
        'oops',
        'oop'
      ],
      content:
        'Java is an object-oriented language where classes define the structure and behaviour of objects.'
    },
    {
      keywords: [
        'scanner',
        'input',
        'standard input'
      ],
      content:
        'Java commonly uses java.util.Scanner for reading input from standard input.'
    }
  ],

  c: [
    {
      keywords: [
        'pointer',
        'pointers',
        'address'
      ],
      content:
        'A C pointer stores a memory address. The address-of operator & obtains an address and * can dereference a pointer.'
    },
    {
      keywords: [
        'array',
        'arrays'
      ],
      content:
        'C arrays store elements of the same type in contiguous memory and use zero-based indexing.'
    }
  ],

  cpp: [
    {
      keywords: [
        'vector',
        'stl',
        'array'
      ],
      content:
        'C++ std::vector is a dynamic sequence container that manages a resizable contiguous array.'
    },
    {
      keywords: [
        'class',
        'object',
        'oops',
        'oop'
      ],
      content:
        'C++ supports object-oriented programming using classes, objects, encapsulation, inheritance and polymorphism.'
    }
  ]
};


/**
 * Extract a useful text field from a Supabase match result.
 */
function getResultContent(result) {
  return (
    result?.content_chunk ||
    result?.content ||
    result?.knowledge_documents?.content ||
    ''
  );
}


/**
 * Build readable RAG context.
 */
function formatContext(results) {
  if (
    !Array.isArray(results) ||
    results.length === 0
  ) {
    return '';
  }

  return results
    .map((result, index) => {
      const content =
        getResultContent(result);

      if (!content) {
        return '';
      }

      const similarity =
        typeof result.similarity === 'number'
          ? ` (similarity: ${result.similarity.toFixed(3)})`
          : '';

      return `### Source ${index + 1}${similarity}\n${content}`;
    })
    .filter(Boolean)
    .join('\n\n');
}


/**
 * Search fallback knowledge.
 */
function searchFallbackKnowledge(
  query,
  language,
  limit = DEFAULT_MATCH_COUNT
) {
  const normalizedLanguage =
    normalizeLanguage(language);

  const knowledge =
    FALLBACK_KNOWLEDGE[normalizedLanguage] || [];

  const queryText =
    String(query).toLowerCase();

  const queryWords = queryText
    .split(/[^a-z0-9+#]+/)
    .filter(Boolean);

  const scored = knowledge
    .map((item) => {
      let score = 0;

      for (const keyword of item.keywords) {
        const normalizedKeyword =
          keyword.toLowerCase();

        if (
          queryText.includes(
            normalizedKeyword
          )
        ) {
          score += 3;
        }

        for (const word of queryWords) {
          if (
            word === normalizedKeyword ||
            normalizedKeyword.includes(word) ||
            word.includes(normalizedKeyword)
          ) {
            score += 1;
          }
        }
      }

      return {
        ...item,
        score
      };
    })
    .filter(
      (item) => item.score > 0
    )
    .sort(
      (a, b) => b.score - a.score
    )
    .slice(0, limit);

  return scored;
}


/**
 * Search Supabase vector database.
 */
async function searchVectorDatabase({
  query,
  language,
  limit,
  threshold
}) {
  if (!isSupabaseConfigured()) {
    return [];
  }

  if (!isGeminiConfigured()) {
    return [];
  }

  const embedding =
    await generateEmbedding(query);

  if (!Array.isArray(embedding)) {
    throw new Error(
      'Invalid embedding returned by Gemini.'
    );
  }

  if (embedding.length !== 768) {
    throw new Error(
      `RAG embedding dimension mismatch: expected 768, received ${embedding.length}.`
    );
  }

  const normalizedLanguage =
    normalizeLanguage(language);

  const {
    data,
    error
  } = await supabase.rpc(
    'match_documents',
    {
      query_embedding: embedding,
      match_threshold: threshold,
      match_count: limit,
      filter_language: normalizedLanguage
    }
  );

  if (error) {
    throw error;
  }

  return Array.isArray(data)
    ? data
    : [];
}


/**
 * Main RAG search function.
 */
export async function searchCurriculum(
  query,
  language,
  limit = DEFAULT_MATCH_COUNT
) {
  if (
    !query ||
    !String(query).trim()
  ) {
    return [];
  }

  const safeLimit = Math.min(
    Math.max(
      Number(limit) ||
      DEFAULT_MATCH_COUNT,
      1
    ),
    10
  );

  try {
    const results =
      await searchVectorDatabase({
        query: String(query).trim(),
        language,
        limit: safeLimit,
        threshold:
          DEFAULT_MATCH_THRESHOLD
      });

    if (results.length > 0) {
      return results;
    }
  } catch (error) {
    console.warn(
      '[RAG] Vector search failed:',
      error.message
    );
  }

  /*
   * If vector search fails or has no indexed data,
   * use the small local fallback.
   */
  return searchFallbackKnowledge(
    query,
    language,
    safeLimit
  );
}


/**
 * Return RAG context as a formatted string.
 */
export async function searchCurriculumContext(
  query,
  language,
  limit = DEFAULT_MATCH_COUNT
) {
  const results =
    await searchCurriculum(
      query,
      language,
      limit
    );

  return formatContext(results);
}


/**
 * Search specifically for a topic.
 */
export async function searchTopicContext({
  topic,
  language,
  topicSummary = '',
  limit = DEFAULT_MATCH_COUNT
} = {}) {
  const query = [
    topic,
    topicSummary
  ]
    .filter(Boolean)
    .join(' ');

  return searchCurriculumContext(
    query,
    language,
    limit
  );
}


/**
 * Check whether the RAG infrastructure is available.
 */
export function isRAGConfigured() {
  return (
    isSupabaseConfigured() &&
    isGeminiConfigured()
  );
}