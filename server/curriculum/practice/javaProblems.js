export const javaProblems = [
  {
    "id": "java-var-1",
    "languageId": "java",
    "language": "java",
    "level": "beginner",
    "topicId": "java-variables-data-types",
    "title": "Calculate Simple Interest in Java",
    "slug": "calculate-simple-interest-in-java",
    "difficulty": "easy",
    "problemStatement": "Read principal P (double), rate R (double), and time T (double) from standard input. Calculate Simple Interest SI = (P * R * T) / 100. Print the result formatted to 2 decimal places using String.format(\"%.2f\", si).",
    "description": "Read principal P (double), rate R (double), and time T (double) from standard input. Calculate Simple Interest SI = (P * R * T) / 100. Print the result formatted to 2 decimal places using String.format(\"%.2f\", si).",
    "inputFormat": "Three space-separated numbers: P R T.",
    "outputFormat": "Print Simple Interest with 2 decimal places.",
    "constraints": [
      "1 <= P <= 10^7",
      "0.1 <= R <= 100",
      "1 <= T <= 50"
    ],
    "examples": [
      {
        "input": "1000 5 2",
        "output": "100.00",
        "explanation": "(1000 * 5 * 2) / 100 = 100.00"
      },
      {
        "input": "5000 7.5 3",
        "output": "1125.00",
        "explanation": "(5000 * 7.5 * 3) / 100 = 1125.00"
      },
      {
        "input": "2500 4.2 1.5",
        "output": "157.50",
        "explanation": "Decimal interest calculation."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-var-1-tc-1",
        "input": "1000 5 2",
        "expectedOutput": "100.00",
        "isHidden": false
      },
      {
        "id": "java-var-1-tc-2",
        "input": "5000 7.5 3",
        "expectedOutput": "1125.00",
        "isHidden": false
      },
      {
        "id": "java-var-1-tc-3",
        "input": "2500 4.2 1.5",
        "expectedOutput": "157.50",
        "isHidden": false
      },
      {
        "id": "java-var-1-tc-4",
        "input": "10000 10 5",
        "expectedOutput": "5000.00",
        "isHidden": true
      },
      {
        "id": "java-var-1-tc-5",
        "input": "1200 3.5 4",
        "expectedOutput": "168.00",
        "isHidden": true
      },
      {
        "id": "java-var-1-tc-6",
        "input": "8000 6 2.5",
        "expectedOutput": "1200.00",
        "isHidden": true
      },
      {
        "id": "java-var-1-tc-7",
        "input": "3000 8.25 2",
        "expectedOutput": "495.00",
        "isHidden": true
      },
      {
        "id": "java-var-1-tc-8",
        "input": "15000 5.5 10",
        "expectedOutput": "8250.00",
        "isHidden": true
      },
      {
        "id": "java-var-1-tc-9",
        "input": "750 12 3",
        "expectedOutput": "270.00",
        "isHidden": true
      },
      {
        "id": "java-var-1-tc-10",
        "input": "9999 1.5 1",
        "expectedOutput": "149.98",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-var-2",
    "languageId": "java",
    "language": "java",
    "level": "beginner",
    "topicId": "java-variables-data-types",
    "title": "Explicit Type Casting from Double to Integer",
    "slug": "explicit-type-casting-from-double-to-integer",
    "difficulty": "easy",
    "problemStatement": "Read a floating point number (double) D. Truncate it to an integer using explicit type casting (int) and print both the original number and the casted integer in format \"Original: <D> Casted: <(int)D>\".",
    "description": "Read a floating point number (double) D. Truncate it to an integer using explicit type casting (int) and print both the original number and the casted integer in format \"Original: <D> Casted: <(int)D>\".",
    "inputFormat": "A floating point number D.",
    "outputFormat": "Print \"Original: <D> Casted: <int>\".",
    "constraints": [
      "-10^6 <= D <= 10^6"
    ],
    "examples": [
      {
        "input": "15.75",
        "output": "Original: 15.75 Casted: 15",
        "explanation": "Fractional part truncated."
      },
      {
        "input": "-3.99",
        "output": "Original: -3.99 Casted: -3",
        "explanation": "Truncation towards zero."
      },
      {
        "input": "42.0",
        "output": "Original: 42.0 Casted: 42",
        "explanation": "Whole number float."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-var-2-tc-1",
        "input": "15.75",
        "expectedOutput": "Original: 15.75 Casted: 15",
        "isHidden": false
      },
      {
        "id": "java-var-2-tc-2",
        "input": "-3.99",
        "expectedOutput": "Original: -3.99 Casted: -3",
        "isHidden": false
      },
      {
        "id": "java-var-2-tc-3",
        "input": "42.0",
        "expectedOutput": "Original: 42.0 Casted: 42",
        "isHidden": false
      },
      {
        "id": "java-var-2-tc-4",
        "input": "0.0",
        "expectedOutput": "Original: 0.0 Casted: 0",
        "isHidden": true
      },
      {
        "id": "java-var-2-tc-5",
        "input": "99.999",
        "expectedOutput": "Original: 99.999 Casted: 99",
        "isHidden": true
      },
      {
        "id": "java-var-2-tc-6",
        "input": "-100.5",
        "expectedOutput": "Original: -100.5 Casted: -100",
        "isHidden": true
      },
      {
        "id": "java-var-2-tc-7",
        "input": "12345.67",
        "expectedOutput": "Original: 12345.67 Casted: 12345",
        "isHidden": true
      },
      {
        "id": "java-var-2-tc-8",
        "input": "1.23",
        "expectedOutput": "Original: 1.23 Casted: 1",
        "isHidden": true
      },
      {
        "id": "java-var-2-tc-9",
        "input": "-0.5",
        "expectedOutput": "Original: -0.5 Casted: 0",
        "isHidden": true
      },
      {
        "id": "java-var-2-tc-10",
        "input": "500.1",
        "expectedOutput": "Original: 500.1 Casted: 500",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-var-3",
    "languageId": "java",
    "language": "java",
    "level": "beginner",
    "topicId": "java-variables-data-types",
    "title": "Primitive Data Type Ranges and Overflow",
    "slug": "primitive-data-type-ranges-and-overflow",
    "difficulty": "medium",
    "problemStatement": "Given a 64-bit integer N (long in Java), check if it fits within 8-bit byte (-128 to 127), 16-bit short (-32768 to 32767), and 32-bit int (-2147483648 to 2147483647). Print the smallest fitting Java primitive type: \"byte\", \"short\", \"int\", or \"long\".",
    "description": "Given a 64-bit integer N (long in Java), check if it fits within 8-bit byte (-128 to 127), 16-bit short (-32768 to 32767), and 32-bit int (-2147483648 to 2147483647). Print the smallest fitting Java primitive type: \"byte\", \"short\", \"int\", or \"long\".",
    "inputFormat": "A 64-bit integer N.",
    "outputFormat": "Print the smallest type name.",
    "constraints": [
      "-9 * 10^18 <= N <= 9 * 10^18"
    ],
    "examples": [
      {
        "input": "100",
        "output": "byte",
        "explanation": "100 fits in byte."
      },
      {
        "input": "1000",
        "output": "short",
        "explanation": "1000 fits in short."
      },
      {
        "input": "100000",
        "output": "int",
        "explanation": "100000 fits in int."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-var-3-tc-1",
        "input": "100",
        "expectedOutput": "byte",
        "isHidden": false
      },
      {
        "id": "java-var-3-tc-2",
        "input": "1000",
        "expectedOutput": "short",
        "isHidden": false
      },
      {
        "id": "java-var-3-tc-3",
        "input": "100000",
        "expectedOutput": "int",
        "isHidden": false
      },
      {
        "id": "java-var-3-tc-4",
        "input": "-128",
        "expectedOutput": "byte",
        "isHidden": true
      },
      {
        "id": "java-var-3-tc-5",
        "input": "127",
        "expectedOutput": "byte",
        "isHidden": true
      },
      {
        "id": "java-var-3-tc-6",
        "input": "32767",
        "expectedOutput": "short",
        "isHidden": true
      },
      {
        "id": "java-var-3-tc-7",
        "input": "-32768",
        "expectedOutput": "short",
        "isHidden": true
      },
      {
        "id": "java-var-3-tc-8",
        "input": "2147483647",
        "expectedOutput": "int",
        "isHidden": true
      },
      {
        "id": "java-var-3-tc-9",
        "input": "3000000000",
        "expectedOutput": "long",
        "isHidden": true
      },
      {
        "id": "java-var-3-tc-10",
        "input": "-5000000000",
        "expectedOutput": "long",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-io-1",
    "languageId": "java",
    "language": "java",
    "level": "beginner",
    "topicId": "java-operators-and-io",
    "title": "Scanner Arithmetic and Modulo Division",
    "slug": "scanner-arithmetic-and-modulo-division",
    "difficulty": "easy",
    "problemStatement": "Read two positive integers A and B using Scanner. Print their sum, difference (A - B), product, quotient (A / B), and remainder (A % B) on separate lines.",
    "description": "Read two positive integers A and B using Scanner. Print their sum, difference (A - B), product, quotient (A / B), and remainder (A % B) on separate lines.",
    "inputFormat": "Two space-separated integers A and B.",
    "outputFormat": "Five lines with Sum, Diff, Prod, Quot, Rem values.",
    "constraints": [
      "1 <= A, B <= 10^5"
    ],
    "examples": [
      {
        "input": "10 3",
        "output": "13\n7\n30\n3\n1",
        "explanation": "10+3=13, 10-3=7, 10*3=30, 10/3=3, 10%3=1"
      },
      {
        "input": "20 5",
        "output": "25\n15\n100\n4\n0",
        "explanation": "Clean division."
      },
      {
        "input": "7 7",
        "output": "14\n0\n49\n1\n0",
        "explanation": "Equal numbers."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-io-1-tc-1",
        "input": "10 3",
        "expectedOutput": "13\n7\n30\n3\n1",
        "isHidden": false
      },
      {
        "id": "java-io-1-tc-2",
        "input": "20 5",
        "expectedOutput": "25\n15\n100\n4\n0",
        "isHidden": false
      },
      {
        "id": "java-io-1-tc-3",
        "input": "7 7",
        "expectedOutput": "14\n0\n49\n1\n0",
        "isHidden": false
      },
      {
        "id": "java-io-1-tc-4",
        "input": "15 4",
        "expectedOutput": "19\n11\n60\n3\n3",
        "isHidden": true
      },
      {
        "id": "java-io-1-tc-5",
        "input": "100 25",
        "expectedOutput": "125\n75\n2500\n4\n0",
        "isHidden": true
      },
      {
        "id": "java-io-1-tc-6",
        "input": "50 6",
        "expectedOutput": "56\n44\n300\n8\n2",
        "isHidden": true
      },
      {
        "id": "java-io-1-tc-7",
        "input": "1 1",
        "expectedOutput": "2\n0\n1\n1\n0",
        "isHidden": true
      },
      {
        "id": "java-io-1-tc-8",
        "input": "80 9",
        "expectedOutput": "89\n71\n720\n8\n8",
        "isHidden": true
      },
      {
        "id": "java-io-1-tc-9",
        "input": "45 10",
        "expectedOutput": "55\n35\n450\n4\n5",
        "isHidden": true
      },
      {
        "id": "java-io-1-tc-10",
        "input": "99 2",
        "expectedOutput": "101\n97\n198\n49\n1",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-io-2",
    "languageId": "java",
    "language": "java",
    "level": "beginner",
    "topicId": "java-operators-and-io",
    "title": "Area and Circumference of a Circle",
    "slug": "area-and-circumference-of-a-circle",
    "difficulty": "easy",
    "problemStatement": "Read radius R (double). Compute Area = Math.PI * R * R and Circumference = 2 * Math.PI * R. Print \"Area: <area> Circumference: <circumference>\" rounded to 2 decimal places.",
    "description": "Read radius R (double). Compute Area = Math.PI * R * R and Circumference = 2 * Math.PI * R. Print \"Area: <area> Circumference: <circumference>\" rounded to 2 decimal places.",
    "inputFormat": "A positive float/double R.",
    "outputFormat": "Print \"Area: <area> Circumference: <circumference>\".",
    "constraints": [
      "0.1 <= R <= 1000"
    ],
    "examples": [
      {
        "input": "5",
        "output": "Area: 78.54 Circumference: 31.42",
        "explanation": "Radius 5."
      },
      {
        "input": "1",
        "output": "Area: 3.14 Circumference: 6.28",
        "explanation": "Radius 1."
      },
      {
        "input": "10",
        "output": "Area: 314.16 Circumference: 62.83",
        "explanation": "Radius 10."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-io-2-tc-1",
        "input": "5",
        "expectedOutput": "Area: 78.54 Circumference: 31.42",
        "isHidden": false
      },
      {
        "id": "java-io-2-tc-2",
        "input": "1",
        "expectedOutput": "Area: 3.14 Circumference: 6.28",
        "isHidden": false
      },
      {
        "id": "java-io-2-tc-3",
        "input": "10",
        "expectedOutput": "Area: 314.16 Circumference: 62.83",
        "isHidden": false
      },
      {
        "id": "java-io-2-tc-4",
        "input": "2.5",
        "expectedOutput": "Area: 19.63 Circumference: 15.71",
        "isHidden": true
      },
      {
        "id": "java-io-2-tc-5",
        "input": "7",
        "expectedOutput": "Area: 153.94 Circumference: 43.98",
        "isHidden": true
      },
      {
        "id": "java-io-2-tc-6",
        "input": "12",
        "expectedOutput": "Area: 452.39 Circumference: 75.40",
        "isHidden": true
      },
      {
        "id": "java-io-2-tc-7",
        "input": "15",
        "expectedOutput": "Area: 706.86 Circumference: 94.25",
        "isHidden": true
      },
      {
        "id": "java-io-2-tc-8",
        "input": "0.5",
        "expectedOutput": "Area: 0.79 Circumference: 3.14",
        "isHidden": true
      },
      {
        "id": "java-io-2-tc-9",
        "input": "20",
        "expectedOutput": "Area: 1256.64 Circumference: 125.66",
        "isHidden": true
      },
      {
        "id": "java-io-2-tc-10",
        "input": "3.14",
        "expectedOutput": "Area: 30.97 Circumference: 19.73",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-io-3",
    "languageId": "java",
    "language": "java",
    "level": "beginner",
    "topicId": "java-operators-and-io",
    "title": "Currency Bill Denominations Breakdown",
    "slug": "currency-bill-denominations-breakdown",
    "difficulty": "medium",
    "problemStatement": "Given an integer cash amount A, find the minimum number of currency notes needed to make up the amount using denominations: 100, 50, 20, 10, 5, 1. Print space-separated counts for each denomination from largest to smallest.",
    "description": "Given an integer cash amount A, find the minimum number of currency notes needed to make up the amount using denominations: 100, 50, 20, 10, 5, 1. Print space-separated counts for each denomination from largest to smallest.",
    "inputFormat": "A non-negative integer A.",
    "outputFormat": "Print counts for 100 50 20 10 5 1 notes.",
    "constraints": [
      "0 <= A <= 10^7"
    ],
    "examples": [
      {
        "input": "388",
        "output": "3 1 1 1 1 3",
        "explanation": "3*100 + 1*50 + 1*20 + 1*10 + 1*5 + 3*1 = 388."
      },
      {
        "input": "100",
        "output": "1 0 0 0 0 0",
        "explanation": "Single 100 note."
      },
      {
        "input": "47",
        "output": "0 0 2 0 1 2",
        "explanation": "2*20 + 1*5 + 2*1 = 47."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-io-3-tc-1",
        "input": "388",
        "expectedOutput": "3 1 1 1 1 3",
        "isHidden": false
      },
      {
        "id": "java-io-3-tc-2",
        "input": "100",
        "expectedOutput": "1 0 0 0 0 0",
        "isHidden": false
      },
      {
        "id": "java-io-3-tc-3",
        "input": "47",
        "expectedOutput": "0 0 2 0 1 2",
        "isHidden": false
      },
      {
        "id": "java-io-3-tc-4",
        "input": "500",
        "expectedOutput": "5 0 0 0 0 0",
        "isHidden": true
      },
      {
        "id": "java-io-3-tc-5",
        "input": "85",
        "expectedOutput": "0 1 1 1 1 0",
        "isHidden": true
      },
      {
        "id": "java-io-3-tc-6",
        "input": "0",
        "expectedOutput": "0 0 0 0 0 0",
        "isHidden": true
      },
      {
        "id": "java-io-3-tc-7",
        "input": "123",
        "expectedOutput": "1 0 1 0 0 3",
        "isHidden": true
      },
      {
        "id": "java-io-3-tc-8",
        "input": "99",
        "expectedOutput": "0 1 2 0 1 4",
        "isHidden": true
      },
      {
        "id": "java-io-3-tc-9",
        "input": "15",
        "expectedOutput": "0 0 0 1 1 0",
        "isHidden": true
      },
      {
        "id": "java-io-3-tc-10",
        "input": "1000",
        "expectedOutput": "10 0 0 0 0 0",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-cond-1",
    "languageId": "java",
    "language": "java",
    "level": "beginner",
    "topicId": "java-conditionals-and-switch",
    "title": "Check Even or Odd in Java",
    "slug": "check-even-or-odd-in-java",
    "difficulty": "easy",
    "problemStatement": "Given an integer N, print \"EVEN\" if N is divisible by 2, or \"ODD\" if not.",
    "description": "Given an integer N, print \"EVEN\" if N is divisible by 2, or \"ODD\" if not.",
    "inputFormat": "A single integer N.",
    "outputFormat": "Print \"EVEN\" or \"ODD\".",
    "constraints": [
      "-10^9 <= N <= 10^9"
    ],
    "examples": [
      {
        "input": "4",
        "output": "EVEN",
        "explanation": "4 is even."
      },
      {
        "input": "7",
        "output": "ODD",
        "explanation": "7 is odd."
      },
      {
        "input": "0",
        "output": "EVEN",
        "explanation": "0 is even."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-cond-1-tc-1",
        "input": "4",
        "expectedOutput": "EVEN",
        "isHidden": false
      },
      {
        "id": "java-cond-1-tc-2",
        "input": "7",
        "expectedOutput": "ODD",
        "isHidden": false
      },
      {
        "id": "java-cond-1-tc-3",
        "input": "0",
        "expectedOutput": "EVEN",
        "isHidden": false
      },
      {
        "id": "java-cond-1-tc-4",
        "input": "-2",
        "expectedOutput": "EVEN",
        "isHidden": true
      },
      {
        "id": "java-cond-1-tc-5",
        "input": "-5",
        "expectedOutput": "ODD",
        "isHidden": true
      },
      {
        "id": "java-cond-1-tc-6",
        "input": "1000000",
        "expectedOutput": "EVEN",
        "isHidden": true
      },
      {
        "id": "java-cond-1-tc-7",
        "input": "999999",
        "expectedOutput": "ODD",
        "isHidden": true
      },
      {
        "id": "java-cond-1-tc-8",
        "input": "1",
        "expectedOutput": "ODD",
        "isHidden": true
      },
      {
        "id": "java-cond-1-tc-9",
        "input": "-1",
        "expectedOutput": "ODD",
        "isHidden": true
      },
      {
        "id": "java-cond-1-tc-10",
        "input": "42",
        "expectedOutput": "EVEN",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-cond-2",
    "languageId": "java",
    "language": "java",
    "level": "beginner",
    "topicId": "java-conditionals-and-switch",
    "title": "Largest of Three Integers",
    "slug": "largest-of-three-integers",
    "difficulty": "easy",
    "problemStatement": "Given three integers A, B, and C, find and print the largest value.",
    "description": "Given three integers A, B, and C, find and print the largest value.",
    "inputFormat": "Three space-separated integers A B C.",
    "outputFormat": "Print largest value.",
    "constraints": [
      "-10^9 <= A, B, C <= 10^9"
    ],
    "examples": [
      {
        "input": "10 20 15",
        "output": "20",
        "explanation": "20 is greatest."
      },
      {
        "input": "-1 -5 -2",
        "output": "-1",
        "explanation": "-1 is greatest."
      },
      {
        "input": "5 5 5",
        "output": "5",
        "explanation": "All equal."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-cond-2-tc-1",
        "input": "10 20 15",
        "expectedOutput": "20",
        "isHidden": false
      },
      {
        "id": "java-cond-2-tc-2",
        "input": "-1 -5 -2",
        "expectedOutput": "-1",
        "isHidden": false
      },
      {
        "id": "java-cond-2-tc-3",
        "input": "5 5 5",
        "expectedOutput": "5",
        "isHidden": false
      },
      {
        "id": "java-cond-2-tc-4",
        "input": "100 200 300",
        "expectedOutput": "300",
        "isHidden": true
      },
      {
        "id": "java-cond-2-tc-5",
        "input": "50 10 30",
        "expectedOutput": "50",
        "isHidden": true
      },
      {
        "id": "java-cond-2-tc-6",
        "input": "0 -10 10",
        "expectedOutput": "10",
        "isHidden": true
      },
      {
        "id": "java-cond-2-tc-7",
        "input": "42 42 10",
        "expectedOutput": "42",
        "isHidden": true
      },
      {
        "id": "java-cond-2-tc-8",
        "input": "7 14 21",
        "expectedOutput": "21",
        "isHidden": true
      },
      {
        "id": "java-cond-2-tc-9",
        "input": "-100 0 100",
        "expectedOutput": "100",
        "isHidden": true
      },
      {
        "id": "java-cond-2-tc-10",
        "input": "99 98 97",
        "expectedOutput": "99",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-cond-3",
    "languageId": "java",
    "language": "java",
    "level": "beginner",
    "topicId": "java-conditionals-and-switch",
    "title": "Day of Week Using Switch Expression",
    "slug": "day-of-week-using-switch-expression",
    "difficulty": "medium",
    "problemStatement": "Given day number D (1 to 7, where 1 is Monday and 7 is Sunday), output the day name using Java switch statement or expression: \"Monday\", \"Tuesday\", \"Wednesday\", \"Thursday\", \"Friday\", \"Saturday\", \"Sunday\". For any other number, print \"INVALID\".",
    "description": "Given day number D (1 to 7, where 1 is Monday and 7 is Sunday), output the day name using Java switch statement or expression: \"Monday\", \"Tuesday\", \"Wednesday\", \"Thursday\", \"Friday\", \"Saturday\", \"Sunday\". For any other number, print \"INVALID\".",
    "inputFormat": "An integer D.",
    "outputFormat": "Print day name or \"INVALID\".",
    "constraints": [
      "-100 <= D <= 100"
    ],
    "examples": [
      {
        "input": "1",
        "output": "Monday",
        "explanation": "Day 1 is Monday."
      },
      {
        "input": "7",
        "output": "Sunday",
        "explanation": "Day 7 is Sunday."
      },
      {
        "input": "9",
        "output": "INVALID",
        "explanation": "Out of range."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-cond-3-tc-1",
        "input": "1",
        "expectedOutput": "Monday",
        "isHidden": false
      },
      {
        "id": "java-cond-3-tc-2",
        "input": "7",
        "expectedOutput": "Sunday",
        "isHidden": false
      },
      {
        "id": "java-cond-3-tc-3",
        "input": "9",
        "expectedOutput": "INVALID",
        "isHidden": false
      },
      {
        "id": "java-cond-3-tc-4",
        "input": "2",
        "expectedOutput": "Tuesday",
        "isHidden": true
      },
      {
        "id": "java-cond-3-tc-5",
        "input": "3",
        "expectedOutput": "Wednesday",
        "isHidden": true
      },
      {
        "id": "java-cond-3-tc-6",
        "input": "4",
        "expectedOutput": "Thursday",
        "isHidden": true
      },
      {
        "id": "java-cond-3-tc-7",
        "input": "5",
        "expectedOutput": "Friday",
        "isHidden": true
      },
      {
        "id": "java-cond-3-tc-8",
        "input": "6",
        "expectedOutput": "Saturday",
        "isHidden": true
      },
      {
        "id": "java-cond-3-tc-9",
        "input": "0",
        "expectedOutput": "INVALID",
        "isHidden": true
      },
      {
        "id": "java-cond-3-tc-10",
        "input": "-1",
        "expectedOutput": "INVALID",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-cond-4",
    "languageId": "java",
    "language": "java",
    "level": "beginner",
    "topicId": "java-conditionals-and-switch",
    "title": "Student Grade Evaluator in Java",
    "slug": "student-grade-evaluator-in-java",
    "difficulty": "medium",
    "problemStatement": "Given percentage score P (0 to 100), determine letter grade: 90-100 -> \"A\", 80-89 -> \"B\", 70-79 -> \"C\", 60-69 -> \"D\", below 60 -> \"F\". Print grade.",
    "description": "Given percentage score P (0 to 100), determine letter grade: 90-100 -> \"A\", 80-89 -> \"B\", 70-79 -> \"C\", 60-69 -> \"D\", below 60 -> \"F\". Print grade.",
    "inputFormat": "An integer P.",
    "outputFormat": "Print letter grade.",
    "constraints": [
      "0 <= P <= 100"
    ],
    "examples": [
      {
        "input": "95",
        "output": "A",
        "explanation": "Score 95 gets A."
      },
      {
        "input": "72",
        "output": "C",
        "explanation": "Score 72 gets C."
      },
      {
        "input": "55",
        "output": "F",
        "explanation": "Score 55 gets F."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-cond-4-tc-1",
        "input": "95",
        "expectedOutput": "A",
        "isHidden": false
      },
      {
        "id": "java-cond-4-tc-2",
        "input": "72",
        "expectedOutput": "C",
        "isHidden": false
      },
      {
        "id": "java-cond-4-tc-3",
        "input": "55",
        "expectedOutput": "F",
        "isHidden": false
      },
      {
        "id": "java-cond-4-tc-4",
        "input": "100",
        "expectedOutput": "A",
        "isHidden": true
      },
      {
        "id": "java-cond-4-tc-5",
        "input": "90",
        "expectedOutput": "A",
        "isHidden": true
      },
      {
        "id": "java-cond-4-tc-6",
        "input": "89",
        "expectedOutput": "B",
        "isHidden": true
      },
      {
        "id": "java-cond-4-tc-7",
        "input": "80",
        "expectedOutput": "B",
        "isHidden": true
      },
      {
        "id": "java-cond-4-tc-8",
        "input": "65",
        "expectedOutput": "D",
        "isHidden": true
      },
      {
        "id": "java-cond-4-tc-9",
        "input": "60",
        "expectedOutput": "D",
        "isHidden": true
      },
      {
        "id": "java-cond-4-tc-10",
        "input": "0",
        "expectedOutput": "F",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-loop-1",
    "languageId": "java",
    "language": "java",
    "level": "beginner",
    "topicId": "java-loops-and-flow-control",
    "title": "Generate a Multiplication Table Using Loops",
    "slug": "generate-a-multiplication-table-using-loops",
    "difficulty": "easy",
    "problemStatement": "Given an integer N, print multiplication table of N from 1 to 10 in format \"N x i = result\" on separate lines.",
    "description": "Given an integer N, print multiplication table of N from 1 to 10 in format \"N x i = result\" on separate lines.",
    "inputFormat": "An integer N.",
    "outputFormat": "10 lines formatted as \"N x i = result\".",
    "constraints": [
      "1 <= N <= 100"
    ],
    "examples": [
      {
        "input": "5",
        "output": "5 x 1 = 5\n5 x 2 = 10\n5 x 3 = 15\n5 x 4 = 20\n5 x 5 = 25\n5 x 6 = 30\n5 x 7 = 35\n5 x 8 = 40\n5 x 9 = 45\n5 x 10 = 50",
        "explanation": "Table of 5."
      },
      {
        "input": "2",
        "output": "2 x 1 = 2\n2 x 2 = 4\n2 x 3 = 6\n2 x 4 = 8\n2 x 5 = 10\n2 x 6 = 12\n2 x 7 = 14\n2 x 8 = 16\n2 x 9 = 18\n2 x 10 = 20",
        "explanation": "Table of 2."
      },
      {
        "input": "1",
        "output": "1 x 1 = 1\n1 x 2 = 2\n1 x 3 = 3\n1 x 4 = 4\n1 x 5 = 5\n1 x 6 = 6\n1 x 7 = 7\n1 x 8 = 8\n1 x 9 = 9\n1 x 10 = 10",
        "explanation": "Table of 1."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-loop-1-tc-1",
        "input": "5",
        "expectedOutput": "5 x 1 = 5\n5 x 2 = 10\n5 x 3 = 15\n5 x 4 = 20\n5 x 5 = 25\n5 x 6 = 30\n5 x 7 = 35\n5 x 8 = 40\n5 x 9 = 45\n5 x 10 = 50",
        "isHidden": false
      },
      {
        "id": "java-loop-1-tc-2",
        "input": "2",
        "expectedOutput": "2 x 1 = 2\n2 x 2 = 4\n2 x 3 = 6\n2 x 4 = 8\n2 x 5 = 10\n2 x 6 = 12\n2 x 7 = 14\n2 x 8 = 16\n2 x 9 = 18\n2 x 10 = 20",
        "isHidden": false
      },
      {
        "id": "java-loop-1-tc-3",
        "input": "1",
        "expectedOutput": "1 x 1 = 1\n1 x 2 = 2\n1 x 3 = 3\n1 x 4 = 4\n1 x 5 = 5\n1 x 6 = 6\n1 x 7 = 7\n1 x 8 = 8\n1 x 9 = 9\n1 x 10 = 10",
        "isHidden": false
      },
      {
        "id": "java-loop-1-tc-4",
        "input": "3",
        "expectedOutput": "3 x 1 = 3\n3 x 2 = 6\n3 x 3 = 9\n3 x 4 = 12\n3 x 5 = 15\n3 x 6 = 18\n3 x 7 = 21\n3 x 8 = 24\n3 x 9 = 27\n3 x 10 = 30",
        "isHidden": true
      },
      {
        "id": "java-loop-1-tc-5",
        "input": "4",
        "expectedOutput": "4 x 1 = 4\n4 x 2 = 8\n4 x 3 = 12\n4 x 4 = 16\n4 x 5 = 20\n4 x 6 = 24\n4 x 7 = 28\n4 x 8 = 32\n4 x 9 = 36\n4 x 10 = 40",
        "isHidden": true
      },
      {
        "id": "java-loop-1-tc-6",
        "input": "7",
        "expectedOutput": "7 x 1 = 7\n7 x 2 = 14\n7 x 3 = 21\n7 x 4 = 28\n7 x 5 = 35\n7 x 6 = 42\n7 x 7 = 49\n7 x 8 = 56\n7 x 9 = 63\n7 x 10 = 70",
        "isHidden": true
      },
      {
        "id": "java-loop-1-tc-7",
        "input": "8",
        "expectedOutput": "8 x 1 = 8\n8 x 2 = 16\n8 x 3 = 24\n8 x 4 = 32\n8 x 5 = 40\n8 x 6 = 48\n8 x 7 = 56\n8 x 8 = 64\n8 x 9 = 72\n8 x 10 = 80",
        "isHidden": true
      },
      {
        "id": "java-loop-1-tc-8",
        "input": "9",
        "expectedOutput": "9 x 1 = 9\n9 x 2 = 18\n9 x 3 = 27\n9 x 4 = 36\n9 x 5 = 45\n9 x 6 = 54\n9 x 7 = 63\n9 x 8 = 72\n9 x 9 = 81\n9 x 10 = 90",
        "isHidden": true
      },
      {
        "id": "java-loop-1-tc-9",
        "input": "10",
        "expectedOutput": "10 x 1 = 10\n10 x 2 = 20\n10 x 3 = 30\n10 x 4 = 40\n10 x 5 = 50\n10 x 6 = 60\n10 x 7 = 70\n10 x 8 = 80\n10 x 9 = 90\n10 x 10 = 100",
        "isHidden": true
      },
      {
        "id": "java-loop-1-tc-10",
        "input": "12",
        "expectedOutput": "12 x 1 = 12\n12 x 2 = 24\n12 x 3 = 36\n12 x 4 = 48\n12 x 5 = 60\n12 x 6 = 72\n12 x 7 = 84\n12 x 8 = 96\n12 x 9 = 108\n12 x 10 = 120",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-loop-2",
    "languageId": "java",
    "language": "java",
    "level": "beginner",
    "topicId": "java-loops-and-flow-control",
    "title": "Sum of Natural Numbers up to N",
    "slug": "sum-of-natural-numbers-up-to-n",
    "difficulty": "easy",
    "problemStatement": "Given positive integer N, calculate sum 1 + 2 + ... + N using a loop. Print the sum.",
    "description": "Given positive integer N, calculate sum 1 + 2 + ... + N using a loop. Print the sum.",
    "inputFormat": "An integer N.",
    "outputFormat": "Print the sum.",
    "constraints": [
      "1 <= N <= 10^6"
    ],
    "examples": [
      {
        "input": "5",
        "output": "15",
        "explanation": "1+2+3+4+5=15."
      },
      {
        "input": "10",
        "output": "55",
        "explanation": "Sum of first 10."
      },
      {
        "input": "1",
        "output": "1",
        "explanation": "Single term."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-loop-2-tc-1",
        "input": "5",
        "expectedOutput": "15",
        "isHidden": false
      },
      {
        "id": "java-loop-2-tc-2",
        "input": "10",
        "expectedOutput": "55",
        "isHidden": false
      },
      {
        "id": "java-loop-2-tc-3",
        "input": "1",
        "expectedOutput": "1",
        "isHidden": false
      },
      {
        "id": "java-loop-2-tc-4",
        "input": "20",
        "expectedOutput": "210",
        "isHidden": true
      },
      {
        "id": "java-loop-2-tc-5",
        "input": "100",
        "expectedOutput": "5050",
        "isHidden": true
      },
      {
        "id": "java-loop-2-tc-6",
        "input": "50",
        "expectedOutput": "1275",
        "isHidden": true
      },
      {
        "id": "java-loop-2-tc-7",
        "input": "3",
        "expectedOutput": "6",
        "isHidden": true
      },
      {
        "id": "java-loop-2-tc-8",
        "input": "7",
        "expectedOutput": "28",
        "isHidden": true
      },
      {
        "id": "java-loop-2-tc-9",
        "input": "12",
        "expectedOutput": "78",
        "isHidden": true
      },
      {
        "id": "java-loop-2-tc-10",
        "input": "1000",
        "expectedOutput": "500500",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-loop-3",
    "languageId": "java",
    "language": "java",
    "level": "beginner",
    "topicId": "java-loops-and-flow-control",
    "title": "Sum of Digits of an Integer",
    "slug": "sum-of-digits-of-an-integer",
    "difficulty": "medium",
    "problemStatement": "Given an integer N, compute the sum of its digits using a while loop. (e.g. 1234 -> 1+2+3+4 = 10).",
    "description": "Given an integer N, compute the sum of its digits using a while loop. (e.g. 1234 -> 1+2+3+4 = 10).",
    "inputFormat": "An integer N.",
    "outputFormat": "Print sum of digits.",
    "constraints": [
      "-10^9 <= N <= 10^9"
    ],
    "examples": [
      {
        "input": "1234",
        "output": "10",
        "explanation": "1+2+3+4 = 10."
      },
      {
        "input": "-567",
        "output": "18",
        "explanation": "5+6+7 = 18."
      },
      {
        "input": "0",
        "output": "0",
        "explanation": "Sum of 0 is 0."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-loop-3-tc-1",
        "input": "1234",
        "expectedOutput": "10",
        "isHidden": false
      },
      {
        "id": "java-loop-3-tc-2",
        "input": "-567",
        "expectedOutput": "18",
        "isHidden": false
      },
      {
        "id": "java-loop-3-tc-3",
        "input": "0",
        "expectedOutput": "0",
        "isHidden": false
      },
      {
        "id": "java-loop-3-tc-4",
        "input": "999",
        "expectedOutput": "27",
        "isHidden": true
      },
      {
        "id": "java-loop-3-tc-5",
        "input": "1000000",
        "expectedOutput": "1",
        "isHidden": true
      },
      {
        "id": "java-loop-3-tc-6",
        "input": "456",
        "expectedOutput": "15",
        "isHidden": true
      },
      {
        "id": "java-loop-3-tc-7",
        "input": "7",
        "expectedOutput": "7",
        "isHidden": true
      },
      {
        "id": "java-loop-3-tc-8",
        "input": "-99",
        "expectedOutput": "18",
        "isHidden": true
      },
      {
        "id": "java-loop-3-tc-9",
        "input": "123456789",
        "expectedOutput": "45",
        "isHidden": true
      },
      {
        "id": "java-loop-3-tc-10",
        "input": "50505",
        "expectedOutput": "15",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-loop-4",
    "languageId": "java",
    "language": "java",
    "level": "beginner",
    "topicId": "java-loops-and-flow-control",
    "title": "Reverse an Integer and Check Palindrome",
    "slug": "reverse-an-integer-and-check-palindrome",
    "difficulty": "medium",
    "problemStatement": "Given positive integer N, reverse its digits. If reversed equals original, print \"PALINDROME <reversed>\". Else print \"NOT PALINDROME <reversed>\".",
    "description": "Given positive integer N, reverse its digits. If reversed equals original, print \"PALINDROME <reversed>\". Else print \"NOT PALINDROME <reversed>\".",
    "inputFormat": "A positive integer N.",
    "outputFormat": "Print palindrome status and reversed number.",
    "constraints": [
      "1 <= N <= 10^9"
    ],
    "examples": [
      {
        "input": "121",
        "output": "PALINDROME 121",
        "explanation": "121 reversed is 121."
      },
      {
        "input": "123",
        "output": "NOT PALINDROME 321",
        "explanation": "Reversed is 321."
      },
      {
        "input": "10",
        "output": "NOT PALINDROME 1",
        "explanation": "Trailing 0 dropped."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-loop-4-tc-1",
        "input": "121",
        "expectedOutput": "PALINDROME 121",
        "isHidden": false
      },
      {
        "id": "java-loop-4-tc-2",
        "input": "123",
        "expectedOutput": "NOT PALINDROME 321",
        "isHidden": false
      },
      {
        "id": "java-loop-4-tc-3",
        "input": "10",
        "expectedOutput": "NOT PALINDROME 1",
        "isHidden": false
      },
      {
        "id": "java-loop-4-tc-4",
        "input": "1221",
        "expectedOutput": "PALINDROME 1221",
        "isHidden": true
      },
      {
        "id": "java-loop-4-tc-5",
        "input": "7",
        "expectedOutput": "PALINDROME 7",
        "isHidden": true
      },
      {
        "id": "java-loop-4-tc-6",
        "input": "100",
        "expectedOutput": "NOT PALINDROME 1",
        "isHidden": true
      },
      {
        "id": "java-loop-4-tc-7",
        "input": "12321",
        "expectedOutput": "PALINDROME 12321",
        "isHidden": true
      },
      {
        "id": "java-loop-4-tc-8",
        "input": "4567",
        "expectedOutput": "NOT PALINDROME 7654",
        "isHidden": true
      },
      {
        "id": "java-loop-4-tc-9",
        "input": "9009",
        "expectedOutput": "PALINDROME 9009",
        "isHidden": true
      },
      {
        "id": "java-loop-4-tc-10",
        "input": "505",
        "expectedOutput": "PALINDROME 505",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-loop-5",
    "languageId": "java",
    "language": "java",
    "level": "beginner",
    "topicId": "java-loops-and-flow-control",
    "title": "Fibonacci Series up to N Terms",
    "slug": "fibonacci-series-up-to-n-terms",
    "difficulty": "medium",
    "problemStatement": "Print the first N terms of the Fibonacci sequence starting with 0 and 1, separated by spaces.",
    "description": "Print the first N terms of the Fibonacci sequence starting with 0 and 1, separated by spaces.",
    "inputFormat": "A positive integer N.",
    "outputFormat": "Print space-separated Fibonacci terms.",
    "constraints": [
      "1 <= N <= 30"
    ],
    "examples": [
      {
        "input": "5",
        "output": "0 1 1 2 3",
        "explanation": "First 5 terms."
      },
      {
        "input": "1",
        "output": "0",
        "explanation": "First term."
      },
      {
        "input": "7",
        "output": "0 1 1 2 3 5 8",
        "explanation": "First 7 terms."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-loop-5-tc-1",
        "input": "5",
        "expectedOutput": "0 1 1 2 3",
        "isHidden": false
      },
      {
        "id": "java-loop-5-tc-2",
        "input": "1",
        "expectedOutput": "0",
        "isHidden": false
      },
      {
        "id": "java-loop-5-tc-3",
        "input": "7",
        "expectedOutput": "0 1 1 2 3 5 8",
        "isHidden": false
      },
      {
        "id": "java-loop-5-tc-4",
        "input": "2",
        "expectedOutput": "0 1",
        "isHidden": true
      },
      {
        "id": "java-loop-5-tc-5",
        "input": "3",
        "expectedOutput": "0 1 1",
        "isHidden": true
      },
      {
        "id": "java-loop-5-tc-6",
        "input": "4",
        "expectedOutput": "0 1 1 2",
        "isHidden": true
      },
      {
        "id": "java-loop-5-tc-7",
        "input": "6",
        "expectedOutput": "0 1 1 2 3 5",
        "isHidden": true
      },
      {
        "id": "java-loop-5-tc-8",
        "input": "8",
        "expectedOutput": "0 1 1 2 3 5 8 13",
        "isHidden": true
      },
      {
        "id": "java-loop-5-tc-9",
        "input": "10",
        "expectedOutput": "0 1 1 2 3 5 8 13 21 34",
        "isHidden": true
      },
      {
        "id": "java-loop-5-tc-10",
        "input": "12",
        "expectedOutput": "0 1 1 2 3 5 8 13 21 34 55 89",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-arr-1",
    "languageId": "java",
    "language": "java",
    "level": "beginner",
    "topicId": "java-arrays",
    "title": "Find Maximum and Minimum Element in Array",
    "slug": "find-maximum-and-minimum-element-in-array",
    "difficulty": "easy",
    "problemStatement": "Given N integers in an array, find and print the maximum and minimum elements in format \"Max: <max> Min: <min>\".",
    "description": "Given N integers in an array, find and print the maximum and minimum elements in format \"Max: <max> Min: <min>\".",
    "inputFormat": "First line N, second line N space-separated integers.",
    "outputFormat": "Print \"Max: <max> Min: <min>\".",
    "constraints": [
      "1 <= N <= 10^5"
    ],
    "examples": [
      {
        "input": "5\n1 5 3 9 2",
        "output": "Max: 9 Min: 1",
        "explanation": "9 is max, 1 is min."
      },
      {
        "input": "3\n-5 -2 -10",
        "output": "Max: -2 Min: -10",
        "explanation": "Negatives handled."
      },
      {
        "input": "1\n100",
        "output": "Max: 100 Min: 100",
        "explanation": "Single element."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-arr-1-tc-1",
        "input": "5\n1 5 3 9 2",
        "expectedOutput": "Max: 9 Min: 1",
        "isHidden": false
      },
      {
        "id": "java-arr-1-tc-2",
        "input": "3\n-5 -2 -10",
        "expectedOutput": "Max: -2 Min: -10",
        "isHidden": false
      },
      {
        "id": "java-arr-1-tc-3",
        "input": "1\n100",
        "expectedOutput": "Max: 100 Min: 100",
        "isHidden": false
      },
      {
        "id": "java-arr-1-tc-4",
        "input": "4\n10 20 30 40",
        "expectedOutput": "Max: 40 Min: 10",
        "isHidden": true
      },
      {
        "id": "java-arr-1-tc-5",
        "input": "5\n0 0 0 0 0",
        "expectedOutput": "Max: 0 Min: 0",
        "isHidden": true
      },
      {
        "id": "java-arr-1-tc-6",
        "input": "6\n-10 50 -30 20 100 -5",
        "expectedOutput": "Max: 100 Min: -30",
        "isHidden": true
      },
      {
        "id": "java-arr-1-tc-7",
        "input": "4\n99 12 85 43",
        "expectedOutput": "Max: 99 Min: 12",
        "isHidden": true
      },
      {
        "id": "java-arr-1-tc-8",
        "input": "5\n7 7 7 7 8",
        "expectedOutput": "Max: 8 Min: 7",
        "isHidden": true
      },
      {
        "id": "java-arr-1-tc-9",
        "input": "3\n-1000 0 1000",
        "expectedOutput": "Max: 1000 Min: -1000",
        "isHidden": true
      },
      {
        "id": "java-arr-1-tc-10",
        "input": "5\n4 2 8 6 1",
        "expectedOutput": "Max: 8 Min: 1",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-arr-2",
    "languageId": "java",
    "language": "java",
    "level": "beginner",
    "topicId": "java-arrays",
    "title": "Sum and Average of Array Elements",
    "slug": "sum-and-average-of-array-elements",
    "difficulty": "easy",
    "problemStatement": "Given N integers, calculate their sum and average. Print \"Sum: <sum> Avg: <avg>\" with average formatted to 2 decimal places.",
    "description": "Given N integers, calculate their sum and average. Print \"Sum: <sum> Avg: <avg>\" with average formatted to 2 decimal places.",
    "inputFormat": "First line N, second line N integers.",
    "outputFormat": "Print \"Sum: <sum> Avg: <avg>\".",
    "constraints": [
      "1 <= N <= 10^5"
    ],
    "examples": [
      {
        "input": "4\n1 2 3 4",
        "output": "Sum: 10 Avg: 2.50",
        "explanation": "Sum 10, avg 2.5."
      },
      {
        "input": "3\n10 20 30",
        "output": "Sum: 60 Avg: 20.00",
        "explanation": "Average 20."
      },
      {
        "input": "1\n50",
        "output": "Sum: 50 Avg: 50.00",
        "explanation": "Single element."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-arr-2-tc-1",
        "input": "4\n1 2 3 4",
        "expectedOutput": "Sum: 10 Avg: 2.50",
        "isHidden": false
      },
      {
        "id": "java-arr-2-tc-2",
        "input": "3\n10 20 30",
        "expectedOutput": "Sum: 60 Avg: 20.00",
        "isHidden": false
      },
      {
        "id": "java-arr-2-tc-3",
        "input": "1\n50",
        "expectedOutput": "Sum: 50 Avg: 50.00",
        "isHidden": false
      },
      {
        "id": "java-arr-2-tc-4",
        "input": "5\n5 5 5 5 5",
        "expectedOutput": "Sum: 25 Avg: 5.00",
        "isHidden": true
      },
      {
        "id": "java-arr-2-tc-5",
        "input": "4\n-10 10 -20 20",
        "expectedOutput": "Sum: 0 Avg: 0.00",
        "isHidden": true
      },
      {
        "id": "java-arr-2-tc-6",
        "input": "5\n10 15 20 25 30",
        "expectedOutput": "Sum: 100 Avg: 20.00",
        "isHidden": true
      },
      {
        "id": "java-arr-2-tc-7",
        "input": "3\n7 8 9",
        "expectedOutput": "Sum: 24 Avg: 8.00",
        "isHidden": true
      },
      {
        "id": "java-arr-2-tc-8",
        "input": "5\n1 3 5 7 9",
        "expectedOutput": "Sum: 25 Avg: 5.00",
        "isHidden": true
      },
      {
        "id": "java-arr-2-tc-9",
        "input": "2\n100 200",
        "expectedOutput": "Sum: 300 Avg: 150.00",
        "isHidden": true
      },
      {
        "id": "java-arr-2-tc-10",
        "input": "6\n2 4 6 8 10 12",
        "expectedOutput": "Sum: 42 Avg: 7.00",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-arr-3",
    "languageId": "java",
    "language": "java",
    "level": "beginner",
    "topicId": "java-arrays",
    "title": "Reverse an Array In-Place",
    "slug": "reverse-an-array-in-place",
    "difficulty": "medium",
    "problemStatement": "Given N integers, reverse the array in place using two pointers. Print the reversed array space-separated.",
    "description": "Given N integers, reverse the array in place using two pointers. Print the reversed array space-separated.",
    "inputFormat": "First line N, second line N space-separated integers.",
    "outputFormat": "Print space-separated reversed integers.",
    "constraints": [
      "1 <= N <= 10^5"
    ],
    "examples": [
      {
        "input": "4\n1 2 3 4",
        "output": "4 3 2 1",
        "explanation": "Reversed."
      },
      {
        "input": "3\n10 20 30",
        "output": "30 20 10",
        "explanation": "Reversed."
      },
      {
        "input": "1\n5",
        "output": "5",
        "explanation": "Single element."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-arr-3-tc-1",
        "input": "4\n1 2 3 4",
        "expectedOutput": "4 3 2 1",
        "isHidden": false
      },
      {
        "id": "java-arr-3-tc-2",
        "input": "3\n10 20 30",
        "expectedOutput": "30 20 10",
        "isHidden": false
      },
      {
        "id": "java-arr-3-tc-3",
        "input": "1\n5",
        "expectedOutput": "5",
        "isHidden": false
      },
      {
        "id": "java-arr-3-tc-4",
        "input": "5\n1 2 3 4 5",
        "expectedOutput": "5 4 3 2 1",
        "isHidden": true
      },
      {
        "id": "java-arr-3-tc-5",
        "input": "2\n8 9",
        "expectedOutput": "8 9",
        "isHidden": true
      },
      {
        "id": "java-arr-3-tc-6",
        "input": "6\n10 20 30 40 50 60",
        "expectedOutput": "60 50 40 30 20 10",
        "isHidden": true
      },
      {
        "id": "java-arr-3-tc-7",
        "input": "5\n7 7 7 7 7",
        "expectedOutput": "7 7 7 7 7",
        "isHidden": true
      },
      {
        "id": "java-arr-3-tc-8",
        "input": "4\n-1 0 1 2",
        "expectedOutput": "2 1 0 -1",
        "isHidden": true
      },
      {
        "id": "java-arr-3-tc-9",
        "input": "3\n100 200 300",
        "expectedOutput": "300 200 100",
        "isHidden": true
      },
      {
        "id": "java-arr-3-tc-10",
        "input": "5\n2 4 6 8 10",
        "expectedOutput": "10 8 6 4 2",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-arr-4",
    "languageId": "java",
    "language": "java",
    "level": "beginner",
    "topicId": "java-arrays",
    "title": "Matrix Diagonal Sum",
    "slug": "matrix-diagonal-sum",
    "difficulty": "medium",
    "problemStatement": "Given an N x N square matrix, calculate the sum of the primary diagonal elements (mat[i][i]) and secondary diagonal elements (mat[i][N - 1 - i]). Print \"Primary: <pSum> Secondary: <sSum>\".",
    "description": "Given an N x N square matrix, calculate the sum of the primary diagonal elements (mat[i][i]) and secondary diagonal elements (mat[i][N - 1 - i]). Print \"Primary: <pSum> Secondary: <sSum>\".",
    "inputFormat": "First line N, next N lines each contain N integers.",
    "outputFormat": "Print \"Primary: <pSum> Secondary: <sSum>\".",
    "constraints": [
      "1 <= N <= 100"
    ],
    "examples": [
      {
        "input": "3\n1 2 3\n4 5 6\n7 8 9",
        "output": "Primary: 15 Secondary: 15",
        "explanation": "1+5+9 = 15, 3+5+7 = 15."
      },
      {
        "input": "2\n1 2\n3 4",
        "output": "Primary: 5 Secondary: 5",
        "explanation": "1+4 = 5, 2+3 = 5."
      },
      {
        "input": "1\n42",
        "output": "Primary: 42 Secondary: 42",
        "explanation": "1x1 matrix."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-arr-4-tc-1",
        "input": "3\n1 2 3\n4 5 6\n7 8 9",
        "expectedOutput": "Primary: 15 Secondary: 15",
        "isHidden": false
      },
      {
        "id": "java-arr-4-tc-2",
        "input": "2\n1 2\n3 4",
        "expectedOutput": "Primary: 5 Secondary: 5",
        "isHidden": false
      },
      {
        "id": "java-arr-4-tc-3",
        "input": "1\n42",
        "expectedOutput": "Primary: 42 Secondary: 42",
        "isHidden": false
      },
      {
        "id": "java-arr-4-tc-4",
        "input": "3\n2 0 0\n0 3 0\n0 0 4",
        "expectedOutput": "Primary: 9 Secondary: 4",
        "isHidden": true
      },
      {
        "id": "java-arr-4-tc-5",
        "input": "2\n10 20\n30 40",
        "expectedOutput": "Primary: 50 Secondary: 50",
        "isHidden": true
      },
      {
        "id": "java-arr-4-tc-6",
        "input": "3\n5 1 2\n3 5 4\n6 7 5",
        "expectedOutput": "Primary: 15 Secondary: 13",
        "isHidden": true
      },
      {
        "id": "java-arr-4-tc-7",
        "input": "4\n1 0 0 1\n0 1 1 0\n0 1 1 0\n1 0 0 1",
        "expectedOutput": "Primary: 4 Secondary: 4",
        "isHidden": true
      },
      {
        "id": "java-arr-4-tc-8",
        "input": "2\n-1 -2\n-3 -4",
        "expectedOutput": "Primary: -5 Secondary: -5",
        "isHidden": true
      },
      {
        "id": "java-arr-4-tc-9",
        "input": "3\n10 0 10\n0 10 0\n10 0 10",
        "expectedOutput": "Primary: 30 Secondary: 30",
        "isHidden": true
      },
      {
        "id": "java-arr-4-tc-10",
        "input": "4\n1 2 3 4\n5 6 7 8\n9 1 2 3\n4 5 6 7",
        "expectedOutput": "Primary: 16 Secondary: 20",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-str-1",
    "languageId": "java",
    "language": "java",
    "level": "beginner",
    "topicId": "java-strings-and-stringbuilder",
    "title": "Count Vowels in a String",
    "slug": "count-vowels-in-a-string",
    "difficulty": "easy",
    "problemStatement": "Read a line of text. Count the number of vowels (A, E, I, O, U, case-insensitive). Print the vowel count.",
    "description": "Read a line of text. Count the number of vowels (A, E, I, O, U, case-insensitive). Print the vowel count.",
    "inputFormat": "A string S.",
    "outputFormat": "Print integer count of vowels.",
    "constraints": [
      "1 <= len(S) <= 10^5"
    ],
    "examples": [
      {
        "input": "Hello World",
        "output": "3",
        "explanation": "e, o, o are 3 vowels."
      },
      {
        "input": "Java",
        "output": "2",
        "explanation": "a, a are 2 vowels."
      },
      {
        "input": "xyz",
        "output": "0",
        "explanation": "No vowels."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-str-1-tc-1",
        "input": "Hello World",
        "expectedOutput": "3",
        "isHidden": false
      },
      {
        "id": "java-str-1-tc-2",
        "input": "Java",
        "expectedOutput": "2",
        "isHidden": false
      },
      {
        "id": "java-str-1-tc-3",
        "input": "xyz",
        "expectedOutput": "0",
        "isHidden": false
      },
      {
        "id": "java-str-1-tc-4",
        "input": "aeiou",
        "expectedOutput": "5",
        "isHidden": true
      },
      {
        "id": "java-str-1-tc-5",
        "input": "AEIOU",
        "expectedOutput": "5",
        "isHidden": true
      },
      {
        "id": "java-str-1-tc-6",
        "input": "Antigravity",
        "expectedOutput": "4",
        "isHidden": true
      },
      {
        "id": "java-str-1-tc-7",
        "input": "Programming in Java",
        "expectedOutput": "6",
        "isHidden": true
      },
      {
        "id": "java-str-1-tc-8",
        "input": "Quick brown fox",
        "expectedOutput": "4",
        "isHidden": true
      },
      {
        "id": "java-str-1-tc-9",
        "input": "a",
        "expectedOutput": "1",
        "isHidden": true
      },
      {
        "id": "java-str-1-tc-10",
        "input": "bcdfg",
        "expectedOutput": "0",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-str-2",
    "languageId": "java",
    "language": "java",
    "level": "beginner",
    "topicId": "java-strings-and-stringbuilder",
    "title": "Check Palindrome String with StringBuilder",
    "slug": "check-palindrome-string-with-stringbuilder",
    "difficulty": "easy",
    "problemStatement": "Given a word S, check if it is a palindrome using StringBuilder.reverse(). Case-insensitive. Print \"PALINDROME\" or \"NOT PALINDROME\".",
    "description": "Given a word S, check if it is a palindrome using StringBuilder.reverse(). Case-insensitive. Print \"PALINDROME\" or \"NOT PALINDROME\".",
    "inputFormat": "A single word S.",
    "outputFormat": "Print \"PALINDROME\" or \"NOT PALINDROME\".",
    "constraints": [
      "1 <= len(S) <= 10^4"
    ],
    "examples": [
      {
        "input": "madam",
        "output": "PALINDROME",
        "explanation": "madam is palindrome."
      },
      {
        "input": "Java",
        "output": "NOT PALINDROME",
        "explanation": "Java is not palindrome."
      },
      {
        "input": "RaceCar",
        "output": "PALINDROME",
        "explanation": "Case-insensitive."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-str-2-tc-1",
        "input": "madam",
        "expectedOutput": "PALINDROME",
        "isHidden": false
      },
      {
        "id": "java-str-2-tc-2",
        "input": "Java",
        "expectedOutput": "NOT PALINDROME",
        "isHidden": false
      },
      {
        "id": "java-str-2-tc-3",
        "input": "RaceCar",
        "expectedOutput": "PALINDROME",
        "isHidden": false
      },
      {
        "id": "java-str-2-tc-4",
        "input": "level",
        "expectedOutput": "PALINDROME",
        "isHidden": true
      },
      {
        "id": "java-str-2-tc-5",
        "input": "noon",
        "expectedOutput": "PALINDROME",
        "isHidden": true
      },
      {
        "id": "java-str-2-tc-6",
        "input": "hello",
        "expectedOutput": "NOT PALINDROME",
        "isHidden": true
      },
      {
        "id": "java-str-2-tc-7",
        "input": "a",
        "expectedOutput": "PALINDROME",
        "isHidden": true
      },
      {
        "id": "java-str-2-tc-8",
        "input": "Deified",
        "expectedOutput": "PALINDROME",
        "isHidden": true
      },
      {
        "id": "java-str-2-tc-9",
        "input": "Code",
        "expectedOutput": "NOT PALINDROME",
        "isHidden": true
      },
      {
        "id": "java-str-2-tc-10",
        "input": "Rotator",
        "expectedOutput": "PALINDROME",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-str-3",
    "languageId": "java",
    "language": "java",
    "level": "beginner",
    "topicId": "java-strings-and-stringbuilder",
    "title": "Reverse Each Word in a Sentence",
    "slug": "reverse-each-word-in-a-sentence",
    "difficulty": "medium",
    "problemStatement": "Given a sentence of space-separated words, reverse each word individually while preserving their sentence order. Print the resulting sentence.",
    "description": "Given a sentence of space-separated words, reverse each word individually while preserving their sentence order. Print the resulting sentence.",
    "inputFormat": "A line containing space-separated words.",
    "outputFormat": "Print sentence with reversed words.",
    "constraints": [
      "1 <= words <= 10^4"
    ],
    "examples": [
      {
        "input": "Hello World",
        "output": "olleH dlroW",
        "explanation": "Each word reversed."
      },
      {
        "input": "Java is fun",
        "output": "avaJ si nuf",
        "explanation": "Words reversed."
      },
      {
        "input": "Code",
        "output": "edoC",
        "explanation": "Single word."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-str-3-tc-1",
        "input": "Hello World",
        "expectedOutput": "olleH dlroW",
        "isHidden": false
      },
      {
        "id": "java-str-3-tc-2",
        "input": "Java is fun",
        "expectedOutput": "avaJ si nuf",
        "isHidden": false
      },
      {
        "id": "java-str-3-tc-3",
        "input": "Code",
        "expectedOutput": "edoC",
        "isHidden": false
      },
      {
        "id": "java-str-3-tc-4",
        "input": "the quick brown fox",
        "expectedOutput": "eht kciuq nworb xof",
        "isHidden": true
      },
      {
        "id": "java-str-3-tc-5",
        "input": "data structures",
        "expectedOutput": "atad serutcurts",
        "isHidden": true
      },
      {
        "id": "java-str-3-tc-6",
        "input": "a b c",
        "expectedOutput": "a b c",
        "isHidden": true
      },
      {
        "id": "java-str-3-tc-7",
        "input": "welcome to java academy",
        "expectedOutput": "emoclew ot avaj ymedaca",
        "isHidden": true
      },
      {
        "id": "java-str-3-tc-8",
        "input": "one two three",
        "expectedOutput": "eno owt eerht",
        "isHidden": true
      },
      {
        "id": "java-str-3-tc-9",
        "input": "practice makes perfect",
        "expectedOutput": "ecitcarp sekam tcefrep",
        "isHidden": true
      },
      {
        "id": "java-str-3-tc-10",
        "input": "run submit succeed",
        "expectedOutput": "nur timbus deeccus",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-str-4",
    "languageId": "java",
    "language": "java",
    "level": "beginner",
    "topicId": "java-strings-and-stringbuilder",
    "title": "Count Character Occurrences in String",
    "slug": "count-character-occurrences-in-string",
    "difficulty": "medium",
    "problemStatement": "Given a string S and a character C, count how many times C appears in S (case-sensitive). Print the count.",
    "description": "Given a string S and a character C, count how many times C appears in S (case-sensitive). Print the count.",
    "inputFormat": "String S on first line, character C on second line.",
    "outputFormat": "Print integer occurrence count.",
    "constraints": [
      "1 <= len(S) <= 10^5"
    ],
    "examples": [
      {
        "input": "banana\na",
        "output": "3",
        "explanation": "a appears 3 times."
      },
      {
        "input": "hello\nl",
        "output": "2",
        "explanation": "l appears 2 times."
      },
      {
        "input": "world\nz",
        "output": "0",
        "explanation": "z does not appear."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-str-4-tc-1",
        "input": "banana\na",
        "expectedOutput": "3",
        "isHidden": false
      },
      {
        "id": "java-str-4-tc-2",
        "input": "hello\nl",
        "expectedOutput": "2",
        "isHidden": false
      },
      {
        "id": "java-str-4-tc-3",
        "input": "world\nz",
        "expectedOutput": "0",
        "isHidden": false
      },
      {
        "id": "java-str-4-tc-4",
        "input": "Mississippi\ns",
        "expectedOutput": "4",
        "isHidden": true
      },
      {
        "id": "java-str-4-tc-5",
        "input": "Mississippi\ni",
        "expectedOutput": "4",
        "isHidden": true
      },
      {
        "id": "java-str-4-tc-6",
        "input": "Java\nJ",
        "expectedOutput": "1",
        "isHidden": true
      },
      {
        "id": "java-str-4-tc-7",
        "input": "Java\nj",
        "expectedOutput": "0",
        "isHidden": true
      },
      {
        "id": "java-str-4-tc-8",
        "input": "aaaaaa\na",
        "expectedOutput": "6",
        "isHidden": true
      },
      {
        "id": "java-str-4-tc-9",
        "input": "CodeMentor\nM",
        "expectedOutput": "1",
        "isHidden": true
      },
      {
        "id": "java-str-4-tc-10",
        "input": "abc abc abc\nb",
        "expectedOutput": "3",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-meth-1",
    "languageId": "java",
    "language": "java",
    "level": "beginner",
    "topicId": "java-methods-and-overloading",
    "title": "Method Overloading for Maximum of Numbers",
    "slug": "method-overloading-for-maximum-of-numbers",
    "difficulty": "easy",
    "problemStatement": "Implement overloaded methods max(int a, int b) and max(int a, int b, int c). Given count K (2 or 3) followed by K integers, print the maximum value.",
    "description": "Implement overloaded methods max(int a, int b) and max(int a, int b, int c). Given count K (2 or 3) followed by K integers, print the maximum value.",
    "inputFormat": "First integer K (2 or 3), followed by K space-separated integers.",
    "outputFormat": "Print maximum value.",
    "constraints": [
      "K in {2, 3}",
      "-10^9 <= values <= 10^9"
    ],
    "examples": [
      {
        "input": "2 15 25",
        "output": "25",
        "explanation": "max(15, 25) = 25."
      },
      {
        "input": "3 10 50 30",
        "output": "50",
        "explanation": "max(10, 50, 30) = 50."
      },
      {
        "input": "2 -5 -2",
        "output": "-2",
        "explanation": "max(-5, -2) = -2."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-meth-1-tc-1",
        "input": "2 15 25",
        "expectedOutput": "25",
        "isHidden": false
      },
      {
        "id": "java-meth-1-tc-2",
        "input": "3 10 50 30",
        "expectedOutput": "50",
        "isHidden": false
      },
      {
        "id": "java-meth-1-tc-3",
        "input": "2 -5 -2",
        "expectedOutput": "-2",
        "isHidden": false
      },
      {
        "id": "java-meth-1-tc-4",
        "input": "3 100 200 300",
        "expectedOutput": "300",
        "isHidden": true
      },
      {
        "id": "java-meth-1-tc-5",
        "input": "2 42 42",
        "expectedOutput": "42",
        "isHidden": true
      },
      {
        "id": "java-meth-1-tc-6",
        "input": "3 5 5 5",
        "expectedOutput": "5",
        "isHidden": true
      },
      {
        "id": "java-meth-1-tc-7",
        "input": "3 -10 0 10",
        "expectedOutput": "10",
        "isHidden": true
      },
      {
        "id": "java-meth-1-tc-8",
        "input": "2 0 100",
        "expectedOutput": "100",
        "isHidden": true
      },
      {
        "id": "java-meth-1-tc-9",
        "input": "3 99 12 85",
        "expectedOutput": "99",
        "isHidden": true
      },
      {
        "id": "java-meth-1-tc-10",
        "input": "2 -100 -50",
        "expectedOutput": "-50",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-meth-2",
    "languageId": "java",
    "language": "java",
    "level": "beginner",
    "topicId": "java-methods-and-overloading",
    "title": "Check Prime Number Method in Java",
    "slug": "check-prime-number-method-in-java",
    "difficulty": "easy",
    "problemStatement": "Write a method isPrime(int n) that returns boolean. Print \"PRIME\" or \"NOT PRIME\".",
    "description": "Write a method isPrime(int n) that returns boolean. Print \"PRIME\" or \"NOT PRIME\".",
    "inputFormat": "An integer N.",
    "outputFormat": "Print \"PRIME\" or \"NOT PRIME\".",
    "constraints": [
      "1 <= N <= 10^9"
    ],
    "examples": [
      {
        "input": "7",
        "output": "PRIME",
        "explanation": "7 is prime."
      },
      {
        "input": "12",
        "output": "NOT PRIME",
        "explanation": "12 is not prime."
      },
      {
        "input": "1",
        "output": "NOT PRIME",
        "explanation": "1 is not prime."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-meth-2-tc-1",
        "input": "7",
        "expectedOutput": "PRIME",
        "isHidden": false
      },
      {
        "id": "java-meth-2-tc-2",
        "input": "12",
        "expectedOutput": "NOT PRIME",
        "isHidden": false
      },
      {
        "id": "java-meth-2-tc-3",
        "input": "1",
        "expectedOutput": "NOT PRIME",
        "isHidden": false
      },
      {
        "id": "java-meth-2-tc-4",
        "input": "2",
        "expectedOutput": "PRIME",
        "isHidden": true
      },
      {
        "id": "java-meth-2-tc-5",
        "input": "13",
        "expectedOutput": "PRIME",
        "isHidden": true
      },
      {
        "id": "java-meth-2-tc-6",
        "input": "29",
        "expectedOutput": "PRIME",
        "isHidden": true
      },
      {
        "id": "java-meth-2-tc-7",
        "input": "100",
        "expectedOutput": "NOT PRIME",
        "isHidden": true
      },
      {
        "id": "java-meth-2-tc-8",
        "input": "97",
        "expectedOutput": "PRIME",
        "isHidden": true
      },
      {
        "id": "java-meth-2-tc-9",
        "input": "49",
        "expectedOutput": "NOT PRIME",
        "isHidden": true
      },
      {
        "id": "java-meth-2-tc-10",
        "input": "997",
        "expectedOutput": "PRIME",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-meth-3",
    "languageId": "java",
    "language": "java",
    "level": "beginner",
    "topicId": "java-methods-and-overloading",
    "title": "Calculate Power Using Method Overloading",
    "slug": "calculate-power-using-method-overloading",
    "difficulty": "medium",
    "problemStatement": "Implement power(int base, int exp) calculating base^exp for non-negative exp. Print the result.",
    "description": "Implement power(int base, int exp) calculating base^exp for non-negative exp. Print the result.",
    "inputFormat": "Two space-separated non-negative integers: base and exp.",
    "outputFormat": "Print base^exp.",
    "constraints": [
      "0 <= base <= 20",
      "0 <= exp <= 10"
    ],
    "examples": [
      {
        "input": "2 3",
        "output": "8",
        "explanation": "2^3 = 8."
      },
      {
        "input": "5 0",
        "output": "1",
        "explanation": "5^0 = 1."
      },
      {
        "input": "3 4",
        "output": "81",
        "explanation": "3^4 = 81."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-meth-3-tc-1",
        "input": "2 3",
        "expectedOutput": "8",
        "isHidden": false
      },
      {
        "id": "java-meth-3-tc-2",
        "input": "5 0",
        "expectedOutput": "1",
        "isHidden": false
      },
      {
        "id": "java-meth-3-tc-3",
        "input": "3 4",
        "expectedOutput": "81",
        "isHidden": false
      },
      {
        "id": "java-meth-3-tc-4",
        "input": "10 3",
        "expectedOutput": "1000",
        "isHidden": true
      },
      {
        "id": "java-meth-3-tc-5",
        "input": "2 10",
        "expectedOutput": "1024",
        "isHidden": true
      },
      {
        "id": "java-meth-3-tc-6",
        "input": "7 2",
        "expectedOutput": "49",
        "isHidden": true
      },
      {
        "id": "java-meth-3-tc-7",
        "input": "1 100",
        "expectedOutput": "1",
        "isHidden": true
      },
      {
        "id": "java-meth-3-tc-8",
        "input": "4 3",
        "expectedOutput": "64",
        "isHidden": true
      },
      {
        "id": "java-meth-3-tc-9",
        "input": "6 2",
        "expectedOutput": "36",
        "isHidden": true
      },
      {
        "id": "java-meth-3-tc-10",
        "input": "2 5",
        "expectedOutput": "32",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-cls-1",
    "languageId": "java",
    "language": "java",
    "level": "beginner",
    "topicId": "java-classes-and-constructors",
    "title": "Rectangle Class with Parameterized Constructor",
    "slug": "rectangle-class-with-parameterized-constructor",
    "difficulty": "easy",
    "problemStatement": "Define Rectangle class with constructor Rectangle(int w, int h) and methods getArea() and getPerimeter(). Read w and h, print \"Area: <area> Perimeter: <perimeter>\".",
    "description": "Define Rectangle class with constructor Rectangle(int w, int h) and methods getArea() and getPerimeter(). Read w and h, print \"Area: <area> Perimeter: <perimeter>\".",
    "inputFormat": "Two space-separated integers w and h.",
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
        "explanation": "1x2 rectangle."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-cls-1-tc-1",
        "input": "4 5",
        "expectedOutput": "Area: 20 Perimeter: 18",
        "isHidden": false
      },
      {
        "id": "java-cls-1-tc-2",
        "input": "10 10",
        "expectedOutput": "Area: 100 Perimeter: 40",
        "isHidden": false
      },
      {
        "id": "java-cls-1-tc-3",
        "input": "1 2",
        "expectedOutput": "Area: 2 Perimeter: 6",
        "isHidden": false
      },
      {
        "id": "java-cls-1-tc-4",
        "input": "7 3",
        "expectedOutput": "Area: 21 Perimeter: 20",
        "isHidden": true
      },
      {
        "id": "java-cls-1-tc-5",
        "input": "8 8",
        "expectedOutput": "Area: 64 Perimeter: 32",
        "isHidden": true
      },
      {
        "id": "java-cls-1-tc-6",
        "input": "15 4",
        "expectedOutput": "Area: 60 Perimeter: 38",
        "isHidden": true
      },
      {
        "id": "java-cls-1-tc-7",
        "input": "20 10",
        "expectedOutput": "Area: 200 Perimeter: 60",
        "isHidden": true
      },
      {
        "id": "java-cls-1-tc-8",
        "input": "6 9",
        "expectedOutput": "Area: 54 Perimeter: 30",
        "isHidden": true
      },
      {
        "id": "java-cls-1-tc-9",
        "input": "25 4",
        "expectedOutput": "Area: 100 Perimeter: 58",
        "isHidden": true
      },
      {
        "id": "java-cls-1-tc-10",
        "input": "12 12",
        "expectedOutput": "Area: 144 Perimeter: 48",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-cls-2",
    "languageId": "java",
    "language": "java",
    "level": "beginner",
    "topicId": "java-classes-and-constructors",
    "title": "Student Grade and GPA Class",
    "slug": "student-grade-and-gpa-class",
    "difficulty": "medium",
    "problemStatement": "Implement Student(String name, int[] marks) with calculatePercentage(). Print \"Student: <name> Pct: <pct>%\" with percentage rounded to 2 decimal places.",
    "description": "Implement Student(String name, int[] marks) with calculatePercentage(). Print \"Student: <name> Pct: <pct>%\" with percentage rounded to 2 decimal places.",
    "inputFormat": "Student name followed by N and N marks.",
    "outputFormat": "Print \"Student: <name> Pct: <pct>%\".",
    "constraints": [
      "1 <= N <= 100",
      "0 <= mark <= 100"
    ],
    "examples": [
      {
        "input": "Alice 3 80 90 100",
        "output": "Student: Alice Pct: 90.00%",
        "explanation": "Avg 90.00%."
      },
      {
        "input": "Bob 2 70 80",
        "output": "Student: Bob Pct: 75.00%",
        "explanation": "Avg 75.00%."
      },
      {
        "input": "Charlie 1 100",
        "output": "Student: Charlie Pct: 100.00%",
        "explanation": "Single mark."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-cls-2-tc-1",
        "input": "Alice 3 80 90 100",
        "expectedOutput": "Student: Alice Pct: 90.00%",
        "isHidden": false
      },
      {
        "id": "java-cls-2-tc-2",
        "input": "Bob 2 70 80",
        "expectedOutput": "Student: Bob Pct: 75.00%",
        "isHidden": false
      },
      {
        "id": "java-cls-2-tc-3",
        "input": "Charlie 1 100",
        "expectedOutput": "Student: Charlie Pct: 100.00%",
        "isHidden": false
      },
      {
        "id": "java-cls-2-tc-4",
        "input": "David 4 60 70 80 90",
        "expectedOutput": "Student: David Pct: 75.00%",
        "isHidden": true
      },
      {
        "id": "java-cls-2-tc-5",
        "input": "Emma 3 88 92 90",
        "expectedOutput": "Student: Emma Pct: 90.00%",
        "isHidden": true
      },
      {
        "id": "java-cls-2-tc-6",
        "input": "Frank 2 50 60",
        "expectedOutput": "Student: Frank Pct: 55.00%",
        "isHidden": true
      },
      {
        "id": "java-cls-2-tc-7",
        "input": "Grace 5 100 95 90 85 80",
        "expectedOutput": "Student: Grace Pct: 90.00%",
        "isHidden": true
      },
      {
        "id": "java-cls-2-tc-8",
        "input": "Henry 3 33 45 66",
        "expectedOutput": "Student: Henry Pct: 48.00%",
        "isHidden": true
      },
      {
        "id": "java-cls-2-tc-9",
        "input": "Ivy 2 78 82",
        "expectedOutput": "Student: Ivy Pct: 80.00%",
        "isHidden": true
      },
      {
        "id": "java-cls-2-tc-10",
        "input": "Jack 4 90 90 90 90",
        "expectedOutput": "Student: Jack Pct: 90.00%",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-cls-3",
    "languageId": "java",
    "language": "java",
    "level": "beginner",
    "topicId": "java-classes-and-constructors",
    "title": "Bank Account Class with Balance Validations",
    "slug": "bank-account-class-with-balance-validations",
    "difficulty": "medium",
    "problemStatement": "Implement BankAccount(int initialBalance) with deposit(int amount) and withdraw(int amount). If withdraw amount exceeds balance, print \"INSUFFICIENT FUNDS\". Print final balance.",
    "description": "Implement BankAccount(int initialBalance) with deposit(int amount) and withdraw(int amount). If withdraw amount exceeds balance, print \"INSUFFICIENT FUNDS\". Print final balance.",
    "inputFormat": "Initial balance B, followed by N operations \"D <amt>\" or \"W <amt>\".",
    "outputFormat": "Print any error lines, followed by \"Final Balance: <balance>\".",
    "constraints": [
      "0 <= B <= 10^7"
    ],
    "examples": [
      {
        "input": "100 2\nD 50\nW 30",
        "output": "Final Balance: 120",
        "explanation": "100 + 50 - 30 = 120."
      },
      {
        "input": "50 2\nW 100\nD 20",
        "output": "INSUFFICIENT FUNDS\nFinal Balance: 70",
        "explanation": "Overdraft blocked."
      },
      {
        "input": "0 1\nD 500",
        "output": "Final Balance: 500",
        "explanation": "Deposit 500."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-cls-3-tc-1",
        "input": "100 2\nD 50\nW 30",
        "expectedOutput": "Final Balance: 120",
        "isHidden": false
      },
      {
        "id": "java-cls-3-tc-2",
        "input": "50 2\nW 100\nD 20",
        "expectedOutput": "INSUFFICIENT FUNDS\nFinal Balance: 70",
        "isHidden": false
      },
      {
        "id": "java-cls-3-tc-3",
        "input": "0 1\nD 500",
        "expectedOutput": "Final Balance: 500",
        "isHidden": false
      },
      {
        "id": "java-cls-3-tc-4",
        "input": "200 3\nW 50\nW 50\nW 50",
        "expectedOutput": "Final Balance: 50",
        "isHidden": true
      },
      {
        "id": "java-cls-3-tc-5",
        "input": "100 2\nW 100\nW 1",
        "expectedOutput": "INSUFFICIENT FUNDS\nFinal Balance: 0",
        "isHidden": true
      },
      {
        "id": "java-cls-3-tc-6",
        "input": "500 2\nD 100\nD 200",
        "expectedOutput": "Final Balance: 800",
        "isHidden": true
      },
      {
        "id": "java-cls-3-tc-7",
        "input": "1000 1\nW 200",
        "expectedOutput": "Final Balance: 800",
        "isHidden": true
      },
      {
        "id": "java-cls-3-tc-8",
        "input": "50 1\nW 50",
        "expectedOutput": "Final Balance: 0",
        "isHidden": true
      },
      {
        "id": "java-cls-3-tc-9",
        "input": "300 3\nD 100\nW 500\nD 50",
        "expectedOutput": "INSUFFICIENT FUNDS\nFinal Balance: 450",
        "isHidden": true
      },
      {
        "id": "java-cls-3-tc-10",
        "input": "10 2\nW 20\nW 30",
        "expectedOutput": "INSUFFICIENT FUNDS\nINSUFFICIENT FUNDS\nFinal Balance: 10",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-stat-1",
    "languageId": "java",
    "language": "java",
    "level": "beginner",
    "topicId": "java-static-and-final",
    "title": "Instance Counter with Static Variable",
    "slug": "instance-counter-with-static-variable",
    "difficulty": "easy",
    "problemStatement": "Implement Item class with static int count variable incremented on each instance creation. Read N, instantiate N items, and print \"Items Created: <count>\".",
    "description": "Implement Item class with static int count variable incremented on each instance creation. Read N, instantiate N items, and print \"Items Created: <count>\".",
    "inputFormat": "An integer N.",
    "outputFormat": "Print \"Items Created: <N>\".",
    "constraints": [
      "1 <= N <= 1000"
    ],
    "examples": [
      {
        "input": "5",
        "output": "Items Created: 5",
        "explanation": "5 items."
      },
      {
        "input": "1",
        "output": "Items Created: 1",
        "explanation": "1 item."
      },
      {
        "input": "10",
        "output": "Items Created: 10",
        "explanation": "10 items."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-stat-1-tc-1",
        "input": "5",
        "expectedOutput": "Items Created: 5",
        "isHidden": false
      },
      {
        "id": "java-stat-1-tc-2",
        "input": "1",
        "expectedOutput": "Items Created: 1",
        "isHidden": false
      },
      {
        "id": "java-stat-1-tc-3",
        "input": "10",
        "expectedOutput": "Items Created: 10",
        "isHidden": false
      },
      {
        "id": "java-stat-1-tc-4",
        "input": "2",
        "expectedOutput": "Items Created: 2",
        "isHidden": true
      },
      {
        "id": "java-stat-1-tc-5",
        "input": "3",
        "expectedOutput": "Items Created: 3",
        "isHidden": true
      },
      {
        "id": "java-stat-1-tc-6",
        "input": "7",
        "expectedOutput": "Items Created: 7",
        "isHidden": true
      },
      {
        "id": "java-stat-1-tc-7",
        "input": "25",
        "expectedOutput": "Items Created: 25",
        "isHidden": true
      },
      {
        "id": "java-stat-1-tc-8",
        "input": "50",
        "expectedOutput": "Items Created: 50",
        "isHidden": true
      },
      {
        "id": "java-stat-1-tc-9",
        "input": "100",
        "expectedOutput": "Items Created: 100",
        "isHidden": true
      },
      {
        "id": "java-stat-1-tc-10",
        "input": "500",
        "expectedOutput": "Items Created: 500",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-stat-2",
    "languageId": "java",
    "language": "java",
    "level": "beginner",
    "topicId": "java-static-and-final",
    "title": "Math Constant Utility Class with Final",
    "slug": "math-constant-utility-class-with-final",
    "difficulty": "easy",
    "problemStatement": "Create a MathConstants utility class with \"public static final double PI = 3.141592653589793;\" and static method circleArea(double r). Print area rounded to 2 decimal places.",
    "description": "Create a MathConstants utility class with \"public static final double PI = 3.141592653589793;\" and static method circleArea(double r). Print area rounded to 2 decimal places.",
    "inputFormat": "A double radius R.",
    "outputFormat": "Print area with 2 decimal places.",
    "constraints": [
      "1 <= R <= 1000"
    ],
    "examples": [
      {
        "input": "5",
        "output": "78.54",
        "explanation": "Area of radius 5."
      },
      {
        "input": "10",
        "output": "314.16",
        "explanation": "Area of radius 10."
      },
      {
        "input": "1",
        "output": "3.14",
        "explanation": "Area of radius 1."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-stat-2-tc-1",
        "input": "5",
        "expectedOutput": "78.54",
        "isHidden": false
      },
      {
        "id": "java-stat-2-tc-2",
        "input": "10",
        "expectedOutput": "314.16",
        "isHidden": false
      },
      {
        "id": "java-stat-2-tc-3",
        "input": "1",
        "expectedOutput": "3.14",
        "isHidden": false
      },
      {
        "id": "java-stat-2-tc-4",
        "input": "2",
        "expectedOutput": "12.57",
        "isHidden": true
      },
      {
        "id": "java-stat-2-tc-5",
        "input": "3",
        "expectedOutput": "28.27",
        "isHidden": true
      },
      {
        "id": "java-stat-2-tc-6",
        "input": "7",
        "expectedOutput": "153.94",
        "isHidden": true
      },
      {
        "id": "java-stat-2-tc-7",
        "input": "12",
        "expectedOutput": "452.39",
        "isHidden": true
      },
      {
        "id": "java-stat-2-tc-8",
        "input": "15",
        "expectedOutput": "706.86",
        "isHidden": true
      },
      {
        "id": "java-stat-2-tc-9",
        "input": "20",
        "expectedOutput": "1256.64",
        "isHidden": true
      },
      {
        "id": "java-stat-2-tc-10",
        "input": "25",
        "expectedOutput": "1963.50",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-stat-3",
    "languageId": "java",
    "language": "java",
    "level": "beginner",
    "topicId": "java-static-and-final",
    "title": "Static Helper for String Capitalization",
    "slug": "static-helper-for-string-capitalization",
    "difficulty": "medium",
    "problemStatement": "Implement static method StringUtils.capitalizeWords(String str) that capitalizes the first letter of each word in a string. Print the transformed string.",
    "description": "Implement static method StringUtils.capitalizeWords(String str) that capitalizes the first letter of each word in a string. Print the transformed string.",
    "inputFormat": "A line of space-separated words.",
    "outputFormat": "Print capitalized words.",
    "constraints": [
      "1 <= words <= 1000"
    ],
    "examples": [
      {
        "input": "hello world",
        "output": "Hello World",
        "explanation": "Capitalized."
      },
      {
        "input": "java programming",
        "output": "Java Programming",
        "explanation": "Capitalized."
      },
      {
        "input": "code mentor academy",
        "output": "Code Mentor Academy",
        "explanation": "Capitalized."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-stat-3-tc-1",
        "input": "hello world",
        "expectedOutput": "Hello World",
        "isHidden": false
      },
      {
        "id": "java-stat-3-tc-2",
        "input": "java programming",
        "expectedOutput": "Java Programming",
        "isHidden": false
      },
      {
        "id": "java-stat-3-tc-3",
        "input": "code mentor academy",
        "expectedOutput": "Code Mentor Academy",
        "isHidden": false
      },
      {
        "id": "java-stat-3-tc-4",
        "input": "the quick brown fox",
        "expectedOutput": "The Quick Brown Fox",
        "isHidden": true
      },
      {
        "id": "java-stat-3-tc-5",
        "input": "a b c",
        "expectedOutput": "A B C",
        "isHidden": true
      },
      {
        "id": "java-stat-3-tc-6",
        "input": "data structures and algorithms",
        "expectedOutput": "Data Structures And Algorithms",
        "isHidden": true
      },
      {
        "id": "java-stat-3-tc-7",
        "input": "antigravity ide platform",
        "expectedOutput": "Antigravity Ide Platform",
        "isHidden": true
      },
      {
        "id": "java-stat-3-tc-8",
        "input": "one two three",
        "expectedOutput": "One Two Three",
        "isHidden": true
      },
      {
        "id": "java-stat-3-tc-9",
        "input": "spring boot microservices",
        "expectedOutput": "Spring Boot Microservices",
        "isHidden": true
      },
      {
        "id": "java-stat-3-tc-10",
        "input": "object oriented design",
        "expectedOutput": "Object Oriented Design",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-enc-1",
    "languageId": "java",
    "language": "java",
    "level": "beginner",
    "topicId": "java-encapsulation-access-modifiers",
    "title": "Employee Encapsulation with Salary Bounds",
    "slug": "employee-encapsulation-with-salary-bounds",
    "difficulty": "easy",
    "problemStatement": "Implement Employee with private salary and public setter setSalary(int s). If s < 0, reject and keep previous salary, printing \"INVALID SALARY\". Print \"Employee: <name> Salary: <salary>\".",
    "description": "Implement Employee with private salary and public setter setSalary(int s). If s < 0, reject and keep previous salary, printing \"INVALID SALARY\". Print \"Employee: <name> Salary: <salary>\".",
    "inputFormat": "Name, initial salary, and new salary attempt.",
    "outputFormat": "Print error if any, followed by \"Employee: <name> Salary: <salary>\".",
    "constraints": [
      "0 <= initial <= 10^7"
    ],
    "examples": [
      {
        "input": "Alice 50000 60000",
        "output": "Employee: Alice Salary: 60000",
        "explanation": "Salary updated."
      },
      {
        "input": "Bob 40000 -1000",
        "output": "INVALID SALARY\nEmployee: Bob Salary: 40000",
        "explanation": "Rejected negative salary."
      },
      {
        "input": "Charlie 80000 0",
        "output": "Employee: Charlie Salary: 0",
        "explanation": "Zero salary allowed."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-enc-1-tc-1",
        "input": "Alice 50000 60000",
        "expectedOutput": "Employee: Alice Salary: 60000",
        "isHidden": false
      },
      {
        "id": "java-enc-1-tc-2",
        "input": "Bob 40000 -1000",
        "expectedOutput": "INVALID SALARY\nEmployee: Bob Salary: 40000",
        "isHidden": false
      },
      {
        "id": "java-enc-1-tc-3",
        "input": "Charlie 80000 0",
        "expectedOutput": "Employee: Charlie Salary: 0",
        "isHidden": false
      },
      {
        "id": "java-enc-1-tc-4",
        "input": "David 100000 120000",
        "expectedOutput": "Employee: David Salary: 120000",
        "isHidden": true
      },
      {
        "id": "java-enc-1-tc-5",
        "input": "Emma 75000 -500",
        "expectedOutput": "INVALID SALARY\nEmployee: Emma Salary: 75000",
        "isHidden": true
      },
      {
        "id": "java-enc-1-tc-6",
        "input": "Frank 30000 35000",
        "expectedOutput": "Employee: Frank Salary: 35000",
        "isHidden": true
      },
      {
        "id": "java-enc-1-tc-7",
        "input": "Grace 90000 95000",
        "expectedOutput": "Employee: Grace Salary: 95000",
        "isHidden": true
      },
      {
        "id": "java-enc-1-tc-8",
        "input": "Henry 45000 -20000",
        "expectedOutput": "INVALID SALARY\nEmployee: Henry Salary: 45000",
        "isHidden": true
      },
      {
        "id": "java-enc-1-tc-9",
        "input": "Ivy 65000 70000",
        "expectedOutput": "Employee: Ivy Salary: 70000",
        "isHidden": true
      },
      {
        "id": "java-enc-1-tc-10",
        "input": "Jack 55000 55000",
        "expectedOutput": "Employee: Jack Salary: 55000",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-enc-2",
    "languageId": "java",
    "language": "java",
    "level": "beginner",
    "topicId": "java-encapsulation-access-modifiers",
    "title": "Temperature Sensor Range Encapsulation",
    "slug": "temperature-sensor-range-encapsulation",
    "difficulty": "medium",
    "problemStatement": "Implement TemperatureSensor with private reading. Setter setReading(double r) only accepts readings between -50.0 and 150.0 inclusive. If outside range, print \"OUT OF RANGE\" and retain previous reading. Print final reading with 1 decimal place.",
    "description": "Implement TemperatureSensor with private reading. Setter setReading(double r) only accepts readings between -50.0 and 150.0 inclusive. If outside range, print \"OUT OF RANGE\" and retain previous reading. Print final reading with 1 decimal place.",
    "inputFormat": "Initial reading followed by N new reading attempts.",
    "outputFormat": "Print error messages, then \"Sensor: <reading>\".",
    "constraints": [
      "1 <= N <= 10"
    ],
    "examples": [
      {
        "input": "25.0 2\n30.5\n200.0",
        "output": "OUT OF RANGE\nSensor: 30.5",
        "explanation": "200 is out of range."
      },
      {
        "input": "0.0 1\n-60.0",
        "output": "OUT OF RANGE\nSensor: 0.0",
        "explanation": "Below -50."
      },
      {
        "input": "10.0 1\n15.0",
        "output": "Sensor: 15.0",
        "explanation": "Valid."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-enc-2-tc-1",
        "input": "25.0 2\n30.5\n200.0",
        "expectedOutput": "OUT OF RANGE\nSensor: 30.5",
        "isHidden": false
      },
      {
        "id": "java-enc-2-tc-2",
        "input": "0.0 1\n-60.0",
        "expectedOutput": "OUT OF RANGE\nSensor: 0.0",
        "isHidden": false
      },
      {
        "id": "java-enc-2-tc-3",
        "input": "10.0 1\n15.0",
        "expectedOutput": "Sensor: 15.0",
        "isHidden": false
      },
      {
        "id": "java-enc-2-tc-4",
        "input": "50.0 2\n100.0\n150.0",
        "expectedOutput": "Sensor: 150.0",
        "isHidden": true
      },
      {
        "id": "java-enc-2-tc-5",
        "input": "20.0 1\n-50.0",
        "expectedOutput": "Sensor: -50.0",
        "isHidden": true
      },
      {
        "id": "java-enc-2-tc-6",
        "input": "35.0 2\n150.1\n40.0",
        "expectedOutput": "OUT OF RANGE\nSensor: 40.0",
        "isHidden": true
      },
      {
        "id": "java-enc-2-tc-7",
        "input": "0.0 2\n-50.1\n-49.9",
        "expectedOutput": "OUT OF RANGE\nSensor: -49.9",
        "isHidden": true
      },
      {
        "id": "java-enc-2-tc-8",
        "input": "12.0 1\n12.0",
        "expectedOutput": "Sensor: 12.0",
        "isHidden": true
      },
      {
        "id": "java-enc-2-tc-9",
        "input": "75.0 2\n80.0\n85.0",
        "expectedOutput": "Sensor: 85.0",
        "isHidden": true
      },
      {
        "id": "java-enc-2-tc-10",
        "input": "100.0 2\n160.0\n170.0",
        "expectedOutput": "OUT OF RANGE\nOUT OF RANGE\nSensor: 100.0",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-enc-3",
    "languageId": "java",
    "language": "java",
    "level": "beginner",
    "topicId": "java-encapsulation-access-modifiers",
    "title": "Immutable Point2D Class",
    "slug": "immutable-point2d-class",
    "difficulty": "medium",
    "problemStatement": "Implement immutable class Point2D with private final int x and y, and translate(int dx, int dy) returning a NEW Point2D instance without modifying the original. Print \"Original: (<x>, <y>) Translated: (<x+dx>, <y+dy>)\".",
    "description": "Implement immutable class Point2D with private final int x and y, and translate(int dx, int dy) returning a NEW Point2D instance without modifying the original. Print \"Original: (<x>, <y>) Translated: (<x+dx>, <y+dy>)\".",
    "inputFormat": "Four integers: x, y, dx, dy.",
    "outputFormat": "Print \"Original: (<x>, <y>) Translated: (<nx>, <ny>)\".",
    "constraints": [
      "-10^5 <= coordinates <= 10^5"
    ],
    "examples": [
      {
        "input": "2 3 5 10",
        "output": "Original: (2, 3) Translated: (7, 13)",
        "explanation": "Translated point created."
      },
      {
        "input": "0 0 1 1",
        "output": "Original: (0, 0) Translated: (1, 1)",
        "explanation": "Origin translated."
      },
      {
        "input": "5 5 -5 -5",
        "output": "Original: (5, 5) Translated: (0, 0)",
        "explanation": "Translated to origin."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-enc-3-tc-1",
        "input": "2 3 5 10",
        "expectedOutput": "Original: (2, 3) Translated: (7, 13)",
        "isHidden": false
      },
      {
        "id": "java-enc-3-tc-2",
        "input": "0 0 1 1",
        "expectedOutput": "Original: (0, 0) Translated: (1, 1)",
        "isHidden": false
      },
      {
        "id": "java-enc-3-tc-3",
        "input": "5 5 -5 -5",
        "expectedOutput": "Original: (5, 5) Translated: (0, 0)",
        "isHidden": false
      },
      {
        "id": "java-enc-3-tc-4",
        "input": "10 20 30 40",
        "expectedOutput": "Original: (10, 20) Translated: (40, 60)",
        "isHidden": true
      },
      {
        "id": "java-enc-3-tc-5",
        "input": "-10 -20 10 20",
        "expectedOutput": "Original: (-10, -20) Translated: (0, 0)",
        "isHidden": true
      },
      {
        "id": "java-enc-3-tc-6",
        "input": "100 200 -50 -100",
        "expectedOutput": "Original: (100, 200) Translated: (50, 100)",
        "isHidden": true
      },
      {
        "id": "java-enc-3-tc-7",
        "input": "7 8 0 0",
        "expectedOutput": "Original: (7, 8) Translated: (7, 8)",
        "isHidden": true
      },
      {
        "id": "java-enc-3-tc-8",
        "input": "1 1 99 99",
        "expectedOutput": "Original: (1, 1) Translated: (100, 100)",
        "isHidden": true
      },
      {
        "id": "java-enc-3-tc-9",
        "input": "-5 5 10 -10",
        "expectedOutput": "Original: (-5, 5) Translated: (5, -5)",
        "isHidden": true
      },
      {
        "id": "java-enc-3-tc-10",
        "input": "42 42 8 8",
        "expectedOutput": "Original: (42, 42) Translated: (50, 50)",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-inh-1",
    "languageId": "java",
    "language": "java",
    "level": "beginner",
    "topicId": "java-inheritance-and-polymorphism",
    "title": "Animal Hierarchy with Sound Polymorphism",
    "slug": "animal-hierarchy-with-sound-polymorphism",
    "difficulty": "easy",
    "problemStatement": "Implement base class Animal with makeSound() returning \"Generic sound\" and subclasses Dog (\"Woof\") and Cat (\"Meow\"). Given animal type (\"DOG\", \"CAT\", or other), print sound.",
    "description": "Implement base class Animal with makeSound() returning \"Generic sound\" and subclasses Dog (\"Woof\") and Cat (\"Meow\"). Given animal type (\"DOG\", \"CAT\", or other), print sound.",
    "inputFormat": "Animal type string.",
    "outputFormat": "Print sound string.",
    "constraints": [
      "String length <= 20"
    ],
    "examples": [
      {
        "input": "DOG",
        "output": "Woof",
        "explanation": "Dog barks."
      },
      {
        "input": "CAT",
        "output": "Meow",
        "explanation": "Cat meows."
      },
      {
        "input": "BIRD",
        "output": "Generic sound",
        "explanation": "Base class sound."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-inh-1-tc-1",
        "input": "DOG",
        "expectedOutput": "Woof",
        "isHidden": false
      },
      {
        "id": "java-inh-1-tc-2",
        "input": "CAT",
        "expectedOutput": "Meow",
        "isHidden": false
      },
      {
        "id": "java-inh-1-tc-3",
        "input": "BIRD",
        "expectedOutput": "Generic sound",
        "isHidden": false
      },
      {
        "id": "java-inh-1-tc-4",
        "input": "DOG",
        "expectedOutput": "Woof",
        "isHidden": true
      },
      {
        "id": "java-inh-1-tc-5",
        "input": "CAT",
        "expectedOutput": "Meow",
        "isHidden": true
      },
      {
        "id": "java-inh-1-tc-6",
        "input": "LION",
        "expectedOutput": "Generic sound",
        "isHidden": true
      },
      {
        "id": "java-inh-1-tc-7",
        "input": "DOG",
        "expectedOutput": "Woof",
        "isHidden": true
      },
      {
        "id": "java-inh-1-tc-8",
        "input": "FISH",
        "expectedOutput": "Generic sound",
        "isHidden": true
      },
      {
        "id": "java-inh-1-tc-9",
        "input": "CAT",
        "expectedOutput": "Meow",
        "isHidden": true
      },
      {
        "id": "java-inh-1-tc-10",
        "input": "HORSE",
        "expectedOutput": "Generic sound",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-inh-2",
    "languageId": "java",
    "language": "java",
    "level": "beginner",
    "topicId": "java-inheritance-and-polymorphism",
    "title": "Employee and Manager Salary Polymorphism",
    "slug": "employee-and-manager-salary-polymorphism",
    "difficulty": "medium",
    "problemStatement": "Implement Employee(name, baseSalary) with getCompensation() and Manager(name, baseSalary, bonus) overriding getCompensation() using super.getCompensation() + bonus. Print \"Role: <role> Total: <comp>\".",
    "description": "Implement Employee(name, baseSalary) with getCompensation() and Manager(name, baseSalary, bonus) overriding getCompensation() using super.getCompensation() + bonus. Print \"Role: <role> Total: <comp>\".",
    "inputFormat": "Role (\"EMP\" or \"MGR\"), name, baseSalary, and optional bonus if MGR.",
    "outputFormat": "Print \"Role: <role> Total: <comp>\".",
    "constraints": [
      "1 <= baseSalary <= 10^7"
    ],
    "examples": [
      {
        "input": "MGR Alice 50000 15000",
        "output": "Role: MGR Total: 65000",
        "explanation": "Manager total 65000."
      },
      {
        "input": "EMP Bob 40000",
        "output": "Role: EMP Total: 40000",
        "explanation": "Employee total 40000."
      },
      {
        "input": "MGR Charlie 80000 0",
        "output": "Role: MGR Total: 80000",
        "explanation": "Manager zero bonus."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-inh-2-tc-1",
        "input": "MGR Alice 50000 15000",
        "expectedOutput": "Role: MGR Total: 65000",
        "isHidden": false
      },
      {
        "id": "java-inh-2-tc-2",
        "input": "EMP Bob 40000",
        "expectedOutput": "Role: EMP Total: 40000",
        "isHidden": false
      },
      {
        "id": "java-inh-2-tc-3",
        "input": "MGR Charlie 80000 0",
        "expectedOutput": "Role: MGR Total: 80000",
        "isHidden": false
      },
      {
        "id": "java-inh-2-tc-4",
        "input": "EMP Dan 60000",
        "expectedOutput": "Role: EMP Total: 60000",
        "isHidden": true
      },
      {
        "id": "java-inh-2-tc-5",
        "input": "MGR Emma 100000 25000",
        "expectedOutput": "Role: MGR Total: 125000",
        "isHidden": true
      },
      {
        "id": "java-inh-2-tc-6",
        "input": "EMP Frank 35000",
        "expectedOutput": "Role: EMP Total: 35000",
        "isHidden": true
      },
      {
        "id": "java-inh-2-tc-7",
        "input": "MGR Grace 75000 20000",
        "expectedOutput": "Role: MGR Total: 95000",
        "isHidden": true
      },
      {
        "id": "java-inh-2-tc-8",
        "input": "EMP Henry 90000",
        "expectedOutput": "Role: EMP Total: 90000",
        "isHidden": true
      },
      {
        "id": "java-inh-2-tc-9",
        "input": "MGR Ivy 120000 30000",
        "expectedOutput": "Role: MGR Total: 150000",
        "isHidden": true
      },
      {
        "id": "java-inh-2-tc-10",
        "input": "EMP Jack 45000",
        "expectedOutput": "Role: EMP Total: 45000",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-inh-3",
    "languageId": "java",
    "language": "java",
    "level": "beginner",
    "topicId": "java-inheritance-and-polymorphism",
    "title": "Shape Area Calculation with Dynamic Binding",
    "slug": "shape-area-calculation-with-dynamic-binding",
    "difficulty": "medium",
    "problemStatement": "Implement base class Shape with double getArea() and derived classes Circle(radius) (area = Math.PI * r * r) and Rectangle(w, h) (area = w * h). Given shape specification, print area rounded to 2 decimal places.",
    "description": "Implement base class Shape with double getArea() and derived classes Circle(radius) (area = Math.PI * r * r) and Rectangle(w, h) (area = w * h). Given shape specification, print area rounded to 2 decimal places.",
    "inputFormat": "\"CIRCLE <r>\" or \"RECTANGLE <w> <h>\".",
    "outputFormat": "Print area with 2 decimal places.",
    "constraints": [
      "1 <= dimensions <= 1000"
    ],
    "examples": [
      {
        "input": "CIRCLE 5",
        "output": "78.54",
        "explanation": "Circle area."
      },
      {
        "input": "RECTANGLE 4 5",
        "output": "20.00",
        "explanation": "Rectangle area."
      },
      {
        "input": "CIRCLE 10",
        "output": "314.16",
        "explanation": "Circle radius 10."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-inh-3-tc-1",
        "input": "CIRCLE 5",
        "expectedOutput": "78.54",
        "isHidden": false
      },
      {
        "id": "java-inh-3-tc-2",
        "input": "RECTANGLE 4 5",
        "expectedOutput": "20.00",
        "isHidden": false
      },
      {
        "id": "java-inh-3-tc-3",
        "input": "CIRCLE 10",
        "expectedOutput": "314.16",
        "isHidden": false
      },
      {
        "id": "java-inh-3-tc-4",
        "input": "RECTANGLE 10 10",
        "expectedOutput": "100.00",
        "isHidden": true
      },
      {
        "id": "java-inh-3-tc-5",
        "input": "CIRCLE 1",
        "expectedOutput": "3.14",
        "isHidden": true
      },
      {
        "id": "java-inh-3-tc-6",
        "input": "RECTANGLE 7 3",
        "expectedOutput": "21.00",
        "isHidden": true
      },
      {
        "id": "java-inh-3-tc-7",
        "input": "CIRCLE 7",
        "expectedOutput": "153.94",
        "isHidden": true
      },
      {
        "id": "java-inh-3-tc-8",
        "input": "RECTANGLE 15 4",
        "expectedOutput": "60.00",
        "isHidden": true
      },
      {
        "id": "java-inh-3-tc-9",
        "input": "CIRCLE 2",
        "expectedOutput": "12.57",
        "isHidden": true
      },
      {
        "id": "java-inh-3-tc-10",
        "input": "RECTANGLE 12 12",
        "expectedOutput": "144.00",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-abs-1",
    "languageId": "java",
    "language": "java",
    "level": "beginner",
    "topicId": "java-abstraction-and-interfaces",
    "title": "Payment Gateway Interface Implementation",
    "slug": "payment-gateway-interface-implementation",
    "difficulty": "easy",
    "problemStatement": "Implement PaymentMethod interface with processPayment(double amount). Create CreditCard (adds 2% transaction fee) and PayPal (adds 1% transaction fee). Given method (\"CC\" or \"PAYPAL\") and amount, print \"Charged: <amount_with_fee>\" rounded to 2 decimal places.",
    "description": "Implement PaymentMethod interface with processPayment(double amount). Create CreditCard (adds 2% transaction fee) and PayPal (adds 1% transaction fee). Given method (\"CC\" or \"PAYPAL\") and amount, print \"Charged: <amount_with_fee>\" rounded to 2 decimal places.",
    "inputFormat": "Payment type (\"CC\" or \"PAYPAL\") and double amount.",
    "outputFormat": "Print \"Charged: <total>\".",
    "constraints": [
      "1 <= amount <= 10^7"
    ],
    "examples": [
      {
        "input": "CC 100.0",
        "output": "Charged: 102.00",
        "explanation": "100 + 2% fee = 102.00."
      },
      {
        "input": "PAYPAL 100.0",
        "output": "Charged: 101.00",
        "explanation": "100 + 1% fee = 101.00."
      },
      {
        "input": "CC 50.0",
        "output": "Charged: 51.00",
        "explanation": "50 + 2% fee = 51.00."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-abs-1-tc-1",
        "input": "CC 100.0",
        "expectedOutput": "Charged: 102.00",
        "isHidden": false
      },
      {
        "id": "java-abs-1-tc-2",
        "input": "PAYPAL 100.0",
        "expectedOutput": "Charged: 101.00",
        "isHidden": false
      },
      {
        "id": "java-abs-1-tc-3",
        "input": "CC 50.0",
        "expectedOutput": "Charged: 51.00",
        "isHidden": false
      },
      {
        "id": "java-abs-1-tc-4",
        "input": "PAYPAL 200.0",
        "expectedOutput": "Charged: 202.00",
        "isHidden": true
      },
      {
        "id": "java-abs-1-tc-5",
        "input": "CC 1000.0",
        "expectedOutput": "Charged: 1020.00",
        "isHidden": true
      },
      {
        "id": "java-abs-1-tc-6",
        "input": "PAYPAL 500.0",
        "expectedOutput": "Charged: 505.00",
        "isHidden": true
      },
      {
        "id": "java-abs-1-tc-7",
        "input": "CC 75.0",
        "expectedOutput": "Charged: 76.50",
        "isHidden": true
      },
      {
        "id": "java-abs-1-tc-8",
        "input": "PAYPAL 80.0",
        "expectedOutput": "Charged: 80.80",
        "isHidden": true
      },
      {
        "id": "java-abs-1-tc-9",
        "input": "CC 250.0",
        "expectedOutput": "Charged: 255.00",
        "isHidden": true
      },
      {
        "id": "java-abs-1-tc-10",
        "input": "PAYPAL 1000.0",
        "expectedOutput": "Charged: 1010.00",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-abs-2",
    "languageId": "java",
    "language": "java",
    "level": "beginner",
    "topicId": "java-abstraction-and-interfaces",
    "title": "Printable and Serializable Interfaces",
    "slug": "printable-and-serializable-interfaces",
    "difficulty": "medium",
    "problemStatement": "Implement an abstract class Document with title, and interfaces Printable (printPreview()) and Exportable (exportFormat()). Implement Report class inheriting Document and both interfaces. Output formatted summary string \"Report: <title> [PRINT_READY, EXPORT_OK]\".",
    "description": "Implement an abstract class Document with title, and interfaces Printable (printPreview()) and Exportable (exportFormat()). Implement Report class inheriting Document and both interfaces. Output formatted summary string \"Report: <title> [PRINT_READY, EXPORT_OK]\".",
    "inputFormat": "Title string.",
    "outputFormat": "Print summary status string.",
    "constraints": [
      "1 <= len(title) <= 100"
    ],
    "examples": [
      {
        "input": "FinancialQ3",
        "output": "Report: FinancialQ3 [PRINT_READY, EXPORT_OK]",
        "explanation": "Summary."
      },
      {
        "input": "AnnualAudit",
        "output": "Report: AnnualAudit [PRINT_READY, EXPORT_OK]",
        "explanation": "Summary."
      },
      {
        "input": "SalesSummary",
        "output": "Report: SalesSummary [PRINT_READY, EXPORT_OK]",
        "explanation": "Summary."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-abs-2-tc-1",
        "input": "FinancialQ3",
        "expectedOutput": "Report: FinancialQ3 [PRINT_READY, EXPORT_OK]",
        "isHidden": false
      },
      {
        "id": "java-abs-2-tc-2",
        "input": "AnnualAudit",
        "expectedOutput": "Report: AnnualAudit [PRINT_READY, EXPORT_OK]",
        "isHidden": false
      },
      {
        "id": "java-abs-2-tc-3",
        "input": "SalesSummary",
        "expectedOutput": "Report: SalesSummary [PRINT_READY, EXPORT_OK]",
        "isHidden": false
      },
      {
        "id": "java-abs-2-tc-4",
        "input": "TechSpecs",
        "expectedOutput": "Report: TechSpecs [PRINT_READY, EXPORT_OK]",
        "isHidden": true
      },
      {
        "id": "java-abs-2-tc-5",
        "input": "ProjectRoadmap",
        "expectedOutput": "Report: ProjectRoadmap [PRINT_READY, EXPORT_OK]",
        "isHidden": true
      },
      {
        "id": "java-abs-2-tc-6",
        "input": "Budget2026",
        "expectedOutput": "Report: Budget2026 [PRINT_READY, EXPORT_OK]",
        "isHidden": true
      },
      {
        "id": "java-abs-2-tc-7",
        "input": "UserManual",
        "expectedOutput": "Report: UserManual [PRINT_READY, EXPORT_OK]",
        "isHidden": true
      },
      {
        "id": "java-abs-2-tc-8",
        "input": "ReleaseNotes",
        "expectedOutput": "Report: ReleaseNotes [PRINT_READY, EXPORT_OK]",
        "isHidden": true
      },
      {
        "id": "java-abs-2-tc-9",
        "input": "SystemArchitecture",
        "expectedOutput": "Report: SystemArchitecture [PRINT_READY, EXPORT_OK]",
        "isHidden": true
      },
      {
        "id": "java-abs-2-tc-10",
        "input": "SecurityAssessment",
        "expectedOutput": "Report: SecurityAssessment [PRINT_READY, EXPORT_OK]",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-abs-3",
    "languageId": "java",
    "language": "java",
    "level": "beginner",
    "topicId": "java-abstraction-and-interfaces",
    "title": "Abstract Vehicle with Speed Limit",
    "slug": "abstract-vehicle-with-speed-limit",
    "difficulty": "medium",
    "problemStatement": "Implement abstract class Vehicle with abstract int getMaxSpeed(). Derived Car has maxSpeed 180, Truck 100, and SportsCar 300. Given vehicle type, print \"Max Speed: <speed> km/h\". If unknown, print \"UNKNOWN VEHICLE\".",
    "description": "Implement abstract class Vehicle with abstract int getMaxSpeed(). Derived Car has maxSpeed 180, Truck 100, and SportsCar 300. Given vehicle type, print \"Max Speed: <speed> km/h\". If unknown, print \"UNKNOWN VEHICLE\".",
    "inputFormat": "Vehicle type string.",
    "outputFormat": "Print speed statement or error.",
    "constraints": [
      "String length <= 20"
    ],
    "examples": [
      {
        "input": "CAR",
        "output": "Max Speed: 180 km/h",
        "explanation": "Car max speed 180."
      },
      {
        "input": "TRUCK",
        "output": "Max Speed: 100 km/h",
        "explanation": "Truck max speed 100."
      },
      {
        "input": "PLANE",
        "output": "UNKNOWN VEHICLE",
        "explanation": "Unknown type."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-abs-3-tc-1",
        "input": "CAR",
        "expectedOutput": "Max Speed: 180 km/h",
        "isHidden": false
      },
      {
        "id": "java-abs-3-tc-2",
        "input": "TRUCK",
        "expectedOutput": "Max Speed: 100 km/h",
        "isHidden": false
      },
      {
        "id": "java-abs-3-tc-3",
        "input": "PLANE",
        "expectedOutput": "UNKNOWN VEHICLE",
        "isHidden": false
      },
      {
        "id": "java-abs-3-tc-4",
        "input": "SPORTSCAR",
        "expectedOutput": "Max Speed: 300 km/h",
        "isHidden": true
      },
      {
        "id": "java-abs-3-tc-5",
        "input": "CAR",
        "expectedOutput": "Max Speed: 180 km/h",
        "isHidden": true
      },
      {
        "id": "java-abs-3-tc-6",
        "input": "BOAT",
        "expectedOutput": "UNKNOWN VEHICLE",
        "isHidden": true
      },
      {
        "id": "java-abs-3-tc-7",
        "input": "TRUCK",
        "expectedOutput": "Max Speed: 100 km/h",
        "isHidden": true
      },
      {
        "id": "java-abs-3-tc-8",
        "input": "SPORTSCAR",
        "expectedOutput": "Max Speed: 300 km/h",
        "isHidden": true
      },
      {
        "id": "java-abs-3-tc-9",
        "input": "BIKE",
        "expectedOutput": "UNKNOWN VEHICLE",
        "isHidden": true
      },
      {
        "id": "java-abs-3-tc-10",
        "input": "CAR",
        "expectedOutput": "Max Speed: 180 km/h",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-exc-1",
    "languageId": "java",
    "language": "java",
    "level": "intermediate",
    "topicId": "java-exception-hierarchy",
    "title": "ArithmeticException Division Catching",
    "slug": "arithmeticexception-division-catching",
    "difficulty": "easy",
    "problemStatement": "Read integers A and B. Compute A / B. If ArithmeticException occurs (division by zero), catch it and print \"ARITHMETIC ERROR: DIVISION BY ZERO\". Otherwise print quotient.",
    "description": "Read integers A and B. Compute A / B. If ArithmeticException occurs (division by zero), catch it and print \"ARITHMETIC ERROR: DIVISION BY ZERO\". Otherwise print quotient.",
    "inputFormat": "Two space-separated integers A and B.",
    "outputFormat": "Print quotient or error.",
    "constraints": [
      "-10^9 <= A, B <= 10^9"
    ],
    "examples": [
      {
        "input": "20 4",
        "output": "5",
        "explanation": "20 / 4 = 5."
      },
      {
        "input": "10 0",
        "output": "ARITHMETIC ERROR: DIVISION BY ZERO",
        "explanation": "Divide by zero caught."
      },
      {
        "input": "0 5",
        "output": "0",
        "explanation": "0 / 5 = 0."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-exc-1-tc-1",
        "input": "20 4",
        "expectedOutput": "5",
        "isHidden": false
      },
      {
        "id": "java-exc-1-tc-2",
        "input": "10 0",
        "expectedOutput": "ARITHMETIC ERROR: DIVISION BY ZERO",
        "isHidden": false
      },
      {
        "id": "java-exc-1-tc-3",
        "input": "0 5",
        "expectedOutput": "0",
        "isHidden": false
      },
      {
        "id": "java-exc-1-tc-4",
        "input": "100 25",
        "expectedOutput": "4",
        "isHidden": true
      },
      {
        "id": "java-exc-1-tc-5",
        "input": "50 0",
        "expectedOutput": "ARITHMETIC ERROR: DIVISION BY ZERO",
        "isHidden": true
      },
      {
        "id": "java-exc-1-tc-6",
        "input": "-10 2",
        "expectedOutput": "-5",
        "isHidden": true
      },
      {
        "id": "java-exc-1-tc-7",
        "input": "15 3",
        "expectedOutput": "5",
        "isHidden": true
      },
      {
        "id": "java-exc-1-tc-8",
        "input": "7 0",
        "expectedOutput": "ARITHMETIC ERROR: DIVISION BY ZERO",
        "isHidden": true
      },
      {
        "id": "java-exc-1-tc-9",
        "input": "42 7",
        "expectedOutput": "6",
        "isHidden": true
      },
      {
        "id": "java-exc-1-tc-10",
        "input": "100 10",
        "expectedOutput": "10",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-exc-2",
    "languageId": "java",
    "language": "java",
    "level": "intermediate",
    "topicId": "java-exception-hierarchy",
    "title": "Custom InvalidAgeException in Java",
    "slug": "custom-invalidageexception-in-java",
    "difficulty": "medium",
    "problemStatement": "Define custom checked exception InvalidAgeException. If age < 0 or age > 150, throw and catch it, printing \"INVALID AGE: OUT OF RANGE\". Otherwise print \"VALID AGE: <age>\".",
    "description": "Define custom checked exception InvalidAgeException. If age < 0 or age > 150, throw and catch it, printing \"INVALID AGE: OUT OF RANGE\". Otherwise print \"VALID AGE: <age>\".",
    "inputFormat": "An integer age.",
    "outputFormat": "Print validation outcome.",
    "constraints": [
      "-1000 <= age <= 1000"
    ],
    "examples": [
      {
        "input": "25",
        "output": "VALID AGE: 25",
        "explanation": "Valid age."
      },
      {
        "input": "-5",
        "output": "INVALID AGE: OUT OF RANGE",
        "explanation": "Negative age."
      },
      {
        "input": "180",
        "output": "INVALID AGE: OUT OF RANGE",
        "explanation": "Age > 150."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-exc-2-tc-1",
        "input": "25",
        "expectedOutput": "VALID AGE: 25",
        "isHidden": false
      },
      {
        "id": "java-exc-2-tc-2",
        "input": "-5",
        "expectedOutput": "INVALID AGE: OUT OF RANGE",
        "isHidden": false
      },
      {
        "id": "java-exc-2-tc-3",
        "input": "180",
        "expectedOutput": "INVALID AGE: OUT OF RANGE",
        "isHidden": false
      },
      {
        "id": "java-exc-2-tc-4",
        "input": "0",
        "expectedOutput": "VALID AGE: 0",
        "isHidden": true
      },
      {
        "id": "java-exc-2-tc-5",
        "input": "150",
        "expectedOutput": "VALID AGE: 150",
        "isHidden": true
      },
      {
        "id": "java-exc-2-tc-6",
        "input": "75",
        "expectedOutput": "VALID AGE: 75",
        "isHidden": true
      },
      {
        "id": "java-exc-2-tc-7",
        "input": "-1",
        "expectedOutput": "INVALID AGE: OUT OF RANGE",
        "isHidden": true
      },
      {
        "id": "java-exc-2-tc-8",
        "input": "151",
        "expectedOutput": "INVALID AGE: OUT OF RANGE",
        "isHidden": true
      },
      {
        "id": "java-exc-2-tc-9",
        "input": "99",
        "expectedOutput": "VALID AGE: 99",
        "isHidden": true
      },
      {
        "id": "java-exc-2-tc-10",
        "input": "42",
        "expectedOutput": "VALID AGE: 42",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-exc-3",
    "languageId": "java",
    "language": "java",
    "level": "intermediate",
    "topicId": "java-exception-hierarchy",
    "title": "Multi-Catch Exception Handler",
    "slug": "multi-catch-exception-handler",
    "difficulty": "medium",
    "problemStatement": "Given token A, token B, and index K, parse A and B as integers and array of size 3. If parsing fails, catch NumberFormatException and print \"ERROR: NUMBER FORMAT\". If index K < 0 or K >= 3, catch ArrayIndexOutOfBoundsException and print \"ERROR: ARRAY INDEX\". Otherwise print \"OK: <A+B>\".",
    "description": "Given token A, token B, and index K, parse A and B as integers and array of size 3. If parsing fails, catch NumberFormatException and print \"ERROR: NUMBER FORMAT\". If index K < 0 or K >= 3, catch ArrayIndexOutOfBoundsException and print \"ERROR: ARRAY INDEX\". Otherwise print \"OK: <A+B>\".",
    "inputFormat": "Tokens A, B, and integer index K.",
    "outputFormat": "Print status message.",
    "constraints": [
      "Arbitrary input tokens."
    ],
    "examples": [
      {
        "input": "10 20 1",
        "output": "OK: 30",
        "explanation": "Valid inputs."
      },
      {
        "input": "abc 20 1",
        "output": "ERROR: NUMBER FORMAT",
        "explanation": "Number format error."
      },
      {
        "input": "10 20 5",
        "output": "ERROR: ARRAY INDEX",
        "explanation": "Index 5 >= 3."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-exc-3-tc-1",
        "input": "10 20 1",
        "expectedOutput": "OK: 30",
        "isHidden": false
      },
      {
        "id": "java-exc-3-tc-2",
        "input": "abc 20 1",
        "expectedOutput": "ERROR: NUMBER FORMAT",
        "isHidden": false
      },
      {
        "id": "java-exc-3-tc-3",
        "input": "10 20 5",
        "expectedOutput": "ERROR: ARRAY INDEX",
        "isHidden": false
      },
      {
        "id": "java-exc-3-tc-4",
        "input": "5 15 0",
        "expectedOutput": "OK: 20",
        "isHidden": true
      },
      {
        "id": "java-exc-3-tc-5",
        "input": "100 xyz 2",
        "expectedOutput": "ERROR: NUMBER FORMAT",
        "isHidden": true
      },
      {
        "id": "java-exc-3-tc-6",
        "input": "50 50 -1",
        "expectedOutput": "ERROR: ARRAY INDEX",
        "isHidden": true
      },
      {
        "id": "java-exc-3-tc-7",
        "input": "0 0 2",
        "expectedOutput": "OK: 0",
        "isHidden": true
      },
      {
        "id": "java-exc-3-tc-8",
        "input": "12 34 3",
        "expectedOutput": "ERROR: ARRAY INDEX",
        "isHidden": true
      },
      {
        "id": "java-exc-3-tc-9",
        "input": "foo bar 0",
        "expectedOutput": "ERROR: NUMBER FORMAT",
        "isHidden": true
      },
      {
        "id": "java-exc-3-tc-10",
        "input": "7 8 1",
        "expectedOutput": "OK: 15",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-twr-1",
    "languageId": "java",
    "language": "java",
    "level": "intermediate",
    "topicId": "java-try-with-resources",
    "title": "AutoCloseable Resource Lifecycle Simulation",
    "slug": "autocloseable-resource-lifecycle-simulation",
    "difficulty": "easy",
    "problemStatement": "Simulate an AutoCloseable database connection: Output \"OPEN <id>\", execute action, and on close automatically output \"CLOSED <id>\". Given resource ID and action string, print lifecycle.",
    "description": "Simulate an AutoCloseable database connection: Output \"OPEN <id>\", execute action, and on close automatically output \"CLOSED <id>\". Given resource ID and action string, print lifecycle.",
    "inputFormat": "Connection ID (string) and action (string).",
    "outputFormat": "Print \"OPEN <id>\nEXEC: <action>\nCLOSED <id>\".",
    "constraints": [
      "1 <= len <= 50"
    ],
    "examples": [
      {
        "input": "Conn1 QUERY",
        "output": "OPEN Conn1\nEXEC: QUERY\nCLOSED Conn1",
        "explanation": "Lifecycle."
      },
      {
        "input": "DB2 COMMIT",
        "output": "OPEN DB2\nEXEC: COMMIT\nCLOSED DB2",
        "explanation": "Lifecycle."
      },
      {
        "input": "PoolA PING",
        "output": "OPEN PoolA\nEXEC: PING\nCLOSED PoolA",
        "explanation": "Ping."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-twr-1-tc-1",
        "input": "Conn1 QUERY",
        "expectedOutput": "OPEN Conn1\nEXEC: QUERY\nCLOSED Conn1",
        "isHidden": false
      },
      {
        "id": "java-twr-1-tc-2",
        "input": "DB2 COMMIT",
        "expectedOutput": "OPEN DB2\nEXEC: COMMIT\nCLOSED DB2",
        "isHidden": false
      },
      {
        "id": "java-twr-1-tc-3",
        "input": "PoolA PING",
        "expectedOutput": "OPEN PoolA\nEXEC: PING\nCLOSED PoolA",
        "isHidden": false
      },
      {
        "id": "java-twr-1-tc-4",
        "input": "Session5 SELECT",
        "expectedOutput": "OPEN Session5\nEXEC: SELECT\nCLOSED Session5",
        "isHidden": true
      },
      {
        "id": "java-twr-1-tc-5",
        "input": "Link1 UPDATE",
        "expectedOutput": "OPEN Link1\nEXEC: UPDATE\nCLOSED Link1",
        "isHidden": true
      },
      {
        "id": "java-twr-1-tc-6",
        "input": "Socket9 FLUSH",
        "expectedOutput": "OPEN Socket9\nEXEC: FLUSH\nCLOSED Socket9",
        "isHidden": true
      },
      {
        "id": "java-twr-1-tc-7",
        "input": "Stream3 READ",
        "expectedOutput": "OPEN Stream3\nEXEC: READ\nCLOSED Stream3",
        "isHidden": true
      },
      {
        "id": "java-twr-1-tc-8",
        "input": "Channel7 SEND",
        "expectedOutput": "OPEN Channel7\nEXEC: SEND\nCLOSED Channel7",
        "isHidden": true
      },
      {
        "id": "java-twr-1-tc-9",
        "input": "Client2 RECV",
        "expectedOutput": "OPEN Client2\nEXEC: RECV\nCLOSED Client2",
        "isHidden": true
      },
      {
        "id": "java-twr-1-tc-10",
        "input": "Node4 SYNC",
        "expectedOutput": "OPEN Node4\nEXEC: SYNC\nCLOSED Node4",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-twr-2",
    "languageId": "java",
    "language": "java",
    "level": "intermediate",
    "topicId": "java-try-with-resources",
    "title": "Scanner AutoClose in try-with-resources",
    "slug": "scanner-autoclose-in-try-with-resources",
    "difficulty": "medium",
    "problemStatement": "Read integers until EOF using Scanner inside try-with-resources. Compute sum and count. Print \"Count: <cnt> Sum: <sum>\".",
    "description": "Read integers until EOF using Scanner inside try-with-resources. Compute sum and count. Print \"Count: <cnt> Sum: <sum>\".",
    "inputFormat": "Space-separated integers.",
    "outputFormat": "Print \"Count: <cnt> Sum: <sum>\".",
    "constraints": [
      "1 <= count <= 1000"
    ],
    "examples": [
      {
        "input": "10 20 30",
        "output": "Count: 3 Sum: 60",
        "explanation": "3 numbers sum to 60."
      },
      {
        "input": "5 5",
        "output": "Count: 2 Sum: 10",
        "explanation": "2 numbers."
      },
      {
        "input": "100",
        "output": "Count: 1 Sum: 100",
        "explanation": "1 number."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-twr-2-tc-1",
        "input": "10 20 30",
        "expectedOutput": "Count: 3 Sum: 60",
        "isHidden": false
      },
      {
        "id": "java-twr-2-tc-2",
        "input": "5 5",
        "expectedOutput": "Count: 2 Sum: 10",
        "isHidden": false
      },
      {
        "id": "java-twr-2-tc-3",
        "input": "100",
        "expectedOutput": "Count: 1 Sum: 100",
        "isHidden": false
      },
      {
        "id": "java-twr-2-tc-4",
        "input": "1 2 3 4 5",
        "expectedOutput": "Count: 5 Sum: 15",
        "isHidden": true
      },
      {
        "id": "java-twr-2-tc-5",
        "input": "-10 10 -20 20",
        "expectedOutput": "Count: 4 Sum: 0",
        "isHidden": true
      },
      {
        "id": "java-twr-2-tc-6",
        "input": "25 25 25 25",
        "expectedOutput": "Count: 4 Sum: 100",
        "isHidden": true
      },
      {
        "id": "java-twr-2-tc-7",
        "input": "7 14 21",
        "expectedOutput": "Count: 3 Sum: 42",
        "isHidden": true
      },
      {
        "id": "java-twr-2-tc-8",
        "input": "0 0 0",
        "expectedOutput": "Count: 3 Sum: 0",
        "isHidden": true
      },
      {
        "id": "java-twr-2-tc-9",
        "input": "10 50 40",
        "expectedOutput": "Count: 3 Sum: 100",
        "isHidden": true
      },
      {
        "id": "java-twr-2-tc-10",
        "input": "100 200 300 400",
        "expectedOutput": "Count: 4 Sum: 1000",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-twr-3",
    "languageId": "java",
    "language": "java",
    "level": "intermediate",
    "topicId": "java-try-with-resources",
    "title": "Double Resource Safe Execution Ordering",
    "slug": "double-resource-safe-execution-ordering",
    "difficulty": "medium",
    "problemStatement": "In try-with-resources with two resources ResA and ResB (declared in that order), resources are closed in REVERSE declaration order. Print initialization and closing order.",
    "description": "In try-with-resources with two resources ResA and ResB (declared in that order), resources are closed in REVERSE declaration order. Print initialization and closing order.",
    "inputFormat": "Names of two resources: ResA and ResB.",
    "outputFormat": "Print \"INIT: <ResA>\nINIT: <ResB>\nCLOSE: <ResB>\nCLOSE: <ResA>\".",
    "constraints": [
      "Names <= 50 chars."
    ],
    "examples": [
      {
        "input": "FileIn FileOut",
        "output": "INIT: FileIn\nINIT: FileOut\nCLOSE: FileOut\nCLOSE: FileIn",
        "explanation": "Reverse order close."
      },
      {
        "input": "Reader Writer",
        "output": "INIT: Reader\nINIT: Writer\nCLOSE: Writer\nCLOSE: Reader",
        "explanation": "Reverse close."
      },
      {
        "input": "R1 R2",
        "output": "INIT: R1\nINIT: R2\nCLOSE: R2\nCLOSE: R1",
        "explanation": "R2 closed before R1."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-twr-3-tc-1",
        "input": "FileIn FileOut",
        "expectedOutput": "INIT: FileIn\nINIT: FileOut\nCLOSE: FileOut\nCLOSE: FileIn",
        "isHidden": false
      },
      {
        "id": "java-twr-3-tc-2",
        "input": "Reader Writer",
        "expectedOutput": "INIT: Reader\nINIT: Writer\nCLOSE: Writer\nCLOSE: Reader",
        "isHidden": false
      },
      {
        "id": "java-twr-3-tc-3",
        "input": "R1 R2",
        "expectedOutput": "INIT: R1\nINIT: R2\nCLOSE: R2\nCLOSE: R1",
        "isHidden": false
      },
      {
        "id": "java-twr-3-tc-4",
        "input": "ConnA ConnB",
        "expectedOutput": "INIT: ConnA\nINIT: ConnB\nCLOSE: ConnB\nCLOSE: ConnA",
        "isHidden": true
      },
      {
        "id": "java-twr-3-tc-5",
        "input": "SocketIn SocketOut",
        "expectedOutput": "INIT: SocketIn\nINIT: SocketOut\nCLOSE: SocketOut\nCLOSE: SocketIn",
        "isHidden": true
      },
      {
        "id": "java-twr-3-tc-6",
        "input": "Stream1 Stream2",
        "expectedOutput": "INIT: Stream1\nINIT: Stream2\nCLOSE: Stream2\nCLOSE: Stream1",
        "isHidden": true
      },
      {
        "id": "java-twr-3-tc-7",
        "input": "LockX LockY",
        "expectedOutput": "INIT: LockX\nINIT: LockY\nCLOSE: LockY\nCLOSE: LockX",
        "isHidden": true
      },
      {
        "id": "java-twr-3-tc-8",
        "input": "A B",
        "expectedOutput": "INIT: A\nINIT: B\nCLOSE: B\nCLOSE: A",
        "isHidden": true
      },
      {
        "id": "java-twr-3-tc-9",
        "input": "Alpha Beta",
        "expectedOutput": "INIT: Alpha\nINIT: Beta\nCLOSE: Beta\nCLOSE: Alpha",
        "isHidden": true
      },
      {
        "id": "java-twr-3-tc-10",
        "input": "First Second",
        "expectedOutput": "INIT: First\nINIT: Second\nCLOSE: Second\nCLOSE: First",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-gen-1",
    "languageId": "java",
    "language": "java",
    "level": "intermediate",
    "topicId": "java-generics",
    "title": "Generic Box Container Class",
    "slug": "generic-box-container-class",
    "difficulty": "easy",
    "problemStatement": "Implement generic Box<T> with set(T item) and get(). Given type (\"INT\" or \"STRING\") and value, store in Box and print \"Box Contains: <val>\".",
    "description": "Implement generic Box<T> with set(T item) and get(). Given type (\"INT\" or \"STRING\") and value, store in Box and print \"Box Contains: <val>\".",
    "inputFormat": "Type (\"INT\" or \"STRING\") and value.",
    "outputFormat": "Print \"Box Contains: <val>\".",
    "constraints": [
      "Valid input tokens."
    ],
    "examples": [
      {
        "input": "INT 42",
        "output": "Box Contains: 42",
        "explanation": "Integer box."
      },
      {
        "input": "STRING Java",
        "output": "Box Contains: Java",
        "explanation": "String box."
      },
      {
        "input": "INT 100",
        "output": "Box Contains: 100",
        "explanation": "Box contains 100."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-gen-1-tc-1",
        "input": "INT 42",
        "expectedOutput": "Box Contains: 42",
        "isHidden": false
      },
      {
        "id": "java-gen-1-tc-2",
        "input": "STRING Java",
        "expectedOutput": "Box Contains: Java",
        "isHidden": false
      },
      {
        "id": "java-gen-1-tc-3",
        "input": "INT 100",
        "expectedOutput": "Box Contains: 100",
        "isHidden": false
      },
      {
        "id": "java-gen-1-tc-4",
        "input": "STRING CodeMentor",
        "expectedOutput": "Box Contains: CodeMentor",
        "isHidden": true
      },
      {
        "id": "java-gen-1-tc-5",
        "input": "INT -10",
        "expectedOutput": "Box Contains: -10",
        "isHidden": true
      },
      {
        "id": "java-gen-1-tc-6",
        "input": "STRING Generics",
        "expectedOutput": "Box Contains: Generics",
        "isHidden": true
      },
      {
        "id": "java-gen-1-tc-7",
        "input": "INT 0",
        "expectedOutput": "Box Contains: 0",
        "isHidden": true
      },
      {
        "id": "java-gen-1-tc-8",
        "input": "STRING Hello",
        "expectedOutput": "Box Contains: Hello",
        "isHidden": true
      },
      {
        "id": "java-gen-1-tc-9",
        "input": "INT 9999",
        "expectedOutput": "Box Contains: 9999",
        "isHidden": true
      },
      {
        "id": "java-gen-1-tc-10",
        "input": "STRING Antigravity",
        "expectedOutput": "Box Contains: Antigravity",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-gen-2",
    "languageId": "java",
    "language": "java",
    "level": "intermediate",
    "topicId": "java-generics",
    "title": "Generic Array Swapper Method",
    "slug": "generic-array-swapper-method",
    "difficulty": "medium",
    "problemStatement": "Implement generic method <T> void swap(T[] arr, int i, int j). Given array of N integers and indices i, j, swap elements and print resulting array space-separated.",
    "description": "Implement generic method <T> void swap(T[] arr, int i, int j). Given array of N integers and indices i, j, swap elements and print resulting array space-separated.",
    "inputFormat": "First line N, second line N integers, third line i and j.",
    "outputFormat": "Print space-separated swapped array.",
    "constraints": [
      "1 <= N <= 1000",
      "0 <= i, j < N"
    ],
    "examples": [
      {
        "input": "4\n1 2 3 4\n0 3",
        "output": "4 2 3 1",
        "explanation": "Index 0 and 3 swapped."
      },
      {
        "input": "3\n10 20 30\n1 2",
        "output": "10 30 20",
        "explanation": "Index 1 and 2 swapped."
      },
      {
        "input": "2\n5 10\n0 1",
        "output": "10 5",
        "explanation": "Swapped."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-gen-2-tc-1",
        "input": "4\n1 2 3 4\n0 3",
        "expectedOutput": "4 2 3 1",
        "isHidden": false
      },
      {
        "id": "java-gen-2-tc-2",
        "input": "3\n10 20 30\n1 2",
        "expectedOutput": "10 30 20",
        "isHidden": false
      },
      {
        "id": "java-gen-2-tc-3",
        "input": "2\n5 10\n0 1",
        "expectedOutput": "10 5",
        "isHidden": false
      },
      {
        "id": "java-gen-2-tc-4",
        "input": "5\n1 2 3 4 5\n2 2",
        "expectedOutput": "1 2 3 4 5",
        "isHidden": true
      },
      {
        "id": "java-gen-2-tc-5",
        "input": "4\n10 20 30 40\n1 3",
        "expectedOutput": "10 40 30 20",
        "isHidden": true
      },
      {
        "id": "java-gen-2-tc-6",
        "input": "3\n7 8 9\n0 1",
        "expectedOutput": "8 7 9",
        "isHidden": true
      },
      {
        "id": "java-gen-2-tc-7",
        "input": "5\n5 4 3 2 1\n0 4",
        "expectedOutput": "1 4 3 2 5",
        "isHidden": true
      },
      {
        "id": "java-gen-2-tc-8",
        "input": "2\n100 200\n0 0",
        "expectedOutput": "100 200",
        "isHidden": true
      },
      {
        "id": "java-gen-2-tc-9",
        "input": "4\n-1 -2 -3 -4\n0 2",
        "expectedOutput": "-3 -2 -1 -4",
        "isHidden": true
      },
      {
        "id": "java-gen-2-tc-10",
        "input": "3\n50 100 150\n0 2",
        "expectedOutput": "150 100 50",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-gen-3",
    "languageId": "java",
    "language": "java",
    "level": "intermediate",
    "topicId": "java-generics",
    "title": "Generic Maximum Finder with Comparable",
    "slug": "generic-maximum-finder-with-comparable",
    "difficulty": "medium",
    "problemStatement": "Implement generic method <T extends Comparable<T>> T findMax(T[] arr). Given type (\"INT\" or \"STRING\"), size N, and N space-separated values, print the maximum value.",
    "description": "Implement generic method <T extends Comparable<T>> T findMax(T[] arr). Given type (\"INT\" or \"STRING\"), size N, and N space-separated values, print the maximum value.",
    "inputFormat": "Type (\"INT\" or \"STRING\"), N, followed by N space-separated elements.",
    "outputFormat": "Print maximum element.",
    "constraints": [
      "1 <= N <= 1000"
    ],
    "examples": [
      {
        "input": "INT 4 10 50 20 40",
        "output": "50",
        "explanation": "Max integer."
      },
      {
        "input": "STRING 3 apple zebra banana",
        "output": "zebra",
        "explanation": "Lexicographically greatest string."
      },
      {
        "input": "INT 1 100",
        "output": "100",
        "explanation": "Single element."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-gen-3-tc-1",
        "input": "INT 4 10 50 20 40",
        "expectedOutput": "50",
        "isHidden": false
      },
      {
        "id": "java-gen-3-tc-2",
        "input": "STRING 3 apple zebra banana",
        "expectedOutput": "zebra",
        "isHidden": false
      },
      {
        "id": "java-gen-3-tc-3",
        "input": "INT 1 100",
        "expectedOutput": "100",
        "isHidden": false
      },
      {
        "id": "java-gen-3-tc-4",
        "input": "STRING 4 cat dog elephant ant",
        "expectedOutput": "elephant",
        "isHidden": true
      },
      {
        "id": "java-gen-3-tc-5",
        "input": "INT 5 -10 -5 -20 -1 -8",
        "expectedOutput": "-1",
        "isHidden": true
      },
      {
        "id": "java-gen-3-tc-6",
        "input": "STRING 2 beta alpha",
        "expectedOutput": "beta",
        "isHidden": true
      },
      {
        "id": "java-gen-3-tc-7",
        "input": "INT 3 1000 500 2000",
        "expectedOutput": "2000",
        "isHidden": true
      },
      {
        "id": "java-gen-3-tc-8",
        "input": "STRING 3 java python rust",
        "expectedOutput": "rust",
        "isHidden": true
      },
      {
        "id": "java-gen-3-tc-9",
        "input": "INT 4 0 0 0 1",
        "expectedOutput": "1",
        "isHidden": true
      },
      {
        "id": "java-gen-3-tc-10",
        "input": "STRING 3 red green blue",
        "expectedOutput": "red",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-list-1",
    "languageId": "java",
    "language": "java",
    "level": "intermediate",
    "topicId": "java-list-arraylist-linkedlist",
    "title": "Remove All Even Numbers from ArrayList",
    "slug": "remove-all-even-numbers-from-arraylist",
    "difficulty": "easy",
    "problemStatement": "Given N integers in an ArrayList, remove all even numbers using an Iterator or removeIf(). Print the remaining odd numbers space-separated. If empty, print \"EMPTY\".",
    "description": "Given N integers in an ArrayList, remove all even numbers using an Iterator or removeIf(). Print the remaining odd numbers space-separated. If empty, print \"EMPTY\".",
    "inputFormat": "First line N, second line N space-separated integers.",
    "outputFormat": "Print remaining odd integers or \"EMPTY\".",
    "constraints": [
      "1 <= N <= 10^5"
    ],
    "examples": [
      {
        "input": "5\n1 2 3 4 5",
        "output": "1 3 5",
        "explanation": "Evens 2, 4 removed."
      },
      {
        "input": "3\n2 4 6",
        "output": "EMPTY",
        "explanation": "All removed."
      },
      {
        "input": "3\n1 3 5",
        "output": "1 3 5",
        "explanation": "None removed."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-list-1-tc-1",
        "input": "5\n1 2 3 4 5",
        "expectedOutput": "1 3 5",
        "isHidden": false
      },
      {
        "id": "java-list-1-tc-2",
        "input": "3\n2 4 6",
        "expectedOutput": "EMPTY",
        "isHidden": false
      },
      {
        "id": "java-list-1-tc-3",
        "input": "3\n1 3 5",
        "expectedOutput": "1 3 5",
        "isHidden": false
      },
      {
        "id": "java-list-1-tc-4",
        "input": "4\n10 20 30 40",
        "expectedOutput": "EMPTY",
        "isHidden": true
      },
      {
        "id": "java-list-1-tc-5",
        "input": "6\n0 1 2 3 4 5",
        "expectedOutput": "1 3 5",
        "isHidden": true
      },
      {
        "id": "java-list-1-tc-6",
        "input": "4\n-1 -2 -3 -4",
        "expectedOutput": "-1 -3",
        "isHidden": true
      },
      {
        "id": "java-list-1-tc-7",
        "input": "1\n7",
        "expectedOutput": "7",
        "isHidden": true
      },
      {
        "id": "java-list-1-tc-8",
        "input": "1\n8",
        "expectedOutput": "EMPTY",
        "isHidden": true
      },
      {
        "id": "java-list-1-tc-9",
        "input": "5\n11 22 33 44 55",
        "expectedOutput": "11 33 55",
        "isHidden": true
      },
      {
        "id": "java-list-1-tc-10",
        "input": "4\n9 7 5 3",
        "expectedOutput": "9 7 5 3",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-list-2",
    "languageId": "java",
    "language": "java",
    "level": "intermediate",
    "topicId": "java-list-arraylist-linkedlist",
    "title": "Sort List of Strings by Length",
    "slug": "sort-list-of-strings-by-length",
    "difficulty": "medium",
    "problemStatement": "Given N strings in an ArrayList, sort them by length in ascending order using Comparator.comparingInt(String::length). In case of ties, maintain alphabetical order. Print space-separated sorted strings.",
    "description": "Given N strings in an ArrayList, sort them by length in ascending order using Comparator.comparingInt(String::length). In case of ties, maintain alphabetical order. Print space-separated sorted strings.",
    "inputFormat": "First line N, second line N space-separated strings.",
    "outputFormat": "Print space-separated sorted strings.",
    "constraints": [
      "1 <= N <= 1000"
    ],
    "examples": [
      {
        "input": "4\napple cat dog banana",
        "output": "cat dog apple banana",
        "explanation": "Sorted by length, ties alphabetical."
      },
      {
        "input": "3\naaa b c",
        "output": "b c aaa",
        "explanation": "b, c (len 1), aaa (len 3)."
      },
      {
        "input": "2\nworld hello",
        "output": "hello world",
        "explanation": "Ties sorted alphabetically."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-list-2-tc-1",
        "input": "4\napple cat dog banana",
        "expectedOutput": "cat dog apple banana",
        "isHidden": false
      },
      {
        "id": "java-list-2-tc-2",
        "input": "3\naaa b c",
        "expectedOutput": "b c aaa",
        "isHidden": false
      },
      {
        "id": "java-list-2-tc-3",
        "input": "2\nworld hello",
        "expectedOutput": "hello world",
        "isHidden": false
      },
      {
        "id": "java-list-2-tc-4",
        "input": "5\npython c java rust ruby",
        "expectedOutput": "c java ruby rust python",
        "isHidden": true
      },
      {
        "id": "java-list-2-tc-5",
        "input": "4\none two three four",
        "expectedOutput": "one two four three",
        "isHidden": true
      },
      {
        "id": "java-list-2-tc-6",
        "input": "3\nz y x",
        "expectedOutput": "x y z",
        "isHidden": true
      },
      {
        "id": "java-list-2-tc-7",
        "input": "4\nelephant mouse ant bee",
        "expectedOutput": "ant bee mouse elephant",
        "isHidden": true
      },
      {
        "id": "java-list-2-tc-8",
        "input": "3\ncat bat rat",
        "expectedOutput": "bat cat rat",
        "isHidden": true
      },
      {
        "id": "java-list-2-tc-9",
        "input": "4\nalpha beta gamma delta",
        "expectedOutput": "beta delta gamma alpha",
        "isHidden": true
      },
      {
        "id": "java-list-2-tc-10",
        "input": "2\nshort verylongword",
        "expectedOutput": "short verylongword",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-list-3",
    "languageId": "java",
    "language": "java",
    "level": "intermediate",
    "topicId": "java-list-arraylist-linkedlist",
    "title": "Detect Duplicate Elements in List",
    "slug": "detect-duplicate-elements-in-list",
    "difficulty": "medium",
    "problemStatement": "Given N integers in an ArrayList, find all duplicate elements (elements that appear more than once). Print distinct duplicate elements sorted in ascending order separated by space. If none, print \"NO DUPLICATES\".",
    "description": "Given N integers in an ArrayList, find all duplicate elements (elements that appear more than once). Print distinct duplicate elements sorted in ascending order separated by space. If none, print \"NO DUPLICATES\".",
    "inputFormat": "First line N, second line N space-separated integers.",
    "outputFormat": "Print space-separated duplicates or \"NO DUPLICATES\".",
    "constraints": [
      "1 <= N <= 10^5"
    ],
    "examples": [
      {
        "input": "6\n1 2 3 2 1 4",
        "output": "1 2",
        "explanation": "1 and 2 appear multiple times."
      },
      {
        "input": "3\n1 2 3",
        "output": "NO DUPLICATES",
        "explanation": "No duplicates."
      },
      {
        "input": "4\n5 5 5 5",
        "output": "5",
        "explanation": "5 is duplicate."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-list-3-tc-1",
        "input": "6\n1 2 3 2 1 4",
        "expectedOutput": "1 2",
        "isHidden": false
      },
      {
        "id": "java-list-3-tc-2",
        "input": "3\n1 2 3",
        "expectedOutput": "NO DUPLICATES",
        "isHidden": false
      },
      {
        "id": "java-list-3-tc-3",
        "input": "4\n5 5 5 5",
        "expectedOutput": "5",
        "isHidden": false
      },
      {
        "id": "java-list-3-tc-4",
        "input": "5\n10 20 30 40 50",
        "expectedOutput": "NO DUPLICATES",
        "isHidden": true
      },
      {
        "id": "java-list-3-tc-5",
        "input": "7\n4 3 2 7 8 2 3",
        "expectedOutput": "2 3",
        "isHidden": true
      },
      {
        "id": "java-list-3-tc-6",
        "input": "5\n10 10 20 20 30",
        "expectedOutput": "10 20",
        "isHidden": true
      },
      {
        "id": "java-list-3-tc-7",
        "input": "1\n100",
        "expectedOutput": "NO DUPLICATES",
        "isHidden": true
      },
      {
        "id": "java-list-3-tc-8",
        "input": "6\n-1 -2 -1 0 5 5",
        "expectedOutput": "-1 5",
        "isHidden": true
      },
      {
        "id": "java-list-3-tc-9",
        "input": "4\n7 8 8 7",
        "expectedOutput": "7 8",
        "isHidden": true
      },
      {
        "id": "java-list-3-tc-10",
        "input": "5\n9 9 9 1 2",
        "expectedOutput": "9",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-list-4",
    "languageId": "java",
    "language": "java",
    "level": "intermediate",
    "topicId": "java-list-arraylist-linkedlist",
    "title": "Implement Stack Using LinkedList",
    "slug": "implement-stack-using-linkedlist",
    "difficulty": "medium",
    "problemStatement": "Implement a Stack using LinkedList. Support operations: \"PUSH <val>\" and \"POP\". If POP on empty stack, print \"EMPTY\". Print value popped on POP.",
    "description": "Implement a Stack using LinkedList. Support operations: \"PUSH <val>\" and \"POP\". If POP on empty stack, print \"EMPTY\". Print value popped on POP.",
    "inputFormat": "First line N (operations count), next N lines contain operations.",
    "outputFormat": "Print output of each POP operation on separate lines.",
    "constraints": [
      "1 <= N <= 1000"
    ],
    "examples": [
      {
        "input": "4\nPUSH 10\nPUSH 20\nPOP\nPOP",
        "output": "20\n10",
        "explanation": "LIFO order."
      },
      {
        "input": "2\nPOP\nPUSH 5",
        "output": "EMPTY",
        "explanation": "Pop on empty."
      },
      {
        "input": "3\nPUSH 1\nPOP\nPOP",
        "output": "1\nEMPTY",
        "explanation": "Pop then empty."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-list-4-tc-1",
        "input": "4\nPUSH 10\nPUSH 20\nPOP\nPOP",
        "expectedOutput": "20\n10",
        "isHidden": false
      },
      {
        "id": "java-list-4-tc-2",
        "input": "2\nPOP\nPUSH 5",
        "expectedOutput": "EMPTY",
        "isHidden": false
      },
      {
        "id": "java-list-4-tc-3",
        "input": "3\nPUSH 1\nPOP\nPOP",
        "expectedOutput": "1\nEMPTY",
        "isHidden": false
      },
      {
        "id": "java-list-4-tc-4",
        "input": "5\nPUSH 1\nPUSH 2\nPUSH 3\nPOP\nPOP",
        "expectedOutput": "3\n2",
        "isHidden": true
      },
      {
        "id": "java-list-4-tc-5",
        "input": "2\nPUSH 100\nPOP",
        "expectedOutput": "100",
        "isHidden": true
      },
      {
        "id": "java-list-4-tc-6",
        "input": "3\nPOP\nPOP\nPOP",
        "expectedOutput": "EMPTY\nEMPTY\nEMPTY",
        "isHidden": true
      },
      {
        "id": "java-list-4-tc-7",
        "input": "4\nPUSH A\nPUSH B\nPOP\nPOP",
        "expectedOutput": "B\nA",
        "isHidden": true
      },
      {
        "id": "java-list-4-tc-8",
        "input": "4\nPUSH 5\nPOP\nPUSH 10\nPOP",
        "expectedOutput": "5\n10",
        "isHidden": true
      },
      {
        "id": "java-list-4-tc-9",
        "input": "3\nPUSH X\nPUSH Y\nPOP",
        "expectedOutput": "Y",
        "isHidden": true
      },
      {
        "id": "java-list-4-tc-10",
        "input": "5\nPUSH 10\nPUSH 20\nPUSH 30\nPOP\nPOP",
        "expectedOutput": "30\n20",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-set-1",
    "languageId": "java",
    "language": "java",
    "level": "intermediate",
    "topicId": "java-set-hashset-treeset",
    "title": "Find Unique Words with HashSet",
    "slug": "find-unique-words-with-hashset",
    "difficulty": "easy",
    "problemStatement": "Given a sentence of space-separated words, count the number of distinct unique words using HashSet (case-insensitive). Print the count.",
    "description": "Given a sentence of space-separated words, count the number of distinct unique words using HashSet (case-insensitive). Print the count.",
    "inputFormat": "A line of words.",
    "outputFormat": "Print distinct word count.",
    "constraints": [
      "1 <= words <= 10^4"
    ],
    "examples": [
      {
        "input": "Apple banana apple orange banana",
        "output": "3",
        "explanation": "apple, banana, orange."
      },
      {
        "input": "one two three",
        "output": "3",
        "explanation": "All unique."
      },
      {
        "input": "same same same",
        "output": "1",
        "explanation": "Single word."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-set-1-tc-1",
        "input": "Apple banana apple orange banana",
        "expectedOutput": "3",
        "isHidden": false
      },
      {
        "id": "java-set-1-tc-2",
        "input": "one two three",
        "expectedOutput": "3",
        "isHidden": false
      },
      {
        "id": "java-set-1-tc-3",
        "input": "same same same",
        "expectedOutput": "1",
        "isHidden": false
      },
      {
        "id": "java-set-1-tc-4",
        "input": "the quick brown fox jumps over the lazy dog",
        "expectedOutput": "8",
        "isHidden": true
      },
      {
        "id": "java-set-1-tc-5",
        "input": "java is java is java",
        "expectedOutput": "2",
        "isHidden": true
      },
      {
        "id": "java-set-1-tc-6",
        "input": "Code Mentor Academy",
        "expectedOutput": "3",
        "isHidden": true
      },
      {
        "id": "java-set-1-tc-7",
        "input": "hello world Hello World",
        "expectedOutput": "2",
        "isHidden": true
      },
      {
        "id": "java-set-1-tc-8",
        "input": "a b c d e",
        "expectedOutput": "5",
        "isHidden": true
      },
      {
        "id": "java-set-1-tc-9",
        "input": "test test test test",
        "expectedOutput": "1",
        "isHidden": true
      },
      {
        "id": "java-set-1-tc-10",
        "input": "alpha beta gamma alpha beta",
        "expectedOutput": "3",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-set-2",
    "languageId": "java",
    "language": "java",
    "level": "intermediate",
    "topicId": "java-set-hashset-treeset",
    "title": "Sorted Unique Numbers with TreeSet",
    "slug": "sorted-unique-numbers-with-treeset",
    "difficulty": "medium",
    "problemStatement": "Given N integers, insert them into a TreeSet to eliminate duplicates and sort in ascending order. Print the elements separated by space.",
    "description": "Given N integers, insert them into a TreeSet to eliminate duplicates and sort in ascending order. Print the elements separated by space.",
    "inputFormat": "First line N, second line N space-separated integers.",
    "outputFormat": "Print sorted unique integers.",
    "constraints": [
      "1 <= N <= 10^5"
    ],
    "examples": [
      {
        "input": "6\n4 2 4 1 2 3",
        "output": "1 2 3 4",
        "explanation": "Sorted unique values."
      },
      {
        "input": "3\n5 5 5",
        "output": "5",
        "explanation": "Single value."
      },
      {
        "input": "4\n1 2 3 4",
        "output": "1 2 3 4",
        "explanation": "Already unique."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-set-2-tc-1",
        "input": "6\n4 2 4 1 2 3",
        "expectedOutput": "1 2 3 4",
        "isHidden": false
      },
      {
        "id": "java-set-2-tc-2",
        "input": "3\n5 5 5",
        "expectedOutput": "5",
        "isHidden": false
      },
      {
        "id": "java-set-2-tc-3",
        "input": "4\n1 2 3 4",
        "expectedOutput": "1 2 3 4",
        "isHidden": false
      },
      {
        "id": "java-set-2-tc-4",
        "input": "5\n10 20 10 30 20",
        "expectedOutput": "10 20 30",
        "isHidden": true
      },
      {
        "id": "java-set-2-tc-5",
        "input": "1\n42",
        "expectedOutput": "42",
        "isHidden": true
      },
      {
        "id": "java-set-2-tc-6",
        "input": "7\n9 1 9 2 9 3 9",
        "expectedOutput": "1 2 3 9",
        "isHidden": true
      },
      {
        "id": "java-set-2-tc-7",
        "input": "5\n-5 0 5 -5 0",
        "expectedOutput": "-5 0 5",
        "isHidden": true
      },
      {
        "id": "java-set-2-tc-8",
        "input": "6\n100 50 100 25 50 75",
        "expectedOutput": "25 50 75 100",
        "isHidden": true
      },
      {
        "id": "java-set-2-tc-9",
        "input": "4\n3 2 1 0",
        "expectedOutput": "0 1 2 3",
        "isHidden": true
      },
      {
        "id": "java-set-2-tc-10",
        "input": "5\n8 8 8 8 9",
        "expectedOutput": "8 9",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-set-3",
    "languageId": "java",
    "language": "java",
    "level": "intermediate",
    "topicId": "java-set-hashset-treeset",
    "title": "Intersection of Two Sets in Java",
    "slug": "intersection-of-two-sets-in-java",
    "difficulty": "medium",
    "problemStatement": "Given two sets of integers A and B, find their intersection using setA.retainAll(setB). Print the intersection sorted in ascending order separated by space. If empty, print \"EMPTY\".",
    "description": "Given two sets of integers A and B, find their intersection using setA.retainAll(setB). Print the intersection sorted in ascending order separated by space. If empty, print \"EMPTY\".",
    "inputFormat": "First line size of A and elements; Second line size of B and elements.",
    "outputFormat": "Print space-separated sorted intersection or \"EMPTY\".",
    "constraints": [
      "1 <= sizes <= 10^4"
    ],
    "examples": [
      {
        "input": "3 1 2 3\n3 2 3 4",
        "output": "2 3",
        "explanation": "2 and 3 in both."
      },
      {
        "input": "2 1 2\n2 3 4",
        "output": "EMPTY",
        "explanation": "No common elements."
      },
      {
        "input": "2 5 10\n2 5 10",
        "output": "5 10",
        "explanation": "Equal sets."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-set-3-tc-1",
        "input": "3 1 2 3\n3 2 3 4",
        "expectedOutput": "2 3",
        "isHidden": false
      },
      {
        "id": "java-set-3-tc-2",
        "input": "2 1 2\n2 3 4",
        "expectedOutput": "EMPTY",
        "isHidden": false
      },
      {
        "id": "java-set-3-tc-3",
        "input": "2 5 10\n2 5 10",
        "expectedOutput": "5 10",
        "isHidden": false
      },
      {
        "id": "java-set-3-tc-4",
        "input": "4 1 3 5 7\n4 2 4 6 8",
        "expectedOutput": "EMPTY",
        "isHidden": true
      },
      {
        "id": "java-set-3-tc-5",
        "input": "3 10 20 30\n3 20 30 40",
        "expectedOutput": "20 30",
        "isHidden": true
      },
      {
        "id": "java-set-3-tc-6",
        "input": "1 100\n1 100",
        "expectedOutput": "100",
        "isHidden": true
      },
      {
        "id": "java-set-3-tc-7",
        "input": "1 10\n1 20",
        "expectedOutput": "EMPTY",
        "isHidden": true
      },
      {
        "id": "java-set-3-tc-8",
        "input": "3 5 6 7\n2 6 7",
        "expectedOutput": "6 7",
        "isHidden": true
      },
      {
        "id": "java-set-3-tc-9",
        "input": "4 2 4 6 8\n2 4 8",
        "expectedOutput": "4 8",
        "isHidden": true
      },
      {
        "id": "java-set-3-tc-10",
        "input": "3 0 1 2\n3 -1 0 1",
        "expectedOutput": "0 1",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-map-1",
    "languageId": "java",
    "language": "java",
    "level": "intermediate",
    "topicId": "java-map-hashmap-treemap",
    "title": "Word Frequency Counter with HashMap",
    "slug": "word-frequency-counter-with-hashmap",
    "difficulty": "easy",
    "problemStatement": "Given a sentence of space-separated words, count the frequency of each word using HashMap. Print words sorted alphabetically in format \"word:count\" separated by spaces.",
    "description": "Given a sentence of space-separated words, count the frequency of each word using HashMap. Print words sorted alphabetically in format \"word:count\" separated by spaces.",
    "inputFormat": "A line of words.",
    "outputFormat": "Print space-separated sorted \"word:count\" pairs.",
    "constraints": [
      "1 <= words <= 10^4"
    ],
    "examples": [
      {
        "input": "apple banana apple cherry banana apple",
        "output": "apple:3 banana:2 cherry:1",
        "explanation": "Counts."
      },
      {
        "input": "cat dog cat dog bird",
        "output": "bird:1 cat:2 dog:2",
        "explanation": "Alphabetical."
      },
      {
        "input": "java java",
        "output": "java:2",
        "explanation": "2 occurrences."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-map-1-tc-1",
        "input": "apple banana apple cherry banana apple",
        "expectedOutput": "apple:3 banana:2 cherry:1",
        "isHidden": false
      },
      {
        "id": "java-map-1-tc-2",
        "input": "cat dog cat dog bird",
        "expectedOutput": "bird:1 cat:2 dog:2",
        "isHidden": false
      },
      {
        "id": "java-map-1-tc-3",
        "input": "java java",
        "expectedOutput": "java:2",
        "isHidden": false
      },
      {
        "id": "java-map-1-tc-4",
        "input": "a b a b c a",
        "expectedOutput": "a:3 b:2 c:1",
        "isHidden": true
      },
      {
        "id": "java-map-1-tc-5",
        "input": "one two three",
        "expectedOutput": "one:1 three:1 two:1",
        "isHidden": true
      },
      {
        "id": "java-map-1-tc-6",
        "input": "code test code test deploy",
        "expectedOutput": "code:2 deploy:1 test:2",
        "isHidden": true
      },
      {
        "id": "java-map-1-tc-7",
        "input": "hello world hello",
        "expectedOutput": "hello:2 world:1",
        "isHidden": true
      },
      {
        "id": "java-map-1-tc-8",
        "input": "red blue green red green yellow",
        "expectedOutput": "blue:1 green:2 red:2 yellow:1",
        "isHidden": true
      },
      {
        "id": "java-map-1-tc-9",
        "input": "x y z",
        "expectedOutput": "x:1 y:1 z:1",
        "isHidden": true
      },
      {
        "id": "java-map-1-tc-10",
        "input": "go go go",
        "expectedOutput": "go:3",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-map-2",
    "languageId": "java",
    "language": "java",
    "level": "intermediate",
    "topicId": "java-map-hashmap-treemap",
    "title": "First Non-Repeating Character Using Map",
    "slug": "first-non-repeating-character-using-map",
    "difficulty": "medium",
    "problemStatement": "Given a string S, find the first non-repeating character using a frequency Map. Print the character. If no non-repeating character exists, print \"-1\".",
    "description": "Given a string S, find the first non-repeating character using a frequency Map. Print the character. If no non-repeating character exists, print \"-1\".",
    "inputFormat": "A string S.",
    "outputFormat": "Print character or -1.",
    "constraints": [
      "1 <= len(S) <= 10^5"
    ],
    "examples": [
      {
        "input": "leetcode",
        "output": "l",
        "explanation": "l is first non-repeating."
      },
      {
        "input": "loveleetcode",
        "output": "v",
        "explanation": "v is first non-repeating."
      },
      {
        "input": "aabb",
        "output": "-1",
        "explanation": "All repeat."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-map-2-tc-1",
        "input": "leetcode",
        "expectedOutput": "l",
        "isHidden": false
      },
      {
        "id": "java-map-2-tc-2",
        "input": "loveleetcode",
        "expectedOutput": "v",
        "isHidden": false
      },
      {
        "id": "java-map-2-tc-3",
        "input": "aabb",
        "expectedOutput": "-1",
        "isHidden": false
      },
      {
        "id": "java-map-2-tc-4",
        "input": "java",
        "expectedOutput": "j",
        "isHidden": true
      },
      {
        "id": "java-map-2-tc-5",
        "input": "banana",
        "expectedOutput": "b",
        "isHidden": true
      },
      {
        "id": "java-map-2-tc-6",
        "input": "swiss",
        "expectedOutput": "w",
        "isHidden": true
      },
      {
        "id": "java-map-2-tc-7",
        "input": "racecar",
        "expectedOutput": "e",
        "isHidden": true
      },
      {
        "id": "java-map-2-tc-8",
        "input": "abcdef",
        "expectedOutput": "a",
        "isHidden": true
      },
      {
        "id": "java-map-2-tc-9",
        "input": "aaaa",
        "expectedOutput": "-1",
        "isHidden": true
      },
      {
        "id": "java-map-2-tc-10",
        "input": "antigravity",
        "expectedOutput": "n",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-map-3",
    "languageId": "java",
    "language": "java",
    "level": "intermediate",
    "topicId": "java-map-hashmap-treemap",
    "title": "Two Sum Target Lookup Using HashMap",
    "slug": "two-sum-target-lookup-using-hashmap",
    "difficulty": "medium",
    "problemStatement": "Given N integers and target T, find two distinct indices i and j (0-indexed, i < j) such that arr[i] + arr[j] == T in O(N) using HashMap. Print \"i j\". If none, print \"-1 -1\".",
    "description": "Given N integers and target T, find two distinct indices i and j (0-indexed, i < j) such that arr[i] + arr[j] == T in O(N) using HashMap. Print \"i j\". If none, print \"-1 -1\".",
    "inputFormat": "First line N and T, second line N space-separated integers.",
    "outputFormat": "Print \"i j\" or \"-1 -1\".",
    "constraints": [
      "2 <= N <= 10^5"
    ],
    "examples": [
      {
        "input": "4 9\n2 7 11 15",
        "output": "0 1",
        "explanation": "2 + 7 = 9 at indices 0 and 1."
      },
      {
        "input": "3 6\n3 2 4",
        "output": "1 2",
        "explanation": "2 + 4 = 6 at 1 and 2."
      },
      {
        "input": "4 10\n1 2 3 4",
        "output": "-1 -1",
        "explanation": "None sum to 10."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-map-3-tc-1",
        "input": "4 9\n2 7 11 15",
        "expectedOutput": "0 1",
        "isHidden": false
      },
      {
        "id": "java-map-3-tc-2",
        "input": "3 6\n3 2 4",
        "expectedOutput": "1 2",
        "isHidden": false
      },
      {
        "id": "java-map-3-tc-3",
        "input": "4 10\n1 2 3 4",
        "expectedOutput": "-1 -1",
        "isHidden": false
      },
      {
        "id": "java-map-3-tc-4",
        "input": "2 6\n3 3",
        "expectedOutput": "0 1",
        "isHidden": true
      },
      {
        "id": "java-map-3-tc-5",
        "input": "5 0\n-5 2 3 5 1",
        "expectedOutput": "0 3",
        "isHidden": true
      },
      {
        "id": "java-map-3-tc-6",
        "input": "5 100\n10 20 30 70 80",
        "expectedOutput": "1 4",
        "isHidden": true
      },
      {
        "id": "java-map-3-tc-7",
        "input": "6 14\n1 3 5 7 9 11",
        "expectedOutput": "1 5",
        "isHidden": true
      },
      {
        "id": "java-map-3-tc-8",
        "input": "3 -5\n-2 -3 4",
        "expectedOutput": "0 1",
        "isHidden": true
      },
      {
        "id": "java-map-3-tc-9",
        "input": "4 8\n4 2 6 4",
        "expectedOutput": "0 3",
        "isHidden": true
      },
      {
        "id": "java-map-3-tc-10",
        "input": "5 25\n5 10 15 20 30",
        "expectedOutput": "0 3",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-map-4",
    "languageId": "java",
    "language": "java",
    "level": "intermediate",
    "topicId": "java-map-hashmap-treemap",
    "title": "Sorted Phone Directory with TreeMap",
    "slug": "sorted-phone-directory-with-treemap",
    "difficulty": "medium",
    "problemStatement": "Given N contacts (name and phone number), store in TreeMap to maintain natural sorted order of names. Print each contact as \"name:phone\" separated by spaces.",
    "description": "Given N contacts (name and phone number), store in TreeMap to maintain natural sorted order of names. Print each contact as \"name:phone\" separated by spaces.",
    "inputFormat": "First line N, next N lines each contain name and phone.",
    "outputFormat": "Print space-separated sorted \"name:phone\" pairs.",
    "constraints": [
      "1 <= N <= 1000"
    ],
    "examples": [
      {
        "input": "3\nBob 123\nAlice 456\nCharlie 789",
        "output": "Alice:456 Bob:123 Charlie:789",
        "explanation": "Sorted by name."
      },
      {
        "input": "2\nDan 555\nAmy 111",
        "output": "Amy:111 Dan:555",
        "explanation": "Amy before Dan."
      },
      {
        "input": "1\nSolo 999",
        "output": "Solo:999",
        "explanation": "Single contact."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-map-4-tc-1",
        "input": "3\nBob 123\nAlice 456\nCharlie 789",
        "expectedOutput": "Alice:456 Bob:123 Charlie:789",
        "isHidden": false
      },
      {
        "id": "java-map-4-tc-2",
        "input": "2\nDan 555\nAmy 111",
        "expectedOutput": "Amy:111 Dan:555",
        "isHidden": false
      },
      {
        "id": "java-map-4-tc-3",
        "input": "1\nSolo 999",
        "expectedOutput": "Solo:999",
        "isHidden": false
      },
      {
        "id": "java-map-4-tc-4",
        "input": "4\nDave 4\nCarol 3\nBob 2\nAlice 1",
        "expectedOutput": "Alice:1 Bob:2 Carol:3 Dave:4",
        "isHidden": true
      },
      {
        "id": "java-map-4-tc-5",
        "input": "3\nZack 90\nMike 50\nAlex 10",
        "expectedOutput": "Alex:10 Mike:50 Zack:90",
        "isHidden": true
      },
      {
        "id": "java-map-4-tc-6",
        "input": "2\nJohn 100\nJane 200",
        "expectedOutput": "Jane:200 John:100",
        "isHidden": true
      },
      {
        "id": "java-map-4-tc-7",
        "input": "3\nPete 77\nPaul 88\nMary 99",
        "expectedOutput": "Mary:99 Paul:88 Pete:77",
        "isHidden": true
      },
      {
        "id": "java-map-4-tc-8",
        "input": "4\nTom 10\nJerry 20\nSpike 30\nTyke 40",
        "expectedOutput": "Jerry:20 Spike:30 Tom:10 Tyke:40",
        "isHidden": true
      },
      {
        "id": "java-map-4-tc-9",
        "input": "2\nK1 111\nK2 222",
        "expectedOutput": "K1:111 K2:222",
        "isHidden": true
      },
      {
        "id": "java-map-4-tc-10",
        "input": "3\nB 2\nA 1\nC 3",
        "expectedOutput": "A:1 B:2 C:3",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-lam-1",
    "languageId": "java",
    "language": "java",
    "level": "intermediate",
    "topicId": "java-lambdas-functional-interfaces",
    "title": "Predicate Lambda for Even Numbers",
    "slug": "predicate-lambda-for-even-numbers",
    "difficulty": "easy",
    "problemStatement": "Use Predicate<Integer> isEven = n -> n % 2 == 0 to filter N numbers. Print even numbers separated by space. If none, print \"NONE\".",
    "description": "Use Predicate<Integer> isEven = n -> n % 2 == 0 to filter N numbers. Print even numbers separated by space. If none, print \"NONE\".",
    "inputFormat": "First line N, second line N space-separated integers.",
    "outputFormat": "Print space-separated even numbers or \"NONE\".",
    "constraints": [
      "1 <= N <= 10^4"
    ],
    "examples": [
      {
        "input": "5\n1 2 3 4 5",
        "output": "2 4",
        "explanation": "2 and 4 are even."
      },
      {
        "input": "3\n1 3 5",
        "output": "NONE",
        "explanation": "No evens."
      },
      {
        "input": "3\n2 4 6",
        "output": "2 4 6",
        "explanation": "All even."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-lam-1-tc-1",
        "input": "5\n1 2 3 4 5",
        "expectedOutput": "2 4",
        "isHidden": false
      },
      {
        "id": "java-lam-1-tc-2",
        "input": "3\n1 3 5",
        "expectedOutput": "NONE",
        "isHidden": false
      },
      {
        "id": "java-lam-1-tc-3",
        "input": "3\n2 4 6",
        "expectedOutput": "2 4 6",
        "isHidden": false
      },
      {
        "id": "java-lam-1-tc-4",
        "input": "1\n8",
        "expectedOutput": "8",
        "isHidden": true
      },
      {
        "id": "java-lam-1-tc-5",
        "input": "4\n0 1 2 3",
        "expectedOutput": "0 2",
        "isHidden": true
      },
      {
        "id": "java-lam-1-tc-6",
        "input": "5\n-2 3 -4 5 6",
        "expectedOutput": "-2 -4 6",
        "isHidden": true
      },
      {
        "id": "java-lam-1-tc-7",
        "input": "4\n7 9 11 13",
        "expectedOutput": "NONE",
        "isHidden": true
      },
      {
        "id": "java-lam-1-tc-8",
        "input": "6\n10 15 20 25 30 35",
        "expectedOutput": "10 20 30",
        "isHidden": true
      },
      {
        "id": "java-lam-1-tc-9",
        "input": "2\n4 4",
        "expectedOutput": "4 4",
        "isHidden": true
      },
      {
        "id": "java-lam-1-tc-10",
        "input": "5\n2 2 2 2 2",
        "expectedOutput": "2 2 2 2 2",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-lam-2",
    "languageId": "java",
    "language": "java",
    "level": "intermediate",
    "topicId": "java-lambdas-functional-interfaces",
    "title": "Function<String, String> Transformer Lambda",
    "slug": "function-string-string-transformer-lambda",
    "difficulty": "medium",
    "problemStatement": "Use java.util.function.Function<String, String> lambda to transform each word in input: append suffix \"_PROCESSED\". Print space-separated transformed words.",
    "description": "Use java.util.function.Function<String, String> lambda to transform each word in input: append suffix \"_PROCESSED\". Print space-separated transformed words.",
    "inputFormat": "A line of space-separated words.",
    "outputFormat": "Print space-separated transformed words.",
    "constraints": [
      "1 <= words <= 1000"
    ],
    "examples": [
      {
        "input": "data task job",
        "output": "data_PROCESSED task_PROCESSED job_PROCESSED",
        "explanation": "Suffix appended."
      },
      {
        "input": "item",
        "output": "item_PROCESSED",
        "explanation": "Single word."
      },
      {
        "input": "A B",
        "output": "A_PROCESSED B_PROCESSED",
        "explanation": "Short words."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-lam-2-tc-1",
        "input": "data task job",
        "expectedOutput": "data_PROCESSED task_PROCESSED job_PROCESSED",
        "isHidden": false
      },
      {
        "id": "java-lam-2-tc-2",
        "input": "item",
        "expectedOutput": "item_PROCESSED",
        "isHidden": false
      },
      {
        "id": "java-lam-2-tc-3",
        "input": "A B",
        "expectedOutput": "A_PROCESSED B_PROCESSED",
        "isHidden": false
      },
      {
        "id": "java-lam-2-tc-4",
        "input": "test code deploy",
        "expectedOutput": "test_PROCESSED code_PROCESSED deploy_PROCESSED",
        "isHidden": true
      },
      {
        "id": "java-lam-2-tc-5",
        "input": "one two three",
        "expectedOutput": "one_PROCESSED two_PROCESSED three_PROCESSED",
        "isHidden": true
      },
      {
        "id": "java-lam-2-tc-6",
        "input": "stream lambda function",
        "expectedOutput": "stream_PROCESSED lambda_PROCESSED function_PROCESSED",
        "isHidden": true
      },
      {
        "id": "java-lam-2-tc-7",
        "input": "alpha beta",
        "expectedOutput": "alpha_PROCESSED beta_PROCESSED",
        "isHidden": true
      },
      {
        "id": "java-lam-2-tc-8",
        "input": "run",
        "expectedOutput": "run_PROCESSED",
        "isHidden": true
      },
      {
        "id": "java-lam-2-tc-9",
        "input": "x y z",
        "expectedOutput": "x_PROCESSED y_PROCESSED z_PROCESSED",
        "isHidden": true
      },
      {
        "id": "java-lam-2-tc-10",
        "input": "hello world",
        "expectedOutput": "hello_PROCESSED world_PROCESSED",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-lam-3",
    "languageId": "java",
    "language": "java",
    "level": "intermediate",
    "topicId": "java-lambdas-functional-interfaces",
    "title": "BinaryOperator Custom Calculator Lambda",
    "slug": "binaryoperator-custom-calculator-lambda",
    "difficulty": "medium",
    "problemStatement": "Use BinaryOperator<Integer> to perform operation based on operator code (\"ADD\", \"SUB\", \"MUL\"). Given op and two integers A and B, print computed result.",
    "description": "Use BinaryOperator<Integer> to perform operation based on operator code (\"ADD\", \"SUB\", \"MUL\"). Given op and two integers A and B, print computed result.",
    "inputFormat": "Operator string op, followed by two integers A and B.",
    "outputFormat": "Print computed integer result.",
    "constraints": [
      "-10^5 <= A, B <= 10^5"
    ],
    "examples": [
      {
        "input": "ADD 10 20",
        "output": "30",
        "explanation": "10 + 20 = 30."
      },
      {
        "input": "MUL 5 6",
        "output": "30",
        "explanation": "5 * 6 = 30."
      },
      {
        "input": "SUB 15 8",
        "output": "7",
        "explanation": "15 - 8 = 7."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-lam-3-tc-1",
        "input": "ADD 10 20",
        "expectedOutput": "30",
        "isHidden": false
      },
      {
        "id": "java-lam-3-tc-2",
        "input": "MUL 5 6",
        "expectedOutput": "30",
        "isHidden": false
      },
      {
        "id": "java-lam-3-tc-3",
        "input": "SUB 15 8",
        "expectedOutput": "7",
        "isHidden": false
      },
      {
        "id": "java-lam-3-tc-4",
        "input": "ADD 100 -50",
        "expectedOutput": "50",
        "isHidden": true
      },
      {
        "id": "java-lam-3-tc-5",
        "input": "MUL -4 5",
        "expectedOutput": "-20",
        "isHidden": true
      },
      {
        "id": "java-lam-3-tc-6",
        "input": "SUB 0 10",
        "expectedOutput": "-10",
        "isHidden": true
      },
      {
        "id": "java-lam-3-tc-7",
        "input": "ADD 0 0",
        "expectedOutput": "0",
        "isHidden": true
      },
      {
        "id": "java-lam-3-tc-8",
        "input": "MUL 12 12",
        "expectedOutput": "144",
        "isHidden": true
      },
      {
        "id": "java-lam-3-tc-9",
        "input": "SUB 50 50",
        "expectedOutput": "0",
        "isHidden": true
      },
      {
        "id": "java-lam-3-tc-10",
        "input": "MUL 0 100",
        "expectedOutput": "0",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-stream-1",
    "languageId": "java",
    "language": "java",
    "level": "intermediate",
    "topicId": "java-stream-api",
    "title": "Filter and Square Evens with Stream API",
    "slug": "filter-and-square-evens-with-stream-api",
    "difficulty": "easy",
    "problemStatement": "Given N integers, use Java Stream API (list.stream().filter(...).map(...).toList()) to select even numbers, square them, and print space-separated. If none, print \"NONE\".",
    "description": "Given N integers, use Java Stream API (list.stream().filter(...).map(...).toList()) to select even numbers, square them, and print space-separated. If none, print \"NONE\".",
    "inputFormat": "First line N, second line N space-separated integers.",
    "outputFormat": "Print space-separated squared integers or \"NONE\".",
    "constraints": [
      "1 <= N <= 10^4"
    ],
    "examples": [
      {
        "input": "5\n1 2 3 4 5",
        "output": "4 16",
        "explanation": "2^2 = 4, 4^2 = 16."
      },
      {
        "input": "3\n1 3 5",
        "output": "NONE",
        "explanation": "No evens."
      },
      {
        "input": "3\n2 4 6",
        "output": "4 16 36",
        "explanation": "All evens."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-stream-1-tc-1",
        "input": "5\n1 2 3 4 5",
        "expectedOutput": "4 16",
        "isHidden": false
      },
      {
        "id": "java-stream-1-tc-2",
        "input": "3\n1 3 5",
        "expectedOutput": "NONE",
        "isHidden": false
      },
      {
        "id": "java-stream-1-tc-3",
        "input": "3\n2 4 6",
        "expectedOutput": "4 16 36",
        "isHidden": false
      },
      {
        "id": "java-stream-1-tc-4",
        "input": "1\n8",
        "expectedOutput": "64",
        "isHidden": true
      },
      {
        "id": "java-stream-1-tc-5",
        "input": "4\n0 1 2 3",
        "expectedOutput": "0 4",
        "isHidden": true
      },
      {
        "id": "java-stream-1-tc-6",
        "input": "5\n-2 3 -4 5 6",
        "expectedOutput": "4 16 36",
        "isHidden": true
      },
      {
        "id": "java-stream-1-tc-7",
        "input": "4\n7 9 11 13",
        "expectedOutput": "NONE",
        "isHidden": true
      },
      {
        "id": "java-stream-1-tc-8",
        "input": "6\n10 15 20 25 30 35",
        "expectedOutput": "100 400 900",
        "isHidden": true
      },
      {
        "id": "java-stream-1-tc-9",
        "input": "2\n4 4",
        "expectedOutput": "16 16",
        "isHidden": true
      },
      {
        "id": "java-stream-1-tc-10",
        "input": "5\n2 2 2 2 2",
        "expectedOutput": "4 4 4 4 4",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-stream-2",
    "languageId": "java",
    "language": "java",
    "level": "intermediate",
    "topicId": "java-stream-api",
    "title": "Sum and Average with Stream Reduce",
    "slug": "sum-and-average-with-stream-reduce",
    "difficulty": "medium",
    "problemStatement": "Given N integers, use Stream reduction or IntStream.summaryStatistics() to compute sum and average (rounded to 2 decimal places). Print \"Sum: <sum> Avg: <avg>\".",
    "description": "Given N integers, use Stream reduction or IntStream.summaryStatistics() to compute sum and average (rounded to 2 decimal places). Print \"Sum: <sum> Avg: <avg>\".",
    "inputFormat": "First line N, second line N space-separated integers.",
    "outputFormat": "Print \"Sum: <sum> Avg: <avg>\".",
    "constraints": [
      "1 <= N <= 10^4"
    ],
    "examples": [
      {
        "input": "4\n1 2 3 4",
        "output": "Sum: 10 Avg: 2.50",
        "explanation": "Sum 10, avg 2.5."
      },
      {
        "input": "3\n10 20 30",
        "output": "Sum: 60 Avg: 20.00",
        "explanation": "Avg 20."
      },
      {
        "input": "1\n50",
        "output": "Sum: 50 Avg: 50.00",
        "explanation": "Single element."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-stream-2-tc-1",
        "input": "4\n1 2 3 4",
        "expectedOutput": "Sum: 10 Avg: 2.50",
        "isHidden": false
      },
      {
        "id": "java-stream-2-tc-2",
        "input": "3\n10 20 30",
        "expectedOutput": "Sum: 60 Avg: 20.00",
        "isHidden": false
      },
      {
        "id": "java-stream-2-tc-3",
        "input": "1\n50",
        "expectedOutput": "Sum: 50 Avg: 50.00",
        "isHidden": false
      },
      {
        "id": "java-stream-2-tc-4",
        "input": "5\n5 5 5 5 5",
        "expectedOutput": "Sum: 25 Avg: 5.00",
        "isHidden": true
      },
      {
        "id": "java-stream-2-tc-5",
        "input": "4\n-10 10 -20 20",
        "expectedOutput": "Sum: 0 Avg: 0.00",
        "isHidden": true
      },
      {
        "id": "java-stream-2-tc-6",
        "input": "5\n10 15 20 25 30",
        "expectedOutput": "Sum: 100 Avg: 20.00",
        "isHidden": true
      },
      {
        "id": "java-stream-2-tc-7",
        "input": "3\n7 8 9",
        "expectedOutput": "Sum: 24 Avg: 8.00",
        "isHidden": true
      },
      {
        "id": "java-stream-2-tc-8",
        "input": "5\n1 3 5 7 9",
        "expectedOutput": "Sum: 25 Avg: 5.00",
        "isHidden": true
      },
      {
        "id": "java-stream-2-tc-9",
        "input": "2\n100 200",
        "expectedOutput": "Sum: 300 Avg: 150.00",
        "isHidden": true
      },
      {
        "id": "java-stream-2-tc-10",
        "input": "6\n2 4 6 8 10 12",
        "expectedOutput": "Sum: 42 Avg: 7.00",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-stream-3",
    "languageId": "java",
    "language": "java",
    "level": "intermediate",
    "topicId": "java-stream-api",
    "title": "Group Strings by Length with Collectors.groupingBy",
    "slug": "group-strings-by-length-with-collectors-groupingby",
    "difficulty": "medium",
    "problemStatement": "Given N words, group them by length using Collectors.groupingBy(String::length). For each length in ascending order, print \"Len <len>: <words_space_separated_sorted>\".",
    "description": "Given N words, group them by length using Collectors.groupingBy(String::length). For each length in ascending order, print \"Len <len>: <words_space_separated_sorted>\".",
    "inputFormat": "First line N, second line N space-separated words.",
    "outputFormat": "Lines formatted as \"Len <len>: <sorted_words>\".",
    "constraints": [
      "1 <= N <= 1000"
    ],
    "examples": [
      {
        "input": "4\napple cat dog banana",
        "output": "Len 3: cat dog\nLen 5: apple\nLen 6: banana",
        "explanation": "Grouped by length."
      },
      {
        "input": "3\na bb ccc",
        "output": "Len 1: a\nLen 2: bb\nLen 3: ccc",
        "explanation": "Different lengths."
      },
      {
        "input": "2\nhi go",
        "output": "Len 2: go hi",
        "explanation": "Sorted alphabetical inside length."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-stream-3-tc-1",
        "input": "4\napple cat dog banana",
        "expectedOutput": "Len 3: cat dog\nLen 5: apple\nLen 6: banana",
        "isHidden": false
      },
      {
        "id": "java-stream-3-tc-2",
        "input": "3\na bb ccc",
        "expectedOutput": "Len 1: a\nLen 2: bb\nLen 3: ccc",
        "isHidden": false
      },
      {
        "id": "java-stream-3-tc-3",
        "input": "2\nhi go",
        "expectedOutput": "Len 2: go hi",
        "isHidden": false
      },
      {
        "id": "java-stream-3-tc-4",
        "input": "5\none two three four five",
        "expectedOutput": "Len 3: one two\nLen 4: five four\nLen 5: three",
        "isHidden": true
      },
      {
        "id": "java-stream-3-tc-5",
        "input": "3\nz y x",
        "expectedOutput": "Len 1: x y z",
        "isHidden": true
      },
      {
        "id": "java-stream-3-tc-6",
        "input": "4\nblue red pink teal",
        "expectedOutput": "Len 3: red\nLen 4: blue pink teal",
        "isHidden": true
      },
      {
        "id": "java-stream-3-tc-7",
        "input": "2\njava python",
        "expectedOutput": "Len 4: java\nLen 6: python",
        "isHidden": true
      },
      {
        "id": "java-stream-3-tc-8",
        "input": "3\ncat bat rat",
        "expectedOutput": "Len 3: bat cat rat",
        "isHidden": true
      },
      {
        "id": "java-stream-3-tc-9",
        "input": "1\nsolo",
        "expectedOutput": "Len 4: solo",
        "isHidden": true
      },
      {
        "id": "java-stream-3-tc-10",
        "input": "4\naaa bb c dddd",
        "expectedOutput": "Len 1: c\nLen 2: bb\nLen 3: aaa\nLen 4: dddd",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-stream-4",
    "languageId": "java",
    "language": "java",
    "level": "intermediate",
    "topicId": "java-stream-api",
    "title": "Top K Highest Scores with Stream Pipeline",
    "slug": "top-k-highest-scores-with-stream-pipeline",
    "difficulty": "medium",
    "problemStatement": "Given N integers and K, use Streams (.sorted(Comparator.reverseOrder()).limit(K)) to extract the top K highest values. Print them space-separated.",
    "description": "Given N integers and K, use Streams (.sorted(Comparator.reverseOrder()).limit(K)) to extract the top K highest values. Print them space-separated.",
    "inputFormat": "First line N and K, second line N space-separated integers.",
    "outputFormat": "Print space-separated top K values descending.",
    "constraints": [
      "1 <= K <= N <= 10^5"
    ],
    "examples": [
      {
        "input": "6 3\n10 50 30 90 20 70",
        "output": "90 70 50",
        "explanation": "Top 3 highest."
      },
      {
        "input": "3 1\n5 15 10",
        "output": "15",
        "explanation": "Top 1 highest."
      },
      {
        "input": "4 4\n1 2 3 4",
        "output": "4 3 2 1",
        "explanation": "All elements."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-stream-4-tc-1",
        "input": "6 3\n10 50 30 90 20 70",
        "expectedOutput": "90 70 50",
        "isHidden": false
      },
      {
        "id": "java-stream-4-tc-2",
        "input": "3 1\n5 15 10",
        "expectedOutput": "15",
        "isHidden": false
      },
      {
        "id": "java-stream-4-tc-3",
        "input": "4 4\n1 2 3 4",
        "expectedOutput": "4 3 2 1",
        "isHidden": false
      },
      {
        "id": "java-stream-4-tc-4",
        "input": "5 2\n100 40 80 90 20",
        "expectedOutput": "100 90",
        "isHidden": true
      },
      {
        "id": "java-stream-4-tc-5",
        "input": "4 2\n-5 -1 -10 -2",
        "expectedOutput": "-1 -2",
        "isHidden": true
      },
      {
        "id": "java-stream-4-tc-6",
        "input": "5 3\n7 7 8 8 9",
        "expectedOutput": "9 8 8",
        "isHidden": true
      },
      {
        "id": "java-stream-4-tc-7",
        "input": "1 1\n42",
        "expectedOutput": "42",
        "isHidden": true
      },
      {
        "id": "java-stream-4-tc-8",
        "input": "6 3\n50 50 50 50 50 50",
        "expectedOutput": "50 50 50",
        "isHidden": true
      },
      {
        "id": "java-stream-4-tc-9",
        "input": "5 2\n12 45 23 89 67",
        "expectedOutput": "89 67",
        "isHidden": true
      },
      {
        "id": "java-stream-4-tc-10",
        "input": "4 3\n3 6 9 12",
        "expectedOutput": "12 9 6",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-opt-1",
    "languageId": "java",
    "language": "java",
    "level": "intermediate",
    "topicId": "java-optional-and-time",
    "title": "Safe String Lookup with Optional",
    "slug": "safe-string-lookup-with-optional",
    "difficulty": "easy",
    "problemStatement": "Given N key-value pairs and a query key Q, lookup in a Map returning Optional<String>. If present, print \"FOUND: <value>\", else print \"NOT FOUND\".",
    "description": "Given N key-value pairs and a query key Q, lookup in a Map returning Optional<String>. If present, print \"FOUND: <value>\", else print \"NOT FOUND\".",
    "inputFormat": "First line N, next N lines \"key value\", last line Q.",
    "outputFormat": "Print \"FOUND: <val>\" or \"NOT FOUND\".",
    "constraints": [
      "1 <= N <= 1000"
    ],
    "examples": [
      {
        "input": "2\nuser Alice\nrole admin\nuser",
        "output": "FOUND: Alice",
        "explanation": "user key found."
      },
      {
        "input": "1\nitem Book\nprice",
        "output": "NOT FOUND",
        "explanation": "price key not in map."
      },
      {
        "input": "2\nk1 v1\nk2 v2\nk2",
        "output": "FOUND: v2",
        "explanation": "k2 found."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-opt-1-tc-1",
        "input": "2\nuser Alice\nrole admin\nuser",
        "expectedOutput": "FOUND: Alice",
        "isHidden": false
      },
      {
        "id": "java-opt-1-tc-2",
        "input": "1\nitem Book\nprice",
        "expectedOutput": "NOT FOUND",
        "isHidden": false
      },
      {
        "id": "java-opt-1-tc-3",
        "input": "2\nk1 v1\nk2 v2\nk2",
        "expectedOutput": "FOUND: v2",
        "isHidden": false
      },
      {
        "id": "java-opt-1-tc-4",
        "input": "3\nA 1\nB 2\nC 3\nB",
        "expectedOutput": "FOUND: 2",
        "isHidden": true
      },
      {
        "id": "java-opt-1-tc-5",
        "input": "2\nx 10\ny 20\nz",
        "expectedOutput": "NOT FOUND",
        "isHidden": true
      },
      {
        "id": "java-opt-1-tc-6",
        "input": "1\nname Bob\nname",
        "expectedOutput": "FOUND: Bob",
        "isHidden": true
      },
      {
        "id": "java-opt-1-tc-7",
        "input": "3\nid 101\nstatus ok\nenv prod\nenv",
        "expectedOutput": "FOUND: prod",
        "isHidden": true
      },
      {
        "id": "java-opt-1-tc-8",
        "input": "2\np 5\nq 6\nr",
        "expectedOutput": "NOT FOUND",
        "isHidden": true
      },
      {
        "id": "java-opt-1-tc-9",
        "input": "1\nalpha beta\ngamma",
        "expectedOutput": "NOT FOUND",
        "isHidden": true
      },
      {
        "id": "java-opt-1-tc-10",
        "input": "3\nred 1\ngreen 2\nblue 3\nblue",
        "expectedOutput": "FOUND: 3",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-opt-2",
    "languageId": "java",
    "language": "java",
    "level": "intermediate",
    "topicId": "java-optional-and-time",
    "title": "Days Between Two Dates with java.time.LocalDate",
    "slug": "days-between-two-dates-with-java-time-localdate",
    "difficulty": "medium",
    "problemStatement": "Given two ISO dates (YYYY-MM-DD), use java.time.LocalDate and java.time.temporal.ChronoUnit.DAYS.between(d1, d2) to compute days difference. Print absolute number of days.",
    "description": "Given two ISO dates (YYYY-MM-DD), use java.time.LocalDate and java.time.temporal.ChronoUnit.DAYS.between(d1, d2) to compute days difference. Print absolute number of days.",
    "inputFormat": "Two space-separated ISO date strings.",
    "outputFormat": "Print integer day difference.",
    "constraints": [
      "Valid ISO-8601 dates."
    ],
    "examples": [
      {
        "input": "2026-01-01 2026-01-10",
        "output": "9",
        "explanation": "9 days."
      },
      {
        "input": "2024-02-28 2024-03-01",
        "output": "2",
        "explanation": "2024 is leap year, includes Feb 29."
      },
      {
        "input": "2025-12-31 2026-01-01",
        "output": "1",
        "explanation": "1 day across year boundary."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-opt-2-tc-1",
        "input": "2026-01-01 2026-01-10",
        "expectedOutput": "9",
        "isHidden": false
      },
      {
        "id": "java-opt-2-tc-2",
        "input": "2024-02-28 2024-03-01",
        "expectedOutput": "2",
        "isHidden": false
      },
      {
        "id": "java-opt-2-tc-3",
        "input": "2025-12-31 2026-01-01",
        "expectedOutput": "1",
        "isHidden": false
      },
      {
        "id": "java-opt-2-tc-4",
        "input": "2026-05-10 2026-05-10",
        "expectedOutput": "0",
        "isHidden": true
      },
      {
        "id": "java-opt-2-tc-5",
        "input": "2026-01-01 2026-01-31",
        "expectedOutput": "30",
        "isHidden": true
      },
      {
        "id": "java-opt-2-tc-6",
        "input": "2026-01-01 2027-01-01",
        "expectedOutput": "365",
        "isHidden": true
      },
      {
        "id": "java-opt-2-tc-7",
        "input": "2024-01-01 2025-01-01",
        "expectedOutput": "366",
        "isHidden": true
      },
      {
        "id": "java-opt-2-tc-8",
        "input": "2026-03-01 2026-03-15",
        "expectedOutput": "14",
        "isHidden": true
      },
      {
        "id": "java-opt-2-tc-9",
        "input": "2026-07-04 2026-07-10",
        "expectedOutput": "6",
        "isHidden": true
      },
      {
        "id": "java-opt-2-tc-10",
        "input": "2026-10-01 2026-10-07",
        "expectedOutput": "6",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-opt-3",
    "languageId": "java",
    "language": "java",
    "level": "intermediate",
    "topicId": "java-optional-and-time",
    "title": "Format Date with DateTimeFormatter",
    "slug": "format-date-with-datetimeformatter",
    "difficulty": "medium",
    "problemStatement": "Given an ISO date (YYYY-MM-DD), parse using LocalDate and format using DateTimeFormatter.ofPattern(\"dd/MM/yyyy\"). Print the formatted date.",
    "description": "Given an ISO date (YYYY-MM-DD), parse using LocalDate and format using DateTimeFormatter.ofPattern(\"dd/MM/yyyy\"). Print the formatted date.",
    "inputFormat": "ISO date string YYYY-MM-DD.",
    "outputFormat": "Print date in dd/MM/yyyy format.",
    "constraints": [
      "Valid ISO date string."
    ],
    "examples": [
      {
        "input": "2026-10-07",
        "output": "07/10/2026",
        "explanation": "Formatted date."
      },
      {
        "input": "2025-01-01",
        "output": "01/01/2025",
        "explanation": "New year date."
      },
      {
        "input": "2024-02-29",
        "output": "29/02/2024",
        "explanation": "Leap year date."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-opt-3-tc-1",
        "input": "2026-10-07",
        "expectedOutput": "07/10/2026",
        "isHidden": false
      },
      {
        "id": "java-opt-3-tc-2",
        "input": "2025-01-01",
        "expectedOutput": "01/01/2025",
        "isHidden": false
      },
      {
        "id": "java-opt-3-tc-3",
        "input": "2024-02-29",
        "expectedOutput": "29/02/2024",
        "isHidden": false
      },
      {
        "id": "java-opt-3-tc-4",
        "input": "2023-12-25",
        "expectedOutput": "25/12/2023",
        "isHidden": true
      },
      {
        "id": "java-opt-3-tc-5",
        "input": "2026-05-15",
        "expectedOutput": "15/05/2026",
        "isHidden": true
      },
      {
        "id": "java-opt-3-tc-6",
        "input": "2026-07-04",
        "expectedOutput": "04/07/2026",
        "isHidden": true
      },
      {
        "id": "java-opt-3-tc-7",
        "input": "2026-09-30",
        "expectedOutput": "30/09/2026",
        "isHidden": true
      },
      {
        "id": "java-opt-3-tc-8",
        "input": "2026-11-11",
        "expectedOutput": "11/11/2026",
        "isHidden": true
      },
      {
        "id": "java-opt-3-tc-9",
        "input": "2026-08-15",
        "expectedOutput": "15/08/2026",
        "isHidden": true
      },
      {
        "id": "java-opt-3-tc-10",
        "input": "2026-03-08",
        "expectedOutput": "08/03/2026",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-jvm-1",
    "languageId": "java",
    "language": "java",
    "level": "advanced",
    "topicId": "java-jvm-memory-model",
    "title": "Pass-by-Value Object Reference Mutation in Java",
    "slug": "pass-by-value-object-reference-mutation-in-java",
    "difficulty": "medium",
    "problemStatement": "Demonstrate Java pass-by-value reference semantics: Given an object with an integer field val initialized to V. When modify(obj) sets val = val + delta, the mutation is visible in caller. Print \"Updated Val: <val>\".",
    "description": "Demonstrate Java pass-by-value reference semantics: Given an object with an integer field val initialized to V. When modify(obj) sets val = val + delta, the mutation is visible in caller. Print \"Updated Val: <val>\".",
    "inputFormat": "Initial value V and delta D.",
    "outputFormat": "Print \"Updated Val: <V+D>\".",
    "constraints": [
      "-10^6 <= V, D <= 10^6"
    ],
    "examples": [
      {
        "input": "10 5",
        "output": "Updated Val: 15",
        "explanation": "10 + 5 = 15."
      },
      {
        "input": "50 -20",
        "output": "Updated Val: 30",
        "explanation": "50 - 20 = 30."
      },
      {
        "input": "0 100",
        "output": "Updated Val: 100",
        "explanation": "0 + 100 = 100."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-jvm-1-tc-1",
        "input": "10 5",
        "expectedOutput": "Updated Val: 15",
        "isHidden": false
      },
      {
        "id": "java-jvm-1-tc-2",
        "input": "50 -20",
        "expectedOutput": "Updated Val: 30",
        "isHidden": false
      },
      {
        "id": "java-jvm-1-tc-3",
        "input": "0 100",
        "expectedOutput": "Updated Val: 100",
        "isHidden": false
      },
      {
        "id": "java-jvm-1-tc-4",
        "input": "100 200",
        "expectedOutput": "Updated Val: 300",
        "isHidden": true
      },
      {
        "id": "java-jvm-1-tc-5",
        "input": "-5 5",
        "expectedOutput": "Updated Val: 0",
        "isHidden": true
      },
      {
        "id": "java-jvm-1-tc-6",
        "input": "42 8",
        "expectedOutput": "Updated Val: 50",
        "isHidden": true
      },
      {
        "id": "java-jvm-1-tc-7",
        "input": "99 1",
        "expectedOutput": "Updated Val: 100",
        "isHidden": true
      },
      {
        "id": "java-jvm-1-tc-8",
        "input": "-10 -20",
        "expectedOutput": "Updated Val: -30",
        "isHidden": true
      },
      {
        "id": "java-jvm-1-tc-9",
        "input": "500 500",
        "expectedOutput": "Updated Val: 1000",
        "isHidden": true
      },
      {
        "id": "java-jvm-1-tc-10",
        "input": "25 75",
        "expectedOutput": "Updated Val: 100",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-jvm-2",
    "languageId": "java",
    "language": "java",
    "level": "advanced",
    "topicId": "java-jvm-memory-model",
    "title": "Deep Copy vs Shallow Copy Simulation",
    "slug": "deep-copy-vs-shallow-copy-simulation",
    "difficulty": "medium",
    "problemStatement": "Simulate deep copy of a 2D integer matrix of size R x C. Modifying the copy at (r, c) to newVal must NOT affect original matrix. Print original matrix values row by row space-separated.",
    "description": "Simulate deep copy of a 2D integer matrix of size R x C. Modifying the copy at (r, c) to newVal must NOT affect original matrix. Print original matrix values row by row space-separated.",
    "inputFormat": "R C, followed by matrix elements, followed by copy modification r c newVal.",
    "outputFormat": "Print original matrix elements space-separated.",
    "constraints": [
      "1 <= R, C <= 10"
    ],
    "examples": [
      {
        "input": "2 2\n1 2\n3 4\n0 0 99",
        "output": "1 2 3 4",
        "explanation": "Original unaffected by deep copy mutation."
      },
      {
        "input": "1 2\n5 10\n0 1 100",
        "output": "5 10",
        "explanation": "Original preserved."
      },
      {
        "input": "2 1\n7\n8\n1 0 0",
        "output": "7 8",
        "explanation": "Original preserved."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-jvm-2-tc-1",
        "input": "2 2\n1 2\n3 4\n0 0 99",
        "expectedOutput": "1 2 3 4",
        "isHidden": false
      },
      {
        "id": "java-jvm-2-tc-2",
        "input": "1 2\n5 10\n0 1 100",
        "expectedOutput": "5 10",
        "isHidden": false
      },
      {
        "id": "java-jvm-2-tc-3",
        "input": "2 1\n7\n8\n1 0 0",
        "expectedOutput": "7 8",
        "isHidden": false
      },
      {
        "id": "java-jvm-2-tc-4",
        "input": "2 3\n1 2 3\n4 5 6\n1 1 50",
        "expectedOutput": "1 2 3 4 5 6",
        "isHidden": true
      },
      {
        "id": "java-jvm-2-tc-5",
        "input": "1 1\n42\n0 0 0",
        "expectedOutput": "42",
        "isHidden": true
      },
      {
        "id": "java-jvm-2-tc-6",
        "input": "2 2\n10 20\n30 40\n1 0 999",
        "expectedOutput": "10 20 30 40",
        "isHidden": true
      },
      {
        "id": "java-jvm-2-tc-7",
        "input": "3 1\n1\n2\n3\n2 0 10",
        "expectedOutput": "1 2 3",
        "isHidden": true
      },
      {
        "id": "java-jvm-2-tc-8",
        "input": "2 2\n-1 -2\n-3 -4\n0 1 10",
        "expectedOutput": "-1 -2 -3 -4",
        "isHidden": true
      },
      {
        "id": "java-jvm-2-tc-9",
        "input": "1 3\n7 8 9\n0 2 0",
        "expectedOutput": "7 8 9",
        "isHidden": true
      },
      {
        "id": "java-jvm-2-tc-10",
        "input": "2 2\n5 5\n5 5\n0 0 1",
        "expectedOutput": "5 5 5 5",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-gc-1",
    "languageId": "java",
    "language": "java",
    "level": "advanced",
    "topicId": "java-garbage-collectors",
    "title": "WeakReference Cache Simulation",
    "slug": "weakreference-cache-simulation",
    "difficulty": "medium",
    "problemStatement": "Simulate a cache using WeakReference: Given key K and cached state flag (1 = still in memory, 0 = collected by GC). If 1, print \"CACHE HIT: <key>\", else print \"CACHE MISS: GC RECLAIMED\".",
    "description": "Simulate a cache using WeakReference: Given key K and cached state flag (1 = still in memory, 0 = collected by GC). If 1, print \"CACHE HIT: <key>\", else print \"CACHE MISS: GC RECLAIMED\".",
    "inputFormat": "Key string K and flag (1 or 0).",
    "outputFormat": "Print cache outcome.",
    "constraints": [
      "1 <= len(key) <= 50"
    ],
    "examples": [
      {
        "input": "User101 1",
        "output": "CACHE HIT: User101",
        "explanation": "Retained."
      },
      {
        "input": "User102 0",
        "output": "CACHE MISS: GC RECLAIMED",
        "explanation": "Collected."
      },
      {
        "input": "DataChunk 1",
        "output": "CACHE HIT: DataChunk",
        "explanation": "Hit."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-gc-1-tc-1",
        "input": "User101 1",
        "expectedOutput": "CACHE HIT: User101",
        "isHidden": false
      },
      {
        "id": "java-gc-1-tc-2",
        "input": "User102 0",
        "expectedOutput": "CACHE MISS: GC RECLAIMED",
        "isHidden": false
      },
      {
        "id": "java-gc-1-tc-3",
        "input": "DataChunk 1",
        "expectedOutput": "CACHE HIT: DataChunk",
        "isHidden": false
      },
      {
        "id": "java-gc-1-tc-4",
        "input": "ImageA 0",
        "expectedOutput": "CACHE MISS: GC RECLAIMED",
        "isHidden": true
      },
      {
        "id": "java-gc-1-tc-5",
        "input": "Token9 1",
        "expectedOutput": "CACHE HIT: Token9",
        "isHidden": true
      },
      {
        "id": "java-gc-1-tc-6",
        "input": "SessionB 0",
        "expectedOutput": "CACHE MISS: GC RECLAIMED",
        "isHidden": true
      },
      {
        "id": "java-gc-1-tc-7",
        "input": "CacheKey 1",
        "expectedOutput": "CACHE HIT: CacheKey",
        "isHidden": true
      },
      {
        "id": "java-gc-1-tc-8",
        "input": "Asset4 0",
        "expectedOutput": "CACHE MISS: GC RECLAIMED",
        "isHidden": true
      },
      {
        "id": "java-gc-1-tc-9",
        "input": "Record5 1",
        "expectedOutput": "CACHE HIT: Record5",
        "isHidden": true
      },
      {
        "id": "java-gc-1-tc-10",
        "input": "TempObj 0",
        "expectedOutput": "CACHE MISS: GC RECLAIMED",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-gc-2",
    "languageId": "java",
    "language": "java",
    "level": "advanced",
    "topicId": "java-garbage-collectors",
    "title": "Cleaner and AutoCloseable Resource Manager",
    "slug": "cleaner-and-autocloseable-resource-manager",
    "difficulty": "medium",
    "problemStatement": "Manage unmanaged resources cleanly: When a resource is explicitly closed, print \"CLOSED EXPLICITLY: <id>\". If close() is called again, print \"ALREADY CLOSED: <id>\".",
    "description": "Manage unmanaged resources cleanly: When a resource is explicitly closed, print \"CLOSED EXPLICITLY: <id>\". If close() is called again, print \"ALREADY CLOSED: <id>\".",
    "inputFormat": "Resource ID and integer calls (1 or 2).",
    "outputFormat": "Print closure state.",
    "constraints": [
      "1 <= len(id) <= 50"
    ],
    "examples": [
      {
        "input": "Handle1 1",
        "output": "CLOSED EXPLICITLY: Handle1",
        "explanation": "Closed."
      },
      {
        "input": "Handle2 2",
        "output": "CLOSED EXPLICITLY: Handle2\nALREADY CLOSED: Handle2",
        "explanation": "Double close guarded."
      },
      {
        "input": "SocketA 1",
        "output": "CLOSED EXPLICITLY: SocketA",
        "explanation": "Single close."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-gc-2-tc-1",
        "input": "Handle1 1",
        "expectedOutput": "CLOSED EXPLICITLY: Handle1",
        "isHidden": false
      },
      {
        "id": "java-gc-2-tc-2",
        "input": "Handle2 2",
        "expectedOutput": "CLOSED EXPLICITLY: Handle2\nALREADY CLOSED: Handle2",
        "isHidden": false
      },
      {
        "id": "java-gc-2-tc-3",
        "input": "SocketA 1",
        "expectedOutput": "CLOSED EXPLICITLY: SocketA",
        "isHidden": false
      },
      {
        "id": "java-gc-2-tc-4",
        "input": "FileB 2",
        "expectedOutput": "CLOSED EXPLICITLY: FileB\nALREADY CLOSED: FileB",
        "isHidden": true
      },
      {
        "id": "java-gc-2-tc-5",
        "input": "Res1 1",
        "expectedOutput": "CLOSED EXPLICITLY: Res1",
        "isHidden": true
      },
      {
        "id": "java-gc-2-tc-6",
        "input": "Res2 2",
        "expectedOutput": "CLOSED EXPLICITLY: Res2\nALREADY CLOSED: Res2",
        "isHidden": true
      },
      {
        "id": "java-gc-2-tc-7",
        "input": "BufferX 1",
        "expectedOutput": "CLOSED EXPLICITLY: BufferX",
        "isHidden": true
      },
      {
        "id": "java-gc-2-tc-8",
        "input": "BufferY 2",
        "expectedOutput": "CLOSED EXPLICITLY: BufferY\nALREADY CLOSED: BufferY",
        "isHidden": true
      },
      {
        "id": "java-gc-2-tc-9",
        "input": "StreamZ 1",
        "expectedOutput": "CLOSED EXPLICITLY: StreamZ",
        "isHidden": true
      },
      {
        "id": "java-gc-2-tc-10",
        "input": "ChannelW 2",
        "expectedOutput": "CLOSED EXPLICITLY: ChannelW\nALREADY CLOSED: ChannelW",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-sync-1",
    "languageId": "java",
    "language": "java",
    "level": "advanced",
    "topicId": "java-synchronization-locks",
    "title": "Synchronized Thread-Safe Counter Simulation",
    "slug": "synchronized-thread-safe-counter-simulation",
    "difficulty": "medium",
    "problemStatement": "Simulate thread synchronization on a shared counter: Given starting value S and N operations \"+ <val>\" or \"- <val>\" executed under a synchronized lock, compute and print final value \"Counter: <finalVal>\".",
    "description": "Simulate thread synchronization on a shared counter: Given starting value S and N operations \"+ <val>\" or \"- <val>\" executed under a synchronized lock, compute and print final value \"Counter: <finalVal>\".",
    "inputFormat": "First line S and N, next N lines each contain operator (+ or -) and value.",
    "outputFormat": "Print \"Counter: <finalVal>\".",
    "constraints": [
      "1 <= N <= 1000"
    ],
    "examples": [
      {
        "input": "0 3\n+ 10\n+ 20\n- 5",
        "output": "Counter: 25",
        "explanation": "0 + 10 + 20 - 5 = 25."
      },
      {
        "input": "100 2\n- 30\n- 20",
        "output": "Counter: 50",
        "explanation": "100 - 50 = 50."
      },
      {
        "input": "5 1\n+ 5",
        "output": "Counter: 10",
        "explanation": "5 + 5 = 10."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-sync-1-tc-1",
        "input": "0 3\n+ 10\n+ 20\n- 5",
        "expectedOutput": "Counter: 25",
        "isHidden": false
      },
      {
        "id": "java-sync-1-tc-2",
        "input": "100 2\n- 30\n- 20",
        "expectedOutput": "Counter: 50",
        "isHidden": false
      },
      {
        "id": "java-sync-1-tc-3",
        "input": "5 1\n+ 5",
        "expectedOutput": "Counter: 10",
        "isHidden": false
      },
      {
        "id": "java-sync-1-tc-4",
        "input": "50 4\n+ 10\n- 20\n+ 30\n- 10",
        "expectedOutput": "Counter: 60",
        "isHidden": true
      },
      {
        "id": "java-sync-1-tc-5",
        "input": "0 3\n+ 1\n+ 1\n+ 1",
        "expectedOutput": "Counter: 3",
        "isHidden": true
      },
      {
        "id": "java-sync-1-tc-6",
        "input": "10 2\n- 5\n- 5",
        "expectedOutput": "Counter: 0",
        "isHidden": true
      },
      {
        "id": "java-sync-1-tc-7",
        "input": "1000 3\n+ 200\n- 300\n+ 100",
        "expectedOutput": "Counter: 1000",
        "isHidden": true
      },
      {
        "id": "java-sync-1-tc-8",
        "input": "0 4\n- 10\n- 20\n+ 50\n+ 10",
        "expectedOutput": "Counter: 30",
        "isHidden": true
      },
      {
        "id": "java-sync-1-tc-9",
        "input": "25 2\n+ 25\n- 50",
        "expectedOutput": "Counter: 0",
        "isHidden": true
      },
      {
        "id": "java-sync-1-tc-10",
        "input": "12 2\n+ 8\n+ 10",
        "expectedOutput": "Counter: 30",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-sync-2",
    "languageId": "java",
    "language": "java",
    "level": "advanced",
    "topicId": "java-synchronization-locks",
    "title": "ReentrantLock Producer-Consumer Buffer Simulation",
    "slug": "reentrantlock-producer-consumer-buffer-simulation",
    "difficulty": "medium",
    "problemStatement": "Simulate ReentrantLock buffer with capacity C: \"PUT <item>\" and \"TAKE\". If buffer full on PUT, print \"BUFFER FULL\". If buffer empty on TAKE, print \"BUFFER EMPTY\". When TAKE succeeds, print item.",
    "description": "Simulate ReentrantLock buffer with capacity C: \"PUT <item>\" and \"TAKE\". If buffer full on PUT, print \"BUFFER FULL\". If buffer empty on TAKE, print \"BUFFER EMPTY\". When TAKE succeeds, print item.",
    "inputFormat": "Capacity C and operation count N, next N lines operations.",
    "outputFormat": "Print outcomes of TAKE and error messages.",
    "constraints": [
      "1 <= C <= 100",
      "1 <= N <= 1000"
    ],
    "examples": [
      {
        "input": "2 4\nPUT A\nPUT B\nPUT C\nTAKE",
        "output": "BUFFER FULL\nA",
        "explanation": "Buffer full on C, first TAKE gets A."
      },
      {
        "input": "1 2\nTAKE\nPUT X",
        "output": "BUFFER EMPTY",
        "explanation": "Empty TAKE."
      },
      {
        "input": "2 3\nPUT 10\nTAKE\nTAKE",
        "output": "10\nBUFFER EMPTY",
        "explanation": "Take then empty."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-sync-2-tc-1",
        "input": "2 4\nPUT A\nPUT B\nPUT C\nTAKE",
        "expectedOutput": "BUFFER FULL\nA",
        "isHidden": false
      },
      {
        "id": "java-sync-2-tc-2",
        "input": "1 2\nTAKE\nPUT X",
        "expectedOutput": "BUFFER EMPTY",
        "isHidden": false
      },
      {
        "id": "java-sync-2-tc-3",
        "input": "2 3\nPUT 10\nTAKE\nTAKE",
        "expectedOutput": "10\nBUFFER EMPTY",
        "isHidden": false
      },
      {
        "id": "java-sync-2-tc-4",
        "input": "3 4\nPUT 1\nPUT 2\nTAKE\nTAKE",
        "expectedOutput": "1\n2",
        "isHidden": true
      },
      {
        "id": "java-sync-2-tc-5",
        "input": "1 3\nPUT M\nPUT N\nTAKE",
        "expectedOutput": "BUFFER FULL\nM",
        "isHidden": true
      },
      {
        "id": "java-sync-2-tc-6",
        "input": "2 4\nPUT X\nPUT Y\nTAKE\nTAKE",
        "expectedOutput": "X\nY",
        "isHidden": true
      },
      {
        "id": "java-sync-2-tc-7",
        "input": "2 3\nTAKE\nPUT K\nTAKE",
        "expectedOutput": "BUFFER EMPTY\nK",
        "isHidden": true
      },
      {
        "id": "java-sync-2-tc-8",
        "input": "1 2\nPUT Z\nTAKE",
        "expectedOutput": "Z",
        "isHidden": true
      },
      {
        "id": "java-sync-2-tc-9",
        "input": "3 3\nTAKE\nTAKE\nTAKE",
        "expectedOutput": "BUFFER EMPTY\nBUFFER EMPTY\nBUFFER EMPTY",
        "isHidden": true
      },
      {
        "id": "java-sync-2-tc-10",
        "input": "2 5\nPUT 1\nPUT 2\nPUT 3\nTAKE\nTAKE",
        "expectedOutput": "BUFFER FULL\n1\n2",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-sync-3",
    "languageId": "java",
    "language": "java",
    "level": "advanced",
    "topicId": "java-synchronization-locks",
    "title": "Deadlock Prevention by Lock Ordering",
    "slug": "deadlock-prevention-by-lock-ordering",
    "difficulty": "hard",
    "problemStatement": "To prevent deadlock when acquiring two locks A and B, always acquire them in lexicographical order (min(A, B) then max(A, B)). Given two lock names A and B, print \"Acquiring: <L1> then <L2>\".",
    "description": "To prevent deadlock when acquiring two locks A and B, always acquire them in lexicographical order (min(A, B) then max(A, B)). Given two lock names A and B, print \"Acquiring: <L1> then <L2>\".",
    "inputFormat": "Two lock name strings A and B.",
    "outputFormat": "Print \"Acquiring: <L1> then <L2>\".",
    "constraints": [
      "A != B"
    ],
    "examples": [
      {
        "input": "LockB LockA",
        "output": "Acquiring: LockA then LockB",
        "explanation": "LockA acquired first."
      },
      {
        "input": "Account1 Account2",
        "output": "Acquiring: Account1 then Account2",
        "explanation": "Already ordered."
      },
      {
        "input": "Y X",
        "output": "Acquiring: X then Y",
        "explanation": "X ordered before Y."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-sync-3-tc-1",
        "input": "LockB LockA",
        "expectedOutput": "Acquiring: LockA then LockB",
        "isHidden": false
      },
      {
        "id": "java-sync-3-tc-2",
        "input": "Account1 Account2",
        "expectedOutput": "Acquiring: Account1 then Account2",
        "isHidden": false
      },
      {
        "id": "java-sync-3-tc-3",
        "input": "Y X",
        "expectedOutput": "Acquiring: X then Y",
        "isHidden": false
      },
      {
        "id": "java-sync-3-tc-4",
        "input": "Lock2 Lock1",
        "expectedOutput": "Acquiring: Lock1 then Lock2",
        "isHidden": true
      },
      {
        "id": "java-sync-3-tc-5",
        "input": "Beta Alpha",
        "expectedOutput": "Acquiring: Alpha then Beta",
        "isHidden": true
      },
      {
        "id": "java-sync-3-tc-6",
        "input": "TableB TableA",
        "expectedOutput": "Acquiring: TableA then TableB",
        "isHidden": true
      },
      {
        "id": "java-sync-3-tc-7",
        "input": "Res2 Res1",
        "expectedOutput": "Acquiring: Res1 then Res2",
        "isHidden": true
      },
      {
        "id": "java-sync-3-tc-8",
        "input": "North South",
        "expectedOutput": "Acquiring: North then South",
        "isHidden": true
      },
      {
        "id": "java-sync-3-tc-9",
        "input": "Z A",
        "expectedOutput": "Acquiring: A then Z",
        "isHidden": true
      },
      {
        "id": "java-sync-3-tc-10",
        "input": "MutexB MutexA",
        "expectedOutput": "Acquiring: MutexA then MutexB",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-exec-1",
    "languageId": "java",
    "language": "java",
    "level": "advanced",
    "topicId": "java-executors-completablefuture",
    "title": "Callable and Future Task Aggregator",
    "slug": "callable-and-future-task-aggregator",
    "difficulty": "medium",
    "problemStatement": "Simulate ExecutorService submitting N Callable tasks that compute the square of each integer. Sum the results of all Future.get() calls. Print \"Future Sum: <total>\".",
    "description": "Simulate ExecutorService submitting N Callable tasks that compute the square of each integer. Sum the results of all Future.get() calls. Print \"Future Sum: <total>\".",
    "inputFormat": "First line N, second line N space-separated integers.",
    "outputFormat": "Print \"Future Sum: <total>\".",
    "constraints": [
      "1 <= N <= 1000"
    ],
    "examples": [
      {
        "input": "3\n2 3 4",
        "output": "Future Sum: 29",
        "explanation": "4 + 9 + 16 = 29."
      },
      {
        "input": "2\n10 20",
        "output": "Future Sum: 500",
        "explanation": "100 + 400 = 500."
      },
      {
        "input": "1\n5",
        "output": "Future Sum: 25",
        "explanation": "5^2 = 25."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-exec-1-tc-1",
        "input": "3\n2 3 4",
        "expectedOutput": "Future Sum: 29",
        "isHidden": false
      },
      {
        "id": "java-exec-1-tc-2",
        "input": "2\n10 20",
        "expectedOutput": "Future Sum: 500",
        "isHidden": false
      },
      {
        "id": "java-exec-1-tc-3",
        "input": "1\n5",
        "expectedOutput": "Future Sum: 25",
        "isHidden": false
      },
      {
        "id": "java-exec-1-tc-4",
        "input": "4\n1 2 3 4",
        "expectedOutput": "Future Sum: 30",
        "isHidden": true
      },
      {
        "id": "java-exec-1-tc-5",
        "input": "3\n-2 -3 -4",
        "expectedOutput": "Future Sum: 29",
        "isHidden": true
      },
      {
        "id": "java-exec-1-tc-6",
        "input": "5\n0 1 2 3 4",
        "expectedOutput": "Future Sum: 30",
        "isHidden": true
      },
      {
        "id": "java-exec-1-tc-7",
        "input": "2\n6 8",
        "expectedOutput": "Future Sum: 100",
        "isHidden": true
      },
      {
        "id": "java-exec-1-tc-8",
        "input": "3\n1 1 1",
        "expectedOutput": "Future Sum: 3",
        "isHidden": true
      },
      {
        "id": "java-exec-1-tc-9",
        "input": "4\n5 5 5 5",
        "expectedOutput": "Future Sum: 100",
        "isHidden": true
      },
      {
        "id": "java-exec-1-tc-10",
        "input": "3\n7 8 9",
        "expectedOutput": "Future Sum: 194",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-exec-2",
    "languageId": "java",
    "language": "java",
    "level": "advanced",
    "topicId": "java-executors-completablefuture",
    "title": "CompletableFuture Pipeline (thenApply and thenCombine)",
    "slug": "completablefuture-pipeline-thenapply-and-thencombine",
    "difficulty": "medium",
    "problemStatement": "Simulate CompletableFuture pipeline: futureA computes A * 2, futureB computes B * 3, thenCombine adds results (A*2 + B*3). Print \"Combined Result: <total>\".",
    "description": "Simulate CompletableFuture pipeline: futureA computes A * 2, futureB computes B * 3, thenCombine adds results (A*2 + B*3). Print \"Combined Result: <total>\".",
    "inputFormat": "Two space-separated integers A and B.",
    "outputFormat": "Print \"Combined Result: <total>\".",
    "constraints": [
      "-10^5 <= A, B <= 10^5"
    ],
    "examples": [
      {
        "input": "5 4",
        "output": "Combined Result: 22",
        "explanation": "5*2 + 4*3 = 10 + 12 = 22."
      },
      {
        "input": "0 10",
        "output": "Combined Result: 30",
        "explanation": "0 + 30 = 30."
      },
      {
        "input": "10 0",
        "output": "Combined Result: 20",
        "explanation": "20 + 0 = 20."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-exec-2-tc-1",
        "input": "5 4",
        "expectedOutput": "Combined Result: 22",
        "isHidden": false
      },
      {
        "id": "java-exec-2-tc-2",
        "input": "0 10",
        "expectedOutput": "Combined Result: 30",
        "isHidden": false
      },
      {
        "id": "java-exec-2-tc-3",
        "input": "10 0",
        "expectedOutput": "Combined Result: 20",
        "isHidden": false
      },
      {
        "id": "java-exec-2-tc-4",
        "input": "3 3",
        "expectedOutput": "Combined Result: 15",
        "isHidden": true
      },
      {
        "id": "java-exec-2-tc-5",
        "input": "-5 5",
        "expectedOutput": "Combined Result: 5",
        "isHidden": true
      },
      {
        "id": "java-exec-2-tc-6",
        "input": "100 200",
        "expectedOutput": "Combined Result: 800",
        "isHidden": true
      },
      {
        "id": "java-exec-2-tc-7",
        "input": "7 8",
        "expectedOutput": "Combined Result: 38",
        "isHidden": true
      },
      {
        "id": "java-exec-2-tc-8",
        "input": "1 1",
        "expectedOutput": "Combined Result: 5",
        "isHidden": true
      },
      {
        "id": "java-exec-2-tc-9",
        "input": "-10 -10",
        "expectedOutput": "Combined Result: -50",
        "isHidden": true
      },
      {
        "id": "java-exec-2-tc-10",
        "input": "25 25",
        "expectedOutput": "Combined Result: 125",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-exec-3",
    "languageId": "java",
    "language": "java",
    "level": "advanced",
    "topicId": "java-executors-completablefuture",
    "title": "CompletableFuture.allOf Task Fan-Out",
    "slug": "completablefuture-allof-task-fan-out",
    "difficulty": "hard",
    "problemStatement": "Simulate CompletableFuture.allOf running N parallel service health checks returning latency in ms. Find the maximum latency among all services. Print \"All Completed: Max Latency <max> ms\".",
    "description": "Simulate CompletableFuture.allOf running N parallel service health checks returning latency in ms. Find the maximum latency among all services. Print \"All Completed: Max Latency <max> ms\".",
    "inputFormat": "First line N, second line N space-separated integer latencies.",
    "outputFormat": "Print \"All Completed: Max Latency <max> ms\".",
    "constraints": [
      "1 <= N <= 1000"
    ],
    "examples": [
      {
        "input": "4\n120 45 310 80",
        "output": "All Completed: Max Latency 310 ms",
        "explanation": "310 is max latency."
      },
      {
        "input": "2\n50 50",
        "output": "All Completed: Max Latency 50 ms",
        "explanation": "Equal latencies."
      },
      {
        "input": "1\n200",
        "output": "All Completed: Max Latency 200 ms",
        "explanation": "Single service."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-exec-3-tc-1",
        "input": "4\n120 45 310 80",
        "expectedOutput": "All Completed: Max Latency 310 ms",
        "isHidden": false
      },
      {
        "id": "java-exec-3-tc-2",
        "input": "2\n50 50",
        "expectedOutput": "All Completed: Max Latency 50 ms",
        "isHidden": false
      },
      {
        "id": "java-exec-3-tc-3",
        "input": "1\n200",
        "expectedOutput": "All Completed: Max Latency 200 ms",
        "isHidden": false
      },
      {
        "id": "java-exec-3-tc-4",
        "input": "3\n100 200 150",
        "expectedOutput": "All Completed: Max Latency 200 ms",
        "isHidden": true
      },
      {
        "id": "java-exec-3-tc-5",
        "input": "5\n10 20 30 40 50",
        "expectedOutput": "All Completed: Max Latency 50 ms",
        "isHidden": true
      },
      {
        "id": "java-exec-3-tc-6",
        "input": "4\n500 250 120 450",
        "expectedOutput": "All Completed: Max Latency 500 ms",
        "isHidden": true
      },
      {
        "id": "java-exec-3-tc-7",
        "input": "3\n15 85 40",
        "expectedOutput": "All Completed: Max Latency 85 ms",
        "isHidden": true
      },
      {
        "id": "java-exec-3-tc-8",
        "input": "2\n1000 500",
        "expectedOutput": "All Completed: Max Latency 1000 ms",
        "isHidden": true
      },
      {
        "id": "java-exec-3-tc-9",
        "input": "5\n70 60 90 80 75",
        "expectedOutput": "All Completed: Max Latency 90 ms",
        "isHidden": true
      },
      {
        "id": "java-exec-3-tc-10",
        "input": "4\n33 44 22 11",
        "expectedOutput": "All Completed: Max Latency 44 ms",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-ref-1",
    "languageId": "java",
    "language": "java",
    "level": "advanced",
    "topicId": "java-reflection-annotations",
    "title": "Inspect Class Fields and Methods via Reflection",
    "slug": "inspect-class-fields-and-methods-via-reflection",
    "difficulty": "medium",
    "problemStatement": "Simulate Java reflection: Given class name and list of fields, sort field names alphabetically. Print \"Class: <name> Fields: <fields_space_separated>\".",
    "description": "Simulate Java reflection: Given class name and list of fields, sort field names alphabetically. Print \"Class: <name> Fields: <fields_space_separated>\".",
    "inputFormat": "Class name followed by N and N field names.",
    "outputFormat": "Print \"Class: <name> Fields: <sorted_fields>\".",
    "constraints": [
      "1 <= N <= 50"
    ],
    "examples": [
      {
        "input": "User 3 id email name",
        "output": "Class: User Fields: email id name",
        "explanation": "Sorted field names."
      },
      {
        "input": "Product 2 price sku",
        "output": "Class: Product Fields: price sku",
        "explanation": "Sorted."
      },
      {
        "input": "Node 1 value",
        "output": "Class: Node Fields: value",
        "explanation": "Single field."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-ref-1-tc-1",
        "input": "User 3 id email name",
        "expectedOutput": "Class: User Fields: email id name",
        "isHidden": false
      },
      {
        "id": "java-ref-1-tc-2",
        "input": "Product 2 price sku",
        "expectedOutput": "Class: Product Fields: price sku",
        "isHidden": false
      },
      {
        "id": "java-ref-1-tc-3",
        "input": "Node 1 value",
        "expectedOutput": "Class: Node Fields: value",
        "isHidden": false
      },
      {
        "id": "java-ref-1-tc-4",
        "input": "Account 3 balance accountNumber owner",
        "expectedOutput": "Class: Account Fields: accountNumber balance owner",
        "isHidden": true
      },
      {
        "id": "java-ref-1-tc-5",
        "input": "Order 4 total id status items",
        "expectedOutput": "Class: Order Fields: id items status total",
        "isHidden": true
      },
      {
        "id": "java-ref-1-tc-6",
        "input": "Point 2 y x",
        "expectedOutput": "Class: Point Fields: x y",
        "isHidden": true
      },
      {
        "id": "java-ref-1-tc-7",
        "input": "Config 3 port host debug",
        "expectedOutput": "Class: Config Fields: debug host port",
        "isHidden": true
      },
      {
        "id": "java-ref-1-tc-8",
        "input": "Book 3 author title isbn",
        "expectedOutput": "Class: Book Fields: author isbn title",
        "isHidden": true
      },
      {
        "id": "java-ref-1-tc-9",
        "input": "Student 2 gpa name",
        "expectedOutput": "Class: Student Fields: gpa name",
        "isHidden": true
      },
      {
        "id": "java-ref-1-tc-10",
        "input": "Car 2 make model",
        "expectedOutput": "Class: Car Fields: make model",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-ref-2",
    "languageId": "java",
    "language": "java",
    "level": "advanced",
    "topicId": "java-reflection-annotations",
    "title": "Custom Validation Annotation Processor",
    "slug": "custom-validation-annotation-processor",
    "difficulty": "medium",
    "problemStatement": "Simulate processing an @NotNull annotation: Given N field name and value pairs, if value is \"NULL\", report \"@NotNull VIOLATION on <field>\". If all valid, print \"ALL FIELDS VALID\".",
    "description": "Simulate processing an @NotNull annotation: Given N field name and value pairs, if value is \"NULL\", report \"@NotNull VIOLATION on <field>\". If all valid, print \"ALL FIELDS VALID\".",
    "inputFormat": "First line N, next N lines each contain field and value.",
    "outputFormat": "Print violation messages or \"ALL FIELDS VALID\".",
    "constraints": [
      "1 <= N <= 100"
    ],
    "examples": [
      {
        "input": "2\nname Alice\nemail NULL",
        "output": "@NotNull VIOLATION on email",
        "explanation": "email is NULL."
      },
      {
        "input": "2\nid 101\nstatus OK",
        "output": "ALL FIELDS VALID",
        "explanation": "None null."
      },
      {
        "input": "1\ntoken NULL",
        "output": "@NotNull VIOLATION on token",
        "explanation": "token null."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-ref-2-tc-1",
        "input": "2\nname Alice\nemail NULL",
        "expectedOutput": "@NotNull VIOLATION on email",
        "isHidden": false
      },
      {
        "id": "java-ref-2-tc-2",
        "input": "2\nid 101\nstatus OK",
        "expectedOutput": "ALL FIELDS VALID",
        "isHidden": false
      },
      {
        "id": "java-ref-2-tc-3",
        "input": "1\ntoken NULL",
        "expectedOutput": "@NotNull VIOLATION on token",
        "isHidden": false
      },
      {
        "id": "java-ref-2-tc-4",
        "input": "3\na NULL\nb 2\nc NULL",
        "expectedOutput": "@NotNull VIOLATION on a\n@NotNull VIOLATION on c",
        "isHidden": true
      },
      {
        "id": "java-ref-2-tc-5",
        "input": "3\nx 1\ny 2\nz 3",
        "expectedOutput": "ALL FIELDS VALID",
        "isHidden": true
      },
      {
        "id": "java-ref-2-tc-6",
        "input": "2\nkey1 NULL\nkey2 NULL",
        "expectedOutput": "@NotNull VIOLATION on key1\n@NotNull VIOLATION on key2",
        "isHidden": true
      },
      {
        "id": "java-ref-2-tc-7",
        "input": "1\nuser Guest",
        "expectedOutput": "ALL FIELDS VALID",
        "isHidden": true
      },
      {
        "id": "java-ref-2-tc-8",
        "input": "3\np 10\nq NULL\nr 30",
        "expectedOutput": "@NotNull VIOLATION on q",
        "isHidden": true
      },
      {
        "id": "java-ref-2-tc-9",
        "input": "2\nm 5\nn 10",
        "expectedOutput": "ALL FIELDS VALID",
        "isHidden": true
      },
      {
        "id": "java-ref-2-tc-10",
        "input": "3\nhost localhost\nport 8080\npass NULL",
        "expectedOutput": "@NotNull VIOLATION on pass",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-rest-1",
    "languageId": "java",
    "language": "java",
    "level": "advanced",
    "topicId": "java-spring-boot-rest",
    "title": "Spring REST Path & Query Param Parser",
    "slug": "spring-rest-path-query-param-parser",
    "difficulty": "easy",
    "problemStatement": "Parse a REST request line in Spring format \"GET /api/v1/users/{id}?status={status}\". Extract path variable id and request param status. Print \"User ID: <id> Status: <status>\".",
    "description": "Parse a REST request line in Spring format \"GET /api/v1/users/{id}?status={status}\". Extract path variable id and request param status. Print \"User ID: <id> Status: <status>\".",
    "inputFormat": "A URL path string e.g. /api/v1/users/42?status=active.",
    "outputFormat": "Print \"User ID: <id> Status: <status>\".",
    "constraints": [
      "Well-formed URL string."
    ],
    "examples": [
      {
        "input": "/api/v1/users/42?status=active",
        "output": "User ID: 42 Status: active",
        "explanation": "id=42, status=active."
      },
      {
        "input": "/api/v1/users/101?status=pending",
        "output": "User ID: 101 Status: pending",
        "explanation": "id=101, status=pending."
      },
      {
        "input": "/api/v1/users/7?status=inactive",
        "output": "User ID: 7 Status: inactive",
        "explanation": "id=7, status=inactive."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-rest-1-tc-1",
        "input": "/api/v1/users/42?status=active",
        "expectedOutput": "User ID: 42 Status: active",
        "isHidden": false
      },
      {
        "id": "java-rest-1-tc-2",
        "input": "/api/v1/users/101?status=pending",
        "expectedOutput": "User ID: 101 Status: pending",
        "isHidden": false
      },
      {
        "id": "java-rest-1-tc-3",
        "input": "/api/v1/users/7?status=inactive",
        "expectedOutput": "User ID: 7 Status: inactive",
        "isHidden": false
      },
      {
        "id": "java-rest-1-tc-4",
        "input": "/api/v1/users/999?status=verified",
        "expectedOutput": "User ID: 999 Status: verified",
        "isHidden": true
      },
      {
        "id": "java-rest-1-tc-5",
        "input": "/api/v1/users/1?status=new",
        "expectedOutput": "User ID: 1 Status: new",
        "isHidden": true
      },
      {
        "id": "java-rest-1-tc-6",
        "input": "/api/v1/users/50?status=suspended",
        "expectedOutput": "User ID: 50 Status: suspended",
        "isHidden": true
      },
      {
        "id": "java-rest-1-tc-7",
        "input": "/api/v1/users/12?status=active",
        "expectedOutput": "User ID: 12 Status: active",
        "isHidden": true
      },
      {
        "id": "java-rest-1-tc-8",
        "input": "/api/v1/users/33?status=archived",
        "expectedOutput": "User ID: 33 Status: archived",
        "isHidden": true
      },
      {
        "id": "java-rest-1-tc-9",
        "input": "/api/v1/users/88?status=deleted",
        "expectedOutput": "User ID: 88 Status: deleted",
        "isHidden": true
      },
      {
        "id": "java-rest-1-tc-10",
        "input": "/api/v1/users/1000?status=vip",
        "expectedOutput": "User ID: 1000 Status: vip",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-rest-2",
    "languageId": "java",
    "language": "java",
    "level": "advanced",
    "topicId": "java-spring-boot-rest",
    "title": "DTO Validation and Response Entity Envelope",
    "slug": "dto-validation-and-response-entity-envelope",
    "difficulty": "medium",
    "problemStatement": "Simulate Spring ResponseEntity envelope: Given status code S (int) and message M, format response as JSON envelope {\"status\": <S>, \"message\": \"<M>\"}.",
    "description": "Simulate Spring ResponseEntity envelope: Given status code S (int) and message M, format response as JSON envelope {\"status\": <S>, \"message\": \"<M>\"}.",
    "inputFormat": "Status code S and message string M.",
    "outputFormat": "Print JSON envelope.",
    "constraints": [
      "Valid HTTP status code."
    ],
    "examples": [
      {
        "input": "200 SUCCESS",
        "output": "{\"status\": 200, \"message\": \"SUCCESS\"}",
        "explanation": "200 OK envelope."
      },
      {
        "input": "404 NOT_FOUND",
        "output": "{\"status\": 404, \"message\": \"NOT_FOUND\"}",
        "explanation": "404 error envelope."
      },
      {
        "input": "500 INTERNAL_ERROR",
        "output": "{\"status\": 500, \"message\": \"INTERNAL_ERROR\"}",
        "explanation": "500 error envelope."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-rest-2-tc-1",
        "input": "200 SUCCESS",
        "expectedOutput": "{\"status\": 200, \"message\": \"SUCCESS\"}",
        "isHidden": false
      },
      {
        "id": "java-rest-2-tc-2",
        "input": "404 NOT_FOUND",
        "expectedOutput": "{\"status\": 404, \"message\": \"NOT_FOUND\"}",
        "isHidden": false
      },
      {
        "id": "java-rest-2-tc-3",
        "input": "500 INTERNAL_ERROR",
        "expectedOutput": "{\"status\": 500, \"message\": \"INTERNAL_ERROR\"}",
        "isHidden": false
      },
      {
        "id": "java-rest-2-tc-4",
        "input": "201 CREATED",
        "expectedOutput": "{\"status\": 201, \"message\": \"CREATED\"}",
        "isHidden": true
      },
      {
        "id": "java-rest-2-tc-5",
        "input": "400 BAD_REQUEST",
        "expectedOutput": "{\"status\": 400, \"message\": \"BAD_REQUEST\"}",
        "isHidden": true
      },
      {
        "id": "java-rest-2-tc-6",
        "input": "401 UNAUTHORIZED",
        "expectedOutput": "{\"status\": 401, \"message\": \"UNAUTHORIZED\"}",
        "isHidden": true
      },
      {
        "id": "java-rest-2-tc-7",
        "input": "403 FORBIDDEN",
        "expectedOutput": "{\"status\": 403, \"message\": \"FORBIDDEN\"}",
        "isHidden": true
      },
      {
        "id": "java-rest-2-tc-8",
        "input": "204 NO_CONTENT",
        "expectedOutput": "{\"status\": 204, \"message\": \"NO_CONTENT\"}",
        "isHidden": true
      },
      {
        "id": "java-rest-2-tc-9",
        "input": "503 SERVICE_UNAVAILABLE",
        "expectedOutput": "{\"status\": 503, \"message\": \"SERVICE_UNAVAILABLE\"}",
        "isHidden": true
      },
      {
        "id": "java-rest-2-tc-10",
        "input": "409 CONFLICT",
        "expectedOutput": "{\"status\": 409, \"message\": \"CONFLICT\"}",
        "isHidden": true
      }
    ]
  },
  {
    "id": "java-rest-3",
    "languageId": "java",
    "language": "java",
    "level": "advanced",
    "topicId": "java-spring-boot-rest",
    "title": "In-Memory Repository CRUD Service",
    "slug": "in-memory-repository-crud-service",
    "difficulty": "medium",
    "problemStatement": "Implement in-memory Spring CrudRepository simulation for User(id, name): Operations: \"SAVE <id> <name>\", \"FIND <id>\" (prints name or \"NOT_FOUND\"), \"DELETE <id>\".",
    "description": "Implement in-memory Spring CrudRepository simulation for User(id, name): Operations: \"SAVE <id> <name>\", \"FIND <id>\" (prints name or \"NOT_FOUND\"), \"DELETE <id>\".",
    "inputFormat": "First line N operations count, next N lines operations.",
    "outputFormat": "Print result of each FIND operation.",
    "constraints": [
      "1 <= N <= 1000"
    ],
    "examples": [
      {
        "input": "4\nSAVE 1 Alice\nFIND 1\nDELETE 1\nFIND 1",
        "output": "Alice\nNOT_FOUND",
        "explanation": "Found then deleted."
      },
      {
        "input": "2\nFIND 99\nSAVE 99 Bob",
        "output": "NOT_FOUND",
        "explanation": "Not found initially."
      },
      {
        "input": "3\nSAVE 5 Dan\nSAVE 6 Eve\nFIND 6",
        "output": "Eve",
        "explanation": "Find 6."
      }
    ],
    "starterCode": {
      "java": "import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n",
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "java-rest-3-tc-1",
        "input": "4\nSAVE 1 Alice\nFIND 1\nDELETE 1\nFIND 1",
        "expectedOutput": "Alice\nNOT_FOUND",
        "isHidden": false
      },
      {
        "id": "java-rest-3-tc-2",
        "input": "2\nFIND 99\nSAVE 99 Bob",
        "expectedOutput": "NOT_FOUND",
        "isHidden": false
      },
      {
        "id": "java-rest-3-tc-3",
        "input": "3\nSAVE 5 Dan\nSAVE 6 Eve\nFIND 6",
        "expectedOutput": "Eve",
        "isHidden": false
      },
      {
        "id": "java-rest-3-tc-4",
        "input": "4\nSAVE 10 X\nSAVE 20 Y\nFIND 10\nFIND 20",
        "expectedOutput": "X\nY",
        "isHidden": true
      },
      {
        "id": "java-rest-3-tc-5",
        "input": "3\nSAVE 1 A\nDELETE 1\nFIND 1",
        "expectedOutput": "NOT_FOUND",
        "isHidden": true
      },
      {
        "id": "java-rest-3-tc-6",
        "input": "4\nSAVE 2 B\nSAVE 2 C\nFIND 2\nFIND 3",
        "expectedOutput": "C\nNOT_FOUND",
        "isHidden": true
      },
      {
        "id": "java-rest-3-tc-7",
        "input": "2\nSAVE 77 Lucky\nFIND 77",
        "expectedOutput": "Lucky",
        "isHidden": true
      },
      {
        "id": "java-rest-3-tc-8",
        "input": "3\nFIND 1\nFIND 2\nFIND 3",
        "expectedOutput": "NOT_FOUND\nNOT_FOUND\nNOT_FOUND",
        "isHidden": true
      },
      {
        "id": "java-rest-3-tc-9",
        "input": "4\nSAVE 100 Top\nDELETE 100\nDELETE 100\nFIND 100",
        "expectedOutput": "NOT_FOUND",
        "isHidden": true
      },
      {
        "id": "java-rest-3-tc-10",
        "input": "4\nSAVE 1 M\nSAVE 2 N\nDELETE 2\nFIND 1",
        "expectedOutput": "M",
        "isHidden": true
      }
    ]
  }
];
export default javaProblems;
