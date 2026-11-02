/**
 * Complete JavaScript Course Entry
 * Aggregates Beginner, Intermediate, and Advanced tiers into a unified canonical course.
 *
 * Self-contained local curriculum source of truth.
 */

import { javascriptBeginner } from './beginner.js';
import { javascriptIntermediate } from './intermediate.js';
import { javascriptAdvanced } from './advanced.js';

export const javascriptCourse = {
  id: 'javascript',
  title: 'JavaScript Mastery Curriculum',
  slug: 'javascript',
  icon: 'javascript',
  tagline: 'From browser scripts to full-stack Node.js architectures and V8 internals.',
  description: 'A comprehensive, end-to-end JavaScript curriculum covering foundational syntax, dynamic types, closures, prototypal inheritance, ES6+ features, asynchronous programming, DOM architecture, V8 Event Loop internals, and Node.js/Express backend engineering.',
  levels: [
    javascriptBeginner,
    javascriptIntermediate,
    javascriptAdvanced
  ]
};

export default javascriptCourse;
