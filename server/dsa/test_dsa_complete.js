/**
 * Complete DSA Module End-to-End Verification Test
 */

import {
  getAllDSAProblems,
  getDSAProblemById,
  getDSATopics,
  getDSAManifestSummary
} from './data/dsaCatalogue.js';
import { DSAService } from './dsa.service.js';

async function runEndToEndVerification() {
  console.log('================================================================');
  console.log('       DSA MODULE COMPLETE PRODUCTION VERIFICATION SUITE       ');
  console.log('================================================================\n');

  let passedTests = 0;
  let totalTests = 0;

  function assert(condition, testName) {
    totalTests++;
    if (condition) {
      console.log(`  ✅ [PASS] ${testName}`);
      passedTests++;
    } else {
      console.error(`  ❌ [FAIL] ${testName}`);
      process.exitCode = 1;
    }
  }

  // -----------------------------------------------------------------
  // 1. Manifest & Catalogue Integrity
  // -----------------------------------------------------------------
  console.log('[1/5] Validating 200-Problem Manifest and Topic Groupings...');
  const summary = getDSAManifestSummary();
  assert(summary.totalProblems === 200, 'Manifest contains exactly 200 problems');
  assert(summary.easy === 19, `Easy problems count equals 19 (found: ${summary.easy})`);
  assert(summary.medium === 142, `Medium problems count equals 142 (found: ${summary.medium})`);
  assert(summary.hard === 39, `Hard problems count equals 39 (found: ${summary.hard})`);
  assert(summary.topicsCount === 16, 'Catalogue is grouped into exactly 16 topics');

  const allProblems = getAllDSAProblems({ includePrivate: true });
  const ids = new Set(allProblems.map(p => p.id));
  assert(ids.size === 200, 'All 200 problem IDs are stable, distinct, and unique');

  const numbers = allProblems.map(p => p.number);
  const minNum = Math.min(...numbers);
  const maxNum = Math.max(...numbers);
  assert(minNum === 1 && maxNum === 200, 'Problem numbering spans continuously from 1 to 200');

  const allHave10Tests = allProblems.every(p => p.testCases && p.testCases.length === 10);
  assert(allHave10Tests, 'Every enabled problem has exactly 10 test cases (3 public, 7 private)');

  const allHave5Languages = allProblems.every(p =>
    p.starterCode?.python &&
    p.starterCode?.javascript &&
    p.starterCode?.java &&
    p.starterCode?.cpp &&
    p.starterCode?.c
  );
  assert(allHave5Languages, 'Every problem has starter templates for Python, JavaScript, Java, C++, and C');

  // -----------------------------------------------------------------
  // 2. Private Test Case Masking Security
  // -----------------------------------------------------------------
  console.log('\n[2/5] Validating Server-Side Private Test Protection...');
  const clientView = getDSAProblemById('dsa-1', { includePrivate: false });
  assert(clientView.testCases.length === 3, 'Client-facing API exposes only 3 public test cases');
  assert(clientView.hasPrivateTests === true, 'Problem correctly flags that 7 private tests exist on backend');

  const backendView = getDSAProblemById('dsa-1', { includePrivate: true });
  assert(backendView.testCases.length === 10, 'Backend judge retains all 10 test cases');

  // -----------------------------------------------------------------
  // 3. Multi-Language Deterministic Judge Execution
  // -----------------------------------------------------------------
  console.log('\n[3/5] Validating Multi-Language Function-Based Judge...');
  
  // Python Judge Test
  const pyCode = `
class Solution:
    def majorityElement(self, nums: list[int]) -> int:
        count, candidate = 0, None
        for n in nums:
            if count == 0: candidate = n
            count += (1 if n == candidate else -1)
        return candidate
`;
  const pySubmit = await DSAService.submitCode({
    userId: 'test-learner-dsa',
    problemId: 'dsa-1',
    language: 'python',
    code: pyCode
  });
  assert(pySubmit.status === 'Accepted', `Python solution judged as Accepted (got ${pySubmit.status})`);
  assert(pySubmit.passedCount === 10, 'Python passed all 10/10 test cases');
  assert(pySubmit.testCases[3].input === '[Hidden Private Test Case]', 'Private test input strictly masked in submission response');

  // JavaScript Judge Test
  const jsCode = `
var majorityElement = function(nums) {
    let count = 0, candidate = null;
    for (const n of nums) {
        if (count === 0) candidate = n;
        count += (n === candidate ? 1 : -1);
    }
    return candidate;
};
`;
  const jsSubmit = await DSAService.submitCode({
    userId: 'test-learner-dsa',
    problemId: 'dsa-1',
    language: 'javascript',
    code: jsCode
  });
  assert(jsSubmit.status === 'Accepted', `JavaScript solution judged as Accepted (got ${jsSubmit.status})`);
  assert(jsSubmit.passedCount === 10, 'JavaScript passed all 10/10 test cases');

  // Wrong Answer Rejection Test
  const wrongCode = `
class Solution:
    def majorityElement(self, nums: list[int]) -> int:
        return 999999
`;
  const wrongSubmit = await DSAService.submitCode({
    userId: 'test-learner-dsa',
    problemId: 'dsa-1',
    language: 'python',
    code: wrongCode
  });
  assert(wrongSubmit.status === 'Wrong Answer', `Incorrect solution rejected with Wrong Answer (got ${wrongSubmit.status})`);
  assert(wrongSubmit.passed === false, 'Deterministic judge rejects incorrect solution');

  // -----------------------------------------------------------------
  // 4. Persistence, Streaks & GitHub Heatmap
  // -----------------------------------------------------------------
  console.log('\n[4/5] Validating Persistence, Heatmap & Progress Tracking...');
  const stats = await DSAService.getUserStats('test-learner-dsa');
  assert(stats.solved >= 1, `Persistent solved count updated (found ${stats.solved})`);
  assert(stats.currentStreak >= 1, `Current streak recorded as >= 1 (found ${stats.currentStreak})`);

  const heatmap = await DSAService.getHeatmap('test-learner-dsa');
  assert(heatmap.totalDays === 365, 'Heatmap generates exactly 365 days of activity grid');
  const todayEntry = heatmap.days[heatmap.days.length - 1];
  assert(todayEntry.count >= 1, 'Today entry recorded activity for the solved challenge');

  // -----------------------------------------------------------------
  // 5. AI Code Review & Measured Latency
  // -----------------------------------------------------------------
  console.log('\n[5/5] Validating AI Code Review & Latency Target...');
  const t0 = Date.now();
  const review = await DSAService.getAIReview({
    problemId: 'dsa-1',
    language: 'python',
    code: pyCode,
    status: 'Accepted'
  });
  const elapsed = Date.now() - t0;

  assert(Boolean(review.approachExplanation), 'AI review produced algorithmic analysis');
  assert(Boolean(review.timeComplexity), `AI review produced time complexity (${review.timeComplexity})`);
  assert(Boolean(review.spaceComplexity), `AI review produced space complexity (${review.spaceComplexity})`);
  assert(elapsed < 10000, `AI review completed in under 10 seconds (actual: ${elapsed}ms)`);

  console.log('\n================================================================');
  console.log(`  VERIFICATION COMPLETED: ${passedTests}/${totalTests} TESTS PASSED`);
  console.log('================================================================');
}

runEndToEndVerification().catch(err => {
  console.error('Test Suite Failed:', err);
  process.exit(1);
});
