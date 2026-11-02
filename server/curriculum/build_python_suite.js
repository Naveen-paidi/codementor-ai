import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outputPath = path.join(__dirname, 'practice', 'pythonProblems.js');

function createTC(prefix, cases) {
  if (cases.length !== 10) {
    throw new Error(`[createTC] ${prefix} must have exactly 10 test cases, got ${cases.length}`);
  }
  return cases.map(([input, expectedOutput], idx) => ({
    id: `${prefix}-tc-${idx + 1}`,
    input: String(input),
    expectedOutput: String(expectedOutput),
    isHidden: idx >= 3
  }));
}

const problems = [];

function addProblem({ id, topicId, level, title, difficulty, problemStatement, inputFormat, outputFormat, constraints, examples, starterCode, testCases }) {
  problems.push({
    id,
    languageId: 'python',
    language: 'python',
    level,
    topicId,
    title,
    slug: title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
    difficulty,
    problemStatement,
    description: problemStatement,
    inputFormat,
    outputFormat,
    constraints: constraints || [],
    examples: examples || [],
    starterCode: {
      python: starterCode || `import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == "__main__":\n    main()\n`,
      javascript: `const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n`,
      java: `import java.util.Scanner;\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n`,
      c: `#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n`,
      cpp: `#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n`
    },
    testCases
  });
}

// -------------------------------------------------------------
// BEGINNER
// -------------------------------------------------------------

// 1. python-variables (3 problems)
addProblem({
  id: 'py-var-1',
  topicId: 'python-variables',
  level: 'beginner',
  title: 'Calculate Simple Interest',
  difficulty: 'easy',
  problemStatement: 'Given Principal (P), Rate of interest (R), and Time in years (T), calculate Simple Interest using the formula SI = (P * R * T) / 100. Print the result rounded to 2 decimal places.',
  inputFormat: 'Three space-separated numbers: P, R, T.',
  outputFormat: 'Print the Simple Interest rounded to 2 decimal places.',
  constraints: ['1 <= P <= 10^7', '0.1 <= R <= 100', '1 <= T <= 50'],
  examples: [
    { input: '1000 5 2', output: '100.00', explanation: '(1000 * 5 * 2) / 100 = 100.00' },
    { input: '5000 7.5 3', output: '1125.00', explanation: '(5000 * 7.5 * 3) / 100 = 1125.00' },
    { input: '2500 4.2 1.5', output: '157.50', explanation: '(2500 * 4.2 * 1.5) / 100 = 157.50' }
  ],
  testCases: createTC('py-var-1', [
    ['1000 5 2', '100.00'],
    ['5000 7.5 3', '1125.00'],
    ['2500 4.2 1.5', '157.50'],
    ['10000 10 5', '5000.00'],
    ['1200 3.5 4', '168.00'],
    ['8000 6 2.5', '1200.00'],
    ['3000 8.25 2', '495.00'],
    ['15000 5.5 10', '8250.00'],
    ['750 12 3', '270.00'],
    ['9999 1.5 1', '149.98']
  ])
});

addProblem({
  id: 'py-var-2',
  topicId: 'python-variables',
  level: 'beginner',
  title: 'Convert Seconds to Hours, Minutes, and Seconds',
  difficulty: 'easy',
  problemStatement: 'Given a total number of seconds as an integer S, convert it into hours, minutes, and remaining seconds in the format "H:M:S".',
  inputFormat: 'A single non-negative integer S.',
  outputFormat: 'Print in the format H:M:S.',
  constraints: ['0 <= S <= 10^7'],
  examples: [
    { input: '3665', output: '1:1:5', explanation: '3665 seconds = 1 hour, 1 minute, 5 seconds.' },
    { input: '60', output: '0:1:0', explanation: '60 seconds = 0 hours, 1 minute, 0 seconds.' },
    { input: '0', output: '0:0:0', explanation: '0 seconds = 0:0:0.' }
  ],
  testCases: createTC('py-var-2', [
    ['3665', '1:1:5'],
    ['60', '0:1:0'],
    ['0', '0:0:0'],
    ['3600', '1:0:0'],
    ['7322', '2:2:2'],
    ['86400', '24:0:0'],
    ['500', '0:8:20'],
    ['123456', '34:17:36'],
    ['59', '0:0:59'],
    ['999999', '277:46:39']
  ])
});

addProblem({
  id: 'py-var-3',
  topicId: 'python-variables',
  level: 'beginner',
  title: 'Calculate Percentage and Total Marks',
  difficulty: 'medium',
  problemStatement: 'Given marks obtained in 5 subjects out of 100 each, calculate the total marks obtained and percentage. Print "Total: <total> Percentage: <pct>%" with percentage rounded to 2 decimal places.',
  inputFormat: 'Five space-separated numbers.',
  outputFormat: 'Print "Total: <total> Percentage: <pct>%" where total is integer or 2-decimal and pct has 2 decimal places.',
  constraints: ['0 <= mark <= 100'],
  examples: [
    { input: '80 90 85 95 100', output: 'Total: 450 Percentage: 90.00%', explanation: 'Sum 450 / 500 = 90%.' },
    { input: '50 60 70 80 90', output: 'Total: 350 Percentage: 70.00%', explanation: 'Sum 350 / 500 = 70%.' },
    { input: '100 100 100 100 100', output: 'Total: 500 Percentage: 100.00%', explanation: 'Full marks.' }
  ],
  testCases: createTC('py-var-3', [
    ['80 90 85 95 100', 'Total: 450 Percentage: 90.00%'],
    ['50 60 70 80 90', 'Total: 350 Percentage: 70.00%'],
    ['100 100 100 100 100', 'Total: 500 Percentage: 100.00%'],
    ['40 40 40 40 40', 'Total: 200 Percentage: 40.00%'],
    ['0 0 0 0 0', 'Total: 0 Percentage: 0.00%'],
    ['75 82 68 91 84', 'Total: 400 Percentage: 80.00%'],
    ['33 45 56 67 78', 'Total: 279 Percentage: 55.80%'],
    ['88 77 66 55 44', 'Total: 330 Percentage: 66.00%'],
    ['92 88 95 91 89', 'Total: 455 Percentage: 91.00%'],
    ['65 72 58 80 75', 'Total: 350 Percentage: 70.00%']
  ])
});

// 2. python-user-input (3 problems)
addProblem({
  id: 'py-io-1',
  topicId: 'python-user-input',
  level: 'beginner',
  title: 'Personalized Greeting and Age Calculation',
  difficulty: 'easy',
  problemStatement: 'Read a name (string) and birth year (integer). Compute age in 2026. Print "Hello <name>, you are <age> years old in 2026!".',
  inputFormat: 'Two space-separated tokens: name and birthYear.',
  outputFormat: 'Print formatted greeting string.',
  constraints: ['1 <= len(name) <= 50', '1900 <= birthYear <= 2026'],
  examples: [
    { input: 'Alice 2000', output: 'Hello Alice, you are 26 years old in 2026!', explanation: 'Alice born in 2000 is 26 in 2026.' },
    { input: 'Bob 1995', output: 'Hello Bob, you are 31 years old in 2026!', explanation: 'Bob born in 1995 is 31 in 2026.' },
    { input: 'Charlie 2026', output: 'Hello Charlie, you are 0 years old in 2026!', explanation: 'Born in 2026 is 0 years old.' }
  ],
  testCases: createTC('py-io-1', [
    ['Alice 2000', 'Hello Alice, you are 26 years old in 2026!'],
    ['Bob 1995', 'Hello Bob, you are 31 years old in 2026!'],
    ['Charlie 2026', 'Hello Charlie, you are 0 years old in 2026!'],
    ['David 1980', 'Hello David, you are 46 years old in 2026!'],
    ['Emma 2010', 'Hello Emma, you are 16 years old in 2026!'],
    ['Frank 1950', 'Hello Frank, you are 76 years old in 2026!'],
    ['Grace 2005', 'Hello Grace, you are 21 years old in 2026!'],
    ['Henry 1999', 'Hello Henry, you are 27 years old in 2026!'],
    ['Ivy 1972', 'Hello Ivy, you are 54 years old in 2026!'],
    ['Jack 1900', 'Hello Jack, you are 126 years old in 2026!']
  ])
});

addProblem({
  id: 'py-io-2',
  topicId: 'python-user-input',
  level: 'beginner',
  title: 'Basic Two-Number Arithmetic Calculator',
  difficulty: 'easy',
  problemStatement: 'Read two integers A and B, followed by an operator op (+, -, *, /). Output the result. For division (/), output the integer quotient (truncated towards zero, integer division).',
  inputFormat: 'Two integers A, B and a single character operator (+, -, *, /).',
  outputFormat: 'Print the computed integer result.',
  constraints: ['-10^5 <= A, B <= 10^5', 'B != 0 for division'],
  examples: [
    { input: '10 5 +', output: '15', explanation: '10 + 5 = 15' },
    { input: '20 4 /', output: '5', explanation: '20 / 4 = 5' },
    { input: '7 3 *', output: '21', explanation: '7 * 3 = 21' }
  ],
  testCases: createTC('py-io-2', [
    ['10 5 +', '15'],
    ['20 4 /', '5'],
    ['7 3 *', '21'],
    ['15 8 -', '7'],
    ['100 10 /', '10'],
    ['0 50 *', '0'],
    ['-10 5 +', '-5'],
    ['-20 -4 /', '5'],
    ['12 -3 *', '-36'],
    ['50 6 /', '8']
  ])
});

addProblem({
  id: 'py-io-3',
  topicId: 'python-user-input',
  level: 'beginner',
  title: 'Temperature Conversion (Celsius to Fahrenheit and Kelvin)',
  difficulty: 'medium',
  problemStatement: 'Given a temperature in Celsius C, convert it to Fahrenheit (F = C * 9/5 + 32) and Kelvin (K = C + 273.15). Print "F: <F> K: <K>" with both rounded to 2 decimal places.',
  inputFormat: 'A single float or integer C.',
  outputFormat: 'Print "F: <F> K: <K>".',
  constraints: ['-273.15 <= C <= 10000'],
  examples: [
    { input: '0', output: 'F: 32.00 K: 273.15', explanation: '0 C = 32 F and 273.15 K' },
    { input: '100', output: 'F: 212.00 K: 373.15', explanation: '100 C = 212 F and 373.15 K' },
    { input: '-40', output: 'F: -40.00 K: 233.15', explanation: '-40 C = -40 F' }
  ],
  testCases: createTC('py-io-3', [
    ['0', 'F: 32.00 K: 273.15'],
    ['100', 'F: 212.00 K: 373.15'],
    ['-40', 'F: -40.00 K: 233.15'],
    ['25', 'F: 77.00 K: 298.15'],
    ['37', 'F: 98.60 K: 310.15'],
    ['-273.15', 'F: -459.67 K: 0.00'],
    ['50.5', 'F: 122.90 K: 323.65'],
    ['-10', 'F: 14.00 K: 263.15'],
    ['200', 'F: 392.00 K: 473.15'],
    ['15.2', 'F: 59.36 K: 288.35']
  ])
});

// 3. python-arithmetic-operators (3 problems)
addProblem({
  id: 'py-op-1',
  topicId: 'python-arithmetic-operators',
  level: 'beginner',
  title: 'Area and Perimeter of a Rectangle',
  difficulty: 'easy',
  problemStatement: 'Given length L and width W of a rectangle, compute Area (L * W) and Perimeter (2 * (L + W)). Print "Area: <area> Perimeter: <perimeter>".',
  inputFormat: 'Two space-separated positive numbers L and W.',
  outputFormat: 'Print "Area: <area> Perimeter: <perimeter>" (as integers if integer, or float with 2 decimal places).',
  constraints: ['1 <= L, W <= 10^6'],
  examples: [
    { input: '5 3', output: 'Area: 15 Perimeter: 16', explanation: '5 * 3 = 15, 2 * (5 + 3) = 16' },
    { input: '10 10', output: 'Area: 100 Perimeter: 40', explanation: 'Square with side 10.' },
    { input: '1 1', output: 'Area: 1 Perimeter: 4', explanation: '1x1 unit square.' }
  ],
  testCases: createTC('py-op-1', [
    ['5 3', 'Area: 15 Perimeter: 16'],
    ['10 10', 'Area: 100 Perimeter: 40'],
    ['1 1', 'Area: 1 Perimeter: 4'],
    ['20 5', 'Area: 100 Perimeter: 50'],
    ['7 8', 'Area: 56 Perimeter: 30'],
    ['100 50', 'Area: 5000 Perimeter: 300'],
    ['12 15', 'Area: 180 Perimeter: 54'],
    ['25 4', 'Area: 100 Perimeter: 58'],
    ['9 11', 'Area: 99 Perimeter: 40'],
    ['50 50', 'Area: 2500 Perimeter: 200']
  ])
});

addProblem({
  id: 'py-op-2',
  topicId: 'python-arithmetic-operators',
  level: 'beginner',
  title: 'Quotient and Remainder of Division',
  difficulty: 'easy',
  problemStatement: 'Given dividend A and divisor B, print the integer quotient and remainder separated by a space.',
  inputFormat: 'Two positive integers A and B.',
  outputFormat: 'Print "<quotient> <remainder>".',
  constraints: ['1 <= A <= 10^9', '1 <= B <= 10^9'],
  examples: [
    { input: '17 5', output: '3 2', explanation: '17 // 5 = 3, 17 % 5 = 2' },
    { input: '20 4', output: '5 0', explanation: '20 // 4 = 5, remainder 0' },
    { input: '5 10', output: '0 5', explanation: '5 // 10 = 0, remainder 5' }
  ],
  testCases: createTC('py-op-2', [
    ['17 5', '3 2'],
    ['20 4', '5 0'],
    ['5 10', '0 5'],
    ['100 7', '14 2'],
    ['1 1', '1 0'],
    ['99 9', '11 0'],
    ['53 6', '8 5'],
    ['12345 100', '123 45'],
    ['1000 3', '333 1'],
    ['99999 10', '9999 9']
  ])
});

addProblem({
  id: 'py-op-3',
  topicId: 'python-arithmetic-operators',
  level: 'beginner',
  title: 'Compound Interest Calculator',
  difficulty: 'medium',
  problemStatement: 'Given Principal P, Annual interest rate R (%), and Time T years, calculate final Amount A = P * (1 + R/100)^T and Compound Interest CI = A - P. Print "Amount: <A> CI: <CI>" rounded to 2 decimal places.',
  inputFormat: 'Three numbers: P, R, T.',
  outputFormat: 'Print "Amount: <A> CI: <CI>".',
  constraints: ['1 <= P <= 10^7', '0.1 <= R <= 50', '1 <= T <= 30'],
  examples: [
    { input: '1000 10 2', output: 'Amount: 1210.00 CI: 210.00', explanation: '1000 * (1.1)^2 = 1210' },
    { input: '5000 5 1', output: 'Amount: 5250.00 CI: 250.00', explanation: '5000 * 1.05 = 5250' },
    { input: '2000 8 3', output: 'Amount: 2519.42 CI: 519.42', explanation: '2000 * (1.08)^3 = 2519.42' }
  ],
  testCases: createTC('py-op-3', [
    ['1000 10 2', 'Amount: 1210.00 CI: 210.00'],
    ['5000 5 1', 'Amount: 5250.00 CI: 250.00'],
    ['2000 8 3', 'Amount: 2519.42 CI: 519.42'],
    ['10000 6 5', 'Amount: 13382.26 CI: 3382.26'],
    ['1500 12 2', 'Amount: 1881.60 CI: 381.60'],
    ['3000 4 4', 'Amount: 3509.58 CI: 509.58'],
    ['8000 7.5 3', 'Amount: 9938.38 CI: 1938.38'],
    ['500 20 2', 'Amount: 720.00 CI: 220.00'],
    ['12000 5 10', 'Amount: 19546.74 CI: 7546.74'],
    ['25000 10 1', 'Amount: 27500.00 CI: 2500.00']
  ])
});

// 4. python-if-else-statement (4 problems)
addProblem({
  id: 'py-cond-1',
  topicId: 'python-if-else-statement',
  level: 'beginner',
  title: 'Check Positive, Negative, or Zero',
  difficulty: 'easy',
  problemStatement: 'Given an integer N, print "POSITIVE" if N > 0, "NEGATIVE" if N < 0, and "ZERO" if N == 0.',
  inputFormat: 'A single integer N.',
  outputFormat: 'Print "POSITIVE", "NEGATIVE", or "ZERO".',
  constraints: ['-10^9 <= N <= 10^9'],
  examples: [
    { input: '15', output: 'POSITIVE', explanation: '15 > 0' },
    { input: '-7', output: 'NEGATIVE', explanation: '-7 < 0' },
    { input: '0', output: 'ZERO', explanation: 'Equal to 0' }
  ],
  testCases: createTC('py-cond-1', [
    ['15', 'POSITIVE'],
    ['-7', 'NEGATIVE'],
    ['0', 'ZERO'],
    ['1', 'POSITIVE'],
    ['-1', 'NEGATIVE'],
    ['1000000000', 'POSITIVE'],
    ['-1000000000', 'NEGATIVE'],
    ['42', 'POSITIVE'],
    ['-999', 'NEGATIVE'],
    ['999999', 'POSITIVE']
  ])
});

addProblem({
  id: 'py-cond-2',
  topicId: 'python-if-else-statement',
  level: 'beginner',
  title: 'Largest of Three Numbers',
  difficulty: 'easy',
  problemStatement: 'Given three integers A, B, and C, find and print the largest number among them.',
  inputFormat: 'Three space-separated integers A, B, C.',
  outputFormat: 'Print the largest integer.',
  constraints: ['-10^9 <= A, B, C <= 10^9'],
  examples: [
    { input: '10 25 15', output: '25', explanation: '25 is the largest.' },
    { input: '-5 -2 -10', output: '-2', explanation: '-2 is the largest negative number.' },
    { input: '7 7 7', output: '7', explanation: 'All three are equal.' }
  ],
  testCases: createTC('py-cond-2', [
    ['10 25 15', '25'],
    ['-5 -2 -10', '-2'],
    ['7 7 7', '7'],
    ['100 20 30', '100'],
    ['5 15 50', '50'],
    ['-100 0 100', '100'],
    ['42 42 10', '42'],
    ['10 42 42', '42'],
    ['-99 -50 -1', '-1'],
    ['0 0 0', '0']
  ])
});

addProblem({
  id: 'py-cond-3',
  topicId: 'python-if-else-statement',
  level: 'beginner',
  title: 'Leap Year Checker',
  difficulty: 'medium',
  problemStatement: 'Given a year Y, determine if it is a leap year. A year is a leap year if divisible by 4, except century years must be divisible by 400. Print "LEAP YEAR" or "NOT LEAP YEAR".',
  inputFormat: 'A single positive integer Y.',
  outputFormat: 'Print "LEAP YEAR" or "NOT LEAP YEAR".',
  constraints: ['1 <= Y <= 10000'],
  examples: [
    { input: '2024', output: 'LEAP YEAR', explanation: '2024 is divisible by 4.' },
    { input: '1900', output: 'NOT LEAP YEAR', explanation: '1900 is divisible by 100 but not 400.' },
    { input: '2000', output: 'LEAP YEAR', explanation: '2000 is divisible by 400.' }
  ],
  testCases: createTC('py-cond-3', [
    ['2024', 'LEAP YEAR'],
    ['1900', 'NOT LEAP YEAR'],
    ['2000', 'LEAP YEAR'],
    ['2023', 'NOT LEAP YEAR'],
    ['2004', 'LEAP YEAR'],
    ['2100', 'NOT LEAP YEAR'],
    ['2400', 'LEAP YEAR'],
    ['1600', 'LEAP YEAR'],
    ['1800', 'NOT LEAP YEAR'],
    ['2028', 'LEAP YEAR']
  ])
});

addProblem({
  id: 'py-cond-4',
  topicId: 'python-if-else-statement',
  level: 'beginner',
  title: 'Electricity Bill Calculator',
  difficulty: 'medium',
  problemStatement: 'Calculate electricity bill based on units consumed: First 100 units @ $1.5/unit, Next 100 units (101-200) @ $2.5/unit, Beyond 200 units @ $4.0/unit. Plus a fixed meter charge of $50 on all bills. Print total bill rounded to 2 decimal places.',
  inputFormat: 'A single non-negative integer representing units consumed.',
  outputFormat: 'Print the total bill rounded to 2 decimal places.',
  constraints: ['0 <= units <= 10000'],
  examples: [
    { input: '50', output: '125.00', explanation: '50 * 1.5 + 50 = 125.00' },
    { input: '150', output: '325.00', explanation: '100 * 1.5 + 50 * 2.5 + 50 = 150 + 125 + 50 = 325.00' },
    { input: '250', output: '650.00', explanation: '100*1.5 + 100*2.5 + 50*4.0 + 50 = 150 + 250 + 200 + 50 = 650.00' }
  ],
  testCases: createTC('py-cond-4', [
    ['50', '125.00'],
    ['150', '325.00'],
    ['250', '650.00'],
    ['0', '50.00'],
    ['100', '200.00'],
    ['200', '450.00'],
    ['300', '850.00'],
    ['500', '1650.00'],
    ['75', '162.50'],
    ['120', '250.00']
  ])
});

// 5. python-for-loop (5 problems)
addProblem({
  id: 'py-loop-1',
  topicId: 'python-for-loop',
  level: 'beginner',
  title: 'Print Numbers from 1 to N',
  difficulty: 'easy',
  problemStatement: 'Given a positive integer N, print all integers from 1 to N separated by a single space on one line.',
  inputFormat: 'A single integer N.',
  outputFormat: 'Print space-separated integers from 1 to N.',
  constraints: ['1 <= N <= 1000'],
  examples: [
    { input: '5', output: '1 2 3 4 5', explanation: 'Numbers from 1 to 5.' },
    { input: '1', output: '1', explanation: 'Single number 1.' },
    { input: '8', output: '1 2 3 4 5 6 7 8', explanation: 'Numbers 1 to 8.' }
  ],
  testCases: createTC('py-loop-1', [
    ['5', '1 2 3 4 5'],
    ['1', '1'],
    ['8', '1 2 3 4 5 6 7 8'],
    ['2', '1 2'],
    ['3', '1 2 3'],
    ['10', '1 2 3 4 5 6 7 8 9 10'],
    ['12', '1 2 3 4 5 6 7 8 9 10 11 12'],
    ['15', '1 2 3 4 5 6 7 8 9 10 11 12 13 14 15'],
    ['4', '1 2 3 4'],
    ['7', '1 2 3 4 5 6 7']
  ])
});

addProblem({
  id: 'py-loop-2',
  topicId: 'python-for-loop',
  level: 'beginner',
  title: 'Sum of Natural Numbers up to N',
  difficulty: 'easy',
  problemStatement: 'Given a positive integer N, compute and print the sum of all natural numbers from 1 up to N.',
  inputFormat: 'A single integer N.',
  outputFormat: 'Print the integer sum.',
  constraints: ['1 <= N <= 10^6'],
  examples: [
    { input: '5', output: '15', explanation: '1 + 2 + 3 + 4 + 5 = 15' },
    { input: '10', output: '55', explanation: 'Sum of first 10 natural numbers is 55.' },
    { input: '1', output: '1', explanation: 'Sum up to 1 is 1.' }
  ],
  testCases: createTC('py-loop-2', [
    ['5', '15'],
    ['10', '55'],
    ['1', '1'],
    ['20', '210'],
    ['50', '1275'],
    ['100', '5050'],
    ['1000', '500500'],
    ['3', '6'],
    ['7', '28'],
    ['15', '120']
  ])
});

addProblem({
  id: 'py-loop-3',
  topicId: 'python-for-loop',
  level: 'beginner',
  title: 'Multiplication Table',
  difficulty: 'easy',
  problemStatement: 'Given an integer N, print the multiplication table for N from 1 to 10 in the format "N x i = result" on separate lines.',
  inputFormat: 'A single integer N.',
  outputFormat: '10 lines showing multiplication table from 1 to 10.',
  constraints: ['1 <= N <= 100'],
  examples: [
    { input: '3', output: '3 x 1 = 3\n3 x 2 = 6\n3 x 3 = 9\n3 x 4 = 12\n3 x 5 = 15\n3 x 6 = 18\n3 x 7 = 21\n3 x 8 = 24\n3 x 9 = 27\n3 x 10 = 30', explanation: 'Table of 3.' },
    { input: '1', output: '1 x 1 = 1\n1 x 2 = 2\n1 x 3 = 3\n1 x 4 = 4\n1 x 5 = 5\n1 x 6 = 6\n1 x 7 = 7\n1 x 8 = 8\n1 x 9 = 9\n1 x 10 = 10', explanation: 'Table of 1.' },
    { input: '5', output: '5 x 1 = 5\n5 x 2 = 10\n5 x 3 = 15\n5 x 4 = 20\n5 x 5 = 25\n5 x 6 = 30\n5 x 7 = 35\n5 x 8 = 40\n5 x 9 = 45\n5 x 10 = 50', explanation: 'Table of 5.' }
  ],
  testCases: createTC('py-loop-3', [
    ['3', '3 x 1 = 3\n3 x 2 = 6\n3 x 3 = 9\n3 x 4 = 12\n3 x 5 = 15\n3 x 6 = 18\n3 x 7 = 21\n3 x 8 = 24\n3 x 9 = 27\n3 x 10 = 30'],
    ['1', '1 x 1 = 1\n1 x 2 = 2\n1 x 3 = 3\n1 x 4 = 4\n1 x 5 = 5\n1 x 6 = 6\n1 x 7 = 7\n1 x 8 = 8\n1 x 9 = 9\n1 x 10 = 10'],
    ['5', '5 x 1 = 5\n5 x 2 = 10\n5 x 3 = 15\n5 x 4 = 20\n5 x 5 = 25\n5 x 6 = 30\n5 x 7 = 35\n5 x 8 = 40\n5 x 9 = 45\n5 x 10 = 50'],
    ['2', '2 x 1 = 2\n2 x 2 = 4\n2 x 3 = 6\n2 x 4 = 8\n2 x 5 = 10\n2 x 6 = 12\n2 x 7 = 14\n2 x 8 = 16\n2 x 9 = 18\n2 x 10 = 20'],
    ['4', '4 x 1 = 4\n4 x 2 = 8\n4 x 3 = 12\n4 x 4 = 16\n4 x 5 = 20\n4 x 6 = 24\n4 x 7 = 28\n4 x 8 = 32\n4 x 9 = 36\n4 x 10 = 40'],
    ['7', '7 x 1 = 7\n7 x 2 = 14\n7 x 3 = 21\n7 x 4 = 28\n7 x 5 = 35\n7 x 6 = 42\n7 x 7 = 49\n7 x 8 = 56\n7 x 9 = 63\n7 x 10 = 70'],
    ['10', '10 x 1 = 10\n10 x 2 = 20\n10 x 3 = 30\n10 x 4 = 40\n10 x 5 = 50\n10 x 6 = 60\n10 x 7 = 70\n10 x 8 = 80\n10 x 9 = 90\n10 x 10 = 100'],
    ['8', '8 x 1 = 8\n8 x 2 = 16\n8 x 3 = 24\n8 x 4 = 32\n8 x 5 = 40\n8 x 6 = 48\n8 x 7 = 56\n8 x 8 = 64\n8 x 9 = 72\n8 x 10 = 80'],
    ['9', '9 x 1 = 9\n9 x 2 = 18\n9 x 3 = 27\n9 x 4 = 36\n9 x 5 = 45\n9 x 6 = 54\n9 x 7 = 63\n9 x 8 = 72\n9 x 9 = 81\n9 x 10 = 90'],
    ['12', '12 x 1 = 12\n12 x 2 = 24\n12 x 3 = 36\n12 x 4 = 48\n12 x 5 = 60\n12 x 6 = 72\n12 x 7 = 84\n12 x 8 = 96\n12 x 9 = 108\n12 x 10 = 120']
  ])
});

addProblem({
  id: 'py-loop-4',
  topicId: 'python-for-loop',
  level: 'beginner',
  title: 'Count Digits in an Integer',
  difficulty: 'medium',
  problemStatement: 'Given an integer N (which may be negative or zero), count and print the total number of digits in its representation.',
  inputFormat: 'A single integer N.',
  outputFormat: 'Print the count of digits.',
  constraints: ['-10^12 <= N <= 10^12'],
  examples: [
    { input: '12345', output: '5', explanation: '5 digits.' },
    { input: '-789', output: '3', explanation: 'Negative sign does not count as digit.' },
    { input: '0', output: '1', explanation: 'Zero has 1 digit.' }
  ],
  testCases: createTC('py-loop-4', [
    ['12345', '5'],
    ['-789', '3'],
    ['0', '1'],
    ['7', '1'],
    ['1000000', '7'],
    ['-1', '1'],
    ['987654321', '9'],
    ['-123456789012', '12'],
    ['50505', '5'],
    ['10', '2']
  ])
});

addProblem({
  id: 'py-loop-5',
  topicId: 'python-for-loop',
  level: 'beginner',
  title: 'Reverse an Integer',
  difficulty: 'medium',
  problemStatement: 'Given an integer N, reverse its digits. If N is negative, preserve the negative sign at the front. Trailing zeroes become leading zeroes and are dropped (e.g., 120 becomes 21).',
  inputFormat: 'A single integer N.',
  outputFormat: 'Print the reversed integer.',
  constraints: ['-10^9 <= N <= 10^9'],
  examples: [
    { input: '1234', output: '4321', explanation: 'Digits reversed.' },
    { input: '-567', output: '-765', explanation: 'Negative sign preserved.' },
    { input: '1200', output: '21', explanation: 'Trailing zeroes dropped.' }
  ],
  testCases: createTC('py-loop-5', [
    ['1234', '4321'],
    ['-567', '-765'],
    ['1200', '21'],
    ['0', '0'],
    ['5', '5'],
    ['-10', '-1'],
    ['100000000', '1'],
    ['-987654321', '-123456789'],
    ['102', '201'],
    ['-305', '-503']
  ])
});

// 6. python-string-methods (5 problems)
addProblem({
  id: 'py-str-1',
  topicId: 'python-string-methods',
  level: 'beginner',
  title: 'Reverse a String',
  difficulty: 'easy',
  problemStatement: 'Given a single line string S, reverse the string and print it.',
  inputFormat: 'A string S.',
  outputFormat: 'Print the reversed string.',
  constraints: ['1 <= len(S) <= 10^5'],
  examples: [
    { input: 'hello', output: 'olleh', explanation: 'Reversed string.' },
    { input: 'world', output: 'dlrow', explanation: 'Reversed.' },
    { input: 'Python', output: 'nohtyP', explanation: 'Case is preserved.' }
  ],
  testCases: createTC('py-str-1', [
    ['hello', 'olleh'],
    ['world', 'dlrow'],
    ['Python', 'nohtyP'],
    ['a', 'a'],
    ['racecar', 'racecar'],
    ['OpenAI', 'IAnepO'],
    ['12345', '54321'],
    ['ab cd', 'dc ba'],
    ['madam', 'madam'],
    ['Programming', 'gnimmargorP']
  ])
});

addProblem({
  id: 'py-str-2',
  topicId: 'python-string-methods',
  level: 'beginner',
  title: 'Check Palindrome String',
  difficulty: 'easy',
  problemStatement: 'Given a string S, check if it is a palindrome (reads same forward and backward, case-insensitive). Print "PALINDROME" or "NOT PALINDROME".',
  inputFormat: 'A single word S.',
  outputFormat: 'Print "PALINDROME" or "NOT PALINDROME".',
  constraints: ['1 <= len(S) <= 10^4'],
  examples: [
    { input: 'Racecar', output: 'PALINDROME', explanation: 'Case-insensitive: racecar.' },
    { input: 'hello', output: 'NOT PALINDROME', explanation: 'Not a palindrome.' },
    { input: 'Madam', output: 'PALINDROME', explanation: 'Case-insensitive palindrome.' }
  ],
  testCases: createTC('py-str-2', [
    ['Racecar', 'PALINDROME'],
    ['hello', 'NOT PALINDROME'],
    ['Madam', 'PALINDROME'],
    ['level', 'PALINDROME'],
    ['world', 'NOT PALINDROME'],
    ['noon', 'PALINDROME'],
    ['a', 'PALINDROME'],
    ['Python', 'NOT PALINDROME'],
    ['Deified', 'PALINDROME'],
    ['Rotator', 'PALINDROME']
  ])
});

addProblem({
  id: 'py-str-3',
  topicId: 'python-string-methods',
  level: 'beginner',
  title: 'Count Vowels and Consonants',
  difficulty: 'medium',
  problemStatement: 'Given a string S consisting of alphabetic characters and spaces, count the number of vowels (a, e, i, o, u, case-insensitive) and consonants. Print "Vowels: <v> Consonants: <c>".',
  inputFormat: 'A string S.',
  outputFormat: 'Print "Vowels: <v> Consonants: <c>".',
  constraints: ['1 <= len(S) <= 10^4'],
  examples: [
    { input: 'Hello World', output: 'Vowels: 3 Consonants: 7', explanation: 'e, o, o are vowels; H, l, l, W, r, l, d are consonants.' },
    { input: 'Python', output: 'Vowels: 1 Consonants: 5', explanation: 'o is vowel.' },
    { input: 'aeiou', output: 'Vowels: 5 Consonants: 0', explanation: 'All vowels.' }
  ],
  testCases: createTC('py-str-3', [
    ['Hello World', 'Vowels: 3 Consonants: 7'],
    ['Python', 'Vowels: 1 Consonants: 5'],
    ['aeiou', 'Vowels: 5 Consonants: 0'],
    ['bcdfg', 'Vowels: 0 Consonants: 5'],
    ['Antigravity', 'Vowels: 4 Consonants: 7'],
    ['a', 'Vowels: 1 Consonants: 0'],
    ['b', 'Vowels: 0 Consonants: 1'],
    ['Code Academy', 'Vowels: 5 Consonants: 6'],
    ['Quick Brown Fox', 'Vowels: 4 Consonants: 9'],
    ['Education', 'Vowels: 5 Consonants: 4']
  ])
});

addProblem({
  id: 'py-str-4',
  topicId: 'python-string-methods',
  level: 'beginner',
  title: 'Find Character Frequency',
  difficulty: 'medium',
  problemStatement: 'Given a string S (lowercase letters only), find the frequency of each character. Print each character and its count in alphabetical order in the format "char:count", separated by spaces.',
  inputFormat: 'A string S with only lowercase letters.',
  outputFormat: 'Print space-separated "char:count" pairs sorted alphabetically.',
  constraints: ['1 <= len(S) <= 10^5'],
  examples: [
    { input: 'banana', output: 'a:3 b:1 n:2', explanation: 'a occurs 3 times, b 1 time, n 2 times.' },
    { input: 'apple', output: 'a:1 e:1 l:1 p:2', explanation: 'Sorted alphabetically.' },
    { input: 'zzz', output: 'z:3', explanation: 'Only z.' }
  ],
  testCases: createTC('py-str-4', [
    ['banana', 'a:3 b:1 n:2'],
    ['apple', 'a:1 e:1 l:1 p:2'],
    ['zzz', 'z:3'],
    ['hello', 'e:1 h:1 l:2 o:1'],
    ['abracadabra', 'a:5 b:2 c:1 d:1 r:2'],
    ['racecar', 'a:2 c:2 e:1 r:2'],
    ['code', 'c:1 d:1 e:1 o:1'],
    ['mississippi', 'i:4 m:1 p:2 s:4'],
    ['abc', 'a:1 b:1 c:1'],
    ['aabbcc', 'a:2 b:2 c:2']
  ])
});

addProblem({
  id: 'py-str-5',
  topicId: 'python-string-methods',
  level: 'beginner',
  title: 'Remove Duplicate Characters',
  difficulty: 'medium',
  problemStatement: 'Given a string S, remove all duplicate characters, retaining only the first occurrence of each character. Preserve the original relative order.',
  inputFormat: 'A string S.',
  outputFormat: 'Print the string with duplicates removed.',
  constraints: ['1 <= len(S) <= 10^5'],
  examples: [
    { input: 'programming', output: 'progamin', explanation: 'Duplicate r, g, m removed.' },
    { input: 'banana', output: 'ban', explanation: 'b, a, n kept on first appearance.' },
    { input: 'aaaaa', output: 'a', explanation: 'Only first a kept.' }
  ],
  testCases: createTC('py-str-5', [
    ['programming', 'progamin'],
    ['banana', 'ban'],
    ['aaaaa', 'a'],
    ['hello', 'helo'],
    ['abcdef', 'abcdef'],
    ['aabbccddeeff', 'abcdef'],
    ['racecar', 'race'],
    ['google', 'gole'],
    ['abracadabra', 'abrcd'],
    ['antigravity', 'antigrvy']
  ])
});

// 7. python-creating-lists (5 problems)
addProblem({
  id: 'py-list-1',
  topicId: 'python-creating-lists',
  level: 'beginner',
  title: 'Find Maximum and Minimum Element in an Array',
  difficulty: 'easy',
  problemStatement: 'Given N integers in an array, find and print the maximum and minimum elements separated by a space.',
  inputFormat: 'First line integer N, second line N space-separated integers.',
  outputFormat: 'Print "Max: <max> Min: <min>".',
  constraints: ['1 <= N <= 10^5', '-10^9 <= elements <= 10^9'],
  examples: [
    { input: '5\n1 5 3 9 2', output: 'Max: 9 Min: 1', explanation: '9 is max, 1 is min.' },
    { input: '3\n-5 -2 -10', output: 'Max: -2 Min: -10', explanation: 'Negatives handled.' },
    { input: '1\n100', output: 'Max: 100 Min: 100', explanation: 'Single element.' }
  ],
  testCases: createTC('py-list-1', [
    ['5\n1 5 3 9 2', 'Max: 9 Min: 1'],
    ['3\n-5 -2 -10', 'Max: -2 Min: -10'],
    ['1\n100', 'Max: 100 Min: 100'],
    ['4\n10 20 30 40', 'Max: 40 Min: 10'],
    ['5\n0 0 0 0 0', 'Max: 0 Min: 0'],
    ['6\n-10 50 -30 20 100 -5', 'Max: 100 Min: -30'],
    ['4\n99 12 85 43', 'Max: 99 Min: 12'],
    ['5\n7 7 7 7 8', 'Max: 8 Min: 7'],
    ['3\n-1000 0 1000', 'Max: 1000 Min: -1000'],
    ['5\n4 2 8 6 1', 'Max: 8 Min: 1']
  ])
});

addProblem({
  id: 'py-list-2',
  topicId: 'python-creating-lists',
  level: 'beginner',
  title: 'Second Largest Element in an Array',
  difficulty: 'medium',
  problemStatement: 'Given N integers in an array, find the second largest distinct element. If no second largest distinct element exists, print -1.',
  inputFormat: 'First line integer N, second line N space-separated integers.',
  outputFormat: 'Print the second largest distinct integer, or -1.',
  constraints: ['1 <= N <= 10^5', '-10^9 <= elements <= 10^9'],
  examples: [
    { input: '5\n12 35 1 10 34', output: '34', explanation: '35 is max, 34 is second max.' },
    { input: '4\n10 10 10 10', output: '-1', explanation: 'All elements equal.' },
    { input: '2\n5 10', output: '5', explanation: '5 is second.' }
  ],
  testCases: createTC('py-list-2', [
    ['5\n12 35 1 10 34', '34'],
    ['4\n10 10 10 10', '-1'],
    ['2\n5 10', '5'],
    ['1\n100', '-1'],
    ['6\n1 2 3 4 5 6', '5'],
    ['5\n-10 -5 -20 -1 -8', '-5'],
    ['5\n100 100 90 90 80', '90'],
    ['4\n7 2 7 3', '3'],
    ['5\n0 -1 -2 -3 -4', '-1'],
    ['6\n50 20 40 10 30 50', '40']
  ])
});

addProblem({
  id: 'py-list-3',
  topicId: 'python-creating-lists',
  level: 'beginner',
  title: 'Calculate Array Sum and Average',
  difficulty: 'easy',
  problemStatement: 'Given N integers, calculate their sum and average. Print "Sum: <sum> Avg: <avg>" with average rounded to 2 decimal places.',
  inputFormat: 'First line integer N, second line N integers.',
  outputFormat: 'Print "Sum: <sum> Avg: <avg>".',
  constraints: ['1 <= N <= 10^5'],
  examples: [
    { input: '4\n1 2 3 4', output: 'Sum: 10 Avg: 2.50', explanation: 'Sum 10, Avg 2.5.' },
    { input: '3\n10 20 30', output: 'Sum: 60 Avg: 20.00', explanation: 'Sum 60, Avg 20.' },
    { input: '1\n50', output: 'Sum: 50 Avg: 50.00', explanation: 'Single element.' }
  ],
  testCases: createTC('py-list-3', [
    ['4\n1 2 3 4', 'Sum: 10 Avg: 2.50'],
    ['3\n10 20 30', 'Sum: 60 Avg: 20.00'],
    ['1\n50', 'Sum: 50 Avg: 50.00'],
    ['5\n5 5 5 5 5', 'Sum: 25 Avg: 5.00'],
    ['4\n-10 10 -20 20', 'Sum: 0 Avg: 0.00'],
    ['5\n10 15 20 25 30', 'Sum: 100 Avg: 20.00'],
    ['3\n7 8 9', 'Sum: 24 Avg: 8.00'],
    ['5\n1 3 5 7 9', 'Sum: 25 Avg: 5.00'],
    ['2\n100 200', 'Sum: 300 Avg: 150.00'],
    ['6\n2 4 6 8 10 12', 'Sum: 42 Avg: 7.00']
  ])
});

addProblem({
  id: 'py-list-4',
  topicId: 'python-creating-lists',
  level: 'beginner',
  title: 'Count Even and Odd Elements',
  difficulty: 'easy',
  problemStatement: 'Given N integers in an array, count how many elements are even and how many are odd. Print "Even: <evenCount> Odd: <oddCount>".',
  inputFormat: 'First line N, second line N space-separated integers.',
  outputFormat: 'Print "Even: <evenCount> Odd: <oddCount>".',
  constraints: ['1 <= N <= 10^5'],
  examples: [
    { input: '5\n1 2 3 4 5', output: 'Even: 2 Odd: 3', explanation: '2, 4 are even; 1, 3, 5 are odd.' },
    { input: '4\n2 4 6 8', output: 'Even: 4 Odd: 0', explanation: 'All even.' },
    { input: '3\n1 3 5', output: 'Even: 0 Odd: 3', explanation: 'All odd.' }
  ],
  testCases: createTC('py-list-4', [
    ['5\n1 2 3 4 5', 'Even: 2 Odd: 3'],
    ['4\n2 4 6 8', 'Even: 4 Odd: 0'],
    ['3\n1 3 5', 'Even: 0 Odd: 3'],
    ['6\n0 1 2 3 4 5', 'Even: 3 Odd: 3'],
    ['1\n100', 'Even: 1 Odd: 0'],
    ['1\n99', 'Even: 0 Odd: 1'],
    ['5\n-2 -4 -6 -8 -10', 'Even: 5 Odd: 0'],
    ['5\n-1 -3 -5 -7 -9', 'Even: 0 Odd: 5'],
    ['4\n12 15 18 21', 'Even: 2 Odd: 2'],
    ['7\n10 20 30 40 50 60 71', 'Even: 6 Odd: 1']
  ])
});

addProblem({
  id: 'py-list-5',
  topicId: 'python-creating-lists',
  level: 'beginner',
  title: 'Rotate an Array to the Right by K Steps',
  difficulty: 'medium',
  problemStatement: 'Given an array of N integers and a non-negative integer K, rotate the array to the right by K positions. Print the rotated array separated by spaces.',
  inputFormat: 'First line N and K, second line N space-separated integers.',
  outputFormat: 'Print the rotated array elements separated by spaces.',
  constraints: ['1 <= N <= 10^5', '0 <= K <= 10^9'],
  examples: [
    { input: '5 2\n1 2 3 4 5', output: '4 5 1 2 3', explanation: 'Shift right by 2: 4, 5 wrap to front.' },
    { input: '4 1\n10 20 30 40', output: '40 10 20 30', explanation: 'Shift right by 1.' },
    { input: '3 0\n1 2 3', output: '1 2 3', explanation: '0 rotation.' }
  ],
  testCases: createTC('py-list-5', [
    ['5 2\n1 2 3 4 5', '4 5 1 2 3'],
    ['4 1\n10 20 30 40', '40 10 20 30'],
    ['3 0\n1 2 3', '1 2 3'],
    ['5 5\n1 2 3 4 5', '1 2 3 4 5'],
    ['4 6\n1 2 3 4', '3 4 1 2'],
    ['1 10\n42', '42'],
    ['6 3\n10 20 30 40 50 60', '40 50 60 10 20 30'],
    ['5 1\n5 1 2 3 4', '4 5 1 2 3'],
    ['4 3\n1 2 3 4', '2 3 4 1'],
    ['7 4\n1 2 3 4 5 6 7', '4 5 6 7 1 2 3']
  ])
});

// 8. python-creating-tuples (3 problems)
addProblem({
  id: 'py-tup-1',
  topicId: 'python-creating-tuples',
  level: 'beginner',
  title: 'Sum and Min-Max in a Tuple',
  difficulty: 'easy',
  problemStatement: 'Given N integers representing elements of a tuple, compute the sum, minimum, and maximum element. Print "Sum: <sum> Min: <min> Max: <max>".',
  inputFormat: 'First line N, second line N integers.',
  outputFormat: 'Print "Sum: <sum> Min: <min> Max: <max>".',
  constraints: ['1 <= N <= 10^4'],
  examples: [
    { input: '4\n10 20 30 40', output: 'Sum: 100 Min: 10 Max: 40', explanation: 'Tuple calculations.' },
    { input: '3\n-5 0 5', output: 'Sum: 0 Min: -5 Max: 5', explanation: 'Tuple with zero and negatives.' },
    { input: '1\n7', output: 'Sum: 7 Min: 7 Max: 7', explanation: 'Single element tuple.' }
  ],
  testCases: createTC('py-tup-1', [
    ['4\n10 20 30 40', 'Sum: 100 Min: 10 Max: 40'],
    ['3\n-5 0 5', 'Sum: 0 Min: -5 Max: 5'],
    ['1\n7', 'Sum: 7 Min: 7 Max: 7'],
    ['5\n1 2 3 4 5', 'Sum: 15 Min: 1 Max: 5'],
    ['4\n-10 -20 -30 -40', 'Sum: -100 Min: -40 Max: -10'],
    ['5\n100 200 50 150 250', 'Sum: 750 Min: 50 Max: 250'],
    ['2\n50 50', 'Sum: 100 Min: 50 Max: 50'],
    ['6\n3 6 9 12 15 18', 'Sum: 63 Min: 3 Max: 18'],
    ['4\n12 45 23 8', 'Sum: 88 Min: 8 Max: 45'],
    ['5\n0 10 20 30 40', 'Sum: 100 Min: 0 Max: 40']
  ])
});

addProblem({
  id: 'py-tup-2',
  topicId: 'python-creating-tuples',
  level: 'beginner',
  title: 'Count Occurrences in a Tuple',
  difficulty: 'easy',
  problemStatement: 'Given N integers in a tuple and a target value K, count the number of times K appears in the tuple using tuple.count().',
  inputFormat: 'First line N, second line N space-separated integers, third line K.',
  outputFormat: 'Print the count of occurrences.',
  constraints: ['1 <= N <= 10^4'],
  examples: [
    { input: '6\n1 2 3 2 4 2\n2', output: '3', explanation: '2 appears 3 times.' },
    { input: '4\n5 5 5 5\n5', output: '4', explanation: '5 appears 4 times.' },
    { input: '3\n1 2 3\n9', output: '0', explanation: '9 not in tuple.' }
  ],
  testCases: createTC('py-tup-2', [
    ['6\n1 2 3 2 4 2\n2', '3'],
    ['4\n5 5 5 5\n5', '4'],
    ['3\n1 2 3\n9', '0'],
    ['5\n10 20 10 30 10\n10', '3'],
    ['1\n7\n7', '1'],
    ['1\n7\n8', '0'],
    ['6\n-1 -2 -1 -3 -1 -4\n-1', '3'],
    ['5\n0 0 0 1 0\n0', '4'],
    ['4\n100 200 300 400\n300', '1'],
    ['7\n2 3 2 3 2 3 2\n3', '3']
  ])
});

addProblem({
  id: 'py-tup-3',
  topicId: 'python-creating-tuples',
  level: 'beginner',
  title: 'Swap and Unpack Tuples',
  difficulty: 'medium',
  problemStatement: 'Given four integers a, b, c, d forming two tuples t1 = (a, b) and t2 = (c, d), swap the tuples so t1 becomes (c, d) and t2 becomes (a, b), then unpack and print all four values "t1: (c, d) t2: (a, b)".',
  inputFormat: 'Four space-separated integers a, b, c, d.',
  outputFormat: 'Print "t1: (<c>, <d>) t2: (<a>, <b>)".',
  constraints: ['-10^5 <= a, b, c, d <= 10^5'],
  examples: [
    { input: '1 2 3 4', output: 't1: (3, 4) t2: (1, 2)', explanation: 'Tuples swapped.' },
    { input: '10 20 30 40', output: 't1: (30, 40) t2: (10, 20)', explanation: 'Swapped values.' },
    { input: '0 0 1 1', output: 't1: (1, 1) t2: (0, 0)', explanation: 'Swapped.' }
  ],
  testCases: createTC('py-tup-3', [
    ['1 2 3 4', 't1: (3, 4) t2: (1, 2)'],
    ['10 20 30 40', 't1: (30, 40) t2: (10, 20)'],
    ['0 0 1 1', 't1: (1, 1) t2: (0, 0)'],
    ['-1 -2 5 6', 't1: (5, 6) t2: (-1, -2)'],
    ['7 8 7 8', 't1: (7, 8) t2: (7, 8)'],
    ['100 200 -50 -100', 't1: (-50, -100) t2: (100, 200)'],
    ['5 10 15 20', 't1: (15, 20) t2: (5, 10)'],
    ['9 9 3 3', 't1: (3, 3) t2: (9, 9)'],
    ['12 34 56 78', 't1: (56, 78) t2: (12, 34)'],
    ['-10 0 0 10', 't1: (0, 10) t2: (-10, 0)']
  ])
});

// 9. python-creating-sets (3 problems)
addProblem({
  id: 'py-set-1',
  topicId: 'python-creating-sets',
  level: 'beginner',
  title: 'Remove Duplicates from List using Set',
  difficulty: 'easy',
  problemStatement: 'Given N integers, remove all duplicate values and print the unique elements sorted in ascending order separated by spaces.',
  inputFormat: 'First line N, second line N space-separated integers.',
  outputFormat: 'Print sorted unique integers separated by space.',
  constraints: ['1 <= N <= 10^5'],
  examples: [
    { input: '6\n4 2 4 1 2 3', output: '1 2 3 4', explanation: 'Unique elements sorted.' },
    { input: '3\n5 5 5', output: '5', explanation: 'Only 5 is unique.' },
    { input: '4\n1 2 3 4', output: '1 2 3 4', explanation: 'Already unique.' }
  ],
  testCases: createTC('py-set-1', [
    ['6\n4 2 4 1 2 3', '1 2 3 4'],
    ['3\n5 5 5', '5'],
    ['4\n1 2 3 4', '1 2 3 4'],
    ['5\n10 20 10 30 20', '10 20 30'],
    ['1\n42', '42'],
    ['7\n9 1 9 2 9 3 9', '1 2 3 9'],
    ['5\n-5 0 5 -5 0', '-5 0 5'],
    ['6\n100 50 100 25 50 75', '25 50 75 100'],
    ['4\n3 2 1 0', '0 1 2 3'],
    ['5\n8 8 8 8 9', '8 9']
  ])
});

addProblem({
  id: 'py-set-2',
  topicId: 'python-creating-sets',
  level: 'beginner',
  title: 'Union and Intersection of Two Sets',
  difficulty: 'easy',
  problemStatement: 'Given two sets of integers A and B, compute their Union (elements in either) and Intersection (elements in both). Print Union sorted on first line, Intersection sorted on second line. If intersection is empty, print "EMPTY".',
  inputFormat: 'First line N (size of A) and elements of A; Second line M (size of B) and elements of B.',
  outputFormat: 'Line 1: Sorted union elements. Line 2: Sorted intersection elements or "EMPTY".',
  constraints: ['1 <= N, M <= 10^4'],
  examples: [
    { input: '3 1 2 3\n3 2 3 4', output: '1 2 3 4\n2 3', explanation: 'Union is 1 2 3 4, Intersection is 2 3.' },
    { input: '2 1 2\n2 3 4', output: '1 2 3 4\nEMPTY', explanation: 'No common elements.' },
    { input: '2 5 10\n2 5 10', output: '5 10\n5 10', explanation: 'Equal sets.' }
  ],
  testCases: createTC('py-set-2', [
    ['3 1 2 3\n3 2 3 4', '1 2 3 4\n2 3'],
    ['2 1 2\n2 3 4', '1 2 3 4\nEMPTY'],
    ['2 5 10\n2 5 10', '5 10\n5 10'],
    ['4 1 3 5 7\n4 2 4 6 8', '1 2 3 4 5 6 7 8\nEMPTY'],
    ['3 10 20 30\n3 20 30 40', '10 20 30 40\n20 30'],
    ['1 100\n1 100', '100\n100'],
    ['1 10\n1 20', '10 20\nEMPTY'],
    ['3 5 6 7\n2 6 7', '5 6 7\n6 7'],
    ['4 2 4 6 8\n2 4 8', '2 4 6 8\n4 8'],
    ['3 0 1 2\n3 -1 0 1', '-1 0 1 2\n0 1']
  ])
});

addProblem({
  id: 'py-set-3',
  topicId: 'python-creating-sets',
  level: 'beginner',
  title: 'Symmetric Difference of Two Sets',
  difficulty: 'medium',
  problemStatement: 'Given two sets A and B, print their symmetric difference (elements in A or B, but not both) in ascending sorted order. If empty, print "EMPTY".',
  inputFormat: 'First line size of A and elements; Second line size of B and elements.',
  outputFormat: 'Print space-separated sorted elements or "EMPTY".',
  constraints: ['1 <= size <= 10^4'],
  examples: [
    { input: '3 1 2 3\n3 2 3 4', output: '1 4', explanation: '1 and 4 are unique to each set.' },
    { input: '2 5 6\n2 5 6', output: 'EMPTY', explanation: 'All elements shared.' },
    { input: '2 10 20\n2 30 40', output: '10 20 30 40', explanation: 'No overlap.' }
  ],
  testCases: createTC('py-set-3', [
    ['3 1 2 3\n3 2 3 4', '1 4'],
    ['2 5 6\n2 5 6', 'EMPTY'],
    ['2 10 20\n2 30 40', '10 20 30 40'],
    ['4 1 2 3 4\n2 3 4', '1 2'],
    ['3 10 20 30\n3 20 40 50', '10 30 40 50'],
    ['1 7\n1 7', 'EMPTY'],
    ['1 5\n1 9', '5 9'],
    ['3 2 4 6\n3 4 6 8', '2 8'],
    ['4 10 15 20 25\n2 15 25', '10 20'],
    ['3 0 1 2\n3 1 2 3', '0 3']
  ])
});

// 10. python-creating-dictionaries (4 problems)
addProblem({
  id: 'py-dict-1',
  topicId: 'python-creating-dictionaries',
  level: 'beginner',
  title: 'Word Frequency Counter',
  difficulty: 'easy',
  problemStatement: 'Given a sentence of space-separated words, count the frequency of each word (case-sensitive). Print the words sorted alphabetically with their count in the format "word:count" separated by spaces.',
  inputFormat: 'A single line of space-separated words.',
  outputFormat: 'Print sorted "word:count" pairs.',
  constraints: ['1 <= words <= 10^4'],
  examples: [
    { input: 'apple banana apple cherry banana apple', output: 'apple:3 banana:2 cherry:1', explanation: 'Frequencies counted.' },
    { input: 'cat dog cat dog bird', output: 'bird:1 cat:2 dog:2', explanation: 'Alphabetical order.' },
    { input: 'python python', output: 'python:2', explanation: 'Single repeated word.' }
  ],
  testCases: createTC('py-dict-1', [
    ['apple banana apple cherry banana apple', 'apple:3 banana:2 cherry:1'],
    ['cat dog cat dog bird', 'bird:1 cat:2 dog:2'],
    ['python python', 'python:2'],
    ['a b a b c a', 'a:3 b:2 c:1'],
    ['one two three', 'one:1 three:1 two:1'],
    ['code test code test deploy', 'code:2 deploy:1 test:2'],
    ['hello world hello', 'hello:2 world:1'],
    ['red blue green red green yellow', 'blue:1 green:2 red:2 yellow:1'],
    ['x y z', 'x:1 y:1 z:1'],
    ['go go go', 'go:3']
  ])
});

addProblem({
  id: 'py-dict-2',
  topicId: 'python-creating-dictionaries',
  level: 'beginner',
  title: 'Merge Two Dictionaries with Summed Values',
  difficulty: 'medium',
  problemStatement: 'Given two dictionaries of items and integer quantities, merge them such that if a key exists in both dictionaries, its values are added together. Print sorted "key:total" pairs separated by spaces.',
  inputFormat: 'First line N (pairs in dict 1) followed by key value pairs; Second line M followed by pairs in dict 2.',
  outputFormat: 'Print sorted "key:total" pairs.',
  constraints: ['1 <= N, M <= 10^3'],
  examples: [
    { input: '2 a 10 b 20\n2 b 15 c 30', output: 'a:10 b:35 c:30', explanation: 'b summed to 20 + 15 = 35.' },
    { input: '1 x 5\n1 y 10', output: 'x:5 y:10', explanation: 'No overlap.' },
    { input: '2 k1 100 k2 200\n2 k1 50 k2 50', output: 'k1:150 k2:250', explanation: 'All keys overlap.' }
  ],
  testCases: createTC('py-dict-2', [
    ['2 a 10 b 20\n2 b 15 c 30', 'a:10 b:35 c:30'],
    ['1 x 5\n1 y 10', 'x:5 y:10'],
    ['2 k1 100 k2 200\n2 k1 50 k2 50', 'k1:150 k2:250'],
    ['3 a 1 b 2 c 3\n1 d 4', 'a:1 b:2 c:3 d:4'],
    ['2 apples 5 oranges 10\n2 apples 7 bananas 12', 'apples:12 bananas:12 oranges:10'],
    ['1 m 50\n1 m 50', 'm:100'],
    ['3 p 10 q 20 r 30\n3 p 1 q 2 r 3', 'p:11 q:22 r:33'],
    ['2 x 0 y 5\n2 x 5 y 0', 'x:5 y:5'],
    ['2 alpha 100 beta 200\n1 gamma 300', 'alpha:100 beta:200 gamma:300'],
    ['3 u 10 v 20 w 30\n2 v 10 w 20', 'u:10 v:30 w:50']
  ])
});

addProblem({
  id: 'py-dict-3',
  topicId: 'python-creating-dictionaries',
  level: 'beginner',
  title: 'Invert a Dictionary (Keys become Values)',
  difficulty: 'medium',
  problemStatement: 'Given N key-value pairs (where all keys and values are unique strings), invert the dictionary so that values become keys and keys become values. Print sorted "newKey:newValue" pairs.',
  inputFormat: 'First line N, followed by N key-value string pairs.',
  outputFormat: 'Print sorted "newKey:newValue" pairs.',
  constraints: ['1 <= N <= 10^3'],
  examples: [
    { input: '3 a 1 b 2 c 3', output: '1:a 2:b 3:c', explanation: 'Inverted pairs sorted by new keys.' },
    { input: '2 name alice role admin', output: 'admin:role alice:name', explanation: 'Keys and values swapped.' },
    { input: '1 x y', output: 'y:x', explanation: 'Single pair.' }
  ],
  testCases: createTC('py-dict-3', [
    ['3 a 1 b 2 c 3', '1:a 2:b 3:c'],
    ['2 name alice role admin', 'admin:role alice:name'],
    ['1 x y', 'y:x'],
    ['3 cat feline dog canine bird avian', 'avian:bird canine:dog feline:cat'],
    ['2 us usa in india', 'india:in usa:us'],
    ['3 k1 v1 k2 v2 k3 v3', 'v1:k1 v2:k2 v3:k3'],
    ['2 first 1 second 2', '1:first 2:second'],
    ['4 p 4 q 3 r 2 s 1', '1:s 2:r 3:q 4:p'],
    ['2 true 1 false 0', '0:false 1:true'],
    ['3 red r green g blue b', 'b:blue g:green r:red']
  ])
});

addProblem({
  id: 'py-dict-4',
  topicId: 'python-creating-dictionaries',
  level: 'beginner',
  title: 'Student Grade Lookup and Class Average',
  difficulty: 'medium',
  problemStatement: 'Given N student name and grade pairs, calculate the class average grade. Print "Average: <avg>" rounded to 2 decimal places, followed on the next line by the names of students who scored strictly above average sorted alphabetically separated by space. If none, print "NONE".',
  inputFormat: 'First line N, followed by N pairs of name (string) and grade (int).',
  outputFormat: 'Line 1: "Average: <avg>". Line 2: Space-separated student names or "NONE".',
  constraints: ['1 <= N <= 10^3', '0 <= grade <= 100'],
  examples: [
    { input: '3 Alice 90 Bob 70 Charlie 80', output: 'Average: 80.00\nAlice', explanation: 'Average 80, Alice (90) is above.' },
    { input: '2 David 85 Emma 85', output: 'Average: 85.00\nNONE', explanation: 'Neither strictly above.' },
    { input: '4 Amy 100 Ben 50 Cam 90 Dan 60', output: 'Average: 75.00\nAmy Cam', explanation: 'Amy and Cam above average 75.' }
  ],
  testCases: createTC('py-dict-4', [
    ['3 Alice 90 Bob 70 Charlie 80', 'Average: 80.00\nAlice'],
    ['2 David 85 Emma 85', 'Average: 85.00\nNONE'],
    ['4 Amy 100 Ben 50 Cam 90 Dan 60', 'Average: 75.00\nAmy Cam'],
    ['1 Solo 95', 'Average: 95.00\nNONE'],
    ['3 Frank 60 Grace 70 Harry 80', 'Average: 70.00\nHarry'],
    ['4 Ivy 90 Jack 92 Kate 88 Leo 90', 'Average: 90.00\nJack'],
    ['3 Mia 50 Noah 60 Olivia 70', 'Average: 60.00\nOlivia'],
    ['2 Pete 40 Quinn 80', 'Average: 60.00\nQuinn'],
    ['3 Sam 100 Tim 100 Uma 40', 'Average: 80.00\nSam Tim'],
    ['5 A 20 B 40 C 60 D 80 E 100', 'Average: 60.00\nD E']
  ])
});

// 11. python-defining-functions (4 problems)
addProblem({
  id: 'py-fn-1',
  topicId: 'python-defining-functions',
  level: 'beginner',
  title: 'Prime Number Checker Function',
  difficulty: 'easy',
  problemStatement: 'Write a function is_prime(n) that returns whether an integer N is prime. Print "PRIME" if prime, or "NOT PRIME" otherwise.',
  inputFormat: 'A single positive integer N.',
  outputFormat: 'Print "PRIME" or "NOT PRIME".',
  constraints: ['1 <= N <= 10^9'],
  examples: [
    { input: '7', output: 'PRIME', explanation: '7 is prime.' },
    { input: '12', output: 'NOT PRIME', explanation: '12 has divisors 2, 3, 4, 6.' },
    { input: '1', output: 'NOT PRIME', explanation: '1 is not prime by definition.' }
  ],
  testCases: createTC('py-fn-1', [
    ['7', 'PRIME'],
    ['12', 'NOT PRIME'],
    ['1', 'NOT PRIME'],
    ['2', 'PRIME'],
    ['13', 'PRIME'],
    ['29', 'PRIME'],
    ['100', 'NOT PRIME'],
    ['97', 'PRIME'],
    ['49', 'NOT PRIME'],
    ['997', 'PRIME']
  ])
});

addProblem({
  id: 'py-fn-2',
  topicId: 'python-defining-functions',
  level: 'beginner',
  title: 'Calculate Factorial',
  difficulty: 'easy',
  problemStatement: 'Define a function factorial(n) that returns n! (the product of all integers from 1 to n). By convention, 0! = 1.',
  inputFormat: 'A non-negative integer N.',
  outputFormat: 'Print N! as an integer.',
  constraints: ['0 <= N <= 20'],
  examples: [
    { input: '5', output: '120', explanation: '5 * 4 * 3 * 2 * 1 = 120' },
    { input: '0', output: '1', explanation: '0! = 1' },
    { input: '3', output: '6', explanation: '3 * 2 * 1 = 6' }
  ],
  testCases: createTC('py-fn-2', [
    ['5', '120'],
    ['0', '1'],
    ['3', '6'],
    ['1', '1'],
    ['4', '24'],
    ['6', '720'],
    ['7', '5040'],
    ['10', '3628800'],
    ['8', '40320'],
    ['12', '479001600']
  ])
});

addProblem({
  id: 'py-fn-3',
  topicId: 'python-defining-functions',
  level: 'beginner',
  title: 'Greatest Common Divisor (GCD)',
  difficulty: 'medium',
  problemStatement: 'Implement a function gcd(a, b) using Euclid\'s algorithm to find and print the greatest common divisor of two positive integers a and b.',
  inputFormat: 'Two space-separated positive integers a and b.',
  outputFormat: 'Print their GCD.',
  constraints: ['1 <= a, b <= 10^9'],
  examples: [
    { input: '48 18', output: '6', explanation: '6 divides both 48 and 18.' },
    { input: '100 25', output: '25', explanation: '25 divides 100.' },
    { input: '13 7', output: '1', explanation: 'Coprime numbers have GCD 1.' }
  ],
  testCases: createTC('py-fn-3', [
    ['48 18', '6'],
    ['100 25', '25'],
    ['13 7', '1'],
    ['54 24', '6'],
    ['81 27', '27'],
    ['105 35', '35'],
    ['17 19', '1'],
    ['1000 500', '500'],
    ['12345 5', '5'],
    ['270 192', '6']
  ])
});

addProblem({
  id: 'py-fn-4',
  topicId: 'python-defining-functions',
  level: 'beginner',
  title: 'Check Armstrong Number',
  difficulty: 'medium',
  problemStatement: 'An Armstrong number of k digits is equal to the sum of each digit raised to the k-th power (e.g. 153 = 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153). Write a function is_armstrong(n) and print "ARMSTRONG" or "NOT ARMSTRONG".',
  inputFormat: 'A single positive integer N.',
  outputFormat: 'Print "ARMSTRONG" or "NOT ARMSTRONG".',
  constraints: ['1 <= N <= 10^8'],
  examples: [
    { input: '153', output: 'ARMSTRONG', explanation: '1^3 + 5^3 + 3^3 = 153' },
    { input: '370', output: 'ARMSTRONG', explanation: '3^3 + 7^3 + 0^3 = 27 + 343 + 0 = 370' },
    { input: '123', output: 'NOT ARMSTRONG', explanation: '1^3 + 2^3 + 3^3 = 36 != 123' }
  ],
  testCases: createTC('py-fn-4', [
    ['153', 'ARMSTRONG'],
    ['370', 'ARMSTRONG'],
    ['123', 'NOT ARMSTRONG'],
    ['371', 'ARMSTRONG'],
    ['407', 'ARMSTRONG'],
    ['9474', 'ARMSTRONG'],
    ['500', 'NOT ARMSTRONG'],
    ['1', 'ARMSTRONG'],
    ['9', 'ARMSTRONG'],
    ['1634', 'ARMSTRONG']
  ])
});

// 12. python-recursion (4 problems)
addProblem({
  id: 'py-rec-1',
  topicId: 'python-recursion',
  level: 'beginner',
  title: 'Factorial Using Recursion',
  difficulty: 'easy',
  problemStatement: 'Implement recursive function rec_fact(n). Base case: rec_fact(0) = 1. Return n * rec_fact(n - 1).',
  inputFormat: 'A single non-negative integer N.',
  outputFormat: 'Print the recursive factorial result.',
  constraints: ['0 <= N <= 15'],
  examples: [
    { input: '5', output: '120', explanation: '5 * 4 * 3 * 2 * 1 = 120' },
    { input: '0', output: '1', explanation: 'Base case returns 1.' },
    { input: '1', output: '1', explanation: '1 * 1 = 1.' }
  ],
  testCases: createTC('py-rec-1', [
    ['5', '120'],
    ['0', '1'],
    ['1', '1'],
    ['3', '6'],
    ['4', '24'],
    ['6', '720'],
    ['7', '5040'],
    ['8', '40320'],
    ['10', '3628800'],
    ['12', '479001600']
  ])
});

addProblem({
  id: 'py-rec-2',
  topicId: 'python-recursion',
  level: 'beginner',
  title: 'Fibonacci Term Using Recursion',
  difficulty: 'easy',
  problemStatement: 'Implement recursive function fib(n) to find the n-th Fibonacci number. Assume 0-indexed: fib(0) = 0, fib(1) = 1, fib(n) = fib(n-1) + fib(n-2).',
  inputFormat: 'A non-negative integer N.',
  outputFormat: 'Print the n-th Fibonacci number.',
  constraints: ['0 <= N <= 30'],
  examples: [
    { input: '6', output: '8', explanation: 'Sequence: 0, 1, 1, 2, 3, 5, 8' },
    { input: '0', output: '0', explanation: 'fib(0) = 0' },
    { input: '1', output: '1', explanation: 'fib(1) = 1' }
  ],
  testCases: createTC('py-rec-2', [
    ['6', '8'],
    ['0', '0'],
    ['1', '1'],
    ['2', '1'],
    ['3', '2'],
    ['4', '3'],
    ['5', '5'],
    ['7', '13'],
    ['10', '55'],
    ['15', '610']
  ])
});

addProblem({
  id: 'py-rec-3',
  topicId: 'python-recursion',
  level: 'beginner',
  title: 'Sum of Digits Using Recursion',
  difficulty: 'medium',
  problemStatement: 'Write a recursive function sum_digits(n) that computes the sum of the digits of a positive integer N.',
  inputFormat: 'A single positive integer N.',
  outputFormat: 'Print the sum of digits.',
  constraints: ['1 <= N <= 10^12'],
  examples: [
    { input: '1234', output: '10', explanation: '1 + 2 + 3 + 4 = 10' },
    { input: '999', output: '27', explanation: '9 + 9 + 9 = 27' },
    { input: '5', output: '5', explanation: 'Single digit.' }
  ],
  testCases: createTC('py-rec-3', [
    ['1234', '10'],
    ['999', '27'],
    ['5', '5'],
    ['100', '1'],
    ['405', '9'],
    ['98765', '35'],
    ['111111', '6'],
    ['50505', '15'],
    ['2468', '20'],
    ['13579', '25']
  ])
});

addProblem({
  id: 'py-rec-4',
  topicId: 'python-recursion',
  level: 'beginner',
  title: 'Reverse a String Recursively',
  difficulty: 'medium',
  problemStatement: 'Implement a recursive function rev_str(s) that reverses a string S without using slicing [::-1] or loops.',
  inputFormat: 'A string S.',
  outputFormat: 'Print the reversed string.',
  constraints: ['1 <= len(S) <= 1000'],
  examples: [
    { input: 'recursion', output: 'noisrucer', explanation: 'Reversed recursively.' },
    { input: 'cat', output: 'tac', explanation: 'Reversed.' },
    { input: 'a', output: 'a', explanation: 'Single char.' }
  ],
  testCases: createTC('py-rec-4', [
    ['recursion', 'noisrucer'],
    ['cat', 'tac'],
    ['a', 'a'],
    ['hello', 'olleh'],
    ['python', 'nohtyp'],
    ['12345', '54321'],
    ['racecar', 'racecar'],
    ['data', 'atad'],
    ['structure', 'erutcurts'],
    ['algorithm', 'mhtirogla']
  ])
});

// 13. python-list-comprehensions (3 problems)
addProblem({
  id: 'py-comp-1',
  topicId: 'python-list-comprehensions',
  level: 'beginner',
  title: 'Squares of Even Numbers',
  difficulty: 'easy',
  problemStatement: 'Given N integers, use a list comprehension to filter only even numbers and compute their squares. Print the squared even numbers separated by spaces. If no even numbers exist, print "NONE".',
  inputFormat: 'First line N, second line N space-separated integers.',
  outputFormat: 'Print space-separated squared integers or "NONE".',
  constraints: ['1 <= N <= 10^4'],
  examples: [
    { input: '5\n1 2 3 4 5', output: '4 16', explanation: '2^2 = 4, 4^2 = 16.' },
    { input: '3\n1 3 5', output: 'NONE', explanation: 'No evens.' },
    { input: '3\n2 4 6', output: '4 16 36', explanation: 'All evens squared.' }
  ],
  testCases: createTC('py-comp-1', [
    ['5\n1 2 3 4 5', '4 16'],
    ['3\n1 3 5', 'NONE'],
    ['3\n2 4 6', '4 16 36'],
    ['1\n8', '64'],
    ['4\n0 1 2 3', '0 4'],
    ['5\n-2 3 -4 5 6', '4 16 36'],
    ['4\n7 9 11 13', 'NONE'],
    ['6\n10 15 20 25 30 35', '100 400 900'],
    ['2\n4 4', '16 16'],
    ['5\n2 2 2 2 2', '4 4 4 4 4']
  ])
});

addProblem({
  id: 'py-comp-2',
  topicId: 'python-list-comprehensions',
  level: 'beginner',
  title: 'Filter Words by Minimum Length',
  difficulty: 'easy',
  problemStatement: 'Given an integer K and a space-separated string of words, use a list comprehension to filter out words with length less than K. Print remaining words separated by spaces. If none, print "NONE".',
  inputFormat: 'First line K, second line words.',
  outputFormat: 'Print space-separated filtered words or "NONE".',
  constraints: ['1 <= K <= 20'],
  examples: [
    { input: '4\nthe quick brown fox jumps over the lazy dog', output: 'quick brown jumps over lazy', explanation: 'Words with length >= 4.' },
    { input: '6\napple pear banana cherry', output: 'banana cherry', explanation: 'Only banana (6) and cherry (6).' },
    { input: '10\nshort words only', output: 'NONE', explanation: 'None >= 10.' }
  ],
  testCases: createTC('py-comp-2', [
    ['4\nthe quick brown fox jumps over the lazy dog', 'quick brown jumps over lazy'],
    ['6\napple pear banana cherry', 'banana cherry'],
    ['10\nshort words only', 'NONE'],
    ['3\na bb ccc dddd', 'ccc dddd'],
    ['1\nx y z', 'x y z'],
    ['5\nprogramming in python is fun', 'programming python'],
    ['4\ncat fish bird elephant', 'fish bird elephant'],
    ['7\nmicroscope telescope star moon', 'microscope telescope'],
    ['2\na b c', 'NONE'],
    ['5\nhello world hi bye', 'hello world']
  ])
});

addProblem({
  id: 'py-comp-3',
  topicId: 'python-list-comprehensions',
  level: 'beginner',
  title: 'Flatten a 2D Matrix',
  difficulty: 'medium',
  problemStatement: 'Given an R x C 2D integer matrix, use a nested list comprehension [val for row in matrix for val in row] to flatten the matrix into a 1D list. Print all values separated by spaces.',
  inputFormat: 'First line R and C, next R lines each contain C integers.',
  outputFormat: 'Print flattened space-separated values.',
  constraints: ['1 <= R, C <= 100'],
  examples: [
    { input: '2 3\n1 2 3\n4 5 6', output: '1 2 3 4 5 6', explanation: 'Flattened 2x3 matrix.' },
    { input: '2 2\n10 20\n30 40', output: '10 20 30 40', explanation: 'Flattened 2x2 matrix.' },
    { input: '1 4\n5 6 7 8', output: '5 6 7 8', explanation: 'Single row matrix.' }
  ],
  testCases: createTC('py-comp-3', [
    ['2 3\n1 2 3\n4 5 6', '1 2 3 4 5 6'],
    ['2 2\n10 20\n30 40', '10 20 30 40'],
    ['1 4\n5 6 7 8', '5 6 7 8'],
    ['3 1\n1\n2\n3', '1 2 3'],
    ['3 3\n1 2 3\n4 5 6\n7 8 9', '1 2 3 4 5 6 7 8 9'],
    ['2 4\n1 0 1 0\n0 1 0 1', '1 0 1 0 0 1 0 1'],
    ['1 1\n42', '42'],
    ['4 2\n1 2\n3 4\n5 6\n7 8', '1 2 3 4 5 6 7 8'],
    ['2 2\n-1 -2\n-3 -4', '-1 -2 -3 -4'],
    ['3 2\n10 20\n30 40\n50 60', '10 20 30 40 50 60']
  ])
});

console.log('Processed beginner python problems. Total so far:', problems.length);

// -------------------------------------------------------------
// INTERMEDIATE
// -------------------------------------------------------------

// 14. python-closures (3 problems)
addProblem({
  id: 'py-cls-1',
  topicId: 'python-closures',
  level: 'intermediate',
  title: 'Running Total Accumulator Closure',
  difficulty: 'easy',
  problemStatement: 'Implement a closure make_accumulator(start=0) that returns a function accumulating values. Given a starting value S and N numbers to add sequentially, print the running total after each addition separated by spaces.',
  inputFormat: 'First line S and N, second line N integers.',
  outputFormat: 'Print space-separated running totals.',
  constraints: ['1 <= N <= 10^4'],
  examples: [
    { input: '10 4\n5 10 15 20', output: '15 25 40 60', explanation: '10+5=15, +10=25, +15=40, +20=60.' },
    { input: '0 3\n1 2 3', output: '1 3 6', explanation: 'Cumulative sum from 0.' },
    { input: '100 2\n-20 -30', output: '80 50', explanation: 'Subtracting.' }
  ],
  testCases: createTC('py-cls-1', [
    ['10 4\n5 10 15 20', '15 25 40 60'],
    ['0 3\n1 2 3', '1 3 6'],
    ['100 2\n-20 -30', '80 50'],
    ['5 1\n10', '15'],
    ['0 5\n10 10 10 10 10', '10 20 30 40 50'],
    ['50 3\n-10 20 -30', '40 60 30'],
    ['1000 4\n100 200 300 400', '1100 1300 1600 2000'],
    ['0 4\n0 0 0 0', '0 0 0 0'],
    ['25 3\n5 5 5', '30 35 40'],
    ['7 3\n3 4 5', '10 14 19']
  ])
});

addProblem({
  id: 'py-cls-2',
  topicId: 'python-closures',
  level: 'intermediate',
  title: 'Configurable Multiplier Factory',
  difficulty: 'medium',
  problemStatement: 'Implement a closure make_multiplier(factor) that returns a function multiplying its argument by factor. Given factor F, integer count N, and N numbers, print each number multiplied by F separated by spaces.',
  inputFormat: 'First line F and N, second line N space-separated integers.',
  outputFormat: 'Print space-separated multiplied values.',
  constraints: ['1 <= N <= 10^4'],
  examples: [
    { input: '3 4\n1 2 3 4', output: '3 6 9 12', explanation: 'Each multiplied by 3.' },
    { input: '2 3\n5 10 15', output: '10 20 30', explanation: 'Doubled.' },
    { input: '0 3\n10 20 30', output: '0 0 0', explanation: 'Multiplied by 0.' }
  ],
  testCases: createTC('py-cls-2', [
    ['3 4\n1 2 3 4', '3 6 9 12'],
    ['2 3\n5 10 15', '10 20 30'],
    ['0 3\n10 20 30', '0 0 0'],
    ['-1 4\n1 -2 3 -4', '-1 2 -3 4'],
    ['5 2\n10 20', '50 100'],
    ['10 3\n7 8 9', '70 80 90'],
    ['4 3\n2 4 8', '8 16 32'],
    ['1 5\n1 2 3 4 5', '1 2 3 4 5'],
    ['6 2\n3 5', '18 30'],
    ['100 2\n2 4', '200 400']
  ])
});

addProblem({
  id: 'py-cls-3',
  topicId: 'python-closures',
  level: 'intermediate',
  title: 'Rate Limiter Counter Closure',
  difficulty: 'medium',
  problemStatement: 'Implement make_rate_limiter(max_calls) that returns a function that can only be called max_calls times. After max_calls, it prints "BLOCKED". For the first max_calls, it prints "ALLOWED <call_count>". Given max_calls M and total requests R, simulate all R requests.',
  inputFormat: 'Two space-separated integers M (max allowed) and R (total requests).',
  outputFormat: 'R space-separated status strings.',
  constraints: ['1 <= M, R <= 1000'],
  examples: [
    { input: '3 5', output: 'ALLOWED:1 ALLOWED:2 ALLOWED:3 BLOCKED BLOCKED', explanation: 'First 3 allowed, next 2 blocked.' },
    { input: '1 2', output: 'ALLOWED:1 BLOCKED', explanation: 'Only 1 call allowed.' },
    { input: '2 2', output: 'ALLOWED:1 ALLOWED:2', explanation: 'Both calls allowed.' }
  ],
  testCases: createTC('py-cls-3', [
    ['3 5', 'ALLOWED:1 ALLOWED:2 ALLOWED:3 BLOCKED BLOCKED'],
    ['1 2', 'ALLOWED:1 BLOCKED'],
    ['2 2', 'ALLOWED:1 ALLOWED:2'],
    ['4 6', 'ALLOWED:1 ALLOWED:2 ALLOWED:3 ALLOWED:4 BLOCKED BLOCKED'],
    ['1 1', 'ALLOWED:1'],
    ['2 4', 'ALLOWED:1 ALLOWED:2 BLOCKED BLOCKED'],
    ['5 3', 'ALLOWED:1 ALLOWED:2 ALLOWED:3'],
    ['3 3', 'ALLOWED:1 ALLOWED:2 ALLOWED:3'],
    ['1 4', 'ALLOWED:1 BLOCKED BLOCKED BLOCKED'],
    ['2 5', 'ALLOWED:1 ALLOWED:2 BLOCKED BLOCKED BLOCKED']
  ])
});

// 15. python-higher-order-functions (3 problems)
addProblem({
  id: 'py-hof-1',
  topicId: 'python-higher-order-functions',
  level: 'intermediate',
  title: 'Apply Function to List',
  difficulty: 'easy',
  problemStatement: 'Write a higher-order function apply_op(fn, lst) that accepts a mathematical operation and an integer list. Given operation code ("SQUARE" or "DOUBLE" or "CUBE"), apply it to all elements and print space-separated results.',
  inputFormat: 'First line operation code, second line N, third line N integers.',
  outputFormat: 'Print space-separated transformed values.',
  constraints: ['1 <= N <= 10^4'],
  examples: [
    { input: 'SQUARE\n3\n2 3 4', output: '4 9 16', explanation: '2^2=4, 3^2=9, 4^2=16' },
    { input: 'DOUBLE\n3\n10 20 30', output: '20 40 60', explanation: 'Doubled values.' },
    { input: 'CUBE\n2\n2 3', output: '8 27', explanation: '2^3=8, 3^3=27' }
  ],
  testCases: createTC('py-hof-1', [
    ['SQUARE\n3\n2 3 4', '4 9 16'],
    ['DOUBLE\n3\n10 20 30', '20 40 60'],
    ['CUBE\n2\n2 3', '8 27'],
    ['SQUARE\n4\n1 5 10 12', '1 25 100 144'],
    ['DOUBLE\n4\n-1 -5 0 8', '-2 -10 0 16'],
    ['CUBE\n3\n1 4 5', '1 64 125'],
    ['SQUARE\n1\n7', '49'],
    ['DOUBLE\n2\n25 50', '50 100'],
    ['CUBE\n1\n10', '1000'],
    ['DOUBLE\n5\n1 2 3 4 5', '2 4 6 8 10']
  ])
});

addProblem({
  id: 'py-hof-2',
  topicId: 'python-higher-order-functions',
  level: 'intermediate',
  title: 'Pipeline Transformation Chain',
  difficulty: 'medium',
  problemStatement: 'Implement compose(f, g) returning f(g(x)). Given an integer X, compute triple(add_ten(x)) = (x + 10) * 3.',
  inputFormat: 'A single integer X.',
  outputFormat: 'Print the composed result.',
  constraints: ['-10^5 <= X <= 10^5'],
  examples: [
    { input: '5', output: '45', explanation: '(5 + 10) * 3 = 15 * 3 = 45' },
    { input: '0', output: '30', explanation: '(0 + 10) * 3 = 30' },
    { input: '-10', output: '0', explanation: '(-10 + 10) * 3 = 0' }
  ],
  testCases: createTC('py-hof-2', [
    ['5', '45'],
    ['0', '30'],
    ['-10', '0'],
    ['10', '60'],
    ['20', '90'],
    ['-5', '15'],
    ['100', '330'],
    ['-20', '-30'],
    ['1', '33'],
    ['7', '51']
  ])
});

addProblem({
  id: 'py-hof-3',
  topicId: 'python-higher-order-functions',
  level: 'intermediate',
  title: 'Custom Sort with Key Comparator',
  difficulty: 'medium',
  problemStatement: 'Given N strings, sort them by length in ascending order using sorted(words, key=len). If two words have the same length, preserve their alphabetical order. Print space-separated sorted words.',
  inputFormat: 'First line N, second line N space-separated strings.',
  outputFormat: 'Print space-separated sorted strings.',
  constraints: ['1 <= N <= 10^4'],
  examples: [
    { input: '4\napple cat dog banana', output: 'cat dog apple banana', explanation: 'cat, dog (len 3, sorted alphabetically), apple (5), banana (6).' },
    { input: '3\naaa b c', output: 'b c aaa', explanation: 'Length 1 sorted (b, c), then length 3.' },
    { input: '3\nz y x', output: 'x y z', explanation: 'Same length sorted alphabetically.' }
  ],
  testCases: createTC('py-hof-3', [
    ['4\napple cat dog banana', 'cat dog apple banana'],
    ['3\naaa b c', 'b c aaa'],
    ['3\nz y x', 'x y z'],
    ['5\npython c java rust ruby', 'c java ruby rust python'],
    ['4\none two three four', 'one two four three'],
    ['4\nalpha beta gamma delta', 'beta delta gamma alpha'],
    ['2\nshort verylongword', 'short verylongword'],
    ['3\ncat bat rat', 'bat cat rat'],
    ['4\nelephant mouse ant bee', 'ant bee mouse elephant'],
    ['5\nhi bye hello welcome greetings', 'hi bye hello welcome greetings']
  ])
});

// 16. python-map-filter-reduce (3 problems)
addProblem({
  id: 'py-mfr-1',
  topicId: 'python-map-filter-reduce',
  level: 'intermediate',
  title: 'Transform Strings to Lengths with map',
  difficulty: 'easy',
  problemStatement: 'Given a space-separated sequence of words, use map() to compute the length of each word. Print the word lengths separated by spaces.',
  inputFormat: 'A single line of space-separated words.',
  outputFormat: 'Print space-separated word lengths.',
  constraints: ['1 <= words <= 10^4'],
  examples: [
    { input: 'hello world python', output: '5 5 6', explanation: 'Lengths of hello, world, python.' },
    { input: 'a bb ccc', output: '1 2 3', explanation: 'Lengths 1, 2, 3.' },
    { input: 'code', output: '4', explanation: 'Single word length 4.' }
  ],
  testCases: createTC('py-mfr-1', [
    ['hello world python', '5 5 6'],
    ['a bb ccc', '1 2 3'],
    ['code', '4'],
    ['the quick brown fox', '3 5 5 3'],
    ['functional programming with map', '10 11 4 3'],
    ['ai mentor system', '2 6 6'],
    ['python java javascript', '6 4 10'],
    ['one two three four five', '3 3 5 4 4'],
    ['x y z', '1 1 1'],
    ['developer engineering coding', '9 11 6']
  ])
});

addProblem({
  id: 'py-mfr-2',
  topicId: 'python-map-filter-reduce',
  level: 'intermediate',
  title: 'Filter Positive Numbers with filter',
  difficulty: 'easy',
  problemStatement: 'Given N integers, use filter() to select only strictly positive numbers (> 0). Print them separated by spaces. If none exist, print "NONE".',
  inputFormat: 'First line N, second line N space-separated integers.',
  outputFormat: 'Print space-separated positive numbers or "NONE".',
  constraints: ['1 <= N <= 10^4'],
  examples: [
    { input: '5\n-5 10 -3 20 0', output: '10 20', explanation: 'Only 10 and 20 are > 0.' },
    { input: '3\n-1 -2 -3', output: 'NONE', explanation: 'No positives.' },
    { input: '3\n1 2 3', output: '1 2 3', explanation: 'All positives.' }
  ],
  testCases: createTC('py-mfr-2', [
    ['5\n-5 10 -3 20 0', '10 20'],
    ['3\n-1 -2 -3', 'NONE'],
    ['3\n1 2 3', '1 2 3'],
    ['4\n0 0 0 0', 'NONE'],
    ['4\n-10 100 -20 200', '100 200'],
    ['5\n-1 0 1 2 -3', '1 2'],
    ['1\n42', '42'],
    ['1\n-42', 'NONE'],
    ['6\n5 10 15 20 25 30', '5 10 15 20 25 30'],
    ['4\n-100 -50 0 50', '50']
  ])
});

addProblem({
  id: 'py-mfr-3',
  topicId: 'python-map-filter-reduce',
  level: 'intermediate',
  title: 'Product of All Elements with reduce',
  difficulty: 'medium',
  problemStatement: 'Given N integers, use functools.reduce() with a lambda or operator.mul to calculate the product of all elements.',
  inputFormat: 'First line N, second line N integers.',
  outputFormat: 'Print the product.',
  constraints: ['1 <= N <= 15', '-20 <= elements <= 20'],
  examples: [
    { input: '4\n1 2 3 4', output: '24', explanation: '1 * 2 * 3 * 4 = 24.' },
    { input: '3\n2 5 10', output: '100', explanation: '2 * 5 * 10 = 100.' },
    { input: '2\n-3 4', output: '-12', explanation: '-3 * 4 = -12.' }
  ],
  testCases: createTC('py-mfr-3', [
    ['4\n1 2 3 4', '24'],
    ['3\n2 5 10', '100'],
    ['2\n-3 4', '-12'],
    ['1\n42', '42'],
    ['5\n1 1 1 1 1', '1'],
    ['3\n-2 -3 -4', '-24'],
    ['4\n2 2 2 2', '16'],
    ['3\n0 5 10', '0'],
    ['4\n-1 1 -1 1', '1'],
    ['3\n3 3 3', '27']
  ])
});

// 17. python-generators-and-yield (3 problems)
addProblem({
  id: 'py-gen-1',
  topicId: 'python-generators-and-yield',
  level: 'intermediate',
  title: 'Fibonacci Generator Function',
  difficulty: 'easy',
  problemStatement: 'Implement a generator function fib_gen() that yields Fibonacci numbers sequentially. Given N, print the first N Fibonacci numbers (starting with 0, 1) separated by spaces.',
  inputFormat: 'A positive integer N.',
  outputFormat: 'Print first N Fibonacci numbers separated by space.',
  constraints: ['1 <= N <= 30'],
  examples: [
    { input: '5', output: '0 1 1 2 3', explanation: 'First 5 Fibonacci numbers.' },
    { input: '1', output: '0', explanation: 'First 1 number.' },
    { input: '7', output: '0 1 1 2 3 5 8', explanation: 'First 7 numbers.' }
  ],
  testCases: createTC('py-gen-1', [
    ['5', '0 1 1 2 3'],
    ['1', '0'],
    ['7', '0 1 1 2 3 5 8'],
    ['2', '0 1'],
    ['3', '0 1 1'],
    ['4', '0 1 1 2'],
    ['6', '0 1 1 2 3 5'],
    ['8', '0 1 1 2 3 5 8 13'],
    ['10', '0 1 1 2 3 5 8 13 21 34'],
    ['12', '0 1 1 2 3 5 8 13 21 34 55 89']
  ])
});

addProblem({
  id: 'py-gen-2',
  topicId: 'python-generators-and-yield',
  level: 'intermediate',
  title: 'Prime Number Generator up to N',
  difficulty: 'medium',
  problemStatement: 'Create a generator prime_gen(n) that yields all prime numbers less than or equal to N. Print the yielded primes separated by spaces. If no primes exist, print "NONE".',
  inputFormat: 'A positive integer N.',
  outputFormat: 'Print space-separated primes or "NONE".',
  constraints: ['1 <= N <= 10^4'],
  examples: [
    { input: '10', output: '2 3 5 7', explanation: 'Primes <= 10.' },
    { input: '1', output: 'NONE', explanation: 'No primes <= 1.' },
    { input: '20', output: '2 3 5 7 11 13 17 19', explanation: 'Primes <= 20.' }
  ],
  testCases: createTC('py-gen-2', [
    ['10', '2 3 5 7'],
    ['1', 'NONE'],
    ['20', '2 3 5 7 11 13 17 19'],
    ['2', '2'],
    ['3', '2 3'],
    ['5', '2 3 5'],
    ['15', '2 3 5 7 11 13'],
    ['30', '2 3 5 7 11 13 17 19 23 29'],
    ['0', 'NONE'],
    ['25', '2 3 5 7 11 13 17 19 23']
  ])
});

addProblem({
  id: 'py-gen-3',
  topicId: 'python-generators-and-yield',
  level: 'intermediate',
  title: 'Chunk Generator for Streams',
  difficulty: 'medium',
  problemStatement: 'Write a generator chunk_gen(lst, chunk_size) that yields consecutive sublists of length chunk_size (the last chunk may be shorter). Given chunk_size K and N elements, print each chunk enclosed in brackets on separate lines (e.g. "[1, 2]").',
  inputFormat: 'First line K and N, second line N space-separated integers.',
  outputFormat: 'Print each chunk on a new line formatted as "[a, b]".',
  constraints: ['1 <= K, N <= 1000'],
  examples: [
    { input: '2 5\n1 2 3 4 5', output: '[1, 2]\n[3, 4]\n[5]', explanation: 'Chunks of size 2.' },
    { input: '3 3\n10 20 30', output: '[10, 20, 30]', explanation: 'Exact chunk of size 3.' },
    { input: '4 2\n7 8', output: '[7, 8]', explanation: 'Shorter chunk.' }
  ],
  testCases: createTC('py-gen-3', [
    ['2 5\n1 2 3 4 5', '[1, 2]\n[3, 4]\n[5]'],
    ['3 3\n10 20 30', '[10, 20, 30]'],
    ['4 2\n7 8', '[7, 8]'],
    ['1 3\n1 2 3', '[1]\n[2]\n[3]'],
    ['3 6\n1 2 3 4 5 6', '[1, 2, 3]\n[4, 5, 6]'],
    ['2 4\n10 20 30 40', '[10, 20]\n[30, 40]'],
    ['5 5\n5 4 3 2 1', '[5, 4, 3, 2, 1]'],
    ['3 7\n1 2 3 4 5 6 7', '[1, 2, 3]\n[4, 5, 6]\n[7]'],
    ['2 1\n99', '[99]'],
    ['4 8\n2 4 6 8 10 12 14 16', '[2, 4, 6, 8]\n[10, 12, 14, 16]']
  ])
});

// 18. python-decorators (3 problems)
addProblem({
  id: 'py-dec-1',
  topicId: 'python-decorators',
  level: 'intermediate',
  title: 'Uppercase String Return Decorator',
  difficulty: 'easy',
  problemStatement: 'Implement a decorator @to_uppercase that transforms any string returned by the decorated function into uppercase. Given a string S, print the decorated function output.',
  inputFormat: 'A string S.',
  outputFormat: 'Print uppercase string.',
  constraints: ['1 <= len(S) <= 10^4'],
  examples: [
    { input: 'hello world', output: 'HELLO WORLD', explanation: 'Transformed to uppercase.' },
    { input: 'python', output: 'PYTHON', explanation: 'Uppercased.' },
    { input: 'Decorator', output: 'DECORATOR', explanation: 'All uppercase.' }
  ],
  testCases: createTC('py-dec-1', [
    ['hello world', 'HELLO WORLD'],
    ['python', 'PYTHON'],
    ['Decorator', 'DECORATOR'],
    ['code mentor', 'CODE MENTOR'],
    ['ai tutor', 'AI TUTOR'],
    ['a', 'A'],
    ['antigravity', 'ANTIGRAVITY'],
    ['fast 123', 'FAST 123'],
    ['already UPPER', 'ALREADY UPPER'],
    ['abc def ghi', 'ABC DEF GHI']
  ])
});

addProblem({
  id: 'py-dec-2',
  topicId: 'python-decorators',
  level: 'intermediate',
  title: 'Call Counter Decorator',
  difficulty: 'medium',
  problemStatement: 'Implement a decorator @count_calls that prefixes each function call result with "Call <N>: <result>". Given N numbers to pass sequentially to a function that adds 5, print the decorated outputs on separate lines.',
  inputFormat: 'First line N, second line N space-separated integers.',
  outputFormat: 'N lines formatted as "Call <idx>: <val + 5>".',
  constraints: ['1 <= N <= 100'],
  examples: [
    { input: '3\n10 20 30', output: 'Call 1: 15\nCall 2: 25\nCall 3: 35', explanation: 'Calls counted and 5 added.' },
    { input: '1\n0', output: 'Call 1: 5', explanation: 'First call.' },
    { input: '2\n-5 5', output: 'Call 1: 0\nCall 2: 10', explanation: 'Negative and positive.' }
  ],
  testCases: createTC('py-dec-2', [
    ['3\n10 20 30', 'Call 1: 15\nCall 2: 25\nCall 3: 35'],
    ['1\n0', 'Call 1: 5'],
    ['2\n-5 5', 'Call 1: 0\nCall 2: 10'],
    ['4\n1 2 3 4', 'Call 1: 6\nCall 2: 7\nCall 3: 8\nCall 4: 9'],
    ['2\n100 200', 'Call 1: 105\nCall 2: 205'],
    ['3\n-10 -20 -30', 'Call 1: -5\nCall 2: -15\nCall 3: -25'],
    ['1\n95', 'Call 1: 100'],
    ['5\n0 0 0 0 0', 'Call 1: 5\nCall 2: 5\nCall 3: 5\nCall 4: 5\nCall 5: 5'],
    ['2\n45 50', 'Call 1: 50\nCall 2: 55'],
    ['3\n7 14 21', 'Call 1: 12\nCall 2: 19\nCall 3: 26']
  ])
});

addProblem({
  id: 'py-dec-3',
  topicId: 'python-decorators',
  level: 'intermediate',
  title: 'Repeat Execution Decorator',
  difficulty: 'medium',
  problemStatement: 'Implement a parameterized decorator @repeat(num_times) that executes the function num_times and returns a list of the results. Given num_times K and word W, have the decorated function return W. Print the resulting list elements separated by spaces.',
  inputFormat: 'Integer K and string W.',
  outputFormat: 'Print W repeated K times space-separated.',
  constraints: ['1 <= K <= 20'],
  examples: [
    { input: '3 echo', output: 'echo echo echo', explanation: 'Repeated 3 times.' },
    { input: '1 hello', output: 'hello', explanation: '1 time.' },
    { input: '4 ping', output: 'ping ping ping ping', explanation: '4 times.' }
  ],
  testCases: createTC('py-dec-3', [
    ['3 echo', 'echo echo echo'],
    ['1 hello', 'hello'],
    ['4 ping', 'ping ping ping ping'],
    ['2 test', 'test test'],
    ['5 *', '* * * * *'],
    ['6 go', 'go go go go go go'],
    ['2 OK', 'OK OK'],
    ['3 python', 'python python python'],
    ['1 run', 'run'],
    ['4 retry', 'retry retry retry retry']
  ])
});

// 19. python-exception-handling (3 problems)
addProblem({
  id: 'py-exc-1',
  topicId: 'python-exception-handling',
  level: 'intermediate',
  title: 'Safe Integer Division with ZeroDivisionError',
  difficulty: 'easy',
  problemStatement: 'Read two tokens A and B. Convert them to integers and divide A // B. If B is 0, catch ZeroDivisionError and print "ERROR: DIVISION BY ZERO". If either token cannot be parsed as an integer, catch ValueError and print "ERROR: INVALID INPUT". Otherwise print the integer quotient.',
  inputFormat: 'Two space-separated tokens A and B.',
  outputFormat: 'Print result or error message.',
  constraints: ['Any string tokens.'],
  examples: [
    { input: '20 4', output: '5', explanation: '20 // 4 = 5' },
    { input: '10 0', output: 'ERROR: DIVISION BY ZERO', explanation: 'Divide by zero caught.' },
    { input: 'abc 5', output: 'ERROR: INVALID INPUT', explanation: 'ValueError caught.' }
  ],
  testCases: createTC('py-exc-1', [
    ['20 4', '5'],
    ['10 0', 'ERROR: DIVISION BY ZERO'],
    ['abc 5', 'ERROR: INVALID INPUT'],
    ['15 3', '5'],
    ['100 xyz', 'ERROR: INVALID INPUT'],
    ['0 5', '0'],
    ['-10 2', '-5'],
    ['50 0', 'ERROR: DIVISION BY ZERO'],
    ['foo bar', 'ERROR: INVALID INPUT'],
    ['100 10', '10']
  ])
});

addProblem({
  id: 'py-exc-2',
  topicId: 'python-exception-handling',
  level: 'intermediate',
  title: 'Age Validator with Custom Exception',
  difficulty: 'medium',
  problemStatement: 'Define a custom exception InvalidAgeError. If age < 0 or age > 150, raise InvalidAgeError and output "ERROR: AGE OUT OF BOUNDS". Otherwise, print "VALID: <age>".',
  inputFormat: 'A single integer age.',
  outputFormat: 'Print status message.',
  constraints: ['-1000 <= age <= 1000'],
  examples: [
    { input: '25', output: 'VALID: 25', explanation: 'Age is between 0 and 150.' },
    { input: '-5', output: 'ERROR: AGE OUT OF BOUNDS', explanation: 'Negative age.' },
    { input: '180', output: 'ERROR: AGE OUT OF BOUNDS', explanation: 'Exceeds 150.' }
  ],
  testCases: createTC('py-exc-2', [
    ['25', 'VALID: 25'],
    ['-5', 'ERROR: AGE OUT OF BOUNDS'],
    ['180', 'ERROR: AGE OUT OF BOUNDS'],
    ['0', 'VALID: 0'],
    ['150', 'VALID: 150'],
    ['75', 'VALID: 75'],
    ['-1', 'ERROR: AGE OUT OF BOUNDS'],
    ['151', 'ERROR: AGE OUT OF BOUNDS'],
    ['99', 'VALID: 99'],
    ['42', 'VALID: 42']
  ])
});

addProblem({
  id: 'py-exc-3',
  topicId: 'python-exception-handling',
  level: 'intermediate',
  title: 'Parse Numeric List with Partial Recovery',
  difficulty: 'medium',
  problemStatement: 'Given N space-separated tokens, try to parse each token as an integer. If parsing succeeds, add it to the running sum. If a ValueError occurs, ignore that token and increment an invalid count. Print "Sum: <sum> Invalid: <count>".',
  inputFormat: 'First line N, second line N space-separated tokens.',
  outputFormat: 'Print "Sum: <sum> Invalid: <count>".',
  constraints: ['1 <= N <= 1000'],
  examples: [
    { input: '5\n10 abc 20 xyz 30', output: 'Sum: 60 Invalid: 2', explanation: '10+20+30=60, 2 invalid tokens.' },
    { input: '3\n1 2 3', output: 'Sum: 6 Invalid: 0', explanation: 'All valid.' },
    { input: '3\nfoo bar baz', output: 'Sum: 0 Invalid: 3', explanation: 'All invalid.' }
  ],
  testCases: createTC('py-exc-3', [
    ['5\n10 abc 20 xyz 30', 'Sum: 60 Invalid: 2'],
    ['3\n1 2 3', 'Sum: 6 Invalid: 0'],
    ['3\nfoo bar baz', 'Sum: 0 Invalid: 3'],
    ['4\n5 10 15 20', 'Sum: 50 Invalid: 0'],
    ['4\n-5 5 -10 10', 'Sum: 0 Invalid: 0'],
    ['6\na 10 b 20 c 30', 'Sum: 60 Invalid: 3'],
    ['1\n100', 'Sum: 100 Invalid: 0'],
    ['1\ninvalid', 'Sum: 0 Invalid: 1'],
    ['5\n7 7 err 7 7', 'Sum: 28 Invalid: 1'],
    ['4\n1.5 2 3.5 4', 'Sum: 6 Invalid: 2']
  ])
});

// 20. python-file-handling (3 problems)
addProblem({
  id: 'py-file-1',
  topicId: 'python-file-handling',
  level: 'intermediate',
  title: 'Word, Line, and Character Counter (wc simulation)',
  difficulty: 'easy',
  problemStatement: 'Given multiline input from stdin, count total number of lines, words, and characters. Print "Lines: <L> Words: <W> Chars: <C>".',
  inputFormat: 'Multiline text string.',
  outputFormat: 'Print "Lines: <L> Words: <W> Chars: <C>".',
  constraints: ['1 <= total chars <= 10^5'],
  examples: [
    { input: 'Hello World\nPython is awesome', output: 'Lines: 2 Words: 5 Chars: 29', explanation: '2 lines, 5 words.' },
    { input: 'Single line text', output: 'Lines: 1 Words: 3 Chars: 16', explanation: '1 line.' },
    { input: 'a\nb\nc', output: 'Lines: 3 Words: 3 Chars: 5', explanation: '3 single-letter lines.' }
  ],
  testCases: createTC('py-file-1', [
    ['Hello World\nPython is awesome', 'Lines: 2 Words: 5 Chars: 29'],
    ['Single line text', 'Lines: 1 Words: 3 Chars: 16'],
    ['a\nb\nc', 'Lines: 3 Words: 3 Chars: 5'],
    ['one\ntwo\nthree\nfour', 'Lines: 4 Words: 4 Chars: 18'],
    ['code mentor ai academy', 'Lines: 1 Words: 4 Chars: 22'],
    ['test', 'Lines: 1 Words: 1 Chars: 4'],
    ['first line\nsecond line', 'Lines: 2 Words: 4 Chars: 22'],
    ['alpha\nbeta\ngamma', 'Lines: 3 Words: 3 Chars: 16'],
    ['1 2 3\n4 5 6\n7 8 9', 'Lines: 3 Words: 9 Chars: 17'],
    ['hello', 'Lines: 1 Words: 1 Chars: 5']
  ])
});

addProblem({
  id: 'py-file-2',
  topicId: 'python-file-handling',
  level: 'intermediate',
  title: 'Find Longest Word in Input Stream',
  difficulty: 'medium',
  problemStatement: 'Read all words from input stream. Find and print the longest word. If there is a tie, print the word that appeared first.',
  inputFormat: 'A stream of words across one or more lines.',
  outputFormat: 'Print the longest word.',
  constraints: ['1 <= total words <= 10^4'],
  examples: [
    { input: 'The quick brown fox jumps over the lazy dog', output: 'quick', explanation: 'quick, brown, jumps have length 5; quick appears first.' },
    { input: 'artificial intelligence computer science', output: 'intelligence', explanation: 'intelligence is 12 characters.' },
    { input: 'a bb ccc dddd', output: 'dddd', explanation: 'dddd is 4 characters.' }
  ],
  testCases: createTC('py-file-2', [
    ['The quick brown fox jumps over the lazy dog', 'quick'],
    ['artificial intelligence computer science', 'intelligence'],
    ['a bb ccc dddd', 'dddd'],
    ['hello world python', 'python'],
    ['antigravity ide platform', 'antigravity'],
    ['cat elephant mouse', 'elephant'],
    ['one two three four five', 'three'],
    ['microservice architecture systems', 'architecture'],
    ['tiny small medium colossal', 'colossal'],
    ['apple banana cherry', 'banana']
  ])
});

addProblem({
  id: 'py-file-3',
  topicId: 'python-file-handling',
  level: 'intermediate',
  title: 'Log Parser: Count Severity Levels',
  difficulty: 'medium',
  problemStatement: 'Given a multiline log string where lines begin with a severity tag (INFO, WARN, ERROR), count the occurrences of each level. Print "INFO: <count> WARN: <count> ERROR: <count>".',
  inputFormat: 'Multiline log text.',
  outputFormat: 'Print "INFO: <i> WARN: <w> ERROR: <e>".',
  constraints: ['1 <= lines <= 1000'],
  examples: [
    { input: 'INFO Server started\nERROR Database down\nWARN High memory\nERROR Timeout', output: 'INFO: 1 WARN: 1 ERROR: 2', explanation: 'Counts by severity.' },
    { input: 'INFO Healthcheck OK\nINFO Request received', output: 'INFO: 2 WARN: 0 ERROR: 0', explanation: 'Only INFO.' },
    { input: 'WARN Disk full', output: 'INFO: 0 WARN: 1 ERROR: 0', explanation: 'Only WARN.' }
  ],
  testCases: createTC('py-file-3', [
    ['INFO Server started\nERROR Database down\nWARN High memory\nERROR Timeout', 'INFO: 1 WARN: 1 ERROR: 2'],
    ['INFO Healthcheck OK\nINFO Request received', 'INFO: 2 WARN: 0 ERROR: 0'],
    ['WARN Disk full', 'INFO: 0 WARN: 1 ERROR: 0'],
    ['ERROR 500\nERROR 404\nERROR 503', 'INFO: 0 WARN: 0 ERROR: 3'],
    ['INFO Boot\nWARN Deprecated\nINFO Ready\nWARN Slow', 'INFO: 2 WARN: 2 ERROR: 0'],
    ['INFO Ping\nWARN Spike\nERROR Crash\nINFO Recover', 'INFO: 2 WARN: 1 ERROR: 1'],
    ['ERROR Failure 1\nERROR Failure 2\nWARN Warning 1', 'INFO: 0 WARN: 1 ERROR: 2'],
    ['INFO Task 1\nINFO Task 2\nINFO Task 3', 'INFO: 3 WARN: 0 ERROR: 0'],
    ['WARN High CPU\nWARN High IO', 'INFO: 0 WARN: 2 ERROR: 0'],
    ['INFO A\nWARN B\nERROR C', 'INFO: 1 WARN: 1 ERROR: 1']
  ])
});

// 21. python-json-csv-handling (3 problems)
addProblem({
  id: 'py-json-1',
  topicId: 'python-json-csv-handling',
  level: 'intermediate',
  title: 'Parse JSON and Extract Nested Value',
  difficulty: 'easy',
  problemStatement: 'Given a JSON string representing a user object {"name": "...", "profile": {"age": ..., "city": "..."}}, parse the JSON and print "Name: <name>, City: <city>, Age: <age>".',
  inputFormat: 'A valid JSON string.',
  outputFormat: 'Print "Name: <name>, City: <city>, Age: <age>".',
  constraints: ['Valid JSON string.'],
  examples: [
    { input: '{"name": "Alice", "profile": {"age": 25, "city": "NYC"}}', output: 'Name: Alice, City: NYC, Age: 25', explanation: 'Extracted fields.' },
    { input: '{"name": "Bob", "profile": {"age": 30, "city": "London"}}', output: 'Name: Bob, City: London, Age: 30', explanation: 'Extracted Bob.' },
    { input: '{"name": "Charlie", "profile": {"age": 18, "city": "Tokyo"}}', output: 'Name: Charlie, City: Tokyo, Age: 18', explanation: 'Extracted Charlie.' }
  ],
  testCases: createTC('py-json-1', [
    ['{"name": "Alice", "profile": {"age": 25, "city": "NYC"}}', 'Name: Alice, City: NYC, Age: 25'],
    ['{"name": "Bob", "profile": {"age": 30, "city": "London"}}', 'Name: Bob, City: London, Age: 30'],
    ['{"name": "Charlie", "profile": {"age": 18, "city": "Tokyo"}}', 'Name: Charlie, City: Tokyo, Age: 18'],
    ['{"name": "David", "profile": {"age": 40, "city": "Berlin"}}', 'Name: David, City: Berlin, Age: 40'],
    ['{"name": "Emma", "profile": {"age": 22, "city": "Paris"}}', 'Name: Emma, City: Paris, Age: 22'],
    ['{"name": "Frank", "profile": {"age": 35, "city": "Sydney"}}', 'Name: Frank, City: Sydney, Age: 35'],
    ['{"name": "Grace", "profile": {"age": 29, "city": "Toronto"}}', 'Name: Grace, City: Toronto, Age: 29'],
    ['{"name": "Henry", "profile": {"age": 50, "city": "Chicago"}}', 'Name: Henry, City: Chicago, Age: 50'],
    ['{"name": "Ivy", "profile": {"age": 21, "city": "Madrid"}}', 'Name: Ivy, City: Madrid, Age: 21'],
    ['{"name": "Jack", "profile": {"age": 60, "city": "Rome"}}', 'Name: Jack, City: Rome, Age: 60']
  ])
});

addProblem({
  id: 'py-json-2',
  topicId: 'python-json-csv-handling',
  level: 'intermediate',
  title: 'Filter JSON Array by Score Threshold',
  difficulty: 'medium',
  problemStatement: 'Given an integer threshold T and a JSON array of student objects [{"name": "...", "score": ...}], filter and print the names of students with score >= T sorted alphabetically separated by space. If none, print "NONE".',
  inputFormat: 'First line T, second line JSON array string.',
  outputFormat: 'Print space-separated names or "NONE".',
  constraints: ['0 <= T <= 100'],
  examples: [
    { input: '80\n[{"name": "Alice", "score": 90}, {"name": "Bob", "score": 75}, {"name": "Charlie", "score": 85}]', output: 'Alice Charlie', explanation: 'Alice (90) and Charlie (85) >= 80.' },
    { input: '95\n[{"name": "Dan", "score": 90}]', output: 'NONE', explanation: 'None >= 95.' },
    { input: '50\n[{"name": "Zoe", "score": 60}, {"name": "Amy", "score": 70}]', output: 'Amy Zoe', explanation: 'Sorted alphabetically.' }
  ],
  testCases: createTC('py-json-2', [
    ['80\n[{"name": "Alice", "score": 90}, {"name": "Bob", "score": 75}, {"name": "Charlie", "score": 85}]', 'Alice Charlie'],
    ['95\n[{"name": "Dan", "score": 90}]', 'NONE'],
    ['50\n[{"name": "Zoe", "score": 60}, {"name": "Amy", "score": 70}]', 'Amy Zoe'],
    ['60\n[{"name": "Eve", "score": 60}, {"name": "Frank", "score": 59}]', 'Eve'],
    ['70\n[{"name": "Ken", "score": 80}, {"name": "Leo", "score": 85}]', 'Ken Leo'],
    ['100\n[{"name": "A", "score": 100}, {"name": "B", "score": 100}]', 'A B'],
    ['0\n[{"name": "X", "score": 0}, {"name": "Y", "score": 10}]', 'X Y'],
    ['85\n[{"name": "Ned", "score": 84}]', 'NONE'],
    ['75\n[{"name": "P", "score": 75}, {"name": "Q", "score": 74}]', 'P'],
    ['90\n[{"name": "Sam", "score": 95}, {"name": "Ben", "score": 92}]', 'Ben Sam']
  ])
});

addProblem({
  id: 'py-json-3',
  topicId: 'python-json-csv-handling',
  level: 'intermediate',
  title: 'CSV Header and Value Mapper',
  difficulty: 'medium',
  problemStatement: 'Given a header line and data row separated by commas, parse them and print sorted "header:value" pairs separated by spaces.',
  inputFormat: 'First line CSV headers, second line CSV data values.',
  outputFormat: 'Print space-separated sorted "header:value" pairs.',
  constraints: ['Equal number of headers and values.'],
  examples: [
    { input: 'name,age,city\nAlice,25,NYC', output: 'age:25 city:NYC name:Alice', explanation: 'Sorted by header name.' },
    { input: 'id,role\n101,admin', output: 'id:101 role:admin', explanation: 'Mapped pairs.' },
    { input: 'x,y\n10,20', output: 'x:10 y:20', explanation: '2 columns.' }
  ],
  testCases: createTC('py-json-3', [
    ['name,age,city\nAlice,25,NYC', 'age:25 city:NYC name:Alice'],
    ['id,role\n101,admin', 'id:101 role:admin'],
    ['x,y\n10,20', 'x:10 y:20'],
    ['sku,price,qty\nA1,9.99,50', 'price:9.99 qty:50 sku:A1'],
    ['make,model,year\nToyota,Camry,2022', 'make:Toyota model:Camry year:2022'],
    ['first,last\nJohn,Doe', 'first:John last:Doe'],
    ['a,b,c\n1,2,3', 'a:1 b:2 c:3'],
    ['country,code\nIndia,IN', 'code:IN country:India'],
    ['course,grade\nCS101,A', 'course:CS101 grade:A'],
    ['ip,port\n127.0.0.1,8080', 'ip:127.0.0.1 port:8080']
  ])
});

// 22. python-classes-and-objects (4 problems)
addProblem({
  id: 'py-oop-1',
  topicId: 'python-classes-and-objects',
  level: 'intermediate',
  title: 'Bank Account Class with Deposit and Withdraw',
  difficulty: 'easy',
  problemStatement: 'Implement a BankAccount class initialized with balance B. Methods: deposit(amount), withdraw(amount) (fails if amount > balance, printing "INSUFFICIENT FUNDS"). Given initial B and sequence of operations, print final balance.',
  inputFormat: 'First line initial B, second line N operations formatted as "D <amt>" or "W <amt>".',
  outputFormat: 'Print any error lines, followed by "Final Balance: <balance>".',
  constraints: ['0 <= B <= 10^7'],
  examples: [
    { input: '100\n2\nD 50\nW 30', output: 'Final Balance: 120', explanation: '100 + 50 - 30 = 120.' },
    { input: '50\n2\nW 100\nD 20', output: 'INSUFFICIENT FUNDS\nFinal Balance: 70', explanation: 'Failed withdrawal printed.' },
    { input: '0\n1\nD 500', output: 'Final Balance: 500', explanation: 'Balance is 500.' }
  ],
  testCases: createTC('py-oop-1', [
    ['100\n2\nD 50\nW 30', 'Final Balance: 120'],
    ['50\n2\nW 100\nD 20', 'INSUFFICIENT FUNDS\nFinal Balance: 70'],
    ['0\n1\nD 500', 'Final Balance: 500'],
    ['200\n3\nW 50\nW 50\nW 50', 'Final Balance: 50'],
    ['100\n2\nW 100\nW 1', 'INSUFFICIENT FUNDS\nFinal Balance: 0'],
    ['500\n2\nD 100\nD 200', 'Final Balance: 800'],
    ['1000\n1\nW 200', 'Final Balance: 800'],
    ['50\n1\nW 50', 'Final Balance: 0'],
    ['300\n3\nD 100\nW 500\nD 50', 'INSUFFICIENT FUNDS\nFinal Balance: 450'],
    ['10\n2\nW 20\nW 30', 'INSUFFICIENT FUNDS\nINSUFFICIENT FUNDS\nFinal Balance: 10']
  ])
});

addProblem({
  id: 'py-oop-2',
  topicId: 'python-classes-and-objects',
  level: 'intermediate',
  title: 'Rectangle Class with Area and Perimeter',
  difficulty: 'easy',
  problemStatement: 'Implement Rectangle(width, height) with methods area() and perimeter(). Given width and height, print "Area: <area> Perimeter: <perimeter>".',
  inputFormat: 'Two space-separated numbers width and height.',
  outputFormat: 'Print "Area: <area> Perimeter: <perimeter>".',
  constraints: ['1 <= width, height <= 10^5'],
  examples: [
    { input: '4 5', output: 'Area: 20 Perimeter: 18', explanation: '4*5=20, 2*(4+5)=18.' },
    { input: '10 10', output: 'Area: 100 Perimeter: 40', explanation: 'Square.' },
    { input: '1 2', output: 'Area: 2 Perimeter: 6', explanation: 'Small rectangle.' }
  ],
  testCases: createTC('py-oop-2', [
    ['4 5', 'Area: 20 Perimeter: 18'],
    ['10 10', 'Area: 100 Perimeter: 40'],
    ['1 2', 'Area: 2 Perimeter: 6'],
    ['7 3', 'Area: 21 Perimeter: 20'],
    ['8 8', 'Area: 64 Perimeter: 32'],
    ['15 4', 'Area: 60 Perimeter: 38'],
    ['20 10', 'Area: 200 Perimeter: 60'],
    ['6 9', 'Area: 54 Perimeter: 30'],
    ['25 4', 'Area: 100 Perimeter: 58'],
    ['12 12', 'Area: 144 Perimeter: 48']
  ])
});

addProblem({
  id: 'py-oop-3',
  topicId: 'python-classes-and-objects',
  level: 'intermediate',
  title: 'Student Grade Tracker Class',
  difficulty: 'medium',
  problemStatement: 'Create a Student(name) class with method add_grade(g) and get_gpa(). GPA is calculated as sum(grades) / len(grades). Print "Student: <name> GPA: <gpa>" rounded to 2 decimal places.',
  inputFormat: 'Name followed by integer N and N grades.',
  outputFormat: 'Print "Student: <name> GPA: <gpa>".',
  constraints: ['1 <= N <= 100', '0 <= grade <= 100'],
  examples: [
    { input: 'Alice 3 85 90 95', output: 'Student: Alice GPA: 90.00', explanation: '(85+90+95)/3 = 90.00' },
    { input: 'Bob 2 70 80', output: 'Student: Bob GPA: 75.00', explanation: 'Average 75.00' },
    { input: 'Charlie 1 100', output: 'Student: Charlie GPA: 100.00', explanation: 'Single grade.' }
  ],
  testCases: createTC('py-oop-3', [
    ['Alice 3 85 90 95', 'Student: Alice GPA: 90.00'],
    ['Bob 2 70 80', 'Student: Bob GPA: 75.00'],
    ['Charlie 1 100', 'Student: Charlie GPA: 100.00'],
    ['David 4 60 70 80 90', 'Student: David GPA: 75.00'],
    ['Emma 3 88 92 90', 'Student: Emma GPA: 90.00'],
    ['Frank 2 50 60', 'Student: Frank GPA: 55.00'],
    ['Grace 5 100 95 90 85 80', 'Student: Grace GPA: 90.00'],
    ['Henry 3 33 45 66', 'Student: Henry GPA: 48.00'],
    ['Ivy 2 78 82', 'Student: Ivy GPA: 80.00'],
    ['Jack 4 90 90 90 90', 'Student: Jack GPA: 90.00']
  ])
});

addProblem({
  id: 'py-oop-4',
  topicId: 'python-classes-and-objects',
  level: 'intermediate',
  title: 'Shopping Cart Item Calculator',
  difficulty: 'medium',
  problemStatement: 'Implement ShoppingCart class with add_item(price, qty) and apply_discount(pct). Calculate subtotal, apply discount, and print "Subtotal: <subtotal> Discount: <pct>% Total: <total>" with all numbers rounded to 2 decimal places.',
  inputFormat: 'First line N (items) and D (discount %), next N lines each contain price and qty.',
  outputFormat: 'Print "Subtotal: <sub> Discount: <D>% Total: <total>".',
  constraints: ['1 <= N <= 100', '0 <= D <= 100'],
  examples: [
    { input: '2 10\n20 2\n10 1', output: 'Subtotal: 50.00 Discount: 10% Total: 45.00', explanation: '20*2 + 10*1 = 50, 10% off is 45.' },
    { input: '1 0\n100 1', output: 'Subtotal: 100.00 Discount: 0% Total: 100.00', explanation: 'No discount.' },
    { input: '2 50\n40 1\n60 1', output: 'Subtotal: 100.00 Discount: 50% Total: 50.00', explanation: 'Half price.' }
  ],
  testCases: createTC('py-oop-4', [
    ['2 10\n20 2\n10 1', 'Subtotal: 50.00 Discount: 10% Total: 45.00'],
    ['1 0\n100 1', 'Subtotal: 100.00 Discount: 0% Total: 100.00'],
    ['2 50\n40 1\n60 1', 'Subtotal: 100.00 Discount: 50% Total: 50.00'],
    ['3 20\n10 3\n5 2\n20 1', 'Subtotal: 60.00 Discount: 20% Total: 48.00'],
    ['1 100\n50 2', 'Subtotal: 100.00 Discount: 100% Total: 0.00'],
    ['2 5\n200 1\n100 1', 'Subtotal: 300.00 Discount: 5% Total: 285.00'],
    ['1 15\n80 1', 'Subtotal: 80.00 Discount: 15% Total: 68.00'],
    ['3 0\n15 2\n25 2\n10 1', 'Subtotal: 90.00 Discount: 0% Total: 90.00'],
    ['2 25\n40 2\n20 1', 'Subtotal: 100.00 Discount: 25% Total: 75.00'],
    ['1 10\n500 1', 'Subtotal: 500.00 Discount: 10% Total: 450.00']
  ])
});

// 23. python-inheritance-and-super (3 problems)
addProblem({
  id: 'py-inh-1',
  topicId: 'python-inheritance-and-super',
  level: 'intermediate',
  title: 'Employee and Manager Inheritance',
  difficulty: 'easy',
  problemStatement: 'Implement base class Employee(name, base_salary) with get_salary() and derived class Manager(name, base_salary, bonus) overriding get_salary() using super().get_salary() + bonus. Print "Manager <name> Total Salary: <total>".',
  inputFormat: 'Name (string), base_salary (int), bonus (int).',
  outputFormat: 'Print "Manager <name> Total Salary: <total>".',
  constraints: ['1 <= base_salary <= 10^7'],
  examples: [
    { input: 'Alice 50000 10000', output: 'Manager Alice Total Salary: 60000', explanation: '50000 + 10000 = 60000.' },
    { input: 'Bob 80000 0', output: 'Manager Bob Total Salary: 80000', explanation: 'No bonus.' },
    { input: 'Charlie 100000 25000', output: 'Manager Charlie Total Salary: 125000', explanation: 'Total salary calculated.' }
  ],
  testCases: createTC('py-inh-1', [
    ['Alice 50000 10000', 'Manager Alice Total Salary: 60000'],
    ['Bob 80000 0', 'Manager Bob Total Salary: 80000'],
    ['Charlie 100000 25000', 'Manager Charlie Total Salary: 125000'],
    ['David 40000 5000', 'Manager David Total Salary: 45000'],
    ['Emma 60000 15000', 'Manager Emma Total Salary: 75000'],
    ['Frank 75000 20000', 'Manager Frank Total Salary: 95000'],
    ['Grace 90000 10000', 'Manager Grace Total Salary: 100000'],
    ['Henry 120000 30000', 'Manager Henry Total Salary: 150000'],
    ['Ivy 55000 8000', 'Manager Ivy Total Salary: 63000'],
    ['Jack 65000 12000', 'Manager Jack Total Salary: 77000']
  ])
});

addProblem({
  id: 'py-inh-2',
  topicId: 'python-inheritance-and-super',
  level: 'intermediate',
  title: 'Shape Area Hierarchy',
  difficulty: 'medium',
  problemStatement: 'Implement base class Shape with area() and derived classes Circle(radius) (area = 3.14159 * r^2) and Square(side) (area = s^2). Given shape type and dimension, print the area rounded to 2 decimal places.',
  inputFormat: '"CIRCLE <r>" or "SQUARE <s>".',
  outputFormat: 'Print area rounded to 2 decimal places.',
  constraints: ['1 <= dimension <= 1000'],
  examples: [
    { input: 'CIRCLE 5', output: '78.54', explanation: '3.14159 * 25 = 78.54' },
    { input: 'SQUARE 4', output: '16.00', explanation: '4 * 4 = 16.00' },
    { input: 'CIRCLE 10', output: '314.16', explanation: 'Circle area with r=10.' }
  ],
  testCases: createTC('py-inh-2', [
    ['CIRCLE 5', '78.54'],
    ['SQUARE 4', '16.00'],
    ['CIRCLE 10', '314.16'],
    ['SQUARE 10', '100.00'],
    ['CIRCLE 1', '3.14'],
    ['SQUARE 1', '1.00'],
    ['CIRCLE 7', '153.94'],
    ['SQUARE 12', '144.00'],
    ['CIRCLE 2', '12.57'],
    ['SQUARE 25', '625.00']
  ])
});

addProblem({
  id: 'py-inh-3',
  topicId: 'python-inheritance-and-super',
  level: 'intermediate',
  title: 'Vehicle Rental Fee Calculator',
  difficulty: 'medium',
  problemStatement: 'Implement Vehicle(days, rate_per_day) and derived LuxuryVehicle adding luxury_tax_rate (percentage on total). Calculate fee = (days * rate) * (1 + tax/100). Print "Fee: <fee>" rounded to 2 decimal places.',
  inputFormat: 'Three numbers: days (int), rate (float/int), tax (float/int).',
  outputFormat: 'Print "Fee: <fee>".',
  constraints: ['1 <= days <= 365'],
  examples: [
    { input: '3 100 20', output: 'Fee: 360.00', explanation: '3 * 100 = 300, 20% tax = 360.00' },
    { input: '1 50 0', output: 'Fee: 50.00', explanation: 'No tax.' },
    { input: '5 200 15', output: 'Fee: 1150.00', explanation: '1000 * 1.15 = 1150.00' }
  ],
  testCases: createTC('py-inh-3', [
    ['3 100 20', 'Fee: 360.00'],
    ['1 50 0', 'Fee: 50.00'],
    ['5 200 15', 'Fee: 1150.00'],
    ['2 80 10', 'Fee: 176.00'],
    ['7 150 25', 'Fee: 1312.50'],
    ['4 120 5', 'Fee: 504.00'],
    ['10 300 18', 'Fee: 3540.00'],
    ['1 250 12', 'Fee: 280.00'],
    ['6 90 8', 'Fee: 583.20'],
    ['2 500 20', 'Fee: 1200.00']
  ])
});

// 24. python-magic-dunder-methods (3 problems)
addProblem({
  id: 'py-dnd-1',
  topicId: 'python-magic-dunder-methods',
  level: 'intermediate',
  title: 'Vector2D Addition and Representation',
  difficulty: 'easy',
  problemStatement: 'Implement Vector2D(x, y) with dunder methods __add__(other) and __repr__ returning "(x, y)". Given two vectors (x1, y1) and (x2, y2), compute and print their sum.',
  inputFormat: 'Four space-separated integers x1, y1, x2, y2.',
  outputFormat: 'Print "(x1+x2, y1+y2)".',
  constraints: ['-10^5 <= coords <= 10^5'],
  examples: [
    { input: '1 2 3 4', output: '(4, 6)', explanation: '(1+3, 2+4) = (4, 6)' },
    { input: '0 0 5 5', output: '(5, 5)', explanation: 'Zero vector sum.' },
    { input: '-2 4 2 -4', output: '(0, 0)', explanation: 'Opposite vectors cancel.' }
  ],
  testCases: createTC('py-dnd-1', [
    ['1 2 3 4', '(4, 6)'],
    ['0 0 5 5', '(5, 5)'],
    ['-2 4 2 -4', '(0, 0)'],
    ['10 20 30 40', '(40, 60)'],
    ['-5 -10 -15 -20', '(-20, -30)'],
    ['100 0 0 100', '(100, 100)'],
    ['7 3 -2 5', '(5, 8)'],
    ['9 9 1 1', '(10, 10)'],
    ['12 -8 3 15', '(15, 7)'],
    ['50 50 -50 -50', '(0, 0)']
  ])
});

addProblem({
  id: 'py-dnd-2',
  topicId: 'python-magic-dunder-methods',
  level: 'intermediate',
  title: 'Custom Book Collection with __len__ and __getitem__',
  difficulty: 'medium',
  problemStatement: 'Implement BookCollection class supporting __len__() and __getitem__(index). Given N book titles and query index K (0-indexed), print "Total: <len> Item: <title>". If index is out of bounds, print "Total: <len> Item: OUT OF BOUNDS".',
  inputFormat: 'First line N and K, next N lines each contain a book title.',
  outputFormat: 'Print "Total: <len> Item: <item>".',
  constraints: ['1 <= N <= 100'],
  examples: [
    { input: '3 1\nBookA\nBookB\nBookC', output: 'Total: 3 Item: BookB', explanation: 'Index 1 is BookB.' },
    { input: '2 5\nBookX\nBookY', output: 'Total: 2 Item: OUT OF BOUNDS', explanation: 'Index 5 is out of bounds.' },
    { input: '1 0\nSoleBook', output: 'Total: 1 Item: SoleBook', explanation: 'Index 0.' }
  ],
  testCases: createTC('py-dnd-2', [
    ['3 1\nBookA\nBookB\nBookC', 'Total: 3 Item: BookB'],
    ['2 5\nBookX\nBookY', 'Total: 2 Item: OUT OF BOUNDS'],
    ['1 0\nSoleBook', 'Total: 1 Item: SoleBook'],
    ['4 3\nPython\nJava\nRust\nGo', 'Total: 4 Item: Go'],
    ['3 0\nAlpha\nBeta\nGamma', 'Total: 3 Item: Alpha'],
    ['2 2\nFirst\nSecond', 'Total: 2 Item: OUT OF BOUNDS'],
    ['5 2\nA\nB\nC\nD\nE', 'Total: 5 Item: C'],
    ['3 2\nX\nY\nZ', 'Total: 3 Item: Z'],
    ['4 4\n1\n2\n3\n4', 'Total: 4 Item: OUT OF BOUNDS'],
    ['2 0\nStart\nEnd', 'Total: 2 Item: Start']
  ])
});

addProblem({
  id: 'py-dnd-3',
  topicId: 'python-magic-dunder-methods',
  level: 'intermediate',
  title: 'Money Currency Comparison with __eq__ and __lt__',
  difficulty: 'medium',
  problemStatement: 'Implement Money(amount, currency) with __eq__ and __lt__. Two Money objects can only be compared if currency is identical (otherwise print "CURRENCY MISMATCH"). Given two amounts and currencies, print "EQUAL", "LESS", or "GREATER".',
  inputFormat: 'amt1 (float/int), curr1 (string), amt2 (float/int), curr2 (string).',
  outputFormat: 'Print "EQUAL", "LESS", "GREATER", or "CURRENCY MISMATCH".',
  constraints: ['0 <= amt <= 10^7'],
  examples: [
    { input: '100 USD 100 USD', output: 'EQUAL', explanation: 'Amounts equal.' },
    { input: '50 USD 100 USD', output: 'LESS', explanation: '50 < 100.' },
    { input: '100 USD 100 EUR', output: 'CURRENCY MISMATCH', explanation: 'Different currencies.' }
  ],
  testCases: createTC('py-dnd-3', [
    ['100 USD 100 USD', 'EQUAL'],
    ['50 USD 100 USD', 'LESS'],
    ['100 USD 100 EUR', 'CURRENCY MISMATCH'],
    ['200 EUR 150 EUR', 'GREATER'],
    ['0 GBP 0 GBP', 'EQUAL'],
    ['75 INR 100 INR', 'LESS'],
    ['500 JPY 300 USD', 'CURRENCY MISMATCH'],
    ['1000 CAD 1000 CAD', 'EQUAL'],
    ['80 AUD 120 AUD', 'LESS'],
    ['45 CHF 40 CHF', 'GREATER']
  ])
});

// 25. python-regular-expressions (3 problems)
addProblem({
  id: 'py-re-1',
  topicId: 'python-regular-expressions',
  level: 'intermediate',
  title: 'Extract Valid Email Addresses',
  difficulty: 'easy',
  problemStatement: 'Given a text string, use regular expressions (re module) to extract all valid email addresses ([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}). Print extracted emails separated by space. If none, print "NONE".',
  inputFormat: 'A string of text.',
  outputFormat: 'Print space-separated emails or "NONE".',
  constraints: ['1 <= len(S) <= 10^4'],
  examples: [
    { input: 'Contact us at info@example.com or support@test.org for help', output: 'info@example.com support@test.org', explanation: 'Extracted emails.' },
    { input: 'No emails here at all', output: 'NONE', explanation: 'No emails.' },
    { input: 'Send to user123@domain.co.uk now', output: 'user123@domain.co.uk', explanation: 'Valid subdomains.' }
  ],
  testCases: createTC('py-re-1', [
    ['Contact us at info@example.com or support@test.org for help', 'info@example.com support@test.org'],
    ['No emails here at all', 'NONE'],
    ['Send to user123@domain.co.uk now', 'user123@domain.co.uk'],
    ['admin@site.com', 'admin@site.com'],
    ['hello @world not an email', 'NONE'],
    ['email: alice@work.com, bob@home.net', 'alice@work.com bob@home.net'],
    ['test@test.io is live', 'test@test.io'],
    ['invalid@.com missing domain', 'NONE'],
    ['one@a.com two@b.org three@c.net', 'one@a.com two@b.org three@c.net'],
    ['feedback@service.com', 'feedback@service.com']
  ])
});

addProblem({
  id: 'py-re-2',
  topicId: 'python-regular-expressions',
  level: 'intermediate',
  title: 'Validate Phone Number Format',
  difficulty: 'medium',
  problemStatement: 'Validate if phone numbers match standard formats: XXX-XXX-XXXX or (XXX) XXX-XXXX. Print "VALID" or "INVALID".',
  inputFormat: 'A phone number string.',
  outputFormat: 'Print "VALID" or "INVALID".',
  constraints: ['String length <= 50'],
  examples: [
    { input: '123-456-7890', output: 'VALID', explanation: 'Matches XXX-XXX-XXXX.' },
    { input: '(123) 456-7890', output: 'VALID', explanation: 'Matches (XXX) XXX-XXXX.' },
    { input: '1234567890', output: 'INVALID', explanation: 'Missing delimiters.' }
  ],
  testCases: createTC('py-re-2', [
    ['123-456-7890', 'VALID'],
    ['(123) 456-7890', 'VALID'],
    ['1234567890', 'INVALID'],
    ['987-654-3210', 'VALID'],
    ['(800) 555-0199', 'VALID'],
    ['12-345-6789', 'INVALID'],
    ['(123)456-7890', 'INVALID'],
    ['555-555-5555', 'VALID'],
    ['abc-def-ghij', 'INVALID'],
    ['(999) 999-9999', 'VALID']
  ])
});

addProblem({
  id: 'py-re-3',
  topicId: 'python-regular-expressions',
  level: 'intermediate',
  title: 'Extract and Sum All Numbers in Text',
  difficulty: 'medium',
  problemStatement: 'Given an arbitrary text containing words and numbers, extract all integers using re.findall(r"\\d+", text) and compute their sum.',
  inputFormat: 'A string of text.',
  outputFormat: 'Print the integer sum of all numbers.',
  constraints: ['1 <= len(text) <= 10^4'],
  examples: [
    { input: 'I bought 3 apples, 5 bananas, and 12 oranges', output: '20', explanation: '3 + 5 + 12 = 20.' },
    { input: 'No numbers here', output: '0', explanation: 'Sum 0.' },
    { input: 'Order 100 total 250 fee 15', output: '365', explanation: '100 + 250 + 15 = 365.' }
  ],
  testCases: createTC('py-re-3', [
    ['I bought 3 apples, 5 bananas, and 12 oranges', '20'],
    ['No numbers here', '0'],
    ['Order 100 total 250 fee 15', '365'],
    ['Score: 10, 20, 30', '60'],
    ['1 2 3 4 5', '15'],
    ['text with 0 zeroes', '0'],
    ['box1 has 50 items and box2 has 50 items', '103'],
    ['42', '42'],
    ['abc 10 def 20 ghi 30 jkl 40', '100'],
    ['year 2026 month 10 day 7', '2043']
  ])
});

// 26. python-collections-module (3 problems)
addProblem({
  id: 'py-col-1',
  topicId: 'python-collections-module',
  level: 'intermediate',
  title: 'Top K Most Frequent Elements with Counter',
  difficulty: 'medium',
  problemStatement: 'Given N integers and K, find the top K most frequent elements using collections.Counter. Print the elements sorted by frequency descending. In case of tie, sort by element value ascending.',
  inputFormat: 'First line N and K, second line N space-separated integers.',
  outputFormat: 'Print space-separated top K elements.',
  constraints: ['1 <= K <= N <= 10^5'],
  examples: [
    { input: '6 2\n1 1 1 2 2 3', output: '1 2', explanation: '1 occurs 3 times, 2 occurs 2 times.' },
    { input: '4 1\n5 5 5 5', output: '5', explanation: 'Only 5.' },
    { input: '6 3\n1 2 2 3 3 4', output: '2 3 1', explanation: '2 and 3 tied at freq 2 (sorted 2 then 3), 1 and 4 tied at freq 1 (sorted 1).' }
  ],
  testCases: createTC('py-col-1', [
    ['6 2\n1 1 1 2 2 3', '1 2'],
    ['4 1\n5 5 5 5', '5'],
    ['6 3\n1 2 2 3 3 4', '2 3 1'],
    ['5 2\n10 20 10 20 30', '10 20'],
    ['3 3\n3 2 1', '1 2 3'],
    ['7 2\n4 4 4 2 2 1 1', '4 1'],
    ['5 1\n9 8 7 9 9', '9'],
    ['8 3\n1 1 2 2 3 3 3 4', '3 1 2'],
    ['4 2\n7 8 8 7', '7 8'],
    ['6 2\n5 5 6 6 6 7', '6 5']
  ])
});

addProblem({
  id: 'py-col-2',
  topicId: 'python-collections-module',
  level: 'intermediate',
  title: 'Group Anagrams with defaultdict',
  difficulty: 'medium',
  problemStatement: 'Given N lowercase words, group words that are anagrams of each other using collections.defaultdict(list). Sort words within each group, and sort groups by their first word. Print each group separated by spaces on a new line.',
  inputFormat: 'First line N, second line N space-separated words.',
  outputFormat: 'Print each group of anagrams on a new line.',
  constraints: ['1 <= N <= 1000'],
  examples: [
    { input: '6\neat tea tan ate nat bat', output: 'ate eat tea\nbat\nnat tan', explanation: 'Groups sorted.' },
    { input: '3\na b c', output: 'a\nb\nc', explanation: 'No anagrams.' },
    { input: '2\nab ba', output: 'ab ba', explanation: 'ab and ba are anagrams.' }
  ],
  testCases: createTC('py-col-2', [
    ['6\neat tea tan ate nat bat', 'ate eat tea\nbat\nnat tan'],
    ['3\na b c', 'a\nb\nc'],
    ['2\nab ba', 'ab ba'],
    ['4\nlisten silent enlist stone', 'enlist listen silent\nstone'],
    ['3\ncat dog rat', 'cat\ndog\nrat'],
    ['4\nrace care acer car', 'acer care race\ncar'],
    ['2\nhello world', 'hello\nworld'],
    ['3\nopt top pot', 'opt pot top'],
    ['4\nstop spot post tops', 'post spot stop tops'],
    ['1\nsolo', 'solo']
  ])
});

addProblem({
  id: 'py-col-3',
  topicId: 'python-collections-module',
  level: 'intermediate',
  title: 'Sliding Window Maximum Using deque',
  difficulty: 'hard',
  problemStatement: 'Given an array of N integers and window size K, find the maximum element in each sliding window of size K moving from left to right using collections.deque in O(N) time. Print space-separated maximums.',
  inputFormat: 'First line N and K, second line N space-separated integers.',
  outputFormat: 'Print space-separated window maximums.',
  constraints: ['1 <= K <= N <= 10^5'],
  examples: [
    { input: '8 3\n1 3 -1 -3 5 3 6 7', output: '3 3 5 5 6 7', explanation: 'Windows of size 3 maximums.' },
    { input: '4 2\n1 2 3 4', output: '2 3 4', explanation: 'Windows of size 2.' },
    { input: '1 1\n42', output: '42', explanation: 'Single element.' }
  ],
  testCases: createTC('py-col-3', [
    ['8 3\n1 3 -1 -3 5 3 6 7', '3 3 5 5 6 7'],
    ['4 2\n1 2 3 4', '2 3 4'],
    ['1 1\n42', '42'],
    ['5 1\n5 4 3 2 1', '5 4 3 2 1'],
    ['5 5\n1 5 2 4 3', '5'],
    ['6 3\n9 8 7 6 5 4', '9 8 7 6'],
    ['6 2\n10 -10 20 -20 30 -30', '10 20 20 30 30'],
    ['4 3\n1 3 1 2', '3 3'],
    ['5 2\n4 4 4 4 4', '4 4 4 4'],
    ['7 4\n1 2 3 4 3 2 1', '4 4 4 4']
  ])
});

console.log('Processed intermediate python problems. Total so far:', problems.length);

// -------------------------------------------------------------
// ADVANCED
// -------------------------------------------------------------

// 27. python-metaclasses (2 problems)
addProblem({
  id: 'py-meta-1',
  topicId: 'python-metaclasses',
  level: 'advanced',
  title: 'Enforce Required Methods in Metaclass',
  difficulty: 'medium',
  problemStatement: 'Implement a metaclass InterfaceMeta that checks whether classes have implemented a required method execute(). Given class definitions, if execute is present print "VALID", otherwise print "MISSING: execute".',
  inputFormat: 'Class name and boolean has_execute (1 or 0).',
  outputFormat: 'Print "VALID" or "MISSING: execute".',
  constraints: ['Simple flag input.'],
  examples: [
    { input: 'Worker 1', output: 'VALID', explanation: 'execute implemented.' },
    { input: 'LazyWorker 0', output: 'MISSING: execute', explanation: 'execute missing.' },
    { input: 'Task 1', output: 'VALID', explanation: 'Implemented.' }
  ],
  testCases: createTC('py-meta-1', [
    ['Worker 1', 'VALID'],
    ['LazyWorker 0', 'MISSING: execute'],
    ['Task 1', 'VALID'],
    ['Job 0', 'MISSING: execute'],
    ['Pipeline 1', 'VALID'],
    ['Runner 1', 'VALID'],
    ['Empty 0', 'MISSING: execute'],
    ['Process 1', 'VALID'],
    ['Step 0', 'MISSING: execute'],
    ['Flow 1', 'VALID']
  ])
});

addProblem({
  id: 'py-meta-2',
  topicId: 'python-metaclasses',
  level: 'advanced',
  title: 'Uppercase Attribute Names Metaclass',
  difficulty: 'medium',
  problemStatement: 'Implement an UpperAttrMeta metaclass that transforms all user-defined class attribute names to uppercase. Given attribute name and value, print "<UPPER_KEY>=<val>".',
  inputFormat: 'attributeName (string) and attributeValue (string).',
  outputFormat: 'Print "<ATTR_NAME>=<val>".',
  constraints: ['1 <= len <= 50'],
  examples: [
    { input: 'name Alice', output: 'NAME=Alice', explanation: 'Name transformed to NAME.' },
    { input: 'role admin', output: 'ROLE=admin', explanation: 'role transformed to ROLE.' },
    { input: 'host localhost', output: 'HOST=localhost', explanation: 'host transformed to HOST.' }
  ],
  testCases: createTC('py-meta-2', [
    ['name Alice', 'NAME=Alice'],
    ['role admin', 'ROLE=admin'],
    ['host localhost', 'HOST=localhost'],
    ['port 8080', 'PORT=8080'],
    ['version 3.12', 'VERSION=3.12'],
    ['debug true', 'DEBUG=true'],
    ['user guest', 'USER=guest'],
    ['status ok', 'STATUS=ok'],
    ['env prod', 'ENV=prod'],
    ['db postgres', 'DB=postgres']
  ])
});

// 28. python-descriptors-protocol (2 problems)
addProblem({
  id: 'py-desc-1',
  topicId: 'python-descriptors-protocol',
  level: 'advanced',
  title: 'Positive Number Descriptor Validator',
  difficulty: 'medium',
  problemStatement: 'Implement a descriptor PositiveNumber that raises ValueError("Must be positive") when assigned a non-positive value (<= 0). Given an integer value, print "ACCEPTED: <val>" or "REJECTED: MUST BE POSITIVE".',
  inputFormat: 'An integer V.',
  outputFormat: 'Print validation outcome.',
  constraints: ['-10^9 <= V <= 10^9'],
  examples: [
    { input: '42', output: 'ACCEPTED: 42', explanation: 'Positive value.' },
    { input: '-5', output: 'REJECTED: MUST BE POSITIVE', explanation: 'Negative value.' },
    { input: '0', output: 'REJECTED: MUST BE POSITIVE', explanation: 'Zero is not positive.' }
  ],
  testCases: createTC('py-desc-1', [
    ['42', 'ACCEPTED: 42'],
    ['-5', 'REJECTED: MUST BE POSITIVE'],
    ['0', 'REJECTED: MUST BE POSITIVE'],
    ['1', 'ACCEPTED: 1'],
    ['-1', 'REJECTED: MUST BE POSITIVE'],
    ['1000', 'ACCEPTED: 1000'],
    ['-1000', 'REJECTED: MUST BE POSITIVE'],
    ['99', 'ACCEPTED: 99'],
    ['-50', 'REJECTED: MUST BE POSITIVE'],
    ['500', 'ACCEPTED: 500']
  ])
});

addProblem({
  id: 'py-desc-2',
  topicId: 'python-descriptors-protocol',
  level: 'advanced',
  title: 'Typed String Descriptor',
  difficulty: 'medium',
  problemStatement: 'Implement a descriptor TypedString(max_length) that enforces string type and maximum character length. Given max_length M and string S, print "ACCEPTED" if len(S) <= M, else "REJECTED: LENGTH EXCEEDED".',
  inputFormat: 'Integer M and string S.',
  outputFormat: 'Print "ACCEPTED" or "REJECTED: LENGTH EXCEEDED".',
  constraints: ['1 <= M <= 100'],
  examples: [
    { input: '5 hello', output: 'ACCEPTED', explanation: 'len(hello) == 5 <= 5.' },
    { input: '3 test', output: 'REJECTED: LENGTH EXCEEDED', explanation: 'len(test) == 4 > 3.' },
    { input: '10 python', output: 'ACCEPTED', explanation: 'len(python) == 6 <= 10.' }
  ],
  testCases: createTC('py-desc-2', [
    ['5 hello', 'ACCEPTED'],
    ['3 test', 'REJECTED: LENGTH EXCEEDED'],
    ['10 python', 'ACCEPTED'],
    ['2 hi', 'ACCEPTED'],
    ['1 abc', 'REJECTED: LENGTH EXCEEDED'],
    ['7 computer', 'REJECTED: LENGTH EXCEEDED'],
    ['8 computer', 'ACCEPTED'],
    ['4 code', 'ACCEPTED'],
    ['5 programming', 'REJECTED: LENGTH EXCEEDED'],
    ['20 short', 'ACCEPTED']
  ])
});

// 29. python-multiprocessing (3 problems)
addProblem({
  id: 'py-mp-1',
  topicId: 'python-multiprocessing',
  level: 'advanced',
  title: 'Chunked Parallel Sum Simulation',
  difficulty: 'medium',
  problemStatement: 'Simulate parallel array reduction: Split an array of N integers into 2 chunks, compute the sum of each chunk independently, then combine them. Print "Chunk1: <c1> Chunk2: <c2> Total: <total>".',
  inputFormat: 'First line N, second line N space-separated integers.',
  outputFormat: 'Print "Chunk1: <c1> Chunk2: <c2> Total: <total>".',
  constraints: ['2 <= N <= 10^5'],
  examples: [
    { input: '4\n1 2 3 4', output: 'Chunk1: 3 Chunk2: 7 Total: 10', explanation: 'Chunk1: 1+2=3, Chunk2: 3+4=7, Total: 10.' },
    { input: '5\n10 20 30 40 50', output: 'Chunk1: 60 Chunk2: 90 Total: 150', explanation: 'First 3 (10, 20, 30) = 60, rest (40, 50) = 90.' },
    { input: '2\n5 5', output: 'Chunk1: 5 Chunk2: 5 Total: 10', explanation: 'Halves.' }
  ],
  testCases: createTC('py-mp-1', [
    ['4\n1 2 3 4', 'Chunk1: 3 Chunk2: 7 Total: 10'],
    ['5\n10 20 30 40 50', 'Chunk1: 60 Chunk2: 90 Total: 150'],
    ['2\n5 5', 'Chunk1: 5 Chunk2: 5 Total: 10'],
    ['6\n1 1 1 2 2 2', 'Chunk1: 3 Chunk2: 6 Total: 9'],
    ['4\n-5 5 -10 10', 'Chunk1: 0 Chunk2: 0 Total: 0'],
    ['3\n10 20 30', 'Chunk1: 30 Chunk2: 30 Total: 60'],
    ['4\n100 200 300 400', 'Chunk1: 300 Chunk2: 700 Total: 1000'],
    ['2\n-1 -1', 'Chunk1: -1 Chunk2: -1 Total: -2'],
    ['5\n2 4 6 8 10', 'Chunk1: 12 Chunk2: 18 Total: 30'],
    ['4\n7 8 9 10', 'Chunk1: 15 Chunk2: 19 Total: 34']
  ])
});

addProblem({
  id: 'py-mp-2',
  topicId: 'python-multiprocessing',
  level: 'advanced',
  title: 'Worker Pool Task Mapping Simulation',
  difficulty: 'medium',
  problemStatement: 'Simulate multiprocessing.Pool.map(square, data): Given N integers, compute their squares in task order. Print the squared results space-separated.',
  inputFormat: 'First line N, second line N space-separated integers.',
  outputFormat: 'Print space-separated squared integers.',
  constraints: ['1 <= N <= 10^4'],
  examples: [
    { input: '3\n2 3 4', output: '4 9 16', explanation: 'Squares computed.' },
    { input: '2\n10 20', output: '100 400', explanation: '10^2, 20^2.' },
    { input: '1\n5', output: '25', explanation: '5^2.' }
  ],
  testCases: createTC('py-mp-2', [
    ['3\n2 3 4', '4 9 16'],
    ['2\n10 20', '100 400'],
    ['1\n5', '25'],
    ['4\n1 5 7 9', '1 25 49 81'],
    ['3\n-2 -3 -4', '4 9 16'],
    ['5\n0 1 2 3 4', '0 1 4 9 16'],
    ['4\n6 8 10 12', '36 64 100 144'],
    ['2\n11 12', '121 144'],
    ['3\n15 20 25', '225 400 625'],
    ['4\n3 6 9 12', '9 36 81 144']
  ])
});

addProblem({
  id: 'py-mp-3',
  topicId: 'python-multiprocessing',
  level: 'advanced',
  title: 'Producer-Consumer Queue Simulation',
  difficulty: 'hard',
  problemStatement: 'Simulate a multiprocessing.Queue with capacity C. Commands: "PRODUCE <item>" (adds item to queue, fails with "QUEUE FULL" if size == C), "CONSUME" (removes and prints front item, fails with "QUEUE EMPTY" if size == 0). Execute N commands.',
  inputFormat: 'First line capacity C and command count N, next N lines commands.',
  outputFormat: 'Print output of each CONSUME or error message on separate lines.',
  constraints: ['1 <= C <= 100', '1 <= N <= 500'],
  examples: [
    { input: '2 4\nPRODUCE A\nPRODUCE B\nPRODUCE C\nCONSUME', output: 'QUEUE FULL\nA', explanation: 'Queue full on C, first consume gets A.' },
    { input: '1 2\nCONSUME\nPRODUCE X', output: 'QUEUE EMPTY', explanation: 'Empty consume.' },
    { input: '2 3\nPRODUCE 1\nCONSUME\nCONSUME', output: '1\nQUEUE EMPTY', explanation: 'Consume 1, then empty.' }
  ],
  testCases: createTC('py-mp-3', [
    ['2 4\nPRODUCE A\nPRODUCE B\nPRODUCE C\nCONSUME', 'QUEUE FULL\nA'],
    ['1 2\nCONSUME\nPRODUCE X', 'QUEUE EMPTY'],
    ['2 3\nPRODUCE 1\nCONSUME\nCONSUME', '1\nQUEUE EMPTY'],
    ['3 4\nPRODUCE 10\nPRODUCE 20\nCONSUME\nCONSUME', '10\n20'],
    ['1 3\nPRODUCE A\nPRODUCE B\nCONSUME', 'QUEUE FULL\nA'],
    ['2 3\nCONSUME\nPRODUCE K\nCONSUME', 'QUEUE EMPTY\nK'],
    ['2 4\nPRODUCE X\nPRODUCE Y\nCONSUME\nCONSUME', 'X\nY'],
    ['1 2\nPRODUCE M\nCONSUME', 'M'],
    ['3 3\nCONSUME\nCONSUME\nCONSUME', 'QUEUE EMPTY\nQUEUE EMPTY\nQUEUE EMPTY'],
    ['2 5\nPRODUCE 1\nPRODUCE 2\nPRODUCE 3\nCONSUME\nCONSUME', 'QUEUE FULL\n1\n2']
  ])
});

// 30. python-asyncio-event-loop (3 problems)
addProblem({
  id: 'py-async-1',
  topicId: 'python-asyncio-event-loop',
  level: 'advanced',
  title: 'Async Simulated Data Fetch',
  difficulty: 'medium',
  problemStatement: 'Simulate async coroutine fetch_data(id, delay) returning "Fetched <id> in <delay>s". Given N tasks with id and delay, sort completed results by delay (fastest first). Print results separated by space.',
  inputFormat: 'First line N, next N lines each contain id (string) and delay (int).',
  outputFormat: 'Print space-separated task IDs in completion order.',
  constraints: ['1 <= N <= 100'],
  examples: [
    { input: '3\nA 3\nB 1\nC 2', output: 'B C A', explanation: 'B (1s) finishes first, then C (2s), then A (3s).' },
    { input: '2\nX 5\nY 2', output: 'Y X', explanation: 'Y finishes first.' },
    { input: '1\nZ 1', output: 'Z', explanation: 'Single task.' }
  ],
  testCases: createTC('py-async-1', [
    ['3\nA 3\nB 1\nC 2', 'B C A'],
    ['2\nX 5\nY 2', 'Y X'],
    ['1\nZ 1', 'Z'],
    ['4\nT1 4\nT2 1\nT3 3\nT4 2', 'T2 T4 T3 T1'],
    ['3\nP 10\nQ 5\nR 2', 'R Q P'],
    ['2\nM 1\nN 2', 'M N'],
    ['4\nA 100\nB 20\nC 50\nD 10', 'D B C A'],
    ['3\nX 3\nY 3\nZ 1', 'Z X Y'],
    ['2\nK1 5\nK2 5', 'K1 K2'],
    ['5\nE 5\nD 4\nC 3\nB 2\nA 1', 'A B C D E']
  ])
});

addProblem({
  id: 'py-async-2',
  topicId: 'python-asyncio-event-loop',
  level: 'advanced',
  title: 'Async Task Gather and Aggregation',
  difficulty: 'medium',
  problemStatement: 'Simulate asyncio.gather(*tasks): Run N worker tasks that produce integer metrics. Calculate the sum, average (2 decimals), and max of all metrics. Print "Sum: <sum> Avg: <avg> Max: <max>".',
  inputFormat: 'First line N, second line N space-separated integers.',
  outputFormat: 'Print "Sum: <sum> Avg: <avg> Max: <max>".',
  constraints: ['1 <= N <= 1000'],
  examples: [
    { input: '4\n10 20 30 40', output: 'Sum: 100 Avg: 25.00 Max: 40', explanation: 'Aggregated metrics.' },
    { input: '2\n5 15', output: 'Sum: 20 Avg: 10.00 Max: 15', explanation: 'Sum 20, max 15.' },
    { input: '1\n50', output: 'Sum: 50 Avg: 50.00 Max: 50', explanation: 'Single task.' }
  ],
  testCases: createTC('py-async-2', [
    ['4\n10 20 30 40', 'Sum: 100 Avg: 25.00 Max: 40'],
    ['2\n5 15', 'Sum: 20 Avg: 10.00 Max: 15'],
    ['1\n50', 'Sum: 50 Avg: 50.00 Max: 50'],
    ['3\n100 200 300', 'Sum: 600 Avg: 200.00 Max: 300'],
    ['5\n1 2 3 4 5', 'Sum: 15 Avg: 3.00 Max: 5'],
    ['4\n25 25 25 25', 'Sum: 100 Avg: 25.00 Max: 25'],
    ['2\n0 100', 'Sum: 100 Avg: 50.00 Max: 100'],
    ['3\n7 14 21', 'Sum: 42 Avg: 14.00 Max: 21'],
    ['5\n10 50 20 40 30', 'Sum: 150 Avg: 30.00 Max: 50'],
    ['4\n-10 10 -20 20', 'Sum: 0 Avg: 0.00 Max: 20']
  ])
});

addProblem({
  id: 'py-async-3',
  topicId: 'python-asyncio-event-loop',
  level: 'advanced',
  title: 'Async Pipeline with Timeout Handling',
  difficulty: 'hard',
  problemStatement: 'Simulate asyncio.wait_for(coro, timeout=T): For N tasks each with name and execution time in ms, if time > T, result is "TIMEOUT", otherwise "COMPLETED". Print "<name>:<status>" separated by spaces.',
  inputFormat: 'First line T (timeout in ms) and N, next N lines each contain name and time.',
  outputFormat: 'Print space-separated "<name>:<status>" pairs.',
  constraints: ['1 <= T <= 10000', '1 <= N <= 100'],
  examples: [
    { input: '100 3\nTaskA 50\nTaskB 150\nTaskC 80', output: 'TaskA:COMPLETED TaskB:TIMEOUT TaskC:COMPLETED', explanation: 'TaskB timed out.' },
    { input: '50 2\nT1 20\nT2 30', output: 'T1:COMPLETED T2:COMPLETED', explanation: 'Both under 50ms.' },
    { input: '20 1\nT1 50', output: 'T1:TIMEOUT', explanation: 'Timed out.' }
  ],
  testCases: createTC('py-async-3', [
    ['100 3\nTaskA 50\nTaskB 150\nTaskC 80', 'TaskA:COMPLETED TaskB:TIMEOUT TaskC:COMPLETED'],
    ['50 2\nT1 20\nT2 30', 'T1:COMPLETED T2:COMPLETED'],
    ['20 1\nT1 50', 'T1:TIMEOUT'],
    ['200 4\nA 100\nB 250\nC 150\nD 201', 'A:COMPLETED B:TIMEOUT C:COMPLETED D:TIMEOUT'],
    ['300 2\nX 300\nY 301', 'X:COMPLETED Y:TIMEOUT'],
    ['10 2\nP 5\nQ 15', 'P:COMPLETED Q:TIMEOUT'],
    ['500 3\nFast 50\nMed 200\nSlow 600', 'Fast:COMPLETED Med:COMPLETED Slow:TIMEOUT'],
    ['1000 1\nJob 500', 'Job:COMPLETED'],
    ['50 3\nT1 40\nT2 60\nT3 50', 'T1:COMPLETED T2:TIMEOUT T3:COMPLETED'],
    ['100 2\nAlpha 99\nBeta 101', 'Alpha:COMPLETED Beta:TIMEOUT']
  ])
});

// 31. python-socket-programming (3 problems)
addProblem({
  id: 'py-sock-1',
  topicId: 'python-socket-programming',
  level: 'advanced',
  title: 'Length-Prefixed Network Framing Protocol',
  difficulty: 'medium',
  problemStatement: 'In network socket protocols, messages are framed with a length prefix. Given a stream with length prefix N followed by N characters, extract and print the payload. If available chars < N, print "CORRUPT FRAME".',
  inputFormat: 'First token N (integer), followed by string payload.',
  outputFormat: 'Print extracted payload or "CORRUPT FRAME".',
  constraints: ['1 <= N <= 10^4'],
  examples: [
    { input: '5 HELLO', output: 'HELLO', explanation: 'Exact length match.' },
    { input: '10 SHORT', output: 'CORRUPT FRAME', explanation: 'Only 5 chars provided for 10 len.' },
    { input: '4 DATAREST', output: 'DATA', explanation: 'First 4 chars extracted.' }
  ],
  testCases: createTC('py-sock-1', [
    ['5 HELLO', 'HELLO'],
    ['10 SHORT', 'CORRUPT FRAME'],
    ['4 DATAREST', 'DATA'],
    ['1 X', 'X'],
    ['6 PYTHONCODE', 'PYTHON'],
    ['3 AB', 'CORRUPT FRAME'],
    ['8 PROTOCOL', 'PROTOCOL'],
    ['0 ', ''],
    ['4 12345', '1234'],
    ['7 NETWORK', 'NETWORK']
  ])
});

addProblem({
  id: 'py-sock-2',
  topicId: 'python-socket-programming',
  level: 'advanced',
  title: 'HTTP Request Line and Header Parser',
  difficulty: 'medium',
  problemStatement: 'Parse an HTTP request: First line "METHOD PATH HTTP/1.1", followed by headers "Key: Value". Print "Method: <METHOD>, Path: <PATH>, Host: <HOST>".',
  inputFormat: 'Multiline HTTP request string.',
  outputFormat: 'Print "Method: <METHOD>, Path: <PATH>, Host: <HOST>".',
  constraints: ['Valid HTTP request format.'],
  examples: [
    { input: 'GET /api/users HTTP/1.1\nHost: example.com\nUser-Agent: Client', output: 'Method: GET, Path: /api/users, Host: example.com', explanation: 'Parsed method, path, host.' },
    { input: 'POST /submit HTTP/1.1\nHost: api.test.org\nContent-Type: json', output: 'Method: POST, Path: /submit, Host: api.test.org', explanation: 'Parsed POST request.' },
    { input: 'GET /index.html HTTP/1.1\nHost: localhost:8080', output: 'Method: GET, Path: /index.html, Host: localhost:8080', explanation: 'Parsed local request.' }
  ],
  testCases: createTC('py-sock-2', [
    ['GET /api/users HTTP/1.1\nHost: example.com\nUser-Agent: Client', 'Method: GET, Path: /api/users, Host: example.com'],
    ['POST /submit HTTP/1.1\nHost: api.test.org\nContent-Type: json', 'Method: POST, Path: /submit, Host: api.test.org'],
    ['GET /index.html HTTP/1.1\nHost: localhost:8080', 'Method: GET, Path: /index.html, Host: localhost:8080'],
    ['DELETE /item/5 HTTP/1.1\nHost: store.com', 'Method: DELETE, Path: /item/5, Host: store.com'],
    ['PUT /data HTTP/1.1\nHost: cloud.net', 'Method: PUT, Path: /data, Host: cloud.net'],
    ['GET /health HTTP/1.1\nHost: 127.0.0.1', 'Method: GET, Path: /health, Host: 127.0.0.1'],
    ['HEAD /asset.png HTTP/1.1\nHost: cdn.site.com', 'Method: HEAD, Path: /asset.png, Host: cdn.site.com'],
    ['POST /auth/login HTTP/1.1\nHost: auth.domain.io', 'Method: POST, Path: /auth/login, Host: auth.domain.io'],
    ['GET / HTTP/1.1\nHost: google.com', 'Method: GET, Path: /, Host: google.com'],
    ['PATCH /profile HTTP/1.1\nHost: app.io', 'Method: PATCH, Path: /profile, Host: app.io']
  ])
});

addProblem({
  id: 'py-sock-3',
  topicId: 'python-socket-programming',
  level: 'advanced',
  title: 'Redis RESP Protocol Parser',
  difficulty: 'hard',
  problemStatement: 'Parse a Redis Serialization Protocol (RESP) Simple String ("+OK\\r\\n") or Integer (":1000\\r\\n"). If "+<str>", print "STRING: <str>". If ":<int>", print "INT: <int>". If "-<err>", print "ERROR: <err>".',
  inputFormat: 'A single RESP formatted line.',
  outputFormat: 'Print "STRING: <str>", "INT: <int>", or "ERROR: <err>".',
  constraints: ['Valid RESP format.'],
  examples: [
    { input: '+OK', output: 'STRING: OK', explanation: 'Simple string OK.' },
    { input: ':1000', output: 'INT: 1000', explanation: 'Integer 1000.' },
    { input: '-Error unknown command', output: 'ERROR: Error unknown command', explanation: 'Error message.' }
  ],
  testCases: createTC('py-sock-3', [
    ['+OK', 'STRING: OK'],
    [':1000', 'INT: 1000'],
    ['-Error unknown command', 'ERROR: Error unknown command'],
    ['+PONG', 'STRING: PONG'],
    [':42', 'INT: 42'],
    [':0', 'INT: 0'],
    [':-5', 'INT: -5'],
    ['+QUEUED', 'STRING: QUEUED'],
    ['-WRONGTYPE Operation against key', 'ERROR: WRONGTYPE Operation against key'],
    ['+HELLO', 'STRING: HELLO']
  ])
});

// 32. python-database-sqlite3 (3 problems)
addProblem({
  id: 'py-sql-1',
  topicId: 'python-database-sqlite3',
  level: 'advanced',
  title: 'In-Memory SQLite User Query',
  difficulty: 'easy',
  problemStatement: 'Using sqlite3 in-memory database: Create table users(id INTEGER, name TEXT, age INTEGER). Insert N user records. Query users with age >= 18 sorted by id ascending. Print space-separated names. If none, print "NONE".',
  inputFormat: 'First line N, next N lines each contain id name age.',
  outputFormat: 'Print space-separated names or "NONE".',
  constraints: ['1 <= N <= 1000'],
  examples: [
    { input: '3\n1 Alice 20\n2 Bob 15\n3 Charlie 25', output: 'Alice Charlie', explanation: 'Alice (20) and Charlie (25) >= 18.' },
    { input: '2\n1 Dan 12\n2 Eve 16', output: 'NONE', explanation: 'None >= 18.' },
    { input: '1\n1 Adult 18', output: 'Adult', explanation: 'Exact 18.' }
  ],
  testCases: createTC('py-sql-1', [
    ['3\n1 Alice 20\n2 Bob 15\n3 Charlie 25', 'Alice Charlie'],
    ['2\n1 Dan 12\n2 Eve 16', 'NONE'],
    ['1\n1 Adult 18', 'Adult'],
    ['4\n1 A 30\n2 B 10\n3 C 40\n4 D 17', 'A C'],
    ['3\n1 Frank 22\n2 Grace 19\n3 Henry 18', 'Frank Grace Henry'],
    ['2\n1 Ivy 5\n2 Jack 8', 'NONE'],
    ['3\n1 X 50\n2 Y 60\n3 Z 70', 'X Y Z'],
    ['2\n1 Old 100\n2 Young 1', 'Old'],
    ['4\n1 P 18\n2 Q 19\n3 R 16\n4 S 21', 'P Q S'],
    ['2\n1 K 17\n2 L 18', 'L']
  ])
});

addProblem({
  id: 'py-sql-2',
  topicId: 'python-database-sqlite3',
  level: 'advanced',
  title: 'Department Salary Average SQL Aggregation',
  difficulty: 'medium',
  problemStatement: 'Given employee records (id, name, department, salary), group by department and compute average salary rounded to 2 decimal places. Print departments sorted alphabetically in format "<dept>:<avg>" separated by space.',
  inputFormat: 'First line N, next N lines each contain name, department, salary (int).',
  outputFormat: 'Print space-separated "<dept>:<avg>" pairs.',
  constraints: ['1 <= N <= 1000'],
  examples: [
    { input: '3\nAlice IT 100\nBob IT 200\nCharlie HR 150', output: 'HR:150.00 IT:150.00', explanation: 'HR avg 150, IT avg (100+200)/2 = 150.' },
    { input: '2\nDan Sales 50\nEve Sales 70', output: 'Sales:60.00', explanation: 'Sales avg 60.' },
    { input: '1\nFrank Ops 80', output: 'Ops:80.00', explanation: 'Single dept.' }
  ],
  testCases: createTC('py-sql-2', [
    ['3\nAlice IT 100\nBob IT 200\nCharlie HR 150', 'HR:150.00 IT:150.00'],
    ['2\nDan Sales 50\nEve Sales 70', 'Sales:60.00'],
    ['1\nFrank Ops 80', 'Ops:80.00'],
    ['4\nA IT 100\nB HR 80\nC IT 120\nD HR 100', 'HR:90.00 IT:110.00'],
    ['3\nX Eng 300\nY Eng 400\nZ Mkt 250', 'Eng:350.00 Mkt:250.00'],
    ['2\nP QA 60\nQ QA 90', 'QA:75.00'],
    ['3\n1 Admin 50\n2 Admin 50\n3 Admin 50', 'Admin:50.00'],
    ['2\nM Dev 200\nN Design 150', 'Design:150.00 Dev:200.00'],
    ['4\nE IT 50\nF IT 50\nG Sales 100\nH Sales 200', 'IT:50.00 Sales:150.00'],
    ['2\nK Legal 300\nL Legal 350', 'Legal:325.00']
  ])
});

addProblem({
  id: 'py-sql-3',
  topicId: 'python-database-sqlite3',
  level: 'advanced',
  title: 'Top Selling Products Aggregate Query',
  difficulty: 'medium',
  problemStatement: 'Given order transactions (productName, quantity, unitPrice), calculate total revenue (sum of quantity * unitPrice) per product. Find the product with the highest total revenue. Print "<productName> Total: <revenue>".',
  inputFormat: 'First line N, next N lines contain product quantity unitPrice.',
  outputFormat: 'Print "<productName> Total: <revenue>".',
  constraints: ['1 <= N <= 1000'],
  examples: [
    { input: '3\nLaptop 2 1000\nMouse 10 20\nLaptop 1 1000', output: 'Laptop Total: 3000', explanation: 'Laptop total 3000 vs Mouse 200.' },
    { input: '2\nApple 5 2\nBanana 10 1', output: 'Apple Total: 10', explanation: 'Both 10, Apple appears first.' },
    { input: '1\nBook 3 15', output: 'Book Total: 45', explanation: 'Single product.' }
  ],
  testCases: createTC('py-sql-3', [
    ['3\nLaptop 2 1000\nMouse 10 20\nLaptop 1 1000', 'Laptop Total: 3000'],
    ['2\nApple 5 2\nBanana 10 1', 'Apple Total: 10'],
    ['1\nBook 3 15', 'Book Total: 45'],
    ['4\nA 10 5\nB 2 50\nC 1 200\nA 5 5', 'C Total: 200'],
    ['3\nPen 100 1\nPencil 50 1\nEraser 20 2', 'Pen Total: 100'],
    ['2\nPhone 1 800\nCase 10 20', 'Phone Total: 800'],
    ['3\nX 5 20\nY 10 20\nZ 2 10', 'Y Total: 200'],
    ['2\nItem1 10 10\nItem2 20 10', 'Item2 Total: 200'],
    ['3\nShirt 4 25\nPants 2 60\nTie 10 15', 'Tie Total: 150'],
    ['2\nCar 1 20000\nBike 5 500', 'Car Total: 20000']
  ])
});

// 33. python-profiling-and-optimization (3 problems)
addProblem({
  id: 'py-opt-1',
  topicId: 'python-profiling-and-optimization',
  level: 'advanced',
  title: 'Two Sum Optimal O(N) Hash Map Lookup',
  difficulty: 'medium',
  problemStatement: 'Given N integers and target sum T, find two distinct indices i and j (0-indexed, i < j) such that arr[i] + arr[j] == T in O(N) time using a hash map. If multiple pairs exist, return the pair with smallest i. If no pair exists, print "-1 -1".',
  inputFormat: 'First line N and T, second line N space-separated integers.',
  outputFormat: 'Print "i j" or "-1 -1".',
  constraints: ['2 <= N <= 10^5'],
  examples: [
    { input: '4 9\n2 7 11 15', output: '0 1', explanation: 'arr[0] + arr[1] = 2 + 7 = 9.' },
    { input: '3 6\n3 2 4', output: '1 2', explanation: 'arr[1] + arr[2] = 2 + 4 = 6.' },
    { input: '4 10\n1 2 3 4', output: '-1 -1', explanation: 'No two numbers sum to 10.' }
  ],
  testCases: createTC('py-opt-1', [
    ['4 9\n2 7 11 15', '0 1'],
    ['3 6\n3 2 4', '1 2'],
    ['4 10\n1 2 3 4', '-1 -1'],
    ['2 6\n3 3', '0 1'],
    ['5 0\n-5 2 3 5 1', '0 3'],
    ['5 100\n10 20 30 70 80', '1 4'],
    ['6 14\n1 3 5 7 9 11', '1 5'],
    ['3 -5\n-2 -3 4', '0 1'],
    ['4 8\n4 2 6 4', '0 3'],
    ['5 25\n5 10 15 20 30', '0 3']
  ])
});

addProblem({
  id: 'py-opt-2',
  topicId: 'python-profiling-and-optimization',
  level: 'advanced',
  title: 'Maximum Subarray Sum (Kadane\'s Algorithm)',
  difficulty: 'medium',
  problemStatement: 'Given an array of N integers, find the contiguous subarray with the largest sum using Kadane\'s Algorithm in O(N) time. Print the maximum subarray sum.',
  inputFormat: 'First line N, second line N space-separated integers.',
  outputFormat: 'Print maximum subarray sum.',
  constraints: ['1 <= N <= 10^5', '-10^9 <= arr[i] <= 10^9'],
  examples: [
    { input: '8\n-2 1 -3 4 -1 2 1 -5 4', output: '6', explanation: '[4, -1, 2, 1] sums to 6.' },
    { input: '1\n1', output: '1', explanation: 'Single element 1.' },
    { input: '5\n5 4 -1 7 8', output: '23', explanation: 'All elements sum to 23.' }
  ],
  testCases: createTC('py-opt-2', [
    ['9\n-2 1 -3 4 -1 2 1 -5 4', '6'],
    ['1\n1', '1'],
    ['5\n5 4 -1 7 8', '23'],
    ['4\n-1 -2 -3 -4', '-1'],
    ['5\n-5 10 20 -10 30', '50'],
    ['3\n2 -1 3', '4'],
    ['4\n10 20 30 40', '100'],
    ['6\n-2 -3 4 -1 -2 1', '4'],
    ['3\n-10 0 -5', '0'],
    ['5\n1 -2 3 4 -1', '7']
  ])
});

addProblem({
  id: 'py-opt-3',
  topicId: 'python-profiling-and-optimization',
  level: 'advanced',
  title: 'Longest Substring Without Repeating Characters',
  difficulty: 'hard',
  problemStatement: 'Given a string S, find the length of the longest substring without repeating characters in O(N) time using the sliding window technique.',
  inputFormat: 'A single string S.',
  outputFormat: 'Print the integer length of the longest unique substring.',
  constraints: ['0 <= len(S) <= 10^5'],
  examples: [
    { input: 'abcabcbb', output: '3', explanation: 'The answer is "abc", with length 3.' },
    { input: 'bbbbb', output: '1', explanation: 'The answer is "b", with length 1.' },
    { input: 'pwwkew', output: '3', explanation: 'The answer is "wke", with length 3.' }
  ],
  testCases: createTC('py-opt-3', [
    ['abcabcbb', '3'],
    ['bbbbb', '1'],
    ['pwwkew', '3'],
    ['', '0'],
    ['abcdef', '6'],
    ['aab', '2'],
    ['dvdf', '3'],
    ['abba', '2'],
    ['tmmzuxt', '5'],
    ['antigravity', '8']
  ])
});

console.log('Finished creating all Python problems! Total:', problems.length);

fs.writeFileSync(outputPath, `export const pythonProblems = ${JSON.stringify(problems, null, 2)};\nexport default pythonProblems;\n`, 'utf-8');
console.log('Successfully saved to', outputPath);
