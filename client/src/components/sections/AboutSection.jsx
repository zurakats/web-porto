import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { GraduationCap, Award, Briefcase, Code, CheckCircle } from 'lucide-react';

export function AboutSection({ profile }) {
  const milestones = [
    {
      year: '2022 – 2026',
      title: 'Bachelor of Informatics',
      institution: 'Universitas Gunadarma',
      icon: GraduationCap,
      description: 'Completed Bachelor’s degree in Informatics with a 3.7 GPA, focusing on full-stack web engineering, database architecture, and transit routing algorithms.',
    },
    {
      year: 'Aug 2025 – Jan 2026',
      title: 'Asah Program Participant',
      institution: 'Dicoding Indonesia',
      icon: Award,
      description: 'Intensive software development training in React and backend engineering; completed capstone project as part of the REBE development team.',
    },
    {
      year: 'Jan 2026 – Mar 2026',
      title: 'FAT Inspector Intern & IT Support',
      institution: 'Tim FAT LAPI ITB',
      icon: Briefcase,
      description: 'Conducted Factory Acceptance Test inspections for tank trucks, provided hardware/software troubleshooting for field and office staff, and supported digital inspection workflow transition.',
    },
  ];

  return (
    <section id="about" className="py-20 border-t border-[#273449] bg-[#0B1020]/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Background"
          title="About Edra"
          description="A factual overview of academic training, project experience, and technical support background."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {milestones.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-[#111827] border border-[#273449] rounded-xl p-6 flex flex-col justify-between hover:border-blue-500/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-cyan-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-semibold text-slate-400 px-2.5 py-1 rounded bg-[#172033] border border-[#273449]">
                      {item.year}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-100">{item.title}</h3>
                  <p className="text-xs font-medium text-cyan-400 mt-0.5">{item.institution}</p>

                  <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
