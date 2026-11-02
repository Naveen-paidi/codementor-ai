/**
 * topic11_graphs.js
 */

export const TOPIC_11_PROBLEMS = [
  {
    "number": 132,
    "title": "Flood Fill Algorithm",
    "topic": "Graphs",
    "difficulty": "Easy",
    "description": "An image is represented by an `m x n` integer grid `image` where `image[i][j]` represents the pixel value of the image. You are given three integers `sr`, `sc`, and `color`. Perform a flood fill on the image starting from the pixel `image[sr][sc]`.",
    "constraints": [
      "m == image.length",
      "n == image[i].length",
      "1 <= m, n <= 50",
      "0 <= image[i][j], color < 2^16",
      "0 <= sr < m",
      "0 <= sc < n"
    ],
    "examples": [
      {
        "input": "image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2",
        "output": "[[2,2,2],[2,2,0],[2,0,1]]",
        "explanation": "Center pixel and 4-directionally connected pixels colored 2."
      }
    ],
    "functionName": "floodFill",
    "returnType": "int[][]",
    "parameters": [
      {
        "name": "image",
        "type": "int[][]"
      },
      {
        "name": "sr",
        "type": "int"
      },
      {
        "name": "sc",
        "type": "int"
      },
      {
        "name": "color",
        "type": "int"
      }
    ],
    "testCases": [
      {
        "input": [
          [
            [
              1,
              1,
              1
            ],
            [
              1,
              1,
              0
            ],
            [
              1,
              0,
              1
            ]
          ],
          1,
          1,
          2
        ],
        "expectedOutput": [
          [
            2,
            2,
            2
          ],
          [
            2,
            2,
            0
          ],
          [
            2,
            0,
            1
          ]
        ]
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
            ]
          ],
          0,
          0,
          0
        ],
        "expectedOutput": [
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
              1,
              1
            ]
          ],
          1,
          1,
          1
        ],
        "expectedOutput": [
          [
            0,
            0,
            0
          ],
          [
            0,
            1,
            1
          ]
        ]
      },
      {
        "input": [
          [
            [
              1
            ]
          ],
          0,
          0,
          2
        ],
        "expectedOutput": [
          [
            2
          ]
        ]
      },
      {
        "input": [
          [
            [
              1,
              2
            ],
            [
              2,
              1
            ]
          ],
          0,
          0,
          3
        ],
        "expectedOutput": [
          [
            3,
            2
          ],
          [
            2,
            1
          ]
        ]
      },
      {
        "input": [
          [
            [
              2,
              2,
              2
            ],
            [
              2,
              2,
              2
            ]
          ],
          0,
          1,
          4
        ],
        "expectedOutput": [
          [
            4,
            4,
            4
          ],
          [
            4,
            4,
            4
          ]
        ]
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
          ],
          0,
          1,
          5
        ],
        "expectedOutput": [
          [
            0,
            5
          ],
          [
            1,
            0
          ]
        ]
      },
      {
        "input": [
          [
            [
              1,
              1
            ],
            [
              1,
              1
            ]
          ],
          0,
          0,
          0
        ],
        "expectedOutput": [
          [
            0,
            0
          ],
          [
            0,
            0
          ]
        ]
      },
      {
        "input": [
          [
            [
              3,
              3,
              3
            ],
            [
              3,
              1,
              3
            ],
            [
              3,
              3,
              3
            ]
          ],
          1,
          1,
          2
        ],
        "expectedOutput": [
          [
            3,
            3,
            3
          ],
          [
            3,
            2,
            3
          ],
          [
            3,
            3,
            3
          ]
        ]
      },
      {
        "input": [
          [
            [
              1,
              2,
              3
            ]
          ],
          0,
          1,
          9
        ],
        "expectedOutput": [
          [
            1,
            9,
            3
          ]
        ]
      }
    ]
  },
  {
    "number": 133,
    "title": "Number of Islands",
    "topic": "Graphs",
    "difficulty": "Medium",
    "description": "Given an `m x n` 2D binary grid `grid` which represents a map of '1's (land) and '0's (water), return the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.",
    "constraints": [
      "m == grid.length",
      "n == grid[i].length",
      "1 <= m, n <= 300",
      "grid[i][j] is '0' or '1'."
    ],
    "examples": [
      {
        "input": "grid = [['1','1','1','1','0'],['1','1','0','1','0'],['1','1','0','0','0'],['0','0','0','0','0']]",
        "output": "1",
        "explanation": "1 island."
      },
      {
        "input": "grid = [['1','1','0','0','0'],['1','1','0','0','0'],['0','0','1','0','0'],['0','0','0','1','1']]",
        "output": "3",
        "explanation": "3 islands."
      }
    ],
    "functionName": "numIslands",
    "returnType": "int",
    "parameters": [
      {
        "name": "grid",
        "type": "char[][]"
      }
    ],
    "testCases": [
      {
        "input": [
          [
            [
              "1",
              "1",
              "1",
              "1",
              "0"
            ],
            [
              "1",
              "1",
              "0",
              "1",
              "0"
            ],
            [
              "1",
              "1",
              "0",
              "0",
              "0"
            ],
            [
              "0",
              "0",
              "0",
              "0",
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
              "1",
              "0",
              "0",
              "0"
            ],
            [
              "1",
              "1",
              "0",
              "0",
              "0"
            ],
            [
              "0",
              "0",
              "1",
              "0",
              "0"
            ],
            [
              "0",
              "0",
              "0",
              "1",
              "1"
            ]
          ]
        ],
        "expectedOutput": 3
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
              "0",
              "1"
            ],
            [
              "0",
              "1",
              "0"
            ],
            [
              "1",
              "0",
              "1"
            ]
          ]
        ],
        "expectedOutput": 5
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
        "expectedOutput": 2
      },
      {
        "input": [
          [
            [
              "0",
              "0",
              "0"
            ],
            [
              "0",
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
              "1",
              "1"
            ],
            [
              "0",
              "0",
              "0"
            ],
            [
              "1",
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
              "0",
              "0",
              "1"
            ],
            [
              "0",
              "1",
              "1",
              "0"
            ]
          ]
        ],
        "expectedOutput": 3
      }
    ]
  },
  {
    "number": 134,
    "title": "Rotten Oranges",
    "topic": "Graphs",
    "difficulty": "Medium",
    "description": "You are given an `m x n` grid where each cell can have one of three values: 0 representing an empty cell, 1 representing a fresh orange, or 2 representing a rotten orange. Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten. Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.",
    "constraints": [
      "m == grid.length",
      "n == grid[i].length",
      "1 <= m, n <= 10",
      "grid[i][j] is 0, 1, or 2."
    ],
    "examples": [
      {
        "input": "grid = [[2,1,1],[1,1,0],[0,1,1]]",
        "output": "4",
        "explanation": "4 minutes to rot all fresh oranges."
      },
      {
        "input": "grid = [[2,1,1],[0,1,1],[1,0,1]]",
        "output": "-1",
        "explanation": "Orange at (2,0) cannot be reached."
      }
    ],
    "functionName": "orangesRotting",
    "returnType": "int",
    "parameters": [
      {
        "name": "grid",
        "type": "int[][]"
      }
    ],
    "testCases": [
      {
        "input": [
          [
            [
              2,
              1,
              1
            ],
            [
              1,
              1,
              0
            ],
            [
              0,
              1,
              1
            ]
          ]
        ],
        "expectedOutput": 4
      },
      {
        "input": [
          [
            [
              2,
              1,
              1
            ],
            [
              0,
              1,
              1
            ],
            [
              1,
              0,
              1
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
              2
            ]
          ]
        ],
        "expectedOutput": 0
      },
      {
        "input": [
          [
            [
              1
            ]
          ]
        ],
        "expectedOutput": -1
      },
      {
        "input": [
          [
            [
              2
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
        "expectedOutput": 0
      },
      {
        "input": [
          [
            [
              2,
              2
            ],
            [
              1,
              1
            ],
            [
              0,
              0
            ],
            [
              2,
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
              2,
              1,
              1
            ],
            [
              1,
              1,
              1
            ],
            [
              0,
              1,
              2
            ]
          ]
        ],
        "expectedOutput": 2
      },
      {
        "input": [
          [
            [
              1,
              2
            ]
          ]
        ],
        "expectedOutput": 1
      },
      {
        "input": [
          [
            [
              2,
              0,
              1,
              1,
              1
            ]
          ]
        ],
        "expectedOutput": -1
      }
    ]
  },
  {
    "number": 135,
    "title": "Distance of Nearest Cell Having One",
    "topic": "Graphs",
    "difficulty": "Medium",
    "description": "Given an `m x n` binary matrix `mat`, return the distance of the nearest 0 for each cell (0-1 Matrix / Nearest Cell problem). The distance between two adjacent cells is 1.",
    "constraints": [
      "m == mat.length",
      "n == mat[i].length",
      "1 <= m, n <= 10^4",
      "1 <= m * n <= 10^4",
      "mat[i][j] is either 0 or 1.",
      "There is at least one 0 in mat."
    ],
    "examples": [
      {
        "input": "mat = [[0,0,0],[0,1,0],[0,0,0]]",
        "output": "[[0,0,0],[0,1,0],[0,0,0]]",
        "explanation": "Distance from nearest 0."
      },
      {
        "input": "mat = [[0,0,0],[0,1,0],[1,1,1]]",
        "output": "[[0,0,0],[0,1,0],[1,2,1]]",
        "explanation": "Distance grid."
      }
    ],
    "functionName": "updateMatrix",
    "returnType": "int[][]",
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
        "expectedOutput": [
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
              1,
              0
            ],
            [
              1,
              1,
              1
            ]
          ]
        ],
        "expectedOutput": [
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
            1,
            2,
            1
          ]
        ]
      },
      {
        "input": [
          [
            [
              0
            ]
          ]
        ],
        "expectedOutput": [
          [
            0
          ]
        ]
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
              1
            ]
          ]
        ],
        "expectedOutput": [
          [
            0,
            1
          ],
          [
            1,
            2
          ]
        ]
      },
      {
        "input": [
          [
            [
              1,
              1,
              1
            ],
            [
              1,
              1,
              1
            ],
            [
              1,
              1,
              0
            ]
          ]
        ],
        "expectedOutput": [
          [
            4,
            3,
            2
          ],
          [
            3,
            2,
            1
          ],
          [
            2,
            1,
            0
          ]
        ]
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
        "expectedOutput": [
          [
            0,
            0
          ],
          [
            0,
            0
          ]
        ]
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
              1
            ]
          ]
        ],
        "expectedOutput": [
          [
            1,
            0
          ],
          [
            0,
            1
          ]
        ]
      },
      {
        "input": [
          [
            [
              0,
              1,
              0,
              1,
              1
            ]
          ]
        ],
        "expectedOutput": [
          [
            0,
            1,
            0,
            1,
            2
          ]
        ]
      },
      {
        "input": [
          [
            [
              1
            ],
            [
              1
            ],
            [
              0
            ]
          ]
        ],
        "expectedOutput": [
          [
            2
          ],
          [
            1
          ],
          [
            0
          ]
        ]
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
              1,
              1
            ],
            [
              1,
              1,
              0
            ]
          ]
        ],
        "expectedOutput": [
          [
            0,
            1,
            1
          ],
          [
            1,
            2,
            1
          ],
          [
            1,
            1,
            0
          ]
        ]
      }
    ]
  },
  {
    "number": 136,
    "title": "Surrounded Regions",
    "topic": "Graphs",
    "difficulty": "Medium",
    "description": "Given an `m x n` matrix `board` containing 'X' and 'O', capture all regions that are 4-directionally surrounded by 'X'. A region is captured by flipping all 'O's into 'X's in that surrounded region.",
    "constraints": [
      "m == board.length",
      "n == board[i].length",
      "1 <= m, n <= 200",
      "board[i][j] is 'X' or 'O'."
    ],
    "examples": [
      {
        "input": "board = [['X','X','X','X'],['X','O','O','X'],['X','X','O','X'],['X','O','X','X']]",
        "output": "[['X','X','X','X'],['X','X','X','X'],['X','X','X','X'],['X','O','X','X']]",
        "explanation": "Surrounded 'O's flipped to 'X'."
      }
    ],
    "functionName": "solve",
    "returnType": "char[][]",
    "parameters": [
      {
        "name": "board",
        "type": "char[][]"
      }
    ],
    "testCases": [
      {
        "input": [
          [
            [
              "X",
              "X",
              "X",
              "X"
            ],
            [
              "X",
              "O",
              "O",
              "X"
            ],
            [
              "X",
              "X",
              "O",
              "X"
            ],
            [
              "X",
              "O",
              "X",
              "X"
            ]
          ]
        ],
        "expectedOutput": [
          [
            "X",
            "X",
            "X",
            "X"
          ],
          [
            "X",
            "X",
            "X",
            "X"
          ],
          [
            "X",
            "X",
            "X",
            "X"
          ],
          [
            "X",
            "O",
            "X",
            "X"
          ]
        ]
      },
      {
        "input": [
          [
            [
              "X"
            ]
          ]
        ],
        "expectedOutput": [
          [
            "X"
          ]
        ]
      },
      {
        "input": [
          [
            [
              "O"
            ]
          ]
        ],
        "expectedOutput": [
          [
            "O"
          ]
        ]
      },
      {
        "input": [
          [
            [
              "O",
              "O"
            ],
            [
              "O",
              "O"
            ]
          ]
        ],
        "expectedOutput": [
          [
            "O",
            "O"
          ],
          [
            "O",
            "O"
          ]
        ]
      },
      {
        "input": [
          [
            [
              "X",
              "X"
            ],
            [
              "X",
              "X"
            ]
          ]
        ],
        "expectedOutput": [
          [
            "X",
            "X"
          ],
          [
            "X",
            "X"
          ]
        ]
      },
      {
        "input": [
          [
            [
              "X",
              "O",
              "X"
            ],
            [
              "X",
              "O",
              "X"
            ],
            [
              "X",
              "X",
              "X"
            ]
          ]
        ],
        "expectedOutput": [
          [
            "X",
            "O",
            "X"
          ],
          [
            "X",
            "O",
            "X"
          ],
          [
            "X",
            "X",
            "X"
          ]
        ]
      },
      {
        "input": [
          [
            [
              "X",
              "X",
              "X"
            ],
            [
              "X",
              "O",
              "X"
            ],
            [
              "X",
              "X",
              "X"
            ]
          ]
        ],
        "expectedOutput": [
          [
            "X",
            "X",
            "X"
          ],
          [
            "X",
            "X",
            "X"
          ],
          [
            "X",
            "X",
            "X"
          ]
        ]
      },
      {
        "input": [
          [
            [
              "O",
              "X"
            ],
            [
              "X",
              "O"
            ]
          ]
        ],
        "expectedOutput": [
          [
            "O",
            "X"
          ],
          [
            "X",
            "O"
          ]
        ]
      },
      {
        "input": [
          [
            [
              "X",
              "X",
              "X",
              "X"
            ],
            [
              "X",
              "O",
              "X",
              "X"
            ],
            [
              "X",
              "X",
              "O",
              "X"
            ],
            [
              "X",
              "X",
              "X",
              "X"
            ]
          ]
        ],
        "expectedOutput": [
          [
            "X",
            "X",
            "X",
            "X"
          ],
          [
            "X",
            "X",
            "X",
            "X"
          ],
          [
            "X",
            "X",
            "X",
            "X"
          ],
          [
            "X",
            "X",
            "X",
            "X"
          ]
        ]
      },
      {
        "input": [
          [
            [
              "O",
              "X",
              "X"
            ],
            [
              "X",
              "O",
              "X"
            ],
            [
              "X",
              "X",
              "O"
            ]
          ]
        ],
        "expectedOutput": [
          [
            "O",
            "X",
            "X"
          ],
          [
            "X",
            "X",
            "X"
          ],
          [
            "X",
            "X",
            "O"
          ]
        ]
      }
    ]
  },
  {
    "number": 137,
    "title": "Number of Distinct Islands",
    "topic": "Graphs",
    "difficulty": "Medium",
    "description": "Given a boolean 2D matrix `grid` of size `n x m`. You have to find the number of distinct islands where a group of connected 1s (horizontally or vertically) forms an island. Two islands are considered to be distinct if and only if one cannot be translated (shifted) into the other.",
    "constraints": [
      "1 <= n, m <= 500",
      "grid[i][j] is either 0 or 1."
    ],
    "examples": [
      {
        "input": "grid = [[1,1,0,0,0],[1,1,0,0,0],[0,0,0,1,1],[0,0,0,1,1]]",
        "output": "1",
        "explanation": "Both islands have the exact same 2x2 square shape."
      },
      {
        "input": "grid = [[1,1,0,1,1],[1,0,0,0,0],[0,0,0,0,1],[1,1,0,1,1]]",
        "output": "3",
        "explanation": "3 distinct shapes."
      }
    ],
    "functionName": "countDistinctIslands",
    "returnType": "int",
    "parameters": [
      {
        "name": "grid",
        "type": "int[][]"
      }
    ],
    "testCases": [
      {
        "input": [
          [
            [
              1,
              1,
              0,
              0,
              0
            ],
            [
              1,
              1,
              0,
              0,
              0
            ],
            [
              0,
              0,
              0,
              1,
              1
            ],
            [
              0,
              0,
              0,
              1,
              1
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
              1,
              0,
              1,
              1
            ],
            [
              1,
              0,
              0,
              0,
              0
            ],
            [
              0,
              0,
              0,
              0,
              1
            ],
            [
              1,
              1,
              0,
              1,
              1
            ]
          ]
        ],
        "expectedOutput": 3
      },
      {
        "input": [
          [
            [
              1
            ]
          ]
        ],
        "expectedOutput": 1
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
              1,
              1
            ],
            [
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
              1,
              0
            ],
            [
              0,
              1
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
              1,
              0
            ],
            [
              0,
              1,
              1
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
              0,
              1
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
              1,
              1,
              1
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
              1,
              1
            ],
            [
              0,
              0
            ],
            [
              1,
              1
            ]
          ]
        ],
        "expectedOutput": 1
      }
    ]
  },
  {
    "number": 138,
    "title": "Detect a Cycle in an Undirected Graph",
    "topic": "Graphs",
    "difficulty": "Medium",
    "description": "Given an undirected graph with `V` vertices and `edges`, determine if the graph contains any cycle.",
    "constraints": [
      "1 <= V <= 10^5",
      "0 <= E <= 10^5"
    ],
    "examples": [
      {
        "input": "V = 5, edges = [[0,1],[1,2],[2,3],[3,4],[4,1]]",
        "output": "true",
        "explanation": "Cycle 1-2-3-4-1 exists."
      },
      {
        "input": "V = 3, edges = [[0,1],[1,2]]",
        "output": "false",
        "explanation": "No cycle in path."
      }
    ],
    "functionName": "isCycleUndirected",
    "returnType": "boolean",
    "parameters": [
      {
        "name": "V",
        "type": "int"
      },
      {
        "name": "edges",
        "type": "int[][]"
      }
    ],
    "testCases": [
      {
        "input": [
          5,
          [
            [
              0,
              1
            ],
            [
              1,
              2
            ],
            [
              2,
              3
            ],
            [
              3,
              4
            ],
            [
              4,
              1
            ]
          ]
        ],
        "expectedOutput": true
      },
      {
        "input": [
          3,
          [
            [
              0,
              1
            ],
            [
              1,
              2
            ]
          ]
        ],
        "expectedOutput": false
      },
      {
        "input": [
          1,
          []
        ],
        "expectedOutput": false
      },
      {
        "input": [
          4,
          [
            [
              0,
              1
            ],
            [
              1,
              2
            ],
            [
              2,
              0
            ]
          ]
        ],
        "expectedOutput": true
      },
      {
        "input": [
          4,
          [
            [
              0,
              1
            ],
            [
              2,
              3
            ]
          ]
        ],
        "expectedOutput": false
      },
      {
        "input": [
          4,
          [
            [
              0,
              1
            ],
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        ],
        "expectedOutput": false
      },
      {
        "input": [
          3,
          [
            [
              0,
              1
            ],
            [
              1,
              2
            ],
            [
              2,
              0
            ]
          ]
        ],
        "expectedOutput": true
      },
      {
        "input": [
          5,
          [
            [
              0,
              1
            ],
            [
              1,
              2
            ],
            [
              3,
              4
            ],
            [
              4,
              3
            ]
          ]
        ],
        "expectedOutput": true
      },
      {
        "input": [
          6,
          [
            [
              0,
              1
            ],
            [
              1,
              2
            ],
            [
              1,
              3
            ],
            [
              2,
              4
            ],
            [
              3,
              4
            ]
          ]
        ],
        "expectedOutput": true
      },
      {
        "input": [
          5,
          [
            [
              0,
              1
            ],
            [
              2,
              3
            ],
            [
              3,
              4
            ]
          ]
        ],
        "expectedOutput": false
      }
    ]
  },
  {
    "number": 139,
    "title": "Bipartite Graph",
    "topic": "Graphs",
    "difficulty": "Medium",
    "description": "There is an undirected graph with `n` nodes, where each node is numbered between 0 and `n - 1`. Return `true` if and only if it is bipartite (can be 2-colored such that no two adjacent nodes have the same color).",
    "constraints": [
      "graph.length == n",
      "1 <= n <= 100",
      "0 <= graph[u].length < n",
      "0 <= graph[u][i] <= n - 1"
    ],
    "examples": [
      {
        "input": "graph = [[1,2,3],[0,2],[0,1,3],[0,2]]",
        "output": "false",
        "explanation": "Nodes cannot be 2-colored."
      },
      {
        "input": "graph = [[1,3],[0,2],[1,3],[0,2]]",
        "output": "true",
        "explanation": "Square graph is bipartite."
      }
    ],
    "functionName": "isBipartite",
    "returnType": "boolean",
    "parameters": [
      {
        "name": "graph",
        "type": "int[][]"
      }
    ],
    "testCases": [
      {
        "input": [
          [
            [
              1,
              2,
              3
            ],
            [
              0,
              2
            ],
            [
              0,
              1,
              3
            ],
            [
              0,
              2
            ]
          ]
        ],
        "expectedOutput": false
      },
      {
        "input": [
          [
            [
              1,
              3
            ],
            [
              0,
              2
            ],
            [
              1,
              3
            ],
            [
              0,
              2
            ]
          ]
        ],
        "expectedOutput": true
      },
      {
        "input": [
          [
            []
          ]
        ],
        "expectedOutput": true
      },
      {
        "input": [
          [
            [
              1
            ],
            [
              0
            ]
          ]
        ],
        "expectedOutput": true
      },
      {
        "input": [
          [
            [
              1,
              2
            ],
            [
              0,
              2
            ],
            [
              0,
              1
            ]
          ]
        ],
        "expectedOutput": false
      },
      {
        "input": [
          [
            [
              4
            ],
            [],
            [
              4
            ],
            [
              4
            ],
            [
              0,
              2,
              3
            ]
          ]
        ],
        "expectedOutput": true
      },
      {
        "input": [
          [
            [
              1
            ],
            [
              0,
              2
            ],
            [
              1
            ]
          ]
        ],
        "expectedOutput": true
      },
      {
        "input": [
          [
            [
              1,
              2,
              3
            ],
            [
              0
            ],
            [
              0
            ],
            [
              0
            ]
          ]
        ],
        "expectedOutput": true
      },
      {
        "input": [
          [
            [
              1,
              4
            ],
            [
              0,
              2
            ],
            [
              1,
              3
            ],
            [
              2,
              4
            ],
            [
              3,
              0
            ]
          ]
        ],
        "expectedOutput": false
      },
      {
        "input": [
          [
            [
              1,
              5
            ],
            [
              0,
              2
            ],
            [
              1,
              3
            ],
            [
              2,
              4
            ],
            [
              3,
              5
            ],
            [
              4,
              0
            ]
          ]
        ],
        "expectedOutput": true
      }
    ]
  },
  {
    "number": 140,
    "title": "Clone Graph",
    "topic": "Graphs",
    "difficulty": "Medium",
    "description": "Given a reference of a node in a connected undirected graph, return a deep copy (clone) of the graph. Each node in the graph contains a value (`val`) and a list of its neighbors (`neighbors`).",
    "constraints": [
      "The number of nodes in the graph is in the range [0, 100].",
      "1 <= Node.val <= 100",
      "Node.val is unique for each node.",
      "There are no repeated edges and no self-loops in the graph."
    ],
    "examples": [
      {
        "input": "adjList = [[2,4],[1,3],[2,4],[1,3]]",
        "output": "[[2,4],[1,3],[2,4],[1,3]]",
        "explanation": "Deep copy clone of graph."
      }
    ],
    "functionName": "cloneGraph",
    "returnType": "Node",
    "parameters": [
      {
        "name": "node",
        "type": "Node"
      }
    ],
    "testCases": [
      {
        "input": [
          [
            [
              2,
              4
            ],
            [
              1,
              3
            ],
            [
              2,
              4
            ],
            [
              1,
              3
            ]
          ]
        ],
        "expectedOutput": [
          [
            2,
            4
          ],
          [
            1,
            3
          ],
          [
            2,
            4
          ],
          [
            1,
            3
          ]
        ]
      },
      {
        "input": [
          [
            []
          ]
        ],
        "expectedOutput": [
          []
        ]
      },
      {
        "input": [
          []
        ],
        "expectedOutput": []
      },
      {
        "input": [
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
          [
            2
          ],
          [
            1
          ]
        ]
      },
      {
        "input": [
          [
            [
              2,
              3
            ],
            [
              1,
              3
            ],
            [
              1,
              2
            ]
          ]
        ],
        "expectedOutput": [
          [
            2,
            3
          ],
          [
            1,
            3
          ],
          [
            1,
            2
          ]
        ]
      },
      {
        "input": [
          [
            [
              2
            ],
            [
              1,
              3
            ],
            [
              2
            ]
          ]
        ],
        "expectedOutput": [
          [
            2
          ],
          [
            1,
            3
          ],
          [
            2
          ]
        ]
      },
      {
        "input": [
          [
            [
              2,
              3,
              4
            ],
            [
              1
            ],
            [
              1
            ],
            [
              1
            ]
          ]
        ],
        "expectedOutput": [
          [
            2,
            3,
            4
          ],
          [
            1
          ],
          [
            1
          ],
          [
            1
          ]
        ]
      },
      {
        "input": [
          [
            [
              2,
              5
            ],
            [
              1,
              3
            ],
            [
              2,
              4
            ],
            [
              3,
              5
            ],
            [
              4,
              1
            ]
          ]
        ],
        "expectedOutput": [
          [
            2,
            5
          ],
          [
            1,
            3
          ],
          [
            2,
            4
          ],
          [
            3,
            5
          ],
          [
            4,
            1
          ]
        ]
      },
      {
        "input": [
          [
            [
              2
            ],
            [
              1,
              3,
              4
            ],
            [
              2
            ],
            [
              2
            ]
          ]
        ],
        "expectedOutput": [
          [
            2
          ],
          [
            1,
            3,
            4
          ],
          [
            2
          ],
          [
            2
          ]
        ]
      },
      {
        "input": [
          [
            [
              2,
              4
            ],
            [
              1,
              3
            ],
            [
              2,
              4
            ],
            [
              1,
              3
            ]
          ]
        ],
        "expectedOutput": [
          [
            2,
            4
          ],
          [
            1,
            3
          ],
          [
            2,
            4
          ],
          [
            1,
            3
          ]
        ]
      }
    ]
  },
  {
    "number": 141,
    "title": "Detect a Cycle in a Directed Graph",
    "topic": "Graphs",
    "difficulty": "Medium",
    "description": "Given a directed graph with `V` vertices and `edges`, determine whether it contains a cycle.",
    "constraints": [
      "1 <= V <= 10^5",
      "0 <= E <= 10^5"
    ],
    "examples": [
      {
        "input": "V = 4, edges = [[0,1],[1,2],[2,3],[3,0]]",
        "output": "true",
        "explanation": "Cycle 0->1->2->3->0 exists."
      },
      {
        "input": "V = 3, edges = [[0,1],[1,2]]",
        "output": "false",
        "explanation": "No directed cycle."
      }
    ],
    "functionName": "isCyclicDirected",
    "returnType": "boolean",
    "parameters": [
      {
        "name": "V",
        "type": "int"
      },
      {
        "name": "edges",
        "type": "int[][]"
      }
    ],
    "testCases": [
      {
        "input": [
          4,
          [
            [
              0,
              1
            ],
            [
              1,
              2
            ],
            [
              2,
              3
            ],
            [
              3,
              0
            ]
          ]
        ],
        "expectedOutput": true
      },
      {
        "input": [
          3,
          [
            [
              0,
              1
            ],
            [
              1,
              2
            ]
          ]
        ],
        "expectedOutput": false
      },
      {
        "input": [
          1,
          []
        ],
        "expectedOutput": false
      },
      {
        "input": [
          2,
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
        "expectedOutput": true
      },
      {
        "input": [
          3,
          [
            [
              0,
              1
            ],
            [
              1,
              2
            ],
            [
              0,
              2
            ]
          ]
        ],
        "expectedOutput": false
      },
      {
        "input": [
          4,
          [
            [
              0,
              1
            ],
            [
              0,
              2
            ],
            [
              1,
              2
            ],
            [
              2,
              0
            ],
            [
              2,
              3
            ],
            [
              3,
              3
            ]
          ]
        ],
        "expectedOutput": true
      },
      {
        "input": [
          4,
          [
            [
              0,
              1
            ],
            [
              2,
              3
            ]
          ]
        ],
        "expectedOutput": false
      },
      {
        "input": [
          5,
          [
            [
              0,
              1
            ],
            [
              1,
              2
            ],
            [
              2,
              3
            ],
            [
              3,
              4
            ]
          ]
        ],
        "expectedOutput": false
      },
      {
        "input": [
          5,
          [
            [
              0,
              1
            ],
            [
              1,
              2
            ],
            [
              2,
              3
            ],
            [
              3,
              4
            ],
            [
              4,
              1
            ]
          ]
        ],
        "expectedOutput": true
      },
      {
        "input": [
          3,
          [
            [
              0,
              1
            ],
            [
              2,
              1
            ]
          ]
        ],
        "expectedOutput": false
      }
    ]
  },
  {
    "number": 142,
    "title": "Topological Sort / Kahn's Algorithm",
    "topic": "Graphs",
    "difficulty": "Medium",
    "description": "Given a Directed Acyclic Graph (DAG) with `V` vertices and `adj`, find a Topological Sort of the graph using Kahn's algorithm (BFS) or DFS.",
    "constraints": [
      "2 <= V <= 10^4",
      "1 <= E <= (V*(V-1))/2"
    ],
    "examples": [
      {
        "input": "V = 6, adj = [[],[0],[0],[1,2],[2,0],[4,5]]",
        "output": "[5,4,2,3,1,0]",
        "explanation": "Valid topological order."
      }
    ],
    "functionName": "topoSort",
    "returnType": "int[]",
    "parameters": [
      {
        "name": "V",
        "type": "int"
      },
      {
        "name": "adj",
        "type": "int[][]"
      }
    ],
    "testCases": [
      {
        "input": [
          6,
          [
            [],
            [
              0
            ],
            [
              0
            ],
            [
              1,
              2
            ],
            [
              2,
              0
            ],
            [
              4,
              5
            ]
          ]
        ],
        "expectedOutput": [
          5,
          4,
          3,
          2,
          1,
          0
        ]
      },
      {
        "input": [
          4,
          [
            [],
            [
              0
            ],
            [
              0
            ],
            [
              0
            ]
          ]
        ],
        "expectedOutput": [
          3,
          2,
          1,
          0
        ]
      },
      {
        "input": [
          2,
          [
            [],
            [
              0
            ]
          ]
        ],
        "expectedOutput": [
          1,
          0
        ]
      },
      {
        "input": [
          3,
          [
            [],
            [
              0
            ],
            [
              1
            ]
          ]
        ],
        "expectedOutput": [
          2,
          1,
          0
        ]
      },
      {
        "input": [
          4,
          [
            [
              1
            ],
            [
              2
            ],
            [
              3
            ],
            []
          ]
        ],
        "expectedOutput": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "input": [
          5,
          [
            [
              1
            ],
            [
              2
            ],
            [
              3
            ],
            [
              4
            ],
            []
          ]
        ],
        "expectedOutput": [
          0,
          1,
          2,
          3,
          4
        ]
      },
      {
        "input": [
          3,
          [
            [
              1,
              2
            ],
            [
              2
            ],
            []
          ]
        ],
        "expectedOutput": [
          0,
          1,
          2
        ]
      },
      {
        "input": [
          4,
          [
            [
              1,
              2
            ],
            [
              3
            ],
            [
              3
            ],
            []
          ]
        ],
        "expectedOutput": [
          0,
          2,
          1,
          3
        ]
      },
      {
        "input": [
          2,
          [
            [
              1
            ],
            []
          ]
        ],
        "expectedOutput": [
          0,
          1
        ]
      },
      {
        "input": [
          4,
          [
            [],
            [],
            [],
            []
          ]
        ],
        "expectedOutput": [
          3,
          2,
          1,
          0
        ]
      }
    ]
  },
  {
    "number": 143,
    "title": "Course Schedule II",
    "topic": "Graphs",
    "difficulty": "Medium",
    "description": "There are a total of `numCourses` courses you have to take, labeled from 0 to `numCourses - 1`. You are given an array `prerequisites` where `prerequisites[i] = [a_i, b_i]` indicates that you must take course `b_i` first if you want to take course `a_i`. Return the ordering of courses you should take to finish all courses.",
    "constraints": [
      "1 <= numCourses <= 2000",
      "0 <= prerequisites.length <= numCourses * (numCourses - 1)",
      "prerequisites[i].length == 2",
      "0 <= a_i, b_i < numCourses",
      "a_i != b_i"
    ],
    "examples": [
      {
        "input": "numCourses = 2, prerequisites = [[1,0]]",
        "output": "[0,1]",
        "explanation": "Take course 0 then course 1."
      },
      {
        "input": "numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]",
        "output": "[0,2,1,3]",
        "explanation": "Valid course completion order."
      }
    ],
    "functionName": "findOrder",
    "returnType": "int[]",
    "parameters": [
      {
        "name": "numCourses",
        "type": "int"
      },
      {
        "name": "prerequisites",
        "type": "int[][]"
      }
    ],
    "testCases": [
      {
        "input": [
          2,
          [
            [
              1,
              0
            ]
          ]
        ],
        "expectedOutput": [
          0,
          1
        ]
      },
      {
        "input": [
          4,
          [
            [
              1,
              0
            ],
            [
              2,
              0
            ],
            [
              3,
              1
            ],
            [
              3,
              2
            ]
          ]
        ],
        "expectedOutput": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "input": [
          1,
          []
        ],
        "expectedOutput": [
          0
        ]
      },
      {
        "input": [
          2,
          [
            [
              1,
              0
            ],
            [
              0,
              1
            ]
          ]
        ],
        "expectedOutput": []
      },
      {
        "input": [
          3,
          [
            [
              1,
              0
            ],
            [
              2,
              1
            ]
          ]
        ],
        "expectedOutput": [
          0,
          1,
          2
        ]
      },
      {
        "input": [
          3,
          [
            [
              0,
              1
            ],
            [
              0,
              2
            ],
            [
              1,
              2
            ]
          ]
        ],
        "expectedOutput": [
          2,
          1,
          0
        ]
      },
      {
        "input": [
          2,
          []
        ],
        "expectedOutput": [
          0,
          1
        ]
      },
      {
        "input": [
          3,
          [
            [
              1,
              0
            ],
            [
              2,
              0
            ]
          ]
        ],
        "expectedOutput": [
          0,
          1,
          2
        ]
      },
      {
        "input": [
          4,
          [
            [
              3,
              0
            ],
            [
              0,
              1
            ]
          ]
        ],
        "expectedOutput": [
          1,
          2,
          0,
          3
        ]
      },
      {
        "input": [
          3,
          [
            [
              0,
              1
            ],
            [
              1,
              2
            ],
            [
              2,
              0
            ]
          ]
        ],
        "expectedOutput": []
      }
    ]
  },
  {
    "number": 144,
    "title": "Alien Dictionary",
    "topic": "Graphs",
    "difficulty": "Hard",
    "description": "Given a sorted dictionary of an alien language having `N` words and `k` starting alphabets of standard dictionary, find the order of characters in the alien language.",
    "constraints": [
      "1 <= N <= 10^4",
      "1 <= k <= 26",
      "1 <= words[i].length <= 50"
    ],
    "examples": [
      {
        "input": "words = ['baa','abcd','abca','cab','cad'], k = 4",
        "output": "'bdac'",
        "explanation": "Order of alien characters."
      }
    ],
    "functionName": "findOrderAlien",
    "returnType": "string",
    "parameters": [
      {
        "name": "words",
        "type": "string[]"
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
            "baa",
            "abcd",
            "abca",
            "cab",
            "cad"
          ],
          4
        ],
        "expectedOutput": "bdac"
      },
      {
        "input": [
          [
            "caa",
            "aaa",
            "aab"
          ],
          3
        ],
        "expectedOutput": "cab"
      },
      {
        "input": [
          [
            "a",
            "b",
            "c"
          ],
          3
        ],
        "expectedOutput": "abc"
      },
      {
        "input": [
          [
            "z",
            "x"
          ],
          2
        ],
        "expectedOutput": "zx"
      },
      {
        "input": [
          [
            "wrt",
            "wrf",
            "er",
            "ett",
            "rftt"
          ],
          5
        ],
        "expectedOutput": "wertf"
      },
      {
        "input": [
          [
            "a",
            "ba",
            "bc",
            "b"
          ],
          3
        ],
        "expectedOutput": "abc"
      },
      {
        "input": [
          [
            "ab",
            "cd"
          ],
          4
        ],
        "expectedOutput": "abcd"
      },
      {
        "input": [
          [
            "x",
            "y",
            "z"
          ],
          3
        ],
        "expectedOutput": "xyz"
      },
      {
        "input": [
          [
            "d",
            "c",
            "b",
            "a"
          ],
          4
        ],
        "expectedOutput": "dcba"
      },
      {
        "input": [
          [
            "ab",
            "ac",
            "b"
          ],
          3
        ],
        "expectedOutput": "abc"
      }
    ]
  },
  {
    "number": 145,
    "title": "Kosaraju's Algorithm",
    "topic": "Graphs",
    "difficulty": "Hard",
    "description": "Given a Directed Graph with `V` vertices and `edges`, find the number of strongly connected components (SCCs) in the graph using Kosaraju's Algorithm.",
    "constraints": [
      "1 <= V <= 5000",
      "0 <= E <= (V*(V-1))"
    ],
    "examples": [
      {
        "input": "V = 5, edges = [[0,2],[0,3],[1,0],[2,1],[3,4]]",
        "output": "3",
        "explanation": "The 3 SCCs are {0,1,2}, {3}, {4}."
      }
    ],
    "functionName": "kosaraju",
    "returnType": "int",
    "parameters": [
      {
        "name": "V",
        "type": "int"
      },
      {
        "name": "edges",
        "type": "int[][]"
      }
    ],
    "testCases": [
      {
        "input": [
          5,
          [
            [
              0,
              2
            ],
            [
              0,
              3
            ],
            [
              1,
              0
            ],
            [
              2,
              1
            ],
            [
              3,
              4
            ]
          ]
        ],
        "expectedOutput": 3
      },
      {
        "input": [
          4,
          [
            [
              0,
              1
            ],
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        ],
        "expectedOutput": 4
      },
      {
        "input": [
          3,
          [
            [
              0,
              1
            ],
            [
              1,
              2
            ],
            [
              2,
              0
            ]
          ]
        ],
        "expectedOutput": 1
      },
      {
        "input": [
          1,
          []
        ],
        "expectedOutput": 1
      },
      {
        "input": [
          2,
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
        "expectedOutput": 1
      },
      {
        "input": [
          4,
          [
            [
              0,
              1
            ],
            [
              1,
              2
            ],
            [
              2,
              0
            ],
            [
              2,
              3
            ]
          ]
        ],
        "expectedOutput": 2
      },
      {
        "input": [
          4,
          [
            [
              0,
              1
            ],
            [
              1,
              0
            ],
            [
              2,
              3
            ],
            [
              3,
              2
            ]
          ]
        ],
        "expectedOutput": 2
      },
      {
        "input": [
          5,
          [
            [
              0,
              1
            ],
            [
              1,
              2
            ],
            [
              2,
              0
            ],
            [
              1,
              3
            ],
            [
              3,
              4
            ],
            [
              4,
              3
            ]
          ]
        ],
        "expectedOutput": 2
      },
      {
        "input": [
          3,
          [
            [
              0,
              1
            ],
            [
              1,
              0
            ],
            [
              2,
              0
            ]
          ]
        ],
        "expectedOutput": 2
      },
      {
        "input": [
          6,
          [
            [
              0,
              1
            ],
            [
              1,
              2
            ],
            [
              2,
              3
            ],
            [
              3,
              4
            ],
            [
              4,
              5
            ]
          ]
        ],
        "expectedOutput": 6
      }
    ]
  },
  {
    "number": 146,
    "title": "Bridges in a Graph",
    "topic": "Graphs",
    "difficulty": "Hard",
    "description": "There are `n` servers numbered from 0 to `n - 1` connected by undirected server-to-server `connections`. A critical connection (bridge) is a connection that, if removed, will make some servers unable to reach some other server. Return all critical connections in the network using Tarjan's bridge-finding algorithm.",
    "constraints": [
      "2 <= n <= 10^5",
      "n - 1 <= connections.length <= 10^5",
      "0 <= a_i, b_i <= n - 1",
      "a_i != b_i",
      "There are no repeated connections."
    ],
    "examples": [
      {
        "input": "n = 4, connections = [[0,1],[1,2],[2,0],[1,3]]",
        "output": "[[1,3]]",
        "explanation": "Removing [1,3] disconnects server 3."
      },
      {
        "input": "n = 2, connections = [[0,1]]",
        "output": "[[0,1]]",
        "explanation": "Only 1 connection is critical."
      }
    ],
    "functionName": "criticalConnections",
    "returnType": "int[][]",
    "parameters": [
      {
        "name": "n",
        "type": "int"
      },
      {
        "name": "connections",
        "type": "int[][]"
      }
    ],
    "testCases": [
      {
        "input": [
          4,
          [
            [
              0,
              1
            ],
            [
              1,
              2
            ],
            [
              2,
              0
            ],
            [
              1,
              3
            ]
          ]
        ],
        "expectedOutput": [
          [
            1,
            3
          ]
        ]
      },
      {
        "input": [
          2,
          [
            [
              0,
              1
            ]
          ]
        ],
        "expectedOutput": [
          [
            0,
            1
          ]
        ]
      },
      {
        "input": [
          3,
          [
            [
              0,
              1
            ],
            [
              1,
              2
            ],
            [
              2,
              0
            ]
          ]
        ],
        "expectedOutput": []
      },
      {
        "input": [
          5,
          [
            [
              0,
              1
            ],
            [
              1,
              2
            ],
            [
              2,
              0
            ],
            [
              1,
              3
            ],
            [
              3,
              4
            ]
          ]
        ],
        "expectedOutput": [
          [
            3,
            4
          ],
          [
            1,
            3
          ]
        ]
      },
      {
        "input": [
          3,
          [
            [
              0,
              1
            ],
            [
              1,
              2
            ]
          ]
        ],
        "expectedOutput": [
          [
            1,
            2
          ],
          [
            0,
            1
          ]
        ]
      },
      {
        "input": [
          6,
          [
            [
              0,
              1
            ],
            [
              1,
              2
            ],
            [
              2,
              0
            ],
            [
              1,
              3
            ],
            [
              3,
              4
            ],
            [
              4,
              5
            ],
            [
              5,
              3
            ]
          ]
        ],
        "expectedOutput": [
          [
            1,
            3
          ]
        ]
      },
      {
        "input": [
          4,
          [
            [
              0,
              1
            ],
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        ],
        "expectedOutput": [
          [
            2,
            3
          ],
          [
            1,
            2
          ],
          [
            0,
            1
          ]
        ]
      },
      {
        "input": [
          4,
          [
            [
              0,
              1
            ],
            [
              1,
              2
            ],
            [
              2,
              0
            ],
            [
              0,
              3
            ]
          ]
        ],
        "expectedOutput": [
          [
            0,
            3
          ]
        ]
      },
      {
        "input": [
          5,
          [
            [
              0,
              1
            ],
            [
              1,
              2
            ],
            [
              2,
              3
            ],
            [
              3,
              0
            ],
            [
              2,
              4
            ]
          ]
        ],
        "expectedOutput": [
          [
            2,
            4
          ]
        ]
      },
      {
        "input": [
          2,
          [
            [
              0,
              1
            ]
          ]
        ],
        "expectedOutput": [
          [
            0,
            1
          ]
        ]
      }
    ]
  },
  {
    "number": 147,
    "title": "Articulation Point in a Graph",
    "topic": "Graphs",
    "difficulty": "Hard",
    "description": "Given an undirected connected graph with `V` vertices and adjacency list `adj`, find all the Articulation Points (cut vertices) in the graph. If no articulation points exist, return `[-1]`.",
    "constraints": [
      "1 <= V <= 10^5",
      "0 <= E <= 10^5"
    ],
    "examples": [
      {
        "input": "V = 5, adj = [[1],[0,4],[3],[2],[1,2]]",
        "output": "[1,4]",
        "explanation": "Removing node 1 or 4 disconnects the graph."
      }
    ],
    "functionName": "articulationPoints",
    "returnType": "int[]",
    "parameters": [
      {
        "name": "V",
        "type": "int"
      },
      {
        "name": "adj",
        "type": "int[][]"
      }
    ],
    "testCases": [
      {
        "input": [
          5,
          [
            [
              1
            ],
            [
              0,
              4
            ],
            [
              3,
              4
            ],
            [
              2
            ],
            [
              1,
              2
            ]
          ]
        ],
        "expectedOutput": [
          1,
          4
        ]
      },
      {
        "input": [
          4,
          [
            [
              1,
              2
            ],
            [
              0,
              2
            ],
            [
              0,
              1,
              3
            ],
            [
              2
            ]
          ]
        ],
        "expectedOutput": [
          2
        ]
      },
      {
        "input": [
          3,
          [
            [
              1,
              2
            ],
            [
              0,
              2
            ],
            [
              0,
              1
            ]
          ]
        ],
        "expectedOutput": [
          -1
        ]
      },
      {
        "input": [
          3,
          [
            [
              1
            ],
            [
              0,
              2
            ],
            [
              1
            ]
          ]
        ],
        "expectedOutput": [
          1
        ]
      },
      {
        "input": [
          2,
          [
            [
              1
            ],
            [
              0
            ]
          ]
        ],
        "expectedOutput": [
          -1
        ]
      },
      {
        "input": [
          4,
          [
            [
              1
            ],
            [
              0,
              2
            ],
            [
              1,
              3
            ],
            [
              2
            ]
          ]
        ],
        "expectedOutput": [
          1,
          2
        ]
      },
      {
        "input": [
          5,
          [
            [
              1,
              2,
              3
            ],
            [
              0
            ],
            [
              0
            ],
            [
              0,
              4
            ],
            [
              3
            ]
          ]
        ],
        "expectedOutput": [
          0,
          3
        ]
      },
      {
        "input": [
          1,
          [
            []
          ]
        ],
        "expectedOutput": [
          -1
        ]
      },
      {
        "input": [
          4,
          [
            [
              1
            ],
            [
              0,
              2,
              3
            ],
            [
              1
            ],
            [
              1
            ]
          ]
        ],
        "expectedOutput": [
          1
        ]
      },
      {
        "input": [
          5,
          [
            [
              1,
              4
            ],
            [
              0,
              2
            ],
            [
              1,
              3
            ],
            [
              2,
              4
            ],
            [
              0,
              3
            ]
          ]
        ],
        "expectedOutput": [
          -1
        ]
      }
    ]
  },
  {
    "number": 148,
    "title": "Shortest Path in an Undirected Graph With Unit Weights",
    "topic": "Graphs",
    "difficulty": "Medium",
    "description": "You are given an Undirected Graph having unit weight of the edges, having `n` nodes and `m` edges. Find the shortest path from a given source vertex `src` to all other vertices. If a vertex is unreachable, return -1 for it.",
    "constraints": [
      "1 <= n <= 10^5",
      "0 <= m <= 10^5",
      "0 <= src < n"
    ],
    "examples": [
      {
        "input": "edges = [[0,1],[0,3],[3,4],[4,5],[5,6],[1,2],[2,6],[6,7],[7,8],[6,8]], n = 9, m = 10, src = 0",
        "output": "[0,1,2,1,2,3,3,4,4]",
        "explanation": "Shortest distance from vertex 0 to all vertices."
      }
    ],
    "functionName": "shortestPathUndirected",
    "returnType": "int[]",
    "parameters": [
      {
        "name": "edges",
        "type": "int[][]"
      },
      {
        "name": "n",
        "type": "int"
      },
      {
        "name": "m",
        "type": "int"
      },
      {
        "name": "src",
        "type": "int"
      }
    ],
    "testCases": [
      {
        "input": [
          [
            [
              0,
              1
            ],
            [
              0,
              3
            ],
            [
              3,
              4
            ],
            [
              4,
              5
            ],
            [
              5,
              6
            ],
            [
              1,
              2
            ],
            [
              2,
              6
            ],
            [
              6,
              7
            ],
            [
              7,
              8
            ],
            [
              6,
              8
            ]
          ],
          9,
          10,
          0
        ],
        "expectedOutput": [
          0,
          1,
          2,
          1,
          2,
          3,
          3,
          4,
          4
        ]
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
              2
            ]
          ],
          3,
          2,
          0
        ],
        "expectedOutput": [
          0,
          1,
          2
        ]
      },
      {
        "input": [
          [],
          1,
          0,
          0
        ],
        "expectedOutput": [
          0
        ]
      },
      {
        "input": [
          [
            [
              0,
              1
            ]
          ],
          3,
          1,
          0
        ],
        "expectedOutput": [
          0,
          1,
          -1
        ]
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
              2
            ],
            [
              2,
              0
            ]
          ],
          3,
          3,
          0
        ],
        "expectedOutput": [
          0,
          1,
          1
        ]
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
              2
            ],
            [
              1,
              3
            ],
            [
              2,
              3
            ]
          ],
          4,
          4,
          0
        ],
        "expectedOutput": [
          0,
          1,
          1,
          2
        ]
      },
      {
        "input": [
          [
            [
              1,
              2
            ]
          ],
          3,
          1,
          0
        ],
        "expectedOutput": [
          0,
          -1,
          -1
        ]
      },
      {
        "input": [
          [
            [
              0,
              1
            ],
            [
              2,
              3
            ]
          ],
          4,
          2,
          0
        ],
        "expectedOutput": [
          0,
          1,
          -1,
          -1
        ]
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
              2
            ],
            [
              2,
              3
            ],
            [
              3,
              4
            ]
          ],
          5,
          4,
          2
        ],
        "expectedOutput": [
          2,
          1,
          0,
          1,
          2
        ]
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
              2
            ],
            [
              0,
              2
            ]
          ],
          3,
          3,
          1
        ],
        "expectedOutput": [
          1,
          0,
          1
        ]
      }
    ]
  },
  {
    "number": 149,
    "title": "Shortest Path in a DAG",
    "topic": "Graphs",
    "difficulty": "Medium",
    "description": "Given a Directed Acyclic Graph (DAG) with `N` vertices and `M` weighted edges, find the shortest path from vertex 0 to all other vertices. If a vertex is unreachable, return -1 for it.",
    "constraints": [
      "1 <= N <= 10^4",
      "0 <= M <= 10^4",
      "0 <= weight <= 10^5"
    ],
    "examples": [
      {
        "input": "N = 6, M = 7, edges = [[0,1,2],[0,4,1],[4,5,4],[4,2,2],[1,2,3],[2,3,6],[5,3,1]]",
        "output": "[0,2,3,6,1,5]",
        "explanation": "Shortest distances from source 0."
      }
    ],
    "functionName": "shortestPathDAG",
    "returnType": "int[]",
    "parameters": [
      {
        "name": "N",
        "type": "int"
      },
      {
        "name": "M",
        "type": "int"
      },
      {
        "name": "edges",
        "type": "int[][]"
      }
    ],
    "testCases": [
      {
        "input": [
          6,
          7,
          [
            [
              0,
              1,
              2
            ],
            [
              0,
              4,
              1
            ],
            [
              4,
              5,
              4
            ],
            [
              4,
              2,
              2
            ],
            [
              1,
              2,
              3
            ],
            [
              2,
              3,
              6
            ],
            [
              5,
              3,
              1
            ]
          ]
        ],
        "expectedOutput": [
          0,
          2,
          3,
          6,
          1,
          5
        ]
      },
      {
        "input": [
          4,
          2,
          [
            [
              0,
              1,
              2
            ],
            [
              0,
              2,
              1
            ]
          ]
        ],
        "expectedOutput": [
          0,
          2,
          1,
          -1
        ]
      },
      {
        "input": [
          1,
          0,
          []
        ],
        "expectedOutput": [
          0
        ]
      },
      {
        "input": [
          3,
          2,
          [
            [
              0,
              1,
              3
            ],
            [
              1,
              2,
              4
            ]
          ]
        ],
        "expectedOutput": [
          0,
          3,
          7
        ]
      },
      {
        "input": [
          3,
          3,
          [
            [
              0,
              1,
              5
            ],
            [
              0,
              2,
              2
            ],
            [
              2,
              1,
              1
            ]
          ]
        ],
        "expectedOutput": [
          0,
          3,
          2
        ]
      },
      {
        "input": [
          4,
          3,
          [
            [
              0,
              1,
              1
            ],
            [
              1,
              2,
              2
            ],
            [
              2,
              3,
              3
            ]
          ]
        ],
        "expectedOutput": [
          0,
          1,
          3,
          6
        ]
      },
      {
        "input": [
          2,
          1,
          [
            [
              0,
              1,
              10
            ]
          ]
        ],
        "expectedOutput": [
          0,
          10
        ]
      },
      {
        "input": [
          3,
          1,
          [
            [
              1,
              2,
              5
            ]
          ]
        ],
        "expectedOutput": [
          0,
          -1,
          -1
        ]
      },
      {
        "input": [
          5,
          4,
          [
            [
              0,
              1,
              2
            ],
            [
              0,
              2,
              4
            ],
            [
              1,
              3,
              1
            ],
            [
              2,
              4,
              3
            ]
          ]
        ],
        "expectedOutput": [
          0,
          2,
          4,
          3,
          7
        ]
      },
      {
        "input": [
          4,
          4,
          [
            [
              0,
              1,
              1
            ],
            [
              0,
              2,
              4
            ],
            [
              1,
              2,
              2
            ],
            [
              2,
              3,
              1
            ]
          ]
        ],
        "expectedOutput": [
          0,
          1,
          3,
          4
        ]
      }
    ]
  },
  {
    "number": 150,
    "title": "Dijkstra's Algorithm",
    "topic": "Graphs",
    "difficulty": "Medium",
    "description": "Given a weighted, undirected and connected graph of `V` vertices and an adjacency list `adj` where `adj[i]` contains pairs `[neighbor, weight]`. Find the shortest distance of all the vertex's from the source vertex `S` using Dijkstra's Algorithm.",
    "constraints": [
      "1 <= V <= 1000",
      "0 <= S < V",
      "0 <= weight <= 10^5"
    ],
    "examples": [
      {
        "input": "V = 3, adj = [[[1,1],[2,6]],[[2,3],[0,1]],[[1,3],[0,6]]], S = 2",
        "output": "[4,3,0]",
        "explanation": "Shortest distance from vertex 2."
      }
    ],
    "functionName": "dijkstra",
    "returnType": "int[]",
    "parameters": [
      {
        "name": "V",
        "type": "int"
      },
      {
        "name": "adj",
        "type": "int[][][]"
      },
      {
        "name": "S",
        "type": "int"
      }
    ],
    "testCases": [
      {
        "input": [
          3,
          [
            [
              [
                1,
                1
              ],
              [
                2,
                6
              ]
            ],
            [
              [
                2,
                3
              ],
              [
                0,
                1
              ]
            ],
            [
              [
                1,
                3
              ],
              [
                0,
                6
              ]
            ]
          ],
          2
        ],
        "expectedOutput": [
          4,
          3,
          0
        ]
      },
      {
        "input": [
          2,
          [
            [
              [
                1,
                9
              ]
            ],
            [
              [
                0,
                9
              ]
            ]
          ],
          0
        ],
        "expectedOutput": [
          0,
          9
        ]
      },
      {
        "input": [
          1,
          [
            []
          ],
          0
        ],
        "expectedOutput": [
          0
        ]
      },
      {
        "input": [
          3,
          [
            [
              [
                1,
                1
              ]
            ],
            [
              [
                0,
                1
              ],
              [
                2,
                2
              ]
            ],
            [
              [
                1,
                2
              ]
            ]
          ],
          0
        ],
        "expectedOutput": [
          0,
          1,
          3
        ]
      },
      {
        "input": [
          4,
          [
            [
              [
                1,
                1
              ],
              [
                2,
                4
              ]
            ],
            [
              [
                0,
                1
              ],
              [
                2,
                2
              ],
              [
                3,
                5
              ]
            ],
            [
              [
                0,
                4
              ],
              [
                1,
                2
              ],
              [
                3,
                1
              ]
            ],
            [
              [
                1,
                5
              ],
              [
                2,
                1
              ]
            ]
          ],
          0
        ],
        "expectedOutput": [
          0,
          1,
          3,
          4
        ]
      },
      {
        "input": [
          3,
          [
            [
              [
                1,
                10
              ]
            ],
            [
              [
                0,
                10
              ],
              [
                2,
                10
              ]
            ],
            [
              [
                1,
                10
              ]
            ]
          ],
          1
        ],
        "expectedOutput": [
          10,
          0,
          10
        ]
      },
      {
        "input": [
          4,
          [
            [
              [
                1,
                5
              ],
              [
                2,
                8
              ]
            ],
            [
              [
                0,
                5
              ],
              [
                3,
                2
              ]
            ],
            [
              [
                0,
                8
              ],
              [
                3,
                6
              ]
            ],
            [
              [
                1,
                2
              ],
              [
                2,
                6
              ]
            ]
          ],
          0
        ],
        "expectedOutput": [
          0,
          5,
          8,
          7
        ]
      },
      {
        "input": [
          2,
          [
            [
              [
                1,
                100
              ]
            ],
            [
              [
                0,
                100
              ]
            ]
          ],
          1
        ],
        "expectedOutput": [
          100,
          0
        ]
      },
      {
        "input": [
          3,
          [
            [
              [
                1,
                2
              ],
              [
                2,
                4
              ]
            ],
            [
              [
                0,
                2
              ],
              [
                2,
                1
              ]
            ],
            [
              [
                0,
                4
              ],
              [
                1,
                1
              ]
            ]
          ],
          0
        ],
        "expectedOutput": [
          0,
          2,
          3
        ]
      },
      {
        "input": [
          4,
          [
            [
              [
                1,
                1
              ]
            ],
            [
              [
                0,
                1
              ],
              [
                2,
                1
              ]
            ],
            [
              [
                1,
                1
              ],
              [
                3,
                1
              ]
            ],
            [
              [
                2,
                1
              ]
            ]
          ],
          0
        ],
        "expectedOutput": [
          0,
          1,
          2,
          3
        ]
      }
    ]
  },
  {
    "number": 151,
    "title": "Path With Minimum Effort",
    "topic": "Graphs",
    "difficulty": "Medium",
    "description": "You are a hiker preparing for an upcoming hike. You are given `heights`, a 2D array of size `rows x columns`, where `heights[row][col]` represents the height of cell `(row, col)`. A route's effort is the maximum absolute difference in heights between two consecutive cells of the route. Return the minimum effort required to travel from the top-left cell to the bottom-right cell.",
    "constraints": [
      "rows == heights.length",
      "columns == heights[i].length",
      "1 <= rows, columns <= 100",
      "1 <= heights[i][j] <= 10^6"
    ],
    "examples": [
      {
        "input": "heights = [[1,2,2],[3,8,2],[5,3,5]]",
        "output": "2",
        "explanation": "Route [1,2,2,2,5] has maximum absolute difference 2."
      },
      {
        "input": "heights = [[1,2,3],[3,8,4],[5,3,5]]",
        "output": "1",
        "explanation": "Route [1,2,3,4,5] has effort 1."
      }
    ],
    "functionName": "minimumEffortPath",
    "returnType": "int",
    "parameters": [
      {
        "name": "heights",
        "type": "int[][]"
      }
    ],
    "testCases": [
      {
        "input": [
          [
            [
              1,
              2,
              2
            ],
            [
              3,
              8,
              2
            ],
            [
              5,
              3,
              5
            ]
          ]
        ],
        "expectedOutput": 2
      },
      {
        "input": [
          [
            [
              1,
              2,
              3
            ],
            [
              3,
              8,
              4
            ],
            [
              5,
              3,
              5
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
              2,
              1,
              1,
              1
            ],
            [
              1,
              2,
              1,
              2,
              1
            ],
            [
              1,
              2,
              1,
              2,
              1
            ],
            [
              1,
              2,
              1,
              2,
              1
            ],
            [
              1,
              1,
              1,
              2,
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
              1,
              10
            ],
            [
              3,
              8
            ]
          ]
        ],
        "expectedOutput": 7
      },
      {
        "input": [
          [
            [
              1,
              3
            ],
            [
              5,
              8
            ]
          ]
        ],
        "expectedOutput": 3
      },
      {
        "input": [
          [
            [
              5,
              5
            ],
            [
              5,
              5
            ]
          ]
        ],
        "expectedOutput": 0
      },
      {
        "input": [
          [
            [
              1,
              100
            ],
            [
              2,
              100
            ],
            [
              3,
              4
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
              5,
              9
            ]
          ]
        ],
        "expectedOutput": 4
      },
      {
        "input": [
          [
            [
              1
            ],
            [
              5
            ],
            [
              9
            ]
          ]
        ],
        "expectedOutput": 4
      }
    ]
  },
  {
    "number": 152,
    "title": "Cheapest Flight Within K Stops",
    "topic": "Graphs",
    "difficulty": "Medium",
    "description": "There are `n` cities connected by some number of flights. You are given an array `flights` where `flights[i] = [from_i, to_i, price_i]`. You are also given three integers `src`, `dst`, and `k`, return the cheapest price from `src` to `dst` with at most `k` stops. If there is no such route, return -1.",
    "constraints": [
      "1 <= n <= 100",
      "0 <= flights.length <= (n * (n - 1) / 2)",
      "flights[i].length == 3",
      "0 <= from_i, to_i < n",
      "from_i != to_i",
      "1 <= price_i <= 10^4",
      "0 <= src, dst, k < n",
      "src != dst"
    ],
    "examples": [
      {
        "input": "n = 4, flights = [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], src = 0, dst = 3, k = 1",
        "output": "700",
        "explanation": "Optimal with at most 1 stop is 0->1->3 (price 700)."
      },
      {
        "input": "n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 1",
        "output": "200",
        "explanation": "0->1->2 has price 200 with 1 stop."
      }
    ],
    "functionName": "findCheapestPrice",
    "returnType": "int",
    "parameters": [
      {
        "name": "n",
        "type": "int"
      },
      {
        "name": "flights",
        "type": "int[][]"
      },
      {
        "name": "src",
        "type": "int"
      },
      {
        "name": "dst",
        "type": "int"
      },
      {
        "name": "k",
        "type": "int"
      }
    ],
    "testCases": [
      {
        "input": [
          4,
          [
            [
              0,
              1,
              100
            ],
            [
              1,
              2,
              100
            ],
            [
              2,
              0,
              100
            ],
            [
              1,
              3,
              600
            ],
            [
              2,
              3,
              200
            ]
          ],
          0,
          3,
          1
        ],
        "expectedOutput": 700
      },
      {
        "input": [
          3,
          [
            [
              0,
              1,
              100
            ],
            [
              1,
              2,
              100
            ],
            [
              0,
              2,
              500
            ]
          ],
          0,
          2,
          1
        ],
        "expectedOutput": 200
      },
      {
        "input": [
          3,
          [
            [
              0,
              1,
              100
            ],
            [
              1,
              2,
              100
            ],
            [
              0,
              2,
              500
            ]
          ],
          0,
          2,
          0
        ],
        "expectedOutput": 500
      },
      {
        "input": [
          2,
          [
            [
              0,
              1,
              50
            ]
          ],
          0,
          1,
          0
        ],
        "expectedOutput": 50
      },
      {
        "input": [
          3,
          [
            [
              0,
              1,
              20
            ]
          ],
          0,
          2,
          1
        ],
        "expectedOutput": -1
      },
      {
        "input": [
          4,
          [
            [
              0,
              1,
              1
            ],
            [
              0,
              2,
              5
            ],
            [
              1,
              2,
              1
            ],
            [
              2,
              3,
              1
            ]
          ],
          0,
          3,
          1
        ],
        "expectedOutput": 6
      },
      {
        "input": [
          4,
          [
            [
              0,
              1,
              1
            ],
            [
              0,
              2,
              5
            ],
            [
              1,
              2,
              1
            ],
            [
              2,
              3,
              1
            ]
          ],
          0,
          3,
          2
        ],
        "expectedOutput": 3
      },
      {
        "input": [
          5,
          [
            [
              0,
              1,
              5
            ],
            [
              1,
              2,
              5
            ],
            [
              0,
              3,
              2
            ],
            [
              3,
              1,
              2
            ],
            [
              1,
              4,
              1
            ],
            [
              4,
              2,
              1
            ]
          ],
          0,
          2,
          2
        ],
        "expectedOutput": 7
      },
      {
        "input": [
          3,
          [
            [
              0,
              1,
              10
            ],
            [
              1,
              2,
              20
            ]
          ],
          0,
          2,
          0
        ],
        "expectedOutput": -1
      },
      {
        "input": [
          4,
          [
            [
              0,
              1,
              2
            ],
            [
              1,
              2,
              3
            ],
            [
              2,
              3,
              4
            ],
            [
              0,
              3,
              100
            ]
          ],
          0,
          3,
          1
        ],
        "expectedOutput": 100
      }
    ]
  },
  {
    "number": 153,
    "title": "Bellman-Ford Algorithm",
    "topic": "Graphs",
    "difficulty": "Medium",
    "description": "Given a weighted and directed graph of `V` vertices and `edges`, find the shortest distance of all the vertices from the source vertex `src`. If the graph contains a negative edge cycle, return `[-1]`.",
    "constraints": [
      "1 <= V <= 500",
      "0 <= E <= V*(V-1)",
      "-1000 <= weight <= 1000",
      "0 <= src < V"
    ],
    "examples": [
      {
        "input": "V = 2, edges = [[0,1,9]], src = 0",
        "output": "[0, 9]",
        "explanation": "Shortest distance from 0 to 1 is 9."
      }
    ],
    "functionName": "bellmanFord",
    "returnType": "int[]",
    "parameters": [
      {
        "name": "V",
        "type": "int"
      },
      {
        "name": "edges",
        "type": "int[][]"
      },
      {
        "name": "src",
        "type": "int"
      }
    ],
    "testCases": [
      {
        "input": [
          2,
          [
            [
              0,
              1,
              9
            ]
          ],
          0
        ],
        "expectedOutput": [
          0,
          9
        ]
      },
      {
        "input": [
          3,
          [
            [
              0,
              1,
              5
            ],
            [
              1,
              0,
              3
            ],
            [
              1,
              2,
              -1
            ],
            [
              2,
              0,
              1
            ]
          ],
          2
        ],
        "expectedOutput": [
          1,
          6,
          0
        ]
      },
      {
        "input": [
          3,
          [
            [
              0,
              1,
              1
            ],
            [
              1,
              2,
              -2
            ],
            [
              2,
              0,
              -1
            ]
          ],
          0
        ],
        "expectedOutput": [
          -1
        ]
      },
      {
        "input": [
          1,
          [],
          0
        ],
        "expectedOutput": [
          0
        ]
      },
      {
        "input": [
          3,
          [
            [
              0,
              1,
              2
            ],
            [
              1,
              2,
              3
            ]
          ],
          0
        ],
        "expectedOutput": [
          0,
          2,
          5
        ]
      },
      {
        "input": [
          4,
          [
            [
              0,
              1,
              1
            ],
            [
              1,
              2,
              -1
            ],
            [
              2,
              3,
              -1
            ],
            [
              3,
              0,
              -1
            ]
          ],
          0
        ],
        "expectedOutput": [
          -1
        ]
      },
      {
        "input": [
          3,
          [
            [
              0,
              1,
              10
            ],
            [
              1,
              2,
              20
            ]
          ],
          0
        ],
        "expectedOutput": [
          0,
          10,
          30
        ]
      },
      {
        "input": [
          4,
          [
            [
              0,
              1,
              4
            ],
            [
              0,
              2,
              5
            ],
            [
              1,
              3,
              6
            ],
            [
              2,
              3,
              2
            ]
          ],
          0
        ],
        "expectedOutput": [
          0,
          4,
          5,
          7
        ]
      },
      {
        "input": [
          2,
          [
            [
              0,
              1,
              -5
            ]
          ],
          0
        ],
        "expectedOutput": [
          0,
          -5
        ]
      },
      {
        "input": [
          3,
          [
            [
              0,
              1,
              1
            ],
            [
              1,
              2,
              2
            ],
            [
              0,
              2,
              5
            ]
          ],
          0
        ],
        "expectedOutput": [
          0,
          1,
          3
        ]
      }
    ]
  },
  {
    "number": 154,
    "title": "Floyd-Warshall Algorithm",
    "topic": "Graphs",
    "difficulty": "Medium",
    "description": "The problem is to find the shortest distances between every pair of vertices in a given edge-weighted directed graph. The graph is represented as an adjacency matrix of size `n x n`. If there is no path between two vertices, `matrix[i][j] = -1`. Modify the matrix in-place to contain shortest path distances.",
    "constraints": [
      "1 <= n <= 100",
      "-1 <= matrix[i][j] <= 1000"
    ],
    "examples": [
      {
        "input": "matrix = [[0,2,-1,-1],[1,0,3,-1],[-1,-1,0,-1],[3,5,4,0]]",
        "output": "[[0,2,5,-1],[1,0,3,-1],[-1,-1,0,-1],[3,5,4,0]]",
        "explanation": "All-pairs shortest path matrix."
      }
    ],
    "functionName": "floydWarshall",
    "returnType": "int[][]",
    "parameters": [
      {
        "name": "matrix",
        "type": "int[][]"
      }
    ],
    "testCases": [
      {
        "input": [
          [
            [
              0,
              2,
              -1,
              -1
            ],
            [
              1,
              0,
              3,
              -1
            ],
            [
              -1,
              -1,
              0,
              -1
            ],
            [
              3,
              5,
              4,
              0
            ]
          ]
        ],
        "expectedOutput": [
          [
            0,
            2,
            5,
            -1
          ],
          [
            1,
            0,
            3,
            -1
          ],
          [
            -1,
            -1,
            0,
            -1
          ],
          [
            3,
            5,
            4,
            0
          ]
        ]
      },
      {
        "input": [
          [
            [
              0,
              25
            ],
            [
              -1,
              0
            ]
          ]
        ],
        "expectedOutput": [
          [
            0,
            25
          ],
          [
            -1,
            0
          ]
        ]
      },
      {
        "input": [
          [
            [
              0
            ]
          ]
        ],
        "expectedOutput": [
          [
            0
          ]
        ]
      },
      {
        "input": [
          [
            [
              0,
              1,
              43
            ],
            [
              1,
              0,
              6
            ],
            [
              -1,
              -1,
              0
            ]
          ]
        ],
        "expectedOutput": [
          [
            0,
            1,
            7
          ],
          [
            1,
            0,
            6
          ],
          [
            -1,
            -1,
            0
          ]
        ]
      },
      {
        "input": [
          [
            [
              0,
              5
            ],
            [
              5,
              0
            ]
          ]
        ],
        "expectedOutput": [
          [
            0,
            5
          ],
          [
            5,
            0
          ]
        ]
      },
      {
        "input": [
          [
            [
              0,
              3,
              -1
            ],
            [
              2,
              0,
              -1
            ],
            [
              -1,
              1,
              0
            ]
          ]
        ],
        "expectedOutput": [
          [
            0,
            3,
            -1
          ],
          [
            2,
            0,
            -1
          ],
          [
            3,
            1,
            0
          ]
        ]
      },
      {
        "input": [
          [
            [
              0,
              1
            ],
            [
              -1,
              0
            ]
          ]
        ],
        "expectedOutput": [
          [
            0,
            1
          ],
          [
            -1,
            0
          ]
        ]
      },
      {
        "input": [
          [
            [
              0,
              -1
            ],
            [
              -1,
              0
            ]
          ]
        ],
        "expectedOutput": [
          [
            0,
            -1
          ],
          [
            -1,
            0
          ]
        ]
      },
      {
        "input": [
          [
            [
              0,
              4,
              8
            ],
            [
              4,
              0,
              2
            ],
            [
              8,
              2,
              0
            ]
          ]
        ],
        "expectedOutput": [
          [
            0,
            4,
            6
          ],
          [
            4,
            0,
            2
          ],
          [
            6,
            2,
            0
          ]
        ]
      },
      {
        "input": [
          [
            [
              0,
              1,
              2
            ],
            [
              1,
              0,
              1
            ],
            [
              2,
              1,
              0
            ]
          ]
        ],
        "expectedOutput": [
          [
            0,
            1,
            2
          ],
          [
            1,
            0,
            1
          ],
          [
            2,
            1,
            0
          ]
        ]
      }
    ]
  },
  {
    "number": 155,
    "title": "Word Ladder I",
    "topic": "Graphs",
    "difficulty": "Hard",
    "description": "A transformation sequence from word `beginWord` to word `endWord` using a dictionary `wordList` is a sequence of words `beginWord -> s1 -> s2 -> ... -> sk` such that every adjacent pair of words differs by a single letter. Return the number of words in the shortest transformation sequence from `beginWord` to `endWord`, or 0 if no such sequence exists.",
    "constraints": [
      "1 <= beginWord.length <= 10",
      "endWord.length == beginWord.length",
      "1 <= wordList.length <= 5000",
      "wordList[i].length == beginWord.length",
      "beginWord, endWord, and wordList[i] consist of lowercase English letters."
    ],
    "examples": [
      {
        "input": "beginWord = 'hit', endWord = 'cog', wordList = ['hot','dot','dog','lot','log','cog']",
        "output": "5",
        "explanation": "Shortest transformation is hit -> hot -> dot -> dog -> cog (5 words)."
      },
      {
        "input": "beginWord = 'hit', endWord = 'cog', wordList = ['hot','dot','dog','lot','log']",
        "output": "0",
        "explanation": "endWord 'cog' is not in wordList."
      }
    ],
    "functionName": "ladderLength",
    "returnType": "int",
    "parameters": [
      {
        "name": "beginWord",
        "type": "string"
      },
      {
        "name": "endWord",
        "type": "string"
      },
      {
        "name": "wordList",
        "type": "string[]"
      }
    ],
    "testCases": [
      {
        "input": [
          "hit",
          "cog",
          [
            "hot",
            "dot",
            "dog",
            "lot",
            "log",
            "cog"
          ]
        ],
        "expectedOutput": 5
      },
      {
        "input": [
          "hit",
          "cog",
          [
            "hot",
            "dot",
            "dog",
            "lot",
            "log"
          ]
        ],
        "expectedOutput": 0
      },
      {
        "input": [
          "a",
          "c",
          [
            "a",
            "b",
            "c"
          ]
        ],
        "expectedOutput": 2
      },
      {
        "input": [
          "hot",
          "dog",
          [
            "hot",
            "dog"
          ]
        ],
        "expectedOutput": 0
      },
      {
        "input": [
          "hot",
          "dog",
          [
            "hot",
            "dot",
            "dog"
          ]
        ],
        "expectedOutput": 3
      },
      {
        "input": [
          "lead",
          "gold",
          [
            "load",
            "goad",
            "gold"
          ]
        ],
        "expectedOutput": 4
      },
      {
        "input": [
          "cold",
          "warm",
          [
            "cord",
            "card",
            "ward",
            "warm"
          ]
        ],
        "expectedOutput": 5
      },
      {
        "input": [
          "cat",
          "dog",
          [
            "cot",
            "cog",
            "dog"
          ]
        ],
        "expectedOutput": 4
      },
      {
        "input": [
          "red",
          "tax",
          [
            "ted",
            "tex",
            "red",
            "tax",
            "tad",
            "den",
            "rex",
            "pee"
          ]
        ],
        "expectedOutput": 4
      },
      {
        "input": [
          "kiss",
          "tusk",
          [
            "miss",
            "dusk",
            "kiss",
            "musk",
            "tusk",
            "diss",
            "disk",
            "sang",
            "ties",
            "muss"
          ]
        ],
        "expectedOutput": 5
      }
    ]
  },
  {
    "number": 156,
    "title": "Word Ladder II",
    "topic": "Graphs",
    "difficulty": "Hard",
    "description": "Given two words, `beginWord` and `endWord`, and a dictionary `wordList`, return all the shortest transformation sequences from `beginWord` to `endWord`, or an empty list if no such sequence exists.",
    "constraints": [
      "1 <= beginWord.length <= 5",
      "endWord.length == beginWord.length",
      "1 <= wordList.length <= 500",
      "wordList[i].length == beginWord.length",
      "beginWord, endWord, and wordList[i] consist of lowercase English letters."
    ],
    "examples": [
      {
        "input": "beginWord = 'hit', endWord = 'cog', wordList = ['hot','dot','dog','lot','log','cog']",
        "output": "[['hit','hot','dot','dog','cog'],['hit','hot','lot','log','cog']]",
        "explanation": "Both sequences have length 5."
      }
    ],
    "functionName": "findLadders",
    "returnType": "string[][]",
    "parameters": [
      {
        "name": "beginWord",
        "type": "string"
      },
      {
        "name": "endWord",
        "type": "string"
      },
      {
        "name": "wordList",
        "type": "string[]"
      }
    ],
    "testCases": [
      {
        "input": [
          "hit",
          "cog",
          [
            "hot",
            "dot",
            "dog",
            "lot",
            "log",
            "cog"
          ]
        ],
        "expectedOutput": [
          [
            "hit",
            "hot",
            "dot",
            "dog",
            "cog"
          ],
          [
            "hit",
            "hot",
            "lot",
            "log",
            "cog"
          ]
        ]
      },
      {
        "input": [
          "hit",
          "cog",
          [
            "hot",
            "dot",
            "dog",
            "lot",
            "log"
          ]
        ],
        "expectedOutput": []
      },
      {
        "input": [
          "a",
          "c",
          [
            "a",
            "b",
            "c"
          ]
        ],
        "expectedOutput": [
          [
            "a",
            "c"
          ]
        ]
      },
      {
        "input": [
          "hot",
          "dog",
          [
            "hot",
            "dot",
            "dog"
          ]
        ],
        "expectedOutput": [
          [
            "hot",
            "dot",
            "dog"
          ]
        ]
      },
      {
        "input": [
          "lead",
          "gold",
          [
            "load",
            "goad",
            "gold"
          ]
        ],
        "expectedOutput": [
          [
            "lead",
            "load",
            "goad",
            "gold"
          ]
        ]
      },
      {
        "input": [
          "red",
          "tax",
          [
            "ted",
            "tex",
            "red",
            "tax",
            "tad",
            "den",
            "rex",
            "pee"
          ]
        ],
        "expectedOutput": [
          [
            "red",
            "ted",
            "tad",
            "tax"
          ],
          [
            "red",
            "ted",
            "tex",
            "tax"
          ],
          [
            "red",
            "rex",
            "tex",
            "tax"
          ]
        ]
      },
      {
        "input": [
          "cat",
          "dog",
          [
            "cot",
            "cog",
            "dog"
          ]
        ],
        "expectedOutput": [
          [
            "cat",
            "cot",
            "cog",
            "dog"
          ]
        ]
      },
      {
        "input": [
          "cold",
          "cord",
          [
            "cord"
          ]
        ],
        "expectedOutput": [
          [
            "cold",
            "cord"
          ]
        ]
      },
      {
        "input": [
          "ab",
          "cd",
          [
            "cb",
            "cd"
          ]
        ],
        "expectedOutput": [
          [
            "ab",
            "cb",
            "cd"
          ]
        ]
      },
      {
        "input": [
          "pen",
          "pin",
          [
            "pin"
          ]
        ],
        "expectedOutput": [
          [
            "pen",
            "pin"
          ]
        ]
      }
    ]
  },
  {
    "number": 157,
    "title": "Network Delay Time",
    "topic": "Graphs",
    "difficulty": "Medium",
    "description": "You are given a network of `n` nodes, labeled from 1 to `n`. You are also given `times`, a list of travel times as directed edges `times[i] = (u_i, v_i, w_i)`. We will send a signal from a given node `k`. Return the minimum time it takes for all the `n` nodes to receive the signal. If it is impossible for all the `n` nodes to receive the signal, return -1.",
    "constraints": [
      "1 <= k <= n <= 100",
      "1 <= times.length <= 6000",
      "times[i].length == 3",
      "1 <= u_i, v_i <= n",
      "u_i != v_i",
      "0 <= w_i <= 100",
      "All the pairs (u_i, v_i) are unique."
    ],
    "examples": [
      {
        "input": "times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2",
        "output": "2",
        "explanation": "Signal reaches all nodes in 2 time units."
      },
      {
        "input": "times = [[1,2,1]], n = 2, k = 1",
        "output": "1",
        "explanation": "1 time unit."
      },
      {
        "input": "times = [[1,2,1]], n = 2, k = 2",
        "output": "-1",
        "explanation": "Node 1 is unreachable."
      }
    ],
    "functionName": "networkDelayTime",
    "returnType": "int",
    "parameters": [
      {
        "name": "times",
        "type": "int[][]"
      },
      {
        "name": "n",
        "type": "int"
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
            [
              2,
              1,
              1
            ],
            [
              2,
              3,
              1
            ],
            [
              3,
              4,
              1
            ]
          ],
          4,
          2
        ],
        "expectedOutput": 2
      },
      {
        "input": [
          [
            [
              1,
              2,
              1
            ]
          ],
          2,
          1
        ],
        "expectedOutput": 1
      },
      {
        "input": [
          [
            [
              1,
              2,
              1
            ]
          ],
          2,
          2
        ],
        "expectedOutput": -1
      },
      {
        "input": [
          [
            [
              1,
              2,
              1
            ],
            [
              2,
              3,
              2
            ],
            [
              1,
              3,
              4
            ]
          ],
          3,
          1
        ],
        "expectedOutput": 3
      },
      {
        "input": [
          [
            [
              1,
              2,
              1
            ],
            [
              2,
              1,
              3
            ]
          ],
          2,
          2
        ],
        "expectedOutput": 3
      },
      {
        "input": [
          [
            [
              1,
              2,
              1
            ],
            [
              2,
              3,
              7
            ],
            [
              1,
              3,
              4
            ]
          ],
          3,
          1
        ],
        "expectedOutput": 4
      },
      {
        "input": [
          [
            [
              1,
              2,
              1
            ],
            [
              2,
              3,
              1
            ],
            [
              3,
              1,
              1
            ]
          ],
          3,
          1
        ],
        "expectedOutput": 2
      },
      {
        "input": [
          [
            [
              1,
              2,
              5
            ],
            [
              1,
              3,
              10
            ],
            [
              2,
              3,
              2
            ]
          ],
          3,
          1
        ],
        "expectedOutput": 7
      },
      {
        "input": [
          [
            [
              1,
              2,
              3
            ]
          ],
          3,
          1
        ],
        "expectedOutput": -1
      },
      {
        "input": [
          [
            [
              1,
              2,
              2
            ],
            [
              2,
              3,
              3
            ],
            [
              3,
              4,
              1
            ]
          ],
          4,
          1
        ],
        "expectedOutput": 6
      }
    ]
  },
  {
    "number": 158,
    "title": "Disjoint Set",
    "topic": "Graphs",
    "difficulty": "Medium",
    "description": "Implement a Disjoint Set (Union-Find) data structure supporting `union(x, y)` and `find(x)` with path compression and union by rank in nearly constant O(α(N)) time.",
    "constraints": [
      "1 <= N <= 10^5",
      "1 <= Q <= 10^5"
    ],
    "examples": [
      {
        "input": "DisjointSet ds = new DisjointSet(5); ds.union(1,2); ds.find(1) == ds.find(2);",
        "output": "true",
        "explanation": "1 and 2 belong to the same component."
      }
    ],
    "functionName": "class DisjointSet",
    "returnType": "void",
    "isDesign": true,
    "parameters": [],
    "testCases": [
      {
        "input": [
          [
            "DisjointSet",
            "union",
            "find",
            "find"
          ],
          [
            [
              5
            ],
            [
              1,
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
          2,
          2
        ]
      },
      {
        "input": [
          [
            "DisjointSet",
            "find",
            "find"
          ],
          [
            [
              3
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
          1,
          2
        ]
      },
      {
        "input": [
          [
            "DisjointSet",
            "union",
            "union",
            "find",
            "find"
          ],
          [
            [
              5
            ],
            [
              1,
              2
            ],
            [
              2,
              3
            ],
            [
              1
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
          3,
          3
        ]
      },
      {
        "input": [
          [
            "DisjointSet",
            "union",
            "find",
            "find"
          ],
          [
            [
              4
            ],
            [
              2,
              3
            ],
            [
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
          3,
          3
        ]
      },
      {
        "input": [
          [
            "DisjointSet",
            "union",
            "union",
            "find"
          ],
          [
            [
              6
            ],
            [
              1,
              4
            ],
            [
              4,
              5
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
          5
        ]
      },
      {
        "input": [
          [
            "DisjointSet",
            "find"
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
          1
        ]
      },
      {
        "input": [
          [
            "DisjointSet",
            "union",
            "find"
          ],
          [
            [
              5
            ],
            [
              0,
              4
            ],
            [
              0
            ]
          ]
        ],
        "expectedOutput": [
          null,
          null,
          4
        ]
      },
      {
        "input": [
          [
            "DisjointSet",
            "union",
            "union",
            "find"
          ],
          [
            [
              4
            ],
            [
              0,
              1
            ],
            [
              2,
              3
            ],
            [
              0
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
            "DisjointSet",
            "union",
            "union",
            "find"
          ],
          [
            [
              4
            ],
            [
              0,
              1
            ],
            [
              2,
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
          3
        ]
      },
      {
        "input": [
          [
            "DisjointSet",
            "union",
            "union",
            "union",
            "find"
          ],
          [
            [
              5
            ],
            [
              1,
              2
            ],
            [
              3,
              4
            ],
            [
              2,
              4
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
          4
        ]
      }
    ]
  },
  {
    "number": 159,
    "title": "Find the MST Weight",
    "topic": "Graphs",
    "difficulty": "Medium",
    "description": "Given a weighted, undirected and connected graph of `V` vertices and `adj`, find the sum of weights of the edges of the Minimum Spanning Tree (MST) using Prim's or Kruskal's algorithm.",
    "constraints": [
      "2 <= V <= 1000",
      "V-1 <= E <= (V*(V-1))/2",
      "1 <= weight <= 1000"
    ],
    "examples": [
      {
        "input": "V = 3, adj = [[[1,5],[2,1]],[[0,5],[2,3]],[[0,1],[1,3]]]",
        "output": "4",
        "explanation": "MST includes edges (0,2) of weight 1 and (1,2) of weight 3. Total sum = 4."
      }
    ],
    "functionName": "spanningTree",
    "returnType": "int",
    "parameters": [
      {
        "name": "V",
        "type": "int"
      },
      {
        "name": "adj",
        "type": "int[][][]"
      }
    ],
    "testCases": [
      {
        "input": [
          3,
          [
            [
              [
                1,
                5
              ],
              [
                2,
                1
              ]
            ],
            [
              [
                0,
                5
              ],
              [
                2,
                3
              ]
            ],
            [
              [
                0,
                1
              ],
              [
                1,
                3
              ]
            ]
          ]
        ],
        "expectedOutput": 4
      },
      {
        "input": [
          2,
          [
            [
              [
                1,
                5
              ]
            ],
            [
              [
                0,
                5
              ]
            ]
          ]
        ],
        "expectedOutput": 5
      },
      {
        "input": [
          4,
          [
            [
              [
                1,
                1
              ],
              [
                2,
                4
              ],
              [
                3,
                3
              ]
            ],
            [
              [
                0,
                1
              ],
              [
                3,
                2
              ]
            ],
            [
              [
                0,
                4
              ],
              [
                3,
                5
              ]
            ],
            [
              [
                0,
                3
              ],
              [
                1,
                2
              ],
              [
                2,
                5
              ]
            ]
          ]
        ],
        "expectedOutput": 7
      },
      {
        "input": [
          3,
          [
            [
              [
                1,
                2
              ]
            ],
            [
              [
                0,
                2
              ],
              [
                2,
                3
              ]
            ],
            [
              [
                1,
                3
              ]
            ]
          ]
        ],
        "expectedOutput": 5
      },
      {
        "input": [
          4,
          [
            [
              [
                1,
                10
              ],
              [
                2,
                6
              ],
              [
                3,
                5
              ]
            ],
            [
              [
                0,
                10
              ],
              [
                3,
                15
              ]
            ],
            [
              [
                0,
                6
              ],
              [
                3,
                4
              ]
            ],
            [
              [
                0,
                5
              ],
              [
                1,
                15
              ],
              [
                2,
                4
              ]
            ]
          ]
        ],
        "expectedOutput": 19
      },
      {
        "input": [
          3,
          [
            [
              [
                1,
                1
              ],
              [
                2,
                2
              ]
            ],
            [
              [
                0,
                1
              ],
              [
                2,
                3
              ]
            ],
            [
              [
                0,
                2
              ],
              [
                1,
                3
              ]
            ]
          ]
        ],
        "expectedOutput": 3
      },
      {
        "input": [
          4,
          [
            [
              [
                1,
                2
              ],
              [
                2,
                2
              ]
            ],
            [
              [
                0,
                2
              ],
              [
                3,
                2
              ]
            ],
            [
              [
                0,
                2
              ],
              [
                3,
                2
              ]
            ],
            [
              [
                1,
                2
              ],
              [
                2,
                2
              ]
            ]
          ]
        ],
        "expectedOutput": 6
      },
      {
        "input": [
          2,
          [
            [
              [
                1,
                100
              ]
            ],
            [
              [
                0,
                100
              ]
            ]
          ]
        ],
        "expectedOutput": 100
      },
      {
        "input": [
          3,
          [
            [
              [
                1,
                7
              ],
              [
                2,
                8
              ]
            ],
            [
              [
                0,
                7
              ],
              [
                2,
                3
              ]
            ],
            [
              [
                0,
                8
              ],
              [
                1,
                3
              ]
            ]
          ]
        ],
        "expectedOutput": 10
      },
      {
        "input": [
          5,
          [
            [
              [
                1,
                2
              ],
              [
                3,
                6
              ]
            ],
            [
              [
                0,
                2
              ],
              [
                2,
                3
              ],
              [
                3,
                8
              ],
              [
                4,
                5
              ]
            ],
            [
              [
                1,
                3
              ],
              [
                4,
                7
              ]
            ],
            [
              [
                0,
                6
              ],
              [
                1,
                8
              ],
              [
                4,
                9
              ]
            ],
            [
              [
                1,
                5
              ],
              [
                2,
                7
              ],
              [
                3,
                9
              ]
            ]
          ]
        ],
        "expectedOutput": 16
      }
    ]
  },
  {
    "number": 160,
    "title": "Number of Operations to Make Network Connected",
    "topic": "Graphs",
    "difficulty": "Medium",
    "description": "There are `n` computers numbered from 0 to `n - 1` connected by ethernet cables `connections`. You can extract certain cables and connect any pair of disconnected computers. Return the minimum number of times you need to do this to make all the computers connected. If it is not possible, return -1.",
    "constraints": [
      "1 <= n <= 10^5",
      "1 <= connections.length <= min(n * (n - 1) / 2, 10^5)",
      "connections[i].length == 2",
      "0 <= a_i, b_i < n",
      "a_i != b_i"
    ],
    "examples": [
      {
        "input": "n = 4, connections = [[0,1],[0,2],[1,2]]",
        "output": "1",
        "explanation": "Remove cable [0,2] and connect [1,3]."
      },
      {
        "input": "n = 6, connections = [[0,1],[0,2],[0,3],[1,2],[1,3]]",
        "output": "2",
        "explanation": "Need 2 operations."
      },
      {
        "input": "n = 6, connections = [[0,1],[0,2],[0,3],[1,2]]",
        "output": "-1",
        "explanation": "Not enough cables."
      }
    ],
    "functionName": "makeConnected",
    "returnType": "int",
    "parameters": [
      {
        "name": "n",
        "type": "int"
      },
      {
        "name": "connections",
        "type": "int[][]"
      }
    ],
    "testCases": [
      {
        "input": [
          4,
          [
            [
              0,
              1
            ],
            [
              0,
              2
            ],
            [
              1,
              2
            ]
          ]
        ],
        "expectedOutput": 1
      },
      {
        "input": [
          6,
          [
            [
              0,
              1
            ],
            [
              0,
              2
            ],
            [
              0,
              3
            ],
            [
              1,
              2
            ],
            [
              1,
              3
            ]
          ]
        ],
        "expectedOutput": 2
      },
      {
        "input": [
          6,
          [
            [
              0,
              1
            ],
            [
              0,
              2
            ],
            [
              0,
              3
            ],
            [
              1,
              2
            ]
          ]
        ],
        "expectedOutput": -1
      },
      {
        "input": [
          5,
          [
            [
              0,
              1
            ],
            [
              0,
              2
            ],
            [
              3,
              4
            ],
            [
              2,
              3
            ]
          ]
        ],
        "expectedOutput": 0
      },
      {
        "input": [
          1,
          []
        ],
        "expectedOutput": 0
      },
      {
        "input": [
          3,
          [
            [
              0,
              1
            ]
          ]
        ],
        "expectedOutput": -1
      },
      {
        "input": [
          4,
          [
            [
              0,
              1
            ],
            [
              2,
              3
            ]
          ]
        ],
        "expectedOutput": -1
      },
      {
        "input": [
          5,
          [
            [
              0,
              1
            ],
            [
              0,
              2
            ],
            [
              0,
              3
            ],
            [
              1,
              2
            ],
            [
              1,
              3
            ],
            [
              2,
              3
            ]
          ]
        ],
        "expectedOutput": 1
      },
      {
        "input": [
          6,
          [
            [
              0,
              1
            ],
            [
              1,
              2
            ],
            [
              2,
              3
            ],
            [
              3,
              4
            ],
            [
              4,
              5
            ]
          ]
        ],
        "expectedOutput": 0
      },
      {
        "input": [
          2,
          [
            [
              0,
              1
            ]
          ]
        ],
        "expectedOutput": 0
      }
    ]
  },
  {
    "number": 161,
    "title": "Number of Islands II",
    "topic": "Graphs",
    "difficulty": "Hard",
    "description": "You are given an empty 2D binary grid of size `m x n`. We can perform an addLand operation which turns the water at position into land. Return an array of integers representing the number of islands after each addLand operation.",
    "constraints": [
      "1 <= m, n <= 10^4",
      "1 <= m * n <= 10^4",
      "1 <= positions.length <= 10^4",
      "0 <= r_i < m",
      "0 <= c_i < n"
    ],
    "examples": [
      {
        "input": "m = 3, n = 3, positions = [[0,0],[0,1],[1,2],[2,1]]",
        "output": "[1,1,2,3]",
        "explanation": "Islands count after each addition."
      }
    ],
    "functionName": "numIslands2",
    "returnType": "int[]",
    "parameters": [
      {
        "name": "m",
        "type": "int"
      },
      {
        "name": "n",
        "type": "int"
      },
      {
        "name": "positions",
        "type": "int[][]"
      }
    ],
    "testCases": [
      {
        "input": [
          3,
          3,
          [
            [
              0,
              0
            ],
            [
              0,
              1
            ],
            [
              1,
              2
            ],
            [
              2,
              1
            ]
          ]
        ],
        "expectedOutput": [
          1,
          1,
          2,
          3
        ]
      },
      {
        "input": [
          1,
          1,
          [
            [
              0,
              0
            ]
          ]
        ],
        "expectedOutput": [
          1
        ]
      },
      {
        "input": [
          3,
          3,
          [
            [
              0,
              0
            ],
            [
              0,
              1
            ],
            [
              0,
              2
            ]
          ]
        ],
        "expectedOutput": [
          1,
          1,
          1
        ]
      },
      {
        "input": [
          2,
          2,
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
              1
            ],
            [
              1,
              0
            ]
          ]
        ],
        "expectedOutput": [
          1,
          2,
          1,
          1
        ]
      },
      {
        "input": [
          1,
          2,
          [
            [
              0,
              0
            ],
            [
              0,
              1
            ]
          ]
        ],
        "expectedOutput": [
          1,
          1
        ]
      },
      {
        "input": [
          3,
          3,
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
              2,
              2
            ]
          ]
        ],
        "expectedOutput": [
          1,
          2,
          3
        ]
      },
      {
        "input": [
          2,
          3,
          [
            [
              0,
              0
            ],
            [
              0,
              2
            ],
            [
              1,
              1
            ],
            [
              0,
              1
            ]
          ]
        ],
        "expectedOutput": [
          1,
          2,
          3,
          1
        ]
      },
      {
        "input": [
          3,
          1,
          [
            [
              0,
              0
            ],
            [
              2,
              0
            ],
            [
              1,
              0
            ]
          ]
        ],
        "expectedOutput": [
          1,
          2,
          1
        ]
      },
      {
        "input": [
          2,
          2,
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
        "expectedOutput": [
          1,
          1
        ]
      },
      {
        "input": [
          3,
          3,
          [
            [
              1,
              1
            ],
            [
              0,
              1
            ],
            [
              2,
              1
            ],
            [
              1,
              0
            ],
            [
              1,
              2
            ]
          ]
        ],
        "expectedOutput": [
          1,
          1,
          1,
          1,
          1
        ]
      }
    ]
  },
  {
    "number": 162,
    "title": "Making a Large Island",
    "topic": "Graphs",
    "difficulty": "Hard",
    "description": "You are given an `n x n` binary matrix `grid`. You are allowed to change at most one 0 to be 1. Return the size of the largest island in `grid` after applying this operation.",
    "constraints": [
      "n == grid.length",
      "n == grid[i].length",
      "1 <= n <= 500",
      "grid[i][j] is either 0 or 1."
    ],
    "examples": [
      {
        "input": "grid = [[1,0],[0,1]]",
        "output": "3",
        "explanation": "Change any 0 to 1 to connect the two 1s."
      },
      {
        "input": "grid = [[1,1],[1,0]]",
        "output": "4",
        "explanation": "Change the 0 to 1 to make the entire grid island of size 4."
      },
      {
        "input": "grid = [[1,1],[1,1]]",
        "output": "4",
        "explanation": "Already max size 4."
      }
    ],
    "functionName": "largestIsland",
    "returnType": "int",
    "parameters": [
      {
        "name": "grid",
        "type": "int[][]"
      }
    ],
    "testCases": [
      {
        "input": [
          [
            [
              1,
              0
            ],
            [
              0,
              1
            ]
          ]
        ],
        "expectedOutput": 3
      },
      {
        "input": [
          [
            [
              1,
              1
            ],
            [
              1,
              0
            ]
          ]
        ],
        "expectedOutput": 4
      },
      {
        "input": [
          [
            [
              1,
              1
            ],
            [
              1,
              1
            ]
          ]
        ],
        "expectedOutput": 4
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
        "expectedOutput": 1
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
              1,
              0,
              1
            ],
            [
              0,
              0,
              0
            ],
            [
              0,
              1,
              1
            ]
          ]
        ],
        "expectedOutput": 4
      },
      {
        "input": [
          [
            [
              1,
              1,
              0
            ],
            [
              1,
              0,
              1
            ],
            [
              0,
              1,
              1
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
              1
            ],
            [
              1,
              1
            ]
          ]
        ],
        "expectedOutput": 4
      },
      {
        "input": [
          [
            [
              1,
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
              1
            ]
          ]
        ],
        "expectedOutput": 3
      }
    ]
  }
];
