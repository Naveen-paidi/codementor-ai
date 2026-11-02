/**
 * Canonical C Coding Practice Problems Bank
 * Auto-generated with 10 test cases per problem (3 public, 7 hidden).
 */

export const cProblems = [
  {
    "id": "c-intro-1",
    "languageId": "c",
    "language": "c",
    "level": "beginner",
    "topicId": "c-what-is-c",
    "title": "C Exit Status and Banner Printer",
    "slug": "c-exit-status-and-banner-printer",
    "difficulty": "easy",
    "problemStatement": "In C, the main function returns an exit status code to the operating system (typically 0 for success). Write a program that reads a program name and version integer from standard input, and prints a canonical banner followed by \"Exit Code: 0\".",
    "description": "In C, the main function returns an exit status code to the operating system (typically 0 for success). Write a program that reads a program name and version integer from standard input, and prints a canonical banner followed by \"Exit Code: 0\".",
    "inputFormat": "A string programName and an integer version separated by space.",
    "outputFormat": "Print \"[programName v<version>] initialized successfully.\" on the first line, and \"Exit Code: 0\" on the second line.",
    "constraints": [
      "programName length <= 50",
      "1 <= version <= 100"
    ],
    "examples": [
      {
        "input": "Kernel 6",
        "output": "[Kernel v6] initialized successfully.\nExit Code: 0"
      }
    ],
    "starterCode": {
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "c-intro-1-tc-1",
        "input": "Kernel 6",
        "expectedOutput": "[Kernel v6] initialized successfully.\nExit Code: 0",
        "isHidden": false
      },
      {
        "id": "c-intro-1-tc-2",
        "input": "Daemon 2",
        "expectedOutput": "[Daemon v2] initialized successfully.\nExit Code: 0",
        "isHidden": false
      },
      {
        "id": "c-intro-1-tc-3",
        "input": "Compiler 1",
        "expectedOutput": "[Compiler v1] initialized successfully.\nExit Code: 0",
        "isHidden": false
      },
      {
        "id": "c-intro-1-tc-4",
        "input": "Driver 99",
        "expectedOutput": "[Driver v99] initialized successfully.\nExit Code: 0",
        "isHidden": true
      },
      {
        "id": "c-intro-1-tc-5",
        "input": "Shell 4",
        "expectedOutput": "[Shell v4] initialized successfully.\nExit Code: 0",
        "isHidden": true
      },
      {
        "id": "c-intro-1-tc-6",
        "input": "Watcher 12",
        "expectedOutput": "[Watcher v12] initialized successfully.\nExit Code: 0",
        "isHidden": true
      },
      {
        "id": "c-intro-1-tc-7",
        "input": "Profiler 3",
        "expectedOutput": "[Profiler v3] initialized successfully.\nExit Code: 0",
        "isHidden": true
      },
      {
        "id": "c-intro-1-tc-8",
        "input": "Hypervisor 50",
        "expectedOutput": "[Hypervisor v50] initialized successfully.\nExit Code: 0",
        "isHidden": true
      },
      {
        "id": "c-intro-1-tc-9",
        "input": "Logger 10",
        "expectedOutput": "[Logger v10] initialized successfully.\nExit Code: 0",
        "isHidden": true
      },
      {
        "id": "c-intro-1-tc-10",
        "input": "Agent 1",
        "expectedOutput": "[Agent v1] initialized successfully.\nExit Code: 0",
        "isHidden": true
      }
    ]
  },
  {
    "id": "c-intro-2",
    "languageId": "c",
    "language": "c",
    "level": "beginner",
    "topicId": "c-what-is-c",
    "title": "ASCII Character Inspector",
    "slug": "ascii-character-inspector",
    "difficulty": "easy",
    "problemStatement": "In C, characters are stored as integer values corresponding to their ASCII encodings. Read a single non-whitespace character, and print its decimal ASCII code and hexadecimal representation in the format: \"DEC: <dec> | HEX: 0x<HEX>\". (Hex letters should be uppercase).",
    "description": "In C, characters are stored as integer values corresponding to their ASCII encodings. Read a single non-whitespace character, and print its decimal ASCII code and hexadecimal representation in the format: \"DEC: <dec> | HEX: 0x<HEX>\". (Hex letters should be uppercase).",
    "inputFormat": "A single non-whitespace character.",
    "outputFormat": "Format: \"DEC: <dec> | HEX: 0x<HEX>\"",
    "constraints": [
      "Character is any printable ASCII character (ASCII 33-126)"
    ],
    "examples": [
      {
        "input": "A",
        "output": "DEC: 65 | HEX: 0x41"
      }
    ],
    "starterCode": {
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "c-intro-2-tc-1",
        "input": "A",
        "expectedOutput": "DEC: 65 | HEX: 0x41",
        "isHidden": false
      },
      {
        "id": "c-intro-2-tc-2",
        "input": "z",
        "expectedOutput": "DEC: 122 | HEX: 0x7A",
        "isHidden": false
      },
      {
        "id": "c-intro-2-tc-3",
        "input": "0",
        "expectedOutput": "DEC: 48 | HEX: 0x30",
        "isHidden": false
      },
      {
        "id": "c-intro-2-tc-4",
        "input": "!",
        "expectedOutput": "DEC: 33 | HEX: 0x21",
        "isHidden": true
      },
      {
        "id": "c-intro-2-tc-5",
        "input": "~",
        "expectedOutput": "DEC: 126 | HEX: 0x7E",
        "isHidden": true
      },
      {
        "id": "c-intro-2-tc-6",
        "input": "M",
        "expectedOutput": "DEC: 77 | HEX: 0x4D",
        "isHidden": true
      },
      {
        "id": "c-intro-2-tc-7",
        "input": "#",
        "expectedOutput": "DEC: 35 | HEX: 0x23",
        "isHidden": true
      },
      {
        "id": "c-intro-2-tc-8",
        "input": "9",
        "expectedOutput": "DEC: 57 | HEX: 0x39",
        "isHidden": true
      },
      {
        "id": "c-intro-2-tc-9",
        "input": "q",
        "expectedOutput": "DEC: 113 | HEX: 0x71",
        "isHidden": true
      },
      {
        "id": "c-intro-2-tc-10",
        "input": "$",
        "expectedOutput": "DEC: 36 | HEX: 0x24",
        "isHidden": true
      }
    ]
  },
  {
    "id": "c-var-1",
    "languageId": "c",
    "language": "c",
    "level": "beginner",
    "topicId": "c-variables-types-io",
    "title": "Formatted Receipt Line with printf Specifiers",
    "slug": "formatted-receipt-line-with-printf-specifiers",
    "difficulty": "easy",
    "problemStatement": "Given an item name (single word), quantity (integer), and unit price (float), compute the total cost (quantity * unit price). Print the receipt line formatted as: \"<item>: <qty> x $<unit_price rounded to 2 decimals> = $<total rounded to 2 decimals>\".",
    "description": "Given an item name (single word), quantity (integer), and unit price (float), compute the total cost (quantity * unit price). Print the receipt line formatted as: \"<item>: <qty> x $<unit_price rounded to 2 decimals> = $<total rounded to 2 decimals>\".",
    "inputFormat": "Item name (string), quantity (int), unit price (float) on a single line.",
    "outputFormat": "Formatted receipt line string.",
    "constraints": [
      "quantity >= 1",
      "unit price >= 0.01"
    ],
    "examples": [
      {
        "input": "Book 3 12.50",
        "output": "Book: 3 x $12.50 = $37.50"
      }
    ],
    "starterCode": {
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "c-var-1-tc-1",
        "input": "Book 3 12.50",
        "expectedOutput": "Book: 3 x $12.50 = $37.50",
        "isHidden": false
      },
      {
        "id": "c-var-1-tc-2",
        "input": "Pen 10 1.25",
        "expectedOutput": "Pen: 10 x $1.25 = $12.50",
        "isHidden": false
      },
      {
        "id": "c-var-1-tc-3",
        "input": "Notebook 2 4.99",
        "expectedOutput": "Notebook: 2 x $4.99 = $9.98",
        "isHidden": false
      },
      {
        "id": "c-var-1-tc-4",
        "input": "Eraser 5 0.50",
        "expectedOutput": "Eraser: 5 x $0.50 = $2.50",
        "isHidden": true
      },
      {
        "id": "c-var-1-tc-5",
        "input": "Desk 1 150.00",
        "expectedOutput": "Desk: 1 x $150.00 = $150.00",
        "isHidden": true
      },
      {
        "id": "c-var-1-tc-6",
        "input": "Marker 4 2.10",
        "expectedOutput": "Marker: 4 x $2.10 = $8.40",
        "isHidden": true
      },
      {
        "id": "c-var-1-tc-7",
        "input": "Laptop 1 899.99",
        "expectedOutput": "Laptop: 1 x $899.99 = $899.99",
        "isHidden": true
      },
      {
        "id": "c-var-1-tc-8",
        "input": "Ruler 8 1.15",
        "expectedOutput": "Ruler: 8 x $1.15 = $9.20",
        "isHidden": true
      },
      {
        "id": "c-var-1-tc-9",
        "input": "Backpack 2 34.50",
        "expectedOutput": "Backpack: 2 x $34.50 = $69.00",
        "isHidden": true
      },
      {
        "id": "c-var-1-tc-10",
        "input": "Stapler 1 6.75",
        "expectedOutput": "Stapler: 1 x $6.75 = $6.75",
        "isHidden": true
      }
    ]
  },
  {
    "id": "c-var-2",
    "languageId": "c",
    "language": "c",
    "level": "beginner",
    "topicId": "c-variables-types-io",
    "title": "Temperature Conversion with Double Precision",
    "slug": "temperature-conversion-with-double-precision",
    "difficulty": "easy",
    "problemStatement": "Read a temperature in Celsius as a double-precision floating-point number. Convert it to Fahrenheit using F = (C * 9.0 / 5.0) + 32.0 and to Kelvin using K = C + 273.15. Print the results on separate lines rounded to exactly 2 decimal places: \"Fahrenheit: <F>\" and \"Kelvin: <K>\".",
    "description": "Read a temperature in Celsius as a double-precision floating-point number. Convert it to Fahrenheit using F = (C * 9.0 / 5.0) + 32.0 and to Kelvin using K = C + 273.15. Print the results on separate lines rounded to exactly 2 decimal places: \"Fahrenheit: <F>\" and \"Kelvin: <K>\".",
    "inputFormat": "A single floating-point number C.",
    "outputFormat": "Two lines: \"Fahrenheit: <F>\" and \"Kelvin: <K>\" each with 2 decimal places.",
    "constraints": [
      "-273.15 <= C <= 1000.0"
    ],
    "examples": [
      {
        "input": "25.0",
        "output": "Fahrenheit: 77.00\nKelvin: 298.15"
      }
    ],
    "starterCode": {
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "c-var-2-tc-1",
        "input": "25.0",
        "expectedOutput": "Fahrenheit: 77.00\nKelvin: 298.15",
        "isHidden": false
      },
      {
        "id": "c-var-2-tc-2",
        "input": "0.0",
        "expectedOutput": "Fahrenheit: 32.00\nKelvin: 273.15",
        "isHidden": false
      },
      {
        "id": "c-var-2-tc-3",
        "input": "100.0",
        "expectedOutput": "Fahrenheit: 212.00\nKelvin: 373.15",
        "isHidden": false
      },
      {
        "id": "c-var-2-tc-4",
        "input": "-40.0",
        "expectedOutput": "Fahrenheit: -40.00\nKelvin: 233.15",
        "isHidden": true
      },
      {
        "id": "c-var-2-tc-5",
        "input": "37.5",
        "expectedOutput": "Fahrenheit: 99.50\nKelvin: 310.65",
        "isHidden": true
      },
      {
        "id": "c-var-2-tc-6",
        "input": "-273.15",
        "expectedOutput": "Fahrenheit: -459.67\nKelvin: 0.00",
        "isHidden": true
      },
      {
        "id": "c-var-2-tc-7",
        "input": "15.5",
        "expectedOutput": "Fahrenheit: 59.90\nKelvin: 288.65",
        "isHidden": true
      },
      {
        "id": "c-var-2-tc-8",
        "input": "200.0",
        "expectedOutput": "Fahrenheit: 392.00\nKelvin: 473.15",
        "isHidden": true
      },
      {
        "id": "c-var-2-tc-9",
        "input": "-10.0",
        "expectedOutput": "Fahrenheit: 14.00\nKelvin: 263.15",
        "isHidden": true
      },
      {
        "id": "c-var-2-tc-10",
        "input": "50.25",
        "expectedOutput": "Fahrenheit: 122.45\nKelvin: 323.40",
        "isHidden": true
      }
    ]
  },
  {
    "id": "c-var-3",
    "languageId": "c",
    "language": "c",
    "level": "beginner",
    "topicId": "c-variables-types-io",
    "title": "Swap Two Integers Without Temporary Variable",
    "slug": "swap-two-integers-without-temporary-variable",
    "difficulty": "easy",
    "problemStatement": "Read two integers a and b. Swap their values in C using arithmetic operations without declaring any third/temporary variable. Print the swapped values separated by a space.",
    "description": "Read two integers a and b. Swap their values in C using arithmetic operations without declaring any third/temporary variable. Print the swapped values separated by a space.",
    "inputFormat": "Two integers a and b separated by a space.",
    "outputFormat": "Swapped integers: \"b a\"",
    "constraints": [
      "-10000 <= a, b <= 10000"
    ],
    "examples": [
      {
        "input": "10 20",
        "output": "20 10"
      }
    ],
    "starterCode": {
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "c-var-3-tc-1",
        "input": "10 20",
        "expectedOutput": "20 10",
        "isHidden": false
      },
      {
        "id": "c-var-3-tc-2",
        "input": "-5 15",
        "expectedOutput": "15 -5",
        "isHidden": false
      },
      {
        "id": "c-var-3-tc-3",
        "input": "0 100",
        "expectedOutput": "100 0",
        "isHidden": false
      },
      {
        "id": "c-var-3-tc-4",
        "input": "42 42",
        "expectedOutput": "42 42",
        "isHidden": true
      },
      {
        "id": "c-var-3-tc-5",
        "input": "-30 -80",
        "expectedOutput": "-80 -30",
        "isHidden": true
      },
      {
        "id": "c-var-3-tc-6",
        "input": "999 1",
        "expectedOutput": "1 999",
        "isHidden": true
      },
      {
        "id": "c-var-3-tc-7",
        "input": "7 -7",
        "expectedOutput": "-7 7",
        "isHidden": true
      },
      {
        "id": "c-var-3-tc-8",
        "input": "500 250",
        "expectedOutput": "250 500",
        "isHidden": true
      },
      {
        "id": "c-var-3-tc-9",
        "input": "1234 5678",
        "expectedOutput": "5678 1234",
        "isHidden": true
      },
      {
        "id": "c-var-3-tc-10",
        "input": "-1 1",
        "expectedOutput": "1 -1",
        "isHidden": true
      }
    ]
  },
  {
    "id": "c-cond-1",
    "languageId": "c",
    "language": "c",
    "level": "beginner",
    "topicId": "c-conditionals-and-switch",
    "title": "Cartesian Coordinate Quadrant Classifier",
    "slug": "cartesian-coordinate-quadrant-classifier",
    "difficulty": "easy",
    "problemStatement": "Given non-zero integers x and y, determine which Cartesian quadrant the point (x, y) lies in. Output \"Quadrant 1\" (x>0, y>0), \"Quadrant 2\" (x<0, y>0), \"Quadrant 3\" (x<0, y<0), or \"Quadrant 4\" (x>0, y<0). If either coordinate is 0, print \"Axis or Origin\".",
    "description": "Given non-zero integers x and y, determine which Cartesian quadrant the point (x, y) lies in. Output \"Quadrant 1\" (x>0, y>0), \"Quadrant 2\" (x<0, y>0), \"Quadrant 3\" (x<0, y<0), or \"Quadrant 4\" (x>0, y<0). If either coordinate is 0, print \"Axis or Origin\".",
    "inputFormat": "Two space-separated integers x and y.",
    "outputFormat": "Quadrant name or \"Axis or Origin\".",
    "constraints": [
      "-1000 <= x, y <= 1000"
    ],
    "examples": [
      {
        "input": "5 7",
        "output": "Quadrant 1"
      },
      {
        "input": "-3 8",
        "output": "Quadrant 2"
      }
    ],
    "starterCode": {
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "c-cond-1-tc-1",
        "input": "5 7",
        "expectedOutput": "Quadrant 1",
        "isHidden": false
      },
      {
        "id": "c-cond-1-tc-2",
        "input": "-3 8",
        "expectedOutput": "Quadrant 2",
        "isHidden": false
      },
      {
        "id": "c-cond-1-tc-3",
        "input": "-4 -9",
        "expectedOutput": "Quadrant 3",
        "isHidden": false
      },
      {
        "id": "c-cond-1-tc-4",
        "input": "6 -2",
        "expectedOutput": "Quadrant 4",
        "isHidden": true
      },
      {
        "id": "c-cond-1-tc-5",
        "input": "0 5",
        "expectedOutput": "Axis or Origin",
        "isHidden": true
      },
      {
        "id": "c-cond-1-tc-6",
        "input": "7 0",
        "expectedOutput": "Axis or Origin",
        "isHidden": true
      },
      {
        "id": "c-cond-1-tc-7",
        "input": "0 0",
        "expectedOutput": "Axis or Origin",
        "isHidden": true
      },
      {
        "id": "c-cond-1-tc-8",
        "input": "-10 20",
        "expectedOutput": "Quadrant 2",
        "isHidden": true
      },
      {
        "id": "c-cond-1-tc-9",
        "input": "15 -35",
        "expectedOutput": "Quadrant 4",
        "isHidden": true
      },
      {
        "id": "c-cond-1-tc-10",
        "input": "-1 -1",
        "expectedOutput": "Quadrant 3",
        "isHidden": true
      }
    ]
  },
  {
    "id": "c-cond-2",
    "languageId": "c",
    "language": "c",
    "level": "beginner",
    "topicId": "c-conditionals-and-switch",
    "title": "Calculator with Switch Statement",
    "slug": "calculator-with-switch-statement",
    "difficulty": "easy",
    "problemStatement": "Read an expression formatted as \"<operand1> <operator> <operand2>\", where operands are integers and operator is one of +, -, *, /, %. Use a C switch statement on the operator character. For / and %, if operand2 is 0, print \"Error: Division by zero\". Otherwise, print the integer result.",
    "description": "Read an expression formatted as \"<operand1> <operator> <operand2>\", where operands are integers and operator is one of +, -, *, /, %. Use a C switch statement on the operator character. For / and %, if operand2 is 0, print \"Error: Division by zero\". Otherwise, print the integer result.",
    "inputFormat": "Two integers and a character operator separated by spaces: \"a op b\".",
    "outputFormat": "Integer result or error message.",
    "constraints": [
      "-10000 <= a, b <= 10000"
    ],
    "examples": [
      {
        "input": "15 + 27",
        "output": "42"
      },
      {
        "input": "20 / 0",
        "output": "Error: Division by zero"
      }
    ],
    "starterCode": {
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "c-cond-2-tc-1",
        "input": "15 + 27",
        "expectedOutput": "42",
        "isHidden": false
      },
      {
        "id": "c-cond-2-tc-2",
        "input": "20 / 0",
        "expectedOutput": "Error: Division by zero",
        "isHidden": false
      },
      {
        "id": "c-cond-2-tc-3",
        "input": "100 - 45",
        "expectedOutput": "55",
        "isHidden": false
      },
      {
        "id": "c-cond-2-tc-4",
        "input": "12 * 8",
        "expectedOutput": "96",
        "isHidden": true
      },
      {
        "id": "c-cond-2-tc-5",
        "input": "50 / 6",
        "expectedOutput": "8",
        "isHidden": true
      },
      {
        "id": "c-cond-2-tc-6",
        "input": "29 % 7",
        "expectedOutput": "1",
        "isHidden": true
      },
      {
        "id": "c-cond-2-tc-7",
        "input": "14 % 0",
        "expectedOutput": "Error: Division by zero",
        "isHidden": true
      },
      {
        "id": "c-cond-2-tc-8",
        "input": "-10 + 25",
        "expectedOutput": "15",
        "isHidden": true
      },
      {
        "id": "c-cond-2-tc-9",
        "input": "-6 * -7",
        "expectedOutput": "42",
        "isHidden": true
      },
      {
        "id": "c-cond-2-tc-10",
        "input": "100 / 25",
        "expectedOutput": "4",
        "isHidden": true
      }
    ]
  },
  {
    "id": "c-cond-3",
    "languageId": "c",
    "language": "c",
    "level": "beginner",
    "topicId": "c-conditionals-and-switch",
    "title": "Days in Month and Leap Year Detector",
    "slug": "days-in-month-and-leap-year-detector",
    "difficulty": "medium",
    "problemStatement": "Given a year and a month (1 for January to 12 for December), print the number of days in that month. Remember that in C, leap years occur when: (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0). Use a switch statement for month days.",
    "description": "Given a year and a month (1 for January to 12 for December), print the number of days in that month. Remember that in C, leap years occur when: (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0). Use a switch statement for month days.",
    "inputFormat": "Two integers: year and month.",
    "outputFormat": "An integer representing the number of days.",
    "constraints": [
      "1 <= year <= 9999",
      "1 <= month <= 12"
    ],
    "examples": [
      {
        "input": "2024 2",
        "output": "29"
      },
      {
        "input": "2023 2",
        "output": "28"
      }
    ],
    "starterCode": {
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "c-cond-3-tc-1",
        "input": "2024 2",
        "expectedOutput": "29",
        "isHidden": false
      },
      {
        "id": "c-cond-3-tc-2",
        "input": "2023 2",
        "expectedOutput": "28",
        "isHidden": false
      },
      {
        "id": "c-cond-3-tc-3",
        "input": "2000 2",
        "expectedOutput": "29",
        "isHidden": false
      },
      {
        "id": "c-cond-3-tc-4",
        "input": "1900 2",
        "expectedOutput": "28",
        "isHidden": true
      },
      {
        "id": "c-cond-3-tc-5",
        "input": "2023 1",
        "expectedOutput": "31",
        "isHidden": true
      },
      {
        "id": "c-cond-3-tc-6",
        "input": "2023 4",
        "expectedOutput": "30",
        "isHidden": true
      },
      {
        "id": "c-cond-3-tc-7",
        "input": "2023 7",
        "expectedOutput": "31",
        "isHidden": true
      },
      {
        "id": "c-cond-3-tc-8",
        "input": "2023 9",
        "expectedOutput": "30",
        "isHidden": true
      },
      {
        "id": "c-cond-3-tc-9",
        "input": "2023 12",
        "expectedOutput": "31",
        "isHidden": true
      },
      {
        "id": "c-cond-3-tc-10",
        "input": "2024 8",
        "expectedOutput": "31",
        "isHidden": true
      }
    ]
  },
  {
    "id": "c-loop-1",
    "languageId": "c",
    "language": "c",
    "level": "beginner",
    "topicId": "c-loops-iteration",
    "title": "Collatz Conjecture Step Count",
    "slug": "collatz-conjecture-step-count",
    "difficulty": "easy",
    "problemStatement": "The Collatz sequence starts with a positive integer n. If n is even, divide it by 2; if n is odd, multiply by 3 and add 1. Repeat until n reaches 1. Write a while loop in C to count and print the total number of steps taken.",
    "description": "The Collatz sequence starts with a positive integer n. If n is even, divide it by 2; if n is odd, multiply by 3 and add 1. Repeat until n reaches 1. Write a while loop in C to count and print the total number of steps taken.",
    "inputFormat": "A single positive integer n.",
    "outputFormat": "Total number of steps as an integer.",
    "constraints": [
      "1 <= n <= 100000"
    ],
    "examples": [
      {
        "input": "6",
        "output": "8"
      }
    ],
    "starterCode": {
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "c-loop-1-tc-1",
        "input": "6",
        "expectedOutput": "8",
        "isHidden": false
      },
      {
        "id": "c-loop-1-tc-2",
        "input": "1",
        "expectedOutput": "0",
        "isHidden": false
      },
      {
        "id": "c-loop-1-tc-3",
        "input": "2",
        "expectedOutput": "1",
        "isHidden": false
      },
      {
        "id": "c-loop-1-tc-4",
        "input": "3",
        "expectedOutput": "7",
        "isHidden": true
      },
      {
        "id": "c-loop-1-tc-5",
        "input": "7",
        "expectedOutput": "16",
        "isHidden": true
      },
      {
        "id": "c-loop-1-tc-6",
        "input": "19",
        "expectedOutput": "20",
        "isHidden": true
      },
      {
        "id": "c-loop-1-tc-7",
        "input": "27",
        "expectedOutput": "111",
        "isHidden": true
      },
      {
        "id": "c-loop-1-tc-8",
        "input": "10",
        "expectedOutput": "6",
        "isHidden": true
      },
      {
        "id": "c-loop-1-tc-9",
        "input": "15",
        "expectedOutput": "17",
        "isHidden": true
      },
      {
        "id": "c-loop-1-tc-10",
        "input": "100",
        "expectedOutput": "25",
        "isHidden": true
      }
    ]
  },
  {
    "id": "c-loop-2",
    "languageId": "c",
    "language": "c",
    "level": "beginner",
    "topicId": "c-loops-iteration",
    "title": "Harmonic Number Sum with Float Precision",
    "slug": "harmonic-number-sum-with-float-precision",
    "difficulty": "easy",
    "problemStatement": "The N-th harmonic number H_N is defined as sum_{i=1}^N (1.0 / i). Given an integer N, compute H_N using a for loop with double precision and print the result rounded to 4 decimal places.",
    "description": "The N-th harmonic number H_N is defined as sum_{i=1}^N (1.0 / i). Given an integer N, compute H_N using a for loop with double precision and print the result rounded to 4 decimal places.",
    "inputFormat": "A positive integer N.",
    "outputFormat": "A float with 4 decimal places.",
    "constraints": [
      "1 <= N <= 10000"
    ],
    "examples": [
      {
        "input": "4",
        "output": "2.0833"
      }
    ],
    "starterCode": {
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "c-loop-2-tc-1",
        "input": "4",
        "expectedOutput": "2.0833",
        "isHidden": false
      },
      {
        "id": "c-loop-2-tc-2",
        "input": "1",
        "expectedOutput": "1.0000",
        "isHidden": false
      },
      {
        "id": "c-loop-2-tc-3",
        "input": "2",
        "expectedOutput": "1.5000",
        "isHidden": false
      },
      {
        "id": "c-loop-2-tc-4",
        "input": "5",
        "expectedOutput": "2.2833",
        "isHidden": true
      },
      {
        "id": "c-loop-2-tc-5",
        "input": "10",
        "expectedOutput": "2.9290",
        "isHidden": true
      },
      {
        "id": "c-loop-2-tc-6",
        "input": "20",
        "expectedOutput": "3.5977",
        "isHidden": true
      },
      {
        "id": "c-loop-2-tc-7",
        "input": "50",
        "expectedOutput": "4.4992",
        "isHidden": true
      },
      {
        "id": "c-loop-2-tc-8",
        "input": "100",
        "expectedOutput": "5.1874",
        "isHidden": true
      },
      {
        "id": "c-loop-2-tc-9",
        "input": "500",
        "expectedOutput": "6.7928",
        "isHidden": true
      },
      {
        "id": "c-loop-2-tc-10",
        "input": "1000",
        "expectedOutput": "7.4855",
        "isHidden": true
      }
    ]
  },
  {
    "id": "c-loop-3",
    "languageId": "c",
    "language": "c",
    "level": "beginner",
    "topicId": "c-loops-iteration",
    "title": "Prime Factorization Decomposer",
    "slug": "prime-factorization-decomposer",
    "difficulty": "medium",
    "problemStatement": "Given an integer n (n >= 2), find all its prime factors in ascending order and print them separated by spaces. If a prime divides n multiple times, print it as many times as it divides n.",
    "description": "Given an integer n (n >= 2), find all its prime factors in ascending order and print them separated by spaces. If a prime divides n multiple times, print it as many times as it divides n.",
    "inputFormat": "A single integer n.",
    "outputFormat": "Prime factors separated by spaces.",
    "constraints": [
      "2 <= n <= 1000000"
    ],
    "examples": [
      {
        "input": "12",
        "output": "2 2 3"
      }
    ],
    "starterCode": {
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "c-loop-3-tc-1",
        "input": "12",
        "expectedOutput": "2 2 3",
        "isHidden": false
      },
      {
        "id": "c-loop-3-tc-2",
        "input": "17",
        "expectedOutput": "17",
        "isHidden": false
      },
      {
        "id": "c-loop-3-tc-3",
        "input": "100",
        "expectedOutput": "2 2 5 5",
        "isHidden": false
      },
      {
        "id": "c-loop-3-tc-4",
        "input": "315",
        "expectedOutput": "3 3 5 7",
        "isHidden": true
      },
      {
        "id": "c-loop-3-tc-5",
        "input": "64",
        "expectedOutput": "2 2 2 2 2 2",
        "isHidden": true
      },
      {
        "id": "c-loop-3-tc-6",
        "input": "84",
        "expectedOutput": "2 2 3 7",
        "isHidden": true
      },
      {
        "id": "c-loop-3-tc-7",
        "input": "99",
        "expectedOutput": "3 3 11",
        "isHidden": true
      },
      {
        "id": "c-loop-3-tc-8",
        "input": "1024",
        "expectedOutput": "2 2 2 2 2 2 2 2 2 2",
        "isHidden": true
      },
      {
        "id": "c-loop-3-tc-9",
        "input": "13",
        "expectedOutput": "13",
        "isHidden": true
      },
      {
        "id": "c-loop-3-tc-10",
        "input": "2520",
        "expectedOutput": "2 2 2 3 3 5 7",
        "isHidden": true
      }
    ]
  },
  {
    "id": "c-loop-4",
    "languageId": "c",
    "language": "c",
    "level": "beginner",
    "topicId": "c-loops-iteration",
    "title": "Centered Asterisk Pyramid Generator",
    "slug": "centered-asterisk-pyramid-generator",
    "difficulty": "medium",
    "problemStatement": "Given an integer height h, print a centered pyramid of asterisks with h rows. Row 1 has (h - 1) spaces followed by 1 asterisk. Row i has (h - i) spaces followed by (2*i - 1) asterisks.",
    "description": "Given an integer height h, print a centered pyramid of asterisks with h rows. Row 1 has (h - 1) spaces followed by 1 asterisk. Row i has (h - i) spaces followed by (2*i - 1) asterisks.",
    "inputFormat": "An integer h representing height.",
    "outputFormat": "h lines of formatted spaces and asterisks.",
    "constraints": [
      "1 <= h <= 15"
    ],
    "examples": [
      {
        "input": "3",
        "output": "  *\n ***\n*****"
      }
    ],
    "starterCode": {
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "c-loop-4-tc-1",
        "input": "3",
        "expectedOutput": "  *\n ***\n*****",
        "isHidden": false
      },
      {
        "id": "c-loop-4-tc-2",
        "input": "1",
        "expectedOutput": "*",
        "isHidden": false
      },
      {
        "id": "c-loop-4-tc-3",
        "input": "2",
        "expectedOutput": " *\n***",
        "isHidden": false
      },
      {
        "id": "c-loop-4-tc-4",
        "input": "4",
        "expectedOutput": "   *\n  ***\n *****\n*******",
        "isHidden": true
      },
      {
        "id": "c-loop-4-tc-5",
        "input": "5",
        "expectedOutput": "    *\n   ***\n  *****\n *******\n*********",
        "isHidden": true
      },
      {
        "id": "c-loop-4-tc-6",
        "input": "6",
        "expectedOutput": "     *\n    ***\n   *****\n  *******\n *********\n***********",
        "isHidden": true
      },
      {
        "id": "c-loop-4-tc-7",
        "input": "7",
        "expectedOutput": "      *\n     ***\n    *****\n   *******\n  *********\n ***********\n*************",
        "isHidden": true
      },
      {
        "id": "c-loop-4-tc-8",
        "input": "8",
        "expectedOutput": "       *\n      ***\n     *****\n    *******\n   *********\n  ***********\n *************\n***************",
        "isHidden": true
      },
      {
        "id": "c-loop-4-tc-9",
        "input": "9",
        "expectedOutput": "        *\n       ***\n      *****\n     *******\n    *********\n   ***********\n  *************\n ***************\n*****************",
        "isHidden": true
      },
      {
        "id": "c-loop-4-tc-10",
        "input": "10",
        "expectedOutput": "         *\n        ***\n       *****\n      *******\n     *********\n    ***********\n   *************\n  ***************\n *****************\n*******************",
        "isHidden": true
      }
    ]
  },
  {
    "id": "c-fn-1",
    "languageId": "c",
    "language": "c",
    "level": "beginner",
    "topicId": "c-functions-and-prototypes",
    "title": "GCD and LCM Function Prototypes",
    "slug": "gcd-and-lcm-function-prototypes",
    "difficulty": "easy",
    "problemStatement": "Declare and implement two C functions: `long long gcd(long long a, long long b)` using Euclidean algorithm, and `long long lcm(long long a, long long b)` where lcm = (a / gcd(a, b)) * b. Read two positive integers and print: \"GCD: <gcd> | LCM: <lcm>\".",
    "description": "Declare and implement two C functions: `long long gcd(long long a, long long b)` using Euclidean algorithm, and `long long lcm(long long a, long long b)` where lcm = (a / gcd(a, b)) * b. Read two positive integers and print: \"GCD: <gcd> | LCM: <lcm>\".",
    "inputFormat": "Two positive integers a and b separated by space.",
    "outputFormat": "Format: \"GCD: <gcd> | LCM: <lcm>\"",
    "constraints": [
      "1 <= a, b <= 10^8"
    ],
    "examples": [
      {
        "input": "12 18",
        "output": "GCD: 6 | LCM: 36"
      }
    ],
    "starterCode": {
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "c-fn-1-tc-1",
        "input": "12 18",
        "expectedOutput": "GCD: 6 | LCM: 36",
        "isHidden": false
      },
      {
        "id": "c-fn-1-tc-2",
        "input": "7 13",
        "expectedOutput": "GCD: 1 | LCM: 91",
        "isHidden": false
      },
      {
        "id": "c-fn-1-tc-3",
        "input": "24 60",
        "expectedOutput": "GCD: 12 | LCM: 120",
        "isHidden": false
      },
      {
        "id": "c-fn-1-tc-4",
        "input": "100 25",
        "expectedOutput": "GCD: 25 | LCM: 100",
        "isHidden": true
      },
      {
        "id": "c-fn-1-tc-5",
        "input": "15 28",
        "expectedOutput": "GCD: 1 | LCM: 420",
        "isHidden": true
      },
      {
        "id": "c-fn-1-tc-6",
        "input": "81 27",
        "expectedOutput": "GCD: 27 | LCM: 81",
        "isHidden": true
      },
      {
        "id": "c-fn-1-tc-7",
        "input": "1000 500",
        "expectedOutput": "GCD: 500 | LCM: 1000",
        "isHidden": true
      },
      {
        "id": "c-fn-1-tc-8",
        "input": "14 35",
        "expectedOutput": "GCD: 7 | LCM: 70",
        "isHidden": true
      },
      {
        "id": "c-fn-1-tc-9",
        "input": "42 56",
        "expectedOutput": "GCD: 14 | LCM: 168",
        "isHidden": true
      },
      {
        "id": "c-fn-1-tc-10",
        "input": "101 103",
        "expectedOutput": "GCD: 1 | LCM: 10403",
        "isHidden": true
      }
    ]
  },
  {
    "id": "c-fn-2",
    "languageId": "c",
    "language": "c",
    "level": "beginner",
    "topicId": "c-functions-and-prototypes",
    "title": "Fast Modular Exponentiation Function",
    "slug": "fast-modular-exponentiation-function",
    "difficulty": "medium",
    "problemStatement": "Implement a recursive or iterative function in C: `long long powerMod(long long base, long long exp, long long mod)` that calculates (base^exp) % mod in O(log exp) time. Given base, exp, and mod, print the result.",
    "description": "Implement a recursive or iterative function in C: `long long powerMod(long long base, long long exp, long long mod)` that calculates (base^exp) % mod in O(log exp) time. Given base, exp, and mod, print the result.",
    "inputFormat": "Three space-separated integers: base, exp, mod.",
    "outputFormat": "A single integer result.",
    "constraints": [
      "0 <= base, exp <= 10^9",
      "1 <= mod <= 10^9"
    ],
    "examples": [
      {
        "input": "2 10 1000",
        "output": "24"
      },
      {
        "input": "3 5 13",
        "output": "9"
      }
    ],
    "starterCode": {
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "c-fn-2-tc-1",
        "input": "2 10 1000",
        "expectedOutput": "24",
        "isHidden": false
      },
      {
        "id": "c-fn-2-tc-2",
        "input": "3 5 13",
        "expectedOutput": "9",
        "isHidden": false
      },
      {
        "id": "c-fn-2-tc-3",
        "input": "5 0 100",
        "expectedOutput": "1",
        "isHidden": false
      },
      {
        "id": "c-fn-2-tc-4",
        "input": "7 2 10",
        "expectedOutput": "9",
        "isHidden": true
      },
      {
        "id": "c-fn-2-tc-5",
        "input": "10 6 7",
        "expectedOutput": "1",
        "isHidden": true
      },
      {
        "id": "c-fn-2-tc-6",
        "input": "2 30 1000000007",
        "expectedOutput": "73741817",
        "isHidden": true
      },
      {
        "id": "c-fn-2-tc-7",
        "input": "123 456 1000",
        "expectedOutput": "441",
        "isHidden": true
      },
      {
        "id": "c-fn-2-tc-8",
        "input": "9 9 9",
        "expectedOutput": "0",
        "isHidden": true
      },
      {
        "id": "c-fn-2-tc-9",
        "input": "4 3 64",
        "expectedOutput": "0",
        "isHidden": true
      },
      {
        "id": "c-fn-2-tc-10",
        "input": "2 20 1000000",
        "expectedOutput": "48576",
        "isHidden": true
      }
    ]
  },
  {
    "id": "c-fn-3",
    "languageId": "c",
    "language": "c",
    "level": "beginner",
    "topicId": "c-functions-and-prototypes",
    "title": "Binomial Coefficient nCr Combination Function",
    "slug": "binomial-coefficient-ncr-combination-function",
    "difficulty": "medium",
    "problemStatement": "Write a C function `unsigned long long nCr(int n, int r)` that computes the binomial coefficient C(n, r) = n! / (r! * (n - r)!) without integer overflow by multiplying and dividing iteratively. Given n and r, print the value.",
    "description": "Write a C function `unsigned long long nCr(int n, int r)` that computes the binomial coefficient C(n, r) = n! / (r! * (n - r)!) without integer overflow by multiplying and dividing iteratively. Given n and r, print the value.",
    "inputFormat": "Two space-separated integers n and r.",
    "outputFormat": "A single integer.",
    "constraints": [
      "0 <= r <= n <= 30"
    ],
    "examples": [
      {
        "input": "5 2",
        "output": "10"
      }
    ],
    "starterCode": {
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "c-fn-3-tc-1",
        "input": "5 2",
        "expectedOutput": "10",
        "isHidden": false
      },
      {
        "id": "c-fn-3-tc-2",
        "input": "10 3",
        "expectedOutput": "120",
        "isHidden": false
      },
      {
        "id": "c-fn-3-tc-3",
        "input": "6 0",
        "expectedOutput": "1",
        "isHidden": false
      },
      {
        "id": "c-fn-3-tc-4",
        "input": "6 6",
        "expectedOutput": "1",
        "isHidden": true
      },
      {
        "id": "c-fn-3-tc-5",
        "input": "15 4",
        "expectedOutput": "1365",
        "isHidden": true
      },
      {
        "id": "c-fn-3-tc-6",
        "input": "20 5",
        "expectedOutput": "15504",
        "isHidden": true
      },
      {
        "id": "c-fn-3-tc-7",
        "input": "12 6",
        "expectedOutput": "924",
        "isHidden": true
      },
      {
        "id": "c-fn-3-tc-8",
        "input": "7 3",
        "expectedOutput": "35",
        "isHidden": true
      },
      {
        "id": "c-fn-3-tc-9",
        "input": "30 2",
        "expectedOutput": "435",
        "isHidden": true
      },
      {
        "id": "c-fn-3-tc-10",
        "input": "25 4",
        "expectedOutput": "12650",
        "isHidden": true
      }
    ]
  },
  {
    "id": "c-store-1",
    "languageId": "c",
    "language": "c",
    "level": "beginner",
    "topicId": "c-storage-classes",
    "title": "Static Variable Running Counter and Accumulator",
    "slug": "static-variable-running-counter-and-accumulator",
    "difficulty": "easy",
    "problemStatement": "In C, `static` local variables retain their values across multiple function calls. Write a function `void accumulate(int val)` containing static variables `sum` and `count`. Read N numbers. For each number, call `accumulate`. At the end, output \"Count: <count> | Total: <sum>\".",
    "description": "In C, `static` local variables retain their values across multiple function calls. Write a function `void accumulate(int val)` containing static variables `sum` and `count`. Read N numbers. For each number, call `accumulate`. At the end, output \"Count: <count> | Total: <sum>\".",
    "inputFormat": "First line has integer N. Next line has N integers.",
    "outputFormat": "\"Count: <count> | Total: <sum>\"",
    "constraints": [
      "1 <= N <= 1000"
    ],
    "examples": [
      {
        "input": "4\n10 20 30 40",
        "output": "Count: 4 | Total: 100"
      }
    ],
    "starterCode": {
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "c-store-1-tc-1",
        "input": "4\n10 20 30 40",
        "expectedOutput": "Count: 4 | Total: 100",
        "isHidden": false
      },
      {
        "id": "c-store-1-tc-2",
        "input": "1\n50",
        "expectedOutput": "Count: 1 | Total: 50",
        "isHidden": false
      },
      {
        "id": "c-store-1-tc-3",
        "input": "5\n-5 5 -10 10 0",
        "expectedOutput": "Count: 5 | Total: 0",
        "isHidden": false
      },
      {
        "id": "c-store-1-tc-4",
        "input": "3\n100 200 300",
        "expectedOutput": "Count: 3 | Total: 600",
        "isHidden": true
      },
      {
        "id": "c-store-1-tc-5",
        "input": "6\n1 2 3 4 5 6",
        "expectedOutput": "Count: 6 | Total: 21",
        "isHidden": true
      },
      {
        "id": "c-store-1-tc-6",
        "input": "2\n-50 -50",
        "expectedOutput": "Count: 2 | Total: -100",
        "isHidden": true
      },
      {
        "id": "c-store-1-tc-7",
        "input": "5\n10 10 10 10 10",
        "expectedOutput": "Count: 5 | Total: 50",
        "isHidden": true
      },
      {
        "id": "c-store-1-tc-8",
        "input": "7\n2 4 6 8 10 12 14",
        "expectedOutput": "Count: 7 | Total: 56",
        "isHidden": true
      },
      {
        "id": "c-store-1-tc-9",
        "input": "3\n0 0 0",
        "expectedOutput": "Count: 3 | Total: 0",
        "isHidden": true
      },
      {
        "id": "c-store-1-tc-10",
        "input": "4\n1000 -250 500 -250",
        "expectedOutput": "Count: 4 | Total: 1000",
        "isHidden": true
      }
    ]
  },
  {
    "id": "c-store-2",
    "languageId": "c",
    "language": "c",
    "level": "beginner",
    "topicId": "c-storage-classes",
    "title": "Static State Running Maximum Tracker",
    "slug": "static-state-running-maximum-tracker",
    "difficulty": "medium",
    "problemStatement": "Implement a function `int trackMax(int val)` using a static variable initialized appropriately to keep track of the maximum value seen so far across calls. Given an array of N integers, print the running maximum after each element, separated by spaces.",
    "description": "Implement a function `int trackMax(int val)` using a static variable initialized appropriately to keep track of the maximum value seen so far across calls. Given an array of N integers, print the running maximum after each element, separated by spaces.",
    "inputFormat": "First line integer N, second line N integers.",
    "outputFormat": "N running maximums separated by spaces.",
    "constraints": [
      "1 <= N <= 1000",
      "-10000 <= val <= 10000"
    ],
    "examples": [
      {
        "input": "5\n3 1 4 1 5",
        "output": "3 3 4 4 5"
      }
    ],
    "starterCode": {
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "c-store-2-tc-1",
        "input": "5\n3 1 4 1 5",
        "expectedOutput": "3 3 4 4 5",
        "isHidden": false
      },
      {
        "id": "c-store-2-tc-2",
        "input": "4\n10 8 6 4",
        "expectedOutput": "10 10 10 10",
        "isHidden": false
      },
      {
        "id": "c-store-2-tc-3",
        "input": "4\n1 5 10 20",
        "expectedOutput": "1 5 10 20",
        "isHidden": false
      },
      {
        "id": "c-store-2-tc-4",
        "input": "3\n-5 -2 -10",
        "expectedOutput": "-5 -2 -2",
        "isHidden": true
      },
      {
        "id": "c-store-2-tc-5",
        "input": "6\n7 7 7 2 9 1",
        "expectedOutput": "7 7 7 7 9 9",
        "isHidden": true
      },
      {
        "id": "c-store-2-tc-6",
        "input": "2\n0 0",
        "expectedOutput": "0 0",
        "isHidden": true
      },
      {
        "id": "c-store-2-tc-7",
        "input": "5\n100 -50 200 -100 300",
        "expectedOutput": "100 100 200 200 300",
        "isHidden": true
      },
      {
        "id": "c-store-2-tc-8",
        "input": "1\n42",
        "expectedOutput": "42",
        "isHidden": true
      },
      {
        "id": "c-store-2-tc-9",
        "input": "4\n-1 -2 -3 -4",
        "expectedOutput": "-1 -1 -1 -1",
        "isHidden": true
      },
      {
        "id": "c-store-2-tc-10",
        "input": "5\n2 8 3 15 1",
        "expectedOutput": "2 8 8 15 15",
        "isHidden": true
      }
    ]
  },
  {
    "id": "c-store-3",
    "languageId": "c",
    "language": "c",
    "level": "beginner",
    "topicId": "c-storage-classes",
    "title": "Register Storage Variable Loop Acceleration",
    "slug": "register-storage-variable-loop-acceleration",
    "difficulty": "medium",
    "problemStatement": "In C systems programming, `register` hints to the compiler that a heavily iterated variable should be placed in a CPU register. Write a program using `register int` loop counter and accumulator to compute the sum of squares sum_{i=1}^n i^2. Print the result.",
    "description": "In C systems programming, `register` hints to the compiler that a heavily iterated variable should be placed in a CPU register. Write a program using `register int` loop counter and accumulator to compute the sum of squares sum_{i=1}^n i^2. Print the result.",
    "inputFormat": "A single integer n.",
    "outputFormat": "Sum of squares as a long long.",
    "constraints": [
      "1 <= n <= 10000"
    ],
    "examples": [
      {
        "input": "5",
        "output": "55"
      }
    ],
    "starterCode": {
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "c-store-3-tc-1",
        "input": "5",
        "expectedOutput": "55",
        "isHidden": false
      },
      {
        "id": "c-store-3-tc-2",
        "input": "1",
        "expectedOutput": "1",
        "isHidden": false
      },
      {
        "id": "c-store-3-tc-3",
        "input": "2",
        "expectedOutput": "5",
        "isHidden": false
      },
      {
        "id": "c-store-3-tc-4",
        "input": "3",
        "expectedOutput": "14",
        "isHidden": true
      },
      {
        "id": "c-store-3-tc-5",
        "input": "4",
        "expectedOutput": "30",
        "isHidden": true
      },
      {
        "id": "c-store-3-tc-6",
        "input": "10",
        "expectedOutput": "385",
        "isHidden": true
      },
      {
        "id": "c-store-3-tc-7",
        "input": "20",
        "expectedOutput": "2870",
        "isHidden": true
      },
      {
        "id": "c-store-3-tc-8",
        "input": "50",
        "expectedOutput": "42925",
        "isHidden": true
      },
      {
        "id": "c-store-3-tc-9",
        "input": "100",
        "expectedOutput": "338350",
        "isHidden": true
      },
      {
        "id": "c-store-3-tc-10",
        "input": "15",
        "expectedOutput": "1240",
        "isHidden": true
      }
    ]
  },
  {
    "id": "c-ptr-1",
    "languageId": "c",
    "language": "c",
    "level": "intermediate",
    "topicId": "c-pointers-and-memory-addresses",
    "title": "Pointer Swap Implementation",
    "slug": "pointer-swap-implementation",
    "difficulty": "easy",
    "problemStatement": "Write a C function `void swap(int *a, int *b)` that dereferences pointers to swap two integer values in place. Read two integers, call swap via their memory addresses, and print the resulting values separated by space.",
    "description": "Write a C function `void swap(int *a, int *b)` that dereferences pointers to swap two integer values in place. Read two integers, call swap via their memory addresses, and print the resulting values separated by space.",
    "inputFormat": "Two integers x and y.",
    "outputFormat": "Two integers: \"y x\"",
    "constraints": [
      "-10000 <= x, y <= 10000"
    ],
    "examples": [
      {
        "input": "3 7",
        "output": "7 3"
      }
    ],
    "starterCode": {
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "c-ptr-1-tc-1",
        "input": "3 7",
        "expectedOutput": "7 3",
        "isHidden": false
      },
      {
        "id": "c-ptr-1-tc-2",
        "input": "-10 20",
        "expectedOutput": "20 -10",
        "isHidden": false
      },
      {
        "id": "c-ptr-1-tc-3",
        "input": "0 5",
        "expectedOutput": "5 0",
        "isHidden": false
      },
      {
        "id": "c-ptr-1-tc-4",
        "input": "100 100",
        "expectedOutput": "100 100",
        "isHidden": true
      },
      {
        "id": "c-ptr-1-tc-5",
        "input": "-45 -90",
        "expectedOutput": "-90 -45",
        "isHidden": true
      },
      {
        "id": "c-ptr-1-tc-6",
        "input": "123 456",
        "expectedOutput": "456 123",
        "isHidden": true
      },
      {
        "id": "c-ptr-1-tc-7",
        "input": "7 -7",
        "expectedOutput": "-7 7",
        "isHidden": true
      },
      {
        "id": "c-ptr-1-tc-8",
        "input": "50 25",
        "expectedOutput": "25 50",
        "isHidden": true
      },
      {
        "id": "c-ptr-1-tc-9",
        "input": "99 1",
        "expectedOutput": "1 99",
        "isHidden": true
      },
      {
        "id": "c-ptr-1-tc-10",
        "input": "-1 1",
        "expectedOutput": "1 -1",
        "isHidden": true
      }
    ]
  },
  {
    "id": "c-ptr-2",
    "languageId": "c",
    "language": "c",
    "level": "intermediate",
    "topicId": "c-pointers-and-memory-addresses",
    "title": "Min and Max Output Pointers",
    "slug": "min-and-max-output-pointers",
    "difficulty": "easy",
    "problemStatement": "Write a C function `void getMinMax(const int *arr, int n, int *outMin, int *outMax)` that scans an array using pointers and stores the minimum and maximum elements in the memory addresses pointed to by `outMin` and `outMax`. Print \"Min: <min> | Max: <max>\".",
    "description": "Write a C function `void getMinMax(const int *arr, int n, int *outMin, int *outMax)` that scans an array using pointers and stores the minimum and maximum elements in the memory addresses pointed to by `outMin` and `outMax`. Print \"Min: <min> | Max: <max>\".",
    "inputFormat": "First line integer n, second line n space-separated integers.",
    "outputFormat": "\"Min: <min> | Max: <max>\"",
    "constraints": [
      "1 <= n <= 1000"
    ],
    "examples": [
      {
        "input": "5\n4 1 9 2 7",
        "output": "Min: 1 | Max: 9"
      }
    ],
    "starterCode": {
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "c-ptr-2-tc-1",
        "input": "5\n4 1 9 2 7",
        "expectedOutput": "Min: 1 | Max: 9",
        "isHidden": false
      },
      {
        "id": "c-ptr-2-tc-2",
        "input": "1\n42",
        "expectedOutput": "Min: 42 | Max: 42",
        "isHidden": false
      },
      {
        "id": "c-ptr-2-tc-3",
        "input": "4\n-10 -50 0 20",
        "expectedOutput": "Min: -50 | Max: 20",
        "isHidden": false
      },
      {
        "id": "c-ptr-2-tc-4",
        "input": "6\n3 3 3 3 3 3",
        "expectedOutput": "Min: 3 | Max: 3",
        "isHidden": true
      },
      {
        "id": "c-ptr-2-tc-5",
        "input": "5\n100 200 50 300 150",
        "expectedOutput": "Min: 50 | Max: 300",
        "isHidden": true
      },
      {
        "id": "c-ptr-2-tc-6",
        "input": "3\n-1 -2 -3",
        "expectedOutput": "Min: -3 | Max: -1",
        "isHidden": true
      },
      {
        "id": "c-ptr-2-tc-7",
        "input": "4\n5 10 15 20",
        "expectedOutput": "Min: 5 | Max: 20",
        "isHidden": true
      },
      {
        "id": "c-ptr-2-tc-8",
        "input": "5\n99 10 55 4 80",
        "expectedOutput": "Min: 4 | Max: 99",
        "isHidden": true
      },
      {
        "id": "c-ptr-2-tc-9",
        "input": "2\n-100 100",
        "expectedOutput": "Min: -100 | Max: 100",
        "isHidden": true
      },
      {
        "id": "c-ptr-2-tc-10",
        "input": "7\n12 45 78 23 56 89 34",
        "expectedOutput": "Min: 12 | Max: 89",
        "isHidden": true
      }
    ]
  },
  {
    "id": "c-ptr-3",
    "languageId": "c",
    "language": "c",
    "level": "intermediate",
    "topicId": "c-pointers-and-memory-addresses",
    "title": "Pointer Dereference Weighted Traversal",
    "slug": "pointer-dereference-weighted-traversal",
    "difficulty": "medium",
    "problemStatement": "Given an array of n integers, iterate through the array using a pointer `int *ptr = arr`. Calculate the weighted sum where the element at offset i is multiplied by (i + 1): sum_{i=0}^{n-1} (*(ptr + i) * (i + 1)). Print the final sum.",
    "description": "Given an array of n integers, iterate through the array using a pointer `int *ptr = arr`. Calculate the weighted sum where the element at offset i is multiplied by (i + 1): sum_{i=0}^{n-1} (*(ptr + i) * (i + 1)). Print the final sum.",
    "inputFormat": "First line integer n, second line n integers.",
    "outputFormat": "Single integer sum.",
    "constraints": [
      "1 <= n <= 1000"
    ],
    "examples": [
      {
        "input": "3\n2 4 6",
        "output": "28"
      }
    ],
    "starterCode": {
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "c-ptr-3-tc-1",
        "input": "3\n2 4 6",
        "expectedOutput": "28",
        "isHidden": false
      },
      {
        "id": "c-ptr-3-tc-2",
        "input": "1\n10",
        "expectedOutput": "10",
        "isHidden": false
      },
      {
        "id": "c-ptr-3-tc-3",
        "input": "4\n1 1 1 1",
        "expectedOutput": "10",
        "isHidden": false
      },
      {
        "id": "c-ptr-3-tc-4",
        "input": "4\n1 2 3 4",
        "expectedOutput": "30",
        "isHidden": true
      },
      {
        "id": "c-ptr-3-tc-5",
        "input": "5\n5 4 3 2 1",
        "expectedOutput": "35",
        "isHidden": true
      },
      {
        "id": "c-ptr-3-tc-6",
        "input": "3\n-1 -2 -3",
        "expectedOutput": "-14",
        "isHidden": true
      },
      {
        "id": "c-ptr-3-tc-7",
        "input": "2\n10 20",
        "expectedOutput": "50",
        "isHidden": true
      },
      {
        "id": "c-ptr-3-tc-8",
        "input": "5\n0 0 0 0 5",
        "expectedOutput": "25",
        "isHidden": true
      },
      {
        "id": "c-ptr-3-tc-9",
        "input": "3\n100 -50 25",
        "expectedOutput": "75",
        "isHidden": true
      },
      {
        "id": "c-ptr-3-tc-10",
        "input": "4\n2 -1 3 -2",
        "expectedOutput": "9",
        "isHidden": true
      }
    ]
  },
  {
    "id": "c-arrptr-1",
    "languageId": "c",
    "language": "c",
    "level": "intermediate",
    "topicId": "c-pointer-arithmetic-and-arrays",
    "title": "In-Place Array Reversal using Pointers",
    "slug": "in-place-array-reversal-using-pointers",
    "difficulty": "easy",
    "problemStatement": "Reverse an array of n integers in place using two pointers `int *left = arr` and `int *right = arr + n - 1`. Increment left and decrement right while swapping until they cross. Print the reversed array separated by spaces.",
    "description": "Reverse an array of n integers in place using two pointers `int *left = arr` and `int *right = arr + n - 1`. Increment left and decrement right while swapping until they cross. Print the reversed array separated by spaces.",
    "inputFormat": "First line integer n, second line n integers.",
    "outputFormat": "Reversed array separated by spaces.",
    "constraints": [
      "1 <= n <= 1000"
    ],
    "examples": [
      {
        "input": "5\n1 2 3 4 5",
        "output": "5 4 3 2 1"
      }
    ],
    "starterCode": {
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "c-arrptr-1-tc-1",
        "input": "5\n1 2 3 4 5",
        "expectedOutput": "5 4 3 2 1",
        "isHidden": false
      },
      {
        "id": "c-arrptr-1-tc-2",
        "input": "1\n99",
        "expectedOutput": "99",
        "isHidden": false
      },
      {
        "id": "c-arrptr-1-tc-3",
        "input": "4\n10 20 30 40",
        "expectedOutput": "40 30 20 10",
        "isHidden": false
      },
      {
        "id": "c-arrptr-1-tc-4",
        "input": "2\n7 8",
        "expectedOutput": "8 7",
        "isHidden": true
      },
      {
        "id": "c-arrptr-1-tc-5",
        "input": "6\n1 0 1 0 1 0",
        "expectedOutput": "0 1 0 1 0 1",
        "isHidden": true
      },
      {
        "id": "c-arrptr-1-tc-6",
        "input": "3\n-5 0 5",
        "expectedOutput": "5 0 -5",
        "isHidden": true
      },
      {
        "id": "c-arrptr-1-tc-7",
        "input": "5\n10 10 10 10 10",
        "expectedOutput": "10 10 10 10 10",
        "isHidden": true
      },
      {
        "id": "c-arrptr-1-tc-8",
        "input": "7\n1 3 5 7 9 11 13",
        "expectedOutput": "13 11 9 7 5 3 1",
        "isHidden": true
      },
      {
        "id": "c-arrptr-1-tc-9",
        "input": "4\n-1 -2 -3 -4",
        "expectedOutput": "-4 -3 -2 -1",
        "isHidden": true
      },
      {
        "id": "c-arrptr-1-tc-10",
        "input": "5\n9 8 7 6 5",
        "expectedOutput": "5 6 7 8 9",
        "isHidden": true
      }
    ]
  },
  {
    "id": "c-arrptr-2",
    "languageId": "c",
    "language": "c",
    "level": "intermediate",
    "topicId": "c-pointer-arithmetic-and-arrays",
    "title": "Subarray Sum via Pointer Offsets",
    "slug": "subarray-sum-via-pointer-offsets",
    "difficulty": "medium",
    "problemStatement": "Given an array of n integers and two 0-based indices start and end (0 <= start <= end < n), compute the sum of elements from start to end by traversing with pointers from `(arr + start)` up to `(arr + end)`. Print the sum.",
    "description": "Given an array of n integers and two 0-based indices start and end (0 <= start <= end < n), compute the sum of elements from start to end by traversing with pointers from `(arr + start)` up to `(arr + end)`. Print the sum.",
    "inputFormat": "First line n. Second line n integers. Third line two integers: start and end.",
    "outputFormat": "Single integer sum.",
    "constraints": [
      "1 <= n <= 1000",
      "0 <= start <= end < n"
    ],
    "examples": [
      {
        "input": "5\n10 20 30 40 50\n1 3",
        "output": "90"
      }
    ],
    "starterCode": {
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "c-arrptr-2-tc-1",
        "input": "5\n10 20 30 40 50\n1 3",
        "expectedOutput": "90",
        "isHidden": false
      },
      {
        "id": "c-arrptr-2-tc-2",
        "input": "4\n1 2 3 4\n0 3",
        "expectedOutput": "10",
        "isHidden": false
      },
      {
        "id": "c-arrptr-2-tc-3",
        "input": "5\n5 10 15 20 25\n2 2",
        "expectedOutput": "15",
        "isHidden": false
      },
      {
        "id": "c-arrptr-2-tc-4",
        "input": "6\n-10 20 -30 40 -50 60\n1 4",
        "expectedOutput": "-20",
        "isHidden": true
      },
      {
        "id": "c-arrptr-2-tc-5",
        "input": "3\n100 200 300\n0 1",
        "expectedOutput": "300",
        "isHidden": true
      },
      {
        "id": "c-arrptr-2-tc-6",
        "input": "4\n7 7 7 7\n1 3",
        "expectedOutput": "21",
        "isHidden": true
      },
      {
        "id": "c-arrptr-2-tc-7",
        "input": "5\n1 1 1 1 1\n0 4",
        "expectedOutput": "5",
        "isHidden": true
      },
      {
        "id": "c-arrptr-2-tc-8",
        "input": "4\n-5 -5 -5 -5\n2 3",
        "expectedOutput": "-10",
        "isHidden": true
      },
      {
        "id": "c-arrptr-2-tc-9",
        "input": "3\n50 60 70\n2 2",
        "expectedOutput": "70",
        "isHidden": true
      },
      {
        "id": "c-arrptr-2-tc-10",
        "input": "6\n2 4 6 8 10 12\n0 5",
        "expectedOutput": "42",
        "isHidden": true
      }
    ]
  },
  {
    "id": "c-arrptr-3",
    "languageId": "c",
    "language": "c",
    "level": "intermediate",
    "topicId": "c-pointer-arithmetic-and-arrays",
    "title": "Pointer-Based Linear Search and Offset Calculation",
    "slug": "pointer-based-linear-search-and-offset-calculation",
    "difficulty": "medium",
    "problemStatement": "Implement a function `int findOffset(const int *arr, int n, int target)` that returns the pointer offset (index) where target first appears using pointer comparison `ptr - arr`. If not found, return -1. Print the offset.",
    "description": "Implement a function `int findOffset(const int *arr, int n, int target)` that returns the pointer offset (index) where target first appears using pointer comparison `ptr - arr`. If not found, return -1. Print the offset.",
    "inputFormat": "First line n. Second line n integers. Third line target integer.",
    "outputFormat": "Offset integer or -1.",
    "constraints": [
      "1 <= n <= 1000"
    ],
    "examples": [
      {
        "input": "5\n10 25 30 45 50\n30",
        "output": "2"
      },
      {
        "input": "3\n1 2 3\n99",
        "output": "-1"
      }
    ],
    "starterCode": {
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "c-arrptr-3-tc-1",
        "input": "5\n10 25 30 45 50\n30",
        "expectedOutput": "2",
        "isHidden": false
      },
      {
        "id": "c-arrptr-3-tc-2",
        "input": "3\n1 2 3\n99",
        "expectedOutput": "-1",
        "isHidden": false
      },
      {
        "id": "c-arrptr-3-tc-3",
        "input": "4\n7 8 9 10\n7",
        "expectedOutput": "0",
        "isHidden": false
      },
      {
        "id": "c-arrptr-3-tc-4",
        "input": "4\n7 8 9 10\n10",
        "expectedOutput": "3",
        "isHidden": true
      },
      {
        "id": "c-arrptr-3-tc-5",
        "input": "6\n5 2 8 2 9 1\n2",
        "expectedOutput": "1",
        "isHidden": true
      },
      {
        "id": "c-arrptr-3-tc-6",
        "input": "1\n42\n42",
        "expectedOutput": "0",
        "isHidden": true
      },
      {
        "id": "c-arrptr-3-tc-7",
        "input": "1\n42\n10",
        "expectedOutput": "-1",
        "isHidden": true
      },
      {
        "id": "c-arrptr-3-tc-8",
        "input": "5\n-10 -20 -30 -40 -50\n-30",
        "expectedOutput": "2",
        "isHidden": true
      },
      {
        "id": "c-arrptr-3-tc-9",
        "input": "4\n100 200 300 400\n250",
        "expectedOutput": "-1",
        "isHidden": true
      },
      {
        "id": "c-arrptr-3-tc-10",
        "input": "5\n3 3 3 3 3\n3",
        "expectedOutput": "0",
        "isHidden": true
      }
    ]
  },
  {
    "id": "c-str-1",
    "languageId": "c",
    "language": "c",
    "level": "intermediate",
    "topicId": "c-strings-null-terminator",
    "title": "Manual C String Length Without strlen",
    "slug": "manual-c-string-length-without-strlen",
    "difficulty": "easy",
    "problemStatement": "In C, strings are arrays of characters terminated by the null character ('\\0'). Write a function `int my_strlen(const char *s)` that iterates through the string until reaching '\\0' without using string.h. Given an input line, print its character count.",
    "description": "In C, strings are arrays of characters terminated by the null character ('\\0'). Write a function `int my_strlen(const char *s)` that iterates through the string until reaching '\\0' without using string.h. Given an input line, print its character count.",
    "inputFormat": "A single string (may contain spaces).",
    "outputFormat": "Length of the string as integer.",
    "constraints": [
      "Length <= 1000"
    ],
    "examples": [
      {
        "input": "Hello World",
        "output": "11"
      }
    ],
    "starterCode": {
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "c-str-1-tc-1",
        "input": "Hello World",
        "expectedOutput": "11",
        "isHidden": false
      },
      {
        "id": "c-str-1-tc-2",
        "input": "C Programming",
        "expectedOutput": "13",
        "isHidden": false
      },
      {
        "id": "c-str-1-tc-3",
        "input": "OpenAI",
        "expectedOutput": "6",
        "isHidden": false
      },
      {
        "id": "c-str-1-tc-4",
        "input": "Antigravity",
        "expectedOutput": "11",
        "isHidden": true
      },
      {
        "id": "c-str-1-tc-5",
        "input": "a",
        "expectedOutput": "1",
        "isHidden": true
      },
      {
        "id": "c-str-1-tc-6",
        "input": "Embedded Systems 2026",
        "expectedOutput": "21",
        "isHidden": true
      },
      {
        "id": "c-str-1-tc-7",
        "input": "Pointer to char*",
        "expectedOutput": "16",
        "isHidden": true
      },
      {
        "id": "c-str-1-tc-8",
        "input": "Null terminator \\0",
        "expectedOutput": "18",
        "isHidden": true
      },
      {
        "id": "c-str-1-tc-9",
        "input": "Memory layout and stack",
        "expectedOutput": "23",
        "isHidden": true
      },
      {
        "id": "c-str-1-tc-10",
        "input": "1234567890",
        "expectedOutput": "10",
        "isHidden": true
      }
    ]
  },
  {
    "id": "c-str-2",
    "languageId": "c",
    "language": "c",
    "level": "intermediate",
    "topicId": "c-strings-null-terminator",
    "title": "C String Palindrome Verifier",
    "slug": "c-string-palindrome-verifier",
    "difficulty": "easy",
    "problemStatement": "Given a word string, check whether it is a palindrome (reads identical forwards and backwards, case-sensitive) by comparing characters using two pointers moving towards the center. Print \"true\" if palindrome, else \"false\".",
    "description": "Given a word string, check whether it is a palindrome (reads identical forwards and backwards, case-sensitive) by comparing characters using two pointers moving towards the center. Print \"true\" if palindrome, else \"false\".",
    "inputFormat": "A single word string.",
    "outputFormat": "\"true\" or \"false\"",
    "constraints": [
      "Length <= 200"
    ],
    "examples": [
      {
        "input": "racecar",
        "output": "true"
      },
      {
        "input": "hello",
        "output": "false"
      }
    ],
    "starterCode": {
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "c-str-2-tc-1",
        "input": "racecar",
        "expectedOutput": "true",
        "isHidden": false
      },
      {
        "id": "c-str-2-tc-2",
        "input": "hello",
        "expectedOutput": "false",
        "isHidden": false
      },
      {
        "id": "c-str-2-tc-3",
        "input": "madam",
        "expectedOutput": "true",
        "isHidden": false
      },
      {
        "id": "c-str-2-tc-4",
        "input": "level",
        "expectedOutput": "true",
        "isHidden": true
      },
      {
        "id": "c-str-2-tc-5",
        "input": "rotor",
        "expectedOutput": "true",
        "isHidden": true
      },
      {
        "id": "c-str-2-tc-6",
        "input": "c",
        "expectedOutput": "true",
        "isHidden": true
      },
      {
        "id": "c-str-2-tc-7",
        "input": "noon",
        "expectedOutput": "true",
        "isHidden": true
      },
      {
        "id": "c-str-2-tc-8",
        "input": "step on no pets",
        "expectedOutput": "true",
        "isHidden": true
      },
      {
        "id": "c-str-2-tc-9",
        "input": "world",
        "expectedOutput": "false",
        "isHidden": true
      },
      {
        "id": "c-str-2-tc-10",
        "input": "abccba",
        "expectedOutput": "true",
        "isHidden": true
      }
    ]
  },
  {
    "id": "c-str-3",
    "languageId": "c",
    "language": "c",
    "level": "intermediate",
    "topicId": "c-strings-null-terminator",
    "title": "Word Count in C String",
    "slug": "word-count-in-c-string",
    "difficulty": "medium",
    "problemStatement": "Read a line of text. Using character inspection with a loop and state flag (in_word), count the total number of words (sequences of non-whitespace characters separated by one or more spaces/tabs). Print the count.",
    "description": "Read a line of text. Using character inspection with a loop and state flag (in_word), count the total number of words (sequences of non-whitespace characters separated by one or more spaces/tabs). Print the count.",
    "inputFormat": "A line of text.",
    "outputFormat": "Word count as integer.",
    "constraints": [
      "Length <= 1000"
    ],
    "examples": [
      {
        "input": "C programming is powerful and fast",
        "output": "6"
      }
    ],
    "starterCode": {
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "c-str-3-tc-1",
        "input": "C programming is powerful and fast",
        "expectedOutput": "6",
        "isHidden": false
      },
      {
        "id": "c-str-3-tc-2",
        "input": "Hello",
        "expectedOutput": "1",
        "isHidden": false
      },
      {
        "id": "c-str-3-tc-3",
        "input": "   spaces   at   both   ends   ",
        "expectedOutput": "4",
        "isHidden": false
      },
      {
        "id": "c-str-3-tc-4",
        "input": "one two three four five",
        "expectedOutput": "5",
        "isHidden": true
      },
      {
        "id": "c-str-3-tc-5",
        "input": "Systems architecture and low level memory",
        "expectedOutput": "6",
        "isHidden": true
      },
      {
        "id": "c-str-3-tc-6",
        "input": "Pointers references memory heap stack",
        "expectedOutput": "5",
        "isHidden": true
      },
      {
        "id": "c-str-3-tc-7",
        "input": "Quick brown fox",
        "expectedOutput": "3",
        "isHidden": true
      },
      {
        "id": "c-str-3-tc-8",
        "input": "Testing edge case",
        "expectedOutput": "3",
        "isHidden": true
      },
      {
        "id": "c-str-3-tc-9",
        "input": "a b c d e f g",
        "expectedOutput": "7",
        "isHidden": true
      },
      {
        "id": "c-str-3-tc-10",
        "input": "Compilation pipeline preprocess compile assemble link",
        "expectedOutput": "6",
        "isHidden": true
      }
    ]
  },
  {
    "id": "c-str-4",
    "languageId": "c",
    "language": "c",
    "level": "intermediate",
    "topicId": "c-strings-null-terminator",
    "title": "Safe String Concatenation and Null Termination",
    "slug": "safe-string-concatenation-and-null-termination",
    "difficulty": "medium",
    "problemStatement": "Given two strings s1 and s2 and a separator char sep, concatenate them into a buffer with sep in between and properly ensure the trailing null terminator '\\0'. Print the concatenated result.",
    "description": "Given two strings s1 and s2 and a separator char sep, concatenate them into a buffer with sep in between and properly ensure the trailing null terminator '\\0'. Print the concatenated result.",
    "inputFormat": "Three space-separated tokens: s1 s2 and sep (single character).",
    "outputFormat": "Concatenated string: s1 + sep + s2",
    "constraints": [
      "Lengths of s1 and s2 <= 100"
    ],
    "examples": [
      {
        "input": "hello world -",
        "output": "hello-world"
      }
    ],
    "starterCode": {
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "c-str-4-tc-1",
        "input": "hello world -",
        "expectedOutput": "hello-world",
        "isHidden": false
      },
      {
        "id": "c-str-4-tc-2",
        "input": "foo bar _",
        "expectedOutput": "foo_bar",
        "isHidden": false
      },
      {
        "id": "c-str-4-tc-3",
        "input": "user id :",
        "expectedOutput": "user:id",
        "isHidden": false
      },
      {
        "id": "c-str-4-tc-4",
        "input": "item count /",
        "expectedOutput": "item/count",
        "isHidden": true
      },
      {
        "id": "c-str-4-tc-5",
        "input": "left right |",
        "expectedOutput": "left|right",
        "isHidden": true
      },
      {
        "id": "c-str-4-tc-6",
        "input": "start end ->",
        "expectedOutput": "start-end",
        "isHidden": true
      },
      {
        "id": "c-str-4-tc-7",
        "input": "root leaf /",
        "expectedOutput": "root/leaf",
        "isHidden": true
      },
      {
        "id": "c-str-4-tc-8",
        "input": "key value =",
        "expectedOutput": "key=value",
        "isHidden": true
      },
      {
        "id": "c-str-4-tc-9",
        "input": "first last ,",
        "expectedOutput": "first,last",
        "isHidden": true
      },
      {
        "id": "c-str-4-tc-10",
        "input": "alpha beta +",
        "expectedOutput": "alpha+beta",
        "isHidden": true
      }
    ]
  },
  {
    "id": "c-struct-1",
    "languageId": "c",
    "language": "c",
    "level": "intermediate",
    "topicId": "c-structs-and-typedef",
    "title": "Student Record Average with typedef struct",
    "slug": "student-record-average-with-typedef-struct",
    "difficulty": "medium",
    "problemStatement": "Define a struct `typedef struct { int id; char name[50]; float score1; float score2; float score3; } Student;`. Given a student record, calculate the average score ((score1 + score2 + score3) / 3.0) and print: \"ID: <id> | Name: <name> | Average: <avg rounded to 2 decimals>\".",
    "description": "Define a struct `typedef struct { int id; char name[50]; float score1; float score2; float score3; } Student;`. Given a student record, calculate the average score ((score1 + score2 + score3) / 3.0) and print: \"ID: <id> | Name: <name> | Average: <avg rounded to 2 decimals>\".",
    "inputFormat": "id name score1 score2 score3 separated by spaces.",
    "outputFormat": "\"ID: <id> | Name: <name> | Average: <avg>\"",
    "constraints": [
      "id >= 1",
      "scores between 0.0 and 100.0"
    ],
    "examples": [
      {
        "input": "101 Alice 85.5 90.0 92.5",
        "output": "ID: 101 | Name: Alice | Average: 89.33"
      }
    ],
    "starterCode": {
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "c-struct-1-tc-1",
        "input": "101 Alice 85.5 90.0 92.5",
        "expectedOutput": "ID: 101 | Name: Alice | Average: 89.33",
        "isHidden": false
      },
      {
        "id": "c-struct-1-tc-2",
        "input": "102 Bob 70.0 75.0 80.0",
        "expectedOutput": "ID: 102 | Name: Bob | Average: 75.00",
        "isHidden": false
      },
      {
        "id": "c-struct-1-tc-3",
        "input": "103 Charlie 100.0 100.0 100.0",
        "expectedOutput": "ID: 103 | Name: Charlie | Average: 100.00",
        "isHidden": false
      },
      {
        "id": "c-struct-1-tc-4",
        "input": "104 David 50.0 60.0 70.0",
        "expectedOutput": "ID: 104 | Name: David | Average: 60.00",
        "isHidden": true
      },
      {
        "id": "c-struct-1-tc-5",
        "input": "105 Eve 95.0 92.0 88.0",
        "expectedOutput": "ID: 105 | Name: Eve | Average: 91.67",
        "isHidden": true
      },
      {
        "id": "c-struct-1-tc-6",
        "input": "106 Frank 0.0 50.0 100.0",
        "expectedOutput": "ID: 106 | Name: Frank | Average: 50.00",
        "isHidden": true
      },
      {
        "id": "c-struct-1-tc-7",
        "input": "107 Grace 88.0 89.0 90.0",
        "expectedOutput": "ID: 107 | Name: Grace | Average: 89.00",
        "isHidden": true
      },
      {
        "id": "c-struct-1-tc-8",
        "input": "108 Heidi 77.5 82.5 91.0",
        "expectedOutput": "ID: 108 | Name: Heidi | Average: 83.67",
        "isHidden": true
      },
      {
        "id": "c-struct-1-tc-9",
        "input": "109 Ivan 65.0 65.0 65.0",
        "expectedOutput": "ID: 109 | Name: Ivan | Average: 65.00",
        "isHidden": true
      },
      {
        "id": "c-struct-1-tc-10",
        "input": "110 Judy 80.0 85.0 90.0",
        "expectedOutput": "ID: 110 | Name: Judy | Average: 85.00",
        "isHidden": true
      }
    ]
  },
  {
    "id": "c-struct-2",
    "languageId": "c",
    "language": "c",
    "level": "intermediate",
    "topicId": "c-structs-and-typedef",
    "title": "2D Centroid of Points using Struct Array",
    "slug": "2d-centroid-of-points-using-struct-array",
    "difficulty": "medium",
    "problemStatement": "Define a struct `Point { double x; double y; };`. Given n points, compute the centroid coordinates (x_centroid = sum(x)/n, y_centroid = sum(y)/n). Print \"Centroid: (<x>, <y>)\" with both coordinates rounded to 2 decimal places.",
    "description": "Define a struct `Point { double x; double y; };`. Given n points, compute the centroid coordinates (x_centroid = sum(x)/n, y_centroid = sum(y)/n). Print \"Centroid: (<x>, <y>)\" with both coordinates rounded to 2 decimal places.",
    "inputFormat": "First line integer n. Next n lines contain x and y coordinates.",
    "outputFormat": "\"Centroid: (<x>, <y>)\"",
    "constraints": [
      "1 <= n <= 1000"
    ],
    "examples": [
      {
        "input": "3\n0.0 0.0\n3.0 0.0\n0.0 3.0",
        "output": "Centroid: (1.00, 1.00)"
      }
    ],
    "starterCode": {
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "c-struct-2-tc-1",
        "input": "3\n0.0 0.0\n3.0 0.0\n0.0 3.0",
        "expectedOutput": "Centroid: (1.00, 1.00)",
        "isHidden": false
      },
      {
        "id": "c-struct-2-tc-2",
        "input": "1\n5.0 7.5",
        "expectedOutput": "Centroid: (5.00, 7.50)",
        "isHidden": false
      },
      {
        "id": "c-struct-2-tc-3",
        "input": "4\n0.0 0.0\n10.0 0.0\n10.0 10.0\n0.0 10.0",
        "expectedOutput": "Centroid: (5.00, 5.00)",
        "isHidden": false
      },
      {
        "id": "c-struct-2-tc-4",
        "input": "2\n-5.0 -5.0\n5.0 5.0",
        "expectedOutput": "Centroid: (0.00, 0.00)",
        "isHidden": true
      },
      {
        "id": "c-struct-2-tc-5",
        "input": "3\n1.0 2.0\n3.0 4.0\n5.0 6.0",
        "expectedOutput": "Centroid: (3.00, 4.00)",
        "isHidden": true
      },
      {
        "id": "c-struct-2-tc-6",
        "input": "2\n-10.0 20.0\n10.0 -20.0",
        "expectedOutput": "Centroid: (0.00, 0.00)",
        "isHidden": true
      },
      {
        "id": "c-struct-2-tc-7",
        "input": "4\n1.5 2.5\n3.5 4.5\n5.5 6.5\n7.5 8.5",
        "expectedOutput": "Centroid: (4.50, 5.50)",
        "isHidden": true
      },
      {
        "id": "c-struct-2-tc-8",
        "input": "3\n2.0 3.0\n4.0 6.0\n6.0 9.0",
        "expectedOutput": "Centroid: (4.00, 6.00)",
        "isHidden": true
      },
      {
        "id": "c-struct-2-tc-9",
        "input": "2\n100.0 200.0\n300.0 400.0",
        "expectedOutput": "Centroid: (200.00, 300.00)",
        "isHidden": true
      },
      {
        "id": "c-struct-2-tc-10",
        "input": "5\n1.0 1.0\n2.0 2.0\n3.0 3.0\n4.0 4.0\n5.0 5.0",
        "expectedOutput": "Centroid: (3.00, 3.00)",
        "isHidden": true
      }
    ]
  },
  {
    "id": "c-struct-3",
    "languageId": "c",
    "language": "c",
    "level": "intermediate",
    "topicId": "c-structs-and-typedef",
    "title": "Complex Number Arithmetic via Structs",
    "slug": "complex-number-arithmetic-via-structs",
    "difficulty": "medium",
    "problemStatement": "Define a struct `Complex { double real; double imag; };`. Implement addition: (a+bi)+(c+di) = (a+c)+(b+d)i and multiplication: (a+bi)*(c+di) = (ac-bd)+(ad+bc)i. Given two complex numbers, print their sum and product in the format \"<real> + <imag>i\" (rounded to 2 decimals; if imag is negative, use \"<real> - <|imag|>i\").",
    "description": "Define a struct `Complex { double real; double imag; };`. Implement addition: (a+bi)+(c+di) = (a+c)+(b+d)i and multiplication: (a+bi)*(c+di) = (ac-bd)+(ad+bc)i. Given two complex numbers, print their sum and product in the format \"<real> + <imag>i\" (rounded to 2 decimals; if imag is negative, use \"<real> - <|imag|>i\").",
    "inputFormat": "Four doubles: a b c d representing (a + bi) and (c + di).",
    "outputFormat": "Two lines: \"Sum: ...\" and \"Prod: ...\"",
    "constraints": [
      "-1000 <= a, b, c, d <= 1000"
    ],
    "examples": [
      {
        "input": "2 3 4 5",
        "output": "Sum: 6.00 + 8.00i\nProd: -7.00 + 22.00i"
      }
    ],
    "starterCode": {
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "c-struct-3-tc-1",
        "input": "2 3 4 5",
        "expectedOutput": "Sum: 6.00 + 8.00i\nProd: -7.00 + 22.00i",
        "isHidden": false
      },
      {
        "id": "c-struct-3-tc-2",
        "input": "1 2 1 -2",
        "expectedOutput": "Sum: 2.00 + 0.00i\nProd: 5.00 + 0.00i",
        "isHidden": false
      },
      {
        "id": "c-struct-3-tc-3",
        "input": "0 1 0 1",
        "expectedOutput": "Sum: 0.00 + 2.00i\nProd: -1.00 + 0.00i",
        "isHidden": false
      },
      {
        "id": "c-struct-3-tc-4",
        "input": "3 0 5 0",
        "expectedOutput": "Sum: 8.00 + 0.00i\nProd: 15.00 + 0.00i",
        "isHidden": true
      },
      {
        "id": "c-struct-3-tc-5",
        "input": "2 -3 4 2",
        "expectedOutput": "Sum: 6.00 - 1.00i\nProd: 14.00 - 8.00i",
        "isHidden": true
      },
      {
        "id": "c-struct-3-tc-6",
        "input": "5 5 2 2",
        "expectedOutput": "Sum: 7.00 + 7.00i\nProd: 0.00 + 20.00i",
        "isHidden": true
      },
      {
        "id": "c-struct-3-tc-7",
        "input": "-1 -1 -1 -1",
        "expectedOutput": "Sum: -2.00 - 2.00i\nProd: 0.00 + 2.00i",
        "isHidden": true
      },
      {
        "id": "c-struct-3-tc-8",
        "input": "4 3 4 -3",
        "expectedOutput": "Sum: 8.00 + 0.00i\nProd: 25.00 + 0.00i",
        "isHidden": true
      },
      {
        "id": "c-struct-3-tc-9",
        "input": "1 1 2 3",
        "expectedOutput": "Sum: 3.00 + 4.00i\nProd: -1.00 + 5.00i",
        "isHidden": true
      },
      {
        "id": "c-struct-3-tc-10",
        "input": "10 0 0 10",
        "expectedOutput": "Sum: 10.00 + 10.00i\nProd: 0.00 + 100.00i",
        "isHidden": true
      }
    ]
  },
  {
    "id": "c-union-1",
    "languageId": "c",
    "language": "c",
    "level": "intermediate",
    "topicId": "c-unions-and-enums",
    "title": "Tagged Union Data Packet Parser",
    "slug": "tagged-union-data-packet-parser",
    "difficulty": "medium",
    "problemStatement": "In C, tagged unions save memory by combining an enum discriminator with a union payload: `typedef enum { TYPE_INT = 1, TYPE_FLOAT = 2, TYPE_CHAR = 3 } Tag; union Val { int i; float f; char c; };`. Given a tag code (1, 2, or 3) and value token, read it into the tagged union and print \"Parsed: INT <val>\", \"Parsed: FLOAT <val rounded to 2 decimals>\", or \"Parsed: CHAR <val>\".",
    "description": "In C, tagged unions save memory by combining an enum discriminator with a union payload: `typedef enum { TYPE_INT = 1, TYPE_FLOAT = 2, TYPE_CHAR = 3 } Tag; union Val { int i; float f; char c; };`. Given a tag code (1, 2, or 3) and value token, read it into the tagged union and print \"Parsed: INT <val>\", \"Parsed: FLOAT <val rounded to 2 decimals>\", or \"Parsed: CHAR <val>\".",
    "inputFormat": "Tag integer followed by value token.",
    "outputFormat": "Formatted string describing parsed type and value.",
    "constraints": [
      "Tag in {1, 2, 3}"
    ],
    "examples": [
      {
        "input": "1 42",
        "output": "Parsed: INT 42"
      },
      {
        "input": "2 3.1415",
        "output": "Parsed: FLOAT 3.14"
      }
    ],
    "starterCode": {
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "c-union-1-tc-1",
        "input": "1 42",
        "expectedOutput": "Parsed: INT 42",
        "isHidden": false
      },
      {
        "id": "c-union-1-tc-2",
        "input": "2 3.1415",
        "expectedOutput": "Parsed: FLOAT 3.14",
        "isHidden": false
      },
      {
        "id": "c-union-1-tc-3",
        "input": "3 X",
        "expectedOutput": "Parsed: CHAR X",
        "isHidden": false
      },
      {
        "id": "c-union-1-tc-4",
        "input": "1 -99",
        "expectedOutput": "Parsed: INT -99",
        "isHidden": true
      },
      {
        "id": "c-union-1-tc-5",
        "input": "2 100.5",
        "expectedOutput": "Parsed: FLOAT 100.50",
        "isHidden": true
      },
      {
        "id": "c-union-1-tc-6",
        "input": "3 #",
        "expectedOutput": "Parsed: CHAR #",
        "isHidden": true
      },
      {
        "id": "c-union-1-tc-7",
        "input": "1 0",
        "expectedOutput": "Parsed: INT 0",
        "isHidden": true
      },
      {
        "id": "c-union-1-tc-8",
        "input": "2 0.001",
        "expectedOutput": "Parsed: FLOAT 0.00",
        "isHidden": true
      },
      {
        "id": "c-union-1-tc-9",
        "input": "3 z",
        "expectedOutput": "Parsed: CHAR z",
        "isHidden": true
      },
      {
        "id": "c-union-1-tc-10",
        "input": "2 -45.75",
        "expectedOutput": "Parsed: FLOAT -45.75",
        "isHidden": true
      }
    ]
  },
  {
    "id": "c-union-2",
    "languageId": "c",
    "language": "c",
    "level": "intermediate",
    "topicId": "c-unions-and-enums",
    "title": "Day of Week Enum Offset Calculator",
    "slug": "day-of-week-enum-offset-calculator",
    "difficulty": "easy",
    "problemStatement": "Define an enumeration `enum Day { SUN=0, MON=1, TUE=2, WED=3, THU=4, FRI=5, SAT=6 };`. Given a starting day index (0-6) and k days forward, compute (start + k) % 7 and print the full name of the resulting day (Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday).",
    "description": "Define an enumeration `enum Day { SUN=0, MON=1, TUE=2, WED=3, THU=4, FRI=5, SAT=6 };`. Given a starting day index (0-6) and k days forward, compute (start + k) % 7 and print the full name of the resulting day (Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday).",
    "inputFormat": "Two integers: startDay (0-6) and k (k >= 0).",
    "outputFormat": "Name of the day of the week.",
    "constraints": [
      "0 <= startDay <= 6",
      "0 <= k <= 10000"
    ],
    "examples": [
      {
        "input": "1 3",
        "output": "Thursday"
      }
    ],
    "starterCode": {
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "c-union-2-tc-1",
        "input": "1 3",
        "expectedOutput": "Thursday",
        "isHidden": false
      },
      {
        "id": "c-union-2-tc-2",
        "input": "0 7",
        "expectedOutput": "Sunday",
        "isHidden": false
      },
      {
        "id": "c-union-2-tc-3",
        "input": "5 2",
        "expectedOutput": "Sunday",
        "isHidden": false
      },
      {
        "id": "c-union-2-tc-4",
        "input": "6 1",
        "expectedOutput": "Sunday",
        "isHidden": true
      },
      {
        "id": "c-union-2-tc-5",
        "input": "2 10",
        "expectedOutput": "Friday",
        "isHidden": true
      },
      {
        "id": "c-union-2-tc-6",
        "input": "4 14",
        "expectedOutput": "Thursday",
        "isHidden": true
      },
      {
        "id": "c-union-2-tc-7",
        "input": "3 0",
        "expectedOutput": "Wednesday",
        "isHidden": true
      },
      {
        "id": "c-union-2-tc-8",
        "input": "0 1",
        "expectedOutput": "Monday",
        "isHidden": true
      },
      {
        "id": "c-union-2-tc-9",
        "input": "5 5",
        "expectedOutput": "Wednesday",
        "isHidden": true
      },
      {
        "id": "c-union-2-tc-10",
        "input": "6 100",
        "expectedOutput": "Monday",
        "isHidden": true
      }
    ]
  },
  {
    "id": "c-union-3",
    "languageId": "c",
    "language": "c",
    "level": "intermediate",
    "topicId": "c-unions-and-enums",
    "title": "Raw Byte Inspector of Float using Union",
    "slug": "raw-byte-inspector-of-float-using-union",
    "difficulty": "hard",
    "problemStatement": "In systems programming, unions allow type-punning to inspect raw bytes of a memory block: `union FloatBytes { float f; unsigned char bytes[4]; };`. Read a float f, copy it into the union, and print the 4 bytes in hexadecimal format separated by spaces (e.g., \"%02X %02X %02X %02X\").",
    "description": "In systems programming, unions allow type-punning to inspect raw bytes of a memory block: `union FloatBytes { float f; unsigned char bytes[4]; };`. Read a float f, copy it into the union, and print the 4 bytes in hexadecimal format separated by spaces (e.g., \"%02X %02X %02X %02X\").",
    "inputFormat": "A single float value.",
    "outputFormat": "Four 2-digit uppercase hex bytes separated by spaces.",
    "constraints": [
      "Float value representable in standard IEEE 754 32-bit float."
    ],
    "examples": [
      {
        "input": "0.0",
        "output": "00 00 00 00"
      }
    ],
    "starterCode": {
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "c-union-3-tc-1",
        "input": "0.0",
        "expectedOutput": "00 00 00 00",
        "isHidden": false
      },
      {
        "id": "c-union-3-tc-2",
        "input": "1.0",
        "expectedOutput": "00 00 80 3F",
        "isHidden": false
      },
      {
        "id": "c-union-3-tc-3",
        "input": "-1.0",
        "expectedOutput": "00 00 80 BF",
        "isHidden": false
      },
      {
        "id": "c-union-3-tc-4",
        "input": "2.0",
        "expectedOutput": "00 00 00 40",
        "isHidden": true
      },
      {
        "id": "c-union-3-tc-5",
        "input": "0.5",
        "expectedOutput": "00 00 00 3F",
        "isHidden": true
      },
      {
        "id": "c-union-3-tc-6",
        "input": "-0.5",
        "expectedOutput": "00 00 00 BF",
        "isHidden": true
      },
      {
        "id": "c-union-3-tc-7",
        "input": "4.0",
        "expectedOutput": "00 00 80 40",
        "isHidden": true
      },
      {
        "id": "c-union-3-tc-8",
        "input": "100.0",
        "expectedOutput": "00 00 C8 42",
        "isHidden": true
      },
      {
        "id": "c-union-3-tc-9",
        "input": "10.0",
        "expectedOutput": "00 00 20 41",
        "isHidden": true
      },
      {
        "id": "c-union-3-tc-10",
        "input": "256.0",
        "expectedOutput": "00 00 80 43",
        "isHidden": true
      }
    ]
  },
  {
    "id": "c-heap-1",
    "languageId": "c",
    "language": "c",
    "level": "intermediate",
    "topicId": "c-malloc-calloc-free",
    "title": "Dynamic Array Allocation with malloc",
    "slug": "dynamic-array-allocation-with-malloc",
    "difficulty": "medium",
    "problemStatement": "Read an integer n, dynamically allocate an array of n integers using `int *arr = (int *)malloc(n * sizeof(int))`. Read n integers into the array. Given a threshold value k, count how many elements are strictly greater than k. Free the allocated memory before exiting and print the count.",
    "description": "Read an integer n, dynamically allocate an array of n integers using `int *arr = (int *)malloc(n * sizeof(int))`. Read n integers into the array. Given a threshold value k, count how many elements are strictly greater than k. Free the allocated memory before exiting and print the count.",
    "inputFormat": "First line n. Second line n integers. Third line threshold k.",
    "outputFormat": "Count of elements greater than k.",
    "constraints": [
      "1 <= n <= 10000"
    ],
    "examples": [
      {
        "input": "5\n10 20 30 40 50\n25",
        "output": "3"
      }
    ],
    "starterCode": {
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "c-heap-1-tc-1",
        "input": "5\n10 20 30 40 50\n25",
        "expectedOutput": "3",
        "isHidden": false
      },
      {
        "id": "c-heap-1-tc-2",
        "input": "4\n1 2 3 4\n5",
        "expectedOutput": "0",
        "isHidden": false
      },
      {
        "id": "c-heap-1-tc-3",
        "input": "4\n5 10 15 20\n0",
        "expectedOutput": "4",
        "isHidden": false
      },
      {
        "id": "c-heap-1-tc-4",
        "input": "6\n-10 0 10 20 30 40\n10",
        "expectedOutput": "3",
        "isHidden": true
      },
      {
        "id": "c-heap-1-tc-5",
        "input": "3\n100 200 300\n100",
        "expectedOutput": "2",
        "isHidden": true
      },
      {
        "id": "c-heap-1-tc-6",
        "input": "5\n7 7 7 7 7\n7",
        "expectedOutput": "0",
        "isHidden": true
      },
      {
        "id": "c-heap-1-tc-7",
        "input": "5\n8 8 8 8 8\n7",
        "expectedOutput": "5",
        "isHidden": true
      },
      {
        "id": "c-heap-1-tc-8",
        "input": "1\n42\n41",
        "expectedOutput": "1",
        "isHidden": true
      },
      {
        "id": "c-heap-1-tc-9",
        "input": "6\n15 25 35 45 55 65\n40",
        "expectedOutput": "3",
        "isHidden": true
      },
      {
        "id": "c-heap-1-tc-10",
        "input": "4\n-5 -2 0 3\n-3",
        "expectedOutput": "3",
        "isHidden": true
      }
    ]
  },
  {
    "id": "c-heap-2",
    "languageId": "c",
    "language": "c",
    "level": "intermediate",
    "topicId": "c-malloc-calloc-free",
    "title": "Dynamic 2D Matrix with calloc and Row Sums",
    "slug": "dynamic-2d-matrix-with-calloc-and-row-sums",
    "difficulty": "medium",
    "problemStatement": "Use dynamic heap allocation to create a 2D matrix of dimensions rows R and cols C. Populate the elements from standard input. Compute and print the sum of each row on separate lines. Ensure all allocated row arrays and the pointer array are freed.",
    "description": "Use dynamic heap allocation to create a 2D matrix of dimensions rows R and cols C. Populate the elements from standard input. Compute and print the sum of each row on separate lines. Ensure all allocated row arrays and the pointer array are freed.",
    "inputFormat": "First line R and C. Next R lines each have C integers.",
    "outputFormat": "R lines, each with the sum of that row.",
    "constraints": [
      "1 <= R, C <= 100"
    ],
    "examples": [
      {
        "input": "2 3\n1 2 3\n4 5 6",
        "output": "6\n15"
      }
    ],
    "starterCode": {
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "c-heap-2-tc-1",
        "input": "2 3\n1 2 3\n4 5 6",
        "expectedOutput": "6\n15",
        "isHidden": false
      },
      {
        "id": "c-heap-2-tc-2",
        "input": "1 4\n10 20 30 40",
        "expectedOutput": "100",
        "isHidden": false
      },
      {
        "id": "c-heap-2-tc-3",
        "input": "3 2\n5 5\n10 10\n15 15",
        "expectedOutput": "10\n20\n30",
        "isHidden": false
      },
      {
        "id": "c-heap-2-tc-4",
        "input": "2 2\n-5 5\n10 -10",
        "expectedOutput": "0\n0",
        "isHidden": true
      },
      {
        "id": "c-heap-2-tc-5",
        "input": "3 3\n1 0 0\n0 1 0\n0 0 1",
        "expectedOutput": "1\n1\n1",
        "isHidden": true
      },
      {
        "id": "c-heap-2-tc-6",
        "input": "1 1\n42",
        "expectedOutput": "42",
        "isHidden": true
      },
      {
        "id": "c-heap-2-tc-7",
        "input": "4 1\n1\n2\n3\n4",
        "expectedOutput": "1\n2\n3\n4",
        "isHidden": true
      },
      {
        "id": "c-heap-2-tc-8",
        "input": "2 4\n2 4 6 8\n1 3 5 7",
        "expectedOutput": "20\n16",
        "isHidden": true
      },
      {
        "id": "c-heap-2-tc-9",
        "input": "3 2\n100 200\n-50 50\n0 0",
        "expectedOutput": "300\n0\n0",
        "isHidden": true
      },
      {
        "id": "c-heap-2-tc-10",
        "input": "2 3\n7 8 9\n10 11 12",
        "expectedOutput": "24\n33",
        "isHidden": true
      }
    ]
  },
  {
    "id": "c-heap-3",
    "languageId": "c",
    "language": "c",
    "level": "intermediate",
    "topicId": "c-malloc-calloc-free",
    "title": "Dynamic String Duplication on Heap",
    "slug": "dynamic-string-duplication-on-heap",
    "difficulty": "medium",
    "problemStatement": "Implement a function `char *my_strdup_upper(const char *src)` that measures src length, allocates exact `(len + 1) * sizeof(char)` on the heap, copies src converted to uppercase, and returns the heap pointer. Print the duplicated uppercase string and free the pointer.",
    "description": "Implement a function `char *my_strdup_upper(const char *src)` that measures src length, allocates exact `(len + 1) * sizeof(char)` on the heap, copies src converted to uppercase, and returns the heap pointer. Print the duplicated uppercase string and free the pointer.",
    "inputFormat": "A single string.",
    "outputFormat": "Uppercase string.",
    "constraints": [
      "Length <= 500"
    ],
    "examples": [
      {
        "input": "hello world",
        "output": "HELLO WORLD"
      }
    ],
    "starterCode": {
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "c-heap-3-tc-1",
        "input": "hello world",
        "expectedOutput": "HELLO WORLD",
        "isHidden": false
      },
      {
        "id": "c-heap-3-tc-2",
        "input": "c programming",
        "expectedOutput": "C PROGRAMMING",
        "isHidden": false
      },
      {
        "id": "c-heap-3-tc-3",
        "input": "heap memory malloc",
        "expectedOutput": "HEAP MEMORY MALLOC",
        "isHidden": false
      },
      {
        "id": "c-heap-3-tc-4",
        "input": "dynamic",
        "expectedOutput": "DYNAMIC",
        "isHidden": true
      },
      {
        "id": "c-heap-3-tc-5",
        "input": "Systems 2026",
        "expectedOutput": "SYSTEMS 2026",
        "isHidden": true
      },
      {
        "id": "c-heap-3-tc-6",
        "input": "a",
        "expectedOutput": "A",
        "isHidden": true
      },
      {
        "id": "c-heap-3-tc-7",
        "input": "Pointer to Char",
        "expectedOutput": "POINTER TO CHAR",
        "isHidden": true
      },
      {
        "id": "c-heap-3-tc-8",
        "input": "already UPPER",
        "expectedOutput": "ALREADY UPPER",
        "isHidden": true
      },
      {
        "id": "c-heap-3-tc-9",
        "input": "123 testing",
        "expectedOutput": "123 TESTING",
        "isHidden": true
      },
      {
        "id": "c-heap-3-tc-10",
        "input": "lowercase to uppercase",
        "expectedOutput": "LOWERCASE TO UPPERCASE",
        "isHidden": true
      }
    ]
  },
  {
    "id": "c-realloc-1",
    "languageId": "c",
    "language": "c",
    "level": "intermediate",
    "topicId": "c-realloc-and-memory-leaks",
    "title": "Dynamic Resizable Vector Simulation with realloc",
    "slug": "dynamic-resizable-vector-simulation-with-realloc",
    "difficulty": "medium",
    "problemStatement": "Simulate a dynamic array (vector) in C. Start with initial capacity 2 allocated with malloc. Read integers until encountering -1. Whenever the array size reaches capacity, double the capacity using `realloc`. Print \"Size: <size> | Capacity: <capacity>\" followed on the next line by all stored elements separated by space.",
    "description": "Simulate a dynamic array (vector) in C. Start with initial capacity 2 allocated with malloc. Read integers until encountering -1. Whenever the array size reaches capacity, double the capacity using `realloc`. Print \"Size: <size> | Capacity: <capacity>\" followed on the next line by all stored elements separated by space.",
    "inputFormat": "A stream of non-negative integers terminated by -1.",
    "outputFormat": "First line: \"Size: <size> | Capacity: <capacity>\"\nSecond line: space-separated elements.",
    "constraints": [
      "Total elements <= 1000"
    ],
    "examples": [
      {
        "input": "10 20 30 -1",
        "output": "Size: 3 | Capacity: 4\n10 20 30"
      }
    ],
    "starterCode": {
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "c-realloc-1-tc-1",
        "input": "10 20 30 -1",
        "expectedOutput": "Size: 3 | Capacity: 4\n10 20 30",
        "isHidden": false
      },
      {
        "id": "c-realloc-1-tc-2",
        "input": "5 -1",
        "expectedOutput": "Size: 1 | Capacity: 2\n5",
        "isHidden": false
      },
      {
        "id": "c-realloc-1-tc-3",
        "input": "1 2 -1",
        "expectedOutput": "Size: 2 | Capacity: 2\n1 2",
        "isHidden": false
      },
      {
        "id": "c-realloc-1-tc-4",
        "input": "1 2 3 4 5 -1",
        "expectedOutput": "Size: 5 | Capacity: 8\n1 2 3 4 5",
        "isHidden": true
      },
      {
        "id": "c-realloc-1-tc-5",
        "input": "7 8 9 10 -1",
        "expectedOutput": "Size: 4 | Capacity: 4\n7 8 9 10",
        "isHidden": true
      },
      {
        "id": "c-realloc-1-tc-6",
        "input": "100 200 300 400 500 600 700 800 900 -1",
        "expectedOutput": "Size: 9 | Capacity: 16\n100 200 300 400 500 600 700 800 900",
        "isHidden": true
      },
      {
        "id": "c-realloc-1-tc-7",
        "input": "42 -1",
        "expectedOutput": "Size: 1 | Capacity: 2\n42",
        "isHidden": true
      },
      {
        "id": "c-realloc-1-tc-8",
        "input": "10 20 30 40 50 60 -1",
        "expectedOutput": "Size: 6 | Capacity: 8\n10 20 30 40 50 60",
        "isHidden": true
      },
      {
        "id": "c-realloc-1-tc-9",
        "input": "3 3 3 -1",
        "expectedOutput": "Size: 3 | Capacity: 4\n3 3 3",
        "isHidden": true
      },
      {
        "id": "c-realloc-1-tc-10",
        "input": "1 1 1 1 1 1 1 -1",
        "expectedOutput": "Size: 7 | Capacity: 8\n1 1 1 1 1 1 1",
        "isHidden": true
      }
    ]
  },
  {
    "id": "c-realloc-2",
    "languageId": "c",
    "language": "c",
    "level": "intermediate",
    "topicId": "c-realloc-and-memory-leaks",
    "title": "Dynamic String Concatenator with realloc",
    "slug": "dynamic-string-concatenator-with-realloc",
    "difficulty": "medium",
    "problemStatement": "Read an integer N, followed by N words. Starting with a heap buffer containing the first word, use `realloc` to expand the buffer just enough to append each subsequent word separated by a space. Free memory at the end and print the full sentence.",
    "description": "Read an integer N, followed by N words. Starting with a heap buffer containing the first word, use `realloc` to expand the buffer just enough to append each subsequent word separated by a space. Free memory at the end and print the full sentence.",
    "inputFormat": "First line N. Second line N space-separated words.",
    "outputFormat": "Full concatenated sentence.",
    "constraints": [
      "1 <= N <= 100",
      "Word length <= 50"
    ],
    "examples": [
      {
        "input": "3\nC is fast",
        "output": "C is fast"
      }
    ],
    "starterCode": {
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "c-realloc-2-tc-1",
        "input": "3\nC is fast",
        "expectedOutput": "C is fast",
        "isHidden": false
      },
      {
        "id": "c-realloc-2-tc-2",
        "input": "1\nStandalone",
        "expectedOutput": "Standalone",
        "isHidden": false
      },
      {
        "id": "c-realloc-2-tc-3",
        "input": "4\nMemory leaks are bad",
        "expectedOutput": "Memory leaks are bad",
        "isHidden": false
      },
      {
        "id": "c-realloc-2-tc-4",
        "input": "5\nHeap allocation with realloc works",
        "expectedOutput": "Heap allocation with realloc works",
        "isHidden": true
      },
      {
        "id": "c-realloc-2-tc-5",
        "input": "2\nHello World",
        "expectedOutput": "Hello World",
        "isHidden": true
      },
      {
        "id": "c-realloc-2-tc-6",
        "input": "6\nThe quick brown fox jumps over",
        "expectedOutput": "The quick brown fox jumps over",
        "isHidden": true
      },
      {
        "id": "c-realloc-2-tc-7",
        "input": "3\nSystems engineering rocks",
        "expectedOutput": "Systems engineering rocks",
        "isHidden": true
      },
      {
        "id": "c-realloc-2-tc-8",
        "input": "4\nOne two three four",
        "expectedOutput": "One two three four",
        "isHidden": true
      },
      {
        "id": "c-realloc-2-tc-9",
        "input": "2\nPointer Arithmetic",
        "expectedOutput": "Pointer Arithmetic",
        "isHidden": true
      },
      {
        "id": "c-realloc-2-tc-10",
        "input": "5\nBuild fast low level tools",
        "expectedOutput": "Build fast low level tools",
        "isHidden": true
      }
    ]
  },
  {
    "id": "c-realloc-3",
    "languageId": "c",
    "language": "c",
    "level": "intermediate",
    "topicId": "c-realloc-and-memory-leaks",
    "title": "Shrink-To-Fit Dynamic Memory Optimization",
    "slug": "shrink-to-fit-dynamic-memory-optimization",
    "difficulty": "medium",
    "problemStatement": "Given an array allocated with capacity 10, fill it with n integers (1 <= n <= 10). Then use `realloc` to resize the allocated block to exactly `n * sizeof(int)`. Compute the sum of the elements and print: \"Resized to: <n> elements | Sum: <sum>\". Free the block.",
    "description": "Given an array allocated with capacity 10, fill it with n integers (1 <= n <= 10). Then use `realloc` to resize the allocated block to exactly `n * sizeof(int)`. Compute the sum of the elements and print: \"Resized to: <n> elements | Sum: <sum>\". Free the block.",
    "inputFormat": "First line n. Second line n integers.",
    "outputFormat": "\"Resized to: <n> elements | Sum: <sum>\"",
    "constraints": [
      "1 <= n <= 10"
    ],
    "examples": [
      {
        "input": "4\n10 20 30 40",
        "output": "Resized to: 4 elements | Sum: 100"
      }
    ],
    "starterCode": {
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "c-realloc-3-tc-1",
        "input": "4\n10 20 30 40",
        "expectedOutput": "Resized to: 4 elements | Sum: 100",
        "isHidden": false
      },
      {
        "id": "c-realloc-3-tc-2",
        "input": "1\n50",
        "expectedOutput": "Resized to: 1 elements | Sum: 50",
        "isHidden": false
      },
      {
        "id": "c-realloc-3-tc-3",
        "input": "5\n1 2 3 4 5",
        "expectedOutput": "Resized to: 5 elements | Sum: 15",
        "isHidden": false
      },
      {
        "id": "c-realloc-3-tc-4",
        "input": "2\n-10 10",
        "expectedOutput": "Resized to: 2 elements | Sum: 0",
        "isHidden": true
      },
      {
        "id": "c-realloc-3-tc-5",
        "input": "3\n100 200 300",
        "expectedOutput": "Resized to: 3 elements | Sum: 600",
        "isHidden": true
      },
      {
        "id": "c-realloc-3-tc-6",
        "input": "6\n2 4 6 8 10 12",
        "expectedOutput": "Resized to: 6 elements | Sum: 42",
        "isHidden": true
      },
      {
        "id": "c-realloc-3-tc-7",
        "input": "7\n5 5 5 5 5 5 5",
        "expectedOutput": "Resized to: 7 elements | Sum: 35",
        "isHidden": true
      },
      {
        "id": "c-realloc-3-tc-8",
        "input": "8\n1 1 1 1 1 1 1 1",
        "expectedOutput": "Resized to: 8 elements | Sum: 8",
        "isHidden": true
      },
      {
        "id": "c-realloc-3-tc-9",
        "input": "2\n99 1",
        "expectedOutput": "Resized to: 2 elements | Sum: 100",
        "isHidden": true
      },
      {
        "id": "c-realloc-3-tc-10",
        "input": "10\n1 2 3 4 5 6 7 8 9 10",
        "expectedOutput": "Resized to: 10 elements | Sum: 55",
        "isHidden": true
      }
    ]
  },
  {
    "id": "c-file-1",
    "languageId": "c",
    "language": "c",
    "level": "advanced",
    "topicId": "c-file-handling-io",
    "title": "CSV Record Stream Serializer",
    "slug": "csv-record-stream-serializer",
    "difficulty": "medium",
    "problemStatement": "In C file and stream handling, comma-separated records are parsed with scanf/sscanf. Given a stream of records in the format \"ID,NAME,SCORE\", parse each record and format it as: \"[#<ID>] <NAME> -> <SCORE> pts\". Print each on a new line.",
    "description": "In C file and stream handling, comma-separated records are parsed with scanf/sscanf. Given a stream of records in the format \"ID,NAME,SCORE\", parse each record and format it as: \"[#<ID>] <NAME> -> <SCORE> pts\". Print each on a new line.",
    "inputFormat": "An integer N followed by N comma-separated strings \"ID,NAME,SCORE\".",
    "outputFormat": "N formatted lines: \"[#<ID>] <NAME> -> <SCORE> pts\"",
    "constraints": [
      "1 <= N <= 100"
    ],
    "examples": [
      {
        "input": "2\n101,Alice,95\n102,Bob,88",
        "output": "[#101] Alice -> 95 pts\n[#102] Bob -> 88 pts"
      }
    ],
    "starterCode": {
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "c-file-1-tc-1",
        "input": "2\n101,Alice,95\n102,Bob,88",
        "expectedOutput": "[#101] Alice -> 95 pts\n[#102] Bob -> 88 pts",
        "isHidden": false
      },
      {
        "id": "c-file-1-tc-2",
        "input": "1\n1,Root,100",
        "expectedOutput": "[#1] Root -> 100 pts",
        "isHidden": false
      },
      {
        "id": "c-file-1-tc-3",
        "input": "3\n10,Alpha,70\n20,Beta,80\n30,Gamma,90",
        "expectedOutput": "[#10] Alpha -> 70 pts\n[#20] Beta -> 80 pts\n[#30] Gamma -> 90 pts",
        "isHidden": false
      },
      {
        "id": "c-file-1-tc-4",
        "input": "2\n501,Server,99\n502,Client,94",
        "expectedOutput": "[#501] Server -> 99 pts\n[#502] Client -> 94 pts",
        "isHidden": true
      },
      {
        "id": "c-file-1-tc-5",
        "input": "1\n999,Admin,50",
        "expectedOutput": "[#999] Admin -> 50 pts",
        "isHidden": true
      },
      {
        "id": "c-file-1-tc-6",
        "input": "3\n5,John,65\n6,Jane,75\n7,Jack,85",
        "expectedOutput": "[#5] John -> 65 pts\n[#6] Jane -> 75 pts\n[#7] Jack -> 85 pts",
        "isHidden": true
      },
      {
        "id": "c-file-1-tc-7",
        "input": "2\n11,Dev,88\n22,Ops,92",
        "expectedOutput": "[#11] Dev -> 88 pts\n[#22] Ops -> 92 pts",
        "isHidden": true
      },
      {
        "id": "c-file-1-tc-8",
        "input": "1\n77,Lucky,77",
        "expectedOutput": "[#77] Lucky -> 77 pts",
        "isHidden": true
      },
      {
        "id": "c-file-1-tc-9",
        "input": "3\n100,UserA,10\n101,UserB,20\n102,UserC,30",
        "expectedOutput": "[#100] UserA -> 10 pts\n[#101] UserB -> 20 pts\n[#102] UserC -> 30 pts",
        "isHidden": true
      },
      {
        "id": "c-file-1-tc-10",
        "input": "2\n1,First,100\n2,Last,0",
        "expectedOutput": "[#1] First -> 100 pts\n[#2] Last -> 0 pts",
        "isHidden": true
      }
    ]
  },
  {
    "id": "c-file-2",
    "languageId": "c",
    "language": "c",
    "level": "advanced",
    "topicId": "c-file-handling-io",
    "title": "Hex Dump Stream Formatter",
    "slug": "hex-dump-stream-formatter",
    "difficulty": "medium",
    "problemStatement": "Systems I/O inspects binary stream dumps. Given an ASCII string, output its hexadecimal dump representation where each character byte is printed as a two-digit uppercase hex value separated by spaces.",
    "description": "Systems I/O inspects binary stream dumps. Given an ASCII string, output its hexadecimal dump representation where each character byte is printed as a two-digit uppercase hex value separated by spaces.",
    "inputFormat": "A string line.",
    "outputFormat": "Space-separated uppercase hex bytes.",
    "constraints": [
      "Length <= 200"
    ],
    "examples": [
      {
        "input": "Hello",
        "output": "48 65 6C 6C 6F"
      }
    ],
    "starterCode": {
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "c-file-2-tc-1",
        "input": "Hello",
        "expectedOutput": "48 65 6C 6C 6F",
        "isHidden": false
      },
      {
        "id": "c-file-2-tc-2",
        "input": "C",
        "expectedOutput": "43",
        "isHidden": false
      },
      {
        "id": "c-file-2-tc-3",
        "input": "POSIX",
        "expectedOutput": "50 4F 53 49 58",
        "isHidden": false
      },
      {
        "id": "c-file-2-tc-4",
        "input": "Linux",
        "expectedOutput": "4C 69 6E 75 78",
        "isHidden": true
      },
      {
        "id": "c-file-2-tc-5",
        "input": "123",
        "expectedOutput": "31 32 33",
        "isHidden": true
      },
      {
        "id": "c-file-2-tc-6",
        "input": "Byte",
        "expectedOutput": "42 79 74 65",
        "isHidden": true
      },
      {
        "id": "c-file-2-tc-7",
        "input": "Data",
        "expectedOutput": "44 61 74 61",
        "isHidden": true
      },
      {
        "id": "c-file-2-tc-8",
        "input": "Test",
        "expectedOutput": "54 65 73 74",
        "isHidden": true
      },
      {
        "id": "c-file-2-tc-9",
        "input": "Kernel",
        "expectedOutput": "4B 65 72 6E 65 6C",
        "isHidden": true
      },
      {
        "id": "c-file-2-tc-10",
        "input": "Stream",
        "expectedOutput": "53 74 72 65 61 6D",
        "isHidden": true
      }
    ]
  },
  {
    "id": "c-file-3",
    "languageId": "c",
    "language": "c",
    "level": "advanced",
    "topicId": "c-file-handling-io",
    "title": "Run-Length Stream Encoder (RLE)",
    "slug": "run-length-stream-encoder-rle",
    "difficulty": "medium",
    "problemStatement": "In binary file compression streams, Run-Length Encoding (RLE) compresses repeated contiguous bytes into count and byte pairs. Given a string of uppercase letters, compress it using RLE format: \"<count><char>\" (e.g. \"AAABB\" -> \"3A2B\").",
    "description": "In binary file compression streams, Run-Length Encoding (RLE) compresses repeated contiguous bytes into count and byte pairs. Given a string of uppercase letters, compress it using RLE format: \"<count><char>\" (e.g. \"AAABB\" -> \"3A2B\").",
    "inputFormat": "A string of characters.",
    "outputFormat": "RLE compressed string.",
    "constraints": [
      "Length <= 500"
    ],
    "examples": [
      {
        "input": "AAABB",
        "output": "3A2B"
      }
    ],
    "starterCode": {
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "c-file-3-tc-1",
        "input": "AAABB",
        "expectedOutput": "3A2B",
        "isHidden": false
      },
      {
        "id": "c-file-3-tc-2",
        "input": "A",
        "expectedOutput": "1A",
        "isHidden": false
      },
      {
        "id": "c-file-3-tc-3",
        "input": "WWWWWWWWWWWWBWWWWWWWWWWWWBBB",
        "expectedOutput": "12W1B12W3B",
        "isHidden": false
      },
      {
        "id": "c-file-3-tc-4",
        "input": "ABCD",
        "expectedOutput": "1A1B1C1D",
        "isHidden": true
      },
      {
        "id": "c-file-3-tc-5",
        "input": "AAAAA",
        "expectedOutput": "5A",
        "isHidden": true
      },
      {
        "id": "c-file-3-tc-6",
        "input": "AABBBCCCC",
        "expectedOutput": "2A3B4C",
        "isHidden": true
      },
      {
        "id": "c-file-3-tc-7",
        "input": "XYZ",
        "expectedOutput": "1X1Y1Z",
        "isHidden": true
      },
      {
        "id": "c-file-3-tc-8",
        "input": "ZZZZZZZZZZ",
        "expectedOutput": "10Z",
        "isHidden": true
      },
      {
        "id": "c-file-3-tc-9",
        "input": "BBAAAAB",
        "expectedOutput": "2B4A1B",
        "isHidden": true
      },
      {
        "id": "c-file-3-tc-10",
        "input": "MMMNNOOOPP",
        "expectedOutput": "3M2N3O2P",
        "isHidden": true
      }
    ]
  },
  {
    "id": "c-macro-1",
    "languageId": "c",
    "language": "c",
    "level": "advanced",
    "topicId": "c-preprocessor-and-macros",
    "title": "Mathematical Utility Preprocessor Macros",
    "slug": "mathematical-utility-preprocessor-macros",
    "difficulty": "easy",
    "problemStatement": "Implement macros `#define MAX(a, b) (((a) > (b)) ? (a) : (b))` and `#define CLAMP(x, low, high) (((x) < (low)) ? (low) : (((x) > (high)) ? (high) : (x)))`. Given val, low, high, print the clamped value using the macros.",
    "description": "Implement macros `#define MAX(a, b) (((a) > (b)) ? (a) : (b))` and `#define CLAMP(x, low, high) (((x) < (low)) ? (low) : (((x) > (high)) ? (high) : (x)))`. Given val, low, high, print the clamped value using the macros.",
    "inputFormat": "Three space-separated integers: val, low, high.",
    "outputFormat": "Clamped integer.",
    "constraints": [
      "low <= high",
      "-10000 <= val, low, high <= 10000"
    ],
    "examples": [
      {
        "input": "15 0 10",
        "output": "10"
      },
      {
        "input": "-5 0 10",
        "output": "0"
      }
    ],
    "starterCode": {
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "c-macro-1-tc-1",
        "input": "15 0 10",
        "expectedOutput": "10",
        "isHidden": false
      },
      {
        "id": "c-macro-1-tc-2",
        "input": "-5 0 10",
        "expectedOutput": "0",
        "isHidden": false
      },
      {
        "id": "c-macro-1-tc-3",
        "input": "7 0 10",
        "expectedOutput": "7",
        "isHidden": false
      },
      {
        "id": "c-macro-1-tc-4",
        "input": "100 50 150",
        "expectedOutput": "100",
        "isHidden": true
      },
      {
        "id": "c-macro-1-tc-5",
        "input": "25 50 150",
        "expectedOutput": "50",
        "isHidden": true
      },
      {
        "id": "c-macro-1-tc-6",
        "input": "200 50 150",
        "expectedOutput": "150",
        "isHidden": true
      },
      {
        "id": "c-macro-1-tc-7",
        "input": "-10 -20 -5",
        "expectedOutput": "-10",
        "isHidden": true
      },
      {
        "id": "c-macro-1-tc-8",
        "input": "-30 -20 -5",
        "expectedOutput": "-20",
        "isHidden": true
      },
      {
        "id": "c-macro-1-tc-9",
        "input": "0 -20 -5",
        "expectedOutput": "-5",
        "isHidden": true
      },
      {
        "id": "c-macro-1-tc-10",
        "input": "42 42 42",
        "expectedOutput": "42",
        "isHidden": true
      }
    ]
  },
  {
    "id": "c-macro-2",
    "languageId": "c",
    "language": "c",
    "level": "advanced",
    "topicId": "c-preprocessor-and-macros",
    "title": "Bit Flag Macros (SET, CLEAR, CHECK)",
    "slug": "bit-flag-macros-set-clear-check",
    "difficulty": "medium",
    "problemStatement": "Write macros `#define SET_BIT(n, k) ((n) | (1U << (k)))`, `#define CLEAR_BIT(n, k) ((n) & ~(1U << (k)))`, `#define CHECK_BIT(n, k) (((n) >> (k)) & 1U)`. Given integer n, bit position k, and operation op (\"SET\", \"CLEAR\", \"CHECK\"), perform the operation and print the resulting number (for SET/CLEAR) or the bit value 0 or 1 (for CHECK).",
    "description": "Write macros `#define SET_BIT(n, k) ((n) | (1U << (k)))`, `#define CLEAR_BIT(n, k) ((n) & ~(1U << (k)))`, `#define CHECK_BIT(n, k) (((n) >> (k)) & 1U)`. Given integer n, bit position k, and operation op (\"SET\", \"CLEAR\", \"CHECK\"), perform the operation and print the resulting number (for SET/CLEAR) or the bit value 0 or 1 (for CHECK).",
    "inputFormat": "An integer n, bit position k (0-31), and string op.",
    "outputFormat": "Result integer.",
    "constraints": [
      "0 <= n <= 10^9",
      "0 <= k <= 31"
    ],
    "examples": [
      {
        "input": "8 3 CHECK",
        "output": "1"
      },
      {
        "input": "5 1 SET",
        "output": "7"
      }
    ],
    "starterCode": {
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "c-macro-2-tc-1",
        "input": "8 3 CHECK",
        "expectedOutput": "1",
        "isHidden": false
      },
      {
        "id": "c-macro-2-tc-2",
        "input": "5 1 SET",
        "expectedOutput": "7",
        "isHidden": false
      },
      {
        "id": "c-macro-2-tc-3",
        "input": "7 1 CLEAR",
        "expectedOutput": "5",
        "isHidden": false
      },
      {
        "id": "c-macro-2-tc-4",
        "input": "0 0 SET",
        "expectedOutput": "1",
        "isHidden": true
      },
      {
        "id": "c-macro-2-tc-5",
        "input": "1 0 CLEAR",
        "expectedOutput": "0",
        "isHidden": true
      },
      {
        "id": "c-macro-2-tc-6",
        "input": "10 0 CHECK",
        "expectedOutput": "0",
        "isHidden": true
      },
      {
        "id": "c-macro-2-tc-7",
        "input": "10 1 CHECK",
        "expectedOutput": "1",
        "isHidden": true
      },
      {
        "id": "c-macro-2-tc-8",
        "input": "15 2 CLEAR",
        "expectedOutput": "11",
        "isHidden": true
      },
      {
        "id": "c-macro-2-tc-9",
        "input": "16 4 CHECK",
        "expectedOutput": "1",
        "isHidden": true
      },
      {
        "id": "c-macro-2-tc-10",
        "input": "0 5 SET",
        "expectedOutput": "32",
        "isHidden": true
      }
    ]
  },
  {
    "id": "c-macro-3",
    "languageId": "c",
    "language": "c",
    "level": "advanced",
    "topicId": "c-preprocessor-and-macros",
    "title": "Stringification and Token Pasting Preprocessor Simulation",
    "slug": "stringification-and-token-pasting-preprocessor-simulation",
    "difficulty": "medium",
    "problemStatement": "In C preprocessor, `#` converts a token to a string, and `##` concatenates two tokens. Simulate a lookup macro table: given prefix (e.g. \"CMD\") and code (e.g. \"START\"), output the combined symbol name \"CMD_START\" and its evaluated status \"[SYMBOL: CMD_START REGISTERED]\".",
    "description": "In C preprocessor, `#` converts a token to a string, and `##` concatenates two tokens. Simulate a lookup macro table: given prefix (e.g. \"CMD\") and code (e.g. \"START\"), output the combined symbol name \"CMD_START\" and its evaluated status \"[SYMBOL: CMD_START REGISTERED]\".",
    "inputFormat": "Two space-separated alphanumeric tokens: prefix and suffix.",
    "outputFormat": "\"[SYMBOL: <prefix>_<suffix> REGISTERED]\"",
    "constraints": [
      "Token lengths <= 30"
    ],
    "examples": [
      {
        "input": "CMD START",
        "output": "[SYMBOL: CMD_START REGISTERED]"
      }
    ],
    "starterCode": {
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "c-macro-3-tc-1",
        "input": "CMD START",
        "expectedOutput": "[SYMBOL: CMD_START REGISTERED]",
        "isHidden": false
      },
      {
        "id": "c-macro-3-tc-2",
        "input": "ERR TIMEOUT",
        "expectedOutput": "[SYMBOL: ERR_TIMEOUT REGISTERED]",
        "isHidden": false
      },
      {
        "id": "c-macro-3-tc-3",
        "input": "LOG DEBUG",
        "expectedOutput": "[SYMBOL: LOG_DEBUG REGISTERED]",
        "isHidden": false
      },
      {
        "id": "c-macro-3-tc-4",
        "input": "IO READ",
        "expectedOutput": "[SYMBOL: IO_READ REGISTERED]",
        "isHidden": true
      },
      {
        "id": "c-macro-3-tc-5",
        "input": "NET SOCKET",
        "expectedOutput": "[SYMBOL: NET_SOCKET REGISTERED]",
        "isHidden": true
      },
      {
        "id": "c-macro-3-tc-6",
        "input": "SYS EXIT",
        "expectedOutput": "[SYMBOL: SYS_EXIT REGISTERED]",
        "isHidden": true
      },
      {
        "id": "c-macro-3-tc-7",
        "input": "DEV READY",
        "expectedOutput": "[SYMBOL: DEV_READY REGISTERED]",
        "isHidden": true
      },
      {
        "id": "c-macro-3-tc-8",
        "input": "EVENT TICK",
        "expectedOutput": "[SYMBOL: EVENT_TICK REGISTERED]",
        "isHidden": true
      },
      {
        "id": "c-macro-3-tc-9",
        "input": "FLAG ACTIVE",
        "expectedOutput": "[SYMBOL: FLAG_ACTIVE REGISTERED]",
        "isHidden": true
      },
      {
        "id": "c-macro-3-tc-10",
        "input": "MODE KERNEL",
        "expectedOutput": "[SYMBOL: MODE_KERNEL REGISTERED]",
        "isHidden": true
      }
    ]
  },
  {
    "id": "c-fnptr-1",
    "languageId": "c",
    "language": "c",
    "level": "advanced",
    "topicId": "c-function-pointers-callbacks",
    "title": "Array Filter with Function Pointer Predicate",
    "slug": "array-filter-with-function-pointer-predicate",
    "difficulty": "medium",
    "problemStatement": "Implement a function `int filterArray(const int *in, int n, int *out, int (*predicate)(int))` that applies a function pointer predicate to filter array elements. Implement predicates `isEven(int x)` and `isPositive(int x)`. Given filter choice (\"EVEN\" or \"POSITIVE\") and n elements, print the filtered elements separated by spaces (or \"EMPTY\" if none).",
    "description": "Implement a function `int filterArray(const int *in, int n, int *out, int (*predicate)(int))` that applies a function pointer predicate to filter array elements. Implement predicates `isEven(int x)` and `isPositive(int x)`. Given filter choice (\"EVEN\" or \"POSITIVE\") and n elements, print the filtered elements separated by spaces (or \"EMPTY\" if none).",
    "inputFormat": "First line filter name (\"EVEN\" or \"POSITIVE\"). Second line n. Third line n integers.",
    "outputFormat": "Filtered integers space-separated or \"EMPTY\".",
    "constraints": [
      "1 <= n <= 1000"
    ],
    "examples": [
      {
        "input": "EVEN\n5\n1 2 3 4 5",
        "output": "2 4"
      }
    ],
    "starterCode": {
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "c-fnptr-1-tc-1",
        "input": "EVEN\n5\n1 2 3 4 5",
        "expectedOutput": "2 4",
        "isHidden": false
      },
      {
        "id": "c-fnptr-1-tc-2",
        "input": "POSITIVE\n5\n-2 -1 0 1 2",
        "expectedOutput": "1 2",
        "isHidden": false
      },
      {
        "id": "c-fnptr-1-tc-3",
        "input": "EVEN\n3\n1 3 5",
        "expectedOutput": "EMPTY",
        "isHidden": false
      },
      {
        "id": "c-fnptr-1-tc-4",
        "input": "POSITIVE\n3\n-5 -4 -3",
        "expectedOutput": "EMPTY",
        "isHidden": true
      },
      {
        "id": "c-fnptr-1-tc-5",
        "input": "EVEN\n4\n2 4 6 8",
        "expectedOutput": "2 4 6 8",
        "isHidden": true
      },
      {
        "id": "c-fnptr-1-tc-6",
        "input": "POSITIVE\n4\n10 20 30 40",
        "expectedOutput": "10 20 30 40",
        "isHidden": true
      },
      {
        "id": "c-fnptr-1-tc-7",
        "input": "EVEN\n6\n10 15 20 25 30 35",
        "expectedOutput": "10 20 30",
        "isHidden": true
      },
      {
        "id": "c-fnptr-1-tc-8",
        "input": "POSITIVE\n5\n-10 5 -20 15 0",
        "expectedOutput": "5 15",
        "isHidden": true
      },
      {
        "id": "c-fnptr-1-tc-9",
        "input": "EVEN\n1\n0",
        "expectedOutput": "0",
        "isHidden": true
      },
      {
        "id": "c-fnptr-1-tc-10",
        "input": "POSITIVE\n1\n-1",
        "expectedOutput": "EMPTY",
        "isHidden": true
      }
    ]
  },
  {
    "id": "c-fnptr-2",
    "languageId": "c",
    "language": "c",
    "level": "advanced",
    "topicId": "c-function-pointers-callbacks",
    "title": "Standard Library qsort with Custom Comparators",
    "slug": "standard-library-qsort-with-custom-comparators",
    "difficulty": "medium",
    "problemStatement": "C standard library provides `qsort(void *base, size_t n, size_t size, int (*compar)(const void *, const void *))`. Given sorting mode (\"ASC\", \"DESC\", or \"ABS\" for absolute value ascending), implement the appropriate comparator function pointer and sort the n integers. Print the sorted elements separated by spaces.",
    "description": "C standard library provides `qsort(void *base, size_t n, size_t size, int (*compar)(const void *, const void *))`. Given sorting mode (\"ASC\", \"DESC\", or \"ABS\" for absolute value ascending), implement the appropriate comparator function pointer and sort the n integers. Print the sorted elements separated by spaces.",
    "inputFormat": "First line mode (\"ASC\", \"DESC\", \"ABS\"). Second line n. Third line n integers.",
    "outputFormat": "Sorted integers separated by space.",
    "constraints": [
      "1 <= n <= 1000"
    ],
    "examples": [
      {
        "input": "DESC\n5\n3 1 4 1 5",
        "output": "5 4 3 1 1"
      }
    ],
    "starterCode": {
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "c-fnptr-2-tc-1",
        "input": "DESC\n5\n3 1 4 1 5",
        "expectedOutput": "5 4 3 1 1",
        "isHidden": false
      },
      {
        "id": "c-fnptr-2-tc-2",
        "input": "ASC\n5\n10 5 8 1 7",
        "expectedOutput": "1 5 7 8 10",
        "isHidden": false
      },
      {
        "id": "c-fnptr-2-tc-3",
        "input": "ABS\n5\n-10 2 -3 7 -1",
        "expectedOutput": "-1 2 -3 7 -10",
        "isHidden": false
      },
      {
        "id": "c-fnptr-2-tc-4",
        "input": "ASC\n4\n4 3 2 1",
        "expectedOutput": "1 2 3 4",
        "isHidden": true
      },
      {
        "id": "c-fnptr-2-tc-5",
        "input": "DESC\n3\n10 20 30",
        "expectedOutput": "30 20 10",
        "isHidden": true
      },
      {
        "id": "c-fnptr-2-tc-6",
        "input": "ABS\n4\n-5 5 -2 2",
        "expectedOutput": "-2 2 -5 5",
        "isHidden": true
      },
      {
        "id": "c-fnptr-2-tc-7",
        "input": "ASC\n1\n42",
        "expectedOutput": "42",
        "isHidden": true
      },
      {
        "id": "c-fnptr-2-tc-8",
        "input": "DESC\n4\n-1 -2 -3 -4",
        "expectedOutput": "-1 -2 -3 -4",
        "isHidden": true
      },
      {
        "id": "c-fnptr-2-tc-9",
        "input": "ABS\n3\n0 -10 5",
        "expectedOutput": "0 5 -10",
        "isHidden": true
      },
      {
        "id": "c-fnptr-2-tc-10",
        "input": "ASC\n6\n9 3 7 1 8 2",
        "expectedOutput": "1 2 3 7 8 9",
        "isHidden": true
      }
    ]
  },
  {
    "id": "c-fnptr-3",
    "languageId": "c",
    "language": "c",
    "level": "advanced",
    "topicId": "c-function-pointers-callbacks",
    "title": "Function Pointer Dispatch Table",
    "slug": "function-pointer-dispatch-table",
    "difficulty": "medium",
    "problemStatement": "In systems drivers, function pointer tables dispatch operations based on opcodes: `typedef int (*OpFunc)(int, int); OpFunc dispatchTable[4] = { add, sub, mul, div };`. Read opcode (0: add, 1: sub, 2: mul, 3: div) and two integers a and b. Execute the corresponding function from the dispatch table and print the integer result.",
    "description": "In systems drivers, function pointer tables dispatch operations based on opcodes: `typedef int (*OpFunc)(int, int); OpFunc dispatchTable[4] = { add, sub, mul, div };`. Read opcode (0: add, 1: sub, 2: mul, 3: div) and two integers a and b. Execute the corresponding function from the dispatch table and print the integer result.",
    "inputFormat": "Three space-separated integers: opcode (0-3), a, b.",
    "outputFormat": "Integer result.",
    "constraints": [
      "opcode in {0, 1, 2, 3}",
      "b != 0 when opcode == 3"
    ],
    "examples": [
      {
        "input": "0 10 20",
        "output": "30"
      },
      {
        "input": "2 6 7",
        "output": "42"
      }
    ],
    "starterCode": {
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "c-fnptr-3-tc-1",
        "input": "0 10 20",
        "expectedOutput": "30",
        "isHidden": false
      },
      {
        "id": "c-fnptr-3-tc-2",
        "input": "2 6 7",
        "expectedOutput": "42",
        "isHidden": false
      },
      {
        "id": "c-fnptr-3-tc-3",
        "input": "1 50 15",
        "expectedOutput": "35",
        "isHidden": false
      },
      {
        "id": "c-fnptr-3-tc-4",
        "input": "3 100 4",
        "expectedOutput": "25",
        "isHidden": true
      },
      {
        "id": "c-fnptr-3-tc-5",
        "input": "0 -5 10",
        "expectedOutput": "5",
        "isHidden": true
      },
      {
        "id": "c-fnptr-3-tc-6",
        "input": "1 10 20",
        "expectedOutput": "-10",
        "isHidden": true
      },
      {
        "id": "c-fnptr-3-tc-7",
        "input": "2 -4 -5",
        "expectedOutput": "20",
        "isHidden": true
      },
      {
        "id": "c-fnptr-3-tc-8",
        "input": "3 42 7",
        "expectedOutput": "6",
        "isHidden": true
      },
      {
        "id": "c-fnptr-3-tc-9",
        "input": "0 0 0",
        "expectedOutput": "0",
        "isHidden": true
      },
      {
        "id": "c-fnptr-3-tc-10",
        "input": "2 12 12",
        "expectedOutput": "144",
        "isHidden": true
      }
    ]
  },
  {
    "id": "c-bit-1",
    "languageId": "c",
    "language": "c",
    "level": "advanced",
    "topicId": "c-bitwise-operations-and-masks",
    "title": "Hamming Weight (Count Set Bits)",
    "slug": "hamming-weight-count-set-bits",
    "difficulty": "easy",
    "problemStatement": "Given a non-negative integer n, count the number of set bits (1s) in its binary representation using bitwise operations (`n &= (n - 1)` or shift and mask). Print the total set bits.",
    "description": "Given a non-negative integer n, count the number of set bits (1s) in its binary representation using bitwise operations (`n &= (n - 1)` or shift and mask). Print the total set bits.",
    "inputFormat": "A non-negative integer n.",
    "outputFormat": "Number of set bits as an integer.",
    "constraints": [
      "0 <= n <= 2^31 - 1"
    ],
    "examples": [
      {
        "input": "11",
        "output": "3"
      }
    ],
    "starterCode": {
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "c-bit-1-tc-1",
        "input": "11",
        "expectedOutput": "3",
        "isHidden": false
      },
      {
        "id": "c-bit-1-tc-2",
        "input": "0",
        "expectedOutput": "0",
        "isHidden": false
      },
      {
        "id": "c-bit-1-tc-3",
        "input": "1",
        "expectedOutput": "1",
        "isHidden": false
      },
      {
        "id": "c-bit-1-tc-4",
        "input": "2",
        "expectedOutput": "1",
        "isHidden": true
      },
      {
        "id": "c-bit-1-tc-5",
        "input": "7",
        "expectedOutput": "3",
        "isHidden": true
      },
      {
        "id": "c-bit-1-tc-6",
        "input": "15",
        "expectedOutput": "4",
        "isHidden": true
      },
      {
        "id": "c-bit-1-tc-7",
        "input": "16",
        "expectedOutput": "1",
        "isHidden": true
      },
      {
        "id": "c-bit-1-tc-8",
        "input": "127",
        "expectedOutput": "7",
        "isHidden": true
      },
      {
        "id": "c-bit-1-tc-9",
        "input": "128",
        "expectedOutput": "1",
        "isHidden": true
      },
      {
        "id": "c-bit-1-tc-10",
        "input": "1023",
        "expectedOutput": "10",
        "isHidden": true
      }
    ]
  },
  {
    "id": "c-bit-2",
    "languageId": "c",
    "language": "c",
    "level": "advanced",
    "topicId": "c-bitwise-operations-and-masks",
    "title": "Single Non-Duplicate Element using XOR",
    "slug": "single-non-duplicate-element-using-xor",
    "difficulty": "medium",
    "problemStatement": "Given an array of integers where every element appears twice except for one unique element, find and print the unique element using the bitwise XOR property: `a ^ a = 0` and `a ^ 0 = a`.",
    "description": "Given an array of integers where every element appears twice except for one unique element, find and print the unique element using the bitwise XOR property: `a ^ a = 0` and `a ^ 0 = a`.",
    "inputFormat": "First line integer n. Second line n space-separated integers.",
    "outputFormat": "The unique integer.",
    "constraints": [
      "n is odd",
      "1 <= n <= 10000"
    ],
    "examples": [
      {
        "input": "5\n4 1 2 1 2",
        "output": "4"
      }
    ],
    "starterCode": {
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "c-bit-2-tc-1",
        "input": "5\n4 1 2 1 2",
        "expectedOutput": "4",
        "isHidden": false
      },
      {
        "id": "c-bit-2-tc-2",
        "input": "1\n42",
        "expectedOutput": "42",
        "isHidden": false
      },
      {
        "id": "c-bit-2-tc-3",
        "input": "3\n2 2 1",
        "expectedOutput": "1",
        "isHidden": false
      },
      {
        "id": "c-bit-2-tc-4",
        "input": "7\n9 3 5 3 9 7 5",
        "expectedOutput": "7",
        "isHidden": true
      },
      {
        "id": "c-bit-2-tc-5",
        "input": "5\n10 20 10 30 20",
        "expectedOutput": "30",
        "isHidden": true
      },
      {
        "id": "c-bit-2-tc-6",
        "input": "3\n-5 10 -5",
        "expectedOutput": "10",
        "isHidden": true
      },
      {
        "id": "c-bit-2-tc-7",
        "input": "5\n100 100 200 300 200",
        "expectedOutput": "300",
        "isHidden": true
      },
      {
        "id": "c-bit-2-tc-8",
        "input": "7\n1 2 3 4 3 2 1",
        "expectedOutput": "4",
        "isHidden": true
      },
      {
        "id": "c-bit-2-tc-9",
        "input": "5\n8 8 7 9 9",
        "expectedOutput": "7",
        "isHidden": true
      },
      {
        "id": "c-bit-2-tc-10",
        "input": "9\n15 12 15 10 10 12 99 8 8",
        "expectedOutput": "99",
        "isHidden": true
      }
    ]
  },
  {
    "id": "c-bit-3",
    "languageId": "c",
    "language": "c",
    "level": "advanced",
    "topicId": "c-bitwise-operations-and-masks",
    "title": "Reverse Bits of 32-bit Unsigned Integer",
    "slug": "reverse-bits-of-32-bit-unsigned-integer",
    "difficulty": "medium",
    "problemStatement": "Given a 32-bit unsigned integer n, reverse its binary bits from bit 0 to bit 31. Print the resulting unsigned integer value.",
    "description": "Given a 32-bit unsigned integer n, reverse its binary bits from bit 0 to bit 31. Print the resulting unsigned integer value.",
    "inputFormat": "A 32-bit unsigned integer n.",
    "outputFormat": "Unsigned integer after bit reversal.",
    "constraints": [
      "0 <= n <= 4294967295"
    ],
    "examples": [
      {
        "input": "43261596",
        "output": "964176192"
      }
    ],
    "starterCode": {
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "c-bit-3-tc-1",
        "input": "43261596",
        "expectedOutput": "964176192",
        "isHidden": false
      },
      {
        "id": "c-bit-3-tc-2",
        "input": "0",
        "expectedOutput": "0",
        "isHidden": false
      },
      {
        "id": "c-bit-3-tc-3",
        "input": "1",
        "expectedOutput": "2147483648",
        "isHidden": false
      },
      {
        "id": "c-bit-3-tc-4",
        "input": "2147483648",
        "expectedOutput": "1",
        "isHidden": true
      },
      {
        "id": "c-bit-3-tc-5",
        "input": "3",
        "expectedOutput": "3221225472",
        "isHidden": true
      },
      {
        "id": "c-bit-3-tc-6",
        "input": "4294967295",
        "expectedOutput": "4294967295",
        "isHidden": true
      },
      {
        "id": "c-bit-3-tc-7",
        "input": "2",
        "expectedOutput": "1073741824",
        "isHidden": true
      },
      {
        "id": "c-bit-3-tc-8",
        "input": "1073741824",
        "expectedOutput": "2",
        "isHidden": true
      },
      {
        "id": "c-bit-3-tc-9",
        "input": "255",
        "expectedOutput": "4278190080",
        "isHidden": true
      },
      {
        "id": "c-bit-3-tc-10",
        "input": "4278190080",
        "expectedOutput": "255",
        "isHidden": true
      }
    ]
  },
  {
    "id": "c-bit-4",
    "languageId": "c",
    "language": "c",
    "level": "advanced",
    "topicId": "c-bitwise-operations-and-masks",
    "title": "Power of Two and Next Power of Two",
    "slug": "power-of-two-and-next-power-of-two",
    "difficulty": "medium",
    "problemStatement": "Using bitwise operations, determine if an integer n > 0 is a power of two using `(n & (n - 1)) == 0`. If it is already a power of two, print \"POWER OF 2: <n>\". If not, calculate and print the next power of two greater than n: \"NEXT POWER OF 2: <next>\".",
    "description": "Using bitwise operations, determine if an integer n > 0 is a power of two using `(n & (n - 1)) == 0`. If it is already a power of two, print \"POWER OF 2: <n>\". If not, calculate and print the next power of two greater than n: \"NEXT POWER OF 2: <next>\".",
    "inputFormat": "A positive integer n.",
    "outputFormat": "\"POWER OF 2: <n>\" or \"NEXT POWER OF 2: <next>\"",
    "constraints": [
      "1 <= n <= 10^9"
    ],
    "examples": [
      {
        "input": "16",
        "output": "POWER OF 2: 16"
      },
      {
        "input": "17",
        "output": "NEXT POWER OF 2: 32"
      }
    ],
    "starterCode": {
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "c-bit-4-tc-1",
        "input": "16",
        "expectedOutput": "POWER OF 2: 16",
        "isHidden": false
      },
      {
        "id": "c-bit-4-tc-2",
        "input": "17",
        "expectedOutput": "NEXT POWER OF 2: 32",
        "isHidden": false
      },
      {
        "id": "c-bit-4-tc-3",
        "input": "1",
        "expectedOutput": "POWER OF 2: 1",
        "isHidden": false
      },
      {
        "id": "c-bit-4-tc-4",
        "input": "2",
        "expectedOutput": "POWER OF 2: 2",
        "isHidden": true
      },
      {
        "id": "c-bit-4-tc-5",
        "input": "3",
        "expectedOutput": "NEXT POWER OF 2: 4",
        "isHidden": true
      },
      {
        "id": "c-bit-4-tc-6",
        "input": "4",
        "expectedOutput": "POWER OF 2: 4",
        "isHidden": true
      },
      {
        "id": "c-bit-4-tc-7",
        "input": "5",
        "expectedOutput": "NEXT POWER OF 2: 8",
        "isHidden": true
      },
      {
        "id": "c-bit-4-tc-8",
        "input": "64",
        "expectedOutput": "POWER OF 2: 64",
        "isHidden": true
      },
      {
        "id": "c-bit-4-tc-9",
        "input": "100",
        "expectedOutput": "NEXT POWER OF 2: 128",
        "isHidden": true
      },
      {
        "id": "c-bit-4-tc-10",
        "input": "1024",
        "expectedOutput": "POWER OF 2: 1024",
        "isHidden": true
      }
    ]
  },
  {
    "id": "c-args-1",
    "languageId": "c",
    "language": "c",
    "level": "advanced",
    "topicId": "c-command-line-arguments",
    "title": "Simulate Command-Line Flag Parser",
    "slug": "simulate-command-line-flag-parser",
    "difficulty": "medium",
    "problemStatement": "In C `int main(int argc, char *argv[])`, arguments pass command-line flags. Simulate parsing argument tokens: given a sequence of tokens, if \"-v\" is present print \"Verbose: true\", otherwise \"Verbose: false\". If \"--port <N>\" is present, print \"Port: <N>\", otherwise \"Port: default\".",
    "description": "In C `int main(int argc, char *argv[])`, arguments pass command-line flags. Simulate parsing argument tokens: given a sequence of tokens, if \"-v\" is present print \"Verbose: true\", otherwise \"Verbose: false\". If \"--port <N>\" is present, print \"Port: <N>\", otherwise \"Port: default\".",
    "inputFormat": "First line integer argc. Next argc space-separated tokens.",
    "outputFormat": "Two lines: \"Verbose: <bool>\" and \"Port: <val>\"",
    "constraints": [
      "1 <= argc <= 20"
    ],
    "examples": [
      {
        "input": "3\n-v --port 8080",
        "output": "Verbose: true\nPort: 8080"
      }
    ],
    "starterCode": {
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "c-args-1-tc-1",
        "input": "3\n-v --port 8080",
        "expectedOutput": "Verbose: true\nPort: 8080",
        "isHidden": false
      },
      {
        "id": "c-args-1-tc-2",
        "input": "1\napp",
        "expectedOutput": "Verbose: false\nPort: default",
        "isHidden": false
      },
      {
        "id": "c-args-1-tc-3",
        "input": "2\napp -v",
        "expectedOutput": "Verbose: true\nPort: default",
        "isHidden": false
      },
      {
        "id": "c-args-1-tc-4",
        "input": "3\napp --port 3000",
        "expectedOutput": "Verbose: false\nPort: 3000",
        "isHidden": true
      },
      {
        "id": "c-args-1-tc-5",
        "input": "4\napp -v --port 5000",
        "expectedOutput": "Verbose: true\nPort: 5000",
        "isHidden": true
      },
      {
        "id": "c-args-1-tc-6",
        "input": "2\napp --help",
        "expectedOutput": "Verbose: false\nPort: default",
        "isHidden": true
      },
      {
        "id": "c-args-1-tc-7",
        "input": "4\napp --port 9000 -v",
        "expectedOutput": "Verbose: true\nPort: 9000",
        "isHidden": true
      },
      {
        "id": "c-args-1-tc-8",
        "input": "3\nserver -v worker",
        "expectedOutput": "Verbose: true\nPort: default",
        "isHidden": true
      },
      {
        "id": "c-args-1-tc-9",
        "input": "3\nservice --port 80",
        "expectedOutput": "Verbose: false\nPort: 80",
        "isHidden": true
      },
      {
        "id": "c-args-1-tc-10",
        "input": "5\nmain -v extra --port 443",
        "expectedOutput": "Verbose: true\nPort: 443",
        "isHidden": true
      }
    ]
  },
  {
    "id": "c-args-2",
    "languageId": "c",
    "language": "c",
    "level": "advanced",
    "topicId": "c-command-line-arguments",
    "title": "CLI Mathematical Expression Evaluator",
    "slug": "cli-mathematical-expression-evaluator",
    "difficulty": "medium",
    "problemStatement": "CLI utilities often parse mathematical operands passed as arguments: `calc <num1> <op> <num2>`. Given 3 argument tokens: integer num1, operator (+, -, x for multiplication), and integer num2, evaluate and print the result.",
    "description": "CLI utilities often parse mathematical operands passed as arguments: `calc <num1> <op> <num2>`. Given 3 argument tokens: integer num1, operator (+, -, x for multiplication), and integer num2, evaluate and print the result.",
    "inputFormat": "Three space-separated tokens: num1 op num2.",
    "outputFormat": "Single integer result.",
    "constraints": [
      "-10000 <= num1, num2 <= 10000"
    ],
    "examples": [
      {
        "input": "12 + 8",
        "output": "20"
      },
      {
        "input": "6 x 7",
        "output": "42"
      }
    ],
    "starterCode": {
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "c-args-2-tc-1",
        "input": "12 + 8",
        "expectedOutput": "20",
        "isHidden": false
      },
      {
        "id": "c-args-2-tc-2",
        "input": "6 x 7",
        "expectedOutput": "42",
        "isHidden": false
      },
      {
        "id": "c-args-2-tc-3",
        "input": "100 - 35",
        "expectedOutput": "65",
        "isHidden": false
      },
      {
        "id": "c-args-2-tc-4",
        "input": "-5 + 15",
        "expectedOutput": "10",
        "isHidden": true
      },
      {
        "id": "c-args-2-tc-5",
        "input": "0 x 100",
        "expectedOutput": "0",
        "isHidden": true
      },
      {
        "id": "c-args-2-tc-6",
        "input": "-4 x -5",
        "expectedOutput": "20",
        "isHidden": true
      },
      {
        "id": "c-args-2-tc-7",
        "input": "50 - 60",
        "expectedOutput": "-10",
        "isHidden": true
      },
      {
        "id": "c-args-2-tc-8",
        "input": "25 + 25",
        "expectedOutput": "50",
        "isHidden": true
      },
      {
        "id": "c-args-2-tc-9",
        "input": "9 x 9",
        "expectedOutput": "81",
        "isHidden": true
      },
      {
        "id": "c-args-2-tc-10",
        "input": "-10 - 20",
        "expectedOutput": "-30",
        "isHidden": true
      }
    ]
  },
  {
    "id": "c-args-3",
    "languageId": "c",
    "language": "c",
    "level": "advanced",
    "topicId": "c-command-line-arguments",
    "title": "Environment Variable Key-Value Lookup Parser",
    "slug": "environment-variable-key-value-lookup-parser",
    "difficulty": "medium",
    "problemStatement": "C programs inspect environment argument strings formatted as \"KEY=VALUE\". Given N key-value pair strings and a target query key, find and print the corresponding value. If the key is not found, print \"NOT_FOUND\".",
    "description": "C programs inspect environment argument strings formatted as \"KEY=VALUE\". Given N key-value pair strings and a target query key, find and print the corresponding value. If the key is not found, print \"NOT_FOUND\".",
    "inputFormat": "First line integer N. Next N lines each contain \"KEY=VALUE\". Final line contains targetKey.",
    "outputFormat": "Target value or \"NOT_FOUND\".",
    "constraints": [
      "1 <= N <= 50",
      "Keys and values do not contain spaces or extra = signs"
    ],
    "examples": [
      {
        "input": "3\nPATH=/usr/bin\nUSER=admin\nPORT=8080\nUSER",
        "output": "admin"
      }
    ],
    "starterCode": {
      "c": "#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n",
      "python": "import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n",
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n"
    },
    "testCases": [
      {
        "id": "c-args-3-tc-1",
        "input": "3\nPATH=/usr/bin\nUSER=admin\nPORT=8080\nUSER",
        "expectedOutput": "admin",
        "isHidden": false
      },
      {
        "id": "c-args-3-tc-2",
        "input": "2\nENV=production\nDEBUG=false\nDEBUG",
        "expectedOutput": "false",
        "isHidden": false
      },
      {
        "id": "c-args-3-tc-3",
        "input": "2\nHOST=localhost\nPORT=3000\nDATABASE",
        "expectedOutput": "NOT_FOUND",
        "isHidden": false
      },
      {
        "id": "c-args-3-tc-4",
        "input": "1\nTOKEN=secret123\nTOKEN",
        "expectedOutput": "secret123",
        "isHidden": true
      },
      {
        "id": "c-args-3-tc-5",
        "input": "3\nA=1\nB=2\nC=3\nB",
        "expectedOutput": "2",
        "isHidden": true
      },
      {
        "id": "c-args-3-tc-6",
        "input": "4\nLANG=en\nTZ=UTC\nSHELL=/bin/bash\nHOME=/root\nSHELL",
        "expectedOutput": "/bin/bash",
        "isHidden": true
      },
      {
        "id": "c-args-3-tc-7",
        "input": "2\nFOO=bar\nBAZ=qux\nFOO",
        "expectedOutput": "bar",
        "isHidden": true
      },
      {
        "id": "c-args-3-tc-8",
        "input": "3\nK1=V1\nK2=V2\nK3=V3\nK4",
        "expectedOutput": "NOT_FOUND",
        "isHidden": true
      },
      {
        "id": "c-args-3-tc-9",
        "input": "1\nSINGLE=VAL\nOTHER",
        "expectedOutput": "NOT_FOUND",
        "isHidden": true
      },
      {
        "id": "c-args-3-tc-10",
        "input": "4\nW=10\nX=20\nY=30\nZ=40\nZ",
        "expectedOutput": "40",
        "isHidden": true
      }
    ]
  }
];

export default cProblems;
