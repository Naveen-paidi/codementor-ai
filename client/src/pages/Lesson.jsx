import React, { useEffect, useState } from 'react';
import { useLearning } from '../context/LearningContext.jsx';
import { api } from '../services/api.js';
import LessonViewer from '../components/LessonViewer.jsx';
import { ArrowLeft, Terminal, Sparkles, RefreshCw, AlertCircle } from 'lucide-react';
import Button from '../components/ui/Button.jsx';
import ErrorState from '../components/ui/ErrorState.jsx';

export const Lesson = ({ topic, onBackToCourse, onStartPractice }) => {
  const { selectedLanguage } = useLearning();
  const [lessonData, setLessonData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [interactiveOutput, setInteractiveOutput] = useState('');

  const fetchLesson = async (forceRegenerate = false) => {
    if (!topic) return;
    setLoading(true);
    setError(null);

    try {
      const res = await api.getLesson(topic.id, selectedLanguage, forceRegenerate);
      if (res.success && res.lesson) {
        setLessonData(res.lesson);
      } else {
        setError(res.error || 'Failed to retrieve AI-generated lesson.');
      }
    } catch (err) {
      setError(`Network error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLesson(false);
  }, [topic?.id, selectedLanguage]);

  const handleRunInteractiveCode = async (codeToRun) => {
    setIsRunning(true);
    setInteractiveOutput('');
    try {
      const res = await api.executeCode(selectedLanguage, codeToRun);
      if (res.success) {
        setInteractiveOutput(res.stdout || '(Executed successfully with no stdout output)');
      } else {
        setInteractiveOutput(res.stderr || 'Execution failed');
      }
    } catch (err) {
      setInteractiveOutput(`Network error: ${err.message}`);
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-2 sm:px-4 py-4 space-y-6">
      {/* Top Navigation Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-3.5 sm:p-4 rounded-2xl border border-[#DCE8E8] shadow-xs">
        <Button
          size="sm"
          variant="outline"
          onClick={onBackToCourse}
          leftIcon={<ArrowLeft className="w-4 h-4" />}
          className="self-start sm:self-auto text-xs"
        >
          Back to Curriculum
        </Button>

        <div className="flex items-center gap-2 self-end sm:self-auto">
          <Button
            size="sm"
            variant="outline"
            onClick={() => fetchLesson(true)}
            isLoading={loading}
            leftIcon={<RefreshCw className="w-3.5 h-3.5 text-[#64748B]" />}
            className="text-xs"
          >
            Regenerate AI Lesson
          </Button>

          <Button
            size="sm"
            variant="primary"
            onClick={() => onStartPractice(topic)}
            leftIcon={<Terminal className="w-4 h-4" />}
            className="text-xs"
          >
            Practice Challenge
          </Button>
        </div>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="rounded-2xl bg-white border border-[#DCE8E8] p-12 text-center space-y-4 shadow-xs">
          <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-[#ECFDF5] text-[#0F766E] border border-[#A7F3D0]">
            <Sparkles className="w-8 h-8 animate-spin" />
          </div>
          <h2 className="text-xl font-bold text-[#172B3A]">Structuring Lesson with AI Mentor...</h2>
          <p className="text-sm text-[#64748B] max-w-md mx-auto leading-relaxed">
            Synthesizing concepts, syntax rules, interactive runnable snippets, and common pitfalls for <strong className="text-[#172B3A]">{topic?.title}</strong> in <strong className="text-[#0F766E] uppercase">{selectedLanguage}</strong>.
          </p>
        </div>
      )}

      {/* Error State */}
      {!loading && error && (
        <ErrorState
          title="Unable to Load Lesson Content"
          message={error}
          onRetry={() => fetchLesson(true)}
        />
      )}

      {/* Main Lesson Content */}
      {!loading && !error && lessonData && (
        <LessonViewer
          topic={topic}
          lesson={lessonData}
          onStartPractice={() => onStartPractice(topic)}
          onRunInteractiveCode={handleRunInteractiveCode}
          isRunning={isRunning}
        />
      )}

      {/* Output Console for Interactive Runner */}
      {interactiveOutput && (
        <div className="max-w-4xl mx-auto rounded-2xl bg-[#041F20] border border-[#064E52] overflow-hidden shadow-md">
          <div className="flex items-center gap-2 px-4 py-2.5 bg-[#031516] border-b border-[#064E52] text-xs font-semibold text-[#A7F3D0]">
            <Terminal className="w-4 h-4 text-[#34D399]" />
            Snippet Execution Output
          </div>
          <div className="p-4 bg-[#041F20] font-mono text-xs text-[#34D399]">
            <pre className="whitespace-pre-wrap leading-relaxed">{interactiveOutput}</pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default Lesson;
