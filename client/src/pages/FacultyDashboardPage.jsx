import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import { useTheme } from '../context/ThemeContext.jsx';
import api from '../services/api.js';
import {
  Users,
  GraduationCap,
  AlertTriangle,
  BookOpen,
  TrendingUp,
  MessageSquare,
  Search,
  ChevronRight,
  Code2,
  Sparkles,
  CheckCircle,
  Clock,
  X
} from 'lucide-react';
import Button from '../components/ui/Button.jsx';
import DecorativeVideoCard from '../components/dashboard/DecorativeVideoCard.jsx';

export default function FacultyDashboardPage({ onNavigateToPlayground, onNavigateToMentor, onNavigateToMessages }) {
  const { user } = useAuth();
  const { isDark } = useTheme();
  const navigate = useNavigate();

  const navPlayground = onNavigateToPlayground || (() => navigate('/faculty/playground'));
  const navMentor = onNavigateToMentor || (() => navigate('/faculty/ai-mentor'));
  const navMessages = onNavigateToMessages || (() => navigate('/faculty/messages'));

  const [metrics, setMetrics] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [studentDetails, setStudentDetails] = useState(null);
  const [detailsLoading, setDetailsLoading] = useState(false);

  const loadData = async () => {
    setLoading(true);
    try {
      const res = await api.getFacultyDashboard();
      if (res.success) {
        setMetrics(res);
      }
    } catch (err) {
      console.error('Error loading faculty dashboard:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleInspectStudent = async (student) => {
    setSelectedStudent(student);
    setDetailsLoading(true);
    try {
      const res = await api.getFacultyStudentDetails(student.id);
      if (res.success) {
        setStudentDetails(res);
      }
    } catch (err) {
      console.error('Error loading student details:', err);
    } finally {
      setDetailsLoading(false);
    }
  };

  const assignedStudents = metrics?.assigned_students || [];
  const filteredStudents = assignedStudents.filter(s =>
    s.full_name?.toLowerCase().includes(search.toLowerCase()) ||
    s.email?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-12 select-none">
      {/* Faculty Hero Banner */}
      <div className={`p-6 sm:p-8 rounded-3xl transition-all duration-300 relative overflow-hidden shadow-xl ${
        isDark
          ? 'bg-gradient-to-r from-[#030617] via-[#070B20] to-[#10152E] border border-cyan-500/30 text-white shadow-[0_0_35px_rgba(6,182,212,0.2)]'
          : 'bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-800 border border-indigo-400/30 text-white shadow-xl'
      }`}>
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold shadow-xs">
              <GraduationCap className="w-3.5 h-3.5 text-cyan-300" />
              <span>Faculty Academic Portal</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
              Welcome, Prof. {user?.fullName || user?.full_name || 'Educator'}
            </h1>
            <p className="text-xs sm:text-sm text-purple-100 dark:text-cyan-100/80 max-w-xl leading-relaxed">
              Track real-time learning telemetry, monitor assigned students, and guide learners through structured programming mastery.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <Button
                size="sm"
                variant="outline"
                onClick={navPlayground}
                className="text-white border-white/30 hover:bg-white/10 font-bold"
              >
                <Code2 className="w-3.5 h-3.5 mr-1.5" /> Playground
              </Button>
              <Button
                size="sm"
                variant="primary"
                onClick={navMentor}
                className="font-bold shadow-lg"
              >
                <Sparkles className="w-3.5 h-3.5 mr-1.5" /> AI Mentor
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <DecorativeVideoCard
              filename="faculty_academic.mp4"
              badgeText="Telemetry Engine"
              footerBadge="Institutional Analytics"
              footerTag="Faculty Mode"
            />
          </div>
        </div>
      </div>

      {/* KPI Metrics Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {/* Card 1: Students */}
        <div className="p-5 rounded-2xl bg-white dark:bg-[#10152E] border border-[#E5E1F0] dark:border-white/10 shadow-xs space-y-1 transition-all">
          <div className="flex items-center justify-between text-[#64748B] dark:text-slate-400">
            <Users className="w-4 h-4 text-indigo-600 dark:text-cyan-400" />
            <span className="text-[10px] uppercase font-bold tracking-wider">Students</span>
          </div>
          <div className="text-2xl font-black text-[#171725] dark:text-white">{metrics?.total_assigned_students || 0}</div>
          <div className="text-[11px] text-[#64748B] dark:text-slate-400 font-medium">Assigned to you</div>
        </div>

        {/* Card 2: Active */}
        <div className="p-5 rounded-2xl bg-white dark:bg-[#10152E] border border-[#E5E1F0] dark:border-white/10 shadow-xs space-y-1 transition-all">
          <div className="flex items-center justify-between text-[#64748B] dark:text-slate-400">
            <TrendingUp className="w-4 h-4 text-emerald-500" />
            <span className="text-[10px] uppercase font-bold tracking-wider">Active</span>
          </div>
          <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400">{metrics?.active_students || 0}</div>
          <div className="text-[11px] text-[#64748B] dark:text-slate-400 font-medium">Coding recently</div>
        </div>

        {/* Card 3: Support */}
        <div className="p-5 rounded-2xl bg-white dark:bg-[#10152E] border border-[#E5E1F0] dark:border-white/10 shadow-xs space-y-1 transition-all">
          <div className="flex items-center justify-between text-[#64748B] dark:text-slate-400">
            <AlertTriangle className="w-4 h-4 text-amber-500" />
            <span className="text-[10px] uppercase font-bold tracking-wider">Support</span>
          </div>
          <div className="text-2xl font-black text-amber-600 dark:text-amber-400">{metrics?.needing_support_count || 0}</div>
          <div className="text-[11px] text-[#64748B] dark:text-slate-400 font-medium">Needs guidance</div>
        </div>

        {/* Card 4: Courses */}
        <div className="p-5 rounded-2xl bg-white dark:bg-[#10152E] border border-[#E5E1F0] dark:border-white/10 shadow-xs space-y-1 transition-all">
          <div className="flex items-center justify-between text-[#64748B] dark:text-slate-400">
            <BookOpen className="w-4 h-4 text-indigo-600 dark:text-cyan-400" />
            <span className="text-[10px] uppercase font-bold tracking-wider">Courses</span>
          </div>
          <div className="text-2xl font-black text-[#171725] dark:text-white">{metrics?.total_enrollments || 0}</div>
          <div className="text-[11px] text-[#64748B] dark:text-slate-400 font-medium">Active tracks</div>
        </div>

        {/* Card 5: Avg Progress */}
        <div className="p-5 rounded-2xl bg-white dark:bg-[#10152E] border border-[#E5E1F0] dark:border-white/10 shadow-xs space-y-1 transition-all">
          <div className="flex items-center justify-between text-[#64748B] dark:text-slate-400">
            <TrendingUp className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span className="text-[10px] uppercase font-bold tracking-wider">Avg Progress</span>
          </div>
          <div className="text-2xl font-black text-indigo-600 dark:text-cyan-400">{metrics?.average_progress || 0}%</div>
          <div className="text-[11px] text-[#64748B] dark:text-slate-400 font-medium">Cohort average</div>
        </div>

        {/* Card 6: Messages */}
        <div className="p-5 rounded-2xl bg-white dark:bg-[#10152E] border border-[#E5E1F0] dark:border-white/10 shadow-xs space-y-1 transition-all">
          <div className="flex items-center justify-between text-[#64748B] dark:text-slate-400">
            <MessageSquare className="w-4 h-4 text-sky-500" />
            <span className="text-[10px] uppercase font-bold tracking-wider">Unread</span>
          </div>
          <div className="text-2xl font-black text-[#171725] dark:text-white">{metrics?.unread_messages_count || 0}</div>
          <div className="text-[11px] text-[#64748B] dark:text-slate-400 font-medium">Student messages</div>
        </div>
      </div>

      {/* Support Attention Alert */}
      {(metrics?.needing_support_count || 0) > 0 && (
        <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-500/30 text-amber-800 dark:text-amber-200 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0" />
            <span className="text-xs font-semibold">
              {metrics.needing_support_count} assigned {metrics.needing_support_count === 1 ? 'student has' : 'students have'} low progress (&lt; 25%) and may need tutoring intervention.
            </span>
          </div>
          <span className="text-[11px] font-bold text-amber-700 dark:text-amber-300">Check student rows marked below</span>
        </div>
      )}

      {/* Assigned Students Table */}
      <div className="bg-white dark:bg-[#0E1433] rounded-3xl border border-[#E5E1F0] dark:border-white/10 overflow-hidden shadow-xs space-y-4 p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-base font-bold text-[#171725] dark:text-white">Assigned Students Cohort</h2>
            <p className="text-xs text-[#64748B] dark:text-slate-400">Learners officially assigned to you by your college administration.</p>
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-[#64748B] dark:text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Filter students..."
              className="w-full pl-9 pr-3 py-1.5 bg-[#F7F5FC] dark:bg-[#10152E] border border-[#E5E1F0] dark:border-white/10 rounded-xl text-xs text-[#171725] dark:text-white placeholder-[#64748B] dark:placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:focus:ring-cyan-400"
            />
          </div>
        </div>

        {filteredStudents.length === 0 ? (
          <div className="py-12 text-center text-[#64748B] dark:text-slate-400 text-xs">
            No students currently match your filter or are assigned to you.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#F7F5FC] dark:bg-[#10152E] border-y border-[#E5E1F0] dark:border-white/10 text-[#64748B] dark:text-slate-400 font-semibold uppercase text-[10px]">
                <tr>
                  <th className="py-3 px-4">Student</th>
                  <th className="py-3 px-4">Enrolled Courses</th>
                  <th className="py-3 px-4">Average Progress</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E1F0] dark:divide-white/10">
                {filteredStudents.map((st) => (
                  <tr key={st.id} className="hover:bg-[#F7F5FC]/80 dark:hover:bg-white/5 transition-colors">
                    <td className="py-3.5 px-4">
                      <div className="font-bold text-[#171725] dark:text-white">{st.full_name}</div>
                      <div className="text-[11px] text-[#64748B] dark:text-slate-400">{st.email}</div>
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="flex flex-wrap gap-1.5">
                        {st.enrollments?.map((e) => (
                          <span
                            key={e.id}
                            className="px-2 py-0.5 rounded-md bg-purple-50 dark:bg-cyan-950/40 text-indigo-700 dark:text-cyan-300 border border-purple-200 dark:border-cyan-500/30 font-medium text-[10px] uppercase"
                          >
                            {e.course_id} ({e.progress_percentage}%)
                          </span>
                        ))}
                        {(!st.enrollments || st.enrollments.length === 0) && (
                          <span className="text-[#64748B] dark:text-slate-500 text-[11px]">Not enrolled</span>
                        )}
                      </div>
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="w-32 space-y-1">
                        <div className="flex justify-between text-[11px] font-semibold text-[#171725] dark:text-white">
                          <span>{st.average_progress}%</span>
                        </div>
                        <div className="w-full bg-[#EAE5F6] dark:bg-black/40 h-1.5 rounded-full overflow-hidden border border-[#E5E1F0] dark:border-white/10">
                          <div
                            className={`h-full rounded-full ${
                              st.average_progress >= 70
                                ? 'bg-emerald-500'
                                : st.average_progress >= 30
                                ? 'bg-indigo-600 dark:bg-cyan-400'
                                : 'bg-amber-500'
                            }`}
                            style={{ width: `${st.average_progress}%` }}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="py-3.5 px-4">
                      {st.needs_help ? (
                        <span className="px-2.5 py-1 rounded-full bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-500/30 text-[10px] font-bold inline-flex items-center gap-1">
                          <AlertTriangle className="w-3 h-3 text-amber-500" /> Needs Support
                        </span>
                      ) : (
                        <span className="px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/30 text-[10px] font-bold inline-flex items-center gap-1">
                          <CheckCircle className="w-3 h-3 text-emerald-500" /> On Track
                        </span>
                      )}
                    </td>
                    <td className="py-3.5 px-4 text-right space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleInspectStudent(st)}
                        className="text-[11px] py-1 px-2.5 font-bold"
                      >
                        Inspect Progress
                      </Button>
                      <Button
                        size="sm"
                        variant="primary"
                        onClick={navMessages}
                        className="text-[11px] py-1 px-2.5 font-bold"
                      >
                        Message
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Student Progress Inspection Modal */}
      {selectedStudent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-white dark:bg-[#0E1433] rounded-3xl max-w-2xl w-full p-6 shadow-2xl border border-[#E5E1F0] dark:border-white/10 space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between border-b border-[#E5E1F0] dark:border-white/10 pb-4">
              <div>
                <h3 className="font-extrabold text-[#171725] dark:text-white text-lg">{selectedStudent.full_name}</h3>
                <p className="text-xs text-[#64748B] dark:text-slate-400 mt-0.5">
                  {selectedStudent.email} • Level: {selectedStudent.level || 'Beginner'} • XP: {selectedStudent.xp || 0}
                </p>
              </div>
              <button
                onClick={() => setSelectedStudent(null)}
                className="w-8 h-8 rounded-full bg-[#F7F5FC] dark:bg-[#10152E] hover:bg-purple-100 dark:hover:bg-white/10 border border-[#E5E1F0] dark:border-white/10 flex items-center justify-center text-[#171725] dark:text-white cursor-pointer transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {detailsLoading ? (
              <div className="py-12 text-center text-xs text-[#64748B] dark:text-slate-400">Loading student progress details...</div>
            ) : (
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-bold text-[#171725] dark:text-white uppercase tracking-wider mb-3">Enrolled Courses Progress</h4>
                  <div className="space-y-3">
                    {studentDetails?.enrollments?.map((e) => (
                      <div key={e.id} className="p-4 rounded-xl bg-[#F7F5FC] dark:bg-[#10152E] border border-[#E5E1F0] dark:border-white/10 space-y-2">
                        <div className="flex items-center justify-between text-xs font-bold text-[#171725] dark:text-white uppercase">
                          <span>{e.course_id}</span>
                          <span className="text-indigo-600 dark:text-cyan-400">{e.progress_percentage}% ({e.completed_topics_count} / {e.total_topics_count} topics)</span>
                        </div>
                        <div className="w-full bg-[#EAE5F6] dark:bg-black/40 h-2 rounded-full overflow-hidden border border-[#E5E1F0] dark:border-white/10">
                          <div className="h-full bg-indigo-600 dark:bg-cyan-400 rounded-full" style={{ width: `${e.progress_percentage}%` }} />
                        </div>
                        <div className="flex justify-between text-[11px] text-[#64748B] dark:text-slate-400">
                          <span>Enrolled: {new Date(e.enrolled_at).toLocaleDateString()}</span>
                          <span>Last Activity: {new Date(e.last_accessed_at).toLocaleDateString()}</span>
                        </div>
                      </div>
                    ))}
                    {(!studentDetails?.enrollments || studentDetails.enrollments.length === 0) && (
                      <div className="text-xs text-[#64748B] dark:text-slate-400">No active course enrollments.</div>
                    )}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-[#171725] dark:text-white uppercase tracking-wider mb-2">Completed Topics Log</h4>
                  <div className="max-h-48 overflow-y-auto divide-y divide-[#E5E1F0] dark:divide-white/10 border border-[#E5E1F0] dark:border-white/10 rounded-xl bg-white dark:bg-[#10152E]">
                    {studentDetails?.topic_progress?.map((tp) => (
                      <div key={tp.id} className="p-2.5 flex items-center justify-between text-xs">
                        <span className="font-medium text-[#171725] dark:text-white">{tp.topic_id}</span>
                        <span className="text-[10px] text-[#64748B] dark:text-slate-400 flex items-center gap-1">
                          <Clock className="w-3 h-3 text-indigo-500 dark:text-cyan-400" /> {new Date(tp.completed_at || tp.last_activity_at).toLocaleDateString()}
                        </span>
                      </div>
                    ))}
                    {(!studentDetails?.topic_progress || studentDetails.topic_progress.length === 0) && (
                      <div className="p-4 text-center text-xs text-[#64748B] dark:text-slate-400">No topics completed yet.</div>
                    )}
                  </div>
                </div>
              </div>
            )}

            <div className="pt-2 flex justify-end gap-3">
              <Button variant="outline" size="sm" onClick={() => setSelectedStudent(null)}>
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
