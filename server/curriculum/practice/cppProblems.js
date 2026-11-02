/**
 * Canonical C++ Coding Practice Problems Bank
 * Auto-generated with 10 test cases per problem (3 public, 7 hidden).
 */

export const cppProblems = [
  {
    "id": "cpp-intro-1",
    "languageId": "cpp",
    "language": "cpp",
    "level": "beginner",
    "topicId": "cpp-what-is-cpp",
    "title": "C++ Modern Standard Feature Banner",
    "slug": "c-modern-standard-feature-banner",
    "difficulty": "easy",
    "problemStatement": "Modern C++ has evolved across multiple ISO standards: C++11, C++14, C++17, C++20, and C++23. Read an ISO standard version number (11, 14, 17, 20, or 23) and output its landmark feature: \n11 -> \"C++11: Auto, Lambdas, Smart Pointers\"\n14 -> \"C++14: Generic Lambdas, make_unique\"\n17 -> \"C++17: Structured Bindings, std::optional, std::filesystem\"\n20 -> \"C++20: Concepts, Ranges, Coroutines, Modules\"\n23 -> \"C++23: std::expected, Deducing this, Monadic operations\"\nIf unrecognized, print \"Unknown Standard\".",
    "description": "Modern C++ has evolved across multiple ISO standards: C++11, C++14, C++17, C++20, and C++23. Read an ISO standard version number (11, 14, 17, 20, or 23) and output its landmark feature: \n11 -> \"C++11: Auto, Lambdas, Smart Pointers\"\n14 -> \"C++14: Generic Lambdas, make_unique\"\n17 -> \"C++17: Structured Bindings, std::optional, std::filesystem\"\n20 -> \"C++20: Concepts, Ranges, Coroutines, Modules\"\n23 -> \"C++23: std::expected, Deducing this, Monadic operations\"\nIf unrecognized, print \"Unknown Standard\".",
    "inputFormat": "An integer standard version (e.g. 11, 14, 17, 20, 23).",
    "outputFormat": "Landmark feature string.",
    "constraints": [
      "Standard is an integer"
    ],
    "examples": [
      {
        "input": "20",
        "output": "C++20: Concepts, Ranges, Coroutines, Modules"
      },
      {
        "input": "98",
        "output": "Unknown Standard"
      }
    ],
    "starterCode": {
      "cpp": "#include <iostream>\n\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "cpp-intro-1-tc-1",
        "input": "20",
        "expectedOutput": "C++20: Concepts, Ranges, Coroutines, Modules",
        "isHidden": false
      },
      {
        "id": "cpp-intro-1-tc-2",
        "input": "11",
        "expectedOutput": "C++11: Auto, Lambdas, Smart Pointers",
        "isHidden": false
      },
      {
        "id": "cpp-intro-1-tc-3",
        "input": "17",
        "expectedOutput": "C++17: Structured Bindings, std::optional, std::filesystem",
        "isHidden": false
      },
      {
        "id": "cpp-intro-1-tc-4",
        "input": "14",
        "expectedOutput": "C++14: Generic Lambdas, make_unique",
        "isHidden": true
      },
      {
        "id": "cpp-intro-1-tc-5",
        "input": "23",
        "expectedOutput": "C++23: std::expected, Deducing this, Monadic operations",
        "isHidden": true
      },
      {
        "id": "cpp-intro-1-tc-6",
        "input": "98",
        "expectedOutput": "Unknown Standard",
        "isHidden": true
      },
      {
        "id": "cpp-intro-1-tc-7",
        "input": "03",
        "expectedOutput": "Unknown Standard",
        "isHidden": true
      },
      {
        "id": "cpp-intro-1-tc-8",
        "input": "26",
        "expectedOutput": "Unknown Standard",
        "isHidden": true
      },
      {
        "id": "cpp-intro-1-tc-9",
        "input": "11",
        "expectedOutput": "C++11: Auto, Lambdas, Smart Pointers",
        "isHidden": true
      },
      {
        "id": "cpp-intro-1-tc-10",
        "input": "20",
        "expectedOutput": "C++20: Concepts, Ranges, Coroutines, Modules",
        "isHidden": true
      }
    ]
  },
  {
    "id": "cpp-intro-2",
    "languageId": "cpp",
    "language": "cpp",
    "level": "beginner",
    "topicId": "cpp-what-is-cpp",
    "title": "Fast I/O Stream Synchronization Benchmark",
    "slug": "fast-i-o-stream-synchronization-benchmark",
    "difficulty": "easy",
    "problemStatement": "In modern competitive and high-performance C++, disabling synchronization between C and C++ standard streams (`std::ios_base::sync_with_stdio(false); std::cin.tie(NULL);`) dramatically accelerates stream reads. Read an integer N followed by N integers. Compute and print their sum as a 64-bit long long.",
    "description": "In modern competitive and high-performance C++, disabling synchronization between C and C++ standard streams (`std::ios_base::sync_with_stdio(false); std::cin.tie(NULL);`) dramatically accelerates stream reads. Read an integer N followed by N integers. Compute and print their sum as a 64-bit long long.",
    "inputFormat": "First line integer N. Next line N space-separated integers.",
    "outputFormat": "Total sum as a long long integer.",
    "constraints": [
      "1 <= N <= 100000",
      "-10^9 <= each integer <= 10^9"
    ],
    "examples": [
      {
        "input": "5\n10 20 30 40 50",
        "output": "150"
      }
    ],
    "starterCode": {
      "cpp": "#include <iostream>\n\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "cpp-intro-2-tc-1",
        "input": "5\n10 20 30 40 50",
        "expectedOutput": "150",
        "isHidden": false
      },
      {
        "id": "cpp-intro-2-tc-2",
        "input": "1\n1000000000",
        "expectedOutput": "1000000000",
        "isHidden": false
      },
      {
        "id": "cpp-intro-2-tc-3",
        "input": "3\n-50 100 -50",
        "expectedOutput": "0",
        "isHidden": false
      },
      {
        "id": "cpp-intro-2-tc-4",
        "input": "4\n1 2 3 4",
        "expectedOutput": "10",
        "isHidden": true
      },
      {
        "id": "cpp-intro-2-tc-5",
        "input": "6\n-10 -20 -30 -40 -50 -60",
        "expectedOutput": "-210",
        "isHidden": true
      },
      {
        "id": "cpp-intro-2-tc-6",
        "input": "5\n1000000000 1000000000 1000000000 1000000000 1000000000",
        "expectedOutput": "5000000000",
        "isHidden": true
      },
      {
        "id": "cpp-intro-2-tc-7",
        "input": "2\n-999999999 999999999",
        "expectedOutput": "0",
        "isHidden": true
      },
      {
        "id": "cpp-intro-2-tc-8",
        "input": "4\n500 500 500 500",
        "expectedOutput": "2000",
        "isHidden": true
      },
      {
        "id": "cpp-intro-2-tc-9",
        "input": "7\n1 1 1 1 1 1 1",
        "expectedOutput": "7",
        "isHidden": true
      },
      {
        "id": "cpp-intro-2-tc-10",
        "input": "3\n0 0 0",
        "expectedOutput": "0",
        "isHidden": true
      }
    ]
  },
  {
    "id": "cpp-stream-1",
    "languageId": "cpp",
    "language": "cpp",
    "level": "beginner",
    "topicId": "cpp-streams-and-namespaces",
    "title": "Stream Precision Formatter with std::setprecision",
    "slug": "stream-precision-formatter-with-std-setprecision",
    "difficulty": "easy",
    "problemStatement": "Using `<iomanip>`, C++ controls floating-point stream formatting via `std::fixed` and `std::setprecision(k)`. Given a floating-point number val and an integer precision k (0 <= k <= 8), format and print val rounded to exactly k decimal places.",
    "description": "Using `<iomanip>`, C++ controls floating-point stream formatting via `std::fixed` and `std::setprecision(k)`. Given a floating-point number val and an integer precision k (0 <= k <= 8), format and print val rounded to exactly k decimal places.",
    "inputFormat": "A floating point number val and an integer k separated by space.",
    "outputFormat": "val formatted to k decimal places.",
    "constraints": [
      "-10000.0 <= val <= 10000.0",
      "0 <= k <= 8"
    ],
    "examples": [
      {
        "input": "3.14159265 4",
        "output": "3.1416"
      },
      {
        "input": "42.0 2",
        "output": "42.00"
      }
    ],
    "starterCode": {
      "cpp": "#include <iostream>\n\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "cpp-stream-1-tc-1",
        "input": "3.14159265 4",
        "expectedOutput": "3.1416",
        "isHidden": false
      },
      {
        "id": "cpp-stream-1-tc-2",
        "input": "42.0 2",
        "expectedOutput": "42.00",
        "isHidden": false
      },
      {
        "id": "cpp-stream-1-tc-3",
        "input": "2.71828182 6",
        "expectedOutput": "2.718282",
        "isHidden": false
      },
      {
        "id": "cpp-stream-1-tc-4",
        "input": "100.5 0",
        "expectedOutput": "101",
        "isHidden": true
      },
      {
        "id": "cpp-stream-1-tc-5",
        "input": "0.12345678 5",
        "expectedOutput": "0.12346",
        "isHidden": true
      },
      {
        "id": "cpp-stream-1-tc-6",
        "input": "-15.897 1",
        "expectedOutput": "-15.9",
        "isHidden": true
      },
      {
        "id": "cpp-stream-1-tc-7",
        "input": "7.0 3",
        "expectedOutput": "7.000",
        "isHidden": true
      },
      {
        "id": "cpp-stream-1-tc-8",
        "input": "9.9999 2",
        "expectedOutput": "10.00",
        "isHidden": true
      },
      {
        "id": "cpp-stream-1-tc-9",
        "input": "123.456789 8",
        "expectedOutput": "123.45678900",
        "isHidden": true
      },
      {
        "id": "cpp-stream-1-tc-10",
        "input": "0.00001 3",
        "expectedOutput": "0.000",
        "isHidden": true
      }
    ]
  },
  {
    "id": "cpp-stream-2",
    "languageId": "cpp",
    "language": "cpp",
    "level": "beginner",
    "topicId": "cpp-streams-and-namespaces",
    "title": "Custom Namespace Scoping Calculator",
    "slug": "custom-namespace-scoping-calculator",
    "difficulty": "easy",
    "problemStatement": "Define two distinct namespaces: `namespace Geometry { double circleArea(double r); }` (use pi = 3.14159) and `namespace Algebra { double quadraticRoot(double a, double b, double c); }` (returns the positive discriminant root (-b + sqrt(b^2 - 4ac)) / (2a)). Read radius r and coefficients a, b, c. Print \"Circle Area: <area rounded to 2 decimals>\" on line 1 and \"Root: <root rounded to 2 decimals>\" on line 2.",
    "description": "Define two distinct namespaces: `namespace Geometry { double circleArea(double r); }` (use pi = 3.14159) and `namespace Algebra { double quadraticRoot(double a, double b, double c); }` (returns the positive discriminant root (-b + sqrt(b^2 - 4ac)) / (2a)). Read radius r and coefficients a, b, c. Print \"Circle Area: <area rounded to 2 decimals>\" on line 1 and \"Root: <root rounded to 2 decimals>\" on line 2.",
    "inputFormat": "Four doubles: r a b c separated by space.",
    "outputFormat": "Two lines: \"Circle Area: ...\" and \"Root: ...\"",
    "constraints": [
      "r > 0",
      "a != 0",
      "b^2 - 4ac >= 0"
    ],
    "examples": [
      {
        "input": "5.0 1.0 -5.0 6.0",
        "output": "Circle Area: 78.54\nRoot: 3.00"
      }
    ],
    "starterCode": {
      "cpp": "#include <iostream>\n\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "cpp-stream-2-tc-1",
        "input": "5.0 1.0 -5.0 6.0",
        "expectedOutput": "Circle Area: 78.54\nRoot: 3.00",
        "isHidden": false
      },
      {
        "id": "cpp-stream-2-tc-2",
        "input": "1.0 1.0 0.0 -4.0",
        "expectedOutput": "Circle Area: 3.14\nRoot: 2.00",
        "isHidden": false
      },
      {
        "id": "cpp-stream-2-tc-3",
        "input": "10.0 2.0 -4.0 -6.0",
        "expectedOutput": "Circle Area: 314.16\nRoot: 3.00",
        "isHidden": false
      },
      {
        "id": "cpp-stream-2-tc-4",
        "input": "2.5 1.0 -2.0 1.0",
        "expectedOutput": "Circle Area: 19.63\nRoot: 1.00",
        "isHidden": true
      },
      {
        "id": "cpp-stream-2-tc-5",
        "input": "3.0 1.0 3.0 2.0",
        "expectedOutput": "Circle Area: 28.27\nRoot: -1.00",
        "isHidden": true
      },
      {
        "id": "cpp-stream-2-tc-6",
        "input": "4.0 1.0 -7.0 12.0",
        "expectedOutput": "Circle Area: 50.27\nRoot: 4.00",
        "isHidden": true
      },
      {
        "id": "cpp-stream-2-tc-7",
        "input": "7.0 1.0 -10.0 25.0",
        "expectedOutput": "Circle Area: 153.94\nRoot: 5.00",
        "isHidden": true
      },
      {
        "id": "cpp-stream-2-tc-8",
        "input": "0.5 1.0 -1.0 -6.0",
        "expectedOutput": "Circle Area: 0.79\nRoot: 3.00",
        "isHidden": true
      },
      {
        "id": "cpp-stream-2-tc-9",
        "input": "6.0 1.0 -6.0 8.0",
        "expectedOutput": "Circle Area: 113.10\nRoot: 4.00",
        "isHidden": true
      },
      {
        "id": "cpp-stream-2-tc-10",
        "input": "2.0 1.0 -8.0 15.0",
        "expectedOutput": "Circle Area: 12.57\nRoot: 5.00",
        "isHidden": true
      }
    ]
  },
  {
    "id": "cpp-stream-3",
    "languageId": "cpp",
    "language": "cpp",
    "level": "beginner",
    "topicId": "cpp-streams-and-namespaces",
    "title": "Stream Base Representation Formatter (Dec, Hex, Oct)",
    "slug": "stream-base-representation-formatter-dec-hex-oct",
    "difficulty": "medium",
    "problemStatement": "C++ stream manipulators `std::hex`, `std::oct`, and `std::dec` modify base output representations. Read an unsigned integer N and print it formatted across three fields: \"DEC: <dec> | HEX: 0x<hex in uppercase> | OCT: 0<oct>\".",
    "description": "C++ stream manipulators `std::hex`, `std::oct`, and `std::dec` modify base output representations. Read an unsigned integer N and print it formatted across three fields: \"DEC: <dec> | HEX: 0x<hex in uppercase> | OCT: 0<oct>\".",
    "inputFormat": "An unsigned integer N.",
    "outputFormat": "Format: \"DEC: <dec> | HEX: 0x<hex> | OCT: 0<oct>\"",
    "constraints": [
      "0 <= N <= 10^8"
    ],
    "examples": [
      {
        "input": "255",
        "output": "DEC: 255 | HEX: 0xFF | OCT: 0377"
      }
    ],
    "starterCode": {
      "cpp": "#include <iostream>\n\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "cpp-stream-3-tc-1",
        "input": "255",
        "expectedOutput": "DEC: 255 | HEX: 0xFF | OCT: 0377",
        "isHidden": false
      },
      {
        "id": "cpp-stream-3-tc-2",
        "input": "0",
        "expectedOutput": "DEC: 0 | HEX: 0x0 | OCT: 00",
        "isHidden": false
      },
      {
        "id": "cpp-stream-3-tc-3",
        "input": "16",
        "expectedOutput": "DEC: 16 | HEX: 0x10 | OCT: 020",
        "isHidden": false
      },
      {
        "id": "cpp-stream-3-tc-4",
        "input": "8",
        "expectedOutput": "DEC: 8 | HEX: 0x8 | OCT: 010",
        "isHidden": true
      },
      {
        "id": "cpp-stream-3-tc-5",
        "input": "1024",
        "expectedOutput": "DEC: 1024 | HEX: 0x400 | OCT: 02000",
        "isHidden": true
      },
      {
        "id": "cpp-stream-3-tc-6",
        "input": "65535",
        "expectedOutput": "DEC: 65535 | HEX: 0xFFFF | OCT: 0177777",
        "isHidden": true
      },
      {
        "id": "cpp-stream-3-tc-7",
        "input": "42",
        "expectedOutput": "DEC: 42 | HEX: 0x2A | OCT: 052",
        "isHidden": true
      },
      {
        "id": "cpp-stream-3-tc-8",
        "input": "100",
        "expectedOutput": "DEC: 100 | HEX: 0x64 | OCT: 0144",
        "isHidden": true
      },
      {
        "id": "cpp-stream-3-tc-9",
        "input": "500",
        "expectedOutput": "DEC: 500 | HEX: 0x1F4 | OCT: 0764",
        "isHidden": true
      },
      {
        "id": "cpp-stream-3-tc-10",
        "input": "12345",
        "expectedOutput": "DEC: 12345 | HEX: 0x3039 | OCT: 030071",
        "isHidden": true
      }
    ]
  },
  {
    "id": "cpp-ref-1",
    "languageId": "cpp",
    "language": "cpp",
    "level": "beginner",
    "topicId": "cpp-references-vs-pointers",
    "title": "Pass-by-Reference In-Place Array Scaler",
    "slug": "pass-by-reference-in-place-array-scaler",
    "difficulty": "easy",
    "problemStatement": "In C++, references (`Type &ref`) act as aliases for the original variable without pointer dereference syntax. Implement a function `void scaleElement(int &elem, int factor)` that multiplies elem in place. Given an array of N integers and factor k, scale each element using pass-by-reference and print the resulting array.",
    "description": "In C++, references (`Type &ref`) act as aliases for the original variable without pointer dereference syntax. Implement a function `void scaleElement(int &elem, int factor)` that multiplies elem in place. Given an array of N integers and factor k, scale each element using pass-by-reference and print the resulting array.",
    "inputFormat": "First line N and factor k. Second line N integers.",
    "outputFormat": "Scaled array separated by spaces.",
    "constraints": [
      "1 <= N <= 1000",
      "-100 <= k <= 100"
    ],
    "examples": [
      {
        "input": "4 3\n1 2 3 4",
        "output": "3 6 9 12"
      }
    ],
    "starterCode": {
      "cpp": "#include <iostream>\n\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "cpp-ref-1-tc-1",
        "input": "4 3\n1 2 3 4",
        "expectedOutput": "3 6 9 12",
        "isHidden": false
      },
      {
        "id": "cpp-ref-1-tc-2",
        "input": "3 -2\n5 10 15",
        "expectedOutput": "-10 -20 -30",
        "isHidden": false
      },
      {
        "id": "cpp-ref-1-tc-3",
        "input": "1 10\n7",
        "expectedOutput": "70",
        "isHidden": false
      },
      {
        "id": "cpp-ref-1-tc-4",
        "input": "5 0\n1 2 3 4 5",
        "expectedOutput": "0 0 0 0 0",
        "isHidden": true
      },
      {
        "id": "cpp-ref-1-tc-5",
        "input": "4 1\n10 20 30 40",
        "expectedOutput": "10 20 30 40",
        "isHidden": true
      },
      {
        "id": "cpp-ref-1-tc-6",
        "input": "3 5\n-1 -2 -3",
        "expectedOutput": "-5 -10 -15",
        "isHidden": true
      },
      {
        "id": "cpp-ref-1-tc-7",
        "input": "6 2\n2 4 6 8 10 12",
        "expectedOutput": "4 8 12 16 20 24",
        "isHidden": true
      },
      {
        "id": "cpp-ref-1-tc-8",
        "input": "2 100\n3 4",
        "expectedOutput": "300 400",
        "isHidden": true
      },
      {
        "id": "cpp-ref-1-tc-9",
        "input": "4 -1\n7 -8 9 -10",
        "expectedOutput": "-7 8 -9 10",
        "isHidden": true
      },
      {
        "id": "cpp-ref-1-tc-10",
        "input": "5 4\n0 1 2 3 4",
        "expectedOutput": "0 4 8 12 16",
        "isHidden": true
      }
    ]
  },
  {
    "id": "cpp-ref-2",
    "languageId": "cpp",
    "language": "cpp",
    "level": "beginner",
    "topicId": "cpp-references-vs-pointers",
    "title": "Const Reference Performance Inspector",
    "slug": "const-reference-performance-inspector",
    "difficulty": "easy",
    "problemStatement": "Passing large objects by `const &` prevents expensive deep copies while safeguarding immutability. Implement a function `void computeStats(const std::vector<int> &vec, int &outMin, int &outMax, double &outAvg)` that inspects the vector. Given N integers, print \"Min: <min> | Max: <max> | Avg: <avg rounded to 2 decimals>\".",
    "description": "Passing large objects by `const &` prevents expensive deep copies while safeguarding immutability. Implement a function `void computeStats(const std::vector<int> &vec, int &outMin, int &outMax, double &outAvg)` that inspects the vector. Given N integers, print \"Min: <min> | Max: <max> | Avg: <avg rounded to 2 decimals>\".",
    "inputFormat": "First line N. Second line N integers.",
    "outputFormat": "\"Min: <min> | Max: <max> | Avg: <avg>\"",
    "constraints": [
      "1 <= N <= 1000"
    ],
    "examples": [
      {
        "input": "5\n10 20 30 40 50",
        "output": "Min: 10 | Max: 50 | Avg: 30.00"
      }
    ],
    "starterCode": {
      "cpp": "#include <iostream>\n\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "cpp-ref-2-tc-1",
        "input": "5\n10 20 30 40 50",
        "expectedOutput": "Min: 10 | Max: 50 | Avg: 30.00",
        "isHidden": false
      },
      {
        "id": "cpp-ref-2-tc-2",
        "input": "1\n42",
        "expectedOutput": "Min: 42 | Max: 42 | Avg: 42.00",
        "isHidden": false
      },
      {
        "id": "cpp-ref-2-tc-3",
        "input": "4\n-10 0 10 20",
        "expectedOutput": "Min: -10 | Max: 20 | Avg: 5.00",
        "isHidden": false
      },
      {
        "id": "cpp-ref-2-tc-4",
        "input": "3\n7 7 7",
        "expectedOutput": "Min: 7 | Max: 7 | Avg: 7.00",
        "isHidden": true
      },
      {
        "id": "cpp-ref-2-tc-5",
        "input": "6\n1 2 3 4 5 6",
        "expectedOutput": "Min: 1 | Max: 6 | Avg: 3.50",
        "isHidden": true
      },
      {
        "id": "cpp-ref-2-tc-6",
        "input": "5\n100 200 50 300 150",
        "expectedOutput": "Min: 50 | Max: 300 | Avg: 160.00",
        "isHidden": true
      },
      {
        "id": "cpp-ref-2-tc-7",
        "input": "2\n-50 50",
        "expectedOutput": "Min: -50 | Max: 50 | Avg: 0.00",
        "isHidden": true
      },
      {
        "id": "cpp-ref-2-tc-8",
        "input": "4\n2 3 5 7",
        "expectedOutput": "Min: 2 | Max: 7 | Avg: 4.25",
        "isHidden": true
      },
      {
        "id": "cpp-ref-2-tc-9",
        "input": "5\n-5 -4 -3 -2 -1",
        "expectedOutput": "Min: -5 | Max: -1 | Avg: -3.00",
        "isHidden": true
      },
      {
        "id": "cpp-ref-2-tc-10",
        "input": "3\n15 25 35",
        "expectedOutput": "Min: 15 | Max: 35 | Avg: 25.00",
        "isHidden": true
      }
    ]
  },
  {
    "id": "cpp-ref-3",
    "languageId": "cpp",
    "language": "cpp",
    "level": "beginner",
    "topicId": "cpp-references-vs-pointers",
    "title": "Reference Return Lvalue Indexer",
    "slug": "reference-return-lvalue-indexer",
    "difficulty": "medium",
    "problemStatement": "In C++, functions returning a reference (`int &at(int idx)`) can appear on the left side of an assignment (`at(2) = 99;`). Given an array of N integers and Q update queries \"idx newVal\", use a reference returning helper to update the array. Print the final array.",
    "description": "In C++, functions returning a reference (`int &at(int idx)`) can appear on the left side of an assignment (`at(2) = 99;`). Given an array of N integers and Q update queries \"idx newVal\", use a reference returning helper to update the array. Print the final array.",
    "inputFormat": "First line N. Second line N integers. Third line Q. Next Q lines contain idx and newVal.",
    "outputFormat": "Updated array space-separated.",
    "constraints": [
      "1 <= N <= 100",
      "0 <= idx < N",
      "1 <= Q <= 100"
    ],
    "examples": [
      {
        "input": "4\n10 20 30 40\n2\n1 99\n3 55",
        "output": "10 99 30 55"
      }
    ],
    "starterCode": {
      "cpp": "#include <iostream>\n\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "cpp-ref-3-tc-1",
        "input": "4\n10 20 30 40\n2\n1 99\n3 55",
        "expectedOutput": "10 99 30 55",
        "isHidden": false
      },
      {
        "id": "cpp-ref-3-tc-2",
        "input": "3\n1 2 3\n1\n0 10",
        "expectedOutput": "10 2 3",
        "isHidden": false
      },
      {
        "id": "cpp-ref-3-tc-3",
        "input": "5\n0 0 0 0 0\n3\n0 5\n2 7\n4 9",
        "expectedOutput": "5 0 7 0 9",
        "isHidden": false
      },
      {
        "id": "cpp-ref-3-tc-4",
        "input": "2\n100 200\n1\n1 500",
        "expectedOutput": "100 500",
        "isHidden": true
      },
      {
        "id": "cpp-ref-3-tc-5",
        "input": "4\n5 5 5 5\n2\n0 1\n1 2",
        "expectedOutput": "1 2 5 5",
        "isHidden": true
      },
      {
        "id": "cpp-ref-3-tc-6",
        "input": "1\n42\n1\n0 99",
        "expectedOutput": "99",
        "isHidden": true
      },
      {
        "id": "cpp-ref-3-tc-7",
        "input": "3\n10 20 30\n3\n0 1\n1 2\n2 3",
        "expectedOutput": "1 2 3",
        "isHidden": true
      },
      {
        "id": "cpp-ref-3-tc-8",
        "input": "5\n1 2 3 4 5\n1\n2 100",
        "expectedOutput": "1 2 100 4 5",
        "isHidden": true
      },
      {
        "id": "cpp-ref-3-tc-9",
        "input": "4\n-1 -2 -3 -4\n2\n3 0\n0 0",
        "expectedOutput": "0 -2 -3 0",
        "isHidden": true
      },
      {
        "id": "cpp-ref-3-tc-10",
        "input": "6\n10 20 30 40 50 60\n2\n5 999\n4 888",
        "expectedOutput": "10 20 30 40 888 999",
        "isHidden": true
      }
    ]
  },
  {
    "id": "cpp-auto-1",
    "languageId": "cpp",
    "language": "cpp",
    "level": "beginner",
    "topicId": "cpp-auto-and-range-loops",
    "title": "Type Deduction with auto and Structured Binding",
    "slug": "type-deduction-with-auto-and-structured-binding",
    "difficulty": "easy",
    "problemStatement": "In modern C++17, structured binding `auto [key, val]` unpacks pairs and tuples cleanly. Read N pairs of strings and integers (name and score). Store them in `std::vector<std::pair<std::string, int>>`. Use a range-based loop with `auto &[name, score]` to increase each score by 5. Print the updated records in format: \"<name>: <score>\".",
    "description": "In modern C++17, structured binding `auto [key, val]` unpacks pairs and tuples cleanly. Read N pairs of strings and integers (name and score). Store them in `std::vector<std::pair<std::string, int>>`. Use a range-based loop with `auto &[name, score]` to increase each score by 5. Print the updated records in format: \"<name>: <score>\".",
    "inputFormat": "First line N. Next N lines each contain name and score.",
    "outputFormat": "N lines formatted: \"<name>: <score>\"",
    "constraints": [
      "1 <= N <= 100"
    ],
    "examples": [
      {
        "input": "2\nAlice 90\nBob 85",
        "output": "Alice: 95\nBob: 90"
      }
    ],
    "starterCode": {
      "cpp": "#include <iostream>\n\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "cpp-auto-1-tc-1",
        "input": "2\nAlice 90\nBob 85",
        "expectedOutput": "Alice: 95\nBob: 90",
        "isHidden": false
      },
      {
        "id": "cpp-auto-1-tc-2",
        "input": "1\nSolo 100",
        "expectedOutput": "Solo: 105",
        "isHidden": false
      },
      {
        "id": "cpp-auto-1-tc-3",
        "input": "3\nA 50\nB 60\nC 70",
        "expectedOutput": "A: 55\nB: 65\nC: 75",
        "isHidden": false
      },
      {
        "id": "cpp-auto-1-tc-4",
        "input": "2\nJohn 0\nJane 5",
        "expectedOutput": "John: 5\nJane: 10",
        "isHidden": true
      },
      {
        "id": "cpp-auto-1-tc-5",
        "input": "4\nW 10\nX 20\nY 30\nZ 40",
        "expectedOutput": "W: 15\nX: 25\nY: 35\nZ: 45",
        "isHidden": true
      },
      {
        "id": "cpp-auto-1-tc-6",
        "input": "1\nTest 42",
        "expectedOutput": "Test: 47",
        "isHidden": true
      },
      {
        "id": "cpp-auto-1-tc-7",
        "input": "3\nAlpha 80\nBeta 88\nGamma 92",
        "expectedOutput": "Alpha: 85\nBeta: 93\nGamma: 97",
        "isHidden": true
      },
      {
        "id": "cpp-auto-1-tc-8",
        "input": "2\nDev 45\nOps 55",
        "expectedOutput": "Dev: 50\nOps: 60",
        "isHidden": true
      },
      {
        "id": "cpp-auto-1-tc-9",
        "input": "1\nScore 95",
        "expectedOutput": "Score: 100",
        "isHidden": true
      },
      {
        "id": "cpp-auto-1-tc-10",
        "input": "3\nFirst 10\nSecond 20\nThird 30",
        "expectedOutput": "First: 15\nSecond: 25\nThird: 35",
        "isHidden": true
      }
    ]
  },
  {
    "id": "cpp-auto-2",
    "languageId": "cpp",
    "language": "cpp",
    "level": "beginner",
    "topicId": "cpp-auto-and-range-loops",
    "title": "Range-Based Reference In-Place Filter",
    "slug": "range-based-reference-in-place-filter",
    "difficulty": "easy",
    "problemStatement": "Using `for (auto &x : vec)`, modify elements of an array in place: if x is odd, double it (`x *= 2`); if x is even, halve it (`x /= 2`). Print the transformed array separated by spaces.",
    "description": "Using `for (auto &x : vec)`, modify elements of an array in place: if x is odd, double it (`x *= 2`); if x is even, halve it (`x /= 2`). Print the transformed array separated by spaces.",
    "inputFormat": "First line integer N. Second line N integers.",
    "outputFormat": "Transformed array separated by space.",
    "constraints": [
      "1 <= N <= 1000"
    ],
    "examples": [
      {
        "input": "4\n3 4 5 6",
        "output": "6 2 10 3"
      }
    ],
    "starterCode": {
      "cpp": "#include <iostream>\n\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "cpp-auto-2-tc-1",
        "input": "4\n3 4 5 6",
        "expectedOutput": "6 2 10 3",
        "isHidden": false
      },
      {
        "id": "cpp-auto-2-tc-2",
        "input": "1\n7",
        "expectedOutput": "14",
        "isHidden": false
      },
      {
        "id": "cpp-auto-2-tc-3",
        "input": "1\n8",
        "expectedOutput": "4",
        "isHidden": false
      },
      {
        "id": "cpp-auto-2-tc-4",
        "input": "5\n1 2 3 4 5",
        "expectedOutput": "2 1 6 2 10",
        "isHidden": true
      },
      {
        "id": "cpp-auto-2-tc-5",
        "input": "4\n10 20 30 40",
        "expectedOutput": "5 10 15 20",
        "isHidden": true
      },
      {
        "id": "cpp-auto-2-tc-6",
        "input": "3\n9 9 9",
        "expectedOutput": "18 18 18",
        "isHidden": true
      },
      {
        "id": "cpp-auto-2-tc-7",
        "input": "6\n2 3 4 5 6 7",
        "expectedOutput": "1 6 2 10 3 14",
        "isHidden": true
      },
      {
        "id": "cpp-auto-2-tc-8",
        "input": "2\n100 101",
        "expectedOutput": "50 202",
        "isHidden": true
      },
      {
        "id": "cpp-auto-2-tc-9",
        "input": "5\n11 12 13 14 15",
        "expectedOutput": "22 6 26 7 30",
        "isHidden": true
      },
      {
        "id": "cpp-auto-2-tc-10",
        "input": "4\n0 1 2 3",
        "expectedOutput": "0 2 1 6",
        "isHidden": true
      }
    ]
  },
  {
    "id": "cpp-auto-3",
    "languageId": "cpp",
    "language": "cpp",
    "level": "beginner",
    "topicId": "cpp-auto-and-range-loops",
    "title": "Nested Range Loops over 2D Vector Matrix",
    "slug": "nested-range-loops-over-2d-vector-matrix",
    "difficulty": "medium",
    "problemStatement": "Read dimensions R and C, followed by an R x C integer grid. Use nested range-based loops with `const auto &row : matrix` and `const auto &val : row` to compute the total sum and the maximum value in the grid. Print: \"Sum: <sum> | Max: <max>\".",
    "description": "Read dimensions R and C, followed by an R x C integer grid. Use nested range-based loops with `const auto &row : matrix` and `const auto &val : row` to compute the total sum and the maximum value in the grid. Print: \"Sum: <sum> | Max: <max>\".",
    "inputFormat": "First line R and C. Next R lines each have C integers.",
    "outputFormat": "\"Sum: <sum> | Max: <max>\"",
    "constraints": [
      "1 <= R, C <= 100"
    ],
    "examples": [
      {
        "input": "2 3\n1 2 3\n4 5 6",
        "output": "Sum: 21 | Max: 6"
      }
    ],
    "starterCode": {
      "cpp": "#include <iostream>\n\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "cpp-auto-3-tc-1",
        "input": "2 3\n1 2 3\n4 5 6",
        "expectedOutput": "Sum: 21 | Max: 6",
        "isHidden": false
      },
      {
        "id": "cpp-auto-3-tc-2",
        "input": "1 1\n42",
        "expectedOutput": "Sum: 42 | Max: 42",
        "isHidden": false
      },
      {
        "id": "cpp-auto-3-tc-3",
        "input": "3 2\n10 20\n30 40\n50 60",
        "expectedOutput": "Sum: 210 | Max: 60",
        "isHidden": false
      },
      {
        "id": "cpp-auto-3-tc-4",
        "input": "2 2\n-5 -10\n-20 -1",
        "expectedOutput": "Sum: -36 | Max: -1",
        "isHidden": true
      },
      {
        "id": "cpp-auto-3-tc-5",
        "input": "3 3\n1 0 0\n0 1 0\n0 0 1",
        "expectedOutput": "Sum: 3 | Max: 1",
        "isHidden": true
      },
      {
        "id": "cpp-auto-3-tc-6",
        "input": "2 4\n5 5 5 5\n10 10 10 10",
        "expectedOutput": "Sum: 60 | Max: 10",
        "isHidden": true
      },
      {
        "id": "cpp-auto-3-tc-7",
        "input": "1 4\n10 20 30 40",
        "expectedOutput": "Sum: 100 | Max: 40",
        "isHidden": true
      },
      {
        "id": "cpp-auto-3-tc-8",
        "input": "4 1\n1\n2\n3\n4",
        "expectedOutput": "Sum: 10 | Max: 4",
        "isHidden": true
      },
      {
        "id": "cpp-auto-3-tc-9",
        "input": "2 2\n100 -50\n-25 75",
        "expectedOutput": "Sum: 100 | Max: 100",
        "isHidden": true
      },
      {
        "id": "cpp-auto-3-tc-10",
        "input": "3 2\n0 0\n0 0\n0 0",
        "expectedOutput": "Sum: 0 | Max: 0",
        "isHidden": true
      }
    ]
  },
  {
    "id": "cpp-str-1",
    "languageId": "cpp",
    "language": "cpp",
    "level": "beginner",
    "topicId": "cpp-std-string",
    "title": "std::string In-Place Reversal and Case Flip",
    "slug": "std-string-in-place-reversal-and-case-flip",
    "difficulty": "easy",
    "problemStatement": "Using `std::string`, read a string word. Reverse the string, and toggle the case of each character (uppercase becomes lowercase, lowercase becomes uppercase). Print the resulting string.",
    "description": "Using `std::string`, read a string word. Reverse the string, and toggle the case of each character (uppercase becomes lowercase, lowercase becomes uppercase). Print the resulting string.",
    "inputFormat": "A single word string.",
    "outputFormat": "Reversed string with toggled case.",
    "constraints": [
      "Length <= 1000",
      "Contains only English letters"
    ],
    "examples": [
      {
        "input": "Hello",
        "output": "OLLEh"
      },
      {
        "input": "Cpp",
        "output": "PPc"
      }
    ],
    "starterCode": {
      "cpp": "#include <iostream>\n\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "cpp-str-1-tc-1",
        "input": "Hello",
        "expectedOutput": "OLLEh",
        "isHidden": false
      },
      {
        "id": "cpp-str-1-tc-2",
        "input": "Cpp",
        "expectedOutput": "PPc",
        "isHidden": false
      },
      {
        "id": "cpp-str-1-tc-3",
        "input": "World",
        "expectedOutput": "DLROw",
        "isHidden": false
      },
      {
        "id": "cpp-str-1-tc-4",
        "input": "a",
        "expectedOutput": "A",
        "isHidden": true
      },
      {
        "id": "cpp-str-1-tc-5",
        "input": "Z",
        "expectedOutput": "z",
        "isHidden": true
      },
      {
        "id": "cpp-str-1-tc-6",
        "input": "abCD",
        "expectedOutput": "dcBA",
        "isHidden": true
      },
      {
        "id": "cpp-str-1-tc-7",
        "input": "ModernCpp",
        "expectedOutput": "PPcNERDOm",
        "isHidden": true
      },
      {
        "id": "cpp-str-1-tc-8",
        "input": "AbCdEf",
        "expectedOutput": "FeDcBa",
        "isHidden": true
      },
      {
        "id": "cpp-str-1-tc-9",
        "input": "STACK",
        "expectedOutput": "kcats",
        "isHidden": true
      },
      {
        "id": "cpp-str-1-tc-10",
        "input": "heap",
        "expectedOutput": "PAEH",
        "isHidden": true
      }
    ]
  },
  {
    "id": "cpp-str-2",
    "languageId": "cpp",
    "language": "cpp",
    "level": "beginner",
    "topicId": "cpp-std-string",
    "title": "Sub-string Search and Replace with std::string::find",
    "slug": "sub-string-search-and-replace-with-std-string-find",
    "difficulty": "medium",
    "problemStatement": "Read a line of text, a target sub-string, and a replacement sub-string. Using `std::string::find` and `std::string::replace`, replace every non-overlapping occurrence of target with replacement in the text. Print the modified text.",
    "description": "Read a line of text, a target sub-string, and a replacement sub-string. Using `std::string::find` and `std::string::replace`, replace every non-overlapping occurrence of target with replacement in the text. Print the modified text.",
    "inputFormat": "Three lines: original text, target, replacement.",
    "outputFormat": "Modified text line.",
    "constraints": [
      "Lengths <= 500"
    ],
    "examples": [
      {
        "input": "hello world world\nworld\nthere",
        "output": "hello there there"
      }
    ],
    "starterCode": {
      "cpp": "#include <iostream>\n\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "cpp-str-2-tc-1",
        "input": "hello world world\nworld\nthere",
        "expectedOutput": "hello there there",
        "isHidden": false
      },
      {
        "id": "cpp-str-2-tc-2",
        "input": "banana\na\no",
        "expectedOutput": "bonono",
        "isHidden": false
      },
      {
        "id": "cpp-str-2-tc-3",
        "input": "the cat sat on the mat\nthe\na",
        "expectedOutput": "a cat sat on a mat",
        "isHidden": false
      },
      {
        "id": "cpp-str-2-tc-4",
        "input": "foo bar baz\nqux\nxyz",
        "expectedOutput": "foo bar baz",
        "isHidden": true
      },
      {
        "id": "cpp-str-2-tc-5",
        "input": "apple apple apple\napple\norange",
        "expectedOutput": "orange orange orange",
        "isHidden": true
      },
      {
        "id": "cpp-str-2-tc-6",
        "input": "one two three\ntwo\n2",
        "expectedOutput": "one 2 three",
        "isHidden": true
      },
      {
        "id": "cpp-str-2-tc-7",
        "input": "mississippi\nss\npp",
        "expectedOutput": "mippippippi",
        "isHidden": true
      },
      {
        "id": "cpp-str-2-tc-8",
        "input": "a b c d e\n \n-",
        "expectedOutput": "a-b-c-d-e",
        "isHidden": true
      },
      {
        "id": "cpp-str-2-tc-9",
        "input": "test test test\ntest\npassed",
        "expectedOutput": "passed passed passed",
        "isHidden": true
      },
      {
        "id": "cpp-str-2-tc-10",
        "input": "123 123 123\n123\n456",
        "expectedOutput": "456 456 456",
        "isHidden": true
      }
    ]
  },
  {
    "id": "cpp-str-3",
    "languageId": "cpp",
    "language": "cpp",
    "level": "beginner",
    "topicId": "cpp-std-string",
    "title": "String Tokenizer via std::stringstream",
    "slug": "string-tokenizer-via-std-stringstream",
    "difficulty": "medium",
    "problemStatement": "In modern C++, `std::stringstream` provides flexible token parsing. Given a space-separated sentence of words, extract each word into a `std::vector<std::string>`, sort the words lexicographically, and print them separated by space.",
    "description": "In modern C++, `std::stringstream` provides flexible token parsing. Given a space-separated sentence of words, extract each word into a `std::vector<std::string>`, sort the words lexicographically, and print them separated by space.",
    "inputFormat": "A sentence line of space-separated words.",
    "outputFormat": "Sorted words space-separated.",
    "constraints": [
      "Sentence length <= 1000"
    ],
    "examples": [
      {
        "input": "the quick brown fox",
        "output": "brown fox quick the"
      }
    ],
    "starterCode": {
      "cpp": "#include <iostream>\n\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "cpp-str-3-tc-1",
        "input": "the quick brown fox",
        "expectedOutput": "brown fox quick the",
        "isHidden": false
      },
      {
        "id": "cpp-str-3-tc-2",
        "input": "c cpp java python rust",
        "expectedOutput": "c cpp java python rust",
        "isHidden": false
      },
      {
        "id": "cpp-str-3-tc-3",
        "input": "zebra apple mango banana cherry",
        "expectedOutput": "apple banana cherry mango zebra",
        "isHidden": false
      },
      {
        "id": "cpp-str-3-tc-4",
        "input": "single",
        "expectedOutput": "single",
        "isHidden": true
      },
      {
        "id": "cpp-str-3-tc-5",
        "input": "two one",
        "expectedOutput": "one two",
        "isHidden": true
      },
      {
        "id": "cpp-str-3-tc-6",
        "input": "delta alpha gamma beta",
        "expectedOutput": "alpha beta delta gamma",
        "isHidden": true
      },
      {
        "id": "cpp-str-3-tc-7",
        "input": "z y x w v u",
        "expectedOutput": "u v w x y z",
        "isHidden": true
      },
      {
        "id": "cpp-str-3-tc-8",
        "input": "dog cat bird fish ant",
        "expectedOutput": "ant bird cat dog fish",
        "isHidden": true
      },
      {
        "id": "cpp-str-3-tc-9",
        "input": "north south east west",
        "expectedOutput": "east north south west",
        "isHidden": true
      },
      {
        "id": "cpp-str-3-tc-10",
        "input": "red green blue yellow",
        "expectedOutput": "blue green red yellow",
        "isHidden": true
      }
    ]
  },
  {
    "id": "cpp-str-4",
    "languageId": "cpp",
    "language": "cpp",
    "level": "beginner",
    "topicId": "cpp-std-string",
    "title": "Valid Anagram Verifier with std::sort",
    "slug": "valid-anagram-verifier-with-std-sort",
    "difficulty": "easy",
    "problemStatement": "Two strings are anagrams if sorting their characters results in identical strings. Given two single-word strings s1 and s2, determine if they are valid anagrams. Print \"true\" if they are, else \"false\".",
    "description": "Two strings are anagrams if sorting their characters results in identical strings. Given two single-word strings s1 and s2, determine if they are valid anagrams. Print \"true\" if they are, else \"false\".",
    "inputFormat": "Two space-separated strings s1 and s2.",
    "outputFormat": "\"true\" or \"false\"",
    "constraints": [
      "Lengths <= 1000"
    ],
    "examples": [
      {
        "input": "anagram nagaram",
        "output": "true"
      },
      {
        "input": "rat car",
        "output": "false"
      }
    ],
    "starterCode": {
      "cpp": "#include <iostream>\n\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "cpp-str-4-tc-1",
        "input": "anagram nagaram",
        "expectedOutput": "true",
        "isHidden": false
      },
      {
        "id": "cpp-str-4-tc-2",
        "input": "rat car",
        "expectedOutput": "false",
        "isHidden": false
      },
      {
        "id": "cpp-str-4-tc-3",
        "input": "listen silent",
        "expectedOutput": "true",
        "isHidden": false
      },
      {
        "id": "cpp-str-4-tc-4",
        "input": "triangle integral",
        "expectedOutput": "true",
        "isHidden": true
      },
      {
        "id": "cpp-str-4-tc-5",
        "input": "apple pale",
        "expectedOutput": "false",
        "isHidden": true
      },
      {
        "id": "cpp-str-4-tc-6",
        "input": "a a",
        "expectedOutput": "true",
        "isHidden": true
      },
      {
        "id": "cpp-str-4-tc-7",
        "input": "ab ba",
        "expectedOutput": "true",
        "isHidden": true
      },
      {
        "id": "cpp-str-4-tc-8",
        "input": "abc abcd",
        "expectedOutput": "false",
        "isHidden": true
      },
      {
        "id": "cpp-str-4-tc-9",
        "input": "dormitory dirtyroom",
        "expectedOutput": "true",
        "isHidden": true
      },
      {
        "id": "cpp-str-4-tc-10",
        "input": "hello olleh",
        "expectedOutput": "true",
        "isHidden": true
      }
    ]
  },
  {
    "id": "cpp-class-1",
    "languageId": "cpp",
    "language": "cpp",
    "level": "intermediate",
    "topicId": "cpp-classes-constructors-destructors",
    "title": "RAII Bank Account with Member Initializer List",
    "slug": "raii-bank-account-with-member-initializer-list",
    "difficulty": "medium",
    "problemStatement": "Define a class `BankAccount` with private members `std::string owner` and `double balance`. Use a member initializer list in constructor `BankAccount(const std::string &owner, double initBalance) : owner(owner), balance(initBalance) {}`. Implement methods `void deposit(double amt)`, `bool withdraw(double amt)`, and `void printSummary() const` which prints \"<owner>: $<balance rounded to 2 decimals>\". Given initial balance and a series of transactions (+amt for deposit, -amt for withdraw), apply them and print final summary.",
    "description": "Define a class `BankAccount` with private members `std::string owner` and `double balance`. Use a member initializer list in constructor `BankAccount(const std::string &owner, double initBalance) : owner(owner), balance(initBalance) {}`. Implement methods `void deposit(double amt)`, `bool withdraw(double amt)`, and `void printSummary() const` which prints \"<owner>: $<balance rounded to 2 decimals>\". Given initial balance and a series of transactions (+amt for deposit, -amt for withdraw), apply them and print final summary.",
    "inputFormat": "First line owner and initial balance. Second line N transactions. Next N values.",
    "outputFormat": "\"<owner>: $<balance>\"",
    "constraints": [
      "balance >= 0",
      "transactions <= 50"
    ],
    "examples": [
      {
        "input": "Alice 100.0\n3\n50.0 -30.0 20.0",
        "output": "Alice: $140.00"
      }
    ],
    "starterCode": {
      "cpp": "#include <iostream>\n\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "cpp-class-1-tc-1",
        "input": "Alice 100.0\n3\n50.0 -30.0 20.0",
        "expectedOutput": "Alice: $140.00",
        "isHidden": false
      },
      {
        "id": "cpp-class-1-tc-2",
        "input": "Bob 50.0\n1\n-100.0",
        "expectedOutput": "Bob: $50.00",
        "isHidden": false
      },
      {
        "id": "cpp-class-1-tc-3",
        "input": "Charlie 0.0\n2\n500.0 -250.0",
        "expectedOutput": "Charlie: $250.00",
        "isHidden": false
      },
      {
        "id": "cpp-class-1-tc-4",
        "input": "David 200.0\n0",
        "expectedOutput": "David: $200.00",
        "isHidden": true
      },
      {
        "id": "cpp-class-1-tc-5",
        "input": "Eve 1000.0\n4\n-100.0 -200.0 -300.0 -400.0",
        "expectedOutput": "Eve: $0.00",
        "isHidden": true
      },
      {
        "id": "cpp-class-1-tc-6",
        "input": "Frank 50.0\n3\n10.0 10.0 10.0",
        "expectedOutput": "Frank: $80.00",
        "isHidden": true
      },
      {
        "id": "cpp-class-1-tc-7",
        "input": "Grace 10.0\n2\n-15.0 5.0",
        "expectedOutput": "Grace: $15.00",
        "isHidden": true
      },
      {
        "id": "cpp-class-1-tc-8",
        "input": "Heidi 300.0\n3\n-50.0 150.0 -100.0",
        "expectedOutput": "Heidi: $300.00",
        "isHidden": true
      },
      {
        "id": "cpp-class-1-tc-9",
        "input": "Ivan 75.5\n1\n24.5",
        "expectedOutput": "Ivan: $100.00",
        "isHidden": true
      },
      {
        "id": "cpp-class-1-tc-10",
        "input": "Judy 500.0\n2\n-600.0 100.0",
        "expectedOutput": "Judy: $600.00",
        "isHidden": true
      }
    ]
  },
  {
    "id": "cpp-class-2",
    "languageId": "cpp",
    "language": "cpp",
    "level": "intermediate",
    "topicId": "cpp-classes-constructors-destructors",
    "title": "RAII Dynamic Buffer Wrapper Lifecycle",
    "slug": "raii-dynamic-buffer-wrapper-lifecycle",
    "difficulty": "medium",
    "problemStatement": "Implement an RAII class `SimpleBuffer` that allocates dynamic memory in its constructor `SimpleBuffer(int size)` and deallocates it in its destructor `~SimpleBuffer()`. When allocated, print \"[ALLOCATED <size>]\" and when destroyed, print \"[DEALLOCATED]\". Read N sizes, create and destroy a buffer for each size in separate scoped blocks, and print lifecycle output.",
    "description": "Implement an RAII class `SimpleBuffer` that allocates dynamic memory in its constructor `SimpleBuffer(int size)` and deallocates it in its destructor `~SimpleBuffer()`. When allocated, print \"[ALLOCATED <size>]\" and when destroyed, print \"[DEALLOCATED]\". Read N sizes, create and destroy a buffer for each size in separate scoped blocks, and print lifecycle output.",
    "inputFormat": "First line N. Next line N integers representing sizes.",
    "outputFormat": "Lifecycle lines.",
    "constraints": [
      "1 <= N <= 10"
    ],
    "examples": [
      {
        "input": "2\n10 20",
        "output": "[ALLOCATED 10]\n[DEALLOCATED]\n[ALLOCATED 20]\n[DEALLOCATED]"
      }
    ],
    "starterCode": {
      "cpp": "#include <iostream>\n\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "cpp-class-2-tc-1",
        "input": "2\n10 20",
        "expectedOutput": "[ALLOCATED 10]\n[DEALLOCATED]\n[ALLOCATED 20]\n[DEALLOCATED]",
        "isHidden": false
      },
      {
        "id": "cpp-class-2-tc-2",
        "input": "1\n100",
        "expectedOutput": "[ALLOCATED 100]\n[DEALLOCATED]",
        "isHidden": false
      },
      {
        "id": "cpp-class-2-tc-3",
        "input": "3\n5 15 25",
        "expectedOutput": "[ALLOCATED 5]\n[DEALLOCATED]\n[ALLOCATED 15]\n[DEALLOCATED]\n[ALLOCATED 25]\n[DEALLOCATED]",
        "isHidden": false
      },
      {
        "id": "cpp-class-2-tc-4",
        "input": "4\n1 2 3 4",
        "expectedOutput": "[ALLOCATED 1]\n[DEALLOCATED]\n[ALLOCATED 2]\n[DEALLOCATED]\n[ALLOCATED 3]\n[DEALLOCATED]\n[ALLOCATED 4]\n[DEALLOCATED]",
        "isHidden": true
      },
      {
        "id": "cpp-class-2-tc-5",
        "input": "2\n50 50",
        "expectedOutput": "[ALLOCATED 50]\n[DEALLOCATED]\n[ALLOCATED 50]\n[DEALLOCATED]",
        "isHidden": true
      },
      {
        "id": "cpp-class-2-tc-6",
        "input": "1\n1024",
        "expectedOutput": "[ALLOCATED 1024]\n[DEALLOCATED]",
        "isHidden": true
      },
      {
        "id": "cpp-class-2-tc-7",
        "input": "3\n8 16 32",
        "expectedOutput": "[ALLOCATED 8]\n[DEALLOCATED]\n[ALLOCATED 16]\n[DEALLOCATED]\n[ALLOCATED 32]\n[DEALLOCATED]",
        "isHidden": true
      },
      {
        "id": "cpp-class-2-tc-8",
        "input": "2\n64 128",
        "expectedOutput": "[ALLOCATED 64]\n[DEALLOCATED]\n[ALLOCATED 128]\n[DEALLOCATED]",
        "isHidden": true
      },
      {
        "id": "cpp-class-2-tc-9",
        "input": "1\n1",
        "expectedOutput": "[ALLOCATED 1]\n[DEALLOCATED]",
        "isHidden": true
      },
      {
        "id": "cpp-class-2-tc-10",
        "input": "3\n100 200 300",
        "expectedOutput": "[ALLOCATED 100]\n[DEALLOCATED]\n[ALLOCATED 200]\n[DEALLOCATED]\n[ALLOCATED 300]\n[DEALLOCATED]",
        "isHidden": true
      }
    ]
  },
  {
    "id": "cpp-class-3",
    "languageId": "cpp",
    "language": "cpp",
    "level": "intermediate",
    "topicId": "cpp-classes-constructors-destructors",
    "title": "Operator Overloading on Vector2D",
    "slug": "operator-overloading-on-vector2d",
    "difficulty": "medium",
    "problemStatement": "Implement a class `Vector2D` with members `int x, y`. Overload `operator+`, `operator-`, and scalar multiplication `operator*(int scalar)`. Given two vectors v1 and v2 and scalar k, compute v1 + v2 and (v1 - v2) * k. Print \"Sum: (<x>, <y>)\" and \"ScaledDiff: (<x>, <y>)\".",
    "description": "Implement a class `Vector2D` with members `int x, y`. Overload `operator+`, `operator-`, and scalar multiplication `operator*(int scalar)`. Given two vectors v1 and v2 and scalar k, compute v1 + v2 and (v1 - v2) * k. Print \"Sum: (<x>, <y>)\" and \"ScaledDiff: (<x>, <y>)\".",
    "inputFormat": "Five integers: x1 y1 x2 y2 k.",
    "outputFormat": "Two lines: \"Sum: (<x>, <y>)\"\n\"ScaledDiff: (<x>, <y>)\"",
    "constraints": [
      "-1000 <= coordinates, k <= 1000"
    ],
    "examples": [
      {
        "input": "3 4 1 2 2",
        "output": "Sum: (4, 6)\nScaledDiff: (4, 4)"
      }
    ],
    "starterCode": {
      "cpp": "#include <iostream>\n\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "cpp-class-3-tc-1",
        "input": "3 4 1 2 2",
        "expectedOutput": "Sum: (4, 6)\nScaledDiff: (4, 4)",
        "isHidden": false
      },
      {
        "id": "cpp-class-3-tc-2",
        "input": "0 0 5 5 3",
        "expectedOutput": "Sum: (5, 5)\nScaledDiff: (-15, -15)",
        "isHidden": false
      },
      {
        "id": "cpp-class-3-tc-3",
        "input": "10 -5 -2 8 1",
        "expectedOutput": "Sum: (8, 3)\nScaledDiff: (12, -13)",
        "isHidden": false
      },
      {
        "id": "cpp-class-3-tc-4",
        "input": "1 1 1 1 5",
        "expectedOutput": "Sum: (2, 2)\nScaledDiff: (0, 0)",
        "isHidden": true
      },
      {
        "id": "cpp-class-3-tc-5",
        "input": "-4 -6 2 3 -2",
        "expectedOutput": "Sum: (-2, -3)\nScaledDiff: (12, 18)",
        "isHidden": true
      },
      {
        "id": "cpp-class-3-tc-6",
        "input": "7 8 0 0 10",
        "expectedOutput": "Sum: (7, 8)\nScaledDiff: (70, 80)",
        "isHidden": true
      },
      {
        "id": "cpp-class-3-tc-7",
        "input": "5 10 5 10 0",
        "expectedOutput": "Sum: (10, 20)\nScaledDiff: (0, 0)",
        "isHidden": true
      },
      {
        "id": "cpp-class-3-tc-8",
        "input": "2 4 6 8 -1",
        "expectedOutput": "Sum: (8, 12)\nScaledDiff: (4, 4)",
        "isHidden": true
      },
      {
        "id": "cpp-class-3-tc-9",
        "input": "100 200 50 100 2",
        "expectedOutput": "Sum: (150, 300)\nScaledDiff: (100, 200)",
        "isHidden": true
      },
      {
        "id": "cpp-class-3-tc-10",
        "input": "1 -1 -1 1 4",
        "expectedOutput": "Sum: (0, 0)\nScaledDiff: (8, -8)",
        "isHidden": true
      }
    ]
  },
  {
    "id": "cpp-poly-1",
    "languageId": "cpp",
    "language": "cpp",
    "level": "intermediate",
    "topicId": "cpp-inheritance-and-virtual-functions",
    "title": "Polymorphic Shape Area Calculator",
    "slug": "polymorphic-shape-area-calculator",
    "difficulty": "medium",
    "problemStatement": "Define an abstract base class `Shape` with pure virtual function `virtual double area() const = 0;` and virtual destructor. Derive `Circle(double r)` (area = 3.14159 * r * r) and `Rectangle(double w, double h)` (area = w * h). Read type (\"CIRCLE\" or \"RECTANGLE\") and dimensions, store in a `Shape*` pointer, call area() polymorphically, and print \"Area: <area rounded to 2 decimals>\".",
    "description": "Define an abstract base class `Shape` with pure virtual function `virtual double area() const = 0;` and virtual destructor. Derive `Circle(double r)` (area = 3.14159 * r * r) and `Rectangle(double w, double h)` (area = w * h). Read type (\"CIRCLE\" or \"RECTANGLE\") and dimensions, store in a `Shape*` pointer, call area() polymorphically, and print \"Area: <area rounded to 2 decimals>\".",
    "inputFormat": "Type string followed by dimensions (radius for circle; width and height for rectangle).",
    "outputFormat": "\"Area: <area>\"",
    "constraints": [
      "Dimensions > 0"
    ],
    "examples": [
      {
        "input": "CIRCLE 5.0",
        "output": "Area: 78.54"
      },
      {
        "input": "RECTANGLE 4.0 6.0",
        "output": "Area: 24.00"
      }
    ],
    "starterCode": {
      "cpp": "#include <iostream>\n\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "cpp-poly-1-tc-1",
        "input": "CIRCLE 5.0",
        "expectedOutput": "Area: 78.54",
        "isHidden": false
      },
      {
        "id": "cpp-poly-1-tc-2",
        "input": "RECTANGLE 4.0 6.0",
        "expectedOutput": "Area: 24.00",
        "isHidden": false
      },
      {
        "id": "cpp-poly-1-tc-3",
        "input": "CIRCLE 1.0",
        "expectedOutput": "Area: 3.14",
        "isHidden": false
      },
      {
        "id": "cpp-poly-1-tc-4",
        "input": "RECTANGLE 10.0 10.0",
        "expectedOutput": "Area: 100.00",
        "isHidden": true
      },
      {
        "id": "cpp-poly-1-tc-5",
        "input": "CIRCLE 2.5",
        "expectedOutput": "Area: 19.63",
        "isHidden": true
      },
      {
        "id": "cpp-poly-1-tc-6",
        "input": "RECTANGLE 3.5 2.0",
        "expectedOutput": "Area: 7.00",
        "isHidden": true
      },
      {
        "id": "cpp-poly-1-tc-7",
        "input": "CIRCLE 10.0",
        "expectedOutput": "Area: 314.16",
        "isHidden": true
      },
      {
        "id": "cpp-poly-1-tc-8",
        "input": "RECTANGLE 1.5 8.0",
        "expectedOutput": "Area: 12.00",
        "isHidden": true
      },
      {
        "id": "cpp-poly-1-tc-9",
        "input": "CIRCLE 7.0",
        "expectedOutput": "Area: 153.94",
        "isHidden": true
      },
      {
        "id": "cpp-poly-1-tc-10",
        "input": "RECTANGLE 50.0 2.0",
        "expectedOutput": "Area: 100.00",
        "isHidden": true
      }
    ]
  },
  {
    "id": "cpp-poly-2",
    "languageId": "cpp",
    "language": "cpp",
    "level": "intermediate",
    "topicId": "cpp-inheritance-and-virtual-functions",
    "title": "Employee Hierarchy and Dynamic Dispatch",
    "slug": "employee-hierarchy-and-dynamic-dispatch",
    "difficulty": "medium",
    "problemStatement": "Define a base class `Employee` with `virtual double calcCompensation() const`. Derive `Engineer(double base)` where compensation = base, and `Manager(double base, double bonus)` where compensation = base + bonus. Read N records \"ENGINEER <base>\" or \"MANAGER <base> <bonus>\". Sum total compensation using polymorphic pointers and print \"Total Compensation: $<total rounded to 2 decimals>\".",
    "description": "Define a base class `Employee` with `virtual double calcCompensation() const`. Derive `Engineer(double base)` where compensation = base, and `Manager(double base, double bonus)` where compensation = base + bonus. Read N records \"ENGINEER <base>\" or \"MANAGER <base> <bonus>\". Sum total compensation using polymorphic pointers and print \"Total Compensation: $<total rounded to 2 decimals>\".",
    "inputFormat": "First line N. Next N lines each contain role and salary params.",
    "outputFormat": "\"Total Compensation: $<total>\"",
    "constraints": [
      "1 <= N <= 100",
      "Salaries >= 0"
    ],
    "examples": [
      {
        "input": "2\nENGINEER 80000.0\nMANAGER 90000.0 20000.0",
        "output": "Total Compensation: $190000.00"
      }
    ],
    "starterCode": {
      "cpp": "#include <iostream>\n\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "cpp-poly-2-tc-1",
        "input": "2\nENGINEER 80000.0\nMANAGER 90000.0 20000.0",
        "expectedOutput": "Total Compensation: $190000.00",
        "isHidden": false
      },
      {
        "id": "cpp-poly-2-tc-2",
        "input": "1\nENGINEER 100000.0",
        "expectedOutput": "Total Compensation: $100000.00",
        "isHidden": false
      },
      {
        "id": "cpp-poly-2-tc-3",
        "input": "3\nENGINEER 50000.0\nENGINEER 60000.0\nMANAGER 70000.0 15000.0",
        "expectedOutput": "Total Compensation: $195000.00",
        "isHidden": false
      },
      {
        "id": "cpp-poly-2-tc-4",
        "input": "2\nMANAGER 120000.0 30000.0\nMANAGER 110000.0 25000.0",
        "expectedOutput": "Total Compensation: $285000.00",
        "isHidden": true
      },
      {
        "id": "cpp-poly-2-tc-5",
        "input": "1\nMANAGER 50000.0 0.0",
        "expectedOutput": "Total Compensation: $50000.00",
        "isHidden": true
      },
      {
        "id": "cpp-poly-2-tc-6",
        "input": "4\nENGINEER 10000.0\nENGINEER 20000.0\nENGINEER 30000.0\nENGINEER 40000.0",
        "expectedOutput": "Total Compensation: $100000.00",
        "isHidden": true
      },
      {
        "id": "cpp-poly-2-tc-7",
        "input": "2\nENGINEER 75000.5\nMANAGER 85000.5 10000.0",
        "expectedOutput": "Total Compensation: $170001.00",
        "isHidden": true
      },
      {
        "id": "cpp-poly-2-tc-8",
        "input": "3\nMANAGER 50000.0 10000.0\nENGINEER 40000.0\nMANAGER 60000.0 20000.0",
        "expectedOutput": "Total Compensation: $180000.00",
        "isHidden": true
      },
      {
        "id": "cpp-poly-2-tc-9",
        "input": "1\nENGINEER 0.0",
        "expectedOutput": "Total Compensation: $0.00",
        "isHidden": true
      },
      {
        "id": "cpp-poly-2-tc-10",
        "input": "2\nENGINEER 95000.0\nMANAGER 105000.0 50000.0",
        "expectedOutput": "Total Compensation: $250000.00",
        "isHidden": true
      }
    ]
  },
  {
    "id": "cpp-poly-3",
    "languageId": "cpp",
    "language": "cpp",
    "level": "intermediate",
    "topicId": "cpp-inheritance-and-virtual-functions",
    "title": "Virtual Destructors and Safe Polymorphic Deletion",
    "slug": "virtual-destructors-and-safe-polymorphic-deletion",
    "difficulty": "medium",
    "problemStatement": "In C++, deleting a derived object via a base pointer without a `virtual ~Base()` destructor causes undefined behavior and resource leaks. Create a polymorphic hierarchy `Base` and `Derived`. When Base destructor runs, print \"~Base()\". When Derived destructor runs, print \"~Derived()\". Delete a Derived instance via a `Base*` pointer and print the destructor call sequence.",
    "description": "In C++, deleting a derived object via a base pointer without a `virtual ~Base()` destructor causes undefined behavior and resource leaks. Create a polymorphic hierarchy `Base` and `Derived`. When Base destructor runs, print \"~Base()\". When Derived destructor runs, print \"~Derived()\". Delete a Derived instance via a `Base*` pointer and print the destructor call sequence.",
    "inputFormat": "An integer count N of objects created and deleted.",
    "outputFormat": "Destructor logs in order.",
    "constraints": [
      "1 <= N <= 5"
    ],
    "examples": [
      {
        "input": "1",
        "output": "~Derived()\n~Base()"
      }
    ],
    "starterCode": {
      "cpp": "#include <iostream>\n\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "cpp-poly-3-tc-1",
        "input": "1",
        "expectedOutput": "~Derived()\n~Base()",
        "isHidden": false
      },
      {
        "id": "cpp-poly-3-tc-2",
        "input": "2",
        "expectedOutput": "~Derived()\n~Base()\n~Derived()\n~Base()",
        "isHidden": false
      },
      {
        "id": "cpp-poly-3-tc-3",
        "input": "3",
        "expectedOutput": "~Derived()\n~Base()\n~Derived()\n~Base()\n~Derived()\n~Base()",
        "isHidden": false
      },
      {
        "id": "cpp-poly-3-tc-4",
        "input": "4",
        "expectedOutput": "~Derived()\n~Base()\n~Derived()\n~Base()\n~Derived()\n~Base()\n~Derived()\n~Base()",
        "isHidden": true
      },
      {
        "id": "cpp-poly-3-tc-5",
        "input": "5",
        "expectedOutput": "~Derived()\n~Base()\n~Derived()\n~Base()\n~Derived()\n~Base()\n~Derived()\n~Base()\n~Derived()\n~Base()",
        "isHidden": true
      },
      {
        "id": "cpp-poly-3-tc-6",
        "input": "1",
        "expectedOutput": "~Derived()\n~Base()",
        "isHidden": true
      },
      {
        "id": "cpp-poly-3-tc-7",
        "input": "2",
        "expectedOutput": "~Derived()\n~Base()\n~Derived()\n~Base()",
        "isHidden": true
      },
      {
        "id": "cpp-poly-3-tc-8",
        "input": "3",
        "expectedOutput": "~Derived()\n~Base()\n~Derived()\n~Base()\n~Derived()\n~Base()",
        "isHidden": true
      },
      {
        "id": "cpp-poly-3-tc-9",
        "input": "1",
        "expectedOutput": "~Derived()\n~Base()",
        "isHidden": true
      },
      {
        "id": "cpp-poly-3-tc-10",
        "input": "2",
        "expectedOutput": "~Derived()\n~Base()\n~Derived()\n~Base()",
        "isHidden": true
      }
    ]
  },
  {
    "id": "cpp-tmpl-1",
    "languageId": "cpp",
    "language": "cpp",
    "level": "intermediate",
    "topicId": "cpp-templates-generic-programming",
    "title": "Generic Function Template max3",
    "slug": "generic-function-template-max3",
    "difficulty": "easy",
    "problemStatement": "Write a generic function template `template <typename T> T max3(const T &a, const T &b, const T &c)`. Given type discriminator (\"INT\", \"DOUBLE\", \"STRING\") and three space-separated values, call max3 and print the maximum value (for DOUBLE, format to 2 decimal places).",
    "description": "Write a generic function template `template <typename T> T max3(const T &a, const T &b, const T &c)`. Given type discriminator (\"INT\", \"DOUBLE\", \"STRING\") and three space-separated values, call max3 and print the maximum value (for DOUBLE, format to 2 decimal places).",
    "inputFormat": "Type (\"INT\", \"DOUBLE\", \"STRING\") followed by 3 space-separated values.",
    "outputFormat": "Maximum value.",
    "constraints": [
      "Values valid for specified type"
    ],
    "examples": [
      {
        "input": "INT 10 50 30",
        "output": "50"
      },
      {
        "input": "STRING apple orange banana",
        "output": "orange"
      }
    ],
    "starterCode": {
      "cpp": "#include <iostream>\n\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "cpp-tmpl-1-tc-1",
        "input": "INT 10 50 30",
        "expectedOutput": "50",
        "isHidden": false
      },
      {
        "id": "cpp-tmpl-1-tc-2",
        "input": "STRING apple orange banana",
        "expectedOutput": "orange",
        "isHidden": false
      },
      {
        "id": "cpp-tmpl-1-tc-3",
        "input": "DOUBLE 3.14 2.71 4.56",
        "expectedOutput": "4.56",
        "isHidden": false
      },
      {
        "id": "cpp-tmpl-1-tc-4",
        "input": "INT -10 -5 -20",
        "expectedOutput": "-5",
        "isHidden": true
      },
      {
        "id": "cpp-tmpl-1-tc-5",
        "input": "DOUBLE 1.0 1.0 1.0",
        "expectedOutput": "1.00",
        "isHidden": true
      },
      {
        "id": "cpp-tmpl-1-tc-6",
        "input": "STRING dog elephant cat",
        "expectedOutput": "elephant",
        "isHidden": true
      },
      {
        "id": "cpp-tmpl-1-tc-7",
        "input": "INT 100 100 50",
        "expectedOutput": "100",
        "isHidden": true
      },
      {
        "id": "cpp-tmpl-1-tc-8",
        "input": "DOUBLE -5.5 0.0 5.5",
        "expectedOutput": "5.50",
        "isHidden": true
      },
      {
        "id": "cpp-tmpl-1-tc-9",
        "input": "STRING z a m",
        "expectedOutput": "z",
        "isHidden": true
      },
      {
        "id": "cpp-tmpl-1-tc-10",
        "input": "INT 0 0 0",
        "expectedOutput": "0",
        "isHidden": true
      }
    ]
  },
  {
    "id": "cpp-tmpl-2",
    "languageId": "cpp",
    "language": "cpp",
    "level": "intermediate",
    "topicId": "cpp-templates-generic-programming",
    "title": "Generic Stack Class Template",
    "slug": "generic-stack-class-template",
    "difficulty": "medium",
    "problemStatement": "Implement a generic class template `template <typename T> class MyStack` with methods `void push(T val)`, `void pop()`, `T top() const`, and `bool empty() const`. Given a sequence of Q commands (\"push <val>\", \"pop\", \"top\"), simulate the stack for integers. For \"top\", print the value (or \"EMPTY\" if empty). For \"pop\" on empty stack, print \"EMPTY\".",
    "description": "Implement a generic class template `template <typename T> class MyStack` with methods `void push(T val)`, `void pop()`, `T top() const`, and `bool empty() const`. Given a sequence of Q commands (\"push <val>\", \"pop\", \"top\"), simulate the stack for integers. For \"top\", print the value (or \"EMPTY\" if empty). For \"pop\" on empty stack, print \"EMPTY\".",
    "inputFormat": "First line Q. Next Q lines contain stack commands.",
    "outputFormat": "Results of top commands.",
    "constraints": [
      "1 <= Q <= 100"
    ],
    "examples": [
      {
        "input": "5\npush 10\npush 20\ntop\npop\ntop",
        "output": "20\n10"
      }
    ],
    "starterCode": {
      "cpp": "#include <iostream>\n\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "cpp-tmpl-2-tc-1",
        "input": "5\npush 10\npush 20\ntop\npop\ntop",
        "expectedOutput": "20\n10",
        "isHidden": false
      },
      {
        "id": "cpp-tmpl-2-tc-2",
        "input": "3\ntop\npop\ntop",
        "expectedOutput": "EMPTY\nEMPTY",
        "isHidden": false
      },
      {
        "id": "cpp-tmpl-2-tc-3",
        "input": "4\npush 5\npop\ntop\npush 7",
        "expectedOutput": "EMPTY",
        "isHidden": false
      },
      {
        "id": "cpp-tmpl-2-tc-4",
        "input": "6\npush 1\npush 2\npush 3\ntop\npop\ntop",
        "expectedOutput": "3\n2",
        "isHidden": true
      },
      {
        "id": "cpp-tmpl-2-tc-5",
        "input": "2\npush 42\ntop",
        "expectedOutput": "42",
        "isHidden": true
      },
      {
        "id": "cpp-tmpl-2-tc-6",
        "input": "5\npush 100\npop\npush 200\npush 300\ntop",
        "expectedOutput": "300",
        "isHidden": true
      },
      {
        "id": "cpp-tmpl-2-tc-7",
        "input": "4\npush 8\npush 9\npop\ntop",
        "expectedOutput": "8",
        "isHidden": true
      },
      {
        "id": "cpp-tmpl-2-tc-8",
        "input": "3\npush 15\ntop\npop",
        "expectedOutput": "15",
        "isHidden": true
      },
      {
        "id": "cpp-tmpl-2-tc-9",
        "input": "6\npush 10\npush 20\npop\npop\ntop\npop",
        "expectedOutput": "EMPTY",
        "isHidden": true
      },
      {
        "id": "cpp-tmpl-2-tc-10",
        "input": "5\npush 77\npush 88\ntop\npop\ntop",
        "expectedOutput": "88\n77",
        "isHidden": true
      }
    ]
  },
  {
    "id": "cpp-tmpl-3",
    "languageId": "cpp",
    "language": "cpp",
    "level": "intermediate",
    "topicId": "cpp-templates-generic-programming",
    "title": "Class Template Specialization for Strings",
    "slug": "class-template-specialization-for-strings",
    "difficulty": "medium",
    "problemStatement": "Implement a class template `template <typename T> struct Printer` that prints values. Provide a full template specialization for `std::string` that encloses the string in quotation marks: `\"<val>\"`. For non-string types (int, double), print normally. Given type code (\"INT\" or \"STRING\") and value, print formatted output.",
    "description": "Implement a class template `template <typename T> struct Printer` that prints values. Provide a full template specialization for `std::string` that encloses the string in quotation marks: `\"<val>\"`. For non-string types (int, double), print normally. Given type code (\"INT\" or \"STRING\") and value, print formatted output.",
    "inputFormat": "Type (\"INT\" or \"STRING\") and value token.",
    "outputFormat": "Printed formatted value.",
    "constraints": [
      "Value is valid for type"
    ],
    "examples": [
      {
        "input": "INT 42",
        "output": "42"
      },
      {
        "input": "STRING hello",
        "output": "\"hello\""
      }
    ],
    "starterCode": {
      "cpp": "#include <iostream>\n\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "cpp-tmpl-3-tc-1",
        "input": "INT 42",
        "expectedOutput": "42",
        "isHidden": false
      },
      {
        "id": "cpp-tmpl-3-tc-2",
        "input": "STRING hello",
        "expectedOutput": "\"hello\"",
        "isHidden": false
      },
      {
        "id": "cpp-tmpl-3-tc-3",
        "input": "INT -100",
        "expectedOutput": "-100",
        "isHidden": false
      },
      {
        "id": "cpp-tmpl-3-tc-4",
        "input": "STRING modern_cpp",
        "expectedOutput": "\"modern_cpp\"",
        "isHidden": true
      },
      {
        "id": "cpp-tmpl-3-tc-5",
        "input": "INT 0",
        "expectedOutput": "0",
        "isHidden": true
      },
      {
        "id": "cpp-tmpl-3-tc-6",
        "input": "STRING templates",
        "expectedOutput": "\"templates\"",
        "isHidden": true
      },
      {
        "id": "cpp-tmpl-3-tc-7",
        "input": "INT 999999",
        "expectedOutput": "999999",
        "isHidden": true
      },
      {
        "id": "cpp-tmpl-3-tc-8",
        "input": "STRING specialized",
        "expectedOutput": "\"specialized\"",
        "isHidden": true
      },
      {
        "id": "cpp-tmpl-3-tc-9",
        "input": "INT 7",
        "expectedOutput": "7",
        "isHidden": true
      },
      {
        "id": "cpp-tmpl-3-tc-10",
        "input": "STRING RAII",
        "expectedOutput": "\"RAII\"",
        "isHidden": true
      }
    ]
  },
  {
    "id": "cpp-stl-1",
    "languageId": "cpp",
    "language": "cpp",
    "level": "intermediate",
    "topicId": "cpp-stl-vector-and-containers",
    "title": "std::vector Dynamic Capacity Expansion",
    "slug": "std-vector-dynamic-capacity-expansion",
    "difficulty": "easy",
    "problemStatement": "Read an integer N, followed by N integers. Push each integer into a `std::vector<int>`. After pushing all elements, print \"Size: <size> | First: <first> | Last: <last> | Sum: <sum>\".",
    "description": "Read an integer N, followed by N integers. Push each integer into a `std::vector<int>`. After pushing all elements, print \"Size: <size> | First: <first> | Last: <last> | Sum: <sum>\".",
    "inputFormat": "First line N. Second line N integers.",
    "outputFormat": "\"Size: <size> | First: <first> | Last: <last> | Sum: <sum>\"",
    "constraints": [
      "1 <= N <= 1000"
    ],
    "examples": [
      {
        "input": "4\n10 20 30 40",
        "output": "Size: 4 | First: 10 | Last: 40 | Sum: 100"
      }
    ],
    "starterCode": {
      "cpp": "#include <iostream>\n\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "cpp-stl-1-tc-1",
        "input": "4\n10 20 30 40",
        "expectedOutput": "Size: 4 | First: 10 | Last: 40 | Sum: 100",
        "isHidden": false
      },
      {
        "id": "cpp-stl-1-tc-2",
        "input": "1\n42",
        "expectedOutput": "Size: 1 | First: 42 | Last: 42 | Sum: 42",
        "isHidden": false
      },
      {
        "id": "cpp-stl-1-tc-3",
        "input": "3\n-5 0 5",
        "expectedOutput": "Size: 3 | First: -5 | Last: 5 | Sum: 0",
        "isHidden": false
      },
      {
        "id": "cpp-stl-1-tc-4",
        "input": "5\n1 2 3 4 5",
        "expectedOutput": "Size: 5 | First: 1 | Last: 5 | Sum: 15",
        "isHidden": true
      },
      {
        "id": "cpp-stl-1-tc-5",
        "input": "2\n100 200",
        "expectedOutput": "Size: 2 | First: 100 | Last: 200 | Sum: 300",
        "isHidden": true
      },
      {
        "id": "cpp-stl-1-tc-6",
        "input": "6\n2 4 6 8 10 12",
        "expectedOutput": "Size: 6 | First: 2 | Last: 12 | Sum: 42",
        "isHidden": true
      },
      {
        "id": "cpp-stl-1-tc-7",
        "input": "4\n-10 -20 -30 -40",
        "expectedOutput": "Size: 4 | First: -10 | Last: -40 | Sum: -100",
        "isHidden": true
      },
      {
        "id": "cpp-stl-1-tc-8",
        "input": "3\n7 7 7",
        "expectedOutput": "Size: 3 | First: 7 | Last: 7 | Sum: 21",
        "isHidden": true
      },
      {
        "id": "cpp-stl-1-tc-9",
        "input": "5\n10 5 15 20 25",
        "expectedOutput": "Size: 5 | First: 10 | Last: 25 | Sum: 75",
        "isHidden": true
      },
      {
        "id": "cpp-stl-1-tc-10",
        "input": "2\n-1 1",
        "expectedOutput": "Size: 2 | First: -1 | Last: 1 | Sum: 0",
        "isHidden": true
      }
    ]
  },
  {
    "id": "cpp-stl-2",
    "languageId": "cpp",
    "language": "cpp",
    "level": "intermediate",
    "topicId": "cpp-stl-vector-and-containers",
    "title": "Word Frequency Map with std::map",
    "slug": "word-frequency-map-with-std-map",
    "difficulty": "medium",
    "problemStatement": "Read an integer N, followed by N words. Using `std::map<std::string, int>`, count the frequency of each word. Since `std::map` keeps keys ordered lexicographically, print each word and its frequency in the format: \"<word>: <count>\".",
    "description": "Read an integer N, followed by N words. Using `std::map<std::string, int>`, count the frequency of each word. Since `std::map` keeps keys ordered lexicographically, print each word and its frequency in the format: \"<word>: <count>\".",
    "inputFormat": "First line N. Second line N words.",
    "outputFormat": "Lexicographically sorted lines: \"<word>: <count>\"",
    "constraints": [
      "1 <= N <= 1000"
    ],
    "examples": [
      {
        "input": "5\napple banana apple cherry banana",
        "output": "apple: 2\nbanana: 2\ncherry: 1"
      }
    ],
    "starterCode": {
      "cpp": "#include <iostream>\n\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "cpp-stl-2-tc-1",
        "input": "5\napple banana apple cherry banana",
        "expectedOutput": "apple: 2\nbanana: 2\ncherry: 1",
        "isHidden": false
      },
      {
        "id": "cpp-stl-2-tc-2",
        "input": "1\nhello",
        "expectedOutput": "hello: 1",
        "isHidden": false
      },
      {
        "id": "cpp-stl-2-tc-3",
        "input": "4\na b c d",
        "expectedOutput": "a: 1\nb: 1\nc: 1\nd: 1",
        "isHidden": false
      },
      {
        "id": "cpp-stl-2-tc-4",
        "input": "4\nz z z z",
        "expectedOutput": "z: 4",
        "isHidden": true
      },
      {
        "id": "cpp-stl-2-tc-5",
        "input": "6\nthe quick brown fox jumps over",
        "expectedOutput": "brown: 1\nfox: 1\njumps: 1\nover: 1\nquick: 1\nthe: 1",
        "isHidden": true
      },
      {
        "id": "cpp-stl-2-tc-6",
        "input": "3\ncat dog cat",
        "expectedOutput": "cat: 2\ndog: 1",
        "isHidden": true
      },
      {
        "id": "cpp-stl-2-tc-7",
        "input": "5\nred blue red green blue",
        "expectedOutput": "blue: 2\ngreen: 1\nred: 2",
        "isHidden": true
      },
      {
        "id": "cpp-stl-2-tc-8",
        "input": "2\nyes no",
        "expectedOutput": "no: 1\nyes: 1",
        "isHidden": true
      },
      {
        "id": "cpp-stl-2-tc-9",
        "input": "4\nfoo bar foo bar",
        "expectedOutput": "bar: 2\nfoo: 2",
        "isHidden": true
      },
      {
        "id": "cpp-stl-2-tc-10",
        "input": "3\none two one",
        "expectedOutput": "one: 2\ntwo: 1",
        "isHidden": true
      }
    ]
  },
  {
    "id": "cpp-stl-3",
    "languageId": "cpp",
    "language": "cpp",
    "level": "intermediate",
    "topicId": "cpp-stl-vector-and-containers",
    "title": "Balanced Brackets with std::stack",
    "slug": "balanced-brackets-with-std-stack",
    "difficulty": "medium",
    "problemStatement": "Given a string containing bracket characters `()`, `{}`, and `[]`, determine if the string is balanced using `std::stack<char>`. Print \"true\" if balanced, else \"false\".",
    "description": "Given a string containing bracket characters `()`, `{}`, and `[]`, determine if the string is balanced using `std::stack<char>`. Print \"true\" if balanced, else \"false\".",
    "inputFormat": "A string of bracket characters.",
    "outputFormat": "\"true\" or \"false\"",
    "constraints": [
      "Length <= 1000"
    ],
    "examples": [
      {
        "input": "{[()]}",
        "output": "true"
      },
      {
        "input": "{[(])}",
        "output": "false"
      }
    ],
    "starterCode": {
      "cpp": "#include <iostream>\n\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "cpp-stl-3-tc-1",
        "input": "{[()]}",
        "expectedOutput": "true",
        "isHidden": false
      },
      {
        "id": "cpp-stl-3-tc-2",
        "input": "{[(])}",
        "expectedOutput": "false",
        "isHidden": false
      },
      {
        "id": "cpp-stl-3-tc-3",
        "input": "()",
        "expectedOutput": "true",
        "isHidden": false
      },
      {
        "id": "cpp-stl-3-tc-4",
        "input": "()[]{}",
        "expectedOutput": "true",
        "isHidden": true
      },
      {
        "id": "cpp-stl-3-tc-5",
        "input": "(]",
        "expectedOutput": "false",
        "isHidden": true
      },
      {
        "id": "cpp-stl-3-tc-6",
        "input": "([)]",
        "expectedOutput": "false",
        "isHidden": true
      },
      {
        "id": "cpp-stl-3-tc-7",
        "input": "{[]}",
        "expectedOutput": "true",
        "isHidden": true
      },
      {
        "id": "cpp-stl-3-tc-8",
        "input": "((()))",
        "expectedOutput": "true",
        "isHidden": true
      },
      {
        "id": "cpp-stl-3-tc-9",
        "input": "(()",
        "expectedOutput": "false",
        "isHidden": true
      },
      {
        "id": "cpp-stl-3-tc-10",
        "input": "",
        "expectedOutput": "true",
        "isHidden": true
      }
    ]
  },
  {
    "id": "cpp-stl-4",
    "languageId": "cpp",
    "language": "cpp",
    "level": "intermediate",
    "topicId": "cpp-stl-vector-and-containers",
    "title": "K Largest Elements via std::priority_queue",
    "slug": "k-largest-elements-via-std-priority-queue",
    "difficulty": "medium",
    "problemStatement": "Given an array of N integers and an integer K, find the K largest elements using a min-heap `std::priority_queue<int, std::vector<int>, std::greater<int>>`. Print the K largest elements in ascending order separated by space.",
    "description": "Given an array of N integers and an integer K, find the K largest elements using a min-heap `std::priority_queue<int, std::vector<int>, std::greater<int>>`. Print the K largest elements in ascending order separated by space.",
    "inputFormat": "First line N and K. Second line N integers.",
    "outputFormat": "K integers in ascending order separated by space.",
    "constraints": [
      "1 <= K <= N <= 1000"
    ],
    "examples": [
      {
        "input": "6 3\n3 2 1 5 6 4",
        "output": "4 5 6"
      }
    ],
    "starterCode": {
      "cpp": "#include <iostream>\n\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "cpp-stl-4-tc-1",
        "input": "6 3\n3 2 1 5 6 4",
        "expectedOutput": "4 5 6",
        "isHidden": false
      },
      {
        "id": "cpp-stl-4-tc-2",
        "input": "5 1\n10 50 20 40 30",
        "expectedOutput": "50",
        "isHidden": false
      },
      {
        "id": "cpp-stl-4-tc-3",
        "input": "4 4\n4 3 2 1",
        "expectedOutput": "1 2 3 4",
        "isHidden": false
      },
      {
        "id": "cpp-stl-4-tc-4",
        "input": "5 2\n-5 -2 -10 -1 -8",
        "expectedOutput": "-2 -1",
        "isHidden": true
      },
      {
        "id": "cpp-stl-4-tc-5",
        "input": "7 3\n100 20 300 40 500 60 700",
        "expectedOutput": "300 500 700",
        "isHidden": true
      },
      {
        "id": "cpp-stl-4-tc-6",
        "input": "3 2\n7 7 7",
        "expectedOutput": "7 7",
        "isHidden": true
      },
      {
        "id": "cpp-stl-4-tc-7",
        "input": "6 2\n1 9 2 8 3 7",
        "expectedOutput": "8 9",
        "isHidden": true
      },
      {
        "id": "cpp-stl-4-tc-8",
        "input": "5 3\n15 25 35 45 55",
        "expectedOutput": "35 45 55",
        "isHidden": true
      },
      {
        "id": "cpp-stl-4-tc-9",
        "input": "4 1\n99 100 98 97",
        "expectedOutput": "100",
        "isHidden": true
      },
      {
        "id": "cpp-stl-4-tc-10",
        "input": "5 5\n5 4 3 2 1",
        "expectedOutput": "1 2 3 4 5",
        "isHidden": true
      }
    ]
  },
  {
    "id": "cpp-algo-1",
    "languageId": "cpp",
    "language": "cpp",
    "level": "intermediate",
    "topicId": "cpp-stl-algorithms-and-lambdas",
    "title": "Predicate Counting with std::count_if and Lambdas",
    "slug": "predicate-counting-with-std-count-if-and-lambdas",
    "difficulty": "easy",
    "problemStatement": "Using `<algorithm>` and a C++ lambda expression, count how many numbers in an array of N integers are strictly positive and even: `[](int x) { return x > 0 && x % 2 == 0; }`. Print the count.",
    "description": "Using `<algorithm>` and a C++ lambda expression, count how many numbers in an array of N integers are strictly positive and even: `[](int x) { return x > 0 && x % 2 == 0; }`. Print the count.",
    "inputFormat": "First line N. Second line N integers.",
    "outputFormat": "Integer count.",
    "constraints": [
      "1 <= N <= 1000"
    ],
    "examples": [
      {
        "input": "6\n-2 0 2 3 4 5",
        "output": "2"
      }
    ],
    "starterCode": {
      "cpp": "#include <iostream>\n\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "cpp-algo-1-tc-1",
        "input": "6\n-2 0 2 3 4 5",
        "expectedOutput": "2",
        "isHidden": false
      },
      {
        "id": "cpp-algo-1-tc-2",
        "input": "4\n1 3 5 7",
        "expectedOutput": "0",
        "isHidden": false
      },
      {
        "id": "cpp-algo-1-tc-3",
        "input": "5\n2 4 6 8 10",
        "expectedOutput": "5",
        "isHidden": false
      },
      {
        "id": "cpp-algo-1-tc-4",
        "input": "4\n-2 -4 -6 -8",
        "expectedOutput": "0",
        "isHidden": true
      },
      {
        "id": "cpp-algo-1-tc-5",
        "input": "3\n0 0 0",
        "expectedOutput": "0",
        "isHidden": true
      },
      {
        "id": "cpp-algo-1-tc-6",
        "input": "7\n12 15 18 21 24 27 30",
        "expectedOutput": "4",
        "isHidden": true
      },
      {
        "id": "cpp-algo-1-tc-7",
        "input": "1\n2",
        "expectedOutput": "1",
        "isHidden": true
      },
      {
        "id": "cpp-algo-1-tc-8",
        "input": "1\n-2",
        "expectedOutput": "0",
        "isHidden": true
      },
      {
        "id": "cpp-algo-1-tc-9",
        "input": "5\n10 -10 20 -20 30",
        "expectedOutput": "3",
        "isHidden": true
      },
      {
        "id": "cpp-algo-1-tc-10",
        "input": "6\n2 2 2 2 2 2",
        "expectedOutput": "6",
        "isHidden": true
      }
    ]
  },
  {
    "id": "cpp-algo-2",
    "languageId": "cpp",
    "language": "cpp",
    "level": "intermediate",
    "topicId": "cpp-stl-algorithms-and-lambdas",
    "title": "Custom Sorting with Lambda Comparators",
    "slug": "custom-sorting-with-lambda-comparators",
    "difficulty": "medium",
    "problemStatement": "Given N pairs of integers (id and score), sort them using `std::sort` with a custom lambda comparator: primarily descending by score, and secondarily ascending by id (in case of ties). Print the sorted pairs formatted as \"<id>:<score>\" separated by spaces.",
    "description": "Given N pairs of integers (id and score), sort them using `std::sort` with a custom lambda comparator: primarily descending by score, and secondarily ascending by id (in case of ties). Print the sorted pairs formatted as \"<id>:<score>\" separated by spaces.",
    "inputFormat": "First line N. Next N lines each contain id and score.",
    "outputFormat": "Space-separated \"<id>:<score>\" tokens.",
    "constraints": [
      "1 <= N <= 1000"
    ],
    "examples": [
      {
        "input": "3\n1 85\n2 95\n3 85",
        "output": "2:95 1:85 3:85"
      }
    ],
    "starterCode": {
      "cpp": "#include <iostream>\n\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "cpp-algo-2-tc-1",
        "input": "3\n1 85\n2 95\n3 85",
        "expectedOutput": "2:95 1:85 3:85",
        "isHidden": false
      },
      {
        "id": "cpp-algo-2-tc-2",
        "input": "1\n10 100",
        "expectedOutput": "10:100",
        "isHidden": false
      },
      {
        "id": "cpp-algo-2-tc-3",
        "input": "4\n1 50\n2 60\n3 70\n4 80",
        "expectedOutput": "4:80 3:70 2:60 1:50",
        "isHidden": false
      },
      {
        "id": "cpp-algo-2-tc-4",
        "input": "3\n3 90\n1 90\n2 90",
        "expectedOutput": "1:90 2:90 3:90",
        "isHidden": true
      },
      {
        "id": "cpp-algo-2-tc-5",
        "input": "2\n5 100\n6 90",
        "expectedOutput": "5:100 6:90",
        "isHidden": true
      },
      {
        "id": "cpp-algo-2-tc-6",
        "input": "4\n4 20\n2 40\n1 40\n3 20",
        "expectedOutput": "1:40 2:40 3:20 4:20",
        "isHidden": true
      },
      {
        "id": "cpp-algo-2-tc-7",
        "input": "2\n10 0\n20 0",
        "expectedOutput": "10:0 20:0",
        "isHidden": true
      },
      {
        "id": "cpp-algo-2-tc-8",
        "input": "3\n1 10\n2 20\n3 30",
        "expectedOutput": "3:30 2:20 1:10",
        "isHidden": true
      },
      {
        "id": "cpp-algo-2-tc-9",
        "input": "5\n5 50\n4 50\n3 50\n2 50\n1 50",
        "expectedOutput": "1:50 2:50 3:50 4:50 5:50",
        "isHidden": true
      },
      {
        "id": "cpp-algo-2-tc-10",
        "input": "2\n99 75\n88 85",
        "expectedOutput": "88:85 99:75",
        "isHidden": true
      }
    ]
  },
  {
    "id": "cpp-algo-3",
    "languageId": "cpp",
    "language": "cpp",
    "level": "intermediate",
    "topicId": "cpp-stl-algorithms-and-lambdas",
    "title": "Transformation and Accumulation Pipeline",
    "slug": "transformation-and-accumulation-pipeline",
    "difficulty": "medium",
    "problemStatement": "Using `std::transform` and `std::accumulate` from `<numeric>`, transform an array of N integers by squaring each element, and then compute the sum of squares. Print the transformed squared elements on line 1, and the total sum on line 2.",
    "description": "Using `std::transform` and `std::accumulate` from `<numeric>`, transform an array of N integers by squaring each element, and then compute the sum of squares. Print the transformed squared elements on line 1, and the total sum on line 2.",
    "inputFormat": "First line N. Second line N integers.",
    "outputFormat": "Line 1: space-separated squared integers.\nLine 2: total sum.",
    "constraints": [
      "1 <= N <= 1000",
      "-1000 <= element <= 1000"
    ],
    "examples": [
      {
        "input": "3\n1 2 3",
        "output": "1 4 9\n14"
      }
    ],
    "starterCode": {
      "cpp": "#include <iostream>\n\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "cpp-algo-3-tc-1",
        "input": "3\n1 2 3",
        "expectedOutput": "1 4 9\n14",
        "isHidden": false
      },
      {
        "id": "cpp-algo-3-tc-2",
        "input": "1\n5",
        "expectedOutput": "25\n25",
        "isHidden": false
      },
      {
        "id": "cpp-algo-3-tc-3",
        "input": "4\n-1 -2 -3 -4",
        "expectedOutput": "1 4 9 16\n30",
        "isHidden": false
      },
      {
        "id": "cpp-algo-3-tc-4",
        "input": "3\n0 0 0",
        "expectedOutput": "0 0 0\n0",
        "isHidden": true
      },
      {
        "id": "cpp-algo-3-tc-5",
        "input": "5\n2 4 6 8 10",
        "expectedOutput": "4 16 36 64 100\n220",
        "isHidden": true
      },
      {
        "id": "cpp-algo-3-tc-6",
        "input": "2\n10 20",
        "expectedOutput": "100 400\n500",
        "isHidden": true
      },
      {
        "id": "cpp-algo-3-tc-7",
        "input": "4\n3 3 3 3",
        "expectedOutput": "9 9 9 9\n36",
        "isHidden": true
      },
      {
        "id": "cpp-algo-3-tc-8",
        "input": "2\n-5 5",
        "expectedOutput": "25 25\n50",
        "isHidden": true
      },
      {
        "id": "cpp-algo-3-tc-9",
        "input": "5\n1 1 1 1 1",
        "expectedOutput": "1 1 1 1 1\n5",
        "isHidden": true
      },
      {
        "id": "cpp-algo-3-tc-10",
        "input": "3\n10 -10 10",
        "expectedOutput": "100 100 100\n300",
        "isHidden": true
      }
    ]
  },
  {
    "id": "cpp-algo-4",
    "languageId": "cpp",
    "language": "cpp",
    "level": "intermediate",
    "topicId": "cpp-stl-algorithms-and-lambdas",
    "title": "Erase-Remove Idiom with std::remove_if",
    "slug": "erase-remove-idiom-with-std-remove-if",
    "difficulty": "medium",
    "problemStatement": "The canonical C++ Erase-Remove idiom `vec.erase(std::remove_if(vec.begin(), vec.end(), pred), vec.end());` removes elements matching a predicate in linear time. Given N integers and a threshold K, remove all elements strictly less than K using erase-remove. Print the remaining elements (or \"EMPTY\" if none remain).",
    "description": "The canonical C++ Erase-Remove idiom `vec.erase(std::remove_if(vec.begin(), vec.end(), pred), vec.end());` removes elements matching a predicate in linear time. Given N integers and a threshold K, remove all elements strictly less than K using erase-remove. Print the remaining elements (or \"EMPTY\" if none remain).",
    "inputFormat": "First line N and K. Second line N integers.",
    "outputFormat": "Remaining elements separated by space or \"EMPTY\".",
    "constraints": [
      "1 <= N <= 1000"
    ],
    "examples": [
      {
        "input": "5 10\n5 12 8 15 20",
        "output": "12 15 20"
      }
    ],
    "starterCode": {
      "cpp": "#include <iostream>\n\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "cpp-algo-4-tc-1",
        "input": "5 10\n5 12 8 15 20",
        "expectedOutput": "12 15 20",
        "isHidden": false
      },
      {
        "id": "cpp-algo-4-tc-2",
        "input": "3 50\n10 20 30",
        "expectedOutput": "EMPTY",
        "isHidden": false
      },
      {
        "id": "cpp-algo-4-tc-3",
        "input": "4 0\n-5 0 5 10",
        "expectedOutput": "0 5 10",
        "isHidden": false
      },
      {
        "id": "cpp-algo-4-tc-4",
        "input": "3 5\n5 6 7",
        "expectedOutput": "5 6 7",
        "isHidden": true
      },
      {
        "id": "cpp-algo-4-tc-5",
        "input": "5 100\n100 200 50 300 400",
        "expectedOutput": "100 200 300 400",
        "isHidden": true
      },
      {
        "id": "cpp-algo-4-tc-6",
        "input": "1 10\n9",
        "expectedOutput": "EMPTY",
        "isHidden": true
      },
      {
        "id": "cpp-algo-4-tc-7",
        "input": "1 10\n10",
        "expectedOutput": "10",
        "isHidden": true
      },
      {
        "id": "cpp-algo-4-tc-8",
        "input": "6 25\n10 20 30 40 15 50",
        "expectedOutput": "30 40 50",
        "isHidden": true
      },
      {
        "id": "cpp-algo-4-tc-9",
        "input": "4 -10\n-20 -15 -10 -5",
        "expectedOutput": "-10 -5",
        "isHidden": true
      },
      {
        "id": "cpp-algo-4-tc-10",
        "input": "5 7\n7 7 7 7 7",
        "expectedOutput": "7 7 7 7 7",
        "isHidden": true
      }
    ]
  },
  {
    "id": "cpp-smart-1",
    "languageId": "cpp",
    "language": "cpp",
    "level": "advanced",
    "topicId": "cpp-smart-pointers-unique-shared",
    "title": "Unique Ownership Transfer with std::make_unique",
    "slug": "unique-ownership-transfer-with-std-make-unique",
    "difficulty": "medium",
    "problemStatement": "In modern C++14, `std::make_unique<T>` encapsulates dynamic heap allocation with single-ownership semantics. Create a struct `Data { int id; std::string tag; };`. Implement a factory function `std::unique_ptr<Data> createData(int id, const std::string &tag)`. Pass ownership to a consumer function `void process(std::unique_ptr<Data> ptr)` using `std::move`. Print: \"[PROCESSED Data #<id> (<tag>)]\".",
    "description": "In modern C++14, `std::make_unique<T>` encapsulates dynamic heap allocation with single-ownership semantics. Create a struct `Data { int id; std::string tag; };`. Implement a factory function `std::unique_ptr<Data> createData(int id, const std::string &tag)`. Pass ownership to a consumer function `void process(std::unique_ptr<Data> ptr)` using `std::move`. Print: \"[PROCESSED Data #<id> (<tag>)]\".",
    "inputFormat": "id and tag separated by space.",
    "outputFormat": "\"[PROCESSED Data #<id> (<tag>)]\"",
    "constraints": [
      "id >= 1",
      "tag length <= 50"
    ],
    "examples": [
      {
        "input": "101 SensorA",
        "output": "[PROCESSED Data #101 (SensorA)]"
      }
    ],
    "starterCode": {
      "cpp": "#include <iostream>\n\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "cpp-smart-1-tc-1",
        "input": "101 SensorA",
        "expectedOutput": "[PROCESSED Data #101 (SensorA)]",
        "isHidden": false
      },
      {
        "id": "cpp-smart-1-tc-2",
        "input": "202 MotorB",
        "expectedOutput": "[PROCESSED Data #202 (MotorB)]",
        "isHidden": false
      },
      {
        "id": "cpp-smart-1-tc-3",
        "input": "1 Core",
        "expectedOutput": "[PROCESSED Data #1 (Core)]",
        "isHidden": false
      },
      {
        "id": "cpp-smart-1-tc-4",
        "input": "999 Telemetry",
        "expectedOutput": "[PROCESSED Data #999 (Telemetry)]",
        "isHidden": true
      },
      {
        "id": "cpp-smart-1-tc-5",
        "input": "42 Packet",
        "expectedOutput": "[PROCESSED Data #42 (Packet)]",
        "isHidden": true
      },
      {
        "id": "cpp-smart-1-tc-6",
        "input": "5 Engine",
        "expectedOutput": "[PROCESSED Data #5 (Engine)]",
        "isHidden": true
      },
      {
        "id": "cpp-smart-1-tc-7",
        "input": "7 Node",
        "expectedOutput": "[PROCESSED Data #7 (Node)]",
        "isHidden": true
      },
      {
        "id": "cpp-smart-1-tc-8",
        "input": "12 Dispatcher",
        "expectedOutput": "[PROCESSED Data #12 (Dispatcher)]",
        "isHidden": true
      },
      {
        "id": "cpp-smart-1-tc-9",
        "input": "88 Worker",
        "expectedOutput": "[PROCESSED Data #88 (Worker)]",
        "isHidden": true
      },
      {
        "id": "cpp-smart-1-tc-10",
        "input": "500 Cluster",
        "expectedOutput": "[PROCESSED Data #500 (Cluster)]",
        "isHidden": true
      }
    ]
  },
  {
    "id": "cpp-smart-2",
    "languageId": "cpp",
    "language": "cpp",
    "level": "advanced",
    "topicId": "cpp-smart-pointers-unique-shared",
    "title": "Shared Ownership Reference Count Tracking",
    "slug": "shared-ownership-reference-count-tracking",
    "difficulty": "medium",
    "problemStatement": "`std::shared_ptr<T>` maintains a reference count of active owners via `use_count()`. Start by creating a `std::shared_ptr<int> p1 = std::make_shared<int>(val);`. Perform operations based on input: for each \"COPY\", copy the shared pointer into a vector (increasing reference count). For each \"RESET\", remove/reset one copy. Print the `use_count()` after each operation.",
    "description": "`std::shared_ptr<T>` maintains a reference count of active owners via `use_count()`. Start by creating a `std::shared_ptr<int> p1 = std::make_shared<int>(val);`. Perform operations based on input: for each \"COPY\", copy the shared pointer into a vector (increasing reference count). For each \"RESET\", remove/reset one copy. Print the `use_count()` after each operation.",
    "inputFormat": "First line initial val. Second line N operations. Next N lines contain \"COPY\" or \"RESET\".",
    "outputFormat": "use_count integer after each step.",
    "constraints": [
      "1 <= N <= 20"
    ],
    "examples": [
      {
        "input": "42\n3\nCOPY\nCOPY\nRESET",
        "output": "2\n3\n2"
      }
    ],
    "starterCode": {
      "cpp": "#include <iostream>\n\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "cpp-smart-2-tc-1",
        "input": "42\n3\nCOPY\nCOPY\nRESET",
        "expectedOutput": "2\n3\n2",
        "isHidden": false
      },
      {
        "id": "cpp-smart-2-tc-2",
        "input": "10\n1\nCOPY",
        "expectedOutput": "2",
        "isHidden": false
      },
      {
        "id": "cpp-smart-2-tc-3",
        "input": "5\n2\nCOPY\nRESET",
        "expectedOutput": "2\n1",
        "isHidden": false
      },
      {
        "id": "cpp-smart-2-tc-4",
        "input": "100\n4\nCOPY\nCOPY\nCOPY\nRESET",
        "expectedOutput": "2\n3\n4\n3",
        "isHidden": true
      },
      {
        "id": "cpp-smart-2-tc-5",
        "input": "7\n2\nCOPY\nCOPY",
        "expectedOutput": "2\n3",
        "isHidden": true
      },
      {
        "id": "cpp-smart-2-tc-6",
        "input": "99\n5\nCOPY\nCOPY\nRESET\nRESET\nCOPY",
        "expectedOutput": "2\n3\n2\n1\n2",
        "isHidden": true
      },
      {
        "id": "cpp-smart-2-tc-7",
        "input": "1\n1\nRESET",
        "expectedOutput": "1",
        "isHidden": true
      },
      {
        "id": "cpp-smart-2-tc-8",
        "input": "50\n3\nCOPY\nRESET\nCOPY",
        "expectedOutput": "2\n1\n2",
        "isHidden": true
      },
      {
        "id": "cpp-smart-2-tc-9",
        "input": "25\n4\nCOPY\nCOPY\nRESET\nCOPY",
        "expectedOutput": "2\n3\n2\n3",
        "isHidden": true
      },
      {
        "id": "cpp-smart-2-tc-10",
        "input": "8\n2\nCOPY\nRESET",
        "expectedOutput": "2\n1",
        "isHidden": true
      }
    ]
  },
  {
    "id": "cpp-smart-3",
    "languageId": "cpp",
    "language": "cpp",
    "level": "advanced",
    "topicId": "cpp-smart-pointers-unique-shared",
    "title": "Unique Pointer Custom Deleter Callback",
    "slug": "unique-pointer-custom-deleter-callback",
    "difficulty": "medium",
    "problemStatement": "`std::unique_ptr` accepts a custom deleter type or lambda: `auto customDeleter = [](int *ptr) { ... delete ptr; };`. Write a program using a custom deleter that logs \"Resource <id> Freed\" upon destruction. Given an ID, create the resource in a scoped block and verify the custom deleter message is printed.",
    "description": "`std::unique_ptr` accepts a custom deleter type or lambda: `auto customDeleter = [](int *ptr) { ... delete ptr; };`. Write a program using a custom deleter that logs \"Resource <id> Freed\" upon destruction. Given an ID, create the resource in a scoped block and verify the custom deleter message is printed.",
    "inputFormat": "An integer ID.",
    "outputFormat": "\"Resource <id> Freed\"",
    "constraints": [
      "1 <= ID <= 10000"
    ],
    "examples": [
      {
        "input": "42",
        "output": "Resource 42 Freed"
      }
    ],
    "starterCode": {
      "cpp": "#include <iostream>\n\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "cpp-smart-3-tc-1",
        "input": "42",
        "expectedOutput": "Resource 42 Freed",
        "isHidden": false
      },
      {
        "id": "cpp-smart-3-tc-2",
        "input": "1",
        "expectedOutput": "Resource 1 Freed",
        "isHidden": false
      },
      {
        "id": "cpp-smart-3-tc-3",
        "input": "100",
        "expectedOutput": "Resource 100 Freed",
        "isHidden": false
      },
      {
        "id": "cpp-smart-3-tc-4",
        "input": "555",
        "expectedOutput": "Resource 555 Freed",
        "isHidden": true
      },
      {
        "id": "cpp-smart-3-tc-5",
        "input": "9999",
        "expectedOutput": "Resource 9999 Freed",
        "isHidden": true
      },
      {
        "id": "cpp-smart-3-tc-6",
        "input": "7",
        "expectedOutput": "Resource 7 Freed",
        "isHidden": true
      },
      {
        "id": "cpp-smart-3-tc-7",
        "input": "250",
        "expectedOutput": "Resource 250 Freed",
        "isHidden": true
      },
      {
        "id": "cpp-smart-3-tc-8",
        "input": "1234",
        "expectedOutput": "Resource 1234 Freed",
        "isHidden": true
      },
      {
        "id": "cpp-smart-3-tc-9",
        "input": "10",
        "expectedOutput": "Resource 10 Freed",
        "isHidden": true
      },
      {
        "id": "cpp-smart-3-tc-10",
        "input": "5",
        "expectedOutput": "Resource 5 Freed",
        "isHidden": true
      }
    ]
  },
  {
    "id": "cpp-weak-1",
    "languageId": "cpp",
    "language": "cpp",
    "level": "advanced",
    "topicId": "cpp-weak-ptr-and-cycles",
    "title": "Observer Pattern with std::weak_ptr lock()",
    "slug": "observer-pattern-with-std-weak-ptr-lock",
    "difficulty": "medium",
    "problemStatement": "`std::weak_ptr` observes a `std::shared_ptr` without incrementing its reference count. To safely access the data, call `.lock()`: if the target still exists, it returns a valid shared pointer; if destroyed, it returns nullptr. Simulate an observer: read a value, create a shared_ptr, bind a weak_ptr. If action is \"HOLD\", lock and print \"Observed: <val>\". If action is \"RESET\", reset the shared_ptr, attempt lock, and print \"Expired\".",
    "description": "`std::weak_ptr` observes a `std::shared_ptr` without incrementing its reference count. To safely access the data, call `.lock()`: if the target still exists, it returns a valid shared pointer; if destroyed, it returns nullptr. Simulate an observer: read a value, create a shared_ptr, bind a weak_ptr. If action is \"HOLD\", lock and print \"Observed: <val>\". If action is \"RESET\", reset the shared_ptr, attempt lock, and print \"Expired\".",
    "inputFormat": "An integer val and action string (\"HOLD\" or \"RESET\").",
    "outputFormat": "\"Observed: <val>\" or \"Expired\"",
    "constraints": [
      "Action in {\"HOLD\", \"RESET\"}"
    ],
    "examples": [
      {
        "input": "42 HOLD",
        "output": "Observed: 42"
      },
      {
        "input": "42 RESET",
        "output": "Expired"
      }
    ],
    "starterCode": {
      "cpp": "#include <iostream>\n\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "cpp-weak-1-tc-1",
        "input": "42 HOLD",
        "expectedOutput": "Observed: 42",
        "isHidden": false
      },
      {
        "id": "cpp-weak-1-tc-2",
        "input": "42 RESET",
        "expectedOutput": "Expired",
        "isHidden": false
      },
      {
        "id": "cpp-weak-1-tc-3",
        "input": "100 HOLD",
        "expectedOutput": "Observed: 100",
        "isHidden": false
      },
      {
        "id": "cpp-weak-1-tc-4",
        "input": "100 RESET",
        "expectedOutput": "Expired",
        "isHidden": true
      },
      {
        "id": "cpp-weak-1-tc-5",
        "input": "0 HOLD",
        "expectedOutput": "Observed: 0",
        "isHidden": true
      },
      {
        "id": "cpp-weak-1-tc-6",
        "input": "999 RESET",
        "expectedOutput": "Expired",
        "isHidden": true
      },
      {
        "id": "cpp-weak-1-tc-7",
        "input": "7 HOLD",
        "expectedOutput": "Observed: 7",
        "isHidden": true
      },
      {
        "id": "cpp-weak-1-tc-8",
        "input": "25 RESET",
        "expectedOutput": "Expired",
        "isHidden": true
      },
      {
        "id": "cpp-weak-1-tc-9",
        "input": "-50 HOLD",
        "expectedOutput": "Observed: -50",
        "isHidden": true
      },
      {
        "id": "cpp-weak-1-tc-10",
        "input": "123 RESET",
        "expectedOutput": "Expired",
        "isHidden": true
      }
    ]
  },
  {
    "id": "cpp-weak-2",
    "languageId": "cpp",
    "language": "cpp",
    "level": "advanced",
    "topicId": "cpp-weak-ptr-and-cycles",
    "title": "Breaking Cyclical References in Node Graphs",
    "slug": "breaking-cyclical-references-in-node-graphs",
    "difficulty": "medium",
    "problemStatement": "Cyclical references between two `shared_ptr` objects prevent their reference counts from ever reaching 0, causing a memory leak. Breaking the cycle requires one node to use `std::weak_ptr`. Implement two nodes: Node A has `std::shared_ptr<NodeB>`, and Node B has `std::weak_ptr<NodeA>`. Verify that both destructors run when the root pointer goes out of scope, printing \"NodeA destroyed\" and \"NodeB destroyed\".",
    "description": "Cyclical references between two `shared_ptr` objects prevent their reference counts from ever reaching 0, causing a memory leak. Breaking the cycle requires one node to use `std::weak_ptr`. Implement two nodes: Node A has `std::shared_ptr<NodeB>`, and Node B has `std::weak_ptr<NodeA>`. Verify that both destructors run when the root pointer goes out of scope, printing \"NodeA destroyed\" and \"NodeB destroyed\".",
    "inputFormat": "An integer nodeCount (1 to 5).",
    "outputFormat": "Destruction logs.",
    "constraints": [
      "1 <= nodeCount <= 5"
    ],
    "examples": [
      {
        "input": "1",
        "output": "NodeA destroyed\nNodeB destroyed"
      }
    ],
    "starterCode": {
      "cpp": "#include <iostream>\n\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "cpp-weak-2-tc-1",
        "input": "1",
        "expectedOutput": "NodeA destroyed\nNodeB destroyed",
        "isHidden": false
      },
      {
        "id": "cpp-weak-2-tc-2",
        "input": "2",
        "expectedOutput": "NodeA destroyed\nNodeB destroyed\nNodeA destroyed\nNodeB destroyed",
        "isHidden": false
      },
      {
        "id": "cpp-weak-2-tc-3",
        "input": "3",
        "expectedOutput": "NodeA destroyed\nNodeB destroyed\nNodeA destroyed\nNodeB destroyed\nNodeA destroyed\nNodeB destroyed",
        "isHidden": false
      },
      {
        "id": "cpp-weak-2-tc-4",
        "input": "4",
        "expectedOutput": "NodeA destroyed\nNodeB destroyed\nNodeA destroyed\nNodeB destroyed\nNodeA destroyed\nNodeB destroyed\nNodeA destroyed\nNodeB destroyed",
        "isHidden": true
      },
      {
        "id": "cpp-weak-2-tc-5",
        "input": "5",
        "expectedOutput": "NodeA destroyed\nNodeB destroyed\nNodeA destroyed\nNodeB destroyed\nNodeA destroyed\nNodeB destroyed\nNodeA destroyed\nNodeB destroyed\nNodeA destroyed\nNodeB destroyed",
        "isHidden": true
      },
      {
        "id": "cpp-weak-2-tc-6",
        "input": "1",
        "expectedOutput": "NodeA destroyed\nNodeB destroyed",
        "isHidden": true
      },
      {
        "id": "cpp-weak-2-tc-7",
        "input": "2",
        "expectedOutput": "NodeA destroyed\nNodeB destroyed\nNodeA destroyed\nNodeB destroyed",
        "isHidden": true
      },
      {
        "id": "cpp-weak-2-tc-8",
        "input": "3",
        "expectedOutput": "NodeA destroyed\nNodeB destroyed\nNodeA destroyed\nNodeB destroyed\nNodeA destroyed\nNodeB destroyed",
        "isHidden": true
      },
      {
        "id": "cpp-weak-2-tc-9",
        "input": "1",
        "expectedOutput": "NodeA destroyed\nNodeB destroyed",
        "isHidden": true
      },
      {
        "id": "cpp-weak-2-tc-10",
        "input": "2",
        "expectedOutput": "NodeA destroyed\nNodeB destroyed\nNodeA destroyed\nNodeB destroyed",
        "isHidden": true
      }
    ]
  },
  {
    "id": "cpp-weak-3",
    "languageId": "cpp",
    "language": "cpp",
    "level": "advanced",
    "topicId": "cpp-weak-ptr-and-cycles",
    "title": "Weak Cache Store Simulator",
    "slug": "weak-cache-store-simulator",
    "difficulty": "medium",
    "problemStatement": "A cache table using `std::weak_ptr` allows resources to be reclaimed when no active shared owner exists. Given a cache holding weak pointers, query keys: if the item is alive, print \"HIT: <val>\"; if expired, print \"MISS\".",
    "description": "A cache table using `std::weak_ptr` allows resources to be reclaimed when no active shared owner exists. Given a cache holding weak pointers, query keys: if the item is alive, print \"HIT: <val>\"; if expired, print \"MISS\".",
    "inputFormat": "First line N queries. Next N lines each contain key, status (\"ALIVE\" or \"EXPIRED\"), and val.",
    "outputFormat": "N query results.",
    "constraints": [
      "1 <= N <= 20"
    ],
    "examples": [
      {
        "input": "2\nK1 ALIVE 100\nK2 EXPIRED 200",
        "output": "HIT: 100\nMISS"
      }
    ],
    "starterCode": {
      "cpp": "#include <iostream>\n\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "cpp-weak-3-tc-1",
        "input": "2\nK1 ALIVE 100\nK2 EXPIRED 200",
        "expectedOutput": "HIT: 100\nMISS",
        "isHidden": false
      },
      {
        "id": "cpp-weak-3-tc-2",
        "input": "1\nA ALIVE 42",
        "expectedOutput": "HIT: 42",
        "isHidden": false
      },
      {
        "id": "cpp-weak-3-tc-3",
        "input": "1\nB EXPIRED 99",
        "expectedOutput": "MISS",
        "isHidden": false
      },
      {
        "id": "cpp-weak-3-tc-4",
        "input": "3\nX ALIVE 10\nY EXPIRED 20\nZ ALIVE 30",
        "expectedOutput": "HIT: 10\nMISS\nHIT: 30",
        "isHidden": true
      },
      {
        "id": "cpp-weak-3-tc-5",
        "input": "2\nC EXPIRED 0\nD EXPIRED 0",
        "expectedOutput": "MISS\nMISS",
        "isHidden": true
      },
      {
        "id": "cpp-weak-3-tc-6",
        "input": "2\nE ALIVE 500\nF ALIVE 600",
        "expectedOutput": "HIT: 500\nHIT: 600",
        "isHidden": true
      },
      {
        "id": "cpp-weak-3-tc-7",
        "input": "3\nG EXPIRED 1\nH ALIVE 2\nI EXPIRED 3",
        "expectedOutput": "MISS\nHIT: 2\nMISS",
        "isHidden": true
      },
      {
        "id": "cpp-weak-3-tc-8",
        "input": "1\nJ ALIVE 777",
        "expectedOutput": "HIT: 777",
        "isHidden": true
      },
      {
        "id": "cpp-weak-3-tc-9",
        "input": "2\nK EXPIRED 5\nL ALIVE 15",
        "expectedOutput": "MISS\nHIT: 15",
        "isHidden": true
      },
      {
        "id": "cpp-weak-3-tc-10",
        "input": "4\nM ALIVE 1\nN ALIVE 2\nO EXPIRED 3\nP ALIVE 4",
        "expectedOutput": "HIT: 1\nHIT: 2\nMISS\nHIT: 4",
        "isHidden": true
      }
    ]
  },
  {
    "id": "cpp-move-1",
    "languageId": "cpp",
    "language": "cpp",
    "level": "advanced",
    "topicId": "cpp-move-semantics-rvalues",
    "title": "Move Constructor Resource Transfer",
    "slug": "move-constructor-resource-transfer",
    "difficulty": "medium",
    "problemStatement": "In modern C++11, move constructors `Buffer(Buffer &&other) noexcept` steal the heap pointer from an rvalue without expensive deep copying. Create a `Buffer` class: when move constructed, the destination adopts the source size and buffer, while the source size is set to 0. Given buffer size N and elements, move it to a second buffer and print: \"Source size: 0 | Dest size: <N> | First: <first> | Last: <last>\".",
    "description": "In modern C++11, move constructors `Buffer(Buffer &&other) noexcept` steal the heap pointer from an rvalue without expensive deep copying. Create a `Buffer` class: when move constructed, the destination adopts the source size and buffer, while the source size is set to 0. Given buffer size N and elements, move it to a second buffer and print: \"Source size: 0 | Dest size: <N> | First: <first> | Last: <last>\".",
    "inputFormat": "First line N. Second line N integers.",
    "outputFormat": "\"Source size: 0 | Dest size: <N> | First: <first> | Last: <last>\"",
    "constraints": [
      "1 <= N <= 1000"
    ],
    "examples": [
      {
        "input": "4\n10 20 30 40",
        "output": "Source size: 0 | Dest size: 4 | First: 10 | Last: 40"
      }
    ],
    "starterCode": {
      "cpp": "#include <iostream>\n\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "cpp-move-1-tc-1",
        "input": "4\n10 20 30 40",
        "expectedOutput": "Source size: 0 | Dest size: 4 | First: 10 | Last: 40",
        "isHidden": false
      },
      {
        "id": "cpp-move-1-tc-2",
        "input": "1\n42",
        "expectedOutput": "Source size: 0 | Dest size: 1 | First: 42 | Last: 42",
        "isHidden": false
      },
      {
        "id": "cpp-move-1-tc-3",
        "input": "3\n5 15 25",
        "expectedOutput": "Source size: 0 | Dest size: 3 | First: 5 | Last: 25",
        "isHidden": false
      },
      {
        "id": "cpp-move-1-tc-4",
        "input": "5\n1 2 3 4 5",
        "expectedOutput": "Source size: 0 | Dest size: 5 | First: 1 | Last: 5",
        "isHidden": true
      },
      {
        "id": "cpp-move-1-tc-5",
        "input": "2\n100 200",
        "expectedOutput": "Source size: 0 | Dest size: 2 | First: 100 | Last: 200",
        "isHidden": true
      },
      {
        "id": "cpp-move-1-tc-6",
        "input": "6\n2 4 6 8 10 12",
        "expectedOutput": "Source size: 0 | Dest size: 6 | First: 2 | Last: 12",
        "isHidden": true
      },
      {
        "id": "cpp-move-1-tc-7",
        "input": "4\n-1 -2 -3 -4",
        "expectedOutput": "Source size: 0 | Dest size: 4 | First: -1 | Last: -4",
        "isHidden": true
      },
      {
        "id": "cpp-move-1-tc-8",
        "input": "3\n7 8 9",
        "expectedOutput": "Source size: 0 | Dest size: 3 | First: 7 | Last: 9",
        "isHidden": true
      },
      {
        "id": "cpp-move-1-tc-9",
        "input": "5\n50 40 30 20 10",
        "expectedOutput": "Source size: 0 | Dest size: 5 | First: 50 | Last: 10",
        "isHidden": true
      },
      {
        "id": "cpp-move-1-tc-10",
        "input": "2\n-99 99",
        "expectedOutput": "Source size: 0 | Dest size: 2 | First: -99 | Last: 99",
        "isHidden": true
      }
    ]
  },
  {
    "id": "cpp-move-2",
    "languageId": "cpp",
    "language": "cpp",
    "level": "advanced",
    "topicId": "cpp-move-semantics-rvalues",
    "title": "Rvalue Reference Overload Resolution",
    "slug": "rvalue-reference-overload-resolution",
    "difficulty": "medium",
    "problemStatement": "C++ distinguishes between lvalues and rvalues using overloads: `void process(const std::string &lval)` (prints \"Lvalue copied: <str>\") and `void process(std::string &&rval)` (prints \"Rvalue moved: <str>\"). Read a string. Pass it once as an lvalue, and once wrapped with `std::move()` as an rvalue. Print both outputs on separate lines.",
    "description": "C++ distinguishes between lvalues and rvalues using overloads: `void process(const std::string &lval)` (prints \"Lvalue copied: <str>\") and `void process(std::string &&rval)` (prints \"Rvalue moved: <str>\"). Read a string. Pass it once as an lvalue, and once wrapped with `std::move()` as an rvalue. Print both outputs on separate lines.",
    "inputFormat": "A single word string.",
    "outputFormat": "Two lines: \"Lvalue copied: <str>\" and \"Rvalue moved: <str>\"",
    "constraints": [
      "Length <= 100"
    ],
    "examples": [
      {
        "input": "Data",
        "output": "Lvalue copied: Data\nRvalue moved: Data"
      }
    ],
    "starterCode": {
      "cpp": "#include <iostream>\n\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "cpp-move-2-tc-1",
        "input": "Data",
        "expectedOutput": "Lvalue copied: Data\nRvalue moved: Data",
        "isHidden": false
      },
      {
        "id": "cpp-move-2-tc-2",
        "input": "Buffer",
        "expectedOutput": "Lvalue copied: Buffer\nRvalue moved: Buffer",
        "isHidden": false
      },
      {
        "id": "cpp-move-2-tc-3",
        "input": "Packet",
        "expectedOutput": "Lvalue copied: Packet\nRvalue moved: Packet",
        "isHidden": false
      },
      {
        "id": "cpp-move-2-tc-4",
        "input": "Node",
        "expectedOutput": "Lvalue copied: Node\nRvalue moved: Node",
        "isHidden": true
      },
      {
        "id": "cpp-move-2-tc-5",
        "input": "Frame",
        "expectedOutput": "Lvalue copied: Frame\nRvalue moved: Frame",
        "isHidden": true
      },
      {
        "id": "cpp-move-2-tc-6",
        "input": "Message",
        "expectedOutput": "Lvalue copied: Message\nRvalue moved: Message",
        "isHidden": true
      },
      {
        "id": "cpp-move-2-tc-7",
        "input": "Vector",
        "expectedOutput": "Lvalue copied: Vector\nRvalue moved: Vector",
        "isHidden": true
      },
      {
        "id": "cpp-move-2-tc-8",
        "input": "String",
        "expectedOutput": "Lvalue copied: String\nRvalue moved: String",
        "isHidden": true
      },
      {
        "id": "cpp-move-2-tc-9",
        "input": "Chunk",
        "expectedOutput": "Lvalue copied: Chunk\nRvalue moved: Chunk",
        "isHidden": true
      },
      {
        "id": "cpp-move-2-tc-10",
        "input": "Payload",
        "expectedOutput": "Lvalue copied: Payload\nRvalue moved: Payload",
        "isHidden": true
      }
    ]
  },
  {
    "id": "cpp-move-3",
    "languageId": "cpp",
    "language": "cpp",
    "level": "advanced",
    "topicId": "cpp-move-semantics-rvalues",
    "title": "Move Assignment Operator Self-Assignment Safety",
    "slug": "move-assignment-operator-self-assignment-safety",
    "difficulty": "medium",
    "problemStatement": "Implement the move assignment operator `Buffer& operator=(Buffer &&other) noexcept` handling self-assignment check `if (this != &other)`. Move-assign a temporary buffer to an existing buffer, and print the resulting elements.",
    "description": "Implement the move assignment operator `Buffer& operator=(Buffer &&other) noexcept` handling self-assignment check `if (this != &other)`. Move-assign a temporary buffer to an existing buffer, and print the resulting elements.",
    "inputFormat": "First line N. Second line N integers.",
    "outputFormat": "N integers separated by space.",
    "constraints": [
      "1 <= N <= 1000"
    ],
    "examples": [
      {
        "input": "3\n1 2 3",
        "output": "1 2 3"
      }
    ],
    "starterCode": {
      "cpp": "#include <iostream>\n\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "cpp-move-3-tc-1",
        "input": "3\n1 2 3",
        "expectedOutput": "1 2 3",
        "isHidden": false
      },
      {
        "id": "cpp-move-3-tc-2",
        "input": "1\n42",
        "expectedOutput": "42",
        "isHidden": false
      },
      {
        "id": "cpp-move-3-tc-3",
        "input": "4\n10 20 30 40",
        "expectedOutput": "10 20 30 40",
        "isHidden": false
      },
      {
        "id": "cpp-move-3-tc-4",
        "input": "2\n-5 5",
        "expectedOutput": "-5 5",
        "isHidden": true
      },
      {
        "id": "cpp-move-3-tc-5",
        "input": "5\n5 4 3 2 1",
        "expectedOutput": "5 4 3 2 1",
        "isHidden": true
      },
      {
        "id": "cpp-move-3-tc-6",
        "input": "6\n2 4 6 8 10 12",
        "expectedOutput": "2 4 6 8 10 12",
        "isHidden": true
      },
      {
        "id": "cpp-move-3-tc-7",
        "input": "4\n0 0 0 0",
        "expectedOutput": "0 0 0 0",
        "isHidden": true
      },
      {
        "id": "cpp-move-3-tc-8",
        "input": "3\n100 200 300",
        "expectedOutput": "100 200 300",
        "isHidden": true
      },
      {
        "id": "cpp-move-3-tc-9",
        "input": "5\n15 25 35 45 55",
        "expectedOutput": "15 25 35 45 55",
        "isHidden": true
      },
      {
        "id": "cpp-move-3-tc-10",
        "input": "2\n99 1",
        "expectedOutput": "99 1",
        "isHidden": true
      }
    ]
  },
  {
    "id": "cpp-ce-1",
    "languageId": "cpp",
    "language": "cpp",
    "level": "advanced",
    "topicId": "cpp-constexpr-and-concurrency",
    "title": "Compile-Time Factorial and Fibonacci with constexpr",
    "slug": "compile-time-factorial-and-fibonacci-with-constexpr",
    "difficulty": "medium",
    "problemStatement": "In modern C++, `constexpr` functions can be evaluated at compile time. Write `constexpr long long factorial(int n)` and `constexpr long long fibonacci(int n)` (0-indexed: fib(0)=0, fib(1)=1). Given an integer N (0 <= N <= 20), compute and print \"Factorial: <fact> | Fibonacci: <fib>\".",
    "description": "In modern C++, `constexpr` functions can be evaluated at compile time. Write `constexpr long long factorial(int n)` and `constexpr long long fibonacci(int n)` (0-indexed: fib(0)=0, fib(1)=1). Given an integer N (0 <= N <= 20), compute and print \"Factorial: <fact> | Fibonacci: <fib>\".",
    "inputFormat": "An integer N.",
    "outputFormat": "\"Factorial: <fact> | Fibonacci: <fib>\"",
    "constraints": [
      "0 <= N <= 20"
    ],
    "examples": [
      {
        "input": "5",
        "output": "Factorial: 120 | Fibonacci: 5"
      }
    ],
    "starterCode": {
      "cpp": "#include <iostream>\n\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "cpp-ce-1-tc-1",
        "input": "5",
        "expectedOutput": "Factorial: 120 | Fibonacci: 5",
        "isHidden": false
      },
      {
        "id": "cpp-ce-1-tc-2",
        "input": "0",
        "expectedOutput": "Factorial: 1 | Fibonacci: 0",
        "isHidden": false
      },
      {
        "id": "cpp-ce-1-tc-3",
        "input": "1",
        "expectedOutput": "Factorial: 1 | Fibonacci: 1",
        "isHidden": false
      },
      {
        "id": "cpp-ce-1-tc-4",
        "input": "2",
        "expectedOutput": "Factorial: 2 | Fibonacci: 1",
        "isHidden": true
      },
      {
        "id": "cpp-ce-1-tc-5",
        "input": "3",
        "expectedOutput": "Factorial: 6 | Fibonacci: 2",
        "isHidden": true
      },
      {
        "id": "cpp-ce-1-tc-6",
        "input": "4",
        "expectedOutput": "Factorial: 24 | Fibonacci: 3",
        "isHidden": true
      },
      {
        "id": "cpp-ce-1-tc-7",
        "input": "6",
        "expectedOutput": "Factorial: 720 | Fibonacci: 8",
        "isHidden": true
      },
      {
        "id": "cpp-ce-1-tc-8",
        "input": "7",
        "expectedOutput": "Factorial: 5040 | Fibonacci: 13",
        "isHidden": true
      },
      {
        "id": "cpp-ce-1-tc-9",
        "input": "8",
        "expectedOutput": "Factorial: 40320 | Fibonacci: 21",
        "isHidden": true
      },
      {
        "id": "cpp-ce-1-tc-10",
        "input": "10",
        "expectedOutput": "Factorial: 3628800 | Fibonacci: 55",
        "isHidden": true
      }
    ]
  },
  {
    "id": "cpp-ce-2",
    "languageId": "cpp",
    "language": "cpp",
    "level": "advanced",
    "topicId": "cpp-constexpr-and-concurrency",
    "title": "Lock-Free Atomic Counter with std::atomic",
    "slug": "lock-free-atomic-counter-with-std-atomic",
    "difficulty": "medium",
    "problemStatement": "`std::atomic<long long>` enables thread-safe lock-free arithmetic via atomic operations like `fetch_add` and `fetch_sub`. Simulate atomic increments and decrements: read initial value, followed by N operations (\"+ <amt>\" or \"- <amt>\"). Apply each atomically and print the final value.",
    "description": "`std::atomic<long long>` enables thread-safe lock-free arithmetic via atomic operations like `fetch_add` and `fetch_sub`. Simulate atomic increments and decrements: read initial value, followed by N operations (\"+ <amt>\" or \"- <amt>\"). Apply each atomically and print the final value.",
    "inputFormat": "First line initial val. Second line N. Next N lines contain op (\"+\" or \"-\") and amt.",
    "outputFormat": "Final atomic value as integer.",
    "constraints": [
      "1 <= N <= 100"
    ],
    "examples": [
      {
        "input": "100\n3\n+ 50\n- 30\n+ 20",
        "output": "140"
      }
    ],
    "starterCode": {
      "cpp": "#include <iostream>\n\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "cpp-ce-2-tc-1",
        "input": "100\n3\n+ 50\n- 30\n+ 20",
        "expectedOutput": "140",
        "isHidden": false
      },
      {
        "id": "cpp-ce-2-tc-2",
        "input": "0\n2\n+ 10\n+ 20",
        "expectedOutput": "30",
        "isHidden": false
      },
      {
        "id": "cpp-ce-2-tc-3",
        "input": "50\n1\n- 50",
        "expectedOutput": "0",
        "isHidden": false
      },
      {
        "id": "cpp-ce-2-tc-4",
        "input": "1000\n4\n- 250\n- 250\n- 250\n- 250",
        "expectedOutput": "0",
        "isHidden": true
      },
      {
        "id": "cpp-ce-2-tc-5",
        "input": "42\n0",
        "expectedOutput": "42",
        "isHidden": true
      },
      {
        "id": "cpp-ce-2-tc-6",
        "input": "10\n3\n+ 5\n- 5\n+ 15",
        "expectedOutput": "25",
        "isHidden": true
      },
      {
        "id": "cpp-ce-2-tc-7",
        "input": "200\n2\n- 100\n+ 50",
        "expectedOutput": "150",
        "isHidden": true
      },
      {
        "id": "cpp-ce-2-tc-8",
        "input": "5\n4\n+ 1\n+ 2\n+ 3\n+ 4",
        "expectedOutput": "15",
        "isHidden": true
      },
      {
        "id": "cpp-ce-2-tc-9",
        "input": "100\n2\n+ 500\n- 200",
        "expectedOutput": "400",
        "isHidden": true
      },
      {
        "id": "cpp-ce-2-tc-10",
        "input": "-50\n2\n+ 50\n+ 50",
        "expectedOutput": "50",
        "isHidden": true
      }
    ]
  },
  {
    "id": "cpp-ce-3",
    "languageId": "cpp",
    "language": "cpp",
    "level": "advanced",
    "topicId": "cpp-constexpr-and-concurrency",
    "title": "Async Future & Promise Task Result Aggregator",
    "slug": "async-future-promise-task-result-aggregator",
    "difficulty": "medium",
    "problemStatement": "`std::future` and `std::promise` communicate asynchronous task results across execution boundaries. Simulate N worker tasks each computing the square of an integer. Fulfill each promise and retrieve the values via futures. Sum all results and print: \"Tasks Completed: <N> | Aggregate: <sum>\".",
    "description": "`std::future` and `std::promise` communicate asynchronous task results across execution boundaries. Simulate N worker tasks each computing the square of an integer. Fulfill each promise and retrieve the values via futures. Sum all results and print: \"Tasks Completed: <N> | Aggregate: <sum>\".",
    "inputFormat": "First line N. Second line N integers.",
    "outputFormat": "\"Tasks Completed: <N> | Aggregate: <sum>\"",
    "constraints": [
      "1 <= N <= 100"
    ],
    "examples": [
      {
        "input": "3\n2 3 4",
        "output": "Tasks Completed: 3 | Aggregate: 29"
      }
    ],
    "starterCode": {
      "cpp": "#include <iostream>\n\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "cpp-ce-3-tc-1",
        "input": "3\n2 3 4",
        "expectedOutput": "Tasks Completed: 3 | Aggregate: 29",
        "isHidden": false
      },
      {
        "id": "cpp-ce-3-tc-2",
        "input": "1\n10",
        "expectedOutput": "Tasks Completed: 1 | Aggregate: 100",
        "isHidden": false
      },
      {
        "id": "cpp-ce-3-tc-3",
        "input": "4\n1 2 3 4",
        "expectedOutput": "Tasks Completed: 4 | Aggregate: 30",
        "isHidden": false
      },
      {
        "id": "cpp-ce-3-tc-4",
        "input": "2\n5 5",
        "expectedOutput": "Tasks Completed: 2 | Aggregate: 50",
        "isHidden": true
      },
      {
        "id": "cpp-ce-3-tc-5",
        "input": "5\n0 1 2 3 4",
        "expectedOutput": "Tasks Completed: 5 | Aggregate: 30",
        "isHidden": true
      },
      {
        "id": "cpp-ce-3-tc-6",
        "input": "3\n-1 -2 -3",
        "expectedOutput": "Tasks Completed: 3 | Aggregate: 14",
        "isHidden": true
      },
      {
        "id": "cpp-ce-3-tc-7",
        "input": "2\n6 8",
        "expectedOutput": "Tasks Completed: 2 | Aggregate: 100",
        "isHidden": true
      },
      {
        "id": "cpp-ce-3-tc-8",
        "input": "4\n2 2 2 2",
        "expectedOutput": "Tasks Completed: 4 | Aggregate: 16",
        "isHidden": true
      },
      {
        "id": "cpp-ce-3-tc-9",
        "input": "1\n0",
        "expectedOutput": "Tasks Completed: 1 | Aggregate: 0",
        "isHidden": true
      },
      {
        "id": "cpp-ce-3-tc-10",
        "input": "5\n1 1 1 1 1",
        "expectedOutput": "Tasks Completed: 5 | Aggregate: 5",
        "isHidden": true
      }
    ]
  }
];

export default cppProblems;
