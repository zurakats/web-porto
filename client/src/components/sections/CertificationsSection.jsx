import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { Award, CheckCircle2, Calendar } from 'lucide-react';
import { Badge } from '../common/Badge';

export function CertificationsSection({ certifications }) {
  const certList = certifications?.certifications || [];
  const trainingList = certifications?.training || [];

  return (
    <section id="certifications" className="py-20 border-t border-[#273449] bg-[#0B1020]/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications &amp; Training"
          description="Verified certifications earned from Dicoding Indonesia and vocational technology programs."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Certifications column */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-cyan-400" />
              <span>Professional Certifications</span>
            </h3>

            {certList.map((cert, idx) => (
              <motion.div
                key={cert.id || cert.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-[#111827] border border-[#273449] rounded-xl p-5 hover:border-blue-500/30 transition-colors"
              >
                <div className="flex items-start justify-between gap-2">
                  <h4 className="text-sm font-semibold text-slate-100 leading-snug">
                    {cert.title}
                  </h4>
                  <Badge variant="cyan" size="sm">
                    Verified
                  </Badge>
                </div>

                <p className="text-xs text-blue-400 mt-1 font-medium">{cert.issuer}</p>

                <div className="mt-3 flex items-center gap-1.5 text-xs font-mono text-slate-400">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>Valid: {cert.issueDate} – {cert.expiryDate}</span>
                </div>

                {cert.skills && (
                  <div className="mt-3.5 flex flex-wrap gap-1.5 pt-2 border-t border-[#273449]/70">
                    {cert.skills.map((s) => (
                      <span key={s} className="text-[11px] px-2 py-0.5 rounded bg-[#172033] text-slate-300">
                        {s}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Vocational Training column */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span>Vocational Training &amp; Programs</span>
            </h3>

            {trainingList.map((tr, idx) => (
              <motion.div
                key={tr.id || tr.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-[#111827] border border-[#273449] rounded-xl p-5 hover:border-blue-500/30 transition-colors"
              >
                <div className="flex items-start justify-between gap-2">
                  <h4 className="text-sm font-semibold text-slate-100 leading-snug">
                    {tr.title}
                  </h4>
                  <Badge variant="emerald" size="sm">
                    Completed
                  </Badge>
                </div>

                <p className="text-xs text-emerald-400 mt-1 font-medium">{tr.issuer}</p>

                <div className="mt-3 flex items-center gap-1.5 text-xs font-mono text-slate-400">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>{tr.period}</span>
                </div>

                {tr.description && (
                  <p className="mt-3 text-xs text-slate-300 leading-relaxed">
                    {tr.description}
                  </p>
                )}

                {tr.skills && (
                  <div className="mt-3.5 flex flex-wrap gap-1.5 pt-2 border-t border-[#273449]/70">
                    {tr.skills.map((s) => (
                      <span key={s} className="text-[11px] px-2 py-0.5 rounded bg-[#172033] text-slate-300">
                        {s}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
