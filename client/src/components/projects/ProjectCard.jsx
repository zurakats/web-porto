import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Info, Code2, AlertCircle, Layers } from 'lucide-react';
import { GithubIcon } from '../common/BrandIcons';
import { getProjectCover } from '../../lib/projectImages';
import { Badge } from '../common/Badge';

export function ProjectCard({ project, onOpenDetails }) {
  const [imageError, setImageError] = useState(false);
  const coverUrl = getProjectCover(project.slug);

  const hasRepoUrl = project.repository?.url && project.repository?.isAccessible !== false;
  const isRepoPrivateOrArchived = project.repository?.isAccessible === false;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45 }}
      whileHover={{ y: -4 }}
      className="group flex flex-col bg-[#111827] border border-[#273449] hover:border-blue-500/50 rounded-xl overflow-hidden shadow-lg shadow-black/20 hover:shadow-blue-500/10 transition-all duration-300"
    >
      {/* Screenshot / Cover Banner */}
      <div className="relative aspect-video w-full bg-[#172033] border-b border-[#273449] overflow-hidden">
        {coverUrl && !imageError ? (
          <img
            src={coverUrl}
            alt={`Screenshot of ${project.title}`}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          /* Designed Fallback Panel (No broken icon!) */
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#172033] to-[#0B1020]">
            <div className="w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-cyan-400 mb-2">
              <Code2 className="w-6 h-6" />
            </div>
            <p className="text-sm font-semibold text-slate-200">{project.title}</p>
            <span className="text-xs text-slate-400 mt-1">{project.context || 'Curated Project'}</span>
          </div>
        )}

        {/* Floating Context Badge */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          {project.context && (
            <span className="px-2.5 py-1 text-[11px] font-semibold bg-[#0B1020]/80 backdrop-blur-md text-cyan-300 rounded border border-cyan-500/30 shadow-sm">
              {project.context}
            </span>
          )}
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-5 sm:p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors line-clamp-2">
            {project.title}
          </h3>

          <p className="mt-2.5 text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3">
            {project.shortDescription}
          </p>

          {/* Technology Badges */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.technologies?.slice(0, 5).map((tech) => (
              <Badge key={tech} variant="default" size="sm">
                {tech}
              </Badge>
            ))}
            {project.technologies?.length > 5 && (
              <Badge variant="cyan" size="sm">
                +{project.technologies.length - 5} more
              </Badge>
            )}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-6 pt-4 border-t border-[#273449] flex items-center justify-between gap-3">
          {/* Repository Action */}
          {hasRepoUrl ? (
            <a
              href={project.repository.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-cyan-300 transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>View Repository</span>
            </a>
          ) : isRepoPrivateOrArchived ? (
            <span
              className="inline-flex items-center gap-1 text-[11px] text-amber-400/90 font-medium"
              title={project.repository?.notice || 'Repository is private or archived'}
            >
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>Team Repo (Private)</span>
            </span>
          ) : (
            <span className="text-xs text-slate-400">Curated Work</span>
          )}

          {/* View Details Modal Trigger */}
          <button
            type="button"
            onClick={() => onOpenDetails(project)}
            className="inline-flex items-center gap-1 text-xs font-semibold text-slate-300 hover:text-white px-2.5 py-1.5 rounded-md hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <span>Overview</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </button>
        </div>
      </div>
    </motion.article>
  );
}
