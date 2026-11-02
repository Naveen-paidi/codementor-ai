/**
 * C++ Harness for DSA Judge
 * Generates an executable C++ translation unit wrapping
 * student Solution, data structure definitions, and test cases.
 */

function cppLiteral(val, type) {
  if (val === null || val === undefined) return "nullptr";
  if (type === 'int') return `${val}`;
  if (type === 'long') return `${val}LL`;
  if (type === 'double') return `${Number(val).toFixed(4)}`;
  if (type === 'boolean') return `${val ? 'true' : 'false'}`;
  if (type === 'string') return JSON.stringify(val);
  if (type === 'int[]') {
    if (!Array.isArray(val)) return "vector<int>{}";
    return `vector<int>{${val.join(', ')}}`;
  }
  if (type === 'int[][]') {
    if (!Array.isArray(val)) return "vector<vector<int>>{}";
    const rows = val.map(r => `vector<int>{${r.join(', ')}}`);
    return `vector<vector<int>>{${rows.join(', ')}}`;
  }
  if (type === 'string[]') {
    if (!Array.isArray(val)) return "vector<string>{}";
    const items = val.map(s => JSON.stringify(s));
    return `vector<string>{${items.join(', ')}}`;
  }
  if (type === 'char[][]') {
    if (!Array.isArray(val)) return "vector<vector<char>>{}";
    const rows = val.map(r => `vector<char>{${r.map(c => `'${c}'`).join(', ')}}`);
    return `vector<vector<char>>{${rows.join(', ')}}`;
  }
  if (type === 'ListNode') {
    if (!Array.isArray(val)) return "nullptr";
    return `buildList(vector<int>{${val.join(', ')}})`;
  }
  if (type === 'TreeNode') {
    if (!Array.isArray(val)) return "nullptr";
    const items = val.map(v => v === null ? '"null"' : `"${v}"`);
    return `buildTree(vector<string>{${items.join(', ')}})`;
  }
  return JSON.stringify(val);
}

export function buildCppHarness(problem, userCode, testCases) {
  const isLL = problem.topic === 'Linked Lists';
  const isTree = problem.topic === 'Binary Trees' || problem.topic === 'Binary Search Trees';
  const isDesign = Boolean(problem.isDesign);
  const fnName = problem.functionName;
  const paramMeta = problem.parameters || [];
  const retType = problem.returnType || 'int';

  let testBlocks = '';
  testCases.forEach((tc) => {
    const rawArgs = tc.input || [];
    const expected = tc.expectedOutput;
    const isHidden = Boolean(tc.isHidden);

    if (isDesign) {
      const methods = rawArgs[0] || [];
      const argsList = rawArgs[1] || [];
      const clsName = methods[0];
      testBlocks += `
        // Test case ${tc.caseNumber}
        try {
            auto t0 = chrono::high_resolution_clock::now();
            ${clsName} instance(${(argsList[0] || []).join(', ')});
            vector<string> steps;
            steps.push_back("null");
            ${methods.slice(1).map((m, mIdx) => {
              const argVals = (argsList[mIdx + 1] || []).map(a => typeof a === 'string' ? JSON.stringify(a) : a).join(', ');
              return `steps.push_back(toJson(instance.${m}(${argVals})));`;
            }).join('\n            ')}
            auto t1 = chrono::high_resolution_clock::now();
            double ms = chrono::duration<double, milli>(t1 - t0).count();
            string actualJson = "[" + join(steps, ",") + "]";
            string expectedJson = ${JSON.stringify(JSON.stringify(expected))};
            bool passed = compareJson(actualJson, expectedJson);
            addResult(${tc.caseNumber}, ${isHidden ? 'true' : 'false'}, passed ? "PASSED" : "FAILED", ms, actualJson, expectedJson, "");
        } catch (const exception& e) {
            addResult(${tc.caseNumber}, ${isHidden ? 'true' : 'false'}, "RUNTIME_ERROR", 0, "null", ${JSON.stringify(JSON.stringify(expected))}, e.what());
        } catch (...) {
            addResult(${tc.caseNumber}, ${isHidden ? 'true' : 'false'}, "RUNTIME_ERROR", 0, "null", ${JSON.stringify(JSON.stringify(expected))}, "Unknown C++ exception");
        }
      `;
    } else {
      let decls = '';
      const callVarNames = [];
      paramMeta.forEach((p, pIdx) => {
        const val = rawArgs[pIdx];
        const varName = `arg_${pIdx}`;
        callVarNames.push(varName);
        if (p.type === 'int[]') {
          const arr = Array.isArray(val) ? val : [];
          decls += `vector<int> ${varName} = {${arr.join(', ')}};\n            `;
        } else if (p.type === 'int[][]') {
          const rows = (Array.isArray(val) ? val : []).map(r => `vector<int>{${r.join(', ')}}`);
          decls += `vector<vector<int>> ${varName} = {${rows.join(', ')}};\n            `;
        } else if (p.type === 'string') {
          decls += `string ${varName} = ${JSON.stringify(val)};\n            `;
        } else if (p.type === 'string[]') {
          const items = (Array.isArray(val) ? val : []).map(s => JSON.stringify(s));
          decls += `vector<string> ${varName} = {${items.join(', ')}};\n            `;
        } else if (p.type === 'char[][]') {
          const rows = (Array.isArray(val) ? val : []).map(r => `vector<char>{${r.map(c => `'${c}'`).join(', ')}}`);
          decls += `vector<vector<char>> ${varName} = {${rows.join(', ')}};\n            `;
        } else if (p.type === 'ListNode') {
          const arr = Array.isArray(val) ? val : [];
          decls += `ListNode* ${varName} = buildList(vector<int>{${arr.join(', ')}});\n            `;
        } else if (p.type === 'TreeNode') {
          const items = (Array.isArray(val) ? val : []).map(v => v === null ? '"null"' : `"${v}"`);
          decls += `TreeNode* ${varName} = buildTree(vector<string>{${items.join(', ')}});\n            `;
        } else if (p.type === 'int') {
          decls += `int ${varName} = ${val};\n            `;
        } else if (p.type === 'long') {
          decls += `long long ${varName} = ${val}LL;\n            `;
        } else if (p.type === 'boolean') {
          decls += `bool ${varName} = ${val ? 'true' : 'false'};\n            `;
        } else if (p.type === 'double') {
          decls += `double ${varName} = ${val};\n            `;
        } else {
          decls += `auto ${varName} = ${cppLiteral(val, p.type)};\n            `;
        }
      });

      testBlocks += `
        // Test case ${tc.caseNumber}
        try {
            auto t0 = chrono::high_resolution_clock::now();
            ${decls}
            auto ret = sol.${fnName}(${callVarNames.join(', ')});
            auto t1 = chrono::high_resolution_clock::now();
            double ms = chrono::duration<double, milli>(t1 - t0).count();
            string actualJson = toJson(ret);
            string expectedJson = ${JSON.stringify(JSON.stringify(expected))};
            bool passed = compareJson(actualJson, expectedJson);
            addResult(${tc.caseNumber}, ${isHidden ? 'true' : 'false'}, passed ? "PASSED" : "FAILED", ms, actualJson, expectedJson, "");
        } catch (const exception& e) {
            addResult(${tc.caseNumber}, ${isHidden ? 'true' : 'false'}, "RUNTIME_ERROR", 0, "null", ${JSON.stringify(JSON.stringify(expected))}, e.what());
        } catch (...) {
            addResult(${tc.caseNumber}, ${isHidden ? 'true' : 'false'}, "RUNTIME_ERROR", 0, "null", ${JSON.stringify(JSON.stringify(expected))}, "Unknown C++ exception");
        }
      `;
    }
  });

  return `#include <iostream>
#include <vector>
#include <string>
#include <sstream>
#include <unordered_map>
#include <unordered_set>
#include <algorithm>
#include <queue>
#include <stack>
#include <chrono>
#include <iomanip>

using namespace std;

// Data structure definitions
struct ListNode {
    int val;
    ListNode *next;
    ListNode() : val(0), next(nullptr) {}
    ListNode(int x) : val(x), next(nullptr) {}
    ListNode(int x, ListNode *next) : val(x), next(next) {}
};

struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode() : val(0), left(nullptr), right(nullptr) {}
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
    TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
};

// ==================== STUDENT CODE START ====================
${userCode}
// ===================== STUDENT CODE END =====================

ListNode* buildList(const vector<int>& arr) {
    if (arr.empty()) return nullptr;
    ListNode dummy(0);
    ListNode* curr = &dummy;
    for (int x : arr) {
        curr->next = new ListNode(x);
        curr = curr->next;
    }
    return dummy.next;
}

vector<int> listToArray(ListNode* head) {
    vector<int> res;
    unordered_set<ListNode*> visited;
    ListNode* curr = head;
    while (curr && !visited.count(curr) && res.size() < 10000) {
        visited.insert(curr);
        res.push_back(curr->val);
        curr = curr->next;
    }
    return res;
}

TreeNode* buildTree(const vector<string>& arr) {
    if (arr.empty() || arr[0] == "null") return nullptr;
    TreeNode* root = new TreeNode(stoi(arr[0]));
    queue<TreeNode*> q;
    q.push(root);
    size_t i = 1;
    while (!q.empty() && i < arr.size()) {
        TreeNode* curr = q.front();
        q.pop();
        if (i < arr.size() && arr[i] != "null") {
            curr->left = new TreeNode(stoi(arr[i]));
            q.push(curr->left);
        }
        i++;
        if (i < arr.size() && arr[i] != "null") {
            curr->right = new TreeNode(stoi(arr[i]));
            q.push(curr->right);
        }
        i++;
    }
    return root;
}

vector<string> treeToArray(TreeNode* root) {
    vector<string> res;
    if (!root) return res;
    queue<TreeNode*> q;
    q.push(root);
    while (!q.empty()) {
        TreeNode* curr = q.front();
        q.pop();
        if (curr) {
            res.push_back(to_string(curr->val));
            q.push(curr->left);
            q.push(curr->right);
        } else {
            res.push_back("null");
        }
    }
    while (!res.empty() && res.back() == "null") res.pop_back();
    return res;
}

string join(const vector<string>& items, const string& delim) {
    string res = "";
    for (size_t i = 0; i < items.size(); i++) {
        res += items[i];
        if (i + 1 < items.size()) res += delim;
    }
    return res;
}

string toJson(int x) { return to_string(x); }
string toJson(long long x) { return to_string(x); }
string toJson(double x) {
    stringstream ss;
    ss << fixed << setprecision(4) << x;
    return ss.str();
}
string toJson(bool b) { return b ? "true" : "false"; }
string toJson(void) { return "null"; }
string toJson(const string& s) { return "\"" + s + "\""; }

string toJson(const vector<int>& v) {
    string s = "[";
    for (size_t i = 0; i < v.size(); i++) {
        s += to_string(v[i]) + (i + 1 < v.size() ? "," : "");
    }
    return s + "]";
}

string toJson(const vector<vector<int>>& m) {
    string s = "[";
    for (size_t i = 0; i < m.size(); i++) {
        s += toJson(m[i]) + (i + 1 < m.size() ? "," : "");
    }
    return s + "]";
}

string toJson(const vector<string>& v) {
    string s = "[";
    for (size_t i = 0; i < v.size(); i++) {
        s += toJson(v[i]) + (i + 1 < v.size() ? "," : "");
    }
    return s + "]";
}

string toJson(ListNode* node) {
    return toJson(listToArray(node));
}

string toJson(TreeNode* root) {
    auto items = treeToArray(root);
    return "[" + join(items, ",") + "]";
}

bool compareJson(const string& a, const string& b) {
    string s1, s2;
    for (char c : a) if (!isspace(c)) s1 += c;
    for (char c : b) if (!isspace(c)) s2 += c;
    return s1 == s2;
}

string g_results = "[";

void addResult(int caseNumber, bool isHidden, const string& status, double ms, const string& actual, const string& expected, const string& err) {
    if (g_results.size() > 1) g_results += ",";
    stringstream ss;
    ss << fixed << setprecision(2) << ms;
    char q = '"';
    g_results += string("{") +
                 q + "caseNumber" + q + ":" + to_string(caseNumber) + "," +
                 q + "isHidden" + q + ":" + (isHidden ? "true" : "false") + "," +
                 q + "status" + q + ":" + q + status + q + "," +
                 q + "executionTime" + q + ":" + ss.str() + "," +
                 q + "actualOutput" + q + ":" + actual + "," +
                 q + "expectedOutput" + q + ":" + expected + "," +
                 q + "error" + q + ":" + (err.empty() ? "null" : (string("") + q + err + q)) + "}";
}

int main() {
    Solution sol;
    ${testBlocks}
    g_results += "]";
    cout << "__DSA_RESULT_START__" << g_results << "__DSA_RESULT_END__" << endl;
    return 0;
}
`;
}
