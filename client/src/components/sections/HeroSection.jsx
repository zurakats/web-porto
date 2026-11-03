import React from 'react';
import { motion } from 'framer-motion';
import { FileDown, FolderGit2, Mail } from 'lucide-react';
import { Button } from '../common/Button';
import profileAvatar from '../../assets/images/profile/my-profile.jpeg';

export function HeroSection({ profile }) {
  const cvPath = profile?.cvPath || '/documents/CV-Edra-Fahar-Athaya-IT-Support.pdf';

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-grid-subtle"
    >
      {/* Background ambient radial gradients */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-blue-600/15 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 right-1/4 w-[450px] h-[400px] bg-cyan-500/15 rounded-full blur-[130px]" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-indigo-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">

          {/* Left Column: Introduction & Visual Anchors */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Status / Eyebrow pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold tracking-wider uppercase mb-6 shadow-[0_0_20px_rgba(6,182,212,0.18)]">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee] animate-pulse" />
              <span>Available for Software Dev &amp; IT Support Roles</span>
            </div>

            {/* Display Name with High Contrast */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.05]">
              Edra Fahar{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300 bg-clip-text text-transparent">
                Athaya
              </span>
            </h1>

            {/* Role Headline */}
            <p className="mt-4 text-xl sm:text-2xl font-bold text-slate-100 tracking-tight flex items-center gap-2">
              <span className="text-cyan-300">Informatics Graduate</span>
              {/* <span className="text-cyan-400 font-mono">/</span> */}
              {/* <span className="text-cyan-300">Software &amp; IT Operations</span> */}
            </p>

            {/* Factual Profile Summary with enhanced legibility */}
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl font-normal">
              Informatics graduate from Universitas Gunadarma with specializing in full-stack web development (React, Node.js, Express, PostgreSQL, etc).
            </p>

            {/* Call to Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5 relative">
              <Button
                variant="primary"
                size="md"
                icon={FolderGit2}
                href="#projects"
              >
                View Projects
              </Button>

              {/* CV Download Action */}
              <Button
                variant="outline"
                size="md"
                icon={FileDown}
                href={cvPath}
                download="CV-Edra-Fahar-Athaya-IT-Support.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </Button>

              <Button
                variant="ghost"
                size="md"
                icon={Mail}
                href="#contact"
              >
                Get In Touch
              </Button>
            </div>
          </motion.div>

          {/* Right Column: High-Impact Portrait Frame with Visual Anchoring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative group">
              {/* Outer atmospheric neon aura */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-cyan-500/30 via-blue-600/30 to-indigo-500/30 blur-2xl opacity-75 group-hover:opacity-100 transition duration-700" />

              {/* Portrait Frame (aspect ratio 4:5) */}
              <div className="relative w-68 sm:w-76 lg:w-84 aspect-[4/5] rounded-3xl overflow-hidden bg-[#0E1628] border-2 border-slate-700/90 group-hover:border-cyan-400/70 shadow-2xl shadow-black/80 transition-all duration-300">
                <img
                  src={profileAvatar}
                  alt="Portrait of Edra Fahar Athaya"
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                />

                {/* Subtle gradient vignette at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#070B16] via-[#070B16]/70 to-transparent pointer-events-none" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
