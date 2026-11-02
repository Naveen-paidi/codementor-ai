-- ============================================================================
-- MIGRATION: 002_college_admin_invitations.sql
-- College Admin Invitation System
-- Replaces direct promotion with an invitation, acceptance, rejection, and cancellation lifecycle.
-- ============================================================================

-- ----------------------------------------------------------------------------
-- 1. COLLEGE ADMIN INVITATIONS TABLE
-- ----------------------------------------------------------------------------
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

-- Foreign key & search performance indexes
CREATE INDEX IF NOT EXISTS idx_cai_invited_user_id ON college_admin_invitations(invited_user_id);
CREATE INDEX IF NOT EXISTS idx_cai_college_id ON college_admin_invitations(college_id);
CREATE INDEX IF NOT EXISTS idx_cai_status ON college_admin_invitations(status);
CREATE INDEX IF NOT EXISTS idx_cai_created_at ON college_admin_invitations(created_at);

-- Prevent duplicate pending invitations for the same user and college
CREATE UNIQUE INDEX IF NOT EXISTS idx_unique_pending_cai 
ON college_admin_invitations (invited_user_id, college_id) 
WHERE status = 'pending';

-- ----------------------------------------------------------------------------
-- 2. ROW LEVEL SECURITY (RLS) POLICIES
-- ----------------------------------------------------------------------------
ALTER TABLE college_admin_invitations ENABLE ROW LEVEL SECURITY;

-- Super Admins have full access
CREATE POLICY "Super Admins can manage all college admin invitations"
    ON college_admin_invitations
    FOR ALL
    USING (
        EXISTS (
            SELECT 1 FROM user_roles
            WHERE user_roles.user_id = auth.uid()
            AND user_roles.role = 'super_admin'
        )
    );

-- Invited users can view invitations sent to them
CREATE POLICY "Invited users can view their own invitations"
    ON college_admin_invitations
    FOR SELECT
    USING (invited_user_id = auth.uid());

-- Invited users can respond to their own pending invitations
CREATE POLICY "Invited users can respond to their pending invitations"
    ON college_admin_invitations
    FOR UPDATE
    USING (invited_user_id = auth.uid() AND status = 'pending')
    WITH CHECK (invited_user_id = auth.uid());
