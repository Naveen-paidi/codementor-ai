/**
 * C++ Curriculum — Beginner Level (GeeksforGeeks-Style Structure)
 * Modules 1-2: Introduction & Stream I/O, Control Flow & Modern Strings
 *
 * Each topic follows: Overview -> Objectives -> Prerequisites -> Concept ->
 * Detailed Explanation -> Syntax -> How It Works -> Examples ->
 * Common Mistakes -> Quick Checks -> Practice Questions -> Difficulty
 *
 * Self-contained local curriculum source of truth.
 */

export const cppBeginner = {
  id: 'cpp-beginner',
  title: 'Level 1: C++ Foundations & Standard Library Basics',
  level: 1,
  difficulty: 'beginner',
  description:
    'Master modern C++ fundamentals: compiler toolchains, stream I/O (cin/cout), namespaces, auto type deduction, references (&) vs pointers, std::string, and range-based loops.',

  modules: [
    // =============================================================
    // MODULE 1: INTRODUCTION TO C++ & STREAM I/O
    // =============================================================
    {
      id: 'cpp-mod-introduction',
      title: 'Introduction to C++ & Modern Stream I/O',
      order: 1,
      description:
        'C with Classes evolution, Bjarne Stroustrup, g++ compilation, standard streams (std::cout, std::cin), and namespaces.',
      topics: [
        // ---------------------------------------------------------
        // TOPIC 1.1: WHAT IS C++
        // ---------------------------------------------------------
        {
          id: 'cpp-what-is-cpp',
          title: 'What is C++ & Modern Standards (C++11 to C++20)',
          slug: 'what-is-cpp',
          description:
            'High-performance multi-paradigm systems language: zero-cost abstractions, compiler workflow, and modern standards.',
          learningObjectives: [
            'Define C++ and its core philosophy: "Zero-overhead abstractions".',
            'Trace the evolution from C++98 to modern C++ (C++11/14/17/20).',
            'Compile C++ programs using g++ with -std=c++20.',
          ],
          prerequisites: [],
          conceptSummary:
            'C++ is a compiled, statically typed, multi-paradigm language offering high-level abstractions with zero runtime performance cost.',
          detailedExplanation:
            'Designed by Bjarne Stroustrup at Bell Labs in 1979 as "C with Classes", C++ combines low-level hardware control with high-level object-oriented and generic programming capabilities. Modern C++ (C++11 and beyond) revolutionised the language with auto type deduction, smart pointers, lambda expressions, and move semantics.',
          syntaxExplanation:
            '#include <iostream>\n\nint main() {\n    std::cout << "Welcome to Modern C++!\\n";\n    return 0;\n}',
          howItWorks: [
            'Source code compiles directly to optimized native CPU machine code via g++ or clang++.',
          ],
          examples: [
            {
              title: 'Compiling with Modern Standard Flag',
              code:
                '// Terminal command:\n// g++ -std=c++20 -Wall -Wextra -O2 main.cpp -o main\n// ./main',
              explanation:
                'Compiles with C++20 standard and high optimization (-O2).',
            },
          ],
          commonMistakes: [
            {
              mistake: 'Using using namespace std; in header files.',
              explanation:
                'Pollutes the global namespace and causes name collisions across libraries. Use explicit std:: prefixes.',
            },
          ],
          quickChecks: [
            {
              question: 'Who created the C++ programming language?',
              answer: 'Bjarne Stroustrup',
              options: [
                'Dennis Ritchie',
                'Bjarne Stroustrup',
                'James Gosling',
                'Guido van Rossum',
              ],
              correctAnswer: 1,
              explanation: 'Bjarne Stroustrup created C++ at Bell Labs.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Write a C++ program that prints a formatted table of powers of 2',
              difficulty: 'easy',
              concepts: ['iostream', 'std::cout'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 1.2: STREAMS & NAMESPACES
        // ---------------------------------------------------------
        {
          id: 'cpp-streams-and-namespaces',
          title: 'Stream I/O (cin, cout) and Namespaces',
          slug: 'streams-and-namespaces',
          description:
            'Type-safe stream insertion (<<) and extraction (>>), format manipulators, and namespace scoping.',
          learningObjectives: [
            'Use std::cout and std::cin for type-safe I/O.',
            'Understand namespaces (namespace my_lib { ... }) and the scope resolution operator (::).',
            'Avoid namespace pollution.',
          ],
          prerequisites: ['cpp-what-is-cpp'],
          conceptSummary:
            'C++ provides type-safe stream I/O via `<iostream>`; namespaces prevent global identifier name collisions.',
          detailedExplanation:
            'Unlike C\'s `printf` which requires format specifiers, C++ streams (`std::cout`, `std::cin`) use overloaded bitwise operators `<<` (insertion) and `>>` (extraction) to deduce types automatically. Namespaces group declarations into named scopes accessed via `::`.',
          syntaxExplanation:
            'int age;\nstd::cout << "Enter age: ";\nstd::cin >> age; // Reads directly into age with type safety',
          howItWorks: [
            'Operator overloading on std::istream and std::ostream delegates to internal character stream buffers.',
          ],
          examples: [
            {
              title: 'Defining and Accessing Custom Namespaces',
              code:
                '#include <iostream>\n\nnamespace Geometry {\n    const double PI = 3.14159;\n    double circle_area(double r) { return PI * r * r; }\n}\nint main() {\n    std::cout << "Area: " << Geometry::circle_area(5.0) << "\\n";\n    return 0;\n}',
              explanation:
                'Encapsulates mathematical functions within a dedicated namespace.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Using std::endl repeatedly in high-performance loops instead of "\\n".',
              explanation:
                'std::endl forces a buffer flush on every line, drastically slowing down terminal I/O. Use "\\n".',
            },
          ],
          quickChecks: [
            {
              question: 'What is the scope resolution operator in C++?',
              answer: '::',
              options: ['->', '.', '::', ':'],
              correctAnswer: 2,
              explanation:
                'The double colon :: resolves identifiers within namespaces and classes.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Read two numbers and an operator character using std::cin and display the evaluated result',
              difficulty: 'easy',
              concepts: ['std::cin', 'std::cout'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 20,
        },

        // ---------------------------------------------------------
        // TOPIC 1.3: REFERENCES VS POINTERS
        // ---------------------------------------------------------
        {
          id: 'cpp-references-vs-pointers',
          title: 'References (&) vs Pointers (*)',
          slug: 'references-vs-pointers',
          description:
            'Aliasing variables with references, const references for zero-copy read-only arguments, and comparison with pointers.',
          learningObjectives: [
            'Declare and initialize C++ references.',
            'Distinguish references (aliases) from pointers (address variables).',
            'Pass parameters by const reference (const Type&) to avoid expensive copying.',
          ],
          prerequisites: ['cpp-streams-and-namespaces'],
          conceptSummary:
            'A reference is an immutable alias for an existing variable; passing by `const Type&` provides zero-copy read-only function calls.',
          detailedExplanation:
            'Unlike pointers, references: 1. Cannot be null (must bind to a valid object upon declaration), 2. Cannot be reseated to point to another object, 3. Do not require dereferencing syntax (`*`). In modern C++, large objects are conventionally passed to functions by `const Type&` to avoid copying overhead while guaranteeing immutability.',
          syntaxExplanation:
            'int original = 100;\nint &ref = original; // ref is an alias for original\nref = 200;           // original is now 200!\n\nvoid printText(const std::string &s); // Zero-copy pass by const reference',
          howItWorks: [
            'Compiled to machine pointers under the hood, but enforced with strict alias guarantees by the compiler.',
          ],
          examples: [
            {
              title: 'In-Place Swap with References (No Pointer Syntax!)',
              code:
                '#include <iostream>\n\nvoid swap(int &a, int &b) {\n    int temp = a;\n    a = b;\n    b = temp;\n}\nint main() {\n    int x = 5, y = 10;\n    swap(x, y); // Clean call without & operators!\n    std::cout << "x: " << x << ", y: " << y << "\\n"; // x: 10, y: 5\n    return 0;\n}',
              explanation:
                'Demonstrates clean pass-by-reference without clumsy pointer syntax.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Returning a reference to a local stack variable from a function.',
              explanation:
                'The local variable is destroyed when the function returns, leaving a dangling reference that causes crashes.',
            },
          ],
          quickChecks: [
            {
              question: 'Can a C++ reference be NULL?',
              answer:
                'No, references must always bind to a valid object upon declaration',
              options: [
                'Yes, using nullptr',
                'No, references must always bind to a valid object',
                'Only in debug mode',
                'Only if declared const',
              ],
              correctAnswer: 1,
              explanation: 'References are guaranteed non-null aliases.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Write a function increment(int &val) that modifies its argument in-place via reference',
              difficulty: 'easy',
              concepts: ['references', 'pass-by-reference'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 20,
        },
      ],
    },

    // =============================================================
    // MODULE 2: CONTROL FLOW & STANDARD STRINGS
    // =============================================================
    {
      id: 'cpp-mod-control-strings',
      title: 'Control Flow & Modern Strings',
      order: 2,
      description:
        'Range-based for loops, auto type deduction, std::string class, methods, and slicing.',
      topics: [
        // ---------------------------------------------------------
        // TOPIC 2.1: AUTO & RANGE-BASED LOOPS
        // ---------------------------------------------------------
        {
          id: 'cpp-auto-and-range-loops',
          title: 'auto Type Deduction & Range-Based for Loops',
          slug: 'auto-and-range-loops',
          description:
            'Compiler type deduction with auto, iterating containers effortlessly with for (const auto &item : container).',
          learningObjectives: [
            'Use auto for compiler-deduced variable types.',
            'Write modern range-based for loops.',
            'Combine const auto & to iterate containers without copying.',
          ],
          prerequisites: ['cpp-references-vs-pointers'],
          conceptSummary:
            '`auto` deduces variable types at compile time; range-based `for (const auto &x : seq)` iterates collections cleanly.',
          detailedExplanation:
            'Introduced in C++11, `auto` lets the compiler determine the exact type from the initialization expression, drastically reducing boilerplate for complex types (like iterators). Range-based for loops iterate any container implementing `.begin()` and `.end()`. Using `const auto &item` prevents expensive element copies.',
          syntaxExplanation:
            'auto count = 10; // Deduced as int\nint scores[] = {90, 85, 95};\nfor (const auto &s : scores) {\n    std::cout << s << " ";\n}',
          howItWorks: [
            'The compiler synthesizes begin/end iterator loops at compile time.',
          ],
          examples: [
            {
              title: 'Range-Based Mutation Loop',
              code:
                '#include <iostream>\n\nint main() {\n    int values[] = {1, 2, 3, 4};\n    // By reference (auto &) allows in-place modification:\n    for (auto &v : values) v *= 10;\n    // Read-only (const auto &):\n    for (const auto &v : values) std::cout << v << " ";\n    std::cout << "\\n";\n    return 0;\n}',
              explanation:
                'Doubles array values in place using auto reference binding.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Using for (auto x : large_container) which copies every single element into memory.',
              explanation:
                'Use const auto &x to iterate efficiently by reference without copying.',
            },
          ],
          quickChecks: [
            {
              question:
                'What does the auto keyword do in modern C++ (C++11+)?',
              answer:
                'Deduces the variable type automatically at compile time from its initializer',
              options: [
                'Allocates memory on heap',
                'Deduces the variable type automatically at compile time',
                'Makes variables dynamic like Python',
                'Executes code automatically',
              ],
              correctAnswer: 1,
              explanation:
                'auto provides compile-time static type deduction.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Iterate an array of numbers and print only even values using a range-based loop with const auto&',
              difficulty: 'easy',
              concepts: ['auto', 'range-based for'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 20,
        },

        // ---------------------------------------------------------
        // TOPIC 2.2: STD::STRING
        // ---------------------------------------------------------
        {
          id: 'cpp-std-string',
          title: 'The std::string Class',
          slug: 'std-string',
          description:
            'Dynamic strings, concatenation (+), length(), substr(), find(), Small String Optimization (SSO), and c_str().',
          learningObjectives: [
            'Use std::string for dynamic text handling.',
            'Perform searching, concatenation, and slicing.',
            'Understand Small String Optimization (SSO).',
            'Interface with C libraries using .c_str().',
          ],
          prerequisites: ['cpp-auto-and-range-loops'],
          conceptSummary:
            '`std::string` is a dynamic, self-resizing character container that handles memory allocation and bounds safely.',
          detailedExplanation:
            'Unlike C\'s raw `char *` arrays, `std::string` automatically manages memory growth. Most standard library implementations include Small String Optimization (SSO), storing strings shorter than ~15-22 characters directly on the stack without heap allocation. Use `.c_str()` to pass a null-terminated pointer to legacy C APIs.',
          syntaxExplanation:
            '#include <string>\nstd::string s = "Hello";\ns += " World!";\nsize_t pos = s.find("World");\nstd::string sub = s.substr(pos, 5);',
          howItWorks: [
            'Manages internal pointer, capacity, and size; uses SSO buffer for short strings.',
          ],
          examples: [
            {
              title: 'String Manipulation and Inspection',
              code:
                '#include <iostream>\n#include <string>\n\nint main() {\n    std::string text = "C++ Systems Programming";\n    std::cout << "Length: " << text.length() << "\\n";\n    std::cout << "Contains \'Systems\': " << (text.find("Systems") != std::string::npos) << "\\n";\n    return 0;\n}',
              explanation:
                'Demonstrates length inspection and substring search.',
            },
          ],
          commonMistakes: [
            {
              mistake: 'Assuming text.find() returns -1 on failure.',
              explanation:
                'find() returns std::string::npos (maximum size_t value) when not found; check != std::string::npos.',
            },
          ],
          quickChecks: [
            {
              question:
                'What does s.find("target") return if the substring is NOT found in std::string s?',
              answer: 'std::string::npos',
              options: ['-1', '0', 'std::string::npos', 'NULL'],
              correctAnswer: 2,
              explanation:
                'std::string::npos represents an unfound index.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Write a program to reverse a std::string in place using std::reverse from <algorithm>',
              difficulty: 'easy',
              concepts: ['std::string', 'reverse'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 20,
        },
      ],
    },
  ],
};

export default cppBeginner;