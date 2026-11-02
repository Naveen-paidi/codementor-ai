import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import { useTheme } from '../context/ThemeContext.jsx';
import { Lock, Mail, ArrowRight, Eye, EyeOff, CheckCircle2, Sparkles, BookOpen, ChevronLeft } from 'lucide-react';
import Button from '../components/ui/Button.jsx';
import ThemeToggle from '../components/ui/ThemeToggle.jsx';

export const Login = ({ onLoginSuccess, onSwitchToSignup, onBackToHome, redirectReason }) => {
  const { login, loading, user } = useAuth();
  const { isDark } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    const res = await login(email, password);
    if (res.success) {
      if (onLoginSuccess) {
        onLoginSuccess();
      } else {
        const fromPath = location.state?.from?.pathname;
        if (fromPath && fromPath !== '/login' && fromPath !== '/signup') {
          navigate(fromPath, { replace: true });
          return;
        }
        // Redirect according to verified role
        const role = user?.role || 'user';
        if (role === 'super_admin') navigate('/admin/dashboard', { replace: true });
        else if (role === 'college_admin') navigate('/college-admin/dashboard', { replace: true });
        else if (role === 'faculty') navigate('/faculty/dashboard', { replace: true });
        else navigate('/student/dashboard', { replace: true });
      }
    } else {
      setErrorMsg(res.error || 'Failed to sign in.');
    }
  };

  return (
    <div className={`min-h-screen flex flex-col lg:flex-row select-none transition-colors duration-300 ${
      isDark ? 'bg-[#030617] text-[#F8FAFC]' : 'bg-[#EAE5F6] text-[#1E1B4B]'
    }`}>
      {/* LEFT: Branding, Statement & Visual 3D Showcase (Desktop Split-Screen) */}
      <div className={`lg:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-between relative overflow-hidden shrink-0 ${
        isDark
          ? 'bg-gradient-to-br from-[#030617] via-[#070B20] to-[#10152E] text-white border-b lg:border-b-0 lg:border-r border-white/10'
          : 'bg-gradient-to-br from-indigo-900 via-indigo-700 to-purple-800 text-white'
      }`}>
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top: Logo & Name */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/10 p-2 backdrop-blur-md border border-white/20 shadow-md">
              <img src="/logo.png" alt="CodeMentor" className="w-full h-full object-contain" />
            </div>
            <span className="font-black text-xl tracking-tight text-white">CodeMentor</span>
          </div>

          <div className="lg:hidden">
            <ThemeToggle />
          </div>
        </div>

        {/* Center: Headline & Value Proposition */}
        <div className="relative z-10 my-10 lg:my-0 space-y-6 max-w-lg">
          <div className="space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-cyan-300 bg-white/10 px-3 py-1 rounded-full border border-cyan-400/30">
              Next-Gen Learning Platform
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Learn to Code.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-200 to-white">
                Build with Confidence.
              </span>
            </h1>
            <p className="text-xs sm:text-sm opacity-90 leading-relaxed">
              Structured programming education, native sandboxed compilers, and AI mentor guidance united in one platform.
            </p>
          </div>

          {/* Pillars List */}
          <div className="space-y-3 pt-2 text-xs opacity-95">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Interactive Monaco IDE with multi-language compilers</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Hybrid RAG AI mentor grounding CS concepts 24/7</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Verifiable syllabus telemetry & skill performance tracking</span>
            </div>
          </div>
        </div>

        {/* Bottom: Footer info */}
        <div className="relative z-10 text-[11px] opacity-70 hidden lg:block">
          Python • JavaScript • Java • C++ • C
        </div>
      </div>

      {/* RIGHT: Login Card Form */}
      <div className="lg:w-1/2 flex items-center justify-center p-6 sm:p-12 lg:p-16 relative">
        <div className="hidden lg:block absolute top-8 right-8">
          <ThemeToggle />
        </div>

        <div className={`w-full max-w-md p-8 sm:p-10 rounded-3xl transition-all duration-300 space-y-6 ${
          isDark
            ? 'bg-[#070B20]/90 border border-cyan-500/30 shadow-[0_0_40px_rgba(6,182,212,0.15)] backdrop-blur-xl'
            : 'clay-card-3d bg-white'
        }`}>
          <div className="space-y-2">
            <h2 className="text-2xl font-black text-[#1E1B4B] dark:text-white tracking-tight">
              Welcome back
            </h2>
            <p className="text-xs text-[#64748B] dark:text-slate-400">
              Sign in to continue your learning journey and access your dashboard.
            </p>
          </div>

          {redirectReason && (
            <div className="p-3.5 rounded-2xl bg-purple-100/70 dark:bg-cyan-950/40 border border-purple-200 dark:border-cyan-500/30 text-indigo-800 dark:text-cyan-300 text-xs text-center font-bold">
              🔒 {redirectReason}
            </div>
          )}

          {errorMsg && (
            <div className="p-3.5 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-500/30 text-rose-700 dark:text-rose-300 text-xs text-center font-bold">
              {errorMsg}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs font-bold text-[#1E1B4B] dark:text-slate-200 block mb-1.5">Email Address</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-[#64748B] dark:text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="scholar@university.edu"
                  className="w-full pl-10 pr-4 py-2.5 bg-[#F7F5FC] dark:bg-[#10152E] border border-[#D8D1EE] dark:border-white/10 rounded-2xl text-xs sm:text-sm text-[#1E1B4B] dark:text-white placeholder-[#64748B]/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-cyan-400 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-[#1E1B4B] dark:text-slate-200 block mb-1.5">Password</label>
              <div className="relative">
                <Lock className="w-4 h-4 text-[#64748B] dark:text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-10 py-2.5 bg-[#F7F5FC] dark:bg-[#10152E] border border-[#D8D1EE] dark:border-white/10 rounded-2xl text-xs sm:text-sm text-[#1E1B4B] dark:text-white placeholder-[#64748B]/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-cyan-400 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#64748B] hover:text-[#1E1B4B] dark:hover:text-white cursor-pointer"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              size="lg"
              variant="primary"
              isLoading={loading}
              rightIcon={<ArrowRight className="w-4 h-4" />}
              className="w-full mt-2 font-black"
            >
              Sign In
            </Button>
          </form>

          <div className="pt-2 text-center space-y-2 border-t border-[#D8D1EE] dark:border-white/10">
            <p className="text-xs text-[#64748B] dark:text-slate-400">
              Don't have an account?{' '}
              <button
                type="button"
                onClick={onSwitchToSignup || (() => navigate('/signup'))}
                className="text-indigo-600 dark:text-cyan-400 hover:underline font-bold cursor-pointer"
              >
                Create Account
              </button>
            </p>
            <button
              type="button"
              onClick={onBackToHome || (() => navigate('/'))}
              className="text-[11px] text-[#64748B] dark:text-slate-400 hover:text-indigo-600 dark:hover:text-cyan-400 inline-flex items-center gap-1 cursor-pointer pt-1"
            >
              <ChevronLeft className="w-3.5 h-3.5" /> Back to overview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
