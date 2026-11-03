import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { Badge } from '../common/Badge';

export function SkillsSection({ skills }) {
  const categories = skills?.categories || [];

  return (
    <section id="skills" className="py-20 border-t border-[#273449] bg-[#0B1020]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Skills &amp; Technologies"
          title="Technical Competencies"
          description="Verified tools and technologies utilized across software development and IT support roles."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-[#111827] border border-[#273449] rounded-xl p-6 hover:border-blue-500/30 transition-colors"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-cyan-400 mb-4 pb-2 border-b border-[#273449]">
                {cat.name}
              </h3>

              <div className="flex flex-wrap gap-2">
                {cat.skills?.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium bg-[#172033] text-slate-200 border border-[#273449] hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
