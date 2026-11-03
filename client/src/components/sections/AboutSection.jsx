import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';

export function AboutSection() {
  return (
    <section id="about" className="py-20 border-t border-slate-800/80 bg-[#0A0F1D] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="01"
          eyebrow="Background"
          title="About Me"
          description="A recent Informatics graduate from Gunadarma University with an interest in software development, particularly web development. Experienced in developing web applications using JavaScript and libraries such as React.js and Express.js through the Dicoding-led Asah Program in 2025. Currently interested in pursuing a career in IT Support, particularly in assisting users, troubleshooting technical issues, and ensuring systems function properly. Additionally, gained internship experience in fuel tanker truck inspection while also providing technical support to Pertamina's FAT team."
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 pt-2"
        >
          {/* Education */}
          <div className="space-y-2">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-cyan-400">
              Education
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              S1 Informatika — GPA 3.7
            </h3>
            <p className="text-base text-slate-300 font-medium">
              Universitas Gunadarma
            </p>
            <p className="text-sm font-mono text-slate-400">
              2022 — 2026
            </p>
          </div>

          {/* Experience */}
          <div className="space-y-2">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-blue-400">
              Internship
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              FAT Inspector Intern
            </h3>
            <p className="text-base text-slate-300 font-medium">
              Tim FAT LAPI ITB
            </p>
            <p className="text-sm font-mono text-slate-400">
              Jan 2026 — Mar 2026
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
