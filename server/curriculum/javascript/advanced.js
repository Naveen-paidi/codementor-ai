/**
 * JavaScript Curriculum — Advanced Level (GeeksforGeeks-Style Structure)
 * Modules 7-9: V8 Engine & Event Loop, Memory/Security/Performance,
 * Node.js & Express Backend Architecture.
 *
 * Each topic follows: Overview -> Objectives -> Prerequisites -> Concept ->
 * Detailed Explanation -> Syntax -> How It Works -> Examples ->
 * Common Mistakes -> Quick Checks -> Practice Questions -> Difficulty
 *
 * Self-contained local curriculum source of truth.
 */

export const javascriptAdvanced = {
  id: 'javascript-advanced',
  title: 'Level 3: JavaScript Internals, Event Loop & Full-Stack Systems',
  level: 3,
  difficulty: 'advanced',
  description:
    'Master the V8 engine, Execution Contexts, Call Stack, Event Loop, Microtask vs Macrotask prioritization, Generators, Memory Leak profiling, Node.js runtime architecture, Express middleware, and API Security.',

  modules: [
    // =============================================================
    // MODULE 7: V8 INTERNALS & THE EVENT LOOP
    // =============================================================
    {
      id: 'js-mod-event-loop-internals',
      title: 'V8 Engine & The Event Loop Architecture',
      order: 7,
      description:
        'Execution context phases, Call Stack, Task Queues, Microtasks vs Macrotasks, and Generator coroutines.',
      topics: [
        // ---------------------------------------------------------
        // TOPIC 7.1: EVENT LOOP
        // ---------------------------------------------------------
        {
          id: 'js-event-loop-microtasks',
          title: 'The Event Loop: Microtasks vs Macrotasks',
          slug: 'event-loop-microtasks',
          description:
            'Understanding how single-threaded JavaScript handles non-blocking concurrency: Call Stack, Microtask Queue, and Task Queue.',
          learningObjectives: [
            'Trace code execution through Call Stack, Web APIs, Microtask Queue, and Macrotask Queue.',
            'Identify microtasks (Promise.then, queueMicrotask, MutationObserver).',
            'Identify macrotasks (setTimeout, setInterval, setImmediate, I/O).',
            'Explain why microtask queues drain completely before the next macrotask runs.',
          ],
          prerequisites: ['javascript-intermediate'],
          conceptSummary:
            'The Event Loop monitors the Call Stack; when empty, it executes ALL pending microtasks before processing the next macrotask.',
          detailedExplanation:
            'JavaScript is single-threaded. When synchronous code finishes on the Call Stack, the Event Loop checks the Microtask Queue (Promises, `queueMicrotask`). The engine drains the ENTIRE microtask queue before picking a single task from the Macrotask Queue (`setTimeout`, user clicks, I/O). Starving the event loop with infinite microtasks freezes the browser UI completely.',
          syntaxExplanation:
            'console.log(1);\nsetTimeout(() => console.log(4), 0); // Macrotask\nPromise.resolve().then(() => console.log(3)); // Microtask\nconsole.log(2);\n// Output order: 1, 2, 3, 4',
          howItWorks: [
            'The event loop executes one macrotask, then performs a microtask checkpoint draining microtasks, then renders.',
          ],
          examples: [
            {
              title: 'Microtask vs Macrotask Priority Proof',
              code:
                'console.log("Start");\nsetTimeout(() => console.log("Timeout (Macrotask)"), 0);\nPromise.resolve().then(() => console.log("Promise 1 (Microtask)"))\n                 .then(() => console.log("Promise 2 (Microtask)"));\nconsole.log("End");\n// Logs: Start -> End -> Promise 1 -> Promise 2 -> Timeout',
              explanation:
                'Demonstrates microtasks running ahead of scheduled timeouts.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Believing setTimeout(fn, 0) runs immediately on the next line.',
              explanation:
                'setTimeout is a macrotask; it must wait for the Call Stack to clear and all microtasks to finish.',
            },
          ],
          quickChecks: [
            {
              question:
                'Which queue has higher priority and executes first when the Call Stack empties?',
              answer: 'Microtask Queue (Promises)',
              options: [
                'Macrotask Queue (setTimeout)',
                'Microtask Queue (Promises)',
                'Animation Frame Queue',
                'I/O Polling Queue',
              ],
              correctAnswer: 1,
              explanation:
                'The microtask queue executes immediately upon call stack completion.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Predict the exact sequence of 6 console.logs mixing setTimeout, queueMicrotask, and Promises',
              difficulty: 'advanced',
              concepts: ['event loop', 'microtasks', 'macrotasks'],
            },
          ],
          difficulty: 'advanced',
          estimatedMinutes: 30,
        },

        // ---------------------------------------------------------
        // TOPIC 7.2: GENERATORS
        // ---------------------------------------------------------
        {
          id: 'js-iterators-and-generators',
          title: 'Iterators, Iterables & Generator Coroutines',
          slug: 'iterators-and-generators',
          description:
            'Symbol.iterator protocol, custom iterables, generator functions (function*), and cooperative multitasking with yield.',
          learningObjectives: [
            'Implement Symbol.iterator to make custom objects iterable.',
            'Write generator functions using function* and yield.',
            'Pass values into generators using gen.next(value).',
          ],
          prerequisites: ['js-event-loop-microtasks'],
          conceptSummary:
            'Generators (`function*`) produce iterables that can pause and resume execution using `yield`, enabling lazy stream evaluation.',
          detailedExplanation:
            'Any object implementing `[Symbol.iterator]()` conforming to `{ next(): { value, done } }` can be looped via `for...of`. Generator functions provide an elegant way to author iterators. When `yield` executes, the function pauses its execution context, returning a value and waiting for the next `.next()` invocation.',
          syntaxExplanation:
            'function* idGenerator() {\n    let id = 1;\n    while (true) {\n        yield id++;\n    }\n}\nconst gen = idGenerator();\nconsole.log(gen.next().value); // 1\nconsole.log(gen.next().value); // 2',
          howItWorks: [
            "V8 retains the generator's execution context, registers, and stack pointers on the heap.",
          ],
          examples: [
            {
              title: 'Bidirectional Communication with Generators',
              code:
                'function* conversational() {\n    const question = yield "What is your name?";\n    const answer = yield `Hello ${question}, how old are you?`;\n    return `Finished with ${answer}`;\n}\nconst bot = conversational();\nconsole.log(bot.next().value);          // "What is your name?"\nconsole.log(bot.next("Sam").value);      // "Hello Sam, how old are you?"',
              explanation:
                'Passes values back into paused generators via next(value).',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Iterating an infinite generator with spread operator [...gen], causing an out-of-memory crash.',
              explanation:
                'Infinite generators cannot be collected into fixed arrays; consume them with loops or take() helpers.',
            },
          ],
          quickChecks: [
            {
              question:
                'What symbol key must an object implement to be iterable by the for...of loop in JavaScript?',
              answer: 'Symbol.iterator',
              options: [
                'Symbol.iterable',
                'Symbol.iterator',
                'Symbol.for',
                'Symbol.next',
              ],
              correctAnswer: 1,
              explanation:
                'The built-in Symbol.iterator defines the iteration protocol.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Build a custom range(start, end, step) generator function',
              difficulty: 'advanced',
              concepts: ['generators', 'function*', 'yield'],
            },
          ],
          difficulty: 'advanced',
          estimatedMinutes: 25,
        },
      ],
    },

    // =============================================================
    // MODULE 8: MEMORY MANAGEMENT, SECURITY & PERFORMANCE
    // =============================================================
    {
      id: 'js-mod-memory-security',
      title: 'Memory Management, Security & Performance',
      order: 8,
      description:
        'Garbage collection (Mark and Sweep), preventing memory leaks, Web Security (XSS, CSRF, CORS), and debounce/throttle.',
      topics: [
        // ---------------------------------------------------------
        // TOPIC 8.1: MEMORY LEAKS
        // ---------------------------------------------------------
        {
          id: 'js-memory-leaks-and-gc',
          title: 'Memory Leaks and Garbage Collection',
          slug: 'memory-leaks-and-gc',
          description:
            'V8 Mark-and-Sweep garbage collection, detached DOM trees, uncleared timers, and WeakMap/WeakSet.',
          learningObjectives: [
            'Understand V8 reachability and Mark-and-Sweep garbage collection.',
            'Diagnose common memory leaks (forgotten setInterval, detached DOM nodes, closures).',
            'Use WeakMap and WeakSet for garbage-collectable metadata storage.',
          ],
          prerequisites: ['javascript-intermediate'],
          conceptSummary:
            'V8 reclaims memory via Mark-and-Sweep; objects remain in memory as long as they are reachable from roots (window/global).',
          detailedExplanation:
            'An object is garbage collected only when it is unreachable from root references. Common memory leaks occur when: 1. `setInterval` callbacks hold references to variables, 2. Detached DOM elements remain referenced in arrays, 3. Massive closures outlive their usefulness. `WeakMap` holds weak object references, allowing keys to be garbage collected automatically.',
          syntaxExplanation:
            'const metadata = new WeakMap();\n// When userElement is removed from DOM and dereferenced,\n// its metadata is cleaned up by the GC automatically:\nmetadata.set(userElement, { visits: 5 });',
          howItWorks: [
            'V8 divides heap into New Space (Scavenger nursery) and Old Space (Major Mark-Sweep-Compact).',
          ],
          examples: [
            {
              title: 'Preventing Timer Leaks',
              code:
                'class Component {\n    constructor() {\n        this.timer = setInterval(() => this.heartbeat(), 1000);\n    }\n    heartbeat() { console.log("ping"); }\n    destroy() {\n        clearInterval(this.timer); // Crucial! Prevents memory leak.\n    }\n}',
              explanation:
                'Cleans up timers during component teardown to avoid memory leaks.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Storing DOM nodes in regular Arrays or Objects without cleaning them up after removal from the DOM.',
              explanation:
                'Creates detached DOM tree leaks. Use WeakMap or remove references.',
            },
          ],
          quickChecks: [
            {
              question:
                'Why does WeakMap prevent memory leaks compared to Map?',
              answer:
                'Keys are held weakly; if no other references exist, the entry is garbage collected',
              options: [
                'It compresses strings',
                'Keys are held weakly and auto-collected by GC',
                'It runs in a separate thread',
                'It writes to disk',
              ],
              correctAnswer: 1,
              explanation:
                'WeakMap entries are garbage collected when keys lose external references.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Write an event listener manager that tracks and removes all registered listeners on destroy',
              difficulty: 'advanced',
              concepts: ['memory leaks', 'cleanup', 'WeakMap'],
            },
          ],
          difficulty: 'advanced',
          estimatedMinutes: 25,
        },

        // ---------------------------------------------------------
        // TOPIC 8.2: WEB SECURITY
        // ---------------------------------------------------------
        {
          id: 'js-web-security-xss-csrf-cors',
          title: 'Web Security: XSS, CSRF, and CORS',
          slug: 'web-security-xss-csrf-cors',
          description:
            'Defending web applications against Cross-Site Scripting (XSS), Cross-Site Request Forgery (CSRF), and configuring CORS.',
          learningObjectives: [
            'Prevent XSS through input sanitization and textContent (avoid innerHTML).',
            'Prevent CSRF using SameSite cookies and Anti-CSRF tokens.',
            'Configure Cross-Origin Resource Sharing (CORS) headers properly.',
          ],
          prerequisites: ['javascript-intermediate'],
          conceptSummary:
            'Defend against XSS by sanitizing inputs and using CSP; defend against CSRF with `SameSite=Strict` cookies and tokens; control origin access via CORS.',
          detailedExplanation:
            '1. **XSS (Cross-Site Scripting)**: Attackers inject malicious scripts into pages. Prevent by avoiding `innerHTML` and using CSP (Content Security Policy) headers. 2. **CSRF (Cross-Site Request Forgery)**: Malicious sites trick authenticated browsers into making unauthorized requests. Defend with `SameSite=Strict/Lax` cookie attributes and CSRF tokens. 3. **CORS**: Browser security mechanism preventing cross-origin requests unless explicitly permitted by `Access-Control-Allow-Origin`.',
          syntaxExplanation:
            '// Secure cookie headers:\n// Set-Cookie: token=xyz; HttpOnly; Secure; SameSite=Strict\n\n// CORS response header:\n// Access-Control-Allow-Origin: https://trusted-client.com',
          howItWorks: [
            'Browser enforces Same-Origin Policy (SOP) across protocol, host, and port boundaries.',
          ],
          examples: [
            {
              title: 'Safe DOM Insertion Preventing XSS',
              code:
                'const userInput = \'<img src="x" onerror="alert(1)">\';\n// VULNERABLE TO XSS:\n// div.innerHTML = userInput;\n\n// SECURE (Treated strictly as text content):\nconst safeDiv = document.createElement("div");\nsafeDiv.textContent = userInput;\nconsole.log("Safe text:", safeDiv.textContent);',
              explanation:
                'Uses textContent to prevent script execution.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Setting Access-Control-Allow-Origin: * on endpoints that process credentials or sensitive data.',
              explanation:
                'Wildcard CORS allows any malicious website to read sensitive user data via authenticated browser sessions.',
            },
          ],
          quickChecks: [
            {
              question:
                'Which cookie flag prevents client-side JavaScript (like document.cookie) from accessing a session cookie, neutralizing token theft via XSS?',
              answer: 'HttpOnly',
              options: ['Secure', 'HttpOnly', 'SameSite', 'Path'],
              correctAnswer: 1,
              explanation:
                'HttpOnly cookies cannot be read by JavaScript, protecting against token theft.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Audit a code snippet and eliminate 3 critical XSS and CSRF vulnerabilities',
              difficulty: 'advanced',
              concepts: ['XSS', 'CSRF', 'CORS', 'security'],
            },
          ],
          difficulty: 'advanced',
          estimatedMinutes: 25,
        },
      ],
    },

    // =============================================================
    // MODULE 9: NODE.JS, EXPRESS & BACKEND ARCHITECTURE
    // =============================================================
    {
      id: 'js-mod-nodejs-express-backend',
      title: 'Node.js, Express & Backend Architecture',
      order: 9,
      description:
        'Node.js runtime architecture, CommonJS vs ESM, Express middleware pipeline, and JWT authentication.',
      topics: [
        // ---------------------------------------------------------
        // TOPIC 9.1: NODE.JS RUNTIME
        // ---------------------------------------------------------
        {
          id: 'js-nodejs-runtime-and-modules',
          title: 'Node.js Runtime & Module Systems (CJS vs ESM)',
          slug: 'nodejs-runtime-and-modules',
          description:
            'The libuv event loop, non-blocking I/O, Buffer, EventEmitter, and migrating between CommonJS and ES Modules.',
          learningObjectives: [
            'Explain Node.js architecture (V8 + libuv thread pool).',
            'Contrast CommonJS (require/module.exports) with ES Modules (import/export).',
            'Use EventEmitter and Streams for data pipelines.',
          ],
          prerequisites: ['javascript-intermediate'],
          conceptSummary:
            'Node.js runs V8 on the server, using `libuv` for asynchronous I/O and supporting both CommonJS and ECMAScript Modules (ESM).',
          detailedExplanation:
            'Node.js wraps V8 and libuv to provide asynchronous I/O (files, network) on top of an event-driven loop. CommonJS uses synchronous `require()`; modern ESM uses asynchronous static `import`. Node.js uses `"type": "module"` in `package.json` to enable ESM project-wide.',
          syntaxExplanation:
            '// CommonJS:\n// const fs = require("fs");\n// module.exports = myFunc;\n\n// ES Modules (Modern):\nimport fs from "fs/promises";\nexport default myFunc;',
          howItWorks: [
            'libuv maintains a 4-thread pool for filesystem and DNS lookups, and an epoll/kqueue event loop for sockets.',
          ],
          examples: [
            {
              title: 'Streaming Files with Node.js',
              code:
                'import fs from "fs";\n// Memory-efficient file stream pipeline:\n// const readStream = fs.createReadStream("huge-log.txt");\n// const writeStream = fs.createWriteStream("copy.txt");\n// readStream.pipe(writeStream);',
              explanation:
                'Transfers gigabytes of data in fixed 64KB chunks without RAM bloat.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Performing synchronous file operations (fs.readFileSync) in a production web server route.',
              explanation:
                'Synchronous I/O blocks the entire single-threaded event loop, freezing all concurrent user requests.',
            },
          ],
          quickChecks: [
            {
              question:
                'Which C library provides the cross-platform asynchronous I/O event loop in Node.js?',
              answer: 'libuv',
              options: ['V8', 'libuv', 'glibc', 'libevent'],
              correctAnswer: 1,
              explanation:
                'libuv provides the event loop and thread pool in Node.js.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Build a custom EventEmitter that tracks and emits user login events',
              difficulty: 'advanced',
              concepts: ['Node.js', 'EventEmitter', 'libuv'],
            },
          ],
          difficulty: 'advanced',
          estimatedMinutes: 25,
        },

        // ---------------------------------------------------------
        // TOPIC 9.2: EXPRESS & JWT
        // ---------------------------------------------------------
        {
          id: 'js-express-rest-and-jwt',
          title: 'Express REST APIs and JWT Authentication',
          slug: 'express-rest-and-jwt',
          description:
            'Building production REST APIs with Express, middleware chains, error middleware, and stateless JWT token authentication.',
          learningObjectives: [
            'Structure Express applications with routes, controllers, and middleware.',
            'Write custom middleware (logging, authentication, error handling).',
            'Issue, sign, and verify JSON Web Tokens (JWT) for stateless authentication.',
          ],
          prerequisites: ['js-nodejs-runtime-and-modules'],
          conceptSummary:
            'Express is a minimal Node.js framework centered on a middleware pipeline; JWT provides stateless user authentication.',
          detailedExplanation:
            'In Express, incoming HTTP requests flow through a chain of middleware functions `(req, res, next)`. Authentication commonly uses JSON Web Tokens (JWT): upon login, the server signs a payload with a secret key; subsequent requests pass the token in the `Authorization: Bearer <token>` header, verified without server-side database lookups.',
          syntaxExplanation:
            'import express from "express";\nconst app = express();\napp.use(express.json()); // Body parser middleware\n\nconst authMiddleware = (req, res, next) => {\n    const token = req.headers.authorization?.split(" ")[1];\n    if (!token) return res.status(401).json({ error: "Unauthorized" });\n    // Verify token...\n    next();\n};\n\napp.get("/api/protected", authMiddleware, (req, res) => {\n    res.json({ message: "Access granted" });\n});',
          howItWorks: [
            'Express router sequentially executes matched middleware layers until a response is sent.',
          ],
          examples: [
            {
              title: 'Centralized Error Handling Middleware in Express',
              code:
                'import express from "express";\nconst app = express();\n\n// Error handling middleware has 4 arguments (err, req, res, next):\napp.use((err, req, res, next) => {\n    console.error("[ERROR]", err.stack);\n    res.status(err.status || 500).json({\n        error: err.message || "Internal Server Error"\n    });\n});',
              explanation:
                'Catches all thrown errors across route handlers in one centralized place.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Omitting the next() call inside a middleware function without ending the response.',
              explanation:
                'The HTTP request hangs forever and eventually times out.',
            },
          ],
          quickChecks: [
            {
              question:
                'How many arguments must an Express centralized error-handling middleware function take?',
              answer: '4 arguments (err, req, res, next)',
              options: [
                '2 arguments (req, res)',
                '3 arguments (req, res, next)',
                '4 arguments (err, req, res, next)',
                '1 argument (err)',
              ],
              correctAnswer: 2,
              explanation:
                'Express identifies error handlers by their explicit 4-parameter signature.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Implement an Express route that issues a signed JWT token on valid credentials and validates it in a protected endpoint',
              difficulty: 'advanced',
              concepts: ['Express', 'middleware', 'JWT'],
            },
          ],
          difficulty: 'advanced',
          estimatedMinutes: 30,
        },
      ],
    },
  ],
};

export default javascriptAdvanced;