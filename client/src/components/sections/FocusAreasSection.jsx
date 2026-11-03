import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { Code2, Wrench, CheckCircle2, ArrowRight } from 'lucide-react';
import { Badge } from '../common/Badge';

export function FocusAreasSection({ focusAreas }) {
  const areas = focusAreas || [
    {
      id: 'software-dev',
      title: 'Software Development',
      badge: 'Engineering',
      description: 'Practical experience developing modular web applications, REST APIs, and responsive interfaces.',
      points: [
        'Web application development using modern JavaScript (ES6+) and React',
        'REST API development and backend routing with Node.js and Express.js',
        'Relational and cloud database integration using PostgreSQL and Supabase',
        'Featured projects: Mya Navigator, Scan Translator, GradeHub, and Predictive Lead Scoring',
      ],
    },
    {
      id: 'it-support',
      title: 'IT Support',
      badge: 'Technical Operations',
      description: 'Hardware, software, and connectivity troubleshooting performed during the FAT Inspector internship.',
      points: [
        'Laptop and tablet hardware & operating system troubleshooting',
        'Printer setup, configuration, and troubleshooting for field & office staff',
        'Local Wi-Fi connectivity diagnostics and resolution',
        'Technical user support during transition from paper checklists to digital inspection software',
      ],
    },
  ];

  return (
    <section id="focus-areas" className="py-20 bg-[#0B1020]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Specialization"
          title="Core Focus Areas"
          description="Two defined career directions supported by completed academic/personal projects and internship responsibilities."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {areas.map((area, index) => {
            const isSoftware = area.id === 'software-dev' || area.title.includes('Software');
            const Icon = isSoftware ? Code2 : Wrench;

            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative bg-[#111827] border border-[#273449] rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-blue-500/40 shadow-xl transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-cyan-400">
                      <Icon className="w-6 h-6" />
                    </div>
                    {area.badge && (
                      <Badge variant={isSoftware ? 'cyan' : 'emerald'} size="sm">
                        {area.badge}
                      </Badge>
                    )}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-100">
                    {area.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                    {area.description}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {area.points?.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-5 border-t border-[#273449]">
                  {isSoftware ? (
                    <a
                      href="#projects"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <span>Explore Software Projects</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <a
                      href="#experience"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      <span>Review FAT Inspector Internship Tasks</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
