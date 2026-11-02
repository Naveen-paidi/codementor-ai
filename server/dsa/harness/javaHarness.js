/**
 * Java Harness for DSA Judge
 * Generates an executable Java class with main() that wraps
 * student Solution, data structure builders, and strongly typed test invocations.
 */

function javaLiteral(val, type) {
  if (val === null || val === undefined) return "null";
  if (type === 'int') return `${val}`;
  if (type === 'long') return `${val}L`;
  if (type === 'double') return `${Number(val).toFixed(4)}`;
  if (type === 'boolean') return `${val ? 'true' : 'false'}`;
  if (type === 'string') return JSON.stringify(val);
  if (type === 'int[]') {
    if (!Array.isArray(val)) return "new int[0]";
    return `new int[]{${val.join(', ')}}`;
  }
  if (type === 'int[][]') {
    if (!Array.isArray(val)) return "new int[0][0]";
    const rows = val.map(r => `new int[]{${r.join(', ')}}`);
    return `new int[][]{${rows.join(', ')}}`;
  }
  if (type === 'string[]') {
    if (!Array.isArray(val)) return "new String[0]";
    const items = val.map(s => JSON.stringify(s));
    return `new String[]{${items.join(', ')}}`;
  }
  if (type === 'char[][]') {
    if (!Array.isArray(val)) return "new char[0][0]";
    const rows = val.map(r => `new char[]{${r.map(c => `'${c}'`).join(', ')}}`);
    return `new char[][]{${rows.join(', ')}}`;
  }
  if (type === 'ListNode') {
    if (!Array.isArray(val)) return "null";
    return `buildList(new int[]{${val.join(', ')}})`;
  }
  if (type === 'TreeNode') {
    if (!Array.isArray(val)) return "null";
    const mapped = val.map(v => v === null ? "null" : `${v}`);
    return `buildTree(new Integer[]{${mapped.join(', ')}})`;
  }
  return JSON.stringify(val);
}

export function buildJavaHarness(problem, userCode, testCases) {
  const fnName = problem.functionName;
  const paramMeta = problem.parameters || [];
  const isDesign = Boolean(problem.isDesign);

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
            long t0 = System.nanoTime();
            ${clsName} instance = new ${clsName}(${(argsList[0] || []).join(', ')});
            List<Object> steps = new ArrayList<>();
            steps.add(null);
            ${methods.slice(1).map((m, mIdx) => {
              const argVals = (argsList[mIdx + 1] || []).map(a => typeof a === 'string' ? JSON.stringify(a) : a).join(', ');
              return `steps.add(instance.${m}(${argVals}));`;
            }).join('\n            ')}
            double ms = (System.nanoTime() - t0) / 1e6;
            String actualJson = listToJson(steps);
            String expectedJson = ${JSON.stringify(JSON.stringify(expected))};
            boolean passed = compareJson(actualJson, expectedJson);
            addResult(${tc.caseNumber}, ${isHidden ? 'true' : 'false'}, passed ? "PASSED" : "FAILED", ms, actualJson, expectedJson, null);
        } catch (Exception e) {
            addResult(${tc.caseNumber}, ${isHidden ? 'true' : 'false'}, "RUNTIME_ERROR", 0, "null", ${JSON.stringify(JSON.stringify(expected))}, e.getMessage());
        }
      `;
    } else {
      const callArgsJava = paramMeta.map((p, pIdx) => javaLiteral(rawArgs[pIdx], p.type)).join(', ');
      testBlocks += `
        // Test case ${tc.caseNumber}
        try {
            long t0 = System.nanoTime();
            var ret = sol.${fnName}(${callArgsJava});
            double ms = (System.nanoTime() - t0) / 1e6;
            String actualJson = toJson(ret);
            String expectedJson = ${JSON.stringify(JSON.stringify(expected))};
            boolean passed = compareJson(actualJson, expectedJson);
            addResult(${tc.caseNumber}, ${isHidden ? 'true' : 'false'}, passed ? "PASSED" : "FAILED", ms, actualJson, expectedJson, null);
        } catch (Exception e) {
            addResult(${tc.caseNumber}, ${isHidden ? 'true' : 'false'}, "RUNTIME_ERROR", 0, "null", ${JSON.stringify(JSON.stringify(expected))}, e.getMessage());
        }
      `;
    }
  });

  // Extract all import statements from user code so they are placed at top of compilation unit
  const extractedImports = (userCode.match(/^\s*import\s+[^;]+;\s*$/gm) || []).map(s => s.trim());
  const standardImports = [
    'import java.util.*;',
    'import java.io.*;',
    'import java.lang.*;',
    'import java.math.*;'
  ];
  const allImports = Array.from(new Set([...standardImports, ...extractedImports])).join('\n');

  // Sanitize user code: remove imports and make student classes package-private so Main is the single public class
  let cleanUserCode = userCode
    .replace(/^\s*import\s+[^;]+;\s*$/gm, '')
    .replace(/\bpublic\s+class\s+([A-Za-z0-9_]+)/g, 'class $1');

  return `${allImports}

// Data structure definitions
class ListNode {
    int val;
    ListNode next;
    ListNode() {}
    ListNode(int val) { this.val = val; }
    ListNode(int val, ListNode next) { this.val = val; this.next = next; }
}

class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode() {}
    TreeNode(int val) { this.val = val; }
    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// ==================== STUDENT CODE START ====================
${cleanUserCode}
// ===================== STUDENT CODE END =====================

public class Main {
    static StringBuilder results = new StringBuilder("[");

    static ListNode buildList(int[] arr) {
        if (arr == null || arr.length == 0) return null;
        ListNode dummy = new ListNode(0);
        ListNode curr = dummy;
        for (int x : arr) {
            curr.next = new ListNode(x);
            curr = curr.next;
        }
        return dummy.next;
    }

    static List<Integer> listToArray(ListNode head) {
        List<Integer> list = new ArrayList<>();
        ListNode curr = head;
        Set<ListNode> visited = new HashSet<>();
        while (curr != null && !visited.contains(curr) && list.size() < 10000) {
            visited.add(curr);
            list.add(curr.val);
            curr = curr.next;
        }
        return list;
    }

    static TreeNode buildTree(Integer[] arr) {
        if (arr == null || arr.length == 0 || arr[0] == null) return null;
        TreeNode root = new TreeNode(arr[0]);
        Queue<TreeNode> q = new LinkedList<>();
        q.offer(root);
        int i = 1;
        while (!q.isEmpty() && i < arr.length) {
            TreeNode curr = q.poll();
            if (i < arr.length && arr[i] != null) {
                curr.left = new TreeNode(arr[i]);
                q.offer(curr.left);
            }
            i++;
            if (i < arr.length && arr[i] != null) {
                curr.right = new TreeNode(arr[i]);
                q.offer(curr.right);
            }
            i++;
        }
        return root;
    }

    static List<Integer> treeToArray(TreeNode root) {
        List<Integer> list = new ArrayList<>();
        if (root == null) return list;
        Queue<TreeNode> q = new LinkedList<>();
        q.offer(root);
        while (!q.isEmpty()) {
            TreeNode curr = q.poll();
            if (curr != null) {
                list.add(curr.val);
                q.offer(curr.left);
                q.offer(curr.right);
            } else {
                list.add(null);
            }
        }
        while (!list.isEmpty() && list.get(list.size() - 1) == null) {
            list.remove(list.size() - 1);
        }
        return list;
    }

    static String quote(String s) {
        if (s == null) return "null";
        char q = '"';
        StringBuilder sb = new StringBuilder();
        sb.append(q);
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            if (c == q) {
                sb.append('\\\\').append(q);
            } else if (c == '\\\\') {
                sb.append('\\\\').append('\\\\');
            } else {
                sb.append(c);
            }
        }
        sb.append(q);
        return sb.toString();
    }

    static String toJson(Object obj) {
        if (obj == null) return "null";
        if (obj instanceof ListNode) return listToJson(listToArray((ListNode) obj));
        if (obj instanceof TreeNode) return listToJson(treeToArray((TreeNode) obj));
        if (obj instanceof int[]) {
            int[] arr = (int[]) obj;
            StringBuilder sb = new StringBuilder("[");
            for (int i = 0; i < arr.length; i++) {
                sb.append(arr[i]).append(i < arr.length - 1 ? "," : "");
            }
            return sb.append("]").toString();
        }
        if (obj instanceof int[][]) {
            int[][] arr = (int[][]) obj;
            StringBuilder sb = new StringBuilder("[");
            for (int i = 0; i < arr.length; i++) {
                sb.append(toJson(arr[i])).append(i < arr.length - 1 ? "," : "");
            }
            return sb.append("]").toString();
        }
        if (obj instanceof String[]) {
            String[] arr = (String[]) obj;
            StringBuilder sb = new StringBuilder("[");
            for (int i = 0; i < arr.length; i++) {
                sb.append(quote(arr[i])).append(i < arr.length - 1 ? "," : "");
            }
            return sb.append("]").toString();
        }
        if (obj instanceof List) return listToJson((List<?>) obj);
        if (obj instanceof String) return quote((String) obj);
        return obj.toString();
    }

    static String listToJson(List<?> list) {
        if (list == null) return "null";
        StringBuilder sb = new StringBuilder("[");
        for (int i = 0; i < list.size(); i++) {
            Object item = list.get(i);
            sb.append(toJson(item)).append(i < list.size() - 1 ? "," : "");
        }
        return sb.append("]").toString();
    }

    static boolean compareJson(String a, String b) {
        if (a == null && b == null) return true;
        if (a == null || b == null) return false;
        String s1 = a.replaceAll("\\\\s+", "");
        String s2 = b.replaceAll("\\\\s+", "");
        return s1.equals(s2);
    }

    static void addResult(int caseNumber, boolean isHidden, String status, double ms, String actual, String expected, String error) {
        if (results.length() > 1) results.append(",");
        char q = '"';
        results.append("{")
            .append(q).append("caseNumber").append(q).append(":").append(caseNumber).append(",")
            .append(q).append("isHidden").append(q).append(":").append(isHidden).append(",")
            .append(q).append("status").append(q).append(":").append(q).append(status).append(q).append(",")
            .append(q).append("executionTime").append(q).append(":").append(String.format(Locale.US, "%.2f", ms)).append(",")
            .append(q).append("actualOutput").append(q).append(":").append(actual).append(",")
            .append(q).append("expectedOutput").append(q).append(":").append(expected).append(",")
            .append(q).append("error").append(q).append(":").append(quote(error))
            .append("}");
    }

    public static void main(String[] args) {
        Solution sol = null;
        try {
            sol = new Solution();
        } catch (Exception ignored) {}

        ${testBlocks}

        results.append("]");
        System.out.println("__DSA_RESULT_START__" + results.toString() + "__DSA_RESULT_END__");
    }
}
`;
}
