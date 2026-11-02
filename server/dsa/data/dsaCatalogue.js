/**
 * DSA Master Catalogue
 * Aggregates all 200 DSA problems across 16 topics.
 * Validates test cases, generates starter templates for Python, JS, Java, C++, C,
 * and provides safe accessors that mask private test cases for frontend consumption.
 */

import { TOPIC_1_PROBLEMS } from './topic1_arrays.js';
import { TOPIC_2_PROBLEMS } from './topic2_binarySearch.js';
import { TOPIC_3_PROBLEMS } from './topic3_slidingWindow.js';
import { TOPIC_4_PROBLEMS } from './topic4_recursion.js';
import { TOPIC_5_PROBLEMS } from './topic5_linkedList.js';
import { TOPIC_6_PROBLEMS } from './topic6_stackQueue.js';
import { TOPIC_7_PROBLEMS } from './topic7_greedy.js';
import { TOPIC_8_PROBLEMS } from './topic8_heaps.js';
import { TOPIC_9_PROBLEMS } from './topic9_binaryTrees.js';
import { TOPIC_10_PROBLEMS } from './topic10_bst.js';
import { TOPIC_11_PROBLEMS } from './topic11_graphs.js';
import { TOPIC_12_PROBLEMS } from './topic12_dp.js';
import { TOPIC_13_PROBLEMS } from './topic13_tries.js';
import { TOPIC_14_PROBLEMS } from './topic14_strings.js';
import { TOPIC_15_PROBLEMS } from './topic15_bitManipulation.js';
import { TOPIC_16_PROBLEMS } from './topic16_math.js';

// Type mapping helpers
const TYPE_MAP = {
  python: {
    'int': 'int',
    'long': 'int',
    'boolean': 'bool',
    'double': 'float',
    'string': 'str',
    'int[]': 'list[int]',
    'int[][]': 'list[list[int]]',
    'int[][][]': 'list[list[list[int]]]',
    'string[]': 'list[str]',
    'string[][]': 'list[list[str]]',
    'char[][]': 'list[list[str]]',
    'ListNode': 'Optional[ListNode]',
    'TreeNode': 'Optional[TreeNode]',
    'Node': 'Optional[Node]',
    'void': 'None'
  },
  javascript: {
    'int': 'number',
    'long': 'number',
    'boolean': 'boolean',
    'double': 'number',
    'string': 'string',
    'int[]': 'number[]',
    'int[][]': 'number[][]',
    'int[][][]': 'number[][][]',
    'string[]': 'string[]',
    'string[][]': 'string[][]',
    'char[][]': 'character[][]',
    'ListNode': 'ListNode',
    'TreeNode': 'TreeNode',
    'Node': 'Node',
    'void': 'void'
  },
  java: {
    'int': 'int',
    'long': 'long',
    'boolean': 'boolean',
    'double': 'double',
    'string': 'String',
    'int[]': 'int[]',
    'int[][]': 'int[][]',
    'int[][][]': 'int[][][]',
    'string[]': 'String[]',
    'string[][]': 'List<List<String>>',
    'char[][]': 'char[][]',
    'ListNode': 'ListNode',
    'TreeNode': 'TreeNode',
    'Node': 'Node',
    'void': 'void'
  },
  cpp: {
    'int': 'int',
    'long': 'long long',
    'boolean': 'bool',
    'double': 'double',
    'string': 'string',
    'int[]': 'vector<int>',
    'int[][]': 'vector<vector<int>>',
    'int[][][]': 'vector<vector<vector<int>>>',
    'string[]': 'vector<string>',
    'string[][]': 'vector<vector<string>>',
    'char[][]': 'vector<vector<char>>',
    'ListNode': 'ListNode*',
    'TreeNode': 'TreeNode*',
    'Node': 'Node*',
    'void': 'void'
  },
  c: {
    'int': 'int',
    'long': 'long long',
    'boolean': 'bool',
    'double': 'double',
    'string': 'char*',
    'int[]': 'int*',
    'int[][]': 'int**',
    'string[]': 'char**',
    'char[][]': 'char**',
    'ListNode': 'struct ListNode*',
    'TreeNode': 'struct TreeNode*',
    'Node': 'struct Node*',
    'void': 'void'
  }
};

const DEFAULT_RETURN = {
  python: {
    'int': '0',
    'long': '0',
    'boolean': 'False',
    'double': '0.0',
    'string': '""',
    'int[]': '[]',
    'int[][]': '[]',
    'int[][][]': '[]',
    'string[]': '[]',
    'string[][]': '[]',
    'char[][]': '[]',
    'ListNode': 'None',
    'TreeNode': 'None',
    'Node': 'None',
    'void': 'pass'
  },
  javascript: {
    'int': '0',
    'long': '0',
    'boolean': 'false',
    'double': '0',
    'string': '""',
    'int[]': '[]',
    'int[][]': '[]',
    'int[][][]': '[]',
    'string[]': '[]',
    'string[][]': '[]',
    'char[][]': '[]',
    'ListNode': 'null',
    'TreeNode': 'null',
    'Node': 'null',
    'void': ''
  },
  java: {
    'int': '0',
    'long': '0L',
    'boolean': 'false',
    'double': '0.0',
    'string': '""',
    'int[]': 'new int[0]',
    'int[][]': 'new int[0][0]',
    'int[][][]': 'new int[0][0][0]',
    'string[]': 'new String[0]',
    'string[][]': 'new ArrayList<>()',
    'char[][]': 'new char[0][0]',
    'ListNode': 'null',
    'TreeNode': 'null',
    'Node': 'null',
    'void': ''
  },
  cpp: {
    'int': '0',
    'long': '0',
    'boolean': 'false',
    'double': '0.0',
    'string': '""',
    'int[]': '{}',
    'int[][]': '{}',
    'int[][][]': '{}',
    'string[]': '{}',
    'string[][]': '{}',
    'char[][]': '{}',
    'ListNode': 'nullptr',
    'TreeNode': 'nullptr',
    'Node': 'nullptr',
    'void': ''
  },
  c: {
    'int': '0',
    'long': '0',
    'boolean': 'false',
    'double': '0.0',
    'string': 'NULL',
    'int[]': 'NULL',
    'int[][]': 'NULL',
    'string[]': 'NULL',
    'char[][]': 'NULL',
    'ListNode': 'NULL',
    'TreeNode': 'NULL',
    'Node': 'NULL',
    'void': ''
  }
};

function generateStarterCodes(prob) {
  const { functionName, parameters = [], returnType, isDesign, topic } = prob;

  // Design problem handling
  if (isDesign) {
    return generateDesignStarterCodes(prob);
  }

  // Python Starter
  const pyParams = parameters.map(p => `${p.name}: ${TYPE_MAP.python[p.type] || 'Any'}`).join(', ');
  const pyRet = TYPE_MAP.python[returnType] || 'Any';
  const pyDefRet = DEFAULT_RETURN.python[returnType] ?? 'pass';
  let pyStarter = '';
  if (prob.topic === 'Linked Lists') {
    pyStarter += `# Definition for singly-linked list.\n# class ListNode:\n#     def __init__(self, val=0, next=None):\n#         self.val = val\n#         self.next = next\n\n`;
  } else if (prob.topic === 'Binary Trees' || prob.topic === 'Binary Search Trees') {
    pyStarter += `# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\n\n`;
  }
  pyStarter += `class Solution:\n    def ${functionName}(self, ${pyParams}) -> ${pyRet}:\n        # Write your solution here\n`;
  if (returnType === 'void') {
    pyStarter += `        pass\n`;
  } else {
    pyStarter += `        return ${pyDefRet}\n`;
  }

  // JavaScript Starter
  let jsStarter = '';
  if (prob.topic === 'Linked Lists') {
    jsStarter += `/**\n * Definition for singly-linked list.\n * function ListNode(val, next) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.next = (next===undefined ? null : next)\n * }\n */\n\n`;
  } else if (prob.topic === 'Binary Trees' || prob.topic === 'Binary Search Trees') {
    jsStarter += `/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n\n`;
  }
  jsStarter += `/**\n`;
  parameters.forEach(p => {
    jsStarter += ` * @param {${TYPE_MAP.javascript[p.type] || '*'}} ${p.name}\n`;
  });
  jsStarter += ` * @return {${TYPE_MAP.javascript[returnType] || '*'}}\n */\n`;
  const jsParams = parameters.map(p => p.name).join(', ');
  jsStarter += `var ${functionName} = function(${jsParams}) {\n    // Write your solution here\n`;
  if (returnType !== 'void') {
    jsStarter += `    return ${DEFAULT_RETURN.javascript[returnType]};\n`;
  }
  jsStarter += `};\n`;

  // Java Starter
  let javaStarter = `import java.util.*;\n\n`;
  if (prob.topic === 'Linked Lists') {
    javaStarter += `/**\n * public class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode() {}\n *     ListNode(int val) { this.val = val; }\n *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }\n * }\n */\n\n`;
  } else if (prob.topic === 'Binary Trees' || prob.topic === 'Binary Search Trees') {
    javaStarter += `/**\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) { this.val = val; this.left = left; this.right = right; }\n * }\n */\n\n`;
  }
  const javaParams = parameters.map(p => `${TYPE_MAP.java[p.type] || 'Object'} ${p.name}`).join(', ');
  const javaRet = TYPE_MAP.java[returnType] || 'Object';
  const javaDefRet = DEFAULT_RETURN.java[returnType] || 'null';
  javaStarter += `class Solution {\n    public ${javaRet} ${functionName}(${javaParams}) {\n        // Write your solution here\n`;
  if (returnType !== 'void') {
    javaStarter += `        return ${javaDefRet};\n`;
  }
  javaStarter += `    }\n}\n`;

  // C++ Starter
  let cppStarter = `#include <vector>\n#include <string>\n#include <unordered_map>\n#include <unordered_set>\n#include <algorithm>\n#include <queue>\n#include <stack>\n\nusing namespace std;\n\n`;
  if (prob.topic === 'Linked Lists') {
    cppStarter += `/**\n * struct ListNode {\n *     int val;\n *     ListNode *next;\n *     ListNode() : val(0), next(nullptr) {}\n *     ListNode(int x) : val(x), next(nullptr) {}\n *     ListNode(int x, ListNode *next) : val(x), next(next) {}\n * };\n */\n\n`;
  } else if (prob.topic === 'Binary Trees' || prob.topic === 'Binary Search Trees') {
    cppStarter += `/**\n * struct TreeNode {\n *     int val;\n *     TreeNode *left;\n *     TreeNode *right;\n *     TreeNode() : val(0), left(nullptr), right(nullptr) {}\n *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\n *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}\n * };\n */\n\n`;
  }
  const cppParams = parameters.map(p => {
    const t = TYPE_MAP.cpp[p.type] || 'auto';
    if (t.startsWith('vector') || t === 'string') return `${t}& ${p.name}`;
    return `${t} ${p.name}`;
  }).join(', ');
  const cppRet = TYPE_MAP.cpp[returnType] || 'void';
  const cppDefRet = DEFAULT_RETURN.cpp[returnType] ?? '';
  cppStarter += `class Solution {\npublic:\n    ${cppRet} ${functionName}(${cppParams}) {\n        // Write your solution here\n`;
  if (returnType !== 'void') {
    cppStarter += `        return ${cppDefRet};\n`;
  }
  cppStarter += `    }\n};\n`;

  // C Starter
  let cStarter = `#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\n`;
  if (prob.topic === 'Linked Lists') {
    cStarter += `/**\n * struct ListNode {\n *     int val;\n *     struct ListNode *next;\n * };\n */\n\n`;
  } else if (prob.topic === 'Binary Trees' || prob.topic === 'Binary Search Trees') {
    cStarter += `/**\n * struct TreeNode {\n *     int val;\n *     struct TreeNode *left;\n *     struct TreeNode *right;\n * };\n */\n\n`;
  }
  const cParamsList = [];
  parameters.forEach(p => {
    const cType = TYPE_MAP.c[p.type] || 'int';
    cParamsList.push(`${cType} ${p.name}`);
    if (p.type === 'int[]' || p.type === 'string[]') {
      cParamsList.push(`int ${p.name}Size`);
    } else if (p.type === 'int[][]') {
      cParamsList.push(`int ${p.name}Size`);
      cParamsList.push(`int* ${p.name}ColSize`);
    }
  });
  if (returnType === 'int[]') {
    cParamsList.push('int* returnSize');
  } else if (returnType === 'int[][]') {
    cParamsList.push('int* returnSize');
    cParamsList.push('int** returnColumnSizes');
  }
  const cRet = TYPE_MAP.c[returnType] || 'int';
  const cDefRet = DEFAULT_RETURN.c[returnType] ?? '0';
  cStarter += `${cRet} ${functionName}(${cParamsList.join(', ')}) {\n    // Write your solution here\n`;
  if (returnType === 'int[]') {
    cStarter += `    *returnSize = 0;\n    return NULL;\n`;
  } else if (returnType !== 'void') {
    cStarter += `    return ${cDefRet};\n`;
  }
  cStarter += `}\n`;

  return {
    python: pyStarter,
    javascript: jsStarter,
    java: javaStarter,
    cpp: cppStarter,
    c: cStarter
  };
}

function generateDesignStarterCodes(prob) {
  const title = prob.title;
  if (title.includes('Min Stack')) {
    return {
      python: `class MinStack:\n    def __init__(self):\n        pass\n\n    def push(self, val: int) -> None:\n        pass\n\n    def pop(self) -> None:\n        pass\n\n    def top(self) -> int:\n        return 0\n\n    def getMin(self) -> int:\n        return 0\n`,
      javascript: `var MinStack = function() {\n};\n\nMinStack.prototype.push = function(val) {\n};\n\nMinStack.prototype.pop = function() {\n};\n\nMinStack.prototype.top = function() {\n    return 0;\n};\n\nMinStack.prototype.getMin = function() {\n    return 0;\n};\n`,
      java: `import java.util.*;\n\nclass MinStack {\n    public MinStack() {\n    }\n\n    public void push(int val) {\n    }\n\n    public void pop() {\n    }\n\n    public int top() {\n        return 0;\n    }\n\n    public int getMin() {\n        return 0;\n    }\n}\n`,
      cpp: `#include <stack>\n\nusing namespace std;\n\nclass MinStack {\npublic:\n    MinStack() {\n    }\n\n    void push(int val) {\n    }\n\n    void pop() {\n    }\n\n    int top() {\n        return 0;\n    }\n\n    int getMin() {\n        return 0;\n    }\n};\n`,
      c: `#include <stdlib.h>\n#include <stdbool.h>\n\ntypedef struct {\n    int* data;\n    int* minData;\n    int top;\n} MinStack;\n\nMinStack* minStackCreate() {\n    return NULL;\n}\n\nvoid minStackPush(MinStack* obj, int val) {\n}\n\nvoid minStackPop(MinStack* obj) {\n}\n\nint minStackTop(MinStack* obj) {\n    return 0;\n}\n\nint minStackGetMin(MinStack* obj) {\n    return 0;\n}\n\nvoid minStackFree(MinStack* obj) {\n}\n`
    };
  }

  if (title.includes('LRU Cache')) {
    return {
      python: `class LRUCache:\n    def __init__(self, capacity: int):\n        pass\n\n    def get(self, key: int) -> int:\n        return -1\n\n    def put(self, key: int, value: int) -> None:\n        pass\n`,
      javascript: `var LRUCache = function(capacity) {\n};\n\nLRUCache.prototype.get = function(key) {\n    return -1;\n};\n\nLRUCache.prototype.put = function(key, value) {\n};\n`,
      java: `import java.util.*;\n\nclass LRUCache {\n    public LRUCache(int capacity) {\n    }\n\n    public int get(int key) {\n        return -1;\n    }\n\n    public void put(int key, int value) {\n    }\n}\n`,
      cpp: `#include <unordered_map>\n#include <list>\n\nusing namespace std;\n\nclass LRUCache {\npublic:\n    LRUCache(int capacity) {\n    }\n\n    int get(int key) {\n        return -1;\n    }\n\n    void put(int key, int value) {\n    }\n};\n`,
      c: `#include <stdlib.h>\n\ntypedef struct {\n    int capacity;\n} LRUCache;\n\nLRUCache* lRUCacheCreate(int capacity) {\n    return NULL;\n}\n\nint lRUCacheGet(LRUCache* obj, int key) {\n    return -1;\n}\n\nvoid lRUCachePut(LRUCache* obj, int key, int value) {\n}\n\nvoid lRUCacheFree(LRUCache* obj) {\n}\n`
    };
  }

  if (title.includes('LFU Cache')) {
    return {
      python: `class LFUCache:\n    def __init__(self, capacity: int):\n        pass\n\n    def get(self, key: int) -> int:\n        return -1\n\n    def put(self, key: int, value: int) -> None:\n        pass\n`,
      javascript: `var LFUCache = function(capacity) {\n};\n\nLFUCache.prototype.get = function(key) {\n    return -1;\n};\n\nLFUCache.prototype.put = function(key, value) {\n};\n`,
      java: `import java.util.*;\n\nclass LFUCache {\n    public LFUCache(int capacity) {\n    }\n\n    public int get(int key) {\n        return -1;\n    }\n\n    public void put(int key, int value) {\n    }\n}\n`,
      cpp: `#include <unordered_map>\n#include <list>\n\nusing namespace std;\n\nclass LFUCache {\npublic:\n    LFUCache(int capacity) {\n    }\n\n    int get(int key) {\n        return -1;\n    }\n\n    void put(int key, int value) {\n    }\n};\n`,
      c: `#include <stdlib.h>\n\ntypedef struct {\n    int capacity;\n} LFUCache;\n\nLFUCache* lFUCacheCreate(int capacity) {\n    return NULL;\n}\n\nint lFUCacheGet(LFUCache* obj, int key) {\n    return -1;\n}\n\nvoid lFUCachePut(LFUCache* obj, int key, int value) {\n}\n\nvoid lFUCacheFree(LFUCache* obj) {\n}\n`
    };
  }

  if (title.includes('Median From Data Stream')) {
    return {
      python: `class MedianFinder:\n    def __init__(self):\n        pass\n\n    def addNum(self, num: int) -> None:\n        pass\n\n    def findMedian(self) -> float:\n        return 0.0\n`,
      javascript: `var MedianFinder = function() {\n};\n\nMedianFinder.prototype.addNum = function(num) {\n};\n\nMedianFinder.prototype.findMedian = function() {\n    return 0.0;\n};\n`,
      java: `import java.util.*;\n\nclass MedianFinder {\n    public MedianFinder() {\n    }\n\n    public void addNum(int num) {\n    }\n\n    public double findMedian() {\n        return 0.0;\n    }\n}\n`,
      cpp: `#include <queue>\n#include <vector>\n\nusing namespace std;\n\nclass MedianFinder {\npublic:\n    MedianFinder() {\n    }\n\n    void addNum(int num) {\n    }\n\n    double findMedian() {\n        return 0.0;\n    }\n};\n`,
      c: `#include <stdlib.h>\n\ntypedef struct {\n    int count;\n} MedianFinder;\n\nMedianFinder* medianFinderCreate() {\n    return NULL;\n}\n\nvoid medianFinderAddNum(MedianFinder* obj, int num) {\n}\n\ndouble medianFinderFindMedian(MedianFinder* obj) {\n    return 0.0;\n}\n\nvoid medianFinderFree(MedianFinder* obj) {\n}\n`
    };
  }

  if (title.includes('Trie')) {
    return {
      python: `class Trie:\n    def __init__(self):\n        pass\n\n    def insert(self, word: str) -> None:\n        pass\n\n    def search(self, word: str) -> bool:\n        return False\n\n    def startsWith(self, prefix: str) -> bool:\n        return False\n`,
      javascript: `var Trie = function() {\n};\n\nTrie.prototype.insert = function(word) {\n};\n\nTrie.prototype.search = function(word) {\n    return false;\n};\n\nTrie.prototype.startsWith = function(prefix) {\n    return false;\n};\n`,
      java: `class Trie {\n    public Trie() {\n    }\n\n    public void insert(String word) {\n    }\n\n    public boolean search(String word) {\n        return false;\n    }\n\n    public boolean startsWith(String prefix) {\n        return false;\n    }\n}\n`,
      cpp: `#include <string>\n\nusing namespace std;\n\nclass Trie {\npublic:\n    Trie() {\n    }\n\n    void insert(string word) {\n    }\n\n    bool search(string word) {\n        return false;\n    }\n\n    bool startsWith(string prefix) {\n        return false;\n    }\n};\n`,
      c: `#include <stdbool.h>\n#include <stdlib.h>\n\ntypedef struct Trie {\n    struct Trie* children[26];\n    bool isEnd;\n} Trie;\n\nTrie* trieCreate() {\n    return NULL;\n}\n\nvoid trieInsert(Trie* obj, char* word) {\n}\n\nbool trieSearch(Trie* obj, char* word) {\n    return false;\n}\n\nbool trieStartsWith(Trie* obj, char* prefix) {\n    return false;\n}\n\nvoid trieFree(Trie* obj) {\n}\n`
    };
  }

  // Fallback for any other design problem
  return {
    python: `class Solution:\n    pass\n`,
    javascript: `var Solution = function() {};\n`,
    java: `class Solution {}\n`,
    cpp: `class Solution {};\n`,
    c: `// Design structure\n`
  };
}

// Combine all raw topic problems
const RAW_PROBLEMS = [
  ...TOPIC_1_PROBLEMS,
  ...TOPIC_2_PROBLEMS,
  ...TOPIC_3_PROBLEMS,
  ...TOPIC_4_PROBLEMS,
  ...TOPIC_5_PROBLEMS,
  ...TOPIC_6_PROBLEMS,
  ...TOPIC_7_PROBLEMS,
  ...TOPIC_8_PROBLEMS,
  ...TOPIC_9_PROBLEMS,
  ...TOPIC_10_PROBLEMS,
  ...TOPIC_11_PROBLEMS,
  ...TOPIC_12_PROBLEMS,
  ...TOPIC_13_PROBLEMS,
  ...TOPIC_14_PROBLEMS,
  ...TOPIC_15_PROBLEMS,
  ...TOPIC_16_PROBLEMS
];

// Map into normalized problem objects with stable IDs and tagged tests
export const ALL_DSA_PROBLEMS = RAW_PROBLEMS.map((raw, index) => {
  const number = raw.number || (index + 1);
  const id = `dsa-${number}`;
  const slug = (raw.title || `problem-${number}`)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

  // Tag first 3 as public, remaining 7 as private
  const testCases = (raw.testCases || []).map((tc, tcIdx) => ({
    id: `tc-${number}-${tcIdx + 1}`,
    caseNumber: tcIdx + 1,
    isHidden: tcIdx >= 3,
    input: tc.input,
    expectedOutput: tc.expectedOutput
  }));

  const starterCode = generateStarterCodes(raw);

  return {
    id,
    number,
    title: raw.title,
    slug,
    topic: raw.topic,
    difficulty: raw.difficulty,
    description: raw.description,
    constraints: raw.constraints || [],
    examples: raw.examples || [],
    functionName: raw.functionName || 'solve',
    parameters: raw.parameters || [],
    returnType: raw.returnType || 'int',
    isDesign: Boolean(raw.isDesign),
    starterCode,
    testCases,
    totalTestCases: testCases.length,
    publicTestCount: Math.min(3, testCases.length),
    privateTestCount: Math.max(0, testCases.length - 3)
  };
});

/**
 * Strips private test case contents for frontend/client exposure
 */
export function sanitizeProblemForClient(problem) {
  if (!problem) return null;
  const publicTests = (problem.testCases || [])
    .filter(tc => !tc.isHidden)
    .map(tc => ({
      id: tc.id,
      caseNumber: tc.caseNumber,
      isHidden: false,
      input: tc.input,
      expectedOutput: tc.expectedOutput
    }));

  return {
    ...problem,
    testCases: publicTests,
    hasPrivateTests: (problem.testCases || []).length > publicTests.length
  };
}

/**
 * Returns all problems. If includePrivate is false, private test cases are hidden.
 */
export function getAllDSAProblems({ includePrivate = false } = {}) {
  if (includePrivate) {
    return ALL_DSA_PROBLEMS;
  }
  return ALL_DSA_PROBLEMS.map(sanitizeProblemForClient);
}

/**
 * Returns a problem by its stable ID (e.g., 'dsa-13') or number (e.g., 13).
 */
export function getDSAProblemById(idOrNumber, { includePrivate = false } = {}) {
  const prob = ALL_DSA_PROBLEMS.find(p => p.id === idOrNumber || p.number === Number(idOrNumber));
  if (!prob) return null;
  return includePrivate ? prob : sanitizeProblemForClient(prob);
}

/**
 * Returns topic metadata with counts and problem IDs
 */
export function getDSATopics() {
  const topicsMap = new Map();
  ALL_DSA_PROBLEMS.forEach(p => {
    if (!topicsMap.has(p.topic)) {
      topicsMap.set(p.topic, {
        name: p.topic,
        totalProblems: 0,
        easy: 0,
        medium: 0,
        hard: 0,
        problemIds: []
      });
    }
    const t = topicsMap.get(p.topic);
    t.totalProblems++;
    if (p.difficulty === 'Easy') t.easy++;
    else if (p.difficulty === 'Medium') t.medium++;
    else if (p.difficulty === 'Hard') t.hard++;
    t.problemIds.push(p.id);
  });
  return Array.from(topicsMap.values());
}

/**
 * Returns summary manifest metrics
 */
export function getDSAManifestSummary() {
  const total = ALL_DSA_PROBLEMS.length;
  let easy = 0, medium = 0, hard = 0;
  ALL_DSA_PROBLEMS.forEach(p => {
    if (p.difficulty === 'Easy') easy++;
    else if (p.difficulty === 'Medium') medium++;
    else if (p.difficulty === 'Hard') hard++;
  });
  return {
    totalProblems: total,
    easy,
    medium,
    hard,
    topicsCount: getDSATopics().length
  };
}
