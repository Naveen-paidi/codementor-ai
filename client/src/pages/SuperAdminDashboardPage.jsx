import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext.jsx';
import { useTheme } from '../context/ThemeContext.jsx';
import api from '../services/api.js';
import {
  ShieldCheck,
  Building2,
  Users,
  GraduationCap,
  BookOpen,
  TrendingUp,
  Search,
  Plus,
  UserCheck,
  History,
  CheckCircle,
  AlertCircle,
  Globe,
  Settings,
  ShieldAlert,
  Mail,
  Clock,
  X
} from 'lucide-react';
import Button from '../components/ui/Button.jsx';
import RAGKnowledgeManager from '../components/admin/RAGKnowledgeManager.jsx';
import DecorativeVideoCard from '../components/dashboard/DecorativeVideoCard.jsx';

export default function SuperAdminDashboardPage() {
  const { user } = useAuth();
  const { isDark } = useTheme();
  const [activeTab, setActiveTab] = useState('overview');
  const [metrics, setMetrics] = useState(null);
  const [colleges, setColleges] = useState([]);
  const [usersList, setUsersList] = useState([]);
  const [auditLogs, setAuditLogs] = useState([]);
  const [invitations, setInvitations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);
  const [notification, setNotification] = useState(null);

  // Filter states
  const [userQuery, setUserQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState('');
  const [collegeSearch, setCollegeSearch] = useState('');

  // Modals state
  const [showCreateCollegeModal, setShowCreateCollegeModal] = useState(false);
  const [newCollegeData, setNewCollegeData] = useState({
    name: '',
    slug: '',
    description: '',
    contact_email: '',
    website: '',
    address: ''
  });

  const [showInviteAdminModal, setShowInviteAdminModal] = useState(false);
  const [inviteAdminEmail, setInviteAdminEmail] = useState('');
  const [inviteCollegeId, setInviteCollegeId] = useState('');
  const [viewingInvitation, setViewingInvitation] = useState(null);

  const [showRoleModal, setShowRoleModal] = useState(false);
  const [selectedUserForRole, setSelectedUserForRole] = useState(null);
  const [newRoleValue, setNewRoleValue] = useState('user');
  const [roleCollegeId, setRoleCollegeId] = useState('');

  const loadData = async () => {
    setLoading(true);
    try {
      const [dashRes, colRes, usersRes, logsRes, invRes] = await Promise.all([
        api.getSuperAdminDashboard(),
        api.getSuperAdminColleges({ search: collegeSearch }),
        api.getUsers({ query: userQuery, role: roleFilter }),
        api.getAuditLogs({ limit: 50 }),
        api.getSuperAdminInvitations()
      ]);

      if (dashRes.success) setMetrics(dashRes.metrics);
      if (colRes.success) setColleges(colRes.colleges || []);
      if (usersRes.success) setUsersList(usersRes.users || []);
      if (logsRes.success) setAuditLogs(logsRes.logs || []);
      if (invRes.success) setInvitations(invRes.invitations || []);
    } catch (err) {
      console.error('Error loading super admin data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [collegeSearch, userQuery, roleFilter]);

  // Handle Create College
  const handleCreateCollege = async (e) => {
    e.preventDefault();
    setActionLoading(true);
    setNotification(null);
    try {
      const res = await api.createCollege(newCollegeData);
      if (res.success) {
        setNotification({ type: 'success', message: `College "${res.college?.name}" created successfully!` });
        setShowCreateCollegeModal(false);
        setNewCollegeData({ name: '', slug: '', description: '', contact_email: '', website: '', address: '' });
        loadData();
      } else {
        setNotification({ type: 'error', message: res.error || 'Failed to create college.' });
      }
    } catch (err) {
      setNotification({ type: 'error', message: err.message });
    } finally {
      setActionLoading(false);
    }
  };

  // Handle Invite College Admin
  const handleInviteAdmin = async (e) => {
    e.preventDefault();
    if (!inviteAdminEmail || !inviteCollegeId) return;
    setActionLoading(true);
    setNotification(null);
    try {
      const res = await api.inviteCollegeAdmin({ collegeId: inviteCollegeId, email: inviteAdminEmail });
      if (res.success) {
        setNotification({ type: 'success', message: 'College administrator invitation sent successfully!' });
        setShowInviteAdminModal(false);
        setInviteAdminEmail('');
        setInviteCollegeId('');
        loadData();
      } else {
        setNotification({ type: 'error', message: res.error || 'Failed to send invitation.' });
      }
    } catch (err) {
      setNotification({ type: 'error', message: err.message });
    } finally {
      setActionLoading(false);
    }
  };

  // Handle Cancel Invitation
  const handleCancelInvitation = async (invitationId) => {
    setActionLoading(true);
    setNotification(null);
    try {
      const res = await api.cancelCollegeAdminInvitation(invitationId);
      if (res.success) {
        setNotification({ type: 'success', message: 'Invitation cancelled successfully.' });
        loadData();
      } else {
        setNotification({ type: 'error', message: res.error || 'Failed to cancel invitation.' });
      }
    } catch (err) {
      setNotification({ type: 'error', message: err.message });
    } finally {
      setActionLoading(false);
    }
  };

  // Handle Update Role
  const handleUpdateRole = async (e) => {
    e.preventDefault();
    if (!selectedUserForRole) return;
    setActionLoading(true);
    setNotification(null);
    try {
      const res = await api.updateUserRole(selectedUserForRole.id, {
        role: newRoleValue,
        collegeId: roleCollegeId || null
      });
      if (res.success) {
        setNotification({ type: 'success', message: `Role updated for ${selectedUserForRole.full_name || selectedUserForRole.email}` });
        setShowRoleModal(false);
        setSelectedUserForRole(null);
        loadData();
      } else {
        setNotification({ type: 'error', message: res.error || 'Failed to update role.' });
      }
    } catch (err) {
      setNotification({ type: 'error', message: err.message });
    } finally {
      setActionLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-12 select-none">
      {/* Super Admin Hero Banner */}
      <div className={`p-6 sm:p-8 rounded-3xl transition-all duration-300 relative overflow-hidden shadow-xl ${
        isDark
          ? 'bg-gradient-to-r from-[#030617] via-[#070B20] to-[#10152E] border border-cyan-500/30 text-white shadow-[0_0_35px_rgba(6,182,212,0.2)]'
          : 'bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-800 border border-indigo-400/30 text-white shadow-xl'
      }`}>
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-300" />
              <span>Platform Governance</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
              Root Platform Governance
            </h1>
            <p className="text-xs sm:text-sm text-purple-100 dark:text-cyan-100/80 max-w-xl leading-relaxed">
              High-level governance across all institutional tenants, administrators, faculty roles, student enrollments, and security audit logs.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <Button size="sm" variant="primary" onClick={() => setShowCreateCollegeModal(true)} className="font-bold shadow-lg">
                <Plus className="w-3.5 h-3.5 mr-1" /> Add College
              </Button>
              <Button size="sm" variant="outline" onClick={() => setShowInviteAdminModal(true)} className="border-white/30 text-white hover:bg-white/10 font-bold">
                <Mail className="w-3.5 h-3.5 mr-1" /> Invite College Admin
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <DecorativeVideoCard
              filename="platform_governance.mp4"
              badgeText="Security Audit Core"
              footerBadge="Root Access Verified"
              footerTag="Super Admin"
            />
          </div>
        </div>
      </div>

      {notification && (
        <div className={`p-4 rounded-2xl border flex items-center justify-between ${
          notification.type === 'success'
            ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-500/30 text-emerald-800 dark:text-emerald-300'
            : 'bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-500/30 text-rose-800 dark:text-rose-300'
        }`}>
          <div className="flex items-center gap-2 text-xs font-semibold">
            <CheckCircle className="w-4 h-4 text-emerald-500" />
            {notification.message}
          </div>
          <button onClick={() => setNotification(null)} className="text-xs font-bold hover:underline">Dismiss</button>
        </div>
      )}

      {/* Navigation Tabs */}
      <div className="flex border-b border-[#E5E1F0] dark:border-white/10 gap-6 text-xs font-bold text-[#64748B] dark:text-slate-400 overflow-x-auto">
        <button
          onClick={() => setActiveTab('overview')}
          className={`pb-3 px-1 border-b-2 transition-colors cursor-pointer ${
            activeTab === 'overview'
              ? 'border-indigo-600 text-indigo-600 dark:border-cyan-400 dark:text-cyan-300'
              : 'border-transparent hover:text-[#171725] dark:hover:text-white'
          }`}
        >
          Platform Analytics
        </button>
        <button
          onClick={() => setActiveTab('colleges')}
          className={`pb-3 px-1 border-b-2 transition-colors cursor-pointer ${
            activeTab === 'colleges'
              ? 'border-indigo-600 text-indigo-600 dark:border-cyan-400 dark:text-cyan-300'
              : 'border-transparent hover:text-[#171725] dark:hover:text-white'
          }`}
        >
          Colleges ({colleges.length})
        </button>
        <button
          onClick={() => setActiveTab('invitations')}
          className={`pb-3 px-1 border-b-2 transition-colors cursor-pointer ${
            activeTab === 'invitations'
              ? 'border-indigo-600 text-indigo-600 dark:border-cyan-400 dark:text-cyan-300'
              : 'border-transparent hover:text-[#171725] dark:hover:text-white'
          }`}
        >
          College Admin Invitations ({invitations.length})
        </button>
        <button
          onClick={() => setActiveTab('users')}
          className={`pb-3 px-1 border-b-2 transition-colors cursor-pointer ${
            activeTab === 'users'
              ? 'border-indigo-600 text-indigo-600 dark:border-cyan-400 dark:text-cyan-300'
              : 'border-transparent hover:text-[#171725] dark:hover:text-white'
          }`}
        >
          User Governance ({usersList.length})
        </button>
        <button
          onClick={() => setActiveTab('audit')}
          className={`pb-3 px-1 border-b-2 transition-colors cursor-pointer ${
            activeTab === 'audit'
              ? 'border-indigo-600 text-indigo-600 dark:border-cyan-400 dark:text-cyan-300'
              : 'border-transparent hover:text-[#171725] dark:hover:text-white'
          }`}
        >
          Audit History ({auditLogs.length})
        </button>
        <button
          onClick={() => setActiveTab('knowledge')}
          className={`pb-3 px-1 border-b-2 transition-colors cursor-pointer ${
            activeTab === 'knowledge'
              ? 'border-indigo-600 text-indigo-600 dark:border-cyan-400 dark:text-cyan-300'
              : 'border-transparent hover:text-[#171725] dark:hover:text-white'
          }`}
        >
          RAG Knowledge Base
        </button>
      </div>

      {/* Tab: Platform Analytics */}
      {activeTab === 'overview' && (
        <div className="space-y-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="p-5 rounded-2xl bg-white dark:bg-[#10152E] border border-[#E5E1F0] dark:border-white/10 shadow-xs space-y-1">
              <div className="text-[10px] text-[#64748B] dark:text-slate-400 font-bold uppercase">Total Users</div>
              <div className="text-2xl font-black text-[#171725] dark:text-white">{metrics?.total_users || 0}</div>
              <div className="text-[11px] text-[#64748B] dark:text-slate-400">Platform accounts</div>
            </div>
            <div className="p-5 rounded-2xl bg-white dark:bg-[#10152E] border border-[#E5E1F0] dark:border-white/10 shadow-xs space-y-1">
              <div className="text-[10px] text-[#64748B] dark:text-slate-400 font-bold uppercase">Institutions</div>
              <div className="text-2xl font-black text-indigo-600 dark:text-cyan-400">{metrics?.total_colleges || 0}</div>
              <div className="text-[11px] text-[#64748B] dark:text-slate-400">Tenant colleges</div>
            </div>
            <div className="p-5 rounded-2xl bg-white dark:bg-[#10152E] border border-[#E5E1F0] dark:border-white/10 shadow-xs space-y-1">
              <div className="text-[10px] text-[#64748B] dark:text-slate-400 font-bold uppercase">Faculty Staff</div>
              <div className="text-2xl font-black text-[#171725] dark:text-white">{metrics?.total_faculty || 0}</div>
              <div className="text-[11px] text-[#64748B] dark:text-slate-400">Instructors</div>
            </div>
            <div className="p-5 rounded-2xl bg-white dark:bg-[#10152E] border border-[#E5E1F0] dark:border-white/10 shadow-xs space-y-1">
              <div className="text-[10px] text-[#64748B] dark:text-slate-400 font-bold uppercase">College Students</div>
              <div className="text-2xl font-black text-emerald-500">{metrics?.total_students || 0}</div>
              <div className="text-[11px] text-[#64748B] dark:text-slate-400">Affiliated learners</div>
            </div>
            <div className="p-5 rounded-2xl bg-white dark:bg-[#10152E] border border-[#E5E1F0] dark:border-white/10 shadow-xs space-y-1">
              <div className="text-[10px] text-[#64748B] dark:text-slate-400 font-bold uppercase">Audit Events</div>
              <div className="text-2xl font-black text-purple-600 dark:text-purple-400">{auditLogs.length}</div>
              <div className="text-[11px] text-[#64748B] dark:text-slate-400">Security logs</div>
            </div>
          </div>
        </div>
      )}

      {/* Tab: Colleges */}
      {activeTab === 'colleges' && (
        <div className="bg-white dark:bg-[#0E1433] rounded-3xl border border-[#E5E1F0] dark:border-white/10 p-6 space-y-4 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-base font-bold text-[#171725] dark:text-white">Colleges & Universities Directory</h2>
              <p className="text-xs text-[#64748B] dark:text-slate-400">All registered tenant colleges in the CodeMentor platform.</p>
            </div>
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-[#64748B] dark:text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                value={collegeSearch}
                onChange={(e) => setCollegeSearch(e.target.value)}
                placeholder="Search colleges..."
                className="w-full pl-9 pr-3 py-1.5 bg-[#F7F5FC] dark:bg-[#10152E] border border-[#E5E1F0] dark:border-white/10 rounded-xl text-xs text-[#171725] dark:text-white placeholder-[#64748B] dark:placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:focus:ring-cyan-400"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#F7F5FC] dark:bg-[#10152E] border-y border-[#E5E1F0] dark:border-white/10 text-[#64748B] dark:text-slate-400 font-semibold uppercase text-[10px]">
                <tr>
                  <th className="py-3 px-4">College Name</th>
                  <th className="py-3 px-4">Slug</th>
                  <th className="py-3 px-4">Students</th>
                  <th className="py-3 px-4">Faculty</th>
                  <th className="py-3 px-4">Created Date</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E1F0] dark:divide-white/10">
                {colleges.map((c) => (
                  <tr key={c.id} className="hover:bg-[#F7F5FC]/80 dark:hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4">
                      <div className="font-bold text-[#171725] dark:text-white">{c.name}</div>
                      <div className="text-[11px] text-[#64748B] dark:text-slate-400">{c.contact_email || 'No email provided'}</div>
                    </td>
                    <td className="py-3 px-4 font-mono text-[#64748B] dark:text-slate-400">{c.slug}</td>
                    <td className="py-3 px-4 font-bold text-emerald-600 dark:text-emerald-400">{c.student_count || 0}</td>
                    <td className="py-3 px-4 font-bold text-indigo-600 dark:text-cyan-400">{c.faculty_count || 0}</td>
                    <td className="py-3 px-4 text-[#64748B] dark:text-slate-400">{new Date(c.created_at).toLocaleDateString()}</td>
                    <td className="py-3 px-4 text-right">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => {
                          setInviteCollegeId(c.id);
                          setShowInviteAdminModal(true);
                        }}
                        className="text-[11px] py-1 px-2.5 font-bold"
                      >
                        Invite Admin
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab: Invitations */}
      {activeTab === 'invitations' && (
        <div className="bg-white dark:bg-[#0E1433] rounded-3xl border border-[#E5E1F0] dark:border-white/10 p-6 space-y-4 shadow-xs">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-[#171725] dark:text-white">College Administrator Invitations</h2>
              <p className="text-xs text-[#64748B] dark:text-slate-400">Track and manage invitations issued to external institution administrators.</p>
            </div>
            <Button size="sm" variant="primary" onClick={() => setShowInviteAdminModal(true)} className="font-bold">
              <Mail className="w-3.5 h-3.5 mr-1" /> New Invitation
            </Button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#F7F5FC] dark:bg-[#10152E] border-y border-[#E5E1F0] dark:border-white/10 text-[#64748B] dark:text-slate-400 font-semibold uppercase text-[10px]">
                <tr>
                  <th className="py-3 px-4">Invited Email</th>
                  <th className="py-3 px-4">College</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Invited On</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E1F0] dark:divide-white/10">
                {invitations.map((inv) => (
                  <tr key={inv.id} className="hover:bg-[#F7F5FC]/80 dark:hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4 font-bold text-[#171725] dark:text-white">{inv.email}</td>
                    <td className="py-3 px-4 text-[#64748B] dark:text-slate-400">{inv.college?.name || inv.college_id}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        inv.status === 'pending' ? 'bg-amber-100 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-500/30' :
                        inv.status === 'accepted' ? 'bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/30' :
                        'bg-rose-100 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-500/30'
                      }`}>
                        {inv.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-[#64748B] dark:text-slate-400">{new Date(inv.created_at).toLocaleDateString()}</td>
                    <td className="py-3 px-4 text-right space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setViewingInvitation(inv)}
                        className="text-[11px] py-1 px-2.5 font-bold"
                      >
                        Inspect
                      </Button>
                      {inv.status === 'pending' && (
                        <button
                          onClick={() => handleCancelInvitation(inv.id)}
                          className="text-rose-600 dark:text-rose-400 hover:text-rose-800 font-semibold text-[11px] cursor-pointer"
                        >
                          Cancel
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab: Users */}
      {activeTab === 'users' && (
        <div className="bg-white dark:bg-[#0E1433] rounded-3xl border border-[#E5E1F0] dark:border-white/10 p-6 space-y-4 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-base font-bold text-[#171725] dark:text-white">Platform User Governance</h2>
              <p className="text-xs text-[#64748B] dark:text-slate-400">View and promote user accounts across all roles and institutions.</p>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="text"
                value={userQuery}
                onChange={(e) => setUserQuery(e.target.value)}
                placeholder="Search by name or email..."
                className="w-56 pl-3 pr-3 py-1.5 bg-[#F7F5FC] dark:bg-[#10152E] border border-[#E5E1F0] dark:border-white/10 rounded-xl text-xs text-[#171725] dark:text-white placeholder-[#64748B] dark:placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:focus:ring-cyan-400"
              />
              <select
                value={roleFilter}
                onChange={(e) => setRoleFilter(e.target.value)}
                className="px-3 py-1.5 bg-[#F7F5FC] dark:bg-[#10152E] border border-[#E5E1F0] dark:border-white/10 rounded-xl text-xs text-[#171725] dark:text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:focus:ring-cyan-400"
              >
                <option value="">All Roles</option>
                <option value="user">Student</option>
                <option value="faculty">Faculty</option>
                <option value="college_admin">College Admin</option>
                <option value="super_admin">Super Admin</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#F7F5FC] dark:bg-[#10152E] border-y border-[#E5E1F0] dark:border-white/10 text-[#64748B] dark:text-slate-400 font-semibold uppercase text-[10px]">
                <tr>
                  <th className="py-3 px-4">User</th>
                  <th className="py-3 px-4">Role</th>
                  <th className="py-3 px-4">College</th>
                  <th className="py-3 px-4">Joined On</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E1F0] dark:divide-white/10">
                {usersList.map((u) => (
                  <tr key={u.id} className="hover:bg-[#F7F5FC]/80 dark:hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4">
                      <div className="font-bold text-[#171725] dark:text-white">{u.full_name || 'Anonymous User'}</div>
                      <div className="text-[11px] text-[#64748B] dark:text-slate-400">{u.email}</div>
                    </td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-purple-50 dark:bg-cyan-950/40 text-indigo-700 dark:text-cyan-300 border border-purple-200 dark:border-cyan-500/30">
                        {u.role}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-[#64748B] dark:text-slate-400">{u.college?.name || 'None'}</td>
                    <td className="py-3 px-4 text-[#64748B] dark:text-slate-400">{new Date(u.created_at).toLocaleDateString()}</td>
                    <td className="py-3 px-4 text-right">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => {
                          setSelectedUserForRole(u);
                          setNewRoleValue(u.role || 'user');
                          setRoleCollegeId(u.college_id || '');
                          setShowRoleModal(true);
                        }}
                        className="text-[11px] py-1 px-2.5 font-bold"
                      >
                        Change Role
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab: Audit */}
      {activeTab === 'audit' && (
        <div className="bg-white dark:bg-[#0E1433] rounded-3xl border border-[#E5E1F0] dark:border-white/10 p-6 space-y-4 shadow-xs">
          <div>
            <h2 className="text-base font-bold text-[#171725] dark:text-white">Security & Governance Audit Trail</h2>
            <p className="text-xs text-[#64748B] dark:text-slate-400">Chronological history of security events, administrative changes, and invitations.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#F7F5FC] dark:bg-[#10152E] border-y border-[#E5E1F0] dark:border-white/10 text-[#64748B] dark:text-slate-400 font-semibold uppercase text-[10px]">
                <tr>
                  <th className="py-3 px-4">Action</th>
                  <th className="py-3 px-4">Actor</th>
                  <th className="py-3 px-4">Target Entity</th>
                  <th className="py-3 px-4">Timestamp</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E1F0] dark:divide-white/10">
                {auditLogs.map((log) => (
                  <tr key={log.id} className="hover:bg-[#F7F5FC]/80 dark:hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4 font-bold text-indigo-700 dark:text-cyan-300 font-mono text-[11px]">{log.action}</td>
                    <td className="py-3 px-4 text-[#171725] dark:text-white">{log.actor?.email || log.actor_id || 'System'}</td>
                    <td className="py-3 px-4 text-[#64748B] dark:text-slate-400">{log.entity_type} {log.entity_id ? `(#${String(log.entity_id).slice(0, 8)})` : ''}</td>
                    <td className="py-3 px-4 text-[#64748B] dark:text-slate-400">{new Date(log.created_at).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab: RAG Knowledge Base */}
      {activeTab === 'knowledge' && (
        <RAGKnowledgeManager />
      )}

      {/* Create College Modal */}
      {showCreateCollegeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-150">
          <form onSubmit={handleCreateCollege} className="bg-white dark:bg-[#0E1433] rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-[#E5E1F0] dark:border-white/10 space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-[#171725] dark:text-white">Register New Institutional Tenant</h3>
              <button
                type="button"
                onClick={() => setShowCreateCollegeModal(false)}
                className="w-7 h-7 rounded-full bg-[#F7F5FC] dark:bg-[#10152E] flex items-center justify-center text-[#171725] dark:text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#172B3A] dark:text-slate-200 mb-1">College Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Stanford University School of Engineering"
                value={newCollegeData.name}
                onChange={(e) => {
                  const val = e.target.value;
                  const autoSlug = val.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
                  setNewCollegeData({ ...newCollegeData, name: val, slug: autoSlug });
                }}
                className="w-full px-3 py-2 bg-[#F7F5FC] dark:bg-[#10152E] border border-[#E5E1F0] dark:border-white/10 rounded-xl text-xs text-[#171725] dark:text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:focus:ring-cyan-400"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#172B3A] dark:text-slate-200 mb-1">Slug Identifier *</label>
              <input
                type="text"
                required
                placeholder="stanford-eng"
                value={newCollegeData.slug}
                onChange={(e) => setNewCollegeData({ ...newCollegeData, slug: e.target.value })}
                className="w-full px-3 py-2 bg-[#F7F5FC] dark:bg-[#10152E] border border-[#E5E1F0] dark:border-white/10 rounded-xl text-xs text-[#171725] dark:text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:focus:ring-cyan-400"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-[#172B3A] dark:text-slate-200 mb-1">Official Contact Email</label>
                <input
                  type="email"
                  placeholder="admin@college.edu"
                  value={newCollegeData.contact_email}
                  onChange={(e) => setNewCollegeData({ ...newCollegeData, contact_email: e.target.value })}
                  className="w-full px-3 py-2 bg-[#F7F5FC] dark:bg-[#10152E] border border-[#E5E1F0] dark:border-white/10 rounded-xl text-xs text-[#171725] dark:text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:focus:ring-cyan-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#172B3A] dark:text-slate-200 mb-1">Website URL</label>
                <input
                  type="url"
                  placeholder="https://engineering.stanford.edu"
                  value={newCollegeData.website}
                  onChange={(e) => setNewCollegeData({ ...newCollegeData, website: e.target.value })}
                  className="w-full px-3 py-2 bg-[#F7F5FC] dark:bg-[#10152E] border border-[#E5E1F0] dark:border-white/10 rounded-xl text-xs text-[#171725] dark:text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:focus:ring-cyan-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#172B3A] dark:text-slate-200 mb-1">Description</label>
              <textarea
                rows={3}
                placeholder="Institutional description, campus details, and department focus..."
                value={newCollegeData.description}
                onChange={(e) => setNewCollegeData({ ...newCollegeData, description: e.target.value })}
                className="w-full px-3 py-2 bg-[#F7F5FC] dark:bg-[#10152E] border border-[#E5E1F0] dark:border-white/10 rounded-xl text-xs text-[#171725] dark:text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:focus:ring-cyan-400"
              />
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <Button type="button" variant="outline" size="sm" onClick={() => setShowCreateCollegeModal(false)}>
                Cancel
              </Button>
              <Button type="submit" variant="primary" size="sm" isLoading={actionLoading} className="font-bold">
                Create Institution
              </Button>
            </div>
          </form>
        </div>
      )}

      {/* Invite Admin Modal */}
      {showInviteAdminModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-150">
          <form onSubmit={handleInviteAdmin} className="bg-white dark:bg-[#0E1433] rounded-3xl max-w-md w-full p-6 shadow-2xl border border-[#E5E1F0] dark:border-white/10 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-[#171725] dark:text-white">Invite College Administrator</h3>
              <button
                type="button"
                onClick={() => setShowInviteAdminModal(false)}
                className="w-7 h-7 rounded-full bg-[#F7F5FC] dark:bg-[#10152E] flex items-center justify-center text-[#171725] dark:text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#172B3A] dark:text-slate-200 mb-1">Target College *</label>
              <select
                required
                value={inviteCollegeId}
                onChange={(e) => setInviteCollegeId(e.target.value)}
                className="w-full px-3 py-2 bg-[#F7F5FC] dark:bg-[#10152E] border border-[#E5E1F0] dark:border-white/10 rounded-xl text-xs text-[#171725] dark:text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:focus:ring-cyan-400"
              >
                <option value="">-- Choose College --</option>
                {colleges.map((c) => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#172B3A] dark:text-slate-200 mb-1">Administrator Email *</label>
              <input
                type="email"
                required
                placeholder="provost@college.edu"
                value={inviteAdminEmail}
                onChange={(e) => setInviteAdminEmail(e.target.value)}
                className="w-full px-3 py-2 bg-[#F7F5FC] dark:bg-[#10152E] border border-[#E5E1F0] dark:border-white/10 rounded-xl text-xs text-[#171725] dark:text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:focus:ring-cyan-400"
              />
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <Button type="button" variant="outline" size="sm" onClick={() => setShowInviteAdminModal(false)}>
                Cancel
              </Button>
              <Button type="submit" variant="primary" size="sm" isLoading={actionLoading} className="font-bold">
                Send Invitation
              </Button>
            </div>
          </form>
        </div>
      )}

      {/* Inspect Invitation Modal */}
      {viewingInvitation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-white dark:bg-[#0E1433] rounded-3xl max-w-md w-full p-6 shadow-2xl border border-[#E5E1F0] dark:border-white/10 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-[#171725] dark:text-white">Invitation Details</h3>
              <button
                type="button"
                onClick={() => setViewingInvitation(null)}
                className="w-7 h-7 rounded-full bg-[#F7F5FC] dark:bg-[#10152E] flex items-center justify-center text-[#171725] dark:text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <span className="text-[#64748B] dark:text-slate-400">Invited Email:</span>
                <p className="font-bold text-[#171725] dark:text-white">{viewingInvitation.email}</p>
              </div>

              <div>
                <span className="text-[#64748B] dark:text-slate-400">Target College:</span>
                <p className="font-bold text-[#171725] dark:text-white">{viewingInvitation.college?.name || viewingInvitation.college_id}</p>
              </div>

              <div className="p-3 bg-[#F7F5FC] dark:bg-[#10152E] rounded-2xl space-y-2 border border-[#E5E1F0] dark:border-white/10">
                <div className="flex justify-between items-center">
                  <span className="text-[#64748B] dark:text-slate-400 font-medium">Status:</span>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                    viewingInvitation.status === 'pending' ? 'bg-amber-100 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-500/30' :
                    viewingInvitation.status === 'accepted' ? 'bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/30' :
                    'bg-rose-100 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-500/30'
                  }`}>
                    {viewingInvitation.status}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#64748B] dark:text-slate-400 font-medium">Invited Date:</span>
                  <span className="text-[#171725] dark:text-white">{new Date(viewingInvitation.created_at).toLocaleString()}</span>
                </div>
                {viewingInvitation.responded_at && (
                  <div className="flex justify-between">
                    <span className="text-[#64748B] dark:text-slate-400 font-medium">Responded Date:</span>
                    <span className="text-[#171725] dark:text-white">{new Date(viewingInvitation.responded_at).toLocaleString()}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="flex justify-between items-center pt-2">
              <div>
                {viewingInvitation.status === 'pending' && (
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => {
                      const id = viewingInvitation.id;
                      setViewingInvitation(null);
                      handleCancelInvitation(id);
                    }}
                    className="text-rose-600 dark:text-rose-400 border-rose-200 dark:border-rose-500/30 hover:bg-rose-50 dark:hover:bg-rose-950/20 text-xs font-bold"
                  >
                    Cancel Invitation
                  </Button>
                )}
              </div>
              <Button size="sm" variant="outline" onClick={() => setViewingInvitation(null)}>
                Close
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Manage User Role Modal */}
      {showRoleModal && selectedUserForRole && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-150">
          <form onSubmit={handleUpdateRole} className="bg-white dark:bg-[#0E1433] rounded-3xl max-w-md w-full p-6 shadow-2xl border border-[#E5E1F0] dark:border-white/10 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-[#171725] dark:text-white">Manage Role for {selectedUserForRole.full_name || selectedUserForRole.email}</h3>
              <button
                type="button"
                onClick={() => setShowRoleModal(false)}
                className="w-7 h-7 rounded-full bg-[#F7F5FC] dark:bg-[#10152E] flex items-center justify-center text-[#171725] dark:text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#172B3A] dark:text-slate-200 mb-1">Select Role</label>
              <select
                value={newRoleValue}
                onChange={(e) => setNewRoleValue(e.target.value)}
                className="w-full px-3 py-2 bg-[#F7F5FC] dark:bg-[#10152E] border border-[#E5E1F0] dark:border-white/10 rounded-xl text-xs text-[#171725] dark:text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:focus:ring-cyan-400"
              >
                <option value="user">User / Student</option>
                <option value="faculty">Faculty</option>
                <option value="college_admin">College Admin</option>
                <option value="super_admin">Super Admin</option>
              </select>
            </div>

            {(newRoleValue === 'faculty' || newRoleValue === 'college_admin') && (
              <div>
                <label className="block text-xs font-semibold text-[#172B3A] dark:text-slate-200 mb-1">Associated College</label>
                <select
                  required
                  value={roleCollegeId}
                  onChange={(e) => setRoleCollegeId(e.target.value)}
                  className="w-full px-3 py-2 bg-[#F7F5FC] dark:bg-[#10152E] border border-[#E5E1F0] dark:border-white/10 rounded-xl text-xs text-[#171725] dark:text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:focus:ring-cyan-400"
                >
                  <option value="">-- Choose College --</option>
                  {colleges.map((c) => (
                    <option key={c.id} value={c.id}>{c.name}</option>
                  ))}
                </select>
              </div>
            )}

            <div className="flex justify-end gap-2 pt-2">
              <Button type="button" variant="outline" size="sm" onClick={() => setShowRoleModal(false)}>
                Cancel
              </Button>
              <Button type="submit" variant="primary" size="sm" isLoading={actionLoading} className="font-bold">
                Update Role
              </Button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
