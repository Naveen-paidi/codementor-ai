/**
 * Complete C Course Entry
 * Aggregates Beginner, Intermediate, and Advanced tiers into a unified canonical course.
 *
 * Self-contained local curriculum source of truth.
 */

import { cBeginner } from './beginner.js';
import { cIntermediate } from './intermediate.js';
import { cAdvanced } from './advanced.js';

export const cCourse = {
  id: 'c',
  title: 'C Systems Programming Curriculum',
  slug: 'c',
  icon: 'c',
  tagline: 'From procedural foundations to low-level systems programming and memory architecture.',
  description: 'A comprehensive, end-to-end C curriculum covering compilation mechanics, pointer arithmetic, memory layout, null-terminated strings, structs and unions, dynamic heap allocation, preprocessor macros, file streams, bit manipulation, and systems engineering.',
  levels: [
    cBeginner,
    cIntermediate,
    cAdvanced
  ]
};

export default cCourse;
