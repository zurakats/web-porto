import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { Briefcase, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { Badge } from '../common/Badge';

export function ExperienceSection({ experience = [] }) {
  return (
    <section id="experience" className="py-20 border-t border-[#273449] bg-[#0B1020]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Work Experience"
          title="Practical Field Experience"
          description="Internship duties involving quality inspection and on-site technical support."
        />

        <div className="mt-12 max-w-3xl mx-auto space-y-8">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.id || exp.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-[#111827] border border-[#273449] rounded-2xl p-6 sm:p-8 shadow-xl hover:border-blue-500/30 transition-all"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-[#273449]">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-100">
                      {exp.role}
                    </h3>
                    {exp.type && (
                      <Badge variant="cyan" size="sm">
                        {exp.type}
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm sm:text-base font-semibold text-blue-400 mt-1">
                    {exp.company}
                  </p>
                </div>

                <div className="flex flex-col sm:items-end text-xs text-slate-400 space-y-1">
                  <div className="inline-flex items-center gap-1.5 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              {exp.description && (
                <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {exp.description}
                </p>
              )}

              {/* Responsibilities */}
              <div className="mt-5">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                  Key Responsibilities &amp; Support Operations
                </h4>
                <ul className="space-y-2.5">
                  {exp.responsibilities?.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills applied */}
              {exp.skills && exp.skills.length > 0 && (
                <div className="mt-6 pt-4 border-t border-[#273449] flex flex-wrap items-center gap-1.5">
                  <span className="text-xs text-slate-400 font-medium mr-2">Skills Applied:</span>
                  {exp.skills.map((s) => (
                    <Badge key={s} variant="default" size="sm">
                      {s}
                    </Badge>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
