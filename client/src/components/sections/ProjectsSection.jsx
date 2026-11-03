import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { ProjectCard } from '../projects/ProjectCard';
import { Layers } from 'lucide-react';

export function ProjectsSection({ projects = [] }) {
  return (
    <section id="projects" className="py-24 border-t border-slate-800/80 bg-[#070C18] relative overflow-hidden bg-grid-subtle">
      {/* Background radial highlight */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="02"
          eyebrow="Portfolio"
          title="Projects"
        />

        {projects.length === 0 ? (
          <div className="text-center py-12 bg-[#0E1628] border border-slate-700 rounded-2xl p-8 max-w-md mx-auto">
            <Layers className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <p className="text-slate-300 font-medium text-sm">No projects available at this moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-5xl mx-auto">
            {projects.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
