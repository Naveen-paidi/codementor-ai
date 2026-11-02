import { spawn } from 'child_process';
import fs from 'fs/promises';
import path from 'path';
import os from 'os';
import { v4 as uuidv4 } from 'uuid';

const MAX_OUTPUT_BYTES = 1024 * 1024; // 1 MB limit

/**
 * Execute JavaScript (Node.js) code locally
 * @param {string} code 
 * @param {string} stdin 
 * @param {number} timeoutMs 
 */
export const runJavaScript = async (code, stdin = '', timeoutMs = 8000) => {
  const runId = uuidv4();
  const tempDir = path.join(os.tmpdir(), `ai_edu_js_${runId}`);
  const filePath = path.join(tempDir, 'solution.cjs');

  const startTime = Date.now();

  try {
    await fs.mkdir(tempDir, { recursive: true });
    await fs.writeFile(filePath, code, 'utf-8');

    return await new Promise((resolve) => {
      let stdout = '';
      let stderr = '';
      let isTimedOut = false;
      let outputExceeded = false;

      const proc = spawn(process.execPath || 'node', [filePath], {
        windowsHide: true,
      });

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
          stderr: `Node.js execution error: ${err.message}`,
          exitCode: 1,
          executionTime: Date.now() - startTime,
          timedOut: false
        });
      });
    });
  } finally {
    try {
      await fs.rm(tempDir, { recursive: true, force: true });
    } catch {}
  }
};
