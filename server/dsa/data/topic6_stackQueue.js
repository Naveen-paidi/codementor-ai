/**
 * topic6_stackQueue.js
 */

export const TOPIC_6_PROBLEMS = [
  {
    "number": 76,
    "title": "Next Greater Element",
    "topic": "Stacks and Queues",
    "difficulty": "Medium",
    "description": "Given an array `nums` of integers, find the next greater element for each element in the array. If no greater element exists, output -1 for that element.",
    "constraints": [
      "1 <= nums.length <= 10^5",
      "-10^9 <= nums[i] <= 10^9"
    ],
    "examples": [
      {
        "input": "nums = [1,3,2,4]",
        "output": "[3,4,4,-1]",
        "explanation": "Next greater for 1 is 3, for 3 is 4, for 2 is 4, for 4 is -1."
      },
      {
        "input": "nums = [6,8,0,1,3]",
        "output": "[8,-1,1,3,-1]",
        "explanation": "Next greater elements."
      }
    ],
    "functionName": "nextGreaterElement",
    "returnType": "int[]",
    "parameters": [
      {
        "name": "nums",
        "type": "int[]"
      }
    ],
    "testCases": [
      {
        "input": [
          [
            1,
            3,
            2,
            4
          ]
        ],
        "expectedOutput": [
          3,
          4,
          4,
          -1
        ]
      },
      {
        "input": [
          [
            6,
            8,
            0,
            1,
            3
          ]
        ],
        "expectedOutput": [
          8,
          -1,
          1,
          3,
          -1
        ]
      },
      {
        "input": [
          [
            1
          ]
        ],
        "expectedOutput": [
          -1
        ]
      },
      {
        "input": [
          [
            4,
            3,
            2,
            1
          ]
        ],
        "expectedOutput": [
          -1,
          -1,
          -1,
          -1
        ]
      },
      {
        "input": [
          [
            1,
            2,
            3,
            4
          ]
        ],
        "expectedOutput": [
          2,
          3,
          4,
          -1
        ]
      },
      {
        "input": [
          [
            2,
            1,
            2,
            4,
            3
          ]
        ],
        "expectedOutput": [
          4,
          2,
          4,
          -1,
          -1
        ]
      },
      {
        "input": [
          [
            5,
            4,
            6
          ]
        ],
        "expectedOutput": [
          6,
          6,
          -1
        ]
      },
      {
        "input": [
          [
            10,
            20,
            15,
            30
          ]
        ],
        "expectedOutput": [
          20,
          30,
          30,
          -1
        ]
      },
      {
        "input": [
          [
            7,
            7,
            7
          ]
        ],
        "expectedOutput": [
          -1,
          -1,
          -1
        ]
      },
      {
        "input": [
          [
            3,
            8,
            4,
            1,
            2
          ]
        ],
        "expectedOutput": [
          8,
          -1,
          -1,
          2,
          -1
        ]
      }
    ]
  },
  {
    "number": 77,
    "title": "Next Greater Element II",
    "topic": "Stacks and Queues",
    "difficulty": "Medium",
    "description": "Given a circular integer array `nums`, return the next greater number for every element in `nums`. If it doesn't exist, return -1 for this number.",
    "constraints": [
      "1 <= nums.length <= 10^4",
      "-10^9 <= nums[i] <= 10^9"
    ],
    "examples": [
      {
        "input": "nums = [1,2,1]",
        "output": "[2,-1,2]",
        "explanation": "Next greater circular element."
      },
      {
        "input": "nums = [1,2,3,4,3]",
        "output": "[2,3,4,-1,4]",
        "explanation": "Next greater circular element."
      }
    ],
    "functionName": "nextGreaterElements",
    "returnType": "int[]",
    "parameters": [
      {
        "name": "nums",
        "type": "int[]"
      }
    ],
    "testCases": [
      {
        "input": [
          [
            1,
            2,
            1
          ]
        ],
        "expectedOutput": [
          2,
          -1,
          2
        ]
      },
      {
        "input": [
          [
            1,
            2,
            3,
            4,
            3
          ]
        ],
        "expectedOutput": [
          2,
          3,
          4,
          -1,
          4
        ]
      },
      {
        "input": [
          [
            5,
            4,
            3,
            2,
            1
          ]
        ],
        "expectedOutput": [
          -1,
          5,
          5,
          5,
          5
        ]
      },
      {
        "input": [
          [
            1
          ]
        ],
        "expectedOutput": [
          -1
        ]
      },
      {
        "input": [
          [
            1,
            1,
            1
          ]
        ],
        "expectedOutput": [
          -1,
          -1,
          -1
        ]
      },
      {
        "input": [
          [
            3,
            8,
            4,
            1,
            2
          ]
        ],
        "expectedOutput": [
          8,
          -1,
          8,
          2,
          3
        ]
      },
      {
        "input": [
          [
            10,
            2,
            5
          ]
        ],
        "expectedOutput": [
          -1,
          5,
          10
        ]
      },
      {
        "input": [
          [
            1,
            5,
            3,
            6,
            8
          ]
        ],
        "expectedOutput": [
          5,
          6,
          6,
          8,
          -1
        ]
      },
      {
        "input": [
          [
            2,
            2,
            3,
            1
          ]
        ],
        "expectedOutput": [
          3,
          3,
          -1,
          2
        ]
      },
      {
        "input": [
          [
            4,
            2,
            1,
            5
          ]
        ],
        "expectedOutput": [
          5,
          5,
          5,
          -1
        ]
      }
    ]
  },
  {
    "number": 78,
    "title": "Stock Span Problem",
    "topic": "Stacks and Queues",
    "difficulty": "Medium",
    "description": "Design an algorithm that collects daily price quotes for some stock and returns the span of that stock's price for the current day (the maximum number of consecutive days for which the stock price was less than or equal to the price of that day).",
    "constraints": [
      "1 <= price.length <= 10^5",
      "1 <= price[i] <= 10^5"
    ],
    "examples": [
      {
        "input": "price = [100,80,60,70,60,75,85]",
        "output": "[1,1,1,2,1,4,6]",
        "explanation": "Stock span for each day."
      }
    ],
    "functionName": "calculateSpan",
    "returnType": "int[]",
    "parameters": [
      {
        "name": "price",
        "type": "int[]"
      }
    ],
    "testCases": [
      {
        "input": [
          [
            100,
            80,
            60,
            70,
            60,
            75,
            85
          ]
        ],
        "expectedOutput": [
          1,
          1,
          1,
          2,
          1,
          4,
          6
        ]
      },
      {
        "input": [
          [
            10,
            4,
            5,
            90,
            120,
            80
          ]
        ],
        "expectedOutput": [
          1,
          1,
          2,
          4,
          5,
          1
        ]
      },
      {
        "input": [
          [
            10
          ]
        ],
        "expectedOutput": [
          1
        ]
      },
      {
        "input": [
          [
            10,
            20,
            30,
            40
          ]
        ],
        "expectedOutput": [
          1,
          2,
          3,
          4
        ]
      },
      {
        "input": [
          [
            40,
            30,
            20,
            10
          ]
        ],
        "expectedOutput": [
          1,
          1,
          1,
          1
        ]
      },
      {
        "input": [
          [
            31,
            27,
            14,
            21,
            30,
            22
          ]
        ],
        "expectedOutput": [
          1,
          1,
          1,
          2,
          4,
          1
        ]
      },
      {
        "input": [
          [
            1,
            1,
            1,
            1
          ]
        ],
        "expectedOutput": [
          1,
          2,
          3,
          4
        ]
      },
      {
        "input": [
          [
            2,
            1,
            1,
            2
          ]
        ],
        "expectedOutput": [
          1,
          1,
          2,
          4
        ]
      },
      {
        "input": [
          [
            60,
            70,
            80,
            100,
            90,
            75,
            80,
            85
          ]
        ],
        "expectedOutput": [
          1,
          2,
          3,
          4,
          1,
          1,
          2,
          4
        ]
      },
      {
        "input": [
          [
            5,
            10,
            5,
            20
          ]
        ],
        "expectedOutput": [
          1,
          2,
          1,
          4
        ]
      }
    ]
  },
  {
    "number": 79,
    "title": "Sum of Subarray Minimums",
    "topic": "Stacks and Queues",
    "difficulty": "Medium",
    "description": "Given an array of integers `arr`, find the sum of `min(b)`, where `b` ranges over every (contiguous) subarray of `arr`. Since the answer may be large, return the answer modulo `10^9 + 7`.",
    "constraints": [
      "1 <= arr.length <= 3 * 10^4",
      "1 <= arr[i] <= 3 * 10^4"
    ],
    "examples": [
      {
        "input": "arr = [3,1,2,4]",
        "output": "17",
        "explanation": "Subarrays: [3], [1], [2], [4], [3,1], [1,2], [2,4], [3,1,2], [1,2,4], [3,1,2,4]. Minimums sum to 17."
      },
      {
        "input": "arr = [11,81,94,43,3]",
        "output": "444",
        "explanation": "Sum of minimums is 444."
      }
    ],
    "functionName": "sumSubarrayMins",
    "returnType": "int",
    "parameters": [
      {
        "name": "arr",
        "type": "int[]"
      }
    ],
    "testCases": [
      {
        "input": [
          [
            3,
            1,
            2,
            4
          ]
        ],
        "expectedOutput": 17
      },
      {
        "input": [
          [
            11,
            81,
            94,
            43,
            3
          ]
        ],
        "expectedOutput": 444
      },
      {
        "input": [
          [
            1
          ]
        ],
        "expectedOutput": 1
      },
      {
        "input": [
          [
            2,
            2
          ]
        ],
        "expectedOutput": 6
      },
      {
        "input": [
          [
            1,
            2,
            3
          ]
        ],
        "expectedOutput": 10
      },
      {
        "input": [
          [
            3,
            2,
            1
          ]
        ],
        "expectedOutput": 10
      },
      {
        "input": [
          [
            71,
            55,
            82,
            55
          ]
        ],
        "expectedOutput": 593
      },
      {
        "input": [
          [
            5,
            4,
            3,
            2,
            1
          ]
        ],
        "expectedOutput": 35
      },
      {
        "input": [
          [
            10,
            20
          ]
        ],
        "expectedOutput": 40
      },
      {
        "input": [
          [
            1,
            3,
            1,
            2
          ]
        ],
        "expectedOutput": 16
      }
    ]
  },
  {
    "number": 80,
    "title": "Sum of Subarray Ranges",
    "topic": "Stacks and Queues",
    "difficulty": "Medium",
    "description": "You are given an integer array `nums`. The range of a subarray of `nums` is the difference between the largest and smallest element in the subarray. Return the sum of all subarray ranges of `nums` in O(n) time.",
    "constraints": [
      "1 <= nums.length <= 1000",
      "-10^9 <= nums[i] <= 10^9"
    ],
    "examples": [
      {
        "input": "nums = [1,2,3]",
        "output": "4",
        "explanation": "Subarray ranges sum to 4."
      },
      {
        "input": "nums = [1,3,3]",
        "output": "4",
        "explanation": "Subarray ranges sum to 4."
      },
      {
        "input": "nums = [4,-2,-3,4,1]",
        "output": "59",
        "explanation": "Subarray ranges sum to 59."
      }
    ],
    "functionName": "subArrayRanges",
    "returnType": "long",
    "parameters": [
      {
        "name": "nums",
        "type": "int[]"
      }
    ],
    "testCases": [
      {
        "input": [
          [
            1,
            2,
            3
          ]
        ],
        "expectedOutput": 4
      },
      {
        "input": [
          [
            1,
            3,
            3
          ]
        ],
        "expectedOutput": 4
      },
      {
        "input": [
          [
            4,
            -2,
            -3,
            4,
            1
          ]
        ],
        "expectedOutput": 59
      },
      {
        "input": [
          [
            1
          ]
        ],
        "expectedOutput": 0
      },
      {
        "input": [
          [
            2,
            1
          ]
        ],
        "expectedOutput": 1
      },
      {
        "input": [
          [
            1,
            1,
            1
          ]
        ],
        "expectedOutput": 0
      },
      {
        "input": [
          [
            5,
            2,
            4
          ]
        ],
        "expectedOutput": 7
      },
      {
        "input": [
          [
            10,
            20,
            30,
            40
          ]
        ],
        "expectedOutput": 50
      },
      {
        "input": [
          [
            -1,
            0,
            1
          ]
        ],
        "expectedOutput": 4
      },
      {
        "input": [
          [
            3,
            1,
            2,
            4
          ]
        ],
        "expectedOutput": 13
      }
    ]
  },
  {
    "number": 81,
    "title": "Remove K Digits",
    "topic": "Stacks and Queues",
    "difficulty": "Medium",
    "description": "Given string `num` representing a non-negative integer, and an integer `k`, return the smallest possible integer after removing `k` digits from `num`.",
    "constraints": [
      "1 <= k <= num.length <= 10^5",
      "num consists of only digits.",
      "num does not have any leading zeros except for the zero itself."
    ],
    "examples": [
      {
        "input": "num = '1432219', k = 3",
        "output": "'1219'",
        "explanation": "Remove 4, 3, and 2 to form 1219."
      },
      {
        "input": "num = '10200', k = 1",
        "output": "'200'",
        "explanation": "Remove 1 to form 200."
      },
      {
        "input": "num = '10', k = 2",
        "output": "'0'",
        "explanation": "Remove all digits."
      }
    ],
    "functionName": "removeKdigits",
    "returnType": "string",
    "parameters": [
      {
        "name": "num",
        "type": "string"
      },
      {
        "name": "k",
        "type": "int"
      }
    ],
    "testCases": [
      {
        "input": [
          "1432219",
          3
        ],
        "expectedOutput": "1219"
      },
      {
        "input": [
          "10200",
          1
        ],
        "expectedOutput": "200"
      },
      {
        "input": [
          "10",
          2
        ],
        "expectedOutput": "0"
      },
      {
        "input": [
          "9",
          1
        ],
        "expectedOutput": "0"
      },
      {
        "input": [
          "112",
          1
        ],
        "expectedOutput": "11"
      },
      {
        "input": [
          "1234567890",
          9
        ],
        "expectedOutput": "0"
      },
      {
        "input": [
          "5337",
          2
        ],
        "expectedOutput": "33"
      },
      {
        "input": [
          "100",
          1
        ],
        "expectedOutput": "0"
      },
      {
        "input": [
          "10",
          1
        ],
        "expectedOutput": "0"
      },
      {
        "input": [
          "4321",
          2
        ],
        "expectedOutput": "21"
      }
    ]
  },
  {
    "number": 82,
    "title": "Sliding Window Maximum",
    "topic": "Stacks and Queues",
    "difficulty": "Hard",
    "description": "You are given an array of integers `nums`, there is a sliding window of size `k` which is moving from the very left of the array to the very right. Return the max sliding window in O(n) time.",
    "constraints": [
      "1 <= nums.length <= 10^5",
      "-10^4 <= nums[i] <= 10^4",
      "1 <= k <= nums.length"
    ],
    "examples": [
      {
        "input": "nums = [1,3,-1,-3,5,3,6,7], k = 3",
        "output": "[3,3,5,5,6,7]",
        "explanation": "Maximum in each sliding window of size 3."
      },
      {
        "input": "nums = [1], k = 1",
        "output": "[1]",
        "explanation": "Single element."
      }
    ],
    "functionName": "maxSlidingWindow",
    "returnType": "int[]",
    "parameters": [
      {
        "name": "nums",
        "type": "int[]"
      },
      {
        "name": "k",
        "type": "int"
      }
    ],
    "testCases": [
      {
        "input": [
          [
            1,
            3,
            -1,
            -3,
            5,
            3,
            6,
            7
          ],
          3
        ],
        "expectedOutput": [
          3,
          3,
          5,
          5,
          6,
          7
        ]
      },
      {
        "input": [
          [
            1
          ],
          1
        ],
        "expectedOutput": [
          1
        ]
      },
      {
        "input": [
          [
            1,
            -1
          ],
          1
        ],
        "expectedOutput": [
          1,
          -1
        ]
      },
      {
        "input": [
          [
            9,
            11
          ],
          2
        ],
        "expectedOutput": [
          11
        ]
      },
      {
        "input": [
          [
            4,
            -2
          ],
          2
        ],
        "expectedOutput": [
          4
        ]
      },
      {
        "input": [
          [
            7,
            2,
            4
          ],
          2
        ],
        "expectedOutput": [
          7,
          4
        ]
      },
      {
        "input": [
          [
            1,
            3,
            1,
            2,
            0,
            5
          ],
          3
        ],
        "expectedOutput": [
          3,
          3,
          2,
          5
        ]
      },
      {
        "input": [
          [
            5,
            4,
            3,
            2,
            1
          ],
          2
        ],
        "expectedOutput": [
          5,
          4,
          3,
          2
        ]
      },
      {
        "input": [
          [
            1,
            2,
            3,
            4,
            5
          ],
          3
        ],
        "expectedOutput": [
          3,
          4,
          5
        ]
      },
      {
        "input": [
          [
            2,
            1,
            3,
            4,
            6,
            3,
            8,
            9,
            10,
            12,
            56
          ],
          4
        ],
        "expectedOutput": [
          4,
          6,
          6,
          8,
          9,
          10,
          12,
          56
        ]
      }
    ]
  },
  {
    "number": 83,
    "title": "Largest Rectangle in a Histogram",
    "topic": "Stacks and Queues",
    "difficulty": "Hard",
    "description": "Given an array of integers `heights` representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.",
    "constraints": [
      "1 <= heights.length <= 10^5",
      "0 <= heights[i] <= 10^4"
    ],
    "examples": [
      {
        "input": "heights = [2,1,5,6,2,3]",
        "output": "10",
        "explanation": "Largest rectangle has area 10 (height 5, width 2)."
      },
      {
        "input": "heights = [2,4]",
        "output": "4",
        "explanation": "Area 4."
      }
    ],
    "functionName": "largestRectangleArea",
    "returnType": "int",
    "parameters": [
      {
        "name": "heights",
        "type": "int[]"
      }
    ],
    "testCases": [
      {
        "input": [
          [
            2,
            1,
            5,
            6,
            2,
            3
          ]
        ],
        "expectedOutput": 10
      },
      {
        "input": [
          [
            2,
            4
          ]
        ],
        "expectedOutput": 4
      },
      {
        "input": [
          [
            2
          ]
        ],
        "expectedOutput": 2
      },
      {
        "input": [
          [
            0
          ]
        ],
        "expectedOutput": 0
      },
      {
        "input": [
          [
            1,
            1,
            1,
            1
          ]
        ],
        "expectedOutput": 4
      },
      {
        "input": [
          [
            6,
            2,
            5,
            4,
            5,
            1,
            6
          ]
        ],
        "expectedOutput": 12
      },
      {
        "input": [
          [
            5,
            4,
            3,
            2,
            1
          ]
        ],
        "expectedOutput": 9
      },
      {
        "input": [
          [
            1,
            2,
            3,
            4,
            5
          ]
        ],
        "expectedOutput": 9
      },
      {
        "input": [
          [
            3,
            6,
            5,
            7,
            4,
            8,
            1,
            0
          ]
        ],
        "expectedOutput": 20
      },
      {
        "input": [
          [
            2,
            1,
            2
          ]
        ],
        "expectedOutput": 3
      }
    ]
  },
  {
    "number": 84,
    "title": "Maximal Rectangle",
    "topic": "Stacks and Queues",
    "difficulty": "Hard",
    "description": "Given a `rows x cols` binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.",
    "constraints": [
      "rows == matrix.length",
      "cols == matrix[i].length",
      "1 <= row, cols <= 200",
      "matrix[i][j] is '0' or '1'."
    ],
    "examples": [
      {
        "input": "matrix = [['1','0','1','0','0'],['1','0','1','1','1'],['1','1','1','1','1'],['1','0','0','1','0']]",
        "output": "6",
        "explanation": "Maximal rectangle has area 6."
      },
      {
        "input": "matrix = [['0']]",
        "output": "0",
        "explanation": "Area 0."
      },
      {
        "input": "matrix = [['1']]",
        "output": "1",
        "explanation": "Area 1."
      }
    ],
    "functionName": "maximalRectangle",
    "returnType": "int",
    "parameters": [
      {
        "name": "matrix",
        "type": "char[][]"
      }
    ],
    "testCases": [
      {
        "input": [
          [
            [
              "1",
              "0",
              "1",
              "0",
              "0"
            ],
            [
              "1",
              "0",
              "1",
              "1",
              "1"
            ],
            [
              "1",
              "1",
              "1",
              "1",
              "1"
            ],
            [
              "1",
              "0",
              "0",
              "1",
              "0"
            ]
          ]
        ],
        "expectedOutput": 6
      },
      {
        "input": [
          [
            [
              "0"
            ]
          ]
        ],
        "expectedOutput": 0
      },
      {
        "input": [
          [
            [
              "1"
            ]
          ]
        ],
        "expectedOutput": 1
      },
      {
        "input": [
          [
            [
              "0",
              "0"
            ]
          ]
        ],
        "expectedOutput": 0
      },
      {
        "input": [
          [
            [
              "1",
              "1"
            ]
          ]
        ],
        "expectedOutput": 2
      },
      {
        "input": [
          [
            [
              "1",
              "1"
            ],
            [
              "1",
              "1"
            ]
          ]
        ],
        "expectedOutput": 4
      },
      {
        "input": [
          [
            [
              "0",
              "1"
            ],
            [
              "1",
              "0"
            ]
          ]
        ],
        "expectedOutput": 1
      },
      {
        "input": [
          [
            [
              "1",
              "0"
            ],
            [
              "0",
              "1"
            ]
          ]
        ],
        "expectedOutput": 1
      },
      {
        "input": [
          [
            [
              "1",
              "1",
              "1"
            ],
            [
              "1",
              "1",
              "1"
            ],
            [
              "1",
              "1",
              "1"
            ]
          ]
        ],
        "expectedOutput": 9
      },
      {
        "input": [
          [
            [
              "1",
              "1",
              "0"
            ],
            [
              "1",
              "1",
              "0"
            ],
            [
              "1",
              "1",
              "1"
            ]
          ]
        ],
        "expectedOutput": 6
      }
    ]
  },
  {
    "number": 85,
    "title": "Daily Temperatures",
    "topic": "Stacks and Queues",
    "difficulty": "Medium",
    "description": "Given an array of integers `temperatures` represents the daily temperatures, return an array `answer` such that `answer[i]` is the number of days you have to wait after the `i`th day to get a warmer temperature. If there is no future day for which this is possible, keep `answer[i] == 0` instead.",
    "constraints": [
      "1 <= temperatures.length <= 10^5",
      "30 <= temperatures[i] <= 100"
    ],
    "examples": [
      {
        "input": "temperatures = [73,74,75,71,69,72,76,73]",
        "output": "[1,1,4,2,1,1,0,0]",
        "explanation": "Days to wait for warmer temp."
      },
      {
        "input": "temperatures = [30,40,50,60]",
        "output": "[1,1,1,0]",
        "explanation": "Days to wait."
      }
    ],
    "functionName": "dailyTemperatures",
    "returnType": "int[]",
    "parameters": [
      {
        "name": "temperatures",
        "type": "int[]"
      }
    ],
    "testCases": [
      {
        "input": [
          [
            73,
            74,
            75,
            71,
            69,
            72,
            76,
            73
          ]
        ],
        "expectedOutput": [
          1,
          1,
          4,
          2,
          1,
          1,
          0,
          0
        ]
      },
      {
        "input": [
          [
            30,
            40,
            50,
            60
          ]
        ],
        "expectedOutput": [
          1,
          1,
          1,
          0
        ]
      },
      {
        "input": [
          [
            30,
            60,
            90
          ]
        ],
        "expectedOutput": [
          1,
          1,
          0
        ]
      },
      {
        "input": [
          [
            89,
            62,
            70,
            58,
            47,
            47,
            46,
            76,
            100,
            70
          ]
        ],
        "expectedOutput": [
          8,
          1,
          5,
          4,
          3,
          2,
          1,
          1,
          0,
          0
        ]
      },
      {
        "input": [
          [
            30
          ]
        ],
        "expectedOutput": [
          0
        ]
      },
      {
        "input": [
          [
            70,
            70,
            70
          ]
        ],
        "expectedOutput": [
          0,
          0,
          0
        ]
      },
      {
        "input": [
          [
            50,
            45,
            40
          ]
        ],
        "expectedOutput": [
          0,
          0,
          0
        ]
      },
      {
        "input": [
          [
            40,
            50,
            45,
            60
          ]
        ],
        "expectedOutput": [
          1,
          2,
          1,
          0
        ]
      },
      {
        "input": [
          [
            35,
            36,
            37,
            38,
            39
          ]
        ],
        "expectedOutput": [
          1,
          1,
          1,
          1,
          0
        ]
      },
      {
        "input": [
          [
            80,
            79,
            78,
            77,
            85
          ]
        ],
        "expectedOutput": [
          4,
          3,
          2,
          1,
          0
        ]
      }
    ]
  },
  {
    "number": 86,
    "title": "Implement Min Stack",
    "topic": "Stacks and Queues",
    "difficulty": "Medium",
    "description": "Design a stack that supports push, pop, top, and retrieving the minimum element in constant time O(1).",
    "constraints": [
      "-2^31 <= val <= 2^31 - 1",
      "Methods pop, top and getMin operations will always be called on non-empty stacks.",
      "At most 3 * 10^4 calls will be made."
    ],
    "examples": [
      {
        "input": "MinStack operations: push(-2), push(0), push(-3), getMin(), pop(), top(), getMin()",
        "output": "[-3, 0, -2]",
        "explanation": "Min element retrieved in O(1)."
      }
    ],
    "functionName": "class MinStack",
    "returnType": "void",
    "isDesign": true,
    "parameters": [],
    "testCases": [
      {
        "input": [
          [
            "MinStack",
            "push",
            "push",
            "push",
            "getMin",
            "pop",
            "top",
            "getMin"
          ],
          [
            [],
            [
              -2
            ],
            [
              0
            ],
            [
              -3
            ],
            [],
            [],
            [],
            []
          ]
        ],
        "expectedOutput": [
          null,
          null,
          null,
          null,
          -3,
          null,
          0,
          -2
        ]
      },
      {
        "input": [
          [
            "MinStack",
            "push",
            "push",
            "getMin",
            "getMin"
          ],
          [
            [],
            [
              1
            ],
            [
              2
            ],
            [],
            []
          ]
        ],
        "expectedOutput": [
          null,
          null,
          null,
          1,
          1
        ]
      },
      {
        "input": [
          [
            "MinStack",
            "push",
            "top",
            "getMin"
          ],
          [
            [],
            [
              -1
            ],
            [],
            []
          ]
        ],
        "expectedOutput": [
          null,
          null,
          -1,
          -1
        ]
      },
      {
        "input": [
          [
            "MinStack",
            "push",
            "push",
            "pop",
            "getMin"
          ],
          [
            [],
            [
              5
            ],
            [
              3
            ],
            [],
            []
          ]
        ],
        "expectedOutput": [
          null,
          null,
          null,
          null,
          5
        ]
      },
      {
        "input": [
          [
            "MinStack",
            "push",
            "push",
            "push",
            "getMin"
          ],
          [
            [],
            [
              2
            ],
            [
              0
            ],
            [
              3
            ],
            []
          ]
        ],
        "expectedOutput": [
          null,
          null,
          null,
          null,
          0
        ]
      },
      {
        "input": [
          [
            "MinStack",
            "push",
            "push",
            "top"
          ],
          [
            [],
            [
              10
            ],
            [
              20
            ],
            []
          ]
        ],
        "expectedOutput": [
          null,
          null,
          null,
          20
        ]
      },
      {
        "input": [
          [
            "MinStack",
            "push",
            "getMin"
          ],
          [
            [],
            [
              100
            ],
            []
          ]
        ],
        "expectedOutput": [
          null,
          null,
          100
        ]
      },
      {
        "input": [
          [
            "MinStack",
            "push",
            "push",
            "getMin",
            "pop",
            "getMin"
          ],
          [
            [],
            [
              2
            ],
            [
              1
            ],
            [],
            [],
            []
          ]
        ],
        "expectedOutput": [
          null,
          null,
          null,
          1,
          null,
          2
        ]
      },
      {
        "input": [
          [
            "MinStack",
            "push",
            "push",
            "push",
            "top",
            "getMin"
          ],
          [
            [],
            [
              3
            ],
            [
              5
            ],
            [
              2
            ],
            [],
            []
          ]
        ],
        "expectedOutput": [
          null,
          null,
          null,
          null,
          2,
          2
        ]
      },
      {
        "input": [
          [
            "MinStack",
            "push",
            "push",
            "pop",
            "top"
          ],
          [
            [],
            [
              7
            ],
            [
              8
            ],
            [],
            []
          ]
        ],
        "expectedOutput": [
          null,
          null,
          null,
          null,
          7
        ]
      }
    ]
  },
  {
    "number": 87,
    "title": "Asteroid Collision",
    "topic": "Stacks and Queues",
    "difficulty": "Medium",
    "description": "We are given an array `asteroids` of integers representing asteroids in a row. For each asteroid, the absolute value represents its size, and the sign represents its direction (positive = right, negative = left). Each asteroid moves at the same speed. Find out the state of the asteroids after all collisions.",
    "constraints": [
      "2 <= asteroids.length <= 10^4",
      "-1000 <= asteroids[i] <= 1000",
      "asteroids[i] != 0"
    ],
    "examples": [
      {
        "input": "asteroids = [5,10,-5]",
        "output": "[5,10]",
        "explanation": "10 and -5 collide resulting in 10. 5 and 10 never collide."
      },
      {
        "input": "asteroids = [8,-8]",
        "output": "[]",
        "explanation": "8 and -8 collide exploding each other."
      }
    ],
    "functionName": "asteroidCollision",
    "returnType": "int[]",
    "parameters": [
      {
        "name": "asteroids",
        "type": "int[]"
      }
    ],
    "testCases": [
      {
        "input": [
          [
            5,
            10,
            -5
          ]
        ],
        "expectedOutput": [
          5,
          10
        ]
      },
      {
        "input": [
          [
            8,
            -8
          ]
        ],
        "expectedOutput": []
      },
      {
        "input": [
          [
            10,
            2,
            -5
          ]
        ],
        "expectedOutput": [
          10
        ]
      },
      {
        "input": [
          [
            -2,
            -1,
            1,
            2
          ]
        ],
        "expectedOutput": [
          -2,
          -1,
          1,
          2
        ]
      },
      {
        "input": [
          [
            -2,
            -2,
            1,
            -2
          ]
        ],
        "expectedOutput": [
          -2,
          -2,
          -2
        ]
      },
      {
        "input": [
          [
            1,
            -2,
            -2,
            -2
          ]
        ],
        "expectedOutput": [
          -2,
          -2,
          -2
        ]
      },
      {
        "input": [
          [
            -2,
            2,
            -1,
            -2
          ]
        ],
        "expectedOutput": [
          -2
        ]
      },
      {
        "input": [
          [
            1,
            2,
            3,
            -4
          ]
        ],
        "expectedOutput": [
          -4
        ]
      },
      {
        "input": [
          [
            4,
            3,
            2,
            1
          ]
        ],
        "expectedOutput": [
          4,
          3,
          2,
          1
        ]
      },
      {
        "input": [
          [
            -5,
            5
          ]
        ],
        "expectedOutput": [
          -5,
          5
        ]
      }
    ]
  },
  {
    "number": 88,
    "title": "Celebrity Problem",
    "topic": "Stacks and Queues",
    "difficulty": "Medium",
    "description": "A celebrity is a person who is known to all but does not know anyone at a party. A square matrix `mat` of size `n x n` represents the party, where `mat[i][j] = 1` means person `i` knows person `j`. Find if there is any celebrity in the party or not. If yes, return the index; else return -1.",
    "constraints": [
      "1 <= n <= 3000",
      "0 <= mat[i][j] <= 1",
      "mat[i][i] == 0"
    ],
    "examples": [
      {
        "input": "mat = [[0,1,0],[0,0,0],[0,1,0]]",
        "output": "1",
        "explanation": "Person 1 is known by 0 and 2, but knows no one. Celebrity is 1."
      },
      {
        "input": "mat = [[0,1],[1,0]]",
        "output": "-1",
        "explanation": "No celebrity."
      }
    ],
    "functionName": "celebrity",
    "returnType": "int",
    "parameters": [
      {
        "name": "mat",
        "type": "int[][]"
      }
    ],
    "testCases": [
      {
        "input": [
          [
            [
              0,
              1,
              0
            ],
            [
              0,
              0,
              0
            ],
            [
              0,
              1,
              0
            ]
          ]
        ],
        "expectedOutput": 1
      },
      {
        "input": [
          [
            [
              0,
              1
            ],
            [
              1,
              0
            ]
          ]
        ],
        "expectedOutput": -1
      },
      {
        "input": [
          [
            [
              0
            ]
          ]
        ],
        "expectedOutput": 0
      },
      {
        "input": [
          [
            [
              0,
              0,
              0
            ],
            [
              0,
              0,
              0
            ],
            [
              0,
              0,
              0
            ]
          ]
        ],
        "expectedOutput": -1
      },
      {
        "input": [
          [
            [
              0,
              1,
              1
            ],
            [
              0,
              0,
              0
            ],
            [
              1,
              1,
              0
            ]
          ]
        ],
        "expectedOutput": 1
      },
      {
        "input": [
          [
            [
              0,
              0,
              1,
              0
            ],
            [
              0,
              0,
              1,
              0
            ],
            [
              0,
              0,
              0,
              0
            ],
            [
              0,
              0,
              1,
              0
            ]
          ]
        ],
        "expectedOutput": 2
      },
      {
        "input": [
          [
            [
              0,
              1,
              1
            ],
            [
              1,
              0,
              1
            ],
            [
              1,
              1,
              0
            ]
          ]
        ],
        "expectedOutput": -1
      },
      {
        "input": [
          [
            [
              0,
              1
            ],
            [
              0,
              0
            ]
          ]
        ],
        "expectedOutput": 1
      },
      {
        "input": [
          [
            [
              0,
              0
            ],
            [
              1,
              0
            ]
          ]
        ],
        "expectedOutput": 0
      },
      {
        "input": [
          [
            [
              0,
              1,
              0,
              0
            ],
            [
              0,
              0,
              0,
              0
            ],
            [
              0,
              1,
              0,
              1
            ],
            [
              0,
              1,
              0,
              0
            ]
          ]
        ],
        "expectedOutput": 1
      }
    ]
  },
  {
    "number": 89,
    "title": "LRU Cache",
    "topic": "Stacks and Queues",
    "difficulty": "Medium",
    "description": "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache. Implement the `LRUCache` class with `get` and `put` in O(1) average time complexity.",
    "constraints": [
      "1 <= capacity <= 3000",
      "0 <= key <= 10^4",
      "0 <= value <= 10^5",
      "At most 2 * 10^5 calls will be made to get and put."
    ],
    "examples": [
      {
        "input": "LRUCache lRUCache = new LRUCache(2); put(1,1); put(2,2); get(1); put(3,3); get(2);",
        "output": "[null, null, null, 1, null, -1]",
        "explanation": "Cache evicts LRU key 2."
      }
    ],
    "functionName": "class LRUCache",
    "returnType": "void",
    "isDesign": true,
    "parameters": [],
    "testCases": [
      {
        "input": [
          [
            "LRUCache",
            "put",
            "put",
            "get",
            "put",
            "get",
            "put",
            "get",
            "get",
            "get"
          ],
          [
            [
              2
            ],
            [
              1,
              1
            ],
            [
              2,
              2
            ],
            [
              1
            ],
            [
              3,
              3
            ],
            [
              2
            ],
            [
              4,
              4
            ],
            [
              1
            ],
            [
              3
            ],
            [
              4
            ]
          ]
        ],
        "expectedOutput": [
          null,
          null,
          null,
          1,
          null,
          -1,
          null,
          -1,
          3,
          4
        ]
      },
      {
        "input": [
          [
            "LRUCache",
            "put",
            "get"
          ],
          [
            [
              1
            ],
            [
              2,
              1
            ],
            [
              2
            ]
          ]
        ],
        "expectedOutput": [
          null,
          null,
          1
        ]
      },
      {
        "input": [
          [
            "LRUCache",
            "get"
          ],
          [
            [
              1
            ],
            [
              1
            ]
          ]
        ],
        "expectedOutput": [
          null,
          -1
        ]
      },
      {
        "input": [
          [
            "LRUCache",
            "put",
            "put",
            "get"
          ],
          [
            [
              2
            ],
            [
              2,
              1
            ],
            [
              2,
              2
            ],
            [
              2
            ]
          ]
        ],
        "expectedOutput": [
          null,
          null,
          null,
          2
        ]
      },
      {
        "input": [
          [
            "LRUCache",
            "put",
            "put",
            "put",
            "get"
          ],
          [
            [
              2
            ],
            [
              1,
              1
            ],
            [
              2,
              2
            ],
            [
              3,
              3
            ],
            [
              1
            ]
          ]
        ],
        "expectedOutput": [
          null,
          null,
          null,
          null,
          -1
        ]
      },
      {
        "input": [
          [
            "LRUCache",
            "put",
            "put",
            "get"
          ],
          [
            [
              2
            ],
            [
              1,
              1
            ],
            [
              2,
              2
            ],
            [
              1
            ]
          ]
        ],
        "expectedOutput": [
          null,
          null,
          null,
          1
        ]
      },
      {
        "input": [
          [
            "LRUCache",
            "put",
            "get",
            "put",
            "get"
          ],
          [
            [
              1
            ],
            [
              1,
              5
            ],
            [
              1
            ],
            [
              2,
              6
            ],
            [
              1
            ]
          ]
        ],
        "expectedOutput": [
          null,
          null,
          5,
          null,
          -1
        ]
      },
      {
        "input": [
          [
            "LRUCache",
            "put",
            "put",
            "put",
            "get"
          ],
          [
            [
              3
            ],
            [
              1,
              1
            ],
            [
              2,
              2
            ],
            [
              3,
              3
            ],
            [
              2
            ]
          ]
        ],
        "expectedOutput": [
          null,
          null,
          null,
          null,
          2
        ]
      },
      {
        "input": [
          [
            "LRUCache",
            "put",
            "put",
            "put",
            "put",
            "get"
          ],
          [
            [
              2
            ],
            [
              1,
              10
            ],
            [
              2,
              20
            ],
            [
              3,
              30
            ],
            [
              2,
              25
            ],
            [
              1
            ]
          ]
        ],
        "expectedOutput": [
          null,
          null,
          null,
          null,
          null,
          -1
        ]
      },
      {
        "input": [
          [
            "LRUCache",
            "put",
            "get",
            "get"
          ],
          [
            [
              2
            ],
            [
              5,
              50
            ],
            [
              5
            ],
            [
              6
            ]
          ]
        ],
        "expectedOutput": [
          null,
          null,
          50,
          -1
        ]
      }
    ]
  },
  {
    "number": 90,
    "title": "LFU Cache",
    "topic": "Stacks and Queues",
    "difficulty": "Hard",
    "description": "Design and implement a data structure for a Least Frequently Used (LFU) cache. Implement the `LFUCache` class with `get` and `put` in O(1) time complexity.",
    "constraints": [
      "1 <= capacity <= 10^4",
      "0 <= key <= 10^5",
      "0 <= value <= 10^9",
      "At most 2 * 10^5 calls will be made to get and put."
    ],
    "examples": [
      {
        "input": "LFUCache lfu = new LFUCache(2); put(1,1); put(2,2); get(1); put(3,3); get(2);",
        "output": "[null, null, null, 1, null, -1]",
        "explanation": "Key 2 with lowest frequency is evicted."
      }
    ],
    "functionName": "class LFUCache",
    "returnType": "void",
    "isDesign": true,
    "parameters": [],
    "testCases": [
      {
        "input": [
          [
            "LFUCache",
            "put",
            "put",
            "get",
            "put",
            "get",
            "get",
            "put",
            "get",
            "get",
            "get"
          ],
          [
            [
              2
            ],
            [
              1,
              1
            ],
            [
              2,
              2
            ],
            [
              1
            ],
            [
              3,
              3
            ],
            [
              2
            ],
            [
              3
            ],
            [
              4,
              4
            ],
            [
              1
            ],
            [
              3
            ],
            [
              4
            ]
          ]
        ],
        "expectedOutput": [
          null,
          null,
          null,
          1,
          null,
          -1,
          3,
          null,
          -1,
          3,
          4
        ]
      },
      {
        "input": [
          [
            "LFUCache",
            "put",
            "get"
          ],
          [
            [
              1
            ],
            [
              1,
              1
            ],
            [
              1
            ]
          ]
        ],
        "expectedOutput": [
          null,
          null,
          1
        ]
      },
      {
        "input": [
          [
            "LFUCache",
            "get"
          ],
          [
            [
              2
            ],
            [
              1
            ]
          ]
        ],
        "expectedOutput": [
          null,
          -1
        ]
      },
      {
        "input": [
          [
            "LFUCache",
            "put",
            "put",
            "get"
          ],
          [
            [
              2
            ],
            [
              1,
              10
            ],
            [
              2,
              20
            ],
            [
              1
            ]
          ]
        ],
        "expectedOutput": [
          null,
          null,
          null,
          10
        ]
      },
      {
        "input": [
          [
            "LFUCache",
            "put",
            "put",
            "put",
            "get"
          ],
          [
            [
              2
            ],
            [
              1,
              1
            ],
            [
              2,
              2
            ],
            [
              3,
              3
            ],
            [
              1
            ]
          ]
        ],
        "expectedOutput": [
          null,
          null,
          null,
          null,
          -1
        ]
      },
      {
        "input": [
          [
            "LFUCache",
            "put",
            "put",
            "get",
            "put",
            "get"
          ],
          [
            [
              2
            ],
            [
              1,
              1
            ],
            [
              2,
              2
            ],
            [
              1
            ],
            [
              3,
              3
            ],
            [
              2
            ]
          ]
        ],
        "expectedOutput": [
          null,
          null,
          null,
          1,
          null,
          -1
        ]
      },
      {
        "input": [
          [
            "LFUCache",
            "put",
            "put",
            "get",
            "get"
          ],
          [
            [
              2
            ],
            [
              1,
              1
            ],
            [
              2,
              2
            ],
            [
              1
            ],
            [
              2
            ]
          ]
        ],
        "expectedOutput": [
          null,
          null,
          null,
          1,
          2
        ]
      },
      {
        "input": [
          [
            "LFUCache",
            "put",
            "get",
            "put",
            "get"
          ],
          [
            [
              1
            ],
            [
              1,
              2
            ],
            [
              1
            ],
            [
              2,
              3
            ],
            [
              1
            ]
          ]
        ],
        "expectedOutput": [
          null,
          null,
          2,
          null,
          -1
        ]
      },
      {
        "input": [
          [
            "LFUCache",
            "put",
            "put",
            "get"
          ],
          [
            [
              3
            ],
            [
              1,
              1
            ],
            [
              2,
              2
            ],
            [
              3
            ]
          ]
        ],
        "expectedOutput": [
          null,
          null,
          null,
          -1
        ]
      },
      {
        "input": [
          [
            "LFUCache",
            "put",
            "put",
            "put",
            "get"
          ],
          [
            [
              3
            ],
            [
              1,
              10
            ],
            [
              2,
              20
            ],
            [
              3,
              30
            ],
            [
              2
            ]
          ]
        ],
        "expectedOutput": [
          null,
          null,
          null,
          null,
          20
        ]
      }
    ]
  },
  {
    "number": 91,
    "title": "Evaluate Reverse Polish Notation",
    "topic": "Stacks and Queues",
    "difficulty": "Medium",
    "description": "You are given an array of strings `tokens` that represents an arithmetic expression in a Reverse Polish Notation. Evaluate the expression. Return an integer that represents the value of the expression.",
    "constraints": [
      "1 <= tokens.length <= 10^4",
      "tokens[i] is either an operator: '+', '-', '*', or '/', or an integer in the range [-200, 200]."
    ],
    "examples": [
      {
        "input": "tokens = ['2','1','+','3','*']",
        "output": "9",
        "explanation": "((2 + 1) * 3) = 9"
      },
      {
        "input": "tokens = ['4','13','5','/','+']",
        "output": "6",
        "explanation": "(4 + (13 / 5)) = 6"
      }
    ],
    "functionName": "evalRPN",
    "returnType": "int",
    "parameters": [
      {
        "name": "tokens",
        "type": "string[]"
      }
    ],
    "testCases": [
      {
        "input": [
          [
            "2",
            "1",
            "+",
            "3",
            "*"
          ]
        ],
        "expectedOutput": 9
      },
      {
        "input": [
          [
            "4",
            "13",
            "5",
            "/",
            "+"
          ]
        ],
        "expectedOutput": 6
      },
      {
        "input": [
          [
            "10",
            "6",
            "9",
            "3",
            "+",
            "-11",
            "*",
            "/",
            "*",
            "17",
            "+",
            "5",
            "+"
          ]
        ],
        "expectedOutput": 22
      },
      {
        "input": [
          [
            "18"
          ]
        ],
        "expectedOutput": 18
      },
      {
        "input": [
          [
            "3",
            "4",
            "+"
          ]
        ],
        "expectedOutput": 7
      },
      {
        "input": [
          [
            "5",
            "1",
            "-"
          ]
        ],
        "expectedOutput": 4
      },
      {
        "input": [
          [
            "2",
            "3",
            "*"
          ]
        ],
        "expectedOutput": 6
      },
      {
        "input": [
          [
            "6",
            "2",
            "/"
          ]
        ],
        "expectedOutput": 3
      },
      {
        "input": [
          [
            "0",
            "3",
            "/"
          ]
        ],
        "expectedOutput": 0
      },
      {
        "input": [
          [
            "4",
            "3",
            "-"
          ]
        ],
        "expectedOutput": 1
      }
    ]
  }
];
