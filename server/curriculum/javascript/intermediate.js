/**
 * JavaScript Curriculum — Intermediate Level (GeeksforGeeks-Style Structure)
 * Modules 4-6: Modern ES6+ & Functional Arrays, Prototypes/Classes/Closures,
 * Asynchronous JavaScript & DOM Architecture.
 *
 * Each topic follows: Overview -> Objectives -> Prerequisites -> Concept ->
 * Detailed Explanation -> Syntax -> How It Works -> Examples ->
 * Common Mistakes -> Quick Checks -> Practice Questions -> Difficulty
 *
 * Self-contained local curriculum source of truth.
 */

export const javascriptIntermediate = {
  id: 'javascript-intermediate',
  title: 'Level 2: Modern ES6+, DOM, Classes & Async JavaScript',
  level: 2,
  difficulty: 'intermediate',
  description:
    'Master modern ES6+ (destructuring, spread/rest), functional array pipelines (map/filter/reduce), closures, prototypal inheritance, classes, DOM events, and asynchronous programming with Promises and async/await.',

  modules: [
    // =============================================================
    // MODULE 4: MODERN ES6+ & FUNCTIONAL ARRAYS
    // =============================================================
    {
      id: 'js-mod-modern-syntax-arrays',
      title: 'Modern ES6+ & Functional Array Methods',
      order: 4,
      description:
        'Destructuring, spread/rest operators, and functional pipelines: map, filter, reduce, find, some, and every.',
      topics: [
        // ---------------------------------------------------------
        // TOPIC 4.1: DESTRUCTURING, SPREAD, REST
        // ---------------------------------------------------------
        {
          id: 'js-destructuring-spread-rest',
          title: 'Destructuring, Spread, and Rest Operators',
          slug: 'destructuring-spread-rest',
          description:
            'Extracting data with array and object destructuring, shallow copying with spread (...), and collecting rest parameters.',
          learningObjectives: [
            'Destructure objects and arrays with default values and renaming.',
            'Clone and merge objects/arrays with spread (...).',
            'Collect remaining parameters using rest syntax.',
          ],
          prerequisites: ['javascript-beginner'],
          conceptSummary:
            'Destructuring unpacks values from arrays or objects; spread `...` expands elements; rest `...` collects values into an array.',
          detailedExplanation:
            'Destructuring simplifies extracting nested values: `const { name, age = 18 } = user`. The spread operator `...arr` expands an iterable into individual elements, commonly used to shallow clone or merge objects (`{ ...objA, ...objB }`). Rest syntax `(...args)` in function headers bundles remaining arguments into an array.',
          syntaxExplanation:
            'const [first, ...rest] = [10, 20, 30, 40];\nconst user = { id: 1, name: "Jordan" };\nconst updated = { ...user, active: true }; // Merged copy',
          howItWorks: [
            'V8 compiles destructuring into sequential property loads and iterator protocol calls.',
          ],
          examples: [
            {
              title: 'Object Destructuring with Renaming and Defaults',
              code:
                'const response = { status: 200, data: { user_name: "elena" } };\nconst { status, data: { user_name: username }, timeout = 5000 } = response;\nconsole.log(`Status: ${status}, User: ${username}, Timeout: ${timeout}ms`);',
              explanation:
                'Extracts nested property, renames it, and assigns a default fallback.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Believing spread creates a deep copy of nested objects.',
              explanation:
                'Spread only performs a shallow clone; nested objects still share memory references.',
            },
          ],
          quickChecks: [
            {
              question:
                'What does the spread operator {...obj1, ...obj2} do when keys collide?',
              answer:
                'Properties from obj2 overwrite matching properties from obj1',
              options: [
                'Throws a TypeError',
                'Properties from obj2 overwrite matching properties from obj1',
                'Both values are saved in an array',
                'Properties from obj1 take priority',
              ],
              correctAnswer: 1,
              explanation:
                'Later spread properties overwrite earlier matching keys.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Write a function sumAll(...numbers) using rest parameters and reduce',
              difficulty: 'intermediate',
              concepts: ['rest parameters', 'spread', 'destructuring'],
            },
          ],
          difficulty: 'intermediate',
          estimatedMinutes: 20,
        },

        // ---------------------------------------------------------
        // TOPIC 4.2: FUNCTIONAL ARRAY METHODS
        // ---------------------------------------------------------
        {
          id: 'js-array-functional-methods',
          title: 'Array Methods: map, filter, reduce & find',
          slug: 'array-functional-methods',
          description:
            'Declarative array transformations and aggregations without manual for-loops.',
          learningObjectives: [
            'Transform data with map().',
            'Filter elements with filter().',
            'Accumulate totals with reduce().',
            'Locate elements with find() and findIndex().',
          ],
          prerequisites: ['js-destructuring-spread-rest'],
          conceptSummary:
            'Functional array methods (`map`, `filter`, `reduce`) enable declarative, non-mutating data transformation pipelines.',
          detailedExplanation:
            '`map(fn)` creates a new array by applying `fn` to every item. `filter(fn)` creates an array with elements passing a predicate. `reduce(fn, init)` boils an array down to a single value (sum, object, histogram). These methods return new values without mutating the source array.',
          syntaxExplanation:
            'const numbers = [1, 2, 3, 4, 5];\nconst evensDoubled = numbers\n    .filter(n => n % 2 === 0)\n    .map(n => n * 2); // [4, 8]',
          howItWorks: [
            'Executes callback in a C++ internal loop with bounds checking and index tracking.',
          ],
          examples: [
            {
              title: 'Computing Total Order Amount with reduce',
              code:
                'const cart = [\n    { item: "Book", price: 15, qty: 2 },\n    { item: "Pen", price: 3, qty: 5 }\n];\nconst subtotal = cart.reduce((acc, line) => acc + line.price * line.qty, 0);\nconsole.log(`Subtotal: $${subtotal}`); // $45',
              explanation:
                'Uses reduce with an initial value of 0 to accumulate total price.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Omitting the initial accumulator value in reduce when working with object arrays.',
              explanation:
                'Without an initial value, reduce uses the first array element as accumulator, corrupting calculations.',
            },
          ],
          quickChecks: [
            {
              question:
                'What does array.find(predicate) return if no element matches?',
              answer: 'undefined',
              options: ['null', 'undefined', '-1', 'false'],
              correctAnswer: 1,
              explanation:
                'find() returns undefined when no element satisfies the predicate.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Group a list of users by their department into an object using array.reduce()',
              difficulty: 'intermediate',
              concepts: ['reduce', 'map', 'filter'],
            },
          ],
          difficulty: 'intermediate',
          estimatedMinutes: 25,
        },
      ],
    },

    // =============================================================
    // MODULE 5: PROTOTYPES, CLASSES & CLOSURES
    // =============================================================
    {
      id: 'js-mod-oop-closures',
      title: 'Prototypes, Classes & Closures',
      order: 5,
      description:
        'The prototype chain, ES6 class syntax, inheritance (extends, super), and data privacy via closures.',
      topics: [
        // ---------------------------------------------------------
        // TOPIC 5.1: CLOSURES
        // ---------------------------------------------------------
        {
          id: 'js-closures-and-lexical-scope',
          title: 'Closures and Data Encapsulation',
          slug: 'closures-and-lexical-scope',
          description:
            'How inner functions retain access to outer function scope, factory functions, and private state.',
          learningObjectives: [
            'Define closures in JavaScript.',
            'Explain how functions retain access to their defining lexical environment.',
            'Emulate private instance state using closures.',
          ],
          prerequisites: ['javascript-beginner'],
          conceptSummary:
            'A closure is a function bundled together with references to its surrounding lexical environment.',
          detailedExplanation:
            'In JavaScript, functions form closures around their lexical variables. When an outer function finishes execution and returns an inner function, the inner function continues to hold a live reference to the outer variables, creating encapsulated private state inaccessible from the outside.',
          syntaxExplanation:
            'function createCounter() {\n    let count = 0; // Private encapsulated variable\n    return {\n        increment: () => ++count,\n        getCount: () => count\n    };\n}\nconst counter = createCounter();',
          howItWorks: [
            'V8 retains HeapScopeContext objects for variables captured across function scopes.',
          ],
          examples: [
            {
              title: 'Factory Function with Encapsulated State',
              code:
                'function createBankAccount(initialBalance) {\n    let balance = initialBalance;\n    return {\n        deposit(amount) { if (amount > 0) balance += amount; },\n        getBalance() { return balance; }\n    };\n}\nconst acct = createBankAccount(100);\nacct.deposit(50);\nconsole.log("Balance:", acct.getBalance()); // 150\n// console.log(acct.balance); // undefined! Completely private.',
              explanation:
                'Guarantees balance cannot be modified directly from outside.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Creating functions in loops without understanding how closures bind to changing variables (var vs let).',
              explanation:
                'Using let creates a fresh binding per loop iteration, solving the classic loop closure bug.',
            },
          ],
          quickChecks: [
            {
              question:
                'Why does an inner function have access to outer variables even after the outer function has returned?',
              answer:
                'Because the inner function maintains a closure over its lexical environment',
              options: [
                'Variables become global',
                'Because the inner function maintains a closure over its lexical environment',
                'Memory is copied into registers',
                'Due to hoisting',
              ],
              correctAnswer: 1,
              explanation:
                'The closure keeps references to outer environment records alive.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Create a memoize(fn) function that caches previous function results using a closure',
              difficulty: 'intermediate',
              concepts: ['closure', 'memoization'],
            },
          ],
          difficulty: 'intermediate',
          estimatedMinutes: 25,
        },

        // ---------------------------------------------------------
        // TOPIC 5.2: CLASSES & INHERITANCE
        // ---------------------------------------------------------
        {
          id: 'js-classes-and-inheritance',
          title: 'Classes, Prototypal Inheritance & super',
          slug: 'classes-and-inheritance',
          description:
            'ES6 class syntax, constructors, methods, private fields (#), inheritance with extends, and super.',
          learningObjectives: [
            'Define classes with constructor and methods.',
            'Use private fields (#fieldName).',
            'Extend classes using extends and invoke parent constructor with super().',
            'Understand how classes are syntactic sugar over prototypal inheritance.',
          ],
          prerequisites: ['js-closures-and-lexical-scope'],
          conceptSummary:
            "ES6 classes provide a clean, declarative syntax built over JavaScript's prototypal inheritance model.",
          detailedExplanation:
            'Underneath `class`, JavaScript uses prototypes (`Object.prototype`). `class Child extends Parent` sets up the prototype delegation chain (`Child.prototype.__proto__ === Parent.prototype`). Modern JavaScript supports true private fields with the `#` prefix (e.g. `#secret`), which cannot be accessed outside the class body.',
          syntaxExplanation:
            'class Animal {\n    #name; // Private field\n    constructor(name) { this.#name = name; }\n    speak() { return `${this.#name} makes a noise.`; }\n}\nclass Dog extends Animal {\n    speak() { return `${super.speak()} Specifically: Woof!`; }\n}',
          howItWorks: [
            'Instantiates object via prototype chain; super delegates through [[Prototype]] using super call site.',
          ],
          examples: [
            {
              title: 'Full Class Hierarchy with Private Fields',
              code:
                'class User {\n    #password;\n    constructor(username, password) {\n        this.username = username;\n        this.#password = password;\n    }\n    verifyPassword(input) {\n        return this.#password === input;\n    }\n}\nconst u = new User("admin", "secret123");\nconsole.log("Verified:", u.verifyPassword("secret123")); // true\n// console.log(u.#password); // SyntaxError: Private field \'#password\' must be declared',
              explanation:
                'Uses modern ECMAScript private field # for guaranteed encapsulation.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Omitting super() in a child constructor before using this.',
              explanation:
                "ReferenceError: Must call super constructor in derived class before accessing 'this'.",
            },
          ],
          quickChecks: [
            {
              question:
                'Which syntax defines a truly private class field in modern JavaScript?',
              answer: '#fieldPrefix',
              options: [
                '_fieldPrefix',
                'private fieldName',
                '#fieldPrefix',
                '$fieldName',
              ],
              correctAnswer: 2,
              explanation:
                'The hash symbol # denotes native private class fields in modern ECMAScript.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Create a Vehicle class and Car subclass implementing brand, speed, and an accelerate() method',
              difficulty: 'intermediate',
              concepts: ['class', 'extends', 'super'],
            },
          ],
          difficulty: 'intermediate',
          estimatedMinutes: 25,
        },
      ],
    },

    // =============================================================
    // MODULE 6: ASYNCHRONOUS JAVASCRIPT & DOM
    // =============================================================
    {
      id: 'js-mod-async-dom',
      title: 'Asynchronous JavaScript & DOM Architecture',
      order: 6,
      description:
        'Promises, async/await, Fetch API, DOM manipulation, and Event Delegation.',
      topics: [
        // ---------------------------------------------------------
        // TOPIC 6.1: PROMISES
        // ---------------------------------------------------------
        {
          id: 'js-promises-and-chaining',
          title: 'Promises and Promise Chaining',
          slug: 'promises-and-chaining',
          description:
            'Promise lifecycle (pending, fulfilled, rejected), .then(), .catch(), and eliminating callback hell.',
          learningObjectives: [
            'Create Promises with new Promise((resolve, reject) => ...).',
            'Chain asynchronous operations with .then().',
            'Handle rejections with .catch() and cleanup with .finally().',
          ],
          prerequisites: ['javascript-beginner'],
          conceptSummary:
            'A `Promise` represents the eventual completion (or failure) of an asynchronous operation and its resulting value.',
          detailedExplanation:
            'Before Promises, asynchronous code relied on deeply nested callbacks ("callback hell"). A Promise is an object in one of three states: `pending`, `fulfilled` (with a value), or `rejected` (with an error). Returning values inside `.then()` automatically wraps them in a resolved Promise, enabling clean sequential chaining.',
          syntaxExplanation:
            'const fetchUser = new Promise((resolve, reject) => {\n    setTimeout(() => resolve({ id: 1, name: "Sam" }), 100);\n});\nfetchUser\n    .then(user => user.name)\n    .then(name => console.log(name))\n    .catch(err => console.error(err));',
          howItWorks: [
            'Promises schedule callbacks onto the engine Microtask Queue.',
          ],
          examples: [
            {
              title: 'Chaining Asynchronous Steps',
              code:
                'function delay(ms) {\n    return new Promise(resolve => setTimeout(resolve, ms));\n}\ndelay(100)\n    .then(() => "Step 1 done")\n    .then(msg => { console.log(msg); return delay(100); })\n    .then(() => console.log("Step 2 done"));',
              explanation: 'Chains sequential delays without nesting.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Forgetting to return a Promise inside a .then() handler when chaining.',
              explanation:
                'Without return, the next .then() receives undefined immediately instead of waiting.',
            },
          ],
          quickChecks: [
            {
              question:
                'What are the three possible states of a JavaScript Promise?',
              answer: 'pending, fulfilled, rejected',
              options: [
                'waiting, success, failed',
                'pending, fulfilled, rejected',
                'starting, running, finished',
                'open, closed, error',
              ],
              correctAnswer: 1,
              explanation:
                'Promises transition from pending to either fulfilled or rejected.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Write a timeoutPromise(promise, ms) utility that rejects if the promise takes longer than ms',
              difficulty: 'intermediate',
              concepts: ['Promise', 'setTimeout', 'reject'],
            },
          ],
          difficulty: 'intermediate',
          estimatedMinutes: 25,
        },

        // ---------------------------------------------------------
        // TOPIC 6.2: ASYNC/AWAIT & FETCH
        // ---------------------------------------------------------
        {
          id: 'js-async-await-fetch',
          title: 'async/await and the Fetch API',
          slug: 'async-await-fetch',
          description:
            'Writing asynchronous code that reads like synchronous code, try/catch error handling, and making HTTP requests with fetch().',
          learningObjectives: [
            'Define async functions and use await.',
            'Handle asynchronous errors cleanly with try/catch.',
            'Make HTTP requests, parse JSON, and check response.ok using fetch().',
          ],
          prerequisites: ['js-promises-and-chaining'],
          conceptSummary:
            '`async/await` is syntactic sugar over Promises, enabling clean, readable, sequential asynchronous control flow.',
          detailedExplanation:
            'An `async` function always returns a Promise. The `await` keyword pauses execution of the function until the awaited Promise settles, unpacking its resolved value. Network calls use `fetch(url)`. Crucial rule: `fetch()` does NOT reject on HTTP 404 or 500 errors; you must check `response.ok`.',
          syntaxExplanation:
            'async function loadData(url) {\n    try {\n        const res = await fetch(url);\n        if (!res.ok) throw new Error(`HTTP error ${res.status}`);\n        const data = await res.json();\n        return data;\n    } catch (err) {\n        console.error("Fetch failed:", err.message);\n    }\n}',
          howItWorks: [
            'async/await is compiled to generator coroutines yielding promises to the microtask runner.',
          ],
          examples: [
            {
              title: 'Production Data Fetcher with Error Handling',
              code:
                'async function fetchGitHubUser(username) {\n    const url = `https://api.github.com/users/${username}`;\n    const response = await fetch(url);\n    if (!response.ok) {\n        throw new Error(`User not found: ${response.status}`);\n    }\n    const profile = await response.json();\n    return profile.name;\n}',
              explanation:
                'Fetches external API data with status verification and JSON parsing.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Assuming fetch() throws an error when the server returns a 404 or 500 status code.',
              explanation:
                'fetch() only rejects on network failures; always verify if (!response.ok).',
            },
          ],
          quickChecks: [
            {
              question:
                'What does an async function in JavaScript always return?',
              answer: 'A Promise',
              options: [
                'A generator',
                'A Promise',
                'The raw unwrapped value',
                'A callback function',
              ],
              correctAnswer: 1,
              explanation:
                'Async functions always wrap their return value in a Promise.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Write an async function postJSON(url, data) sending a POST request with headers and body',
              difficulty: 'intermediate',
              concepts: ['async/await', 'fetch', 'POST'],
            },
          ],
          difficulty: 'intermediate',
          estimatedMinutes: 25,
        },

        // ---------------------------------------------------------
        // TOPIC 6.3: DOM & EVENT DELEGATION
        // ---------------------------------------------------------
        {
          id: 'js-dom-and-event-delegation',
          title: 'DOM Manipulation and Event Delegation',
          slug: 'dom-and-event-delegation',
          description:
            'Selecting elements, updating the DOM, event propagation (bubbling vs capturing), and efficient event delegation.',
          learningObjectives: [
            'Select and mutate DOM nodes (querySelector, classList, textContent).',
            'Understand event bubbling and capturing phases.',
            'Implement Event Delegation using e.target on parent containers.',
          ],
          prerequisites: ['javascript-beginner'],
          conceptSummary:
            'The DOM represents the HTML document as a tree of objects; Event Delegation handles events on multiple children using a single parent listener.',
          detailedExplanation:
            'Attaching event listeners to 1,000 list items wastes memory and breaks when new items are added dynamically. Because events bubble up the DOM tree from child to parent, Event Delegation attaches a single listener to the parent container (`<ul>`) and inspects `e.target` to handle clicks on any child.',
          syntaxExplanation:
            'const container = document.querySelector("#user-list");\ncontainer.addEventListener("click", (e) => {\n    if (e.target.matches("button.delete-btn")) {\n        e.target.closest("li").remove();\n    }\n});',
          howItWorks: [
            'Browser dispatches event in Capturing Phase (window down), Target Phase, and Bubbling Phase (target up to window).',
          ],
          examples: [
            {
              title: 'Dynamic Event Delegation Architecture',
              code:
                '// Attaching one listener to parent handles all current and future buttons:\n// document.querySelector("#todo-container").addEventListener("click", e => {\n//     if (e.target.classList.contains("toggle-done")) {\n//         e.target.parentElement.classList.toggle("completed");\n//     }\n// });',
              explanation:
                'Demonstrates handling dynamic list item clicks efficiently via bubbling.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Looping through elements to attach individual click listeners to dynamically rendered items.',
              explanation:
                'Leads to memory leaks and fails for newly inserted elements. Use event delegation on the parent.',
            },
          ],
          quickChecks: [
            {
              question:
                'What property in a DOM event listener identifies the actual clicked child element?',
              answer: 'e.target',
              options: [
                'e.currentTarget',
                'e.target',
                'e.origin',
                'e.sender',
              ],
              correctAnswer: 1,
              explanation:
                'e.target is the specific element that triggered the event.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Implement a dynamic tag list where clicking an "X" removes the tag using Event Delegation',
              difficulty: 'intermediate',
              concepts: ['DOM', 'event delegation', 'e.target'],
            },
          ],
          difficulty: 'intermediate',
          estimatedMinutes: 25,
        },
      ],
    },
  ],
};

export default javascriptIntermediate;