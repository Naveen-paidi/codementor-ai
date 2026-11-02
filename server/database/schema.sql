-- ============================================================================
-- AI-POWERED PROGRAMMING LEARNING PLATFORM
-- Comprehensive PostgreSQL + Supabase Schema with pgvector
-- ============================================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Enable pgvector for RAG (Retrieval Augmented Generation)
CREATE EXTENSION IF NOT EXISTS vector;

-- 1. PROFILES (Extended user metadata linked to auth.users)
CREATE TABLE IF NOT EXISTS profiles (
    id UUID PRIMARY KEY,
    email TEXT UNIQUE,
    full_name TEXT,
    avatar_url TEXT,
    preferred_language VARCHAR(30) DEFAULT 'python',
    level VARCHAR(20) DEFAULT 'beginner', -- beginner, intermediate, advanced
    xp INTEGER DEFAULT 0,
    streak_days INTEGER DEFAULT 0,
    last_active_at TIMESTAMPTZ DEFAULT NOW(),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. LANGUAGES
CREATE TABLE IF NOT EXISTS languages (
    id VARCHAR(30) PRIMARY KEY, -- 'python', 'java', 'c', 'cpp', 'javascript'
    name VARCHAR(50) NOT NULL,
    slug VARCHAR(30) UNIQUE NOT NULL,
    icon VARCHAR(30) NOT NULL,
    badge_color VARCHAR(30) DEFAULT 'blue',
    description TEXT NOT NULL,
    difficulty VARCHAR(20) DEFAULT 'beginner',
    version VARCHAR(30),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. MODULES (Canonical Course Curricula)
CREATE TABLE IF NOT EXISTS modules (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    language_id VARCHAR(30) REFERENCES languages(id) ON DELETE CASCADE,
    title VARCHAR(150) NOT NULL,
    slug VARCHAR(150) NOT NULL,
    description TEXT,
    order_index INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. TOPICS
CREATE TABLE IF NOT EXISTS topics (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    module_id UUID REFERENCES modules(id) ON DELETE CASCADE,
    title VARCHAR(150) NOT NULL,
    slug VARCHAR(150) NOT NULL,
    summary TEXT,
    estimated_minutes INTEGER DEFAULT 15,
    order_index INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. LESSONS
CREATE TABLE IF NOT EXISTS lessons (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    topic_id UUID REFERENCES topics(id) ON DELETE CASCADE,
    title VARCHAR(150) NOT NULL,
    slug VARCHAR(150) NOT NULL,
    concept_summary TEXT NOT NULL,
    detailed_explanation TEXT NOT NULL,
    syntax_explanation TEXT,
    how_it_works TEXT,
    common_mistakes JSONB DEFAULT '[]'::jsonb,
    quick_checks JSONB DEFAULT '[]'::jsonb,
    interactive_starter_code TEXT,
    order_index INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. EXAMPLES
CREATE TABLE IF NOT EXISTS examples (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    lesson_id UUID REFERENCES lessons(id) ON DELETE CASCADE,
    title VARCHAR(150) NOT NULL,
    description TEXT,
    code TEXT NOT NULL,
    output TEXT,
    line_by_line_explanation JSONB DEFAULT '[]'::jsonb,
    order_index INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 7. QUESTIONS (Practice & Challenge Problems)
CREATE TABLE IF NOT EXISTS questions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    topic_id UUID REFERENCES topics(id) ON DELETE CASCADE,
    language_id VARCHAR(30) REFERENCES languages(id) ON DELETE CASCADE,
    title VARCHAR(200) NOT NULL,
    slug VARCHAR(200) NOT NULL,
    problem_statement TEXT NOT NULL,
    input_format TEXT,
    output_format TEXT,
    constraints JSONB DEFAULT '[]'::jsonb,
    sample_input TEXT,
    sample_output TEXT,
    sample_explanation TEXT,
    starter_code TEXT,
    solution_code TEXT,
    difficulty VARCHAR(20) DEFAULT 'easy', -- easy, medium, hard
    concepts JSONB DEFAULT '[]'::jsonb,
    hints JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 8. TEST CASES
CREATE TABLE IF NOT EXISTS test_cases (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    question_id UUID REFERENCES questions(id) ON DELETE CASCADE,
    input TEXT NOT NULL DEFAULT '',
    expected_output TEXT NOT NULL,
    is_hidden BOOLEAN DEFAULT FALSE,
    order_index INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 9. SUBMISSIONS
CREATE TABLE IF NOT EXISTS submissions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
    question_id UUID REFERENCES questions(id) ON DELETE CASCADE,
    language_id VARCHAR(30) REFERENCES languages(id) ON DELETE CASCADE,
    code TEXT NOT NULL,
    status VARCHAR(30) NOT NULL, -- 'passed', 'failed', 'compilation_error', 'runtime_error', 'timeout'
    total_test_cases INTEGER DEFAULT 0,
    passed_test_cases INTEGER DEFAULT 0,
    execution_time_ms INTEGER DEFAULT 0,
    attempt_number INTEGER DEFAULT 1,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 10. SUBMISSION TEST RESULTS
CREATE TABLE IF NOT EXISTS submission_test_results (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    submission_id UUID REFERENCES submissions(id) ON DELETE CASCADE,
    test_case_id UUID REFERENCES test_cases(id) ON DELETE CASCADE,
    passed BOOLEAN NOT NULL,
    actual_output TEXT,
    expected_output TEXT,
    error_message TEXT,
    execution_time_ms INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 11. MISTAKES (Categorized AI tracking for error patterns)
CREATE TABLE IF NOT EXISTS mistakes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
    question_id UUID REFERENCES questions(id) ON DELETE SET NULL,
    submission_id UUID REFERENCES submissions(id) ON DELETE SET NULL,
    language_id VARCHAR(30) REFERENCES languages(id) ON DELETE CASCADE,
    error_type VARCHAR(50) NOT NULL, -- syntax_error, runtime_error, logical_error, conceptual_error
    summary TEXT NOT NULL,
    what_went_wrong TEXT,
    why_it_happened TEXT,
    concept_to_review TEXT,
    hint_given TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 12. USER PROGRESS
CREATE TABLE IF NOT EXISTS user_progress (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
    topic_id UUID REFERENCES topics(id) ON DELETE CASCADE,
    lesson_id UUID REFERENCES lessons(id) ON DELETE SET NULL,
    language_id VARCHAR(30) REFERENCES languages(id) ON DELETE CASCADE,
    status VARCHAR(30) DEFAULT 'in_progress', -- not_started, in_progress, completed
    completed_at TIMESTAMPTZ,
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(user_id, topic_id)
);

-- 13. MASTERY
CREATE TABLE IF NOT EXISTS mastery (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
    language_id VARCHAR(30) REFERENCES languages(id) ON DELETE CASCADE,
    topic_id UUID REFERENCES topics(id) ON DELETE CASCADE,
    score NUMERIC(5, 2) DEFAULT 0.00, -- 0.00 to 100.00
    level VARCHAR(20) DEFAULT 'novice', -- novice, proficient, master
    total_attempts INTEGER DEFAULT 0,
    successful_attempts INTEGER DEFAULT 0,
    last_evaluated_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(user_id, topic_id)
);

-- 14. CHAT SESSIONS
CREATE TABLE IF NOT EXISTS chat_sessions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
    language_id VARCHAR(30) REFERENCES languages(id) ON DELETE SET NULL,
    topic_id UUID REFERENCES topics(id) ON DELETE SET NULL,
    title VARCHAR(200) DEFAULT 'Learning Session',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 15. CHAT MESSAGES
CREATE TABLE IF NOT EXISTS chat_messages (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    session_id UUID REFERENCES chat_sessions(id) ON DELETE CASCADE,
    sender VARCHAR(20) NOT NULL, -- 'user', 'ai'
    message TEXT NOT NULL,
    context JSONB DEFAULT '{}'::jsonb, -- current code, error, topic
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 16. KNOWLEDGE DOCUMENTS (For RAG)
CREATE TABLE IF NOT EXISTS knowledge_documents (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    language_id VARCHAR(30) REFERENCES languages(id) ON DELETE CASCADE,
    topic_id UUID REFERENCES topics(id) ON DELETE SET NULL,
    title VARCHAR(200) NOT NULL,
    content TEXT NOT NULL,
    doc_type VARCHAR(50) DEFAULT 'concept', -- concept, syntax, mistake, example
    metadata JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 17. KNOWLEDGE EMBEDDINGS (pgvector 768 or 1536 dim)
CREATE TABLE IF NOT EXISTS knowledge_embeddings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    document_id UUID REFERENCES knowledge_documents(id) ON DELETE CASCADE,
    content_chunk TEXT NOT NULL,
    embedding vector(768), -- Gemini text-embedding-004 has 768 dimensions
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 18. ACHIEVEMENTS
CREATE TABLE IF NOT EXISTS achievements (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
    badge_key VARCHAR(50) NOT NULL,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    icon VARCHAR(50) DEFAULT 'award',
    unlocked_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(user_id, badge_key)
);

-- ============================================================================
-- INDEXES FOR PERFORMANCE
-- ============================================================================
CREATE INDEX IF NOT EXISTS idx_modules_language ON modules(language_id);
CREATE INDEX IF NOT EXISTS idx_topics_module ON topics(module_id);
CREATE INDEX IF NOT EXISTS idx_lessons_topic ON lessons(topic_id);
CREATE INDEX IF NOT EXISTS idx_questions_topic ON questions(topic_id);
CREATE INDEX IF NOT EXISTS idx_questions_language ON questions(language_id);
CREATE INDEX IF NOT EXISTS idx_submissions_user ON submissions(user_id);
CREATE INDEX IF NOT EXISTS idx_submissions_question ON submissions(question_id);
CREATE INDEX IF NOT EXISTS idx_mistakes_user ON mistakes(user_id);
CREATE INDEX IF NOT EXISTS idx_user_progress_user ON user_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_mastery_user ON mastery(user_id);
CREATE INDEX IF NOT EXISTS idx_chat_messages_session ON chat_messages(session_id);

-- Vector Index (Cosine Distance)
CREATE INDEX IF NOT EXISTS idx_knowledge_embeddings_vector 
ON knowledge_embeddings USING ivfflat (embedding vector_cosine_ops)
WITH (lists = 100);

-- Similarity Search Function for RAG
CREATE OR REPLACE FUNCTION match_documents (
  query_embedding vector(768),
  match_threshold float DEFAULT 0.65,
  match_count int DEFAULT 5,
  filter_language varchar(30) DEFAULT NULL
)
RETURNS TABLE (
  id uuid,
  document_id uuid,
  content_chunk text,
  similarity float
)
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN QUERY
  SELECT
    ke.id,
    ke.document_id,
    ke.content_chunk,
    1 - (ke.embedding <=> query_embedding) AS similarity
  FROM knowledge_embeddings ke
  JOIN knowledge_documents kd ON ke.document_id = kd.id
  WHERE (filter_language IS NULL OR kd.language_id = filter_language)
    AND 1 - (ke.embedding <=> query_embedding) > match_threshold
  ORDER BY similarity DESC
  LIMIT match_count;
END;
$$;

-- ============================================================================
-- 19. MULTI-COLLEGE LEARNING MANAGEMENT SYSTEM EXTENSION
-- ============================================================================

-- COLLEGES
CREATE TABLE IF NOT EXISTS colleges (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(200) NOT NULL UNIQUE,
    slug VARCHAR(100) NOT NULL UNIQUE,
    description TEXT,
    contact_email VARCHAR(150),
    website VARCHAR(200),
    address TEXT,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- USER ROLES ('user', 'faculty', 'college_admin', 'super_admin')
CREATE TABLE IF NOT EXISTS user_roles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    role VARCHAR(30) NOT NULL CHECK (role IN ('user', 'faculty', 'college_admin', 'super_admin')),
    college_id UUID REFERENCES colleges(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    created_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    CONSTRAINT unique_user_role_college UNIQUE (user_id, role, college_id)
);

-- COLLEGE MEMBERSHIPS
CREATE TABLE IF NOT EXISTS college_memberships (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    student_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    college_id UUID NOT NULL REFERENCES colleges(id) ON DELETE CASCADE,
    status VARCHAR(20) NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'suspended')),
    joined_at TIMESTAMPTZ DEFAULT NOW(),
    approved_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    CONSTRAINT unique_student_membership UNIQUE (student_id, college_id)
);

-- COLLEGE JOIN REQUESTS ('pending', 'approved', 'rejected', 'withdrawn')
CREATE TABLE IF NOT EXISTS college_join_requests (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    student_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    college_id UUID NOT NULL REFERENCES colleges(id) ON DELETE CASCADE,
    status VARCHAR(20) NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected', 'withdrawn')),
    requested_at TIMESTAMPTZ DEFAULT NOW(),
    reviewed_at TIMESTAMPTZ,
    reviewed_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    rejection_reason TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- FACULTY ASSIGNMENTS
CREATE TABLE IF NOT EXISTS faculty_assignments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    student_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    faculty_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    college_id UUID NOT NULL REFERENCES colleges(id) ON DELETE CASCADE,
    status VARCHAR(20) NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'inactive')),
    assigned_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    assigned_at TIMESTAMPTZ DEFAULT NOW(),
    unassigned_at TIMESTAMPTZ,
    CONSTRAINT unique_student_faculty_assignment UNIQUE (student_id, faculty_id, college_id)
);

-- COLLEGE COURSES
CREATE TABLE IF NOT EXISTS college_courses (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    college_id UUID NOT NULL REFERENCES colleges(id) ON DELETE CASCADE,
    course_id VARCHAR(50) NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    is_mandatory BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    CONSTRAINT unique_college_course UNIQUE (college_id, course_id)
);

-- COURSE ENROLLMENTS
CREATE TABLE IF NOT EXISTS course_enrollments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    student_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    course_id VARCHAR(50) NOT NULL,
    college_id UUID REFERENCES colleges(id) ON DELETE SET NULL,
    status VARCHAR(20) NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'completed', 'dropped')),
    enrolled_at TIMESTAMPTZ DEFAULT NOW(),
    completed_at TIMESTAMPTZ,
    last_accessed_at TIMESTAMPTZ DEFAULT NOW(),
    CONSTRAINT unique_student_enrollment UNIQUE (student_id, course_id)
);

-- TOPIC PROGRESS
CREATE TABLE IF NOT EXISTS topic_progress (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    student_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    course_id VARCHAR(50) NOT NULL,
    topic_id VARCHAR(100) NOT NULL,
    status VARCHAR(20) NOT NULL DEFAULT 'completed' CHECK (status IN ('in_progress', 'completed')),
    completed_at TIMESTAMPTZ DEFAULT NOW(),
    last_activity_at TIMESTAMPTZ DEFAULT NOW(),
    CONSTRAINT unique_student_topic UNIQUE (student_id, course_id, topic_id)
);

-- CONVERSATIONS & MESSAGES
CREATE TABLE IF NOT EXISTS conversations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    type VARCHAR(30) NOT NULL CHECK (type IN ('student_faculty', 'faculty_admin', 'direct')),
    college_id UUID REFERENCES colleges(id) ON DELETE CASCADE,
    participant_ids UUID[] NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS messages (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    conversation_id UUID NOT NULL REFERENCES conversations(id) ON DELETE CASCADE,
    sender_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    receiver_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    content TEXT NOT NULL,
    is_read BOOLEAN DEFAULT FALSE,
    read_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- AUDIT LOGS
CREATE TABLE IF NOT EXISTS audit_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    actor_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    action VARCHAR(100) NOT NULL,
    target_type VARCHAR(50) NOT NULL,
    target_id TEXT,
    details JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- COLLEGE ADMIN INVITATIONS
CREATE TABLE IF NOT EXISTS college_admin_invitations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    college_id UUID NOT NULL REFERENCES colleges(id) ON DELETE CASCADE,
    invited_user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    invited_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    status VARCHAR(20) NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'accepted', 'rejected', 'expired', 'cancelled')),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    responded_at TIMESTAMPTZ,
    expires_at TIMESTAMPTZ DEFAULT (NOW() + INTERVAL '7 days')
);

CREATE INDEX IF NOT EXISTS idx_cai_invited_user_id ON college_admin_invitations(invited_user_id);
CREATE INDEX IF NOT EXISTS idx_cai_college_id ON college_admin_invitations(college_id);
CREATE INDEX IF NOT EXISTS idx_cai_status ON college_admin_invitations(status);
CREATE INDEX IF NOT EXISTS idx_cai_created_at ON college_admin_invitations(created_at);

CREATE UNIQUE INDEX IF NOT EXISTS idx_unique_pending_cai 
ON college_admin_invitations (invited_user_id, college_id) 
WHERE status = 'pending';


