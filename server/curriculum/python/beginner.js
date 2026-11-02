/**
 * Python Curriculum — Beginner Level (GeeksforGeeks-Style Structure)
 * Modules 1-11: Introduction, Basics, Operators, Control Flow, Strings,
 * Lists, Tuples, Sets, Dictionaries, Functions, Modules & Packages.
 *
 * Each topic follows: Overview -> Objectives -> Prerequisites -> Concept ->
 * Detailed Explanation -> Syntax -> How It Works -> Examples ->
 * Common Mistakes -> Quick Checks -> Practice Questions -> Difficulty
 *
 * Self-contained local curriculum source of truth.
 */

export const pythonBeginner = {
  id: 'python-beginner',
  title: 'Level 1: Python Beginner Foundations',
  level: 1,
  difficulty: 'beginner',
  description:
    'From absolute scratch to writing idiomatic Python programs: syntax, data types, control flow, strings, lists, tuples, sets, dictionaries, functions, and modular code organization.',

  modules: [
    // =============================================================
    // MODULE 1: INTRODUCTION TO PYTHON
    // =============================================================
    {
      id: 'python-mod-introduction',
      title: 'Introduction to Python',
      order: 1,
      description:
        'Understanding Python philosophy, runtime architecture, installation, and writing your very first program.',
      topics: [
        // ---------------------------------------------------------
        // TOPIC 1.1: WHAT IS PYTHON?
        // ---------------------------------------------------------
        {
          id: 'python-what-is-python',
          title: 'What is Python?',
          slug: 'what-is-python',
          description:
            'Overview of Python as a high-level, interpreted, general-purpose programming language.',
          learningObjectives: [
            'Define Python and its primary design philosophy.',
            'Distinguish between interpreted and compiled programming languages.',
            'Identify key domains where Python is utilized.',
          ],
          prerequisites: [],
          conceptSummary:
            'Python is a modern, high-level, dynamically typed language created for readability, productivity, and versatility.',
          detailedExplanation:
            'Python was created by Guido van Rossum and released in 1991. It emphasizes human code readability with clean syntax and minimal boilerplate. Python code is interpreted at runtime rather than converted ahead-of-time to machine code.',
          syntaxExplanation:
            '# Python relies on English-like syntax and strict indentation\nprint("Hello, World!")',
          howItWorks: [
            'Source code (.py) is compiled into Python bytecode (.pyc).',
            'The Python Virtual Machine (PVM) reads bytecode line-by-line and executes it.',
            'CPython is the standard reference implementation.',
          ],
          examples: [
            {
              title: 'Simple Welcome Print',
              code: 'message = "Welcome to Python!"\nprint(message)',
              explanation:
                'Assigns a text string to a variable and prints it to standard output.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Assuming Python code compiles directly to a standalone binary exe.',
              explanation:
                'Python uses a virtual machine runtime (CPython) to execute bytecode.',
            },
          ],
          quickChecks: [
            {
              question: 'Who created the Python programming language?',
              answer: 'Guido van Rossum',
              options: ['Guido van Rossum', 'Bjarne Stroustrup', 'Dennis Ritchie', 'James Gosling'],
              correctAnswer: 0,
              explanation:
                'Guido van Rossum started Python in the late 1980s and released it in 1991.',
            },
          ],
          practiceQuestions: [
            {
              title: 'Print your name and learning goal',
              difficulty: 'easy',
              concepts: ['print', 'strings'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 1.2: HISTORY
        // ---------------------------------------------------------
        {
          id: 'python-history',
          title: 'History of Python',
          slug: 'history-of-python',
          description:
            'Historical origins, milestone versions (Python 2 vs 3), and evolution of the language.',
          learningObjectives: [
            'Trace the origin of Python at Centrum Wiskunde & Informatica (CWI).',
            'Understand the Python 2 to Python 3 transition and UTF-8 defaults.',
            'Appreciate the role of the Python Software Foundation (PSF).',
          ],
          prerequisites: ['python-what-is-python'],
          conceptSummary:
            'Python originated in 1989 as a successor to ABC, named after the British comedy troupe Monty Python.',
          detailedExplanation:
            'Guido van Rossum began developing Python during Christmas 1989. Python 2.0 arrived in 2000 with list comprehensions and garbage collection. Python 3.0 arrived in 2008 to fix fundamental language flaws, making Unicode strings the default.',
          syntaxExplanation:
            '# Python 3 standard unicode string\nname = "René Descartes"\nprint(len(name))',
          howItWorks: [
            'Python evolution is guided by Python Enhancement Proposals (PEPs).',
            'The PSF governs the language and its community.',
          ],
          examples: [
            {
              title: 'Checking Python Version in Code',
              code: 'import sys\nprint("Active Python version:", sys.version)',
              explanation:
                'Accesses the runtime system module to inspect the running interpreter version.',
            },
          ],
          commonMistakes: [
            {
              mistake: 'Using Python 2 print statement without parentheses in Python 3.',
              explanation:
                'In Python 3, print is a function requiring parentheses: print("hello").',
            },
          ],
          quickChecks: [
            {
              question: 'What comedy series was Python named after?',
              answer: "Monty Python's Flying Circus",
              options: [
                "Monty Python's Flying Circus",
                'The IT Crowd',
                'Blackadder',
                'Fawlty Towers',
              ],
              correctAnswer: 0,
              explanation:
                'Guido van Rossum was reading published scripts from Monty Python when naming the language.',
            },
          ],
          practiceQuestions: [
            {
              title: 'Print system platform details',
              difficulty: 'easy',
              concepts: ['sys module', 'print'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 1.3: FEATURES
        // ---------------------------------------------------------
        {
          id: 'python-features',
          title: 'Features of Python',
          slug: 'features-of-python',
          description:
            'Core strengths: simplicity, extensive standard library, dynamic typing, and cross-platform portability.',
          learningObjectives: [
            'List core features that make Python versatile.',
            'Explain what "Batteries Included" means in Python.',
            'Understand platform independence across Linux, macOS, and Windows.',
          ],
          prerequisites: ['python-what-is-python'],
          conceptSummary:
            'Python is simple, readable, dynamically typed, object-oriented, portable, and ships with an extensive standard library.',
          detailedExplanation:
            'Key features include automatic memory management, dynamic binding, expressive syntax, and integration with C/C++ libraries. The phrase "Batteries Included" signifies that Python includes modules for networking, math, file I/O, cryptography, and databases out of the box.',
          syntaxExplanation:
            '# Expressive one-liner feature\na, b = 10, 20\na, b = b, a # clean variable swap without temp variable\nprint(a, b)',
          howItWorks: [
            'The Python interpreter provides high-level primitives that hide low-level memory allocation.',
            'Automatic memory management via reference counting and cyclic GC.',
          ],
          examples: [
            {
              title: 'Batteries Included Example',
              code: 'import math\nprint("Square root of 144 is:", math.sqrt(144))',
              explanation:
                'Leverages the built-in math module without external installation.',
            },
          ],
          commonMistakes: [
            {
              mistake: 'Assuming dynamic typing means lack of type safety.',
              explanation:
                'Python is strongly typed: operations between incompatible types (like string + int) raise errors.',
            },
          ],
          quickChecks: [
            {
              question: 'What does "Batteries Included" refer to in Python philosophy?',
              answer: 'A rich and comprehensive standard library available out of the box',
              options: [
                'Hardware battery monitoring',
                'A rich and comprehensive standard library available out of the box',
                'Embedded hardware support',
                'No external power required',
              ],
              correctAnswer: 1,
              explanation:
                'Python provides abundant built-in modules so developers can build immediately.',
            },
          ],
          practiceQuestions: [
            {
              title: 'Swap two variables in a single line',
              difficulty: 'easy',
              concepts: ['tuple unpacking', 'assignment'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 1.4: LANGUAGE TYPE
        // ---------------------------------------------------------
        {
          id: 'python-language-type',
          title: 'What Type of Programming Language is Python?',
          slug: 'what-type-of-language-is-python',
          description:
            'Classifying Python: High-level, Multi-paradigm, Strongly & Dynamically typed, Interpreted.',
          learningObjectives: [
            'Distinguish static vs dynamic typing.',
            'Differentiate strong vs weak typing.',
            'Identify Python multi-paradigm nature (procedural, OOP, functional).',
          ],
          prerequisites: ['python-features'],
          conceptSummary:
            'Python is a high-level, interpreted, dynamically typed, strongly typed, multi-paradigm programming language.',
          detailedExplanation:
            'Dynamic typing means variable types are bound at runtime. Strong typing means Python enforces type safety and prevents implicit invalid type conversions (such as adding an integer to a string). Multi-paradigm means you can write object-oriented, procedural, or functional code.',
          syntaxExplanation:
            '# Strong typing prevents invalid implicit casting\nx = 5\ny = "10"\nresult = x + int(y)\nprint(result) # 15',
          howItWorks: [
            'Every value in Python is an object instance in heap memory with a type pointer and reference count.',
          ],
          examples: [
            {
              title: 'Dynamic Type Binding',
              code: 'val = 42\nprint(type(val))\nval = "Now a string"\nprint(type(val))',
              explanation:
                'Variable labels can point to objects of different types over time.',
            },
          ],
          commonMistakes: [
            {
              mistake: 'Confusing dynamic typing with weak typing.',
              explanation:
                'JavaScript is weakly typed ("5" + 5 = "55"), whereas Python is strongly typed ("5" + 5 = TypeError).',
            },
          ],
          quickChecks: [
            {
              question: 'What will "10" + 5 produce in Python?',
              answer: 'TypeError',
              options: ['"105"', '15', 'TypeError', 'None'],
              correctAnswer: 2,
              explanation:
                'Python does not implicitly concatenate strings and integers.',
            },
          ],
          practiceQuestions: [
            {
              title: 'Check variable types using type()',
              difficulty: 'easy',
              concepts: ['type', 'data types'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 1.5: WHY LEARN PYTHON
        // ---------------------------------------------------------
        {
          id: 'python-why-learn-python',
          title: 'Why Learn Python?',
          slug: 'why-learn-python',
          description:
            'Industry demand, developer ergonomics, job market value, and community support.',
          learningObjectives: [
            'Recognize career opportunities in Python engineering.',
            'Understand Python dominance in Artificial Intelligence and Data Science.',
            'Appreciate Python as an accessible first language.',
          ],
          prerequisites: ['python-what-is-python'],
          conceptSummary:
            'Python has the largest open-source ecosystem (PyPI) and is the undisputed leader in AI, ML, data science, and scripting.',
          detailedExplanation:
            'Modern machine learning frameworks (PyTorch, TensorFlow, Scikit-Learn) and web backends (Django, FastAPI) are written in or bound to Python. Learning Python opens pathways to software development, data science, cybersecurity, and automation.',
          syntaxExplanation:
            '# Concise syntax lets you focus on problem-solving\nnumbers = [1, 2, 3, 4, 5]\nsquares = [n**2 for n in numbers]\nprint(squares)',
          howItWorks: [
            'Python enables rapid prototyping: write ideas in fewer lines of code.',
          ],
          examples: [
            {
              title: 'Quick Data Filtering in Python',
              code: 'scores = [85, 42, 91, 78, 60]\npassing = [s for s in scores if s >= 70]\nprint("Passing scores:", passing)',
              explanation:
                'List comprehension filters values clearly in one readable line.',
            },
          ],
          commonMistakes: [
            {
              mistake: 'Thinking Python is only suitable for basic scripting.',
              explanation:
                'Python powers enterprise production workloads at Google, Netflix, NASA, and Spotify.',
            },
          ],
          quickChecks: [
            {
              question: 'Which domain is Python currently most dominant in?',
              answer: 'AI and Data Science',
              options: [
                'Mobile iOS Development',
                'AI and Data Science',
                'Microcontroller Kernels',
                'Browser UI Rendering',
              ],
              correctAnswer: 1,
              explanation:
                'Python is the industry standard for machine learning and artificial intelligence.',
            },
          ],
          practiceQuestions: [
            {
              title: 'Filter a list of numbers',
              difficulty: 'easy',
              concepts: ['list comprehension'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 1.6: ADVANTAGES
        // ---------------------------------------------------------
        {
          id: 'python-advantages',
          title: 'Advantages of Python',
          slug: 'advantages-of-python',
          description:
            'Key benefits: readability, huge package ecosystem, rapid prototyping, and productivity.',
          learningObjectives: [
            'Identify productivity gains of writing Python.',
            'Explore the PyPI package repository.',
            'Understand C/C++ FFI integration layer.',
          ],
          prerequisites: ['python-why-learn-python'],
          conceptSummary:
            'Python excels at readable syntax, rapid development cycles, and massive ecosystem interoperability.',
          detailedExplanation:
            'Developers write 3-5x fewer lines of code in Python compared to Java or C++. The Python Package Index (PyPI) hosts over 500,000 packages. Integration with C/C++ allows performance-critical algorithms to run at near-native speed under high-level Python APIs.',
          syntaxExplanation:
            '# Clean high-level operations\nwith open("sample.txt", "w") as f:\n    f.write("Safe file operations with automatic cleanup")',
          howItWorks: [
            'Memory management is automated through deterministic reference counting and cyclic garbage collector.',
          ],
          examples: [
            {
              title: 'Concise Dictionary Counting',
              code: 'words = ["apple", "banana", "apple", "cherry"]\ncounts = {w: words.count(w) for w in set(words)}\nprint(counts)',
              explanation:
                'Calculates word frequencies using dictionary comprehension and sets.',
            },
          ],
          commonMistakes: [
            {
              mistake: 'Writing Java-style verbose getters and setters in Python.',
              explanation:
                'Python idiomatic code uses public attributes or the @property decorator.',
            },
          ],
          quickChecks: [
            {
              question: 'What is the official third-party software repository for Python called?',
              answer: 'PyPI (Python Package Index)',
              options: ['npm', 'PyPI (Python Package Index)', 'Maven Central', 'Cargo'],
              correctAnswer: 1,
              explanation:
                'PyPI distributes open-source Python libraries via pip.',
            },
          ],
          practiceQuestions: [
            {
              title: 'Count occurrences in a collection',
              difficulty: 'easy',
              concepts: ['dictionary', 'counting'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 1.7: LIMITATIONS
        // ---------------------------------------------------------
        {
          id: 'python-limitations',
          title: 'Limitations of Python',
          slug: 'limitations-of-python',
          description:
            'Trade-offs: Execution speed, Global Interpreter Lock (GIL), and mobile constraints.',
          learningObjectives: [
            'Understand why Python has slower execution speed than compiled C/C++.',
            'Explain the Global Interpreter Lock (GIL) and its impact on multithreading.',
            'Identify scenarios where Python is less suited.',
          ],
          prerequisites: ['python-features'],
          conceptSummary:
            'Python trades raw CPU execution speed for developer speed, and the GIL limits CPU-bound multithreading.',
          detailedExplanation:
            'As an interpreted language with dynamic dispatch, Python executes CPU-bound operations slower than C, C++, or Rust. The Global Interpreter Lock (GIL) allows only one native thread to execute Python bytecode at a time in CPython. Python is also less common in mobile client apps and embedded microcontrollers with extreme RAM constraints.',
          syntaxExplanation:
            'import multiprocessing\nprint("CPU cores available:", multiprocessing.cpu_count())',
          howItWorks: [
            'The GIL ensures thread safety by protecting internal CPython memory management and reference counts.',
          ],
          examples: [
            {
              title: 'Inspecting GIL implications',
              code: 'import sys\nprint("Platform check for threading:", sys.platform)',
              explanation:
                'Demonstrates inspecting environment parameters for concurrency architecture.',
            },
          ],
          commonMistakes: [
            {
              mistake: 'Using standard Python threads for heavy CPU mathematical computations.',
              explanation:
                'Threads run sequentially on a single core due to GIL; use multiprocessing or NumPy.',
            },
          ],
          quickChecks: [
            {
              question: 'What mechanism in CPython limits true parallel multi-core execution of Python bytecode?',
              answer: 'Global Interpreter Lock (GIL)',
              options: [
                'Garbage Collector',
                'Global Interpreter Lock (GIL)',
                'Virtual Memory Mapper',
                'Just-In-Time Compiler',
              ],
              correctAnswer: 1,
              explanation:
                'The GIL synchronizes thread execution so only one thread executes bytecode at once.',
            },
          ],
          practiceQuestions: [
            {
              title: 'Inspect core count on your machine',
              difficulty: 'easy',
              concepts: ['multiprocessing'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 1.8: APPLICATIONS
        // ---------------------------------------------------------
        {
          id: 'python-applications',
          title: 'Applications of Python',
          slug: 'applications-of-python',
          description:
            'Real-world usage: Web backend, AI/ML, Data engineering, Automation, DevOps, and Cybersecurity.',
          learningObjectives: [
            'Categorize primary software domains using Python.',
            'Name key frameworks for web backends (Django, FastAPI, Flask).',
            'Name key frameworks for machine learning (PyTorch, Pandas, Scikit-Learn).',
          ],
          prerequisites: ['python-features'],
          conceptSummary:
            'Python powers web APIs, machine learning pipelines, DevOps automation, cloud tooling, and scientific computing.',
          detailedExplanation:
            'FastAPI and Django power mission-critical REST APIs. Pandas and NumPy serve as the foundation of data science. Ansible and AWS CDK automate infrastructure. Security researchers write exploits, network scanners, and packet analyzers in Python.',
          syntaxExplanation:
            'def get_user_status(user_id):\n    return {"user_id": user_id, "status": "active", "tier": "scholar"}\n\nprint(get_user_status(101))',
          howItWorks: [
            'Python acts as the high-level orchestration glue connecting optimized lower-level systems.',
          ],
          examples: [
            {
              title: 'DevOps System Disk Check Snippet',
              code: 'import shutil\ntotal, used, free = shutil.disk_usage("/")\nprint(f"Free Disk Space: {free // (2**30)} GB")',
              explanation:
                'System monitoring automation utilizing the built-in shutil utility.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Re-implementing complex algorithms from scratch instead of using standard packages.',
              explanation:
                'Python standard library and ecosystem packages already provide battle-tested solutions.',
            },
          ],
          quickChecks: [
            {
              question:
                'Which framework is widely used for high-performance Python asynchronous APIs?',
              answer: 'FastAPI',
              options: ['FastAPI', 'jQuery', 'Angular', 'Ruby on Rails'],
              correctAnswer: 0,
              explanation:
                'FastAPI is a modern Python framework built on async and type hints.',
            },
          ],
          practiceQuestions: [
            {
              title: 'Calculate gigabytes from bytes',
              difficulty: 'easy',
              concepts: ['arithmetic', 'formatting'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 1.9: VERSIONS
        // ---------------------------------------------------------
        {
          id: 'python-versions',
          title: 'Python Versions',
          slug: 'python-versions',
          description:
            'Understanding Python 2 vs Python 3, release cycles, and modern features in Python 3.10-3.13.',
          learningObjectives: [
            'Understand semantic versioning (Major.Minor.Micro).',
            'Know that Python 2 reached official End of Life (EOL) on Jan 1, 2020.',
            'Identify modern features like structural pattern matching (3.10) and faster CPython (3.11+).',
          ],
          prerequisites: ['python-history'],
          conceptSummary:
            'Always use modern Python 3. Current production versions (3.10-3.12+) offer structural pattern matching and significant speedups.',
          detailedExplanation:
            'Python releases a new feature version annually in October. Python 3.10 added structural pattern matching (match/case). Python 3.11 introduced the Faster CPython initiative with specializing adaptive interpreters. Python 3.12 improved error tracebacks and isolated subinterpreters.',
          syntaxExplanation:
            'status_code = 404\nmatch status_code:\n    case 200: print("Success")\n    case 404: print("Not Found")\n    case _: print("Other Error")',
          howItWorks: [
            'Python uses PEPs to propose, review, and specify features before inclusion in official releases.',
          ],
          examples: [
            {
              title: 'Inspecting sys.version_info',
              code: 'import sys\nmajor, minor = sys.version_info.major, sys.version_info.minor\nprint(f"Running Python {major}.{minor}")',
              explanation:
                'Programmatically verifies that minimum version constraints are satisfied.',
            },
          ],
          commonMistakes: [
            {
              mistake: 'Writing legacy Python 2 syntax like print "Hello".',
              explanation:
                'Python 2 is completely deprecated; all modern code must follow Python 3 standards.',
            },
          ],
          quickChecks: [
            {
              question: 'When did Python 2 reach official End of Life (EOL)?',
              answer: 'January 1, 2020',
              options: [
                'January 1, 2010',
                'January 1, 2020',
                'December 2025',
                'It is still supported',
              ],
              correctAnswer: 1,
              explanation:
                'The Python Software Foundation officially ceased support for Python 2 in 2020.',
            },
          ],
          practiceQuestions: [
            {
              title: 'Check if current Python version is >= 3.8',
              difficulty: 'easy',
              concepts: ['sys.version_info', 'comparison'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 1.10: IMPLEMENTATIONS
        // ---------------------------------------------------------
        {
          id: 'python-implementations',
          title: 'Python Implementations',
          slug: 'python-implementations',
          description:
            'Exploring CPython, PyPy, Jython, IronPython, and MicroPython.',
          learningObjectives: [
            'Identify CPython as the reference implementation.',
            'Understand how PyPy uses JIT compilation for speed.',
            'Differentiate Jython (JVM) and IronPython (.NET).',
          ],
          prerequisites: ['python-what-is-python'],
          conceptSummary:
            'Python is a language specification. CPython is the primary implementation; PyPy is a JIT-compiled alternative.',
          detailedExplanation:
            'CPython is written in C and serves as the standard reference. PyPy features a Just-In-Time (JIT) compiler that speeds up long-running numerical loops. MicroPython runs on microcontrollers. Jython executes on the Java Virtual Machine.',
          syntaxExplanation:
            'import platform\nprint("Python implementation:", platform.python_implementation())',
          howItWorks: [
            'Implementations compile Python source into their respective virtual machine instructions.',
          ],
          examples: [
            {
              title: 'Querying Implementation Runtime',
              code: 'import platform\nprint("Compiler:", platform.python_compiler())\nprint("Build:", platform.python_build())',
              explanation:
                'Extracts platform compiler metadata from the active interpreter.',
            },
          ],
          commonMistakes: [
            {
              mistake: 'Thinking PyPy is a third-party library installed via pip.',
              explanation:
                'PyPy is a separate interpreter executable you install to replace the cpython executable.',
            },
          ],
          quickChecks: [
            {
              question: 'What is the default, standard reference implementation of Python written in C?',
              answer: 'CPython',
              options: ['Jython', 'CPython', 'PyPy', 'Cython'],
              correctAnswer: 1,
              explanation:
                'CPython is maintained by the core Python development team.',
            },
          ],
          practiceQuestions: [
            {
              title: 'Print active Python implementation name',
              difficulty: 'easy',
              concepts: ['platform module'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 1.11: INSTALLING
        // ---------------------------------------------------------
        {
          id: 'python-installing',
          title: 'Installing Python',
          slug: 'installing-python',
          description:
            'Step-by-step setup on Windows, macOS, and Linux, plus PATH configuration.',
          learningObjectives: [
            'Install Python from python.org or package managers.',
            'Enable the "Add Python to PATH" option on Windows.',
            'Verify installation via terminal.',
          ],
          prerequisites: ['python-what-is-python'],
          conceptSummary:
            'Download from python.org and ensure Python and pip binaries are registered in system PATH.',
          detailedExplanation:
            'On Windows, run the official installer and check "Add python.exe to PATH". On macOS, install via Homebrew (brew install python). On Ubuntu/Debian, install with apt install python3 python3-pip python3-venv.',
          syntaxExplanation:
            '# Terminal commands to verify:\n# python --version\n# pip --version',
          howItWorks: [
            'PATH tells your shell which directories to search when executing commands.',
          ],
          examples: [
            {
              title: 'Checking Executable Path Inside Python',
              code: 'import sys\nprint("Python executable location:", sys.executable)',
              explanation:
                'Reveals the exact binary path executing the script.',
            },
          ],
          commonMistakes: [
            {
              mistake: 'Forgetting to check "Add Python to PATH" on Windows.',
              explanation:
                'Leads to "python is not recognized as an internal or external command" errors in terminal.',
            },
          ],
          quickChecks: [
            {
              question: 'Which terminal command verifies that Python is available in PATH?',
              answer: 'python --version (or python3 --version)',
              options: [
                'start python',
                'python --version (or python3 --version)',
                'run python',
                'find python',
              ],
              correctAnswer: 1,
              explanation:
                'Invoking python with --version verifies terminal discovery and reports version.',
            },
          ],
          practiceQuestions: [
            {
              title: 'Print executable path using sys.executable',
              difficulty: 'easy',
              concepts: ['sys module'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 1.12: INTERPRETER
        // ---------------------------------------------------------
        {
          id: 'python-interpreter',
          title: 'Python Interpreter',
          slug: 'python-interpreter',
          description:
            'Using the interactive REPL (Read-Eval-Print Loop) and batch script execution.',
          learningObjectives: [
            'Start and exit the interactive Python REPL.',
            'Understand the Read-Eval-Print Loop lifecycle.',
            'Execute one-liner commands using python -c.',
          ],
          prerequisites: ['python-installing'],
          conceptSummary:
            'The interpreter reads Python statements, evaluates them, prints the results, and loops (REPL).',
          detailedExplanation:
            'Typing `python` or `python3` in a terminal opens the interactive shell, designated by the `>>>` primary prompt. In the REPL, expressions are automatically evaluated and displayed without requiring explicit print() statements.',
          syntaxExplanation:
            '>>> 15 * 4\n60\n>>> name = "Alice"\n>>> f"Hello {name}"\n\'Hello Alice\'',
          howItWorks: [
            'The REPL maintains active memory state across interactive commands until you exit with exit() or Ctrl+D.',
          ],
          examples: [
            {
              title: 'Using the Underscore in REPL',
              code:
                '# In an interactive REPL, _ stores the result of the last evaluated expression\n# Example: 10 + 20 => 30\n# _ * 2 => 60',
              explanation:
                'Explains special REPL conveniences for fast calculations.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Typing terminal commands like "pip install" directly inside the Python >>> prompt.',
              explanation:
                'pip commands must be run in the OS terminal, not inside the Python interpreter.',
            },
          ],
          quickChecks: [
            {
              question: 'What does the acronym REPL stand for?',
              answer: 'Read-Eval-Print Loop',
              options: [
                'Runtime Execution Program Logic',
                'Read-Eval-Print Loop',
                'Resource Evaluation Protocol Layer',
                'Rapid Execution Pipeline Language',
              ],
              correctAnswer: 1,
              explanation: 'REPL describes the interactive interpreter cycle.',
            },
          ],
          practiceQuestions: [
            {
              title: 'Evaluate a multi-operation expression',
              difficulty: 'easy',
              concepts: ['arithmetic'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 1.13: IDES
        // ---------------------------------------------------------
        {
          id: 'python-ides',
          title: 'Python IDEs and Code Editors',
          slug: 'python-ides',
          description:
            'Choosing tools: VS Code, PyCharm, Jupyter Notebooks, and IDLE.',
          learningObjectives: [
            'Compare dedicated IDEs (PyCharm) vs lightweight extensible editors (VS Code).',
            'Understand the role of Jupyter Notebooks in data exploration.',
            'Configure code formatters (Black, Ruff) and linters.',
          ],
          prerequisites: ['python-interpreter'],
          conceptSummary:
            'VS Code with the Python extension and PyCharm are the two dominant developer environments.',
          detailedExplanation:
            'IDLE is Python built-in minimalist editor. VS Code offers fast, modular editing with powerful extensions. PyCharm provides deep static analysis and refactoring out of the box. Jupyter Notebooks allow interactive mixing of markdown prose and runnable code cells.',
          syntaxExplanation:
            'def compute_tax(income: float) -> float:\n    return income * 0.15',
          howItWorks: [
            'Language Server Protocol (LSP) powers autocompletion, type hinting, and refactoring in modern editors.',
          ],
          examples: [
            {
              title: 'Docstring for IDE Tooltips',
              code:
                'def add(a: int, b: int) -> int:\n    """Return the arithmetic sum of two integers."""\n    return a + b\n\nhelp(add)',
              explanation:
                'IDEs read docstrings and type hints to display interactive hover documentation.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Using basic text editors without syntax highlighting or indentation assistance.',
              explanation:
                'Always use an editor that highlights indentation errors, since indentation is semantic in Python.',
            },
          ],
          quickChecks: [
            {
              question:
                'Which lightweight editor developed by Microsoft is widely favored for Python?',
              answer: 'Visual Studio Code',
              options: ['Visual Studio Code', 'Notepad', 'Eclipse', 'Xcode'],
              correctAnswer: 0,
              explanation:
                'VS Code with the Microsoft Python extension is one of the most popular Python environments.',
            },
          ],
          practiceQuestions: [
            {
              title: 'Inspect built-in help() documentation',
              difficulty: 'easy',
              concepts: ['help', 'docstrings'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 1.14: RUNNING PROGRAMS
        // ---------------------------------------------------------
        {
          id: 'python-running-programs',
          title: 'Running Python Programs',
          slug: 'running-python-programs',
          description:
            'Executing scripts from CLI, passing arguments, and handling shebang lines.',
          learningObjectives: [
            'Run script files using python filename.py.',
            'Read command-line arguments using sys.argv.',
            'Understand Unix shebang lines (#!/usr/bin/env python3).',
          ],
          prerequisites: ['python-interpreter'],
          conceptSummary:
            'Scripts stored in .py files are executed sequentially by passing their filename to the python executable.',
          detailedExplanation:
            'When you execute `python script.py`, Python reads the file from top to bottom, parses statements into an Abstract Syntax Tree (AST), compiles them to bytecode in memory, and runs them sequentially in the PVM.',
          syntaxExplanation:
            'import sys\nprint("Script name:", sys.argv[0])',
          howItWorks: [
            'The OS terminal spawns a process running the python binary, which opens the specified file and executes it.',
          ],
          examples: [
            {
              title: 'Handling Script Arguments',
              code:
                'import sys\nargs = sys.argv[1:]\nprint(f"Received {len(args)} arguments:", args)',
              explanation:
                'Extracts extra arguments supplied when invoking the script.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Double clicking a .py file on Windows and wondering why the console window instantly closes.',
              explanation:
                'Run scripts from an open terminal prompt so the window remains open to view output.',
            },
          ],
          quickChecks: [
            {
              question: 'In sys.argv, what is stored at index 0?',
              answer: 'The name of the script being executed',
              options: [
                'The first user argument',
                'The name of the script being executed',
                'The Python version',
                'Exit code',
              ],
              correctAnswer: 1,
              explanation: 'sys.argv[0] is the script filename itself.',
            },
          ],
          practiceQuestions: [
            {
              title: 'Print all command line arguments',
              difficulty: 'easy',
              concepts: ['sys.argv'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 1.15: FIRST PROGRAM
        // ---------------------------------------------------------
        {
          id: 'python-first-program',
          title: 'Your First Python Program',
          slug: 'first-python-program',
          description:
            'Writing, analyzing, and running the canonical "Hello, World!" program.',
          learningObjectives: [
            'Write and execute the canonical "Hello, World!" program.',
            'Understand string literals enclosed in quotation marks.',
            'Identify standard output behavior.',
          ],
          prerequisites: ['python-running-programs'],
          conceptSummary:
            'A single print("Hello, World!") statement completes a working Python application.',
          detailedExplanation:
            'Unlike Java, C, or C++, Python requires no class declaration, static void main methods, or header imports for basic operations. A single call to the built-in print() function outputs text directly.',
          syntaxExplanation: 'print("Hello, World!")',
          howItWorks: [
            'print() sends string bytes through standard output stream (sys.stdout), terminated by a newline by default.',
          ],
          examples: [
            {
              title: 'Personalized Welcome',
              code:
                'user_name = "Future Software Engineer"\nprint(f"Hello, {user_name}! Welcome to CodeMentor AI.")',
              explanation:
                'Uses an f-string to interpolate variable data into the greeting.',
            },
          ],
          commonMistakes: [
            {
              mistake: 'Capitalizing Print instead of print.',
              explanation:
                'Python is strictly case-sensitive: print is valid, Print is a NameError.',
            },
          ],
          quickChecks: [
            {
              question: 'Is Python case-sensitive when calling functions like print()?',
              answer: 'Yes, print is valid while Print will raise a NameError',
              options: [
                'No, Print and print are identical',
                'Yes, print is valid while Print will raise a NameError',
                'Only on Linux',
                'Only when inside a class',
              ],
              correctAnswer: 1,
              explanation: 'Python identifier lookup is strictly case-sensitive.',
            },
          ],
          practiceQuestions: [
            {
              title: 'Write Hello World',
              difficulty: 'easy',
              concepts: ['print', 'strings'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },
      ],
    },

    // =============================================================
    // MODULE 2: PYTHON BASICS
    // =============================================================
    {
      id: 'python-mod-basics',
      title: 'Python Basics',
      order: 2,
      description:
        'Variables, naming conventions, data types, type conversion, comments, and I/O.',
      topics: [
        // ---------------------------------------------------------
        // TOPIC 2.1: SYNTAX RULES
        // ---------------------------------------------------------
        {
          id: 'python-syntax-rules',
          title: 'Python Syntax',
          slug: 'python-syntax',
          description:
            'Fundamental syntax rules: newlines as statement terminators, readability, and case sensitivity.',
          learningObjectives: [
            'Understand that physical newlines terminate statements in Python.',
            'Use line continuation characters when splitting long statements.',
            'Adhere to Python case-sensitive rules.',
          ],
          prerequisites: ['python-first-program'],
          conceptSummary:
            'Python uses newlines to complete statements instead of semicolons, and enforces case sensitivity.',
          detailedExplanation:
            'Unlike C or Java which require semicolons at the end of each statement, Python uses the newline character. Multiple statements can technically be joined with semicolons, but PEP 8 discourages this in favor of clean readability.',
          syntaxExplanation:
            'x = 100\ntotal = (10 +\n         20 +\n         30)\nprint(total)',
          howItWorks: [
            'The Python tokenizer interprets indentation and newlines to generate syntax tokens.',
          ],
          examples: [
            {
              title: 'Multi-line Parenthesized Syntax',
              code:
                'numbers = ["first", "second", "third"]\nprint(len(numbers))',
              explanation:
                'Parentheses, brackets, and braces allow implicit line continuation across lines.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Putting unnecessary semicolons at the end of every line like C/Java.',
              explanation:
                'Semicolons are redundant in Python; keep code clean by omitting them.',
            },
          ],
          quickChecks: [
            {
              question: 'How does Python identify the end of a typical statement?',
              answer: 'A newline character',
              options: [
                'A semicolon',
                'A newline character',
                'A period',
                'Closing curly bracket',
              ],
              correctAnswer: 1,
              explanation: 'Python uses newlines to delimit statements.',
            },
          ],
          practiceQuestions: [
            {
              title: 'Construct a multi-line sum using parentheses',
              difficulty: 'easy',
              concepts: ['syntax', 'expressions'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 2.2: INDENTATION
        // ---------------------------------------------------------
        {
          id: 'python-indentation',
          title: 'Indentation',
          slug: 'indentation',
          description:
            'Python indentation rules: 4 spaces standard, code blocks, and avoiding IndentationError.',
          learningObjectives: [
            'Master block structure defined strictly by whitespace indentation.',
            'Standardize on 4 spaces per indentation level (PEP 8).',
            'Prevent and troubleshoot IndentationError and TabError.',
          ],
          prerequisites: ['python-syntax-rules'],
          conceptSummary:
            'Indentation in Python is semantic: it defines the scope and hierarchy of code blocks.',
          detailedExplanation:
            'Where other languages use curly braces to define scope, Python uses whitespace indentation. PEP 8 dictates that developers use 4 spaces per indentation level. Mixing tabs and spaces is prohibited.',
          syntaxExplanation:
            'if True:\n    print("Inside if block")\nprint("Outside block")',
          howItWorks: [
            'The tokenizer generates INDENT and DEDENT tokens that build the syntax tree scope.',
          ],
          examples: [
            {
              title: 'Nested Indentation Blocks',
              code:
                'age = 22\nis_enrolled = True\nif age >= 18:\n    print("Adult student")\n    if is_enrolled:\n        print("Eligible for campus workshop")',
              explanation:
                'The nested if block is indented by 8 spaces (two 4-space levels).',
            },
          ],
          commonMistakes: [
            {
              mistake: 'Mixing tabs and spaces in the same file.',
              explanation:
                'Configure your code editor to insert 4 spaces whenever you press the Tab key.',
            },
          ],
          quickChecks: [
            {
              question:
                'What is the PEP 8 recommended number of spaces per indentation level?',
              answer: '4 spaces',
              options: ['2 spaces', '4 spaces', '8 spaces', '1 tab character'],
              correctAnswer: 1,
              explanation:
                'PEP 8 officially standardizes on 4 spaces per indentation level.',
            },
          ],
          practiceQuestions: [
            {
              title: 'Fix an IndentationError in a conditional block',
              difficulty: 'easy',
              concepts: ['indentation', 'if statement'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 2.3: COMMENTS
        // ---------------------------------------------------------
        {
          id: 'python-comments',
          title: 'Comments',
          slug: 'comments',
          description:
            'Single-line comments (#), inline comments, and multi-line docstring conventions.',
          learningObjectives: [
            'Write single-line comments using the hash (#) character.',
            'Write clear inline explanations without cluttering code.',
            'Differentiate comments from docstrings.',
          ],
          prerequisites: ['python-syntax-rules'],
          conceptSummary:
            'Comments start with # and explain why code exists, not merely what the syntax does.',
          detailedExplanation:
            'The interpreter completely ignores any text following `#` on that line. For documentation intended to be queried programmatically via help() or IDE tooltips, use triple-quoted docstrings `"""docstring"""` at the beginning of modules, functions, or classes.',
          syntaxExplanation:
            '# This is a full-line comment\nradius = 5.0  # Inline comment explaining unit\n\n"""\nMulti-line docstring.\n"""',
          howItWorks: [
            'The tokenizer discards comment tokens during lexical analysis.',
          ],
          examples: [
            {
              title: 'Helpful Intent-Based Commenting',
              code:
                '# Deduct 10% loyalty discount for premium accounts\nfinal_price = 100 * 0.9\nprint(final_price)',
              explanation:
                'Explains the business rationale behind the computation.',
            },
          ],
          commonMistakes: [
            {
              mistake: 'Stating the obvious: x = 1 # assign 1 to x.',
              explanation:
                'Comments should explain the intent, rationale, or edge cases, not narrate obvious syntax.',
            },
          ],
          quickChecks: [
            {
              question: 'Which character starts a single-line comment in Python?',
              answer: '#',
              options: ['//', '/*', '#', '--'],
              correctAnswer: 2,
              explanation:
                'The hash (#) symbol denotes single-line comments in Python.',
            },
          ],
          practiceQuestions: [
            {
              title: 'Add intent comments to a calculation snippet',
              difficulty: 'easy',
              concepts: ['comments'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 2.4: PRINT
        // ---------------------------------------------------------
        {
          id: 'python-print-statement',
          title: 'Print Statement & Function',
          slug: 'print-statement',
          description:
            'Using print(), sep and end arguments, and output stream redirection.',
          learningObjectives: [
            'Format multi-argument outputs with print().',
            'Customize separators using the sep parameter.',
            'Prevent default newlines using the end parameter.',
          ],
          prerequisites: ['python-first-program'],
          conceptSummary:
            'The print(*objects, sep=" ", end="\\n", file=None, flush=False) function writes formatted strings to stdout.',
          detailedExplanation:
            'By default, print() inserts a single space between multiple arguments and terminates with a newline. By modifying `sep`, you can format comma-separated values, paths, or hyphens. By setting `end=""`, successive print statements appear on the same terminal line.',
          syntaxExplanation:
            'print("A", "B", "C", sep="-")\nprint("Loading", end="...")\nprint("Done!")',
          howItWorks: [
            'Objects are converted via str() before being written to sys.stdout.',
          ],
          examples: [
            {
              title: 'Progress Line without Newline',
              code:
                'for i in range(3):\n    print(".", end="", flush=True)\nprint(" Complete")',
              explanation:
                'Demonstrates streaming output on the same line with flush=True.',
            },
          ],
          commonMistakes: [
            {
              mistake: 'Expecting print() to return a string value.',
              explanation:
                'print() returns None; its only purpose is writing side-effect output to a stream.',
            },
          ],
          quickChecks: [
            {
              question: 'What is the default value of the end parameter in print()?',
              answer: '"\\n" (newline)',
              options: [
                '"\\n" (newline)',
                '" " (space)',
                '"" (empty string)',
                'None',
              ],
              correctAnswer: 0,
              explanation:
                'print() appends a newline character "\\n" by default.',
            },
          ],
          practiceQuestions: [
            {
              title: 'Print values separated by vertical bars (|)',
              difficulty: 'easy',
              concepts: ['print', 'sep parameter'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 2.5: VARIABLES
        // ---------------------------------------------------------
        {
          id: 'python-variables',
          title: 'Variables',
          slug: 'variables',
          description:
            'Variable declaration, assignment, dynamic reference binding, and memory pointers.',
          learningObjectives: [
            'Create variables using the assignment operator (=).',
            'Understand that Python variables are reference labels pointing to objects.',
            'Perform multiple and simultaneous assignment.',
          ],
          prerequisites: ['python-syntax-rules'],
          conceptSummary:
            'Variables in Python are named references bound to objects in memory; no type declaration is needed.',
          detailedExplanation:
            'In Python, values exist as objects on the heap, and variables are named tags bound to those objects. When a variable is assigned to another, both point to the same object.',
          syntaxExplanation: 'x = 10\ny = x\na, b = 1, 2',
          howItWorks: [
            'The id() function reveals the unique memory address of the object referenced by a variable.',
          ],
          examples: [
            {
              title: 'Inspecting Object Identity',
              code:
                'a = 256\nb = 256\nprint(a is b)\nprint("Memory id:", id(a))',
              explanation:
                'Demonstrates variable references and object identity inspection.',
            },
          ],
          commonMistakes: [
            {
              mistake: 'Declaring types explicitly: int x = 10.',
              explanation:
                'Python does not use C/Java type declaration syntax; simply write x = 10.',
            },
          ],
          quickChecks: [
            {
              question: 'What operator assigns a value to a variable in Python?',
              answer: '=',
              options: ['=', '==', ':=', '->'],
              correctAnswer: 0,
              explanation: 'Single equals (=) is the assignment operator.',
            },
          ],
          practiceQuestions: [
            {
              title: 'Assign three variables in a single statement',
              difficulty: 'easy',
              concepts: ['variables', 'assignment'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 2.6: CONSTANTS
        // ---------------------------------------------------------
        {
          id: 'python-constants',
          title: 'Constants',
          slug: 'constants',
          description:
            'Constant conventions in Python: UPPERCASE naming and Final type annotations.',
          learningObjectives: [
            'Apply PEP 8 UPPER_SNAKE_CASE naming for constants.',
            'Understand that Python lacks a rigid const keyword.',
            'Use typing.Final to enforce intent with static analysis.',
          ],
          prerequisites: ['python-variables'],
          conceptSummary:
            'Python has no strict const keyword; developers use all-caps names and typing.Final to signify immutable intent.',
          detailedExplanation:
            'In Python, all variables can technically be reassigned at runtime. By convention, developers write constants in all uppercase (e.g., `MAX_CONNECTIONS = 100`). In Python 3.8+, you can annotate constants with `from typing import Final`.',
          syntaxExplanation:
            'from typing import Final\nMAX_USERS: Final = 1000\nAPI_BASE_URL: Final = "https://api.domain.com/v1"',
          howItWorks: [
            'The Python interpreter does not block reassignment at runtime, relying on convention and static linters.',
          ],
          examples: [
            {
              title: 'Defining Module-Level Constants',
              code:
                'DATABASE_TIMEOUT_SECONDS = 30\nPI = 3.1415926535\nprint("Timeout set to:", DATABASE_TIMEOUT_SECONDS)',
              explanation:
                'Demonstrates clean uppercase convention for global settings.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Expecting the Python runtime to raise an error if you reassign an UPPERCASE variable.',
              explanation:
                'Uppercase is a programmer convention; the runtime still allows reassignment unless checked with Mypy.',
            },
          ],
          quickChecks: [
            {
              question:
                'What naming convention denotes a constant in Python according to PEP 8?',
              answer: 'ALL_UPPERCASE with underscores',
              options: [
                'camelCase',
                'ALL_UPPERCASE with underscores',
                'kebab-case',
                'Leading underscore _var',
              ],
              correctAnswer: 1,
              explanation:
                'PEP 8 specifies UPPER_SNAKE_CASE for constant variables.',
            },
          ],
          practiceQuestions: [
            {
              title: 'Define constants for physical speed of light and gravity',
              difficulty: 'easy',
              concepts: ['constants'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 2.7: IDENTIFIERS
        // ---------------------------------------------------------
        {
          id: 'python-identifiers',
          title: 'Identifiers',
          slug: 'identifiers',
          description:
            'Rules for naming variables, functions, and classes in Python.',
          learningObjectives: [
            'Identify valid vs invalid identifier names.',
            'Recall that identifiers cannot begin with digits.',
            'Understand permissible characters: letters, digits, and underscores.',
          ],
          prerequisites: ['python-variables'],
          conceptSummary:
            'Identifiers must begin with a letter or underscore, followed by letters, digits, or underscores, and cannot be keywords.',
          detailedExplanation:
            'An identifier is a name used to identify a variable, function, class, module, or other object. Identifiers are case-sensitive. They cannot start with a digit, and punctuation characters (like @, $, %) are illegal.',
          syntaxExplanation:
            'user_count = 10\n_private_value = 42\ntotal2 = 99',
          howItWorks: [
            'The lexical analyzer verifies candidate identifiers against regular expression grammar: [A-Za-z_][A-Za-z0-9_]*.',
          ],
          examples: [
            {
              title: 'Using str.isidentifier() Method',
              code:
                'print("user_score".isidentifier())\nprint("2user".isidentifier())',
              explanation:
                'Tests whether a string constitutes a syntactically valid identifier.',
            },
          ],
          commonMistakes: [
            {
              mistake: 'Using hyphens in variable names: user-name = "Bob".',
              explanation:
                'Hyphens are interpreted as subtraction operators; use underscores instead (user_name).',
            },
          ],
          quickChecks: [
            {
              question: 'Which of the following is a valid Python identifier?',
              answer: '_total_score',
              options: ['2nd_place', 'total-score', '_total_score', 'user score'],
              correctAnswer: 2,
              explanation:
                'Identifiers can start with an underscore and contain alphanumeric characters and underscores.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Check if three test strings are valid identifiers using isidentifier()',
              difficulty: 'easy',
              concepts: ['identifiers'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 2.8: KEYWORDS
        // ---------------------------------------------------------
        {
          id: 'python-keywords',
          title: 'Keywords',
          slug: 'keywords',
          description:
            'Python reserved keywords and inspecting them with keyword.kwlist.',
          learningObjectives: [
            'Understand that keywords are reserved by the language compiler and cannot be used as variable names.',
            'Inspect the active list of Python keywords using the keyword module.',
            'Identify common keywords like if, for, while, return, def, import.',
          ],
          prerequisites: ['python-identifiers'],
          conceptSummary:
            'Keywords are reserved words with special syntax meanings in Python (e.g. def, class, if, else, return).',
          detailedExplanation:
            'Python contains approximately 35 reserved keywords. You cannot use any of these as identifiers. Trying to assign to a keyword causes a SyntaxError.',
          syntaxExplanation:
            'import keyword\nprint("Total keywords in Python:", len(keyword.kwlist))\nprint("Is \'pass\' a keyword?", keyword.iskeyword("pass"))',
          howItWorks: [
            'The parser reserves keywords during lexical scanning to construct the grammar rules.',
          ],
          examples: [
            {
              title: 'Listing Python Keywords Programmatically',
              code: 'import keyword\nprint(keyword.kwlist[:10])',
              explanation: 'Queries the standard library keyword module.',
            },
          ],
          commonMistakes: [
            {
              mistake: 'Trying to name a variable class = "CS101" or return = 5.',
              explanation:
                'class and return are reserved keywords and will trigger an immediate SyntaxError.',
            },
          ],
          quickChecks: [
            {
              question:
                'Which of the following cannot be used as a variable name in Python?',
              answer: 'def',
              options: ['define', 'def', 'def_func', 'definition'],
              correctAnswer: 1,
              explanation: 'def is a reserved keyword used to define functions.',
            },
          ],
          practiceQuestions: [
            {
              title: 'Print all keywords starting with the letter "w"',
              difficulty: 'easy',
              concepts: ['keyword module', 'filtering'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 2.9: NAMING CONVENTIONS
        // ---------------------------------------------------------
        {
          id: 'python-naming-conventions',
          title: 'Naming Conventions (PEP 8)',
          slug: 'naming-conventions',
          description:
            'Official Python style: snake_case for functions/variables, PascalCase for classes, UPPER_CASE for constants.',
          learningObjectives: [
            'Follow PEP 8 naming standards.',
            'Distinguish snake_case from PascalCase and camelCase.',
            'Know when single or double underscores are conventional.',
          ],
          prerequisites: ['python-identifiers'],
          conceptSummary:
            'PEP 8 prescribes snake_case for variables and functions, PascalCase for classes, and UPPER_CASE for constants.',
          detailedExplanation:
            'Adhering to community naming standards makes your code immediately familiar to other Python developers. Variables and functions use lowercase with underscores. Classes use CapWords / PascalCase. Constants use UPPER_SNAKE_CASE.',
          syntaxExplanation:
            'MAX_RETRIES = 3\nclass PaymentProcessor:\n    def process_order(self):\n        user_id = 42\n        return user_id',
          howItWorks: [
            'Linters like flake8 and Ruff inspect identifier patterns against PEP 8 rules.',
          ],
          examples: [
            {
              title: 'Idiomatic Function and Class Names',
              code:
                'class BankAccount:\n    def __init__(self, account_holder):\n        self.account_holder = account_holder\n\nacc = BankAccount("Alice")\nprint(acc.account_holder)',
              explanation:
                'Clear distinction between PascalCase class and snake_case attribute.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Using camelCase for Python functions like calculateTotalScore().',
              explanation:
                'camelCase is standard in JavaScript/Java, but unidiomatic in Python; use calculate_total_score().',
            },
          ],
          quickChecks: [
            {
              question:
                'What casing convention should be used for Python variable names according to PEP 8?',
              answer: 'snake_case',
              options: ['camelCase', 'snake_case', 'PascalCase', 'kebab-case'],
              correctAnswer: 1,
              explanation:
                'Variables and function names must be in lowercase with underscores.',
            },
          ],
          practiceQuestions: [
            {
              title: 'Refactor non-idiomatic camelCase variables to snake_case',
              difficulty: 'easy',
              concepts: ['PEP 8', 'variables'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 2.10: DATA TYPES
        // ---------------------------------------------------------
        {
          id: 'python-data-types',
          title: 'Built-in Data Types Overview',
          slug: 'data-types',
          description:
            'Core types: Numeric (int, float, complex), Sequence (str, list, tuple), Mapping (dict), Set, and Boolean.',
          learningObjectives: [
            'Categorize Python built-in fundamental data types.',
            'Distinguish mutable data types from immutable data types.',
            'Understand memory implications of different data types.',
          ],
          prerequisites: ['python-variables'],
          conceptSummary:
            'Python provides integers, floats, strings, booleans, lists, tuples, dictionaries, and sets as built-in data types.',
          detailedExplanation:
            'Numeric types include int (arbitrary precision) and float (double precision). Sequences include str, list, and tuple. Dictionaries are key-value mappings. Sets hold unique unordered elements. Booleans (True/False) are subclasses of int.',
          syntaxExplanation:
            'a = 100\nb = 3.14\nc = "Python"\nd = True\ne = [1, 2, 3]\nf = (1, 2, 3)\ng = {"a": 1}\nh = {1, 2, 3}',
          howItWorks: [
            'All types in Python are first-class objects derived from the base object type.',
          ],
          examples: [
            {
              title: 'Checking Types and Values',
              code:
                'items = [42, 3.1415, "Code", True, None]\nfor item in items:\n    print(f"Value: {item!r:<10} Type: {type(item).__name__}")',
              explanation:
                'Iterates and prints the runtime type name for diverse values.',
            },
          ],
          commonMistakes: [
            {
              mistake: 'Assuming Python integers overflow at 2^31 or 2^63.',
              explanation:
                'Python 3 integers have arbitrary precision and expand to fill available memory automatically.',
            },
          ],
          quickChecks: [
            {
              question:
                'Which of the following data types in Python is mutable?',
              answer: 'list',
              options: ['int', 'str', 'tuple', 'list'],
              correctAnswer: 3,
              explanation:
                'Lists can be modified in place (items added, removed, or changed).',
            },
          ],
          practiceQuestions: [
            {
              title: 'Create variables representing each primary data type',
              difficulty: 'easy',
              concepts: ['data types'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 2.11: TYPE FUNCTION
        // ---------------------------------------------------------
        {
          id: 'python-type-function',
          title: 'The type() and isinstance() Functions',
          slug: 'type-function',
          description:
            'Inspecting types dynamically and performing safe runtime type validation.',
          learningObjectives: [
            'Use type(obj) to inspect an object type.',
            'Use isinstance(obj, classinfo) for robust inheritance-aware type checks.',
            'Understand why isinstance() is preferred over direct type comparison.',
          ],
          prerequisites: ['python-data-types'],
          conceptSummary:
            'type(obj) returns the class of an object; isinstance(obj, Type) verifies type while supporting inheritance.',
          detailedExplanation:
            'While `type(x) == int` checks the exact type, `isinstance(x, int)` is the recommended Python approach because it accounts for subclasses. isinstance() also accepts a tuple of types for multiple checks: `isinstance(x, (int, float))`.',
          syntaxExplanation:
            'num = 42\nprint(type(num))\nprint(isinstance(num, int))\nprint(isinstance(num, (int, float)))',
          howItWorks: [
            'isinstance traverses the Method Resolution Order (MRO) and class hierarchy of the object.',
          ],
          examples: [
            {
              title: 'Safe Function Argument Validation',
              code:
                'def calculate_area(radius):\n    if not isinstance(radius, (int, float)):\n        raise TypeError("Radius must be numeric")\n    return 3.14159 * (radius ** 2)\n\nprint(calculate_area(5))',
              explanation:
                'Validates input argument types before performing arithmetic calculation.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Checking type(b) == int for a boolean variable and getting True.',
              explanation:
                'bool is a subclass of int, so type(True) == int is False, but isinstance(True, int) is True.',
            },
          ],
          quickChecks: [
            {
              question:
                'Why is isinstance() generally preferred over type() == MyClass?',
              answer: 'isinstance() supports polymorphism and inheritance hierarchies',
              options: [
                'isinstance() is deprecated',
                'isinstance() supports polymorphism and inheritance hierarchies',
                'type() cannot be called on objects',
                'type() is slower by 100x',
              ],
              correctAnswer: 1,
              explanation:
                'isinstance correctly detects instances of subclasses.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Write a function that accepts numbers only and rejects strings',
              difficulty: 'easy',
              concepts: ['isinstance', 'exceptions'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 2.12: DYNAMIC TYPING
        // ---------------------------------------------------------
        {
          id: 'python-dynamic-typing',
          title: 'Dynamic Typing and Variable Re-binding',
          slug: 'dynamic-typing',
          description:
            'How Python dynamically manages object references without static declarations.',
          learningObjectives: [
            'Understand that types belong to objects, not variable names.',
            'Re-bind variables to new objects of differing types.',
            'Observe reference counting and memory recycling.',
          ],
          prerequisites: ['python-variables', 'python-data-types'],
          conceptSummary:
            'In Python, types belong to values/objects, not variable names. Variables can freely reference any object.',
          detailedExplanation:
            'When you write `data = 10` followed by `data = "hello"`, you are simply re-pointing the variable tag `data` to reference a newly created string object in memory. The original integer reference count decrements by one.',
          syntaxExplanation: 'item = 42\nitem = "now text"',
          howItWorks: [
            'CPython uses PyObject structs containing ob_refcnt and ob_type pointers.',
          ],
          examples: [
            {
              title: 'Variable Re-binding Demonstration',
              code:
                'x = [1, 2, 3]\nprint("Initial list id:", id(x))\nx = "New Object"\nprint("Rebound str id:", id(x))',
              explanation:
                'The memory id changes completely because x points to an entirely different object.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Overusing dynamic re-binding for unrelated concepts (reusing x for 5 different purposes).',
              explanation:
                'Reusing the same variable name for different types confuses code readers and static linters.',
            },
          ],
          quickChecks: [
            {
              question:
                'In Python, does the data type belong to the variable name or the value object?',
              answer: 'The value object',
              options: [
                'The variable name',
                'The value object',
                'Both equally',
                'Neither, types do not exist',
              ],
              correctAnswer: 1,
              explanation:
                'Variables are just untyped references; objects hold their own type headers.',
            },
          ],
          practiceQuestions: [
            {
              title: 'Observe id() before and after variable reassignment',
              difficulty: 'easy',
              concepts: ['id', 'dynamic typing'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 2.13: TYPE CONVERSION
        // ---------------------------------------------------------
        {
          id: 'python-type-conversion',
          title: 'Type Conversion (Type Casting)',
          slug: 'type-conversion',
          description:
            'Implicit vs explicit type conversion using int(), float(), str(), bool(), and list().',
          learningObjectives: [
            'Distinguish between implicit coercion and explicit casting.',
            'Convert strings to numbers safely with int() and float().',
            'Understand truthiness rules when casting to bool().',
          ],
          prerequisites: ['python-data-types'],
          conceptSummary:
            'Python implicitly coerces ints to floats in mixed math, and provides int(), float(), str(), and bool() for explicit casting.',
          detailedExplanation:
            'Implicit type conversion occurs when Python automatically converts a smaller type to a wider type to prevent data loss. Explicit conversion requires calling constructor functions like `int("123")` or `str(456)`. Converting an invalid string to int raises ValueError.',
          syntaxExplanation:
            'res = 10 + 2.5\nage_str = "25"\nage_int = int(age_str)\nis_valid = bool(1)',
          howItWorks: [
            'Constructors invoke internal magic methods like __int__(), __float__(), and __str__().',
          ],
          examples: [
            {
              title: 'Parsing User Numerical Input Safely',
              code:
                'user_input = "450"\ntry:\n    price = float(user_input)\n    print(f"Price with tax: {price * 1.1:.2f}")\nexcept ValueError:\n    print("Invalid numeric string")',
              explanation:
                'Demonstrates converting string to float with exception guarding.',
            },
          ],
          commonMistakes: [
            {
              mistake: 'Passing a float string directly into int: int("3.14").',
              explanation:
                'int("3.14") raises a ValueError. Cast first to float, then to int: int(float("3.14")).',
            },
          ],
          quickChecks: [
            {
              question: 'What is the result of bool("") in Python?',
              answer: 'False',
              options: ['True', 'False', 'TypeError', 'None'],
              correctAnswer: 1,
              explanation:
                'Empty collections and empty strings evaluate to False in boolean context.',
            },
          ],
          practiceQuestions: [
            {
              title: 'Convert float string "99.9" to an integer safely',
              difficulty: 'easy',
              concepts: ['type casting', 'float', 'int'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 2.14: USER INPUT
        // ---------------------------------------------------------
        {
          id: 'python-user-input',
          title: 'Taking User Input with input()',
          slug: 'input-function',
          description:
            'Reading console inputs, prompt strings, and converting input strings to numbers.',
          learningObjectives: [
            'Use input(prompt) to capture user keyboard input.',
            'Remember that input() ALWAYS returns a string.',
            'Cast input to integers or floats for calculations.',
          ],
          prerequisites: ['python-type-conversion'],
          conceptSummary:
            'input(prompt) displays an optional prompt message, waits for user text entry, and returns it as a string.',
          detailedExplanation:
            'When input() executes, the program halts until the user enters text and presses Enter. Because input always returns a `str`, mathematical operations require explicit casting (e.g., `int(input())`).',
          syntaxExplanation:
            'user_name = input("Enter your name: ")\nage = int(input("Enter your age: "))\nprint(f"In 5 years, {user_name} will be {age + 5}")',
          howItWorks: [
            'input() reads lines from sys.stdin and returns the decoded string.',
          ],
          examples: [
            {
              title: 'Multi-value Input with split()',
              code:
                'raw_data = "10 20"\nx, y = [int(v) for v in raw_data.split()]\nprint("Sum is:", x + y)',
              explanation:
                'Uses split() and list comprehension to parse multiple space-delimited inputs.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Adding two inputs without casting: num1 + num2 resulting in "55" instead of 10.',
              explanation:
                'Because input returns strings, + performs string concatenation instead of addition.',
            },
          ],
          quickChecks: [
            {
              question:
                'What data type is ALWAYS returned by the input() function?',
              answer: 'str (string)',
              options: [
                'int',
                'float',
                'str (string)',
                'depends on what user types',
              ],
              correctAnswer: 2,
              explanation: 'input() always returns text as a string.',
            },
          ],
          practiceQuestions: [
            {
              title: 'Read two numbers and print their product',
              difficulty: 'easy',
              concepts: ['input', 'int', 'multiplication'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 2.15: OUTPUT FORMATTING
        // ---------------------------------------------------------
        {
          id: 'python-output-formatting',
          title: 'Output Formatting and f-strings',
          slug: 'output-formatting',
          description:
            'Modern f-strings, str.format(), legacy % formatting, decimal precision, and padding.',
          learningObjectives: [
            'Format strings efficiently using f-strings (f"Value: {val}").',
            'Format floating-point decimals with precision specifiers (e.g., :.2f).',
            'Pad and align text outputs using formatting width specifiers.',
          ],
          prerequisites: ['python-print-statement', 'python-variables'],
          conceptSummary:
            'f-strings (Formatted String Literals) are the fastest and most readable way to format text in Python 3.6+.',
          detailedExplanation:
            'Prefixing a string with `f` or `F` allows embedding Python expressions directly inside curly braces `{}`. f-strings are evaluated at runtime and offer rich formatting specifiers for number formatting, padding, alignment, and date representations.',
          syntaxExplanation:
            'name = "Alice"\nbalance = 1234.567\nprint(f"User: {name}, Balance: ${balance:,.2f}")\nprint(f"|{name:>10}|")',
          howItWorks: [
            'The parser translates f-strings into optimized bytecode string building operations.',
          ],
          examples: [
            {
              title: 'f-string Debugging Syntax',
              code:
                'x = 10\ny = 25\nprint(f"{x=}, {y=}, {x+y=}")',
              explanation:
                'The = specifier prints both expression and its value, perfect for debugging.',
            },
          ],
          commonMistakes: [
            {
              mistake: 'Using legacy % formatting (%s, %d) in new code.',
              explanation:
                'f-strings are more readable, type-safe, and faster than old % or .format() syntax.',
            },
          ],
          quickChecks: [
            {
              question:
                'How do you format a float pi = 3.14159 to exactly 2 decimal places using an f-string?',
              answer: 'f"{pi:.2f}"',
              options: [
                'f"{pi:2}"',
                'f"{pi:.2f}"',
                'f"{round(pi)}"',
                'f"{pi%2}"',
              ],
              correctAnswer: 1,
              explanation:
                ':.2f formats a float to two fixed decimal places.',
            },
          ],
          practiceQuestions: [
            {
              title: 'Format currency with commas and 2 decimals',
              difficulty: 'easy',
              concepts: ['f-strings', 'formatting'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 2.16: EXPRESSIONS
        // ---------------------------------------------------------
        {
          id: 'python-expressions',
          title: 'Expressions',
          slug: 'expressions',
          description:
            'Understanding expressions as combinations of values, variables, and operators that evaluate to a value.',
          learningObjectives: [
            'Define what constitutes an expression in Python.',
            'Differentiate expressions from statements.',
            'Evaluate operator precedence in complex arithmetic expressions.',
          ],
          prerequisites: ['python-variables'],
          conceptSummary:
            'An expression is any piece of code that can be evaluated to produce a value.',
          detailedExplanation:
            'Whenever Python can compute and return a resulting value from a code fragment, that fragment is an expression. Examples include `5 + 3`, `len("hello")`, `x > 10`, and `f"{name}!"`. Expressions can be used on the right-hand side of assignments or passed as arguments.',
          syntaxExplanation:
            'total = (10 * 5) + (100 / 4)\nis_valid = len("code") == 4',
          howItWorks: [
            'The Python compiler builds an expression node in the Abstract Syntax Tree that returns a value to the evaluation stack.',
          ],
          examples: [
            {
              title: 'Evaluating Expressions Dynamically',
              code:
                'a = 15\nb = 4\nquotient = a // b\nremainder = a % b\nprint(f"{a} = {b} * {quotient} + {remainder}")',
              explanation:
                'Combines multiple arithmetic expressions into a mathematical identity.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Attempting to pass a statement where an expression is expected (e.g. passing a = 5 into print()).',
              explanation:
                'Assignments in standard Python are statements, not expressions (unless using the walrus operator :=).',
            },
          ],
          quickChecks: [
            {
              question: 'Which of the following is an expression in Python?',
              answer: 'x * 10 + 2',
              options: ['import math', 'pass', 'x * 10 + 2', 'return'],
              correctAnswer: 2,
              explanation: 'x * 10 + 2 evaluates to a numerical value.',
            },
          ],
          practiceQuestions: [
            {
              title: 'Compute total cost including 8% tax using an expression',
              difficulty: 'easy',
              concepts: ['expressions', 'arithmetic'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 2.17: STATEMENTS
        // ---------------------------------------------------------
        {
          id: 'python-statements',
          title: 'Statements',
          slug: 'statements',
          description:
            'Simple vs compound statements (assignment, if, while, for, def, class).',
          learningObjectives: [
            'Distinguish simple statements from compound statements.',
            'Identify header lines and suites in compound statements.',
            'Understand execution flow across sequential statements.',
          ],
          prerequisites: ['python-expressions'],
          conceptSummary:
            'A statement is a complete instruction that the Python interpreter can execute (action or declaration).',
          detailedExplanation:
            'Statements form the structural logic of a program. Simple statements reside on a single logical line (e.g., assignment `x = 1`, `import os`, `pass`, `break`). Compound statements contain headers ending in colons followed by indented suites of statements (e.g., `if`, `for`, `def`).',
          syntaxExplanation:
            'x = 50\nif x > 20:\n    print("Action executed")',
          howItWorks: [
            'The interpreter evaluates statements sequentially unless diverted by control flow structures.',
          ],
          examples: [
            {
              title: 'Compound Statement Suite Structure',
              code:
                'items = ["a", "b", "c"]\nfor item in items:\n    upper = item.upper()\n    print(upper)',
              explanation:
                'Demonstrates a compound for statement containing a multi-line suite.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Omitting the colon (:) at the end of a compound statement header.',
              explanation:
                'All compound statement headers (if, elif, else, for, while, def, class) require a trailing colon.',
            },
          ],
          quickChecks: [
            {
              question:
                'What punctuation must end every compound statement header in Python?',
              answer: ': (colon)',
              options: [
                '; (semicolon)',
                ': (colon)',
                '{ (curly bracket)',
                '=> (arrow)',
              ],
              correctAnswer: 1,
              explanation: 'Colons always terminate compound headers in Python.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Construct a compound if-else statement checking even vs odd',
              difficulty: 'easy',
              concepts: ['statements', 'if-else'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },
      ],
    },

    // =============================================================
    // MODULE 3: OPERATORS
    // =============================================================
    {
      id: 'python-mod-operators',
      title: 'Operators',
      order: 3,
      description:
        'Arithmetic, assignment, comparison, logical, bitwise, membership, and identity operators with precedence.',
      topics: [
        // ---------------------------------------------------------
        // TOPIC 3.1: ARITHMETIC OPERATORS
        // ---------------------------------------------------------
        {
          id: 'python-arithmetic-operators',
          title: 'Arithmetic Operators',
          slug: 'arithmetic-operators',
          description:
            'Addition (+), Subtraction (-), Multiplication (*), True Division (/), Floor Division (//), Modulo (%), and Exponentiation (**).',
          learningObjectives: [
            'Master all 7 standard Python arithmetic operators.',
            'Differentiate true division (/) which returns a float from floor division (//).',
            'Use modulo (%) for cyclic sequences and even/odd parity checks.',
          ],
          prerequisites: ['python-expressions'],
          conceptSummary:
            'Python provides +, -, *, /, //, %, and ** for mathematical operations on numbers.',
          detailedExplanation:
            'Division `/` always returns a float in Python 3. Floor division `//` discards the fractional part and rounds down toward negative infinity. Modulo `%` calculates remainder. Exponentiation `**` raises a base to a power.',
          syntaxExplanation:
            'print(10 + 3)\nprint(10 / 3)\nprint(10 // 3)\nprint(10 % 3)\nprint(2 ** 4)',
          howItWorks: [
            'Numeric objects implement dunder methods like __add__, __truediv__, __floordiv__, and __pow__.',
          ],
          examples: [
            {
              title: 'Even/Odd and Power Calculation',
              code:
                'num = 17\nis_even = (num % 2 == 0)\nprint(f"Is {num} even? {is_even}")\nprint(f"2 to the 10th power: {2 ** 10}")',
              explanation:
                'Demonstrates parity check with % and binary scale with **.',
            },
          ],
          commonMistakes: [
            {
              mistake: 'Using ^ for exponentiation (e.g. 2 ^ 3).',
              explanation:
                'In Python, ^ is the Bitwise XOR operator; use ** for exponentiation (2 ** 3 = 8).',
            },
          ],
          quickChecks: [
            {
              question: 'What is the output of 7 // 2 in Python?',
              answer: '3',
              options: ['3.5', '3', '4', '1'],
              correctAnswer: 1,
              explanation: 'Floor division rounds down to the nearest integer.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Calculate the remainder and quotient of 145 divided by 7',
              difficulty: 'easy',
              concepts: ['arithmetic', '//', '%'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 3.2: ASSIGNMENT OPERATORS
        // ---------------------------------------------------------
        {
          id: 'python-assignment-operators',
          title: 'Assignment Operators',
          slug: 'assignment-operators',
          description:
            'Basic assignment (=) and augmented assignment (+=, -=, *=, /=, //=, %=, **=).',
          learningObjectives: [
            'Use augmented assignment operators to update values concisely.',
            'Understand in-place mutation vs re-binding on mutable vs immutable types.',
            'Recognize that Python does NOT have ++ or -- increment operators.',
          ],
          prerequisites: ['python-arithmetic-operators'],
          conceptSummary:
            'Augmented operators (+=, -=, etc.) combine an arithmetic operation with assignment in a concise step.',
          detailedExplanation:
            'Writing `count += 1` is equivalent to `count = count + 1`. For mutable objects like lists, `+=` performs an in-place extend() operation rather than allocating a new object. Python does not support the C-style `count++` or `--count` unary operators.',
          syntaxExplanation:
            'count = 10\ncount += 5\ncount *= 2\ncount //= 4',
          howItWorks: [
            'Augmented operators invoke in-place magic methods like __iadd__, __isub__, and __imul__.',
          ],
          examples: [
            {
              title: 'Accumulator Loop Pattern',
              code:
                'total = 0\nfor price in [19.99, 5.50, 12.00]:\n    total += price\nprint(f"Total: ${total:.2f}")',
              explanation:
                'Accumulates running totals concisely using +=.',
            },
          ],
          commonMistakes: [
            {
              mistake: 'Writing count++ to increment a variable.',
              explanation: 'Python will raise a SyntaxError. Always write count += 1.',
            },
          ],
          quickChecks: [
            {
              question: 'How do you increment a variable x by 1 in Python?',
              answer: 'x += 1',
              options: ['x++', '++x', 'x += 1', 'x =+ 1'],
              correctAnswer: 2,
              explanation:
                'x += 1 is the standard idiomatic increment in Python.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Accumulate the sum of integers from 1 to 10 using +=',
              difficulty: 'easy',
              concepts: ['assignment', 'loops'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 3.3: COMPARISON OPERATORS
        // ---------------------------------------------------------
        {
          id: 'python-comparison-operators',
          title: 'Comparison (Relational) Operators',
          slug: 'comparison-operators',
          description:
            'Equality (==), Inequality (!=), Greater Than (>), Less Than (<), Greater/Equal (>=), and Chained Comparisons.',
          learningObjectives: [
            'Compare numbers and strings with relational operators.',
            'Differentiate equality (==) from assignment (=).',
            'Utilize Python chained comparisons (e.g., 0 < x < 100).',
          ],
          prerequisites: ['python-arithmetic-operators'],
          conceptSummary:
            'Comparison operators compare two values and evaluate to a boolean (True or False).',
          detailedExplanation:
            'Relational operators include `==` (equal), `!=` (not equal), `<`, `>`, `<=`, and `>=`. A uniquely elegant feature of Python is chained comparisons: `18 <= age < 65` evaluates both bounds simultaneously without requiring an explicit `and` keyword.',
          syntaxExplanation:
            'x = 25\nprint(x == 25)\nprint(x != 10)\nprint(10 < x <= 30)',
          howItWorks: [
            'Objects implement rich comparison dunder methods: __eq__, __ne__, __lt__, __le__, __gt__, __ge__.',
          ],
          examples: [
            {
              title: 'Chained Comparison Range Validation',
              code:
                'score = 88\nif 80 <= score < 90:\n    print("Grade: B - Solid performance")',
              explanation:
                'Validates score interval cleanly using chained comparisons.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Using a single = instead of == in an if statement condition.',
              explanation:
                'Single = is variable assignment; double == tests equality.',
            },
          ],
          quickChecks: [
            {
              question: 'What is the result of 5 < 10 < 20 in Python?',
              answer: 'True',
              options: ['True', 'False', 'TypeError', 'SyntaxError'],
              correctAnswer: 0,
              explanation:
                'Python chains relational comparisons: 5 < 10 and 10 < 20.',
            },
          ],
          practiceQuestions: [
            {
              title: 'Check if a number falls strictly between 50 and 100',
              difficulty: 'easy',
              concepts: ['chained comparison'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 3.4: LOGICAL OPERATORS
        // ---------------------------------------------------------
        {
          id: 'python-logical-operators',
          title: 'Logical Operators',
          slug: 'logical-operators',
          description:
            'and, or, not operators and Short-Circuit Evaluation.',
          learningObjectives: [
            'Combine boolean conditions using and, or, and not.',
            'Understand short-circuit evaluation logic.',
            'Predict the return value of non-boolean expressions evaluated with and / or.',
          ],
          prerequisites: ['python-comparison-operators'],
          conceptSummary:
            'Logical operators (and, or, not) combine conditions and use short-circuit evaluation.',
          detailedExplanation:
            '`and` requires both operands to be truthy. `or` requires at least one operand to be truthy. `not` inverts truthiness. In short-circuiting, `A and B` will not evaluate B if A is False; `A or B` will not evaluate B if A is True. Python returns the actual evaluated operand.',
          syntaxExplanation:
            'is_admin = True\nhas_token = False\ncan_access = is_admin or has_token\nuser_name = ""\ndisplay = user_name or "Anonymous"',
          howItWorks: [
            'The bytecode evaluator conditionally jumps without executing downstream opcodes on short-circuit.',
          ],
          examples: [
            {
              title: 'Short-Circuit Guarding Against ZeroDivisionError',
              code:
                'divisor = 0\nif divisor != 0 and (100 / divisor) > 5:\n    print("Condition met")\nelse:\n    print("Guarded from zero division")',
              explanation:
                'Short-circuiting prevents runtime exceptions on invalid operations.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Using & and | instead of and and or for boolean conditions.',
              explanation:
                '& and | are bitwise operators that do not short-circuit; use and / or for logic.',
            },
          ],
          quickChecks: [
            {
              question:
                'In the expression False and some_function(), will some_function() execute?',
              answer: 'No, short-circuit evaluation skips it',
              options: [
                'Yes, always',
                'No, short-circuit evaluation skips it',
                'Only on error',
                'Depends on OS',
              ],
              correctAnswer: 1,
              explanation:
                'Since the first operand of and is False, the overall result is guaranteed False.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Implement a fallback display name using the or operator',
              difficulty: 'easy',
              concepts: ['logical operators', 'short-circuit'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 3.5: BITWISE OPERATORS
        // ---------------------------------------------------------
        {
          id: 'python-bitwise-operators',
          title: 'Bitwise Operators',
          slug: 'bitwise-operators',
          description:
            'Bitwise AND (&), OR (|), XOR (^), NOT (~), Left Shift (<<), and Right Shift (>>).',
          learningObjectives: [
            'Perform bit-level manipulation on integers.',
            'Understand bitmasking with & and |.',
            'Use bit shifting for fast powers-of-two multiplication and division.',
          ],
          prerequisites: ['python-arithmetic-operators'],
          conceptSummary:
            'Bitwise operators manipulate the underlying binary representation of integers directly.',
          detailedExplanation:
            'Integers are represented in two-complement binary. `&` performs bitwise AND; `|` performs bitwise OR; `^` performs bitwise XOR; `~` inverts bits (~x = -x - 1); `<<` shifts bits left; `>>` shifts bits right.',
          syntaxExplanation:
            'a = 0b1010\nb = 0b1100\nprint(bin(a & b))\nprint(bin(a | b))\nprint(1 << 3)',
          howItWorks: [
            'CPU arithmetic logic units (ALU) execute bitwise instructions directly in a single clock cycle.',
          ],
          examples: [
            {
              title: 'Flag Bitmasking Example',
              code:
                'READ_PERMISSION  = 0b001\nWRITE_PERMISSION = 0b010\nEXEC_PERMISSION  = 0b100\nuser_perms = READ_PERMISSION | WRITE_PERMISSION\ncan_write = bool(user_perms & WRITE_PERMISSION)\nprint("Can write?", can_write)',
              explanation: 'Classic Unix permission bitmasking using | and &.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Using ~ on positive numbers expecting a positive bitwise inversion.',
              explanation:
                '~x computes -(x + 1) in Python due to two-complement binary arithmetic.',
            },
          ],
          quickChecks: [
            {
              question: 'What is 1 << 4 in Python?',
              answer: '16',
              options: ['4', '8', '16', '32'],
              correctAnswer: 2,
              explanation:
                'Shifting 1 left by 4 positions calculates 1 * 2^4 = 16.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Check if the lowest bit of an integer is set using & 1',
              difficulty: 'easy',
              concepts: ['bitwise', 'bitmask'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 3.6: MEMBERSHIP OPERATORS
        // ---------------------------------------------------------
        {
          id: 'python-membership-operators',
          title: 'Membership Operators (in, not in)',
          slug: 'membership-operators',
          description:
            'Testing containment in strings, lists, tuples, dictionaries, and sets.',
          learningObjectives: [
            'Test element presence using the in and not in operators.',
            'Differentiate O(n) list lookups from O(1) set/dict lookups.',
            'Verify substring presence in text strings.',
          ],
          prerequisites: ['python-data-types'],
          conceptSummary:
            'in and not in test whether an element exists within a sequence or collection.',
          detailedExplanation:
            'For strings, `in` checks for substring presence. For lists and tuples, it scans elements sequentially (O(n)). For sets and dictionaries, it uses hash tables for near-instantaneous O(1) containment checks. In dictionaries, `in` checks keys by default.',
          syntaxExplanation:
            'print("py" in "python")\nprint(5 in [1, 2, 3, 4, 5])\nuser = {"name": "Bob", "role": "admin"}\nprint("role" in user)',
          howItWorks: [
            'Invokes the collection __contains__() dunder method or falls back to iteration via __iter__.',
          ],
          examples: [
            {
              title: 'Efficient Blocklist Checking',
              code:
                'banned_domains = {"spam.com", "malware.org", "phish.io"}\nsender = "test@phish.io"\ndomain = sender.split("@")[1]\nif domain in banned_domains:\n    print("Message blocked!")',
              explanation:
                'Uses O(1) set lookup for fast membership check.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Checking "Bob" in user_dict expecting it to find the dictionary value.',
              explanation:
                '"in" checks keys by default; to check values write "Bob" in user_dict.values().',
            },
          ],
          quickChecks: [
            {
              question: 'What does "key" in my_dict check by default?',
              answer: 'Whether "key" exists among the dictionary keys',
              options: [
                'Whether "key" exists among dictionary values',
                'Whether "key" exists among the dictionary keys',
                'Whether the dictionary is empty',
                'Raises an error',
              ],
              correctAnswer: 1,
              explanation: 'Membership testing on dictionaries checks keys.',
            },
          ],
          practiceQuestions: [
            {
              title: 'Check if an email domain is in an approved set',
              difficulty: 'easy',
              concepts: ['membership', 'set'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 3.7: IDENTITY OPERATORS
        // ---------------------------------------------------------
        {
          id: 'python-identity-operators',
          title: 'Identity Operators (is, is not)',
          slug: 'identity-operators',
          description:
            'Comparing object identity (memory address) vs value equality (== vs is).',
          learningObjectives: [
            'Differentiate value equality (==) from object identity (is).',
            'Always use is None and is not None for singleton checks.',
            'Understand Python small integer and string interning.',
          ],
          prerequisites: [
            'python-variables',
            'python-comparison-operators',
          ],
          conceptSummary:
            '== checks whether values are equal; is checks whether two references point to the exact same object in memory.',
          detailedExplanation:
            '`a == b` asks: "Do these two variables hold equivalent content?" `a is b` asks: "Do these two variables point to the exact same memory address (`id(a) == id(b)`)?" Always use `is None` to check for NoneType singletons per PEP 8.',
          syntaxExplanation:
            'list1 = [1, 2, 3]\nlist2 = [1, 2, 3]\nprint(list1 == list2)\nprint(list1 is list2)\nval = None\nprint(val is None)',
          howItWorks: [
            'is compares the internal memory pointers directly in C: return (v == w);.',
          ],
          examples: [
            {
              title: 'Default Optional Argument Validation',
              code:
                'def process_records(records=None):\n    if records is None:\n        records = []\n    print("Records count:", len(records))\n\nprocess_records()',
              explanation:
                'PEP 8 compliant check for optional None sentinel.',
            },
          ],
          commonMistakes: [
            {
              mistake: 'Using if val == None instead of if val is None.',
              explanation:
                'PEP 8 strictly requires "is None" because custom objects can override == (__eq__) to lie.',
            },
          ],
          quickChecks: [
            {
              question:
                'Which operator should you always use to check if a variable is None?',
              answer: 'is None',
              options: ['== None', 'is None', '=== None', 'equals(None)'],
              correctAnswer: 1,
              explanation:
                'PEP 8 dictates using "is None" for identity checks with singletons.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Prove that two identical newly instantiated lists are not the same identity',
              difficulty: 'easy',
              concepts: ['is', '==', 'id'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 3.8: OPERATOR PRECEDENCE
        // ---------------------------------------------------------
        {
          id: 'python-operator-precedence',
          title: 'Operator Precedence',
          slug: 'operator-precedence',
          description:
            'Order of evaluation: PEMDAS, parentheses, arithmetic, relational, and boolean operators.',
          learningObjectives: [
            'Rank operator priority from highest (parentheses, exponentiation) to lowest (assignments).',
            'Use parentheses to disambiguate complex expressions clearly.',
            'Predict evaluation order accurately.',
          ],
          prerequisites: [
            'python-arithmetic-operators',
            'python-logical-operators',
          ],
          conceptSummary:
            'Parentheses override default operator precedence: ** beats *, /, //, % which beat +, - which beat comparisons which beat logic.',
          detailedExplanation:
            'When multiple operators appear in a single expression, precedence rules dictate which operations execute first. `**` has highest arithmetic priority. Multiplication and division take precedence over addition. Comparisons evaluate before logical `and`/`or`. When in doubt, use parentheses.',
          syntaxExplanation:
            'res = 2 + 3 * 4     # 14\nres2 = (2 + 3) * 4  # 20',
          howItWorks: [
            'The parser constructs an expression AST respecting grammatical precedence tables.',
          ],
          examples: [
            {
              title: 'Complex Expression Disambiguation',
              code:
                'is_eligible = True\nage = 20\nstatus = is_eligible and (age >= 18)\nprint("Eligible adult:", status)',
              explanation:
                'Parentheses make the intended logic immediately obvious to readers.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Assuming not, and, or have equal precedence.',
              explanation:
                'not has highest precedence, followed by and, and finally or.',
            },
          ],
          quickChecks: [
            {
              question: 'What is the output of 10 - 2 * 3 in Python?',
              answer: '4',
              options: ['24', '4', '16', '8'],
              correctAnswer: 1,
              explanation:
                'Multiplication (2 * 3 = 6) takes precedence over subtraction: 10 - 6 = 4.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Add parentheses to make 5 + 3 * 2 evaluate to 16',
              difficulty: 'easy',
              concepts: ['precedence', 'parentheses'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 3.9: OPERATOR ASSOCIATIVITY
        // ---------------------------------------------------------
        {
          id: 'python-operator-associativity',
          title: 'Operator Associativity',
          slug: 'operator-associativity',
          description:
            'Left-to-right vs right-to-left associativity rules (e.g. 2 ** 3 ** 2).',
          learningObjectives: [
            'Understand operator associativity when operations have equal precedence.',
            'Identify right-to-left operators (exponentiation ** and assignment =).',
            'Identify left-to-right operators (addition, subtraction, division).',
          ],
          prerequisites: ['python-operator-precedence'],
          conceptSummary:
            'Most operators are left-to-right associative, but exponentiation (**) and assignment are right-to-left.',
          detailedExplanation:
            'When two operators have the exact same precedence, associativity determines the binding order. `10 - 5 - 2` evaluates left-to-right as `(10 - 5) - 2 = 3`. However, `2 ** 3 ** 2` is right-to-left associative and evaluates as `2 ** (3 ** 2) = 2 ** 9 = 512`.',
          syntaxExplanation:
            'print(100 / 10 / 2) # 5.0\nprint(2 ** 3 ** 2)  # 512',
          howItWorks: [
            'The parser shifts or reduces tokens based on left or right associativity grammar attributes.',
          ],
          examples: [
            {
              title: 'Chained Assignment Right-to-Left',
              code:
                'x = y = z = 100\nprint(x, y, z)',
              explanation:
                'Demonstrates right-to-left assignment evaluation.',
            },
          ],
          commonMistakes: [
            {
              mistake: 'Assuming 2 ** 3 ** 2 is 64.',
              explanation:
                'Exponentiation associates from right to left: 3 ** 2 = 9, then 2 ** 9 = 512.',
            },
          ],
          quickChecks: [
            {
              question:
                'Which of the following operators evaluates from right to left?',
              answer: '** (exponentiation)',
              options: [
                '+ (addition)',
                '/ (division)',
                '** (exponentiation)',
                '- (subtraction)',
              ],
              correctAnswer: 2,
              explanation:
                'Exponentiation is right-to-left associative in Python.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Calculate 2 ** 2 ** 3 and verify right-to-left ordering',
              difficulty: 'easy',
              concepts: ['associativity', 'exponentiation'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },
      ],
    },

    // =============================================================
    // MODULE 4: CONTROL FLOW
    // =============================================================
    {
      id: 'python-mod-control-flow',
      title: 'Control Flow',
      order: 4,
      description:
        'Conditional execution (if, elif, else) and repetition loops (for, while, break, continue).',
      topics: [
        // ---------------------------------------------------------
        // TOPIC 4.1: INTRO TO CONTROL FLOW
        // ---------------------------------------------------------
        {
          id: 'python-intro-control-flow',
          title: 'Introduction to Control Flow',
          slug: 'intro-to-control-flow',
          description:
            'Understanding sequential execution, branching paths, and iterative repetition.',
          learningObjectives: [
            'Define control flow and algorithmic decision trees.',
            'Contrast sequential, selection (conditional), and iteration (loop) structures.',
            'Design flowchart logic before implementation.',
          ],
          prerequisites: [
            'python-comparison-operators',
            'python-logical-operators',
          ],
          conceptSummary:
            'Control flow dictates the order in which individual statements and instructions are executed.',
          detailedExplanation:
            'Programs without control flow execute monotonically from line 1 to the end. Real applications make decisions based on inputs (branching with conditionals) and repeat actions across data collections (iterating with loops).',
          syntaxExplanation:
            'status = "approved"\nif status == "approved":\n    print("Access granted")\nelse:\n    print("Access denied")',
          howItWorks: [
            'The Python bytecode interpreter jumps to specific target instruction offsets using JUMP_IF_FALSE and JUMP_FORWARD.',
          ],
          examples: [
            {
              title: 'Sequential vs Branching Flow',
              code:
                'temperature = 32\nprint("Sensor activated")\nif temperature > 30:\n    print("Cooling fan turned ON")\nprint("Sensor reading cycle complete")',
              explanation:
                'Demonstrates selective execution of the cooling fan block.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Creating dead code blocks that can never be reached by any execution path.',
              explanation:
                'Ensure conditions do not contradict earlier branches.',
            },
          ],
          quickChecks: [
            {
              question:
                'Which control flow structure repeats code based on a condition?',
              answer: 'Loops (while / for)',
              options: [
                'Sequences',
                'Conditionals (if)',
                'Loops (while / for)',
                'Comments',
              ],
              correctAnswer: 2,
              explanation: 'Loops repeat code blocks.',
            },
          ],
          practiceQuestions: [
            {
              title: 'Map a simple temperature decision tree',
              difficulty: 'easy',
              concepts: ['control flow', 'conditionals'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 4.2: IF STATEMENT
        // ---------------------------------------------------------
        {
          id: 'python-if-statement',
          title: 'if Statement',
          slug: 'if-statement',
          description:
            'Conditional execution of code blocks when a boolean expression evaluates to True.',
          learningObjectives: [
            'Write syntactically correct if statements.',
            'Format indented suites under if headers.',
            'Understand boolean evaluation of conditions.',
          ],
          prerequisites: ['python-intro-control-flow'],
          conceptSummary:
            'The if statement executes its indented block only if its condition evaluates to True.',
          detailedExplanation:
            'In Python, conditional statements control program flow. The if statement evaluates an expression for truthiness. If the expression evaluates to True, Python executes the indented block belonging to the statement. When False, the block is skipped entirely.',
          syntaxExplanation: 'if condition:\n    statement',
          howItWorks: [
            'Python evaluates the condition.',
            'If True, the indented suite executes.',
            'If False, the suite is bypassed.',
          ],
          examples: [
            {
              title: 'Checking Age for Adulthood',
              code:
                'age = 20\nif age >= 18:\n    print("You are legally an adult")',
              explanation:
                'The condition age >= 18 evaluates to True, so the message prints.',
            },
          ],
          commonMistakes: [
            {
              mistake: 'Forgetting the colon (:) after the condition.',
              explanation:
                'Python requires a colon to terminate the header line.',
            },
            {
              mistake: 'Incorrect or inconsistent indentation in the suite.',
              explanation:
                'Python uses indentation to identify block membership.',
            },
          ],
          quickChecks: [
            {
              question:
                'What happens when an if condition evaluates to False?',
              answer: 'The indented block is skipped',
              options: [
                'The program terminates',
                'The indented block is skipped',
                'An error is raised',
                'It retries the check',
              ],
              correctAnswer: 1,
              explanation:
                'Python bypasses the indented block and continues with subsequent code.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Check whether an integer is positive and print confirmation',
              difficulty: 'easy',
              concepts: ['if statement'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 4.3: IF-ELSE
        // ---------------------------------------------------------
        {
          id: 'python-if-else-statement',
          title: 'if-else Statement',
          slug: 'if-else-statement',
          description:
            'Providing an alternate execution branch when the if condition is False.',
          learningObjectives: [
            'Write two-way branching logic with if and else.',
            'Guarantee that exactly one branch executes.',
            'Maintain matching indentation for if and else headers.',
          ],
          prerequisites: ['python-if-statement'],
          conceptSummary:
            'if-else creates two mutually exclusive paths: if runs when True; else runs when False.',
          detailedExplanation:
            'An if-else structure provides a fallback branch. Exactly one of the two indented blocks will execute. If the condition is True, the if block runs and else is skipped. If False, the if block is skipped and else runs.',
          syntaxExplanation: 'if condition:\n    statement_1\nelse:\n    statement_2',
          howItWorks: [
            'The interpreter evaluates condition; branch 1 or branch 2 is executed via conditional jump.',
          ],
          examples: [
            {
              title: 'Parity Even vs Odd Checker',
              code:
                'num = 7\nif num % 2 == 0:\n    print(f"{num} is even")\nelse:\n    print(f"{num} is odd")',
              explanation:
                'Guarantees reporting whether any integer is even or odd.',
            },
          ],
          commonMistakes: [
            {
              mistake: 'Putting a condition after else (e.g. else x < 10:).',
              explanation:
                'else takes no condition; to evaluate an alternate condition, use elif.',
            },
          ],
          quickChecks: [
            {
              question:
                'Can both the if block and else block execute in the same evaluation?',
              answer: 'No, they are mutually exclusive',
              options: [
                'Yes, if condition is complex',
                'No, they are mutually exclusive',
                'Only in loops',
                'Only on multithreading',
              ],
              correctAnswer: 1,
              explanation:
                'Exactly one branch executes in an if-else structure.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Check if a password length is at least 8 characters and report status',
              difficulty: 'easy',
              concepts: ['if-else', 'len'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 4.4: IF-ELIF-ELSE
        // ---------------------------------------------------------
        {
          id: 'python-if-elif-else-statement',
          title: 'if-elif-else Statement',
          slug: 'if-elif-else',
          description:
            'Multi-way conditional branching for grading, intervals, and state machines.',
          learningObjectives: [
            'Evaluate multiple conditions sequentially using elif (short for else if).',
            'Understand that conditions are evaluated from top to bottom, stopping at the first True branch.',
            'Provide a catch-all else block.',
          ],
          prerequisites: ['python-if-else-statement'],
          conceptSummary:
            'if-elif-else allows chaining multiple conditions, executing the first matching branch.',
          detailedExplanation:
            'When handling more than two possible outcomes, `elif` chains provide multi-path evaluation. Python tests each condition sequentially from top to bottom. As soon as one evaluates to True, its suite executes and all remaining `elif` and `else` blocks are skipped.',
          syntaxExplanation:
            'if score >= 90:\n    grade = "A"\nelif score >= 80:\n    grade = "B"\nelif score >= 70:\n    grade = "C"\nelse:\n    grade = "F"',
          howItWorks: [
            'Top-down evaluation stops immediately upon the first truthy condition.',
          ],
          examples: [
            {
              title: 'Traffic Light State Machine',
              code:
                'color = "amber"\nif color == "red":\n    action = "STOP"\nelif color == "amber":\n    action = "CAUTION"\nelif color == "green":\n    action = "GO"\nelse:\n    action = "UNKNOWN SIGNAL"\nprint("Traffic action:", action)',
              explanation: 'Clean sequential mapping of states to actions.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Arranging conditions in reverse numerical order (e.g. checking >= 60 before >= 90).',
              explanation:
                'Because evaluation stops at the first True branch, a score of 95 would trigger >= 60 prematurely.',
            },
          ],
          quickChecks: [
            {
              question:
                'In an if-elif-else ladder, what happens after the first True condition executes?',
              answer: 'All remaining elif and else branches are skipped',
              options: [
                'All remaining conditions are still checked',
                'All remaining elif and else branches are skipped',
                'The else block executes too',
                'An error is raised',
              ],
              correctAnswer: 1,
              explanation:
                'Execution jumps past the ladder once any branch completes.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Assign ticket pricing based on child, adult, and senior age brackets',
              difficulty: 'easy',
              concepts: ['if-elif-else'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 4.5: NESTED IF
        // ---------------------------------------------------------
        {
          id: 'python-nested-if',
          title: 'Nested if',
          slug: 'nested-if',
          description:
            'Placing if statements inside other if statements for hierarchical validation.',
          learningObjectives: [
            'Structure nested conditional logic with progressive indentation.',
            'Recognize when nested conditions can be flattened using logical and.',
            'Avoid excessive nesting depth ("Pyramid of Doom").',
          ],
          prerequisites: ['python-if-elif-else-statement'],
          conceptSummary:
            'Nested if statements place one conditional block inside another for dependent validation checks.',
          detailedExplanation:
            'An if statement can reside inside the body of another if, elif, or else block. The inner check is evaluated only if the outer check passes.',
          syntaxExplanation:
            'if user_exists:\n    if password_correct:\n        print("Login successful")\n    else:\n        print("Invalid password")\nelse:\n    print("User not found")',
          howItWorks: [
            'Inner conditional jumps are nested within the outer conditional instruction blocks.',
          ],
          examples: [
            {
              title: 'Loan Approval Hierarchy',
              code:
                'credit_score = 720\nincome = 65000\nif credit_score > 700:\n    if income > 50000:\n        print("Approved: Prime Rate")\n    else:\n        print("Approved: Standard Rate")\nelse:\n    print("Declined: Insufficient credit score")',
              explanation:
                'Evaluates secondary criteria only when primary threshold is satisfied.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Deep nesting beyond 3-4 levels making code difficult to read.',
              explanation:
                'Flatten nested code using guard clauses, early returns, or logical and.',
            },
          ],
          quickChecks: [
            {
              question:
                'How can if x > 0: if y > 0: often be simplified in a single statement?',
              answer: 'if x > 0 and y > 0:',
              options: [
                'if x > 0 or y > 0:',
                'if x > 0 and y > 0:',
                'if x > 0 & y > 0:',
                'Not possible',
              ],
              correctAnswer: 1,
              explanation:
                'Nested conditionals can often be flattened with logical and.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Validate that a user is logged in and has verified email before granting access',
              difficulty: 'easy',
              concepts: ['nested if'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 4.6: CONDITIONAL EXPRESSIONS
        // ---------------------------------------------------------
        {
          id: 'python-conditional-expressions',
          title: 'Conditional Expressions',
          slug: 'conditional-expressions',
          description:
            'One-line inline branching: x = val_true if condition else val_false.',
          learningObjectives: [
            'Write concise ternary expressions in Python.',
            'Assign values conditionally in a single readable line.',
            'Avoid over-complicating ternary expressions with nested logic.',
          ],
          prerequisites: ['python-if-else-statement'],
          conceptSummary:
            'The ternary operator assigns or evaluates a value based on a condition: x if cond else y.',
          detailedExplanation:
            'Python supports an inline conditional expression syntax: `value_if_true if condition else value_if_false`. Unlike full if statements, this is an expression that returns a value.',
          syntaxExplanation:
            'age = 19\nstatus = "Adult" if age >= 18 else "Minor"\nprint(status)',
          howItWorks: [
            'Evaluates condition; returns expression 1 if truthy, otherwise expression 2.',
          ],
          examples: [
            {
              title: 'Determining Plural Suffix',
              code:
                'count = 1\nunit = "item" if count == 1 else "items"\nprint(f"You have {count} {unit} in cart.")',
              explanation:
                'Chooses singular or plural noun suffix in a single readable line.',
            },
          ],
          commonMistakes: [
            {
              mistake: 'Using C-style condition ? val1 : val2 syntax.',
              explanation:
                'Python does not use ? : ternary syntax; use val1 if condition else val2.',
            },
          ],
          quickChecks: [
            {
              question: 'What is the value of "Yes" if 10 > 5 else "No"?',
              answer: '"Yes"',
              options: ['"Yes"', '"No"', 'True', '10'],
              correctAnswer: 0,
              explanation:
                'Since 10 > 5 is True, the first value "Yes" is returned.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Assign variable pass_status using a single-line ternary expression',
              difficulty: 'easy',
              concepts: ['ternary operator'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 4.7: FOR LOOP
        // ---------------------------------------------------------
        {
          id: 'python-for-loop',
          title: 'for Loop',
          slug: 'for-loop',
          description:
            'Iterating over sequences, range(start, stop, step), and accumulator patterns.',
          learningObjectives: [
            'Iterate over sequences (strings, lists, ranges) using for loops.',
            'Utilize range(start, stop, step) effectively.',
            'Implement accumulators and counters inside loops.',
          ],
          prerequisites: ['python-intro-control-flow'],
          conceptSummary:
            'for item in sequence iterates through each element of an iterable until exhausted.',
          detailedExplanation:
            'Python `for` loops are "for-each" loops that draw successive items from any iterable object. The built-in `range(start, stop, step)` generates a virtual sequence of integers, stopping one before the `stop` boundary.',
          syntaxExplanation:
            'for i in range(1, 6):\n    print(i)\n\nfor char in "Python":\n    print(char)',
          howItWorks: [
            'Calls iter(sequence) to obtain an iterator, calling next() until StopIteration is raised.',
          ],
          examples: [
            {
              title: 'Sum of Even Numbers in Range',
              code:
                'total = 0\nfor n in range(2, 11, 2):\n    total += n\nprint("Sum of evens up to 10:", total)',
              explanation:
                'Uses range with step=2 to iterate over even numbers.',
            },
          ],
          commonMistakes: [
            {
              mistake: 'Expecting range(1, 5) to include 5.',
              explanation:
                'range stop is exclusive; range(1, 5) produces 1, 2, 3, 4.',
            },
          ],
          quickChecks: [
            {
              question:
                'How many times will for i in range(5): execute its body?',
              answer: '5 times (0, 1, 2, 3, 4)',
              options: [
                '4 times',
                '5 times (0, 1, 2, 3, 4)',
                '6 times',
                'infinite times',
              ],
              correctAnswer: 1,
              explanation: 'range(5) yields 0, 1, 2, 3, 4.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Calculate the factorial of 5 using a for loop',
              difficulty: 'easy',
              concepts: ['for loop', 'range', 'accumulator'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 4.8: WHILE LOOP
        // ---------------------------------------------------------
        {
          id: 'python-while-loop',
          title: 'while Loop',
          slug: 'while-loop',
          description:
            'Condition-controlled loops, infinite loops, and sentinel-controlled iterations.',
          learningObjectives: [
            'Write condition-controlled while loops.',
            'Ensure loop conditions eventually become False to prevent infinite loops.',
            'Implement sentinel values for interactive input loops.',
          ],
          prerequisites: ['python-intro-control-flow'],
          conceptSummary:
            'A while loop repeats its indented block as long as its condition remains True.',
          detailedExplanation:
            'While `for` loops iterate over known sequences, `while` loops repeat until an external condition changes. The condition is evaluated before each iteration.',
          syntaxExplanation:
            'count = 3\nwhile count > 0:\n    print(f"Countdown: {count}")\n    count -= 1\nprint("Liftoff!")',
          howItWorks: [
            'Evaluates condition, runs suite, jumps back to header condition evaluation.',
          ],
          examples: [
            {
              title: 'Halving Number Sequence',
              code:
                'val = 64\nsteps = 0\nwhile val > 1:\n    val //= 2\n    steps += 1\nprint(f"64 halved to 1 in {steps} steps")',
              explanation:
                'Calculates binary logarithm steps via repeated division.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Forgetting to update the loop control variable inside the while body.',
              explanation:
                'Causes an infinite loop that freezes the terminal until Ctrl+C is pressed.',
            },
          ],
          quickChecks: [
            {
              question:
                'What happens if a while loop condition never becomes False?',
              answer: 'An infinite loop occurs',
              options: [
                'The loop automatically stops after 100 iterations',
                'An infinite loop occurs',
                'A SyntaxError is raised',
                'The variable resets to 0',
              ],
              correctAnswer: 1,
              explanation:
                'A loop condition that remains permanently True will loop endlessly.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Sum numbers until sum exceeds 100 using a while loop',
              difficulty: 'easy',
              concepts: ['while loop', 'accumulator'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 4.9: NESTED LOOPS
        // ---------------------------------------------------------
        {
          id: 'python-nested-loops',
          title: 'Nested Loops',
          slug: 'nested-loops',
          description:
            'Loops inside loops: 2D grids, matrices, coordinate pairs, and multiplication tables.',
          learningObjectives: [
            'Construct nested for and while loops.',
            'Traverse 2D matrices and coordinates.',
            'Analyze algorithmic complexity (O(N*M)) of nested loops.',
          ],
          prerequisites: ['python-for-loop', 'python-while-loop'],
          conceptSummary:
            'A nested loop contains an outer loop and one or more inner loops for multidimensional processing.',
          detailedExplanation:
            'For each single iteration of the outer loop, the inner loop completes its entire cycle. Nested loops are fundamental for processing 2D grid coordinates, image pixels, matrix mathematics, and nested data structures.',
          syntaxExplanation:
            'for row in range(3):\n    for col in range(3):\n        print(f"({row},{col})", end=" ")\n    print()',
          howItWorks: [
            'Inner loop resets and runs to exhaustion for every outer iteration step.',
          ],
          examples: [
            {
              title: 'Multiplication Table Grid',
              code:
                'for i in range(1, 4):\n    for j in range(1, 4):\n        print(f"{i*j:2}", end=" ")\n    print()',
              explanation: 'Generates a clean 3x3 multiplication grid.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Reusing the same variable name for both outer and inner loop iteration variables.',
              explanation:
                'Using "i" for both loops overwrites the outer variable and corrupts loop state.',
            },
          ],
          quickChecks: [
            {
              question:
                'If an outer loop runs 4 times and an inner loop runs 5 times, how many total inner iterations occur?',
              answer: '20',
              options: ['9', '20', '16', '25'],
              correctAnswer: 1,
              explanation: 'Outer count * inner count = 4 * 5 = 20.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Print a 4x4 grid of asterisks (*) using nested loops',
              difficulty: 'easy',
              concepts: ['nested loops', 'print'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 4.10: BREAK
        // ---------------------------------------------------------
        {
          id: 'python-break-statement',
          title: 'break',
          slug: 'break-statement',
          description:
            'Premature loop termination when a specific target condition is met.',
          learningObjectives: [
            'Terminate for or while loops immediately using break.',
            'Search collections and exit early upon finding target.',
            'Observe interaction between break and the loop else clause.',
          ],
          prerequisites: ['python-for-loop', 'python-while-loop'],
          conceptSummary:
            'break immediately terminates the nearest enclosing loop and transfers execution past the loop.',
          detailedExplanation:
            'When Python encounters `break`, the loop halts immediately regardless of whether the loop sequence has remaining elements or the while condition is still True. In nested loops, `break` only exits the innermost loop containing it.',
          syntaxExplanation:
            'for num in range(1, 100):\n    if num == 5:\n        print("Target found; breaking!")\n        break',
          howItWorks: [
            'Generates a BREAK_LOOP opcode that pops the loop block from the frame stack.',
          ],
          examples: [
            {
              title: 'Early Exit on Target Item Search',
              code:
                'names = ["Charlie", "Diana", "Target", "Frank"]\nfor name in names:\n    if name == "Target":\n        print("Found target!")\n        break',
              explanation:
                'Exits loop early without inspecting subsequent elements.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Expecting break to terminate multiple nested loop levels simultaneously.',
              explanation:
                'break only exits the specific innermost loop in which it resides.',
            },
          ],
          quickChecks: [
            {
              question: 'What does the break statement do inside a loop?',
              answer: 'Immediately terminates the loop execution',
              options: [
                'Skips to the next iteration',
                'Immediately terminates the loop execution',
                'Restarts the loop from 0',
                'Exits the entire function',
              ],
              correctAnswer: 1,
              explanation: 'break immediately ceases loop iteration.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Search a list of numbers and break when the first negative number is found',
              difficulty: 'easy',
              concepts: ['break', 'for loop'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 4.11: CONTINUE
        // ---------------------------------------------------------
        {
          id: 'python-continue-statement',
          title: 'continue',
          slug: 'continue-statement',
          description:
            'Skipping the remainder of the current iteration and jumping to the next.',
          learningObjectives: [
            'Bypass the current iteration body using continue.',
            'Filter out invalid or unneeded items during iteration.',
            'Contrast continue with break.',
          ],
          prerequisites: ['python-for-loop', 'python-break-statement'],
          conceptSummary:
            'continue skips the rest of the current iteration and immediately begins the next iteration.',
          detailedExplanation:
            'Unlike `break` which halts the entire loop, `continue` merely skips the remaining statements in the current iteration suite. Control returns to the top of the loop to evaluate the next item or test the while condition.',
          syntaxExplanation:
            'for num in range(1, 6):\n    if num == 3:\n        continue\n    print(num)',
          howItWorks: [
            'Jumps instruction pointer back to the loop header opcode for the next iteration.',
          ],
          examples: [
            {
              title: 'Skipping Non-Alphabetic Characters',
              code:
                'text = "p@y#t$h%o^n!"\nclean_chars = []\nfor char in text:\n    if not char.isalpha():\n        continue\n    clean_chars.append(char)\nprint("".join(clean_chars))',
              explanation:
                'Filters out punctuation by continuing on non-alphabetical characters.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Using continue in a while loop without advancing the counter variable before the continue.',
              explanation:
                'If counter update is below continue, the while loop condition never changes, creating an infinite loop.',
            },
          ],
          quickChecks: [
            {
              question:
                'What is the key difference between break and continue?',
              answer:
                'break exits the loop entirely; continue skips only the current iteration',
              options: [
                'break is for while loops; continue is for for loops',
                'break exits the loop entirely; continue skips only the current iteration',
                'They are interchangeable synonyms',
                'continue raises an exception',
              ],
              correctAnswer: 1,
              explanation:
                'break terminates the whole loop; continue advances to the next step.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Print numbers 1 to 10 skipping multiples of 3 using continue',
              difficulty: 'easy',
              concepts: ['continue', 'range', 'modulo'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 4.12: PASS
        // ---------------------------------------------------------
        {
          id: 'python-pass-statement',
          title: 'pass',
          slug: 'pass-statement',
          description:
            'Syntactic no-op placeholder for empty blocks, stubs, and interfaces.',
          learningObjectives: [
            'Use pass as a syntactic placeholder in empty code blocks.',
            'Write unfinished function or class stubs without raising IndentationError.',
            'Differentiate pass from continue.',
          ],
          prerequisites: ['python-syntax-rules', 'python-if-statement'],
          conceptSummary:
            'pass is a null operation (no-op); nothing happens when it executes.',
          detailedExplanation:
            'Because Python uses indentation to delimit blocks, an empty block (e.g. an if statement without a body) triggers an `IndentationError: expected an indented block`. `pass` satisfies the syntactic requirement of having an indented statement while performing no action.',
          syntaxExplanation:
            'def future_implementation():\n    pass\n\nif debug_mode:\n    pass',
          howItWorks: [
            'Compiles to a NOP (No Operation) bytecode instruction.',
          ],
          examples: [
            {
              title: 'Placeholder Class and Exception Stub',
              code:
                'class CustomUserError(Exception):\n    pass\n\nprint("Custom error class declared successfully")',
              explanation:
                'Creates a working custom exception class using pass as the body.',
            },
          ],
          commonMistakes: [
            {
              mistake: 'Confusing pass with continue inside loops.',
              explanation:
                'pass does nothing and continues executing the rest of the block; continue skips to the next iteration.',
            },
          ],
          quickChecks: [
            {
              question: 'What is the purpose of the pass statement in Python?',
              answer: 'A syntactic placeholder that performs no operation',
              options: [
                'Terminates the program',
                'A syntactic placeholder that performs no operation',
                'Passes a variable to the parent scope',
                'Skips the next line',
              ],
              correctAnswer: 1,
              explanation:
                'pass serves as a legal no-op placeholder where code is syntactically required.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Create an empty stub function calculate_metrics using pass',
              difficulty: 'easy',
              concepts: ['pass', 'functions'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },
      ],
    },

    // =============================================================
    // MODULE 5: STRINGS
    // =============================================================
    {
      id: 'python-mod-strings',
      title: 'Strings',
      order: 5,
      description:
        'String creation, indexing, slicing, immutability, formatting, and built-in methods.',
      topics: [
        // ---------------------------------------------------------
        // TOPIC 5.1: WHAT IS A STRING?
        // ---------------------------------------------------------
        {
          id: 'python-what-is-a-string',
          title: 'What is a String?',
          slug: 'what-is-a-string',
          description:
            'Strings as immutable sequences of Unicode characters in Python.',
          learningObjectives: [
            'Define string data type in Python.',
            'Understand UTF-8 Unicode encoding.',
            'Recognize strings as ordered sequences.',
          ],
          prerequisites: ['python-data-types'],
          conceptSummary:
            'A string (str) is an ordered, immutable sequence of Unicode characters representing textual data.',
          detailedExplanation:
            'In Python 3, all strings are sequences of Unicode code points by default, supporting any world language, emoji, and technical symbols. Because they are sequences, they support indexing, slicing, iteration, and containment checking.',
          syntaxExplanation:
            's = "Hello, Python 🐍"\nprint(type(s))\nprint(len(s))',
          howItWorks: [
            'CPython stores strings using compact representations (ASCII 1 byte, UCS-2 2 bytes, UCS-4 4 bytes).',
          ],
          examples: [
            {
              title: 'Unicode String',
              code:
                'text = "Data Engineering"\nprint("Length:", len(text))',
              explanation: 'Computes character count using len().',
            },
          ],
          commonMistakes: [
            {
              mistake: 'Thinking strings are byte arrays.',
              explanation:
                'Python strings are Unicode code points; byte sequences use the bytes type.',
            },
          ],
          quickChecks: [
            {
              question: 'Are Python strings mutable or immutable?',
              answer: 'Immutable',
              options: ['Mutable', 'Immutable', 'Depends on quotes', 'Dynamic'],
              correctAnswer: 1,
              explanation: 'Strings cannot be modified in place.',
            },
          ],
          practiceQuestions: [
            {
              title: 'Measure string length with len()',
              difficulty: 'easy',
              concepts: ['strings', 'len'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 5.2: CREATING STRINGS
        // ---------------------------------------------------------
        {
          id: 'python-creating-strings',
          title: 'Creating Strings',
          slug: 'creating-strings',
          description:
            'Constructing strings with literals and the str() constructor.',
          learningObjectives: [
            'Create string literals.',
            'Convert other types using str().',
            'Construct empty strings.',
          ],
          prerequisites: ['python-what-is-a-string'],
          conceptSummary:
            'Strings are created by enclosing characters in quotes or calling the str() constructor.',
          detailedExplanation:
            'You can instantiate strings by wrapping text in single, double, or triple quotes, or by converting any Python object into its string representation using `str(obj)`.',
          syntaxExplanation:
            's1 = "hello"\ns2 = \'world\'\ns3 = str(100) # "100"',
          howItWorks: ['Calls the PyUnicode_FromString C API function.'],
          examples: [
            {
              title: 'Converting Numbers to Strings',
              code: 'num = 500\ntext = str(num)\nprint(text + " dollars")',
              explanation: 'Converts integer to string for concatenation.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Concatenating a number and string directly without str().',
              explanation:
                'num + "text" triggers TypeError; write str(num) + "text".',
            },
          ],
          quickChecks: [
            {
              question: 'What does str(42) produce?',
              answer: '"42"',
              options: ['42', '"42"', 'TypeError', 'None'],
              correctAnswer: 1,
              explanation: 'Converts int 42 to string "42".',
            },
          ],
          practiceQuestions: [
            {
              title: 'Convert integer 1024 to string',
              difficulty: 'easy',
              concepts: ['str constructor'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 5.3: SINGLE QUOTES
        // ---------------------------------------------------------
        {
          id: 'python-single-quotes',
          title: 'Single Quotes',
          slug: 'single-quotes',
          description:
            'Using single quotes for string literals and embedding double quotes.',
          learningObjectives: [
            'Create strings with single quotes.',
            'Embed double quotes inside single-quoted strings.',
            'Follow consistent team quotation style.',
          ],
          prerequisites: ['python-creating-strings'],
          conceptSummary:
            'Single quotes (\'...\') allow embedding double quotes directly without escaping.',
          detailedExplanation:
            'Single quotes are functionally identical to double quotes in Python. A key stylistic advantage is that double quotes can be included inside single-quoted strings without backslash escaping.',
          syntaxExplanation:
            'quote = \'He said, "Python is awesome!"\'\nprint(quote)',
          howItWorks: [
            'The parser treats anything between matching single quotes as character payload.',
          ],
          examples: [
            {
              title: 'Embedding Double Quotes',
              code:
                'html = \'<div class="card">Content</div>\'\nprint(html)',
              explanation: 'Embeds HTML attributes cleanly.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Using unescaped single quote inside single-quoted string: \'It\'s ok\'.',
              explanation:
                'Escape with backslash: \'It\\\'s ok\' or use double quotes.',
            },
          ],
          quickChecks: [
            {
              question: 'How can you write "Hello" inside a string literal?',
              answer: '\'He said "Hello"\'',
              options: [
                '\'He said "Hello"\'',
                '"He said "Hello""',
                'Both',
                'Neither',
              ],
              correctAnswer: 0,
              explanation:
                'Single quotes allow unescaped double quotes inside.',
            },
          ],
          practiceQuestions: [
            {
              title: 'Print a dialogue quote using single quotes',
              difficulty: 'easy',
              concepts: ['single quotes'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 5.4: DOUBLE QUOTES
        // ---------------------------------------------------------
        {
          id: 'python-double-quotes',
          title: 'Double Quotes',
          slug: 'double-quotes',
          description:
            'Using double quotes for string literals and embedding apostrophes.',
          learningObjectives: [
            'Create strings with double quotes.',
            'Embed apostrophes and single quotes cleanly.',
            'Understand quotes interoperability.',
          ],
          prerequisites: ['python-single-quotes'],
          conceptSummary:
            'Double quotes ("...") allow embedding apostrophes and single quotes without backslash escapes.',
          detailedExplanation:
            'Double quotes are standard in many programming languages. In Python, using double quotes makes it natural to write English prose containing apostrophes without ugly escape characters.',
          syntaxExplanation:
            'text = "It\'s a wonderful day for coding!"\nprint(text)',
          howItWorks: [
            'The tokenizer pairs closing double quote with opening double quote.',
          ],
          examples: [
            {
              title: 'Contractions in Double Quotes',
              code:
                'sentence = "Don\'t worry, Python doesn\'t bite."\nprint(sentence)',
              explanation: 'Apostrophes render cleanly without backslashes.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Mismatched opening and closing quote types: "hello\'.',
              explanation: 'Opening and closing quotes must match.',
            },
          ],
          quickChecks: [
            {
              question: 'What happens if you open with " and close with \'?',
              answer: 'SyntaxError: unterminated string literal',
              options: [
                'Works fine',
                'SyntaxError: unterminated string literal',
                'Empty string',
                'Warning only',
              ],
              correctAnswer: 1,
              explanation: 'Mismatched quotes trigger a SyntaxError.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Create a string with apostrophes using double quotes',
              difficulty: 'easy',
              concepts: ['double quotes'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 5.5: TRIPLE QUOTES
        // ---------------------------------------------------------
        {
          id: 'python-triple-quotes',
          title: 'Triple Quotes (Multi-line Strings)',
          slug: 'triple-quotes',
          description:
            'Multi-line string literals and documentation docstrings using """ or \'\'\'.',
          learningObjectives: [
            'Span strings across multiple lines without manual \\n escapes.',
            'Preserve raw formatting and indentations.',
            'Write module and function docstrings.',
          ],
          prerequisites: ['python-creating-strings'],
          conceptSummary:
            'Triple quotes (""" or \'\'\') span multiple lines and preserve all newlines and spaces.',
          detailedExplanation:
            'Triple-quoted strings are essential for multi-line SQL queries, formatted markdown templates, and official PEP 257 function docstrings. Every newline and space inside triple quotes is captured verbatim.',
          syntaxExplanation:
            'query = """\nSELECT user_id, email\nFROM users\nWHERE active = TRUE;\n"""\nprint(query)',
          howItWorks: [
            'Captures physical newline characters directly into the string buffer.',
          ],
          examples: [
            {
              title: 'Multi-line ASCII Art',
              code:
                'banner = """\n================\n  CODEMENTOR AI \n================\n"""\nprint(banner)',
              explanation: 'Prints pre-formatted visual layout.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Unexpected leading whitespace in multi-line strings due to indentation.',
              explanation:
                'Use inspect.cleandoc() or textwrap.dedent() if leading indentation must be stripped.',
            },
          ],
          quickChecks: [
            {
              question:
                'What happens to newlines inside triple-quoted strings?',
              answer: 'They are preserved verbatim in the string',
              options: [
                'They are ignored',
                'They are converted to spaces',
                'They are preserved verbatim in the string',
                'They raise an error',
              ],
              correctAnswer: 2,
              explanation:
                'Triple quotes retain all newlines exactly as typed.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Construct a 3-line address block using triple quotes',
              difficulty: 'easy',
              concepts: ['triple quotes'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 5.6: INDEXING
        // ---------------------------------------------------------
        {
          id: 'python-string-indexing',
          title: 'String Indexing',
          slug: 'string-indexing',
          description:
            'Zero-based positional character access using [index].',
          learningObjectives: [
            'Access individual characters using zero-based indices.',
            'Observe string immutability on item assignment.',
            'Handle IndexError.',
          ],
          prerequisites: ['python-what-is-a-string'],
          conceptSummary:
            'string[i] returns the character at position i, starting from index 0.',
          detailedExplanation:
            'Python sequences are 0-indexed: the first character is at index 0, the second at index 1, and the last character of a string of length N is at index N-1. Attempting to access an index >= len(s) raises an IndexError.',
          syntaxExplanation:
            'lang = "Python"\nprint(lang[0]) # "P"\nprint(lang[3]) # "h"',
          howItWorks: [
            'Calculates pointer offset: base_address + (index * character_width).',
          ],
          examples: [
            {
              title: 'First and Last Characters',
              code:
                's = "CodeMentor"\nfirst = s[0]\nlast = s[len(s) - 1]\nprint(f"First: {first}, Last: {last}")',
              explanation: 'Extracts boundary characters.',
            },
          ],
          commonMistakes: [
            {
              mistake: 'Accessing s[len(s)] and causing an IndexError.',
              explanation:
                'The maximum index is len(s) - 1 due to 0-based indexing.',
            },
          ],
          quickChecks: [
            {
              question: 'What is "Python"[0]?',
              answer: '"P"',
              options: ['"P"', '"y"', '"Python"', 'IndexError'],
              correctAnswer: 0,
              explanation: 'Index 0 retrieves the very first character.',
            },
          ],
          practiceQuestions: [
            {
              title: 'Print the third character of "Algorithm"',
              difficulty: 'easy',
              concepts: ['indexing'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 5.7: SLICING
        // ---------------------------------------------------------
        {
          id: 'python-string-slicing',
          title: 'String Slicing',
          slug: 'string-slicing',
          description:
            'Extracting substrings using [start:stop:step].',
          learningObjectives: [
            'Extract substrings with [start:stop].',
            'Understand that stop is exclusive.',
            'Use step for skipping characters and reversing.',
          ],
          prerequisites: ['python-string-indexing'],
          conceptSummary:
            's[start:stop:step] extracts a sub-slice from start up to (but excluding) stop.',
          detailedExplanation:
            'Slicing produces a new string without modifying the original. If omitted, start defaults to 0 and stop defaults to len(s). `s[::2]` skips every other character. `s[::-1]` reverses the string.',
          syntaxExplanation:
            'word = "Mastery"\nprint(word[0:3])  # "Mas" (indices 0, 1, 2)\nprint(word[3:])   # "tery" (from index 3 to end)\nprint(word[::-1]) # "yretsaM" (reversed string!)',
          howItWorks: [
            'Allocates a new PyUnicode object copying the specified character range.',
          ],
          examples: [
            {
              title: 'Extracting Domain from Email',
              code:
                'email = "scholar@codementor.ai"\nat_idx = email.index("@")\ndomain = email[at_idx + 1:]\nprint("Domain:", domain)',
              explanation: 'Slices from @ symbol to the end of string.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Thinking slicing raises IndexError when indices are out of range.',
              explanation:
                'Slicing gracefully clamps out-of-bounds indices to string boundaries.',
            },
          ],
          quickChecks: [
            {
              question:
                'What is the idiomatic one-liner to reverse a string in Python?',
              answer: 's[::-1]',
              options: ['s.reverse()', 's[::-1]', 'reverse(s)', 's[-1:0]'],
              correctAnswer: 1,
              explanation: 'Step -1 walks the slice backward.',
            },
          ],
          practiceQuestions: [
            {
              title: 'Extract the first 4 characters of "Cybersecurity"',
              difficulty: 'easy',
              concepts: ['slicing'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 5.8: NEGATIVE INDEXING
        // ---------------------------------------------------------
        {
          id: 'python-negative-indexing',
          title: 'Negative Indexing',
          slug: 'negative-indexing',
          description:
            'Counting from the right: -1 for last character, -2 for second to last.',
          learningObjectives: [
            'Access elements from the end using negative numbers.',
            'Combine negative start and stop in slices.',
            'Eliminate verbose len(s) - 1 code.',
          ],
          prerequisites: ['python-string-indexing'],
          conceptSummary:
            'Negative indices count backward from the end: -1 is the last character, -2 is second last.',
          detailedExplanation:
            'Python negative indexing eliminates the need for `s[len(s) - 1]`. The expression `s[-1]` translates internally to `s[len(s) + (-1)]`.',
          syntaxExplanation:
            'phrase = "Python"\nprint(phrase[-1]) # "n" (last character)\nprint(phrase[-2]) # "o" (second to last)\nprint(phrase[-3:]) # "hon" (last 3 characters)',
          howItWorks: [
            'CPython wraps negative indices: index = length + index.',
          ],
          examples: [
            {
              title: 'Checking File Extension',
              code:
                'filename = "archive.tar.gz"\nprint("Is gz archive?", filename[-3:] == ".gz")',
              explanation:
                'Slices the trailing 3 characters using negative indexing.',
            },
          ],
          commonMistakes: [
            {
              mistake: 'Thinking -0 accesses the end of the string.',
              explanation:
                '-0 is mathematically equal to 0, which accesses the first element.',
            },
          ],
          quickChecks: [
            {
              question: 'What does "Hello"[-1] evaluate to?',
              answer: '"o"',
              options: ['"H"', '"o"', '"l"', 'IndexError'],
              correctAnswer: 1,
              explanation: '-1 points to the last character.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Get the last 3 characters of a string using negative slicing',
              difficulty: 'easy',
              concepts: ['negative indexing'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 5.9: CONCATENATION
        // ---------------------------------------------------------
        {
          id: 'python-string-concatenation',
          title: 'String Concatenation',
          slug: 'string-concatenation',
          description:
            'Joining strings with + operator, automatic literal joining, and str.join().',
          learningObjectives: [
            'Combine strings using +.',
            'Use implicit literal concatenation.',
            'Prefer str.join() for joining collections efficiently.',
          ],
          prerequisites: ['python-what-is-a-string'],
          conceptSummary:
            'Strings are concatenated using + or str.join(iterable).',
          detailedExplanation:
            'Using `+` creates a new combined string. Adjacent string literals without operators are automatically concatenated by the compiler. When joining many strings in a loop, avoid `+=` in favor of "\'\'.join(list)" for O(N) performance.',
          syntaxExplanation:
            'greeting = "Hello, " + "World!"\n# Adjacent literal concatenation:\nlong_text = ("Part 1 " "Part 2 " "Part 3")\nprint(greeting)\nprint(long_text)',
          howItWorks: [
            'Calculates combined byte length, allocates a new string buffer, and copies characters.',
          ],
          examples: [
            {
              title: 'Efficient Join of Words',
              code:
                'words = ["Building", "Production", "Python"]\nsentence = " ".join(words)\nprint(sentence)',
              explanation: 'Joins an array of words with space delimiters.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Repeatedly concatenating in a loop with += (O(N^2) memory reallocation).',
              explanation: 'Collect chunks into a list and call "".join() once.',
            },
          ],
          quickChecks: [
            {
              question:
                'What is the most efficient way to join 1,000 string parts in Python?',
              answer: '"".join(list_of_strings)',
              options: [
                'Looping with +=',
                '"".join(list_of_strings)',
                'string.concat()',
                'print with sep',
              ],
              correctAnswer: 1,
              explanation:
                'str.join() allocates memory in a single pre-calculated pass.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Join a list of words with hyphens using join()',
              difficulty: 'easy',
              concepts: ['join', 'concatenation'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 5.10: REPETITION
        // ---------------------------------------------------------
        {
          id: 'python-string-repetition',
          title: 'String Repetition',
          slug: 'string-repetition',
          description:
            'Repeating strings using the multiplication (*) operator.',
          learningObjectives: [
            'Repeat string patterns using *.',
            'Create divider lines and visual banners.',
            'Handle negative or zero multipliers.',
          ],
          prerequisites: ['python-string-concatenation'],
          conceptSummary: 'string * n repeats the string n times.',
          detailedExplanation:
            'Multiplying a string by an integer N produces a new string containing N copies of the original. If N <= 0, an empty string is returned.',
          syntaxExplanation:
            'line = "=" * 40\nprint(line)\npattern = "abc" * 3 # "abcabcabc"',
          howItWorks: [
            'Allocates buffer of size len(s) * n and repeats memory blocks.',
          ],
          examples: [
            {
              title: 'Terminal Table Header',
              code:
                'header = "ID" + " " * 8 + "NAME"\ndivider = "-" * 20\nprint(header)\nprint(divider)',
              explanation:
                'Creates formatted table headers using string repetition.',
            },
          ],
          commonMistakes: [
            {
              mistake: 'Multiplying two strings together: "a" * "b".',
              explanation: 'Multiplication requires one string and one integer.',
            },
          ],
          quickChecks: [
            {
              question: 'What is "-" * 5 in Python?',
              answer: '"-----"',
              options: ['"-5"', '"-----"', 'TypeError', '5'],
              correctAnswer: 1,
              explanation: 'Repeats the hyphen 5 times.',
            },
          ],
          practiceQuestions: [
            {
              title: 'Create a 50-character divider of asterisks',
              difficulty: 'easy',
              concepts: ['string repetition'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 5.11: COMPARISON
        // ---------------------------------------------------------
        {
          id: 'python-string-comparison',
          title: 'String Comparison',
          slug: 'string-comparison',
          description:
            'Lexicographical comparison using ASCII and Unicode code point values (ord).',
          learningObjectives: [
            'Compare strings with ==, !=, <, >, <=, >=.',
            'Understand lexicographical (dictionary) ordering.',
            'Inspect character code points with ord().',
          ],
          prerequisites: [
            'python-comparison-operators',
            'python-what-is-a-string',
          ],
          conceptSummary:
            'Strings are compared lexicographically character-by-character based on Unicode code points (ord()).',
          detailedExplanation:
            'Comparison compares character code points from left to right. Because uppercase letters ("A"=65) precede lowercase letters ("a"=97) in ASCII/Unicode, `"Apple" < "apple"` evaluates to True.',
          syntaxExplanation:
            'print("apple" < "banana") # True\nprint("Apple" < "apple")   # True (ASCII 65 < 97)\nprint(ord("A"), ord("a"))  # 65, 97',
          howItWorks: ['Invokes memcmp on internal character arrays.'],
          examples: [
            {
              title: 'Case-Insensitive String Comparison',
              code:
                's1 = "Python"\ns2 = "python"\nprint(s1.lower() == s2.lower()) # True',
              explanation:
                'Converts both to lowercase for case-insensitive matching.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Comparing numerical strings: "100" < "20" evaluates to True.',
              explanation:
                'Lexicographical comparison compares "1" vs "2"; cast to int before comparing numbers.',
            },
          ],
          quickChecks: [
            {
              question:
                'Why does "B" come before "a" in Python string comparison?',
              answer:
                'Uppercase ASCII codes (65-90) are lower than lowercase (97-122)',
              options: [
                'Alphabetical bug',
                'Uppercase ASCII codes (65-90) are lower than lowercase (97-122)',
                'Python prefers uppercase',
                'Random order',
              ],
              correctAnswer: 1,
              explanation: 'Code points determine relational ordering.',
            },
          ],
          practiceQuestions: [
            {
              title: 'Compare two strings case-insensitively',
              difficulty: 'easy',
              concepts: ['string comparison', 'lower()'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 5.12: ESCAPE CHARACTERS
        // ---------------------------------------------------------
        {
          id: 'python-escape-characters',
          title: 'Escape Characters and Raw Strings',
          slug: 'escape-characters',
          description:
            'Backslash escapes (\\n, \\t, \\\\, \\\') and raw strings (r"\\n").',
          learningObjectives: [
            'Use escape sequences (\\n, \\t, \\\\, \\", \\\').',
            'Construct raw strings r"..." to suppress escaping.',
            'Handle file paths and regular expressions safely.',
          ],
          prerequisites: ['python-what-is-a-string'],
          conceptSummary:
            'Backslashes escape special characters; prefixing with r creates raw strings where backslashes are literal.',
          detailedExplanation:
            '`\\n` inserts a newline; `\\t` inserts a tab; `\\\\` produces a literal backslash. In regex and Windows file paths, raw strings `r"C:\\users\\docs"` treat backslashes as literal characters without interpretation.',
          syntaxExplanation:
            'print("Line 1\\nLine 2")\nprint("Col1\\tCol2")\npath = r"C:\\new_folder\\test" # Raw string preserves backslashes',
          howItWorks: [
            'The lexical parser translates escape sequences into corresponding byte codes.',
          ],
          examples: [
            {
              title: 'Raw Strings in Windows Paths',
              code:
                'escaped_path = "C:\\\\tools\\\\node"\nraw_path = r"C:\\tools\\node"\nprint(escaped_path == raw_path) # True',
              explanation: 'Demonstrates raw string equivalence.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Ending a raw string with a single trailing backslash: r"path\\".',
              explanation:
                'A trailing backslash escapes the closing quote; use r"path" + "\\\\".',
            },
          ],
          quickChecks: [
            {
              question:
                'What does the prefix r before a string literal indicate?',
              answer:
                'Raw string literal (backslashes are not treated as escape characters)',
              options: [
                'Regular expression only',
                'Raw string literal (backslashes are not treated as escape characters)',
                'Read-only string',
                'Reversed string',
              ],
              correctAnswer: 1,
              explanation: 'r disables escape sequence processing.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Print a multi-line string using \\n in a single print call',
              difficulty: 'easy',
              concepts: ['escape characters'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 5.13: COMMON STRING METHODS
        // ---------------------------------------------------------
        {
          id: 'python-string-methods',
          title: 'Common String Methods',
          slug: 'string-methods',
          description:
            'lower(), upper(), strip(), replace(), split(), join(), find(), count(), startswith(), endswith().',
          learningObjectives: [
            'Clean and normalize text using strip(), lower(), upper().',
            'Search and replace using find(), replace(), count().',
            'Tokenize text with split() and rejoin with join().',
          ],
          prerequisites: ['python-what-is-a-string'],
          conceptSummary:
            'Python strings include dozens of built-in methods that return new transformed strings.',
          detailedExplanation:
            'Because strings are immutable, methods never modify the string in place; they return newly allocated strings. Essential methods include `.strip()` to remove whitespace, `.split()` to partition words, and `.startswith()` / `.endswith()` to check prefixes/suffixes.',
          syntaxExplanation:
            'text = "  python programming  "\nprint(text.strip().title()) # "Python Programming"\nprint(text.replace("python", "Java"))',
          howItWorks: [
            'Invokes C-optimized string transformation algorithms.',
          ],
          examples: [
            {
              title: 'Data Cleaning Pipeline',
              code:
                'raw_email = "  User.Name@Domain.COM  \\n"\nclean_email = raw_email.strip().lower()\nprint(clean_email)',
              explanation:
                'Strips whitespace and normalizes email casing.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Calling s.strip() and expecting s to be modified without reassignment: s = s.strip().',
              explanation:
                'Strings are immutable; you must reassign the returned value.',
            },
          ],
          quickChecks: [
            {
              question: 'What does " hello ".strip() return?',
              answer: '"hello"',
              options: ['" hello "', '"hello"', 'None', '["hello"]'],
              correctAnswer: 1,
              explanation: 'strip removes leading and trailing whitespace.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Split a sentence into words and count the occurrences of "the"',
              difficulty: 'easy',
              concepts: ['split', 'count'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 5.14: STRING FORMATTING METHODS
        // ---------------------------------------------------------
        {
          id: 'python-string-formatting-methods',
          title: 'String Formatting Methods',
          slug: 'string-formatting-methods',
          description:
            'Comparing %-formatting, str.format(), and template strings.',
          learningObjectives: [
            'Use str.format() with positional and named placeholders.',
            'Recognize legacy %-formatting in older codebases.',
            'Choose the best formatting technique.',
          ],
          prerequisites: ['python-output-formatting'],
          conceptSummary:
            'str.format() provides flexible placeholder substitution: "Hello {0}, {1}".format(a, b).',
          detailedExplanation:
            'Before f-strings in Python 3.6, `str.format()` was the standard. It supports named placeholders `"{name} is {age}".format(name="Bob", age=25)` and reusable index references `"{0} + {0} = {1}".format(2, 4)`.',
          syntaxExplanation:
            'template = "User: {name} | Role: {role}"\nprint(template.format(name="Admin", role="Superuser"))',
          howItWorks: [
            'Parses format strings and dynamically substitutes arguments by key or index.',
          ],
          examples: [
            {
              title: 'Reusable Template String',
              code:
                'report_template = "Metric {0}: {1:.2f}%"\nprint(report_template.format("CPU", 45.6789))\nprint(report_template.format("RAM", 78.1234))',
              explanation:
                'Reuses a single template across multiple data rows.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Index mismatch in str.format() when arguments are omitted.',
              explanation: 'Pass arguments matching positional placeholders.',
            },
          ],
          quickChecks: [
            {
              question:
                'What was introduced in Python 3.6 that largely superseded str.format()?',
              answer: 'f-strings (Formatted String Literals)',
              options: [
                'Template strings',
                'f-strings (Formatted String Literals)',
                'String buffers',
                'printf',
              ],
              correctAnswer: 1,
              explanation: 'f-strings are more concise and faster.',
            },
          ],
          practiceQuestions: [
            {
              title: 'Format an invoice line using str.format()',
              difficulty: 'easy',
              concepts: ['str.format'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 5.15: F-STRINGS DEEP DIVE
        // ---------------------------------------------------------
        {
          id: 'python-f-strings-deep-dive',
          title: 'f-strings Deep Dive',
          slug: 'f-strings-deep-dive',
          description:
            'Advanced expressions, conversions (!r, !s), alignment, number formatting, and date formatting inside f-strings.',
          learningObjectives: [
            'Embed complex expressions inside f-strings.',
            'Format dates and hexadecimal/binary numbers.',
            'Use !r for representation debugging.',
          ],
          prerequisites: ['python-output-formatting'],
          conceptSummary:
            'f-strings evaluate arbitrary expressions at runtime with full formatting specifiers: {expr:specifier}.',
          detailedExplanation:
            'f-strings can evaluate expressions like `{len(items)}` or `{price * 1.2:,.2f}`. Conversion flags include `!s` (str()), `!r` (repr()), and `!a` (ascii()). Date formatting is supported via strftime codes directly inside braces: `{now:%Y-%m-%d}`.',
          syntaxExplanation:
            'import datetime\nnow = datetime.datetime.now()\nprint(f"ISO Date: {now:%Y-%m-%d %H:%M}")\nval = 255\nprint(f"Hex: {val:#x}, Binary: {val:#b}")',
          howItWorks: [
            'Compiled to bytecode BUILD_STRING and FORMAT_VALUE operations.',
          ],
          examples: [
            {
              title: 'Tabular Data Alignment with f-strings',
              code:
                'data = [("Python", 1991), ("JavaScript", 1995), ("Rust", 2010)]\nfor lang, year in data:\n    print(f"{lang:<12} | Year: {year}")',
              explanation: 'Left-aligns language names within 12 characters.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Putting backslashes directly inside f-string expressions in Python < 3.12.',
              explanation:
                'In Python 3.12+, backslashes are allowed inside expressions.',
            },
          ],
          quickChecks: [
            {
              question: 'What does {num:#x} format a number as?',
              answer: 'Hexadecimal with 0x prefix',
              options: ['Octal', 'Hexadecimal with 0x prefix', 'Binary', 'Decimal'],
              correctAnswer: 1,
              explanation: '#x outputs 0x prefix with hex digits.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Format numbers 1 to 5 into binary strings using f-strings',
              difficulty: 'easy',
              concepts: ['f-strings', 'binary'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 5.16: IMMUTABILITY
        // ---------------------------------------------------------
        {
          id: 'python-string-immutability',
          title: 'String Immutability',
          slug: 'string-immutability',
          description:
            'Why strings cannot be modified in place, memory safety, hashing, and dictionary keys.',
          learningObjectives: [
            'Understand why Python strings are immutable.',
            'Recognize TypeError on attempted in-place modification.',
            'Explain why immutability allows strings to serve as dictionary keys.',
          ],
          prerequisites: ['python-what-is-a-string'],
          conceptSummary:
            'Strings cannot be modified in place; any alteration allocates a new string object.',
          detailedExplanation:
            'Once created, string characters cannot be changed. Attempting `s[0] = "X"` raises `TypeError: \'str\' object does not support item assignment`. Immutability provides thread safety, security, and guarantees a fixed hash code so strings can be used as dictionary keys and set elements.',
          syntaxExplanation:
            'word = "cat"\n# word[0] = "b" -> TypeError\n# Idiomatic replacement creates a new string:\nword = "b" + word[1:] # "bat"\nprint(word)',
          howItWorks: [
            'The CPyUnicode struct has no mutation API exposed to Python code.',
          ],
          examples: [
            {
              title: 'Correct String Modification Pattern',
              code:
                'original = "hello world"\nmodified = "H" + original[1:]\nprint("Original:", original)\nprint("Modified:", modified)',
              explanation:
                'Allocates a new string while leaving original intact.',
            },
          ],
          commonMistakes: [
            {
              mistake: 'Trying to modify a string index directly: s[0] = "A".',
              explanation:
                'Strings are immutable. Construct a new string instead.',
            },
          ],
          quickChecks: [
            {
              question:
                'Why can strings be used as keys in Python dictionaries?',
              answer: 'Because strings are immutable and therefore hashable',
              options: [
                'Because strings are short',
                'Because strings are immutable and therefore hashable',
                'Because strings are sequences',
                'Any type can be a dictionary key',
              ],
              correctAnswer: 1,
              explanation:
                'Dictionary keys require hashable, immutable objects.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Replace the first character of "Jello" with "H" to make "Hello"',
              difficulty: 'easy',
              concepts: ['immutability', 'slicing'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },
      ],
    },

    // =============================================================
    // MODULE 6: LISTS
    // =============================================================
    {
      id: 'python-mod-lists',
      title: 'Lists',
      order: 6,
      description:
        'Dynamic arrays, mutability, indexing, slicing, methods, and list comprehensions.',
      topics: [
        // ---------------------------------------------------------
        // TOPIC 6.1: WHAT IS A LIST?
        // ---------------------------------------------------------
        {
          id: 'python-what-is-a-list',
          title: 'What is a List?',
          slug: 'what-is-a-list',
          description:
            'Lists as ordered, mutable collections of heterogeneous elements.',
          learningObjectives: [
            'Define Python lists as dynamic arrays.',
            'Understand mutability in lists.',
            'Store heterogeneous data types.',
          ],
          prerequisites: ['python-data-types'],
          conceptSummary:
            'A list is an ordered, mutable sequence that can hold items of any data type.',
          detailedExplanation:
            'Lists are one of Python most versatile compound data types. Unlike static arrays in C, Python lists are dynamic: they automatically resize as items are appended or deleted. They can contain mixed types: integers, strings, floats, even other lists.',
          syntaxExplanation:
            'my_list = [10, "Python", 3.14, True]\nprint(my_list)\nprint(len(my_list))',
          howItWorks: [
            'CPython implements lists as dynamic arrays of pointers to PyObject items with overallocation.',
          ],
          examples: [
            {
              title: 'Heterogeneous List',
              code:
                'user = ["Alice", 28, "Engineer", True]\nprint(f"Name: {user[0]}, Age: {user[1]}")',
              explanation: 'Stores distinct data fields in an ordered list.',
            },
          ],
          commonMistakes: [
            {
              mistake: 'Confusing Python lists with fixed-type arrays.',
              explanation:
                'Python lists accept mixed types; for homogeneous arrays, use array module or NumPy.',
            },
          ],
          quickChecks: [
            {
              question: 'Are Python lists mutable?',
              answer: 'Yes, elements can be added, updated, or removed',
              options: [
                'No, they are fixed at creation',
                'Yes, elements can be added, updated, or removed',
                'Only if numbers',
                'Only in Python 2',
              ],
              correctAnswer: 1,
              explanation: 'Lists are mutable sequences.',
            },
          ],
          practiceQuestions: [
            {
              title: 'Create a list of 5 programming languages',
              difficulty: 'easy',
              concepts: ['lists'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 6.2: CREATING LISTS
        // ---------------------------------------------------------
        {
          id: 'python-creating-lists',
          title: 'Creating Lists',
          slug: 'creating-lists',
          description:
            'List literals [], list() constructor, and list multiplication.',
          learningObjectives: [
            'Create lists with brackets [].',
            'Convert iterables to lists with list().',
            'Initialize lists with multiplication [0] * n.',
          ],
          prerequisites: ['python-what-is-a-list'],
          conceptSummary:
            'Lists are created with brackets [item1, item2] or the list() constructor.',
          detailedExplanation:
            'You can create an empty list with `[]` or `list()`. Any iterable (strings, tuples, sets, ranges) can be converted to a list via `list(iterable)`. Initializing fixed-size lists is often done with `[0] * size`.',
          syntaxExplanation:
            'empty = []\nnums = list(range(1, 6)) # [1, 2, 3, 4, 5]\nzeros = [0] * 5          # [0, 0, 0, 0, 0]',
          howItWorks: [
            'list(iterable) iterates over the argument and appends items to a new list buffer.',
          ],
          examples: [
            {
              title: 'Converting String to Character List',
              code:
                'chars = list("CODE")\nprint(chars) # [\'C\', \'O\', \'D\', \'E\']',
              explanation:
                'Converts string characters into individual list elements.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Creating a 2D list with [[0]*3]*3 causing reference aliasing across rows.',
              explanation:
                'Use list comprehension [[0]*3 for _ in range(3)] so rows are distinct objects.',
            },
          ],
          quickChecks: [
            {
              question: 'What does list(range(3)) produce?',
              answer: '[0, 1, 2]',
              options: ['[1, 2, 3]', '[0, 1, 2]', '[0, 1, 2, 3]', 'range(0, 3)'],
              correctAnswer: 1,
              explanation:
                'Converts range generator into an evaluated list [0, 1, 2].',
            },
          ],
          practiceQuestions: [
            {
              title: 'Initialize a list of 10 zeros',
              difficulty: 'easy',
              concepts: ['list multiplication'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 6.3: LIST INDEXING
        // ---------------------------------------------------------
        {
          id: 'python-list-indexing',
          title: 'List Indexing',
          slug: 'list-indexing',
          description:
            'Zero-based positional access and reading elements with [index].',
          learningObjectives: [
            'Access items via zero-based indexing.',
            'Understand IndexError boundaries.',
            'Access nested list items.',
          ],
          prerequisites: ['python-creating-lists'],
          conceptSummary:
            'list[i] retrieves the element at position i, starting from 0.',
          detailedExplanation:
            'Indexing works identically to strings. The first element is `list[0]`, and the last element is `list[len(list)-1]`. Attempting to access an index out of bounds raises an `IndexError`.',
          syntaxExplanation:
            'fruits = ["apple", "banana", "cherry"]\nprint(fruits[0]) # "apple"\nprint(fruits[2]) # "cherry"',
          howItWorks: [
            'CPython performs direct array index lookup in O(1) constant time.',
          ],
          examples: [
            {
              title: 'Retrieving Array Elements',
              code:
                'colors = ["red", "green", "blue"]\nprint("Primary:", colors[0])\nprint("Secondary:", colors[1])',
              explanation: 'Extracts items at index 0 and 1.',
            },
          ],
          commonMistakes: [
            {
              mistake: 'Accessing fruits[3] on a 3-item list.',
              explanation:
                'Valid indices are 0, 1, 2; index 3 triggers IndexError.',
            },
          ],
          quickChecks: [
            {
              question:
                'What is the time complexity of accessing an item by index in a Python list?',
              answer: 'O(1) constant time',
              options: [
                'O(N) linear time',
                'O(1) constant time',
                'O(log N)',
                'O(N^2)',
              ],
              correctAnswer: 1,
              explanation:
                'Lists are contiguous pointer arrays allowing instant O(1) index lookup.',
            },
          ],
          practiceQuestions: [
            {
              title: 'Access the second item of a list',
              difficulty: 'easy',
              concepts: ['indexing'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 6.4: NEGATIVE INDEXING
        // ---------------------------------------------------------
        {
          id: 'python-list-negative-indexing',
          title: 'List Negative Indexing',
          slug: 'list-negative-indexing',
          description:
            'Accessing items from the end of the list with negative indices.',
          learningObjectives: [
            'Access the last element with list[-1].',
            'Access elements from right to left.',
            'Eliminate verbose len(list) calls.',
          ],
          prerequisites: ['python-list-indexing'],
          conceptSummary:
            'list[-1] returns the last item, list[-2] the second to last.',
          detailedExplanation:
            'Negative indices wrap around from the end of the list. `nums[-1]` is the last element, `nums[-2]` is the penultimate element.',
          syntaxExplanation:
            'tasks = ["task1", "task2", "task3"]\nprint(tasks[-1]) # "task3"',
          howItWorks: [
            'Index is translated to len(list) + index in O(1) time.',
          ],
          examples: [
            {
              title: 'Getting Queue Tail',
              code:
                'queue = ["first", "second", "last"]\nprint("Tail of queue:", queue[-1])',
              explanation: 'Accesses the final queue element.',
            },
          ],
          commonMistakes: [
            {
              mistake: 'Using -len(list) - 1 and causing an IndexError.',
              explanation:
                '-len(list) is the first element; anything smaller is out of bounds.',
            },
          ],
          quickChecks: [
            {
              question: 'What does items[-1] return in Python?',
              answer: 'The last element in the list',
              options: [
                'The first element',
                'The last element in the list',
                'An error',
                'The second element',
              ],
              correctAnswer: 1,
              explanation: '-1 points to the last item.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Print the last element of a list using negative index',
              difficulty: 'easy',
              concepts: ['negative indexing'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 6.5: LIST SLICING
        // ---------------------------------------------------------
        {
          id: 'python-list-slicing',
          title: 'List Slicing',
          slug: 'list-slicing',
          description:
            'Sub-list extraction, cloning, and stepping with [start:stop:step].',
          learningObjectives: [
            'Extract sub-lists with slicing.',
            'Make shallow copies with list[:].',
            'Reverse lists with list[::-1].',
          ],
          prerequisites: ['python-list-indexing'],
          conceptSummary:
            'list[start:stop:step] returns a new sub-list containing the sliced items.',
          detailedExplanation:
            'Slicing a list produces a new shallow copy containing the selected elements. `nums[1:4]` extracts indices 1, 2, 3. `nums[:]` creates a shallow copy of the entire list.',
          syntaxExplanation:
            'nums = [10, 20, 30, 40, 50]\nprint(nums[1:4])  # [20, 30, 40]\nclone = nums[:]   # Shallow copy',
          howItWorks: [
            'Allocates a new list and copies item references into the new buffer.',
          ],
          examples: [
            {
              title: 'Top 3 Leaderboard',
              code:
                'scores = [98, 95, 91, 88, 82, 70]\ntop_3 = scores[:3]\nprint("Top 3 scores:", top_3)',
              explanation: 'Slices the first 3 highest scores.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Thinking clone = nums[:] makes a deep copy of nested objects.',
              explanation:
                'Slicing creates a shallow copy; nested mutable objects remain shared.',
            },
          ],
          quickChecks: [
            {
              question:
                'What does nums[:2] extract from nums = [1, 2, 3, 4]?',
              answer: '[1, 2]',
              options: ['[1, 2]', '[1, 2, 3]', '[2, 3]', '[1]'],
              correctAnswer: 0,
              explanation: 'Indices 0 and 1 are returned.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Extract the middle 3 elements from a 7-element list',
              difficulty: 'easy',
              concepts: ['slicing'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 6.6: UPDATING LISTS
        // ---------------------------------------------------------
        {
          id: 'python-updating-lists',
          title: 'Updating Lists',
          slug: 'updating-lists',
          description:
            'In-place modification of elements and slice assignment.',
          learningObjectives: [
            'Modify list elements via index assignment: list[i] = val.',
            'Replace multiple elements using slice assignment.',
            'Understand in-place mutation.',
          ],
          prerequisites: ['python-list-indexing'],
          conceptSummary:
            'Because lists are mutable, items can be modified in place: list[index] = new_value.',
          detailedExplanation:
            'Unlike strings, lists support item assignment. You can update single elements (`nums[0] = 99`) or replace entire sub-sequences via slice assignment (`nums[1:3] = [100, 200]`).',
          syntaxExplanation:
            'scores = [50, 60, 70]\nscores[0] = 55 # Modifies index 0\nscores[1:3] = [65, 75] # Slice replacement\nprint(scores)',
          howItWorks: [
            'Updates the pointer at the specified index in the CPyList object.',
          ],
          examples: [
            {
              title: 'Normalizing Temperatures',
              code:
                'temps = [32.0, -999.0, 35.5]\nif temps[1] == -999.0:\n    temps[1] = 0.0 # Fix invalid sensor reading\nprint(temps)',
              explanation:
                'Corrects an invalid sensor reading in place.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Attempting to assign past the end of the list: list[len(list)] = val.',
              explanation:
                'Item assignment cannot extend list length; use append() instead.',
            },
          ],
          quickChecks: [
            {
              question:
                'Can you change an element of a list using list[0] = 5?',
              answer: 'Yes, lists are mutable',
              options: [
                'No, causes TypeError',
                'Yes, lists are mutable',
                'Only if the element is 0',
                'Only in functions',
              ],
              correctAnswer: 1,
              explanation: 'Lists permit in-place item updates.',
            },
          ],
          practiceQuestions: [
            {
              title: 'Change the first element of a list to "Python"',
              difficulty: 'easy',
              concepts: ['list update'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 6.7: ADDING ELEMENTS
        // ---------------------------------------------------------
        {
          id: 'python-adding-elements',
          title: 'Adding Elements Overview',
          slug: 'adding-elements',
          description:
            'Techniques for adding data: append(), insert(), extend(), and list concatenation (+).',
          learningObjectives: [
            'Compare methods for adding items to a list.',
            'Choose between append (single item) and extend (multiple items).',
            'Insert items at arbitrary positions.',
          ],
          prerequisites: ['python-updating-lists'],
          conceptSummary:
            'Add items using append() (at end), insert() (at index), or extend() (batch items).',
          detailedExplanation:
            'Python provides specialized methods for growing lists: `append(item)` adds one item to the end in O(1) amortized time. `insert(i, item)` inserts at index i in O(n) time. `extend(iterable)` appends all items from another collection.',
          syntaxExplanation:
            'lst = [1, 2]\nlst.append(3)      # [1, 2, 3]\nlst.insert(0, 0)   # [0, 1, 2, 3]\nlst.extend([4, 5]) # [0, 1, 2, 3, 4, 5]',
          howItWorks: [
            'CPython automatically overallocates capacity to ensure append runs in amortized O(1) time.',
          ],
          examples: [
            {
              title: 'Building a Dynamic Todo List',
              code:
                'todos = []\ntodos.append("Buy groceries")\ntodos.append("Read PEP 8")\nprint(todos)',
              explanation: 'Grows a list dynamically.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Writing list = list.append(item) resulting in list becoming None.',
              explanation: 'append() mutates in place and returns None.',
            },
          ],
          quickChecks: [
            {
              question: 'What does list.append(x) return?',
              answer: 'None (it modifies in place)',
              options: [
                'The updated list',
                'None (it modifies in place)',
                'The length of list',
                'The added item',
              ],
              correctAnswer: 1,
              explanation:
                'In-place mutating methods in Python return None.',
            },
          ],
          practiceQuestions: [
            {
              title: 'Append three items to an initially empty list',
              difficulty: 'easy',
              concepts: ['append'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 6.8: APPEND
        // ---------------------------------------------------------
        {
          id: 'python-list-append',
          title: 'list.append()',
          slug: 'list-append',
          description:
            'Appending a single element to the end of a list in O(1) amortized time.',
          learningObjectives: [
            'Add a single element to the end of a list.',
            'Understand O(1) amortized growth.',
            'Avoid nesting when passing lists to append.',
          ],
          prerequisites: ['python-adding-elements'],
          conceptSummary:
            'list.append(x) adds item x to the very end of the list.',
          detailedExplanation:
            '`append(x)` takes a single object and places it at the next available slot. If you pass another list `lst.append([1, 2])`, the entire list is added as a single nested element.',
          syntaxExplanation:
            'nums = [1, 2, 3]\nnums.append(4)\nprint(nums) # [1, 2, 3, 4]',
          howItWorks: [
            'If capacity is exceeded, CPython resizes the array buffer by ~1.125x + 3 elements.',
          ],
          examples: [
            {
              title: 'Collecting Evens',
              code:
                'evens = []\nfor i in range(10):\n    if i % 2 == 0:\n        evens.append(i)\nprint(evens)',
              explanation: 'Collects even numbers dynamically.',
            },
          ],
          commonMistakes: [
            {
              mistake: 'Writing lst.append(1, 2) with multiple arguments.',
              explanation: 'append() takes exactly one argument.',
            },
          ],
          quickChecks: [
            {
              question:
                'What happens if you do [1, 2].append([3, 4])?',
              answer: '[1, 2, [3, 4]] (nested list)',
              options: [
                '[1, 2, 3, 4]',
                '[1, 2, [3, 4]] (nested list)',
                'TypeError',
                '[1, 2]',
              ],
              correctAnswer: 1,
              explanation: 'append adds its argument as a single object.',
            },
          ],
          practiceQuestions: [
            {
              title: 'Use append to add numbers 1 to 5 to a list',
              difficulty: 'easy',
              concepts: ['append', 'loops'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 6.9: INSERT
        // ---------------------------------------------------------
        {
          id: 'python-list-insert',
          title: 'list.insert()',
          slug: 'list-insert',
          description:
            'Inserting an element at any specified index (O(n) shift).',
          learningObjectives: [
            'Insert elements at arbitrary positions: list.insert(index, obj).',
            'Understand the O(n) element shifting cost.',
            'Insert at index 0 for prepending.',
          ],
          prerequisites: ['python-adding-elements'],
          conceptSummary:
            'list.insert(index, element) inserts an element before the specified index.',
          detailedExplanation:
            '`insert(i, x)` shifts all elements from index i to the end one position to the right, then inserts x at index i. Because all subsequent elements must be shifted, it is an O(n) operation.',
          syntaxExplanation:
            'items = ["B", "C"]\nitems.insert(0, "A") # Inserts at beginning: ["A", "B", "C"]\nitems.insert(2, "X") # Inserts before index 2',
          howItWorks: [
            'Memmove shifts pointers to the right in heap memory.',
          ],
          examples: [
            {
              title: 'Priority Task Prepending',
              code:
                'tasks = ["routine job", "backup"]\ntasks.insert(0, "CRITICAL ALERT")\nprint(tasks)',
              explanation: 'Inserts urgent task at index 0.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Using insert(0, x) repeatedly in large loops instead of collections.deque.',
              explanation:
                'Repeated prepending with insert(0) is O(N^2); deque is O(1).',
            },
          ],
          quickChecks: [
            {
              question:
                'What is the time complexity of list.insert(0, item)?',
              answer: 'O(N) linear time',
              options: ['O(1) constant time', 'O(N) linear time', 'O(log N)', 'O(N^2)'],
              correctAnswer: 1,
              explanation: 'All existing elements must shift right.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Insert "Start" at index 0 and "End" at index 3',
              difficulty: 'easy',
              concepts: ['insert'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 6.10: EXTEND
        // ---------------------------------------------------------
        {
          id: 'python-list-extend',
          title: 'list.extend()',
          slug: 'list-extend',
          description:
            'Appending all elements from an iterable to a list in O(k) time.',
          learningObjectives: [
            'Flatten-append elements using list.extend(iterable).',
            'Contrast extend() with append().',
            'Extend lists with tuples, sets, or generators.',
          ],
          prerequisites: ['python-list-append'],
          conceptSummary:
            'list.extend(iterable) unpacks and appends each element of the iterable to the list.',
          detailedExplanation:
            'While `append` adds its argument as a single element, `extend` iterates over the argument and appends each item individually. This is equivalent to the `+=` operator on lists.',
          syntaxExplanation:
            'a = [1, 2]\na.extend([3, 4]) # a becomes [1, 2, 3, 4]\na += [5, 6]       # a becomes [1, 2, 3, 4, 5, 6]',
          howItWorks: [
            'Pre-resizes the list buffer by the length of the iterable and copies pointers.',
          ],
          examples: [
            {
              title: 'Merging Student Lists',
              code:
                'class_a = ["Alice", "Bob"]\nclass_b = ["Charlie", "Diana"]\nclass_a.extend(class_b)\nprint("Combined roster:", class_a)',
              explanation: 'Extends class_a with all students from class_b.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Passing a string to extend() expecting a single item: lst.extend("cat") resulting in [\'c\', \'a\', \'t\'].',
              explanation:
                'Strings are iterables, so extend unpacks individual characters.',
            },
          ],
          quickChecks: [
            {
              question: 'What is [1, 2].extend([3, 4])?',
              answer: 'Extends list to [1, 2, 3, 4]',
              options: [
                '[1, 2, [3, 4]]',
                'Extends list to [1, 2, 3, 4]',
                'TypeError',
                '[3, 4]',
              ],
              correctAnswer: 1,
              explanation: 'extend unrolls each element into the list.',
            },
          ],
          practiceQuestions: [
            {
              title: 'Combine two lists into one using extend()',
              difficulty: 'easy',
              concepts: ['extend'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 6.11: REMOVING ELEMENTS
        // ---------------------------------------------------------
        {
          id: 'python-removing-elements',
          title: 'Removing Elements Overview',
          slug: 'removing-elements',
          description:
            'Techniques for deleting list items: remove(), pop(), clear(), and del statement.',
          learningObjectives: [
            'Compare removal strategies: by value, by index, or complete clearing.',
            'Handle ValueError when removing non-existent values.',
            'Retrieve and remove items with pop().',
          ],
          prerequisites: ['python-updating-lists'],
          conceptSummary:
            'Remove by value with remove(val), by index with pop(i) or del list[i], or clear all with clear().',
          detailedExplanation:
            'Python offers specific tools for deleting items: `remove(val)` searches and deletes the first matching value. `pop(i)` removes and returns the item at index i. `del list[i]` deletes without returning. `clear()` wipes the entire list.',
          syntaxExplanation:
            'lst = ["a", "b", "c", "d"]\nlst.remove("b") # Removes by value: ["a", "c", "d"]\nitem = lst.pop() # Removes and returns last item: "d"\ndel lst[0]       # Deletes index 0: ["c"]\nlst.clear()      # Wipes list: []',
          howItWorks: [
            'Pointers are shifted left to fill the vacated slot, and reference counts decrement.',
          ],
          examples: [
            {
              title: 'Safe Removal by Value',
              code:
                'items = [10, 20, 30]\nif 20 in items:\n    items.remove(20)\nprint(items)',
              explanation:
                'Checks membership before calling remove to prevent ValueError.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Calling remove(x) when x is not in the list, raising ValueError.',
              explanation:
                'Always check if x in list or wrap in try/except.',
            },
          ],
          quickChecks: [
            {
              question:
                'Which method removes an item by index AND returns it?',
              answer: 'pop()',
              options: ['remove()', 'pop()', 'clear()', 'del'],
              correctAnswer: 1,
              explanation: 'pop() removes and returns the popped element.',
            },
          ],
          practiceQuestions: [
            {
              title: 'Remove item "test" from a list safely',
              difficulty: 'easy',
              concepts: ['remove'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 6.12: REMOVE
        // ---------------------------------------------------------
        {
          id: 'python-list-remove',
          title: 'list.remove()',
          slug: 'list-remove',
          description:
            'Removing the first occurrence of a value from a list (O(n) search).',
          learningObjectives: [
            'Remove items by value matching.',
            'Remember that only the FIRST matching occurrence is removed.',
            'Handle ValueError appropriately.',
          ],
          prerequisites: ['python-removing-elements'],
          conceptSummary:
            'list.remove(x) searches for the first occurrence of x and deletes it.',
          detailedExplanation:
            '`remove(x)` iterates from index 0 until it finds an element where `item == x`. It deletes that element and shifts subsequent elements left. If duplicates exist, only the first is removed.',
          syntaxExplanation:
            'nums = [1, 2, 3, 2, 4]\nnums.remove(2) # Removes the first 2\nprint(nums)    # [1, 3, 2, 4]',
          howItWorks: [
            'Linear search for match, then memmove shifts remaining pointers.',
          ],
          examples: [
            {
              title: 'Removing All Instances of a Value',
              code:
                'tags = ["python", "draft", "python", "tutorial"]\nwhile "python" in tags:\n    tags.remove("python")\nprint(tags)',
              explanation: 'Removes all duplicates in a loop.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Expecting remove() to remove all duplicates in one call.',
              explanation:
                'remove() deletes only the first matching occurrence.',
            },
          ],
          quickChecks: [
            {
              question: 'What does [1, 2, 2, 3].remove(2) do?',
              answer: 'Removes the first 2 only',
              options: [
                'Removes both 2s',
                'Removes the first 2 only',
                'Raises an error',
                'Returns 2',
              ],
              correctAnswer: 1,
              explanation: 'remove() stops after deleting the first match.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Remove "draft" from a list of post statuses',
              difficulty: 'easy',
              concepts: ['remove'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 6.13: POP
        // ---------------------------------------------------------
        {
          id: 'python-list-pop',
          title: 'list.pop()',
          slug: 'list-pop',
          description:
            'Removing and returning an item by index (LIFO stack pop in O(1)).',
          learningObjectives: [
            'Use pop() with no arguments for O(1) stack behavior.',
            'Use pop(index) to remove arbitrary indices in O(n).',
            'Handle IndexError on empty lists.',
          ],
          prerequisites: ['python-removing-elements'],
          conceptSummary:
            'list.pop(i=-1) removes and returns the item at index i (defaults to the last element).',
          detailedExplanation:
            '`pop()` without arguments removes the last element in O(1) time, making Python lists ideal as Last-In-First-Out (LIFO) stacks. `pop(0)` removes the first element, but requires an O(n) shift.',
          syntaxExplanation:
            'stack = [1, 2, 3]\ntop = stack.pop() # top = 3, stack = [1, 2]\nfirst = stack.pop(0) # first = 1, stack = [2]',
          howItWorks: [
            'Retrieves pointer, decrements list length, and frees slot.',
          ],
          examples: [
            {
              title: 'Stack Implementation (LIFO)',
              code:
                'history = []\nhistory.append("page1")\nhistory.append("page2")\nlast_page = history.pop()\nprint(f"Backed out of: {last_page}, Current: {history}")',
              explanation:
                'Simulates browser back button navigation.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Calling pop() on an empty list raising IndexError: pop from empty list.',
              explanation: 'Check if len(list) > 0 before popping.',
            },
          ],
          quickChecks: [
            {
              question:
                'What is the time complexity of list.pop() with no arguments?',
              answer: 'O(1) constant time',
              options: [
                'O(N) linear time',
                'O(1) constant time',
                'O(log N)',
                'O(N^2)',
              ],
              correctAnswer: 1,
              explanation:
                'Popping from the end requires no element shifting.',
            },
          ],
          practiceQuestions: [
            {
              title: 'Simulate a stack with push (append) and pop',
              difficulty: 'easy',
              concepts: ['pop', 'stack'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 6.14: CLEAR
        // ---------------------------------------------------------
        {
          id: 'python-list-clear',
          title: 'list.clear()',
          slug: 'list-clear',
          description:
            'Emptying a list in place without changing its memory identity.',
          learningObjectives: [
            'Remove all elements using list.clear().',
            'Understand in-place clearing vs reassigning list = [].',
            'Maintain shared object references.',
          ],
          prerequisites: ['python-removing-elements'],
          conceptSummary:
            'list.clear() removes all items from the list, resetting its length to 0 in place.',
          detailedExplanation:
            'Writing `lst = []` creates a brand-new empty list and binds the name `lst` to it. Any other variable referencing the original list still sees the old contents. In contrast, `lst.clear()` modifies the existing list in place, visible to all references.',
          syntaxExplanation:
            'data = [1, 2, 3]\nref = data\ndata.clear()\nprint(data) # []\nprint(ref)  # [] (both references reflect the clear)',
          howItWorks: [
            'Decrements refcounts of all contained items and sets size to 0.',
          ],
          examples: [
            {
              title: 'Buffer Reset',
              code:
                'buffer = ["log1", "log2"]\nbuffer.clear()\nprint("Buffer cleared. Length:", len(buffer))',
              explanation: 'Cleans out a buffer for reuse.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Reassigning lst = [] inside a function expecting it to clear the caller list.',
              explanation:
                'Reassignment changes local binding; use lst.clear() to modify caller list.',
            },
          ],
          quickChecks: [
            {
              question:
                'What is the difference between lst.clear() and lst = []?',
              answer:
                'clear() empties the existing object in place; [] creates a new object',
              options: [
                'They are identical in all ways',
                'clear() empties the existing object in place; [] creates a new object',
                'clear() is deprecated',
                '[] is slower by 10x',
              ],
              correctAnswer: 1,
              explanation:
                'clear() mutates in place, preserving object identity.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Clear a list in place and verify id() remains identical',
              difficulty: 'easy',
              concepts: ['clear', 'id'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 6.15: OTHER LIST METHODS
        // ---------------------------------------------------------
        {
          id: 'python-list-methods',
          title: 'Other List Methods',
          slug: 'list-methods',
          description:
            'index(), count(), sort(), reverse(), and copy().',
          learningObjectives: [
            'Sort lists in place using sort(key, reverse).',
            'Reverse lists in place with reverse().',
            'Find positions and frequencies with index() and count().',
          ],
          prerequisites: ['python-what-is-a-list'],
          conceptSummary:
            'List methods include sort(), reverse(), index(), count(), and copy().',
          detailedExplanation:
            '`.sort()` uses the Timsort algorithm (O(N log N)) in place. `.reverse()` reverses in place. `.index(x)` returns the first index of x. `.count(x)` counts total occurrences. `.copy()` returns a shallow copy.',
          syntaxExplanation:
            'nums = [5, 2, 8, 1, 9]\nnums.sort()            # [1, 2, 5, 8, 9] (in place)\nnums.reverse()         # [9, 8, 5, 2, 1]\nprint(nums.count(5))   # 1\nprint(nums.index(8))   # 1',
          howItWorks: [
            'Timsort combines merge sort and insertion sort optimized for real-world ordered data.',
          ],
          examples: [
            {
              title: 'Custom Sorting with key=lambda',
              code:
                'words = ["banana", "pie", "apple"]\nwords.sort(key=len) # Sort by word length\nprint(words) # [\'pie\', \'apple\', \'banana\']',
              explanation: 'Sorts strings by length using key function.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Writing sorted_list = nums.sort() and wondering why sorted_list is None.',
              explanation:
                'sort() sorts in place and returns None; use sorted(nums) to return a new list.',
            },
          ],
          quickChecks: [
            {
              question: 'What does nums.sort() return in Python?',
              answer: 'None',
              options: [
                'A new sorted list',
                'None',
                'The length of the list',
                'Boolean True',
              ],
              correctAnswer: 1,
              explanation: 'In-place sorting returns None.',
            },
          ],
          practiceQuestions: [
            {
              title: 'Sort a list of strings by their length',
              difficulty: 'easy',
              concepts: ['sort', 'key'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 6.16: TRAVERSING LISTS
        // ---------------------------------------------------------
        {
          id: 'python-traversing-lists',
          title: 'Traversing Lists',
          slug: 'traversing-lists',
          description:
            'Iterating with for item in list, enumerate(list), and zip().',
          learningObjectives: [
            'Iterate through list items with standard for loops.',
            'Get both index and value using enumerate().',
            'Iterate parallel lists with zip().',
          ],
          prerequisites: ['python-what-is-a-list', 'python-for-loop'],
          conceptSummary:
            'Use for item in list for values, enumerate() for index+value, and zip() for paired lists.',
          detailedExplanation:
            'Idiomatic Python iterates directly over elements (`for item in items`). If you need the index, avoid `range(len(items))` in favor of `enumerate(items)`. To traverse two lists in lockstep, use `zip(list1, list2)`.',
          syntaxExplanation:
            'fruits = ["apple", "banana", "cherry"]\nfor idx, fruit in enumerate(fruits, start=1):\n    print(f"{idx}. {fruit}")',
          howItWorks: [
            'enumerate creates a generator yielding (index, value) tuples.',
          ],
          examples: [
            {
              title: 'Parallel Iteration with zip()',
              code:
                'names = ["Alice", "Bob"]\nscores = [95, 88]\nfor name, score in zip(names, scores):\n    print(f"{name}: {score}")',
              explanation: 'Pairs elements from both lists cleanly.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Using for i in range(len(items)): print(items[i]).',
              explanation:
                'Unidiomatic in Python; write for item in items: or use enumerate().',
            },
          ],
          quickChecks: [
            {
              question:
                'What built-in function yields both index and value when iterating over a list?',
              answer: 'enumerate()',
              options: ['index()', 'enumerate()', 'zip()', 'count()'],
              correctAnswer: 1,
              explanation: 'enumerate(iterable) yields (index, item) pairs.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Print numbered list of tasks starting from 1 using enumerate',
              difficulty: 'easy',
              concepts: ['enumerate'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 6.17: NESTED LISTS
        // ---------------------------------------------------------
        {
          id: 'python-nested-lists',
          title: 'Nested Lists (Matrices)',
          slug: 'nested-lists',
          description:
            '2D arrays, matrix indexing [row][col], and nested iterations.',
          learningObjectives: [
            'Represent 2D grids and matrices as lists of lists.',
            'Access cells using matrix[row][col].',
            'Iterate rows and columns with nested loops.',
          ],
          prerequisites: [
            'python-list-indexing',
            'python-nested-loops',
          ],
          conceptSummary:
            'A nested list is a list containing other lists, used to model 2D grids and matrices.',
          detailedExplanation:
            'Multi-dimensional data is represented by nesting lists inside a parent list. Accessing an element uses two bracket lookups: `grid[row][col]`, where `grid[row]` returns the inner list and `[col]` indexes into it.',
          syntaxExplanation:
            'matrix = [\n    [1, 2, 3],\n    [4, 5, 6],\n    [7, 8, 9]\n]\nprint(matrix[1][2]) # Row 1, Col 2 -> 6',
          howItWorks: [
            'Parent list holds pointers to inner list objects in memory.',
          ],
          examples: [
            {
              title: 'Flattening a 2D Matrix',
              code:
                'grid = [[1, 2], [3, 4]]\nflat = [num for row in grid for num in row]\nprint("Flattened:", flat) # [1, 2, 3, 4]',
              explanation:
                'Flattens 2D grid into a 1D list using comprehension.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Creating a matrix with [[0]*3]*3 causing all rows to share identical memory.',
              explanation:
                'Modifying row 0 modifies all rows! Use [[0]*3 for _ in range(3)].',
            },
          ],
          quickChecks: [
            {
              question:
                'How do you access row 2, column 0 in a 2D matrix?',
              answer: 'matrix[2][0]',
              options: [
                'matrix[2, 0]',
                'matrix[2][0]',
                'matrix(2, 0)',
                'matrix[0][2]',
              ],
              correctAnswer: 1,
              explanation:
                'In standard Python lists, multi-dimensional indexing uses [row][col].',
            },
          ],
          practiceQuestions: [
            {
              title: 'Sum all elements in a 3x3 matrix',
              difficulty: 'easy',
              concepts: ['nested lists', 'matrix'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 6.18: LIST UNPACKING
        // ---------------------------------------------------------
        {
          id: 'python-list-unpacking',
          title: 'List Unpacking and Star (*)',
          slug: 'list-unpacking',
          description:
            'Destructuring lists, multiple assignments, and extended unpacking with *rest.',
          learningObjectives: [
            'Unpack elements into individual variables: a, b = [1, 2].',
            'Use extended unpacking (*rest) to capture remaining elements.',
            'Ignore unused elements with *_.',
          ],
          prerequisites: ['python-what-is-a-list'],
          conceptSummary:
            'Unpacking extracts items from a list directly into variables: a, *rest, b = [1, 2, 3, 4].',
          detailedExplanation:
            'Python supports sequence destructuring. The number of variables on the left must match the list length, unless the star operator `*` is used to capture variable numbers of elements into a sub-list.',
          syntaxExplanation:
            'a, b, c = [10, 20, 30]\nfirst, *middle, last = [1, 2, 3, 4, 5]\nprint(first)  # 1\nprint(middle) # [2, 3, 4]\nprint(last)   # 5',
          howItWorks: ['CPython executes UNPACK_EX bytecode instruction.'],
          examples: [
            {
              title: 'Parsing Command Output',
              code:
                'command, *args = "copy file1.txt file2.txt".split()\nprint("Command:", command)\nprint("Arguments:", args)',
              explanation:
                'Separates command verb from variable argument list.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Using more than one * starred expression in a single assignment target.',
              explanation:
                'Only one starred variable is permitted in an unpacking assignment.',
            },
          ],
          quickChecks: [
            {
              question:
                'What will rest contain in first, *rest = [1, 2, 3]?',
              answer: '[2, 3]',
              options: ['[1, 2]', '[2, 3]', '2', '3'],
              correctAnswer: 1,
              explanation: 'rest captures all remaining elements.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Unpack the first, second, and remaining items from a list',
              difficulty: 'easy',
              concepts: ['unpacking', '* operator'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 6.19: LIST COMPREHENSIONS
        // ---------------------------------------------------------
        {
          id: 'python-list-comprehensions',
          title: 'List Comprehensions',
          slug: 'list-comprehensions',
          description:
            'Concise syntax: [expr for item in iterable if condition].',
          learningObjectives: [
            'Write idiomatic list comprehensions.',
            'Filter items with trailing if clauses.',
            'Replace verbose map/filter patterns with comprehensions.',
          ],
          prerequisites: ['python-what-is-a-list', 'python-for-loop'],
          conceptSummary:
            'List comprehensions provide a compact way to create lists: [expr for x in iterable if cond].',
          detailedExplanation:
            'List comprehensions replace multi-line loop-and-append boilerplate with a single readable line. They are compiled into specialized C-level loop bytecode, executing faster than standard `for` loops with `.append()`.',
          syntaxExplanation:
            '# [expression for item in iterable if condition]\nsquares = [x**2 for x in range(6)]          # [0, 1, 4, 9, 16, 25]\nevens = [x for x in range(10) if x % 2 == 0] # [0, 2, 4, 6, 8]',
          howItWorks: [
            'CPython executes an internal frame with pre-allocated list appending instructions.',
          ],
          examples: [
            {
              title: 'Cleaning Strings Comprehension',
              code:
                'words = ["  apple ", " BANANA", " cherry  "]\nclean = [w.strip().lower() for w in words]\nprint(clean)',
              explanation: 'Transforms and normalizes strings in one line.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Writing overly complex nested comprehensions that harm readability.',
              explanation:
                'If a comprehension spans more than 2 lines or has multiple nested loops, use a regular loop.',
            },
          ],
          quickChecks: [
            {
              question: 'What does [x * 2 for x in [1, 2, 3]] produce?',
              answer: '[2, 4, 6]',
              options: ['[1, 2, 3]', '[2, 4, 6]', '[1, 4, 9]', 'TypeError'],
              correctAnswer: 1,
              explanation: 'Doubles each number in the list.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Generate a list of squares of even numbers from 1 to 20',
              difficulty: 'easy',
              concepts: ['list comprehension'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },
      ],
    },

    // =============================================================
    // MODULE 7: TUPLES
    // =============================================================
    {
      id: 'python-mod-tuples',
      title: 'Tuples',
      order: 7,
      description:
        'Immutable sequences, single-element tuples, packing, unpacking, and tuple vs list comparisons.',
      topics: [
        // ---------------------------------------------------------
        // TOPIC 7.1: WHAT IS A TUPLE?
        // ---------------------------------------------------------
        {
          id: 'python-what-is-a-tuple',
          title: 'What is a Tuple?',
          slug: 'what-is-a-tuple',
          description: 'Tuples as ordered, immutable collections.',
          learningObjectives: [
            'Define tuple as an immutable sequence.',
            'Recognize parentheses syntax ().',
            'Understand performance and memory benefits over lists.',
          ],
          prerequisites: ['python-data-types'],
          conceptSummary:
            'A tuple is an ordered, immutable collection enclosed in parentheses (val1, val2).',
          detailedExplanation:
            'Tuples behave like immutable lists. Once instantiated, elements cannot be added, removed, or replaced. Because of their immutability, tuples use less memory than lists and can be used as dictionary keys and set elements.',
          syntaxExplanation:
            'point = (10, 20)\nprint(type(point))\nprint(point[0])',
          howItWorks: [
            'CPython allocates fixed-size PyTupleObject blocks without extra over-allocation overhead.',
          ],
          examples: [
            {
              title: 'Geographic Coordinates Tuple',
              code:
                'coordinates = (37.7749, -122.4194) # Lat, Long\nprint(f"Latitude: {coordinates[0]}, Longitude: {coordinates[1]}")',
              explanation: 'Coordinates naturally model immutable pairs.',
            },
          ],
          commonMistakes: [
            {
              mistake: 'Trying to modify a tuple: point[0] = 15.',
              explanation:
                'Raises TypeError: \'tuple\' object does not support item assignment.',
            },
          ],
          quickChecks: [
            {
              question: 'Can a tuple be modified after creation?',
              answer: 'No, tuples are immutable',
              options: [
                'Yes',
                'No, tuples are immutable',
                'Only if numbers',
                'Only with append()',
              ],
              correctAnswer: 1,
              explanation: 'Tuples cannot be mutated.',
            },
          ],
          practiceQuestions: [
            {
              title: 'Create a tuple of RGB color values',
              difficulty: 'easy',
              concepts: ['tuples'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 7.2: CREATING TUPLES
        // ---------------------------------------------------------
        {
          id: 'python-creating-tuples',
          title: 'Creating Tuples',
          slug: 'creating-tuples',
          description:
            'Parentheses, comma rules, single-element tuples (x,), and tuple() constructor.',
          learningObjectives: [
            'Create tuples with or without parentheses.',
            'Master single-element tuple syntax (val,).',
            'Convert iterables to tuples via tuple().',
          ],
          prerequisites: ['python-what-is-a-tuple'],
          conceptSummary:
            'It is the COMMA that defines a tuple in Python, not just parentheses. A single-element tuple is (42,).',
          detailedExplanation:
            'Writing `(42)` evaluates to the integer 42 in parentheses. To create a single-element tuple, a trailing comma is required: `(42,)` or `42,`. Empty tuples are `()`. Any iterable can be converted via `tuple(iterable)`.',
          syntaxExplanation:
            'empty = ()\nsingle = (42,)       # Tuple!\nnot_a_tuple = (42)   # Integer!\nfrom_list = tuple([1, 2, 3])',
          howItWorks: [
            'The parser requires a comma token to construct a tuple node.',
          ],
          examples: [
            {
              title: 'Inspecting Single Element Types',
              code:
                'a = ("test")\nb = ("test",)\nprint(type(a)) # <class \'str\'>\nprint(type(b)) # <class \'tuple\'>',
              explanation: 'Proves that the comma creates the tuple.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Writing t = (1) and wondering why t is an int instead of a tuple.',
              explanation:
                'Always include a trailing comma for single-element tuples: (1,).',
            },
          ],
          quickChecks: [
            {
              question: 'What is the type of (100)?',
              answer: 'int',
              options: ['tuple', 'int', 'list', 'SyntaxError'],
              correctAnswer: 1,
              explanation:
                '(100) is just the integer 100 grouped in parentheses; use (100,) for a tuple.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Create a single-element tuple containing the string "Python"',
              difficulty: 'easy',
              concepts: ['single-element tuple'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 7.3: TUPLE INDEXING
        // ---------------------------------------------------------
        {
          id: 'python-tuple-indexing',
          title: 'Tuple Indexing',
          slug: 'tuple-indexing',
          description:
            'Accessing elements by positive and negative index.',
          learningObjectives: [
            'Access tuple items in O(1) time.',
            'Use negative indices on tuples.',
            'Handle IndexError.',
          ],
          prerequisites: ['python-creating-tuples'],
          conceptSummary:
            't[i] accesses element at index i (0-based or negative for reverse).',
          detailedExplanation:
            'Tuple indexing works exactly like list and string indexing. Elements are accessed using square brackets `t[index]`.',
          syntaxExplanation:
            'user = ("Bob", 30, "Admin")\nprint(user[0])  # "Bob"\nprint(user[-1]) # "Admin"',
          howItWorks: [
            'Direct pointer offset lookup in constant O(1) time.',
          ],
          examples: [
            {
              title: 'Date Tuple Access',
              code:
                'date = (2026, 10, 3)\nyear, month, day = date[0], date[1], date[2]\nprint(f"{year}-{month:02d}-{day:02d}")',
              explanation: 'Reads year, month, day by positional index.',
            },
          ],
          commonMistakes: [
            {
              mistake: 'Attempting to index past the end of the tuple.',
              explanation: 'Raises IndexError just like lists.',
            },
          ],
          quickChecks: [
            {
              question: 'What is (10, 20, 30)[-1]?',
              answer: '30',
              options: ['10', '20', '30', 'IndexError'],
              correctAnswer: 2,
              explanation: '-1 references the last element.',
            },
          ],
          practiceQuestions: [
            {
              title: 'Access the second item of a tuple',
              difficulty: 'easy',
              concepts: ['indexing'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 7.4: TUPLE SLICING
        // ---------------------------------------------------------
        {
          id: 'python-tuple-slicing',
          title: 'Tuple Slicing',
          slug: 'tuple-slicing',
          description:
            'Slicing tuples to produce new sub-tuples with [start:stop:step].',
          learningObjectives: [
            'Extract sub-tuples with slicing.',
            'Reverse tuples with [::-1].',
            'Understand that slicing returns a new tuple.',
          ],
          prerequisites: ['python-tuple-indexing'],
          conceptSummary:
            't[start:stop:step] returns a new sub-tuple without modifying the original.',
          detailedExplanation:
            'Slicing a tuple produces a newly allocated tuple containing the requested slice. `t[1:3]` extracts indices 1 and 2.',
          syntaxExplanation:
            'letters = ("a", "b", "c", "d", "e")\nsub = letters[1:4] # ("b", "c", "d")\nrev = letters[::-1] # ("e", "d", "c", "b", "a")',
          howItWorks: [
            'Allocates a new PyTupleObject copying pointers.',
          ],
          examples: [
            {
              title: 'Trimming Edge Metadata',
              code:
                'record = ("ID123", "Alice", "Active", "Timestamp")\npayload = record[1:3]\nprint("Payload:", payload)',
              explanation: 'Extracts core data fields via slicing.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Expecting slice assignment on tuples: t[0:2] = (1, 2).',
              explanation:
                'Tuples are immutable; slices cannot be assigned to.',
            },
          ],
          quickChecks: [
            {
              question: 'What data type does slicing a tuple return?',
              answer: 'tuple',
              options: ['list', 'tuple', 'generator', 'str'],
              correctAnswer: 1,
              explanation: 'Slicing a tuple returns a new tuple.',
            },
          ],
          practiceQuestions: [
            {
              title: 'Extract the first two elements of a tuple',
              difficulty: 'easy',
              concepts: ['slicing'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 7.5: TUPLE METHODS
        // ---------------------------------------------------------
        {
          id: 'python-tuple-methods',
          title: 'Tuple Methods (count, index)',
          slug: 'tuple-methods',
          description:
            'The only two built-in methods of tuples: count() and index().',
          learningObjectives: [
            'Use count(x) to tally occurrences.',
            'Use index(x) to find first position.',
            'Understand why tuples have so few methods.',
          ],
          prerequisites: ['python-what-is-a-tuple'],
          conceptSummary:
            'Because tuples are immutable, they only have two methods: count() and index().',
          detailedExplanation:
            'Unlike lists which have append, remove, sort, and pop, tuples only possess non-mutating query methods: `count(x)` returns frequency of x; `index(x)` returns the first index of x (or raises ValueError).',
          syntaxExplanation:
            't = (1, 2, 3, 2, 2, 4)\nprint(t.count(2)) # 3\nprint(t.index(3)) # 2',
          howItWorks: ['Linear traversal through contiguous array.'],
          examples: [
            {
              title: 'Inspecting Vote Counts in Tuple',
              code:
                'votes = ("yes", "no", "yes", "yes")\nprint("Yes votes:", votes.count("yes"))\nprint("First no at index:", votes.index("no"))',
              explanation: 'Tallies votes and locates first dissent.',
            },
          ],
          commonMistakes: [
            {
              mistake: 'Calling t.sort() or t.append() on a tuple.',
              explanation:
                'Tuples have no mutating methods; use sorted(t) or convert to list.',
            },
          ],
          quickChecks: [
            {
              question: 'How many methods do tuples have in Python?',
              answer: '2: count() and index()',
              options: ['None', '2: count() and index()', 'Same as lists', '10+'],
              correctAnswer: 1,
              explanation: 'count() and index() are the only methods.',
            },
          ],
          practiceQuestions: [
            {
              title: 'Count occurrences of number 7 in a tuple',
              difficulty: 'easy',
              concepts: ['count'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 7.6: TUPLE UNPACKING
        // ---------------------------------------------------------
        {
          id: 'python-tuple-unpacking',
          title: 'Tuple Packing and Unpacking',
          slug: 'tuple-unpacking',
          description:
            'Packing values into tuples and unpacking into variables; returning multiple values from functions.',
          learningObjectives: [
            'Pack values automatically without parentheses.',
            'Unpack tuples into multiple variables.',
            'Return multiple values from functions via tuple packing.',
          ],
          prerequisites: ['python-creating-tuples'],
          conceptSummary:
            'Tuple packing bundles multiple values into a tuple; unpacking assigns them to individual variables.',
          detailedExplanation:
            'When multiple values are comma-separated on the right side of an assignment, Python automatically packs them into a tuple. When multiple variables are on the left side, Python unpacks the tuple into them. This enables returning multiple values from functions.',
          syntaxExplanation:
            '# Packing:\npoint = 10, 20 # point is (10, 20)\n\n# Unpacking:\nx, y = point\n\n# Multiple return values:\ndef min_max(nums):\n    return min(nums), max(nums)\n\nlow, high = min_max([4, 1, 9, 7])',
          howItWorks: ['Bytecode opcodes BUILD_TUPLE and UNPACK_SEQUENCE.'],
          examples: [
            {
              title: 'Multiple Return Values Pattern',
              code:
                'def divide(dividend, divisor):\n    return dividend // divisor, dividend % divisor\n\nquotient, remainder = divide(17, 5)\nprint(f"Quotient: {quotient}, Remainder: {remainder}")',
              explanation: 'Returns both quotient and remainder cleanly.',
            },
          ],
          commonMistakes: [
            {
              mistake: 'Variable count mismatch on unpacking: x, y = (1, 2, 3).',
              explanation:
                'Raises ValueError: too many values to unpack (expected 2, got 3).',
            },
          ],
          quickChecks: [
            {
              question:
                'What does a function returning return x, y actually return?',
              answer: 'A tuple (x, y)',
              options: [
                'A list [x, y]',
                'A tuple (x, y)',
                'Two separate values',
                'Only x',
              ],
              correctAnswer: 1,
              explanation:
                'Comma-separated return values are packed into a tuple.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Write a function returning quotient and remainder as a tuple',
              difficulty: 'easy',
              concepts: ['tuple unpacking'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 7.7: NESTED TUPLES
        // ---------------------------------------------------------
        {
          id: 'python-nested-tuples',
          title: 'Nested Tuples',
          slug: 'nested-tuples',
          description: 'Tuples containing tuples or other collections.',
          learningObjectives: [
            'Create nested multi-dimensional tuples.',
            'Access nested items with chained brackets t[i][j].',
            'Understand immutability when nested objects are mutable.',
          ],
          prerequisites: ['python-tuple-indexing'],
          conceptSummary:
            'Tuples can contain other tuples or collections to model structured hierarchical records.',
          detailedExplanation:
            'Nested tuples model structured records like database rows. While the tuple itself cannot have elements added or removed, if it contains a mutable object (like a list), the inner list can still be modified.',
          syntaxExplanation:
            'person = ("Alice", (1995, 8, 12), ["reading", "hiking"])\n# The inner list is mutable:\nperson[2].append("gaming")\nprint(person)',
          howItWorks: [
            'The tuple holds references to objects; the references cannot change, but referenced objects might mutate.',
          ],
          examples: [
            {
              title: 'Accessing Nested Tuple Data',
              code:
                'employee = (101, "Diana", ("Tech", "Engineering"))\nprint("Department:", employee[2][0])',
              explanation: 'Chained bracket indexing into nested tuple.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Assuming a tuple containing a list is hashable as a dictionary key.',
              explanation:
                'If any contained item is mutable, the tuple is unhashable and cannot be a dict key.',
            },
          ],
          quickChecks: [
            {
              question:
                'Can you append an item to a list that is inside a tuple?',
              answer: 'Yes, because the list itself is mutable',
              options: [
                'No, the tuple freezes everything',
                'Yes, because the list itself is mutable',
                'Only with copy()',
                'Raises TypeError',
              ],
              correctAnswer: 1,
              explanation:
                'The tuple reference remains unchanged even when the list mutates.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Create a nested tuple representing a person with birthday tuple',
              difficulty: 'easy',
              concepts: ['nested tuples'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 7.8: TUPLE IMMUTABILITY
        // ---------------------------------------------------------
        {
          id: 'python-tuple-immutability',
          title: 'Tuple Immutability and Hashability',
          slug: 'tuple-immutability',
          description:
            'Why tuples cannot change, hashability, and using tuples as dictionary keys.',
          learningObjectives: [
            'Explain tuple immutability benefits.',
            'Use tuples as compound dictionary keys (e.g. coordinates (x, y)).',
            'Understand hash() and hashability requirements.',
          ],
          prerequisites: ['python-what-is-a-tuple'],
          conceptSummary:
            'Tuples are immutable and hashable (if all items are hashable), allowing them to serve as dictionary keys.',
          detailedExplanation:
            'Because tuples cannot change, their hash code remains constant throughout program execution. This allows using coordinate pairs `(x, y)` or composite keys `(first_name, last_name)` as dictionary keys, which is impossible with mutable lists.',
          syntaxExplanation:
            '# Tuple as a dictionary key:\nmatrix_map = {}\nmatrix_map[(0, 0)] = "Origin"\nmatrix_map[(1, 2)] = "Target"\nprint(matrix_map[(0, 0)])',
          howItWorks: [
            'hash(tuple) combines hashes of its elements; raises TypeError if any element is unhashable.',
          ],
          examples: [
            {
              title: 'Distance Cache with Tuple Key',
              code:
                'cache = {}\ndef get_distance(p1, p2):\n    key = (p1, p2)\n    if key not in cache:\n        cache[key] = ((p1[0]-p2[0])**2 + (p1[1]-p2[1])**2)**0.5\n    return cache[key]\n\nprint("Dist:", get_distance((0,0), (3,4)))',
              explanation: 'Uses tuple pairs as cache keys.',
            },
          ],
          commonMistakes: [
            {
              mistake: 'Using a list as a dictionary key: { [1, 2]: "val" }.',
              explanation:
                'Raises TypeError: unhashable type: \'list\'. Use tuple (1, 2) instead.',
            },
          ],
          quickChecks: [
            {
              question:
                'Can a tuple containing a list be used as a dictionary key?',
              answer: 'No, because the contained list is unhashable',
              options: [
                'Yes, all tuples are keys',
                'No, because the contained list is unhashable',
                'Only in Python 3',
                'Only if the list is empty',
              ],
              correctAnswer: 1,
              explanation:
                'All elements within the tuple must be hashable.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Create a dictionary using coordinate tuples (x, y) as keys',
              difficulty: 'easy',
              concepts: ['hashability', 'dictionary keys'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 7.9: TUPLE VS LIST
        // ---------------------------------------------------------
        {
          id: 'python-tuple-vs-list',
          title: 'Tuple vs List: When to Use Which',
          slug: 'tuple-vs-list',
          description:
            'Comparing performance, memory consumption, semantic intent, and mutability.',
          learningObjectives: [
            'Compare tuples vs lists across mutability, performance, and semantics.',
            'Use lists for homogeneous collections that grow/shrink.',
            'Use tuples for heterogeneous records and fixed constants.',
          ],
          prerequisites: ['python-what-is-a-tuple', 'python-what-is-a-list'],
          conceptSummary:
            'Use lists for collections of similar items that change; use tuples for heterogeneous fixed records.',
          detailedExplanation:
            'Tuples are faster to construct and use less memory than lists. Semantically, lists represent homogeneous data collections (e.g. list of user names), while tuples represent heterogeneous structured records (e.g. (id, name, email)).',
          syntaxExplanation:
            'import sys\nprint("List size (empty):", sys.getsizeof([]))\nprint("Tuple size (empty):", sys.getsizeof(())) # Smaller!',
          howItWorks: [
            'CPython reuses small deallocated tuple memory structures (free list optimization).',
          ],
          examples: [
            {
              title: 'Benchmarking Construction Speed',
              code:
                'import timeit\nlist_time = timeit.timeit("[1, 2, 3, 4, 5]", number=1000000)\ntuple_time = timeit.timeit("(1, 2, 3, 4, 5)", number=1000000)\nprint(f"List: {list_time:.4f}s, Tuple: {tuple_time:.4f}s")',
              explanation: 'Shows tuples construct faster than lists.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Using lists for fixed constants that should never change.',
              explanation:
                'Tuples communicate intent that data must remain invariant.',
            },
          ],
          quickChecks: [
            {
              question:
                'Which data structure consumes less memory and constructs faster?',
              answer: 'tuple',
              options: ['list', 'tuple', 'They are identical', 'dict'],
              correctAnswer: 1,
              explanation: 'Tuples are lighter and more memory efficient.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Compare memory size of list vs tuple using sys.getsizeof',
              difficulty: 'easy',
              concepts: ['sys.getsizeof', 'tuple vs list'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },
      ],
    },

    // =============================================================
    // MODULE 8: SETS
    // =============================================================
    {
      id: 'python-mod-sets',
      title: 'Sets',
      order: 8,
      description:
        'Unordered collections of unique elements, set algebra (union, intersection), and frozensets.',
      topics: [
        // ---------------------------------------------------------
        // TOPIC 8.1: WHAT IS A SET?
        // ---------------------------------------------------------
        {
          id: 'python-what-is-a-set',
          title: 'What is a Set?',
          slug: 'what-is-a-set',
          description:
            'Sets as unordered collections of unique, hashable elements.',
          learningObjectives: [
            'Define sets in Python.',
            'Understand that sets automatically eliminate duplicate items.',
            'Recognize that sets are unordered and cannot be indexed.',
          ],
          prerequisites: ['python-data-types'],
          conceptSummary:
            'A set is an unordered, mutable collection of unique, hashable elements enclosed in curly braces {}.',
          detailedExplanation:
            'Sets model mathematical sets. They cannot contain duplicates: adding an existing item has no effect. Because elements are stored in a hash table without a fixed index order, sets do not support indexing or slicing (`s[0]` is a TypeError).',
          syntaxExplanation:
            'nums = {1, 2, 2, 3, 4, 4}\nprint(nums) # {1, 2, 3, 4} (Duplicates removed!)\n# nums[0] -> TypeError: \'set\' object is not subscriptable',
          howItWorks: [
            'Implemented as hash tables with dummy keys and null values for O(1) average lookup.',
          ],
          examples: [
            {
              title: 'Deduplicating a List with Set',
              code:
                'raw_ids = [101, 102, 101, 105, 102]\nunique_ids = list(set(raw_ids))\nprint("Deduplicated:", unique_ids)',
              explanation: 'Instantly removes all duplicate IDs.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Creating an empty set with {} which creates an empty dict instead.',
              explanation:
                'To create an empty set, you must call set().',
            },
          ],
          quickChecks: [
            {
              question: 'What does {1, 2, 2, 3} evaluate to?',
              answer: '{1, 2, 3}',
              options: ['{1, 2, 2, 3}', '{1, 2, 3}', '[1, 2, 3]', 'TypeError'],
              correctAnswer: 1,
              explanation:
                'Sets enforce uniqueness and discard duplicates.',
            },
          ],
          practiceQuestions: [
            {
              title: 'Deduplicate a list of numbers using set()',
              difficulty: 'easy',
              concepts: ['set', 'deduplication'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 8.2: CREATING SETS
        // ---------------------------------------------------------
        {
          id: 'python-creating-sets',
          title: 'Creating Sets',
          slug: 'creating-sets',
          description:
            'Set literals {a, b}, empty set with set(), and set comprehension.',
          learningObjectives: [
            'Create sets with curly braces {}.',
            'Use set() to instantiate empty sets.',
            'Construct sets from strings and lists.',
          ],
          prerequisites: ['python-what-is-a-set'],
          conceptSummary:
            'Use {1, 2, 3} for set literals and set() for an empty set (since {} is an empty dict).',
          detailedExplanation:
            'Because curly braces were already used for dictionaries, `{}` creates an empty dictionary. An empty set must be created with `set()`. You can pass any iterable to `set(iterable)` to convert it.',
          syntaxExplanation:
            'empty_set = set() # Empty set\nempty_dict = {}    # Empty dictionary!\nchar_set = set("mississippi") # {\'m\', \'i\', \'s\', \'p\'}',
          howItWorks: ['Calls PySet_New and populates keys via PySet_Add.'],
          examples: [
            {
              title: 'Set Comprehension',
              code:
                'squares = {x**2 for x in [1, 2, 2, 3, 3, 4]}\nprint(squares) # {1, 4, 9, 16}',
              explanation: 'Creates unique squares using set comprehension.',
            },
          ],
          commonMistakes: [
            {
              mistake: 'Using s = {} and expecting a set.',
              explanation: 's = {} is a dictionary; s = set() is a set.',
            },
          ],
          quickChecks: [
            {
              question: 'What is the type of {} in Python?',
              answer: 'dict (dictionary)',
              options: ['set', 'dict (dictionary)', 'tuple', 'None'],
              correctAnswer: 1,
              explanation: '{} creates an empty dictionary.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Create a set containing the unique characters in "banana"',
              difficulty: 'easy',
              concepts: ['set constructor'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 8.3: ADDING ELEMENTS
        // ---------------------------------------------------------
        {
          id: 'python-adding-elements-set',
          title: 'Adding Elements to Sets',
          slug: 'adding-elements-to-sets',
          description: 'add() for single elements and update() for batches.',
          learningObjectives: [
            'Add a single item with set.add(x).',
            'Add multiple items from an iterable with set.update().',
            'Understand idempotent addition.',
          ],
          prerequisites: ['python-creating-sets'],
          conceptSummary:
            'add(x) adds a single item; update(iterable) adds multiple items from an iterable.',
          detailedExplanation:
            '`s.add(item)` inserts a single item. If the item already exists, the set remains unchanged without error. `s.update([item1, item2])` unpacks and adds all items from one or more iterables.',
          syntaxExplanation:
            'skills = {"Python", "SQL"}\nskills.add("Docker")\nskills.update(["FastAPI", "Git", "SQL"])\nprint(skills)',
          howItWorks: [
            'Calculates hash code and writes into the next available hash bucket.',
          ],
          examples: [
            {
              title: 'Tracking Unique Visitors',
              code:
                'visitors = set()\nvisitors.add("192.168.1.1")\nvisitors.add("192.168.1.2")\nvisitors.add("192.168.1.1") # Duplicate ignored\nprint("Total unique visitors:", len(visitors))',
              explanation: 'Counts unique IP addresses.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Passing a list directly to add(): s.add([1, 2]) raises TypeError: unhashable type: \'list\'.',
              explanation:
                'Sets can only contain hashable objects; use update() or add tuples.',
            },
          ],
          quickChecks: [
            {
              question:
                'Which method adds multiple elements from a list into a set?',
              answer: 'update()',
              options: ['add()', 'update()', 'append()', 'extend()'],
              correctAnswer: 1,
              explanation:
                'update() takes an iterable and adds all its items.',
            },
          ],
          practiceQuestions: [
            {
              title: 'Add 3 items to a set using update()',
              difficulty: 'easy',
              concepts: ['update', 'add'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 8.4: REMOVING ELEMENTS
        // ---------------------------------------------------------
        {
          id: 'python-removing-elements-set',
          title: 'Removing Elements from Sets',
          slug: 'removing-elements-from-sets',
          description: 'remove(), discard(), pop(), and clear() differences.',
          learningObjectives: [
            'Differentiate remove() (raises KeyError) from discard() (silent).',
            'Remove and return an arbitrary element with pop().',
            'Wipe sets with clear().',
          ],
          prerequisites: ['python-adding-elements-set'],
          conceptSummary:
            'remove(x) raises KeyError if x is missing; discard(x) ignores missing elements safely.',
          detailedExplanation:
            'If you are unsure whether an item is present, use `discard(x)` to avoid KeyError exceptions. `pop()` on a set removes and returns an arbitrary element (since sets are unordered). `clear()` removes all elements.',
          syntaxExplanation:
            's = {10, 20, 30}\ns.remove(20)  # s is {10, 30}\ns.discard(99) # Safe: does nothing if 99 is absent\nval = s.pop() # Removes arbitrary item',
          howItWorks: ['Sets mark hash table entries as dummy upon removal.'],
          examples: [
            {
              title: 'Safe Discard in Feature Flag System',
              code:
                'active_flags = {"beta", "dark_mode"}\nactive_flags.discard("beta")\nactive_flags.discard("missing_flag") # No error!\nprint(active_flags)',
              explanation: 'Safely removes flags with discard.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Using remove() without checking containment and crashing with KeyError.',
              explanation:
                'Use discard() when absence of the element is acceptable.',
            },
          ],
          quickChecks: [
            {
              question:
                'What does s.discard(99) do if 99 is not in the set?',
              answer: 'Does nothing (no error is raised)',
              options: [
                'Raises KeyError',
                'Does nothing (no error is raised)',
                'Adds 99',
                'Returns False',
              ],
              correctAnswer: 1,
              explanation:
                'discard() fails silently when the item is missing.',
            },
          ],
          practiceQuestions: [
            {
              title: 'Safely discard an element from a set',
              difficulty: 'easy',
              concepts: ['discard'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 8.5: SET METHODS OVERVIEW
        // ---------------------------------------------------------
        {
          id: 'python-set-methods-overview',
          title: 'Set Methods Overview',
          slug: 'set-methods-overview',
          description: 'Mathematical and utility methods of Python sets.',
          learningObjectives: [
            'Inspect set methods for algebra.',
            'Choose between operator syntax (|) and method syntax (union).',
            'Understand in-place vs return-new set operations.',
          ],
          prerequisites: ['python-what-is-a-set'],
          conceptSummary:
            'Sets provide methods (union, intersection, difference) and equivalent operators (|, &, -).',
          detailedExplanation:
            'Operators like `s1 | s2` require both operands to be sets, whereas method equivalents like `s1.union([1, 2])` accept any iterable argument. In-place versions (e.g. `s1.intersection_update(s2)`) mutate s1 directly.',
          syntaxExplanation:
            's1 = {1, 2}\ns2 = {2, 3}\nprint(s1.union(s2))        # {1, 2, 3}\nprint(s1.intersection(s2)) # {2}',
          howItWorks: [
            'Executes hash set algorithms with fast collision resolution.',
          ],
          examples: [
            {
              title: 'Comparing Operators vs Methods',
              code:
                's = {1, 2}\nprint(s | {3})        # Operator requires set\nprint(s.union([3, 4])) # Method accepts list',
              explanation: 'Methods are more flexible with argument types.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Using | with a list operand: {1, 2} | [3, 4] raises TypeError.',
              explanation: 'Operators require sets; use method s.union([3, 4]).',
            },
          ],
          quickChecks: [
            {
              question: 'Can set.union() accept a list as an argument?',
              answer: 'Yes, methods accept any iterable',
              options: [
                'No, sets only',
                'Yes, methods accept any iterable',
                'Only if numbers',
                'Raises TypeError',
              ],
              correctAnswer: 1,
              explanation: 'Set methods accept any iterable.',
            },
          ],
          practiceQuestions: [
            {
              title: 'Call set.union() with a list argument',
              difficulty: 'easy',
              concepts: ['set methods'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 8.6: UNION
        // ---------------------------------------------------------
        {
          id: 'python-set-union',
          title: 'Set Union (|)',
          slug: 'set-union',
          description:
            'Combining all unique elements from two or more sets.',
          learningObjectives: [
            'Compute union using | and union().',
            'Combine multiple sets in one operation.',
            'Understand mathematical union logic.',
          ],
          prerequisites: ['python-set-methods-overview'],
          conceptSummary:
            'The union of sets A and B contains all elements present in A, B, or both (A | B).',
          detailedExplanation:
            'Union merges sets without duplicate entries. `A | B` creates a new set with all unique elements from both.',
          syntaxExplanation:
            'frontend = {"HTML", "CSS", "JS"}\nbackend = {"Python", "SQL", "JS"}\nfullstack = frontend | backend\nprint(fullstack) # {"HTML", "CSS", "JS", "Python", "SQL"}',
          howItWorks: [
            'Allocates set of capacity len(a)+len(b) and inserts items.',
          ],
          examples: [
            {
              title: 'Merging Multiple Skill Sets',
              code:
                's1 = {1, 2}\ns2 = {2, 3}\ns3 = {3, 4}\nall_items = s1 | s2 | s3\nprint(all_items)',
              explanation: 'Chains unions across three sets.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Expecting duplicate items to appear twice in union output.',
              explanation:
                'Sets enforce uniqueness; common items appear only once.',
            },
          ],
          quickChecks: [
            {
              question: 'What is {1, 2} | {2, 3}?',
              answer: '{1, 2, 3}',
              options: ['{2}', '{1, 2, 2, 3}', '{1, 2, 3}', '{1, 3}'],
              correctAnswer: 2,
              explanation:
                'Union combines elements with duplicates removed.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Compute the union of two sets of student names',
              difficulty: 'easy',
              concepts: ['union'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 8.7: INTERSECTION
        // ---------------------------------------------------------
        {
          id: 'python-set-intersection',
          title: 'Set Intersection (&)',
          slug: 'set-intersection',
          description:
            'Finding common elements present in both sets using & and intersection().',
          learningObjectives: [
            'Find common elements using & and intersection().',
            'Identify overlapping interests or shared memberships.',
            'Understand empty intersection (disjoint sets).',
          ],
          prerequisites: ['python-set-methods-overview'],
          conceptSummary:
            'Intersection (A & B) returns a set containing only the elements common to both sets.',
          detailedExplanation:
            'Intersection extracts the overlapping subset of elements that exist in all operand sets simultaneously.',
          syntaxExplanation:
            'a = {1, 2, 3, 4}\nb = {3, 4, 5, 6}\ncommon = a & b # {3, 4}',
          howItWorks: [
            'Iterates over the smaller set and looks up each element in the larger set in O(1) time.',
          ],
          examples: [
            {
              title: 'Finding Common Friends',
              code:
                'alice_friends = {"Bob", "Charlie", "Diana"}\nbob_friends = {"Alice", "Diana", "Frank"}\nmutual = alice_friends & bob_friends\nprint("Mutual friends:", mutual)',
              explanation: 'Finds mutual connections using &.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Using "and" instead of "&" for set intersection.',
              explanation:
                '"and" is boolean logical operator; "&" is the set intersection operator.',
            },
          ],
          quickChecks: [
            {
              question: 'What is {1, 2, 3} & {2, 3, 4}?',
              answer: '{2, 3}',
              options: ['{1, 4}', '{2, 3}', '{1, 2, 3, 4}', '{}'],
              correctAnswer: 1,
              explanation: '2 and 3 are present in both sets.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Find mutual elements between two sets of numbers',
              difficulty: 'easy',
              concepts: ['intersection'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 8.8: DIFFERENCE
        // ---------------------------------------------------------
        {
          id: 'python-set-difference',
          title: 'Set Difference (-)',
          slug: 'set-difference',
          description:
            'Elements present in the first set but NOT in the second set using - and difference().',
          learningObjectives: [
            'Compute set difference with - and difference().',
            'Understand non-commutative behavior (A - B != B - A).',
            'Find missing elements.',
          ],
          prerequisites: ['python-set-methods-overview'],
          conceptSummary:
            'Difference (A - B) returns elements that exist in A but do not exist in B.',
          detailedExplanation:
            'Unlike union and intersection, difference is not symmetric: `A - B` is different from `B - A`. `A - B` subtracts all elements of B from A.',
          syntaxExplanation:
            'all_students = {"Alice", "Bob", "Charlie", "Diana"}\nsubmitted = {"Alice", "Charlie"}\nmissing = all_students - submitted # {"Bob", "Diana"}',
          howItWorks: [
            'Iterates over A and includes items not present in B.',
          ],
          examples: [
            {
              title: 'Finding Incomplete Tasks',
              code:
                'todo = {"task1", "task2", "task3"}\ndone = {"task1"}\npending = todo - done\nprint("Pending:", pending)',
              explanation:
                'Computes unfinished work using set subtraction.',
            },
          ],
          commonMistakes: [
            {
              mistake: 'Assuming A - B is equal to B - A.',
              explanation:
                'Difference is directional; A - B removes B from A.',
            },
          ],
          quickChecks: [
            {
              question: 'What is {1, 2, 3} - {2, 3, 4}?',
              answer: '{1}',
              options: ['{4}', '{1}', '{2, 3}', '{1, 4}'],
              correctAnswer: 1,
              explanation:
                '1 is the only item in the first set not in the second.',
            },
          ],
          practiceQuestions: [
            {
              title: 'Find elements in set A that are not in set B',
              difficulty: 'easy',
              concepts: ['difference'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 8.9: SYMMETRIC DIFFERENCE
        // ---------------------------------------------------------
        {
          id: 'python-set-symmetric-difference',
          title: 'Symmetric Difference (^)',
          slug: 'symmetric-difference',
          description: 'Elements in either set, but NOT in both (A ^ B).',
          learningObjectives: [
            'Compute symmetric difference with ^.',
            'Understand XOR logic applied to sets.',
            'Filter out all overlapping elements.',
          ],
          prerequisites: ['python-set-union', 'python-set-intersection'],
          conceptSummary:
            'Symmetric difference (A ^ B) returns elements in either set, but not in both (Union minus Intersection).',
          detailedExplanation:
            '`A ^ B` yields all elements unique to A plus all elements unique to B. Items present in both sets are discarded.',
          syntaxExplanation:
            'a = {1, 2, 3}\nb = {2, 3, 4}\nprint(a ^ b) # {1, 4}',
          howItWorks: ['(A | B) - (A & B).'],
          examples: [
            {
              title: 'Divergent Skills Comparison',
              code:
                'dev1 = {"Python", "SQL"}\ndev2 = {"Python", "Go"}\nunique_skills = dev1 ^ dev2\nprint("Non-shared skills:", unique_skills) # {"SQL", "Go"}',
              explanation: 'Discovers non-shared skills.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Confusing symmetric difference with difference.',
              explanation:
                'Difference is one-sided; symmetric difference returns unique items from both.',
            },
          ],
          quickChecks: [
            {
              question: 'What is {1, 2} ^ {2, 3}?',
              answer: '{1, 3}',
              options: ['{2}', '{1, 3}', '{1, 2, 3}', '{}'],
              correctAnswer: 1,
              explanation:
                '2 is common to both so it is excluded, leaving 1 and 3.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Find non-shared elements between two sets using ^',
              difficulty: 'easy',
              concepts: ['symmetric difference'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 8.10: SUBSET & SUPERSET
        // ---------------------------------------------------------
        {
          id: 'python-set-subset-superset',
          title: 'Subset and Superset',
          slug: 'subset-superset',
          description:
            'issubset() (<=), issuperset() (>=), and isdisjoint().',
          learningObjectives: [
            'Check subsets with issubset() or <=.',
            'Check supersets with issuperset() or >=.',
            'Test if sets have zero common elements with isdisjoint().',
          ],
          prerequisites: ['python-set-methods-overview'],
          conceptSummary:
            'A is a subset of B if every element of A is in B; B is then a superset of A.',
          detailedExplanation:
            '`A.issubset(B)` returns True if all elements of A exist in B. `A.issuperset(B)` returns True if A contains all elements of B. `A.isdisjoint(B)` returns True if A and B share zero common elements.',
          syntaxExplanation:
            'req_skills = {"Python", "SQL"}\nuser_skills = {"Python", "SQL", "Docker", "AWS"}\nprint(req_skills.issubset(user_skills))   # True\nprint(user_skills.issuperset(req_skills)) # True',
          howItWorks: [
            'Iterates elements of the smaller set checking containment in the larger set.',
          ],
          examples: [
            {
              title: 'Job Candidate Qualification Check',
              code:
                'required = {"python", "git"}\ncandidate = {"python", "git", "linux"}\nif required <= candidate:\n    print("Candidate meets minimum requirements")',
              explanation:
                'Uses <= subset operator to test qualifications.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Using < instead of <= when sets can be equal.',
              explanation:
                '< tests for proper subset (must have strictly fewer elements).',
            },
          ],
          quickChecks: [
            {
              question:
                'What does {1, 2}.issubset({1, 2, 3}) return?',
              answer: 'True',
              options: ['True', 'False', 'None', 'TypeError'],
              correctAnswer: 0,
              explanation:
                'All elements 1 and 2 are present in {1, 2, 3}.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Check if required features set is a subset of supported features',
              difficulty: 'easy',
              concepts: ['issubset'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 8.11: FROZENSETS
        // ---------------------------------------------------------
        {
          id: 'python-frozensets',
          title: 'Frozen Sets (frozenset)',
          slug: 'frozensets',
          description:
            'Immutable sets, hashability, and using sets as dictionary keys.',
          learningObjectives: [
            'Create immutable sets with frozenset().',
            'Use frozenset as dictionary keys and set elements.',
            'Understand that frozensets lack mutating methods.',
          ],
          prerequisites: ['python-what-is-a-set'],
          conceptSummary:
            'frozenset is an immutable, hashable version of set.',
          detailedExplanation:
            'Standard sets are mutable and therefore unhashable. A `frozenset` is completely immutable after creation: it has no add(), remove(), or update() methods. Because it is immutable and has a fixed hash, frozenset can be used as dictionary keys or stored inside other sets.',
          syntaxExplanation:
            'fs = frozenset([1, 2, 3])\n# fs.add(4) -> AttributeError\nlookup = {fs: "Group A"}\nprint(lookup[fs])',
          howItWorks: ['Allocates PyFrozenSetObject with cached hash code.'],
          examples: [
            {
              title: 'Set of Sets Using frozenset',
              code:
                'group1 = frozenset(["A", "B"])\ngroup2 = frozenset(["C", "D"])\nall_groups = {group1, group2} # Valid set of sets!\nprint(all_groups)',
              explanation:
                'Stores sets inside another set by making them frozensets.',
            },
          ],
          commonMistakes: [
            {
              mistake: 'Trying to add items to a frozenset.',
              explanation:
                'frozensets are immutable; create a new frozenset instead.',
            },
          ],
          quickChecks: [
            {
              question:
                'Can a frozenset be used as a key in a Python dictionary?',
              answer: 'Yes, because frozensets are immutable and hashable',
              options: [
                'No, never',
                'Yes, because frozensets are immutable and hashable',
                'Only if empty',
                'Only with strings',
              ],
              correctAnswer: 1,
              explanation: 'frozenset is hashable and can be a dict key.',
            },
          ],
          practiceQuestions: [
            {
              title: 'Create a dictionary with frozenset keys',
              difficulty: 'easy',
              concepts: ['frozenset'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 8.12: SET PERFORMANCE
        // ---------------------------------------------------------
        {
          id: 'python-set-performance',
          title: 'Set Performance and Internals',
          slug: 'set-performance',
          description:
            'Hash tables, O(1) lookups, memory trade-offs, and hash collision handling.',
          learningObjectives: [
            'Understand hash table architecture behind sets.',
            'Appreciate O(1) average lookup vs O(n) in lists.',
            'Recognize the memory footprint of sets.',
          ],
          prerequisites: [
            'python-what-is-a-set',
            'python-membership-operators',
          ],
          conceptSummary:
            'Sets achieve O(1) average time for lookups, insertions, and deletions via hash tables.',
          detailedExplanation:
            'Searching a 1,000,000-item list takes O(n) time (scanning every item). Searching a 1,000,000-item set takes O(1) time (calculating hash and inspecting bucket). The trade-off is higher memory consumption to maintain hash table sparsity.',
          syntaxExplanation:
            'large_set = set(range(1000000))\nprint(999999 in large_set) # Instantaneous O(1) check!',
          howItWorks: [
            'Hash function maps objects to bucket indices; open addressing resolves collisions.',
          ],
          examples: [
            {
              title: 'Benchmarking in Operator: List vs Set',
              code:
                'import timeit\nnums_list = list(range(10000))\nnums_set = set(range(10000))\nlist_time = timeit.timeit("9999 in nums_list", globals=globals(), number=1000)\nset_time = timeit.timeit("9999 in nums_set", globals=globals(), number=1000)\nprint(f"List: {list_time:.6f}s vs Set: {set_time:.6f}s")',
              explanation:
                'Demonstrates set lookup speed superiority.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Using a list for frequent lookup/containment checks in large data loops.',
              explanation: 'Convert to a set for instant O(1) lookups.',
            },
          ],
          quickChecks: [
            {
              question:
                'What is the average time complexity of "x in my_set"?',
              answer: 'O(1) constant time',
              options: [
                'O(N) linear time',
                'O(1) constant time',
                'O(N log N)',
                'O(N^2)',
              ],
              correctAnswer: 1,
              explanation:
                'Hash lookups execute in constant average time.',
            },
          ],
          practiceQuestions: [
            {
              title: 'Benchmark lookup speed in set vs list',
              difficulty: 'easy',
              concepts: ['set performance', 'timeit'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },
      ],
    },

    // =============================================================
    // MODULE 9: DICTIONARIES
    // =============================================================
    {
      id: 'python-mod-dictionaries',
      title: 'Dictionaries',
      order: 9,
      description:
        'Key-value mapping data structure, hash tables, dictionary methods, nesting, and comprehensions.',
      topics: [
        // ---------------------------------------------------------
        // TOPIC 9.1: WHAT IS A DICTIONARY?
        // ---------------------------------------------------------
        {
          id: 'python-what-is-a-dictionary',
          title: 'What is a Dictionary?',
          slug: 'what-is-a-dictionary',
          description:
            'Dictionaries as mutable, associative mapping collections of key-value pairs.',
          learningObjectives: [
            'Define the dict data type.',
            'Understand key-value mapping.',
            'Recognize hash table backed lookups.',
          ],
          prerequisites: ['python-data-types'],
          conceptSummary:
            'A dictionary (`dict`) is an unordered-by-nature (insertion ordered since Python 3.7) collection of key-value pairs where keys must be unique and hashable.',
          detailedExplanation:
            'Dictionaries represent associative mappings (also known as hash maps, symbol tables, or lookup tables). Unlike lists where elements are accessed by integer indices, dictionary items are accessed via custom keys such as strings, numbers, or tuples.',
          syntaxExplanation:
            'user = {"name": "Alice", "age": 28, "role": "Engineer"}\nprint(user["name"])',
          howItWorks: [
            'Uses a sparse hash table array and a dense entries array for compact memory and fast key hashing.',
          ],
          examples: [
            {
              title: 'Profile Dictionary',
              code:
                'server_config = {\n    "host": "localhost",\n    "port": 8080,\n    "ssl": True\n}\nprint("Port:", server_config["port"])',
              explanation:
                'Stores server properties keyed by descriptive strings.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Using unhashable types like lists as dictionary keys.',
              explanation:
                'Dictionary keys must be immutable and hashable (e.g. str, int, tuple).',
            },
          ],
          quickChecks: [
            {
              question:
                'Can a Python list be used as a dictionary key?',
              answer: 'No, lists are mutable and unhashable',
              options: [
                'Yes, always',
                'No, lists are mutable and unhashable',
                'Only if the list is empty',
                'Only with numbers',
              ],
              correctAnswer: 1,
              explanation:
                'Lists cannot be hashed because they can change in place.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Create a dictionary representing a book with title, author, and pages',
              difficulty: 'easy',
              concepts: ['dict', 'key-value'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 9.2: CREATING DICTIONARIES
        // ---------------------------------------------------------
        {
          id: 'python-creating-dictionaries',
          title: 'Creating Dictionaries',
          slug: 'creating-dictionaries',
          description:
            'Constructing dictionaries using curly braces, dict() constructor, and fromkeys.',
          learningObjectives: [
            'Create dicts using curly brace literals.',
            'Use the dict() constructor with keyword arguments.',
            'Construct dicts from sequences of pairs.',
          ],
          prerequisites: ['python-what-is-a-dictionary'],
          conceptSummary:
            'Dictionaries are created using `{}` literals, `dict(key=value)`, or `dict([(k, v)])`.',
          detailedExplanation:
            'Python provides multiple ways to instantiate dictionaries: literal curly braces `{k: v}`, `dict(k1=v1, k2=v2)`, or converting an iterable of 2-tuples via `dict(pairs)`. Note that `{}` creates an empty dictionary, not an empty set.',
          syntaxExplanation:
            'empty_dict = {}\nd1 = {"a": 1, "b": 2}\nd2 = dict(a=1, b=2)\nd3 = dict([("a", 1), ("b", 2)])',
          howItWorks: ['Allocates PyDictObject in memory with key hash slots.'],
          examples: [
            {
              title: 'Dictionary Creation Styles',
              code:
                'pairs = [("USD", 1.0), ("EUR", 0.92), ("GBP", 0.79)]\nrates = dict(pairs)\nprint(rates)',
              explanation:
                'Builds a lookup table from a list of tuple pairs.',
            },
          ],
          commonMistakes: [
            {
              mistake: 'Thinking {} creates an empty set.',
              explanation:
                '{} creates an empty dictionary; use set() for an empty set.',
            },
          ],
          quickChecks: [
            {
              question:
                'What does the expression d = {} create in Python?',
              answer: 'An empty dictionary',
              options: [
                'An empty set',
                'An empty dictionary',
                'An empty tuple',
                'A syntax error',
              ],
              correctAnswer: 1,
              explanation: '{} defaults to an empty dictionary.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Construct a dictionary from two zipped lists using dict(zip(keys, values))',
              difficulty: 'easy',
              concepts: ['dict', 'zip'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 9.3: KEYS AND VALUES
        // ---------------------------------------------------------
        {
          id: 'python-keys-and-values',
          title: 'Keys and Values',
          slug: 'keys-and-values',
          description:
            'Rules for keys (immutability, hashability, uniqueness) and values (any object).',
          learningObjectives: [
            'Recognize hashability requirements for keys.',
            'Identify that values can be of any data type.',
            'Understand that duplicate keys overwrite existing values.',
          ],
          prerequisites: ['python-creating-dictionaries'],
          conceptSummary:
            'Keys must be immutable and hashable; values can be any Python object including lists, dicts, or functions.',
          detailedExplanation:
            'A dictionary key must implement `__hash__()` and `__eq__()`. Strings, integers, floats, booleans, and tuples (containing only hashable elements) are valid keys. Values have zero restrictions: they can be mutable, nested, or functions. If duplicate keys are given in a literal, the last value wins.',
          syntaxExplanation:
            'valid_dict = {\n    "string_key": 100,\n    42: "integer_key",\n    (1, 2): ["tuple", "key"]\n}',
          howItWorks: [
            'Hash codes determine key lookup bucket; duplicate keys overwrite the previous key entry.',
          ],
          examples: [
            {
              title: 'Diverse Value Types',
              code:
                'student = {\n    "name": "Jordan",\n    "grades": [95, 88, 92],\n    "metadata": {"enrolled": 2024, "active": True}\n}\nprint(student["grades"][0])',
              explanation:
                'Stores lists and nested dicts as dictionary values.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Using a tuple containing a list as a dictionary key.',
              explanation:
                'Even though the tuple is immutable, its child list is mutable, rendering the tuple unhashable.',
            },
          ],
          quickChecks: [
            {
              question:
                'What happens if you define a dictionary with duplicate keys like {"a": 1, "a": 2}?',
              answer:
                'The last key-value pair overwrites earlier ones (a becomes 2)',
              options: [
                'SyntaxError',
                'Both values are stored in a list',
                'The last key-value pair overwrites earlier ones',
                'The first value is preserved',
              ],
              correctAnswer: 2,
              explanation:
                'Duplicate keys overwrite earlier assignments during evaluation.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Create a dictionary using coordinates (x, y) as tuple keys',
              difficulty: 'easy',
              concepts: ['dict keys', 'tuples'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 9.4: ACCESSING VALUES
        // ---------------------------------------------------------
        {
          id: 'python-accessing-values',
          title: 'Accessing Values',
          slug: 'accessing-values',
          description:
            'Square bracket lookup, KeyError handling, and safe access with the get() method.',
          learningObjectives: [
            'Access values using bracket syntax `dict[key]`.',
            'Understand why missing keys raise KeyError.',
            'Use `dict.get(key, default)` for graceful fallback.',
          ],
          prerequisites: ['python-keys-and-values'],
          conceptSummary:
            'Access values using `d[key]` or safely with `d.get(key, default)`.',
          detailedExplanation:
            'Accessing `d[key]` retrieves the value in O(1) time. If `key` is absent, Python raises a `KeyError`. To avoid crashes, `d.get(key, fallback)` returns `fallback` (or `None` if omitted) instead of raising an exception.',
          syntaxExplanation:
            'val = d["existing_key"]\nsafe_val = d.get("missing_key", "default_value")',
          howItWorks: [
            'Hashes the key, checks the hash bucket; raises KeyError if not found unless get() handles the missing slot.',
          ],
          examples: [
            {
              title: 'Safe Configuration Lookup',
              code:
                'settings = {"theme": "light"}\n# Bracket access for known keys\ncurrent_theme = settings["theme"]\n# Safe get() for optional keys with defaults\nfont_size = settings.get("font_size", 14)\nprint(f"Theme: {current_theme}, Size: {font_size}")',
              explanation:
                'Demonstrates both direct access and safe get() fallbacks.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Using bracket access for optional or user-provided keys without try/except.',
              explanation:
                'Missing keys crash the script with KeyError; use get() or verify with in operator first.',
            },
          ],
          quickChecks: [
            {
              question:
                'What does dict.get("non_existent_key") return if no default value is specified?',
              answer: 'None',
              options: ['KeyError', 'None', '0', 'Empty string'],
              correctAnswer: 1,
              explanation:
                'get() returns None by default when a key is not found.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Retrieve user preferences with get() and sensible defaults',
              difficulty: 'easy',
              concepts: ['dict.get', 'KeyError'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 9.5: ADDING ENTRIES
        // ---------------------------------------------------------
        {
          id: 'python-adding-entries',
          title: 'Adding Entries',
          slug: 'adding-entries',
          description:
            'Inserting new key-value pairs into a dictionary using assignment and setdefault().',
          learningObjectives: [
            'Insert new items with `dict[key] = value`.',
            'Use `dict.setdefault(key, default)` for conditional insertion.',
          ],
          prerequisites: ['python-accessing-values'],
          conceptSummary:
            'Add a new entry by assigning to a new key: `d[new_key] = value`.',
          detailedExplanation:
            'In Python dictionaries, assigning to a non-existent key dynamically expands the dictionary and inserts the new entry. `setdefault(key, default)` checks if a key exists; if not, it inserts `key: default` and returns the value.',
          syntaxExplanation:
            'inventory = {"apples": 10}\ninventory["oranges"] = 25 # Adds new entry\ninventory.setdefault("bananas", 0) # Adds only if not present',
          howItWorks: [
            'Calculates hash, finds empty entry slot, and increments dict size.',
          ],
          examples: [
            {
              title: 'Building a Frequency Counter',
              code:
                'words = ["cat", "dog", "cat", "bird", "dog", "cat"]\ncounts = {}\nfor w in words:\n    if w not in counts:\n        counts[w] = 0\n    counts[w] += 1\nprint(counts)',
              explanation:
                'Adds word entries dynamically as they are encountered.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Thinking you need an append() or add() method for dictionaries.',
              explanation:
                'Dictionaries do not have append(); use assignment d[key] = value.',
            },
          ],
          quickChecks: [
            {
              question:
                'How do you add a new key "status" with value "active" to user_dict?',
              answer: 'user_dict["status"] = "active"',
              options: [
                'user_dict.append("status", "active")',
                'user_dict.add("status", "active")',
                'user_dict["status"] = "active"',
                'user_dict.insert("status", "active")',
              ],
              correctAnswer: 2,
              explanation:
                'Dictionary insertion uses key assignment: d[key] = value.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Collect user data into a dictionary from a sequence of inputs',
              difficulty: 'easy',
              concepts: ['dict assignment'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 9.6: UPDATING ENTRIES
        // ---------------------------------------------------------
        {
          id: 'python-updating-entries',
          title: 'Updating Entries',
          slug: 'updating-entries',
          description:
            'Modifying existing values and merging dictionaries with the update() method and union operator.',
          learningObjectives: [
            'Modify an existing key value in-place.',
            'Use `dict.update()` to merge another dictionary or key-value pairs.',
            'Use the Python 3.9+ `|` and `|=` dictionary merge operators.',
          ],
          prerequisites: ['python-adding-entries'],
          conceptSummary:
            'Update values via `d[key] = new_val` or merge with `d.update(other)` and `d |= other`.',
          detailedExplanation:
            'Assigning to an existing key overwrites its previous value. The `.update()` method modifies the dictionary in-place with pairs from another dictionary or iterable. Python 3.9 introduced the union operator `d1 | d2` (returns a new merged dict) and `d1 |= d2` (in-place merge).',
          syntaxExplanation:
            'd["status"] = "inactive" # Overwrite\nd.update({"role": "Admin", "level": 2})\nmerged = d1 | d2 # Python 3.9+ merge',
          howItWorks: [
            'Finds key slot via hash and updates pointer to the new value object.',
          ],
          examples: [
            {
              title: 'Updating and Merging Configurations',
              code:
                'defaults = {"theme": "light", "notifications": True, "zoom": 100}\nuser_prefs = {"theme": "dark", "zoom": 120}\n# Python 3.9 merge\nfinal_config = defaults | user_prefs\nprint(final_config)',
              explanation:
                'Merges user preferences over system defaults.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Expecting d.update() to return the updated dictionary.',
              explanation:
                'update() modifies the dictionary in-place and returns None.',
            },
          ],
          quickChecks: [
            {
              question:
                'Which operator was introduced in Python 3.9 to merge two dictionaries into a new dictionary?',
              answer: '|',
              options: ['+', '&', '|', '^'],
              correctAnswer: 2,
              explanation:
                'The pipe operator | performs dictionary union in Python 3.9+.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Merge two inventory dictionaries using update() and |',
              difficulty: 'easy',
              concepts: ['dict update', 'dict merge'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 9.7: REMOVING ENTRIES
        // ---------------------------------------------------------
        {
          id: 'python-removing-entries',
          title: 'Removing Entries',
          slug: 'removing-entries',
          description:
            'Deleting keys using del, pop(), popitem(), and clear().',
          learningObjectives: [
            'Remove keys using `del dict[key]`.',
            'Use `dict.pop(key, default)` to retrieve and remove an entry.',
            'Use `dict.popitem()` for LIFO removal.',
            'Wipe all items using `dict.clear()`.',
          ],
          prerequisites: ['python-updating-entries'],
          conceptSummary:
            'Remove dictionary entries with `del d[k]`, `d.pop(k)`, `d.popitem()`, or `d.clear()`.',
          detailedExplanation:
            '`del d[k]` deletes the key or raises `KeyError`. `d.pop(k, default)` removes and returns the value (or default if missing). `d.popitem()` removes and returns the last inserted `(key, value)` pair (LIFO). `d.clear()` empties the dictionary.',
          syntaxExplanation:
            'del d["key"]\nval = d.pop("key", None)\nlast_pair = d.popitem()\nd.clear()',
          howItWorks: [
            'Removes hash entry and adjusts internal dense table pointers.',
          ],
          examples: [
            {
              title: 'Safe Key Removal with pop()',
              code:
                'session = {"user": "Alex", "auth_token": "xyz123", "expired": False}\n# Pop token safely\ntoken = session.pop("auth_token", None)\nprint(f"Extracted token: {token}")\nprint(f"Remaining keys: {list(session.keys())}")',
              explanation:
                'Extracts and removes a key safely in one operation.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Calling del d[key] on a key that might not exist.',
              explanation:
                'del raises KeyError if key is missing; use pop(key, None) to delete safely.',
            },
          ],
          quickChecks: [
            {
              question:
                'What does dict.popitem() remove and return in Python 3.7+?',
              answer: 'The last inserted (key, value) pair',
              options: [
                'A random key-value pair',
                'The first inserted pair',
                'The last inserted (key, value) pair',
                'All pairs at once',
              ],
              correctAnswer: 2,
              explanation:
                'popitem() removes the most recently added item (LIFO order).',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Clean sensitive credentials out of a request dictionary using pop()',
              difficulty: 'easy',
              concepts: ['dict.pop', 'del'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 9.8: DICTIONARY METHODS
        // ---------------------------------------------------------
        {
          id: 'python-dictionary-methods',
          title: 'Dictionary Methods',
          slug: 'dictionary-methods',
          description:
            'Mastering keys(), values(), items(), copy(), and fromkeys().',
          learningObjectives: [
            'Inspect keys with `keys()` view.',
            'Inspect values with `values()` view.',
            'Iterate pairs with `items()` view.',
            'Shallow copy with `copy()`.',
          ],
          prerequisites: ['python-removing-entries'],
          conceptSummary:
            '`keys()`, `values()`, and `items()` return dynamic dictionary view objects reflecting real-time changes.',
          detailedExplanation:
            'Dictionary views (`dict_keys`, `dict_values`, `dict_items`) provide dynamic, iterable windows into the dictionary without creating separate list copies. Views reflect any subsequent changes made to the dictionary immediately and support set operations like intersection and difference.',
          syntaxExplanation:
            'keys = d.keys()\nvals = d.values()\npairs = d.items()\nclone = d.copy()',
          howItWorks: [
            'Views hold a reference to the dictionary table and iterate slots lazily.',
          ],
          examples: [
            {
              title: 'Dictionary Views and Set Operations',
              code:
                'admin_perms = {"read": True, "write": True, "delete": True}\nuser_perms = {"read": True, "share": True}\n# Set operations directly on dictionary keys views!\ncommon = admin_perms.keys() & user_perms.keys()\nprint("Common permissions:", common)',
              explanation:
                'Performs set intersection on dictionary keys views.',
            },
          ],
          commonMistakes: [
            {
              mistake: 'Attempting to index a view directly with view[0].',
              explanation:
                'Views are iterable but not indexable; convert with list(d.keys()) if random access is needed.',
            },
          ],
          quickChecks: [
            {
              question:
                'What type of object does dict.items() return in Python 3?',
              answer: 'A dynamic dict_items view object',
              options: [
                'A static list of tuples',
                'A dynamic dict_items view object',
                'A set of keys',
                'A generator',
              ],
              correctAnswer: 1,
              explanation:
                'items() returns a live dynamic view object reflecting dict state.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Find keys present in dict A but absent in dict B using keys() view difference',
              difficulty: 'easy',
              concepts: ['dict.keys', 'view set operations'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 9.9: ITERATING DICTIONARIES
        // ---------------------------------------------------------
        {
          id: 'python-iterating-dictionaries',
          title: 'Iterating Dictionaries',
          slug: 'iterating-dictionaries',
          description:
            'Looping through keys, values, and unpacked key-value pairs.',
          learningObjectives: [
            'Loop over keys directly with `for key in dict:`.',
            'Loop over values with `for val in dict.values():`.',
            'Unpack key-value pairs with `for k, v in dict.items():`.',
          ],
          prerequisites: ['python-dictionary-methods', 'python-for-loop'],
          conceptSummary:
            'Iterate keys with `for k in d`, values with `for v in d.values()`, and pairs with `for k, v in d.items()`.',
          detailedExplanation:
            'Iterating directly over a dictionary `for key in my_dict:` yields its keys. The most common and idiomatic way to loop through both keys and values is using tuple unpacking on `my_dict.items()`. Modifying the size of a dictionary during iteration triggers a `RuntimeError: dictionary changed size during iteration`.',
          syntaxExplanation:
            'for key in d:\n    print(key)\n\nfor k, v in d.items():\n    print(f"{k} => {v}")',
          howItWorks: [
            'Follows internal insertion-ordered entry array step-by-step.',
          ],
          examples: [
            {
              title: 'Formatted Iteration Over Product Catalog',
              code:
                'prices = {"laptop": 999.99, "mouse": 29.50, "keyboard": 75.00}\nfor item, price in prices.items():\n    print(f"- {item.capitalize():10}: ${price:.2f}")',
              explanation:
                'Iterates and prints formatted tabular output.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Adding or deleting keys inside a for loop iterating over that same dictionary.',
              explanation:
                'Raises RuntimeError: dictionary changed size during iteration. Iterate over list(d.keys()) instead.',
            },
          ],
          quickChecks: [
            {
              question:
                'What error occurs if you add a key to a dictionary while iterating over it directly?',
              answer: 'RuntimeError: dictionary changed size during iteration',
              options: [
                'IndexError',
                'KeyError',
                'RuntimeError: dictionary changed size during iteration',
                'ValueError',
              ],
              correctAnswer: 2,
              explanation:
                'Python prevents concurrent modification of dict size during iteration.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Calculate the total price of all items in an inventory dictionary using items()',
              difficulty: 'easy',
              concepts: ['dict iteration', 'items'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 9.10: NESTED DICTIONARIES
        // ---------------------------------------------------------
        {
          id: 'python-nested-dictionaries',
          title: 'Nested Dictionaries',
          slug: 'nested-dictionaries',
          description:
            'Structuring hierarchical and JSON-like data using dictionaries within dictionaries.',
          learningObjectives: [
            'Model multi-level hierarchical records.',
            'Access deeply nested values through chained indexing.',
            'Prevent crashes when accessing missing deep keys.',
          ],
          prerequisites: ['python-iterating-dictionaries'],
          conceptSummary:
            'Nested dictionaries store dictionaries as values within other dictionaries, creating trees of structured data.',
          detailedExplanation:
            'Nested dictionaries represent complex hierarchical structures, exactly mirroring JSON documents from web APIs. Chained square brackets `data["users"]["alice"]["email"]` navigate down the tree. Safely accessing nested keys can be done using chained `.get()` calls or recursive helpers.',
          syntaxExplanation:
            'company = {\n    "eng": {"lead": "Dan", "headcount": 12},\n    "hr": {"lead": "Sarah", "headcount": 4}\n}\nprint(company["eng"]["lead"])',
          howItWorks: [
            'Each key holds a reference to another independent PyDictObject in memory.',
          ],
          examples: [
            {
              title: 'Navigating API Response Structure',
              code:
                'response = {\n    "status": 200,\n    "payload": {\n        "user": {"id": 101, "name": "Elena"},\n        "roles": ["admin", "editor"]\n    }\n}\nuser_name = response["payload"]["user"]["name"]\nprimary_role = response["payload"]["roles"][0]\nprint(f"User: {user_name}, Role: {primary_role}")',
              explanation:
                'Extracts nested data across dict and list layers.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Chaining brackets when an intermediate key might be missing.',
              explanation:
                'response["missing"]["name"] raises KeyError immediately. Check each level or use chained get().',
            },
          ],
          quickChecks: [
            {
              question:
                'Given d = {"a": {"b": 42}}, how do you access the integer 42?',
              answer: 'd["a"]["b"]',
              options: [
                'd["a, b"]',
                'd["a"]["b"]',
                'd["a.b"]',
                'd.get("a", "b")',
              ],
              correctAnswer: 1,
              explanation:
                'Each nested level is accessed using sequential bracket pairs [outer][inner].',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Build a nested dictionary for a school department with courses, instructors, and credit hours',
              difficulty: 'easy',
              concepts: ['nested dict'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 9.11: DICTIONARY UNPACKING
        // ---------------------------------------------------------
        {
          id: 'python-dictionary-unpacking',
          title: 'Dictionary Unpacking',
          slug: 'dictionary-unpacking',
          description:
            'Unpacking dictionaries into function calls and new dictionaries using the ** operator.',
          learningObjectives: [
            'Unpack dictionary keys with `*dict`.',
            'Unpack dictionary key-value pairs into function arguments with `**dict`.',
            'Merge multiple dictionaries using `{**d1, **d2}`.',
          ],
          prerequisites: ['python-nested-dictionaries'],
          conceptSummary:
            'The `**` operator unpacks dictionary key-value pairs into function keyword arguments or new dictionaries.',
          detailedExplanation:
            'A single asterisk `*d` unpacks the keys of a dictionary. A double asterisk `**d` unpacks the key-value pairs as named keyword arguments. In dictionary literals, `{**d1, **d2}` creates a new dictionary merging both, with keys in `d2` overriding matching keys in `d1`.',
          syntaxExplanation:
            'def configure(host, port, ssl):\n    print(f"Connecting to {host}:{port} (SSL: {ssl})")\n\nparams = {"host": "db.internal", "port": 5432, "ssl": True}\nconfigure(**params) # Unpacked into keyword arguments',
          howItWorks: [
            'Unpacks each key-value pair and passes them as keyword arguments into PyEval_EvalCodeEx.',
          ],
          examples: [
            {
              title: 'Merging Configurations with **',
              code:
                'base_config = {"env": "prod", "cache": True, "workers": 4}\noverride = {"cache": False, "workers": 8}\nfinal = {**base_config, **override}\nprint("Final config:", final)',
              explanation:
                'Merges two dictionaries with override values taking precedence.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Using ** on a dictionary whose keys are not strings when passing to a function.',
              explanation:
                'Python keyword arguments must be valid identifier strings.',
            },
          ],
          quickChecks: [
            {
              question: 'What does {**dict1, **dict2} do?',
              answer: 'Creates a new dictionary merging dict1 and dict2',
              options: [
                'Squares both dictionaries',
                'Creates a new dictionary merging dict1 and dict2',
                'Multiplies matching keys',
                'Raises a SyntaxError',
              ],
              correctAnswer: 1,
              explanation:
                '** unpacks key-value pairs into the new dictionary literal.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Pass an API parameter dictionary into a greeting function using **kwargs unpacking',
              difficulty: 'easy',
              concepts: ['** unpacking'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 9.12: DICTIONARY COMPREHENSIONS
        // ---------------------------------------------------------
        {
          id: 'python-dictionary-comprehensions',
          title: 'Dictionary Comprehensions',
          slug: 'dictionary-comprehensions',
          description:
            'Creating dictionaries concisely from iterables using `{k: v for item in iterable}`.',
          learningObjectives: [
            'Write concise dictionary comprehensions.',
            'Apply conditional filtering with `if`.',
            'Invert dictionary keys and values.',
          ],
          prerequisites: [
            'python-dictionary-unpacking',
            'python-list-comprehensions',
          ],
          conceptSummary:
            'Dictionary comprehensions construct dictionaries dynamically using the syntax `{k_expr: v_expr for item in iterable if condition}`.',
          detailedExplanation:
            'Just like list comprehensions, dictionary comprehensions provide an elegant, readable, and highly optimized syntax for transforming, filtering, and creating dictionaries without verbose for loops.',
          syntaxExplanation:
            'squares = {x: x**2 for x in range(6)}\nfiltered = {k: v for k, v in d.items() if v > 10}',
          howItWorks: [
            'Evaluates key and value expressions in a specialized bytecode loop, inserting directly into a new dict.',
          ],
          examples: [
            {
              title: 'Inverting a Lookup Table',
              code:
                'code_to_country = {"US": "United States", "FR": "France", "JP": "Japan"}\ncountry_to_code = {name: code for code, name in code_to_country.items()}\nprint("Inverted:", country_to_code)',
              explanation:
                'Swaps keys and values in one clear comprehension line.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Forgetting the colon separating key and value expression in the comprehension.',
              explanation:
                'Writing {x for x in seq} creates a set; writing {x: y for x, y in seq} creates a dictionary.',
            },
          ],
          quickChecks: [
            {
              question: 'What does {x: x * 2 for x in range(3)} produce?',
              answer: '{0: 0, 1: 2, 2: 4}',
              options: [
                '{0: 0, 1: 1, 2: 2}',
                '{0: 0, 1: 2, 2: 4}',
                '[0, 2, 4]',
                '{0, 2, 4}',
              ],
              correctAnswer: 1,
              explanation:
                'Evaluates x as key and x * 2 as value for 0, 1, and 2.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Construct a dictionary mapping words to their character lengths using a comprehension',
              difficulty: 'easy',
              concepts: ['dict comprehension'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },
      ],
    },

    // =============================================================
    // MODULE 10: FUNCTIONS
    // =============================================================
    {
      id: 'python-mod-functions',
      title: 'Functions',
      order: 10,
      description:
        'Modular programming, defining functions, argument passing, return values, variable scopes, lambda expressions, and recursion.',
      topics: [
        // ---------------------------------------------------------
        // TOPIC 10.1: WHAT IS A FUNCTION?
        // ---------------------------------------------------------
        {
          id: 'python-what-is-a-function',
          title: 'What is a Function?',
          slug: 'what-is-a-function',
          description:
            'Functions as reusable, self-contained blocks of code designed to perform a specific task.',
          learningObjectives: [
            'Define what a function is in computer programming.',
            'Understand how functions organize logic.',
            'Identify built-in functions vs user-defined functions.',
          ],
          prerequisites: ['python-syntax-rules'],
          conceptSummary:
            'A function is a named, reusable sequence of statements designed to perform a single computational task.',
          detailedExplanation:
            'Functions are the primary building blocks for procedural abstraction. They allow programmers to encapsulate logic, give it a meaningful identifier, accept inputs, execute computations, and return outputs.',
          syntaxExplanation:
            'def function_name():\n    # code block\n    pass',
          howItWorks: [
            'The def statement binds a function object (PyFunctionObject) to a variable name in the current scope.',
          ],
          examples: [
            {
              title: 'First Function',
              code:
                'def display_greeting():\n    print("Welcome to Python Software Engineering!")\n\ndisplay_greeting()',
              explanation: 'Defines a named function and calls it.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Confusing function definition with function execution.',
              explanation:
                'Defining a function only creates it; you must call it with () to execute its body.',
            },
          ],
          quickChecks: [
            {
              question:
                'Which keyword is used to define a function in Python?',
              answer: 'def',
              options: ['function', 'def', 'func', 'fn'],
              correctAnswer: 1,
              explanation:
                'Python uses the def keyword to define functions.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Define a function show_banner that prints a welcome header',
              difficulty: 'easy',
              concepts: ['def', 'function'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 10.2: WHY USE FUNCTIONS?
        // ---------------------------------------------------------
        {
          id: 'python-why-use-functions',
          title: 'Why Use Functions?',
          slug: 'why-use-functions',
          description:
            'The DRY principle, code reusability, testability, abstraction, and maintainability.',
          learningObjectives: [
            "Understand the DRY principle (Don't Repeat Yourself).",
            'Recognize how functions facilitate unit testing.',
            'Explain how functions reduce cognitive complexity.',
          ],
          prerequisites: ['python-what-is-a-function'],
          conceptSummary:
            'Functions eliminate code duplication, improve readability, modularize complex logic, and make testing straightforward.',
          detailedExplanation:
            'Writing repetitive code leads to maintenance nightmares: fixing a bug in one place requires remembering every other copy. By isolating logic into well-named functions, developers write code once, test it thoroughly, and reuse it everywhere.',
          syntaxExplanation:
            '# Without functions: Duplicate calculation\n# With functions: Reusable logic\ndef calc_tax(amount):\n    return amount * 0.08',
          howItWorks: [
            'Functions create isolated call frames on the execution stack, separating variables.',
          ],
          examples: [
            {
              title: 'Reusable Formatting Logic',
              code:
                'def format_currency(val):\n    return f"${val:,.2f}"\n\nprint(format_currency(1250000))\nprint(format_currency(49.9))',
              explanation:
                'A single function formats any monetary figure consistently.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Writing monolithic scripts of 500 lines without dividing into functions.',
              explanation:
                'Break code into small, single-responsibility functions.',
            },
          ],
          quickChecks: [
            {
              question:
                'What does the software design acronym DRY stand for?',
              answer: "Don't Repeat Yourself",
              options: [
                'Do Run Yesterday',
                "Don't Repeat Yourself",
                'Data Registry Yield',
                'Dynamic Routing Yield',
              ],
              correctAnswer: 1,
              explanation:
                'DRY emphasizes writing reusable logic rather than duplicating code.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Refactor duplicated tax calculation code into a single reusable function',
              difficulty: 'easy',
              concepts: ['DRY', 'refactoring'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 10.3: DEFINING FUNCTIONS
        // ---------------------------------------------------------
        {
          id: 'python-defining-functions',
          title: 'Defining Functions',
          slug: 'defining-functions',
          description:
            'Syntax of def, function naming rules, docstrings, and body indentation.',
          learningObjectives: [
            'Define functions using the def statement.',
            'Apply PEP 8 naming conventions (snake_case).',
            'Document functions with docstrings.',
          ],
          prerequisites: ['python-why-use-functions'],
          conceptSummary:
            'Define functions using `def name(parameters):` followed by an indented body and an optional docstring.',
          detailedExplanation:
            'Function names follow variable naming rules (lowercase with underscores, `snake_case`). A docstring immediately beneath the `def` header provides built-in documentation accessible via `help(fn)` and `fn.__doc__`.',
          syntaxExplanation:
            'def calculate_area(width, height):\n    """Calculate and return rectangular area."""\n    return width * height',
          howItWorks: [
            'Stores documentation in the __doc__ attribute of the function object.',
          ],
          examples: [
            {
              title: 'Documented Function',
              code:
                'def celsius_to_fahrenheit(celsius):\n    """Convert temperature from Celsius to Fahrenheit."""\n    return (celsius * 9/5) + 32\n\nprint(celsius_to_fahrenheit(100))\nprint("Docstring:", celsius_to_fahrenheit.__doc__)',
              explanation:
                'Defines a documented mathematical conversion function.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Omitting the colon : at the end of the def header line.',
              explanation:
                'The def statement must end with a colon before the indented block.',
            },
          ],
          quickChecks: [
            {
              question:
                'How is documentation inside a Python function conventionally written?',
              answer:
                'In a triple-quoted docstring on the first line inside the function',
              options: [
                'With # comments outside',
                'In a triple-quoted docstring on the first line inside the function',
                'In a separate .doc file',
                'Using the @doc tag',
              ],
              correctAnswer: 1,
              explanation:
                'Triple-quoted strings immediately following def act as the function docstring.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Write a documented function calculate_bmi(weight_kg, height_m)',
              difficulty: 'easy',
              concepts: ['def', 'docstring'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 10.4: CALLING FUNCTIONS
        // ---------------------------------------------------------
        {
          id: 'python-calling-functions',
          title: 'Calling Functions',
          slug: 'calling-functions',
          description:
            'Executing functions using parentheses, passing arguments, and handling return values.',
          learningObjectives: [
            'Invoke functions using `()`.',
            'Distinguish between referring to a function object vs calling it.',
            'Capture return values in variables.',
          ],
          prerequisites: ['python-defining-functions'],
          conceptSummary:
            'Call a function by appending parentheses `()` to its identifier: `result = my_function(args)`.',
          detailedExplanation:
            'In Python, writing the function name without parentheses `fn` references the function object itself. Adding parentheses `fn()` tells Python to allocate a call stack frame and execute the function code.',
          syntaxExplanation:
            'fn_ref = calculate_area # Reference to function object\narea = calculate_area(10, 5) # Actual function invocation',
          howItWorks: [
            'Pushes a new PyFrameObject onto the call stack and transfers execution control.',
          ],
          examples: [
            {
              title: 'Function Object vs Call',
              code:
                'def ping():\n    return "pong"\n\nprint(ping)   # Prints <function ping at 0x...>\nprint(ping()) # Calls the function and prints "pong"',
              explanation:
                'Highlights the difference between a function reference and invocation.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Forgetting parentheses when calling a function, e.g. print(my_function).',
              explanation:
                'Without (), Python prints the function representation instead of executing it.',
            },
          ],
          quickChecks: [
            {
              question:
                'What happens when you write my_func without parentheses?',
              answer:
                'It refers to the function object without executing it',
              options: [
                'It executes with no arguments',
                'It throws an error',
                'It refers to the function object without executing it',
                'It deletes the function',
              ],
              correctAnswer: 2,
              explanation: 'Omitting () yields the function object itself.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Store a function in a list and invoke it through list indexing',
              difficulty: 'easy',
              concepts: ['function invocation', 'first-class functions'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 10.5: PARAMETERS
        // ---------------------------------------------------------
        {
          id: 'python-parameters',
          title: 'Parameters',
          slug: 'parameters',
          description:
            'Declaring inputs in function headers to accept incoming data.',
          learningObjectives: [
            'Define parameters in function signatures.',
            'Understand parameter placeholders.',
            'Match parameter counts with callers.',
          ],
          prerequisites: ['python-calling-functions'],
          conceptSummary:
            'Parameters are variable names listed in the function definition header that act as placeholders for incoming values.',
          detailedExplanation:
            'Parameters define the input interface of a function. When a function executes, parameters are created as local variables in the function frame, bound to the caller\'s arguments.',
          syntaxExplanation:
            'def greet(first_name, last_name): # first_name & last_name are parameters\n    print(f"Hello, {first_name} {last_name}!")',
          howItWorks: [
            'Allocated in the function code object co_varnames array.',
          ],
          examples: [
            {
              title: 'Multiple Parameters',
              code:
                'def compute_discount(price, rate):\n    return price * (1 - rate)\n\nprint("Final price:", compute_discount(100.0, 0.20))',
              explanation: 'Defines two parameters: price and rate.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Confusing the terms parameter and argument.',
              explanation:
                'Parameters are the variable names in the def header; arguments are the concrete values passed during the call.',
            },
          ],
          quickChecks: [
            {
              question: 'What are parameters in Python?',
              answer: 'The variable names defined in the function signature',
              options: [
                'The concrete values passed during a call',
                'The variable names defined in the function signature',
                'The output values returned',
                'Global variables',
              ],
              correctAnswer: 1,
              explanation:
                'Parameters are the placeholders defined in the function header.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Write a function with 3 parameters: title, author, year',
              difficulty: 'easy',
              concepts: ['parameters'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 10.6: ARGUMENTS
        // ---------------------------------------------------------
        {
          id: 'python-arguments',
          title: 'Arguments',
          slug: 'arguments',
          description:
            'Passing concrete values to function parameters at invocation time.',
          learningObjectives: [
            'Pass values into functions.',
            'Understand pass-by-object-reference semantics in Python.',
            'Observe mutable vs immutable argument behavior.',
          ],
          prerequisites: ['python-parameters'],
          conceptSummary:
            'Arguments are the real values passed into a function when calling it.',
          detailedExplanation:
            'Python uses "pass-by-object-reference" (or "pass-by-assignment"). When passing an argument, the parameter binds to the exact same object. Reassigning a parameter does not affect the caller, but modifying a mutable object in place (like appending to a list) affects the caller\'s object.',
          syntaxExplanation:
            'greet("Sarah", "Connor") # "Sarah" and "Connor" are arguments',
          howItWorks: [
            'Copies object pointers from caller frame into parameter slots of callee frame.',
          ],
          examples: [
            {
              title: 'Mutable Argument Mutation',
              code:
                'def append_item(my_list, item):\n    my_list.append(item) # Modifies original list in place!\n\nitems = [1, 2]\nappend_item(items, 3)\nprint("Modified caller list:", items)',
              explanation:
                'Demonstrates in-place mutation of mutable arguments.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Expecting numbers or strings to be modified in-place inside a function.',
              explanation:
                'Numbers and strings are immutable; modifying them creates a new object locally.',
            },
          ],
          quickChecks: [
            {
              question:
                'What evaluation strategy does Python use for passing arguments?',
              answer:
                'Pass-by-object-reference (pass-by-assignment)',
              options: [
                'Pass-by-value only',
                'Pass-by-reference only',
                'Pass-by-object-reference (pass-by-assignment)',
                'Pass-by-name',
              ],
              correctAnswer: 2,
              explanation:
                'Python passes references to objects; rebinding affects local scope, modifying mutable objects affects original.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Demonstrate that reassigning a variable inside a function does not change the caller variable',
              difficulty: 'easy',
              concepts: ['pass-by-assignment'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 10.7: POSITIONAL ARGUMENTS
        // ---------------------------------------------------------
        {
          id: 'python-positional-arguments',
          title: 'Positional Arguments',
          slug: 'positional-arguments',
          description:
            'Passing arguments matched strictly by their left-to-right order.',
          learningObjectives: [
            'Pass arguments positionally.',
            'Understand how order dictates parameter binding.',
            'Recognize TypeError when positional count mismatches.',
          ],
          prerequisites: ['python-arguments'],
          conceptSummary:
            'Positional arguments are mapped to parameters based on their sequential order from left to right.',
          detailedExplanation:
            'The first argument is assigned to the first parameter, the second to the second, and so on. If too few or too many positional arguments are provided, Python raises a `TypeError: takes X positional arguments but Y were given`.',
          syntaxExplanation:
            'def divide(dividend, divisor):\n    return dividend / divisor\n\nresult = divide(10, 2) # 10 is dividend, 2 is divisor',
          howItWorks: [
            'Binds arguments index-by-index in the order passed.',
          ],
          examples: [
            {
              title: 'Order Significance',
              code:
                'def introduce(name, profession):\n    print(f"I am {name} and I work as a {profession}.")\n\nintroduce("Alice", "Data Scientist")\n# Swapping order alters meaning:\nintroduce("Data Scientist", "Alice")',
              explanation:
                'Illustrates how argument order determines parameter assignment.',
            },
          ],
          commonMistakes: [
            {
              mistake: 'Swapping argument order accidentally.',
              explanation:
                'Positional mapping depends entirely on order. Use keyword arguments for clarity.',
            },
          ],
          quickChecks: [
            {
              question:
                'What determines which parameter receives which value when using positional arguments?',
              answer: 'The order in which arguments are passed',
              options: [
                'The variable names in caller scope',
                'The order in which arguments are passed',
                'Alphabetical sorting',
                'Type matching',
              ],
              correctAnswer: 1,
              explanation:
                'Positional arguments match parameters strictly left-to-right.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Write a power(base, exponent) function and call it positionally',
              difficulty: 'easy',
              concepts: ['positional arguments'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 10.8: KEYWORD ARGUMENTS
        // ---------------------------------------------------------
        {
          id: 'python-keyword-arguments',
          title: 'Keyword Arguments',
          slug: 'keyword-arguments',
          description:
            'Passing arguments explicitly named by parameter identifier: key=value.',
          learningObjectives: [
            'Call functions using named arguments.',
            'Mix positional and keyword arguments correctly.',
            'Improve call-site readability.',
          ],
          prerequisites: ['python-positional-arguments'],
          conceptSummary:
            'Keyword arguments are passed using the syntax `parameter_name=value`, allowing any order at the call site.',
          detailedExplanation:
            'Keyword arguments explicitly specify which parameter is receiving which value. This makes function calls self-documenting and order-independent. Rule: positional arguments must always precede keyword arguments.',
          syntaxExplanation:
            'introduce(profession="Pilot", name="Maverick")\n# Mixed (positional first, then keyword):\nintroduce("Maverick", profession="Pilot")',
          howItWorks: [
            'CPython matches kwarg strings against parameter names in co_varnames.',
          ],
          examples: [
            {
              title: 'Self-Documenting Database Connector Call',
              code:
                'def connect(host, port, timeout, secure):\n    return f"Connecting {host}:{port} (secure={secure}, timeout={timeout}s)"\n\n# Highly readable call:\nstatus = connect(host="db.example.com", port=5432, timeout=30, secure=True)\nprint(status)',
              explanation:
                'Keyword arguments clearly convey parameter intentions.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Placing a positional argument after a keyword argument, e.g. fn(a=1, 2).',
              explanation:
                'Raises SyntaxError: positional argument follows keyword argument.',
            },
          ],
          quickChecks: [
            {
              question:
                'Can positional arguments be placed after keyword arguments in a function call?',
              answer: 'No, SyntaxError is raised',
              options: [
                'Yes, always',
                'No, SyntaxError is raised',
                'Only if types match',
                'Only in Python 3.10+',
              ],
              correctAnswer: 1,
              explanation:
                'Positional arguments must strictly precede keyword arguments.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Call a multi-parameter function using keyword arguments in reversed order',
              difficulty: 'easy',
              concepts: ['keyword arguments'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 10.9: DEFAULT ARGUMENTS
        // ---------------------------------------------------------
        {
          id: 'python-default-arguments',
          title: 'Default Arguments',
          slug: 'default-arguments',
          description:
            'Assigning default values in function definitions and avoiding the mutable default trap.',
          learningObjectives: [
            'Define parameters with default values.',
            'Make parameters optional for callers.',
            'Understand and avoid the mutable default argument trap.',
          ],
          prerequisites: ['python-keyword-arguments'],
          conceptSummary:
            'Default arguments provide fallback values for parameters if the caller does not supply them.',
          detailedExplanation:
            'Parameters with defaults are optional. Critical rule: default expressions are evaluated only ONCE when the function definition is executed, not at each call. Never use mutable objects (like `[]` or `{}`) as defaults; use `None` and initialize inside.',
          syntaxExplanation:
            'def log(message, level="INFO"): # level is optional\n    print(f"[{level}] {message}")\n\n# Safe pattern for mutable defaults:\ndef add_item(item, target_list=None):\n    if target_list is None:\n        target_list = []\n    target_list.append(item)\n    return target_list',
          howItWorks: [
            'Default values are stored in the function object __defaults__ tuple at definition time.',
          ],
          examples: [
            {
              title: 'The Mutable Default Gotcha vs Safe Pattern',
              code:
                '# DANGEROUS:\ndef bad_append(val, lst=[]):\n    lst.append(val)\n    return lst\n\nprint(bad_append(1)) # [1]\nprint(bad_append(2)) # [1, 2] -- UNINTENDED SHARED STATE!\n\n# CORRECT:\ndef safe_append(val, lst=None):\n    if lst is None:\n        lst = []\n    lst.append(val)\n    return lst\n\nprint(safe_append(1)) # [1]\nprint(safe_append(2)) # [2]',
              explanation:
                'Compares the dangerous mutable default pitfall with the canonical None sentinel idiom.',
            },
          ],
          commonMistakes: [
            {
              mistake: 'Using def fn(arg=[]): as a default argument.',
              explanation:
                'The list is shared across all function calls! Use None as the default value.',
            },
          ],
          quickChecks: [
            {
              question:
                'When is a default argument expression evaluated in Python?',
              answer: 'Once, when the function is defined',
              options: [
                'Every time the function is called',
                'Once, when the function is defined',
                'When the module is compiled to C',
                'Only when arguments are omitted',
              ],
              correctAnswer: 1,
              explanation:
                'Defaults are evaluated once at definition time and stored on the function object.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Write a create_profile function using None as the default for an optional hobbies list',
              difficulty: 'easy',
              concepts: ['default arguments', 'None sentinel'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 10.10: VARIABLE-LENGTH ARGUMENTS
        // ---------------------------------------------------------
        {
          id: 'python-variable-length-arguments',
          title: 'Variable-Length Arguments',
          slug: 'variable-length-arguments',
          description:
            'Creating flexible functions that accept an arbitrary number of arguments.',
          learningObjectives: [
            'Understand the need for dynamic parameter counts.',
            'Recognize *args for variable positional arguments.',
            'Recognize **kwargs for variable keyword arguments.',
          ],
          prerequisites: ['python-default-arguments'],
          conceptSummary:
            'Variable-length arguments allow functions to accept any number of positional (*args) or keyword (**kwargs) inputs.',
          detailedExplanation:
            'Many functions need to operate on an unknown quantity of items (like `print(*objects)` or `min(*args)`). Python supports this via `*args` (collected into a tuple) and `**kwargs` (collected into a dictionary).',
          syntaxExplanation:
            'def flexible_function(*args, **kwargs):\n    print("Positional tuple:", args)\n    print("Keyword dictionary:", kwargs)',
          howItWorks: [
            'CPython packs excess arguments into tuple and dict structures before body execution.',
          ],
          examples: [
            {
              title: 'Universal Logger Stub',
              code:
                'def debug_log(*args, **kwargs):\n    print(f"Args count: {len(args)}, Kwargs count: {len(kwargs)}")\n\ndebug_log(1, "test", True, environment="staging", version=2.1)',
              explanation:
                'Accepts arbitrary numbers of both types of arguments.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Using *args without understanding that args inside the body is a tuple.',
              explanation: 'Inside the function, args is an ordinary tuple.',
            },
          ],
          quickChecks: [
            {
              question:
                'What data structure represents *args inside the function body?',
              answer: 'tuple',
              options: ['list', 'tuple', 'dict', 'set'],
              correctAnswer: 1,
              explanation:
                '*args collects positional arguments into an immutable tuple.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Write a function sum_all(*numbers) that sums any amount of numbers passed',
              difficulty: 'easy',
              concepts: ['variable length arguments'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 10.11: *ARGS
        // ---------------------------------------------------------
        {
          id: 'python-args',
          title: '*args',
          slug: 'args',
          description:
            'Collecting arbitrary positional arguments into an internal tuple.',
          learningObjectives: [
            'Define *args parameters.',
            'Iterate over *args.',
            'Combine standard parameters with *args.',
          ],
          prerequisites: ['python-variable-length-arguments'],
          conceptSummary:
            'The `*args` syntax allows a function to accept zero or more positional arguments, grouped as a tuple.',
          detailedExplanation:
            'The identifier `args` is a convention (the asterisk `*` is the actual syntactic operator). Any excess positional arguments provided beyond declared parameters are bundled into a tuple named `args`.',
          syntaxExplanation:
            'def calculate_average(*numbers):\n    if not numbers:\n        return 0\n    return sum(numbers) / len(numbers)',
          howItWorks: [
            'Stores excess positional arguments into PyTupleObject.',
          ],
          examples: [
            {
              title: 'Calculating Arithmetic Mean',
              code:
                'def mean(*grades):\n    return sum(grades) / len(grades)\n\nprint("Avg 1:", mean(90, 80, 70))\nprint("Avg 2:", mean(100, 95, 90, 85, 80))',
              explanation:
                'Computes average regardless of how many scores are provided.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Putting normal positional parameters after *args without keyword-only syntax.',
              explanation:
                'Parameters declared after *args must be passed as keyword arguments.',
            },
          ],
          quickChecks: [
            {
              question:
                'If you call mean() with no arguments on def mean(*nums):, what is nums inside the function?',
              answer: '() (empty tuple)',
              options: ['None', '[]', '() (empty tuple)', 'Raises TypeError'],
              correctAnswer: 2,
              explanation:
                '*args evaluates to an empty tuple when no arguments are provided.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Write a concatenate_strings(*words, separator=" ") function',
              difficulty: 'easy',
              concepts: ['*args', 'keyword-only'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 10.12: **KWARGS
        // ---------------------------------------------------------
        {
          id: 'python-kwargs',
          title: '**kwargs',
          slug: 'kwargs',
          description:
            'Collecting arbitrary keyword arguments into an internal dictionary.',
          learningObjectives: [
            'Define **kwargs parameters.',
            'Iterate over key-value pairs in **kwargs.',
            'Build extensible APIs and wrapper functions.',
          ],
          prerequisites: ['python-args'],
          conceptSummary:
            'The `**kwargs` syntax collects arbitrary keyword arguments into a dictionary named `kwargs`.',
          detailedExplanation:
            'The double asterisk `**` bundles any unexpected or dynamic keyword arguments into a standard dictionary. This pattern is extensively used in web frameworks, decorators, and function wrappers to pass through configurations.',
          syntaxExplanation:
            'def print_user_info(**kwargs):\n    for key, value in kwargs.items():\n        print(f"{key}: {value}")',
          howItWorks: [
            'CPython packs remaining keyword arguments into PyDictObject.',
          ],
          examples: [
            {
              title: 'Extensible HTML Tag Generator',
              code:
                'def make_tag(tag_name, content, **attributes):\n    attrs = " ".join([f\'{k}="{v}"\' for k, v in attributes.items()])\n    attr_str = f" {attrs}" if attrs else ""\n    return f"<{tag_name}{attr_str}>{content}</{tag_name}>"\n\nprint(make_tag("a", "Click Here", href="https://example.com", target="_blank"))',
              explanation:
                'Uses **kwargs to generate arbitrary HTML attributes.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Placing **kwargs before *args or positional arguments in the function definition.',
              explanation:
                '**kwargs must always be the very last parameter in the signature.',
            },
          ],
          quickChecks: [
            {
              question:
                'What type is kwargs inside a function defined with **kwargs?',
              answer: 'dict',
              options: ['tuple', 'list', 'dict', 'set'],
              correctAnswer: 2,
              explanation:
                '**kwargs packs named parameters into a standard Python dict.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Create a function build_query(table, **filters) returning an SQL-like WHERE clause',
              difficulty: 'easy',
              concepts: ['**kwargs'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 10.13: RETURN STATEMENT
        // ---------------------------------------------------------
        {
          id: 'python-return-statement',
          title: 'Return Statement',
          slug: 'return-statement',
          description:
            'Exiting a function and sending computed data back to the caller.',
          learningObjectives: [
            'Use return to pass values back to caller.',
            'Understand early return pattern.',
            'Know what happens when return is omitted (None).',
          ],
          prerequisites: ['python-calling-functions'],
          conceptSummary:
            'The `return` statement terminates function execution and hands a value back to the caller. Omitting return returns `None`.',
          detailedExplanation:
            'When Python encounters `return`, it immediately exits the current function frame, restoring the caller frame. If no expression is given with `return` or if the function reaches the end of its block without returning, Python returns `None`.',
          syntaxExplanation:
            'def add(a, b):\n    return a + b # Exits immediately with result',
          howItWorks: [
            'Pops the function call frame off the call stack and leaves the return value on the evaluation stack.',
          ],
          examples: [
            {
              title: 'Guard Clause Early Return',
              code:
                'def validate_age(age):\n    if age < 0:\n        return "Invalid negative age" # Early exit guard\n    if age < 18:\n        return "Minor"\n    return "Adult"\n\nprint(validate_age(-5))\nprint(validate_age(22))',
              explanation:
                'Uses early returns to simplify control flow.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Placing code after a return statement and expecting it to execute.',
              explanation:
                'Any code following a return statement in the same block is unreachable dead code.',
            },
          ],
          quickChecks: [
            {
              question:
                'What does a Python function return if it contains no return statement?',
              answer: 'None',
              options: ['0', 'False', 'None', 'undefined'],
              correctAnswer: 2,
              explanation:
                'Python functions return None by default when execution completes without return.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Write an absolute_value function using an early return',
              difficulty: 'easy',
              concepts: ['return', 'guard clauses'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 10.14: MULTIPLE RETURN VALUES
        // ---------------------------------------------------------
        {
          id: 'python-multiple-return-values',
          title: 'Multiple Return Values',
          slug: 'multiple-return-values',
          description:
            'Returning multiple values via tuple packing and unpacking at caller site.',
          learningObjectives: [
            'Return multiple comma-separated values.',
            'Understand that Python packs multiple returns into a tuple.',
            'Unpack return values into separate variables.',
          ],
          prerequisites: ['python-return-statement', 'python-tuples'],
          conceptSummary:
            'Python allows returning multiple values separated by commas, automatically packing them into a tuple.',
          detailedExplanation:
            'When returning `return a, b, c`, Python packs the items into a single tuple `(a, b, c)`. The caller can unpack them directly: `x, y, z = get_coords()`. This enables functions to cleanly return complementary results.',
          syntaxExplanation:
            'def get_min_max(numbers):\n    return min(numbers), max(numbers) # Returns a 2-tuple\n\nlow, high = get_min_max([4, 1, 9, 3]) # Unpacked',
          howItWorks: [
            'CPython executes BUILD_TUPLE bytecode and returns the tuple reference.',
          ],
          examples: [
            {
              title: 'Returning Coordinates and Metadata',
              code:
                'def parse_point(data_str):\n    x, y = map(int, data_str.split(","))\n    magnitude = (x**2 + y**2)**0.5\n    return x, y, magnitude\n\npx, py, dist = parse_point("3,4")\nprint(f"Point: ({px}, {py}), Distance: {dist}")',
              explanation: 'Returns and unpacks 3 related values.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Mismatching the number of receiving variables during unpacking.',
              explanation:
                'Unpacking must have matching counts; otherwise ValueError: too many/not enough values to unpack occurs.',
            },
          ],
          quickChecks: [
            {
              question:
                'What is the actual type of the return object when a function does: return 10, 20?',
              answer: 'tuple',
              options: ['list', 'tuple', 'set', 'dict'],
              correctAnswer: 1,
              explanation:
                'Comma-separated return values are implicitly packed into a tuple.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Write a divide_with_remainder(a, b) function returning (quotient, remainder)',
              difficulty: 'easy',
              concepts: ['multiple returns', 'tuple unpacking'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 10.15: VARIABLE SCOPE
        // ---------------------------------------------------------
        {
          id: 'python-variable-scope',
          title: 'Variable Scope',
          slug: 'variable-scope',
          description:
            'The LEGB rule: Local, Enclosing, Global, and Built-in resolution namespaces.',
          learningObjectives: [
            'Understand variable scope and lifetime.',
            'Master the LEGB search order.',
            'Identify where Python looks for identifier definitions.',
          ],
          prerequisites: ['python-return-statement'],
          conceptSummary:
            'Variable scope determines where an identifier is accessible, resolved using the LEGB rule (Local -> Enclosing -> Global -> Built-in).',
          detailedExplanation:
            'When a variable name is referenced, Python looks in four sequential namespaces: 1. Local (inside current function), 2. Enclosing (inside outer enclosing functions), 3. Global (module level), 4. Built-in (built-in keywords like len, print).',
          syntaxExplanation:
            '# L: Local\n# E: Enclosing\n# G: Global\n# B: Built-in',
          howItWorks: [
            'CPython inspects fast-locals array, then f_locals, f_globals, and __builtins__.',
          ],
          examples: [
            {
              title: 'Observing LEGB in Action',
              code:
                'x = "GLOBAL"\n\ndef outer():\n    x = "ENCLOSING"\n    def inner():\n        x = "LOCAL"\n        print("Resolved:", x)\n    inner()\n\nouter()',
              explanation:
                'Demonstrates nearest-scope resolution (Local wins over Enclosing and Global).',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Assuming variables declared inside a function can be accessed outside.',
              explanation:
                'Local variables cease to exist once the function frame exits.',
            },
          ],
          quickChecks: [
            {
              question:
                'What does the acronym LEGB stand for in Python scope resolution?',
              answer: 'Local, Enclosing, Global, Built-in',
              options: [
                'Lexical, External, Generic, Base',
                'Local, Enclosing, Global, Built-in',
                'Logical, Extended, Global, Bytecode',
                'Loop, Entry, Guard, Branch',
              ],
              correctAnswer: 1,
              explanation:
                'Python checks Local, then Enclosing, then Global, then Built-in scopes.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Predict which variable will be printed in a nested function example',
              difficulty: 'easy',
              concepts: ['LEGB', 'scope'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 10.16: LOCAL VARIABLES
        // ---------------------------------------------------------
        {
          id: 'python-local-variables',
          title: 'Local Variables',
          slug: 'local-variables',
          description:
            'Variables created inside a function, isolated to its execution frame.',
          learningObjectives: [
            'Create local variables within function bodies.',
            'Understand variable lifetime and stack frames.',
            'Prevent variable pollution across functions.',
          ],
          prerequisites: ['python-variable-scope'],
          conceptSummary:
            'Local variables exist only within the function where they are assigned and are destroyed when the function returns.',
          detailedExplanation:
            'Variables assigned inside a function body belong to that function\'s local namespace. They cannot be read or modified by other functions or module-level code, guaranteeing isolation and preventing unwanted side effects.',
          syntaxExplanation:
            'def compute():\n    temp_result = 42 # Local variable\n    return temp_result\n\n# print(temp_result) -> NameError: name "temp_result" is not defined',
          howItWorks: [
            'Stored directly in the PyFrameObject local array and deallocated on function exit.',
          ],
          examples: [
            {
              title: 'Local Variable Isolation',
              code:
                'def worker_a():\n    counter = 100\n    return counter\n\ndef worker_b():\n    counter = 200 # Completely separate local variable\n    return counter\n\nprint("Worker A:", worker_a())\nprint("Worker B:", worker_b())',
              explanation:
                'Two functions each possess their own independent local counter variable.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Trying to access a local variable from outside the function.',
              explanation:
                'Raises NameError. Return the value if the caller needs it.',
            },
          ],
          quickChecks: [
            {
              question:
                'What happens to a local variable after a function completes execution?',
              answer: 'It is deallocated and ceases to exist',
              options: [
                'It becomes global',
                'It is deallocated and ceases to exist',
                'It moves to heap storage',
                'It is cached forever',
              ],
              correctAnswer: 1,
              explanation:
                'Local variables are cleaned up when the stack frame is popped.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Write two functions having local variables with identical names to prove isolation',
              difficulty: 'easy',
              concepts: ['local variables'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 10.17: GLOBAL VARIABLES
        // ---------------------------------------------------------
        {
          id: 'python-global-variables',
          title: 'Global Variables',
          slug: 'global-variables',
          description:
            'Module-level variables accessible by all functions in the file.',
          learningObjectives: [
            'Define module-level global variables.',
            'Read globals from inside functions.',
            'Understand the risks of mutable global state.',
          ],
          prerequisites: ['python-local-variables'],
          conceptSummary:
            'Global variables are defined at the top level of a module and can be read by any function in that module.',
          detailedExplanation:
            'A global variable has module-level scope. Functions can read global variables freely without special keywords. However, excessive use of global state makes programs difficult to test, debug, and run concurrently.',
          syntaxExplanation:
            'APP_VERSION = "2.5.0" # Global variable\n\ndef show_version():\n    print(APP_VERSION) # Reading global is permitted directly',
          howItWorks: [
            'Stored in the module __dict__ namespace table.',
          ],
          examples: [
            {
              title: 'Reading Shared Global Configuration',
              code:
                'TAX_RATE = 0.075\n\ndef compute_tax(subtotal):\n    return subtotal * TAX_RATE\n\nprint("Tax on $100:", compute_tax(100))',
              explanation:
                'Functions safely read the module-level constant TAX_RATE.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Overusing mutable globals instead of passing arguments and returning values.',
              explanation:
                'Global state creates hidden dependencies and race conditions.',
            },
          ],
          quickChecks: [
            {
              question:
                'Can a function read a module-level global variable without the global keyword?',
              answer: 'Yes, reading globals is permitted directly',
              options: [
                'No, never',
                'Yes, reading globals is permitted directly',
                'Only if the variable is an integer',
                'Only in debug mode',
              ],
              correctAnswer: 1,
              explanation:
                'Python can read globals in the LEGB chain without special syntax.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Create a module-level constant and access it across 3 different calculation functions',
              difficulty: 'easy',
              concepts: ['globals'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 10.18: GLOBAL KEYWORD
        // ---------------------------------------------------------
        {
          id: 'python-global-keyword',
          title: 'global Keyword',
          slug: 'global-keyword',
          description:
            'Rebinding or modifying module-level variables from inside a function.',
          learningObjectives: [
            'Use the global keyword to rebind a module-level variable.',
            'Understand why assignment shadows globals locally by default.',
            'Recognize UnboundLocalError.',
          ],
          prerequisites: ['python-global-variables'],
          conceptSummary:
            'The `global` keyword declares that a variable name refers to the module-level global scope, permitting reassignment inside a function.',
          detailedExplanation:
            'If you assign to a variable anywhere in a function, Python marks it as local for the entire function. Attempting to read it before that assignment causes `UnboundLocalError`. Declaring `global var_name` informs Python to rebind the global variable instead.',
          syntaxExplanation:
            'counter = 0\n\ndef increment():\n    global counter\n    counter += 1',
          howItWorks: [
            'Instructs the compiler to emit STORE_GLOBAL rather than STORE_FAST bytecode.',
          ],
          examples: [
            {
              title: 'Modifying Global Counter',
              code:
                'total_events = 0\n\ndef log_event():\n    global total_events\n    total_events += 1\n\nlog_event()\nlog_event()\nprint("Total events logged:", total_events)',
              explanation:
                'Updates the module-level variable from within a function.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Assigning to a variable and expecting it to update the global without the global declaration.',
              explanation:
                'Python creates a new local variable instead of updating the global, unless declared global.',
            },
          ],
          quickChecks: [
            {
              question:
                'What error occurs when you assign to a variable inside a function after reading it, without declaring global?',
              answer: 'UnboundLocalError',
              options: ['NameError', 'UnboundLocalError', 'TypeError', 'SyntaxError'],
              correctAnswer: 1,
              explanation:
                'Python detects local assignment and marks the variable local, causing UnboundLocalError when read before assignment.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Fix an UnboundLocalError in a counter function using the global keyword',
              difficulty: 'easy',
              concepts: ['global keyword', 'UnboundLocalError'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 10.19: LAMBDA FUNCTIONS
        // ---------------------------------------------------------
        {
          id: 'python-lambda-functions',
          title: 'Lambda Functions',
          slug: 'lambda-functions',
          description:
            'Anonymous, single-expression inline functions: lambda params: expression.',
          learningObjectives: [
            'Write anonymous inline lambda expressions.',
            'Use lambdas as sorting keys and callbacks.',
            'Understand the limitations of lambda (single expression).',
          ],
          prerequisites: ['python-defining-functions'],
          conceptSummary:
            'A lambda function is a small, anonymous function defined with `lambda arguments: expression` that returns the expression\'s result.',
          detailedExplanation:
            'Lambda functions are syntactic sugar for short, disposable functions. They cannot contain statements, assignments, or multiple lines—only a single evaluated expression. They are most commonly used as key extractors for `sorted()`, `min()`, `max()`, and functional utilities.',
          syntaxExplanation:
            'square = lambda x: x ** 2\n# Idiomatic usage in sorting:\nsorted_users = sorted(users, key=lambda u: u["age"])',
          howItWorks: [
            'Creates a PyFunctionObject with a code object returning the single expression.',
          ],
          examples: [
            {
              title: 'Sorting Custom Objects with Lambda Key',
              code:
                'students = [\n    {"name": "Alice", "score": 88},\n    {"name": "Bob", "score": 95},\n    {"name": "Charlie", "score": 78}\n]\n# Sort descending by score\nstudents.sort(key=lambda s: s["score"], reverse=True)\nprint(students)',
              explanation:
                'Uses lambda as an inline key extraction callback.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Assigning lambda to a variable name (name = lambda ...); use def name(...) instead.',
              explanation:
                'PEP 8 recommends def over named lambdas because def provides proper tracebacks and docstrings.',
            },
          ],
          quickChecks: [
            {
              question:
                'Can a Python lambda function contain loops or statements like print or return?',
              answer:
                'No, lambda can only contain a single expression',
              options: [
                'Yes, if enclosed in parentheses',
                'No, lambda can only contain a single expression',
                'Yes, using semicolons',
                'Only in Python 3',
              ],
              correctAnswer: 1,
              explanation:
                'Lambdas are strictly limited to a single expression whose value is returned.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Sort a list of strings by their length using a lambda function',
              difficulty: 'easy',
              concepts: ['lambda', 'sorted key'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 10.20: RECURSION
        // ---------------------------------------------------------
        {
          id: 'python-recursion',
          title: 'Recursion',
          slug: 'recursion',
          description:
            'Functions that call themselves, base cases, recursive cases, and recursion depth limits.',
          learningObjectives: [
            'Understand the recursive problem-solving model.',
            'Identify the mandatory base case.',
            "Manage Python's call stack recursion depth limit.",
          ],
          prerequisites: ['python-return-statement'],
          conceptSummary:
            'Recursion occurs when a function calls itself to solve smaller subproblems until hitting a terminating base case.',
          detailedExplanation:
            'Every recursive function requires two essential parts: 1. A Base Case (stops recursion), 2. A Recursive Case (reduces the problem and calls itself). Without a base case, recursion continues until hitting `RecursionError: maximum recursion depth exceeded` (default limit 1000).',
          syntaxExplanation:
            'def factorial(n):\n    if n <= 1:        # Base case\n        return 1\n    return n * factorial(n - 1) # Recursive case',
          howItWorks: [
            'Pushes frames onto the call stack until base case returns, then unwinds stack.',
          ],
          examples: [
            {
              title: 'Recursive Factorial and Fibonacci',
              code:
                'def fib(n):\n    if n <= 0:\n        return 0\n    elif n == 1:\n        return 1\n    return fib(n - 1) + fib(n - 2)\n\nprint("Fib(7):", fib(7))',
              explanation: 'Computes Fibonacci numbers recursively.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Omitting the base case or never reaching it, causing infinite recursion.',
              explanation:
                'Leads to RecursionError: maximum recursion depth exceeded.',
            },
          ],
          quickChecks: [
            {
              question:
                'What error is raised when a recursive function in Python exceeds its recursion limit?',
              answer: 'RecursionError',
              options: [
                'StackOverflowError',
                'RecursionError',
                'MemoryError',
                'InfiniteLoopError',
              ],
              correctAnswer: 1,
              explanation:
                'Python raises RecursionError when max depth (sys.getrecursionlimit()) is breached.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Write a recursive function countdown(n) that prints down to 0 and stops',
              difficulty: 'easy',
              concepts: ['recursion', 'base case'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },
      ],
    },

    // =============================================================
    // MODULE 11: MODULES AND PACKAGES
    // =============================================================
    {
      id: 'python-mod-modules-packages',
      title: 'Modules and Packages',
      order: 11,
      description:
        'Code organization, import statements, the standard library, building custom modules, packages, pip, and virtual environments.',
      topics: [
        // ---------------------------------------------------------
        // TOPIC 11.1: WHAT IS A MODULE?
        // ---------------------------------------------------------
        {
          id: 'python-what-is-a-module',
          title: 'What is a Module?',
          slug: 'what-is-a-module',
          description:
            'Modules as Python files (.py) containing reusable functions, classes, and variables.',
          learningObjectives: [
            'Define a Python module.',
            'Understand code separation across files.',
            'Know how modules are identified.',
          ],
          prerequisites: ['python-what-is-a-function'],
          conceptSummary:
            'A module is simply a Python file (e.g. `math_utils.py`) containing code meant to be imported and reused by other programs.',
          detailedExplanation:
            'As programs grow, putting all code in one file becomes unmaintainable. A module is a single Python source file ending in `.py`. When imported, Python executes the file once and makes its defined functions, classes, and constants available in an isolated namespace.',
          syntaxExplanation:
            '# Inside my_module.py:\ndef helper():\n    return "Ready"\n\n# In main.py:\nimport my_module\nprint(my_module.helper())',
          howItWorks: [
            'CPython creates a module object (PyModuleObject) and caches it in sys.modules.',
          ],
          examples: [
            {
              title: 'Using Built-in Math Module',
              code:
                'import math\nprint("Pi:", math.pi)\nprint("Square root of 64:", math.sqrt(64))',
              explanation:
                "Imports Python's standard math module to compute square root.",
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Naming your script the same name as a standard module, like math.py.',
              explanation:
                'Shadows the standard library, causing circular imports and AttributeError.',
            },
          ],
          quickChecks: [
            {
              question:
                'What file extension does a Python module file have?',
              answer: '.py',
              options: ['.mod', '.py', '.pym', '.python'],
              correctAnswer: 1,
              explanation:
                'Python module source files use the .py extension.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Create a conceptual calculation module with 2 utility functions',
              difficulty: 'easy',
              concepts: ['module'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 11.2: IMPORT STATEMENT
        // ---------------------------------------------------------
        {
          id: 'python-import',
          title: 'import Statement',
          slug: 'import',
          description:
            'Loading entire modules into a clean namespace using import module_name.',
          learningObjectives: [
            'Import modules using the import statement.',
            'Access module members with dot notation.',
            'Understand sys.modules caching.',
          ],
          prerequisites: ['python-what-is-a-module'],
          conceptSummary:
            'The `import module_name` statement loads a module into your script under its own namespace.',
          detailedExplanation:
            'Using `import module_name` keeps your global namespace clean. All imported variables and functions must be accessed using the module name as a prefix (e.g. `os.path.exists()`). This prevents name collisions between different libraries.',
          syntaxExplanation:
            'import os\nimport sys\nprint(os.getcwd())',
          howItWorks: [
            'Searches sys.path, compiles to bytecode, executes module body, records in sys.modules.',
          ],
          examples: [
            {
              title: 'Importing System Utilities',
              code:
                'import platform\nprint("Operating System:", platform.system())\nprint("Python Version:", platform.python_version())',
              explanation:
                'Inspects host OS and Python runtime via imported module.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Calling a function directly without the module prefix after using plain import.',
              explanation: 'After import math, call math.sqrt(), not sqrt().',
            },
          ],
          quickChecks: [
            {
              question:
                'How do you call the sqrt function if you used: import math?',
              answer: 'math.sqrt(...)',
              options: [
                'sqrt(...)',
                'math.sqrt(...)',
                'math->sqrt(...)',
                'math::sqrt(...)',
              ],
              correctAnswer: 1,
              explanation:
                'Standard import requires accessing members via module.member.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Import random and generate 5 numbers between 1 and 100',
              difficulty: 'easy',
              concepts: ['import', 'random'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 11.3: FROM IMPORT
        // ---------------------------------------------------------
        {
          id: 'python-from-import',
          title: 'from ... import Statement',
          slug: 'from-import',
          description:
            'Importing specific attributes or functions directly into the current namespace.',
          learningObjectives: [
            'Import specific functions with `from module import name`.',
            'Import multiple names in a single statement.',
            'Understand why wildcard imports (`from mod import *`) are bad practice.',
          ],
          prerequisites: ['python-import'],
          conceptSummary:
            '`from module import item` imports specific members directly into the local namespace, omitting the prefix.',
          detailedExplanation:
            'This syntax allows calling functions directly without writing the module prefix each time. You can import multiple items: `from math import sqrt, pi, sin`. Avoid wildcard imports `from module import *` because they pollute the local namespace and obscure where names originated.',
          syntaxExplanation:
            'from math import sqrt, pi\nprint(sqrt(25)) # No math. prefix required!\nprint(pi)',
          howItWorks: [
            'Loads module and binds specific attributes directly to variable names in current namespace.',
          ],
          examples: [
            {
              title: 'Selective Importing',
              code:
                'from datetime import datetime, date\ntoday = date.today()\nnow = datetime.now()\nprint(f"Date: {today}, Time: {now.strftime(\'%H:%M:%S\')}")',
              explanation:
                'Imports only datetime and date classes directly.',
            },
          ],
          commonMistakes: [
            {
              mistake: 'Using from module import * in production code.',
              explanation:
                'Causes name clashes, overwrites built-in functions, and breaks static analysis tools.',
            },
          ],
          quickChecks: [
            {
              question:
                'Why is from module import * discouraged in production Python?',
              answer:
                'It pollutes the namespace and makes it unclear where functions come from',
              options: [
                'It runs much slower',
                'It pollutes the namespace and makes it unclear where functions come from',
                'It causes syntax errors in Python 3',
                'It is deprecated',
              ],
              correctAnswer: 1,
              explanation:
                'Wildcard imports lead to naming collisions and hide dependencies.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Import sin and cos from math and verify sin(0)**2 + cos(0)**2 == 1',
              difficulty: 'easy',
              concepts: ['from import'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 11.4: IMPORT ALIASES
        // ---------------------------------------------------------
        {
          id: 'python-import-aliases',
          title: 'Import Aliases (as)',
          slug: 'import-aliases',
          description:
            'Renaming imports using the as keyword for readability and abbreviation.',
          learningObjectives: [
            'Rename imported modules with `as`.',
            'Apply standard industry aliases (np, pd, plt).',
            'Resolve name conflicts between libraries.',
          ],
          prerequisites: ['python-from-import'],
          conceptSummary:
            'The `as` keyword assigns an alias to an imported module or function: `import module as alias`.',
          detailedExplanation:
            'Aliasing is standard practice for long module names and established community conventions (e.g. `import numpy as np`, `import pandas as pd`). It is also useful when two different modules export an identically named class.',
          syntaxExplanation:
            'import datetime as dt\nfrom collections import defaultdict as ddict\n\nnow = dt.datetime.now()',
          howItWorks: [
            'Binds the imported module object to the alias identifier in the current frame.',
          ],
          examples: [
            {
              title: 'Resolving Name Clashes with as',
              code:
                'from xml.etree import ElementTree as XMLTree\n# Now clearly distinguished from any other tree structure\nprint("XML parser alias ready:", XMLTree)',
              explanation:
                'Aliases an XML parser module to avoid generic name collisions.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Inventing non-standard abbreviations for standard libraries, causing confusion.',
              explanation:
                'Follow standard community idioms (e.g. np for numpy, pd for pandas).',
            },
          ],
          quickChecks: [
            {
              question:
                'Which keyword creates an alias during an import in Python?',
              answer: 'as',
              options: ['alias', 'as', 'to', 'rename'],
              correctAnswer: 1,
              explanation:
                'The as keyword binds the imported object to a custom local alias.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Import json with alias js and serialize a dictionary to string',
              difficulty: 'easy',
              concepts: ['import as'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 11.5: BUILT-IN MODULES
        // ---------------------------------------------------------
        {
          id: 'python-built-in-modules',
          title: 'Built-in Modules',
          slug: 'built-in-modules',
          description:
            "Tour of Python's \"Batteries Included\" standard library: math, random, os, sys, datetime.",
          learningObjectives: [
            'Survey the Python standard library.',
            'Recognize core modules: math, random, os, sys, datetime, json.',
            'Understand that standard library modules require zero installation.',
          ],
          prerequisites: ['python-import-aliases'],
          conceptSummary:
            'Python comes with "Batteries Included"—a rich collection of built-in standard library modules ready to use without installation.',
          detailedExplanation:
            'The standard library handles everyday programming needs out of the box: system interaction (`os`, `sys`), mathematics (`math`, `random`, `statistics`), file formats (`json`, `csv`), network protocols (`urllib`, `http`), and dates (`datetime`, `time`).',
          syntaxExplanation:
            'import math\nimport random\nimport os\nimport sys\nimport datetime\nimport json',
          howItWorks: [
            'Pre-packaged with the CPython distribution either as C extension modules or .py files in lib/.',
          ],
          examples: [
            {
              title: 'Standard Library Utility Sampler',
              code:
                'import random\nimport json\n\nrand_val = random.randint(1, 10)\ndata = {"random_number": rand_val, "status": "ok"}\njson_str = json.dumps(data)\nprint("JSON output:", json_str)',
              explanation:
                'Combines random and json standard modules.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Attempting to run pip install math or pip install os.',
              explanation:
                'Standard library modules are pre-installed; no pip command is required.',
            },
          ],
          quickChecks: [
            {
              question:
                'Do standard library modules like math and os need to be installed via pip?',
              answer:
                'No, they are built into Python ("batteries included")',
              options: [
                'Yes, always',
                'No, they are built into Python ("batteries included")',
                'Only on Windows',
                'Only in virtual environments',
              ],
              correctAnswer: 1,
              explanation:
                'The standard library is included by default with every Python installation.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Use the datetime module to print the current day of the week',
              difficulty: 'easy',
              concepts: ['built-in modules', 'datetime'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 11.6: CREATING CUSTOM MODULES
        // ---------------------------------------------------------
        {
          id: 'python-creating-custom-modules',
          title: 'Creating Custom Modules',
          slug: 'creating-custom-modules',
          description:
            'Authoring your own .py files and importing them into other project scripts.',
          learningObjectives: [
            'Create a multi-file Python project.',
            'Import functions from sibling .py files.',
            "Understand Python's module search path (sys.path).",
          ],
          prerequisites: ['python-built-in-modules'],
          conceptSummary:
            'Any `.py` file you write can be imported as a custom module by other scripts located in the same directory.',
          detailedExplanation:
            'To create a custom module, simply write functions, classes, and variables in `utils.py`. In another file in the same directory (like `main.py`), write `import utils` or `from utils import my_func`. Python automatically includes the current working directory in `sys.path`.',
          syntaxExplanation:
            '# File: validator.py\ndef is_email(s):\n    return "@" in s and "." in s\n\n# File: app.py\nfrom validator import is_email',
          howItWorks: [
            'Searches the directory of the running script first in sys.path.',
          ],
          examples: [
            {
              title: 'Multi-file Project Architecture',
              code:
                '# In string_helpers.py:\n# def slugify(text): return text.lower().replace(" ", "-")\n\n# In main.py:\n# import string_helpers\n# print(string_helpers.slugify("Hello World"))',
              explanation:
                'Modularizes reusable helper functions across files.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Placing module files in parent directories without adding them to sys.path.',
              explanation:
                'Python looks in current directory and site-packages. Use packages or PYTHONPATH for subdirectories.',
            },
          ],
          quickChecks: [
            {
              question:
                'Where does Python look first when searching for an imported module?',
              answer:
                'The directory containing the input script (current directory)',
              options: [
                'Global Windows System32',
                'The directory containing the input script',
                'The internet',
                'The browser cache',
              ],
              correctAnswer: 1,
              explanation:
                'The script directory is at index 0 of sys.path.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Design a modular geometry calculator split into geometry.py and main.py',
              difficulty: 'easy',
              concepts: ['custom modules'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 11.7: PACKAGES
        // ---------------------------------------------------------
        {
          id: 'python-packages',
          title: 'Packages',
          slug: 'packages',
          description:
            'Organizing modules into directories using __init__.py files.',
          learningObjectives: [
            'Organize multiple modules into directory packages.',
            'Understand the role of __init__.py.',
            'Import from package submodules with dot notation.',
          ],
          prerequisites: ['python-creating-custom-modules'],
          conceptSummary:
            'A package is a folder containing multiple Python modules, traditionally initialized by an `__init__.py` file.',
          detailedExplanation:
            'Packages allow structuring large applications into hierarchical directory trees (e.g. `myapp.database.models`). An `__init__.py` file inside the folder marks it as a Python package and executes when the package is imported, allowing package-level initialization and exports.',
          syntaxExplanation:
            '# Project structure:\n# my_package/\n#   __init__.py\n#   database.py\n#   auth.py\n#\nimport my_package.database',
          howItWorks: [
            'Python loads __init__.py and assigns the package namespace as a module object.',
          ],
          examples: [
            {
              title: 'Package Import Patterns',
              code:
                '# from ecommerce.billing import process_payment\n# from ecommerce.inventory import check_stock\n# status = process_payment(amount=99.0)',
              explanation:
                'Accesses domain-specific submodules within a package.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Omitting __init__.py in legacy Python projects.',
              explanation:
                'While Python 3.3+ supports namespace packages without __init__.py, explicit __init__.py is still best practice for regular packages.',
            },
          ],
          quickChecks: [
            {
              question:
                'What special file name traditionally designates a directory as a Python package?',
              answer: '__init__.py',
              options: [
                'package.json',
                '__init__.py',
                'main.py',
                '__package__.py',
              ],
              correctAnswer: 1,
              explanation:
                '__init__.py indicates that the directory is a Python package.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Structure a conceptual analytics package with summary.py and charts.py submodules',
              difficulty: 'easy',
              concepts: ['packages', '__init__.py'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 11.8: __NAME__ VARIABLE
        // ---------------------------------------------------------
        {
          id: 'python-name-variable',
          title: '__name__ Variable',
          slug: 'name-variable',
          description:
            'The built-in module variable that indicates whether a file is being run directly or imported.',
          learningObjectives: [
            'Understand the purpose of the __name__ special variable.',
            'Recognize what __name__ equals when run directly ("__main__").',
            'Recognize what __name__ equals when imported (module name).',
          ],
          prerequisites: ['python-packages'],
          conceptSummary:
            '`__name__` is a built-in variable set to `"__main__"` when run directly, or the module name when imported.',
          detailedExplanation:
            'Whenever Python executes a source file, it assigns special dunder variables. If the file is the entry point executed from the command line, Python sets its `__name__` to `"__main__"`. If the file was loaded via an `import` statement, `__name__` is set to the module\'s import string.',
          syntaxExplanation:
            'print(f"Current module name: {__name__}")',
          howItWorks: [
            'CPython runtime sets PyModuleDef md_name before code evaluation.',
          ],
          examples: [
            {
              title: 'Checking Execution Mode',
              code:
                'def calculate():\n    return 42\n\nprint("Current __name__ is:", __name__)',
              explanation:
                'Prints __main__ when run directly via python script.py.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Hardcoding string names instead of checking the dynamic __name__ variable.',
              explanation:
                'Use the standard __name__ == "__main__" idiom.',
            },
          ],
          quickChecks: [
            {
              question:
                'What is __name__ set to in the file that was executed directly from the terminal?',
              answer: '"__main__"',
              options: ['"__main__"', '"root"', '"__init__"', 'None'],
              correctAnswer: 0,
              explanation:
                'The top-level entry script always has __name__ set to "__main__".',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Inspect __name__ in a standalone script and print its value',
              difficulty: 'easy',
              concepts: ['__name__'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 11.9: MAIN IDIOM
        // ---------------------------------------------------------
        {
          id: 'python-main-idiom',
          title: 'if __name__ == "__main__"',
          slug: 'main-idiom',
          description:
            'The canonical Python idiom for separating executable CLI code from reusable library imports.',
          learningObjectives: [
            'Use `if __name__ == "__main__":` idiom.',
            'Allow a script to function both as an imported library and standalone program.',
            'Prevent code from automatically executing on import.',
          ],
          prerequisites: ['python-name-variable'],
          conceptSummary:
            'The `if __name__ == "__main__":` guard prevents test/demo code from executing when the file is imported by another script.',
          detailedExplanation:
            'Without this guard, any top-level statements in a file execute immediately upon `import`. By placing testing, debugging, or CLI runner code inside `if __name__ == "__main__":`, the code only runs when the script is invoked directly, keeping imports silent and clean.',
          syntaxExplanation:
            'def add(a, b):\n    return a + b\n\nif __name__ == "__main__":\n    # Only runs when executed directly, NOT on import!\n    print("Self-test:", add(2, 3))',
          howItWorks: [
            'Evaluates condition at runtime during file loading.',
          ],
          examples: [
            {
              title: 'Production File Pattern with main() Entry',
              code:
                'def process_data():\n    return "Data processed"\n\ndef main():\n    print("Starting pipeline...")\n    result = process_data()\n    print(result)\n\nif __name__ == "__main__":\n    main()',
              explanation: 'The standard Python program structure.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Putting module initialization code inside if __name__ == "__main__":.',
              explanation:
                'Code inside this block will NOT run when the module is imported.',
            },
          ],
          quickChecks: [
            {
              question:
                'Why do Python developers use if __name__ == "__main__":?',
              answer:
                'To prevent code from running when the file is imported by another module',
              options: [
                'To make the program run faster',
                'To prevent code from running when the file is imported by another module',
                'To declare main() function return types',
                'To create a global loop',
              ],
              correctAnswer: 1,
              explanation:
                'It protects script execution logic from running on module import.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Refactor a script to encapsulate its test calls inside an if __name__ == "__main__": block',
              difficulty: 'easy',
              concepts: ['if __name__ == "__main__"'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 11.10: PIP
        // ---------------------------------------------------------
        {
          id: 'python-pip',
          title: 'pip Package Manager',
          slug: 'pip',
          description:
            'Installing, updating, and managing third-party Python packages from PyPI (Python Package Index).',
          learningObjectives: [
            'Install third-party packages from PyPI with pip.',
            'Uninstall and upgrade packages.',
            'List installed packages with pip list.',
          ],
          prerequisites: ['python-main-idiom'],
          conceptSummary:
            '`pip` is the standard package installer for Python, downloading open-source libraries from the Python Package Index (PyPI).',
          detailedExplanation:
            'Python\'s ecosystem contains hundreds of thousands of packages on PyPI (such as Requests, FastAPI, NumPy). `pip install <package_name>` downloads and configures the package into your environment so you can import it immediately.',
          syntaxExplanation:
            '# Terminal commands:\n# pip install requests\n# pip list\n# pip uninstall requests\n# pip show requests',
          howItWorks: [
            'Queries PyPI JSON API, resolves wheel/sdist dependencies, downloads and unpacks into site-packages.',
          ],
          examples: [
            {
              title: 'Installing and Using Requests',
              code:
                '# In terminal: pip install requests\n# In Python script:\n# import requests\n# res = requests.get("https://api.github.com")\n# print(res.status_code)',
              explanation: 'Installs and imports an HTTP client library.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Typing pip install inside the Python interpreter (>>>) instead of the OS terminal.',
              explanation:
                'pip is a command-line tool, not a Python statement.',
            },
          ],
          quickChecks: [
            {
              question:
                'Where do you run the command pip install requests?',
              answer: 'In the system command prompt or terminal',
              options: [
                'In the Python interactive shell (>>>)',
                'In the system command prompt or terminal',
                'Inside a Python print() statement',
                'In the web browser URL bar',
              ],
              correctAnswer: 1,
              explanation:
                'pip is an executable CLI utility run from your operating system shell.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'List the terminal commands to install and inspect the requests library',
              difficulty: 'easy',
              concepts: ['pip'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 11.11: VIRTUAL ENVIRONMENTS
        // ---------------------------------------------------------
        {
          id: 'python-virtual-environments',
          title: 'Virtual Environments (venv)',
          slug: 'virtual-environments',
          description:
            'Isolating project dependencies and avoiding global package version conflicts using venv.',
          learningObjectives: [
            'Understand dependency isolation.',
            'Create virtual environments using python -m venv .venv.',
            'Activate and deactivate virtual environments across OSs.',
          ],
          prerequisites: ['python-pip'],
          conceptSummary:
            'A virtual environment (`venv`) is an isolated Python directory containing its own Python binary and independent set of installed packages.',
          detailedExplanation:
            'Different projects often require conflicting versions of the same library (e.g. Project A needs Django 3.2, Project B needs Django 5.0). Installing globally creates irreconcilable conflicts. A virtual environment gives each project its own self-contained sandbox.',
          syntaxExplanation:
            '# Create:\n# python -m venv .venv\n# Activate (Windows):\n# .venv\\Scripts\\activate\n# Activate (Mac/Linux):\n# source .venv/bin/activate\n# Deactivate:\n# deactivate',
          howItWorks: [
            'Modifies PATH environment variable to point to the local .venv/bin or .venv/Scripts directory.',
          ],
          examples: [
            {
              title: 'Virtual Environment Lifecycle',
              code:
                '# 1. Create: python -m venv venv\n# 2. Activate: source venv/bin/activate (or .\\venv\\Scripts\\activate)\n# 3. Install: pip install flask\n# 4. Run: python app.py\n# 5. Exit: deactivate',
              explanation: 'Complete lifecycle of project isolation.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Committing the entire virtual environment directory (.venv/) to Git.',
              explanation:
                'Add .venv/ to .gitignore; commit requirements.txt instead.',
            },
          ],
          quickChecks: [
            {
              question:
                'Which built-in module is used to create virtual environments in Python 3?',
              answer: 'venv',
              options: ['virtualenv', 'venv', 'pipenv', 'env'],
              correctAnswer: 1,
              explanation:
                'Python 3 includes the venv module in its standard library.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Write the terminal commands to create and activate a virtual environment named .venv',
              difficulty: 'easy',
              concepts: ['venv'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 11.12: REQUIREMENTS.TXT
        // ---------------------------------------------------------
        {
          id: 'python-requirements-txt',
          title: 'requirements.txt',
          slug: 'requirements-txt',
          description:
            'Pinning and reproducing project dependencies using pip freeze and requirements.txt.',
          learningObjectives: [
            'Export dependencies using pip freeze.',
            'Create and maintain requirements.txt.',
            'Install all project dependencies with pip install -r requirements.txt.',
          ],
          prerequisites: ['python-virtual-environments'],
          conceptSummary:
            'A `requirements.txt` file specifies the exact names and versions of dependencies needed to run a Python project.',
          detailedExplanation:
            'Sharing a project with teammates or deploying to production requires reproducing the identical environment. Running `pip freeze > requirements.txt` exports every installed package and version. Anyone can recreate the environment with `pip install -r requirements.txt`.',
          syntaxExplanation:
            '# Exporting:\n# pip freeze > requirements.txt\n\n# Installing from file:\n# pip install -r requirements.txt',
          howItWorks: [
            'pip reads file line by line and executes package resolution and wheel installation.',
          ],
          examples: [
            {
              title: 'Typical requirements.txt File',
              code:
                '# Sample requirements.txt\n# fastapi==0.110.0\n# uvicorn[standard]==0.28.0\n# pydantic>=2.6.0\n# requests~=2.31.0',
              explanation:
                'Pins exact versions with == and compatible releases with ~=.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Not pinning versions in production, allowing unexpected breaking upgrades.',
              explanation:
                'Pin specific versions with == in requirements.txt for predictable builds.',
            },
          ],
          quickChecks: [
            {
              question:
                'Which command installs all dependencies listed in a requirements.txt file?',
              answer: 'pip install -r requirements.txt',
              options: [
                'pip load requirements.txt',
                'pip install -r requirements.txt',
                'pip fetch requirements.txt',
                'python -m requirements',
              ],
              correctAnswer: 1,
              explanation:
                'The -r (requirement) flag tells pip to install from a file.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Write a sample requirements.txt containing pinned versions for requests and flask',
              difficulty: 'easy',
              concepts: ['requirements.txt', 'pip freeze'],
            },
          ],
          difficulty: 'beginner',
          estimatedMinutes: 15,
        },
      ],
    },
  ],
};

export default pythonBeginner;