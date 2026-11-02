/**
 * Java Curriculum — Advanced Level (GeeksforGeeks-Style Structure)
 * Modules: JVM Internals, Concurrency, Reflection/Design Patterns/Spring Boot
 * Each topic follows: Overview -> Objectives -> Prerequisites -> Concept ->
 * Detailed Explanation -> Syntax -> How It Works -> Examples ->
 * Common Mistakes -> Quick Checks -> Practice Questions -> Difficulty
 *
 * Self-contained local curriculum source of truth.
 */

export const javaAdvanced = {
  id: 'java-advanced',
  title: 'Level 3: Java Systems, Concurrency & Enterprise Spring',
  level: 3,
  difficulty: 'advanced',
  description:
    'Deep dive into JVM memory layout and JIT compilation, low-latency garbage collection (G1, ZGC), modern concurrency (CompletableFuture, Virtual Threads), reflection, enterprise design patterns, and Spring Boot REST microservices.',

  modules: [
    // =============================================================
    // MODULE 8: JVM INTERNALS & MEMORY ARCHITECTURE
    // =============================================================
    {
      id: 'java-mod-jvm-internals',
      title: 'JVM Internals & Memory Architecture',
      order: 8,
      description:
        'Class loading subsystems, bytecode verification, JIT compilation, Metaspace, and Garbage Collectors (G1, ZGC).',
      topics: [
        // ---------------------------------------------------------
        // TOPIC 8.1: JVM MEMORY MODEL
        // ---------------------------------------------------------
        {
          id: 'java-jvm-memory-model',
          title: 'JVM Memory Layout: Stack, Heap & Metaspace',
          slug: 'jvm-memory-model',
          description:
            'Heap regions (Young/Eden, Survivor, Old/Tenured), Thread Stacks, and Metaspace native memory.',
          learningObjectives: [
            'Diagram the JVM runtime memory areas.',
            'Distinguish Thread Stack frames from Heap object allocations.',
            'Understand Metaspace class metadata storage.',
          ],
          prerequisites: ['java-intermediate'],
          conceptSummary:
            'JVM memory divides into Thread Stacks (local variables/frames), Heap (shared objects and instances), and Metaspace (class metadata).',

          detailedExplanation:
            'Each thread possesses its own private Stack storing primitive variables and references inside method frames. The Heap is shared across all threads and houses all objects and arrays. In Java 8+, the legacy PermGen was replaced by Metaspace, which dynamically allocates class metadata from OS native memory rather than contiguous heap space.',

          syntaxExplanation:
            '// Heap flag examples:\n' +
            '// -Xms4g -Xmx8g -XX:MaxMetaspaceSize=512m',

          howItWorks: [
            'JVM manages memory regions via native OS virtual memory pages mapped by mmap.',
            'Young generation includes Eden and two Survivor spaces.',
            'Old generation (Tenured) holds long-lived objects after promotion.',
          ],

          examples: [
            {
              title: 'Inspecting Memory via Runtime API',
              code:
                'public class MemoryInspect {\n' +
                '    public static void main(String[] args) {\n' +
                '        Runtime rt = Runtime.getRuntime();\n' +
                '        long totalMb = rt.totalMemory() / (1024 * 1024);\n' +
                '        long maxMb = rt.maxMemory() / (1024 * 1024);\n' +
                '        long freeMb = rt.freeMemory() / (1024 * 1024);\n' +
                '        System.out.printf("Total: %dMB, Max: %dMB, Free: %dMB%n", totalMb, maxMb, freeMb);\n' +
                '    }\n' +
                '}',
              explanation: 'Queries JVM memory allocations programmatically.',
            },
          ],

          commonMistakes: [
            {
              mistake: 'Assuming local primitive variables live on the heap.',
              explanation:
                'Local primitive variables live directly inside thread stack frames for instant access.',
            },
            {
              mistake: 'Confusing stack overflow with heap exhaustion.',
              explanation:
                'Deep recursion causes StackOverflowError; too many live objects cause OutOfMemoryError: Java heap space.',
            },
          ],

          quickChecks: [
            {
              question:
                'Where are class definitions, static method bytecode, and metadata stored in Java 8+?',
              answer: 'Metaspace (native memory)',
              options: [
                'PermGen',
                'Metaspace (native memory)',
                'Thread Stack',
                'Java Eden space',
              ],
              correctAnswer: 1,
              explanation:
                'Metaspace replaced PermGen in Java 8, utilizing native memory.',
            },
          ],

          practiceQuestions: [
            {
              title:
                'Explain what happens inside the JVM when an OutOfMemoryError: Java heap space is thrown.',
              difficulty: 'advanced',
              concepts: ['JVM memory', 'OutOfMemoryError'],
            },
          ],

          difficulty: 'advanced',
          estimatedMinutes: 25,
        },

        // ---------------------------------------------------------
        // TOPIC 8.2: GARBAGE COLLECTION
        // ---------------------------------------------------------
        {
          id: 'java-garbage-collectors',
          title: 'Garbage Collection: G1GC, ZGC, and GC Tuning',
          slug: 'garbage-collectors',
          description:
            'Generational hypothesis, stop-the-world pauses, G1GC regions, and sub-millisecond low-latency ZGC.',
          learningObjectives: [
            'Understand the weak generational hypothesis.',
            'Explain G1GC regional concurrent collection.',
            'Describe ultra-low-latency ZGC capabilities.',
            'Analyze GC logs with -Xlog:gc.',
          ],
          prerequisites: ['java-jvm-memory-model'],
          conceptSummary:
            'Garbage Collectors automatically reclaim unreachable heap memory; modern collectors like G1GC and ZGC minimize stop-the-world pause times.',

          detailedExplanation:
            'The Weak Generational Hypothesis states that most objects die shortly after creation. G1GC divides the heap into thousands of equal-sized regions and collects regions with the most garbage first ("Garbage First"). ZGC performs almost all garbage collection work concurrently with application threads, keeping stop-the-world pauses under 1 millisecond even on multi-terabyte heaps.',

          syntaxExplanation:
            '# Flags to enable ZGC:\n' +
            '# java -XX:+UseZGC -Xmx16g -jar myapp.jar',

          howItWorks: [
            'ZGC uses colored pointers and load barriers to track and relocate objects concurrently without stopping threads.',
            'G1GC uses remembered sets and collection sets to prioritize regions.',
            'Both minimize full-GC pauses dramatically.',
          ],

          examples: [
            {
              title: 'Simulating GC Pressure and Explicit Collection',
              code:
                'public class GCDemo {\n' +
                '    public static void main(String[] args) {\n' +
                '        for (int i = 0; i < 50000; i++) {\n' +
                '            byte[] garbage = new byte[1024 * 10]; // Short-lived allocations in Eden\n' +
                '        }\n' +
                '        System.gc(); // Suggests GC run to JVM\n' +
                '        System.out.println("Allocations completed.");\n' +
                '    }\n' +
                '}',
              explanation:
                'Generates rapid short-lived allocations triggering minor Eden collections.',
            },
          ],

          commonMistakes: [
            {
              mistake: 'Relying on System.gc() in production code.',
              explanation:
                'System.gc() is merely a suggestion that can trigger expensive full stop-the-world pauses; let the JVM manage GC automatically.',
            },
            {
              mistake: 'Ignoring GC logs when diagnosing latency spikes.',
              explanation:
                'Enable -Xlog:gc* to correlate pauses with allocation patterns before tuning.',
            },
          ],

          quickChecks: [
            {
              question:
                'What is the default garbage collector in modern Java (Java 9+)?',
              answer: 'G1 Garbage Collector (G1GC)',
              options: ['Serial GC', 'Parallel GC', 'G1 Garbage Collector (G1GC)', 'CMS'],
              correctAnswer: 2,
              explanation:
                'G1GC became the default collector starting in Java 9.',
            },
          ],

          practiceQuestions: [
            {
              title:
                'Compare throughput vs latency trade-offs between Parallel GC, G1GC, and ZGC.',
              difficulty: 'advanced',
              concepts: ['GC tuning', 'ZGC', 'G1GC'],
            },
          ],

          difficulty: 'advanced',
          estimatedMinutes: 25,
        },
      ],
    },

    // =============================================================
    // MODULE 9: ADVANCED CONCURRENCY & MULTITHREADING
    // =============================================================
    {
      id: 'java-mod-concurrency',
      title: 'Advanced Concurrency & Multithreading',
      order: 9,
      description:
        'Thread synchronization, volatile, ReentrantLock, ExecutorService thread pools, and CompletableFuture.',
      topics: [
        // ---------------------------------------------------------
        // TOPIC 9.1: SYNCHRONIZATION & LOCKS
        // ---------------------------------------------------------
        {
          id: 'java-synchronization-locks',
          title: 'Thread Synchronization, volatile & ReentrantLock',
          slug: 'synchronization-locks',
          description:
            'Race conditions, memory visibility with volatile, synchronized monitors, and explicit ReentrantLock.',
          learningObjectives: [
            'Prevent race conditions with synchronized blocks.',
            'Ensure cross-core cache visibility using volatile.',
            'Apply explicit locking with java.util.concurrent.locks.ReentrantLock.',
          ],
          prerequisites: ['java-intermediate'],
          conceptSummary:
            '`synchronized` ensures mutual exclusion; `volatile` guarantees CPU cache visibility; `ReentrantLock` provides timed, interruptible locking.',

          detailedExplanation:
            'When multiple threads read and write shared variables without synchronization, race conditions occur. The `synchronized` keyword uses intrinsic object monitors. `volatile` informs CPU caches to always read from and write directly to main memory. `ReentrantLock` allows advanced patterns such as `tryLock()` with timeouts.',

          syntaxExplanation:
            'private final ReentrantLock lock = new ReentrantLock();\n' +
            'public void update() {\n' +
            '    lock.lock();\n' +
            '    try {\n' +
            '        // Critical section\n' +
            '    } finally {\n' +
            '        lock.unlock();\n' +
            '    }\n' +
            '}',

          howItWorks: [
            'Uses CPU hardware atomic instructions (CAS: Compare-And-Swap).',
            'Monitor enter/exit bytecodes implement synchronized blocks.',
            'ReentrantLock uses AbstractQueuedSynchronizer (AQS) internally.',
          ],

          examples: [
            {
              title: 'Thread-Safe Counter with ReentrantLock',
              code:
                'import java.util.concurrent.locks.ReentrantLock;\n\n' +
                'public class SafeCounter {\n' +
                '    private int count = 0;\n' +
                '    private final ReentrantLock lock = new ReentrantLock();\n\n' +
                '    public void increment() {\n' +
                '        lock.lock();\n' +
                '        try {\n' +
                '            count++;\n' +
                '        } finally {\n' +
                '            lock.unlock();\n' +
                '        }\n' +
                '    }\n' +
                '    public int getCount() { return count; }\n' +
                '}',
              explanation:
                'Guarantees thread-safe atomic increments using explicit reentrant locking.',
            },
          ],

          commonMistakes: [
            {
              mistake: 'Failing to call lock.unlock() inside a finally block.',
              explanation:
                'If an exception occurs, the lock remains held forever, causing a permanent application deadlock.',
            },
            {
              mistake: 'Assuming volatile makes compound operations atomic.',
              explanation:
                'volatile only guarantees visibility; count++ still needs synchronization.',
            },
          ],

          quickChecks: [
            {
              question: 'What does the volatile keyword guarantee in Java?',
              answer:
                'Visibility: changes made by one thread are immediately visible to all other threads',
              options: [
                'Atomicity of compound operations (like count++)',
                'Visibility across CPU caches',
                'Automatic encryption',
                'Serialization',
              ],
              correctAnswer: 1,
              explanation:
                'volatile guarantees memory visibility by establishing a happens-before relationship.',
            },
          ],

          practiceQuestions: [
            {
              title:
                'Implement a thread-safe bounded queue with ReentrantLock and Condition variables (notFull, notEmpty).',
              difficulty: 'advanced',
              concepts: ['ReentrantLock', 'Condition', 'concurrency'],
            },
          ],

          difficulty: 'advanced',
          estimatedMinutes: 30,
        },

        // ---------------------------------------------------------
        // TOPIC 9.2: EXECUTORS & COMPLETABLEFUTURE
        // ---------------------------------------------------------
        {
          id: 'java-executors-completablefuture',
          title: 'ExecutorService and CompletableFuture',
          slug: 'executors-completablefuture',
          description:
            'Managing thread lifecycles with thread pools and orchestrating non-blocking async workflows with CompletableFuture.',
          learningObjectives: [
            'Manage thread pools with ExecutorService and ThreadPoolExecutor.',
            'Submit Callable tasks returning Future values.',
            'Compose non-blocking asynchronous workflows using CompletableFuture (thenApply, thenCompose, allOf).',
          ],
          prerequisites: ['java-synchronization-locks'],
          conceptSummary:
            '`ExecutorService` manages reusable thread pools; `CompletableFuture` provides functional, non-blocking asynchronous pipeline composition.',

          detailedExplanation:
            'Creating new OS threads with `new Thread()` is expensive (each allocates ~1 MB stack). Thread pools reuse a fixed number of threads. `CompletableFuture` allows chaining asynchronous computations asynchronously without blocking the calling thread.',

          syntaxExplanation:
            'ExecutorService pool = Executors.newFixedThreadPool(4);\n' +
            'CompletableFuture.supplyAsync(() -> fetchRemoteData(), pool)\n' +
            '    .thenApply(data -> transform(data))\n' +
            '    .thenAccept(result -> System.out.println("Result: " + result));',

          howItWorks: [
            'Work-stealing or FIFO task queues dispatch work across pool workers.',
            'CompletableFuture manages completion state DAGs.',
            'Callbacks run in the pool thread that completes the previous stage.',
          ],

          examples: [
            {
              title: 'Parallel Data Aggregation with CompletableFuture.allOf',
              code:
                'import java.util.concurrent.CompletableFuture;\n\n' +
                'public class AsyncDemo {\n' +
                '    public static void main(String[] args) {\n' +
                '        CompletableFuture<String> userTask = CompletableFuture.supplyAsync(() -> "User: Alice");\n' +
                '        CompletableFuture<String> orderTask = CompletableFuture.supplyAsync(() -> "Order #883");\n\n' +
                '        CompletableFuture<String> combined = userTask.thenCombine(orderTask, (u, o) -> u + " -> " + o);\n' +
                '        System.out.println(combined.join());\n' +
                '    }\n' +
                '}',
              explanation:
                'Combines multiple independent asynchronous computations.',
            },
          ],

          commonMistakes: [
            {
              mistake:
                'Calling .get() or .join() prematurely, turning asynchronous code back into synchronous blocking code.',
              explanation:
                'Chain callbacks with thenApply and thenAccept to maintain non-blocking execution.',
            },
            {
              mistake: 'Forgetting to shut down an ExecutorService.',
              explanation:
                'Threads are non-daemon by default; call pool.shutdown() or use try-with-resources (Java 19+).',
            },
          ],

          quickChecks: [
            {
              question:
                'Which method combines two independent CompletableFuture instances when both complete?',
              answer: 'thenCombine',
              options: ['thenApply', 'thenCombine', 'thenRun', 'thenAccept'],
              correctAnswer: 1,
              explanation:
                'thenCombine executes a BiFunction when both futures complete successfully.',
            },
          ],

          practiceQuestions: [
            {
              title:
                'Fetch simulated data from 3 microservices concurrently and merge results with CompletableFuture.allOf.',
              difficulty: 'advanced',
              concepts: ['CompletableFuture', 'async'],
            },
          ],

          difficulty: 'advanced',
          estimatedMinutes: 30,
        },
      ],
    },

    // =============================================================
    // MODULE 10: REFLECTION, DESIGN PATTERNS & SPRING BOOT
    // =============================================================
    {
      id: 'java-mod-reflection-spring',
      title: 'Reflection, Design Patterns & Spring Boot',
      order: 10,
      description:
        'Runtime introspection with java.lang.reflect, custom annotations, GoF design patterns, and Spring Boot REST microservices.',
      topics: [
        // ---------------------------------------------------------
        // TOPIC 10.1: REFLECTION & ANNOTATIONS
        // ---------------------------------------------------------
        {
          id: 'java-reflection-annotations',
          title: 'Reflection and Custom Annotations',
          slug: 'reflection-annotations',
          description:
            'Inspecting classes at runtime, invoking private methods, creating custom runtime annotations with @Retention and @Target.',
          learningObjectives: [
            'Inspect class metadata at runtime using java.lang.Class.',
            'Instantiate objects and invoke methods via reflection.',
            'Create and process custom annotations with RetentionPolicy.RUNTIME.',
          ],
          prerequisites: ['java-intermediate'],
          conceptSummary:
            'Reflection allows programs to inspect and modify their own structure at runtime; annotations attach metadata processed by frameworks.',

          detailedExplanation:
            'Reflection powers major Java frameworks (Spring, Hibernate, JUnit). By querying `Class<?>`, frameworks can discover fields, bypass access restrictions, and invoke methods dynamically. Custom annotations marked with `@Retention(RetentionPolicy.RUNTIME)` remain accessible at runtime for reflection-based dependency injection.',

          syntaxExplanation:
            'Class<?> clazz = User.class;\n' +
            'Method method = clazz.getDeclaredMethod("calculateScore");\n' +
            'method.setAccessible(true);\n' +
            'Object result = method.invoke(userInstance);',

          howItWorks: [
            'JVM exposes internal ClassLoader and type dictionary through java.lang.reflect native hooks.',
            'Reflection bypasses compile-time access checks but retains SecurityManager checks in legacy runtimes.',
          ],

          examples: [
            {
              title: 'Custom Annotation and Reflection Scanner',
              code:
                'import java.lang.annotation.*;\n' +
                'import java.lang.reflect.*;\n\n' +
                '@Retention(RetentionPolicy.RUNTIME)\n' +
                '@Target(ElementType.METHOD)\n' +
                '@interface BenchmarkRun {}\n\n' +
                'class BenchmarkService {\n' +
                '    @BenchmarkRun\n' +
                '    public void testDatabase() { System.out.println("Running benchmark..."); }\n' +
                '}\n' +
                'public class AnnotationScanner {\n' +
                '    public static void main(String[] args) throws Exception {\n' +
                '        for (Method m : BenchmarkService.class.getDeclaredMethods()) {\n' +
                '            if (m.isAnnotationPresent(BenchmarkRun.class)) {\n' +
                '                System.out.println("Discovered benchmark method: " + m.getName());\n' +
                '            }\n' +
                '        }\n' +
                '    }\n' +
                '}',
              explanation:
                'Builds a custom test discovery mechanism similar to JUnit.',
            },
          ],

          commonMistakes: [
            {
              mistake:
                'Omitting @Retention(RetentionPolicy.RUNTIME) on custom annotations.',
              explanation:
                'Without RUNTIME retention, annotations are discarded at compile time or class loading and cannot be read via reflection.',
            },
            {
              mistake: 'Overusing reflection in performance-critical code.',
              explanation:
                'Reflection is significantly slower than direct calls; cache reflected Method objects when necessary.',
            },
          ],

          quickChecks: [
            {
              question:
                'Which retention policy makes annotations readable at runtime through Java reflection?',
              answer: 'RetentionPolicy.RUNTIME',
              options: [
                'RetentionPolicy.SOURCE',
                'RetentionPolicy.CLASS',
                'RetentionPolicy.RUNTIME',
                'RetentionPolicy.BYTECODE',
              ],
              correctAnswer: 2,
              explanation:
                'RetentionPolicy.RUNTIME ensures annotations survive in bytecode and are loaded into the JVM.',
            },
          ],

          practiceQuestions: [
            {
              title:
                'Build a miniature Dependency Injection container that injects fields marked with a custom @Inject annotation.',
              difficulty: 'advanced',
              concepts: ['reflection', 'annotations', 'DI'],
            },
          ],

          difficulty: 'advanced',
          estimatedMinutes: 30,
        },

        // ---------------------------------------------------------
        // TOPIC 10.2: SPRING BOOT REST
        // ---------------------------------------------------------
        {
          id: 'java-spring-boot-rest',
          title: 'Spring Boot Fundamentals and REST APIs',
          slug: 'spring-boot-rest',
          description:
            'Spring Inversion of Control (IoC), Dependency Injection (@Autowired, @Service), and building REST controllers (@RestController).',
          learningObjectives: [
            'Explain Inversion of Control (IoC) and Dependency Injection.',
            'Build production REST controllers with @RestController and @GetMapping/@PostMapping.',
            'Implement clean Service and Repository layering.',
          ],
          prerequisites: ['java-reflection-annotations'],
          conceptSummary:
            'Spring Boot is the standard enterprise Java framework, providing auto-configuration, dependency injection, and REST web services.',

          detailedExplanation:
            'Spring eliminates boilerplate infrastructure code through its Inversion of Control (IoC) container, which instantiates and manages the lifecycle of beans. Controllers annotated with `@RestController` expose JSON HTTP endpoints cleanly mapped to Java POJOs.',

          syntaxExplanation:
            '@RestController\n' +
            '@RequestMapping("/api/v1/products")\n' +
            'public class ProductController {\n' +
            '    private final ProductService service;\n' +
            '    public ProductController(ProductService service) {\n' +
            '        this.service = service; // Constructor injection\n' +
            '    }\n' +
            '    @GetMapping("/{id}")\n' +
            '    public ResponseEntity<Product> getById(@PathVariable Long id) {\n' +
            '        return ResponseEntity.ok(service.findProduct(id));\n' +
            '    }\n' +
            '}',

          howItWorks: [
            'Spring Boot launches embedded Tomcat/Netty.',
            'Scans components and builds the application context.',
            'Registers dispatcher servlets for HTTP routing.',
          ],

          examples: [
            {
              title: 'Spring Boot Layered Service Architecture',
              code:
                '// Controller Layer: Exposes HTTP endpoint\n' +
                '// @RestController\n' +
                '// @RequestMapping("/api/users")\n' +
                '// public class UserController {\n' +
                '//     @Autowired private UserService userService;\n' +
                '//     @GetMapping public List<User> getUsers() { return userService.findAll(); }\n' +
                '// }\n' +
                '//\n' +
                '// Service Layer: Business logic\n' +
                '// @Service public class UserService { ... }',
              explanation:
                'Demonstrates industry-standard controller and service separation.',
            },
          ],

          commonMistakes: [
            {
              mistake:
                'Using field injection (@Autowired on private fields) instead of constructor injection.',
              explanation:
                'Constructor injection is officially recommended because it ensures immutability and simplifies unit testing.',
            },
            {
              mistake: 'Confusing @Component, @Service, and @Repository.',
              explanation:
                'All are stereotypes; @Service and @Repository add semantic meaning and enable specialized exception translation.',
            },
          ],

          quickChecks: [
            {
              question:
                'Which annotation combines @Controller and @ResponseBody in Spring Boot REST web services?',
              answer: '@RestController',
              options: ['@Controller', '@RestController', '@Service', '@Endpoint'],
              correctAnswer: 1,
              explanation:
                '@RestController automatically serializes returned Java objects into JSON responses.',
            },
          ],

          practiceQuestions: [
            {
              title:
                'Design a Spring Boot REST API for a Todo application with GET, POST, and DELETE endpoints.',
              difficulty: 'advanced',
              concepts: ['Spring Boot', 'REST', '@RestController'],
            },
          ],

          difficulty: 'advanced',
          estimatedMinutes: 30,
        },
      ],
    },
  ],
};

export default javaAdvanced;