/**
 * topic12_dp.js
 */

export const TOPIC_12_PROBLEMS = [
  {
    "number": 163,
    "title": "Frog Jump With K Distances",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "description": "There are `n` stones at heights given in array `height`. A frog is at stone 0 and wants to reach stone `n - 1`. If the frog is at stone `i`, it can jump to stone `i + 1, i + 2, ..., i + k`. The cost of a jump from stone `i` to stone `j` is `|height[i] - height[j]|`. Return the minimum total cost to reach stone `n - 1`.",
    "constraints": [
      "1 <= n <= 10^4",
      "1 <= k <= 100",
      "0 <= height[i] <= 10^4"
    ],
    "examples": [
      {
        "input": "n = 5, k = 3, height = [10,30,40,50,20]",
        "output": "30",
        "explanation": "Jump 0->1 (20), 1->4 (10). Total = 30."
      }
    ],
    "functionName": "frogJumpK",
    "returnType": "int",
    "parameters": [
      {
        "name": "n",
        "type": "int"
      },
      {
        "name": "k",
        "type": "int"
      },
      {
        "name": "height",
        "type": "int[]"
      }
    ],
    "testCases": [
      {
        "input": [
          5,
          3,
          [
            10,
            30,
            40,
            50,
            20
          ]
        ],
        "expectedOutput": 30
      },
      {
        "input": [
          3,
          1,
          [
            10,
            20,
            10
          ]
        ],
        "expectedOutput": 20
      },
      {
        "input": [
          1,
          2,
          [
            10
          ]
        ],
        "expectedOutput": 0
      },
      {
        "input": [
          4,
          2,
          [
            10,
            40,
            30,
            10
          ]
        ],
        "expectedOutput": 40
      },
      {
        "input": [
          5,
          2,
          [
            30,
            10,
            60,
            10,
            60,
            50
          ]
        ],
        "expectedOutput": 40
      },
      {
        "input": [
          4,
          3,
          [
            40,
            10,
            20,
            70
          ]
        ],
        "expectedOutput": 30
      },
      {
        "input": [
          2,
          1,
          [
            10,
            50
          ]
        ],
        "expectedOutput": 40
      },
      {
        "input": [
          6,
          4,
          [
            10,
            20,
            30,
            40,
            50,
            60
          ]
        ],
        "expectedOutput": 50
      },
      {
        "input": [
          3,
          2,
          [
            10,
            30,
            20
          ]
        ],
        "expectedOutput": 10
      },
      {
        "input": [
          5,
          1,
          [
            1,
            2,
            3,
            4,
            5
          ]
        ],
        "expectedOutput": 4
      }
    ]
  },
  {
    "number": 164,
    "title": "House Robber",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "description": "You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night. Return the maximum amount of money you can rob tonight without alerting the police.",
    "constraints": [
      "1 <= nums.length <= 100",
      "0 <= nums[i] <= 400"
    ],
    "examples": [
      {
        "input": "nums = [1,2,3,1]",
        "output": "4",
        "explanation": "Rob house 1 (1) and house 3 (3). Total = 4."
      },
      {
        "input": "nums = [2,7,9,3,1]",
        "output": "12",
        "explanation": "Rob house 1 (2), house 3 (9) and house 5 (1). Total = 12."
      }
    ],
    "functionName": "rob",
    "returnType": "int",
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
            3,
            1
          ]
        ],
        "expectedOutput": 4
      },
      {
        "input": [
          [
            2,
            7,
            9,
            3,
            1
          ]
        ],
        "expectedOutput": 12
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
            5
          ]
        ],
        "expectedOutput": 5
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
        "expectedOutput": 4
      },
      {
        "input": [
          [
            1,
            3,
            1
          ]
        ],
        "expectedOutput": 3
      },
      {
        "input": [
          [
            2,
            4,
            8,
            9,
            9,
            3
          ]
        ],
        "expectedOutput": 19
      },
      {
        "input": [
          [
            100,
            1,
            1,
            100
          ]
        ],
        "expectedOutput": 200
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
            10,
            20,
            30,
            40
          ]
        ],
        "expectedOutput": 60
      }
    ]
  },
  {
    "number": 165,
    "title": "Ninja's Training",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "description": "Geek is going for `n` days training. On each day he can perform any one of three activities (0, 1, 2), each having merit points given in `points[n][3]`. He cannot perform the same activity on two consecutive days. Find the maximum merit points he can achieve.",
    "constraints": [
      "1 <= n <= 10^5",
      "1 <= points[i][j] <= 100"
    ],
    "examples": [
      {
        "input": "n = 3, points = [[1,2,5],[3,1,1],[3,3,3]]",
        "output": "11",
        "explanation": "Max points: day 1 activity 2 (5), day 2 activity 0 (3), day 3 activity 1 (3). Total = 11."
      }
    ],
    "functionName": "ninjaTraining",
    "returnType": "int",
    "parameters": [
      {
        "name": "n",
        "type": "int"
      },
      {
        "name": "points",
        "type": "int[][]"
      }
    ],
    "testCases": [
      {
        "input": [
          3,
          [
            [
              1,
              2,
              5
            ],
            [
              3,
              1,
              1
            ],
            [
              3,
              3,
              3
            ]
          ]
        ],
        "expectedOutput": 11
      },
      {
        "input": [
          3,
          [
            [
              10,
              40,
              70
            ],
            [
              20,
              50,
              80
            ],
            [
              30,
              60,
              90
            ]
          ]
        ],
        "expectedOutput": 210
      },
      {
        "input": [
          1,
          [
            [
              2,
              5,
              8
            ]
          ]
        ],
        "expectedOutput": 8
      },
      {
        "input": [
          2,
          [
            [
              1,
              2,
              3
            ],
            [
              3,
              2,
              1
            ]
          ]
        ],
        "expectedOutput": 5
      },
      {
        "input": [
          2,
          [
            [
              5,
              5,
              5
            ],
            [
              5,
              5,
              5
            ]
          ]
        ],
        "expectedOutput": 10
      },
      {
        "input": [
          3,
          [
            [
              1,
              2,
              3
            ],
            [
              4,
              5,
              6
            ],
            [
              7,
              8,
              9
            ]
          ]
        ],
        "expectedOutput": 16
      },
      {
        "input": [
          4,
          [
            [
              1,
              5,
              2
            ],
            [
              2,
              3,
              1
            ],
            [
              1,
              2,
              4
            ],
            [
              3,
              1,
              2
            ]
          ]
        ],
        "expectedOutput": 14
      },
      {
        "input": [
          2,
          [
            [
              10,
              20,
              30
            ],
            [
              5,
              15,
              25
            ]
          ]
        ],
        "expectedOutput": 45
      },
      {
        "input": [
          1,
          [
            [
              1,
              1,
              1
            ]
          ]
        ],
        "expectedOutput": 1
      },
      {
        "input": [
          3,
          [
            [
              7,
              2,
              3
            ],
            [
              4,
              5,
              6
            ],
            [
              1,
              8,
              9
            ]
          ]
        ],
        "expectedOutput": 22
      }
    ]
  },
  {
    "number": 166,
    "title": "Unique Paths II",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "description": "You are given an `m x n` integer array `obstacleGrid`. There is a robot initially located at the top-left corner (`(0, 0)`). An obstacle and space are marked as 1 or 0 respectively in `obstacleGrid`. A path that the robot takes cannot include any square that is an obstacle. Return the number of possible unique paths that the robot can take to reach the bottom-right corner.",
    "constraints": [
      "m == obstacleGrid.length",
      "n == obstacleGrid[i].length",
      "1 <= m, n <= 100",
      "obstacleGrid[i][j] is 0 or 1."
    ],
    "examples": [
      {
        "input": "obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]",
        "output": "2",
        "explanation": "One obstacle in the middle of grid."
      },
      {
        "input": "obstacleGrid = [[0,1],[0,0]]",
        "output": "1",
        "explanation": "Only 1 path."
      }
    ],
    "functionName": "uniquePathsWithObstacles",
    "returnType": "int",
    "parameters": [
      {
        "name": "obstacleGrid",
        "type": "int[][]"
      }
    ],
    "testCases": [
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
              1,
              0
            ],
            [
              0,
              0,
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
              1
            ]
          ]
        ],
        "expectedOutput": 0
      },
      {
        "input": [
          [
            [
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
              1
            ],
            [
              0,
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
        "expectedOutput": 6
      },
      {
        "input": [
          [
            [
              0,
              0
            ],
            [
              0,
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
              0,
              0,
              0
            ],
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
            ]
          ]
        ],
        "expectedOutput": 7
      },
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
              1,
              0
            ],
            [
              0,
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
              1,
              0
            ],
            [
              0,
              0
            ]
          ]
        ],
        "expectedOutput": 0
      }
    ]
  },
  {
    "number": 167,
    "title": "Best Time to Buy and Sell Stock With Transaction Fee",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "description": "You are given an array `prices` where `prices[i]` is the price of a given stock on the `i`th day, and an integer `fee` representing a transaction fee. Find the maximum profit you can achieve. You may complete as many transactions as you like, but you need to pay the transaction fee for each transaction.",
    "constraints": [
      "1 <= prices.length <= 5 * 10^4",
      "1 <= prices[i] <= 5 * 10^4",
      "0 <= fee <= 5 * 10^4"
    ],
    "examples": [
      {
        "input": "prices = [1,3,2,8,4,9], fee = 2",
        "output": "8",
        "explanation": "Buy at 1, sell at 8 (profit 8-1-2=5); buy at 4, sell at 9 (profit 9-4-2=3). Total = 8."
      },
      {
        "input": "prices = [1,3,7,5,10,3], fee = 3",
        "output": "6",
        "explanation": "Maximum profit is 6."
      }
    ],
    "functionName": "maxProfitFee",
    "returnType": "int",
    "parameters": [
      {
        "name": "prices",
        "type": "int[]"
      },
      {
        "name": "fee",
        "type": "int"
      }
    ],
    "testCases": [
      {
        "input": [
          [
            1,
            3,
            2,
            8,
            4,
            9
          ],
          2
        ],
        "expectedOutput": 8
      },
      {
        "input": [
          [
            1,
            3,
            7,
            5,
            10,
            3
          ],
          3
        ],
        "expectedOutput": 6
      },
      {
        "input": [
          [
            1
          ],
          1
        ],
        "expectedOutput": 0
      },
      {
        "input": [
          [
            1,
            4,
            6,
            2,
            8,
            3,
            10,
            14
          ],
          3
        ],
        "expectedOutput": 13
      },
      {
        "input": [
          [
            9,
            8,
            7,
            1,
            2
          ],
          1
        ],
        "expectedOutput": 0
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
          1
        ],
        "expectedOutput": 3
      },
      {
        "input": [
          [
            4,
            5,
            2,
            4,
            3,
            3,
            1,
            2,
            5,
            4
          ],
          1
        ],
        "expectedOutput": 4
      },
      {
        "input": [
          [
            2,
            1,
            4,
            4,
            2,
            3,
            2,
            5,
            1,
            2
          ],
          1
        ],
        "expectedOutput": 4
      },
      {
        "input": [
          [
            1,
            10
          ],
          2
        ],
        "expectedOutput": 7
      },
      {
        "input": [
          [
            5,
            2,
            8,
            1,
            9
          ],
          2
        ],
        "expectedOutput": 10
      }
    ]
  },
  {
    "number": 168,
    "title": "Best Time to Buy and Sell Stock IV",
    "topic": "Dynamic Programming",
    "difficulty": "Hard",
    "description": "You are given an integer array `prices` where `prices[i]` is the price of a given stock on the `i`th day, and an integer `k`. Find the maximum profit you can achieve. You may complete at most `k` transactions.",
    "constraints": [
      "1 <= k <= 100",
      "1 <= prices.length <= 1000",
      "0 <= prices[i] <= 1000"
    ],
    "examples": [
      {
        "input": "k = 2, prices = [2,4,1]",
        "output": "2",
        "explanation": "Buy day 1 (price 2), sell day 2 (price 4)."
      },
      {
        "input": "k = 2, prices = [3,2,6,5,0,3]",
        "output": "7",
        "explanation": "Buy at 2, sell at 6 (4); buy at 0, sell at 3 (3). Total = 7."
      }
    ],
    "functionName": "maxProfitIV",
    "returnType": "int",
    "parameters": [
      {
        "name": "k",
        "type": "int"
      },
      {
        "name": "prices",
        "type": "int[]"
      }
    ],
    "testCases": [
      {
        "input": [
          2,
          [
            2,
            4,
            1
          ]
        ],
        "expectedOutput": 2
      },
      {
        "input": [
          2,
          [
            3,
            2,
            6,
            5,
            0,
            3
          ]
        ],
        "expectedOutput": 7
      },
      {
        "input": [
          2,
          []
        ],
        "expectedOutput": 0
      },
      {
        "input": [
          1,
          [
            1,
            2
          ]
        ],
        "expectedOutput": 1
      },
      {
        "input": [
          2,
          [
            1,
            2,
            4
          ]
        ],
        "expectedOutput": 3
      },
      {
        "input": [
          3,
          [
            2,
            6,
            8,
            7,
            8,
            7,
            9,
            4,
            1,
            2,
            4,
            5,
            8
          ]
        ],
        "expectedOutput": 15
      },
      {
        "input": [
          1,
          [
            7,
            6,
            4,
            3,
            1
          ]
        ],
        "expectedOutput": 0
      },
      {
        "input": [
          2,
          [
            1,
            2,
            3,
            4,
            5
          ]
        ],
        "expectedOutput": 4
      },
      {
        "input": [
          2,
          [
            3,
            3,
            5,
            0,
            0,
            3,
            1,
            4
          ]
        ],
        "expectedOutput": 6
      },
      {
        "input": [
          4,
          [
            1,
            4,
            2,
            7
          ]
        ],
        "expectedOutput": 8
      }
    ]
  },
  {
    "number": 169,
    "title": "Climbing Stairs",
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "description": "You are climbing a staircase. It takes `n` steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
    "constraints": [
      "1 <= n <= 45"
    ],
    "examples": [
      {
        "input": "n = 2",
        "output": "2",
        "explanation": "1 step + 1 step, or 2 steps."
      },
      {
        "input": "n = 3",
        "output": "3",
        "explanation": "Three ways to climb to top."
      }
    ],
    "functionName": "climbStairs",
    "returnType": "int",
    "parameters": [
      {
        "name": "n",
        "type": "int"
      }
    ],
    "testCases": [
      {
        "input": [
          2
        ],
        "expectedOutput": 2
      },
      {
        "input": [
          3
        ],
        "expectedOutput": 3
      },
      {
        "input": [
          1
        ],
        "expectedOutput": 1
      },
      {
        "input": [
          4
        ],
        "expectedOutput": 5
      },
      {
        "input": [
          5
        ],
        "expectedOutput": 8
      },
      {
        "input": [
          6
        ],
        "expectedOutput": 13
      },
      {
        "input": [
          7
        ],
        "expectedOutput": 21
      },
      {
        "input": [
          8
        ],
        "expectedOutput": 34
      },
      {
        "input": [
          9
        ],
        "expectedOutput": 55
      },
      {
        "input": [
          10
        ],
        "expectedOutput": 89
      }
    ]
  },
  {
    "number": 170,
    "title": "0/1 Knapsack",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "description": "You are given weights and values of `N` items, put these items in a knapsack of capacity `W` to get the maximum total value in the knapsack. Note that we have only one quantity of each item (0/1 Knapsack).",
    "constraints": [
      "1 <= N <= 1000",
      "1 <= W <= 1000",
      "1 <= wt[i] <= 1000",
      "1 <= val[i] <= 1000"
    ],
    "examples": [
      {
        "input": "W = 4, wt = [4,5,1], val = [1,2,3], n = 3",
        "output": "3",
        "explanation": "Pick item 3 of weight 1 and value 3."
      },
      {
        "input": "W = 3, wt = [4,5,6], val = [1,2,3], n = 3",
        "output": "0",
        "explanation": "No item can fit."
      }
    ],
    "functionName": "knapSack",
    "returnType": "int",
    "parameters": [
      {
        "name": "W",
        "type": "int"
      },
      {
        "name": "wt",
        "type": "int[]"
      },
      {
        "name": "val",
        "type": "int[]"
      },
      {
        "name": "n",
        "type": "int"
      }
    ],
    "testCases": [
      {
        "input": [
          4,
          [
            4,
            5,
            1
          ],
          [
            1,
            2,
            3
          ],
          3
        ],
        "expectedOutput": 3
      },
      {
        "input": [
          3,
          [
            4,
            5,
            6
          ],
          [
            1,
            2,
            3
          ],
          3
        ],
        "expectedOutput": 0
      },
      {
        "input": [
          50,
          [
            10,
            20,
            30
          ],
          [
            60,
            100,
            120
          ],
          3
        ],
        "expectedOutput": 220
      },
      {
        "input": [
          10,
          [
            5
          ],
          [
            10
          ],
          1
        ],
        "expectedOutput": 10
      },
      {
        "input": [
          5,
          [
            1,
            2,
            3
          ],
          [
            6,
            10,
            12
          ],
          3
        ],
        "expectedOutput": 22
      },
      {
        "input": [
          8,
          [
            2,
            3,
            4,
            5
          ],
          [
            3,
            4,
            5,
            6
          ],
          4
        ],
        "expectedOutput": 10
      },
      {
        "input": [
          10,
          [
            3,
            4,
            5
          ],
          [
            30,
            50,
            60
          ],
          3
        ],
        "expectedOutput": 110
      },
      {
        "input": [
          0,
          [
            1,
            2,
            3
          ],
          [
            10,
            20,
            30
          ],
          3
        ],
        "expectedOutput": 0
      },
      {
        "input": [
          7,
          [
            1,
            3,
            4,
            5
          ],
          [
            1,
            4,
            5,
            7
          ],
          4
        ],
        "expectedOutput": 9
      },
      {
        "input": [
          15,
          [
            1,
            2,
            4,
            5,
            7,
            8
          ],
          [
            2,
            3,
            5,
            7,
            10,
            12
          ],
          6
        ],
        "expectedOutput": 22
      }
    ]
  },
  {
    "number": 171,
    "title": "Partition a Set Into Two Subsets With Minimum Absolute Sum Difference",
    "topic": "Dynamic Programming",
    "difficulty": "Hard",
    "description": "Given an integer array `arr` of size `n`, divide it into two sets `S1` and `S2` such that the absolute difference between their sums is minimum and find the minimum difference.",
    "constraints": [
      "1 <= n <= 50",
      "0 <= arr[i] <= 1000"
    ],
    "examples": [
      {
        "input": "arr = [1,6,11,5], n = 4",
        "output": "1",
        "explanation": "Subsets S1 = [1,5,6] (sum 12), S2 = [11] (sum 11). Difference = 1."
      },
      {
        "input": "arr = [1,4], n = 2",
        "output": "3",
        "explanation": "Difference is 3."
      }
    ],
    "functionName": "minDifference",
    "returnType": "int",
    "parameters": [
      {
        "name": "arr",
        "type": "int[]"
      },
      {
        "name": "n",
        "type": "int"
      }
    ],
    "testCases": [
      {
        "input": [
          [
            1,
            6,
            11,
            5
          ],
          4
        ],
        "expectedOutput": 1
      },
      {
        "input": [
          [
            1,
            4
          ],
          2
        ],
        "expectedOutput": 3
      },
      {
        "input": [
          [
            3
          ],
          1
        ],
        "expectedOutput": 3
      },
      {
        "input": [
          [
            1,
            2,
            3,
            9
          ],
          4
        ],
        "expectedOutput": 3
      },
      {
        "input": [
          [
            1,
            2,
            7
          ],
          3
        ],
        "expectedOutput": 4
      },
      {
        "input": [
          [
            3,
            1,
            4,
            2,
            2,
            1
          ],
          6
        ],
        "expectedOutput": 1
      },
      {
        "input": [
          [
            2,
            2,
            2,
            2
          ],
          4
        ],
        "expectedOutput": 0
      },
      {
        "input": [
          [
            10,
            20,
            15,
            5,
            25
          ],
          5
        ],
        "expectedOutput": 5
      },
      {
        "input": [
          [
            1,
            5,
            11,
            5
          ],
          4
        ],
        "expectedOutput": 0
      },
      {
        "input": [
          [
            8,
            6,
            5
          ],
          3
        ],
        "expectedOutput": 3
      }
    ]
  },
  {
    "number": 172,
    "title": "Target Sum",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "description": "You are given an integer array `nums` and an integer `target`. You want to build an expression out of nums by adding one of the symbols '+' and '-' before each integer in nums and then concatenate all the integers. Return the number of different expressions that you can build, which evaluates to `target`.",
    "constraints": [
      "1 <= nums.length <= 20",
      "0 <= nums[i] <= 1000",
      "0 <= sum(nums[i]) <= 1000",
      "-1000 <= target <= 1000"
    ],
    "examples": [
      {
        "input": "nums = [1,1,1,1,1], target = 3",
        "output": "5",
        "explanation": "5 ways to assign symbols to get sum 3."
      },
      {
        "input": "nums = [1], target = 1",
        "output": "1",
        "explanation": "+1 = 1."
      }
    ],
    "functionName": "findTargetSumWays",
    "returnType": "int",
    "parameters": [
      {
        "name": "nums",
        "type": "int[]"
      },
      {
        "name": "target",
        "type": "int"
      }
    ],
    "testCases": [
      {
        "input": [
          [
            1,
            1,
            1,
            1,
            1
          ],
          3
        ],
        "expectedOutput": 5
      },
      {
        "input": [
          [
            1
          ],
          1
        ],
        "expectedOutput": 1
      },
      {
        "input": [
          [
            1
          ],
          2
        ],
        "expectedOutput": 0
      },
      {
        "input": [
          [
            1,
            0
          ],
          1
        ],
        "expectedOutput": 2
      },
      {
        "input": [
          [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1
          ],
          1
        ],
        "expectedOutput": 256
      },
      {
        "input": [
          [
            1,
            2,
            3
          ],
          0
        ],
        "expectedOutput": 2
      },
      {
        "input": [
          [
            2,
            1
          ],
          1
        ],
        "expectedOutput": 1
      },
      {
        "input": [
          [
            2,
            3,
            5
          ],
          0
        ],
        "expectedOutput": 2
      },
      {
        "input": [
          [
            100
          ],
          -100
        ],
        "expectedOutput": 1
      },
      {
        "input": [
          [
            1,
            2,
            1
          ],
          0
        ],
        "expectedOutput": 2
      }
    ]
  },
  {
    "number": 173,
    "title": "Coin Change II",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "description": "You are given an integer array `coins` representing coins of different denominations and an integer `amount` representing a total amount of money. Return the number of combinations that make up that amount. You may assume that you have an infinite number of each kind of coin.",
    "constraints": [
      "1 <= coins.length <= 300",
      "1 <= coins[i] <= 5000",
      "All values of coins are unique.",
      "0 <= amount <= 5000"
    ],
    "examples": [
      {
        "input": "amount = 5, coins = [1,2,5]",
        "output": "4",
        "explanation": "Combinations are: 5, 2+2+1, 2+1+1+1, 1+1+1+1+1."
      },
      {
        "input": "amount = 3, coins = [2]",
        "output": "0",
        "explanation": "Cannot make amount 3 with only 2-coins."
      }
    ],
    "functionName": "change",
    "returnType": "int",
    "parameters": [
      {
        "name": "amount",
        "type": "int"
      },
      {
        "name": "coins",
        "type": "int[]"
      }
    ],
    "testCases": [
      {
        "input": [
          5,
          [
            1,
            2,
            5
          ]
        ],
        "expectedOutput": 4
      },
      {
        "input": [
          3,
          [
            2
          ]
        ],
        "expectedOutput": 0
      },
      {
        "input": [
          10,
          [
            10
          ]
        ],
        "expectedOutput": 1
      },
      {
        "input": [
          0,
          [
            1,
            2
          ]
        ],
        "expectedOutput": 1
      },
      {
        "input": [
          4,
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
          500,
          [
            1,
            2,
            5
          ]
        ],
        "expectedOutput": 12701
      },
      {
        "input": [
          5,
          [
            1,
            2,
            3
          ]
        ],
        "expectedOutput": 5
      },
      {
        "input": [
          8,
          [
            2,
            3,
            5
          ]
        ],
        "expectedOutput": 3
      },
      {
        "input": [
          10,
          [
            2,
            5,
            3,
            6
          ]
        ],
        "expectedOutput": 5
      },
      {
        "input": [
          7,
          [
            2,
            4
          ]
        ],
        "expectedOutput": 0
      }
    ]
  },
  {
    "number": 174,
    "title": "Coin Change — Minimum Number of Coins",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "description": "You are given an integer array `coins` representing coins of different denominations and an integer `amount` representing a total amount of money. Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.",
    "constraints": [
      "1 <= coins.length <= 12",
      "1 <= coins[i] <= 2^31 - 1",
      "0 <= amount <= 10^4"
    ],
    "examples": [
      {
        "input": "coins = [1,2,5], amount = 11",
        "output": "3",
        "explanation": "11 = 5 + 5 + 1 (3 coins)."
      },
      {
        "input": "coins = [2], amount = 3",
        "output": "-1",
        "explanation": "Impossible."
      }
    ],
    "functionName": "coinChange",
    "returnType": "int",
    "parameters": [
      {
        "name": "coins",
        "type": "int[]"
      },
      {
        "name": "amount",
        "type": "int"
      }
    ],
    "testCases": [
      {
        "input": [
          [
            1,
            2,
            5
          ],
          11
        ],
        "expectedOutput": 3
      },
      {
        "input": [
          [
            2
          ],
          3
        ],
        "expectedOutput": -1
      },
      {
        "input": [
          [
            1
          ],
          0
        ],
        "expectedOutput": 0
      },
      {
        "input": [
          [
            1
          ],
          2
        ],
        "expectedOutput": 2
      },
      {
        "input": [
          [
            186,
            419,
            83,
            408
          ],
          6249
        ],
        "expectedOutput": 20
      },
      {
        "input": [
          [
            2,
            5,
            10,
            1
          ],
          27
        ],
        "expectedOutput": 4
      },
      {
        "input": [
          [
            2
          ],
          1
        ],
        "expectedOutput": -1
      },
      {
        "input": [
          [
            1,
            2,
            5
          ],
          100
        ],
        "expectedOutput": 20
      },
      {
        "input": [
          [
            2,
            4,
            6
          ],
          5
        ],
        "expectedOutput": -1
      },
      {
        "input": [
          [
            3,
            7,
            405,
            436
          ],
          8839
        ],
        "expectedOutput": 25
      }
    ]
  },
  {
    "number": 175,
    "title": "Longest Common Subsequence",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "description": "Given two strings `text1` and `text2`, return the length of their longest common subsequence. If there is no common subsequence, return 0.",
    "constraints": [
      "1 <= text1.length, text2.length <= 1000",
      "text1 and text2 consist of only lowercase English characters."
    ],
    "examples": [
      {
        "input": "text1 = 'abcde', text2 = 'ace'",
        "output": "3",
        "explanation": "LCS is 'ace' with length 3."
      },
      {
        "input": "text1 = 'abc', text2 = 'abc'",
        "output": "3",
        "explanation": "LCS is 'abc'."
      }
    ],
    "functionName": "longestCommonSubsequence",
    "returnType": "int",
    "parameters": [
      {
        "name": "text1",
        "type": "string"
      },
      {
        "name": "text2",
        "type": "string"
      }
    ],
    "testCases": [
      {
        "input": [
          "abcde",
          "ace"
        ],
        "expectedOutput": 3
      },
      {
        "input": [
          "abc",
          "abc"
        ],
        "expectedOutput": 3
      },
      {
        "input": [
          "abc",
          "def"
        ],
        "expectedOutput": 0
      },
      {
        "input": [
          "bsbininm",
          "jmjkbkjkv"
        ],
        "expectedOutput": 1
      },
      {
        "input": [
          "oxcpqrsvwf",
          "shmtulqrypy"
        ],
        "expectedOutput": 2
      },
      {
        "input": [
          "aggtab",
          "gxtxayb"
        ],
        "expectedOutput": 4
      },
      {
        "input": [
          "a",
          "a"
        ],
        "expectedOutput": 1
      },
      {
        "input": [
          "a",
          "b"
        ],
        "expectedOutput": 0
      },
      {
        "input": [
          "pmjghexybyrgzrcrmbtx",
          "fcvqlypmnikf"
        ],
        "expectedOutput": 2
      },
      {
        "input": [
          "longest",
          "stone"
        ],
        "expectedOutput": 3
      }
    ]
  },
  {
    "number": 176,
    "title": "Longest Common Substring",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "description": "Given two strings `s1` and `s2`, find the length of the longest common substring.",
    "constraints": [
      "1 <= s1.length, s2.length <= 1000",
      "s1 and s2 consist of lowercase English letters."
    ],
    "examples": [
      {
        "input": "s1 = 'ABCDGH', s2 = 'ACDGHR'",
        "output": "4",
        "explanation": "The longest common substring is 'CDGH' of length 4."
      },
      {
        "input": "s1 = 'ABC', s2 = 'ACB'",
        "output": "1",
        "explanation": "Length 1."
      }
    ],
    "functionName": "longestCommonSubstr",
    "returnType": "int",
    "parameters": [
      {
        "name": "s1",
        "type": "string"
      },
      {
        "name": "s2",
        "type": "string"
      }
    ],
    "testCases": [
      {
        "input": [
          "ABCDGH",
          "ACDGHR"
        ],
        "expectedOutput": 4
      },
      {
        "input": [
          "ABC",
          "ACB"
        ],
        "expectedOutput": 1
      },
      {
        "input": [
          "XYZ",
          "XYZ"
        ],
        "expectedOutput": 3
      },
      {
        "input": [
          "A",
          "A"
        ],
        "expectedOutput": 1
      },
      {
        "input": [
          "A",
          "B"
        ],
        "expectedOutput": 0
      },
      {
        "input": [
          "geeksforgeeks",
          "geeks"
        ],
        "expectedOutput": 5
      },
      {
        "input": [
          "programming",
          "gram"
        ],
        "expectedOutput": 4
      },
      {
        "input": [
          "abcde",
          "abfde"
        ],
        "expectedOutput": 2
      },
      {
        "input": [
          "zxabcdezy",
          "yzabcdezx"
        ],
        "expectedOutput": 6
      },
      {
        "input": [
          "abracadabra",
          "cadabra"
        ],
        "expectedOutput": 7
      }
    ]
  },
  {
    "number": 177,
    "title": "Longest Palindromic Subsequence",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "description": "Given a string `s`, find the longest palindromic subsequence's length in `s`.",
    "constraints": [
      "1 <= s.length <= 1000",
      "s consists only of lowercase English letters."
    ],
    "examples": [
      {
        "input": "s = 'bbbab'",
        "output": "4",
        "explanation": "One possible longest palindromic subsequence is 'bbbb'."
      },
      {
        "input": "s = 'cbbd'",
        "output": "2",
        "explanation": "LPS is 'bb'."
      }
    ],
    "functionName": "longestPalindromeSubseq",
    "returnType": "int",
    "parameters": [
      {
        "name": "s",
        "type": "string"
      }
    ],
    "testCases": [
      {
        "input": [
          "bbbab"
        ],
        "expectedOutput": 4
      },
      {
        "input": [
          "cbbd"
        ],
        "expectedOutput": 2
      },
      {
        "input": [
          "a"
        ],
        "expectedOutput": 1
      },
      {
        "input": [
          "agbdba"
        ],
        "expectedOutput": 5
      },
      {
        "input": [
          "racecar"
        ],
        "expectedOutput": 7
      },
      {
        "input": [
          "abacdfgdcaba"
        ],
        "expectedOutput": 7
      },
      {
        "input": [
          "character"
        ],
        "expectedOutput": 5
      },
      {
        "input": [
          "abcdef"
        ],
        "expectedOutput": 1
      },
      {
        "input": [
          "aa"
        ],
        "expectedOutput": 2
      },
      {
        "input": [
          "noon"
        ],
        "expectedOutput": 4
      }
    ]
  },
  {
    "number": 178,
    "title": "Longest Increasing Subsequence",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "description": "Given an integer array `nums`, return the length of the longest strictly increasing subsequence in O(n log n) or O(n^2) time.",
    "constraints": [
      "1 <= nums.length <= 2500",
      "-10^4 <= nums[i] <= 10^4"
    ],
    "examples": [
      {
        "input": "nums = [10,9,2,5,3,7,101,18]",
        "output": "4",
        "explanation": "The longest increasing subsequence is [2,3,7,101] with length 4."
      },
      {
        "input": "nums = [0,1,0,3,2,3]",
        "output": "4",
        "explanation": "[0,1,2,3] has length 4."
      }
    ],
    "functionName": "lengthOfLIS",
    "returnType": "int",
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
            10,
            9,
            2,
            5,
            3,
            7,
            101,
            18
          ]
        ],
        "expectedOutput": 4
      },
      {
        "input": [
          [
            0,
            1,
            0,
            3,
            2,
            3
          ]
        ],
        "expectedOutput": 4
      },
      {
        "input": [
          [
            7,
            7,
            7,
            7,
            7,
            7,
            7
          ]
        ],
        "expectedOutput": 1
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
            1,
            3,
            6,
            7,
            9,
            4,
            10,
            5,
            6
          ]
        ],
        "expectedOutput": 6
      },
      {
        "input": [
          [
            4,
            10,
            4,
            3,
            8,
            9
          ]
        ],
        "expectedOutput": 3
      },
      {
        "input": [
          [
            3,
            5,
            6,
            2,
            5,
            4,
            19,
            5,
            6,
            7,
            12
          ]
        ],
        "expectedOutput": 6
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
        "expectedOutput": 1
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
        "expectedOutput": 5
      },
      {
        "input": [
          [
            2,
            1,
            5,
            3,
            6,
            4,
            8,
            9,
            7
          ]
        ],
        "expectedOutput": 5
      }
    ]
  },
  {
    "number": 179,
    "title": "Number of Longest Increasing Subsequences",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "description": "Given an integer array `nums`, return the number of longest increasing subsequences.",
    "constraints": [
      "1 <= nums.length <= 2000",
      "-10^6 <= nums[i] <= 10^6"
    ],
    "examples": [
      {
        "input": "nums = [1,3,5,4,7]",
        "output": "2",
        "explanation": "Two LIS of length 4: [1,3,4,7] and [1,3,5,7]."
      },
      {
        "input": "nums = [2,2,2,2,2]",
        "output": "5",
        "explanation": "5 LIS of length 1."
      }
    ],
    "functionName": "findNumberOfLIS",
    "returnType": "int",
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
            5,
            4,
            7
          ]
        ],
        "expectedOutput": 2
      },
      {
        "input": [
          [
            2,
            2,
            2,
            2,
            2
          ]
        ],
        "expectedOutput": 5
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
            1,
            2,
            4,
            3,
            5,
            4,
            7,
            2
          ]
        ],
        "expectedOutput": 3
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
        "expectedOutput": 1
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
        "expectedOutput": 5
      },
      {
        "input": [
          [
            1,
            3,
            2
          ]
        ],
        "expectedOutput": 2
      },
      {
        "input": [
          [
            3,
            1,
            2
          ]
        ],
        "expectedOutput": 1
      },
      {
        "input": [
          [
            1,
            1,
            1,
            2,
            2,
            2
          ]
        ],
        "expectedOutput": 9
      },
      {
        "input": [
          [
            1,
            2,
            1,
            2,
            1,
            2
          ]
        ],
        "expectedOutput": 9
      }
    ]
  },
  {
    "number": 180,
    "title": "Edit Distance",
    "topic": "Dynamic Programming",
    "difficulty": "Hard",
    "description": "Given two strings `word1` and `word2`, return the minimum number of operations required to convert `word1` to `word2`. You have the following three operations permitted: Insert a character, Delete a character, Replace a character.",
    "constraints": [
      "0 <= word1.length, word2.length <= 500",
      "word1 and word2 consist of lowercase English letters."
    ],
    "examples": [
      {
        "input": "word1 = 'horse', word2 = 'ros'",
        "output": "3",
        "explanation": "horse -> rorse -> rose -> ros (3 operations)."
      },
      {
        "input": "word1 = 'intention', word2 = 'execution'",
        "output": "5",
        "explanation": "5 operations."
      }
    ],
    "functionName": "minDistance",
    "returnType": "int",
    "parameters": [
      {
        "name": "word1",
        "type": "string"
      },
      {
        "name": "word2",
        "type": "string"
      }
    ],
    "testCases": [
      {
        "input": [
          "horse",
          "ros"
        ],
        "expectedOutput": 3
      },
      {
        "input": [
          "intention",
          "execution"
        ],
        "expectedOutput": 5
      },
      {
        "input": [
          "",
          ""
        ],
        "expectedOutput": 0
      },
      {
        "input": [
          "a",
          ""
        ],
        "expectedOutput": 1
      },
      {
        "input": [
          "",
          "a"
        ],
        "expectedOutput": 1
      },
      {
        "input": [
          "abc",
          "abc"
        ],
        "expectedOutput": 0
      },
      {
        "input": [
          "sea",
          "eat"
        ],
        "expectedOutput": 2
      },
      {
        "input": [
          "kitten",
          "sitting"
        ],
        "expectedOutput": 3
      },
      {
        "input": [
          "plasma",
          "altruism"
        ],
        "expectedOutput": 6
      },
      {
        "input": [
          "zoologicoarchaeologist",
          "zoogeologist"
        ],
        "expectedOutput": 10
      }
    ]
  },
  {
    "number": 181,
    "title": "Wildcard Matching",
    "topic": "Dynamic Programming",
    "difficulty": "Hard",
    "description": "Given an input string (`s`) and a pattern (`p`), implement wildcard pattern matching with support for '?' and '*' where '?' Matches any single character, and '*' Matches any sequence of characters (including the empty sequence).",
    "constraints": [
      "0 <= s.length, p.length <= 2000",
      "s contains only lowercase English letters.",
      "p contains only lowercase English letters, '?' or '*'."
    ],
    "examples": [
      {
        "input": "s = 'aa', p = 'a'",
        "output": "false",
        "explanation": "'a' does not match entire string 'aa'."
      },
      {
        "input": "s = 'aa', p = '*'",
        "output": "true",
        "explanation": "'*' matches any sequence."
      },
      {
        "input": "s = 'cb', p = '?a'",
        "output": "false",
        "explanation": "'?a' does not match 'cb'."
      }
    ],
    "functionName": "isMatch",
    "returnType": "boolean",
    "parameters": [
      {
        "name": "s",
        "type": "string"
      },
      {
        "name": "p",
        "type": "string"
      }
    ],
    "testCases": [
      {
        "input": [
          "aa",
          "a"
        ],
        "expectedOutput": false
      },
      {
        "input": [
          "aa",
          "*"
        ],
        "expectedOutput": true
      },
      {
        "input": [
          "cb",
          "?a"
        ],
        "expectedOutput": false
      },
      {
        "input": [
          "adceb",
          "*a*b"
        ],
        "expectedOutput": true
      },
      {
        "input": [
          "acdcb",
          "a*c?b"
        ],
        "expectedOutput": false
      },
      {
        "input": [
          "",
          "*"
        ],
        "expectedOutput": true
      },
      {
        "input": [
          "",
          ""
        ],
        "expectedOutput": true
      },
      {
        "input": [
          "a",
          ""
        ],
        "expectedOutput": false
      },
      {
        "input": [
          "mississippi",
          "m??*ss*?i*pi"
        ],
        "expectedOutput": false
      },
      {
        "input": [
          "abcabczzzde",
          "*abc???de*"
        ],
        "expectedOutput": true
      }
    ]
  },
  {
    "number": 182,
    "title": "Word Break",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "description": "Given a string `s` and a dictionary of strings `wordDict`, return `true` if `s` can be segmented into a space-separated sequence of one or more dictionary words.",
    "constraints": [
      "1 <= s.length <= 300",
      "1 <= wordDict.length <= 1000",
      "1 <= wordDict[i].length <= 20",
      "s and wordDict[i] consist of only lowercase English letters.",
      "All strings of wordDict are unique."
    ],
    "examples": [
      {
        "input": "s = 'leetcode', wordDict = ['leet','code']",
        "output": "true",
        "explanation": "'leetcode' can be segmented as 'leet code'."
      },
      {
        "input": "s = 'applepenapple', wordDict = ['apple','pen']",
        "output": "true",
        "explanation": "'apple pen apple'."
      }
    ],
    "functionName": "wordBreak",
    "returnType": "boolean",
    "parameters": [
      {
        "name": "s",
        "type": "string"
      },
      {
        "name": "wordDict",
        "type": "string[]"
      }
    ],
    "testCases": [
      {
        "input": [
          "leetcode",
          [
            "leet",
            "code"
          ]
        ],
        "expectedOutput": true
      },
      {
        "input": [
          "applepenapple",
          [
            "apple",
            "pen"
          ]
        ],
        "expectedOutput": true
      },
      {
        "input": [
          "catsandog",
          [
            "cats",
            "dog",
            "sand",
            "and",
            "cat"
          ]
        ],
        "expectedOutput": false
      },
      {
        "input": [
          "a",
          [
            "a"
          ]
        ],
        "expectedOutput": true
      },
      {
        "input": [
          "a",
          [
            "b"
          ]
        ],
        "expectedOutput": false
      },
      {
        "input": [
          "cars",
          [
            "car",
            "ca",
            "rs"
          ]
        ],
        "expectedOutput": true
      },
      {
        "input": [
          "bb",
          [
            "a",
            "b",
            "bbb",
            "bbbb"
          ]
        ],
        "expectedOutput": true
      },
      {
        "input": [
          "goalspecial",
          [
            "go",
            "goal",
            "goals",
            "special"
          ]
        ],
        "expectedOutput": true
      },
      {
        "input": [
          "program",
          [
            "pro",
            "gram"
          ]
        ],
        "expectedOutput": true
      },
      {
        "input": [
          "abcd",
          [
            "a",
            "abc",
            "b",
            "cd"
          ]
        ],
        "expectedOutput": true
      }
    ]
  },
  {
    "number": 183,
    "title": "Matrix Chain Multiplication",
    "topic": "Dynamic Programming",
    "difficulty": "Hard",
    "description": "Given a sequence of matrices, find the most efficient way to multiply these matrices together. The problem is not actually to perform the multiplications, but merely to decide in which order to perform the multiplications. Given array `arr` where matrix `i` has dimension `arr[i-1] x arr[i]`, find the minimum number of scalar multiplications needed.",
    "constraints": [
      "2 <= N <= 100",
      "1 <= arr[i] <= 500"
    ],
    "examples": [
      {
        "input": "arr = [40,20,30,10,30], N = 5",
        "output": "26000",
        "explanation": "Min multiplications: ((A(BC))D) -> 26000."
      },
      {
        "input": "arr = [10,20,30], N = 3",
        "output": "6000",
        "explanation": "10 * 20 * 30 = 6000."
      }
    ],
    "functionName": "matrixMultiplication",
    "returnType": "int",
    "parameters": [
      {
        "name": "arr",
        "type": "int[]"
      },
      {
        "name": "N",
        "type": "int"
      }
    ],
    "testCases": [
      {
        "input": [
          [
            40,
            20,
            30,
            10,
            30
          ],
          5
        ],
        "expectedOutput": 26000
      },
      {
        "input": [
          [
            10,
            20,
            30
          ],
          3
        ],
        "expectedOutput": 6000
      },
      {
        "input": [
          [
            10,
            30,
            5,
            60
          ],
          4
        ],
        "expectedOutput": 4500
      },
      {
        "input": [
          [
            1,
            2,
            3,
            4,
            3
          ],
          5
        ],
        "expectedOutput": 30
      },
      {
        "input": [
          [
            5,
            10,
            3,
            12,
            5,
            50,
            6
          ],
          7
        ],
        "expectedOutput": 2010
      },
      {
        "input": [
          [
            2,
            3,
            4
          ],
          3
        ],
        "expectedOutput": 24
      },
      {
        "input": [
          [
            10,
            20
          ],
          2
        ],
        "expectedOutput": 0
      },
      {
        "input": [
          [
            1,
            2,
            3,
            4
          ],
          4
        ],
        "expectedOutput": 18
      },
      {
        "input": [
          [
            10,
            100,
            5,
            50
          ],
          4
        ],
        "expectedOutput": 7500
      },
      {
        "input": [
          [
            4,
            10,
            3,
            12,
            20,
            7
          ],
          6
        ],
        "expectedOutput": 1344
      }
    ]
  },
  {
    "number": 184,
    "title": "Palindrome Partitioning II",
    "topic": "Dynamic Programming",
    "difficulty": "Hard",
    "description": "Given a string `s`, partition `s` such that every substring of the partition is a palindrome. Return the minimum cuts needed for a palindrome partitioning of `s` in O(n^2) time.",
    "constraints": [
      "1 <= s.length <= 2000",
      "s consists of lowercase English letters only."
    ],
    "examples": [
      {
        "input": "s = 'aab'",
        "output": "1",
        "explanation": "Cut between 'aa' and 'b'."
      },
      {
        "input": "s = 'a'",
        "output": "0",
        "explanation": "Already palindrome, 0 cuts."
      },
      {
        "input": "s = 'ab'",
        "output": "1",
        "explanation": "1 cut between 'a' and 'b'."
      }
    ],
    "functionName": "minCut",
    "returnType": "int",
    "parameters": [
      {
        "name": "s",
        "type": "string"
      }
    ],
    "testCases": [
      {
        "input": [
          "aab"
        ],
        "expectedOutput": 1
      },
      {
        "input": [
          "a"
        ],
        "expectedOutput": 0
      },
      {
        "input": [
          "ab"
        ],
        "expectedOutput": 1
      },
      {
        "input": [
          "racecar"
        ],
        "expectedOutput": 0
      },
      {
        "input": [
          "ababbbabbababa"
        ],
        "expectedOutput": 3
      },
      {
        "input": [
          "leet"
        ],
        "expectedOutput": 2
      },
      {
        "input": [
          "coder"
        ],
        "expectedOutput": 4
      },
      {
        "input": [
          "noon"
        ],
        "expectedOutput": 0
      },
      {
        "input": [
          "fifteen"
        ],
        "expectedOutput": 4
      },
      {
        "input": [
          "aaabaa"
        ],
        "expectedOutput": 1
      }
    ]
  }
];
