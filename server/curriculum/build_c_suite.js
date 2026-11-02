import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outputPath = path.join(__dirname, 'practice', 'cProblems.js');

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
    languageId: 'c',
    language: 'c',
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
      c: starterCode || `#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n`,
      cpp: `#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n`,
      python: `import sys\n\ndef main():\n    # Write your Python solution here\n    pass\n\nif __name__ == "__main__":\n    main()\n`,
      java: `import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}\n`,
      javascript: `const fs = require('fs');\n\nfunction main() {\n    // Write your JS solution here\n}\nmain();\n`
    },
    testCases
  });
}

// ============================================================================
// BEGINNER
// ============================================================================

// 1. c-what-is-c (2 problems)
addProblem({
  id: 'c-intro-1',
  topicId: 'c-what-is-c',
  level: 'beginner',
  title: 'C Exit Status and Banner Printer',
  difficulty: 'easy',
  problemStatement: 'In C, the main function returns an exit status code to the operating system (typically 0 for success). Write a program that reads a program name and version integer from standard input, and prints a canonical banner followed by "Exit Code: 0".',
  inputFormat: 'A string programName and an integer version separated by space.',
  outputFormat: 'Print "[programName v<version>] initialized successfully." on the first line, and "Exit Code: 0" on the second line.',
  constraints: ['programName length <= 50', '1 <= version <= 100'],
  examples: [
    { input: 'Kernel 6', output: '[Kernel v6] initialized successfully.\nExit Code: 0' }
  ],
  testCases: createTC('c-intro-1', [
    ['Kernel 6', '[Kernel v6] initialized successfully.\nExit Code: 0'],
    ['Daemon 2', '[Daemon v2] initialized successfully.\nExit Code: 0'],
    ['Compiler 1', '[Compiler v1] initialized successfully.\nExit Code: 0'],
    ['Driver 99', '[Driver v99] initialized successfully.\nExit Code: 0'],
    ['Shell 4', '[Shell v4] initialized successfully.\nExit Code: 0'],
    ['Watcher 12', '[Watcher v12] initialized successfully.\nExit Code: 0'],
    ['Profiler 3', '[Profiler v3] initialized successfully.\nExit Code: 0'],
    ['Hypervisor 50', '[Hypervisor v50] initialized successfully.\nExit Code: 0'],
    ['Logger 10', '[Logger v10] initialized successfully.\nExit Code: 0'],
    ['Agent 1', '[Agent v1] initialized successfully.\nExit Code: 0']
  ])
});

addProblem({
  id: 'c-intro-2',
  topicId: 'c-what-is-c',
  level: 'beginner',
  title: 'ASCII Character Inspector',
  difficulty: 'easy',
  problemStatement: 'In C, characters are stored as integer values corresponding to their ASCII encodings. Read a single non-whitespace character, and print its decimal ASCII code and hexadecimal representation in the format: "DEC: <dec> | HEX: 0x<HEX>". (Hex letters should be uppercase).',
  inputFormat: 'A single non-whitespace character.',
  outputFormat: 'Format: "DEC: <dec> | HEX: 0x<HEX>"',
  constraints: ['Character is any printable ASCII character (ASCII 33-126)'],
  examples: [
    { input: 'A', output: 'DEC: 65 | HEX: 0x41' }
  ],
  testCases: createTC('c-intro-2', [
    ['A', 'DEC: 65 | HEX: 0x41'],
    ['z', 'DEC: 122 | HEX: 0x7A'],
    ['0', 'DEC: 48 | HEX: 0x30'],
    ['!', 'DEC: 33 | HEX: 0x21'],
    ['~', 'DEC: 126 | HEX: 0x7E'],
    ['M', 'DEC: 77 | HEX: 0x4D'],
    ['#', 'DEC: 35 | HEX: 0x23'],
    ['9', 'DEC: 57 | HEX: 0x39'],
    ['q', 'DEC: 113 | HEX: 0x71'],
    ['$', 'DEC: 36 | HEX: 0x24']
  ])
});

// 2. c-variables-types-io (3 problems)
addProblem({
  id: 'c-var-1',
  topicId: 'c-variables-types-io',
  level: 'beginner',
  title: 'Formatted Receipt Line with printf Specifiers',
  difficulty: 'easy',
  problemStatement: 'Given an item name (single word), quantity (integer), and unit price (float), compute the total cost (quantity * unit price). Print the receipt line formatted as: "<item>: <qty> x $<unit_price rounded to 2 decimals> = $<total rounded to 2 decimals>".',
  inputFormat: 'Item name (string), quantity (int), unit price (float) on a single line.',
  outputFormat: 'Formatted receipt line string.',
  constraints: ['quantity >= 1', 'unit price >= 0.01'],
  examples: [
    { input: 'Book 3 12.50', output: 'Book: 3 x $12.50 = $37.50' }
  ],
  testCases: createTC('c-var-1', [
    ['Book 3 12.50', 'Book: 3 x $12.50 = $37.50'],
    ['Pen 10 1.25', 'Pen: 10 x $1.25 = $12.50'],
    ['Notebook 2 4.99', 'Notebook: 2 x $4.99 = $9.98'],
    ['Eraser 5 0.50', 'Eraser: 5 x $0.50 = $2.50'],
    ['Desk 1 150.00', 'Desk: 1 x $150.00 = $150.00'],
    ['Marker 4 2.10', 'Marker: 4 x $2.10 = $8.40'],
    ['Laptop 1 899.99', 'Laptop: 1 x $899.99 = $899.99'],
    ['Ruler 8 1.15', 'Ruler: 8 x $1.15 = $9.20'],
    ['Backpack 2 34.50', 'Backpack: 2 x $34.50 = $69.00'],
    ['Stapler 1 6.75', 'Stapler: 1 x $6.75 = $6.75']
  ])
});

addProblem({
  id: 'c-var-2',
  topicId: 'c-variables-types-io',
  level: 'beginner',
  title: 'Temperature Conversion with Double Precision',
  difficulty: 'easy',
  problemStatement: 'Read a temperature in Celsius as a double-precision floating-point number. Convert it to Fahrenheit using F = (C * 9.0 / 5.0) + 32.0 and to Kelvin using K = C + 273.15. Print the results on separate lines rounded to exactly 2 decimal places: "Fahrenheit: <F>" and "Kelvin: <K>".',
  inputFormat: 'A single floating-point number C.',
  outputFormat: 'Two lines: "Fahrenheit: <F>" and "Kelvin: <K>" each with 2 decimal places.',
  constraints: ['-273.15 <= C <= 1000.0'],
  examples: [
    { input: '25.0', output: 'Fahrenheit: 77.00\nKelvin: 298.15' }
  ],
  testCases: createTC('c-var-2', [
    ['25.0', 'Fahrenheit: 77.00\nKelvin: 298.15'],
    ['0.0', 'Fahrenheit: 32.00\nKelvin: 273.15'],
    ['100.0', 'Fahrenheit: 212.00\nKelvin: 373.15'],
    ['-40.0', 'Fahrenheit: -40.00\nKelvin: 233.15'],
    ['37.5', 'Fahrenheit: 99.50\nKelvin: 310.65'],
    ['-273.15', 'Fahrenheit: -459.67\nKelvin: 0.00'],
    ['15.5', 'Fahrenheit: 59.90\nKelvin: 288.65'],
    ['200.0', 'Fahrenheit: 392.00\nKelvin: 473.15'],
    ['-10.0', 'Fahrenheit: 14.00\nKelvin: 263.15'],
    ['50.25', 'Fahrenheit: 122.45\nKelvin: 323.40']
  ])
});

addProblem({
  id: 'c-var-3',
  topicId: 'c-variables-types-io',
  level: 'beginner',
  title: 'Swap Two Integers Without Temporary Variable',
  difficulty: 'easy',
  problemStatement: 'Read two integers a and b. Swap their values in C using arithmetic operations without declaring any third/temporary variable. Print the swapped values separated by a space.',
  inputFormat: 'Two integers a and b separated by a space.',
  outputFormat: 'Swapped integers: "b a"',
  constraints: ['-10000 <= a, b <= 10000'],
  examples: [
    { input: '10 20', output: '20 10' }
  ],
  testCases: createTC('c-var-3', [
    ['10 20', '20 10'],
    ['-5 15', '15 -5'],
    ['0 100', '100 0'],
    ['42 42', '42 42'],
    ['-30 -80', '-80 -30'],
    ['999 1', '1 999'],
    ['7 -7', '-7 7'],
    ['500 250', '250 500'],
    ['1234 5678', '5678 1234'],
    ['-1 1', '1 -1']
  ])
});

// 3. c-conditionals-and-switch (3 problems)
addProblem({
  id: 'c-cond-1',
  topicId: 'c-conditionals-and-switch',
  level: 'beginner',
  title: 'Cartesian Coordinate Quadrant Classifier',
  difficulty: 'easy',
  problemStatement: 'Given non-zero integers x and y, determine which Cartesian quadrant the point (x, y) lies in. Output "Quadrant 1" (x>0, y>0), "Quadrant 2" (x<0, y>0), "Quadrant 3" (x<0, y<0), or "Quadrant 4" (x>0, y<0). If either coordinate is 0, print "Axis or Origin".',
  inputFormat: 'Two space-separated integers x and y.',
  outputFormat: 'Quadrant name or "Axis or Origin".',
  constraints: ['-1000 <= x, y <= 1000'],
  examples: [
    { input: '5 7', output: 'Quadrant 1' },
    { input: '-3 8', output: 'Quadrant 2' }
  ],
  testCases: createTC('c-cond-1', [
    ['5 7', 'Quadrant 1'],
    ['-3 8', 'Quadrant 2'],
    ['-4 -9', 'Quadrant 3'],
    ['6 -2', 'Quadrant 4'],
    ['0 5', 'Axis or Origin'],
    ['7 0', 'Axis or Origin'],
    ['0 0', 'Axis or Origin'],
    ['-10 20', 'Quadrant 2'],
    ['15 -35', 'Quadrant 4'],
    ['-1 -1', 'Quadrant 3']
  ])
});

addProblem({
  id: 'c-cond-2',
  topicId: 'c-conditionals-and-switch',
  level: 'beginner',
  title: 'Calculator with Switch Statement',
  difficulty: 'easy',
  problemStatement: 'Read an expression formatted as "<operand1> <operator> <operand2>", where operands are integers and operator is one of +, -, *, /, %. Use a C switch statement on the operator character. For / and %, if operand2 is 0, print "Error: Division by zero". Otherwise, print the integer result.',
  inputFormat: 'Two integers and a character operator separated by spaces: "a op b".',
  outputFormat: 'Integer result or error message.',
  constraints: ['-10000 <= a, b <= 10000'],
  examples: [
    { input: '15 + 27', output: '42' },
    { input: '20 / 0', output: 'Error: Division by zero' }
  ],
  testCases: createTC('c-cond-2', [
    ['15 + 27', '42'],
    ['20 / 0', 'Error: Division by zero'],
    ['100 - 45', '55'],
    ['12 * 8', '96'],
    ['50 / 6', '8'],
    ['29 % 7', '1'],
    ['14 % 0', 'Error: Division by zero'],
    ['-10 + 25', '15'],
    ['-6 * -7', '42'],
    ['100 / 25', '4']
  ])
});

addProblem({
  id: 'c-cond-3',
  topicId: 'c-conditionals-and-switch',
  level: 'beginner',
  title: 'Days in Month and Leap Year Detector',
  difficulty: 'medium',
  problemStatement: 'Given a year and a month (1 for January to 12 for December), print the number of days in that month. Remember that in C, leap years occur when: (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0). Use a switch statement for month days.',
  inputFormat: 'Two integers: year and month.',
  outputFormat: 'An integer representing the number of days.',
  constraints: ['1 <= year <= 9999', '1 <= month <= 12'],
  examples: [
    { input: '2024 2', output: '29' },
    { input: '2023 2', output: '28' }
  ],
  testCases: createTC('c-cond-3', [
    ['2024 2', '29'],
    ['2023 2', '28'],
    ['2000 2', '29'],
    ['1900 2', '28'],
    ['2023 1', '31'],
    ['2023 4', '30'],
    ['2023 7', '31'],
    ['2023 9', '30'],
    ['2023 12', '31'],
    ['2024 8', '31']
  ])
});

// 4. c-loops-iteration (4 problems)
addProblem({
  id: 'c-loop-1',
  topicId: 'c-loops-iteration',
  level: 'beginner',
  title: 'Collatz Conjecture Step Count',
  difficulty: 'easy',
  problemStatement: 'The Collatz sequence starts with a positive integer n. If n is even, divide it by 2; if n is odd, multiply by 3 and add 1. Repeat until n reaches 1. Write a while loop in C to count and print the total number of steps taken.',
  inputFormat: 'A single positive integer n.',
  outputFormat: 'Total number of steps as an integer.',
  constraints: ['1 <= n <= 100000'],
  examples: [
    { input: '6', output: '8' }
  ],
  testCases: createTC('c-loop-1', [
    ['6', '8'],
    ['1', '0'],
    ['2', '1'],
    ['3', '7'],
    ['7', '16'],
    ['19', '20'],
    ['27', '111'],
    ['10', '6'],
    ['15', '17'],
    ['100', '25']
  ])
});

addProblem({
  id: 'c-loop-2',
  topicId: 'c-loops-iteration',
  level: 'beginner',
  title: 'Harmonic Number Sum with Float Precision',
  difficulty: 'easy',
  problemStatement: 'The N-th harmonic number H_N is defined as sum_{i=1}^N (1.0 / i). Given an integer N, compute H_N using a for loop with double precision and print the result rounded to 4 decimal places.',
  inputFormat: 'A positive integer N.',
  outputFormat: 'A float with 4 decimal places.',
  constraints: ['1 <= N <= 10000'],
  examples: [
    { input: '4', output: '2.0833' }
  ],
  testCases: createTC('c-loop-2', [
    ['4', '2.0833'],
    ['1', '1.0000'],
    ['2', '1.5000'],
    ['5', '2.2833'],
    ['10', '2.9290'],
    ['20', '3.5977'],
    ['50', '4.4992'],
    ['100', '5.1874'],
    ['500', '6.7928'],
    ['1000', '7.4855']
  ])
});

addProblem({
  id: 'c-loop-3',
  topicId: 'c-loops-iteration',
  level: 'beginner',
  title: 'Prime Factorization Decomposer',
  difficulty: 'medium',
  problemStatement: 'Given an integer n (n >= 2), find all its prime factors in ascending order and print them separated by spaces. If a prime divides n multiple times, print it as many times as it divides n.',
  inputFormat: 'A single integer n.',
  outputFormat: 'Prime factors separated by spaces.',
  constraints: ['2 <= n <= 1000000'],
  examples: [
    { input: '12', output: '2 2 3' }
  ],
  testCases: createTC('c-loop-3', [
    ['12', '2 2 3'],
    ['17', '17'],
    ['100', '2 2 5 5'],
    ['315', '3 3 5 7'],
    ['64', '2 2 2 2 2 2'],
    ['84', '2 2 3 7'],
    ['99', '3 3 11'],
    ['1024', '2 2 2 2 2 2 2 2 2 2'],
    ['13', '13'],
    ['2520', '2 2 2 3 3 5 7']
  ])
});

addProblem({
  id: 'c-loop-4',
  topicId: 'c-loops-iteration',
  level: 'beginner',
  title: 'Centered Asterisk Pyramid Generator',
  difficulty: 'medium',
  problemStatement: 'Given an integer height h, print a centered pyramid of asterisks with h rows. Row 1 has (h - 1) spaces followed by 1 asterisk. Row i has (h - i) spaces followed by (2*i - 1) asterisks.',
  inputFormat: 'An integer h representing height.',
  outputFormat: 'h lines of formatted spaces and asterisks.',
  constraints: ['1 <= h <= 15'],
  examples: [
    { input: '3', output: '  *\n ***\n*****' }
  ],
  testCases: createTC('c-loop-4', [
    ['3', '  *\n ***\n*****'],
    ['1', '*'],
    ['2', ' *\n***'],
    ['4', '   *\n  ***\n *****\n*******'],
    ['5', '    *\n   ***\n  *****\n *******\n*********'],
    ['6', '     *\n    ***\n   *****\n  *******\n *********\n***********'],
    ['7', '      *\n     ***\n    *****\n   *******\n  *********\n ***********\n*************'],
    ['8', '       *\n      ***\n     *****\n    *******\n   *********\n  ***********\n *************\n***************'],
    ['9', '        *\n       ***\n      *****\n     *******\n    *********\n   ***********\n  *************\n ***************\n*****************'],
    ['10', '         *\n        ***\n       *****\n      *******\n     *********\n    ***********\n   *************\n  ***************\n *****************\n*******************']
  ])
});

// 5. c-functions-and-prototypes (3 problems)
addProblem({
  id: 'c-fn-1',
  topicId: 'c-functions-and-prototypes',
  level: 'beginner',
  title: 'GCD and LCM Function Prototypes',
  difficulty: 'easy',
  problemStatement: 'Declare and implement two C functions: `long long gcd(long long a, long long b)` using Euclidean algorithm, and `long long lcm(long long a, long long b)` where lcm = (a / gcd(a, b)) * b. Read two positive integers and print: "GCD: <gcd> | LCM: <lcm>".',
  inputFormat: 'Two positive integers a and b separated by space.',
  outputFormat: 'Format: "GCD: <gcd> | LCM: <lcm>"',
  constraints: ['1 <= a, b <= 10^8'],
  examples: [
    { input: '12 18', output: 'GCD: 6 | LCM: 36' }
  ],
  testCases: createTC('c-fn-1', [
    ['12 18', 'GCD: 6 | LCM: 36'],
    ['7 13', 'GCD: 1 | LCM: 91'],
    ['24 60', 'GCD: 12 | LCM: 120'],
    ['100 25', 'GCD: 25 | LCM: 100'],
    ['15 28', 'GCD: 1 | LCM: 420'],
    ['81 27', 'GCD: 27 | LCM: 81'],
    ['1000 500', 'GCD: 500 | LCM: 1000'],
    ['14 35', 'GCD: 7 | LCM: 70'],
    ['42 56', 'GCD: 14 | LCM: 168'],
    ['101 103', 'GCD: 1 | LCM: 10403']
  ])
});

addProblem({
  id: 'c-fn-2',
  topicId: 'c-functions-and-prototypes',
  level: 'beginner',
  title: 'Fast Modular Exponentiation Function',
  difficulty: 'medium',
  problemStatement: 'Implement a recursive or iterative function in C: `long long powerMod(long long base, long long exp, long long mod)` that calculates (base^exp) % mod in O(log exp) time. Given base, exp, and mod, print the result.',
  inputFormat: 'Three space-separated integers: base, exp, mod.',
  outputFormat: 'A single integer result.',
  constraints: ['0 <= base, exp <= 10^9', '1 <= mod <= 10^9'],
  examples: [
    { input: '2 10 1000', output: '24' },
    { input: '3 5 13', output: '9' }
  ],
  testCases: createTC('c-fn-2', [
    ['2 10 1000', '24'],
    ['3 5 13', '9'],
    ['5 0 100', '1'],
    ['7 2 10', '9'],
    ['10 6 7', '1'],
    ['2 30 1000000007', '73741817'],
    ['123 456 1000', '441'],
    ['9 9 9', '0'],
    ['4 3 64', '0'],
    ['2 20 1000000', '48576']
  ])
});

addProblem({
  id: 'c-fn-3',
  topicId: 'c-functions-and-prototypes',
  level: 'beginner',
  title: 'Binomial Coefficient nCr Combination Function',
  difficulty: 'medium',
  problemStatement: 'Write a C function `unsigned long long nCr(int n, int r)` that computes the binomial coefficient C(n, r) = n! / (r! * (n - r)!) without integer overflow by multiplying and dividing iteratively. Given n and r, print the value.',
  inputFormat: 'Two space-separated integers n and r.',
  outputFormat: 'A single integer.',
  constraints: ['0 <= r <= n <= 30'],
  examples: [
    { input: '5 2', output: '10' }
  ],
  testCases: createTC('c-fn-3', [
    ['5 2', '10'],
    ['10 3', '120'],
    ['6 0', '1'],
    ['6 6', '1'],
    ['15 4', '1365'],
    ['20 5', '15504'],
    ['12 6', '924'],
    ['7 3', '35'],
    ['30 2', '435'],
    ['25 4', '12650']
  ])
});

// 6. c-storage-classes (3 problems)
addProblem({
  id: 'c-store-1',
  topicId: 'c-storage-classes',
  level: 'beginner',
  title: 'Static Variable Running Counter and Accumulator',
  difficulty: 'easy',
  problemStatement: 'In C, `static` local variables retain their values across multiple function calls. Write a function `void accumulate(int val)` containing static variables `sum` and `count`. Read N numbers. For each number, call `accumulate`. At the end, output "Count: <count> | Total: <sum>".',
  inputFormat: 'First line has integer N. Next line has N integers.',
  outputFormat: '"Count: <count> | Total: <sum>"',
  constraints: ['1 <= N <= 1000'],
  examples: [
    { input: '4\n10 20 30 40', output: 'Count: 4 | Total: 100' }
  ],
  testCases: createTC('c-store-1', [
    ['4\n10 20 30 40', 'Count: 4 | Total: 100'],
    ['1\n50', 'Count: 1 | Total: 50'],
    ['5\n-5 5 -10 10 0', 'Count: 5 | Total: 0'],
    ['3\n100 200 300', 'Count: 3 | Total: 600'],
    ['6\n1 2 3 4 5 6', 'Count: 6 | Total: 21'],
    ['2\n-50 -50', 'Count: 2 | Total: -100'],
    ['5\n10 10 10 10 10', 'Count: 5 | Total: 50'],
    ['7\n2 4 6 8 10 12 14', 'Count: 7 | Total: 56'],
    ['3\n0 0 0', 'Count: 3 | Total: 0'],
    ['4\n1000 -250 500 -250', 'Count: 4 | Total: 1000']
  ])
});

addProblem({
  id: 'c-store-2',
  topicId: 'c-storage-classes',
  level: 'beginner',
  title: 'Static State Running Maximum Tracker',
  difficulty: 'medium',
  problemStatement: 'Implement a function `int trackMax(int val)` using a static variable initialized appropriately to keep track of the maximum value seen so far across calls. Given an array of N integers, print the running maximum after each element, separated by spaces.',
  inputFormat: 'First line integer N, second line N integers.',
  outputFormat: 'N running maximums separated by spaces.',
  constraints: ['1 <= N <= 1000', '-10000 <= val <= 10000'],
  examples: [
    { input: '5\n3 1 4 1 5', output: '3 3 4 4 5' }
  ],
  testCases: createTC('c-store-2', [
    ['5\n3 1 4 1 5', '3 3 4 4 5'],
    ['4\n10 8 6 4', '10 10 10 10'],
    ['4\n1 5 10 20', '1 5 10 20'],
    ['3\n-5 -2 -10', '-5 -2 -2'],
    ['6\n7 7 7 2 9 1', '7 7 7 7 9 9'],
    ['2\n0 0', '0 0'],
    ['5\n100 -50 200 -100 300', '100 100 200 200 300'],
    ['1\n42', '42'],
    ['4\n-1 -2 -3 -4', '-1 -1 -1 -1'],
    ['5\n2 8 3 15 1', '2 8 8 15 15']
  ])
});

addProblem({
  id: 'c-store-3',
  topicId: 'c-storage-classes',
  level: 'beginner',
  title: 'Register Storage Variable Loop Acceleration',
  difficulty: 'medium',
  problemStatement: 'In C systems programming, `register` hints to the compiler that a heavily iterated variable should be placed in a CPU register. Write a program using `register int` loop counter and accumulator to compute the sum of squares sum_{i=1}^n i^2. Print the result.',
  inputFormat: 'A single integer n.',
  outputFormat: 'Sum of squares as a long long.',
  constraints: ['1 <= n <= 10000'],
  examples: [
    { input: '5', output: '55' }
  ],
  testCases: createTC('c-store-3', [
    ['5', '55'],
    ['1', '1'],
    ['2', '5'],
    ['3', '14'],
    ['4', '30'],
    ['10', '385'],
    ['20', '2870'],
    ['50', '42925'],
    ['100', '338350'],
    ['15', '1240']
  ])
});

// ============================================================================
// INTERMEDIATE
// ============================================================================

// 7. c-pointers-and-memory-addresses (3 problems)
addProblem({
  id: 'c-ptr-1',
  topicId: 'c-pointers-and-memory-addresses',
  level: 'intermediate',
  title: 'Pointer Swap Implementation',
  difficulty: 'easy',
  problemStatement: 'Write a C function `void swap(int *a, int *b)` that dereferences pointers to swap two integer values in place. Read two integers, call swap via their memory addresses, and print the resulting values separated by space.',
  inputFormat: 'Two integers x and y.',
  outputFormat: 'Two integers: "y x"',
  constraints: ['-10000 <= x, y <= 10000'],
  examples: [
    { input: '3 7', output: '7 3' }
  ],
  testCases: createTC('c-ptr-1', [
    ['3 7', '7 3'],
    ['-10 20', '20 -10'],
    ['0 5', '5 0'],
    ['100 100', '100 100'],
    ['-45 -90', '-90 -45'],
    ['123 456', '456 123'],
    ['7 -7', '-7 7'],
    ['50 25', '25 50'],
    ['99 1', '1 99'],
    ['-1 1', '1 -1']
  ])
});

addProblem({
  id: 'c-ptr-2',
  topicId: 'c-pointers-and-memory-addresses',
  level: 'intermediate',
  title: 'Min and Max Output Pointers',
  difficulty: 'easy',
  problemStatement: 'Write a C function `void getMinMax(const int *arr, int n, int *outMin, int *outMax)` that scans an array using pointers and stores the minimum and maximum elements in the memory addresses pointed to by `outMin` and `outMax`. Print "Min: <min> | Max: <max>".',
  inputFormat: 'First line integer n, second line n space-separated integers.',
  outputFormat: '"Min: <min> | Max: <max>"',
  constraints: ['1 <= n <= 1000'],
  examples: [
    { input: '5\n4 1 9 2 7', output: 'Min: 1 | Max: 9' }
  ],
  testCases: createTC('c-ptr-2', [
    ['5\n4 1 9 2 7', 'Min: 1 | Max: 9'],
    ['1\n42', 'Min: 42 | Max: 42'],
    ['4\n-10 -50 0 20', 'Min: -50 | Max: 20'],
    ['6\n3 3 3 3 3 3', 'Min: 3 | Max: 3'],
    ['5\n100 200 50 300 150', 'Min: 50 | Max: 300'],
    ['3\n-1 -2 -3', 'Min: -3 | Max: -1'],
    ['4\n5 10 15 20', 'Min: 5 | Max: 20'],
    ['5\n99 10 55 4 80', 'Min: 4 | Max: 99'],
    ['2\n-100 100', 'Min: -100 | Max: 100'],
    ['7\n12 45 78 23 56 89 34', 'Min: 12 | Max: 89']
  ])
});

addProblem({
  id: 'c-ptr-3',
  topicId: 'c-pointers-and-memory-addresses',
  level: 'intermediate',
  title: 'Pointer Dereference Weighted Traversal',
  difficulty: 'medium',
  problemStatement: 'Given an array of n integers, iterate through the array using a pointer `int *ptr = arr`. Calculate the weighted sum where the element at offset i is multiplied by (i + 1): sum_{i=0}^{n-1} (*(ptr + i) * (i + 1)). Print the final sum.',
  inputFormat: 'First line integer n, second line n integers.',
  outputFormat: 'Single integer sum.',
  constraints: ['1 <= n <= 1000'],
  examples: [
    { input: '3\n2 4 6', output: '28' }
  ],
  testCases: createTC('c-ptr-3', [
    ['3\n2 4 6', '28'],
    ['1\n10', '10'],
    ['4\n1 1 1 1', '10'],
    ['4\n1 2 3 4', '30'],
    ['5\n5 4 3 2 1', '35'],
    ['3\n-1 -2 -3', '-14'],
    ['2\n10 20', '50'],
    ['5\n0 0 0 0 5', '25'],
    ['3\n100 -50 25', '75'],
    ['4\n2 -1 3 -2', '9']
  ])
});

// 8. c-pointer-arithmetic-and-arrays (3 problems)
addProblem({
  id: 'c-arrptr-1',
  topicId: 'c-pointer-arithmetic-and-arrays',
  level: 'intermediate',
  title: 'In-Place Array Reversal using Pointers',
  difficulty: 'easy',
  problemStatement: 'Reverse an array of n integers in place using two pointers `int *left = arr` and `int *right = arr + n - 1`. Increment left and decrement right while swapping until they cross. Print the reversed array separated by spaces.',
  inputFormat: 'First line integer n, second line n integers.',
  outputFormat: 'Reversed array separated by spaces.',
  constraints: ['1 <= n <= 1000'],
  examples: [
    { input: '5\n1 2 3 4 5', output: '5 4 3 2 1' }
  ],
  testCases: createTC('c-arrptr-1', [
    ['5\n1 2 3 4 5', '5 4 3 2 1'],
    ['1\n99', '99'],
    ['4\n10 20 30 40', '40 30 20 10'],
    ['2\n7 8', '8 7'],
    ['6\n1 0 1 0 1 0', '0 1 0 1 0 1'],
    ['3\n-5 0 5', '5 0 -5'],
    ['5\n10 10 10 10 10', '10 10 10 10 10'],
    ['7\n1 3 5 7 9 11 13', '13 11 9 7 5 3 1'],
    ['4\n-1 -2 -3 -4', '-4 -3 -2 -1'],
    ['5\n9 8 7 6 5', '5 6 7 8 9']
  ])
});

addProblem({
  id: 'c-arrptr-2',
  topicId: 'c-pointer-arithmetic-and-arrays',
  level: 'intermediate',
  title: 'Subarray Sum via Pointer Offsets',
  difficulty: 'medium',
  problemStatement: 'Given an array of n integers and two 0-based indices start and end (0 <= start <= end < n), compute the sum of elements from start to end by traversing with pointers from `(arr + start)` up to `(arr + end)`. Print the sum.',
  inputFormat: 'First line n. Second line n integers. Third line two integers: start and end.',
  outputFormat: 'Single integer sum.',
  constraints: ['1 <= n <= 1000', '0 <= start <= end < n'],
  examples: [
    { input: '5\n10 20 30 40 50\n1 3', output: '90' }
  ],
  testCases: createTC('c-arrptr-2', [
    ['5\n10 20 30 40 50\n1 3', '90'],
    ['4\n1 2 3 4\n0 3', '10'],
    ['5\n5 10 15 20 25\n2 2', '15'],
    ['6\n-10 20 -30 40 -50 60\n1 4', '-20'],
    ['3\n100 200 300\n0 1', '300'],
    ['4\n7 7 7 7\n1 3', '21'],
    ['5\n1 1 1 1 1\n0 4', '5'],
    ['4\n-5 -5 -5 -5\n2 3', '-10'],
    ['3\n50 60 70\n2 2', '70'],
    ['6\n2 4 6 8 10 12\n0 5', '42']
  ])
});

addProblem({
  id: 'c-arrptr-3',
  topicId: 'c-pointer-arithmetic-and-arrays',
  level: 'intermediate',
  title: 'Pointer-Based Linear Search and Offset Calculation',
  difficulty: 'medium',
  problemStatement: 'Implement a function `int findOffset(const int *arr, int n, int target)` that returns the pointer offset (index) where target first appears using pointer comparison `ptr - arr`. If not found, return -1. Print the offset.',
  inputFormat: 'First line n. Second line n integers. Third line target integer.',
  outputFormat: 'Offset integer or -1.',
  constraints: ['1 <= n <= 1000'],
  examples: [
    { input: '5\n10 25 30 45 50\n30', output: '2' },
    { input: '3\n1 2 3\n99', output: '-1' }
  ],
  testCases: createTC('c-arrptr-3', [
    ['5\n10 25 30 45 50\n30', '2'],
    ['3\n1 2 3\n99', '-1'],
    ['4\n7 8 9 10\n7', '0'],
    ['4\n7 8 9 10\n10', '3'],
    ['6\n5 2 8 2 9 1\n2', '1'],
    ['1\n42\n42', '0'],
    ['1\n42\n10', '-1'],
    ['5\n-10 -20 -30 -40 -50\n-30', '2'],
    ['4\n100 200 300 400\n250', '-1'],
    ['5\n3 3 3 3 3\n3', '0']
  ])
});

// 9. c-strings-null-terminator (4 problems)
addProblem({
  id: 'c-str-1',
  topicId: 'c-strings-null-terminator',
  level: 'intermediate',
  title: 'Manual C String Length Without strlen',
  difficulty: 'easy',
  problemStatement: 'In C, strings are arrays of characters terminated by the null character (\'\\0\'). Write a function `int my_strlen(const char *s)` that iterates through the string until reaching \'\\0\' without using string.h. Given an input line, print its character count.',
  inputFormat: 'A single string (may contain spaces).',
  outputFormat: 'Length of the string as integer.',
  constraints: ['Length <= 1000'],
  examples: [
    { input: 'Hello World', output: '11' }
  ],
  testCases: createTC('c-str-1', [
    ['Hello World', '11'],
    ['C Programming', '13'],
    ['OpenAI', '6'],
    ['Antigravity', '11'],
    ['a', '1'],
    ['Embedded Systems 2026', '21'],
    ['Pointer to char*', '16'],
    ['Null terminator \\0', '18'],
    ['Memory layout and stack', '23'],
    ['1234567890', '10']
  ])
});

addProblem({
  id: 'c-str-2',
  topicId: 'c-strings-null-terminator',
  level: 'intermediate',
  title: 'C String Palindrome Verifier',
  difficulty: 'easy',
  problemStatement: 'Given a word string, check whether it is a palindrome (reads identical forwards and backwards, case-sensitive) by comparing characters using two pointers moving towards the center. Print "true" if palindrome, else "false".',
  inputFormat: 'A single word string.',
  outputFormat: '"true" or "false"',
  constraints: ['Length <= 200'],
  examples: [
    { input: 'racecar', output: 'true' },
    { input: 'hello', output: 'false' }
  ],
  testCases: createTC('c-str-2', [
    ['racecar', 'true'],
    ['hello', 'false'],
    ['madam', 'true'],
    ['level', 'true'],
    ['rotor', 'true'],
    ['c', 'true'],
    ['noon', 'true'],
    ['step on no pets', 'true'],
    ['world', 'false'],
    ['abccba', 'true']
  ])
});

addProblem({
  id: 'c-str-3',
  topicId: 'c-strings-null-terminator',
  level: 'intermediate',
  title: 'Word Count in C String',
  difficulty: 'medium',
  problemStatement: 'Read a line of text. Using character inspection with a loop and state flag (in_word), count the total number of words (sequences of non-whitespace characters separated by one or more spaces/tabs). Print the count.',
  inputFormat: 'A line of text.',
  outputFormat: 'Word count as integer.',
  constraints: ['Length <= 1000'],
  examples: [
    { input: 'C programming is powerful and fast', output: '6' }
  ],
  testCases: createTC('c-str-3', [
    ['C programming is powerful and fast', '6'],
    ['Hello', '1'],
    ['   spaces   at   both   ends   ', '4'],
    ['one two three four five', '5'],
    ['Systems architecture and low level memory', '6'],
    ['Pointers references memory heap stack', '5'],
    ['Quick brown fox', '3'],
    ['Testing edge case', '3'],
    ['a b c d e f g', '7'],
    ['Compilation pipeline preprocess compile assemble link', '6']
  ])
});

addProblem({
  id: 'c-str-4',
  topicId: 'c-strings-null-terminator',
  level: 'intermediate',
  title: 'Safe String Concatenation and Null Termination',
  difficulty: 'medium',
  problemStatement: 'Given two strings s1 and s2 and a separator char sep, concatenate them into a buffer with sep in between and properly ensure the trailing null terminator \'\\0\'. Print the concatenated result.',
  inputFormat: 'Three space-separated tokens: s1 s2 and sep (single character).',
  outputFormat: 'Concatenated string: s1 + sep + s2',
  constraints: ['Lengths of s1 and s2 <= 100'],
  examples: [
    { input: 'hello world -', output: 'hello-world' }
  ],
  testCases: createTC('c-str-4', [
    ['hello world -', 'hello-world'],
    ['foo bar _', 'foo_bar'],
    ['user id :', 'user:id'],
    ['item count /', 'item/count'],
    ['left right |', 'left|right'],
    ['start end ->', 'start-end'],
    ['root leaf /', 'root/leaf'],
    ['key value =', 'key=value'],
    ['first last ,', 'first,last'],
    ['alpha beta +', 'alpha+beta']
  ])
});

// 10. c-structs-and-typedef (3 problems)
addProblem({
  id: 'c-struct-1',
  topicId: 'c-structs-and-typedef',
  level: 'intermediate',
  title: 'Student Record Average with typedef struct',
  difficulty: 'medium',
  problemStatement: 'Define a struct `typedef struct { int id; char name[50]; float score1; float score2; float score3; } Student;`. Given a student record, calculate the average score ((score1 + score2 + score3) / 3.0) and print: "ID: <id> | Name: <name> | Average: <avg rounded to 2 decimals>".',
  inputFormat: 'id name score1 score2 score3 separated by spaces.',
  outputFormat: '"ID: <id> | Name: <name> | Average: <avg>"',
  constraints: ['id >= 1', 'scores between 0.0 and 100.0'],
  examples: [
    { input: '101 Alice 85.5 90.0 92.5', output: 'ID: 101 | Name: Alice | Average: 89.33' }
  ],
  testCases: createTC('c-struct-1', [
    ['101 Alice 85.5 90.0 92.5', 'ID: 101 | Name: Alice | Average: 89.33'],
    ['102 Bob 70.0 75.0 80.0', 'ID: 102 | Name: Bob | Average: 75.00'],
    ['103 Charlie 100.0 100.0 100.0', 'ID: 103 | Name: Charlie | Average: 100.00'],
    ['104 David 50.0 60.0 70.0', 'ID: 104 | Name: David | Average: 60.00'],
    ['105 Eve 95.0 92.0 88.0', 'ID: 105 | Name: Eve | Average: 91.67'],
    ['106 Frank 0.0 50.0 100.0', 'ID: 106 | Name: Frank | Average: 50.00'],
    ['107 Grace 88.0 89.0 90.0', 'ID: 107 | Name: Grace | Average: 89.00'],
    ['108 Heidi 77.5 82.5 91.0', 'ID: 108 | Name: Heidi | Average: 83.67'],
    ['109 Ivan 65.0 65.0 65.0', 'ID: 109 | Name: Ivan | Average: 65.00'],
    ['110 Judy 80.0 85.0 90.0', 'ID: 110 | Name: Judy | Average: 85.00']
  ])
});

addProblem({
  id: 'c-struct-2',
  topicId: 'c-structs-and-typedef',
  level: 'intermediate',
  title: '2D Centroid of Points using Struct Array',
  difficulty: 'medium',
  problemStatement: 'Define a struct `Point { double x; double y; };`. Given n points, compute the centroid coordinates (x_centroid = sum(x)/n, y_centroid = sum(y)/n). Print "Centroid: (<x>, <y>)" with both coordinates rounded to 2 decimal places.',
  inputFormat: 'First line integer n. Next n lines contain x and y coordinates.',
  outputFormat: '"Centroid: (<x>, <y>)"',
  constraints: ['1 <= n <= 1000'],
  examples: [
    { input: '3\n0.0 0.0\n3.0 0.0\n0.0 3.0', output: 'Centroid: (1.00, 1.00)' }
  ],
  testCases: createTC('c-struct-2', [
    ['3\n0.0 0.0\n3.0 0.0\n0.0 3.0', 'Centroid: (1.00, 1.00)'],
    ['1\n5.0 7.5', 'Centroid: (5.00, 7.50)'],
    ['4\n0.0 0.0\n10.0 0.0\n10.0 10.0\n0.0 10.0', 'Centroid: (5.00, 5.00)'],
    ['2\n-5.0 -5.0\n5.0 5.0', 'Centroid: (0.00, 0.00)'],
    ['3\n1.0 2.0\n3.0 4.0\n5.0 6.0', 'Centroid: (3.00, 4.00)'],
    ['2\n-10.0 20.0\n10.0 -20.0', 'Centroid: (0.00, 0.00)'],
    ['4\n1.5 2.5\n3.5 4.5\n5.5 6.5\n7.5 8.5', 'Centroid: (4.50, 5.50)'],
    ['3\n2.0 3.0\n4.0 6.0\n6.0 9.0', 'Centroid: (4.00, 6.00)'],
    ['2\n100.0 200.0\n300.0 400.0', 'Centroid: (200.00, 300.00)'],
    ['5\n1.0 1.0\n2.0 2.0\n3.0 3.0\n4.0 4.0\n5.0 5.0', 'Centroid: (3.00, 3.00)']
  ])
});

addProblem({
  id: 'c-struct-3',
  topicId: 'c-structs-and-typedef',
  level: 'intermediate',
  title: 'Complex Number Arithmetic via Structs',
  difficulty: 'medium',
  problemStatement: 'Define a struct `Complex { double real; double imag; };`. Implement addition: (a+bi)+(c+di) = (a+c)+(b+d)i and multiplication: (a+bi)*(c+di) = (ac-bd)+(ad+bc)i. Given two complex numbers, print their sum and product in the format "<real> + <imag>i" (rounded to 2 decimals; if imag is negative, use "<real> - <|imag|>i").',
  inputFormat: 'Four doubles: a b c d representing (a + bi) and (c + di).',
  outputFormat: 'Two lines: "Sum: ..." and "Prod: ..."',
  constraints: ['-1000 <= a, b, c, d <= 1000'],
  examples: [
    { input: '2 3 4 5', output: 'Sum: 6.00 + 8.00i\nProd: -7.00 + 22.00i' }
  ],
  testCases: createTC('c-struct-3', [
    ['2 3 4 5', 'Sum: 6.00 + 8.00i\nProd: -7.00 + 22.00i'],
    ['1 2 1 -2', 'Sum: 2.00 + 0.00i\nProd: 5.00 + 0.00i'],
    ['0 1 0 1', 'Sum: 0.00 + 2.00i\nProd: -1.00 + 0.00i'],
    ['3 0 5 0', 'Sum: 8.00 + 0.00i\nProd: 15.00 + 0.00i'],
    ['2 -3 4 2', 'Sum: 6.00 - 1.00i\nProd: 14.00 - 8.00i'],
    ['5 5 2 2', 'Sum: 7.00 + 7.00i\nProd: 0.00 + 20.00i'],
    ['-1 -1 -1 -1', 'Sum: -2.00 - 2.00i\nProd: 0.00 + 2.00i'],
    ['4 3 4 -3', 'Sum: 8.00 + 0.00i\nProd: 25.00 + 0.00i'],
    ['1 1 2 3', 'Sum: 3.00 + 4.00i\nProd: -1.00 + 5.00i'],
    ['10 0 0 10', 'Sum: 10.00 + 10.00i\nProd: 0.00 + 100.00i']
  ])
});

// 11. c-unions-and-enums (3 problems)
addProblem({
  id: 'c-union-1',
  topicId: 'c-unions-and-enums',
  level: 'intermediate',
  title: 'Tagged Union Data Packet Parser',
  difficulty: 'medium',
  problemStatement: 'In C, tagged unions save memory by combining an enum discriminator with a union payload: `typedef enum { TYPE_INT = 1, TYPE_FLOAT = 2, TYPE_CHAR = 3 } Tag; union Val { int i; float f; char c; };`. Given a tag code (1, 2, or 3) and value token, read it into the tagged union and print "Parsed: INT <val>", "Parsed: FLOAT <val rounded to 2 decimals>", or "Parsed: CHAR <val>".',
  inputFormat: 'Tag integer followed by value token.',
  outputFormat: 'Formatted string describing parsed type and value.',
  constraints: ['Tag in {1, 2, 3}'],
  examples: [
    { input: '1 42', output: 'Parsed: INT 42' },
    { input: '2 3.1415', output: 'Parsed: FLOAT 3.14' }
  ],
  testCases: createTC('c-union-1', [
    ['1 42', 'Parsed: INT 42'],
    ['2 3.1415', 'Parsed: FLOAT 3.14'],
    ['3 X', 'Parsed: CHAR X'],
    ['1 -99', 'Parsed: INT -99'],
    ['2 100.5', 'Parsed: FLOAT 100.50'],
    ['3 #', 'Parsed: CHAR #'],
    ['1 0', 'Parsed: INT 0'],
    ['2 0.001', 'Parsed: FLOAT 0.00'],
    ['3 z', 'Parsed: CHAR z'],
    ['2 -45.75', 'Parsed: FLOAT -45.75']
  ])
});

addProblem({
  id: 'c-union-2',
  topicId: 'c-unions-and-enums',
  level: 'intermediate',
  title: 'Day of Week Enum Offset Calculator',
  difficulty: 'easy',
  problemStatement: 'Define an enumeration `enum Day { SUN=0, MON=1, TUE=2, WED=3, THU=4, FRI=5, SAT=6 };`. Given a starting day index (0-6) and k days forward, compute (start + k) % 7 and print the full name of the resulting day (Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday).',
  inputFormat: 'Two integers: startDay (0-6) and k (k >= 0).',
  outputFormat: 'Name of the day of the week.',
  constraints: ['0 <= startDay <= 6', '0 <= k <= 10000'],
  examples: [
    { input: '1 3', output: 'Thursday' }
  ],
  testCases: createTC('c-union-2', [
    ['1 3', 'Thursday'],
    ['0 7', 'Sunday'],
    ['5 2', 'Sunday'],
    ['6 1', 'Sunday'],
    ['2 10', 'Friday'],
    ['4 14', 'Thursday'],
    ['3 0', 'Wednesday'],
    ['0 1', 'Monday'],
    ['5 5', 'Wednesday'],
    ['6 100', 'Monday']
  ])
});

addProblem({
  id: 'c-union-3',
  topicId: 'c-unions-and-enums',
  level: 'intermediate',
  title: 'Raw Byte Inspector of Float using Union',
  difficulty: 'hard',
  problemStatement: 'In systems programming, unions allow type-punning to inspect raw bytes of a memory block: `union FloatBytes { float f; unsigned char bytes[4]; };`. Read a float f, copy it into the union, and print the 4 bytes in hexadecimal format separated by spaces (e.g., "%02X %02X %02X %02X").',
  inputFormat: 'A single float value.',
  outputFormat: 'Four 2-digit uppercase hex bytes separated by spaces.',
  constraints: ['Float value representable in standard IEEE 754 32-bit float.'],
  examples: [
    { input: '0.0', output: '00 00 00 00' }
  ],
  testCases: createTC('c-union-3', [
    ['0.0', '00 00 00 00'],
    ['1.0', '00 00 80 3F'],
    ['-1.0', '00 00 80 BF'],
    ['2.0', '00 00 00 40'],
    ['0.5', '00 00 00 3F'],
    ['-0.5', '00 00 00 BF'],
    ['4.0', '00 00 80 40'],
    ['100.0', '00 00 C8 42'],
    ['10.0', '00 00 20 41'],
    ['256.0', '00 00 80 43']
  ])
});

// 12. c-malloc-calloc-free (3 problems)
addProblem({
  id: 'c-heap-1',
  topicId: 'c-malloc-calloc-free',
  level: 'intermediate',
  title: 'Dynamic Array Allocation with malloc',
  difficulty: 'medium',
  problemStatement: 'Read an integer n, dynamically allocate an array of n integers using `int *arr = (int *)malloc(n * sizeof(int))`. Read n integers into the array. Given a threshold value k, count how many elements are strictly greater than k. Free the allocated memory before exiting and print the count.',
  inputFormat: 'First line n. Second line n integers. Third line threshold k.',
  outputFormat: 'Count of elements greater than k.',
  constraints: ['1 <= n <= 10000'],
  examples: [
    { input: '5\n10 20 30 40 50\n25', output: '3' }
  ],
  testCases: createTC('c-heap-1', [
    ['5\n10 20 30 40 50\n25', '3'],
    ['4\n1 2 3 4\n5', '0'],
    ['4\n5 10 15 20\n0', '4'],
    ['6\n-10 0 10 20 30 40\n10', '3'],
    ['3\n100 200 300\n100', '2'],
    ['5\n7 7 7 7 7\n7', '0'],
    ['5\n8 8 8 8 8\n7', '5'],
    ['1\n42\n41', '1'],
    ['6\n15 25 35 45 55 65\n40', '3'],
    ['4\n-5 -2 0 3\n-3', '3']
  ])
});

addProblem({
  id: 'c-heap-2',
  topicId: 'c-malloc-calloc-free',
  level: 'intermediate',
  title: 'Dynamic 2D Matrix with calloc and Row Sums',
  difficulty: 'medium',
  problemStatement: 'Use dynamic heap allocation to create a 2D matrix of dimensions rows R and cols C. Populate the elements from standard input. Compute and print the sum of each row on separate lines. Ensure all allocated row arrays and the pointer array are freed.',
  inputFormat: 'First line R and C. Next R lines each have C integers.',
  outputFormat: 'R lines, each with the sum of that row.',
  constraints: ['1 <= R, C <= 100'],
  examples: [
    { input: '2 3\n1 2 3\n4 5 6', output: '6\n15' }
  ],
  testCases: createTC('c-heap-2', [
    ['2 3\n1 2 3\n4 5 6', '6\n15'],
    ['1 4\n10 20 30 40', '100'],
    ['3 2\n5 5\n10 10\n15 15', '10\n20\n30'],
    ['2 2\n-5 5\n10 -10', '0\n0'],
    ['3 3\n1 0 0\n0 1 0\n0 0 1', '1\n1\n1'],
    ['1 1\n42', '42'],
    ['4 1\n1\n2\n3\n4', '1\n2\n3\n4'],
    ['2 4\n2 4 6 8\n1 3 5 7', '20\n16'],
    ['3 2\n100 200\n-50 50\n0 0', '300\n0\n0'],
    ['2 3\n7 8 9\n10 11 12', '24\n33']
  ])
});

addProblem({
  id: 'c-heap-3',
  topicId: 'c-malloc-calloc-free',
  level: 'intermediate',
  title: 'Dynamic String Duplication on Heap',
  difficulty: 'medium',
  problemStatement: 'Implement a function `char *my_strdup_upper(const char *src)` that measures src length, allocates exact `(len + 1) * sizeof(char)` on the heap, copies src converted to uppercase, and returns the heap pointer. Print the duplicated uppercase string and free the pointer.',
  inputFormat: 'A single string.',
  outputFormat: 'Uppercase string.',
  constraints: ['Length <= 500'],
  examples: [
    { input: 'hello world', output: 'HELLO WORLD' }
  ],
  testCases: createTC('c-heap-3', [
    ['hello world', 'HELLO WORLD'],
    ['c programming', 'C PROGRAMMING'],
    ['heap memory malloc', 'HEAP MEMORY MALLOC'],
    ['dynamic', 'DYNAMIC'],
    ['Systems 2026', 'SYSTEMS 2026'],
    ['a', 'A'],
    ['Pointer to Char', 'POINTER TO CHAR'],
    ['already UPPER', 'ALREADY UPPER'],
    ['123 testing', '123 TESTING'],
    ['lowercase to uppercase', 'LOWERCASE TO UPPERCASE']
  ])
});

// 13. c-realloc-and-memory-leaks (3 problems)
addProblem({
  id: 'c-realloc-1',
  topicId: 'c-realloc-and-memory-leaks',
  level: 'intermediate',
  title: 'Dynamic Resizable Vector Simulation with realloc',
  difficulty: 'medium',
  problemStatement: 'Simulate a dynamic array (vector) in C. Start with initial capacity 2 allocated with malloc. Read integers until encountering -1. Whenever the array size reaches capacity, double the capacity using `realloc`. Print "Size: <size> | Capacity: <capacity>" followed on the next line by all stored elements separated by space.',
  inputFormat: 'A stream of non-negative integers terminated by -1.',
  outputFormat: 'First line: "Size: <size> | Capacity: <capacity>"\nSecond line: space-separated elements.',
  constraints: ['Total elements <= 1000'],
  examples: [
    { input: '10 20 30 -1', output: 'Size: 3 | Capacity: 4\n10 20 30' }
  ],
  testCases: createTC('c-realloc-1', [
    ['10 20 30 -1', 'Size: 3 | Capacity: 4\n10 20 30'],
    ['5 -1', 'Size: 1 | Capacity: 2\n5'],
    ['1 2 -1', 'Size: 2 | Capacity: 2\n1 2'],
    ['1 2 3 4 5 -1', 'Size: 5 | Capacity: 8\n1 2 3 4 5'],
    ['7 8 9 10 -1', 'Size: 4 | Capacity: 4\n7 8 9 10'],
    ['100 200 300 400 500 600 700 800 900 -1', 'Size: 9 | Capacity: 16\n100 200 300 400 500 600 700 800 900'],
    ['42 -1', 'Size: 1 | Capacity: 2\n42'],
    ['10 20 30 40 50 60 -1', 'Size: 6 | Capacity: 8\n10 20 30 40 50 60'],
    ['3 3 3 -1', 'Size: 3 | Capacity: 4\n3 3 3'],
    ['1 1 1 1 1 1 1 -1', 'Size: 7 | Capacity: 8\n1 1 1 1 1 1 1']
  ])
});

addProblem({
  id: 'c-realloc-2',
  topicId: 'c-realloc-and-memory-leaks',
  level: 'intermediate',
  title: 'Dynamic String Concatenator with realloc',
  difficulty: 'medium',
  problemStatement: 'Read an integer N, followed by N words. Starting with a heap buffer containing the first word, use `realloc` to expand the buffer just enough to append each subsequent word separated by a space. Free memory at the end and print the full sentence.',
  inputFormat: 'First line N. Second line N space-separated words.',
  outputFormat: 'Full concatenated sentence.',
  constraints: ['1 <= N <= 100', 'Word length <= 50'],
  examples: [
    { input: '3\nC is fast', output: 'C is fast' }
  ],
  testCases: createTC('c-realloc-2', [
    ['3\nC is fast', 'C is fast'],
    ['1\nStandalone', 'Standalone'],
    ['4\nMemory leaks are bad', 'Memory leaks are bad'],
    ['5\nHeap allocation with realloc works', 'Heap allocation with realloc works'],
    ['2\nHello World', 'Hello World'],
    ['6\nThe quick brown fox jumps over', 'The quick brown fox jumps over'],
    ['3\nSystems engineering rocks', 'Systems engineering rocks'],
    ['4\nOne two three four', 'One two three four'],
    ['2\nPointer Arithmetic', 'Pointer Arithmetic'],
    ['5\nBuild fast low level tools', 'Build fast low level tools']
  ])
});

addProblem({
  id: 'c-realloc-3',
  topicId: 'c-realloc-and-memory-leaks',
  level: 'intermediate',
  title: 'Shrink-To-Fit Dynamic Memory Optimization',
  difficulty: 'medium',
  problemStatement: 'Given an array allocated with capacity 10, fill it with n integers (1 <= n <= 10). Then use `realloc` to resize the allocated block to exactly `n * sizeof(int)`. Compute the sum of the elements and print: "Resized to: <n> elements | Sum: <sum>". Free the block.',
  inputFormat: 'First line n. Second line n integers.',
  outputFormat: '"Resized to: <n> elements | Sum: <sum>"',
  constraints: ['1 <= n <= 10'],
  examples: [
    { input: '4\n10 20 30 40', output: 'Resized to: 4 elements | Sum: 100' }
  ],
  testCases: createTC('c-realloc-3', [
    ['4\n10 20 30 40', 'Resized to: 4 elements | Sum: 100'],
    ['1\n50', 'Resized to: 1 elements | Sum: 50'],
    ['5\n1 2 3 4 5', 'Resized to: 5 elements | Sum: 15'],
    ['2\n-10 10', 'Resized to: 2 elements | Sum: 0'],
    ['3\n100 200 300', 'Resized to: 3 elements | Sum: 600'],
    ['6\n2 4 6 8 10 12', 'Resized to: 6 elements | Sum: 42'],
    ['7\n5 5 5 5 5 5 5', 'Resized to: 7 elements | Sum: 35'],
    ['8\n1 1 1 1 1 1 1 1', 'Resized to: 8 elements | Sum: 8'],
    ['2\n99 1', 'Resized to: 2 elements | Sum: 100'],
    ['10\n1 2 3 4 5 6 7 8 9 10', 'Resized to: 10 elements | Sum: 55']
  ])
});

// ============================================================================
// ADVANCED
// ============================================================================

// 14. c-file-handling-io (3 problems)
addProblem({
  id: 'c-file-1',
  topicId: 'c-file-handling-io',
  level: 'advanced',
  title: 'CSV Record Stream Serializer',
  difficulty: 'medium',
  problemStatement: 'In C file and stream handling, comma-separated records are parsed with scanf/sscanf. Given a stream of records in the format "ID,NAME,SCORE", parse each record and format it as: "[#<ID>] <NAME> -> <SCORE> pts". Print each on a new line.',
  inputFormat: 'An integer N followed by N comma-separated strings "ID,NAME,SCORE".',
  outputFormat: 'N formatted lines: "[#<ID>] <NAME> -> <SCORE> pts"',
  constraints: ['1 <= N <= 100'],
  examples: [
    { input: '2\n101,Alice,95\n102,Bob,88', output: '[#101] Alice -> 95 pts\n[#102] Bob -> 88 pts' }
  ],
  testCases: createTC('c-file-1', [
    ['2\n101,Alice,95\n102,Bob,88', '[#101] Alice -> 95 pts\n[#102] Bob -> 88 pts'],
    ['1\n1,Root,100', '[#1] Root -> 100 pts'],
    ['3\n10,Alpha,70\n20,Beta,80\n30,Gamma,90', '[#10] Alpha -> 70 pts\n[#20] Beta -> 80 pts\n[#30] Gamma -> 90 pts'],
    ['2\n501,Server,99\n502,Client,94', '[#501] Server -> 99 pts\n[#502] Client -> 94 pts'],
    ['1\n999,Admin,50', '[#999] Admin -> 50 pts'],
    ['3\n5,John,65\n6,Jane,75\n7,Jack,85', '[#5] John -> 65 pts\n[#6] Jane -> 75 pts\n[#7] Jack -> 85 pts'],
    ['2\n11,Dev,88\n22,Ops,92', '[#11] Dev -> 88 pts\n[#22] Ops -> 92 pts'],
    ['1\n77,Lucky,77', '[#77] Lucky -> 77 pts'],
    ['3\n100,UserA,10\n101,UserB,20\n102,UserC,30', '[#100] UserA -> 10 pts\n[#101] UserB -> 20 pts\n[#102] UserC -> 30 pts'],
    ['2\n1,First,100\n2,Last,0', '[#1] First -> 100 pts\n[#2] Last -> 0 pts']
  ])
});

addProblem({
  id: 'c-file-2',
  topicId: 'c-file-handling-io',
  level: 'advanced',
  title: 'Hex Dump Stream Formatter',
  difficulty: 'medium',
  problemStatement: 'Systems I/O inspects binary stream dumps. Given an ASCII string, output its hexadecimal dump representation where each character byte is printed as a two-digit uppercase hex value separated by spaces.',
  inputFormat: 'A string line.',
  outputFormat: 'Space-separated uppercase hex bytes.',
  constraints: ['Length <= 200'],
  examples: [
    { input: 'Hello', output: '48 65 6C 6C 6F' }
  ],
  testCases: createTC('c-file-2', [
    ['Hello', '48 65 6C 6C 6F'],
    ['C', '43'],
    ['POSIX', '50 4F 53 49 58'],
    ['Linux', '4C 69 6E 75 78'],
    ['123', '31 32 33'],
    ['Byte', '42 79 74 65'],
    ['Data', '44 61 74 61'],
    ['Test', '54 65 73 74'],
    ['Kernel', '4B 65 72 6E 65 6C'],
    ['Stream', '53 74 72 65 61 6D']
  ])
});

addProblem({
  id: 'c-file-3',
  topicId: 'c-file-handling-io',
  level: 'advanced',
  title: 'Run-Length Stream Encoder (RLE)',
  difficulty: 'medium',
  problemStatement: 'In binary file compression streams, Run-Length Encoding (RLE) compresses repeated contiguous bytes into count and byte pairs. Given a string of uppercase letters, compress it using RLE format: "<count><char>" (e.g. "AAABB" -> "3A2B").',
  inputFormat: 'A string of characters.',
  outputFormat: 'RLE compressed string.',
  constraints: ['Length <= 500'],
  examples: [
    { input: 'AAABB', output: '3A2B' }
  ],
  testCases: createTC('c-file-3', [
    ['AAABB', '3A2B'],
    ['A', '1A'],
    ['WWWWWWWWWWWWBWWWWWWWWWWWWBBB', '12W1B12W3B'],
    ['ABCD', '1A1B1C1D'],
    ['AAAAA', '5A'],
    ['AABBBCCCC', '2A3B4C'],
    ['XYZ', '1X1Y1Z'],
    ['ZZZZZZZZZZ', '10Z'],
    ['BBAAAAB', '2B4A1B'],
    ['MMMNNOOOPP', '3M2N3O2P']
  ])
});

// 15. c-preprocessor-and-macros (3 problems)
addProblem({
  id: 'c-macro-1',
  topicId: 'c-preprocessor-and-macros',
  level: 'advanced',
  title: 'Mathematical Utility Preprocessor Macros',
  difficulty: 'easy',
  problemStatement: 'Implement macros `#define MAX(a, b) (((a) > (b)) ? (a) : (b))` and `#define CLAMP(x, low, high) (((x) < (low)) ? (low) : (((x) > (high)) ? (high) : (x)))`. Given val, low, high, print the clamped value using the macros.',
  inputFormat: 'Three space-separated integers: val, low, high.',
  outputFormat: 'Clamped integer.',
  constraints: ['low <= high', '-10000 <= val, low, high <= 10000'],
  examples: [
    { input: '15 0 10', output: '10' },
    { input: '-5 0 10', output: '0' }
  ],
  testCases: createTC('c-macro-1', [
    ['15 0 10', '10'],
    ['-5 0 10', '0'],
    ['7 0 10', '7'],
    ['100 50 150', '100'],
    ['25 50 150', '50'],
    ['200 50 150', '150'],
    ['-10 -20 -5', '-10'],
    ['-30 -20 -5', '-20'],
    ['0 -20 -5', '-5'],
    ['42 42 42', '42']
  ])
});

addProblem({
  id: 'c-macro-2',
  topicId: 'c-preprocessor-and-macros',
  level: 'advanced',
  title: 'Bit Flag Macros (SET, CLEAR, CHECK)',
  difficulty: 'medium',
  problemStatement: 'Write macros `#define SET_BIT(n, k) ((n) | (1U << (k)))`, `#define CLEAR_BIT(n, k) ((n) & ~(1U << (k)))`, `#define CHECK_BIT(n, k) (((n) >> (k)) & 1U)`. Given integer n, bit position k, and operation op ("SET", "CLEAR", "CHECK"), perform the operation and print the resulting number (for SET/CLEAR) or the bit value 0 or 1 (for CHECK).',
  inputFormat: 'An integer n, bit position k (0-31), and string op.',
  outputFormat: 'Result integer.',
  constraints: ['0 <= n <= 10^9', '0 <= k <= 31'],
  examples: [
    { input: '8 3 CHECK', output: '1' },
    { input: '5 1 SET', output: '7' }
  ],
  testCases: createTC('c-macro-2', [
    ['8 3 CHECK', '1'],
    ['5 1 SET', '7'],
    ['7 1 CLEAR', '5'],
    ['0 0 SET', '1'],
    ['1 0 CLEAR', '0'],
    ['10 0 CHECK', '0'],
    ['10 1 CHECK', '1'],
    ['15 2 CLEAR', '11'],
    ['16 4 CHECK', '1'],
    ['0 5 SET', '32']
  ])
});

addProblem({
  id: 'c-macro-3',
  topicId: 'c-preprocessor-and-macros',
  level: 'advanced',
  title: 'Stringification and Token Pasting Preprocessor Simulation',
  difficulty: 'medium',
  problemStatement: 'In C preprocessor, `#` converts a token to a string, and `##` concatenates two tokens. Simulate a lookup macro table: given prefix (e.g. "CMD") and code (e.g. "START"), output the combined symbol name "CMD_START" and its evaluated status "[SYMBOL: CMD_START REGISTERED]".',
  inputFormat: 'Two space-separated alphanumeric tokens: prefix and suffix.',
  outputFormat: '"[SYMBOL: <prefix>_<suffix> REGISTERED]"',
  constraints: ['Token lengths <= 30'],
  examples: [
    { input: 'CMD START', output: '[SYMBOL: CMD_START REGISTERED]' }
  ],
  testCases: createTC('c-macro-3', [
    ['CMD START', '[SYMBOL: CMD_START REGISTERED]'],
    ['ERR TIMEOUT', '[SYMBOL: ERR_TIMEOUT REGISTERED]'],
    ['LOG DEBUG', '[SYMBOL: LOG_DEBUG REGISTERED]'],
    ['IO READ', '[SYMBOL: IO_READ REGISTERED]'],
    ['NET SOCKET', '[SYMBOL: NET_SOCKET REGISTERED]'],
    ['SYS EXIT', '[SYMBOL: SYS_EXIT REGISTERED]'],
    ['DEV READY', '[SYMBOL: DEV_READY REGISTERED]'],
    ['EVENT TICK', '[SYMBOL: EVENT_TICK REGISTERED]'],
    ['FLAG ACTIVE', '[SYMBOL: FLAG_ACTIVE REGISTERED]'],
    ['MODE KERNEL', '[SYMBOL: MODE_KERNEL REGISTERED]']
  ])
});

// 16. c-function-pointers-callbacks (3 problems)
addProblem({
  id: 'c-fnptr-1',
  topicId: 'c-function-pointers-callbacks',
  level: 'advanced',
  title: 'Array Filter with Function Pointer Predicate',
  difficulty: 'medium',
  problemStatement: 'Implement a function `int filterArray(const int *in, int n, int *out, int (*predicate)(int))` that applies a function pointer predicate to filter array elements. Implement predicates `isEven(int x)` and `isPositive(int x)`. Given filter choice ("EVEN" or "POSITIVE") and n elements, print the filtered elements separated by spaces (or "EMPTY" if none).',
  inputFormat: 'First line filter name ("EVEN" or "POSITIVE"). Second line n. Third line n integers.',
  outputFormat: 'Filtered integers space-separated or "EMPTY".',
  constraints: ['1 <= n <= 1000'],
  examples: [
    { input: 'EVEN\n5\n1 2 3 4 5', output: '2 4' }
  ],
  testCases: createTC('c-fnptr-1', [
    ['EVEN\n5\n1 2 3 4 5', '2 4'],
    ['POSITIVE\n5\n-2 -1 0 1 2', '1 2'],
    ['EVEN\n3\n1 3 5', 'EMPTY'],
    ['POSITIVE\n3\n-5 -4 -3', 'EMPTY'],
    ['EVEN\n4\n2 4 6 8', '2 4 6 8'],
    ['POSITIVE\n4\n10 20 30 40', '10 20 30 40'],
    ['EVEN\n6\n10 15 20 25 30 35', '10 20 30'],
    ['POSITIVE\n5\n-10 5 -20 15 0', '5 15'],
    ['EVEN\n1\n0', '0'],
    ['POSITIVE\n1\n-1', 'EMPTY']
  ])
});

addProblem({
  id: 'c-fnptr-2',
  topicId: 'c-function-pointers-callbacks',
  level: 'advanced',
  title: 'Standard Library qsort with Custom Comparators',
  difficulty: 'medium',
  problemStatement: 'C standard library provides `qsort(void *base, size_t n, size_t size, int (*compar)(const void *, const void *))`. Given sorting mode ("ASC", "DESC", or "ABS" for absolute value ascending), implement the appropriate comparator function pointer and sort the n integers. Print the sorted elements separated by spaces.',
  inputFormat: 'First line mode ("ASC", "DESC", "ABS"). Second line n. Third line n integers.',
  outputFormat: 'Sorted integers separated by space.',
  constraints: ['1 <= n <= 1000'],
  examples: [
    { input: 'DESC\n5\n3 1 4 1 5', output: '5 4 3 1 1' }
  ],
  testCases: createTC('c-fnptr-2', [
    ['DESC\n5\n3 1 4 1 5', '5 4 3 1 1'],
    ['ASC\n5\n10 5 8 1 7', '1 5 7 8 10'],
    ['ABS\n5\n-10 2 -3 7 -1', '-1 2 -3 7 -10'],
    ['ASC\n4\n4 3 2 1', '1 2 3 4'],
    ['DESC\n3\n10 20 30', '30 20 10'],
    ['ABS\n4\n-5 5 -2 2', '-2 2 -5 5'],
    ['ASC\n1\n42', '42'],
    ['DESC\n4\n-1 -2 -3 -4', '-1 -2 -3 -4'],
    ['ABS\n3\n0 -10 5', '0 5 -10'],
    ['ASC\n6\n9 3 7 1 8 2', '1 2 3 7 8 9']
  ])
});

addProblem({
  id: 'c-fnptr-3',
  topicId: 'c-function-pointers-callbacks',
  level: 'advanced',
  title: 'Function Pointer Dispatch Table',
  difficulty: 'medium',
  problemStatement: 'In systems drivers, function pointer tables dispatch operations based on opcodes: `typedef int (*OpFunc)(int, int); OpFunc dispatchTable[4] = { add, sub, mul, div };`. Read opcode (0: add, 1: sub, 2: mul, 3: div) and two integers a and b. Execute the corresponding function from the dispatch table and print the integer result.',
  inputFormat: 'Three space-separated integers: opcode (0-3), a, b.',
  outputFormat: 'Integer result.',
  constraints: ['opcode in {0, 1, 2, 3}', 'b != 0 when opcode == 3'],
  examples: [
    { input: '0 10 20', output: '30' },
    { input: '2 6 7', output: '42' }
  ],
  testCases: createTC('c-fnptr-3', [
    ['0 10 20', '30'],
    ['2 6 7', '42'],
    ['1 50 15', '35'],
    ['3 100 4', '25'],
    ['0 -5 10', '5'],
    ['1 10 20', '-10'],
    ['2 -4 -5', '20'],
    ['3 42 7', '6'],
    ['0 0 0', '0'],
    ['2 12 12', '144']
  ])
});

// 17. c-bitwise-operations-and-masks (4 problems)
addProblem({
  id: 'c-bit-1',
  topicId: 'c-bitwise-operations-and-masks',
  level: 'advanced',
  title: 'Hamming Weight (Count Set Bits)',
  difficulty: 'easy',
  problemStatement: 'Given a non-negative integer n, count the number of set bits (1s) in its binary representation using bitwise operations (`n &= (n - 1)` or shift and mask). Print the total set bits.',
  inputFormat: 'A non-negative integer n.',
  outputFormat: 'Number of set bits as an integer.',
  constraints: ['0 <= n <= 2^31 - 1'],
  examples: [
    { input: '11', output: '3' }
  ],
  testCases: createTC('c-bit-1', [
    ['11', '3'],
    ['0', '0'],
    ['1', '1'],
    ['2', '1'],
    ['7', '3'],
    ['15', '4'],
    ['16', '1'],
    ['127', '7'],
    ['128', '1'],
    ['1023', '10']
  ])
});

addProblem({
  id: 'c-bit-2',
  topicId: 'c-bitwise-operations-and-masks',
  level: 'advanced',
  title: 'Single Non-Duplicate Element using XOR',
  difficulty: 'medium',
  problemStatement: 'Given an array of integers where every element appears twice except for one unique element, find and print the unique element using the bitwise XOR property: `a ^ a = 0` and `a ^ 0 = a`.',
  inputFormat: 'First line integer n. Second line n space-separated integers.',
  outputFormat: 'The unique integer.',
  constraints: ['n is odd', '1 <= n <= 10000'],
  examples: [
    { input: '5\n4 1 2 1 2', output: '4' }
  ],
  testCases: createTC('c-bit-2', [
    ['5\n4 1 2 1 2', '4'],
    ['1\n42', '42'],
    ['3\n2 2 1', '1'],
    ['7\n9 3 5 3 9 7 5', '7'],
    ['5\n10 20 10 30 20', '30'],
    ['3\n-5 10 -5', '10'],
    ['5\n100 100 200 300 200', '300'],
    ['7\n1 2 3 4 3 2 1', '4'],
    ['5\n8 8 7 9 9', '7'],
    ['9\n15 12 15 10 10 12 99 8 8', '99']
  ])
});

addProblem({
  id: 'c-bit-3',
  topicId: 'c-bitwise-operations-and-masks',
  level: 'advanced',
  title: 'Reverse Bits of 32-bit Unsigned Integer',
  difficulty: 'medium',
  problemStatement: 'Given a 32-bit unsigned integer n, reverse its binary bits from bit 0 to bit 31. Print the resulting unsigned integer value.',
  inputFormat: 'A 32-bit unsigned integer n.',
  outputFormat: 'Unsigned integer after bit reversal.',
  constraints: ['0 <= n <= 4294967295'],
  examples: [
    { input: '43261596', output: '964176192' }
  ],
  testCases: createTC('c-bit-3', [
    ['43261596', '964176192'],
    ['0', '0'],
    ['1', '2147483648'],
    ['2147483648', '1'],
    ['3', '3221225472'],
    ['4294967295', '4294967295'],
    ['2', '1073741824'],
    ['1073741824', '2'],
    ['255', '4278190080'],
    ['4278190080', '255']
  ])
});

addProblem({
  id: 'c-bit-4',
  topicId: 'c-bitwise-operations-and-masks',
  level: 'advanced',
  title: 'Power of Two and Next Power of Two',
  difficulty: 'medium',
  problemStatement: 'Using bitwise operations, determine if an integer n > 0 is a power of two using `(n & (n - 1)) == 0`. If it is already a power of two, print "POWER OF 2: <n>". If not, calculate and print the next power of two greater than n: "NEXT POWER OF 2: <next>".',
  inputFormat: 'A positive integer n.',
  outputFormat: '"POWER OF 2: <n>" or "NEXT POWER OF 2: <next>"',
  constraints: ['1 <= n <= 10^9'],
  examples: [
    { input: '16', output: 'POWER OF 2: 16' },
    { input: '17', output: 'NEXT POWER OF 2: 32' }
  ],
  testCases: createTC('c-bit-4', [
    ['16', 'POWER OF 2: 16'],
    ['17', 'NEXT POWER OF 2: 32'],
    ['1', 'POWER OF 2: 1'],
    ['2', 'POWER OF 2: 2'],
    ['3', 'NEXT POWER OF 2: 4'],
    ['4', 'POWER OF 2: 4'],
    ['5', 'NEXT POWER OF 2: 8'],
    ['64', 'POWER OF 2: 64'],
    ['100', 'NEXT POWER OF 2: 128'],
    ['1024', 'POWER OF 2: 1024']
  ])
});

// 18. c-command-line-arguments (3 problems)
addProblem({
  id: 'c-args-1',
  topicId: 'c-command-line-arguments',
  level: 'advanced',
  title: 'Simulate Command-Line Flag Parser',
  difficulty: 'medium',
  problemStatement: 'In C `int main(int argc, char *argv[])`, arguments pass command-line flags. Simulate parsing argument tokens: given a sequence of tokens, if "-v" is present print "Verbose: true", otherwise "Verbose: false". If "--port <N>" is present, print "Port: <N>", otherwise "Port: default".',
  inputFormat: 'First line integer argc. Next argc space-separated tokens.',
  outputFormat: 'Two lines: "Verbose: <bool>" and "Port: <val>"',
  constraints: ['1 <= argc <= 20'],
  examples: [
    { input: '3\n-v --port 8080', output: 'Verbose: true\nPort: 8080' }
  ],
  testCases: createTC('c-args-1', [
    ['3\n-v --port 8080', 'Verbose: true\nPort: 8080'],
    ['1\napp', 'Verbose: false\nPort: default'],
    ['2\napp -v', 'Verbose: true\nPort: default'],
    ['3\napp --port 3000', 'Verbose: false\nPort: 3000'],
    ['4\napp -v --port 5000', 'Verbose: true\nPort: 5000'],
    ['2\napp --help', 'Verbose: false\nPort: default'],
    ['4\napp --port 9000 -v', 'Verbose: true\nPort: 9000'],
    ['3\nserver -v worker', 'Verbose: true\nPort: default'],
    ['3\nservice --port 80', 'Verbose: false\nPort: 80'],
    ['5\nmain -v extra --port 443', 'Verbose: true\nPort: 443']
  ])
});

addProblem({
  id: 'c-args-2',
  topicId: 'c-command-line-arguments',
  level: 'advanced',
  title: 'CLI Mathematical Expression Evaluator',
  difficulty: 'medium',
  problemStatement: 'CLI utilities often parse mathematical operands passed as arguments: `calc <num1> <op> <num2>`. Given 3 argument tokens: integer num1, operator (+, -, x for multiplication), and integer num2, evaluate and print the result.',
  inputFormat: 'Three space-separated tokens: num1 op num2.',
  outputFormat: 'Single integer result.',
  constraints: ['-10000 <= num1, num2 <= 10000'],
  examples: [
    { input: '12 + 8', output: '20' },
    { input: '6 x 7', output: '42' }
  ],
  testCases: createTC('c-args-2', [
    ['12 + 8', '20'],
    ['6 x 7', '42'],
    ['100 - 35', '65'],
    ['-5 + 15', '10'],
    ['0 x 100', '0'],
    ['-4 x -5', '20'],
    ['50 - 60', '-10'],
    ['25 + 25', '50'],
    ['9 x 9', '81'],
    ['-10 - 20', '-30']
  ])
});

addProblem({
  id: 'c-args-3',
  topicId: 'c-command-line-arguments',
  level: 'advanced',
  title: 'Environment Variable Key-Value Lookup Parser',
  difficulty: 'medium',
  problemStatement: 'C programs inspect environment argument strings formatted as "KEY=VALUE". Given N key-value pair strings and a target query key, find and print the corresponding value. If the key is not found, print "NOT_FOUND".',
  inputFormat: 'First line integer N. Next N lines each contain "KEY=VALUE". Final line contains targetKey.',
  outputFormat: 'Target value or "NOT_FOUND".',
  constraints: ['1 <= N <= 50', 'Keys and values do not contain spaces or extra = signs'],
  examples: [
    { input: '3\nPATH=/usr/bin\nUSER=admin\nPORT=8080\nUSER', output: 'admin' }
  ],
  testCases: createTC('c-args-3', [
    ['3\nPATH=/usr/bin\nUSER=admin\nPORT=8080\nUSER', 'admin'],
    ['2\nENV=production\nDEBUG=false\nDEBUG', 'false'],
    ['2\nHOST=localhost\nPORT=3000\nDATABASE', 'NOT_FOUND'],
    ['1\nTOKEN=secret123\nTOKEN', 'secret123'],
    ['3\nA=1\nB=2\nC=3\nB', '2'],
    ['4\nLANG=en\nTZ=UTC\nSHELL=/bin/bash\nHOME=/root\nSHELL', '/bin/bash'],
    ['2\nFOO=bar\nBAZ=qux\nFOO', 'bar'],
    ['3\nK1=V1\nK2=V2\nK3=V3\nK4', 'NOT_FOUND'],
    ['1\nSINGLE=VAL\nOTHER', 'NOT_FOUND'],
    ['4\nW=10\nX=20\nY=30\nZ=40\nZ', '40']
  ])
});

// Output code file
console.log(`Finished creating all C problems! Total: ${problems.length}`);

const code = `/**
 * Canonical C Coding Practice Problems Bank
 * Auto-generated with 10 test cases per problem (3 public, 7 hidden).
 */

export const cProblems = ${JSON.stringify(problems, null, 2)};

export default cProblems;
`;

fs.writeFileSync(outputPath, code, 'utf-8');
console.log(`Successfully saved to ${outputPath}`);
