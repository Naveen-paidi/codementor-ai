import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import { Home, Compass, ArrowLeft, Terminal } from 'lucide-react';
import Button from '../components/ui/Button.jsx';
import ThemeToggle from '../components/ui/ThemeToggle.jsx';

export default function NotFound() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const getHomeRoute = () => {
    if (!user || user.isGuest) return '/';
    if (user.role === 'super_admin') return '/admin/dashboard';
    if (user.role === 'college_admin') return '/college-admin/dashboard';
    if (user.role === 'faculty') return '/faculty/dashboard';
    return '/student/dashboard';
  };

  return (
    <div className="min-h-screen bg-[#F7F5FC] dark:bg-[#030617] text-[#171725] dark:text-[#F8FAFC] flex flex-col justify-between p-4 sm:p-8">
      {/* Top Header */}
      <div className="max-w-6xl mx-auto w-full flex items-center justify-between py-2">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white font-black text-sm shadow-md">
            CM
          </div>
          <span className="font-black text-lg tracking-tight">CodeMentor</span>
        </div>
        <ThemeToggle />
      </div>

      {/* Main 404 Stage */}
      <div className="max-w-2xl mx-auto w-full text-center py-12 px-4 space-y-8">
        <div className="relative inline-block">
          <div className="text-8xl sm:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-cyan-400 dark:via-blue-500 dark:to-purple-500 animate-pulse">
            404
          </div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white dark:bg-[#10152E] border border-[#E5E1F0] dark:border-white/10 shadow-sm flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5 text-indigo-600 dark:text-cyan-400" />
            <span>Route Undefined</span>
          </div>
        </div>

        <div className="space-y-3">
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#171725] dark:text-white">
            Page Not Found
          </h1>
          <p className="text-sm text-[#64748B] dark:text-slate-400 max-w-md mx-auto leading-relaxed">
            The destination URL you are attempting to reach does not exist or has been restructured within our curriculum.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Button
            variant="outline"
            onClick={() => navigate(-1)}
            leftIcon={<ArrowLeft className="w-4 h-4" />}
          >
            Go Back
          </Button>
          <Button
            variant="primary"
            onClick={() => navigate(getHomeRoute())}
            leftIcon={<Home className="w-4 h-4" />}
          >
            Return to Dashboard
          </Button>
        </div>
      </div>

      {/* Bottom Footer Note */}
      <div className="max-w-6xl mx-auto w-full text-center text-xs text-[#94A3B8] dark:text-slate-500 py-4">
        CodeMentor • Next-Generation Dual Experience Learning Platform
      </div>
    </div>
  );
}

