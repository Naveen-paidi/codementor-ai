/**
 * C Curriculum — Advanced Level (GeeksforGeeks-Style Structure)
 * Modules 7-8: File I/O & The C Preprocessor, Systems Programming
 * & Bit Manipulation
 *
 * Each topic follows: Overview -> Objectives -> Prerequisites -> Concept ->
 * Detailed Explanation -> Syntax -> How It Works -> Examples ->
 * Common Mistakes -> Quick Checks -> Practice Questions -> Difficulty
 *
 * Self-contained local curriculum source of truth.
 */

export const cAdvanced = {
  id: 'c-advanced',
  title: 'Level 3: C Systems Programming, File I/O & Bit Manipulation',
  level: 3,
  difficulty: 'advanced',
  description:
    'Deep dive into low-level systems programming: binary and text File I/O, preprocessor metaprogramming, include guards, function pointers, bitwise manipulation, bitfields, and command-line arguments (argc, argv).',

  modules: [
    // =============================================================
    // MODULE 7: FILE I/O & THE C PREPROCESSOR
    // =============================================================
    {
      id: 'c-mod-file-io-preprocessor',
      title: 'File I/O & The C Preprocessor',
      order: 7,
      description:
        'Stream-based file I/O (fopen, fread, fwrite, fclose), preprocessor directives (#define, #ifdef), and multi-file header architecture.',
      topics: [
        // ---------------------------------------------------------
        // TOPIC 7.1: FILE I/O
        // ---------------------------------------------------------
        {
          id: 'c-file-handling-io',
          title: 'File I/O: Streams, Text and Binary Modes',
          slug: 'file-handling-io',
          description:
            'Working with FILE pointers, fopen modes ("r", "w", "rb", "wb"), fgets, fputs, fread, fwrite, and fclose.',
          learningObjectives: [
            'Open and close file streams with fopen and fclose.',
            'Read and write formatted text using fgets and fprintf.',
            'Perform high-throughput binary block I/O using fread and fwrite.',
          ],
          prerequisites: ['c-intermediate'],
          conceptSummary:
            'C handles file I/O through `FILE *` stream handles; text files process character encodings while binary files read/write raw bytes.',
          detailedExplanation:
            'Calling `fopen(filename, mode)` returns an opaque pointer to a `FILE` structure managed by the C runtime library. Modes include `"r"` (read), `"w"` (truncate/write), `"a"` (append), and binary flags `"rb"` / `"wb"`. Binary I/O via `fwrite(&data, sizeof(data), 1, fp)` writes memory structures directly to disk without text conversion.',
          syntaxExplanation:
            'FILE *fp = fopen("data.bin", "wb");\nif (fp == NULL) { perror("Failed to open file"); return 1; }\nfwrite(buffer, sizeof(char), count, fp);\nfclose(fp);',
          howItWorks: [
            'C runtime wraps OS system calls (open, read, write, close) with a user-space memory buffer.',
          ],
          examples: [
            {
              title: 'Binary Struct Serialization to Disk',
              code:
                '#include <stdio.h>\n\ntypedef struct { int id; float score; } Record;\n\nint main(void) {\n    Record r = {42, 98.5f};\n    FILE *fp = fopen("record.dat", "wb");\n    if (fp) {\n        fwrite(&r, sizeof(Record), 1, fp);\n        fclose(fp);\n        printf("Record serialized to disk.\\n");\n    }\n    return 0;\n}',
              explanation:
                'Writes a binary struct directly to a file.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Forgetting to check if fopen returned NULL before attempting to read or write.',
              explanation:
                'Attempting to read or write a NULL file pointer causes an immediate Segmentation Fault.',
            },
          ],
          quickChecks: [
            {
              question:
                'What does fopen return if the file cannot be opened?',
              answer: 'NULL',
              options: ['-1', '0', 'NULL', 'EOF'],
              correctAnswer: 2,
              explanation: 'fopen returns NULL on failure and sets errno.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Write a program to copy a file byte-for-byte in binary mode using a 4KB buffer with fread and fwrite',
              difficulty: 'advanced',
              concepts: ['fopen', 'fread', 'fwrite', 'binary I/O'],
            },
          ],
          difficulty: 'advanced',
          estimatedMinutes: 25,
        },

        // ---------------------------------------------------------
        // TOPIC 7.2: PREPROCESSOR & MACROS
        // ---------------------------------------------------------
        {
          id: 'c-preprocessor-and-macros',
          title: 'The Preprocessor, Macros, and Header Guards',
          slug: 'preprocessor-and-macros',
          description:
            "#define constants and function-like macros, conditional compilation (#ifdef, #ifndef), and header include guards.",
          learningObjectives: [
            'Define constants and parameterized macros with #define.',
            'Prevent multiple header inclusion with #ifndef include guards.',
            'Control compilation targets with #ifdef DEBUG.',
          ],
          prerequisites: ['c-beginner'],
          conceptSummary:
            'The preprocessor performs textual substitution before compilation; header guards prevent duplicate symbol declarations.',
          detailedExplanation:
            'The preprocessor runs before the compiler. `#include` copies file contents; `#define` performs literal token substitution. Parameterized macros must wrap all arguments in parentheses `((x) * (x))` to prevent operator precedence bugs. Include guards (`#ifndef HEADER_H #define HEADER_H ... #endif`) prevent recursive and duplicate header inclusion.',
          syntaxExplanation:
            '#ifndef UTILS_H\n#define UTILS_H\n\n#define MAX(a, b) (((a) > (b)) ? (a) : (b))\n\n#endif // UTILS_H',
          howItWorks: [
            'cpp utility scans tokens and produces pure expanded C text sent directly to cc1 compiler.',
          ],
          examples: [
            {
              title: 'Conditional Debug Logging Macro',
              code:
                '#include <stdio.h>\n\n#ifdef DEBUG\n#define DEBUG_LOG(fmt, ...) printf("[DEBUG] " fmt "\\n", ##__VA_ARGS__)\n#else\n#define DEBUG_LOG(fmt, ...)\n#endif\n\nint main(void) {\n    DEBUG_LOG("System initialized with code: %d", 200);\n    return 0;\n}',
              explanation:
                'Compiles debug statements only when -DDEBUG flag is passed to gcc.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Omitting parentheses around macro arguments, e.g. #define SQUARE(x) x * x. SQUARE(2 + 2) evaluates to 2 + 2 * 2 + 2 = 8, not 16!',
              explanation:
                'Always enclose every parameter and the entire macro expression in parentheses.',
            },
          ],
          quickChecks: [
            {
              question:
                'What is the purpose of #ifndef / #define / #endif guards inside C header files?',
              answer:
                'To prevent duplicate declarations when a header is included multiple times',
              options: [
                'To encrypt the header',
                'To prevent duplicate declarations when a header is included multiple times',
                'To enable C++ compatibility',
                'To link external libraries',
              ],
              correctAnswer: 1,
              explanation:
                'Include guards ensure header contents are processed only once per compilation unit.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Create a header file math_custom.h with safe MIN and CLAMP macros protected by include guards',
              difficulty: 'advanced',
              concepts: ['preprocessor', 'macros', 'include guards'],
            },
          ],
          difficulty: 'advanced',
          estimatedMinutes: 25,
        },
      ],
    },

    // =============================================================
    // MODULE 8: SYSTEMS PROGRAMMING & LOW-LEVEL ARCHITECTURE
    // =============================================================
    {
      id: 'c-mod-systems-programming',
      title: 'Systems Programming & Bit Manipulation',
      order: 8,
      description:
        'Function pointers, callbacks, bitwise operators (&, |, ^, ~, <<, >>), bit masks, bitfields, and command-line arguments (argc, argv).',
      topics: [
        // ---------------------------------------------------------
        // TOPIC 8.1: FUNCTION POINTERS & CALLBACKS
        // ---------------------------------------------------------
        {
          id: 'c-function-pointers-callbacks',
          title: 'Function Pointers and Callback Architecture',
          slug: 'function-pointers-callbacks',
          description:
            'Storing function addresses, dynamic dispatch, and implementing generic sorting with qsort.',
          learningObjectives: [
            'Declare and invoke function pointers.',
            'Pass function pointers as callbacks.',
            'Use standard library qsort with custom comparator functions.',
          ],
          prerequisites: ['c-pointers-and-memory-addresses'],
          conceptSummary:
            'Function pointers store the entry-point address of executable machine code in the text segment.',
          detailedExplanation:
            'Like variables, functions reside at specific memory addresses in the code/text segment. A function pointer variable `int (*operation)(int, int)` can hold references to different functions with matching signatures, enabling runtime polymorphism, plugin hooks, and generic callbacks.',
          syntaxExplanation:
            'int add(int a, int b) { return a + b; }\nint (*func_ptr)(int, int) = add;\nint result = func_ptr(10, 20); // Calls add through pointer',
          howItWorks: [
            'Translates to indirect branch instruction in assembly: CALL RAX.',
          ],
          examples: [
            {
              title: 'Generic Array Sorting with qsort Callback',
              code:
                '#include <stdio.h>\n#include <stdlib.h>\n\nint compare_desc(const void *a, const void *b) {\n    int int_a = *(const int *)a;\n    int int_b = *(const int *)b;\n    return int_b - int_a; // Descending order\n}\nint main(void) {\n    int nums[] = {50, 10, 90, 30, 70};\n    qsort(nums, 5, sizeof(int), compare_desc); // Passes callback pointer\n    for (int i = 0; i < 5; i++) printf("%d ", nums[i]);\n    printf("\\n");\n    return 0;\n}',
              explanation:
                'Passes a custom comparator function pointer to standard qsort.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Confusing int *fn() (function returning pointer) with int (*fn)() (pointer to function).',
              explanation:
                'Parentheses around (*fn) are strictly required to declare a function pointer.',
            },
          ],
          quickChecks: [
            {
              question: 'What does a function pointer store in C?',
              answer:
                "The memory address of the function's executable code in the text segment",
              options: [
                'The return value of the function',
                "The memory address of the function's executable code",
                'The names of its parameters',
                'A copy of its local variables',
              ],
              correctAnswer: 1,
              explanation: 'Function pointers store code entry addresses.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Implement a map function in C that applies a function pointer to every element in an integer array',
              difficulty: 'advanced',
              concepts: ['function pointers', 'callbacks'],
            },
          ],
          difficulty: 'advanced',
          estimatedMinutes: 25,
        },

        // ---------------------------------------------------------
        // TOPIC 8.2: BITWISE OPERATIONS & MASKS
        // ---------------------------------------------------------
        {
          id: 'c-bitwise-operations-and-masks',
          title: 'Bitwise Manipulation and Bit Masks',
          slug: 'bitwise-operations-and-masks',
          description:
            'Bitwise operators (&, |, ^, ~, <<, >>), setting, clearing, toggling bits, and bitfield structs.',
          learningObjectives: [
            'Execute bitwise AND, OR, XOR, NOT, and bit shifts.',
            'Set, clear, and toggle specific bit flags using bit masks.',
            'Define compact bitfield structs for hardware registers.',
          ],
          prerequisites: ['c-beginner'],
          conceptSummary:
            'Bitwise operators manipulate raw binary bits directly, enabling high-performance flags, masks, and hardware driver control.',
          detailedExplanation:
            '1. `&` (AND): checks or masks bits. 2. `|` (OR): sets bits. 3. `^` (XOR): toggles bits. 4. `~` (NOT): inverts bits. 5. `<<` / `>>`: shifts bits left/right. Using bit masks, a single 32-bit integer can store 32 independent boolean flags, minimizing memory footprint in embedded systems.',
          syntaxExplanation:
            '#define FLAG_READ  (1 << 0) // 0001\n#define FLAG_WRITE (1 << 1) // 0010\nint perms = 0;\nperms |= FLAG_READ; // Set read bit\nif (perms & FLAG_READ) { /* Read allowed */ }',
          howItWorks: [
            'Translates directly to single-cycle CPU instructions (AND, OR, XOR, SHL, SHR).',
          ],
          examples: [
            {
              title: 'Bitfield Struct for Compact Network Header',
              code:
                '#include <stdio.h>\n\ntypedef struct {\n    unsigned int version : 4; // Uses exactly 4 bits\n    unsigned int priority : 2; // Uses exactly 2 bits\n    unsigned int flag_ack : 1; // Uses exactly 1 bit\n} CompactHeader;\n\nint main(void) {\n    CompactHeader h = {4, 3, 1};\n    printf("Header size: %zu bytes\\n", sizeof(h));\n    return 0;\n}',
              explanation:
                'Packs multiple fields into a single byte word using bitfields.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Confusing logical operators (&&, ||) with bitwise operators (&, |).',
              explanation:
                '&& evaluates boolean short-circuit logic; & operates on individual binary bits.',
            },
          ],
          quickChecks: [
            {
              question:
                'Which bitwise operation clears (turns to 0) the nth bit of variable x while leaving all other bits intact?',
              answer: 'x &= ~(1 << n)',
              options: [
                'x |= (1 << n)',
                'x &= ~(1 << n)',
                'x ^= (1 << n)',
                'x >>= n',
              ],
              correctAnswer: 1,
              explanation:
                'Inverting a single-bit mask with ~ and applying & clears that specific bit.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Write functions to set_bit, clear_bit, and toggle_bit on a 32-bit unsigned integer',
              difficulty: 'advanced',
              concepts: ['bitwise', 'masks', 'shifts'],
            },
          ],
          difficulty: 'advanced',
          estimatedMinutes: 25,
        },

        // ---------------------------------------------------------
        // TOPIC 8.3: COMMAND-LINE ARGUMENTS
        // ---------------------------------------------------------
        {
          id: 'c-command-line-arguments',
          title: 'Command-Line Arguments (argc, argv)',
          slug: 'command-line-arguments',
          description:
            'Writing CLI utilities, parsing argument vectors, and handling user flags.',
          learningObjectives: [
            'Declare main with int argc and char *argv[].',
            'Iterate and parse command-line argument tokens.',
            'Convert string arguments to numbers using atoi/strtol.',
          ],
          prerequisites: ['c-strings-null-terminator'],
          conceptSummary:
            'Command-line arguments allow users to pass parameters to programs upon invocation: `argc` counts arguments, `argv` contains string pointers.',
          detailedExplanation:
            'When invoked from a terminal, the operating system passes: 1. `int argc`: argument count (always at least 1, as `argv[0]` is the program executable name), 2. `char *argv[]`: array of null-terminated string pointers. Safe parsing uses `strtol()` rather than `atoi()` because `strtol()` reports invalid non-numeric characters.',
          syntaxExplanation:
            'int main(int argc, char *argv[]) {\n    for (int i = 0; i < argc; i++) {\n        printf("argv[%d] = %s\\n", i, argv[i]);\n    }\n    return 0;\n}',
          howItWorks: [
            'Operating system kernel constructs the argv string array on the process stack before jumping to _start.',
          ],
          examples: [
            {
              title: 'CLI File Viewer Utility',
              code:
                '#include <stdio.h>\n\nint main(int argc, char *argv[]) {\n    if (argc < 2) {\n        fprintf(stderr, "Usage: %s <filename>\\n", argv[0]);\n        return 1;\n    }\n    printf("Target file specified: %s\\n", argv[1]);\n    return 0;\n}',
              explanation:
                'Validates command-line parameters before proceeding.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Accessing argv[1] without first checking if argc >= 2.',
              explanation:
                'Accessing out-of-bounds argv indices causes a Segmentation Fault when no arguments are provided.',
            },
          ],
          quickChecks: [
            {
              question:
                'What does argv[0] always contain in standard C programs?',
              answer:
                'The program executable name or path invoked by the user',
              options: [
                'The first user argument',
                'The program executable name or path',
                'The operating system name',
                'NULL',
              ],
              correctAnswer: 1,
              explanation:
                'argv[0] is the command string used to launch the program.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Write a command line tool my_grep that searches for a word inside a specified text file',
              difficulty: 'advanced',
              concepts: ['argc', 'argv', 'CLI'],
            },
          ],
          difficulty: 'advanced',
          estimatedMinutes: 20,
        },
      ],
    },
  ],
};

export default cAdvanced;