import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Terminal,
  ArrowRight,
  BookOpen,
  Code2,
  CheckCircle2,
  Cpu,
  Brain,
  BarChart3,
  Flame,
  ShieldCheck,
  ChevronRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Layers,
  Zap,
  Lock,
  Globe,
  Binary,
  GraduationCap
} from 'lucide-react';
import Button from '../components/ui/Button.jsx';
import Badge from '../components/ui/Badge.jsx';
import ThemeToggle from '../components/ui/ThemeToggle.jsx';
import { useTheme } from '../context/ThemeContext.jsx';

export const Landing = ({
  onStartLearning,
  onExploreLanguages,
  onSignIn,
  onNavigateToPractice,
  onNavigateToMentor
}) => {
  const { isDark } = useTheme();
  const navigate = useNavigate();

  const handleStartLearning = onStartLearning || (() => navigate('/login'));
  const handleExploreLanguages = onExploreLanguages || (() => navigate('/courses'));
  const handleSignIn = onSignIn || (() => navigate('/login'));
  const handlePractice = onNavigateToPractice || (() => navigate('/practice'));
  const handleMentor = onNavigateToMentor || (() => navigate('/login'));

  const languages = [
    { id: 'python', name: 'Python', icon: '🐍', tag: 'AI & Data Science', colorLight: 'from-emerald-50 to-teal-50 border-emerald-200/80', colorDark: 'dark:from-emerald-950/30 dark:to-teal-950/20 dark:border-emerald-500/30' },
    { id: 'javascript', name: 'JavaScript', icon: '🟨', tag: 'Modern Web & Full-Stack', colorLight: 'from-amber-50 to-yellow-50 border-amber-200/80', colorDark: 'dark:from-amber-950/30 dark:to-yellow-950/20 dark:border-amber-500/30' },
    { id: 'java', name: 'Java', icon: '☕', tag: 'Enterprise & Systems', colorLight: 'from-orange-50 to-amber-50 border-orange-200/80', colorDark: 'dark:from-orange-950/30 dark:to-amber-950/20 dark:border-orange-500/30' },
    { id: 'cpp', name: 'C++', icon: '⚡', tag: 'High-Performance & DSA', colorLight: 'from-indigo-50 to-purple-50 border-indigo-200/80', colorDark: 'dark:from-indigo-950/30 dark:to-purple-950/20 dark:border-indigo-500/30' },
    { id: 'c', name: 'C', icon: '⚙️', tag: 'Low-Level Architecture', colorLight: 'from-sky-50 to-blue-50 border-sky-200/80', colorDark: 'dark:from-sky-950/30 dark:to-blue-950/20 dark:border-sky-500/30' }
  ];

  const pillarFeatures = [
    {
      id: 'structured',
      title: 'Structured Curricula',
      subtitle: 'Canonical Roadmaps',
      icon: <BookOpen className="w-6 h-6 text-indigo-600 dark:text-cyan-400" />,
      desc: 'Master fundamentals, control structures, data structures, and algorithms step-by-step with zero guesswork.',
      points: ['Step-by-step modular progression', 'Topic concept checks & diagnostics', 'Clear prerequisites & objectives']
    },
    {
      id: 'practice',
      title: 'Coding Practice IDE',
      subtitle: 'Native Sandboxed Execution',
      icon: <Terminal className="w-6 h-6 text-sky-500 dark:text-cyan-400" />,
      desc: 'Interactive Monaco Editor with native multi-language compilers and 10 test cases per problem (3 public, 7 hidden).',
      points: ['Multi-language compiler support', 'Comprehensive test case suites', 'Real execution runtime statistics']
    },
    {
      id: 'review',
      title: 'AI Code Review',
      subtitle: 'Intelligent Bug Diagnosis',
      icon: <Cpu className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
      desc: 'Diagnose compiler errors, boundary exceptions, and logical mistakes with tiered hints that foster genuine understanding.',
      points: ['Syntax & runtime diagnostics', 'Progressive tiered hints', 'No accidental solution spoilers']
    },
    {
      id: 'mentor',
      title: 'AI Mentor RAG',
      subtitle: 'Hybrid RAG + Secure Tools',
      icon: <Brain className="w-6 h-6 text-pink-600 dark:text-pink-400" />,
      desc: 'Grounding Computer Science queries with verified documentation, database tools, and Socratic analogies 24/7.',
      points: ['Curriculum-aware contextual answers', 'Line-by-line code explanation', 'Strict domain verification']
    },
    {
      id: 'dsa',
      title: 'DSA Practice Arena',
      subtitle: '200 Curated Challenges',
      icon: <Binary className="w-6 h-6 text-teal-600 dark:text-teal-400" />,
      desc: 'Comprehensive algorithmic problem sets spanning Arrays, Trees, Graphs, Dynamic Programming, and placement prep.',
      points: ['Difficulty filters & topic tags', 'Automated test suite benchmarking', 'Solution submissions tracking']
    },
    {
      id: 'telemetry',
      title: 'Verifiable Analytics',
      subtitle: 'Institutional LMS Metrics',
      icon: <BarChart3 className="w-6 h-6 text-amber-500 dark:text-amber-400" />,
      desc: 'Real-time database mastery analytics, consistency streaks, student telemetry, and multi-campus management.',
      points: ['Dynamic topic mastery metrics', 'Daily consistency streaks', 'Real-time database analytics']
    }
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen selection:bg-indigo-600 dark:selection:bg-cyan-500 selection:text-white transition-colors duration-300 font-sans ${
      isDark ? 'aurora-bg-dark text-[#F8FAFC]' : 'aurora-bg-light text-[#1E1B4B]'
    }`}>
      {/* Sticky Top Header */}
      <header className="sticky top-0 z-40 w-full glass-nav-dual">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          {/* Logo & Brand Name */}
          <div
            className="flex items-center gap-3 cursor-pointer select-none group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="p-1.5 rounded-2xl bg-white dark:bg-[#10152E] border border-[#D8D1EE] dark:border-cyan-500/30 shadow-xs group-hover:scale-105 transition-all">
              <img
                src="/logo.png"
                alt="CodeMentor"
                className="w-8 h-8 rounded-lg object-contain drop-shadow-[0_2px_8px_rgba(99,102,241,0.25)] dark:drop-shadow-[0_2px_8px_rgba(6,182,212,0.4)]"
              />
            </div>
            <span className="text-xl font-black tracking-tight text-[#1E1B4B] dark:text-white">
              Code<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-cyan-400 dark:to-indigo-400">Mentor</span>
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-[#64748B] dark:text-slate-300">
            <button
              onClick={handleExploreLanguages}
              className="hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors cursor-pointer"
            >
              Courses
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors cursor-pointer"
            >
              Features
            </button>
            <button
              onClick={handlePractice}
              className="hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors cursor-pointer"
            >
              Practice
            </button>
            <button
              onClick={handleMentor}
              className="hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-purple-600 dark:text-cyan-400" />
              AI Mentor
            </button>
          </nav>

          {/* Action Buttons & Theme Toggle */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            <button
              onClick={handleSignIn}
              className="px-4 py-2 text-sm font-bold text-[#1E1B4B] dark:text-slate-200 hover:text-indigo-600 dark:hover:text-cyan-300 hover:bg-purple-100/50 dark:hover:bg-white/10 rounded-xl transition-all cursor-pointer"
            >
              Login
            </button>

            <Button
              size="md"
              variant="primary"
              onClick={handleStartLearning}
              className="font-black text-sm"
            >
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* =========================================================================
          HERO SECTION – DUAL-THEME 3D SHOWCASE WITH VIDEO CENTERPIECE
          Ref Images 1 & 3: Light Mode (Playful, colorful claymorphic 3D)
          Ref Images 2 & 4: Dark Mode (Futuristic, cinematic neon glass 3D)
      ========================================================================= */}
      <section className="relative pt-12 sm:pt-20 pb-20 sm:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[450px] bg-gradient-to-tr from-purple-400/20 via-indigo-500/15 to-cyan-400/20 blur-[140px] rounded-full pointer-events-none -z-10" />

        {/* Hero Top Title & CTAs */}
        <div className="text-center max-w-4xl mx-auto space-y-6 mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black tracking-wide shadow-xs ${
              isDark
                ? 'bg-[#10152E]/90 border border-cyan-500/30 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.25)]'
                : 'bg-white/90 border border-purple-200/80 text-indigo-700 shadow-[0_4px_12px_rgba(139,92,246,0.12)]'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-600 dark:text-cyan-400" />
            <span>Intelligent AI Programming & Learning Platform</span>
          </motion.div>

          {/* Heading with Art-Directed Dual Identity */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08]"
          >
            {isDark ? (
              <>
                <span className="text-white">EMPOWER YOUR CODE.</span><br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400">
                  BUILD SMARTER.
                </span>
              </>
            ) : (
              <>
                <span className="text-[#1E1B4B]">Creative for everyone.</span><br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
                  Build the future with AI.
                </span>
              </>
            )}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-base sm:text-lg text-[#64748B] dark:text-slate-300 leading-relaxed font-normal"
          >
            Structured canonical education, native sandboxed compilers, and personal AI guidance brought together in one next-generation dual-experience platform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-2"
          >
            <Button
              size="lg"
              variant={isDark ? 'primary' : 'clay'}
              onClick={handleStartLearning}
              rightIcon={<ArrowRight className="w-5 h-5" />}
              className="text-base px-8 py-3.5 font-black"
            >
              Start Free Trial
            </Button>
            <button
              onClick={handleExploreLanguages}
              className={`px-6 py-3.5 text-base font-bold rounded-2xl transition-all cursor-pointer flex items-center gap-2 ${
                isDark
                  ? 'bg-[#10152E]/90 hover:bg-[#151C3E] text-white border border-cyan-500/30 hover:border-cyan-400/60 shadow-[0_0_15px_rgba(6,182,212,0.15)]'
                  : 'bg-white hover:bg-purple-50/50 text-[#1E1B4B] border border-purple-200/80 hover:border-purple-300 shadow-[0_4px_12px_rgba(139,92,246,0.1)]'
              }`}
            >
              <BookOpen className="w-4 h-4 text-indigo-600 dark:text-cyan-400" />
              Explore Tracks
            </button>
          </motion.div>
        </div>

        {/* =====================================================================
            3D FLOATING CENTERPIECE FEATURING client/public/Video.mp4
            Surrounded by floating 3D perspective cards matching reference images
        ===================================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Main 3D Framed Video Panel */}
          <div
            className={`relative rounded-3xl overflow-hidden transition-all duration-500 p-2 sm:p-3 ${
              isDark
                ? 'bg-[#070B20]/90 border border-cyan-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_40px_rgba(6,182,212,0.25)] backdrop-blur-2xl'
                : 'clay-card-3d bg-white'
            }`}
          >
            {/* Window Header Bar */}
            <div className={`px-4 py-3 rounded-2xl mb-2 flex items-center justify-between text-xs font-semibold ${
              isDark
                ? 'bg-[#030617] border border-white/5 text-slate-300'
                : 'bg-[#F7F5FC] border border-[#E2DCF3] text-[#1E1B4B]'
            }`}>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-400 inline-block shadow-xs" />
                <span className="w-3 h-3 rounded-full bg-amber-400 inline-block shadow-xs" />
                <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block shadow-xs" />
                <span className="ml-2 font-mono text-xs font-bold text-indigo-600 dark:text-cyan-400">
                  CodeMentor Interactive Showcase
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live Preview
                </span>
              </div>
            </div>

            {/* Video Container (Pure Visual 3D Presentation, No Controls) */}
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-inner pointer-events-none select-none">
              <video
                src="/Video.mp4"
                autoPlay
                loop
                muted
                playsInline
                aria-hidden="true"
                className="w-full h-full object-cover pointer-events-none select-none"
              />

              {/* Subtle Ambient Video Gradient Overlay */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 via-transparent to-black/10" />

              {/* Interactive Status Overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white pointer-events-none">
                <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                  <span className="font-bold">Next-Gen Education Engine</span>
                </div>
                <div className="hidden sm:flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Hybrid RAG + 200 DSA Challenges</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Decorative 3D Badges (Matching Ref Image 1 & 4 layout) */}
          {/* Badge 1: Top Left Floating Card */}
          <div className="hidden lg:flex absolute -top-8 -left-10 p-3.5 rounded-2xl backdrop-blur-xl animate-float-slow select-none z-20 transition-all ${
            isDark
              ? 'bg-[#10152E]/90 border border-cyan-500/40 shadow-[0_0_20px_rgba(6,182,212,0.35)] text-cyan-300'
              : 'bg-white/95 border border-purple-200/80 shadow-[0_12px_28px_rgba(139,92,246,0.18)] text-indigo-900'
          }">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-gradient-to-tr from-cyan-400 to-indigo-500 text-white shadow-xs">
                <Code2 className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-black">Monaco Sandbox</p>
                <p className="text-[10px] text-[#64748B] dark:text-slate-400">5 Languages • 10 Test Cases</p>
              </div>
            </div>
          </div>

          {/* Badge 2: Top Right Floating Card */}
          <div className="hidden lg:flex absolute -top-8 -right-10 p-3.5 rounded-2xl backdrop-blur-xl animate-float-reverse select-none z-20 transition-all ${
            isDark
              ? 'bg-[#10152E]/90 border border-purple-500/40 shadow-[0_0_20px_rgba(168,85,247,0.35)] text-purple-300'
              : 'bg-white/95 border border-purple-200/80 shadow-[0_12px_28px_rgba(139,92,246,0.18)] text-indigo-900'
          }">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-gradient-to-tr from-purple-500 to-pink-500 text-white shadow-xs">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-black">AI Mentor Online</p>
                <p className="text-[10px] text-[#64748B] dark:text-slate-400">Hybrid RAG Grounding</p>
              </div>
            </div>
          </div>

          {/* Badge 3: Bottom Left Floating Card */}
          <div className="hidden lg:flex absolute -bottom-8 -left-10 p-3.5 rounded-2xl backdrop-blur-xl animate-float-reverse select-none z-20 transition-all ${
            isDark
              ? 'bg-[#10152E]/90 border border-cyan-500/40 shadow-[0_0_20px_rgba(6,182,212,0.35)] text-cyan-300'
              : 'bg-white/95 border border-purple-200/80 shadow-[0_12px_28px_rgba(139,92,246,0.18)] text-indigo-900'
          }">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-500 text-white shadow-xs">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-black">2,500+ Students</p>
                <p className="text-[10px] text-[#64748B] dark:text-slate-400">4.9/5 Rating from Campus</p>
              </div>
            </div>
          </div>

          {/* Badge 4: Bottom Right Floating Card */}
          <div className="hidden lg:flex absolute -bottom-8 -right-10 p-3.5 rounded-2xl backdrop-blur-xl animate-float-slow select-none z-20 transition-all ${
            isDark
              ? 'bg-[#10152E]/90 border border-amber-500/40 shadow-[0_0_20px_rgba(245,158,11,0.35)] text-amber-300'
              : 'bg-white/95 border border-purple-200/80 shadow-[0_12px_28px_rgba(139,92,246,0.18)] text-indigo-900'
          }">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-gradient-to-tr from-amber-400 to-orange-500 text-white shadow-xs">
                <Flame className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-black">Daily Streak XP</p>
                <p className="text-[10px] text-[#64748B] dark:text-slate-400">Verifiable Progress Telemetry</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* =========================================================================
          CANONICAL TRACKS SHOWCASE (Vibrant 3D Cards)
      ========================================================================= */}
      <section className="py-20 border-y border-[#D8D1EE] dark:border-white/10 bg-white/60 dark:bg-[#070B20]/60 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h3 className="text-xs font-black uppercase tracking-widest text-indigo-600 dark:text-cyan-400 mb-2">
              Canonical Curriculum Tracks
            </h3>
            <p className="text-2xl sm:text-3xl font-black text-[#1E1B4B] dark:text-white">
              Engineered for Industry Placement & Deep Mastery
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {languages.map((lang) => (
              <div
                key={lang.id}
                onClick={() => navigate(`/curriculum/${lang.id}`)}
                className={`p-5 rounded-3xl bg-gradient-to-br ${lang.colorLight} ${lang.colorDark} border hover:scale-105 hover:shadow-xl flex flex-col items-center text-center cursor-pointer transition-all duration-300 group`}
              >
                <span className="text-4xl mb-3 group-hover:scale-125 transition-transform">{lang.icon}</span>
                <span className="text-sm font-black text-[#1E1B4B] dark:text-white">{lang.name}</span>
                <span className="text-[11px] text-[#64748B] dark:text-slate-400 mt-1 font-semibold">{lang.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          CORE PLATFORM PILLARS (Dual-Theme 3D Grid)
      ========================================================================= */}
      <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <Badge variant="purple">Next-Generation Architecture</Badge>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#1E1B4B] dark:text-white">
            Designed for Real Mastery
          </h2>
          <p className="text-sm sm:text-base text-[#64748B] dark:text-slate-300 leading-relaxed">
            Every feature is engineered to guide you through reasoning, testing, code execution, and placement preparedness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillarFeatures.map((feat) => (
            <div
              key={feat.id}
              className={`p-7 rounded-3xl transition-all duration-300 flex flex-col justify-between group ${
                isDark
                  ? 'bg-[#070B20]/80 border border-white/10 hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] backdrop-blur-xl'
                  : 'clay-card-3d bg-white'
              }`}
            >
              <div>
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform ${
                  isDark
                    ? 'bg-[#10152E] border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.25)]'
                    : 'bg-purple-100/70 border border-purple-200 shadow-xs'
                }`}>
                  {feat.icon}
                </div>
                <div className="text-[11px] font-black text-indigo-600 dark:text-cyan-400 uppercase tracking-wider mb-1">
                  {feat.subtitle}
                </div>
                <h3 className="text-lg font-black text-[#1E1B4B] dark:text-white mb-2.5">
                  {feat.title}
                </h3>
                <p className="text-xs text-[#64748B] dark:text-slate-300 leading-relaxed mb-5">
                  {feat.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[#D8D1EE] dark:border-white/10 space-y-2 text-xs text-[#64748B] dark:text-slate-300 font-medium">
                {feat.points.map((pt, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 dark:text-cyan-400 shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          BOTTOM CALL-TO-ACTION BANNER
      ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
        <div className={`p-10 sm:p-14 rounded-3xl relative overflow-hidden space-y-6 ${
          isDark
            ? 'bg-gradient-to-r from-[#070B20] via-[#10152E] to-[#0A0F26] border border-cyan-500/40 shadow-[0_0_50px_rgba(6,182,212,0.25)] text-white'
            : 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white shadow-2xl'
        }`}>
          <div className="w-14 h-14 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center mx-auto mb-4 backdrop-blur-md">
            <img src="/logo.png" alt="CodeMentor" className="w-9 h-9 object-contain" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Ready to Accelerate Your Career?
          </h2>

          <p className="text-sm opacity-90 max-w-xl mx-auto leading-relaxed">
            Join thousands of developers and university students learning with CodeMentor. Explore canonical curriculums, write code in the compiler, and master DSA.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button
              size="lg"
              variant="outline"
              onClick={handleStartLearning}
              className="px-8 py-3.5 font-black bg-white hover:bg-slate-50 text-indigo-700 hover:text-indigo-800 border-none shadow-xl cursor-pointer"
            >
              Start Free Trial Now
            </Button>
            <button
              onClick={handleExploreLanguages}
              className="px-6 py-3.5 text-sm font-bold text-white hover:bg-white/20 border border-white/30 rounded-2xl transition-all cursor-pointer backdrop-blur-md"
            >
              Explore All Tracks
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#D8D1EE] dark:border-white/10 bg-white/70 dark:bg-[#070B20]/70 backdrop-blur-md py-8 text-xs text-[#64748B] dark:text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <img src="/logo.png" alt="CodeMentor" className="w-5 h-5 object-contain" />
            <span className="font-bold text-[#1E1B4B] dark:text-white">CodeMentor</span>
            <span>•</span>
            <span>Premium Dual-Theme 3D AI Programming Platform</span>
          </div>
          <div className="flex items-center gap-3">
            <span>Python</span> • <span>JavaScript</span> • <span>Java</span> • <span>C++</span> • <span>C</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
