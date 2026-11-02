export const pythonProblems = [
  {
    "id": "py-var-1",
    "languageId": "python",
    "language": "python",
    "level": "beginner",
    "topicId": "python-variables",
    "title": "Calculate Simple Interest",
    "slug": "calculate-simple-interest",
    "difficulty": "easy",
    "problemStatement": "Given Principal (P), Rate of interest (R), and Time in years (T), calculate Simple Interest using the formula SI = (P * R * T) / 100. Print the result rounded to 2 decimal places.",
    "description": "Given Principal (P), Rate of interest (R), and Time in years (T), calculate Simple Interest using the formula SI = (P * R * T) / 100. Print the result rounded to 2 decimal places.",
    "inputFormat": "Three space-separated numbers: P, R, T.",
    "outputFormat": "Print the Simple Interest rounded to 2 decimal places.",
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
        "explanation": "(2500 * 4.2 * 1.5) / 100 = 157.50"
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-var-1-tc-1",
        "input": "1000 5 2",
        "expectedOutput": "100.00",
        "isHidden": false
      },
      {
        "id": "py-var-1-tc-2",
        "input": "5000 7.5 3",
        "expectedOutput": "1125.00",
        "isHidden": false
      },
      {
        "id": "py-var-1-tc-3",
        "input": "2500 4.2 1.5",
        "expectedOutput": "157.50",
        "isHidden": false
      },
      {
        "id": "py-var-1-tc-4",
        "input": "10000 10 5",
        "expectedOutput": "5000.00",
        "isHidden": true
      },
      {
        "id": "py-var-1-tc-5",
        "input": "1200 3.5 4",
        "expectedOutput": "168.00",
        "isHidden": true
      },
      {
        "id": "py-var-1-tc-6",
        "input": "8000 6 2.5",
        "expectedOutput": "1200.00",
        "isHidden": true
      },
      {
        "id": "py-var-1-tc-7",
        "input": "3000 8.25 2",
        "expectedOutput": "495.00",
        "isHidden": true
      },
      {
        "id": "py-var-1-tc-8",
        "input": "15000 5.5 10",
        "expectedOutput": "8250.00",
        "isHidden": true
      },
      {
        "id": "py-var-1-tc-9",
        "input": "750 12 3",
        "expectedOutput": "270.00",
        "isHidden": true
      },
      {
        "id": "py-var-1-tc-10",
        "input": "9999 1.5 1",
        "expectedOutput": "149.98",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-var-2",
    "languageId": "python",
    "language": "python",
    "level": "beginner",
    "topicId": "python-variables",
    "title": "Convert Seconds to Hours, Minutes, and Seconds",
    "slug": "convert-seconds-to-hours-minutes-and-seconds",
    "difficulty": "easy",
    "problemStatement": "Given a total number of seconds as an integer S, convert it into hours, minutes, and remaining seconds in the format \"H:M:S\".",
    "description": "Given a total number of seconds as an integer S, convert it into hours, minutes, and remaining seconds in the format \"H:M:S\".",
    "inputFormat": "A single non-negative integer S.",
    "outputFormat": "Print in the format H:M:S.",
    "constraints": [
      "0 <= S <= 10^7"
    ],
    "examples": [
      {
        "input": "3665",
        "output": "1:1:5",
        "explanation": "3665 seconds = 1 hour, 1 minute, 5 seconds."
      },
      {
        "input": "60",
        "output": "0:1:0",
        "explanation": "60 seconds = 0 hours, 1 minute, 0 seconds."
      },
      {
        "input": "0",
        "output": "0:0:0",
        "explanation": "0 seconds = 0:0:0."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-var-2-tc-1",
        "input": "3665",
        "expectedOutput": "1:1:5",
        "isHidden": false
      },
      {
        "id": "py-var-2-tc-2",
        "input": "60",
        "expectedOutput": "0:1:0",
        "isHidden": false
      },
      {
        "id": "py-var-2-tc-3",
        "input": "0",
        "expectedOutput": "0:0:0",
        "isHidden": false
      },
      {
        "id": "py-var-2-tc-4",
        "input": "3600",
        "expectedOutput": "1:0:0",
        "isHidden": true
      },
      {
        "id": "py-var-2-tc-5",
        "input": "7322",
        "expectedOutput": "2:2:2",
        "isHidden": true
      },
      {
        "id": "py-var-2-tc-6",
        "input": "86400",
        "expectedOutput": "24:0:0",
        "isHidden": true
      },
      {
        "id": "py-var-2-tc-7",
        "input": "500",
        "expectedOutput": "0:8:20",
        "isHidden": true
      },
      {
        "id": "py-var-2-tc-8",
        "input": "123456",
        "expectedOutput": "34:17:36",
        "isHidden": true
      },
      {
        "id": "py-var-2-tc-9",
        "input": "59",
        "expectedOutput": "0:0:59",
        "isHidden": true
      },
      {
        "id": "py-var-2-tc-10",
        "input": "999999",
        "expectedOutput": "277:46:39",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-var-3",
    "languageId": "python",
    "language": "python",
    "level": "beginner",
    "topicId": "python-variables",
    "title": "Calculate Percentage and Total Marks",
    "slug": "calculate-percentage-and-total-marks",
    "difficulty": "medium",
    "problemStatement": "Given marks obtained in 5 subjects out of 100 each, calculate the total marks obtained and percentage. Print \"Total: <total> Percentage: <pct>%\" with percentage rounded to 2 decimal places.",
    "description": "Given marks obtained in 5 subjects out of 100 each, calculate the total marks obtained and percentage. Print \"Total: <total> Percentage: <pct>%\" with percentage rounded to 2 decimal places.",
    "inputFormat": "Five space-separated numbers.",
    "outputFormat": "Print \"Total: <total> Percentage: <pct>%\" where total is integer or 2-decimal and pct has 2 decimal places.",
    "constraints": [
      "0 <= mark <= 100"
    ],
    "examples": [
      {
        "input": "80 90 85 95 100",
        "output": "Total: 450 Percentage: 90.00%",
        "explanation": "Sum 450 / 500 = 90%."
      },
      {
        "input": "50 60 70 80 90",
        "output": "Total: 350 Percentage: 70.00%",
        "explanation": "Sum 350 / 500 = 70%."
      },
      {
        "input": "100 100 100 100 100",
        "output": "Total: 500 Percentage: 100.00%",
        "explanation": "Full marks."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-var-3-tc-1",
        "input": "80 90 85 95 100",
        "expectedOutput": "Total: 450 Percentage: 90.00%",
        "isHidden": false
      },
      {
        "id": "py-var-3-tc-2",
        "input": "50 60 70 80 90",
        "expectedOutput": "Total: 350 Percentage: 70.00%",
        "isHidden": false
      },
      {
        "id": "py-var-3-tc-3",
        "input": "100 100 100 100 100",
        "expectedOutput": "Total: 500 Percentage: 100.00%",
        "isHidden": false
      },
      {
        "id": "py-var-3-tc-4",
        "input": "40 40 40 40 40",
        "expectedOutput": "Total: 200 Percentage: 40.00%",
        "isHidden": true
      },
      {
        "id": "py-var-3-tc-5",
        "input": "0 0 0 0 0",
        "expectedOutput": "Total: 0 Percentage: 0.00%",
        "isHidden": true
      },
      {
        "id": "py-var-3-tc-6",
        "input": "75 82 68 91 84",
        "expectedOutput": "Total: 400 Percentage: 80.00%",
        "isHidden": true
      },
      {
        "id": "py-var-3-tc-7",
        "input": "33 45 56 67 78",
        "expectedOutput": "Total: 279 Percentage: 55.80%",
        "isHidden": true
      },
      {
        "id": "py-var-3-tc-8",
        "input": "88 77 66 55 44",
        "expectedOutput": "Total: 330 Percentage: 66.00%",
        "isHidden": true
      },
      {
        "id": "py-var-3-tc-9",
        "input": "92 88 95 91 89",
        "expectedOutput": "Total: 455 Percentage: 91.00%",
        "isHidden": true
      },
      {
        "id": "py-var-3-tc-10",
        "input": "65 72 58 80 75",
        "expectedOutput": "Total: 350 Percentage: 70.00%",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-io-1",
    "languageId": "python",
    "language": "python",
    "level": "beginner",
    "topicId": "python-user-input",
    "title": "Personalized Greeting and Age Calculation",
    "slug": "personalized-greeting-and-age-calculation",
    "difficulty": "easy",
    "problemStatement": "Read a name (string) and birth year (integer). Compute age in 2026. Print \"Hello <name>, you are <age> years old in 2026!\".",
    "description": "Read a name (string) and birth year (integer). Compute age in 2026. Print \"Hello <name>, you are <age> years old in 2026!\".",
    "inputFormat": "Two space-separated tokens: name and birthYear.",
    "outputFormat": "Print formatted greeting string.",
    "constraints": [
      "1 <= len(name) <= 50",
      "1900 <= birthYear <= 2026"
    ],
    "examples": [
      {
        "input": "Alice 2000",
        "output": "Hello Alice, you are 26 years old in 2026!",
        "explanation": "Alice born in 2000 is 26 in 2026."
      },
      {
        "input": "Bob 1995",
        "output": "Hello Bob, you are 31 years old in 2026!",
        "explanation": "Bob born in 1995 is 31 in 2026."
      },
      {
        "input": "Charlie 2026",
        "output": "Hello Charlie, you are 0 years old in 2026!",
        "explanation": "Born in 2026 is 0 years old."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-io-1-tc-1",
        "input": "Alice 2000",
        "expectedOutput": "Hello Alice, you are 26 years old in 2026!",
        "isHidden": false
      },
      {
        "id": "py-io-1-tc-2",
        "input": "Bob 1995",
        "expectedOutput": "Hello Bob, you are 31 years old in 2026!",
        "isHidden": false
      },
      {
        "id": "py-io-1-tc-3",
        "input": "Charlie 2026",
        "expectedOutput": "Hello Charlie, you are 0 years old in 2026!",
        "isHidden": false
      },
      {
        "id": "py-io-1-tc-4",
        "input": "David 1980",
        "expectedOutput": "Hello David, you are 46 years old in 2026!",
        "isHidden": true
      },
      {
        "id": "py-io-1-tc-5",
        "input": "Emma 2010",
        "expectedOutput": "Hello Emma, you are 16 years old in 2026!",
        "isHidden": true
      },
      {
        "id": "py-io-1-tc-6",
        "input": "Frank 1950",
        "expectedOutput": "Hello Frank, you are 76 years old in 2026!",
        "isHidden": true
      },
      {
        "id": "py-io-1-tc-7",
        "input": "Grace 2005",
        "expectedOutput": "Hello Grace, you are 21 years old in 2026!",
        "isHidden": true
      },
      {
        "id": "py-io-1-tc-8",
        "input": "Henry 1999",
        "expectedOutput": "Hello Henry, you are 27 years old in 2026!",
        "isHidden": true
      },
      {
        "id": "py-io-1-tc-9",
        "input": "Ivy 1972",
        "expectedOutput": "Hello Ivy, you are 54 years old in 2026!",
        "isHidden": true
      },
      {
        "id": "py-io-1-tc-10",
        "input": "Jack 1900",
        "expectedOutput": "Hello Jack, you are 126 years old in 2026!",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-io-2",
    "languageId": "python",
    "language": "python",
    "level": "beginner",
    "topicId": "python-user-input",
    "title": "Basic Two-Number Arithmetic Calculator",
    "slug": "basic-two-number-arithmetic-calculator",
    "difficulty": "easy",
    "problemStatement": "Read two integers A and B, followed by an operator op (+, -, *, /). Output the result. For division (/), output the integer quotient (truncated towards zero, integer division).",
    "description": "Read two integers A and B, followed by an operator op (+, -, *, /). Output the result. For division (/), output the integer quotient (truncated towards zero, integer division).",
    "inputFormat": "Two integers A, B and a single character operator (+, -, *, /).",
    "outputFormat": "Print the computed integer result.",
    "constraints": [
      "-10^5 <= A, B <= 10^5",
      "B != 0 for division"
    ],
    "examples": [
      {
        "input": "10 5 +",
        "output": "15",
        "explanation": "10 + 5 = 15"
      },
      {
        "input": "20 4 /",
        "output": "5",
        "explanation": "20 / 4 = 5"
      },
      {
        "input": "7 3 *",
        "output": "21",
        "explanation": "7 * 3 = 21"
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-io-2-tc-1",
        "input": "10 5 +",
        "expectedOutput": "15",
        "isHidden": false
      },
      {
        "id": "py-io-2-tc-2",
        "input": "20 4 /",
        "expectedOutput": "5",
        "isHidden": false
      },
      {
        "id": "py-io-2-tc-3",
        "input": "7 3 *",
        "expectedOutput": "21",
        "isHidden": false
      },
      {
        "id": "py-io-2-tc-4",
        "input": "15 8 -",
        "expectedOutput": "7",
        "isHidden": true
      },
      {
        "id": "py-io-2-tc-5",
        "input": "100 10 /",
        "expectedOutput": "10",
        "isHidden": true
      },
      {
        "id": "py-io-2-tc-6",
        "input": "0 50 *",
        "expectedOutput": "0",
        "isHidden": true
      },
      {
        "id": "py-io-2-tc-7",
        "input": "-10 5 +",
        "expectedOutput": "-5",
        "isHidden": true
      },
      {
        "id": "py-io-2-tc-8",
        "input": "-20 -4 /",
        "expectedOutput": "5",
        "isHidden": true
      },
      {
        "id": "py-io-2-tc-9",
        "input": "12 -3 *",
        "expectedOutput": "-36",
        "isHidden": true
      },
      {
        "id": "py-io-2-tc-10",
        "input": "50 6 /",
        "expectedOutput": "8",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-io-3",
    "languageId": "python",
    "language": "python",
    "level": "beginner",
    "topicId": "python-user-input",
    "title": "Temperature Conversion (Celsius to Fahrenheit and Kelvin)",
    "slug": "temperature-conversion-celsius-to-fahrenheit-and-kelvin",
    "difficulty": "medium",
    "problemStatement": "Given a temperature in Celsius C, convert it to Fahrenheit (F = C * 9/5 + 32) and Kelvin (K = C + 273.15). Print \"F: <F> K: <K>\" with both rounded to 2 decimal places.",
    "description": "Given a temperature in Celsius C, convert it to Fahrenheit (F = C * 9/5 + 32) and Kelvin (K = C + 273.15). Print \"F: <F> K: <K>\" with both rounded to 2 decimal places.",
    "inputFormat": "A single float or integer C.",
    "outputFormat": "Print \"F: <F> K: <K>\".",
    "constraints": [
      "-273.15 <= C <= 10000"
    ],
    "examples": [
      {
        "input": "0",
        "output": "F: 32.00 K: 273.15",
        "explanation": "0 C = 32 F and 273.15 K"
      },
      {
        "input": "100",
        "output": "F: 212.00 K: 373.15",
        "explanation": "100 C = 212 F and 373.15 K"
      },
      {
        "input": "-40",
        "output": "F: -40.00 K: 233.15",
        "explanation": "-40 C = -40 F"
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-io-3-tc-1",
        "input": "0",
        "expectedOutput": "F: 32.00 K: 273.15",
        "isHidden": false
      },
      {
        "id": "py-io-3-tc-2",
        "input": "100",
        "expectedOutput": "F: 212.00 K: 373.15",
        "isHidden": false
      },
      {
        "id": "py-io-3-tc-3",
        "input": "-40",
        "expectedOutput": "F: -40.00 K: 233.15",
        "isHidden": false
      },
      {
        "id": "py-io-3-tc-4",
        "input": "25",
        "expectedOutput": "F: 77.00 K: 298.15",
        "isHidden": true
      },
      {
        "id": "py-io-3-tc-5",
        "input": "37",
        "expectedOutput": "F: 98.60 K: 310.15",
        "isHidden": true
      },
      {
        "id": "py-io-3-tc-6",
        "input": "-273.15",
        "expectedOutput": "F: -459.67 K: 0.00",
        "isHidden": true
      },
      {
        "id": "py-io-3-tc-7",
        "input": "50.5",
        "expectedOutput": "F: 122.90 K: 323.65",
        "isHidden": true
      },
      {
        "id": "py-io-3-tc-8",
        "input": "-10",
        "expectedOutput": "F: 14.00 K: 263.15",
        "isHidden": true
      },
      {
        "id": "py-io-3-tc-9",
        "input": "200",
        "expectedOutput": "F: 392.00 K: 473.15",
        "isHidden": true
      },
      {
        "id": "py-io-3-tc-10",
        "input": "15.2",
        "expectedOutput": "F: 59.36 K: 288.35",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-op-1",
    "languageId": "python",
    "language": "python",
    "level": "beginner",
    "topicId": "python-arithmetic-operators",
    "title": "Area and Perimeter of a Rectangle",
    "slug": "area-and-perimeter-of-a-rectangle",
    "difficulty": "easy",
    "problemStatement": "Given length L and width W of a rectangle, compute Area (L * W) and Perimeter (2 * (L + W)). Print \"Area: <area> Perimeter: <perimeter>\".",
    "description": "Given length L and width W of a rectangle, compute Area (L * W) and Perimeter (2 * (L + W)). Print \"Area: <area> Perimeter: <perimeter>\".",
    "inputFormat": "Two space-separated positive numbers L and W.",
    "outputFormat": "Print \"Area: <area> Perimeter: <perimeter>\" (as integers if integer, or float with 2 decimal places).",
    "constraints": [
      "1 <= L, W <= 10^6"
    ],
    "examples": [
      {
        "input": "5 3",
        "output": "Area: 15 Perimeter: 16",
        "explanation": "5 * 3 = 15, 2 * (5 + 3) = 16"
      },
      {
        "input": "10 10",
        "output": "Area: 100 Perimeter: 40",
        "explanation": "Square with side 10."
      },
      {
        "input": "1 1",
        "output": "Area: 1 Perimeter: 4",
        "explanation": "1x1 unit square."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-op-1-tc-1",
        "input": "5 3",
        "expectedOutput": "Area: 15 Perimeter: 16",
        "isHidden": false
      },
      {
        "id": "py-op-1-tc-2",
        "input": "10 10",
        "expectedOutput": "Area: 100 Perimeter: 40",
        "isHidden": false
      },
      {
        "id": "py-op-1-tc-3",
        "input": "1 1",
        "expectedOutput": "Area: 1 Perimeter: 4",
        "isHidden": false
      },
      {
        "id": "py-op-1-tc-4",
        "input": "20 5",
        "expectedOutput": "Area: 100 Perimeter: 50",
        "isHidden": true
      },
      {
        "id": "py-op-1-tc-5",
        "input": "7 8",
        "expectedOutput": "Area: 56 Perimeter: 30",
        "isHidden": true
      },
      {
        "id": "py-op-1-tc-6",
        "input": "100 50",
        "expectedOutput": "Area: 5000 Perimeter: 300",
        "isHidden": true
      },
      {
        "id": "py-op-1-tc-7",
        "input": "12 15",
        "expectedOutput": "Area: 180 Perimeter: 54",
        "isHidden": true
      },
      {
        "id": "py-op-1-tc-8",
        "input": "25 4",
        "expectedOutput": "Area: 100 Perimeter: 58",
        "isHidden": true
      },
      {
        "id": "py-op-1-tc-9",
        "input": "9 11",
        "expectedOutput": "Area: 99 Perimeter: 40",
        "isHidden": true
      },
      {
        "id": "py-op-1-tc-10",
        "input": "50 50",
        "expectedOutput": "Area: 2500 Perimeter: 200",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-op-2",
    "languageId": "python",
    "language": "python",
    "level": "beginner",
    "topicId": "python-arithmetic-operators",
    "title": "Quotient and Remainder of Division",
    "slug": "quotient-and-remainder-of-division",
    "difficulty": "easy",
    "problemStatement": "Given dividend A and divisor B, print the integer quotient and remainder separated by a space.",
    "description": "Given dividend A and divisor B, print the integer quotient and remainder separated by a space.",
    "inputFormat": "Two positive integers A and B.",
    "outputFormat": "Print \"<quotient> <remainder>\".",
    "constraints": [
      "1 <= A <= 10^9",
      "1 <= B <= 10^9"
    ],
    "examples": [
      {
        "input": "17 5",
        "output": "3 2",
        "explanation": "17 // 5 = 3, 17 % 5 = 2"
      },
      {
        "input": "20 4",
        "output": "5 0",
        "explanation": "20 // 4 = 5, remainder 0"
      },
      {
        "input": "5 10",
        "output": "0 5",
        "explanation": "5 // 10 = 0, remainder 5"
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-op-2-tc-1",
        "input": "17 5",
        "expectedOutput": "3 2",
        "isHidden": false
      },
      {
        "id": "py-op-2-tc-2",
        "input": "20 4",
        "expectedOutput": "5 0",
        "isHidden": false
      },
      {
        "id": "py-op-2-tc-3",
        "input": "5 10",
        "expectedOutput": "0 5",
        "isHidden": false
      },
      {
        "id": "py-op-2-tc-4",
        "input": "100 7",
        "expectedOutput": "14 2",
        "isHidden": true
      },
      {
        "id": "py-op-2-tc-5",
        "input": "1 1",
        "expectedOutput": "1 0",
        "isHidden": true
      },
      {
        "id": "py-op-2-tc-6",
        "input": "99 9",
        "expectedOutput": "11 0",
        "isHidden": true
      },
      {
        "id": "py-op-2-tc-7",
        "input": "53 6",
        "expectedOutput": "8 5",
        "isHidden": true
      },
      {
        "id": "py-op-2-tc-8",
        "input": "12345 100",
        "expectedOutput": "123 45",
        "isHidden": true
      },
      {
        "id": "py-op-2-tc-9",
        "input": "1000 3",
        "expectedOutput": "333 1",
        "isHidden": true
      },
      {
        "id": "py-op-2-tc-10",
        "input": "99999 10",
        "expectedOutput": "9999 9",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-op-3",
    "languageId": "python",
    "language": "python",
    "level": "beginner",
    "topicId": "python-arithmetic-operators",
    "title": "Compound Interest Calculator",
    "slug": "compound-interest-calculator",
    "difficulty": "medium",
    "problemStatement": "Given Principal P, Annual interest rate R (%), and Time T years, calculate final Amount A = P * (1 + R/100)^T and Compound Interest CI = A - P. Print \"Amount: <A> CI: <CI>\" rounded to 2 decimal places.",
    "description": "Given Principal P, Annual interest rate R (%), and Time T years, calculate final Amount A = P * (1 + R/100)^T and Compound Interest CI = A - P. Print \"Amount: <A> CI: <CI>\" rounded to 2 decimal places.",
    "inputFormat": "Three numbers: P, R, T.",
    "outputFormat": "Print \"Amount: <A> CI: <CI>\".",
    "constraints": [
      "1 <= P <= 10^7",
      "0.1 <= R <= 50",
      "1 <= T <= 30"
    ],
    "examples": [
      {
        "input": "1000 10 2",
        "output": "Amount: 1210.00 CI: 210.00",
        "explanation": "1000 * (1.1)^2 = 1210"
      },
      {
        "input": "5000 5 1",
        "output": "Amount: 5250.00 CI: 250.00",
        "explanation": "5000 * 1.05 = 5250"
      },
      {
        "input": "2000 8 3",
        "output": "Amount: 2519.42 CI: 519.42",
        "explanation": "2000 * (1.08)^3 = 2519.42"
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-op-3-tc-1",
        "input": "1000 10 2",
        "expectedOutput": "Amount: 1210.00 CI: 210.00",
        "isHidden": false
      },
      {
        "id": "py-op-3-tc-2",
        "input": "5000 5 1",
        "expectedOutput": "Amount: 5250.00 CI: 250.00",
        "isHidden": false
      },
      {
        "id": "py-op-3-tc-3",
        "input": "2000 8 3",
        "expectedOutput": "Amount: 2519.42 CI: 519.42",
        "isHidden": false
      },
      {
        "id": "py-op-3-tc-4",
        "input": "10000 6 5",
        "expectedOutput": "Amount: 13382.26 CI: 3382.26",
        "isHidden": true
      },
      {
        "id": "py-op-3-tc-5",
        "input": "1500 12 2",
        "expectedOutput": "Amount: 1881.60 CI: 381.60",
        "isHidden": true
      },
      {
        "id": "py-op-3-tc-6",
        "input": "3000 4 4",
        "expectedOutput": "Amount: 3509.58 CI: 509.58",
        "isHidden": true
      },
      {
        "id": "py-op-3-tc-7",
        "input": "8000 7.5 3",
        "expectedOutput": "Amount: 9938.38 CI: 1938.38",
        "isHidden": true
      },
      {
        "id": "py-op-3-tc-8",
        "input": "500 20 2",
        "expectedOutput": "Amount: 720.00 CI: 220.00",
        "isHidden": true
      },
      {
        "id": "py-op-3-tc-9",
        "input": "12000 5 10",
        "expectedOutput": "Amount: 19546.74 CI: 7546.74",
        "isHidden": true
      },
      {
        "id": "py-op-3-tc-10",
        "input": "25000 10 1",
        "expectedOutput": "Amount: 27500.00 CI: 2500.00",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-cond-1",
    "languageId": "python",
    "language": "python",
    "level": "beginner",
    "topicId": "python-if-else-statement",
    "title": "Check Positive, Negative, or Zero",
    "slug": "check-positive-negative-or-zero",
    "difficulty": "easy",
    "problemStatement": "Given an integer N, print \"POSITIVE\" if N > 0, \"NEGATIVE\" if N < 0, and \"ZERO\" if N == 0.",
    "description": "Given an integer N, print \"POSITIVE\" if N > 0, \"NEGATIVE\" if N < 0, and \"ZERO\" if N == 0.",
    "inputFormat": "A single integer N.",
    "outputFormat": "Print \"POSITIVE\", \"NEGATIVE\", or \"ZERO\".",
    "constraints": [
      "-10^9 <= N <= 10^9"
    ],
    "examples": [
      {
        "input": "15",
        "output": "POSITIVE",
        "explanation": "15 > 0"
      },
      {
        "input": "-7",
        "output": "NEGATIVE",
        "explanation": "-7 < 0"
      },
      {
        "input": "0",
        "output": "ZERO",
        "explanation": "Equal to 0"
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-cond-1-tc-1",
        "input": "15",
        "expectedOutput": "POSITIVE",
        "isHidden": false
      },
      {
        "id": "py-cond-1-tc-2",
        "input": "-7",
        "expectedOutput": "NEGATIVE",
        "isHidden": false
      },
      {
        "id": "py-cond-1-tc-3",
        "input": "0",
        "expectedOutput": "ZERO",
        "isHidden": false
      },
      {
        "id": "py-cond-1-tc-4",
        "input": "1",
        "expectedOutput": "POSITIVE",
        "isHidden": true
      },
      {
        "id": "py-cond-1-tc-5",
        "input": "-1",
        "expectedOutput": "NEGATIVE",
        "isHidden": true
      },
      {
        "id": "py-cond-1-tc-6",
        "input": "1000000000",
        "expectedOutput": "POSITIVE",
        "isHidden": true
      },
      {
        "id": "py-cond-1-tc-7",
        "input": "-1000000000",
        "expectedOutput": "NEGATIVE",
        "isHidden": true
      },
      {
        "id": "py-cond-1-tc-8",
        "input": "42",
        "expectedOutput": "POSITIVE",
        "isHidden": true
      },
      {
        "id": "py-cond-1-tc-9",
        "input": "-999",
        "expectedOutput": "NEGATIVE",
        "isHidden": true
      },
      {
        "id": "py-cond-1-tc-10",
        "input": "999999",
        "expectedOutput": "POSITIVE",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-cond-2",
    "languageId": "python",
    "language": "python",
    "level": "beginner",
    "topicId": "python-if-else-statement",
    "title": "Largest of Three Numbers",
    "slug": "largest-of-three-numbers",
    "difficulty": "easy",
    "problemStatement": "Given three integers A, B, and C, find and print the largest number among them.",
    "description": "Given three integers A, B, and C, find and print the largest number among them.",
    "inputFormat": "Three space-separated integers A, B, C.",
    "outputFormat": "Print the largest integer.",
    "constraints": [
      "-10^9 <= A, B, C <= 10^9"
    ],
    "examples": [
      {
        "input": "10 25 15",
        "output": "25",
        "explanation": "25 is the largest."
      },
      {
        "input": "-5 -2 -10",
        "output": "-2",
        "explanation": "-2 is the largest negative number."
      },
      {
        "input": "7 7 7",
        "output": "7",
        "explanation": "All three are equal."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-cond-2-tc-1",
        "input": "10 25 15",
        "expectedOutput": "25",
        "isHidden": false
      },
      {
        "id": "py-cond-2-tc-2",
        "input": "-5 -2 -10",
        "expectedOutput": "-2",
        "isHidden": false
      },
      {
        "id": "py-cond-2-tc-3",
        "input": "7 7 7",
        "expectedOutput": "7",
        "isHidden": false
      },
      {
        "id": "py-cond-2-tc-4",
        "input": "100 20 30",
        "expectedOutput": "100",
        "isHidden": true
      },
      {
        "id": "py-cond-2-tc-5",
        "input": "5 15 50",
        "expectedOutput": "50",
        "isHidden": true
      },
      {
        "id": "py-cond-2-tc-6",
        "input": "-100 0 100",
        "expectedOutput": "100",
        "isHidden": true
      },
      {
        "id": "py-cond-2-tc-7",
        "input": "42 42 10",
        "expectedOutput": "42",
        "isHidden": true
      },
      {
        "id": "py-cond-2-tc-8",
        "input": "10 42 42",
        "expectedOutput": "42",
        "isHidden": true
      },
      {
        "id": "py-cond-2-tc-9",
        "input": "-99 -50 -1",
        "expectedOutput": "-1",
        "isHidden": true
      },
      {
        "id": "py-cond-2-tc-10",
        "input": "0 0 0",
        "expectedOutput": "0",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-cond-3",
    "languageId": "python",
    "language": "python",
    "level": "beginner",
    "topicId": "python-if-else-statement",
    "title": "Leap Year Checker",
    "slug": "leap-year-checker",
    "difficulty": "medium",
    "problemStatement": "Given a year Y, determine if it is a leap year. A year is a leap year if divisible by 4, except century years must be divisible by 400. Print \"LEAP YEAR\" or \"NOT LEAP YEAR\".",
    "description": "Given a year Y, determine if it is a leap year. A year is a leap year if divisible by 4, except century years must be divisible by 400. Print \"LEAP YEAR\" or \"NOT LEAP YEAR\".",
    "inputFormat": "A single positive integer Y.",
    "outputFormat": "Print \"LEAP YEAR\" or \"NOT LEAP YEAR\".",
    "constraints": [
      "1 <= Y <= 10000"
    ],
    "examples": [
      {
        "input": "2024",
        "output": "LEAP YEAR",
        "explanation": "2024 is divisible by 4."
      },
      {
        "input": "1900",
        "output": "NOT LEAP YEAR",
        "explanation": "1900 is divisible by 100 but not 400."
      },
      {
        "input": "2000",
        "output": "LEAP YEAR",
        "explanation": "2000 is divisible by 400."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-cond-3-tc-1",
        "input": "2024",
        "expectedOutput": "LEAP YEAR",
        "isHidden": false
      },
      {
        "id": "py-cond-3-tc-2",
        "input": "1900",
        "expectedOutput": "NOT LEAP YEAR",
        "isHidden": false
      },
      {
        "id": "py-cond-3-tc-3",
        "input": "2000",
        "expectedOutput": "LEAP YEAR",
        "isHidden": false
      },
      {
        "id": "py-cond-3-tc-4",
        "input": "2023",
        "expectedOutput": "NOT LEAP YEAR",
        "isHidden": true
      },
      {
        "id": "py-cond-3-tc-5",
        "input": "2004",
        "expectedOutput": "LEAP YEAR",
        "isHidden": true
      },
      {
        "id": "py-cond-3-tc-6",
        "input": "2100",
        "expectedOutput": "NOT LEAP YEAR",
        "isHidden": true
      },
      {
        "id": "py-cond-3-tc-7",
        "input": "2400",
        "expectedOutput": "LEAP YEAR",
        "isHidden": true
      },
      {
        "id": "py-cond-3-tc-8",
        "input": "1600",
        "expectedOutput": "LEAP YEAR",
        "isHidden": true
      },
      {
        "id": "py-cond-3-tc-9",
        "input": "1800",
        "expectedOutput": "NOT LEAP YEAR",
        "isHidden": true
      },
      {
        "id": "py-cond-3-tc-10",
        "input": "2028",
        "expectedOutput": "LEAP YEAR",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-cond-4",
    "languageId": "python",
    "language": "python",
    "level": "beginner",
    "topicId": "python-if-else-statement",
    "title": "Electricity Bill Calculator",
    "slug": "electricity-bill-calculator",
    "difficulty": "medium",
    "problemStatement": "Calculate electricity bill based on units consumed: First 100 units @ $1.5/unit, Next 100 units (101-200) @ $2.5/unit, Beyond 200 units @ $4.0/unit. Plus a fixed meter charge of $50 on all bills. Print total bill rounded to 2 decimal places.",
    "description": "Calculate electricity bill based on units consumed: First 100 units @ $1.5/unit, Next 100 units (101-200) @ $2.5/unit, Beyond 200 units @ $4.0/unit. Plus a fixed meter charge of $50 on all bills. Print total bill rounded to 2 decimal places.",
    "inputFormat": "A single non-negative integer representing units consumed.",
    "outputFormat": "Print the total bill rounded to 2 decimal places.",
    "constraints": [
      "0 <= units <= 10000"
    ],
    "examples": [
      {
        "input": "50",
        "output": "125.00",
        "explanation": "50 * 1.5 + 50 = 125.00"
      },
      {
        "input": "150",
        "output": "325.00",
        "explanation": "100 * 1.5 + 50 * 2.5 + 50 = 150 + 125 + 50 = 325.00"
      },
      {
        "input": "250",
        "output": "650.00",
        "explanation": "100*1.5 + 100*2.5 + 50*4.0 + 50 = 150 + 250 + 200 + 50 = 650.00"
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-cond-4-tc-1",
        "input": "50",
        "expectedOutput": "125.00",
        "isHidden": false
      },
      {
        "id": "py-cond-4-tc-2",
        "input": "150",
        "expectedOutput": "325.00",
        "isHidden": false
      },
      {
        "id": "py-cond-4-tc-3",
        "input": "250",
        "expectedOutput": "650.00",
        "isHidden": false
      },
      {
        "id": "py-cond-4-tc-4",
        "input": "0",
        "expectedOutput": "50.00",
        "isHidden": true
      },
      {
        "id": "py-cond-4-tc-5",
        "input": "100",
        "expectedOutput": "200.00",
        "isHidden": true
      },
      {
        "id": "py-cond-4-tc-6",
        "input": "200",
        "expectedOutput": "450.00",
        "isHidden": true
      },
      {
        "id": "py-cond-4-tc-7",
        "input": "300",
        "expectedOutput": "850.00",
        "isHidden": true
      },
      {
        "id": "py-cond-4-tc-8",
        "input": "500",
        "expectedOutput": "1650.00",
        "isHidden": true
      },
      {
        "id": "py-cond-4-tc-9",
        "input": "75",
        "expectedOutput": "162.50",
        "isHidden": true
      },
      {
        "id": "py-cond-4-tc-10",
        "input": "120",
        "expectedOutput": "250.00",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-loop-1",
    "languageId": "python",
    "language": "python",
    "level": "beginner",
    "topicId": "python-for-loop",
    "title": "Print Numbers from 1 to N",
    "slug": "print-numbers-from-1-to-n",
    "difficulty": "easy",
    "problemStatement": "Given a positive integer N, print all integers from 1 to N separated by a single space on one line.",
    "description": "Given a positive integer N, print all integers from 1 to N separated by a single space on one line.",
    "inputFormat": "A single integer N.",
    "outputFormat": "Print space-separated integers from 1 to N.",
    "constraints": [
      "1 <= N <= 1000"
    ],
    "examples": [
      {
        "input": "5",
        "output": "1 2 3 4 5",
        "explanation": "Numbers from 1 to 5."
      },
      {
        "input": "1",
        "output": "1",
        "explanation": "Single number 1."
      },
      {
        "input": "8",
        "output": "1 2 3 4 5 6 7 8",
        "explanation": "Numbers 1 to 8."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-loop-1-tc-1",
        "input": "5",
        "expectedOutput": "1 2 3 4 5",
        "isHidden": false
      },
      {
        "id": "py-loop-1-tc-2",
        "input": "1",
        "expectedOutput": "1",
        "isHidden": false
      },
      {
        "id": "py-loop-1-tc-3",
        "input": "8",
        "expectedOutput": "1 2 3 4 5 6 7 8",
        "isHidden": false
      },
      {
        "id": "py-loop-1-tc-4",
        "input": "2",
        "expectedOutput": "1 2",
        "isHidden": true
      },
      {
        "id": "py-loop-1-tc-5",
        "input": "3",
        "expectedOutput": "1 2 3",
        "isHidden": true
      },
      {
        "id": "py-loop-1-tc-6",
        "input": "10",
        "expectedOutput": "1 2 3 4 5 6 7 8 9 10",
        "isHidden": true
      },
      {
        "id": "py-loop-1-tc-7",
        "input": "12",
        "expectedOutput": "1 2 3 4 5 6 7 8 9 10 11 12",
        "isHidden": true
      },
      {
        "id": "py-loop-1-tc-8",
        "input": "15",
        "expectedOutput": "1 2 3 4 5 6 7 8 9 10 11 12 13 14 15",
        "isHidden": true
      },
      {
        "id": "py-loop-1-tc-9",
        "input": "4",
        "expectedOutput": "1 2 3 4",
        "isHidden": true
      },
      {
        "id": "py-loop-1-tc-10",
        "input": "7",
        "expectedOutput": "1 2 3 4 5 6 7",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-loop-2",
    "languageId": "python",
    "language": "python",
    "level": "beginner",
    "topicId": "python-for-loop",
    "title": "Sum of Natural Numbers up to N",
    "slug": "sum-of-natural-numbers-up-to-n",
    "difficulty": "easy",
    "problemStatement": "Given a positive integer N, compute and print the sum of all natural numbers from 1 up to N.",
    "description": "Given a positive integer N, compute and print the sum of all natural numbers from 1 up to N.",
    "inputFormat": "A single integer N.",
    "outputFormat": "Print the integer sum.",
    "constraints": [
      "1 <= N <= 10^6"
    ],
    "examples": [
      {
        "input": "5",
        "output": "15",
        "explanation": "1 + 2 + 3 + 4 + 5 = 15"
      },
      {
        "input": "10",
        "output": "55",
        "explanation": "Sum of first 10 natural numbers is 55."
      },
      {
        "input": "1",
        "output": "1",
        "explanation": "Sum up to 1 is 1."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-loop-2-tc-1",
        "input": "5",
        "expectedOutput": "15",
        "isHidden": false
      },
      {
        "id": "py-loop-2-tc-2",
        "input": "10",
        "expectedOutput": "55",
        "isHidden": false
      },
      {
        "id": "py-loop-2-tc-3",
        "input": "1",
        "expectedOutput": "1",
        "isHidden": false
      },
      {
        "id": "py-loop-2-tc-4",
        "input": "20",
        "expectedOutput": "210",
        "isHidden": true
      },
      {
        "id": "py-loop-2-tc-5",
        "input": "50",
        "expectedOutput": "1275",
        "isHidden": true
      },
      {
        "id": "py-loop-2-tc-6",
        "input": "100",
        "expectedOutput": "5050",
        "isHidden": true
      },
      {
        "id": "py-loop-2-tc-7",
        "input": "1000",
        "expectedOutput": "500500",
        "isHidden": true
      },
      {
        "id": "py-loop-2-tc-8",
        "input": "3",
        "expectedOutput": "6",
        "isHidden": true
      },
      {
        "id": "py-loop-2-tc-9",
        "input": "7",
        "expectedOutput": "28",
        "isHidden": true
      },
      {
        "id": "py-loop-2-tc-10",
        "input": "15",
        "expectedOutput": "120",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-loop-3",
    "languageId": "python",
    "language": "python",
    "level": "beginner",
    "topicId": "python-for-loop",
    "title": "Multiplication Table",
    "slug": "multiplication-table",
    "difficulty": "easy",
    "problemStatement": "Given an integer N, print the multiplication table for N from 1 to 10 in the format \"N x i = result\" on separate lines.",
    "description": "Given an integer N, print the multiplication table for N from 1 to 10 in the format \"N x i = result\" on separate lines.",
    "inputFormat": "A single integer N.",
    "outputFormat": "10 lines showing multiplication table from 1 to 10.",
    "constraints": [
      "1 <= N <= 100"
    ],
    "examples": [
      {
        "input": "3",
        "output": "3 x 1 = 3\n3 x 2 = 6\n3 x 3 = 9\n3 x 4 = 12\n3 x 5 = 15\n3 x 6 = 18\n3 x 7 = 21\n3 x 8 = 24\n3 x 9 = 27\n3 x 10 = 30",
        "explanation": "Table of 3."
      },
      {
        "input": "1",
        "output": "1 x 1 = 1\n1 x 2 = 2\n1 x 3 = 3\n1 x 4 = 4\n1 x 5 = 5\n1 x 6 = 6\n1 x 7 = 7\n1 x 8 = 8\n1 x 9 = 9\n1 x 10 = 10",
        "explanation": "Table of 1."
      },
      {
        "input": "5",
        "output": "5 x 1 = 5\n5 x 2 = 10\n5 x 3 = 15\n5 x 4 = 20\n5 x 5 = 25\n5 x 6 = 30\n5 x 7 = 35\n5 x 8 = 40\n5 x 9 = 45\n5 x 10 = 50",
        "explanation": "Table of 5."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-loop-3-tc-1",
        "input": "3",
        "expectedOutput": "3 x 1 = 3\n3 x 2 = 6\n3 x 3 = 9\n3 x 4 = 12\n3 x 5 = 15\n3 x 6 = 18\n3 x 7 = 21\n3 x 8 = 24\n3 x 9 = 27\n3 x 10 = 30",
        "isHidden": false
      },
      {
        "id": "py-loop-3-tc-2",
        "input": "1",
        "expectedOutput": "1 x 1 = 1\n1 x 2 = 2\n1 x 3 = 3\n1 x 4 = 4\n1 x 5 = 5\n1 x 6 = 6\n1 x 7 = 7\n1 x 8 = 8\n1 x 9 = 9\n1 x 10 = 10",
        "isHidden": false
      },
      {
        "id": "py-loop-3-tc-3",
        "input": "5",
        "expectedOutput": "5 x 1 = 5\n5 x 2 = 10\n5 x 3 = 15\n5 x 4 = 20\n5 x 5 = 25\n5 x 6 = 30\n5 x 7 = 35\n5 x 8 = 40\n5 x 9 = 45\n5 x 10 = 50",
        "isHidden": false
      },
      {
        "id": "py-loop-3-tc-4",
        "input": "2",
        "expectedOutput": "2 x 1 = 2\n2 x 2 = 4\n2 x 3 = 6\n2 x 4 = 8\n2 x 5 = 10\n2 x 6 = 12\n2 x 7 = 14\n2 x 8 = 16\n2 x 9 = 18\n2 x 10 = 20",
        "isHidden": true
      },
      {
        "id": "py-loop-3-tc-5",
        "input": "4",
        "expectedOutput": "4 x 1 = 4\n4 x 2 = 8\n4 x 3 = 12\n4 x 4 = 16\n4 x 5 = 20\n4 x 6 = 24\n4 x 7 = 28\n4 x 8 = 32\n4 x 9 = 36\n4 x 10 = 40",
        "isHidden": true
      },
      {
        "id": "py-loop-3-tc-6",
        "input": "7",
        "expectedOutput": "7 x 1 = 7\n7 x 2 = 14\n7 x 3 = 21\n7 x 4 = 28\n7 x 5 = 35\n7 x 6 = 42\n7 x 7 = 49\n7 x 8 = 56\n7 x 9 = 63\n7 x 10 = 70",
        "isHidden": true
      },
      {
        "id": "py-loop-3-tc-7",
        "input": "10",
        "expectedOutput": "10 x 1 = 10\n10 x 2 = 20\n10 x 3 = 30\n10 x 4 = 40\n10 x 5 = 50\n10 x 6 = 60\n10 x 7 = 70\n10 x 8 = 80\n10 x 9 = 90\n10 x 10 = 100",
        "isHidden": true
      },
      {
        "id": "py-loop-3-tc-8",
        "input": "8",
        "expectedOutput": "8 x 1 = 8\n8 x 2 = 16\n8 x 3 = 24\n8 x 4 = 32\n8 x 5 = 40\n8 x 6 = 48\n8 x 7 = 56\n8 x 8 = 64\n8 x 9 = 72\n8 x 10 = 80",
        "isHidden": true
      },
      {
        "id": "py-loop-3-tc-9",
        "input": "9",
        "expectedOutput": "9 x 1 = 9\n9 x 2 = 18\n9 x 3 = 27\n9 x 4 = 36\n9 x 5 = 45\n9 x 6 = 54\n9 x 7 = 63\n9 x 8 = 72\n9 x 9 = 81\n9 x 10 = 90",
        "isHidden": true
      },
      {
        "id": "py-loop-3-tc-10",
        "input": "12",
        "expectedOutput": "12 x 1 = 12\n12 x 2 = 24\n12 x 3 = 36\n12 x 4 = 48\n12 x 5 = 60\n12 x 6 = 72\n12 x 7 = 84\n12 x 8 = 96\n12 x 9 = 108\n12 x 10 = 120",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-loop-4",
    "languageId": "python",
    "language": "python",
    "level": "beginner",
    "topicId": "python-for-loop",
    "title": "Count Digits in an Integer",
    "slug": "count-digits-in-an-integer",
    "difficulty": "medium",
    "problemStatement": "Given an integer N (which may be negative or zero), count and print the total number of digits in its representation.",
    "description": "Given an integer N (which may be negative or zero), count and print the total number of digits in its representation.",
    "inputFormat": "A single integer N.",
    "outputFormat": "Print the count of digits.",
    "constraints": [
      "-10^12 <= N <= 10^12"
    ],
    "examples": [
      {
        "input": "12345",
        "output": "5",
        "explanation": "5 digits."
      },
      {
        "input": "-789",
        "output": "3",
        "explanation": "Negative sign does not count as digit."
      },
      {
        "input": "0",
        "output": "1",
        "explanation": "Zero has 1 digit."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-loop-4-tc-1",
        "input": "12345",
        "expectedOutput": "5",
        "isHidden": false
      },
      {
        "id": "py-loop-4-tc-2",
        "input": "-789",
        "expectedOutput": "3",
        "isHidden": false
      },
      {
        "id": "py-loop-4-tc-3",
        "input": "0",
        "expectedOutput": "1",
        "isHidden": false
      },
      {
        "id": "py-loop-4-tc-4",
        "input": "7",
        "expectedOutput": "1",
        "isHidden": true
      },
      {
        "id": "py-loop-4-tc-5",
        "input": "1000000",
        "expectedOutput": "7",
        "isHidden": true
      },
      {
        "id": "py-loop-4-tc-6",
        "input": "-1",
        "expectedOutput": "1",
        "isHidden": true
      },
      {
        "id": "py-loop-4-tc-7",
        "input": "987654321",
        "expectedOutput": "9",
        "isHidden": true
      },
      {
        "id": "py-loop-4-tc-8",
        "input": "-123456789012",
        "expectedOutput": "12",
        "isHidden": true
      },
      {
        "id": "py-loop-4-tc-9",
        "input": "50505",
        "expectedOutput": "5",
        "isHidden": true
      },
      {
        "id": "py-loop-4-tc-10",
        "input": "10",
        "expectedOutput": "2",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-loop-5",
    "languageId": "python",
    "language": "python",
    "level": "beginner",
    "topicId": "python-for-loop",
    "title": "Reverse an Integer",
    "slug": "reverse-an-integer",
    "difficulty": "medium",
    "problemStatement": "Given an integer N, reverse its digits. If N is negative, preserve the negative sign at the front. Trailing zeroes become leading zeroes and are dropped (e.g., 120 becomes 21).",
    "description": "Given an integer N, reverse its digits. If N is negative, preserve the negative sign at the front. Trailing zeroes become leading zeroes and are dropped (e.g., 120 becomes 21).",
    "inputFormat": "A single integer N.",
    "outputFormat": "Print the reversed integer.",
    "constraints": [
      "-10^9 <= N <= 10^9"
    ],
    "examples": [
      {
        "input": "1234",
        "output": "4321",
        "explanation": "Digits reversed."
      },
      {
        "input": "-567",
        "output": "-765",
        "explanation": "Negative sign preserved."
      },
      {
        "input": "1200",
        "output": "21",
        "explanation": "Trailing zeroes dropped."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-loop-5-tc-1",
        "input": "1234",
        "expectedOutput": "4321",
        "isHidden": false
      },
      {
        "id": "py-loop-5-tc-2",
        "input": "-567",
        "expectedOutput": "-765",
        "isHidden": false
      },
      {
        "id": "py-loop-5-tc-3",
        "input": "1200",
        "expectedOutput": "21",
        "isHidden": false
      },
      {
        "id": "py-loop-5-tc-4",
        "input": "0",
        "expectedOutput": "0",
        "isHidden": true
      },
      {
        "id": "py-loop-5-tc-5",
        "input": "5",
        "expectedOutput": "5",
        "isHidden": true
      },
      {
        "id": "py-loop-5-tc-6",
        "input": "-10",
        "expectedOutput": "-1",
        "isHidden": true
      },
      {
        "id": "py-loop-5-tc-7",
        "input": "100000000",
        "expectedOutput": "1",
        "isHidden": true
      },
      {
        "id": "py-loop-5-tc-8",
        "input": "-987654321",
        "expectedOutput": "-123456789",
        "isHidden": true
      },
      {
        "id": "py-loop-5-tc-9",
        "input": "102",
        "expectedOutput": "201",
        "isHidden": true
      },
      {
        "id": "py-loop-5-tc-10",
        "input": "-305",
        "expectedOutput": "-503",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-str-1",
    "languageId": "python",
    "language": "python",
    "level": "beginner",
    "topicId": "python-string-methods",
    "title": "Reverse a String",
    "slug": "reverse-a-string",
    "difficulty": "easy",
    "problemStatement": "Given a single line string S, reverse the string and print it.",
    "description": "Given a single line string S, reverse the string and print it.",
    "inputFormat": "A string S.",
    "outputFormat": "Print the reversed string.",
    "constraints": [
      "1 <= len(S) <= 10^5"
    ],
    "examples": [
      {
        "input": "hello",
        "output": "olleh",
        "explanation": "Reversed string."
      },
      {
        "input": "world",
        "output": "dlrow",
        "explanation": "Reversed."
      },
      {
        "input": "Python",
        "output": "nohtyP",
        "explanation": "Case is preserved."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-str-1-tc-1",
        "input": "hello",
        "expectedOutput": "olleh",
        "isHidden": false
      },
      {
        "id": "py-str-1-tc-2",
        "input": "world",
        "expectedOutput": "dlrow",
        "isHidden": false
      },
      {
        "id": "py-str-1-tc-3",
        "input": "Python",
        "expectedOutput": "nohtyP",
        "isHidden": false
      },
      {
        "id": "py-str-1-tc-4",
        "input": "a",
        "expectedOutput": "a",
        "isHidden": true
      },
      {
        "id": "py-str-1-tc-5",
        "input": "racecar",
        "expectedOutput": "racecar",
        "isHidden": true
      },
      {
        "id": "py-str-1-tc-6",
        "input": "OpenAI",
        "expectedOutput": "IAnepO",
        "isHidden": true
      },
      {
        "id": "py-str-1-tc-7",
        "input": "12345",
        "expectedOutput": "54321",
        "isHidden": true
      },
      {
        "id": "py-str-1-tc-8",
        "input": "ab cd",
        "expectedOutput": "dc ba",
        "isHidden": true
      },
      {
        "id": "py-str-1-tc-9",
        "input": "madam",
        "expectedOutput": "madam",
        "isHidden": true
      },
      {
        "id": "py-str-1-tc-10",
        "input": "Programming",
        "expectedOutput": "gnimmargorP",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-str-2",
    "languageId": "python",
    "language": "python",
    "level": "beginner",
    "topicId": "python-string-methods",
    "title": "Check Palindrome String",
    "slug": "check-palindrome-string",
    "difficulty": "easy",
    "problemStatement": "Given a string S, check if it is a palindrome (reads same forward and backward, case-insensitive). Print \"PALINDROME\" or \"NOT PALINDROME\".",
    "description": "Given a string S, check if it is a palindrome (reads same forward and backward, case-insensitive). Print \"PALINDROME\" or \"NOT PALINDROME\".",
    "inputFormat": "A single word S.",
    "outputFormat": "Print \"PALINDROME\" or \"NOT PALINDROME\".",
    "constraints": [
      "1 <= len(S) <= 10^4"
    ],
    "examples": [
      {
        "input": "Racecar",
        "output": "PALINDROME",
        "explanation": "Case-insensitive: racecar."
      },
      {
        "input": "hello",
        "output": "NOT PALINDROME",
        "explanation": "Not a palindrome."
      },
      {
        "input": "Madam",
        "output": "PALINDROME",
        "explanation": "Case-insensitive palindrome."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-str-2-tc-1",
        "input": "Racecar",
        "expectedOutput": "PALINDROME",
        "isHidden": false
      },
      {
        "id": "py-str-2-tc-2",
        "input": "hello",
        "expectedOutput": "NOT PALINDROME",
        "isHidden": false
      },
      {
        "id": "py-str-2-tc-3",
        "input": "Madam",
        "expectedOutput": "PALINDROME",
        "isHidden": false
      },
      {
        "id": "py-str-2-tc-4",
        "input": "level",
        "expectedOutput": "PALINDROME",
        "isHidden": true
      },
      {
        "id": "py-str-2-tc-5",
        "input": "world",
        "expectedOutput": "NOT PALINDROME",
        "isHidden": true
      },
      {
        "id": "py-str-2-tc-6",
        "input": "noon",
        "expectedOutput": "PALINDROME",
        "isHidden": true
      },
      {
        "id": "py-str-2-tc-7",
        "input": "a",
        "expectedOutput": "PALINDROME",
        "isHidden": true
      },
      {
        "id": "py-str-2-tc-8",
        "input": "Python",
        "expectedOutput": "NOT PALINDROME",
        "isHidden": true
      },
      {
        "id": "py-str-2-tc-9",
        "input": "Deified",
        "expectedOutput": "PALINDROME",
        "isHidden": true
      },
      {
        "id": "py-str-2-tc-10",
        "input": "Rotator",
        "expectedOutput": "PALINDROME",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-str-3",
    "languageId": "python",
    "language": "python",
    "level": "beginner",
    "topicId": "python-string-methods",
    "title": "Count Vowels and Consonants",
    "slug": "count-vowels-and-consonants",
    "difficulty": "medium",
    "problemStatement": "Given a string S consisting of alphabetic characters and spaces, count the number of vowels (a, e, i, o, u, case-insensitive) and consonants. Print \"Vowels: <v> Consonants: <c>\".",
    "description": "Given a string S consisting of alphabetic characters and spaces, count the number of vowels (a, e, i, o, u, case-insensitive) and consonants. Print \"Vowels: <v> Consonants: <c>\".",
    "inputFormat": "A string S.",
    "outputFormat": "Print \"Vowels: <v> Consonants: <c>\".",
    "constraints": [
      "1 <= len(S) <= 10^4"
    ],
    "examples": [
      {
        "input": "Hello World",
        "output": "Vowels: 3 Consonants: 7",
        "explanation": "e, o, o are vowels; H, l, l, W, r, l, d are consonants."
      },
      {
        "input": "Python",
        "output": "Vowels: 1 Consonants: 5",
        "explanation": "o is vowel."
      },
      {
        "input": "aeiou",
        "output": "Vowels: 5 Consonants: 0",
        "explanation": "All vowels."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-str-3-tc-1",
        "input": "Hello World",
        "expectedOutput": "Vowels: 3 Consonants: 7",
        "isHidden": false
      },
      {
        "id": "py-str-3-tc-2",
        "input": "Python",
        "expectedOutput": "Vowels: 1 Consonants: 5",
        "isHidden": false
      },
      {
        "id": "py-str-3-tc-3",
        "input": "aeiou",
        "expectedOutput": "Vowels: 5 Consonants: 0",
        "isHidden": false
      },
      {
        "id": "py-str-3-tc-4",
        "input": "bcdfg",
        "expectedOutput": "Vowels: 0 Consonants: 5",
        "isHidden": true
      },
      {
        "id": "py-str-3-tc-5",
        "input": "Antigravity",
        "expectedOutput": "Vowels: 4 Consonants: 7",
        "isHidden": true
      },
      {
        "id": "py-str-3-tc-6",
        "input": "a",
        "expectedOutput": "Vowels: 1 Consonants: 0",
        "isHidden": true
      },
      {
        "id": "py-str-3-tc-7",
        "input": "b",
        "expectedOutput": "Vowels: 0 Consonants: 1",
        "isHidden": true
      },
      {
        "id": "py-str-3-tc-8",
        "input": "Code Academy",
        "expectedOutput": "Vowels: 5 Consonants: 6",
        "isHidden": true
      },
      {
        "id": "py-str-3-tc-9",
        "input": "Quick Brown Fox",
        "expectedOutput": "Vowels: 4 Consonants: 9",
        "isHidden": true
      },
      {
        "id": "py-str-3-tc-10",
        "input": "Education",
        "expectedOutput": "Vowels: 5 Consonants: 4",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-str-4",
    "languageId": "python",
    "language": "python",
    "level": "beginner",
    "topicId": "python-string-methods",
    "title": "Find Character Frequency",
    "slug": "find-character-frequency",
    "difficulty": "medium",
    "problemStatement": "Given a string S (lowercase letters only), find the frequency of each character. Print each character and its count in alphabetical order in the format \"char:count\", separated by spaces.",
    "description": "Given a string S (lowercase letters only), find the frequency of each character. Print each character and its count in alphabetical order in the format \"char:count\", separated by spaces.",
    "inputFormat": "A string S with only lowercase letters.",
    "outputFormat": "Print space-separated \"char:count\" pairs sorted alphabetically.",
    "constraints": [
      "1 <= len(S) <= 10^5"
    ],
    "examples": [
      {
        "input": "banana",
        "output": "a:3 b:1 n:2",
        "explanation": "a occurs 3 times, b 1 time, n 2 times."
      },
      {
        "input": "apple",
        "output": "a:1 e:1 l:1 p:2",
        "explanation": "Sorted alphabetically."
      },
      {
        "input": "zzz",
        "output": "z:3",
        "explanation": "Only z."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-str-4-tc-1",
        "input": "banana",
        "expectedOutput": "a:3 b:1 n:2",
        "isHidden": false
      },
      {
        "id": "py-str-4-tc-2",
        "input": "apple",
        "expectedOutput": "a:1 e:1 l:1 p:2",
        "isHidden": false
      },
      {
        "id": "py-str-4-tc-3",
        "input": "zzz",
        "expectedOutput": "z:3",
        "isHidden": false
      },
      {
        "id": "py-str-4-tc-4",
        "input": "hello",
        "expectedOutput": "e:1 h:1 l:2 o:1",
        "isHidden": true
      },
      {
        "id": "py-str-4-tc-5",
        "input": "abracadabra",
        "expectedOutput": "a:5 b:2 c:1 d:1 r:2",
        "isHidden": true
      },
      {
        "id": "py-str-4-tc-6",
        "input": "racecar",
        "expectedOutput": "a:2 c:2 e:1 r:2",
        "isHidden": true
      },
      {
        "id": "py-str-4-tc-7",
        "input": "code",
        "expectedOutput": "c:1 d:1 e:1 o:1",
        "isHidden": true
      },
      {
        "id": "py-str-4-tc-8",
        "input": "mississippi",
        "expectedOutput": "i:4 m:1 p:2 s:4",
        "isHidden": true
      },
      {
        "id": "py-str-4-tc-9",
        "input": "abc",
        "expectedOutput": "a:1 b:1 c:1",
        "isHidden": true
      },
      {
        "id": "py-str-4-tc-10",
        "input": "aabbcc",
        "expectedOutput": "a:2 b:2 c:2",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-str-5",
    "languageId": "python",
    "language": "python",
    "level": "beginner",
    "topicId": "python-string-methods",
    "title": "Remove Duplicate Characters",
    "slug": "remove-duplicate-characters",
    "difficulty": "medium",
    "problemStatement": "Given a string S, remove all duplicate characters, retaining only the first occurrence of each character. Preserve the original relative order.",
    "description": "Given a string S, remove all duplicate characters, retaining only the first occurrence of each character. Preserve the original relative order.",
    "inputFormat": "A string S.",
    "outputFormat": "Print the string with duplicates removed.",
    "constraints": [
      "1 <= len(S) <= 10^5"
    ],
    "examples": [
      {
        "input": "programming",
        "output": "progamin",
        "explanation": "Duplicate r, g, m removed."
      },
      {
        "input": "banana",
        "output": "ban",
        "explanation": "b, a, n kept on first appearance."
      },
      {
        "input": "aaaaa",
        "output": "a",
        "explanation": "Only first a kept."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-str-5-tc-1",
        "input": "programming",
        "expectedOutput": "progamin",
        "isHidden": false
      },
      {
        "id": "py-str-5-tc-2",
        "input": "banana",
        "expectedOutput": "ban",
        "isHidden": false
      },
      {
        "id": "py-str-5-tc-3",
        "input": "aaaaa",
        "expectedOutput": "a",
        "isHidden": false
      },
      {
        "id": "py-str-5-tc-4",
        "input": "hello",
        "expectedOutput": "helo",
        "isHidden": true
      },
      {
        "id": "py-str-5-tc-5",
        "input": "abcdef",
        "expectedOutput": "abcdef",
        "isHidden": true
      },
      {
        "id": "py-str-5-tc-6",
        "input": "aabbccddeeff",
        "expectedOutput": "abcdef",
        "isHidden": true
      },
      {
        "id": "py-str-5-tc-7",
        "input": "racecar",
        "expectedOutput": "race",
        "isHidden": true
      },
      {
        "id": "py-str-5-tc-8",
        "input": "google",
        "expectedOutput": "gole",
        "isHidden": true
      },
      {
        "id": "py-str-5-tc-9",
        "input": "abracadabra",
        "expectedOutput": "abrcd",
        "isHidden": true
      },
      {
        "id": "py-str-5-tc-10",
        "input": "antigravity",
        "expectedOutput": "antigrvy",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-list-1",
    "languageId": "python",
    "language": "python",
    "level": "beginner",
    "topicId": "python-creating-lists",
    "title": "Find Maximum and Minimum Element in an Array",
    "slug": "find-maximum-and-minimum-element-in-an-array",
    "difficulty": "easy",
    "problemStatement": "Given N integers in an array, find and print the maximum and minimum elements separated by a space.",
    "description": "Given N integers in an array, find and print the maximum and minimum elements separated by a space.",
    "inputFormat": "First line integer N, second line N space-separated integers.",
    "outputFormat": "Print \"Max: <max> Min: <min>\".",
    "constraints": [
      "1 <= N <= 10^5",
      "-10^9 <= elements <= 10^9"
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
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-list-1-tc-1",
        "input": "5\n1 5 3 9 2",
        "expectedOutput": "Max: 9 Min: 1",
        "isHidden": false
      },
      {
        "id": "py-list-1-tc-2",
        "input": "3\n-5 -2 -10",
        "expectedOutput": "Max: -2 Min: -10",
        "isHidden": false
      },
      {
        "id": "py-list-1-tc-3",
        "input": "1\n100",
        "expectedOutput": "Max: 100 Min: 100",
        "isHidden": false
      },
      {
        "id": "py-list-1-tc-4",
        "input": "4\n10 20 30 40",
        "expectedOutput": "Max: 40 Min: 10",
        "isHidden": true
      },
      {
        "id": "py-list-1-tc-5",
        "input": "5\n0 0 0 0 0",
        "expectedOutput": "Max: 0 Min: 0",
        "isHidden": true
      },
      {
        "id": "py-list-1-tc-6",
        "input": "6\n-10 50 -30 20 100 -5",
        "expectedOutput": "Max: 100 Min: -30",
        "isHidden": true
      },
      {
        "id": "py-list-1-tc-7",
        "input": "4\n99 12 85 43",
        "expectedOutput": "Max: 99 Min: 12",
        "isHidden": true
      },
      {
        "id": "py-list-1-tc-8",
        "input": "5\n7 7 7 7 8",
        "expectedOutput": "Max: 8 Min: 7",
        "isHidden": true
      },
      {
        "id": "py-list-1-tc-9",
        "input": "3\n-1000 0 1000",
        "expectedOutput": "Max: 1000 Min: -1000",
        "isHidden": true
      },
      {
        "id": "py-list-1-tc-10",
        "input": "5\n4 2 8 6 1",
        "expectedOutput": "Max: 8 Min: 1",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-list-2",
    "languageId": "python",
    "language": "python",
    "level": "beginner",
    "topicId": "python-creating-lists",
    "title": "Second Largest Element in an Array",
    "slug": "second-largest-element-in-an-array",
    "difficulty": "medium",
    "problemStatement": "Given N integers in an array, find the second largest distinct element. If no second largest distinct element exists, print -1.",
    "description": "Given N integers in an array, find the second largest distinct element. If no second largest distinct element exists, print -1.",
    "inputFormat": "First line integer N, second line N space-separated integers.",
    "outputFormat": "Print the second largest distinct integer, or -1.",
    "constraints": [
      "1 <= N <= 10^5",
      "-10^9 <= elements <= 10^9"
    ],
    "examples": [
      {
        "input": "5\n12 35 1 10 34",
        "output": "34",
        "explanation": "35 is max, 34 is second max."
      },
      {
        "input": "4\n10 10 10 10",
        "output": "-1",
        "explanation": "All elements equal."
      },
      {
        "input": "2\n5 10",
        "output": "5",
        "explanation": "5 is second."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-list-2-tc-1",
        "input": "5\n12 35 1 10 34",
        "expectedOutput": "34",
        "isHidden": false
      },
      {
        "id": "py-list-2-tc-2",
        "input": "4\n10 10 10 10",
        "expectedOutput": "-1",
        "isHidden": false
      },
      {
        "id": "py-list-2-tc-3",
        "input": "2\n5 10",
        "expectedOutput": "5",
        "isHidden": false
      },
      {
        "id": "py-list-2-tc-4",
        "input": "1\n100",
        "expectedOutput": "-1",
        "isHidden": true
      },
      {
        "id": "py-list-2-tc-5",
        "input": "6\n1 2 3 4 5 6",
        "expectedOutput": "5",
        "isHidden": true
      },
      {
        "id": "py-list-2-tc-6",
        "input": "5\n-10 -5 -20 -1 -8",
        "expectedOutput": "-5",
        "isHidden": true
      },
      {
        "id": "py-list-2-tc-7",
        "input": "5\n100 100 90 90 80",
        "expectedOutput": "90",
        "isHidden": true
      },
      {
        "id": "py-list-2-tc-8",
        "input": "4\n7 2 7 3",
        "expectedOutput": "3",
        "isHidden": true
      },
      {
        "id": "py-list-2-tc-9",
        "input": "5\n0 -1 -2 -3 -4",
        "expectedOutput": "-1",
        "isHidden": true
      },
      {
        "id": "py-list-2-tc-10",
        "input": "6\n50 20 40 10 30 50",
        "expectedOutput": "40",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-list-3",
    "languageId": "python",
    "language": "python",
    "level": "beginner",
    "topicId": "python-creating-lists",
    "title": "Calculate Array Sum and Average",
    "slug": "calculate-array-sum-and-average",
    "difficulty": "easy",
    "problemStatement": "Given N integers, calculate their sum and average. Print \"Sum: <sum> Avg: <avg>\" with average rounded to 2 decimal places.",
    "description": "Given N integers, calculate their sum and average. Print \"Sum: <sum> Avg: <avg>\" with average rounded to 2 decimal places.",
    "inputFormat": "First line integer N, second line N integers.",
    "outputFormat": "Print \"Sum: <sum> Avg: <avg>\".",
    "constraints": [
      "1 <= N <= 10^5"
    ],
    "examples": [
      {
        "input": "4\n1 2 3 4",
        "output": "Sum: 10 Avg: 2.50",
        "explanation": "Sum 10, Avg 2.5."
      },
      {
        "input": "3\n10 20 30",
        "output": "Sum: 60 Avg: 20.00",
        "explanation": "Sum 60, Avg 20."
      },
      {
        "input": "1\n50",
        "output": "Sum: 50 Avg: 50.00",
        "explanation": "Single element."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-list-3-tc-1",
        "input": "4\n1 2 3 4",
        "expectedOutput": "Sum: 10 Avg: 2.50",
        "isHidden": false
      },
      {
        "id": "py-list-3-tc-2",
        "input": "3\n10 20 30",
        "expectedOutput": "Sum: 60 Avg: 20.00",
        "isHidden": false
      },
      {
        "id": "py-list-3-tc-3",
        "input": "1\n50",
        "expectedOutput": "Sum: 50 Avg: 50.00",
        "isHidden": false
      },
      {
        "id": "py-list-3-tc-4",
        "input": "5\n5 5 5 5 5",
        "expectedOutput": "Sum: 25 Avg: 5.00",
        "isHidden": true
      },
      {
        "id": "py-list-3-tc-5",
        "input": "4\n-10 10 -20 20",
        "expectedOutput": "Sum: 0 Avg: 0.00",
        "isHidden": true
      },
      {
        "id": "py-list-3-tc-6",
        "input": "5\n10 15 20 25 30",
        "expectedOutput": "Sum: 100 Avg: 20.00",
        "isHidden": true
      },
      {
        "id": "py-list-3-tc-7",
        "input": "3\n7 8 9",
        "expectedOutput": "Sum: 24 Avg: 8.00",
        "isHidden": true
      },
      {
        "id": "py-list-3-tc-8",
        "input": "5\n1 3 5 7 9",
        "expectedOutput": "Sum: 25 Avg: 5.00",
        "isHidden": true
      },
      {
        "id": "py-list-3-tc-9",
        "input": "2\n100 200",
        "expectedOutput": "Sum: 300 Avg: 150.00",
        "isHidden": true
      },
      {
        "id": "py-list-3-tc-10",
        "input": "6\n2 4 6 8 10 12",
        "expectedOutput": "Sum: 42 Avg: 7.00",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-list-4",
    "languageId": "python",
    "language": "python",
    "level": "beginner",
    "topicId": "python-creating-lists",
    "title": "Count Even and Odd Elements",
    "slug": "count-even-and-odd-elements",
    "difficulty": "easy",
    "problemStatement": "Given N integers in an array, count how many elements are even and how many are odd. Print \"Even: <evenCount> Odd: <oddCount>\".",
    "description": "Given N integers in an array, count how many elements are even and how many are odd. Print \"Even: <evenCount> Odd: <oddCount>\".",
    "inputFormat": "First line N, second line N space-separated integers.",
    "outputFormat": "Print \"Even: <evenCount> Odd: <oddCount>\".",
    "constraints": [
      "1 <= N <= 10^5"
    ],
    "examples": [
      {
        "input": "5\n1 2 3 4 5",
        "output": "Even: 2 Odd: 3",
        "explanation": "2, 4 are even; 1, 3, 5 are odd."
      },
      {
        "input": "4\n2 4 6 8",
        "output": "Even: 4 Odd: 0",
        "explanation": "All even."
      },
      {
        "input": "3\n1 3 5",
        "output": "Even: 0 Odd: 3",
        "explanation": "All odd."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-list-4-tc-1",
        "input": "5\n1 2 3 4 5",
        "expectedOutput": "Even: 2 Odd: 3",
        "isHidden": false
      },
      {
        "id": "py-list-4-tc-2",
        "input": "4\n2 4 6 8",
        "expectedOutput": "Even: 4 Odd: 0",
        "isHidden": false
      },
      {
        "id": "py-list-4-tc-3",
        "input": "3\n1 3 5",
        "expectedOutput": "Even: 0 Odd: 3",
        "isHidden": false
      },
      {
        "id": "py-list-4-tc-4",
        "input": "6\n0 1 2 3 4 5",
        "expectedOutput": "Even: 3 Odd: 3",
        "isHidden": true
      },
      {
        "id": "py-list-4-tc-5",
        "input": "1\n100",
        "expectedOutput": "Even: 1 Odd: 0",
        "isHidden": true
      },
      {
        "id": "py-list-4-tc-6",
        "input": "1\n99",
        "expectedOutput": "Even: 0 Odd: 1",
        "isHidden": true
      },
      {
        "id": "py-list-4-tc-7",
        "input": "5\n-2 -4 -6 -8 -10",
        "expectedOutput": "Even: 5 Odd: 0",
        "isHidden": true
      },
      {
        "id": "py-list-4-tc-8",
        "input": "5\n-1 -3 -5 -7 -9",
        "expectedOutput": "Even: 0 Odd: 5",
        "isHidden": true
      },
      {
        "id": "py-list-4-tc-9",
        "input": "4\n12 15 18 21",
        "expectedOutput": "Even: 2 Odd: 2",
        "isHidden": true
      },
      {
        "id": "py-list-4-tc-10",
        "input": "7\n10 20 30 40 50 60 71",
        "expectedOutput": "Even: 6 Odd: 1",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-list-5",
    "languageId": "python",
    "language": "python",
    "level": "beginner",
    "topicId": "python-creating-lists",
    "title": "Rotate an Array to the Right by K Steps",
    "slug": "rotate-an-array-to-the-right-by-k-steps",
    "difficulty": "medium",
    "problemStatement": "Given an array of N integers and a non-negative integer K, rotate the array to the right by K positions. Print the rotated array separated by spaces.",
    "description": "Given an array of N integers and a non-negative integer K, rotate the array to the right by K positions. Print the rotated array separated by spaces.",
    "inputFormat": "First line N and K, second line N space-separated integers.",
    "outputFormat": "Print the rotated array elements separated by spaces.",
    "constraints": [
      "1 <= N <= 10^5",
      "0 <= K <= 10^9"
    ],
    "examples": [
      {
        "input": "5 2\n1 2 3 4 5",
        "output": "4 5 1 2 3",
        "explanation": "Shift right by 2: 4, 5 wrap to front."
      },
      {
        "input": "4 1\n10 20 30 40",
        "output": "40 10 20 30",
        "explanation": "Shift right by 1."
      },
      {
        "input": "3 0\n1 2 3",
        "output": "1 2 3",
        "explanation": "0 rotation."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-list-5-tc-1",
        "input": "5 2\n1 2 3 4 5",
        "expectedOutput": "4 5 1 2 3",
        "isHidden": false
      },
      {
        "id": "py-list-5-tc-2",
        "input": "4 1\n10 20 30 40",
        "expectedOutput": "40 10 20 30",
        "isHidden": false
      },
      {
        "id": "py-list-5-tc-3",
        "input": "3 0\n1 2 3",
        "expectedOutput": "1 2 3",
        "isHidden": false
      },
      {
        "id": "py-list-5-tc-4",
        "input": "5 5\n1 2 3 4 5",
        "expectedOutput": "1 2 3 4 5",
        "isHidden": true
      },
      {
        "id": "py-list-5-tc-5",
        "input": "4 6\n1 2 3 4",
        "expectedOutput": "3 4 1 2",
        "isHidden": true
      },
      {
        "id": "py-list-5-tc-6",
        "input": "1 10\n42",
        "expectedOutput": "42",
        "isHidden": true
      },
      {
        "id": "py-list-5-tc-7",
        "input": "6 3\n10 20 30 40 50 60",
        "expectedOutput": "40 50 60 10 20 30",
        "isHidden": true
      },
      {
        "id": "py-list-5-tc-8",
        "input": "5 1\n5 1 2 3 4",
        "expectedOutput": "4 5 1 2 3",
        "isHidden": true
      },
      {
        "id": "py-list-5-tc-9",
        "input": "4 3\n1 2 3 4",
        "expectedOutput": "2 3 4 1",
        "isHidden": true
      },
      {
        "id": "py-list-5-tc-10",
        "input": "7 4\n1 2 3 4 5 6 7",
        "expectedOutput": "4 5 6 7 1 2 3",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-tup-1",
    "languageId": "python",
    "language": "python",
    "level": "beginner",
    "topicId": "python-creating-tuples",
    "title": "Sum and Min-Max in a Tuple",
    "slug": "sum-and-min-max-in-a-tuple",
    "difficulty": "easy",
    "problemStatement": "Given N integers representing elements of a tuple, compute the sum, minimum, and maximum element. Print \"Sum: <sum> Min: <min> Max: <max>\".",
    "description": "Given N integers representing elements of a tuple, compute the sum, minimum, and maximum element. Print \"Sum: <sum> Min: <min> Max: <max>\".",
    "inputFormat": "First line N, second line N integers.",
    "outputFormat": "Print \"Sum: <sum> Min: <min> Max: <max>\".",
    "constraints": [
      "1 <= N <= 10^4"
    ],
    "examples": [
      {
        "input": "4\n10 20 30 40",
        "output": "Sum: 100 Min: 10 Max: 40",
        "explanation": "Tuple calculations."
      },
      {
        "input": "3\n-5 0 5",
        "output": "Sum: 0 Min: -5 Max: 5",
        "explanation": "Tuple with zero and negatives."
      },
      {
        "input": "1\n7",
        "output": "Sum: 7 Min: 7 Max: 7",
        "explanation": "Single element tuple."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-tup-1-tc-1",
        "input": "4\n10 20 30 40",
        "expectedOutput": "Sum: 100 Min: 10 Max: 40",
        "isHidden": false
      },
      {
        "id": "py-tup-1-tc-2",
        "input": "3\n-5 0 5",
        "expectedOutput": "Sum: 0 Min: -5 Max: 5",
        "isHidden": false
      },
      {
        "id": "py-tup-1-tc-3",
        "input": "1\n7",
        "expectedOutput": "Sum: 7 Min: 7 Max: 7",
        "isHidden": false
      },
      {
        "id": "py-tup-1-tc-4",
        "input": "5\n1 2 3 4 5",
        "expectedOutput": "Sum: 15 Min: 1 Max: 5",
        "isHidden": true
      },
      {
        "id": "py-tup-1-tc-5",
        "input": "4\n-10 -20 -30 -40",
        "expectedOutput": "Sum: -100 Min: -40 Max: -10",
        "isHidden": true
      },
      {
        "id": "py-tup-1-tc-6",
        "input": "5\n100 200 50 150 250",
        "expectedOutput": "Sum: 750 Min: 50 Max: 250",
        "isHidden": true
      },
      {
        "id": "py-tup-1-tc-7",
        "input": "2\n50 50",
        "expectedOutput": "Sum: 100 Min: 50 Max: 50",
        "isHidden": true
      },
      {
        "id": "py-tup-1-tc-8",
        "input": "6\n3 6 9 12 15 18",
        "expectedOutput": "Sum: 63 Min: 3 Max: 18",
        "isHidden": true
      },
      {
        "id": "py-tup-1-tc-9",
        "input": "4\n12 45 23 8",
        "expectedOutput": "Sum: 88 Min: 8 Max: 45",
        "isHidden": true
      },
      {
        "id": "py-tup-1-tc-10",
        "input": "5\n0 10 20 30 40",
        "expectedOutput": "Sum: 100 Min: 0 Max: 40",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-tup-2",
    "languageId": "python",
    "language": "python",
    "level": "beginner",
    "topicId": "python-creating-tuples",
    "title": "Count Occurrences in a Tuple",
    "slug": "count-occurrences-in-a-tuple",
    "difficulty": "easy",
    "problemStatement": "Given N integers in a tuple and a target value K, count the number of times K appears in the tuple using tuple.count().",
    "description": "Given N integers in a tuple and a target value K, count the number of times K appears in the tuple using tuple.count().",
    "inputFormat": "First line N, second line N space-separated integers, third line K.",
    "outputFormat": "Print the count of occurrences.",
    "constraints": [
      "1 <= N <= 10^4"
    ],
    "examples": [
      {
        "input": "6\n1 2 3 2 4 2\n2",
        "output": "3",
        "explanation": "2 appears 3 times."
      },
      {
        "input": "4\n5 5 5 5\n5",
        "output": "4",
        "explanation": "5 appears 4 times."
      },
      {
        "input": "3\n1 2 3\n9",
        "output": "0",
        "explanation": "9 not in tuple."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-tup-2-tc-1",
        "input": "6\n1 2 3 2 4 2\n2",
        "expectedOutput": "3",
        "isHidden": false
      },
      {
        "id": "py-tup-2-tc-2",
        "input": "4\n5 5 5 5\n5",
        "expectedOutput": "4",
        "isHidden": false
      },
      {
        "id": "py-tup-2-tc-3",
        "input": "3\n1 2 3\n9",
        "expectedOutput": "0",
        "isHidden": false
      },
      {
        "id": "py-tup-2-tc-4",
        "input": "5\n10 20 10 30 10\n10",
        "expectedOutput": "3",
        "isHidden": true
      },
      {
        "id": "py-tup-2-tc-5",
        "input": "1\n7\n7",
        "expectedOutput": "1",
        "isHidden": true
      },
      {
        "id": "py-tup-2-tc-6",
        "input": "1\n7\n8",
        "expectedOutput": "0",
        "isHidden": true
      },
      {
        "id": "py-tup-2-tc-7",
        "input": "6\n-1 -2 -1 -3 -1 -4\n-1",
        "expectedOutput": "3",
        "isHidden": true
      },
      {
        "id": "py-tup-2-tc-8",
        "input": "5\n0 0 0 1 0\n0",
        "expectedOutput": "4",
        "isHidden": true
      },
      {
        "id": "py-tup-2-tc-9",
        "input": "4\n100 200 300 400\n300",
        "expectedOutput": "1",
        "isHidden": true
      },
      {
        "id": "py-tup-2-tc-10",
        "input": "7\n2 3 2 3 2 3 2\n3",
        "expectedOutput": "3",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-tup-3",
    "languageId": "python",
    "language": "python",
    "level": "beginner",
    "topicId": "python-creating-tuples",
    "title": "Swap and Unpack Tuples",
    "slug": "swap-and-unpack-tuples",
    "difficulty": "medium",
    "problemStatement": "Given four integers a, b, c, d forming two tuples t1 = (a, b) and t2 = (c, d), swap the tuples so t1 becomes (c, d) and t2 becomes (a, b), then unpack and print all four values \"t1: (c, d) t2: (a, b)\".",
    "description": "Given four integers a, b, c, d forming two tuples t1 = (a, b) and t2 = (c, d), swap the tuples so t1 becomes (c, d) and t2 becomes (a, b), then unpack and print all four values \"t1: (c, d) t2: (a, b)\".",
    "inputFormat": "Four space-separated integers a, b, c, d.",
    "outputFormat": "Print \"t1: (<c>, <d>) t2: (<a>, <b>)\".",
    "constraints": [
      "-10^5 <= a, b, c, d <= 10^5"
    ],
    "examples": [
      {
        "input": "1 2 3 4",
        "output": "t1: (3, 4) t2: (1, 2)",
        "explanation": "Tuples swapped."
      },
      {
        "input": "10 20 30 40",
        "output": "t1: (30, 40) t2: (10, 20)",
        "explanation": "Swapped values."
      },
      {
        "input": "0 0 1 1",
        "output": "t1: (1, 1) t2: (0, 0)",
        "explanation": "Swapped."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-tup-3-tc-1",
        "input": "1 2 3 4",
        "expectedOutput": "t1: (3, 4) t2: (1, 2)",
        "isHidden": false
      },
      {
        "id": "py-tup-3-tc-2",
        "input": "10 20 30 40",
        "expectedOutput": "t1: (30, 40) t2: (10, 20)",
        "isHidden": false
      },
      {
        "id": "py-tup-3-tc-3",
        "input": "0 0 1 1",
        "expectedOutput": "t1: (1, 1) t2: (0, 0)",
        "isHidden": false
      },
      {
        "id": "py-tup-3-tc-4",
        "input": "-1 -2 5 6",
        "expectedOutput": "t1: (5, 6) t2: (-1, -2)",
        "isHidden": true
      },
      {
        "id": "py-tup-3-tc-5",
        "input": "7 8 7 8",
        "expectedOutput": "t1: (7, 8) t2: (7, 8)",
        "isHidden": true
      },
      {
        "id": "py-tup-3-tc-6",
        "input": "100 200 -50 -100",
        "expectedOutput": "t1: (-50, -100) t2: (100, 200)",
        "isHidden": true
      },
      {
        "id": "py-tup-3-tc-7",
        "input": "5 10 15 20",
        "expectedOutput": "t1: (15, 20) t2: (5, 10)",
        "isHidden": true
      },
      {
        "id": "py-tup-3-tc-8",
        "input": "9 9 3 3",
        "expectedOutput": "t1: (3, 3) t2: (9, 9)",
        "isHidden": true
      },
      {
        "id": "py-tup-3-tc-9",
        "input": "12 34 56 78",
        "expectedOutput": "t1: (56, 78) t2: (12, 34)",
        "isHidden": true
      },
      {
        "id": "py-tup-3-tc-10",
        "input": "-10 0 0 10",
        "expectedOutput": "t1: (0, 10) t2: (-10, 0)",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-set-1",
    "languageId": "python",
    "language": "python",
    "level": "beginner",
    "topicId": "python-creating-sets",
    "title": "Remove Duplicates from List using Set",
    "slug": "remove-duplicates-from-list-using-set",
    "difficulty": "easy",
    "problemStatement": "Given N integers, remove all duplicate values and print the unique elements sorted in ascending order separated by spaces.",
    "description": "Given N integers, remove all duplicate values and print the unique elements sorted in ascending order separated by spaces.",
    "inputFormat": "First line N, second line N space-separated integers.",
    "outputFormat": "Print sorted unique integers separated by space.",
    "constraints": [
      "1 <= N <= 10^5"
    ],
    "examples": [
      {
        "input": "6\n4 2 4 1 2 3",
        "output": "1 2 3 4",
        "explanation": "Unique elements sorted."
      },
      {
        "input": "3\n5 5 5",
        "output": "5",
        "explanation": "Only 5 is unique."
      },
      {
        "input": "4\n1 2 3 4",
        "output": "1 2 3 4",
        "explanation": "Already unique."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-set-1-tc-1",
        "input": "6\n4 2 4 1 2 3",
        "expectedOutput": "1 2 3 4",
        "isHidden": false
      },
      {
        "id": "py-set-1-tc-2",
        "input": "3\n5 5 5",
        "expectedOutput": "5",
        "isHidden": false
      },
      {
        "id": "py-set-1-tc-3",
        "input": "4\n1 2 3 4",
        "expectedOutput": "1 2 3 4",
        "isHidden": false
      },
      {
        "id": "py-set-1-tc-4",
        "input": "5\n10 20 10 30 20",
        "expectedOutput": "10 20 30",
        "isHidden": true
      },
      {
        "id": "py-set-1-tc-5",
        "input": "1\n42",
        "expectedOutput": "42",
        "isHidden": true
      },
      {
        "id": "py-set-1-tc-6",
        "input": "7\n9 1 9 2 9 3 9",
        "expectedOutput": "1 2 3 9",
        "isHidden": true
      },
      {
        "id": "py-set-1-tc-7",
        "input": "5\n-5 0 5 -5 0",
        "expectedOutput": "-5 0 5",
        "isHidden": true
      },
      {
        "id": "py-set-1-tc-8",
        "input": "6\n100 50 100 25 50 75",
        "expectedOutput": "25 50 75 100",
        "isHidden": true
      },
      {
        "id": "py-set-1-tc-9",
        "input": "4\n3 2 1 0",
        "expectedOutput": "0 1 2 3",
        "isHidden": true
      },
      {
        "id": "py-set-1-tc-10",
        "input": "5\n8 8 8 8 9",
        "expectedOutput": "8 9",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-set-2",
    "languageId": "python",
    "language": "python",
    "level": "beginner",
    "topicId": "python-creating-sets",
    "title": "Union and Intersection of Two Sets",
    "slug": "union-and-intersection-of-two-sets",
    "difficulty": "easy",
    "problemStatement": "Given two sets of integers A and B, compute their Union (elements in either) and Intersection (elements in both). Print Union sorted on first line, Intersection sorted on second line. If intersection is empty, print \"EMPTY\".",
    "description": "Given two sets of integers A and B, compute their Union (elements in either) and Intersection (elements in both). Print Union sorted on first line, Intersection sorted on second line. If intersection is empty, print \"EMPTY\".",
    "inputFormat": "First line N (size of A) and elements of A; Second line M (size of B) and elements of B.",
    "outputFormat": "Line 1: Sorted union elements. Line 2: Sorted intersection elements or \"EMPTY\".",
    "constraints": [
      "1 <= N, M <= 10^4"
    ],
    "examples": [
      {
        "input": "3 1 2 3\n3 2 3 4",
        "output": "1 2 3 4\n2 3",
        "explanation": "Union is 1 2 3 4, Intersection is 2 3."
      },
      {
        "input": "2 1 2\n2 3 4",
        "output": "1 2 3 4\nEMPTY",
        "explanation": "No common elements."
      },
      {
        "input": "2 5 10\n2 5 10",
        "output": "5 10\n5 10",
        "explanation": "Equal sets."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-set-2-tc-1",
        "input": "3 1 2 3\n3 2 3 4",
        "expectedOutput": "1 2 3 4\n2 3",
        "isHidden": false
      },
      {
        "id": "py-set-2-tc-2",
        "input": "2 1 2\n2 3 4",
        "expectedOutput": "1 2 3 4\nEMPTY",
        "isHidden": false
      },
      {
        "id": "py-set-2-tc-3",
        "input": "2 5 10\n2 5 10",
        "expectedOutput": "5 10\n5 10",
        "isHidden": false
      },
      {
        "id": "py-set-2-tc-4",
        "input": "4 1 3 5 7\n4 2 4 6 8",
        "expectedOutput": "1 2 3 4 5 6 7 8\nEMPTY",
        "isHidden": true
      },
      {
        "id": "py-set-2-tc-5",
        "input": "3 10 20 30\n3 20 30 40",
        "expectedOutput": "10 20 30 40\n20 30",
        "isHidden": true
      },
      {
        "id": "py-set-2-tc-6",
        "input": "1 100\n1 100",
        "expectedOutput": "100\n100",
        "isHidden": true
      },
      {
        "id": "py-set-2-tc-7",
        "input": "1 10\n1 20",
        "expectedOutput": "10 20\nEMPTY",
        "isHidden": true
      },
      {
        "id": "py-set-2-tc-8",
        "input": "3 5 6 7\n2 6 7",
        "expectedOutput": "5 6 7\n6 7",
        "isHidden": true
      },
      {
        "id": "py-set-2-tc-9",
        "input": "4 2 4 6 8\n2 4 8",
        "expectedOutput": "2 4 6 8\n4 8",
        "isHidden": true
      },
      {
        "id": "py-set-2-tc-10",
        "input": "3 0 1 2\n3 -1 0 1",
        "expectedOutput": "-1 0 1 2\n0 1",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-set-3",
    "languageId": "python",
    "language": "python",
    "level": "beginner",
    "topicId": "python-creating-sets",
    "title": "Symmetric Difference of Two Sets",
    "slug": "symmetric-difference-of-two-sets",
    "difficulty": "medium",
    "problemStatement": "Given two sets A and B, print their symmetric difference (elements in A or B, but not both) in ascending sorted order. If empty, print \"EMPTY\".",
    "description": "Given two sets A and B, print their symmetric difference (elements in A or B, but not both) in ascending sorted order. If empty, print \"EMPTY\".",
    "inputFormat": "First line size of A and elements; Second line size of B and elements.",
    "outputFormat": "Print space-separated sorted elements or \"EMPTY\".",
    "constraints": [
      "1 <= size <= 10^4"
    ],
    "examples": [
      {
        "input": "3 1 2 3\n3 2 3 4",
        "output": "1 4",
        "explanation": "1 and 4 are unique to each set."
      },
      {
        "input": "2 5 6\n2 5 6",
        "output": "EMPTY",
        "explanation": "All elements shared."
      },
      {
        "input": "2 10 20\n2 30 40",
        "output": "10 20 30 40",
        "explanation": "No overlap."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-set-3-tc-1",
        "input": "3 1 2 3\n3 2 3 4",
        "expectedOutput": "1 4",
        "isHidden": false
      },
      {
        "id": "py-set-3-tc-2",
        "input": "2 5 6\n2 5 6",
        "expectedOutput": "EMPTY",
        "isHidden": false
      },
      {
        "id": "py-set-3-tc-3",
        "input": "2 10 20\n2 30 40",
        "expectedOutput": "10 20 30 40",
        "isHidden": false
      },
      {
        "id": "py-set-3-tc-4",
        "input": "4 1 2 3 4\n2 3 4",
        "expectedOutput": "1 2",
        "isHidden": true
      },
      {
        "id": "py-set-3-tc-5",
        "input": "3 10 20 30\n3 20 40 50",
        "expectedOutput": "10 30 40 50",
        "isHidden": true
      },
      {
        "id": "py-set-3-tc-6",
        "input": "1 7\n1 7",
        "expectedOutput": "EMPTY",
        "isHidden": true
      },
      {
        "id": "py-set-3-tc-7",
        "input": "1 5\n1 9",
        "expectedOutput": "5 9",
        "isHidden": true
      },
      {
        "id": "py-set-3-tc-8",
        "input": "3 2 4 6\n3 4 6 8",
        "expectedOutput": "2 8",
        "isHidden": true
      },
      {
        "id": "py-set-3-tc-9",
        "input": "4 10 15 20 25\n2 15 25",
        "expectedOutput": "10 20",
        "isHidden": true
      },
      {
        "id": "py-set-3-tc-10",
        "input": "3 0 1 2\n3 1 2 3",
        "expectedOutput": "0 3",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-dict-1",
    "languageId": "python",
    "language": "python",
    "level": "beginner",
    "topicId": "python-creating-dictionaries",
    "title": "Word Frequency Counter",
    "slug": "word-frequency-counter",
    "difficulty": "easy",
    "problemStatement": "Given a sentence of space-separated words, count the frequency of each word (case-sensitive). Print the words sorted alphabetically with their count in the format \"word:count\" separated by spaces.",
    "description": "Given a sentence of space-separated words, count the frequency of each word (case-sensitive). Print the words sorted alphabetically with their count in the format \"word:count\" separated by spaces.",
    "inputFormat": "A single line of space-separated words.",
    "outputFormat": "Print sorted \"word:count\" pairs.",
    "constraints": [
      "1 <= words <= 10^4"
    ],
    "examples": [
      {
        "input": "apple banana apple cherry banana apple",
        "output": "apple:3 banana:2 cherry:1",
        "explanation": "Frequencies counted."
      },
      {
        "input": "cat dog cat dog bird",
        "output": "bird:1 cat:2 dog:2",
        "explanation": "Alphabetical order."
      },
      {
        "input": "python python",
        "output": "python:2",
        "explanation": "Single repeated word."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-dict-1-tc-1",
        "input": "apple banana apple cherry banana apple",
        "expectedOutput": "apple:3 banana:2 cherry:1",
        "isHidden": false
      },
      {
        "id": "py-dict-1-tc-2",
        "input": "cat dog cat dog bird",
        "expectedOutput": "bird:1 cat:2 dog:2",
        "isHidden": false
      },
      {
        "id": "py-dict-1-tc-3",
        "input": "python python",
        "expectedOutput": "python:2",
        "isHidden": false
      },
      {
        "id": "py-dict-1-tc-4",
        "input": "a b a b c a",
        "expectedOutput": "a:3 b:2 c:1",
        "isHidden": true
      },
      {
        "id": "py-dict-1-tc-5",
        "input": "one two three",
        "expectedOutput": "one:1 three:1 two:1",
        "isHidden": true
      },
      {
        "id": "py-dict-1-tc-6",
        "input": "code test code test deploy",
        "expectedOutput": "code:2 deploy:1 test:2",
        "isHidden": true
      },
      {
        "id": "py-dict-1-tc-7",
        "input": "hello world hello",
        "expectedOutput": "hello:2 world:1",
        "isHidden": true
      },
      {
        "id": "py-dict-1-tc-8",
        "input": "red blue green red green yellow",
        "expectedOutput": "blue:1 green:2 red:2 yellow:1",
        "isHidden": true
      },
      {
        "id": "py-dict-1-tc-9",
        "input": "x y z",
        "expectedOutput": "x:1 y:1 z:1",
        "isHidden": true
      },
      {
        "id": "py-dict-1-tc-10",
        "input": "go go go",
        "expectedOutput": "go:3",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-dict-2",
    "languageId": "python",
    "language": "python",
    "level": "beginner",
    "topicId": "python-creating-dictionaries",
    "title": "Merge Two Dictionaries with Summed Values",
    "slug": "merge-two-dictionaries-with-summed-values",
    "difficulty": "medium",
    "problemStatement": "Given two dictionaries of items and integer quantities, merge them such that if a key exists in both dictionaries, its values are added together. Print sorted \"key:total\" pairs separated by spaces.",
    "description": "Given two dictionaries of items and integer quantities, merge them such that if a key exists in both dictionaries, its values are added together. Print sorted \"key:total\" pairs separated by spaces.",
    "inputFormat": "First line N (pairs in dict 1) followed by key value pairs; Second line M followed by pairs in dict 2.",
    "outputFormat": "Print sorted \"key:total\" pairs.",
    "constraints": [
      "1 <= N, M <= 10^3"
    ],
    "examples": [
      {
        "input": "2 a 10 b 20\n2 b 15 c 30",
        "output": "a:10 b:35 c:30",
        "explanation": "b summed to 20 + 15 = 35."
      },
      {
        "input": "1 x 5\n1 y 10",
        "output": "x:5 y:10",
        "explanation": "No overlap."
      },
      {
        "input": "2 k1 100 k2 200\n2 k1 50 k2 50",
        "output": "k1:150 k2:250",
        "explanation": "All keys overlap."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-dict-2-tc-1",
        "input": "2 a 10 b 20\n2 b 15 c 30",
        "expectedOutput": "a:10 b:35 c:30",
        "isHidden": false
      },
      {
        "id": "py-dict-2-tc-2",
        "input": "1 x 5\n1 y 10",
        "expectedOutput": "x:5 y:10",
        "isHidden": false
      },
      {
        "id": "py-dict-2-tc-3",
        "input": "2 k1 100 k2 200\n2 k1 50 k2 50",
        "expectedOutput": "k1:150 k2:250",
        "isHidden": false
      },
      {
        "id": "py-dict-2-tc-4",
        "input": "3 a 1 b 2 c 3\n1 d 4",
        "expectedOutput": "a:1 b:2 c:3 d:4",
        "isHidden": true
      },
      {
        "id": "py-dict-2-tc-5",
        "input": "2 apples 5 oranges 10\n2 apples 7 bananas 12",
        "expectedOutput": "apples:12 bananas:12 oranges:10",
        "isHidden": true
      },
      {
        "id": "py-dict-2-tc-6",
        "input": "1 m 50\n1 m 50",
        "expectedOutput": "m:100",
        "isHidden": true
      },
      {
        "id": "py-dict-2-tc-7",
        "input": "3 p 10 q 20 r 30\n3 p 1 q 2 r 3",
        "expectedOutput": "p:11 q:22 r:33",
        "isHidden": true
      },
      {
        "id": "py-dict-2-tc-8",
        "input": "2 x 0 y 5\n2 x 5 y 0",
        "expectedOutput": "x:5 y:5",
        "isHidden": true
      },
      {
        "id": "py-dict-2-tc-9",
        "input": "2 alpha 100 beta 200\n1 gamma 300",
        "expectedOutput": "alpha:100 beta:200 gamma:300",
        "isHidden": true
      },
      {
        "id": "py-dict-2-tc-10",
        "input": "3 u 10 v 20 w 30\n2 v 10 w 20",
        "expectedOutput": "u:10 v:30 w:50",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-dict-3",
    "languageId": "python",
    "language": "python",
    "level": "beginner",
    "topicId": "python-creating-dictionaries",
    "title": "Invert a Dictionary (Keys become Values)",
    "slug": "invert-a-dictionary-keys-become-values",
    "difficulty": "medium",
    "problemStatement": "Given N key-value pairs (where all keys and values are unique strings), invert the dictionary so that values become keys and keys become values. Print sorted \"newKey:newValue\" pairs.",
    "description": "Given N key-value pairs (where all keys and values are unique strings), invert the dictionary so that values become keys and keys become values. Print sorted \"newKey:newValue\" pairs.",
    "inputFormat": "First line N, followed by N key-value string pairs.",
    "outputFormat": "Print sorted \"newKey:newValue\" pairs.",
    "constraints": [
      "1 <= N <= 10^3"
    ],
    "examples": [
      {
        "input": "3 a 1 b 2 c 3",
        "output": "1:a 2:b 3:c",
        "explanation": "Inverted pairs sorted by new keys."
      },
      {
        "input": "2 name alice role admin",
        "output": "admin:role alice:name",
        "explanation": "Keys and values swapped."
      },
      {
        "input": "1 x y",
        "output": "y:x",
        "explanation": "Single pair."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-dict-3-tc-1",
        "input": "3 a 1 b 2 c 3",
        "expectedOutput": "1:a 2:b 3:c",
        "isHidden": false
      },
      {
        "id": "py-dict-3-tc-2",
        "input": "2 name alice role admin",
        "expectedOutput": "admin:role alice:name",
        "isHidden": false
      },
      {
        "id": "py-dict-3-tc-3",
        "input": "1 x y",
        "expectedOutput": "y:x",
        "isHidden": false
      },
      {
        "id": "py-dict-3-tc-4",
        "input": "3 cat feline dog canine bird avian",
        "expectedOutput": "avian:bird canine:dog feline:cat",
        "isHidden": true
      },
      {
        "id": "py-dict-3-tc-5",
        "input": "2 us usa in india",
        "expectedOutput": "india:in usa:us",
        "isHidden": true
      },
      {
        "id": "py-dict-3-tc-6",
        "input": "3 k1 v1 k2 v2 k3 v3",
        "expectedOutput": "v1:k1 v2:k2 v3:k3",
        "isHidden": true
      },
      {
        "id": "py-dict-3-tc-7",
        "input": "2 first 1 second 2",
        "expectedOutput": "1:first 2:second",
        "isHidden": true
      },
      {
        "id": "py-dict-3-tc-8",
        "input": "4 p 4 q 3 r 2 s 1",
        "expectedOutput": "1:s 2:r 3:q 4:p",
        "isHidden": true
      },
      {
        "id": "py-dict-3-tc-9",
        "input": "2 true 1 false 0",
        "expectedOutput": "0:false 1:true",
        "isHidden": true
      },
      {
        "id": "py-dict-3-tc-10",
        "input": "3 red r green g blue b",
        "expectedOutput": "b:blue g:green r:red",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-dict-4",
    "languageId": "python",
    "language": "python",
    "level": "beginner",
    "topicId": "python-creating-dictionaries",
    "title": "Student Grade Lookup and Class Average",
    "slug": "student-grade-lookup-and-class-average",
    "difficulty": "medium",
    "problemStatement": "Given N student name and grade pairs, calculate the class average grade. Print \"Average: <avg>\" rounded to 2 decimal places, followed on the next line by the names of students who scored strictly above average sorted alphabetically separated by space. If none, print \"NONE\".",
    "description": "Given N student name and grade pairs, calculate the class average grade. Print \"Average: <avg>\" rounded to 2 decimal places, followed on the next line by the names of students who scored strictly above average sorted alphabetically separated by space. If none, print \"NONE\".",
    "inputFormat": "First line N, followed by N pairs of name (string) and grade (int).",
    "outputFormat": "Line 1: \"Average: <avg>\". Line 2: Space-separated student names or \"NONE\".",
    "constraints": [
      "1 <= N <= 10^3",
      "0 <= grade <= 100"
    ],
    "examples": [
      {
        "input": "3 Alice 90 Bob 70 Charlie 80",
        "output": "Average: 80.00\nAlice",
        "explanation": "Average 80, Alice (90) is above."
      },
      {
        "input": "2 David 85 Emma 85",
        "output": "Average: 85.00\nNONE",
        "explanation": "Neither strictly above."
      },
      {
        "input": "4 Amy 100 Ben 50 Cam 90 Dan 60",
        "output": "Average: 75.00\nAmy Cam",
        "explanation": "Amy and Cam above average 75."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-dict-4-tc-1",
        "input": "3 Alice 90 Bob 70 Charlie 80",
        "expectedOutput": "Average: 80.00\nAlice",
        "isHidden": false
      },
      {
        "id": "py-dict-4-tc-2",
        "input": "2 David 85 Emma 85",
        "expectedOutput": "Average: 85.00\nNONE",
        "isHidden": false
      },
      {
        "id": "py-dict-4-tc-3",
        "input": "4 Amy 100 Ben 50 Cam 90 Dan 60",
        "expectedOutput": "Average: 75.00\nAmy Cam",
        "isHidden": false
      },
      {
        "id": "py-dict-4-tc-4",
        "input": "1 Solo 95",
        "expectedOutput": "Average: 95.00\nNONE",
        "isHidden": true
      },
      {
        "id": "py-dict-4-tc-5",
        "input": "3 Frank 60 Grace 70 Harry 80",
        "expectedOutput": "Average: 70.00\nHarry",
        "isHidden": true
      },
      {
        "id": "py-dict-4-tc-6",
        "input": "4 Ivy 90 Jack 92 Kate 88 Leo 90",
        "expectedOutput": "Average: 90.00\nJack",
        "isHidden": true
      },
      {
        "id": "py-dict-4-tc-7",
        "input": "3 Mia 50 Noah 60 Olivia 70",
        "expectedOutput": "Average: 60.00\nOlivia",
        "isHidden": true
      },
      {
        "id": "py-dict-4-tc-8",
        "input": "2 Pete 40 Quinn 80",
        "expectedOutput": "Average: 60.00\nQuinn",
        "isHidden": true
      },
      {
        "id": "py-dict-4-tc-9",
        "input": "3 Sam 100 Tim 100 Uma 40",
        "expectedOutput": "Average: 80.00\nSam Tim",
        "isHidden": true
      },
      {
        "id": "py-dict-4-tc-10",
        "input": "5 A 20 B 40 C 60 D 80 E 100",
        "expectedOutput": "Average: 60.00\nD E",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-fn-1",
    "languageId": "python",
    "language": "python",
    "level": "beginner",
    "topicId": "python-defining-functions",
    "title": "Prime Number Checker Function",
    "slug": "prime-number-checker-function",
    "difficulty": "easy",
    "problemStatement": "Write a function is_prime(n) that returns whether an integer N is prime. Print \"PRIME\" if prime, or \"NOT PRIME\" otherwise.",
    "description": "Write a function is_prime(n) that returns whether an integer N is prime. Print \"PRIME\" if prime, or \"NOT PRIME\" otherwise.",
    "inputFormat": "A single positive integer N.",
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
        "explanation": "12 has divisors 2, 3, 4, 6."
      },
      {
        "input": "1",
        "output": "NOT PRIME",
        "explanation": "1 is not prime by definition."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-fn-1-tc-1",
        "input": "7",
        "expectedOutput": "PRIME",
        "isHidden": false
      },
      {
        "id": "py-fn-1-tc-2",
        "input": "12",
        "expectedOutput": "NOT PRIME",
        "isHidden": false
      },
      {
        "id": "py-fn-1-tc-3",
        "input": "1",
        "expectedOutput": "NOT PRIME",
        "isHidden": false
      },
      {
        "id": "py-fn-1-tc-4",
        "input": "2",
        "expectedOutput": "PRIME",
        "isHidden": true
      },
      {
        "id": "py-fn-1-tc-5",
        "input": "13",
        "expectedOutput": "PRIME",
        "isHidden": true
      },
      {
        "id": "py-fn-1-tc-6",
        "input": "29",
        "expectedOutput": "PRIME",
        "isHidden": true
      },
      {
        "id": "py-fn-1-tc-7",
        "input": "100",
        "expectedOutput": "NOT PRIME",
        "isHidden": true
      },
      {
        "id": "py-fn-1-tc-8",
        "input": "97",
        "expectedOutput": "PRIME",
        "isHidden": true
      },
      {
        "id": "py-fn-1-tc-9",
        "input": "49",
        "expectedOutput": "NOT PRIME",
        "isHidden": true
      },
      {
        "id": "py-fn-1-tc-10",
        "input": "997",
        "expectedOutput": "PRIME",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-fn-2",
    "languageId": "python",
    "language": "python",
    "level": "beginner",
    "topicId": "python-defining-functions",
    "title": "Calculate Factorial",
    "slug": "calculate-factorial",
    "difficulty": "easy",
    "problemStatement": "Define a function factorial(n) that returns n! (the product of all integers from 1 to n). By convention, 0! = 1.",
    "description": "Define a function factorial(n) that returns n! (the product of all integers from 1 to n). By convention, 0! = 1.",
    "inputFormat": "A non-negative integer N.",
    "outputFormat": "Print N! as an integer.",
    "constraints": [
      "0 <= N <= 20"
    ],
    "examples": [
      {
        "input": "5",
        "output": "120",
        "explanation": "5 * 4 * 3 * 2 * 1 = 120"
      },
      {
        "input": "0",
        "output": "1",
        "explanation": "0! = 1"
      },
      {
        "input": "3",
        "output": "6",
        "explanation": "3 * 2 * 1 = 6"
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-fn-2-tc-1",
        "input": "5",
        "expectedOutput": "120",
        "isHidden": false
      },
      {
        "id": "py-fn-2-tc-2",
        "input": "0",
        "expectedOutput": "1",
        "isHidden": false
      },
      {
        "id": "py-fn-2-tc-3",
        "input": "3",
        "expectedOutput": "6",
        "isHidden": false
      },
      {
        "id": "py-fn-2-tc-4",
        "input": "1",
        "expectedOutput": "1",
        "isHidden": true
      },
      {
        "id": "py-fn-2-tc-5",
        "input": "4",
        "expectedOutput": "24",
        "isHidden": true
      },
      {
        "id": "py-fn-2-tc-6",
        "input": "6",
        "expectedOutput": "720",
        "isHidden": true
      },
      {
        "id": "py-fn-2-tc-7",
        "input": "7",
        "expectedOutput": "5040",
        "isHidden": true
      },
      {
        "id": "py-fn-2-tc-8",
        "input": "10",
        "expectedOutput": "3628800",
        "isHidden": true
      },
      {
        "id": "py-fn-2-tc-9",
        "input": "8",
        "expectedOutput": "40320",
        "isHidden": true
      },
      {
        "id": "py-fn-2-tc-10",
        "input": "12",
        "expectedOutput": "479001600",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-fn-3",
    "languageId": "python",
    "language": "python",
    "level": "beginner",
    "topicId": "python-defining-functions",
    "title": "Greatest Common Divisor (GCD)",
    "slug": "greatest-common-divisor-gcd",
    "difficulty": "medium",
    "problemStatement": "Implement a function gcd(a, b) using Euclid's algorithm to find and print the greatest common divisor of two positive integers a and b.",
    "description": "Implement a function gcd(a, b) using Euclid's algorithm to find and print the greatest common divisor of two positive integers a and b.",
    "inputFormat": "Two space-separated positive integers a and b.",
    "outputFormat": "Print their GCD.",
    "constraints": [
      "1 <= a, b <= 10^9"
    ],
    "examples": [
      {
        "input": "48 18",
        "output": "6",
        "explanation": "6 divides both 48 and 18."
      },
      {
        "input": "100 25",
        "output": "25",
        "explanation": "25 divides 100."
      },
      {
        "input": "13 7",
        "output": "1",
        "explanation": "Coprime numbers have GCD 1."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-fn-3-tc-1",
        "input": "48 18",
        "expectedOutput": "6",
        "isHidden": false
      },
      {
        "id": "py-fn-3-tc-2",
        "input": "100 25",
        "expectedOutput": "25",
        "isHidden": false
      },
      {
        "id": "py-fn-3-tc-3",
        "input": "13 7",
        "expectedOutput": "1",
        "isHidden": false
      },
      {
        "id": "py-fn-3-tc-4",
        "input": "54 24",
        "expectedOutput": "6",
        "isHidden": true
      },
      {
        "id": "py-fn-3-tc-5",
        "input": "81 27",
        "expectedOutput": "27",
        "isHidden": true
      },
      {
        "id": "py-fn-3-tc-6",
        "input": "105 35",
        "expectedOutput": "35",
        "isHidden": true
      },
      {
        "id": "py-fn-3-tc-7",
        "input": "17 19",
        "expectedOutput": "1",
        "isHidden": true
      },
      {
        "id": "py-fn-3-tc-8",
        "input": "1000 500",
        "expectedOutput": "500",
        "isHidden": true
      },
      {
        "id": "py-fn-3-tc-9",
        "input": "12345 5",
        "expectedOutput": "5",
        "isHidden": true
      },
      {
        "id": "py-fn-3-tc-10",
        "input": "270 192",
        "expectedOutput": "6",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-fn-4",
    "languageId": "python",
    "language": "python",
    "level": "beginner",
    "topicId": "python-defining-functions",
    "title": "Check Armstrong Number",
    "slug": "check-armstrong-number",
    "difficulty": "medium",
    "problemStatement": "An Armstrong number of k digits is equal to the sum of each digit raised to the k-th power (e.g. 153 = 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153). Write a function is_armstrong(n) and print \"ARMSTRONG\" or \"NOT ARMSTRONG\".",
    "description": "An Armstrong number of k digits is equal to the sum of each digit raised to the k-th power (e.g. 153 = 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153). Write a function is_armstrong(n) and print \"ARMSTRONG\" or \"NOT ARMSTRONG\".",
    "inputFormat": "A single positive integer N.",
    "outputFormat": "Print \"ARMSTRONG\" or \"NOT ARMSTRONG\".",
    "constraints": [
      "1 <= N <= 10^8"
    ],
    "examples": [
      {
        "input": "153",
        "output": "ARMSTRONG",
        "explanation": "1^3 + 5^3 + 3^3 = 153"
      },
      {
        "input": "370",
        "output": "ARMSTRONG",
        "explanation": "3^3 + 7^3 + 0^3 = 27 + 343 + 0 = 370"
      },
      {
        "input": "123",
        "output": "NOT ARMSTRONG",
        "explanation": "1^3 + 2^3 + 3^3 = 36 != 123"
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-fn-4-tc-1",
        "input": "153",
        "expectedOutput": "ARMSTRONG",
        "isHidden": false
      },
      {
        "id": "py-fn-4-tc-2",
        "input": "370",
        "expectedOutput": "ARMSTRONG",
        "isHidden": false
      },
      {
        "id": "py-fn-4-tc-3",
        "input": "123",
        "expectedOutput": "NOT ARMSTRONG",
        "isHidden": false
      },
      {
        "id": "py-fn-4-tc-4",
        "input": "371",
        "expectedOutput": "ARMSTRONG",
        "isHidden": true
      },
      {
        "id": "py-fn-4-tc-5",
        "input": "407",
        "expectedOutput": "ARMSTRONG",
        "isHidden": true
      },
      {
        "id": "py-fn-4-tc-6",
        "input": "9474",
        "expectedOutput": "ARMSTRONG",
        "isHidden": true
      },
      {
        "id": "py-fn-4-tc-7",
        "input": "500",
        "expectedOutput": "NOT ARMSTRONG",
        "isHidden": true
      },
      {
        "id": "py-fn-4-tc-8",
        "input": "1",
        "expectedOutput": "ARMSTRONG",
        "isHidden": true
      },
      {
        "id": "py-fn-4-tc-9",
        "input": "9",
        "expectedOutput": "ARMSTRONG",
        "isHidden": true
      },
      {
        "id": "py-fn-4-tc-10",
        "input": "1634",
        "expectedOutput": "ARMSTRONG",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-rec-1",
    "languageId": "python",
    "language": "python",
    "level": "beginner",
    "topicId": "python-recursion",
    "title": "Factorial Using Recursion",
    "slug": "factorial-using-recursion",
    "difficulty": "easy",
    "problemStatement": "Implement recursive function rec_fact(n). Base case: rec_fact(0) = 1. Return n * rec_fact(n - 1).",
    "description": "Implement recursive function rec_fact(n). Base case: rec_fact(0) = 1. Return n * rec_fact(n - 1).",
    "inputFormat": "A single non-negative integer N.",
    "outputFormat": "Print the recursive factorial result.",
    "constraints": [
      "0 <= N <= 15"
    ],
    "examples": [
      {
        "input": "5",
        "output": "120",
        "explanation": "5 * 4 * 3 * 2 * 1 = 120"
      },
      {
        "input": "0",
        "output": "1",
        "explanation": "Base case returns 1."
      },
      {
        "input": "1",
        "output": "1",
        "explanation": "1 * 1 = 1."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-rec-1-tc-1",
        "input": "5",
        "expectedOutput": "120",
        "isHidden": false
      },
      {
        "id": "py-rec-1-tc-2",
        "input": "0",
        "expectedOutput": "1",
        "isHidden": false
      },
      {
        "id": "py-rec-1-tc-3",
        "input": "1",
        "expectedOutput": "1",
        "isHidden": false
      },
      {
        "id": "py-rec-1-tc-4",
        "input": "3",
        "expectedOutput": "6",
        "isHidden": true
      },
      {
        "id": "py-rec-1-tc-5",
        "input": "4",
        "expectedOutput": "24",
        "isHidden": true
      },
      {
        "id": "py-rec-1-tc-6",
        "input": "6",
        "expectedOutput": "720",
        "isHidden": true
      },
      {
        "id": "py-rec-1-tc-7",
        "input": "7",
        "expectedOutput": "5040",
        "isHidden": true
      },
      {
        "id": "py-rec-1-tc-8",
        "input": "8",
        "expectedOutput": "40320",
        "isHidden": true
      },
      {
        "id": "py-rec-1-tc-9",
        "input": "10",
        "expectedOutput": "3628800",
        "isHidden": true
      },
      {
        "id": "py-rec-1-tc-10",
        "input": "12",
        "expectedOutput": "479001600",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-rec-2",
    "languageId": "python",
    "language": "python",
    "level": "beginner",
    "topicId": "python-recursion",
    "title": "Fibonacci Term Using Recursion",
    "slug": "fibonacci-term-using-recursion",
    "difficulty": "easy",
    "problemStatement": "Implement recursive function fib(n) to find the n-th Fibonacci number. Assume 0-indexed: fib(0) = 0, fib(1) = 1, fib(n) = fib(n-1) + fib(n-2).",
    "description": "Implement recursive function fib(n) to find the n-th Fibonacci number. Assume 0-indexed: fib(0) = 0, fib(1) = 1, fib(n) = fib(n-1) + fib(n-2).",
    "inputFormat": "A non-negative integer N.",
    "outputFormat": "Print the n-th Fibonacci number.",
    "constraints": [
      "0 <= N <= 30"
    ],
    "examples": [
      {
        "input": "6",
        "output": "8",
        "explanation": "Sequence: 0, 1, 1, 2, 3, 5, 8"
      },
      {
        "input": "0",
        "output": "0",
        "explanation": "fib(0) = 0"
      },
      {
        "input": "1",
        "output": "1",
        "explanation": "fib(1) = 1"
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-rec-2-tc-1",
        "input": "6",
        "expectedOutput": "8",
        "isHidden": false
      },
      {
        "id": "py-rec-2-tc-2",
        "input": "0",
        "expectedOutput": "0",
        "isHidden": false
      },
      {
        "id": "py-rec-2-tc-3",
        "input": "1",
        "expectedOutput": "1",
        "isHidden": false
      },
      {
        "id": "py-rec-2-tc-4",
        "input": "2",
        "expectedOutput": "1",
        "isHidden": true
      },
      {
        "id": "py-rec-2-tc-5",
        "input": "3",
        "expectedOutput": "2",
        "isHidden": true
      },
      {
        "id": "py-rec-2-tc-6",
        "input": "4",
        "expectedOutput": "3",
        "isHidden": true
      },
      {
        "id": "py-rec-2-tc-7",
        "input": "5",
        "expectedOutput": "5",
        "isHidden": true
      },
      {
        "id": "py-rec-2-tc-8",
        "input": "7",
        "expectedOutput": "13",
        "isHidden": true
      },
      {
        "id": "py-rec-2-tc-9",
        "input": "10",
        "expectedOutput": "55",
        "isHidden": true
      },
      {
        "id": "py-rec-2-tc-10",
        "input": "15",
        "expectedOutput": "610",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-rec-3",
    "languageId": "python",
    "language": "python",
    "level": "beginner",
    "topicId": "python-recursion",
    "title": "Sum of Digits Using Recursion",
    "slug": "sum-of-digits-using-recursion",
    "difficulty": "medium",
    "problemStatement": "Write a recursive function sum_digits(n) that computes the sum of the digits of a positive integer N.",
    "description": "Write a recursive function sum_digits(n) that computes the sum of the digits of a positive integer N.",
    "inputFormat": "A single positive integer N.",
    "outputFormat": "Print the sum of digits.",
    "constraints": [
      "1 <= N <= 10^12"
    ],
    "examples": [
      {
        "input": "1234",
        "output": "10",
        "explanation": "1 + 2 + 3 + 4 = 10"
      },
      {
        "input": "999",
        "output": "27",
        "explanation": "9 + 9 + 9 = 27"
      },
      {
        "input": "5",
        "output": "5",
        "explanation": "Single digit."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-rec-3-tc-1",
        "input": "1234",
        "expectedOutput": "10",
        "isHidden": false
      },
      {
        "id": "py-rec-3-tc-2",
        "input": "999",
        "expectedOutput": "27",
        "isHidden": false
      },
      {
        "id": "py-rec-3-tc-3",
        "input": "5",
        "expectedOutput": "5",
        "isHidden": false
      },
      {
        "id": "py-rec-3-tc-4",
        "input": "100",
        "expectedOutput": "1",
        "isHidden": true
      },
      {
        "id": "py-rec-3-tc-5",
        "input": "405",
        "expectedOutput": "9",
        "isHidden": true
      },
      {
        "id": "py-rec-3-tc-6",
        "input": "98765",
        "expectedOutput": "35",
        "isHidden": true
      },
      {
        "id": "py-rec-3-tc-7",
        "input": "111111",
        "expectedOutput": "6",
        "isHidden": true
      },
      {
        "id": "py-rec-3-tc-8",
        "input": "50505",
        "expectedOutput": "15",
        "isHidden": true
      },
      {
        "id": "py-rec-3-tc-9",
        "input": "2468",
        "expectedOutput": "20",
        "isHidden": true
      },
      {
        "id": "py-rec-3-tc-10",
        "input": "13579",
        "expectedOutput": "25",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-rec-4",
    "languageId": "python",
    "language": "python",
    "level": "beginner",
    "topicId": "python-recursion",
    "title": "Reverse a String Recursively",
    "slug": "reverse-a-string-recursively",
    "difficulty": "medium",
    "problemStatement": "Implement a recursive function rev_str(s) that reverses a string S without using slicing [::-1] or loops.",
    "description": "Implement a recursive function rev_str(s) that reverses a string S without using slicing [::-1] or loops.",
    "inputFormat": "A string S.",
    "outputFormat": "Print the reversed string.",
    "constraints": [
      "1 <= len(S) <= 1000"
    ],
    "examples": [
      {
        "input": "recursion",
        "output": "noisrucer",
        "explanation": "Reversed recursively."
      },
      {
        "input": "cat",
        "output": "tac",
        "explanation": "Reversed."
      },
      {
        "input": "a",
        "output": "a",
        "explanation": "Single char."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-rec-4-tc-1",
        "input": "recursion",
        "expectedOutput": "noisrucer",
        "isHidden": false
      },
      {
        "id": "py-rec-4-tc-2",
        "input": "cat",
        "expectedOutput": "tac",
        "isHidden": false
      },
      {
        "id": "py-rec-4-tc-3",
        "input": "a",
        "expectedOutput": "a",
        "isHidden": false
      },
      {
        "id": "py-rec-4-tc-4",
        "input": "hello",
        "expectedOutput": "olleh",
        "isHidden": true
      },
      {
        "id": "py-rec-4-tc-5",
        "input": "python",
        "expectedOutput": "nohtyp",
        "isHidden": true
      },
      {
        "id": "py-rec-4-tc-6",
        "input": "12345",
        "expectedOutput": "54321",
        "isHidden": true
      },
      {
        "id": "py-rec-4-tc-7",
        "input": "racecar",
        "expectedOutput": "racecar",
        "isHidden": true
      },
      {
        "id": "py-rec-4-tc-8",
        "input": "data",
        "expectedOutput": "atad",
        "isHidden": true
      },
      {
        "id": "py-rec-4-tc-9",
        "input": "structure",
        "expectedOutput": "erutcurts",
        "isHidden": true
      },
      {
        "id": "py-rec-4-tc-10",
        "input": "algorithm",
        "expectedOutput": "mhtirogla",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-comp-1",
    "languageId": "python",
    "language": "python",
    "level": "beginner",
    "topicId": "python-list-comprehensions",
    "title": "Squares of Even Numbers",
    "slug": "squares-of-even-numbers",
    "difficulty": "easy",
    "problemStatement": "Given N integers, use a list comprehension to filter only even numbers and compute their squares. Print the squared even numbers separated by spaces. If no even numbers exist, print \"NONE\".",
    "description": "Given N integers, use a list comprehension to filter only even numbers and compute their squares. Print the squared even numbers separated by spaces. If no even numbers exist, print \"NONE\".",
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
        "explanation": "All evens squared."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-comp-1-tc-1",
        "input": "5\n1 2 3 4 5",
        "expectedOutput": "4 16",
        "isHidden": false
      },
      {
        "id": "py-comp-1-tc-2",
        "input": "3\n1 3 5",
        "expectedOutput": "NONE",
        "isHidden": false
      },
      {
        "id": "py-comp-1-tc-3",
        "input": "3\n2 4 6",
        "expectedOutput": "4 16 36",
        "isHidden": false
      },
      {
        "id": "py-comp-1-tc-4",
        "input": "1\n8",
        "expectedOutput": "64",
        "isHidden": true
      },
      {
        "id": "py-comp-1-tc-5",
        "input": "4\n0 1 2 3",
        "expectedOutput": "0 4",
        "isHidden": true
      },
      {
        "id": "py-comp-1-tc-6",
        "input": "5\n-2 3 -4 5 6",
        "expectedOutput": "4 16 36",
        "isHidden": true
      },
      {
        "id": "py-comp-1-tc-7",
        "input": "4\n7 9 11 13",
        "expectedOutput": "NONE",
        "isHidden": true
      },
      {
        "id": "py-comp-1-tc-8",
        "input": "6\n10 15 20 25 30 35",
        "expectedOutput": "100 400 900",
        "isHidden": true
      },
      {
        "id": "py-comp-1-tc-9",
        "input": "2\n4 4",
        "expectedOutput": "16 16",
        "isHidden": true
      },
      {
        "id": "py-comp-1-tc-10",
        "input": "5\n2 2 2 2 2",
        "expectedOutput": "4 4 4 4 4",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-comp-2",
    "languageId": "python",
    "language": "python",
    "level": "beginner",
    "topicId": "python-list-comprehensions",
    "title": "Filter Words by Minimum Length",
    "slug": "filter-words-by-minimum-length",
    "difficulty": "easy",
    "problemStatement": "Given an integer K and a space-separated string of words, use a list comprehension to filter out words with length less than K. Print remaining words separated by spaces. If none, print \"NONE\".",
    "description": "Given an integer K and a space-separated string of words, use a list comprehension to filter out words with length less than K. Print remaining words separated by spaces. If none, print \"NONE\".",
    "inputFormat": "First line K, second line words.",
    "outputFormat": "Print space-separated filtered words or \"NONE\".",
    "constraints": [
      "1 <= K <= 20"
    ],
    "examples": [
      {
        "input": "4\nthe quick brown fox jumps over the lazy dog",
        "output": "quick brown jumps over lazy",
        "explanation": "Words with length >= 4."
      },
      {
        "input": "6\napple pear banana cherry",
        "output": "banana cherry",
        "explanation": "Only banana (6) and cherry (6)."
      },
      {
        "input": "10\nshort words only",
        "output": "NONE",
        "explanation": "None >= 10."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-comp-2-tc-1",
        "input": "4\nthe quick brown fox jumps over the lazy dog",
        "expectedOutput": "quick brown jumps over lazy",
        "isHidden": false
      },
      {
        "id": "py-comp-2-tc-2",
        "input": "6\napple pear banana cherry",
        "expectedOutput": "banana cherry",
        "isHidden": false
      },
      {
        "id": "py-comp-2-tc-3",
        "input": "10\nshort words only",
        "expectedOutput": "NONE",
        "isHidden": false
      },
      {
        "id": "py-comp-2-tc-4",
        "input": "3\na bb ccc dddd",
        "expectedOutput": "ccc dddd",
        "isHidden": true
      },
      {
        "id": "py-comp-2-tc-5",
        "input": "1\nx y z",
        "expectedOutput": "x y z",
        "isHidden": true
      },
      {
        "id": "py-comp-2-tc-6",
        "input": "5\nprogramming in python is fun",
        "expectedOutput": "programming python",
        "isHidden": true
      },
      {
        "id": "py-comp-2-tc-7",
        "input": "4\ncat fish bird elephant",
        "expectedOutput": "fish bird elephant",
        "isHidden": true
      },
      {
        "id": "py-comp-2-tc-8",
        "input": "7\nmicroscope telescope star moon",
        "expectedOutput": "microscope telescope",
        "isHidden": true
      },
      {
        "id": "py-comp-2-tc-9",
        "input": "2\na b c",
        "expectedOutput": "NONE",
        "isHidden": true
      },
      {
        "id": "py-comp-2-tc-10",
        "input": "5\nhello world hi bye",
        "expectedOutput": "hello world",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-comp-3",
    "languageId": "python",
    "language": "python",
    "level": "beginner",
    "topicId": "python-list-comprehensions",
    "title": "Flatten a 2D Matrix",
    "slug": "flatten-a-2d-matrix",
    "difficulty": "medium",
    "problemStatement": "Given an R x C 2D integer matrix, use a nested list comprehension [val for row in matrix for val in row] to flatten the matrix into a 1D list. Print all values separated by spaces.",
    "description": "Given an R x C 2D integer matrix, use a nested list comprehension [val for row in matrix for val in row] to flatten the matrix into a 1D list. Print all values separated by spaces.",
    "inputFormat": "First line R and C, next R lines each contain C integers.",
    "outputFormat": "Print flattened space-separated values.",
    "constraints": [
      "1 <= R, C <= 100"
    ],
    "examples": [
      {
        "input": "2 3\n1 2 3\n4 5 6",
        "output": "1 2 3 4 5 6",
        "explanation": "Flattened 2x3 matrix."
      },
      {
        "input": "2 2\n10 20\n30 40",
        "output": "10 20 30 40",
        "explanation": "Flattened 2x2 matrix."
      },
      {
        "input": "1 4\n5 6 7 8",
        "output": "5 6 7 8",
        "explanation": "Single row matrix."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-comp-3-tc-1",
        "input": "2 3\n1 2 3\n4 5 6",
        "expectedOutput": "1 2 3 4 5 6",
        "isHidden": false
      },
      {
        "id": "py-comp-3-tc-2",
        "input": "2 2\n10 20\n30 40",
        "expectedOutput": "10 20 30 40",
        "isHidden": false
      },
      {
        "id": "py-comp-3-tc-3",
        "input": "1 4\n5 6 7 8",
        "expectedOutput": "5 6 7 8",
        "isHidden": false
      },
      {
        "id": "py-comp-3-tc-4",
        "input": "3 1\n1\n2\n3",
        "expectedOutput": "1 2 3",
        "isHidden": true
      },
      {
        "id": "py-comp-3-tc-5",
        "input": "3 3\n1 2 3\n4 5 6\n7 8 9",
        "expectedOutput": "1 2 3 4 5 6 7 8 9",
        "isHidden": true
      },
      {
        "id": "py-comp-3-tc-6",
        "input": "2 4\n1 0 1 0\n0 1 0 1",
        "expectedOutput": "1 0 1 0 0 1 0 1",
        "isHidden": true
      },
      {
        "id": "py-comp-3-tc-7",
        "input": "1 1\n42",
        "expectedOutput": "42",
        "isHidden": true
      },
      {
        "id": "py-comp-3-tc-8",
        "input": "4 2\n1 2\n3 4\n5 6\n7 8",
        "expectedOutput": "1 2 3 4 5 6 7 8",
        "isHidden": true
      },
      {
        "id": "py-comp-3-tc-9",
        "input": "2 2\n-1 -2\n-3 -4",
        "expectedOutput": "-1 -2 -3 -4",
        "isHidden": true
      },
      {
        "id": "py-comp-3-tc-10",
        "input": "3 2\n10 20\n30 40\n50 60",
        "expectedOutput": "10 20 30 40 50 60",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-cls-1",
    "languageId": "python",
    "language": "python",
    "level": "intermediate",
    "topicId": "python-closures",
    "title": "Running Total Accumulator Closure",
    "slug": "running-total-accumulator-closure",
    "difficulty": "easy",
    "problemStatement": "Implement a closure make_accumulator(start=0) that returns a function accumulating values. Given a starting value S and N numbers to add sequentially, print the running total after each addition separated by spaces.",
    "description": "Implement a closure make_accumulator(start=0) that returns a function accumulating values. Given a starting value S and N numbers to add sequentially, print the running total after each addition separated by spaces.",
    "inputFormat": "First line S and N, second line N integers.",
    "outputFormat": "Print space-separated running totals.",
    "constraints": [
      "1 <= N <= 10^4"
    ],
    "examples": [
      {
        "input": "10 4\n5 10 15 20",
        "output": "15 25 40 60",
        "explanation": "10+5=15, +10=25, +15=40, +20=60."
      },
      {
        "input": "0 3\n1 2 3",
        "output": "1 3 6",
        "explanation": "Cumulative sum from 0."
      },
      {
        "input": "100 2\n-20 -30",
        "output": "80 50",
        "explanation": "Subtracting."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-cls-1-tc-1",
        "input": "10 4\n5 10 15 20",
        "expectedOutput": "15 25 40 60",
        "isHidden": false
      },
      {
        "id": "py-cls-1-tc-2",
        "input": "0 3\n1 2 3",
        "expectedOutput": "1 3 6",
        "isHidden": false
      },
      {
        "id": "py-cls-1-tc-3",
        "input": "100 2\n-20 -30",
        "expectedOutput": "80 50",
        "isHidden": false
      },
      {
        "id": "py-cls-1-tc-4",
        "input": "5 1\n10",
        "expectedOutput": "15",
        "isHidden": true
      },
      {
        "id": "py-cls-1-tc-5",
        "input": "0 5\n10 10 10 10 10",
        "expectedOutput": "10 20 30 40 50",
        "isHidden": true
      },
      {
        "id": "py-cls-1-tc-6",
        "input": "50 3\n-10 20 -30",
        "expectedOutput": "40 60 30",
        "isHidden": true
      },
      {
        "id": "py-cls-1-tc-7",
        "input": "1000 4\n100 200 300 400",
        "expectedOutput": "1100 1300 1600 2000",
        "isHidden": true
      },
      {
        "id": "py-cls-1-tc-8",
        "input": "0 4\n0 0 0 0",
        "expectedOutput": "0 0 0 0",
        "isHidden": true
      },
      {
        "id": "py-cls-1-tc-9",
        "input": "25 3\n5 5 5",
        "expectedOutput": "30 35 40",
        "isHidden": true
      },
      {
        "id": "py-cls-1-tc-10",
        "input": "7 3\n3 4 5",
        "expectedOutput": "10 14 19",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-cls-2",
    "languageId": "python",
    "language": "python",
    "level": "intermediate",
    "topicId": "python-closures",
    "title": "Configurable Multiplier Factory",
    "slug": "configurable-multiplier-factory",
    "difficulty": "medium",
    "problemStatement": "Implement a closure make_multiplier(factor) that returns a function multiplying its argument by factor. Given factor F, integer count N, and N numbers, print each number multiplied by F separated by spaces.",
    "description": "Implement a closure make_multiplier(factor) that returns a function multiplying its argument by factor. Given factor F, integer count N, and N numbers, print each number multiplied by F separated by spaces.",
    "inputFormat": "First line F and N, second line N space-separated integers.",
    "outputFormat": "Print space-separated multiplied values.",
    "constraints": [
      "1 <= N <= 10^4"
    ],
    "examples": [
      {
        "input": "3 4\n1 2 3 4",
        "output": "3 6 9 12",
        "explanation": "Each multiplied by 3."
      },
      {
        "input": "2 3\n5 10 15",
        "output": "10 20 30",
        "explanation": "Doubled."
      },
      {
        "input": "0 3\n10 20 30",
        "output": "0 0 0",
        "explanation": "Multiplied by 0."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-cls-2-tc-1",
        "input": "3 4\n1 2 3 4",
        "expectedOutput": "3 6 9 12",
        "isHidden": false
      },
      {
        "id": "py-cls-2-tc-2",
        "input": "2 3\n5 10 15",
        "expectedOutput": "10 20 30",
        "isHidden": false
      },
      {
        "id": "py-cls-2-tc-3",
        "input": "0 3\n10 20 30",
        "expectedOutput": "0 0 0",
        "isHidden": false
      },
      {
        "id": "py-cls-2-tc-4",
        "input": "-1 4\n1 -2 3 -4",
        "expectedOutput": "-1 2 -3 4",
        "isHidden": true
      },
      {
        "id": "py-cls-2-tc-5",
        "input": "5 2\n10 20",
        "expectedOutput": "50 100",
        "isHidden": true
      },
      {
        "id": "py-cls-2-tc-6",
        "input": "10 3\n7 8 9",
        "expectedOutput": "70 80 90",
        "isHidden": true
      },
      {
        "id": "py-cls-2-tc-7",
        "input": "4 3\n2 4 8",
        "expectedOutput": "8 16 32",
        "isHidden": true
      },
      {
        "id": "py-cls-2-tc-8",
        "input": "1 5\n1 2 3 4 5",
        "expectedOutput": "1 2 3 4 5",
        "isHidden": true
      },
      {
        "id": "py-cls-2-tc-9",
        "input": "6 2\n3 5",
        "expectedOutput": "18 30",
        "isHidden": true
      },
      {
        "id": "py-cls-2-tc-10",
        "input": "100 2\n2 4",
        "expectedOutput": "200 400",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-cls-3",
    "languageId": "python",
    "language": "python",
    "level": "intermediate",
    "topicId": "python-closures",
    "title": "Rate Limiter Counter Closure",
    "slug": "rate-limiter-counter-closure",
    "difficulty": "medium",
    "problemStatement": "Implement make_rate_limiter(max_calls) that returns a function that can only be called max_calls times. After max_calls, it prints \"BLOCKED\". For the first max_calls, it prints \"ALLOWED <call_count>\". Given max_calls M and total requests R, simulate all R requests.",
    "description": "Implement make_rate_limiter(max_calls) that returns a function that can only be called max_calls times. After max_calls, it prints \"BLOCKED\". For the first max_calls, it prints \"ALLOWED <call_count>\". Given max_calls M and total requests R, simulate all R requests.",
    "inputFormat": "Two space-separated integers M (max allowed) and R (total requests).",
    "outputFormat": "R space-separated status strings.",
    "constraints": [
      "1 <= M, R <= 1000"
    ],
    "examples": [
      {
        "input": "3 5",
        "output": "ALLOWED:1 ALLOWED:2 ALLOWED:3 BLOCKED BLOCKED",
        "explanation": "First 3 allowed, next 2 blocked."
      },
      {
        "input": "1 2",
        "output": "ALLOWED:1 BLOCKED",
        "explanation": "Only 1 call allowed."
      },
      {
        "input": "2 2",
        "output": "ALLOWED:1 ALLOWED:2",
        "explanation": "Both calls allowed."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-cls-3-tc-1",
        "input": "3 5",
        "expectedOutput": "ALLOWED:1 ALLOWED:2 ALLOWED:3 BLOCKED BLOCKED",
        "isHidden": false
      },
      {
        "id": "py-cls-3-tc-2",
        "input": "1 2",
        "expectedOutput": "ALLOWED:1 BLOCKED",
        "isHidden": false
      },
      {
        "id": "py-cls-3-tc-3",
        "input": "2 2",
        "expectedOutput": "ALLOWED:1 ALLOWED:2",
        "isHidden": false
      },
      {
        "id": "py-cls-3-tc-4",
        "input": "4 6",
        "expectedOutput": "ALLOWED:1 ALLOWED:2 ALLOWED:3 ALLOWED:4 BLOCKED BLOCKED",
        "isHidden": true
      },
      {
        "id": "py-cls-3-tc-5",
        "input": "1 1",
        "expectedOutput": "ALLOWED:1",
        "isHidden": true
      },
      {
        "id": "py-cls-3-tc-6",
        "input": "2 4",
        "expectedOutput": "ALLOWED:1 ALLOWED:2 BLOCKED BLOCKED",
        "isHidden": true
      },
      {
        "id": "py-cls-3-tc-7",
        "input": "5 3",
        "expectedOutput": "ALLOWED:1 ALLOWED:2 ALLOWED:3",
        "isHidden": true
      },
      {
        "id": "py-cls-3-tc-8",
        "input": "3 3",
        "expectedOutput": "ALLOWED:1 ALLOWED:2 ALLOWED:3",
        "isHidden": true
      },
      {
        "id": "py-cls-3-tc-9",
        "input": "1 4",
        "expectedOutput": "ALLOWED:1 BLOCKED BLOCKED BLOCKED",
        "isHidden": true
      },
      {
        "id": "py-cls-3-tc-10",
        "input": "2 5",
        "expectedOutput": "ALLOWED:1 ALLOWED:2 BLOCKED BLOCKED BLOCKED",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-hof-1",
    "languageId": "python",
    "language": "python",
    "level": "intermediate",
    "topicId": "python-higher-order-functions",
    "title": "Apply Function to List",
    "slug": "apply-function-to-list",
    "difficulty": "easy",
    "problemStatement": "Write a higher-order function apply_op(fn, lst) that accepts a mathematical operation and an integer list. Given operation code (\"SQUARE\" or \"DOUBLE\" or \"CUBE\"), apply it to all elements and print space-separated results.",
    "description": "Write a higher-order function apply_op(fn, lst) that accepts a mathematical operation and an integer list. Given operation code (\"SQUARE\" or \"DOUBLE\" or \"CUBE\"), apply it to all elements and print space-separated results.",
    "inputFormat": "First line operation code, second line N, third line N integers.",
    "outputFormat": "Print space-separated transformed values.",
    "constraints": [
      "1 <= N <= 10^4"
    ],
    "examples": [
      {
        "input": "SQUARE\n3\n2 3 4",
        "output": "4 9 16",
        "explanation": "2^2=4, 3^2=9, 4^2=16"
      },
      {
        "input": "DOUBLE\n3\n10 20 30",
        "output": "20 40 60",
        "explanation": "Doubled values."
      },
      {
        "input": "CUBE\n2\n2 3",
        "output": "8 27",
        "explanation": "2^3=8, 3^3=27"
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-hof-1-tc-1",
        "input": "SQUARE\n3\n2 3 4",
        "expectedOutput": "4 9 16",
        "isHidden": false
      },
      {
        "id": "py-hof-1-tc-2",
        "input": "DOUBLE\n3\n10 20 30",
        "expectedOutput": "20 40 60",
        "isHidden": false
      },
      {
        "id": "py-hof-1-tc-3",
        "input": "CUBE\n2\n2 3",
        "expectedOutput": "8 27",
        "isHidden": false
      },
      {
        "id": "py-hof-1-tc-4",
        "input": "SQUARE\n4\n1 5 10 12",
        "expectedOutput": "1 25 100 144",
        "isHidden": true
      },
      {
        "id": "py-hof-1-tc-5",
        "input": "DOUBLE\n4\n-1 -5 0 8",
        "expectedOutput": "-2 -10 0 16",
        "isHidden": true
      },
      {
        "id": "py-hof-1-tc-6",
        "input": "CUBE\n3\n1 4 5",
        "expectedOutput": "1 64 125",
        "isHidden": true
      },
      {
        "id": "py-hof-1-tc-7",
        "input": "SQUARE\n1\n7",
        "expectedOutput": "49",
        "isHidden": true
      },
      {
        "id": "py-hof-1-tc-8",
        "input": "DOUBLE\n2\n25 50",
        "expectedOutput": "50 100",
        "isHidden": true
      },
      {
        "id": "py-hof-1-tc-9",
        "input": "CUBE\n1\n10",
        "expectedOutput": "1000",
        "isHidden": true
      },
      {
        "id": "py-hof-1-tc-10",
        "input": "DOUBLE\n5\n1 2 3 4 5",
        "expectedOutput": "2 4 6 8 10",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-hof-2",
    "languageId": "python",
    "language": "python",
    "level": "intermediate",
    "topicId": "python-higher-order-functions",
    "title": "Pipeline Transformation Chain",
    "slug": "pipeline-transformation-chain",
    "difficulty": "medium",
    "problemStatement": "Implement compose(f, g) returning f(g(x)). Given an integer X, compute triple(add_ten(x)) = (x + 10) * 3.",
    "description": "Implement compose(f, g) returning f(g(x)). Given an integer X, compute triple(add_ten(x)) = (x + 10) * 3.",
    "inputFormat": "A single integer X.",
    "outputFormat": "Print the composed result.",
    "constraints": [
      "-10^5 <= X <= 10^5"
    ],
    "examples": [
      {
        "input": "5",
        "output": "45",
        "explanation": "(5 + 10) * 3 = 15 * 3 = 45"
      },
      {
        "input": "0",
        "output": "30",
        "explanation": "(0 + 10) * 3 = 30"
      },
      {
        "input": "-10",
        "output": "0",
        "explanation": "(-10 + 10) * 3 = 0"
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-hof-2-tc-1",
        "input": "5",
        "expectedOutput": "45",
        "isHidden": false
      },
      {
        "id": "py-hof-2-tc-2",
        "input": "0",
        "expectedOutput": "30",
        "isHidden": false
      },
      {
        "id": "py-hof-2-tc-3",
        "input": "-10",
        "expectedOutput": "0",
        "isHidden": false
      },
      {
        "id": "py-hof-2-tc-4",
        "input": "10",
        "expectedOutput": "60",
        "isHidden": true
      },
      {
        "id": "py-hof-2-tc-5",
        "input": "20",
        "expectedOutput": "90",
        "isHidden": true
      },
      {
        "id": "py-hof-2-tc-6",
        "input": "-5",
        "expectedOutput": "15",
        "isHidden": true
      },
      {
        "id": "py-hof-2-tc-7",
        "input": "100",
        "expectedOutput": "330",
        "isHidden": true
      },
      {
        "id": "py-hof-2-tc-8",
        "input": "-20",
        "expectedOutput": "-30",
        "isHidden": true
      },
      {
        "id": "py-hof-2-tc-9",
        "input": "1",
        "expectedOutput": "33",
        "isHidden": true
      },
      {
        "id": "py-hof-2-tc-10",
        "input": "7",
        "expectedOutput": "51",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-hof-3",
    "languageId": "python",
    "language": "python",
    "level": "intermediate",
    "topicId": "python-higher-order-functions",
    "title": "Custom Sort with Key Comparator",
    "slug": "custom-sort-with-key-comparator",
    "difficulty": "medium",
    "problemStatement": "Given N strings, sort them by length in ascending order using sorted(words, key=len). If two words have the same length, preserve their alphabetical order. Print space-separated sorted words.",
    "description": "Given N strings, sort them by length in ascending order using sorted(words, key=len). If two words have the same length, preserve their alphabetical order. Print space-separated sorted words.",
    "inputFormat": "First line N, second line N space-separated strings.",
    "outputFormat": "Print space-separated sorted strings.",
    "constraints": [
      "1 <= N <= 10^4"
    ],
    "examples": [
      {
        "input": "4\napple cat dog banana",
        "output": "cat dog apple banana",
        "explanation": "cat, dog (len 3, sorted alphabetically), apple (5), banana (6)."
      },
      {
        "input": "3\naaa b c",
        "output": "b c aaa",
        "explanation": "Length 1 sorted (b, c), then length 3."
      },
      {
        "input": "3\nz y x",
        "output": "x y z",
        "explanation": "Same length sorted alphabetically."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-hof-3-tc-1",
        "input": "4\napple cat dog banana",
        "expectedOutput": "cat dog apple banana",
        "isHidden": false
      },
      {
        "id": "py-hof-3-tc-2",
        "input": "3\naaa b c",
        "expectedOutput": "b c aaa",
        "isHidden": false
      },
      {
        "id": "py-hof-3-tc-3",
        "input": "3\nz y x",
        "expectedOutput": "x y z",
        "isHidden": false
      },
      {
        "id": "py-hof-3-tc-4",
        "input": "5\npython c java rust ruby",
        "expectedOutput": "c java ruby rust python",
        "isHidden": true
      },
      {
        "id": "py-hof-3-tc-5",
        "input": "4\none two three four",
        "expectedOutput": "one two four three",
        "isHidden": true
      },
      {
        "id": "py-hof-3-tc-6",
        "input": "4\nalpha beta gamma delta",
        "expectedOutput": "beta delta gamma alpha",
        "isHidden": true
      },
      {
        "id": "py-hof-3-tc-7",
        "input": "2\nshort verylongword",
        "expectedOutput": "short verylongword",
        "isHidden": true
      },
      {
        "id": "py-hof-3-tc-8",
        "input": "3\ncat bat rat",
        "expectedOutput": "bat cat rat",
        "isHidden": true
      },
      {
        "id": "py-hof-3-tc-9",
        "input": "4\nelephant mouse ant bee",
        "expectedOutput": "ant bee mouse elephant",
        "isHidden": true
      },
      {
        "id": "py-hof-3-tc-10",
        "input": "5\nhi bye hello welcome greetings",
        "expectedOutput": "hi bye hello welcome greetings",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-mfr-1",
    "languageId": "python",
    "language": "python",
    "level": "intermediate",
    "topicId": "python-map-filter-reduce",
    "title": "Transform Strings to Lengths with map",
    "slug": "transform-strings-to-lengths-with-map",
    "difficulty": "easy",
    "problemStatement": "Given a space-separated sequence of words, use map() to compute the length of each word. Print the word lengths separated by spaces.",
    "description": "Given a space-separated sequence of words, use map() to compute the length of each word. Print the word lengths separated by spaces.",
    "inputFormat": "A single line of space-separated words.",
    "outputFormat": "Print space-separated word lengths.",
    "constraints": [
      "1 <= words <= 10^4"
    ],
    "examples": [
      {
        "input": "hello world python",
        "output": "5 5 6",
        "explanation": "Lengths of hello, world, python."
      },
      {
        "input": "a bb ccc",
        "output": "1 2 3",
        "explanation": "Lengths 1, 2, 3."
      },
      {
        "input": "code",
        "output": "4",
        "explanation": "Single word length 4."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-mfr-1-tc-1",
        "input": "hello world python",
        "expectedOutput": "5 5 6",
        "isHidden": false
      },
      {
        "id": "py-mfr-1-tc-2",
        "input": "a bb ccc",
        "expectedOutput": "1 2 3",
        "isHidden": false
      },
      {
        "id": "py-mfr-1-tc-3",
        "input": "code",
        "expectedOutput": "4",
        "isHidden": false
      },
      {
        "id": "py-mfr-1-tc-4",
        "input": "the quick brown fox",
        "expectedOutput": "3 5 5 3",
        "isHidden": true
      },
      {
        "id": "py-mfr-1-tc-5",
        "input": "functional programming with map",
        "expectedOutput": "10 11 4 3",
        "isHidden": true
      },
      {
        "id": "py-mfr-1-tc-6",
        "input": "ai mentor system",
        "expectedOutput": "2 6 6",
        "isHidden": true
      },
      {
        "id": "py-mfr-1-tc-7",
        "input": "python java javascript",
        "expectedOutput": "6 4 10",
        "isHidden": true
      },
      {
        "id": "py-mfr-1-tc-8",
        "input": "one two three four five",
        "expectedOutput": "3 3 5 4 4",
        "isHidden": true
      },
      {
        "id": "py-mfr-1-tc-9",
        "input": "x y z",
        "expectedOutput": "1 1 1",
        "isHidden": true
      },
      {
        "id": "py-mfr-1-tc-10",
        "input": "developer engineering coding",
        "expectedOutput": "9 11 6",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-mfr-2",
    "languageId": "python",
    "language": "python",
    "level": "intermediate",
    "topicId": "python-map-filter-reduce",
    "title": "Filter Positive Numbers with filter",
    "slug": "filter-positive-numbers-with-filter",
    "difficulty": "easy",
    "problemStatement": "Given N integers, use filter() to select only strictly positive numbers (> 0). Print them separated by spaces. If none exist, print \"NONE\".",
    "description": "Given N integers, use filter() to select only strictly positive numbers (> 0). Print them separated by spaces. If none exist, print \"NONE\".",
    "inputFormat": "First line N, second line N space-separated integers.",
    "outputFormat": "Print space-separated positive numbers or \"NONE\".",
    "constraints": [
      "1 <= N <= 10^4"
    ],
    "examples": [
      {
        "input": "5\n-5 10 -3 20 0",
        "output": "10 20",
        "explanation": "Only 10 and 20 are > 0."
      },
      {
        "input": "3\n-1 -2 -3",
        "output": "NONE",
        "explanation": "No positives."
      },
      {
        "input": "3\n1 2 3",
        "output": "1 2 3",
        "explanation": "All positives."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-mfr-2-tc-1",
        "input": "5\n-5 10 -3 20 0",
        "expectedOutput": "10 20",
        "isHidden": false
      },
      {
        "id": "py-mfr-2-tc-2",
        "input": "3\n-1 -2 -3",
        "expectedOutput": "NONE",
        "isHidden": false
      },
      {
        "id": "py-mfr-2-tc-3",
        "input": "3\n1 2 3",
        "expectedOutput": "1 2 3",
        "isHidden": false
      },
      {
        "id": "py-mfr-2-tc-4",
        "input": "4\n0 0 0 0",
        "expectedOutput": "NONE",
        "isHidden": true
      },
      {
        "id": "py-mfr-2-tc-5",
        "input": "4\n-10 100 -20 200",
        "expectedOutput": "100 200",
        "isHidden": true
      },
      {
        "id": "py-mfr-2-tc-6",
        "input": "5\n-1 0 1 2 -3",
        "expectedOutput": "1 2",
        "isHidden": true
      },
      {
        "id": "py-mfr-2-tc-7",
        "input": "1\n42",
        "expectedOutput": "42",
        "isHidden": true
      },
      {
        "id": "py-mfr-2-tc-8",
        "input": "1\n-42",
        "expectedOutput": "NONE",
        "isHidden": true
      },
      {
        "id": "py-mfr-2-tc-9",
        "input": "6\n5 10 15 20 25 30",
        "expectedOutput": "5 10 15 20 25 30",
        "isHidden": true
      },
      {
        "id": "py-mfr-2-tc-10",
        "input": "4\n-100 -50 0 50",
        "expectedOutput": "50",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-mfr-3",
    "languageId": "python",
    "language": "python",
    "level": "intermediate",
    "topicId": "python-map-filter-reduce",
    "title": "Product of All Elements with reduce",
    "slug": "product-of-all-elements-with-reduce",
    "difficulty": "medium",
    "problemStatement": "Given N integers, use functools.reduce() with a lambda or operator.mul to calculate the product of all elements.",
    "description": "Given N integers, use functools.reduce() with a lambda or operator.mul to calculate the product of all elements.",
    "inputFormat": "First line N, second line N integers.",
    "outputFormat": "Print the product.",
    "constraints": [
      "1 <= N <= 15",
      "-20 <= elements <= 20"
    ],
    "examples": [
      {
        "input": "4\n1 2 3 4",
        "output": "24",
        "explanation": "1 * 2 * 3 * 4 = 24."
      },
      {
        "input": "3\n2 5 10",
        "output": "100",
        "explanation": "2 * 5 * 10 = 100."
      },
      {
        "input": "2\n-3 4",
        "output": "-12",
        "explanation": "-3 * 4 = -12."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-mfr-3-tc-1",
        "input": "4\n1 2 3 4",
        "expectedOutput": "24",
        "isHidden": false
      },
      {
        "id": "py-mfr-3-tc-2",
        "input": "3\n2 5 10",
        "expectedOutput": "100",
        "isHidden": false
      },
      {
        "id": "py-mfr-3-tc-3",
        "input": "2\n-3 4",
        "expectedOutput": "-12",
        "isHidden": false
      },
      {
        "id": "py-mfr-3-tc-4",
        "input": "1\n42",
        "expectedOutput": "42",
        "isHidden": true
      },
      {
        "id": "py-mfr-3-tc-5",
        "input": "5\n1 1 1 1 1",
        "expectedOutput": "1",
        "isHidden": true
      },
      {
        "id": "py-mfr-3-tc-6",
        "input": "3\n-2 -3 -4",
        "expectedOutput": "-24",
        "isHidden": true
      },
      {
        "id": "py-mfr-3-tc-7",
        "input": "4\n2 2 2 2",
        "expectedOutput": "16",
        "isHidden": true
      },
      {
        "id": "py-mfr-3-tc-8",
        "input": "3\n0 5 10",
        "expectedOutput": "0",
        "isHidden": true
      },
      {
        "id": "py-mfr-3-tc-9",
        "input": "4\n-1 1 -1 1",
        "expectedOutput": "1",
        "isHidden": true
      },
      {
        "id": "py-mfr-3-tc-10",
        "input": "3\n3 3 3",
        "expectedOutput": "27",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-gen-1",
    "languageId": "python",
    "language": "python",
    "level": "intermediate",
    "topicId": "python-generators-and-yield",
    "title": "Fibonacci Generator Function",
    "slug": "fibonacci-generator-function",
    "difficulty": "easy",
    "problemStatement": "Implement a generator function fib_gen() that yields Fibonacci numbers sequentially. Given N, print the first N Fibonacci numbers (starting with 0, 1) separated by spaces.",
    "description": "Implement a generator function fib_gen() that yields Fibonacci numbers sequentially. Given N, print the first N Fibonacci numbers (starting with 0, 1) separated by spaces.",
    "inputFormat": "A positive integer N.",
    "outputFormat": "Print first N Fibonacci numbers separated by space.",
    "constraints": [
      "1 <= N <= 30"
    ],
    "examples": [
      {
        "input": "5",
        "output": "0 1 1 2 3",
        "explanation": "First 5 Fibonacci numbers."
      },
      {
        "input": "1",
        "output": "0",
        "explanation": "First 1 number."
      },
      {
        "input": "7",
        "output": "0 1 1 2 3 5 8",
        "explanation": "First 7 numbers."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-gen-1-tc-1",
        "input": "5",
        "expectedOutput": "0 1 1 2 3",
        "isHidden": false
      },
      {
        "id": "py-gen-1-tc-2",
        "input": "1",
        "expectedOutput": "0",
        "isHidden": false
      },
      {
        "id": "py-gen-1-tc-3",
        "input": "7",
        "expectedOutput": "0 1 1 2 3 5 8",
        "isHidden": false
      },
      {
        "id": "py-gen-1-tc-4",
        "input": "2",
        "expectedOutput": "0 1",
        "isHidden": true
      },
      {
        "id": "py-gen-1-tc-5",
        "input": "3",
        "expectedOutput": "0 1 1",
        "isHidden": true
      },
      {
        "id": "py-gen-1-tc-6",
        "input": "4",
        "expectedOutput": "0 1 1 2",
        "isHidden": true
      },
      {
        "id": "py-gen-1-tc-7",
        "input": "6",
        "expectedOutput": "0 1 1 2 3 5",
        "isHidden": true
      },
      {
        "id": "py-gen-1-tc-8",
        "input": "8",
        "expectedOutput": "0 1 1 2 3 5 8 13",
        "isHidden": true
      },
      {
        "id": "py-gen-1-tc-9",
        "input": "10",
        "expectedOutput": "0 1 1 2 3 5 8 13 21 34",
        "isHidden": true
      },
      {
        "id": "py-gen-1-tc-10",
        "input": "12",
        "expectedOutput": "0 1 1 2 3 5 8 13 21 34 55 89",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-gen-2",
    "languageId": "python",
    "language": "python",
    "level": "intermediate",
    "topicId": "python-generators-and-yield",
    "title": "Prime Number Generator up to N",
    "slug": "prime-number-generator-up-to-n",
    "difficulty": "medium",
    "problemStatement": "Create a generator prime_gen(n) that yields all prime numbers less than or equal to N. Print the yielded primes separated by spaces. If no primes exist, print \"NONE\".",
    "description": "Create a generator prime_gen(n) that yields all prime numbers less than or equal to N. Print the yielded primes separated by spaces. If no primes exist, print \"NONE\".",
    "inputFormat": "A positive integer N.",
    "outputFormat": "Print space-separated primes or \"NONE\".",
    "constraints": [
      "1 <= N <= 10^4"
    ],
    "examples": [
      {
        "input": "10",
        "output": "2 3 5 7",
        "explanation": "Primes <= 10."
      },
      {
        "input": "1",
        "output": "NONE",
        "explanation": "No primes <= 1."
      },
      {
        "input": "20",
        "output": "2 3 5 7 11 13 17 19",
        "explanation": "Primes <= 20."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-gen-2-tc-1",
        "input": "10",
        "expectedOutput": "2 3 5 7",
        "isHidden": false
      },
      {
        "id": "py-gen-2-tc-2",
        "input": "1",
        "expectedOutput": "NONE",
        "isHidden": false
      },
      {
        "id": "py-gen-2-tc-3",
        "input": "20",
        "expectedOutput": "2 3 5 7 11 13 17 19",
        "isHidden": false
      },
      {
        "id": "py-gen-2-tc-4",
        "input": "2",
        "expectedOutput": "2",
        "isHidden": true
      },
      {
        "id": "py-gen-2-tc-5",
        "input": "3",
        "expectedOutput": "2 3",
        "isHidden": true
      },
      {
        "id": "py-gen-2-tc-6",
        "input": "5",
        "expectedOutput": "2 3 5",
        "isHidden": true
      },
      {
        "id": "py-gen-2-tc-7",
        "input": "15",
        "expectedOutput": "2 3 5 7 11 13",
        "isHidden": true
      },
      {
        "id": "py-gen-2-tc-8",
        "input": "30",
        "expectedOutput": "2 3 5 7 11 13 17 19 23 29",
        "isHidden": true
      },
      {
        "id": "py-gen-2-tc-9",
        "input": "0",
        "expectedOutput": "NONE",
        "isHidden": true
      },
      {
        "id": "py-gen-2-tc-10",
        "input": "25",
        "expectedOutput": "2 3 5 7 11 13 17 19 23",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-gen-3",
    "languageId": "python",
    "language": "python",
    "level": "intermediate",
    "topicId": "python-generators-and-yield",
    "title": "Chunk Generator for Streams",
    "slug": "chunk-generator-for-streams",
    "difficulty": "medium",
    "problemStatement": "Write a generator chunk_gen(lst, chunk_size) that yields consecutive sublists of length chunk_size (the last chunk may be shorter). Given chunk_size K and N elements, print each chunk enclosed in brackets on separate lines (e.g. \"[1, 2]\").",
    "description": "Write a generator chunk_gen(lst, chunk_size) that yields consecutive sublists of length chunk_size (the last chunk may be shorter). Given chunk_size K and N elements, print each chunk enclosed in brackets on separate lines (e.g. \"[1, 2]\").",
    "inputFormat": "First line K and N, second line N space-separated integers.",
    "outputFormat": "Print each chunk on a new line formatted as \"[a, b]\".",
    "constraints": [
      "1 <= K, N <= 1000"
    ],
    "examples": [
      {
        "input": "2 5\n1 2 3 4 5",
        "output": "[1, 2]\n[3, 4]\n[5]",
        "explanation": "Chunks of size 2."
      },
      {
        "input": "3 3\n10 20 30",
        "output": "[10, 20, 30]",
        "explanation": "Exact chunk of size 3."
      },
      {
        "input": "4 2\n7 8",
        "output": "[7, 8]",
        "explanation": "Shorter chunk."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-gen-3-tc-1",
        "input": "2 5\n1 2 3 4 5",
        "expectedOutput": "[1, 2]\n[3, 4]\n[5]",
        "isHidden": false
      },
      {
        "id": "py-gen-3-tc-2",
        "input": "3 3\n10 20 30",
        "expectedOutput": "[10, 20, 30]",
        "isHidden": false
      },
      {
        "id": "py-gen-3-tc-3",
        "input": "4 2\n7 8",
        "expectedOutput": "[7, 8]",
        "isHidden": false
      },
      {
        "id": "py-gen-3-tc-4",
        "input": "1 3\n1 2 3",
        "expectedOutput": "[1]\n[2]\n[3]",
        "isHidden": true
      },
      {
        "id": "py-gen-3-tc-5",
        "input": "3 6\n1 2 3 4 5 6",
        "expectedOutput": "[1, 2, 3]\n[4, 5, 6]",
        "isHidden": true
      },
      {
        "id": "py-gen-3-tc-6",
        "input": "2 4\n10 20 30 40",
        "expectedOutput": "[10, 20]\n[30, 40]",
        "isHidden": true
      },
      {
        "id": "py-gen-3-tc-7",
        "input": "5 5\n5 4 3 2 1",
        "expectedOutput": "[5, 4, 3, 2, 1]",
        "isHidden": true
      },
      {
        "id": "py-gen-3-tc-8",
        "input": "3 7\n1 2 3 4 5 6 7",
        "expectedOutput": "[1, 2, 3]\n[4, 5, 6]\n[7]",
        "isHidden": true
      },
      {
        "id": "py-gen-3-tc-9",
        "input": "2 1\n99",
        "expectedOutput": "[99]",
        "isHidden": true
      },
      {
        "id": "py-gen-3-tc-10",
        "input": "4 8\n2 4 6 8 10 12 14 16",
        "expectedOutput": "[2, 4, 6, 8]\n[10, 12, 14, 16]",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-dec-1",
    "languageId": "python",
    "language": "python",
    "level": "intermediate",
    "topicId": "python-decorators",
    "title": "Uppercase String Return Decorator",
    "slug": "uppercase-string-return-decorator",
    "difficulty": "easy",
    "problemStatement": "Implement a decorator @to_uppercase that transforms any string returned by the decorated function into uppercase. Given a string S, print the decorated function output.",
    "description": "Implement a decorator @to_uppercase that transforms any string returned by the decorated function into uppercase. Given a string S, print the decorated function output.",
    "inputFormat": "A string S.",
    "outputFormat": "Print uppercase string.",
    "constraints": [
      "1 <= len(S) <= 10^4"
    ],
    "examples": [
      {
        "input": "hello world",
        "output": "HELLO WORLD",
        "explanation": "Transformed to uppercase."
      },
      {
        "input": "python",
        "output": "PYTHON",
        "explanation": "Uppercased."
      },
      {
        "input": "Decorator",
        "output": "DECORATOR",
        "explanation": "All uppercase."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-dec-1-tc-1",
        "input": "hello world",
        "expectedOutput": "HELLO WORLD",
        "isHidden": false
      },
      {
        "id": "py-dec-1-tc-2",
        "input": "python",
        "expectedOutput": "PYTHON",
        "isHidden": false
      },
      {
        "id": "py-dec-1-tc-3",
        "input": "Decorator",
        "expectedOutput": "DECORATOR",
        "isHidden": false
      },
      {
        "id": "py-dec-1-tc-4",
        "input": "code mentor",
        "expectedOutput": "CODE MENTOR",
        "isHidden": true
      },
      {
        "id": "py-dec-1-tc-5",
        "input": "ai tutor",
        "expectedOutput": "AI TUTOR",
        "isHidden": true
      },
      {
        "id": "py-dec-1-tc-6",
        "input": "a",
        "expectedOutput": "A",
        "isHidden": true
      },
      {
        "id": "py-dec-1-tc-7",
        "input": "antigravity",
        "expectedOutput": "ANTIGRAVITY",
        "isHidden": true
      },
      {
        "id": "py-dec-1-tc-8",
        "input": "fast 123",
        "expectedOutput": "FAST 123",
        "isHidden": true
      },
      {
        "id": "py-dec-1-tc-9",
        "input": "already UPPER",
        "expectedOutput": "ALREADY UPPER",
        "isHidden": true
      },
      {
        "id": "py-dec-1-tc-10",
        "input": "abc def ghi",
        "expectedOutput": "ABC DEF GHI",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-dec-2",
    "languageId": "python",
    "language": "python",
    "level": "intermediate",
    "topicId": "python-decorators",
    "title": "Call Counter Decorator",
    "slug": "call-counter-decorator",
    "difficulty": "medium",
    "problemStatement": "Implement a decorator @count_calls that prefixes each function call result with \"Call <N>: <result>\". Given N numbers to pass sequentially to a function that adds 5, print the decorated outputs on separate lines.",
    "description": "Implement a decorator @count_calls that prefixes each function call result with \"Call <N>: <result>\". Given N numbers to pass sequentially to a function that adds 5, print the decorated outputs on separate lines.",
    "inputFormat": "First line N, second line N space-separated integers.",
    "outputFormat": "N lines formatted as \"Call <idx>: <val + 5>\".",
    "constraints": [
      "1 <= N <= 100"
    ],
    "examples": [
      {
        "input": "3\n10 20 30",
        "output": "Call 1: 15\nCall 2: 25\nCall 3: 35",
        "explanation": "Calls counted and 5 added."
      },
      {
        "input": "1\n0",
        "output": "Call 1: 5",
        "explanation": "First call."
      },
      {
        "input": "2\n-5 5",
        "output": "Call 1: 0\nCall 2: 10",
        "explanation": "Negative and positive."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-dec-2-tc-1",
        "input": "3\n10 20 30",
        "expectedOutput": "Call 1: 15\nCall 2: 25\nCall 3: 35",
        "isHidden": false
      },
      {
        "id": "py-dec-2-tc-2",
        "input": "1\n0",
        "expectedOutput": "Call 1: 5",
        "isHidden": false
      },
      {
        "id": "py-dec-2-tc-3",
        "input": "2\n-5 5",
        "expectedOutput": "Call 1: 0\nCall 2: 10",
        "isHidden": false
      },
      {
        "id": "py-dec-2-tc-4",
        "input": "4\n1 2 3 4",
        "expectedOutput": "Call 1: 6\nCall 2: 7\nCall 3: 8\nCall 4: 9",
        "isHidden": true
      },
      {
        "id": "py-dec-2-tc-5",
        "input": "2\n100 200",
        "expectedOutput": "Call 1: 105\nCall 2: 205",
        "isHidden": true
      },
      {
        "id": "py-dec-2-tc-6",
        "input": "3\n-10 -20 -30",
        "expectedOutput": "Call 1: -5\nCall 2: -15\nCall 3: -25",
        "isHidden": true
      },
      {
        "id": "py-dec-2-tc-7",
        "input": "1\n95",
        "expectedOutput": "Call 1: 100",
        "isHidden": true
      },
      {
        "id": "py-dec-2-tc-8",
        "input": "5\n0 0 0 0 0",
        "expectedOutput": "Call 1: 5\nCall 2: 5\nCall 3: 5\nCall 4: 5\nCall 5: 5",
        "isHidden": true
      },
      {
        "id": "py-dec-2-tc-9",
        "input": "2\n45 50",
        "expectedOutput": "Call 1: 50\nCall 2: 55",
        "isHidden": true
      },
      {
        "id": "py-dec-2-tc-10",
        "input": "3\n7 14 21",
        "expectedOutput": "Call 1: 12\nCall 2: 19\nCall 3: 26",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-dec-3",
    "languageId": "python",
    "language": "python",
    "level": "intermediate",
    "topicId": "python-decorators",
    "title": "Repeat Execution Decorator",
    "slug": "repeat-execution-decorator",
    "difficulty": "medium",
    "problemStatement": "Implement a parameterized decorator @repeat(num_times) that executes the function num_times and returns a list of the results. Given num_times K and word W, have the decorated function return W. Print the resulting list elements separated by spaces.",
    "description": "Implement a parameterized decorator @repeat(num_times) that executes the function num_times and returns a list of the results. Given num_times K and word W, have the decorated function return W. Print the resulting list elements separated by spaces.",
    "inputFormat": "Integer K and string W.",
    "outputFormat": "Print W repeated K times space-separated.",
    "constraints": [
      "1 <= K <= 20"
    ],
    "examples": [
      {
        "input": "3 echo",
        "output": "echo echo echo",
        "explanation": "Repeated 3 times."
      },
      {
        "input": "1 hello",
        "output": "hello",
        "explanation": "1 time."
      },
      {
        "input": "4 ping",
        "output": "ping ping ping ping",
        "explanation": "4 times."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-dec-3-tc-1",
        "input": "3 echo",
        "expectedOutput": "echo echo echo",
        "isHidden": false
      },
      {
        "id": "py-dec-3-tc-2",
        "input": "1 hello",
        "expectedOutput": "hello",
        "isHidden": false
      },
      {
        "id": "py-dec-3-tc-3",
        "input": "4 ping",
        "expectedOutput": "ping ping ping ping",
        "isHidden": false
      },
      {
        "id": "py-dec-3-tc-4",
        "input": "2 test",
        "expectedOutput": "test test",
        "isHidden": true
      },
      {
        "id": "py-dec-3-tc-5",
        "input": "5 *",
        "expectedOutput": "* * * * *",
        "isHidden": true
      },
      {
        "id": "py-dec-3-tc-6",
        "input": "6 go",
        "expectedOutput": "go go go go go go",
        "isHidden": true
      },
      {
        "id": "py-dec-3-tc-7",
        "input": "2 OK",
        "expectedOutput": "OK OK",
        "isHidden": true
      },
      {
        "id": "py-dec-3-tc-8",
        "input": "3 python",
        "expectedOutput": "python python python",
        "isHidden": true
      },
      {
        "id": "py-dec-3-tc-9",
        "input": "1 run",
        "expectedOutput": "run",
        "isHidden": true
      },
      {
        "id": "py-dec-3-tc-10",
        "input": "4 retry",
        "expectedOutput": "retry retry retry retry",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-exc-1",
    "languageId": "python",
    "language": "python",
    "level": "intermediate",
    "topicId": "python-exception-handling",
    "title": "Safe Integer Division with ZeroDivisionError",
    "slug": "safe-integer-division-with-zerodivisionerror",
    "difficulty": "easy",
    "problemStatement": "Read two tokens A and B. Convert them to integers and divide A // B. If B is 0, catch ZeroDivisionError and print \"ERROR: DIVISION BY ZERO\". If either token cannot be parsed as an integer, catch ValueError and print \"ERROR: INVALID INPUT\". Otherwise print the integer quotient.",
    "description": "Read two tokens A and B. Convert them to integers and divide A // B. If B is 0, catch ZeroDivisionError and print \"ERROR: DIVISION BY ZERO\". If either token cannot be parsed as an integer, catch ValueError and print \"ERROR: INVALID INPUT\". Otherwise print the integer quotient.",
    "inputFormat": "Two space-separated tokens A and B.",
    "outputFormat": "Print result or error message.",
    "constraints": [
      "Any string tokens."
    ],
    "examples": [
      {
        "input": "20 4",
        "output": "5",
        "explanation": "20 // 4 = 5"
      },
      {
        "input": "10 0",
        "output": "ERROR: DIVISION BY ZERO",
        "explanation": "Divide by zero caught."
      },
      {
        "input": "abc 5",
        "output": "ERROR: INVALID INPUT",
        "explanation": "ValueError caught."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-exc-1-tc-1",
        "input": "20 4",
        "expectedOutput": "5",
        "isHidden": false
      },
      {
        "id": "py-exc-1-tc-2",
        "input": "10 0",
        "expectedOutput": "ERROR: DIVISION BY ZERO",
        "isHidden": false
      },
      {
        "id": "py-exc-1-tc-3",
        "input": "abc 5",
        "expectedOutput": "ERROR: INVALID INPUT",
        "isHidden": false
      },
      {
        "id": "py-exc-1-tc-4",
        "input": "15 3",
        "expectedOutput": "5",
        "isHidden": true
      },
      {
        "id": "py-exc-1-tc-5",
        "input": "100 xyz",
        "expectedOutput": "ERROR: INVALID INPUT",
        "isHidden": true
      },
      {
        "id": "py-exc-1-tc-6",
        "input": "0 5",
        "expectedOutput": "0",
        "isHidden": true
      },
      {
        "id": "py-exc-1-tc-7",
        "input": "-10 2",
        "expectedOutput": "-5",
        "isHidden": true
      },
      {
        "id": "py-exc-1-tc-8",
        "input": "50 0",
        "expectedOutput": "ERROR: DIVISION BY ZERO",
        "isHidden": true
      },
      {
        "id": "py-exc-1-tc-9",
        "input": "foo bar",
        "expectedOutput": "ERROR: INVALID INPUT",
        "isHidden": true
      },
      {
        "id": "py-exc-1-tc-10",
        "input": "100 10",
        "expectedOutput": "10",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-exc-2",
    "languageId": "python",
    "language": "python",
    "level": "intermediate",
    "topicId": "python-exception-handling",
    "title": "Age Validator with Custom Exception",
    "slug": "age-validator-with-custom-exception",
    "difficulty": "medium",
    "problemStatement": "Define a custom exception InvalidAgeError. If age < 0 or age > 150, raise InvalidAgeError and output \"ERROR: AGE OUT OF BOUNDS\". Otherwise, print \"VALID: <age>\".",
    "description": "Define a custom exception InvalidAgeError. If age < 0 or age > 150, raise InvalidAgeError and output \"ERROR: AGE OUT OF BOUNDS\". Otherwise, print \"VALID: <age>\".",
    "inputFormat": "A single integer age.",
    "outputFormat": "Print status message.",
    "constraints": [
      "-1000 <= age <= 1000"
    ],
    "examples": [
      {
        "input": "25",
        "output": "VALID: 25",
        "explanation": "Age is between 0 and 150."
      },
      {
        "input": "-5",
        "output": "ERROR: AGE OUT OF BOUNDS",
        "explanation": "Negative age."
      },
      {
        "input": "180",
        "output": "ERROR: AGE OUT OF BOUNDS",
        "explanation": "Exceeds 150."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-exc-2-tc-1",
        "input": "25",
        "expectedOutput": "VALID: 25",
        "isHidden": false
      },
      {
        "id": "py-exc-2-tc-2",
        "input": "-5",
        "expectedOutput": "ERROR: AGE OUT OF BOUNDS",
        "isHidden": false
      },
      {
        "id": "py-exc-2-tc-3",
        "input": "180",
        "expectedOutput": "ERROR: AGE OUT OF BOUNDS",
        "isHidden": false
      },
      {
        "id": "py-exc-2-tc-4",
        "input": "0",
        "expectedOutput": "VALID: 0",
        "isHidden": true
      },
      {
        "id": "py-exc-2-tc-5",
        "input": "150",
        "expectedOutput": "VALID: 150",
        "isHidden": true
      },
      {
        "id": "py-exc-2-tc-6",
        "input": "75",
        "expectedOutput": "VALID: 75",
        "isHidden": true
      },
      {
        "id": "py-exc-2-tc-7",
        "input": "-1",
        "expectedOutput": "ERROR: AGE OUT OF BOUNDS",
        "isHidden": true
      },
      {
        "id": "py-exc-2-tc-8",
        "input": "151",
        "expectedOutput": "ERROR: AGE OUT OF BOUNDS",
        "isHidden": true
      },
      {
        "id": "py-exc-2-tc-9",
        "input": "99",
        "expectedOutput": "VALID: 99",
        "isHidden": true
      },
      {
        "id": "py-exc-2-tc-10",
        "input": "42",
        "expectedOutput": "VALID: 42",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-exc-3",
    "languageId": "python",
    "language": "python",
    "level": "intermediate",
    "topicId": "python-exception-handling",
    "title": "Parse Numeric List with Partial Recovery",
    "slug": "parse-numeric-list-with-partial-recovery",
    "difficulty": "medium",
    "problemStatement": "Given N space-separated tokens, try to parse each token as an integer. If parsing succeeds, add it to the running sum. If a ValueError occurs, ignore that token and increment an invalid count. Print \"Sum: <sum> Invalid: <count>\".",
    "description": "Given N space-separated tokens, try to parse each token as an integer. If parsing succeeds, add it to the running sum. If a ValueError occurs, ignore that token and increment an invalid count. Print \"Sum: <sum> Invalid: <count>\".",
    "inputFormat": "First line N, second line N space-separated tokens.",
    "outputFormat": "Print \"Sum: <sum> Invalid: <count>\".",
    "constraints": [
      "1 <= N <= 1000"
    ],
    "examples": [
      {
        "input": "5\n10 abc 20 xyz 30",
        "output": "Sum: 60 Invalid: 2",
        "explanation": "10+20+30=60, 2 invalid tokens."
      },
      {
        "input": "3\n1 2 3",
        "output": "Sum: 6 Invalid: 0",
        "explanation": "All valid."
      },
      {
        "input": "3\nfoo bar baz",
        "output": "Sum: 0 Invalid: 3",
        "explanation": "All invalid."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-exc-3-tc-1",
        "input": "5\n10 abc 20 xyz 30",
        "expectedOutput": "Sum: 60 Invalid: 2",
        "isHidden": false
      },
      {
        "id": "py-exc-3-tc-2",
        "input": "3\n1 2 3",
        "expectedOutput": "Sum: 6 Invalid: 0",
        "isHidden": false
      },
      {
        "id": "py-exc-3-tc-3",
        "input": "3\nfoo bar baz",
        "expectedOutput": "Sum: 0 Invalid: 3",
        "isHidden": false
      },
      {
        "id": "py-exc-3-tc-4",
        "input": "4\n5 10 15 20",
        "expectedOutput": "Sum: 50 Invalid: 0",
        "isHidden": true
      },
      {
        "id": "py-exc-3-tc-5",
        "input": "4\n-5 5 -10 10",
        "expectedOutput": "Sum: 0 Invalid: 0",
        "isHidden": true
      },
      {
        "id": "py-exc-3-tc-6",
        "input": "6\na 10 b 20 c 30",
        "expectedOutput": "Sum: 60 Invalid: 3",
        "isHidden": true
      },
      {
        "id": "py-exc-3-tc-7",
        "input": "1\n100",
        "expectedOutput": "Sum: 100 Invalid: 0",
        "isHidden": true
      },
      {
        "id": "py-exc-3-tc-8",
        "input": "1\ninvalid",
        "expectedOutput": "Sum: 0 Invalid: 1",
        "isHidden": true
      },
      {
        "id": "py-exc-3-tc-9",
        "input": "5\n7 7 err 7 7",
        "expectedOutput": "Sum: 28 Invalid: 1",
        "isHidden": true
      },
      {
        "id": "py-exc-3-tc-10",
        "input": "4\n1.5 2 3.5 4",
        "expectedOutput": "Sum: 6 Invalid: 2",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-file-1",
    "languageId": "python",
    "language": "python",
    "level": "intermediate",
    "topicId": "python-file-handling",
    "title": "Word, Line, and Character Counter (wc simulation)",
    "slug": "word-line-and-character-counter-wc-simulation",
    "difficulty": "easy",
    "problemStatement": "Given multiline input from stdin, count total number of lines, words, and characters. Print \"Lines: <L> Words: <W> Chars: <C>\".",
    "description": "Given multiline input from stdin, count total number of lines, words, and characters. Print \"Lines: <L> Words: <W> Chars: <C>\".",
    "inputFormat": "Multiline text string.",
    "outputFormat": "Print \"Lines: <L> Words: <W> Chars: <C>\".",
    "constraints": [
      "1 <= total chars <= 10^5"
    ],
    "examples": [
      {
        "input": "Hello World\nPython is awesome",
        "output": "Lines: 2 Words: 5 Chars: 29",
        "explanation": "2 lines, 5 words."
      },
      {
        "input": "Single line text",
        "output": "Lines: 1 Words: 3 Chars: 16",
        "explanation": "1 line."
      },
      {
        "input": "a\nb\nc",
        "output": "Lines: 3 Words: 3 Chars: 5",
        "explanation": "3 single-letter lines."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-file-1-tc-1",
        "input": "Hello World\nPython is awesome",
        "expectedOutput": "Lines: 2 Words: 5 Chars: 29",
        "isHidden": false
      },
      {
        "id": "py-file-1-tc-2",
        "input": "Single line text",
        "expectedOutput": "Lines: 1 Words: 3 Chars: 16",
        "isHidden": false
      },
      {
        "id": "py-file-1-tc-3",
        "input": "a\nb\nc",
        "expectedOutput": "Lines: 3 Words: 3 Chars: 5",
        "isHidden": false
      },
      {
        "id": "py-file-1-tc-4",
        "input": "one\ntwo\nthree\nfour",
        "expectedOutput": "Lines: 4 Words: 4 Chars: 18",
        "isHidden": true
      },
      {
        "id": "py-file-1-tc-5",
        "input": "code mentor ai academy",
        "expectedOutput": "Lines: 1 Words: 4 Chars: 22",
        "isHidden": true
      },
      {
        "id": "py-file-1-tc-6",
        "input": "test",
        "expectedOutput": "Lines: 1 Words: 1 Chars: 4",
        "isHidden": true
      },
      {
        "id": "py-file-1-tc-7",
        "input": "first line\nsecond line",
        "expectedOutput": "Lines: 2 Words: 4 Chars: 22",
        "isHidden": true
      },
      {
        "id": "py-file-1-tc-8",
        "input": "alpha\nbeta\ngamma",
        "expectedOutput": "Lines: 3 Words: 3 Chars: 16",
        "isHidden": true
      },
      {
        "id": "py-file-1-tc-9",
        "input": "1 2 3\n4 5 6\n7 8 9",
        "expectedOutput": "Lines: 3 Words: 9 Chars: 17",
        "isHidden": true
      },
      {
        "id": "py-file-1-tc-10",
        "input": "hello",
        "expectedOutput": "Lines: 1 Words: 1 Chars: 5",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-file-2",
    "languageId": "python",
    "language": "python",
    "level": "intermediate",
    "topicId": "python-file-handling",
    "title": "Find Longest Word in Input Stream",
    "slug": "find-longest-word-in-input-stream",
    "difficulty": "medium",
    "problemStatement": "Read all words from input stream. Find and print the longest word. If there is a tie, print the word that appeared first.",
    "description": "Read all words from input stream. Find and print the longest word. If there is a tie, print the word that appeared first.",
    "inputFormat": "A stream of words across one or more lines.",
    "outputFormat": "Print the longest word.",
    "constraints": [
      "1 <= total words <= 10^4"
    ],
    "examples": [
      {
        "input": "The quick brown fox jumps over the lazy dog",
        "output": "quick",
        "explanation": "quick, brown, jumps have length 5; quick appears first."
      },
      {
        "input": "artificial intelligence computer science",
        "output": "intelligence",
        "explanation": "intelligence is 12 characters."
      },
      {
        "input": "a bb ccc dddd",
        "output": "dddd",
        "explanation": "dddd is 4 characters."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-file-2-tc-1",
        "input": "The quick brown fox jumps over the lazy dog",
        "expectedOutput": "quick",
        "isHidden": false
      },
      {
        "id": "py-file-2-tc-2",
        "input": "artificial intelligence computer science",
        "expectedOutput": "intelligence",
        "isHidden": false
      },
      {
        "id": "py-file-2-tc-3",
        "input": "a bb ccc dddd",
        "expectedOutput": "dddd",
        "isHidden": false
      },
      {
        "id": "py-file-2-tc-4",
        "input": "hello world python",
        "expectedOutput": "python",
        "isHidden": true
      },
      {
        "id": "py-file-2-tc-5",
        "input": "antigravity ide platform",
        "expectedOutput": "antigravity",
        "isHidden": true
      },
      {
        "id": "py-file-2-tc-6",
        "input": "cat elephant mouse",
        "expectedOutput": "elephant",
        "isHidden": true
      },
      {
        "id": "py-file-2-tc-7",
        "input": "one two three four five",
        "expectedOutput": "three",
        "isHidden": true
      },
      {
        "id": "py-file-2-tc-8",
        "input": "microservice architecture systems",
        "expectedOutput": "architecture",
        "isHidden": true
      },
      {
        "id": "py-file-2-tc-9",
        "input": "tiny small medium colossal",
        "expectedOutput": "colossal",
        "isHidden": true
      },
      {
        "id": "py-file-2-tc-10",
        "input": "apple banana cherry",
        "expectedOutput": "banana",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-file-3",
    "languageId": "python",
    "language": "python",
    "level": "intermediate",
    "topicId": "python-file-handling",
    "title": "Log Parser: Count Severity Levels",
    "slug": "log-parser-count-severity-levels",
    "difficulty": "medium",
    "problemStatement": "Given a multiline log string where lines begin with a severity tag (INFO, WARN, ERROR), count the occurrences of each level. Print \"INFO: <count> WARN: <count> ERROR: <count>\".",
    "description": "Given a multiline log string where lines begin with a severity tag (INFO, WARN, ERROR), count the occurrences of each level. Print \"INFO: <count> WARN: <count> ERROR: <count>\".",
    "inputFormat": "Multiline log text.",
    "outputFormat": "Print \"INFO: <i> WARN: <w> ERROR: <e>\".",
    "constraints": [
      "1 <= lines <= 1000"
    ],
    "examples": [
      {
        "input": "INFO Server started\nERROR Database down\nWARN High memory\nERROR Timeout",
        "output": "INFO: 1 WARN: 1 ERROR: 2",
        "explanation": "Counts by severity."
      },
      {
        "input": "INFO Healthcheck OK\nINFO Request received",
        "output": "INFO: 2 WARN: 0 ERROR: 0",
        "explanation": "Only INFO."
      },
      {
        "input": "WARN Disk full",
        "output": "INFO: 0 WARN: 1 ERROR: 0",
        "explanation": "Only WARN."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-file-3-tc-1",
        "input": "INFO Server started\nERROR Database down\nWARN High memory\nERROR Timeout",
        "expectedOutput": "INFO: 1 WARN: 1 ERROR: 2",
        "isHidden": false
      },
      {
        "id": "py-file-3-tc-2",
        "input": "INFO Healthcheck OK\nINFO Request received",
        "expectedOutput": "INFO: 2 WARN: 0 ERROR: 0",
        "isHidden": false
      },
      {
        "id": "py-file-3-tc-3",
        "input": "WARN Disk full",
        "expectedOutput": "INFO: 0 WARN: 1 ERROR: 0",
        "isHidden": false
      },
      {
        "id": "py-file-3-tc-4",
        "input": "ERROR 500\nERROR 404\nERROR 503",
        "expectedOutput": "INFO: 0 WARN: 0 ERROR: 3",
        "isHidden": true
      },
      {
        "id": "py-file-3-tc-5",
        "input": "INFO Boot\nWARN Deprecated\nINFO Ready\nWARN Slow",
        "expectedOutput": "INFO: 2 WARN: 2 ERROR: 0",
        "isHidden": true
      },
      {
        "id": "py-file-3-tc-6",
        "input": "INFO Ping\nWARN Spike\nERROR Crash\nINFO Recover",
        "expectedOutput": "INFO: 2 WARN: 1 ERROR: 1",
        "isHidden": true
      },
      {
        "id": "py-file-3-tc-7",
        "input": "ERROR Failure 1\nERROR Failure 2\nWARN Warning 1",
        "expectedOutput": "INFO: 0 WARN: 1 ERROR: 2",
        "isHidden": true
      },
      {
        "id": "py-file-3-tc-8",
        "input": "INFO Task 1\nINFO Task 2\nINFO Task 3",
        "expectedOutput": "INFO: 3 WARN: 0 ERROR: 0",
        "isHidden": true
      },
      {
        "id": "py-file-3-tc-9",
        "input": "WARN High CPU\nWARN High IO",
        "expectedOutput": "INFO: 0 WARN: 2 ERROR: 0",
        "isHidden": true
      },
      {
        "id": "py-file-3-tc-10",
        "input": "INFO A\nWARN B\nERROR C",
        "expectedOutput": "INFO: 1 WARN: 1 ERROR: 1",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-json-1",
    "languageId": "python",
    "language": "python",
    "level": "intermediate",
    "topicId": "python-json-csv-handling",
    "title": "Parse JSON and Extract Nested Value",
    "slug": "parse-json-and-extract-nested-value",
    "difficulty": "easy",
    "problemStatement": "Given a JSON string representing a user object {\"name\": \"...\", \"profile\": {\"age\": ..., \"city\": \"...\"}}, parse the JSON and print \"Name: <name>, City: <city>, Age: <age>\".",
    "description": "Given a JSON string representing a user object {\"name\": \"...\", \"profile\": {\"age\": ..., \"city\": \"...\"}}, parse the JSON and print \"Name: <name>, City: <city>, Age: <age>\".",
    "inputFormat": "A valid JSON string.",
    "outputFormat": "Print \"Name: <name>, City: <city>, Age: <age>\".",
    "constraints": [
      "Valid JSON string."
    ],
    "examples": [
      {
        "input": "{\"name\": \"Alice\", \"profile\": {\"age\": 25, \"city\": \"NYC\"}}",
        "output": "Name: Alice, City: NYC, Age: 25",
        "explanation": "Extracted fields."
      },
      {
        "input": "{\"name\": \"Bob\", \"profile\": {\"age\": 30, \"city\": \"London\"}}",
        "output": "Name: Bob, City: London, Age: 30",
        "explanation": "Extracted Bob."
      },
      {
        "input": "{\"name\": \"Charlie\", \"profile\": {\"age\": 18, \"city\": \"Tokyo\"}}",
        "output": "Name: Charlie, City: Tokyo, Age: 18",
        "explanation": "Extracted Charlie."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-json-1-tc-1",
        "input": "{\"name\": \"Alice\", \"profile\": {\"age\": 25, \"city\": \"NYC\"}}",
        "expectedOutput": "Name: Alice, City: NYC, Age: 25",
        "isHidden": false
      },
      {
        "id": "py-json-1-tc-2",
        "input": "{\"name\": \"Bob\", \"profile\": {\"age\": 30, \"city\": \"London\"}}",
        "expectedOutput": "Name: Bob, City: London, Age: 30",
        "isHidden": false
      },
      {
        "id": "py-json-1-tc-3",
        "input": "{\"name\": \"Charlie\", \"profile\": {\"age\": 18, \"city\": \"Tokyo\"}}",
        "expectedOutput": "Name: Charlie, City: Tokyo, Age: 18",
        "isHidden": false
      },
      {
        "id": "py-json-1-tc-4",
        "input": "{\"name\": \"David\", \"profile\": {\"age\": 40, \"city\": \"Berlin\"}}",
        "expectedOutput": "Name: David, City: Berlin, Age: 40",
        "isHidden": true
      },
      {
        "id": "py-json-1-tc-5",
        "input": "{\"name\": \"Emma\", \"profile\": {\"age\": 22, \"city\": \"Paris\"}}",
        "expectedOutput": "Name: Emma, City: Paris, Age: 22",
        "isHidden": true
      },
      {
        "id": "py-json-1-tc-6",
        "input": "{\"name\": \"Frank\", \"profile\": {\"age\": 35, \"city\": \"Sydney\"}}",
        "expectedOutput": "Name: Frank, City: Sydney, Age: 35",
        "isHidden": true
      },
      {
        "id": "py-json-1-tc-7",
        "input": "{\"name\": \"Grace\", \"profile\": {\"age\": 29, \"city\": \"Toronto\"}}",
        "expectedOutput": "Name: Grace, City: Toronto, Age: 29",
        "isHidden": true
      },
      {
        "id": "py-json-1-tc-8",
        "input": "{\"name\": \"Henry\", \"profile\": {\"age\": 50, \"city\": \"Chicago\"}}",
        "expectedOutput": "Name: Henry, City: Chicago, Age: 50",
        "isHidden": true
      },
      {
        "id": "py-json-1-tc-9",
        "input": "{\"name\": \"Ivy\", \"profile\": {\"age\": 21, \"city\": \"Madrid\"}}",
        "expectedOutput": "Name: Ivy, City: Madrid, Age: 21",
        "isHidden": true
      },
      {
        "id": "py-json-1-tc-10",
        "input": "{\"name\": \"Jack\", \"profile\": {\"age\": 60, \"city\": \"Rome\"}}",
        "expectedOutput": "Name: Jack, City: Rome, Age: 60",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-json-2",
    "languageId": "python",
    "language": "python",
    "level": "intermediate",
    "topicId": "python-json-csv-handling",
    "title": "Filter JSON Array by Score Threshold",
    "slug": "filter-json-array-by-score-threshold",
    "difficulty": "medium",
    "problemStatement": "Given an integer threshold T and a JSON array of student objects [{\"name\": \"...\", \"score\": ...}], filter and print the names of students with score >= T sorted alphabetically separated by space. If none, print \"NONE\".",
    "description": "Given an integer threshold T and a JSON array of student objects [{\"name\": \"...\", \"score\": ...}], filter and print the names of students with score >= T sorted alphabetically separated by space. If none, print \"NONE\".",
    "inputFormat": "First line T, second line JSON array string.",
    "outputFormat": "Print space-separated names or \"NONE\".",
    "constraints": [
      "0 <= T <= 100"
    ],
    "examples": [
      {
        "input": "80\n[{\"name\": \"Alice\", \"score\": 90}, {\"name\": \"Bob\", \"score\": 75}, {\"name\": \"Charlie\", \"score\": 85}]",
        "output": "Alice Charlie",
        "explanation": "Alice (90) and Charlie (85) >= 80."
      },
      {
        "input": "95\n[{\"name\": \"Dan\", \"score\": 90}]",
        "output": "NONE",
        "explanation": "None >= 95."
      },
      {
        "input": "50\n[{\"name\": \"Zoe\", \"score\": 60}, {\"name\": \"Amy\", \"score\": 70}]",
        "output": "Amy Zoe",
        "explanation": "Sorted alphabetically."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-json-2-tc-1",
        "input": "80\n[{\"name\": \"Alice\", \"score\": 90}, {\"name\": \"Bob\", \"score\": 75}, {\"name\": \"Charlie\", \"score\": 85}]",
        "expectedOutput": "Alice Charlie",
        "isHidden": false
      },
      {
        "id": "py-json-2-tc-2",
        "input": "95\n[{\"name\": \"Dan\", \"score\": 90}]",
        "expectedOutput": "NONE",
        "isHidden": false
      },
      {
        "id": "py-json-2-tc-3",
        "input": "50\n[{\"name\": \"Zoe\", \"score\": 60}, {\"name\": \"Amy\", \"score\": 70}]",
        "expectedOutput": "Amy Zoe",
        "isHidden": false
      },
      {
        "id": "py-json-2-tc-4",
        "input": "60\n[{\"name\": \"Eve\", \"score\": 60}, {\"name\": \"Frank\", \"score\": 59}]",
        "expectedOutput": "Eve",
        "isHidden": true
      },
      {
        "id": "py-json-2-tc-5",
        "input": "70\n[{\"name\": \"Ken\", \"score\": 80}, {\"name\": \"Leo\", \"score\": 85}]",
        "expectedOutput": "Ken Leo",
        "isHidden": true
      },
      {
        "id": "py-json-2-tc-6",
        "input": "100\n[{\"name\": \"A\", \"score\": 100}, {\"name\": \"B\", \"score\": 100}]",
        "expectedOutput": "A B",
        "isHidden": true
      },
      {
        "id": "py-json-2-tc-7",
        "input": "0\n[{\"name\": \"X\", \"score\": 0}, {\"name\": \"Y\", \"score\": 10}]",
        "expectedOutput": "X Y",
        "isHidden": true
      },
      {
        "id": "py-json-2-tc-8",
        "input": "85\n[{\"name\": \"Ned\", \"score\": 84}]",
        "expectedOutput": "NONE",
        "isHidden": true
      },
      {
        "id": "py-json-2-tc-9",
        "input": "75\n[{\"name\": \"P\", \"score\": 75}, {\"name\": \"Q\", \"score\": 74}]",
        "expectedOutput": "P",
        "isHidden": true
      },
      {
        "id": "py-json-2-tc-10",
        "input": "90\n[{\"name\": \"Sam\", \"score\": 95}, {\"name\": \"Ben\", \"score\": 92}]",
        "expectedOutput": "Ben Sam",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-json-3",
    "languageId": "python",
    "language": "python",
    "level": "intermediate",
    "topicId": "python-json-csv-handling",
    "title": "CSV Header and Value Mapper",
    "slug": "csv-header-and-value-mapper",
    "difficulty": "medium",
    "problemStatement": "Given a header line and data row separated by commas, parse them and print sorted \"header:value\" pairs separated by spaces.",
    "description": "Given a header line and data row separated by commas, parse them and print sorted \"header:value\" pairs separated by spaces.",
    "inputFormat": "First line CSV headers, second line CSV data values.",
    "outputFormat": "Print space-separated sorted \"header:value\" pairs.",
    "constraints": [
      "Equal number of headers and values."
    ],
    "examples": [
      {
        "input": "name,age,city\nAlice,25,NYC",
        "output": "age:25 city:NYC name:Alice",
        "explanation": "Sorted by header name."
      },
      {
        "input": "id,role\n101,admin",
        "output": "id:101 role:admin",
        "explanation": "Mapped pairs."
      },
      {
        "input": "x,y\n10,20",
        "output": "x:10 y:20",
        "explanation": "2 columns."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-json-3-tc-1",
        "input": "name,age,city\nAlice,25,NYC",
        "expectedOutput": "age:25 city:NYC name:Alice",
        "isHidden": false
      },
      {
        "id": "py-json-3-tc-2",
        "input": "id,role\n101,admin",
        "expectedOutput": "id:101 role:admin",
        "isHidden": false
      },
      {
        "id": "py-json-3-tc-3",
        "input": "x,y\n10,20",
        "expectedOutput": "x:10 y:20",
        "isHidden": false
      },
      {
        "id": "py-json-3-tc-4",
        "input": "sku,price,qty\nA1,9.99,50",
        "expectedOutput": "price:9.99 qty:50 sku:A1",
        "isHidden": true
      },
      {
        "id": "py-json-3-tc-5",
        "input": "make,model,year\nToyota,Camry,2022",
        "expectedOutput": "make:Toyota model:Camry year:2022",
        "isHidden": true
      },
      {
        "id": "py-json-3-tc-6",
        "input": "first,last\nJohn,Doe",
        "expectedOutput": "first:John last:Doe",
        "isHidden": true
      },
      {
        "id": "py-json-3-tc-7",
        "input": "a,b,c\n1,2,3",
        "expectedOutput": "a:1 b:2 c:3",
        "isHidden": true
      },
      {
        "id": "py-json-3-tc-8",
        "input": "country,code\nIndia,IN",
        "expectedOutput": "code:IN country:India",
        "isHidden": true
      },
      {
        "id": "py-json-3-tc-9",
        "input": "course,grade\nCS101,A",
        "expectedOutput": "course:CS101 grade:A",
        "isHidden": true
      },
      {
        "id": "py-json-3-tc-10",
        "input": "ip,port\n127.0.0.1,8080",
        "expectedOutput": "ip:127.0.0.1 port:8080",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-oop-1",
    "languageId": "python",
    "language": "python",
    "level": "intermediate",
    "topicId": "python-classes-and-objects",
    "title": "Bank Account Class with Deposit and Withdraw",
    "slug": "bank-account-class-with-deposit-and-withdraw",
    "difficulty": "easy",
    "problemStatement": "Implement a BankAccount class initialized with balance B. Methods: deposit(amount), withdraw(amount) (fails if amount > balance, printing \"INSUFFICIENT FUNDS\"). Given initial B and sequence of operations, print final balance.",
    "description": "Implement a BankAccount class initialized with balance B. Methods: deposit(amount), withdraw(amount) (fails if amount > balance, printing \"INSUFFICIENT FUNDS\"). Given initial B and sequence of operations, print final balance.",
    "inputFormat": "First line initial B, second line N operations formatted as \"D <amt>\" or \"W <amt>\".",
    "outputFormat": "Print any error lines, followed by \"Final Balance: <balance>\".",
    "constraints": [
      "0 <= B <= 10^7"
    ],
    "examples": [
      {
        "input": "100\n2\nD 50\nW 30",
        "output": "Final Balance: 120",
        "explanation": "100 + 50 - 30 = 120."
      },
      {
        "input": "50\n2\nW 100\nD 20",
        "output": "INSUFFICIENT FUNDS\nFinal Balance: 70",
        "explanation": "Failed withdrawal printed."
      },
      {
        "input": "0\n1\nD 500",
        "output": "Final Balance: 500",
        "explanation": "Balance is 500."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-oop-1-tc-1",
        "input": "100\n2\nD 50\nW 30",
        "expectedOutput": "Final Balance: 120",
        "isHidden": false
      },
      {
        "id": "py-oop-1-tc-2",
        "input": "50\n2\nW 100\nD 20",
        "expectedOutput": "INSUFFICIENT FUNDS\nFinal Balance: 70",
        "isHidden": false
      },
      {
        "id": "py-oop-1-tc-3",
        "input": "0\n1\nD 500",
        "expectedOutput": "Final Balance: 500",
        "isHidden": false
      },
      {
        "id": "py-oop-1-tc-4",
        "input": "200\n3\nW 50\nW 50\nW 50",
        "expectedOutput": "Final Balance: 50",
        "isHidden": true
      },
      {
        "id": "py-oop-1-tc-5",
        "input": "100\n2\nW 100\nW 1",
        "expectedOutput": "INSUFFICIENT FUNDS\nFinal Balance: 0",
        "isHidden": true
      },
      {
        "id": "py-oop-1-tc-6",
        "input": "500\n2\nD 100\nD 200",
        "expectedOutput": "Final Balance: 800",
        "isHidden": true
      },
      {
        "id": "py-oop-1-tc-7",
        "input": "1000\n1\nW 200",
        "expectedOutput": "Final Balance: 800",
        "isHidden": true
      },
      {
        "id": "py-oop-1-tc-8",
        "input": "50\n1\nW 50",
        "expectedOutput": "Final Balance: 0",
        "isHidden": true
      },
      {
        "id": "py-oop-1-tc-9",
        "input": "300\n3\nD 100\nW 500\nD 50",
        "expectedOutput": "INSUFFICIENT FUNDS\nFinal Balance: 450",
        "isHidden": true
      },
      {
        "id": "py-oop-1-tc-10",
        "input": "10\n2\nW 20\nW 30",
        "expectedOutput": "INSUFFICIENT FUNDS\nINSUFFICIENT FUNDS\nFinal Balance: 10",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-oop-2",
    "languageId": "python",
    "language": "python",
    "level": "intermediate",
    "topicId": "python-classes-and-objects",
    "title": "Rectangle Class with Area and Perimeter",
    "slug": "rectangle-class-with-area-and-perimeter",
    "difficulty": "easy",
    "problemStatement": "Implement Rectangle(width, height) with methods area() and perimeter(). Given width and height, print \"Area: <area> Perimeter: <perimeter>\".",
    "description": "Implement Rectangle(width, height) with methods area() and perimeter(). Given width and height, print \"Area: <area> Perimeter: <perimeter>\".",
    "inputFormat": "Two space-separated numbers width and height.",
    "outputFormat": "Print \"Area: <area> Perimeter: <perimeter>\".",
    "constraints": [
      "1 <= width, height <= 10^5"
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
        "explanation": "Small rectangle."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-oop-2-tc-1",
        "input": "4 5",
        "expectedOutput": "Area: 20 Perimeter: 18",
        "isHidden": false
      },
      {
        "id": "py-oop-2-tc-2",
        "input": "10 10",
        "expectedOutput": "Area: 100 Perimeter: 40",
        "isHidden": false
      },
      {
        "id": "py-oop-2-tc-3",
        "input": "1 2",
        "expectedOutput": "Area: 2 Perimeter: 6",
        "isHidden": false
      },
      {
        "id": "py-oop-2-tc-4",
        "input": "7 3",
        "expectedOutput": "Area: 21 Perimeter: 20",
        "isHidden": true
      },
      {
        "id": "py-oop-2-tc-5",
        "input": "8 8",
        "expectedOutput": "Area: 64 Perimeter: 32",
        "isHidden": true
      },
      {
        "id": "py-oop-2-tc-6",
        "input": "15 4",
        "expectedOutput": "Area: 60 Perimeter: 38",
        "isHidden": true
      },
      {
        "id": "py-oop-2-tc-7",
        "input": "20 10",
        "expectedOutput": "Area: 200 Perimeter: 60",
        "isHidden": true
      },
      {
        "id": "py-oop-2-tc-8",
        "input": "6 9",
        "expectedOutput": "Area: 54 Perimeter: 30",
        "isHidden": true
      },
      {
        "id": "py-oop-2-tc-9",
        "input": "25 4",
        "expectedOutput": "Area: 100 Perimeter: 58",
        "isHidden": true
      },
      {
        "id": "py-oop-2-tc-10",
        "input": "12 12",
        "expectedOutput": "Area: 144 Perimeter: 48",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-oop-3",
    "languageId": "python",
    "language": "python",
    "level": "intermediate",
    "topicId": "python-classes-and-objects",
    "title": "Student Grade Tracker Class",
    "slug": "student-grade-tracker-class",
    "difficulty": "medium",
    "problemStatement": "Create a Student(name) class with method add_grade(g) and get_gpa(). GPA is calculated as sum(grades) / len(grades). Print \"Student: <name> GPA: <gpa>\" rounded to 2 decimal places.",
    "description": "Create a Student(name) class with method add_grade(g) and get_gpa(). GPA is calculated as sum(grades) / len(grades). Print \"Student: <name> GPA: <gpa>\" rounded to 2 decimal places.",
    "inputFormat": "Name followed by integer N and N grades.",
    "outputFormat": "Print \"Student: <name> GPA: <gpa>\".",
    "constraints": [
      "1 <= N <= 100",
      "0 <= grade <= 100"
    ],
    "examples": [
      {
        "input": "Alice 3 85 90 95",
        "output": "Student: Alice GPA: 90.00",
        "explanation": "(85+90+95)/3 = 90.00"
      },
      {
        "input": "Bob 2 70 80",
        "output": "Student: Bob GPA: 75.00",
        "explanation": "Average 75.00"
      },
      {
        "input": "Charlie 1 100",
        "output": "Student: Charlie GPA: 100.00",
        "explanation": "Single grade."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-oop-3-tc-1",
        "input": "Alice 3 85 90 95",
        "expectedOutput": "Student: Alice GPA: 90.00",
        "isHidden": false
      },
      {
        "id": "py-oop-3-tc-2",
        "input": "Bob 2 70 80",
        "expectedOutput": "Student: Bob GPA: 75.00",
        "isHidden": false
      },
      {
        "id": "py-oop-3-tc-3",
        "input": "Charlie 1 100",
        "expectedOutput": "Student: Charlie GPA: 100.00",
        "isHidden": false
      },
      {
        "id": "py-oop-3-tc-4",
        "input": "David 4 60 70 80 90",
        "expectedOutput": "Student: David GPA: 75.00",
        "isHidden": true
      },
      {
        "id": "py-oop-3-tc-5",
        "input": "Emma 3 88 92 90",
        "expectedOutput": "Student: Emma GPA: 90.00",
        "isHidden": true
      },
      {
        "id": "py-oop-3-tc-6",
        "input": "Frank 2 50 60",
        "expectedOutput": "Student: Frank GPA: 55.00",
        "isHidden": true
      },
      {
        "id": "py-oop-3-tc-7",
        "input": "Grace 5 100 95 90 85 80",
        "expectedOutput": "Student: Grace GPA: 90.00",
        "isHidden": true
      },
      {
        "id": "py-oop-3-tc-8",
        "input": "Henry 3 33 45 66",
        "expectedOutput": "Student: Henry GPA: 48.00",
        "isHidden": true
      },
      {
        "id": "py-oop-3-tc-9",
        "input": "Ivy 2 78 82",
        "expectedOutput": "Student: Ivy GPA: 80.00",
        "isHidden": true
      },
      {
        "id": "py-oop-3-tc-10",
        "input": "Jack 4 90 90 90 90",
        "expectedOutput": "Student: Jack GPA: 90.00",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-oop-4",
    "languageId": "python",
    "language": "python",
    "level": "intermediate",
    "topicId": "python-classes-and-objects",
    "title": "Shopping Cart Item Calculator",
    "slug": "shopping-cart-item-calculator",
    "difficulty": "medium",
    "problemStatement": "Implement ShoppingCart class with add_item(price, qty) and apply_discount(pct). Calculate subtotal, apply discount, and print \"Subtotal: <subtotal> Discount: <pct>% Total: <total>\" with all numbers rounded to 2 decimal places.",
    "description": "Implement ShoppingCart class with add_item(price, qty) and apply_discount(pct). Calculate subtotal, apply discount, and print \"Subtotal: <subtotal> Discount: <pct>% Total: <total>\" with all numbers rounded to 2 decimal places.",
    "inputFormat": "First line N (items) and D (discount %), next N lines each contain price and qty.",
    "outputFormat": "Print \"Subtotal: <sub> Discount: <D>% Total: <total>\".",
    "constraints": [
      "1 <= N <= 100",
      "0 <= D <= 100"
    ],
    "examples": [
      {
        "input": "2 10\n20 2\n10 1",
        "output": "Subtotal: 50.00 Discount: 10% Total: 45.00",
        "explanation": "20*2 + 10*1 = 50, 10% off is 45."
      },
      {
        "input": "1 0\n100 1",
        "output": "Subtotal: 100.00 Discount: 0% Total: 100.00",
        "explanation": "No discount."
      },
      {
        "input": "2 50\n40 1\n60 1",
        "output": "Subtotal: 100.00 Discount: 50% Total: 50.00",
        "explanation": "Half price."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-oop-4-tc-1",
        "input": "2 10\n20 2\n10 1",
        "expectedOutput": "Subtotal: 50.00 Discount: 10% Total: 45.00",
        "isHidden": false
      },
      {
        "id": "py-oop-4-tc-2",
        "input": "1 0\n100 1",
        "expectedOutput": "Subtotal: 100.00 Discount: 0% Total: 100.00",
        "isHidden": false
      },
      {
        "id": "py-oop-4-tc-3",
        "input": "2 50\n40 1\n60 1",
        "expectedOutput": "Subtotal: 100.00 Discount: 50% Total: 50.00",
        "isHidden": false
      },
      {
        "id": "py-oop-4-tc-4",
        "input": "3 20\n10 3\n5 2\n20 1",
        "expectedOutput": "Subtotal: 60.00 Discount: 20% Total: 48.00",
        "isHidden": true
      },
      {
        "id": "py-oop-4-tc-5",
        "input": "1 100\n50 2",
        "expectedOutput": "Subtotal: 100.00 Discount: 100% Total: 0.00",
        "isHidden": true
      },
      {
        "id": "py-oop-4-tc-6",
        "input": "2 5\n200 1\n100 1",
        "expectedOutput": "Subtotal: 300.00 Discount: 5% Total: 285.00",
        "isHidden": true
      },
      {
        "id": "py-oop-4-tc-7",
        "input": "1 15\n80 1",
        "expectedOutput": "Subtotal: 80.00 Discount: 15% Total: 68.00",
        "isHidden": true
      },
      {
        "id": "py-oop-4-tc-8",
        "input": "3 0\n15 2\n25 2\n10 1",
        "expectedOutput": "Subtotal: 90.00 Discount: 0% Total: 90.00",
        "isHidden": true
      },
      {
        "id": "py-oop-4-tc-9",
        "input": "2 25\n40 2\n20 1",
        "expectedOutput": "Subtotal: 100.00 Discount: 25% Total: 75.00",
        "isHidden": true
      },
      {
        "id": "py-oop-4-tc-10",
        "input": "1 10\n500 1",
        "expectedOutput": "Subtotal: 500.00 Discount: 10% Total: 450.00",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-inh-1",
    "languageId": "python",
    "language": "python",
    "level": "intermediate",
    "topicId": "python-inheritance-and-super",
    "title": "Employee and Manager Inheritance",
    "slug": "employee-and-manager-inheritance",
    "difficulty": "easy",
    "problemStatement": "Implement base class Employee(name, base_salary) with get_salary() and derived class Manager(name, base_salary, bonus) overriding get_salary() using super().get_salary() + bonus. Print \"Manager <name> Total Salary: <total>\".",
    "description": "Implement base class Employee(name, base_salary) with get_salary() and derived class Manager(name, base_salary, bonus) overriding get_salary() using super().get_salary() + bonus. Print \"Manager <name> Total Salary: <total>\".",
    "inputFormat": "Name (string), base_salary (int), bonus (int).",
    "outputFormat": "Print \"Manager <name> Total Salary: <total>\".",
    "constraints": [
      "1 <= base_salary <= 10^7"
    ],
    "examples": [
      {
        "input": "Alice 50000 10000",
        "output": "Manager Alice Total Salary: 60000",
        "explanation": "50000 + 10000 = 60000."
      },
      {
        "input": "Bob 80000 0",
        "output": "Manager Bob Total Salary: 80000",
        "explanation": "No bonus."
      },
      {
        "input": "Charlie 100000 25000",
        "output": "Manager Charlie Total Salary: 125000",
        "explanation": "Total salary calculated."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-inh-1-tc-1",
        "input": "Alice 50000 10000",
        "expectedOutput": "Manager Alice Total Salary: 60000",
        "isHidden": false
      },
      {
        "id": "py-inh-1-tc-2",
        "input": "Bob 80000 0",
        "expectedOutput": "Manager Bob Total Salary: 80000",
        "isHidden": false
      },
      {
        "id": "py-inh-1-tc-3",
        "input": "Charlie 100000 25000",
        "expectedOutput": "Manager Charlie Total Salary: 125000",
        "isHidden": false
      },
      {
        "id": "py-inh-1-tc-4",
        "input": "David 40000 5000",
        "expectedOutput": "Manager David Total Salary: 45000",
        "isHidden": true
      },
      {
        "id": "py-inh-1-tc-5",
        "input": "Emma 60000 15000",
        "expectedOutput": "Manager Emma Total Salary: 75000",
        "isHidden": true
      },
      {
        "id": "py-inh-1-tc-6",
        "input": "Frank 75000 20000",
        "expectedOutput": "Manager Frank Total Salary: 95000",
        "isHidden": true
      },
      {
        "id": "py-inh-1-tc-7",
        "input": "Grace 90000 10000",
        "expectedOutput": "Manager Grace Total Salary: 100000",
        "isHidden": true
      },
      {
        "id": "py-inh-1-tc-8",
        "input": "Henry 120000 30000",
        "expectedOutput": "Manager Henry Total Salary: 150000",
        "isHidden": true
      },
      {
        "id": "py-inh-1-tc-9",
        "input": "Ivy 55000 8000",
        "expectedOutput": "Manager Ivy Total Salary: 63000",
        "isHidden": true
      },
      {
        "id": "py-inh-1-tc-10",
        "input": "Jack 65000 12000",
        "expectedOutput": "Manager Jack Total Salary: 77000",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-inh-2",
    "languageId": "python",
    "language": "python",
    "level": "intermediate",
    "topicId": "python-inheritance-and-super",
    "title": "Shape Area Hierarchy",
    "slug": "shape-area-hierarchy",
    "difficulty": "medium",
    "problemStatement": "Implement base class Shape with area() and derived classes Circle(radius) (area = 3.14159 * r^2) and Square(side) (area = s^2). Given shape type and dimension, print the area rounded to 2 decimal places.",
    "description": "Implement base class Shape with area() and derived classes Circle(radius) (area = 3.14159 * r^2) and Square(side) (area = s^2). Given shape type and dimension, print the area rounded to 2 decimal places.",
    "inputFormat": "\"CIRCLE <r>\" or \"SQUARE <s>\".",
    "outputFormat": "Print area rounded to 2 decimal places.",
    "constraints": [
      "1 <= dimension <= 1000"
    ],
    "examples": [
      {
        "input": "CIRCLE 5",
        "output": "78.54",
        "explanation": "3.14159 * 25 = 78.54"
      },
      {
        "input": "SQUARE 4",
        "output": "16.00",
        "explanation": "4 * 4 = 16.00"
      },
      {
        "input": "CIRCLE 10",
        "output": "314.16",
        "explanation": "Circle area with r=10."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-inh-2-tc-1",
        "input": "CIRCLE 5",
        "expectedOutput": "78.54",
        "isHidden": false
      },
      {
        "id": "py-inh-2-tc-2",
        "input": "SQUARE 4",
        "expectedOutput": "16.00",
        "isHidden": false
      },
      {
        "id": "py-inh-2-tc-3",
        "input": "CIRCLE 10",
        "expectedOutput": "314.16",
        "isHidden": false
      },
      {
        "id": "py-inh-2-tc-4",
        "input": "SQUARE 10",
        "expectedOutput": "100.00",
        "isHidden": true
      },
      {
        "id": "py-inh-2-tc-5",
        "input": "CIRCLE 1",
        "expectedOutput": "3.14",
        "isHidden": true
      },
      {
        "id": "py-inh-2-tc-6",
        "input": "SQUARE 1",
        "expectedOutput": "1.00",
        "isHidden": true
      },
      {
        "id": "py-inh-2-tc-7",
        "input": "CIRCLE 7",
        "expectedOutput": "153.94",
        "isHidden": true
      },
      {
        "id": "py-inh-2-tc-8",
        "input": "SQUARE 12",
        "expectedOutput": "144.00",
        "isHidden": true
      },
      {
        "id": "py-inh-2-tc-9",
        "input": "CIRCLE 2",
        "expectedOutput": "12.57",
        "isHidden": true
      },
      {
        "id": "py-inh-2-tc-10",
        "input": "SQUARE 25",
        "expectedOutput": "625.00",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-inh-3",
    "languageId": "python",
    "language": "python",
    "level": "intermediate",
    "topicId": "python-inheritance-and-super",
    "title": "Vehicle Rental Fee Calculator",
    "slug": "vehicle-rental-fee-calculator",
    "difficulty": "medium",
    "problemStatement": "Implement Vehicle(days, rate_per_day) and derived LuxuryVehicle adding luxury_tax_rate (percentage on total). Calculate fee = (days * rate) * (1 + tax/100). Print \"Fee: <fee>\" rounded to 2 decimal places.",
    "description": "Implement Vehicle(days, rate_per_day) and derived LuxuryVehicle adding luxury_tax_rate (percentage on total). Calculate fee = (days * rate) * (1 + tax/100). Print \"Fee: <fee>\" rounded to 2 decimal places.",
    "inputFormat": "Three numbers: days (int), rate (float/int), tax (float/int).",
    "outputFormat": "Print \"Fee: <fee>\".",
    "constraints": [
      "1 <= days <= 365"
    ],
    "examples": [
      {
        "input": "3 100 20",
        "output": "Fee: 360.00",
        "explanation": "3 * 100 = 300, 20% tax = 360.00"
      },
      {
        "input": "1 50 0",
        "output": "Fee: 50.00",
        "explanation": "No tax."
      },
      {
        "input": "5 200 15",
        "output": "Fee: 1150.00",
        "explanation": "1000 * 1.15 = 1150.00"
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-inh-3-tc-1",
        "input": "3 100 20",
        "expectedOutput": "Fee: 360.00",
        "isHidden": false
      },
      {
        "id": "py-inh-3-tc-2",
        "input": "1 50 0",
        "expectedOutput": "Fee: 50.00",
        "isHidden": false
      },
      {
        "id": "py-inh-3-tc-3",
        "input": "5 200 15",
        "expectedOutput": "Fee: 1150.00",
        "isHidden": false
      },
      {
        "id": "py-inh-3-tc-4",
        "input": "2 80 10",
        "expectedOutput": "Fee: 176.00",
        "isHidden": true
      },
      {
        "id": "py-inh-3-tc-5",
        "input": "7 150 25",
        "expectedOutput": "Fee: 1312.50",
        "isHidden": true
      },
      {
        "id": "py-inh-3-tc-6",
        "input": "4 120 5",
        "expectedOutput": "Fee: 504.00",
        "isHidden": true
      },
      {
        "id": "py-inh-3-tc-7",
        "input": "10 300 18",
        "expectedOutput": "Fee: 3540.00",
        "isHidden": true
      },
      {
        "id": "py-inh-3-tc-8",
        "input": "1 250 12",
        "expectedOutput": "Fee: 280.00",
        "isHidden": true
      },
      {
        "id": "py-inh-3-tc-9",
        "input": "6 90 8",
        "expectedOutput": "Fee: 583.20",
        "isHidden": true
      },
      {
        "id": "py-inh-3-tc-10",
        "input": "2 500 20",
        "expectedOutput": "Fee: 1200.00",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-dnd-1",
    "languageId": "python",
    "language": "python",
    "level": "intermediate",
    "topicId": "python-magic-dunder-methods",
    "title": "Vector2D Addition and Representation",
    "slug": "vector2d-addition-and-representation",
    "difficulty": "easy",
    "problemStatement": "Implement Vector2D(x, y) with dunder methods __add__(other) and __repr__ returning \"(x, y)\". Given two vectors (x1, y1) and (x2, y2), compute and print their sum.",
    "description": "Implement Vector2D(x, y) with dunder methods __add__(other) and __repr__ returning \"(x, y)\". Given two vectors (x1, y1) and (x2, y2), compute and print their sum.",
    "inputFormat": "Four space-separated integers x1, y1, x2, y2.",
    "outputFormat": "Print \"(x1+x2, y1+y2)\".",
    "constraints": [
      "-10^5 <= coords <= 10^5"
    ],
    "examples": [
      {
        "input": "1 2 3 4",
        "output": "(4, 6)",
        "explanation": "(1+3, 2+4) = (4, 6)"
      },
      {
        "input": "0 0 5 5",
        "output": "(5, 5)",
        "explanation": "Zero vector sum."
      },
      {
        "input": "-2 4 2 -4",
        "output": "(0, 0)",
        "explanation": "Opposite vectors cancel."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-dnd-1-tc-1",
        "input": "1 2 3 4",
        "expectedOutput": "(4, 6)",
        "isHidden": false
      },
      {
        "id": "py-dnd-1-tc-2",
        "input": "0 0 5 5",
        "expectedOutput": "(5, 5)",
        "isHidden": false
      },
      {
        "id": "py-dnd-1-tc-3",
        "input": "-2 4 2 -4",
        "expectedOutput": "(0, 0)",
        "isHidden": false
      },
      {
        "id": "py-dnd-1-tc-4",
        "input": "10 20 30 40",
        "expectedOutput": "(40, 60)",
        "isHidden": true
      },
      {
        "id": "py-dnd-1-tc-5",
        "input": "-5 -10 -15 -20",
        "expectedOutput": "(-20, -30)",
        "isHidden": true
      },
      {
        "id": "py-dnd-1-tc-6",
        "input": "100 0 0 100",
        "expectedOutput": "(100, 100)",
        "isHidden": true
      },
      {
        "id": "py-dnd-1-tc-7",
        "input": "7 3 -2 5",
        "expectedOutput": "(5, 8)",
        "isHidden": true
      },
      {
        "id": "py-dnd-1-tc-8",
        "input": "9 9 1 1",
        "expectedOutput": "(10, 10)",
        "isHidden": true
      },
      {
        "id": "py-dnd-1-tc-9",
        "input": "12 -8 3 15",
        "expectedOutput": "(15, 7)",
        "isHidden": true
      },
      {
        "id": "py-dnd-1-tc-10",
        "input": "50 50 -50 -50",
        "expectedOutput": "(0, 0)",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-dnd-2",
    "languageId": "python",
    "language": "python",
    "level": "intermediate",
    "topicId": "python-magic-dunder-methods",
    "title": "Custom Book Collection with __len__ and __getitem__",
    "slug": "custom-book-collection-with-len-and-getitem",
    "difficulty": "medium",
    "problemStatement": "Implement BookCollection class supporting __len__() and __getitem__(index). Given N book titles and query index K (0-indexed), print \"Total: <len> Item: <title>\". If index is out of bounds, print \"Total: <len> Item: OUT OF BOUNDS\".",
    "description": "Implement BookCollection class supporting __len__() and __getitem__(index). Given N book titles and query index K (0-indexed), print \"Total: <len> Item: <title>\". If index is out of bounds, print \"Total: <len> Item: OUT OF BOUNDS\".",
    "inputFormat": "First line N and K, next N lines each contain a book title.",
    "outputFormat": "Print \"Total: <len> Item: <item>\".",
    "constraints": [
      "1 <= N <= 100"
    ],
    "examples": [
      {
        "input": "3 1\nBookA\nBookB\nBookC",
        "output": "Total: 3 Item: BookB",
        "explanation": "Index 1 is BookB."
      },
      {
        "input": "2 5\nBookX\nBookY",
        "output": "Total: 2 Item: OUT OF BOUNDS",
        "explanation": "Index 5 is out of bounds."
      },
      {
        "input": "1 0\nSoleBook",
        "output": "Total: 1 Item: SoleBook",
        "explanation": "Index 0."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-dnd-2-tc-1",
        "input": "3 1\nBookA\nBookB\nBookC",
        "expectedOutput": "Total: 3 Item: BookB",
        "isHidden": false
      },
      {
        "id": "py-dnd-2-tc-2",
        "input": "2 5\nBookX\nBookY",
        "expectedOutput": "Total: 2 Item: OUT OF BOUNDS",
        "isHidden": false
      },
      {
        "id": "py-dnd-2-tc-3",
        "input": "1 0\nSoleBook",
        "expectedOutput": "Total: 1 Item: SoleBook",
        "isHidden": false
      },
      {
        "id": "py-dnd-2-tc-4",
        "input": "4 3\nPython\nJava\nRust\nGo",
        "expectedOutput": "Total: 4 Item: Go",
        "isHidden": true
      },
      {
        "id": "py-dnd-2-tc-5",
        "input": "3 0\nAlpha\nBeta\nGamma",
        "expectedOutput": "Total: 3 Item: Alpha",
        "isHidden": true
      },
      {
        "id": "py-dnd-2-tc-6",
        "input": "2 2\nFirst\nSecond",
        "expectedOutput": "Total: 2 Item: OUT OF BOUNDS",
        "isHidden": true
      },
      {
        "id": "py-dnd-2-tc-7",
        "input": "5 2\nA\nB\nC\nD\nE",
        "expectedOutput": "Total: 5 Item: C",
        "isHidden": true
      },
      {
        "id": "py-dnd-2-tc-8",
        "input": "3 2\nX\nY\nZ",
        "expectedOutput": "Total: 3 Item: Z",
        "isHidden": true
      },
      {
        "id": "py-dnd-2-tc-9",
        "input": "4 4\n1\n2\n3\n4",
        "expectedOutput": "Total: 4 Item: OUT OF BOUNDS",
        "isHidden": true
      },
      {
        "id": "py-dnd-2-tc-10",
        "input": "2 0\nStart\nEnd",
        "expectedOutput": "Total: 2 Item: Start",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-dnd-3",
    "languageId": "python",
    "language": "python",
    "level": "intermediate",
    "topicId": "python-magic-dunder-methods",
    "title": "Money Currency Comparison with __eq__ and __lt__",
    "slug": "money-currency-comparison-with-eq-and-lt",
    "difficulty": "medium",
    "problemStatement": "Implement Money(amount, currency) with __eq__ and __lt__. Two Money objects can only be compared if currency is identical (otherwise print \"CURRENCY MISMATCH\"). Given two amounts and currencies, print \"EQUAL\", \"LESS\", or \"GREATER\".",
    "description": "Implement Money(amount, currency) with __eq__ and __lt__. Two Money objects can only be compared if currency is identical (otherwise print \"CURRENCY MISMATCH\"). Given two amounts and currencies, print \"EQUAL\", \"LESS\", or \"GREATER\".",
    "inputFormat": "amt1 (float/int), curr1 (string), amt2 (float/int), curr2 (string).",
    "outputFormat": "Print \"EQUAL\", \"LESS\", \"GREATER\", or \"CURRENCY MISMATCH\".",
    "constraints": [
      "0 <= amt <= 10^7"
    ],
    "examples": [
      {
        "input": "100 USD 100 USD",
        "output": "EQUAL",
        "explanation": "Amounts equal."
      },
      {
        "input": "50 USD 100 USD",
        "output": "LESS",
        "explanation": "50 < 100."
      },
      {
        "input": "100 USD 100 EUR",
        "output": "CURRENCY MISMATCH",
        "explanation": "Different currencies."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-dnd-3-tc-1",
        "input": "100 USD 100 USD",
        "expectedOutput": "EQUAL",
        "isHidden": false
      },
      {
        "id": "py-dnd-3-tc-2",
        "input": "50 USD 100 USD",
        "expectedOutput": "LESS",
        "isHidden": false
      },
      {
        "id": "py-dnd-3-tc-3",
        "input": "100 USD 100 EUR",
        "expectedOutput": "CURRENCY MISMATCH",
        "isHidden": false
      },
      {
        "id": "py-dnd-3-tc-4",
        "input": "200 EUR 150 EUR",
        "expectedOutput": "GREATER",
        "isHidden": true
      },
      {
        "id": "py-dnd-3-tc-5",
        "input": "0 GBP 0 GBP",
        "expectedOutput": "EQUAL",
        "isHidden": true
      },
      {
        "id": "py-dnd-3-tc-6",
        "input": "75 INR 100 INR",
        "expectedOutput": "LESS",
        "isHidden": true
      },
      {
        "id": "py-dnd-3-tc-7",
        "input": "500 JPY 300 USD",
        "expectedOutput": "CURRENCY MISMATCH",
        "isHidden": true
      },
      {
        "id": "py-dnd-3-tc-8",
        "input": "1000 CAD 1000 CAD",
        "expectedOutput": "EQUAL",
        "isHidden": true
      },
      {
        "id": "py-dnd-3-tc-9",
        "input": "80 AUD 120 AUD",
        "expectedOutput": "LESS",
        "isHidden": true
      },
      {
        "id": "py-dnd-3-tc-10",
        "input": "45 CHF 40 CHF",
        "expectedOutput": "GREATER",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-re-1",
    "languageId": "python",
    "language": "python",
    "level": "intermediate",
    "topicId": "python-regular-expressions",
    "title": "Extract Valid Email Addresses",
    "slug": "extract-valid-email-addresses",
    "difficulty": "easy",
    "problemStatement": "Given a text string, use regular expressions (re module) to extract all valid email addresses ([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}). Print extracted emails separated by space. If none, print \"NONE\".",
    "description": "Given a text string, use regular expressions (re module) to extract all valid email addresses ([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}). Print extracted emails separated by space. If none, print \"NONE\".",
    "inputFormat": "A string of text.",
    "outputFormat": "Print space-separated emails or \"NONE\".",
    "constraints": [
      "1 <= len(S) <= 10^4"
    ],
    "examples": [
      {
        "input": "Contact us at info@example.com or support@test.org for help",
        "output": "info@example.com support@test.org",
        "explanation": "Extracted emails."
      },
      {
        "input": "No emails here at all",
        "output": "NONE",
        "explanation": "No emails."
      },
      {
        "input": "Send to user123@domain.co.uk now",
        "output": "user123@domain.co.uk",
        "explanation": "Valid subdomains."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-re-1-tc-1",
        "input": "Contact us at info@example.com or support@test.org for help",
        "expectedOutput": "info@example.com support@test.org",
        "isHidden": false
      },
      {
        "id": "py-re-1-tc-2",
        "input": "No emails here at all",
        "expectedOutput": "NONE",
        "isHidden": false
      },
      {
        "id": "py-re-1-tc-3",
        "input": "Send to user123@domain.co.uk now",
        "expectedOutput": "user123@domain.co.uk",
        "isHidden": false
      },
      {
        "id": "py-re-1-tc-4",
        "input": "admin@site.com",
        "expectedOutput": "admin@site.com",
        "isHidden": true
      },
      {
        "id": "py-re-1-tc-5",
        "input": "hello @world not an email",
        "expectedOutput": "NONE",
        "isHidden": true
      },
      {
        "id": "py-re-1-tc-6",
        "input": "email: alice@work.com, bob@home.net",
        "expectedOutput": "alice@work.com bob@home.net",
        "isHidden": true
      },
      {
        "id": "py-re-1-tc-7",
        "input": "test@test.io is live",
        "expectedOutput": "test@test.io",
        "isHidden": true
      },
      {
        "id": "py-re-1-tc-8",
        "input": "invalid@.com missing domain",
        "expectedOutput": "NONE",
        "isHidden": true
      },
      {
        "id": "py-re-1-tc-9",
        "input": "one@a.com two@b.org three@c.net",
        "expectedOutput": "one@a.com two@b.org three@c.net",
        "isHidden": true
      },
      {
        "id": "py-re-1-tc-10",
        "input": "feedback@service.com",
        "expectedOutput": "feedback@service.com",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-re-2",
    "languageId": "python",
    "language": "python",
    "level": "intermediate",
    "topicId": "python-regular-expressions",
    "title": "Validate Phone Number Format",
    "slug": "validate-phone-number-format",
    "difficulty": "medium",
    "problemStatement": "Validate if phone numbers match standard formats: XXX-XXX-XXXX or (XXX) XXX-XXXX. Print \"VALID\" or \"INVALID\".",
    "description": "Validate if phone numbers match standard formats: XXX-XXX-XXXX or (XXX) XXX-XXXX. Print \"VALID\" or \"INVALID\".",
    "inputFormat": "A phone number string.",
    "outputFormat": "Print \"VALID\" or \"INVALID\".",
    "constraints": [
      "String length <= 50"
    ],
    "examples": [
      {
        "input": "123-456-7890",
        "output": "VALID",
        "explanation": "Matches XXX-XXX-XXXX."
      },
      {
        "input": "(123) 456-7890",
        "output": "VALID",
        "explanation": "Matches (XXX) XXX-XXXX."
      },
      {
        "input": "1234567890",
        "output": "INVALID",
        "explanation": "Missing delimiters."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-re-2-tc-1",
        "input": "123-456-7890",
        "expectedOutput": "VALID",
        "isHidden": false
      },
      {
        "id": "py-re-2-tc-2",
        "input": "(123) 456-7890",
        "expectedOutput": "VALID",
        "isHidden": false
      },
      {
        "id": "py-re-2-tc-3",
        "input": "1234567890",
        "expectedOutput": "INVALID",
        "isHidden": false
      },
      {
        "id": "py-re-2-tc-4",
        "input": "987-654-3210",
        "expectedOutput": "VALID",
        "isHidden": true
      },
      {
        "id": "py-re-2-tc-5",
        "input": "(800) 555-0199",
        "expectedOutput": "VALID",
        "isHidden": true
      },
      {
        "id": "py-re-2-tc-6",
        "input": "12-345-6789",
        "expectedOutput": "INVALID",
        "isHidden": true
      },
      {
        "id": "py-re-2-tc-7",
        "input": "(123)456-7890",
        "expectedOutput": "INVALID",
        "isHidden": true
      },
      {
        "id": "py-re-2-tc-8",
        "input": "555-555-5555",
        "expectedOutput": "VALID",
        "isHidden": true
      },
      {
        "id": "py-re-2-tc-9",
        "input": "abc-def-ghij",
        "expectedOutput": "INVALID",
        "isHidden": true
      },
      {
        "id": "py-re-2-tc-10",
        "input": "(999) 999-9999",
        "expectedOutput": "VALID",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-re-3",
    "languageId": "python",
    "language": "python",
    "level": "intermediate",
    "topicId": "python-regular-expressions",
    "title": "Extract and Sum All Numbers in Text",
    "slug": "extract-and-sum-all-numbers-in-text",
    "difficulty": "medium",
    "problemStatement": "Given an arbitrary text containing words and numbers, extract all integers using re.findall(r\"\\d+\", text) and compute their sum.",
    "description": "Given an arbitrary text containing words and numbers, extract all integers using re.findall(r\"\\d+\", text) and compute their sum.",
    "inputFormat": "A string of text.",
    "outputFormat": "Print the integer sum of all numbers.",
    "constraints": [
      "1 <= len(text) <= 10^4"
    ],
    "examples": [
      {
        "input": "I bought 3 apples, 5 bananas, and 12 oranges",
        "output": "20",
        "explanation": "3 + 5 + 12 = 20."
      },
      {
        "input": "No numbers here",
        "output": "0",
        "explanation": "Sum 0."
      },
      {
        "input": "Order 100 total 250 fee 15",
        "output": "365",
        "explanation": "100 + 250 + 15 = 365."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-re-3-tc-1",
        "input": "I bought 3 apples, 5 bananas, and 12 oranges",
        "expectedOutput": "20",
        "isHidden": false
      },
      {
        "id": "py-re-3-tc-2",
        "input": "No numbers here",
        "expectedOutput": "0",
        "isHidden": false
      },
      {
        "id": "py-re-3-tc-3",
        "input": "Order 100 total 250 fee 15",
        "expectedOutput": "365",
        "isHidden": false
      },
      {
        "id": "py-re-3-tc-4",
        "input": "Score: 10, 20, 30",
        "expectedOutput": "60",
        "isHidden": true
      },
      {
        "id": "py-re-3-tc-5",
        "input": "1 2 3 4 5",
        "expectedOutput": "15",
        "isHidden": true
      },
      {
        "id": "py-re-3-tc-6",
        "input": "text with 0 zeroes",
        "expectedOutput": "0",
        "isHidden": true
      },
      {
        "id": "py-re-3-tc-7",
        "input": "box1 has 50 items and box2 has 50 items",
        "expectedOutput": "103",
        "isHidden": true
      },
      {
        "id": "py-re-3-tc-8",
        "input": "42",
        "expectedOutput": "42",
        "isHidden": true
      },
      {
        "id": "py-re-3-tc-9",
        "input": "abc 10 def 20 ghi 30 jkl 40",
        "expectedOutput": "100",
        "isHidden": true
      },
      {
        "id": "py-re-3-tc-10",
        "input": "year 2026 month 10 day 7",
        "expectedOutput": "2043",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-col-1",
    "languageId": "python",
    "language": "python",
    "level": "intermediate",
    "topicId": "python-collections-module",
    "title": "Top K Most Frequent Elements with Counter",
    "slug": "top-k-most-frequent-elements-with-counter",
    "difficulty": "medium",
    "problemStatement": "Given N integers and K, find the top K most frequent elements using collections.Counter. Print the elements sorted by frequency descending. In case of tie, sort by element value ascending.",
    "description": "Given N integers and K, find the top K most frequent elements using collections.Counter. Print the elements sorted by frequency descending. In case of tie, sort by element value ascending.",
    "inputFormat": "First line N and K, second line N space-separated integers.",
    "outputFormat": "Print space-separated top K elements.",
    "constraints": [
      "1 <= K <= N <= 10^5"
    ],
    "examples": [
      {
        "input": "6 2\n1 1 1 2 2 3",
        "output": "1 2",
        "explanation": "1 occurs 3 times, 2 occurs 2 times."
      },
      {
        "input": "4 1\n5 5 5 5",
        "output": "5",
        "explanation": "Only 5."
      },
      {
        "input": "6 3\n1 2 2 3 3 4",
        "output": "2 3 1",
        "explanation": "2 and 3 tied at freq 2 (sorted 2 then 3), 1 and 4 tied at freq 1 (sorted 1)."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-col-1-tc-1",
        "input": "6 2\n1 1 1 2 2 3",
        "expectedOutput": "1 2",
        "isHidden": false
      },
      {
        "id": "py-col-1-tc-2",
        "input": "4 1\n5 5 5 5",
        "expectedOutput": "5",
        "isHidden": false
      },
      {
        "id": "py-col-1-tc-3",
        "input": "6 3\n1 2 2 3 3 4",
        "expectedOutput": "2 3 1",
        "isHidden": false
      },
      {
        "id": "py-col-1-tc-4",
        "input": "5 2\n10 20 10 20 30",
        "expectedOutput": "10 20",
        "isHidden": true
      },
      {
        "id": "py-col-1-tc-5",
        "input": "3 3\n3 2 1",
        "expectedOutput": "1 2 3",
        "isHidden": true
      },
      {
        "id": "py-col-1-tc-6",
        "input": "7 2\n4 4 4 2 2 1 1",
        "expectedOutput": "4 1",
        "isHidden": true
      },
      {
        "id": "py-col-1-tc-7",
        "input": "5 1\n9 8 7 9 9",
        "expectedOutput": "9",
        "isHidden": true
      },
      {
        "id": "py-col-1-tc-8",
        "input": "8 3\n1 1 2 2 3 3 3 4",
        "expectedOutput": "3 1 2",
        "isHidden": true
      },
      {
        "id": "py-col-1-tc-9",
        "input": "4 2\n7 8 8 7",
        "expectedOutput": "7 8",
        "isHidden": true
      },
      {
        "id": "py-col-1-tc-10",
        "input": "6 2\n5 5 6 6 6 7",
        "expectedOutput": "6 5",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-col-2",
    "languageId": "python",
    "language": "python",
    "level": "intermediate",
    "topicId": "python-collections-module",
    "title": "Group Anagrams with defaultdict",
    "slug": "group-anagrams-with-defaultdict",
    "difficulty": "medium",
    "problemStatement": "Given N lowercase words, group words that are anagrams of each other using collections.defaultdict(list). Sort words within each group, and sort groups by their first word. Print each group separated by spaces on a new line.",
    "description": "Given N lowercase words, group words that are anagrams of each other using collections.defaultdict(list). Sort words within each group, and sort groups by their first word. Print each group separated by spaces on a new line.",
    "inputFormat": "First line N, second line N space-separated words.",
    "outputFormat": "Print each group of anagrams on a new line.",
    "constraints": [
      "1 <= N <= 1000"
    ],
    "examples": [
      {
        "input": "6\neat tea tan ate nat bat",
        "output": "ate eat tea\nbat\nnat tan",
        "explanation": "Groups sorted."
      },
      {
        "input": "3\na b c",
        "output": "a\nb\nc",
        "explanation": "No anagrams."
      },
      {
        "input": "2\nab ba",
        "output": "ab ba",
        "explanation": "ab and ba are anagrams."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-col-2-tc-1",
        "input": "6\neat tea tan ate nat bat",
        "expectedOutput": "ate eat tea\nbat\nnat tan",
        "isHidden": false
      },
      {
        "id": "py-col-2-tc-2",
        "input": "3\na b c",
        "expectedOutput": "a\nb\nc",
        "isHidden": false
      },
      {
        "id": "py-col-2-tc-3",
        "input": "2\nab ba",
        "expectedOutput": "ab ba",
        "isHidden": false
      },
      {
        "id": "py-col-2-tc-4",
        "input": "4\nlisten silent enlist stone",
        "expectedOutput": "enlist listen silent\nstone",
        "isHidden": true
      },
      {
        "id": "py-col-2-tc-5",
        "input": "3\ncat dog rat",
        "expectedOutput": "cat\ndog\nrat",
        "isHidden": true
      },
      {
        "id": "py-col-2-tc-6",
        "input": "4\nrace care acer car",
        "expectedOutput": "acer care race\ncar",
        "isHidden": true
      },
      {
        "id": "py-col-2-tc-7",
        "input": "2\nhello world",
        "expectedOutput": "hello\nworld",
        "isHidden": true
      },
      {
        "id": "py-col-2-tc-8",
        "input": "3\nopt top pot",
        "expectedOutput": "opt pot top",
        "isHidden": true
      },
      {
        "id": "py-col-2-tc-9",
        "input": "4\nstop spot post tops",
        "expectedOutput": "post spot stop tops",
        "isHidden": true
      },
      {
        "id": "py-col-2-tc-10",
        "input": "1\nsolo",
        "expectedOutput": "solo",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-col-3",
    "languageId": "python",
    "language": "python",
    "level": "intermediate",
    "topicId": "python-collections-module",
    "title": "Sliding Window Maximum Using deque",
    "slug": "sliding-window-maximum-using-deque",
    "difficulty": "hard",
    "problemStatement": "Given an array of N integers and window size K, find the maximum element in each sliding window of size K moving from left to right using collections.deque in O(N) time. Print space-separated maximums.",
    "description": "Given an array of N integers and window size K, find the maximum element in each sliding window of size K moving from left to right using collections.deque in O(N) time. Print space-separated maximums.",
    "inputFormat": "First line N and K, second line N space-separated integers.",
    "outputFormat": "Print space-separated window maximums.",
    "constraints": [
      "1 <= K <= N <= 10^5"
    ],
    "examples": [
      {
        "input": "8 3\n1 3 -1 -3 5 3 6 7",
        "output": "3 3 5 5 6 7",
        "explanation": "Windows of size 3 maximums."
      },
      {
        "input": "4 2\n1 2 3 4",
        "output": "2 3 4",
        "explanation": "Windows of size 2."
      },
      {
        "input": "1 1\n42",
        "output": "42",
        "explanation": "Single element."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-col-3-tc-1",
        "input": "8 3\n1 3 -1 -3 5 3 6 7",
        "expectedOutput": "3 3 5 5 6 7",
        "isHidden": false
      },
      {
        "id": "py-col-3-tc-2",
        "input": "4 2\n1 2 3 4",
        "expectedOutput": "2 3 4",
        "isHidden": false
      },
      {
        "id": "py-col-3-tc-3",
        "input": "1 1\n42",
        "expectedOutput": "42",
        "isHidden": false
      },
      {
        "id": "py-col-3-tc-4",
        "input": "5 1\n5 4 3 2 1",
        "expectedOutput": "5 4 3 2 1",
        "isHidden": true
      },
      {
        "id": "py-col-3-tc-5",
        "input": "5 5\n1 5 2 4 3",
        "expectedOutput": "5",
        "isHidden": true
      },
      {
        "id": "py-col-3-tc-6",
        "input": "6 3\n9 8 7 6 5 4",
        "expectedOutput": "9 8 7 6",
        "isHidden": true
      },
      {
        "id": "py-col-3-tc-7",
        "input": "6 2\n10 -10 20 -20 30 -30",
        "expectedOutput": "10 20 20 30 30",
        "isHidden": true
      },
      {
        "id": "py-col-3-tc-8",
        "input": "4 3\n1 3 1 2",
        "expectedOutput": "3 3",
        "isHidden": true
      },
      {
        "id": "py-col-3-tc-9",
        "input": "5 2\n4 4 4 4 4",
        "expectedOutput": "4 4 4 4",
        "isHidden": true
      },
      {
        "id": "py-col-3-tc-10",
        "input": "7 4\n1 2 3 4 3 2 1",
        "expectedOutput": "4 4 4 4",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-meta-1",
    "languageId": "python",
    "language": "python",
    "level": "advanced",
    "topicId": "python-metaclasses",
    "title": "Enforce Required Methods in Metaclass",
    "slug": "enforce-required-methods-in-metaclass",
    "difficulty": "medium",
    "problemStatement": "Implement a metaclass InterfaceMeta that checks whether classes have implemented a required method execute(). Given class definitions, if execute is present print \"VALID\", otherwise print \"MISSING: execute\".",
    "description": "Implement a metaclass InterfaceMeta that checks whether classes have implemented a required method execute(). Given class definitions, if execute is present print \"VALID\", otherwise print \"MISSING: execute\".",
    "inputFormat": "Class name and boolean has_execute (1 or 0).",
    "outputFormat": "Print \"VALID\" or \"MISSING: execute\".",
    "constraints": [
      "Simple flag input."
    ],
    "examples": [
      {
        "input": "Worker 1",
        "output": "VALID",
        "explanation": "execute implemented."
      },
      {
        "input": "LazyWorker 0",
        "output": "MISSING: execute",
        "explanation": "execute missing."
      },
      {
        "input": "Task 1",
        "output": "VALID",
        "explanation": "Implemented."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-meta-1-tc-1",
        "input": "Worker 1",
        "expectedOutput": "VALID",
        "isHidden": false
      },
      {
        "id": "py-meta-1-tc-2",
        "input": "LazyWorker 0",
        "expectedOutput": "MISSING: execute",
        "isHidden": false
      },
      {
        "id": "py-meta-1-tc-3",
        "input": "Task 1",
        "expectedOutput": "VALID",
        "isHidden": false
      },
      {
        "id": "py-meta-1-tc-4",
        "input": "Job 0",
        "expectedOutput": "MISSING: execute",
        "isHidden": true
      },
      {
        "id": "py-meta-1-tc-5",
        "input": "Pipeline 1",
        "expectedOutput": "VALID",
        "isHidden": true
      },
      {
        "id": "py-meta-1-tc-6",
        "input": "Runner 1",
        "expectedOutput": "VALID",
        "isHidden": true
      },
      {
        "id": "py-meta-1-tc-7",
        "input": "Empty 0",
        "expectedOutput": "MISSING: execute",
        "isHidden": true
      },
      {
        "id": "py-meta-1-tc-8",
        "input": "Process 1",
        "expectedOutput": "VALID",
        "isHidden": true
      },
      {
        "id": "py-meta-1-tc-9",
        "input": "Step 0",
        "expectedOutput": "MISSING: execute",
        "isHidden": true
      },
      {
        "id": "py-meta-1-tc-10",
        "input": "Flow 1",
        "expectedOutput": "VALID",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-meta-2",
    "languageId": "python",
    "language": "python",
    "level": "advanced",
    "topicId": "python-metaclasses",
    "title": "Uppercase Attribute Names Metaclass",
    "slug": "uppercase-attribute-names-metaclass",
    "difficulty": "medium",
    "problemStatement": "Implement an UpperAttrMeta metaclass that transforms all user-defined class attribute names to uppercase. Given attribute name and value, print \"<UPPER_KEY>=<val>\".",
    "description": "Implement an UpperAttrMeta metaclass that transforms all user-defined class attribute names to uppercase. Given attribute name and value, print \"<UPPER_KEY>=<val>\".",
    "inputFormat": "attributeName (string) and attributeValue (string).",
    "outputFormat": "Print \"<ATTR_NAME>=<val>\".",
    "constraints": [
      "1 <= len <= 50"
    ],
    "examples": [
      {
        "input": "name Alice",
        "output": "NAME=Alice",
        "explanation": "Name transformed to NAME."
      },
      {
        "input": "role admin",
        "output": "ROLE=admin",
        "explanation": "role transformed to ROLE."
      },
      {
        "input": "host localhost",
        "output": "HOST=localhost",
        "explanation": "host transformed to HOST."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-meta-2-tc-1",
        "input": "name Alice",
        "expectedOutput": "NAME=Alice",
        "isHidden": false
      },
      {
        "id": "py-meta-2-tc-2",
        "input": "role admin",
        "expectedOutput": "ROLE=admin",
        "isHidden": false
      },
      {
        "id": "py-meta-2-tc-3",
        "input": "host localhost",
        "expectedOutput": "HOST=localhost",
        "isHidden": false
      },
      {
        "id": "py-meta-2-tc-4",
        "input": "port 8080",
        "expectedOutput": "PORT=8080",
        "isHidden": true
      },
      {
        "id": "py-meta-2-tc-5",
        "input": "version 3.12",
        "expectedOutput": "VERSION=3.12",
        "isHidden": true
      },
      {
        "id": "py-meta-2-tc-6",
        "input": "debug true",
        "expectedOutput": "DEBUG=true",
        "isHidden": true
      },
      {
        "id": "py-meta-2-tc-7",
        "input": "user guest",
        "expectedOutput": "USER=guest",
        "isHidden": true
      },
      {
        "id": "py-meta-2-tc-8",
        "input": "status ok",
        "expectedOutput": "STATUS=ok",
        "isHidden": true
      },
      {
        "id": "py-meta-2-tc-9",
        "input": "env prod",
        "expectedOutput": "ENV=prod",
        "isHidden": true
      },
      {
        "id": "py-meta-2-tc-10",
        "input": "db postgres",
        "expectedOutput": "DB=postgres",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-desc-1",
    "languageId": "python",
    "language": "python",
    "level": "advanced",
    "topicId": "python-descriptors-protocol",
    "title": "Positive Number Descriptor Validator",
    "slug": "positive-number-descriptor-validator",
    "difficulty": "medium",
    "problemStatement": "Implement a descriptor PositiveNumber that raises ValueError(\"Must be positive\") when assigned a non-positive value (<= 0). Given an integer value, print \"ACCEPTED: <val>\" or \"REJECTED: MUST BE POSITIVE\".",
    "description": "Implement a descriptor PositiveNumber that raises ValueError(\"Must be positive\") when assigned a non-positive value (<= 0). Given an integer value, print \"ACCEPTED: <val>\" or \"REJECTED: MUST BE POSITIVE\".",
    "inputFormat": "An integer V.",
    "outputFormat": "Print validation outcome.",
    "constraints": [
      "-10^9 <= V <= 10^9"
    ],
    "examples": [
      {
        "input": "42",
        "output": "ACCEPTED: 42",
        "explanation": "Positive value."
      },
      {
        "input": "-5",
        "output": "REJECTED: MUST BE POSITIVE",
        "explanation": "Negative value."
      },
      {
        "input": "0",
        "output": "REJECTED: MUST BE POSITIVE",
        "explanation": "Zero is not positive."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-desc-1-tc-1",
        "input": "42",
        "expectedOutput": "ACCEPTED: 42",
        "isHidden": false
      },
      {
        "id": "py-desc-1-tc-2",
        "input": "-5",
        "expectedOutput": "REJECTED: MUST BE POSITIVE",
        "isHidden": false
      },
      {
        "id": "py-desc-1-tc-3",
        "input": "0",
        "expectedOutput": "REJECTED: MUST BE POSITIVE",
        "isHidden": false
      },
      {
        "id": "py-desc-1-tc-4",
        "input": "1",
        "expectedOutput": "ACCEPTED: 1",
        "isHidden": true
      },
      {
        "id": "py-desc-1-tc-5",
        "input": "-1",
        "expectedOutput": "REJECTED: MUST BE POSITIVE",
        "isHidden": true
      },
      {
        "id": "py-desc-1-tc-6",
        "input": "1000",
        "expectedOutput": "ACCEPTED: 1000",
        "isHidden": true
      },
      {
        "id": "py-desc-1-tc-7",
        "input": "-1000",
        "expectedOutput": "REJECTED: MUST BE POSITIVE",
        "isHidden": true
      },
      {
        "id": "py-desc-1-tc-8",
        "input": "99",
        "expectedOutput": "ACCEPTED: 99",
        "isHidden": true
      },
      {
        "id": "py-desc-1-tc-9",
        "input": "-50",
        "expectedOutput": "REJECTED: MUST BE POSITIVE",
        "isHidden": true
      },
      {
        "id": "py-desc-1-tc-10",
        "input": "500",
        "expectedOutput": "ACCEPTED: 500",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-desc-2",
    "languageId": "python",
    "language": "python",
    "level": "advanced",
    "topicId": "python-descriptors-protocol",
    "title": "Typed String Descriptor",
    "slug": "typed-string-descriptor",
    "difficulty": "medium",
    "problemStatement": "Implement a descriptor TypedString(max_length) that enforces string type and maximum character length. Given max_length M and string S, print \"ACCEPTED\" if len(S) <= M, else \"REJECTED: LENGTH EXCEEDED\".",
    "description": "Implement a descriptor TypedString(max_length) that enforces string type and maximum character length. Given max_length M and string S, print \"ACCEPTED\" if len(S) <= M, else \"REJECTED: LENGTH EXCEEDED\".",
    "inputFormat": "Integer M and string S.",
    "outputFormat": "Print \"ACCEPTED\" or \"REJECTED: LENGTH EXCEEDED\".",
    "constraints": [
      "1 <= M <= 100"
    ],
    "examples": [
      {
        "input": "5 hello",
        "output": "ACCEPTED",
        "explanation": "len(hello) == 5 <= 5."
      },
      {
        "input": "3 test",
        "output": "REJECTED: LENGTH EXCEEDED",
        "explanation": "len(test) == 4 > 3."
      },
      {
        "input": "10 python",
        "output": "ACCEPTED",
        "explanation": "len(python) == 6 <= 10."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-desc-2-tc-1",
        "input": "5 hello",
        "expectedOutput": "ACCEPTED",
        "isHidden": false
      },
      {
        "id": "py-desc-2-tc-2",
        "input": "3 test",
        "expectedOutput": "REJECTED: LENGTH EXCEEDED",
        "isHidden": false
      },
      {
        "id": "py-desc-2-tc-3",
        "input": "10 python",
        "expectedOutput": "ACCEPTED",
        "isHidden": false
      },
      {
        "id": "py-desc-2-tc-4",
        "input": "2 hi",
        "expectedOutput": "ACCEPTED",
        "isHidden": true
      },
      {
        "id": "py-desc-2-tc-5",
        "input": "1 abc",
        "expectedOutput": "REJECTED: LENGTH EXCEEDED",
        "isHidden": true
      },
      {
        "id": "py-desc-2-tc-6",
        "input": "7 computer",
        "expectedOutput": "REJECTED: LENGTH EXCEEDED",
        "isHidden": true
      },
      {
        "id": "py-desc-2-tc-7",
        "input": "8 computer",
        "expectedOutput": "ACCEPTED",
        "isHidden": true
      },
      {
        "id": "py-desc-2-tc-8",
        "input": "4 code",
        "expectedOutput": "ACCEPTED",
        "isHidden": true
      },
      {
        "id": "py-desc-2-tc-9",
        "input": "5 programming",
        "expectedOutput": "REJECTED: LENGTH EXCEEDED",
        "isHidden": true
      },
      {
        "id": "py-desc-2-tc-10",
        "input": "20 short",
        "expectedOutput": "ACCEPTED",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-mp-1",
    "languageId": "python",
    "language": "python",
    "level": "advanced",
    "topicId": "python-multiprocessing",
    "title": "Chunked Parallel Sum Simulation",
    "slug": "chunked-parallel-sum-simulation",
    "difficulty": "medium",
    "problemStatement": "Simulate parallel array reduction: Split an array of N integers into 2 chunks, compute the sum of each chunk independently, then combine them. Print \"Chunk1: <c1> Chunk2: <c2> Total: <total>\".",
    "description": "Simulate parallel array reduction: Split an array of N integers into 2 chunks, compute the sum of each chunk independently, then combine them. Print \"Chunk1: <c1> Chunk2: <c2> Total: <total>\".",
    "inputFormat": "First line N, second line N space-separated integers.",
    "outputFormat": "Print \"Chunk1: <c1> Chunk2: <c2> Total: <total>\".",
    "constraints": [
      "2 <= N <= 10^5"
    ],
    "examples": [
      {
        "input": "4\n1 2 3 4",
        "output": "Chunk1: 3 Chunk2: 7 Total: 10",
        "explanation": "Chunk1: 1+2=3, Chunk2: 3+4=7, Total: 10."
      },
      {
        "input": "5\n10 20 30 40 50",
        "output": "Chunk1: 60 Chunk2: 90 Total: 150",
        "explanation": "First 3 (10, 20, 30) = 60, rest (40, 50) = 90."
      },
      {
        "input": "2\n5 5",
        "output": "Chunk1: 5 Chunk2: 5 Total: 10",
        "explanation": "Halves."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-mp-1-tc-1",
        "input": "4\n1 2 3 4",
        "expectedOutput": "Chunk1: 3 Chunk2: 7 Total: 10",
        "isHidden": false
      },
      {
        "id": "py-mp-1-tc-2",
        "input": "5\n10 20 30 40 50",
        "expectedOutput": "Chunk1: 60 Chunk2: 90 Total: 150",
        "isHidden": false
      },
      {
        "id": "py-mp-1-tc-3",
        "input": "2\n5 5",
        "expectedOutput": "Chunk1: 5 Chunk2: 5 Total: 10",
        "isHidden": false
      },
      {
        "id": "py-mp-1-tc-4",
        "input": "6\n1 1 1 2 2 2",
        "expectedOutput": "Chunk1: 3 Chunk2: 6 Total: 9",
        "isHidden": true
      },
      {
        "id": "py-mp-1-tc-5",
        "input": "4\n-5 5 -10 10",
        "expectedOutput": "Chunk1: 0 Chunk2: 0 Total: 0",
        "isHidden": true
      },
      {
        "id": "py-mp-1-tc-6",
        "input": "3\n10 20 30",
        "expectedOutput": "Chunk1: 30 Chunk2: 30 Total: 60",
        "isHidden": true
      },
      {
        "id": "py-mp-1-tc-7",
        "input": "4\n100 200 300 400",
        "expectedOutput": "Chunk1: 300 Chunk2: 700 Total: 1000",
        "isHidden": true
      },
      {
        "id": "py-mp-1-tc-8",
        "input": "2\n-1 -1",
        "expectedOutput": "Chunk1: -1 Chunk2: -1 Total: -2",
        "isHidden": true
      },
      {
        "id": "py-mp-1-tc-9",
        "input": "5\n2 4 6 8 10",
        "expectedOutput": "Chunk1: 12 Chunk2: 18 Total: 30",
        "isHidden": true
      },
      {
        "id": "py-mp-1-tc-10",
        "input": "4\n7 8 9 10",
        "expectedOutput": "Chunk1: 15 Chunk2: 19 Total: 34",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-mp-2",
    "languageId": "python",
    "language": "python",
    "level": "advanced",
    "topicId": "python-multiprocessing",
    "title": "Worker Pool Task Mapping Simulation",
    "slug": "worker-pool-task-mapping-simulation",
    "difficulty": "medium",
    "problemStatement": "Simulate multiprocessing.Pool.map(square, data): Given N integers, compute their squares in task order. Print the squared results space-separated.",
    "description": "Simulate multiprocessing.Pool.map(square, data): Given N integers, compute their squares in task order. Print the squared results space-separated.",
    "inputFormat": "First line N, second line N space-separated integers.",
    "outputFormat": "Print space-separated squared integers.",
    "constraints": [
      "1 <= N <= 10^4"
    ],
    "examples": [
      {
        "input": "3\n2 3 4",
        "output": "4 9 16",
        "explanation": "Squares computed."
      },
      {
        "input": "2\n10 20",
        "output": "100 400",
        "explanation": "10^2, 20^2."
      },
      {
        "input": "1\n5",
        "output": "25",
        "explanation": "5^2."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-mp-2-tc-1",
        "input": "3\n2 3 4",
        "expectedOutput": "4 9 16",
        "isHidden": false
      },
      {
        "id": "py-mp-2-tc-2",
        "input": "2\n10 20",
        "expectedOutput": "100 400",
        "isHidden": false
      },
      {
        "id": "py-mp-2-tc-3",
        "input": "1\n5",
        "expectedOutput": "25",
        "isHidden": false
      },
      {
        "id": "py-mp-2-tc-4",
        "input": "4\n1 5 7 9",
        "expectedOutput": "1 25 49 81",
        "isHidden": true
      },
      {
        "id": "py-mp-2-tc-5",
        "input": "3\n-2 -3 -4",
        "expectedOutput": "4 9 16",
        "isHidden": true
      },
      {
        "id": "py-mp-2-tc-6",
        "input": "5\n0 1 2 3 4",
        "expectedOutput": "0 1 4 9 16",
        "isHidden": true
      },
      {
        "id": "py-mp-2-tc-7",
        "input": "4\n6 8 10 12",
        "expectedOutput": "36 64 100 144",
        "isHidden": true
      },
      {
        "id": "py-mp-2-tc-8",
        "input": "2\n11 12",
        "expectedOutput": "121 144",
        "isHidden": true
      },
      {
        "id": "py-mp-2-tc-9",
        "input": "3\n15 20 25",
        "expectedOutput": "225 400 625",
        "isHidden": true
      },
      {
        "id": "py-mp-2-tc-10",
        "input": "4\n3 6 9 12",
        "expectedOutput": "9 36 81 144",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-mp-3",
    "languageId": "python",
    "language": "python",
    "level": "advanced",
    "topicId": "python-multiprocessing",
    "title": "Producer-Consumer Queue Simulation",
    "slug": "producer-consumer-queue-simulation",
    "difficulty": "hard",
    "problemStatement": "Simulate a multiprocessing.Queue with capacity C. Commands: \"PRODUCE <item>\" (adds item to queue, fails with \"QUEUE FULL\" if size == C), \"CONSUME\" (removes and prints front item, fails with \"QUEUE EMPTY\" if size == 0). Execute N commands.",
    "description": "Simulate a multiprocessing.Queue with capacity C. Commands: \"PRODUCE <item>\" (adds item to queue, fails with \"QUEUE FULL\" if size == C), \"CONSUME\" (removes and prints front item, fails with \"QUEUE EMPTY\" if size == 0). Execute N commands.",
    "inputFormat": "First line capacity C and command count N, next N lines commands.",
    "outputFormat": "Print output of each CONSUME or error message on separate lines.",
    "constraints": [
      "1 <= C <= 100",
      "1 <= N <= 500"
    ],
    "examples": [
      {
        "input": "2 4\nPRODUCE A\nPRODUCE B\nPRODUCE C\nCONSUME",
        "output": "QUEUE FULL\nA",
        "explanation": "Queue full on C, first consume gets A."
      },
      {
        "input": "1 2\nCONSUME\nPRODUCE X",
        "output": "QUEUE EMPTY",
        "explanation": "Empty consume."
      },
      {
        "input": "2 3\nPRODUCE 1\nCONSUME\nCONSUME",
        "output": "1\nQUEUE EMPTY",
        "explanation": "Consume 1, then empty."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-mp-3-tc-1",
        "input": "2 4\nPRODUCE A\nPRODUCE B\nPRODUCE C\nCONSUME",
        "expectedOutput": "QUEUE FULL\nA",
        "isHidden": false
      },
      {
        "id": "py-mp-3-tc-2",
        "input": "1 2\nCONSUME\nPRODUCE X",
        "expectedOutput": "QUEUE EMPTY",
        "isHidden": false
      },
      {
        "id": "py-mp-3-tc-3",
        "input": "2 3\nPRODUCE 1\nCONSUME\nCONSUME",
        "expectedOutput": "1\nQUEUE EMPTY",
        "isHidden": false
      },
      {
        "id": "py-mp-3-tc-4",
        "input": "3 4\nPRODUCE 10\nPRODUCE 20\nCONSUME\nCONSUME",
        "expectedOutput": "10\n20",
        "isHidden": true
      },
      {
        "id": "py-mp-3-tc-5",
        "input": "1 3\nPRODUCE A\nPRODUCE B\nCONSUME",
        "expectedOutput": "QUEUE FULL\nA",
        "isHidden": true
      },
      {
        "id": "py-mp-3-tc-6",
        "input": "2 3\nCONSUME\nPRODUCE K\nCONSUME",
        "expectedOutput": "QUEUE EMPTY\nK",
        "isHidden": true
      },
      {
        "id": "py-mp-3-tc-7",
        "input": "2 4\nPRODUCE X\nPRODUCE Y\nCONSUME\nCONSUME",
        "expectedOutput": "X\nY",
        "isHidden": true
      },
      {
        "id": "py-mp-3-tc-8",
        "input": "1 2\nPRODUCE M\nCONSUME",
        "expectedOutput": "M",
        "isHidden": true
      },
      {
        "id": "py-mp-3-tc-9",
        "input": "3 3\nCONSUME\nCONSUME\nCONSUME",
        "expectedOutput": "QUEUE EMPTY\nQUEUE EMPTY\nQUEUE EMPTY",
        "isHidden": true
      },
      {
        "id": "py-mp-3-tc-10",
        "input": "2 5\nPRODUCE 1\nPRODUCE 2\nPRODUCE 3\nCONSUME\nCONSUME",
        "expectedOutput": "QUEUE FULL\n1\n2",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-async-1",
    "languageId": "python",
    "language": "python",
    "level": "advanced",
    "topicId": "python-asyncio-event-loop",
    "title": "Async Simulated Data Fetch",
    "slug": "async-simulated-data-fetch",
    "difficulty": "medium",
    "problemStatement": "Simulate async coroutine fetch_data(id, delay) returning \"Fetched <id> in <delay>s\". Given N tasks with id and delay, sort completed results by delay (fastest first). Print results separated by space.",
    "description": "Simulate async coroutine fetch_data(id, delay) returning \"Fetched <id> in <delay>s\". Given N tasks with id and delay, sort completed results by delay (fastest first). Print results separated by space.",
    "inputFormat": "First line N, next N lines each contain id (string) and delay (int).",
    "outputFormat": "Print space-separated task IDs in completion order.",
    "constraints": [
      "1 <= N <= 100"
    ],
    "examples": [
      {
        "input": "3\nA 3\nB 1\nC 2",
        "output": "B C A",
        "explanation": "B (1s) finishes first, then C (2s), then A (3s)."
      },
      {
        "input": "2\nX 5\nY 2",
        "output": "Y X",
        "explanation": "Y finishes first."
      },
      {
        "input": "1\nZ 1",
        "output": "Z",
        "explanation": "Single task."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-async-1-tc-1",
        "input": "3\nA 3\nB 1\nC 2",
        "expectedOutput": "B C A",
        "isHidden": false
      },
      {
        "id": "py-async-1-tc-2",
        "input": "2\nX 5\nY 2",
        "expectedOutput": "Y X",
        "isHidden": false
      },
      {
        "id": "py-async-1-tc-3",
        "input": "1\nZ 1",
        "expectedOutput": "Z",
        "isHidden": false
      },
      {
        "id": "py-async-1-tc-4",
        "input": "4\nT1 4\nT2 1\nT3 3\nT4 2",
        "expectedOutput": "T2 T4 T3 T1",
        "isHidden": true
      },
      {
        "id": "py-async-1-tc-5",
        "input": "3\nP 10\nQ 5\nR 2",
        "expectedOutput": "R Q P",
        "isHidden": true
      },
      {
        "id": "py-async-1-tc-6",
        "input": "2\nM 1\nN 2",
        "expectedOutput": "M N",
        "isHidden": true
      },
      {
        "id": "py-async-1-tc-7",
        "input": "4\nA 100\nB 20\nC 50\nD 10",
        "expectedOutput": "D B C A",
        "isHidden": true
      },
      {
        "id": "py-async-1-tc-8",
        "input": "3\nX 3\nY 3\nZ 1",
        "expectedOutput": "Z X Y",
        "isHidden": true
      },
      {
        "id": "py-async-1-tc-9",
        "input": "2\nK1 5\nK2 5",
        "expectedOutput": "K1 K2",
        "isHidden": true
      },
      {
        "id": "py-async-1-tc-10",
        "input": "5\nE 5\nD 4\nC 3\nB 2\nA 1",
        "expectedOutput": "A B C D E",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-async-2",
    "languageId": "python",
    "language": "python",
    "level": "advanced",
    "topicId": "python-asyncio-event-loop",
    "title": "Async Task Gather and Aggregation",
    "slug": "async-task-gather-and-aggregation",
    "difficulty": "medium",
    "problemStatement": "Simulate asyncio.gather(*tasks): Run N worker tasks that produce integer metrics. Calculate the sum, average (2 decimals), and max of all metrics. Print \"Sum: <sum> Avg: <avg> Max: <max>\".",
    "description": "Simulate asyncio.gather(*tasks): Run N worker tasks that produce integer metrics. Calculate the sum, average (2 decimals), and max of all metrics. Print \"Sum: <sum> Avg: <avg> Max: <max>\".",
    "inputFormat": "First line N, second line N space-separated integers.",
    "outputFormat": "Print \"Sum: <sum> Avg: <avg> Max: <max>\".",
    "constraints": [
      "1 <= N <= 1000"
    ],
    "examples": [
      {
        "input": "4\n10 20 30 40",
        "output": "Sum: 100 Avg: 25.00 Max: 40",
        "explanation": "Aggregated metrics."
      },
      {
        "input": "2\n5 15",
        "output": "Sum: 20 Avg: 10.00 Max: 15",
        "explanation": "Sum 20, max 15."
      },
      {
        "input": "1\n50",
        "output": "Sum: 50 Avg: 50.00 Max: 50",
        "explanation": "Single task."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-async-2-tc-1",
        "input": "4\n10 20 30 40",
        "expectedOutput": "Sum: 100 Avg: 25.00 Max: 40",
        "isHidden": false
      },
      {
        "id": "py-async-2-tc-2",
        "input": "2\n5 15",
        "expectedOutput": "Sum: 20 Avg: 10.00 Max: 15",
        "isHidden": false
      },
      {
        "id": "py-async-2-tc-3",
        "input": "1\n50",
        "expectedOutput": "Sum: 50 Avg: 50.00 Max: 50",
        "isHidden": false
      },
      {
        "id": "py-async-2-tc-4",
        "input": "3\n100 200 300",
        "expectedOutput": "Sum: 600 Avg: 200.00 Max: 300",
        "isHidden": true
      },
      {
        "id": "py-async-2-tc-5",
        "input": "5\n1 2 3 4 5",
        "expectedOutput": "Sum: 15 Avg: 3.00 Max: 5",
        "isHidden": true
      },
      {
        "id": "py-async-2-tc-6",
        "input": "4\n25 25 25 25",
        "expectedOutput": "Sum: 100 Avg: 25.00 Max: 25",
        "isHidden": true
      },
      {
        "id": "py-async-2-tc-7",
        "input": "2\n0 100",
        "expectedOutput": "Sum: 100 Avg: 50.00 Max: 100",
        "isHidden": true
      },
      {
        "id": "py-async-2-tc-8",
        "input": "3\n7 14 21",
        "expectedOutput": "Sum: 42 Avg: 14.00 Max: 21",
        "isHidden": true
      },
      {
        "id": "py-async-2-tc-9",
        "input": "5\n10 50 20 40 30",
        "expectedOutput": "Sum: 150 Avg: 30.00 Max: 50",
        "isHidden": true
      },
      {
        "id": "py-async-2-tc-10",
        "input": "4\n-10 10 -20 20",
        "expectedOutput": "Sum: 0 Avg: 0.00 Max: 20",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-async-3",
    "languageId": "python",
    "language": "python",
    "level": "advanced",
    "topicId": "python-asyncio-event-loop",
    "title": "Async Pipeline with Timeout Handling",
    "slug": "async-pipeline-with-timeout-handling",
    "difficulty": "hard",
    "problemStatement": "Simulate asyncio.wait_for(coro, timeout=T): For N tasks each with name and execution time in ms, if time > T, result is \"TIMEOUT\", otherwise \"COMPLETED\". Print \"<name>:<status>\" separated by spaces.",
    "description": "Simulate asyncio.wait_for(coro, timeout=T): For N tasks each with name and execution time in ms, if time > T, result is \"TIMEOUT\", otherwise \"COMPLETED\". Print \"<name>:<status>\" separated by spaces.",
    "inputFormat": "First line T (timeout in ms) and N, next N lines each contain name and time.",
    "outputFormat": "Print space-separated \"<name>:<status>\" pairs.",
    "constraints": [
      "1 <= T <= 10000",
      "1 <= N <= 100"
    ],
    "examples": [
      {
        "input": "100 3\nTaskA 50\nTaskB 150\nTaskC 80",
        "output": "TaskA:COMPLETED TaskB:TIMEOUT TaskC:COMPLETED",
        "explanation": "TaskB timed out."
      },
      {
        "input": "50 2\nT1 20\nT2 30",
        "output": "T1:COMPLETED T2:COMPLETED",
        "explanation": "Both under 50ms."
      },
      {
        "input": "20 1\nT1 50",
        "output": "T1:TIMEOUT",
        "explanation": "Timed out."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-async-3-tc-1",
        "input": "100 3\nTaskA 50\nTaskB 150\nTaskC 80",
        "expectedOutput": "TaskA:COMPLETED TaskB:TIMEOUT TaskC:COMPLETED",
        "isHidden": false
      },
      {
        "id": "py-async-3-tc-2",
        "input": "50 2\nT1 20\nT2 30",
        "expectedOutput": "T1:COMPLETED T2:COMPLETED",
        "isHidden": false
      },
      {
        "id": "py-async-3-tc-3",
        "input": "20 1\nT1 50",
        "expectedOutput": "T1:TIMEOUT",
        "isHidden": false
      },
      {
        "id": "py-async-3-tc-4",
        "input": "200 4\nA 100\nB 250\nC 150\nD 201",
        "expectedOutput": "A:COMPLETED B:TIMEOUT C:COMPLETED D:TIMEOUT",
        "isHidden": true
      },
      {
        "id": "py-async-3-tc-5",
        "input": "300 2\nX 300\nY 301",
        "expectedOutput": "X:COMPLETED Y:TIMEOUT",
        "isHidden": true
      },
      {
        "id": "py-async-3-tc-6",
        "input": "10 2\nP 5\nQ 15",
        "expectedOutput": "P:COMPLETED Q:TIMEOUT",
        "isHidden": true
      },
      {
        "id": "py-async-3-tc-7",
        "input": "500 3\nFast 50\nMed 200\nSlow 600",
        "expectedOutput": "Fast:COMPLETED Med:COMPLETED Slow:TIMEOUT",
        "isHidden": true
      },
      {
        "id": "py-async-3-tc-8",
        "input": "1000 1\nJob 500",
        "expectedOutput": "Job:COMPLETED",
        "isHidden": true
      },
      {
        "id": "py-async-3-tc-9",
        "input": "50 3\nT1 40\nT2 60\nT3 50",
        "expectedOutput": "T1:COMPLETED T2:TIMEOUT T3:COMPLETED",
        "isHidden": true
      },
      {
        "id": "py-async-3-tc-10",
        "input": "100 2\nAlpha 99\nBeta 101",
        "expectedOutput": "Alpha:COMPLETED Beta:TIMEOUT",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-sock-1",
    "languageId": "python",
    "language": "python",
    "level": "advanced",
    "topicId": "python-socket-programming",
    "title": "Length-Prefixed Network Framing Protocol",
    "slug": "length-prefixed-network-framing-protocol",
    "difficulty": "medium",
    "problemStatement": "In network socket protocols, messages are framed with a length prefix. Given a stream with length prefix N followed by N characters, extract and print the payload. If available chars < N, print \"CORRUPT FRAME\".",
    "description": "In network socket protocols, messages are framed with a length prefix. Given a stream with length prefix N followed by N characters, extract and print the payload. If available chars < N, print \"CORRUPT FRAME\".",
    "inputFormat": "First token N (integer), followed by string payload.",
    "outputFormat": "Print extracted payload or \"CORRUPT FRAME\".",
    "constraints": [
      "1 <= N <= 10^4"
    ],
    "examples": [
      {
        "input": "5 HELLO",
        "output": "HELLO",
        "explanation": "Exact length match."
      },
      {
        "input": "10 SHORT",
        "output": "CORRUPT FRAME",
        "explanation": "Only 5 chars provided for 10 len."
      },
      {
        "input": "4 DATAREST",
        "output": "DATA",
        "explanation": "First 4 chars extracted."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-sock-1-tc-1",
        "input": "5 HELLO",
        "expectedOutput": "HELLO",
        "isHidden": false
      },
      {
        "id": "py-sock-1-tc-2",
        "input": "10 SHORT",
        "expectedOutput": "CORRUPT FRAME",
        "isHidden": false
      },
      {
        "id": "py-sock-1-tc-3",
        "input": "4 DATAREST",
        "expectedOutput": "DATA",
        "isHidden": false
      },
      {
        "id": "py-sock-1-tc-4",
        "input": "1 X",
        "expectedOutput": "X",
        "isHidden": true
      },
      {
        "id": "py-sock-1-tc-5",
        "input": "6 PYTHONCODE",
        "expectedOutput": "PYTHON",
        "isHidden": true
      },
      {
        "id": "py-sock-1-tc-6",
        "input": "3 AB",
        "expectedOutput": "CORRUPT FRAME",
        "isHidden": true
      },
      {
        "id": "py-sock-1-tc-7",
        "input": "8 PROTOCOL",
        "expectedOutput": "PROTOCOL",
        "isHidden": true
      },
      {
        "id": "py-sock-1-tc-8",
        "input": "0 ",
        "expectedOutput": "",
        "isHidden": true
      },
      {
        "id": "py-sock-1-tc-9",
        "input": "4 12345",
        "expectedOutput": "1234",
        "isHidden": true
      },
      {
        "id": "py-sock-1-tc-10",
        "input": "7 NETWORK",
        "expectedOutput": "NETWORK",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-sock-2",
    "languageId": "python",
    "language": "python",
    "level": "advanced",
    "topicId": "python-socket-programming",
    "title": "HTTP Request Line and Header Parser",
    "slug": "http-request-line-and-header-parser",
    "difficulty": "medium",
    "problemStatement": "Parse an HTTP request: First line \"METHOD PATH HTTP/1.1\", followed by headers \"Key: Value\". Print \"Method: <METHOD>, Path: <PATH>, Host: <HOST>\".",
    "description": "Parse an HTTP request: First line \"METHOD PATH HTTP/1.1\", followed by headers \"Key: Value\". Print \"Method: <METHOD>, Path: <PATH>, Host: <HOST>\".",
    "inputFormat": "Multiline HTTP request string.",
    "outputFormat": "Print \"Method: <METHOD>, Path: <PATH>, Host: <HOST>\".",
    "constraints": [
      "Valid HTTP request format."
    ],
    "examples": [
      {
        "input": "GET /api/users HTTP/1.1\nHost: example.com\nUser-Agent: Client",
        "output": "Method: GET, Path: /api/users, Host: example.com",
        "explanation": "Parsed method, path, host."
      },
      {
        "input": "POST /submit HTTP/1.1\nHost: api.test.org\nContent-Type: json",
        "output": "Method: POST, Path: /submit, Host: api.test.org",
        "explanation": "Parsed POST request."
      },
      {
        "input": "GET /index.html HTTP/1.1\nHost: localhost:8080",
        "output": "Method: GET, Path: /index.html, Host: localhost:8080",
        "explanation": "Parsed local request."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-sock-2-tc-1",
        "input": "GET /api/users HTTP/1.1\nHost: example.com\nUser-Agent: Client",
        "expectedOutput": "Method: GET, Path: /api/users, Host: example.com",
        "isHidden": false
      },
      {
        "id": "py-sock-2-tc-2",
        "input": "POST /submit HTTP/1.1\nHost: api.test.org\nContent-Type: json",
        "expectedOutput": "Method: POST, Path: /submit, Host: api.test.org",
        "isHidden": false
      },
      {
        "id": "py-sock-2-tc-3",
        "input": "GET /index.html HTTP/1.1\nHost: localhost:8080",
        "expectedOutput": "Method: GET, Path: /index.html, Host: localhost:8080",
        "isHidden": false
      },
      {
        "id": "py-sock-2-tc-4",
        "input": "DELETE /item/5 HTTP/1.1\nHost: store.com",
        "expectedOutput": "Method: DELETE, Path: /item/5, Host: store.com",
        "isHidden": true
      },
      {
        "id": "py-sock-2-tc-5",
        "input": "PUT /data HTTP/1.1\nHost: cloud.net",
        "expectedOutput": "Method: PUT, Path: /data, Host: cloud.net",
        "isHidden": true
      },
      {
        "id": "py-sock-2-tc-6",
        "input": "GET /health HTTP/1.1\nHost: 127.0.0.1",
        "expectedOutput": "Method: GET, Path: /health, Host: 127.0.0.1",
        "isHidden": true
      },
      {
        "id": "py-sock-2-tc-7",
        "input": "HEAD /asset.png HTTP/1.1\nHost: cdn.site.com",
        "expectedOutput": "Method: HEAD, Path: /asset.png, Host: cdn.site.com",
        "isHidden": true
      },
      {
        "id": "py-sock-2-tc-8",
        "input": "POST /auth/login HTTP/1.1\nHost: auth.domain.io",
        "expectedOutput": "Method: POST, Path: /auth/login, Host: auth.domain.io",
        "isHidden": true
      },
      {
        "id": "py-sock-2-tc-9",
        "input": "GET / HTTP/1.1\nHost: google.com",
        "expectedOutput": "Method: GET, Path: /, Host: google.com",
        "isHidden": true
      },
      {
        "id": "py-sock-2-tc-10",
        "input": "PATCH /profile HTTP/1.1\nHost: app.io",
        "expectedOutput": "Method: PATCH, Path: /profile, Host: app.io",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-sock-3",
    "languageId": "python",
    "language": "python",
    "level": "advanced",
    "topicId": "python-socket-programming",
    "title": "Redis RESP Protocol Parser",
    "slug": "redis-resp-protocol-parser",
    "difficulty": "hard",
    "problemStatement": "Parse a Redis Serialization Protocol (RESP) Simple String (\"+OK\\r\\n\") or Integer (\":1000\\r\\n\"). If \"+<str>\", print \"STRING: <str>\". If \":<int>\", print \"INT: <int>\". If \"-<err>\", print \"ERROR: <err>\".",
    "description": "Parse a Redis Serialization Protocol (RESP) Simple String (\"+OK\\r\\n\") or Integer (\":1000\\r\\n\"). If \"+<str>\", print \"STRING: <str>\". If \":<int>\", print \"INT: <int>\". If \"-<err>\", print \"ERROR: <err>\".",
    "inputFormat": "A single RESP formatted line.",
    "outputFormat": "Print \"STRING: <str>\", \"INT: <int>\", or \"ERROR: <err>\".",
    "constraints": [
      "Valid RESP format."
    ],
    "examples": [
      {
        "input": "+OK",
        "output": "STRING: OK",
        "explanation": "Simple string OK."
      },
      {
        "input": ":1000",
        "output": "INT: 1000",
        "explanation": "Integer 1000."
      },
      {
        "input": "-Error unknown command",
        "output": "ERROR: Error unknown command",
        "explanation": "Error message."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-sock-3-tc-1",
        "input": "+OK",
        "expectedOutput": "STRING: OK",
        "isHidden": false
      },
      {
        "id": "py-sock-3-tc-2",
        "input": ":1000",
        "expectedOutput": "INT: 1000",
        "isHidden": false
      },
      {
        "id": "py-sock-3-tc-3",
        "input": "-Error unknown command",
        "expectedOutput": "ERROR: Error unknown command",
        "isHidden": false
      },
      {
        "id": "py-sock-3-tc-4",
        "input": "+PONG",
        "expectedOutput": "STRING: PONG",
        "isHidden": true
      },
      {
        "id": "py-sock-3-tc-5",
        "input": ":42",
        "expectedOutput": "INT: 42",
        "isHidden": true
      },
      {
        "id": "py-sock-3-tc-6",
        "input": ":0",
        "expectedOutput": "INT: 0",
        "isHidden": true
      },
      {
        "id": "py-sock-3-tc-7",
        "input": ":-5",
        "expectedOutput": "INT: -5",
        "isHidden": true
      },
      {
        "id": "py-sock-3-tc-8",
        "input": "+QUEUED",
        "expectedOutput": "STRING: QUEUED",
        "isHidden": true
      },
      {
        "id": "py-sock-3-tc-9",
        "input": "-WRONGTYPE Operation against key",
        "expectedOutput": "ERROR: WRONGTYPE Operation against key",
        "isHidden": true
      },
      {
        "id": "py-sock-3-tc-10",
        "input": "+HELLO",
        "expectedOutput": "STRING: HELLO",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-sql-1",
    "languageId": "python",
    "language": "python",
    "level": "advanced",
    "topicId": "python-database-sqlite3",
    "title": "In-Memory SQLite User Query",
    "slug": "in-memory-sqlite-user-query",
    "difficulty": "easy",
    "problemStatement": "Using sqlite3 in-memory database: Create table users(id INTEGER, name TEXT, age INTEGER). Insert N user records. Query users with age >= 18 sorted by id ascending. Print space-separated names. If none, print \"NONE\".",
    "description": "Using sqlite3 in-memory database: Create table users(id INTEGER, name TEXT, age INTEGER). Insert N user records. Query users with age >= 18 sorted by id ascending. Print space-separated names. If none, print \"NONE\".",
    "inputFormat": "First line N, next N lines each contain id name age.",
    "outputFormat": "Print space-separated names or \"NONE\".",
    "constraints": [
      "1 <= N <= 1000"
    ],
    "examples": [
      {
        "input": "3\n1 Alice 20\n2 Bob 15\n3 Charlie 25",
        "output": "Alice Charlie",
        "explanation": "Alice (20) and Charlie (25) >= 18."
      },
      {
        "input": "2\n1 Dan 12\n2 Eve 16",
        "output": "NONE",
        "explanation": "None >= 18."
      },
      {
        "input": "1\n1 Adult 18",
        "output": "Adult",
        "explanation": "Exact 18."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-sql-1-tc-1",
        "input": "3\n1 Alice 20\n2 Bob 15\n3 Charlie 25",
        "expectedOutput": "Alice Charlie",
        "isHidden": false
      },
      {
        "id": "py-sql-1-tc-2",
        "input": "2\n1 Dan 12\n2 Eve 16",
        "expectedOutput": "NONE",
        "isHidden": false
      },
      {
        "id": "py-sql-1-tc-3",
        "input": "1\n1 Adult 18",
        "expectedOutput": "Adult",
        "isHidden": false
      },
      {
        "id": "py-sql-1-tc-4",
        "input": "4\n1 A 30\n2 B 10\n3 C 40\n4 D 17",
        "expectedOutput": "A C",
        "isHidden": true
      },
      {
        "id": "py-sql-1-tc-5",
        "input": "3\n1 Frank 22\n2 Grace 19\n3 Henry 18",
        "expectedOutput": "Frank Grace Henry",
        "isHidden": true
      },
      {
        "id": "py-sql-1-tc-6",
        "input": "2\n1 Ivy 5\n2 Jack 8",
        "expectedOutput": "NONE",
        "isHidden": true
      },
      {
        "id": "py-sql-1-tc-7",
        "input": "3\n1 X 50\n2 Y 60\n3 Z 70",
        "expectedOutput": "X Y Z",
        "isHidden": true
      },
      {
        "id": "py-sql-1-tc-8",
        "input": "2\n1 Old 100\n2 Young 1",
        "expectedOutput": "Old",
        "isHidden": true
      },
      {
        "id": "py-sql-1-tc-9",
        "input": "4\n1 P 18\n2 Q 19\n3 R 16\n4 S 21",
        "expectedOutput": "P Q S",
        "isHidden": true
      },
      {
        "id": "py-sql-1-tc-10",
        "input": "2\n1 K 17\n2 L 18",
        "expectedOutput": "L",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-sql-2",
    "languageId": "python",
    "language": "python",
    "level": "advanced",
    "topicId": "python-database-sqlite3",
    "title": "Department Salary Average SQL Aggregation",
    "slug": "department-salary-average-sql-aggregation",
    "difficulty": "medium",
    "problemStatement": "Given employee records (id, name, department, salary), group by department and compute average salary rounded to 2 decimal places. Print departments sorted alphabetically in format \"<dept>:<avg>\" separated by space.",
    "description": "Given employee records (id, name, department, salary), group by department and compute average salary rounded to 2 decimal places. Print departments sorted alphabetically in format \"<dept>:<avg>\" separated by space.",
    "inputFormat": "First line N, next N lines each contain name, department, salary (int).",
    "outputFormat": "Print space-separated \"<dept>:<avg>\" pairs.",
    "constraints": [
      "1 <= N <= 1000"
    ],
    "examples": [
      {
        "input": "3\nAlice IT 100\nBob IT 200\nCharlie HR 150",
        "output": "HR:150.00 IT:150.00",
        "explanation": "HR avg 150, IT avg (100+200)/2 = 150."
      },
      {
        "input": "2\nDan Sales 50\nEve Sales 70",
        "output": "Sales:60.00",
        "explanation": "Sales avg 60."
      },
      {
        "input": "1\nFrank Ops 80",
        "output": "Ops:80.00",
        "explanation": "Single dept."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-sql-2-tc-1",
        "input": "3\nAlice IT 100\nBob IT 200\nCharlie HR 150",
        "expectedOutput": "HR:150.00 IT:150.00",
        "isHidden": false
      },
      {
        "id": "py-sql-2-tc-2",
        "input": "2\nDan Sales 50\nEve Sales 70",
        "expectedOutput": "Sales:60.00",
        "isHidden": false
      },
      {
        "id": "py-sql-2-tc-3",
        "input": "1\nFrank Ops 80",
        "expectedOutput": "Ops:80.00",
        "isHidden": false
      },
      {
        "id": "py-sql-2-tc-4",
        "input": "4\nA IT 100\nB HR 80\nC IT 120\nD HR 100",
        "expectedOutput": "HR:90.00 IT:110.00",
        "isHidden": true
      },
      {
        "id": "py-sql-2-tc-5",
        "input": "3\nX Eng 300\nY Eng 400\nZ Mkt 250",
        "expectedOutput": "Eng:350.00 Mkt:250.00",
        "isHidden": true
      },
      {
        "id": "py-sql-2-tc-6",
        "input": "2\nP QA 60\nQ QA 90",
        "expectedOutput": "QA:75.00",
        "isHidden": true
      },
      {
        "id": "py-sql-2-tc-7",
        "input": "3\n1 Admin 50\n2 Admin 50\n3 Admin 50",
        "expectedOutput": "Admin:50.00",
        "isHidden": true
      },
      {
        "id": "py-sql-2-tc-8",
        "input": "2\nM Dev 200\nN Design 150",
        "expectedOutput": "Design:150.00 Dev:200.00",
        "isHidden": true
      },
      {
        "id": "py-sql-2-tc-9",
        "input": "4\nE IT 50\nF IT 50\nG Sales 100\nH Sales 200",
        "expectedOutput": "IT:50.00 Sales:150.00",
        "isHidden": true
      },
      {
        "id": "py-sql-2-tc-10",
        "input": "2\nK Legal 300\nL Legal 350",
        "expectedOutput": "Legal:325.00",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-sql-3",
    "languageId": "python",
    "language": "python",
    "level": "advanced",
    "topicId": "python-database-sqlite3",
    "title": "Top Selling Products Aggregate Query",
    "slug": "top-selling-products-aggregate-query",
    "difficulty": "medium",
    "problemStatement": "Given order transactions (productName, quantity, unitPrice), calculate total revenue (sum of quantity * unitPrice) per product. Find the product with the highest total revenue. Print \"<productName> Total: <revenue>\".",
    "description": "Given order transactions (productName, quantity, unitPrice), calculate total revenue (sum of quantity * unitPrice) per product. Find the product with the highest total revenue. Print \"<productName> Total: <revenue>\".",
    "inputFormat": "First line N, next N lines contain product quantity unitPrice.",
    "outputFormat": "Print \"<productName> Total: <revenue>\".",
    "constraints": [
      "1 <= N <= 1000"
    ],
    "examples": [
      {
        "input": "3\nLaptop 2 1000\nMouse 10 20\nLaptop 1 1000",
        "output": "Laptop Total: 3000",
        "explanation": "Laptop total 3000 vs Mouse 200."
      },
      {
        "input": "2\nApple 5 2\nBanana 10 1",
        "output": "Apple Total: 10",
        "explanation": "Both 10, Apple appears first."
      },
      {
        "input": "1\nBook 3 15",
        "output": "Book Total: 45",
        "explanation": "Single product."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-sql-3-tc-1",
        "input": "3\nLaptop 2 1000\nMouse 10 20\nLaptop 1 1000",
        "expectedOutput": "Laptop Total: 3000",
        "isHidden": false
      },
      {
        "id": "py-sql-3-tc-2",
        "input": "2\nApple 5 2\nBanana 10 1",
        "expectedOutput": "Apple Total: 10",
        "isHidden": false
      },
      {
        "id": "py-sql-3-tc-3",
        "input": "1\nBook 3 15",
        "expectedOutput": "Book Total: 45",
        "isHidden": false
      },
      {
        "id": "py-sql-3-tc-4",
        "input": "4\nA 10 5\nB 2 50\nC 1 200\nA 5 5",
        "expectedOutput": "C Total: 200",
        "isHidden": true
      },
      {
        "id": "py-sql-3-tc-5",
        "input": "3\nPen 100 1\nPencil 50 1\nEraser 20 2",
        "expectedOutput": "Pen Total: 100",
        "isHidden": true
      },
      {
        "id": "py-sql-3-tc-6",
        "input": "2\nPhone 1 800\nCase 10 20",
        "expectedOutput": "Phone Total: 800",
        "isHidden": true
      },
      {
        "id": "py-sql-3-tc-7",
        "input": "3\nX 5 20\nY 10 20\nZ 2 10",
        "expectedOutput": "Y Total: 200",
        "isHidden": true
      },
      {
        "id": "py-sql-3-tc-8",
        "input": "2\nItem1 10 10\nItem2 20 10",
        "expectedOutput": "Item2 Total: 200",
        "isHidden": true
      },
      {
        "id": "py-sql-3-tc-9",
        "input": "3\nShirt 4 25\nPants 2 60\nTie 10 15",
        "expectedOutput": "Tie Total: 150",
        "isHidden": true
      },
      {
        "id": "py-sql-3-tc-10",
        "input": "2\nCar 1 20000\nBike 5 500",
        "expectedOutput": "Car Total: 20000",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-opt-1",
    "languageId": "python",
    "language": "python",
    "level": "advanced",
    "topicId": "python-profiling-and-optimization",
    "title": "Two Sum Optimal O(N) Hash Map Lookup",
    "slug": "two-sum-optimal-o-n-hash-map-lookup",
    "difficulty": "medium",
    "problemStatement": "Given N integers and target sum T, find two distinct indices i and j (0-indexed, i < j) such that arr[i] + arr[j] == T in O(N) time using a hash map. If multiple pairs exist, return the pair with smallest i. If no pair exists, print \"-1 -1\".",
    "description": "Given N integers and target sum T, find two distinct indices i and j (0-indexed, i < j) such that arr[i] + arr[j] == T in O(N) time using a hash map. If multiple pairs exist, return the pair with smallest i. If no pair exists, print \"-1 -1\".",
    "inputFormat": "First line N and T, second line N space-separated integers.",
    "outputFormat": "Print \"i j\" or \"-1 -1\".",
    "constraints": [
      "2 <= N <= 10^5"
    ],
    "examples": [
      {
        "input": "4 9\n2 7 11 15",
        "output": "0 1",
        "explanation": "arr[0] + arr[1] = 2 + 7 = 9."
      },
      {
        "input": "3 6\n3 2 4",
        "output": "1 2",
        "explanation": "arr[1] + arr[2] = 2 + 4 = 6."
      },
      {
        "input": "4 10\n1 2 3 4",
        "output": "-1 -1",
        "explanation": "No two numbers sum to 10."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-opt-1-tc-1",
        "input": "4 9\n2 7 11 15",
        "expectedOutput": "0 1",
        "isHidden": false
      },
      {
        "id": "py-opt-1-tc-2",
        "input": "3 6\n3 2 4",
        "expectedOutput": "1 2",
        "isHidden": false
      },
      {
        "id": "py-opt-1-tc-3",
        "input": "4 10\n1 2 3 4",
        "expectedOutput": "-1 -1",
        "isHidden": false
      },
      {
        "id": "py-opt-1-tc-4",
        "input": "2 6\n3 3",
        "expectedOutput": "0 1",
        "isHidden": true
      },
      {
        "id": "py-opt-1-tc-5",
        "input": "5 0\n-5 2 3 5 1",
        "expectedOutput": "0 3",
        "isHidden": true
      },
      {
        "id": "py-opt-1-tc-6",
        "input": "5 100\n10 20 30 70 80",
        "expectedOutput": "1 4",
        "isHidden": true
      },
      {
        "id": "py-opt-1-tc-7",
        "input": "6 14\n1 3 5 7 9 11",
        "expectedOutput": "1 5",
        "isHidden": true
      },
      {
        "id": "py-opt-1-tc-8",
        "input": "3 -5\n-2 -3 4",
        "expectedOutput": "0 1",
        "isHidden": true
      },
      {
        "id": "py-opt-1-tc-9",
        "input": "4 8\n4 2 6 4",
        "expectedOutput": "0 3",
        "isHidden": true
      },
      {
        "id": "py-opt-1-tc-10",
        "input": "5 25\n5 10 15 20 30",
        "expectedOutput": "0 3",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-opt-2",
    "languageId": "python",
    "language": "python",
    "level": "advanced",
    "topicId": "python-profiling-and-optimization",
    "title": "Maximum Subarray Sum (Kadane's Algorithm)",
    "slug": "maximum-subarray-sum-kadane-s-algorithm",
    "difficulty": "medium",
    "problemStatement": "Given an array of N integers, find the contiguous subarray with the largest sum using Kadane's Algorithm in O(N) time. Print the maximum subarray sum.",
    "description": "Given an array of N integers, find the contiguous subarray with the largest sum using Kadane's Algorithm in O(N) time. Print the maximum subarray sum.",
    "inputFormat": "First line N, second line N space-separated integers.",
    "outputFormat": "Print maximum subarray sum.",
    "constraints": [
      "1 <= N <= 10^5",
      "-10^9 <= arr[i] <= 10^9"
    ],
    "examples": [
      {
        "input": "8\n-2 1 -3 4 -1 2 1 -5 4",
        "output": "6",
        "explanation": "[4, -1, 2, 1] sums to 6."
      },
      {
        "input": "1\n1",
        "output": "1",
        "explanation": "Single element 1."
      },
      {
        "input": "5\n5 4 -1 7 8",
        "output": "23",
        "explanation": "All elements sum to 23."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-opt-2-tc-1",
        "input": "9\n-2 1 -3 4 -1 2 1 -5 4",
        "expectedOutput": "6",
        "isHidden": false
      },
      {
        "id": "py-opt-2-tc-2",
        "input": "1\n1",
        "expectedOutput": "1",
        "isHidden": false
      },
      {
        "id": "py-opt-2-tc-3",
        "input": "5\n5 4 -1 7 8",
        "expectedOutput": "23",
        "isHidden": false
      },
      {
        "id": "py-opt-2-tc-4",
        "input": "4\n-1 -2 -3 -4",
        "expectedOutput": "-1",
        "isHidden": true
      },
      {
        "id": "py-opt-2-tc-5",
        "input": "5\n-5 10 20 -10 30",
        "expectedOutput": "50",
        "isHidden": true
      },
      {
        "id": "py-opt-2-tc-6",
        "input": "3\n2 -1 3",
        "expectedOutput": "4",
        "isHidden": true
      },
      {
        "id": "py-opt-2-tc-7",
        "input": "4\n10 20 30 40",
        "expectedOutput": "100",
        "isHidden": true
      },
      {
        "id": "py-opt-2-tc-8",
        "input": "6\n-2 -3 4 -1 -2 1",
        "expectedOutput": "4",
        "isHidden": true
      },
      {
        "id": "py-opt-2-tc-9",
        "input": "3\n-10 0 -5",
        "expectedOutput": "0",
        "isHidden": true
      },
      {
        "id": "py-opt-2-tc-10",
        "input": "5\n1 -2 3 4 -1",
        "expectedOutput": "7",
        "isHidden": true
      }
    ]
  },
  {
    "id": "py-opt-3",
    "languageId": "python",
    "language": "python",
    "level": "advanced",
    "topicId": "python-profiling-and-optimization",
    "title": "Longest Substring Without Repeating Characters",
    "slug": "longest-substring-without-repeating-characters",
    "difficulty": "hard",
    "problemStatement": "Given a string S, find the length of the longest substring without repeating characters in O(N) time using the sliding window technique.",
    "description": "Given a string S, find the length of the longest substring without repeating characters in O(N) time using the sliding window technique.",
    "inputFormat": "A single string S.",
    "outputFormat": "Print the integer length of the longest unique substring.",
    "constraints": [
      "0 <= len(S) <= 10^5"
    ],
    "examples": [
      {
        "input": "abcabcbb",
        "output": "3",
        "explanation": "The answer is \"abc\", with length 3."
      },
      {
        "input": "bbbbb",
        "output": "1",
        "explanation": "The answer is \"b\", with length 1."
      },
      {
        "input": "pwwkew",
        "output": "3",
        "explanation": "The answer is \"wke\", with length 3."
      }
    ],
    "starterCode": {
      "python": "import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == \"__main__\":\n    main()\n",
      "javascript": "const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n",
      "java": "import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n",
      "c": "#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "cpp": "#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n"
    },
    "testCases": [
      {
        "id": "py-opt-3-tc-1",
        "input": "abcabcbb",
        "expectedOutput": "3",
        "isHidden": false
      },
      {
        "id": "py-opt-3-tc-2",
        "input": "bbbbb",
        "expectedOutput": "1",
        "isHidden": false
      },
      {
        "id": "py-opt-3-tc-3",
        "input": "pwwkew",
        "expectedOutput": "3",
        "isHidden": false
      },
      {
        "id": "py-opt-3-tc-4",
        "input": "",
        "expectedOutput": "0",
        "isHidden": true
      },
      {
        "id": "py-opt-3-tc-5",
        "input": "abcdef",
        "expectedOutput": "6",
        "isHidden": true
      },
      {
        "id": "py-opt-3-tc-6",
        "input": "aab",
        "expectedOutput": "2",
        "isHidden": true
      },
      {
        "id": "py-opt-3-tc-7",
        "input": "dvdf",
        "expectedOutput": "3",
        "isHidden": true
      },
      {
        "id": "py-opt-3-tc-8",
        "input": "abba",
        "expectedOutput": "2",
        "isHidden": true
      },
      {
        "id": "py-opt-3-tc-9",
        "input": "tmmzuxt",
        "expectedOutput": "5",
        "isHidden": true
      },
      {
        "id": "py-opt-3-tc-10",
        "input": "antigravity",
        "expectedOutput": "8",
        "isHidden": true
      }
    ]
  }
];
export default pythonProblems;
