import React, { useEffect, useState } from 'react';
import { useLearning } from '../context/LearningContext.jsx';
import { api } from '../services/api.js';
import LearningRoadmap from '../components/LearningRoadmap.jsx';
import Button from '../components/ui/Button.jsx';
import Badge from '../components/ui/Badge.jsx';
import Card from '../components/ui/Card.jsx';
import { BookOpen, Sparkles, Terminal, ArrowRight, Layers, CheckCircle2 } from 'lucide-react';

export const Course = ({ onSelectTopicForLesson, onStartPracticeForTopic }) => {
  const { selectedLanguage, setActiveTopic } = useLearning();
  const [course, setCourse] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourse = async () => {
      setLoading(true);
      try {
        const res = await api.getCourse(selectedLanguage);
        if (res.course) {
          setCourse(res.course);
        }
      } catch (err) {
        console.warn('Failed to fetch course curriculum:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchCourse();
  }, [selectedLanguage]);

  const handleTopicClick = (topic) => {
    setActiveTopic(topic);
    if (onSelectTopicForLesson) onSelectTopicForLesson(topic);
  };

  const handlePracticeClick = (topic) => {
    setActiveTopic(topic);
    if (onStartPracticeForTopic) onStartPracticeForTopic(topic);
  };

  // Determine all available modules based on whether course has levels or flat modules
  const getDisplayModules = () => {
    if (!course) return [];

    if (course.levels && Array.isArray(course.levels) && course.levels.length > 0) {
      if (selectedLevel === 'all') {
        return course.levels.flatMap(lvl => lvl.modules || []);
      }
      const lvlObj = course.levels.find(l => l.level === Number(selectedLevel) || l.id === selectedLevel);
      return lvlObj?.modules || [];
    }

    return course.modules || [];
  };

  const displayModules = getDisplayModules();

  return (
    <div className="max-w-6xl mx-auto px-2 sm:px-4 py-4 space-y-6">
      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#ECFDF5] via-white to-[#F5FAFA] border border-[#DCE8E8] shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <Badge variant="teal" className="uppercase font-bold">{selectedLanguage} Track</Badge>
            <span className="text-xs text-[#64748B]">Canonical University Standard</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#172B3A] tracking-tight">
            {course?.language || selectedLanguage.toUpperCase()} Curriculum
          </h1>
          <p className="text-sm text-[#64748B] mt-1 max-w-2xl leading-relaxed">
            {course?.overview || 'A comprehensive, mastery-based path designed to take you from foundational syntax to robust algorithmic implementations.'}
          </p>
        </div>

        <Button
          size="md"
          variant="primary"
          onClick={() => {
            const firstTopic = displayModules?.[0]?.topics?.[0];
            if (firstTopic) handleTopicClick(firstTopic);
          }}
          rightIcon={<ArrowRight className="w-4 h-4" />}
          className="shrink-0"
        >
          Resume Curriculum
        </Button>
      </div>

      {/* Level Filter Tabs (if curriculum supports levels) */}
      {course?.levels && course.levels.length > 0 && (
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          <button
            onClick={() => setSelectedLevel('all')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              selectedLevel === 'all'
                ? 'bg-[#0F766E] text-white shadow-xs'
                : 'bg-white text-[#172B3A] hover:bg-[#ECFDF5] border border-[#DCE8E8]'
            }`}
          >
            All Levels
          </button>
          {course.levels.map((lvl) => (
            <button
              key={lvl.level || lvl.id}
              onClick={() => setSelectedLevel(lvl.level || lvl.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                selectedLevel === (lvl.level || lvl.id)
                  ? 'bg-[#0F766E] text-white shadow-xs'
                  : 'bg-white text-[#172B3A] hover:bg-[#ECFDF5] border border-[#DCE8E8]'
              }`}
            >
              <span>Level {lvl.level}:</span>
              <span>{lvl.name || `Stage ${lvl.level}`}</span>
            </button>
          ))}
        </div>
      )}

      {/* Curriculum Visual Roadmap */}
      {loading ? (
        <div className="h-64 bg-white rounded-2xl border border-[#DCE8E8] flex items-center justify-center text-[#64748B] text-sm gap-2">
          <Sparkles className="w-5 h-5 animate-spin text-[#0F766E]" /> Loading canonical curriculum graph...
        </div>
      ) : (
        <LearningRoadmap
          modules={displayModules}
          onSelectTopic={handleTopicClick}
          onStartPractice={handlePracticeClick}
          completedTopics={['Introduction', 'Syntax & Indentation']}
        />
      )}
    </div>
  );
};

export default Course;
