import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { MapPin, Calendar, Camera, Maximize2, X } from 'lucide-react';
import { getExperienceGallery } from '../../lib/experienceImages';

export function ExperienceSection({ experience = [] }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const galleryPhotos = getExperienceGallery();

  // Close lightbox modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedPhoto(null);
    };
    if (selectedPhoto) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhoto]);

  return (
    <section id="experience" className="py-24 border-t border-slate-800/80 bg-[#0A0F1E] relative overflow-hidden">
      {/* Background radial backlight */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[350px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="03"
          eyebrow="Work Experience"
          title="Internship"
        />

        <div className="mt-12 space-y-8">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.id || exp.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="bg-gradient-to-b from-[#111A2E] to-[#0A101E] border border-slate-700/80 hover:border-cyan-500/40 rounded-3xl p-6 sm:p-8 shadow-xl transition-all duration-300"
            >
              {/* Header: Role, Company & Meta */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-slate-800/80">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {exp.role}
                  </h3>
                  <p className="text-base font-semibold text-cyan-400 mt-1">
                    {exp.company}
                  </p>
                </div>

                <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 text-xs font-mono text-slate-400 shrink-0">
                  <div className="inline-flex items-center gap-1.5 bg-[#141F36] border border-slate-700/70 px-2.5 py-1 rounded-xl text-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 bg-[#141F36] border border-slate-700/70 px-2.5 py-1 rounded-xl text-slate-300">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Overview Description */}
              {exp.description && (
                <p className="mt-5 text-sm text-slate-300 leading-relaxed font-normal">
                  {exp.description}
                </p>
              )}

              {/* Responsibilities */}
              {exp.responsibilities && exp.responsibilities.length > 0 && (
                <div className="mt-5">
                  <ul className="space-y-2.5">
                    {exp.responsibilities.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* 4-Photo Field Documentation Gallery */}
              <div className="mt-7 pt-6 border-t border-slate-800/80">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Camera className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
                      Documentation Gallery
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">
                    4 Photos
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {galleryPhotos.map((photoUrl, photoIdx) => (
                    <div
                      key={photoIdx}
                      onClick={() => setSelectedPhoto(photoUrl)}
                      className="group/photo relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#141F36] border border-slate-700/80 hover:border-cyan-400/60 shadow-lg cursor-pointer transition-all duration-300"
                    >
                      <img
                        src={photoUrl}
                        alt={`Field documentation ${photoIdx + 1}`}
                        className="w-full h-full object-cover group-hover/photo:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-cyan-950/20 opacity-0 group-hover/photo:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-[#070B16]/80 border border-cyan-400/40 text-cyan-300 flex items-center justify-center shadow-lg">
                          <Maximize2 className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Photo Lightbox Modal */}
        <AnimatePresence>
          {selectedPhoto && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedPhoto(null)}
                className="fixed inset-0 bg-black/90 backdrop-blur-md"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="relative max-w-4xl max-h-[90vh] z-10 rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-[#0E1628] p-3 sm:p-4 flex flex-col items-center"
              >
                <div className="w-full flex items-center justify-between pb-3 px-2 border-b border-slate-800 mb-3">
                  <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
                    Internship Documentation
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedPhoto(null)}
                    className="p-1.5 rounded-full bg-[#070B16] border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                    aria-label="Close modal"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="w-full overflow-hidden rounded-xl bg-[#141F36]">
                  <img
                    src={selectedPhoto}
                    alt="Internship documentation enlarged preview"
                    className="w-full max-h-[75vh] object-contain mx-auto"
                  />
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
