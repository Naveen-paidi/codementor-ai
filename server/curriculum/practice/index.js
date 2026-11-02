/**
 * Master Aggregator for Coding Practice Problems
 * Unified problem bank spanning all 5 programming languages:
 * Python, Java, JavaScript, C, and C++.
 *
 * Every problem adheres to strict canonical standards:
 * - Exactly 10 test cases (3 visible/sample + 7 hidden)
 * - Complete starterCode for each supported runtime
 * - Full metadata: difficulty, constraints, examples, problem statements
 */

import { pythonProblems } from './pythonProblems.js';
import { javaProblems } from './javaProblems.js';
import { javascriptProblems } from './javascriptProblems.js';
import { cProblems } from './cProblems.js';
import { cppProblems } from './cppProblems.js';

export { pythonProblems } from './pythonProblems.js';
export { javaProblems } from './javaProblems.js';
export { javascriptProblems } from './javascriptProblems.js';
export { cProblems } from './cProblems.js';
export { cppProblems } from './cppProblems.js';

export const codingProblems = [
  ...pythonProblems,
  ...javaProblems,
  ...javascriptProblems,
  ...cProblems,
  ...cppProblems
];

export const problemsByLanguage = {
  python: pythonProblems,
  java: javaProblems,
  javascript: javascriptProblems,
  c: cProblems,
  cpp: cppProblems
};

export function getProblemsByLanguage(lang) {
  return problemsByLanguage[lang.toLowerCase()] || [];
}

export function getProblemsByTopic(topicId) {
  return codingProblems.filter(p => p.topicId === topicId);
}

export function getProblemsByLevel(level) {
  return codingProblems.filter(p => p.level === level.toLowerCase());
}

export function getProblemById(id) {
  return codingProblems.find(p => p.id === id);
}

export default codingProblems;
