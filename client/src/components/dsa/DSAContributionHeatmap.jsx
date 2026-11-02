import React, { useState } from 'react';
import { Calendar, Flame, Trophy, Award, CheckCircle2, ChevronRight, X } from 'lucide-react';

export const DSAContributionHeatmap = ({ heatmapData, stats, onSelectDay }) => {
  const [hoveredDay, setHoveredDay] = useState(null);
  const [selectedDayDetail, setSelectedDayDetail] = useState(null);

  const days = heatmapData?.days || [];

  // Group 365 days into columns of 7 days (weeks)
  const weeks = [];
  let currentWeek = [];

  // If the first day is not Sunday (dayOfWeek > 0), pad initial days of first week
  const firstDay = days[0];
  const padStart = firstDay ? firstDay.dayOfWeek : 0;
  for (let p = 0; p < padStart; p++) {
    currentWeek.push(null);
  }

  days.forEach((day) => {
    currentWeek.push(day);
    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  });

  if (currentWeek.length > 0) {
    while (currentWeek.length < 7) {
      currentWeek.push(null);
    }
    weeks.push(currentWeek);
  }

  // Month labels positioning across the weeks
  const monthLabels = [];
  let lastMonth = '';
  weeks.forEach((week, wIdx) => {
    const validDay = week.find((d) => d !== null);
    if (validDay) {
      const monthName = new Date(validDay.date).toLocaleDateString('en-US', { month: 'short' });
      if (monthName !== lastMonth) {
        monthLabels.push({ index: wIdx, label: monthName });
        lastMonth = monthName;
      }
    }
  });

  const getCellColor = (day) => {
    if (!day) return 'opacity-0 pointer-events-none';
    switch (day.level) {
      case 4:
        return 'bg-emerald-500 hover:bg-emerald-400 border border-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.4)]';
      case 3:
        return 'bg-emerald-600 hover:bg-emerald-500 border border-emerald-500/70';
      case 2:
        return 'bg-emerald-700/80 hover:bg-emerald-600 border border-emerald-600/50';
      case 1:
        return 'bg-emerald-900/60 dark:bg-emerald-950/80 hover:bg-emerald-800 border border-emerald-800/60';
      default:
        return 'bg-slate-200 dark:bg-slate-800/80 hover:border-slate-400 dark:hover:border-slate-600 border border-slate-300/40 dark:border-slate-700/40';
    }
  };

  const handleDayClick = (day) => {
    if (!day) return;
    setSelectedDayDetail(day);
    if (onSelectDay) onSelectDay(day);
  };

  return (
    <div className="bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm backdrop-blur-md">
      {/* Top Meta Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white flex items-center gap-2">
              DSA Activity Heatmap
              <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-medium border border-emerald-500/20">
                Past 365 Days
              </span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Contribution grid tracking unique first-time solves and practice submissions
            </p>
          </div>
        </div>

        {/* Streaks Callout */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400">
            <Flame className="w-4 h-4 fill-amber-500 text-amber-500 animate-pulse" />
            <div className="text-xs font-semibold">
              <span>{stats?.currentStreak ?? 0}</span> Day Streak
            </div>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400">
            <Trophy className="w-4 h-4 text-purple-500" />
            <div className="text-xs font-semibold">
              <span>{stats?.longestStreak ?? 0}</span> Best
            </div>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400">
            <Award className="w-4 h-4 text-blue-500" />
            <div className="text-xs font-semibold">
              <span>{stats?.activeDays ?? 0}</span> Active Days
            </div>
          </div>
        </div>
      </div>

      {/* Grid Container */}
      <div className="overflow-x-auto pt-6 pb-2">
        <div className="min-w-[760px]">
          {/* Month Labels Header */}
          <div className="flex text-[11px] font-medium text-slate-400 dark:text-slate-500 mb-2 pl-8">
            {monthLabels.map((m, idx) => (
              <span
                key={idx}
                style={{
                  width: `${(weeks.length / 12) * 14}px`,
                  display: 'inline-block'
                }}
              >
                {m.label}
              </span>
            ))}
          </div>

          {/* Heatmap Grid */}
          <div className="flex gap-1.5 items-start">
            {/* Weekday Labels Column */}
            <div className="flex flex-col gap-1.5 text-[10px] text-slate-400 dark:text-slate-500 pr-2 pt-0.5 select-none">
              <span className="h-[12px] leading-[12px]">Sun</span>
              <span className="h-[12px] leading-[12px]">Mon</span>
              <span className="h-[12px] leading-[12px]">Tue</span>
              <span className="h-[12px] leading-[12px]">Wed</span>
              <span className="h-[12px] leading-[12px]">Thu</span>
              <span className="h-[12px] leading-[12px]">Fri</span>
              <span className="h-[12px] leading-[12px]">Sat</span>
            </div>

            {/* Week Columns */}
            <div className="flex gap-1.5 flex-1">
              {weeks.map((week, wIdx) => (
                <div key={wIdx} className="flex flex-col gap-1.5">
                  {week.map((day, dIdx) => (
                    <div
                      key={dIdx}
                      onClick={() => handleDayClick(day)}
                      onMouseEnter={() => setHoveredDay(day)}
                      onMouseLeave={() => setHoveredDay(null)}
                      className={`w-[12px] h-[12px] rounded-[3px] transition-all cursor-pointer ${getCellColor(
                        day
                      )}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legend & Tooltip Summary */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs">
        <div className="text-slate-500 dark:text-slate-400 flex items-center gap-2">
          {hoveredDay ? (
            <span className="font-medium text-slate-800 dark:text-slate-200">
              📅 {hoveredDay.date}:{' '}
              <strong className="text-emerald-500">{hoveredDay.solvedCount}</strong> unique solved,{' '}
              <strong>{hoveredDay.submissionCount}</strong> submissions
            </span>
          ) : (
            <span>Hover over any day square to see solved problem details</span>
          )}
        </div>

        {/* Intensity Legend */}
        <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-[11px]">
          <span>Less</span>
          <div className="w-[12px] h-[12px] rounded-[3px] bg-slate-200 dark:bg-slate-800/80 border border-slate-300/40 dark:border-slate-700/40" />
          <div className="w-[12px] h-[12px] rounded-[3px] bg-emerald-900/60 dark:bg-emerald-950/80 border border-emerald-800/60" />
          <div className="w-[12px] h-[12px] rounded-[3px] bg-emerald-700/80 border border-emerald-600/50" />
          <div className="w-[12px] h-[12px] rounded-[3px] bg-emerald-600 border border-emerald-500/70" />
          <div className="w-[12px] h-[12px] rounded-[3px] bg-emerald-500 border border-emerald-400" />
          <span>More</span>
        </div>
      </div>

      {/* Selected Day Details Modal */}
      {selectedDayDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl w-full max-w-md p-6 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-emerald-500" />
                <h4 className="font-bold text-slate-900 dark:text-white">
                  Activity for {selectedDayDetail.date}
                </h4>
              </div>
              <button
                onClick={() => setSelectedDayDetail(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-4 space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                  <div className="text-xs text-slate-500 dark:text-slate-400">First-Time Solves</div>
                  <div className="text-xl font-bold text-emerald-500">
                    {selectedDayDetail.solvedCount}
                  </div>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                  <div className="text-xs text-slate-500 dark:text-slate-400">Total Submissions</div>
                  <div className="text-xl font-bold text-blue-500">
                    {selectedDayDetail.submissionCount}
                  </div>
                </div>
              </div>

              {selectedDayDetail.problems && selectedDayDetail.problems.length > 0 ? (
                <div>
                  <div className="text-xs font-semibold text-slate-600 dark:text-slate-300 mb-2">
                    Problems Solved on This Day:
                  </div>
                  <div className="space-y-1.5 max-h-48 overflow-y-auto">
                    {selectedDayDetail.problems.map((title, pIdx) => (
                      <div
                        key={pIdx}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-500/5 border border-emerald-500/20 text-xs font-medium text-slate-800 dark:text-slate-200"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span className="truncate">{title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-4 text-xs text-slate-400 dark:text-slate-500">
                  {selectedDayDetail.submissionCount > 0
                    ? 'Submissions attempted on this day.'
                    : 'No DSA activity recorded on this day.'}
                </div>
              )}
            </div>

            <button
              onClick={() => setSelectedDayDetail(null)}
              className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 text-xs font-semibold transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DSAContributionHeatmap;
