import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, UserCheck, Layers, Calendar, ExternalLink } from 'lucide-react';
import { GithubIcon } from '../common/BrandIcons';
import { getProjectCover } from '../../lib/projectImages';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';

export function ProjectDetailsDialog({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const coverUrl = getProjectCover(project.slug);
  const hasRepoUrl = project.repository?.url && project.repository?.isAccessible !== false;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          aria-hidden="true"
        />

        {/* Dialog Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-3xl max-h-[90vh] bg-[#111827] border border-[#273449] rounded-2xl shadow-2xl overflow-y-auto z-10 flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
        >
          {/* Header image preview */}
          {coverUrl && (
            <div className="relative aspect-video max-h-64 w-full bg-[#172033] overflow-hidden border-b border-[#273449]">
              <img
                src={coverUrl}
                alt={project.title}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-black/30" />
            </div>
          )}

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="absolute top-4 right-4 p-2 rounded-full bg-[#0B1020]/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-[#273449] transition-colors z-20 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Content */}
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                {project.context && (
                  <Badge variant="cyan" size="sm">
                    {project.context}
                  </Badge>
                )}
                {project.category && (
                  <Badge variant="default" size="sm">
                    {project.category}
                  </Badge>
                )}
              </div>
              <h3 id="modal-project-title" className="text-2xl sm:text-3xl font-bold text-slate-100">
                {project.title}
              </h3>
            </div>

            {/* Detailed description */}
            <div>
              <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">
                Project Overview
              </h4>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {project.detailedDescription || project.shortDescription}
              </p>
            </div>

            {/* Personal Contribution / Role */}
            {project.role && (
              <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/20">
                <div className="flex items-center gap-2 text-cyan-300 font-semibold text-sm mb-1.5">
                  <UserCheck className="w-4 h-4 text-cyan-400" />
                  <span>Personal Contribution &amp; Responsibilities</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.role}
                </p>
              </div>
            )}

            {/* Highlights list */}
            {project.highlights && project.highlights.length > 0 && (
              <div>
                <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3">
                  Key Technical Capabilities
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies */}
            <div>
              <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2.5">
                Technologies &amp; Architecture
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies?.map((tech) => (
                  <Badge key={tech} variant="primary" size="md">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Footer with repo link or notice */}
            <div className="pt-4 border-t border-[#273449] flex flex-wrap items-center justify-between gap-4">
              {hasRepoUrl ? (
                <Button
                  variant="primary"
                  icon={GithubIcon}
                  href={project.repository.url}
                  target="_blank"
                >
                  View Source Repository
                </Button>
              ) : project.repository?.notice ? (
                <div className="text-xs text-amber-300/90 bg-amber-500/10 border border-amber-500/20 p-3 rounded-lg">
                  {project.repository.notice}
                </div>
              ) : null}

              <Button variant="ghost" onClick={onClose}>
                Close
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
