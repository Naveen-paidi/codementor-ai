/**
 * CodeMentor AI Chatbot Controller (Upgraded with Hybrid RAG + Tools)
 * -------------------------------------------------------------------
 * Orchestrates incoming student and administrator requests through the
 * Hybrid RAG + Tool-Augmented architecture.
 */

import { RAGOrchestrator } from '../services/rag/ragOrchestrator.js';
import { supabase, isSupabaseConfigured } from '../config/supabase.js';

export const handleChatMessage = async (req, res, next) => {
  try {
    const { message, context = {}, sessionId = 'local-session', history = [] } = req.body;
    const user = req.user || null;

    if (!message || typeof message !== 'string' || !message.trim()) {
      return res.status(400).json({ success: false, error: 'Message text is required.' });
    }

    const conversationHistory = Array.isArray(history) && history.length > 0
      ? history
      : (Array.isArray(context.history) ? context.history : []);

    // Execute Hybrid RAG + Intent Router + Authenticated Tools
    const result = await RAGOrchestrator.processQuery({
      message: message.trim(),
      context,
      history: conversationHistory,
      user,
      sessionId
    });

    if (!result || !result.success) {
      const errMsg = result?.error || 'AI Mentor was unable to process your request.';
      return res.status(502).json({
        success: false,
        error: errMsg,
        answer: null
      });
    }

    // Persist to Supabase if session and auth available
    if (isSupabaseConfigured() && sessionId && sessionId !== 'local-session') {
      try {
        await supabase.from('chat_messages').insert([
          { session_id: sessionId, sender: 'user', message: message.trim(), context },
          { session_id: sessionId, sender: 'ai', message: result.answer }
        ]);
      } catch (dbErr) {
        // Safe logging
      }
    }

    res.json({
      success: true,
      answer: result.answer,
      reply: result.answer,
      message: result.answer,
      response: result.answer,
      sources: result.sources || [],
      suggestedNextSteps: result.suggestedNextSteps || [],
      model: result.model || 'openrouter-mentor',
      intent: result.intent || null,
      routedDomain: result.domain || result.routedDomain || 'Computer Science',
      telemetry: result.telemetry || null
    });
  } catch (error) {
    next(error);
  }
};
