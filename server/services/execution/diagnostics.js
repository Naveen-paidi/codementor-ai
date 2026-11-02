import { spawnSync } from 'child_process';

/**
 * Diagnostic tool to check local compilers and interpreters on startup
 */
export function checkCompilers() {
  const tools = [
    { name: 'Node.js (JavaScript)', cmd: 'node', args: ['-v'] },
    { name: 'Python Interpreter', cmd: 'python', args: ['--version'] },
    { name: 'Java Compiler (javac)', cmd: 'javac', args: ['-version'] },
    { name: 'Java Runtime (java)', cmd: 'java', args: ['-version'] },
    { name: 'GCC (C Compiler)', cmd: 'gcc', args: ['--version'] },
    { name: 'G++ (C++ Compiler)', cmd: 'g++', args: ['--version'] },
  ];

  console.log('---------------------------------------------------------');
  console.log('🔍 Checking Local Compilers & Interpreters:');
  const results = {};

  for (const tool of tools) {
    try {
      const res = spawnSync(tool.cmd, tool.args, { encoding: 'utf-8', windowsHide: true });
      if (res.status === 0 || res.stdout || res.stderr) {
        const ver = (res.stdout || res.stderr || '').split('\n')[0].trim();
        console.log(`  ✅ ${tool.name}: ${ver}`);
        results[tool.cmd] = true;
      } else {
        console.log(`  ⚠️ ${tool.name}: Not detected (${tool.cmd})`);
        results[tool.cmd] = false;
      }
    } catch {
      console.log(`  ⚠️ ${tool.name}: Not found on PATH`);
      results[tool.cmd] = false;
    }
  }
  console.log('---------------------------------------------------------');
  return results;
}
