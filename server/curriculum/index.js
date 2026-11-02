/**
 * Canonical Local Curriculum Root
 * 100% self-contained local in-memory curriculum.
 * Zero external API dependencies, zero runtime generation.
 */

import { pythonCourse } from './python/index.js';
import { javaCourse } from './java/index.js';
import { javascriptCourse } from './javascript/index.js';
import { cCourse } from './c/index.js';
import { cppCourse } from './cpp/index.js';
import { validateCurriculum, validateCodingProblems } from './validator.js';
import { codingProblems, problemsByTopicId, problemsById, getPublicCodingProblem } from './codingProblems.js';

export const courses = {
  python: pythonCourse,
  java: javaCourse,
  javascript: javascriptCourse,
  c: cCourse,
  cpp: cppCourse
};

// Build fast in-memory index maps for O(1) lookup
export const topicsById = new Map();
export const topicsBySlug = new Map();
export const linearTopicSequence = [];

function indexCurriculum() {
  for (const [langKey, course] of Object.entries(courses)) {
    for (const level of course.levels) {
      for (const module of level.modules) {
        const topics = [];
        if (Array.isArray(module.topics) && module.topics.length > 0) {
          topics.push(...module.topics);
        } else if (Array.isArray(module.sections)) {
          for (const s of module.sections) {
            if (Array.isArray(s.topics)) topics.push(...s.topics);
          }
        }

        for (const topic of topics) {
          const rawProblems = problemsByTopicId.get(topic.id) || [];
          const problemList = Array.isArray(rawProblems) ? rawProblems : [rawProblems];
          const enrichedTopic = {
            ...topic,
            codingProblem: problemList.length > 0 ? getPublicCodingProblem(problemList[0]) : null,
            codingProblems: problemList.map(p => getPublicCodingProblem(p)),
            problemCount: problemList.length,
            languageId: course.id,
            levelId: level.id,
            moduleId: module.id
          };
          topicsById.set(topic.id, enrichedTopic);
          topicsBySlug.set(`${course.id}/${topic.slug}`, enrichedTopic);
          topicsBySlug.set(topic.slug, enrichedTopic);
          linearTopicSequence.push(enrichedTopic);
        }
      }
    }
  }
}

// Perform startup validation
try {
  validateCurriculum(courses);
  validateCodingProblems(codingProblems);
  indexCurriculum();
  console.log('[Curriculum] Local curriculum loaded successfully.');
  console.log('[Curriculum] Python: Beginner / Intermediate / Advanced');
  console.log('[Curriculum] Java: Beginner / Intermediate / Advanced');
  console.log('[Curriculum] JavaScript: Beginner / Intermediate / Advanced');
  console.log('[Curriculum] C: Beginner / Intermediate / Advanced');
  console.log('[Curriculum] C++: Beginner / Intermediate / Advanced');
} catch (err) {
  console.error('[Curriculum Startup Error]', err.message);
  throw err;
}

export {
  pythonCourse,
  javaCourse,
  javascriptCourse,
  cCourse,
  cppCourse,
  codingProblems,
  problemsByTopicId,
  problemsById,
  getPublicCodingProblem
};

export default courses;
