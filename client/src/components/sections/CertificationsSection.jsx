import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { Calendar, ExternalLink, Maximize2, X, FileText } from 'lucide-react';

import certSqlImg from '../../assets/images/certificates/cert-sql.png';
import certReactImg from '../../assets/images/certificates/cert-react.png';
import certBackendImg from '../../assets/images/certificates/cert-backend.png';
import certAwsGenAiImg from '../../assets/images/certificates/cert-aws-genai.png';
import certAsahTrainingImg from '../../assets/images/certificates/cert-asah-training.png';

export function CertificationsSection() {
  const [selectedCert, setSelectedCert] = useState(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedCert(null);
    };
    if (selectedCert) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedCert]);

  // Unified list of 5 credentials (course certifications & vocational training)
  const credentials = [
    {
      id: 'dicoding-sql',
      title: 'Belajar Dasar Structured Query Language (SQL)',
      issuer: 'Dicoding Indonesia',
      year: '2024',
      image: certSqlImg,
      url: 'https://www.dicoding.com/certificates/JLX1K460JP72',
    },
    {
      id: 'dicoding-react',
      title: 'Belajar Membuat Aplikasi Web dengan React',
      issuer: 'Dicoding Indonesia',
      year: '2025',
      image: certReactImg,
      url: 'https://www.dicoding.com/certificates/72ZDK7Q6LPYW',
    },
    {
      id: 'dicoding-backend',
      title: 'Belajar Fundamental Back-End dengan JavaScript',
      issuer: 'Dicoding Indonesia',
      year: '2025',
      image: certBackendImg,
      url: 'https://www.dicoding.com/certificates/JLX15QVG5Z72',
    },
    {
      id: 'dicoding-cloud-ai',
      title: 'Belajar Dasar Cloud dan Gen AI di AWS',
      issuer: 'Dicoding Indonesia',
      year: '2025',
      image: certAwsGenAiImg,
      url: 'https://www.dicoding.com/certificates/MRZM672KKPYQ',
    },
    {
      id: 'asah-dicoding',
      title: 'Pelatihan React & Back-End with AI',
      issuer: 'Program Asah · Dicoding & Accenture',
      year: '2026',
      image: certAsahTrainingImg,
      fileUrl: '/documents/Sertifikat-Pelatihan-Asah-Dicoding-Accenture.pdf',
    },
  ];

  return (
    <section id="certifications" className="py-24 border-t border-slate-800/80 bg-[#070C18] relative overflow-hidden bg-grid-subtle">
      {/* Background ambient radial glow */}
      <div className="absolute top-1/2 right-1/3 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="05"
          eyebrow="Credentials"
          title="Certifications &amp; Training"
        />

        {/* Unified Credentials Grid (identical dimensions and layout across all cards) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {credentials.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="group bg-gradient-to-b from-[#111A2E] to-[#0A101E] border border-slate-700/80 hover:border-cyan-400/50 rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Certificate Image Preview */}
              <div
                onClick={() => setSelectedCert(cert)}
                className="relative aspect-[16/10] w-full bg-[#141F36] border-b border-slate-700/80 overflow-hidden cursor-pointer group/img"
              >
                <img
                  src={cert.image}
                  alt={`Certificate - ${cert.title}`}
                  className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-cyan-950/30 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="px-3.5 py-1.5 rounded-full bg-[#070B16]/90 border border-cyan-400/50 text-cyan-300 text-xs font-mono font-bold flex items-center gap-1.5 shadow-xl">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>View Certificate</span>
                  </div>
                </div>
              </div>

              {/* Card Body: Heading, Issuer, Year, Action */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug line-clamp-2 min-h-[3.25rem] flex items-center">
                    {cert.title}
                  </h4>
                  <p className="text-xs sm:text-sm font-semibold text-cyan-400 mt-2 truncate">
                    {cert.issuer}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-300 bg-[#141F36] border border-slate-700/80 px-2.5 py-1 rounded-xl">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{cert.year}</span>
                  </div>

                  {cert.url ? (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-300 hover:text-cyan-300 transition-colors"
                    >
                      <span>Verify Credential</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <a
                      href={cert.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-300 hover:text-cyan-300 transition-colors"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>Open PDF</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certificate Lightbox Modal */}
        <AnimatePresence>
          {selectedCert && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedCert(null)}
                className="fixed inset-0 bg-black/90 backdrop-blur-md"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="relative max-w-4xl max-h-[90vh] z-10 rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-[#0E1628] p-3 sm:p-5 flex flex-col items-center"
              >
                <div className="w-full flex items-center justify-between pb-3 px-2 border-b border-slate-800 mb-3">
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white">
                      {selectedCert.title}
                    </h4>
                    <p className="text-xs text-cyan-400 font-mono">
                      {selectedCert.issuer} · {selectedCert.year}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedCert(null)}
                    className="p-2 rounded-full bg-[#070B16] border border-slate-700 text-slate-200 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="w-full overflow-hidden rounded-xl bg-[#141F36]">
                  <img
                    src={selectedCert.image}
                    alt={`Certificate preview - ${selectedCert.title}`}
                    className="w-full max-h-[75vh] object-contain mx-auto"
                  />
                </div>

                <div className="w-full pt-3 px-2 flex justify-end">
                  {selectedCert.url ? (
                    <a
                      href={selectedCert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300"
                    >
                      <span>Verify Official Credential</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : selectedCert.fileUrl ? (
                    <a
                      href={selectedCert.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>Open Full PDF Document</span>
                    </a>
                  ) : null}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
