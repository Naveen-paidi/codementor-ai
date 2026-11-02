import express from 'express';
import cors from 'cors';
import { config, validateEnv } from './config/env.js';
import { errorHandler, notFoundHandler } from './middleware/errorHandler.js';
import { checkCompilers } from './services/execution/diagnostics.js';

// Route imports
import languageRoutes from './routes/language.routes.js';
import courseRoutes from './routes/course.routes.js';
import lessonRoutes from './routes/lesson.routes.js';
import practiceRoutes from './routes/practice.routes.js';
import executeRoutes from './routes/execute.routes.js';
import submissionRoutes from './routes/submission.routes.js';
import aiRoutes from './routes/ai.routes.js';
import chatbotRoutes from './routes/chatbot.routes.js';
import progressRoutes from './routes/progress.routes.js';
import authRoutes from './routes/auth.routes.js';
import collegeRoutes from './routes/college.routes.js';
import collegeAdminRoutes from './routes/collegeAdmin.routes.js';
import facultyRoutes from './routes/faculty.routes.js';
import studentRoutes from './routes/student.routes.js';
import messagingRoutes from './routes/messaging.routes.js';
import superAdminRoutes from './routes/superAdmin.routes.js';
import invitationRoutes from './routes/invitation.routes.js';
import dsaRoutes from './routes/dsa.routes.js';
import voiceRoutes from './routes/voice.routes.js';
import ragRoutes from './routes/rag.routes.js';
import certificateRoutes from './routes/certificate.routes.js';
import { dbService } from './services/db.service.js';
import { DocumentIngestionService } from './services/rag/documentIngestion.js';

// Validate environment variables and check compilers on startup
validateEnv();
checkCompilers();

// Initialize Hybrid RAG Knowledge Base in background
DocumentIngestionService.initializeKnowledgeBase().catch(err => {
  console.warn('[Startup] RAG Knowledge Base initialization warning:', err.message);
});

// Securely provision designated initial super admin accounts on startup
dbService.provisionSuperAdmins().catch(err => {
  console.warn('[Startup] Super admin provisioning warning:', err.message);
});

const app = express();

// Security and utility middleware
app.use(cors({
  origin: '*', // Allow development client on port 3000 / 5173
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptimeSeconds: Math.round(process.uptime()),
    features: {
      openrouterConfigured: Boolean(config.OPENROUTER_API_KEY),
      geminiConfigured: Boolean(config.GEMINI_API_KEY),
      voiceConfigured: Boolean(config.GEMINI_API_KEY),
      supabaseConfigured: Boolean(config.SUPABASE_URL && config.SUPABASE_ANON_KEY),
      multiCollegeEnabled: true
    }
  });
});

// REST API Route Mounts
app.use('/api/languages', languageRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/lessons', lessonRoutes);
app.use('/api/practice', practiceRoutes);
app.use('/api/execute', executeRoutes);
app.use('/api/submit', submissionRoutes);
app.use('/api/ai', aiRoutes);
app.use('/api/chat', chatbotRoutes);
app.use('/api/rag', ragRoutes);
app.use('/api/progress', progressRoutes);
app.use('/api/student/analytics', (req, res, next) => {
  req.url = '/student/analytics';
  ragRoutes(req, res, next);
});
app.use('/api/admin/analytics', (req, res, next) => {
  req.url = '/admin/analytics';
  ragRoutes(req, res, next);
});
app.use('/api/auth', authRoutes);
app.use('/api/dsa', dsaRoutes);
app.use('/api/voice', voiceRoutes);

// Multi-College LMS System Routes
app.use('/api/colleges', collegeRoutes);
app.use('/api/college-requests', collegeRoutes);
app.use('/api/college-admin', collegeAdminRoutes);
app.use('/api/faculty', facultyRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/enrollments', studentRoutes);
app.use('/api/messages', messagingRoutes);
app.use('/api/super-admin', superAdminRoutes);
app.use('/api/college-admin-invitations', invitationRoutes);
app.use('/api/certificates', certificateRoutes);

// Direct topic route aliases (/api/topics/:topicId) — Protected by authentication
import {
  getTopicDetails,
  getTopicCodingProblem,
  getNextTopic,
  getPreviousTopic
} from './controllers/course.controller.js';
import { requireAuth } from './middleware/auth.js';

app.get('/api/topics/:topicId', requireAuth, getTopicDetails);
app.get('/api/topics/:topicId/coding-problem', requireAuth, getTopicCodingProblem);
app.get('/api/topics/:topicId/next', requireAuth, getNextTopic);
app.get('/api/topics/:topicId/prev', requireAuth, getPreviousTopic);

// Catch-all 404 handler for undefined API routes
app.use(notFoundHandler);

// Centralized error handling
app.use(errorHandler);

const PORT = config.port || 5000;
const server = app.listen(PORT, () => {
  console.log(`\x1b[36m========================================================\x1b[0m`);
  console.log(`\x1b[32m🚀 AI Programming Learning Platform Server Running\x1b[0m`);
  console.log(`\x1b[34m📡 Port: ${PORT} | Health: http://localhost:${PORT}/api/health\x1b[0m`);
  console.log(`\x1b[36m========================================================\x1b[0m`);
});

// Graceful process termination and crash prevention
process.on('unhandledRejection', (reason, promise) => {
  console.warn('[Process] Unhandled Rejection at:', promise, 'reason:', reason);
});

process.on('uncaughtException', (err) => {
  console.error('[Process] Uncaught Exception:', err?.message || err);
});

process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  server.close(() => console.log('HTTP server closed'));
});

export default app;
