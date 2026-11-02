/**
 * Reusable section wrapper with icon, title, and content area.
 * Location: client/src/components/curriculum/SectionBlock.jsx
 */
import React from 'react';

export const SectionBlock = ({
    icon: Icon,
    iconColor = 'blue',
    title,
    subtitle,
    children,
    className = '',
    variant = 'default',
}) => {
    const colorMap = {
        teal: 'bg-[#ECFDF5] text-[#0F766E] border-[#A7F3D0]',
        blue: 'bg-blue-50 text-blue-600 border-blue-100',
        emerald: 'bg-emerald-50 text-emerald-600 border-emerald-100',
        amber: 'bg-amber-50 text-amber-600 border-amber-100',
        rose: 'bg-rose-50 text-rose-600 border-rose-100',
        purple: 'bg-purple-50 text-purple-600 border-purple-100',
        indigo: 'bg-indigo-50 text-indigo-600 border-indigo-100',
        cyan: 'bg-cyan-50 text-cyan-600 border-cyan-100',
        slate: 'bg-slate-100 text-slate-700 border-slate-200',
    };

    const variantMap = {
        default: 'bg-white border-[#DCE8E8]',
        warning: 'bg-rose-50/50 border-rose-200',
        success: 'bg-emerald-50/50 border-emerald-200',
        info: 'bg-[#ECFDF5]/50 border-[#A7F3D0]',
        purple: 'bg-purple-50/40 border-purple-200',
        amber: 'bg-amber-50/40 border-amber-200',
    };

    return (
        <section
            className={`rounded-2xl border p-6 shadow-sm transition-all ${variantMap[variant]} ${className}`}
        >
            {title && (
                <div className="flex items-center gap-3 mb-4">
                    {Icon && (
                        <div
                            className={`p-2.5 rounded-xl border ${colorMap[iconColor] || colorMap.blue} shrink-0`}
                        >
                            <Icon className="w-4 h-4" />
                        </div>
                    )}
                    <div>
                        <h2 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
                            {title}
                        </h2>
                        {subtitle && (
                            <p className="text-xs text-slate-500 mt-0.5">{subtitle}</p>
                        )}
                    </div>
                </div>
            )}
            <div>{children}</div>
        </section>
    );
};

export default SectionBlock;