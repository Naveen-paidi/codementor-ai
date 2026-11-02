/**
 * CodeMentor Internal Platform Documentation Collection
 * -----------------------------------------------------
 * Official descriptions of platform features, modules, architecture, courses, and FAQs.
 */

export const PLATFORM_DOCUMENTS = [
  {
    id: 'doc-codementor-platform-overview',
    title: 'CodeMentor Platform Overview & Architecture',
    content: `# CodeMentor Platform Overview
CodeMentor is an AI-powered programming and computer science learning platform designed for students, educators, and educational institutions.
The platform combines interactive structured curricula, a sandboxed multilingual code execution engine, comprehensive Data Structures & Algorithms practice, and an intelligent AI Mentor.

## Core Features
1. **Interactive Course Learning**: Step-by-step curricula for Python, Java, JavaScript, C, and C++ covering Beginner, Intermediate, and Advanced tiers.
2. **Real-time Code Execution**: In-browser Monaco editor paired with a secure backend compiler execution harness supporting Python 3.10+, Java 21/25, Node.js v22, GCC/Clang for C and C++.
3. **AI Code Review**: Automated sub-10 second static analysis and feedback on time complexity, code quality, potential edge case vulnerabilities, and styling.
4. **DSA Practice Arena**: 200 curated coding problems with hidden test case evaluation and GitHub-style 365-day activity heatmaps.
5. **AI Mentor Chat & Voice**: Conversational assistance powered by OpenRouter LLMs with speech-to-text (STT) and text-to-speech (TTS) capabilities.
6. **Multi-College Learning Management System (LMS)**: Enterprise multi-tenancy supporting College Admins, Faculty assignments, Student memberships, and platform-wide analytics.`,
    category: 'PLATFORM_INFORMATION',
    topic: 'Platform Overview',
    subtopic: 'Architecture & Features',
    sourceType: 'INTERNAL_CURRICULUM',
    sourceName: 'CodeMentor Documentation',
    sourceUrl: '/dashboard',
    version: '1.0'
  },
  {
    id: 'doc-codementor-dsa-module',
    title: 'CodeMentor Data Structures and Algorithms (DSA) Module',
    content: `# CodeMentor Data Structures & Algorithms (DSA) Module
The CodeMentor DSA Module is an enterprise-grade problem-solving environment designed for placement preparation and competitive programming.

## Catalogue Structure
- **Total Problems**: 200 curated algorithmic challenges categorized into Easy, Medium, and Hard difficulty levels.
- **Key Algorithmic Topics**:
  1. Arrays & Prefix Sums
  2. Strings & Two Pointers
  3. Hash Tables & Frequency Counting
  4. Linked Lists & Fast-Slow Pointers
  5. Stacks & Monotonic Stacks
  6. Queues & Deques
  7. Binary Trees & Tree Traversals
  8. Binary Search Trees (BST)
  9. Heaps & Priority Queues
  10. Graphs, BFS & DFS
  11. Dynamic Programming (1D & 2D)
  12. Greedy Algorithms
  13. Backtracking
  14. Binary Search
  15. Bit Manipulation
  16. Math & Number Theory

## Practice & Evaluation Architecture
- Every problem includes problem statements, formal constraints, sample inputs/outputs, starter code for Python, Java, JavaScript, C, and C++.
- Submissions execute against both public test cases and strict hidden test cases with timeouts to prevent infinite loops (Time Limit Exceeded).
- Solved problems immediately update the student's 365-day GitHub-style contribution heatmap and calculate active streak days.`,
    category: 'PLATFORM_INFORMATION',
    topic: 'DSA Module',
    subtopic: 'Practice Arena & Heatmap',
    sourceType: 'INTERNAL_CURRICULUM',
    sourceName: 'CodeMentor Documentation',
    sourceUrl: '/dsa',
    version: '1.0'
  },
  {
    id: 'doc-codementor-ai-mentor',
    title: 'CodeMentor AI Mentor & Conversational Assistant',
    content: `# CodeMentor AI Mentor
The CodeMentor AI Mentor is an intelligent, context-aware pedagogical tutor.

## Capabilities
1. **Conceptual Explanations**: Breaks down complex algorithms and programming concepts using real-world analogies, visual flowcharts, and clear code examples.
2. **Code Debugging**: Analyzes compiler error logs (NullPointerException, Segmentation Fault, TypeError, SyntaxError) and guides students to identify bug root causes without giving away the full answer immediately.
3. **Personalized Progress Tracking**: Understands the student's enrolled courses, completed topics, DSA performance, and provides grounded recommendations on what lesson to study next.
4. **Voice Assistance**: Supports real-time hands-free audio recording and spoken AI responses.
5. **Strict Scope Discipline**: Polite refusal of non-technical questions (cooking recipes, entertainment, sports scores) to maintain pedagogical focus.`,
    category: 'PLATFORM_INFORMATION',
    topic: 'AI Mentor',
    subtopic: 'Assistant Capabilities',
    sourceType: 'INTERNAL_CURRICULUM',
    sourceName: 'CodeMentor Documentation',
    sourceUrl: '/ai-mentor',
    version: '1.0'
  }
];

