import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Search,
  Filter,
  ArrowUpDown,
  CheckCircle2,
  Clock,
  CircleDot,
  RotateCcw,
  Sparkles,
  ChevronRight,
  Flame,
  Award,
  BookOpen,
  Layers,
  ArrowRight
} from 'lucide-react';
import { api } from '../../services/api.js';
import DSAContributionHeatmap from '../../components/dsa/DSAContributionHeatmap.jsx';

export const DSACatalogue = ({ onSelectProblem }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const rolePrefix = location.pathname.startsWith('/faculty')
    ? '/faculty'
    : location.pathname.startsWith('/college-admin')
    ? '/college-admin'
    : location.pathname.startsWith('/admin')
    ? '/admin'
    : '/student';

  const handleSelectProblem = (prob) => {
    if (onSelectProblem) return onSelectProblem(prob);
    navigate(`${rolePrefix}/dsa/${prob.id}`);
  };
  const [problems, setProblems] = useState([]);
  const [topics, setTopics] = useState([]);
  const [stats, setStats] = useState(null);
  const [heatmap, setHeatmap] = useState(null);
  const [loading, setLoading] = useState(true);

  // Filter & Search state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [sortBy, setSortBy] = useState('number');
  const [sortOrder, setSortOrder] = useState('asc');

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 25;

  const loadData = async () => {
    try {
      setLoading(true);
      const [probsRes, topicsRes, statsRes, heatmapRes] = await Promise.all([
        api.getDSAProblems(),
        api.getDSATopics(),
        api.getDSAStats(),
        api.getDSAHeatmap()
      ]);

      if (probsRes?.success) setProblems(probsRes.data || []);
      if (topicsRes?.success) setTopics(topicsRes.data || []);
      if (statsRes?.success) setStats(statsRes.data || null);
      if (heatmapRes?.success) setHeatmap(heatmapRes.data || null);
    } catch (err) {
      console.error('[DSACatalogue] Error loading DSA catalogue:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // Filter & Sort calculation
  const filteredProblems = useMemo(() => {
    let result = [...problems];

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          String(p.number) === q ||
          p.topic.toLowerCase().includes(q)
      );
    }

    // Topic filter
    if (selectedTopic !== 'All') {
      result = result.filter((p) => p.topic.toLowerCase() === selectedTopic.toLowerCase());
    }

    // Difficulty filter
    if (selectedDifficulty !== 'All') {
      result = result.filter((p) => p.difficulty.toLowerCase() === selectedDifficulty.toLowerCase());
    }

    // Status filter
    if (selectedStatus !== 'All') {
      result = result.filter((p) => p.status.toLowerCase() === selectedStatus.toLowerCase());
    }

    // Sorting
    result.sort((a, b) => {
      let valA = a[sortBy] ?? a.number;
      let valB = b[sortBy] ?? b.number;

      if (sortBy === 'difficulty') {
        const weight = { Easy: 1, Medium: 2, Hard: 3 };
        valA = weight[a.difficulty] || 2;
        valB = weight[b.difficulty] || 2;
      }

      if (typeof valA === 'string') {
        return sortOrder === 'desc' ? valB.localeCompare(valA) : valA.localeCompare(valB);
      }
      return sortOrder === 'desc' ? valB - valA : valA - valB;
    });

    return result;
  }, [problems, searchQuery, selectedTopic, selectedDifficulty, selectedStatus, sortBy, sortOrder]);

  // Paginated problems
  const totalPages = Math.ceil(filteredProblems.length / pageSize) || 1;
  const paginatedProblems = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredProblems.slice(start, start + pageSize);
  }, [filteredProblems, currentPage]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedTopic('All');
    setSelectedDifficulty('All');
    setSelectedStatus('All');
    setSortBy('number');
    setSortOrder('asc');
    setCurrentPage(1);
  };

  const getDifficultyBadge = (diff) => {
    switch (diff) {
      case 'Easy':
        return 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20';
      case 'Medium':
        return 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20';
      case 'Hard':
        return 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20';
      default:
        return 'bg-slate-500/10 text-slate-600 border-slate-500/20';
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'solved':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            Solved
          </span>
        );
      case 'attempted':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
            <Clock className="w-3.5 h-3.5 text-amber-500" />
            Attempted
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
            <CircleDot className="w-3.5 h-3.5 text-slate-400" />
            Unsolved
          </span>
        );
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* 1. Header Overview & Metrics Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 p-8 text-white shadow-xl border border-slate-800">
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              LeetCode-Style Practice Hub
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              DSA Mastery Curriculum
            </h1>
            <p className="text-slate-300 text-sm leading-relaxed">
              Master exactly <strong className="text-white">200 canonical problems</strong> across 16 core
              topics with function-based submissions, automated multi-language judging in 5 languages, and
              AI-assisted code reviews.
            </p>

            {/* Overall Progress Bar */}
            <div className="pt-2">
              <div className="flex items-center justify-between text-xs font-semibold mb-1.5 text-slate-300">
                <span>Overall Completion</span>
                <span className="text-emerald-400 font-bold">
                  {stats?.solved ?? 0} / {stats?.totalProblems ?? 200} ({stats?.completionPercentage ?? 0}%)
                </span>
              </div>
              <div className="h-2.5 w-full bg-slate-700/80 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-700 shadow-[0_0_12px_rgba(16,185,129,0.5)]"
                  style={{ width: `${stats?.completionPercentage ?? 0}%` }}
                />
              </div>
            </div>
          </div>

          {/* Difficulty Counters & Streak Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 shrink-0">
            <div className="bg-slate-800/80 border border-slate-700/60 rounded-2xl p-4 text-center">
              <div className="text-xs text-emerald-400 font-semibold mb-1">Easy</div>
              <div className="text-2xl font-black text-white">
                {stats?.difficulty?.easy?.solved ?? 0}
                <span className="text-xs font-normal text-slate-400">/{stats?.difficulty?.easy?.total ?? 19}</span>
              </div>
            </div>

            <div className="bg-slate-800/80 border border-slate-700/60 rounded-2xl p-4 text-center">
              <div className="text-xs text-amber-400 font-semibold mb-1">Medium</div>
              <div className="text-2xl font-black text-white">
                {stats?.difficulty?.medium?.solved ?? 0}
                <span className="text-xs font-normal text-slate-400">/{stats?.difficulty?.medium?.total ?? 142}</span>
              </div>
            </div>

            <div className="bg-slate-800/80 border border-slate-700/60 rounded-2xl p-4 text-center col-span-2 sm:col-span-1">
              <div className="text-xs text-rose-400 font-semibold mb-1">Hard</div>
              <div className="text-2xl font-black text-white">
                {stats?.difficulty?.hard?.solved ?? 0}
                <span className="text-xs font-normal text-slate-400">/{stats?.difficulty?.hard?.total ?? 39}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. GitHub-Style Contribution Heatmap */}
      <DSAContributionHeatmap heatmapData={heatmap} stats={stats} />

      {/* 3. Topic Progress Carousel / Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-indigo-500" />
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              Topic-Wise Progress (16 Topics)
            </h2>
          </div>
          <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
            Click any topic card to filter problems
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
          {topics.map((t) => {
            const isSelected = selectedTopic.toLowerCase() === t.topic.toLowerCase();
            return (
              <button
                key={t.topic}
                onClick={() => {
                  setSelectedTopic(isSelected ? 'All' : t.topic);
                  setCurrentPage(1);
                }}
                className={`text-left p-4 rounded-2xl border transition-all duration-200 ${
                  isSelected
                    ? 'bg-indigo-50/80 dark:bg-indigo-950/40 border-indigo-500 shadow-md ring-2 ring-indigo-500/20'
                    : 'bg-white dark:bg-slate-900/80 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white truncate">
                    {t.topic}
                  </h4>
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 shrink-0">
                    {t.solved}/{t.totalProblems}
                  </span>
                </div>

                <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mb-2.5">
                  <div
                    className="h-full bg-indigo-500 rounded-full"
                    style={{ width: `${t.percentage}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                  <span>{t.percentage}% Solved</span>
                  <span>{t.remaining} Left</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 4. Search, Filters & Sorting Toolbar */}
      <div className="bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-4">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Search by problem title, number, or topic..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Filters Bar */}
          <div className="flex flex-wrap items-center gap-2.5">
            {/* Topic Filter */}
            <select
              value={selectedTopic}
              onChange={(e) => {
                setSelectedTopic(e.target.value);
                setCurrentPage(1);
              }}
              className="px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="All">All Topics</option>
              {topics.map((t) => (
                <option key={t.topic} value={t.topic}>
                  {t.topic} ({t.totalProblems})
                </option>
              ))}
            </select>

            {/* Difficulty Filter */}
            <select
              value={selectedDifficulty}
              onChange={(e) => {
                setSelectedDifficulty(e.target.value);
                setCurrentPage(1);
              }}
              className="px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="All">All Difficulties</option>
              <option value="Easy">Easy (19)</option>
              <option value="Medium">Medium (142)</option>
              <option value="Hard">Hard (39)</option>
            </select>

            {/* Status Filter */}
            <select
              value={selectedStatus}
              onChange={(e) => {
                setSelectedStatus(e.target.value);
                setCurrentPage(1);
              }}
              className="px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="All">All Statuses</option>
              <option value="solved">Solved</option>
              <option value="attempted">Attempted</option>
              <option value="unsolved">Unsolved</option>
            </select>

            {/* Sorting */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="number">Sort by # Number</option>
              <option value="title">Sort by Title</option>
              <option value="difficulty">Sort by Difficulty</option>
              <option value="status">Sort by Status</option>
            </select>

            <button
              onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
              className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100"
              title="Toggle sort direction"
            >
              <ArrowUpDown className="w-4 h-4" />
            </button>

            {/* Reset Filters */}
            <button
              onClick={handleResetFilters}
              className="px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-medium flex items-center gap-1.5 transition"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset
            </button>
          </div>
        </div>

        {/* Results Count Bar */}
        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
          <span>
            Showing <strong>{filteredProblems.length}</strong> matching problems (Page {currentPage} of {totalPages})
          </span>
          {selectedTopic !== 'All' && (
            <span className="font-semibold text-indigo-500">
              Filtering by: {selectedTopic}
            </span>
          )}
        </div>
      </div>

      {/* 5. Problem Table */}
      <div className="bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider border-b border-slate-100 dark:border-slate-800">
              <tr>
                <th className="py-3.5 px-4 w-16">#</th>
                <th className="py-3.5 px-4">Title</th>
                <th className="py-3.5 px-4">Topic</th>
                <th className="py-3.5 px-4 w-28">Difficulty</th>
                <th className="py-3.5 px-4 w-32">Status</th>
                <th className="py-3.5 px-4 w-28">Best Run</th>
                <th className="py-3.5 px-4 text-right w-28">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {paginatedProblems.length > 0 ? (
                paginatedProblems.map((prob) => (
                  <tr
                    key={prob.id}
                    onClick={() => handleSelectProblem(prob)}
                    className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition cursor-pointer group"
                  >
                    <td className="py-4 px-4 font-mono text-xs text-slate-400 font-semibold">
                      {prob.number}
                    </td>
                    <td className="py-4 px-4 font-semibold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition">
                      {prob.title}
                    </td>
                    <td className="py-4 px-4 text-xs text-slate-500 dark:text-slate-400">
                      {prob.topic}
                    </td>
                    <td className="py-4 px-4">
                      <span
                        className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold border ${getDifficultyBadge(
                          prob.difficulty
                        )}`}
                      >
                        {prob.difficulty}
                      </span>
                    </td>
                    <td className="py-4 px-4">{getStatusBadge(prob.status)}</td>
                    <td className="py-4 px-4 text-xs text-slate-500 dark:text-slate-400 font-mono">
                      {prob.bestExecutionTime ? `${prob.bestExecutionTime} ms` : '—'}
                    </td>
                    <td className="py-4 px-4 text-right">
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1 transition-transform">
                        {prob.status === 'solved' ? 'Review' : 'Solve'}
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-slate-400">
                    No problems match your current search and filter criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Bar */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between px-6 py-4 border-t border-slate-100 dark:border-slate-800 text-xs">
            <span className="text-slate-500 dark:text-slate-400">
              Page <strong>{currentPage}</strong> of <strong>{totalPages}</strong>
            </span>
            <div className="flex items-center gap-1.5">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-100 dark:hover:bg-slate-800 transition font-medium"
              >
                Previous
              </button>
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pNum = i + 1;
                if (totalPages > 5 && currentPage > 3) {
                  pNum = currentPage - 2 + i;
                  if (pNum > totalPages) pNum = totalPages - (4 - i);
                }
                return (
                  <button
                    key={pNum}
                    onClick={() => setCurrentPage(pNum)}
                    className={`w-8 h-8 rounded-lg text-xs font-semibold transition ${
                      currentPage === pNum
                        ? 'bg-indigo-600 text-white shadow-sm'
                        : 'border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    {pNum}
                  </button>
                );
              })}
              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-100 dark:hover:bg-slate-800 transition font-medium"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DSACatalogue;
