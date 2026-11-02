import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outputPath = path.join(__dirname, 'practice', 'javascriptProblems.js');

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
    languageId: 'javascript',
    language: 'javascript',
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
      javascript: starterCode || `const fs = require('fs');\n\nfunction main() {\n    const input = fs.readFileSync(0, 'utf-8').trim();\n    if (!input) return;\n    // Write your solution here\n}\n\nmain();\n`,
      python: `import sys\n\ndef main():\n    tokens = sys.stdin.read().split()\n    if not tokens: return\n    # Write your solution here\n\nif __name__ == "__main__":\n    main()\n`,
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

// 1. js-variables-let-const-var (3 problems)
addProblem({
  id: 'js-var-1',
  topicId: 'js-variables-let-const-var',
  level: 'beginner',
  title: 'Variable Scope and Temperature Conversion',
  difficulty: 'easy',
  problemStatement: 'Read temperature in Celsius C (number). Using let and const, compute Fahrenheit F = C * 9/5 + 32. Print "Celsius: <C> Fahrenheit: <F>" formatted to 2 decimal places using toFixed(2).',
  inputFormat: 'A number C.',
  outputFormat: 'Print "Celsius: <C> Fahrenheit: <F>".',
  constraints: ['-273.15 <= C <= 1000'],
  examples: [
    { input: '0', output: 'Celsius: 0.00 Fahrenheit: 32.00', explanation: '0 C = 32 F.' },
    { input: '100', output: 'Celsius: 100.00 Fahrenheit: 212.00', explanation: '100 C = 212 F.' },
    { input: '25', output: 'Celsius: 25.00 Fahrenheit: 77.00', explanation: '25 C = 77 F.' }
  ],
  testCases: createTC('js-var-1', [
    ['0', 'Celsius: 0.00 Fahrenheit: 32.00'],
    ['100', 'Celsius: 100.00 Fahrenheit: 212.00'],
    ['25', 'Celsius: 25.00 Fahrenheit: 77.00'],
    ['-40', 'Celsius: -40.00 Fahrenheit: -40.00'],
    ['37', 'Celsius: 37.00 Fahrenheit: 98.60'],
    ['50.5', 'Celsius: 50.50 Fahrenheit: 122.90'],
    ['-10', 'Celsius: -10.00 Fahrenheit: 14.00'],
    ['200', 'Celsius: 200.00 Fahrenheit: 392.00'],
    ['15.2', 'Celsius: 15.20 Fahrenheit: 59.36'],
    ['30', 'Celsius: 30.00 Fahrenheit: 86.00']
  ])
});

addProblem({
  id: 'js-var-2',
  topicId: 'js-variables-let-const-var',
  level: 'beginner',
  title: 'Swap Two Variables Without Temp Variable',
  difficulty: 'easy',
  problemStatement: 'Read two numbers A and B. Swap them using destructuring [a, b] = [b, a]. Print "A: <b> B: <a>".',
  inputFormat: 'Two space-separated numbers A and B.',
  outputFormat: 'Print "A: <b> B: <a>".',
  constraints: ['-10^9 <= A, B <= 10^9'],
  examples: [
    { input: '5 10', output: 'A: 10 B: 5', explanation: 'Swapped.' },
    { input: '1 2', output: 'A: 2 B: 1', explanation: 'Swapped.' },
    { input: '0 0', output: 'A: 0 B: 0', explanation: 'Zeroes.' }
  ],
  testCases: createTC('js-var-2', [
    ['5 10', 'A: 10 B: 5'],
    ['1 2', 'A: 2 B: 1'],
    ['0 0', 'A: 0 B: 0'],
    ['-5 5', 'A: 5 B: -5'],
    ['100 200', 'A: 200 B: 100'],
    ['7 3', 'A: 3 B: 7'],
    ['42 99', 'A: 99 B: 42'],
    ['-10 -20', 'A: -20 B: -10'],
    ['15 85', 'A: 85 B: 15'],
    ['9 9', 'A: 9 B: 9']
  ])
});

addProblem({
  id: 'js-var-3',
  topicId: 'js-variables-let-const-var',
  level: 'beginner',
  title: 'Const Object Property Mutation vs Reassignment',
  difficulty: 'medium',
  problemStatement: 'Demonstrate const object mutation: Given an object { count: 0 }, increment count by N times. Print "Final Count: <count>".',
  inputFormat: 'An integer N.',
  outputFormat: 'Print "Final Count: <N>".',
  constraints: ['0 <= N <= 10^5'],
  examples: [
    { input: '5', output: 'Final Count: 5', explanation: 'Incremented 5 times.' },
    { input: '0', output: 'Final Count: 0', explanation: 'Zero count.' },
    { input: '10', output: 'Final Count: 10', explanation: '10 times.' }
  ],
  testCases: createTC('js-var-3', [
    ['5', 'Final Count: 5'],
    ['0', 'Final Count: 0'],
    ['10', 'Final Count: 10'],
    ['1', 'Final Count: 1'],
    ['100', 'Final Count: 100'],
    ['50', 'Final Count: 50'],
    ['25', 'Final Count: 25'],
    ['7', 'Final Count: 7'],
    ['999', 'Final Count: 999'],
    ['1234', 'Final Count: 1234']
  ])
});

// 2. js-data-types-and-typeof (3 problems)
addProblem({
  id: 'js-dt-1',
  topicId: 'js-data-types-and-typeof',
  level: 'beginner',
  title: 'Identify JavaScript Data Types with typeof',
  difficulty: 'easy',
  problemStatement: 'Given a token T, determine whether it parses as a "number", "boolean" ("true"/"false"), or remains a "string". Print "Type: <type> Value: <val>".',
  inputFormat: 'A single token T.',
  outputFormat: 'Print "Type: <type> Value: <val>".',
  constraints: ['Token length <= 100'],
  examples: [
    { input: '42', output: 'Type: number Value: 42', explanation: 'Parsed as number.' },
    { input: 'true', output: 'Type: boolean Value: true', explanation: 'Parsed as boolean.' },
    { input: 'hello', output: 'Type: string Value: hello', explanation: 'String type.' }
  ],
  testCases: createTC('js-dt-1', [
    ['42', 'Type: number Value: 42'],
    ['true', 'Type: boolean Value: true'],
    ['hello', 'Type: string Value: hello'],
    ['false', 'Type: boolean Value: false'],
    ['3.14', 'Type: number Value: 3.14'],
    ['0', 'Type: number Value: 0'],
    ['-10', 'Type: number Value: -10'],
    ['world', 'Type: string Value: world'],
    ['javascript', 'Type: string Value: javascript'],
    ['1000', 'Type: number Value: 1000']
  ])
});

addProblem({
  id: 'js-dt-2',
  topicId: 'js-data-types-and-typeof',
  level: 'beginner',
  title: 'Strict String to Number Parsing',
  difficulty: 'easy',
  problemStatement: 'Given string token S, parse using Number(S). If isNaN, print "NaN". Else print the number rounded to 2 decimal places.',
  inputFormat: 'A token S.',
  outputFormat: 'Print parsed number or "NaN".',
  constraints: ['Token length <= 50'],
  examples: [
    { input: '123.456', output: '123.46', explanation: 'Parsed and rounded.' },
    { input: 'abc', output: 'NaN', explanation: 'Not a number.' },
    { input: '10', output: '10.00', explanation: 'Integer formatted.' }
  ],
  testCases: createTC('js-dt-2', [
    ['123.456', '123.46'],
    ['abc', 'NaN'],
    ['10', '10.00'],
    ['0', '0.00'],
    ['-5.2', '-5.20'],
    ['foo123', 'NaN'],
    ['100.00', '100.00'],
    ['0.05', '0.05'],
    ['xyz', 'NaN'],
    ['999.9', '999.90']
  ])
});

addProblem({
  id: 'js-dt-3',
  topicId: 'js-data-types-and-typeof',
  level: 'beginner',
  title: 'Truthy and Falsy Value Filtering in JavaScript',
  difficulty: 'medium',
  problemStatement: 'Given N tokens, evaluate Boolean(token) (where "false", "0", "null", "undefined", "NaN", "" are treated as falsy, others truthy). Print "TRUTHY: <count> FALSY: <count>".',
  inputFormat: 'First line N, second line N space-separated tokens.',
  outputFormat: 'Print "TRUTHY: <t> FALSY: <f>".',
  constraints: ['1 <= N <= 1000'],
  examples: [
    { input: '5\nhello 0 true null 42', output: 'TRUTHY: 3 FALSY: 2', explanation: 'hello, true, 42 are truthy; 0, null are falsy.' },
    { input: '2\n0 false', output: 'TRUTHY: 0 FALSY: 2', explanation: 'Both falsy.' },
    { input: '2\na b', output: 'TRUTHY: 2 FALSY: 0', explanation: 'Both truthy.' }
  ],
  testCases: createTC('js-dt-3', [
    ['5\nhello 0 true null 42', 'TRUTHY: 3 FALSY: 2'],
    ['2\n0 false', 'TRUTHY: 0 FALSY: 2'],
    ['2\na b', 'TRUTHY: 2 FALSY: 0'],
    ['4\n1 2 3 4', 'TRUTHY: 4 FALSY: 0'],
    ['3\nnull undefined NaN', 'TRUTHY: 0 FALSY: 3'],
    ['4\ncode 0 test false', 'TRUTHY: 2 FALSY: 2'],
    ['1\nactive', 'TRUTHY: 1 FALSY: 0'],
    ['1\n0', 'TRUTHY: 0 FALSY: 1'],
    ['6\ntrue false true false 1 0', 'TRUTHY: 3 FALSY: 3'],
    ['3\nx y 0', 'TRUTHY: 2 FALSY: 1']
  ])
});

// 3. js-operators-and-equality (3 problems)
addProblem({
  id: 'js-op-1',
  topicId: 'js-operators-and-equality',
  level: 'beginner',
  title: 'Strict Equality (===) vs Loose Equality (==)',
  difficulty: 'easy',
  problemStatement: 'Given token A and token B, compare them: check loose equality A == B (with coercion if one is number and other is string representation) and strict equality A === B (matching value and type). Print "LOOSE: <bool> STRICT: <bool>".',
  inputFormat: 'Two space-separated tokens A and B.',
  outputFormat: 'Print "LOOSE: <true/false> STRICT: <true/false>".',
  constraints: ['Token length <= 50'],
  examples: [
    { input: '5 5', output: 'LOOSE: true STRICT: true', explanation: 'Identical.' },
    { input: '5 6', output: 'LOOSE: false STRICT: false', explanation: 'Different.' },
    { input: 'true true', output: 'LOOSE: true STRICT: true', explanation: 'Both true.' }
  ],
  testCases: createTC('js-op-1', [
    ['5 5', 'LOOSE: true STRICT: true'],
    ['5 6', 'LOOSE: false STRICT: false'],
    ['true true', 'LOOSE: true STRICT: true'],
    ['abc abc', 'LOOSE: true STRICT: true'],
    ['10 20', 'LOOSE: false STRICT: false'],
    ['0 0', 'LOOSE: true STRICT: true'],
    ['hello world', 'LOOSE: false STRICT: false'],
    ['false false', 'LOOSE: true STRICT: true'],
    ['42 42', 'LOOSE: true STRICT: true'],
    ['yes no', 'LOOSE: false STRICT: false']
  ])
});

addProblem({
  id: 'js-op-2',
  topicId: 'js-operators-and-equality',
  level: 'beginner',
  title: 'Nullish Coalescing (??) and Logical OR (||)',
  difficulty: 'easy',
  problemStatement: 'Simulate value ?? defaultValue: If value is "null" or "undefined", output defaultValue. Otherwise output value.',
  inputFormat: 'Value and defaultValue.',
  outputFormat: 'Print resolved value.',
  constraints: ['Strings <= 50 chars.'],
  examples: [
    { input: 'null DefaultVal', output: 'DefaultVal', explanation: 'Null coalesced.' },
    { input: 'User101 Guest', output: 'User101', explanation: 'User101 is valid.' },
    { input: 'undefined Fallback', output: 'Fallback', explanation: 'Undefined coalesced.' }
  ],
  testCases: createTC('js-op-2', [
    ['null DefaultVal', 'DefaultVal'],
    ['User101 Guest', 'User101'],
    ['undefined Fallback', 'Fallback'],
    ['Active Inactive', 'Active'],
    ['null 100', '100'],
    ['0 50', '0'],
    ['undefined Anon', 'Anon'],
    ['Custom System', 'Custom'],
    ['null Root', 'Root'],
    ['Value Default', 'Value']
  ])
});

addProblem({
  id: 'js-op-3',
  topicId: 'js-operators-and-equality',
  level: 'beginner',
  title: 'Ternary Operator Score Evaluator',
  difficulty: 'medium',
  problemStatement: 'Given score S (0 to 100), use ternary operator: S >= 50 ? "PASS" : "FAIL". If S >= 80, append " WITH DISTINCTION". Print outcome.',
  inputFormat: 'An integer score S.',
  outputFormat: 'Print evaluation string.',
  constraints: ['0 <= S <= 100'],
  examples: [
    { input: '85', output: 'PASS WITH DISTINCTION', explanation: '>= 80.' },
    { input: '60', output: 'PASS', explanation: 'Between 50 and 79.' },
    { input: '40', output: 'FAIL', explanation: '< 50.' }
  ],
  testCases: createTC('js-op-3', [
    ['85', 'PASS WITH DISTINCTION'],
    ['60', 'PASS'],
    ['40', 'FAIL'],
    ['100', 'PASS WITH DISTINCTION'],
    ['80', 'PASS WITH DISTINCTION'],
    ['50', 'PASS'],
    ['49', 'FAIL'],
    ['0', 'FAIL'],
    ['79', 'PASS'],
    ['90', 'PASS WITH DISTINCTION']
  ])
});

// 4. js-functions-and-arrow-syntax (4 problems)
addProblem({
  id: 'js-fn-1',
  topicId: 'js-functions-and-arrow-syntax',
  level: 'beginner',
  title: 'Arrow Function for String Reversal',
  difficulty: 'easy',
  problemStatement: 'Write an arrow function const rev = s => s.split("").reverse().join(""). Reverse given string S and print it.',
  inputFormat: 'A string S.',
  outputFormat: 'Print reversed string.',
  constraints: ['1 <= len(S) <= 10^5'],
  examples: [
    { input: 'javascript', output: 'tpircsavaj', explanation: 'Reversed.' },
    { input: 'hello', output: 'olleh', explanation: 'Reversed.' },
    { input: 'racecar', output: 'racecar', explanation: 'Palindrome reversed.' }
  ],
  testCases: createTC('js-fn-1', [
    ['javascript', 'tpircsavaj'],
    ['hello', 'olleh'],
    ['racecar', 'racecar'],
    ['world', 'dlrow'],
    ['code', 'edoc'],
    ['12345', '54321'],
    ['antigravity', 'ytivargitna'],
    ['arrow', 'worra'],
    ['a', 'a'],
    ['madam', 'madam']
  ])
});

addProblem({
  id: 'js-fn-2',
  topicId: 'js-functions-and-arrow-syntax',
  level: 'beginner',
  title: 'Calculate Factorial with Function',
  difficulty: 'easy',
  problemStatement: 'Implement factorial function factorial(n). Return n! as BigInt or integer. 0! = 1.',
  inputFormat: 'A non-negative integer N.',
  outputFormat: 'Print N!.',
  constraints: ['0 <= N <= 18'],
  examples: [
    { input: '5', output: '120', explanation: '5! = 120.' },
    { input: '0', output: '1', explanation: '0! = 1.' },
    { input: '3', output: '6', explanation: '3! = 6.' }
  ],
  testCases: createTC('js-fn-2', [
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
  id: 'js-fn-3',
  topicId: 'js-functions-and-arrow-syntax',
  level: 'beginner',
  title: 'Default Parameters in Greeting Function',
  difficulty: 'medium',
  problemStatement: 'Implement greet(name = "Guest", greeting = "Hello"). Given input line, if name is "-", use default "Guest". If greeting is "-", use default "Hello". Print "<greeting>, <name>!".',
  inputFormat: 'Name and greeting tokens.',
  outputFormat: 'Print greeting string.',
  constraints: ['Tokens <= 50 chars.'],
  examples: [
    { input: 'Alice Hi', output: 'Hi, Alice!', explanation: 'Both provided.' },
    { input: '- -', output: 'Hello, Guest!', explanation: 'Both default.' },
    { input: 'Bob -', output: 'Hello, Bob!', explanation: 'Default greeting.' }
  ],
  testCases: createTC('js-fn-3', [
    ['Alice Hi', 'Hi, Alice!'],
    ['- -', 'Hello, Guest!'],
    ['Bob -', 'Hello, Bob!'],
    ['- Welcome', 'Welcome, Guest!'],
    ['Charlie Hey', 'Hey, Charlie!'],
    ['David Greetings', 'Greetings, David!'],
    ['Emma -', 'Hello, Emma!'],
    ['- Bonjour', 'Bonjour, Guest!'],
    ['Frank Howdy', 'Howdy, Frank!'],
    ['Grace -', 'Hello, Grace!']
  ])
});

addProblem({
  id: 'js-fn-4',
  topicId: 'js-functions-and-arrow-syntax',
  level: 'beginner',
  title: 'Curry Function for Binary Addition',
  difficulty: 'medium',
  problemStatement: 'Implement a curried addition function const add = a => b => a + b. Given two integers A and B, evaluate add(A)(B). Print the result.',
  inputFormat: 'Two space-separated integers A and B.',
  outputFormat: 'Print sum.',
  constraints: ['-10^9 <= A, B <= 10^9'],
  examples: [
    { input: '10 20', output: '30', explanation: 'add(10)(20) = 30.' },
    { input: '0 5', output: '5', explanation: '0 + 5 = 5.' },
    { input: '-5 5', output: '0', explanation: '-5 + 5 = 0.' }
  ],
  testCases: createTC('js-fn-4', [
    ['10 20', '30'],
    ['0 5', '5'],
    ['-5 5', '0'],
    ['100 200', '300'],
    ['-10 -20', '-30'],
    ['42 8', '50'],
    ['1 1', '2'],
    ['500 500', '1000'],
    ['99 1', '100'],
    ['123 456', '579']
  ])
});

// 5. js-scope-and-hoisting (3 problems)
addProblem({
  id: 'js-scp-1',
  topicId: 'js-scope-and-hoisting',
  level: 'beginner',
  title: 'Block Scope vs Function Scope Simulation',
  difficulty: 'easy',
  problemStatement: 'Given initial value X and delta D inside an if block, let variables shadow outer variables. If isBlockScope is 1, outer variable remains X. If 0 (var behavior), outer becomes X + D. Print "Final: <val>".',
  inputFormat: 'Initial X, delta D, and flag isBlockScope (1 or 0).',
  outputFormat: 'Print "Final: <val>".',
  constraints: ['-10^5 <= X, D <= 10^5'],
  examples: [
    { input: '10 5 1', output: 'Final: 10', explanation: 'Block scope preserves outer 10.' },
    { input: '10 5 0', output: 'Final: 15', explanation: 'Var reassigns outer to 15.' },
    { input: '0 20 1', output: 'Final: 0', explanation: 'Outer is 0.' }
  ],
  testCases: createTC('js-scp-1', [
    ['10 5 1', 'Final: 10'],
    ['10 5 0', 'Final: 15'],
    ['0 20 1', 'Final: 0'],
    ['0 20 0', 'Final: 20'],
    ['50 -10 1', 'Final: 50'],
    ['50 -10 0', 'Final: 40'],
    ['100 50 1', 'Final: 100'],
    ['100 50 0', 'Final: 150'],
    ['5 5 1', 'Final: 5'],
    ['5 5 0', 'Final: 10']
  ])
});

addProblem({
  id: 'js-scp-2',
  topicId: 'js-scope-and-hoisting',
  level: 'beginner',
  title: 'Variable Shadowing in Nested Functions',
  difficulty: 'medium',
  problemStatement: 'Simulate variable shadowing: Global G = 100. Function inner shadows G with local value L. Print "Inner: <L> Outer: <G>".',
  inputFormat: 'Global G and local L.',
  outputFormat: 'Print "Inner: <L> Outer: <G>".',
  constraints: ['-10^5 <= G, L <= 10^5'],
  examples: [
    { input: '100 25', output: 'Inner: 25 Outer: 100', explanation: 'Inner shadowed.' },
    { input: '50 50', output: 'Inner: 50 Outer: 50', explanation: 'Equal values.' },
    { input: '0 10', output: 'Inner: 10 Outer: 0', explanation: 'Inner 10.' }
  ],
  testCases: createTC('js-scp-2', [
    ['100 25', 'Inner: 25 Outer: 100'],
    ['50 50', 'Inner: 50 Outer: 50'],
    ['0 10', 'Inner: 10 Outer: 0'],
    ['-10 20', 'Inner: 20 Outer: -10'],
    ['42 99', 'Inner: 99 Outer: 42'],
    ['5 1', 'Inner: 1 Outer: 5'],
    ['1000 500', 'Inner: 500 Outer: 1000'],
    ['7 77', 'Inner: 77 Outer: 7'],
    ['20 -20', 'Inner: -20 Outer: 20'],
    ['12 34', 'Inner: 34 Outer: 12']
  ])
});

addProblem({
  id: 'js-scp-3',
  topicId: 'js-scope-and-hoisting',
  level: 'beginner',
  title: 'Simulating Temporal Dead Zone (TDZ)',
  difficulty: 'medium',
  problemStatement: 'Simulate TDZ access: Given variable type ("var" or "let"), accessing before initialization outputs: for "var" -> "undefined", for "let" -> "ReferenceError: Cannot access before initialization".',
  inputFormat: 'Type string ("var" or "let").',
  outputFormat: 'Print outcome string.',
  constraints: ['"var" or "let".'],
  examples: [
    { input: 'var', output: 'undefined', explanation: 'Hoisted with undefined.' },
    { input: 'let', output: 'ReferenceError: Cannot access before initialization', explanation: 'TDZ throws error.' },
    { input: 'var', output: 'undefined', explanation: 'Hoisted.' }
  ],
  testCases: createTC('js-scp-3', [
    ['var', 'undefined'],
    ['let', 'ReferenceError: Cannot access before initialization'],
    ['var', 'undefined'],
    ['let', 'ReferenceError: Cannot access before initialization'],
    ['var', 'undefined'],
    ['let', 'ReferenceError: Cannot access before initialization'],
    ['var', 'undefined'],
    ['let', 'ReferenceError: Cannot access before initialization'],
    ['var', 'undefined'],
    ['let', 'ReferenceError: Cannot access before initialization']
  ])
});

// 6. js-arrays-and-methods (4 problems)
addProblem({
  id: 'js-arr-1',
  topicId: 'js-arrays-and-methods',
  level: 'beginner',
  title: 'Array Push, Pop, Shift, and Unshift Operations',
  difficulty: 'easy',
  problemStatement: 'Start with empty array. Process N operations: "PUSH <val>", "POP", "SHIFT", "UNSHIFT <val>". Print the final array elements separated by space. If empty, print "EMPTY".',
  inputFormat: 'First line N, next N lines operations.',
  outputFormat: 'Print space-separated elements or "EMPTY".',
  constraints: ['1 <= N <= 1000'],
  examples: [
    { input: '4\nPUSH 1\nPUSH 2\nPOP\nPUSH 3', output: '1 3', explanation: '1, 2 pushed, 2 popped, 3 pushed -> 1 3.' },
    { input: '2\nPUSH A\nSHIFT', output: 'EMPTY', explanation: 'Pushed then shifted.' },
    { input: '3\nUNSHIFT X\nPUSH Y\nUNSHIFT Z', output: 'Z X Y', explanation: 'Unshifted front.' }
  ],
  testCases: createTC('js-arr-1', [
    ['4\nPUSH 1\nPUSH 2\nPOP\nPUSH 3', '1 3'],
    ['2\nPUSH A\nSHIFT', 'EMPTY'],
    ['3\nUNSHIFT X\nPUSH Y\nUNSHIFT Z', 'Z X Y'],
    ['3\nPUSH 10\nPUSH 20\nPUSH 30', '10 20 30'],
    ['2\nPOP\nPOP', 'EMPTY'],
    ['4\nPUSH 5\nUNSHIFT 4\nPUSH 6\nSHIFT', '5 6'],
    ['3\nPUSH 100\nPOP\nPUSH 200', '200'],
    ['2\nUNSHIFT A\nPUSH B', 'A B'],
    ['4\nPUSH 1\nPUSH 2\nSHIFT\nPOP', 'EMPTY'],
    ['5\nPUSH 10\nPUSH 20\nPUSH 30\nPOP\nUNSHIFT 5', '5 10 20']
  ])
});

addProblem({
  id: 'js-arr-2',
  topicId: 'js-arrays-and-methods',
  level: 'beginner',
  title: 'Find Maximum and Minimum Element in Array',
  difficulty: 'easy',
  problemStatement: 'Given N integers, use Math.max(...arr) and Math.min(...arr) to find maximum and minimum. Print "Max: <max> Min: <min>".',
  inputFormat: 'First line N, second line N space-separated integers.',
  outputFormat: 'Print "Max: <max> Min: <min>".',
  constraints: ['1 <= N <= 10^5'],
  examples: [
    { input: '5\n1 5 3 9 2', output: 'Max: 9 Min: 1', explanation: 'Max 9, min 1.' },
    { input: '3\n-5 -2 -10', output: 'Max: -2 Min: -10', explanation: 'Negatives.' },
    { input: '1\n100', output: 'Max: 100 Min: 100', explanation: 'Single element.' }
  ],
  testCases: createTC('js-arr-2', [
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
  id: 'js-arr-3',
  topicId: 'js-arrays-and-methods',
  level: 'beginner',
  title: 'Array Slice vs Splice Operations',
  difficulty: 'medium',
  problemStatement: 'Given N integers, start index S, and count C: Use slice(S, S+C) to extract a subsegment, then use splice(S, C) to remove it from the original array. Print "Extracted: <extracted> Remaining: <remaining>".',
  inputFormat: 'First line N S C, second line N integers.',
  outputFormat: 'Print "Extracted: <items> Remaining: <items>".',
  constraints: ['1 <= N <= 1000', '0 <= S < N'],
  examples: [
    { input: '5 1 2\n10 20 30 40 50', output: 'Extracted: 20 30 Remaining: 10 40 50', explanation: '20, 30 extracted.' },
    { input: '3 0 1\n1 2 3', output: 'Extracted: 1 Remaining: 2 3', explanation: 'First item.' },
    { input: '4 2 2\n5 6 7 8', output: 'Extracted: 7 8 Remaining: 5 6', explanation: 'Last two items.' }
  ],
  testCases: createTC('js-arr-3', [
    ['5 1 2\n10 20 30 40 50', 'Extracted: 20 30 Remaining: 10 40 50'],
    ['3 0 1\n1 2 3', 'Extracted: 1 Remaining: 2 3'],
    ['4 2 2\n5 6 7 8', 'Extracted: 7 8 Remaining: 5 6'],
    ['5 0 3\n1 2 3 4 5', 'Extracted: 1 2 3 Remaining: 4 5'],
    ['4 1 1\n10 20 30 40', 'Extracted: 20 Remaining: 10 30 40'],
    ['3 1 2\nA B C', 'Extracted: B C Remaining: A'],
    ['2 0 2\nX Y', 'Extracted: X Y Remaining: '],
    ['6 2 3\n1 2 3 4 5 6', 'Extracted: 3 4 5 Remaining: 1 2 6'],
    ['4 3 1\n10 20 30 40', 'Extracted: 40 Remaining: 10 20 30'],
    ['5 2 1\n7 8 9 10 11', 'Extracted: 9 Remaining: 7 8 10 11']
  ])
});

addProblem({
  id: 'js-arr-4',
  topicId: 'js-arrays-and-methods',
  level: 'beginner',
  title: 'Flatten Array by One Level using flat()',
  difficulty: 'medium',
  problemStatement: 'Given a nested array of integers represented as rows, use arr.flat() to flatten into 1D array. Print space-separated elements.',
  inputFormat: 'First line R (number of rows), next R lines each contain space-separated integers.',
  outputFormat: 'Print flattened space-separated values.',
  constraints: ['1 <= R <= 100'],
  examples: [
    { input: '2\n1 2 3\n4 5 6', output: '1 2 3 4 5 6', explanation: 'Flattened.' },
    { input: '3\n10\n20\n30', output: '10 20 30', explanation: 'Flattened columns.' },
    { input: '1\n5 6 7', output: '5 6 7', explanation: 'Single row.' }
  ],
  testCases: createTC('js-arr-4', [
    ['2\n1 2 3\n4 5 6', '1 2 3 4 5 6'],
    ['3\n10\n20\n30', '10 20 30'],
    ['1\n5 6 7', '5 6 7'],
    ['3\n1 2\n3 4\n5 6', '1 2 3 4 5 6'],
    ['2\n-1 -2\n-3 -4', '-1 -2 -3 -4'],
    ['4\n1\n2\n3\n4', '1 2 3 4'],
    ['2\n100 200\n300 400', '100 200 300 400'],
    ['1\n42', '42'],
    ['3\n7 8 9\n10 11 12\n13 14 15', '7 8 9 10 11 12 13 14 15'],
    ['2\n0 0\n1 1', '0 0 1 1']
  ])
});

// 7. js-objects-and-properties (3 problems)
addProblem({
  id: 'js-obj-1',
  topicId: 'js-objects-and-properties',
  level: 'beginner',
  title: 'Object Property Access and Dynamic Keys',
  difficulty: 'easy',
  problemStatement: 'Given N key-value pairs forming an object and query key Q, lookup object[Q]. If present, print "Found: <val>", else print "Key Not Found".',
  inputFormat: 'First line N, next N lines "key value", last line Q.',
  outputFormat: 'Print "Found: <val>" or "Key Not Found".',
  constraints: ['1 <= N <= 1000'],
  examples: [
    { input: '2\nname Alice\nage 25\nname', output: 'Found: Alice', explanation: 'name found.' },
    { input: '1\nrole admin\nuser', output: 'Key Not Found', explanation: 'user not in object.' },
    { input: '2\nk1 v1\nk2 v2\nk2', output: 'Found: v2', explanation: 'k2 found.' }
  ],
  testCases: createTC('js-obj-1', [
    ['2\nname Alice\nage 25\nname', 'Found: Alice'],
    ['1\nrole admin\nuser', 'Key Not Found'],
    ['2\nk1 v1\nk2 v2\nk2', 'Found: v2'],
    ['3\na 1\nb 2\nc 3\nb', 'Found: 2'],
    ['2\nx 10\ny 20\nz', 'Key Not Found'],
    ['1\ntitle Manager\ntitle', 'Found: Manager'],
    ['3\nid 101\nstatus ok\nenv prod\nenv', 'Found: prod'],
    ['2\np 5\nq 6\nr', 'Key Not Found'],
    ['1\nalpha beta\ngamma', 'Key Not Found'],
    ['3\nred 1\ngreen 2\nblue 3\nblue', 'Found: 3']
  ])
});

addProblem({
  id: 'js-obj-2',
  topicId: 'js-objects-and-properties',
  level: 'beginner',
  title: 'Count Keys and Values with Object.keys and Object.values',
  difficulty: 'easy',
  problemStatement: 'Given N key-value pairs, print "Key Count: <Object.keys(obj).length> Total Value Length: <sum of string value lengths>".',
  inputFormat: 'First line N, next N lines "key value".',
  outputFormat: 'Print "Key Count: <K> Total Value Length: <L>".',
  constraints: ['1 <= N <= 1000'],
  examples: [
    { input: '2\nname Bob\ncity Paris', output: 'Key Count: 2 Total Value Length: 8', explanation: 'Bob (3) + Paris (5) = 8.' },
    { input: '1\nx cat', output: 'Key Count: 1 Total Value Length: 3', explanation: 'cat is len 3.' },
    { input: '3\na 123\nb 45\nc 6', output: 'Key Count: 3 Total Value Length: 6', explanation: '3+2+1 = 6.' }
  ],
  testCases: createTC('js-obj-2', [
    ['2\nname Bob\ncity Paris', 'Key Count: 2 Total Value Length: 8'],
    ['1\nx cat', 'Key Count: 1 Total Value Length: 3'],
    ['3\na 123\nb 45\nc 6', 'Key Count: 3 Total Value Length: 6'],
    ['2\nfirst John\nlast Doe', 'Key Count: 2 Total Value Length: 7'],
    ['4\nk1 a\nk2 bb\nk3 ccc\nk4 dddd', 'Key Count: 4 Total Value Length: 10'],
    ['1\nkey test', 'Key Count: 1 Total Value Length: 4'],
    ['3\nx hello\ny world\nz python', 'Key Count: 3 Total Value Length: 16'],
    ['2\nu 10\nv 20', 'Key Count: 2 Total Value Length: 4'],
    ['1\nsolo lone', 'Key Count: 1 Total Value Length: 4'],
    ['3\na alpha\nb beta\nc gamma', 'Key Count: 3 Total Value Length: 14']
  ])
});

addProblem({
  id: 'js-obj-3',
  topicId: 'js-objects-and-properties',
  level: 'beginner',
  title: 'Object Deep Clone Utility in JavaScript',
  difficulty: 'medium',
  problemStatement: 'Simulate structuredClone(obj): Given nested JSON object {"user": {"name": "..."}, "id": ...}, clone it, mutate clone\'s user.name to newName. Print original user name and cloned user name "Original: <orig> Cloned: <newName>".',
  inputFormat: 'Original name and new name.',
  outputFormat: 'Print "Original: <orig> Cloned: <new>".',
  constraints: ['Strings <= 50 chars.'],
  examples: [
    { input: 'Alice Bob', output: 'Original: Alice Cloned: Bob', explanation: 'Original unchanged.' },
    { input: 'John Jane', output: 'Original: John Cloned: Jane', explanation: 'Cloned modified.' },
    { input: 'Admin Super', output: 'Original: Admin Cloned: Super', explanation: 'Deep clone isolation.' }
  ],
  testCases: createTC('js-obj-3', [
    ['Alice Bob', 'Original: Alice Cloned: Bob'],
    ['John Jane', 'Original: John Cloned: Jane'],
    ['Admin Super', 'Original: Admin Cloned: Super'],
    ['Charlie Dan', 'Original: Charlie Cloned: Dan'],
    ['Guest User', 'Original: Guest Cloned: User'],
    ['Emma Frank', 'Original: Emma Cloned: Frank'],
    ['Dev Prod', 'Original: Dev Cloned: Prod'],
    ['Tom Jerry', 'Original: Tom Cloned: Jerry'],
    ['Alpha Beta', 'Original: Alpha Cloned: Beta'],
    ['Node Browser', 'Original: Node Cloned: Browser']
  ])
});

// 8. js-error-handling-try-catch (3 problems)
addProblem({
  id: 'js-err-1',
  topicId: 'js-error-handling-try-catch',
  level: 'beginner',
  title: 'Safe JSON Parse with Default Fallback',
  difficulty: 'easy',
  problemStatement: 'Given JSON string S, try to parse it with JSON.parse(). If parsing fails with SyntaxError, catch and print "INVALID JSON". If valid, print "VALID JSON".',
  inputFormat: 'A string S.',
  outputFormat: 'Print "VALID JSON" or "INVALID JSON".',
  constraints: ['1 <= len(S) <= 10^4'],
  examples: [
    { input: '{"name": "Alice"}', output: 'VALID JSON', explanation: 'Valid JSON.' },
    { input: '{name: Alice}', output: 'INVALID JSON', explanation: 'Unquoted keys.' },
    { input: '[1, 2, 3]', output: 'VALID JSON', explanation: 'Valid array.' }
  ],
  testCases: createTC('js-err-1', [
    ['{"name": "Alice"}', 'VALID JSON'],
    ['{name: Alice}', 'INVALID JSON'],
    ['[1, 2, 3]', 'VALID JSON'],
    ['{"age": 25}', 'VALID JSON'],
    ['invalid', 'INVALID JSON'],
    ['{"a": 1, "b": 2}', 'VALID JSON'],
    ['{ unclosed', 'INVALID JSON'],
    ['42', 'VALID JSON'],
    ['"hello"', 'VALID JSON'],
    ['{ key: 1 }', 'INVALID JSON']
  ])
});

addProblem({
  id: 'js-err-2',
  topicId: 'js-error-handling-try-catch',
  level: 'beginner',
  title: 'Custom ValidationError Throw and Catch',
  difficulty: 'medium',
  problemStatement: 'Given integer age, if age < 0 or age > 120, throw new Error("Age out of bounds"). Catch and print error message. If valid, print "Valid Age: <age>".',
  inputFormat: 'An integer age.',
  outputFormat: 'Print outcome.',
  constraints: ['-1000 <= age <= 1000'],
  examples: [
    { input: '25', output: 'Valid Age: 25', explanation: 'Valid.' },
    { input: '-5', output: 'Age out of bounds', explanation: 'Caught error.' },
    { input: '150', output: 'Age out of bounds', explanation: 'Age > 120.' }
  ],
  testCases: createTC('js-err-2', [
    ['25', 'Valid Age: 25'],
    ['-5', 'Age out of bounds'],
    ['150', 'Age out of bounds'],
    ['0', 'Valid Age: 0'],
    ['120', 'Valid Age: 120'],
    ['50', 'Valid Age: 50'],
    ['-1', 'Age out of bounds'],
    ['121', 'Age out of bounds'],
    ['99', 'Valid Age: 99'],
    ['42', 'Valid Age: 42']
  ])
});

addProblem({
  id: 'js-err-3',
  topicId: 'js-error-handling-try-catch',
  level: 'beginner',
  title: 'Finally Block Guaranteed Execution',
  difficulty: 'medium',
  problemStatement: 'In try/catch/finally block: Read number N. If N == 0, throw error "ZERO ERROR". In finally block, always print "CLEANUP COMPLETE". Output result or caught error, followed by finally message.',
  inputFormat: 'An integer N.',
  outputFormat: 'Print status, followed on new line by "CLEANUP COMPLETE".',
  constraints: ['-10^5 <= N <= 10^5'],
  examples: [
    { input: '10', output: 'OK: 10\nCLEANUP COMPLETE', explanation: 'No error, finally executed.' },
    { input: '0', output: 'ZERO ERROR\nCLEANUP COMPLETE', explanation: 'Error caught, finally executed.' },
    { input: '-5', output: 'OK: -5\nCLEANUP COMPLETE', explanation: 'Finally executed.' }
  ],
  testCases: createTC('js-err-3', [
    ['10', 'OK: 10\nCLEANUP COMPLETE'],
    ['0', 'ZERO ERROR\nCLEANUP COMPLETE'],
    ['-5', 'OK: -5\nCLEANUP COMPLETE'],
    ['42', 'OK: 42\nCLEANUP COMPLETE'],
    ['100', 'OK: 100\nCLEANUP COMPLETE'],
    ['1', 'OK: 1\nCLEANUP COMPLETE'],
    ['-100', 'OK: -100\nCLEANUP COMPLETE'],
    ['25', 'OK: 25\nCLEANUP COMPLETE'],
    ['99', 'OK: 99\nCLEANUP COMPLETE'],
    ['7', 'OK: 7\nCLEANUP COMPLETE']
  ])
});

console.log('Processed beginner javascript problems. Total so far:', problems.length);

// -------------------------------------------------------------
// INTERMEDIATE
// -------------------------------------------------------------

// 9. js-destructuring-spread-rest (3 problems)
addProblem({
  id: 'js-dsr-1',
  topicId: 'js-destructuring-spread-rest',
  level: 'intermediate',
  title: 'Array and Object Destructuring with Renaming',
  difficulty: 'easy',
  problemStatement: 'Given { fn: "<firstName>", ln: "<lastName>" }, destructure with renaming { fn: firstName, ln: lastName }. Print "Full Name: <firstName> <lastName>".',
  inputFormat: 'Two space-separated strings fn and ln.',
  outputFormat: 'Print "Full Name: <firstName> <lastName>".',
  constraints: ['Strings <= 50 chars.'],
  examples: [
    { input: 'John Doe', output: 'Full Name: John Doe', explanation: 'Destructured.' },
    { input: 'Alice Smith', output: 'Full Name: Alice Smith', explanation: 'Destructured.' },
    { input: 'Ada Lovelace', output: 'Full Name: Ada Lovelace', explanation: 'Destructured.' }
  ],
  testCases: createTC('js-dsr-1', [
    ['John Doe', 'Full Name: John Doe'],
    ['Alice Smith', 'Full Name: Alice Smith'],
    ['Ada Lovelace', 'Full Name: Ada Lovelace'],
    ['Alan Turing', 'Full Name: Alan Turing'],
    ['Grace Hopper', 'Full Name: Grace Hopper'],
    ['Bob Ross', 'Full Name: Bob Ross'],
    ['Charlie Brown', 'Full Name: Charlie Brown'],
    ['David Bowie', 'Full Name: David Bowie'],
    ['Emma Watson', 'Full Name: Emma Watson'],
    ['Frank Sinatra', 'Full Name: Frank Sinatra']
  ])
});

addProblem({
  id: 'js-dsr-2',
  topicId: 'js-destructuring-spread-rest',
  level: 'intermediate',
  title: 'Merge Multiple Objects with Spread Operator',
  difficulty: 'medium',
  problemStatement: 'Merge two objects obj1 and obj2 using {...obj1, ...obj2}. Print sorted "key:val" pairs. In case of duplicate keys, obj2 value overwrites obj1.',
  inputFormat: 'Line 1: N pairs for obj1, Line 2: M pairs for obj2.',
  outputFormat: 'Print space-separated sorted "key:val" pairs.',
  constraints: ['1 <= N, M <= 100'],
  examples: [
    { input: '2 a 1 b 2\n2 b 3 c 4', output: 'a:1 b:3 c:4', explanation: 'b overwritten with 3.' },
    { input: '1 x 10\n1 y 20', output: 'x:10 y:20', explanation: 'Merged.' },
    { input: '1 k v1\n1 k v2', output: 'k:v2', explanation: 'Overwritten.' }
  ],
  testCases: createTC('js-dsr-2', [
    ['2 a 1 b 2\n2 b 3 c 4', 'a:1 b:3 c:4'],
    ['1 x 10\n1 y 20', 'x:10 y:20'],
    ['1 k v1\n1 k v2', 'k:v2'],
    ['3 p 1 q 2 r 3\n1 s 4', 'p:1 q:2 r:3 s:4'],
    ['2 name Old role Admin\n1 name New', 'name:New role:Admin'],
    ['2 a 10 b 20\n2 a 30 b 40', 'a:30 b:40'],
    ['1 id 100\n1 id 200', 'id:200'],
    ['3 x 1 y 2 z 3\n2 y 20 z 30', 'x:1 y:20 z:30'],
    ['2 u 5 v 5\n1 w 5', 'u:5 v:5 w:5'],
    ['1 alpha 1\n1 beta 2', 'alpha:1 beta:2']
  ])
});

addProblem({
  id: 'js-dsr-3',
  topicId: 'js-destructuring-spread-rest',
  level: 'intermediate',
  title: 'Variable Arguments Sum with Rest Parameter',
  difficulty: 'medium',
  problemStatement: 'Implement sum(...args) using rest parameters. Given N integers, compute their sum. Print "Sum: <sum>".',
  inputFormat: 'First line N, second line N space-separated integers.',
  outputFormat: 'Print "Sum: <sum>".',
  constraints: ['0 <= N <= 10^4'],
  examples: [
    { input: '4\n1 2 3 4', output: 'Sum: 10', explanation: '1+2+3+4 = 10.' },
    { input: '0', output: 'Sum: 0', explanation: 'Empty sum is 0.' },
    { input: '3\n10 20 30', output: 'Sum: 60', explanation: 'Sum 60.' }
  ],
  testCases: createTC('js-dsr-3', [
    ['4\n1 2 3 4', 'Sum: 10'],
    ['0', 'Sum: 0'],
    ['3\n10 20 30', 'Sum: 60'],
    ['5\n5 5 5 5 5', 'Sum: 25'],
    ['4\n-10 10 -20 20', 'Sum: 0'],
    ['1\n42', 'Sum: 42'],
    ['5\n100 200 300 400 500', 'Sum: 1500'],
    ['2\n-5 -15', 'Sum: -20'],
    ['3\n7 8 9', 'Sum: 24'],
    ['6\n1 1 1 1 1 1', 'Sum: 6']
  ])
});

// 10. js-array-functional-methods (4 problems)
addProblem({
  id: 'js-afm-1',
  topicId: 'js-array-functional-methods',
  level: 'intermediate',
  title: 'Double Even Numbers with map and filter',
  difficulty: 'easy',
  problemStatement: 'Given N integers, use filter(x => x % 2 === 0).map(x => x * 2). Print space-separated doubled evens. If none, print "NONE".',
  inputFormat: 'First line N, second line N space-separated integers.',
  outputFormat: 'Print space-separated doubled evens or "NONE".',
  constraints: ['1 <= N <= 10^4'],
  examples: [
    { input: '5\n1 2 3 4 5', output: '4 8', explanation: '2*2=4, 4*2=8.' },
    { input: '3\n1 3 5', output: 'NONE', explanation: 'No evens.' },
    { input: '3\n2 4 6', output: '4 8 12', explanation: 'All doubled.' }
  ],
  testCases: createTC('js-afm-1', [
    ['5\n1 2 3 4 5', '4 8'],
    ['3\n1 3 5', 'NONE'],
    ['3\n2 4 6', '4 8 12'],
    ['1\n8', '16'],
    ['4\n0 1 2 3', '0 4'],
    ['5\n-2 3 -4 5 6', '-4 -8 12'],
    ['4\n7 9 11 13', 'NONE'],
    ['6\n10 15 20 25 30 35', '20 40 60'],
    ['2\n4 4', '8 8'],
    ['5\n2 2 2 2 2', '4 4 4 4 4']
  ])
});

addProblem({
  id: 'js-afm-2',
  topicId: 'js-array-functional-methods',
  level: 'intermediate',
  title: 'Sum of Array Elements with reduce',
  difficulty: 'easy',
  problemStatement: 'Given N integers, use arr.reduce((acc, curr) => acc + curr, 0) to compute sum. Print "Sum: <sum>".',
  inputFormat: 'First line N, second line N space-separated integers.',
  outputFormat: 'Print "Sum: <sum>".',
  constraints: ['1 <= N <= 10^5'],
  examples: [
    { input: '4\n1 2 3 4', output: 'Sum: 10', explanation: '1+2+3+4 = 10.' },
    { input: '3\n10 20 30', output: 'Sum: 60', explanation: 'Sum 60.' },
    { input: '1\n50', output: 'Sum: 50', explanation: 'Single element.' }
  ],
  testCases: createTC('js-afm-2', [
    ['4\n1 2 3 4', 'Sum: 10'],
    ['3\n10 20 30', 'Sum: 60'],
    ['1\n50', 'Sum: 50'],
    ['5\n5 5 5 5 5', 'Sum: 25'],
    ['4\n-10 10 -20 20', 'Sum: 0'],
    ['5\n10 15 20 25 30', 'Sum: 100'],
    ['3\n7 8 9', 'Sum: 24'],
    ['5\n1 3 5 7 9', 'Sum: 25'],
    ['2\n100 200', 'Sum: 300'],
    ['6\n2 4 6 8 10 12', 'Sum: 42']
  ])
});

addProblem({
  id: 'js-afm-3',
  topicId: 'js-array-functional-methods',
  level: 'intermediate',
  title: 'Group Objects by Category with reduce',
  difficulty: 'medium',
  problemStatement: 'Given items with name and category, use reduce to count items per category. Print categories sorted alphabetically in format "cat:count" separated by spaces.',
  inputFormat: 'First line N, next N lines each contain name and category.',
  outputFormat: 'Print space-separated sorted "cat:count" pairs.',
  constraints: ['1 <= N <= 1000'],
  examples: [
    { input: '3\nApple Fruit\nBanana Fruit\nCarrot Veg', output: 'Fruit:2 Veg:1', explanation: 'Grouped counts.' },
    { input: '2\nDesk Office\nChair Office', output: 'Office:2', explanation: 'Single category.' },
    { input: '3\nA X\nB Y\nC Z', output: 'X:1 Y:1 Z:1', explanation: '3 categories.' }
  ],
  testCases: createTC('js-afm-3', [
    ['3\nApple Fruit\nBanana Fruit\nCarrot Veg', 'Fruit:2 Veg:1'],
    ['2\nDesk Office\nChair Office', 'Office:2'],
    ['3\nA X\nB Y\nC Z', 'X:1 Y:1 Z:1'],
    ['4\nP1 Tech\nP2 Tech\nP3 Home\nP4 Tech', 'Home:1 Tech:3'],
    ['2\nDog Pet\nCat Pet', 'Pet:2'],
    ['3\nPen Stat\nBook Stat\nShirt Cloth', 'Cloth:1 Stat:2'],
    ['4\nA 1\nB 2\nC 1\nD 2', '1:2 2:2'],
    ['1\nSolo Single', 'Single:1'],
    ['3\nCar Auto\nBike Auto\nBus Auto', 'Auto:3'],
    ['4\nM Food\nN Drink\nO Food\nP Drink', 'Drink:2 Food:2']
  ])
});

addProblem({
  id: 'js-afm-4',
  topicId: 'js-array-functional-methods',
  level: 'intermediate',
  title: 'Find First User Matching Predicate with find',
  difficulty: 'medium',
  problemStatement: 'Given N user records (id, name, score) and threshold T, find the first user with score >= T using arr.find(). Print "Found: <name> Score: <score>". If none, print "NONE".',
  inputFormat: 'First line N and T, next N lines id name score.',
  outputFormat: 'Print found user or "NONE".',
  constraints: ['1 <= N <= 1000'],
  examples: [
    { input: '3 80\n1 Alice 75\n2 Bob 85\n3 Charlie 90', output: 'Found: Bob Score: 85', explanation: 'Bob is first >= 80.' },
    { input: '2 90\n1 Dan 70\n2 Eve 80', output: 'NONE', explanation: 'None >= 90.' },
    { input: '1 50\n1 Solo 60', output: 'Found: Solo Score: 60', explanation: 'First user.' }
  ],
  testCases: createTC('js-afm-4', [
    ['3 80\n1 Alice 75\n2 Bob 85\n3 Charlie 90', 'Found: Bob Score: 85'],
    ['2 90\n1 Dan 70\n2 Eve 80', 'NONE'],
    ['1 50\n1 Solo 60', 'Found: Solo Score: 60'],
    ['4 70\n1 A 50\n2 B 60\n3 C 70\n4 D 80', 'Found: C Score: 70'],
    ['3 100\n1 X 99\n2 Y 99\n3 Z 100', 'Found: Z Score: 100'],
    ['2 60\n1 P 65\n2 Q 62', 'Found: P Score: 65'],
    ['3 85\n1 K 80\n2 L 84\n3 M 83', 'NONE'],
    ['1 10\n1 N 5', 'NONE'],
    ['3 50\n1 T1 45\n2 T2 55\n3 T3 50', 'Found: T2 Score: 55'],
    ['2 0\n1 First 0\n2 Second 10', 'Found: First Score: 0']
  ])
});

// 11. js-closures-and-lexical-scope (3 problems)
addProblem({
  id: 'js-cls-1',
  topicId: 'js-closures-and-lexical-scope',
  level: 'intermediate',
  title: 'Counter with Private State via Closure',
  difficulty: 'easy',
  problemStatement: 'Implement createCounter(init) returning { increment(), decrement(), get() }. Given start value S and sequence of "INC", "DEC" operations, execute them and print final value "Count: <val>".',
  inputFormat: 'First line S and N, second line N space-separated operations.',
  outputFormat: 'Print "Count: <val>".',
  constraints: ['1 <= N <= 1000'],
  examples: [
    { input: '0 3\nINC INC DEC', output: 'Count: 1', explanation: '0+1+1-1 = 1.' },
    { input: '10 2\nDEC DEC', output: 'Count: 8', explanation: '10-1-1 = 8.' },
    { input: '5 1\nINC', output: 'Count: 6', explanation: '5+1 = 6.' }
  ],
  testCases: createTC('js-cls-1', [
    ['0 3\nINC INC DEC', 'Count: 1'],
    ['10 2\nDEC DEC', 'Count: 8'],
    ['5 1\nINC', 'Count: 6'],
    ['100 4\nINC INC INC INC', 'Count: 104'],
    ['0 4\nDEC DEC DEC DEC', 'Count: -4'],
    ['50 2\nINC DEC', 'Count: 50'],
    ['20 3\nINC INC INC', 'Count: 23'],
    ['1 1\nDEC', 'Count: 0'],
    ['10 5\nINC DEC INC DEC INC', 'Count: 11'],
    ['7 3\nDEC INC INC', 'Count: 8']
  ])
});

addProblem({
  id: 'js-cls-2',
  topicId: 'js-closures-and-lexical-scope',
  level: 'intermediate',
  title: 'Memoization Function Wrapper Closure',
  difficulty: 'medium',
  problemStatement: 'Implement memoize(fn) using a closure cache Map. Count how many times the underlying computation actually runs vs served from cache. Given N inputs (with duplicates), print "Runs: <unique_count> Total: <N>".',
  inputFormat: 'First line N, second line N space-separated integers.',
  outputFormat: 'Print "Runs: <unique> Total: <N>".',
  constraints: ['1 <= N <= 1000'],
  examples: [
    { input: '5\n1 2 1 2 3', output: 'Runs: 3 Total: 5', explanation: '1, 2, 3 computed once each.' },
    { input: '3\n5 5 5', output: 'Runs: 1 Total: 3', explanation: 'Single computation.' },
    { input: '4\n1 2 3 4', output: 'Runs: 4 Total: 4', explanation: 'All unique.' }
  ],
  testCases: createTC('js-cls-2', [
    ['5\n1 2 1 2 3', 'Runs: 3 Total: 5'],
    ['3\n5 5 5', 'Runs: 1 Total: 3'],
    ['4\n1 2 3 4', 'Runs: 4 Total: 4'],
    ['6\n10 20 10 30 20 10', 'Runs: 3 Total: 6'],
    ['1\n42', 'Runs: 1 Total: 1'],
    ['5\n0 0 0 0 0', 'Runs: 1 Total: 5'],
    ['4\n7 8 8 7', 'Runs: 2 Total: 4'],
    ['5\n-1 -2 -1 -3 -2', 'Runs: 3 Total: 5'],
    ['6\n100 200 100 200 100 200', 'Runs: 2 Total: 6'],
    ['5\n2 4 6 8 10', 'Runs: 5 Total: 5']
  ])
});

addProblem({
  id: 'js-cls-3',
  topicId: 'js-closures-and-lexical-scope',
  level: 'intermediate',
  title: 'Once Function Wrapper (Run Only Once)',
  difficulty: 'medium',
  problemStatement: 'Implement once(fn) returning a function that can only be invoked once. Subsequent calls return the result of the first invocation. Given N numbers passed to once(addFive), print results of all N invocations space-separated.',
  inputFormat: 'First line N, second line N space-separated integers.',
  outputFormat: 'Print space-separated outputs.',
  constraints: ['1 <= N <= 100'],
  examples: [
    { input: '3\n10 20 30', output: '15 15 15', explanation: 'First call with 10 returns 15, subsequent return 15.' },
    { input: '2\n5 10', output: '10 10', explanation: 'First call with 5 returns 10.' },
    { input: '1\n0', output: '5', explanation: 'Single call.' }
  ],
  testCases: createTC('js-cls-3', [
    ['3\n10 20 30', '15 15 15'],
    ['2\n5 10', '10 10'],
    ['1\n0', '5'],
    ['4\n1 2 3 4', '6 6 6 6'],
    ['5\n100 200 300 400 500', '105 105 105 105 105'],
    ['2\n-5 5', '0 0'],
    ['3\n7 8 9', '12 12 12'],
    ['4\n50 50 50 50', '55 55 55 55'],
    ['2\n42 0', '47 47'],
    ['3\n20 10 5', '25 25 25']
  ])
});

// 12. js-classes-and-inheritance (3 problems)
addProblem({
  id: 'js-cls-oop-1',
  topicId: 'js-classes-and-inheritance',
  level: 'intermediate',
  title: 'ES6 Class with Getters and Setters',
  difficulty: 'easy',
  problemStatement: 'Implement Rectangle(width, height) with getter area and getter perimeter. Given width and height, print "Area: <area> Perimeter: <perimeter>".',
  inputFormat: 'Two space-separated numbers w and h.',
  outputFormat: 'Print "Area: <area> Perimeter: <perimeter>".',
  constraints: ['1 <= w, h <= 10^5'],
  examples: [
    { input: '4 5', output: 'Area: 20 Perimeter: 18', explanation: '4*5=20, 2*(4+5)=18.' },
    { input: '10 10', output: 'Area: 100 Perimeter: 40', explanation: 'Square.' },
    { input: '1 2', output: 'Area: 2 Perimeter: 6', explanation: '1x2.' }
  ],
  testCases: createTC('js-cls-oop-1', [
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
  id: 'js-cls-oop-2',
  topicId: 'js-classes-and-inheritance',
  level: 'intermediate',
  title: 'Inheritance with super() in JavaScript',
  difficulty: 'medium',
  problemStatement: 'Implement Person(name) with introduce() and Student(name, grade) inheriting Person and overriding introduce() using super.introduce() + " Grade: " + grade. Print introduction.',
  inputFormat: 'Name and grade.',
  outputFormat: 'Print "Hello, I am <name>. Grade: <grade>".',
  constraints: ['Strings <= 50 chars.'],
  examples: [
    { input: 'Alice 10', output: 'Hello, I am Alice. Grade: 10', explanation: 'Overridden introduction.' },
    { input: 'Bob 12', output: 'Hello, I am Bob. Grade: 12', explanation: 'Introduction.' },
    { input: 'Charlie 9', output: 'Hello, I am Charlie. Grade: 9', explanation: 'Introduction.' }
  ],
  testCases: createTC('js-cls-oop-2', [
    ['Alice 10', 'Hello, I am Alice. Grade: 10'],
    ['Bob 12', 'Hello, I am Bob. Grade: 12'],
    ['Charlie 9', 'Hello, I am Charlie. Grade: 9'],
    ['David 11', 'Hello, I am David. Grade: 11'],
    ['Emma 8', 'Hello, I am Emma. Grade: 8'],
    ['Frank 10', 'Hello, I am Frank. Grade: 10'],
    ['Grace 12', 'Hello, I am Grace. Grade: 12'],
    ['Henry 9', 'Hello, I am Henry. Grade: 9'],
    ['Ivy 11', 'Hello, I am Ivy. Grade: 11'],
    ['Jack 7', 'Hello, I am Jack. Grade: 7']
  ])
});

addProblem({
  id: 'js-cls-oop-3',
  topicId: 'js-classes-and-inheritance',
  level: 'intermediate',
  title: 'Static Factory Method in JavaScript Class',
  difficulty: 'medium',
  problemStatement: 'Implement User class with static fromJSON(jsonStr) factory method creating User instances. Given JSON string {"id": 1, "username": "alice"}, parse and print "User <id>: <username>".',
  inputFormat: 'A JSON string.',
  outputFormat: 'Print "User <id>: <username>".',
  constraints: ['Valid JSON string.'],
  examples: [
    { input: '{"id": 1, "username": "alice"}', output: 'User 1: alice', explanation: 'Factory created user.' },
    { input: '{"id": 42, "username": "bob"}', output: 'User 42: bob', explanation: 'User 42.' },
    { input: '{"id": 100, "username": "admin"}', output: 'User 100: admin', explanation: 'Admin user.' }
  ],
  testCases: createTC('js-cls-oop-3', [
    ['{"id": 1, "username": "alice"}', 'User 1: alice'],
    ['{"id": 42, "username": "bob"}', 'User 42: bob'],
    ['{"id": 100, "username": "admin"}', 'User 100: admin'],
    ['{"id": 7, "username": "charlie"}', 'User 7: charlie'],
    ['{"id": 99, "username": "dev"}', 'User 99: dev'],
    ['{"id": 5, "username": "emma"}', 'User 5: emma'],
    ['{"id": 10, "username": "frank"}', 'User 10: frank'],
    ['{"id": 2, "username": "grace"}', 'User 2: grace'],
    ['{"id": 50, "username": "henry"}', 'User 50: henry'],
    ['{"id": 123, "username": "ivy"}', 'User 123: ivy']
  ])
});

// 13. js-promises-and-chaining (3 problems)
addProblem({
  id: 'js-prom-1',
  topicId: 'js-promises-and-chaining',
  level: 'intermediate',
  title: 'Promise Resolution and Result Transformation',
  difficulty: 'easy',
  problemStatement: 'Create a Promise resolving with value X, then chain .then(v => v * 2).then(v => v + 10). Given X, print the final chained promise value.',
  inputFormat: 'An integer X.',
  outputFormat: 'Print final value.',
  constraints: ['-10^5 <= X <= 10^5'],
  examples: [
    { input: '5', output: '20', explanation: '5 * 2 + 10 = 20.' },
    { input: '0', output: '10', explanation: '0 * 2 + 10 = 10.' },
    { input: '10', output: '30', explanation: '10 * 2 + 10 = 30.' }
  ],
  testCases: createTC('js-prom-1', [
    ['5', '20'],
    ['0', '10'],
    ['10', '30'],
    ['100', '210'],
    ['-5', '0'],
    ['25', '60'],
    ['1', '12'],
    ['-10', '-10'],
    ['50', '110'],
    ['7', '24']
  ])
});

addProblem({
  id: 'js-prom-2',
  topicId: 'js-promises-and-chaining',
  level: 'intermediate',
  title: 'Promise Catch Error Recovery',
  difficulty: 'medium',
  problemStatement: 'Simulate Promise error handling: If status is "ERROR", reject promise and catch with fallback value "RECOVERED: DEFAULT". If status is "OK", resolve with "SUCCESS: " + data. Print outcome.',
  inputFormat: 'Status ("OK" or "ERROR") and data string.',
  outputFormat: 'Print outcome string.',
  constraints: ['Strings <= 50 chars.'],
  examples: [
    { input: 'OK DataLoaded', output: 'SUCCESS: DataLoaded', explanation: 'Resolved.' },
    { input: 'ERROR NetFail', output: 'RECOVERED: DEFAULT', explanation: 'Caught.' },
    { input: 'OK Ready', output: 'SUCCESS: Ready', explanation: 'Resolved.' }
  ],
  testCases: createTC('js-prom-2', [
    ['OK DataLoaded', 'SUCCESS: DataLoaded'],
    ['ERROR NetFail', 'RECOVERED: DEFAULT'],
    ['OK Ready', 'SUCCESS: Ready'],
    ['ERROR Timeout', 'RECOVERED: DEFAULT'],
    ['OK Connected', 'SUCCESS: Connected'],
    ['ERROR 500', 'RECOVERED: DEFAULT'],
    ['OK 200', 'SUCCESS: 200'],
    ['ERROR Crash', 'RECOVERED: DEFAULT'],
    ['OK Done', 'SUCCESS: Done'],
    ['ERROR Abort', 'RECOVERED: DEFAULT']
  ])
});

addProblem({
  id: 'js-prom-3',
  topicId: 'js-promises-and-chaining',
  level: 'intermediate',
  title: 'Promise.all Parallel Task Aggregation',
  difficulty: 'medium',
  problemStatement: 'Simulate Promise.all([p1, p2, p3]): Given 3 task values, multiply each by 10 and aggregate. Print space-separated results.',
  inputFormat: 'Three space-separated integers A B C.',
  outputFormat: 'Print space-separated multiplied values.',
  constraints: ['-10^5 <= values <= 10^5'],
  examples: [
    { input: '1 2 3', output: '10 20 30', explanation: 'Multiplied by 10.' },
    { input: '5 0 -5', output: '50 0 -50', explanation: 'Negatives handled.' },
    { input: '10 20 30', output: '100 200 300', explanation: 'Multiplied.' }
  ],
  testCases: createTC('js-prom-3', [
    ['1 2 3', '10 20 30'],
    ['5 0 -5', '50 0 -50'],
    ['10 20 30', '100 200 300'],
    ['4 8 12', '40 80 120'],
    ['0 0 0', '0 0 0'],
    ['-1 -2 -3', '-10 -20 -30'],
    ['7 14 21', '70 140 210'],
    ['100 200 300', '1000 2000 3000'],
    ['25 50 75', '250 500 750'],
    ['9 9 9', '90 90 90']
  ])
});

// 14. js-async-await-fetch (3 problems)
addProblem({
  id: 'js-async-1',
  topicId: 'js-async-await-fetch',
  level: 'intermediate',
  title: 'Async Function Sequential Flow',
  difficulty: 'easy',
  problemStatement: 'Implement an async function that awaits step1(x) = x + 10, then awaits step2(res) = res * 2. Given integer X, print the final computed value.',
  inputFormat: 'An integer X.',
  outputFormat: 'Print final computed value.',
  constraints: ['-10^5 <= X <= 10^5'],
  examples: [
    { input: '5', output: '30', explanation: '(5 + 10) * 2 = 30.' },
    { input: '0', output: '20', explanation: '(0 + 10) * 2 = 20.' },
    { input: '10', output: '40', explanation: '(10 + 10) * 2 = 40.' }
  ],
  testCases: createTC('js-async-1', [
    ['5', '30'],
    ['0', '20'],
    ['10', '40'],
    ['-5', '10'],
    ['-10', '0'],
    ['20', '60'],
    ['100', '220'],
    ['1', '22'],
    ['50', '120'],
    ['7', '34']
  ])
});

addProblem({
  id: 'js-async-2',
  topicId: 'js-async-await-fetch',
  level: 'intermediate',
  title: 'Error Handling with try/catch in async/await',
  difficulty: 'medium',
  problemStatement: 'In an async function: If input is valid integer, await process(N) returning N * N. If parsing fails, catch error and return "ERROR: PARSE FAILURE". Print result.',
  inputFormat: 'A token string.',
  outputFormat: 'Print result or error.',
  constraints: ['String length <= 50'],
  examples: [
    { input: '5', output: '25', explanation: '5 * 5 = 25.' },
    { input: 'abc', output: 'ERROR: PARSE FAILURE', explanation: 'Parse failure.' },
    { input: '10', output: '100', explanation: '10 * 10 = 100.' }
  ],
  testCases: createTC('js-async-2', [
    ['5', '25'],
    ['abc', 'ERROR: PARSE FAILURE'],
    ['10', '100'],
    ['0', '0'],
    ['xyz', 'ERROR: PARSE FAILURE'],
    ['12', '144'],
    ['invalid', 'ERROR: PARSE FAILURE'],
    ['7', '49'],
    ['-4', '16'],
    ['test', 'ERROR: PARSE FAILURE']
  ])
});

addProblem({
  id: 'js-async-3',
  topicId: 'js-async-await-fetch',
  level: 'intermediate',
  title: 'Simulating Fetch API Response Status Handling',
  difficulty: 'medium',
  problemStatement: 'Simulate handling fetch response: Given HTTP status code S, if 200 <= S < 300, print "SUCCESS: 2XX". If 400 <= S < 500, print "CLIENT ERROR: 4XX". If S >= 500, print "SERVER ERROR: 5XX". Else print "OTHER: " + S.',
  inputFormat: 'An integer status code S.',
  outputFormat: 'Print status category.',
  constraints: ['100 <= S <= 599'],
  examples: [
    { input: '200', output: 'SUCCESS: 2XX', explanation: 'OK.' },
    { input: '404', output: 'CLIENT ERROR: 4XX', explanation: 'Not found.' },
    { input: '500', output: 'SERVER ERROR: 5XX', explanation: 'Server error.' }
  ],
  testCases: createTC('js-async-3', [
    ['200', 'SUCCESS: 2XX'],
    ['404', 'CLIENT ERROR: 4XX'],
    ['500', 'SERVER ERROR: 5XX'],
    ['201', 'SUCCESS: 2XX'],
    ['401', 'CLIENT ERROR: 4XX'],
    ['503', 'SERVER ERROR: 5XX'],
    ['403', 'CLIENT ERROR: 4XX'],
    ['301', 'OTHER: 301'],
    ['204', 'SUCCESS: 2XX'],
    ['502', 'SERVER ERROR: 5XX']
  ])
});

// 15. js-dom-and-event-delegation (2 problems)
addProblem({
  id: 'js-dom-1',
  topicId: 'js-dom-and-event-delegation',
  level: 'intermediate',
  title: 'Event Delegation Target Matcher',
  difficulty: 'medium',
  problemStatement: 'Simulate event delegation: A parent container handles clicks for child items matching a CSS class. Given target tag and className, if className is "btn-action", print "HANDLED: <tag>". Else print "IGNORED".',
  inputFormat: 'Tag string and className string.',
  outputFormat: 'Print "HANDLED: <tag>" or "IGNORED".',
  constraints: ['Strings <= 50 chars.'],
  examples: [
    { input: 'button btn-action', output: 'HANDLED: button', explanation: 'Matched class.' },
    { input: 'div container', output: 'IGNORED', explanation: 'Class does not match.' },
    { input: 'a btn-action', output: 'HANDLED: a', explanation: 'Matched anchor.' }
  ],
  testCases: createTC('js-dom-1', [
    ['button btn-action', 'HANDLED: button'],
    ['div container', 'IGNORED'],
    ['a btn-action', 'HANDLED: a'],
    ['span text', 'IGNORED'],
    ['input btn-action', 'HANDLED: input'],
    ['li item', 'IGNORED'],
    ['button btn-other', 'IGNORED'],
    ['div btn-action', 'HANDLED: div'],
    ['p paragraph', 'IGNORED'],
    ['button btn-action', 'HANDLED: button']
  ])
});

addProblem({
  id: 'js-dom-2',
  topicId: 'js-dom-and-event-delegation',
  level: 'intermediate',
  title: 'Virtual DOM Tree Node Count',
  difficulty: 'medium',
  problemStatement: 'Given a nested virtual DOM node representation {"tag": "...", "children": [...]}, count the total number of DOM nodes in the tree recursively. Print "Total Nodes: <count>".',
  inputFormat: 'JSON string of tree.',
  outputFormat: 'Print "Total Nodes: <count>".',
  constraints: ['Valid JSON tree.'],
  examples: [
    { input: '{"tag": "div", "children": [{"tag": "p", "children": []}, {"tag": "span", "children": []}]}', output: 'Total Nodes: 3', explanation: 'div + p + span = 3 nodes.' },
    { input: '{"tag": "body", "children": []}', output: 'Total Nodes: 1', explanation: 'Single node.' },
    { input: '{"tag": "ul", "children": [{"tag": "li", "children": []}]}', output: 'Total Nodes: 2', explanation: 'ul + li = 2.' }
  ],
  testCases: createTC('js-dom-2', [
    ['{"tag": "div", "children": [{"tag": "p", "children": []}, {"tag": "span", "children": []}]}', 'Total Nodes: 3'],
    ['{"tag": "body", "children": []}', 'Total Nodes: 1'],
    ['{"tag": "ul", "children": [{"tag": "li", "children": []}]}', 'Total Nodes: 2'],
    ['{"tag": "div", "children": [{"tag": "div", "children": [{"tag": "p", "children": []}]}]}', 'Total Nodes: 3'],
    ['{"tag": "root", "children": [{"tag": "a", "children": []}, {"tag": "b", "children": []}, {"tag": "c", "children": []}]}', 'Total Nodes: 4'],
    ['{"tag": "table", "children": [{"tag": "tr", "children": [{"tag": "td", "children": []}, {"tag": "td", "children": []}]}]}', 'Total Nodes: 4'],
    ['{"tag": "main", "children": []}', 'Total Nodes: 1'],
    ['{"tag": "header", "children": [{"tag": "nav", "children": []}]}', 'Total Nodes: 2'],
    ['{"tag": "app", "children": [{"tag": "v1", "children": []}, {"tag": "v2", "children": [{"tag": "sub", "children": []}]}]}', 'Total Nodes: 4'],
    ['{"tag": "form", "children": [{"tag": "input", "children": []}, {"tag": "button", "children": []}]}', 'Total Nodes: 3']
  ])
});

// -------------------------------------------------------------
// ADVANCED
// -------------------------------------------------------------

// 16. js-event-loop-microtasks (3 problems)
addProblem({
  id: 'js-ev-1',
  topicId: 'js-event-loop-microtasks',
  level: 'advanced',
  title: 'Predict Event Loop Microtask Execution Order',
  difficulty: 'medium',
  problemStatement: 'In JavaScript event loop: synchronous code executes first, then microtasks (Promise.then), then macrotasks (setTimeout). Given event types in registration order, print them in their guaranteed execution order.',
  inputFormat: 'Registration sequence of tasks: "SYNC" or "MICRO" or "MACRO" with identifier e.g. "MACRO:1 MICRO:1 SYNC:1".',
  outputFormat: 'Print space-separated executed task identifiers.',
  constraints: ['Task tokens <= 100'],
  examples: [
    { input: 'MACRO:1 MICRO:1 SYNC:1', output: 'SYNC:1 MICRO:1 MACRO:1', explanation: 'Sync first, microtask second, macrotask last.' },
    { input: 'MICRO:A SYNC:B', output: 'SYNC:B MICRO:A', explanation: 'Sync before micro.' },
    { input: 'MACRO:T1 MACRO:T2 SYNC:S1', output: 'SYNC:S1 MACRO:T1 MACRO:T2', explanation: 'Sync before macros.' }
  ],
  testCases: createTC('js-ev-1', [
    ['MACRO:1 MICRO:1 SYNC:1', 'SYNC:1 MICRO:1 MACRO:1'],
    ['MICRO:A SYNC:B', 'SYNC:B MICRO:A'],
    ['MACRO:T1 MACRO:T2 SYNC:S1', 'SYNC:S1 MACRO:T1 MACRO:T2'],
    ['MICRO:1 MICRO:2 SYNC:1', 'SYNC:1 MICRO:1 MICRO:2'],
    ['MACRO:1 SYNC:1 MICRO:1', 'SYNC:1 MICRO:1 MACRO:1'],
    ['SYNC:A SYNC:B MICRO:C', 'SYNC:A SYNC:B MICRO:C'],
    ['MACRO:M1 MICRO:P1 MICRO:P2 SYNC:S1', 'SYNC:S1 MICRO:P1 MICRO:P2 MACRO:M1'],
    ['MICRO:1 MACRO:1', 'MICRO:1 MACRO:1'],
    ['SYNC:X MACRO:Y', 'SYNC:X MACRO:Y'],
    ['MACRO:1 SYNC:1 SYNC:2 MICRO:1', 'SYNC:1 SYNC:2 MICRO:1 MACRO:1']
  ])
});

addProblem({
  id: 'js-ev-2',
  topicId: 'js-event-loop-microtasks',
  level: 'advanced',
  title: 'QueueMicrotask Task Batch Runner',
  difficulty: 'medium',
  problemStatement: 'Simulate queueMicrotask: Given a batch of N microtask priorities (integers), higher priority microtasks execute first. Print space-separated priorities in execution order.',
  inputFormat: 'First line N, second line N space-separated integers.',
  outputFormat: 'Print space-separated integers in descending order.',
  constraints: ['1 <= N <= 1000'],
  examples: [
    { input: '4\n10 50 20 40', output: '50 40 20 10', explanation: 'Descending priority.' },
    { input: '2\n1 2', output: '2 1', explanation: 'Descending.' },
    { input: '1\n100', output: '100', explanation: 'Single task.' }
  ],
  testCases: createTC('js-ev-2', [
    ['4\n10 50 20 40', '50 40 20 10'],
    ['2\n1 2', '2 1'],
    ['1\n100', '100'],
    ['5\n5 1 4 2 3', '5 4 3 2 1'],
    ['3\n10 10 20', '20 10 10'],
    ['4\n-5 0 5 10', '10 5 0 -5'],
    ['3\n100 200 150', '200 150 100'],
    ['2\n8 8', '8 8'],
    ['5\n30 10 50 20 40', '50 40 30 20 10'],
    ['4\n99 12 85 43', '99 85 43 12']
  ])
});

addProblem({
  id: 'js-ev-3',
  topicId: 'js-event-loop-microtasks',
  level: 'advanced',
  title: 'Debounce Function Simulation',
  difficulty: 'hard',
  problemStatement: 'Simulate debounce(fn, delay=D): Given delay D and sequence of call timestamps in ms, a call only executes if no new call arrives within D ms. If another call arrives within D ms, the timer resets. Output the timestamps at which execution actually occurs.',
  inputFormat: 'First line D (ms) and N, second line N space-separated call timestamps.',
  outputFormat: 'Print space-separated execution timestamps.',
  constraints: ['1 <= D <= 1000', '1 <= N <= 100'],
  examples: [
    { input: '50 3\n0 20 100', output: '70 150', explanation: 'Calls at 0 and 20 debounce into 20+50=70. Call at 100 executes at 100+50=150.' },
    { input: '100 1\n0', output: '100', explanation: 'Single call executes at 0+100=100.' },
    { input: '30 2\n0 10', output: '40', explanation: 'Call at 0 debounced by 10, executes at 10+30=40.' }
  ],
  testCases: createTC('js-ev-3', [
    ['50 3\n0 20 100', '70 150'],
    ['100 1\n0', '100'],
    ['30 2\n0 10', '40'],
    ['50 2\n0 60', '50 110'],
    ['20 4\n0 10 15 50', '35 70'],
    ['100 2\n0 200', '100 300'],
    ['40 3\n0 50 100', '40 90 140'],
    ['10 3\n0 5 8', '18'],
    ['50 1\n25', '75'],
    ['30 4\n0 40 80 120', '30 70 110 150']
  ])
});

// 17. js-iterators-and-generators (3 problems)
addProblem({
  id: 'js-gen-1',
  topicId: 'js-iterators-and-generators',
  level: 'advanced',
  title: 'Custom Range Iterable with Symbol.iterator',
  difficulty: 'medium',
  problemStatement: 'Implement custom iterable Range(start, end, step) implementing [Symbol.iterator](). Given start, end (inclusive), and step, iterate and print values separated by space.',
  inputFormat: 'Three space-separated integers: start end step.',
  outputFormat: 'Print space-separated generated values.',
  constraints: ['1 <= step <= 100', 'start <= end'],
  examples: [
    { input: '1 10 2', output: '1 3 5 7 9', explanation: 'Stepping by 2.' },
    { input: '0 5 1', output: '0 1 2 3 4 5', explanation: 'Step 1.' },
    { input: '5 5 1', output: '5', explanation: 'Single value.' }
  ],
  testCases: createTC('js-gen-1', [
    ['1 10 2', '1 3 5 7 9'],
    ['0 5 1', '0 1 2 3 4 5'],
    ['5 5 1', '5'],
    ['2 10 2', '2 4 6 8 10'],
    ['10 25 5', '10 15 20 25'],
    ['0 20 4', '0 4 8 12 16 20'],
    ['1 7 3', '1 4 7'],
    ['100 130 10', '100 110 120 130'],
    ['3 15 3', '3 6 9 12 15'],
    ['1 1 5', '1']
  ])
});

addProblem({
  id: 'js-gen-2',
  topicId: 'js-iterators-and-generators',
  level: 'advanced',
  title: 'Fibonacci Generator Function in JavaScript',
  difficulty: 'medium',
  problemStatement: 'Implement generator function* fibGenerator(). Yield first N Fibonacci numbers starting with 0 and 1. Print space-separated terms.',
  inputFormat: 'An integer N.',
  outputFormat: 'Print space-separated terms.',
  constraints: ['1 <= N <= 30'],
  examples: [
    { input: '5', output: '0 1 1 2 3', explanation: 'First 5 Fibonacci terms.' },
    { input: '1', output: '0', explanation: 'First 1 term.' },
    { input: '7', output: '0 1 1 2 3 5 8', explanation: 'First 7 terms.' }
  ],
  testCases: createTC('js-gen-2', [
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
  id: 'js-gen-3',
  topicId: 'js-iterators-and-generators',
  level: 'advanced',
  title: 'Async Generator for Paged Stream Processing',
  difficulty: 'hard',
  problemStatement: 'Simulate async generator async function* paginate(totalItems, pageSize): Yield batches of item IDs. Given totalItems T and pageSize P, print each yielded page batch in format "Page <pageNum>: [<items_comma_separated>]".',
  inputFormat: 'Two integers: totalItems T and pageSize P.',
  outputFormat: 'Print each page batch on a new line.',
  constraints: ['1 <= P <= T <= 100'],
  examples: [
    { input: '5 2', output: 'Page 1: [1, 2]\nPage 2: [3, 4]\nPage 3: [5]', explanation: 'Batches of size 2.' },
    { input: '3 3', output: 'Page 1: [1, 2, 3]', explanation: 'Single page.' },
    { input: '4 2', output: 'Page 1: [1, 2]\nPage 2: [3, 4]', explanation: 'Exact pages.' }
  ],
  testCases: createTC('js-gen-3', [
    ['5 2', 'Page 1: [1, 2]\nPage 2: [3, 4]\nPage 3: [5]'],
    ['3 3', 'Page 1: [1, 2, 3]'],
    ['4 2', 'Page 1: [1, 2]\nPage 2: [3, 4]'],
    ['1 1', 'Page 1: [1]'],
    ['6 3', 'Page 1: [1, 2, 3]\nPage 2: [4, 5, 6]'],
    ['7 3', 'Page 1: [1, 2, 3]\nPage 2: [4, 5, 6]\nPage 3: [7]'],
    ['2 1', 'Page 1: [1]\nPage 2: [2]'],
    ['5 5', 'Page 1: [1, 2, 3, 4, 5]'],
    ['4 3', 'Page 1: [1, 2, 3]\nPage 2: [4]'],
    ['8 4', 'Page 1: [1, 2, 3, 4]\nPage 2: [5, 6, 7, 8]']
  ])
});

// 18. js-memory-leaks-and-gc (2 problems)
addProblem({
  id: 'js-mem-1',
  topicId: 'js-memory-leaks-and-gc',
  level: 'advanced',
  title: 'Private Metadata Storage with WeakMap',
  difficulty: 'medium',
  problemStatement: 'Simulate WeakMap memory isolation: Store metadata M for object key O. If object reference is valid, WeakMap.get(O) returns M. If cleared, print "COLLECTED". Given key and metadata string, verify storage.',
  inputFormat: 'Key string and metadata string.',
  outputFormat: 'Print "Metadata: <metadata>".',
  constraints: ['Strings <= 50 chars.'],
  examples: [
    { input: 'User101 RoleAdmin', output: 'Metadata: RoleAdmin', explanation: 'Retrieved metadata.' },
    { input: 'SessionA Valid', output: 'Metadata: Valid', explanation: 'Retrieved.' },
    { input: 'Token9 Active', output: 'Metadata: Active', explanation: 'Retrieved.' }
  ],
  testCases: createTC('js-mem-1', [
    ['User101 RoleAdmin', 'Metadata: RoleAdmin'],
    ['SessionA Valid', 'Metadata: Valid'],
    ['Token9 Active', 'Metadata: Active'],
    ['Node1 Root', 'Metadata: Root'],
    ['SocketB Connected', 'Metadata: Connected'],
    ['CacheX Loaded', 'Metadata: Loaded'],
    ['ContextY Initialized', 'Metadata: Initialized'],
    ['Handle5 Open', 'Metadata: Open'],
    ['Record2 Saved', 'Metadata: Saved'],
    ['KeyZ Verified', 'Metadata: Verified']
  ])
});

addProblem({
  id: 'js-mem-2',
  topicId: 'js-memory-leaks-and-gc',
  level: 'advanced',
  title: 'Event Listener Cleanup to Prevent Leaks',
  difficulty: 'medium',
  problemStatement: 'Simulate EventEmitter: When on(event, listener) is called, listener count increments. When off(event, listener) is called, it decrements. Given sequence of "+ <event>" (attach) and "- <event>" (detach), print final listener count for that event.',
  inputFormat: 'Event name, followed by N operations (+ or -).',
  outputFormat: 'Print "Listeners for <event>: <count>".',
  constraints: ['1 <= N <= 1000'],
  examples: [
    { input: 'click 3\n+\n+\n-', output: 'Listeners for click: 1', explanation: '2 attached, 1 detached -> 1 remaining.' },
    { input: 'resize 2\n+\n-', output: 'Listeners for resize: 0', explanation: '0 remaining.' },
    { input: 'submit 1\n+', output: 'Listeners for submit: 1', explanation: '1 remaining.' }
  ],
  testCases: createTC('js-mem-2', [
    ['click 3\n+\n+\n-', 'Listeners for click: 1'],
    ['resize 2\n+\n-', 'Listeners for resize: 0'],
    ['submit 1\n+', 'Listeners for submit: 1'],
    ['scroll 4\n+\n+\n+\n-', 'Listeners for scroll: 2'],
    ['input 2\n+\n+', 'Listeners for input: 2'],
    ['load 3\n+\n-\n-', 'Listeners for load: 0'],
    ['error 5\n+\n+\n+\n+\n-', 'Listeners for error: 3'],
    ['focus 2\n-\n+', 'Listeners for focus: 1'],
    ['blur 1\n-', 'Listeners for blur: 0'],
    ['change 4\n+\n+\n-\n-', 'Listeners for change: 0']
  ])
});

// 19. js-web-security-xss-csrf-cors (2 problems)
addProblem({
  id: 'js-sec-1',
  topicId: 'js-web-security-xss-csrf-cors',
  level: 'advanced',
  title: 'HTML Sanitizer to Prevent XSS',
  difficulty: 'medium',
  problemStatement: 'Implement sanitizeHTML(str) escaping dangerous characters: & to &amp;, < to &lt;, > to &gt;, " to &quot;, \' to &#39;. Print sanitized string.',
  inputFormat: 'A string containing raw HTML.',
  outputFormat: 'Print escaped safe string.',
  constraints: ['1 <= len(S) <= 10^4'],
  examples: [
    { input: '<script>alert("XSS")</script>', output: '&lt;script&gt;alert(&quot;XSS&quot;)&lt;/script&gt;', explanation: 'Escaped HTML.' },
    { input: '<b class=\'bold\'>Text</b>', output: '&lt;b class=&#39;bold&#39;&gt;Text&lt;/b&gt;', explanation: 'Escaped quotes and tags.' },
    { input: 'Normal text & more', output: 'Normal text &amp; more', explanation: 'Escaped ampersand.' }
  ],
  testCases: createTC('js-sec-1', [
    ['<script>alert("XSS")</script>', '&lt;script&gt;alert(&quot;XSS&quot;)&lt;/script&gt;'],
    ['<b class=\'bold\'>Text</b>', '&lt;b class=&#39;bold&#39;&gt;Text&lt;/b&gt;'],
    ['Normal text & more', 'Normal text &amp; more'],
    ['<img src="x" onerror="alert(1)">', '&lt;img src=&quot;x&quot; onerror=&quot;alert(1)&quot;&gt;'],
    ['Plain string', 'Plain string'],
    ['<a href="javascript:void(0)">Click</a>', '&lt;a href=&quot;javascript:void(0)&quot;&gt;Click&lt;/a&gt;'],
    ['Tom & Jerry', 'Tom &amp; Jerry'],
    ['1 < 2 && 3 > 2', '1 &lt; 2 &amp;&amp; 3 &gt; 2'],
    ['"Hello"', '&quot;Hello&quot;'],
    ['\'World\'', '&#39;World&#39;']
  ])
});

addProblem({
  id: 'js-sec-2',
  topicId: 'js-web-security-xss-csrf-cors',
  level: 'advanced',
  title: 'JWT Token Payload Base64 Extractor',
  difficulty: 'medium',
  problemStatement: 'A JWT has format "header.payload.signature". Extract payload, base64-decode using Buffer.from(payload, "base64").toString("utf-8"), parse JSON, and print "Subject: <sub} Role: <role>".',
  inputFormat: 'A valid JWT string.',
  outputFormat: 'Print "Subject: <sub> Role: <role>".',
  constraints: ['Valid mock JWT string.'],
  examples: [
    { input: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTYiLCJyb2xlIjoiYWRtaW4ifQ.signature', output: 'Subject: 123456 Role: admin', explanation: 'Decoded payload.' },
    { input: 'header.eyJzdWIiOiJ1c2VyMSIsInJvbGUiOiJndWVzdCJ9.sig', output: 'Subject: user1 Role: guest', explanation: 'Decoded user1.' },
    { input: 'h.eyJzdWIiOiJhbGljZSIsInJvbGUiOiJ1c2VyIn0.s', output: 'Subject: alice Role: user', explanation: 'Decoded alice.' }
  ],
  testCases: createTC('js-sec-2', [
    ['eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTYiLCJyb2xlIjoiYWRtaW4ifQ.signature', 'Subject: 123456 Role: admin'],
    ['header.eyJzdWIiOiJ1c2VyMSIsInJvbGUiOiJndWVzdCJ9.sig', 'Subject: user1 Role: guest'],
    ['h.eyJzdWIiOiJhbGljZSIsInJvbGUiOiJ1c2VyIn0.s', 'Subject: alice Role: user'],
    ['h.eyJzdWIiOiJib2IiLCJyb2xlOiJtYW5hZ2VyIn0.s', 'Subject: bob Role: manager'],
    ['h.eyJzdWIiOiJyb290Iiwicm9sZSI6InN1cGVyIn0.s', 'Subject: root Role: super'],
    ['h.eyJzdWIiOiJkZXYxIiwicm9sZSI6ImVuZ2luZWVyIn0.s', 'Subject: dev1 Role: engineer'],
    ['h.eyJzdWIiOiJjaGFybGllIiwicm9sZSI6Im1lbWJlciJ9.s', 'Subject: charlie Role: member'],
    ['h.eyJzdWIiOiJkYXZpZCIsInJvbGUiOiJhdWRpdG9yIn0.s', 'Subject: david Role: auditor'],
    ['h.eyJzdWIiOiJlbW1hIiwicm9sZSI6ImxlYWQifQ.s', 'Subject: emma Role: lead'],
    ['h.eyJzdWIiOiJmcmFuayIsInJvbGUiOiJzdHVkZW50In0.s', 'Subject: frank Role: student']
  ])
});

// 20. js-nodejs-runtime-and-modules (3 problems)
addProblem({
  id: 'js-node-1',
  topicId: 'js-nodejs-runtime-and-modules',
  level: 'advanced',
  title: 'Buffer Slice and UTF-8 Encoding in Node.js',
  difficulty: 'easy',
  problemStatement: 'In Node.js, create Buffer.from(str, "utf-8"), slice from index start to end, and convert sliced buffer back to string. Print the sliced string.',
  inputFormat: 'String S, followed by start and end indices.',
  outputFormat: 'Print sliced buffer string.',
  constraints: ['1 <= len(S) <= 10^4'],
  examples: [
    { input: 'HelloWorld 0 5', output: 'Hello', explanation: 'First 5 bytes.' },
    { input: 'NodeJS 4 6', output: 'JS', explanation: 'Bytes 4 to 6.' },
    { input: 'Antigravity 4 11', output: 'gravity', explanation: 'gravity extracted.' }
  ],
  testCases: createTC('js-node-1', [
    ['HelloWorld 0 5', 'Hello'],
    ['NodeJS 4 6', 'JS'],
    ['Antigravity 4 11', 'gravity'],
    ['JavaScript 0 4', 'Java'],
    ['Programming 3 7', 'gram'],
    ['Buffers 0 3', 'Buf'],
    ['Frontend 0 5', 'Front'],
    ['Backend 4 7', 'end'],
    ['Compiler 0 4', 'Comp'],
    ['Runtime 3 7', 'time']
  ])
});

addProblem({
  id: 'js-node-2',
  topicId: 'js-nodejs-runtime-and-modules',
  level: 'advanced',
  title: 'Transform Stream Uppercase Processing',
  difficulty: 'medium',
  problemStatement: 'Simulate a Transform stream converting text chunks to uppercase. Given space-separated words, print them converted to uppercase space-separated.',
  inputFormat: 'A line of words.',
  outputFormat: 'Print uppercase words.',
  constraints: ['1 <= words <= 10^4'],
  examples: [
    { input: 'hello stream world', output: 'HELLO STREAM WORLD', explanation: 'Transformed.' },
    { input: 'node runtime', output: 'NODE RUNTIME', explanation: 'Uppercased.' },
    { input: 'data pipe', output: 'DATA PIPE', explanation: 'Uppercased.' }
  ],
  testCases: createTC('js-node-2', [
    ['hello stream world', 'HELLO STREAM WORLD'],
    ['node runtime', 'NODE RUNTIME'],
    ['data pipe', 'DATA PIPE'],
    ['read write duplex', 'READ WRITE DUPLEX'],
    ['buffer chunk transform', 'BUFFER CHUNK TRANSFORM'],
    ['async io processing', 'ASYNC IO PROCESSING'],
    ['event emitter stream', 'EVENT EMITTER STREAM'],
    ['microservice pipeline', 'MICROSERVICE PIPELINE'],
    ['express server handler', 'EXPRESS SERVER HANDLER'],
    ['javascript engines', 'JAVASCRIPT ENGINES']
  ])
});

addProblem({
  id: 'js-node-3',
  topicId: 'js-nodejs-runtime-and-modules',
  level: 'advanced',
  title: 'Path Normalizer and Extension Extractor',
  difficulty: 'medium',
  problemStatement: 'Simulate path.extname(filepath) and path.basename(filepath): Given a file path, extract the basename and extension. Print "Base: <base> Ext: <ext>".',
  inputFormat: 'A file path string.',
  outputFormat: 'Print "Base: <base> Ext: <ext>".',
  constraints: ['Path string length <= 100'],
  examples: [
    { input: '/home/user/app.js', output: 'Base: app.js Ext: .js', explanation: 'Base and extension extracted.' },
    { input: 'src/components/Button.jsx', output: 'Base: Button.jsx Ext: .jsx', explanation: 'JSX file.' },
    { input: 'data.json', output: 'Base: data.json Ext: .json', explanation: 'JSON file.' }
  ],
  testCases: createTC('js-node-3', [
    ['/home/user/app.js', 'Base: app.js Ext: .js'],
    ['src/components/Button.jsx', 'Base: Button.jsx Ext: .jsx'],
    ['data.json', 'Base: data.json Ext: .json'],
    ['/var/log/server.log', 'Base: server.log Ext: .log'],
    ['index.html', 'Base: index.html Ext: .html'],
    ['styles/main.css', 'Base: main.css Ext: .css'],
    ['test/runner.ts', 'Base: runner.ts Ext: .ts'],
    ['README.md', 'Base: README.md Ext: .md'],
    ['docker/config.yaml', 'Base: config.yaml Ext: .yaml'],
    ['script.py', 'Base: script.py Ext: .py']
  ])
});

// 21. js-express-rest-and-jwt (3 problems)
addProblem({
  id: 'js-exp-1',
  topicId: 'js-express-rest-and-jwt',
  level: 'advanced',
  title: 'Express Route Path Parameter Matcher',
  difficulty: 'easy',
  problemStatement: 'Match an Express route path: Route pattern is "/api/v1/:resource/:id". Given actual URL e.g. "/api/v1/users/42", extract param values and print "Resource: <resource> ID: <id>". If mismatch, print "ROUTE NOT MATCHED".',
  inputFormat: 'URL path string.',
  outputFormat: 'Print "Resource: <resource> ID: <id>" or "ROUTE NOT MATCHED".',
  constraints: ['URL length <= 100'],
  examples: [
    { input: '/api/v1/users/42', output: 'Resource: users ID: 42', explanation: 'Matched.' },
    { input: '/api/v1/orders/100', output: 'Resource: orders ID: 100', explanation: 'Matched.' },
    { input: '/invalid/url', output: 'ROUTE NOT MATCHED', explanation: 'Mismatch.' }
  ],
  testCases: createTC('js-exp-1', [
    ['/api/v1/users/42', 'Resource: users ID: 42'],
    ['/api/v1/orders/100', 'Resource: orders ID: 100'],
    ['/invalid/url', 'ROUTE NOT MATCHED'],
    ['/api/v1/products/5', 'Resource: products ID: 5'],
    ['/api/v1/items/999', 'Resource: items ID: 999'],
    ['/api/v2/users/42', 'ROUTE NOT MATCHED'],
    ['/api/v1/courses/cs101', 'Resource: courses ID: cs101'],
    ['/api/v1/lessons/top-1', 'Resource: lessons ID: top-1'],
    ['/home', 'ROUTE NOT MATCHED'],
    ['/api/v1/profile/me', 'Resource: profile ID: me']
  ])
});

addProblem({
  id: 'js-exp-2',
  topicId: 'js-express-rest-and-jwt',
  level: 'advanced',
  title: 'Express Middleware Pipeline Simulation',
  difficulty: 'medium',
  problemStatement: 'Simulate Express middleware pipeline (req, res, next): Middlewares m1 (logs "M1"), m2 (logs "M2"), and handler (logs "HANDLER"). If a middleware calls next(err), pipeline jumps to error handler (logs "ERROR: <err>"). Given errFlag (0 for no error, string for error), print pipeline execution log.',
  inputFormat: 'errFlag string (or "0" for none).',
  outputFormat: 'Print space-separated middleware log.',
  constraints: ['Token <= 50 chars.'],
  examples: [
    { input: '0', output: 'M1 M2 HANDLER', explanation: 'Normal pipeline.' },
    { input: 'Unauthorized', output: 'M1 ERROR: Unauthorized', explanation: 'm1 passed error.' },
    { input: 'BadReq', output: 'M1 ERROR: BadReq', explanation: 'Error caught.' }
  ],
  testCases: createTC('js-exp-2', [
    ['0', 'M1 M2 HANDLER'],
    ['Unauthorized', 'M1 ERROR: Unauthorized'],
    ['BadReq', 'M1 ERROR: BadReq'],
    ['Forbidden', 'M1 ERROR: Forbidden'],
    ['0', 'M1 M2 HANDLER'],
    ['Timeout', 'M1 ERROR: Timeout'],
    ['0', 'M1 M2 HANDLER'],
    ['DatabaseDown', 'M1 ERROR: DatabaseDown'],
    ['InvalidToken', 'M1 ERROR: InvalidToken'],
    ['0', 'M1 M2 HANDLER']
  ])
});

addProblem({
  id: 'js-exp-3',
  topicId: 'js-express-rest-and-jwt',
  level: 'advanced',
  title: 'Authorization Bearer Token Validator',
  difficulty: 'medium',
  problemStatement: 'Extract and validate Authorization header: Must match format "Bearer <token>". If header starts with "Bearer " and token is non-empty, print "AUTHORIZED: <token>". Otherwise print "UNAUTHORIZED: INVALID HEADER".',
  inputFormat: 'Authorization header string.',
  outputFormat: 'Print authorization result.',
  constraints: ['Header string <= 200'],
  examples: [
    { input: 'Bearer eyJhbGciOi...', output: 'AUTHORIZED: eyJhbGciOi...', explanation: 'Valid bearer.' },
    { input: 'Basic dXNlcjpwYXNz', output: 'UNAUTHORIZED: INVALID HEADER', explanation: 'Basic auth rejected.' },
    { input: 'Bearer my-token-123', output: 'AUTHORIZED: my-token-123', explanation: 'Authorized.' }
  ],
  testCases: createTC('js-exp-3', [
    ['Bearer eyJhbGciOi...', 'AUTHORIZED: eyJhbGciOi...'],
    ['Basic dXNlcjpwYXNz', 'UNAUTHORIZED: INVALID HEADER'],
    ['Bearer my-token-123', 'AUTHORIZED: my-token-123'],
    ['Bearer secret-key', 'AUTHORIZED: secret-key'],
    ['Token 12345', 'UNAUTHORIZED: INVALID HEADER'],
    ['Bearer abc', 'AUTHORIZED: abc'],
    ['Bearer', 'UNAUTHORIZED: INVALID HEADER'],
    ['bearer lowercase', 'UNAUTHORIZED: INVALID HEADER'],
    ['Bearer valid-jwt-token', 'AUTHORIZED: valid-jwt-token'],
    ['None', 'UNAUTHORIZED: INVALID HEADER']
  ])
});

console.log('Finished creating all JavaScript problems! Total:', problems.length);

fs.writeFileSync(outputPath, `export const javascriptProblems = ${JSON.stringify(problems, null, 2)};\nexport default javascriptProblems;\n`, 'utf-8');
console.log('Successfully saved to', outputPath);
