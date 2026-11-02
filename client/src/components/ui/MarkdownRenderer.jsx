import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export const MarkdownRenderer = ({ content = '', className = '' }) => {
  const [copiedIndex, setCopiedIndex] = useState(null);

  if (!content) return null;

  const handleCopy = (code, index) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  // Basic markdown parser that splits code blocks and formatted paragraphs
  const renderFormattedText = (text) => {
    // Process bold, italic, and inline code
    const parts = text.split(/(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('`') && part.endsWith('`')) {
        return (
          <code key={i} className="px-1.5 py-0.5 mx-0.5 rounded bg-slate-100 dark:bg-slate-800 text-blue-700 dark:text-cyan-300 font-mono text-xs border border-slate-200 dark:border-slate-700">
            {part.slice(1, -1)}
          </code>
        );
      }
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="font-semibold text-slate-900 dark:text-white">{part.slice(2, -2)}</strong>;
      }
      if (part.startsWith('*') && part.endsWith('*')) {
        return <em key={i} className="italic text-slate-800 dark:text-slate-200">{part.slice(1, -1)}</em>;
      }
      return part;
    });
  };

  // Split content by triple backticks for code blocks
  const blocks = content.split(/(```[\s\S]*?```)/g);

  return (
    <div className={`space-y-3 text-slate-700 dark:text-slate-200 text-sm leading-relaxed ${className}`}>
      {blocks.map((block, index) => {
        if (block.startsWith('```') && block.endsWith('```')) {
          // Extract language and code
          const firstLineEnd = block.indexOf('\n');
          let language = 'text';
          let code = '';

          if (firstLineEnd !== -1) {
            language = block.slice(3, firstLineEnd).trim() || 'code';
            code = block.slice(firstLineEnd + 1, -3);
          } else {
            code = block.slice(3, -3);
          }

          return (
            <div key={index} className="my-3 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-900 text-slate-100 shadow-sm">
              <div className="flex items-center justify-between px-3.5 py-1.5 bg-slate-800 border-b border-slate-700/60 text-xs text-slate-400">
                <span className="font-mono font-medium lowercase">{language}</span>
                <button
                  onClick={() => handleCopy(code, index)}
                  className="flex items-center gap-1 hover:text-slate-200 transition-colors cursor-pointer text-xs"
                >
                  {copiedIndex === index ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="p-4 text-xs font-mono overflow-x-auto text-slate-100 leading-normal selection:bg-blue-600">
                <code>{code}</code>
              </pre>
            </div>
          );
        }

        // Split text by lines
        const lines = block.split('\n');
        return (
          <div key={index} className="space-y-2">
            {lines.map((line, lIndex) => {
              const trimmed = line.trim();
              if (!trimmed) return null;

              if (trimmed.startsWith('# ')) {
                return <h1 key={lIndex} className="text-xl font-bold text-slate-900 dark:text-white mt-4 mb-2">{trimmed.slice(2)}</h1>;
              }
              if (trimmed.startsWith('## ')) {
                return <h2 key={lIndex} className="text-lg font-bold text-slate-900 dark:text-white mt-3 mb-2">{trimmed.slice(3)}</h2>;
              }
              if (trimmed.startsWith('### ')) {
                return <h3 key={lIndex} className="text-base font-semibold text-slate-900 dark:text-white mt-2 mb-1">{trimmed.slice(4)}</h3>;
              }
              if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
                return (
                  <div key={lIndex} className="flex items-start gap-2 ml-2">
                    <span className="text-blue-500 dark:text-cyan-400 mt-1">•</span>
                    <span className="text-slate-800 dark:text-slate-200">{renderFormattedText(trimmed.slice(2))}</span>
                  </div>
                );
              }
              if (trimmed.startsWith('> ')) {
                return (
                  <blockquote key={lIndex} className="border-l-4 border-blue-500 dark:border-cyan-400 bg-blue-50/50 dark:bg-slate-800/60 pl-3 py-1.5 rounded-r text-slate-700 dark:text-slate-200 italic">
                    {renderFormattedText(trimmed.slice(2))}
                  </blockquote>
                );
              }

              return <p key={lIndex} className="text-slate-800 dark:text-slate-200">{renderFormattedText(line)}</p>;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default MarkdownRenderer;
