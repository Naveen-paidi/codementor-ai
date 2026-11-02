import { spawn } from 'child_process';
import fs from 'fs/promises';
import path from 'path';
import os from 'os';
import { v4 as uuidv4 } from 'uuid';

const MAX_OUTPUT_BYTES = 1024 * 1024; // 1 MB limit

/**
 * Execute Java code locally using javac and java
 * @param {string} code 
 * @param {string} stdin 
 * @param {number} timeoutMs 
 */
export const runJava = async (code, stdin = '', timeoutMs = 9000) => {
  const runId = uuidv4();
  const tempDir = path.join(os.tmpdir(), `ai_edu_java_${runId}`);

  // Detect class name from code if public class is defined, else Main
  let className = 'Main';
  if (code.includes('public class Main') || code.includes('static void main')) {
    className = 'Main';
  } else {
    const match = code.match(/public\s+class\s+([A-Za-z0-9_]+)/);
    if (match && match[1]) {
      className = match[1];
    } else if (!code.includes('class Main') && code.includes('class Solution')) {
      className = 'Solution';
    }
  }

  // Ensure only the designated className is declared public in this single compilation unit
  let codeToWrite = code;
  if (className === 'Main') {
    codeToWrite = code.replace(/public\s+class\s+(?!Main\b)([A-Za-z0-9_]+)/g, 'class $1');
  }

  const sourcePath = path.join(tempDir, `${className}.java`);
  const startTime = Date.now();

  try {
    await fs.mkdir(tempDir, { recursive: true });
    await fs.writeFile(sourcePath, codeToWrite, 'utf-8');

    // 1. Compile stage
    const compileResult = await new Promise((resolve) => {
      let compileErr = '';
      const javac = spawn('javac', [sourcePath], { windowsHide: true });

      javac.stderr.on('data', (d) => { compileErr += d.toString(); });

      javac.on('close', (exitCode) => {
        resolve({
          success: exitCode === 0,
          error: compileErr
        });
      });

      javac.on('error', (err) => {
        resolve({
          success: false,
          error: `Java compiler (javac) not found (${err.message}). Ensure JDK is installed and added to PATH.`
        });
      });
    });

    if (!compileResult.success) {
      return {
        success: false,
        stdout: '',
        stderr: `Compilation Error:\n${compileResult.error}`,
        exitCode: 1,
        executionTime: Date.now() - startTime,
        isCompilationError: true
      };
    }

    // 2. Execution stage
    return await new Promise((resolve) => {
      let stdout = '';
      let stderr = '';
      let isTimedOut = false;
      let outputExceeded = false;

      const proc = spawn('java', ['-cp', tempDir, className], { windowsHide: true });

      const timer = setTimeout(() => {
        isTimedOut = true;
        try { proc.kill('SIGKILL'); } catch {}
      }, timeoutMs);

      if (stdin) {
        proc.stdin.write(stdin);
        proc.stdin.end();
      } else {
        proc.stdin.end();
      }

      proc.stdout.on('data', (data) => {
        if (stdout.length < MAX_OUTPUT_BYTES) {
          stdout += data.toString();
        } else if (!outputExceeded) {
          outputExceeded = true;
          stdout += '\n[Output limit reached: Truncated]\n';
          try { proc.kill('SIGKILL'); } catch {}
        }
      });

      proc.stderr.on('data', (data) => {
        if (stderr.length < MAX_OUTPUT_BYTES) {
          stderr += data.toString();
        }
      });

      proc.on('close', (code) => {
        clearTimeout(timer);
        const executionTime = Date.now() - startTime;

        if (isTimedOut) {
          resolve({
            success: false,
            stdout,
            stderr: `Time Limit Exceeded (${timeoutMs / 1000}s). Infinite loop or slow operation detected.`,
            exitCode: -1,
            executionTime,
            timedOut: true
          });
        } else {
          resolve({
            success: code === 0,
            stdout,
            stderr,
            exitCode: code ?? 0,
            executionTime,
            timedOut: false
          });
        }
      });

      proc.on('error', (err) => {
        clearTimeout(timer);
        resolve({
          success: false,
          stdout,
          stderr: `Java runtime (java) error: ${err.message}`,
          exitCode: 1,
          executionTime: Date.now() - startTime
        });
      });
    });
  } finally {
    try {
      await fs.rm(tempDir, { recursive: true, force: true });
    } catch {}
  }
};
