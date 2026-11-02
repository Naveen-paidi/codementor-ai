/**
 * C++ Curriculum — Advanced Level (GeeksforGeeks-Style Structure)
 * Modules 5-6: Smart Pointers & Move Semantics/Modern C++ Architecture
 *
 * Each topic follows: Overview -> Objectives -> Prerequisites -> Concept ->
 * Detailed Explanation -> Syntax -> How It Works -> Examples ->
 * Common Mistakes -> Quick Checks -> Practice Questions -> Difficulty
 *
 * Self-contained local curriculum source of truth.
 */

export const cppAdvanced = {
  id: 'cpp-advanced',
  title: 'Level 3: Modern C++ Systems, Move Semantics & Concurrency',
  level: 3,
  difficulty: 'advanced',
  description:
    'Deep dive into modern C++ engineering: smart pointers (unique_ptr, shared_ptr, weak_ptr), move semantics & rvalue references (std::move, perfect forwarding), compile-time computation (constexpr), multithreading, and zero-leak resource management.',

  modules: [
    // =============================================================
    // MODULE 5: MODERN MEMORY MANAGEMENT & SMART POINTERS
    // =============================================================
    {
      id: 'cpp-mod-smart-pointers',
      title: 'Modern Memory Management & Smart Pointers',
      order: 5,
      description:
        'Eliminating raw new/delete, exclusive ownership with std::unique_ptr, shared ownership with std::shared_ptr, and cycle breaking with std::weak_ptr.',
      topics: [
        // ---------------------------------------------------------
        // TOPIC 5.1: UNIQUE & SHARED POINTERS
        // ---------------------------------------------------------
        {
          id: 'cpp-smart-pointers-unique-shared',
          title: 'Smart Pointers: std::unique_ptr and std::shared_ptr',
          slug: 'smart-pointers-unique-shared',
          description:
            'Exclusive ownership (std::unique_ptr, std::make_unique) and reference-counted shared ownership (std::shared_ptr, std::make_shared).',
          learningObjectives: [
            'Replace raw pointers with modern smart pointers from <memory>.',
            'Enforce single ownership with std::unique_ptr.',
            'Share ownership with reference-counted std::shared_ptr.',
            'Always prefer std::make_unique and std::make_shared.',
          ],
          prerequisites: ['cpp-intermediate'],
          conceptSummary:
            'Smart pointers wrap raw heap pointers inside RAII objects that automatically delete the managed memory when the pointer goes out of scope.',
          detailedExplanation:
            'Modern C++ forbids manual `new` and `delete`. 1. `std::unique_ptr`: zero-cost exclusive ownership (cannot be copied, only moved). 2. `std::shared_ptr`: thread-safe reference-counted shared ownership; frees memory when the last owner is destroyed. Always use `std::make_unique<T>()` and `std::make_shared<T>()` for exception safety and single allocation efficiency.',
          syntaxExplanation:
            '#include <memory>\n// Exclusive ownership:\nauto uptr = std::make_unique<Device>("Sensor-1");\n// Shared ownership:\nauto sptr1 = std::make_shared<DataPacket>();\nauto sptr2 = sptr1; // Reference count becomes 2',
          howItWorks: [
            'unique_ptr has zero size overhead (same as raw pointer); shared_ptr allocates an atomic control block for ref-counts.',
          ],
          examples: [
            {
              title: 'Leak-Free Resource Management with unique_ptr',
              code:
                '#include <iostream>\n#include <memory>\n\nclass Resource {\npublic:\n    Resource() { std::cout << "Resource acquired.\\n"; }\n    ~Resource() { std::cout << "Resource safely destroyed.\\n"; }\n};\nvoid process() {\n    auto res = std::make_unique<Resource>();\n    // Even if an exception is thrown here, res is GUARANTEED deleted!\n}\nint main() {\n    process();\n    return 0;\n}',
              explanation:
                'Demonstrates guaranteed automated deallocation upon scope exit.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Using raw delete on a pointer managed by a smart pointer.',
              explanation:
                'Causes a double-free crash when the smart pointer attempts to destroy the resource again upon exiting scope.',
            },
          ],
          quickChecks: [
            {
              question:
                'Can a std::unique_ptr be copied to another std::unique_ptr variable?',
              answer:
                'No, it can only be moved (std::move) because it represents exclusive ownership',
              options: [
                'Yes, always',
                'No, it can only be moved (std::move)',
                'Only if declared const',
                'Only with primitives',
              ],
              correctAnswer: 1,
              explanation:
                'unique_ptr copy constructor is deleted; it enforces single ownership through move semantics.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Implement a Factory function that creates and returns a std::unique_ptr to a base class object',
              difficulty: 'advanced',
              concepts: ['std::unique_ptr', 'std::make_unique', 'factory'],
            },
          ],
          difficulty: 'advanced',
          estimatedMinutes: 25,
        },

        // ---------------------------------------------------------
        // TOPIC 5.2: WEAK POINTERS & CYCLES
        // ---------------------------------------------------------
        {
          id: 'cpp-weak-ptr-and-cycles',
          title: 'std::weak_ptr and Breaking Reference Cycles',
          slug: 'weak-ptr-and-cycles',
          description:
            'Non-owning observer pointers, preventing circular reference memory leaks, and checking validity with .lock().',
          learningObjectives: [
            'Identify reference cycle memory leaks with std::shared_ptr.',
            'Break cycles using std::weak_ptr.',
            'Safely access managed objects using weak_ptr.lock().',
          ],
          prerequisites: ['cpp-smart-pointers-unique-shared'],
          conceptSummary:
            '`std::weak_ptr` holds a non-owning reference to an object managed by `std::shared_ptr`, preventing circular reference leaks.',
          detailedExplanation:
            'If Object A holds a `shared_ptr` to B, and B holds a `shared_ptr` to A, their reference counts never reach zero, causing a permanent memory leak. Replacing one direction with `std::weak_ptr` breaks the cycle. To use a `weak_ptr`, call `.lock()`: if the object is still alive, it returns a temporary valid `shared_ptr`; otherwise, it returns `nullptr`.',
          syntaxExplanation:
            'std::shared_ptr<Node> a = std::make_shared<Node>();\nstd::weak_ptr<Node> w = a; // Does not increment strong ref count!\nif (auto locked = w.lock()) {\n    // Object is alive! Use locked safely.\n}',
          howItWorks: [
            'weak_ptr increments weak count in the shared control block without incrementing strong reference count.',
          ],
          examples: [
            {
              title: 'Circular Graph Node Resolution with weak_ptr',
              code:
                '#include <iostream>\n#include <memory>\n\nstruct Node {\n    std::string name;\n    std::weak_ptr<Node> neighbor; // weak_ptr breaks cycle!\n    Node(std::string n) : name(n) {}\n    ~Node() { std::cout << name << " destroyed.\\n"; }\n};\nint main() {\n    auto n1 = std::make_shared<Node>("NodeA");\n    auto n2 = std::make_shared<Node>("NodeB");\n    n1->neighbor = n2;\n    n2->neighbor = n1; // Safe! No memory leak.\n    return 0;\n}',
              explanation:
                'Breaks circular reference allowing proper destruction.',
            },
          ],
          commonMistakes: [
            {
              mistake: 'Dereferencing a weak_ptr directly with * or ->.',
              explanation:
                'weak_ptr cannot be dereferenced directly; always call .lock() to acquire a shared_ptr first.',
            },
          ],
          quickChecks: [
            {
              question:
                'How do you safely convert a std::weak_ptr into a usable std::shared_ptr?',
              answer: 'By calling the .lock() method',
              options: [
                'By typecasting',
                'By calling the .lock() method',
                'Using std::move',
                'Using the -> operator directly',
              ],
              correctAnswer: 1,
              explanation:
                '.lock() returns a valid shared_ptr or nullptr if the object expired.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Build an Observer pattern where subjects maintain a list of observers as std::weak_ptr',
              difficulty: 'advanced',
              concepts: ['std::weak_ptr', 'observer pattern'],
            },
          ],
          difficulty: 'advanced',
          estimatedMinutes: 25,
        },
      ],
    },

    // =============================================================
    // MODULE 6: MOVE SEMANTICS & MODERN C++ ARCHITECTURE
    // =============================================================
    {
      id: 'cpp-mod-move-semantics-modern',
      title: 'Move Semantics, Rvalues & Modern Architecture',
      order: 6,
      description:
        'Lvalues vs Rvalues, rvalue references (&&), std::move, move constructors, perfect forwarding, and multithreading.',
      topics: [
        // ---------------------------------------------------------
        // TOPIC 6.1: MOVE SEMANTICS
        // ---------------------------------------------------------
        {
          id: 'cpp-move-semantics-rvalues',
          title: 'Move Semantics and Rvalue References (&&)',
          slug: 'move-semantics-rvalues',
          description:
            'Lvalues (named locations) vs Rvalues (temporary values), std::move, stealing resources, and move constructors.',
          learningObjectives: [
            'Differentiate lvalues from temporary rvalues.',
            'Declare rvalue references with &&.',
            'Implement move constructors and move assignment operators.',
            'Cast to rvalues using std::move.',
          ],
          prerequisites: ['cpp-intermediate'],
          conceptSummary:
            'Move semantics allows transferring ("stealing") internal pointers from temporary objects (rvalues) instead of performing expensive deep copies.',
          detailedExplanation:
            'Before C++11, returning a 100MB vector from a function required copying all 100MB. With move semantics and rvalue references `&&`, the new vector simply steals the internal memory pointer from the dying temporary object and nullifies the source in O(1) time. `std::move(x)` unconditionally casts an lvalue to an rvalue reference, signaling that `x` can be pilfered.',
          syntaxExplanation:
            'class HeavyData {\n    int *buffer;\npublic:\n    // Move Constructor (noexcept is crucial!):\n    HeavyData(HeavyData &&other) noexcept : buffer(other.buffer) {\n        other.buffer = nullptr; // Pilfered!\n    }\n};',
          howItWorks: [
            'Rebinds internal heap pointers in CPU registers without allocating or copying buffer memory.',
          ],
          examples: [
            {
              title: 'Observing Zero-Copy std::move in Action',
              code:
                '#include <iostream>\n#include <vector>\n#include <string>\n\nint main() {\n    std::string source = "Massive payload string requiring heap allocation";\n    // std::move transfers ownership without copying:\n    std::string destination = std::move(source);\n    std::cout << "Destination: " << destination << "\\n";\n    std::cout << "Source after move (empty): \'" << source << "\'\\n";\n    return 0;\n}',
              explanation:
                'Transfers internal string buffer in O(1) time without heap reallocation.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Using an object after calling std::move on it.',
              explanation:
                'A moved-from object is in a "valid but unspecified" state (usually empty); do not read its values.',
            },
          ],
          quickChecks: [
            {
              question:
                'What does std::move actually do at runtime?',
              answer:
                'It performs a static cast to an rvalue reference (Type&&) without executing any move code itself',
              options: [
                'Physically moves bytes in RAM',
                'Performs a static cast to an rvalue reference (Type&&)',
                'Deletes the original object',
                'Copies the object',
              ],
              correctAnswer: 1,
              explanation:
                'std::move is simply an unconditional cast to an rvalue reference.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Implement a custom DynamicArray class with both Copy and Move constructors and measure the performance difference',
              difficulty: 'advanced',
              concepts: [
                'move semantics',
                'rvalue references',
                'std::move',
              ],
            },
          ],
          difficulty: 'advanced',
          estimatedMinutes: 30,
        },

        // ---------------------------------------------------------
        // TOPIC 6.2: CONSTEXPR & CONCURRENCY
        // ---------------------------------------------------------
        {
          id: 'cpp-constexpr-and-concurrency',
          title: 'Compile-Time constexpr and Concurrency',
          slug: 'constexpr-and-concurrency',
          description:
            'Evaluating functions at compile time with constexpr, and multithreading with std::jthread, std::mutex, and std::lock_guard.',
          learningObjectives: [
            'Compute calculations at compile time with constexpr.',
            'Spawn threads using modern std::jthread (auto-joining).',
            'Protect shared state with std::mutex and std::lock_guard.',
          ],
          prerequisites: ['cpp-move-semantics-rvalues'],
          conceptSummary:
            '`constexpr` executes computations at compile time; modern multithreading (`std::jthread`, `std::mutex`) coordinates concurrent CPU execution.',
          detailedExplanation:
            '`constexpr` instructs the compiler to compute expressions during compilation whenever possible, embedding results as immediate constants in the binary. For concurrency, C++20 introduced `std::jthread` (auto-joining cooperative thread). Access to shared variables across threads is guarded with `std::mutex` and `std::lock_guard` for RAII lock acquisition and release.',
          syntaxExplanation:
            'constexpr int square(int x) { return x * x; }\nstatic_assert(square(5) == 25); // Evaluated at compile time!\n\nstd::mutex mtx;\nstd::lock_guard<std::mutex> lock(mtx); // Thread-safe lock',
          howItWorks: [
            "constexpr expressions are evaluated in the compiler's constant folding engine; threads map to native OS pthreads.",
          ],
          examples: [
            {
              title: 'Thread-Safe Work Queue with std::jthread',
              code:
                '#include <iostream>\n#include <thread>\n#include <mutex>\n\nstd::mutex cout_mtx;\nvoid worker(int id) {\n    std::lock_guard<std::mutex> lock(cout_mtx);\n    std::cout << "Thread " << id << " working safely.\\n";\n}\nint main() {\n    // std::jthread joins automatically on destruction in C++20!\n    std::jthread t1(worker, 1);\n    std::jthread t2(worker, 2);\n    return 0;\n}',
              explanation:
                'Coordinates concurrent threads with RAII locking and automatic joining.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Using std::thread in C++11 and forgetting to call .join() or .detach() before destruction.',
              explanation:
                'Destructing an unjoined joinable std::thread calls std::terminate, immediately crashing the process.',
            },
          ],
          quickChecks: [
            {
              question:
                'What is the key advantage of C++20 std::jthread over C++11 std::thread?',
              answer:
                'It automatically joins on destruction and supports cooperative cancellation',
              options: [
                'It runs on the GPU',
                'It automatically joins on destruction and supports cooperative cancellation',
                'It does not require mutexes',
                'It is single-threaded',
              ],
              correctAnswer: 1,
              explanation:
                'std::jthread joins on teardown, preventing std::terminate crashes.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Write a compile-time constexpr factorial calculator verified by static_assert',
              difficulty: 'advanced',
              concepts: ['constexpr', 'static_assert', 'multithreading'],
            },
          ],
          difficulty: 'advanced',
          estimatedMinutes: 30,
        },
      ],
    },
  ],
};

export default cppAdvanced;