/**
 * topic13_tries.js
 */

export const TOPIC_13_PROBLEMS = [
  {
    "number": 185,
    "title": "Trie Implementation and Advanced Operations",
    "topic": "Tries",
    "difficulty": "Medium",
    "description": "A trie (pronounced as 'try') or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. Implement the `Trie` class with `insert`, `search`, and `startsWith`.",
    "constraints": [
      "1 <= word.length, prefix.length <= 2000",
      "word and prefix consist only of lowercase English letters.",
      "At most 3 * 10^4 calls in total will be made."
    ],
    "examples": [
      {
        "input": "Trie trie = new Trie(); trie.insert('apple'); trie.search('apple'); trie.search('app'); trie.startsWith('app'); trie.insert('app'); trie.search('app');",
        "output": "[null, null, true, false, true, null, true]",
        "explanation": "Trie operations."
      }
    ],
    "functionName": "class Trie",
    "returnType": "void",
    "isDesign": true,
    "parameters": [],
    "testCases": [
      {
        "input": [
          [
            "Trie",
            "insert",
            "search",
            "search",
            "startsWith",
            "insert",
            "search"
          ],
          [
            [],
            [
              "apple"
            ],
            [
              "apple"
            ],
            [
              "app"
            ],
            [
              "app"
            ],
            [
              "app"
            ],
            [
              "app"
            ]
          ]
        ],
        "expectedOutput": [
          null,
          null,
          true,
          false,
          true,
          null,
          true
        ]
      },
      {
        "input": [
          [
            "Trie",
            "insert",
            "search"
          ],
          [
            [],
            [
              "hello"
            ],
            [
              "hello"
            ]
          ]
        ],
        "expectedOutput": [
          null,
          null,
          true
        ]
      },
      {
        "input": [
          [
            "Trie",
            "insert",
            "search"
          ],
          [
            [],
            [
              "world"
            ],
            [
              "wor"
            ]
          ]
        ],
        "expectedOutput": [
          null,
          null,
          false
        ]
      },
      {
        "input": [
          [
            "Trie",
            "insert",
            "startsWith"
          ],
          [
            [],
            [
              "cat"
            ],
            [
              "ca"
            ]
          ]
        ],
        "expectedOutput": [
          null,
          null,
          true
        ]
      },
      {
        "input": [
          [
            "Trie",
            "insert",
            "startsWith"
          ],
          [
            [],
            [
              "bat"
            ],
            [
              "ba"
            ]
          ]
        ],
        "expectedOutput": [
          null,
          null,
          true
        ]
      },
      {
        "input": [
          [
            "Trie",
            "search"
          ],
          [
            [],
            [
              "anything"
            ]
          ]
        ],
        "expectedOutput": [
          null,
          false
        ]
      },
      {
        "input": [
          [
            "Trie",
            "insert",
            "insert",
            "search"
          ],
          [
            [],
            [
              "a"
            ],
            [
              "ab"
            ],
            [
              "a"
            ]
          ]
        ],
        "expectedOutput": [
          null,
          null,
          null,
          true
        ]
      },
      {
        "input": [
          [
            "Trie",
            "insert",
            "insert",
            "search"
          ],
          [
            [],
            [
              "a"
            ],
            [
              "ab"
            ],
            [
              "ab"
            ]
          ]
        ],
        "expectedOutput": [
          null,
          null,
          null,
          true
        ]
      },
      {
        "input": [
          [
            "Trie",
            "insert",
            "insert",
            "search"
          ],
          [
            [],
            [
              "car"
            ],
            [
              "card"
            ],
            [
              "car"
            ]
          ]
        ],
        "expectedOutput": [
          null,
          null,
          null,
          true
        ]
      },
      {
        "input": [
          [
            "Trie",
            "insert",
            "startsWith"
          ],
          [
            [],
            [
              "program"
            ],
            [
              "pro"
            ]
          ]
        ],
        "expectedOutput": [
          null,
          null,
          true
        ]
      }
    ]
  },
  {
    "number": 186,
    "title": "Longest Word With All Prefixes",
    "topic": "Tries",
    "difficulty": "Medium",
    "description": "Given an array of strings `a` of size `n`, find the longest string in `a` such that every prefix of it is also in `a`. If there are multiple strings of the same maximum length, return the lexicographically smallest one. If no such string exists, return an empty string.",
    "constraints": [
      "1 <= n <= 10^5",
      "1 <= a[i].length <= 10^5",
      "a[i] consists of lowercase English letters."
    ],
    "examples": [
      {
        "input": "n = 6, a = ['n','ni','nin','ninj','ninja','ninga']",
        "output": "'ninja'",
        "explanation": "'ninja' has all prefixes ('n', 'ni', 'nin', 'ninj') present."
      },
      {
        "input": "n = 2, a = ['ab','bc']",
        "output": "''",
        "explanation": "No prefixes exist."
      }
    ],
    "functionName": "completeString",
    "returnType": "string",
    "parameters": [
      {
        "name": "n",
        "type": "int"
      },
      {
        "name": "a",
        "type": "string[]"
      }
    ],
    "testCases": [
      {
        "input": [
          6,
          [
            "n",
            "ni",
            "nin",
            "ninj",
            "ninja",
            "ninga"
          ]
        ],
        "expectedOutput": "ninja"
      },
      {
        "input": [
          2,
          [
            "ab",
            "bc"
          ]
        ],
        "expectedOutput": ""
      },
      {
        "input": [
          3,
          [
            "a",
            "banana",
            "app"
          ]
        ],
        "expectedOutput": "a"
      },
      {
        "input": [
          7,
          [
            "a",
            "ap",
            "app",
            "appl",
            "apply",
            "apple",
            "apples"
          ]
        ],
        "expectedOutput": "apple"
      },
      {
        "input": [
          4,
          [
            "b",
            "ba",
            "bac",
            "bad"
          ]
        ],
        "expectedOutput": "bac"
      },
      {
        "input": [
          1,
          [
            "z"
          ]
        ],
        "expectedOutput": "z"
      },
      {
        "input": [
          3,
          [
            "c",
            "ca",
            "cat"
          ]
        ],
        "expectedOutput": "cat"
      },
      {
        "input": [
          3,
          [
            "w",
            "wo",
            "wor"
          ]
        ],
        "expectedOutput": "wor"
      },
      {
        "input": [
          5,
          [
            "p",
            "pr",
            "pro",
            "prog",
            "program"
          ]
        ],
        "expectedOutput": "program"
      },
      {
        "input": [
          4,
          [
            "m",
            "ma",
            "man",
            "many"
          ]
        ],
        "expectedOutput": "many"
      }
    ]
  },
  {
    "number": 187,
    "title": "Number of Distinct Substrings in a String",
    "topic": "Tries",
    "difficulty": "Medium",
    "description": "Given a string `s`, find the number of distinct non-empty substrings in `s` using a Trie in O(n^2) time and space.",
    "constraints": [
      "1 <= s.length <= 1000",
      "s contains only lowercase letters of English alphabet."
    ],
    "examples": [
      {
        "input": "s = 'abab'",
        "output": "8",
        "explanation": "Distinct substrings: 'a', 'b', 'ab', 'ba', 'aba', 'bab', 'abab'."
      },
      {
        "input": "s = 'ab'",
        "output": "3",
        "explanation": "'a', 'b', 'ab'."
      }
    ],
    "functionName": "countDistinctSubstring",
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
          "abab"
        ],
        "expectedOutput": 8
      },
      {
        "input": [
          "ab"
        ],
        "expectedOutput": 3
      },
      {
        "input": [
          "a"
        ],
        "expectedOutput": 1
      },
      {
        "input": [
          "aaaa"
        ],
        "expectedOutput": 4
      },
      {
        "input": [
          "abc"
        ],
        "expectedOutput": 6
      },
      {
        "input": [
          "banana"
        ],
        "expectedOutput": 15
      },
      {
        "input": [
          "racecar"
        ],
        "expectedOutput": 26
      },
      {
        "input": [
          "aa"
        ],
        "expectedOutput": 2
      },
      {
        "input": [
          "aba"
        ],
        "expectedOutput": 5
      },
      {
        "input": [
          "coder"
        ],
        "expectedOutput": 15
      }
    ]
  },
  {
    "number": 188,
    "title": "Maximum XOR of Two Numbers in an Array",
    "topic": "Tries",
    "difficulty": "Medium",
    "description": "Given an integer array `nums`, return the maximum result of `nums[i] XOR nums[j]`, where `0 <= i <= j < n` in O(n * 32) time using a bitwise Trie.",
    "constraints": [
      "1 <= nums.length <= 2 * 10^5",
      "0 <= nums[i] <= 2^31 - 1"
    ],
    "examples": [
      {
        "input": "nums = [3,10,5,25,2,8]",
        "output": "28",
        "explanation": "The maximum result is 5 XOR 25 = 28."
      },
      {
        "input": "nums = [14,70,53,83,49,91,36,80,92,51,66,70]",
        "output": "127",
        "explanation": "Maximum XOR is 127."
      }
    ],
    "functionName": "findMaximumXOR",
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
            3,
            10,
            5,
            25,
            2,
            8
          ]
        ],
        "expectedOutput": 28
      },
      {
        "input": [
          [
            14,
            70,
            53,
            83,
            49,
            91,
            36,
            80,
            92,
            51,
            66,
            70
          ]
        ],
        "expectedOutput": 127
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
            2,
            4
          ]
        ],
        "expectedOutput": 6
      },
      {
        "input": [
          [
            8,
            10,
            2
          ]
        ],
        "expectedOutput": 10
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
        "expectedOutput": 7
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
            100,
            200
          ]
        ],
        "expectedOutput": 172
      },
      {
        "input": [
          [
            7,
            11
          ]
        ],
        "expectedOutput": 12
      },
      {
        "input": [
          [
            4,
            6,
            7
          ]
        ],
        "expectedOutput": 3
      }
    ]
  },
  {
    "number": 189,
    "title": "Maximum XOR With an Element From an Array",
    "topic": "Tries",
    "difficulty": "Hard",
    "description": "You are given an array `nums` consisting of non-negative integers. You are also given a `queries` array, where `queries[j] = [x_j, m_j]`. The answer to the `j`th query is the maximum bitwise XOR value of `x_j` with any element of `nums` that does not exceed `m_j`. If all elements in `nums` are larger than `m_j`, then the answer is -1. Return an integer array `answer` where `answer.length == queries.length`.",
    "constraints": [
      "1 <= nums.length, queries.length <= 10^5",
      "queries[j].length == 2",
      "0 <= nums[i], x_j, m_j <= 10^9"
    ],
    "examples": [
      {
        "input": "nums = [0,1,2,3,4], queries = [[3,1],[1,3],[5,6]]",
        "output": "[3,3,7]",
        "explanation": "1) 3 XOR 0 = 3, 3 XOR 1 = 2 -> max is 3; 2) 1 XOR 2 = 3; 3) 5 XOR 2 = 7."
      },
      {
        "input": "nums = [5,2,4,6,6,3], queries = [[12,4],[8,1],[6,3]]",
        "output": "[15,-1,5]",
        "explanation": "Maximum XOR answering queries."
      }
    ],
    "functionName": "maximizeXor",
    "returnType": "int[]",
    "parameters": [
      {
        "name": "nums",
        "type": "int[]"
      },
      {
        "name": "queries",
        "type": "int[][]"
      }
    ],
    "testCases": [
      {
        "input": [
          [
            0,
            1,
            2,
            3,
            4
          ],
          [
            [
              3,
              1
            ],
            [
              1,
              3
            ],
            [
              5,
              6
            ]
          ]
        ],
        "expectedOutput": [
          3,
          3,
          7
        ]
      },
      {
        "input": [
          [
            5,
            2,
            4,
            6,
            6,
            3
          ],
          [
            [
              12,
              4
            ],
            [
              8,
              1
            ],
            [
              6,
              3
            ]
          ]
        ],
        "expectedOutput": [
          15,
          -1,
          5
        ]
      },
      {
        "input": [
          [
            1
          ],
          [
            [
              1,
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
          [
            1
          ],
          [
            [
              1,
              1
            ]
          ]
        ],
        "expectedOutput": [
          0
        ]
      },
      {
        "input": [
          [
            2,
            4,
            8
          ],
          [
            [
              6,
              4
            ]
          ]
        ],
        "expectedOutput": [
          4
        ]
      },
      {
        "input": [
          [
            1,
            2,
            3
          ],
          [
            [
              4,
              2
            ]
          ]
        ],
        "expectedOutput": [
          6
        ]
      },
      {
        "input": [
          [
            10
          ],
          [
            [
              5,
              5
            ]
          ]
        ],
        "expectedOutput": [
          -1
        ]
      },
      {
        "input": [
          [
            0
          ],
          [
            [
              0,
              0
            ]
          ]
        ],
        "expectedOutput": [
          0
        ]
      },
      {
        "input": [
          [
            1,
            3,
            5
          ],
          [
            [
              2,
              4
            ],
            [
              7,
              2
            ]
          ]
        ],
        "expectedOutput": [
          3,
          6
        ]
      },
      {
        "input": [
          [
            4,
            2,
            1
          ],
          [
            [
              1,
              1
            ]
          ]
        ],
        "expectedOutput": [
          0
        ]
      }
    ]
  }
];
