-- ====================================================================
-- Migration 005: Gamification (XP, Daily Streaks) and Course Certificates
-- Supports idempotent XP transactions, daily learning streak tracking,
-- and cryptographically verifiable course completion certificates.
-- ====================================================================

-- 1. XP Transactions Table (Idempotent rewards)
CREATE TABLE IF NOT EXISTS public.xp_transactions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL,
    amount INT NOT NULL,
    reason VARCHAR(255) NOT NULL,
    activity_type VARCHAR(64) NOT NULL, -- 'topic_completion', 'language_problem', 'dsa_problem'
    activity_id VARCHAR(128) NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT uq_xp_user_activity UNIQUE (user_id, activity_type, activity_id)
);

CREATE INDEX IF NOT EXISTS idx_xp_tx_user_created ON public.xp_transactions(user_id, created_at DESC);

-- 2. Daily Learning Activities Table (Streak calculations based on genuine completions)
CREATE TABLE IF NOT EXISTS public.daily_activities (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL,
    activity_date DATE NOT NULL,
    activity_type VARCHAR(64) NOT NULL,
    activity_id VARCHAR(128) NOT NULL,
    metadata JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT uq_daily_activity UNIQUE (user_id, activity_date, activity_type, activity_id)
);

CREATE INDEX IF NOT EXISTS idx_daily_act_user_date ON public.daily_activities(user_id, activity_date);

-- 3. Course Certificates Table
CREATE TABLE IF NOT EXISTS public.certificates (
    id VARCHAR(64) PRIMARY KEY, -- e.g. 'CM-CERT-PYTHON-A8B9C0'
    user_id UUID NOT NULL,
    course_id VARCHAR(32) NOT NULL, -- 'python', 'java', 'javascript', 'c', 'cpp', 'dsa'
    course_title VARCHAR(128) NOT NULL,
    student_name VARCHAR(128) NOT NULL,
    issued_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    verification_url TEXT NOT NULL,
    metadata JSONB DEFAULT '{}'::jsonb,
    CONSTRAINT uq_user_course_certificate UNIQUE (user_id, course_id)
);

CREATE INDEX IF NOT EXISTS idx_certificates_user ON public.certificates(user_id);
CREATE INDEX IF NOT EXISTS idx_certificates_course ON public.certificates(course_id);

-- Enable RLS
ALTER TABLE public.xp_transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.daily_activities ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.certificates ENABLE ROW LEVEL SECURITY;

-- RLS Policies: Students can view their own XP, activities, and certificates
CREATE POLICY "Users can view their own XP transactions"
    ON public.xp_transactions FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "Users can view their own daily activities"
    ON public.daily_activities FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "Users can view their own certificates"
    ON public.certificates FOR SELECT
    USING (auth.uid() = user_id);

-- Public can verify any certificate by ID
CREATE POLICY "Public certificate verification"
    ON public.certificates FOR SELECT
    USING (true);

