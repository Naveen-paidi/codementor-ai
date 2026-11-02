import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outputPath = path.join(__dirname, 'practice', 'pythonProblems.js');

function createTC(prefix, cases) {
  // cases: array of [input, output]
  // first 3 are isHidden: false, next 7 are isHidden: true
  return cases.map(([input, expectedOutput], idx) => ({
    id: `${prefix}-tc-${idx + 1}`,
    input: String(input),
    expectedOutput: String(expectedOutput),
    isHidden: idx >= 3
  }));
}

const problems = [];

// Helper to push problem
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
    constraints,
    examples,
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

// =========================================================================
// 1. python-variables (3 problems)
// =========================================================================
addProblem({
  id: 'py-var-1',
  topicId: 'python-variables',
  level: 'beginner',
  title: 'Calculate Simple Interest',
  difficulty: 'easy',
  problemStatement: 'Given Principal (P), Rate of interest (R), and Time in years (T), calculate the Simple Interest using the formula SI = (P * R * T) / 100. Print the result rounded to 2 decimal places.',
  inputFormat: 'Three space-separated numbers: P (float or int), R (float or int), T (float or int).',
  outputFormat: 'Print the calculated Simple Interest rounded to 2 decimal places.',
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
  problemStatement: 'Given marks obtained in 5 subjects out of 100 each, calculate the total marks obtained and the percentage. Print "Total: <total> Percentage: <pct>%" with percentage rounded to 2 decimal places.',
  inputFormat: 'Five space-separated numbers (float or int).',
  outputFormat: 'Print "Total: <total> Percentage: <pct>%" where total is integer or 2-decimal and pct has 2 decimal places.',
  constraints: ['0 <= mark <= 100'],
  examples: [
    { input: '80 90 85 95 100', output: 'Total: 450 Percentage: 90.00%', explanation: 'Sum is 450 out of 500, which is 90%.' },
    { input: '50 60 70 80 90', output: 'Total: 350 Percentage: 70.00%', explanation: 'Sum is 350 out of 500 = 70%.' },
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

console.log('Writing python problems module to', outputPath);
fs.writeFileSync(outputPath, `export const pythonProblems = ${JSON.stringify(problems, null, 2)};\nexport default pythonProblems;\n`, 'utf-8');
console.log('Done! Generated', problems.length, 'problems.');
