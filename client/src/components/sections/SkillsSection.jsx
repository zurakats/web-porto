import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { Terminal, Layout, Server, Database, Wrench, Cpu } from 'lucide-react';

export function SkillsSection({ skills }) {
  const categories = skills?.categories || [];

  // Theme map for high visual differentiation between supporting elements
  const categoryThemes = {
    'Programming Languages': {
      icon: Terminal,
      color: 'text-cyan-400',
      bg: 'bg-cyan-950/60 border-cyan-500/30',
      hoverBorder: 'hover:border-cyan-400/50',
      chipHover: 'hover:border-cyan-400 hover:text-cyan-300',
      pill: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30',
    },
    'Frontend Development': {
      icon: Layout,
      color: 'text-sky-400',
      bg: 'bg-sky-950/60 border-sky-500/30',
      hoverBorder: 'hover:border-sky-400/50',
      chipHover: 'hover:border-sky-400 hover:text-sky-300',
      pill: 'bg-sky-500/10 text-sky-300 border-sky-500/30',
    },
    'Backend Development': {
      icon: Server,
      color: 'text-indigo-400',
      bg: 'bg-indigo-950/60 border-indigo-500/30',
      hoverBorder: 'hover:border-indigo-400/50',
      chipHover: 'hover:border-indigo-400 hover:text-indigo-300',
      pill: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30',
    },
    'Databases': {
      icon: Database,
      color: 'text-emerald-400',
      bg: 'bg-emerald-950/60 border-emerald-500/30',
      hoverBorder: 'hover:border-emerald-400/50',
      chipHover: 'hover:border-emerald-400 hover:text-emerald-300',
      pill: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
    },
    'Tools & Platforms': {
      icon: Wrench,
      color: 'text-purple-400',
      bg: 'bg-purple-950/60 border-purple-500/30',
      hoverBorder: 'hover:border-purple-400/50',
      chipHover: 'hover:border-purple-400 hover:text-purple-300',
      pill: 'bg-purple-500/10 text-purple-300 border-purple-500/30',
    },
    'IT Support & Office': {
      icon: Cpu,
      color: 'text-amber-400',
      bg: 'bg-amber-950/60 border-amber-500/30',
      hoverBorder: 'hover:border-amber-400/50',
      chipHover: 'hover:border-amber-400 hover:text-amber-300',
      pill: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
    },
  };

  return (
    <section id="skills" className="py-24 border-t border-slate-800/80 bg-[#0A0F1E] relative overflow-hidden">
      {/* Background radial ambient glow */}
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="04"
          eyebrow="Tech Stack"
          title="Skills"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {categories.map((cat, idx) => {
            const theme = categoryThemes[cat.name] || {
              icon: Terminal,
              color: 'text-cyan-400',
              bg: 'bg-slate-900 border-slate-700',
              hoverBorder: 'hover:border-cyan-400/50',
              chipHover: 'hover:border-cyan-400 hover:text-cyan-300',
              pill: 'bg-slate-800 text-slate-300 border-slate-700',
            };
            const Icon = theme.icon;

            return (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`bg-gradient-to-b from-[#111A2E] to-[#0A101E] border border-slate-700/80 ${theme.hoverBorder} rounded-3xl p-6 sm:p-7 shadow-xl transition-all duration-300 group`}
              >
                {/* Header */}
                <div className="flex items-center justify-between gap-3 mb-5 pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl ${theme.bg} border flex items-center justify-center ${theme.color} shadow-sm group-hover:scale-105 transition-transform`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white tracking-tight">
                      {cat.name}
                    </h3>
                  </div>
                  <span className={`text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full border ${theme.pill}`}>
                    {cat.skills?.length}
                  </span>
                </div>

                {/* Skill Chips with High Contrast */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills?.map((skill) => (
                    <span
                      key={skill}
                      className={`inline-flex items-center px-3 py-1.5 rounded-xl text-xs font-semibold bg-[#141F36] text-slate-200 border border-slate-700/80 ${theme.chipHover} transition-all duration-200 shadow-sm`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
