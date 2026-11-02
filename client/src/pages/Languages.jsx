import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { api } from '../services/api.js';
import { useAuth } from '../context/AuthContext.jsx';
import { useLearning } from '../context/LearningContext.jsx';
import { useTheme } from '../context/ThemeContext.jsx';
import LanguageCard from '../components/LanguageCard.jsx';
import { Sparkles, BookOpen, AlertCircle, RefreshCw, Search, SlidersHorizontal } from 'lucide-react';
import Button from '../components/ui/Button.jsx';

export const Languages = ({
  onLanguageChosen,
  onOpenCurriculum,
  onRequireAuth
}) => {
  const { user } = useAuth();
  const { setSelectedLanguage } = useLearning();
  const { isDark } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const userRole = user?.role || 'user';
  const rolePrefix =
    userRole === 'super_admin'
      ? '/admin'
      : userRole === 'college_admin'
      ? '/college-admin'
      : userRole === 'faculty'
      ? '/faculty'
      : '/student';

  const isRoleRoute =
    location.pathname.startsWith('/student') ||
    location.pathname.startsWith('/faculty') ||
    location.pathname.startsWith('/college-admin') ||
    location.pathname.startsWith('/admin');

  const curriculumRouteBase = isRoleRoute ? `${rolePrefix}/curriculum` : '/curriculum';
  const [courses, setCourses] = useState([]);
  const [enrollments, setEnrollments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [enrollingCourseId, setEnrollingCourseId] = useState(null);

  // Search and filter state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Courses' },
    { id: 'web', label: 'Web & Scripts' },
    { id: 'systems', label: 'Systems & Memory' },
    { id: 'enterprise', label: 'Enterprise & Backend' }
  ];

  const fetchCoursesAndEnrollments = async () => {
    setLoading(true);
    setError(null);
    try {
      const coursePromise = api.getLanguages();
      const enrollmentPromise = (!user || user.isGuest)
        ? Promise.resolve({ success: true, enrollments: [] })
        : api.getMyEnrollments().catch(() => ({ success: true, enrollments: [] }));

      const [courseRes, enrollRes] = await Promise.all([coursePromise, enrollmentPromise]);

      if (courseRes.courses || courseRes.languages) {
        setCourses(courseRes.courses || courseRes.languages);
      }
      if (enrollRes?.enrollments) {
        setEnrollments(enrollRes.enrollments);
      }
    } catch (err) {
      console.warn('Failed to fetch courses:', err);
      setError('Unable to load courses. Please check your connection and retry.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCoursesAndEnrollments();
  }, [user?.id, user?.isGuest]);

  const handleExplore = (langId) => {
    setSelectedLanguage(langId);
    if (onOpenCurriculum) onOpenCurriculum(langId);
    else if (onLanguageChosen) onLanguageChosen(langId);
    else navigate(`${curriculumRouteBase}/${langId}`);
  };

  const handleEnroll = async (langId) => {
    if (!user || user.isGuest) {
      if (onRequireAuth) onRequireAuth(langId);
      else navigate('/login', { state: { from: location } });
      return;
    }

    setEnrollingCourseId(langId);
    try {
      const res = await api.enrollCourse(langId);
      if (res.success) {
        const enrollRes = await api.getMyEnrollments();
        if (enrollRes.enrollments) setEnrollments(enrollRes.enrollments);
        setSelectedLanguage(langId);
        if (onOpenCurriculum) onOpenCurriculum(langId);
        else navigate(`${curriculumRouteBase}/${langId}`);
      }
    } catch (err) {
      console.error('Enrollment error:', err);
    } finally {
      setEnrollingCourseId(null);
    }
  };

  const handleContinue = (langId) => {
    setSelectedLanguage(langId);
    if (onOpenCurriculum) onOpenCurriculum(langId);
    else navigate(`${curriculumRouteBase}/${langId}`);
  };

  // Filter logic
  const filteredCourses = courses.filter((course) => {
    const title = (course.title || course.name || course.id || '').toLowerCase();
    const desc = (course.description || course.tagline || '').toLowerCase();
    const matchesSearch = title.includes(searchQuery.toLowerCase()) || desc.includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;

    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'web') return course.id === 'javascript' || course.id === 'python';
    if (selectedCategory === 'systems') return course.id === 'c' || course.id === 'cpp';
    if (selectedCategory === 'enterprise') return course.id === 'java' || course.id === 'python';
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-8 select-none">
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100/70 dark:bg-cyan-950/40 border border-purple-200 dark:border-cyan-500/30 text-indigo-700 dark:text-cyan-300 text-xs font-black uppercase tracking-wider shadow-2xs">
          <BookOpen className="w-3.5 h-3.5 text-indigo-600 dark:text-cyan-400" />
          <span>Course Catalogue</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-[#1E1B4B] dark:text-white tracking-tight">
          Select Your Programming Track
        </h1>
        <p className="text-xs sm:text-sm text-[#64748B] dark:text-slate-300 leading-relaxed">
          Canonical syllabi structured from beginner fundamentals to advanced production engineering.
          Learn concepts, practice with hidden test suites, and receive guidance from your AI mentor.
        </p>
      </div>

      {/* Search & Categories Bar */}
      <div className={`flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-3xl border transition-all duration-300 ${
        isDark
          ? 'bg-[#070B20]/90 border-white/10 shadow-[0_0_25px_rgba(6,182,212,0.1)]'
          : 'bg-white border-[#D8D1EE] shadow-xs'
      }`}>
        {/* Search */}
        <div className="relative w-full sm:max-w-xs">
          <Search className="w-4 h-4 text-[#64748B] dark:text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search programming tracks..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`w-full pl-9 pr-3 py-2 rounded-2xl border text-xs outline-none transition-all ${
              isDark
                ? 'bg-[#10152E] border-white/10 text-white placeholder-slate-400 focus:border-cyan-400'
                : 'bg-[#F7F5FC] border-[#D8D1EE] text-[#1E1B4B] placeholder-[#64748B]/60 focus:border-indigo-500'
            }`}
          />
        </div>

        {/* Categories Pills */}
        <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? isDark
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                    : 'bg-indigo-600 text-white shadow-xs'
                  : isDark
                    ? 'bg-[#10152E] text-slate-300 hover:text-cyan-300 border border-white/10'
                    : 'bg-[#F7F5FC] text-[#64748B] hover:text-[#1E1B4B] border border-[#D8D1EE]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Error State */}
      {error && (
        <div className="p-6 rounded-3xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-500/30 text-rose-700 dark:text-rose-300 text-center max-w-lg mx-auto space-y-3">
          <AlertCircle className="w-6 h-6 text-rose-500 mx-auto" />
          <p className="text-xs font-semibold">{error}</p>
          <Button
            size="sm"
            variant="outline"
            onClick={fetchCoursesAndEnrollments}
            leftIcon={<RefreshCw className="w-3.5 h-3.5" />}
          >
            Retry
          </Button>
        </div>
      )}

      {/* Skeleton Loading State */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5].map((idx) => (
            <div key={idx} className="p-6 rounded-3xl bg-white dark:bg-[#070B20] border border-[#D8D1EE] dark:border-white/10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl skeleton" />
                <div className="space-y-2 flex-1">
                  <div className="w-28 h-4 skeleton" />
                  <div className="w-16 h-3 skeleton" />
                </div>
              </div>
              <div className="w-full h-12 skeleton" />
              <div className="space-y-2">
                <div className="h-4 skeleton" />
                <div className="h-4 skeleton" />
              </div>
              <div className="w-full h-9 skeleton" />
            </div>
          ))}
        </div>
      ) : filteredCourses.length === 0 ? (
        <div className="p-12 text-center rounded-3xl bg-white dark:bg-[#070B20] border border-dashed border-[#D8D1EE] dark:border-white/10 space-y-3">
          <p className="text-base font-bold text-[#1E1B4B] dark:text-white">No courses match your filter criteria.</p>
          <p className="text-xs text-[#64748B] dark:text-slate-400">Try adjusting your search query or selecting a different category.</p>
          <Button size="sm" variant="outline" onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}>
            Reset Filters
          </Button>
        </div>
      ) : (
        /* Course Grid */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => {
            const courseKey = course.id?.toLowerCase() || course.slug?.toLowerCase();
            const enrollment = enrollments.find(e => e.course_id?.toLowerCase() === courseKey);
            const isEnrolled = Boolean(enrollment && (enrollment.status === 'active' || enrollment.status === 'completed'));

            return (
              <LanguageCard
                key={course.id || course.slug}
                language={course}
                isEnrolled={isEnrolled}
                enrollment={enrollment}
                isGuest={Boolean(!user || user.isGuest)}
                isEnrolling={enrollingCourseId === courseKey}
                onExplore={() => handleExplore(courseKey)}
                onEnroll={() => handleEnroll(courseKey)}
                onContinue={() => handleContinue(courseKey)}
                onRequireAuth={() => onRequireAuth?.(courseKey)}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Languages;
