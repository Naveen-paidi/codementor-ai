/**
 * C Curriculum — Beginner Level (GeeksforGeeks-Style Structure)
 * Modules 1-3: Introduction & Compilation, Operators & Control Flow,
 * Functions & Storage Classes
 *
 * Each topic follows: Overview -> Objectives -> Prerequisites -> Concept ->
 * Detailed Explanation -> Syntax -> How It Works -> Examples ->
 * Common Mistakes -> Quick Checks -> Practice Questions -> Difficulty
 *
 * Self-contained local curriculum source of truth.
 */

export const cBeginner = {
  id: 'c-beginner',
  title: 'Level 1: C Fundamentals & Procedural Logic',
  level: 1,
  difficulty: 'beginner',
  description:
    'Master low-level programming foundations: GCC compilation, syntax, primitive types, formatted I/O (printf/scanf), conditionals, iteration, functions, and storage classes.',

  modules: [
    // =============================================================
    // MODULE 1: INTRODUCTION TO C & THE COMPILATION MODEL
    // =============================================================
    {
      id: 'c-mod-introduction',
      title: 'Introduction to C & The Compilation Model',
      order: 1,
      description:
        'The mother of modern languages: Dennis Ritchie, UNIX history, the GCC toolchain (Preprocessing, Compilation, Assembly, Linking), and the first program.',
      topics: [
        // ---------------------------------------------------------
        // TOPIC 1.1: WHAT IS C
        // ---------------------------------------------------------
        {
          id: 'c-what-is-c',
          title: 'What is C & The Compilation Pipeline',
          slug: 'what-is-c',
          description:
            'Understanding C as a low-level, compiled systems language and tracing source code to machine binaries.',
          learningObjectives: [
            'Define the C language and its historical significance.',
            'Explain the 4 stages of compilation: Preprocessing, Compilation, Assembly, Linking.',
            'Write and compile your first C program with GCC.',
          ],
          prerequisites: [],
          conceptSummary:
            'C is a compiled, imperative, low-level systems programming language created by Dennis Ritchie in 1972 at Bell Labs to write UNIX.',
          detailedExplanation:
            'C provides direct memory access and minimal runtime overhead, forming the foundation of operating systems (Linux, Windows, macOS kernels), databases, and embedded firmware. Compiling `gcc main.c -o main` passes through: 1. Preprocessor (`cpp`), 2. Compiler (`cc1` producing assembly), 3. Assembler (`as` producing object file `.o`), 4. Linker (`ld` combining libraries into an executable).',
          syntaxExplanation:
            '#include <stdio.h>\n\nint main(void) {\n    printf("Hello, C Systems World!\\n");\n    return 0;\n}',
          howItWorks: [
            'The compiler translates C instructions directly into native CPU machine instructions without any virtual machine layer.',
          ],
          examples: [
            {
              title: 'First Program Compilation and Execution',
              code:
                '// In terminal:\n// gcc -Wall -Wextra main.c -o main\n// ./main',
              explanation:
                'Compiles with all warnings enabled (-Wall -Wextra) and runs the binary.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Omitting return 0; from main or failing to declare int main().',
              explanation:
                'main() must return an integer status code to the operating system (0 signifies success).',
            },
          ],
          quickChecks: [
            {
              question:
                'Who created the C programming language at Bell Labs?',
              answer: 'Dennis Ritchie',
              options: [
                'Bjarne Stroustrup',
                'Dennis Ritchie',
                'Ken Thompson',
                'Linus Torvalds',
              ],
              correctAnswer: 1,
              explanation: 'Dennis Ritchie created C in 1972.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Write a C program that prints the sizes of int, float, double, and char using sizeof',
              difficulty: 'easy',
              concepts: ['main', 'printf', 'sizeof'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 1.2: VARIABLES, TYPES & I/O
        // ---------------------------------------------------------
        {
          id: 'c-variables-types-io',
          title: 'Variables, Data Types, and Formatted I/O',
          slug: 'variables-types-io',
          description:
            'Primitive types (int, char, float, double), format specifiers (%d, %f, %c, %s), and reading input with scanf.',
          learningObjectives: [
            'Declare and initialize primitive variables.',
            'Use format specifiers accurately in printf.',
            'Read keyboard input using scanf with the address-of operator (&).',
          ],
          prerequisites: ['c-what-is-c'],
          conceptSummary:
            'C variables map directly to fixed hardware memory words; `printf` and `scanf` handle formatted terminal I/O.',
          detailedExplanation:
            'Primitive types occupy fixed byte widths: `char` (1 byte), `int` (usually 4 bytes), `float` (4 bytes), `double` (8 bytes). `printf` formats output using specifiers (`%d` for integer, `%f` for float, `%c` for character, `%s` for string). `scanf` reads inputs from `stdin`, requiring the address-of operator `&` before variable names so it can write directly to their memory addresses.',
          syntaxExplanation:
            'int age;\nprintf("Enter your age: ");\nscanf("%d", &age); // Notice the address-of operator &',
          howItWorks: [
            'scanf takes pointer to memory destination; writing to invalid pointer causes Segmentation Fault.',
          ],
          examples: [
            {
              title: 'Reading Input and Formatted Output',
              code:
                '#include <stdio.h>\n\nint main(void) {\n    int quantity;\n    float unit_price;\n    printf("Enter quantity and unit price: ");\n    scanf("%d %f", &quantity, &unit_price);\n    float total = quantity * unit_price;\n    printf("Total Cost: $%.2f\\n", total);\n    return 0;\n}',
              explanation:
                'Reads multiple formatted values in one scanf call and prints rounded currency.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Forgetting the & operator before non-pointer variables in scanf, causing a Segmentation Fault.',
              explanation:
                'scanf requires a memory pointer; passing the raw value treats the value as an address, crashing the program.',
            },
          ],
          quickChecks: [
            {
              question:
                'What format specifier is used in printf to display a standard 32-bit signed integer?',
              answer: '%d',
              options: ['%s', '%d', '%f', '%c'],
              correctAnswer: 1,
              explanation: '%d (or %i) represents signed decimal integers.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Write a program to calculate the area and circumference of a circle from user-entered radius',
              difficulty: 'easy',
              concepts: ['printf', 'scanf', 'operators'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 20,
        },
      ],
    },

    // =============================================================
    // MODULE 2: OPERATORS & CONTROL FLOW
    // =============================================================
    {
      id: 'c-mod-control-flow',
      title: 'Operators & Control Flow',
      order: 2,
      description:
        'Arithmetic/logical/relational operators, conditionals (if-else, switch), and loops (for, while, do-while).',
      topics: [
        // ---------------------------------------------------------
        // TOPIC 2.1: CONDITIONALS & SWITCH
        // ---------------------------------------------------------
        {
          id: 'c-conditionals-and-switch',
          title: 'Conditionals and the switch Statement',
          slug: 'conditionals-and-switch',
          description:
            'Branching logic with if, else if, else, ternary operator, and switch-case with break.',
          learningObjectives: [
            'Construct conditional branches with if-else.',
            'Understand truth values in C (0 is false, non-zero is true).',
            'Implement multi-way branching with switch-case and break.',
          ],
          prerequisites: ['c-variables-types-io'],
          conceptSummary:
            'In C, any non-zero integer is evaluated as true, while `0` is false. `switch` compares integral values against discrete cases.',
          detailedExplanation:
            "Unlike modern languages with native booleans (until C99's `<stdbool.h>`), C treats integer `0` as false and all other values as true. In `switch` statements, omitting a `break` keyword causes fall-through, executing subsequent case blocks sequentially.",
          syntaxExplanation:
            'if (score >= 90) {\n    grade = \'A\';\n} else {\n    grade = \'B\';\n}\n\nswitch (code) {\n    case 1: printf("OK\\n"); break;\n    default: printf("Error\\n");\n}',
          howItWorks: [
            'Translates to compare (cmp) and conditional jump (je, jne, jg) assembly instructions.',
          ],
          examples: [
            {
              title: 'Day of Week Switch Statement',
              code:
                '#include <stdio.h>\n\nint main(void) {\n    int day = 3;\n    switch (day) {\n        case 1: printf("Monday\\n"); break;\n        case 2: printf("Tuesday\\n"); break;\n        case 3: printf("Wednesday\\n"); break;\n        default: printf("Other day\\n");\n    }\n    return 0;\n}',
              explanation:
                'Dispatches execution to the matching integer case.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Accidentally omitting break in a switch case, causing unintended fall-through execution.',
              explanation:
                'Execution continues into subsequent cases unless stopped by break.',
            },
          ],
          quickChecks: [
            {
              question:
                'What does C consider to be a boolean true value in an if condition?',
              answer: 'Any non-zero integer value',
              options: [
                'Only the number 1',
                'Any non-zero integer value',
                'Positive numbers only',
                'Character literals only',
              ],
              correctAnswer: 1,
              explanation:
                'In C, 0 is false; any non-zero value evaluates to true.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Create a simple console calculator supporting +, -, *, / using a switch statement',
              difficulty: 'easy',
              concepts: ['if-else', 'switch', 'break'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 20,
        },

        // ---------------------------------------------------------
        // TOPIC 2.2: LOOPS
        // ---------------------------------------------------------
        {
          id: 'c-loops-iteration',
          title: 'Loops: for, while, and do-while',
          slug: 'loops-iteration',
          description:
            'Iterative control loops, loop counters, nested loops, break, and continue.',
          learningObjectives: [
            'Write counted loops with for.',
            'Use while and do-while loops.',
            'Control loop iteration with break and continue.',
          ],
          prerequisites: ['c-conditionals-and-switch'],
          conceptSummary:
            'Loops repeat code: `for` for counted iterations, `while` for conditional cycles, and `do-while` for post-test loops.',
          detailedExplanation:
            '`for (init; condition; update)` coordinates loop variables. `while (cond)` tests the condition before entering the body. `do { ... } while (cond);` guarantees at least one execution before testing the condition.',
          syntaxExplanation:
            'for (int i = 0; i < 5; i++) {\n    if (i == 2) continue;\n    printf("%d\\n", i);\n}',
          howItWorks: [
            'Assembly loops use backward conditional branches jumping to labeled code offsets.',
          ],
          examples: [
            {
              title: 'Prime Number Verification Loop',
              code:
                '#include <stdio.h>\n\nint main(void) {\n    int num = 29, is_prime = 1;\n    for (int i = 2; i * i <= num; i++) {\n        if (num % i == 0) {\n            is_prime = 0;\n            break;\n        }\n    }\n    printf("%d is %s\\n", num, is_prime ? "prime" : "not prime");\n    return 0;\n}',
              explanation:
                'Tests primality efficiently with loop break optimization.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Adding a semicolon directly after the for header, e.g. for (int i = 0; i < 10; i++);',
              explanation:
                'Creates an empty loop body; the subsequent block executes only once after loop completion.',
            },
          ],
          quickChecks: [
            {
              question:
                'Which statement immediately skips the rest of the current iteration and jumps to the update step?',
              answer: 'continue',
              options: ['break', 'continue', 'return', 'goto'],
              correctAnswer: 1,
              explanation:
                'continue skips the rest of the loop body for the current iteration.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Print a right-angled triangle pattern of asterisks using nested for loops',
              difficulty: 'easy',
              concepts: ['for loop', 'nested loops'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 20,
        },
      ],
    },

    // =============================================================
    // MODULE 3: FUNCTIONS & STORAGE CLASSES
    // =============================================================
    {
      id: 'c-mod-functions-storage',
      title: 'Functions & Storage Classes',
      order: 3,
      description:
        'Function prototypes, pass-by-value, stack frames, recursion, and storage classes (auto, static, extern, register).',
      topics: [
        // ---------------------------------------------------------
        // TOPIC 3.1: FUNCTIONS & PROTOTYPES
        // ---------------------------------------------------------
        {
          id: 'c-functions-and-prototypes',
          title: 'Functions and Function Prototypes',
          slug: 'functions-and-prototypes',
          description:
            'Modular code design: forward declarations (prototypes), defining functions, and pass-by-value parameter passing.',
          learningObjectives: [
            'Declare forward prototypes and define functions.',
            'Understand stack frame allocation during function calls.',
            'Recognize strict pass-by-value semantics in C.',
          ],
          prerequisites: ['c-loops-iteration'],
          conceptSummary:
            'Functions encapsulate reusable logic; prototypes inform the single-pass compiler of signatures ahead of definition.',
          detailedExplanation:
            'The C compiler is single-pass (top-to-bottom). If a function is called before its definition, the compiler requires a forward declaration called a "Function Prototype". C passes all arguments strictly by value (copying data onto the call stack frame). Modifying a parameter does not change the caller variable unless pointers are used.',
          syntaxExplanation:
            '// Function prototype (forward declaration):\nint add(int a, int b);\n\n// Definition:\nint add(int a, int b) {\n    return a + b;\n}',
          howItWorks: [
            'Caller pushes arguments onto CPU stack or registers (System V ABI: rdi, rsi, rdx), then executes call instruction.',
          ],
          examples: [
            {
              title: 'Modular Temperature Converter',
              code:
                '#include <stdio.h>\n\n// Prototype\nfloat to_celsius(float fahrenheit);\n\nint main(void) {\n    printf("100F in C: %.1f\\n", to_celsius(100.0f));\n    return 0;\n}\n\nfloat to_celsius(float f) {\n    return (f - 32.0f) * 5.0f / 9.0f;\n}',
              explanation:
                'Separates prototype from implementation cleanly.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Calling a function before defining it without providing a prototype.',
              explanation:
                'Older C compilers assume implicit int return types, causing subtle linking and type mismatch errors.',
            },
          ],
          quickChecks: [
            {
              question:
                'What is a forward declaration of a function called in C?',
              answer: 'A function prototype',
              options: [
                'A macro',
                'A function prototype',
                'A typedef',
                'A header',
              ],
              correctAnswer: 1,
              explanation:
                'Prototypes declare function return types and parameter types before implementation.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Write a recursive factorial function with an appropriate base case',
              difficulty: 'easy',
              concepts: ['functions', 'recursion', 'prototypes'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 20,
        },

        // ---------------------------------------------------------
        // TOPIC 3.2: STORAGE CLASSES
        // ---------------------------------------------------------
        {
          id: 'c-storage-classes',
          title: 'Storage Classes: auto, static, extern & register',
          slug: 'storage-classes',
          description:
            'Scope, lifetime, and linkage: persisting local variables with static, and global sharing with extern.',
          learningObjectives: [
            'Use static local variables to preserve state across function calls.',
            'Use static global variables to limit linkage to a single file.',
            'Share variables across translation units using extern.',
          ],
          prerequisites: ['c-functions-and-prototypes'],
          conceptSummary:
            'Storage classes dictate variable scope (visibility), lifetime (duration in memory), and linkage across compilation units.',
          detailedExplanation:
            '1. `auto`: default local stack variables. 2. `static` (inside function): retains its value across function calls (stored in data segment, not stack). 3. `static` (at file level): restricts visibility to that translation unit (internal linkage). 4. `extern`: declares a variable defined in another file (external linkage). 5. `register`: hints to the compiler to store the variable in a CPU register.',
          syntaxExplanation:
            'void count(void) {\n    static int calls = 0; // Initialized once, persists across calls!\n    calls++;\n    printf("Call #%d\\n", calls);\n}',
          howItWorks: [
            'Static variables reside in the .data or .bss binary segments for the entire lifetime of the process.',
          ],
          examples: [
            {
              title: 'Persistent Counter with static Variable',
              code:
                '#include <stdio.h>\n\nvoid track_event(void) {\n    static int event_count = 0; // Stored in static data segment\n    event_count++;\n    printf("Event registered. Total: %d\\n", event_count);\n}\nint main(void) {\n    track_event();\n    track_event();\n    track_event();\n    return 0;\n}',
              explanation:
                'Demonstrates static local variable retaining state across invocations.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Thinking static variables inside functions re-initialize to their default value on each call.',
              explanation:
                'The initialization happens only once when the program binary is loaded into memory.',
            },
          ],
          quickChecks: [
            {
              question:
                'What does the static keyword do when applied to a local variable inside a C function?',
              answer:
                "Preserves the variable's value across repeated function calls throughout the program lifetime",
              options: [
                'Makes the variable constant',
                "Preserves the variable's value across repeated function calls",
                'Encrypts the variable',
                'Allocates it on the heap',
              ],
              correctAnswer: 1,
              explanation:
                'Local static variables retain their values between invocations.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Create two .c files sharing a global configuration variable using the extern keyword',
              difficulty: 'easy',
              concepts: ['extern', 'static', 'storage classes'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 20,
        },
      ],
    },
  ],
};

export default cBeginner;