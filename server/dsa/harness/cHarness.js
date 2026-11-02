/**
 * C Harness for DSA Judge
 * Generates an executable C file wrapping student code,
 * handling memory allocation, pointers, and JSON formatted test reporting.
 */

export function buildCHarness(problem, userCode, testCases) {
  const isLL = problem.topic === 'Linked Lists';
  const isTree = problem.topic === 'Binary Trees' || problem.topic === 'Binary Search Trees';
  const fnName = problem.functionName;
  const paramMeta = problem.parameters || [];
  const retType = problem.returnType || 'int';

  let testBlocks = '';
  testCases.forEach((tc) => {
    const rawArgs = tc.input || [];
    const expected = tc.expectedOutput;
    const isHidden = Boolean(tc.isHidden);

    // Build argument declarations
    let argDecls = '';
    const argNames = [];

    paramMeta.forEach((p, idx) => {
      const val = rawArgs[idx];
      const name = `arg_${idx}`;
      if (p.type === 'int') {
        argDecls += `        int ${name} = ${val};\n`;
        argNames.push(name);
      } else if (p.type === 'long') {
        argDecls += `        long long ${name} = ${val}LL;\n`;
        argNames.push(name);
      } else if (p.type === 'double') {
        argDecls += `        double ${name} = ${val};\n`;
        argNames.push(name);
      } else if (p.type === 'boolean') {
        argDecls += `        bool ${name} = ${val ? 'true' : 'false'};\n`;
        argNames.push(name);
      } else if (p.type === 'string') {
        argDecls += `        char ${name}[] = ${JSON.stringify(val)};\n`;
        argNames.push(name);
      } else if (p.type === 'int[]') {
        const arr = Array.isArray(val) ? val : [];
        const arrStr = arr.length > 0 ? arr.join(', ') : '0';
        argDecls += `        int ${name}_arr[] = {${arrStr}};\n`;
        argDecls += `        int ${name}_size = ${arr.length};\n`;
        argNames.push(`${name}_arr`);
        argNames.push(`${name}_size`);
      } else if (p.type === 'ListNode') {
        const arr = Array.isArray(val) ? val : [];
        const arrStr = arr.length > 0 ? arr.join(', ') : '0';
        argDecls += `        int ${name}_arr[] = {${arrStr}};\n`;
        argDecls += `        struct ListNode* ${name} = buildList(${name}_arr, ${arr.length});\n`;
        argNames.push(name);
      }
    });

    // Check return type
    let callExpr = '';
    let captureActual = '';
    if (retType === 'int[]') {
      argNames.push('&returnSize');
      callExpr = `int returnSize = 0;\n        int* ret = ${fnName}(${argNames.join(', ')});`;
      captureActual = `formatIntArray(ret, returnSize)`;
    } else if (retType === 'ListNode') {
      callExpr = `struct ListNode* ret = ${fnName}(${argNames.join(', ')});`;
      captureActual = `formatList(ret)`;
    } else if (retType === 'int') {
      callExpr = `int ret = ${fnName}(${argNames.join(', ')});`;
      captureActual = `formatInt(ret)`;
    } else if (retType === 'boolean') {
      callExpr = `bool ret = ${fnName}(${argNames.join(', ')});`;
      captureActual = `formatBool(ret)`;
    } else if (retType === 'double') {
      callExpr = `double ret = ${fnName}(${argNames.join(', ')});`;
      captureActual = `formatDouble(ret)`;
    } else {
      callExpr = `long long ret = (long long)${fnName}(${argNames.join(', ')});`;
      captureActual = `formatLong(ret)`;
    }

    testBlocks += `
    {
        // Test Case ${tc.caseNumber}
${argDecls}
        clock_t t0 = clock();
        ${callExpr}
        double ms = ((double)(clock() - t0) / CLOCKS_PER_SEC) * 1000.0;
        char* actualStr = ${captureActual};
        const char* expectedStr = ${JSON.stringify(JSON.stringify(expected))};
        bool passed = compareJsonStr(actualStr, expectedStr);
        addResult(${tc.caseNumber}, ${isHidden ? 'true' : 'false'}, passed ? "PASSED" : "FAILED", ms, actualStr, expectedStr, NULL);
        free(actualStr);
    }
    `;
  });

  return `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <string.h>
#include <time.h>
#include <ctype.h>

// Data structure definitions
struct ListNode {
    int val;
    struct ListNode *next;
};

struct TreeNode {
    int val;
    struct TreeNode *left;
    struct TreeNode *right;
};

// ==================== STUDENT CODE START ====================
${userCode}
// ===================== STUDENT CODE END =====================

struct ListNode* buildList(int* arr, int size) {
    if (size <= 0) return NULL;
    struct ListNode* head = (struct ListNode*)malloc(sizeof(struct ListNode));
    head->val = arr[0];
    head->next = NULL;
    struct ListNode* curr = head;
    for (int i = 1; i < size; i++) {
        curr->next = (struct ListNode*)malloc(sizeof(struct ListNode));
        curr = curr->next;
        curr->val = arr[i];
        curr->next = NULL;
    }
    return head;
}

char* formatInt(int val) {
    char* buf = (char*)malloc(32);
    snprintf(buf, 32, "%d", val);
    return buf;
}

char* formatLong(long long val) {
    char* buf = (char*)malloc(32);
    snprintf(buf, 32, "%lld", val);
    return buf;
}

char* formatBool(bool val) {
    char* buf = (char*)malloc(8);
    snprintf(buf, 8, "%s", val ? "true" : "false");
    return buf;
}

char* formatDouble(double val) {
    char* buf = (char*)malloc(32);
    snprintf(buf, 32, "%.4f", val);
    return buf;
}

char* formatIntArray(int* arr, int size) {
    if (!arr || size <= 0) {
        char* buf = (char*)malloc(4);
        strcpy(buf, "[]");
        return buf;
    }
    char* buf = (char*)malloc(size * 16 + 16);
    strcpy(buf, "[");
    for (int i = 0; i < size; i++) {
        char item[16];
        snprintf(item, 16, "%d%s", arr[i], (i < size - 1 ? "," : ""));
        strcat(buf, item);
    }
    strcat(buf, "]");
    return buf;
}

char* formatList(struct ListNode* head) {
    if (!head) {
        char* buf = (char*)malloc(4);
        strcpy(buf, "[]");
        return buf;
    }
    char* buf = (char*)malloc(4096);
    strcpy(buf, "[");
    struct ListNode* curr = head;
    int count = 0;
    while (curr && count < 1000) {
        char item[16];
        snprintf(item, 16, "%d%s", curr->val, (curr->next ? "," : ""));
        strcat(buf, item);
        curr = curr->next;
        count++;
    }
    strcat(buf, "]");
    return buf;
}

bool compareJsonStr(const char* a, const char* b) {
    if (!a || !b) return false;
    int i = 0, j = 0;
    while (a[i] && b[j]) {
        while (a[i] && isspace((unsigned char)a[i])) i++;
        while (b[j] && isspace((unsigned char)b[j])) j++;
        if (a[i] != b[j]) return false;
        if (a[i]) i++;
        if (b[j]) j++;
    }
    while (a[i] && isspace((unsigned char)a[i])) i++;
    while (b[j] && isspace((unsigned char)b[j])) j++;
    return a[i] == b[j];
}

char g_results[16384] = "[";
int g_resultCount = 0;

void addResult(int caseNumber, bool isHidden, const char* status, double ms, const char* actual, const char* expected, const char* err) {
    if (g_resultCount > 0) strcat(g_results, ",");
    char item[2048];
    snprintf(item, sizeof(item),
        "{\\\"caseNumber\\\":%d,\\\"isHidden\\\":%s,\\\"status\\\":\\\"%s\\\",\\\"executionTime\\\":%.2f,\\\"actualOutput\\\":%s,\\\"expectedOutput\\\":%s,\\\"error\\\":%s}",
        caseNumber, (isHidden ? "true" : "false"), status, ms, actual, expected, (err ? err : "null"));
    strcat(g_results, item);
    g_resultCount++;
}

int main() {
    ${testBlocks}
    strcat(g_results, "]");
    printf("__DSA_RESULT_START__%s__DSA_RESULT_END__\\n", g_results);
    return 0;
}
`;
}
