# AI-Powered Programming Learning Platform

An academic, production-quality AI-powered programming learning platform built completely from scratch using **JavaScript (ES Modules & React JSX)**.

Designed as an **intelligent personal programming mentor**, this platform teaches concepts, guides practice, executes real native code, diagnoses mistakes with tiered hints, and adaptively recommends learning paths.

---

## 🚀 The Pedagogical Core Loop

```text
LEARN ➔ UNDERSTAND ➔ PRACTISE ➔ CODE ➔ RUN ➔ SUBMIT ➔ TEST CASES ➔ AI FEEDBACK ➔ HINT ➔ RETRY ➔ MASTER ➔ PERSONALISED RECOMMENDATION
```

---

## 🛠️ Complete Tech Stack

* **Frontend**: React.js, Vite, JavaScript (`.js`, `.jsx` exclusively — **No TypeScript**), Tailwind CSS v4, Framer Motion, Lucide React, Monaco Editor (`@monaco-editor/react`), Recharts, Canvas-Confetti.
* **Backend**: Node.js, Express.js (ESM), REST APIs, child process execution isolation.
* **Database**: PostgreSQL, Supabase Auth, `pgvector` for RAG vector similarity search.
* **AI Model**: Google Gemini API via official `@google/generative-ai` SDK (`gemini-2.5-flash` primary model candidate with graceful fallback).
* **Code Execution Sandbox**: Local compilers/interpreters for:
  * **Python** (`python`)
  * **JavaScript** (`node`)
  * **Java** (`javac` + `java`)
  * **C** (`gcc`)
  * **C++** (`g++`)

---

## 📁 Monorepo Structure

```text
ai-programming-platform/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/               # Button, Badge, Card primitives
│   │   │   ├── Navbar.jsx        # Top navigation with XP, streak, language indicators
│   │   │   ├── LanguageCard.jsx  # Language cards with difficulties and canonical tracks
│   │   │   ├── CourseCard.jsx    # Curriculum module displays
│   │   │   ├── LearningRoadmap.jsx # Visual curriculum roadmap with status nodes
│   │   │   ├── LessonViewer.jsx  # Rich structured concept lessons with interactive runner
│   │   │   ├── CodeEditor.jsx    # Monaco editor with shortcuts (Ctrl+Enter), full screen
│   │   │   ├── OutputPanel.jsx   # Console output (stdout/stderr/time) & stdin tab
│   │   │   ├── TestResults.jsx   # Public & hidden test case evaluation
│   │   │   ├── AIFeedback.jsx    # Categorized error review & tiered progressive hints
│   │   │   ├── AIChatbot.jsx     # Floating persistent AI mentor with contextual RAG
│   │   │   ├── ProgressCard.jsx  # Recharts mastery bar chart & stats
│   │   │   └── RecommendationCard.jsx # AI weak/strong area advisor
│   │   │
│   │   ├── pages/
│   │   │   ├── Landing.jsx       # Hero, animated pedagogical loop, feature highlights
│   │   │   ├── Dashboard.jsx     # Overview, mastery metrics, continue learning
│   │   │   ├── Languages.jsx     # Python, JS, Java, C, C++ track selector
│   │   │   ├── Course.jsx        # Canonical curriculum roadmap view
│   │   │   ├── Lesson.jsx        # Step-by-step interactive lesson with test quiz
│   │   │   ├── Practice.jsx      # Full IDE workspace with split-pane problem/editor
│   │   │   ├── Profile.jsx       # Scholar credentials, streaks, badges
│   │   │   ├── Login.jsx         # Supabase & 1-click quick access login
│   │   │   └── Signup.jsx        # Scholar registration
│   │   │
│   │   ├── services/
│   │   │   ├── api.js            # Central API client
│   │   │   └── supabase.js       # Client-side Supabase client
│   │   │
│   │   ├── context/
│   │   │   ├── AuthContext.jsx   # User identity, streaks, XP awards
│   │   │   └── LearningContext.jsx # Selected language, topic, chatbot context
│   │   │
│   │   ├── utils/cn.js           # Tailwind class merge helper
│   │   ├── App.jsx               # Main SPA router & layout
│   │   ├── main.jsx              # React DOM entry
│   │   └── index.css             # Tailwind v4, glassmorphism & dark palette
│   │
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── config/
│   │   ├── env.js                # Environment variable parser & validator
│   │   ├── supabase.js           # Supabase client with safe fallback
│   │   └── gemini.js             # Google Generative AI with fallback hierarchy
│   │
│   ├── database/
│   │   └── schema.sql            # Full PostgreSQL + pgvector schema (18 tables)
│   │
│   ├── data/
│   │   ├── canonicalCurriculum.js # Canonical curricula for 5 languages
│   │   └── canonicalQuestions.js  # Challenge problem bank with hidden test cases
│   │
│   ├── services/
│   │   ├── course.service.js     # Modules & topics service
│   │   ├── lesson.service.js     # Enriched lesson service
│   │   ├── practice.service.js   # Problem bank & dynamic AI question generator
│   │   ├── submission.service.js # Test case execution & AI review trigger
│   │   ├── progress.service.js   # Telemetry, deterministic mastery, XP
│   │   └── execution/
│   │       ├── executor.js       # Unified execution dispatcher
│   │       ├── pythonExecutor.js # Python runner
│   │       ├── javascriptExecutor.js # Node.js runner
│   │       ├── javaExecutor.js   # javac & java runner
│   │       ├── cExecutor.js      # gcc runner
│   │       └── cppExecutor.js    # g++ runner
│   │
│   ├── ai/
│   │   ├── orchestrator.js       # AI coordinator
│   │   ├── tutorAgent.js         # Explanations, doubt answering, analogies
│   │   ├── practiceAgent.js      # Adaptive question generator
│   │   ├── codeReviewerAgent.js  # Error categorization & progressive hints
│   │   ├── progressAgent.js      # Mastery advisor & learning path recommendations
│   │   ├── ragService.js         # Retrieval-Augmented Generation with pgvector fallback
│   │   └── prompts/aiPrompts.js  # System prompts
│   │
│   ├── middleware/
│   │   ├── auth.js               # Supabase JWT & guest mode
│   │   ├── validation.js         # Schema validation & sliding window rate limiter
│   │   └── errorHandler.js       # Central error handling
│   │
│   ├── routes/                   # Clean Express REST routes
│   ├── controllers/              # Route controllers
│   ├── server.js                 # Express server entry point
│   ├── package.json
│   └── .env.example
│
├── .gitignore
├── README.md
└── package.json
```

---

## 🔒 Security Architecture

1. **No Frontend API Keys**: `GEMINI_API_KEY` is kept strictly on the Node.js backend (`server/.env`). The React client NEVER receives or bundles this key.
2. **Execution Sandboxing**: Local executors run within isolated temporary directories, process timeouts (8–9 seconds), standard streams management, and guaranteed file cleanup.
3. **Rate Limiting**: AI and code execution routes are protected with sliding-window rate limiters.
4. **Environment Isolation**: `.env` is explicitly ignored by Git. `.env.example` provides schema without exposing credentials.

---

## ⚙️ Environment Configuration

Create `server/.env`:

```env
GEMINI_API_KEY=YOUR_GEMINI_API_KEY

SUPABASE_URL=YOUR_SUPABASE_URL
SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY=YOUR_SUPABASE_SERVICE_ROLE_KEY

PORT=5000
```

> **Note**: The platform includes built-in canonical curricula and intelligent fallbacks, so it runs immediately out-of-the-box in development mode even before you plug in your API keys!

---

## 🏃 Quick Start Guide

### 1. Install Dependencies
From the repository root:
```bash
# Install root, backend, and frontend packages
npm install
npm install --prefix server
npm install --prefix client
```

### 2. Run Backend Server
```bash
npm run dev:server
# Server runs at http://localhost:5000
```

### 3. Run Frontend Client
```bash
npm run dev:client
# Frontend runs at http://localhost:3000
```

---

## 📊 Database Schema (`server/database/schema.sql`)

The PostgreSQL schema is structured for enterprise academic scale with 18 relational tables:
1. `profiles` — User metadata, level, XP, streaks
2. `languages` — Active programming tracks (Python, JS, Java, C, C++)
3. `modules` — Course modules
4. `topics` — Granular topics with order indexes
5. `lessons` — Concept summaries, syntax, how it works, common mistakes, quick checks
6. `examples` — Line-by-line interactive examples
7. `questions` — Problem statements, constraints, sample inputs
8. `test_cases` — Public and hidden test cases
9. `submissions` — Execution history, status, runtimes
10. `submission_test_results` — Granular per-test results
11. `mistakes` — Logged error patterns for AI diagnosis
12. `user_progress` — Completion tracking
13. `mastery` — Deterministic academic mastery scores (0–100%)
14. `chat_sessions` — AI doubt sessions
15. `chat_messages` — Full conversational chat history
16. `knowledge_documents` — Curriculum documents for RAG
17. `knowledge_embeddings` — `vector(768)` embeddings for semantic retrieval
18. `achievements` — Gamification badges

---

## 📡 REST API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/health` | Service health status & configured features |
| `GET` | `/api/languages` | List all supported language tracks |
| `GET` | `/api/courses/:language` | Retrieve full canonical curriculum for a language |
| `GET` | `/api/courses/topics/:topicId` | Retrieve details for a specific topic |
| `GET` | `/api/lessons/:lessonId` | Retrieve structured interactive lesson |
| `GET` | `/api/practice` | List coding problems filtered by language / topic / difficulty |
| `POST` | `/api/practice/generate` | Dynamically generate an original problem using Gemini AI |
| `POST` | `/api/execute` | Execute raw code against native compilers with stdin/stdout |
| `POST` | `/api/submit` | Validate code against test cases; triggers AI Code Review if failed |
| `POST` | `/api/ai/explain` | Generate structured concept explanation |
| `POST` | `/api/ai/review` | Diagnose failed code with progressive tiered hints |
| `POST` | `/api/chat` | Contextual doubt answering with curriculum RAG |
| `GET` | `/api/progress` | User telemetry, mastery distribution, and AI recommendations |

---

## 🏆 Key Pedagogical Features

* **Execution Engine as Ground Truth**: Test cases are executed by native local compilers (`python`, `gcc`, `javac`, `node`), not guessed by an LLM.
* **Progressive Hint System**: Failure #1 gives a subtle hint; Failure #2 targets the specific loop or variable; Failure #3 provides algorithmic explanations.
* **Persistent AI Doubt Chatbot**: Injects current code, runtime errors, language, and topic directly into the prompt with RAG retrieval.
* **Deterministic Mastery**: Scores are calculated using rigorous submission telemetry rather than arbitrary LLM generation.
