/**
 * topic16_math.js
 */

export const TOPIC_16_PROBLEMS = [
  {
    "number": 200,
    "title": "Print All Primes up to N",
    "topic": "Mathematics",
    "difficulty": "Medium",
    "description": "Given a number `N`, calculate all prime numbers less than or equal to `N` using the Sieve of Eratosthenes in O(N log(log N)) time.",
    "constraints": [
      "1 <= N <= 10^5"
    ],
    "examples": [
      {
        "input": "n = 10",
        "output": "[2,3,5,7]",
        "explanation": "Prime numbers up to 10 are 2, 3, 5, 7."
      },
      {
        "input": "n = 5",
        "output": "[2,3,5]",
        "explanation": "Prime numbers up to 5."
      }
    ],
    "functionName": "sieveOfEratosthenes",
    "returnType": "int[]",
    "parameters": [
      {
        "name": "n",
        "type": "int"
      }
    ],
    "testCases": [
      {
        "input": [
          10
        ],
        "expectedOutput": [
          2,
          3,
          5,
          7
        ]
      },
      {
        "input": [
          5
        ],
        "expectedOutput": [
          2,
          3,
          5
        ]
      },
      {
        "input": [
          2
        ],
        "expectedOutput": [
          2
        ]
      },
      {
        "input": [
          1
        ],
        "expectedOutput": []
      },
      {
        "input": [
          20
        ],
        "expectedOutput": [
          2,
          3,
          5,
          7,
          11,
          13,
          17,
          19
        ]
      },
      {
        "input": [
          30
        ],
        "expectedOutput": [
          2,
          3,
          5,
          7,
          11,
          13,
          17,
          19,
          23,
          29
        ]
      },
      {
        "input": [
          3
        ],
        "expectedOutput": [
          2,
          3
        ]
      },
      {
        "input": [
          4
        ],
        "expectedOutput": [
          2,
          3
        ]
      },
      {
        "input": [
          15
        ],
        "expectedOutput": [
          2,
          3,
          5,
          7,
          11,
          13
        ]
      },
      {
        "input": [
          25
        ],
        "expectedOutput": [
          2,
          3,
          5,
          7,
          11,
          13,
          17,
          19,
          23
        ]
      }
    ]
  }
];
