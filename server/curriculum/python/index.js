/**
 * Complete Python Course Entry
 * Aggregates Beginner, Intermediate, and Advanced tiers into a unified canonical course.
 *
 * Self-contained local curriculum source of truth.
 */

import { pythonBeginner } from './beginner.js';
import { pythonIntermediate } from './intermediate.js';
import { pythonAdvanced } from './advanced.js';

export const pythonCourse = {
  id: 'python',
  title: 'Python Mastery Curriculum',
  slug: 'python',
  icon: 'python',
  tagline: 'From absolute fundamentals to high-performance systems engineering.',
  description: 'A comprehensive, end-to-end curriculum taking you from zero programming experience through foundational syntax, data structures, object-oriented design, systems concurrency, and production architecture.',
  levels: [
    pythonBeginner,
    pythonIntermediate,
    pythonAdvanced
  ]
};

export default pythonCourse;
