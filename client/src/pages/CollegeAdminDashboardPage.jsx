import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext.jsx';
import { useTheme } from '../context/ThemeContext.jsx';
import api from '../services/api.js';
import {
  Building2,
  Users,
  GraduationCap,
  Clock,
  BookOpen,
  CheckCircle,
  XCircle,
  TrendingUp,
  Search,
  UserPlus,
  ShieldAlert,
  ArrowRight,
  Settings,
  Trash2,
  AlertCircle,
  X
} from 'lucide-react';
import Button from '../components/ui/Button.jsx';
import DecorativeVideoCard from '../components/dashboard/DecorativeVideoCard.jsx';

export default function CollegeAdminDashboardPage() {
  const { user } = useAuth();
  const { isDark } = useTheme();
  const [activeTab, setActiveTab] = useState('overview');
  const [metrics, setMetrics] = useState(null);
  const [students, setStudents] = useState([]);
  const [faculty, setFaculty] = useState([]);
  const [requests, setRequests] = useState([]);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [notification, setNotification] = useState(null);

  // Modals state
  const [showPromoteModal, setShowPromoteModal] = useState(false);
  const [promoteEmail, setPromoteEmail] = useState('');
  const [showAssignModal, setShowAssignModal] = useState(false);
  const [selectedStudentForAssign, setSelectedStudentForAssign] = useState(null);
  const [selectedFacultyId, setSelectedFacultyId] = useState('');
  const [rejectModalReq, setRejectModalReq] = useState(null);
  const [rejectionReason, setRejectionReason] = useState('');

  const loadData = async () => {
    setLoading(true);
    try {
      const [metricsRes, studentsRes, facultyRes, coursesRes] = await Promise.all([
        api.getCollegeAdminDashboard(),
        api.getCollegeStudents({ search }),
        api.getCollegeFaculty(),
        api.getCollegeCourses()
      ]);

      if (metricsRes.success) {
        setMetrics(metricsRes);
      }
      if (studentsRes.success) setStudents(studentsRes.students || []);
      if (facultyRes.success) setFaculty(facultyRes.faculty || []);
      if (coursesRes.success) setCourses(coursesRes.courses || []);

      // If college ID is present, fetch join requests
      const collegeId = metricsRes.college?.id || user.college_id;
      if (collegeId) {
        const reqRes = await fetch(`/api/colleges/${collegeId}/requests?status=pending`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('supabase_auth_token')}`
          }
        });
        const reqData = await reqRes.json();
        if (reqData.requests) setRequests(reqData.requests);
      }
    } catch (err) {
      console.error('Error loading college admin data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [search]);

  // Handle Review Join Request
  const handleReviewRequest = async (requestId, action, reason = '') => {
    setActionLoading(true);
    setNotification(null);
    try {
      const res = await api.reviewJoinRequest(requestId, action, reason);
      if (res.success) {
        setNotification({
          type: 'success',
          message: `Request successfully ${action === 'approved' ? 'approved! Student added to college.' : 'rejected.'}`
        });
        setRejectModalReq(null);
        setRejectionReason('');
        loadData();
      } else {
        setNotification({ type: 'error', message: res.error || 'Failed to review request.' });
      }
    } catch (err) {
      setNotification({ type: 'error', message: err.message });
    } finally {
      setActionLoading(false);
    }
  };

  // Handle Promote Faculty
  const handlePromoteFaculty = async (e) => {
    e.preventDefault();
    if (!promoteEmail) return;
    setActionLoading(true);
    setNotification(null);
    try {
      const res = await api.promoteFaculty({ email: promoteEmail });
      if (res.success) {
        setNotification({ type: 'success', message: 'User successfully promoted to faculty in your college!' });
        setShowPromoteModal(false);
        setPromoteEmail('');
        loadData();
      } else {
        setNotification({ type: 'error', message: res.error || 'Failed to promote user.' });
      }
    } catch (err) {
      setNotification({ type: 'error', message: err.message });
    } finally {
      setActionLoading(false);
    }
  };

  // Handle Remove Faculty
  const handleRemoveFaculty = async (facultyId) => {
    if (!confirm('Are you sure you want to remove faculty privileges for this user?')) return;
    setActionLoading(true);
    try {
      const res = await api.removeFaculty(facultyId);
      if (res.success) {
        setNotification({ type: 'info', message: 'Faculty privileges removed.' });
        loadData();
      }
    } catch (err) {
      setNotification({ type: 'error', message: err.message });
    } finally {
      setActionLoading(false);
    }
  };

  // Handle Assign Student to Faculty
  const handleAssignStudent = async (e) => {
    e.preventDefault();
    if (!selectedStudentForAssign || !selectedFacultyId) return;
    setActionLoading(true);
    try {
      const res = await api.assignStudentToFaculty({
        studentId: selectedStudentForAssign.id,
        facultyId: selectedFacultyId
      });
      if (res.success) {
        setNotification({ type: 'success', message: 'Student successfully assigned to faculty mentor!' });
        setShowAssignModal(false);
        setSelectedStudentForAssign(null);
        setSelectedFacultyId('');
        loadData();
      } else {
        setNotification({ type: 'error', message: res.error || 'Assignment failed.' });
      }
    } catch (err) {
      setNotification({ type: 'error', message: err.message });
    } finally {
      setActionLoading(false);
    }
  };

  // Handle Course Toggle
  const handleToggleCourse = async (courseId, field, currentValue) => {
    try {
      const payload = { [field]: !currentValue };
      const res = await api.updateCollegeCourse(courseId, payload);
      if (res.success) {
        setCourses(prev => prev.map(c => c.course_id === courseId ? res.course : c));
        setNotification({ type: 'success', message: `Course ${courseId} updated.` });
      }
    } catch (err) {
      setNotification({ type: 'error', message: err.message });
    }
  };

  const collegeName = metrics?.college?.name || user?.college?.name || 'Academic Institution';

  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-12 select-none">
      {/* College Admin Header */}
      <div className={`p-6 sm:p-8 rounded-3xl transition-all duration-300 relative overflow-hidden shadow-xl ${
        isDark
          ? 'bg-gradient-to-r from-[#030617] via-[#070B20] to-[#10152E] border border-cyan-500/30 text-white shadow-[0_0_35px_rgba(6,182,212,0.2)]'
          : 'bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-800 border border-indigo-400/30 text-white shadow-xl'
      }`}>
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold shadow-xs">
              <Building2 className="w-3.5 h-3.5 text-cyan-300" />
              <span>Institutional Administration</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
              {collegeName}
            </h1>
            <p className="text-xs sm:text-sm text-purple-100 dark:text-cyan-100/80 max-w-xl leading-relaxed">
              Manage student admissions, faculty appointments, student-mentor assignments, and college track configurations.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <Button size="sm" variant="primary" onClick={() => setShowPromoteModal(true)} className="font-bold shadow-lg">
                <UserPlus className="w-3.5 h-3.5 mr-1.5" /> Appoint Faculty
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <DecorativeVideoCard
              filename="campus_management.mp4"
              badgeText="Campus Command"
              footerBadge="Institutional Portal"
              footerTag="College Admin"
            />
          </div>
        </div>
      </div>

      {notification && (
        <div className={`p-4 rounded-2xl border flex items-center justify-between ${
          notification.type === 'success'
            ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-500/30 text-emerald-800 dark:text-emerald-300'
            : notification.type === 'info'
            ? 'bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-500/30 text-blue-800 dark:text-blue-300'
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
          Overview
        </button>
        <button
          onClick={() => setActiveTab('requests')}
          className={`pb-3 px-1 border-b-2 transition-colors cursor-pointer flex items-center gap-2 ${
            activeTab === 'requests'
              ? 'border-indigo-600 text-indigo-600 dark:border-cyan-400 dark:text-cyan-300'
              : 'border-transparent hover:text-[#171725] dark:hover:text-white'
          }`}
        >
          Join Requests
          {requests.length > 0 && (
            <span className="px-1.5 py-0.5 rounded-full bg-amber-500 text-white text-[10px]">
              {requests.length}
            </span>
          )}
        </button>
        <button
          onClick={() => setActiveTab('students')}
          className={`pb-3 px-1 border-b-2 transition-colors cursor-pointer ${
            activeTab === 'students'
              ? 'border-indigo-600 text-indigo-600 dark:border-cyan-400 dark:text-cyan-300'
              : 'border-transparent hover:text-[#171725] dark:hover:text-white'
          }`}
        >
          Student Roster ({students.length})
        </button>
        <button
          onClick={() => setActiveTab('faculty')}
          className={`pb-3 px-1 border-b-2 transition-colors cursor-pointer ${
            activeTab === 'faculty'
              ? 'border-indigo-600 text-indigo-600 dark:border-cyan-400 dark:text-cyan-300'
              : 'border-transparent hover:text-[#171725] dark:hover:text-white'
          }`}
        >
          Faculty Directory ({faculty.length})
        </button>
        <button
          onClick={() => setActiveTab('courses')}
          className={`pb-3 px-1 border-b-2 transition-colors cursor-pointer ${
            activeTab === 'courses'
              ? 'border-indigo-600 text-indigo-600 dark:border-cyan-400 dark:text-cyan-300'
              : 'border-transparent hover:text-[#171725] dark:hover:text-white'
          }`}
        >
          Curriculum Tracks ({courses.length})
        </button>
      </div>

      {/* Tab: Overview */}
      {activeTab === 'overview' && (
        <div className="space-y-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="p-5 rounded-2xl bg-white dark:bg-[#10152E] border border-[#E5E1F0] dark:border-white/10 shadow-xs space-y-1">
              <div className="text-[10px] text-[#64748B] dark:text-slate-400 font-bold uppercase">Enrolled Students</div>
              <div className="text-2xl font-black text-[#171725] dark:text-white">{metrics?.total_students || 0}</div>
              <div className="text-[11px] text-[#64748B] dark:text-slate-400">Active members</div>
            </div>
            <div className="p-5 rounded-2xl bg-white dark:bg-[#10152E] border border-[#E5E1F0] dark:border-white/10 shadow-xs space-y-1">
              <div className="text-[10px] text-[#64748B] dark:text-slate-400 font-bold uppercase">Faculty Members</div>
              <div className="text-2xl font-black text-[#171725] dark:text-white">{metrics?.total_faculty || 0}</div>
              <div className="text-[11px] text-[#64748B] dark:text-slate-400">Appointed staff</div>
            </div>
            <div className="p-5 rounded-2xl bg-white dark:bg-[#10152E] border border-[#E5E1F0] dark:border-white/10 shadow-xs space-y-1">
              <div className="text-[10px] text-[#64748B] dark:text-slate-400 font-bold uppercase">Pending Requests</div>
              <div className="text-2xl font-black text-amber-500">{requests.length}</div>
              <div className="text-[11px] text-[#64748B] dark:text-slate-400">Awaiting decision</div>
            </div>
            <div className="p-5 rounded-2xl bg-white dark:bg-[#10152E] border border-[#E5E1F0] dark:border-white/10 shadow-xs space-y-1">
              <div className="text-[10px] text-[#64748B] dark:text-slate-400 font-bold uppercase">Course Enrollments</div>
              <div className="text-2xl font-black text-[#171725] dark:text-white">{metrics?.active_enrollments_count || 0}</div>
              <div className="text-[11px] text-[#64748B] dark:text-slate-400">Enrolled tracks</div>
            </div>
            <div className="p-5 rounded-2xl bg-white dark:bg-[#10152E] border border-[#E5E1F0] dark:border-white/10 shadow-xs space-y-1">
              <div className="text-[10px] text-[#64748B] dark:text-slate-400 font-bold uppercase">Avg Cohort Progress</div>
              <div className="text-2xl font-black text-indigo-600 dark:text-cyan-400">{metrics?.average_progress || 0}%</div>
              <div className="text-[11px] text-[#64748B] dark:text-slate-400">All tracks</div>
            </div>
            <div className="p-5 rounded-2xl bg-white dark:bg-[#10152E] border border-[#E5E1F0] dark:border-white/10 shadow-xs space-y-1">
              <div className="text-[10px] text-[#64748B] dark:text-slate-400 font-bold uppercase">Completed Tracks</div>
              <div className="text-2xl font-black text-emerald-500">{metrics?.completed_enrollments_count || 0}</div>
              <div className="text-[11px] text-[#64748B] dark:text-slate-400">Graduated courses</div>
            </div>
          </div>

          {/* Quick Action Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-[#10152E] border border-[#E5E1F0] dark:border-white/10 shadow-xs space-y-4">
              <h3 className="font-bold text-[#171725] dark:text-white text-sm">Admissions Action Required</h3>
              <p className="text-xs text-[#64748B] dark:text-slate-400">
                You have {requests.length} pending admission join request(s) awaiting administrative review.
              </p>
              <Button size="sm" variant="outline" onClick={() => setActiveTab('requests')} className="font-bold">
                Review Join Requests ({requests.length})
              </Button>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#10152E] border border-[#E5E1F0] dark:border-white/10 shadow-xs space-y-4">
              <h3 className="font-bold text-[#171725] dark:text-white text-sm">Faculty Assignment Distribution</h3>
              <p className="text-xs text-[#64748B] dark:text-slate-400">
                Ensure all enrolled students are paired with a faculty mentor to support their curriculum progress.
              </p>
              <Button size="sm" variant="outline" onClick={() => setActiveTab('students')} className="font-bold">
                Manage Student Assignments
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Tab: Join Requests */}
      {activeTab === 'requests' && (
        <div className="bg-white dark:bg-[#0E1433] rounded-3xl border border-[#E5E1F0] dark:border-white/10 p-6 space-y-4 shadow-xs">
          <div>
            <h2 className="text-base font-bold text-[#171725] dark:text-white">Student Join Admissions</h2>
            <p className="text-xs text-[#64748B] dark:text-slate-400">Approve or reject student membership requests for {collegeName}.</p>
          </div>

          {requests.length === 0 ? (
            <div className="py-12 text-center text-[#64748B] dark:text-slate-400 text-xs">
              No pending join requests at this time. All admissions processed.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#F7F5FC] dark:bg-[#10152E] border-y border-[#E5E1F0] dark:border-white/10 text-[#64748B] dark:text-slate-400 font-semibold uppercase text-[10px]">
                  <tr>
                    <th className="py-3 px-4">Applicant</th>
                    <th className="py-3 px-4">Requested On</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E1F0] dark:divide-white/10">
                  {requests.map((req) => (
                    <tr key={req.id} className="hover:bg-[#F7F5FC]/80 dark:hover:bg-white/5 transition-colors">
                      <td className="py-3 px-4">
                        <div className="font-bold text-[#171725] dark:text-white">{req.student?.full_name || 'Student'}</div>
                        <div className="text-[11px] text-[#64748B] dark:text-slate-400">{req.student?.email}</div>
                      </td>
                      <td className="py-3 px-4 text-[#64748B] dark:text-slate-400">
                        {new Date(req.requested_at).toLocaleDateString()}
                      </td>
                      <td className="py-3 px-4 text-right space-x-2">
                        <Button
                          size="sm"
                          variant="primary"
                          isLoading={actionLoading}
                          onClick={() => handleReviewRequest(req.id, 'approved')}
                          className="text-[11px] py-1 px-3 font-bold"
                        >
                          Approve
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          isLoading={actionLoading}
                          onClick={() => setRejectModalReq(req)}
                          className="border-rose-300 text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/20 text-[11px] py-1 px-3 font-bold"
                        >
                          Reject
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* Tab: Students */}
      {activeTab === 'students' && (
        <div className="bg-white dark:bg-[#0E1433] rounded-3xl border border-[#E5E1F0] dark:border-white/10 p-6 space-y-4 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-base font-bold text-[#171725] dark:text-white">Enrolled College Students</h2>
              <p className="text-xs text-[#64748B] dark:text-slate-400">Students with approved membership in {collegeName}.</p>
            </div>
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-[#64748B] dark:text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search students..."
                className="w-full pl-9 pr-3 py-1.5 bg-[#F7F5FC] dark:bg-[#10152E] border border-[#E5E1F0] dark:border-white/10 rounded-xl text-xs text-[#171725] dark:text-white placeholder-[#64748B] dark:placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:focus:ring-cyan-400"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#F7F5FC] dark:bg-[#10152E] border-y border-[#E5E1F0] dark:border-white/10 text-[#64748B] dark:text-slate-400 font-semibold uppercase text-[10px]">
                <tr>
                  <th className="py-3 px-4">Student</th>
                  <th className="py-3 px-4">Assigned Faculty</th>
                  <th className="py-3 px-4">Average Progress</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E1F0] dark:divide-white/10">
                {students.map((st) => (
                  <tr key={st.id} className="hover:bg-[#F7F5FC]/80 dark:hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4">
                      <div className="font-bold text-[#171725] dark:text-white">{st.full_name}</div>
                      <div className="text-[11px] text-[#64748B] dark:text-slate-400">{st.email}</div>
                    </td>
                    <td className="py-3 px-4">
                      {st.assigned_faculty ? (
                        <span className="font-semibold text-indigo-700 dark:text-cyan-300 bg-purple-50 dark:bg-cyan-950/40 border border-purple-200 dark:border-cyan-500/30 px-2 py-0.5 rounded-md">
                          {st.assigned_faculty.name}
                        </span>
                      ) : (
                        <span className="text-amber-600 dark:text-amber-400 text-[11px] font-medium">Unassigned</span>
                      )}
                    </td>
                    <td className="py-3 px-4">
                      <div className="w-28 space-y-1">
                        <div className="text-[10px] font-bold text-[#171725] dark:text-white">{st.average_progress}%</div>
                        <div className="w-full bg-[#EAE5F6] dark:bg-black/40 h-1.5 rounded-full overflow-hidden border border-[#E5E1F0] dark:border-white/10">
                          <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${st.average_progress}%` }} />
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-right space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => {
                          setSelectedStudentForAssign(st);
                          setShowAssignModal(true);
                        }}
                        className="text-[11px] py-1 px-2.5 font-bold"
                      >
                        {st.assigned_faculty ? 'Reassign' : 'Assign Faculty'}
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab: Faculty */}
      {activeTab === 'faculty' && (
        <div className="bg-white dark:bg-[#0E1433] rounded-3xl border border-[#E5E1F0] dark:border-white/10 p-6 space-y-4 shadow-xs">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-[#171725] dark:text-white">Appointed Faculty</h2>
              <p className="text-xs text-[#64748B] dark:text-slate-400">Instructors assigned to teach and mentor students in {collegeName}.</p>
            </div>
            <Button size="sm" variant="primary" onClick={() => setShowPromoteModal(true)} className="font-bold">
              <UserPlus className="w-3.5 h-3.5 mr-1" /> Add Faculty
            </Button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#F7F5FC] dark:bg-[#10152E] border-y border-[#E5E1F0] dark:border-white/10 text-[#64748B] dark:text-slate-400 font-semibold uppercase text-[10px]">
                <tr>
                  <th className="py-3 px-4">Faculty Member</th>
                  <th className="py-3 px-4">Assigned Students</th>
                  <th className="py-3 px-4">Appointed On</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E1F0] dark:divide-white/10">
                {faculty.map((f) => (
                  <tr key={f.id} className="hover:bg-[#F7F5FC]/80 dark:hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4">
                      <div className="font-bold text-[#171725] dark:text-white">{f.full_name}</div>
                      <div className="text-[11px] text-[#64748B] dark:text-slate-400">{f.email}</div>
                    </td>
                    <td className="py-3 px-4">
                      <span className="font-bold text-[#171725] dark:text-white">{f.assigned_student_count || 0} students</span>
                    </td>
                    <td className="py-3 px-4 text-[#64748B] dark:text-slate-400">
                      {new Date(f.role_assigned_at).toLocaleDateString()}
                    </td>
                    <td className="py-3 px-4 text-right">
                      <button
                        onClick={() => handleRemoveFaculty(f.id)}
                        className="text-rose-600 dark:text-rose-400 hover:text-rose-800 font-semibold text-[11px] cursor-pointer"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab: Courses */}
      {activeTab === 'courses' && (
        <div className="bg-white dark:bg-[#0E1433] rounded-3xl border border-[#E5E1F0] dark:border-white/10 p-6 space-y-4 shadow-xs">
          <div>
            <h2 className="text-base font-bold text-[#171725] dark:text-white">College Curriculum Configuration</h2>
            <p className="text-xs text-[#64748B] dark:text-slate-400">Configure track availability and mandatory enrollments for {collegeName}.</p>
          </div>

          <div className="divide-y divide-[#E5E1F0] dark:divide-white/10">
            {courses.map((c) => (
              <div key={c.id} className="py-4 flex items-center justify-between gap-4 text-xs">
                <div>
                  <span className="font-bold text-[#171725] dark:text-white uppercase text-sm">{c.course_id}</span>
                  <div className="text-[#64748B] dark:text-slate-400 text-[11px] mt-0.5">
                    {c.is_active ? 'Available for college enrollment' : 'Disabled for this college'}
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2 cursor-pointer text-xs text-[#171725] dark:text-slate-200">
                    <input
                      type="checkbox"
                      checked={c.is_active}
                      onChange={() => handleToggleCourse(c.course_id, 'is_active', c.is_active)}
                      className="rounded text-indigo-600 dark:text-cyan-400 focus:ring-indigo-500 dark:focus:ring-cyan-400"
                    />
                    <span>Enabled</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer text-xs text-[#171725] dark:text-slate-200">
                    <input
                      type="checkbox"
                      checked={c.is_mandatory}
                      onChange={() => handleToggleCourse(c.course_id, 'is_mandatory', c.is_mandatory)}
                      className="rounded text-indigo-600 dark:text-cyan-400 focus:ring-indigo-500 dark:focus:ring-cyan-400"
                    />
                    <span>Mandatory</span>
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Promote Faculty Modal */}
      {showPromoteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-150">
          <form onSubmit={handlePromoteFaculty} className="bg-white dark:bg-[#0E1433] rounded-3xl max-w-md w-full p-6 shadow-2xl border border-[#E5E1F0] dark:border-white/10 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-[#171725] dark:text-white">Appoint User as Faculty</h3>
              <button
                type="button"
                onClick={() => setShowPromoteModal(false)}
                className="w-7 h-7 rounded-full bg-[#F7F5FC] dark:bg-[#10152E] flex items-center justify-center text-[#171725] dark:text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-[#64748B] dark:text-slate-400">
              Enter the registered email of an existing platform account. The user will be associated with {collegeName} as faculty.
            </p>
            <div>
              <label className="block text-xs font-semibold text-[#171725] dark:text-slate-200 mb-1">Registered User Email</label>
              <input
                type="email"
                required
                value={promoteEmail}
                onChange={(e) => setPromoteEmail(e.target.value)}
                placeholder="faculty.member@domain.edu"
                className="w-full px-3 py-2 bg-[#F7F5FC] dark:bg-[#10152E] border border-[#E5E1F0] dark:border-white/10 rounded-xl text-xs text-[#171725] dark:text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:focus:ring-cyan-400"
              />
            </div>
            <div className="flex justify-end gap-2 pt-2">
              <Button type="button" variant="outline" size="sm" onClick={() => setShowPromoteModal(false)}>
                Cancel
              </Button>
              <Button type="submit" variant="primary" size="sm" isLoading={actionLoading} className="font-bold">
                Grant Faculty Role
              </Button>
            </div>
          </form>
        </div>
      )}

      {/* Assign Student to Faculty Modal */}
      {showAssignModal && selectedStudentForAssign && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-150">
          <form onSubmit={handleAssignStudent} className="bg-white dark:bg-[#0E1433] rounded-3xl max-w-md w-full p-6 shadow-2xl border border-[#E5E1F0] dark:border-white/10 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-[#171725] dark:text-white">Assign Student to Faculty Mentor</h3>
              <button
                type="button"
                onClick={() => setShowAssignModal(false)}
                className="w-7 h-7 rounded-full bg-[#F7F5FC] dark:bg-[#10152E] flex items-center justify-center text-[#171725] dark:text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-[#64748B] dark:text-slate-400">
              Assign <span className="font-bold text-[#171725] dark:text-white">{selectedStudentForAssign.full_name}</span> to a faculty mentor in {collegeName}.
            </p>
            <div>
              <label className="block text-xs font-semibold text-[#171725] dark:text-slate-200 mb-1">Select Faculty Mentor</label>
              <select
                required
                value={selectedFacultyId}
                onChange={(e) => setSelectedFacultyId(e.target.value)}
                className="w-full px-3 py-2 bg-[#F7F5FC] dark:bg-[#10152E] border border-[#E5E1F0] dark:border-white/10 rounded-xl text-xs text-[#171725] dark:text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:focus:ring-cyan-400"
              >
                <option value="">-- Choose Faculty --</option>
                {faculty.map((f) => (
                  <option key={f.id} value={f.id}>
                    {f.full_name} ({f.assigned_student_count || 0} students currently assigned)
                  </option>
                ))}
              </select>
            </div>
            <div className="flex justify-end gap-2 pt-2">
              <Button type="button" variant="outline" size="sm" onClick={() => setShowAssignModal(false)}>
                Cancel
              </Button>
              <Button type="submit" variant="primary" size="sm" isLoading={actionLoading} disabled={!selectedFacultyId} className="font-bold">
                Confirm Assignment
              </Button>
            </div>
          </form>
        </div>
      )}

      {/* Reject Request Modal */}
      {rejectModalReq && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-white dark:bg-[#0E1433] rounded-3xl max-w-md w-full p-6 shadow-2xl border border-[#E5E1F0] dark:border-white/10 space-y-4">
            <h3 className="text-base font-bold text-rose-600 dark:text-rose-400">Reject Membership Request</h3>
            <p className="text-xs text-[#64748B] dark:text-slate-400">
              Rejecting will preserve the student's independent learner account. You may provide an optional reason below.
            </p>
            <div>
              <label className="block text-xs font-semibold text-[#171725] dark:text-slate-200 mb-1">Reason for Rejection (Optional)</label>
              <textarea
                value={rejectionReason}
                onChange={(e) => setRejectionReason(e.target.value)}
                placeholder="E.g. Ineligible enrollment verification or capacity limit reached."
                className="w-full px-3 py-2 bg-[#F7F5FC] dark:bg-[#10152E] border border-[#E5E1F0] dark:border-white/10 rounded-xl text-xs text-[#171725] dark:text-white h-20 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:focus:ring-cyan-400"
              />
            </div>
            <div className="flex justify-end gap-2 pt-2">
              <Button type="button" variant="outline" size="sm" onClick={() => setRejectModalReq(null)}>
                Cancel
              </Button>
              <Button
                type="button"
                variant="primary"
                size="sm"
                isLoading={actionLoading}
                onClick={() => handleReviewRequest(rejectModalReq.id, 'rejected', rejectionReason)}
                className="bg-rose-600 hover:bg-rose-700 font-bold"
              >
                Confirm Rejection
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
