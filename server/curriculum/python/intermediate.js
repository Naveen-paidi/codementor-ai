/**
 * Python Curriculum — Intermediate Level (GeeksforGeeks-Style Structure)
 * Modules 12-16: Functional Python, Error & File Handling, OOP,
 * Advanced OOP, and Standard Library Power Tools.
 *
 * Each topic follows: Overview -> Objectives -> Prerequisites -> Concept ->
 * Detailed Explanation -> Syntax -> How It Works -> Examples ->
 * Common Mistakes -> Quick Checks -> Practice Questions -> Difficulty
 *
 * Self-contained local curriculum source of truth.
 */

export const pythonIntermediate = {
  id: 'python-intermediate',
  title: 'Level 2: Python Intermediate Mastery',
  level: 2,
  difficulty: 'intermediate',
  description:
    'Master functional programming, generators, decorators, file I/O, OOP, dunder methods, metaclasses, dataclasses, and standard library power tools.',

  modules: [
    // =============================================================
    // MODULE 12: FUNCTIONAL PYTHON & ADVANCED FUNCTIONS
    // =============================================================
    {
      id: 'python-mod-functional-programming',
      title: 'Functional Python & Advanced Functions',
      order: 12,
      description:
        'Closures, higher-order functions, map/filter/reduce, iterators, generators, decorators, and functools.',
      topics: [
        // ---------------------------------------------------------
        // TOPIC 12.1: CLOSURES
        // ---------------------------------------------------------
        {
          id: 'python-closures',
          title: 'Closures and Lexical Scoping',
          slug: 'closures',
          description:
            'Inner functions capturing and retaining enclosing variables even after the outer function finishes.',
          learningObjectives: [
            'Define closures in Python.',
            'Understand cell variables and __closure__ inspection.',
            'Use closures for data encapsulation.',
          ],
          prerequisites: [
            'python-variable-scope',
            'python-defining-functions',
          ],
          conceptSummary:
            'A closure is a function object that remembers values in enclosing scopes even if they are no longer present in memory.',
          detailedExplanation:
            "When an inner function references a variable from an enclosing outer function, Python binds that variable into a `cell` object in the function's `__closure__` attribute. Even when the outer function returns and its frame is destroyed, the inner function retains access to that captured state.",
          syntaxExplanation:
            'def make_multiplier(factor):\n    def multiply(x):\n        return x * factor # factor is captured in closure\n    return multiply\n\ndouble = make_multiplier(2)\nprint(double(5)) # 10',
          howItWorks: [
            'CPython creates PyCellObject pointers bridging the parent and nested function frames.',
          ],
          examples: [
            {
              title: 'Stateful Counter Without Classes',
              code:
                'def make_counter(start=0):\n    count = start\n    def increment():\n        nonlocal count\n        count += 1\n        return count\n    return increment\n\nc = make_counter(10)\nprint(c()) # 11\nprint(c()) # 12',
              explanation:
                'Uses closure and nonlocal to encapsulate private mutable state.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Reassigning enclosing variable without using the nonlocal keyword.',
              explanation:
                'Assigning without nonlocal creates a new local variable, causing UnboundLocalError.',
            },
          ],
          quickChecks: [
            {
              question:
                'Which keyword allows an inner function to rebind a variable from an enclosing (non-global) scope?',
              answer: 'nonlocal',
              options: ['global', 'nonlocal', 'outer', 'enclose'],
              correctAnswer: 1,
              explanation:
                'The nonlocal keyword permits modifying variables in nearest enclosing scopes.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Create a closure make_accumulator(initial=0) that adds values to a running total',
              difficulty: 'intermediate',
              concepts: ['closure', 'nonlocal'],
            },
          ],
          difficulty: 'intermediate',
          estimatedMinutes: 20,
        },

        // ---------------------------------------------------------
        // TOPIC 12.2: HIGHER-ORDER FUNCTIONS
        // ---------------------------------------------------------
        {
          id: 'python-higher-order-functions',
          title: 'Higher-Order Functions',
          slug: 'higher-order-functions',
          description:
            'Functions that accept other functions as arguments or return functions as output.',
          learningObjectives: [
            'Define first-class and higher-order functions.',
            'Pass functions as callbacks.',
            'Return dynamic functions from factories.',
          ],
          prerequisites: ['python-closures'],
          conceptSummary:
            'A higher-order function is a function that takes one or more functions as arguments, or returns a function as its result.',
          detailedExplanation:
            'In Python, functions are first-class citizens. They have types, can be passed to arguments, stored in dictionaries, and returned from other functions. Higher-order functions form the foundation for decorators, event handling, and pipeline architectures.',
          syntaxExplanation:
            'def apply_operation(func, value):\n    return func(value)\n\nresult = apply_operation(abs, -42) # Passes built-in abs function',
          howItWorks: [
            'Functions are passed as PyObject references on the call stack.',
          ],
          examples: [
            {
              title: 'Dynamic Transformer Pipeline',
              code:
                'def pipeline(data, *transformers):\n    result = data\n    for fn in transformers:\n        result = fn(result)\n    return result\n\nclean_text = pipeline("  hello world  ", str.strip, str.title)\nprint(clean_text) # "Hello World"',
              explanation:
                'Applies a sequence of functions sequentially to transform input data.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Passing the result of a function call fn() instead of the function reference fn.',
              explanation:
                'fn calls immediately; fn passes the callable reference.',
            },
          ],
          quickChecks: [
            {
              question:
                'What makes Python functions "first-class citizens"?',
              answer:
                'They can be passed as arguments, returned, and assigned like any object',
              options: [
                'They execute faster than methods',
                'They can be passed as arguments, returned, and assigned like any object',
                'They run in ring-0 kernel mode',
                'They are strictly typed',
              ],
              correctAnswer: 1,
              explanation:
                'First-class citizens can be treated like any other data value.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Write a retry(func, max_attempts) higher-order function that attempts running func',
              difficulty: 'intermediate',
              concepts: ['higher-order functions'],
            },
          ],
          difficulty: 'intermediate',
          estimatedMinutes: 20,
        },

        // ---------------------------------------------------------
        // TOPIC 12.3: MAP, FILTER, REDUCE
        // ---------------------------------------------------------
        {
          id: 'python-map-filter-reduce',
          title: 'map(), filter(), and reduce()',
          slug: 'map-filter-reduce',
          description:
            'Functional sequence transformation, selection, and folding operations.',
          learningObjectives: [
            'Transform sequences using map().',
            'Filter elements using filter().',
            'Aggregate values using functools.reduce().',
            'Compare with comprehension syntax.',
          ],
          prerequisites: [
            'python-higher-order-functions',
            'python-lambda-functions',
          ],
          conceptSummary:
            '`map` transforms each item, `filter` extracts items matching a predicate, and `reduce` combines items cumulatively into a single result.',
          detailedExplanation:
            '`map(func, iterable)` applies `func` to every item lazily returning an iterator. `filter(func, iterable)` yields only items where `func(item)` evaluates truthy. `functools.reduce(func, iterable)` applies a binary function cumulatively from left to right.',
          syntaxExplanation:
            'from functools import reduce\nsquares = list(map(lambda x: x**2, [1, 2, 3]))\nevens = list(filter(lambda x: x % 2 == 0, [1, 2, 3, 4]))\nproduct = reduce(lambda acc, x: acc * x, [1, 2, 3, 4]) # 24',
          howItWorks: [
            'map and filter produce lazy generator-like iterators; reduce accumulates in a tight C loop.',
          ],
          examples: [
            {
              title: 'Processing Transaction Totals',
              code:
                'from functools import reduce\ntransactions = [100.0, -25.5, 300.0, -50.0, 120.0]\n# Extract positive credits and compute sum\ncredits = list(filter(lambda x: x > 0, transactions))\ntotal_credits = reduce(lambda acc, x: acc + x, credits)\nprint(f"Credits: {credits}, Total: ${total_credits:.2f}")',
              explanation:
                'Combines filter and reduce to process transactional figures.',
            },
          ],
          commonMistakes: [
            {
              mistake: 'Assuming map() returns a list in Python 3.',
              explanation:
                'map() returns a lazy map object; wrap with list() if a concrete list is required.',
            },
          ],
          quickChecks: [
            {
              question:
                'From which module must reduce() be imported in Python 3?',
              answer: 'functools',
              options: ['builtins', 'functools', 'itertools', 'collections'],
              correctAnswer: 1,
              explanation:
                'reduce was moved from builtins to functools in Python 3.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Use reduce to find the greatest common divisor or maximum value in a list',
              difficulty: 'intermediate',
              concepts: ['reduce', 'map', 'filter'],
            },
          ],
          difficulty: 'intermediate',
          estimatedMinutes: 20,
        },

        // ---------------------------------------------------------
        // TOPIC 12.4: ITERATORS AND ITERABLES
        // ---------------------------------------------------------
        {
          id: 'python-iterators-and-iterables',
          title: 'Iterators and Iterables Protocol',
          slug: 'iterators-and-iterables',
          description:
            "The __iter__() and __next__() protocols powering Python's for loops.",
          learningObjectives: [
            'Differentiate between an Iterable and an Iterator.',
            'Implement __iter__() and __next__().',
            'Handle StopIteration termination.',
          ],
          prerequisites: ['python-for-loop'],
          conceptSummary:
            'An iterable has `__iter__()` returning an iterator; an iterator has `__next__()` returning elements until raising `StopIteration`.',
          detailedExplanation:
            'Under the hood, every `for item in sequence:` statement executes: 1. `it = iter(sequence)` (calls `__iter__()`), 2. repeatedly calls `next(it)` (calls `__next__()`), 3. catches `StopIteration` and terminates cleanly.',
          syntaxExplanation:
            'my_iter = iter([10, 20])\nprint(next(my_iter)) # 10\nprint(next(my_iter)) # 20\n# next(my_iter) raises StopIteration',
          howItWorks: [
            'Python protocol relies on tp_iter and tp_iternext slots in the C type definition.',
          ],
          examples: [
            {
              title: 'Custom Range Iterator Class',
              code:
                'class Countdown:\n    def __init__(self, start):\n        self.current = start\n    def __iter__(self):\n        return self\n    def __next__(self):\n        if self.current <= 0:\n            raise StopIteration\n        val = self.current\n        self.current -= 1\n        return val\n\nfor num in Countdown(3):\n    print(num) # 3, 2, 1',
              explanation:
                "Creates a full custom iterator conforming to Python's iteration protocol.",
            },
          ],
          commonMistakes: [
            {
              mistake: 'Attempting to reuse an exhausted iterator.',
              explanation:
                'Iterators are single-pass; once exhausted, they continually raise StopIteration. Create a fresh iterator.',
            },
          ],
          quickChecks: [
            {
              question:
                'What exception signals that an iterator has no more elements?',
              answer: 'StopIteration',
              options: [
                'IndexError',
                'StopIteration',
                'EOFError',
                'IterationEndException',
              ],
              correctAnswer: 1,
              explanation:
                'StopIteration is the canonical signal ending an iteration loop.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Build a CycleIterator that endlessly cycles through a list of 3 items',
              difficulty: 'intermediate',
              concepts: ['iterators', '__next__', '__iter__'],
            },
          ],
          difficulty: 'intermediate',
          estimatedMinutes: 20,
        },

        // ---------------------------------------------------------
        // TOPIC 12.5: GENERATORS AND YIELD
        // ---------------------------------------------------------
        {
          id: 'python-generators-and-yield',
          title: 'Generators and the yield Statement',
          slug: 'generators-and-yield',
          description:
            'Creating memory-efficient lazy streams using generator functions and yield.',
          learningObjectives: [
            'Write generator functions using yield.',
            'Understand execution suspension and resumption.',
            'Process massive data streams with minimal RAM.',
          ],
          prerequisites: ['python-iterators-and-iterables'],
          conceptSummary:
            'A generator function produces values lazily on-demand using `yield`, pausing execution and state between calls.',
          detailedExplanation:
            'When a function contains the `yield` keyword, calling it does not run the code; it returns a generator object. When `next()` is called on the generator, code runs until encountering `yield`. The value is returned, and all local variables and instruction pointers are frozen until the next request.',
          syntaxExplanation:
            'def count_up(limit):\n    n = 1\n    while n <= limit:\n        yield n\n        n += 1\n\ngen = count_up(3)\nprint(next(gen)) # 1',
          howItWorks: [
            'CPython preserves the entire frame state on the heap rather than discarding the stack frame.',
          ],
          examples: [
            {
              title: 'Infinite Fibonacci Generator Stream',
              code:
                'def fibonacci_stream():\n    a, b = 0, 1\n    while True:\n        yield a\n        a, b = b, a + b\n\nfib = fibonacci_stream()\nfirst_five = [next(fib) for _ in range(5)]\nprint("First 5 Fibs:", first_five)',
              explanation: 'Produces an infinite sequence with O(1) memory.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Returning a huge list from a function when a lazy generator stream would use 100x less memory.',
              explanation:
                'Generators evaluate one item at a time, preventing memory exhaustion on large datasets.',
            },
          ],
          quickChecks: [
            {
              question:
                'What does the yield statement do when encountered inside a function?',
              answer:
                'Pauses function execution, yields the value, and retains local state',
              options: [
                'Permanently exits the function like return',
                'Pauses function execution, yields the value, and retains local state',
                'Spawns a new operating system thread',
                'Prints to stdout',
              ],
              correctAnswer: 1,
              explanation:
                'yield suspends execution and saves frame state until the next next() call.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Write a generator chunker(data, chunk_size) yielding slices of a dataset',
              difficulty: 'intermediate',
              concepts: ['generators', 'yield'],
            },
          ],
          difficulty: 'intermediate',
          estimatedMinutes: 20,
        },

        // ---------------------------------------------------------
        // TOPIC 12.6: GENERATOR EXPRESSIONS
        // ---------------------------------------------------------
        {
          id: 'python-generator-expressions',
          title: 'Generator Expressions',
          slug: 'generator-expressions',
          description:
            'Memory-efficient inline lazy comprehensions using parentheses: (x for x in seq).',
          learningObjectives: [
            'Construct generator expressions with parentheses.',
            'Compare memory footprints of list comprehensions vs generator expressions.',
            'Pass generator expressions directly to sum(), min(), max().',
          ],
          prerequisites: [
            'python-generators-and-yield',
            'python-list-comprehensions',
          ],
          conceptSummary:
            'Generator expressions provide a concise syntax for creating generators inline using parentheses: `(expr for item in iterable)`.',
          detailedExplanation:
            'While `[x*2 for x in range(1000000)]` creates a list occupying 8 MB of RAM immediately, `(x*2 for x in range(1000000))` creates a generator object occupying under 200 bytes. It computes each item only as consumed.',
          syntaxExplanation:
            'import sys\nlist_comp = [x for x in range(10000)] # Consumes memory for 10k ints\ngen_exp = (x for x in range(10000))     # Constant tiny memory footprint\nprint("Gen size in bytes:", sys.getsizeof(gen_exp))',
          howItWorks: [
            'Creates an anonymous code object that yields elements via the iterator protocol.',
          ],
          examples: [
            {
              title: 'Summing Squares Lazily',
              code:
                '# Notice: No extra parentheses needed inside function calls!\ntotal = sum(x**2 for x in range(1, 101))\nprint("Sum of first 100 squares:", total)',
              explanation:
                'Calculates the sum without ever creating an intermediate list.',
            },
          ],
          commonMistakes: [
            {
              mistake: 'Assuming (x for x in seq) creates a tuple.',
              explanation:
                'Parentheses create a generator expression, not a tuple comprehension. Use tuple(x for x in seq) for a tuple.',
            },
          ],
          quickChecks: [
            {
              question:
                'What does (x * 2 for x in range(5)) evaluate to?',
              answer: 'A generator object',
              options: [
                'A tuple of 5 numbers',
                'A generator object',
                'A list',
                'A set',
              ],
              correctAnswer: 1,
              explanation:
                'Parentheses with a comprehension syntax produce a generator object.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Calculate the total character count of a list of sentences using a single generator expression passed to sum()',
              difficulty: 'intermediate',
              concepts: ['generator expressions'],
            },
          ],
          difficulty: 'intermediate',
          estimatedMinutes: 20,
        },

        // ---------------------------------------------------------
        // TOPIC 12.7: DECORATORS
        // ---------------------------------------------------------
        {
          id: 'python-decorators',
          title: 'Decorators and @wraps',
          slug: 'decorators',
          description:
            'Metaprogramming with function wrappers, timing, logging, and preserving metadata with functools.wraps.',
          learningObjectives: [
            'Define custom decorator functions.',
            'Use the @decorator syntax.',
            'Preserve docstrings and function names with @functools.wraps.',
            'Write decorators that accept arguments.',
          ],
          prerequisites: [
            'python-closures',
            'python-higher-order-functions',
            'python-kwargs',
          ],
          conceptSummary:
            'A decorator is a function that takes another function, extends its behavior without modifying its source code, and returns a callable.',
          detailedExplanation:
            'The `@my_decorator` syntax is syntactic sugar for `my_function = my_decorator(my_function)`. Standard decorators use `*args, **kwargs` in an inner wrapper to accommodate any signature. `functools.wraps` ensures `__name__` and `__doc__` are preserved.',
          syntaxExplanation:
            'from functools import wraps\n\ndef my_decorator(fn):\n    @wraps(fn)\n    def wrapper(*args, **kwargs):\n        # Code before\n        res = fn(*args, **kwargs)\n        # Code after\n        return res\n    return wrapper',
          howItWorks: [
            'Rebinds function identifier to the wrapper returned by decorator at load time.',
          ],
          examples: [
            {
              title: 'Execution Timing Benchmark Decorator',
              code:
                'import time\nfrom functools import wraps\n\ndef measure_time(fn):\n    @wraps(fn)\n    def wrapper(*args, **kwargs):\n        t0 = time.perf_counter()\n        result = fn(*args, **kwargs)\n        duration = time.perf_counter() - t0\n        print(f"[{fn.__name__}] executed in {duration:.6f}s")\n        return result\n    return wrapper\n\n@measure_time\ndef compute_squares(n):\n    return sum(i * i for i in range(n))\n\nprint("Total:", compute_squares(100000))',
              explanation:
                'Cleanly benchmarks execution time transparently using a decorator.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Omitting @functools.wraps(fn) inside the decorator.',
              explanation:
                'Causes the decorated function to lose its identity, taking the wrapper name and docstring.',
            },
          ],
          quickChecks: [
            {
              question:
                'What is the syntax @log_call above def process(): equivalent to?',
              answer: 'process = log_call(process)',
              options: [
                'log_call = process()',
                'process = log_call(process)',
                'log_call.process()',
                'process.apply(log_call)',
              ],
              correctAnswer: 1,
              explanation:
                "@decorator is syntactic sugar for reassigning the function to the decorator's return value.",
            },
          ],
          practiceQuestions: [
            {
              title:
                'Write an @authorized_only decorator that checks if user_role == "admin"',
              difficulty: 'intermediate',
              concepts: ['decorators', '@wraps'],
            },
          ],
          difficulty: 'intermediate',
          estimatedMinutes: 25,
        },
      ],
    },

    // =============================================================
    // MODULE 13: ROBUST ERROR & FILE HANDLING
    // =============================================================
    {
      id: 'python-mod-error-file-handling',
      title: 'Robust Error & File Handling',
      order: 13,
      description:
        'Exception handling architectures, custom exceptions, context managers, and handling text, CSV, and JSON files.',
      topics: [
        // ---------------------------------------------------------
        // TOPIC 13.1: EXCEPTION HANDLING
        // ---------------------------------------------------------
        {
          id: 'python-exception-handling',
          title: 'Exception Handling: try, except, else, finally',
          slug: 'exception-handling',
          description:
            'Bulletproofing programs against runtime crashes with structured exception blocks.',
          learningObjectives: [
            'Catch specific exceptions.',
            'Use else for code that runs only if no error occurred.',
            'Use finally for guaranteed resource cleanup.',
            'Access exception details with as err.',
          ],
          prerequisites: ['python-mod-control-flow'],
          conceptSummary:
            'Python handles errors gracefully using `try` (guarded block), `except` (error handlers), `else` (success branch), and `finally` (guaranteed cleanup).',
          detailedExplanation:
            'Exceptions disrupt the normal flow of instructions. Catching specific exceptions (like `ValueError` or `FileNotFoundError`) prevents silent crashes and allows recovery. Bare `except:` clauses should never be used because they intercept system signals like `KeyboardInterrupt`.',
          syntaxExplanation:
            'try:\n    value = int(user_input)\nexcept ValueError as err:\n    print(f"Invalid integer: {err}")\nelse:\n    print("Conversion succeeded:", value)\nfinally:\n    print("Cleanup completed")',
          howItWorks: [
            'CPython searches active frame exception table and unwinds stack until a matching handler is found.',
          ],
          examples: [
            {
              title: 'Safe Division with Full Block',
              code:
                'def safe_divide(a, b):\n    try:\n        res = a / b\n    except ZeroDivisionError:\n        return "Cannot divide by zero!"\n    except TypeError as e:\n        return f"Type mismatch: {e}"\n    else:\n        return f"Result: {res}"\n    finally:\n        # Always executes\n        pass\n\nprint(safe_divide(10, 2))\nprint(safe_divide(10, 0))',
              explanation:
                'Demonstrates handling multiple distinct exceptions.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Using a bare except: or catching generic Exception without re-raising.',
              explanation:
                'Catches critical system interrupts and obscures real bugs. Catch specific exceptions.',
            },
          ],
          quickChecks: [
            {
              question:
                'When does the else block of a try-except statement execute?',
              answer: 'Only when NO exceptions occurred in the try block',
              options: [
                'Always',
                'Only when an exception occurred',
                'Only when NO exceptions occurred in the try block',
                'Never',
              ],
              correctAnswer: 2,
              explanation:
                'The try-else clause executes strictly when no error was raised.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Write a robust float parser that prompts until a valid decimal number is entered',
              difficulty: 'intermediate',
              concepts: ['try-except', 'while'],
            },
          ],
          difficulty: 'intermediate',
          estimatedMinutes: 20,
        },

        // ---------------------------------------------------------
        // TOPIC 13.2: CUSTOM EXCEPTIONS
        // ---------------------------------------------------------
        {
          id: 'python-custom-exceptions',
          title: 'Custom Exceptions',
          slug: 'custom-exceptions',
          description:
            'Creating domain-specific application exception hierarchies inheriting from Exception.',
          learningObjectives: [
            'Subclass the base Exception class.',
            'Build structured application exception trees.',
            'Pass error codes and rich diagnostic metadata.',
          ],
          prerequisites: ['python-exception-handling'],
          conceptSummary:
            'Custom exceptions are user-defined classes inheriting from `Exception` that clarify domain-specific error conditions.',
          detailedExplanation:
            'In professional software, raising generic `ValueError` or `Exception` makes it hard for callers to distinguish between system errors and domain validation errors. Creating custom exception classes allows targeted error handling across service boundaries.',
          syntaxExplanation:
            'class ApplicationError(Exception):\n    """Base error for our application."""\n    pass\n\nclass InsufficientFundsError(ApplicationError):\n    def __init__(self, balance, amount):\n        super().__init__(f"Cannot withdraw ${amount}; balance is only ${balance}")\n        self.balance = balance\n        self.amount = amount',
          howItWorks: [
            'Inherits standard PyExceptionObject traceback and stringification machinery.',
          ],
          examples: [
            {
              title: 'Raising Custom Banking Exceptions',
              code:
                'class BankAccount:\n    def __init__(self, balance):\n        self.balance = balance\n    def withdraw(self, amount):\n        if amount > self.balance:\n            raise InsufficientFundsError(self.balance, amount)\n        self.balance -= amount\n        return self.balance',
              explanation:
                'Raises a rich domain exception with contextual data.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Inheriting from BaseException instead of Exception.',
              explanation:
                'BaseException bypasses normal try-except Exception blocks and is reserved for system exits.',
            },
          ],
          quickChecks: [
            {
              question:
                'From which class should user-defined custom exceptions inherit?',
              answer: 'Exception',
              options: ['BaseException', 'Exception', 'Error', 'Throwable'],
              correctAnswer: 1,
              explanation:
                'Custom exceptions should always inherit from Exception.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Create a ValidationError hierarchy with FieldMissingError and InvalidFormatError',
              difficulty: 'intermediate',
              concepts: ['custom exceptions', 'inheritance'],
            },
          ],
          difficulty: 'intermediate',
          estimatedMinutes: 20,
        },

        // ---------------------------------------------------------
        // TOPIC 13.3: CONTEXT MANAGERS
        // ---------------------------------------------------------
        {
          id: 'python-context-managers',
          title: 'Context Managers and the with Statement',
          slug: 'context-managers',
          description:
            'Automated resource lifecycle management using with, __enter__, and __exit__ (or @contextmanager).',
          learningObjectives: [
            'Use with for leak-free resource management.',
            'Implement __enter__ and __exit__ protocols.',
            'Use contextlib.contextmanager generator decorator.',
          ],
          prerequisites: ['python-exception-handling'],
          conceptSummary:
            'Context managers guarantee setup and teardown actions (like closing files or database connections) using `with`.',
          detailedExplanation:
            'The `with` statement guarantees that resources are properly cleaned up even if exceptions are thrown. A context manager implements `__enter__()` (setup, returns resource) and `__exit__(exc_type, exc_val, exc_tb)` (teardown, handles errors).',
          syntaxExplanation:
            'with open("data.txt", "r") as f:\n    content = f.read()\n# File is guaranteed closed here!',
          howItWorks: [
            'CPython wraps with block in SETUP_WITH bytecode, invoking __exit__ on all exit paths.',
          ],
          examples: [
            {
              title: 'Custom Database Connection Mock Context Manager',
              code:
                'class DatabaseSession:\n    def __enter__(self):\n        print("[DB] Opening transaction connection...")\n        return self\n    def __exit__(self, exc_type, exc_val, exc_tb):\n        if exc_type:\n            print(f"[DB] Rolling back due to: {exc_val}")\n        else:\n            print("[DB] Committing changes cleanly.")\n        print("[DB] Closing connection.")\n        return False # Do not suppress exception\n\nwith DatabaseSession():\n    print("Executing SQL queries inside safe context")',
              explanation:
                'Implements an enterprise connection manager with automatic rollback on error.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Forgetting that __exit__ returning True suppresses the exception.',
              explanation:
                'Only return True from __exit__ if you intentionally want to swallow the error.',
            },
          ],
          quickChecks: [
            {
              question:
                'Which two special methods must a class implement to be used as a context manager?',
              answer: '__enter__ and __exit__',
              options: [
                '__open__ and __close__',
                '__enter__ and __exit__',
                '__start__ and __stop__',
                '__init__ and __del__',
              ],
              correctAnswer: 1,
              explanation:
                'The context manager protocol is defined by __enter__ and __exit__.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Create a TimerContext context manager that logs execution duration of a with block',
              difficulty: 'intermediate',
              concepts: ['context managers', '__enter__', '__exit__'],
            },
          ],
          difficulty: 'intermediate',
          estimatedMinutes: 25,
        },

        // ---------------------------------------------------------
        // TOPIC 13.4: FILE HANDLING
        // ---------------------------------------------------------
        {
          id: 'python-file-handling',
          title: 'Working with Text and Binary Files',
          slug: 'file-handling',
          description:
            'Reading, writing, appending, and encoding text and binary files safely.',
          learningObjectives: [
            'Open files in read (r), write (w), and append (a) modes.',
            'Read files line-by-line using iterators.',
            'Specify UTF-8 encoding explicitly.',
          ],
          prerequisites: ['python-context-managers'],
          conceptSummary:
            'Files are manipulated using `open(filename, mode, encoding="utf-8")` within a `with` statement.',
          detailedExplanation:
            'Always specify `encoding="utf-8"` explicitly when opening text files to ensure cross-platform compatibility across Windows, Linux, and macOS. Use `r` for reading, `w` for truncating and writing, `a` for appending, and `b` for raw binary bytes.',
          syntaxExplanation:
            'with open("log.txt", "a", encoding="utf-8") as f:\n    f.write("New event logged\\n")',
          howItWorks: [
            "Underlying OS file descriptors are managed by Python's io.TextIOWrapper.",
          ],
          examples: [
            {
              title: 'Efficient Line-by-Line File Processing',
              code:
                '# Iterates directly over file object without loading entire file into memory:\n# with open("large_dataset.txt", "r", encoding="utf-8") as file:\n#     for line_num, line in enumerate(file, 1):\n#         if "ERROR" in line:\n#             print(f"Line {line_num}: {line.strip()}")',
              explanation:
                'Streams massive files line by line in O(1) memory.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Omitting encoding="utf-8" on Windows, leading to UnicodeDecodeError.',
              explanation:
                'Windows defaults to cp1252 if encoding is omitted; always pass encoding="utf-8".',
            },
          ],
          quickChecks: [
            {
              question:
                'Which file mode truncates existing file contents before writing?',
              answer: '"w"',
              options: ['"r"', '"a"', '"w"', '"x"'],
              correctAnswer: 2,
              explanation:
                '"w" mode overwrites and truncates the existing file.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Write a function copy_file(source, dest) using buffered streaming',
              difficulty: 'intermediate',
              concepts: ['file handling', 'open'],
            },
          ],
          difficulty: 'intermediate',
          estimatedMinutes: 20,
        },

        // ---------------------------------------------------------
        // TOPIC 13.5: JSON AND CSV
        // ---------------------------------------------------------
        {
          id: 'python-json-csv-handling',
          title: 'JSON and CSV Serialization',
          slug: 'json-csv-handling',
          description:
            'Reading and writing structured data using the built-in json and csv modules.',
          learningObjectives: [
            'Serialize/deserialize JSON with dumps(), loads(), dump(), and load().',
            'Read/write CSVs with csv.reader and csv.DictWriter.',
            'Handle custom object JSON serialization.',
          ],
          prerequisites: [
            'python-file-handling',
            'python-dictionaries',
          ],
          conceptSummary:
            'The `json` module parses JSON strings and files; the `csv` module parses tabular comma-separated values.',
          detailedExplanation:
            'JSON and CSV are the two most ubiquitous formats for web APIs and data science. Use `json.loads(s)` for parsing strings and `json.dump(obj, f, indent=2)` for saving to files. Use `csv.DictReader` and `csv.DictWriter` to process CSV files as dictionaries keyed by header names.',
          syntaxExplanation:
            'import json, csv\n# JSON conversion\ndata = json.loads(\'{"user": "Alex", "score": 98}\')\njson_text = json.dumps(data, indent=2)',
          howItWorks: [
            'json maps Python dicts/lists to JSON objects/arrays; csv handles escaping and delimiters.',
          ],
          examples: [
            {
              title: 'DictReader CSV Processing',
              code:
                'import csv\n# Sample parsing pattern:\n# with open("users.csv", "r", encoding="utf-8") as f:\n#     reader = csv.DictReader(f)\n#     for row in reader:\n#         print(row["name"], row["email"])',
              explanation:
                'Reads CSV data directly as dictionaries mapped to column headers.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Attempting to serialize datetime or custom class objects directly with json.dumps without a custom serializer.',
              explanation:
                'TypeError: Object is not JSON serializable. Provide a default=str or custom JSONEncoder.',
            },
          ],
          quickChecks: [
            {
              question:
                'What is the difference between json.load and json.loads?',
              answer:
                'json.load reads from a file pointer; json.loads parses a string',
              options: [
                'json.load is for lists; json.loads is for sets',
                'json.load reads from a file pointer; json.loads parses a string',
                'json.loads is deprecated',
                'They are exact aliases',
              ],
              correctAnswer: 1,
              explanation: 'The "s" in loads stands for string.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Parse a JSON string of inventory records and calculate the sum of prices',
              difficulty: 'intermediate',
              concepts: ['json', 'csv'],
            },
          ],
          difficulty: 'intermediate',
          estimatedMinutes: 20,
        },
      ],
    },

    // =============================================================
    // MODULE 14: OBJECT-ORIENTED PROGRAMMING (OOP)
    // =============================================================
    {
      id: 'python-mod-oop-foundations',
      title: 'Object-Oriented Programming (OOP)',
      order: 14,
      description:
        'Classes, objects, constructors, attributes, methods, encapsulation, and property decorators.',
      topics: [
        // ---------------------------------------------------------
        // TOPIC 14.1: CLASSES AND OBJECTS
        // ---------------------------------------------------------
        {
          id: 'python-classes-and-objects',
          title: 'Classes and Objects',
          slug: 'classes-and-objects',
          description:
            'Blueprint architecture: defining classes and instantiating objects.',
          learningObjectives: [
            'Define classes using the class keyword.',
            'Instantiate objects from a class.',
            'Understand types as user-defined classes.',
          ],
          prerequisites: ['python-defining-functions'],
          conceptSummary:
            'A class is a blueprint for creating objects (instances), encapsulating data attributes and operational methods.',
          detailedExplanation:
            'Object-Oriented Programming models real-world concepts as computational entities. A class defines the blueprint, structure, and capabilities; an instance (object) is a concrete manifestation residing in memory with its own unique state.',
          syntaxExplanation:
            'class Car:\n    pass\n\nmy_car = Car() # Instantiating an object of class Car',
          howItWorks: [
            'CPython creates a PyTypeObject representing the class, instances allocate PyObject on the heap.',
          ],
          examples: [
            {
              title: 'Creating and Inspecting Instances',
              code:
                'class Device:\n    pass\n\nd1 = Device()\nd2 = Device()\nprint("Is d1 a Device?", isinstance(d1, Device))\nprint("Are d1 and d2 distinct?", d1 is not d2)',
              explanation:
                'Instantiates two distinct objects of the same class.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Naming classes in snake_case instead of PascalCase (CamelCase).',
              explanation:
                'PEP 8 specifies PascalCase (e.g. ShoppingCart, DatabaseConnection) for class names.',
            },
          ],
          quickChecks: [
            {
              question:
                'What is an instance of a class called in Python?',
              answer: 'An object',
              options: ['A function', 'An object', 'A module', 'A lambda'],
              correctAnswer: 1,
              explanation:
                'An instantiated class in memory is termed an object.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Define a Book class and instantiate two different book objects',
              difficulty: 'intermediate',
              concepts: ['class', 'object'],
            },
          ],
          difficulty: 'intermediate',
          estimatedMinutes: 20,
        },

        // ---------------------------------------------------------
        // TOPIC 14.2: CONSTRUCTORS AND SELF
        // ---------------------------------------------------------
        {
          id: 'python-constructors-and-self',
          title: 'Constructors (__init__) and self',
          slug: 'constructors-and-self',
          description:
            'Initializing object state with __init__ and understanding the explicit self parameter.',
          learningObjectives: [
            'Write constructors using def __init__(self, ...).',
            'Understand self as the explicit reference to the current instance.',
            'Initialize instance attributes.',
          ],
          prerequisites: ['python-classes-and-objects'],
          conceptSummary:
            'The `__init__` constructor initializes a newly created object; `self` represents the instance being operated on.',
          detailedExplanation:
            'When you call `Car("Tesla", 2024)`, Python calls `Car.__new__()` to allocate the object and then passes that object as `self` to `Car.__init__()`. Every instance method must accept `self` as its first parameter to access that specific object\'s state.',
          syntaxExplanation:
            'class Person:\n    def __init__(self, name, age):\n        self.name = name # Instance attribute\n        self.age = age',
          howItWorks: [
            "Binds instance attributes to the instance's internal __dict__ hash table.",
          ],
          examples: [
            {
              title: 'Bank Account Class with Constructor',
              code:
                'class BankAccount:\n    def __init__(self, owner, balance=0.0):\n        self.owner = owner\n        self.balance = balance\n\nacct = BankAccount("Taylor", 500.0)\nprint(f"Owner: {acct.owner}, Balance: ${acct.balance}")',
              explanation:
                'Initializes account owner and initial balance via __init__.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Forgetting self as the first parameter in __init__ or instance methods.',
              explanation:
                'Python passes the instance automatically; omitting self triggers TypeError: takes X arguments but Y were given.',
            },
          ],
          quickChecks: [
            {
              question:
                'What does the self parameter represent in Python class methods?',
              answer:
                'The specific instance of the class currently being invoked',
              options: [
                'The global module',
                'The class type object itself',
                'The specific instance of the class currently being invoked',
                'The parent class',
              ],
              correctAnswer: 2,
              explanation:
                'self is the explicit reference to the calling instance.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Write an Employee class with name, salary, and department initialized in __init__',
              difficulty: 'intermediate',
              concepts: ['__init__', 'self'],
            },
          ],
          difficulty: 'intermediate',
          estimatedMinutes: 20,
        },

        // ---------------------------------------------------------
        // TOPIC 14.3: INSTANCE VS CLASS VARIABLES
        // ---------------------------------------------------------
        {
          id: 'python-instance-vs-class-variables',
          title: 'Instance vs Class Variables',
          slug: 'instance-vs-class-variables',
          description:
            'Distinguishing between state unique to each instance and state shared across all instances.',
          learningObjectives: [
            'Define class variables shared by all instances.',
            'Define instance variables scoped to individual objects.',
            'Understand attribute lookup resolution order.',
          ],
          prerequisites: ['python-constructors-and-self'],
          conceptSummary:
            'Class variables are shared by all instances of a class; instance variables are unique to each object.',
          detailedExplanation:
            'Class variables are declared directly inside the class body outside any method. They are shared across all instances. Modifying a class variable through the class (`Class.var = x`) updates it for everyone. Assigning to `self.var` creates a new instance variable shadowing the class variable.',
          syntaxExplanation:
            'class Dog:\n    species = "Canis familiaris" # Class variable (shared)\n    def __init__(self, name):   # Instance variable (unique)\n        self.name = name',
          howItWorks: [
            'Python checks instance __dict__ first; if not found, it checks class __dict__.',
          ],
          examples: [
            {
              title: 'Tracking Total Instances via Class Variable',
              code:
                'class User:\n    total_users = 0 # Class variable\n    def __init__(self, username):\n        self.username = username\n        User.total_users += 1 # Increments shared counter\n\nu1 = User("alice")\nu2 = User("bob")\nprint("Total registered users:", User.total_users) # 2',
              explanation:
                'Uses a class variable as a shared counter across all instances.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Using a mutable class variable like class Dog: tricks = [] and appending to it.',
              explanation:
                'All dogs share that same list! Every dog gets every trick. Initialize mutable attributes in __init__.',
            },
          ],
          quickChecks: [
            {
              question: 'Where are class variables stored?',
              answer: 'In the class namespace dictionary (__dict__)',
              options: [
                'In global memory',
                'In each instance dictionary',
                'In the class namespace dictionary (__dict__)',
                'In the heap garbage collector',
              ],
              correctAnswer: 2,
              explanation:
                'Class variables reside on the class type object itself.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Implement a Product class with a shared discount_rate class variable',
              difficulty: 'intermediate',
              concepts: ['class variables', 'instance variables'],
            },
          ],
          difficulty: 'intermediate',
          estimatedMinutes: 20,
        },

        // ---------------------------------------------------------
        // TOPIC 14.4: METHODS TYPES
        // ---------------------------------------------------------
        {
          id: 'python-methods-types',
          title: 'Instance, Class, and Static Methods',
          slug: 'methods-types',
          description:
            'Using @classmethod (cls) and @staticmethod alongside standard instance methods (self).',
          learningObjectives: [
            'Implement instance methods bound to self.',
            'Create alternative constructors with @classmethod and cls.',
            'Implement utility methods with @staticmethod.',
          ],
          prerequisites: ['python-instance-vs-class-variables'],
          conceptSummary:
            'Instance methods operate on `self`; `@classmethod` operates on `cls`; `@staticmethod` operates without implicit parameters.',
          detailedExplanation:
            '1. Instance methods receive the object (`self`). 2. Class methods (`@classmethod`) receive the class itself (`cls`) as first argument and are widely used as alternative constructors (e.g. `from_dict`, `from_json`). 3. Static methods (`@staticmethod`) behave like plain functions placed inside a class for logical grouping.',
          syntaxExplanation:
            'class Pizza:\n    @classmethod\n    def margherita(cls):\n        return cls(["mozzarella", "tomatoes"])\n    @staticmethod\n    def is_valid_size(diameter):\n        return diameter > 0',
          howItWorks: [
            'Descriptor protocol wraps functions in PyMethodDescr, PyClassMethod, or PyStaticMethod.',
          ],
          examples: [
            {
              title: 'Alternative Constructor Factory Pattern',
              code:
                'class Date:\n    def __init__(self, year, month, day):\n        self.year = year\n        self.month = month\n        self.day = day\n    @classmethod\n    def from_string(cls, date_str):\n        y, m, d = map(int, date_str.split("-"))\n        return cls(y, m, d) # Instantiates new object\n\nd = Date.from_string("2025-10-15")\nprint(f"Created: {d.year}/{d.month}/{d.day}")',
              explanation:
                'Demonstrates the canonical classmethod alternative constructor pattern.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Attempting to access self from inside a @classmethod or @staticmethod.',
              explanation:
                'Neither has access to an instance; classmethod only has access to cls.',
            },
          ],
          quickChecks: [
            {
              question:
                'What is the conventional name for the first argument of a @classmethod in Python?',
              answer: 'cls',
              options: ['self', 'cls', 'clazz', 'type'],
              correctAnswer: 1,
              explanation:
                'PEP 8 specifies cls as the first parameter of a class method.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Create a Temperature class with a from_fahrenheit classmethod factory',
              difficulty: 'intermediate',
              concepts: ['@classmethod', '@staticmethod'],
            },
          ],
          difficulty: 'intermediate',
          estimatedMinutes: 25,
        },

        // ---------------------------------------------------------
        // TOPIC 14.5: ENCAPSULATION AND PROPERTIES
        // ---------------------------------------------------------
        {
          id: 'python-encapsulation-and-properties',
          title: 'Encapsulation and @property',
          slug: 'encapsulation-and-properties',
          description:
            'Data hiding, private conventions (_ and __), and Pythonic getters/setters using @property.',
          learningObjectives: [
            'Understand Python privacy conventions (_single_leading vs __double_leading).',
            'Understand name mangling.',
            'Use @property and @setter for validated attribute access.',
          ],
          prerequisites: ['python-methods-types'],
          conceptSummary:
            'Encapsulation bundles data and restricts direct access. `@property` turns methods into attributes with getter/setter logic.',
          detailedExplanation:
            'In Python, `_protected` indicates an internal attribute by convention. `__private` triggers name mangling (`_ClassName__private`). Rather than writing Java-style `get_age()` and `set_age()`, Python uses `@property` to access methods like attributes while executing validation logic.',
          syntaxExplanation:
            'class Account:\n    def __init__(self, balance):\n        self._balance = balance\n    @property\n    def balance(self):\n        return self._balance\n    @balance.setter\n    def balance(self, value):\n        if value < 0: raise ValueError("Negative balance")\n        self._balance = value',
          howItWorks: [
            '@property implements the descriptor protocol (__get__, __set__) on class attributes.',
          ],
          examples: [
            {
              title: 'Validated Circle Radius Property',
              code:
                'class Circle:\n    def __init__(self, radius):\n        self.radius = radius\n    @property\n    def radius(self):\n        return self._radius\n    @radius.setter\n    def radius(self, val):\n        if val <= 0: raise ValueError("Radius must be positive")\n        self._radius = val\n    @property\n    def area(self):\n        return 3.14159 * (self._radius ** 2)\n\nc = Circle(5)\nprint("Area:", c.area) # Accessed like an attribute, computed dynamically!',
              explanation:
                'Uses property to validate radius and dynamically calculate area.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Naming the underlying private storage variable the exact same name as the @property method.',
              explanation:
                'Causes infinite recursion as the getter calls itself. Prefix the internal variable with an underscore (e.g. self._radius).',
            },
          ],
          quickChecks: [
            {
              question:
                'What does Python do when an attribute starts with two underscores (e.g. __password)?',
              answer: 'Name mangling (_ClassName__password)',
              options: [
                'Makes it completely read-only in C',
                'Name mangling (_ClassName__password)',
                'Encrypts the value in memory',
                'Throws an error',
              ],
              correctAnswer: 1,
              explanation:
                'Python mangles double leading underscores with the class name.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Build a TemperatureCelsius class with a fahrenheit property that converts automatically',
              difficulty: 'intermediate',
              concepts: ['@property', '@setter'],
            },
          ],
          difficulty: 'intermediate',
          estimatedMinutes: 25,
        },
      ],
    },

    // =============================================================
    // MODULE 15: ADVANCED OOP & CLASS DESIGN
    // =============================================================
    {
      id: 'python-mod-advanced-oop',
      title: 'Advanced OOP & Class Design',
      order: 15,
      description:
        'Inheritance, MRO, super(), polymorphism, abstract classes, dunder methods, and dataclasses.',
      topics: [
        // ---------------------------------------------------------
        // TOPIC 15.1: INHERITANCE AND SUPER
        // ---------------------------------------------------------
        {
          id: 'python-inheritance-and-super',
          title: 'Inheritance and super()',
          slug: 'inheritance-and-super',
          description:
            'Single and multiple inheritance, method overriding, and cooperative calls with super().',
          learningObjectives: [
            'Inherit from parent classes.',
            'Override parent methods.',
            'Call parent implementations using super().',
          ],
          prerequisites: ['python-encapsulation-and-properties'],
          conceptSummary:
            'Inheritance enables a child class to acquire attributes and methods from a parent class, using `super()` to invoke parent behavior.',
          detailedExplanation:
            'Inheritance establishes an "is-a" relationship (e.g. `Dog` is an `Animal`). When a child class defines a method with the identical name as a parent, it overrides it. Calling `super().method_name()` executes the parent\'s implementation, ensuring parent initialization runs properly.',
          syntaxExplanation:
            'class Parent:\n    def __init__(self, name):\n        self.name = name\n\nclass Child(Parent):\n    def __init__(self, name, grade):\n        super().__init__(name) # Invokes Parent __init__\n        self.grade = grade',
          howItWorks: [
            'super() delegates method resolution dynamically along the class Method Resolution Order (MRO).',
          ],
          examples: [
            {
              title: 'Vehicle and ElectricCar Hierarchy',
              code:
                'class Vehicle:\n    def __init__(self, make, model):\n        self.make = make\n        self.model = model\n    def drive(self):\n        return f"{self.make} {self.model} driving on road."\n\nclass ElectricCar(Vehicle):\n    def __init__(self, make, model, battery_kwh):\n        super().__init__(make, model)\n        self.battery_kwh = battery_kwh\n    def drive(self):\n        # Extends parent behavior\n        return super().drive() + f" (Silent electric battery: {self.battery_kwh}kWh)"\n\ncar = ElectricCar("Tesla", "Model 3", 75)\nprint(car.drive())',
              explanation:
                'Extends parent initialization and methods cleanly using super().',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Hardcoding parent class names like Parent.__init__(self) instead of super().__init__().',
              explanation:
                'Breaks cooperative multiple inheritance and MRO flexibility. Always use super().',
            },
          ],
          quickChecks: [
            {
              question:
                'What is the purpose of the super() function in Python?',
              answer:
                'To access and invoke methods from parent/ancestor classes in the MRO',
              options: [
                'To create global variables',
                'To access and invoke methods from parent/ancestor classes in the MRO',
                'To boost memory allocation',
                'To terminate a class',
              ],
              correctAnswer: 1,
              explanation:
                'super() provides a dynamic proxy to delegate calls to parent classes.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Create a Shape base class and a Rectangle subclass that calculates area using super()',
              difficulty: 'intermediate',
              concepts: ['inheritance', 'super'],
            },
          ],
          difficulty: 'intermediate',
          estimatedMinutes: 20,
        },

        // ---------------------------------------------------------
        // TOPIC 15.2: MRO AND MULTIPLE INHERITANCE
        // ---------------------------------------------------------
        {
          id: 'python-mro-multiple-inheritance',
          title: 'Multiple Inheritance and MRO',
          slug: 'mro-multiple-inheritance',
          description:
            'Inheriting from multiple parents, the diamond problem, and the C3 linearization algorithm.',
          learningObjectives: [
            'Define classes inheriting from multiple parent classes.',
            'Inspect the Method Resolution Order via Class.mro().',
            'Understand how C3 linearization resolves the Diamond Problem.',
          ],
          prerequisites: ['python-inheritance-and-super'],
          conceptSummary:
            'Multiple inheritance allows a class to inherit from multiple parents; Python resolves call order deterministically using C3 Linearization (MRO).',
          detailedExplanation:
            'When multiple parents define the same method (the "diamond problem"), Python uses the C3 Linearization algorithm to determine a strict, monotonic method resolution order. You can inspect any class\'s resolution order with `ClassName.mro()` or `ClassName.__mro__`.',
          syntaxExplanation:
            'class A: pass\nclass B(A): pass\nclass C(A): pass\nclass D(B, C): pass\nprint(D.mro()) # [D, B, C, A, object]',
          howItWorks: [
            'C3 linearization merges parent MRO lists guaranteeing local precedence and monotonicity.',
          ],
          examples: [
            {
              title: 'Mix-in Pattern Architecture',
              code:
                'class JSONSerializableMixin:\n    def to_json(self):\n        import json\n        return json.dumps(self.__dict__)\n\nclass Model:\n    def __init__(self, id_val):\n        self.id = id_val\n\nclass User(Model, JSONSerializableMixin):\n    def __init__(self, id_val, name):\n        super().__init__(id_val)\n        self.name = name\n\nu = User(42, "Alex")\nprint(u.to_json())',
              explanation:
                'Uses multiple inheritance to mix in standalone serialization functionality.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Creating an inconsistent MRO order that raises TypeError: Cannot create a consistent method resolution order.',
              explanation:
                'Ensure subclass relationships do not conflict in the inheritance hierarchy.',
            },
          ],
          quickChecks: [
            {
              question:
                'Which algorithm does Python use to compute the Method Resolution Order (MRO)?',
              answer: 'C3 Linearization',
              options: [
                'Depth-First Search',
                'C3 Linearization',
                'Breadth-First Search',
                'Dijkstra Algorithm',
              ],
              correctAnswer: 1,
              explanation:
                'Python 2.3+ uses the C3 Linearization algorithm for MRO calculation.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Trace and print the MRO of a diamond inheritance hierarchy',
              difficulty: 'intermediate',
              concepts: ['MRO', 'multiple inheritance'],
            },
          ],
          difficulty: 'intermediate',
          estimatedMinutes: 25,
        },

        // ---------------------------------------------------------
        // TOPIC 15.3: POLYMORPHISM AND DUCK TYPING
        // ---------------------------------------------------------
        {
          id: 'python-polymorphism-and-duck-typing',
          title: 'Polymorphism and Duck Typing',
          slug: 'polymorphism-and-duck-typing',
          description:
            '"If it walks like a duck and quacks like a duck, it is a duck" — dynamic interface compliance.',
          learningObjectives: [
            'Understand duck typing philosophy.',
            'Write polymorphic functions accepting any object implementing the required interface.',
            'Compare nominal typing with structural duck typing.',
          ],
          prerequisites: ['python-inheritance-and-super'],
          conceptSummary:
            'Polymorphism allows different classes to be used through the same interface; duck typing prioritizes object behavior over explicit type.',
          detailedExplanation:
            'Unlike static languages where types must share an explicit inheritance interface, Python cares only about whether an object implements the required methods at runtime. If a function needs `.read()`, it works with a File, an HTTP response, or an in-memory `StringIO` without caring about their class hierarchy.',
          syntaxExplanation:
            'def render_sound(entity):\n    # Works with Dog, Cat, Duck, or Robot as long as it has .speak()!\n    print(entity.speak())',
          howItWorks: [
            'Dynamic dispatch checks for attribute existence on the object at runtime.',
          ],
          examples: [
            {
              title: 'Polymorphic Payment Processors',
              code:
                'class StripeProcessor:\n    def process_payment(self, amt): return f"Stripe charged ${amt}"\n\nclass PayPalProcessor:\n    def process_payment(self, amt): return f"PayPal charged ${amt}"\n\ndef checkout(processor, amount):\n    print(processor.process_payment(amount))\n\ncheckout(StripeProcessor(), 100)\ncheckout(PayPalProcessor(), 50)',
              explanation:
                'Different classes interchange seamlessly because they share the same method signature.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Excessive isinstance() type-checking that destroys duck typing and flexibility.',
              explanation:
                'Trust the object interface (EAFP: Easier to Ask for Forgiveness than Permission).',
            },
          ],
          quickChecks: [
            {
              question:
                'What does "Duck Typing" mean in Python?',
              answer:
                "An object's suitability is determined by the presence of methods/attributes, not its explicit inheritance type",
              options: [
                'Code designed specifically for biological systems',
                "An object's suitability is determined by the presence of methods/attributes, not its explicit inheritance type",
                'Enforcing strict class inheritance',
                'Compiling Python to C',
              ],
              correctAnswer: 1,
              explanation:
                'Behavior and capabilities supersede explicit type hierarchy in Python.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Create two distinct logger classes (ConsoleLogger, FileLogger) with a common log(msg) interface',
              difficulty: 'intermediate',
              concepts: ['duck typing', 'polymorphism'],
            },
          ],
          difficulty: 'intermediate',
          estimatedMinutes: 20,
        },

        // ---------------------------------------------------------
        // TOPIC 15.4: ABSTRACT CLASSES
        // ---------------------------------------------------------
        {
          id: 'python-abstract-classes',
          title: 'Abstract Base Classes (abc.ABC)',
          slug: 'abstract-classes',
          description:
            'Defining formal contractual interfaces using abc.ABC and @abstractmethod.',
          learningObjectives: [
            'Define abstract classes with abc.ABC.',
            'Enforce subclass method implementation with @abstractmethod.',
            'Understand why instantiating an incomplete abstract class raises TypeError.',
          ],
          prerequisites: ['python-polymorphism-and-duck-typing'],
          conceptSummary:
            'Abstract Base Classes (`ABC`) define blueprint interfaces that subclasses must implement before they can be instantiated.',
          detailedExplanation:
            'When building large software systems or plugin architectures, relying purely on informal duck typing can lead to missing methods caught only at runtime. Subclassing `abc.ABC` and marking methods with `@abstractmethod` enforces at instantiation time that subclasses implement all required contracts.',
          syntaxExplanation:
            'from abc import ABC, abstractmethod\n\nclass StoragePlugin(ABC):\n    @abstractmethod\n    def upload(self, file_path):\n        pass',
          howItWorks: [
            'CPython checks __abstractmethods__ set during object instantiation and blocks creation if non-empty.',
          ],
          examples: [
            {
              title: 'Enforcing Data Repository Contracts',
              code:
                'from abc import ABC, abstractmethod\n\nclass UserRepository(ABC):\n    @abstractmethod\n    def get_by_id(self, user_id):\n        pass\n    @abstractmethod\n    def save(self, user):\n        pass\n\nclass PostgresUserRepository(UserRepository):\n    def get_by_id(self, user_id): return {"id": user_id, "name": "Sam"}\n    def save(self, user): return True\n\nrepo = PostgresUserRepository()\nprint(repo.get_by_id(1))',
              explanation:
                'Enforces complete repository contract implementation.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Trying to instantiate an abstract class directly.',
              explanation:
                "Raises TypeError: Can't instantiate abstract class with abstract methods.",
            },
          ],
          quickChecks: [
            {
              question:
                'What happens if a subclass fails to implement an @abstractmethod of its parent ABC?',
              answer:
                'TypeError is raised when attempting to instantiate the subclass',
              options: [
                'It runs with a warning',
                'TypeError is raised when attempting to instantiate the subclass',
                'The method returns None automatically',
                'The compiler deletes the class',
              ],
              correctAnswer: 1,
              explanation:
                'Python prevents instantiating subclasses with unfulfilled abstract methods.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Define an abstract NotificationSender with an abstract send(recipient, message) method',
              difficulty: 'intermediate',
              concepts: ['abc.ABC', '@abstractmethod'],
            },
          ],
          difficulty: 'intermediate',
          estimatedMinutes: 25,
        },

        // ---------------------------------------------------------
        // TOPIC 15.5: DUNDER METHODS
        // ---------------------------------------------------------
        {
          id: 'python-magic-dunder-methods',
          title: 'Magic (Dunder) Methods',
          slug: 'magic-dunder-methods',
          description:
            'Operator overloading and object lifecycle using __str__, __repr__, __len__, __eq__, and __getitem__.',
          learningObjectives: [
            'Distinguish between __str__ (user-friendly) and __repr__ (developer/debugging).',
            'Overload arithmetic operators (__add__, __sub__).',
            'Implement container emulation (__len__, __getitem__).',
          ],
          prerequisites: ['python-abstract-classes'],
          conceptSummary:
            'Magic (dunder) methods allow custom classes to hook into Python operators, built-in functions, and language protocols.',
          detailedExplanation:
            'Dunder (double-underscore) methods enable operator overloading and language integration: `print(obj)` calls `__str__`, `len(obj)` calls `__len__`, `obj[i]` calls `__getitem__`, and `a + b` calls `a.__add__(b)`. Writing idiomatic dunder methods makes custom classes feel like built-in types.',
          syntaxExplanation:
            'class Vector:\n    def __init__(self, x, y):\n        self.x, self.y = x, y\n    def __repr__(self):\n        return f"Vector({self.x}, {self.y})"\n    def __add__(self, other):\n        return Vector(self.x + other.x, self.y + other.y)\n    def __eq__(self, other):\n        return self.x == other.x and self.y == other.y',
          howItWorks: [
            'CPython routes C slots (tp_str, tp_as_number, tp_as_sequence) to corresponding Python dunder methods.',
          ],
          examples: [
            {
              title: 'Custom Deck with __len__ and __getitem__',
              code:
                'class Deck:\n    def __init__(self):\n        self._cards = ["A♠", "K♥", "Q♦", "J♣"]\n    def __len__(self):\n        return len(self._cards)\n    def __getitem__(self, position):\n        return self._cards[position]\n\ndeck = Deck()\nprint("Card count:", len(deck)) # 4\nprint("First card:", deck[0])   # A♠\nprint("Slicing:", deck[:2])     # Automatic slice support!',
              explanation:
                'Implementing __len__ and __getitem__ provides indexing, slicing, and for-loop iteration for free!',
            },
          ],
          commonMistakes: [
            {
              mistake: 'Implementing __str__ without __repr__.',
              explanation:
                'If __repr__ is defined, it serves as fallback for __str__. Always define __repr__ first.',
            },
          ],
          quickChecks: [
            {
              question:
                'Which dunder method is called when len(my_object) is invoked?',
              answer: '__len__',
              options: ['__size__', '__count__', '__len__', '__length__'],
              correctAnswer: 2,
              explanation:
                'The built-in len() function invokes __len__().',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Create a Money class with amount and currency implementing __add__ and __repr__',
              difficulty: 'intermediate',
              concepts: ['dunder methods', '__add__', '__repr__'],
            },
          ],
          difficulty: 'intermediate',
          estimatedMinutes: 25,
        },

        // ---------------------------------------------------------
        // TOPIC 15.6: DATACLASSES
        // ---------------------------------------------------------
        {
          id: 'python-dataclasses',
          title: 'Dataclasses (@dataclass)',
          slug: 'dataclasses',
          description:
            'Boilerplate-free data modeling with automatic __init__, __repr__, and __eq__ generators.',
          learningObjectives: [
            'Generate classes using the @dataclass decorator.',
            'Define typed fields with default values.',
            'Use frozen=True for immutability and hashability.',
          ],
          prerequisites: ['python-magic-dunder-methods'],
          conceptSummary:
            'The `@dataclass` decorator automatically writes `__init__`, `__repr__`, `__eq__`, and comparisons based on type annotations.',
          detailedExplanation:
            'Writing repetitive boilerplate classes for storing data requires dozens of lines of `self.x = x`, `__repr__`, and `__eq__`. The standard library `dataclasses` module inspects class type annotations and generates all these standard methods automatically at class definition time.',
          syntaxExplanation:
            'from dataclasses import dataclass, field\n\n@dataclass(frozen=True)\nclass Point:\n    x: float\n    y: float\n    label: str = "origin"',
          howItWorks: [
            'Generates and compiles Python function code objects dynamically for __init__, __repr__, and __eq__.',
          ],
          examples: [
            {
              title: 'Clean Entity Model with Dataclass',
              code:
                'from dataclasses import dataclass\n\n@dataclass\nclass UserProfile:\n    id: int\n    username: str\n    email: str\n    is_active: bool = True\n\nu1 = UserProfile(1, "elena", "elena@example.com")\nu2 = UserProfile(1, "elena", "elena@example.com")\nprint(u1) # UserProfile(id=1, username=\'elena\', email=\'elena@example.com\', is_active=True)\nprint("Equality check:", u1 == u2) # True automatically!',
              explanation:
                'Generates readable representation and structural equality checks out of the box.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Using a mutable default like tags: list = [] inside a dataclass.',
              explanation:
                'Raises ValueError. Use tags: list = field(default_factory=list) for mutable defaults.',
            },
          ],
          quickChecks: [
            {
              question:
                'Which module provides the @dataclass decorator in Python?',
              answer: 'dataclasses',
              options: ['collections', 'dataclasses', 'types', 'models'],
              correctAnswer: 1,
              explanation:
                'The dataclasses module was added to the standard library in Python 3.7.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Create a Product dataclass with id, title, price, and a default_factory for tags',
              difficulty: 'intermediate',
              concepts: ['@dataclass', 'field'],
            },
          ],
          difficulty: 'intermediate',
          estimatedMinutes: 20,
        },
      ],
    },

    // =============================================================
    // MODULE 16: PYTHON STANDARD LIBRARY POWER TOOLS
    // =============================================================
    {
      id: 'python-mod-power-tools',
      title: 'Python Standard Library Power Tools',
      order: 16,
      description:
        'Regular expressions, date/time, specialized collections, itertools, static typing, and testing.',
      topics: [
        // ---------------------------------------------------------
        // TOPIC 16.1: REGULAR EXPRESSIONS
        // ---------------------------------------------------------
        {
          id: 'python-regular-expressions',
          title: 'Regular Expressions (re module)',
          slug: 'regular-expressions',
          description:
            'Pattern matching, searching, compiling, capturing groups, and replacing with re.',
          learningObjectives: [
            'Compile regex patterns with re.compile.',
            'Search and match patterns with re.search and re.findall.',
            'Extract capture groups and perform substitutions with re.sub.',
          ],
          prerequisites: ['python-mod-strings'],
          conceptSummary:
            'The `re` module provides Perl-compatible regular expressions for advanced text search, extraction, and validation.',
          detailedExplanation:
            'Regular expressions define search patterns for string parsing. Raw string literals `r"\\d+"` prevent Python escape issues. Use `re.search()` to find the first match, `re.findall()` to extract all matches, and `re.sub()` to search and replace text.',
          syntaxExplanation:
            'import re\npattern = re.compile(r"^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$")\nmatch = pattern.match("user@example.com")',
          howItWorks: [
            'CPython executes an internal regex engine written in C with bytecode compilation.',
          ],
          examples: [
            {
              title: 'Extracting Phone Numbers and Formatting',
              code:
                'import re\ntext = "Contact: 555-123-4567 or 555-987-6543 for support."\nphone_pattern = r"(\\d{3})-(\\d{3})-(\\d{4})"\nmatches = re.findall(phone_pattern, text)\nprint("Found phones:", matches)\n# Mask phone numbers:\nmasked = re.sub(phone_pattern, r"***-***-\\3", text)\nprint("Masked text:", masked)',
              explanation:
                'Searches and masks sensitive phone numbers using capture group references.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Omitting the raw string prefix r in regex literals, e.g. "\\b" instead of r"\\b".',
              explanation:
                'Python processes backslashes first without r, destroying regex metacharacters.',
            },
          ],
          quickChecks: [
            {
              question:
                'Why should regex patterns be written as raw strings (e.g. r"\\d+") in Python?',
              answer:
                'To prevent Python from interpreting backslashes as string escape sequences',
              options: [
                'To make them run faster',
                'To prevent Python from interpreting backslashes as string escape sequences',
                'To enable Unicode mode',
                'It is required by the compiler',
              ],
              correctAnswer: 1,
              explanation:
                'Raw strings preserve literal backslashes needed by the regex engine.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Write a regex pattern to extract all URLs (http/https) from a block of text',
              difficulty: 'intermediate',
              concepts: ['re', 'findall'],
            },
          ],
          difficulty: 'intermediate',
          estimatedMinutes: 20,
        },

        // ---------------------------------------------------------
        // TOPIC 16.2: DATE AND TIME
        // ---------------------------------------------------------
        {
          id: 'python-date-and-time',
          title: 'Date and Time Operations',
          slug: 'date-and-time',
          description:
            'Working with dates, times, durations, timezone awareness, and strftime/strptime.',
          learningObjectives: [
            'Manipulate dates and timestamps with datetime and timedelta.',
            'Format and parse strings with strftime and strptime.',
            'Handle timezone-aware timestamps with zoneinfo.',
          ],
          prerequisites: ['python-built-in-modules'],
          conceptSummary:
            'The `datetime` and `zoneinfo` modules provide classes for dates, times, intervals, and timezone conversions.',
          detailedExplanation:
            'Use `date` for calendar dates, `time` for clock times, and `datetime` for combined timestamps. `timedelta` represents durations and supports arithmetic (`today + timedelta(days=7)`). Use `strftime` to format datetime into strings and `strptime` to parse strings into datetime objects.',
          syntaxExplanation:
            'from datetime import datetime, timedelta\nnow = datetime.now()\nnext_week = now + timedelta(days=7)\nformatted = now.strftime("%Y-%m-%d %H:%M:%S")',
          howItWorks: [
            'Encapsulates calendar math and POSIX timestamp conversions.',
          ],
          examples: [
            {
              title: 'Parsing and Duration Calculations',
              code:
                'from datetime import datetime\nstart_str = "2025-01-01 08:30:00"\nend_str = "2025-01-03 14:45:00"\nfmt = "%Y-%m-%d %H:%M:%S"\nt1 = datetime.strptime(start_str, fmt)\nt2 = datetime.strptime(end_str, fmt)\ndiff = t2 - t1\nprint(f"Elapsed: {diff.days} days and {diff.seconds // 3600} hours")',
              explanation:
                'Parses timestamps and computes duration differences.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Mixing naive datetimes with timezone-aware datetimes in comparisons or arithmetic.',
              explanation:
                "Raises TypeError: can't compare offset-naive and offset-aware datetimes.",
            },
          ],
          quickChecks: [
            {
              question:
                'What does strptime stand for in datetime operations?',
              answer: 'String Parse Time (parsing strings into datetime objects)',
              options: [
                'String Print Time',
                'String Parse Time',
                'Standard Python Time',
                'System Process Time',
              ],
              correctAnswer: 1,
              explanation:
                'strptime parses string text into datetime structures.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Calculate the number of days until the upcoming New Year',
              difficulty: 'intermediate',
              concepts: ['datetime', 'timedelta'],
            },
          ],
          difficulty: 'intermediate',
          estimatedMinutes: 20,
        },

        // ---------------------------------------------------------
        // TOPIC 16.3: COLLECTIONS MODULE
        // ---------------------------------------------------------
        {
          id: 'python-collections-module',
          title: 'Specialized Collections (collections module)',
          slug: 'collections-module',
          description:
            'High-performance alternatives to general containers: defaultdict, Counter, deque, namedtuple.',
          learningObjectives: [
            'Count frequencies with Counter.',
            'Eliminate KeyError checks with defaultdict.',
            'Implement O(1) double-ended queues with deque.',
            'Define lightweight tuple records with namedtuple.',
          ],
          prerequisites: [
            'python-dictionaries',
            'python-lists',
            'python-tuples',
          ],
          conceptSummary:
            'The `collections` module provides specialized, high-performance container data types beyond standard dict, list, and tuple.',
          detailedExplanation:
            '1. `Counter`: counts hashable objects automatically. 2. `defaultdict`: provides default values for missing keys without raising KeyError. 3. `deque`: fast O(1) appends and pops from both ends (unlike list O(n) left pops). 4. `namedtuple`: tuple with named fields accessible via dot notation.',
          syntaxExplanation:
            'from collections import defaultdict, Counter, deque, namedtuple\ncounts = Counter(["a", "b", "a"])\ndd = defaultdict(list)\nq = deque([1, 2, 3])\nPoint = namedtuple("Point", ["x", "y"])',
          howItWorks: [
            'C-optimized specialized structures with direct Python bindings.',
          ],
          examples: [
            {
              title: 'Word Frequency Analysis with Counter',
              code:
                'from collections import Counter\nsentence = "apple banana apple cherry apple banana cherry date"\nfreq = Counter(sentence.split())\nprint("Top 2 frequent words:", freq.most_common(2))',
              explanation:
                'Counts occurrences and finds the most frequent elements in one line.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Using list.pop(0) as a FIFO queue instead of collections.deque.',
              explanation:
                'list.pop(0) is O(n) because it shifts every element in memory. deque.popleft() is O(1).',
            },
          ],
          quickChecks: [
            {
              question:
                'Which data structure offers O(1) appends and pops from both ends?',
              answer: 'collections.deque',
              options: ['list', 'collections.deque', 'set', 'array'],
              correctAnswer: 1,
              explanation:
                'deque (double-ended queue) provides constant-time operations at both ends.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Group a list of words by their first letter using collections.defaultdict(list)',
              difficulty: 'intermediate',
              concepts: ['collections', 'defaultdict', 'Counter'],
            },
          ],
          difficulty: 'intermediate',
          estimatedMinutes: 20,
        },

        // ---------------------------------------------------------
        // TOPIC 16.4: ITERTOOLS MODULE
        // ---------------------------------------------------------
        {
          id: 'python-itertools-module',
          title: 'Efficient Iteration (itertools module)',
          slug: 'itertools-module',
          description:
            'Composable streaming iterator tools: chain, cycle, count, islice, permutations, combinations.',
          learningObjectives: [
            'Chain multiple iterables with itertools.chain.',
            'Slice lazy streams with itertools.islice.',
            'Compute combinations and permutations effortlessly.',
          ],
          prerequisites: ['python-iterators-and-iterables'],
          conceptSummary:
            'The `itertools` module provides fast, memory-efficient building blocks for creating iterators and combinatorial routines.',
          detailedExplanation:
            'Itertools functions work on and produce lazy iterators. They avoid creating intermediate lists, operating in constant memory even on millions of items. Essential tools include `chain()` (concatenates streams), `islice()` (slices iterators), and `combinations()` (computes unordered selections).',
          syntaxExplanation:
            'import itertools\n# Chain sequences together lazily:\ncombined = itertools.chain([1, 2], [3, 4])\n# Combinations of 2 elements:\ncombs = list(itertools.combinations(["A", "B", "C"], 2))',
          howItWorks: [
            'Implemented entirely in optimized C algorithms for maximum speed.',
          ],
          examples: [
            {
              title: 'Generating Pairs with itertools.combinations',
              code:
                'import itertools\nteams = ["Arsenal", "Chelsea", "Liverpool", "City"]\nfixtures = list(itertools.combinations(teams, 2))\nprint(f"Total unique matches: {len(fixtures)}")\nfor home, away in fixtures:\n    print(f"- {home} vs {away}")',
              explanation:
                'Generates all unique head-to-head match pairings.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Calling list() on infinite iterators like itertools.count() or itertools.cycle().',
              explanation:
                'Causes an immediate infinite loop and memory exhaustion. Consume with islice.',
            },
          ],
          quickChecks: [
            {
              question:
                'What does itertools.chain("ABC", "DEF") produce when iterated?',
              answer: 'A, B, C, D, E, F sequentially',
              options: [
                'AD, BE, CF pairs',
                'A, B, C, D, E, F sequentially',
                'A set of unique letters',
                'A nested list',
              ],
              correctAnswer: 1,
              explanation:
                'chain links multiple iterables end-to-end into a single continuous stream.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Generate all 3-digit permutations from the digits 1, 2, 3, 4 without repetition',
              difficulty: 'intermediate',
              concepts: ['itertools', 'combinations', 'permutations'],
            },
          ],
          difficulty: 'intermediate',
          estimatedMinutes: 20,
        },

        // ---------------------------------------------------------
        // TOPIC 16.5: TYPE HINTS
        // ---------------------------------------------------------
        {
          id: 'python-type-hints',
          title: 'Type Hints and Static Typing (typing module)',
          slug: 'type-hints',
          description:
            'Modern type annotations: Union, Optional, Any, Callable, generics, and mypy validation.',
          learningObjectives: [
            'Annotate function parameters and return types.',
            'Use Union, Optional, Literal, and Any.',
            'Understand that Python type hints are ignored at runtime but verified by linters/IDEs.',
          ],
          prerequisites: ['python-defining-functions'],
          conceptSummary:
            'Type hints provide formal type annotations for variables, parameters, and return values to improve IDE autocompletion and static verification.',
          detailedExplanation:
            'Introduced in Python 3.5 (PEP 484), type hints document function contracts clearly. Python remains dynamically typed and does NOT enforce type hints at runtime; instead, static tools like mypy, pyright, and modern IDEs catch type errors before deployment.',
          syntaxExplanation:
            'from typing import Optional, Union, List\ndef find_user(user_id: int) -> Optional[dict]:\n    if user_id <= 0: return None\n    return {"id": user_id}\n\n# Modern Python 3.10+ syntax:\ndef modern_lookup(name: str) -> str | None:\n    return name if name else None',
          howItWorks: [
            'Stored in __annotations__ dictionary attribute on functions and classes.',
          ],
          examples: [
            {
              title: 'Complete Typed Service Function',
              code:
                'from typing import List, Dict, Any\n\ndef calculate_cart_total(items: List[Dict[str, Any]], tax_rate: float = 0.08) -> float:\n    subtotal: float = sum(item["price"] * item["qty"] for item in items)\n    return round(subtotal * (1 + tax_rate), 2)\n\ncart = [{"price": 20.0, "qty": 2}, {"price": 15.5, "qty": 1}]\nprint("Total:", calculate_cart_total(cart))',
              explanation:
                'Annotates nested data structures and return types.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Believing Python will throw a runtime TypeError if the wrong type is passed to an annotated function.',
              explanation:
                'Python runtime ignores type hints; you must use static type checkers like mypy.',
            },
          ],
          quickChecks: [
            {
              question:
                'Does Python raise a TypeError at runtime if you violate a type hint?',
              answer:
                'No, type hints are not enforced at runtime by Python',
              options: [
                'Yes, always',
                'No, type hints are not enforced at runtime by Python',
                'Only in release mode',
                'Only for integers',
              ],
              correctAnswer: 1,
              explanation:
                'Python runtime does not enforce type annotations; they are verified statically.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Annotate a function parse_records(data: list[str]) -> dict[str, int] with modern type hints',
              difficulty: 'intermediate',
              concepts: ['type hints', 'typing'],
            },
          ],
          difficulty: 'intermediate',
          estimatedMinutes: 20,
        },

        // ---------------------------------------------------------
        // TOPIC 16.6: TESTING AND DEBUGGING
        // ---------------------------------------------------------
        {
          id: 'python-testing-and-debugging',
          title: 'Testing and Debugging (unittest & pdb)',
          slug: 'testing-and-debugging',
          description:
            'Writing unit tests with unittest/pytest and interactive step-debugging with pdb/breakpoint().',
          learningObjectives: [
            'Write test cases subclassing unittest.TestCase.',
            'Use assertion methods (assertEqual, assertTrue, assertRaises).',
            'Debug programs interactively using breakpoint() and pdb.',
          ],
          prerequisites: ['python-exception-handling'],
          conceptSummary:
            '`unittest` provides structured test automation; `breakpoint()` drops into the interactive `pdb` debugger to inspect runtime execution.',
          detailedExplanation:
            "Automated testing guarantees that code changes don't break existing functionality. `unittest` organizes tests into test cases and test suites. When bugs occur, inserting `breakpoint()` (Python 3.7+) pauses execution and drops you into the `pdb` command line to inspect variables and step through code.",
          syntaxExplanation:
            'import unittest\n\nclass TestCalculations(unittest.TestCase):\n    def test_addition(self):\n        self.assertEqual(2 + 2, 4)\n\n# Debugging breakpoint:\n# breakpoint() # drops into pdb',
          howItWorks: [
            'unittest runner executes methods starting with test_; pdb hooks into sys.settrace.',
          ],
          examples: [
            {
              title: 'Writing Unit Tests for Exception Handling',
              code:
                'import unittest\n\ndef divide(a, b):\n    if b == 0: raise ValueError("Div by zero")\n    return a / b\n\nclass DivisionTests(unittest.TestCase):\n    def test_normal_division(self):\n        self.assertEqual(divide(10, 2), 5.0)\n    def test_zero_division_raises(self):\n        with self.assertRaises(ValueError):\n            divide(10, 0)\n\n# unittest.main() runs the test suite',
              explanation:
                'Tests both happy path calculation and error conditions using assertRaises.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Naming test methods without the test_ prefix, causing unittest to ignore them.',
              explanation:
                'Test runners discover only methods whose names start with test_.',
            },
          ],
          quickChecks: [
            {
              question:
                'Which built-in Python function drops into the interactive pdb debugger in Python 3.7+?',
              answer: 'breakpoint()',
              options: ['debugger()', 'breakpoint()', 'pause()', 'inspect()'],
              correctAnswer: 1,
              explanation:
                'breakpoint() is the standard built-in function to trigger pdb.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Write a unit test verifying that a string reverse function handles empty strings and palindromes',
              difficulty: 'intermediate',
              concepts: ['unittest', 'assertEqual'],
            },
          ],
          difficulty: 'intermediate',
          estimatedMinutes: 20,
        },
      ],
    },
  ],
};

export default pythonIntermediate;