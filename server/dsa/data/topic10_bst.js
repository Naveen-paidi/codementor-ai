/**
 * topic10_bst.js
 */

export const TOPIC_10_PROBLEMS = [
  {
    "number": 122,
    "title": "Insert a Given Node in BST",
    "topic": "Binary Search Trees",
    "difficulty": "Medium",
    "description": "You are given the root node of a binary search tree (BST) and a value to insert into the tree. Return the root node of the BST after the insertion.",
    "constraints": [
      "The number of nodes in the tree will be in the range [0, 10^4].",
      "-10^8 <= Node.val <= 10^8",
      "All values are unique.",
      "-10^8 <= val <= 10^8"
    ],
    "examples": [
      {
        "input": "root = [4,2,7,1,3], val = 5",
        "output": "[4,2,7,1,3,5]",
        "explanation": "Inserted 5 as left child of 7."
      },
      {
        "input": "root = [40,20,60,10,30,50,70], val = 25",
        "output": "[40,20,60,10,30,50,70,null,null,25]",
        "explanation": "Inserted 25 as left child of 30."
      }
    ],
    "functionName": "insertIntoBST",
    "returnType": "TreeNode",
    "parameters": [
      {
        "name": "root",
        "type": "TreeNode"
      },
      {
        "name": "val",
        "type": "int"
      }
    ],
    "testCases": [
      {
        "input": [
          [
            4,
            2,
            7,
            1,
            3
          ],
          5
        ],
        "expectedOutput": [
          4,
          2,
          7,
          1,
          3,
          5
        ]
      },
      {
        "input": [
          [
            40,
            20,
            60,
            10,
            30,
            50,
            70
          ],
          25
        ],
        "expectedOutput": [
          40,
          20,
          60,
          10,
          30,
          50,
          70,
          null,
          null,
          25
        ]
      },
      {
        "input": [
          [],
          5
        ],
        "expectedOutput": [
          5
        ]
      },
      {
        "input": [
          [
            2,
            1,
            3
          ],
          4
        ],
        "expectedOutput": [
          2,
          1,
          3,
          null,
          null,
          null,
          4
        ]
      },
      {
        "input": [
          [
            5,
            3,
            7
          ],
          1
        ],
        "expectedOutput": [
          5,
          3,
          7,
          1
        ]
      },
      {
        "input": [
          [
            10,
            5,
            20
          ],
          15
        ],
        "expectedOutput": [
          10,
          5,
          20,
          null,
          null,
          15
        ]
      },
      {
        "input": [
          [
            1
          ],
          2
        ],
        "expectedOutput": [
          1,
          null,
          2
        ]
      },
      {
        "input": [
          [
            3,
            2
          ],
          1
        ],
        "expectedOutput": [
          3,
          2,
          null,
          1
        ]
      },
      {
        "input": [
          [
            8,
            4,
            12
          ],
          10
        ],
        "expectedOutput": [
          8,
          4,
          12,
          null,
          null,
          10
        ]
      },
      {
        "input": [
          [
            6,
            2,
            8
          ],
          7
        ],
        "expectedOutput": [
          6,
          2,
          8,
          null,
          null,
          7
        ]
      }
    ]
  },
  {
    "number": 123,
    "title": "Lowest Common Ancestor in BST",
    "topic": "Binary Search Trees",
    "difficulty": "Medium",
    "description": "Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.",
    "constraints": [
      "The number of nodes in the tree is in the range [2, 10^5].",
      "-10^9 <= Node.val <= 10^9",
      "All Node.val are unique.",
      "p != q",
      "p and q will exist in the BST."
    ],
    "examples": [
      {
        "input": "root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8",
        "output": "6",
        "explanation": "LCA of 2 and 8 is 6."
      },
      {
        "input": "root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4",
        "output": "2",
        "explanation": "LCA of 2 and 4 is 2."
      }
    ],
    "functionName": "lowestCommonAncestorBST",
    "returnType": "int",
    "parameters": [
      {
        "name": "root",
        "type": "TreeNode"
      },
      {
        "name": "p",
        "type": "int"
      },
      {
        "name": "q",
        "type": "int"
      }
    ],
    "testCases": [
      {
        "input": [
          [
            6,
            2,
            8,
            0,
            4,
            7,
            9,
            null,
            null,
            3,
            5
          ],
          2,
          8
        ],
        "expectedOutput": 6
      },
      {
        "input": [
          [
            6,
            2,
            8,
            0,
            4,
            7,
            9,
            null,
            null,
            3,
            5
          ],
          2,
          4
        ],
        "expectedOutput": 2
      },
      {
        "input": [
          [
            2,
            1
          ],
          2,
          1
        ],
        "expectedOutput": 2
      },
      {
        "input": [
          [
            5,
            3,
            6,
            2,
            4,
            null,
            null,
            1
          ],
          1,
          4
        ],
        "expectedOutput": 3
      },
      {
        "input": [
          [
            10,
            5,
            15,
            3,
            7,
            12,
            18
          ],
          3,
          7
        ],
        "expectedOutput": 5
      },
      {
        "input": [
          [
            10,
            5,
            15,
            3,
            7,
            12,
            18
          ],
          3,
          18
        ],
        "expectedOutput": 10
      },
      {
        "input": [
          [
            20,
            10,
            30
          ],
          10,
          30
        ],
        "expectedOutput": 20
      },
      {
        "input": [
          [
            8,
            4,
            12,
            2,
            6
          ],
          2,
          6
        ],
        "expectedOutput": 4
      },
      {
        "input": [
          [
            8,
            4,
            12,
            2,
            6
          ],
          2,
          12
        ],
        "expectedOutput": 8
      },
      {
        "input": [
          [
            3,
            1,
            4,
            null,
            2
          ],
          2,
          4
        ],
        "expectedOutput": 3
      }
    ]
  },
  {
    "number": 124,
    "title": "Delete a Node in BST",
    "topic": "Binary Search Trees",
    "difficulty": "Medium",
    "description": "Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST.",
    "constraints": [
      "The number of nodes in the tree is in the range [0, 10^4].",
      "-10^5 <= Node.val <= 10^5",
      "Each node has a unique value.",
      "root is a valid binary search tree.",
      "-10^5 <= key <= 10^5"
    ],
    "examples": [
      {
        "input": "root = [5,3,6,2,4,null,7], key = 3",
        "output": "[5,4,6,2,null,null,7]",
        "explanation": "Key 3 deleted and replaced with inorder successor."
      }
    ],
    "functionName": "deleteNode",
    "returnType": "TreeNode",
    "parameters": [
      {
        "name": "root",
        "type": "TreeNode"
      },
      {
        "name": "key",
        "type": "int"
      }
    ],
    "testCases": [
      {
        "input": [
          [
            5,
            3,
            6,
            2,
            4,
            null,
            7
          ],
          3
        ],
        "expectedOutput": [
          5,
          4,
          6,
          2,
          null,
          null,
          7
        ]
      },
      {
        "input": [
          [
            5,
            3,
            6,
            2,
            4,
            null,
            7
          ],
          0
        ],
        "expectedOutput": [
          5,
          3,
          6,
          2,
          4,
          null,
          7
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
          1
        ],
        "expectedOutput": []
      },
      {
        "input": [
          [
            2,
            1,
            3
          ],
          2
        ],
        "expectedOutput": [
          3,
          1
        ]
      },
      {
        "input": [
          [
            2,
            1,
            3
          ],
          1
        ],
        "expectedOutput": [
          2,
          null,
          3
        ]
      },
      {
        "input": [
          [
            2,
            1,
            3
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
            10,
            5,
            15
          ],
          5
        ],
        "expectedOutput": [
          10,
          null,
          15
        ]
      },
      {
        "input": [
          [
            10,
            5,
            15
          ],
          15
        ],
        "expectedOutput": [
          10,
          5
        ]
      },
      {
        "input": [
          [
            4,
            2,
            6,
            1,
            3,
            5,
            7
          ],
          2
        ],
        "expectedOutput": [
          4,
          3,
          6,
          1,
          null,
          5,
          7
        ]
      }
    ]
  },
  {
    "number": 125,
    "title": "Inorder Successor and Predecessor in BST",
    "topic": "Binary Search Trees",
    "difficulty": "Medium",
    "description": "There is BST given with the root node. You need to find the in-order successor and predecessor of a given key. If either doesn't exist, return -1 for it. Return `[predecessor, successor]`.",
    "constraints": [
      "1 <= Number of nodes <= 10^5",
      "1 <= key <= 10^5"
    ],
    "examples": [
      {
        "input": "root = [50,30,70,20,40,60,80], key = 65",
        "output": "[60, 70]",
        "explanation": "Predecessor is 60, Successor is 70."
      },
      {
        "input": "root = [20,10,30], key = 10",
        "output": "[-1, 20]",
        "explanation": "No predecessor for 10, successor is 20."
      }
    ],
    "functionName": "succPredBST",
    "returnType": "int[]",
    "parameters": [
      {
        "name": "root",
        "type": "TreeNode"
      },
      {
        "name": "key",
        "type": "int"
      }
    ],
    "testCases": [
      {
        "input": [
          [
            50,
            30,
            70,
            20,
            40,
            60,
            80
          ],
          65
        ],
        "expectedOutput": [
          60,
          70
        ]
      },
      {
        "input": [
          [
            20,
            10,
            30
          ],
          10
        ],
        "expectedOutput": [
          -1,
          20
        ]
      },
      {
        "input": [
          [
            20,
            10,
            30
          ],
          30
        ],
        "expectedOutput": [
          20,
          -1
        ]
      },
      {
        "input": [
          [
            20,
            10,
            30
          ],
          20
        ],
        "expectedOutput": [
          10,
          30
        ]
      },
      {
        "input": [
          [
            5,
            2,
            7,
            1,
            4,
            6,
            9
          ],
          4
        ],
        "expectedOutput": [
          2,
          5
        ]
      },
      {
        "input": [
          [
            10
          ],
          10
        ],
        "expectedOutput": [
          -1,
          -1
        ]
      },
      {
        "input": [
          [
            10,
            5
          ],
          5
        ],
        "expectedOutput": [
          -1,
          10
        ]
      },
      {
        "input": [
          [
            10,
            null,
            15
          ],
          15
        ],
        "expectedOutput": [
          10,
          -1
        ]
      },
      {
        "input": [
          [
            8,
            4,
            12,
            2,
            6,
            10,
            14
          ],
          6
        ],
        "expectedOutput": [
          4,
          8
        ]
      },
      {
        "input": [
          [
            8,
            4,
            12,
            2,
            6,
            10,
            14
          ],
          8
        ],
        "expectedOutput": [
          6,
          10
        ]
      }
    ]
  },
  {
    "number": 126,
    "title": "Kth Smallest and Largest Element in BST",
    "topic": "Binary Search Trees",
    "difficulty": "Medium",
    "description": "Given the root of a binary search tree, and an integer `k`, return the `k`th smallest value (1-indexed) of all the values of the nodes in the tree.",
    "constraints": [
      "The number of nodes in the tree is n.",
      "1 <= k <= n <= 10^4",
      "0 <= Node.val <= 10^4"
    ],
    "examples": [
      {
        "input": "root = [3,1,4,null,2], k = 1",
        "output": "1",
        "explanation": "1st smallest element is 1."
      },
      {
        "input": "root = [5,3,6,2,4,null,null,1], k = 3",
        "output": "3",
        "explanation": "3rd smallest element is 3."
      }
    ],
    "functionName": "kthSmallest",
    "returnType": "int",
    "parameters": [
      {
        "name": "root",
        "type": "TreeNode"
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
            1,
            4,
            null,
            2
          ],
          1
        ],
        "expectedOutput": 1
      },
      {
        "input": [
          [
            5,
            3,
            6,
            2,
            4,
            null,
            null,
            1
          ],
          3
        ],
        "expectedOutput": 3
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
            1,
            3
          ],
          2
        ],
        "expectedOutput": 2
      },
      {
        "input": [
          [
            2,
            1,
            3
          ],
          3
        ],
        "expectedOutput": 3
      },
      {
        "input": [
          [
            4,
            2,
            5,
            1,
            3
          ],
          4
        ],
        "expectedOutput": 4
      },
      {
        "input": [
          [
            4,
            2,
            5,
            1,
            3
          ],
          5
        ],
        "expectedOutput": 5
      },
      {
        "input": [
          [
            10,
            5,
            20,
            3,
            7
          ],
          1
        ],
        "expectedOutput": 3
      },
      {
        "input": [
          [
            10,
            5,
            20,
            3,
            7
          ],
          3
        ],
        "expectedOutput": 7
      },
      {
        "input": [
          [
            8,
            4,
            12,
            2,
            6
          ],
          3
        ],
        "expectedOutput": 6
      }
    ]
  },
  {
    "number": 127,
    "title": "Check if a Tree Is a BST",
    "topic": "Binary Search Trees",
    "difficulty": "Medium",
    "description": "Given the root of a binary tree, determine if it is a valid binary search tree (BST).",
    "constraints": [
      "The number of nodes in the tree is in the range [1, 10^4].",
      "-2^31 <= Node.val <= 2^31 - 1"
    ],
    "examples": [
      {
        "input": "root = [2,1,3]",
        "output": "true",
        "explanation": "Valid BST."
      },
      {
        "input": "root = [5,1,4,null,null,3,6]",
        "output": "false",
        "explanation": "Root node's value is 5 but right child's value is 4."
      }
    ],
    "functionName": "isValidBST",
    "returnType": "boolean",
    "parameters": [
      {
        "name": "root",
        "type": "TreeNode"
      }
    ],
    "testCases": [
      {
        "input": [
          [
            2,
            1,
            3
          ]
        ],
        "expectedOutput": true
      },
      {
        "input": [
          [
            5,
            1,
            4,
            null,
            null,
            3,
            6
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
            2,
            2,
            2
          ]
        ],
        "expectedOutput": false
      },
      {
        "input": [
          [
            5,
            4,
            6,
            null,
            null,
            3,
            7
          ]
        ],
        "expectedOutput": false
      },
      {
        "input": [
          [
            10,
            5,
            15,
            null,
            null,
            6,
            20
          ]
        ],
        "expectedOutput": false
      },
      {
        "input": [
          [
            10,
            5,
            15,
            3,
            7,
            12,
            18
          ]
        ],
        "expectedOutput": true
      },
      {
        "input": [
          [
            2147483647
          ]
        ],
        "expectedOutput": true
      },
      {
        "input": [
          [
            -2147483648
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
      }
    ]
  },
  {
    "number": 128,
    "title": "Construct a BST From Preorder Traversal",
    "topic": "Binary Search Trees",
    "difficulty": "Medium",
    "description": "Given an array of integers `preorder`, which represents the preorder traversal of a BST, construct the tree and return its root in O(n) time.",
    "constraints": [
      "1 <= preorder.length <= 100",
      "1 <= preorder[i] <= 1000",
      "All values are unique."
    ],
    "examples": [
      {
        "input": "preorder = [8,5,1,7,10,12]",
        "output": "[8,5,10,1,7,null,12]",
        "explanation": "Constructed BST."
      },
      {
        "input": "preorder = [1,3]",
        "output": "[1,null,3]",
        "explanation": "Constructed BST."
      }
    ],
    "functionName": "bstFromPreorder",
    "returnType": "TreeNode",
    "parameters": [
      {
        "name": "preorder",
        "type": "int[]"
      }
    ],
    "testCases": [
      {
        "input": [
          [
            8,
            5,
            1,
            7,
            10,
            12
          ]
        ],
        "expectedOutput": [
          8,
          5,
          10,
          1,
          7,
          null,
          12
        ]
      },
      {
        "input": [
          [
            1,
            3
          ]
        ],
        "expectedOutput": [
          1,
          null,
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
            2,
            1,
            3
          ]
        ],
        "expectedOutput": [
          2,
          1,
          3
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
          null,
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
          null,
          2,
          null,
          3
        ]
      },
      {
        "input": [
          [
            4,
            2
          ]
        ],
        "expectedOutput": [
          4,
          2
        ]
      },
      {
        "input": [
          [
            10,
            5,
            15
          ]
        ],
        "expectedOutput": [
          10,
          5,
          15
        ]
      },
      {
        "input": [
          [
            6,
            4,
            2,
            5,
            8,
            7,
            9
          ]
        ],
        "expectedOutput": [
          6,
          4,
          8,
          2,
          5,
          7,
          9
        ]
      },
      {
        "input": [
          [
            5,
            3,
            4
          ]
        ],
        "expectedOutput": [
          5,
          3,
          null,
          null,
          4
        ]
      }
    ]
  },
  {
    "number": 129,
    "title": "Two Sum in BST",
    "topic": "Binary Search Trees",
    "difficulty": "Easy",
    "description": "Given the root of a binary search tree and an integer `k`, return `true` if there exist two elements in the BST such that their sum is equal to `k`, or `false` otherwise in O(n) time and O(h) space.",
    "constraints": [
      "The number of nodes in the tree is in the range [1, 10^4].",
      "-10^4 <= Node.val <= 10^4",
      "root is guaranteed to be a valid binary search tree.",
      "-10^5 <= k <= 10^5"
    ],
    "examples": [
      {
        "input": "root = [5,3,6,2,4,null,7], k = 9",
        "output": "true",
        "explanation": "Nodes 2 and 7 sum to 9."
      },
      {
        "input": "root = [5,3,6,2,4,null,7], k = 28",
        "output": "false",
        "explanation": "No two nodes sum to 28."
      }
    ],
    "functionName": "findTarget",
    "returnType": "boolean",
    "parameters": [
      {
        "name": "root",
        "type": "TreeNode"
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
            5,
            3,
            6,
            2,
            4,
            null,
            7
          ],
          9
        ],
        "expectedOutput": true
      },
      {
        "input": [
          [
            5,
            3,
            6,
            2,
            4,
            null,
            7
          ],
          28
        ],
        "expectedOutput": false
      },
      {
        "input": [
          [
            1
          ],
          2
        ],
        "expectedOutput": false
      },
      {
        "input": [
          [
            2,
            1,
            3
          ],
          4
        ],
        "expectedOutput": true
      },
      {
        "input": [
          [
            2,
            1,
            3
          ],
          3
        ],
        "expectedOutput": true
      },
      {
        "input": [
          [
            2,
            1,
            3
          ],
          1
        ],
        "expectedOutput": false
      },
      {
        "input": [
          [
            10,
            5,
            15,
            null,
            null,
            11,
            20
          ],
          21
        ],
        "expectedOutput": true
      },
      {
        "input": [
          [
            0,
            -2,
            2
          ],
          0
        ],
        "expectedOutput": true
      },
      {
        "input": [
          [
            1,
            null,
            2,
            null,
            3
          ],
          5
        ],
        "expectedOutput": true
      },
      {
        "input": [
          [
            4,
            2,
            6,
            1,
            3,
            5,
            7
          ],
          12
        ],
        "expectedOutput": true
      }
    ]
  },
  {
    "number": 130,
    "title": "Correct BST With Two Nodes Swapped",
    "topic": "Binary Search Trees",
    "difficulty": "Hard",
    "description": "You are given the root of a binary search tree (BST), where the values of exactly two nodes of the tree were swapped by mistake. Recover the tree without changing its structure in O(1) space.",
    "constraints": [
      "The number of nodes in the tree is in the range [2, 1000].",
      "-2^31 <= Node.val <= 2^31 - 1"
    ],
    "examples": [
      {
        "input": "root = [1,3,null,null,2]",
        "output": "[3,1,null,null,2]",
        "explanation": "Nodes 1 and 3 were swapped."
      },
      {
        "input": "root = [3,1,4,null,null,2]",
        "output": "[2,1,4,null,null,3]",
        "explanation": "Nodes 2 and 3 were swapped."
      }
    ],
    "functionName": "recoverTree",
    "returnType": "TreeNode",
    "parameters": [
      {
        "name": "root",
        "type": "TreeNode"
      }
    ],
    "testCases": [
      {
        "input": [
          [
            1,
            3,
            null,
            null,
            2
          ]
        ],
        "expectedOutput": [
          3,
          1,
          null,
          null,
          2
        ]
      },
      {
        "input": [
          [
            3,
            1,
            4,
            null,
            null,
            2
          ]
        ],
        "expectedOutput": [
          2,
          1,
          4,
          null,
          null,
          3
        ]
      },
      {
        "input": [
          [
            2,
            3,
            1
          ]
        ],
        "expectedOutput": [
          2,
          1,
          3
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
            3,
            null,
            2,
            null,
            1
          ]
        ],
        "expectedOutput": [
          1,
          null,
          2,
          null,
          3
        ]
      },
      {
        "input": [
          [
            5,
            6,
            3,
            1,
            4
          ]
        ],
        "expectedOutput": [
          5,
          3,
          6,
          1,
          4
        ]
      },
      {
        "input": [
          [
            4,
            2,
            6,
            1,
            5,
            3,
            7
          ]
        ],
        "expectedOutput": [
          4,
          2,
          6,
          1,
          3,
          5,
          7
        ]
      },
      {
        "input": [
          [
            2,
            4,
            3,
            1
          ]
        ],
        "expectedOutput": [
          3,
          4,
          2,
          1
        ]
      },
      {
        "input": [
          [
            10,
            15,
            5
          ]
        ],
        "expectedOutput": [
          10,
          5,
          15
        ]
      },
      {
        "input": [
          [
            7,
            2,
            9,
            1,
            8
          ]
        ],
        "expectedOutput": [
          7,
          2,
          9,
          1,
          8
        ]
      }
    ]
  },
  {
    "number": 131,
    "title": "Largest BST in Binary Tree",
    "topic": "Binary Search Trees",
    "difficulty": "Medium",
    "description": "Given a binary tree, find the size (number of nodes) of the largest subtree that is also a Binary Search Tree (BST) in O(n) time.",
    "constraints": [
      "The number of nodes in the tree is in the range [0, 10^4].",
      "-10^4 <= Node.val <= 10^4"
    ],
    "examples": [
      {
        "input": "root = [10,5,15,1,8,null,7]",
        "output": "3",
        "explanation": "Subtree [5,1,8] is the largest BST with size 3."
      },
      {
        "input": "root = [4,2,7,2,3,5,null,2,null,null,null,null,null,1]",
        "output": "2",
        "explanation": "Largest BST size 2."
      }
    ],
    "functionName": "largestBst",
    "returnType": "int",
    "parameters": [
      {
        "name": "root",
        "type": "TreeNode"
      }
    ],
    "testCases": [
      {
        "input": [
          [
            10,
            5,
            15,
            1,
            8,
            null,
            7
          ]
        ],
        "expectedOutput": 3
      },
      {
        "input": [
          [
            4,
            2,
            7,
            2,
            3,
            5,
            null,
            2,
            null,
            null,
            null,
            null,
            null,
            1
          ]
        ],
        "expectedOutput": 2
      },
      {
        "input": [
          []
        ],
        "expectedOutput": 0
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
            1,
            3
          ]
        ],
        "expectedOutput": 3
      },
      {
        "input": [
          [
            5,
            2,
            4,
            1,
            3
          ]
        ],
        "expectedOutput": 3
      },
      {
        "input": [
          [
            50,
            30,
            60,
            5,
            20,
            45,
            70,
            null,
            null,
            null,
            null,
            null,
            null,
            65,
            80
          ]
        ],
        "expectedOutput": 5
      },
      {
        "input": [
          [
            1,
            2,
            3
          ]
        ],
        "expectedOutput": 1
      },
      {
        "input": [
          [
            10,
            5,
            15,
            null,
            1,
            null,
            8
          ]
        ],
        "expectedOutput": 1
      },
      {
        "input": [
          [
            6,
            6,
            3,
            null,
            2,
            9,
            3,
            null,
            null,
            8,
            2
          ]
        ],
        "expectedOutput": 2
      }
    ]
  }
];
