import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { Trophy, Flame, Zap, Target, Award, ArrowUpRight } from 'lucide-react';
import Badge from './ui/Badge.jsx';
import Card from './ui/Card.jsx';
import StatCard from './ui/StatCard.jsx';

export const ProgressCard = ({ progressData }) => {
  if (!progressData) return null;

  const {
    xp = 0,
    streakDays = 1,
    level = 'Beginner',
    overallMastery = 70,
    masteryData = [],
    achievements = []
  } = progressData;

  const chartData = masteryData.map(m => ({
    name: m.topic?.length > 12 ? m.topic.substring(0, 10) + '...' : m.topic,
    score: m.score,
  }));

  return (
    <div className="space-y-6">
      {/* Top Metric Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {/* Overall Mastery */}
        <StatCard
          icon={Target}
          label="Overall Mastery"
          value={`${overallMastery}%`}
          subtitle="All modules combined"
          trend="+4% this week"
          trendPositive={true}
          color="teal"
        />

        {/* Current Streak */}
        <StatCard
          icon={Flame}
          label="Daily Streak"
          value={`${streakDays}d`}
          subtitle="Consistency streak"
          color="amber"
        />

        {/* Total XP */}
        <StatCard
          icon={Zap}
          label="Experience Points"
          value={xp}
          subtitle={`Current Tier: ${level}`}
          color="teal"
        />

        {/* Rank / Level */}
        <StatCard
          icon={Trophy}
          label="Scholar Rank"
          value={level}
          subtitle="Top 15% learner pace"
          color="emerald"
        />
      </div>

      {/* Middle Row: Mastery Breakdown & Achievements */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Topic Mastery Distribution */}
        <Card className="lg:col-span-8 p-5 flex flex-col justify-between" hoverEffect={false}>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-bold text-[#172B3A] text-base">Topic Skill Distribution</h3>
              <p className="text-xs text-[#64748B]">Evaluated from your code submissions and concept checks</p>
            </div>
            <Badge variant="teal">Real-time Telemetry</Badge>
          </div>

          <div className="h-56 w-full">
            {chartData.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <XAxis dataKey="name" tick={{ fontSize: 11, fill: '#64748B' }} />
                  <YAxis domain={[0, 100]} tick={{ fontSize: 11, fill: '#64748B' }} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#064E52', color: '#FFFFFF', borderColor: '#0F766E', borderRadius: '12px', fontSize: '12px' }}
                    itemStyle={{ color: '#34D399' }}
                  />
                  <Bar dataKey="score" fill="#0F766E" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <div className="h-full flex items-center justify-center text-xs text-[#64748B]">
                Complete your first practice problem to populate mastery analytics.
              </div>
            )}
          </div>
        </Card>

        {/* Achievements / Milestones */}
        <Card className="lg:col-span-4 p-5" hoverEffect={false}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-[#172B3A] text-base flex items-center gap-2">
              <Award className="w-5 h-5 text-[#F59E0B]" />
              Achievements
            </h3>
            <span className="text-xs font-semibold text-[#64748B]">
              {achievements.length} Unlocked
            </span>
          </div>

          <div className="space-y-3">
            {achievements.length > 0 ? (
              achievements.slice(0, 3).map((ach, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-xl bg-[#F5FAFA] border border-[#DCE8E8]"
                >
                  <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xs shrink-0">
                    🏆
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-[#172B3A] truncate">{ach.title || ach.name}</p>
                    <p className="text-[11px] text-[#64748B] line-clamp-1">{ach.description}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="space-y-2.5">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#F5FAFA] border border-[#DCE8E8]">
                  <span className="text-lg">⚡</span>
                  <div>
                    <p className="text-xs font-semibold text-[#172B3A]">First Compilation</p>
                    <p className="text-[11px] text-[#64748B]">Successfully executed your first test</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#F5FAFA] border border-[#DCE8E8]">
                  <span className="text-lg">🔥</span>
                  <div>
                    <p className="text-xs font-semibold text-[#172B3A]">On Fire</p>
                    <p className="text-[11px] text-[#64748B]">Kept a 3-day continuous streak</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProgressCard;
