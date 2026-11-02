/**
 * Generator script for Topics 9 and 10 (Problems 106 to 131)
 * Binary Trees & Binary Search Trees
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
// TOPIC 9: Binary Trees (106 - 121) -> 16 problems
// -------------------------------------------------------------
const topic9Problems = [
  {
    number: 106,
    title: "Level Order Traversal",
    topic: "Binary Trees",
    difficulty: "Medium",
    description: "Given the root of a binary tree, return the level order traversal of its nodes' values (i.e., from left to right, level by level).",
    constraints: ["The number of nodes in the tree is in the range [0, 2000].", "-1000 <= Node.val <= 1000"],
    examples: [
      { input: "root = [3,9,20,null,null,15,7]", output: "[[3],[9,20],[15,7]]", explanation: "Level order traversal." },
      { input: "root = [1]", output: "[[1]]", explanation: "Single node tree." }
    ],
    functionName: "levelOrder",
    returnType: "int[][]",
    parameters: [{ name: "root", type: "TreeNode" }],
    testCases: [
      { input: [[3, 9, 20, null, null, 15, 7]], expectedOutput: [[3], [9, 20], [15, 7]] },
      { input: [[1]], expectedOutput: [[1]] },
      { input: [[]], expectedOutput: [] },
      { input: [[1, 2, 3, 4, 5]], expectedOutput: [[1], [2, 3], [4, 5]] },
      { input: [[1, null, 2, null, 3]], expectedOutput: [[1], [2], [3]] },
      { input: [[1, 2, null, 3]], expectedOutput: [[1], [2], [3]] },
      { input: [[5, 4, 8, 11, null, 13, 4]], expectedOutput: [[5], [4, 8], [11, 13, 4]] },
      { input: [[10, 5, 15]], expectedOutput: [[10], [5, 15]] },
      { input: [[2, 1, 3, 0]], expectedOutput: [[2], [1, 3], [0]] },
      { input: [[7, 3, 9, 1, 5, 8, 10]], expectedOutput: [[7], [3, 9], [1, 5, 8, 10]] }
    ]
  },
  {
    number: 107,
    title: "Maximum Width of Binary Tree",
    topic: "Binary Trees",
    difficulty: "Medium",
    description: "Given the root of a binary tree, return the maximum width of the given tree. The maximum width of a tree is the maximum width among all levels. The width of one level is defined as the length between the end-nodes (the leftmost and rightmost non-null nodes), where the null nodes between the end-nodes that would be present in a complete binary tree extending down to that level are also counted into the length calculation.",
    constraints: ["The number of nodes in the tree is in the range [1, 3000].", "-100 <= Node.val <= 100"],
    examples: [
      { input: "root = [1,3,2,5,3,null,9]", output: "4", explanation: "The maximum width exists in the fourth level with length 4 (5,3,null,9)." },
      { input: "root = [1,3,2,5,null,null,9,6,null,7]", output: "7", explanation: "Width across level 4 is 7." }
    ],
    functionName: "widthOfBinaryTree",
    returnType: "int",
    parameters: [{ name: "root", type: "TreeNode" }],
    testCases: [
      { input: [[1, 3, 2, 5, 3, null, 9]], expectedOutput: 4 },
      { input: [[1, 3, 2, 5, null, null, 9, 6, null, 7]], expectedOutput: 7 },
      { input: [[1, 3, 2, 5]], expectedOutput: 2 },
      { input: [[1]], expectedOutput: 1 },
      { input: [[1, 1, 1, 1, null, null, 1, 1, null, null, 1]], expectedOutput: 8 },
      { input: [[1, 2, 3]], expectedOutput: 2 },
      { input: [[1, 2, null, 3]], expectedOutput: 1 },
      { input: [[1, null, 2, null, 3]], expectedOutput: 1 },
      { input: [[1, 2, 3, 4, 5, 6, 7]], expectedOutput: 4 },
      { input: [[1, 2, 3, null, 4, null, 5]], expectedOutput: 3 }
    ]
  },
  {
    number: 108,
    title: "Right View and Left View of Binary Tree",
    topic: "Binary Trees",
    difficulty: "Medium",
    description: "Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom (Right View).",
    constraints: ["The number of nodes in the tree is in the range [0, 100].", "-100 <= Node.val <= 100"],
    examples: [
      { input: "root = [1,2,3,null,5,null,4]", output: "[1,3,4]", explanation: "Nodes visible from right side." },
      { input: "root = [1,null,3]", output: "[1,3]", explanation: "Nodes visible from right." }
    ],
    functionName: "rightSideView",
    returnType: "int[]",
    parameters: [{ name: "root", type: "TreeNode" }],
    testCases: [
      { input: [[1, 2, 3, null, 5, null, 4]], expectedOutput: [1, 3, 4] },
      { input: [[1, null, 3]], expectedOutput: [1, 3] },
      { input: [[]], expectedOutput: [] },
      { input: [[1, 2]], expectedOutput: [1, 2] },
      { input: [[1, 2, 3, 4]], expectedOutput: [1, 3, 4] },
      { input: [[1, 2, 3, 4, 5, 6, 7]], expectedOutput: [1, 3, 7] },
      { input: [[1, 2, null, 3]], expectedOutput: [1, 2, 3] },
      { input: [[1, null, 2, null, 3, null, 4]], expectedOutput: [1, 2, 3, 4] },
      { input: [[5, 3, 6, 2, 4]], expectedOutput: [5, 6, 4] },
      { input: [[2, 1, 3]], expectedOutput: [2, 3] }
    ]
  },
  {
    number: 109,
    title: "Top View of Binary Tree",
    topic: "Binary Trees",
    difficulty: "Medium",
    description: "Given below is a binary tree. The task is to print the top view of binary tree. Top view of a binary tree is the set of nodes visible when the tree is viewed from the top. Return nodes from leftmost horizontal distance to rightmost.",
    constraints: ["1 <= N <= 10^5", "0 <= Node.val <= 10^5"],
    examples: [
      { input: "root = [1,2,3,4,5,6,7]", output: "[4,2,1,3,7]", explanation: "Top view from left to right." },
      { input: "root = [1,2,3]", output: "[2,1,3]", explanation: "Top view." }
    ],
    functionName: "topView",
    returnType: "int[]",
    parameters: [{ name: "root", type: "TreeNode" }],
    testCases: [
      { input: [[1, 2, 3, 4, 5, 6, 7]], expectedOutput: [4, 2, 1, 3, 7] },
      { input: [[1, 2, 3]], expectedOutput: [2, 1, 3] },
      { input: [[1]], expectedOutput: [1] },
      { input: [[1, 2, null, 4, 5]], expectedOutput: [4, 2, 1] },
      { input: [[1, null, 3, null, 5]], expectedOutput: [1, 3, 5] },
      { input: [[10, 20, 30, 40, 60, 90, 100]], expectedOutput: [40, 20, 10, 30, 100] },
      { input: [[1, 2, 3, null, 4]], expectedOutput: [2, 1, 3] },
      { input: [[2, 1, 3, null, 4]], expectedOutput: [1, 2, 3] },
      { input: [[5, 3, 8, 2, 4, 7, 9]], expectedOutput: [2, 3, 5, 8, 9] },
      { input: [[1, 2, null, 3, null, 4]], expectedOutput: [4, 3, 2, 1] }
    ]
  },
  {
    number: 110,
    title: "Print All Nodes at Distance K in Binary Tree",
    topic: "Binary Trees",
    difficulty: "Medium",
    description: "Given the root of a binary tree, the value of a target node `target`, and an integer `k`, return an array of the values of all nodes that have a distance `k` from the target node in any order.",
    constraints: ["The number of nodes in the tree is in the range [1, 500].", "0 <= Node.val <= 500", "All the values Node.val are unique.", "0 <= k <= 1000"],
    examples: [
      { input: "root = [3,5,1,6,2,0,8,null,null,7,4], target = 5, k = 2", output: "[7,4,1]", explanation: "The nodes that are a distance 2 from the target node (with value 5) have values 7, 4, and 1." },
      { input: "root = [1], target = 1, k = 3", output: "[]", explanation: "No node at distance 3." }
    ],
    functionName: "distanceK",
    returnType: "int[]",
    parameters: [{ name: "root", type: "TreeNode" }, { name: "target", type: "int" }, { name: "k", type: "int" }],
    testCases: [
      { input: [[3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], 5, 2], expectedOutput: [7, 4, 1] },
      { input: [[1], 1, 3], expectedOutput: [] },
      { input: [[1], 1, 0], expectedOutput: [1] },
      { input: [[1, 2, 3], 2, 1], expectedOutput: [1] },
      { input: [[1, 2, 3, 4, 5], 2, 1], expectedOutput: [4, 5, 1] },
      { input: [[0, 1, null, null, 2, null, 3], 1, 2], expectedOutput: [3] },
      { input: [[0, 2, 1, null, null, 3], 3, 3], expectedOutput: [2] },
      { input: [[1, 2, 3], 1, 1], expectedOutput: [2, 3] },
      { input: [[10, 5, 15, 2, 7], 5, 2], expectedOutput: [15] },
      { input: [[4, 2, 6, 1, 3, 5, 7], 2, 1], expectedOutput: [1, 3, 4] }
    ]
  },
  {
    number: 111,
    title: "Minimum Time to Burn a Binary Tree From a Given Node",
    topic: "Binary Trees",
    difficulty: "Hard",
    description: "Given a binary tree and a leaf node data `start`, find the minimum time required to burn the complete binary tree if the fire spreads from a node to its connected nodes (left child, right child, and parent) in 1 second.",
    constraints: ["The number of nodes is in the range [1, 10^5].", "All Node.val are unique."],
    examples: [
      { input: "root = [1,2,3,4,5,null,6,null,null,7,8,null,5], start = 8", output: "7", explanation: "Fire spreads in 7 seconds." }
    ],
    functionName: "minTimeToBurn",
    returnType: "int",
    parameters: [{ name: "root", type: "TreeNode" }, { name: "start", type: "int" }],
    testCases: [
      { input: [[1, 2, 3, 4, 5, null, 6, null, null, 7, 8], 8], expectedOutput: 7 },
      { input: [[1, 2, 3], 2], expectedOutput: 2 },
      { input: [[1], 1], expectedOutput: 0 },
      { input: [[1, 2, 3, 4, 5]], expectedOutput: 3 },
      { input: [[1, 2, null, 3, null, 4]], expectedOutput: 3 },
      { input: [[10, 20, 30, 40, 50], 40], expectedOutput: 3 },
      { input: [[5, 4, 8, 11, null, 13, 4], 11], expectedOutput: 4 },
      { input: [[1, 2, 3, 4, 5, 6, 7], 1], expectedOutput: 2 },
      { input: [[2, 1, 3], 3], expectedOutput: 2 },
      { input: [[1, null, 2, null, 3]], expectedOutput: 2 }
    ]
  },
  {
    number: 112,
    title: "Vertical Order Traversal",
    topic: "Binary Trees",
    difficulty: "Hard",
    description: "Given the root of a binary tree, calculate the vertical order traversal of the binary tree. For each node at position (row, col), its left and right children are at (row + 1, col - 1) and (row + 1, col + 1) respectively. If two nodes have the same row and column, order them by value.",
    constraints: ["The number of nodes in the tree is in the range [1, 1000].", "0 <= Node.val <= 1000"],
    examples: [
      { input: "root = [3,9,20,null,null,15,7]", output: "[[9],[3,15],[20],[7]]", explanation: "Vertical columns." },
      { input: "root = [1,2,3,4,5,6,7]", output: "[[4],[2],[1,5,6],[3],[7]]", explanation: "Vertical columns." }
    ],
    functionName: "verticalTraversal",
    returnType: "int[][]",
    parameters: [{ name: "root", type: "TreeNode" }],
    testCases: [
      { input: [[3, 9, 20, null, null, 15, 7]], expectedOutput: [[9], [3, 15], [20], [7]] },
      { input: [[1, 2, 3, 4, 5, 6, 7]], expectedOutput: [[4], [2], [1, 5, 6], [3], [7]] },
      { input: [[1, 2, 3, 4, 6, 5, 7]], expectedOutput: [[4], [2], [1, 5, 6], [3], [7]] },
      { input: [[1]], expectedOutput: [[1]] },
      { input: [[1, 2, 3]], expectedOutput: [[2], [1], [3]] },
      { input: [[1, 2, null, 3]], expectedOutput: [[3], [2], [1]] },
      { input: [[1, null, 2, null, 3]], expectedOutput: [[1], [2], [3]] },
      { input: [[5, 3, 7, 2, 4, 6, 8]], expectedOutput: [[2], [3], [5, 4, 6], [7], [8]] },
      { input: [[0, 8, 1, null, null, 3, 2, null, 4, 5, null, null, 7]], expectedOutput: [[8], [0, 3, 5], [1, 4, 7], [2]] },
      { input: [[1, 2, 3, 4, 5]], expectedOutput: [[4], [2], [1, 5], [3]] }
    ]
  },
  {
    number: 113,
    title: "Print Root-to-Leaf Path in Binary Tree",
    topic: "Binary Trees",
    difficulty: "Easy",
    description: "Given the root of a binary tree, return all root-to-leaf paths in any order.",
    constraints: ["The number of nodes in the tree is in the range [1, 100].", "-100 <= Node.val <= 100"],
    examples: [
      { input: "root = [1,2,3,null,5]", output: "['1->2->5','1->3']", explanation: "All paths from root to leaves." },
      { input: "root = [1]", output: "['1']", explanation: "Single node path." }
    ],
    functionName: "binaryTreePaths",
    returnType: "string[]",
    parameters: [{ name: "root", type: "TreeNode" }],
    testCases: [
      { input: [[1, 2, 3, null, 5]], expectedOutput: ["1->2->5", "1->3"] },
      { input: [[1]], expectedOutput: ["1"] },
      { input: [[1, 2]], expectedOutput: ["1->2"] },
      { input: [[1, null, 3]], expectedOutput: ["1->3"] },
      { input: [[1, 2, 3, 4, 5]], expectedOutput: ["1->2->4", "1->2->5", "1->3"] },
      { input: [[1, 2, 3]], expectedOutput: ["1->2", "1->3"] },
      { input: [[3, 9, 20, null, null, 15, 7]], expectedOutput: ["3->9", "3->20->15", "3->20->7"] },
      { input: [[5, 4, 8, 11, null, 13, 4]], expectedOutput: ["5->4->11", "5->8->13", "5->8->4"] },
      { input: [[10, 20, 30]], expectedOutput: ["10->20", "10->30"] },
      { input: [[2, 1, 3]], expectedOutput: ["2->1", "2->3"] }
    ]
  },
  {
    number: 114,
    title: "Diameter of Binary Tree",
    topic: "Binary Trees",
    difficulty: "Easy",
    description: "Given the root of a binary tree, return the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.",
    constraints: ["The number of nodes in the tree is in the range [1, 10^4].", "-100 <= Node.val <= 100"],
    examples: [
      { input: "root = [1,2,3,4,5]", output: "3", explanation: "Length of path [4,2,1,3] or [5,2,1,3] is 3." },
      { input: "root = [1,2]", output: "1", explanation: "Length of path [2,1] is 1." }
    ],
    functionName: "diameterOfBinaryTree",
    returnType: "int",
    parameters: [{ name: "root", type: "TreeNode" }],
    testCases: [
      { input: [[1, 2, 3, 4, 5]], expectedOutput: 3 },
      { input: [[1, 2]], expectedOutput: 1 },
      { input: [[1]], expectedOutput: 0 },
      { input: [[1, 2, 3]], expectedOutput: 2 },
      { input: [[1, 2, null, 3, null, 4]], expectedOutput: 3 },
      { input: [[1, 2, 3, 4, 5, 6, 7]], expectedOutput: 4 },
      { input: [[4, -7, -3, null, null, -9, -3, 9, -7, -4, null, 6]], expectedOutput: 6 },
      { input: [[3, 1, null, null, 2]], expectedOutput: 2 },
      { input: [[10, 20, 30, 40, 50, null, null, 60]], expectedOutput: 4 },
      { input: [[2, 1, 4, null, null, 3, 5]], expectedOutput: 3 }
    ]
  },
  {
    number: 115,
    title: "Lowest Common Ancestor in Binary Tree",
    topic: "Binary Trees",
    difficulty: "Medium",
    description: "Given a binary tree, find the lowest common ancestor (LCA) of two given nodes `p` and `q` in the tree. According to the definition of LCA on Wikipedia: The lowest common ancestor is defined between two nodes `p` and `q` as the lowest node in `T` that has both `p` and `q` as descendants (where we allow a node to be a descendant of itself).",
    constraints: ["The number of nodes in the tree is in the range [2, 10^5].", "-10^9 <= Node.val <= 10^9", "All Node.val are unique.", "p != q", "p and q will exist in the tree."],
    examples: [
      { input: "root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1", output: "3", explanation: "LCA of 5 and 1 is 3." },
      { input: "root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4", output: "5", explanation: "LCA of 5 and 4 is 5." }
    ],
    functionName: "lowestCommonAncestor",
    returnType: "int",
    parameters: [{ name: "root", type: "TreeNode" }, { name: "p", type: "int" }, { name: "q", type: "int" }],
    testCases: [
      { input: [[3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], 5, 1], expectedOutput: 3 },
      { input: [[3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], 5, 4], expectedOutput: 5 },
      { input: [[1, 2], 1, 2], expectedOutput: 1 },
      { input: [[1, 2, 3], 2, 3], expectedOutput: 1 },
      { input: [[1, 2, 3, 4, 5], 4, 5], expectedOutput: 2 },
      { input: [[1, 2, 3, 4, 5], 4, 3], expectedOutput: 1 },
      { input: [[5, 3, 6, 2, 4, null, null, 1], 1, 4], expectedOutput: 3 },
      { input: [[10, 5, 15, 3, 7, 13, 18], 3, 7], expectedOutput: 5 },
      { input: [[10, 5, 15, 3, 7, 13, 18], 3, 18], expectedOutput: 10 },
      { input: [[6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], 2, 8], expectedOutput: 6 }
    ]
  },
  {
    number: 116,
    title: "Boundary Traversal",
    topic: "Binary Trees",
    difficulty: "Medium",
    description: "Given a Binary Tree, find its Boundary Traversal. The traversal should be in anti-clockwise direction: left boundary (excluding bottom), leaves (left to right), right boundary (bottom to top, excluding root).",
    constraints: ["1 <= Number of nodes <= 10^5", "1 <= Node.val <= 10^5"],
    examples: [
      { input: "root = [1,2,3,4,5,6,7]", output: "[1,2,4,5,6,7,3]", explanation: "Anti-clockwise boundary traversal." }
    ],
    functionName: "boundaryTraversal",
    returnType: "int[]",
    parameters: [{ name: "root", type: "TreeNode" }],
    testCases: [
      { input: [[1, 2, 3, 4, 5, 6, 7]], expectedOutput: [1, 2, 4, 5, 6, 7, 3] },
      { input: [[1]], expectedOutput: [1] },
      { input: [[1, 2, null, 3]], expectedOutput: [1, 2, 3] },
      { input: [[1, null, 2, null, 3]], expectedOutput: [1, 3, 2] },
      { input: [[1, 2, 3]], expectedOutput: [1, 2, 3] },
      { input: [[20, 8, 22, 4, 12, null, 25, null, null, 10, 14]], expectedOutput: [20, 8, 4, 10, 14, 25, 22] },
      { input: [[1, 2, 3, null, 4]], expectedOutput: [1, 2, 4, 3] },
      { input: [[10, 5, 20]], expectedOutput: [10, 5, 20] },
      { input: [[1, 2, 3, 4, null, null, 5]], expectedOutput: [1, 2, 4, 5, 3] },
      { input: [[2, 1, 3]], expectedOutput: [2, 1, 3] }
    ]
  },
  {
    number: 117,
    title: "Construct a Binary Tree From Preorder and Inorder",
    topic: "Binary Trees",
    difficulty: "Medium",
    description: "Given two integer arrays `preorder` and `inorder` where `preorder` is the preorder traversal of a binary tree and `inorder` is the inorder traversal of the same tree, construct and return the binary tree.",
    constraints: ["1 <= preorder.length <= 3000", "inorder.length == preorder.length", "-3000 <= preorder[i], inorder[i] <= 3000", "preorder and inorder consist of unique values."],
    examples: [
      { input: "preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]", output: "[3,9,20,null,null,15,7]", explanation: "Constructed binary tree." },
      { input: "preorder = [-1], inorder = [-1]", output: "[-1]", explanation: "Single node tree." }
    ],
    functionName: "buildTree",
    returnType: "TreeNode",
    parameters: [{ name: "preorder", type: "int[]" }, { name: "inorder", type: "int[]" }],
    testCases: [
      { input: [[3, 9, 20, 15, 7], [9, 3, 15, 20, 7]], expectedOutput: [3, 9, 20, null, null, 15, 7] },
      { input: [[-1], [-1]], expectedOutput: [-1] },
      { input: [[1, 2], [2, 1]], expectedOutput: [1, 2] },
      { input: [[1, 2], [1, 2]], expectedOutput: [1, null, 2] },
      { input: [[1, 2, 3], [2, 1, 3]], expectedOutput: [1, 2, 3] },
      { input: [[1, 2, 4, 5, 3], [4, 2, 5, 1, 3]], expectedOutput: [1, 2, 3, 4, 5] },
      { input: [[1, 2, 3, 4], [4, 3, 2, 1]], expectedOutput: [1, 2, null, 3, null, 4] },
      { input: [[10, 20, 30], [20, 10, 30]], expectedOutput: [10, 20, 30] },
      { input: [[2, 1, 3], [1, 2, 3]], expectedOutput: [2, 1, 3] },
      { input: [[4, 2, 1, 3, 6, 5, 7], [1, 2, 3, 4, 5, 6, 7]], expectedOutput: [4, 2, 6, 1, 3, 5, 7] }
    ]
  },
  {
    number: 118,
    title: "Morris Inorder Traversal",
    topic: "Binary Trees",
    difficulty: "Medium",
    description: "Given the root of a binary tree, return the inorder traversal of its nodes' values using Morris Traversal in O(1) auxiliary space.",
    constraints: ["The number of nodes in the tree is in the range [0, 100].", "-100 <= Node.val <= 100"],
    examples: [
      { input: "root = [1,null,2,3]", output: "[1,3,2]", explanation: "Inorder traversal." },
      { input: "root = [1,2,3,4,5]", output: "[4,2,5,1,3]", explanation: "Inorder traversal." }
    ],
    functionName: "morrisInorder",
    returnType: "int[]",
    parameters: [{ name: "root", type: "TreeNode" }],
    testCases: [
      { input: [[1, null, 2, 3]], expectedOutput: [1, 3, 2] },
      { input: [[]], expectedOutput: [] },
      { input: [[1]], expectedOutput: [1] },
      { input: [[1, 2, 3, 4, 5]], expectedOutput: [4, 2, 5, 1, 3] },
      { input: [[2, 1, 3]], expectedOutput: [1, 2, 3] },
      { input: [[3, 2, 4, 1]], expectedOutput: [1, 2, 3, 4] },
      { input: [[1, 2, null, 3]], expectedOutput: [3, 2, 1] },
      { input: [[4, 2, 5, 1, 3]], expectedOutput: [1, 2, 3, 4, 5] },
      { input: [[10, 5, 15]], expectedOutput: [5, 10, 15] },
      { input: [[1, null, 2, null, 3]], expectedOutput: [1, 2, 3] }
    ]
  },
  {
    number: 119,
    title: "Maximum Path Sum",
    topic: "Binary Trees",
    difficulty: "Hard",
    description: "A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Given the root of a binary tree, return the maximum path sum of any non-empty path.",
    constraints: ["The number of nodes in the tree is in the range [1, 3 * 10^4].", "-1000 <= Node.val <= 1000"],
    examples: [
      { input: "root = [1,2,3]", output: "6", explanation: "Optimal path 2 -> 1 -> 3 gives sum 6." },
      { input: "root = [-10,9,20,null,null,15,7]", output: "42", explanation: "Path 15 -> 20 -> 7 gives sum 42." }
    ],
    functionName: "maxPathSum",
    returnType: "int",
    parameters: [{ name: "root", type: "TreeNode" }],
    testCases: [
      { input: [[1, 2, 3]], expectedOutput: 6 },
      { input: [[-10, 9, 20, null, null, 15, 7]], expectedOutput: 42 },
      { input: [[-3]], expectedOutput: -3 },
      { input: [[2, -1]], expectedOutput: 2 },
      { input: [[1, -2, 3]], expectedOutput: 4 },
      { input: [[1, 2, null, 3, null, 4, null, 5]], expectedOutput: 15 },
      { input: [[-2, -1]], expectedOutput: -1 },
      { input: [[5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]], expectedOutput: 48 },
      { input: [[9, 6, -3, null, null, -6, 2, null, null, 2, null, -6, -6, -6]], expectedOutput: 16 },
      { input: [[10, 2, 10, 20, 1, null, -25, null, null, null, null, 3, 4]], expectedOutput: 42 }
    ]
  },
  {
    number: 120,
    title: "Serialize and Deserialize Binary Tree",
    topic: "Binary Trees",
    difficulty: "Hard",
    description: "Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer. Design an algorithm to serialize and deserialize a binary tree.",
    constraints: ["The number of nodes in the tree is in the range [0, 10^4].", "-1000 <= Node.val <= 1000"],
    examples: [
      { input: "root = [1,2,3,null,null,4,5]", output: "[1,2,3,null,null,4,5]", explanation: "Binary tree correctly serialized and deserialized." }
    ],
    functionName: "class Codec",
    returnType: "void",
    isDesign: true,
    parameters: [],
    testCases: [
      { input: [[1, 2, 3, null, null, 4, 5]], expectedOutput: [1, 2, 3, null, null, 4, 5] },
      { input: [[]], expectedOutput: [] },
      { input: [[1]], expectedOutput: [1] },
      { input: [[1, 2]], expectedOutput: [1, 2] },
      { input: [[1, null, 2]], expectedOutput: [1, null, 2] },
      { input: [[4, 2, 6, 1, 3, 5, 7]], expectedOutput: [4, 2, 6, 1, 3, 5, 7] },
      { input: [[1, 2, null, 3, null, 4]], expectedOutput: [1, 2, null, 3, null, 4] },
      { input: [[10, 20, 30]], expectedOutput: [10, 20, 30] },
      { input: [[5, 3, 8, 2, 4]], expectedOutput: [5, 3, 8, 2, 4] },
      { input: [[-1, 0, 1]], expectedOutput: [-1, 0, 1] }
    ]
  },
  {
    number: 121,
    title: "Validate Balanced Binary Tree",
    topic: "Binary Trees",
    difficulty: "Easy",
    description: "Given a binary tree, determine if it is height-balanced (a binary tree in which the left and right subtrees of every node differ in height by no more than 1).",
    constraints: ["The number of nodes in the tree is in the range [0, 5000].", "-10^4 <= Node.val <= 10^4"],
    examples: [
      { input: "root = [3,9,20,null,null,15,7]", output: "true", explanation: "Tree is height-balanced." },
      { input: "root = [1,2,2,3,3,null,null,4,4]", output: "false", explanation: "Subtree height difference > 1." }
    ],
    functionName: "isBalanced",
    returnType: "boolean",
    parameters: [{ name: "root", type: "TreeNode" }],
    testCases: [
      { input: [[3, 9, 20, null, null, 15, 7]], expectedOutput: true },
      { input: [[1, 2, 2, 3, 3, null, null, 4, 4]], expectedOutput: false },
      { input: [[]], expectedOutput: true },
      { input: [[1]], expectedOutput: true },
      { input: [[1, 2, 3]], expectedOutput: true },
      { input: [[1, 2, null, 3]], expectedOutput: false },
      { input: [[1, 2, 3, 4, 5, 6, null, 8]], expectedOutput: true },
      { input: [[1, 2, 2, 3, null, null, 3, 4, null, null, 4]], expectedOutput: false },
      { input: [[1, null, 2, null, 3]], expectedOutput: false },
      { input: [[10, 5, 15]], expectedOutput: true }
    ]
  }
];

writeTopic('topic9_binaryTrees.js', 'TOPIC_9_PROBLEMS', topic9Problems);

// -------------------------------------------------------------
// TOPIC 10: Binary Search Trees (122 - 131) -> 10 problems
// -------------------------------------------------------------
const topic10Problems = [
  {
    number: 122,
    title: "Insert a Given Node in BST",
    topic: "Binary Search Trees",
    difficulty: "Medium",
    description: "You are given the root node of a binary search tree (BST) and a value to insert into the tree. Return the root node of the BST after the insertion.",
    constraints: ["The number of nodes in the tree will be in the range [0, 10^4].", "-10^8 <= Node.val <= 10^8", "All values are unique.", "-10^8 <= val <= 10^8"],
    examples: [
      { input: "root = [4,2,7,1,3], val = 5", output: "[4,2,7,1,3,5]", explanation: "Inserted 5 as left child of 7." },
      { input: "root = [40,20,60,10,30,50,70], val = 25", output: "[40,20,60,10,30,50,70,null,null,25]", explanation: "Inserted 25 as left child of 30." }
    ],
    functionName: "insertIntoBST",
    returnType: "TreeNode",
    parameters: [{ name: "root", type: "TreeNode" }, { name: "val", type: "int" }],
    testCases: [
      { input: [[4, 2, 7, 1, 3], 5], expectedOutput: [4, 2, 7, 1, 3, 5] },
      { input: [[40, 20, 60, 10, 30, 50, 70], 25], expectedOutput: [40, 20, 60, 10, 30, 50, 70, null, null, 25] },
      { input: [[], 5], expectedOutput: [5] },
      { input: [[2, 1, 3], 4], expectedOutput: [2, 1, 3, null, null, null, 4] },
      { input: [[5, 3, 7], 1], expectedOutput: [5, 3, 7, 1] },
      { input: [[10, 5, 20], 15], expectedOutput: [10, 5, 20, null, null, 15] },
      { input: [[1], 2], expectedOutput: [1, null, 2] },
      { input: [[3, 2], 1], expectedOutput: [3, 2, null, 1] },
      { input: [[8, 4, 12], 10], expectedOutput: [8, 4, 12, null, null, 10] },
      { input: [[6, 2, 8], 7], expectedOutput: [6, 2, 8, null, null, 7] }
    ]
  },
  {
    number: 123,
    title: "Lowest Common Ancestor in BST",
    topic: "Binary Search Trees",
    difficulty: "Medium",
    description: "Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.",
    constraints: ["The number of nodes in the tree is in the range [2, 10^5].", "-10^9 <= Node.val <= 10^9", "All Node.val are unique.", "p != q", "p and q will exist in the BST."],
    examples: [
      { input: "root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8", output: "6", explanation: "LCA of 2 and 8 is 6." },
      { input: "root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4", output: "2", explanation: "LCA of 2 and 4 is 2." }
    ],
    functionName: "lowestCommonAncestorBST",
    returnType: "int",
    parameters: [{ name: "root", type: "TreeNode" }, { name: "p", type: "int" }, { name: "q", type: "int" }],
    testCases: [
      { input: [[6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], 2, 8], expectedOutput: 6 },
      { input: [[6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], 2, 4], expectedOutput: 2 },
      { input: [[2, 1], 2, 1], expectedOutput: 2 },
      { input: [[5, 3, 6, 2, 4, null, null, 1], 1, 4], expectedOutput: 3 },
      { input: [[10, 5, 15, 3, 7, 12, 18], 3, 7], expectedOutput: 5 },
      { input: [[10, 5, 15, 3, 7, 12, 18], 3, 18], expectedOutput: 10 },
      { input: [[20, 10, 30], 10, 30], expectedOutput: 20 },
      { input: [[8, 4, 12, 2, 6], 2, 6], expectedOutput: 4 },
      { input: [[8, 4, 12, 2, 6], 2, 12], expectedOutput: 8 },
      { input: [[3, 1, 4, null, 2], 2, 4], expectedOutput: 3 }
    ]
  },
  {
    number: 124,
    title: "Delete a Node in BST",
    topic: "Binary Search Trees",
    difficulty: "Medium",
    description: "Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST.",
    constraints: ["The number of nodes in the tree is in the range [0, 10^4].", "-10^5 <= Node.val <= 10^5", "Each node has a unique value.", "root is a valid binary search tree.", "-10^5 <= key <= 10^5"],
    examples: [
      { input: "root = [5,3,6,2,4,null,7], key = 3", output: "[5,4,6,2,null,null,7]", explanation: "Key 3 deleted and replaced with inorder successor." }
    ],
    functionName: "deleteNode",
    returnType: "TreeNode",
    parameters: [{ name: "root", type: "TreeNode" }, { name: "key", type: "int" }],
    testCases: [
      { input: [[5, 3, 6, 2, 4, null, 7], 3], expectedOutput: [5, 4, 6, 2, null, null, 7] },
      { input: [[5, 3, 6, 2, 4, null, 7], 0], expectedOutput: [5, 3, 6, 2, 4, null, 7] },
      { input: [[], 0], expectedOutput: [] },
      { input: [[1], 1], expectedOutput: [] },
      { input: [[2, 1, 3], 2], expectedOutput: [3, 1] },
      { input: [[2, 1, 3], 1], expectedOutput: [2, null, 3] },
      { input: [[2, 1, 3], 3], expectedOutput: [2, 1] },
      { input: [[10, 5, 15], 5], expectedOutput: [10, null, 15] },
      { input: [[10, 5, 15], 15], expectedOutput: [10, 5] },
      { input: [[4, 2, 6, 1, 3, 5, 7], 2], expectedOutput: [4, 3, 6, 1, null, 5, 7] }
    ]
  },
  {
    number: 125,
    title: "Inorder Successor and Predecessor in BST",
    topic: "Binary Search Trees",
    difficulty: "Medium",
    description: "There is BST given with the root node. You need to find the in-order successor and predecessor of a given key. If either doesn't exist, return -1 for it. Return `[predecessor, successor]`.",
    constraints: ["1 <= Number of nodes <= 10^5", "1 <= key <= 10^5"],
    examples: [
      { input: "root = [50,30,70,20,40,60,80], key = 65", output: "[60, 70]", explanation: "Predecessor is 60, Successor is 70." },
      { input: "root = [20,10,30], key = 10", output: "[-1, 20]", explanation: "No predecessor for 10, successor is 20." }
    ],
    functionName: "succPredBST",
    returnType: "int[]",
    parameters: [{ name: "root", type: "TreeNode" }, { name: "key", type: "int" }],
    testCases: [
      { input: [[50, 30, 70, 20, 40, 60, 80], 65], expectedOutput: [60, 70] },
      { input: [[20, 10, 30], 10], expectedOutput: [-1, 20] },
      { input: [[20, 10, 30], 30], expectedOutput: [20, -1] },
      { input: [[20, 10, 30], 20], expectedOutput: [10, 30] },
      { input: [[5, 2, 7, 1, 4, 6, 9], 4], expectedOutput: [2, 5] },
      { input: [[10], 10], expectedOutput: [-1, -1] },
      { input: [[10, 5], 5], expectedOutput: [-1, 10] },
      { input: [[10, null, 15], 15], expectedOutput: [10, -1] },
      { input: [[8, 4, 12, 2, 6, 10, 14], 6], expectedOutput: [4, 8] },
      { input: [[8, 4, 12, 2, 6, 10, 14], 8], expectedOutput: [6, 10] }
    ]
  },
  {
    number: 126,
    title: "Kth Smallest and Largest Element in BST",
    topic: "Binary Search Trees",
    difficulty: "Medium",
    description: "Given the root of a binary search tree, and an integer `k`, return the `k`th smallest value (1-indexed) of all the values of the nodes in the tree.",
    constraints: ["The number of nodes in the tree is n.", "1 <= k <= n <= 10^4", "0 <= Node.val <= 10^4"],
    examples: [
      { input: "root = [3,1,4,null,2], k = 1", output: "1", explanation: "1st smallest element is 1." },
      { input: "root = [5,3,6,2,4,null,null,1], k = 3", output: "3", explanation: "3rd smallest element is 3." }
    ],
    functionName: "kthSmallest",
    returnType: "int",
    parameters: [{ name: "root", type: "TreeNode" }, { name: "k", type: "int" }],
    testCases: [
      { input: [[3, 1, 4, null, 2], 1], expectedOutput: 1 },
      { input: [[5, 3, 6, 2, 4, null, null, 1], 3], expectedOutput: 3 },
      { input: [[1], 1], expectedOutput: 1 },
      { input: [[2, 1, 3], 2], expectedOutput: 2 },
      { input: [[2, 1, 3], 3], expectedOutput: 3 },
      { input: [[4, 2, 5, 1, 3], 4], expectedOutput: 4 },
      { input: [[4, 2, 5, 1, 3], 5], expectedOutput: 5 },
      { input: [[10, 5, 20, 3, 7], 1], expectedOutput: 3 },
      { input: [[10, 5, 20, 3, 7], 3], expectedOutput: 7 },
      { input: [[8, 4, 12, 2, 6], 3], expectedOutput: 6 }
    ]
  },
  {
    number: 127,
    title: "Check if a Tree Is a BST",
    topic: "Binary Search Trees",
    difficulty: "Medium",
    description: "Given the root of a binary tree, determine if it is a valid binary search tree (BST).",
    constraints: ["The number of nodes in the tree is in the range [1, 10^4].", "-2^31 <= Node.val <= 2^31 - 1"],
    examples: [
      { input: "root = [2,1,3]", output: "true", explanation: "Valid BST." },
      { input: "root = [5,1,4,null,null,3,6]", output: "false", explanation: "Root node's value is 5 but right child's value is 4." }
    ],
    functionName: "isValidBST",
    returnType: "boolean",
    parameters: [{ name: "root", type: "TreeNode" }],
    testCases: [
      { input: [[2, 1, 3]], expectedOutput: true },
      { input: [[5, 1, 4, null, null, 3, 6]], expectedOutput: false },
      { input: [[1]], expectedOutput: true },
      { input: [[2, 2, 2]], expectedOutput: false },
      { input: [[5, 4, 6, null, null, 3, 7]], expectedOutput: false },
      { input: [[10, 5, 15, null, null, 6, 20]], expectedOutput: false },
      { input: [[10, 5, 15, 3, 7, 12, 18]], expectedOutput: true },
      { input: [[2147483647]], expectedOutput: true },
      { input: [[-2147483648]], expectedOutput: true },
      { input: [[1, 2]], expectedOutput: false }
    ]
  },
  {
    number: 128,
    title: "Construct a BST From Preorder Traversal",
    topic: "Binary Search Trees",
    difficulty: "Medium",
    description: "Given an array of integers `preorder`, which represents the preorder traversal of a BST, construct the tree and return its root in O(n) time.",
    constraints: ["1 <= preorder.length <= 100", "1 <= preorder[i] <= 1000", "All values are unique."],
    examples: [
      { input: "preorder = [8,5,1,7,10,12]", output: "[8,5,10,1,7,null,12]", explanation: "Constructed BST." },
      { input: "preorder = [1,3]", output: "[1,null,3]", explanation: "Constructed BST." }
    ],
    functionName: "bstFromPreorder",
    returnType: "TreeNode",
    parameters: [{ name: "preorder", type: "int[]" }],
    testCases: [
      { input: [[8, 5, 1, 7, 10, 12]], expectedOutput: [8, 5, 10, 1, 7, null, 12] },
      { input: [[1, 3]], expectedOutput: [1, null, 3] },
      { input: [[1]], expectedOutput: [1] },
      { input: [[2, 1, 3]], expectedOutput: [2, 1, 3] },
      { input: [[3, 2, 1]], expectedOutput: [3, 2, null, 1] },
      { input: [[1, 2, 3]], expectedOutput: [1, null, 2, null, 3] },
      { input: [[4, 2]], expectedOutput: [4, 2] },
      { input: [[10, 5, 15]], expectedOutput: [10, 5, 15] },
      { input: [[6, 4, 2, 5, 8, 7, 9]], expectedOutput: [6, 4, 8, 2, 5, 7, 9] },
      { input: [[5, 3, 4]], expectedOutput: [5, 3, null, null, 4] }
    ]
  },
  {
    number: 129,
    title: "Two Sum in BST",
    topic: "Binary Search Trees",
    difficulty: "Easy",
    description: "Given the root of a binary search tree and an integer `k`, return `true` if there exist two elements in the BST such that their sum is equal to `k`, or `false` otherwise in O(n) time and O(h) space.",
    constraints: ["The number of nodes in the tree is in the range [1, 10^4].", "-10^4 <= Node.val <= 10^4", "root is guaranteed to be a valid binary search tree.", "-10^5 <= k <= 10^5"],
    examples: [
      { input: "root = [5,3,6,2,4,null,7], k = 9", output: "true", explanation: "Nodes 2 and 7 sum to 9." },
      { input: "root = [5,3,6,2,4,null,7], k = 28", output: "false", explanation: "No two nodes sum to 28." }
    ],
    functionName: "findTarget",
    returnType: "boolean",
    parameters: [{ name: "root", type: "TreeNode" }, { name: "k", type: "int" }],
    testCases: [
      { input: [[5, 3, 6, 2, 4, null, 7], 9], expectedOutput: true },
      { input: [[5, 3, 6, 2, 4, null, 7], 28], expectedOutput: false },
      { input: [[1], 2], expectedOutput: false },
      { input: [[2, 1, 3], 4], expectedOutput: true },
      { input: [[2, 1, 3], 3], expectedOutput: true },
      { input: [[2, 1, 3], 1], expectedOutput: false },
      { input: [[10, 5, 15, null, null, 11, 20], 21], expectedOutput: true },
      { input: [[0, -2, 2], 0], expectedOutput: true },
      { input: [[1, null, 2, null, 3], 5], expectedOutput: true },
      { input: [[4, 2, 6, 1, 3, 5, 7], 12], expectedOutput: true }
    ]
  },
  {
    number: 130,
    title: "Correct BST With Two Nodes Swapped",
    topic: "Binary Search Trees",
    difficulty: "Hard",
    description: "You are given the root of a binary search tree (BST), where the values of exactly two nodes of the tree were swapped by mistake. Recover the tree without changing its structure in O(1) space.",
    constraints: ["The number of nodes in the tree is in the range [2, 1000].", "-2^31 <= Node.val <= 2^31 - 1"],
    examples: [
      { input: "root = [1,3,null,null,2]", output: "[3,1,null,null,2]", explanation: "Nodes 1 and 3 were swapped." },
      { input: "root = [3,1,4,null,null,2]", output: "[2,1,4,null,null,3]", explanation: "Nodes 2 and 3 were swapped." }
    ],
    functionName: "recoverTree",
    returnType: "TreeNode",
    parameters: [{ name: "root", type: "TreeNode" }],
    testCases: [
      { input: [[1, 3, null, null, 2]], expectedOutput: [3, 1, null, null, 2] },
      { input: [[3, 1, 4, null, null, 2]], expectedOutput: [2, 1, 4, null, null, 3] },
      { input: [[2, 3, 1]], expectedOutput: [2, 1, 3] },
      { input: [[1, 2]], expectedOutput: [2, 1] },
      { input: [[3, null, 2, null, 1]], expectedOutput: [1, null, 2, null, 3] },
      { input: [[5, 6, 3, 1, 4]], expectedOutput: [5, 3, 6, 1, 4] },
      { input: [[4, 2, 6, 1, 5, 3, 7]], expectedOutput: [4, 2, 6, 1, 3, 5, 7] },
      { input: [[2, 4, 3, 1]], expectedOutput: [3, 4, 2, 1] },
      { input: [[10, 15, 5]], expectedOutput: [10, 5, 15] },
      { input: [[7, 2, 9, 1, 8]], expectedOutput: [7, 2, 9, 1, 8] }
    ]
  },
  {
    number: 131,
    title: "Largest BST in Binary Tree",
    topic: "Binary Search Trees",
    difficulty: "Medium",
    description: "Given a binary tree, find the size (number of nodes) of the largest subtree that is also a Binary Search Tree (BST) in O(n) time.",
    constraints: ["The number of nodes in the tree is in the range [0, 10^4].", "-10^4 <= Node.val <= 10^4"],
    examples: [
      { input: "root = [10,5,15,1,8,null,7]", output: "3", explanation: "Subtree [5,1,8] is the largest BST with size 3." },
      { input: "root = [4,2,7,2,3,5,null,2,null,null,null,null,null,1]", output: "2", explanation: "Largest BST size 2." }
    ],
    functionName: "largestBst",
    returnType: "int",
    parameters: [{ name: "root", type: "TreeNode" }],
    testCases: [
      { input: [[10, 5, 15, 1, 8, null, 7]], expectedOutput: 3 },
      { input: [[4, 2, 7, 2, 3, 5, null, 2, null, null, null, null, null, 1]], expectedOutput: 2 },
      { input: [[]], expectedOutput: 0 },
      { input: [[1]], expectedOutput: 1 },
      { input: [[2, 1, 3]], expectedOutput: 3 },
      { input: [[5, 2, 4, 1, 3]], expectedOutput: 3 },
      { input: [[50, 30, 60, 5, 20, 45, 70, null, null, null, null, null, null, 65, 80]], expectedOutput: 5 },
      { input: [[1, 2, 3]], expectedOutput: 1 },
      { input: [[10, 5, 15, null, 1, null, 8]], expectedOutput: 1 },
      { input: [[6, 6, 3, null, 2, 9, 3, null, null, 8, 2]], expectedOutput: 2 }
    ]
  }
];

writeTopic('topic10_bst.js', 'TOPIC_10_PROBLEMS', topic10Problems);
