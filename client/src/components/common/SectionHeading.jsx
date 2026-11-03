import React from 'react';
import { motion } from 'framer-motion';

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  tag,
}) {
  const isCenter = align === 'center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className={`mb-14 ${isCenter ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'}`}
    >
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 mb-4 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold tracking-widest uppercase shadow-[0_0_15px_rgba(6,182,212,0.12)] ${
            isCenter ? 'mx-auto' : ''
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee] animate-pulse" />
          {tag && <span className="text-cyan-400/80 font-mono">{tag} ·</span>}
          <span>{eyebrow}</span>
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal max-w-3xl mx-auto">
          {description}
        </p>
      )}

      {/* Visual Anchor underline accent */}
      <div
        className={`mt-5 h-1 w-14 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 rounded-full shadow-[0_0_12px_rgba(6,182,212,0.4)] ${
          isCenter ? 'mx-auto' : ''
        }`}
      />
    </motion.div>
  );
}
