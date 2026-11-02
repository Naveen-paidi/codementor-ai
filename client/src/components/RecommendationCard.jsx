import React from 'react';
import { Sparkles, AlertCircle, CheckCircle, ArrowRight, Lightbulb, Compass } from 'lucide-react';
import Badge from './ui/Badge.jsx';
import Button from './ui/Button.jsx';
import Card from './ui/Card.jsx';

export const RecommendationCard = ({ recommendations, onNavigateToTopic }) => {
  if (!recommendations) return null;

  const {
    weakTopics = [],
    strongTopics = [],
    recommendedRevision = [],
    recommendedNextTopic = 'Loops & range()',
    recommendedDifficulty = 'medium',
    studyTip
  } = recommendations;

  return (
    <Card className="p-6 space-y-6" hoverEffect={false}>
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#DCE8E8] pb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-[#ECFDF5] border border-[#A7F3D0] flex items-center justify-center text-[#0F766E]">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-[#172B3A] text-base">AI Personalized Learning Path</h3>
            <p className="text-xs text-[#64748B]">Real-time pedagogical guidance synthesized by AI Mentor</p>
          </div>
        </div>

        <Badge variant="teal">Adaptive Recommendations</Badge>
      </div>

      {/* Recommended Next Step Box */}
      <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#ECFDF5] via-[#F0FDF4] to-[#EFF6FF] border border-[#B2E8E4] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#0F766E] block mb-1">
            Priority Recommended Target
          </span>
          <h4 className="text-base font-bold text-[#172B3A]">{recommendedNextTopic}</h4>
          <p className="text-xs text-[#64748B] mt-0.5">
            Difficulty: <span className="capitalize font-semibold text-amber-700">{recommendedDifficulty}</span>
          </p>
        </div>

        <Button
          size="sm"
          variant="primary"
          onClick={() => onNavigateToTopic && onNavigateToTopic(recommendedNextTopic)}
          rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
          className="shrink-0"
        >
          Jump to Topic
        </Button>
      </div>

      {/* Weak Areas vs Strong Areas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Weak Areas needing review */}
        <div className="p-4 rounded-xl bg-amber-50/40 border border-amber-200/80">
          <div className="flex items-center gap-2 mb-2 text-xs font-bold text-amber-800">
            <AlertCircle className="w-4 h-4 text-amber-600" />
            <span>Identified Revision Areas (&lt;65% Mastery)</span>
          </div>
          {weakTopics.length > 0 ? (
            <div className="space-y-1.5 mt-2">
              {weakTopics.map((topic, i) => (
                <div key={i} className="flex items-center justify-between text-xs text-slate-700 bg-white p-2 rounded-lg border border-amber-100">
                  <span className="font-medium">{topic}</span>
                  <span className="text-[10px] text-amber-700 font-semibold uppercase">Needs Review</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xs text-slate-500 italic">No weak topics detected. Great fundamentals!</p>
          )}

          {recommendedRevision.length > 0 && (
            <p className="text-[11px] text-slate-600 mt-2.5 pt-2 border-t border-amber-100">
              <span className="font-semibold text-slate-700">Rationale: </span>
              {recommendedRevision[0].reason}
            </p>
          )}
        </div>

        {/* Strong Areas mastered */}
        <div className="p-4 rounded-xl bg-emerald-50/40 border border-emerald-200/80">
          <div className="flex items-center gap-2 mb-2 text-xs font-bold text-emerald-800">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <span>Mastered Proficiencies (&gt;80% Mastery)</span>
          </div>
          {strongTopics.length > 0 ? (
            <div className="space-y-1.5 mt-2">
              {strongTopics.map((topic, i) => (
                <div key={i} className="flex items-center justify-between text-xs text-slate-700 bg-white p-2 rounded-lg border border-emerald-100">
                  <span className="font-medium">{topic}</span>
                  <span className="text-[10px] text-emerald-700 font-semibold uppercase">Mastered</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xs text-slate-500 italic">Continue submitting problems to achieve master status!</p>
          )}
        </div>
      </div>

      {/* AI Study Tip */}
      {studyTip && (
        <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5 text-xs text-slate-700">
          <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-slate-900">AI Mentor Advice: </span>
            <span>{studyTip}</span>
          </div>
        </div>
      )}
    </Card>
  );
};

export default RecommendationCard;
