import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { ProjectCard } from '../projects/ProjectCard';
import { ProjectDetailsDialog } from '../projects/ProjectDetailsDialog';
import { Layers } from 'lucide-react';

export function ProjectsSection({ projects = [] }) {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 border-t border-[#273449] bg-[#0B1020]/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Portfolio"
          title="Featured Projects"
          description="A curated collection of web applications, computer vision tools, and academic engineering projects."
        />

        {projects.length === 0 ? (
          <div className="text-center py-12 bg-[#111827] border border-[#273449] rounded-xl p-8 max-w-md mx-auto">
            <Layers className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <p className="text-slate-300 font-medium text-sm">No projects available at this moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {projects.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                onOpenDetails={(p) => setSelectedProject(p)}
              />
            ))}
          </div>
        )}

        {/* Project Details Modal Dialog */}
        <ProjectDetailsDialog
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
