/**
 * Generator script for Topics 7 and 8 (Problems 92 to 105)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_DIR = path.resolve(__dirname, 'data');

function writeTopic(filename, constName, problems) {
  const filePath = path.join(DATA_DIR, filename);
  const content = `/**
 * ${filename}
 */

export const ${constName} = ${JSON.stringify(problems, null, 2)};
`;
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`[Generated] ${filename} with ${problems.length} problems.`);
}

// -------------------------------------------------------------
// TOPIC 7: Greedy (92 - 99) -> 8 problems
// -------------------------------------------------------------
const topic7Problems = [
  {
    number: 92,
    title: "Jump Game I",
    topic: "Greedy",
    difficulty: "Medium",
    description: "You are given an integer array `nums`. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position. Return `true` if you can reach the last index, or `false` otherwise.",
    constraints: ["1 <= nums.length <= 10^4", "0 <= nums[i] <= 10^5"],
    examples: [
      { input: "nums = [2,3,1,1,4]", output: "true", explanation: "Jump 1 step from index 0 to 1, then 3 steps to the last index." },
      { input: "nums = [3,2,1,0,4]", output: "false", explanation: "You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index." }
    ],
    functionName: "canJump",
    returnType: "boolean",
    parameters: [{ name: "nums", type: "int[]" }],
    testCases: [
      { input: [[2, 3, 1, 1, 4]], expectedOutput: true },
      { input: [[3, 2, 1, 0, 4]], expectedOutput: false },
      { input: [[0]], expectedOutput: true },
      { input: [[2, 0, 0]], expectedOutput: true },
      { input: [[1, 2, 3]], expectedOutput: true },
      { input: [[0, 2, 3]], expectedOutput: false },
      { input: [[1, 0, 1, 0]], expectedOutput: false },
      { input: [[2, 5, 0, 0]], expectedOutput: true },
      { input: [[1, 1, 1, 1, 1]], expectedOutput: true },
      { input: [[1, 2, 0, 1]], expectedOutput: true }
    ]
  },
  {
    number: 93,
    title: "Valid Parenthesis Checker",
    topic: "Greedy",
    difficulty: "Medium",
    description: "Given a string `s` containing only three types of characters: '(', ')' and '*', return `true` if `s` is valid. '*' could be treated as a single right parenthesis ')', a single left parenthesis '(', or an empty string \"\".",
    constraints: ["1 <= s.length <= 100", "s[i] is '(', ')' or '*'."],
    examples: [
      { input: "s = '()'", output: "true", explanation: "Valid parentheses." },
      { input: "s = '(*)'", output: "true", explanation: "'*' acts as empty string." },
      { input: "s = '(*))'", output: "true", explanation: "'*' acts as '('." }
    ],
    functionName: "checkValidString",
    returnType: "boolean",
    parameters: [{ name: "s", type: "string" }],
    testCases: [
      { input: ["()"], expectedOutput: true },
      { input: ["(*)"], expectedOutput: true },
      { input: ["(*))"], expectedOutput: true },
      { input: [")("], expectedOutput: false },
      { input: ["*"], expectedOutput: true },
      { input: ["(**)"], expectedOutput: true },
      { input: ["((*)"], expectedOutput: true },
      { input: ["(((******))"], expectedOutput: true },
      { input: ["(*()"], expectedOutput: true },
      { input: [")*("], expectedOutput: false }
    ]
  },
  {
    number: 94,
    title: "Candy",
    topic: "Greedy",
    difficulty: "Hard",
    description: "There are `n` children standing in a line. Each child is assigned a rating value given in the integer array `ratings`. Each child must have at least one candy. Children with a higher rating get more candies than their neighbors. Return the minimum number of candies you need to have to distribute the candies to the children.",
    constraints: ["n == ratings.length", "1 <= n <= 2 * 10^4", "0 <= ratings[i] <= 2 * 10^4"],
    examples: [
      { input: "ratings = [1,0,2]", output: "5", explanation: "Allocations are [2,1,2]." },
      { input: "ratings = [1,2,2]", output: "4", explanation: "Allocations are [1,2,1]." }
    ],
    functionName: "candy",
    returnType: "int",
    parameters: [{ name: "ratings", type: "int[]" }],
    testCases: [
      { input: [[1, 0, 2]], expectedOutput: 5 },
      { input: [[1, 2, 2]], expectedOutput: 4 },
      { input: [[1]], expectedOutput: 1 },
      { input: [[1, 2, 87, 87, 87, 2, 1]], expectedOutput: 13 },
      { input: [[1, 3, 2, 2, 1]], expectedOutput: 7 },
      { input: [[1, 2, 3, 4, 5]], expectedOutput: 15 },
      { input: [[5, 4, 3, 2, 1]], expectedOutput: 15 },
      { input: [[1, 3, 4, 5, 2]], expectedOutput: 11 },
      { input: [[1, 6, 10, 8, 7, 3, 2]], expectedOutput: 18 },
      { input: [[29, 51, 87, 87, 72, 12]], expectedOutput: 12 }
    ]
  },
  {
    number: 95,
    title: "N Meetings in One Room",
    topic: "Greedy",
    difficulty: "Easy",
    description: "There is one meeting room in a firm. There are `N` meetings in the form of `(start[i], end[i])`. What is the maximum number of meetings that can be accommodated in the meeting room when only one meeting can be held in the meeting room at a particular time?",
    constraints: ["1 <= N <= 10^5", "0 <= start[i] < end[i] <= 10^5"],
    examples: [
      { input: "start = [1,3,0,5,8,5], end = [2,4,6,7,9,9]", output: "4", explanation: "Meetings can be held at (1,2), (3,4), (5,7) and (8,9)." },
      { input: "start = [10,12,20], end = [20,25,30]", output: "1", explanation: "Only one meeting can be held." }
    ],
    functionName: "maxMeetings",
    returnType: "int",
    parameters: [{ name: "start", type: "int[]" }, { name: "end", type: "int[]" }],
    testCases: [
      { input: [[1, 3, 0, 5, 8, 5], [2, 4, 6, 7, 9, 9]], expectedOutput: 4 },
      { input: [[10, 12, 20], [20, 25, 30]], expectedOutput: 1 },
      { input: [[1, 2], [100, 99]], expectedOutput: 1 },
      { input: [[75250, 50074, 43659, 8931, 11273, 27545, 50, 66], [112960, 83884, 58241, 12384, 15840, 38120, 56, 70]], expectedOutput: 7 },
      { input: [[1], [2]], expectedOutput: 1 },
      { input: [[1, 3, 5], [2, 4, 6]], expectedOutput: 3 },
      { input: [[1, 2, 3], [4, 5, 6]], expectedOutput: 1 },
      { input: [[0, 1, 2], [3, 4, 5]], expectedOutput: 1 },
      { input: [[1, 2, 3, 4], [2, 3, 4, 5]], expectedOutput: 4 },
      { input: [[1, 5, 8], [2, 7, 10]], expectedOutput: 3 }
    ]
  },
  {
    number: 96,
    title: "Insert Interval",
    topic: "Greedy",
    difficulty: "Medium",
    description: "You are given an array of non-overlapping intervals `intervals` where `intervals[i] = [start_i, end_i]` sorted in ascending order by `start_i`. You are also given an interval `newInterval = [start, end]`. Insert `newInterval` into `intervals` such that `intervals` is still sorted and non-overlapping.",
    constraints: ["0 <= intervals.length <= 10^4", "intervals[i].length == 2", "0 <= start_i <= end_i <= 10^5", "newInterval.length == 2"],
    examples: [
      { input: "intervals = [[1,3],[6,9]], newInterval = [2,5]", output: "[[1,5],[6,9]]", explanation: "Interval [2,5] overlaps with [1,3], merging into [1,5]." },
      { input: "intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]", output: "[[1,2],[3,10],[12,16]]", explanation: "Intervals [3,5],[6,7],[8,10] merge with [4,8] into [3,10]." }
    ],
    functionName: "insert",
    returnType: "int[][]",
    parameters: [{ name: "intervals", type: "int[][]" }, { name: "newInterval", type: "int[]" }],
    testCases: [
      { input: [[[1, 3], [6, 9]], [2, 5]], expectedOutput: [[1, 5], [6, 9]] },
      { input: [[[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8]], expectedOutput: [[1, 2], [3, 10], [12, 16]] },
      { input: [[], [5, 7]], expectedOutput: [[5, 7]] },
      { input: [[[1, 5]], [2, 3]], expectedOutput: [[1, 5]] },
      { input: [[[1, 5]], [2, 7]], expectedOutput: [[1, 7]] },
      { input: [[[1, 5]], [6, 8]], expectedOutput: [[1, 5], [6, 8]] },
      { input: [[[6, 8]], [1, 5]], expectedOutput: [[1, 5], [6, 8]] },
      { input: [[[1, 5], [6, 8]], [0, 9]], expectedOutput: [[0, 9]] },
      { input: [[[3, 5], [12, 15]], [6, 6]], expectedOutput: [[3, 5], [6, 6], [12, 15]] },
      { input: [[[1, 2], [7, 8]], [3, 6]], expectedOutput: [[1, 2], [3, 6], [7, 8]] }
    ]
  },
  {
    number: 97,
    title: "Non-overlapping Intervals",
    topic: "Greedy",
    difficulty: "Medium",
    description: "Given an array of intervals `intervals` where `intervals[i] = [start_i, end_i]`, return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.",
    constraints: ["1 <= intervals.length <= 10^5", "intervals[i].length == 2", "-5 * 10^4 <= start_i < end_i <= 5 * 10^4"],
    examples: [
      { input: "intervals = [[1,2],[2,3],[3,4],[1,3]]", output: "1", explanation: "[1,3] can be removed and the rest are non-overlapping." },
      { input: "intervals = [[1,2],[1,2],[1,2]]", output: "2", explanation: "You need to remove two [1,2] to make the rest non-overlapping." }
    ],
    functionName: "eraseOverlapIntervals",
    returnType: "int",
    parameters: [{ name: "intervals", type: "int[][]" }],
    testCases: [
      { input: [[[1, 2], [2, 3], [3, 4], [1, 3]]], expectedOutput: 1 },
      { input: [[[1, 2], [1, 2], [1, 2]]], expectedOutput: 2 },
      { input: [[[1, 2], [2, 3]]], expectedOutput: 0 },
      { input: [[[1, 100], [11, 22], [1, 11], [2, 12]]], expectedOutput: 2 },
      { input: [[[0, 2], [1, 3], [2, 4], [3, 5], [4, 6]]], expectedOutput: 2 },
      { input: [[[1, 2]]], expectedOutput: 0 },
      { input: [[[1, 5], [2, 3], [3, 4]]], expectedOutput: 1 },
      { input: [[[1, 10], [2, 3], [4, 5], [6, 7], [8, 9]]], expectedOutput: 1 },
      { input: [[[1, 2], [3, 4], [5, 6]]], expectedOutput: 0 },
      { input: [[[1, 4], [2, 5], [3, 6]]], expectedOutput: 2 }
    ]
  },
  {
    number: 98,
    title: "Minimum Number of Platforms Required for a Railway",
    topic: "Greedy",
    difficulty: "Medium",
    description: "Given arrival and departure times of all trains that reach a railway station. Find the minimum number of platforms required for the railway station so that no train is kept waiting.",
    constraints: ["1 <= n <= 50000", "0000 <= arr[i] <= dep[i] <= 2359"],
    examples: [
      { input: "arr = [900,940,950,1100,1500,1800], dep = [910,1200,1120,1130,1900,2000]", output: "3", explanation: "Max concurrent trains is 3 between 11:00 and 11:20." }
    ],
    functionName: "findPlatform",
    returnType: "int",
    parameters: [{ name: "arr", type: "int[]" }, { name: "dep", type: "int[]" }],
    testCases: [
      { input: [[900, 940, 950, 1100, 1500, 1800], [910, 1200, 1120, 1130, 1900, 2000]], expectedOutput: 3 },
      { input: [[900, 1100, 1235], [1000, 1200, 1240]], expectedOutput: 1 },
      { input: [[100], [200]], expectedOutput: 1 },
      { input: [[900, 910], [905, 920]], expectedOutput: 1 },
      { input: [[900, 905], [910, 920]], expectedOutput: 2 },
      { input: [[1000, 1030, 1100], [1020, 1045, 1115]], expectedOutput: 1 },
      { input: [[1000, 1010, 1020], [1015, 1025, 1035]], expectedOutput: 2 },
      { input: [[1, 2, 3], [4, 5, 6]], expectedOutput: 3 },
      { input: [[100, 200, 300], [150, 250, 350]], expectedOutput: 1 },
      { input: [[10, 15, 20, 25], [30, 35, 40, 45]], expectedOutput: 4 }
    ]
  },
  {
    number: 99,
    title: "Job Sequencing Problem",
    topic: "Greedy",
    difficulty: "Medium",
    description: "Given a set of `N` jobs where each job `i` has a deadline and profit associated with it. Each job takes 1 unit of time to complete and only one job can be scheduled at a time. Earn the maximum profit if each job must be completed before or at its deadline. Return `[countOfJobs, maxProfit]`.",
    constraints: ["1 <= N <= 10^5", "1 <= Deadline <= N", "1 <= Profit <= 500"],
    examples: [
      { input: "Jobs = [[1,4,20],[2,1,10],[3,1,40],[4,1,30]]", output: "[2, 60]", explanation: "Job 3 (profit 40) at time 1, Job 1 (profit 20) at time 2. Total profit: 60." }
    ],
    functionName: "JobScheduling",
    returnType: "int[]",
    parameters: [{ name: "jobs", type: "int[][]" }],
    testCases: [
      { input: [[[1, 4, 20], [2, 1, 10], [3, 1, 40], [4, 1, 30]]], expectedOutput: [2, 60] },
      { input: [[[1, 2, 100], [2, 1, 19], [3, 2, 27], [4, 1, 25], [5, 1, 15]]], expectedOutput: [2, 127] },
      { input: [[[1, 1, 50]]], expectedOutput: [1, 50] },
      { input: [[[1, 1, 10], [2, 1, 20], [3, 1, 30]]], expectedOutput: [1, 30] },
      { input: [[[1, 2, 50], [2, 2, 60], [3, 1, 20]]], expectedOutput: [2, 110] },
      { input: [[[1, 3, 10], [2, 3, 20], [3, 3, 30]]], expectedOutput: [3, 60] },
      { input: [[[1, 2, 100], [2, 1, 50], [3, 2, 10]]], expectedOutput: [2, 150] },
      { input: [[[1, 4, 70], [2, 1, 80], [3, 1, 30], [4, 1, 100]]], expectedOutput: [2, 170] },
      { input: [[[1, 2, 80], [2, 2, 90]]], expectedOutput: [2, 170] },
      { input: [[[1, 1, 40], [2, 1, 30], [3, 1, 20], [4, 1, 10]]], expectedOutput: [1, 40] }
    ]
  }
];

writeTopic('topic7_greedy.js', 'TOPIC_7_PROBLEMS', topic7Problems);

// -------------------------------------------------------------
// TOPIC 8: Heaps (100 - 105) -> 6 problems
// -------------------------------------------------------------
const topic8Problems = [
  {
    number: 100,
    title: "Heapify Algorithm",
    topic: "Heaps",
    difficulty: "Medium",
    description: "Given an array `arr` of size `n`, implement the min-heapify algorithm to convert the array into a valid Min-Heap in O(n) time. Return the heapified array.",
    constraints: ["1 <= n <= 10^5", "-10^9 <= arr[i] <= 10^9"],
    examples: [
      { input: "arr = [4,10,3,5,1]", output: "[1,4,3,5,10]", explanation: "Min-heap property satisfied: parent <= children." }
    ],
    functionName: "buildMinHeap",
    returnType: "int[]",
    parameters: [{ name: "arr", type: "int[]" }],
    testCases: [
      { input: [[4, 10, 3, 5, 1]], expectedOutput: [1, 4, 3, 5, 10] },
      { input: [[1, 2, 3, 4, 5]], expectedOutput: [1, 2, 3, 4, 5] },
      { input: [[5, 4, 3, 2, 1]], expectedOutput: [1, 2, 3, 5, 4] },
      { input: [[1]], expectedOutput: [1] },
      { input: [[2, 1]], expectedOutput: [1, 2] },
      { input: [[10, 20, 15, 30, 40]], expectedOutput: [10, 20, 15, 30, 40] },
      { input: [[9, 8, 7, 6, 5, 4, 3]], expectedOutput: [3, 5, 4, 6, 8, 9, 7] },
      { input: [[0, -1, -2]], expectedOutput: [-2, -1, 0] },
      { input: [[3, 3, 3]], expectedOutput: [3, 3, 3] },
      { input: [[12, 11, 13, 5, 6, 7]], expectedOutput: [5, 6, 7, 11, 12, 13] }
    ]
  },
  {
    number: 101,
    title: "Build Heap From a Given Array",
    topic: "Heaps",
    difficulty: "Medium",
    description: "Given an array `arr` of size `n`, build a Max-Heap from the given array in O(n) time. Return the resulting max-heap array.",
    constraints: ["1 <= n <= 10^5", "-10^9 <= arr[i] <= 10^9"],
    examples: [
      { input: "arr = [1,3,5,4,6,13,10,9,8,15,17]", output: "[17,15,13,9,6,5,10,4,8,3,1]", explanation: "Max-heap property: parent >= children." }
    ],
    functionName: "buildMaxHeap",
    returnType: "int[]",
    parameters: [{ name: "arr", type: "int[]" }],
    testCases: [
      { input: [[1, 3, 5, 4, 6, 13, 10, 9, 8, 15, 17]], expectedOutput: [17, 15, 13, 9, 6, 5, 10, 4, 8, 3, 1] },
      { input: [[4, 10, 3, 5, 1]], expectedOutput: [10, 5, 3, 4, 1] },
      { input: [[1]], expectedOutput: [1] },
      { input: [[1, 2]], expectedOutput: [2, 1] },
      { input: [[1, 2, 3]], expectedOutput: [3, 2, 1] },
      { input: [[3, 2, 1]], expectedOutput: [3, 2, 1] },
      { input: [[10, 20, 30, 40]], expectedOutput: [40, 20, 30, 10] },
      { input: [[-1, -2, -3]], expectedOutput: [-1, -2, -3] },
      { input: [[5, 5, 5]], expectedOutput: [5, 5, 5] },
      { input: [[2, 8, 5, 3, 9, 1]], expectedOutput: [9, 8, 5, 3, 2, 1] }
    ]
  },
  {
    number: 102,
    title: "Implement Min Heap",
    topic: "Heaps",
    difficulty: "Medium",
    description: "Design a Min Heap data structure that supports `insert(val)`, `extractMin()`, and `getMin()` in O(log n) time.",
    constraints: ["1 <= Q <= 10^5", "-10^9 <= val <= 10^9"],
    examples: [
      { input: "insert(4), insert(2), getMin(), extractMin(), getMin()", output: "[2, 2, 4]", explanation: "Min Heap operations." }
    ],
    functionName: "class MinHeap",
    returnType: "void",
    isDesign: true,
    parameters: [],
    testCases: [
      { input: [["MinHeap", "insert", "insert", "getMin", "extractMin", "getMin"], [[], [4], [2], [], [], []]], expectedOutput: [null, null, null, 2, 2, 4] },
      { input: [["MinHeap", "insert", "getMin"], [[], [10], []]], expectedOutput: [null, null, 10] },
      { input: [["MinHeap", "insert", "insert", "insert", "getMin"], [[], [5], [3], [7], []]], expectedOutput: [null, null, null, null, 3] },
      { input: [["MinHeap", "insert", "insert", "extractMin", "extractMin"], [[], [8], [6], [], []]], expectedOutput: [null, null, null, 6, 8] },
      { input: [["MinHeap", "insert", "insert", "insert", "extractMin", "getMin"], [[], [1], [2], [0], [], []]], expectedOutput: [null, null, null, null, 0, 1] },
      { input: [["MinHeap", "insert", "extractMin"], [[], [100], []]], expectedOutput: [null, null, 100] },
      { input: [["MinHeap", "insert", "insert", "getMin"], [[], [2], [1], []]], expectedOutput: [null, null, null, 1] },
      { input: [["MinHeap", "insert", "insert", "insert", "extractMin"], [[], [10], [20], [5], []]], expectedOutput: [null, null, null, null, 5] },
      { input: [["MinHeap", "insert", "insert", "extractMin"], [[], [-5], [-2], []]], expectedOutput: [null, null, null, -5] },
      { input: [["MinHeap", "insert", "insert", "insert", "getMin"], [[], [3], [1], [2], []]], expectedOutput: [null, null, null, null, 1] }
    ]
  },
  {
    number: 103,
    title: "Kth Largest Element in an Array",
    topic: "Heaps",
    difficulty: "Medium",
    description: "Given an integer array `nums` and an integer `k`, return the `k`th largest element in the array. Can you solve it in O(n) average time complexity?",
    constraints: ["1 <= k <= nums.length <= 10^5", "-10^4 <= nums[i] <= 10^4"],
    examples: [
      { input: "nums = [3,2,1,5,6,4], k = 2", output: "5", explanation: "2nd largest is 5." },
      { input: "nums = [3,2,3,1,2,4,5,5,6], k = 4", output: "4", explanation: "4th largest is 4." }
    ],
    functionName: "findKthLargest",
    returnType: "int",
    parameters: [{ name: "nums", type: "int[]" }, { name: "k", type: "int" }],
    testCases: [
      { input: [[3, 2, 1, 5, 6, 4], 2], expectedOutput: 5 },
      { input: [[3, 2, 3, 1, 2, 4, 5, 5, 6], 4], expectedOutput: 4 },
      { input: [[1], 1], expectedOutput: 1 },
      { input: [[2, 1], 1], expectedOutput: 2 },
      { input: [[2, 1], 2], expectedOutput: 1 },
      { input: [[7, 10, 4, 3, 20, 15], 3], expectedOutput: 10 },
      { input: [[-1, 2, 0], 2], expectedOutput: 0 },
      { input: [[-1, -1], 2], expectedOutput: -1 },
      { input: [[1, 2, 3, 4, 5, 6], 1], expectedOutput: 6 },
      { input: [[1, 2, 3, 4, 5, 6], 6], expectedOutput: 1 }
    ]
  },
  {
    number: 104,
    title: "Find Median From Data Stream",
    topic: "Heaps",
    difficulty: "Hard",
    description: "The median is the middle value in an ordered integer list. Implement the `MedianFinder` class with `addNum(num)` and `findMedian()` in O(log n) time.",
    constraints: ["-10^5 <= num <= 10^5", "There will be at least one element in the data structure before calling findMedian.", "At most 5 * 10^4 calls will be made to addNum and findMedian."],
    examples: [
      { input: "MedianFinder mf = new MedianFinder(); mf.addNum(1); mf.addNum(2); mf.findMedian(); mf.addNum(3); mf.findMedian();", output: "[null, null, null, 1.5, null, 2.0]", explanation: "Medians found." }
    ],
    functionName: "class MedianFinder",
    returnType: "void",
    isDesign: true,
    parameters: [],
    testCases: [
      { input: [["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"], [[], [1], [2], [], [3], []]], expectedOutput: [null, null, null, 1.5, null, 2.0] },
      { input: [["MedianFinder", "addNum", "findMedian"], [[], [2], []]], expectedOutput: [null, null, 2.0] },
      { input: [["MedianFinder", "addNum", "addNum", "findMedian"], [[], [6], [10], []]], expectedOutput: [null, null, null, 8.0] },
      { input: [["MedianFinder", "addNum", "addNum", "addNum", "findMedian"], [[], [5], [15], [1], []]], expectedOutput: [null, null, null, null, 5.0] },
      { input: [["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"], [[], [2], [3], [], [4], []]], expectedOutput: [null, null, null, 2.5, null, 3.0] },
      { input: [["MedianFinder", "addNum", "findMedian", "addNum", "findMedian"], [[], [-1], [], [-2], []]], expectedOutput: [null, null, -1.0, null, -1.5] },
      { input: [["MedianFinder", "addNum", "addNum", "addNum", "addNum", "findMedian"], [[], [1], [2], [3], [4], []]], expectedOutput: [null, null, null, null, null, 2.5] },
      { input: [["MedianFinder", "addNum", "addNum", "addNum", "findMedian"], [[], [10], [20], [30], []]], expectedOutput: [null, null, null, null, 20.0] },
      { input: [["MedianFinder", "addNum", "findMedian"], [[], [0], []]], expectedOutput: [null, null, 0.0] },
      { input: [["MedianFinder", "addNum", "addNum", "findMedian"], [[], [-5], [5], []]], expectedOutput: [null, null, null, 0.0] }
    ]
  },
  {
    number: 105,
    title: "Top K Frequent Elements",
    topic: "Heaps",
    difficulty: "Medium",
    description: "Given an integer array `nums` and an integer `k`, return the `k` most frequent elements. You may return the answer in any order.",
    constraints: ["1 <= nums.length <= 10^5", "-10^4 <= nums[i] <= 10^4", "k is in the range [1, the number of unique elements in the array].", "It is guaranteed that the answer is unique."],
    examples: [
      { input: "nums = [1,1,1,2,2,3], k = 2", output: "[1,2]", explanation: "1 appears 3 times, 2 appears 2 times." },
      { input: "nums = [1], k = 1", output: "[1]", explanation: "1 appears once." }
    ],
    functionName: "topKFrequent",
    returnType: "int[]",
    parameters: [{ name: "nums", type: "int[]" }, { name: "k", type: "int" }],
    testCases: [
      { input: [[1, 1, 1, 2, 2, 3], 2], expectedOutput: [1, 2] },
      { input: [[1], 1], expectedOutput: [1] },
      { input: [[1, 2], 2], expectedOutput: [1, 2] },
      { input: [[4, 1, -1, 2, -1, 2, 3], 2], expectedOutput: [-1, 2] },
      { input: [[3, 0, 1, 0], 1], expectedOutput: [0] },
      { input: [[1, 1, 2, 2, 3, 3, 3], 1], expectedOutput: [3] },
      { input: [[5, 5, 5, 5, 2, 2, 2, 1, 1, 3], 3], expectedOutput: [5, 2, 1] },
      { input: [[1, 2, 3, 4], 4], expectedOutput: [1, 2, 3, 4] },
      { input: [[10, 20, 10, 30, 20, 10], 2], expectedOutput: [10, 20] },
      { input: [[7, 7, 8, 8, 9], 2], expectedOutput: [7, 8] }
    ]
  }
];

writeTopic('topic8_heaps.js', 'TOPIC_8_PROBLEMS', topic8Problems);
