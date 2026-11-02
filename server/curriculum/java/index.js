/**
 * Complete Java Course Entry
 * Aggregates Beginner, Intermediate, and Advanced tiers into a unified canonical course.
 *
 * Self-contained local curriculum source of truth.
 */

import { javaBeginner } from './beginner.js';
import { javaIntermediate } from './intermediate.js';
import { javaAdvanced } from './advanced.js';

export const javaCourse = {
  id: 'java',
  title: 'Java Enterprise Mastery Curriculum',
  slug: 'java',
  icon: 'java',
  tagline: 'From core OOP to high-performance JVM engineering and Spring Boot microservices.',
  description: 'A comprehensive, end-to-end Java curriculum covering core language syntax, deep object-oriented programming, the Java Collections Framework, Streams, multithreading, JVM internals, garbage collection, and enterprise Spring Boot architectures.',
  levels: [
    javaBeginner,
    javaIntermediate,
    javaAdvanced
  ]
};

export default javaCourse;
