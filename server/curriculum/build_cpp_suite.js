import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outputPath = path.join(__dirname, 'practice', 'cppProblems.js');

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
    languageId: 'cpp',
    language: 'cpp',
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
      cpp: starterCode || `#include <iostream>\n\nusing namespace std;\n\nint main() {\n    // Write your C++ solution here\n    return 0;\n}\n`,
      c: `#include <stdio.h>\n\nint main() {\n    // Write your C solution here\n    return 0;\n}\n`,
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

// 1. cpp-what-is-cpp (2 problems)
addProblem({
  id: 'cpp-intro-1',
  topicId: 'cpp-what-is-cpp',
  level: 'beginner',
  title: 'C++ Modern Standard Feature Banner',
  difficulty: 'easy',
  problemStatement: 'Modern C++ has evolved across multiple ISO standards: C++11, C++14, C++17, C++20, and C++23. Read an ISO standard version number (11, 14, 17, 20, or 23) and output its landmark feature: \n11 -> "C++11: Auto, Lambdas, Smart Pointers"\n14 -> "C++14: Generic Lambdas, make_unique"\n17 -> "C++17: Structured Bindings, std::optional, std::filesystem"\n20 -> "C++20: Concepts, Ranges, Coroutines, Modules"\n23 -> "C++23: std::expected, Deducing this, Monadic operations"\nIf unrecognized, print "Unknown Standard".',
  inputFormat: 'An integer standard version (e.g. 11, 14, 17, 20, 23).',
  outputFormat: 'Landmark feature string.',
  constraints: ['Standard is an integer'],
  examples: [
    { input: '20', output: 'C++20: Concepts, Ranges, Coroutines, Modules' },
    { input: '98', output: 'Unknown Standard' }
  ],
  testCases: createTC('cpp-intro-1', [
    ['20', 'C++20: Concepts, Ranges, Coroutines, Modules'],
    ['11', 'C++11: Auto, Lambdas, Smart Pointers'],
    ['17', 'C++17: Structured Bindings, std::optional, std::filesystem'],
    ['14', 'C++14: Generic Lambdas, make_unique'],
    ['23', 'C++23: std::expected, Deducing this, Monadic operations'],
    ['98', 'Unknown Standard'],
    ['03', 'Unknown Standard'],
    ['26', 'Unknown Standard'],
    ['11', 'C++11: Auto, Lambdas, Smart Pointers'],
    ['20', 'C++20: Concepts, Ranges, Coroutines, Modules']
  ])
});

addProblem({
  id: 'cpp-intro-2',
  topicId: 'cpp-what-is-cpp',
  level: 'beginner',
  title: 'Fast I/O Stream Synchronization Benchmark',
  difficulty: 'easy',
  problemStatement: 'In modern competitive and high-performance C++, disabling synchronization between C and C++ standard streams (`std::ios_base::sync_with_stdio(false); std::cin.tie(NULL);`) dramatically accelerates stream reads. Read an integer N followed by N integers. Compute and print their sum as a 64-bit long long.',
  inputFormat: 'First line integer N. Next line N space-separated integers.',
  outputFormat: 'Total sum as a long long integer.',
  constraints: ['1 <= N <= 100000', '-10^9 <= each integer <= 10^9'],
  examples: [
    { input: '5\n10 20 30 40 50', output: '150' }
  ],
  testCases: createTC('cpp-intro-2', [
    ['5\n10 20 30 40 50', '150'],
    ['1\n1000000000', '1000000000'],
    ['3\n-50 100 -50', '0'],
    ['4\n1 2 3 4', '10'],
    ['6\n-10 -20 -30 -40 -50 -60', '-210'],
    ['5\n1000000000 1000000000 1000000000 1000000000 1000000000', '5000000000'],
    ['2\n-999999999 999999999', '0'],
    ['4\n500 500 500 500', '2000'],
    ['7\n1 1 1 1 1 1 1', '7'],
    ['3\n0 0 0', '0']
  ])
});

// 2. cpp-streams-and-namespaces (3 problems)
addProblem({
  id: 'cpp-stream-1',
  topicId: 'cpp-streams-and-namespaces',
  level: 'beginner',
  title: 'Stream Precision Formatter with std::setprecision',
  difficulty: 'easy',
  problemStatement: 'Using `<iomanip>`, C++ controls floating-point stream formatting via `std::fixed` and `std::setprecision(k)`. Given a floating-point number val and an integer precision k (0 <= k <= 8), format and print val rounded to exactly k decimal places.',
  inputFormat: 'A floating point number val and an integer k separated by space.',
  outputFormat: 'val formatted to k decimal places.',
  constraints: ['-10000.0 <= val <= 10000.0', '0 <= k <= 8'],
  examples: [
    { input: '3.14159265 4', output: '3.1416' },
    { input: '42.0 2', output: '42.00' }
  ],
  testCases: createTC('cpp-stream-1', [
    ['3.14159265 4', '3.1416'],
    ['42.0 2', '42.00'],
    ['2.71828182 6', '2.718282'],
    ['100.5 0', '101'],
    ['0.12345678 5', '0.12346'],
    ['-15.897 1', '-15.9'],
    ['7.0 3', '7.000'],
    ['9.9999 2', '10.00'],
    ['123.456789 8', '123.45678900'],
    ['0.00001 3', '0.000']
  ])
});

addProblem({
  id: 'cpp-stream-2',
  topicId: 'cpp-streams-and-namespaces',
  level: 'beginner',
  title: 'Custom Namespace Scoping Calculator',
  difficulty: 'easy',
  problemStatement: 'Define two distinct namespaces: `namespace Geometry { double circleArea(double r); }` (use pi = 3.14159) and `namespace Algebra { double quadraticRoot(double a, double b, double c); }` (returns the positive discriminant root (-b + sqrt(b^2 - 4ac)) / (2a)). Read radius r and coefficients a, b, c. Print "Circle Area: <area rounded to 2 decimals>" on line 1 and "Root: <root rounded to 2 decimals>" on line 2.',
  inputFormat: 'Four doubles: r a b c separated by space.',
  outputFormat: 'Two lines: "Circle Area: ..." and "Root: ..."',
  constraints: ['r > 0', 'a != 0', 'b^2 - 4ac >= 0'],
  examples: [
    { input: '5.0 1.0 -5.0 6.0', output: 'Circle Area: 78.54\nRoot: 3.00' }
  ],
  testCases: createTC('cpp-stream-2', [
    ['5.0 1.0 -5.0 6.0', 'Circle Area: 78.54\nRoot: 3.00'],
    ['1.0 1.0 0.0 -4.0', 'Circle Area: 3.14\nRoot: 2.00'],
    ['10.0 2.0 -4.0 -6.0', 'Circle Area: 314.16\nRoot: 3.00'],
    ['2.5 1.0 -2.0 1.0', 'Circle Area: 19.63\nRoot: 1.00'],
    ['3.0 1.0 3.0 2.0', 'Circle Area: 28.27\nRoot: -1.00'],
    ['4.0 1.0 -7.0 12.0', 'Circle Area: 50.27\nRoot: 4.00'],
    ['7.0 1.0 -10.0 25.0', 'Circle Area: 153.94\nRoot: 5.00'],
    ['0.5 1.0 -1.0 -6.0', 'Circle Area: 0.79\nRoot: 3.00'],
    ['6.0 1.0 -6.0 8.0', 'Circle Area: 113.10\nRoot: 4.00'],
    ['2.0 1.0 -8.0 15.0', 'Circle Area: 12.57\nRoot: 5.00']
  ])
});

addProblem({
  id: 'cpp-stream-3',
  topicId: 'cpp-streams-and-namespaces',
  level: 'beginner',
  title: 'Stream Base Representation Formatter (Dec, Hex, Oct)',
  difficulty: 'medium',
  problemStatement: 'C++ stream manipulators `std::hex`, `std::oct`, and `std::dec` modify base output representations. Read an unsigned integer N and print it formatted across three fields: "DEC: <dec> | HEX: 0x<hex in uppercase> | OCT: 0<oct>".',
  inputFormat: 'An unsigned integer N.',
  outputFormat: 'Format: "DEC: <dec> | HEX: 0x<hex> | OCT: 0<oct>"',
  constraints: ['0 <= N <= 10^8'],
  examples: [
    { input: '255', output: 'DEC: 255 | HEX: 0xFF | OCT: 0377' }
  ],
  testCases: createTC('cpp-stream-3', [
    ['255', 'DEC: 255 | HEX: 0xFF | OCT: 0377'],
    ['0', 'DEC: 0 | HEX: 0x0 | OCT: 00'],
    ['16', 'DEC: 16 | HEX: 0x10 | OCT: 020'],
    ['8', 'DEC: 8 | HEX: 0x8 | OCT: 010'],
    ['1024', 'DEC: 1024 | HEX: 0x400 | OCT: 02000'],
    ['65535', 'DEC: 65535 | HEX: 0xFFFF | OCT: 0177777'],
    ['42', 'DEC: 42 | HEX: 0x2A | OCT: 052'],
    ['100', 'DEC: 100 | HEX: 0x64 | OCT: 0144'],
    ['500', 'DEC: 500 | HEX: 0x1F4 | OCT: 0764'],
    ['12345', 'DEC: 12345 | HEX: 0x3039 | OCT: 030071']
  ])
});

// 3. cpp-references-vs-pointers (3 problems)
addProblem({
  id: 'cpp-ref-1',
  topicId: 'cpp-references-vs-pointers',
  level: 'beginner',
  title: 'Pass-by-Reference In-Place Array Scaler',
  difficulty: 'easy',
  problemStatement: 'In C++, references (`Type &ref`) act as aliases for the original variable without pointer dereference syntax. Implement a function `void scaleElement(int &elem, int factor)` that multiplies elem in place. Given an array of N integers and factor k, scale each element using pass-by-reference and print the resulting array.',
  inputFormat: 'First line N and factor k. Second line N integers.',
  outputFormat: 'Scaled array separated by spaces.',
  constraints: ['1 <= N <= 1000', '-100 <= k <= 100'],
  examples: [
    { input: '4 3\n1 2 3 4', output: '3 6 9 12' }
  ],
  testCases: createTC('cpp-ref-1', [
    ['4 3\n1 2 3 4', '3 6 9 12'],
    ['3 -2\n5 10 15', '-10 -20 -30'],
    ['1 10\n7', '70'],
    ['5 0\n1 2 3 4 5', '0 0 0 0 0'],
    ['4 1\n10 20 30 40', '10 20 30 40'],
    ['3 5\n-1 -2 -3', '-5 -10 -15'],
    ['6 2\n2 4 6 8 10 12', '4 8 12 16 20 24'],
    ['2 100\n3 4', '300 400'],
    ['4 -1\n7 -8 9 -10', '-7 8 -9 10'],
    ['5 4\n0 1 2 3 4', '0 4 8 12 16']
  ])
});

addProblem({
  id: 'cpp-ref-2',
  topicId: 'cpp-references-vs-pointers',
  level: 'beginner',
  title: 'Const Reference Performance Inspector',
  difficulty: 'easy',
  problemStatement: 'Passing large objects by `const &` prevents expensive deep copies while safeguarding immutability. Implement a function `void computeStats(const std::vector<int> &vec, int &outMin, int &outMax, double &outAvg)` that inspects the vector. Given N integers, print "Min: <min> | Max: <max> | Avg: <avg rounded to 2 decimals>".',
  inputFormat: 'First line N. Second line N integers.',
  outputFormat: '"Min: <min> | Max: <max> | Avg: <avg>"',
  constraints: ['1 <= N <= 1000'],
  examples: [
    { input: '5\n10 20 30 40 50', output: 'Min: 10 | Max: 50 | Avg: 30.00' }
  ],
  testCases: createTC('cpp-ref-2', [
    ['5\n10 20 30 40 50', 'Min: 10 | Max: 50 | Avg: 30.00'],
    ['1\n42', 'Min: 42 | Max: 42 | Avg: 42.00'],
    ['4\n-10 0 10 20', 'Min: -10 | Max: 20 | Avg: 5.00'],
    ['3\n7 7 7', 'Min: 7 | Max: 7 | Avg: 7.00'],
    ['6\n1 2 3 4 5 6', 'Min: 1 | Max: 6 | Avg: 3.50'],
    ['5\n100 200 50 300 150', 'Min: 50 | Max: 300 | Avg: 160.00'],
    ['2\n-50 50', 'Min: -50 | Max: 50 | Avg: 0.00'],
    ['4\n2 3 5 7', 'Min: 2 | Max: 7 | Avg: 4.25'],
    ['5\n-5 -4 -3 -2 -1', 'Min: -5 | Max: -1 | Avg: -3.00'],
    ['3\n15 25 35', 'Min: 15 | Max: 35 | Avg: 25.00']
  ])
});

addProblem({
  id: 'cpp-ref-3',
  topicId: 'cpp-references-vs-pointers',
  level: 'beginner',
  title: 'Reference Return Lvalue Indexer',
  difficulty: 'medium',
  problemStatement: 'In C++, functions returning a reference (`int &at(int idx)`) can appear on the left side of an assignment (`at(2) = 99;`). Given an array of N integers and Q update queries "idx newVal", use a reference returning helper to update the array. Print the final array.',
  inputFormat: 'First line N. Second line N integers. Third line Q. Next Q lines contain idx and newVal.',
  outputFormat: 'Updated array space-separated.',
  constraints: ['1 <= N <= 100', '0 <= idx < N', '1 <= Q <= 100'],
  examples: [
    { input: '4\n10 20 30 40\n2\n1 99\n3 55', output: '10 99 30 55' }
  ],
  testCases: createTC('cpp-ref-3', [
    ['4\n10 20 30 40\n2\n1 99\n3 55', '10 99 30 55'],
    ['3\n1 2 3\n1\n0 10', '10 2 3'],
    ['5\n0 0 0 0 0\n3\n0 5\n2 7\n4 9', '5 0 7 0 9'],
    ['2\n100 200\n1\n1 500', '100 500'],
    ['4\n5 5 5 5\n2\n0 1\n1 2', '1 2 5 5'],
    ['1\n42\n1\n0 99', '99'],
    ['3\n10 20 30\n3\n0 1\n1 2\n2 3', '1 2 3'],
    ['5\n1 2 3 4 5\n1\n2 100', '1 2 100 4 5'],
    ['4\n-1 -2 -3 -4\n2\n3 0\n0 0', '0 -2 -3 0'],
    ['6\n10 20 30 40 50 60\n2\n5 999\n4 888', '10 20 30 40 888 999']
  ])
});

// 4. cpp-auto-and-range-loops (3 problems)
addProblem({
  id: 'cpp-auto-1',
  topicId: 'cpp-auto-and-range-loops',
  level: 'beginner',
  title: 'Type Deduction with auto and Structured Binding',
  difficulty: 'easy',
  problemStatement: 'In modern C++17, structured binding `auto [key, val]` unpacks pairs and tuples cleanly. Read N pairs of strings and integers (name and score). Store them in `std::vector<std::pair<std::string, int>>`. Use a range-based loop with `auto &[name, score]` to increase each score by 5. Print the updated records in format: "<name>: <score>".',
  inputFormat: 'First line N. Next N lines each contain name and score.',
  outputFormat: 'N lines formatted: "<name>: <score>"',
  constraints: ['1 <= N <= 100'],
  examples: [
    { input: '2\nAlice 90\nBob 85', output: 'Alice: 95\nBob: 90' }
  ],
  testCases: createTC('cpp-auto-1', [
    ['2\nAlice 90\nBob 85', 'Alice: 95\nBob: 90'],
    ['1\nSolo 100', 'Solo: 105'],
    ['3\nA 50\nB 60\nC 70', 'A: 55\nB: 65\nC: 75'],
    ['2\nJohn 0\nJane 5', 'John: 5\nJane: 10'],
    ['4\nW 10\nX 20\nY 30\nZ 40', 'W: 15\nX: 25\nY: 35\nZ: 45'],
    ['1\nTest 42', 'Test: 47'],
    ['3\nAlpha 80\nBeta 88\nGamma 92', 'Alpha: 85\nBeta: 93\nGamma: 97'],
    ['2\nDev 45\nOps 55', 'Dev: 50\nOps: 60'],
    ['1\nScore 95', 'Score: 100'],
    ['3\nFirst 10\nSecond 20\nThird 30', 'First: 15\nSecond: 25\nThird: 35']
  ])
});

addProblem({
  id: 'cpp-auto-2',
  topicId: 'cpp-auto-and-range-loops',
  level: 'beginner',
  title: 'Range-Based Reference In-Place Filter',
  difficulty: 'easy',
  problemStatement: 'Using `for (auto &x : vec)`, modify elements of an array in place: if x is odd, double it (`x *= 2`); if x is even, halve it (`x /= 2`). Print the transformed array separated by spaces.',
  inputFormat: 'First line integer N. Second line N integers.',
  outputFormat: 'Transformed array separated by space.',
  constraints: ['1 <= N <= 1000'],
  examples: [
    { input: '4\n3 4 5 6', output: '6 2 10 3' }
  ],
  testCases: createTC('cpp-auto-2', [
    ['4\n3 4 5 6', '6 2 10 3'],
    ['1\n7', '14'],
    ['1\n8', '4'],
    ['5\n1 2 3 4 5', '2 1 6 2 10'],
    ['4\n10 20 30 40', '5 10 15 20'],
    ['3\n9 9 9', '18 18 18'],
    ['6\n2 3 4 5 6 7', '1 6 2 10 3 14'],
    ['2\n100 101', '50 202'],
    ['5\n11 12 13 14 15', '22 6 26 7 30'],
    ['4\n0 1 2 3', '0 2 1 6']
  ])
});

addProblem({
  id: 'cpp-auto-3',
  topicId: 'cpp-auto-and-range-loops',
  level: 'beginner',
  title: 'Nested Range Loops over 2D Vector Matrix',
  difficulty: 'medium',
  problemStatement: 'Read dimensions R and C, followed by an R x C integer grid. Use nested range-based loops with `const auto &row : matrix` and `const auto &val : row` to compute the total sum and the maximum value in the grid. Print: "Sum: <sum> | Max: <max>".',
  inputFormat: 'First line R and C. Next R lines each have C integers.',
  outputFormat: '"Sum: <sum> | Max: <max>"',
  constraints: ['1 <= R, C <= 100'],
  examples: [
    { input: '2 3\n1 2 3\n4 5 6', output: 'Sum: 21 | Max: 6' }
  ],
  testCases: createTC('cpp-auto-3', [
    ['2 3\n1 2 3\n4 5 6', 'Sum: 21 | Max: 6'],
    ['1 1\n42', 'Sum: 42 | Max: 42'],
    ['3 2\n10 20\n30 40\n50 60', 'Sum: 210 | Max: 60'],
    ['2 2\n-5 -10\n-20 -1', 'Sum: -36 | Max: -1'],
    ['3 3\n1 0 0\n0 1 0\n0 0 1', 'Sum: 3 | Max: 1'],
    ['2 4\n5 5 5 5\n10 10 10 10', 'Sum: 60 | Max: 10'],
    ['1 4\n10 20 30 40', 'Sum: 100 | Max: 40'],
    ['4 1\n1\n2\n3\n4', 'Sum: 10 | Max: 4'],
    ['2 2\n100 -50\n-25 75', 'Sum: 100 | Max: 100'],
    ['3 2\n0 0\n0 0\n0 0', 'Sum: 0 | Max: 0']
  ])
});

// 5. cpp-std-string (4 problems)
addProblem({
  id: 'cpp-str-1',
  topicId: 'cpp-std-string',
  level: 'beginner',
  title: 'std::string In-Place Reversal and Case Flip',
  difficulty: 'easy',
  problemStatement: 'Using `std::string`, read a string word. Reverse the string, and toggle the case of each character (uppercase becomes lowercase, lowercase becomes uppercase). Print the resulting string.',
  inputFormat: 'A single word string.',
  outputFormat: 'Reversed string with toggled case.',
  constraints: ['Length <= 1000', 'Contains only English letters'],
  examples: [
    { input: 'Hello', output: 'OLLEh' },
    { input: 'Cpp', output: 'PPc' }
  ],
  testCases: createTC('cpp-str-1', [
    ['Hello', 'OLLEh'],
    ['Cpp', 'PPc'],
    ['World', 'DLROw'],
    ['a', 'A'],
    ['Z', 'z'],
    ['abCD', 'dcBA'],
    ['ModernCpp', 'PPcNERDOm'],
    ['AbCdEf', 'FeDcBa'],
    ['STACK', 'kcats'],
    ['heap', 'PAEH']
  ])
});

addProblem({
  id: 'cpp-str-2',
  topicId: 'cpp-std-string',
  level: 'beginner',
  title: 'Sub-string Search and Replace with std::string::find',
  difficulty: 'medium',
  problemStatement: 'Read a line of text, a target sub-string, and a replacement sub-string. Using `std::string::find` and `std::string::replace`, replace every non-overlapping occurrence of target with replacement in the text. Print the modified text.',
  inputFormat: 'Three lines: original text, target, replacement.',
  outputFormat: 'Modified text line.',
  constraints: ['Lengths <= 500'],
  examples: [
    { input: 'hello world world\nworld\nthere', output: 'hello there there' }
  ],
  testCases: createTC('cpp-str-2', [
    ['hello world world\nworld\nthere', 'hello there there'],
    ['banana\na\no', 'bonono'],
    ['the cat sat on the mat\nthe\na', 'a cat sat on a mat'],
    ['foo bar baz\nqux\nxyz', 'foo bar baz'],
    ['apple apple apple\napple\norange', 'orange orange orange'],
    ['one two three\ntwo\n2', 'one 2 three'],
    ['mississippi\nss\npp', 'mippippippi'],
    ['a b c d e\n \n-', 'a-b-c-d-e'],
    ['test test test\ntest\npassed', 'passed passed passed'],
    ['123 123 123\n123\n456', '456 456 456']
  ])
});

addProblem({
  id: 'cpp-str-3',
  topicId: 'cpp-std-string',
  level: 'beginner',
  title: 'String Tokenizer via std::stringstream',
  difficulty: 'medium',
  problemStatement: 'In modern C++, `std::stringstream` provides flexible token parsing. Given a space-separated sentence of words, extract each word into a `std::vector<std::string>`, sort the words lexicographically, and print them separated by space.',
  inputFormat: 'A sentence line of space-separated words.',
  outputFormat: 'Sorted words space-separated.',
  constraints: ['Sentence length <= 1000'],
  examples: [
    { input: 'the quick brown fox', output: 'brown fox quick the' }
  ],
  testCases: createTC('cpp-str-3', [
    ['the quick brown fox', 'brown fox quick the'],
    ['c cpp java python rust', 'c cpp java python rust'],
    ['zebra apple mango banana cherry', 'apple banana cherry mango zebra'],
    ['single', 'single'],
    ['two one', 'one two'],
    ['delta alpha gamma beta', 'alpha beta delta gamma'],
    ['z y x w v u', 'u v w x y z'],
    ['dog cat bird fish ant', 'ant bird cat dog fish'],
    ['north south east west', 'east north south west'],
    ['red green blue yellow', 'blue green red yellow']
  ])
});

addProblem({
  id: 'cpp-str-4',
  topicId: 'cpp-std-string',
  level: 'beginner',
  title: 'Valid Anagram Verifier with std::sort',
  difficulty: 'easy',
  problemStatement: 'Two strings are anagrams if sorting their characters results in identical strings. Given two single-word strings s1 and s2, determine if they are valid anagrams. Print "true" if they are, else "false".',
  inputFormat: 'Two space-separated strings s1 and s2.',
  outputFormat: '"true" or "false"',
  constraints: ['Lengths <= 1000'],
  examples: [
    { input: 'anagram nagaram', output: 'true' },
    { input: 'rat car', output: 'false' }
  ],
  testCases: createTC('cpp-str-4', [
    ['anagram nagaram', 'true'],
    ['rat car', 'false'],
    ['listen silent', 'true'],
    ['triangle integral', 'true'],
    ['apple pale', 'false'],
    ['a a', 'true'],
    ['ab ba', 'true'],
    ['abc abcd', 'false'],
    ['dormitory dirtyroom', 'true'],
    ['hello olleh', 'true']
  ])
});

// ============================================================================
// INTERMEDIATE
// ============================================================================

// 6. cpp-classes-constructors-destructors (3 problems)
addProblem({
  id: 'cpp-class-1',
  topicId: 'cpp-classes-constructors-destructors',
  level: 'intermediate',
  title: 'RAII Bank Account with Member Initializer List',
  difficulty: 'medium',
  problemStatement: 'Define a class `BankAccount` with private members `std::string owner` and `double balance`. Use a member initializer list in constructor `BankAccount(const std::string &owner, double initBalance) : owner(owner), balance(initBalance) {}`. Implement methods `void deposit(double amt)`, `bool withdraw(double amt)`, and `void printSummary() const` which prints "<owner>: $<balance rounded to 2 decimals>". Given initial balance and a series of transactions (+amt for deposit, -amt for withdraw), apply them and print final summary.',
  inputFormat: 'First line owner and initial balance. Second line N transactions. Next N values.',
  outputFormat: '"<owner>: $<balance>"',
  constraints: ['balance >= 0', 'transactions <= 50'],
  examples: [
    { input: 'Alice 100.0\n3\n50.0 -30.0 20.0', output: 'Alice: $140.00' }
  ],
  testCases: createTC('cpp-class-1', [
    ['Alice 100.0\n3\n50.0 -30.0 20.0', 'Alice: $140.00'],
    ['Bob 50.0\n1\n-100.0', 'Bob: $50.00'],
    ['Charlie 0.0\n2\n500.0 -250.0', 'Charlie: $250.00'],
    ['David 200.0\n0', 'David: $200.00'],
    ['Eve 1000.0\n4\n-100.0 -200.0 -300.0 -400.0', 'Eve: $0.00'],
    ['Frank 50.0\n3\n10.0 10.0 10.0', 'Frank: $80.00'],
    ['Grace 10.0\n2\n-15.0 5.0', 'Grace: $15.00'],
    ['Heidi 300.0\n3\n-50.0 150.0 -100.0', 'Heidi: $300.00'],
    ['Ivan 75.5\n1\n24.5', 'Ivan: $100.00'],
    ['Judy 500.0\n2\n-600.0 100.0', 'Judy: $600.00']
  ])
});

addProblem({
  id: 'cpp-class-2',
  topicId: 'cpp-classes-constructors-destructors',
  level: 'intermediate',
  title: 'RAII Dynamic Buffer Wrapper Lifecycle',
  difficulty: 'medium',
  problemStatement: 'Implement an RAII class `SimpleBuffer` that allocates dynamic memory in its constructor `SimpleBuffer(int size)` and deallocates it in its destructor `~SimpleBuffer()`. When allocated, print "[ALLOCATED <size>]" and when destroyed, print "[DEALLOCATED]". Read N sizes, create and destroy a buffer for each size in separate scoped blocks, and print lifecycle output.',
  inputFormat: 'First line N. Next line N integers representing sizes.',
  outputFormat: 'Lifecycle lines.',
  constraints: ['1 <= N <= 10'],
  examples: [
    { input: '2\n10 20', output: '[ALLOCATED 10]\n[DEALLOCATED]\n[ALLOCATED 20]\n[DEALLOCATED]' }
  ],
  testCases: createTC('cpp-class-2', [
    ['2\n10 20', '[ALLOCATED 10]\n[DEALLOCATED]\n[ALLOCATED 20]\n[DEALLOCATED]'],
    ['1\n100', '[ALLOCATED 100]\n[DEALLOCATED]'],
    ['3\n5 15 25', '[ALLOCATED 5]\n[DEALLOCATED]\n[ALLOCATED 15]\n[DEALLOCATED]\n[ALLOCATED 25]\n[DEALLOCATED]'],
    ['4\n1 2 3 4', '[ALLOCATED 1]\n[DEALLOCATED]\n[ALLOCATED 2]\n[DEALLOCATED]\n[ALLOCATED 3]\n[DEALLOCATED]\n[ALLOCATED 4]\n[DEALLOCATED]'],
    ['2\n50 50', '[ALLOCATED 50]\n[DEALLOCATED]\n[ALLOCATED 50]\n[DEALLOCATED]'],
    ['1\n1024', '[ALLOCATED 1024]\n[DEALLOCATED]'],
    ['3\n8 16 32', '[ALLOCATED 8]\n[DEALLOCATED]\n[ALLOCATED 16]\n[DEALLOCATED]\n[ALLOCATED 32]\n[DEALLOCATED]'],
    ['2\n64 128', '[ALLOCATED 64]\n[DEALLOCATED]\n[ALLOCATED 128]\n[DEALLOCATED]'],
    ['1\n1', '[ALLOCATED 1]\n[DEALLOCATED]'],
    ['3\n100 200 300', '[ALLOCATED 100]\n[DEALLOCATED]\n[ALLOCATED 200]\n[DEALLOCATED]\n[ALLOCATED 300]\n[DEALLOCATED]']
  ])
});

addProblem({
  id: 'cpp-class-3',
  topicId: 'cpp-classes-constructors-destructors',
  level: 'intermediate',
  title: 'Operator Overloading on Vector2D',
  difficulty: 'medium',
  problemStatement: 'Implement a class `Vector2D` with members `int x, y`. Overload `operator+`, `operator-`, and scalar multiplication `operator*(int scalar)`. Given two vectors v1 and v2 and scalar k, compute v1 + v2 and (v1 - v2) * k. Print "Sum: (<x>, <y>)" and "ScaledDiff: (<x>, <y>)".',
  inputFormat: 'Five integers: x1 y1 x2 y2 k.',
  outputFormat: 'Two lines: "Sum: (<x>, <y>)"\n"ScaledDiff: (<x>, <y>)"',
  constraints: ['-1000 <= coordinates, k <= 1000'],
  examples: [
    { input: '3 4 1 2 2', output: 'Sum: (4, 6)\nScaledDiff: (4, 4)' }
  ],
  testCases: createTC('cpp-class-3', [
    ['3 4 1 2 2', 'Sum: (4, 6)\nScaledDiff: (4, 4)'],
    ['0 0 5 5 3', 'Sum: (5, 5)\nScaledDiff: (-15, -15)'],
    ['10 -5 -2 8 1', 'Sum: (8, 3)\nScaledDiff: (12, -13)'],
    ['1 1 1 1 5', 'Sum: (2, 2)\nScaledDiff: (0, 0)'],
    ['-4 -6 2 3 -2', 'Sum: (-2, -3)\nScaledDiff: (12, 18)'],
    ['7 8 0 0 10', 'Sum: (7, 8)\nScaledDiff: (70, 80)'],
    ['5 10 5 10 0', 'Sum: (10, 20)\nScaledDiff: (0, 0)'],
    ['2 4 6 8 -1', 'Sum: (8, 12)\nScaledDiff: (4, 4)'],
    ['100 200 50 100 2', 'Sum: (150, 300)\nScaledDiff: (100, 200)'],
    ['1 -1 -1 1 4', 'Sum: (0, 0)\nScaledDiff: (8, -8)']
  ])
});

// 7. cpp-inheritance-and-virtual-functions (3 problems)
addProblem({
  id: 'cpp-poly-1',
  topicId: 'cpp-inheritance-and-virtual-functions',
  level: 'intermediate',
  title: 'Polymorphic Shape Area Calculator',
  difficulty: 'medium',
  problemStatement: 'Define an abstract base class `Shape` with pure virtual function `virtual double area() const = 0;` and virtual destructor. Derive `Circle(double r)` (area = 3.14159 * r * r) and `Rectangle(double w, double h)` (area = w * h). Read type ("CIRCLE" or "RECTANGLE") and dimensions, store in a `Shape*` pointer, call area() polymorphically, and print "Area: <area rounded to 2 decimals>".',
  inputFormat: 'Type string followed by dimensions (radius for circle; width and height for rectangle).',
  outputFormat: '"Area: <area>"',
  constraints: ['Dimensions > 0'],
  examples: [
    { input: 'CIRCLE 5.0', output: 'Area: 78.54' },
    { input: 'RECTANGLE 4.0 6.0', output: 'Area: 24.00' }
  ],
  testCases: createTC('cpp-poly-1', [
    ['CIRCLE 5.0', 'Area: 78.54'],
    ['RECTANGLE 4.0 6.0', 'Area: 24.00'],
    ['CIRCLE 1.0', 'Area: 3.14'],
    ['RECTANGLE 10.0 10.0', 'Area: 100.00'],
    ['CIRCLE 2.5', 'Area: 19.63'],
    ['RECTANGLE 3.5 2.0', 'Area: 7.00'],
    ['CIRCLE 10.0', 'Area: 314.16'],
    ['RECTANGLE 1.5 8.0', 'Area: 12.00'],
    ['CIRCLE 7.0', 'Area: 153.94'],
    ['RECTANGLE 50.0 2.0', 'Area: 100.00']
  ])
});

addProblem({
  id: 'cpp-poly-2',
  topicId: 'cpp-inheritance-and-virtual-functions',
  level: 'intermediate',
  title: 'Employee Hierarchy and Dynamic Dispatch',
  difficulty: 'medium',
  problemStatement: 'Define a base class `Employee` with `virtual double calcCompensation() const`. Derive `Engineer(double base)` where compensation = base, and `Manager(double base, double bonus)` where compensation = base + bonus. Read N records "ENGINEER <base>" or "MANAGER <base> <bonus>". Sum total compensation using polymorphic pointers and print "Total Compensation: $<total rounded to 2 decimals>".',
  inputFormat: 'First line N. Next N lines each contain role and salary params.',
  outputFormat: '"Total Compensation: $<total>"',
  constraints: ['1 <= N <= 100', 'Salaries >= 0'],
  examples: [
    { input: '2\nENGINEER 80000.0\nMANAGER 90000.0 20000.0', output: 'Total Compensation: $190000.00' }
  ],
  testCases: createTC('cpp-poly-2', [
    ['2\nENGINEER 80000.0\nMANAGER 90000.0 20000.0', 'Total Compensation: $190000.00'],
    ['1\nENGINEER 100000.0', 'Total Compensation: $100000.00'],
    ['3\nENGINEER 50000.0\nENGINEER 60000.0\nMANAGER 70000.0 15000.0', 'Total Compensation: $195000.00'],
    ['2\nMANAGER 120000.0 30000.0\nMANAGER 110000.0 25000.0', 'Total Compensation: $285000.00'],
    ['1\nMANAGER 50000.0 0.0', 'Total Compensation: $50000.00'],
    ['4\nENGINEER 10000.0\nENGINEER 20000.0\nENGINEER 30000.0\nENGINEER 40000.0', 'Total Compensation: $100000.00'],
    ['2\nENGINEER 75000.5\nMANAGER 85000.5 10000.0', 'Total Compensation: $170001.00'],
    ['3\nMANAGER 50000.0 10000.0\nENGINEER 40000.0\nMANAGER 60000.0 20000.0', 'Total Compensation: $180000.00'],
    ['1\nENGINEER 0.0', 'Total Compensation: $0.00'],
    ['2\nENGINEER 95000.0\nMANAGER 105000.0 50000.0', 'Total Compensation: $250000.00']
  ])
});

addProblem({
  id: 'cpp-poly-3',
  topicId: 'cpp-inheritance-and-virtual-functions',
  level: 'intermediate',
  title: 'Virtual Destructors and Safe Polymorphic Deletion',
  difficulty: 'medium',
  problemStatement: 'In C++, deleting a derived object via a base pointer without a `virtual ~Base()` destructor causes undefined behavior and resource leaks. Create a polymorphic hierarchy `Base` and `Derived`. When Base destructor runs, print "~Base()". When Derived destructor runs, print "~Derived()". Delete a Derived instance via a `Base*` pointer and print the destructor call sequence.',
  inputFormat: 'An integer count N of objects created and deleted.',
  outputFormat: 'Destructor logs in order.',
  constraints: ['1 <= N <= 5'],
  examples: [
    { input: '1', output: '~Derived()\n~Base()' }
  ],
  testCases: createTC('cpp-poly-3', [
    ['1', '~Derived()\n~Base()'],
    ['2', '~Derived()\n~Base()\n~Derived()\n~Base()'],
    ['3', '~Derived()\n~Base()\n~Derived()\n~Base()\n~Derived()\n~Base()'],
    ['4', '~Derived()\n~Base()\n~Derived()\n~Base()\n~Derived()\n~Base()\n~Derived()\n~Base()'],
    ['5', '~Derived()\n~Base()\n~Derived()\n~Base()\n~Derived()\n~Base()\n~Derived()\n~Base()\n~Derived()\n~Base()'],
    ['1', '~Derived()\n~Base()'],
    ['2', '~Derived()\n~Base()\n~Derived()\n~Base()'],
    ['3', '~Derived()\n~Base()\n~Derived()\n~Base()\n~Derived()\n~Base()'],
    ['1', '~Derived()\n~Base()'],
    ['2', '~Derived()\n~Base()\n~Derived()\n~Base()']
  ])
});

// 8. cpp-templates-generic-programming (3 problems)
addProblem({
  id: 'cpp-tmpl-1',
  topicId: 'cpp-templates-generic-programming',
  level: 'intermediate',
  title: 'Generic Function Template max3',
  difficulty: 'easy',
  problemStatement: 'Write a generic function template `template <typename T> T max3(const T &a, const T &b, const T &c)`. Given type discriminator ("INT", "DOUBLE", "STRING") and three space-separated values, call max3 and print the maximum value (for DOUBLE, format to 2 decimal places).',
  inputFormat: 'Type ("INT", "DOUBLE", "STRING") followed by 3 space-separated values.',
  outputFormat: 'Maximum value.',
  constraints: ['Values valid for specified type'],
  examples: [
    { input: 'INT 10 50 30', output: '50' },
    { input: 'STRING apple orange banana', output: 'orange' }
  ],
  testCases: createTC('cpp-tmpl-1', [
    ['INT 10 50 30', '50'],
    ['STRING apple orange banana', 'orange'],
    ['DOUBLE 3.14 2.71 4.56', '4.56'],
    ['INT -10 -5 -20', '-5'],
    ['DOUBLE 1.0 1.0 1.0', '1.00'],
    ['STRING dog elephant cat', 'elephant'],
    ['INT 100 100 50', '100'],
    ['DOUBLE -5.5 0.0 5.5', '5.50'],
    ['STRING z a m', 'z'],
    ['INT 0 0 0', '0']
  ])
});

addProblem({
  id: 'cpp-tmpl-2',
  topicId: 'cpp-templates-generic-programming',
  level: 'intermediate',
  title: 'Generic Stack Class Template',
  difficulty: 'medium',
  problemStatement: 'Implement a generic class template `template <typename T> class MyStack` with methods `void push(T val)`, `void pop()`, `T top() const`, and `bool empty() const`. Given a sequence of Q commands ("push <val>", "pop", "top"), simulate the stack for integers. For "top", print the value (or "EMPTY" if empty). For "pop" on empty stack, print "EMPTY".',
  inputFormat: 'First line Q. Next Q lines contain stack commands.',
  outputFormat: 'Results of top commands.',
  constraints: ['1 <= Q <= 100'],
  examples: [
    { input: '5\npush 10\npush 20\ntop\npop\ntop', output: '20\n10' }
  ],
  testCases: createTC('cpp-tmpl-2', [
    ['5\npush 10\npush 20\ntop\npop\ntop', '20\n10'],
    ['3\ntop\npop\ntop', 'EMPTY\nEMPTY'],
    ['4\npush 5\npop\ntop\npush 7', 'EMPTY'],
    ['6\npush 1\npush 2\npush 3\ntop\npop\ntop', '3\n2'],
    ['2\npush 42\ntop', '42'],
    ['5\npush 100\npop\npush 200\npush 300\ntop', '300'],
    ['4\npush 8\npush 9\npop\ntop', '8'],
    ['3\npush 15\ntop\npop', '15'],
    ['6\npush 10\npush 20\npop\npop\ntop\npop', 'EMPTY'],
    ['5\npush 77\npush 88\ntop\npop\ntop', '88\n77']
  ])
});

addProblem({
  id: 'cpp-tmpl-3',
  topicId: 'cpp-templates-generic-programming',
  level: 'intermediate',
  title: 'Class Template Specialization for Strings',
  difficulty: 'medium',
  problemStatement: 'Implement a class template `template <typename T> struct Printer` that prints values. Provide a full template specialization for `std::string` that encloses the string in quotation marks: `"<val>"`. For non-string types (int, double), print normally. Given type code ("INT" or "STRING") and value, print formatted output.',
  inputFormat: 'Type ("INT" or "STRING") and value token.',
  outputFormat: 'Printed formatted value.',
  constraints: ['Value is valid for type'],
  examples: [
    { input: 'INT 42', output: '42' },
    { input: 'STRING hello', output: '"hello"' }
  ],
  testCases: createTC('cpp-tmpl-3', [
    ['INT 42', '42'],
    ['STRING hello', '"hello"'],
    ['INT -100', '-100'],
    ['STRING modern_cpp', '"modern_cpp"'],
    ['INT 0', '0'],
    ['STRING templates', '"templates"'],
    ['INT 999999', '999999'],
    ['STRING specialized', '"specialized"'],
    ['INT 7', '7'],
    ['STRING RAII', '"RAII"']
  ])
});

// 9. cpp-stl-vector-and-containers (4 problems)
addProblem({
  id: 'cpp-stl-1',
  topicId: 'cpp-stl-vector-and-containers',
  level: 'intermediate',
  title: 'std::vector Dynamic Capacity Expansion',
  difficulty: 'easy',
  problemStatement: 'Read an integer N, followed by N integers. Push each integer into a `std::vector<int>`. After pushing all elements, print "Size: <size> | First: <first> | Last: <last> | Sum: <sum>".',
  inputFormat: 'First line N. Second line N integers.',
  outputFormat: '"Size: <size> | First: <first> | Last: <last> | Sum: <sum>"',
  constraints: ['1 <= N <= 1000'],
  examples: [
    { input: '4\n10 20 30 40', output: 'Size: 4 | First: 10 | Last: 40 | Sum: 100' }
  ],
  testCases: createTC('cpp-stl-1', [
    ['4\n10 20 30 40', 'Size: 4 | First: 10 | Last: 40 | Sum: 100'],
    ['1\n42', 'Size: 1 | First: 42 | Last: 42 | Sum: 42'],
    ['3\n-5 0 5', 'Size: 3 | First: -5 | Last: 5 | Sum: 0'],
    ['5\n1 2 3 4 5', 'Size: 5 | First: 1 | Last: 5 | Sum: 15'],
    ['2\n100 200', 'Size: 2 | First: 100 | Last: 200 | Sum: 300'],
    ['6\n2 4 6 8 10 12', 'Size: 6 | First: 2 | Last: 12 | Sum: 42'],
    ['4\n-10 -20 -30 -40', 'Size: 4 | First: -10 | Last: -40 | Sum: -100'],
    ['3\n7 7 7', 'Size: 3 | First: 7 | Last: 7 | Sum: 21'],
    ['5\n10 5 15 20 25', 'Size: 5 | First: 10 | Last: 25 | Sum: 75'],
    ['2\n-1 1', 'Size: 2 | First: -1 | Last: 1 | Sum: 0']
  ])
});

addProblem({
  id: 'cpp-stl-2',
  topicId: 'cpp-stl-vector-and-containers',
  level: 'intermediate',
  title: 'Word Frequency Map with std::map',
  difficulty: 'medium',
  problemStatement: 'Read an integer N, followed by N words. Using `std::map<std::string, int>`, count the frequency of each word. Since `std::map` keeps keys ordered lexicographically, print each word and its frequency in the format: "<word>: <count>".',
  inputFormat: 'First line N. Second line N words.',
  outputFormat: 'Lexicographically sorted lines: "<word>: <count>"',
  constraints: ['1 <= N <= 1000'],
  examples: [
    { input: '5\napple banana apple cherry banana', output: 'apple: 2\nbanana: 2\ncherry: 1' }
  ],
  testCases: createTC('cpp-stl-2', [
    ['5\napple banana apple cherry banana', 'apple: 2\nbanana: 2\ncherry: 1'],
    ['1\nhello', 'hello: 1'],
    ['4\na b c d', 'a: 1\nb: 1\nc: 1\nd: 1'],
    ['4\nz z z z', 'z: 4'],
    ['6\nthe quick brown fox jumps over', 'brown: 1\nfox: 1\njumps: 1\nover: 1\nquick: 1\nthe: 1'],
    ['3\ncat dog cat', 'cat: 2\ndog: 1'],
    ['5\nred blue red green blue', 'blue: 2\ngreen: 1\nred: 2'],
    ['2\nyes no', 'no: 1\nyes: 1'],
    ['4\nfoo bar foo bar', 'bar: 2\nfoo: 2'],
    ['3\none two one', 'one: 2\ntwo: 1']
  ])
});

addProblem({
  id: 'cpp-stl-3',
  topicId: 'cpp-stl-vector-and-containers',
  level: 'intermediate',
  title: 'Balanced Brackets with std::stack',
  difficulty: 'medium',
  problemStatement: 'Given a string containing bracket characters `()`, `{}`, and `[]`, determine if the string is balanced using `std::stack<char>`. Print "true" if balanced, else "false".',
  inputFormat: 'A string of bracket characters.',
  outputFormat: '"true" or "false"',
  constraints: ['Length <= 1000'],
  examples: [
    { input: '{[()]}', output: 'true' },
    { input: '{[(])}', output: 'false' }
  ],
  testCases: createTC('cpp-stl-3', [
    ['{[()]}', 'true'],
    ['{[(])}', 'false'],
    ['()', 'true'],
    ['()[]{}', 'true'],
    ['(]', 'false'],
    ['([)]', 'false'],
    ['{[]}', 'true'],
    ['((()))', 'true'],
    ['(()', 'false'],
    ['', 'true']
  ])
});

addProblem({
  id: 'cpp-stl-4',
  topicId: 'cpp-stl-vector-and-containers',
  level: 'intermediate',
  title: 'K Largest Elements via std::priority_queue',
  difficulty: 'medium',
  problemStatement: 'Given an array of N integers and an integer K, find the K largest elements using a min-heap `std::priority_queue<int, std::vector<int>, std::greater<int>>`. Print the K largest elements in ascending order separated by space.',
  inputFormat: 'First line N and K. Second line N integers.',
  outputFormat: 'K integers in ascending order separated by space.',
  constraints: ['1 <= K <= N <= 1000'],
  examples: [
    { input: '6 3\n3 2 1 5 6 4', output: '4 5 6' }
  ],
  testCases: createTC('cpp-stl-4', [
    ['6 3\n3 2 1 5 6 4', '4 5 6'],
    ['5 1\n10 50 20 40 30', '50'],
    ['4 4\n4 3 2 1', '1 2 3 4'],
    ['5 2\n-5 -2 -10 -1 -8', '-2 -1'],
    ['7 3\n100 20 300 40 500 60 700', '300 500 700'],
    ['3 2\n7 7 7', '7 7'],
    ['6 2\n1 9 2 8 3 7', '8 9'],
    ['5 3\n15 25 35 45 55', '35 45 55'],
    ['4 1\n99 100 98 97', '100'],
    ['5 5\n5 4 3 2 1', '1 2 3 4 5']
  ])
});

// 10. cpp-stl-algorithms-and-lambdas (4 problems)
addProblem({
  id: 'cpp-algo-1',
  topicId: 'cpp-stl-algorithms-and-lambdas',
  level: 'intermediate',
  title: 'Predicate Counting with std::count_if and Lambdas',
  difficulty: 'easy',
  problemStatement: 'Using `<algorithm>` and a C++ lambda expression, count how many numbers in an array of N integers are strictly positive and even: `[](int x) { return x > 0 && x % 2 == 0; }`. Print the count.',
  inputFormat: 'First line N. Second line N integers.',
  outputFormat: 'Integer count.',
  constraints: ['1 <= N <= 1000'],
  examples: [
    { input: '6\n-2 0 2 3 4 5', output: '2' }
  ],
  testCases: createTC('cpp-algo-1', [
    ['6\n-2 0 2 3 4 5', '2'],
    ['4\n1 3 5 7', '0'],
    ['5\n2 4 6 8 10', '5'],
    ['4\n-2 -4 -6 -8', '0'],
    ['3\n0 0 0', '0'],
    ['7\n12 15 18 21 24 27 30', '4'],
    ['1\n2', '1'],
    ['1\n-2', '0'],
    ['5\n10 -10 20 -20 30', '3'],
    ['6\n2 2 2 2 2 2', '6']
  ])
});

addProblem({
  id: 'cpp-algo-2',
  topicId: 'cpp-stl-algorithms-and-lambdas',
  level: 'intermediate',
  title: 'Custom Sorting with Lambda Comparators',
  difficulty: 'medium',
  problemStatement: 'Given N pairs of integers (id and score), sort them using `std::sort` with a custom lambda comparator: primarily descending by score, and secondarily ascending by id (in case of ties). Print the sorted pairs formatted as "<id>:<score>" separated by spaces.',
  inputFormat: 'First line N. Next N lines each contain id and score.',
  outputFormat: 'Space-separated "<id>:<score>" tokens.',
  constraints: ['1 <= N <= 1000'],
  examples: [
    { input: '3\n1 85\n2 95\n3 85', output: '2:95 1:85 3:85' }
  ],
  testCases: createTC('cpp-algo-2', [
    ['3\n1 85\n2 95\n3 85', '2:95 1:85 3:85'],
    ['1\n10 100', '10:100'],
    ['4\n1 50\n2 60\n3 70\n4 80', '4:80 3:70 2:60 1:50'],
    ['3\n3 90\n1 90\n2 90', '1:90 2:90 3:90'],
    ['2\n5 100\n6 90', '5:100 6:90'],
    ['4\n4 20\n2 40\n1 40\n3 20', '1:40 2:40 3:20 4:20'],
    ['2\n10 0\n20 0', '10:0 20:0'],
    ['3\n1 10\n2 20\n3 30', '3:30 2:20 1:10'],
    ['5\n5 50\n4 50\n3 50\n2 50\n1 50', '1:50 2:50 3:50 4:50 5:50'],
    ['2\n99 75\n88 85', '88:85 99:75']
  ])
});

addProblem({
  id: 'cpp-algo-3',
  topicId: 'cpp-stl-algorithms-and-lambdas',
  level: 'intermediate',
  title: 'Transformation and Accumulation Pipeline',
  difficulty: 'medium',
  problemStatement: 'Using `std::transform` and `std::accumulate` from `<numeric>`, transform an array of N integers by squaring each element, and then compute the sum of squares. Print the transformed squared elements on line 1, and the total sum on line 2.',
  inputFormat: 'First line N. Second line N integers.',
  outputFormat: 'Line 1: space-separated squared integers.\nLine 2: total sum.',
  constraints: ['1 <= N <= 1000', '-1000 <= element <= 1000'],
  examples: [
    { input: '3\n1 2 3', output: '1 4 9\n14' }
  ],
  testCases: createTC('cpp-algo-3', [
    ['3\n1 2 3', '1 4 9\n14'],
    ['1\n5', '25\n25'],
    ['4\n-1 -2 -3 -4', '1 4 9 16\n30'],
    ['3\n0 0 0', '0 0 0\n0'],
    ['5\n2 4 6 8 10', '4 16 36 64 100\n220'],
    ['2\n10 20', '100 400\n500'],
    ['4\n3 3 3 3', '9 9 9 9\n36'],
    ['2\n-5 5', '25 25\n50'],
    ['5\n1 1 1 1 1', '1 1 1 1 1\n5'],
    ['3\n10 -10 10', '100 100 100\n300']
  ])
});

addProblem({
  id: 'cpp-algo-4',
  topicId: 'cpp-stl-algorithms-and-lambdas',
  level: 'intermediate',
  title: 'Erase-Remove Idiom with std::remove_if',
  difficulty: 'medium',
  problemStatement: 'The canonical C++ Erase-Remove idiom `vec.erase(std::remove_if(vec.begin(), vec.end(), pred), vec.end());` removes elements matching a predicate in linear time. Given N integers and a threshold K, remove all elements strictly less than K using erase-remove. Print the remaining elements (or "EMPTY" if none remain).',
  inputFormat: 'First line N and K. Second line N integers.',
  outputFormat: 'Remaining elements separated by space or "EMPTY".',
  constraints: ['1 <= N <= 1000'],
  examples: [
    { input: '5 10\n5 12 8 15 20', output: '12 15 20' }
  ],
  testCases: createTC('cpp-algo-4', [
    ['5 10\n5 12 8 15 20', '12 15 20'],
    ['3 50\n10 20 30', 'EMPTY'],
    ['4 0\n-5 0 5 10', '0 5 10'],
    ['3 5\n5 6 7', '5 6 7'],
    ['5 100\n100 200 50 300 400', '100 200 300 400'],
    ['1 10\n9', 'EMPTY'],
    ['1 10\n10', '10'],
    ['6 25\n10 20 30 40 15 50', '30 40 50'],
    ['4 -10\n-20 -15 -10 -5', '-10 -5'],
    ['5 7\n7 7 7 7 7', '7 7 7 7 7']
  ])
});

// ============================================================================
// ADVANCED
// ============================================================================

// 11. cpp-smart-pointers-unique-shared (3 problems)
addProblem({
  id: 'cpp-smart-1',
  topicId: 'cpp-smart-pointers-unique-shared',
  level: 'advanced',
  title: 'Unique Ownership Transfer with std::make_unique',
  difficulty: 'medium',
  problemStatement: 'In modern C++14, `std::make_unique<T>` encapsulates dynamic heap allocation with single-ownership semantics. Create a struct `Data { int id; std::string tag; };`. Implement a factory function `std::unique_ptr<Data> createData(int id, const std::string &tag)`. Pass ownership to a consumer function `void process(std::unique_ptr<Data> ptr)` using `std::move`. Print: "[PROCESSED Data #<id> (<tag>)]".',
  inputFormat: 'id and tag separated by space.',
  outputFormat: '"[PROCESSED Data #<id> (<tag>)]"',
  constraints: ['id >= 1', 'tag length <= 50'],
  examples: [
    { input: '101 SensorA', output: '[PROCESSED Data #101 (SensorA)]' }
  ],
  testCases: createTC('cpp-smart-1', [
    ['101 SensorA', '[PROCESSED Data #101 (SensorA)]'],
    ['202 MotorB', '[PROCESSED Data #202 (MotorB)]'],
    ['1 Core', '[PROCESSED Data #1 (Core)]'],
    ['999 Telemetry', '[PROCESSED Data #999 (Telemetry)]'],
    ['42 Packet', '[PROCESSED Data #42 (Packet)]'],
    ['5 Engine', '[PROCESSED Data #5 (Engine)]'],
    ['7 Node', '[PROCESSED Data #7 (Node)]'],
    ['12 Dispatcher', '[PROCESSED Data #12 (Dispatcher)]'],
    ['88 Worker', '[PROCESSED Data #88 (Worker)]'],
    ['500 Cluster', '[PROCESSED Data #500 (Cluster)]']
  ])
});

addProblem({
  id: 'cpp-smart-2',
  topicId: 'cpp-smart-pointers-unique-shared',
  level: 'advanced',
  title: 'Shared Ownership Reference Count Tracking',
  difficulty: 'medium',
  problemStatement: '`std::shared_ptr<T>` maintains a reference count of active owners via `use_count()`. Start by creating a `std::shared_ptr<int> p1 = std::make_shared<int>(val);`. Perform operations based on input: for each "COPY", copy the shared pointer into a vector (increasing reference count). For each "RESET", remove/reset one copy. Print the `use_count()` after each operation.',
  inputFormat: 'First line initial val. Second line N operations. Next N lines contain "COPY" or "RESET".',
  outputFormat: 'use_count integer after each step.',
  constraints: ['1 <= N <= 20'],
  examples: [
    { input: '42\n3\nCOPY\nCOPY\nRESET', output: '2\n3\n2' }
  ],
  testCases: createTC('cpp-smart-2', [
    ['42\n3\nCOPY\nCOPY\nRESET', '2\n3\n2'],
    ['10\n1\nCOPY', '2'],
    ['5\n2\nCOPY\nRESET', '2\n1'],
    ['100\n4\nCOPY\nCOPY\nCOPY\nRESET', '2\n3\n4\n3'],
    ['7\n2\nCOPY\nCOPY', '2\n3'],
    ['99\n5\nCOPY\nCOPY\nRESET\nRESET\nCOPY', '2\n3\n2\n1\n2'],
    ['1\n1\nRESET', '1'],
    ['50\n3\nCOPY\nRESET\nCOPY', '2\n1\n2'],
    ['25\n4\nCOPY\nCOPY\nRESET\nCOPY', '2\n3\n2\n3'],
    ['8\n2\nCOPY\nRESET', '2\n1']
  ])
});

addProblem({
  id: 'cpp-smart-3',
  topicId: 'cpp-smart-pointers-unique-shared',
  level: 'advanced',
  title: 'Unique Pointer Custom Deleter Callback',
  difficulty: 'medium',
  problemStatement: '`std::unique_ptr` accepts a custom deleter type or lambda: `auto customDeleter = [](int *ptr) { ... delete ptr; };`. Write a program using a custom deleter that logs "Resource <id> Freed" upon destruction. Given an ID, create the resource in a scoped block and verify the custom deleter message is printed.',
  inputFormat: 'An integer ID.',
  outputFormat: '"Resource <id> Freed"',
  constraints: ['1 <= ID <= 10000'],
  examples: [
    { input: '42', output: 'Resource 42 Freed' }
  ],
  testCases: createTC('cpp-smart-3', [
    ['42', 'Resource 42 Freed'],
    ['1', 'Resource 1 Freed'],
    ['100', 'Resource 100 Freed'],
    ['555', 'Resource 555 Freed'],
    ['9999', 'Resource 9999 Freed'],
    ['7', 'Resource 7 Freed'],
    ['250', 'Resource 250 Freed'],
    ['1234', 'Resource 1234 Freed'],
    ['10', 'Resource 10 Freed'],
    ['5', 'Resource 5 Freed']
  ])
});

// 12. cpp-weak-ptr-and-cycles (3 problems)
addProblem({
  id: 'cpp-weak-1',
  topicId: 'cpp-weak-ptr-and-cycles',
  level: 'advanced',
  title: 'Observer Pattern with std::weak_ptr lock()',
  difficulty: 'medium',
  problemStatement: '`std::weak_ptr` observes a `std::shared_ptr` without incrementing its reference count. To safely access the data, call `.lock()`: if the target still exists, it returns a valid shared pointer; if destroyed, it returns nullptr. Simulate an observer: read a value, create a shared_ptr, bind a weak_ptr. If action is "HOLD", lock and print "Observed: <val>". If action is "RESET", reset the shared_ptr, attempt lock, and print "Expired".',
  inputFormat: 'An integer val and action string ("HOLD" or "RESET").',
  outputFormat: '"Observed: <val>" or "Expired"',
  constraints: ['Action in {"HOLD", "RESET"}'],
  examples: [
    { input: '42 HOLD', output: 'Observed: 42' },
    { input: '42 RESET', output: 'Expired' }
  ],
  testCases: createTC('cpp-weak-1', [
    ['42 HOLD', 'Observed: 42'],
    ['42 RESET', 'Expired'],
    ['100 HOLD', 'Observed: 100'],
    ['100 RESET', 'Expired'],
    ['0 HOLD', 'Observed: 0'],
    ['999 RESET', 'Expired'],
    ['7 HOLD', 'Observed: 7'],
    ['25 RESET', 'Expired'],
    ['-50 HOLD', 'Observed: -50'],
    ['123 RESET', 'Expired']
  ])
});

addProblem({
  id: 'cpp-weak-2',
  topicId: 'cpp-weak-ptr-and-cycles',
  level: 'advanced',
  title: 'Breaking Cyclical References in Node Graphs',
  difficulty: 'medium',
  problemStatement: 'Cyclical references between two `shared_ptr` objects prevent their reference counts from ever reaching 0, causing a memory leak. Breaking the cycle requires one node to use `std::weak_ptr`. Implement two nodes: Node A has `std::shared_ptr<NodeB>`, and Node B has `std::weak_ptr<NodeA>`. Verify that both destructors run when the root pointer goes out of scope, printing "NodeA destroyed" and "NodeB destroyed".',
  inputFormat: 'An integer nodeCount (1 to 5).',
  outputFormat: 'Destruction logs.',
  constraints: ['1 <= nodeCount <= 5'],
  examples: [
    { input: '1', output: 'NodeA destroyed\nNodeB destroyed' }
  ],
  testCases: createTC('cpp-weak-2', [
    ['1', 'NodeA destroyed\nNodeB destroyed'],
    ['2', 'NodeA destroyed\nNodeB destroyed\nNodeA destroyed\nNodeB destroyed'],
    ['3', 'NodeA destroyed\nNodeB destroyed\nNodeA destroyed\nNodeB destroyed\nNodeA destroyed\nNodeB destroyed'],
    ['4', 'NodeA destroyed\nNodeB destroyed\nNodeA destroyed\nNodeB destroyed\nNodeA destroyed\nNodeB destroyed\nNodeA destroyed\nNodeB destroyed'],
    ['5', 'NodeA destroyed\nNodeB destroyed\nNodeA destroyed\nNodeB destroyed\nNodeA destroyed\nNodeB destroyed\nNodeA destroyed\nNodeB destroyed\nNodeA destroyed\nNodeB destroyed'],
    ['1', 'NodeA destroyed\nNodeB destroyed'],
    ['2', 'NodeA destroyed\nNodeB destroyed\nNodeA destroyed\nNodeB destroyed'],
    ['3', 'NodeA destroyed\nNodeB destroyed\nNodeA destroyed\nNodeB destroyed\nNodeA destroyed\nNodeB destroyed'],
    ['1', 'NodeA destroyed\nNodeB destroyed'],
    ['2', 'NodeA destroyed\nNodeB destroyed\nNodeA destroyed\nNodeB destroyed']
  ])
});

addProblem({
  id: 'cpp-weak-3',
  topicId: 'cpp-weak-ptr-and-cycles',
  level: 'advanced',
  title: 'Weak Cache Store Simulator',
  difficulty: 'medium',
  problemStatement: 'A cache table using `std::weak_ptr` allows resources to be reclaimed when no active shared owner exists. Given a cache holding weak pointers, query keys: if the item is alive, print "HIT: <val>"; if expired, print "MISS".',
  inputFormat: 'First line N queries. Next N lines each contain key, status ("ALIVE" or "EXPIRED"), and val.',
  outputFormat: 'N query results.',
  constraints: ['1 <= N <= 20'],
  examples: [
    { input: '2\nK1 ALIVE 100\nK2 EXPIRED 200', output: 'HIT: 100\nMISS' }
  ],
  testCases: createTC('cpp-weak-3', [
    ['2\nK1 ALIVE 100\nK2 EXPIRED 200', 'HIT: 100\nMISS'],
    ['1\nA ALIVE 42', 'HIT: 42'],
    ['1\nB EXPIRED 99', 'MISS'],
    ['3\nX ALIVE 10\nY EXPIRED 20\nZ ALIVE 30', 'HIT: 10\nMISS\nHIT: 30'],
    ['2\nC EXPIRED 0\nD EXPIRED 0', 'MISS\nMISS'],
    ['2\nE ALIVE 500\nF ALIVE 600', 'HIT: 500\nHIT: 600'],
    ['3\nG EXPIRED 1\nH ALIVE 2\nI EXPIRED 3', 'MISS\nHIT: 2\nMISS'],
    ['1\nJ ALIVE 777', 'HIT: 777'],
    ['2\nK EXPIRED 5\nL ALIVE 15', 'MISS\nHIT: 15'],
    ['4\nM ALIVE 1\nN ALIVE 2\nO EXPIRED 3\nP ALIVE 4', 'HIT: 1\nHIT: 2\nMISS\nHIT: 4']
  ])
});

// 13. cpp-move-semantics-rvalues (3 problems)
addProblem({
  id: 'cpp-move-1',
  topicId: 'cpp-move-semantics-rvalues',
  level: 'advanced',
  title: 'Move Constructor Resource Transfer',
  difficulty: 'medium',
  problemStatement: 'In modern C++11, move constructors `Buffer(Buffer &&other) noexcept` steal the heap pointer from an rvalue without expensive deep copying. Create a `Buffer` class: when move constructed, the destination adopts the source size and buffer, while the source size is set to 0. Given buffer size N and elements, move it to a second buffer and print: "Source size: 0 | Dest size: <N> | First: <first> | Last: <last>".',
  inputFormat: 'First line N. Second line N integers.',
  outputFormat: '"Source size: 0 | Dest size: <N> | First: <first> | Last: <last>"',
  constraints: ['1 <= N <= 1000'],
  examples: [
    { input: '4\n10 20 30 40', output: 'Source size: 0 | Dest size: 4 | First: 10 | Last: 40' }
  ],
  testCases: createTC('cpp-move-1', [
    ['4\n10 20 30 40', 'Source size: 0 | Dest size: 4 | First: 10 | Last: 40'],
    ['1\n42', 'Source size: 0 | Dest size: 1 | First: 42 | Last: 42'],
    ['3\n5 15 25', 'Source size: 0 | Dest size: 3 | First: 5 | Last: 25'],
    ['5\n1 2 3 4 5', 'Source size: 0 | Dest size: 5 | First: 1 | Last: 5'],
    ['2\n100 200', 'Source size: 0 | Dest size: 2 | First: 100 | Last: 200'],
    ['6\n2 4 6 8 10 12', 'Source size: 0 | Dest size: 6 | First: 2 | Last: 12'],
    ['4\n-1 -2 -3 -4', 'Source size: 0 | Dest size: 4 | First: -1 | Last: -4'],
    ['3\n7 8 9', 'Source size: 0 | Dest size: 3 | First: 7 | Last: 9'],
    ['5\n50 40 30 20 10', 'Source size: 0 | Dest size: 5 | First: 50 | Last: 10'],
    ['2\n-99 99', 'Source size: 0 | Dest size: 2 | First: -99 | Last: 99']
  ])
});

addProblem({
  id: 'cpp-move-2',
  topicId: 'cpp-move-semantics-rvalues',
  level: 'advanced',
  title: 'Rvalue Reference Overload Resolution',
  difficulty: 'medium',
  problemStatement: 'C++ distinguishes between lvalues and rvalues using overloads: `void process(const std::string &lval)` (prints "Lvalue copied: <str>") and `void process(std::string &&rval)` (prints "Rvalue moved: <str>"). Read a string. Pass it once as an lvalue, and once wrapped with `std::move()` as an rvalue. Print both outputs on separate lines.',
  inputFormat: 'A single word string.',
  outputFormat: 'Two lines: "Lvalue copied: <str>" and "Rvalue moved: <str>"',
  constraints: ['Length <= 100'],
  examples: [
    { input: 'Data', output: 'Lvalue copied: Data\nRvalue moved: Data' }
  ],
  testCases: createTC('cpp-move-2', [
    ['Data', 'Lvalue copied: Data\nRvalue moved: Data'],
    ['Buffer', 'Lvalue copied: Buffer\nRvalue moved: Buffer'],
    ['Packet', 'Lvalue copied: Packet\nRvalue moved: Packet'],
    ['Node', 'Lvalue copied: Node\nRvalue moved: Node'],
    ['Frame', 'Lvalue copied: Frame\nRvalue moved: Frame'],
    ['Message', 'Lvalue copied: Message\nRvalue moved: Message'],
    ['Vector', 'Lvalue copied: Vector\nRvalue moved: Vector'],
    ['String', 'Lvalue copied: String\nRvalue moved: String'],
    ['Chunk', 'Lvalue copied: Chunk\nRvalue moved: Chunk'],
    ['Payload', 'Lvalue copied: Payload\nRvalue moved: Payload']
  ])
});

addProblem({
  id: 'cpp-move-3',
  topicId: 'cpp-move-semantics-rvalues',
  level: 'advanced',
  title: 'Move Assignment Operator Self-Assignment Safety',
  difficulty: 'medium',
  problemStatement: 'Implement the move assignment operator `Buffer& operator=(Buffer &&other) noexcept` handling self-assignment check `if (this != &other)`. Move-assign a temporary buffer to an existing buffer, and print the resulting elements.',
  inputFormat: 'First line N. Second line N integers.',
  outputFormat: 'N integers separated by space.',
  constraints: ['1 <= N <= 1000'],
  examples: [
    { input: '3\n1 2 3', output: '1 2 3' }
  ],
  testCases: createTC('cpp-move-3', [
    ['3\n1 2 3', '1 2 3'],
    ['1\n42', '42'],
    ['4\n10 20 30 40', '10 20 30 40'],
    ['2\n-5 5', '-5 5'],
    ['5\n5 4 3 2 1', '5 4 3 2 1'],
    ['6\n2 4 6 8 10 12', '2 4 6 8 10 12'],
    ['4\n0 0 0 0', '0 0 0 0'],
    ['3\n100 200 300', '100 200 300'],
    ['5\n15 25 35 45 55', '15 25 35 45 55'],
    ['2\n99 1', '99 1']
  ])
});

// 14. cpp-constexpr-and-concurrency (3 problems)
addProblem({
  id: 'cpp-ce-1',
  topicId: 'cpp-constexpr-and-concurrency',
  level: 'advanced',
  title: 'Compile-Time Factorial and Fibonacci with constexpr',
  difficulty: 'medium',
  problemStatement: 'In modern C++, `constexpr` functions can be evaluated at compile time. Write `constexpr long long factorial(int n)` and `constexpr long long fibonacci(int n)` (0-indexed: fib(0)=0, fib(1)=1). Given an integer N (0 <= N <= 20), compute and print "Factorial: <fact> | Fibonacci: <fib>".',
  inputFormat: 'An integer N.',
  outputFormat: '"Factorial: <fact> | Fibonacci: <fib>"',
  constraints: ['0 <= N <= 20'],
  examples: [
    { input: '5', output: 'Factorial: 120 | Fibonacci: 5' }
  ],
  testCases: createTC('cpp-ce-1', [
    ['5', 'Factorial: 120 | Fibonacci: 5'],
    ['0', 'Factorial: 1 | Fibonacci: 0'],
    ['1', 'Factorial: 1 | Fibonacci: 1'],
    ['2', 'Factorial: 2 | Fibonacci: 1'],
    ['3', 'Factorial: 6 | Fibonacci: 2'],
    ['4', 'Factorial: 24 | Fibonacci: 3'],
    ['6', 'Factorial: 720 | Fibonacci: 8'],
    ['7', 'Factorial: 5040 | Fibonacci: 13'],
    ['8', 'Factorial: 40320 | Fibonacci: 21'],
    ['10', 'Factorial: 3628800 | Fibonacci: 55']
  ])
});

addProblem({
  id: 'cpp-ce-2',
  topicId: 'cpp-constexpr-and-concurrency',
  level: 'advanced',
  title: 'Lock-Free Atomic Counter with std::atomic',
  difficulty: 'medium',
  problemStatement: '`std::atomic<long long>` enables thread-safe lock-free arithmetic via atomic operations like `fetch_add` and `fetch_sub`. Simulate atomic increments and decrements: read initial value, followed by N operations ("+ <amt>" or "- <amt>"). Apply each atomically and print the final value.',
  inputFormat: 'First line initial val. Second line N. Next N lines contain op ("+" or "-") and amt.',
  outputFormat: 'Final atomic value as integer.',
  constraints: ['1 <= N <= 100'],
  examples: [
    { input: '100\n3\n+ 50\n- 30\n+ 20', output: '140' }
  ],
  testCases: createTC('cpp-ce-2', [
    ['100\n3\n+ 50\n- 30\n+ 20', '140'],
    ['0\n2\n+ 10\n+ 20', '30'],
    ['50\n1\n- 50', '0'],
    ['1000\n4\n- 250\n- 250\n- 250\n- 250', '0'],
    ['42\n0', '42'],
    ['10\n3\n+ 5\n- 5\n+ 15', '25'],
    ['200\n2\n- 100\n+ 50', '150'],
    ['5\n4\n+ 1\n+ 2\n+ 3\n+ 4', '15'],
    ['100\n2\n+ 500\n- 200', '400'],
    ['-50\n2\n+ 50\n+ 50', '50']
  ])
});

addProblem({
  id: 'cpp-ce-3',
  topicId: 'cpp-constexpr-and-concurrency',
  level: 'advanced',
  title: 'Async Future & Promise Task Result Aggregator',
  difficulty: 'medium',
  problemStatement: '`std::future` and `std::promise` communicate asynchronous task results across execution boundaries. Simulate N worker tasks each computing the square of an integer. Fulfill each promise and retrieve the values via futures. Sum all results and print: "Tasks Completed: <N> | Aggregate: <sum>".',
  inputFormat: 'First line N. Second line N integers.',
  outputFormat: '"Tasks Completed: <N> | Aggregate: <sum>"',
  constraints: ['1 <= N <= 100'],
  examples: [
    { input: '3\n2 3 4', output: 'Tasks Completed: 3 | Aggregate: 29' }
  ],
  testCases: createTC('cpp-ce-3', [
    ['3\n2 3 4', 'Tasks Completed: 3 | Aggregate: 29'],
    ['1\n10', 'Tasks Completed: 1 | Aggregate: 100'],
    ['4\n1 2 3 4', 'Tasks Completed: 4 | Aggregate: 30'],
    ['2\n5 5', 'Tasks Completed: 2 | Aggregate: 50'],
    ['5\n0 1 2 3 4', 'Tasks Completed: 5 | Aggregate: 30'],
    ['3\n-1 -2 -3', 'Tasks Completed: 3 | Aggregate: 14'],
    ['2\n6 8', 'Tasks Completed: 2 | Aggregate: 100'],
    ['4\n2 2 2 2', 'Tasks Completed: 4 | Aggregate: 16'],
    ['1\n0', 'Tasks Completed: 1 | Aggregate: 0'],
    ['5\n1 1 1 1 1', 'Tasks Completed: 5 | Aggregate: 5']
  ])
});

// Output code file
console.log(`Finished creating all C++ problems! Total: ${problems.length}`);

const code = `/**
 * Canonical C++ Coding Practice Problems Bank
 * Auto-generated with 10 test cases per problem (3 public, 7 hidden).
 */

export const cppProblems = ${JSON.stringify(problems, null, 2)};

export default cppProblems;
`;

fs.writeFileSync(outputPath, code, 'utf-8');
console.log(`Successfully saved to ${outputPath}`);
