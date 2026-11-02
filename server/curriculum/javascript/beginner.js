/**
 * JavaScript Curriculum — Beginner Level (GeeksforGeeks-Style Structure)
 * Modules 1-3: Environment & Syntax, Functions & Scope, Arrays/Objects/Errors
 *
 * Each topic follows: Overview -> Objectives -> Prerequisites -> Concept ->
 * Detailed Explanation -> Syntax -> How It Works -> Examples ->
 * Common Mistakes -> Quick Checks -> Practice Questions -> Difficulty
 *
 * Self-contained local curriculum source of truth.
 */

export const javascriptBeginner = {
  id: 'javascript-beginner',
  title: 'Level 1: JavaScript Foundations & Core Syntax',
  level: 1,
  difficulty: 'beginner',
  description:
    'Master JavaScript fundamentals: V8 engine, var vs let vs const, dynamic types, strict equality, arrow functions, arrays, objects, and structured error handling.',

  modules: [
    // =============================================================
    // MODULE 1: JAVASCRIPT ENVIRONMENT & CORE SYNTAX
    // =============================================================
    {
      id: 'js-mod-introduction',
      title: 'JavaScript Environment & Syntax',
      order: 1,
      description:
        "The web's native language: V8 runtime, console, variables (let, const, var), and dynamic data types.",
      topics: [
        // ---------------------------------------------------------
        // TOPIC 1.1: WHAT IS JAVASCRIPT
        // ---------------------------------------------------------
        {
          id: 'js-what-is-javascript',
          title: 'What is JavaScript & JavaScript Engines',
          slug: 'what-is-javascript',
          description:
            'How JavaScript powers the modern web, browser runtimes, and JIT engines like V8 and SpiderMonkey.',
          learningObjectives: [
            'Define JavaScript and ECMAScript.',
            'Explain the role of the V8 JavaScript engine.',
            'Differentiate browser environments from Node.js runtimes.',
          ],
          prerequisites: [],
          conceptSummary:
            'JavaScript is a high-level, single-threaded, dynamically typed, multi-paradigm language compiled Just-In-Time (JIT) by modern engines like V8.',
          detailedExplanation:
            'Created in 1995 by Brendan Eich in 10 days, JavaScript has evolved via ECMAScript (ES6+) into the universal language of client and server software. Engines like Google V8 parse source code into an Abstract Syntax Tree (AST), compile it via Ignition bytecode, and optimize hot functions into machine code via TurboFan.',
          syntaxExplanation:
            'console.log("Hello from JavaScript runtime!");',
          howItWorks: [
            'Source -> AST -> Ignition Bytecode -> Profiler -> TurboFan Optimized Machine Code.',
          ],
          examples: [
            {
              title: 'Logging to Standard Console',
              code:
                'const platform = "Web & Server";\nconsole.log(`JavaScript executes on: ${platform}`);',
              explanation:
                'Demonstrates template literal string logging in modern JavaScript.',
            },
          ],
          commonMistakes: [
            {
              mistake: 'Confusing Java with JavaScript.',
              explanation:
                'Java is an enterprise statically typed JVM language; JavaScript is a dynamic ECMAScript-based web language.',
            },
          ],
          quickChecks: [
            {
              question:
                'Which engine powers JavaScript execution in Google Chrome and Node.js?',
              answer: 'V8',
              options: ['SpiderMonkey', 'V8', 'JavaScriptCore', 'Chakra'],
              correctAnswer: 1,
              explanation:
                "V8 is Google's open-source C++ JavaScript engine.",
            },
          ],
          practiceQuestions: [
            {
              title:
                'Log a formatted multi-line welcome banner using console.log and template literals',
              difficulty: 'easy',
              concepts: ['console', 'syntax'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 1.2: VARIABLES
        // ---------------------------------------------------------
        {
          id: 'js-variables-let-const-var',
          title: 'Variables: var vs let vs const',
          slug: 'variables-let-const-var',
          description:
            'Block scope vs function scope, temporal dead zone (TDZ), and variable reassignment rules.',
          learningObjectives: [
            'Distinguish between var (function-scoped) and let/const (block-scoped).',
            'Understand hoisting and the Temporal Dead Zone (TDZ).',
            'Follow modern best practices: const by default, let when reassigning, never var.',
          ],
          prerequisites: ['js-what-is-javascript'],
          conceptSummary:
            'Use `const` by default for immutable bindings and `let` for reassignable variables; avoid legacy `var`.',
          detailedExplanation:
            '`var` is function-scoped and hoisted with an initial value of `undefined`, causing frequent bugs. Introduced in ES6, `let` and `const` are block-scoped (confined to `{}`). Accessing them before declaration triggers a `ReferenceError` because they reside in the Temporal Dead Zone (TDZ). `const` prevents variable rebinding, though nested object properties remain mutable.',
          syntaxExplanation:
            'const PI = 3.14159;\nlet currentScore = 0;\ncurrentScore += 10; // Valid\n// PI = 3.14; -> TypeError: Assignment to constant variable.',
          howItWorks: [
            'Declarations are hoisted during compilation phase; let/const are not initialized until evaluation line.',
          ],
          examples: [
            {
              title: 'Block Scope Demonstration',
              code:
                'if (true) {\n    let blockScoped = "Hidden outside";\n    var functionScoped = "Leaks outside!";\n}\nconsole.log(functionScoped); // "Leaks outside!"\n// console.log(blockScoped); // ReferenceError!',
              explanation:
                'Demonstrates block scope isolation of let compared to var leakage.',
            },
          ],
          commonMistakes: [
            {
              mistake: 'Using var in modern JavaScript codebases.',
              explanation:
                'var leads to scope leakage and hoisting bugs. Always use const and let.',
            },
          ],
          quickChecks: [
            {
              question:
                'What error is thrown when accessing a let or const variable in its Temporal Dead Zone (before declaration)?',
              answer: 'ReferenceError',
              options: ['TypeError', 'ReferenceError', 'SyntaxError', 'RangeError'],
              correctAnswer: 1,
              explanation:
                'The TDZ prevents accessing block-scoped variables prior to declaration.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Refactor a legacy var-heavy script into modern const and let declarations',
              difficulty: 'easy',
              concepts: ['let', 'const', 'block scope'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 1.3: DATA TYPES
        // ---------------------------------------------------------
        {
          id: 'js-data-types-and-typeof',
          title: 'Data Types, typeof, and Type Coercion',
          slug: 'data-types-and-typeof',
          description:
            'The 7 primitives (string, number, bigint, boolean, undefined, symbol, null) and reference Object.',
          learningObjectives: [
            'Identify the 7 primitive types and reference types.',
            'Inspect types using the typeof operator.',
            'Understand implicit type coercion and the typeof null bug.',
          ],
          prerequisites: ['js-variables-let-const-var'],
          conceptSummary:
            'JavaScript has 7 primitive types (stored by value) and 1 reference type (`object`, stored by reference).',
          detailedExplanation:
            'Primitives are immutable: `string`, `number` (IEEE 754 64-bit float), `bigint`, `boolean`, `undefined` (unassigned), `null` (intentional absence), and `symbol`. Objects, arrays, and functions are reference types. Note: `typeof null === "object"` is a famous historical bug in JavaScript that cannot be fixed due to legacy web compatibility.',
          syntaxExplanation:
            'const count = 42;          // number\nconst name = "Dev";       // string\nconst active = true;      // boolean\nconst empty = null;       // null\nlet unassigned;           // undefined\nconsole.log(typeof empty); // "object" (historical quirk!)',
          howItWorks: [
            'V8 uses 32-bit/64-bit tagged pointers where the bottom 3 bits indicate type.',
          ],
          examples: [
            {
              title: 'Checking Types and Coercion',
              code:
                'console.log(typeof 100);        // "number"\nconsole.log(typeof "hello");    // "string"\nconsole.log(typeof undefined);  // "undefined"\nconsole.log(typeof Symbol());   // "symbol"\n// Type coercion:\nconsole.log("5" + 2);           // "52" (string concatenation)\nconsole.log("5" - 2);           // 3 (numeric coercion)',
              explanation:
                'Illustrates how typeof identifies values and how + differs from - in coercion.',
            },
          ],
          commonMistakes: [
            {
              mistake: 'Using typeof to check for null.',
              explanation:
                'typeof null returns "object". Check directly using myVar === null.',
            },
          ],
          quickChecks: [
            {
              question: 'What does typeof null evaluate to in JavaScript?',
              answer: '"object"',
              options: ['"null"', '"undefined"', '"object"', '"boolean"'],
              correctAnswer: 2,
              explanation:
                'Due to a legacy 1995 type tagging decision, typeof null returns "object".',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Write a helper function isPureObject(val) that accurately checks if a value is a non-null object',
              difficulty: 'easy',
              concepts: ['typeof', 'primitives', 'null'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 20,
        },

        // ---------------------------------------------------------
        // TOPIC 1.4: OPERATORS & EQUALITY
        // ---------------------------------------------------------
        {
          id: 'js-operators-and-equality',
          title: 'Operators and Strict Equality (=== vs ==)',
          slug: 'operators-and-equality',
          description:
            'Arithmetic, comparison, logical short-circuiting (&&, ||), nullish coalescing (??), and strict equality.',
          learningObjectives: [
            'Use strict equality (===) over loose equality (==).',
            'Master logical short-circuit evaluation.',
            'Use the nullish coalescing operator (??).',
          ],
          prerequisites: ['js-data-types-and-typeof'],
          conceptSummary:
            'Always use strict equality (`===`) to prevent type coercion bugs; use `??` for fallback defaults.',
          detailedExplanation:
            'Loose equality `==` coerces types implicitly (`"0" == false` is true!), causing subtle production bugs. Strict equality `===` checks both type and value without coercion. Logical `||` returns the right side if the left is falsy (`0`, `""`, `false`, `null`, `undefined`). The nullish coalescing operator `??` falls back ONLY on `null` or `undefined`, preserving valid falsy values like `0` or `false`.',
          syntaxExplanation:
            '0 === false; // false (strict)\n0 == false;  // true (loose coercion bug!)\n\nconst userPort = port ?? 3000; // 0 is preserved!',
          howItWorks: [
            '=== compares memory pointer addresses for objects, and values without coercion for primitives.',
          ],
          examples: [
            {
              title: 'Nullish Coalescing vs Logical OR',
              code:
                'const config = { timeout: 0 };\n// With || (incorrectly treats 0 as falsy and overwrites it):\nconst t1 = config.timeout || 5000; // 5000\n// With ?? (correctly treats 0 as a valid value):\nconst t2 = config.timeout ?? 5000; // 0\nconsole.log(`OR: ${t1}, Nullish: ${t2}`);',
              explanation:
                'Demonstrates why ?? is essential for numerical configurations.',
            },
          ],
          commonMistakes: [
            {
              mistake: 'Using == instead of === in comparisons.',
              explanation:
                'Loose equality creates unexpected coercion quirks. Always default to ===.',
            },
          ],
          quickChecks: [
            {
              question: 'What is the result of 0 === false in JavaScript?',
              answer: 'false',
              options: ['true', 'false', 'TypeError', 'undefined'],
              correctAnswer: 1,
              explanation:
                'Strict equality verifies both type (number vs boolean) and value, returning false.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Write safe configuration parser utilizing nullish coalescing and optional chaining',
              difficulty: 'easy',
              concepts: ['===', '??', 'short-circuiting'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 20,
        },
      ],
    },

    // =============================================================
    // MODULE 2: FUNCTIONS & SCOPE
    // =============================================================
    {
      id: 'js-mod-functions-scope',
      title: 'Functions & Scope',
      order: 2,
      description:
        'Function declarations, expressions, arrow functions, parameter defaults, and lexical scoping.',
      topics: [
        // ---------------------------------------------------------
        // TOPIC 2.1: FUNCTIONS & ARROW FUNCTIONS
        // ---------------------------------------------------------
        {
          id: 'js-functions-and-arrow-syntax',
          title: 'Functions: Declarations, Expressions & Arrow Functions',
          slug: 'functions-and-arrow-syntax',
          description:
            'Declaring functions, first-class functions, concise arrow syntax (=>), and lexical this binding.',
          learningObjectives: [
            'Write function declarations and expressions.',
            'Use modern arrow functions with implicit returns.',
            'Understand how arrow functions lexically bind this.',
          ],
          prerequisites: ['js-operators-and-equality'],
          conceptSummary:
            'Functions are first-class objects. Arrow functions `() => {}` provide a concise syntax and inherit `this` lexically.',
          detailedExplanation:
            'Function declarations `function fn() {}` are hoisted completely. Function expressions `const fn = function() {}` are not. Arrow functions `const fn = () => expr` offer concise one-line implicit returns and do not bind their own `this`, `arguments`, or `super`—they inherit them from the enclosing lexical scope.',
          syntaxExplanation:
            '// Traditional Declaration:\nfunction add(a, b) { return a + b; }\n\n// Concise Arrow Function (Implicit return):\nconst multiply = (a, b) => a * b;',
          howItWorks: [
            'Arrow functions resolve this through lexical environment record lookup rather than caller call site.',
          ],
          examples: [
            {
              title: 'Lexical this inside Object Callbacks',
              code:
                'const timer = {\n    seconds: 0,\n    start() {\n        // Arrow function retains timer as "this":\n        setTimeout(() => {\n            this.seconds++;\n            console.log("Elapsed:", this.seconds);\n        }, 100);\n    }\n};\ntimer.start();',
              explanation:
                'Arrow function preserves enclosing object this inside callback.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Using arrow functions as object methods when expecting this to refer to the object.',
              explanation:
                'Arrow functions do not bind this to the object; they inherit this from the outer scope (e.g. window/global).',
            },
          ],
          quickChecks: [
            {
              question:
                'Do arrow functions have their own this binding?',
              answer:
                'No, they capture this lexically from their enclosing scope',
              options: [
                'Yes, always',
                'No, they capture this lexically from their enclosing scope',
                'Only in strict mode',
                'Only in classes',
              ],
              correctAnswer: 1,
              explanation:
                'Arrow functions inherit this lexically from surrounding code.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Convert an array of numbers to their cubes using an inline arrow function',
              difficulty: 'easy',
              concepts: ['arrow functions', 'implicit return'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 20,
        },

        // ---------------------------------------------------------
        // TOPIC 2.2: SCOPE & HOISTING
        // ---------------------------------------------------------
        {
          id: 'js-scope-and-hoisting',
          title: 'Scope, Lexical Environments & Hoisting',
          slug: 'scope-and-hoisting',
          description:
            'Global, function, and block scope, scope chains, and declaration hoisting mechanisms.',
          learningObjectives: [
            'Explain global, function, and block scopes.',
            'Trace variable lookups through the scope chain.',
            'Understand how the engine hoists function declarations and var.',
          ],
          prerequisites: ['js-functions-and-arrow-syntax'],
          conceptSummary:
            'Scope dictates variable accessibility; inner scopes can access outer variables via the lexical scope chain.',
          detailedExplanation:
            'When code runs, JavaScript creates an execution context with an Environment Record. When resolving a variable, the engine checks the local scope; if absent, it traverses up the outer scope chain to the global scope. If not found, a `ReferenceError` is thrown.',
          syntaxExplanation:
            'const outer = "global";\nfunction levelOne() {\n    const inner = "level 1";\n    function levelTwo() {\n        console.log(outer, inner); // Resolved via scope chain\n    }\n    levelTwo();\n}',
          howItWorks: [
            'Environment Records hold reference pointers to outer parent environments forming the scope chain.',
          ],
          examples: [
            {
              title: 'Tracing Lexical Scope',
              code:
                'const taxRate = 0.08;\nfunction calculateTotal(price) {\n    const tax = price * taxRate; // Resolves taxRate from outer lexical scope\n    return price + tax;\n}\nconsole.log("Total with tax:", calculateTotal(100));',
              explanation:
                'Demonstrates resolving outer variables across scope boundaries.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Accidentally creating implicit global variables by assigning without let/const/var.',
              explanation:
                'In non-strict mode, undeclared assignments attach to the global window object. Use "use strict";.',
            },
          ],
          quickChecks: [
            {
              question:
                'What error occurs when accessing an undeclared variable not found anywhere on the scope chain?',
              answer: 'ReferenceError',
              options: [
                'TypeError',
                'ReferenceError',
                'ScopeError',
                'NullPointer',
              ],
              correctAnswer: 1,
              explanation:
                'ReferenceError is thrown when an identifier cannot be resolved.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Predict the console output of nested functions with shadowing variable names',
              difficulty: 'easy',
              concepts: ['scope chain', 'shadowing'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 20,
        },
      ],
    },

    // =============================================================
    // MODULE 3: ARRAYS, OBJECTS & ERROR HANDLING
    // =============================================================
    {
      id: 'js-mod-arrays-objects-errors',
      title: 'Arrays, Objects & Error Handling',
      order: 3,
      description:
        'Array methods, object property access, built-in Date/Math, and structured try-catch-finally handling.',
      topics: [
        // ---------------------------------------------------------
        // TOPIC 3.1: ARRAYS
        // ---------------------------------------------------------
        {
          id: 'js-arrays-and-methods',
          title: 'Arrays and Core Array Methods',
          slug: 'arrays-and-methods',
          description:
            'Creating dynamic arrays, indexing, push, pop, shift, unshift, slice, and splice.',
          learningObjectives: [
            'Create arrays and access items by index.',
            'Use mutating methods: push, pop, shift, unshift, splice.',
            'Use non-mutating slicing methods: slice, concat.',
          ],
          prerequisites: ['js-functions-and-arrow-syntax'],
          conceptSummary:
            'JavaScript arrays are dynamic, resizable ordered lists capable of holding elements of mixed types.',
          detailedExplanation:
            'Arrays are objects with special integer-keyed property handling and an auto-updating `.length` property. Mutating methods (`push`, `pop`, `shift`, `unshift`, `splice`) alter the original array. Non-mutating methods (`slice`, `concat`) return new array copies.',
          syntaxExplanation:
            'const list = [1, 2, 3];\nlist.push(4);          // Mutates: [1, 2, 3, 4]\nconst sub = list.slice(1, 3); // Non-mutating: [2, 3]',
          howItWorks: [
            'V8 optimizes arrays as packed elements in C++ memory until holes or mixed types force dictionary mode.',
          ],
          examples: [
            {
              title: 'Splice vs Slice Comparison',
              code:
                'const items = ["A", "B", "C", "D"];\n// slice returns a shallow copy of a portion:\nconst sliced = items.slice(1, 3); // ["B", "C"], items unchanged\n// splice removes elements in place:\nitems.splice(1, 2); // Removes 2 items starting at index 1\nconsole.log("Remaining items:", items); // ["A", "D"]',
              explanation:
                'Contrasts non-mutating slice with in-place mutating splice.',
            },
          ],
          commonMistakes: [
            {
              mistake: 'Confusing slice() with splice().',
              explanation:
                'slice() copies without modifying; splice() modifies the array in place.',
            },
          ],
          quickChecks: [
            {
              question:
                'Which method removes and returns the last element of a JavaScript array?',
              answer: 'pop()',
              options: ['shift()', 'pop()', 'unshift()', 'splice()'],
              correctAnswer: 1,
              explanation: 'pop() removes the item at index length - 1.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Implement a FIFO queue using push() and shift() methods on an array',
              difficulty: 'easy',
              concepts: ['arrays', 'push', 'shift'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 20,
        },

        // ---------------------------------------------------------
        // TOPIC 3.2: OBJECTS
        // ---------------------------------------------------------
        {
          id: 'js-objects-and-properties',
          title: 'Objects, Properties, and this',
          slug: 'objects-and-properties',
          description:
            'Object literal syntax, dot vs bracket notation, deleting properties, and object methods.',
          learningObjectives: [
            'Define objects using object literal syntax.',
            'Access properties via dot and bracket notation.',
            'Add, update, and delete properties.',
            'Understand this in object methods.',
          ],
          prerequisites: ['js-arrays-and-methods'],
          conceptSummary:
            'An object is an unordered collection of key-value pairs representing structured entity data.',
          detailedExplanation:
            'Keys in JavaScript objects are strings or Symbols. Dot notation `user.name` works for valid identifiers; bracket notation `user["first-name"]` is required for dynamic variables or keys with hyphens and spaces. Inside a normal method, `this` refers to the object calling the method.',
          syntaxExplanation:
            'const user = {\n    name: "Alex",\n    greet() {\n        return `Hello, I am ${this.name}`;\n    }\n};\nconsole.log(user.greet());',
          howItWorks: [
            'V8 uses Hidden Classes (Shapes) and inline caches for fast property access.',
          ],
          examples: [
            {
              title: 'Dynamic Bracket Property Access',
              code:
                'const key = "role";\nconst profile = {\n    name: "Sarah",\n    [key]: "Admin" // Computed property name\n};\nconsole.log(profile["role"]); // "Admin"',
              explanation:
                'Uses computed property names and dynamic bracket indexing.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Using dot notation with a variable name: obj.varName instead of obj[varName].',
              explanation:
                'Dot notation looks for a literal key named "varName", not the variable value.',
            },
          ],
          quickChecks: [
            {
              question:
                'How do you delete a property named age from an object person?',
              answer: 'delete person.age',
              options: [
                'person.age = null',
                'delete person.age',
                'person.remove("age")',
                'person.delete("age")',
              ],
              correctAnswer: 1,
              explanation:
                'The delete operator removes the property from the object entirely.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Create a bank account object with deposit, withdraw, and getBalance methods using this',
              difficulty: 'easy',
              concepts: ['objects', 'methods', 'this'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 20,
        },

        // ---------------------------------------------------------
        // TOPIC 3.3: ERROR HANDLING
        // ---------------------------------------------------------
        {
          id: 'js-error-handling-try-catch',
          title: 'Structured Error Handling: try, catch, finally, throw',
          slug: 'error-handling-try-catch',
          description:
            'Graceful error recovery, Error constructor, custom errors, and guaranteed finally cleanup.',
          learningObjectives: [
            'Intercept runtime errors with try-catch.',
            'Instantiate and throw custom Error objects.',
            'Use finally for cleanup actions.',
            'Understand error types (TypeError, ReferenceError, SyntaxError).',
          ],
          prerequisites: ['js-objects-and-properties'],
          conceptSummary:
            '`try-catch-finally` prevents unhandled exceptions from crashing JavaScript execution.',
          detailedExplanation:
            'When code in a `try` block throws an exception, control jumps immediately to `catch(err)`. The `finally` block executes regardless of whether an error occurred. Always throw instances of `Error` (`throw new Error("msg")`) rather than raw strings to ensure stack trace generation.',
          syntaxExplanation:
            'try {\n    throw new Error("Something went wrong");\n} catch (err) {\n    console.error("Caught:", err.message);\n} finally {\n    console.log("Cleanup executed.");\n}',
          howItWorks: [
            'Unwinds JavaScript call stack frames until finding a matching catch handler block.',
          ],
          examples: [
            {
              title: 'Safe JSON Parsing with Fallback',
              code:
                'function safeParseJSON(str, fallback = {}) {\n    try {\n        return JSON.parse(str);\n    } catch (err) {\n        console.warn("Invalid JSON, using fallback:", err.message);\n        return fallback;\n    }\n}\nconsole.log(safeParseJSON(\'{"valid": true}\'));\nconsole.log(safeParseJSON("malformed json"));',
              explanation:
                'Protects the application from crashing on invalid JSON strings.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Writing throw "Error message" instead of throw new Error("Error message").',
              explanation:
                'Throwing strings omits call stack trace metadata, making debugging difficult.',
            },
          ],
          quickChecks: [
            {
              question:
                'Which block of a try-catch statement is guaranteed to run whether an error occurs or not?',
              answer: 'finally',
              options: ['catch', 'else', 'finally', 'then'],
              correctAnswer: 2,
              explanation:
                'The finally block executes unconditionally after try and catch finish.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Write a validateUser(user) function that throws a TypeError if user.email is missing',
              difficulty: 'easy',
              concepts: ['try-catch', 'throw new Error'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 20,
        },
      ],
    },
  ],
};

export default javascriptBeginner;