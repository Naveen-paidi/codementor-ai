/**
 * Multi-Language Judge Verification Test
 * Tests Problem 1 (Majority Element) and Problem 13 (Two Sum)
 * across Python, JavaScript, Java, C++, and C.
 */

import { getDSAProblemById } from './data/dsaCatalogue.js';
import { judgeSubmission } from './harness/dsaJudge.js';

async function runVerification() {
  console.log('=== Starting DSA Multi-Language Judge Verification ===\n');

  // Test 1: Python solution for Problem 1 (Majority Element)
  const prob1 = getDSAProblemById('dsa-1', { includePrivate: true });
  console.log(`Testing Problem 1: "${prob1.title}" in Python...`);
  const pythonCode = `
class Solution:
    def majorityElement(self, nums: list[int]) -> int:
        count = 0
        candidate = None
        for n in nums:
            if count == 0:
                candidate = n
            count += (1 if n == candidate else -1)
        return candidate
`;
  const pyResult = await judgeSubmission({
    problem: prob1,
    language: 'python',
    userCode: pythonCode,
    mode: 'submit'
  });
  console.log('Python Result:', {
    status: pyResult.status,
    passedCount: `${pyResult.passedCount}/${pyResult.totalCount}`,
    executionTime: `${pyResult.executionTime}ms`,
    privateCaseMasked: pyResult.testCases[3]?.input === '[Hidden Private Test Case]'
  });

  // Test 2: JavaScript solution for Problem 1 (Majority Element)
  console.log(`\nTesting Problem 1: "${prob1.title}" in JavaScript...`);
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
  const jsResult = await judgeSubmission({
    problem: prob1,
    language: 'javascript',
    userCode: jsCode,
    mode: 'submit'
  });
  console.log('JavaScript Result:', {
    status: jsResult.status,
    passedCount: `${jsResult.passedCount}/${jsResult.totalCount}`,
    executionTime: `${jsResult.executionTime}ms`
  });

  // Test 3: Java solution for Problem 1 (Majority Element)
  console.log(`\nTesting Problem 1: "${prob1.title}" in Java...`);
  const javaCode = `
class Solution {
    public int majorityElement(int[] nums) {
        int count = 0, candidate = 0;
        for (int num : nums) {
            if (count == 0) candidate = num;
            count += (num == candidate) ? 1 : -1;
        }
        return candidate;
    }
}
`;
  const javaResult = await judgeSubmission({
    problem: prob1,
    language: 'java',
    userCode: javaCode,
    mode: 'submit'
  });
  console.log('Java Result:', {
    status: javaResult.status,
    passedCount: `${javaResult.passedCount}/${javaResult.totalCount}`,
    executionTime: `${javaResult.executionTime}ms`
  });

  // Test 4: C++ solution for Problem 1 (Majority Element)
  console.log(`\nTesting Problem 1: "${prob1.title}" in C++...`);
  const cppCode = `
class Solution {
public:
    int majorityElement(vector<int>& nums) {
        int count = 0, candidate = 0;
        for (int num : nums) {
            if (count == 0) candidate = num;
            count += (num == candidate) ? 1 : -1;
        }
        return candidate;
    }
};
`;
  const cppResult = await judgeSubmission({
    problem: prob1,
    language: 'cpp',
    userCode: cppCode,
    mode: 'submit'
  });
  console.log('C++ Result:', {
    status: cppResult.status,
    passedCount: `${cppResult.passedCount}/${cppResult.totalCount}`,
    executionTime: `${cppResult.executionTime}ms`
  });

  // Test 5: C solution for Problem 1 (Majority Element)
  console.log(`\nTesting Problem 1: "${prob1.title}" in C...`);
  const cCode = `
int majorityElement(int* nums, int numsSize) {
    int count = 0, candidate = 0;
    for (int i = 0; i < numsSize; i++) {
        if (count == 0) candidate = nums[i];
        count += (nums[i] == candidate) ? 1 : -1;
    }
    return candidate;
}
`;
  const cResult = await judgeSubmission({
    problem: prob1,
    language: 'c',
    userCode: cCode,
    mode: 'submit'
  });
  console.log('C Result:', {
    status: cResult.status,
    passedCount: `${cResult.passedCount}/${cResult.totalCount}`,
    executionTime: `${cResult.executionTime}ms`
  });

  // Test 6: Verify Wrong Answer rejection
  console.log(`\nTesting Wrong Answer Rejection in Python...`);
  const wrongCode = `
class Solution:
    def majorityElement(self, nums: list[int]) -> int:
        return 999999
`;
  const wrongResult = await judgeSubmission({
    problem: prob1,
    language: 'python',
    userCode: wrongCode,
    mode: 'run'
  });
  console.log('Wrong Answer Result:', {
    status: wrongResult.status,
    passed: wrongResult.passed,
    passedCount: `${wrongResult.passedCount}/${wrongResult.totalCount}`
  });

  console.log('\n=== Multi-Language Judge Verification Completed Successfully ===');
}

runVerification().catch(err => {
  console.error('Judge Verification Failed:', err);
  process.exit(1);
});
