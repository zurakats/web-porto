import React from 'react';
import { motion } from 'framer-motion';

export function SectionHeading({ eyebrow, title, description, align = 'center' }) {
  const isCenter = align === 'center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${isCenter ? 'text-center max-w-2xl mx-auto' : 'max-w-2xl'}`}
    >
      {eyebrow && (
        <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider uppercase rounded-full bg-blue-500/10 text-cyan-400 border border-blue-500/20">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base sm:text-lg text-slate-400 leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
