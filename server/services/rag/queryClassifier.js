/**
 * Query Classifier & Domain Guard
 * --------------------------------
 * Classifies learner and admin inquiries into defined architectural intents:
 * - CS_KNOWLEDGE
 * - PROGRAMMING
 * - CODE_DEBUGGING
 * - CAREER_GUIDANCE
 * - INTERVIEW_PREPARATION
 * - PLATFORM_INFORMATION
 * - STUDENT_PROGRESS
 * - STUDENT_RECOMMENDATION
 * - ADMIN_ANALYTICS
 * - OUT_OF_SCOPE
 * - AMBIGUOUS
 *
 * Employs ultra-fast (<5ms) deterministic heuristic analysis first, and falls back to a
 * lightweight OpenRouter classification call only when semantic ambiguity exists.
 */

import { generateJSON, isOpenRouterConfigured } from '../../config/openrouter.js';

export const OUT_OF_SCOPE_RESPONSE =
  "I'm CodeMentor AI, designed to help with Computer Science, programming, coding practice, technical learning, career guidance and CodeMentor platform-related questions. I can help you with those topics!";

// Fast regex patterns for deterministic routing
const PATTERNS = {
  // Clear out of scope (cooking, sports scores, celebrity gossip, astrology, political debates, pure non-tech)
  OUT_OF_SCOPE_DIRECT: [
    /\b(how to cook|recipe for|how (do|can) I (make|cook|bake|prepare|fry) (biryani|pasta|curry|cake|tea|coffee|pizza|roti|paneer|chicken))\b/i,
    /\b(cricket score|football score|match prediction|world cup winner|ipl score|nfl score|who won the match)\b/i,
    /\b(horoscope|astrology|zodiac sign|tarot reading|future prediction)\b/i,
    /\b(write a (love|birthday|wedding|anniversary) (letter|invitation|poem|wishes)|write me a song about|tell me a joke about animals)\b/i,
    /\b(movie review|celebrity gossip|best clothes to wear|fashion advice|dating advice|skincare routine)\b/i,
    /\b(flight tickets to|cheap hotels in|places to visit in|weather forecast for)\b/i,
    /\b(who should I vote for|political party election debate)\b/i
  ],

  // Student personal learning progress / telemetry queries
  STUDENT_PROGRESS: [
    /\b(which courses (have I|am I) enrolled in|my enrolled courses|enrolled courses)\b/i,
    /\b(how many lessons (have I|did I) (completed|finish)|my lesson progress|my course progress)\b/i,
    /\b(what is my (java|python|javascript|c|cpp|c\+\+) (progress|status|completion))\b/i,
    /\b(how many (dsa|coding|practice) problems (have I|did I) (solved|completed)|my dsa (stats|statistics|progress))\b/i,
    /\b(which topics (have I|did I) completed|my completed topics)\b/i,
    /\b(which topics am I struggling with|my weak topics|weak areas|mistakes)\b/i,
    /\b(what was my last activity|my recent activity|my activity)\b/i,
    /\b(what is my (current )?streak|my learning streak|streak days)\b/i,
    /\b(how many problems did I solve this week|my weekly progress)\b/i,
    /\b(which lessons (remain|are) incomplete|incomplete lessons)\b/i
  ],

  // Student personalized recommendation
  STUDENT_RECOMMENDATION: [
    /\b(what should I learn next|recommend(ation)? (for )?next (lesson|topic)|what next should I study|where should I continue)\b/i,
    /\b(based on my (progress|performance|course),? what should I learn next)\b/i,
    /\b(next topic for me|next lesson for me)\b/i
  ],

  // Admin platform-wide aggregate analytics
  ADMIN_ANALYTICS: [
    /\b(how many students are registered|total registered (students|users)|how many users registered)\b/i,
    /\b(how many students are active|active students (this month|this week)|active users)\b/i,
    /\b(how many students enrolled in (java|python|javascript|c|cpp|all courses)|course enrollment statistics)\b/i,
    /\b(which courses are most popular|popular courses|top courses)\b/i,
    /\b(average course completion rate|completion rates|courses with low completion)\b/i,
    /\b(how many dsa problems were solved across the platform|platform dsa (stats|statistics)|total submissions)\b/i,
    /\b(overall student activity this week|platform activity)\b/i
  ],

  // Platform information & features
  PLATFORM_INFORMATION: [
    /\b(what is codementor|about codementor|codementor features|how does codementor work)\b/i,
    /\b(what courses are available( in codementor)?|list (all )?courses|available courses)\b/i,
    /\b(how to navigate|how do I run code|how to use ai code review|dsa module in codementor)\b/i,
    /\b(supported programming languages( in codementor)?|platform curriculum)\b/i
  ],

  // Career Guidance & Interview Prep
  CAREER_GUIDANCE: [
    /\b(resume (guidance|tips|review|advice)|software engineer(ing)? (resume|career)|technical career (roadmap|guidance))\b/i,
    /\b(how to become a (fullstack|backend|frontend|software|cloud|devops) engineer)\b/i,
    /\b(placement preparation|campus placement|technical job preparation)\b/i
  ],

  INTERVIEW_PREPARATION: [
    /\b(interview prep(aration)?|coding interview|technical interview|dsa interview questions|system design interview)\b/i,
    /\b(how (to|do I) prepare for a (java|python|react|node|c\+\+|fullstack) interview)\b/i,
    /\b(mock interview|common technical questions asked in interviews)\b/i
  ],

  // Code Debugging
  CODE_DEBUGGING: [
    /\b(why is my code (failing|giving error|not working)|debug my code|find the bug|fix this error)\b/i,
    /\b(syntaxerror|typeerror|referenceerror|nullpointerexception|segmentation fault|indexoutofboundsexception)\b/i
  ],

  // Computer Science & Programming Languages
  CS_CORE: [
    /\b(binary search|depth first search|breadth first search|dijkstra|dynamic programming|sliding window|recursion|backtracking)\b/i,
    /\b(linked list|binary tree|avl tree|trie|graph|stack|queue|hashmap|hash table|heap|priority queue)\b/i,
    /\b(polymorphism|inheritance|encapsulation|abstraction|object oriented programming|oops|solid principles)\b/i,
    /\b(deadlock|semaphore|mutex|process|thread|concurrency|virtual memory|paging|scheduling|operating system)\b/i,
    /\b(tcp|udp|ip|dns|http|https|osi model|three-way handshake|socket|subnetting|computer networks)\b/i,
    /\b(acid properties|normalization|foreign key|index|b-tree|query optimization|sql|nosql|mongodb|postgresql)\b/i,
    /\b(react|usestate|useeffect|usememo|usecallback|virtual dom|component lifecycle|props|state management)\b/i,
    /\b(node\.js|event loop|microtask|macrotask|express|middleware|stream|buffer)\b/i,
    /\b(spring boot|dependency injection|rest api|microservices|docker|kubernetes|compiler design)\b/i
  ]
};

/**
 * Detect language mention in query
 */
export function detectLanguageInQuery(query) {
  const q = String(query || '').toLowerCase();
  if (/\b(python|py)\b/.test(q)) return 'python';
  if (/\b(java)\b/.test(q) && !/\b(javascript|js)\b/.test(q)) return 'java';
  if (/\b(javascript|js|node|react)\b/.test(q)) return 'javascript';
  if (/\b(c\+\+|cpp)\b/.test(q)) return 'cpp';
  if (/\b(\bc\b|ansi c|c programming|c language)\b/.test(q)) return 'c';
  return null;
}

/**
 * Perform high-speed deterministic pattern matching
 */
function tryDeterministicClassification(text) {
  const norm = text.trim();

  // 1. Check direct out-of-scope patterns (cooking, sports scores, astrology, personal romance letters)
  // BUT ensure technical questions (e.g. "build a restaurant management app in Java") are NOT flagged out-of-scope.
  const hasTechContext = /\b(app|application|system|code|program|software|java|python|javascript|react|node|sql|database|algorithm|class|api|design|build|implement)\b/i.test(norm);

  for (const pat of PATTERNS.OUT_OF_SCOPE_DIRECT) {
    if (pat.test(norm) && !hasTechContext) {
      return {
        category: 'OUT_OF_SCOPE',
        inScope: false,
        confidence: 0.99,
        requiresRetrieval: false,
        requiresTools: false,
        toolName: null,
        reason: 'Matched disallowed non-technical category.'
      };
    }
  }

  // 2. Student progress queries
  for (const pat of PATTERNS.STUDENT_PROGRESS) {
    if (pat.test(norm)) {
      return {
        category: 'STUDENT_PROGRESS',
        inScope: true,
        confidence: 0.97,
        requiresRetrieval: false,
        requiresTools: true,
        toolName: 'studentProgressTool',
        detectedLanguage: detectLanguageInQuery(norm)
      };
    }
  }

  // 3. Student personalized recommendations
  for (const pat of PATTERNS.STUDENT_RECOMMENDATION) {
    if (pat.test(norm)) {
      return {
        category: 'STUDENT_RECOMMENDATION',
        inScope: true,
        confidence: 0.97,
        requiresRetrieval: false,
        requiresTools: true,
        toolName: 'studentRecommendationTool',
        detectedLanguage: detectLanguageInQuery(norm)
      };
    }
  }

  // 4. Admin analytics queries
  for (const pat of PATTERNS.ADMIN_ANALYTICS) {
    if (pat.test(norm)) {
      return {
        category: 'ADMIN_ANALYTICS',
        inScope: true,
        confidence: 0.96,
        requiresRetrieval: false,
        requiresTools: true,
        toolName: 'adminAnalyticsTool'
      };
    }
  }

  // 5. CodeMentor Platform Information
  for (const pat of PATTERNS.PLATFORM_INFORMATION) {
    if (pat.test(norm)) {
      return {
        category: 'PLATFORM_INFORMATION',
        inScope: true,
        confidence: 0.95,
        requiresRetrieval: true,
        requiresTools: false,
        toolName: null
      };
    }
  }

  // 6. Career Guidance & Placement Prep
  for (const pat of PATTERNS.CAREER_GUIDANCE) {
    if (pat.test(norm)) {
      return {
        category: 'CAREER_GUIDANCE',
        inScope: true,
        confidence: 0.94,
        requiresRetrieval: true,
        requiresTools: false,
        toolName: null
      };
    }
  }

  // 7. Interview Preparation
  for (const pat of PATTERNS.INTERVIEW_PREPARATION) {
    if (pat.test(norm)) {
      return {
        category: 'INTERVIEW_PREPARATION',
        inScope: true,
        confidence: 0.94,
        requiresRetrieval: true,
        requiresTools: false,
        toolName: null,
        detectedLanguage: detectLanguageInQuery(norm)
      };
    }
  }

  // 8. Code Debugging
  for (const pat of PATTERNS.CODE_DEBUGGING) {
    if (pat.test(norm)) {
      return {
        category: 'CODE_DEBUGGING',
        inScope: true,
        confidence: 0.95,
        requiresRetrieval: true,
        requiresTools: false,
        toolName: null,
        detectedLanguage: detectLanguageInQuery(norm)
      };
    }
  }

  // 9. Core Computer Science concepts
  for (const pat of PATTERNS.CS_CORE) {
    if (pat.test(norm)) {
      return {
        category: 'CS_KNOWLEDGE',
        inScope: true,
        confidence: 0.95,
        requiresRetrieval: true,
        requiresTools: false,
        toolName: null,
        detectedLanguage: detectLanguageInQuery(norm)
      };
    }
  }

  return null; // Ambiguous, evaluate with lightweight classifier
}

/**
 * Lightweight LLM Intent Classifier for ambiguous queries
 */
async function classifyWithLLM(query) {
  if (!isOpenRouterConfigured()) {
    // If OpenRouter is unconfigured, default to CS_KNOWLEDGE if contains code/tech, else OUT_OF_SCOPE
    const hasTech = /\b(code|program|computer|software|class|function|var|loop|file|network|data|algorithm|math)\b/i.test(query);
    return {
      category: hasTech ? 'CS_KNOWLEDGE' : 'OUT_OF_SCOPE',
      inScope: hasTech,
      confidence: 0.8,
      requiresRetrieval: hasTech,
      requiresTools: false
    };
  }

  const systemInstruction = `You are the CodeMentor Intent and Domain Classifier.
Determine whether the user query belongs to one of the ALLOWED CodeMentor domains:
- CS_KNOWLEDGE (Data Structures, Algorithms, OS, Networks, DBMS, System Design, AI, Cloud, OOP)
- PROGRAMMING (Language syntax, tutorials, concepts in Java, Python, C, C++, JavaScript, React, Node, etc.)
- CODE_DEBUGGING (Error messages, bugs, code troubleshooting)
- CAREER_GUIDANCE (Technical career paths, resumes for developers, placement roadmaps)
- INTERVIEW_PREPARATION (Coding interviews, DSA interview questions, technical assessments)
- PLATFORM_INFORMATION (CodeMentor platform features, available courses, curriculum, navigation)
- STUDENT_PROGRESS (Authenticated student asking about their own enrolled courses, completed lessons, streak, solved problems)
- STUDENT_RECOMMENDATION (Student asking what they personally should learn next)
- ADMIN_ANALYTICS (Admin asking about platform-wide counts, active students, registrations, overall statistics)

If the question is unrelated (e.g., cooking recipes, biryani, sports scores, general entertainment, politics, celebrity gossip, travel, lifestyle), return:
- OUT_OF_SCOPE

Respond ONLY with valid JSON:
{
  "category": "CS_KNOWLEDGE" | "PROGRAMMING" | "CODE_DEBUGGING" | "CAREER_GUIDANCE" | "INTERVIEW_PREPARATION" | "PLATFORM_INFORMATION" | "STUDENT_PROGRESS" | "STUDENT_RECOMMENDATION" | "ADMIN_ANALYTICS" | "OUT_OF_SCOPE" | "AMBIGUOUS",
  "inScope": true | false,
  "confidence": 0.0 - 1.0,
  "requiresRetrieval": true | false,
  "requiresTools": true | false,
  "detectedLanguage": "python" | "java" | "javascript" | "c" | "cpp" | null
}`;

  try {
    const result = await generateJSON([
      { role: 'user', content: `Classify this user query:\n"${query}"` }
    ], {
      systemInstruction,
      temperature: 0.1,
      maxTokens: 200
    });

    if (result && typeof result === 'object' && result.category) {
      return {
        category: result.category,
        inScope: result.inScope !== false && result.category !== 'OUT_OF_SCOPE',
        confidence: typeof result.confidence === 'number' ? result.confidence : 0.9,
        requiresRetrieval: Boolean(result.requiresRetrieval),
        requiresTools: Boolean(result.requiresTools),
        detectedLanguage: result.detectedLanguage || detectLanguageInQuery(query)
      };
    }
  } catch (err) {
    console.warn('[QueryClassifier] LLM classification fallback failed:', err.message);
  }

  // Safe fallback
  const fallbackTech = /\b(code|program|computer|algorithm|function|java|python|c\+\+|react|system)\b/i.test(query);
  return {
    category: fallbackTech ? 'CS_KNOWLEDGE' : 'OUT_OF_SCOPE',
    inScope: fallbackTech,
    confidence: 0.75,
    requiresRetrieval: fallbackTech,
    requiresTools: false
  };
}

/**
 * Classify a query with low-latency caching
 * @param {string} query
 * @returns {Promise<{ category: string, inScope: boolean, confidence: number, requiresRetrieval: boolean, requiresTools: boolean, toolName?: string, detectedLanguage?: string }>}
 */
export async function classifyQuery(query) {
  const clean = String(query || '').trim();
  if (!clean) {
    return {
      category: 'OUT_OF_SCOPE',
      inScope: false,
      confidence: 1.0,
      requiresRetrieval: false,
      requiresTools: false
    };
  }

  // Step 1: Run deterministic classification first (<5ms)
  const deterministic = tryDeterministicClassification(clean);
  if (deterministic) {
    return deterministic;
  }

  // Step 2: Fall back to lightweight classifier if ambiguous
  return await classifyWithLLM(clean);
}

