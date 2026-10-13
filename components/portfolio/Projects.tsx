'use client';

import { useState, useMemo } from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { projects, projectFilters } from '@/lib/data';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="relative py-24 lg:py-32 section-glow">
      <div className="absolute inset-0 bg-dots opacity-20" />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[400px] bg-glow-blue/5 rounded-full blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-sm font-medium tracking-widest text-glow-cyan uppercase mb-3">
            05. Projects
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Featured Work
          </h2>
          <div className="mt-4 h-px w-20 bg-gradient-to-r from-transparent via-glow-blue to-transparent" />
          <p className="mt-6 text-muted-foreground max-w-2xl text-balance">
            A selection of projects showcasing AI integration, full-stack
            engineering, and product thinking.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {projectFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                'px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300',
                activeFilter === filter
                  ? 'bg-gradient-to-r from-glow-purple to-glow-blue text-white shadow-lg shadow-glow-purple/20'
                  : 'glass-card text-muted-foreground hover:text-foreground border border-white/8'
              )}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className="group glass-card glass-card-hover rounded-2xl overflow-hidden border border-white/8 hover:border-glow-purple/30 transition-all duration-300"
            >
              {/* Project preview header */}
              <div className="relative h-40 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-glow-purple/20 via-glow-cyan/10 to-glow-blue/20" />
                <div className="absolute inset-0 bg-grid opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-bold gradient-text-static opacity-50 group-hover:opacity-80 transition-opacity">
                    {project.title.split(' ').map((w) => w[0]).join('')}
                  </span>
                </div>
                {project.featured && (
                  <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-glow-purple/20 text-glow-purple border border-glow-purple/30">
                      <Star className="h-3 w-3 fill-current" />
                      Featured
                    </span>
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-card to-transparent" />
              </div>

              {/* Project content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-foreground group-hover:gradient-text-static transition-all">
                    {project.title}
                  </h3>
                  <span className="text-xs font-medium text-glow-cyan px-2 py-0.5 rounded-md bg-glow-cyan/10">
                    {project.category}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-white/5 border border-white/8 text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-glow-cyan transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">No projects in this category yet.</p>
          </div>
        )}
      </div>
    </section>
  );
}
