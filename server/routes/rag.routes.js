/**
 * RAG Knowledge Base Management & Analytics Routes
 * ------------------------------------------------
 * Admin-protected endpoints for managing knowledge documents, triggering
 * reindexing, inspecting vector store status, and retrieving verified analytics.
 */

import { Router } from 'express';
import { requireAuth, requireRole } from '../middleware/auth.js';
import { vectorStore } from '../services/rag/vectorStore.js';
import { DocumentIngestionService } from '../services/rag/documentIngestion.js';
import { studentTools } from '../services/rag/tools/studentTools.js';
import { analyticsTools } from '../services/rag/tools/analyticsTools.js';

const router = Router();

// ============================================================================
// 1. RAG KNOWLEDGE BASE MANAGEMENT (Admin Only)
// ============================================================================

/**
 * GET /api/rag/documents
 * List all indexed knowledge documents with chunk counts and source info
 */
router.get(
  '/documents',
  requireAuth,
  requireRole(['super_admin', 'college_admin']),
  async (req, res, next) => {
    try {
      const docs = vectorStore.getAllDocuments();
      const chunks = vectorStore.getAllChunks();

      res.json({
        success: true,
        documentCount: docs.length,
        chunkCount: chunks.length,
        documents: docs
      });
    } catch (err) {
      next(err);
    }
  }
);

/**
 * POST /api/rag/ingest
 * Ingest or update a custom document into the knowledge base
 */
router.post(
  '/ingest',
  requireAuth,
  requireRole(['super_admin', 'college_admin']),
  async (req, res, next) => {
    try {
      const { title, content, category, topic, subtopic, language, sourceType, sourceName, sourceUrl } = req.body;

      if (!title || !content) {
        return res.status(400).json({ success: false, error: 'Document title and content are required.' });
      }

      const result = await DocumentIngestionService.ingestDocument({
        title,
        content,
        category: category || 'CS_KNOWLEDGE',
        topic: topic || '',
        subtopic: subtopic || '',
        language: language || null,
        sourceType: sourceType || 'OFFICIAL_DOCUMENTATION',
        sourceName: sourceName || 'CodeMentor Knowledge',
        sourceUrl: sourceUrl || null
      });

      res.json({ success: true, ...result });
    } catch (err) {
      next(err);
    }
  }
);

/**
 * DELETE /api/rag/documents/:id
 * Remove a document and its corresponding vector chunks
 */
router.delete(
  '/documents/:id',
  requireAuth,
  requireRole(['super_admin', 'college_admin']),
  async (req, res, next) => {
    try {
      const docId = req.params.id;
      await vectorStore.deleteDocument(docId);
      res.json({ success: true, message: `Document ${docId} removed successfully.` });
    } catch (err) {
      next(err);
    }
  }
);

/**
 * POST /api/rag/reindex
 * Reindex all CodeMentor knowledge collections
 */
router.post(
  '/reindex',
  requireAuth,
  requireRole(['super_admin']),
  async (req, res, next) => {
    try {
      const result = await DocumentIngestionService.initializeKnowledgeBase(true);
      res.json({ success: true, ...result });
    } catch (err) {
      next(err);
    }
  }
);

/**
 * POST /api/rag/sync-curriculum
 * Synchronize internal course curricula into RAG knowledge
 */
router.post(
  '/sync-curriculum',
  requireAuth,
  requireRole(['super_admin', 'college_admin']),
  async (req, res, next) => {
    try {
      const result = await DocumentIngestionService.syncCurriculum();
      res.json({ success: true, ...result });
    } catch (err) {
      next(err);
    }
  }
);

// ============================================================================
// 2. VERIFIED ANALYTICS ENDPOINTS
// ============================================================================

/**
 * GET /api/student/analytics
 * Student's own authenticated learning metrics (strict server-side ID binding)
 */
router.get(
  '/student/analytics',
  requireAuth,
  async (req, res, next) => {
    try {
      const userId = req.user.id;
      const [courses, dsaStats, streak, recentActivity] = await Promise.all([
        studentTools.getMyEnrolledCourses({ userId }),
        studentTools.getMyDSAStatistics({ userId }),
        studentTools.getMyLearningStreak({ userId }),
        studentTools.getMyRecentActivity({ userId })
      ]);

      res.json({
        success: true,
        userId,
        courses,
        dsaStats,
        streak,
        recentActivity
      });
    } catch (err) {
      next(err);
    }
  }
);

/**
 * GET /api/admin/analytics
 * Authorized aggregate platform analytics (role protected)
 */
router.get(
  '/admin/analytics',
  requireAuth,
  requireRole(['super_admin', 'college_admin']),
  async (req, res, next) => {
    try {
      const [registered, active, enrollments, completions, dsaStats, submissions] = await Promise.all([
        analyticsTools.getTotalRegisteredStudents(req.user),
        analyticsTools.getActiveStudents(req.user, 'month'),
        analyticsTools.getCourseEnrollmentStatistics(req.user),
        analyticsTools.getCourseCompletionStatistics(req.user),
        analyticsTools.getPlatformDSAStatistics(req.user),
        analyticsTools.getPlatformSubmissionStatistics(req.user)
      ]);

      res.json({
        success: true,
        registered,
        active,
        enrollments,
        completions,
        dsaStats,
        submissions
      });
    } catch (err) {
      next(err);
    }
  }
);

export default router;

