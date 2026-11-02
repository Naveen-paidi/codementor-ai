/**
 * Comprehensive Practice System End-to-End Validation Test
 * Validates:
 * 1. Problem banks across all 5 languages (Python, Java, JavaScript, C, C++).
 * 2. 10 test cases per problem invariant (3 public, 7 hidden).
 * 3. Topic coverage and hierarchy integrity.
 * 4. Zero exposure of hidden test cases via public endpoints.
 * 5. Run (3 sample tests) and Submit (10 test cases) execution across compilers/interpreters.
 */

import { practiceService } from './services/practice.service.js';
import { codingProblems, problemsByTopicId } from './curriculum/codingProblems.js';
import { validateCodingProblems } from './curriculum/validator.js';

async function runTestSuite() {
  console.log('===============================================================');
  console.log('🚀 RUNNING CANONICAL PRACTICE SYSTEM END-TO-END VALIDATION SUITE');
  console.log('===============================================================\n');

  let passedAssertions = 0;
  let totalAssertions = 0;

  function assert(condition, message) {
    totalAssertions++;
    if (!condition) {
      console.error(`❌ FAILED: ${message}`);
      throw new Error(message);
    } else {
      console.log(`✅ PASSED: ${message}`);
      passedAssertions++;
    }
  }

  // 1. Problem Bank & Validator Inspection
  console.log('--- TEST 1: Canonical Problem Bank & Validation ---');
  const validationResult = validateCodingProblems(codingProblems);
  assert(validationResult.valid === true, 'validateCodingProblems passes for all problems');
  assert(codingProblems.length === 357, `Total problems count is 357 (got ${codingProblems.length})`);

  let totalTestCases = 0;
  for (const p of codingProblems) {
    totalTestCases += p.testCases.length;
    const pub = p.testCases.filter(t => !t.isHidden).length;
    const hid = p.testCases.filter(t => t.isHidden).length;
    if (pub !== 3 || hid !== 7) {
      throw new Error(`Problem ${p.id} has ${pub} public and ${hid} hidden test cases`);
    }
  }
  assert(totalTestCases === 3570, `Exactly 3,570 test cases configured across all problems (got ${totalTestCases})`);
  assert(problemsByTopicId.size === 113, `All 113 topics across 5 languages have practice problems (got ${problemsByTopicId.size})`);

  // 2. Hierarchy Per Language
  console.log('\n--- TEST 2: Practice Hierarchy Integrity Across 5 Languages ---');
  const expectedTotals = {
    python: { topics: 33, problems: 108 },
    java: { topics: 27, problems: 86 },
    javascript: { topics: 21, problems: 63 },
    c: { topics: 18, problems: 56 },
    cpp: { topics: 14, problems: 44 }
  };

  for (const [lang, exp] of Object.entries(expectedTotals)) {
    const h = await practiceService.getHierarchy(lang);
    assert(h.success === true, `Hierarchy for ${lang} returned success`);
    assert(h.totalTopics === exp.topics, `${lang} has ${exp.topics} topics (got ${h.totalTopics})`);
    assert(h.totalProblems === exp.problems, `${lang} has ${exp.problems} problems (got ${h.totalProblems})`);
    assert(h.levels.length === 3, `${lang} has 3 curriculum tiers (Beginner, Intermediate, Advanced)`);
  }

  // 3. Security & Secrecy: Hidden Test Cases Masking
  console.log('\n--- TEST 3: Hidden Test Cases Secrecy ---');
  const sampleProblem = codingProblems[0];
  const publicQuestionRes = await practiceService.getQuestionById(sampleProblem.id, { includeHidden: false });
  assert(publicQuestionRes.success === true, 'getQuestionById succeeds for sample problem');
  
  const publicQuestion = publicQuestionRes.question;
  assert(publicQuestion.sampleTestCases.length === 3, 'Public question exposes exactly 3 sample test cases');
  assert(!publicQuestion.testCases, 'Public question has NO testCases array');
  assert(!publicQuestion.solutionCode, 'Public question has NO solutionCode');

  // Verify across questions request
  const listRes = await practiceService.getQuestions({ language: 'python' });
  assert(listRes.success === true, 'getQuestions for python succeeds');
  for (const q of listRes.questions) {
    if (q.sampleTestCases && q.sampleTestCases.length > 3) {
      throw new Error(`Public question ${q.id} exposes more than 3 sample test cases`);
    }
    if (q.testCases) {
      throw new Error(`Public question ${q.id} leaks raw testCases array`);
    }
  }
  assert(true, 'All public questions strictly withhold hidden test cases');

  // 4. Execution Tests: Run Sample Tests (3 tests)
  console.log('\n--- TEST 4: Run Sample Tests (Fast Debugger Execution) ---');
  // Python test: py-loop-0 (Print 1 to N)
  const pythonCode = `import sys
tokens = sys.stdin.read().split()
if tokens:
    n = int(tokens[0])
    print(*(range(1, n + 1)))
`;
  const runPyRes = await practiceService.runSampleTests({
    questionId: 'py-loop-1',
    language: 'python',
    code: pythonCode
  });

  assert(runPyRes.success === true, 'runSampleTests for Python succeeded');
  assert(runPyRes.totalTests === 3, 'runSampleTests ran exactly 3 tests');
  assert(runPyRes.allPassed === true, 'All 3 sample tests passed for correct Python code');

  // 5. Execution Tests: Submit Solution (10 tests)
  console.log('\n--- TEST 5: Submit Solution (10 Test Cases with Hidden Masking) ---');
  const submitPyRes = await practiceService.submitSolution({
    userId: 'test-learner',
    questionId: 'py-loop-1',
    language: 'python',
    code: pythonCode,
    attemptNumber: 1
  });

  assert(submitPyRes.success === true, 'submitSolution for Python succeeded');
  assert(submitPyRes.totalTestCases === 10, 'submitSolution evaluated all 10 test cases');
  assert(submitPyRes.passedTestCases === 10, 'All 10 test cases passed for correct Python code');
  assert(submitPyRes.allPassed === true, 'submitSolution reports allPassed = true');
  assert(submitPyRes.xpGained === 25, 'Awards 25 XP on success');

  // Verify hidden test cases in submission are masked
  const hiddenResults = submitPyRes.testResults.filter(t => t.isHidden);
  assert(hiddenResults.length === 7, 'Submission response has 7 hidden test results');
  for (const hr of hiddenResults) {
    assert(hr.input === undefined || hr.input === '[Hidden]', 'Hidden test input is strictly masked');
    assert(hr.expectedOutput === undefined || hr.expectedOutput === '[Hidden]', 'Hidden test expectedOutput is strictly masked');
  }

  // 6. Execution Tests: Partial / Failing Code
  console.log('\n--- TEST 6: Failing Code Handling ---');
  const failingCode = `import sys
print("Wrong answer")
`;
  const failSubmitRes = await practiceService.submitSolution({
    userId: 'test-learner',
    questionId: 'py-loop-1',
    language: 'python',
    code: failingCode,
    attemptNumber: 1
  });

  assert(failSubmitRes.allPassed === false, 'Failing code is marked allPassed = false');
  assert(failSubmitRes.passedTestCases < 10, `Failing code passed ${failSubmitRes.passedTestCases} of 10 test cases`);

  // 7. C Execution Test (gcc)
  console.log('\n--- TEST 7: C Code Compilation & Execution (c-intro-2 ASCII Inspector) ---');
  const cCode = `#include <stdio.h>
int main() {
    char c;
    if (scanf(" %c", &c) == 1) {
        printf("DEC: %d | HEX: 0x%X\\n", (unsigned char)c, (unsigned char)c);
    }
    return 0;
}
`;
  const runCRes = await practiceService.runSampleTests({
    questionId: 'c-intro-2',
    language: 'c',
    code: cCode
  });

  assert(runCRes.success === true, 'runSampleTests for C succeeded');
  assert(runCRes.allPassed === true, 'All sample tests passed for correct C code');

  console.log('\n===============================================================');
  console.log(`🎉 ALL ${passedAssertions} ASSERTIONS PASSED WITH ZERO FAILURES!`);
  console.log('===============================================================\n');
}

runTestSuite().catch(err => {
  console.error('\n❌ TEST SUITE ENCOUNTERED UNEXPECTED ERROR:', err);
  process.exit(1);
});
