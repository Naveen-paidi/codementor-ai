import React, { useRef, useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import {
  Play,
  Send,
  RotateCcw,
  Trash2,
  Maximize2,
  Minimize2,
  Sparkles,
  Terminal,
  Sun,
  Moon
} from 'lucide-react';
import Button from './ui/Button.jsx';
import { useTheme } from '../context/ThemeContext.jsx';

export const CodeEditor = ({
  code,
  onChange,
  language = 'python',
  starterCode = '',
  onRun,
  onSubmit,
  isRunning = false,
  isSubmitting = false
}) => {
  const { isDark } = useTheme();
  const editorRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [editorTheme, setEditorTheme] = useState(isDark ? 'vs-dark' : 'vs');

  useEffect(() => {
    setEditorTheme(isDark ? 'vs-dark' : 'vs');
  }, [isDark]);

  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;

    // Add keyboard shortcuts: Ctrl+Enter / Cmd+Enter to Run
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, () => {
      if (onRun && !isRunning) onRun();
    });
  };

  const handleReset = () => {
    if (window.confirm('Reset code back to original starter template?')) {
      onChange(starterCode || '');
    }
  };

  const handleClear = () => {
    if (window.confirm('Clear all code in editor?')) {
      onChange('');
    }
  };

  const monacoLanguageMap = {
    python: 'python',
    javascript: 'javascript',
    java: 'java',
    c: 'c',
    cpp: 'cpp',
  };

  return (
    <div
      className={`flex flex-col rounded-3xl overflow-hidden transition-all duration-300 border ${
        isFullscreen ? 'fixed inset-0 z-50 rounded-none' : 'h-full min-h-[460px]'
      } ${
        isDark
          ? 'bg-[#030617] border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.15)]'
          : 'bg-white border-[#D8D1EE] shadow-md'
      }`}
    >
      {/* Editor Toolbar Header */}
      <div className={`flex flex-wrap items-center justify-between px-4 py-2.5 text-xs gap-2 border-b ${
        isDark
          ? 'bg-[#070B20] border-white/10 text-white'
          : 'bg-[#F7F5FC] border-[#D8D1EE] text-[#1E1B4B]'
      }`}>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-xl bg-purple-100/70 dark:bg-cyan-950/40 border border-purple-200 dark:border-cyan-500/30 font-mono text-[11px] shadow-2xs">
            <Terminal className="w-3.5 h-3.5 text-indigo-600 dark:text-cyan-400" />
            <span className="uppercase font-bold text-indigo-700 dark:text-cyan-300">{language}</span>
          </div>
          <span className="text-[#64748B] dark:text-slate-400 hidden sm:inline text-[11px]">
            Press <kbd className="px-1.5 py-0.5 rounded-md bg-white dark:bg-[#10152E] border border-[#D8D1EE] dark:border-white/10 font-mono text-[10px] text-indigo-600 dark:text-cyan-400">Ctrl+Enter</kbd> to Run
          </span>
        </div>

        {/* Toolbar Controls */}
        <div className="flex items-center gap-1.5">
          {/* Light / Dark Editor Theme Toggle */}
          <button
            onClick={() => setEditorTheme(editorTheme === 'vs' ? 'vs-dark' : 'vs')}
            title={`Switch to ${editorTheme === 'vs' ? 'dark' : 'light'} editor theme`}
            className="p-1.5 rounded-lg text-[#64748B] dark:text-slate-400 hover:text-[#1E1B4B] dark:hover:text-white hover:bg-purple-100/50 dark:hover:bg-white/10 transition-colors cursor-pointer"
          >
            {editorTheme === 'vs' ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5 text-amber-500" />}
          </button>

          <button
            onClick={handleReset}
            title="Reset to starter code"
            className="p-1.5 rounded-lg text-[#64748B] dark:text-slate-400 hover:text-[#1E1B4B] dark:hover:text-white hover:bg-purple-100/50 dark:hover:bg-white/10 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={handleClear}
            title="Clear editor"
            className="p-1.5 rounded-lg text-[#64748B] dark:text-slate-400 hover:text-rose-500 hover:bg-rose-100/50 dark:hover:bg-rose-950/40 transition-colors cursor-pointer"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
            className="p-1.5 rounded-lg text-[#64748B] dark:text-slate-400 hover:text-[#1E1B4B] dark:hover:text-white hover:bg-purple-100/50 dark:hover:bg-white/10 transition-colors mr-2 cursor-pointer"
          >
            {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>

          {/* Run Button */}
          <Button
            size="sm"
            variant="outline"
            onClick={onRun}
            isLoading={isRunning}
            leftIcon={<Play className="w-3.5 h-3.5 text-indigo-600 dark:text-cyan-400" />}
            className="py-1.5 px-3 text-xs font-bold"
          >
            Run Code
          </Button>

          {/* Submit Button */}
          {onSubmit && (
            <Button
              size="sm"
              variant="primary"
              onClick={onSubmit}
              isLoading={isSubmitting}
              leftIcon={<Send className="w-3.5 h-3.5 fill-white text-white" />}
              className="py-1.5 px-3 text-xs font-bold"
            >
              Submit All 10
            </Button>
          )}
        </div>
      </div>

      {/* Monaco Code Editor Area */}
      <div className="flex-1 min-h-[380px] w-full">
        <Editor
          height="100%"
          language={monacoLanguageMap[language?.toLowerCase()] || 'python'}
          value={code}
          onChange={onChange}
          theme={editorTheme}
          onMount={handleEditorDidMount}
          options={{
            fontSize: 13,
            fontFamily: 'JetBrains Mono, Menlo, Monaco, Consolas, monospace',
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
            wordWrap: 'on',
            lineNumbers: 'on',
            roundedSelection: true,
            cursorBlinking: 'smooth',
            smoothScrolling: true,
            tabSize: 4,
            automaticLayout: true,
            padding: { top: 12, bottom: 12 },
          }}
        />
      </div>
    </div>
  );
};

export default CodeEditor;
