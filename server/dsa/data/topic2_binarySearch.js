/**
 * DSA Catalogue Definitions - Topic 2: Binary Search (Problems 22 to 36)
 */

export const TOPIC_2_PROBLEMS = [
  {
    number: 22,
    title: "Find Peak Element",
    topic: "Binary Search",
    difficulty: "Medium",
    description: "A peak element is an element that is strictly greater than its neighbors. Given a 0-indexed integer array `nums`, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks. You must write an algorithm that runs in O(log n) time.",
    constraints: ["1 <= nums.length <= 1000", "-2^31 <= nums[i] <= 2^31 - 1", "nums[i] != nums[i + 1] for all valid i."],
    examples: [
      { input: "nums = [1,2,3,1]", output: "2", explanation: "3 is a peak element and your function should return the index number 2." },
      { input: "nums = [1,2,1,3,5,6,4]", output: "5", explanation: "Your function can return either index 1 where peak element is 2, or index 5 where peak element is 6." }
    ],
    functionName: "findPeakElement",
    returnType: "int",
    parameters: [{ name: "nums", type: "int[]" }],
    testCases: [
      { input: [[1, 2, 3, 1]], expectedOutput: 2 },
      { input: [[1, 2, 1, 3, 5, 6, 4]], expectedOutput: 5 },
      { input: [[1]], expectedOutput: 0 },
      { input: [[1, 2]], expectedOutput: 1 },
      { input: [[2, 1]], expectedOutput: 0 },
      { input: [[1, 3, 2, 1]], expectedOutput: 1 },
      { input: [[1, 2, 3, 4, 5]], expectedOutput: 4 },
      { input: [[5, 4, 3, 2, 1]], expectedOutput: 0 },
      { input: [[1, 5, 1, 2, 1]], expectedOutput: 1 },
      { input: [[3, 4, 3, 2, 1]], expectedOutput: 1 }
    ]
  },
  {
    number: 23,
    title: "Find Minimum in Rotated Sorted Array",
    topic: "Binary Search",
    difficulty: "Medium",
    description: "Suppose an array of length `n` sorted in ascending order is rotated between 1 and `n` times. Given the sorted rotated array `nums` of unique elements, return the minimum element of this array. You must write an algorithm that runs in O(log n) time.",
    constraints: ["n == nums.length", "1 <= n <= 5000", "-5000 <= nums[i] <= 5000", "All elements of nums are unique."],
    examples: [
      { input: "nums = [3,4,5,1,2]", output: "1", explanation: "Original array was [1,2,3,4,5] rotated 3 times." },
      { input: "nums = [4,5,6,7,0,1,2]", output: "0", explanation: "Original array was [0,1,2,4,5,6,7] and it was rotated 4 times." }
    ],
    functionName: "findMin",
    returnType: "int",
    parameters: [{ name: "nums", type: "int[]" }],
    testCases: [
      { input: [[3, 4, 5, 1, 2]], expectedOutput: 1 },
      { input: [[4, 5, 6, 7, 0, 1, 2]], expectedOutput: 0 },
      { input: [[11, 13, 15, 17]], expectedOutput: 11 },
      { input: [[2, 1]], expectedOutput: 1 },
      { input: [[1]], expectedOutput: 1 },
      { input: [[3, 1, 2]], expectedOutput: 1 },
      { input: [[5, 1, 2, 3, 4]], expectedOutput: 1 },
      { input: [[2, 3, 4, 5, 1]], expectedOutput: 1 },
      { input: [[5, 6, 7, 8, 9, 1, 2, 3]], expectedOutput: 1 },
      { input: [[10, 20, 30, 5]], expectedOutput: 5 }
    ]
  },
  {
    number: 24,
    title: "Search in Rotated Sorted Array II",
    topic: "Binary Search",
    difficulty: "Medium",
    description: "There is an integer array `nums` sorted in non-decreasing order (not necessarily with distinct values). Given the array `nums` after rotation and an integer `target`, return `true` if `target` is in `nums`, or `false` if it is not in `nums`.",
    constraints: ["1 <= nums.length <= 5000", "-10^4 <= nums[i] <= 10^4", "-10^4 <= target <= 10^4"],
    examples: [
      { input: "nums = [2,5,6,0,0,1,2], target = 0", output: "true", explanation: "0 is present in nums." },
      { input: "nums = [2,5,6,0,0,1,2], target = 3", output: "false", explanation: "3 is not present in nums." }
    ],
    functionName: "searchRotatedII",
    returnType: "boolean",
    parameters: [{ name: "nums", type: "int[]" }, { name: "target", type: "int" }],
    testCases: [
      { input: [[2, 5, 6, 0, 0, 1, 2], 0], expectedOutput: true },
      { input: [[2, 5, 6, 0, 0, 1, 2], 3], expectedOutput: false },
      { input: [[1, 0, 1, 1, 1], 0], expectedOutput: true },
      { input: [[1, 1, 1, 1, 1], 2], expectedOutput: false },
      { input: [[1], 1], expectedOutput: true },
      { input: [[1], 0], expectedOutput: false },
      { input: [[3, 1, 1], 3], expectedOutput: true },
      { input: [[1, 1, 3, 1], 3], expectedOutput: true },
      { input: [[2, 2, 2, 3, 2, 2, 2], 3], expectedOutput: true },
      { input: [[4, 5, 6, 7, 0, 1, 2], 5], expectedOutput: true }
    ]
  },
  {
    number: 25,
    title: "Single Element in a Sorted Array",
    topic: "Binary Search",
    difficulty: "Medium",
    description: "You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once. Return the single element that appears only once in O(log n) time and O(1) space.",
    constraints: ["1 <= nums.length <= 10^5", "0 <= nums[i] <= 10^5"],
    examples: [
      { input: "nums = [1,1,2,3,3,4,4,8,8]", output: "2", explanation: "2 appears only once." },
      { input: "nums = [3,3,7,7,10,11,11]", output: "10", explanation: "10 appears only once." }
    ],
    functionName: "singleNonDuplicate",
    returnType: "int",
    parameters: [{ name: "nums", type: "int[]" }],
    testCases: [
      { input: [[1, 1, 2, 3, 3, 4, 4, 8, 8]], expectedOutput: 2 },
      { input: [[3, 3, 7, 7, 10, 11, 11]], expectedOutput: 10 },
      { input: [[1]], expectedOutput: 1 },
      { input: [[1, 1, 2]], expectedOutput: 2 },
      { input: [[2, 3, 3]], expectedOutput: 2 },
      { input: [[1, 2, 2, 3, 3]], expectedOutput: 1 },
      { input: [[1, 1, 2, 2, 3]], expectedOutput: 3 },
      { input: [[0, 1, 1]], expectedOutput: 0 },
      { input: [[1, 1, 3, 3, 5, 5, 7, 8, 8]], expectedOutput: 7 },
      { input: [[10, 10, 20, 20, 30, 40, 40]], expectedOutput: 30 }
    ]
  },
  {
    number: 26,
    title: "Search in a 2D Matrix II",
    topic: "Binary Search",
    difficulty: "Medium",
    description: "Write an efficient algorithm that searches for a value `target` in an `m x n` integer matrix `matrix`. Integers in each row are sorted in ascending from left to right. Integers in each column are sorted in ascending from top to bottom.",
    constraints: ["m == matrix.length", "n == matrix[i].length", "1 <= n, m <= 300", "-10^9 <= matrix[i][j] <= 10^9", "-10^9 <= target <= 10^9"],
    examples: [
      { input: "matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5", output: "true", explanation: "5 is found." },
      { input: "matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20", output: "false", explanation: "20 is not found." }
    ],
    functionName: "searchMatrixII",
    returnType: "boolean",
    parameters: [{ name: "matrix", type: "int[][]" }, { name: "target", type: "int" }],
    testCases: [
      { input: [[[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]], 5], expectedOutput: true },
      { input: [[[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]], 20], expectedOutput: false },
      { input: [[[-5]], -5], expectedOutput: true },
      { input: [[[-5]], 5], expectedOutput: false },
      { input: [[[1, 3, 5]], 3], expectedOutput: true },
      { input: [[[1], [3], [5]], 4], expectedOutput: false },
      { input: [[[1, 2, 3], [4, 5, 6], [7, 8, 9]], 9], expectedOutput: true },
      { input: [[[1, 2, 3], [4, 5, 6], [7, 8, 9]], 1], expectedOutput: true },
      { input: [[[1, 4], [2, 5]], 2], expectedOutput: true },
      { input: [[[1, 4], [2, 5]], 6], expectedOutput: false }
    ]
  },
  {
    number: 27,
    title: "Find Peak Element II",
    topic: "Binary Search",
    difficulty: "Medium",
    description: "A peak element in a 2D grid is an element that is strictly greater than all of its adjacent neighbors to the left, right, top, and bottom. Find any peak element `mat[i][j]` and return its coordinates `[i, j]` in O(m * log(n)) or O(n * log(m)) time.",
    constraints: ["m == mat.length", "n == mat[i].length", "1 <= m, n <= 500", "1 <= mat[i][j] <= 10^5", "No two adjacent cells are equal."],
    examples: [
      { input: "mat = [[1,4],[3,2]]", output: "[0,1]", explanation: "4 is strictly greater than 1 and 2." },
      { input: "mat = [[10,20,15],[21,30,14],[7,16,32]]", output: "[1,1]", explanation: "30 is greater than 20, 21, 14, 16." }
    ],
    functionName: "findPeakGrid",
    returnType: "int[]",
    parameters: [{ name: "mat", type: "int[][]" }],
    testCases: [
      { input: [[[1, 4], [3, 2]]], expectedOutput: [0, 1] },
      { input: [[[10, 20, 15], [21, 30, 14], [7, 16, 32]]], expectedOutput: [1, 1] },
      { input: [[[1]]], expectedOutput: [0, 0] },
      { input: [[[10, 50, 40], [20, 30, 10]]], expectedOutput: [0, 1] },
      { input: [[[1, 2, 3, 4, 5]]], expectedOutput: [0, 4] },
      { input: [[[5], [4], [3], [2], [1]]], expectedOutput: [0, 0] },
      { input: [[[7, 2, 3], [6, 5, 4]]], expectedOutput: [0, 0] },
      { input: [[[1, 3, 2], [4, 6, 5], [7, 9, 8]]], expectedOutput: [2, 1] },
      { input: [[[10, 9], [8, 7]]], expectedOutput: [0, 0] },
      { input: [[[25, 37, 23], [13, 19, 21], [40, 35, 32]]], expectedOutput: [0, 1] }
    ]
  },
  {
    number: 28,
    title: "Search a 2D Matrix",
    topic: "Binary Search",
    difficulty: "Medium",
    description: "You are given an `m x n` integer matrix `matrix` with two properties: Each row is sorted in non-decreasing order. The first integer of each row is greater than the last integer of the previous row. Given an integer `target`, return `true` if `target` is in `matrix` or `false` otherwise in O(log(m * n)) time.",
    constraints: ["m == matrix.length", "n == matrix[i].length", "1 <= m, n <= 100", "-10^4 <= matrix[i][j], target <= 10^4"],
    examples: [
      { input: "matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3", output: "true", explanation: "3 is found." },
      { input: "matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13", output: "false", explanation: "13 is not found." }
    ],
    functionName: "searchMatrix",
    returnType: "boolean",
    parameters: [{ name: "matrix", type: "int[][]" }, { name: "target", type: "int" }],
    testCases: [
      { input: [[[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3], expectedOutput: true },
      { input: [[[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 13], expectedOutput: false },
      { input: [[[1]], 1], expectedOutput: true },
      { input: [[[1]], 2], expectedOutput: false },
      { input: [[[1, 3]], 3], expectedOutput: true },
      { input: [[[1], [3]], 3], expectedOutput: true },
      { input: [[[1, 2, 3], [4, 5, 6]], 5], expectedOutput: true },
      { input: [[[1, 2, 3], [4, 5, 6]], 7], expectedOutput: false },
      { input: [[[1, 4, 7], [10, 14, 17]], 14], expectedOutput: true },
      { input: [[[2, 3, 4], [5, 6, 7]], 1], expectedOutput: false }
    ]
  },
  {
    number: 29,
    title: "Find First and Last Position of Element in Sorted Array",
    topic: "Binary Search",
    difficulty: "Medium",
    description: "Given an array of integers `nums` sorted in non-decreasing order, find the starting and ending position of a given `target` value. If `target` is not found in the array, return `[-1, -1]`. You must write an algorithm with O(log n) runtime complexity.",
    constraints: ["0 <= nums.length <= 10^5", "-10^9 <= nums[i] <= 10^9", "nums is a non-decreasing array.", "-10^9 <= target <= 10^9"],
    examples: [
      { input: "nums = [5,7,7,8,8,10], target = 8", output: "[3,4]", explanation: "8 starts at index 3 and ends at index 4." },
      { input: "nums = [5,7,7,8,8,10], target = 6", output: "[-1,-1]", explanation: "6 is not in the array." }
    ],
    functionName: "searchRange",
    returnType: "int[]",
    parameters: [{ name: "nums", type: "int[]" }, { name: "target", type: "int" }],
    testCases: [
      { input: [[5, 7, 7, 8, 8, 10], 8], expectedOutput: [3, 4] },
      { input: [[5, 7, 7, 8, 8, 10], 6], expectedOutput: [-1, -1] },
      { input: [[], 0], expectedOutput: [-1, -1] },
      { input: [[1], 1], expectedOutput: [0, 0] },
      { input: [[1, 1, 1, 1], 1], expectedOutput: [0, 3] },
      { input: [[2, 2], 2], expectedOutput: [0, 1] },
      { input: [[1, 3], 1], expectedOutput: [0, 0] },
      { input: [[1, 3], 3], expectedOutput: [1, 1] },
      { input: [[1, 2, 3, 3, 3, 4, 5], 3], expectedOutput: [2, 4] },
      { input: [[1, 4, 4, 4, 5, 6], 4], expectedOutput: [1, 3] }
    ]
  },
  {
    number: 30,
    title: "Find Nth Root of a Number",
    topic: "Binary Search",
    difficulty: "Easy",
    description: "You are given two numbers `n` and `m`. Find the `n`th root of `m` (i.e., `x` such that `x^n = m`). If the `n`th root is not an integer, return `-1`.",
    constraints: ["1 <= n <= 30", "1 <= m <= 10^9"],
    examples: [
      { input: "n = 3, m = 27", output: "3", explanation: "3^3 = 27." },
      { input: "n = 4, m = 69", output: "-1", explanation: "4th root of 69 is not an integer." }
    ],
    functionName: "nthRoot",
    returnType: "int",
    parameters: [{ name: "n", type: "int" }, { name: "m", type: "int" }],
    testCases: [
      { input: [3, 27], expectedOutput: 3 },
      { input: [4, 69], expectedOutput: -1 },
      { input: [2, 16], expectedOutput: 4 },
      { input: [1, 14], expectedOutput: 14 },
      { input: [2, 9], expectedOutput: 3 },
      { input: [3, 64], expectedOutput: 4 },
      { input: [5, 32], expectedOutput: 2 },
      { input: [6, 64], expectedOutput: 2 },
      { input: [2, 10], expectedOutput: -1 },
      { input: [9, 512], expectedOutput: 2 }
    ]
  },
  {
    number: 31,
    title: "Koko Eating Bananas",
    topic: "Binary Search",
    difficulty: "Medium",
    description: "Koko loves to eat bananas. There are `n` piles of bananas, the `i`th pile has `piles[i]` bananas. The guards will come back in `h` hours. Return the minimum integer `k` such that she can eat all the bananas within `h` hours.",
    constraints: ["1 <= piles.length <= 10^4", "piles.length <= h <= 10^9", "1 <= piles[i] <= 10^9"],
    examples: [
      { input: "piles = [3,6,7,11], h = 8", output: "4", explanation: "At speed 4 she eats all in 8 hours." },
      { input: "piles = [30,11,23,4,20], h = 5", output: "30", explanation: "She needs speed 30." }
    ],
    functionName: "minEatingSpeed",
    returnType: "int",
    parameters: [{ name: "piles", type: "int[]" }, { name: "h", type: "int" }],
    testCases: [
      { input: [[3, 6, 7, 11], 8], expectedOutput: 4 },
      { input: [[30, 11, 23, 4, 20], 5], expectedOutput: 30 },
      { input: [[30, 11, 23, 4, 20], 6], expectedOutput: 23 },
      { input: [[1, 1, 1, 1], 4], expectedOutput: 1 },
      { input: [[312884470], 312884469], expectedOutput: 2 },
      { input: [[10], 2], expectedOutput: 5 },
      { input: [[5, 5, 5], 3], expectedOutput: 5 },
      { input: [[2, 2], 4], expectedOutput: 1 },
      { input: [[1000000000], 2], expectedOutput: 500000000 },
      { input: [[4, 11, 20, 23, 30], 10], expectedOutput: 10 }
    ]
  },
  {
    number: 32,
    title: "Aggressive Cows",
    topic: "Binary Search",
    difficulty: "Hard",
    description: "You are given an array `stalls` of positions in a stall and an integer `k` representing the number of aggressive cows. Assign stalls to `k` cows such that the minimum distance between any two of them is the maximum possible. Return that largest minimum distance.",
    constraints: ["2 <= stalls.length <= 10^5", "0 <= stalls[i] <= 10^9", "2 <= k <= stalls.length"],
    examples: [
      { input: "stalls = [1,2,4,8,9], k = 3", output: "3", explanation: "Cows can be placed at stalls 1, 4, 8 with min distance 3." },
      { input: "stalls = [10,1,2,7,5], k = 3", output: "4", explanation: "Cows placed at 1, 5, 10 with min distance 4." }
    ],
    functionName: "aggressiveCows",
    returnType: "int",
    parameters: [{ name: "stalls", type: "int[]" }, { name: "k", type: "int" }],
    testCases: [
      { input: [[1, 2, 4, 8, 9], 3], expectedOutput: 3 },
      { input: [[10, 1, 2, 7, 5], 3], expectedOutput: 4 },
      { input: [[0, 3, 4, 7, 10, 9], 4], expectedOutput: 3 },
      { input: [[1, 5], 2], expectedOutput: 4 },
      { input: [[1, 2, 3], 2], expectedOutput: 2 },
      { input: [[1, 2, 8, 4, 9], 3], expectedOutput: 3 },
      { input: [[79, 74, 99, 13, 86, 21, 62, 59, 11, 47], 5], expectedOutput: 12 },
      { input: [[1, 10, 20, 30], 2], expectedOutput: 29 },
      { input: [[5, 17, 100, 11], 2], expectedOutput: 95 },
      { input: [[2, 4, 6, 8, 10], 3], expectedOutput: 4 }
    ]
  },
  {
    number: 33,
    title: "Book Allocation Problem",
    topic: "Binary Search",
    difficulty: "Hard",
    description: "Given an array `books` of pages and an integer `students`, allocate books to each student such that maximum pages allocated to a student is minimized. Each student must get at least one book and books must be allocated contiguously. If allocation is impossible, return `-1`.",
    constraints: ["1 <= books.length <= 10^5", "1 <= books[i] <= 10^5", "1 <= students <= 10^5"],
    examples: [
      { input: "books = [12,34,67,90], students = 2", output: "113", explanation: "Allocation: [12,34,67] and [90] gives max pages 113." },
      { input: "books = [25,46,28,49,24], students = 4", output: "71", explanation: "Max pages allocated is 71." }
    ],
    functionName: "findPages",
    returnType: "int",
    parameters: [{ name: "books", type: "int[]" }, { name: "students", type: "int" }],
    testCases: [
      { input: [[12, 34, 67, 90], 2], expectedOutput: 113 },
      { input: [[25, 46, 28, 49, 24], 4], expectedOutput: 71 },
      { input: [[10, 20, 30, 40], 5], expectedOutput: -1 },
      { input: [[10, 20, 30, 40], 2], expectedOutput: 60 },
      { input: [[15, 17, 20], 2], expectedOutput: 32 },
      { input: [[10, 10, 10, 10], 2], expectedOutput: 20 },
      { input: [[5, 17, 100, 11], 4], expectedOutput: 100 },
      { input: [[100], 1], expectedOutput: 100 },
      { input: [[20, 10, 30, 40, 50], 3], expectedOutput: 60 },
      { input: [[1, 2, 3, 4, 5, 6, 7, 8, 9], 5], expectedOutput: 11 }
    ]
  },
  {
    number: 34,
    title: "Matrix Median",
    topic: "Binary Search",
    difficulty: "Hard",
    description: "Given a row-wise sorted matrix `matrix` of size `R x C` where `R * C` is always odd, find the median of the matrix in O(32 * R * log(C)) time.",
    constraints: ["1 <= R, C <= 500", "R * C is odd", "1 <= matrix[i][j] <= 2000"],
    examples: [
      { input: "matrix = [[1,3,5],[2,6,9],[3,6,9]]", output: "5", explanation: "Sorted elements: [1,2,3,3,5,6,6,9,9]. Median is 5." },
      { input: "matrix = [[1],[2],[3]]", output: "2", explanation: "Median of [1,2,3] is 2." }
    ],
    functionName: "matrixMedian",
    returnType: "int",
    parameters: [{ name: "matrix", type: "int[][]" }],
    testCases: [
      { input: [[[1, 3, 5], [2, 6, 9], [3, 6, 9]]], expectedOutput: 5 },
      { input: [[[1], [2], [3]]], expectedOutput: 2 },
      { input: [[[1, 3, 4], [2, 5, 6], [7, 8, 9]]], expectedOutput: 5 },
      { input: [[[5]]], expectedOutput: 5 },
      { input: [[[1, 1, 2], [2, 3, 3], [4, 5, 5]]], expectedOutput: 3 },
      { input: [[[2, 3, 8], [1, 4, 7], [6, 8, 9]]], expectedOutput: 6 },
      { input: [[[1, 2, 3, 4, 5]]], expectedOutput: 3 },
      { input: [[[1, 1, 1], [1, 1, 1], [1, 1, 1]]], expectedOutput: 1 },
      { input: [[[1, 3, 8], [2, 3, 4], [1, 2, 5]]], expectedOutput: 3 },
      { input: [[[1, 4, 9], [2, 5, 6], [3, 8, 7]]], expectedOutput: 5 }
    ]
  },
  {
    number: 35,
    title: "Kth Element of Two Sorted Arrays",
    topic: "Binary Search",
    difficulty: "Medium",
    description: "Given two sorted arrays `a` and `b` of size `m` and `n` respectively, find the element that would be at the `k`th position of the final sorted array in O(log(min(m, n))) time.",
    constraints: ["1 <= a.length, b.length <= 10^5", "1 <= a[i], b[i] <= 10^9", "1 <= k <= a.length + b.length"],
    examples: [
      { input: "a = [2,3,6,7,9], b = [1,4,8,10], k = 5", output: "6", explanation: "Merged sorted: [1,2,3,4,6,7,8,9,10]. 5th element is 6." },
      { input: "a = [100,112,256,349,770], b = [72,86,113,119,265,445,892], k = 7", output: "256", explanation: "7th element is 256." }
    ],
    functionName: "kthElement",
    returnType: "int",
    parameters: [{ name: "a", type: "int[]" }, { name: "b", type: "int[]" }, { name: "k", type: "int" }],
    testCases: [
      { input: [[2, 3, 6, 7, 9], [1, 4, 8, 10], 5], expectedOutput: 6 },
      { input: [[100, 112, 256, 349, 770], [72, 86, 113, 119, 265, 445, 892], 7], expectedOutput: 256 },
      { input: [[1, 2], [3, 4], 1], expectedOutput: 1 },
      { input: [[1, 2], [3, 4], 4], expectedOutput: 4 },
      { input: [[5], [2, 3, 6, 7], 1], expectedOutput: 2 },
      { input: [[1, 3, 5], [2, 4, 6], 6], expectedOutput: 6 },
      { input: [[2, 3, 4], [1], 2], expectedOutput: 2 },
      { input: [[10], [5], 2], expectedOutput: 10 },
      { input: [[1, 10, 20], [2, 3, 4, 5], 4], expectedOutput: 4 },
      { input: [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], 5], expectedOutput: 5 }
    ]
  },
  {
    number: 36,
    title: "Median of Two Sorted Arrays",
    topic: "Binary Search",
    difficulty: "Hard",
    description: "Given two sorted arrays `nums1` and `nums2` of size `m` and `n` respectively, return the median of the two sorted arrays in O(log(m + n)) time.",
    constraints: ["nums1.length == m", "nums2.length == n", "0 <= m, n <= 1000", "1 <= m + n <= 2000", "-10^6 <= nums1[i], nums2[i] <= 10^6"],
    examples: [
      { input: "nums1 = [1,3], nums2 = [2]", output: "2.0", explanation: "Merged array = [1,2,3] and median is 2." },
      { input: "nums1 = [1,2], nums2 = [3,4]", output: "2.5", explanation: "Merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5." }
    ],
    functionName: "findMedianSortedArrays",
    returnType: "double",
    parameters: [{ name: "nums1", type: "int[]" }, { name: "nums2", type: "int[]" }],
    testCases: [
      { input: [[1, 3], [2]], expectedOutput: 2.0 },
      { input: [[1, 2], [3, 4]], expectedOutput: 2.5 },
      { input: [[0, 0], [0, 0]], expectedOutput: 0.0 },
      { input: [[], [1]], expectedOutput: 1.0 },
      { input: [[2], []], expectedOutput: 2.0 },
      { input: [[1, 3, 5], [2, 4, 6]], expectedOutput: 3.5 },
      { input: [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]], expectedOutput: 5.5 },
      { input: [[1, 2], [1, 2, 3]], expectedOutput: 2.0 },
      { input: [[1, 5, 9], [2, 3, 4, 6, 7, 8]], expectedOutput: 5.0 },
      { input: [[3], [1, 2, 4]], expectedOutput: 2.5 }
    ]
  }
];
