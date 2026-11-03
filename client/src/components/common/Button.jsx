import React from 'react';

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  target,
  rel,
  download,
  onClick,
  icon: Icon,
  ...props
}) {
  const baseClasses =
    'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-xl disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

  const variants = {
    primary:
      'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 focus:ring-cyan-500 border border-cyan-400/30',
    secondary:
      'bg-[#131D33] hover:bg-[#1A2644] text-slate-100 border border-slate-700 hover:border-slate-500 focus:ring-slate-500 shadow-sm font-medium',
    outline:
      'bg-[#0E1628]/80 hover:bg-cyan-500/10 text-cyan-300 hover:text-white border border-cyan-500/40 hover:border-cyan-400 focus:ring-cyan-500 font-semibold shadow-sm',
    ghost:
      'bg-transparent hover:bg-slate-800/80 text-slate-300 hover:text-white focus:ring-slate-600',
  };

  const sizes = {
    sm: 'text-xs px-3.5 py-2 gap-1.5',
    md: 'text-sm px-4.5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3 gap-2.5',
  };

  const combinedClasses = `${baseClasses} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : rel}
        download={download}
        className={combinedClasses}
        onClick={onClick}
        {...props}
      >
        {Icon && <Icon className="w-4 h-4 shrink-0" />}
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={combinedClasses} onClick={onClick} {...props}>
      {Icon && <Icon className="w-4 h-4 shrink-0" />}
      {children}
    </button>
  );
}
