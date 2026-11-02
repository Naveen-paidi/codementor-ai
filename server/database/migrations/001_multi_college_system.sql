-- ============================================================================
-- MIGRATION: 001_multi_college_system.sql
-- Multi-College AI Programming Learning Platform (4-Role Architecture)
-- Roles: user (student/independent), faculty, college_admin, super_admin
-- ============================================================================

-- Ensure UUID extension is enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ----------------------------------------------------------------------------
-- 1. COLLEGES TABLE
-- ----------------------------------------------------------------------------
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

-- ----------------------------------------------------------------------------
-- 2. USER ROLES TABLE
-- Roles: 'user', 'faculty', 'college_admin', 'super_admin'
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS user_roles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    role VARCHAR(30) NOT NULL CHECK (role IN ('user', 'faculty', 'college_admin', 'super_admin')),
    college_id UUID REFERENCES colleges(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    created_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    CONSTRAINT unique_user_role_college UNIQUE (user_id, role, college_id)
);

CREATE INDEX IF NOT EXISTS idx_user_roles_user ON user_roles(user_id);
CREATE INDEX IF NOT EXISTS idx_user_roles_role ON user_roles(role);
CREATE INDEX IF NOT EXISTS idx_user_roles_college ON user_roles(college_id);

-- ----------------------------------------------------------------------------
-- 3. COLLEGE MEMBERSHIPS TABLE (Approved students)
-- ----------------------------------------------------------------------------
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

CREATE INDEX IF NOT EXISTS idx_memberships_student ON college_memberships(student_id);
CREATE INDEX IF NOT EXISTS idx_memberships_college ON college_memberships(college_id);

-- ----------------------------------------------------------------------------
-- 4. COLLEGE JOIN REQUESTS TABLE
-- Statuses: 'pending', 'approved', 'rejected', 'withdrawn'
-- ----------------------------------------------------------------------------
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

CREATE INDEX IF NOT EXISTS idx_join_requests_student ON college_join_requests(student_id);
CREATE INDEX IF NOT EXISTS idx_join_requests_college ON college_join_requests(college_id);
CREATE INDEX IF NOT EXISTS idx_join_requests_status ON college_join_requests(status);

-- ----------------------------------------------------------------------------
-- 5. FACULTY ASSIGNMENTS TABLE (Students assigned to Faculty)
-- ----------------------------------------------------------------------------
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

CREATE INDEX IF NOT EXISTS idx_faculty_assignments_faculty ON faculty_assignments(faculty_id);
CREATE INDEX IF NOT EXISTS idx_faculty_assignments_student ON faculty_assignments(student_id);
CREATE INDEX IF NOT EXISTS idx_faculty_assignments_college ON faculty_assignments(college_id);

-- ----------------------------------------------------------------------------
-- 6. COLLEGE COURSES TABLE (Courses enabled for a College)
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS college_courses (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    college_id UUID NOT NULL REFERENCES colleges(id) ON DELETE CASCADE,
    course_id VARCHAR(50) NOT NULL, -- e.g. 'python', 'javascript', 'java', 'c', 'cpp'
    is_active BOOLEAN DEFAULT TRUE,
    is_mandatory BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    CONSTRAINT unique_college_course UNIQUE (college_id, course_id)
);

CREATE INDEX IF NOT EXISTS idx_college_courses_college ON college_courses(college_id);

-- ----------------------------------------------------------------------------
-- 7. COURSE ENROLLMENTS TABLE
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS course_enrollments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    student_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    course_id VARCHAR(50) NOT NULL, -- 'python', 'javascript', 'java', 'c', 'cpp'
    college_id UUID REFERENCES colleges(id) ON DELETE SET NULL,
    status VARCHAR(20) NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'completed', 'dropped')),
    enrolled_at TIMESTAMPTZ DEFAULT NOW(),
    completed_at TIMESTAMPTZ,
    last_accessed_at TIMESTAMPTZ DEFAULT NOW(),
    CONSTRAINT unique_student_enrollment UNIQUE (student_id, course_id)
);

CREATE INDEX IF NOT EXISTS idx_enrollments_student ON course_enrollments(student_id);
CREATE INDEX IF NOT EXISTS idx_enrollments_course ON course_enrollments(course_id);

-- ----------------------------------------------------------------------------
-- 8. TOPIC PROGRESS TABLE
-- ----------------------------------------------------------------------------
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

CREATE INDEX IF NOT EXISTS idx_topic_progress_student ON topic_progress(student_id);
CREATE INDEX IF NOT EXISTS idx_topic_progress_course ON topic_progress(course_id);

-- ----------------------------------------------------------------------------
-- 9. CONVERSATIONS & MESSAGES TABLES (Authorized Messaging)
-- Types: 'student_faculty', 'faculty_admin', 'direct'
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS conversations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    type VARCHAR(30) NOT NULL CHECK (type IN ('student_faculty', 'faculty_admin', 'direct')),
    college_id UUID REFERENCES colleges(id) ON DELETE CASCADE,
    participant_ids UUID[] NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_conversations_college ON conversations(college_id);

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

CREATE INDEX IF NOT EXISTS idx_messages_conversation ON messages(conversation_id);
CREATE INDEX IF NOT EXISTS idx_messages_sender ON messages(sender_id);
CREATE INDEX IF NOT EXISTS idx_messages_receiver ON messages(receiver_id);

-- ----------------------------------------------------------------------------
-- 10. AUDIT LOGS TABLE
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS audit_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    actor_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    action VARCHAR(100) NOT NULL,
    target_type VARCHAR(50) NOT NULL,
    target_id TEXT,
    details JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_audit_logs_actor ON audit_logs(actor_id);
CREATE INDEX IF NOT EXISTS idx_audit_logs_action ON audit_logs(action);
CREATE INDEX IF NOT EXISTS idx_audit_logs_created_at ON audit_logs(created_at);

-- ============================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ============================================================================

-- Helper functions for RLS checks
CREATE OR REPLACE FUNCTION is_super_admin(user_uid UUID)
RETURNS BOOLEAN AS $$
BEGIN
    RETURN EXISTS (
        SELECT 1 FROM user_roles
        WHERE user_id = user_uid AND role = 'super_admin'
    );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE FUNCTION get_user_college_id(user_uid UUID)
RETURNS UUID AS $$
BEGIN
    RETURN (
        SELECT college_id FROM user_roles
        WHERE user_id = user_uid AND role IN ('college_admin', 'faculty')
        LIMIT 1
    );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Enable RLS on all tables
ALTER TABLE colleges ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE college_memberships ENABLE ROW LEVEL SECURITY;
ALTER TABLE college_join_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE faculty_assignments ENABLE ROW LEVEL SECURITY;
ALTER TABLE college_courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE course_enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE topic_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE audit_logs ENABLE ROW LEVEL SECURITY;

-- 1. Colleges Policies
CREATE POLICY "Public can view active colleges"
ON colleges FOR SELECT
USING (is_active = TRUE OR is_super_admin(auth.uid()));

CREATE POLICY "Super admin can manage colleges"
ON colleges FOR ALL
USING (is_super_admin(auth.uid()));

-- 2. User Roles Policies
CREATE POLICY "Users can view their own roles"
ON user_roles FOR SELECT
USING (user_id = auth.uid() OR is_super_admin(auth.uid()));

CREATE POLICY "College admins can view roles in their college"
ON user_roles FOR SELECT
USING (college_id = get_user_college_id(auth.uid()));

CREATE POLICY "Only super admin and backend service can manage roles"
ON user_roles FOR ALL
USING (is_super_admin(auth.uid()));

-- 3. College Memberships Policies
CREATE POLICY "Students can view their own memberships"
ON college_memberships FOR SELECT
USING (student_id = auth.uid());

CREATE POLICY "College admin can view their college memberships"
ON college_memberships FOR SELECT
USING (college_id = get_user_college_id(auth.uid()) OR is_super_admin(auth.uid()));

CREATE POLICY "College admin can manage their college memberships"
ON college_memberships FOR ALL
USING (college_id = get_user_college_id(auth.uid()) OR is_super_admin(auth.uid()));

-- 4. College Join Requests Policies
CREATE POLICY "Students can view and create their own join requests"
ON college_join_requests FOR SELECT
USING (student_id = auth.uid());

CREATE POLICY "Students can submit join request"
ON college_join_requests FOR INSERT
WITH CHECK (student_id = auth.uid());

CREATE POLICY "Students can withdraw their own pending join request"
ON college_join_requests FOR UPDATE
USING (student_id = auth.uid() AND status = 'pending')
WITH CHECK (status = 'withdrawn');

CREATE POLICY "College admin can view and update requests for their college"
ON college_join_requests FOR ALL
USING (college_id = get_user_college_id(auth.uid()) OR is_super_admin(auth.uid()));

-- 5. Faculty Assignments Policies
CREATE POLICY "Students and faculty can view their assignments"
ON faculty_assignments FOR SELECT
USING (student_id = auth.uid() OR faculty_id = auth.uid() OR is_super_admin(auth.uid()));

CREATE POLICY "College admin can manage assignments for their college"
ON faculty_assignments FOR ALL
USING (college_id = get_user_college_id(auth.uid()) OR is_super_admin(auth.uid()));

-- 6. Course Enrollments Policies
CREATE POLICY "Students can view and manage their own enrollments"
ON course_enrollments FOR ALL
USING (student_id = auth.uid() OR is_super_admin(auth.uid()));

CREATE POLICY "Faculty and admin can view student enrollments in their college"
ON course_enrollments FOR SELECT
USING (college_id = get_user_college_id(auth.uid()));

-- 7. Topic Progress Policies
CREATE POLICY "Students can view and update their topic progress"
ON topic_progress FOR ALL
USING (student_id = auth.uid() OR is_super_admin(auth.uid()));

-- 8. Conversations & Messages Policies
CREATE POLICY "Participants can view their conversations"
ON conversations FOR SELECT
USING (auth.uid() = ANY(participant_ids) OR is_super_admin(auth.uid()));

CREATE POLICY "Participants can view messages in their conversations"
ON messages FOR SELECT
USING (sender_id = auth.uid() OR receiver_id = auth.uid() OR is_super_admin(auth.uid()));

CREATE POLICY "Participants can send messages"
ON messages FOR INSERT
WITH CHECK (sender_id = auth.uid());

-- 9. Audit Logs Policies
CREATE POLICY "Super admin can view all audit logs"
ON audit_logs FOR SELECT
USING (is_super_admin(auth.uid()));
