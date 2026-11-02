export const javascriptProblems = [
  {
    "id": "js-var-1",
    "languageId": "javascript",
    "language": "javascript",
    "level": "beginner",
    "topicId": "js-variables-let-const-var",
    "title": "Variable Scope and Temperature Conversion",
    "slug": "variable-scope-and-temperature-conversion",
    "difficulty": "easy",
    "problemStatement": "Read temperature in Celsius C (number). Using let and const, compute Fahrenheit F = C * 9/5 + 32. Print \"Celsius: <C> Fahrenheit: <F>\" formatted to 2 decimal places using toFixed(2).",
    "description": "Read temperature in Celsius C (number). Using let and const, compute Fahrenheit F = C * 9/5 + 32. Print \"Celsius: <C> Fahrenheit: <F>\" formatted to 2 decimal places using toFixed(2).",
    "inputFormat": "A number C.",
    "outputFormat": "Print \"Celsius: <C> Fahrenheit: <F>\".",
    "constraints": [
      "-273.15 <= C <= 1000"
    ],
    "examples": [
      {
        "input": "0",
        "output": "Celsius: 0.00 Fahrenheit: 32.00",
        "explanation": "0 C = 32 F."
      },
      {
        "input": "100",
        "output": "Celsius: 100.00 Fahrenheit: 212.00",
        "explanation": "100 C = 212 F."
      },
      {
        "input": "25",
        "output": "Celsius: 25.00 Fahrenheit: 77.00",
        "explanation": "25 C = 77 F."
      }
    ],
    "starterCode": {
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\n\nmain();\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "js-var-1-tc-1",
        "input": "0",
        "expectedOutput": "Celsius: 0.00 Fahrenheit: 32.00",
        "isHidden": false
      },
      {
        "id": "js-var-1-tc-2",
        "input": "100",
        "expectedOutput": "Celsius: 100.00 Fahrenheit: 212.00",
        "isHidden": false
      },
      {
        "id": "js-var-1-tc-3",
        "input": "25",
        "expectedOutput": "Celsius: 25.00 Fahrenheit: 77.00",
        "isHidden": false
      },
      {
        "id": "js-var-1-tc-4",
        "input": "-40",
        "expectedOutput": "Celsius: -40.00 Fahrenheit: -40.00",
        "isHidden": true
      },
      {
        "id": "js-var-1-tc-5",
        "input": "37",
        "expectedOutput": "Celsius: 37.00 Fahrenheit: 98.60",
        "isHidden": true
      },
      {
        "id": "js-var-1-tc-6",
        "input": "50.5",
        "expectedOutput": "Celsius: 50.50 Fahrenheit: 122.90",
        "isHidden": true
      },
      {
        "id": "js-var-1-tc-7",
        "input": "-10",
        "expectedOutput": "Celsius: -10.00 Fahrenheit: 14.00",
        "isHidden": true
      },
      {
        "id": "js-var-1-tc-8",
        "input": "200",
        "expectedOutput": "Celsius: 200.00 Fahrenheit: 392.00",
        "isHidden": true
      },
      {
        "id": "js-var-1-tc-9",
        "input": "15.2",
        "expectedOutput": "Celsius: 15.20 Fahrenheit: 59.36",
        "isHidden": true
      },
      {
        "id": "js-var-1-tc-10",
        "input": "30",
        "expectedOutput": "Celsius: 30.00 Fahrenheit: 86.00",
        "isHidden": true
      }
    ]
  },
  {
    "id": "js-var-2",
    "languageId": "javascript",
    "language": "javascript",
    "level": "beginner",
    "topicId": "js-variables-let-const-var",
    "title": "Swap Two Variables Without Temp Variable",
    "slug": "swap-two-variables-without-temp-variable",
    "difficulty": "easy",
    "problemStatement": "Read two numbers A and B. Swap them using destructuring [a, b] = [b, a]. Print \"A: <b> B: <a>\".",
    "description": "Read two numbers A and B. Swap them using destructuring [a, b] = [b, a]. Print \"A: <b> B: <a>\".",
    "inputFormat": "Two space-separated numbers A and B.",
    "outputFormat": "Print \"A: <b> B: <a>\".",
    "constraints": [
      "-10^9 <= A, B <= 10^9"
    ],
    "examples": [
      {
        "input": "5 10",
        "output": "A: 10 B: 5",
        "explanation": "Swapped."
      },
      {
        "input": "1 2",
        "output": "A: 2 B: 1",
        "explanation": "Swapped."
      },
      {
        "input": "0 0",
        "output": "A: 0 B: 0",
        "explanation": "Zeroes."
      }
    ],
    "starterCode": {
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\n\nmain();\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "js-var-2-tc-1",
        "input": "5 10",
        "expectedOutput": "A: 10 B: 5",
        "isHidden": false
      },
      {
        "id": "js-var-2-tc-2",
        "input": "1 2",
        "expectedOutput": "A: 2 B: 1",
        "isHidden": false
      },
      {
        "id": "js-var-2-tc-3",
        "input": "0 0",
        "expectedOutput": "A: 0 B: 0",
        "isHidden": false
      },
      {
        "id": "js-var-2-tc-4",
        "input": "-5 5",
        "expectedOutput": "A: 5 B: -5",
        "isHidden": true
      },
      {
        "id": "js-var-2-tc-5",
        "input": "100 200",
        "expectedOutput": "A: 200 B: 100",
        "isHidden": true
      },
      {
        "id": "js-var-2-tc-6",
        "input": "7 3",
        "expectedOutput": "A: 3 B: 7",
        "isHidden": true
      },
      {
        "id": "js-var-2-tc-7",
        "input": "42 99",
        "expectedOutput": "A: 99 B: 42",
        "isHidden": true
      },
      {
        "id": "js-var-2-tc-8",
        "input": "-10 -20",
        "expectedOutput": "A: -20 B: -10",
        "isHidden": true
      },
      {
        "id": "js-var-2-tc-9",
        "input": "15 85",
        "expectedOutput": "A: 85 B: 15",
        "isHidden": true
      },
      {
        "id": "js-var-2-tc-10",
        "input": "9 9",
        "expectedOutput": "A: 9 B: 9",
        "isHidden": true
      }
    ]
  },
  {
    "id": "js-var-3",
    "languageId": "javascript",
    "language": "javascript",
    "level": "beginner",
    "topicId": "js-variables-let-const-var",
    "title": "Const Object Property Mutation vs Reassignment",
    "slug": "const-object-property-mutation-vs-reassignment",
    "difficulty": "medium",
    "problemStatement": "Demonstrate const object mutation: Given an object { count: 0 }, increment count by N times. Print \"Final Count: <count>\".",
    "description": "Demonstrate const object mutation: Given an object { count: 0 }, increment count by N times. Print \"Final Count: <count>\".",
    "inputFormat": "An integer N.",
    "outputFormat": "Print \"Final Count: <N>\".",
    "constraints": [
      "0 <= N <= 10^5"
    ],
    "examples": [
      {
        "input": "5",
        "output": "Final Count: 5",
        "explanation": "Incremented 5 times."
      },
      {
        "input": "0",
        "output": "Final Count: 0",
        "explanation": "Zero count."
      },
      {
        "input": "10",
        "output": "Final Count: 10",
        "explanation": "10 times."
      }
    ],
    "starterCode": {
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\n\nmain();\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "js-var-3-tc-1",
        "input": "5",
        "expectedOutput": "Final Count: 5",
        "isHidden": false
      },
      {
        "id": "js-var-3-tc-2",
        "input": "0",
        "expectedOutput": "Final Count: 0",
        "isHidden": false
      },
      {
        "id": "js-var-3-tc-3",
        "input": "10",
        "expectedOutput": "Final Count: 10",
        "isHidden": false
      },
      {
        "id": "js-var-3-tc-4",
        "input": "1",
        "expectedOutput": "Final Count: 1",
        "isHidden": true
      },
      {
        "id": "js-var-3-tc-5",
        "input": "100",
        "expectedOutput": "Final Count: 100",
        "isHidden": true
      },
      {
        "id": "js-var-3-tc-6",
        "input": "50",
        "expectedOutput": "Final Count: 50",
        "isHidden": true
      },
      {
        "id": "js-var-3-tc-7",
        "input": "25",
        "expectedOutput": "Final Count: 25",
        "isHidden": true
      },
      {
        "id": "js-var-3-tc-8",
        "input": "7",
        "expectedOutput": "Final Count: 7",
        "isHidden": true
      },
      {
        "id": "js-var-3-tc-9",
        "input": "999",
        "expectedOutput": "Final Count: 999",
        "isHidden": true
      },
      {
        "id": "js-var-3-tc-10",
        "input": "1234",
        "expectedOutput": "Final Count: 1234",
        "isHidden": true
      }
    ]
  },
  {
    "id": "js-dt-1",
    "languageId": "javascript",
    "language": "javascript",
    "level": "beginner",
    "topicId": "js-data-types-and-typeof",
    "title": "Identify JavaScript Data Types with typeof",
    "slug": "identify-javascript-data-types-with-typeof",
    "difficulty": "easy",
    "problemStatement": "Given a token T, determine whether it parses as a \"number\", \"boolean\" (\"true\"/\"false\"), or remains a \"string\". Print \"Type: <type> Value: <val>\".",
    "description": "Given a token T, determine whether it parses as a \"number\", \"boolean\" (\"true\"/\"false\"), or remains a \"string\". Print \"Type: <type> Value: <val>\".",
    "inputFormat": "A single token T.",
    "outputFormat": "Print \"Type: <type> Value: <val>\".",
    "constraints": [
      "Token length <= 100"
    ],
    "examples": [
      {
        "input": "42",
        "output": "Type: number Value: 42",
        "explanation": "Parsed as number."
      },
      {
        "input": "true",
        "output": "Type: boolean Value: true",
        "explanation": "Parsed as boolean."
      },
      {
        "input": "hello",
        "output": "Type: string Value: hello",
        "explanation": "String type."
      }
    ],
    "starterCode": {
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\n\nmain();\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "js-dt-1-tc-1",
        "input": "42",
        "expectedOutput": "Type: number Value: 42",
        "isHidden": false
      },
      {
        "id": "js-dt-1-tc-2",
        "input": "true",
        "expectedOutput": "Type: boolean Value: true",
        "isHidden": false
      },
      {
        "id": "js-dt-1-tc-3",
        "input": "hello",
        "expectedOutput": "Type: string Value: hello",
        "isHidden": false
      },
      {
        "id": "js-dt-1-tc-4",
        "input": "false",
        "expectedOutput": "Type: boolean Value: false",
        "isHidden": true
      },
      {
        "id": "js-dt-1-tc-5",
        "input": "3.14",
        "expectedOutput": "Type: number Value: 3.14",
        "isHidden": true
      },
      {
        "id": "js-dt-1-tc-6",
        "input": "0",
        "expectedOutput": "Type: number Value: 0",
        "isHidden": true
      },
      {
        "id": "js-dt-1-tc-7",
        "input": "-10",
        "expectedOutput": "Type: number Value: -10",
        "isHidden": true
      },
      {
        "id": "js-dt-1-tc-8",
        "input": "world",
        "expectedOutput": "Type: string Value: world",
        "isHidden": true
      },
      {
        "id": "js-dt-1-tc-9",
        "input": "javascript",
        "expectedOutput": "Type: string Value: javascript",
        "isHidden": true
      },
      {
        "id": "js-dt-1-tc-10",
        "input": "1000",
        "expectedOutput": "Type: number Value: 1000",
        "isHidden": true
      }
    ]
  },
  {
    "id": "js-dt-2",
    "languageId": "javascript",
    "language": "javascript",
    "level": "beginner",
    "topicId": "js-data-types-and-typeof",
    "title": "Strict String to Number Parsing",
    "slug": "strict-string-to-number-parsing",
    "difficulty": "easy",
    "problemStatement": "Given string token S, parse using Number(S). If isNaN, print \"NaN\". Else print the number rounded to 2 decimal places.",
    "description": "Given string token S, parse using Number(S). If isNaN, print \"NaN\". Else print the number rounded to 2 decimal places.",
    "inputFormat": "A token S.",
    "outputFormat": "Print parsed number or \"NaN\".",
    "constraints": [
      "Token length <= 50"
    ],
    "examples": [
      {
        "input": "123.456",
        "output": "123.46",
        "explanation": "Parsed and rounded."
      },
      {
        "input": "abc",
        "output": "NaN",
        "explanation": "Not a number."
      },
      {
        "input": "10",
        "output": "10.00",
        "explanation": "Integer formatted."
      }
    ],
    "starterCode": {
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\n\nmain();\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "js-dt-2-tc-1",
        "input": "123.456",
        "expectedOutput": "123.46",
        "isHidden": false
      },
      {
        "id": "js-dt-2-tc-2",
        "input": "abc",
        "expectedOutput": "NaN",
        "isHidden": false
      },
      {
        "id": "js-dt-2-tc-3",
        "input": "10",
        "expectedOutput": "10.00",
        "isHidden": false
      },
      {
        "id": "js-dt-2-tc-4",
        "input": "0",
        "expectedOutput": "0.00",
        "isHidden": true
      },
      {
        "id": "js-dt-2-tc-5",
        "input": "-5.2",
        "expectedOutput": "-5.20",
        "isHidden": true
      },
      {
        "id": "js-dt-2-tc-6",
        "input": "foo123",
        "expectedOutput": "NaN",
        "isHidden": true
      },
      {
        "id": "js-dt-2-tc-7",
        "input": "100.00",
        "expectedOutput": "100.00",
        "isHidden": true
      },
      {
        "id": "js-dt-2-tc-8",
        "input": "0.05",
        "expectedOutput": "0.05",
        "isHidden": true
      },
      {
        "id": "js-dt-2-tc-9",
        "input": "xyz",
        "expectedOutput": "NaN",
        "isHidden": true
      },
      {
        "id": "js-dt-2-tc-10",
        "input": "999.9",
        "expectedOutput": "999.90",
        "isHidden": true
      }
    ]
  },
  {
    "id": "js-dt-3",
    "languageId": "javascript",
    "language": "javascript",
    "level": "beginner",
    "topicId": "js-data-types-and-typeof",
    "title": "Truthy and Falsy Value Filtering in JavaScript",
    "slug": "truthy-and-falsy-value-filtering-in-javascript",
    "difficulty": "medium",
    "problemStatement": "Given N tokens, evaluate Boolean(token) (where \"false\", \"0\", \"null\", \"undefined\", \"NaN\", \"\" are treated as falsy, others truthy). Print \"TRUTHY: <count> FALSY: <count>\".",
    "description": "Given N tokens, evaluate Boolean(token) (where \"false\", \"0\", \"null\", \"undefined\", \"NaN\", \"\" are treated as falsy, others truthy). Print \"TRUTHY: <count> FALSY: <count>\".",
    "inputFormat": "First line N, second line N space-separated tokens.",
    "outputFormat": "Print \"TRUTHY: <t> FALSY: <f>\".",
    "constraints": [
      "1 <= N <= 1000"
    ],
    "examples": [
      {
        "input": "5\nhello 0 true null 42",
        "output": "TRUTHY: 3 FALSY: 2",
        "explanation": "hello, true, 42 are truthy; 0, null are falsy."
      },
      {
        "input": "2\n0 false",
        "output": "TRUTHY: 0 FALSY: 2",
        "explanation": "Both falsy."
      },
      {
        "input": "2\na b",
        "output": "TRUTHY: 2 FALSY: 0",
        "explanation": "Both truthy."
      }
    ],
    "starterCode": {
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\n\nmain();\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "js-dt-3-tc-1",
        "input": "5\nhello 0 true null 42",
        "expectedOutput": "TRUTHY: 3 FALSY: 2",
        "isHidden": false
      },
      {
        "id": "js-dt-3-tc-2",
        "input": "2\n0 false",
        "expectedOutput": "TRUTHY: 0 FALSY: 2",
        "isHidden": false
      },
      {
        "id": "js-dt-3-tc-3",
        "input": "2\na b",
        "expectedOutput": "TRUTHY: 2 FALSY: 0",
        "isHidden": false
      },
      {
        "id": "js-dt-3-tc-4",
        "input": "4\n1 2 3 4",
        "expectedOutput": "TRUTHY: 4 FALSY: 0",
        "isHidden": true
      },
      {
        "id": "js-dt-3-tc-5",
        "input": "3\nnull undefined NaN",
        "expectedOutput": "TRUTHY: 0 FALSY: 3",
        "isHidden": true
      },
      {
        "id": "js-dt-3-tc-6",
        "input": "4\ncode 0 test false",
        "expectedOutput": "TRUTHY: 2 FALSY: 2",
        "isHidden": true
      },
      {
        "id": "js-dt-3-tc-7",
        "input": "1\nactive",
        "expectedOutput": "TRUTHY: 1 FALSY: 0",
        "isHidden": true
      },
      {
        "id": "js-dt-3-tc-8",
        "input": "1\n0",
        "expectedOutput": "TRUTHY: 0 FALSY: 1",
        "isHidden": true
      },
      {
        "id": "js-dt-3-tc-9",
        "input": "6\ntrue false true false 1 0",
        "expectedOutput": "TRUTHY: 3 FALSY: 3",
        "isHidden": true
      },
      {
        "id": "js-dt-3-tc-10",
        "input": "3\nx y 0",
        "expectedOutput": "TRUTHY: 2 FALSY: 1",
        "isHidden": true
      }
    ]
  },
  {
    "id": "js-op-1",
    "languageId": "javascript",
    "language": "javascript",
    "level": "beginner",
    "topicId": "js-operators-and-equality",
    "title": "Strict Equality (===) vs Loose Equality (==)",
    "slug": "strict-equality-vs-loose-equality",
    "difficulty": "easy",
    "problemStatement": "Given token A and token B, compare them: check loose equality A == B (with coercion if one is number and other is string representation) and strict equality A === B (matching value and type). Print \"LOOSE: <bool> STRICT: <bool>\".",
    "description": "Given token A and token B, compare them: check loose equality A == B (with coercion if one is number and other is string representation) and strict equality A === B (matching value and type). Print \"LOOSE: <bool> STRICT: <bool>\".",
    "inputFormat": "Two space-separated tokens A and B.",
    "outputFormat": "Print \"LOOSE: <true/false> STRICT: <true/false>\".",
    "constraints": [
      "Token length <= 50"
    ],
    "examples": [
      {
        "input": "5 5",
        "output": "LOOSE: true STRICT: true",
        "explanation": "Identical."
      },
      {
        "input": "5 6",
        "output": "LOOSE: false STRICT: false",
        "explanation": "Different."
      },
      {
        "input": "true true",
        "output": "LOOSE: true STRICT: true",
        "explanation": "Both true."
      }
    ],
    "starterCode": {
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\n\nmain();\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "js-op-1-tc-1",
        "input": "5 5",
        "expectedOutput": "LOOSE: true STRICT: true",
        "isHidden": false
      },
      {
        "id": "js-op-1-tc-2",
        "input": "5 6",
        "expectedOutput": "LOOSE: false STRICT: false",
        "isHidden": false
      },
      {
        "id": "js-op-1-tc-3",
        "input": "true true",
        "expectedOutput": "LOOSE: true STRICT: true",
        "isHidden": false
      },
      {
        "id": "js-op-1-tc-4",
        "input": "abc abc",
        "expectedOutput": "LOOSE: true STRICT: true",
        "isHidden": true
      },
      {
        "id": "js-op-1-tc-5",
        "input": "10 20",
        "expectedOutput": "LOOSE: false STRICT: false",
        "isHidden": true
      },
      {
        "id": "js-op-1-tc-6",
        "input": "0 0",
        "expectedOutput": "LOOSE: true STRICT: true",
        "isHidden": true
      },
      {
        "id": "js-op-1-tc-7",
        "input": "hello world",
        "expectedOutput": "LOOSE: false STRICT: false",
        "isHidden": true
      },
      {
        "id": "js-op-1-tc-8",
        "input": "false false",
        "expectedOutput": "LOOSE: true STRICT: true",
        "isHidden": true
      },
      {
        "id": "js-op-1-tc-9",
        "input": "42 42",
        "expectedOutput": "LOOSE: true STRICT: true",
        "isHidden": true
      },
      {
        "id": "js-op-1-tc-10",
        "input": "yes no",
        "expectedOutput": "LOOSE: false STRICT: false",
        "isHidden": true
      }
    ]
  },
  {
    "id": "js-op-2",
    "languageId": "javascript",
    "language": "javascript",
    "level": "beginner",
    "topicId": "js-operators-and-equality",
    "title": "Nullish Coalescing (??) and Logical OR (||)",
    "slug": "nullish-coalescing-and-logical-or",
    "difficulty": "easy",
    "problemStatement": "Simulate value ?? defaultValue: If value is \"null\" or \"undefined\", output defaultValue. Otherwise output value.",
    "description": "Simulate value ?? defaultValue: If value is \"null\" or \"undefined\", output defaultValue. Otherwise output value.",
    "inputFormat": "Value and defaultValue.",
    "outputFormat": "Print resolved value.",
    "constraints": [
      "Strings <= 50 chars."
    ],
    "examples": [
      {
        "input": "null DefaultVal",
        "output": "DefaultVal",
        "explanation": "Null coalesced."
      },
      {
        "input": "User101 Guest",
        "output": "User101",
        "explanation": "User101 is valid."
      },
      {
        "input": "undefined Fallback",
        "output": "Fallback",
        "explanation": "Undefined coalesced."
      }
    ],
    "starterCode": {
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\n\nmain();\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "js-op-2-tc-1",
        "input": "null DefaultVal",
        "expectedOutput": "DefaultVal",
        "isHidden": false
      },
      {
        "id": "js-op-2-tc-2",
        "input": "User101 Guest",
        "expectedOutput": "User101",
        "isHidden": false
      },
      {
        "id": "js-op-2-tc-3",
        "input": "undefined Fallback",
        "expectedOutput": "Fallback",
        "isHidden": false
      },
      {
        "id": "js-op-2-tc-4",
        "input": "Active Inactive",
        "expectedOutput": "Active",
        "isHidden": true
      },
      {
        "id": "js-op-2-tc-5",
        "input": "null 100",
        "expectedOutput": "100",
        "isHidden": true
      },
      {
        "id": "js-op-2-tc-6",
        "input": "0 50",
        "expectedOutput": "0",
        "isHidden": true
      },
      {
        "id": "js-op-2-tc-7",
        "input": "undefined Anon",
        "expectedOutput": "Anon",
        "isHidden": true
      },
      {
        "id": "js-op-2-tc-8",
        "input": "Custom System",
        "expectedOutput": "Custom",
        "isHidden": true
      },
      {
        "id": "js-op-2-tc-9",
        "input": "null Root",
        "expectedOutput": "Root",
        "isHidden": true
      },
      {
        "id": "js-op-2-tc-10",
        "input": "Value Default",
        "expectedOutput": "Value",
        "isHidden": true
      }
    ]
  },
  {
    "id": "js-op-3",
    "languageId": "javascript",
    "language": "javascript",
    "level": "beginner",
    "topicId": "js-operators-and-equality",
    "title": "Ternary Operator Score Evaluator",
    "slug": "ternary-operator-score-evaluator",
    "difficulty": "medium",
    "problemStatement": "Given score S (0 to 100), use ternary operator: S >= 50 ? \"PASS\" : \"FAIL\". If S >= 80, append \" WITH DISTINCTION\". Print outcome.",
    "description": "Given score S (0 to 100), use ternary operator: S >= 50 ? \"PASS\" : \"FAIL\". If S >= 80, append \" WITH DISTINCTION\". Print outcome.",
    "inputFormat": "An integer score S.",
    "outputFormat": "Print evaluation string.",
    "constraints": [
      "0 <= S <= 100"
    ],
    "examples": [
      {
        "input": "85",
        "output": "PASS WITH DISTINCTION",
        "explanation": ">= 80."
      },
      {
        "input": "60",
        "output": "PASS",
        "explanation": "Between 50 and 79."
      },
      {
        "input": "40",
        "output": "FAIL",
        "explanation": "< 50."
      }
    ],
    "starterCode": {
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\n\nmain();\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "js-op-3-tc-1",
        "input": "85",
        "expectedOutput": "PASS WITH DISTINCTION",
        "isHidden": false
      },
      {
        "id": "js-op-3-tc-2",
        "input": "60",
        "expectedOutput": "PASS",
        "isHidden": false
      },
      {
        "id": "js-op-3-tc-3",
        "input": "40",
        "expectedOutput": "FAIL",
        "isHidden": false
      },
      {
        "id": "js-op-3-tc-4",
        "input": "100",
        "expectedOutput": "PASS WITH DISTINCTION",
        "isHidden": true
      },
      {
        "id": "js-op-3-tc-5",
        "input": "80",
        "expectedOutput": "PASS WITH DISTINCTION",
        "isHidden": true
      },
      {
        "id": "js-op-3-tc-6",
        "input": "50",
        "expectedOutput": "PASS",
        "isHidden": true
      },
      {
        "id": "js-op-3-tc-7",
        "input": "49",
        "expectedOutput": "FAIL",
        "isHidden": true
      },
      {
        "id": "js-op-3-tc-8",
        "input": "0",
        "expectedOutput": "FAIL",
        "isHidden": true
      },
      {
        "id": "js-op-3-tc-9",
        "input": "79",
        "expectedOutput": "PASS",
        "isHidden": true
      },
      {
        "id": "js-op-3-tc-10",
        "input": "90",
        "expectedOutput": "PASS WITH DISTINCTION",
        "isHidden": true
      }
    ]
  },
  {
    "id": "js-fn-1",
    "languageId": "javascript",
    "language": "javascript",
    "level": "beginner",
    "topicId": "js-functions-and-arrow-syntax",
    "title": "Arrow Function for String Reversal",
    "slug": "arrow-function-for-string-reversal",
    "difficulty": "easy",
    "problemStatement": "Write an arrow function const rev = s => s.split(\"\").reverse().join(\"\"). Reverse given string S and print it.",
    "description": "Write an arrow function const rev = s => s.split(\"\").reverse().join(\"\"). Reverse given string S and print it.",
    "inputFormat": "A string S.",
    "outputFormat": "Print reversed string.",
    "constraints": [
      "1 <= len(S) <= 10^5"
    ],
    "examples": [
      {
        "input": "javascript",
        "output": "tpircsavaj",
        "explanation": "Reversed."
      },
      {
        "input": "hello",
        "output": "olleh",
        "explanation": "Reversed."
      },
      {
        "input": "racecar",
        "output": "racecar",
        "explanation": "Palindrome reversed."
      }
    ],
    "starterCode": {
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\n\nmain();\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "js-fn-1-tc-1",
        "input": "javascript",
        "expectedOutput": "tpircsavaj",
        "isHidden": false
      },
      {
        "id": "js-fn-1-tc-2",
        "input": "hello",
        "expectedOutput": "olleh",
        "isHidden": false
      },
      {
        "id": "js-fn-1-tc-3",
        "input": "racecar",
        "expectedOutput": "racecar",
        "isHidden": false
      },
      {
        "id": "js-fn-1-tc-4",
        "input": "world",
        "expectedOutput": "dlrow",
        "isHidden": true
      },
      {
        "id": "js-fn-1-tc-5",
        "input": "code",
        "expectedOutput": "edoc",
        "isHidden": true
      },
      {
        "id": "js-fn-1-tc-6",
        "input": "12345",
        "expectedOutput": "54321",
        "isHidden": true
      },
      {
        "id": "js-fn-1-tc-7",
        "input": "antigravity",
        "expectedOutput": "ytivargitna",
        "isHidden": true
      },
      {
        "id": "js-fn-1-tc-8",
        "input": "arrow",
        "expectedOutput": "worra",
        "isHidden": true
      },
      {
        "id": "js-fn-1-tc-9",
        "input": "a",
        "expectedOutput": "a",
        "isHidden": true
      },
      {
        "id": "js-fn-1-tc-10",
        "input": "madam",
        "expectedOutput": "madam",
        "isHidden": true
      }
    ]
  },
  {
    "id": "js-fn-2",
    "languageId": "javascript",
    "language": "javascript",
    "level": "beginner",
    "topicId": "js-functions-and-arrow-syntax",
    "title": "Calculate Factorial with Function",
    "slug": "calculate-factorial-with-function",
    "difficulty": "easy",
    "problemStatement": "Implement factorial function factorial(n). Return n! as BigInt or integer. 0! = 1.",
    "description": "Implement factorial function factorial(n). Return n! as BigInt or integer. 0! = 1.",
    "inputFormat": "A non-negative integer N.",
    "outputFormat": "Print N!.",
    "constraints": [
      "0 <= N <= 18"
    ],
    "examples": [
      {
        "input": "5",
        "output": "120",
        "explanation": "5! = 120."
      },
      {
        "input": "0",
        "output": "1",
        "explanation": "0! = 1."
      },
      {
        "input": "3",
        "output": "6",
        "explanation": "3! = 6."
      }
    ],
    "starterCode": {
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\n\nmain();\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "js-fn-2-tc-1",
        "input": "5",
        "expectedOutput": "120",
        "isHidden": false
      },
      {
        "id": "js-fn-2-tc-2",
        "input": "0",
        "expectedOutput": "1",
        "isHidden": false
      },
      {
        "id": "js-fn-2-tc-3",
        "input": "3",
        "expectedOutput": "6",
        "isHidden": false
      },
      {
        "id": "js-fn-2-tc-4",
        "input": "1",
        "expectedOutput": "1",
        "isHidden": true
      },
      {
        "id": "js-fn-2-tc-5",
        "input": "4",
        "expectedOutput": "24",
        "isHidden": true
      },
      {
        "id": "js-fn-2-tc-6",
        "input": "6",
        "expectedOutput": "720",
        "isHidden": true
      },
      {
        "id": "js-fn-2-tc-7",
        "input": "7",
        "expectedOutput": "5040",
        "isHidden": true
      },
      {
        "id": "js-fn-2-tc-8",
        "input": "10",
        "expectedOutput": "3628800",
        "isHidden": true
      },
      {
        "id": "js-fn-2-tc-9",
        "input": "8",
        "expectedOutput": "40320",
        "isHidden": true
      },
      {
        "id": "js-fn-2-tc-10",
        "input": "12",
        "expectedOutput": "479001600",
        "isHidden": true
      }
    ]
  },
  {
    "id": "js-fn-3",
    "languageId": "javascript",
    "language": "javascript",
    "level": "beginner",
    "topicId": "js-functions-and-arrow-syntax",
    "title": "Default Parameters in Greeting Function",
    "slug": "default-parameters-in-greeting-function",
    "difficulty": "medium",
    "problemStatement": "Implement greet(name = \"Guest\", greeting = \"Hello\"). Given input line, if name is \"-\", use default \"Guest\". If greeting is \"-\", use default \"Hello\". Print \"<greeting>, <name>!\".",
    "description": "Implement greet(name = \"Guest\", greeting = \"Hello\"). Given input line, if name is \"-\", use default \"Guest\". If greeting is \"-\", use default \"Hello\". Print \"<greeting>, <name>!\".",
    "inputFormat": "Name and greeting tokens.",
    "outputFormat": "Print greeting string.",
    "constraints": [
      "Tokens <= 50 chars."
    ],
    "examples": [
      {
        "input": "Alice Hi",
        "output": "Hi, Alice!",
        "explanation": "Both provided."
      },
      {
        "input": "- -",
        "output": "Hello, Guest!",
        "explanation": "Both default."
      },
      {
        "input": "Bob -",
        "output": "Hello, Bob!",
        "explanation": "Default greeting."
      }
    ],
    "starterCode": {
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\n\nmain();\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "js-fn-3-tc-1",
        "input": "Alice Hi",
        "expectedOutput": "Hi, Alice!",
        "isHidden": false
      },
      {
        "id": "js-fn-3-tc-2",
        "input": "- -",
        "expectedOutput": "Hello, Guest!",
        "isHidden": false
      },
      {
        "id": "js-fn-3-tc-3",
        "input": "Bob -",
        "expectedOutput": "Hello, Bob!",
        "isHidden": false
      },
      {
        "id": "js-fn-3-tc-4",
        "input": "- Welcome",
        "expectedOutput": "Welcome, Guest!",
        "isHidden": true
      },
      {
        "id": "js-fn-3-tc-5",
        "input": "Charlie Hey",
        "expectedOutput": "Hey, Charlie!",
        "isHidden": true
      },
      {
        "id": "js-fn-3-tc-6",
        "input": "David Greetings",
        "expectedOutput": "Greetings, David!",
        "isHidden": true
      },
      {
        "id": "js-fn-3-tc-7",
        "input": "Emma -",
        "expectedOutput": "Hello, Emma!",
        "isHidden": true
      },
      {
        "id": "js-fn-3-tc-8",
        "input": "- Bonjour",
        "expectedOutput": "Bonjour, Guest!",
        "isHidden": true
      },
      {
        "id": "js-fn-3-tc-9",
        "input": "Frank Howdy",
        "expectedOutput": "Howdy, Frank!",
        "isHidden": true
      },
      {
        "id": "js-fn-3-tc-10",
        "input": "Grace -",
        "expectedOutput": "Hello, Grace!",
        "isHidden": true
      }
    ]
  },
  {
    "id": "js-fn-4",
    "languageId": "javascript",
    "language": "javascript",
    "level": "beginner",
    "topicId": "js-functions-and-arrow-syntax",
    "title": "Curry Function for Binary Addition",
    "slug": "curry-function-for-binary-addition",
    "difficulty": "medium",
    "problemStatement": "Implement a curried addition function const add = a => b => a + b. Given two integers A and B, evaluate add(A)(B). Print the result.",
    "description": "Implement a curried addition function const add = a => b => a + b. Given two integers A and B, evaluate add(A)(B). Print the result.",
    "inputFormat": "Two space-separated integers A and B.",
    "outputFormat": "Print sum.",
    "constraints": [
      "-10^9 <= A, B <= 10^9"
    ],
    "examples": [
      {
        "input": "10 20",
        "output": "30",
        "explanation": "add(10)(20) = 30."
      },
      {
        "input": "0 5",
        "output": "5",
        "explanation": "0 + 5 = 5."
      },
      {
        "input": "-5 5",
        "output": "0",
        "explanation": "-5 + 5 = 0."
      }
    ],
    "starterCode": {
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\n\nmain();\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "js-fn-4-tc-1",
        "input": "10 20",
        "expectedOutput": "30",
        "isHidden": false
      },
      {
        "id": "js-fn-4-tc-2",
        "input": "0 5",
        "expectedOutput": "5",
        "isHidden": false
      },
      {
        "id": "js-fn-4-tc-3",
        "input": "-5 5",
        "expectedOutput": "0",
        "isHidden": false
      },
      {
        "id": "js-fn-4-tc-4",
        "input": "100 200",
        "expectedOutput": "300",
        "isHidden": true
      },
      {
        "id": "js-fn-4-tc-5",
        "input": "-10 -20",
        "expectedOutput": "-30",
        "isHidden": true
      },
      {
        "id": "js-fn-4-tc-6",
        "input": "42 8",
        "expectedOutput": "50",
        "isHidden": true
      },
      {
        "id": "js-fn-4-tc-7",
        "input": "1 1",
        "expectedOutput": "2",
        "isHidden": true
      },
      {
        "id": "js-fn-4-tc-8",
        "input": "500 500",
        "expectedOutput": "1000",
        "isHidden": true
      },
      {
        "id": "js-fn-4-tc-9",
        "input": "99 1",
        "expectedOutput": "100",
        "isHidden": true
      },
      {
        "id": "js-fn-4-tc-10",
        "input": "123 456",
        "expectedOutput": "579",
        "isHidden": true
      }
    ]
  },
  {
    "id": "js-scp-1",
    "languageId": "javascript",
    "language": "javascript",
    "level": "beginner",
    "topicId": "js-scope-and-hoisting",
    "title": "Block Scope vs Function Scope Simulation",
    "slug": "block-scope-vs-function-scope-simulation",
    "difficulty": "easy",
    "problemStatement": "Given initial value X and delta D inside an if block, let variables shadow outer variables. If isBlockScope is 1, outer variable remains X. If 0 (var behavior), outer becomes X + D. Print \"Final: <val>\".",
    "description": "Given initial value X and delta D inside an if block, let variables shadow outer variables. If isBlockScope is 1, outer variable remains X. If 0 (var behavior), outer becomes X + D. Print \"Final: <val>\".",
    "inputFormat": "Initial X, delta D, and flag isBlockScope (1 or 0).",
    "outputFormat": "Print \"Final: <val>\".",
    "constraints": [
      "-10^5 <= X, D <= 10^5"
    ],
    "examples": [
      {
        "input": "10 5 1",
        "output": "Final: 10",
        "explanation": "Block scope preserves outer 10."
      },
      {
        "input": "10 5 0",
        "output": "Final: 15",
        "explanation": "Var reassigns outer to 15."
      },
      {
        "input": "0 20 1",
        "output": "Final: 0",
        "explanation": "Outer is 0."
      }
    ],
    "starterCode": {
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\n\nmain();\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "js-scp-1-tc-1",
        "input": "10 5 1",
        "expectedOutput": "Final: 10",
        "isHidden": false
      },
      {
        "id": "js-scp-1-tc-2",
        "input": "10 5 0",
        "expectedOutput": "Final: 15",
        "isHidden": false
      },
      {
        "id": "js-scp-1-tc-3",
        "input": "0 20 1",
        "expectedOutput": "Final: 0",
        "isHidden": false
      },
      {
        "id": "js-scp-1-tc-4",
        "input": "0 20 0",
        "expectedOutput": "Final: 20",
        "isHidden": true
      },
      {
        "id": "js-scp-1-tc-5",
        "input": "50 -10 1",
        "expectedOutput": "Final: 50",
        "isHidden": true
      },
      {
        "id": "js-scp-1-tc-6",
        "input": "50 -10 0",
        "expectedOutput": "Final: 40",
        "isHidden": true
      },
      {
        "id": "js-scp-1-tc-7",
        "input": "100 50 1",
        "expectedOutput": "Final: 100",
        "isHidden": true
      },
      {
        "id": "js-scp-1-tc-8",
        "input": "100 50 0",
        "expectedOutput": "Final: 150",
        "isHidden": true
      },
      {
        "id": "js-scp-1-tc-9",
        "input": "5 5 1",
        "expectedOutput": "Final: 5",
        "isHidden": true
      },
      {
        "id": "js-scp-1-tc-10",
        "input": "5 5 0",
        "expectedOutput": "Final: 10",
        "isHidden": true
      }
    ]
  },
  {
    "id": "js-scp-2",
    "languageId": "javascript",
    "language": "javascript",
    "level": "beginner",
    "topicId": "js-scope-and-hoisting",
    "title": "Variable Shadowing in Nested Functions",
    "slug": "variable-shadowing-in-nested-functions",
    "difficulty": "medium",
    "problemStatement": "Simulate variable shadowing: Global G = 100. Function inner shadows G with local value L. Print \"Inner: <L> Outer: <G>\".",
    "description": "Simulate variable shadowing: Global G = 100. Function inner shadows G with local value L. Print \"Inner: <L> Outer: <G>\".",
    "inputFormat": "Global G and local L.",
    "outputFormat": "Print \"Inner: <L> Outer: <G>\".",
    "constraints": [
      "-10^5 <= G, L <= 10^5"
    ],
    "examples": [
      {
        "input": "100 25",
        "output": "Inner: 25 Outer: 100",
        "explanation": "Inner shadowed."
      },
      {
        "input": "50 50",
        "output": "Inner: 50 Outer: 50",
        "explanation": "Equal values."
      },
      {
        "input": "0 10",
        "output": "Inner: 10 Outer: 0",
        "explanation": "Inner 10."
      }
    ],
    "starterCode": {
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\n\nmain();\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "js-scp-2-tc-1",
        "input": "100 25",
        "expectedOutput": "Inner: 25 Outer: 100",
        "isHidden": false
      },
      {
        "id": "js-scp-2-tc-2",
        "input": "50 50",
        "expectedOutput": "Inner: 50 Outer: 50",
        "isHidden": false
      },
      {
        "id": "js-scp-2-tc-3",
        "input": "0 10",
        "expectedOutput": "Inner: 10 Outer: 0",
        "isHidden": false
      },
      {
        "id": "js-scp-2-tc-4",
        "input": "-10 20",
        "expectedOutput": "Inner: 20 Outer: -10",
        "isHidden": true
      },
      {
        "id": "js-scp-2-tc-5",
        "input": "42 99",
        "expectedOutput": "Inner: 99 Outer: 42",
        "isHidden": true
      },
      {
        "id": "js-scp-2-tc-6",
        "input": "5 1",
        "expectedOutput": "Inner: 1 Outer: 5",
        "isHidden": true
      },
      {
        "id": "js-scp-2-tc-7",
        "input": "1000 500",
        "expectedOutput": "Inner: 500 Outer: 1000",
        "isHidden": true
      },
      {
        "id": "js-scp-2-tc-8",
        "input": "7 77",
        "expectedOutput": "Inner: 77 Outer: 7",
        "isHidden": true
      },
      {
        "id": "js-scp-2-tc-9",
        "input": "20 -20",
        "expectedOutput": "Inner: -20 Outer: 20",
        "isHidden": true
      },
      {
        "id": "js-scp-2-tc-10",
        "input": "12 34",
        "expectedOutput": "Inner: 34 Outer: 12",
        "isHidden": true
      }
    ]
  },
  {
    "id": "js-scp-3",
    "languageId": "javascript",
    "language": "javascript",
    "level": "beginner",
    "topicId": "js-scope-and-hoisting",
    "title": "Simulating Temporal Dead Zone (TDZ)",
    "slug": "simulating-temporal-dead-zone-tdz",
    "difficulty": "medium",
    "problemStatement": "Simulate TDZ access: Given variable type (\"var\" or \"let\"), accessing before initialization outputs: for \"var\" -> \"undefined\", for \"let\" -> \"ReferenceError: Cannot access before initialization\".",
    "description": "Simulate TDZ access: Given variable type (\"var\" or \"let\"), accessing before initialization outputs: for \"var\" -> \"undefined\", for \"let\" -> \"ReferenceError: Cannot access before initialization\".",
    "inputFormat": "Type string (\"var\" or \"let\").",
    "outputFormat": "Print outcome string.",
    "constraints": [
      "\"var\" or \"let\"."
    ],
    "examples": [
      {
        "input": "var",
        "output": "undefined",
        "explanation": "Hoisted with undefined."
      },
      {
        "input": "let",
        "output": "ReferenceError: Cannot access before initialization",
        "explanation": "TDZ throws error."
      },
      {
        "input": "var",
        "output": "undefined",
        "explanation": "Hoisted."
      }
    ],
    "starterCode": {
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\n\nmain();\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "js-scp-3-tc-1",
        "input": "var",
        "expectedOutput": "undefined",
        "isHidden": false
      },
      {
        "id": "js-scp-3-tc-2",
        "input": "let",
        "expectedOutput": "ReferenceError: Cannot access before initialization",
        "isHidden": false
      },
      {
        "id": "js-scp-3-tc-3",
        "input": "var",
        "expectedOutput": "undefined",
        "isHidden": false
      },
      {
        "id": "js-scp-3-tc-4",
        "input": "let",
        "expectedOutput": "ReferenceError: Cannot access before initialization",
        "isHidden": true
      },
      {
        "id": "js-scp-3-tc-5",
        "input": "var",
        "expectedOutput": "undefined",
        "isHidden": true
      },
      {
        "id": "js-scp-3-tc-6",
        "input": "let",
        "expectedOutput": "ReferenceError: Cannot access before initialization",
        "isHidden": true
      },
      {
        "id": "js-scp-3-tc-7",
        "input": "var",
        "expectedOutput": "undefined",
        "isHidden": true
      },
      {
        "id": "js-scp-3-tc-8",
        "input": "let",
        "expectedOutput": "ReferenceError: Cannot access before initialization",
        "isHidden": true
      },
      {
        "id": "js-scp-3-tc-9",
        "input": "var",
        "expectedOutput": "undefined",
        "isHidden": true
      },
      {
        "id": "js-scp-3-tc-10",
        "input": "let",
        "expectedOutput": "ReferenceError: Cannot access before initialization",
        "isHidden": true
      }
    ]
  },
  {
    "id": "js-arr-1",
    "languageId": "javascript",
    "language": "javascript",
    "level": "beginner",
    "topicId": "js-arrays-and-methods",
    "title": "Array Push, Pop, Shift, and Unshift Operations",
    "slug": "array-push-pop-shift-and-unshift-operations",
    "difficulty": "easy",
    "problemStatement": "Start with empty array. Process N operations: \"PUSH <val>\", \"POP\", \"SHIFT\", \"UNSHIFT <val>\". Print the final array elements separated by space. If empty, print \"EMPTY\".",
    "description": "Start with empty array. Process N operations: \"PUSH <val>\", \"POP\", \"SHIFT\", \"UNSHIFT <val>\". Print the final array elements separated by space. If empty, print \"EMPTY\".",
    "inputFormat": "First line N, next N lines operations.",
    "outputFormat": "Print space-separated elements or \"EMPTY\".",
    "constraints": [
      "1 <= N <= 1000"
    ],
    "examples": [
      {
        "input": "4\nPUSH 1\nPUSH 2\nPOP\nPUSH 3",
        "output": "1 3",
        "explanation": "1, 2 pushed, 2 popped, 3 pushed -> 1 3."
      },
      {
        "input": "2\nPUSH A\nSHIFT",
        "output": "EMPTY",
        "explanation": "Pushed then shifted."
      },
      {
        "input": "3\nUNSHIFT X\nPUSH Y\nUNSHIFT Z",
        "output": "Z X Y",
        "explanation": "Unshifted front."
      }
    ],
    "starterCode": {
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\n\nmain();\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "js-arr-1-tc-1",
        "input": "4\nPUSH 1\nPUSH 2\nPOP\nPUSH 3",
        "expectedOutput": "1 3",
        "isHidden": false
      },
      {
        "id": "js-arr-1-tc-2",
        "input": "2\nPUSH A\nSHIFT",
        "expectedOutput": "EMPTY",
        "isHidden": false
      },
      {
        "id": "js-arr-1-tc-3",
        "input": "3\nUNSHIFT X\nPUSH Y\nUNSHIFT Z",
        "expectedOutput": "Z X Y",
        "isHidden": false
      },
      {
        "id": "js-arr-1-tc-4",
        "input": "3\nPUSH 10\nPUSH 20\nPUSH 30",
        "expectedOutput": "10 20 30",
        "isHidden": true
      },
      {
        "id": "js-arr-1-tc-5",
        "input": "2\nPOP\nPOP",
        "expectedOutput": "EMPTY",
        "isHidden": true
      },
      {
        "id": "js-arr-1-tc-6",
        "input": "4\nPUSH 5\nUNSHIFT 4\nPUSH 6\nSHIFT",
        "expectedOutput": "5 6",
        "isHidden": true
      },
      {
        "id": "js-arr-1-tc-7",
        "input": "3\nPUSH 100\nPOP\nPUSH 200",
        "expectedOutput": "200",
        "isHidden": true
      },
      {
        "id": "js-arr-1-tc-8",
        "input": "2\nUNSHIFT A\nPUSH B",
        "expectedOutput": "A B",
        "isHidden": true
      },
      {
        "id": "js-arr-1-tc-9",
        "input": "4\nPUSH 1\nPUSH 2\nSHIFT\nPOP",
        "expectedOutput": "EMPTY",
        "isHidden": true
      },
      {
        "id": "js-arr-1-tc-10",
        "input": "5\nPUSH 10\nPUSH 20\nPUSH 30\nPOP\nUNSHIFT 5",
        "expectedOutput": "5 10 20",
        "isHidden": true
      }
    ]
  },
  {
    "id": "js-arr-2",
    "languageId": "javascript",
    "language": "javascript",
    "level": "beginner",
    "topicId": "js-arrays-and-methods",
    "title": "Find Maximum and Minimum Element in Array",
    "slug": "find-maximum-and-minimum-element-in-array",
    "difficulty": "easy",
    "problemStatement": "Given N integers, use Math.max(...arr) and Math.min(...arr) to find maximum and minimum. Print \"Max: <max> Min: <min>\".",
    "description": "Given N integers, use Math.max(...arr) and Math.min(...arr) to find maximum and minimum. Print \"Max: <max> Min: <min>\".",
    "inputFormat": "First line N, second line N space-separated integers.",
    "outputFormat": "Print \"Max: <max> Min: <min>\".",
    "constraints": [
      "1 <= N <= 10^5"
    ],
    "examples": [
      {
        "input": "5\n1 5 3 9 2",
        "output": "Max: 9 Min: 1",
        "explanation": "Max 9, min 1."
      },
      {
        "input": "3\n-5 -2 -10",
        "output": "Max: -2 Min: -10",
        "explanation": "Negatives."
      },
      {
        "input": "1\n100",
        "output": "Max: 100 Min: 100",
        "explanation": "Single element."
      }
    ],
    "starterCode": {
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\n\nmain();\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "js-arr-2-tc-1",
        "input": "5\n1 5 3 9 2",
        "expectedOutput": "Max: 9 Min: 1",
        "isHidden": false
      },
      {
        "id": "js-arr-2-tc-2",
        "input": "3\n-5 -2 -10",
        "expectedOutput": "Max: -2 Min: -10",
        "isHidden": false
      },
      {
        "id": "js-arr-2-tc-3",
        "input": "1\n100",
        "expectedOutput": "Max: 100 Min: 100",
        "isHidden": false
      },
      {
        "id": "js-arr-2-tc-4",
        "input": "4\n10 20 30 40",
        "expectedOutput": "Max: 40 Min: 10",
        "isHidden": true
      },
      {
        "id": "js-arr-2-tc-5",
        "input": "5\n0 0 0 0 0",
        "expectedOutput": "Max: 0 Min: 0",
        "isHidden": true
      },
      {
        "id": "js-arr-2-tc-6",
        "input": "6\n-10 50 -30 20 100 -5",
        "expectedOutput": "Max: 100 Min: -30",
        "isHidden": true
      },
      {
        "id": "js-arr-2-tc-7",
        "input": "4\n99 12 85 43",
        "expectedOutput": "Max: 99 Min: 12",
        "isHidden": true
      },
      {
        "id": "js-arr-2-tc-8",
        "input": "5\n7 7 7 7 8",
        "expectedOutput": "Max: 8 Min: 7",
        "isHidden": true
      },
      {
        "id": "js-arr-2-tc-9",
        "input": "3\n-1000 0 1000",
        "expectedOutput": "Max: 1000 Min: -1000",
        "isHidden": true
      },
      {
        "id": "js-arr-2-tc-10",
        "input": "5\n4 2 8 6 1",
        "expectedOutput": "Max: 8 Min: 1",
        "isHidden": true
      }
    ]
  },
  {
    "id": "js-arr-3",
    "languageId": "javascript",
    "language": "javascript",
    "level": "beginner",
    "topicId": "js-arrays-and-methods",
    "title": "Array Slice vs Splice Operations",
    "slug": "array-slice-vs-splice-operations",
    "difficulty": "medium",
    "problemStatement": "Given N integers, start index S, and count C: Use slice(S, S+C) to extract a subsegment, then use splice(S, C) to remove it from the original array. Print \"Extracted: <extracted> Remaining: <remaining>\".",
    "description": "Given N integers, start index S, and count C: Use slice(S, S+C) to extract a subsegment, then use splice(S, C) to remove it from the original array. Print \"Extracted: <extracted> Remaining: <remaining>\".",
    "inputFormat": "First line N S C, second line N integers.",
    "outputFormat": "Print \"Extracted: <items> Remaining: <items>\".",
    "constraints": [
      "1 <= N <= 1000",
      "0 <= S < N"
    ],
    "examples": [
      {
        "input": "5 1 2\n10 20 30 40 50",
        "output": "Extracted: 20 30 Remaining: 10 40 50",
        "explanation": "20, 30 extracted."
      },
      {
        "input": "3 0 1\n1 2 3",
        "output": "Extracted: 1 Remaining: 2 3",
        "explanation": "First item."
      },
      {
        "input": "4 2 2\n5 6 7 8",
        "output": "Extracted: 7 8 Remaining: 5 6",
        "explanation": "Last two items."
      }
    ],
    "starterCode": {
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\n\nmain();\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "js-arr-3-tc-1",
        "input": "5 1 2\n10 20 30 40 50",
        "expectedOutput": "Extracted: 20 30 Remaining: 10 40 50",
        "isHidden": false
      },
      {
        "id": "js-arr-3-tc-2",
        "input": "3 0 1\n1 2 3",
        "expectedOutput": "Extracted: 1 Remaining: 2 3",
        "isHidden": false
      },
      {
        "id": "js-arr-3-tc-3",
        "input": "4 2 2\n5 6 7 8",
        "expectedOutput": "Extracted: 7 8 Remaining: 5 6",
        "isHidden": false
      },
      {
        "id": "js-arr-3-tc-4",
        "input": "5 0 3\n1 2 3 4 5",
        "expectedOutput": "Extracted: 1 2 3 Remaining: 4 5",
        "isHidden": true
      },
      {
        "id": "js-arr-3-tc-5",
        "input": "4 1 1\n10 20 30 40",
        "expectedOutput": "Extracted: 20 Remaining: 10 30 40",
        "isHidden": true
      },
      {
        "id": "js-arr-3-tc-6",
        "input": "3 1 2\nA B C",
        "expectedOutput": "Extracted: B C Remaining: A",
        "isHidden": true
      },
      {
        "id": "js-arr-3-tc-7",
        "input": "2 0 2\nX Y",
        "expectedOutput": "Extracted: X Y Remaining: ",
        "isHidden": true
      },
      {
        "id": "js-arr-3-tc-8",
        "input": "6 2 3\n1 2 3 4 5 6",
        "expectedOutput": "Extracted: 3 4 5 Remaining: 1 2 6",
        "isHidden": true
      },
      {
        "id": "js-arr-3-tc-9",
        "input": "4 3 1\n10 20 30 40",
        "expectedOutput": "Extracted: 40 Remaining: 10 20 30",
        "isHidden": true
      },
      {
        "id": "js-arr-3-tc-10",
        "input": "5 2 1\n7 8 9 10 11",
        "expectedOutput": "Extracted: 9 Remaining: 7 8 10 11",
        "isHidden": true
      }
    ]
  },
  {
    "id": "js-arr-4",
    "languageId": "javascript",
    "language": "javascript",
    "level": "beginner",
    "topicId": "js-arrays-and-methods",
    "title": "Flatten Array by One Level using flat()",
    "slug": "flatten-array-by-one-level-using-flat",
    "difficulty": "medium",
    "problemStatement": "Given a nested array of integers represented as rows, use arr.flat() to flatten into 1D array. Print space-separated elements.",
    "description": "Given a nested array of integers represented as rows, use arr.flat() to flatten into 1D array. Print space-separated elements.",
    "inputFormat": "First line R (number of rows), next R lines each contain space-separated integers.",
    "outputFormat": "Print flattened space-separated values.",
    "constraints": [
      "1 <= R <= 100"
    ],
    "examples": [
      {
        "input": "2\n1 2 3\n4 5 6",
        "output": "1 2 3 4 5 6",
        "explanation": "Flattened."
      },
      {
        "input": "3\n10\n20\n30",
        "output": "10 20 30",
        "explanation": "Flattened columns."
      },
      {
        "input": "1\n5 6 7",
        "output": "5 6 7",
        "explanation": "Single row."
      }
    ],
    "starterCode": {
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\n\nmain();\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "js-arr-4-tc-1",
        "input": "2\n1 2 3\n4 5 6",
        "expectedOutput": "1 2 3 4 5 6",
        "isHidden": false
      },
      {
        "id": "js-arr-4-tc-2",
        "input": "3\n10\n20\n30",
        "expectedOutput": "10 20 30",
        "isHidden": false
      },
      {
        "id": "js-arr-4-tc-3",
        "input": "1\n5 6 7",
        "expectedOutput": "5 6 7",
        "isHidden": false
      },
      {
        "id": "js-arr-4-tc-4",
        "input": "3\n1 2\n3 4\n5 6",
        "expectedOutput": "1 2 3 4 5 6",
        "isHidden": true
      },
      {
        "id": "js-arr-4-tc-5",
        "input": "2\n-1 -2\n-3 -4",
        "expectedOutput": "-1 -2 -3 -4",
        "isHidden": true
      },
      {
        "id": "js-arr-4-tc-6",
        "input": "4\n1\n2\n3\n4",
        "expectedOutput": "1 2 3 4",
        "isHidden": true
      },
      {
        "id": "js-arr-4-tc-7",
        "input": "2\n100 200\n300 400",
        "expectedOutput": "100 200 300 400",
        "isHidden": true
      },
      {
        "id": "js-arr-4-tc-8",
        "input": "1\n42",
        "expectedOutput": "42",
        "isHidden": true
      },
      {
        "id": "js-arr-4-tc-9",
        "input": "3\n7 8 9\n10 11 12\n13 14 15",
        "expectedOutput": "7 8 9 10 11 12 13 14 15",
        "isHidden": true
      },
      {
        "id": "js-arr-4-tc-10",
        "input": "2\n0 0\n1 1",
        "expectedOutput": "0 0 1 1",
        "isHidden": true
      }
    ]
  },
  {
    "id": "js-obj-1",
    "languageId": "javascript",
    "language": "javascript",
    "level": "beginner",
    "topicId": "js-objects-and-properties",
    "title": "Object Property Access and Dynamic Keys",
    "slug": "object-property-access-and-dynamic-keys",
    "difficulty": "easy",
    "problemStatement": "Given N key-value pairs forming an object and query key Q, lookup object[Q]. If present, print \"Found: <val>\", else print \"Key Not Found\".",
    "description": "Given N key-value pairs forming an object and query key Q, lookup object[Q]. If present, print \"Found: <val>\", else print \"Key Not Found\".",
    "inputFormat": "First line N, next N lines \"key value\", last line Q.",
    "outputFormat": "Print \"Found: <val>\" or \"Key Not Found\".",
    "constraints": [
      "1 <= N <= 1000"
    ],
    "examples": [
      {
        "input": "2\nname Alice\nage 25\nname",
        "output": "Found: Alice",
        "explanation": "name found."
      },
      {
        "input": "1\nrole admin\nuser",
        "output": "Key Not Found",
        "explanation": "user not in object."
      },
      {
        "input": "2\nk1 v1\nk2 v2\nk2",
        "output": "Found: v2",
        "explanation": "k2 found."
      }
    ],
    "starterCode": {
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\n\nmain();\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "js-obj-1-tc-1",
        "input": "2\nname Alice\nage 25\nname",
        "expectedOutput": "Found: Alice",
        "isHidden": false
      },
      {
        "id": "js-obj-1-tc-2",
        "input": "1\nrole admin\nuser",
        "expectedOutput": "Key Not Found",
        "isHidden": false
      },
      {
        "id": "js-obj-1-tc-3",
        "input": "2\nk1 v1\nk2 v2\nk2",
        "expectedOutput": "Found: v2",
        "isHidden": false
      },
      {
        "id": "js-obj-1-tc-4",
        "input": "3\na 1\nb 2\nc 3\nb",
        "expectedOutput": "Found: 2",
        "isHidden": true
      },
      {
        "id": "js-obj-1-tc-5",
        "input": "2\nx 10\ny 20\nz",
        "expectedOutput": "Key Not Found",
        "isHidden": true
      },
      {
        "id": "js-obj-1-tc-6",
        "input": "1\ntitle Manager\ntitle",
        "expectedOutput": "Found: Manager",
        "isHidden": true
      },
      {
        "id": "js-obj-1-tc-7",
        "input": "3\nid 101\nstatus ok\nenv prod\nenv",
        "expectedOutput": "Found: prod",
        "isHidden": true
      },
      {
        "id": "js-obj-1-tc-8",
        "input": "2\np 5\nq 6\nr",
        "expectedOutput": "Key Not Found",
        "isHidden": true
      },
      {
        "id": "js-obj-1-tc-9",
        "input": "1\nalpha beta\ngamma",
        "expectedOutput": "Key Not Found",
        "isHidden": true
      },
      {
        "id": "js-obj-1-tc-10",
        "input": "3\nred 1\ngreen 2\nblue 3\nblue",
        "expectedOutput": "Found: 3",
        "isHidden": true
      }
    ]
  },
  {
    "id": "js-obj-2",
    "languageId": "javascript",
    "language": "javascript",
    "level": "beginner",
    "topicId": "js-objects-and-properties",
    "title": "Count Keys and Values with Object.keys and Object.values",
    "slug": "count-keys-and-values-with-object-keys-and-object-values",
    "difficulty": "easy",
    "problemStatement": "Given N key-value pairs, print \"Key Count: <Object.keys(obj).length> Total Value Length: <sum of string value lengths>\".",
    "description": "Given N key-value pairs, print \"Key Count: <Object.keys(obj).length> Total Value Length: <sum of string value lengths>\".",
    "inputFormat": "First line N, next N lines \"key value\".",
    "outputFormat": "Print \"Key Count: <K> Total Value Length: <L>\".",
    "constraints": [
      "1 <= N <= 1000"
    ],
    "examples": [
      {
        "input": "2\nname Bob\ncity Paris",
        "output": "Key Count: 2 Total Value Length: 8",
        "explanation": "Bob (3) + Paris (5) = 8."
      },
      {
        "input": "1\nx cat",
        "output": "Key Count: 1 Total Value Length: 3",
        "explanation": "cat is len 3."
      },
      {
        "input": "3\na 123\nb 45\nc 6",
        "output": "Key Count: 3 Total Value Length: 6",
        "explanation": "3+2+1 = 6."
      }
    ],
    "starterCode": {
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\n\nmain();\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "js-obj-2-tc-1",
        "input": "2\nname Bob\ncity Paris",
        "expectedOutput": "Key Count: 2 Total Value Length: 8",
        "isHidden": false
      },
      {
        "id": "js-obj-2-tc-2",
        "input": "1\nx cat",
        "expectedOutput": "Key Count: 1 Total Value Length: 3",
        "isHidden": false
      },
      {
        "id": "js-obj-2-tc-3",
        "input": "3\na 123\nb 45\nc 6",
        "expectedOutput": "Key Count: 3 Total Value Length: 6",
        "isHidden": false
      },
      {
        "id": "js-obj-2-tc-4",
        "input": "2\nfirst John\nlast Doe",
        "expectedOutput": "Key Count: 2 Total Value Length: 7",
        "isHidden": true
      },
      {
        "id": "js-obj-2-tc-5",
        "input": "4\nk1 a\nk2 bb\nk3 ccc\nk4 dddd",
        "expectedOutput": "Key Count: 4 Total Value Length: 10",
        "isHidden": true
      },
      {
        "id": "js-obj-2-tc-6",
        "input": "1\nkey test",
        "expectedOutput": "Key Count: 1 Total Value Length: 4",
        "isHidden": true
      },
      {
        "id": "js-obj-2-tc-7",
        "input": "3\nx hello\ny world\nz python",
        "expectedOutput": "Key Count: 3 Total Value Length: 16",
        "isHidden": true
      },
      {
        "id": "js-obj-2-tc-8",
        "input": "2\nu 10\nv 20",
        "expectedOutput": "Key Count: 2 Total Value Length: 4",
        "isHidden": true
      },
      {
        "id": "js-obj-2-tc-9",
        "input": "1\nsolo lone",
        "expectedOutput": "Key Count: 1 Total Value Length: 4",
        "isHidden": true
      },
      {
        "id": "js-obj-2-tc-10",
        "input": "3\na alpha\nb beta\nc gamma",
        "expectedOutput": "Key Count: 3 Total Value Length: 14",
        "isHidden": true
      }
    ]
  },
  {
    "id": "js-obj-3",
    "languageId": "javascript",
    "language": "javascript",
    "level": "beginner",
    "topicId": "js-objects-and-properties",
    "title": "Object Deep Clone Utility in JavaScript",
    "slug": "object-deep-clone-utility-in-javascript",
    "difficulty": "medium",
    "problemStatement": "Simulate structuredClone(obj): Given nested JSON object {\"user\": {\"name\": \"...\"}, \"id\": ...}, clone it, mutate clone's user.name to newName. Print original user name and cloned user name \"Original: <orig> Cloned: <newName>\".",
    "description": "Simulate structuredClone(obj): Given nested JSON object {\"user\": {\"name\": \"...\"}, \"id\": ...}, clone it, mutate clone's user.name to newName. Print original user name and cloned user name \"Original: <orig> Cloned: <newName>\".",
    "inputFormat": "Original name and new name.",
    "outputFormat": "Print \"Original: <orig> Cloned: <new>\".",
    "constraints": [
      "Strings <= 50 chars."
    ],
    "examples": [
      {
        "input": "Alice Bob",
        "output": "Original: Alice Cloned: Bob",
        "explanation": "Original unchanged."
      },
      {
        "input": "John Jane",
        "output": "Original: John Cloned: Jane",
        "explanation": "Cloned modified."
      },
      {
        "input": "Admin Super",
        "output": "Original: Admin Cloned: Super",
        "explanation": "Deep clone isolation."
      }
    ],
    "starterCode": {
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\n\nmain();\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "js-obj-3-tc-1",
        "input": "Alice Bob",
        "expectedOutput": "Original: Alice Cloned: Bob",
        "isHidden": false
      },
      {
        "id": "js-obj-3-tc-2",
        "input": "John Jane",
        "expectedOutput": "Original: John Cloned: Jane",
        "isHidden": false
      },
      {
        "id": "js-obj-3-tc-3",
        "input": "Admin Super",
        "expectedOutput": "Original: Admin Cloned: Super",
        "isHidden": false
      },
      {
        "id": "js-obj-3-tc-4",
        "input": "Charlie Dan",
        "expectedOutput": "Original: Charlie Cloned: Dan",
        "isHidden": true
      },
      {
        "id": "js-obj-3-tc-5",
        "input": "Guest User",
        "expectedOutput": "Original: Guest Cloned: User",
        "isHidden": true
      },
      {
        "id": "js-obj-3-tc-6",
        "input": "Emma Frank",
        "expectedOutput": "Original: Emma Cloned: Frank",
        "isHidden": true
      },
      {
        "id": "js-obj-3-tc-7",
        "input": "Dev Prod",
        "expectedOutput": "Original: Dev Cloned: Prod",
        "isHidden": true
      },
      {
        "id": "js-obj-3-tc-8",
        "input": "Tom Jerry",
        "expectedOutput": "Original: Tom Cloned: Jerry",
        "isHidden": true
      },
      {
        "id": "js-obj-3-tc-9",
        "input": "Alpha Beta",
        "expectedOutput": "Original: Alpha Cloned: Beta",
        "isHidden": true
      },
      {
        "id": "js-obj-3-tc-10",
        "input": "Node Browser",
        "expectedOutput": "Original: Node Cloned: Browser",
        "isHidden": true
      }
    ]
  },
  {
    "id": "js-err-1",
    "languageId": "javascript",
    "language": "javascript",
    "level": "beginner",
    "topicId": "js-error-handling-try-catch",
    "title": "Safe JSON Parse with Default Fallback",
    "slug": "safe-json-parse-with-default-fallback",
    "difficulty": "easy",
    "problemStatement": "Given JSON string S, try to parse it with JSON.parse(). If parsing fails with SyntaxError, catch and print \"INVALID JSON\". If valid, print \"VALID JSON\".",
    "description": "Given JSON string S, try to parse it with JSON.parse(). If parsing fails with SyntaxError, catch and print \"INVALID JSON\". If valid, print \"VALID JSON\".",
    "inputFormat": "A string S.",
    "outputFormat": "Print \"VALID JSON\" or \"INVALID JSON\".",
    "constraints": [
      "1 <= len(S) <= 10^4"
    ],
    "examples": [
      {
        "input": "{\"name\": \"Alice\"}",
        "output": "VALID JSON",
        "explanation": "Valid JSON."
      },
      {
        "input": "{name: Alice}",
        "output": "INVALID JSON",
        "explanation": "Unquoted keys."
      },
      {
        "input": "[1, 2, 3]",
        "output": "VALID JSON",
        "explanation": "Valid array."
      }
    ],
    "starterCode": {
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\n\nmain();\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "js-err-1-tc-1",
        "input": "{\"name\": \"Alice\"}",
        "expectedOutput": "VALID JSON",
        "isHidden": false
      },
      {
        "id": "js-err-1-tc-2",
        "input": "{name: Alice}",
        "expectedOutput": "INVALID JSON",
        "isHidden": false
      },
      {
        "id": "js-err-1-tc-3",
        "input": "[1, 2, 3]",
        "expectedOutput": "VALID JSON",
        "isHidden": false
      },
      {
        "id": "js-err-1-tc-4",
        "input": "{\"age\": 25}",
        "expectedOutput": "VALID JSON",
        "isHidden": true
      },
      {
        "id": "js-err-1-tc-5",
        "input": "invalid",
        "expectedOutput": "INVALID JSON",
        "isHidden": true
      },
      {
        "id": "js-err-1-tc-6",
        "input": "{\"a\": 1, \"b\": 2}",
        "expectedOutput": "VALID JSON",
        "isHidden": true
      },
      {
        "id": "js-err-1-tc-7",
        "input": "{ unclosed",
        "expectedOutput": "INVALID JSON",
        "isHidden": true
      },
      {
        "id": "js-err-1-tc-8",
        "input": "42",
        "expectedOutput": "VALID JSON",
        "isHidden": true
      },
      {
        "id": "js-err-1-tc-9",
        "input": "\"hello\"",
        "expectedOutput": "VALID JSON",
        "isHidden": true
      },
      {
        "id": "js-err-1-tc-10",
        "input": "{ key: 1 }",
        "expectedOutput": "INVALID JSON",
        "isHidden": true
      }
    ]
  },
  {
    "id": "js-err-2",
    "languageId": "javascript",
    "language": "javascript",
    "level": "beginner",
    "topicId": "js-error-handling-try-catch",
    "title": "Custom ValidationError Throw and Catch",
    "slug": "custom-validationerror-throw-and-catch",
    "difficulty": "medium",
    "problemStatement": "Given integer age, if age < 0 or age > 120, throw new Error(\"Age out of bounds\"). Catch and print error message. If valid, print \"Valid Age: <age>\".",
    "description": "Given integer age, if age < 0 or age > 120, throw new Error(\"Age out of bounds\"). Catch and print error message. If valid, print \"Valid Age: <age>\".",
    "inputFormat": "An integer age.",
    "outputFormat": "Print outcome.",
    "constraints": [
      "-1000 <= age <= 1000"
    ],
    "examples": [
      {
        "input": "25",
        "output": "Valid Age: 25",
        "explanation": "Valid."
      },
      {
        "input": "-5",
        "output": "Age out of bounds",
        "explanation": "Caught error."
      },
      {
        "input": "150",
        "output": "Age out of bounds",
        "explanation": "Age > 120."
      }
    ],
    "starterCode": {
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\n\nmain();\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "js-err-2-tc-1",
        "input": "25",
        "expectedOutput": "Valid Age: 25",
        "isHidden": false
      },
      {
        "id": "js-err-2-tc-2",
        "input": "-5",
        "expectedOutput": "Age out of bounds",
        "isHidden": false
      },
      {
        "id": "js-err-2-tc-3",
        "input": "150",
        "expectedOutput": "Age out of bounds",
        "isHidden": false
      },
      {
        "id": "js-err-2-tc-4",
        "input": "0",
        "expectedOutput": "Valid Age: 0",
        "isHidden": true
      },
      {
        "id": "js-err-2-tc-5",
        "input": "120",
        "expectedOutput": "Valid Age: 120",
        "isHidden": true
      },
      {
        "id": "js-err-2-tc-6",
        "input": "50",
        "expectedOutput": "Valid Age: 50",
        "isHidden": true
      },
      {
        "id": "js-err-2-tc-7",
        "input": "-1",
        "expectedOutput": "Age out of bounds",
        "isHidden": true
      },
      {
        "id": "js-err-2-tc-8",
        "input": "121",
        "expectedOutput": "Age out of bounds",
        "isHidden": true
      },
      {
        "id": "js-err-2-tc-9",
        "input": "99",
        "expectedOutput": "Valid Age: 99",
        "isHidden": true
      },
      {
        "id": "js-err-2-tc-10",
        "input": "42",
        "expectedOutput": "Valid Age: 42",
        "isHidden": true
      }
    ]
  },
  {
    "id": "js-err-3",
    "languageId": "javascript",
    "language": "javascript",
    "level": "beginner",
    "topicId": "js-error-handling-try-catch",
    "title": "Finally Block Guaranteed Execution",
    "slug": "finally-block-guaranteed-execution",
    "difficulty": "medium",
    "problemStatement": "In try/catch/finally block: Read number N. If N == 0, throw error \"ZERO ERROR\". In finally block, always print \"CLEANUP COMPLETE\". Output result or caught error, followed by finally message.",
    "description": "In try/catch/finally block: Read number N. If N == 0, throw error \"ZERO ERROR\". In finally block, always print \"CLEANUP COMPLETE\". Output result or caught error, followed by finally message.",
    "inputFormat": "An integer N.",
    "outputFormat": "Print status, followed on new line by \"CLEANUP COMPLETE\".",
    "constraints": [
      "-10^5 <= N <= 10^5"
    ],
    "examples": [
      {
        "input": "10",
        "output": "OK: 10\nCLEANUP COMPLETE",
        "explanation": "No error, finally executed."
      },
      {
        "input": "0",
        "output": "ZERO ERROR\nCLEANUP COMPLETE",
        "explanation": "Error caught, finally executed."
      },
      {
        "input": "-5",
        "output": "OK: -5\nCLEANUP COMPLETE",
        "explanation": "Finally executed."
      }
    ],
    "starterCode": {
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\n\nmain();\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "js-err-3-tc-1",
        "input": "10",
        "expectedOutput": "OK: 10\nCLEANUP COMPLETE",
        "isHidden": false
      },
      {
        "id": "js-err-3-tc-2",
        "input": "0",
        "expectedOutput": "ZERO ERROR\nCLEANUP COMPLETE",
        "isHidden": false
      },
      {
        "id": "js-err-3-tc-3",
        "input": "-5",
        "expectedOutput": "OK: -5\nCLEANUP COMPLETE",
        "isHidden": false
      },
      {
        "id": "js-err-3-tc-4",
        "input": "42",
        "expectedOutput": "OK: 42\nCLEANUP COMPLETE",
        "isHidden": true
      },
      {
        "id": "js-err-3-tc-5",
        "input": "100",
        "expectedOutput": "OK: 100\nCLEANUP COMPLETE",
        "isHidden": true
      },
      {
        "id": "js-err-3-tc-6",
        "input": "1",
        "expectedOutput": "OK: 1\nCLEANUP COMPLETE",
        "isHidden": true
      },
      {
        "id": "js-err-3-tc-7",
        "input": "-100",
        "expectedOutput": "OK: -100\nCLEANUP COMPLETE",
        "isHidden": true
      },
      {
        "id": "js-err-3-tc-8",
        "input": "25",
        "expectedOutput": "OK: 25\nCLEANUP COMPLETE",
        "isHidden": true
      },
      {
        "id": "js-err-3-tc-9",
        "input": "99",
        "expectedOutput": "OK: 99\nCLEANUP COMPLETE",
        "isHidden": true
      },
      {
        "id": "js-err-3-tc-10",
        "input": "7",
        "expectedOutput": "OK: 7\nCLEANUP COMPLETE",
        "isHidden": true
      }
    ]
  },
  {
    "id": "js-dsr-1",
    "languageId": "javascript",
    "language": "javascript",
    "level": "intermediate",
    "topicId": "js-destructuring-spread-rest",
    "title": "Array and Object Destructuring with Renaming",
    "slug": "array-and-object-destructuring-with-renaming",
    "difficulty": "easy",
    "problemStatement": "Given { fn: \"<firstName>\", ln: \"<lastName>\" }, destructure with renaming { fn: firstName, ln: lastName }. Print \"Full Name: <firstName> <lastName>\".",
    "description": "Given { fn: \"<firstName>\", ln: \"<lastName>\" }, destructure with renaming { fn: firstName, ln: lastName }. Print \"Full Name: <firstName> <lastName>\".",
    "inputFormat": "Two space-separated strings fn and ln.",
    "outputFormat": "Print \"Full Name: <firstName> <lastName>\".",
    "constraints": [
      "Strings <= 50 chars."
    ],
    "examples": [
      {
        "input": "John Doe",
        "output": "Full Name: John Doe",
        "explanation": "Destructured."
      },
      {
        "input": "Alice Smith",
        "output": "Full Name: Alice Smith",
        "explanation": "Destructured."
      },
      {
        "input": "Ada Lovelace",
        "output": "Full Name: Ada Lovelace",
        "explanation": "Destructured."
      }
    ],
    "starterCode": {
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\n\nmain();\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "js-dsr-1-tc-1",
        "input": "John Doe",
        "expectedOutput": "Full Name: John Doe",
        "isHidden": false
      },
      {
        "id": "js-dsr-1-tc-2",
        "input": "Alice Smith",
        "expectedOutput": "Full Name: Alice Smith",
        "isHidden": false
      },
      {
        "id": "js-dsr-1-tc-3",
        "input": "Ada Lovelace",
        "expectedOutput": "Full Name: Ada Lovelace",
        "isHidden": false
      },
      {
        "id": "js-dsr-1-tc-4",
        "input": "Alan Turing",
        "expectedOutput": "Full Name: Alan Turing",
        "isHidden": true
      },
      {
        "id": "js-dsr-1-tc-5",
        "input": "Grace Hopper",
        "expectedOutput": "Full Name: Grace Hopper",
        "isHidden": true
      },
      {
        "id": "js-dsr-1-tc-6",
        "input": "Bob Ross",
        "expectedOutput": "Full Name: Bob Ross",
        "isHidden": true
      },
      {
        "id": "js-dsr-1-tc-7",
        "input": "Charlie Brown",
        "expectedOutput": "Full Name: Charlie Brown",
        "isHidden": true
      },
      {
        "id": "js-dsr-1-tc-8",
        "input": "David Bowie",
        "expectedOutput": "Full Name: David Bowie",
        "isHidden": true
      },
      {
        "id": "js-dsr-1-tc-9",
        "input": "Emma Watson",
        "expectedOutput": "Full Name: Emma Watson",
        "isHidden": true
      },
      {
        "id": "js-dsr-1-tc-10",
        "input": "Frank Sinatra",
        "expectedOutput": "Full Name: Frank Sinatra",
        "isHidden": true
      }
    ]
  },
  {
    "id": "js-dsr-2",
    "languageId": "javascript",
    "language": "javascript",
    "level": "intermediate",
    "topicId": "js-destructuring-spread-rest",
    "title": "Merge Multiple Objects with Spread Operator",
    "slug": "merge-multiple-objects-with-spread-operator",
    "difficulty": "medium",
    "problemStatement": "Merge two objects obj1 and obj2 using {...obj1, ...obj2}. Print sorted \"key:val\" pairs. In case of duplicate keys, obj2 value overwrites obj1.",
    "description": "Merge two objects obj1 and obj2 using {...obj1, ...obj2}. Print sorted \"key:val\" pairs. In case of duplicate keys, obj2 value overwrites obj1.",
    "inputFormat": "Line 1: N pairs for obj1, Line 2: M pairs for obj2.",
    "outputFormat": "Print space-separated sorted \"key:val\" pairs.",
    "constraints": [
      "1 <= N, M <= 100"
    ],
    "examples": [
      {
        "input": "2 a 1 b 2\n2 b 3 c 4",
        "output": "a:1 b:3 c:4",
        "explanation": "b overwritten with 3."
      },
      {
        "input": "1 x 10\n1 y 20",
        "output": "x:10 y:20",
        "explanation": "Merged."
      },
      {
        "input": "1 k v1\n1 k v2",
        "output": "k:v2",
        "explanation": "Overwritten."
      }
    ],
    "starterCode": {
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\n\nmain();\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "js-dsr-2-tc-1",
        "input": "2 a 1 b 2\n2 b 3 c 4",
        "expectedOutput": "a:1 b:3 c:4",
        "isHidden": false
      },
      {
        "id": "js-dsr-2-tc-2",
        "input": "1 x 10\n1 y 20",
        "expectedOutput": "x:10 y:20",
        "isHidden": false
      },
      {
        "id": "js-dsr-2-tc-3",
        "input": "1 k v1\n1 k v2",
        "expectedOutput": "k:v2",
        "isHidden": false
      },
      {
        "id": "js-dsr-2-tc-4",
        "input": "3 p 1 q 2 r 3\n1 s 4",
        "expectedOutput": "p:1 q:2 r:3 s:4",
        "isHidden": true
      },
      {
        "id": "js-dsr-2-tc-5",
        "input": "2 name Old role Admin\n1 name New",
        "expectedOutput": "name:New role:Admin",
        "isHidden": true
      },
      {
        "id": "js-dsr-2-tc-6",
        "input": "2 a 10 b 20\n2 a 30 b 40",
        "expectedOutput": "a:30 b:40",
        "isHidden": true
      },
      {
        "id": "js-dsr-2-tc-7",
        "input": "1 id 100\n1 id 200",
        "expectedOutput": "id:200",
        "isHidden": true
      },
      {
        "id": "js-dsr-2-tc-8",
        "input": "3 x 1 y 2 z 3\n2 y 20 z 30",
        "expectedOutput": "x:1 y:20 z:30",
        "isHidden": true
      },
      {
        "id": "js-dsr-2-tc-9",
        "input": "2 u 5 v 5\n1 w 5",
        "expectedOutput": "u:5 v:5 w:5",
        "isHidden": true
      },
      {
        "id": "js-dsr-2-tc-10",
        "input": "1 alpha 1\n1 beta 2",
        "expectedOutput": "alpha:1 beta:2",
        "isHidden": true
      }
    ]
  },
  {
    "id": "js-dsr-3",
    "languageId": "javascript",
    "language": "javascript",
    "level": "intermediate",
    "topicId": "js-destructuring-spread-rest",
    "title": "Variable Arguments Sum with Rest Parameter",
    "slug": "variable-arguments-sum-with-rest-parameter",
    "difficulty": "medium",
    "problemStatement": "Implement sum(...args) using rest parameters. Given N integers, compute their sum. Print \"Sum: <sum>\".",
    "description": "Implement sum(...args) using rest parameters. Given N integers, compute their sum. Print \"Sum: <sum>\".",
    "inputFormat": "First line N, second line N space-separated integers.",
    "outputFormat": "Print \"Sum: <sum>\".",
    "constraints": [
      "0 <= N <= 10^4"
    ],
    "examples": [
      {
        "input": "4\n1 2 3 4",
        "output": "Sum: 10",
        "explanation": "1+2+3+4 = 10."
      },
      {
        "input": "0",
        "output": "Sum: 0",
        "explanation": "Empty sum is 0."
      },
      {
        "input": "3\n10 20 30",
        "output": "Sum: 60",
        "explanation": "Sum 60."
      }
    ],
    "starterCode": {
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\n\nmain();\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "js-dsr-3-tc-1",
        "input": "4\n1 2 3 4",
        "expectedOutput": "Sum: 10",
        "isHidden": false
      },
      {
        "id": "js-dsr-3-tc-2",
        "input": "0",
        "expectedOutput": "Sum: 0",
        "isHidden": false
      },
      {
        "id": "js-dsr-3-tc-3",
        "input": "3\n10 20 30",
        "expectedOutput": "Sum: 60",
        "isHidden": false
      },
      {
        "id": "js-dsr-3-tc-4",
        "input": "5\n5 5 5 5 5",
        "expectedOutput": "Sum: 25",
        "isHidden": true
      },
      {
        "id": "js-dsr-3-tc-5",
        "input": "4\n-10 10 -20 20",
        "expectedOutput": "Sum: 0",
        "isHidden": true
      },
      {
        "id": "js-dsr-3-tc-6",
        "input": "1\n42",
        "expectedOutput": "Sum: 42",
        "isHidden": true
      },
      {
        "id": "js-dsr-3-tc-7",
        "input": "5\n100 200 300 400 500",
        "expectedOutput": "Sum: 1500",
        "isHidden": true
      },
      {
        "id": "js-dsr-3-tc-8",
        "input": "2\n-5 -15",
        "expectedOutput": "Sum: -20",
        "isHidden": true
      },
      {
        "id": "js-dsr-3-tc-9",
        "input": "3\n7 8 9",
        "expectedOutput": "Sum: 24",
        "isHidden": true
      },
      {
        "id": "js-dsr-3-tc-10",
        "input": "6\n1 1 1 1 1 1",
        "expectedOutput": "Sum: 6",
        "isHidden": true
      }
    ]
  },
  {
    "id": "js-afm-1",
    "languageId": "javascript",
    "language": "javascript",
    "level": "intermediate",
    "topicId": "js-array-functional-methods",
    "title": "Double Even Numbers with map and filter",
    "slug": "double-even-numbers-with-map-and-filter",
    "difficulty": "easy",
    "problemStatement": "Given N integers, use filter(x => x % 2 === 0).map(x => x * 2). Print space-separated doubled evens. If none, print \"NONE\".",
    "description": "Given N integers, use filter(x => x % 2 === 0).map(x => x * 2). Print space-separated doubled evens. If none, print \"NONE\".",
    "inputFormat": "First line N, second line N space-separated integers.",
    "outputFormat": "Print space-separated doubled evens or \"NONE\".",
    "constraints": [
      "1 <= N <= 10^4"
    ],
    "examples": [
      {
        "input": "5\n1 2 3 4 5",
        "output": "4 8",
        "explanation": "2*2=4, 4*2=8."
      },
      {
        "input": "3\n1 3 5",
        "output": "NONE",
        "explanation": "No evens."
      },
      {
        "input": "3\n2 4 6",
        "output": "4 8 12",
        "explanation": "All doubled."
      }
    ],
    "starterCode": {
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\n\nmain();\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "js-afm-1-tc-1",
        "input": "5\n1 2 3 4 5",
        "expectedOutput": "4 8",
        "isHidden": false
      },
      {
        "id": "js-afm-1-tc-2",
        "input": "3\n1 3 5",
        "expectedOutput": "NONE",
        "isHidden": false
      },
      {
        "id": "js-afm-1-tc-3",
        "input": "3\n2 4 6",
        "expectedOutput": "4 8 12",
        "isHidden": false
      },
      {
        "id": "js-afm-1-tc-4",
        "input": "1\n8",
        "expectedOutput": "16",
        "isHidden": true
      },
      {
        "id": "js-afm-1-tc-5",
        "input": "4\n0 1 2 3",
        "expectedOutput": "0 4",
        "isHidden": true
      },
      {
        "id": "js-afm-1-tc-6",
        "input": "5\n-2 3 -4 5 6",
        "expectedOutput": "-4 -8 12",
        "isHidden": true
      },
      {
        "id": "js-afm-1-tc-7",
        "input": "4\n7 9 11 13",
        "expectedOutput": "NONE",
        "isHidden": true
      },
      {
        "id": "js-afm-1-tc-8",
        "input": "6\n10 15 20 25 30 35",
        "expectedOutput": "20 40 60",
        "isHidden": true
      },
      {
        "id": "js-afm-1-tc-9",
        "input": "2\n4 4",
        "expectedOutput": "8 8",
        "isHidden": true
      },
      {
        "id": "js-afm-1-tc-10",
        "input": "5\n2 2 2 2 2",
        "expectedOutput": "4 4 4 4 4",
        "isHidden": true
      }
    ]
  },
  {
    "id": "js-afm-2",
    "languageId": "javascript",
    "language": "javascript",
    "level": "intermediate",
    "topicId": "js-array-functional-methods",
    "title": "Sum of Array Elements with reduce",
    "slug": "sum-of-array-elements-with-reduce",
    "difficulty": "easy",
    "problemStatement": "Given N integers, use arr.reduce((acc, curr) => acc + curr, 0) to compute sum. Print \"Sum: <sum>\".",
    "description": "Given N integers, use arr.reduce((acc, curr) => acc + curr, 0) to compute sum. Print \"Sum: <sum>\".",
    "inputFormat": "First line N, second line N space-separated integers.",
    "outputFormat": "Print \"Sum: <sum>\".",
    "constraints": [
      "1 <= N <= 10^5"
    ],
    "examples": [
      {
        "input": "4\n1 2 3 4",
        "output": "Sum: 10",
        "explanation": "1+2+3+4 = 10."
      },
      {
        "input": "3\n10 20 30",
        "output": "Sum: 60",
        "explanation": "Sum 60."
      },
      {
        "input": "1\n50",
        "output": "Sum: 50",
        "explanation": "Single element."
      }
    ],
    "starterCode": {
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\n\nmain();\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "js-afm-2-tc-1",
        "input": "4\n1 2 3 4",
        "expectedOutput": "Sum: 10",
        "isHidden": false
      },
      {
        "id": "js-afm-2-tc-2",
        "input": "3\n10 20 30",
        "expectedOutput": "Sum: 60",
        "isHidden": false
      },
      {
        "id": "js-afm-2-tc-3",
        "input": "1\n50",
        "expectedOutput": "Sum: 50",
        "isHidden": false
      },
      {
        "id": "js-afm-2-tc-4",
        "input": "5\n5 5 5 5 5",
        "expectedOutput": "Sum: 25",
        "isHidden": true
      },
      {
        "id": "js-afm-2-tc-5",
        "input": "4\n-10 10 -20 20",
        "expectedOutput": "Sum: 0",
        "isHidden": true
      },
      {
        "id": "js-afm-2-tc-6",
        "input": "5\n10 15 20 25 30",
        "expectedOutput": "Sum: 100",
        "isHidden": true
      },
      {
        "id": "js-afm-2-tc-7",
        "input": "3\n7 8 9",
        "expectedOutput": "Sum: 24",
        "isHidden": true
      },
      {
        "id": "js-afm-2-tc-8",
        "input": "5\n1 3 5 7 9",
        "expectedOutput": "Sum: 25",
        "isHidden": true
      },
      {
        "id": "js-afm-2-tc-9",
        "input": "2\n100 200",
        "expectedOutput": "Sum: 300",
        "isHidden": true
      },
      {
        "id": "js-afm-2-tc-10",
        "input": "6\n2 4 6 8 10 12",
        "expectedOutput": "Sum: 42",
        "isHidden": true
      }
    ]
  },
  {
    "id": "js-afm-3",
    "languageId": "javascript",
    "language": "javascript",
    "level": "intermediate",
    "topicId": "js-array-functional-methods",
    "title": "Group Objects by Category with reduce",
    "slug": "group-objects-by-category-with-reduce",
    "difficulty": "medium",
    "problemStatement": "Given items with name and category, use reduce to count items per category. Print categories sorted alphabetically in format \"cat:count\" separated by spaces.",
    "description": "Given items with name and category, use reduce to count items per category. Print categories sorted alphabetically in format \"cat:count\" separated by spaces.",
    "inputFormat": "First line N, next N lines each contain name and category.",
    "outputFormat": "Print space-separated sorted \"cat:count\" pairs.",
    "constraints": [
      "1 <= N <= 1000"
    ],
    "examples": [
      {
        "input": "3\nApple Fruit\nBanana Fruit\nCarrot Veg",
        "output": "Fruit:2 Veg:1",
        "explanation": "Grouped counts."
      },
      {
        "input": "2\nDesk Office\nChair Office",
        "output": "Office:2",
        "explanation": "Single category."
      },
      {
        "input": "3\nA X\nB Y\nC Z",
        "output": "X:1 Y:1 Z:1",
        "explanation": "3 categories."
      }
    ],
    "starterCode": {
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\n\nmain();\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "js-afm-3-tc-1",
        "input": "3\nApple Fruit\nBanana Fruit\nCarrot Veg",
        "expectedOutput": "Fruit:2 Veg:1",
        "isHidden": false
      },
      {
        "id": "js-afm-3-tc-2",
        "input": "2\nDesk Office\nChair Office",
        "expectedOutput": "Office:2",
        "isHidden": false
      },
      {
        "id": "js-afm-3-tc-3",
        "input": "3\nA X\nB Y\nC Z",
        "expectedOutput": "X:1 Y:1 Z:1",
        "isHidden": false
      },
      {
        "id": "js-afm-3-tc-4",
        "input": "4\nP1 Tech\nP2 Tech\nP3 Home\nP4 Tech",
        "expectedOutput": "Home:1 Tech:3",
        "isHidden": true
      },
      {
        "id": "js-afm-3-tc-5",
        "input": "2\nDog Pet\nCat Pet",
        "expectedOutput": "Pet:2",
        "isHidden": true
      },
      {
        "id": "js-afm-3-tc-6",
        "input": "3\nPen Stat\nBook Stat\nShirt Cloth",
        "expectedOutput": "Cloth:1 Stat:2",
        "isHidden": true
      },
      {
        "id": "js-afm-3-tc-7",
        "input": "4\nA 1\nB 2\nC 1\nD 2",
        "expectedOutput": "1:2 2:2",
        "isHidden": true
      },
      {
        "id": "js-afm-3-tc-8",
        "input": "1\nSolo Single",
        "expectedOutput": "Single:1",
        "isHidden": true
      },
      {
        "id": "js-afm-3-tc-9",
        "input": "3\nCar Auto\nBike Auto\nBus Auto",
        "expectedOutput": "Auto:3",
        "isHidden": true
      },
      {
        "id": "js-afm-3-tc-10",
        "input": "4\nM Food\nN Drink\nO Food\nP Drink",
        "expectedOutput": "Drink:2 Food:2",
        "isHidden": true
      }
    ]
  },
  {
    "id": "js-afm-4",
    "languageId": "javascript",
    "language": "javascript",
    "level": "intermediate",
    "topicId": "js-array-functional-methods",
    "title": "Find First User Matching Predicate with find",
    "slug": "find-first-user-matching-predicate-with-find",
    "difficulty": "medium",
    "problemStatement": "Given N user records (id, name, score) and threshold T, find the first user with score >= T using arr.find(). Print \"Found: <name> Score: <score>\". If none, print \"NONE\".",
    "description": "Given N user records (id, name, score) and threshold T, find the first user with score >= T using arr.find(). Print \"Found: <name> Score: <score>\". If none, print \"NONE\".",
    "inputFormat": "First line N and T, next N lines id name score.",
    "outputFormat": "Print found user or \"NONE\".",
    "constraints": [
      "1 <= N <= 1000"
    ],
    "examples": [
      {
        "input": "3 80\n1 Alice 75\n2 Bob 85\n3 Charlie 90",
        "output": "Found: Bob Score: 85",
        "explanation": "Bob is first >= 80."
      },
      {
        "input": "2 90\n1 Dan 70\n2 Eve 80",
        "output": "NONE",
        "explanation": "None >= 90."
      },
      {
        "input": "1 50\n1 Solo 60",
        "output": "Found: Solo Score: 60",
        "explanation": "First user."
      }
    ],
    "starterCode": {
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\n\nmain();\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "js-afm-4-tc-1",
        "input": "3 80\n1 Alice 75\n2 Bob 85\n3 Charlie 90",
        "expectedOutput": "Found: Bob Score: 85",
        "isHidden": false
      },
      {
        "id": "js-afm-4-tc-2",
        "input": "2 90\n1 Dan 70\n2 Eve 80",
        "expectedOutput": "NONE",
        "isHidden": false
      },
      {
        "id": "js-afm-4-tc-3",
        "input": "1 50\n1 Solo 60",
        "expectedOutput": "Found: Solo Score: 60",
        "isHidden": false
      },
      {
        "id": "js-afm-4-tc-4",
        "input": "4 70\n1 A 50\n2 B 60\n3 C 70\n4 D 80",
        "expectedOutput": "Found: C Score: 70",
        "isHidden": true
      },
      {
        "id": "js-afm-4-tc-5",
        "input": "3 100\n1 X 99\n2 Y 99\n3 Z 100",
        "expectedOutput": "Found: Z Score: 100",
        "isHidden": true
      },
      {
        "id": "js-afm-4-tc-6",
        "input": "2 60\n1 P 65\n2 Q 62",
        "expectedOutput": "Found: P Score: 65",
        "isHidden": true
      },
      {
        "id": "js-afm-4-tc-7",
        "input": "3 85\n1 K 80\n2 L 84\n3 M 83",
        "expectedOutput": "NONE",
        "isHidden": true
      },
      {
        "id": "js-afm-4-tc-8",
        "input": "1 10\n1 N 5",
        "expectedOutput": "NONE",
        "isHidden": true
      },
      {
        "id": "js-afm-4-tc-9",
        "input": "3 50\n1 T1 45\n2 T2 55\n3 T3 50",
        "expectedOutput": "Found: T2 Score: 55",
        "isHidden": true
      },
      {
        "id": "js-afm-4-tc-10",
        "input": "2 0\n1 First 0\n2 Second 10",
        "expectedOutput": "Found: First Score: 0",
        "isHidden": true
      }
    ]
  },
  {
    "id": "js-cls-1",
    "languageId": "javascript",
    "language": "javascript",
    "level": "intermediate",
    "topicId": "js-closures-and-lexical-scope",
    "title": "Counter with Private State via Closure",
    "slug": "counter-with-private-state-via-closure",
    "difficulty": "easy",
    "problemStatement": "Implement createCounter(init) returning { increment(), decrement(), get() }. Given start value S and sequence of \"INC\", \"DEC\" operations, execute them and print final value \"Count: <val>\".",
    "description": "Implement createCounter(init) returning { increment(), decrement(), get() }. Given start value S and sequence of \"INC\", \"DEC\" operations, execute them and print final value \"Count: <val>\".",
    "inputFormat": "First line S and N, second line N space-separated operations.",
    "outputFormat": "Print \"Count: <val>\".",
    "constraints": [
      "1 <= N <= 1000"
    ],
    "examples": [
      {
        "input": "0 3\nINC INC DEC",
        "output": "Count: 1",
        "explanation": "0+1+1-1 = 1."
      },
      {
        "input": "10 2\nDEC DEC",
        "output": "Count: 8",
        "explanation": "10-1-1 = 8."
      },
      {
        "input": "5 1\nINC",
        "output": "Count: 6",
        "explanation": "5+1 = 6."
      }
    ],
    "starterCode": {
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\n\nmain();\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "js-cls-1-tc-1",
        "input": "0 3\nINC INC DEC",
        "expectedOutput": "Count: 1",
        "isHidden": false
      },
      {
        "id": "js-cls-1-tc-2",
        "input": "10 2\nDEC DEC",
        "expectedOutput": "Count: 8",
        "isHidden": false
      },
      {
        "id": "js-cls-1-tc-3",
        "input": "5 1\nINC",
        "expectedOutput": "Count: 6",
        "isHidden": false
      },
      {
        "id": "js-cls-1-tc-4",
        "input": "100 4\nINC INC INC INC",
        "expectedOutput": "Count: 104",
        "isHidden": true
      },
      {
        "id": "js-cls-1-tc-5",
        "input": "0 4\nDEC DEC DEC DEC",
        "expectedOutput": "Count: -4",
        "isHidden": true
      },
      {
        "id": "js-cls-1-tc-6",
        "input": "50 2\nINC DEC",
        "expectedOutput": "Count: 50",
        "isHidden": true
      },
      {
        "id": "js-cls-1-tc-7",
        "input": "20 3\nINC INC INC",
        "expectedOutput": "Count: 23",
        "isHidden": true
      },
      {
        "id": "js-cls-1-tc-8",
        "input": "1 1\nDEC",
        "expectedOutput": "Count: 0",
        "isHidden": true
      },
      {
        "id": "js-cls-1-tc-9",
        "input": "10 5\nINC DEC INC DEC INC",
        "expectedOutput": "Count: 11",
        "isHidden": true
      },
      {
        "id": "js-cls-1-tc-10",
        "input": "7 3\nDEC INC INC",
        "expectedOutput": "Count: 8",
        "isHidden": true
      }
    ]
  },
  {
    "id": "js-cls-2",
    "languageId": "javascript",
    "language": "javascript",
    "level": "intermediate",
    "topicId": "js-closures-and-lexical-scope",
    "title": "Memoization Function Wrapper Closure",
    "slug": "memoization-function-wrapper-closure",
    "difficulty": "medium",
    "problemStatement": "Implement memoize(fn) using a closure cache Map. Count how many times the underlying computation actually runs vs served from cache. Given N inputs (with duplicates), print \"Runs: <unique_count> Total: <N>\".",
    "description": "Implement memoize(fn) using a closure cache Map. Count how many times the underlying computation actually runs vs served from cache. Given N inputs (with duplicates), print \"Runs: <unique_count> Total: <N>\".",
    "inputFormat": "First line N, second line N space-separated integers.",
    "outputFormat": "Print \"Runs: <unique> Total: <N>\".",
    "constraints": [
      "1 <= N <= 1000"
    ],
    "examples": [
      {
        "input": "5\n1 2 1 2 3",
        "output": "Runs: 3 Total: 5",
        "explanation": "1, 2, 3 computed once each."
      },
      {
        "input": "3\n5 5 5",
        "output": "Runs: 1 Total: 3",
        "explanation": "Single computation."
      },
      {
        "input": "4\n1 2 3 4",
        "output": "Runs: 4 Total: 4",
        "explanation": "All unique."
      }
    ],
    "starterCode": {
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\n\nmain();\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "js-cls-2-tc-1",
        "input": "5\n1 2 1 2 3",
        "expectedOutput": "Runs: 3 Total: 5",
        "isHidden": false
      },
      {
        "id": "js-cls-2-tc-2",
        "input": "3\n5 5 5",
        "expectedOutput": "Runs: 1 Total: 3",
        "isHidden": false
      },
      {
        "id": "js-cls-2-tc-3",
        "input": "4\n1 2 3 4",
        "expectedOutput": "Runs: 4 Total: 4",
        "isHidden": false
      },
      {
        "id": "js-cls-2-tc-4",
        "input": "6\n10 20 10 30 20 10",
        "expectedOutput": "Runs: 3 Total: 6",
        "isHidden": true
      },
      {
        "id": "js-cls-2-tc-5",
        "input": "1\n42",
        "expectedOutput": "Runs: 1 Total: 1",
        "isHidden": true
      },
      {
        "id": "js-cls-2-tc-6",
        "input": "5\n0 0 0 0 0",
        "expectedOutput": "Runs: 1 Total: 5",
        "isHidden": true
      },
      {
        "id": "js-cls-2-tc-7",
        "input": "4\n7 8 8 7",
        "expectedOutput": "Runs: 2 Total: 4",
        "isHidden": true
      },
      {
        "id": "js-cls-2-tc-8",
        "input": "5\n-1 -2 -1 -3 -2",
        "expectedOutput": "Runs: 3 Total: 5",
        "isHidden": true
      },
      {
        "id": "js-cls-2-tc-9",
        "input": "6\n100 200 100 200 100 200",
        "expectedOutput": "Runs: 2 Total: 6",
        "isHidden": true
      },
      {
        "id": "js-cls-2-tc-10",
        "input": "5\n2 4 6 8 10",
        "expectedOutput": "Runs: 5 Total: 5",
        "isHidden": true
      }
    ]
  },
  {
    "id": "js-cls-3",
    "languageId": "javascript",
    "language": "javascript",
    "level": "intermediate",
    "topicId": "js-closures-and-lexical-scope",
    "title": "Once Function Wrapper (Run Only Once)",
    "slug": "once-function-wrapper-run-only-once",
    "difficulty": "medium",
    "problemStatement": "Implement once(fn) returning a function that can only be invoked once. Subsequent calls return the result of the first invocation. Given N numbers passed to once(addFive), print results of all N invocations space-separated.",
    "description": "Implement once(fn) returning a function that can only be invoked once. Subsequent calls return the result of the first invocation. Given N numbers passed to once(addFive), print results of all N invocations space-separated.",
    "inputFormat": "First line N, second line N space-separated integers.",
    "outputFormat": "Print space-separated outputs.",
    "constraints": [
      "1 <= N <= 100"
    ],
    "examples": [
      {
        "input": "3\n10 20 30",
        "output": "15 15 15",
        "explanation": "First call with 10 returns 15, subsequent return 15."
      },
      {
        "input": "2\n5 10",
        "output": "10 10",
        "explanation": "First call with 5 returns 10."
      },
      {
        "input": "1\n0",
        "output": "5",
        "explanation": "Single call."
      }
    ],
    "starterCode": {
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\n\nmain();\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "js-cls-3-tc-1",
        "input": "3\n10 20 30",
        "expectedOutput": "15 15 15",
        "isHidden": false
      },
      {
        "id": "js-cls-3-tc-2",
        "input": "2\n5 10",
        "expectedOutput": "10 10",
        "isHidden": false
      },
      {
        "id": "js-cls-3-tc-3",
        "input": "1\n0",
        "expectedOutput": "5",
        "isHidden": false
      },
      {
        "id": "js-cls-3-tc-4",
        "input": "4\n1 2 3 4",
        "expectedOutput": "6 6 6 6",
        "isHidden": true
      },
      {
        "id": "js-cls-3-tc-5",
        "input": "5\n100 200 300 400 500",
        "expectedOutput": "105 105 105 105 105",
        "isHidden": true
      },
      {
        "id": "js-cls-3-tc-6",
        "input": "2\n-5 5",
        "expectedOutput": "0 0",
        "isHidden": true
      },
      {
        "id": "js-cls-3-tc-7",
        "input": "3\n7 8 9",
        "expectedOutput": "12 12 12",
        "isHidden": true
      },
      {
        "id": "js-cls-3-tc-8",
        "input": "4\n50 50 50 50",
        "expectedOutput": "55 55 55 55",
        "isHidden": true
      },
      {
        "id": "js-cls-3-tc-9",
        "input": "2\n42 0",
        "expectedOutput": "47 47",
        "isHidden": true
      },
      {
        "id": "js-cls-3-tc-10",
        "input": "3\n20 10 5",
        "expectedOutput": "25 25 25",
        "isHidden": true
      }
    ]
  },
  {
    "id": "js-cls-oop-1",
    "languageId": "javascript",
    "language": "javascript",
    "level": "intermediate",
    "topicId": "js-classes-and-inheritance",
    "title": "ES6 Class with Getters and Setters",
    "slug": "es6-class-with-getters-and-setters",
    "difficulty": "easy",
    "problemStatement": "Implement Rectangle(width, height) with getter area and getter perimeter. Given width and height, print \"Area: <area> Perimeter: <perimeter>\".",
    "description": "Implement Rectangle(width, height) with getter area and getter perimeter. Given width and height, print \"Area: <area> Perimeter: <perimeter>\".",
    "inputFormat": "Two space-separated numbers w and h.",
    "outputFormat": "Print \"Area: <area> Perimeter: <perimeter>\".",
    "constraints": [
      "1 <= w, h <= 10^5"
    ],
    "examples": [
      {
        "input": "4 5",
        "output": "Area: 20 Perimeter: 18",
        "explanation": "4*5=20, 2*(4+5)=18."
      },
      {
        "input": "10 10",
        "output": "Area: 100 Perimeter: 40",
        "explanation": "Square."
      },
      {
        "input": "1 2",
        "output": "Area: 2 Perimeter: 6",
        "explanation": "1x2."
      }
    ],
    "starterCode": {
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\n\nmain();\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "js-cls-oop-1-tc-1",
        "input": "4 5",
        "expectedOutput": "Area: 20 Perimeter: 18",
        "isHidden": false
      },
      {
        "id": "js-cls-oop-1-tc-2",
        "input": "10 10",
        "expectedOutput": "Area: 100 Perimeter: 40",
        "isHidden": false
      },
      {
        "id": "js-cls-oop-1-tc-3",
        "input": "1 2",
        "expectedOutput": "Area: 2 Perimeter: 6",
        "isHidden": false
      },
      {
        "id": "js-cls-oop-1-tc-4",
        "input": "7 3",
        "expectedOutput": "Area: 21 Perimeter: 20",
        "isHidden": true
      },
      {
        "id": "js-cls-oop-1-tc-5",
        "input": "8 8",
        "expectedOutput": "Area: 64 Perimeter: 32",
        "isHidden": true
      },
      {
        "id": "js-cls-oop-1-tc-6",
        "input": "15 4",
        "expectedOutput": "Area: 60 Perimeter: 38",
        "isHidden": true
      },
      {
        "id": "js-cls-oop-1-tc-7",
        "input": "20 10",
        "expectedOutput": "Area: 200 Perimeter: 60",
        "isHidden": true
      },
      {
        "id": "js-cls-oop-1-tc-8",
        "input": "6 9",
        "expectedOutput": "Area: 54 Perimeter: 30",
        "isHidden": true
      },
      {
        "id": "js-cls-oop-1-tc-9",
        "input": "25 4",
        "expectedOutput": "Area: 100 Perimeter: 58",
        "isHidden": true
      },
      {
        "id": "js-cls-oop-1-tc-10",
        "input": "12 12",
        "expectedOutput": "Area: 144 Perimeter: 48",
        "isHidden": true
      }
    ]
  },
  {
    "id": "js-cls-oop-2",
    "languageId": "javascript",
    "language": "javascript",
    "level": "intermediate",
    "topicId": "js-classes-and-inheritance",
    "title": "Inheritance with super() in JavaScript",
    "slug": "inheritance-with-super-in-javascript",
    "difficulty": "medium",
    "problemStatement": "Implement Person(name) with introduce() and Student(name, grade) inheriting Person and overriding introduce() using super.introduce() + \" Grade: \" + grade. Print introduction.",
    "description": "Implement Person(name) with introduce() and Student(name, grade) inheriting Person and overriding introduce() using super.introduce() + \" Grade: \" + grade. Print introduction.",
    "inputFormat": "Name and grade.",
    "outputFormat": "Print \"Hello, I am <name>. Grade: <grade>\".",
    "constraints": [
      "Strings <= 50 chars."
    ],
    "examples": [
      {
        "input": "Alice 10",
        "output": "Hello, I am Alice. Grade: 10",
        "explanation": "Overridden introduction."
      },
      {
        "input": "Bob 12",
        "output": "Hello, I am Bob. Grade: 12",
        "explanation": "Introduction."
      },
      {
        "input": "Charlie 9",
        "output": "Hello, I am Charlie. Grade: 9",
        "explanation": "Introduction."
      }
    ],
    "starterCode": {
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\n\nmain();\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "js-cls-oop-2-tc-1",
        "input": "Alice 10",
        "expectedOutput": "Hello, I am Alice. Grade: 10",
        "isHidden": false
      },
      {
        "id": "js-cls-oop-2-tc-2",
        "input": "Bob 12",
        "expectedOutput": "Hello, I am Bob. Grade: 12",
        "isHidden": false
      },
      {
        "id": "js-cls-oop-2-tc-3",
        "input": "Charlie 9",
        "expectedOutput": "Hello, I am Charlie. Grade: 9",
        "isHidden": false
      },
      {
        "id": "js-cls-oop-2-tc-4",
        "input": "David 11",
        "expectedOutput": "Hello, I am David. Grade: 11",
        "isHidden": true
      },
      {
        "id": "js-cls-oop-2-tc-5",
        "input": "Emma 8",
        "expectedOutput": "Hello, I am Emma. Grade: 8",
        "isHidden": true
      },
      {
        "id": "js-cls-oop-2-tc-6",
        "input": "Frank 10",
        "expectedOutput": "Hello, I am Frank. Grade: 10",
        "isHidden": true
      },
      {
        "id": "js-cls-oop-2-tc-7",
        "input": "Grace 12",
        "expectedOutput": "Hello, I am Grace. Grade: 12",
        "isHidden": true
      },
      {
        "id": "js-cls-oop-2-tc-8",
        "input": "Henry 9",
        "expectedOutput": "Hello, I am Henry. Grade: 9",
        "isHidden": true
      },
      {
        "id": "js-cls-oop-2-tc-9",
        "input": "Ivy 11",
        "expectedOutput": "Hello, I am Ivy. Grade: 11",
        "isHidden": true
      },
      {
        "id": "js-cls-oop-2-tc-10",
        "input": "Jack 7",
        "expectedOutput": "Hello, I am Jack. Grade: 7",
        "isHidden": true
      }
    ]
  },
  {
    "id": "js-cls-oop-3",
    "languageId": "javascript",
    "language": "javascript",
    "level": "intermediate",
    "topicId": "js-classes-and-inheritance",
    "title": "Static Factory Method in JavaScript Class",
    "slug": "static-factory-method-in-javascript-class",
    "difficulty": "medium",
    "problemStatement": "Implement User class with static fromJSON(jsonStr) factory method creating User instances. Given JSON string {\"id\": 1, \"username\": \"alice\"}, parse and print \"User <id>: <username>\".",
    "description": "Implement User class with static fromJSON(jsonStr) factory method creating User instances. Given JSON string {\"id\": 1, \"username\": \"alice\"}, parse and print \"User <id>: <username>\".",
    "inputFormat": "A JSON string.",
    "outputFormat": "Print \"User <id>: <username>\".",
    "constraints": [
      "Valid JSON string."
    ],
    "examples": [
      {
        "input": "{\"id\": 1, \"username\": \"alice\"}",
        "output": "User 1: alice",
        "explanation": "Factory created user."
      },
      {
        "input": "{\"id\": 42, \"username\": \"bob\"}",
        "output": "User 42: bob",
        "explanation": "User 42."
      },
      {
        "input": "{\"id\": 100, \"username\": \"admin\"}",
        "output": "User 100: admin",
        "explanation": "Admin user."
      }
    ],
    "starterCode": {
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\n\nmain();\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "js-cls-oop-3-tc-1",
        "input": "{\"id\": 1, \"username\": \"alice\"}",
        "expectedOutput": "User 1: alice",
        "isHidden": false
      },
      {
        "id": "js-cls-oop-3-tc-2",
        "input": "{\"id\": 42, \"username\": \"bob\"}",
        "expectedOutput": "User 42: bob",
        "isHidden": false
      },
      {
        "id": "js-cls-oop-3-tc-3",
        "input": "{\"id\": 100, \"username\": \"admin\"}",
        "expectedOutput": "User 100: admin",
        "isHidden": false
      },
      {
        "id": "js-cls-oop-3-tc-4",
        "input": "{\"id\": 7, \"username\": \"charlie\"}",
        "expectedOutput": "User 7: charlie",
        "isHidden": true
      },
      {
        "id": "js-cls-oop-3-tc-5",
        "input": "{\"id\": 99, \"username\": \"dev\"}",
        "expectedOutput": "User 99: dev",
        "isHidden": true
      },
      {
        "id": "js-cls-oop-3-tc-6",
        "input": "{\"id\": 5, \"username\": \"emma\"}",
        "expectedOutput": "User 5: emma",
        "isHidden": true
      },
      {
        "id": "js-cls-oop-3-tc-7",
        "input": "{\"id\": 10, \"username\": \"frank\"}",
        "expectedOutput": "User 10: frank",
        "isHidden": true
      },
      {
        "id": "js-cls-oop-3-tc-8",
        "input": "{\"id\": 2, \"username\": \"grace\"}",
        "expectedOutput": "User 2: grace",
        "isHidden": true
      },
      {
        "id": "js-cls-oop-3-tc-9",
        "input": "{\"id\": 50, \"username\": \"henry\"}",
        "expectedOutput": "User 50: henry",
        "isHidden": true
      },
      {
        "id": "js-cls-oop-3-tc-10",
        "input": "{\"id\": 123, \"username\": \"ivy\"}",
        "expectedOutput": "User 123: ivy",
        "isHidden": true
      }
    ]
  },
  {
    "id": "js-prom-1",
    "languageId": "javascript",
    "language": "javascript",
    "level": "intermediate",
    "topicId": "js-promises-and-chaining",
    "title": "Promise Resolution and Result Transformation",
    "slug": "promise-resolution-and-result-transformation",
    "difficulty": "easy",
    "problemStatement": "Create a Promise resolving with value X, then chain .then(v => v * 2).then(v => v + 10). Given X, print the final chained promise value.",
    "description": "Create a Promise resolving with value X, then chain .then(v => v * 2).then(v => v + 10). Given X, print the final chained promise value.",
    "inputFormat": "An integer X.",
    "outputFormat": "Print final value.",
    "constraints": [
      "-10^5 <= X <= 10^5"
    ],
    "examples": [
      {
        "input": "5",
        "output": "20",
        "explanation": "5 * 2 + 10 = 20."
      },
      {
        "input": "0",
        "output": "10",
        "explanation": "0 * 2 + 10 = 10."
      },
      {
        "input": "10",
        "output": "30",
        "explanation": "10 * 2 + 10 = 30."
      }
    ],
    "starterCode": {
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\n\nmain();\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "js-prom-1-tc-1",
        "input": "5",
        "expectedOutput": "20",
        "isHidden": false
      },
      {
        "id": "js-prom-1-tc-2",
        "input": "0",
        "expectedOutput": "10",
        "isHidden": false
      },
      {
        "id": "js-prom-1-tc-3",
        "input": "10",
        "expectedOutput": "30",
        "isHidden": false
      },
      {
        "id": "js-prom-1-tc-4",
        "input": "100",
        "expectedOutput": "210",
        "isHidden": true
      },
      {
        "id": "js-prom-1-tc-5",
        "input": "-5",
        "expectedOutput": "0",
        "isHidden": true
      },
      {
        "id": "js-prom-1-tc-6",
        "input": "25",
        "expectedOutput": "60",
        "isHidden": true
      },
      {
        "id": "js-prom-1-tc-7",
        "input": "1",
        "expectedOutput": "12",
        "isHidden": true
      },
      {
        "id": "js-prom-1-tc-8",
        "input": "-10",
        "expectedOutput": "-10",
        "isHidden": true
      },
      {
        "id": "js-prom-1-tc-9",
        "input": "50",
        "expectedOutput": "110",
        "isHidden": true
      },
      {
        "id": "js-prom-1-tc-10",
        "input": "7",
        "expectedOutput": "24",
        "isHidden": true
      }
    ]
  },
  {
    "id": "js-prom-2",
    "languageId": "javascript",
    "language": "javascript",
    "level": "intermediate",
    "topicId": "js-promises-and-chaining",
    "title": "Promise Catch Error Recovery",
    "slug": "promise-catch-error-recovery",
    "difficulty": "medium",
    "problemStatement": "Simulate Promise error handling: If status is \"ERROR\", reject promise and catch with fallback value \"RECOVERED: DEFAULT\". If status is \"OK\", resolve with \"SUCCESS: \" + data. Print outcome.",
    "description": "Simulate Promise error handling: If status is \"ERROR\", reject promise and catch with fallback value \"RECOVERED: DEFAULT\". If status is \"OK\", resolve with \"SUCCESS: \" + data. Print outcome.",
    "inputFormat": "Status (\"OK\" or \"ERROR\") and data string.",
    "outputFormat": "Print outcome string.",
    "constraints": [
      "Strings <= 50 chars."
    ],
    "examples": [
      {
        "input": "OK DataLoaded",
        "output": "SUCCESS: DataLoaded",
        "explanation": "Resolved."
      },
      {
        "input": "ERROR NetFail",
        "output": "RECOVERED: DEFAULT",
        "explanation": "Caught."
      },
      {
        "input": "OK Ready",
        "output": "SUCCESS: Ready",
        "explanation": "Resolved."
      }
    ],
    "starterCode": {
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\n\nmain();\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "js-prom-2-tc-1",
        "input": "OK DataLoaded",
        "expectedOutput": "SUCCESS: DataLoaded",
        "isHidden": false
      },
      {
        "id": "js-prom-2-tc-2",
        "input": "ERROR NetFail",
        "expectedOutput": "RECOVERED: DEFAULT",
        "isHidden": false
      },
      {
        "id": "js-prom-2-tc-3",
        "input": "OK Ready",
        "expectedOutput": "SUCCESS: Ready",
        "isHidden": false
      },
      {
        "id": "js-prom-2-tc-4",
        "input": "ERROR Timeout",
        "expectedOutput": "RECOVERED: DEFAULT",
        "isHidden": true
      },
      {
        "id": "js-prom-2-tc-5",
        "input": "OK Connected",
        "expectedOutput": "SUCCESS: Connected",
        "isHidden": true
      },
      {
        "id": "js-prom-2-tc-6",
        "input": "ERROR 500",
        "expectedOutput": "RECOVERED: DEFAULT",
        "isHidden": true
      },
      {
        "id": "js-prom-2-tc-7",
        "input": "OK 200",
        "expectedOutput": "SUCCESS: 200",
        "isHidden": true
      },
      {
        "id": "js-prom-2-tc-8",
        "input": "ERROR Crash",
        "expectedOutput": "RECOVERED: DEFAULT",
        "isHidden": true
      },
      {
        "id": "js-prom-2-tc-9",
        "input": "OK Done",
        "expectedOutput": "SUCCESS: Done",
        "isHidden": true
      },
      {
        "id": "js-prom-2-tc-10",
        "input": "ERROR Abort",
        "expectedOutput": "RECOVERED: DEFAULT",
        "isHidden": true
      }
    ]
  },
  {
    "id": "js-prom-3",
    "languageId": "javascript",
    "language": "javascript",
    "level": "intermediate",
    "topicId": "js-promises-and-chaining",
    "title": "Promise.all Parallel Task Aggregation",
    "slug": "promise-all-parallel-task-aggregation",
    "difficulty": "medium",
    "problemStatement": "Simulate Promise.all([p1, p2, p3]): Given 3 task values, multiply each by 10 and aggregate. Print space-separated results.",
    "description": "Simulate Promise.all([p1, p2, p3]): Given 3 task values, multiply each by 10 and aggregate. Print space-separated results.",
    "inputFormat": "Three space-separated integers A B C.",
    "outputFormat": "Print space-separated multiplied values.",
    "constraints": [
      "-10^5 <= values <= 10^5"
    ],
    "examples": [
      {
        "input": "1 2 3",
        "output": "10 20 30",
        "explanation": "Multiplied by 10."
      },
      {
        "input": "5 0 -5",
        "output": "50 0 -50",
        "explanation": "Negatives handled."
      },
      {
        "input": "10 20 30",
        "output": "100 200 300",
        "explanation": "Multiplied."
      }
    ],
    "starterCode": {
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\n\nmain();\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "js-prom-3-tc-1",
        "input": "1 2 3",
        "expectedOutput": "10 20 30",
        "isHidden": false
      },
      {
        "id": "js-prom-3-tc-2",
        "input": "5 0 -5",
        "expectedOutput": "50 0 -50",
        "isHidden": false
      },
      {
        "id": "js-prom-3-tc-3",
        "input": "10 20 30",
        "expectedOutput": "100 200 300",
        "isHidden": false
      },
      {
        "id": "js-prom-3-tc-4",
        "input": "4 8 12",
        "expectedOutput": "40 80 120",
        "isHidden": true
      },
      {
        "id": "js-prom-3-tc-5",
        "input": "0 0 0",
        "expectedOutput": "0 0 0",
        "isHidden": true
      },
      {
        "id": "js-prom-3-tc-6",
        "input": "-1 -2 -3",
        "expectedOutput": "-10 -20 -30",
        "isHidden": true
      },
      {
        "id": "js-prom-3-tc-7",
        "input": "7 14 21",
        "expectedOutput": "70 140 210",
        "isHidden": true
      },
      {
        "id": "js-prom-3-tc-8",
        "input": "100 200 300",
        "expectedOutput": "1000 2000 3000",
        "isHidden": true
      },
      {
        "id": "js-prom-3-tc-9",
        "input": "25 50 75",
        "expectedOutput": "250 500 750",
        "isHidden": true
      },
      {
        "id": "js-prom-3-tc-10",
        "input": "9 9 9",
        "expectedOutput": "90 90 90",
        "isHidden": true
      }
    ]
  },
  {
    "id": "js-async-1",
    "languageId": "javascript",
    "language": "javascript",
    "level": "intermediate",
    "topicId": "js-async-await-fetch",
    "title": "Async Function Sequential Flow",
    "slug": "async-function-sequential-flow",
    "difficulty": "easy",
    "problemStatement": "Implement an async function that awaits step1(x) = x + 10, then awaits step2(res) = res * 2. Given integer X, print the final computed value.",
    "description": "Implement an async function that awaits step1(x) = x + 10, then awaits step2(res) = res * 2. Given integer X, print the final computed value.",
    "inputFormat": "An integer X.",
    "outputFormat": "Print final computed value.",
    "constraints": [
      "-10^5 <= X <= 10^5"
    ],
    "examples": [
      {
        "input": "5",
        "output": "30",
        "explanation": "(5 + 10) * 2 = 30."
      },
      {
        "input": "0",
        "output": "20",
        "explanation": "(0 + 10) * 2 = 20."
      },
      {
        "input": "10",
        "output": "40",
        "explanation": "(10 + 10) * 2 = 40."
      }
    ],
    "starterCode": {
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\n\nmain();\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "js-async-1-tc-1",
        "input": "5",
        "expectedOutput": "30",
        "isHidden": false
      },
      {
        "id": "js-async-1-tc-2",
        "input": "0",
        "expectedOutput": "20",
        "isHidden": false
      },
      {
        "id": "js-async-1-tc-3",
        "input": "10",
        "expectedOutput": "40",
        "isHidden": false
      },
      {
        "id": "js-async-1-tc-4",
        "input": "-5",
        "expectedOutput": "10",
        "isHidden": true
      },
      {
        "id": "js-async-1-tc-5",
        "input": "-10",
        "expectedOutput": "0",
        "isHidden": true
      },
      {
        "id": "js-async-1-tc-6",
        "input": "20",
        "expectedOutput": "60",
        "isHidden": true
      },
      {
        "id": "js-async-1-tc-7",
        "input": "100",
        "expectedOutput": "220",
        "isHidden": true
      },
      {
        "id": "js-async-1-tc-8",
        "input": "1",
        "expectedOutput": "22",
        "isHidden": true
      },
      {
        "id": "js-async-1-tc-9",
        "input": "50",
        "expectedOutput": "120",
        "isHidden": true
      },
      {
        "id": "js-async-1-tc-10",
        "input": "7",
        "expectedOutput": "34",
        "isHidden": true
      }
    ]
  },
  {
    "id": "js-async-2",
    "languageId": "javascript",
    "language": "javascript",
    "level": "intermediate",
    "topicId": "js-async-await-fetch",
    "title": "Error Handling with try/catch in async/await",
    "slug": "error-handling-with-try-catch-in-async-await",
    "difficulty": "medium",
    "problemStatement": "In an async function: If input is valid integer, await process(N) returning N * N. If parsing fails, catch error and return \"ERROR: PARSE FAILURE\". Print result.",
    "description": "In an async function: If input is valid integer, await process(N) returning N * N. If parsing fails, catch error and return \"ERROR: PARSE FAILURE\". Print result.",
    "inputFormat": "A token string.",
    "outputFormat": "Print result or error.",
    "constraints": [
      "String length <= 50"
    ],
    "examples": [
      {
        "input": "5",
        "output": "25",
        "explanation": "5 * 5 = 25."
      },
      {
        "input": "abc",
        "output": "ERROR: PARSE FAILURE",
        "explanation": "Parse failure."
      },
      {
        "input": "10",
        "output": "100",
        "explanation": "10 * 10 = 100."
      }
    ],
    "starterCode": {
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\n\nmain();\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "js-async-2-tc-1",
        "input": "5",
        "expectedOutput": "25",
        "isHidden": false
      },
      {
        "id": "js-async-2-tc-2",
        "input": "abc",
        "expectedOutput": "ERROR: PARSE FAILURE",
        "isHidden": false
      },
      {
        "id": "js-async-2-tc-3",
        "input": "10",
        "expectedOutput": "100",
        "isHidden": false
      },
      {
        "id": "js-async-2-tc-4",
        "input": "0",
        "expectedOutput": "0",
        "isHidden": true
      },
      {
        "id": "js-async-2-tc-5",
        "input": "xyz",
        "expectedOutput": "ERROR: PARSE FAILURE",
        "isHidden": true
      },
      {
        "id": "js-async-2-tc-6",
        "input": "12",
        "expectedOutput": "144",
        "isHidden": true
      },
      {
        "id": "js-async-2-tc-7",
        "input": "invalid",
        "expectedOutput": "ERROR: PARSE FAILURE",
        "isHidden": true
      },
      {
        "id": "js-async-2-tc-8",
        "input": "7",
        "expectedOutput": "49",
        "isHidden": true
      },
      {
        "id": "js-async-2-tc-9",
        "input": "-4",
        "expectedOutput": "16",
        "isHidden": true
      },
      {
        "id": "js-async-2-tc-10",
        "input": "test",
        "expectedOutput": "ERROR: PARSE FAILURE",
        "isHidden": true
      }
    ]
  },
  {
    "id": "js-async-3",
    "languageId": "javascript",
    "language": "javascript",
    "level": "intermediate",
    "topicId": "js-async-await-fetch",
    "title": "Simulating Fetch API Response Status Handling",
    "slug": "simulating-fetch-api-response-status-handling",
    "difficulty": "medium",
    "problemStatement": "Simulate handling fetch response: Given HTTP status code S, if 200 <= S < 300, print \"SUCCESS: 2XX\". If 400 <= S < 500, print \"CLIENT ERROR: 4XX\". If S >= 500, print \"SERVER ERROR: 5XX\". Else print \"OTHER: \" + S.",
    "description": "Simulate handling fetch response: Given HTTP status code S, if 200 <= S < 300, print \"SUCCESS: 2XX\". If 400 <= S < 500, print \"CLIENT ERROR: 4XX\". If S >= 500, print \"SERVER ERROR: 5XX\". Else print \"OTHER: \" + S.",
    "inputFormat": "An integer status code S.",
    "outputFormat": "Print status category.",
    "constraints": [
      "100 <= S <= 599"
    ],
    "examples": [
      {
        "input": "200",
        "output": "SUCCESS: 2XX",
        "explanation": "OK."
      },
      {
        "input": "404",
        "output": "CLIENT ERROR: 4XX",
        "explanation": "Not found."
      },
      {
        "input": "500",
        "output": "SERVER ERROR: 5XX",
        "explanation": "Server error."
      }
    ],
    "starterCode": {
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\n\nmain();\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "js-async-3-tc-1",
        "input": "200",
        "expectedOutput": "SUCCESS: 2XX",
        "isHidden": false
      },
      {
        "id": "js-async-3-tc-2",
        "input": "404",
        "expectedOutput": "CLIENT ERROR: 4XX",
        "isHidden": false
      },
      {
        "id": "js-async-3-tc-3",
        "input": "500",
        "expectedOutput": "SERVER ERROR: 5XX",
        "isHidden": false
      },
      {
        "id": "js-async-3-tc-4",
        "input": "201",
        "expectedOutput": "SUCCESS: 2XX",
        "isHidden": true
      },
      {
        "id": "js-async-3-tc-5",
        "input": "401",
        "expectedOutput": "CLIENT ERROR: 4XX",
        "isHidden": true
      },
      {
        "id": "js-async-3-tc-6",
        "input": "503",
        "expectedOutput": "SERVER ERROR: 5XX",
        "isHidden": true
      },
      {
        "id": "js-async-3-tc-7",
        "input": "403",
        "expectedOutput": "CLIENT ERROR: 4XX",
        "isHidden": true
      },
      {
        "id": "js-async-3-tc-8",
        "input": "301",
        "expectedOutput": "OTHER: 301",
        "isHidden": true
      },
      {
        "id": "js-async-3-tc-9",
        "input": "204",
        "expectedOutput": "SUCCESS: 2XX",
        "isHidden": true
      },
      {
        "id": "js-async-3-tc-10",
        "input": "502",
        "expectedOutput": "SERVER ERROR: 5XX",
        "isHidden": true
      }
    ]
  },
  {
    "id": "js-dom-1",
    "languageId": "javascript",
    "language": "javascript",
    "level": "intermediate",
    "topicId": "js-dom-and-event-delegation",
    "title": "Event Delegation Target Matcher",
    "slug": "event-delegation-target-matcher",
    "difficulty": "medium",
    "problemStatement": "Simulate event delegation: A parent container handles clicks for child items matching a CSS class. Given target tag and className, if className is \"btn-action\", print \"HANDLED: <tag>\". Else print \"IGNORED\".",
    "description": "Simulate event delegation: A parent container handles clicks for child items matching a CSS class. Given target tag and className, if className is \"btn-action\", print \"HANDLED: <tag>\". Else print \"IGNORED\".",
    "inputFormat": "Tag string and className string.",
    "outputFormat": "Print \"HANDLED: <tag>\" or \"IGNORED\".",
    "constraints": [
      "Strings <= 50 chars."
    ],
    "examples": [
      {
        "input": "button btn-action",
        "output": "HANDLED: button",
        "explanation": "Matched class."
      },
      {
        "input": "div container",
        "output": "IGNORED",
        "explanation": "Class does not match."
      },
      {
        "input": "a btn-action",
        "output": "HANDLED: a",
        "explanation": "Matched anchor."
      }
    ],
    "starterCode": {
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\n\nmain();\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "js-dom-1-tc-1",
        "input": "button btn-action",
        "expectedOutput": "HANDLED: button",
        "isHidden": false
      },
      {
        "id": "js-dom-1-tc-2",
        "input": "div container",
        "expectedOutput": "IGNORED",
        "isHidden": false
      },
      {
        "id": "js-dom-1-tc-3",
        "input": "a btn-action",
        "expectedOutput": "HANDLED: a",
        "isHidden": false
      },
      {
        "id": "js-dom-1-tc-4",
        "input": "span text",
        "expectedOutput": "IGNORED",
        "isHidden": true
      },
      {
        "id": "js-dom-1-tc-5",
        "input": "input btn-action",
        "expectedOutput": "HANDLED: input",
        "isHidden": true
      },
      {
        "id": "js-dom-1-tc-6",
        "input": "li item",
        "expectedOutput": "IGNORED",
        "isHidden": true
      },
      {
        "id": "js-dom-1-tc-7",
        "input": "button btn-other",
        "expectedOutput": "IGNORED",
        "isHidden": true
      },
      {
        "id": "js-dom-1-tc-8",
        "input": "div btn-action",
        "expectedOutput": "HANDLED: div",
        "isHidden": true
      },
      {
        "id": "js-dom-1-tc-9",
        "input": "p paragraph",
        "expectedOutput": "IGNORED",
        "isHidden": true
      },
      {
        "id": "js-dom-1-tc-10",
        "input": "button btn-action",
        "expectedOutput": "HANDLED: button",
        "isHidden": true
      }
    ]
  },
  {
    "id": "js-dom-2",
    "languageId": "javascript",
    "language": "javascript",
    "level": "intermediate",
    "topicId": "js-dom-and-event-delegation",
    "title": "Virtual DOM Tree Node Count",
    "slug": "virtual-dom-tree-node-count",
    "difficulty": "medium",
    "problemStatement": "Given a nested virtual DOM node representation {\"tag\": \"...\", \"children\": [...]}, count the total number of DOM nodes in the tree recursively. Print \"Total Nodes: <count>\".",
    "description": "Given a nested virtual DOM node representation {\"tag\": \"...\", \"children\": [...]}, count the total number of DOM nodes in the tree recursively. Print \"Total Nodes: <count>\".",
    "inputFormat": "JSON string of tree.",
    "outputFormat": "Print \"Total Nodes: <count>\".",
    "constraints": [
      "Valid JSON tree."
    ],
    "examples": [
      {
        "input": "{\"tag\": \"div\", \"children\": [{\"tag\": \"p\", \"children\": []}, {\"tag\": \"span\", \"children\": []}]}",
        "output": "Total Nodes: 3",
        "explanation": "div + p + span = 3 nodes."
      },
      {
        "input": "{\"tag\": \"body\", \"children\": []}",
        "output": "Total Nodes: 1",
        "explanation": "Single node."
      },
      {
        "input": "{\"tag\": \"ul\", \"children\": [{\"tag\": \"li\", \"children\": []}]}",
        "output": "Total Nodes: 2",
        "explanation": "ul + li = 2."
      }
    ],
    "starterCode": {
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\n\nmain();\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "js-dom-2-tc-1",
        "input": "{\"tag\": \"div\", \"children\": [{\"tag\": \"p\", \"children\": []}, {\"tag\": \"span\", \"children\": []}]}",
        "expectedOutput": "Total Nodes: 3",
        "isHidden": false
      },
      {
        "id": "js-dom-2-tc-2",
        "input": "{\"tag\": \"body\", \"children\": []}",
        "expectedOutput": "Total Nodes: 1",
        "isHidden": false
      },
      {
        "id": "js-dom-2-tc-3",
        "input": "{\"tag\": \"ul\", \"children\": [{\"tag\": \"li\", \"children\": []}]}",
        "expectedOutput": "Total Nodes: 2",
        "isHidden": false
      },
      {
        "id": "js-dom-2-tc-4",
        "input": "{\"tag\": \"div\", \"children\": [{\"tag\": \"div\", \"children\": [{\"tag\": \"p\", \"children\": []}]}]}",
        "expectedOutput": "Total Nodes: 3",
        "isHidden": true
      },
      {
        "id": "js-dom-2-tc-5",
        "input": "{\"tag\": \"root\", \"children\": [{\"tag\": \"a\", \"children\": []}, {\"tag\": \"b\", \"children\": []}, {\"tag\": \"c\", \"children\": []}]}",
        "expectedOutput": "Total Nodes: 4",
        "isHidden": true
      },
      {
        "id": "js-dom-2-tc-6",
        "input": "{\"tag\": \"table\", \"children\": [{\"tag\": \"tr\", \"children\": [{\"tag\": \"td\", \"children\": []}, {\"tag\": \"td\", \"children\": []}]}]}",
        "expectedOutput": "Total Nodes: 4",
        "isHidden": true
      },
      {
        "id": "js-dom-2-tc-7",
        "input": "{\"tag\": \"main\", \"children\": []}",
        "expectedOutput": "Total Nodes: 1",
        "isHidden": true
      },
      {
        "id": "js-dom-2-tc-8",
        "input": "{\"tag\": \"header\", \"children\": [{\"tag\": \"nav\", \"children\": []}]}",
        "expectedOutput": "Total Nodes: 2",
        "isHidden": true
      },
      {
        "id": "js-dom-2-tc-9",
        "input": "{\"tag\": \"app\", \"children\": [{\"tag\": \"v1\", \"children\": []}, {\"tag\": \"v2\", \"children\": [{\"tag\": \"sub\", \"children\": []}]}]}",
        "expectedOutput": "Total Nodes: 4",
        "isHidden": true
      },
      {
        "id": "js-dom-2-tc-10",
        "input": "{\"tag\": \"form\", \"children\": [{\"tag\": \"input\", \"children\": []}, {\"tag\": \"button\", \"children\": []}]}",
        "expectedOutput": "Total Nodes: 3",
        "isHidden": true
      }
    ]
  },
  {
    "id": "js-ev-1",
    "languageId": "javascript",
    "language": "javascript",
    "level": "advanced",
    "topicId": "js-event-loop-microtasks",
    "title": "Predict Event Loop Microtask Execution Order",
    "slug": "predict-event-loop-microtask-execution-order",
    "difficulty": "medium",
    "problemStatement": "In JavaScript event loop: synchronous code executes first, then microtasks (Promise.then), then macrotasks (setTimeout). Given event types in registration order, print them in their guaranteed execution order.",
    "description": "In JavaScript event loop: synchronous code executes first, then microtasks (Promise.then), then macrotasks (setTimeout). Given event types in registration order, print them in their guaranteed execution order.",
    "inputFormat": "Registration sequence of tasks: \"SYNC\" or \"MICRO\" or \"MACRO\" with identifier e.g. \"MACRO:1 MICRO:1 SYNC:1\".",
    "outputFormat": "Print space-separated executed task identifiers.",
    "constraints": [
      "Task tokens <= 100"
    ],
    "examples": [
      {
        "input": "MACRO:1 MICRO:1 SYNC:1",
        "output": "SYNC:1 MICRO:1 MACRO:1",
        "explanation": "Sync first, microtask second, macrotask last."
      },
      {
        "input": "MICRO:A SYNC:B",
        "output": "SYNC:B MICRO:A",
        "explanation": "Sync before micro."
      },
      {
        "input": "MACRO:T1 MACRO:T2 SYNC:S1",
        "output": "SYNC:S1 MACRO:T1 MACRO:T2",
        "explanation": "Sync before macros."
      }
    ],
    "starterCode": {
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\n\nmain();\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "js-ev-1-tc-1",
        "input": "MACRO:1 MICRO:1 SYNC:1",
        "expectedOutput": "SYNC:1 MICRO:1 MACRO:1",
        "isHidden": false
      },
      {
        "id": "js-ev-1-tc-2",
        "input": "MICRO:A SYNC:B",
        "expectedOutput": "SYNC:B MICRO:A",
        "isHidden": false
      },
      {
        "id": "js-ev-1-tc-3",
        "input": "MACRO:T1 MACRO:T2 SYNC:S1",
        "expectedOutput": "SYNC:S1 MACRO:T1 MACRO:T2",
        "isHidden": false
      },
      {
        "id": "js-ev-1-tc-4",
        "input": "MICRO:1 MICRO:2 SYNC:1",
        "expectedOutput": "SYNC:1 MICRO:1 MICRO:2",
        "isHidden": true
      },
      {
        "id": "js-ev-1-tc-5",
        "input": "MACRO:1 SYNC:1 MICRO:1",
        "expectedOutput": "SYNC:1 MICRO:1 MACRO:1",
        "isHidden": true
      },
      {
        "id": "js-ev-1-tc-6",
        "input": "SYNC:A SYNC:B MICRO:C",
        "expectedOutput": "SYNC:A SYNC:B MICRO:C",
        "isHidden": true
      },
      {
        "id": "js-ev-1-tc-7",
        "input": "MACRO:M1 MICRO:P1 MICRO:P2 SYNC:S1",
        "expectedOutput": "SYNC:S1 MICRO:P1 MICRO:P2 MACRO:M1",
        "isHidden": true
      },
      {
        "id": "js-ev-1-tc-8",
        "input": "MICRO:1 MACRO:1",
        "expectedOutput": "MICRO:1 MACRO:1",
        "isHidden": true
      },
      {
        "id": "js-ev-1-tc-9",
        "input": "SYNC:X MACRO:Y",
        "expectedOutput": "SYNC:X MACRO:Y",
        "isHidden": true
      },
      {
        "id": "js-ev-1-tc-10",
        "input": "MACRO:1 SYNC:1 SYNC:2 MICRO:1",
        "expectedOutput": "SYNC:1 SYNC:2 MICRO:1 MACRO:1",
        "isHidden": true
      }
    ]
  },
  {
    "id": "js-ev-2",
    "languageId": "javascript",
    "language": "javascript",
    "level": "advanced",
    "topicId": "js-event-loop-microtasks",
    "title": "QueueMicrotask Task Batch Runner",
    "slug": "queuemicrotask-task-batch-runner",
    "difficulty": "medium",
    "problemStatement": "Simulate queueMicrotask: Given a batch of N microtask priorities (integers), higher priority microtasks execute first. Print space-separated priorities in execution order.",
    "description": "Simulate queueMicrotask: Given a batch of N microtask priorities (integers), higher priority microtasks execute first. Print space-separated priorities in execution order.",
    "inputFormat": "First line N, second line N space-separated integers.",
    "outputFormat": "Print space-separated integers in descending order.",
    "constraints": [
      "1 <= N <= 1000"
    ],
    "examples": [
      {
        "input": "4\n10 50 20 40",
        "output": "50 40 20 10",
        "explanation": "Descending priority."
      },
      {
        "input": "2\n1 2",
        "output": "2 1",
        "explanation": "Descending."
      },
      {
        "input": "1\n100",
        "output": "100",
        "explanation": "Single task."
      }
    ],
    "starterCode": {
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\n\nmain();\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "js-ev-2-tc-1",
        "input": "4\n10 50 20 40",
        "expectedOutput": "50 40 20 10",
        "isHidden": false
      },
      {
        "id": "js-ev-2-tc-2",
        "input": "2\n1 2",
        "expectedOutput": "2 1",
        "isHidden": false
      },
      {
        "id": "js-ev-2-tc-3",
        "input": "1\n100",
        "expectedOutput": "100",
        "isHidden": false
      },
      {
        "id": "js-ev-2-tc-4",
        "input": "5\n5 1 4 2 3",
        "expectedOutput": "5 4 3 2 1",
        "isHidden": true
      },
      {
        "id": "js-ev-2-tc-5",
        "input": "3\n10 10 20",
        "expectedOutput": "20 10 10",
        "isHidden": true
      },
      {
        "id": "js-ev-2-tc-6",
        "input": "4\n-5 0 5 10",
        "expectedOutput": "10 5 0 -5",
        "isHidden": true
      },
      {
        "id": "js-ev-2-tc-7",
        "input": "3\n100 200 150",
        "expectedOutput": "200 150 100",
        "isHidden": true
      },
      {
        "id": "js-ev-2-tc-8",
        "input": "2\n8 8",
        "expectedOutput": "8 8",
        "isHidden": true
      },
      {
        "id": "js-ev-2-tc-9",
        "input": "5\n30 10 50 20 40",
        "expectedOutput": "50 40 30 20 10",
        "isHidden": true
      },
      {
        "id": "js-ev-2-tc-10",
        "input": "4\n99 12 85 43",
        "expectedOutput": "99 85 43 12",
        "isHidden": true
      }
    ]
  },
  {
    "id": "js-ev-3",
    "languageId": "javascript",
    "language": "javascript",
    "level": "advanced",
    "topicId": "js-event-loop-microtasks",
    "title": "Debounce Function Simulation",
    "slug": "debounce-function-simulation",
    "difficulty": "hard",
    "problemStatement": "Simulate debounce(fn, delay=D): Given delay D and sequence of call timestamps in ms, a call only executes if no new call arrives within D ms. If another call arrives within D ms, the timer resets. Output the timestamps at which execution actually occurs.",
    "description": "Simulate debounce(fn, delay=D): Given delay D and sequence of call timestamps in ms, a call only executes if no new call arrives within D ms. If another call arrives within D ms, the timer resets. Output the timestamps at which execution actually occurs.",
    "inputFormat": "First line D (ms) and N, second line N space-separated call timestamps.",
    "outputFormat": "Print space-separated execution timestamps.",
    "constraints": [
      "1 <= D <= 1000",
      "1 <= N <= 100"
    ],
    "examples": [
      {
        "input": "50 3\n0 20 100",
        "output": "70 150",
        "explanation": "Calls at 0 and 20 debounce into 20+50=70. Call at 100 executes at 100+50=150."
      },
      {
        "input": "100 1\n0",
        "output": "100",
        "explanation": "Single call executes at 0+100=100."
      },
      {
        "input": "30 2\n0 10",
        "output": "40",
        "explanation": "Call at 0 debounced by 10, executes at 10+30=40."
      }
    ],
    "starterCode": {
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\n\nmain();\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "js-ev-3-tc-1",
        "input": "50 3\n0 20 100",
        "expectedOutput": "70 150",
        "isHidden": false
      },
      {
        "id": "js-ev-3-tc-2",
        "input": "100 1\n0",
        "expectedOutput": "100",
        "isHidden": false
      },
      {
        "id": "js-ev-3-tc-3",
        "input": "30 2\n0 10",
        "expectedOutput": "40",
        "isHidden": false
      },
      {
        "id": "js-ev-3-tc-4",
        "input": "50 2\n0 60",
        "expectedOutput": "50 110",
        "isHidden": true
      },
      {
        "id": "js-ev-3-tc-5",
        "input": "20 4\n0 10 15 50",
        "expectedOutput": "35 70",
        "isHidden": true
      },
      {
        "id": "js-ev-3-tc-6",
        "input": "100 2\n0 200",
        "expectedOutput": "100 300",
        "isHidden": true
      },
      {
        "id": "js-ev-3-tc-7",
        "input": "40 3\n0 50 100",
        "expectedOutput": "40 90 140",
        "isHidden": true
      },
      {
        "id": "js-ev-3-tc-8",
        "input": "10 3\n0 5 8",
        "expectedOutput": "18",
        "isHidden": true
      },
      {
        "id": "js-ev-3-tc-9",
        "input": "50 1\n25",
        "expectedOutput": "75",
        "isHidden": true
      },
      {
        "id": "js-ev-3-tc-10",
        "input": "30 4\n0 40 80 120",
        "expectedOutput": "30 70 110 150",
        "isHidden": true
      }
    ]
  },
  {
    "id": "js-gen-1",
    "languageId": "javascript",
    "language": "javascript",
    "level": "advanced",
    "topicId": "js-iterators-and-generators",
    "title": "Custom Range Iterable with Symbol.iterator",
    "slug": "custom-range-iterable-with-symbol-iterator",
    "difficulty": "medium",
    "problemStatement": "Implement custom iterable Range(start, end, step) implementing [Symbol.iterator](). Given start, end (inclusive), and step, iterate and print values separated by space.",
    "description": "Implement custom iterable Range(start, end, step) implementing [Symbol.iterator](). Given start, end (inclusive), and step, iterate and print values separated by space.",
    "inputFormat": "Three space-separated integers: start end step.",
    "outputFormat": "Print space-separated generated values.",
    "constraints": [
      "1 <= step <= 100",
      "start <= end"
    ],
    "examples": [
      {
        "input": "1 10 2",
        "output": "1 3 5 7 9",
        "explanation": "Stepping by 2."
      },
      {
        "input": "0 5 1",
        "output": "0 1 2 3 4 5",
        "explanation": "Step 1."
      },
      {
        "input": "5 5 1",
        "output": "5",
        "explanation": "Single value."
      }
    ],
    "starterCode": {
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\n\nmain();\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "js-gen-1-tc-1",
        "input": "1 10 2",
        "expectedOutput": "1 3 5 7 9",
        "isHidden": false
      },
      {
        "id": "js-gen-1-tc-2",
        "input": "0 5 1",
        "expectedOutput": "0 1 2 3 4 5",
        "isHidden": false
      },
      {
        "id": "js-gen-1-tc-3",
        "input": "5 5 1",
        "expectedOutput": "5",
        "isHidden": false
      },
      {
        "id": "js-gen-1-tc-4",
        "input": "2 10 2",
        "expectedOutput": "2 4 6 8 10",
        "isHidden": true
      },
      {
        "id": "js-gen-1-tc-5",
        "input": "10 25 5",
        "expectedOutput": "10 15 20 25",
        "isHidden": true
      },
      {
        "id": "js-gen-1-tc-6",
        "input": "0 20 4",
        "expectedOutput": "0 4 8 12 16 20",
        "isHidden": true
      },
      {
        "id": "js-gen-1-tc-7",
        "input": "1 7 3",
        "expectedOutput": "1 4 7",
        "isHidden": true
      },
      {
        "id": "js-gen-1-tc-8",
        "input": "100 130 10",
        "expectedOutput": "100 110 120 130",
        "isHidden": true
      },
      {
        "id": "js-gen-1-tc-9",
        "input": "3 15 3",
        "expectedOutput": "3 6 9 12 15",
        "isHidden": true
      },
      {
        "id": "js-gen-1-tc-10",
        "input": "1 1 5",
        "expectedOutput": "1",
        "isHidden": true
      }
    ]
  },
  {
    "id": "js-gen-2",
    "languageId": "javascript",
    "language": "javascript",
    "level": "advanced",
    "topicId": "js-iterators-and-generators",
    "title": "Fibonacci Generator Function in JavaScript",
    "slug": "fibonacci-generator-function-in-javascript",
    "difficulty": "medium",
    "problemStatement": "Implement generator function* fibGenerator(). Yield first N Fibonacci numbers starting with 0 and 1. Print space-separated terms.",
    "description": "Implement generator function* fibGenerator(). Yield first N Fibonacci numbers starting with 0 and 1. Print space-separated terms.",
    "inputFormat": "An integer N.",
    "outputFormat": "Print space-separated terms.",
    "constraints": [
      "1 <= N <= 30"
    ],
    "examples": [
      {
        "input": "5",
        "output": "0 1 1 2 3",
        "explanation": "First 5 Fibonacci terms."
      },
      {
        "input": "1",
        "output": "0",
        "explanation": "First 1 term."
      },
      {
        "input": "7",
        "output": "0 1 1 2 3 5 8",
        "explanation": "First 7 terms."
      }
    ],
    "starterCode": {
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\n\nmain();\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "js-gen-2-tc-1",
        "input": "5",
        "expectedOutput": "0 1 1 2 3",
        "isHidden": false
      },
      {
        "id": "js-gen-2-tc-2",
        "input": "1",
        "expectedOutput": "0",
        "isHidden": false
      },
      {
        "id": "js-gen-2-tc-3",
        "input": "7",
        "expectedOutput": "0 1 1 2 3 5 8",
        "isHidden": false
      },
      {
        "id": "js-gen-2-tc-4",
        "input": "2",
        "expectedOutput": "0 1",
        "isHidden": true
      },
      {
        "id": "js-gen-2-tc-5",
        "input": "3",
        "expectedOutput": "0 1 1",
        "isHidden": true
      },
      {
        "id": "js-gen-2-tc-6",
        "input": "4",
        "expectedOutput": "0 1 1 2",
        "isHidden": true
      },
      {
        "id": "js-gen-2-tc-7",
        "input": "6",
        "expectedOutput": "0 1 1 2 3 5",
        "isHidden": true
      },
      {
        "id": "js-gen-2-tc-8",
        "input": "8",
        "expectedOutput": "0 1 1 2 3 5 8 13",
        "isHidden": true
      },
      {
        "id": "js-gen-2-tc-9",
        "input": "10",
        "expectedOutput": "0 1 1 2 3 5 8 13 21 34",
        "isHidden": true
      },
      {
        "id": "js-gen-2-tc-10",
        "input": "12",
        "expectedOutput": "0 1 1 2 3 5 8 13 21 34 55 89",
        "isHidden": true
      }
    ]
  },
  {
    "id": "js-gen-3",
    "languageId": "javascript",
    "language": "javascript",
    "level": "advanced",
    "topicId": "js-iterators-and-generators",
    "title": "Async Generator for Paged Stream Processing",
    "slug": "async-generator-for-paged-stream-processing",
    "difficulty": "hard",
    "problemStatement": "Simulate async generator async function* paginate(totalItems, pageSize): Yield batches of item IDs. Given totalItems T and pageSize P, print each yielded page batch in format \"Page <pageNum>: [<items_comma_separated>]\".",
    "description": "Simulate async generator async function* paginate(totalItems, pageSize): Yield batches of item IDs. Given totalItems T and pageSize P, print each yielded page batch in format \"Page <pageNum>: [<items_comma_separated>]\".",
    "inputFormat": "Two integers: totalItems T and pageSize P.",
    "outputFormat": "Print each page batch on a new line.",
    "constraints": [
      "1 <= P <= T <= 100"
    ],
    "examples": [
      {
        "input": "5 2",
        "output": "Page 1: [1, 2]\nPage 2: [3, 4]\nPage 3: [5]",
        "explanation": "Batches of size 2."
      },
      {
        "input": "3 3",
        "output": "Page 1: [1, 2, 3]",
        "explanation": "Single page."
      },
      {
        "input": "4 2",
        "output": "Page 1: [1, 2]\nPage 2: [3, 4]",
        "explanation": "Exact pages."
      }
    ],
    "starterCode": {
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\n\nmain();\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "js-gen-3-tc-1",
        "input": "5 2",
        "expectedOutput": "Page 1: [1, 2]\nPage 2: [3, 4]\nPage 3: [5]",
        "isHidden": false
      },
      {
        "id": "js-gen-3-tc-2",
        "input": "3 3",
        "expectedOutput": "Page 1: [1, 2, 3]",
        "isHidden": false
      },
      {
        "id": "js-gen-3-tc-3",
        "input": "4 2",
        "expectedOutput": "Page 1: [1, 2]\nPage 2: [3, 4]",
        "isHidden": false
      },
      {
        "id": "js-gen-3-tc-4",
        "input": "1 1",
        "expectedOutput": "Page 1: [1]",
        "isHidden": true
      },
      {
        "id": "js-gen-3-tc-5",
        "input": "6 3",
        "expectedOutput": "Page 1: [1, 2, 3]\nPage 2: [4, 5, 6]",
        "isHidden": true
      },
      {
        "id": "js-gen-3-tc-6",
        "input": "7 3",
        "expectedOutput": "Page 1: [1, 2, 3]\nPage 2: [4, 5, 6]\nPage 3: [7]",
        "isHidden": true
      },
      {
        "id": "js-gen-3-tc-7",
        "input": "2 1",
        "expectedOutput": "Page 1: [1]\nPage 2: [2]",
        "isHidden": true
      },
      {
        "id": "js-gen-3-tc-8",
        "input": "5 5",
        "expectedOutput": "Page 1: [1, 2, 3, 4, 5]",
        "isHidden": true
      },
      {
        "id": "js-gen-3-tc-9",
        "input": "4 3",
        "expectedOutput": "Page 1: [1, 2, 3]\nPage 2: [4]",
        "isHidden": true
      },
      {
        "id": "js-gen-3-tc-10",
        "input": "8 4",
        "expectedOutput": "Page 1: [1, 2, 3, 4]\nPage 2: [5, 6, 7, 8]",
        "isHidden": true
      }
    ]
  },
  {
    "id": "js-mem-1",
    "languageId": "javascript",
    "language": "javascript",
    "level": "advanced",
    "topicId": "js-memory-leaks-and-gc",
    "title": "Private Metadata Storage with WeakMap",
    "slug": "private-metadata-storage-with-weakmap",
    "difficulty": "medium",
    "problemStatement": "Simulate WeakMap memory isolation: Store metadata M for object key O. If object reference is valid, WeakMap.get(O) returns M. If cleared, print \"COLLECTED\". Given key and metadata string, verify storage.",
    "description": "Simulate WeakMap memory isolation: Store metadata M for object key O. If object reference is valid, WeakMap.get(O) returns M. If cleared, print \"COLLECTED\". Given key and metadata string, verify storage.",
    "inputFormat": "Key string and metadata string.",
    "outputFormat": "Print \"Metadata: <metadata>\".",
    "constraints": [
      "Strings <= 50 chars."
    ],
    "examples": [
      {
        "input": "User101 RoleAdmin",
        "output": "Metadata: RoleAdmin",
        "explanation": "Retrieved metadata."
      },
      {
        "input": "SessionA Valid",
        "output": "Metadata: Valid",
        "explanation": "Retrieved."
      },
      {
        "input": "Token9 Active",
        "output": "Metadata: Active",
        "explanation": "Retrieved."
      }
    ],
    "starterCode": {
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\n\nmain();\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "js-mem-1-tc-1",
        "input": "User101 RoleAdmin",
        "expectedOutput": "Metadata: RoleAdmin",
        "isHidden": false
      },
      {
        "id": "js-mem-1-tc-2",
        "input": "SessionA Valid",
        "expectedOutput": "Metadata: Valid",
        "isHidden": false
      },
      {
        "id": "js-mem-1-tc-3",
        "input": "Token9 Active",
        "expectedOutput": "Metadata: Active",
        "isHidden": false
      },
      {
        "id": "js-mem-1-tc-4",
        "input": "Node1 Root",
        "expectedOutput": "Metadata: Root",
        "isHidden": true
      },
      {
        "id": "js-mem-1-tc-5",
        "input": "SocketB Connected",
        "expectedOutput": "Metadata: Connected",
        "isHidden": true
      },
      {
        "id": "js-mem-1-tc-6",
        "input": "CacheX Loaded",
        "expectedOutput": "Metadata: Loaded",
        "isHidden": true
      },
      {
        "id": "js-mem-1-tc-7",
        "input": "ContextY Initialized",
        "expectedOutput": "Metadata: Initialized",
        "isHidden": true
      },
      {
        "id": "js-mem-1-tc-8",
        "input": "Handle5 Open",
        "expectedOutput": "Metadata: Open",
        "isHidden": true
      },
      {
        "id": "js-mem-1-tc-9",
        "input": "Record2 Saved",
        "expectedOutput": "Metadata: Saved",
        "isHidden": true
      },
      {
        "id": "js-mem-1-tc-10",
        "input": "KeyZ Verified",
        "expectedOutput": "Metadata: Verified",
        "isHidden": true
      }
    ]
  },
  {
    "id": "js-mem-2",
    "languageId": "javascript",
    "language": "javascript",
    "level": "advanced",
    "topicId": "js-memory-leaks-and-gc",
    "title": "Event Listener Cleanup to Prevent Leaks",
    "slug": "event-listener-cleanup-to-prevent-leaks",
    "difficulty": "medium",
    "problemStatement": "Simulate EventEmitter: When on(event, listener) is called, listener count increments. When off(event, listener) is called, it decrements. Given sequence of \"+ <event>\" (attach) and \"- <event>\" (detach), print final listener count for that event.",
    "description": "Simulate EventEmitter: When on(event, listener) is called, listener count increments. When off(event, listener) is called, it decrements. Given sequence of \"+ <event>\" (attach) and \"- <event>\" (detach), print final listener count for that event.",
    "inputFormat": "Event name, followed by N operations (+ or -).",
    "outputFormat": "Print \"Listeners for <event>: <count>\".",
    "constraints": [
      "1 <= N <= 1000"
    ],
    "examples": [
      {
        "input": "click 3\n+\n+\n-",
        "output": "Listeners for click: 1",
        "explanation": "2 attached, 1 detached -> 1 remaining."
      },
      {
        "input": "resize 2\n+\n-",
        "output": "Listeners for resize: 0",
        "explanation": "0 remaining."
      },
      {
        "input": "submit 1\n+",
        "output": "Listeners for submit: 1",
        "explanation": "1 remaining."
      }
    ],
    "starterCode": {
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\n\nmain();\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "js-mem-2-tc-1",
        "input": "click 3\n+\n+\n-",
        "expectedOutput": "Listeners for click: 1",
        "isHidden": false
      },
      {
        "id": "js-mem-2-tc-2",
        "input": "resize 2\n+\n-",
        "expectedOutput": "Listeners for resize: 0",
        "isHidden": false
      },
      {
        "id": "js-mem-2-tc-3",
        "input": "submit 1\n+",
        "expectedOutput": "Listeners for submit: 1",
        "isHidden": false
      },
      {
        "id": "js-mem-2-tc-4",
        "input": "scroll 4\n+\n+\n+\n-",
        "expectedOutput": "Listeners for scroll: 2",
        "isHidden": true
      },
      {
        "id": "js-mem-2-tc-5",
        "input": "input 2\n+\n+",
        "expectedOutput": "Listeners for input: 2",
        "isHidden": true
      },
      {
        "id": "js-mem-2-tc-6",
        "input": "load 3\n+\n-\n-",
        "expectedOutput": "Listeners for load: 0",
        "isHidden": true
      },
      {
        "id": "js-mem-2-tc-7",
        "input": "error 5\n+\n+\n+\n+\n-",
        "expectedOutput": "Listeners for error: 3",
        "isHidden": true
      },
      {
        "id": "js-mem-2-tc-8",
        "input": "focus 2\n-\n+",
        "expectedOutput": "Listeners for focus: 1",
        "isHidden": true
      },
      {
        "id": "js-mem-2-tc-9",
        "input": "blur 1\n-",
        "expectedOutput": "Listeners for blur: 0",
        "isHidden": true
      },
      {
        "id": "js-mem-2-tc-10",
        "input": "change 4\n+\n+\n-\n-",
        "expectedOutput": "Listeners for change: 0",
        "isHidden": true
      }
    ]
  },
  {
    "id": "js-sec-1",
    "languageId": "javascript",
    "language": "javascript",
    "level": "advanced",
    "topicId": "js-web-security-xss-csrf-cors",
    "title": "HTML Sanitizer to Prevent XSS",
    "slug": "html-sanitizer-to-prevent-xss",
    "difficulty": "medium",
    "problemStatement": "Implement sanitizeHTML(str) escaping dangerous characters: & to &amp;, < to &lt;, > to &gt;, \" to &quot;, ' to &#39;. Print sanitized string.",
    "description": "Implement sanitizeHTML(str) escaping dangerous characters: & to &amp;, < to &lt;, > to &gt;, \" to &quot;, ' to &#39;. Print sanitized string.",
    "inputFormat": "A string containing raw HTML.",
    "outputFormat": "Print escaped safe string.",
    "constraints": [
      "1 <= len(S) <= 10^4"
    ],
    "examples": [
      {
        "input": "<script>alert(\"XSS\")</script>",
        "output": "&lt;script&gt;alert(&quot;XSS&quot;)&lt;/script&gt;",
        "explanation": "Escaped HTML."
      },
      {
        "input": "<b class='bold'>Text</b>",
        "output": "&lt;b class=&#39;bold&#39;&gt;Text&lt;/b&gt;",
        "explanation": "Escaped quotes and tags."
      },
      {
        "input": "Normal text & more",
        "output": "Normal text &amp; more",
        "explanation": "Escaped ampersand."
      }
    ],
    "starterCode": {
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\n\nmain();\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "js-sec-1-tc-1",
        "input": "<script>alert(\"XSS\")</script>",
        "expectedOutput": "&lt;script&gt;alert(&quot;XSS&quot;)&lt;/script&gt;",
        "isHidden": false
      },
      {
        "id": "js-sec-1-tc-2",
        "input": "<b class='bold'>Text</b>",
        "expectedOutput": "&lt;b class=&#39;bold&#39;&gt;Text&lt;/b&gt;",
        "isHidden": false
      },
      {
        "id": "js-sec-1-tc-3",
        "input": "Normal text & more",
        "expectedOutput": "Normal text &amp; more",
        "isHidden": false
      },
      {
        "id": "js-sec-1-tc-4",
        "input": "<img src=\"x\" onerror=\"alert(1)\">",
        "expectedOutput": "&lt;img src=&quot;x&quot; onerror=&quot;alert(1)&quot;&gt;",
        "isHidden": true
      },
      {
        "id": "js-sec-1-tc-5",
        "input": "Plain string",
        "expectedOutput": "Plain string",
        "isHidden": true
      },
      {
        "id": "js-sec-1-tc-6",
        "input": "<a href=\"javascript:void(0)\">Click</a>",
        "expectedOutput": "&lt;a href=&quot;javascript:void(0)&quot;&gt;Click&lt;/a&gt;",
        "isHidden": true
      },
      {
        "id": "js-sec-1-tc-7",
        "input": "Tom & Jerry",
        "expectedOutput": "Tom &amp; Jerry",
        "isHidden": true
      },
      {
        "id": "js-sec-1-tc-8",
        "input": "1 < 2 && 3 > 2",
        "expectedOutput": "1 &lt; 2 &amp;&amp; 3 &gt; 2",
        "isHidden": true
      },
      {
        "id": "js-sec-1-tc-9",
        "input": "\"Hello\"",
        "expectedOutput": "&quot;Hello&quot;",
        "isHidden": true
      },
      {
        "id": "js-sec-1-tc-10",
        "input": "'World'",
        "expectedOutput": "&#39;World&#39;",
        "isHidden": true
      }
    ]
  },
  {
    "id": "js-sec-2",
    "languageId": "javascript",
    "language": "javascript",
    "level": "advanced",
    "topicId": "js-web-security-xss-csrf-cors",
    "title": "JWT Token Payload Base64 Extractor",
    "slug": "jwt-token-payload-base64-extractor",
    "difficulty": "medium",
    "problemStatement": "A JWT has format \"header.payload.signature\". Extract payload, base64-decode using Buffer.from(payload, \"base64\").toString(\"utf-8\"), parse JSON, and print \"Subject: <sub} Role: <role>\".",
    "description": "A JWT has format \"header.payload.signature\". Extract payload, base64-decode using Buffer.from(payload, \"base64\").toString(\"utf-8\"), parse JSON, and print \"Subject: <sub} Role: <role>\".",
    "inputFormat": "A valid JWT string.",
    "outputFormat": "Print \"Subject: <sub> Role: <role>\".",
    "constraints": [
      "Valid mock JWT string."
    ],
    "examples": [
      {
        "input": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTYiLCJyb2xlIjoiYWRtaW4ifQ.signature",
        "output": "Subject: 123456 Role: admin",
        "explanation": "Decoded payload."
      },
      {
        "input": "header.eyJzdWIiOiJ1c2VyMSIsInJvbGUiOiJndWVzdCJ9.sig",
        "output": "Subject: user1 Role: guest",
        "explanation": "Decoded user1."
      },
      {
        "input": "h.eyJzdWIiOiJhbGljZSIsInJvbGUiOiJ1c2VyIn0.s",
        "output": "Subject: alice Role: user",
        "explanation": "Decoded alice."
      }
    ],
    "starterCode": {
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\n\nmain();\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "js-sec-2-tc-1",
        "input": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTYiLCJyb2xlIjoiYWRtaW4ifQ.signature",
        "expectedOutput": "Subject: 123456 Role: admin",
        "isHidden": false
      },
      {
        "id": "js-sec-2-tc-2",
        "input": "header.eyJzdWIiOiJ1c2VyMSIsInJvbGUiOiJndWVzdCJ9.sig",
        "expectedOutput": "Subject: user1 Role: guest",
        "isHidden": false
      },
      {
        "id": "js-sec-2-tc-3",
        "input": "h.eyJzdWIiOiJhbGljZSIsInJvbGUiOiJ1c2VyIn0.s",
        "expectedOutput": "Subject: alice Role: user",
        "isHidden": false
      },
      {
        "id": "js-sec-2-tc-4",
        "input": "h.eyJzdWIiOiJib2IiLCJyb2xlOiJtYW5hZ2VyIn0.s",
        "expectedOutput": "Subject: bob Role: manager",
        "isHidden": true
      },
      {
        "id": "js-sec-2-tc-5",
        "input": "h.eyJzdWIiOiJyb290Iiwicm9sZSI6InN1cGVyIn0.s",
        "expectedOutput": "Subject: root Role: super",
        "isHidden": true
      },
      {
        "id": "js-sec-2-tc-6",
        "input": "h.eyJzdWIiOiJkZXYxIiwicm9sZSI6ImVuZ2luZWVyIn0.s",
        "expectedOutput": "Subject: dev1 Role: engineer",
        "isHidden": true
      },
      {
        "id": "js-sec-2-tc-7",
        "input": "h.eyJzdWIiOiJjaGFybGllIiwicm9sZSI6Im1lbWJlciJ9.s",
        "expectedOutput": "Subject: charlie Role: member",
        "isHidden": true
      },
      {
        "id": "js-sec-2-tc-8",
        "input": "h.eyJzdWIiOiJkYXZpZCIsInJvbGUiOiJhdWRpdG9yIn0.s",
        "expectedOutput": "Subject: david Role: auditor",
        "isHidden": true
      },
      {
        "id": "js-sec-2-tc-9",
        "input": "h.eyJzdWIiOiJlbW1hIiwicm9sZSI6ImxlYWQifQ.s",
        "expectedOutput": "Subject: emma Role: lead",
        "isHidden": true
      },
      {
        "id": "js-sec-2-tc-10",
        "input": "h.eyJzdWIiOiJmcmFuayIsInJvbGUiOiJzdHVkZW50In0.s",
        "expectedOutput": "Subject: frank Role: student",
        "isHidden": true
      }
    ]
  },
  {
    "id": "js-node-1",
    "languageId": "javascript",
    "language": "javascript",
    "level": "advanced",
    "topicId": "js-nodejs-runtime-and-modules",
    "title": "Buffer Slice and UTF-8 Encoding in Node.js",
    "slug": "buffer-slice-and-utf-8-encoding-in-node-js",
    "difficulty": "easy",
    "problemStatement": "In Node.js, create Buffer.from(str, \"utf-8\"), slice from index start to end, and convert sliced buffer back to string. Print the sliced string.",
    "description": "In Node.js, create Buffer.from(str, \"utf-8\"), slice from index start to end, and convert sliced buffer back to string. Print the sliced string.",
    "inputFormat": "String S, followed by start and end indices.",
    "outputFormat": "Print sliced buffer string.",
    "constraints": [
      "1 <= len(S) <= 10^4"
    ],
    "examples": [
      {
        "input": "HelloWorld 0 5",
        "output": "Hello",
        "explanation": "First 5 bytes."
      },
      {
        "input": "NodeJS 4 6",
        "output": "JS",
        "explanation": "Bytes 4 to 6."
      },
      {
        "input": "Antigravity 4 11",
        "output": "gravity",
        "explanation": "gravity extracted."
      }
    ],
    "starterCode": {
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\n\nmain();\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "js-node-1-tc-1",
        "input": "HelloWorld 0 5",
        "expectedOutput": "Hello",
        "isHidden": false
      },
      {
        "id": "js-node-1-tc-2",
        "input": "NodeJS 4 6",
        "expectedOutput": "JS",
        "isHidden": false
      },
      {
        "id": "js-node-1-tc-3",
        "input": "Antigravity 4 11",
        "expectedOutput": "gravity",
        "isHidden": false
      },
      {
        "id": "js-node-1-tc-4",
        "input": "JavaScript 0 4",
        "expectedOutput": "Java",
        "isHidden": true
      },
      {
        "id": "js-node-1-tc-5",
        "input": "Programming 3 7",
        "expectedOutput": "gram",
        "isHidden": true
      },
      {
        "id": "js-node-1-tc-6",
        "input": "Buffers 0 3",
        "expectedOutput": "Buf",
        "isHidden": true
      },
      {
        "id": "js-node-1-tc-7",
        "input": "Frontend 0 5",
        "expectedOutput": "Front",
        "isHidden": true
      },
      {
        "id": "js-node-1-tc-8",
        "input": "Backend 4 7",
        "expectedOutput": "end",
        "isHidden": true
      },
      {
        "id": "js-node-1-tc-9",
        "input": "Compiler 0 4",
        "expectedOutput": "Comp",
        "isHidden": true
      },
      {
        "id": "js-node-1-tc-10",
        "input": "Runtime 3 7",
        "expectedOutput": "time",
        "isHidden": true
      }
    ]
  },
  {
    "id": "js-node-2",
    "languageId": "javascript",
    "language": "javascript",
    "level": "advanced",
    "topicId": "js-nodejs-runtime-and-modules",
    "title": "Transform Stream Uppercase Processing",
    "slug": "transform-stream-uppercase-processing",
    "difficulty": "medium",
    "problemStatement": "Simulate a Transform stream converting text chunks to uppercase. Given space-separated words, print them converted to uppercase space-separated.",
    "description": "Simulate a Transform stream converting text chunks to uppercase. Given space-separated words, print them converted to uppercase space-separated.",
    "inputFormat": "A line of words.",
    "outputFormat": "Print uppercase words.",
    "constraints": [
      "1 <= words <= 10^4"
    ],
    "examples": [
      {
        "input": "hello stream world",
        "output": "HELLO STREAM WORLD",
        "explanation": "Transformed."
      },
      {
        "input": "node runtime",
        "output": "NODE RUNTIME",
        "explanation": "Uppercased."
      },
      {
        "input": "data pipe",
        "output": "DATA PIPE",
        "explanation": "Uppercased."
      }
    ],
    "starterCode": {
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\n\nmain();\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "js-node-2-tc-1",
        "input": "hello stream world",
        "expectedOutput": "HELLO STREAM WORLD",
        "isHidden": false
      },
      {
        "id": "js-node-2-tc-2",
        "input": "node runtime",
        "expectedOutput": "NODE RUNTIME",
        "isHidden": false
      },
      {
        "id": "js-node-2-tc-3",
        "input": "data pipe",
        "expectedOutput": "DATA PIPE",
        "isHidden": false
      },
      {
        "id": "js-node-2-tc-4",
        "input": "read write duplex",
        "expectedOutput": "READ WRITE DUPLEX",
        "isHidden": true
      },
      {
        "id": "js-node-2-tc-5",
        "input": "buffer chunk transform",
        "expectedOutput": "BUFFER CHUNK TRANSFORM",
        "isHidden": true
      },
      {
        "id": "js-node-2-tc-6",
        "input": "async io processing",
        "expectedOutput": "ASYNC IO PROCESSING",
        "isHidden": true
      },
      {
        "id": "js-node-2-tc-7",
        "input": "event emitter stream",
        "expectedOutput": "EVENT EMITTER STREAM",
        "isHidden": true
      },
      {
        "id": "js-node-2-tc-8",
        "input": "microservice pipeline",
        "expectedOutput": "MICROSERVICE PIPELINE",
        "isHidden": true
      },
      {
        "id": "js-node-2-tc-9",
        "input": "express server handler",
        "expectedOutput": "EXPRESS SERVER HANDLER",
        "isHidden": true
      },
      {
        "id": "js-node-2-tc-10",
        "input": "javascript engines",
        "expectedOutput": "JAVASCRIPT ENGINES",
        "isHidden": true
      }
    ]
  },
  {
    "id": "js-node-3",
    "languageId": "javascript",
    "language": "javascript",
    "level": "advanced",
    "topicId": "js-nodejs-runtime-and-modules",
    "title": "Path Normalizer and Extension Extractor",
    "slug": "path-normalizer-and-extension-extractor",
    "difficulty": "medium",
    "problemStatement": "Simulate path.extname(filepath) and path.basename(filepath): Given a file path, extract the basename and extension. Print \"Base: <base> Ext: <ext>\".",
    "description": "Simulate path.extname(filepath) and path.basename(filepath): Given a file path, extract the basename and extension. Print \"Base: <base> Ext: <ext>\".",
    "inputFormat": "A file path string.",
    "outputFormat": "Print \"Base: <base> Ext: <ext>\".",
    "constraints": [
      "Path string length <= 100"
    ],
    "examples": [
      {
        "input": "/home/user/app.js",
        "output": "Base: app.js Ext: .js",
        "explanation": "Base and extension extracted."
      },
      {
        "input": "src/components/Button.jsx",
        "output": "Base: Button.jsx Ext: .jsx",
        "explanation": "JSX file."
      },
      {
        "input": "data.json",
        "output": "Base: data.json Ext: .json",
        "explanation": "JSON file."
      }
    ],
    "starterCode": {
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\n\nmain();\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "js-node-3-tc-1",
        "input": "/home/user/app.js",
        "expectedOutput": "Base: app.js Ext: .js",
        "isHidden": false
      },
      {
        "id": "js-node-3-tc-2",
        "input": "src/components/Button.jsx",
        "expectedOutput": "Base: Button.jsx Ext: .jsx",
        "isHidden": false
      },
      {
        "id": "js-node-3-tc-3",
        "input": "data.json",
        "expectedOutput": "Base: data.json Ext: .json",
        "isHidden": false
      },
      {
        "id": "js-node-3-tc-4",
        "input": "/var/log/server.log",
        "expectedOutput": "Base: server.log Ext: .log",
        "isHidden": true
      },
      {
        "id": "js-node-3-tc-5",
        "input": "index.html",
        "expectedOutput": "Base: index.html Ext: .html",
        "isHidden": true
      },
      {
        "id": "js-node-3-tc-6",
        "input": "styles/main.css",
        "expectedOutput": "Base: main.css Ext: .css",
        "isHidden": true
      },
      {
        "id": "js-node-3-tc-7",
        "input": "test/runner.ts",
        "expectedOutput": "Base: runner.ts Ext: .ts",
        "isHidden": true
      },
      {
        "id": "js-node-3-tc-8",
        "input": "README.md",
        "expectedOutput": "Base: README.md Ext: .md",
        "isHidden": true
      },
      {
        "id": "js-node-3-tc-9",
        "input": "docker/config.yaml",
        "expectedOutput": "Base: config.yaml Ext: .yaml",
        "isHidden": true
      },
      {
        "id": "js-node-3-tc-10",
        "input": "script.py",
        "expectedOutput": "Base: script.py Ext: .py",
        "isHidden": true
      }
    ]
  },
  {
    "id": "js-exp-1",
    "languageId": "javascript",
    "language": "javascript",
    "level": "advanced",
    "topicId": "js-express-rest-and-jwt",
    "title": "Express Route Path Parameter Matcher",
    "slug": "express-route-path-parameter-matcher",
    "difficulty": "easy",
    "problemStatement": "Match an Express route path: Route pattern is \"/api/v1/:resource/:id\". Given actual URL e.g. \"/api/v1/users/42\", extract param values and print \"Resource: <resource> ID: <id>\". If mismatch, print \"ROUTE NOT MATCHED\".",
    "description": "Match an Express route path: Route pattern is \"/api/v1/:resource/:id\". Given actual URL e.g. \"/api/v1/users/42\", extract param values and print \"Resource: <resource> ID: <id>\". If mismatch, print \"ROUTE NOT MATCHED\".",
    "inputFormat": "URL path string.",
    "outputFormat": "Print \"Resource: <resource> ID: <id>\" or \"ROUTE NOT MATCHED\".",
    "constraints": [
      "URL length <= 100"
    ],
    "examples": [
      {
        "input": "/api/v1/users/42",
        "output": "Resource: users ID: 42",
        "explanation": "Matched."
      },
      {
        "input": "/api/v1/orders/100",
        "output": "Resource: orders ID: 100",
        "explanation": "Matched."
      },
      {
        "input": "/invalid/url",
        "output": "ROUTE NOT MATCHED",
        "explanation": "Mismatch."
      }
    ],
    "starterCode": {
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\n\nmain();\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "js-exp-1-tc-1",
        "input": "/api/v1/users/42",
        "expectedOutput": "Resource: users ID: 42",
        "isHidden": false
      },
      {
        "id": "js-exp-1-tc-2",
        "input": "/api/v1/orders/100",
        "expectedOutput": "Resource: orders ID: 100",
        "isHidden": false
      },
      {
        "id": "js-exp-1-tc-3",
        "input": "/invalid/url",
        "expectedOutput": "ROUTE NOT MATCHED",
        "isHidden": false
      },
      {
        "id": "js-exp-1-tc-4",
        "input": "/api/v1/products/5",
        "expectedOutput": "Resource: products ID: 5",
        "isHidden": true
      },
      {
        "id": "js-exp-1-tc-5",
        "input": "/api/v1/items/999",
        "expectedOutput": "Resource: items ID: 999",
        "isHidden": true
      },
      {
        "id": "js-exp-1-tc-6",
        "input": "/api/v2/users/42",
        "expectedOutput": "ROUTE NOT MATCHED",
        "isHidden": true
      },
      {
        "id": "js-exp-1-tc-7",
        "input": "/api/v1/courses/cs101",
        "expectedOutput": "Resource: courses ID: cs101",
        "isHidden": true
      },
      {
        "id": "js-exp-1-tc-8",
        "input": "/api/v1/lessons/top-1",
        "expectedOutput": "Resource: lessons ID: top-1",
        "isHidden": true
      },
      {
        "id": "js-exp-1-tc-9",
        "input": "/home",
        "expectedOutput": "ROUTE NOT MATCHED",
        "isHidden": true
      },
      {
        "id": "js-exp-1-tc-10",
        "input": "/api/v1/profile/me",
        "expectedOutput": "Resource: profile ID: me",
        "isHidden": true
      }
    ]
  },
  {
    "id": "js-exp-2",
    "languageId": "javascript",
    "language": "javascript",
    "level": "advanced",
    "topicId": "js-express-rest-and-jwt",
    "title": "Express Middleware Pipeline Simulation",
    "slug": "express-middleware-pipeline-simulation",
    "difficulty": "medium",
    "problemStatement": "Simulate Express middleware pipeline (req, res, next): Middlewares m1 (logs \"M1\"), m2 (logs \"M2\"), and handler (logs \"HANDLER\"). If a middleware calls next(err), pipeline jumps to error handler (logs \"ERROR: <err>\"). Given errFlag (0 for no error, string for error), print pipeline execution log.",
    "description": "Simulate Express middleware pipeline (req, res, next): Middlewares m1 (logs \"M1\"), m2 (logs \"M2\"), and handler (logs \"HANDLER\"). If a middleware calls next(err), pipeline jumps to error handler (logs \"ERROR: <err>\"). Given errFlag (0 for no error, string for error), print pipeline execution log.",
    "inputFormat": "errFlag string (or \"0\" for none).",
    "outputFormat": "Print space-separated middleware log.",
    "constraints": [
      "Token <= 50 chars."
    ],
    "examples": [
      {
        "input": "0",
        "output": "M1 M2 HANDLER",
        "explanation": "Normal pipeline."
      },
      {
        "input": "Unauthorized",
        "output": "M1 ERROR: Unauthorized",
        "explanation": "m1 passed error."
      },
      {
        "input": "BadReq",
        "output": "M1 ERROR: BadReq",
        "explanation": "Error caught."
      }
    ],
    "starterCode": {
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\n\nmain();\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "js-exp-2-tc-1",
        "input": "0",
        "expectedOutput": "M1 M2 HANDLER",
        "isHidden": false
      },
      {
        "id": "js-exp-2-tc-2",
        "input": "Unauthorized",
        "expectedOutput": "M1 ERROR: Unauthorized",
        "isHidden": false
      },
      {
        "id": "js-exp-2-tc-3",
        "input": "BadReq",
        "expectedOutput": "M1 ERROR: BadReq",
        "isHidden": false
      },
      {
        "id": "js-exp-2-tc-4",
        "input": "Forbidden",
        "expectedOutput": "M1 ERROR: Forbidden",
        "isHidden": true
      },
      {
        "id": "js-exp-2-tc-5",
        "input": "0",
        "expectedOutput": "M1 M2 HANDLER",
        "isHidden": true
      },
      {
        "id": "js-exp-2-tc-6",
        "input": "Timeout",
        "expectedOutput": "M1 ERROR: Timeout",
        "isHidden": true
      },
      {
        "id": "js-exp-2-tc-7",
        "input": "0",
        "expectedOutput": "M1 M2 HANDLER",
        "isHidden": true
      },
      {
        "id": "js-exp-2-tc-8",
        "input": "DatabaseDown",
        "expectedOutput": "M1 ERROR: DatabaseDown",
        "isHidden": true
      },
      {
        "id": "js-exp-2-tc-9",
        "input": "InvalidToken",
        "expectedOutput": "M1 ERROR: InvalidToken",
        "isHidden": true
      },
      {
        "id": "js-exp-2-tc-10",
        "input": "0",
        "expectedOutput": "M1 M2 HANDLER",
        "isHidden": true
      }
    ]
  },
  {
    "id": "js-exp-3",
    "languageId": "javascript",
    "language": "javascript",
    "level": "advanced",
    "topicId": "js-express-rest-and-jwt",
    "title": "Authorization Bearer Token Validator",
    "slug": "authorization-bearer-token-validator",
    "difficulty": "medium",
    "problemStatement": "Extract and validate Authorization header: Must match format \"Bearer <token>\". If header starts with \"Bearer \" and token is non-empty, print \"AUTHORIZED: <token>\". Otherwise print \"UNAUTHORIZED: INVALID HEADER\".",
    "description": "Extract and validate Authorization header: Must match format \"Bearer <token>\". If header starts with \"Bearer \" and token is non-empty, print \"AUTHORIZED: <token>\". Otherwise print \"UNAUTHORIZED: INVALID HEADER\".",
    "inputFormat": "Authorization header string.",
    "outputFormat": "Print authorization result.",
    "constraints": [
      "Header string <= 200"
    ],
    "examples": [
      {
        "input": "Bearer eyJhbGciOi...",
        "output": "AUTHORIZED: eyJhbGciOi...",
        "explanation": "Valid bearer."
      },
      {
        "input": "Basic dXNlcjpwYXNz",
        "output": "UNAUTHORIZED: INVALID HEADER",
        "explanation": "Basic auth rejected."
      },
      {
        "input": "Bearer my-token-123",
        "output": "AUTHORIZED: my-token-123",
        "explanation": "Authorized."
      }
    ],
    "starterCode": {
      "javascript": "const fs = require('fs');\n\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\n\nmain();\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "js-exp-3-tc-1",
        "input": "Bearer eyJhbGciOi...",
        "expectedOutput": "AUTHORIZED: eyJhbGciOi...",
        "isHidden": false
      },
      {
        "id": "js-exp-3-tc-2",
        "input": "Basic dXNlcjpwYXNz",
        "expectedOutput": "UNAUTHORIZED: INVALID HEADER",
        "isHidden": false
      },
      {
        "id": "js-exp-3-tc-3",
        "input": "Bearer my-token-123",
        "expectedOutput": "AUTHORIZED: my-token-123",
        "isHidden": false
      },
      {
        "id": "js-exp-3-tc-4",
        "input": "Bearer secret-key",
        "expectedOutput": "AUTHORIZED: secret-key",
        "isHidden": true
      },
      {
        "id": "js-exp-3-tc-5",
        "input": "Token 12345",
        "expectedOutput": "UNAUTHORIZED: INVALID HEADER",
        "isHidden": true
      },
      {
        "id": "js-exp-3-tc-6",
        "input": "Bearer abc",
        "expectedOutput": "AUTHORIZED: abc",
        "isHidden": true
      },
      {
        "id": "js-exp-3-tc-7",
        "input": "Bearer",
        "expectedOutput": "UNAUTHORIZED: INVALID HEADER",
        "isHidden": true
      },
      {
        "id": "js-exp-3-tc-8",
        "input": "bearer lowercase",
        "expectedOutput": "UNAUTHORIZED: INVALID HEADER",
        "isHidden": true
      },
      {
        "id": "js-exp-3-tc-9",
        "input": "Bearer valid-jwt-token",
        "expectedOutput": "AUTHORIZED: valid-jwt-token",
        "isHidden": true
      },
      {
        "id": "js-exp-3-tc-10",
        "input": "None",
        "expectedOutput": "UNAUTHORIZED: INVALID HEADER",
        "isHidden": true
      }
    ]
  }
];
export default javascriptProblems;
