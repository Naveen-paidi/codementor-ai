import React, { useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import {
  Play,
  RotateCcw,
  Sparkles,
  Trash2,
  Moon,
  Sun,
  Copy,
  Check,
  Code2,
  Terminal,
  Cpu,
  CornerDownRight,
  Clock,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import Button from '../components/ui/Button.jsx';
import Badge from '../components/ui/Badge.jsx';
import { useLearning } from '../context/LearningContext.jsx';
import { useTheme } from '../context/ThemeContext.jsx';
import { api } from '../services/api.js';

const STARTER_SNIPPETS = {
  python: `# Python 3 Scratchpad
def greet(name):
    return f"Hello, {name}! Welcome to CodeMentor AI."

students = ["Alice", "Bob", "Charlie"]
for student in students:
    print(greet(student))

# Fibonacci demonstration
def fibonacci(n):
    sequence = [0, 1]
    while len(sequence) < n:
        sequence.append(sequence[-1] + sequence[-2])
    return sequence

print("\\nFirst 8 Fibonacci numbers:", fibonacci(8))
`,
  javascript: `// JavaScript (Node.js) Scratchpad
function calculateStats(numbers) {
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  const avg = (sum / numbers.length).toFixed(2);
  const max = Math.max(...numbers);
  const min = Math.min(...numbers);
  return { sum, avg, max, min };
}

const data = [12, 45, 67, 89, 23, 90, 56];
console.log("Analyzing data:", data);
console.log("Computed stats:", calculateStats(data));
`,
  java: `// Java Scratchpad
import java.util.*;

public class Main {
    public static void main(String[] args) {
        System.out.println("Hello from CodeMentor Java Sandbox!");
        List<String> list = Arrays.asList("Algorithms", "Data Structures", "System Design");
        for (String topic : list) {
            System.out.println("Mastering: " + topic);
        }
    }
}
`,
  cpp: `// C++ Scratchpad
#include <iostream>
#include <vector>
#include <numeric>

int main() {
    std::cout << "CodeMentor C++ Native Compiler\\n";
    std::vector<int> nums = {10, 20, 30, 40, 50};
    int sum = std::accumulate(nums.begin(), nums.end(), 0);
    std::cout << "Sum of elements: " << sum << std::endl;
    return 0;
}
`,
  c: `// C Scratchpad
#include <stdio.h>

int main() {
    printf("CodeMentor GCC C Sandbox\\n");
    int arr[] = {2, 4, 6, 8, 10};
    int total = 0;
    for (int i = 0; i < 5; i++) {
        total += arr[i];
    }
    printf("Calculated total = %d\\n", total);
    return 0;
}
`
};

export const Playground = () => {
  const { selectedLanguage, setSelectedLanguage, openChatWithContext } = useLearning();
  const { isDark } = useTheme();
  const [language, setLanguage] = useState(selectedLanguage || 'python');
  const [code, setCode] = useState(STARTER_SNIPPETS[language] || STARTER_SNIPPETS.python);
  const [stdin, setStdin] = useState('');
  const [showStdin, setShowStdin] = useState(false);
  const [editorTheme, setEditorTheme] = useState(isDark ? 'vs-dark' : 'vs');
  const [stdout, setStdout] = useState('');
  const [stderr, setStderr] = useState('');
  const [exitCode, setExitCode] = useState(null);
  const [executionTime, setExecutionTime] = useState(null);
  const [isExecuting, setIsExecuting] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setEditorTheme(isDark ? 'vs-dark' : 'vs');
  }, [isDark]);

  const handleLanguageChange = (newLang) => {
    setLanguage(newLang);
    setSelectedLanguage(newLang);
    setCode(STARTER_SNIPPETS[newLang] || STARTER_SNIPPETS.python);
    setStdout('');
    setStderr('');
    setExitCode(null);
    setExecutionTime(null);
  };

  const handleRunCode = async () => {
    setIsExecuting(true);
    setStdout('');
    setStderr('');
    setExitCode(null);
    try {
      const result = await api.executeCode(language, code, stdin);
      setExecutionTime(result.executionTime ?? null);
      setExitCode(result.exitCode ?? (result.success ? 0 : 1));

      if (result.stdout) {
        setStdout(result.stdout);
      }
      if (result.stderr) {
        setStderr(result.stderr);
      }
      if (!result.stdout && !result.stderr) {
        setStdout('(Code executed successfully with no output)');
      }
    } catch (err) {
      setStderr(`Execution failed: ${err.message || 'Unknown network error'}`);
      setExitCode(1);
    } finally {
      setIsExecuting(false);
    }
  };

  const handleReset = () => {
    setCode(STARTER_SNIPPETS[language] || '');
    setStdout('');
    setStderr('');
    setExitCode(null);
    setExecutionTime(null);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleAskMentor = () => {
    openChatWithContext({
      currentCode: code,
      topicTitle: `${language.toUpperCase()} Scratchpad`,
      currentError: stderr || (stdout && stdout.toLowerCase().includes('error') ? stdout : null)
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-4 select-none">
      {/* Playground Header */}
      <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 sm:p-5 rounded-3xl border transition-all duration-300 ${
        isDark
          ? 'bg-[#070B20]/90 border-white/10 shadow-[0_0_25px_rgba(6,182,212,0.1)] text-white'
          : 'bg-white border-[#D8D1EE] shadow-sm text-[#1E1B4B]'
      }`}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-purple-100/70 dark:bg-cyan-950/40 border border-purple-200 dark:border-cyan-500/30 p-1.5 flex items-center justify-center shrink-0">
            <img src="/logo.png" alt="CodeMentor" className="w-full h-full object-contain" />
          </div>
          <div>
            <h1 className="text-xl font-black text-[#1E1B4B] dark:text-white flex items-center gap-2">
              Code Playground
              <Badge variant="purple">Online Compiler</Badge>
            </h1>
            <p className="text-xs text-[#64748B] dark:text-slate-400 mt-0.5">
              Write, compile, and execute code in real time with standard I/O support.
            </p>
          </div>
        </div>

        {/* Language selector & quick actions */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="inline-flex p-1 bg-[#F7F5FC] dark:bg-[#10152E] rounded-2xl border border-[#D8D1EE] dark:border-white/10">
            {['python', 'javascript', 'java', 'cpp', 'c'].map((langKey) => (
              <button
                key={langKey}
                onClick={() => handleLanguageChange(langKey)}
                className={`px-3 py-1 text-xs font-bold rounded-xl capitalize transition-all cursor-pointer ${
                  language === langKey
                    ? isDark
                      ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-xs'
                      : 'bg-indigo-600 text-white shadow-xs'
                    : 'text-[#64748B] dark:text-slate-400 hover:text-[#1E1B4B] dark:hover:text-white'
                }`}
              >
                {langKey === 'cpp' ? 'C++' : langKey}
              </button>
            ))}
          </div>

          <button
            onClick={() => setEditorTheme(editorTheme === 'vs' ? 'vs-dark' : 'vs')}
            className="p-2 rounded-2xl border border-[#D8D1EE] dark:border-white/10 text-[#64748B] dark:text-slate-300 hover:bg-[#F7F5FC] dark:hover:bg-white/10 text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
            title={`Switch to ${editorTheme === 'vs' ? 'dark' : 'light'} editor theme`}
          >
            {editorTheme === 'vs' ? <Moon className="w-4 h-4 text-[#1E1B4B] dark:text-white" /> : <Sun className="w-4 h-4 text-amber-500" />}
          </button>
        </div>
      </div>

      {/* Editor & Console Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 min-h-[600px]">
        {/* Monaco Editor Pane */}
        <div className={`lg:col-span-7 flex flex-col rounded-3xl border shadow-sm overflow-hidden transition-all duration-300 ${
          isDark
            ? 'bg-[#030617] border-cyan-500/30 shadow-[0_0_25px_rgba(6,182,212,0.15)]'
            : 'bg-white border-[#D8D1EE]'
        }`}>
          {/* Top Bar of Editor */}
          <div className={`flex items-center justify-between px-4 py-2.5 border-b text-xs font-semibold ${
            isDark
              ? 'bg-[#070B20] border-white/10 text-white'
              : 'bg-[#F7F5FC] border-[#D8D1EE] text-[#1E1B4B]'
          }`}>
            <span className="font-mono text-indigo-600 dark:text-cyan-400 font-bold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-indigo-500 dark:bg-cyan-400" />
              main.{language === 'python' ? 'py' : language === 'javascript' ? 'cjs' : language === 'java' ? 'java' : language === 'cpp' ? 'cpp' : 'c'}
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowStdin(!showStdin)}
                className={`px-2.5 py-1 text-xs rounded-xl font-bold transition-colors flex items-center gap-1 cursor-pointer ${
                  showStdin
                    ? 'bg-indigo-600 text-white'
                    : 'text-[#64748B] dark:text-slate-400 hover:bg-purple-100/50 dark:hover:bg-white/10'
                }`}
              >
                <CornerDownRight className="w-3 h-3" />
                <span>Custom Stdin</span>
              </button>
              <button
                onClick={handleCopyCode}
                className="p-1.5 text-[#64748B] dark:text-slate-400 hover:text-[#1E1B4B] dark:hover:text-white rounded-xl transition-colors flex items-center gap-1 cursor-pointer"
                title="Copy code"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                <span className="text-[11px] font-bold">{copied ? 'Copied' : 'Copy'}</span>
              </button>
              <button
                onClick={handleReset}
                className="p-1.5 text-[#64748B] dark:text-slate-400 hover:text-[#1E1B4B] dark:hover:text-white rounded-xl transition-colors flex items-center gap-1 cursor-pointer"
                title="Reset to starter snippet"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="text-[11px] font-bold">Reset</span>
              </button>
            </div>
          </div>

          {/* Stdin Input Box if toggled */}
          {showStdin && (
            <div className={`p-3 border-b space-y-1 ${
              isDark ? 'bg-[#070B20]/60 border-white/10' : 'bg-[#F7F5FC] border-[#D8D1EE]'
            }`}>
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-[#1E1B4B] dark:text-white">Standard Input (stdin):</span>
                <span className="text-[10px] text-[#64748B] dark:text-slate-400">Passed to process stdin during execution</span>
              </div>
              <textarea
                value={stdin}
                onChange={(e) => setStdin(e.target.value)}
                placeholder="Enter input values here..."
                rows={3}
                className={`w-full p-2.5 text-xs font-mono rounded-2xl border outline-none ${
                  isDark
                    ? 'bg-[#10152E] text-white border-white/10 focus:border-cyan-400'
                    : 'bg-white text-[#1E1B4B] border-[#D8D1EE] focus:border-indigo-500'
                }`}
              />
            </div>
          )}

          {/* Monaco Editor Component */}
          <div className="flex-1 min-h-[420px]">
            <Editor
              height="100%"
              language={language === 'c' || language === 'cpp' ? 'cpp' : language}
              value={code}
              theme={editorTheme}
              onChange={(newVal) => setCode(newVal || '')}
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                fontFamily: 'JetBrains Mono, Menlo, monospace',
                lineNumbers: 'on',
                scrollBeyondLastLine: false,
                wordWrap: 'on',
                tabSize: 4,
                automaticLayout: true,
                padding: { top: 12, bottom: 12 }
              }}
            />
          </div>

          {/* Editor Action Bottom Bar */}
          <div className={`flex items-center justify-between px-4 py-3 border-t ${
            isDark ? 'bg-[#070B20] border-white/10' : 'bg-[#F7F5FC] border-[#D8D1EE]'
          }`}>
            <Button
              variant="outline"
              size="sm"
              onClick={handleAskMentor}
              leftIcon={<Sparkles className="w-4 h-4 text-purple-600 dark:text-cyan-400" />}
              className="text-xs font-bold"
            >
              Ask AI Mentor
            </Button>

            <Button
              variant="primary"
              size="sm"
              onClick={handleRunCode}
              isLoading={isExecuting}
              leftIcon={<Play className="w-4 h-4 fill-white text-white" />}
              className="font-bold px-5"
            >
              Run Code
            </Button>
          </div>
        </div>

        {/* Output & Console Pane */}
        <div className={`lg:col-span-5 flex flex-col rounded-3xl border shadow-sm overflow-hidden transition-all duration-300 ${
          isDark
            ? 'bg-[#030617] border-cyan-500/30 shadow-[0_0_25px_rgba(6,182,212,0.15)] text-white'
            : 'bg-[#1E1B4B] border-purple-900 text-white'
        }`}>
          {/* Output Header */}
          <div className={`flex items-center justify-between px-4 py-2.5 border-b text-xs font-semibold ${
            isDark
              ? 'bg-[#070B20] border-white/10 text-white'
              : 'bg-[#17143A] border-purple-800/80 text-white'
          }`}>
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span className="font-bold text-white">Terminal Output</span>
              {executionTime !== null && (
                <span className="text-[11px] font-mono text-cyan-300 bg-white/10 border border-white/20 px-2 py-0.5 rounded-lg flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {executionTime}ms
                </span>
              )}
              {exitCode !== null && (
                <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-md ${
                  exitCode === 0 ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-rose-950/60 text-rose-300 border border-rose-800'
                }`}>
                  Exit: {exitCode}
                </span>
              )}
            </div>

            <button
              onClick={() => {
                setStdout('');
                setStderr('');
                setExitCode(null);
                setExecutionTime(null);
              }}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
              title="Clear output"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Console Output Screen */}
          <div className="flex-1 p-4 bg-black/40 font-mono text-xs text-slate-100 overflow-y-auto selection:bg-indigo-600 selection:text-white space-y-3">
            {stdout || stderr ? (
              <>
                {stdout && (
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-sans font-semibold block mb-1">STDOUT:</span>
                    <pre className="whitespace-pre-wrap leading-relaxed text-cyan-300 font-mono">{stdout}</pre>
                  </div>
                )}
                {stderr && (
                  <div>
                    <span className="text-[10px] text-rose-400 uppercase font-sans font-semibold block mb-1">STDERR / ERRORS:</span>
                    <pre className="whitespace-pre-wrap leading-relaxed text-rose-300 bg-rose-950/40 p-2.5 rounded-xl border border-rose-900/50 font-mono">
                      {stderr}
                    </pre>
                  </div>
                )}
              </>
            ) : (
              <div className="h-full min-h-[300px] flex flex-col items-center justify-center text-center text-slate-400 space-y-2">
                <Terminal className="w-8 h-8 text-slate-500 opacity-60" />
                <p className="text-xs font-semibold">Click "Run Code" to compile and execute in the cloud sandbox.</p>
                <p className="text-[11px] text-slate-500">Supports standard console input/output across 5 languages.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playground;
