import { executeCode } from './execution/executor.js';
import { practiceService } from './practice.service.js';
import { reviewFailedCode } from '../ai/codeReviewerAgent.js';
import { progressService } from './progress.service.js';
import {
  supabase,
  isSupabaseConfigured
} from '../config/supabase.js';

/**
 * Safely read a test-case field regardless of whether the
 * question came from Supabase or the runtime AI cache.
 */
const getTestCaseInput = (testCase) => {
  return testCase?.input ?? '';
};

const getExpectedOutput = (testCase) => {
  return (
    testCase?.expectedOutput ??
    testCase?.expected_output ??
    ''
  );
};

const isHiddenTestCase = (testCase) => {
  return Boolean(
    testCase?.isHidden ??
    testCase?.is_hidden ??
    false
  );
};

/**
 * Normalise output before comparison.
 */
const normalizeOutput = (value) => {
  return String(value ?? '')
    .replace(/\r\n/g, '\n')
    .trim();
};

/**
 * Check whether a value is a UUID.
 */
const isUuid = (value) => {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
    String(value)
  );
};

/**
 * Convert a database/runtime test case into one consistent
 * application representation.
 */
const normalizeTestCase = (testCase, index) => {
  return {
    id:
      testCase?.id ??
      `tc-${index + 1}`,

    input:
      getTestCaseInput(testCase),

    expectedOutput:
      getExpectedOutput(testCase),

    isHidden:
      isHiddenTestCase(testCase)
  };
};

export const submissionService = {
  /**
   * Submit student code and execute it against all
   * configured test cases.
   */
  async submitSolution({
    userId = 'guest-learner',
    questionId,
    language,
    code,
    attemptNumber = 1
  }) {
    if (!questionId) {
      throw new Error(
        'questionId is required.'
      );
    }

    if (!language) {
      throw new Error(
        'Programming language is required.'
      );
    }

    if (
      typeof code !== 'string' ||
      !code.trim()
    ) {
      throw new Error(
        'Code cannot be empty.'
      );
    }

    // ---------------------------------------------------------
    // 1. Load question
    // ---------------------------------------------------------
    const questionRes =
      await practiceService.getQuestionById(
        questionId,
        { includeHidden: true }
      );

    if (!questionRes?.success) {
      throw new Error(
        questionRes?.error ||
        `Question with id "${questionId}" was not found.`
      );
    }

    const question =
      questionRes.question;

    if (
      !question ||
      typeof question !== 'object'
    ) {
      throw new Error(
        `Question with id "${questionId}" was not found.`
      );
    }

    // ---------------------------------------------------------
    // 2. Load and normalise test cases
    // ---------------------------------------------------------
    const rawTestCases =
      question.testCases ||
      question.test_cases ||
      [];

    if (
      !Array.isArray(rawTestCases) ||
      rawTestCases.length === 0
    ) {
      throw new Error(
        'No test cases configured for this question.'
      );
    }

    const testCases =
      rawTestCases.map(
        normalizeTestCase
      );

    // ---------------------------------------------------------
    // 3. Execute every test case
    // ---------------------------------------------------------
    let allPassed = true;

    let failedTestCase = null;

    let compilerError = '';

    let runtimeError = '';

    let totalExecutionTime = 0;

    const testResults = [];

    for (
      let index = 0;
      index < testCases.length;
      index += 1
    ) {
      const testCase =
        testCases[index];

      let executionResult;

      try {
        executionResult =
          await executeCode(
            language,
            code,
            testCase.input
          );
      } catch (executionError) {
        executionResult = {
          success: false,

          stdout: '',

          stderr:
            executionError?.message ||
            'Code execution failed.',

          executionTime: 0,

          isCompilationError: false
        };
      }

      const executionTime =
        Number(
          executionResult?.executionTime || 0
        );

      totalExecutionTime +=
        executionTime;

      // -------------------------------------------------------
      // Compilation error
      // -------------------------------------------------------
      if (
        executionResult?.isCompilationError
      ) {
        compilerError =
          executionResult.stderr ||
          'Compilation error.';

        allPassed = false;

        if (!failedTestCase) {
          failedTestCase = testCase;
        }

        testResults.push({
          testCaseId: testCase.id,

          passed: false,

          actualOutput: '',

          /*
           * Never expose hidden expected output
           * to the client.
           */
          expectedOutput:
            testCase.isHidden
              ? '[Hidden]'
              : testCase.expectedOutput,

          isHidden:
            testCase.isHidden,

          executionTime,

          error: compilerError
        });

        /*
         * Compilation failure means subsequent tests
         * cannot provide useful results.
         */
        break;
      }

      // -------------------------------------------------------
      // Runtime / normal output comparison
      // -------------------------------------------------------
      const actualOutput =
        normalizeOutput(
          executionResult?.stdout
        );

      const expectedOutput =
        normalizeOutput(
          testCase.expectedOutput
        );

      const passed =
        Boolean(
          executionResult?.success
        ) &&
        actualOutput ===
        expectedOutput;

      if (!passed) {
        allPassed = false;

        if (!failedTestCase) {
          failedTestCase = testCase;
        }

        if (
          !executionResult?.success &&
          executionResult?.stderr
        ) {
          runtimeError =
            executionResult.stderr;
        }
      }

      /*
       * IMPORTANT:
       *
       * Hidden test case input/output must never be
       * returned to the frontend.
       */
      testResults.push({
        testCaseId:
          testCase.id,

        passed,

        actualOutput:
          testCase.isHidden
            ? '[Hidden Test Case]'
            : executionResult?.stdout || '',

        expectedOutput:
          testCase.isHidden
            ? '[Hidden]'
            : testCase.expectedOutput,

        isHidden:
          testCase.isHidden,

        executionTime,

        error:
          executionResult?.stderr ||
          null
      });
    }

    // ---------------------------------------------------------
    // 4. Calculate test results
    // ---------------------------------------------------------
    const passedTestCases =
      testResults.filter(
        (result) =>
          result.passed
      ).length;

    const totalTestCases =
      testCases.length;

    // ---------------------------------------------------------
    // 5. AI review for failed submissions
    // ---------------------------------------------------------
    let aiFeedback = null;

    let progResult = null;
    if (!allPassed) {
      try {
        /*
         * IMPORTANT:
         *
         * Never send hidden test input/output to Gemini.
         *
         * The reviewer receives only information that can
         * safely be used for pedagogical feedback.
         */
        const visibleFailure =
          testResults.find(
            (result) =>
              !result.passed &&
              !result.isHidden
          );

        const failedResult =
          visibleFailure ||
          testResults.find(
            (result) =>
              !result.passed
          );

        const review =
          await reviewFailedCode({
            language,

            topicTitle:
              question.concepts?.[0] ||
              question.topicTitle ||
              'Programming Practice',

            questionTitle:
              question.title ||
              'Programming Problem',

            problemStatement:
              question.problemStatement ||
              question.problem_statement ||
              '',

            studentCode:
              code,

            compilerError,

            runtimeError,

            /*
             * Do NOT send hidden expected output.
             */
            expectedOutput:
              failedResult?.isHidden
                ? ''
                : failedTestCase?.expectedOutput ||
                '',

            /*
             * Do NOT send hidden actual output.
             */
            actualOutput:
              failedResult?.isHidden
                ? ''
                : failedResult?.actualOutput ||
                '',

            /*
             * Do NOT send hidden input.
             */
            failedInput:
              failedResult?.isHidden
                ? ''
                : failedTestCase?.input ||
                '',

            attemptNumber,

            studentLevel:
              'beginner'
          });

        if (review?.success) {
          aiFeedback =
            review.feedback;
        } else if (review?.feedback) {
          aiFeedback =
            review.feedback;
        }
      } catch (error) {
        console.warn(
          '[SubmissionService] AI review failed:',
          error?.message || error
        );
      }
    } else {
      // -------------------------------------------------------
      // 6. Successful submission → XP + progress
      // -------------------------------------------------------
      try {
        progResult = await progressService
          .recordSuccessfulSubmission({
            userId,

            questionId,

            language,

            topicId:
              question.topicId ||
              question.topic_id ||
              null
          });
      } catch (error) {
        console.warn(
          '[SubmissionService] Progress update failed:',
          error?.message || error
        );
      }
    }

    // ---------------------------------------------------------
    // 7. Persist submission when possible
    // ---------------------------------------------------------
    let submissionId = null;

    /*
     * The current database requires question_id to be UUID.
     *
     * AI-generated questions can have IDs such as:
     * ai-gen-...
     *
     * Therefore only persist a submission when the
     * question ID is compatible with the current schema.
     */
    if (
      isSupabaseConfigured() &&
      userId !== 'guest-learner' &&
      isUuid(question.id) &&
      isUuid(userId)
    ) {
      try {
        const {
          data,
          error
        } = await supabase
          .from('submissions')
          .insert({
            user_id: userId,

            question_id:
              question.id,

            language_id:
              language,

            code,

            status:
              allPassed
                ? 'passed'
                : 'failed',

            total_test_cases:
              totalTestCases,

            passed_test_cases:
              passedTestCases,

            execution_time_ms:
              totalExecutionTime,

            attempt_number:
              Number(attemptNumber) || 1
          })
          .select('id')
          .single();

        if (!error && data) {
          submissionId = data.id;
        } else if (error) {
          console.warn(
            '[SubmissionService] Submission insert failed:',
            error.message
          );
        }
      } catch (error) {
        console.warn(
          '[SubmissionService] Submission logging failed:',
          error?.message || error
        );
      }
    }

    // ---------------------------------------------------------
    // 8. Record mistake for failed submissions
    // ---------------------------------------------------------
    if (!allPassed) {
      try {
        const feedback =
          aiFeedback || {};

        await progressService.recordMistake({
          userId,

          errorType:
            feedback.errorType ||
            (
              compilerError
                ? 'syntax_error'
                : runtimeError
                  ? 'runtime_error'
                  : 'logical_error'
            ),

          summary:
            feedback.summary ||
            'The submitted code did not pass all test cases.',

          topic:
            question.concepts?.[0] ||
            question.topicTitle ||
            'Programming Practice',

          questionId,

          language,

          submissionId,

          whatWentWrong:
            feedback.whatWentWrong ||
            null,

          whyItHappened:
            feedback.whyItHappened ||
            null,

          conceptToReview:
            feedback.conceptToReview ||
            null,

          hintGiven:
            feedback.hint ||
            null
        });
      } catch (error) {
        console.warn(
          '[SubmissionService] Mistake tracking failed:',
          error?.message || error
        );
      }
    }

    // ---------------------------------------------------------
    // 9. Final API response
    // ---------------------------------------------------------
    return {
      success: true,

      status:
        allPassed
          ? 'passed'
          : 'failed',

      allPassed,

      totalTestCases,

      passedTestCases,

      testResults,

      executionTimeMs:
        totalExecutionTime,

      aiFeedback,

      /*
       * XP is awarded only for a successful submission.
       */
      xpGained:
        allPassed
          ? 25
          : 0,

      currentXP: progResult?.currentXP || null,
      streak: progResult?.streak || null,
      streakDays: progResult?.streakDays || null,

      submissionId
    };
  }
};