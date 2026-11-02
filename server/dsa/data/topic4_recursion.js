/**
 * DSA Catalogue Definitions - Topic 4: Recursion and Backtracking (Problems 48 to 57)
 */

export const TOPIC_4_PROBLEMS = [
  {
    number: 48,
    title: "Power Set",
    topic: "Recursion and Backtracking",
    difficulty: "Medium",
    description: "Given an integer array `nums` of unique elements, return all possible subsets (the power set). The solution set must not contain duplicate subsets. Return the solution in any order.",
    constraints: ["1 <= nums.length <= 10", "-10 <= nums[i] <= 10", "All the numbers of nums are unique."],
    examples: [
      { input: "nums = [1,2,3]", output: "[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]", explanation: "All 8 subsets." },
      { input: "nums = [0]", output: "[[],[0]]", explanation: "All 2 subsets." }
    ],
    functionName: "subsets",
    returnType: "int[][]",
    parameters: [{ name: "nums", type: "int[]" }],
    testCases: [
      { input: [[1, 2, 3]], expectedOutput: [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]] },
      { input: [[0]], expectedOutput: [[], [0]] },
      { input: [[1, 2]], expectedOutput: [[], [1], [2], [1, 2]] },
      { input: [[4, 5, 6]], expectedOutput: [[], [4], [5], [4, 5], [6], [4, 6], [5, 6], [4, 5, 6]] },
      { input: [[9]], expectedOutput: [[], [9]] },
      { input: [[-1, 1]], expectedOutput: [[], [-1], [1], [-1, 1]] },
      { input: [[1, 3, 5, 7]], expectedOutput: [[], [1], [3], [1, 3], [5], [1, 5], [3, 5], [1, 3, 5], [7], [1, 7], [3, 7], [1, 3, 7], [5, 7], [1, 5, 7], [3, 5, 7], [1, 3, 5, 7]] },
      { input: [[2, 4]], expectedOutput: [[], [2], [4], [2, 4]] },
      { input: [[0, 1]], expectedOutput: [[], [0], [1], [0, 1]] },
      { input: [[7, 8]], expectedOutput: [[], [7], [8], [7, 8]] }
    ]
  },
  {
    number: 49,
    title: "Generate Parentheses",
    topic: "Recursion and Backtracking",
    difficulty: "Medium",
    description: "Given `n` pairs of parentheses, write a function to generate all combinations of well-formed parentheses.",
    constraints: ["1 <= n <= 8"],
    examples: [
      { input: "n = 3", output: "['((()))','(()())','(())()','()(())','()()()']", explanation: "5 valid combinations." },
      { input: "n = 1", output: "['()']", explanation: "Only 1 valid combination." }
    ],
    functionName: "generateParenthesis",
    returnType: "string[]",
    parameters: [{ name: "n", type: "int" }],
    testCases: [
      { input: [3], expectedOutput: ["((()))", "(()())", "(())()", "()(())", "()()()"] },
      { input: [1], expectedOutput: ["()"] },
      { input: [2], expectedOutput: ["(())", "()()"] },
      { input: [4], expectedOutput: ["(((())))", "((()()))", "((())())", "((()))()", "(()(()))", "(()()())", "(()())()", "(())(())", "(())()()", "()((()))", "()(()())", "()(())()", "()()(())", "()()()()"] },
      { input: [1], expectedOutput: ["()"] },
      { input: [2], expectedOutput: ["(())", "()()"] },
      { input: [3], expectedOutput: ["((()))", "(()())", "(())()", "()(())", "()()()"] },
      { input: [2], expectedOutput: ["(())", "()()"] },
      { input: [1], expectedOutput: ["()"] },
      { input: [3], expectedOutput: ["((()))", "(()())", "(())()", "()(())", "()()()"] }
    ]
  },
  {
    number: 50,
    title: "Letter Combinations of a Phone Number",
    topic: "Recursion and Backtracking",
    difficulty: "Medium",
    description: "Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order. A mapping of digits to letters (just like on the telephone buttons) is given: 2: abc, 3: def, 4: ghi, 5: jkl, 6: mno, 7: pqrs, 8: tuv, 9: wxyz.",
    constraints: ["0 <= digits.length <= 4", "digits[i] is a digit in the range ['2', '9']."],
    examples: [
      { input: "digits = '23'", output: "['ad','ae','af','bd','be','bf','cd','ce','cf']", explanation: "All 9 letter combinations." },
      { input: "digits = ''", output: "[]", explanation: "Empty digits returns empty array." }
    ],
    functionName: "letterCombinations",
    returnType: "string[]",
    parameters: [{ name: "digits", type: "string" }],
    testCases: [
      { input: ["23"], expectedOutput: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"] },
      { input: [""], expectedOutput: [] },
      { input: ["2"], expectedOutput: ["a", "b", "c"] },
      { input: ["7"], expectedOutput: ["p", "q", "r", "s"] },
      { input: ["9"], expectedOutput: ["w", "x", "y", "z"] },
      { input: ["24"], expectedOutput: ["ag", "ah", "ai", "bg", "bh", "bi", "cg", "ch", "ci"] },
      { input: ["33"], expectedOutput: ["dd", "de", "df", "ed", "ee", "ef", "fd", "fe", "ff"] },
      { input: ["45"], expectedOutput: ["gj", "gk", "gl", "hj", "hk", "hl", "ij", "ik", "il"] },
      { input: ["79"], expectedOutput: ["pw", "px", "py", "pz", "qw", "qx", "qy", "qz", "rw", "rx", "ry", "rz", "sw", "sx", "sy", "sz"] },
      { input: ["8"], expectedOutput: ["t", "u", "v"] }
    ]
  },
  {
    number: 51,
    title: "Combination Sum",
    topic: "Recursion and Backtracking",
    difficulty: "Medium",
    description: "Given an array of distinct integers `candidates` and a target integer `target`, return a list of all unique combinations of `candidates` where the chosen numbers sum to `target`. You may return the combinations in any order. The same number may be chosen from `candidates` an unlimited number of times.",
    constraints: ["1 <= candidates.length <= 30", "2 <= candidates[i] <= 40", "All elements of candidates are distinct.", "1 <= target <= 40"],
    examples: [
      { input: "candidates = [2,3,6,7], target = 7", output: "[[2,2,3],[7]]", explanation: "2 and 3 can be chosen multiple times. 2 + 2 + 3 = 7." },
      { input: "candidates = [2,3,5], target = 8", output: "[[2,2,2,2],[2,3,3],[3,5]]", explanation: "Combinations summing to 8." }
    ],
    functionName: "combinationSum",
    returnType: "int[][]",
    parameters: [{ name: "candidates", type: "int[]" }, { name: "target", type: "int" }],
    testCases: [
      { input: [[2, 3, 6, 7], 7], expectedOutput: [[2, 2, 3], [7]] },
      { input: [[2, 3, 5], 8], expectedOutput: [[2, 2, 2, 2], [2, 3, 3], [3, 5]] },
      { input: [[2], 1], expectedOutput: [] },
      { input: [[1], 2], expectedOutput: [[1, 1]] },
      { input: [[1, 2], 4], expectedOutput: [[1, 1, 1, 1], [1, 1, 2], [1, 2, 2], [2, 2]] },
      { input: [[3, 5], 9], expectedOutput: [[3, 3, 3]] },
      { input: [[2, 4], 7], expectedOutput: [] },
      { input: [[4, 2, 8], 8], expectedOutput: [[2, 2, 2, 2], [2, 2, 4], [4, 4], [8]] },
      { input: [[5, 10, 15], 15], expectedOutput: [[5, 5, 5], [5, 10], [15]] },
      { input: [[2, 3], 6], expectedOutput: [[2, 2, 2], [3, 3]] }
    ]
  },
  {
    number: 52,
    title: "Combination Sum II",
    topic: "Recursion and Backtracking",
    difficulty: "Medium",
    description: "Given a collection of candidate numbers (`candidates`) and a target number (`target`), find all unique combinations in `candidates` where the candidate numbers sum to `target`. Each number in `candidates` may only be used once in the combination. Note: The solution set must not contain duplicate combinations.",
    constraints: ["1 <= candidates.length <= 100", "1 <= candidates[i] <= 50", "1 <= target <= 30"],
    examples: [
      { input: "candidates = [10,1,2,7,6,1,5], target = 8", output: "[[1,1,6],[1,2,5],[1,7],[2,6]]", explanation: "Unique combinations summing to 8." },
      { input: "candidates = [2,5,2,1,2], target = 5", output: "[[1,2,2],[5]]", explanation: "Unique combinations summing to 5." }
    ],
    functionName: "combinationSum2",
    returnType: "int[][]",
    parameters: [{ name: "candidates", type: "int[]" }, { name: "target", type: "int" }],
    testCases: [
      { input: [[10, 1, 2, 7, 6, 1, 5], 8], expectedOutput: [[1, 1, 6], [1, 2, 5], [1, 7], [2, 6]] },
      { input: [[2, 5, 2, 1, 2], 5], expectedOutput: [[1, 2, 2], [5]] },
      { input: [[1], 1], expectedOutput: [[1]] },
      { input: [[1], 2], expectedOutput: [] },
      { input: [[1, 1, 1, 1], 2], expectedOutput: [[1, 1]] },
      { input: [[2, 3, 4], 6], expectedOutput: [[2, 4]] },
      { input: [[1, 2, 3, 4, 5], 5], expectedOutput: [[1, 4], [2, 3], [5]] },
      { input: [[1, 2, 2, 2, 5], 5], expectedOutput: [[1, 2, 2], [5]] },
      { input: [[3, 1, 3, 5, 1, 1], 8], expectedOutput: [[1, 1, 1, 5], [1, 1, 3, 3], [3, 5]] },
      { input: [[4, 4, 2, 1, 4, 2, 2, 1, 3], 6], expectedOutput: [[1, 1, 2, 2], [1, 1, 4], [1, 2, 3], [2, 2, 2], [2, 4]] }
    ]
  },
  {
    number: 53,
    title: "Subsets II",
    topic: "Recursion and Backtracking",
    difficulty: "Medium",
    description: "Given an integer array `nums` that may contain duplicates, return all possible subsets (the power set). The solution set must not contain duplicate subsets. Return the solution in any order.",
    constraints: ["1 <= nums.length <= 10", "-10 <= nums[i] <= 10"],
    examples: [
      { input: "nums = [1,2,2]", output: "[[],[1],[1,2],[1,2,2],[2],[2,2]]", explanation: "All 6 unique subsets." },
      { input: "nums = [0]", output: "[[],[0]]", explanation: "All 2 unique subsets." }
    ],
    functionName: "subsetsWithDup",
    returnType: "int[][]",
    parameters: [{ name: "nums", type: "int[]" }],
    testCases: [
      { input: [[1, 2, 2]], expectedOutput: [[], [1], [1, 2], [1, 2, 2], [2], [2, 2]] },
      { input: [[0]], expectedOutput: [[], [0]] },
      { input: [[4, 4, 4, 1, 4]], expectedOutput: [[], [1], [1, 4], [1, 4, 4], [1, 4, 4, 4], [1, 4, 4, 4, 4], [4], [4, 4], [4, 4, 4], [4, 4, 4, 4]] },
      { input: [[1, 1]], expectedOutput: [[], [1], [1, 1]] },
      { input: [[2, 1, 2]], expectedOutput: [[], [1], [1, 2], [1, 2, 2], [2], [2, 2]] },
      { input: [[1]], expectedOutput: [[], [1]] },
      { input: [[-1, 1, 2]], expectedOutput: [[], [-1], [-1, 1], [-1, 1, 2], [-1, 2], [1], [1, 2], [2]] },
      { input: [[2, 2, 2]], expectedOutput: [[], [2], [2, 2], [2, 2, 2]] },
      { input: [[1, 3, 3]], expectedOutput: [[], [1], [1, 3], [1, 3, 3], [3], [3, 3]] },
      { input: [[5, 5]], expectedOutput: [[], [5], [5, 5]] }
    ]
  },
  {
    number: 54,
    title: "Palindrome Partitioning",
    topic: "Recursion and Backtracking",
    difficulty: "Medium",
    description: "Given a string `s`, partition `s` such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of `s`.",
    constraints: ["1 <= s.length <= 16", "s contains only lowercase English letters."],
    examples: [
      { input: "s = 'aab'", output: "[['a','a','b'],['aa','b']]", explanation: "Palindromic partitions of 'aab'." },
      { input: "s = 'a'", output: "[['a']]", explanation: "Single character partition." }
    ],
    functionName: "partition",
    returnType: "string[][]",
    parameters: [{ name: "s", type: "string" }],
    testCases: [
      { input: ["aab"], expectedOutput: [["a", "a", "b"], ["aa", "b"]] },
      { input: ["a"], expectedOutput: [["a"]] },
      { input: ["aa"], expectedOutput: [["a", "a"], ["aa"]] },
      { input: ["aba"], expectedOutput: [["a", "b", "a"], ["aba"]] },
      { input: ["racecar"], expectedOutput: [["r", "a", "c", "e", "c", "a", "r"], ["r", "a", "cec", "a", "r"], ["r", "aceca", "r"], ["racecar"]] },
      { input: ["ab"], expectedOutput: [["a", "b"]] },
      { input: ["aaa"], expectedOutput: [["a", "a", "a"], ["a", "aa"], ["aa", "a"], ["aaa"]] },
      { input: ["bb"], expectedOutput: [["b", "b"], ["bb"]] },
      { input: ["cdd"], expectedOutput: [["c", "d", "d"], ["c", "dd"]] },
      { input: ["efe"], expectedOutput: [["e", "f", "e"], ["efe"]] }
    ]
  },
  {
    number: 55,
    title: "Word Search",
    topic: "Recursion and Backtracking",
    difficulty: "Medium",
    description: "Given an `m x n` grid of characters `board` and a string `word`, return `true` if `word` exists in the grid. The word can be constructed from letters of sequentially adjacent cells (horizontally or vertically neighboring). The same letter cell may not be used more than once.",
    constraints: ["m == board.length", "n = board[i].length", "1 <= m, n <= 6", "1 <= word.length <= 15", "board and word consist of only lowercase and uppercase English letters."],
    examples: [
      { input: "board = [['A','B','C','E'],['S','F','C','S'],['A','D','E','E']], word = 'ABCCED'", output: "true", explanation: "Path A->B->C->C->E->D exists." },
      { input: "board = [['A','B','C','E'],['S','F','C','S'],['A','D','E','E']], word = 'SEE'", output: "true", explanation: "Path S->E->E exists." }
    ],
    functionName: "exist",
    returnType: "boolean",
    parameters: [{ name: "board", type: "char[][]" }, { name: "word", type: "string" }],
    testCases: [
      { input: [[["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "ABCCED"], expectedOutput: true },
      { input: [[["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "SEE"], expectedOutput: true },
      { input: [[["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "ABCB"], expectedOutput: false },
      { input: [[["a"]], "a"], expectedOutput: true },
      { input: [[["a"]], "b"], expectedOutput: false },
      { input: [[["A", "B"], ["C", "D"]], "ABCD"], expectedOutput: false },
      { input: [[["A", "B"], ["C", "D"]], "ABDC"], expectedOutput: true },
      { input: [[["a", "b"], ["c", "d"]], "acdb"], expectedOutput: true },
      { input: [[["a", "a"]], "aaa"], expectedOutput: false },
      { input: [[["A", "B", "C", "E"], ["S", "F", "E", "S"], ["A", "D", "E", "E"]], "ABCESEEEFS"], expectedOutput: true }
    ]
  },
  {
    number: 56,
    title: "N-Queens",
    topic: "Recursion and Backtracking",
    difficulty: "Hard",
    description: "The n-queens puzzle is the problem of placing `n` queens on an `n x n` chessboard such that no two queens attack each other. Given an integer `n`, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.",
    constraints: ["1 <= n <= 9"],
    examples: [
      { input: "n = 4", output: "[['.Q..','...Q','Q...','..Q.'],['..Q.','Q...','...Q','.Q..']]", explanation: "Two distinct 4-queens configurations." },
      { input: "n = 1", output: "[['Q']]", explanation: "Single queen on 1x1 board." }
    ],
    functionName: "solveNQueens",
    returnType: "string[][]",
    parameters: [{ name: "n", type: "int" }],
    testCases: [
      { input: [4], expectedOutput: [[".Q..", "...Q", "Q...", "..Q."], ["..Q.", "Q...", "...Q", ".Q.."]] },
      { input: [1], expectedOutput: [["Q"]] },
      { input: [2], expectedOutput: [] },
      { input: [3], expectedOutput: [] },
      { input: [4], expectedOutput: [[".Q..", "...Q", "Q...", "..Q."], ["..Q.", "Q...", "...Q", ".Q.."]] },
      { input: [1], expectedOutput: [["Q"]] },
      { input: [2], expectedOutput: [] },
      { input: [4], expectedOutput: [[".Q..", "...Q", "Q...", "..Q."], ["..Q.", "Q...", "...Q", ".Q.."]] },
      { input: [1], expectedOutput: [["Q"]] },
      { input: [3], expectedOutput: [] }
    ]
  },
  {
    number: 57,
    title: "Sudoku Solver",
    topic: "Recursion and Backtracking",
    difficulty: "Hard",
    description: "Write a program to solve a Sudoku puzzle by filling the empty cells. A sudoku solution must satisfy all of the following rules: Each of the digits 1-9 must occur exactly once in each row, each column, and each of the 9 3x3 sub-boxes of the grid. The '.' character indicates empty cells.",
    constraints: ["board.length == 9", "board[i].length == 9", "board[i][j] is a digit or '.'.", "It is guaranteed that the input board has only one solution."],
    examples: [
      { input: "board = 9x9 sudoku", output: "solved 9x9 sudoku", explanation: "Fills in valid digits 1-9." }
    ],
    functionName: "solveSudoku",
    returnType: "char[][]",
    parameters: [{ name: "board", type: "char[][]" }],
    testCases: [
      {
        input: [[
          ["5", "3", ".", ".", "7", ".", ".", ".", "."],
          ["6", ".", ".", "1", "9", "5", ".", ".", "."],
          [".", "9", "8", ".", ".", ".", ".", "6", "."],
          ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
          ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
          ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
          [".", "6", ".", ".", ".", ".", "2", "8", "."],
          [".", ".", ".", "4", "1", "9", ".", ".", "5"],
          [".", ".", ".", ".", "8", ".", ".", "7", "9"]
        ]],
        expectedOutput: [
          ["5", "3", "4", "6", "7", "8", "9", "1", "2"],
          ["6", "7", "2", "1", "9", "5", "3", "4", "8"],
          ["1", "9", "8", "3", "4", "2", "5", "6", "7"],
          ["8", "5", "9", "7", "6", "1", "4", "2", "3"],
          ["4", "2", "6", "8", "5", "3", "7", "9", "1"],
          ["7", "1", "3", "9", "2", "4", "8", "5", "6"],
          ["9", "6", "1", "5", "3", "7", "2", "8", "4"],
          ["2", "8", "7", "4", "1", "9", "6", "3", "5"],
          ["3", "4", "5", "2", "8", "6", "1", "7", "9"]
        ]
      },
      {
        input: [[
          [".", ".", "9", "7", "4", "8", ".", ".", "."],
          ["7", ".", ".", ".", ".", ".", ".", ".", "."],
          [".", "2", ".", "1", ".", "9", ".", ".", "."],
          [".", ".", "7", ".", ".", ".", "2", "4", "."],
          [".", "6", "4", ".", "1", ".", "5", "9", "."],
          [".", "9", "8", ".", ".", ".", "3", ".", "."],
          [".", ".", ".", "8", ".", "3", ".", "2", "."],
          [".", ".", ".", ".", ".", ".", ".", ".", "6"],
          [".", ".", ".", "2", "7", "5", "9", ".", "."]
        ]],
        expectedOutput: [
          ["5", "1", "9", "7", "4", "8", "6", "3", "2"],
          ["7", "8", "3", "6", "5", "2", "4", "1", "9"],
          ["4", "2", "6", "1", "3", "9", "8", "7", "5"],
          ["3", "5", "7", "9", "8", "6", "2", "4", "1"],
          ["2", "6", "4", "3", "1", "7", "5", "9", "8"],
          ["1", "9", "8", "5", "2", "4", "3", "6", "7"],
          ["9", "7", "5", "8", "6", "3", "1", "2", "4"],
          ["8", "3", "2", "4", "9", "1", "7", "5", "6"],
          ["6", "4", "1", "2", "7", "5", "9", "8", "3"]
        ]
      },
      {
        input: [[
          ["5", "3", ".", ".", "7", ".", ".", ".", "."],
          ["6", ".", ".", "1", "9", "5", ".", ".", "."],
          [".", "9", "8", ".", ".", ".", ".", "6", "."],
          ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
          ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
          ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
          [".", "6", ".", ".", ".", ".", "2", "8", "."],
          [".", ".", ".", "4", "1", "9", ".", ".", "5"],
          [".", ".", ".", ".", "8", ".", ".", "7", "9"]
        ]],
        expectedOutput: [
          ["5", "3", "4", "6", "7", "8", "9", "1", "2"],
          ["6", "7", "2", "1", "9", "5", "3", "4", "8"],
          ["1", "9", "8", "3", "4", "2", "5", "6", "7"],
          ["8", "5", "9", "7", "6", "1", "4", "2", "3"],
          ["4", "2", "6", "8", "5", "3", "7", "9", "1"],
          ["7", "1", "3", "9", "2", "4", "8", "5", "6"],
          ["9", "6", "1", "5", "3", "7", "2", "8", "4"],
          ["2", "8", "7", "4", "1", "9", "6", "3", "5"],
          ["3", "4", "5", "2", "8", "6", "1", "7", "9"]
        ]
      },
      {
        input: [[
          ["5", "3", ".", ".", "7", ".", ".", ".", "."],
          ["6", ".", ".", "1", "9", "5", ".", ".", "."],
          [".", "9", "8", ".", ".", ".", ".", "6", "."],
          ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
          ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
          ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
          [".", "6", ".", ".", ".", ".", "2", "8", "."],
          [".", ".", ".", "4", "1", "9", ".", ".", "5"],
          [".", ".", ".", ".", "8", ".", ".", "7", "9"]
        ]],
        expectedOutput: [
          ["5", "3", "4", "6", "7", "8", "9", "1", "2"],
          ["6", "7", "2", "1", "9", "5", "3", "4", "8"],
          ["1", "9", "8", "3", "4", "2", "5", "6", "7"],
          ["8", "5", "9", "7", "6", "1", "4", "2", "3"],
          ["4", "2", "6", "8", "5", "3", "7", "9", "1"],
          ["7", "1", "3", "9", "2", "4", "8", "5", "6"],
          ["9", "6", "1", "5", "3", "7", "2", "8", "4"],
          ["2", "8", "7", "4", "1", "9", "6", "3", "5"],
          ["3", "4", "5", "2", "8", "6", "1", "7", "9"]
        ]
      },
      {
        input: [[
          ["5", "3", ".", ".", "7", ".", ".", ".", "."],
          ["6", ".", ".", "1", "9", "5", ".", ".", "."],
          [".", "9", "8", ".", ".", ".", ".", "6", "."],
          ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
          ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
          ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
          [".", "6", ".", ".", ".", ".", "2", "8", "."],
          [".", ".", ".", "4", "1", "9", ".", ".", "5"],
          [".", ".", ".", ".", "8", ".", ".", "7", "9"]
        ]],
        expectedOutput: [
          ["5", "3", "4", "6", "7", "8", "9", "1", "2"],
          ["6", "7", "2", "1", "9", "5", "3", "4", "8"],
          ["1", "9", "8", "3", "4", "2", "5", "6", "7"],
          ["8", "5", "9", "7", "6", "1", "4", "2", "3"],
          ["4", "2", "6", "8", "5", "3", "7", "9", "1"],
          ["7", "1", "3", "9", "2", "4", "8", "5", "6"],
          ["9", "6", "1", "5", "3", "7", "2", "8", "4"],
          ["2", "8", "7", "4", "1", "9", "6", "3", "5"],
          ["3", "4", "5", "2", "8", "6", "1", "7", "9"]
        ]
      },
      {
        input: [[
          ["5", "3", ".", ".", "7", ".", ".", ".", "."],
          ["6", ".", ".", "1", "9", "5", ".", ".", "."],
          [".", "9", "8", ".", ".", ".", ".", "6", "."],
          ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
          ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
          ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
          [".", "6", ".", ".", ".", ".", "2", "8", "."],
          [".", ".", ".", "4", "1", "9", ".", ".", "5"],
          [".", ".", ".", ".", "8", ".", ".", "7", "9"]
        ]],
        expectedOutput: [
          ["5", "3", "4", "6", "7", "8", "9", "1", "2"],
          ["6", "7", "2", "1", "9", "5", "3", "4", "8"],
          ["1", "9", "8", "3", "4", "2", "5", "6", "7"],
          ["8", "5", "9", "7", "6", "1", "4", "2", "3"],
          ["4", "2", "6", "8", "5", "3", "7", "9", "1"],
          ["7", "1", "3", "9", "2", "4", "8", "5", "6"],
          ["9", "6", "1", "5", "3", "7", "2", "8", "4"],
          ["2", "8", "7", "4", "1", "9", "6", "3", "5"],
          ["3", "4", "5", "2", "8", "6", "1", "7", "9"]
        ]
      },
      {
        input: [[
          ["5", "3", ".", ".", "7", ".", ".", ".", "."],
          ["6", ".", ".", "1", "9", "5", ".", ".", "."],
          [".", "9", "8", ".", ".", ".", ".", "6", "."],
          ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
          ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
          ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
          [".", "6", ".", ".", ".", ".", "2", "8", "."],
          [".", ".", ".", "4", "1", "9", ".", ".", "5"],
          [".", ".", ".", ".", "8", ".", ".", "7", "9"]
        ]],
        expectedOutput: [
          ["5", "3", "4", "6", "7", "8", "9", "1", "2"],
          ["6", "7", "2", "1", "9", "5", "3", "4", "8"],
          ["1", "9", "8", "3", "4", "2", "5", "6", "7"],
          ["8", "5", "9", "7", "6", "1", "4", "2", "3"],
          ["4", "2", "6", "8", "5", "3", "7", "9", "1"],
          ["7", "1", "3", "9", "2", "4", "8", "5", "6"],
          ["9", "6", "1", "5", "3", "7", "2", "8", "4"],
          ["2", "8", "7", "4", "1", "9", "6", "3", "5"],
          ["3", "4", "5", "2", "8", "6", "1", "7", "9"]
        ]
      },
      {
        input: [[
          ["5", "3", ".", ".", "7", ".", ".", ".", "."],
          ["6", ".", ".", "1", "9", "5", ".", ".", "."],
          [".", "9", "8", ".", ".", ".", ".", "6", "."],
          ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
          ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
          ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
          [".", "6", ".", ".", ".", ".", "2", "8", "."],
          [".", ".", ".", "4", "1", "9", ".", ".", "5"],
          [".", ".", ".", ".", "8", ".", ".", "7", "9"]
        ]],
        expectedOutput: [
          ["5", "3", "4", "6", "7", "8", "9", "1", "2"],
          ["6", "7", "2", "1", "9", "5", "3", "4", "8"],
          ["1", "9", "8", "3", "4", "2", "5", "6", "7"],
          ["8", "5", "9", "7", "6", "1", "4", "2", "3"],
          ["4", "2", "6", "8", "5", "3", "7", "9", "1"],
          ["7", "1", "3", "9", "2", "4", "8", "5", "6"],
          ["9", "6", "1", "5", "3", "7", "2", "8", "4"],
          ["2", "8", "7", "4", "1", "9", "6", "3", "5"],
          ["3", "4", "5", "2", "8", "6", "1", "7", "9"]
        ]
      },
      {
        input: [[
          ["5", "3", ".", ".", "7", ".", ".", ".", "."],
          ["6", ".", ".", "1", "9", "5", ".", ".", "."],
          [".", "9", "8", ".", ".", ".", ".", "6", "."],
          ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
          ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
          ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
          [".", "6", ".", ".", ".", ".", "2", "8", "."],
          [".", ".", ".", "4", "1", "9", ".", ".", "5"],
          [".", ".", ".", ".", "8", ".", ".", "7", "9"]
        ]],
        expectedOutput: [
          ["5", "3", "4", "6", "7", "8", "9", "1", "2"],
          ["6", "7", "2", "1", "9", "5", "3", "4", "8"],
          ["1", "9", "8", "3", "4", "2", "5", "6", "7"],
          ["8", "5", "9", "7", "6", "1", "4", "2", "3"],
          ["4", "2", "6", "8", "5", "3", "7", "9", "1"],
          ["7", "1", "3", "9", "2", "4", "8", "5", "6"],
          ["9", "6", "1", "5", "3", "7", "2", "8", "4"],
          ["2", "8", "7", "4", "1", "9", "6", "3", "5"],
          ["3", "4", "5", "2", "8", "6", "1", "7", "9"]
        ]
      },
      {
        input: [[
          ["5", "3", ".", ".", "7", ".", ".", ".", "."],
          ["6", ".", ".", "1", "9", "5", ".", ".", "."],
          [".", "9", "8", ".", ".", ".", ".", "6", "."],
          ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
          ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
          ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
          [".", "6", ".", ".", ".", ".", "2", "8", "."],
          [".", ".", ".", "4", "1", "9", ".", ".", "5"],
          [".", ".", ".", ".", "8", ".", ".", "7", "9"]
        ]],
        expectedOutput: [
          ["5", "3", "4", "6", "7", "8", "9", "1", "2"],
          ["6", "7", "2", "1", "9", "5", "3", "4", "8"],
          ["1", "9", "8", "3", "4", "2", "5", "6", "7"],
          ["8", "5", "9", "7", "6", "1", "4", "2", "3"],
          ["4", "2", "6", "8", "5", "3", "7", "9", "1"],
          ["7", "1", "3", "9", "2", "4", "8", "5", "6"],
          ["9", "6", "1", "5", "3", "7", "2", "8", "4"],
          ["2", "8", "7", "4", "1", "9", "6", "3", "5"],
          ["3", "4", "5", "2", "8", "6", "1", "7", "9"]
        ]
      }
    ]
  }
];
