/**
 * Attractive code block with language badge, copy, and dark IDE-style theme.
 * Location: client/src/components/curriculum/CodeBlock.jsx
 */
import React, { useState } from 'react';
import { Copy, Check, Terminal } from 'lucide-react';

export const CodeBlock = ({
    code = '',
    language = 'code',
    title,
    showLineNumbers = true,
    className = '',
}) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const lines = code.split('\n');

    return (
        <div
            className={`rounded-xl overflow-hidden border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 shadow-lg ${className}`}
        >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-slate-950/70 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                    <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                    </div>
                    {title && (
                        <span className="text-xs font-medium text-slate-300 ml-1">{title}</span>
                    )}
                </div>

                <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-slate-800/80 border border-slate-700 text-[10px] font-mono font-semibold text-blue-300 uppercase tracking-wide">
                        <Terminal className="w-3 h-3" />
                        {language}
                    </span>
                    <button
                        onClick={handleCopy}
                        className="flex items-center gap-1 text-slate-400 hover:text-emerald-300 transition-colors cursor-pointer text-xs px-2 py-1 rounded-md hover:bg-slate-800"
                    >
                        {copied ? (
                            <>
                                <Check className="w-3.5 h-3.5 text-emerald-400" />
                                <span className="text-emerald-400 font-medium">Copied</span>
                            </>
                        ) : (
                            <>
                                <Copy className="w-3.5 h-3.5" />
                                <span>Copy</span>
                            </>
                        )}
                    </button>
                </div>
            </div>

            {/* Code body */}
            <div className="overflow-x-auto">
                <pre className="p-4 font-mono text-xs sm:text-[13px] text-slate-100 leading-relaxed">
                    {showLineNumbers ? (
                        <table className="w-full border-collapse">
                            <tbody>
                                {lines.map((line, i) => (
                                    <tr key={i}>
                                        <td className="pr-4 text-right select-none text-slate-600 w-8 align-top">
                                            {i + 1}
                                        </td>
                                        <td className="whitespace-pre align-top">{line || ' '}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <code className="whitespace-pre">{code}</code>
                    )}
                </pre>
            </div>
        </div>
    );
};

export default CodeBlock;