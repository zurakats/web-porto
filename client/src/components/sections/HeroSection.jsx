import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FileDown, FolderGit2, Mail, Terminal, Sparkles, Check, ChevronDown } from 'lucide-react';
import { Button } from '../common/Button';
import profileAvatar from '../../assets/images/profile/edra-profile.svg';

export function HeroSection({ profile }) {
  const [showCvDropdown, setShowCvDropdown] = useState(false);
  const cvFiles = profile?.cvFiles || [];

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background visual accents */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introduction & Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Status / Eyebrow pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-mono font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>Available for Software Dev &amp; IT Support Roles</span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100 leading-[1.1]">
              {profile?.name || 'Edra Fahar Athaya'}
            </h1>

            {/* Headline */}
            <p className="mt-4 text-lg sm:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-200">
              {profile?.headline || 'Informatics Graduate | Software Development & IT Support'}
            </p>

            {/* Factual Profile Summary */}
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
              {profile?.bio ||
                'Informatics graduate from Universitas Gunadarma with practical experience in full-stack web application development (JavaScript, React, Node.js, Express, PostgreSQL) and technical support operations carried out during the FAT Inspector internship at Tim FAT LAPI ITB.'}
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3 relative">
              <Button
                variant="primary"
                size="md"
                icon={FolderGit2}
                href="#projects"
              >
                View Projects
              </Button>

              {/* CV Download Toggle / Menu */}
              <div className="relative">
                <Button
                  variant="outline"
                  size="md"
                  icon={FileDown}
                  onClick={() => setShowCvDropdown(!showCvDropdown)}
                >
                  <span>Download CV</span>
                  <ChevronDown className="w-3.5 h-3.5 ml-1" />
                </Button>

                {showCvDropdown && (
                  <div className="absolute left-0 mt-2 w-64 bg-[#111827] border border-[#273449] rounded-xl shadow-xl p-2 z-30">
                    <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-3 py-1.5">
                      Select CV Version
                    </p>
                    {cvFiles.map((cv) => (
                      <a
                        key={cv.name}
                        href={cv.path}
                        download
                        onClick={() => setShowCvDropdown(false)}
                        className="flex items-center justify-between px-3 py-2 text-xs font-medium text-slate-200 hover:text-cyan-400 hover:bg-slate-800 rounded-lg transition-colors"
                      >
                        <span>{cv.name}</span>
                        <FileDown className="w-3.5 h-3.5 text-slate-400" />
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <Button
                variant="ghost"
                size="md"
                icon={Mail}
                href="#contact"
              >
                Contact
              </Button>
            </div>

            {/* Quick Fact Counters */}
            <div className="mt-10 pt-6 border-t border-[#273449] grid grid-cols-3 gap-6 text-left w-full max-w-lg">
              <div>
                <p className="text-xl sm:text-2xl font-bold font-mono text-cyan-400">3.7</p>
                <p className="text-xs text-slate-400 mt-0.5">GPA (Informatics)</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold font-mono text-cyan-400">4+</p>
                <p className="text-xs text-slate-400 mt-0.5">Core Web Projects</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold font-mono text-cyan-400">FAT</p>
                <p className="text-xs text-slate-400 mt-0.5">LAPI ITB Intern</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Dedicated Portrait Area in Rounded Rectangular Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative group">
              {/* Subtle accent glow behind the frame */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600/30 via-cyan-400/20 to-blue-500/30 blur-lg opacity-70 group-hover:opacity-100 transition duration-500" />

              {/* Portrait Frame (aspect ratio 4:5) */}
              <div className="relative w-64 sm:w-72 lg:w-80 aspect-[4/5] rounded-2xl overflow-hidden bg-[#111827] border-2 border-[#273449] group-hover:border-blue-500/40 shadow-2xl transition-all duration-300">
                <img
                  src={profileAvatar}
                  alt="Portrait of Edra Fahar Athaya"
                  className="w-full h-full object-cover object-center"
                />

                {/* Subtle gradient vignette at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0B1020] to-transparent pointer-events-none" />

                {/* Portrait Overlay Badge */}
                <div className="absolute bottom-3 inset-x-3 bg-[#111827]/90 backdrop-blur-md border border-[#273449] rounded-xl p-2.5 text-center">
                  <p className="text-xs font-semibold text-slate-200">
                    Edra Fahar Athaya
                  </p>
                  <p className="text-[11px] text-cyan-400 font-mono">
                    Gunadarma University · 2022–2026
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
