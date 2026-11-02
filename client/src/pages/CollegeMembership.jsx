import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext.jsx';
import api from '../services/api.js';
import {
  Building2,
  Search,
  CheckCircle,
  Clock,
  XCircle,
  AlertCircle,
  Send,
  Users,
  BookOpen,
  GraduationCap,
  ExternalLink,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import Button from '../components/ui/Button.jsx';

export default function CollegeMembership() {
  const { user, refreshProfile } = useAuth();
  const [colleges, setColleges] = useState([]);
  const [search, setSearch] = useState('');
  const [myRequests, setMyRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);
  const [selectedCollege, setSelectedCollege] = useState(null);
  const [notification, setNotification] = useState(null);

  const loadData = async () => {
    setLoading(true);
    try {
      const [colRes, reqRes] = await Promise.all([
        api.getColleges({ search }),
        user && !user.isGuest ? api.getMyJoinRequests() : Promise.resolve({ requests: [] })
      ]);
      if (colRes.success) setColleges(colRes.colleges || []);
      if (reqRes.success) setMyRequests(reqRes.requests || []);
    } catch (err) {
      console.error('Error loading colleges:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [search]);

  const handleJoin = async (collegeId) => {
    setActionLoading(true);
    setNotification(null);
    try {
      const res = await api.submitJoinRequest(collegeId);
      if (res.success) {
        setNotification({ type: 'success', message: 'Membership request submitted successfully! Awaiting college admin review.' });
        loadData();
        refreshProfile();
      } else {
        setNotification({ type: 'error', message: res.error || 'Failed to submit request.' });
      }
    } catch (err) {
      setNotification({ type: 'error', message: err.message });
    } finally {
      setActionLoading(false);
    }
  };

  const handleWithdraw = async (requestId) => {
    setActionLoading(true);
    setNotification(null);
    try {
      const res = await api.withdrawJoinRequest(requestId);
      if (res.success) {
        setNotification({ type: 'info', message: 'Join request withdrawn.' });
        loadData();
        refreshProfile();
      } else {
        setNotification({ type: 'error', message: res.error || 'Failed to withdraw request.' });
      }
    } catch (err) {
      setNotification({ type: 'error', message: err.message });
    } finally {
      setActionLoading(false);
    }
  };

  // Find active membership if user belongs to a college
  const activeCollege = user?.college || (user?.college_id ? colleges.find(c => c.id === user.college_id) : null);
  const pendingRequest = myRequests.find(r => r.status === 'pending');

  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#DCE8E8] pb-6">
        <div>
          <div className="flex items-center gap-2 text-[#0F766E] font-semibold text-xs tracking-wider uppercase mb-1">
            <Building2 className="w-4 h-4" /> Academic Affiliation
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#172B3A] tracking-tight">
            College Directory & Membership
          </h1>
          <p className="text-sm text-[#64748B] mt-1">
            Connect your account with your institution to unlock college-curated tracks and assigned faculty mentorship.
          </p>
        </div>
      </div>

      {notification && (
        <div className={`p-4 rounded-xl border flex items-center justify-between ${
          notification.type === 'success'
            ? 'bg-[#ECFDF5] border-[#A7F3D0] text-[#0F766E]'
            : notification.type === 'info'
            ? 'bg-blue-50 border-blue-200 text-blue-800'
            : 'bg-rose-50 border-rose-200 text-[#EF4444]'
        }`}>
          <div className="flex items-center gap-2 text-sm font-medium">
            {notification.type === 'success' ? <CheckCircle className="w-5 h-5 text-[#10B981]" /> : <AlertCircle className="w-5 h-5" />}
            {notification.message}
          </div>
          <button onClick={() => setNotification(null)} className="text-xs font-semibold hover:underline cursor-pointer">Dismiss</button>
        </div>
      )}

      {/* Active Membership Status Banner */}
      {activeCollege ? (
        <div className="p-6 rounded-3xl bg-gradient-to-r from-[#043639] via-[#064E52] to-[#0F766E] text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#10B981]/20 border border-[#34D399]/40 text-[#34D399] text-xs font-semibold">
                <CheckCircle className="w-3.5 h-3.5" /> Approved College Member
              </div>
              <h2 className="text-2xl font-bold">{activeCollege.name}</h2>
              <p className="text-xs text-[#A7F3D0] max-w-2xl">{activeCollege.description || 'Full student institutional privileges enabled.'}</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs px-3 py-1.5 rounded-lg bg-white/10 text-white font-medium border border-white/20">
                1 Active Affiliation
              </span>
            </div>
          </div>
        </div>
      ) : pendingRequest ? (
        <div className="p-5 rounded-2xl bg-[#FFFBEB] border border-[#FDE68A] text-[#92400E] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-[#B45309]">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-sm">Membership Request Pending Review</h3>
              <p className="text-xs text-[#B45309]">
                You submitted a join request for <span className="font-bold">{pendingRequest.college?.name || 'your college'}</span> on{' '}
                {new Date(pendingRequest.requested_at).toLocaleDateString()}.
              </p>
            </div>
          </div>
          <Button
            size="sm"
            variant="outline"
            isLoading={actionLoading}
            onClick={() => handleWithdraw(pendingRequest.id)}
            className="border-amber-300 text-[#92400E] hover:bg-amber-100"
          >
            Cancel / Withdraw Request
          </Button>
        </div>
      ) : null}

      {/* College Search Bar */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative w-full sm:max-w-md">
          <Search className="w-4 h-4 text-[#64748B] dark:text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search colleges by name or location..."
            className="w-full pl-10 pr-4 py-2 bg-[#F5FAFA] dark:bg-[#10152E] border border-[#DCE8E8] dark:border-white/10 rounded-xl text-sm text-[#172B3A] dark:text-white focus:outline-none focus:ring-1 focus:ring-[#0F766E] dark:focus:ring-cyan-400"
          />
        </div>
        <div className="text-xs text-[#64748B] dark:text-slate-400">
          Showing {colleges.length} institutional partners
        </div>
      </div>

      {/* College Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {colleges.map((col) => {
          const isMember = activeCollege?.id === col.id;
          const isPending = pendingRequest?.college_id === col.id;

          return (
            <div
              key={col.id}
              className="bg-white dark:bg-[#10152E] rounded-2xl border border-[#DCE8E8] dark:border-white/10 p-6 flex flex-col justify-between hover:shadow-md transition-all duration-200 hover:border-[#0F766E]/40 dark:hover:border-cyan-500/40"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#ECFDF5] dark:bg-emerald-950/40 border border-[#A7F3D0] dark:border-emerald-500/30 flex items-center justify-center text-[#0F766E] dark:text-emerald-400 font-bold">
                    <Building2 className="w-6 h-6" />
                  </div>
                  {isMember ? (
                    <span className="px-2.5 py-1 rounded-full bg-[#ECFDF5] dark:bg-emerald-950/50 text-[#0F766E] dark:text-emerald-400 border border-[#A7F3D0] dark:border-emerald-500/40 text-[11px] font-bold flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 text-[#10B981]" /> Enrolled
                    </span>
                  ) : isPending ? (
                    <span className="px-2.5 py-1 rounded-full bg-[#FFFBEB] dark:bg-amber-950/50 text-[#B45309] dark:text-amber-300 border border-[#FDE68A] dark:border-amber-500/40 text-[11px] font-bold flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#F59E0B]" /> Requested
                    </span>
                  ) : (
                    <span className="px-2.5 py-1 rounded-full bg-[#F5FAFA] dark:bg-white/5 text-[#64748B] dark:text-slate-400 border border-[#DCE8E8] dark:border-white/10 text-[11px] font-medium">
                      Partner College
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="font-bold text-[#172B3A] dark:text-white text-base line-clamp-1">{col.name}</h3>
                  <p className="text-xs text-[#64748B] dark:text-slate-400 mt-1 line-clamp-2">{col.description || 'Verified institutional educational campus.'}</p>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#DCE8E8] dark:border-white/10 text-center">
                  <div className="p-2 rounded-lg bg-[#F5FAFA] dark:bg-[#070B20] border border-[#DCE8E8] dark:border-white/10">
                    <div className="text-xs font-bold text-[#172B3A] dark:text-white">{col.student_count || 0}</div>
                    <div className="text-[10px] text-[#64748B] dark:text-slate-400">Students</div>
                  </div>
                  <div className="p-2 rounded-lg bg-[#F5FAFA] dark:bg-[#070B20] border border-[#DCE8E8] dark:border-white/10">
                    <div className="text-xs font-bold text-[#172B3A] dark:text-white">{col.faculty_count || 0}</div>
                    <div className="text-[10px] text-[#64748B] dark:text-slate-400">Faculty</div>
                  </div>
                  <div className="p-2 rounded-lg bg-[#F5FAFA] dark:bg-[#070B20] border border-[#DCE8E8] dark:border-white/10">
                    <div className="text-xs font-bold text-[#172B3A] dark:text-white">{col.active_courses_count || 5}</div>
                    <div className="text-[10px] text-[#64748B] dark:text-slate-400">Tracks</div>
                  </div>
                </div>
              </div>

              <div className="pt-5 mt-4 border-t border-[#DCE8E8] dark:border-white/10 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedCollege(col)}
                  className="text-xs font-semibold text-[#0F766E] dark:text-cyan-400 hover:text-[#064E52] dark:hover:text-cyan-300 flex items-center gap-1 cursor-pointer"
                >
                  View Details <ChevronRight className="w-3.5 h-3.5" />
                </button>

                {isMember ? (
                  <span className="text-xs font-semibold text-[#10B981] flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4" /> Active Member
                  </span>
                ) : isPending ? (
                  <Button
                    size="sm"
                    variant="outline"
                    isLoading={actionLoading}
                    onClick={() => handleWithdraw(pendingRequest.id)}
                    className="text-xs border-amber-300 text-[#B45309]"
                  >
                    Withdraw
                  </Button>
                ) : (
                  <Button
                    size="sm"
                    variant="primary"
                    isLoading={actionLoading}
                    disabled={Boolean(activeCollege) || Boolean(pendingRequest)}
                    onClick={() => handleJoin(col.id)}
                    className="text-xs"
                  >
                    Request to Join
                  </Button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* College Detail Modal */}
      {selectedCollege && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#041F20]/60 backdrop-blur-sm">
          <div className="bg-white dark:bg-[#10152E] rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-[#DCE8E8] dark:border-white/10 space-y-6">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#ECFDF5] dark:bg-emerald-950/40 border border-[#A7F3D0] dark:border-emerald-500/30 flex items-center justify-center text-[#0F766E] dark:text-emerald-400">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-extrabold text-[#172B3A] dark:text-white text-lg">{selectedCollege.name}</h3>
                  <p className="text-xs text-[#64748B] dark:text-slate-400">{selectedCollege.address || 'Academic District'}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedCollege(null)}
                className="w-8 h-8 rounded-full bg-[#F5FAFA] dark:bg-white/10 hover:bg-[#ECFDF5] dark:hover:bg-white/20 border border-[#DCE8E8] dark:border-white/10 flex items-center justify-center text-[#172B3A] dark:text-white cursor-pointer"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-[#64748B] dark:text-slate-300 leading-relaxed">
              {selectedCollege.description || 'Premier engineering curriculum offering direct mentorship and custom evaluation test suites.'}
            </p>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between py-1.5 border-b border-[#DCE8E8] dark:border-white/10">
                <span className="text-[#64748B] dark:text-slate-400">Contact Email</span>
                <span className="font-semibold text-[#172B3A] dark:text-white">{selectedCollege.contact_email || 'admin@' + selectedCollege.slug + '.edu'}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-[#DCE8E8] dark:border-white/10">
                <span className="text-[#64748B] dark:text-slate-400">Official Website</span>
                <span className="font-semibold text-[#0F766E] dark:text-cyan-400">{selectedCollege.website || 'https://' + selectedCollege.slug + '.edu'}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-[#DCE8E8] dark:border-white/10">
                <span className="text-[#64748B] dark:text-slate-400">Campus Administrator</span>
                <span className="font-semibold text-[#172B3A] dark:text-white">{selectedCollege.admin?.name || 'College Administrator'}</span>
              </div>
            </div>

            <div className="pt-2 flex justify-end gap-3">
              <Button variant="outline" size="sm" onClick={() => setSelectedCollege(null)}>
                Close
              </Button>
              {!activeCollege && !pendingRequest && (
                <Button
                  variant="primary"
                  size="sm"
                  isLoading={actionLoading}
                  onClick={() => {
                    handleJoin(selectedCollege.id);
                    setSelectedCollege(null);
                  }}
                >
                  Confirm Request to Join
                </Button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* History of Past Requests */}
      {myRequests.length > 0 && (
        <div className="bg-white dark:bg-[#10152E] rounded-2xl border border-[#DCE8E8] dark:border-white/10 p-6 space-y-4 shadow-xs">
          <h3 className="text-sm font-bold text-[#172B3A] dark:text-white">Your Request History</h3>
          <div className="divide-y divide-[#DCE8E8] dark:divide-white/10">
            {myRequests.map((req) => (
              <div key={req.id} className="py-3 flex items-center justify-between gap-4 text-xs">
                <div>
                  <span className="font-semibold text-[#172B3A] dark:text-white">{req.college?.name || 'College'}</span>
                  <div className="text-[#64748B] dark:text-slate-400 text-[11px] mt-0.5">
                    Requested on {new Date(req.requested_at).toLocaleDateString()}
                    {req.rejection_reason && <span className="text-[#EF4444] ml-2">Reason: {req.rejection_reason}</span>}
                  </div>
                </div>
                <div>
                  {req.status === 'approved' && <span className="px-2.5 py-0.5 rounded-full bg-[#ECFDF5] dark:bg-emerald-950/50 text-[#0F766E] dark:text-emerald-400 border border-[#A7F3D0] dark:border-emerald-500/40 font-bold">Approved</span>}
                  {req.status === 'pending' && <span className="px-2.5 py-0.5 rounded-full bg-[#FFFBEB] dark:bg-amber-950/50 text-[#B45309] dark:text-amber-300 border border-[#FDE68A] dark:border-amber-500/40 font-bold">Pending</span>}
                  {req.status === 'rejected' && <span className="px-2.5 py-0.5 rounded-full bg-rose-50 dark:bg-rose-950/50 text-[#EF4444] dark:text-rose-400 border border-rose-200 dark:border-rose-500/40 font-bold">Rejected</span>}
                  {req.status === 'withdrawn' && <span className="px-2.5 py-0.5 rounded-full bg-[#F5FAFA] dark:bg-white/5 text-[#64748B] dark:text-slate-400 border border-[#DCE8E8] dark:border-white/10 font-medium">Withdrawn</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
