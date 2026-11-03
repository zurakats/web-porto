import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';
import { GithubIcon } from '../common/BrandIcons';
import { getProjectCover } from '../../lib/projectImages';

export function ProjectCard({ project }) {
  const [imageError, setImageError] = useState(false);
  const coverUrl = getProjectCover(project.slug);

  const hasRepoUrl = Boolean(project.repository?.url && project.repository?.isAccessible !== false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4 }}
      className="group flex flex-col justify-between bg-gradient-to-b from-[#111A2E] to-[#0A101E] border border-slate-700/80 hover:border-cyan-400/50 rounded-2xl overflow-hidden shadow-xl transition-all duration-300"
    >
      <div>
        {/* Cover Image */}
        <div className="relative aspect-video w-full bg-[#141F36] border-b border-slate-700/80 overflow-hidden">
          {coverUrl && !imageError ? (
            <img
              src={coverUrl}
              alt={project.title}
              onError={() => setImageError(true)}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#17233E] to-[#0B1020]">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-2">
                <Code2 className="w-6 h-6" />
              </div>
              <p className="text-sm font-bold text-white">{project.title}</p>
            </div>
          )}
        </div>

        {/* Content Body: Heading & Short Description */}
        <div className="p-5 sm:p-6">
          {hasRepoUrl ? (
            <a
              href={project.repository.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group/title inline-flex items-center gap-2 text-lg sm:text-xl font-bold text-white hover:text-cyan-300 transition-colors leading-snug"
              title={`View ${project.title} on GitHub`}
            >
              <span>{project.title}</span>
              <GithubIcon className="w-4 h-4 text-slate-400 group-hover/title:text-cyan-300 transition-colors shrink-0" />
            </a>
          ) : (
            <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
              {project.title}
            </h3>
          )}

          <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
            {project.shortDescription}
          </p>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
        <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5">
          {project.technologies?.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-mono font-medium rounded-lg bg-[#141F36] border border-slate-700/80 text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
