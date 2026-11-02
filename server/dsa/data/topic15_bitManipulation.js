/**
 * topic15_bitManipulation.js
 */

export const TOPIC_15_PROBLEMS = [
  {
    "number": 195,
    "title": "Power Set Using Bit Manipulation",
    "topic": "Bit Manipulation",
    "difficulty": "Medium",
    "description": "Given a string `s` of length `n`, find all possible subsequences (power set) of `s` using bit manipulation (bitwise operations). Return the list in lexicographical order.",
    "constraints": [
      "1 <= s.length <= 16",
      "s consists of lowercase letters."
    ],
    "examples": [
      {
        "input": "s = 'abc'",
        "output": "['a','ab','abc','ac','b','bc','c']",
        "explanation": "All 7 non-empty subsequences."
      },
      {
        "input": "s = 'aa'",
        "output": "['a','a','aa']",
        "explanation": "All subsequences."
      }
    ],
    "functionName": "powerSetBit",
    "returnType": "string[]",
    "parameters": [
      {
        "name": "s",
        "type": "string"
      }
    ],
    "testCases": [
      {
        "input": [
          "abc"
        ],
        "expectedOutput": [
          "a",
          "ab",
          "abc",
          "ac",
          "b",
          "bc",
          "c"
        ]
      },
      {
        "input": [
          "aa"
        ],
        "expectedOutput": [
          "a",
          "a",
          "aa"
        ]
      },
      {
        "input": [
          "a"
        ],
        "expectedOutput": [
          "a"
        ]
      },
      {
        "input": [
          "bca"
        ],
        "expectedOutput": [
          "a",
          "b",
          "ba",
          "bc",
          "bca",
          "c",
          "ca"
        ]
      },
      {
        "input": [
          "ab"
        ],
        "expectedOutput": [
          "a",
          "ab",
          "b"
        ]
      },
      {
        "input": [
          "xyz"
        ],
        "expectedOutput": [
          "x",
          "xy",
          "xyz",
          "xz",
          "y",
          "yz",
          "z"
        ]
      },
      {
        "input": [
          "ba"
        ],
        "expectedOutput": [
          "a",
          "b",
          "ba"
        ]
      },
      {
        "input": [
          "cba"
        ],
        "expectedOutput": [
          "a",
          "b",
          "ba",
          "c",
          "ca",
          "cb",
          "cba"
        ]
      },
      {
        "input": [
          "12"
        ],
        "expectedOutput": [
          "1",
          "12",
          "2"
        ]
      },
      {
        "input": [
          "cat"
        ],
        "expectedOutput": [
          "a",
          "at",
          "c",
          "ca",
          "cat",
          "ct",
          "t"
        ]
      }
    ]
  },
  {
    "number": 196,
    "title": "Single Number II",
    "topic": "Bit Manipulation",
    "difficulty": "Medium",
    "description": "Given an integer array `nums` where every element appears three times except for one, which appears exactly once. Find the single element and return it in O(n) time and O(1) space.",
    "constraints": [
      "1 <= nums.length <= 3 * 10^4",
      "-2^31 <= nums[i] <= 2^31 - 1",
      "Each element appears 3 times except for one."
    ],
    "examples": [
      {
        "input": "nums = [2,2,3,2]",
        "output": "3",
        "explanation": "3 appears once."
      },
      {
        "input": "nums = [0,1,0,1,0,1,99]",
        "output": "99",
        "explanation": "99 appears once."
      }
    ],
    "functionName": "singleNumberTwo",
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
            2,
            2,
            3,
            2
          ]
        ],
        "expectedOutput": 3
      },
      {
        "input": [
          [
            0,
            1,
            0,
            1,
            0,
            1,
            99
          ]
        ],
        "expectedOutput": 99
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
            -2,
            -2,
            1,
            -2
          ]
        ],
        "expectedOutput": 1
      },
      {
        "input": [
          [
            4,
            4,
            4,
            5
          ]
        ],
        "expectedOutput": 5
      },
      {
        "input": [
          [
            10,
            10,
            10,
            20
          ]
        ],
        "expectedOutput": 20
      },
      {
        "input": [
          [
            5,
            3,
            5,
            5
          ]
        ],
        "expectedOutput": 3
      },
      {
        "input": [
          [
            30000,
            500,
            100,
            30000,
            100,
            30000,
            100
          ]
        ],
        "expectedOutput": 500
      },
      {
        "input": [
          [
            7,
            7,
            7,
            8
          ]
        ],
        "expectedOutput": 8
      },
      {
        "input": [
          [
            -4,
            -4,
            -4,
            -1
          ]
        ],
        "expectedOutput": -1
      }
    ]
  },
  {
    "number": 197,
    "title": "Single Number III",
    "topic": "Bit Manipulation",
    "difficulty": "Medium",
    "description": "Given an integer array `nums`, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once. Return the two elements sorted in ascending order.",
    "constraints": [
      "2 <= nums.length <= 3 * 10^4",
      "-2^31 <= nums[i] <= 2^31 - 1",
      "Each element in nums will appear twice, only two elements will appear once."
    ],
    "examples": [
      {
        "input": "nums = [1,2,1,3,2,5]",
        "output": "[3,5]",
        "explanation": "3 and 5 appear once."
      },
      {
        "input": "nums = [-1,0]",
        "output": "[-1,0]",
        "explanation": "-1 and 0 appear once."
      }
    ],
    "functionName": "singleNumberThree",
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
            1,
            3,
            2,
            5
          ]
        ],
        "expectedOutput": [
          3,
          5
        ]
      },
      {
        "input": [
          [
            -1,
            0
          ]
        ],
        "expectedOutput": [
          -1,
          0
        ]
      },
      {
        "input": [
          [
            0,
            1
          ]
        ],
        "expectedOutput": [
          0,
          1
        ]
      },
      {
        "input": [
          [
            2,
            4
          ]
        ],
        "expectedOutput": [
          2,
          4
        ]
      },
      {
        "input": [
          [
            1,
            1,
            2,
            2,
            3,
            4
          ]
        ],
        "expectedOutput": [
          3,
          4
        ]
      },
      {
        "input": [
          [
            5,
            7,
            5,
            9
          ]
        ],
        "expectedOutput": [
          7,
          9
        ]
      },
      {
        "input": [
          [
            1,
            2,
            1,
            4
          ]
        ],
        "expectedOutput": [
          2,
          4
        ]
      },
      {
        "input": [
          [
            10,
            20
          ]
        ],
        "expectedOutput": [
          10,
          20
        ]
      },
      {
        "input": [
          [
            -2,
            -2,
            -3,
            5
          ]
        ],
        "expectedOutput": [
          -3,
          5
        ]
      },
      {
        "input": [
          [
            4,
            6
          ]
        ],
        "expectedOutput": [
          4,
          6
        ]
      }
    ]
  },
  {
    "number": 198,
    "title": "Find the Repeating and Missing Number",
    "topic": "Bit Manipulation",
    "difficulty": "Medium",
    "description": "Given an unsorted array `arr` of size `n` of positive integers. One number 'A' from set {1, 2, …n} is missing and one number 'B' occurs twice in array. Find these two numbers using bit manipulation or math. Return `[repeating, missing]`.",
    "constraints": [
      "2 <= n <= 10^5",
      "1 <= arr[i] <= n"
    ],
    "examples": [
      {
        "input": "arr = [2,2], n = 2",
        "output": "[2, 1]",
        "explanation": "Repeating 2, Missing 1."
      },
      {
        "input": "arr = [1,3,3], n = 3",
        "output": "[3, 2]",
        "explanation": "Repeating 3, Missing 2."
      }
    ],
    "functionName": "findTwoElement",
    "returnType": "int[]",
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
            2,
            2
          ],
          2
        ],
        "expectedOutput": [
          2,
          1
        ]
      },
      {
        "input": [
          [
            1,
            3,
            3
          ],
          3
        ],
        "expectedOutput": [
          3,
          2
        ]
      },
      {
        "input": [
          [
            1,
            2,
            2,
            4
          ],
          4
        ],
        "expectedOutput": [
          2,
          3
        ]
      },
      {
        "input": [
          [
            3,
            1,
            2,
            5,
            3
          ],
          5
        ],
        "expectedOutput": [
          3,
          4
        ]
      },
      {
        "input": [
          [
            1,
            1
          ],
          2
        ],
        "expectedOutput": [
          1,
          2
        ]
      },
      {
        "input": [
          [
            4,
            3,
            6,
            2,
            1,
            1
          ],
          6
        ],
        "expectedOutput": [
          1,
          5
        ]
      },
      {
        "input": [
          [
            2,
            1,
            4,
            4
          ],
          4
        ],
        "expectedOutput": [
          4,
          3
        ]
      },
      {
        "input": [
          [
            1,
            2,
            3,
            5,
            5
          ],
          5
        ],
        "expectedOutput": [
          5,
          4
        ]
      },
      {
        "input": [
          [
            3,
            2,
            2
          ],
          3
        ],
        "expectedOutput": [
          2,
          1
        ]
      },
      {
        "input": [
          [
            1,
            3,
            4,
            5,
            5
          ],
          5
        ],
        "expectedOutput": [
          5,
          2
        ]
      }
    ]
  },
  {
    "number": 199,
    "title": "Reverse Bits",
    "topic": "Bit Manipulation",
    "difficulty": "Easy",
    "description": "Reverse bits of a given 32 bits unsigned integer. Return the reversed 32-bit integer.",
    "constraints": [
      "The input must be a binary string of length 32 or unsigned 32-bit int."
    ],
    "examples": [
      {
        "input": "n = 43261596 (00000010100101000001111010011100)",
        "output": "964176192",
        "explanation": "Reversed bits evaluate to 964176192."
      }
    ],
    "functionName": "reverseBits",
    "returnType": "long",
    "parameters": [
      {
        "name": "n",
        "type": "int"
      }
    ],
    "testCases": [
      {
        "input": [
          43261596
        ],
        "expectedOutput": 964176192
      },
      {
        "input": [
          1
        ],
        "expectedOutput": 2147483648
      },
      {
        "input": [
          0
        ],
        "expectedOutput": 0
      },
      {
        "input": [
          4294967295
        ],
        "expectedOutput": 4294967295
      },
      {
        "input": [
          2
        ],
        "expectedOutput": 1073741824
      },
      {
        "input": [
          3
        ],
        "expectedOutput": 3221225472
      },
      {
        "input": [
          4
        ],
        "expectedOutput": 536870912
      },
      {
        "input": [
          8
        ],
        "expectedOutput": 268435456
      },
      {
        "input": [
          16
        ],
        "expectedOutput": 134217728
      },
      {
        "input": [
          2147483648
        ],
        "expectedOutput": 1
      }
    ]
  }
];
