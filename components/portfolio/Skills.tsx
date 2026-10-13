'use client';

import {
  Sparkles,
  Monitor,
  Server,
  Cloud,
  Database,
  Smartphone,
  type LucideIcon,
} from 'lucide-react';
import { skillCategories } from '@/lib/data';

const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  Monitor,
  Server,
  Cloud,
  Database,
  Smartphone,
};

const colorStyles: Record<
  string,
  { text: string; bg: string; border: string; glow: string }
> = {
  purple: {
    text: 'text-glow-purple',
    bg: 'bg-glow-purple/10',
    border: 'hover:border-glow-purple/40',
    glow: 'glow-border-purple',
  },
  cyan: {
    text: 'text-glow-cyan',
    bg: 'bg-glow-cyan/10',
    border: 'hover:border-glow-cyan/40',
    glow: 'glow-border-cyan',
  },
  blue: {
    text: 'text-glow-blue',
    bg: 'bg-glow-blue/10',
    border: 'hover:border-glow-blue/40',
    glow: 'glow-border-blue',
  },
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 lg:py-32 section-glow">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-glow-cyan/5 rounded-full blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-sm font-medium tracking-widest text-glow-cyan uppercase mb-3">
            02. Skills
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Technical Arsenal
          </h2>
          <div className="mt-4 h-px w-20 bg-gradient-to-r from-transparent via-glow-cyan to-transparent" />
          <p className="mt-6 text-muted-foreground max-w-2xl text-balance">
            A comprehensive toolkit spanning AI integration, full-stack
            development, cloud infrastructure, and mobile platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const Icon = iconMap[category.icon] || Sparkles;
            const c = colorStyles[category.color];
            return (
              <div
                key={category.title}
                className={`glass-card glass-card-hover rounded-2xl p-6 border border-white/8 ${c.border} transition-all duration-300 group`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`w-12 h-12 rounded-xl ${c.bg} flex items-center justify-center ${c.glow} group-hover:scale-110 transition-transform`}
                  >
                    <Icon className={`h-6 w-6 ${c.text}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 border border-white/8 text-muted-foreground hover:text-foreground hover:border-white/20 hover:bg-white/8 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
