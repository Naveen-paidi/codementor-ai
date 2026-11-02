/**
 * topic14_strings.js
 */

export const TOPIC_14_PROBLEMS = [
  {
    "number": 190,
    "title": "Rabin-Karp Algorithm",
    "topic": "Strings",
    "difficulty": "Medium",
    "description": "Given two strings, one is a `text` and other is a `pattern`. Find all the indices of the occurrences of the pattern in the given text using the Rabin-Karp pattern searching algorithm (1-based or 0-based indices).",
    "constraints": [
      "1 <= text.length, pattern.length <= 10^5",
      "text and pattern consist of lowercase letters."
    ],
    "examples": [
      {
        "input": "pattern = 'geek', text = 'geeksforgeeks'",
        "output": "[0,8]",
        "explanation": "Pattern occurs at index 0 and 8."
      },
      {
        "input": "pattern = 'aba', text = 'ababa'",
        "output": "[0,2]",
        "explanation": "Pattern occurs at 0 and 2."
      }
    ],
    "functionName": "rabinKarp",
    "returnType": "int[]",
    "parameters": [
      {
        "name": "pattern",
        "type": "string"
      },
      {
        "name": "text",
        "type": "string"
      }
    ],
    "testCases": [
      {
        "input": [
          "geek",
          "geeksforgeeks"
        ],
        "expectedOutput": [
          0,
          8
        ]
      },
      {
        "input": [
          "aba",
          "ababa"
        ],
        "expectedOutput": [
          0,
          2
        ]
      },
      {
        "input": [
          "a",
          "aaaaa"
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
          "xyz",
          "abc"
        ],
        "expectedOutput": []
      },
      {
        "input": [
          "test",
          "this is a test text"
        ],
        "expectedOutput": [
          10
        ]
      },
      {
        "input": [
          "abc",
          "abc"
        ],
        "expectedOutput": [
          0
        ]
      },
      {
        "input": [
          "a",
          "a"
        ],
        "expectedOutput": [
          0
        ]
      },
      {
        "input": [
          "cd",
          "abcdef"
        ],
        "expectedOutput": [
          2
        ]
      },
      {
        "input": [
          "ba",
          "abracadabra"
        ],
        "expectedOutput": [
          8
        ]
      },
      {
        "input": [
          "aa",
          "aaa"
        ],
        "expectedOutput": [
          0,
          1
        ]
      }
    ]
  },
  {
    "number": 191,
    "title": "Z Function",
    "topic": "Strings",
    "difficulty": "Medium",
    "description": "Given a string `s`, compute the Z-array for the string. For a string of length `n`, `Z[i]` is the length of the longest common prefix between `s` and the suffix of `s` starting at index `i` in O(n) time.",
    "constraints": [
      "1 <= s.length <= 10^5",
      "s consists of lowercase English letters."
    ],
    "examples": [
      {
        "input": "s = 'aab'",
        "output": "[0,1,0]",
        "explanation": "Z-array values for 'aab'."
      },
      {
        "input": "s = 'aaaaa'",
        "output": "[0,4,3,2,1]",
        "explanation": "Z-array for 'aaaaa'."
      }
    ],
    "functionName": "zFunction",
    "returnType": "int[]",
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
        "expectedOutput": [
          0,
          1,
          0
        ]
      },
      {
        "input": [
          "aaaaa"
        ],
        "expectedOutput": [
          0,
          4,
          3,
          2,
          1
        ]
      },
      {
        "input": [
          "a"
        ],
        "expectedOutput": [
          0
        ]
      },
      {
        "input": [
          "abacaba"
        ],
        "expectedOutput": [
          0,
          0,
          1,
          0,
          3,
          0,
          1
        ]
      },
      {
        "input": [
          "abc"
        ],
        "expectedOutput": [
          0,
          0,
          0
        ]
      },
      {
        "input": [
          "aba"
        ],
        "expectedOutput": [
          0,
          0,
          1
        ]
      },
      {
        "input": [
          "baabaa"
        ],
        "expectedOutput": [
          0,
          0,
          0,
          3,
          0,
          0
        ]
      },
      {
        "input": [
          "aa"
        ],
        "expectedOutput": [
          0,
          1
        ]
      },
      {
        "input": [
          "abracadabra"
        ],
        "expectedOutput": [
          0,
          0,
          0,
          1,
          0,
          1,
          0,
          4,
          0,
          0,
          1
        ]
      },
      {
        "input": [
          "xyzxyz"
        ],
        "expectedOutput": [
          0,
          0,
          0,
          3,
          0,
          0
        ]
      }
    ]
  },
  {
    "number": 192,
    "title": "KMP Algorithm / LPS Array",
    "topic": "Strings",
    "difficulty": "Medium",
    "description": "Given a string `txt` and a pattern string `pat`, find the occurrences of `pat` in `txt` using the Knuth-Morris-Pratt (KMP) pattern searching algorithm and return their starting indices in O(n + m) time.",
    "constraints": [
      "1 <= txt.length <= 10^5",
      "1 <= pat.length <= txt.length",
      "Both consist of lowercase English letters."
    ],
    "examples": [
      {
        "input": "pat = 'bat', txt = 'batmanbat'",
        "output": "[0,6]",
        "explanation": "Found at index 0 and 6."
      },
      {
        "input": "pat = 'aba', txt = 'ababa'",
        "output": "[0,2]",
        "explanation": "Found at index 0 and 2."
      }
    ],
    "functionName": "kmpSearch",
    "returnType": "int[]",
    "parameters": [
      {
        "name": "pat",
        "type": "string"
      },
      {
        "name": "txt",
        "type": "string"
      }
    ],
    "testCases": [
      {
        "input": [
          "bat",
          "batmanbat"
        ],
        "expectedOutput": [
          0,
          6
        ]
      },
      {
        "input": [
          "aba",
          "ababa"
        ],
        "expectedOutput": [
          0,
          2
        ]
      },
      {
        "input": [
          "a",
          "a"
        ],
        "expectedOutput": [
          0
        ]
      },
      {
        "input": [
          "abc",
          "def"
        ],
        "expectedOutput": []
      },
      {
        "input": [
          "aa",
          "aaaa"
        ],
        "expectedOutput": [
          0,
          1,
          2
        ]
      },
      {
        "input": [
          "test",
          "testingtest"
        ],
        "expectedOutput": [
          0,
          7
        ]
      },
      {
        "input": [
          "xy",
          "xyzxy"
        ],
        "expectedOutput": [
          0,
          3
        ]
      },
      {
        "input": [
          "ab",
          "cabab"
        ],
        "expectedOutput": [
          1,
          3
        ]
      },
      {
        "input": [
          "hello",
          "hello world hello"
        ],
        "expectedOutput": [
          0,
          12
        ]
      },
      {
        "input": [
          "z",
          "abc"
        ],
        "expectedOutput": []
      }
    ]
  },
  {
    "number": 193,
    "title": "Shortest Palindrome",
    "topic": "Strings",
    "difficulty": "Hard",
    "description": "You are given a string `s`. You can convert `s` to a palindrome by adding characters in front of it. Return the shortest palindrome you can find by performing this transformation in O(n) time using KMP.",
    "constraints": [
      "0 <= s.length <= 5 * 10^4",
      "s consists of lowercase English letters only."
    ],
    "examples": [
      {
        "input": "s = 'aacecaaa'",
        "output": "'aaacecaaa'",
        "explanation": "Add 'a' in front."
      },
      {
        "input": "s = 'abcd'",
        "output": "'dcbabcd'",
        "explanation": "Add 'dcb' in front."
      }
    ],
    "functionName": "shortestPalindrome",
    "returnType": "string",
    "parameters": [
      {
        "name": "s",
        "type": "string"
      }
    ],
    "testCases": [
      {
        "input": [
          "aacecaaa"
        ],
        "expectedOutput": "aaacecaaa"
      },
      {
        "input": [
          "abcd"
        ],
        "expectedOutput": "dcbabcd"
      },
      {
        "input": [
          ""
        ],
        "expectedOutput": ""
      },
      {
        "input": [
          "a"
        ],
        "expectedOutput": "a"
      },
      {
        "input": [
          "aa"
        ],
        "expectedOutput": "aa"
      },
      {
        "input": [
          "racecar"
        ],
        "expectedOutput": "racecar"
      },
      {
        "input": [
          "banana"
        ],
        "expectedOutput": "anababanana"
      },
      {
        "input": [
          "abacaba"
        ],
        "expectedOutput": "abacaba"
      },
      {
        "input": [
          "aba"
        ],
        "expectedOutput": "aba"
      },
      {
        "input": [
          "abb"
        ],
        "expectedOutput": "bbabb"
      }
    ]
  },
  {
    "number": 194,
    "title": "Valid Anagram",
    "topic": "Strings",
    "difficulty": "Easy",
    "description": "Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.",
    "constraints": [
      "1 <= s.length, t.length <= 5 * 10^4",
      "s and t consist of lowercase English letters."
    ],
    "examples": [
      {
        "input": "s = 'anagram', t = 'nagaram'",
        "output": "true",
        "explanation": "'nagaram' is an anagram of 'anagram'."
      },
      {
        "input": "s = 'rat', t = 'car'",
        "output": "false",
        "explanation": "Not an anagram."
      }
    ],
    "functionName": "isAnagram",
    "returnType": "boolean",
    "parameters": [
      {
        "name": "s",
        "type": "string"
      },
      {
        "name": "t",
        "type": "string"
      }
    ],
    "testCases": [
      {
        "input": [
          "anagram",
          "nagaram"
        ],
        "expectedOutput": true
      },
      {
        "input": [
          "rat",
          "car"
        ],
        "expectedOutput": false
      },
      {
        "input": [
          "a",
          "a"
        ],
        "expectedOutput": true
      },
      {
        "input": [
          "a",
          "b"
        ],
        "expectedOutput": false
      },
      {
        "input": [
          "ab",
          "ba"
        ],
        "expectedOutput": true
      },
      {
        "input": [
          "listen",
          "silent"
        ],
        "expectedOutput": true
      },
      {
        "input": [
          "triangle",
          "integral"
        ],
        "expectedOutput": true
      },
      {
        "input": [
          "apple",
          "pleba"
        ],
        "expectedOutput": false
      },
      {
        "input": [
          "night",
          "thing"
        ],
        "expectedOutput": true
      },
      {
        "input": [
          "hello",
          "oellh"
        ],
        "expectedOutput": true
      }
    ]
  }
];
