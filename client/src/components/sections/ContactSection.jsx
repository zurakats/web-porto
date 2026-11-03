import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { Mail, FileDown, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/BrandIcons';
import { Button } from '../common/Button';

export function ContactSection({ profile }) {
  const email = profile?.email || 'edrafaharz236@gmail.com';
  const github = profile?.github || 'https://github.com/zurakats';
  const linkedin = profile?.linkedin || 'https://www.linkedin.com/in/edra-fahar-athaya-6635492b0';
  const cvFiles = profile?.cvFiles || [];

  return (
    <section id="contact" className="py-20 border-t border-[#273449] bg-[#0B1020]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Contact &amp; Documents"
          description="Open for software engineering and IT technical support opportunities."
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Direct Channels */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 bg-[#111827] border border-[#273449] rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold text-slate-100 mb-2">
                Professional Connections
              </h3>
              <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                Feel free to connect directly via email or LinkedIn for career opportunities, technical inquiries, or collaborative projects.
              </p>

              <div className="space-y-4">
                {/* Email card */}
                <a
                  href={`mailto:${email}`}
                  className="flex items-center justify-between p-4 rounded-xl bg-[#172033] border border-[#273449] hover:border-cyan-500/50 group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-cyan-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">Email Address</p>
                      <p className="text-sm font-semibold text-slate-200 group-hover:text-cyan-400 transition-colors">
                        {email}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                </a>

                {/* LinkedIn card */}
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-[#172033] border border-[#273449] hover:border-cyan-500/50 group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-cyan-400">
                      <LinkedinIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">LinkedIn</p>
                      <p className="text-sm font-semibold text-slate-200 group-hover:text-cyan-400 transition-colors">
                        edra-fahar-athaya
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                </a>

                {/* GitHub card */}
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-[#172033] border border-[#273449] hover:border-cyan-500/50 group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-cyan-400">
                      <GithubIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">GitHub Profile</p>
                      <p className="text-sm font-semibold text-slate-200 group-hover:text-cyan-400 transition-colors">
                        zurakats
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Downloadable Documents / CV Section */}
          <motion.div
            id="cv-downloads"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-6 bg-[#111827] border border-[#273449] rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold text-slate-100 mb-2">
                Download Curriculum Vitae
              </h3>
              <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                Download targeted CV documents formatted for Software Development and IT Technical Support applications.
              </p>

              <div className="space-y-4">
                {cvFiles.map((cv) => (
                  <div
                    key={cv.name}
                    className="p-5 rounded-xl bg-[#172033] border border-[#273449] hover:border-blue-500/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                        <FileDown className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-slate-100">
                          {cv.name}
                        </h4>
                        <p className="text-xs text-slate-400 mt-0.5">
                          Targeted version for {cv.category} roles (PDF)
                        </p>
                      </div>
                    </div>

                    <Button
                      variant="primary"
                      size="sm"
                      icon={FileDown}
                      href={cv.path}
                      download
                    >
                      Download PDF
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#273449] text-xs text-slate-400 text-center sm:text-left">
              Contact and credentials have been verified from official academic and internship records.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
