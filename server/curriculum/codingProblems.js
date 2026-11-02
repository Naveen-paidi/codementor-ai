/**
 * Canonical Coding Problems Database for Topic Practice Sessions.
 * Master aggregator spanning Python, Java, JavaScript, C, and C++.
 * Re-exports the unified problem suite from ./practice/index.js.
 */

import { codingProblems } from './practice/index.js';

export {
  codingProblems,
  pythonProblems,
  javaProblems,
  javascriptProblems,
  cProblems,
  cppProblems,
  problemsByLanguage,
  getProblemsByLanguage,
  getProblemsByTopic,
  getProblemsByLevel,
  getProblemById
} from './practice/index.js';

export const problemsByTopicId = new Map();
export const problemsById = new Map();

for (const p of codingProblems) {
  if (!problemsByTopicId.has(p.topicId)) {
    problemsByTopicId.set(p.topicId, []);
  }
  problemsByTopicId.get(p.topicId).push(p);
  problemsById.set(p.id, p);
}

/**
 * Get safe public problem object (stripping solutionCode and strictly hiding hidden test cases).
 */
export function getPublicCodingProblem(problem, selectedLanguage = null) {
  if (!problem) return null;

  const publicTestCases = (problem.testCases || [])
    .filter(tc => !tc.isHidden)
    .map(tc => ({
      id: tc.id,
      input: tc.input,
      expectedOutput: tc.expectedOutput,
      isHidden: false
    }));

  const starterCodeMap = problem.starterCode || {};
  const activeStarter = selectedLanguage
    ? (starterCodeMap[selectedLanguage] || Object.values(starterCodeMap)[0] || '')
    : starterCodeMap;

  return {
    id: problem.id,
    topicId: problem.topicId,
    languageId: problem.languageId,
    level: problem.level || 'beginner',
    title: problem.title,
    slug: problem.slug,
    difficulty: problem.difficulty,
    problemStatement: problem.problemStatement || problem.description,
    description: problem.description || problem.problemStatement,
    inputFormat: problem.inputFormat,
    outputFormat: problem.outputFormat,
    constraints: problem.constraints || [],
    examples: problem.examples || [],
    starterCode: activeStarter,
    starterCodes: starterCodeMap,
    concepts: problem.concepts || [],
    sampleTestCases: publicTestCases,
    sampleInput: publicTestCases[0]?.input || '',
    sampleOutput: publicTestCases[0]?.expectedOutput || '',
    totalTestCount: (problem.testCases || []).length
  };
}

export default codingProblems;
