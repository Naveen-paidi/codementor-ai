/**
 * DSA Catalogue Definitions - Part 1
 * Topics 1 to 4: Problems 1 to 57
 * - Arrays and Hashing (1-21)
 * - Binary Search (22-36)
 * - Sliding Window and Two Pointers (37-47)
 * - Recursion and Backtracking (48-57)
 */

export const TOPIC_1_PROBLEMS = [
  // -------------------------------------------------------------
  // TOPIC 1: Arrays and Hashing (1 - 21)
  // -------------------------------------------------------------
  {
    number: 1,
    title: "Majority Element I",
    topic: "Arrays and Hashing",
    difficulty: "Easy",
    description: "Given an array `nums` of size `n`, return the majority element. The majority element is the element that appears more than `⌊n / 2⌋` times. You may assume that the majority element always exists in the array.",
    constraints: ["n == nums.length", "1 <= n <= 5 * 10^4", "-10^9 <= nums[i] <= 10^9"],
    examples: [
      { input: "nums = [3,2,3]", output: "3", explanation: "3 appears twice in an array of size 3, which is > 1.5 times." },
      { input: "nums = [2,2,1,1,1,2,2]", output: "2", explanation: "2 appears 4 times in an array of size 7, which is > 3.5 times." }
    ],
    functionName: "majorityElement",
    returnType: "int",
    parameters: [{ name: "nums", type: "int[]" }],
    testCases: [
      { input: [[3, 2, 3]], expectedOutput: 3 },
      { input: [[2, 2, 1, 1, 1, 2, 2]], expectedOutput: 2 },
      { input: [[1]], expectedOutput: 1 },
      { input: [[6, 5, 5]], expectedOutput: 5 },
      { input: [[10, 9, 9, 9, 10]], expectedOutput: 9 },
      { input: [[1, 1, 1, 2, 3, 1]], expectedOutput: 1 },
      { input: [[-1, -1, 2, -1]], expectedOutput: -1 },
      { input: [[4, 4, 2, 4, 3, 4, 4]], expectedOutput: 4 },
      { input: [[7, 7, 7, 7, 1, 2, 3]], expectedOutput: 7 },
      { input: [[100, 100, 200, 100, 300, 100]], expectedOutput: 100 }
    ]
  },
  {
    number: 2,
    title: "Kadane's Algorithm",
    topic: "Arrays and Hashing",
    difficulty: "Medium",
    description: "Given an integer array `nums`, find the subarray with the largest sum, and return its sum.",
    constraints: ["1 <= nums.length <= 10^5", "-10^4 <= nums[i] <= 10^4"],
    examples: [
      { input: "nums = [-2,1,-3,4,-1,2,1,-5,4]", output: "6", explanation: "The subarray [4,-1,2,1] has the largest sum 6." },
      { input: "nums = [1]", output: "1", explanation: "The subarray [1] has the largest sum 1." },
      { input: "nums = [5,4,-1,7,8]", output: "23", explanation: "The subarray [5,4,-1,7,8] has the largest sum 23." }
    ],
    functionName: "maxSubArray",
    returnType: "int",
    parameters: [{ name: "nums", type: "int[]" }],
    testCases: [
      { input: [[-2, 1, -3, 4, -1, 2, 1, -5, 4]], expectedOutput: 6 },
      { input: [[1]], expectedOutput: 1 },
      { input: [[5, 4, -1, 7, 8]], expectedOutput: 23 },
      { input: [[-1]], expectedOutput: -1 },
      { input: [[-2, -1]], expectedOutput: -1 },
      { input: [[-2, -3, -1, -5]], expectedOutput: -1 },
      { input: [[1, 2, 3, 4]], expectedOutput: 10 },
      { input: [[2, -1, 3, 4]], expectedOutput: 8 },
      { input: [[-3, 2, 3, -4, 3, 1]], expectedOutput: 5 },
      { input: [[100, -90, 200, -50, 20]], expectedOutput: 210 }
    ]
  },
  {
    number: 3,
    title: "Majority Element II",
    topic: "Arrays and Hashing",
    difficulty: "Medium",
    description: "Given an integer array of size `n`, find all elements that appear more than `⌊n / 3⌋` times.",
    constraints: ["1 <= nums.length <= 5 * 10^4", "-10^9 <= nums[i] <= 10^9"],
    examples: [
      { input: "nums = [3,2,3]", output: "[3]", explanation: "3 appears 2 times (> 3/3 = 1)." },
      { input: "nums = [1]", output: "[1]", explanation: "1 appears 1 time (> 1/3 = 0)." },
      { input: "nums = [1,2]", output: "[1,2]", explanation: "Both 1 and 2 appear 1 time (> 2/3 = 0)." }
    ],
    functionName: "majorityElementTwo",
    returnType: "int[]",
    parameters: [{ name: "nums", type: "int[]" }],
    testCases: [
      { input: [[3, 2, 3]], expectedOutput: [3] },
      { input: [[1]], expectedOutput: [1] },
      { input: [[1, 2]], expectedOutput: [1, 2] },
      { input: [[2, 2]], expectedOutput: [2] },
      { input: [[1, 2, 3, 4]], expectedOutput: [] },
      { input: [[1, 1, 1, 3, 3, 2, 2, 2]], expectedOutput: [1, 2] },
      { input: [[0, 0, 0]], expectedOutput: [0] },
      { input: [[4, 4, 4, 1, 2, 3]], expectedOutput: [4] },
      { input: [[-1, -1, -1, 2, 3]], expectedOutput: [-1] },
      { input: [[5, 6, 5, 6, 7]], expectedOutput: [5, 6] }
    ]
  },
  {
    number: 4,
    title: "Maximum Product Subarray in an Array",
    topic: "Arrays and Hashing",
    difficulty: "Medium",
    description: "Given an integer array `nums`, find a subarray that has the largest product, and return the product.",
    constraints: ["1 <= nums.length <= 2 * 10^4", "-10 <= nums[i] <= 10"],
    examples: [
      { input: "nums = [2,3,-2,4]", output: "6", explanation: "[2,3] has the largest product 6." },
      { input: "nums = [-2,0,-1]", output: "0", explanation: "The result cannot be 2, because [-2,-1] is not a subarray." }
    ],
    functionName: "maxProduct",
    returnType: "int",
    parameters: [{ name: "nums", type: "int[]" }],
    testCases: [
      { input: [[2, 3, -2, 4]], expectedOutput: 6 },
      { input: [[-2, 0, -1]], expectedOutput: 0 },
      { input: [[-2]], expectedOutput: -2 },
      { input: [[-2, 3, -4]], expectedOutput: 24 },
      { input: [[0, 2]], expectedOutput: 2 },
      { input: [[-4, -3, -2]], expectedOutput: 12 },
      { input: [[2, -5, -2, -4, 3]], expectedOutput: 24 },
      { input: [[1, 0, -1, 2, 3, -5, -2]], expectedOutput: 60 },
      { input: [[-1, -2, -3, 0]], expectedOutput: 6 },
      { input: [[3, -1, 4]], expectedOutput: 4 }
    ]
  },
  {
    number: 5,
    title: "Sort an Array of 0s, 1s and 2s",
    topic: "Arrays and Hashing",
    difficulty: "Medium",
    description: "Given an array `nums` with `n` objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red (0), white (1), and blue (2).",
    constraints: ["n == nums.length", "1 <= n <= 300", "nums[i] is either 0, 1, or 2."],
    examples: [
      { input: "nums = [2,0,2,1,1,0]", output: "[0,0,1,1,2,2]", explanation: "Sorted 0s, then 1s, then 2s." },
      { input: "nums = [2,0,1]", output: "[0,1,2]", explanation: "Sorted array." }
    ],
    functionName: "sortColors",
    returnType: "int[]",
    parameters: [{ name: "nums", type: "int[]" }],
    testCases: [
      { input: [[2, 0, 2, 1, 1, 0]], expectedOutput: [0, 0, 1, 1, 2, 2] },
      { input: [[2, 0, 1]], expectedOutput: [0, 1, 2] },
      { input: [[0]], expectedOutput: [0] },
      { input: [[1]], expectedOutput: [1] },
      { input: [[2, 2, 1, 0]], expectedOutput: [0, 1, 2, 2] },
      { input: [[0, 0, 0]], expectedOutput: [0, 0, 0] },
      { input: [[1, 2, 0]], expectedOutput: [0, 1, 2] },
      { input: [[2, 1, 2, 1]], expectedOutput: [1, 1, 2, 2] },
      { input: [[1, 0, 2, 1, 0, 2]], expectedOutput: [0, 0, 1, 1, 2, 2] },
      { input: [[2, 2, 2, 0, 0]], expectedOutput: [0, 0, 2, 2, 2] }
    ]
  },
  {
    number: 6,
    title: "3 Sum",
    topic: "Arrays and Hashing",
    difficulty: "Medium",
    description: "Given an integer array `nums`, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`. Notice that the solution set must not contain duplicate triplets.",
    constraints: ["3 <= nums.length <= 3000", "-10^5 <= nums[i] <= 10^5"],
    examples: [
      { input: "nums = [-1,0,1,2,-1,-4]", output: "[[-1,-1,2],[-1,0,1]]", explanation: "Triplets summing to 0." },
      { input: "nums = [0,1,1]", output: "[]", explanation: "No triplet sums to 0." },
      { input: "nums = [0,0,0]", output: "[[0,0,0]]", explanation: "Only one triplet sums to 0." }
    ],
    functionName: "threeSum",
    returnType: "int[][]",
    parameters: [{ name: "nums", type: "int[]" }],
    testCases: [
      { input: [[-1, 0, 1, 2, -1, -4]], expectedOutput: [[-1, -1, 2], [-1, 0, 1]] },
      { input: [[0, 1, 1]], expectedOutput: [] },
      { input: [[0, 0, 0]], expectedOutput: [[0, 0, 0]] },
      { input: [[-2, 0, 1, 1, 2]], expectedOutput: [[-2, 0, 2], [-2, 1, 1]] },
      { input: [[1, 2, -3]], expectedOutput: [[-3, 1, 2]] },
      { input: [[-1, -1, -1, 2]], expectedOutput: [[-1, -1, 2]] },
      { input: [[3, 0, -2, -1, 1, 2]], expectedOutput: [[-2, -1, 3], [-2, 0, 2], [-1, 0, 1]] },
      { input: [[-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]], expectedOutput: [[-4, -2, 6], [-4, 0, 4], [-4, 1, 3], [-4, 2, 2], [-2, -2, 4], [-2, 0, 2]] },
      { input: [[1, -1, 0]], expectedOutput: [[-1, 0, 1]] },
      { input: [[-5, 1, 2, 3, 4]], expectedOutput: [[-5, 1, 4], [-5, 2, 3]] }
    ]
  },
  {
    number: 7,
    title: "Next Permutation",
    topic: "Arrays and Hashing",
    difficulty: "Medium",
    description: "A permutation of an array of integers is an arrangement of its members into a sequence or linear order. Find the next lexicographically greater permutation of its integer array in place.",
    constraints: ["1 <= nums.length <= 100", "0 <= nums[i] <= 100"],
    examples: [
      { input: "nums = [1,2,3]", output: "[1,3,2]", explanation: "Next permutation of [1,2,3] is [1,3,2]." },
      { input: "nums = [3,2,1]", output: "[1,2,3]", explanation: "Next permutation of [3,2,1] wraps around to lowest order [1,2,3]." }
    ],
    functionName: "nextPermutation",
    returnType: "int[]",
    parameters: [{ name: "nums", type: "int[]" }],
    testCases: [
      { input: [[1, 2, 3]], expectedOutput: [1, 3, 2] },
      { input: [[3, 2, 1]], expectedOutput: [1, 2, 3] },
      { input: [[1, 1, 5]], expectedOutput: [1, 5, 1] },
      { input: [[1]], expectedOutput: [1] },
      { input: [[1, 3, 2]], expectedOutput: [2, 1, 3] },
      { input: [[2, 3, 1]], expectedOutput: [3, 1, 2] },
      { input: [[5, 4, 7, 5, 3, 2]], expectedOutput: [5, 5, 2, 3, 4, 7] },
      { input: [[1, 5, 1]], expectedOutput: [5, 1, 1] },
      { input: [[4, 2, 0, 2, 3, 2, 0]], expectedOutput: [4, 2, 0, 3, 0, 2, 2] },
      { input: [[1, 2]], expectedOutput: [2, 1] }
    ]
  },
  {
    number: 8,
    title: "4 Sum",
    topic: "Arrays and Hashing",
    difficulty: "Medium",
    description: "Given an array `nums` of `n` integers, return an array of all the unique quadruplets `[nums[a], nums[b], nums[c], nums[d]]` such that `nums[a] + nums[b] + nums[c] + nums[d] == target`.",
    constraints: ["1 <= nums.length <= 200", "-10^9 <= nums[i] <= 10^9", "-10^9 <= target <= 10^9"],
    examples: [
      { input: "nums = [1,0,-1,0,-2,2], target = 0", output: "[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]", explanation: "Quadruplets summing to target 0." },
      { input: "nums = [2,2,2,2,2], target = 8", output: "[[2,2,2,2]]", explanation: "Quadruplet summing to 8." }
    ],
    functionName: "fourSum",
    returnType: "int[][]",
    parameters: [{ name: "nums", type: "int[]" }, { name: "target", type: "int" }],
    testCases: [
      { input: [[1, 0, -1, 0, -2, 2], 0], expectedOutput: [[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]] },
      { input: [[2, 2, 2, 2, 2], 8], expectedOutput: [[2, 2, 2, 2]] },
      { input: [[0, 0, 0, 0], 0], expectedOutput: [[0, 0, 0, 0]] },
      { input: [[1, 2, 3, 4], 10], expectedOutput: [[1, 2, 3, 4]] },
      { input: [[1, 2, 3, 4], 5], expectedOutput: [] },
      { input: [[-3, -1, 0, 2, 4, 5], 2], expectedOutput: [[-3, -1, 2, 4], [-3, 0, 1, 4]] }, // check
      { input: [[-2, -1, -1, 1, 1, 2, 2], 0], expectedOutput: [[-2, -1, 1, 2], [-1, -1, 1, 1]] },
      { input: [[1000000000, 1000000000, 1000000000, 1000000000], -294967296], expectedOutput: [] },
      { input: [[-3, -2, -1, 0, 0, 1, 2, 3], 0], expectedOutput: [[-3, -2, 2, 3], [-3, -1, 1, 3], [-3, 0, 0, 3], [-3, 0, 1, 2], [-2, -1, 0, 3], [-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]] },
      { input: [[-1, 0, 1, 2, -1, -4], -1], expectedOutput: [[-4, 0, 1, 2], [-1, -1, 0, 1]] }
    ]
  },
  {
    number: 9,
    title: "Merge Two Sorted Arrays Without Extra Space",
    topic: "Arrays and Hashing",
    difficulty: "Hard",
    description: "You are given two integer arrays `nums1` and `nums2`, sorted in non-decreasing order, and two integers `m` and `n`, representing the number of elements in `nums1` and `nums2` respectively. Merge `nums2` into `nums1` as one sorted array in-place.",
    constraints: ["nums1.length == m + n", "nums2.length == n", "0 <= m, n <= 200", "-10^9 <= nums1[i], nums2[j] <= 10^9"],
    examples: [
      { input: "nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3", output: "[1,2,2,3,5,6]", explanation: "Merged arrays." },
      { input: "nums1 = [1], m = 1, nums2 = [], n = 0", output: "[1]", explanation: "Single element array." }
    ],
    functionName: "merge",
    returnType: "int[]",
    parameters: [{ name: "nums1", type: "int[]" }, { name: "m", type: "int" }, { name: "nums2", type: "int[]" }, { name: "n", type: "int" }],
    testCases: [
      { input: [[1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3], expectedOutput: [1, 2, 2, 3, 5, 6] },
      { input: [[1], 1, [], 0], expectedOutput: [1] },
      { input: [[0], 0, [1], 1], expectedOutput: [1] },
      { input: [[4, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3], expectedOutput: [1, 2, 3, 4, 5, 6] },
      { input: [[2, 0], 1, [1], 1], expectedOutput: [1, 2] },
      { input: [[1, 3, 5, 0, 0, 0], 3, [2, 4, 6], 3], expectedOutput: [1, 2, 3, 4, 5, 6] },
      { input: [[-1, 0, 0, 3, 3, 3, 0, 0, 0], 6, [1, 2, 2], 3], expectedOutput: [-1, 0, 0, 1, 2, 2, 3, 3, 3] },
      { input: [[1, 2, 0, 0], 2, [3, 4], 2], expectedOutput: [1, 2, 3, 4] },
      { input: [[-5, -2, 0, 0, 0], 2, [-3, -1, 4], 3], expectedOutput: [-5, -3, -2, -1, 4] },
      { input: [[0, 0, 0], 0, [2, 5, 7], 3], expectedOutput: [2, 5, 7] }
    ]
  },
  {
    number: 10,
    title: "Trapping Rainwater",
    topic: "Arrays and Hashing",
    difficulty: "Hard",
    description: "Given `n` non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
    constraints: ["n == height.length", "1 <= n <= 2 * 10^4", "0 <= height[i] <= 10^5"],
    examples: [
      { input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]", output: "6", explanation: "Traps 6 units of rain water." },
      { input: "height = [4,2,0,3,2,5]", output: "9", explanation: "Traps 9 units of rain water." }
    ],
    functionName: "trap",
    returnType: "int",
    parameters: [{ name: "height", type: "int[]" }],
    testCases: [
      { input: [[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]], expectedOutput: 6 },
      { input: [[4, 2, 0, 3, 2, 5]], expectedOutput: 9 },
      { input: [[1, 1]], expectedOutput: 0 },
      { input: [[3, 0, 2, 0, 4]], expectedOutput: 7 },
      { input: [[2, 0, 2]], expectedOutput: 2 },
      { input: [[5, 4, 1, 2]], expectedOutput: 1 },
      { input: [[0, 2, 0]], expectedOutput: 0 },
      { input: [[1, 2, 3, 4, 5]], expectedOutput: 0 },
      { input: [[5, 2, 1, 2, 1, 5]], expectedOutput: 14 },
      { input: [[6, 4, 2, 0, 3, 2, 0, 3, 1, 4, 5, 3, 2, 7, 5, 3, 0, 1, 2, 1, 3, 4, 6, 8, 1, 3]], expectedOutput: 83 }
    ]
  },
  {
    number: 11,
    title: "Count Inversions",
    topic: "Arrays and Hashing",
    difficulty: "Hard",
    description: "Given an array of integers `nums`, find the number of inversions in the array. Two elements `nums[i]` and `nums[j]` form an inversion if `nums[i] > nums[j]` and `i < j`.",
    constraints: ["1 <= nums.length <= 10^5", "1 <= nums[i] <= 10^9"],
    examples: [
      { input: "nums = [2,4,1,3,5]", output: "3", explanation: "The inversions are (2,1), (4,1), and (4,3)." },
      { input: "nums = [2,3,4,5,6]", output: "0", explanation: "Array is sorted; no inversions." }
    ],
    functionName: "countInversions",
    returnType: "long",
    parameters: [{ name: "nums", type: "int[]" }],
    testCases: [
      { input: [[2, 4, 1, 3, 5]], expectedOutput: 3 },
      { input: [[2, 3, 4, 5, 6]], expectedOutput: 0 },
      { input: [[10, 10, 10]], expectedOutput: 0 },
      { input: [[5, 4, 3, 2, 1]], expectedOutput: 10 },
      { input: [[1]], expectedOutput: 0 },
      { input: [[1, 20, 6, 4, 5]], expectedOutput: 5 },
      { input: [[3, 2, 1]], expectedOutput: 3 },
      { input: [[4, 6, 2, 8, 1]], expectedOutput: 6 },
      { input: [[8, 4, 2, 1]], expectedOutput: 6 },
      { input: [[1, 9, 3, 7, 5, 2]], expectedOutput: 8 }
    ]
  },
  {
    number: 12,
    title: "Reverse Pairs",
    topic: "Arrays and Hashing",
    difficulty: "Hard",
    description: "Given an integer array `nums`, return the number of reverse pairs in the array. A reverse pair is a pair `(i, j)` where `0 <= i < j < nums.length` and `nums[i] > 2 * nums[j]`.",
    constraints: ["1 <= nums.length <= 5 * 10^4", "-2^31 <= nums[i] <= 2^31 - 1"],
    examples: [
      { input: "nums = [1,3,2,3,1]", output: "2", explanation: "(3,1) at indices (1,4) and (3,4) satisfy 3 > 2*1." },
      { input: "nums = [2,4,3,5,1]", output: "3", explanation: "(4,1), (3,1), and (5,1) are valid reverse pairs." }
    ],
    functionName: "reversePairs",
    returnType: "int",
    parameters: [{ name: "nums", type: "int[]" }],
    testCases: [
      { input: [[1, 3, 2, 3, 1]], expectedOutput: 2 },
      { input: [[2, 4, 3, 5, 1]], expectedOutput: 3 },
      { input: [[1]], expectedOutput: 0 },
      { input: [[5, 4, 3, 2, 1]], expectedOutput: 4 },
      { input: [[2147483647, 2147483647, -2147483647, -2147483647, -2147483647, 2147483647]], expectedOutput: 9 },
      { input: [[4, 1, 2, 3]], expectedOutput: 1 },
      { input: [[6, 1, 2, 7, 2]], expectedOutput: 3 },
      { input: [[-5, -5]], expectedOutput: 1 },
      { input: [[1, 2, 3, 4, 5]], expectedOutput: 0 },
      { input: [[7, 2, 5, 1, 8]], expectedOutput: 3 }
    ]
  },
  {
    number: 13,
    title: "Two Sum",
    topic: "Arrays and Hashing",
    difficulty: "Easy",
    description: "Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`. You may assume that each input would have exactly one solution, and you may not use the same element twice.",
    constraints: ["2 <= nums.length <= 10^4", "-10^9 <= nums[i] <= 10^9", "-10^9 <= target <= 10^9"],
    examples: [
      { input: "nums = [2,7,11,15], target = 9", output: "[0,1]", explanation: "nums[0] + nums[1] == 9, we return [0, 1]." },
      { input: "nums = [3,2,4], target = 6", output: "[1,2]", explanation: "nums[1] + nums[2] == 6." }
    ],
    functionName: "twoSum",
    returnType: "int[]",
    parameters: [{ name: "nums", type: "int[]" }, { name: "target", type: "int" }],
    testCases: [
      { input: [[2, 7, 11, 15], 9], expectedOutput: [0, 1] },
      { input: [[3, 2, 4], 6], expectedOutput: [1, 2] },
      { input: [[3, 3], 6], expectedOutput: [0, 1] },
      { input: [[-1, -2, -3, -4, -5], -8], expectedOutput: [2, 4] },
      { input: [[0, 4, 3, 0], 0], expectedOutput: [0, 3] },
      { input: [[1, 5, 8, 3], 11], expectedOutput: [1, 2] },
      { input: [[10, 20, 30, 40], 50], expectedOutput: [1, 2] },
      { input: [[5, 75, 25], 100], expectedOutput: [1, 2] },
      { input: [[1, 2, 3, 7, 11], 9], expectedOutput: [1, 3] },
      { input: [[100, 200, 300], 500], expectedOutput: [1, 2] }
    ]
  },
  {
    number: 14,
    title: "Longest Subarray With Sum K — Positive Integers",
    topic: "Arrays and Hashing",
    difficulty: "Medium",
    description: "Given an array `nums` of positive integers and an integer `k`, find the length of the longest subarray that sums to `k`.",
    constraints: ["1 <= nums.length <= 10^5", "1 <= nums[i] <= 10^9", "1 <= k <= 10^9"],
    examples: [
      { input: "nums = [1,2,3,1,1,1,1], k = 3", output: "3", explanation: "Subarrays with sum 3 are [1,2], [3], and [1,1,1]. Longest length is 3." },
      { input: "nums = [2,3,5], k = 5", output: "2", explanation: "[2,3] has length 2 and sum 5." }
    ],
    functionName: "longestSubarrayWithSumK",
    returnType: "int",
    parameters: [{ name: "nums", type: "int[]" }, { name: "k", type: "int" }],
    testCases: [
      { input: [[1, 2, 3, 1, 1, 1, 1], 3], expectedOutput: 3 },
      { input: [[2, 3, 5], 5], expectedOutput: 2 },
      { input: [[1, 1, 1], 4], expectedOutput: 0 },
      { input: [[10, 5, 2, 7, 1, 9], 15], expectedOutput: 4 },
      { input: [[1, 2, 1, 2, 1], 3], expectedOutput: 2 },
      { input: [[4, 1, 1, 1, 2, 3, 5], 5], expectedOutput: 3 },
      { input: [[1, 4, 45, 6, 0, 19], 51], expectedOutput: 3 },
      { input: [[2, 2, 2, 2], 4], expectedOutput: 2 },
      { input: [[5], 5], expectedOutput: 1 },
      { input: [[1, 2, 3, 4, 5], 15], expectedOutput: 5 }
    ]
  },
  {
    number: 15,
    title: "Longest Subarray With Sum K — Including Negative Integers",
    topic: "Arrays and Hashing",
    difficulty: "Medium",
    description: "Given an array `nums` containing both positive and negative integers, and an integer `k`, find the length of the longest subarray that sums to `k`.",
    constraints: ["1 <= nums.length <= 10^5", "-10^5 <= nums[i] <= 10^5", "-10^9 <= k <= 10^9"],
    examples: [
      { input: "nums = [10,5,2,7,1,-10], k = 15", output: "6", explanation: "Entire array sums to 15, length is 6." },
      { input: "nums = [-5,8,-14,2,4,12], k = -5", output: "5", explanation: "Subarray [-5,8,-14,2,4] sums to -5." }
    ],
    functionName: "longestSubarrayWithSumKAll",
    returnType: "int",
    parameters: [{ name: "nums", type: "int[]" }, { name: "k", type: "int" }],
    testCases: [
      { input: [[10, 5, 2, 7, 1, -10], 15], expectedOutput: 6 },
      { input: [[-5, 8, -14, 2, 4, 12], -5], expectedOutput: 5 },
      { input: [[1, -1, 5, -2, 3], 3], expectedOutput: 4 },
      { input: [[-2, -1, 2, 1], 1], expectedOutput: 3 },
      { input: [[1, 2, 3], 6], expectedOutput: 3 },
      { input: [[1, 2, 3], 10], expectedOutput: 0 },
      { input: [[0, 0, 0], 0], expectedOutput: 3 },
      { input: [[2, -2, 2, -2], 0], expectedOutput: 4 },
      { input: [[-1, 2, -3], -2], expectedOutput: 3 },
      { input: [[3, 1, -1, 2, -1, 5], 4], expectedOutput: 4 }
    ]
  },
  {
    number: 16,
    title: "Count Subarrays With XOR K",
    topic: "Arrays and Hashing",
    difficulty: "Medium",
    description: "Given an array of integers `nums` and an integer `k`, return the total number of subarrays having bitwise XOR equal to `k`.",
    constraints: ["1 <= nums.length <= 10^5", "0 <= nums[i] <= 10^6", "0 <= k <= 10^6"],
    examples: [
      { input: "nums = [4,2,2,6,4], k = 6", output: "4", explanation: "Subarrays: [4,2], [4,2,2,6,4], [2,2,6], [6] all have XOR 6." },
      { input: "nums = [5,6,7,8,9], k = 5", output: "2", explanation: "Subarrays: [5] and [5,6,7,8,9] have XOR 5." }
    ],
    functionName: "countSubarraysWithXorK",
    returnType: "int",
    parameters: [{ name: "nums", type: "int[]" }, { name: "k", type: "int" }],
    testCases: [
      { input: [[4, 2, 2, 6, 4], 6], expectedOutput: 4 },
      { input: [[5, 6, 7, 8, 9], 5], expectedOutput: 2 },
      { input: [[1, 2, 3, 2], 2], expectedOutput: 3 },
      { input: [[0, 0, 0], 0], expectedOutput: 6 },
      { input: [[1, 1, 1, 1], 0], expectedOutput: 4 },
      { input: [[3, 4, 5], 1], expectedOutput: 0 },
      { input: [[2, 2, 2, 2], 2], expectedOutput: 6 },
      { input: [[1, 2, 3], 0], expectedOutput: 1 },
      { input: [[4, 4, 4], 4], expectedOutput: 4 },
      { input: [[10, 20, 30], 10], expectedOutput: 2 }
    ]
  },
  {
    number: 17,
    title: "Longest Subarray With Sum Zero",
    topic: "Arrays and Hashing",
    difficulty: "Medium",
    description: "Given an array `nums` of integers, find the length of the longest subarray with sum 0.",
    constraints: ["1 <= nums.length <= 10^5", "-10^5 <= nums[i] <= 10^5"],
    examples: [
      { input: "nums = [15,-2,2,-8,1,7,10,23]", output: "5", explanation: "Subarray [-2,2,-8,1,7] has sum 0 and length 5." },
      { input: "nums = [1,2,3]", output: "0", explanation: "No subarray sums to 0." }
    ],
    functionName: "maxLenZeroSum",
    returnType: "int",
    parameters: [{ name: "nums", type: "int[]" }],
    testCases: [
      { input: [[15, -2, 2, -8, 1, 7, 10, 23]], expectedOutput: 5 },
      { input: [[1, 2, 3]], expectedOutput: 0 },
      { input: [[1, 0, 3]], expectedOutput: 1 },
      { input: [[0, 0, 0, 0]], expectedOutput: 4 },
      { input: [[-1, 1, -1, 1]], expectedOutput: 4 },
      { input: [[2, 8, -3, -5, 2, -4, 6, 1, 2, 1, -3, 4]], expectedOutput: 11 },
      { input: [[1, 2, -2, 4, -4]], expectedOutput: 4 },
      { input: [[5, -5]], expectedOutput: 2 },
      { input: [[-1, 2, 3]], expectedOutput: 0 },
      { input: [[1, -1, 2, -2, 3, -3]], expectedOutput: 6 }
    ]
  },
  {
    number: 18,
    title: "Longest Consecutive Sequence",
    topic: "Arrays and Hashing",
    difficulty: "Medium",
    description: "Given an unsorted array of integers `nums`, return the length of the longest consecutive elements sequence. You must write an algorithm that runs in O(n) time.",
    constraints: ["0 <= nums.length <= 10^5", "-10^9 <= nums[i] <= 10^9"],
    examples: [
      { input: "nums = [100,4,200,1,3,2]", output: "4", explanation: "The longest consecutive sequence is [1, 2, 3, 4]. Its length is 4." },
      { input: "nums = [0,3,7,2,5,8,4,6,0,1]", output: "9", explanation: "Longest sequence is 0 through 8, length 9." }
    ],
    functionName: "longestConsecutive",
    returnType: "int",
    parameters: [{ name: "nums", type: "int[]" }],
    testCases: [
      { input: [[100, 4, 200, 1, 3, 2]], expectedOutput: 4 },
      { input: [[0, 3, 7, 2, 5, 8, 4, 6, 0, 1]], expectedOutput: 9 },
      { input: [[]], expectedOutput: 0 },
      { input: [[1]], expectedOutput: 1 },
      { input: [[1, 2, 0, 1]], expectedOutput: 3 },
      { input: [[9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]], expectedOutput: 7 },
      { input: [[10, 5, 12, 3]], expectedOutput: 1 },
      { input: [[-2, -3, -1, 0]], expectedOutput: 4 },
      { input: [[10, 20, 30]], expectedOutput: 1 },
      { input: [[1, 2, 3, 4, 5, 6]], expectedOutput: 6 }
    ]
  },
  {
    number: 19,
    title: "Product of Array Except Self",
    topic: "Arrays and Hashing",
    difficulty: "Medium",
    description: "Given an integer array `nums`, return an array `answer` such that `answer[i]` is equal to the product of all the elements of `nums` except `nums[i]`. The product of any prefix or suffix of `nums` is guaranteed to fit in a 32-bit integer.",
    constraints: ["2 <= nums.length <= 10^5", "-30 <= nums[i] <= 30"],
    examples: [
      { input: "nums = [1,2,3,4]", output: "[24,12,8,6]", explanation: "Each index stores product of all other elements." },
      { input: "nums = [-1,1,0,-3,3]", output: "[0,0,9,0,0]", explanation: "Zero handling." }
    ],
    functionName: "productExceptSelf",
    returnType: "int[]",
    parameters: [{ name: "nums", type: "int[]" }],
    testCases: [
      { input: [[1, 2, 3, 4]], expectedOutput: [24, 12, 8, 6] },
      { input: [[-1, 1, 0, -3, 3]], expectedOutput: [0, 0, 9, 0, 0] },
      { input: [[2, 3]], expectedOutput: [3, 2] },
      { input: [[0, 0]], expectedOutput: [0, 0] },
      { input: [[1, 1, 1, 1]], expectedOutput: [1, 1, 1, 1] },
      { input: [[5, 2, 4]], expectedOutput: [8, 20, 10] },
      { input: [[1, -1]], expectedOutput: [-1, 1] },
      { input: [[2, 3, 4, 5]], expectedOutput: [60, 40, 30, 24] },
      { input: [[0, 1, 2, 3]], expectedOutput: [6, 0, 0, 0] },
      { input: [[-2, -2, -2]], expectedOutput: [4, 4, 4] }
    ]
  },
  {
    number: 20,
    title: "Subarray Sum Equals K",
    topic: "Arrays and Hashing",
    difficulty: "Medium",
    description: "Given an array of integers `nums` and an integer `k`, return the total number of subarrays whose sum equals to `k`.",
    constraints: ["1 <= nums.length <= 2 * 10^4", "-1000 <= nums[i] <= 1000", "-10^7 <= k <= 10^7"],
    examples: [
      { input: "nums = [1,1,1], k = 2", output: "2", explanation: "Subarrays [nums[0], nums[1]] and [nums[1], nums[2]]." },
      { input: "nums = [1,2,3], k = 3", output: "2", explanation: "Subarrays [nums[0], nums[1]] and [nums[2]]." }
    ],
    functionName: "subarraySum",
    returnType: "int",
    parameters: [{ name: "nums", type: "int[]" }, { name: "k", type: "int" }],
    testCases: [
      { input: [[1, 1, 1], 2], expectedOutput: 2 },
      { input: [[1, 2, 3], 3], expectedOutput: 2 },
      { input: [[1], 0], expectedOutput: 0 },
      { input: [[-1, -1, 1], 0], expectedOutput: 1 },
      { input: [[1, -1, 0], 0], expectedOutput: 3 },
      { input: [[3, 4, 7, 2, -3, 1, 4, 2], 7], expectedOutput: 4 },
      { input: [[10, 2, -2, -20, 10], -10], expectedOutput: 3 },
      { input: [[0, 0, 0, 0], 0], expectedOutput: 10 },
      { input: [[2, 4, 6], 5], expectedOutput: 0 },
      { input: [[5, 5, 5, 5], 10], expectedOutput: 3 }
    ]
  },
  {
    number: 21,
    title: "Longest Subarray With Equal Number of 0s and 1s",
    topic: "Arrays and Hashing",
    difficulty: "Medium",
    description: "Given a binary array `nums`, return the maximum length of a contiguous subarray with an equal number of 0 and 1.",
    constraints: ["1 <= nums.length <= 10^5", "nums[i] is either 0 or 1."],
    examples: [
      { input: "nums = [0,1]", output: "2", explanation: "[0, 1] is the longest contiguous subarray with an equal number of 0 and 1." },
      { input: "nums = [0,1,0]", output: "2", explanation: "[0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1." }
    ],
    functionName: "findMaxLength",
    returnType: "int",
    parameters: [{ name: "nums", type: "int[]" }],
    testCases: [
      { input: [[0, 1]], expectedOutput: 2 },
      { input: [[0, 1, 0]], expectedOutput: 2 },
      { input: [[0, 0, 0]], expectedOutput: 0 },
      { input: [[1, 1, 1]], expectedOutput: 0 },
      { input: [[0, 1, 1, 0, 1, 1, 1, 0]], expectedOutput: 4 },
      { input: [[0, 0, 1, 0, 0, 0, 1, 1]], expectedOutput: 6 },
      { input: [[0, 1, 0, 1, 0, 1]], expectedOutput: 6 },
      { input: [[1, 0, 1, 0, 1]], expectedOutput: 4 },
      { input: [[0, 1, 1]], expectedOutput: 2 },
      { input: [[1, 1, 0, 0, 1, 1, 0, 0]], expectedOutput: 8 }
    ]
  }
];
export const PART_1_PROBLEMS = TOPIC_1_PROBLEMS;
