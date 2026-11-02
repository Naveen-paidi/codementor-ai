/**
 * topic8_heaps.js
 */

export const TOPIC_8_PROBLEMS = [
  {
    "number": 100,
    "title": "Heapify Algorithm",
    "topic": "Heaps",
    "difficulty": "Medium",
    "description": "Given an array `arr` of size `n`, implement the min-heapify algorithm to convert the array into a valid Min-Heap in O(n) time. Return the heapified array.",
    "constraints": [
      "1 <= n <= 10^5",
      "-10^9 <= arr[i] <= 10^9"
    ],
    "examples": [
      {
        "input": "arr = [4,10,3,5,1]",
        "output": "[1,4,3,5,10]",
        "explanation": "Min-heap property satisfied: parent <= children."
      }
    ],
    "functionName": "buildMinHeap",
    "returnType": "int[]",
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
            4,
            10,
            3,
            5,
            1
          ]
        ],
        "expectedOutput": [
          1,
          4,
          3,
          5,
          10
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
          ]
        ],
        "expectedOutput": [
          1,
          2,
          3,
          4,
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
          ]
        ],
        "expectedOutput": [
          1,
          2,
          3,
          5,
          4
        ]
      },
      {
        "input": [
          [
            1
          ]
        ],
        "expectedOutput": [
          1
        ]
      },
      {
        "input": [
          [
            2,
            1
          ]
        ],
        "expectedOutput": [
          1,
          2
        ]
      },
      {
        "input": [
          [
            10,
            20,
            15,
            30,
            40
          ]
        ],
        "expectedOutput": [
          10,
          20,
          15,
          30,
          40
        ]
      },
      {
        "input": [
          [
            9,
            8,
            7,
            6,
            5,
            4,
            3
          ]
        ],
        "expectedOutput": [
          3,
          5,
          4,
          6,
          8,
          9,
          7
        ]
      },
      {
        "input": [
          [
            0,
            -1,
            -2
          ]
        ],
        "expectedOutput": [
          -2,
          -1,
          0
        ]
      },
      {
        "input": [
          [
            3,
            3,
            3
          ]
        ],
        "expectedOutput": [
          3,
          3,
          3
        ]
      },
      {
        "input": [
          [
            12,
            11,
            13,
            5,
            6,
            7
          ]
        ],
        "expectedOutput": [
          5,
          6,
          7,
          11,
          12,
          13
        ]
      }
    ]
  },
  {
    "number": 101,
    "title": "Build Heap From a Given Array",
    "topic": "Heaps",
    "difficulty": "Medium",
    "description": "Given an array `arr` of size `n`, build a Max-Heap from the given array in O(n) time. Return the resulting max-heap array.",
    "constraints": [
      "1 <= n <= 10^5",
      "-10^9 <= arr[i] <= 10^9"
    ],
    "examples": [
      {
        "input": "arr = [1,3,5,4,6,13,10,9,8,15,17]",
        "output": "[17,15,13,9,6,5,10,4,8,3,1]",
        "explanation": "Max-heap property: parent >= children."
      }
    ],
    "functionName": "buildMaxHeap",
    "returnType": "int[]",
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
            1,
            3,
            5,
            4,
            6,
            13,
            10,
            9,
            8,
            15,
            17
          ]
        ],
        "expectedOutput": [
          17,
          15,
          13,
          9,
          6,
          5,
          10,
          4,
          8,
          3,
          1
        ]
      },
      {
        "input": [
          [
            4,
            10,
            3,
            5,
            1
          ]
        ],
        "expectedOutput": [
          10,
          5,
          3,
          4,
          1
        ]
      },
      {
        "input": [
          [
            1
          ]
        ],
        "expectedOutput": [
          1
        ]
      },
      {
        "input": [
          [
            1,
            2
          ]
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
            2,
            3
          ]
        ],
        "expectedOutput": [
          3,
          2,
          1
        ]
      },
      {
        "input": [
          [
            3,
            2,
            1
          ]
        ],
        "expectedOutput": [
          3,
          2,
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
          40,
          20,
          30,
          10
        ]
      },
      {
        "input": [
          [
            -1,
            -2,
            -3
          ]
        ],
        "expectedOutput": [
          -1,
          -2,
          -3
        ]
      },
      {
        "input": [
          [
            5,
            5,
            5
          ]
        ],
        "expectedOutput": [
          5,
          5,
          5
        ]
      },
      {
        "input": [
          [
            2,
            8,
            5,
            3,
            9,
            1
          ]
        ],
        "expectedOutput": [
          9,
          8,
          5,
          3,
          2,
          1
        ]
      }
    ]
  },
  {
    "number": 102,
    "title": "Implement Min Heap",
    "topic": "Heaps",
    "difficulty": "Medium",
    "description": "Design a Min Heap data structure that supports `insert(val)`, `extractMin()`, and `getMin()` in O(log n) time.",
    "constraints": [
      "1 <= Q <= 10^5",
      "-10^9 <= val <= 10^9"
    ],
    "examples": [
      {
        "input": "insert(4), insert(2), getMin(), extractMin(), getMin()",
        "output": "[2, 2, 4]",
        "explanation": "Min Heap operations."
      }
    ],
    "functionName": "class MinHeap",
    "returnType": "void",
    "isDesign": true,
    "parameters": [],
    "testCases": [
      {
        "input": [
          [
            "MinHeap",
            "insert",
            "insert",
            "getMin",
            "extractMin",
            "getMin"
          ],
          [
            [],
            [
              4
            ],
            [
              2
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
          2,
          2,
          4
        ]
      },
      {
        "input": [
          [
            "MinHeap",
            "insert",
            "getMin"
          ],
          [
            [],
            [
              10
            ],
            []
          ]
        ],
        "expectedOutput": [
          null,
          null,
          10
        ]
      },
      {
        "input": [
          [
            "MinHeap",
            "insert",
            "insert",
            "insert",
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
            [
              7
            ],
            []
          ]
        ],
        "expectedOutput": [
          null,
          null,
          null,
          null,
          3
        ]
      },
      {
        "input": [
          [
            "MinHeap",
            "insert",
            "insert",
            "extractMin",
            "extractMin"
          ],
          [
            [],
            [
              8
            ],
            [
              6
            ],
            [],
            []
          ]
        ],
        "expectedOutput": [
          null,
          null,
          null,
          6,
          8
        ]
      },
      {
        "input": [
          [
            "MinHeap",
            "insert",
            "insert",
            "insert",
            "extractMin",
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
            [
              0
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
          0,
          1
        ]
      },
      {
        "input": [
          [
            "MinHeap",
            "insert",
            "extractMin"
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
            "MinHeap",
            "insert",
            "insert",
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
            []
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
            "MinHeap",
            "insert",
            "insert",
            "insert",
            "extractMin"
          ],
          [
            [],
            [
              10
            ],
            [
              20
            ],
            [
              5
            ],
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
            "MinHeap",
            "insert",
            "insert",
            "extractMin"
          ],
          [
            [],
            [
              -5
            ],
            [
              -2
            ],
            []
          ]
        ],
        "expectedOutput": [
          null,
          null,
          null,
          -5
        ]
      },
      {
        "input": [
          [
            "MinHeap",
            "insert",
            "insert",
            "insert",
            "getMin"
          ],
          [
            [],
            [
              3
            ],
            [
              1
            ],
            [
              2
            ],
            []
          ]
        ],
        "expectedOutput": [
          null,
          null,
          null,
          null,
          1
        ]
      }
    ]
  },
  {
    "number": 103,
    "title": "Kth Largest Element in an Array",
    "topic": "Heaps",
    "difficulty": "Medium",
    "description": "Given an integer array `nums` and an integer `k`, return the `k`th largest element in the array. Can you solve it in O(n) average time complexity?",
    "constraints": [
      "1 <= k <= nums.length <= 10^5",
      "-10^4 <= nums[i] <= 10^4"
    ],
    "examples": [
      {
        "input": "nums = [3,2,1,5,6,4], k = 2",
        "output": "5",
        "explanation": "2nd largest is 5."
      },
      {
        "input": "nums = [3,2,3,1,2,4,5,5,6], k = 4",
        "output": "4",
        "explanation": "4th largest is 4."
      }
    ],
    "functionName": "findKthLargest",
    "returnType": "int",
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
            3,
            2,
            1,
            5,
            6,
            4
          ],
          2
        ],
        "expectedOutput": 5
      },
      {
        "input": [
          [
            3,
            2,
            3,
            1,
            2,
            4,
            5,
            5,
            6
          ],
          4
        ],
        "expectedOutput": 4
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
            2,
            1
          ],
          1
        ],
        "expectedOutput": 2
      },
      {
        "input": [
          [
            2,
            1
          ],
          2
        ],
        "expectedOutput": 1
      },
      {
        "input": [
          [
            7,
            10,
            4,
            3,
            20,
            15
          ],
          3
        ],
        "expectedOutput": 10
      },
      {
        "input": [
          [
            -1,
            2,
            0
          ],
          2
        ],
        "expectedOutput": 0
      },
      {
        "input": [
          [
            -1,
            -1
          ],
          2
        ],
        "expectedOutput": -1
      },
      {
        "input": [
          [
            1,
            2,
            3,
            4,
            5,
            6
          ],
          1
        ],
        "expectedOutput": 6
      },
      {
        "input": [
          [
            1,
            2,
            3,
            4,
            5,
            6
          ],
          6
        ],
        "expectedOutput": 1
      }
    ]
  },
  {
    "number": 104,
    "title": "Find Median From Data Stream",
    "topic": "Heaps",
    "difficulty": "Hard",
    "description": "The median is the middle value in an ordered integer list. Implement the `MedianFinder` class with `addNum(num)` and `findMedian()` in O(log n) time.",
    "constraints": [
      "-10^5 <= num <= 10^5",
      "There will be at least one element in the data structure before calling findMedian.",
      "At most 5 * 10^4 calls will be made to addNum and findMedian."
    ],
    "examples": [
      {
        "input": "MedianFinder mf = new MedianFinder(); mf.addNum(1); mf.addNum(2); mf.findMedian(); mf.addNum(3); mf.findMedian();",
        "output": "[null, null, null, 1.5, null, 2.0]",
        "explanation": "Medians found."
      }
    ],
    "functionName": "class MedianFinder",
    "returnType": "void",
    "isDesign": true,
    "parameters": [],
    "testCases": [
      {
        "input": [
          [
            "MedianFinder",
            "addNum",
            "addNum",
            "findMedian",
            "addNum",
            "findMedian"
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
          1.5,
          null,
          2
        ]
      },
      {
        "input": [
          [
            "MedianFinder",
            "addNum",
            "findMedian"
          ],
          [
            [],
            [
              2
            ],
            []
          ]
        ],
        "expectedOutput": [
          null,
          null,
          2
        ]
      },
      {
        "input": [
          [
            "MedianFinder",
            "addNum",
            "addNum",
            "findMedian"
          ],
          [
            [],
            [
              6
            ],
            [
              10
            ],
            []
          ]
        ],
        "expectedOutput": [
          null,
          null,
          null,
          8
        ]
      },
      {
        "input": [
          [
            "MedianFinder",
            "addNum",
            "addNum",
            "addNum",
            "findMedian"
          ],
          [
            [],
            [
              5
            ],
            [
              15
            ],
            [
              1
            ],
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
            "MedianFinder",
            "addNum",
            "addNum",
            "findMedian",
            "addNum",
            "findMedian"
          ],
          [
            [],
            [
              2
            ],
            [
              3
            ],
            [],
            [
              4
            ],
            []
          ]
        ],
        "expectedOutput": [
          null,
          null,
          null,
          2.5,
          null,
          3
        ]
      },
      {
        "input": [
          [
            "MedianFinder",
            "addNum",
            "findMedian",
            "addNum",
            "findMedian"
          ],
          [
            [],
            [
              -1
            ],
            [],
            [
              -2
            ],
            []
          ]
        ],
        "expectedOutput": [
          null,
          null,
          -1,
          null,
          -1.5
        ]
      },
      {
        "input": [
          [
            "MedianFinder",
            "addNum",
            "addNum",
            "addNum",
            "addNum",
            "findMedian"
          ],
          [
            [],
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
          null,
          null,
          null,
          null,
          null,
          2.5
        ]
      },
      {
        "input": [
          [
            "MedianFinder",
            "addNum",
            "addNum",
            "addNum",
            "findMedian"
          ],
          [
            [],
            [
              10
            ],
            [
              20
            ],
            [
              30
            ],
            []
          ]
        ],
        "expectedOutput": [
          null,
          null,
          null,
          null,
          20
        ]
      },
      {
        "input": [
          [
            "MedianFinder",
            "addNum",
            "findMedian"
          ],
          [
            [],
            [
              0
            ],
            []
          ]
        ],
        "expectedOutput": [
          null,
          null,
          0
        ]
      },
      {
        "input": [
          [
            "MedianFinder",
            "addNum",
            "addNum",
            "findMedian"
          ],
          [
            [],
            [
              -5
            ],
            [
              5
            ],
            []
          ]
        ],
        "expectedOutput": [
          null,
          null,
          null,
          0
        ]
      }
    ]
  },
  {
    "number": 105,
    "title": "Top K Frequent Elements",
    "topic": "Heaps",
    "difficulty": "Medium",
    "description": "Given an integer array `nums` and an integer `k`, return the `k` most frequent elements. You may return the answer in any order.",
    "constraints": [
      "1 <= nums.length <= 10^5",
      "-10^4 <= nums[i] <= 10^4",
      "k is in the range [1, the number of unique elements in the array].",
      "It is guaranteed that the answer is unique."
    ],
    "examples": [
      {
        "input": "nums = [1,1,1,2,2,3], k = 2",
        "output": "[1,2]",
        "explanation": "1 appears 3 times, 2 appears 2 times."
      },
      {
        "input": "nums = [1], k = 1",
        "output": "[1]",
        "explanation": "1 appears once."
      }
    ],
    "functionName": "topKFrequent",
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
            1,
            1,
            2,
            2,
            3
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
            2
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
            1,
            -1,
            2,
            -1,
            2,
            3
          ],
          2
        ],
        "expectedOutput": [
          -1,
          2
        ]
      },
      {
        "input": [
          [
            3,
            0,
            1,
            0
          ],
          1
        ],
        "expectedOutput": [
          0
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
            3,
            3
          ],
          1
        ],
        "expectedOutput": [
          3
        ]
      },
      {
        "input": [
          [
            5,
            5,
            5,
            5,
            2,
            2,
            2,
            1,
            1,
            3
          ],
          3
        ],
        "expectedOutput": [
          5,
          2,
          1
        ]
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
            10,
            20,
            10,
            30,
            20,
            10
          ],
          2
        ],
        "expectedOutput": [
          10,
          20
        ]
      },
      {
        "input": [
          [
            7,
            7,
            8,
            8,
            9
          ],
          2
        ],
        "expectedOutput": [
          7,
          8
        ]
      }
    ]
  }
];
