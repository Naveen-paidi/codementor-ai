/**
 * JavaScript Harness for DSA Judge
 * Generates an executable Node.js script embedding helper structures,
 * student submission, test inputs, executes them, and outputs structured test results.
 */

export function buildJavaScriptHarness(problem, userCode, testCases) {
  const isLL = problem.topic === 'Linked Lists';
  const isTree = problem.topic === 'Binary Trees' || problem.topic === 'Binary Search Trees';
  const isDesign = Boolean(problem.isDesign);

  const testCasesJson = JSON.stringify(testCases.map(tc => ({
    id: tc.id,
    caseNumber: tc.caseNumber,
    isHidden: Boolean(tc.isHidden),
    input: tc.input,
    expectedOutput: tc.expectedOutput
  })));

  return `const { performance } = require('perf_hooks');

// Helper data structures
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

function buildList(arr) {
    if (!arr || !Array.isArray(arr) || arr.length === 0) return null;
    const dummy = new ListNode(0);
    let curr = dummy;
    for (const x of arr) {
        curr.next = new ListNode(x);
        curr = curr.next;
    }
    return dummy.next;
}

function listToArray(node) {
    const res = [];
    const visited = new Set();
    let curr = node;
    while (curr && !visited.has(curr) && res.length < 10000) {
        visited.add(curr);
        res.push(curr.val);
        curr = curr.next;
    }
    return res;
}

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

function buildTree(arr) {
    if (!arr || !Array.isArray(arr) || arr.length === 0 || arr[0] === null) return null;
    const root = new TreeNode(arr[0]);
    const queue = [root];
    let i = 1;
    while (queue.length > 0 && i < arr.length) {
        const curr = queue.shift();
        if (i < arr.length && arr[i] !== null && arr[i] !== undefined) {
            curr.left = new TreeNode(arr[i]);
            queue.push(curr.left);
        }
        i++;
        if (i < arr.length && arr[i] !== null && arr[i] !== undefined) {
            curr.right = new TreeNode(arr[i]);
            queue.push(curr.right);
        }
        i++;
    }
    return root;
}

function treeToArray(root) {
    if (!root) return [];
    const res = [];
    const queue = [root];
    while (queue.length > 0) {
        const curr = queue.shift();
        if (curr) {
            res.push(curr.val);
            queue.push(curr.left);
            queue.push(curr.right);
        } else {
            res.push(null);
        }
    }
    while (res.length > 0 && res[res.length - 1] === null) {
        res.pop();
    }
    return res;
}

function deepCompare(a, b) {
    if (a === b) return true;
    if (typeof a === 'number' && typeof b === 'number') {
        return Math.abs(a - b) < 1e-4;
    }
    if (Array.isArray(a) && Array.isArray(b)) {
        if (a.length !== b.length) return false;
        for (let i = 0; i < a.length; i++) {
            if (!deepCompare(a[i], b[i])) return false;
        }
        return true;
    }
    return false;
}

// ==================== STUDENT CODE START ====================
${userCode}
// ===================== STUDENT CODE END =====================

function runTests() {
    const rawTests = ${testCasesJson};
    const results = [];
    
    const isLLProblem = ${isLL ? 'true' : 'false'};
    const isTreeProblem = ${isTree ? 'true' : 'false'};
    const isDesignProblem = ${isDesign ? 'true' : 'false'};
    const fnName = "${problem.functionName}";
    const paramMeta = ${JSON.stringify(problem.parameters || [])};
    const retType = "${problem.returnType || 'int'}";

    let solverFn = null;
    let solInstance = null;

    if (!isDesignProblem) {
        try {
            if (typeof Solution !== 'undefined') {
                solInstance = new Solution();
                if (typeof solInstance[fnName] === 'function') {
                    solverFn = solInstance[fnName].bind(solInstance);
                }
            }
        } catch (_) {}

        if (!solverFn) {
            try {
                const globalFn = eval(fnName);
                if (typeof globalFn === 'function') {
                    solverFn = globalFn;
                }
            } catch (_) {}
        }
    }

    for (const tc of rawTests) {
        const caseNum = tc.caseNumber;
        const isHidden = tc.isHidden;
        const rawInput = tc.input;
        const expected = tc.expectedOutput;

        const t0 = performance.now();
        let actual = null;
        let status = 'PASSED';
        let errMsg = null;

        try {
            if (isDesignProblem) {
                const methods = rawInput[0];
                const argsList = rawInput[1];
                const clsName = methods[0];
                const Cls = eval(clsName);
                if (!Cls) throw new Error("Design class " + clsName + " not found");
                
                const instance = new Cls(...(argsList[0] || []));
                const stepResults = [null];
                for (let mIdx = 1; mIdx < methods.length; mIdx++) {
                    const mName = methods[mIdx];
                    const mArgs = argsList[mIdx];
                    if (typeof instance[mName] !== 'function') {
                        throw new Error("Method " + mName + " not found on " + clsName);
                    }
                    const res = instance[mName](...mArgs);
                    stepResults.push(res === undefined ? null : res);
                }
                actual = stepResults;
            } else {
                if (!solverFn) {
                    throw new Error("Function " + fnName + " not found in submission");
                }

                const callArgs = [];
                for (let idx = 0; idx < paramMeta.length; idx++) {
                    const argVal = rawInput[idx];
                    const pType = paramMeta[idx] ? paramMeta[idx].type : null;
                    if (pType === 'ListNode') {
                        callArgs.push(buildList(argVal));
                    } else if (pType === 'TreeNode') {
                        callArgs.push(buildTree(argVal));
                    } else {
                        callArgs.push(argVal);
                    }
                }

                const ret = solverFn(...callArgs);

                if (retType === 'ListNode') {
                    actual = listToArray(ret);
                } else if (retType === 'TreeNode') {
                    actual = treeToArray(ret);
                } else {
                    actual = ret === undefined ? null : ret;
                }
            }

            const passed = deepCompare(actual, expected);
            status = passed ? 'PASSED' : 'FAILED';
        } catch (err) {
            status = 'RUNTIME_ERROR';
            errMsg = err.message || String(err);
            actual = null;
        }

        const elapsedMs = Math.round((performance.now() - t0) * 100) / 100;
        results.push({
            caseNumber: caseNum,
            isHidden: isHidden,
            status: status,
            executionTime: elapsedMs,
            actualOutput: actual,
            expectedOutput: expected,
            error: errMsg,
            input: rawInput
        });
    }

    console.log("__DSA_RESULT_START__" + JSON.stringify(results) + "__DSA_RESULT_END__");
}

runTests();
`;
}
