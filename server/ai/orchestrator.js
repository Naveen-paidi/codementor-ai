import { explainConcept, answerDoubt } from './tutorAgent.js';
import { reviewFailedCode } from './codeReviewerAgent.js';
import { generatePracticeQuestion } from './practiceAgent.js';
import { generateLearnerRecommendations, calculateTopicMastery } from './progressAgent.js';
import { searchCurriculumContext } from './ragService.js';
import { isGeminiConfigured } from '../config/gemini.js';

export const aiOrchestrator = {
  isConfigured: isGeminiConfigured,
  explainConcept,
  answerDoubt,
  reviewFailedCode,
  generatePracticeQuestion,
  generateLearnerRecommendations,
  calculateTopicMastery,
  searchCurriculumContext
};

export default aiOrchestrator;
