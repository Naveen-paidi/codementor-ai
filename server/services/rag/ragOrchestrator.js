/**
 * RAG Master Orchestrator
 * -----------------------
 * Coordinates the full end-to-end Hybrid RAG + Tool-Augmented RAG pipeline:
 *
 * 1. Intent Classification & Domain Policy Verification (<500ms target)
 * 2. Instant Out-Of-Scope Polite Decline (Zero wasted LLM calls)
 * 3. Routing:
 *    - Student Information -> Authenticated Student Tools (derived strictly from server session)
 *    - Admin Analytics -> Authorized Aggregate Admin Tools (strictly role checked)
 *    - Technical / Conceptual Queries -> Parallel Hybrid Retrieval (Vector + Keyword RRF)
 * 4. Grounded Context Construction with Source Citations
 * 5. Generation via OpenRouter with Fallbacks
 * 6. Latency & Telemetry Measurement
 */

import { classifyQuery, OUT_OF_SCOPE_RESPONSE } from './queryClassifier.js';
import { hybridRetrieve } from './hybridRetrieval.js';
import { ContextBuilder, GROUNDED_FALLBACK_RAG, GROUNDED_FALLBACK_TOOLS } from './contextBuilder.js';
import { studentTools } from './tools/studentTools.js';
import { analyticsTools } from './tools/analyticsTools.js';
import { generateText, getOpenRouterModel, isOpenRouterConfigured } from '../../config/openrouter.js';

export class RAGOrchestrator {
  /**
   * Process a learner or administrator query through the hybrid pipeline
   */
  static async processQuery({
    message,
    context = {},
    history = [],
    user = null,
    sessionId = 'local-session'
  }) {
    const totalStart = Date.now();
    const queryText = String(message || '').trim();

    if (!queryText) {
      return {
        success: false,
        error: 'Message text is required.',
        answer: null
      };
    }

    // ------------------------------------------------------------------------
    // STEP 1: Intent Classification & Domain Guard
    // ------------------------------------------------------------------------
    const classStart = Date.now();
    const classification = await classifyQuery(queryText);
    const classificationLatencyMs = Date.now() - classStart;

    // STEP 2: Immediate Out-Of-Scope Rejection (Enforce domain discipline before any retrieval)
    if (!classification.inScope || classification.category === 'OUT_OF_SCOPE') {
      const totalLatencyMs = Date.now() - totalStart;
      return {
        success: true,
        answer: OUT_OF_SCOPE_RESPONSE,
        reply: OUT_OF_SCOPE_RESPONSE,
        message: OUT_OF_SCOPE_RESPONSE,
        sources: [],
        suggestedNextSteps: [
          'Ask about Data Structures and Algorithms',
          'Ask about Java, Python, C, C++, or JavaScript',
          'Ask about your enrolled courses or DSA streak'
        ],
        intent: classification,
        telemetry: {
          classificationLatencyMs,
          retrievalLatencyMs: 0,
          generationLatencyMs: 0,
          totalLatencyMs
        }
      };
    }

    // ------------------------------------------------------------------------
    // STEP 3: Route to Authenticated Tools OR Hybrid Retrieval
    // ------------------------------------------------------------------------
    let toolResult = null;
    let toolName = null;
    let toolSources = [];
    let toolContextText = '';

    let retrievedChunks = [];
    let retrievalSources = [];
    let knowledgeContextText = '';
    let retrievalLatencyMs = 0;

    const authenticatedUserId = user?.id || null;

    // A. Student Tools Route
    if (classification.category === 'STUDENT_PROGRESS' || classification.category === 'STUDENT_RECOMMENDATION') {
      const toolStart = Date.now();
      const detectedLang = classification.detectedLanguage || context.language || null;
      const lowerQ = queryText.toLowerCase();

      if (classification.category === 'STUDENT_RECOMMENDATION' || lowerQ.includes('learn next') || lowerQ.includes('recommend')) {
        toolName = 'getMyRecommendedNextLesson';
        toolResult = await studentTools.getMyRecommendedNextLesson({
          userId: authenticatedUserId,
          courseId: detectedLang
        });
      } else if (lowerQ.includes('enrolled')) {
        toolName = 'getMyEnrolledCourses';
        toolResult = await studentTools.getMyEnrolledCourses({ userId: authenticatedUserId });
      } else if (lowerQ.includes('dsa') || lowerQ.includes('problem') || lowerQ.includes('solved')) {
        toolName = 'getMyDSAStatistics';
        toolResult = await studentTools.getMyDSAStatistics({ userId: authenticatedUserId });
      } else if (lowerQ.includes('streak')) {
        toolName = 'getMyLearningStreak';
        toolResult = await studentTools.getMyLearningStreak({ userId: authenticatedUserId });
      } else if (lowerQ.includes('weak') || lowerQ.includes('struggl')) {
        toolName = 'getMyWeakTopics';
        toolResult = await studentTools.getMyWeakTopics({ userId: authenticatedUserId });
      } else if (lowerQ.includes('activity')) {
        toolName = 'getMyRecentActivity';
        toolResult = await studentTools.getMyRecentActivity({ userId: authenticatedUserId });
      } else {
        toolName = 'getMyCourseProgress';
        toolResult = await studentTools.getMyCourseProgress({
          userId: authenticatedUserId,
          courseId: detectedLang
        });
      }

      retrievalLatencyMs = Date.now() - toolStart;
      const formatted = ContextBuilder.formatToolContext(toolName, toolResult);
      toolContextText = formatted.toolContextText;
      toolSources = formatted.toolSources;
    }

    // B. Admin Analytics Route
    else if (classification.category === 'ADMIN_ANALYTICS') {
      const toolStart = Date.now();
      const lowerQ = queryText.toLowerCase();

      if (lowerQ.includes('registered') || lowerQ.includes('total users') || lowerQ.includes('how many students are registered')) {
        toolName = 'getTotalRegisteredStudents';
        toolResult = await analyticsTools.getTotalRegisteredStudents(user);
      } else if (lowerQ.includes('active')) {
        toolName = 'getActiveStudents';
        const period = lowerQ.includes('week') ? 'week' : 'month';
        toolResult = await analyticsTools.getActiveStudents(user, period);
      } else if (lowerQ.includes('popular')) {
        toolName = 'getPopularCourses';
        toolResult = await analyticsTools.getPopularCourses(user);
      } else if (lowerQ.includes('completion')) {
        toolName = 'getCourseCompletionStatistics';
        toolResult = await analyticsTools.getCourseCompletionStatistics(user);
      } else if (lowerQ.includes('dsa') || lowerQ.includes('platform dsa')) {
        toolName = 'getPlatformDSAStatistics';
        toolResult = await analyticsTools.getPlatformDSAStatistics(user);
      } else if (lowerQ.includes('submission')) {
        toolName = 'getPlatformSubmissionStatistics';
        toolResult = await analyticsTools.getPlatformSubmissionStatistics(user);
      } else {
        toolName = 'getCourseEnrollmentStatistics';
        toolResult = await analyticsTools.getCourseEnrollmentStatistics(user);
      }

      retrievalLatencyMs = Date.now() - toolStart;

      // Handle un-authorized admin requests cleanly
      if (toolResult && toolResult.authorized === false) {
        return {
          success: true,
          answer: `🔒 ${toolResult.error || 'Access denied. Platform analytics are reserved for authorized administrators.'}`,
          sources: [],
          suggestedNextSteps: ['Ask questions about your own courses or programming concepts'],
          intent: classification,
          telemetry: {
            classificationLatencyMs,
            retrievalLatencyMs,
            generationLatencyMs: 0,
            totalLatencyMs: Date.now() - totalStart
          }
        };
      }

      const formatted = ContextBuilder.formatToolContext(toolName, toolResult);
      toolContextText = formatted.toolContextText;
      toolSources = formatted.toolSources;
    }

    // C. Knowledge Base Hybrid Retrieval Route
    else {
      const retStart = Date.now();
      const langFilter = classification.detectedLanguage || context.language || null;
      const catFilter = classification.category === 'PLATFORM_INFORMATION' ? 'PLATFORM_INFORMATION' : null;

      const retrievalRes = await hybridRetrieve(queryText, {
        filterLanguage: langFilter,
        filterCategory: catFilter,
        limit: 6
      });

      retrievalLatencyMs = retrievalRes.latencyMs;
      retrievedChunks = retrievalRes.chunks;

      const formatted = ContextBuilder.formatKnowledgeContext(retrievedChunks);
      knowledgeContextText = formatted.contextText;
      retrievalSources = formatted.sources;
    }

    // ------------------------------------------------------------------------
    // STEP 4: Build Grounded OpenRouter Prompt
    // ------------------------------------------------------------------------
    const systemInstruction = ContextBuilder.buildSystemInstruction({
      category: classification.category,
      hasTools: Boolean(toolResult)
    });

    const conversationMessages = [];

    // Bounded dialogue history (last 8 turns)
    if (Array.isArray(history) && history.length > 0) {
      const sanitizedHistory = history
        .filter(m => m && m.id !== 'welcome' && (m.content || m.text))
        .slice(-8)
        .map(m => ({
          role: (m.role === 'assistant' || m.sender === 'ai') ? 'assistant' : 'user',
          content: String(m.content || m.text).trim()
        }));
      conversationMessages.push(...sanitizedHistory);
    }

    // Assemble current prompt payload
    let currentPayload = queryText;

    if (context.currentCode) {
      currentPayload += `\n\n[Provided Code Context]:\n\`\`\`${context.language || ''}\n${context.currentCode}\n\`\`\``;
    }
    if (context.currentError) {
      currentPayload += `\n\n[Provided Compiler / Runtime Error]:\n${context.currentError}`;
    }

    if (toolContextText) {
      currentPayload += `\n\n${toolContextText}`;
    } else if (knowledgeContextText) {
      currentPayload += `\n\n${knowledgeContextText}`;
    }

    conversationMessages.push({
      role: 'user',
      content: currentPayload
    });

    // ------------------------------------------------------------------------
    // STEP 5: Generate OpenRouter Response
    // ------------------------------------------------------------------------
    const genStart = Date.now();
    let answerText = '';

    try {
      answerText = await generateText(conversationMessages, {
        systemInstruction,
        temperature: 0.35,
        maxTokens: 2500
      });
    } catch (genErr) {
      console.warn('[RAGOrchestrator] OpenRouter generation error:', genErr.message);

      // Provide deterministic grounded fallback if model is temporarily unreachable
      if (toolResult) {
        answerText = `Here is your verified information from the CodeMentor system:\n\n\`\`\`json\n${JSON.stringify(toolResult, null, 2)}\n\`\`\``;
      } else if (retrievedChunks.length > 0) {
        answerText = `Based on CodeMentor documentation for **${retrievedChunks[0].title}**:\n\n${retrievedChunks[0].content}`;
      } else {
        answerText = GROUNDED_FALLBACK_RAG;
      }
    }

    const generationLatencyMs = Date.now() - genStart;
    const totalLatencyMs = Date.now() - totalStart;

    // Combine all relevant citations
    const allSources = [...toolSources, ...retrievalSources];

    return {
      success: true,
      answer: (answerText || '').trim(),
      reply: (answerText || '').trim(),
      message: (answerText || '').trim(),
      sources: allSources,
      suggestedNextSteps: generateSuggestedNextSteps(classification.category, toolResult, retrievedChunks),
      model: getOpenRouterModel(),
      intent: classification,
      telemetry: {
        classificationLatencyMs,
        retrievalLatencyMs,
        generationLatencyMs,
        totalLatencyMs
      }
    };
  }
}

/**
 * Generate contextual follow-up pedagogical prompts
 */
function generateSuggestedNextSteps(category, toolResult, chunks) {
  if (category === 'STUDENT_PROGRESS') {
    return [
      'What should I learn next?',
      'How many DSA problems have I solved?',
      'Show my current learning streak'
    ];
  }
  if (category === 'STUDENT_RECOMMENDATION') {
    return [
      'Show me code examples for this topic',
      'Explain key concepts of this lesson',
      'What are common mistakes to avoid?'
    ];
  }
  if (category === 'ADMIN_ANALYTICS') {
    return [
      'Show active students this week',
      'Which courses are most popular?',
      'Show platform DSA submission stats'
    ];
  }
  if (category === 'CODE_DEBUGGING') {
    return [
      'Give me a progressive hint on how to fix this',
      'Explain why this error happens',
      'Show the corrected implementation'
    ];
  }
  return [
    'Can you show a code implementation?',
    'What are the time and space complexities?',
    'How is this used in technical interviews?'
  ];
}

