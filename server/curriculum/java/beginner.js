/**
 * Java Curriculum — Beginner Level (GeeksforGeeks-Style Structure)
 * Modules: Introduction, Control Flow, Arrays/Strings/Methods, OOP
 * Each topic follows: Overview -> Objectives -> Prerequisites -> Concept ->
 * Detailed Explanation -> Syntax -> How It Works -> Examples ->
 * Common Mistakes -> Quick Checks -> Practice Questions -> Difficulty
 *
 * Self-contained local curriculum source of truth.
 */

export const javaBeginner = {
  id: 'java-beginner',
  title: 'Level 1: Java Core Fundamentals & OOP',
  level: 1,
  difficulty: 'beginner',
  description:
    'Master Java basics: JDK/JVM architecture, syntax, operators, control flow, arrays, methods, and complete Object-Oriented Programming (classes, inheritance, polymorphism, interfaces).',

  modules: [
    // =============================================================
    // MODULE 1: INTRODUCTION TO JAVA & PLATFORM ARCHITECTURE
    // =============================================================
    {
      id: 'java-mod-introduction',
      title: 'Introduction to Java & Platform Architecture',
      order: 1,
      description:
        'Java history, Write Once Run Anywhere (WORA), JVM vs JRE vs JDK, installation, and first program.',
      topics: [
        // ---------------------------------------------------------
        // TOPIC 1.1: WHAT IS JAVA?
        // ---------------------------------------------------------
        {
          id: 'java-what-is-java',
          title: 'What is Java?',
          slug: 'what-is-java',
          description:
            'Overview of Java as a robust, class-based, object-oriented, cross-platform programming language.',
          learningObjectives: [
            'Define Java and its design principles.',
            'Explain the "Write Once, Run Anywhere" (WORA) philosophy.',
            'Recognize enterprise domains where Java excels.',
          ],
          prerequisites: [],
          conceptSummary:
            'Java is a statically typed, compiled-to-bytecode, class-based object-oriented programming language designed for platform independence.',

          // ----- GfG-style "Detailed Explanation" -----
          detailedExplanation:
            'Developed by James Gosling at Sun Microsystems and released in 1995 (now owned by Oracle), Java powers massive enterprise backends, Android apps, and big data systems. Its defining feature is bytecode compilation: Java source code compiles to platform-independent `.class` files executed by the Java Virtual Machine (JVM).',

          // ----- Syntax Block -----
          syntaxExplanation:
            'public class HelloWorld {\n' +
            '    public static void main(String[] args) {\n' +
            '        System.out.println("Hello, Java World!");\n' +
            '    }\n' +
            '}',

          // ----- How It Works (step-by-step) -----
          howItWorks: [
            '`javac HelloWorld.java` produces bytecode `HelloWorld.class`.',
            '`java HelloWorld` launches the JVM to execute bytecode.',
            'JVM translates bytecode to native machine instructions via interpreter + JIT.',
          ],

          // ----- Examples with Explanation -----
          examples: [
            {
              title: 'First Java Program Structure',
              code:
                'public class Main {\n' +
                '    public static void main(String[] args) {\n' +
                '        System.out.println("Welcome to Java Programming");\n' +
                '    }\n' +
                '}',
              explanation:
                'Every standalone Java program begins execution inside public static void main(String[] args).',
            },
          ],

          // ----- Common Mistakes -----
          commonMistakes: [
            {
              mistake: 'Naming the file differently than the public class name.',
              explanation:
                'In Java, the file name must exactly match the public class name (e.g. Main.java for public class Main).',
            },
            {
              mistake: 'Forgetting the `String[] args` parameter in main.',
              explanation:
                'The JVM looks for the exact signature `public static void main(String[] args)` to launch a program.',
            },
          ],

          // ----- Quick Checks (MCQ-style) -----
          quickChecks: [
            {
              question: 'What does the acronym WORA stand for in Java?',
              answer: 'Write Once, Run Anywhere',
              options: [
                'Write Once, Run Anywhere',
                'Work Online, Retrieve Always',
                'Write Objects, Run Algorithms',
                'Windows Operating Runtime App',
              ],
              correctAnswer: 0,
              explanation:
                "WORA summarizes Java's cross-platform bytecode portability.",
            },
          ],

          // ----- Practice Questions -----
          practiceQuestions: [
            {
              title:
                'Write a Java program that prints your name and prospective field of software engineering.',
              difficulty: 'easy',
              concepts: ['main method', 'println'],
            },
          ],

          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 1.2: JVM, JRE, JDK
        // ---------------------------------------------------------
        {
          id: 'java-jvm-jre-jdk',
          title: 'JVM, JRE, and JDK Architecture',
          slug: 'jvm-jre-jdk',
          description:
            'Understanding the layers of Java execution: Virtual Machine, Runtime Environment, and Development Kit.',
          learningObjectives: [
            'Distinguish between JDK, JRE, and JVM.',
            'Explain bytecode execution and Just-In-Time (JIT) compilation.',
            'Understand platform independence.',
          ],
          prerequisites: ['java-what-is-java'],
          conceptSummary:
            'JDK includes tools to write and compile code; JRE provides libraries to run code; JVM executes bytecode on the target OS.',

          detailedExplanation:
            '1. **JVM (Java Virtual Machine)**: An abstract computing machine that executes bytecode instructions and manages memory.\n' +
            '2. **JRE (Java Runtime Environment)**: JVM + core runtime libraries needed to run Java programs.\n' +
            '3. **JDK (Java Development Kit)**: JRE + compiler (`javac`), debugger (`jdb`), and development tools needed to build Java programs.',

          syntaxExplanation:
            '# Relationship:\n' +
            '# JDK = JRE + Development Tools (javac, jdb, javadoc)\n' +
            '# JRE = JVM + Standard Class Libraries (rt.jar / java.base)',

          howItWorks: [
            'Source (.java) -> javac -> Bytecode (.class).',
            'Bytecode -> JVM (Interpreter + JIT Compiler) -> Machine Code.',
            'JIT compiles hot methods to native code for peak performance.',
          ],

          examples: [
            {
              title: 'Checking Installed Java and Compiler',
              code:
                '// In terminal:\n' +
                '// java -version\n' +
                '// javac -version',
              explanation:
                'Verifies both the runtime (JVM) and development compiler (JDK).',
            },
          ],

          commonMistakes: [
            {
              mistake:
                'Installing only the JRE when intending to compile and develop Java applications.',
              explanation:
                'The JRE can only run pre-compiled bytecode; the JDK is required to compile Java source code.',
            },
            {
              mistake: 'Assuming JVM is platform-independent and bytecode is not.',
              explanation:
                'It is the reverse: bytecode is platform-independent, and the JVM is platform-dependent (one JVM per OS).',
            },
          ],

          quickChecks: [
            {
              question:
                'Which component is responsible for translating Java source code into bytecode (.class files)?',
              answer: 'javac (the Java Compiler)',
              options: ['The JVM', 'javac (the Java Compiler)', 'The JRE', 'The CPU'],
              correctAnswer: 1,
              explanation: 'javac compiles .java source files into bytecode.',
            },
          ],

          practiceQuestions: [
            {
              title:
                'Draw or explain the execution journey from MyProgram.java to native CPU machine instructions.',
              difficulty: 'easy',
              concepts: ['JDK', 'JRE', 'JVM', 'JIT'],
            },
          ],

          difficulty: 'beginner',
          estimatedMinutes: 15,
        },

        // ---------------------------------------------------------
        // TOPIC 1.3: VARIABLES & DATA TYPES
        // ---------------------------------------------------------
        {
          id: 'java-variables-data-types',
          title: 'Variables, Data Types, and Type Casting',
          slug: 'variables-data-types',
          description:
            'Primitive types (int, double, char, boolean), Reference types, and widening/narrowing type casting.',
          learningObjectives: [
            'Declare and initialize primitive variables.',
            'Identify the 8 primitive data types.',
            'Perform implicit widening and explicit narrowing type casting.',
          ],
          prerequisites: ['java-what-is-java'],
          conceptSummary:
            'Java has 8 primitive types (`byte`, `short`, `int`, `long`, `float`, `double`, `char`, `boolean`) and reference types (classes, arrays, interfaces).',

          detailedExplanation:
            'Java is strongly and statically typed: every variable must be declared with an explicit type before use. Widening conversions (e.g. `int` to `double`) happen automatically. Narrowing conversions (e.g. `double` to `int`) require an explicit cast `(int) myDouble` and may cause data truncation.',

          syntaxExplanation:
            'int age = 25;\n' +
            'double price = 19.99;\n' +
            "char grade = 'A';\n" +
            'boolean isActive = true;\n\n' +
            '// Explicit casting:\n' +
            'int rounded = (int) price; // 19',

          howItWorks: [
            'Primitives store actual binary values directly on the stack.',
            'References store 64-bit pointers to heap objects.',
            'Widening is implicit; narrowing requires an explicit cast.',
          ],

          examples: [
            {
              title: 'Primitive Declarations and Casting',
              code:
                'public class DataTypesDemo {\n' +
                '    public static void main(String[] args) {\n' +
                '        long worldPopulation = 8000000000L; // Suffix L required for long literals\n' +
                '        float tempCelsius = 36.6f;          // Suffix f required for float literals\n' +
                '        int truncated = (int) tempCelsius;\n' +
                '        System.out.println("Truncated int: " + truncated);\n' +
                '    }\n' +
                '}',
              explanation:
                'Demonstrates literal suffixes (L, f) and explicit narrowing cast.',
            },
          ],

          commonMistakes: [
            {
              mistake:
                'Omitting the L suffix on long literals that exceed 32-bit int bounds.',
              explanation:
                'Integer literals default to 32-bit int; append L (e.g. 5000000000L).',
            },
            {
              mistake: 'Forgetting the f suffix on float literals.',
              explanation:
                'Decimal literals default to double; assign to float with an f suffix (e.g. 3.14f).',
            },
          ],

          quickChecks: [
            {
              question: 'How many primitive data types exist in Java?',
              answer: '8',
              options: ['4', '6', '8', '10'],
              correctAnswer: 2,
              explanation: 'byte, short, int, long, float, double, char, boolean.',
            },
          ],

          practiceQuestions: [
            {
              title:
                "Declare variables for a student's ID (int), GPA (double), letter grade (char), and enrollment status (boolean).",
              difficulty: 'easy',
              concepts: ['data types', 'primitives'],
            },
          ],

          difficulty: 'beginner',
          estimatedMinutes: 20,
        },

        // ---------------------------------------------------------
        // TOPIC 1.4: OPERATORS & SCANNER
        // ---------------------------------------------------------
        {
          id: 'java-operators-and-io',
          title: 'Operators and User Input with Scanner',
          slug: 'operators-and-io',
          description:
            'Arithmetic, relational, logical operators, and reading keyboard input with java.util.Scanner.',
          learningObjectives: [
            'Apply arithmetic, relational, logical, and ternary operators.',
            'Read user input from standard input using Scanner.',
            'Avoid the Scanner nextLine() skip pitfall.',
          ],
          prerequisites: ['java-variables-data-types'],
          conceptSummary:
            'Operators perform mathematical and logical evaluations. `java.util.Scanner` parses primitive types and strings from `System.in`.',

          detailedExplanation:
            'Java provides standard operators (`+`, `-`, `*`, `/`, `%`, `==`, `!=`, `<`, `>`, `&&`, `||`, `!`). The ternary operator `condition ? trueVal : falseVal` acts as an inline conditional expression. For keyboard input, `Scanner scanner = new Scanner(System.in);` reads tokens using `.nextInt()`, `.nextDouble()`, and `.nextLine()`.',

          syntaxExplanation:
            'import java.util.Scanner;\n\n' +
            'Scanner sc = new Scanner(System.in);\n' +
            'System.out.print("Enter your name: ");\n' +
            'String name = sc.nextLine();',

          howItWorks: [
            'Scanner buffers bytes from standard input stream System.in.',
            'It parses tokens using regular expressions.',
            'nextInt()/nextDouble() read a token; nextLine() reads until newline.',
          ],

          examples: [
            {
              title: 'Interactive Console Input Calculator',
              code:
                'import java.util.Scanner;\n\n' +
                'public class InputCalc {\n' +
                '    public static void main(String[] args) {\n' +
                '        Scanner sc = new Scanner(System.in);\n' +
                '        System.out.print("Enter first number: ");\n' +
                '        int a = sc.nextInt();\n' +
                '        System.out.print("Enter second number: ");\n' +
                '        int b = sc.nextInt();\n' +
                '        int sum = a + b;\n' +
                '        System.out.println("Sum is: " + sum);\n' +
                '    }\n' +
                '}',
              explanation:
                'Reads integers from standard input and displays their sum.',
            },
          ],

          commonMistakes: [
            {
              mistake:
                'Calling sc.nextLine() immediately after sc.nextInt() without consuming the leftover newline character.',
              explanation:
                'nextInt() leaves the \\n in the buffer, causing nextLine() to read an empty line immediately.',
            },
            {
              mistake: 'Using == for string comparison instead of .equals().',
              explanation: '== compares references; .equals() compares content.',
            },
          ],

          quickChecks: [
            {
              question:
                'Which class from the java.util package is commonly used to read console input?',
              answer: 'Scanner',
              options: ['BufferedReader', 'Scanner', 'ConsoleReader', 'InputParser'],
              correctAnswer: 1,
              explanation: 'Scanner is the standard utility for parsing console input.',
            },
          ],

          practiceQuestions: [
            {
              title:
                'Write a program that prompts for product price and quantity, computing total with 8% sales tax.',
              difficulty: 'easy',
              concepts: ['Scanner', 'operators'],
            },
          ],

          difficulty: 'beginner',
          estimatedMinutes: 20,
        },
      ],
    },

    // =============================================================
    // MODULE 2: CONTROL FLOW & LOOPS
    // =============================================================
    {
      id: 'java-mod-control-flow',
      title: 'Control Flow & Loops',
      order: 2,
      description:
        'Conditional statements (if, if-else, switch) and iteration loops (for, while, do-while, enhanced for).',
      topics: [
        // ---------------------------------------------------------
        // TOPIC 2.1: CONDITIONALS & SWITCH
        // ---------------------------------------------------------
        {
          id: 'java-conditionals-and-switch',
          title: 'Conditionals and Modern Switch Expressions',
          slug: 'conditionals-and-switch',
          description:
            'Branching logic with if, else-if ladder, nested if, and modern arrow switch expressions.',
          learningObjectives: [
            'Construct if, else-if, and nested conditional blocks.',
            'Use traditional and modern arrow switch statements.',
            'Evaluate boolean expressions accurately.',
          ],
          prerequisites: ['java-operators-and-io'],
          conceptSummary:
            '`if`, `else if`, `else`, and `switch` control code execution branches based on evaluated conditions.',

          detailedExplanation:
            'Java conditions must evaluate to a strict `boolean` (`true` or `false`—integers like `1` or `0` are NOT valid booleans). Modern Java (Java 14+) introduced switch expressions using `->` (arrow syntax) which prevents fall-through bugs and can return values directly.',

          syntaxExplanation:
            '// Modern Switch Expression:\n' +
            'String dayType = switch (dayNumber) {\n' +
            '    case 1, 7 -> "Weekend";\n' +
            '    case 2, 3, 4, 5, 6 -> "Weekday";\n' +
            '    default -> "Invalid";\n' +
            '};',

          howItWorks: [
            'Compiled into LOOKUPSWITCH or TABLESWITCH bytecode.',
            'Provides O(1) branch dispatching for dense integer cases.',
          ],

          examples: [
            {
              title: 'Grade Classifier with if-else-if',
              code:
                'public class Grading {\n' +
                '    public static void main(String[] args) {\n' +
                '        int score = 87;\n' +
                '        char grade;\n' +
                "        if (score >= 90) grade = 'A';\n" +
                "        else if (score >= 80) grade = 'B';\n" +
                "        else if (score >= 70) grade = 'C';\n" +
                "        else grade = 'F';\n" +
                '        System.out.println("Final Grade: " + grade);\n' +
                '    }\n' +
                '}',
              explanation:
                'Classifies numerical scores into letter grades using an else-if ladder.',
            },
          ],

          commonMistakes: [
            {
              mistake: 'Writing if (x = 5) instead of if (x == 5).',
              explanation:
                'Assignment inside if is a compiler error in Java unless x is a boolean variable.',
            },
            {
              mistake: 'Forgetting break in a traditional switch case.',
              explanation:
                'Without break, execution falls through to the next case. Use arrow syntax to avoid this.',
            },
          ],

          quickChecks: [
            {
              question:
                'Can an integer expression like if (count) compile in Java?',
              answer:
                'No, Java requires an explicit boolean expression (e.g. if (count > 0))',
              options: [
                'Yes, 0 is false and non-zero is true',
                'No, Java requires an explicit boolean expression',
                'Only inside loops',
                'Only with final integers',
              ],
              correctAnswer: 1,
              explanation:
                'Java strictly enforces boolean types in condition guards.',
            },
          ],

          practiceQuestions: [
            {
              title:
                'Implement a leap-year checking program using if-else conditions.',
              difficulty: 'easy',
              concepts: ['if-else', 'modulo'],
            },
          ],

          difficulty: 'beginner',
          estimatedMinutes: 20,
        },

        // ---------------------------------------------------------
        // TOPIC 2.2: LOOPS
        // ---------------------------------------------------------
        {
          id: 'java-loops-and-flow-control',
          title: 'Loops: for, while, do-while, and Loop Control',
          slug: 'loops-and-flow-control',
          description:
            'Iterative control structures, while, do-while, break, continue, and labeled jumps.',
          learningObjectives: [
            'Execute counted iterations with the for loop.',
            'Execute condition-based iterations with while and do-while.',
            'Interrupt loops with break and skip iterations with continue.',
          ],
          prerequisites: ['java-conditionals-and-switch'],
          conceptSummary:
            'Loops repeat code: `for` for known counts, `while` for condition-driven cycles, and `do-while` for guaranteed at-least-once execution.',

          detailedExplanation:
            '1. `for (init; cond; update)`: standard counter loop.\n' +
            '2. `while (cond)`: checks condition before loop body.\n' +
            '3. `do { ... } while (cond)`: executes body first, then checks condition.\n' +
            '`break` exits the loop immediately; `continue` skips to the next iteration.',

          syntaxExplanation:
            'for (int i = 0; i < 5; i++) {\n' +
            '    if (i == 2) continue; // Skips 2\n' +
            '    if (i == 4) break;    // Exits loop\n' +
            '    System.out.println(i);\n' +
            '}',

          howItWorks: [
            'Bytecode branch instructions (goto, if_icmpge) loop back to instruction offsets.',
            'Enhanced for-each compiles to iterator-based traversal for collections.',
          ],

          examples: [
            {
              title: 'Menu-Driven Console Loop with do-while',
              code:
                'import java.util.Scanner;\n\n' +
                'public class MenuLoop {\n' +
                '    public static void main(String[] args) {\n' +
                '        Scanner sc = new Scanner(System.in);\n' +
                '        int choice;\n' +
                '        do {\n' +
                '            System.out.println("1. Play  2. High Scores  3. Exit");\n' +
                '            System.out.print("Enter choice: ");\n' +
                '            choice = sc.nextInt();\n' +
                '        } while (choice != 3);\n' +
                '        System.out.println("Exiting game. Goodbye!");\n' +
                '    }\n' +
                '}',
              explanation:
                'Guarantees the menu displays at least once before testing exit condition.',
            },
          ],

          commonMistakes: [
            {
              mistake:
                'Creating infinite while loops by forgetting to increment the loop counter inside the body.',
              explanation:
                'Ensure the loop condition variable is modified inside the loop body.',
            },
            {
              mistake: 'Off-by-one errors in for-loop bounds (i <= length).',
              explanation:
                'Arrays are zero-indexed; use i < length to avoid ArrayIndexOutOfBoundsException.',
            },
          ],

          quickChecks: [
            {
              question:
                'Which loop guarantees that its body executes at least once regardless of the initial condition?',
              answer: 'do-while loop',
              options: ['for loop', 'while loop', 'do-while loop', 'enhanced for loop'],
              correctAnswer: 2,
              explanation:
                'do-while evaluates the condition at the end of the first iteration.',
            },
          ],

          practiceQuestions: [
            {
              title:
                'Print the first 20 numbers in the Fibonacci sequence using a for loop.',
              difficulty: 'easy',
              concepts: ['for loop', 'iteration'],
            },
          ],

          difficulty: 'beginner',
          estimatedMinutes: 20,
        },
      ],
    },

    // =============================================================
    // MODULE 3: ARRAYS, STRINGS & METHODS
    // =============================================================
    {
      id: 'java-mod-arrays-strings-methods',
      title: 'Arrays, Strings & Methods',
      order: 3,
      description:
        'Fixed-size arrays, String immutability, StringBuilder, and defining reusable methods with return values.',
      topics: [
        // ---------------------------------------------------------
        // TOPIC 3.1: ARRAYS
        // ---------------------------------------------------------
        {
          id: 'java-arrays',
          title: 'Arrays and Multi-Dimensional Arrays',
          slug: 'arrays',
          description:
            'Declaring, allocating, initializing, and traversing fixed-size 1D and 2D arrays.',
          learningObjectives: [
            'Declare and allocate arrays with fixed lengths.',
            'Access elements by zero-based index.',
            'Iterate arrays using enhanced for loops (for-each).',
            'Model tabular data with 2D matrices.',
          ],
          prerequisites: ['java-loops-and-flow-control'],
          conceptSummary:
            'An array is a fixed-size, homogeneous container storing elements of the same type in contiguous heap memory.',

          detailedExplanation:
            'In Java, arrays are reference objects created on the heap. Their size is fixed at allocation and accessible via `.length`. Accessing out-of-range indices raises `ArrayIndexOutOfBoundsException`. The enhanced `for (Type item : array)` provides clean sequential traversal.',

          syntaxExplanation:
            'int[] numbers = new int[5]; // Allocated with default values (0)\n' +
            'String[] fruits = {"Apple", "Banana", "Cherry"};\n' +
            'for (String f : fruits) {\n' +
            '    System.out.println(f);\n' +
            '}',

          howItWorks: [
            'Allocated as a single contiguous block of memory.',
            'Includes length metadata header.',
            'Indexing is O(1) via base address + (index * element size).',
          ],

          examples: [
            {
              title: '2D Matrix Summation',
              code:
                'public class MatrixDemo {\n' +
                '    public static void main(String[] args) {\n' +
                '        int[][] matrix = {\n' +
                '            {1, 2, 3},\n' +
                '            {4, 5, 6}\n' +
                '        };\n' +
                '        int total = 0;\n' +
                '        for (int[] row : matrix) {\n' +
                '            for (int val : row) {\n' +
                '                total += val;\n' +
                '            }\n' +
                '        }\n' +
                '        System.out.println("Matrix total sum: " + total);\n' +
                '    }\n' +
                '}',
              explanation: 'Traverses rows and columns of a 2D array.',
            },
          ],

          commonMistakes: [
            {
              mistake: 'Attempting to resize a Java array dynamically.',
              explanation:
                'Java arrays are fixed in size; use java.util.ArrayList for dynamic arrays.',
            },
            {
              mistake: 'Using array.length() instead of array.length.',
              explanation:
                'length is a field for arrays, but a method (length()) for Strings.',
            },
          ],

          quickChecks: [
            {
              question:
                'What property gives the total element capacity of a Java array named data?',
              answer: 'data.length',
              options: ['data.length()', 'data.size()', 'data.length', 'data.count'],
              correctAnswer: 2,
              explanation:
                'In Java, array length is a final field (.length), not a method call.',
            },
          ],

          practiceQuestions: [
            {
              title:
                'Find the maximum and minimum numbers in an integer array.',
              difficulty: 'easy',
              concepts: ['arrays', 'traversal'],
            },
          ],

          difficulty: 'beginner',
          estimatedMinutes: 20,
        },

        // ---------------------------------------------------------
        // TOPIC 3.2: STRINGS
        // ---------------------------------------------------------
        {
          id: 'java-strings-and-stringbuilder',
          title: 'Strings, String Pool, and StringBuilder',
          slug: 'strings-and-stringbuilder',
          description:
            'String immutability, the heap String Constant Pool, comparing with .equals(), and mutable StringBuilder.',
          learningObjectives: [
            'Understand String immutability.',
            'Explain the JVM String Constant Pool.',
            'Compare strings with .equals() instead of ==.',
            'Build strings efficiently with StringBuilder.',
          ],
          prerequisites: ['java-arrays'],
          conceptSummary:
            'Java `String` objects are immutable and interned in the String Pool. Use `StringBuilder` for high-frequency modifications.',

          detailedExplanation:
            'Strings cannot be modified in place; operations like `.concat()` or `.replace()` return brand new String objects. Crucial rule: `==` compares memory references; `.equals()` compares string text contents. Repeated string concatenation in loops with `+` wastes memory; use `StringBuilder` for mutable string assembly.',

          syntaxExplanation:
            'String s1 = "Hello";\n' +
            'String s2 = new String("Hello");\n' +
            'boolean refCheck = (s1 == s2);      // false (different memory references)\n' +
            'boolean contentCheck = s1.equals(s2); // true (identical characters)',

          howItWorks: [
            'String literals are deduplicated into the JVM String Constant Pool.',
            'new String() always creates a fresh heap object outside the pool.',
            'StringBuilder maintains a resizable char[] buffer.',
          ],

          examples: [
            {
              title: 'Efficient Loop String Assembly with StringBuilder',
              code:
                'public class StringBuilderDemo {\n' +
                '    public static void main(String[] args) {\n' +
                '        StringBuilder sb = new StringBuilder();\n' +
                '        for (int i = 1; i <= 5; i++) {\n' +
                '            sb.append("Item ").append(i).append("\\n");\n' +
                '        }\n' +
                '        String finalResult = sb.toString();\n' +
                '        System.out.print(finalResult);\n' +
                '    }\n' +
                '}',
              explanation:
                'Appends text in a mutable buffer without allocating intermediate strings.',
            },
          ],

          commonMistakes: [
            {
              mistake: 'Using == to compare string equality in Java.',
              explanation:
                '== compares memory addresses! Always use str1.equals(str2).',
            },
            {
              mistake: 'Concatenating strings inside a loop with +.',
              explanation:
                'Creates many temporary String objects; use StringBuilder instead.',
            },
          ],

          quickChecks: [
            {
              question:
                'Why should str1.equals(str2) be used instead of str1 == str2 when comparing Java strings?',
              answer:
                '== compares object memory references; .equals() compares character contents',
              options: [
                '== throws a compile error on strings',
                '== compares object memory references; .equals() compares character contents',
                '.equals() ignores case',
                'There is no difference',
              ],
              correctAnswer: 1,
              explanation:
                '.equals() performs character-by-character semantic equality.',
            },
          ],

          practiceQuestions: [
            {
              title:
                'Write a program to check if a user-supplied string is a palindrome ignoring case.',
              difficulty: 'easy',
              concepts: ['String', 'equals', 'StringBuilder'],
            },
          ],

          difficulty: 'beginner',
          estimatedMinutes: 20,
        },

        // ---------------------------------------------------------
        // TOPIC 3.3: METHODS & OVERLOADING
        // ---------------------------------------------------------
        {
          id: 'java-methods-and-overloading',
          title: 'Methods, Parameters, and Method Overloading',
          slug: 'methods-and-overloading',
          description:
            'Defining static and instance methods, pass-by-value semantics, and overloading by signature.',
          learningObjectives: [
            'Declare methods with return types and parameters.',
            "Understand Java's strict pass-by-value evaluation model.",
            'Overload methods with distinct parameter signatures.',
          ],
          prerequisites: ['java-strings-and-stringbuilder'],
          conceptSummary:
            'Methods encapsulate reusable logic. Method overloading allows multiple methods to share the same name with distinct parameters.',

          detailedExplanation:
            'A method signature consists of its name and parameter types. Java supports method overloading: multiple methods in the same class can have the exact same name as long as their parameter lists differ in count or types. Java is strictly pass-by-value: primitives pass copies of values; objects pass copies of references.',

          syntaxExplanation:
            'public static int add(int a, int b) {\n' +
            '    return a + b;\n' +
            '}\n' +
            '// Overloaded method with different parameter types:\n' +
            'public static double add(double a, double b) {\n' +
            '    return a + b;\n' +
            '}',

          howItWorks: [
            'Static method calls use invokestatic bytecode.',
            'Compiler binds method statically by signature.',
            'Overload resolution picks the most specific matching method.',
          ],

          examples: [
            {
              title: 'Overloaded Print Helpers',
              code:
                'public class Printer {\n' +
                '    public static void display(String msg) {\n' +
                '        System.out.println("Text: " + msg);\n' +
                '    }\n' +
                '    public static void display(int number) {\n' +
                '        System.out.println("Number: " + number);\n' +
                '    }\n' +
                '    public static void main(String[] args) {\n' +
                '        display("Data Pipeline");\n' +
                '        display(404);\n' +
                '    }\n' +
                '}',
              explanation:
                'Compiler resolves which display method to call based on the argument type.',
            },
          ],

          commonMistakes: [
            {
              mistake:
                'Attempting to overload a method by changing only the return type.',
              explanation:
                'Return type is not part of the method signature; parameter types or count must differ.',
            },
            {
              mistake: 'Expecting Java to modify an object argument by reassigning it.',
              explanation:
                'Java is pass-by-value; reassigning a reference inside a method does not affect the caller.',
            },
          ],

          quickChecks: [
            {
              question: 'What constitutes a method signature in Java?',
              answer:
                'The method name and its parameter list (types and order)',
              options: [
                'Return type and method name',
                'The method name and its parameter list (types and order)',
                'The access modifier and method name',
                'The throws declaration',
              ],
              correctAnswer: 1,
              explanation: 'Method signature is name + parameter type list.',
            },
          ],

          practiceQuestions: [
            {
              title:
                'Write overloaded calculateArea methods for Circle (radius) and Rectangle (width, height).',
              difficulty: 'easy',
              concepts: ['methods', 'method overloading'],
            },
          ],

          difficulty: 'beginner',
          estimatedMinutes: 20,
        },
      ],
    },

    // =============================================================
    // MODULE 4: OBJECT-ORIENTED PROGRAMMING (OOP)
    // =============================================================
    {
      id: 'java-mod-oop',
      title: 'Object-Oriented Programming (OOP) in Java',
      order: 4,
      description:
        'Classes, constructors, this, static, encapsulation, inheritance, polymorphism, and interfaces.',
      topics: [
        // ---------------------------------------------------------
        // TOPIC 4.1: CLASSES & CONSTRUCTORS
        // ---------------------------------------------------------
        {
          id: 'java-classes-and-constructors',
          title: 'Classes, Objects, and Constructors',
          slug: 'classes-and-constructors',
          description:
            'Class blueprint design, instantiating objects with new, constructors, and the this keyword.',
          learningObjectives: [
            'Define classes with instance fields and methods.',
            'Instantiate objects on the heap using new.',
            'Write default and parameterized constructors.',
            'Use this to resolve field shadowing.',
          ],
          prerequisites: ['java-methods-and-overloading'],
          conceptSummary:
            'Classes define object state and behavior; constructors initialize new instances on the heap.',

          detailedExplanation:
            'A class is a blueprint for objects. Constructors share the exact name of the class and have no return type. If no constructor is defined, Java provides a default no-argument constructor. The `this` keyword refers to the current instance, commonly used to distinguish instance fields from constructor parameter names.',

          syntaxExplanation:
            'public class Car {\n' +
            '    private String model;\n' +
            '    public Car(String model) {\n' +
            '        this.model = model; // this resolves field shadowing\n' +
            '    }\n' +
            '}',

          howItWorks: [
            'The new operator allocates heap memory.',
            'invokespecial invokes the constructor bytecode.',
            'Field initializers and constructor body execute in order.',
          ],

          examples: [
            {
              title: 'BankAccount Class with Constructor and Methods',
              code:
                'public class BankAccount {\n' +
                '    private String owner;\n' +
                '    private double balance;\n\n' +
                '    public BankAccount(String owner, double initialBalance) {\n' +
                '        this.owner = owner;\n' +
                '        this.balance = initialBalance;\n' +
                '    }\n' +
                '    public void deposit(double amount) {\n' +
                '        if (amount > 0) this.balance += amount;\n' +
                '    }\n' +
                '    public double getBalance() {\n' +
                '        return this.balance;\n' +
                '    }\n' +
                '}',
              explanation:
                'Encapsulates account state and provides deposit/getter methods.',
            },
          ],

          commonMistakes: [
            {
              mistake:
                'Adding a return type (like void) to a constructor definition.',
              explanation:
                'Constructors have NO return type. Adding void turns it into a normal method.',
            },
            {
              mistake: 'Forgetting to call the constructor when declaring an object.',
              explanation:
                'Use new ClassName(...) to allocate and initialize heap objects.',
            },
          ],

          quickChecks: [
            {
              question: 'What is the return type of a Java constructor?',
              answer: 'Constructors have no return type (not even void)',
              options: [
                'void',
                'The class type itself',
                'Constructors have no return type',
                'int',
              ],
              correctAnswer: 2,
              explanation:
                'Constructors initialize objects and have no return type declaration.',
            },
          ],

          practiceQuestions: [
            {
              title:
                'Design a Book class with title, author, price, and a constructor initializing all three.',
              difficulty: 'easy',
              concepts: ['class', 'constructor', 'this'],
            },
          ],

          difficulty: 'beginner',
          estimatedMinutes: 25,
        },

        // ---------------------------------------------------------
        // TOPIC 4.2: STATIC & FINAL
        // ---------------------------------------------------------
        {
          id: 'java-static-and-final',
          title: 'static and final Keywords',
          slug: 'static-and-final',
          description:
            'Class-level members (static), constants, immutable bindings, and final classes/methods.',
          learningObjectives: [
            'Define static variables and static utility methods.',
            'Understand class vs instance memory allocation.',
            'Use final for constants (public static final), immutable methods, and unextendable classes.',
          ],
          prerequisites: ['java-classes-and-constructors'],
          conceptSummary:
            '`static` binds members to the class itself rather than instances; `final` creates unchangeable constants and prevents inheritance/overriding.',

          detailedExplanation:
            'Static variables are shared across all instances and loaded once when the class is initialized. Static methods cannot access `this` or instance fields. The `final` keyword has three roles: 1. on variables: value cannot be reassigned (constant), 2. on methods: cannot be overridden by subclasses, 3. on classes: cannot be extended (subclassed).',

          syntaxExplanation:
            'public class Constants {\n' +
            '    public static final double PI = 3.141592653589793;\n' +
            '    public static int instanceCount = 0;\n' +
            '}',

          howItWorks: [
            'Static fields live in Metaspace/Class metadata.',
            'final primitives are inlined by the JIT compiler.',
            'Static initialization runs once per ClassLoader.',
          ],

          examples: [
            {
              title: 'Unique ID Generation via Static Counter',
              code:
                'public class Ticket {\n' +
                '    private static int nextId = 1000;\n' +
                '    private final int ticketId;\n\n' +
                '    public Ticket() {\n' +
                '        this.ticketId = nextId++; // Assigns unique ticket ID\n' +
                '    }\n' +
                '    public int getTicketId() {\n' +
                '        return this.ticketId;\n' +
                '    }\n' +
                '}',
              explanation:
                'Uses a shared static counter to assign unique immutable IDs to each ticket instance.',
            },
          ],

          commonMistakes: [
            {
              mistake:
                'Attempting to reference this or non-static fields inside a static method.',
              explanation:
                'Static methods belong to the class, not any instance; this does not exist in static context.',
            },
            {
              mistake: 'Assuming final on an object reference makes the object immutable.',
              explanation:
                'final prevents reassigning the reference, but the object fields can still change unless declared final.',
            },
          ],

          quickChecks: [
            {
              question: 'What does marking a class as final in Java achieve?',
              answer: 'Prevents the class from being extended (subclassed)',
              options: [
                'Makes all fields immutable',
                'Prevents the class from being extended',
                'Deletes the class at runtime',
                'Allows static access only',
              ],
              correctAnswer: 1,
              explanation:
                'A final class cannot have child subclasses (e.g. java.lang.String is final).',
            },
          ],

          practiceQuestions: [
            {
              title:
                'Create a MathUtils class with static square and cube helper methods and a private constructor.',
              difficulty: 'easy',
              concepts: ['static', 'final', 'utility class'],
            },
          ],

          difficulty: 'beginner',
          estimatedMinutes: 20,
        },

        // ---------------------------------------------------------
        // TOPIC 4.3: ENCAPSULATION
        // ---------------------------------------------------------
        {
          id: 'java-encapsulation-access-modifiers',
          title: 'Encapsulation and Access Modifiers',
          slug: 'encapsulation-access-modifiers',
          description:
            'Data hiding with public, protected, package-private (default), and private.',
          learningObjectives: [
            'Differentiate the four Java access modifiers.',
            'Encapsulate class state using private fields.',
            'Provide safe getter and setter accessors.',
          ],
          prerequisites: ['java-classes-and-constructors'],
          conceptSummary:
            'Encapsulation protects internal object state by making fields `private` and exposing controlled `public` getters and setters.',

          detailedExplanation:
            'Java provides 4 access levels:\n' +
            '1. `private`: accessible only inside the same class.\n' +
            '2. `default` (no modifier): accessible inside the same package.\n' +
            '3. `protected`: accessible in same package and subclasses.\n' +
            '4. `public`: accessible everywhere.\n' +
            'Encapsulation prevents external code from corrupting internal state.',

          syntaxExplanation:
            'public class Student {\n' +
            '    private int age; // Encapsulated\n' +
            '    public int getAge() { return this.age; }\n' +
            '    public void setAge(int age) {\n' +
            '        if (age > 0) this.age = age; // Validated\n' +
            '    }\n' +
            '}',

          howItWorks: [
            'Enforced strictly by compiler and JVM bytecode verifier at runtime.',
            'Access modifiers do not affect performance; they affect visibility only.',
          ],

          examples: [
            {
              title: 'Validated Age Setter Encapsulation',
              code:
                'public class Person {\n' +
                '    private String name;\n' +
                '    private int age;\n\n' +
                '    public void setAge(int age) {\n' +
                '        if (age < 0 || age > 130) {\n' +
                '            throw new IllegalArgumentException("Invalid human age");\n' +
                '        }\n' +
                '        this.age = age;\n' +
                '    }\n' +
                '    public int getAge() { return this.age; }\n' +
                '}',
              explanation:
                'Guarantees the integrity of the age field via validation in setter.',
            },
          ],

          commonMistakes: [
            {
              mistake:
                'Making mutable fields public, allowing unrestricted corruption from outside.',
              explanation:
                'Always declare fields private and provide getters/setters as needed.',
            },
            {
              mistake: 'Confusing default (package-private) with protected.',
              explanation:
                'default has no subclass access across packages; protected does.',
            },
          ],

          quickChecks: [
            {
              question:
                'Which access modifier restricts visibility strictly to within the defining class?',
              answer: 'private',
              options: ['public', 'protected', 'default (package-private)', 'private'],
              correctAnswer: 3,
              explanation:
                'private members cannot be accessed outside their declaring class.',
            },
          ],

          practiceQuestions: [
            {
              title:
                'Implement a BankCard class with private cardNumber and pin fields and a masked getter.',
              difficulty: 'easy',
              concepts: ['encapsulation', 'private', 'getters'],
            },
          ],

          difficulty: 'beginner',
          estimatedMinutes: 20,
        },

        // ---------------------------------------------------------
        // TOPIC 4.4: INHERITANCE & POLYMORPHISM
        // ---------------------------------------------------------
        {
          id: 'java-inheritance-and-polymorphism',
          title: 'Inheritance, super, and Polymorphism',
          slug: 'inheritance-and-polymorphism',
          description:
            'Extending classes with extends, method overriding (@Override), super keyword, and dynamic method dispatch.',
          learningObjectives: [
            'Inherit classes using the extends keyword.',
            'Override parent methods using @Override.',
            'Invoke parent constructors with super().',
            'Achieve runtime polymorphism through dynamic dispatch.',
          ],
          prerequisites: ['java-encapsulation-access-modifiers'],
          conceptSummary:
            'Inheritance allows a subclass to acquire parent members; polymorphism allows treating subclass objects through a parent reference.',

          detailedExplanation:
            'Java supports single class inheritance (`class Child extends Parent`). Subclasses override methods to provide specific behavior. Dynamic method dispatch determines at runtime which version of an overridden method executes based on the actual object on the heap, not the reference type.',

          syntaxExplanation:
            'public class Animal {\n' +
            '    public void makeSound() { System.out.println("Generic sound"); }\n' +
            '}\n' +
            'public class Dog extends Animal {\n' +
            '    @Override\n' +
            '    public void makeSound() { System.out.println("Woof!"); }\n' +
            '}\n' +
            '// Polymorphism:\n' +
            'Animal a = new Dog();\n' +
            'a.makeSound(); // Prints "Woof!" dynamically!',

          howItWorks: [
            'Dynamic method dispatch resolves methods via virtual method tables (vtable) using invokevirtual.',
            'The actual object type on the heap determines which override runs.',
          ],

          examples: [
            {
              title: 'Polymorphic Payroll System',
              code:
                'class Employee {\n' +
                '    protected String name;\n' +
                '    public Employee(String name) { this.name = name; }\n' +
                '    public double calculatePay() { return 0.0; }\n' +
                '}\n' +
                'class SalariedEmployee extends Employee {\n' +
                '    private double salary;\n' +
                '    public SalariedEmployee(String name, double salary) {\n' +
                '        super(name);\n' +
                '        this.salary = salary;\n' +
                '    }\n' +
                '    @Override\n' +
                '    public double calculatePay() { return salary; }\n' +
                '}',
              explanation:
                'Demonstrates super constructor chaining and method overriding.',
            },
          ],

          commonMistakes: [
            {
              mistake:
                'Thinking Java supports multiple class inheritance (class C extends A, B).',
              explanation:
                'Java forbids multiple class inheritance to avoid the diamond problem; use interfaces instead.',
            },
            {
              mistake: 'Forgetting @Override annotation.',
              explanation:
                'Without @Override, a typo in the method name silently creates a new method instead of overriding.',
            },
          ],

          quickChecks: [
            {
              question:
                'Which keyword links a Java subclass to its parent class?',
              answer: 'extends',
              options: ['implements', 'extends', 'inherits', 'subclass'],
              correctAnswer: 1,
              explanation:
                'Classes use extends to inherit from another class.',
            },
          ],

          practiceQuestions: [
            {
              title:
                'Create a Shape hierarchy with Circle and Rectangle overriding a calculateArea() method.',
              difficulty: 'easy',
              concepts: ['inheritance', 'polymorphism', '@Override'],
            },
          ],

          difficulty: 'beginner',
          estimatedMinutes: 25,
        },

        // ---------------------------------------------------------
        // TOPIC 4.5: ABSTRACTION & INTERFACES
        // ---------------------------------------------------------
        {
          id: 'java-abstraction-and-interfaces',
          title: 'Abstract Classes and Interfaces',
          slug: 'abstraction-and-interfaces',
          description:
            'Contractual design with abstract classes, interface keyword, default methods, and multiple interface implementation.',
          learningObjectives: [
            'Define abstract classes and abstract methods.',
            'Declare and implement interfaces with implements.',
            'Implement multiple interfaces on a single class.',
            'Understand default methods in interfaces.',
          ],
          prerequisites: ['java-inheritance-and-polymorphism'],
          conceptSummary:
            'Abstract classes provide partial implementations; interfaces define 100% abstract contracts that multiple classes can implement.',

          detailedExplanation:
            'An `abstract class` cannot be instantiated directly and can contain both abstract and concrete methods. An `interface` defines contractual capabilities. A class can inherit only one class, but can implement unlimited interfaces (`implements A, B, C`), providing multiple inheritance of type.',

          syntaxExplanation:
            'public interface PaymentGateway {\n' +
            '    boolean charge(double amount);\n' +
            '    // Java 8+ default method:\n' +
            '    default void logReceipt() { System.out.println("Receipt logged."); }\n' +
            '}\n\n' +
            'public class StripeGateway implements PaymentGateway {\n' +
            '    @Override\n' +
            '    public boolean charge(double amount) { return true; }\n' +
            '}',

          howItWorks: [
            'Interface method dispatch uses invokeinterface bytecode.',
            'itable resolution maps interface methods to concrete implementations.',
          ],

          examples: [
            {
              title: 'Multiple Interface Implementation',
              code:
                'interface Serializable { void serialize(); }\n' +
                'interface Printable { void printDetails(); }\n\n' +
                'class Invoice implements Serializable, Printable {\n' +
                '    @Override\n' +
                '    public void serialize() { System.out.println("Saving invoice..."); }\n' +
                '    @Override\n' +
                '    public void printDetails() { System.out.println("Invoice #1001"); }\n' +
                '}',
              explanation:
                'A single class implements multiple orthogonal interfaces.',
            },
          ],

          commonMistakes: [
            {
              mistake:
                'Attempting to instantiate an interface directly with new Interface().',
              explanation:
                'Interfaces have no constructor; instantiate a concrete implementing class.',
            },
            {
              mistake: 'Forgetting to implement all abstract methods.',
              explanation:
                'A non-abstract class must implement every method declared in its interfaces and abstract parent.',
            },
          ],

          quickChecks: [
            {
              question: 'Can a Java class implement more than one interface?',
              answer:
                'Yes, a class can implement multiple interfaces separated by commas',
              options: [
                'No, Java forbids all multiple inheritance',
                'Yes, a class can implement multiple interfaces separated by commas',
                'Only up to two interfaces',
                'Only in Java 17+',
              ],
              correctAnswer: 1,
              explanation: 'Classes can implement any number of interfaces.',
            },
          ],

          practiceQuestions: [
            {
              title:
                'Design an interface Flyable with method fly(), implemented by Bird and Airplane.',
              difficulty: 'easy',
              concepts: ['interface', 'implements', 'abstraction'],
            },
          ],

          difficulty: 'beginner',
          estimatedMinutes: 25,
        },
      ],
    },
  ],
};

export default javaBeginner;