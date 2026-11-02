import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outputPath = path.join(__dirname, 'practice', 'javaProblems.js');

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
    languageId: 'java',
    language: 'java',
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
      java: starterCode || `import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNext()) return;\n        // Write your solution here\n    }\n}\n`,
      python: `import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == "__main__":\n    main()\n`,
      javascript: `const fs = require('fs');\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\nmain();\n`,
      c: `#include <stdio.h>\nint main() {\n    // Write your solution here\n    return 0;\n}\n`,
      cpp: `#include <iostream>\nusing namespace std;\nint main() {\n    // Write your solution here\n    return 0;\n}\n`
    },
    testCases
  });
}

// -------------------------------------------------------------
// BEGINNER
// -------------------------------------------------------------

// 1. java-variables-data-types (3 problems)
addProblem({
  id: 'java-var-1',
  topicId: 'java-variables-data-types',
  level: 'beginner',
  title: 'Calculate Simple Interest in Java',
  difficulty: 'easy',
  problemStatement: 'Read principal P (double), rate R (double), and time T (double) from standard input. Calculate Simple Interest SI = (P * R * T) / 100. Print the result formatted to 2 decimal places using String.format("%.2f", si).',
  inputFormat: 'Three space-separated numbers: P R T.',
  outputFormat: 'Print Simple Interest with 2 decimal places.',
  constraints: ['1 <= P <= 10^7', '0.1 <= R <= 100', '1 <= T <= 50'],
  examples: [
    { input: '1000 5 2', output: '100.00', explanation: '(1000 * 5 * 2) / 100 = 100.00' },
    { input: '5000 7.5 3', output: '1125.00', explanation: '(5000 * 7.5 * 3) / 100 = 1125.00' },
    { input: '2500 4.2 1.5', output: '157.50', explanation: 'Decimal interest calculation.' }
  ],
  testCases: createTC('java-var-1', [
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
  id: 'java-var-2',
  topicId: 'java-variables-data-types',
  level: 'beginner',
  title: 'Explicit Type Casting from Double to Integer',
  difficulty: 'easy',
  problemStatement: 'Read a floating point number (double) D. Truncate it to an integer using explicit type casting (int) and print both the original number and the casted integer in format "Original: <D> Casted: <(int)D>".',
  inputFormat: 'A floating point number D.',
  outputFormat: 'Print "Original: <D> Casted: <int>".',
  constraints: ['-10^6 <= D <= 10^6'],
  examples: [
    { input: '15.75', output: 'Original: 15.75 Casted: 15', explanation: 'Fractional part truncated.' },
    { input: '-3.99', output: 'Original: -3.99 Casted: -3', explanation: 'Truncation towards zero.' },
    { input: '42.0', output: 'Original: 42.0 Casted: 42', explanation: 'Whole number float.' }
  ],
  testCases: createTC('java-var-2', [
    ['15.75', 'Original: 15.75 Casted: 15'],
    ['-3.99', 'Original: -3.99 Casted: -3'],
    ['42.0', 'Original: 42.0 Casted: 42'],
    ['0.0', 'Original: 0.0 Casted: 0'],
    ['99.999', 'Original: 99.999 Casted: 99'],
    ['-100.5', 'Original: -100.5 Casted: -100'],
    ['12345.67', 'Original: 12345.67 Casted: 12345'],
    ['1.23', 'Original: 1.23 Casted: 1'],
    ['-0.5', 'Original: -0.5 Casted: 0'],
    ['500.1', 'Original: 500.1 Casted: 500']
  ])
});

addProblem({
  id: 'java-var-3',
  topicId: 'java-variables-data-types',
  level: 'beginner',
  title: 'Primitive Data Type Ranges and Overflow',
  difficulty: 'medium',
  problemStatement: 'Given a 64-bit integer N (long in Java), check if it fits within 8-bit byte (-128 to 127), 16-bit short (-32768 to 32767), and 32-bit int (-2147483648 to 2147483647). Print the smallest fitting Java primitive type: "byte", "short", "int", or "long".',
  inputFormat: 'A 64-bit integer N.',
  outputFormat: 'Print the smallest type name.',
  constraints: ['-9 * 10^18 <= N <= 9 * 10^18'],
  examples: [
    { input: '100', output: 'byte', explanation: '100 fits in byte.' },
    { input: '1000', output: 'short', explanation: '1000 fits in short.' },
    { input: '100000', output: 'int', explanation: '100000 fits in int.' }
  ],
  testCases: createTC('java-var-3', [
    ['100', 'byte'],
    ['1000', 'short'],
    ['100000', 'int'],
    ['-128', 'byte'],
    ['127', 'byte'],
    ['32767', 'short'],
    ['-32768', 'short'],
    ['2147483647', 'int'],
    ['3000000000', 'long'],
    ['-5000000000', 'long']
  ])
});

// 2. java-operators-and-io (3 problems)
addProblem({
  id: 'java-io-1',
  topicId: 'java-operators-and-io',
  level: 'beginner',
  title: 'Scanner Arithmetic and Modulo Division',
  difficulty: 'easy',
  problemStatement: 'Read two positive integers A and B using Scanner. Print their sum, difference (A - B), product, quotient (A / B), and remainder (A % B) on separate lines.',
  inputFormat: 'Two space-separated integers A and B.',
  outputFormat: 'Five lines with Sum, Diff, Prod, Quot, Rem values.',
  constraints: ['1 <= A, B <= 10^5'],
  examples: [
    { input: '10 3', output: '13\n7\n30\n3\n1', explanation: '10+3=13, 10-3=7, 10*3=30, 10/3=3, 10%3=1' },
    { input: '20 5', output: '25\n15\n100\n4\n0', explanation: 'Clean division.' },
    { input: '7 7', output: '14\n0\n49\n1\n0', explanation: 'Equal numbers.' }
  ],
  testCases: createTC('java-io-1', [
    ['10 3', '13\n7\n30\n3\n1'],
    ['20 5', '25\n15\n100\n4\n0'],
    ['7 7', '14\n0\n49\n1\n0'],
    ['15 4', '19\n11\n60\n3\n3'],
    ['100 25', '125\n75\n2500\n4\n0'],
    ['50 6', '56\n44\n300\n8\n2'],
    ['1 1', '2\n0\n1\n1\n0'],
    ['80 9', '89\n71\n720\n8\n8'],
    ['45 10', '55\n35\n450\n4\n5'],
    ['99 2', '101\n97\n198\n49\n1']
  ])
});

addProblem({
  id: 'java-io-2',
  topicId: 'java-operators-and-io',
  level: 'beginner',
  title: 'Area and Circumference of a Circle',
  difficulty: 'easy',
  problemStatement: 'Read radius R (double). Compute Area = Math.PI * R * R and Circumference = 2 * Math.PI * R. Print "Area: <area> Circumference: <circumference>" rounded to 2 decimal places.',
  inputFormat: 'A positive float/double R.',
  outputFormat: 'Print "Area: <area> Circumference: <circumference>".',
  constraints: ['0.1 <= R <= 1000'],
  examples: [
    { input: '5', output: 'Area: 78.54 Circumference: 31.42', explanation: 'Radius 5.' },
    { input: '1', output: 'Area: 3.14 Circumference: 6.28', explanation: 'Radius 1.' },
    { input: '10', output: 'Area: 314.16 Circumference: 62.83', explanation: 'Radius 10.' }
  ],
  testCases: createTC('java-io-2', [
    ['5', 'Area: 78.54 Circumference: 31.42'],
    ['1', 'Area: 3.14 Circumference: 6.28'],
    ['10', 'Area: 314.16 Circumference: 62.83'],
    ['2.5', 'Area: 19.63 Circumference: 15.71'],
    ['7', 'Area: 153.94 Circumference: 43.98'],
    ['12', 'Area: 452.39 Circumference: 75.40'],
    ['15', 'Area: 706.86 Circumference: 94.25'],
    ['0.5', 'Area: 0.79 Circumference: 3.14'],
    ['20', 'Area: 1256.64 Circumference: 125.66'],
    ['3.14', 'Area: 30.97 Circumference: 19.73']
  ])
});

addProblem({
  id: 'java-io-3',
  topicId: 'java-operators-and-io',
  level: 'beginner',
  title: 'Currency Bill Denominations Breakdown',
  difficulty: 'medium',
  problemStatement: 'Given an integer cash amount A, find the minimum number of currency notes needed to make up the amount using denominations: 100, 50, 20, 10, 5, 1. Print space-separated counts for each denomination from largest to smallest.',
  inputFormat: 'A non-negative integer A.',
  outputFormat: 'Print counts for 100 50 20 10 5 1 notes.',
  constraints: ['0 <= A <= 10^7'],
  examples: [
    { input: '388', output: '3 1 1 1 1 3', explanation: '3*100 + 1*50 + 1*20 + 1*10 + 1*5 + 3*1 = 388.' },
    { input: '100', output: '1 0 0 0 0 0', explanation: 'Single 100 note.' },
    { input: '47', output: '0 0 2 0 1 2', explanation: '2*20 + 1*5 + 2*1 = 47.' }
  ],
  testCases: createTC('java-io-3', [
    ['388', '3 1 1 1 1 3'],
    ['100', '1 0 0 0 0 0'],
    ['47', '0 0 2 0 1 2'],
    ['500', '5 0 0 0 0 0'],
    ['85', '0 1 1 1 1 0'],
    ['0', '0 0 0 0 0 0'],
    ['123', '1 0 1 0 0 3'],
    ['99', '0 1 2 0 1 4'],
    ['15', '0 0 0 1 1 0'],
    ['1000', '10 0 0 0 0 0']
  ])
});

// 3. java-conditionals-and-switch (4 problems)
addProblem({
  id: 'java-cond-1',
  topicId: 'java-conditionals-and-switch',
  level: 'beginner',
  title: 'Check Even or Odd in Java',
  difficulty: 'easy',
  problemStatement: 'Given an integer N, print "EVEN" if N is divisible by 2, or "ODD" if not.',
  inputFormat: 'A single integer N.',
  outputFormat: 'Print "EVEN" or "ODD".',
  constraints: ['-10^9 <= N <= 10^9'],
  examples: [
    { input: '4', output: 'EVEN', explanation: '4 is even.' },
    { input: '7', output: 'ODD', explanation: '7 is odd.' },
    { input: '0', output: 'EVEN', explanation: '0 is even.' }
  ],
  testCases: createTC('java-cond-1', [
    ['4', 'EVEN'],
    ['7', 'ODD'],
    ['0', 'EVEN'],
    ['-2', 'EVEN'],
    ['-5', 'ODD'],
    ['1000000', 'EVEN'],
    ['999999', 'ODD'],
    ['1', 'ODD'],
    ['-1', 'ODD'],
    ['42', 'EVEN']
  ])
});

addProblem({
  id: 'java-cond-2',
  topicId: 'java-conditionals-and-switch',
  level: 'beginner',
  title: 'Largest of Three Integers',
  difficulty: 'easy',
  problemStatement: 'Given three integers A, B, and C, find and print the largest value.',
  inputFormat: 'Three space-separated integers A B C.',
  outputFormat: 'Print largest value.',
  constraints: ['-10^9 <= A, B, C <= 10^9'],
  examples: [
    { input: '10 20 15', output: '20', explanation: '20 is greatest.' },
    { input: '-1 -5 -2', output: '-1', explanation: '-1 is greatest.' },
    { input: '5 5 5', output: '5', explanation: 'All equal.' }
  ],
  testCases: createTC('java-cond-2', [
    ['10 20 15', '20'],
    ['-1 -5 -2', '-1'],
    ['5 5 5', '5'],
    ['100 200 300', '300'],
    ['50 10 30', '50'],
    ['0 -10 10', '10'],
    ['42 42 10', '42'],
    ['7 14 21', '21'],
    ['-100 0 100', '100'],
    ['99 98 97', '99']
  ])
});

addProblem({
  id: 'java-cond-3',
  topicId: 'java-conditionals-and-switch',
  level: 'beginner',
  title: 'Day of Week Using Switch Expression',
  difficulty: 'medium',
  problemStatement: 'Given day number D (1 to 7, where 1 is Monday and 7 is Sunday), output the day name using Java switch statement or expression: "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday". For any other number, print "INVALID".',
  inputFormat: 'An integer D.',
  outputFormat: 'Print day name or "INVALID".',
  constraints: ['-100 <= D <= 100'],
  examples: [
    { input: '1', output: 'Monday', explanation: 'Day 1 is Monday.' },
    { input: '7', output: 'Sunday', explanation: 'Day 7 is Sunday.' },
    { input: '9', output: 'INVALID', explanation: 'Out of range.' }
  ],
  testCases: createTC('java-cond-3', [
    ['1', 'Monday'],
    ['7', 'Sunday'],
    ['9', 'INVALID'],
    ['2', 'Tuesday'],
    ['3', 'Wednesday'],
    ['4', 'Thursday'],
    ['5', 'Friday'],
    ['6', 'Saturday'],
    ['0', 'INVALID'],
    ['-1', 'INVALID']
  ])
});

addProblem({
  id: 'java-cond-4',
  topicId: 'java-conditionals-and-switch',
  level: 'beginner',
  title: 'Student Grade Evaluator in Java',
  difficulty: 'medium',
  problemStatement: 'Given percentage score P (0 to 100), determine letter grade: 90-100 -> "A", 80-89 -> "B", 70-79 -> "C", 60-69 -> "D", below 60 -> "F". Print grade.',
  inputFormat: 'An integer P.',
  outputFormat: 'Print letter grade.',
  constraints: ['0 <= P <= 100'],
  examples: [
    { input: '95', output: 'A', explanation: 'Score 95 gets A.' },
    { input: '72', output: 'C', explanation: 'Score 72 gets C.' },
    { input: '55', output: 'F', explanation: 'Score 55 gets F.' }
  ],
  testCases: createTC('java-cond-4', [
    ['95', 'A'],
    ['72', 'C'],
    ['55', 'F'],
    ['100', 'A'],
    ['90', 'A'],
    ['89', 'B'],
    ['80', 'B'],
    ['65', 'D'],
    ['60', 'D'],
    ['0', 'F']
  ])
});

// 4. java-loops-and-flow-control (5 problems)
addProblem({
  id: 'java-loop-1',
  topicId: 'java-loops-and-flow-control',
  level: 'beginner',
  title: 'Generate a Multiplication Table Using Loops',
  difficulty: 'easy',
  problemStatement: 'Given an integer N, print multiplication table of N from 1 to 10 in format "N x i = result" on separate lines.',
  inputFormat: 'An integer N.',
  outputFormat: '10 lines formatted as "N x i = result".',
  constraints: ['1 <= N <= 100'],
  examples: [
    { input: '5', output: '5 x 1 = 5\n5 x 2 = 10\n5 x 3 = 15\n5 x 4 = 20\n5 x 5 = 25\n5 x 6 = 30\n5 x 7 = 35\n5 x 8 = 40\n5 x 9 = 45\n5 x 10 = 50', explanation: 'Table of 5.' },
    { input: '2', output: '2 x 1 = 2\n2 x 2 = 4\n2 x 3 = 6\n2 x 4 = 8\n2 x 5 = 10\n2 x 6 = 12\n2 x 7 = 14\n2 x 8 = 16\n2 x 9 = 18\n2 x 10 = 20', explanation: 'Table of 2.' },
    { input: '1', output: '1 x 1 = 1\n1 x 2 = 2\n1 x 3 = 3\n1 x 4 = 4\n1 x 5 = 5\n1 x 6 = 6\n1 x 7 = 7\n1 x 8 = 8\n1 x 9 = 9\n1 x 10 = 10', explanation: 'Table of 1.' }
  ],
  testCases: createTC('java-loop-1', [
    ['5', '5 x 1 = 5\n5 x 2 = 10\n5 x 3 = 15\n5 x 4 = 20\n5 x 5 = 25\n5 x 6 = 30\n5 x 7 = 35\n5 x 8 = 40\n5 x 9 = 45\n5 x 10 = 50'],
    ['2', '2 x 1 = 2\n2 x 2 = 4\n2 x 3 = 6\n2 x 4 = 8\n2 x 5 = 10\n2 x 6 = 12\n2 x 7 = 14\n2 x 8 = 16\n2 x 9 = 18\n2 x 10 = 20'],
    ['1', '1 x 1 = 1\n1 x 2 = 2\n1 x 3 = 3\n1 x 4 = 4\n1 x 5 = 5\n1 x 6 = 6\n1 x 7 = 7\n1 x 8 = 8\n1 x 9 = 9\n1 x 10 = 10'],
    ['3', '3 x 1 = 3\n3 x 2 = 6\n3 x 3 = 9\n3 x 4 = 12\n3 x 5 = 15\n3 x 6 = 18\n3 x 7 = 21\n3 x 8 = 24\n3 x 9 = 27\n3 x 10 = 30'],
    ['4', '4 x 1 = 4\n4 x 2 = 8\n4 x 3 = 12\n4 x 4 = 16\n4 x 5 = 20\n4 x 6 = 24\n4 x 7 = 28\n4 x 8 = 32\n4 x 9 = 36\n4 x 10 = 40'],
    ['7', '7 x 1 = 7\n7 x 2 = 14\n7 x 3 = 21\n7 x 4 = 28\n7 x 5 = 35\n7 x 6 = 42\n7 x 7 = 49\n7 x 8 = 56\n7 x 9 = 63\n7 x 10 = 70'],
    ['8', '8 x 1 = 8\n8 x 2 = 16\n8 x 3 = 24\n8 x 4 = 32\n8 x 5 = 40\n8 x 6 = 48\n8 x 7 = 56\n8 x 8 = 64\n8 x 9 = 72\n8 x 10 = 80'],
    ['9', '9 x 1 = 9\n9 x 2 = 18\n9 x 3 = 27\n9 x 4 = 36\n9 x 5 = 45\n9 x 6 = 54\n9 x 7 = 63\n9 x 8 = 72\n9 x 9 = 81\n9 x 10 = 90'],
    ['10', '10 x 1 = 10\n10 x 2 = 20\n10 x 3 = 30\n10 x 4 = 40\n10 x 5 = 50\n10 x 6 = 60\n10 x 7 = 70\n10 x 8 = 80\n10 x 9 = 90\n10 x 10 = 100'],
    ['12', '12 x 1 = 12\n12 x 2 = 24\n12 x 3 = 36\n12 x 4 = 48\n12 x 5 = 60\n12 x 6 = 72\n12 x 7 = 84\n12 x 8 = 96\n12 x 9 = 108\n12 x 10 = 120']
  ])
});

addProblem({
  id: 'java-loop-2',
  topicId: 'java-loops-and-flow-control',
  level: 'beginner',
  title: 'Sum of Natural Numbers up to N',
  difficulty: 'easy',
  problemStatement: 'Given positive integer N, calculate sum 1 + 2 + ... + N using a loop. Print the sum.',
  inputFormat: 'An integer N.',
  outputFormat: 'Print the sum.',
  constraints: ['1 <= N <= 10^6'],
  examples: [
    { input: '5', output: '15', explanation: '1+2+3+4+5=15.' },
    { input: '10', output: '55', explanation: 'Sum of first 10.' },
    { input: '1', output: '1', explanation: 'Single term.' }
  ],
  testCases: createTC('java-loop-2', [
    ['5', '15'],
    ['10', '55'],
    ['1', '1'],
    ['20', '210'],
    ['100', '5050'],
    ['50', '1275'],
    ['3', '6'],
    ['7', '28'],
    ['12', '78'],
    ['1000', '500500']
  ])
});

addProblem({
  id: 'java-loop-3',
  topicId: 'java-loops-and-flow-control',
  level: 'beginner',
  title: 'Sum of Digits of an Integer',
  difficulty: 'medium',
  problemStatement: 'Given an integer N, compute the sum of its digits using a while loop. (e.g. 1234 -> 1+2+3+4 = 10).',
  inputFormat: 'An integer N.',
  outputFormat: 'Print sum of digits.',
  constraints: ['-10^9 <= N <= 10^9'],
  examples: [
    { input: '1234', output: '10', explanation: '1+2+3+4 = 10.' },
    { input: '-567', output: '18', explanation: '5+6+7 = 18.' },
    { input: '0', output: '0', explanation: 'Sum of 0 is 0.' }
  ],
  testCases: createTC('java-loop-3', [
    ['1234', '10'],
    ['-567', '18'],
    ['0', '0'],
    ['999', '27'],
    ['1000000', '1'],
    ['456', '15'],
    ['7', '7'],
    ['-99', '18'],
    ['123456789', '45'],
    ['50505', '15']
  ])
});

addProblem({
  id: 'java-loop-4',
  topicId: 'java-loops-and-flow-control',
  level: 'beginner',
  title: 'Reverse an Integer and Check Palindrome',
  difficulty: 'medium',
  problemStatement: 'Given positive integer N, reverse its digits. If reversed equals original, print "PALINDROME <reversed>". Else print "NOT PALINDROME <reversed>".',
  inputFormat: 'A positive integer N.',
  outputFormat: 'Print palindrome status and reversed number.',
  constraints: ['1 <= N <= 10^9'],
  examples: [
    { input: '121', output: 'PALINDROME 121', explanation: '121 reversed is 121.' },
    { input: '123', output: 'NOT PALINDROME 321', explanation: 'Reversed is 321.' },
    { input: '10', output: 'NOT PALINDROME 1', explanation: 'Trailing 0 dropped.' }
  ],
  testCases: createTC('java-loop-4', [
    ['121', 'PALINDROME 121'],
    ['123', 'NOT PALINDROME 321'],
    ['10', 'NOT PALINDROME 1'],
    ['1221', 'PALINDROME 1221'],
    ['7', 'PALINDROME 7'],
    ['100', 'NOT PALINDROME 1'],
    ['12321', 'PALINDROME 12321'],
    ['4567', 'NOT PALINDROME 7654'],
    ['9009', 'PALINDROME 9009'],
    ['505', 'PALINDROME 505']
  ])
});

addProblem({
  id: 'java-loop-5',
  topicId: 'java-loops-and-flow-control',
  level: 'beginner',
  title: 'Fibonacci Series up to N Terms',
  difficulty: 'medium',
  problemStatement: 'Print the first N terms of the Fibonacci sequence starting with 0 and 1, separated by spaces.',
  inputFormat: 'A positive integer N.',
  outputFormat: 'Print space-separated Fibonacci terms.',
  constraints: ['1 <= N <= 30'],
  examples: [
    { input: '5', output: '0 1 1 2 3', explanation: 'First 5 terms.' },
    { input: '1', output: '0', explanation: 'First term.' },
    { input: '7', output: '0 1 1 2 3 5 8', explanation: 'First 7 terms.' }
  ],
  testCases: createTC('java-loop-5', [
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

// 5. java-arrays (4 problems)
addProblem({
  id: 'java-arr-1',
  topicId: 'java-arrays',
  level: 'beginner',
  title: 'Find Maximum and Minimum Element in Array',
  difficulty: 'easy',
  problemStatement: 'Given N integers in an array, find and print the maximum and minimum elements in format "Max: <max> Min: <min>".',
  inputFormat: 'First line N, second line N space-separated integers.',
  outputFormat: 'Print "Max: <max> Min: <min>".',
  constraints: ['1 <= N <= 10^5'],
  examples: [
    { input: '5\n1 5 3 9 2', output: 'Max: 9 Min: 1', explanation: '9 is max, 1 is min.' },
    { input: '3\n-5 -2 -10', output: 'Max: -2 Min: -10', explanation: 'Negatives handled.' },
    { input: '1\n100', output: 'Max: 100 Min: 100', explanation: 'Single element.' }
  ],
  testCases: createTC('java-arr-1', [
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
  id: 'java-arr-2',
  topicId: 'java-arrays',
  level: 'beginner',
  title: 'Sum and Average of Array Elements',
  difficulty: 'easy',
  problemStatement: 'Given N integers, calculate their sum and average. Print "Sum: <sum> Avg: <avg>" with average formatted to 2 decimal places.',
  inputFormat: 'First line N, second line N integers.',
  outputFormat: 'Print "Sum: <sum> Avg: <avg>".',
  constraints: ['1 <= N <= 10^5'],
  examples: [
    { input: '4\n1 2 3 4', output: 'Sum: 10 Avg: 2.50', explanation: 'Sum 10, avg 2.5.' },
    { input: '3\n10 20 30', output: 'Sum: 60 Avg: 20.00', explanation: 'Average 20.' },
    { input: '1\n50', output: 'Sum: 50 Avg: 50.00', explanation: 'Single element.' }
  ],
  testCases: createTC('java-arr-2', [
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
  id: 'java-arr-3',
  topicId: 'java-arrays',
  level: 'beginner',
  title: 'Reverse an Array In-Place',
  difficulty: 'medium',
  problemStatement: 'Given N integers, reverse the array in place using two pointers. Print the reversed array space-separated.',
  inputFormat: 'First line N, second line N space-separated integers.',
  outputFormat: 'Print space-separated reversed integers.',
  constraints: ['1 <= N <= 10^5'],
  examples: [
    { input: '4\n1 2 3 4', output: '4 3 2 1', explanation: 'Reversed.' },
    { input: '3\n10 20 30', output: '30 20 10', explanation: 'Reversed.' },
    { input: '1\n5', output: '5', explanation: 'Single element.' }
  ],
  testCases: createTC('java-arr-3', [
    ['4\n1 2 3 4', '4 3 2 1'],
    ['3\n10 20 30', '30 20 10'],
    ['1\n5', '5'],
    ['5\n1 2 3 4 5', '5 4 3 2 1'],
    ['2\n8 9', '8 9'],
    ['6\n10 20 30 40 50 60', '60 50 40 30 20 10'],
    ['5\n7 7 7 7 7', '7 7 7 7 7'],
    ['4\n-1 0 1 2', '2 1 0 -1'],
    ['3\n100 200 300', '300 200 100'],
    ['5\n2 4 6 8 10', '10 8 6 4 2']
  ])
});

addProblem({
  id: 'java-arr-4',
  topicId: 'java-arrays',
  level: 'beginner',
  title: 'Matrix Diagonal Sum',
  difficulty: 'medium',
  problemStatement: 'Given an N x N square matrix, calculate the sum of the primary diagonal elements (mat[i][i]) and secondary diagonal elements (mat[i][N - 1 - i]). Print "Primary: <pSum> Secondary: <sSum>".',
  inputFormat: 'First line N, next N lines each contain N integers.',
  outputFormat: 'Print "Primary: <pSum> Secondary: <sSum>".',
  constraints: ['1 <= N <= 100'],
  examples: [
    { input: '3\n1 2 3\n4 5 6\n7 8 9', output: 'Primary: 15 Secondary: 15', explanation: '1+5+9 = 15, 3+5+7 = 15.' },
    { input: '2\n1 2\n3 4', output: 'Primary: 5 Secondary: 5', explanation: '1+4 = 5, 2+3 = 5.' },
    { input: '1\n42', output: 'Primary: 42 Secondary: 42', explanation: '1x1 matrix.' }
  ],
  testCases: createTC('java-arr-4', [
    ['3\n1 2 3\n4 5 6\n7 8 9', 'Primary: 15 Secondary: 15'],
    ['2\n1 2\n3 4', 'Primary: 5 Secondary: 5'],
    ['1\n42', 'Primary: 42 Secondary: 42'],
    ['3\n2 0 0\n0 3 0\n0 0 4', 'Primary: 9 Secondary: 4'],
    ['2\n10 20\n30 40', 'Primary: 50 Secondary: 50'],
    ['3\n5 1 2\n3 5 4\n6 7 5', 'Primary: 15 Secondary: 13'],
    ['4\n1 0 0 1\n0 1 1 0\n0 1 1 0\n1 0 0 1', 'Primary: 4 Secondary: 4'],
    ['2\n-1 -2\n-3 -4', 'Primary: -5 Secondary: -5'],
    ['3\n10 0 10\n0 10 0\n10 0 10', 'Primary: 30 Secondary: 30'],
    ['4\n1 2 3 4\n5 6 7 8\n9 1 2 3\n4 5 6 7', 'Primary: 16 Secondary: 20']
  ])
});

// 6. java-strings-and-stringbuilder (4 problems)
addProblem({
  id: 'java-str-1',
  topicId: 'java-strings-and-stringbuilder',
  level: 'beginner',
  title: 'Count Vowels in a String',
  difficulty: 'easy',
  problemStatement: 'Read a line of text. Count the number of vowels (A, E, I, O, U, case-insensitive). Print the vowel count.',
  inputFormat: 'A string S.',
  outputFormat: 'Print integer count of vowels.',
  constraints: ['1 <= len(S) <= 10^5'],
  examples: [
    { input: 'Hello World', output: '3', explanation: 'e, o, o are 3 vowels.' },
    { input: 'Java', output: '2', explanation: 'a, a are 2 vowels.' },
    { input: 'xyz', output: '0', explanation: 'No vowels.' }
  ],
  testCases: createTC('java-str-1', [
    ['Hello World', '3'],
    ['Java', '2'],
    ['xyz', '0'],
    ['aeiou', '5'],
    ['AEIOU', '5'],
    ['Antigravity', '4'],
    ['Programming in Java', '6'],
    ['Quick brown fox', '4'],
    ['a', '1'],
    ['bcdfg', '0']
  ])
});

addProblem({
  id: 'java-str-2',
  topicId: 'java-strings-and-stringbuilder',
  level: 'beginner',
  title: 'Check Palindrome String with StringBuilder',
  difficulty: 'easy',
  problemStatement: 'Given a word S, check if it is a palindrome using StringBuilder.reverse(). Case-insensitive. Print "PALINDROME" or "NOT PALINDROME".',
  inputFormat: 'A single word S.',
  outputFormat: 'Print "PALINDROME" or "NOT PALINDROME".',
  constraints: ['1 <= len(S) <= 10^4'],
  examples: [
    { input: 'madam', output: 'PALINDROME', explanation: 'madam is palindrome.' },
    { input: 'Java', output: 'NOT PALINDROME', explanation: 'Java is not palindrome.' },
    { input: 'RaceCar', output: 'PALINDROME', explanation: 'Case-insensitive.' }
  ],
  testCases: createTC('java-str-2', [
    ['madam', 'PALINDROME'],
    ['Java', 'NOT PALINDROME'],
    ['RaceCar', 'PALINDROME'],
    ['level', 'PALINDROME'],
    ['noon', 'PALINDROME'],
    ['hello', 'NOT PALINDROME'],
    ['a', 'PALINDROME'],
    ['Deified', 'PALINDROME'],
    ['Code', 'NOT PALINDROME'],
    ['Rotator', 'PALINDROME']
  ])
});

addProblem({
  id: 'java-str-3',
  topicId: 'java-strings-and-stringbuilder',
  level: 'beginner',
  title: 'Reverse Each Word in a Sentence',
  difficulty: 'medium',
  problemStatement: 'Given a sentence of space-separated words, reverse each word individually while preserving their sentence order. Print the resulting sentence.',
  inputFormat: 'A line containing space-separated words.',
  outputFormat: 'Print sentence with reversed words.',
  constraints: ['1 <= words <= 10^4'],
  examples: [
    { input: 'Hello World', output: 'olleH dlroW', explanation: 'Each word reversed.' },
    { input: 'Java is fun', output: 'avaJ si nuf', explanation: 'Words reversed.' },
    { input: 'Code', output: 'edoC', explanation: 'Single word.' }
  ],
  testCases: createTC('java-str-3', [
    ['Hello World', 'olleH dlroW'],
    ['Java is fun', 'avaJ si nuf'],
    ['Code', 'edoC'],
    ['the quick brown fox', 'eht kciuq nworb xof'],
    ['data structures', 'atad serutcurts'],
    ['a b c', 'a b c'],
    ['welcome to java academy', 'emoclew ot avaj ymedaca'],
    ['one two three', 'eno owt eerht'],
    ['practice makes perfect', 'ecitcarp sekam tcefrep'],
    ['run submit succeed', 'nur timbus deeccus']
  ])
});

addProblem({
  id: 'java-str-4',
  topicId: 'java-strings-and-stringbuilder',
  level: 'beginner',
  title: 'Count Character Occurrences in String',
  difficulty: 'medium',
  problemStatement: 'Given a string S and a character C, count how many times C appears in S (case-sensitive). Print the count.',
  inputFormat: 'String S on first line, character C on second line.',
  outputFormat: 'Print integer occurrence count.',
  constraints: ['1 <= len(S) <= 10^5'],
  examples: [
    { input: 'banana\na', output: '3', explanation: 'a appears 3 times.' },
    { input: 'hello\nl', output: '2', explanation: 'l appears 2 times.' },
    { input: 'world\nz', output: '0', explanation: 'z does not appear.' }
  ],
  testCases: createTC('java-str-4', [
    ['banana\na', '3'],
    ['hello\nl', '2'],
    ['world\nz', '0'],
    ['Mississippi\ns', '4'],
    ['Mississippi\ni', '4'],
    ['Java\nJ', '1'],
    ['Java\nj', '0'],
    ['aaaaaa\na', '6'],
    ['CodeMentor\nM', '1'],
    ['abc abc abc\nb', '3']
  ])
});

// 7. java-methods-and-overloading (3 problems)
addProblem({
  id: 'java-meth-1',
  topicId: 'java-methods-and-overloading',
  level: 'beginner',
  title: 'Method Overloading for Maximum of Numbers',
  difficulty: 'easy',
  problemStatement: 'Implement overloaded methods max(int a, int b) and max(int a, int b, int c). Given count K (2 or 3) followed by K integers, print the maximum value.',
  inputFormat: 'First integer K (2 or 3), followed by K space-separated integers.',
  outputFormat: 'Print maximum value.',
  constraints: ['K in {2, 3}', '-10^9 <= values <= 10^9'],
  examples: [
    { input: '2 15 25', output: '25', explanation: 'max(15, 25) = 25.' },
    { input: '3 10 50 30', output: '50', explanation: 'max(10, 50, 30) = 50.' },
    { input: '2 -5 -2', output: '-2', explanation: 'max(-5, -2) = -2.' }
  ],
  testCases: createTC('java-meth-1', [
    ['2 15 25', '25'],
    ['3 10 50 30', '50'],
    ['2 -5 -2', '-2'],
    ['3 100 200 300', '300'],
    ['2 42 42', '42'],
    ['3 5 5 5', '5'],
    ['3 -10 0 10', '10'],
    ['2 0 100', '100'],
    ['3 99 12 85', '99'],
    ['2 -100 -50', '-50']
  ])
});

addProblem({
  id: 'java-meth-2',
  topicId: 'java-methods-and-overloading',
  level: 'beginner',
  title: 'Check Prime Number Method in Java',
  difficulty: 'easy',
  problemStatement: 'Write a method isPrime(int n) that returns boolean. Print "PRIME" or "NOT PRIME".',
  inputFormat: 'An integer N.',
  outputFormat: 'Print "PRIME" or "NOT PRIME".',
  constraints: ['1 <= N <= 10^9'],
  examples: [
    { input: '7', output: 'PRIME', explanation: '7 is prime.' },
    { input: '12', output: 'NOT PRIME', explanation: '12 is not prime.' },
    { input: '1', output: 'NOT PRIME', explanation: '1 is not prime.' }
  ],
  testCases: createTC('java-meth-2', [
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
  id: 'java-meth-3',
  topicId: 'java-methods-and-overloading',
  level: 'beginner',
  title: 'Calculate Power Using Method Overloading',
  difficulty: 'medium',
  problemStatement: 'Implement power(int base, int exp) calculating base^exp for non-negative exp. Print the result.',
  inputFormat: 'Two space-separated non-negative integers: base and exp.',
  outputFormat: 'Print base^exp.',
  constraints: ['0 <= base <= 20', '0 <= exp <= 10'],
  examples: [
    { input: '2 3', output: '8', explanation: '2^3 = 8.' },
    { input: '5 0', output: '1', explanation: '5^0 = 1.' },
    { input: '3 4', output: '81', explanation: '3^4 = 81.' }
  ],
  testCases: createTC('java-meth-3', [
    ['2 3', '8'],
    ['5 0', '1'],
    ['3 4', '81'],
    ['10 3', '1000'],
    ['2 10', '1024'],
    ['7 2', '49'],
    ['1 100', '1'],
    ['4 3', '64'],
    ['6 2', '36'],
    ['2 5', '32']
  ])
});

// 8. java-classes-and-constructors (3 problems)
addProblem({
  id: 'java-cls-1',
  topicId: 'java-classes-and-constructors',
  level: 'beginner',
  title: 'Rectangle Class with Parameterized Constructor',
  difficulty: 'easy',
  problemStatement: 'Define Rectangle class with constructor Rectangle(int w, int h) and methods getArea() and getPerimeter(). Read w and h, print "Area: <area> Perimeter: <perimeter>".',
  inputFormat: 'Two space-separated integers w and h.',
  outputFormat: 'Print "Area: <area> Perimeter: <perimeter>".',
  constraints: ['1 <= w, h <= 10^5'],
  examples: [
    { input: '4 5', output: 'Area: 20 Perimeter: 18', explanation: '4*5=20, 2*(4+5)=18.' },
    { input: '10 10', output: 'Area: 100 Perimeter: 40', explanation: 'Square.' },
    { input: '1 2', output: 'Area: 2 Perimeter: 6', explanation: '1x2 rectangle.' }
  ],
  testCases: createTC('java-cls-1', [
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
  id: 'java-cls-2',
  topicId: 'java-classes-and-constructors',
  level: 'beginner',
  title: 'Student Grade and GPA Class',
  difficulty: 'medium',
  problemStatement: 'Implement Student(String name, int[] marks) with calculatePercentage(). Print "Student: <name> Pct: <pct>%" with percentage rounded to 2 decimal places.',
  inputFormat: 'Student name followed by N and N marks.',
  outputFormat: 'Print "Student: <name> Pct: <pct>%".',
  constraints: ['1 <= N <= 100', '0 <= mark <= 100'],
  examples: [
    { input: 'Alice 3 80 90 100', output: 'Student: Alice Pct: 90.00%', explanation: 'Avg 90.00%.' },
    { input: 'Bob 2 70 80', output: 'Student: Bob Pct: 75.00%', explanation: 'Avg 75.00%.' },
    { input: 'Charlie 1 100', output: 'Student: Charlie Pct: 100.00%', explanation: 'Single mark.' }
  ],
  testCases: createTC('java-cls-2', [
    ['Alice 3 80 90 100', 'Student: Alice Pct: 90.00%'],
    ['Bob 2 70 80', 'Student: Bob Pct: 75.00%'],
    ['Charlie 1 100', 'Student: Charlie Pct: 100.00%'],
    ['David 4 60 70 80 90', 'Student: David Pct: 75.00%'],
    ['Emma 3 88 92 90', 'Student: Emma Pct: 90.00%'],
    ['Frank 2 50 60', 'Student: Frank Pct: 55.00%'],
    ['Grace 5 100 95 90 85 80', 'Student: Grace Pct: 90.00%'],
    ['Henry 3 33 45 66', 'Student: Henry Pct: 48.00%'],
    ['Ivy 2 78 82', 'Student: Ivy Pct: 80.00%'],
    ['Jack 4 90 90 90 90', 'Student: Jack Pct: 90.00%']
  ])
});

addProblem({
  id: 'java-cls-3',
  topicId: 'java-classes-and-constructors',
  level: 'beginner',
  title: 'Bank Account Class with Balance Validations',
  difficulty: 'medium',
  problemStatement: 'Implement BankAccount(int initialBalance) with deposit(int amount) and withdraw(int amount). If withdraw amount exceeds balance, print "INSUFFICIENT FUNDS". Print final balance.',
  inputFormat: 'Initial balance B, followed by N operations "D <amt>" or "W <amt>".',
  outputFormat: 'Print any error lines, followed by "Final Balance: <balance>".',
  constraints: ['0 <= B <= 10^7'],
  examples: [
    { input: '100 2\nD 50\nW 30', output: 'Final Balance: 120', explanation: '100 + 50 - 30 = 120.' },
    { input: '50 2\nW 100\nD 20', output: 'INSUFFICIENT FUNDS\nFinal Balance: 70', explanation: 'Overdraft blocked.' },
    { input: '0 1\nD 500', output: 'Final Balance: 500', explanation: 'Deposit 500.' }
  ],
  testCases: createTC('java-cls-3', [
    ['100 2\nD 50\nW 30', 'Final Balance: 120'],
    ['50 2\nW 100\nD 20', 'INSUFFICIENT FUNDS\nFinal Balance: 70'],
    ['0 1\nD 500', 'Final Balance: 500'],
    ['200 3\nW 50\nW 50\nW 50', 'Final Balance: 50'],
    ['100 2\nW 100\nW 1', 'INSUFFICIENT FUNDS\nFinal Balance: 0'],
    ['500 2\nD 100\nD 200', 'Final Balance: 800'],
    ['1000 1\nW 200', 'Final Balance: 800'],
    ['50 1\nW 50', 'Final Balance: 0'],
    ['300 3\nD 100\nW 500\nD 50', 'INSUFFICIENT FUNDS\nFinal Balance: 450'],
    ['10 2\nW 20\nW 30', 'INSUFFICIENT FUNDS\nINSUFFICIENT FUNDS\nFinal Balance: 10']
  ])
});

// 9. java-static-and-final (3 problems)
addProblem({
  id: 'java-stat-1',
  topicId: 'java-static-and-final',
  level: 'beginner',
  title: 'Instance Counter with Static Variable',
  difficulty: 'easy',
  problemStatement: 'Implement Item class with static int count variable incremented on each instance creation. Read N, instantiate N items, and print "Items Created: <count>".',
  inputFormat: 'An integer N.',
  outputFormat: 'Print "Items Created: <N>".',
  constraints: ['1 <= N <= 1000'],
  examples: [
    { input: '5', output: 'Items Created: 5', explanation: '5 items.' },
    { input: '1', output: 'Items Created: 1', explanation: '1 item.' },
    { input: '10', output: 'Items Created: 10', explanation: '10 items.' }
  ],
  testCases: createTC('java-stat-1', [
    ['5', 'Items Created: 5'],
    ['1', 'Items Created: 1'],
    ['10', 'Items Created: 10'],
    ['2', 'Items Created: 2'],
    ['3', 'Items Created: 3'],
    ['7', 'Items Created: 7'],
    ['25', 'Items Created: 25'],
    ['50', 'Items Created: 50'],
    ['100', 'Items Created: 100'],
    ['500', 'Items Created: 500']
  ])
});

addProblem({
  id: 'java-stat-2',
  topicId: 'java-static-and-final',
  level: 'beginner',
  title: 'Math Constant Utility Class with Final',
  difficulty: 'easy',
  problemStatement: 'Create a MathConstants utility class with "public static final double PI = 3.141592653589793;" and static method circleArea(double r). Print area rounded to 2 decimal places.',
  inputFormat: 'A double radius R.',
  outputFormat: 'Print area with 2 decimal places.',
  constraints: ['1 <= R <= 1000'],
  examples: [
    { input: '5', output: '78.54', explanation: 'Area of radius 5.' },
    { input: '10', output: '314.16', explanation: 'Area of radius 10.' },
    { input: '1', output: '3.14', explanation: 'Area of radius 1.' }
  ],
  testCases: createTC('java-stat-2', [
    ['5', '78.54'],
    ['10', '314.16'],
    ['1', '3.14'],
    ['2', '12.57'],
    ['3', '28.27'],
    ['7', '153.94'],
    ['12', '452.39'],
    ['15', '706.86'],
    ['20', '1256.64'],
    ['25', '1963.50']
  ])
});

addProblem({
  id: 'java-stat-3',
  topicId: 'java-static-and-final',
  level: 'beginner',
  title: 'Static Helper for String Capitalization',
  difficulty: 'medium',
  problemStatement: 'Implement static method StringUtils.capitalizeWords(String str) that capitalizes the first letter of each word in a string. Print the transformed string.',
  inputFormat: 'A line of space-separated words.',
  outputFormat: 'Print capitalized words.',
  constraints: ['1 <= words <= 1000'],
  examples: [
    { input: 'hello world', output: 'Hello World', explanation: 'Capitalized.' },
    { input: 'java programming', output: 'Java Programming', explanation: 'Capitalized.' },
    { input: 'code mentor academy', output: 'Code Mentor Academy', explanation: 'Capitalized.' }
  ],
  testCases: createTC('java-stat-3', [
    ['hello world', 'Hello World'],
    ['java programming', 'Java Programming'],
    ['code mentor academy', 'Code Mentor Academy'],
    ['the quick brown fox', 'The Quick Brown Fox'],
    ['a b c', 'A B C'],
    ['data structures and algorithms', 'Data Structures And Algorithms'],
    ['antigravity ide platform', 'Antigravity Ide Platform'],
    ['one two three', 'One Two Three'],
    ['spring boot microservices', 'Spring Boot Microservices'],
    ['object oriented design', 'Object Oriented Design']
  ])
});

// 10. java-encapsulation-access-modifiers (3 problems)
addProblem({
  id: 'java-enc-1',
  topicId: 'java-encapsulation-access-modifiers',
  level: 'beginner',
  title: 'Employee Encapsulation with Salary Bounds',
  difficulty: 'easy',
  problemStatement: 'Implement Employee with private salary and public setter setSalary(int s). If s < 0, reject and keep previous salary, printing "INVALID SALARY". Print "Employee: <name> Salary: <salary>".',
  inputFormat: 'Name, initial salary, and new salary attempt.',
  outputFormat: 'Print error if any, followed by "Employee: <name> Salary: <salary>".',
  constraints: ['0 <= initial <= 10^7'],
  examples: [
    { input: 'Alice 50000 60000', output: 'Employee: Alice Salary: 60000', explanation: 'Salary updated.' },
    { input: 'Bob 40000 -1000', output: 'INVALID SALARY\nEmployee: Bob Salary: 40000', explanation: 'Rejected negative salary.' },
    { input: 'Charlie 80000 0', output: 'Employee: Charlie Salary: 0', explanation: 'Zero salary allowed.' }
  ],
  testCases: createTC('java-enc-1', [
    ['Alice 50000 60000', 'Employee: Alice Salary: 60000'],
    ['Bob 40000 -1000', 'INVALID SALARY\nEmployee: Bob Salary: 40000'],
    ['Charlie 80000 0', 'Employee: Charlie Salary: 0'],
    ['David 100000 120000', 'Employee: David Salary: 120000'],
    ['Emma 75000 -500', 'INVALID SALARY\nEmployee: Emma Salary: 75000'],
    ['Frank 30000 35000', 'Employee: Frank Salary: 35000'],
    ['Grace 90000 95000', 'Employee: Grace Salary: 95000'],
    ['Henry 45000 -20000', 'INVALID SALARY\nEmployee: Henry Salary: 45000'],
    ['Ivy 65000 70000', 'Employee: Ivy Salary: 70000'],
    ['Jack 55000 55000', 'Employee: Jack Salary: 55000']
  ])
});

addProblem({
  id: 'java-enc-2',
  topicId: 'java-encapsulation-access-modifiers',
  level: 'beginner',
  title: 'Temperature Sensor Range Encapsulation',
  difficulty: 'medium',
  problemStatement: 'Implement TemperatureSensor with private reading. Setter setReading(double r) only accepts readings between -50.0 and 150.0 inclusive. If outside range, print "OUT OF RANGE" and retain previous reading. Print final reading with 1 decimal place.',
  inputFormat: 'Initial reading followed by N new reading attempts.',
  outputFormat: 'Print error messages, then "Sensor: <reading>".',
  constraints: ['1 <= N <= 10'],
  examples: [
    { input: '25.0 2\n30.5\n200.0', output: 'OUT OF RANGE\nSensor: 30.5', explanation: '200 is out of range.' },
    { input: '0.0 1\n-60.0', output: 'OUT OF RANGE\nSensor: 0.0', explanation: 'Below -50.' },
    { input: '10.0 1\n15.0', output: 'Sensor: 15.0', explanation: 'Valid.' }
  ],
  testCases: createTC('java-enc-2', [
    ['25.0 2\n30.5\n200.0', 'OUT OF RANGE\nSensor: 30.5'],
    ['0.0 1\n-60.0', 'OUT OF RANGE\nSensor: 0.0'],
    ['10.0 1\n15.0', 'Sensor: 15.0'],
    ['50.0 2\n100.0\n150.0', 'Sensor: 150.0'],
    ['20.0 1\n-50.0', 'Sensor: -50.0'],
    ['35.0 2\n150.1\n40.0', 'OUT OF RANGE\nSensor: 40.0'],
    ['0.0 2\n-50.1\n-49.9', 'OUT OF RANGE\nSensor: -49.9'],
    ['12.0 1\n12.0', 'Sensor: 12.0'],
    ['75.0 2\n80.0\n85.0', 'Sensor: 85.0'],
    ['100.0 2\n160.0\n170.0', 'OUT OF RANGE\nOUT OF RANGE\nSensor: 100.0']
  ])
});

addProblem({
  id: 'java-enc-3',
  topicId: 'java-encapsulation-access-modifiers',
  level: 'beginner',
  title: 'Immutable Point2D Class',
  difficulty: 'medium',
  problemStatement: 'Implement immutable class Point2D with private final int x and y, and translate(int dx, int dy) returning a NEW Point2D instance without modifying the original. Print "Original: (<x>, <y>) Translated: (<x+dx>, <y+dy>)".',
  inputFormat: 'Four integers: x, y, dx, dy.',
  outputFormat: 'Print "Original: (<x>, <y>) Translated: (<nx>, <ny>)".',
  constraints: ['-10^5 <= coordinates <= 10^5'],
  examples: [
    { input: '2 3 5 10', output: 'Original: (2, 3) Translated: (7, 13)', explanation: 'Translated point created.' },
    { input: '0 0 1 1', output: 'Original: (0, 0) Translated: (1, 1)', explanation: 'Origin translated.' },
    { input: '5 5 -5 -5', output: 'Original: (5, 5) Translated: (0, 0)', explanation: 'Translated to origin.' }
  ],
  testCases: createTC('java-enc-3', [
    ['2 3 5 10', 'Original: (2, 3) Translated: (7, 13)'],
    ['0 0 1 1', 'Original: (0, 0) Translated: (1, 1)'],
    ['5 5 -5 -5', 'Original: (5, 5) Translated: (0, 0)'],
    ['10 20 30 40', 'Original: (10, 20) Translated: (40, 60)'],
    ['-10 -20 10 20', 'Original: (-10, -20) Translated: (0, 0)'],
    ['100 200 -50 -100', 'Original: (100, 200) Translated: (50, 100)'],
    ['7 8 0 0', 'Original: (7, 8) Translated: (7, 8)'],
    ['1 1 99 99', 'Original: (1, 1) Translated: (100, 100)'],
    ['-5 5 10 -10', 'Original: (-5, 5) Translated: (5, -5)'],
    ['42 42 8 8', 'Original: (42, 42) Translated: (50, 50)']
  ])
});

// 11. java-inheritance-and-polymorphism (3 problems)
addProblem({
  id: 'java-inh-1',
  topicId: 'java-inheritance-and-polymorphism',
  level: 'beginner',
  title: 'Animal Hierarchy with Sound Polymorphism',
  difficulty: 'easy',
  problemStatement: 'Implement base class Animal with makeSound() returning "Generic sound" and subclasses Dog ("Woof") and Cat ("Meow"). Given animal type ("DOG", "CAT", or other), print sound.',
  inputFormat: 'Animal type string.',
  outputFormat: 'Print sound string.',
  constraints: ['String length <= 20'],
  examples: [
    { input: 'DOG', output: 'Woof', explanation: 'Dog barks.' },
    { input: 'CAT', output: 'Meow', explanation: 'Cat meows.' },
    { input: 'BIRD', output: 'Generic sound', explanation: 'Base class sound.' }
  ],
  testCases: createTC('java-inh-1', [
    ['DOG', 'Woof'],
    ['CAT', 'Meow'],
    ['BIRD', 'Generic sound'],
    ['DOG', 'Woof'],
    ['CAT', 'Meow'],
    ['LION', 'Generic sound'],
    ['DOG', 'Woof'],
    ['FISH', 'Generic sound'],
    ['CAT', 'Meow'],
    ['HORSE', 'Generic sound']
  ])
});

addProblem({
  id: 'java-inh-2',
  topicId: 'java-inheritance-and-polymorphism',
  level: 'beginner',
  title: 'Employee and Manager Salary Polymorphism',
  difficulty: 'medium',
  problemStatement: 'Implement Employee(name, baseSalary) with getCompensation() and Manager(name, baseSalary, bonus) overriding getCompensation() using super.getCompensation() + bonus. Print "Role: <role> Total: <comp>".',
  inputFormat: 'Role ("EMP" or "MGR"), name, baseSalary, and optional bonus if MGR.',
  outputFormat: 'Print "Role: <role> Total: <comp>".',
  constraints: ['1 <= baseSalary <= 10^7'],
  examples: [
    { input: 'MGR Alice 50000 15000', output: 'Role: MGR Total: 65000', explanation: 'Manager total 65000.' },
    { input: 'EMP Bob 40000', output: 'Role: EMP Total: 40000', explanation: 'Employee total 40000.' },
    { input: 'MGR Charlie 80000 0', output: 'Role: MGR Total: 80000', explanation: 'Manager zero bonus.' }
  ],
  testCases: createTC('java-inh-2', [
    ['MGR Alice 50000 15000', 'Role: MGR Total: 65000'],
    ['EMP Bob 40000', 'Role: EMP Total: 40000'],
    ['MGR Charlie 80000 0', 'Role: MGR Total: 80000'],
    ['EMP Dan 60000', 'Role: EMP Total: 60000'],
    ['MGR Emma 100000 25000', 'Role: MGR Total: 125000'],
    ['EMP Frank 35000', 'Role: EMP Total: 35000'],
    ['MGR Grace 75000 20000', 'Role: MGR Total: 95000'],
    ['EMP Henry 90000', 'Role: EMP Total: 90000'],
    ['MGR Ivy 120000 30000', 'Role: MGR Total: 150000'],
    ['EMP Jack 45000', 'Role: EMP Total: 45000']
  ])
});

addProblem({
  id: 'java-inh-3',
  topicId: 'java-inheritance-and-polymorphism',
  level: 'beginner',
  title: 'Shape Area Calculation with Dynamic Binding',
  difficulty: 'medium',
  problemStatement: 'Implement base class Shape with double getArea() and derived classes Circle(radius) (area = Math.PI * r * r) and Rectangle(w, h) (area = w * h). Given shape specification, print area rounded to 2 decimal places.',
  inputFormat: '"CIRCLE <r>" or "RECTANGLE <w> <h>".',
  outputFormat: 'Print area with 2 decimal places.',
  constraints: ['1 <= dimensions <= 1000'],
  examples: [
    { input: 'CIRCLE 5', output: '78.54', explanation: 'Circle area.' },
    { input: 'RECTANGLE 4 5', output: '20.00', explanation: 'Rectangle area.' },
    { input: 'CIRCLE 10', output: '314.16', explanation: 'Circle radius 10.' }
  ],
  testCases: createTC('java-inh-3', [
    ['CIRCLE 5', '78.54'],
    ['RECTANGLE 4 5', '20.00'],
    ['CIRCLE 10', '314.16'],
    ['RECTANGLE 10 10', '100.00'],
    ['CIRCLE 1', '3.14'],
    ['RECTANGLE 7 3', '21.00'],
    ['CIRCLE 7', '153.94'],
    ['RECTANGLE 15 4', '60.00'],
    ['CIRCLE 2', '12.57'],
    ['RECTANGLE 12 12', '144.00']
  ])
});

// 12. java-abstraction-and-interfaces (3 problems)
addProblem({
  id: 'java-abs-1',
  topicId: 'java-abstraction-and-interfaces',
  level: 'beginner',
  title: 'Payment Gateway Interface Implementation',
  difficulty: 'easy',
  problemStatement: 'Implement PaymentMethod interface with processPayment(double amount). Create CreditCard (adds 2% transaction fee) and PayPal (adds 1% transaction fee). Given method ("CC" or "PAYPAL") and amount, print "Charged: <amount_with_fee>" rounded to 2 decimal places.',
  inputFormat: 'Payment type ("CC" or "PAYPAL") and double amount.',
  outputFormat: 'Print "Charged: <total>".',
  constraints: ['1 <= amount <= 10^7'],
  examples: [
    { input: 'CC 100.0', output: 'Charged: 102.00', explanation: '100 + 2% fee = 102.00.' },
    { input: 'PAYPAL 100.0', output: 'Charged: 101.00', explanation: '100 + 1% fee = 101.00.' },
    { input: 'CC 50.0', output: 'Charged: 51.00', explanation: '50 + 2% fee = 51.00.' }
  ],
  testCases: createTC('java-abs-1', [
    ['CC 100.0', 'Charged: 102.00'],
    ['PAYPAL 100.0', 'Charged: 101.00'],
    ['CC 50.0', 'Charged: 51.00'],
    ['PAYPAL 200.0', 'Charged: 202.00'],
    ['CC 1000.0', 'Charged: 1020.00'],
    ['PAYPAL 500.0', 'Charged: 505.00'],
    ['CC 75.0', 'Charged: 76.50'],
    ['PAYPAL 80.0', 'Charged: 80.80'],
    ['CC 250.0', 'Charged: 255.00'],
    ['PAYPAL 1000.0', 'Charged: 1010.00']
  ])
});

addProblem({
  id: 'java-abs-2',
  topicId: 'java-abstraction-and-interfaces',
  level: 'beginner',
  title: 'Printable and Serializable Interfaces',
  difficulty: 'medium',
  problemStatement: 'Implement an abstract class Document with title, and interfaces Printable (printPreview()) and Exportable (exportFormat()). Implement Report class inheriting Document and both interfaces. Output formatted summary string "Report: <title> [PRINT_READY, EXPORT_OK]".',
  inputFormat: 'Title string.',
  outputFormat: 'Print summary status string.',
  constraints: ['1 <= len(title) <= 100'],
  examples: [
    { input: 'FinancialQ3', output: 'Report: FinancialQ3 [PRINT_READY, EXPORT_OK]', explanation: 'Summary.' },
    { input: 'AnnualAudit', output: 'Report: AnnualAudit [PRINT_READY, EXPORT_OK]', explanation: 'Summary.' },
    { input: 'SalesSummary', output: 'Report: SalesSummary [PRINT_READY, EXPORT_OK]', explanation: 'Summary.' }
  ],
  testCases: createTC('java-abs-2', [
    ['FinancialQ3', 'Report: FinancialQ3 [PRINT_READY, EXPORT_OK]'],
    ['AnnualAudit', 'Report: AnnualAudit [PRINT_READY, EXPORT_OK]'],
    ['SalesSummary', 'Report: SalesSummary [PRINT_READY, EXPORT_OK]'],
    ['TechSpecs', 'Report: TechSpecs [PRINT_READY, EXPORT_OK]'],
    ['ProjectRoadmap', 'Report: ProjectRoadmap [PRINT_READY, EXPORT_OK]'],
    ['Budget2026', 'Report: Budget2026 [PRINT_READY, EXPORT_OK]'],
    ['UserManual', 'Report: UserManual [PRINT_READY, EXPORT_OK]'],
    ['ReleaseNotes', 'Report: ReleaseNotes [PRINT_READY, EXPORT_OK]'],
    ['SystemArchitecture', 'Report: SystemArchitecture [PRINT_READY, EXPORT_OK]'],
    ['SecurityAssessment', 'Report: SecurityAssessment [PRINT_READY, EXPORT_OK]']
  ])
});

addProblem({
  id: 'java-abs-3',
  topicId: 'java-abstraction-and-interfaces',
  level: 'beginner',
  title: 'Abstract Vehicle with Speed Limit',
  difficulty: 'medium',
  problemStatement: 'Implement abstract class Vehicle with abstract int getMaxSpeed(). Derived Car has maxSpeed 180, Truck 100, and SportsCar 300. Given vehicle type, print "Max Speed: <speed> km/h". If unknown, print "UNKNOWN VEHICLE".',
  inputFormat: 'Vehicle type string.',
  outputFormat: 'Print speed statement or error.',
  constraints: ['String length <= 20'],
  examples: [
    { input: 'CAR', output: 'Max Speed: 180 km/h', explanation: 'Car max speed 180.' },
    { input: 'TRUCK', output: 'Max Speed: 100 km/h', explanation: 'Truck max speed 100.' },
    { input: 'PLANE', output: 'UNKNOWN VEHICLE', explanation: 'Unknown type.' }
  ],
  testCases: createTC('java-abs-3', [
    ['CAR', 'Max Speed: 180 km/h'],
    ['TRUCK', 'Max Speed: 100 km/h'],
    ['PLANE', 'UNKNOWN VEHICLE'],
    ['SPORTSCAR', 'Max Speed: 300 km/h'],
    ['CAR', 'Max Speed: 180 km/h'],
    ['BOAT', 'UNKNOWN VEHICLE'],
    ['TRUCK', 'Max Speed: 100 km/h'],
    ['SPORTSCAR', 'Max Speed: 300 km/h'],
    ['BIKE', 'UNKNOWN VEHICLE'],
    ['CAR', 'Max Speed: 180 km/h']
  ])
});

console.log('Processed beginner java problems. Total so far:', problems.length);

// -------------------------------------------------------------
// INTERMEDIATE
// -------------------------------------------------------------

// 13. java-exception-hierarchy (3 problems)
addProblem({
  id: 'java-exc-1',
  topicId: 'java-exception-hierarchy',
  level: 'intermediate',
  title: 'ArithmeticException Division Catching',
  difficulty: 'easy',
  problemStatement: 'Read integers A and B. Compute A / B. If ArithmeticException occurs (division by zero), catch it and print "ARITHMETIC ERROR: DIVISION BY ZERO". Otherwise print quotient.',
  inputFormat: 'Two space-separated integers A and B.',
  outputFormat: 'Print quotient or error.',
  constraints: ['-10^9 <= A, B <= 10^9'],
  examples: [
    { input: '20 4', output: '5', explanation: '20 / 4 = 5.' },
    { input: '10 0', output: 'ARITHMETIC ERROR: DIVISION BY ZERO', explanation: 'Divide by zero caught.' },
    { input: '0 5', output: '0', explanation: '0 / 5 = 0.' }
  ],
  testCases: createTC('java-exc-1', [
    ['20 4', '5'],
    ['10 0', 'ARITHMETIC ERROR: DIVISION BY ZERO'],
    ['0 5', '0'],
    ['100 25', '4'],
    ['50 0', 'ARITHMETIC ERROR: DIVISION BY ZERO'],
    ['-10 2', '-5'],
    ['15 3', '5'],
    ['7 0', 'ARITHMETIC ERROR: DIVISION BY ZERO'],
    ['42 7', '6'],
    ['100 10', '10']
  ])
});

addProblem({
  id: 'java-exc-2',
  topicId: 'java-exception-hierarchy',
  level: 'intermediate',
  title: 'Custom InvalidAgeException in Java',
  difficulty: 'medium',
  problemStatement: 'Define custom checked exception InvalidAgeException. If age < 0 or age > 150, throw and catch it, printing "INVALID AGE: OUT OF RANGE". Otherwise print "VALID AGE: <age>".',
  inputFormat: 'An integer age.',
  outputFormat: 'Print validation outcome.',
  constraints: ['-1000 <= age <= 1000'],
  examples: [
    { input: '25', output: 'VALID AGE: 25', explanation: 'Valid age.' },
    { input: '-5', output: 'INVALID AGE: OUT OF RANGE', explanation: 'Negative age.' },
    { input: '180', output: 'INVALID AGE: OUT OF RANGE', explanation: 'Age > 150.' }
  ],
  testCases: createTC('java-exc-2', [
    ['25', 'VALID AGE: 25'],
    ['-5', 'INVALID AGE: OUT OF RANGE'],
    ['180', 'INVALID AGE: OUT OF RANGE'],
    ['0', 'VALID AGE: 0'],
    ['150', 'VALID AGE: 150'],
    ['75', 'VALID AGE: 75'],
    ['-1', 'INVALID AGE: OUT OF RANGE'],
    ['151', 'INVALID AGE: OUT OF RANGE'],
    ['99', 'VALID AGE: 99'],
    ['42', 'VALID AGE: 42']
  ])
});

addProblem({
  id: 'java-exc-3',
  topicId: 'java-exception-hierarchy',
  level: 'intermediate',
  title: 'Multi-Catch Exception Handler',
  difficulty: 'medium',
  problemStatement: 'Given token A, token B, and index K, parse A and B as integers and array of size 3. If parsing fails, catch NumberFormatException and print "ERROR: NUMBER FORMAT". If index K < 0 or K >= 3, catch ArrayIndexOutOfBoundsException and print "ERROR: ARRAY INDEX". Otherwise print "OK: <A+B>".',
  inputFormat: 'Tokens A, B, and integer index K.',
  outputFormat: 'Print status message.',
  constraints: ['Arbitrary input tokens.'],
  examples: [
    { input: '10 20 1', output: 'OK: 30', explanation: 'Valid inputs.' },
    { input: 'abc 20 1', output: 'ERROR: NUMBER FORMAT', explanation: 'Number format error.' },
    { input: '10 20 5', output: 'ERROR: ARRAY INDEX', explanation: 'Index 5 >= 3.' }
  ],
  testCases: createTC('java-exc-3', [
    ['10 20 1', 'OK: 30'],
    ['abc 20 1', 'ERROR: NUMBER FORMAT'],
    ['10 20 5', 'ERROR: ARRAY INDEX'],
    ['5 15 0', 'OK: 20'],
    ['100 xyz 2', 'ERROR: NUMBER FORMAT'],
    ['50 50 -1', 'ERROR: ARRAY INDEX'],
    ['0 0 2', 'OK: 0'],
    ['12 34 3', 'ERROR: ARRAY INDEX'],
    ['foo bar 0', 'ERROR: NUMBER FORMAT'],
    ['7 8 1', 'OK: 15']
  ])
});

// 14. java-try-with-resources (3 problems)
addProblem({
  id: 'java-twr-1',
  topicId: 'java-try-with-resources',
  level: 'intermediate',
  title: 'AutoCloseable Resource Lifecycle Simulation',
  difficulty: 'easy',
  problemStatement: 'Simulate an AutoCloseable database connection: Output "OPEN <id>", execute action, and on close automatically output "CLOSED <id>". Given resource ID and action string, print lifecycle.',
  inputFormat: 'Connection ID (string) and action (string).',
  outputFormat: 'Print "OPEN <id>\nEXEC: <action>\nCLOSED <id>".',
  constraints: ['1 <= len <= 50'],
  examples: [
    { input: 'Conn1 QUERY', output: 'OPEN Conn1\nEXEC: QUERY\nCLOSED Conn1', explanation: 'Lifecycle.' },
    { input: 'DB2 COMMIT', output: 'OPEN DB2\nEXEC: COMMIT\nCLOSED DB2', explanation: 'Lifecycle.' },
    { input: 'PoolA PING', output: 'OPEN PoolA\nEXEC: PING\nCLOSED PoolA', explanation: 'Ping.' }
  ],
  testCases: createTC('java-twr-1', [
    ['Conn1 QUERY', 'OPEN Conn1\nEXEC: QUERY\nCLOSED Conn1'],
    ['DB2 COMMIT', 'OPEN DB2\nEXEC: COMMIT\nCLOSED DB2'],
    ['PoolA PING', 'OPEN PoolA\nEXEC: PING\nCLOSED PoolA'],
    ['Session5 SELECT', 'OPEN Session5\nEXEC: SELECT\nCLOSED Session5'],
    ['Link1 UPDATE', 'OPEN Link1\nEXEC: UPDATE\nCLOSED Link1'],
    ['Socket9 FLUSH', 'OPEN Socket9\nEXEC: FLUSH\nCLOSED Socket9'],
    ['Stream3 READ', 'OPEN Stream3\nEXEC: READ\nCLOSED Stream3'],
    ['Channel7 SEND', 'OPEN Channel7\nEXEC: SEND\nCLOSED Channel7'],
    ['Client2 RECV', 'OPEN Client2\nEXEC: RECV\nCLOSED Client2'],
    ['Node4 SYNC', 'OPEN Node4\nEXEC: SYNC\nCLOSED Node4']
  ])
});

addProblem({
  id: 'java-twr-2',
  topicId: 'java-try-with-resources',
  level: 'intermediate',
  title: 'Scanner AutoClose in try-with-resources',
  difficulty: 'medium',
  problemStatement: 'Read integers until EOF using Scanner inside try-with-resources. Compute sum and count. Print "Count: <cnt> Sum: <sum>".',
  inputFormat: 'Space-separated integers.',
  outputFormat: 'Print "Count: <cnt> Sum: <sum>".',
  constraints: ['1 <= count <= 1000'],
  examples: [
    { input: '10 20 30', output: 'Count: 3 Sum: 60', explanation: '3 numbers sum to 60.' },
    { input: '5 5', output: 'Count: 2 Sum: 10', explanation: '2 numbers.' },
    { input: '100', output: 'Count: 1 Sum: 100', explanation: '1 number.' }
  ],
  testCases: createTC('java-twr-2', [
    ['10 20 30', 'Count: 3 Sum: 60'],
    ['5 5', 'Count: 2 Sum: 10'],
    ['100', 'Count: 1 Sum: 100'],
    ['1 2 3 4 5', 'Count: 5 Sum: 15'],
    ['-10 10 -20 20', 'Count: 4 Sum: 0'],
    ['25 25 25 25', 'Count: 4 Sum: 100'],
    ['7 14 21', 'Count: 3 Sum: 42'],
    ['0 0 0', 'Count: 3 Sum: 0'],
    ['10 50 40', 'Count: 3 Sum: 100'],
    ['100 200 300 400', 'Count: 4 Sum: 1000']
  ])
});

addProblem({
  id: 'java-twr-3',
  topicId: 'java-try-with-resources',
  level: 'intermediate',
  title: 'Double Resource Safe Execution Ordering',
  difficulty: 'medium',
  problemStatement: 'In try-with-resources with two resources ResA and ResB (declared in that order), resources are closed in REVERSE declaration order. Print initialization and closing order.',
  inputFormat: 'Names of two resources: ResA and ResB.',
  outputFormat: 'Print "INIT: <ResA>\nINIT: <ResB>\nCLOSE: <ResB>\nCLOSE: <ResA>".',
  constraints: ['Names <= 50 chars.'],
  examples: [
    { input: 'FileIn FileOut', output: 'INIT: FileIn\nINIT: FileOut\nCLOSE: FileOut\nCLOSE: FileIn', explanation: 'Reverse order close.' },
    { input: 'Reader Writer', output: 'INIT: Reader\nINIT: Writer\nCLOSE: Writer\nCLOSE: Reader', explanation: 'Reverse close.' },
    { input: 'R1 R2', output: 'INIT: R1\nINIT: R2\nCLOSE: R2\nCLOSE: R1', explanation: 'R2 closed before R1.' }
  ],
  testCases: createTC('java-twr-3', [
    ['FileIn FileOut', 'INIT: FileIn\nINIT: FileOut\nCLOSE: FileOut\nCLOSE: FileIn'],
    ['Reader Writer', 'INIT: Reader\nINIT: Writer\nCLOSE: Writer\nCLOSE: Reader'],
    ['R1 R2', 'INIT: R1\nINIT: R2\nCLOSE: R2\nCLOSE: R1'],
    ['ConnA ConnB', 'INIT: ConnA\nINIT: ConnB\nCLOSE: ConnB\nCLOSE: ConnA'],
    ['SocketIn SocketOut', 'INIT: SocketIn\nINIT: SocketOut\nCLOSE: SocketOut\nCLOSE: SocketIn'],
    ['Stream1 Stream2', 'INIT: Stream1\nINIT: Stream2\nCLOSE: Stream2\nCLOSE: Stream1'],
    ['LockX LockY', 'INIT: LockX\nINIT: LockY\nCLOSE: LockY\nCLOSE: LockX'],
    ['A B', 'INIT: A\nINIT: B\nCLOSE: B\nCLOSE: A'],
    ['Alpha Beta', 'INIT: Alpha\nINIT: Beta\nCLOSE: Beta\nCLOSE: Alpha'],
    ['First Second', 'INIT: First\nINIT: Second\nCLOSE: Second\nCLOSE: First']
  ])
});

// 15. java-generics (3 problems)
addProblem({
  id: 'java-gen-1',
  topicId: 'java-generics',
  level: 'intermediate',
  title: 'Generic Box Container Class',
  difficulty: 'easy',
  problemStatement: 'Implement generic Box<T> with set(T item) and get(). Given type ("INT" or "STRING") and value, store in Box and print "Box Contains: <val>".',
  inputFormat: 'Type ("INT" or "STRING") and value.',
  outputFormat: 'Print "Box Contains: <val>".',
  constraints: ['Valid input tokens.'],
  examples: [
    { input: 'INT 42', output: 'Box Contains: 42', explanation: 'Integer box.' },
    { input: 'STRING Java', output: 'Box Contains: Java', explanation: 'String box.' },
    { input: 'INT 100', output: 'Box Contains: 100', explanation: 'Box contains 100.' }
  ],
  testCases: createTC('java-gen-1', [
    ['INT 42', 'Box Contains: 42'],
    ['STRING Java', 'Box Contains: Java'],
    ['INT 100', 'Box Contains: 100'],
    ['STRING CodeMentor', 'Box Contains: CodeMentor'],
    ['INT -10', 'Box Contains: -10'],
    ['STRING Generics', 'Box Contains: Generics'],
    ['INT 0', 'Box Contains: 0'],
    ['STRING Hello', 'Box Contains: Hello'],
    ['INT 9999', 'Box Contains: 9999'],
    ['STRING Antigravity', 'Box Contains: Antigravity']
  ])
});

addProblem({
  id: 'java-gen-2',
  topicId: 'java-generics',
  level: 'intermediate',
  title: 'Generic Array Swapper Method',
  difficulty: 'medium',
  problemStatement: 'Implement generic method <T> void swap(T[] arr, int i, int j). Given array of N integers and indices i, j, swap elements and print resulting array space-separated.',
  inputFormat: 'First line N, second line N integers, third line i and j.',
  outputFormat: 'Print space-separated swapped array.',
  constraints: ['1 <= N <= 1000', '0 <= i, j < N'],
  examples: [
    { input: '4\n1 2 3 4\n0 3', output: '4 2 3 1', explanation: 'Index 0 and 3 swapped.' },
    { input: '3\n10 20 30\n1 2', output: '10 30 20', explanation: 'Index 1 and 2 swapped.' },
    { input: '2\n5 10\n0 1', output: '10 5', explanation: 'Swapped.' }
  ],
  testCases: createTC('java-gen-2', [
    ['4\n1 2 3 4\n0 3', '4 2 3 1'],
    ['3\n10 20 30\n1 2', '10 30 20'],
    ['2\n5 10\n0 1', '10 5'],
    ['5\n1 2 3 4 5\n2 2', '1 2 3 4 5'],
    ['4\n10 20 30 40\n1 3', '10 40 30 20'],
    ['3\n7 8 9\n0 1', '8 7 9'],
    ['5\n5 4 3 2 1\n0 4', '1 4 3 2 5'],
    ['2\n100 200\n0 0', '100 200'],
    ['4\n-1 -2 -3 -4\n0 2', '-3 -2 -1 -4'],
    ['3\n50 100 150\n0 2', '150 100 50']
  ])
});

addProblem({
  id: 'java-gen-3',
  topicId: 'java-generics',
  level: 'intermediate',
  title: 'Generic Maximum Finder with Comparable',
  difficulty: 'medium',
  problemStatement: 'Implement generic method <T extends Comparable<T>> T findMax(T[] arr). Given type ("INT" or "STRING"), size N, and N space-separated values, print the maximum value.',
  inputFormat: 'Type ("INT" or "STRING"), N, followed by N space-separated elements.',
  outputFormat: 'Print maximum element.',
  constraints: ['1 <= N <= 1000'],
  examples: [
    { input: 'INT 4 10 50 20 40', output: '50', explanation: 'Max integer.' },
    { input: 'STRING 3 apple zebra banana', output: 'zebra', explanation: 'Lexicographically greatest string.' },
    { input: 'INT 1 100', output: '100', explanation: 'Single element.' }
  ],
  testCases: createTC('java-gen-3', [
    ['INT 4 10 50 20 40', '50'],
    ['STRING 3 apple zebra banana', 'zebra'],
    ['INT 1 100', '100'],
    ['STRING 4 cat dog elephant ant', 'elephant'],
    ['INT 5 -10 -5 -20 -1 -8', '-1'],
    ['STRING 2 beta alpha', 'beta'],
    ['INT 3 1000 500 2000', '2000'],
    ['STRING 3 java python rust', 'rust'],
    ['INT 4 0 0 0 1', '1'],
    ['STRING 3 red green blue', 'red']
  ])
});

// 16. java-list-arraylist-linkedlist (4 problems)
addProblem({
  id: 'java-list-1',
  topicId: 'java-list-arraylist-linkedlist',
  level: 'intermediate',
  title: 'Remove All Even Numbers from ArrayList',
  difficulty: 'easy',
  problemStatement: 'Given N integers in an ArrayList, remove all even numbers using an Iterator or removeIf(). Print the remaining odd numbers space-separated. If empty, print "EMPTY".',
  inputFormat: 'First line N, second line N space-separated integers.',
  outputFormat: 'Print remaining odd integers or "EMPTY".',
  constraints: ['1 <= N <= 10^5'],
  examples: [
    { input: '5\n1 2 3 4 5', output: '1 3 5', explanation: 'Evens 2, 4 removed.' },
    { input: '3\n2 4 6', output: 'EMPTY', explanation: 'All removed.' },
    { input: '3\n1 3 5', output: '1 3 5', explanation: 'None removed.' }
  ],
  testCases: createTC('java-list-1', [
    ['5\n1 2 3 4 5', '1 3 5'],
    ['3\n2 4 6', 'EMPTY'],
    ['3\n1 3 5', '1 3 5'],
    ['4\n10 20 30 40', 'EMPTY'],
    ['6\n0 1 2 3 4 5', '1 3 5'],
    ['4\n-1 -2 -3 -4', '-1 -3'],
    ['1\n7', '7'],
    ['1\n8', 'EMPTY'],
    ['5\n11 22 33 44 55', '11 33 55'],
    ['4\n9 7 5 3', '9 7 5 3']
  ])
});

addProblem({
  id: 'java-list-2',
  topicId: 'java-list-arraylist-linkedlist',
  level: 'intermediate',
  title: 'Sort List of Strings by Length',
  difficulty: 'medium',
  problemStatement: 'Given N strings in an ArrayList, sort them by length in ascending order using Comparator.comparingInt(String::length). In case of ties, maintain alphabetical order. Print space-separated sorted strings.',
  inputFormat: 'First line N, second line N space-separated strings.',
  outputFormat: 'Print space-separated sorted strings.',
  constraints: ['1 <= N <= 1000'],
  examples: [
    { input: '4\napple cat dog banana', output: 'cat dog apple banana', explanation: 'Sorted by length, ties alphabetical.' },
    { input: '3\naaa b c', output: 'b c aaa', explanation: 'b, c (len 1), aaa (len 3).' },
    { input: '2\nworld hello', output: 'hello world', explanation: 'Ties sorted alphabetically.' }
  ],
  testCases: createTC('java-list-2', [
    ['4\napple cat dog banana', 'cat dog apple banana'],
    ['3\naaa b c', 'b c aaa'],
    ['2\nworld hello', 'hello world'],
    ['5\npython c java rust ruby', 'c java ruby rust python'],
    ['4\none two three four', 'one two four three'],
    ['3\nz y x', 'x y z'],
    ['4\nelephant mouse ant bee', 'ant bee mouse elephant'],
    ['3\ncat bat rat', 'bat cat rat'],
    ['4\nalpha beta gamma delta', 'beta delta gamma alpha'],
    ['2\nshort verylongword', 'short verylongword']
  ])
});

addProblem({
  id: 'java-list-3',
  topicId: 'java-list-arraylist-linkedlist',
  level: 'intermediate',
  title: 'Detect Duplicate Elements in List',
  difficulty: 'medium',
  problemStatement: 'Given N integers in an ArrayList, find all duplicate elements (elements that appear more than once). Print distinct duplicate elements sorted in ascending order separated by space. If none, print "NO DUPLICATES".',
  inputFormat: 'First line N, second line N space-separated integers.',
  outputFormat: 'Print space-separated duplicates or "NO DUPLICATES".',
  constraints: ['1 <= N <= 10^5'],
  examples: [
    { input: '6\n1 2 3 2 1 4', output: '1 2', explanation: '1 and 2 appear multiple times.' },
    { input: '3\n1 2 3', output: 'NO DUPLICATES', explanation: 'No duplicates.' },
    { input: '4\n5 5 5 5', output: '5', explanation: '5 is duplicate.' }
  ],
  testCases: createTC('java-list-3', [
    ['6\n1 2 3 2 1 4', '1 2'],
    ['3\n1 2 3', 'NO DUPLICATES'],
    ['4\n5 5 5 5', '5'],
    ['5\n10 20 30 40 50', 'NO DUPLICATES'],
    ['7\n4 3 2 7 8 2 3', '2 3'],
    ['5\n10 10 20 20 30', '10 20'],
    ['1\n100', 'NO DUPLICATES'],
    ['6\n-1 -2 -1 0 5 5', '-1 5'],
    ['4\n7 8 8 7', '7 8'],
    ['5\n9 9 9 1 2', '9']
  ])
});

addProblem({
  id: 'java-list-4',
  topicId: 'java-list-arraylist-linkedlist',
  level: 'intermediate',
  title: 'Implement Stack Using LinkedList',
  difficulty: 'medium',
  problemStatement: 'Implement a Stack using LinkedList. Support operations: "PUSH <val>" and "POP". If POP on empty stack, print "EMPTY". Print value popped on POP.',
  inputFormat: 'First line N (operations count), next N lines contain operations.',
  outputFormat: 'Print output of each POP operation on separate lines.',
  constraints: ['1 <= N <= 1000'],
  examples: [
    { input: '4\nPUSH 10\nPUSH 20\nPOP\nPOP', output: '20\n10', explanation: 'LIFO order.' },
    { input: '2\nPOP\nPUSH 5', output: 'EMPTY', explanation: 'Pop on empty.' },
    { input: '3\nPUSH 1\nPOP\nPOP', output: '1\nEMPTY', explanation: 'Pop then empty.' }
  ],
  testCases: createTC('java-list-4', [
    ['4\nPUSH 10\nPUSH 20\nPOP\nPOP', '20\n10'],
    ['2\nPOP\nPUSH 5', 'EMPTY'],
    ['3\nPUSH 1\nPOP\nPOP', '1\nEMPTY'],
    ['5\nPUSH 1\nPUSH 2\nPUSH 3\nPOP\nPOP', '3\n2'],
    ['2\nPUSH 100\nPOP', '100'],
    ['3\nPOP\nPOP\nPOP', 'EMPTY\nEMPTY\nEMPTY'],
    ['4\nPUSH A\nPUSH B\nPOP\nPOP', 'B\nA'],
    ['4\nPUSH 5\nPOP\nPUSH 10\nPOP', '5\n10'],
    ['3\nPUSH X\nPUSH Y\nPOP', 'Y'],
    ['5\nPUSH 10\nPUSH 20\nPUSH 30\nPOP\nPOP', '30\n20']
  ])
});

// 17. java-set-hashset-treeset (3 problems)
addProblem({
  id: 'java-set-1',
  topicId: 'java-set-hashset-treeset',
  level: 'intermediate',
  title: 'Find Unique Words with HashSet',
  difficulty: 'easy',
  problemStatement: 'Given a sentence of space-separated words, count the number of distinct unique words using HashSet (case-insensitive). Print the count.',
  inputFormat: 'A line of words.',
  outputFormat: 'Print distinct word count.',
  constraints: ['1 <= words <= 10^4'],
  examples: [
    { input: 'Apple banana apple orange banana', output: '3', explanation: 'apple, banana, orange.' },
    { input: 'one two three', output: '3', explanation: 'All unique.' },
    { input: 'same same same', output: '1', explanation: 'Single word.' }
  ],
  testCases: createTC('java-set-1', [
    ['Apple banana apple orange banana', '3'],
    ['one two three', '3'],
    ['same same same', '1'],
    ['the quick brown fox jumps over the lazy dog', '8'],
    ['java is java is java', '2'],
    ['Code Mentor Academy', '3'],
    ['hello world Hello World', '2'],
    ['a b c d e', '5'],
    ['test test test test', '1'],
    ['alpha beta gamma alpha beta', '3']
  ])
});

addProblem({
  id: 'java-set-2',
  topicId: 'java-set-hashset-treeset',
  level: 'intermediate',
  title: 'Sorted Unique Numbers with TreeSet',
  difficulty: 'medium',
  problemStatement: 'Given N integers, insert them into a TreeSet to eliminate duplicates and sort in ascending order. Print the elements separated by space.',
  inputFormat: 'First line N, second line N space-separated integers.',
  outputFormat: 'Print sorted unique integers.',
  constraints: ['1 <= N <= 10^5'],
  examples: [
    { input: '6\n4 2 4 1 2 3', output: '1 2 3 4', explanation: 'Sorted unique values.' },
    { input: '3\n5 5 5', output: '5', explanation: 'Single value.' },
    { input: '4\n1 2 3 4', output: '1 2 3 4', explanation: 'Already unique.' }
  ],
  testCases: createTC('java-set-2', [
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
  id: 'java-set-3',
  topicId: 'java-set-hashset-treeset',
  level: 'intermediate',
  title: 'Intersection of Two Sets in Java',
  difficulty: 'medium',
  problemStatement: 'Given two sets of integers A and B, find their intersection using setA.retainAll(setB). Print the intersection sorted in ascending order separated by space. If empty, print "EMPTY".',
  inputFormat: 'First line size of A and elements; Second line size of B and elements.',
  outputFormat: 'Print space-separated sorted intersection or "EMPTY".',
  constraints: ['1 <= sizes <= 10^4'],
  examples: [
    { input: '3 1 2 3\n3 2 3 4', output: '2 3', explanation: '2 and 3 in both.' },
    { input: '2 1 2\n2 3 4', output: 'EMPTY', explanation: 'No common elements.' },
    { input: '2 5 10\n2 5 10', output: '5 10', explanation: 'Equal sets.' }
  ],
  testCases: createTC('java-set-3', [
    ['3 1 2 3\n3 2 3 4', '2 3'],
    ['2 1 2\n2 3 4', 'EMPTY'],
    ['2 5 10\n2 5 10', '5 10'],
    ['4 1 3 5 7\n4 2 4 6 8', 'EMPTY'],
    ['3 10 20 30\n3 20 30 40', '20 30'],
    ['1 100\n1 100', '100'],
    ['1 10\n1 20', 'EMPTY'],
    ['3 5 6 7\n2 6 7', '6 7'],
    ['4 2 4 6 8\n2 4 8', '4 8'],
    ['3 0 1 2\n3 -1 0 1', '0 1']
  ])
});

// 18. java-map-hashmap-treemap (4 problems)
addProblem({
  id: 'java-map-1',
  topicId: 'java-map-hashmap-treemap',
  level: 'intermediate',
  title: 'Word Frequency Counter with HashMap',
  difficulty: 'easy',
  problemStatement: 'Given a sentence of space-separated words, count the frequency of each word using HashMap. Print words sorted alphabetically in format "word:count" separated by spaces.',
  inputFormat: 'A line of words.',
  outputFormat: 'Print space-separated sorted "word:count" pairs.',
  constraints: ['1 <= words <= 10^4'],
  examples: [
    { input: 'apple banana apple cherry banana apple', output: 'apple:3 banana:2 cherry:1', explanation: 'Counts.' },
    { input: 'cat dog cat dog bird', output: 'bird:1 cat:2 dog:2', explanation: 'Alphabetical.' },
    { input: 'java java', output: 'java:2', explanation: '2 occurrences.' }
  ],
  testCases: createTC('java-map-1', [
    ['apple banana apple cherry banana apple', 'apple:3 banana:2 cherry:1'],
    ['cat dog cat dog bird', 'bird:1 cat:2 dog:2'],
    ['java java', 'java:2'],
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
  id: 'java-map-2',
  topicId: 'java-map-hashmap-treemap',
  level: 'intermediate',
  title: 'First Non-Repeating Character Using Map',
  difficulty: 'medium',
  problemStatement: 'Given a string S, find the first non-repeating character using a frequency Map. Print the character. If no non-repeating character exists, print "-1".',
  inputFormat: 'A string S.',
  outputFormat: 'Print character or -1.',
  constraints: ['1 <= len(S) <= 10^5'],
  examples: [
    { input: 'leetcode', output: 'l', explanation: 'l is first non-repeating.' },
    { input: 'loveleetcode', output: 'v', explanation: 'v is first non-repeating.' },
    { input: 'aabb', output: '-1', explanation: 'All repeat.' }
  ],
  testCases: createTC('java-map-2', [
    ['leetcode', 'l'],
    ['loveleetcode', 'v'],
    ['aabb', '-1'],
    ['java', 'j'],
    ['banana', 'b'],
    ['swiss', 'w'],
    ['racecar', 'e'],
    ['abcdef', 'a'],
    ['aaaa', '-1'],
    ['antigravity', 'n']
  ])
});

addProblem({
  id: 'java-map-3',
  topicId: 'java-map-hashmap-treemap',
  level: 'intermediate',
  title: 'Two Sum Target Lookup Using HashMap',
  difficulty: 'medium',
  problemStatement: 'Given N integers and target T, find two distinct indices i and j (0-indexed, i < j) such that arr[i] + arr[j] == T in O(N) using HashMap. Print "i j". If none, print "-1 -1".',
  inputFormat: 'First line N and T, second line N space-separated integers.',
  outputFormat: 'Print "i j" or "-1 -1".',
  constraints: ['2 <= N <= 10^5'],
  examples: [
    { input: '4 9\n2 7 11 15', output: '0 1', explanation: '2 + 7 = 9 at indices 0 and 1.' },
    { input: '3 6\n3 2 4', output: '1 2', explanation: '2 + 4 = 6 at 1 and 2.' },
    { input: '4 10\n1 2 3 4', output: '-1 -1', explanation: 'None sum to 10.' }
  ],
  testCases: createTC('java-map-3', [
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
  id: 'java-map-4',
  topicId: 'java-map-hashmap-treemap',
  level: 'intermediate',
  title: 'Sorted Phone Directory with TreeMap',
  difficulty: 'medium',
  problemStatement: 'Given N contacts (name and phone number), store in TreeMap to maintain natural sorted order of names. Print each contact as "name:phone" separated by spaces.',
  inputFormat: 'First line N, next N lines each contain name and phone.',
  outputFormat: 'Print space-separated sorted "name:phone" pairs.',
  constraints: ['1 <= N <= 1000'],
  examples: [
    { input: '3\nBob 123\nAlice 456\nCharlie 789', output: 'Alice:456 Bob:123 Charlie:789', explanation: 'Sorted by name.' },
    { input: '2\nDan 555\nAmy 111', output: 'Amy:111 Dan:555', explanation: 'Amy before Dan.' },
    { input: '1\nSolo 999', output: 'Solo:999', explanation: 'Single contact.' }
  ],
  testCases: createTC('java-map-4', [
    ['3\nBob 123\nAlice 456\nCharlie 789', 'Alice:456 Bob:123 Charlie:789'],
    ['2\nDan 555\nAmy 111', 'Amy:111 Dan:555'],
    ['1\nSolo 999', 'Solo:999'],
    ['4\nDave 4\nCarol 3\nBob 2\nAlice 1', 'Alice:1 Bob:2 Carol:3 Dave:4'],
    ['3\nZack 90\nMike 50\nAlex 10', 'Alex:10 Mike:50 Zack:90'],
    ['2\nJohn 100\nJane 200', 'Jane:200 John:100'],
    ['3\nPete 77\nPaul 88\nMary 99', 'Mary:99 Paul:88 Pete:77'],
    ['4\nTom 10\nJerry 20\nSpike 30\nTyke 40', 'Jerry:20 Spike:30 Tom:10 Tyke:40'],
    ['2\nK1 111\nK2 222', 'K1:111 K2:222'],
    ['3\nB 2\nA 1\nC 3', 'A:1 B:2 C:3']
  ])
});

// 19. java-lambdas-functional-interfaces (3 problems)
addProblem({
  id: 'java-lam-1',
  topicId: 'java-lambdas-functional-interfaces',
  level: 'intermediate',
  title: 'Predicate Lambda for Even Numbers',
  difficulty: 'easy',
  problemStatement: 'Use Predicate<Integer> isEven = n -> n % 2 == 0 to filter N numbers. Print even numbers separated by space. If none, print "NONE".',
  inputFormat: 'First line N, second line N space-separated integers.',
  outputFormat: 'Print space-separated even numbers or "NONE".',
  constraints: ['1 <= N <= 10^4'],
  examples: [
    { input: '5\n1 2 3 4 5', output: '2 4', explanation: '2 and 4 are even.' },
    { input: '3\n1 3 5', output: 'NONE', explanation: 'No evens.' },
    { input: '3\n2 4 6', output: '2 4 6', explanation: 'All even.' }
  ],
  testCases: createTC('java-lam-1', [
    ['5\n1 2 3 4 5', '2 4'],
    ['3\n1 3 5', 'NONE'],
    ['3\n2 4 6', '2 4 6'],
    ['1\n8', '8'],
    ['4\n0 1 2 3', '0 2'],
    ['5\n-2 3 -4 5 6', '-2 -4 6'],
    ['4\n7 9 11 13', 'NONE'],
    ['6\n10 15 20 25 30 35', '10 20 30'],
    ['2\n4 4', '4 4'],
    ['5\n2 2 2 2 2', '2 2 2 2 2']
  ])
});

addProblem({
  id: 'java-lam-2',
  topicId: 'java-lambdas-functional-interfaces',
  level: 'intermediate',
  title: 'Function<String, String> Transformer Lambda',
  difficulty: 'medium',
  problemStatement: 'Use java.util.function.Function<String, String> lambda to transform each word in input: append suffix "_PROCESSED". Print space-separated transformed words.',
  inputFormat: 'A line of space-separated words.',
  outputFormat: 'Print space-separated transformed words.',
  constraints: ['1 <= words <= 1000'],
  examples: [
    { input: 'data task job', output: 'data_PROCESSED task_PROCESSED job_PROCESSED', explanation: 'Suffix appended.' },
    { input: 'item', output: 'item_PROCESSED', explanation: 'Single word.' },
    { input: 'A B', output: 'A_PROCESSED B_PROCESSED', explanation: 'Short words.' }
  ],
  testCases: createTC('java-lam-2', [
    ['data task job', 'data_PROCESSED task_PROCESSED job_PROCESSED'],
    ['item', 'item_PROCESSED'],
    ['A B', 'A_PROCESSED B_PROCESSED'],
    ['test code deploy', 'test_PROCESSED code_PROCESSED deploy_PROCESSED'],
    ['one two three', 'one_PROCESSED two_PROCESSED three_PROCESSED'],
    ['stream lambda function', 'stream_PROCESSED lambda_PROCESSED function_PROCESSED'],
    ['alpha beta', 'alpha_PROCESSED beta_PROCESSED'],
    ['run', 'run_PROCESSED'],
    ['x y z', 'x_PROCESSED y_PROCESSED z_PROCESSED'],
    ['hello world', 'hello_PROCESSED world_PROCESSED']
  ])
});

addProblem({
  id: 'java-lam-3',
  topicId: 'java-lambdas-functional-interfaces',
  level: 'intermediate',
  title: 'BinaryOperator Custom Calculator Lambda',
  difficulty: 'medium',
  problemStatement: 'Use BinaryOperator<Integer> to perform operation based on operator code ("ADD", "SUB", "MUL"). Given op and two integers A and B, print computed result.',
  inputFormat: 'Operator string op, followed by two integers A and B.',
  outputFormat: 'Print computed integer result.',
  constraints: ['-10^5 <= A, B <= 10^5'],
  examples: [
    { input: 'ADD 10 20', output: '30', explanation: '10 + 20 = 30.' },
    { input: 'MUL 5 6', output: '30', explanation: '5 * 6 = 30.' },
    { input: 'SUB 15 8', output: '7', explanation: '15 - 8 = 7.' }
  ],
  testCases: createTC('java-lam-3', [
    ['ADD 10 20', '30'],
    ['MUL 5 6', '30'],
    ['SUB 15 8', '7'],
    ['ADD 100 -50', '50'],
    ['MUL -4 5', '-20'],
    ['SUB 0 10', '-10'],
    ['ADD 0 0', '0'],
    ['MUL 12 12', '144'],
    ['SUB 50 50', '0'],
    ['MUL 0 100', '0']
  ])
});

// 20. java-stream-api (4 problems)
addProblem({
  id: 'java-stream-1',
  topicId: 'java-stream-api',
  level: 'intermediate',
  title: 'Filter and Square Evens with Stream API',
  difficulty: 'easy',
  problemStatement: 'Given N integers, use Java Stream API (list.stream().filter(...).map(...).toList()) to select even numbers, square them, and print space-separated. If none, print "NONE".',
  inputFormat: 'First line N, second line N space-separated integers.',
  outputFormat: 'Print space-separated squared integers or "NONE".',
  constraints: ['1 <= N <= 10^4'],
  examples: [
    { input: '5\n1 2 3 4 5', output: '4 16', explanation: '2^2 = 4, 4^2 = 16.' },
    { input: '3\n1 3 5', output: 'NONE', explanation: 'No evens.' },
    { input: '3\n2 4 6', output: '4 16 36', explanation: 'All evens.' }
  ],
  testCases: createTC('java-stream-1', [
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
  id: 'java-stream-2',
  topicId: 'java-stream-api',
  level: 'intermediate',
  title: 'Sum and Average with Stream Reduce',
  difficulty: 'medium',
  problemStatement: 'Given N integers, use Stream reduction or IntStream.summaryStatistics() to compute sum and average (rounded to 2 decimal places). Print "Sum: <sum> Avg: <avg>".',
  inputFormat: 'First line N, second line N space-separated integers.',
  outputFormat: 'Print "Sum: <sum> Avg: <avg>".',
  constraints: ['1 <= N <= 10^4'],
  examples: [
    { input: '4\n1 2 3 4', output: 'Sum: 10 Avg: 2.50', explanation: 'Sum 10, avg 2.5.' },
    { input: '3\n10 20 30', output: 'Sum: 60 Avg: 20.00', explanation: 'Avg 20.' },
    { input: '1\n50', output: 'Sum: 50 Avg: 50.00', explanation: 'Single element.' }
  ],
  testCases: createTC('java-stream-2', [
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
  id: 'java-stream-3',
  topicId: 'java-stream-api',
  level: 'intermediate',
  title: 'Group Strings by Length with Collectors.groupingBy',
  difficulty: 'medium',
  problemStatement: 'Given N words, group them by length using Collectors.groupingBy(String::length). For each length in ascending order, print "Len <len>: <words_space_separated_sorted>".',
  inputFormat: 'First line N, second line N space-separated words.',
  outputFormat: 'Lines formatted as "Len <len>: <sorted_words>".',
  constraints: ['1 <= N <= 1000'],
  examples: [
    { input: '4\napple cat dog banana', output: 'Len 3: cat dog\nLen 5: apple\nLen 6: banana', explanation: 'Grouped by length.' },
    { input: '3\na bb ccc', output: 'Len 1: a\nLen 2: bb\nLen 3: ccc', explanation: 'Different lengths.' },
    { input: '2\nhi go', output: 'Len 2: go hi', explanation: 'Sorted alphabetical inside length.' }
  ],
  testCases: createTC('java-stream-3', [
    ['4\napple cat dog banana', 'Len 3: cat dog\nLen 5: apple\nLen 6: banana'],
    ['3\na bb ccc', 'Len 1: a\nLen 2: bb\nLen 3: ccc'],
    ['2\nhi go', 'Len 2: go hi'],
    ['5\none two three four five', 'Len 3: one two\nLen 4: five four\nLen 5: three'],
    ['3\nz y x', 'Len 1: x y z'],
    ['4\nblue red pink teal', 'Len 3: red\nLen 4: blue pink teal'],
    ['2\njava python', 'Len 4: java\nLen 6: python'],
    ['3\ncat bat rat', 'Len 3: bat cat rat'],
    ['1\nsolo', 'Len 4: solo'],
    ['4\naaa bb c dddd', 'Len 1: c\nLen 2: bb\nLen 3: aaa\nLen 4: dddd']
  ])
});

addProblem({
  id: 'java-stream-4',
  topicId: 'java-stream-api',
  level: 'intermediate',
  title: 'Top K Highest Scores with Stream Pipeline',
  difficulty: 'medium',
  problemStatement: 'Given N integers and K, use Streams (.sorted(Comparator.reverseOrder()).limit(K)) to extract the top K highest values. Print them space-separated.',
  inputFormat: 'First line N and K, second line N space-separated integers.',
  outputFormat: 'Print space-separated top K values descending.',
  constraints: ['1 <= K <= N <= 10^5'],
  examples: [
    { input: '6 3\n10 50 30 90 20 70', output: '90 70 50', explanation: 'Top 3 highest.' },
    { input: '3 1\n5 15 10', output: '15', explanation: 'Top 1 highest.' },
    { input: '4 4\n1 2 3 4', output: '4 3 2 1', explanation: 'All elements.' }
  ],
  testCases: createTC('java-stream-4', [
    ['6 3\n10 50 30 90 20 70', '90 70 50'],
    ['3 1\n5 15 10', '15'],
    ['4 4\n1 2 3 4', '4 3 2 1'],
    ['5 2\n100 40 80 90 20', '100 90'],
    ['4 2\n-5 -1 -10 -2', '-1 -2'],
    ['5 3\n7 7 8 8 9', '9 8 8'],
    ['1 1\n42', '42'],
    ['6 3\n50 50 50 50 50 50', '50 50 50'],
    ['5 2\n12 45 23 89 67', '89 67'],
    ['4 3\n3 6 9 12', '12 9 6']
  ])
});

// 21. java-optional-and-time (3 problems)
addProblem({
  id: 'java-opt-1',
  topicId: 'java-optional-and-time',
  level: 'intermediate',
  title: 'Safe String Lookup with Optional',
  difficulty: 'easy',
  problemStatement: 'Given N key-value pairs and a query key Q, lookup in a Map returning Optional<String>. If present, print "FOUND: <value>", else print "NOT FOUND".',
  inputFormat: 'First line N, next N lines "key value", last line Q.',
  outputFormat: 'Print "FOUND: <val>" or "NOT FOUND".',
  constraints: ['1 <= N <= 1000'],
  examples: [
    { input: '2\nuser Alice\nrole admin\nuser', output: 'FOUND: Alice', explanation: 'user key found.' },
    { input: '1\nitem Book\nprice', output: 'NOT FOUND', explanation: 'price key not in map.' },
    { input: '2\nk1 v1\nk2 v2\nk2', output: 'FOUND: v2', explanation: 'k2 found.' }
  ],
  testCases: createTC('java-opt-1', [
    ['2\nuser Alice\nrole admin\nuser', 'FOUND: Alice'],
    ['1\nitem Book\nprice', 'NOT FOUND'],
    ['2\nk1 v1\nk2 v2\nk2', 'FOUND: v2'],
    ['3\nA 1\nB 2\nC 3\nB', 'FOUND: 2'],
    ['2\nx 10\ny 20\nz', 'NOT FOUND'],
    ['1\nname Bob\nname', 'FOUND: Bob'],
    ['3\nid 101\nstatus ok\nenv prod\nenv', 'FOUND: prod'],
    ['2\np 5\nq 6\nr', 'NOT FOUND'],
    ['1\nalpha beta\ngamma', 'NOT FOUND'],
    ['3\nred 1\ngreen 2\nblue 3\nblue', 'FOUND: 3']
  ])
});

addProblem({
  id: 'java-opt-2',
  topicId: 'java-optional-and-time',
  level: 'intermediate',
  title: 'Days Between Two Dates with java.time.LocalDate',
  difficulty: 'medium',
  problemStatement: 'Given two ISO dates (YYYY-MM-DD), use java.time.LocalDate and java.time.temporal.ChronoUnit.DAYS.between(d1, d2) to compute days difference. Print absolute number of days.',
  inputFormat: 'Two space-separated ISO date strings.',
  outputFormat: 'Print integer day difference.',
  constraints: ['Valid ISO-8601 dates.'],
  examples: [
    { input: '2026-01-01 2026-01-10', output: '9', explanation: '9 days.' },
    { input: '2024-02-28 2024-03-01', output: '2', explanation: '2024 is leap year, includes Feb 29.' },
    { input: '2025-12-31 2026-01-01', output: '1', explanation: '1 day across year boundary.' }
  ],
  testCases: createTC('java-opt-2', [
    ['2026-01-01 2026-01-10', '9'],
    ['2024-02-28 2024-03-01', '2'],
    ['2025-12-31 2026-01-01', '1'],
    ['2026-05-10 2026-05-10', '0'],
    ['2026-01-01 2026-01-31', '30'],
    ['2026-01-01 2027-01-01', '365'],
    ['2024-01-01 2025-01-01', '366'],
    ['2026-03-01 2026-03-15', '14'],
    ['2026-07-04 2026-07-10', '6'],
    ['2026-10-01 2026-10-07', '6']
  ])
});

addProblem({
  id: 'java-opt-3',
  topicId: 'java-optional-and-time',
  level: 'intermediate',
  title: 'Format Date with DateTimeFormatter',
  difficulty: 'medium',
  problemStatement: 'Given an ISO date (YYYY-MM-DD), parse using LocalDate and format using DateTimeFormatter.ofPattern("dd/MM/yyyy"). Print the formatted date.',
  inputFormat: 'ISO date string YYYY-MM-DD.',
  outputFormat: 'Print date in dd/MM/yyyy format.',
  constraints: ['Valid ISO date string.'],
  examples: [
    { input: '2026-10-07', output: '07/10/2026', explanation: 'Formatted date.' },
    { input: '2025-01-01', output: '01/01/2025', explanation: 'New year date.' },
    { input: '2024-02-29', output: '29/02/2024', explanation: 'Leap year date.' }
  ],
  testCases: createTC('java-opt-3', [
    ['2026-10-07', '07/10/2026'],
    ['2025-01-01', '01/01/2025'],
    ['2024-02-29', '29/02/2024'],
    ['2023-12-25', '25/12/2023'],
    ['2026-05-15', '15/05/2026'],
    ['2026-07-04', '04/07/2026'],
    ['2026-09-30', '30/09/2026'],
    ['2026-11-11', '11/11/2026'],
    ['2026-08-15', '15/08/2026'],
    ['2026-03-08', '08/03/2026']
  ])
});

// -------------------------------------------------------------
// ADVANCED
// -------------------------------------------------------------

// 22. java-jvm-memory-model (2 problems)
addProblem({
  id: 'java-jvm-1',
  topicId: 'java-jvm-memory-model',
  level: 'advanced',
  title: 'Pass-by-Value Object Reference Mutation in Java',
  difficulty: 'medium',
  problemStatement: 'Demonstrate Java pass-by-value reference semantics: Given an object with an integer field val initialized to V. When modify(obj) sets val = val + delta, the mutation is visible in caller. Print "Updated Val: <val>".',
  inputFormat: 'Initial value V and delta D.',
  outputFormat: 'Print "Updated Val: <V+D>".',
  constraints: ['-10^6 <= V, D <= 10^6'],
  examples: [
    { input: '10 5', output: 'Updated Val: 15', explanation: '10 + 5 = 15.' },
    { input: '50 -20', output: 'Updated Val: 30', explanation: '50 - 20 = 30.' },
    { input: '0 100', output: 'Updated Val: 100', explanation: '0 + 100 = 100.' }
  ],
  testCases: createTC('java-jvm-1', [
    ['10 5', 'Updated Val: 15'],
    ['50 -20', 'Updated Val: 30'],
    ['0 100', 'Updated Val: 100'],
    ['100 200', 'Updated Val: 300'],
    ['-5 5', 'Updated Val: 0'],
    ['42 8', 'Updated Val: 50'],
    ['99 1', 'Updated Val: 100'],
    ['-10 -20', 'Updated Val: -30'],
    ['500 500', 'Updated Val: 1000'],
    ['25 75', 'Updated Val: 100']
  ])
});

addProblem({
  id: 'java-jvm-2',
  topicId: 'java-jvm-memory-model',
  level: 'advanced',
  title: 'Deep Copy vs Shallow Copy Simulation',
  difficulty: 'medium',
  problemStatement: 'Simulate deep copy of a 2D integer matrix of size R x C. Modifying the copy at (r, c) to newVal must NOT affect original matrix. Print original matrix values row by row space-separated.',
  inputFormat: 'R C, followed by matrix elements, followed by copy modification r c newVal.',
  outputFormat: 'Print original matrix elements space-separated.',
  constraints: ['1 <= R, C <= 10'],
  examples: [
    { input: '2 2\n1 2\n3 4\n0 0 99', output: '1 2 3 4', explanation: 'Original unaffected by deep copy mutation.' },
    { input: '1 2\n5 10\n0 1 100', output: '5 10', explanation: 'Original preserved.' },
    { input: '2 1\n7\n8\n1 0 0', output: '7 8', explanation: 'Original preserved.' }
  ],
  testCases: createTC('java-jvm-2', [
    ['2 2\n1 2\n3 4\n0 0 99', '1 2 3 4'],
    ['1 2\n5 10\n0 1 100', '5 10'],
    ['2 1\n7\n8\n1 0 0', '7 8'],
    ['2 3\n1 2 3\n4 5 6\n1 1 50', '1 2 3 4 5 6'],
    ['1 1\n42\n0 0 0', '42'],
    ['2 2\n10 20\n30 40\n1 0 999', '10 20 30 40'],
    ['3 1\n1\n2\n3\n2 0 10', '1 2 3'],
    ['2 2\n-1 -2\n-3 -4\n0 1 10', '-1 -2 -3 -4'],
    ['1 3\n7 8 9\n0 2 0', '7 8 9'],
    ['2 2\n5 5\n5 5\n0 0 1', '5 5 5 5']
  ])
});

// 23. java-garbage-collectors (2 problems)
addProblem({
  id: 'java-gc-1',
  topicId: 'java-garbage-collectors',
  level: 'advanced',
  title: 'WeakReference Cache Simulation',
  difficulty: 'medium',
  problemStatement: 'Simulate a cache using WeakReference: Given key K and cached state flag (1 = still in memory, 0 = collected by GC). If 1, print "CACHE HIT: <key>", else print "CACHE MISS: GC RECLAIMED".',
  inputFormat: 'Key string K and flag (1 or 0).',
  outputFormat: 'Print cache outcome.',
  constraints: ['1 <= len(key) <= 50'],
  examples: [
    { input: 'User101 1', output: 'CACHE HIT: User101', explanation: 'Retained.' },
    { input: 'User102 0', output: 'CACHE MISS: GC RECLAIMED', explanation: 'Collected.' },
    { input: 'DataChunk 1', output: 'CACHE HIT: DataChunk', explanation: 'Hit.' }
  ],
  testCases: createTC('java-gc-1', [
    ['User101 1', 'CACHE HIT: User101'],
    ['User102 0', 'CACHE MISS: GC RECLAIMED'],
    ['DataChunk 1', 'CACHE HIT: DataChunk'],
    ['ImageA 0', 'CACHE MISS: GC RECLAIMED'],
    ['Token9 1', 'CACHE HIT: Token9'],
    ['SessionB 0', 'CACHE MISS: GC RECLAIMED'],
    ['CacheKey 1', 'CACHE HIT: CacheKey'],
    ['Asset4 0', 'CACHE MISS: GC RECLAIMED'],
    ['Record5 1', 'CACHE HIT: Record5'],
    ['TempObj 0', 'CACHE MISS: GC RECLAIMED']
  ])
});

addProblem({
  id: 'java-gc-2',
  topicId: 'java-garbage-collectors',
  level: 'advanced',
  title: 'Cleaner and AutoCloseable Resource Manager',
  difficulty: 'medium',
  problemStatement: 'Manage unmanaged resources cleanly: When a resource is explicitly closed, print "CLOSED EXPLICITLY: <id>". If close() is called again, print "ALREADY CLOSED: <id>".',
  inputFormat: 'Resource ID and integer calls (1 or 2).',
  outputFormat: 'Print closure state.',
  constraints: ['1 <= len(id) <= 50'],
  examples: [
    { input: 'Handle1 1', output: 'CLOSED EXPLICITLY: Handle1', explanation: 'Closed.' },
    { input: 'Handle2 2', output: 'CLOSED EXPLICITLY: Handle2\nALREADY CLOSED: Handle2', explanation: 'Double close guarded.' },
    { input: 'SocketA 1', output: 'CLOSED EXPLICITLY: SocketA', explanation: 'Single close.' }
  ],
  testCases: createTC('java-gc-2', [
    ['Handle1 1', 'CLOSED EXPLICITLY: Handle1'],
    ['Handle2 2', 'CLOSED EXPLICITLY: Handle2\nALREADY CLOSED: Handle2'],
    ['SocketA 1', 'CLOSED EXPLICITLY: SocketA'],
    ['FileB 2', 'CLOSED EXPLICITLY: FileB\nALREADY CLOSED: FileB'],
    ['Res1 1', 'CLOSED EXPLICITLY: Res1'],
    ['Res2 2', 'CLOSED EXPLICITLY: Res2\nALREADY CLOSED: Res2'],
    ['BufferX 1', 'CLOSED EXPLICITLY: BufferX'],
    ['BufferY 2', 'CLOSED EXPLICITLY: BufferY\nALREADY CLOSED: BufferY'],
    ['StreamZ 1', 'CLOSED EXPLICITLY: StreamZ'],
    ['ChannelW 2', 'CLOSED EXPLICITLY: ChannelW\nALREADY CLOSED: ChannelW']
  ])
});

// 24. java-synchronization-locks (3 problems)
addProblem({
  id: 'java-sync-1',
  topicId: 'java-synchronization-locks',
  level: 'advanced',
  title: 'Synchronized Thread-Safe Counter Simulation',
  difficulty: 'medium',
  problemStatement: 'Simulate thread synchronization on a shared counter: Given starting value S and N operations "+ <val>" or "- <val>" executed under a synchronized lock, compute and print final value "Counter: <finalVal>".',
  inputFormat: 'First line S and N, next N lines each contain operator (+ or -) and value.',
  outputFormat: 'Print "Counter: <finalVal>".',
  constraints: ['1 <= N <= 1000'],
  examples: [
    { input: '0 3\n+ 10\n+ 20\n- 5', output: 'Counter: 25', explanation: '0 + 10 + 20 - 5 = 25.' },
    { input: '100 2\n- 30\n- 20', output: 'Counter: 50', explanation: '100 - 50 = 50.' },
    { input: '5 1\n+ 5', output: 'Counter: 10', explanation: '5 + 5 = 10.' }
  ],
  testCases: createTC('java-sync-1', [
    ['0 3\n+ 10\n+ 20\n- 5', 'Counter: 25'],
    ['100 2\n- 30\n- 20', 'Counter: 50'],
    ['5 1\n+ 5', 'Counter: 10'],
    ['50 4\n+ 10\n- 20\n+ 30\n- 10', 'Counter: 60'],
    ['0 3\n+ 1\n+ 1\n+ 1', 'Counter: 3'],
    ['10 2\n- 5\n- 5', 'Counter: 0'],
    ['1000 3\n+ 200\n- 300\n+ 100', 'Counter: 1000'],
    ['0 4\n- 10\n- 20\n+ 50\n+ 10', 'Counter: 30'],
    ['25 2\n+ 25\n- 50', 'Counter: 0'],
    ['12 2\n+ 8\n+ 10', 'Counter: 30']
  ])
});

addProblem({
  id: 'java-sync-2',
  topicId: 'java-synchronization-locks',
  level: 'advanced',
  title: 'ReentrantLock Producer-Consumer Buffer Simulation',
  difficulty: 'medium',
  problemStatement: 'Simulate ReentrantLock buffer with capacity C: "PUT <item>" and "TAKE". If buffer full on PUT, print "BUFFER FULL". If buffer empty on TAKE, print "BUFFER EMPTY". When TAKE succeeds, print item.',
  inputFormat: 'Capacity C and operation count N, next N lines operations.',
  outputFormat: 'Print outcomes of TAKE and error messages.',
  constraints: ['1 <= C <= 100', '1 <= N <= 1000'],
  examples: [
    { input: '2 4\nPUT A\nPUT B\nPUT C\nTAKE', output: 'BUFFER FULL\nA', explanation: 'Buffer full on C, first TAKE gets A.' },
    { input: '1 2\nTAKE\nPUT X', output: 'BUFFER EMPTY', explanation: 'Empty TAKE.' },
    { input: '2 3\nPUT 10\nTAKE\nTAKE', output: '10\nBUFFER EMPTY', explanation: 'Take then empty.' }
  ],
  testCases: createTC('java-sync-2', [
    ['2 4\nPUT A\nPUT B\nPUT C\nTAKE', 'BUFFER FULL\nA'],
    ['1 2\nTAKE\nPUT X', 'BUFFER EMPTY'],
    ['2 3\nPUT 10\nTAKE\nTAKE', '10\nBUFFER EMPTY'],
    ['3 4\nPUT 1\nPUT 2\nTAKE\nTAKE', '1\n2'],
    ['1 3\nPUT M\nPUT N\nTAKE', 'BUFFER FULL\nM'],
    ['2 4\nPUT X\nPUT Y\nTAKE\nTAKE', 'X\nY'],
    ['2 3\nTAKE\nPUT K\nTAKE', 'BUFFER EMPTY\nK'],
    ['1 2\nPUT Z\nTAKE', 'Z'],
    ['3 3\nTAKE\nTAKE\nTAKE', 'BUFFER EMPTY\nBUFFER EMPTY\nBUFFER EMPTY'],
    ['2 5\nPUT 1\nPUT 2\nPUT 3\nTAKE\nTAKE', 'BUFFER FULL\n1\n2']
  ])
});

addProblem({
  id: 'java-sync-3',
  topicId: 'java-synchronization-locks',
  level: 'advanced',
  title: 'Deadlock Prevention by Lock Ordering',
  difficulty: 'hard',
  problemStatement: 'To prevent deadlock when acquiring two locks A and B, always acquire them in lexicographical order (min(A, B) then max(A, B)). Given two lock names A and B, print "Acquiring: <L1> then <L2>".',
  inputFormat: 'Two lock name strings A and B.',
  outputFormat: 'Print "Acquiring: <L1> then <L2>".',
  constraints: ['A != B'],
  examples: [
    { input: 'LockB LockA', output: 'Acquiring: LockA then LockB', explanation: 'LockA acquired first.' },
    { input: 'Account1 Account2', output: 'Acquiring: Account1 then Account2', explanation: 'Already ordered.' },
    { input: 'Y X', output: 'Acquiring: X then Y', explanation: 'X ordered before Y.' }
  ],
  testCases: createTC('java-sync-3', [
    ['LockB LockA', 'Acquiring: LockA then LockB'],
    ['Account1 Account2', 'Acquiring: Account1 then Account2'],
    ['Y X', 'Acquiring: X then Y'],
    ['Lock2 Lock1', 'Acquiring: Lock1 then Lock2'],
    ['Beta Alpha', 'Acquiring: Alpha then Beta'],
    ['TableB TableA', 'Acquiring: TableA then TableB'],
    ['Res2 Res1', 'Acquiring: Res1 then Res2'],
    ['North South', 'Acquiring: North then South'],
    ['Z A', 'Acquiring: A then Z'],
    ['MutexB MutexA', 'Acquiring: MutexA then MutexB']
  ])
});

// 25. java-executors-completablefuture (3 problems)
addProblem({
  id: 'java-exec-1',
  topicId: 'java-executors-completablefuture',
  level: 'advanced',
  title: 'Callable and Future Task Aggregator',
  difficulty: 'medium',
  problemStatement: 'Simulate ExecutorService submitting N Callable tasks that compute the square of each integer. Sum the results of all Future.get() calls. Print "Future Sum: <total>".',
  inputFormat: 'First line N, second line N space-separated integers.',
  outputFormat: 'Print "Future Sum: <total>".',
  constraints: ['1 <= N <= 1000'],
  examples: [
    { input: '3\n2 3 4', output: 'Future Sum: 29', explanation: '4 + 9 + 16 = 29.' },
    { input: '2\n10 20', output: 'Future Sum: 500', explanation: '100 + 400 = 500.' },
    { input: '1\n5', output: 'Future Sum: 25', explanation: '5^2 = 25.' }
  ],
  testCases: createTC('java-exec-1', [
    ['3\n2 3 4', 'Future Sum: 29'],
    ['2\n10 20', 'Future Sum: 500'],
    ['1\n5', 'Future Sum: 25'],
    ['4\n1 2 3 4', 'Future Sum: 30'],
    ['3\n-2 -3 -4', 'Future Sum: 29'],
    ['5\n0 1 2 3 4', 'Future Sum: 30'],
    ['2\n6 8', 'Future Sum: 100'],
    ['3\n1 1 1', 'Future Sum: 3'],
    ['4\n5 5 5 5', 'Future Sum: 100'],
    ['3\n7 8 9', 'Future Sum: 194']
  ])
});

addProblem({
  id: 'java-exec-2',
  topicId: 'java-executors-completablefuture',
  level: 'advanced',
  title: 'CompletableFuture Pipeline (thenApply and thenCombine)',
  difficulty: 'medium',
  problemStatement: 'Simulate CompletableFuture pipeline: futureA computes A * 2, futureB computes B * 3, thenCombine adds results (A*2 + B*3). Print "Combined Result: <total>".',
  inputFormat: 'Two space-separated integers A and B.',
  outputFormat: 'Print "Combined Result: <total>".',
  constraints: ['-10^5 <= A, B <= 10^5'],
  examples: [
    { input: '5 4', output: 'Combined Result: 22', explanation: '5*2 + 4*3 = 10 + 12 = 22.' },
    { input: '0 10', output: 'Combined Result: 30', explanation: '0 + 30 = 30.' },
    { input: '10 0', output: 'Combined Result: 20', explanation: '20 + 0 = 20.' }
  ],
  testCases: createTC('java-exec-2', [
    ['5 4', 'Combined Result: 22'],
    ['0 10', 'Combined Result: 30'],
    ['10 0', 'Combined Result: 20'],
    ['3 3', 'Combined Result: 15'],
    ['-5 5', 'Combined Result: 5'],
    ['100 200', 'Combined Result: 800'],
    ['7 8', 'Combined Result: 38'],
    ['1 1', 'Combined Result: 5'],
    ['-10 -10', 'Combined Result: -50'],
    ['25 25', 'Combined Result: 125']
  ])
});

addProblem({
  id: 'java-exec-3',
  topicId: 'java-executors-completablefuture',
  level: 'advanced',
  title: 'CompletableFuture.allOf Task Fan-Out',
  difficulty: 'hard',
  problemStatement: 'Simulate CompletableFuture.allOf running N parallel service health checks returning latency in ms. Find the maximum latency among all services. Print "All Completed: Max Latency <max> ms".',
  inputFormat: 'First line N, second line N space-separated integer latencies.',
  outputFormat: 'Print "All Completed: Max Latency <max> ms".',
  constraints: ['1 <= N <= 1000'],
  examples: [
    { input: '4\n120 45 310 80', output: 'All Completed: Max Latency 310 ms', explanation: '310 is max latency.' },
    { input: '2\n50 50', output: 'All Completed: Max Latency 50 ms', explanation: 'Equal latencies.' },
    { input: '1\n200', output: 'All Completed: Max Latency 200 ms', explanation: 'Single service.' }
  ],
  testCases: createTC('java-exec-3', [
    ['4\n120 45 310 80', 'All Completed: Max Latency 310 ms'],
    ['2\n50 50', 'All Completed: Max Latency 50 ms'],
    ['1\n200', 'All Completed: Max Latency 200 ms'],
    ['3\n100 200 150', 'All Completed: Max Latency 200 ms'],
    ['5\n10 20 30 40 50', 'All Completed: Max Latency 50 ms'],
    ['4\n500 250 120 450', 'All Completed: Max Latency 500 ms'],
    ['3\n15 85 40', 'All Completed: Max Latency 85 ms'],
    ['2\n1000 500', 'All Completed: Max Latency 1000 ms'],
    ['5\n70 60 90 80 75', 'All Completed: Max Latency 90 ms'],
    ['4\n33 44 22 11', 'All Completed: Max Latency 44 ms']
  ])
});

// 26. java-reflection-annotations (2 problems)
addProblem({
  id: 'java-ref-1',
  topicId: 'java-reflection-annotations',
  level: 'advanced',
  title: 'Inspect Class Fields and Methods via Reflection',
  difficulty: 'medium',
  problemStatement: 'Simulate Java reflection: Given class name and list of fields, sort field names alphabetically. Print "Class: <name> Fields: <fields_space_separated>".',
  inputFormat: 'Class name followed by N and N field names.',
  outputFormat: 'Print "Class: <name> Fields: <sorted_fields>".',
  constraints: ['1 <= N <= 50'],
  examples: [
    { input: 'User 3 id email name', output: 'Class: User Fields: email id name', explanation: 'Sorted field names.' },
    { input: 'Product 2 price sku', output: 'Class: Product Fields: price sku', explanation: 'Sorted.' },
    { input: 'Node 1 value', output: 'Class: Node Fields: value', explanation: 'Single field.' }
  ],
  testCases: createTC('java-ref-1', [
    ['User 3 id email name', 'Class: User Fields: email id name'],
    ['Product 2 price sku', 'Class: Product Fields: price sku'],
    ['Node 1 value', 'Class: Node Fields: value'],
    ['Account 3 balance accountNumber owner', 'Class: Account Fields: accountNumber balance owner'],
    ['Order 4 total id status items', 'Class: Order Fields: id items status total'],
    ['Point 2 y x', 'Class: Point Fields: x y'],
    ['Config 3 port host debug', 'Class: Config Fields: debug host port'],
    ['Book 3 author title isbn', 'Class: Book Fields: author isbn title'],
    ['Student 2 gpa name', 'Class: Student Fields: gpa name'],
    ['Car 2 make model', 'Class: Car Fields: make model']
  ])
});

addProblem({
  id: 'java-ref-2',
  topicId: 'java-reflection-annotations',
  level: 'advanced',
  title: 'Custom Validation Annotation Processor',
  difficulty: 'medium',
  problemStatement: 'Simulate processing an @NotNull annotation: Given N field name and value pairs, if value is "NULL", report "@NotNull VIOLATION on <field>". If all valid, print "ALL FIELDS VALID".',
  inputFormat: 'First line N, next N lines each contain field and value.',
  outputFormat: 'Print violation messages or "ALL FIELDS VALID".',
  constraints: ['1 <= N <= 100'],
  examples: [
    { input: '2\nname Alice\nemail NULL', output: '@NotNull VIOLATION on email', explanation: 'email is NULL.' },
    { input: '2\nid 101\nstatus OK', output: 'ALL FIELDS VALID', explanation: 'None null.' },
    { input: '1\ntoken NULL', output: '@NotNull VIOLATION on token', explanation: 'token null.' }
  ],
  testCases: createTC('java-ref-2', [
    ['2\nname Alice\nemail NULL', '@NotNull VIOLATION on email'],
    ['2\nid 101\nstatus OK', 'ALL FIELDS VALID'],
    ['1\ntoken NULL', '@NotNull VIOLATION on token'],
    ['3\na NULL\nb 2\nc NULL', '@NotNull VIOLATION on a\n@NotNull VIOLATION on c'],
    ['3\nx 1\ny 2\nz 3', 'ALL FIELDS VALID'],
    ['2\nkey1 NULL\nkey2 NULL', '@NotNull VIOLATION on key1\n@NotNull VIOLATION on key2'],
    ['1\nuser Guest', 'ALL FIELDS VALID'],
    ['3\np 10\nq NULL\nr 30', '@NotNull VIOLATION on q'],
    ['2\nm 5\nn 10', 'ALL FIELDS VALID'],
    ['3\nhost localhost\nport 8080\npass NULL', '@NotNull VIOLATION on pass']
  ])
});

// 27. java-spring-boot-rest (3 problems)
addProblem({
  id: 'java-rest-1',
  topicId: 'java-spring-boot-rest',
  level: 'advanced',
  title: 'Spring REST Path & Query Param Parser',
  difficulty: 'easy',
  problemStatement: 'Parse a REST request line in Spring format "GET /api/v1/users/{id}?status={status}". Extract path variable id and request param status. Print "User ID: <id> Status: <status>".',
  inputFormat: 'A URL path string e.g. /api/v1/users/42?status=active.',
  outputFormat: 'Print "User ID: <id> Status: <status>".',
  constraints: ['Well-formed URL string.'],
  examples: [
    { input: '/api/v1/users/42?status=active', output: 'User ID: 42 Status: active', explanation: 'id=42, status=active.' },
    { input: '/api/v1/users/101?status=pending', output: 'User ID: 101 Status: pending', explanation: 'id=101, status=pending.' },
    { input: '/api/v1/users/7?status=inactive', output: 'User ID: 7 Status: inactive', explanation: 'id=7, status=inactive.' }
  ],
  testCases: createTC('java-rest-1', [
    ['/api/v1/users/42?status=active', 'User ID: 42 Status: active'],
    ['/api/v1/users/101?status=pending', 'User ID: 101 Status: pending'],
    ['/api/v1/users/7?status=inactive', 'User ID: 7 Status: inactive'],
    ['/api/v1/users/999?status=verified', 'User ID: 999 Status: verified'],
    ['/api/v1/users/1?status=new', 'User ID: 1 Status: new'],
    ['/api/v1/users/50?status=suspended', 'User ID: 50 Status: suspended'],
    ['/api/v1/users/12?status=active', 'User ID: 12 Status: active'],
    ['/api/v1/users/33?status=archived', 'User ID: 33 Status: archived'],
    ['/api/v1/users/88?status=deleted', 'User ID: 88 Status: deleted'],
    ['/api/v1/users/1000?status=vip', 'User ID: 1000 Status: vip']
  ])
});

addProblem({
  id: 'java-rest-2',
  topicId: 'java-spring-boot-rest',
  level: 'advanced',
  title: 'DTO Validation and Response Entity Envelope',
  difficulty: 'medium',
  problemStatement: 'Simulate Spring ResponseEntity envelope: Given status code S (int) and message M, format response as JSON envelope {"status": <S>, "message": "<M>"}.',
  inputFormat: 'Status code S and message string M.',
  outputFormat: 'Print JSON envelope.',
  constraints: ['Valid HTTP status code.'],
  examples: [
    { input: '200 SUCCESS', output: '{"status": 200, "message": "SUCCESS"}', explanation: '200 OK envelope.' },
    { input: '404 NOT_FOUND', output: '{"status": 404, "message": "NOT_FOUND"}', explanation: '404 error envelope.' },
    { input: '500 INTERNAL_ERROR', output: '{"status": 500, "message": "INTERNAL_ERROR"}', explanation: '500 error envelope.' }
  ],
  testCases: createTC('java-rest-2', [
    ['200 SUCCESS', '{"status": 200, "message": "SUCCESS"}'],
    ['404 NOT_FOUND', '{"status": 404, "message": "NOT_FOUND"}'],
    ['500 INTERNAL_ERROR', '{"status": 500, "message": "INTERNAL_ERROR"}'],
    ['201 CREATED', '{"status": 201, "message": "CREATED"}'],
    ['400 BAD_REQUEST', '{"status": 400, "message": "BAD_REQUEST"}'],
    ['401 UNAUTHORIZED', '{"status": 401, "message": "UNAUTHORIZED"}'],
    ['403 FORBIDDEN', '{"status": 403, "message": "FORBIDDEN"}'],
    ['204 NO_CONTENT', '{"status": 204, "message": "NO_CONTENT"}'],
    ['503 SERVICE_UNAVAILABLE', '{"status": 503, "message": "SERVICE_UNAVAILABLE"}'],
    ['409 CONFLICT', '{"status": 409, "message": "CONFLICT"}']
  ])
});

addProblem({
  id: 'java-rest-3',
  topicId: 'java-spring-boot-rest',
  level: 'advanced',
  title: 'In-Memory Repository CRUD Service',
  difficulty: 'medium',
  problemStatement: 'Implement in-memory Spring CrudRepository simulation for User(id, name): Operations: "SAVE <id> <name>", "FIND <id>" (prints name or "NOT_FOUND"), "DELETE <id>".',
  inputFormat: 'First line N operations count, next N lines operations.',
  outputFormat: 'Print result of each FIND operation.',
  constraints: ['1 <= N <= 1000'],
  examples: [
    { input: '4\nSAVE 1 Alice\nFIND 1\nDELETE 1\nFIND 1', output: 'Alice\nNOT_FOUND', explanation: 'Found then deleted.' },
    { input: '2\nFIND 99\nSAVE 99 Bob', output: 'NOT_FOUND', explanation: 'Not found initially.' },
    { input: '3\nSAVE 5 Dan\nSAVE 6 Eve\nFIND 6', output: 'Eve', explanation: 'Find 6.' }
  ],
  testCases: createTC('java-rest-3', [
    ['4\nSAVE 1 Alice\nFIND 1\nDELETE 1\nFIND 1', 'Alice\nNOT_FOUND'],
    ['2\nFIND 99\nSAVE 99 Bob', 'NOT_FOUND'],
    ['3\nSAVE 5 Dan\nSAVE 6 Eve\nFIND 6', 'Eve'],
    ['4\nSAVE 10 X\nSAVE 20 Y\nFIND 10\nFIND 20', 'X\nY'],
    ['3\nSAVE 1 A\nDELETE 1\nFIND 1', 'NOT_FOUND'],
    ['4\nSAVE 2 B\nSAVE 2 C\nFIND 2\nFIND 3', 'C\nNOT_FOUND'],
    ['2\nSAVE 77 Lucky\nFIND 77', 'Lucky'],
    ['3\nFIND 1\nFIND 2\nFIND 3', 'NOT_FOUND\nNOT_FOUND\nNOT_FOUND'],
    ['4\nSAVE 100 Top\nDELETE 100\nDELETE 100\nFIND 100', 'NOT_FOUND'],
    ['4\nSAVE 1 M\nSAVE 2 N\nDELETE 2\nFIND 1', 'M']
  ])
});

console.log('Finished creating all Java problems! Total:', problems.length);

fs.writeFileSync(outputPath, `export const javaProblems = ${JSON.stringify(problems, null, 2)};\nexport default javaProblems;\n`, 'utf-8');
console.log('Successfully saved to', outputPath);
