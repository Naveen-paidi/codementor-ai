import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  Circle,
  Lock,
  Play,
  ArrowRight,
  BookOpen,
  Terminal,
  Clock,
  Zap,
  Search,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import Badge from './ui/Badge.jsx';
import Button from './ui/Button.jsx';
import Card from './ui/Card.jsx';
import ProgressBar from './ui/ProgressBar.jsx';

export const LearningRoadmap = ({
  modules = [],
  activeTopicId,
  onSelectTopic,
  onStartPractice,
  completedTopics = []
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedModules, setExpandedModules] = useState({});

  const toggleModule = (modId) => {
    setExpandedModules(prev => ({
      ...prev,
      [modId]: !prev[modId]
    }));
  };

  // Filter modules/topics by search query
  const filteredModules = modules.map(mod => {
    if (!searchQuery.trim()) return mod;
    const matchesModule = mod.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchedTopics = mod.topics?.filter(t =>
      t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (t.summary && t.summary.toLowerCase().includes(searchQuery.toLowerCase()))
    ) || [];

    if (matchesModule || matchedTopics.length > 0) {
      return {
        ...mod,
        topics: matchesModule ? mod.topics : matchedTopics
      };
    }
    return null;
  }).filter(Boolean);

  return (
    <div className="space-y-6">
      {/* Search & Filter Toolbar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="relative w-full sm:w-96">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search topics, algorithms, or concepts..."
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
          />
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-500 self-end sm:self-auto">
          <span>{modules.length} Modules</span>
          <span>•</span>
          <span>
            {modules.reduce((acc, m) => acc + (m.topics?.length || 0), 0)} Canonical Topics
          </span>
        </div>
      </div>

      {/* Modules List */}
      <div className="space-y-5">
        {filteredModules.length === 0 ? (
          <div className="p-12 text-center bg-white rounded-2xl border border-slate-200">
            <p className="text-sm font-semibold text-slate-700">No matching topics found</p>
            <p className="text-xs text-slate-400 mt-1">Try searching for keywords like "variables", "loops", or "functions"</p>
          </div>
        ) : (
          filteredModules.map((mod, modIdx) => {
            const modId = mod.id || `mod-${modIdx}`;
            const isCollapsed = expandedModules[modId] === true;
            const topicsCount = mod.topics?.length || 0;
            const completedInMod = mod.topics?.filter(t =>
              completedTopics.includes(t.id) || completedTopics.includes(t.title)
            ).length || 0;
            const completionPercent = topicsCount > 0 ? Math.round((completedInMod / topicsCount) * 100) : 0;
            const isCompleted = completionPercent === 100 && topicsCount > 0;

            return (
              <div
                key={modId}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all duration-200 hover:border-slate-300"
              >
                {/* Module Header Bar */}
                <div
                  onClick={() => toggleModule(modId)}
                  className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer select-none bg-slate-50/50 hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-start sm:items-center gap-4">
                    <div className={`w-11 h-11 rounded-2xl flex items-center justify-center font-bold text-sm shrink-0 shadow-sm ${
                      isCompleted
                        ? 'bg-emerald-50 text-emerald-600 border border-emerald-200'
                        : 'bg-blue-50 text-blue-600 border border-blue-200'
                    }`}>
                      {isCompleted ? <CheckCircle2 className="w-5 h-5 text-emerald-600" /> : (mod.order || modIdx + 1)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider">
                          Module {mod.order || modIdx + 1}
                        </span>
                        {isCompleted ? (
                          <Badge variant="emerald">Completed</Badge>
                        ) : completionPercent > 0 ? (
                          <Badge variant="blue">In Progress</Badge>
                        ) : (
                          <Badge variant="default">Available</Badge>
                        )}
                      </div>
                      <h3 className="text-base font-bold text-slate-900 mt-0.5">{mod.title}</h3>
                      {mod.description && (
                        <p className="text-xs text-slate-500 mt-0.5 max-w-xl">{mod.description}</p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 self-end sm:self-auto">
                    <div className="w-32 hidden md:block">
                      <ProgressBar
                        value={completionPercent}
                        showPercentage={true}
                        size="sm"
                        color={isCompleted ? 'emerald' : 'blue'}
                      />
                    </div>
                    <button
                      className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
                    >
                      {isCollapsed ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Topics Container */}
                {!isCollapsed && (
                  <div className="p-4 sm:p-5 pt-2 border-t border-slate-100 space-y-2.5">
                    {mod.topics?.map((topic, topIdx) => {
                      const topicId = topic.id || `topic-${modIdx}-${topIdx}`;
                      const isTopicDone = completedTopics.includes(topic.id) || completedTopics.includes(topic.title);
                      const isCurrent = activeTopicId === topic.id || (!activeTopicId && modIdx === 0 && topIdx === 0);

                      return (
                        <div
                          key={topicId}
                          className={`p-3.5 sm:p-4 rounded-xl border transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                            isCurrent
                              ? 'bg-blue-50/60 border-blue-200 shadow-xs'
                              : isTopicDone
                              ? 'bg-emerald-50/30 border-emerald-100'
                              : 'bg-white hover:bg-slate-50/80 border-slate-200/80'
                          }`}
                        >
                          {/* Topic Details */}
                          <div className="flex items-start sm:items-center gap-3">
                            <div className="mt-0.5 sm:mt-0 shrink-0">
                              {isTopicDone ? (
                                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                              ) : isCurrent ? (
                                <Circle className="w-5 h-5 text-blue-600 fill-blue-600/20" />
                              ) : (
                                <Circle className="w-5 h-5 text-slate-300" />
                              )}
                            </div>

                            <div>
                              <div className="flex items-center gap-2">
                                <h4 className={`text-sm font-semibold ${isCurrent ? 'text-blue-900' : 'text-slate-800'}`}>
                                  {topic.title}
                                </h4>
                                {isCurrent && (
                                  <Badge variant="blue" className="text-[10px] py-0">Current</Badge>
                                )}
                              </div>
                              <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                                {topic.summary || 'Master syntax, conceptual semantics, and interactive implementation.'}
                              </p>
                            </div>
                          </div>

                          {/* Meta & Actions */}
                          <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
                            <span className="text-[11px] font-medium text-slate-500 flex items-center gap-1 hidden sm:flex">
                              <Clock className="w-3.5 h-3.5" />
                              {topic.estimatedMinutes || 15}m
                            </span>
                            <span className="text-[11px] font-semibold text-blue-600 flex items-center gap-0.5 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">
                              <Zap className="w-3 h-3 fill-blue-600 text-blue-600" />
                              +{topic.xp || 20} XP
                            </span>

                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => onSelectTopic(topic)}
                              className="text-xs py-1.5 px-3 bg-white"
                              leftIcon={<BookOpen className="w-3.5 h-3.5 text-slate-600" />}
                            >
                              Lesson
                            </Button>

                            <Button
                              size="sm"
                              variant={isCurrent ? 'primary' : 'secondary'}
                              onClick={() => onStartPractice ? onStartPractice(topic) : onSelectTopic(topic)}
                              className="text-xs py-1.5 px-3"
                              leftIcon={<Terminal className="w-3.5 h-3.5" />}
                            >
                              Practice
                            </Button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default LearningRoadmap;
