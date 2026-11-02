/**
 * DSA Catalogue Definitions - Topic 3: Sliding Window and Two Pointers (Problems 37 to 47)
 */

export const TOPIC_3_PROBLEMS = [
  {
    number: 37,
    title: "Longest Substring Without Repeating Characters",
    topic: "Sliding Window and Two Pointers",
    difficulty: "Medium",
    description: "Given a string `s`, find the length of the longest substring without repeating characters.",
    constraints: ["0 <= s.length <= 5 * 10^4", "s consists of English letters, digits, symbols and spaces."],
    examples: [
      { input: "s = 'abcabcbb'", output: "3", explanation: "The answer is 'abc', with the length of 3." },
      { input: "s = 'bbbbb'", output: "1", explanation: "The answer is 'b', with the length of 1." }
    ],
    functionName: "lengthOfLongestSubstring",
    returnType: "int",
    parameters: [{ name: "s", type: "string" }],
    testCases: [
      { input: ["abcabcbb"], expectedOutput: 3 },
      { input: ["bbbbb"], expectedOutput: 1 },
      { input: ["pwwkew"], expectedOutput: 3 },
      { input: [""], expectedOutput: 0 },
      { input: [" "], expectedOutput: 1 },
      { input: ["au"], expectedOutput: 2 },
      { input: ["dvdf"], expectedOutput: 3 },
      { input: ["tmmzuxt"], expectedOutput: 5 },
      { input: ["abcdefgh"], expectedOutput: 8 },
      { input: ["abba"], expectedOutput: 2 }
    ]
  },
  {
    number: 38,
    title: "Maximum Points You Can Obtain From Cards",
    topic: "Sliding Window and Two Pointers",
    difficulty: "Medium",
    description: "There are several cards arranged in a row, and each card has an associated number of points. In one step, you can take one card from the beginning or from the end of the row. You have to take exactly `k` cards. Your score is the sum of the points of the cards you have taken. Given the integer array `cardPoints` and the integer `k`, return the maximum score you can obtain.",
    constraints: ["1 <= cardPoints.length <= 10^5", "1 <= cardPoints[i] <= 10^4", "1 <= k <= cardPoints.length"],
    examples: [
      { input: "cardPoints = [1,2,3,4,5,6,1], k = 3", output: "12", explanation: "Take 1 from end, then 6 from end, then 5 from end (1+6+5=12)." },
      { input: "cardPoints = [2,2,2], k = 2", output: "4", explanation: "Take any two cards, score is 4." }
    ],
    functionName: "maxScore",
    returnType: "int",
    parameters: [{ name: "cardPoints", type: "int[]" }, { name: "k", type: "int" }],
    testCases: [
      { input: [[1, 2, 3, 4, 5, 6, 1], 3], expectedOutput: 12 },
      { input: [[2, 2, 2], 2], expectedOutput: 4 },
      { input: [[9, 7, 7, 9, 7, 7, 9], 7], expectedOutput: 55 },
      { input: [[1, 1000, 1], 1], expectedOutput: 1 },
      { input: [[1, 79, 80, 1, 1, 1, 200], 3], expectedOutput: 202 },
      { input: [[100, 40, 17, 9, 73, 75], 3], expectedOutput: 248 },
      { input: [[1], 1], expectedOutput: 1 },
      { input: [[10, 20, 30], 2], expectedOutput: 50 },
      { input: [[5, 4, 3, 2, 1], 2], expectedOutput: 9 },
      { input: [[1, 2, 3, 4, 5, 6], 1], expectedOutput: 6 }
    ]
  },
  {
    number: 39,
    title: "Max Consecutive Ones III",
    topic: "Sliding Window and Two Pointers",
    difficulty: "Medium",
    description: "Given a binary array `nums` and an integer `k`, return the maximum number of consecutive `1`'s in the array if you can flip at most `k` `0`'s.",
    constraints: ["1 <= nums.length <= 10^5", "nums[i] is either 0 or 1.", "0 <= k <= nums.length"],
    examples: [
      { input: "nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2", output: "6", explanation: "[1,1,1,0,0,1,1,1,1,1,1] bold numbers were flipped from 0 to 1. The longest subarray is 6." },
      { input: "nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3", output: "10", explanation: "Flipping at most 3 zeros gives 10." }
    ],
    functionName: "longestOnes",
    returnType: "int",
    parameters: [{ name: "nums", type: "int[]" }, { name: "k", type: "int" }],
    testCases: [
      { input: [[1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2], expectedOutput: 6 },
      { input: [[0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3], expectedOutput: 10 },
      { input: [[0, 0, 0, 0], 0], expectedOutput: 0 },
      { input: [[1, 1, 1], 0], expectedOutput: 3 },
      { input: [[0, 0, 0, 1], 4], expectedOutput: 4 },
      { input: [[1, 0, 1], 1], expectedOutput: 3 },
      { input: [[0], 1], expectedOutput: 1 },
      { input: [[1, 0, 0, 0, 1, 1, 0, 0, 1, 1], 2], expectedOutput: 6 },
      { input: [[1, 1, 0, 1], 1], expectedOutput: 4 },
      { input: [[0, 1, 0, 1, 0, 1, 0], 2], expectedOutput: 5 }
    ]
  },
  {
    number: 40,
    title: "Longest Repeating Character Replacement",
    topic: "Sliding Window and Two Pointers",
    difficulty: "Medium",
    description: "You are given a string `s` and an integer `k`. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most `k` times. Return the length of the longest substring containing the same letter you can get after performing the above operations.",
    constraints: ["1 <= s.length <= 10^5", "s consists of only uppercase English letters.", "0 <= k <= s.length"],
    examples: [
      { input: "s = 'ABAB', k = 2", output: "4", explanation: "Replace the two 'A's with two 'B's or vice versa." },
      { input: "s = 'AABABBA', k = 1", output: "4", explanation: "Replace one 'B' with 'A' in 'AABA' to form 'AAAA'." }
    ],
    functionName: "characterReplacement",
    returnType: "int",
    parameters: [{ name: "s", type: "string" }, { name: "k", type: "int" }],
    testCases: [
      { input: ["ABAB", 2], expectedOutput: 4 },
      { input: ["AABABBA", 1], expectedOutput: 4 },
      { input: ["AAAA", 2], expectedOutput: 4 },
      { input: ["ABBB", 2], expectedOutput: 4 },
      { input: ["ABCDE", 1], expectedOutput: 2 },
      { input: ["BAAA", 0], expectedOutput: 3 },
      { input: ["A", 0], expectedOutput: 1 },
      { input: ["KRSCDCSONAJNHLBMAQEZTXCOABG", 4], expectedOutput: 6 },
      { input: ["ABAA", 0], expectedOutput: 2 },
      { input: ["AAABBB", 2], expectedOutput: 5 }
    ]
  },
  {
    number: 41,
    title: "Longest Substring With at Most K Distinct Characters",
    topic: "Sliding Window and Two Pointers",
    difficulty: "Medium",
    description: "Given a string `s` and an integer `k`, return the length of the longest substring of `s` that contains at most `k` distinct characters.",
    constraints: ["1 <= s.length <= 5 * 10^4", "0 <= k <= 50"],
    examples: [
      { input: "s = 'eceba', k = 2", output: "3", explanation: "The substring is 'ece' with length 3." },
      { input: "s = 'aa', k = 1", output: "2", explanation: "The substring is 'aa' with length 2." }
    ],
    functionName: "lengthOfLongestSubstringKDistinct",
    returnType: "int",
    parameters: [{ name: "s", type: "string" }, { name: "k", type: "int" }],
    testCases: [
      { input: ["eceba", 2], expectedOutput: 3 },
      { input: ["aa", 1], expectedOutput: 2 },
      { input: ["a", 0], expectedOutput: 0 },
      { input: ["world", 4], expectedOutput: 4 },
      { input: ["abaccc", 2], expectedOutput: 4 },
      { input: ["aabacbebebe", 3], expectedOutput: 7 },
      { input: ["a", 1], expectedOutput: 1 },
      { input: ["abc", 3], expectedOutput: 3 },
      { input: ["ccaabbb", 2], expectedOutput: 5 },
      { input: ["aba", 1], expectedOutput: 1 }
    ]
  },
  {
    number: 42,
    title: "Minimum Window Substring",
    topic: "Sliding Window and Two Pointers",
    difficulty: "Hard",
    description: "Given two strings `s` and `t` of lengths `m` and `n` respectively, return the minimum window substring of `s` such that every character in `t` (including duplicates) is included in the window. If there is no such substring, return the empty string `\"\"`.",
    constraints: ["m == s.length", "n == t.length", "1 <= m, n <= 10^5", "s and t consist of uppercase and lowercase English letters."],
    examples: [
      { input: "s = 'ADOBECODEBANC', t = 'ABC'", output: "'BANC'", explanation: "The minimum window substring 'BANC' includes 'A', 'B', and 'C' from string t." },
      { input: "s = 'a', t = 'a'", output: "'a'", explanation: "The entire string s is the minimum window." },
      { input: "s = 'a', t = 'aa'", output: "''", explanation: "Both 'a's from t must be included in the window." }
    ],
    functionName: "minWindow",
    returnType: "string",
    parameters: [{ name: "s", type: "string" }, { name: "t", type: "string" }],
    testCases: [
      { input: ["ADOBECODEBANC", "ABC"], expectedOutput: "BANC" },
      { input: ["a", "a"], expectedOutput: "a" },
      { input: ["a", "aa"], expectedOutput: "" },
      { input: ["ab", "b"], expectedOutput: "b" },
      { input: ["ab", "a"], expectedOutput: "a" },
      { input: ["cabwefgewcwaefgcf", "cae"], expectedOutput: "cwae" },
      { input: ["bdab", "ab"], expectedOutput: "ab" },
      { input: ["aaflslflsldkalskaaa", "aaa"], expectedOutput: "aaa" },
      { input: ["bba", "ab"], expectedOutput: "ba" },
      { input: ["a", "b"], expectedOutput: "" }
    ]
  },
  {
    number: 43,
    title: "Permutation in String",
    topic: "Sliding Window and Two Pointers",
    difficulty: "Medium",
    description: "Given two strings `s1` and `s2`, return `true` if `s2` contains a permutation of `s1`, or `false` otherwise. In other words, return `true` if one of `s1`'s permutations is the substring of `s2`.",
    constraints: ["1 <= s1.length, s2.length <= 10^4", "s1 and s2 consist of lowercase English letters."],
    examples: [
      { input: "s1 = 'ab', s2 = 'eidbaooo'", output: "true", explanation: "s2 contains one permutation of s1 ('ba')." },
      { input: "s1 = 'ab', s2 = 'eidboaoo'", output: "false", explanation: "No permutation of s1 is in s2." }
    ],
    functionName: "checkInclusion",
    returnType: "boolean",
    parameters: [{ name: "s1", type: "string" }, { name: "s2", type: "string" }],
    testCases: [
      { input: ["ab", "eidbaooo"], expectedOutput: true },
      { input: ["ab", "eidboaoo"], expectedOutput: false },
      { input: ["a", "a"], expectedOutput: true },
      { input: ["adc", "dcda"], expectedOutput: true },
      { input: ["hello", "ooolleoooleh"], expectedOutput: false },
      { input: ["ab", "a"], expectedOutput: false },
      { input: ["abc", "bbbca"], expectedOutput: true },
      { input: ["mart", "karma"], expectedOutput: false },
      { input: ["aba", "baa"], expectedOutput: true },
      { input: ["xyz", "zyx"], expectedOutput: true }
    ]
  },
  {
    number: 44,
    title: "Longest Palindromic Substring",
    topic: "Sliding Window and Two Pointers",
    difficulty: "Medium",
    description: "Given a string `s`, return the longest palindromic substring in `s`.",
    constraints: ["1 <= s.length <= 1000", "s consist of only digits and English letters."],
    examples: [
      { input: "s = 'babad'", output: "'bab'", explanation: "'aba' is also a valid answer." },
      { input: "s = 'cbbd'", output: "'bb'", explanation: "'bb' is the longest palindromic substring." }
    ],
    functionName: "longestPalindrome",
    returnType: "string",
    parameters: [{ name: "s", type: "string" }],
    testCases: [
      { input: ["babad"], expectedOutput: "bab" },
      { input: ["cbbd"], expectedOutput: "bb" },
      { input: ["a"], expectedOutput: "a" },
      { input: ["ac"], expectedOutput: "a" },
      { input: ["bb"], expectedOutput: "bb" },
      { input: ["racecar"], expectedOutput: "racecar" },
      { input: ["noon"], expectedOutput: "noon" },
      { input: ["abacdfgdcaba"], expectedOutput: "aba" },
      { input: ["forgeeksskeegfor"], expectedOutput: "geeksskeeg" },
      { input: ["civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendure"], expectedOutput: "ranynar" }
    ]
  },
  {
    number: 45,
    title: "Number of Substrings Containing All Three Characters",
    topic: "Sliding Window and Two Pointers",
    difficulty: "Medium",
    description: "Given a string `s` consisting only of characters a, b and c, return the number of substrings containing at least one occurrence of all these characters a, b and c.",
    constraints: ["3 <= s.length <= 5 * 10^4", "s only consists of a, b or c characters."],
    examples: [
      { input: "s = 'abcabc'", output: "10", explanation: "Substrings containing a, b and c at least once." },
      { input: "s = 'aaacb'", output: "3", explanation: "The substrings are 'aaacb', 'aacb' and 'acb'." }
    ],
    functionName: "numberOfSubstrings",
    returnType: "int",
    parameters: [{ name: "s", type: "string" }],
    testCases: [
      { input: ["abcabc"], expectedOutput: 10 },
      { input: ["aaacb"], expectedOutput: 3 },
      { input: ["abc"], expectedOutput: 1 },
      { input: ["ababbbc"], expectedOutput: 3 },
      { input: ["a"], expectedOutput: 0 },
      { input: ["acb"], expectedOutput: 1 },
      { input: ["abababab"], expectedOutput: 0 },
      { input: ["cba"], expectedOutput: 1 },
      { input: ["abcba"], expectedOutput: 5 },
      { input: ["ccbababbac"], expectedOutput: 25 }
    ]
  },
  {
    number: 46,
    title: "Binary Subarrays With Sum",
    topic: "Sliding Window and Two Pointers",
    difficulty: "Medium",
    description: "Given a binary array `nums` and an integer `goal`, return the number of non-empty subarrays with a sum equal to `goal`.",
    constraints: ["1 <= nums.length <= 3 * 10^4", "nums[i] is either 0 or 1.", "0 <= goal <= nums.length"],
    examples: [
      { input: "nums = [1,0,1,0,1], goal = 2", output: "4", explanation: "The 4 subarrays are: [1,0,1], [1,0,1,0], [0,1,0,1], [1,0,1]." },
      { input: "nums = [0,0,0,0,0], goal = 0", output: "15", explanation: "All 15 subarrays sum to 0." }
    ],
    functionName: "numSubarraysWithSum",
    returnType: "int",
    parameters: [{ name: "nums", type: "int[]" }, { name: "goal", type: "int" }],
    testCases: [
      { input: [[1, 0, 1, 0, 1], 2], expectedOutput: 4 },
      { input: [[0, 0, 0, 0, 0], 0], expectedOutput: 15 },
      { input: [[1, 1, 1], 1], expectedOutput: 3 },
      { input: [[0, 1, 1, 1, 1], 3], expectedOutput: 3 },
      { input: [[1], 0], expectedOutput: 0 },
      { input: [[0], 0], expectedOutput: 1 },
      { input: [[1, 0, 1], 1], expectedOutput: 4 },
      { input: [[0, 0, 1, 0, 0], 1], expectedOutput: 9 },
      { input: [[1, 1, 0, 1, 1], 2], expectedOutput: 5 },
      { input: [[1, 0, 0, 1, 0, 1], 2], expectedOutput: 6 }
    ]
  },
  {
    number: 47,
    title: "Count Number of Nice Subarrays",
    topic: "Sliding Window and Two Pointers",
    difficulty: "Medium",
    description: "Given an array of integers `nums` and an integer `k`. A continuous subarray is called nice if there are `k` odd numbers on it. Return the number of nice sub-arrays.",
    constraints: ["1 <= nums.length <= 50000", "1 <= nums[i] <= 10^5", "1 <= k <= nums.length"],
    examples: [
      { input: "nums = [1,1,2,1,1], k = 3", output: "2", explanation: "Subarrays with 3 odd numbers: [1,1,2,1] and [1,2,1,1]." },
      { input: "nums = [2,4,6], k = 1", output: "0", explanation: "No odd numbers in nums." }
    ],
    functionName: "numberOfSubarrays",
    returnType: "int",
    parameters: [{ name: "nums", type: "int[]" }, { name: "k", type: "int" }],
    testCases: [
      { input: [[1, 1, 2, 1, 1], 3], expectedOutput: 2 },
      { input: [[2, 4, 6], 1], expectedOutput: 0 },
      { input: [[2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2], expectedOutput: 16 },
      { input: [[1], 1], expectedOutput: 1 },
      { input: [[2], 1], expectedOutput: 0 },
      { input: [[1, 1, 1], 2], expectedOutput: 2 },
      { input: [[1, 2, 3, 4, 5], 1], expectedOutput: 7 },
      { input: [[9, 1, 3], 3], expectedOutput: 1 },
      { input: [[2, 2, 1, 2, 1, 2, 2], 2], expectedOutput: 9 },
      { input: [[1, 3, 5, 7], 2], expectedOutput: 3 }
    ]
  }
];
