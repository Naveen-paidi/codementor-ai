/**
 * topic5_linkedList.js
 */

export const TOPIC_5_PROBLEMS = [
  {
    "number": 58,
    "title": "Find Middle of Linked List",
    "topic": "Linked Lists",
    "difficulty": "Easy",
    "description": "Given the head of a singly linked list, return the middle node of the linked list. If there are two middle nodes, return the second middle node.",
    "constraints": [
      "The number of nodes in the list is in the range [1, 100].",
      "1 <= Node.val <= 100"
    ],
    "examples": [
      {
        "input": "head = [1,2,3,4,5]",
        "output": "[3,4,5]",
        "explanation": "The middle node of the list is node 3."
      },
      {
        "input": "head = [1,2,3,4,5,6]",
        "output": "[4,5,6]",
        "explanation": "Since the list has two middle nodes with values 3 and 4, we return the second one."
      }
    ],
    "functionName": "middleNode",
    "returnType": "ListNode",
    "parameters": [
      {
        "name": "head",
        "type": "ListNode"
      }
    ],
    "testCases": [
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
          3,
          4,
          5
        ]
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
          ]
        ],
        "expectedOutput": [
          4,
          5,
          6
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
          2
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
          2,
          3
        ]
      },
      {
        "input": [
          [
            2,
            4,
            6,
            8
          ]
        ],
        "expectedOutput": [
          6,
          8
        ]
      },
      {
        "input": [
          [
            10,
            20,
            30,
            40,
            50,
            60,
            70
          ]
        ],
        "expectedOutput": [
          40,
          50,
          60,
          70
        ]
      },
      {
        "input": [
          [
            5,
            10
          ]
        ],
        "expectedOutput": [
          10
        ]
      },
      {
        "input": [
          [
            7,
            8,
            9,
            10
          ]
        ],
        "expectedOutput": [
          9,
          10
        ]
      },
      {
        "input": [
          [
            1,
            3,
            5,
            7,
            9
          ]
        ],
        "expectedOutput": [
          5,
          7,
          9
        ]
      }
    ]
  },
  {
    "number": 59,
    "title": "Find the Intersection Point of Y Linked List",
    "topic": "Linked Lists",
    "difficulty": "Medium",
    "description": "Given the heads of two singly linked-lists `headA` and `headB`, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return `null`.",
    "constraints": [
      "The number of nodes of listA is in the m.",
      "The number of nodes of listB is in the n.",
      "1 <= m, n <= 3 * 10^4",
      "1 <= Node.val <= 10^5"
    ],
    "examples": [
      {
        "input": "intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3",
        "output": "8",
        "explanation": "The intersected node's value is 8."
      }
    ],
    "functionName": "getIntersectionNode",
    "returnType": "ListNode",
    "parameters": [
      {
        "name": "headA",
        "type": "ListNode"
      },
      {
        "name": "headB",
        "type": "ListNode"
      }
    ],
    "testCases": [
      {
        "input": [
          [
            4,
            1,
            8,
            4,
            5
          ],
          [
            5,
            6,
            1,
            8,
            4,
            5
          ]
        ],
        "expectedOutput": 8
      },
      {
        "input": [
          [
            1,
            9,
            1,
            2,
            4
          ],
          [
            3,
            2,
            4
          ]
        ],
        "expectedOutput": 2
      },
      {
        "input": [
          [
            2,
            6,
            4
          ],
          [
            1,
            5
          ]
        ],
        "expectedOutput": null
      },
      {
        "input": [
          [
            1
          ],
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
            3
          ],
          [
            4,
            5,
            6
          ]
        ],
        "expectedOutput": null
      },
      {
        "input": [
          [
            10,
            20,
            30
          ],
          [
            5,
            20,
            30
          ]
        ],
        "expectedOutput": 20
      },
      {
        "input": [
          [
            7,
            8,
            9
          ],
          [
            7,
            8,
            9
          ]
        ],
        "expectedOutput": 7
      },
      {
        "input": [
          [
            3,
            6,
            9,
            12
          ],
          [
            12
          ]
        ],
        "expectedOutput": 12
      },
      {
        "input": [
          [
            1,
            2
          ],
          [
            3,
            4
          ]
        ],
        "expectedOutput": null
      },
      {
        "input": [
          [
            2,
            4,
            6,
            8,
            10
          ],
          [
            1,
            3,
            8,
            10
          ]
        ],
        "expectedOutput": 8
      }
    ]
  },
  {
    "number": 60,
    "title": "Check if Linked List Is a Palindrome",
    "topic": "Linked Lists",
    "difficulty": "Easy",
    "description": "Given the head of a singly linked list, return `true` if it is a palindrome or `false` otherwise in O(n) time and O(1) space.",
    "constraints": [
      "The number of nodes in the list is in the range [1, 10^5].",
      "0 <= Node.val <= 9"
    ],
    "examples": [
      {
        "input": "head = [1,2,2,1]",
        "output": "true",
        "explanation": "1 -> 2 -> 2 -> 1 is a palindrome."
      },
      {
        "input": "head = [1,2]",
        "output": "false",
        "explanation": "1 -> 2 is not a palindrome."
      }
    ],
    "functionName": "isPalindrome",
    "returnType": "boolean",
    "parameters": [
      {
        "name": "head",
        "type": "ListNode"
      }
    ],
    "testCases": [
      {
        "input": [
          [
            1,
            2,
            2,
            1
          ]
        ],
        "expectedOutput": true
      },
      {
        "input": [
          [
            1,
            2
          ]
        ],
        "expectedOutput": false
      },
      {
        "input": [
          [
            1
          ]
        ],
        "expectedOutput": true
      },
      {
        "input": [
          [
            1,
            2,
            3,
            2,
            1
          ]
        ],
        "expectedOutput": true
      },
      {
        "input": [
          [
            1,
            2,
            3,
            3,
            2,
            1
          ]
        ],
        "expectedOutput": true
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
        "expectedOutput": false
      },
      {
        "input": [
          [
            0,
            0
          ]
        ],
        "expectedOutput": true
      },
      {
        "input": [
          [
            1,
            0,
            1
          ]
        ],
        "expectedOutput": true
      },
      {
        "input": [
          [
            1,
            1,
            2,
            1
          ]
        ],
        "expectedOutput": false
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
        "expectedOutput": true
      }
    ]
  },
  {
    "number": 61,
    "title": "Detect a Loop in Linked List",
    "topic": "Linked Lists",
    "difficulty": "Medium",
    "description": "Given `head`, the head of a linked list, determine if the linked list has a cycle in it. Return `true` if there is a cycle, otherwise `false`.",
    "constraints": [
      "The number of the nodes in the list is in the range [0, 10^4].",
      "-10^5 <= Node.val <= 10^5"
    ],
    "examples": [
      {
        "input": "head = [3,2,0,-4], pos = 1",
        "output": "true",
        "explanation": "Cycle connects tail to index 1."
      },
      {
        "input": "head = [1,2], pos = 0",
        "output": "true",
        "explanation": "Cycle connects tail to node 0."
      },
      {
        "input": "head = [1], pos = -1",
        "output": "false",
        "explanation": "No cycle in list."
      }
    ],
    "functionName": "hasCycle",
    "returnType": "boolean",
    "parameters": [
      {
        "name": "head",
        "type": "ListNode"
      }
    ],
    "testCases": [
      {
        "input": [
          [
            3,
            2,
            0,
            -4
          ],
          1
        ],
        "expectedOutput": true
      },
      {
        "input": [
          [
            1,
            2
          ],
          0
        ],
        "expectedOutput": true
      },
      {
        "input": [
          [
            1
          ],
          -1
        ],
        "expectedOutput": false
      },
      {
        "input": [
          [],
          -1
        ],
        "expectedOutput": false
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
          -1
        ],
        "expectedOutput": false
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
          2
        ],
        "expectedOutput": true
      },
      {
        "input": [
          [
            1,
            2
          ],
          -1
        ],
        "expectedOutput": false
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
        "expectedOutput": true
      },
      {
        "input": [
          [
            10,
            20
          ],
          1
        ],
        "expectedOutput": true
      },
      {
        "input": [
          [
            5,
            6,
            7,
            8
          ],
          -1
        ],
        "expectedOutput": false
      }
    ]
  },
  {
    "number": 62,
    "title": "Remove Nth Node From the Back of Linked List",
    "topic": "Linked Lists",
    "difficulty": "Medium",
    "description": "Given the head of a linked list, remove the `n`th node from the end of the list and return its head in one pass.",
    "constraints": [
      "The number of nodes in the list is sz.",
      "1 <= sz <= 30",
      "0 <= Node.val <= 100",
      "1 <= n <= sz"
    ],
    "examples": [
      {
        "input": "head = [1,2,3,4,5], n = 2",
        "output": "[1,2,3,5]",
        "explanation": "Removing 2nd node from end (4)."
      },
      {
        "input": "head = [1], n = 1",
        "output": "[]",
        "explanation": "List becomes empty."
      }
    ],
    "functionName": "removeNthFromEnd",
    "returnType": "ListNode",
    "parameters": [
      {
        "name": "head",
        "type": "ListNode"
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
            2,
            3,
            4,
            5
          ],
          2
        ],
        "expectedOutput": [
          1,
          2,
          3,
          5
        ]
      },
      {
        "input": [
          [
            1
          ],
          1
        ],
        "expectedOutput": []
      },
      {
        "input": [
          [
            1,
            2
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
          2
        ]
      },
      {
        "input": [
          [
            1,
            2,
            3
          ],
          3
        ],
        "expectedOutput": [
          2,
          3
        ]
      },
      {
        "input": [
          [
            1,
            2,
            3
          ],
          1
        ],
        "expectedOutput": [
          1,
          2
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
          2
        ],
        "expectedOutput": [
          1,
          2,
          4
        ]
      },
      {
        "input": [
          [
            10,
            20,
            30,
            40
          ],
          4
        ],
        "expectedOutput": [
          20,
          30,
          40
        ]
      },
      {
        "input": [
          [
            5,
            10,
            15
          ],
          2
        ],
        "expectedOutput": [
          5,
          15
        ]
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
        "expectedOutput": [
          2,
          3,
          4,
          5,
          6
        ]
      }
    ]
  },
  {
    "number": 63,
    "title": "Find the Starting Point of a Loop in Linked List",
    "topic": "Linked Lists",
    "difficulty": "Medium",
    "description": "Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return `null`.",
    "constraints": [
      "The number of the nodes in the list is in the range [0, 10^4].",
      "-10^5 <= Node.val <= 10^5"
    ],
    "examples": [
      {
        "input": "head = [3,2,0,-4], pos = 1",
        "output": "tail connects to node index 1",
        "explanation": "Cycle begins at node with value 2."
      },
      {
        "input": "head = [1,2], pos = 0",
        "output": "tail connects to node index 0",
        "explanation": "Cycle begins at node with value 1."
      }
    ],
    "functionName": "detectCycle",
    "returnType": "ListNode",
    "parameters": [
      {
        "name": "head",
        "type": "ListNode"
      }
    ],
    "testCases": [
      {
        "input": [
          [
            3,
            2,
            0,
            -4
          ],
          1
        ],
        "expectedOutput": 2
      },
      {
        "input": [
          [
            1,
            2
          ],
          0
        ],
        "expectedOutput": 1
      },
      {
        "input": [
          [
            1
          ],
          -1
        ],
        "expectedOutput": null
      },
      {
        "input": [
          [
            1,
            2,
            3,
            4
          ],
          2
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
          ],
          -1
        ],
        "expectedOutput": null
      },
      {
        "input": [
          [
            10,
            20,
            30
          ],
          0
        ],
        "expectedOutput": 10
      },
      {
        "input": [
          [
            5
          ],
          0
        ],
        "expectedOutput": 5
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
          3
        ],
        "expectedOutput": 4
      },
      {
        "input": [
          [],
          -1
        ],
        "expectedOutput": null
      },
      {
        "input": [
          [
            7,
            8,
            9
          ],
          1
        ],
        "expectedOutput": 8
      }
    ]
  },
  {
    "number": 64,
    "title": "Length of Loop in Linked List",
    "topic": "Linked Lists",
    "difficulty": "Easy",
    "description": "Given the head of a linked list, count the number of nodes in the cycle. If there is no cycle, return 0.",
    "constraints": [
      "1 <= n <= 10^4",
      "1 <= Node.val <= 10^5"
    ],
    "examples": [
      {
        "input": "head = [25,14,19,33,10,21,39,90,58,45], c = 4",
        "output": "7",
        "explanation": "Loop consists of 7 nodes."
      },
      {
        "input": "head = [1,2,3], c = 0",
        "output": "0",
        "explanation": "No loop in list."
      }
    ],
    "functionName": "countNodesinLoop",
    "returnType": "int",
    "parameters": [
      {
        "name": "head",
        "type": "ListNode"
      }
    ],
    "testCases": [
      {
        "input": [
          [
            1,
            2,
            3,
            4,
            5
          ],
          2
        ],
        "expectedOutput": 4
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
        "expectedOutput": 0
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
            1,
            2
          ],
          1
        ],
        "expectedOutput": 2
      },
      {
        "input": [
          [
            1,
            2,
            3,
            4,
            5,
            6,
            7
          ],
          3
        ],
        "expectedOutput": 5
      },
      {
        "input": [
          [
            10,
            20,
            30
          ],
          0
        ],
        "expectedOutput": 0
      },
      {
        "input": [
          [
            4,
            5,
            6,
            7
          ],
          1
        ],
        "expectedOutput": 4
      },
      {
        "input": [
          [
            9,
            8,
            7,
            6,
            5
          ],
          4
        ],
        "expectedOutput": 2
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
          0
        ],
        "expectedOutput": 0
      },
      {
        "input": [
          [
            2,
            4,
            6,
            8,
            10
          ],
          2
        ],
        "expectedOutput": 4
      }
    ]
  },
  {
    "number": 65,
    "title": "Reverse a Linked List",
    "topic": "Linked Lists",
    "difficulty": "Easy",
    "description": "Given the head of a singly linked list, reverse the list, and return the reversed list.",
    "constraints": [
      "The number of nodes in the list is the range [0, 5000].",
      "-5000 <= Node.val <= 5000"
    ],
    "examples": [
      {
        "input": "head = [1,2,3,4,5]",
        "output": "[5,4,3,2,1]",
        "explanation": "List is reversed."
      },
      {
        "input": "head = [1,2]",
        "output": "[2,1]",
        "explanation": "List is reversed."
      }
    ],
    "functionName": "reverseList",
    "returnType": "ListNode",
    "parameters": [
      {
        "name": "head",
        "type": "ListNode"
      }
    ],
    "testCases": [
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
          5,
          4,
          3,
          2,
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
          []
        ],
        "expectedOutput": []
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
            10,
            20,
            30,
            40
          ]
        ],
        "expectedOutput": [
          40,
          30,
          20,
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
          -3,
          -2,
          -1
        ]
      },
      {
        "input": [
          [
            0,
            1,
            0
          ]
        ],
        "expectedOutput": [
          0,
          1,
          0
        ]
      },
      {
        "input": [
          [
            5,
            4,
            3,
            2,
            1,
            0
          ]
        ],
        "expectedOutput": [
          0,
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
            2,
            2,
            2
          ]
        ],
        "expectedOutput": [
          2,
          2,
          2
        ]
      }
    ]
  },
  {
    "number": 66,
    "title": "Merge Two Sorted Lists",
    "topic": "Linked Lists",
    "difficulty": "Easy",
    "description": "You are given the heads of two sorted linked lists `list1` and `list2`. Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists. Return the head of the merged linked list.",
    "constraints": [
      "The number of nodes in both lists is in the range [0, 50].",
      "-100 <= Node.val <= 100",
      "Both list1 and list2 are sorted in non-decreasing order."
    ],
    "examples": [
      {
        "input": "list1 = [1,2,4], list2 = [1,3,4]",
        "output": "[1,1,2,3,4,4]",
        "explanation": "Merged sorted list."
      },
      {
        "input": "list1 = [], list2 = []",
        "output": "[]",
        "explanation": "Both empty."
      }
    ],
    "functionName": "mergeTwoLists",
    "returnType": "ListNode",
    "parameters": [
      {
        "name": "list1",
        "type": "ListNode"
      },
      {
        "name": "list2",
        "type": "ListNode"
      }
    ],
    "testCases": [
      {
        "input": [
          [
            1,
            2,
            4
          ],
          [
            1,
            3,
            4
          ]
        ],
        "expectedOutput": [
          1,
          1,
          2,
          3,
          4,
          4
        ]
      },
      {
        "input": [
          [],
          []
        ],
        "expectedOutput": []
      },
      {
        "input": [
          [],
          [
            0
          ]
        ],
        "expectedOutput": [
          0
        ]
      },
      {
        "input": [
          [
            1
          ],
          [
            2
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
            2,
            5
          ],
          [
            1,
            3,
            4
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
            1,
            3,
            5
          ],
          [
            2,
            4,
            6
          ]
        ],
        "expectedOutput": [
          1,
          2,
          3,
          4,
          5,
          6
        ]
      },
      {
        "input": [
          [
            -2,
            0,
            2
          ],
          [
            -3,
            -1,
            1
          ]
        ],
        "expectedOutput": [
          -3,
          -2,
          -1,
          0,
          1,
          2
        ]
      },
      {
        "input": [
          [
            10,
            20
          ],
          [
            5,
            15,
            25
          ]
        ],
        "expectedOutput": [
          5,
          10,
          15,
          20,
          25
        ]
      },
      {
        "input": [
          [
            1,
            1
          ],
          [
            1,
            1
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
            3
          ],
          [
            1,
            2,
            4
          ]
        ],
        "expectedOutput": [
          1,
          2,
          3,
          4
        ]
      }
    ]
  },
  {
    "number": 67,
    "title": "Sort a Linked List of 0s, 1s and 2s",
    "topic": "Linked Lists",
    "difficulty": "Easy",
    "description": "Given a linked list of 0s, 1s and 2s, sort the linked list in non-decreasing order.",
    "constraints": [
      "1 <= n <= 10^5",
      "0 <= Node.val <= 2"
    ],
    "examples": [
      {
        "input": "head = [1,2,2,1,2,0,2,2]",
        "output": "[0,1,1,2,2,2,2,2]",
        "explanation": "Sorted 0s, 1s, and 2s."
      },
      {
        "input": "head = [2,2,0,1]",
        "output": "[0,1,2,2]",
        "explanation": "Sorted list."
      }
    ],
    "functionName": "segregate012",
    "returnType": "ListNode",
    "parameters": [
      {
        "name": "head",
        "type": "ListNode"
      }
    ],
    "testCases": [
      {
        "input": [
          [
            1,
            2,
            2,
            1,
            2,
            0,
            2,
            2
          ]
        ],
        "expectedOutput": [
          0,
          1,
          1,
          2,
          2,
          2,
          2,
          2
        ]
      },
      {
        "input": [
          [
            2,
            2,
            0,
            1
          ]
        ],
        "expectedOutput": [
          0,
          1,
          2,
          2
        ]
      },
      {
        "input": [
          [
            0
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
            0
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
            1,
            0
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
          [
            0,
            0,
            0
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
            1,
            1,
            1
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
          [
            2,
            2,
            2
          ]
        ],
        "expectedOutput": [
          2,
          2,
          2
        ]
      },
      {
        "input": [
          [
            1,
            2,
            0,
            1,
            2,
            0
          ]
        ],
        "expectedOutput": [
          0,
          0,
          1,
          1,
          2,
          2
        ]
      },
      {
        "input": [
          [
            2,
            0,
            2,
            1,
            1,
            0
          ]
        ],
        "expectedOutput": [
          0,
          0,
          1,
          1,
          2,
          2
        ]
      }
    ]
  },
  {
    "number": 68,
    "title": "Add Two Numbers Represented by Linked Lists",
    "topic": "Linked Lists",
    "difficulty": "Medium",
    "description": "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.",
    "constraints": [
      "The number of nodes in each linked list is in the range [1, 100].",
      "0 <= Node.val <= 9",
      "It is guaranteed that the list represents a number that does not have leading zeros."
    ],
    "examples": [
      {
        "input": "l1 = [2,4,3], l2 = [5,6,4]",
        "output": "[7,0,8]",
        "explanation": "342 + 465 = 807."
      },
      {
        "input": "l1 = [0], l2 = [0]",
        "output": "[0]",
        "explanation": "0 + 0 = 0."
      }
    ],
    "functionName": "addTwoNumbers",
    "returnType": "ListNode",
    "parameters": [
      {
        "name": "l1",
        "type": "ListNode"
      },
      {
        "name": "l2",
        "type": "ListNode"
      }
    ],
    "testCases": [
      {
        "input": [
          [
            2,
            4,
            3
          ],
          [
            5,
            6,
            4
          ]
        ],
        "expectedOutput": [
          7,
          0,
          8
        ]
      },
      {
        "input": [
          [
            0
          ],
          [
            0
          ]
        ],
        "expectedOutput": [
          0
        ]
      },
      {
        "input": [
          [
            9,
            9,
            9,
            9,
            9,
            9,
            9
          ],
          [
            9,
            9,
            9,
            9
          ]
        ],
        "expectedOutput": [
          8,
          9,
          9,
          9,
          0,
          0,
          0,
          1
        ]
      },
      {
        "input": [
          [
            1
          ],
          [
            9
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
            5
          ],
          [
            5
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
            1,
            8
          ],
          [
            0
          ]
        ],
        "expectedOutput": [
          1,
          8
        ]
      },
      {
        "input": [
          [
            2,
            4
          ],
          [
            5,
            6,
            4
          ]
        ],
        "expectedOutput": [
          7,
          0,
          5
        ]
      },
      {
        "input": [
          [
            9
          ],
          [
            1,
            9,
            9
          ]
        ],
        "expectedOutput": [
          0,
          0,
          0,
          1
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
            4,
            5,
            6
          ]
        ],
        "expectedOutput": [
          5,
          7,
          9
        ]
      },
      {
        "input": [
          [
            7
          ],
          [
            8
          ]
        ],
        "expectedOutput": [
          5,
          1
        ]
      }
    ]
  },
  {
    "number": 69,
    "title": "Rotate a Linked List",
    "topic": "Linked Lists",
    "difficulty": "Medium",
    "description": "Given the head of a linked list, rotate the list to the right by `k` places.",
    "constraints": [
      "The number of nodes in the list is in the range [0, 500].",
      "-100 <= Node.val <= 100",
      "0 <= k <= 2 * 10^9"
    ],
    "examples": [
      {
        "input": "head = [1,2,3,4,5], k = 2",
        "output": "[4,5,1,2,3]",
        "explanation": "Rotates right by 2 places."
      },
      {
        "input": "head = [0,1,2], k = 4",
        "output": "[2,0,1]",
        "explanation": "Rotates right by 4 places."
      }
    ],
    "functionName": "rotateRight",
    "returnType": "ListNode",
    "parameters": [
      {
        "name": "head",
        "type": "ListNode"
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
            2,
            3,
            4,
            5
          ],
          2
        ],
        "expectedOutput": [
          4,
          5,
          1,
          2,
          3
        ]
      },
      {
        "input": [
          [
            0,
            1,
            2
          ],
          4
        ],
        "expectedOutput": [
          2,
          0,
          1
        ]
      },
      {
        "input": [
          [],
          0
        ],
        "expectedOutput": []
      },
      {
        "input": [
          [
            1
          ],
          99
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
          1
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
            1,
            2,
            3,
            4
          ],
          0
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
            1,
            2,
            3,
            4,
            5
          ],
          5
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
            1,
            2,
            3
          ],
          2000000000
        ],
        "expectedOutput": [
          2,
          3,
          1
        ]
      },
      {
        "input": [
          [
            10,
            20,
            30
          ],
          1
        ],
        "expectedOutput": [
          30,
          10,
          20
        ]
      }
    ]
  },
  {
    "number": 70,
    "title": "Sort a Linked List",
    "topic": "Linked Lists",
    "difficulty": "Medium",
    "description": "Given the head of a linked list, return the list after sorting it in ascending order in O(n log n) time and O(log n) auxiliary space.",
    "constraints": [
      "The number of nodes in the list is in the range [0, 5 * 10^4].",
      "-10^5 <= Node.val <= 10^5"
    ],
    "examples": [
      {
        "input": "head = [4,2,1,3]",
        "output": "[1,2,3,4]",
        "explanation": "Sorted list."
      },
      {
        "input": "head = [-1,5,3,4,0]",
        "output": "[-1,0,3,4,5]",
        "explanation": "Sorted list."
      }
    ],
    "functionName": "sortList",
    "returnType": "ListNode",
    "parameters": [
      {
        "name": "head",
        "type": "ListNode"
      }
    ],
    "testCases": [
      {
        "input": [
          [
            4,
            2,
            1,
            3
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
            -1,
            5,
            3,
            4,
            0
          ]
        ],
        "expectedOutput": [
          -1,
          0,
          3,
          4,
          5
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
            3,
            2
          ]
        ],
        "expectedOutput": [
          2,
          3
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
          4,
          5
        ]
      },
      {
        "input": [
          [
            1,
            3,
            2,
            5,
            4
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
            10,
            -10,
            20,
            -20
          ]
        ],
        "expectedOutput": [
          -20,
          -10,
          10,
          20
        ]
      },
      {
        "input": [
          [
            2,
            2,
            1,
            1
          ]
        ],
        "expectedOutput": [
          1,
          1,
          2,
          2
        ]
      },
      {
        "input": [
          [
            9,
            1,
            8,
            2,
            7,
            3
          ]
        ],
        "expectedOutput": [
          1,
          2,
          3,
          7,
          8,
          9
        ]
      }
    ]
  },
  {
    "number": 71,
    "title": "Clone a Linked List With Random and Next Pointers",
    "topic": "Linked Lists",
    "difficulty": "Medium",
    "description": "A linked list of length `n` is given such that each node contains an additional random pointer, which could point to any node in the list, or `null`. Construct a deep copy of the list.",
    "constraints": [
      "0 <= n <= 1000",
      "-10^4 <= Node.val <= 10^4",
      "Node.random is null or is pointing to some node in the linked list."
    ],
    "examples": [
      {
        "input": "head = [[7,null],[13,0],[11,4],[10,2],[1,0]]",
        "output": "[[7,null],[13,0],[11,4],[10,2],[1,0]]",
        "explanation": "Deep copy with random pointers."
      }
    ],
    "functionName": "copyRandomList",
    "returnType": "Node",
    "parameters": [
      {
        "name": "head",
        "type": "Node"
      }
    ],
    "testCases": [
      {
        "input": [
          [
            [
              7,
              null
            ],
            [
              13,
              0
            ],
            [
              11,
              4
            ],
            [
              10,
              2
            ],
            [
              1,
              0
            ]
          ]
        ],
        "expectedOutput": [
          [
            7,
            null
          ],
          [
            13,
            0
          ],
          [
            11,
            4
          ],
          [
            10,
            2
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
              2,
              1
            ]
          ]
        ],
        "expectedOutput": [
          [
            1,
            1
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
              3,
              null
            ],
            [
              3,
              0
            ],
            [
              3,
              null
            ]
          ]
        ],
        "expectedOutput": [
          [
            3,
            null
          ],
          [
            3,
            0
          ],
          [
            3,
            null
          ]
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
              1,
              null
            ]
          ]
        ],
        "expectedOutput": [
          [
            1,
            null
          ]
        ]
      },
      {
        "input": [
          [
            [
              1,
              0
            ]
          ]
        ],
        "expectedOutput": [
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
              2,
              null
            ],
            [
              4,
              0
            ]
          ]
        ],
        "expectedOutput": [
          [
            2,
            null
          ],
          [
            4,
            0
          ]
        ]
      },
      {
        "input": [
          [
            [
              5,
              1
            ],
            [
              6,
              0
            ]
          ]
        ],
        "expectedOutput": [
          [
            5,
            1
          ],
          [
            6,
            0
          ]
        ]
      },
      {
        "input": [
          [
            [
              1,
              null
            ],
            [
              2,
              null
            ],
            [
              3,
              null
            ]
          ]
        ],
        "expectedOutput": [
          [
            1,
            null
          ],
          [
            2,
            null
          ],
          [
            3,
            null
          ]
        ]
      },
      {
        "input": [
          [
            [
              10,
              2
            ],
            [
              20,
              0
            ],
            [
              30,
              1
            ]
          ]
        ],
        "expectedOutput": [
          [
            10,
            2
          ],
          [
            20,
            0
          ],
          [
            30,
            1
          ]
        ]
      }
    ]
  },
  {
    "number": 72,
    "title": "Reverse Linked List in Groups of K",
    "topic": "Linked Lists",
    "difficulty": "Hard",
    "description": "Given the head of a linked list, reverse the nodes of the list `k` at a time, and return the modified list. `k` is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of `k` then left-out nodes in the end should remain as it is.",
    "constraints": [
      "The number of nodes in the list is n.",
      "1 <= k <= n <= 5000",
      "0 <= Node.val <= 1000"
    ],
    "examples": [
      {
        "input": "head = [1,2,3,4,5], k = 2",
        "output": "[2,1,4,3,5]",
        "explanation": "Reverse every 2 nodes."
      },
      {
        "input": "head = [1,2,3,4,5], k = 3",
        "output": "[3,2,1,4,5]",
        "explanation": "Reverse first 3 nodes."
      }
    ],
    "functionName": "reverseKGroup",
    "returnType": "ListNode",
    "parameters": [
      {
        "name": "head",
        "type": "ListNode"
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
            2,
            3,
            4,
            5
          ],
          2
        ],
        "expectedOutput": [
          2,
          1,
          4,
          3,
          5
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
          2,
          1,
          4,
          5
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
          1
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
          2
        ],
        "expectedOutput": [
          2,
          1,
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
            4,
            5,
            6
          ],
          3
        ],
        "expectedOutput": [
          3,
          2,
          1,
          6,
          5,
          4
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
          4,
          3,
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
            4,
            5,
            6,
            7
          ],
          2
        ],
        "expectedOutput": [
          2,
          1,
          4,
          3,
          6,
          5,
          7
        ]
      },
      {
        "input": [
          [
            10,
            20,
            30,
            40
          ],
          3
        ],
        "expectedOutput": [
          30,
          20,
          10,
          40
        ]
      }
    ]
  },
  {
    "number": 73,
    "title": "Flattening of a Linked List",
    "topic": "Linked Lists",
    "difficulty": "Medium",
    "description": "Given a Linked List of size `n`, where every node represents a sub-linked-list and contains two pointers: `next` pointer to the next node, and `bottom` pointer to a sub-linked-list where nodes are also sorted. Flatten the list into a single sorted bottom-linked list.",
    "constraints": [
      "0 <= n <= 500",
      "1 <= Node.val <= 1000"
    ],
    "examples": [
      {
        "input": "5 -> 10 -> 19; bottom lists sorted",
        "output": "5->7->8->10->19->20...",
        "explanation": "Merged flattened sorted list."
      }
    ],
    "functionName": "flatten",
    "returnType": "Node",
    "parameters": [
      {
        "name": "root",
        "type": "Node"
      }
    ],
    "testCases": [
      {
        "input": [
          [
            [
              5,
              7,
              8
            ],
            [
              10,
              20
            ],
            [
              19,
              22,
              28
            ]
          ]
        ],
        "expectedOutput": [
          5,
          7,
          8,
          10,
          19,
          20,
          22,
          28
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
              3
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
          [
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
          [
            [
              4
            ],
            [
              2,
              6
            ],
            [
              1,
              3,
              5
            ]
          ]
        ],
        "expectedOutput": [
          1,
          2,
          3,
          4,
          5,
          6
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
              10
            ],
            [
              20
            ],
            [
              30
            ]
          ]
        ],
        "expectedOutput": [
          10,
          20,
          30
        ]
      },
      {
        "input": [
          [
            [
              1,
              4
            ],
            [
              2,
              5
            ],
            [
              3,
              6
            ]
          ]
        ],
        "expectedOutput": [
          1,
          2,
          3,
          4,
          5,
          6
        ]
      },
      {
        "input": [
          [
            [
              5,
              15
            ],
            [
              10,
              20
            ]
          ]
        ],
        "expectedOutput": [
          5,
          10,
          15,
          20
        ]
      },
      {
        "input": [
          [
            [
              2,
              3,
              4
            ]
          ]
        ],
        "expectedOutput": [
          2,
          3,
          4
        ]
      },
      {
        "input": [
          [
            [
              1,
              9
            ],
            [
              2,
              8
            ],
            [
              3,
              7
            ]
          ]
        ],
        "expectedOutput": [
          1,
          2,
          3,
          7,
          8,
          9
        ]
      }
    ]
  },
  {
    "number": 74,
    "title": "Remove Duplicates From Sorted List",
    "topic": "Linked Lists",
    "difficulty": "Easy",
    "description": "Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.",
    "constraints": [
      "The number of nodes in the list is in the range [0, 300].",
      "-100 <= Node.val <= 100",
      "The list is guaranteed to be sorted in ascending order."
    ],
    "examples": [
      {
        "input": "head = [1,1,2]",
        "output": "[1,2]",
        "explanation": "Duplicate 1 removed."
      },
      {
        "input": "head = [1,1,2,3,3]",
        "output": "[1,2,3]",
        "explanation": "Duplicates removed."
      }
    ],
    "functionName": "deleteDuplicates",
    "returnType": "ListNode",
    "parameters": [
      {
        "name": "head",
        "type": "ListNode"
      }
    ],
    "testCases": [
      {
        "input": [
          [
            1,
            1,
            2
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
            1,
            1,
            2,
            3,
            3
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
          []
        ],
        "expectedOutput": []
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
            1,
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
            2,
            3
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
          [
            1,
            2,
            2,
            2,
            3
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
          [
            -1,
            -1,
            0,
            0,
            1
          ]
        ],
        "expectedOutput": [
          -1,
          0,
          1
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2,
            2
          ]
        ],
        "expectedOutput": [
          2
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
            3
          ]
        ],
        "expectedOutput": [
          1,
          2,
          3
        ]
      }
    ]
  },
  {
    "number": 75,
    "title": "Reorder List",
    "topic": "Linked Lists",
    "difficulty": "Medium",
    "description": "You are given the head of a singly linked-list: `L0 → L1 → … → Ln - 1 → Ln`. Reorder the list to be: `L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …` in-place.",
    "constraints": [
      "The number of nodes in the list is in the range [1, 5 * 10^4].",
      "1 <= Node.val <= 1000"
    ],
    "examples": [
      {
        "input": "head = [1,2,3,4]",
        "output": "[1,4,2,3]",
        "explanation": "Reordered list."
      },
      {
        "input": "head = [1,2,3,4,5]",
        "output": "[1,5,2,4,3]",
        "explanation": "Reordered list."
      }
    ],
    "functionName": "reorderList",
    "returnType": "ListNode",
    "parameters": [
      {
        "name": "head",
        "type": "ListNode"
      }
    ],
    "testCases": [
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
          1,
          4,
          2,
          3
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
          5,
          2,
          4,
          3
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
          1,
          2
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
          1,
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
            5,
            6
          ]
        ],
        "expectedOutput": [
          1,
          6,
          2,
          5,
          3,
          4
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
          10,
          40,
          20,
          30
        ]
      },
      {
        "input": [
          [
            2,
            4,
            6,
            8,
            10
          ]
        ],
        "expectedOutput": [
          2,
          10,
          4,
          8,
          6
        ]
      },
      {
        "input": [
          [
            5,
            4,
            3
          ]
        ],
        "expectedOutput": [
          5,
          3,
          4
        ]
      },
      {
        "input": [
          [
            1,
            2,
            3,
            4,
            5,
            6,
            7
          ]
        ],
        "expectedOutput": [
          1,
          7,
          2,
          6,
          3,
          5,
          4
        ]
      }
    ]
  }
];
