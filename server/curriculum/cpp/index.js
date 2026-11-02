/**
 * Complete C++ Course Entry
 * Aggregates Beginner, Intermediate, and Advanced tiers into a unified canonical course.
 *
 * Self-contained local curriculum source of truth.
 */

import { cppBeginner } from './beginner.js';
import { cppIntermediate } from './intermediate.js';
import { cppAdvanced } from './advanced.js';

export const cppCourse = {
  id: 'cpp',
  title: 'Modern C++ Systems & Architecture Curriculum',
  slug: 'cpp',
  icon: 'cpp',
  tagline: 'From modern language syntax to zero-overhead templates, STL, and move semantics.',
  description: 'A comprehensive, end-to-end C++ curriculum covering modern standards (C++11 through C++20), stream I/O, references, classes and RAII, virtual method tables, generic templates, the Standard Template Library (containers, algorithms, lambdas), smart pointers, move semantics, and multithreading.',
  levels: [
    cppBeginner,
    cppIntermediate,
    cppAdvanced
  ]
};

export default cppCourse;
