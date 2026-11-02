/**
 * Python Harness for DSA Judge
 * Generates an executable Python script that embeds helper structures,
 * student submission, test inputs, executes them, and outputs structured test results.
 */

export function buildPythonHarness(problem, userCode, testCases) {
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

  return `import sys
import json
import time
import math
from typing import List, Optional, Any, Dict

# Data structure definitions
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def build_list(arr):
    if not arr or not isinstance(arr, list):
        return None
    dummy = ListNode(0)
    curr = dummy
    for x in arr:
        curr.next = ListNode(x)
        curr = curr.next
    return dummy.next

def list_to_array(node):
    res = []
    curr = node
    visited = set()
    while curr and id(curr) not in visited and len(res) < 10000:
        visited.add(id(curr))
        res.append(curr.val)
        curr = curr.next
    return res

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def build_tree(arr):
    if not arr or not isinstance(arr, list) or arr[0] is None:
        return None
    root = TreeNode(arr[0])
    queue = [root]
    i = 1
    while queue and i < len(arr):
        curr = queue.pop(0)
        if i < len(arr) and arr[i] is not None:
            curr.left = TreeNode(arr[i])
            queue.append(curr.left)
        i += 1
        if i < len(arr) and arr[i] is not None:
            curr.right = TreeNode(arr[i])
            queue.append(curr.right)
        i += 1
    return root

def tree_to_array(root):
    if not root:
        return []
    res = []
    queue = [root]
    while queue:
        curr = queue.pop(0)
        if curr:
            res.append(curr.val)
            queue.append(curr.left)
            queue.append(curr.right)
        else:
            res.append(None)
    while res and res[-1] is None:
        res.pop()
    return res

def deep_compare(actual, expected):
    if actual == expected:
        return True
    # Floating point comparison
    if isinstance(actual, float) and isinstance(expected, (int, float)):
        return abs(actual - expected) < 1e-4
    if isinstance(actual, (list, tuple)) and isinstance(expected, (list, tuple)):
        if len(actual) != len(expected):
            return False
        return all(deep_compare(a, b) for a, b in zip(actual, expected))
    return False

# ==================== STUDENT CODE START ====================
${userCode}
# ===================== STUDENT CODE END =====================

def run_tests():
    raw_tests = json.loads(${JSON.stringify(testCasesJson)})
    results = []
    
    is_ll_problem = ${isLL ? 'True' : 'False'}
    is_tree_problem = ${isTree ? 'True' : 'False'}
    is_design_problem = ${isDesign ? 'True' : 'False'}
    fn_name = "${problem.functionName}"
    param_meta = ${JSON.stringify(problem.parameters || [])}
    ret_type = "${problem.returnType || 'int'}"

    # Check for solution callable
    sol = None
    if not is_design_problem:
        if 'Solution' in globals():
            sol_class = globals()['Solution']
            sol = sol_class()
            solver_fn = getattr(sol, fn_name, None)
            if not solver_fn:
                # check fallback to first callable method in Solution
                methods = [m for m in dir(sol) if not m.startswith('_') and callable(getattr(sol, m))]
                if methods:
                    solver_fn = getattr(sol, methods[0])
        elif fn_name in globals() and callable(globals()[fn_name]):
            solver_fn = globals()[fn_name]
        else:
            # Look for any callable function defined
            candidates = [v for k, v in globals().items() if callable(v) and not k.startswith('_') and k not in ['build_list', 'list_to_array', 'build_tree', 'tree_to_array', 'deep_compare', 'run_tests']]
            solver_fn = candidates[0] if candidates else None

    for tc in raw_tests:
        case_num = tc['caseNumber']
        is_hidden = tc['isHidden']
        raw_input = tc['input']
        expected = tc['expectedOutput']
        
        t0 = time.perf_counter()
        actual = None
        status = 'PASSED'
        err_msg = None

        try:
            if is_design_problem:
                # Design problem: raw_input = [methods, args]
                methods, args_list = raw_input[0], raw_input[1]
                cls_name = methods[0]
                cls = globals().get(cls_name) or globals().get('Solution')
                if not cls:
                    raise Exception(f"Class '{cls_name}' not found in submission")
                
                instance = cls(*args_list[0]) if args_list[0] else cls()
                step_results = [None]
                for m_idx in range(1, len(methods)):
                    m_name = methods[m_idx]
                    m_args = args_list[m_idx]
                    method = getattr(instance, m_name, None)
                    if not method:
                        raise Exception(f"Method '{m_name}' not found on {cls_name}")
                    res = method(*m_args)
                    step_results.append(res)
                actual = step_results
            else:
                if not solver_fn:
                    raise Exception(f"Function '{fn_name}' or class Solution not found")
                
                # Transform args if needed
                call_args = []
                for idx, p in enumerate(param_meta):
                    arg_val = raw_input[idx] if idx < len(raw_input) else None
                    if p.get('type') == 'ListNode':
                        call_args.append(build_list(arg_val))
                    elif p.get('type') == 'TreeNode':
                        call_args.append(build_tree(arg_val))
                    else:
                        call_args.append(arg_val)

                ret = solver_fn(*call_args)
                
                # Normalize return
                if ret_type == 'ListNode':
                    actual = list_to_array(ret)
                elif ret_type == 'TreeNode':
                    actual = tree_to_array(ret)
                else:
                    actual = ret

            passed = deep_compare(actual, expected)
            status = 'PASSED' if passed else 'FAILED'

        except Exception as e:
            status = 'RUNTIME_ERROR'
            err_msg = str(e)
            actual = None

        elapsed_ms = round((time.perf_counter() - t0) * 1000, 2)
        
        results.append({
            'caseNumber': case_num,
            'isHidden': is_hidden,
            'status': status,
            'executionTime': elapsed_ms,
            'actualOutput': actual,
            'expectedOutput': expected,
            'error': err_msg,
            'input': raw_input
        })

    print("__DSA_RESULT_START__" + json.dumps(results) + "__DSA_RESULT_END__")

if __name__ == '__main__':
    run_tests()
`;
}
