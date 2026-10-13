'use client';

import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { experiences } from '@/lib/data';

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 lg:py-32 section-glow">
      <div className="absolute inset-0 bg-dots opacity-20" />
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-glow-blue/5 rounded-full blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-sm font-medium tracking-widest text-glow-cyan uppercase mb-3">
            03. Experience
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Career Journey
          </h2>
          <div className="mt-4 h-px w-20 bg-gradient-to-r from-transparent via-glow-blue to-transparent" />
          <p className="mt-6 text-muted-foreground max-w-2xl text-balance">
            A track record of building impactful products across startups and
            enterprise environments.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-glow-purple via-glow-cyan to-glow-blue -translate-x-1/2" />

          {experiences.map((exp, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div
                key={exp.company}
                className={`relative flex items-center mb-12 ${
                  isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 z-10">
                  <div className="relative">
                    <div className="absolute inset-0 bg-glow-purple/40 blur-md rounded-full" />
                    <div className="relative w-4 h-4 rounded-full bg-gradient-to-tr from-glow-purple to-glow-cyan border-2 border-background" />
                  </div>
                </div>

                {/* Content card */}
                <div
                  className={`ml-12 sm:ml-0 w-full sm:w-[calc(50%-2rem)] ${
                    isLeft ? 'sm:pr-8' : 'sm:pl-8'
                  }`}
                >
                  <div className="glass-card glass-card-hover rounded-2xl p-6">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                      <Calendar className="h-3.5 w-3.5 text-glow-cyan" />
                      {exp.period}
                    </div>
                    <h3 className="text-lg font-bold text-foreground">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 mt-1 mb-4">
                      <Briefcase className="h-4 w-4 text-glow-purple" />
                      <span className="text-sm font-medium gradient-text-static">
                        {exp.company}
                      </span>
                      <span className="text-muted-foreground/40">•</span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        {exp.location}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((point, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed"
                        >
                          <span className="flex-shrink-0 mt-2 w-1 h-1 rounded-full bg-glow-cyan" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden sm:block w-[calc(50%-2rem)]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
