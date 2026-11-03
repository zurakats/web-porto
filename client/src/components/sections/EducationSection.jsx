import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { GraduationCap, Award, Calendar, BookOpen, CheckCircle2 } from 'lucide-react';
import { Badge } from '../common/Badge';

export function EducationSection({ education = [] }) {
  return (
    <section id="education" className="py-20 border-t border-[#273449] bg-[#0B1020]/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Academic Background"
          title="Education"
          description="Formal academic qualification and undergraduate research."
        />

        <div className="mt-12 max-w-3xl mx-auto space-y-6">
          {education.map((edu, idx) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#111827] border border-[#273449] rounded-2xl p-6 sm:p-8 shadow-xl hover:border-blue-500/30 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-[#273449]">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-100">
                    {edu.degree}
                  </h3>
                  <p className="text-base font-semibold text-blue-400 mt-0.5">
                    {edu.institution}
                  </p>
                </div>

                <div className="flex sm:flex-col items-start sm:items-end justify-between sm:justify-center gap-2">
                  <div className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-1 rounded">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{edu.period}</span>
                  </div>
                  {edu.gpa && (
                    <div className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded">
                      <Award className="w-3.5 h-3.5" />
                      <span>GPA: {edu.gpa}</span>
                    </div>
                  )}
                </div>
              </div>

              {edu.description && (
                <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {edu.description}
                </p>
              )}

              {edu.highlights && (
                <div className="mt-5">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                    Academic Highlights
                  </h4>
                  <ul className="space-y-2.5">
                    {edu.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
