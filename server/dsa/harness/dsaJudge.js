/**
 * Deterministic DSA Judge Engine
 * Coordinates language harness drivers, invokes sandboxed execution,
 * verifies outputs against ground truth, and strictly sanitizes private test cases.
 */

import { executeCode } from '../../services/execution/executor.js';
import { buildPythonHarness } from './pythonHarness.js';
import { buildJavaScriptHarness } from './javascriptHarness.js';
import { buildJavaHarness } from './javaHarness.js';
import { buildCppHarness } from './cppHarness.js';
import { buildCHarness } from './cHarness.js';

export async function judgeSubmission({ problem, language, userCode, mode = 'run' }) {
  const normLang = (language || '').toLowerCase().trim();
  const allTests = problem.testCases || [];

  // Determine test cases to run
  const testsToRun = mode === 'run'
    ? allTests.filter(tc => !tc.isHidden)
    : allTests;

  if (!testsToRun.length) {
    return {
      status: 'Error',
      passed: false,
      passedCount: 0,
      totalCount: 0,
      executionTime: 0,
      error: 'No test cases available for evaluation',
      testCases: []
    };
  }

  // Generate driver script based on language harness
  let driverCode = '';
  try {
    switch (normLang) {
      case 'python':
      case 'py':
        driverCode = buildPythonHarness(problem, userCode, testsToRun);
        break;
      case 'javascript':
      case 'js':
      case 'node':
        driverCode = buildJavaScriptHarness(problem, userCode, testsToRun);
        break;
      case 'java':
        driverCode = buildJavaHarness(problem, userCode, testsToRun);
        break;
      case 'cpp':
      case 'c++':
        driverCode = buildCppHarness(problem, userCode, testsToRun);
        break;
      case 'c':
        driverCode = buildCHarness(problem, userCode, testsToRun);
        break;
      default:
        return {
          status: 'Error',
          passed: false,
          passedCount: 0,
          totalCount: testsToRun.length,
          executionTime: 0,
          error: `Language "${language}" is not supported by DSA judge. Supported: python, javascript, java, cpp, c`,
          testCases: []
        };
    }
  } catch (err) {
    return {
      status: 'Internal Error',
      passed: false,
      passedCount: 0,
      totalCount: testsToRun.length,
      executionTime: 0,
      error: `Harness construction failed: ${err.message}`,
      testCases: []
    };
  }

  // Execute in isolated subprocess via unified executor
  const timeoutMs = normLang === 'java' || normLang === 'cpp' || normLang === 'c' ? 12000 : 8000;
  const execResult = await executeCode(normLang, driverCode, '', timeoutMs);

  // Check timeout
  if (execResult.timedOut) {
    return {
      status: 'Time Limit Exceeded',
      passed: false,
      passedCount: 0,
      totalCount: testsToRun.length,
      executionTime: execResult.executionTime,
      error: `Time limit exceeded (${timeoutMs}ms limit)`,
      testCases: []
    };
  }

  // Check compile error (Java / C / C++)
  if (execResult.isCompilationError || (!execResult.success && !execResult.stdout.includes('__DSA_RESULT_START__'))) {
    return {
      status: 'Compile Error',
      passed: false,
      passedCount: 0,
      totalCount: testsToRun.length,
      executionTime: execResult.executionTime,
      error: execResult.stderr || 'Compilation failed',
      testCases: []
    };
  }

  // Parse structured JSON result from driver stdout
  const stdout = execResult.stdout || '';
  const startIdx = stdout.indexOf('__DSA_RESULT_START__');
  const endIdx = stdout.indexOf('__DSA_RESULT_END__');

  if (startIdx === -1 || endIdx === -1 || endIdx <= startIdx) {
    return {
      status: 'Runtime Error',
      passed: false,
      passedCount: 0,
      totalCount: testsToRun.length,
      executionTime: execResult.executionTime,
      error: execResult.stderr || stdout || 'Execution produced invalid harness output',
      testCases: []
    };
  }

  const jsonStr = stdout.substring(startIdx + '__DSA_RESULT_START__'.length, endIdx);
  let rawCases = [];
  try {
    rawCases = JSON.parse(jsonStr);
  } catch (parseErr) {
    return {
      status: 'Runtime Error',
      passed: false,
      passedCount: 0,
      totalCount: testsToRun.length,
      executionTime: execResult.executionTime,
      error: `Failed to parse execution results: ${parseErr.message}`,
      testCases: []
    };
  }

  // Determine aggregate outcome and sanitize private tests
  let passedCount = 0;
  let hasRuntimeError = false;
  let hasWrongAnswer = false;
  let firstErrorMessage = null;

  const sanitizedTestCases = rawCases.map((tc, idx) => {
    const isHidden = Boolean(tc.isHidden);
    const passed = tc.status === 'PASSED';

    if (passed) {
      passedCount++;
    } else if (tc.status === 'RUNTIME_ERROR') {
      hasRuntimeError = true;
      if (!firstErrorMessage) firstErrorMessage = tc.error || 'Runtime error during test execution';
    } else {
      hasWrongAnswer = true;
    }

    if (isHidden) {
      // Strictly redact private test case input, output, and sensitive stack traces
      return {
        id: tc.id || `tc-${problem.number}-${idx + 1}`,
        caseNumber: tc.caseNumber || (idx + 1),
        isHidden: true,
        status: tc.status,
        executionTime: tc.executionTime,
        input: '[Hidden Private Test Case]',
        expectedOutput: '[Hidden Private Test Case]',
        actualOutput: '[Hidden Private Test Case]',
        error: tc.status === 'RUNTIME_ERROR' ? 'Runtime error occurred on private test case' : null
      };
    }

    return {
      id: tc.id || `tc-${problem.number}-${idx + 1}`,
      caseNumber: tc.caseNumber || (idx + 1),
      isHidden: false,
      status: tc.status,
      executionTime: tc.executionTime,
      input: tc.input,
      expectedOutput: tc.expectedOutput,
      actualOutput: tc.actualOutput,
      error: tc.error || null
    };
  });

  let overallStatus = 'Accepted';
  if (passedCount !== testsToRun.length) {
    if (hasRuntimeError) {
      overallStatus = 'Runtime Error';
    } else {
      overallStatus = 'Wrong Answer';
    }
  }

  return {
    status: overallStatus,
    passed: passedCount === testsToRun.length,
    passedCount,
    totalCount: testsToRun.length,
    executionTime: execResult.executionTime,
    error: firstErrorMessage,
    testCases: sanitizedTestCases,
    mode
  };
}
