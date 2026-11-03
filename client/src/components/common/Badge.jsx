import React from 'react';

export function Badge({ children, variant = 'default', size = 'sm', className = '' }) {
  const variants = {
    default:
      'bg-[#131D33] text-slate-200 border-slate-700/80 hover:border-slate-500 shadow-sm',
    primary:
      'bg-blue-950/70 text-blue-300 border-blue-500/30 hover:border-blue-400/50 shadow-[0_0_10px_rgba(59,130,246,0.12)]',
    cyan:
      'bg-cyan-950/70 text-cyan-300 border-cyan-500/30 hover:border-cyan-400/50 shadow-[0_0_10px_rgba(6,182,212,0.12)]',
    emerald:
      'bg-emerald-950/70 text-emerald-300 border-emerald-500/30 hover:border-emerald-400/50 shadow-[0_0_10px_rgba(16,185,129,0.12)]',
    amber:
      'bg-amber-950/70 text-amber-300 border-amber-500/30 hover:border-amber-400/50 shadow-[0_0_10px_rgba(245,158,11,0.12)]',
    purple:
      'bg-purple-950/70 text-purple-300 border-purple-500/30 hover:border-purple-400/50 shadow-[0_0_10px_rgba(168,85,247,0.12)]',
    indigo:
      'bg-indigo-950/70 text-indigo-300 border-indigo-500/30 hover:border-indigo-400/50 shadow-[0_0_10px_rgba(99,102,241,0.12)]',
  };

  const sizes = {
    xs: 'text-[11px] px-2 py-0.5 font-medium',
    sm: 'text-xs px-2.5 py-1 font-semibold tracking-wide',
    md: 'text-sm px-3.5 py-1.5 font-semibold',
  };

  return (
    <span
      className={`inline-flex items-center rounded-lg border transition-all duration-200 ${
        variants[variant] || variants.default
      } ${sizes[size] || sizes.sm} ${className}`}
    >
      {children}
    </span>
  );
}
