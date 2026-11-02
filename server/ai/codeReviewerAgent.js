/**
 * Code Reviewer Agent
 * -------------------
 * Analyses failed code submissions and provides progressive,
 * educational feedback instead of immediately revealing the solution.
 */

import {
  generateJSON,
  isGeminiConfigured,
} from '../config/gemini.js';

import {
  CODE_REVIEW_SYSTEM_PROMPT,
  buildCodeReviewPrompt,
} from './prompts/aiPrompts.js';

/**
 * Keep feedback fields predictable for the frontend, ensuring all 10
 * educational code review dimensions are present and structured.
 */
export function normalizeFeedback(data = {}, attemptNumber = 1, allPassed = false) {
  const validErrorTypes = [
    'syntax_error',
    'runtime_error',
    'logical_error',
    'conceptual_error',
    'passed',
  ];

  const errorType = validErrorTypes.includes(data.errorType)
    ? data.errorType
    : (allPassed ? 'passed' : 'logical_error');

  const problemsBugs = Array.isArray(data.problemsBugs)
    ? data.problemsBugs.map(p => String(p).trim()).filter(Boolean)
    : (data.problemsBugs ? [String(data.problemsBugs).trim()] : (data.whatWentWrong ? [String(data.whatWentWrong).trim()] : []));

  const edgeCases = Array.isArray(data.edgeCases)
    ? data.edgeCases.map(e => String(e).trim()).filter(Boolean)
    : (data.edgeCases ? [String(data.edgeCases).trim()] : ['Empty or null input', 'Single-element input', 'Boundary or extreme values']);

  const overallAssessment = data.overallAssessment || (allPassed
    ? 'Working - All test cases passed successfully.'
    : (data.summary || 'Solution requires revision.'));

  const whatIsCorrect = data.whatIsCorrect ||
    'The overall structure, input handling, and foundational logic align well with the problem goal.';

  const whyItOccurred = data.whyItOccurred || data.whyItHappened ||
    'An edge case or boundary condition yielded unexpected intermediate values.';

  const howToFix = data.howToFix || data.hint ||
    'Trace variable state with a small failing sample to align loop boundaries and branch conditions.';

  const correctedCode = data.correctedCode || '';

  const timeComplexity = data.timeComplexity ||
    'O(N) time complexity where N is the input size.';

  const spaceComplexity = data.spaceComplexity ||
    'O(1) auxiliary space.';

  const learningTip = data.learningTip || data.conceptToReview ||
    'Always verify base cases and off-by-one boundary conditions before submitting.';

  return {
    errorType,

    // 10 Core Educational Review Dimensions
    overallAssessment,
    whatIsCorrect,
    problemsBugs,
    whyItOccurred,
    howToFix,
    correctedCode,
    timeComplexity,
    spaceComplexity,
    edgeCases,
    learningTip,

    // Backward-compatibility properties
    summary: data.summary || overallAssessment,
    whatWentWrong: data.whatWentWrong || (problemsBugs.length > 0 ? problemsBugs.join('. ') : 'Issue detected in current implementation.'),
    whyItHappened: whyItOccurred,
    hint: howToFix,
    conceptToReview: learningTip,
    encouragement: data.encouragement || (allPassed ? 'Great job! Consider exploring alternative algorithms.' : 'Keep going! Debugging step by step builds strong engineering intuition.'),
    attemptNumber,
  };
}

/**
 * Detect the most likely error category from execution information.
 */
export function detectErrorType({
  compilerError,
  runtimeError,
}) {
  if (compilerError && compilerError.trim()) {
    return 'syntax_error';
  }

  if (runtimeError && runtimeError.trim()) {
    return 'runtime_error';
  }

  return 'logical_error';
}

/**
 * Remove sensitive information from hidden test cases.
 *
 * Hidden test input/output must NEVER be sent to the AI reviewer.
 */
export function sanitizeTestData({
  input = '',
  expectedOutput = '',
  actualOutput = '',
  isHiddenTest = false,
}) {
  if (isHiddenTest) {
    return {
      input: '[Hidden test input]',
      expectedOutput: '[Hidden test output]',
      actualOutput: '[Hidden test output]',
      isHiddenTest: true,
    };
  }

  return {
    input: String(input ?? ''),
    expectedOutput: String(expectedOutput ?? ''),
    actualOutput: String(actualOutput ?? ''),
    isHiddenTest: false,
  };
}

/**
 * Deterministic fallback when AI is unavailable.
 */
function createFallbackFeedback({
  attemptNumber,
  compilerError,
  runtimeError,
  allPassed = false,
}) {
  if (allPassed) {
    return normalizeFeedback(
      {
        errorType: 'passed',
        overallAssessment: 'Working - All test cases passed successfully.',
        whatIsCorrect: 'Your solution handles the problem requirements and produces correct outputs.',
        problemsBugs: [],
        whyItOccurred: 'No logic errors detected in the verified test cases.',
        howToFix: 'Consider optimizing space or time complexity if applicable.',
        correctedCode: '',
        timeComplexity: 'Analyze loops and recursion to determine Big-O time complexity.',
        spaceComplexity: 'Auxiliary memory usage is minimal.',
        edgeCases: ['Empty inputs', 'Maximum constraints', 'Zero and negative numbers'],
        learningTip: 'Writing clean, idiomatic code with clear variable names eases maintainability.',
        summary: 'All test cases passed. Excellent work!',
        encouragement: 'Great job! Try to benchmark your solution against larger constraints.',
      },
      attemptNumber,
      true
    );
  }

  const errorType = detectErrorType({
    compilerError,
    runtimeError,
  });

  if (errorType === 'syntax_error') {
    return normalizeFeedback(
      {
        errorType: 'syntax_error',
        overallAssessment: 'Compilation / Syntax Error - Code could not be parsed.',
        whatIsCorrect: 'The intention of the logic and basic program skeleton are present.',
        problemsBugs: [compilerError || 'Syntax or declaration error found in the source code.'],
        whyItOccurred: 'The compiler/interpreter encountered an unexpected token, missing delimiter, or type mismatch.',
        howToFix: 'Read the first error line number and verify matching brackets, semicolons, or variable declarations.',
        correctedCode: '',
        timeComplexity: 'N/A (Code did not compile)',
        spaceComplexity: 'N/A (Code did not compile)',
        edgeCases: ['Syntax validation across all statements'],
        learningTip: 'Resolve compiler diagnostics one by one starting from the first reported line.',
        summary: 'Your code contains a syntax or compilation error.',
        whatWentWrong: compilerError || 'The compiler could not understand part of your program.',
        whyItHappened: 'A keyword, symbol, declaration, bracket, or other language rule may have been used incorrectly.',
        hint: 'Read the compiler error message carefully and check the highlighted line.',
        conceptToReview: 'Language syntax rules and compiler error diagnosis',
        encouragement: 'Fix the first compiler error first, then run your code again.',
      },
      attemptNumber,
      false
    );
  }

  if (errorType === 'runtime_error') {
    return normalizeFeedback(
      {
        errorType: 'runtime_error',
        overallAssessment: 'Runtime Exception - Program crashed during execution.',
        whatIsCorrect: 'Code compiled successfully and execution began.',
        problemsBugs: [runtimeError || 'An unhandled exception occurred during runtime.'],
        whyItOccurred: 'Invalid memory access, index out of bounds, null pointer dereference, or zero division.',
        howToFix: 'Check collection bounds, ensure pointers/references are non-null, and validate inputs before access.',
        correctedCode: '',
        timeComplexity: 'Execution aborted prematurely.',
        spaceComplexity: 'Auxiliary memory at point of crash.',
        edgeCases: ['Index out of range', 'Division by zero', 'Null / None dereferencing'],
        learningTip: 'Defensive programming: always check boundaries before accessing arrays or object keys.',
        summary: 'Your program compiled but encountered an exception while running.',
        whatWentWrong: runtimeError || 'The program encountered an error during execution.',
        whyItHappened: 'An invalid operation occurred at runtime (such as index out of range or null access).',
        hint: 'Trace the variables immediately before the line where the runtime error occurs.',
        conceptToReview: 'Boundary checking and runtime exception handling',
        encouragement: 'You have already passed compilation. Now isolate the runtime condition.',
      },
      attemptNumber,
      false
    );
  }

  return normalizeFeedback(
    {
      errorType: 'logical_error',
      overallAssessment: 'Logical Error - Output differs from expected result.',
      whatIsCorrect: 'The program compiles and runs to completion without crashing.',
      problemsBugs: ['Calculations, condition branches, or loop limits produce an incorrect output.'],
      whyItOccurred: 'A subtle condition mismatch or off-by-one boundary caused unexpected transformation.',
      howToFix: 'Manually trace variable state step-by-step through a small failing example.',
      correctedCode: '',
      timeComplexity: 'Analyze nested iterations to evaluate polynomial or linear complexity.',
      spaceComplexity: 'Review extra arrays or data structures allocated during runtime.',
      edgeCases: ['Empty collections', 'Single-element input', 'Boundary or extreme test cases'],
      learningTip: 'Print or trace intermediate loop values to verify expected invariants at each step.',
      summary: 'Your code runs, but the result does not match the expected output.',
      whatWentWrong: 'The implementation produces an incorrect result for at least one test case.',
      whyItHappened: 'There may be an incorrect condition, calculation, loop boundary, or missing edge case.',
      hint: 'Trace a failing example manually and compare intermediate variables with what is expected.',
      conceptToReview: 'Loop boundaries and conditional state tracing',
      encouragement: 'Keep going! Use the failing test case to pinpoint where values diverge.',
    },
    attemptNumber,
    false
  );
}

/**
 * Review code submission with in-depth 10-point educational feedback.
 */
export async function reviewFailedCode({
  language,
  topic,
  topicTitle,
  code,
  studentCode,
  problemStatement,
  problemTitle,
  questionTitle,
  input = '',
  failedInput = '',
  expectedOutput = '',
  actualOutput = '',
  attemptNumber = 1,
  isHiddenTest = false,
  compilerError = '',
  runtimeError = '',
  allPassed = false,
}) {
  try {
    const resolvedLanguage = language || 'python';
    const resolvedCode = code || studentCode;

    if (!resolvedCode || !resolvedCode.trim()) {
      throw new Error('Code is required for review.');
    }

    const safeAttemptNumber = Math.min(
      10,
      Math.max(1, Number(attemptNumber) || 1)
    );

    const resolvedInput = input || failedInput || '';

    const safeTestData = sanitizeTestData({
      input: resolvedInput,
      expectedOutput,
      actualOutput,
      isHiddenTest,
    });

    if (!isGeminiConfigured()) {
      return {
        success: true,
        feedback: createFallbackFeedback({
          attemptNumber: safeAttemptNumber,
          compilerError,
          runtimeError,
          allPassed,
        }),
        provider: 'fallback',
      };
    }

    const detectedErrorType = allPassed
      ? 'passed'
      : detectErrorType({ compilerError, runtimeError });

    const prompt = buildCodeReviewPrompt({
      language: resolvedLanguage,
      topic: topic || topicTitle || 'Programming Practice',
      code: resolvedCode,
      problemTitle: problemTitle || questionTitle,
      problemStatement: problemStatement || 'No problem statement provided.',
      input: safeTestData.input,
      expectedOutput: safeTestData.expectedOutput,
      actualOutput: safeTestData.actualOutput,
      attemptNumber: safeAttemptNumber,
      isHiddenTest: safeTestData.isHiddenTest,
      compilerError,
      runtimeError,
      allPassed,
    });

    const result = await generateJSON(prompt, {
      systemInstruction: CODE_REVIEW_SYSTEM_PROMPT,
      temperature: 0.2,
      maxOutputTokens: 3000,
    });

    const feedback = normalizeFeedback(
      {
        ...result,
        errorType: result?.errorType || detectedErrorType,
      },
      safeAttemptNumber,
      allPassed
    );

    return {
      success: true,
      feedback,
      provider: 'openrouter',
    };

  } catch (error) {
    console.error(
      '[CodeReviewerAgent] Review failed:',
      error.message
    );

    const safeAttemptNumber = Math.min(
      10,
      Math.max(1, Number(attemptNumber) || 1)
    );

    return {
      success: true,
      feedback: createFallbackFeedback({
        attemptNumber: safeAttemptNumber,
        compilerError,
        runtimeError,
        allPassed,
      }),
      provider: 'fallback',
      warning:
        'AI review was temporarily unavailable; deterministic pedagogical feedback was returned.',
    };
  }
}

export const reviewCode = reviewFailedCode;