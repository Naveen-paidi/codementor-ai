/**
 * C Curriculum — Intermediate Level (GeeksforGeeks-Style Structure)
 * Modules 4-6: Arrays/Strings/Pointer Foundations, Structs/Unions/Enums,
 * Dynamic Memory Allocation (Heap)
 *
 * Each topic follows: Overview -> Objectives -> Prerequisites -> Concept ->
 * Detailed Explanation -> Syntax -> How It Works -> Examples ->
 * Common Mistakes -> Quick Checks -> Practice Questions -> Difficulty
 *
 * Self-contained local curriculum source of truth.
 */

export const cIntermediate = {
  id: 'c-intermediate',
  title: 'Level 2: C Pointers, Structures & Dynamic Memory',
  level: 2,
  difficulty: 'intermediate',
  description:
    'Master C memory architecture: pointers, dereferencing, pointer arithmetic, null-terminated strings (string.h), user-defined structs/unions, and heap memory management with malloc, calloc, realloc, and free.',

  modules: [
    // =============================================================
    // MODULE 4: ARRAYS, STRINGS & POINTER FOUNDATIONS
    // =============================================================
    {
      id: 'c-mod-pointers-arrays-strings',
      title: 'Arrays, Strings & Pointer Foundations',
      order: 4,
      description:
        'Memory addresses, pointer dereferencing (*), address-of (&), pointer arithmetic, arrays as pointers, and null-terminated strings.',
      topics: [
        // ---------------------------------------------------------
        // TOPIC 4.1: POINTERS & MEMORY ADDRESSES
        // ---------------------------------------------------------
        {
          id: 'c-pointers-and-memory-addresses',
          title: 'Pointers and Memory Addresses',
          slug: 'pointers-and-memory-addresses',
          description:
            'Understanding memory hardware, pointers as address variables, dereferencing with *, and passing pointers to simulate pass-by-reference.',
          learningObjectives: [
            'Inspect memory addresses using the address-of operator (&).',
            'Declare pointer variables and dereference with the asterisk (*).',
            'Mutate caller variables from functions using pointers.',
          ],
          prerequisites: ['c-beginner'],
          conceptSummary:
            'A pointer is a variable that stores the physical/virtual hexadecimal memory address of another variable.',
          detailedExplanation:
            'Every byte in computer RAM has a unique numerical memory address. If variable `x = 10` is stored at address `0x7ffee4`, then `int *ptr = &x;` stores that address. Dereferencing `*ptr` reads or writes the data located at that target address, allowing functions to mutate caller memory directly.',
          syntaxExplanation:
            'int val = 42;\nint *ptr = &val; // ptr stores address of val\n*ptr = 100;      // Changes val to 100 via pointer dereference!',
          howItWorks: [
            'Maps directly to CPU register indirect addressing: MOV [RAX], 100.',
          ],
          examples: [
            {
              title: 'Classic In-Place Swap Function with Pointers',
              code:
                '#include <stdio.h>\n\nvoid swap(int *a, int *b) {\n    int temp = *a;\n    *a = *b;\n    *b = temp;\n}\nint main(void) {\n    int x = 10, y = 20;\n    swap(&x, &y); // Passes memory addresses of x and y\n    printf("Swapped: x = %d, y = %d\\n", x, y); // x=20, y=10\n    return 0;\n}',
              explanation:
                'Mutates caller variables across stack frames using pointer dereferencing.',
            },
          ],
          commonMistakes: [
            {
              mistake: 'Dereferencing an uninitialized or NULL pointer.',
              explanation:
                'Causes an immediate Segmentation Fault (SIGSEGV) crash. Always initialize pointers or check for NULL.',
            },
          ],
          quickChecks: [
            {
              question:
                'Which operator retrieves the memory address of an existing variable in C?',
              answer: '& (Address-of operator)',
              options: [
                '* (Dereference operator)',
                '& (Address-of operator)',
                '-> (Arrow operator)',
                '% (Modulo operator)',
              ],
              correctAnswer: 1,
              explanation: '& returns the memory address of its operand.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Write a function divide_with_remainder(int a, int b, int *rem) that returns quotient and stores remainder via pointer',
              difficulty: 'intermediate',
              concepts: ['pointers', 'dereferencing'],
            },
          ],
          difficulty: 'intermediate',
          estimatedMinutes: 25,
        },

        // ---------------------------------------------------------
        // TOPIC 4.2: POINTER ARITHMETIC & ARRAYS
        // ---------------------------------------------------------
        {
          id: 'c-pointer-arithmetic-and-arrays',
          title: 'Pointer Arithmetic and Arrays as Pointers',
          slug: 'pointer-arithmetic-and-arrays',
          description:
            'Pointer addition/subtraction, scale factors by type size, and array decay to pointers.',
          learningObjectives: [
            'Perform pointer arithmetic (ptr++, ptr + i).',
            'Understand pointer scaling by sizeof(type).',
            'Explain how array names decay into pointers to their first elements.',
          ],
          prerequisites: ['c-pointers-and-memory-addresses'],
          conceptSummary:
            'Adding 1 to a pointer advances it by `sizeof(*ptr)` bytes; an array name decays to a pointer to its first element `&arr[0]`.',
          detailedExplanation:
            'When you do `ptr + 1`, the compiler does not advance the address by 1 byte; it advances by `1 * sizeof(type)` (e.g. 4 bytes for `int*`). In C, `arr[i]` is literally translated by the compiler as `*(arr + i)`.',
          syntaxExplanation:
            'int arr[3] = {10, 20, 30};\nint *p = arr; // Decays to &arr[0]\nprintf("%d\\n", *(p + 1)); // Prints 20 (scaled by sizeof(int))',
          howItWorks: [
            'Compiler calculates address offset: BaseAddress + (Index * ElementSize).',
          ],
          examples: [
            {
              title: 'Traversing an Array with Pointers',
              code:
                '#include <stdio.h>\n\nint main(void) {\n    int nums[4] = {100, 200, 300, 400};\n    int *ptr = nums;\n    for (int i = 0; i < 4; i++) {\n        printf("Index %d: Address %p, Value %d\\n", i, (void*)(ptr + i), *(ptr + i));\n    }\n    return 0;\n}',
              explanation:
                'Demonstrates memory addresses advancing by 4 bytes per integer.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Advancing a pointer past the bounds of an array and reading/writing garbage memory.',
              explanation:
                'C does not perform bounds checking; out-of-bounds pointer writes cause undefined behavior and security exploits.',
            },
          ],
          quickChecks: [
            {
              question:
                'If ptr is an int* pointing to address 0x1000, what address does ptr + 2 point to on a 32-bit int architecture?',
              answer: '0x1008 (advances 2 * 4 = 8 bytes)',
              options: ['0x1002', '0x1004', '0x1008', '0x1016'],
              correctAnswer: 2,
              explanation:
                'Pointer arithmetic scales by sizeof(int), which is 4 bytes.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Implement a custom array reverse function utilizing two pointers (start and end) swapping elements',
              difficulty: 'intermediate',
              concepts: ['pointer arithmetic', 'arrays'],
            },
          ],
          difficulty: 'intermediate',
          estimatedMinutes: 25,
        },

        // ---------------------------------------------------------
        // TOPIC 4.3: C STRINGS & NULL TERMINATOR
        // ---------------------------------------------------------
        {
          id: 'c-strings-null-terminator',
          title: 'C Strings and the string.h Library',
          slug: 'strings-null-terminator',
          description:
            'Null-terminated char arrays (\\0), buffer overflows, strlen, strcpy, strcmp, and safe alternatives (strncpy).',
          learningObjectives: [
            'Explain null-terminated strings in C.',
            "Understand why missing '\\0' causes buffer over-reads.",
            'Use string.h functions: strlen, strcmp, strncpy, strcat.',
          ],
          prerequisites: ['c-pointer-arithmetic-and-arrays'],
          conceptSummary:
            "C strings are arrays of characters terminated by the null character `'\\0'` (ASCII 0).",
          detailedExplanation:
            "C has no native string object. A string is simply a sequence of bytes ending with `'\\0'`. Functions like `strlen()` scan memory until encountering `0`. If `'\\0'` is missing, functions read past buffer boundaries, leaking sensitive memory or causing Segmentation Faults. Unsafe functions like `strcpy()` are notorious for buffer overflow vulnerabilities.",
          syntaxExplanation:
            'char msg[6] = "Hello"; // Takes 6 bytes: \'H\', \'e\', \'l\', \'l\', \'o\', \'\\0\'\n// string.h utilities:\nint len = strlen(msg); // 5 characters (excludes \\0)',
          howItWorks: [
            'Memory scans sequential bytes until byte value 0x00 is matched.',
          ],
          examples: [
            {
              title: 'Safe String Operations with string.h',
              code:
                '#include <stdio.h>\n#include <string.h>\n\nint main(void) {\n    char greeting[20] = "Hello";\n    strncat(greeting, ", World!", sizeof(greeting) - strlen(greeting) - 1);\n    printf("Result: %s (Length: %zu)\\n", greeting, strlen(greeting));\n    if (strcmp(greeting, "Hello, World!") == 0) {\n        printf("Strings are identical!\\n");\n    }\n    return 0;\n}',
              explanation:
                'Uses bounded string concatenation and strcmp comparison.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                "Allocating an array of size N for a string of N characters without reserving room for '\\0'.",
              explanation:
                'A string of length N requires an array of size N + 1 to store the terminating null byte.',
            },
          ],
          quickChecks: [
            {
              question: 'What character marks the end of a string in C?',
              answer: "'\\0' (Null character, ASCII 0)",
              options: [
                "'\\n'",
                "'\\0' (Null character, ASCII 0)",
                "'EOF'",
                "'\\t'",
              ],
              correctAnswer: 1,
              explanation: 'The null byte \\0 terminates C strings.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Implement your own custom version of strlen: size_t my_strlen(const char *s)',
              difficulty: 'intermediate',
              concepts: ['C strings', 'null terminator', 'strlen'],
            },
          ],
          difficulty: 'intermediate',
          estimatedMinutes: 20,
        },
      ],
    },

    // =============================================================
    // MODULE 5: USER-DEFINED TYPES: STRUCTS, UNIONS & ENUMS
    // =============================================================
    {
      id: 'c-mod-structs-unions',
      title: 'Structs, Unions & Enums',
      order: 5,
      description:
        'Encapsulating heterogeneous data with struct, typedef, arrow operator (->), memory padding/alignment, unions, and enums.',
      topics: [
        // ---------------------------------------------------------
        // TOPIC 5.1: STRUCTS & TYPEDEF
        // ---------------------------------------------------------
        {
          id: 'c-structs-and-typedef',
          title: 'Structures (struct) and typedef',
          slug: 'structs-and-typedef',
          description:
            'Grouping heterogeneous variables, defining records, typedef aliases, dot notation, and arrow operator (->) for pointers.',
          learningObjectives: [
            'Define custom structured data types using struct.',
            'Simplify type names using typedef.',
            'Access members with dot (.) on instances and arrow (->) on pointers.',
          ],
          prerequisites: ['c-pointers-and-memory-addresses'],
          conceptSummary:
            '`struct` groups variables of different types into a single composite record; `typedef` assigns clean type aliases.',
          detailedExplanation:
            'Structures allow modeling complex records (e.g. a Student with id, name, and gpa). When passing a struct pointer to a function, the arrow operator `ptr->field` is shorthand for `(*ptr).field`. Memory alignment may insert padding bytes between struct members for CPU efficiency.',
          syntaxExplanation:
            'typedef struct {\n    int id;\n    char name[32];\n    float gpa;\n} Student;\n\nStudent s1 = {101, "Alice", 3.85f};\nStudent *p = &s1;\nprintf("GPA: %.2f\\n", p->gpa); // Arrow operator on pointer',
          howItWorks: [
            'Calculates field offsets at compile time: struct base address + member offset.',
          ],
          examples: [
            {
              title: 'Complete Struct and Pointer Mutation',
              code:
                '#include <stdio.h>\n\ntypedef struct {\n    int x;\n    int y;\n} Point;\n\nvoid translate(Point *p, int dx, int dy) {\n    p->x += dx;\n    p->y += dy;\n}\nint main(void) {\n    Point pt = {10, 20};\n    translate(&pt, 5, -5);\n    printf("New Point: (%d, %d)\\n", pt.x, pt.y); // (15, 15)\n    return 0;\n}',
              explanation:
                'Mutates struct fields efficiently through a pointer using arrow syntax.',
            },
          ],
          commonMistakes: [
            {
              mistake: 'Writing *ptr.field instead of (*ptr).field or ptr->field.',
              explanation:
                'The dot operator has higher precedence than *; use ptr->field.',
            },
          ],
          quickChecks: [
            {
              question:
                'What operator accesses a struct member through a pointer to the struct?',
              answer: '-> (Arrow operator)',
              options: [
                '. (Dot operator)',
                '-> (Arrow operator)',
                ':: (Scope operator)',
                '& (Address operator)',
              ],
              correctAnswer: 1,
              explanation:
                'The arrow operator ptr->member dereferences the pointer and accesses the field.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Define an Employee struct with id, name, and salary, and write a function to apply a 10% raise',
              difficulty: 'intermediate',
              concepts: ['struct', 'typedef', 'arrow operator'],
            },
          ],
          difficulty: 'intermediate',
          estimatedMinutes: 25,
        },

        // ---------------------------------------------------------
        // TOPIC 5.2: UNIONS & ENUMS
        // ---------------------------------------------------------
        {
          id: 'c-unions-and-enums',
          title: 'Unions and Enumerations (enum)',
          slug: 'unions-and-enums',
          description:
            'Shared memory representations with union, memory sizing, and named integral constants with enum.',
          learningObjectives: [
            'Define and use unions for memory-shared fields.',
            'Understand union size equal to its largest member.',
            'Define readable state machines and flags with enum.',
          ],
          prerequisites: ['c-structs-and-typedef'],
          conceptSummary:
            'A `union` stores different data types in the exact same memory location; an `enum` defines named integer constants.',
          detailedExplanation:
            'While a struct allocates memory for all its fields combined, a `union` allocates only enough memory for its single largest member. All members share the exact same starting memory address. Modifying one member overwrites the others. `enum` maps names to sequential integers, improving code readability.',
          syntaxExplanation:
            'typedef union {\n    int i;\n    float f;\n    char b[4];\n} DataPacket; // Takes only 4 bytes total in memory!\n\ntypedef enum {\n    STATUS_PENDING,\n    STATUS_ACTIVE,\n    STATUS_FAILED\n} StatusCode;',
          howItWorks: [
            'Union members share offset 0 in the binary struct layout.',
          ],
          examples: [
            {
              title: 'Inspecting Binary Bytes with a Union',
              code:
                '#include <stdio.h>\n\ntypedef union {\n    int integer;\n    unsigned char bytes[4];\n} TypePunn;\n\nint main(void) {\n    TypePunn tp;\n    tp.integer = 0x12345678;\n    printf("Byte 0: 0x%02X\\n", tp.bytes[0]); // Reveals endianness!\n    return 0;\n}',
              explanation:
                'Uses a union to inspect the raw binary byte layout of an integer.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Assuming all union members maintain their values simultaneously.',
              explanation:
                'A union can only hold the value of one member at a time; assigning to member B corrupts member A.',
            },
          ],
          quickChecks: [
            {
              question:
                'How is the total memory size of a union determined in C?',
              answer:
                'It is equal to the size of its largest member (plus alignment)',
              options: [
                'Sum of all member sizes',
                'It is equal to the size of its largest member',
                'Always 8 bytes',
                'Zero bytes',
              ],
              correctAnswer: 1,
              explanation:
                'Unions share memory, so the size is determined by the largest member.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Implement a tagged union representing a JSON value (number, string, or boolean)',
              difficulty: 'intermediate',
              concepts: ['union', 'enum', 'tagged union'],
            },
          ],
          difficulty: 'intermediate',
          estimatedMinutes: 20,
        },
      ],
    },

    // =============================================================
    // MODULE 6: DYNAMIC MEMORY ALLOCATION
    // =============================================================
    {
      id: 'c-mod-dynamic-memory',
      title: 'Dynamic Memory Allocation (Heap)',
      order: 6,
      description:
        'Managing heap memory with malloc, calloc, realloc, and free, preventing memory leaks, and dangling pointers.',
      topics: [
        // ---------------------------------------------------------
        // TOPIC 6.1: MALLOC/CALLOC/FREE
        // ---------------------------------------------------------
        {
          id: 'c-malloc-calloc-free',
          title: 'Heap Allocation: malloc, calloc, and free',
          slug: 'malloc-calloc-free',
          description:
            'Allocating runtime memory with malloc (uninitialized) and calloc (zeroed), and releasing memory with free.',
          learningObjectives: [
            'Allocate heap memory with malloc(size).',
            'Allocate zero-initialized arrays with calloc(num, size).',
            'Always check for NULL allocation failures.',
            'Release memory back to the OS using free(ptr).',
          ],
          prerequisites: ['c-pointers-and-memory-addresses'],
          conceptSummary:
            'Stack memory is fixed and scoped; dynamic memory is allocated on the heap via `malloc`/`calloc` and must be released via `free`.',
          detailedExplanation:
            'Stack variables are destroyed when their enclosing function exits. To keep data alive across function calls or allocate buffers of runtime-determined size, programs allocate heap memory using `<stdlib.h>`. `malloc(bytes)` allocates raw uninitialized memory. `calloc(n, size)` zeroes out allocated memory. Failing to call `free()` causes memory leaks.',
          syntaxExplanation:
            '#include <stdlib.h>\nint *arr = (int *)malloc(10 * sizeof(int));\nif (arr == NULL) { /* Handle allocation failure */ }\nfree(arr);\narr = NULL; // Prevent dangling pointer',
          howItWorks: [
            'glibc malloc requests memory pages from the kernel via brk or mmap system calls.',
          ],
          examples: [
            {
              title: 'Dynamic Array Allocation and Release',
              code:
                '#include <stdio.h>\n#include <stdlib.h>\n\nint main(void) {\n    int n = 5;\n    int *nums = malloc(n * sizeof(int));\n    if (nums == NULL) return 1;\n    for (int i = 0; i < n; i++) nums[i] = (i + 1) * 10;\n    for (int i = 0; i < n; i++) printf("%d ", nums[i]);\n    printf("\\n");\n    free(nums); // Returns heap block\n    nums = NULL;\n    return 0;\n}',
              explanation:
                'Allocates, populates, prints, and safely deallocates a dynamic array.',
            },
          ],
          commonMistakes: [
            {
              mistake:
                'Using memory after calling free(ptr) (Use-After-Free) or failing to set ptr = NULL.',
              explanation:
                'Dangling pointers lead to data corruption and critical security exploits. Always nullify pointers after free.',
            },
          ],
          quickChecks: [
            {
              question:
                'What value does malloc return if the operating system runs out of heap memory?',
              answer: 'NULL',
              options: ['0', 'NULL', '-1', 'Throws an exception'],
              correctAnswer: 1,
              explanation: 'malloc returns NULL on allocation failure.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Write a program that dynamically allocates an array of N floats entered by the user and computes their average',
              difficulty: 'intermediate',
              concepts: ['malloc', 'free', 'heap'],
            },
          ],
          difficulty: 'intermediate',
          estimatedMinutes: 25,
        },

        // ---------------------------------------------------------
        // TOPIC 6.2: REALLOC & MEMORY LEAKS
        // ---------------------------------------------------------
        {
          id: 'c-realloc-and-memory-leaks',
          title: 'Resizing with realloc and Preventing Leaks',
          slug: 'realloc-and-memory-leaks',
          description:
            'Dynamically expanding or shrinking heap blocks with realloc without losing data on failure.',
          learningObjectives: [
            'Resize heap memory blocks with realloc.',
            'Avoid memory leaks during realloc failures with temporary pointers.',
            'Detect memory leaks using Valgrind.',
          ],
          prerequisites: ['c-malloc-calloc-free'],
          conceptSummary:
            '`realloc` resizes an existing heap block, moving it to a new location if necessary; use a temporary pointer to prevent leaks on failure.',
          detailedExplanation:
            '`realloc(ptr, new_size)` expands or contracts an existing heap allocation. If contiguous space is unavailable in place, it allocates a new block, copies existing data over, frees the old block, and returns the new pointer. If it fails, it returns `NULL` while leaving the original block intact; therefore, NEVER assign directly to the original pointer `ptr = realloc(ptr, size)`.',
          syntaxExplanation:
            'int *temp = realloc(arr, new_size);\nif (temp == NULL) {\n    // Original arr is still allocated! Handle error.\n} else {\n    arr = temp;\n}',
          howItWorks: [
            'Queries heap chunk headers; extends chunk if next chunk is free, else allocates fresh chunk and memcpys.',
          ],
          examples: [
            {
              title: 'Dynamic Resizing Growth Pattern',
              code:
                '#include <stdio.h>\n#include <stdlib.h>\n\nint main(void) {\n    int *list = malloc(2 * sizeof(int));\n    list[0] = 1; list[1] = 2;\n    // Grow to 4 elements safely:\n    int *temp = realloc(list, 4 * sizeof(int));\n    if (temp != NULL) {\n        list = temp;\n        list[2] = 3; list[3] = 4;\n        for (int i = 0; i < 4; i++) printf("%d ", list[i]);\n        printf("\\n");\n    }\n    free(list);\n    return 0;\n}',
              explanation:
                'Safely reallocates and doubles array capacity.',
            },
          ],
          commonMistakes: [
            {
              mistake: 'Writing ptr = realloc(ptr, new_size); directly.',
              explanation:
                'If realloc fails and returns NULL, ptr is overwritten, losing the reference to the original block and leaking memory.',
            },
          ],
          quickChecks: [
            {
              question:
                'What happens to the old memory block when realloc moves data to a new heap location?',
              answer: 'The old block is automatically freed by realloc',
              options: [
                'It leaks',
                'The old block is automatically freed by realloc',
                'It remains allocated as a backup',
                'It is copied to the stack',
              ],
              correctAnswer: 1,
              explanation:
                'realloc automatically frees the original block when relocating.',
            },
          ],
          practiceQuestions: [
            {
              title:
                'Build a dynamic Vector in C that automatically doubles capacity when full using realloc',
              difficulty: 'intermediate',
              concepts: ['realloc', 'dynamic vector'],
            },
          ],
          difficulty: 'intermediate',
          estimatedMinutes: 25,
        },
      ],
    },
  ],
};

export default cIntermediate;