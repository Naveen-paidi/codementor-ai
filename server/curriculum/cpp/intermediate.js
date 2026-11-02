/**
 * C++ Curriculum — Intermediate Level (GeeksforGeeks-Style Structure)
 * Modules 3-4: Classes/RAII/Destructors & Templates/STL
 *
 * Each topic follows: Overview -> Objectives -> Prerequisites -> Concept ->
 * Detailed Explanation -> Syntax -> How It Works -> Examples ->
 * Common Mistakes -> Quick Checks -> Practice Questions -> Difficulty
 *
 * Self-contained local curriculum source of truth.
 */

export const cppIntermediate = {
  id: 'cpp-intermediate',
  title: 'Level 2: C++ OOP, Templates & Standard Template Library (STL)',
  level: 2,
  difficulty: 'intermediate',
  description:
    'Master C++ Object-Oriented design: member initializer lists, destructors, RAII, virtual functions & vtables, pure virtual abstract interfaces, generic Templates, and the Standard Template Library (vector, map, algorithms, lambdas).',

  modules: [
    // =============================================================
    // MODULE 3: OBJECT-ORIENTED PROGRAMMING & RAII
    // =============================================================
    {
      id: 'cpp-mod-classes-raii',
      title: 'Classes, RAII & Destructors',
      order: 3,
      description:
        'Member initializer lists, constructor delegating, destructors, Resource Acquisition Is Initialization (RAII), and static members.',
      topics: [
        // ---------------------------------------------------------
        // TOPIC 3.1: CLASSES & DESTRUCTORS
        // ---------------------------------------------------------
        {
          id: 'cpp-classes-constructors-destructors',
          title: 'Classes, Initializer Lists, and Destructors',
          slug: 'classes-constructors-destructors',
          description:
            'Defining classes, member initialization lists (prefer over body assignment), and deterministic destructors (~ClassName).',
          learningObjectives: [
            'Define classes with public, protected, and private access.',
            'Initialize members using member initializer lists.',
            'Write destructors (~Class) for automatic deterministic cleanup.',
            'Understand RAII.',
          ],
          prerequisites: ['cpp-beginner'],
          conceptSummary:
            'Classes encapsulate data and behavior; member initializer lists construct fields directly; destructors guarantee deterministic cleanup.',
          detailedExplanation:
            'In C++, destructors `~ClassName()` execute automatically the instant an object goes out of scope. This enables RAII (Resource Acquisition Is Initialization): acquiring resources in the constructor and releasing them deterministically in the destructor, eliminating manual cleanup and resource leaks.',
          syntaxExplanation:
            'class Buffer {\nprivate:\n    int *data;\n    size_t size;\npublic:\n    // Member Initializer List:\n    Buffer(size_t s) : size(s), data(new int[s]) {}\n    // Destructor:\n    ~Buffer() { delete[] data; }\n};',
          howItWorks: [
            'Compiler emits destructor call instructions at all scope exit points (including exceptions).',
          ],
          examples: [
            {
              title: 'RAII File Wrapper Pattern',
              code:
                '#include <iostream>\n\nclass ScopedFile {\n    FILE *fp;\npublic:\n    ScopedFile(const char *filename, const char *mode) {\n        fp = fopen(filename, mode);\n    }\n    ~ScopedFile() {\n        if (fp) { fclose(fp); std::cout << "File closed automatically.\\n"; }\n    }\n    bool is_open() const { return fp != nullptr; }\n};\nint main() {\n    { ScopedFile file("test.txt", "w"); } // Closed immediately when exiting scope!\n    return 0;\n}',
              explanation:
                'Demonstrates guaranteed RAII resource cleanup at closing brace.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Assigning to fields inside the constructor body instead of using member initializer lists.',
              explanation:
                'Body assignment default-constructs fields first and then overwrites them, causing unnecessary double initialization.',
            },
          ],
          quickChecks: [
            {
              question:
                "When does a C++ object's destructor (~ClassName) execute?",
              answer:
                'Automatically when the object exits its lexical scope (or is deleted)',
              options: [
                'When garbage collection runs',
                'Automatically when the object exits its lexical scope',
                'Only when manually called',
                'At system shutdown',
              ],
              correctAnswer: 1,
              explanation:
                'C++ destructors run deterministically upon scope exit.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Design a Timer class whose destructor prints the elapsed execution time of its enclosing scope',
              difficulty: 'intermediate',
              concepts: ['destructor', 'RAII', 'chrono'],
            },
          ],
          difficulty: 'intermediate',
          estimatedMinutes: 25,
        },

        // ---------------------------------------------------------
        // TOPIC 3.2: INHERITANCE & VIRTUAL FUNCTIONS
        // ---------------------------------------------------------
        {
          id: 'cpp-inheritance-and-virtual-functions',
          title: 'Inheritance, Polymorphism & Virtual Functions',
          slug: 'inheritance-and-virtual-functions',
          description:
            'Class inheritance, runtime dynamic dispatch with virtual functions, override keyword, pure virtual functions (= 0), and vtables.',
          learningObjectives: [
            'Extend classes using public inheritance.',
            'Declare virtual functions for dynamic method dispatch.',
            'Use override and final keywords.',
            'Understand virtual method tables (vtable and vptr).',
          ],
          prerequisites: ['cpp-classes-constructors-destructors'],
          conceptSummary:
            '`virtual` enables runtime polymorphism through virtual method tables (vtables); pure virtual functions (`= 0`) define abstract interfaces.',
          detailedExplanation:
            'Without `virtual`, C++ binds method calls statically at compile time based on the pointer/reference type. Marking a method `virtual` instructs the compiler to insert a hidden `vptr` into the object pointing to a `vtable` of function pointers. When invoked, it resolves the derived class method at runtime.',
          syntaxExplanation:
            'class Shape {\npublic:\n    virtual ~Shape() = default; // Always make base destructors virtual!\n    virtual double area() const = 0; // Pure virtual function\n};\nclass Circle : public Shape {\n    double r;\npublic:\n    Circle(double radius) : r(radius) {}\n    double area() const override { return 3.14159 * r * r; }\n};',
          howItWorks: [
            'The compiler assigns each class with virtual functions a static vtable; calls dereference vptr -> vtable offset.',
          ],
          examples: [
            {
              title: 'Polymorphic Interface Dispatch',
              code:
                '#include <iostream>\n\nclass Logger {\npublic:\n    virtual ~Logger() = default;\n    virtual void log(const std::string &msg) = 0;\n};\nclass ConsoleLogger : public Logger {\npublic:\n    void log(const std::string &msg) override {\n        std::cout << "[CONSOLE] " << msg << "\\n";\n    }\n};\nvoid report(Logger &logger) { logger.log("System operational"); }\nint main() {\n    ConsoleLogger cl;\n    report(cl); // Dispatches dynamically\n    return 0;\n}',
              explanation:
                'Dispatches polymorphic calls through a base interface reference.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Failing to declare a virtual destructor in a base class with virtual functions.',
              explanation:
                'Deleting a derived object via a base pointer with a non-virtual destructor results in undefined behavior and memory leaks.',
            },
          ],
          quickChecks: [
            {
              question:
                'Why must a polymorphic base class declare a virtual destructor?',
              answer:
                'To ensure derived class destructors are properly called when deleting through a base pointer',
              options: [
                'It speeds up allocation',
                'To ensure derived class destructors are properly called',
                'It is required by g++',
                'To allow multiple inheritance',
              ],
              correctAnswer: 1,
              explanation:
                'Virtual destructors guarantee complete teardown through base pointers.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Create an abstract PaymentProcessor with pure virtual process_payment, implemented by CreditCard and Crypto',
              difficulty: 'intermediate',
              concepts: ['virtual', 'override', 'abstract class'],
            },
          ],
          difficulty: 'intermediate',
          estimatedMinutes: 25,
        },
      ],
    },

    // =============================================================
    // MODULE 4: TEMPLATES & THE STL
    // =============================================================
    {
      id: 'cpp-mod-templates-stl',
      title: 'Templates & Standard Template Library (STL)',
      order: 4,
      description:
        'Function and class templates, STL sequential containers (vector), associative containers (map, set), and algorithms (std::sort, lambdas).',
      topics: [
        // ---------------------------------------------------------
        // TOPIC 4.1: TEMPLATES
        // ---------------------------------------------------------
        {
          id: 'cpp-templates-generic-programming',
          title: 'Templates: Function and Class Templates',
          slug: 'templates-generic-programming',
          description:
            'Writing generic code with template <typename T>, compile-time template instantiation, and specialized implementations.',
          learningObjectives: [
            'Write generic function templates.',
            'Define generic class templates.',
            'Understand compile-time template instantiation.',
          ],
          prerequisites: ['cpp-classes-constructors-destructors'],
          conceptSummary:
            'Templates are blueprints that allow functions and classes to operate on any type without runtime overhead, instantiated at compile time.',
          detailedExplanation:
            'Unlike languages that use runtime type erasure or boxing, C++ templates generate specialized, optimized machine code for each unique type used. When you invoke `add(2, 3)` and `add(2.5, 3.1)`, the compiler generates separate, highly optimized functions for `int` and `double` with zero runtime penalty.',
          syntaxExplanation:
            'template <typename T>\nT clamp(T val, T min_val, T max_val) {\n    if (val < min_val) return min_val;\n    if (val > max_val) return max_val;\n    return val;\n}',
          howItWorks: [
            'The compiler stamps out concrete C++ code for each concrete type combination during the compilation phase.',
          ],
          examples: [
            {
              title: 'Generic Stack Template Class',
              code:
                '#include <iostream>\n#include <vector>\n\ntemplate <typename T>\nclass SimpleStack {\n    std::vector<T> elements;\npublic:\n    void push(const T &item) { elements.push_back(item); }\n    T pop() {\n        T top = elements.back();\n        elements.pop_back();\n        return top;\n    }\n    bool empty() const { return elements.empty(); }\n};\nint main() {\n    SimpleStack<std::string> words;\n    words.push("World"); words.push("Hello");\n    std::cout << words.pop() << " " << words.pop() << "\\n"; // Hello World\n    return 0;\n}',
              explanation:
                'Creates a fully generic stack container for any type T.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Putting template definitions in .cpp files instead of header files (.h).',
              explanation:
                'The compiler needs the full template definition visible in every translation unit to instantiate code; template definitions must live in headers.',
            },
          ],
          quickChecks: [
            {
              question:
                'When are C++ templates instantiated into executable code?',
              answer: 'At compile time',
              options: [
                'At runtime',
                'At compile time',
                'During JIT compilation',
                'During linking only',
              ],
              correctAnswer: 1,
              explanation:
                'Templates are instantiated at compile time for every referenced type.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Write a template function find_max(T a, T b) supporting any type that implements operator>',
              difficulty: 'intermediate',
              concepts: ['templates', 'generic programming'],
            },
          ],
          difficulty: 'intermediate',
          estimatedMinutes: 25,
        },

        // ---------------------------------------------------------
        // TOPIC 4.2: STL VECTOR & CONTAINERS
        // ---------------------------------------------------------
        {
          id: 'cpp-stl-vector-and-containers',
          title: 'The STL: std::vector and Containers',
          slug: 'stl-vector-and-containers',
          description:
            'Sequential containers (std::vector, std::deque), associative containers (std::map, std::set), and unordered hash tables.',
          learningObjectives: [
            'Master std::vector operations: push_back, emplace_back, size, capacity, reserve.',
            'Use std::map and std::unordered_map for key-value lookups.',
            'Understand iterator ranges (begin(), end()).',
          ],
          prerequisites: ['cpp-templates-generic-programming'],
          conceptSummary:
            '`std::vector` is the default dynamic array; `std::map` is a sorted Red-Black tree; `std::unordered_map` is an O(1) hash table.',
          detailedExplanation:
            '`std::vector` stores elements contiguously in heap memory. Calling `.reserve(n)` preallocates memory, avoiding reallocations. `emplace_back(...)` constructs objects in place, avoiding temporary copies. `std::map` keeps keys sorted (O(log n)), while `std::unordered_map` provides average O(1) hash lookups.',
          syntaxExplanation:
            '#include <vector>\n#include <map>\n\nstd::vector<int> nums = {1, 2, 3};\nnums.push_back(4);\n\nstd::map<std::string, int> stock;\nstock["Laptops"] = 25;',
          howItWorks: [
            'vector allocates contiguous buffer doubling on exhaustion; map maintains self-balancing binary search tree.',
          ],
          examples: [
            {
              title:
                'High-Performance Vector with reserve and emplace_back',
              code:
                '#include <iostream>\n#include <vector>\n\nstruct Item { int id; std::string name;\n    Item(int i, std::string n) : id(i), name(n) {}\n};\nint main() {\n    std::vector<Item> inventory;\n    inventory.reserve(100); // Preallocates space for 100 items!\n    // Constructs directly in vector buffer (no temporary copy!):\n    inventory.emplace_back(1, "Monitor");\n    std::cout << "Items: " << inventory.size() << ", Capacity: " << inventory.capacity() << "\\n";\n    return 0;\n}',
              explanation:
                'Optimizes dynamic vector allocations using reserve and emplace_back.',
            },
          ],
          commonMistakes: [
            {
              mistake: 'Using [] on std::map for read-only lookups.',
              explanation:
                'map[key] automatically inserts an empty default entry if the key does not exist! Use map.find() or map.at() for read-only lookups.',
            },
          ],
          quickChecks: [
            {
              question:
                'What is the standard, default dynamic array container recommended for almost all sequential data in C++?',
              answer: 'std::vector',
              options: [
                'std::list',
                'std::vector',
                'std::deque',
                'raw C array',
              ],
              correctAnswer: 1,
              explanation:
                'std::vector provides superior cache locality and contiguous memory storage.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Count word frequencies in a vector of strings using std::unordered_map',
              difficulty: 'intermediate',
              concepts: ['std::vector', 'std::unordered_map'],
            },
          ],
          difficulty: 'intermediate',
          estimatedMinutes: 25,
        },

        // ---------------------------------------------------------
        // TOPIC 4.3: STL ALGORITHMS & LAMBDAS
        // ---------------------------------------------------------
        {
          id: 'cpp-stl-algorithms-and-lambdas',
          title: 'STL Algorithms and Lambda Expressions',
          slug: 'stl-algorithms-and-lambdas',
          description:
            '<algorithm> power tools (std::sort, std::find_if, std::transform) and modern C++ lambda capture syntax ([=], [&]).',
          learningObjectives: [
            'Apply standard algorithms: std::sort, std::find_if, std::transform, std::accumulate.',
            'Write modern lambda expressions: [captures](params) { body }.',
            'Capture variables by value ([=]) and by reference ([&]).',
          ],
          prerequisites: ['cpp-stl-vector-and-containers'],
          conceptSummary:
            'The STL separates containers from algorithms using iterators; lambdas provide custom in-place sorting and filtering predicates.',
          detailedExplanation:
            'STL algorithms operate on iterator pairs `[first, last)`. Modern C++ lambdas define inline anonymous function objects: `[capture-clause](parameters) -> return-type { body }`. `[x]` captures x by copy; `[&x]` captures by reference; `[=]` captures all enclosing variables by copy; `[&]` captures all by reference.',
          syntaxExplanation:
            '#include <algorithm>\n// Lambda sort in descending order:\nstd::sort(nums.begin(), nums.end(), [](int a, int b) {\n    return a > b;\n});',
          howItWorks: [
            'The compiler generates an anonymous functor class with operator() and captured member fields.',
          ],
          examples: [
            {
              title:
                'Filtering and Transforming with std::transform and Lambdas',
              code:
                '#include <iostream>\n#include <vector>\n#include <algorithm>\n\nint main() {\n    std::vector<int> inputs = {1, 2, 3, 4};\n    std::vector<int> squares(inputs.size());\n    std::transform(inputs.begin(), inputs.end(), squares.begin(), [](int n) {\n        return n * n;\n    });\n    for (int sq : squares) std::cout << sq << " "; // 1 4 9 16\n    std::cout << "\\n";\n    return 0;\n}',
              explanation:
                'Transforms elements into a new vector using a lambda.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Capturing local variables by reference ([&]) in a lambda that outlives the enclosing function scope.',
              explanation:
                'Creates dangling references and crashes. Capture by value ([=] or explicit [var]) when lambdas escape their scope.',
            },
          ],
          quickChecks: [
            {
              question:
                'What does the capture clause [&] indicate in a C++ lambda expression?',
              answer:
                'Captures all enclosing local variables by reference',
              options: [
                'Captures nothing',
                'Captures all enclosing local variables by reference',
                'Captures everything by copy',
                'Makes the lambda global',
              ],
              correctAnswer: 1,
              explanation:
                '[&] captures surrounding variables by reference.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Find the first negative number in a vector using std::find_if and a lambda',
              difficulty: 'intermediate',
              concepts: ['std::find_if', 'lambdas', 'algorithm'],
            },
          ],
          difficulty: 'intermediate',
          estimatedMinutes: 25,
        },
      ],
    },
  ],
};

export default cppIntermediate;