-- ====================================================================
-- Migration 003: Complete DSA Module Schema
-- Provides persistent storage for 200 DSA problems, submissions,
-- progress tracking, and 365-day GitHub-style contribution heatmaps.
-- ====================================================================

-- 1. DSA Submissions Table
CREATE TABLE IF NOT EXISTS public.dsa_submissions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL,
    problem_id VARCHAR(64) NOT NULL,
    language VARCHAR(32) NOT NULL,
    code TEXT NOT NULL,
    status VARCHAR(64) NOT NULL, -- 'Accepted', 'Wrong Answer', 'Compile Error', 'Runtime Error', 'Time Limit Exceeded'
    passed_count INT NOT NULL DEFAULT 0,
    total_count INT NOT NULL DEFAULT 10,
    execution_time FLOAT DEFAULT 0.0,
    error_summary TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_dsa_submissions_user_prob ON public.dsa_submissions(user_id, problem_id);
CREATE INDEX IF NOT EXISTS idx_dsa_submissions_created_at ON public.dsa_submissions(created_at DESC);

-- 2. DSA User Progress Table
CREATE TABLE IF NOT EXISTS public.dsa_progress (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL,
    problem_id VARCHAR(64) NOT NULL,
    status VARCHAR(32) NOT NULL DEFAULT 'unsolved', -- 'unsolved', 'attempted', 'solved'
    first_accepted_at TIMESTAMPTZ,
    latest_attempt_at TIMESTAMPTZ DEFAULT NOW(),
    best_submission_id UUID,
    best_execution_time FLOAT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT uq_dsa_progress_user_problem UNIQUE (user_id, problem_id)
);

CREATE INDEX IF NOT EXISTS idx_dsa_progress_user ON public.dsa_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_dsa_progress_status ON public.dsa_progress(user_id, status);

-- 3. DSA Daily Activity Table (GitHub-Style Contribution Heatmap)
CREATE TABLE IF NOT EXISTS public.dsa_activity (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL,
    activity_date DATE NOT NULL,
    solved_count INT NOT NULL DEFAULT 0, -- Unique first-time solves on this day
    submission_count INT NOT NULL DEFAULT 0, -- Total submissions on this day
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT uq_dsa_activity_user_date UNIQUE (user_id, activity_date)
);

CREATE INDEX IF NOT EXISTS idx_dsa_activity_user_date ON public.dsa_activity(user_id, activity_date);
