import { runPython } from './pythonExecutor.js';
import { runJavaScript } from './javascriptExecutor.js';
import { runJava } from './javaExecutor.js';
import { runC } from './cExecutor.js';
import { runCpp } from './cppExecutor.js';

/**
 * Unified Code Executor Dispatcher
 * @param {string} language - 'python' | 'javascript' | 'java' | 'c' | 'cpp'
 * @param {string} code - source code
 * @param {string} stdin - standard input
 * @param {number} timeoutMs - max execution time in ms
 */
export const executeCode = async (language, code, stdin = '', timeoutMs = 8000) => {
  const normalizedLang = (language || '').toLowerCase().trim();

  if (!code || typeof code !== 'string') {
    return {
      success: false,
      stdout: '',
      stderr: 'No code provided for execution.',
      exitCode: 1,
      executionTime: 0
    };
  }

  try {
    switch (normalizedLang) {
      case 'python':
      case 'py':
        return await runPython(code, stdin, timeoutMs);

      case 'javascript':
      case 'js':
      case 'node':
        return await runJavaScript(code, stdin, timeoutMs);

      case 'java':
        return await runJava(code, stdin, timeoutMs);

      case 'c':
        return await runC(code, stdin, timeoutMs);

      case 'cpp':
      case 'c++':
        return await runCpp(code, stdin, timeoutMs);

      default:
        return {
          success: false,
          stdout: '',
          stderr: `Unsupported execution language: "${language}". Supported: python, javascript, java, c, cpp.`,
          exitCode: 1,
          executionTime: 0
        };
    }
  } catch (error) {
    return {
      success: false,
      stdout: '',
      stderr: `Executor internal error: ${error.message}`,
      exitCode: 1,
      executionTime: 0
    };
  }
};
