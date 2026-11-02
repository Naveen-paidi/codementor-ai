/**
 * Java Curriculum — Intermediate Level (GeeksforGeeks-Style Structure)
 * Modules: Exception Handling, Collections & Generics, Lambdas/Streams/Modern APIs
 * Each topic follows: Overview -> Objectives -> Prerequisites -> Concept ->
 * Detailed Explanation -> Syntax -> How It Works -> Examples ->
 * Common Mistakes -> Quick Checks -> Practice Questions -> Difficulty
 *
 * Self-contained local curriculum source of truth.
 */

export const javaIntermediate = {
  id: 'java-intermediate',
  title: 'Level 2: Java Collections, Lambdas & Modern APIs',
  level: 2,
  difficulty: 'intermediate',
  description:
    'Master Java Collections Framework (Lists, Sets, Maps, Queues), checked/unchecked exception hierarchies, Generics, Lambdas, Streams, Optional, multithreading, and file I/O.',

  modules: [
    // =============================================================
    // MODULE 5: EXCEPTION HANDLING & RESOURCE MANAGEMENT
    // =============================================================
    {
      id: 'java-mod-exceptions',
      title: 'Exception Handling & Resource Management',
      order: 5,
      description:
        'Checked vs unchecked exceptions, try-catch-finally, try-with-resources, and custom exceptions.',
      topics: [
        // ---------------------------------------------------------
        // TOPIC 5.1: EXCEPTION HIERARCHY
        // ---------------------------------------------------------
        {
          id: 'java-exception-hierarchy',
          title: 'Exception Hierarchy: Checked vs Unchecked',
          slug: 'exception-hierarchy',
          description:
            'Throwable, Error, Exception, RuntimeException, and compile-time checked exception handling.',
          learningObjectives: [
            'Navigate the Java Throwable hierarchy.',
            'Distinguish checked exceptions from unchecked RuntimeExceptions.',
            'Use try-catch-finally blocks properly.',
          ],
          prerequisites: ['java-classes-and-constructors'],
          conceptSummary:
            'Checked exceptions (inherit `Exception`) must be declared or caught at compile time; unchecked exceptions (inherit `RuntimeException`) represent programming bugs.',

          detailedExplanation:
            'All errors inherit from `Throwable`. `Error` represents JVM-level disasters (OutOfMemoryError). `Exception` divides into:\n' +
            '1. Checked exceptions (like `IOException`, `SQLException`), which the compiler forces you to handle with `try-catch` or declare with `throws`.\n' +
            '2. Unchecked `RuntimeException` (like `NullPointerException`, `IndexOutOfBoundsException`), which indicate logical flaws.',

          syntaxExplanation:
            'public void readFile(String path) throws IOException {\n' +
            '    try {\n' +
            '        // Risky code\n' +
            '    } catch (FileNotFoundException e) {\n' +
            '        // Specific handler\n' +
            '    } finally {\n' +
            '        // Cleanup\n' +
            '    }\n' +
            '}',

          howItWorks: [
            'JVM uses Exception Table attributes in compiled bytecode to route execution on errors.',
            'Stack unwinding searches for a matching catch handler up the call stack.',
          ],

          examples: [
            {
              title: 'Handling Multiple Exceptions',
              code:
                'public class SafeDivision {\n' +
                '    public static void main(String[] args) {\n' +
                '        try {\n' +
                '            int a = 10, b = 0;\n' +
                '            int result = a / b;\n' +
                '        } catch (ArithmeticException e) {\n' +
                '            System.err.println("Math error: " + e.getMessage());\n' +
                '        } finally {\n' +
                '            System.out.println("Always executes for cleanup.");\n' +
                '        }\n' +
                '    }\n' +
                '}',
              explanation:
                'Catches runtime arithmetic error and runs finally block.',
            },
          ],

          commonMistakes: [
            {
              mistake:
                'Catching generic Throwable or ignoring caught exceptions with an empty catch block.',
              explanation:
                'Swallows critical JVM errors and silences bugs without logging.',
            },
            {
              mistake: 'Catching Exception before a more specific subclass.',
              explanation:
                'Unreachable catch block compile error; order specific exceptions first.',
            },
          ],

          quickChecks: [
            {
              question:
                'Which class of exceptions does the Java compiler NOT force you to declare or catch?',
              answer: 'RuntimeException and its subclasses (unchecked exceptions)',
              options: [
                'IOException',
                'SQLException',
                'RuntimeException and its subclasses',
                'ClassNotFoundException',
              ],
              correctAnswer: 2,
              explanation:
                'Subclasses of RuntimeException are unchecked and optional to declare.',
            },
          ],

          practiceQuestions: [
            {
              title:
                'Write a method parseAge(String s) that throws a custom InvalidAgeException if age is negative.',
              difficulty: 'intermediate',
              concepts: ['custom exception', 'throws'],
            },
          ],

          difficulty: 'intermediate',
          estimatedMinutes: 20,
        },

        // ---------------------------------------------------------
        // TOPIC 5.2: TRY-WITH-RESOURCES
        // ---------------------------------------------------------
        {
          id: 'java-try-with-resources',
          title: 'try-with-resources and AutoCloseable',
          slug: 'try-with-resources',
          description:
            'Automatic, leak-free resource teardown for streams, connections, and files using AutoCloseable.',
          learningObjectives: [
            'Implement try-with-resources syntax.',
            'Explain how AutoCloseable guarantees .close() execution.',
            'Avoid resource leaks in database and file operations.',
          ],
          prerequisites: ['java-exception-hierarchy'],
          conceptSummary:
            '`try-with-resources` automatically closes any resource implementing `AutoCloseable` at the end of the statement.',

          detailedExplanation:
            'Prior to Java 7, closing files in `finally` required tedious, nested try-catch blocks. With `try (Resource res = new Resource())`, the JVM guarantees `res.close()` is called automatically when exiting the block, even if an exception occurs.',

          syntaxExplanation:
            'try (BufferedReader reader = new BufferedReader(new FileReader("data.txt"))) {\n' +
            '    String line = reader.readLine();\n' +
            '} // reader is closed automatically here!',

          howItWorks: [
            'Compiler generates synthetic try-finally blocks invoking close() on the AutoCloseable object.',
            'If the try body and close() both throw, the latter is suppressed and attached to the primary.',
          ],

          examples: [
            {
              title: 'Safe File Reading with try-with-resources',
              code:
                'import java.io.*;\n\n' +
                'public class ReadFileSafe {\n' +
                '    public static void main(String[] args) {\n' +
                '        File file = new File("test.txt");\n' +
                '        try (FileInputStream fis = new FileInputStream(file)) {\n' +
                '            System.out.println("Bytes available: " + fis.available());\n' +
                '        } catch (IOException e) {\n' +
                '            System.err.println("File I/O error: " + e.getMessage());\n' +
                '        }\n' +
                '    }\n' +
                '}',
              explanation:
                'Guarantees the file descriptor is released immediately upon block exit.',
            },
          ],

          commonMistakes: [
            {
              mistake:
                'Manually calling .close() inside the try block before execution completes.',
              explanation:
                'Let the try-with-resources construct manage close() invocation automatically.',
            },
            {
              mistake: 'Using a resource that does not implement AutoCloseable.',
              explanation:
                'Only classes implementing AutoCloseable (or Closeable) can be declared in the resource header.',
            },
          ],

          quickChecks: [
            {
              question:
                'Which interface must a class implement to be declared inside a try-with-resources parentheses header?',
              answer: 'java.lang.AutoCloseable',
              options: [
                'java.io.Closeable',
                'java.lang.AutoCloseable',
                'java.lang.Runnable',
                'java.io.Serializable',
              ],
              correctAnswer: 1,
              explanation:
                'Any class implementing AutoCloseable can be used with try-with-resources.',
            },
          ],

          practiceQuestions: [
            {
              title:
                'Create a custom DatabaseConnection class implementing AutoCloseable and test it with try-with-resources.',
              difficulty: 'intermediate',
              concepts: ['AutoCloseable', 'try-with-resources'],
            },
          ],

          difficulty: 'intermediate',
          estimatedMinutes: 20,
        },
      ],
    },

    // =============================================================
    // MODULE 6: COLLECTIONS FRAMEWORK & GENERICS
    // =============================================================
    {
      id: 'java-mod-collections',
      title: 'Java Collections Framework & Generics',
      order: 6,
      description:
        'Lists (ArrayList, LinkedList), Sets (HashSet, TreeSet), Maps (HashMap, TreeMap), Queues, and type-safe Generics.',
      topics: [
        // ---------------------------------------------------------
        // TOPIC 6.1: GENERICS
        // ---------------------------------------------------------
        {
          id: 'java-generics',
          title: 'Generics and Type Safety',
          slug: 'generics',
          description:
            'Type parameters (<T>), generic classes, methods, bounded wildcards (<? extends T>, <? super T>), and type erasure.',
          learningObjectives: [
            'Define generic classes and generic methods.',
            'Eliminate ClassCastException at compile time.',
            'Use upper and lower bounded wildcards (PECS principle).',
            'Understand JVM type erasure.',
          ],
          prerequisites: ['java-classes-and-constructors'],
          conceptSummary:
            'Generics provide compile-time type safety for classes and methods, preventing runtime `ClassCastException`.',

          detailedExplanation:
            'Generics allow classes, interfaces, and methods to operate on parameterized types. The compiler verifies type safety ahead-of-time and then erases generic information (Type Erasure) for backwards compatibility with legacy JVM bytecode. Remember PECS: Producer Extends, Consumer Super.',

          syntaxExplanation:
            'public class Box<T> {\n' +
            '    private T content;\n' +
            '    public void set(T val) { this.content = val; }\n' +
            '    public T get() { return this.content; }\n' +
            '}\n' +
            'Box<String> stringBox = new Box<>();',

          howItWorks: [
            'Compiler checks types statically.',
            'Inserts type casts in bytecode.',
            'Removes type parameters (type erasure) to maintain raw-type compatibility.',
          ],

          examples: [
            {
              title: 'Generic Swap Utility Method',
              code:
                'public class GenericUtils {\n' +
                '    public static <T> void swap(T[] array, int i, int j) {\n' +
                '        T temp = array[i];\n' +
                '        array[i] = array[j];\n' +
                '        array[j] = temp;\n' +
                '    }\n' +
                '}',
              explanation:
                'Swaps elements in any array of reference types with full type safety.',
            },
          ],

          commonMistakes: [
            {
              mistake:
                'Attempting to use primitive types with generics, e.g. List<int>.',
              explanation:
                'Generics require reference types; use wrapper classes like List<Integer>.',
            },
            {
              mistake: 'Trying to instantiate a generic array: new T[10].',
              explanation:
                'Type erasure makes T unknown at runtime; use Object[] or reflection-based arrays.',
            },
          ],

          quickChecks: [
            {
              question:
                'What happens to generic type parameters during Java bytecode compilation?',
              answer:
                'They are removed by the compiler through Type Erasure',
              options: [
                'They are converted to C++ templates',
                'They are removed by the compiler through Type Erasure',
                'They are stored in OS registers',
                'They become final strings',
              ],
              correctAnswer: 1,
              explanation:
                'Type Erasure removes type parameters and replaces them with Object or bounds.',
            },
          ],

          practiceQuestions: [
            {
              title:
                'Write a generic Pair<K, V> class with getKey() and getValue() accessors.',
              difficulty: 'intermediate',
              concepts: ['generics', 'type parameters'],
            },
          ],

          difficulty: 'intermediate',
          estimatedMinutes: 25,
        },

        // ---------------------------------------------------------
        // TOPIC 6.2: LISTS
        // ---------------------------------------------------------
        {
          id: 'java-list-arraylist-linkedlist',
          title: 'Lists: ArrayList and LinkedList',
          slug: 'list-arraylist-linkedlist',
          description:
            'Dynamic arrays (ArrayList) vs doubly-linked nodes (LinkedList), algorithmic complexity, and resizing.',
          learningObjectives: [
            'Use List<T> interface with ArrayList and LinkedList.',
            'Compare O(1) random access of ArrayList with O(1) insertion of LinkedList.',
            'Sort lists with Collections.sort.',
          ],
          prerequisites: ['java-generics'],
          conceptSummary:
            '`ArrayList` uses a dynamically resizing array with O(1) random access; `LinkedList` uses doubly-linked nodes with O(1) head/tail insertion.',

          detailedExplanation:
            '`ArrayList` is the standard choice for general list operations, backed by an array that grows by 50% when full. `LinkedList` stores nodes with `prev` and `next` pointers, making it ideal when frequent additions/removals occur at ends, but poor for random index lookups (O(n)).',

          syntaxExplanation:
            'List<String> names = new ArrayList<>();\n' +
            'names.add("Alice");\n' +
            'names.add("Bob");\n' +
            'String first = names.get(0); // O(1) instant lookup',

          howItWorks: [
            'ArrayList resizes via Arrays.copyOf.',
            'LinkedList allocates Node<E> objects with prev/next references.',
            'Iteration is cache-friendly for ArrayList, pointer-chasing for LinkedList.',
          ],

          examples: [
            {
              title: 'ArrayList Operations and Sorting',
              code:
                'import java.util.*;\n\n' +
                'public class ListDemo {\n' +
                '    public static void main(String[] args) {\n' +
                '        List<Integer> scores = new ArrayList<>(List.of(88, 95, 72, 100));\n' +
                '        Collections.sort(scores); // Sorts in ascending order\n' +
                '        System.out.println("Sorted scores: " + scores);\n' +
                '    }\n' +
                '}',
              explanation:
                'Demonstrates mutable ArrayList creation and in-place sorting.',
            },
          ],

          commonMistakes: [
            {
              mistake:
                'Using LinkedList when frequent get(index) lookups are needed.',
              explanation:
                'LinkedList must traverse nodes from head/tail to reach index, resulting in slow O(n) performance.',
            },
            {
              mistake: 'Using List.of() and then attempting to add elements.',
              explanation:
                'List.of() returns an immutable list; wrap in new ArrayList<>(List.of(...)) for mutability.',
            },
          ],

          quickChecks: [
            {
              question: 'What is the time complexity of ArrayList.get(index)?',
              answer: 'O(1) constant time',
              options: ['O(N)', 'O(1) constant time', 'O(log N)', 'O(N^2)'],
              correctAnswer: 1,
              explanation:
                'ArrayList retrieves elements by direct array index calculation in O(1) time.',
            },
          ],

          practiceQuestions: [
            {
              title:
                'Filter even numbers from an ArrayList and compute their average.',
              difficulty: 'intermediate',
              concepts: ['ArrayList', 'List interface'],
            },
          ],

          difficulty: 'intermediate',
          estimatedMinutes: 20,
        },

        // ---------------------------------------------------------
        // TOPIC 6.3: SETS
        // ---------------------------------------------------------
        {
          id: 'java-set-hashset-treeset',
          title: 'Sets: HashSet and TreeSet',
          slug: 'set-hashset-treeset',
          description:
            'Unique element storage, hashCode/equals contract, and sorted sets with Red-Black trees (TreeSet).',
          learningObjectives: [
            'Enforce uniqueness with the Set<T> interface.',
            'Explain the hashCode() and equals() contract in HashSet.',
            'Store sorted unique elements with TreeSet.',
          ],
          prerequisites: ['java-list-arraylist-linkedlist'],
          conceptSummary:
            '`HashSet` provides O(1) unique element storage using hash tables; `TreeSet` maintains sorted order using Red-Black trees (O(log n)).',

          detailedExplanation:
            'Sets do not allow duplicate elements. `HashSet` relies strictly on `hashCode()` and `equals()`: if two objects are equal according to `equals()`, their `hashCode()` must return the identical integer. `TreeSet` requires elements to implement `Comparable<T>` or accept a `Comparator`.',

          syntaxExplanation:
            'Set<String> uniqueTags = new HashSet<>();\n' +
            'uniqueTags.add("java");\n' +
            'uniqueTags.add("java"); // Ignored! Set size is 1',

          howItWorks: [
            'HashSet is backed internally by a HashMap with dummy PRESENT values.',
            'TreeSet is backed by a TreeMap (Red-Black tree).',
          ],

          examples: [
            {
              title: 'Deduplicating and Sorting with TreeSet',
              code:
                'import java.util.*;\n\n' +
                'public class TreeSetDemo {\n' +
                '    public static void main(String[] args) {\n' +
                '        List<String> rawData = List.of("banana", "apple", "banana", "orange", "apple");\n' +
                '        Set<String> sortedUnique = new TreeSet<>(rawData);\n' +
                '        System.out.println("Sorted and Deduplicated: " + sortedUnique); // [apple, banana, orange]\n' +
                '    }\n' +
                '}',
              explanation:
                'Automatically deduplicates and alphabetically sorts elements.',
            },
          ],

          commonMistakes: [
            {
              mistake:
                'Storing custom objects in HashSet without overriding both equals() and hashCode().',
              explanation:
                'Violating the contract results in duplicate entries and failing lookups.',
            },
            {
              mistake: 'Adding null to a TreeSet.',
              explanation:
                'TreeSet uses compareTo which throws NullPointerException on null.',
            },
          ],

          quickChecks: [
            {
              question:
                'What underlying data structure does TreeSet use to keep elements sorted?',
              answer: 'Red-Black tree (a self-balancing binary search tree)',
              options: [
                'Hash table',
                'Red-Black tree',
                'Doubly linked list',
                'Dynamic array',
              ],
              correctAnswer: 1,
              explanation:
                'TreeSet is backed by TreeMap, which implements a Red-Black tree.',
            },
          ],

          practiceQuestions: [
            {
              title:
                'Write an entity class with properly overridden equals() and hashCode() and store in a HashSet.',
              difficulty: 'intermediate',
              concepts: ['HashSet', 'hashCode', 'equals'],
            },
          ],

          difficulty: 'intermediate',
          estimatedMinutes: 25,
        },

        // ---------------------------------------------------------
        // TOPIC 6.4: MAPS
        // ---------------------------------------------------------
        {
          id: 'java-map-hashmap-treemap',
          title: 'Maps: HashMap and TreeMap',
          slug: 'map-hashmap-treemap',
          description:
            'Key-value associative mapping, hash collisions, bucket linked-list to red-black tree conversion, and TreeMap.',
          learningObjectives: [
            'Store and retrieve pairs using Map<K, V>.',
            'Understand HashMap bucket indexing and hash collisions.',
            'Iterate keys, values, and entrySet().',
            'Maintain natural key ordering with TreeMap.',
          ],
          prerequisites: ['java-set-hashset-treeset'],
          conceptSummary:
            '`HashMap` provides O(1) key-value mappings via hash tables; `TreeMap` sorts entries by key using a Red-Black tree.',

          detailedExplanation:
            '`HashMap` hashes keys to array bucket indices. In Java 8+, if a bucket exceeds 8 colliding elements (TREEIFY_THRESHOLD), the bucket converts from a linked list to a Red-Black tree (TreeNode), improving worst-case search from O(n) to O(log n). Iterate maps cleanly using `map.entrySet()`.',

          syntaxExplanation:
            'Map<String, Integer> inventory = new HashMap<>();\n' +
            'inventory.put("Apples", 50);\n' +
            'int stock = inventory.getOrDefault("Bananas", 0);',

          howItWorks: [
            'Hashes key via (h = key.hashCode()) ^ (h >>> 16).',
            'Indexes into bucket array using (n - 1) & hash.',
            'Converts long collision chains into Red-Black trees when threshold exceeded.',
          ],

          examples: [
            {
              title: 'Word Frequency Histogram with Map',
              code:
                'import java.util.*;\n\n' +
                'public class WordCounter {\n' +
                '    public static void main(String[] args) {\n' +
                '        String[] words = {"java", "code", "java", "api", "code", "java"};\n' +
                '        Map<String, Integer> counts = new HashMap<>();\n' +
                '        for (String w : words) {\n' +
                '            counts.put(w, counts.getOrDefault(w, 0) + 1);\n' +
                '        }\n' +
                '        System.out.println("Frequencies: " + counts);\n' +
                '    }\n' +
                '}',
              explanation: 'Builds a frequency map using getOrDefault.',
            },
          ],

          commonMistakes: [
            {
              mistake:
                "Modifying an object's fields after it has been used as a key in a HashMap.",
              explanation:
                'Altering fields alters its hashCode, making the entry unretrievable in the map.',
            },
            {
              mistake: 'Using HashMap in multithreaded code without synchronization.',
              explanation:
                'Use ConcurrentHashMap for thread-safe concurrent access.',
            },
          ],

          quickChecks: [
            {
              question:
                'What does a HashMap bucket convert into in Java 8+ when collisions exceed 8 nodes?',
              answer: 'A Red-Black balanced binary tree',
              options: [
                'A circular array',
                'A Red-Black balanced binary tree',
                'A secondary hash table',
                'An ArrayList',
              ],
              correctAnswer: 1,
              explanation:
                'Java 8 treeifies heavy collision buckets into Red-Black trees to ensure O(log n) worst-case time.',
            },
          ],

          practiceQuestions: [
            {
              title:
                'Implement a telephone directory lookup using HashMap and entrySet iteration.',
              difficulty: 'intermediate',
              concepts: ['HashMap', 'entrySet'],
            },
          ],

          difficulty: 'intermediate',
          estimatedMinutes: 25,
        },
      ],
    },

    // =============================================================
    // MODULE 7: LAMBDAS, STREAMS & MODERN APIS
    // =============================================================
    {
      id: 'java-mod-lambdas-streams',
      title: 'Lambdas, Streams & Modern Java APIs',
      order: 7,
      description:
        'Functional interfaces, lambda expressions, the Stream API pipeline, Optional, and java.time.',
      topics: [
        // ---------------------------------------------------------
        // TOPIC 7.1: LAMBDAS & FUNCTIONAL INTERFACES
        // ---------------------------------------------------------
        {
          id: 'java-lambdas-functional-interfaces',
          title: 'Lambda Expressions & Functional Interfaces',
          slug: 'lambdas-functional-interfaces',
          description:
            'Single Abstract Method (SAM) contracts, @FunctionalInterface, method references (::), and standard utilities.',
          learningObjectives: [
            'Write concise lambda expressions (params -> body).',
            'Identify functional interfaces with @FunctionalInterface.',
            'Use standard java.util.function interfaces (Predicate, Consumer, Function, Supplier).',
            'Use double-colon method references (ClassName::method).',
          ],
          prerequisites: ['java-abstraction-and-interfaces'],
          conceptSummary:
            'Lambda expressions provide concise representations of anonymous functions implementing Single Abstract Method (SAM) interfaces.',

          detailedExplanation:
            'Java 8 brought functional programming to the JVM. Any interface with exactly one abstract method is a Functional Interface. Standard functional interfaces include `Predicate<T>` (tests boolean condition), `Function<T, R>` (transforms T to R), `Consumer<T>` (accepts T without return), and `Supplier<T>` (supplies T).',

          syntaxExplanation:
            '// Lambda syntax:\n' +
            'Predicate<Integer> isEven = n -> n % 2 == 0;\n' +
            '// Method reference:\n' +
            'Consumer<String> printer = System.out::println;',

          howItWorks: [
            'Compiled using invokedynamic bytecode instruction.',
            'Avoids anonymous inner class overhead.',
            'Captured variables must be effectively final.',
          ],

          examples: [
            {
              title: 'Custom Sorting with Lambdas and Method References',
              code:
                'import java.util.*;\n\n' +
                'public class LambdaSort {\n' +
                '    public static void main(String[] args) {\n' +
                '        List<String> names = new ArrayList<>(List.of("Charlotte", "Ben", "Alexander", "Dan"));\n' +
                '        // Lambda comparator by length:\n' +
                '        names.sort((s1, s2) -> Integer.compare(s1.length(), s2.length()));\n' +
                '        System.out.println("Sorted by length: " + names);\n' +
                '    }\n' +
                '}',
              explanation:
                'Passes a clean inline lambda comparator to sort strings by length.',
            },
          ],

          commonMistakes: [
            {
              mistake:
                'Trying to modify non-final local variables from within a lambda body.',
              explanation:
                'Variables captured in lambdas must be explicitly final or effectively final.',
            },
            {
              mistake: 'Confusing ::method references with .method() calls.',
              explanation:
                'ClassName::method passes the method as a functional reference; it is not invoked immediately.',
            },
          ],

          quickChecks: [
            {
              question: 'What defines a Functional Interface in Java?',
              answer: 'An interface with exactly one abstract method',
              options: [
                'Any interface with default methods',
                'An interface with exactly one abstract method',
                'An interface with no methods',
                'An interface implemented by abstract classes',
              ],
              correctAnswer: 1,
              explanation:
                'Functional interfaces have a Single Abstract Method (SAM).',
            },
          ],

          practiceQuestions: [
            {
              title:
                'Write a Predicate<String> that checks if a string is non-null and not empty.',
              difficulty: 'intermediate',
              concepts: ['@FunctionalInterface', 'Predicate'],
            },
          ],

          difficulty: 'intermediate',
          estimatedMinutes: 20,
        },

        // ---------------------------------------------------------
        // TOPIC 7.2: STREAM API
        // ---------------------------------------------------------
        {
          id: 'java-stream-api',
          title: 'The Stream API and Pipelines',
          slug: 'stream-api',
          description:
            'Declarative data processing: filter, map, flatMap, sorted, reduce, and Collectors.',
          learningObjectives: [
            'Construct Stream pipelines (source -> intermediate operations -> terminal operation).',
            'Apply filter, map, and flatMap.',
            'Collect results with Collectors.toList(), toSet(), and groupingBy.',
            'Understand lazy evaluation of intermediate operations.',
          ],
          prerequisites: ['java-lambdas-functional-interfaces'],
          conceptSummary:
            'The Stream API processes collections declaratively through functional pipelines of intermediate and terminal operations.',

          detailedExplanation:
            'Streams do not store data; they convey elements from a source through a pipeline of computational steps. Intermediate operations (`filter`, `map`, `sorted`) are lazy: they do not execute until a terminal operation (`collect`, `forEach`, `reduce`, `count`) triggers the pipeline.',

          syntaxExplanation:
            'List<String> activeUsernames = users.stream()\n' +
            '    .filter(User::isActive)\n' +
            '    .map(User::getUsername)\n' +
            '    .map(String::toUpperCase)\n' +
            '    .collect(Collectors.toList());',

          howItWorks: [
            'Builds linked pipeline stages of Sink objects.',
            'Terminal operation triggers a single optimized traversal loop.',
            'Parallel streams split work across ForkJoinPool.commonPool().',
          ],

          examples: [
            {
              title: 'Grouping and Aggregating with Streams',
              code:
                'import java.util.*;\n' +
                'import java.util.stream.Collectors;\n\n' +
                'class Transaction {\n' +
                '    String currency; double amount;\n' +
                '    Transaction(String c, double a) { currency = c; amount = a; }\n' +
                '}\n' +
                'public class StreamDemo {\n' +
                '    public static void main(String[] args) {\n' +
                '        List<Transaction> txs = List.of(\n' +
                '            new Transaction("USD", 100), new Transaction("EUR", 80), new Transaction("USD", 250)\n' +
                '        );\n' +
                '        Map<String, Double> totalsByCurrency = txs.stream()\n' +
                '            .collect(Collectors.groupingBy(\n' +
                '                t -> t.currency,\n' +
                '                Collectors.summingDouble(t -> t.amount)\n' +
                '            ));\n' +
                '        System.out.println("Totals by Currency: " + totalsByCurrency);\n' +
                '    }\n' +
                '}',
              explanation: 'Groups and sums transactions using Stream collectors.',
            },
          ],

          commonMistakes: [
            {
              mistake:
                'Attempting to reuse a Stream after a terminal operation has already executed.',
              explanation:
                'IllegalStateException: stream has already been operated upon or closed. Streams cannot be reused.',
            },
            {
              mistake: 'Using parallel streams for I/O-bound operations.',
              explanation:
                'Parallel streams share the common ForkJoinPool and can starve or block other parallel tasks.',
            },
          ],

          quickChecks: [
            {
              question:
                'Are intermediate operations like filter() and map() in the Stream API eager or lazy?',
              answer:
                'Lazy (they only execute when a terminal operation is called)',
              options: [
                'Eager',
                'Lazy (they only execute when a terminal operation is called)',
                'Parallel only',
                'Immediate',
              ],
              correctAnswer: 1,
              explanation:
                'Intermediate stream operations execute lazily upon terminal invocation.',
            },
          ],

          practiceQuestions: [
            {
              title:
                'Transform a list of numbers into a list of their squares for only odd numbers using Streams.',
              difficulty: 'intermediate',
              concepts: ['Streams', 'filter', 'map', 'collect'],
            },
          ],

          difficulty: 'intermediate',
          estimatedMinutes: 25,
        },

        // ---------------------------------------------------------
        // TOPIC 7.3: OPTIONAL & JAVA.TIME
        // ---------------------------------------------------------
        {
          id: 'java-optional-and-time',
          title: 'Optional Class and Modern java.time API',
          slug: 'optional-and-time',
          description:
            'Eliminating NullPointerException with Optional<T>, and date/time manipulation with LocalDate, LocalTime, and Duration.',
          learningObjectives: [
            'Avoid null returns using Optional<T>.',
            'Use map, filter, orElse, and orElseThrow on Optionals.',
            'Manipulate dates with java.time.LocalDate and ZonedDateTime.',
          ],
          prerequisites: ['java-stream-api'],
          conceptSummary:
            '`Optional<T>` provides a container representing value presence or absence; `java.time` replaces legacy date classes with immutable, thread-safe date types.',

          detailedExplanation:
            '`Optional` explicitly communicates that a method may not return a value, eliminating the scourge of `NullPointerException`. The modern `java.time` API (JSR-310) provides immutable, fluent classes: `LocalDate` (date without time), `LocalTime` (time of day), `Instant` (UTC epoch timestamp), and `Duration`.',

          syntaxExplanation:
            'Optional<User> userOpt = findUser(id);\n' +
            'String email = userOpt.map(User::getEmail).orElse("no-email@domain.com");\n\n' +
            'LocalDate today = LocalDate.now();\n' +
            'LocalDate nextMonth = today.plusMonths(1);',

          howItWorks: [
            'Optional wraps references in an immutable value-based container.',
            'java.time computes ISO-8601 calendar arithmetic.',
            'All java.time types are immutable and thread-safe.',
          ],

          examples: [
            {
              title: 'Graceful Optional Lookup',
              code:
                'import java.util.Optional;\n\n' +
                'public class OptionalDemo {\n' +
                '    public static Optional<String> lookupCountryCode(String country) {\n' +
                '        if ("Japan".equalsIgnoreCase(country)) return Optional.of("JP");\n' +
                '        return Optional.empty();\n' +
                '    }\n' +
                '    public static void main(String[] args) {\n' +
                '        String code = lookupCountryCode("Japan").orElse("UNKNOWN");\n' +
                '        System.out.println("Country Code: " + code);\n' +
                '    }\n' +
                '}',
              explanation:
                'Avoids returning null pointers by using Optional container.',
            },
          ],

          commonMistakes: [
            {
              mistake:
                'Using Optional.get() without checking isPresent(), causing NoSuchElementException.',
              explanation:
                'Use orElse, orElseGet, or orElseThrow rather than raw get().',
            },
            {
              mistake: 'Passing Optional as a method parameter.',
              explanation:
                'Optional is intended for return types; do not use it as a parameter or field type.',
            },
          ],

          quickChecks: [
            {
              question:
                'What is the main design goal of java.util.Optional in API design?',
              answer:
                'To provide a clear type-level representation of absence and prevent NullPointerExceptions',
              options: [
                'To speed up JVM execution',
                'To provide a clear type-level representation of absence and prevent NullPointerExceptions',
                'To serialize objects to JSON',
                'To replace all boolean flags',
              ],
              correctAnswer: 1,
              explanation:
                'Optional documents potential absence in return types explicitly.',
            },
          ],

          practiceQuestions: [
            {
              title:
                'Calculate the exact number of days between two dates using ChronoUnit.DAYS.between.',
              difficulty: 'intermediate',
              concepts: ['java.time', 'LocalDate', 'ChronoUnit'],
            },
          ],

          difficulty: 'intermediate',
          estimatedMinutes: 20,
        },
      ],
    },
  ],
};

export default javaIntermediate;