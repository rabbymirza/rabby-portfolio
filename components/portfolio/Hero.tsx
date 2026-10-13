'use client';

import { useState, useEffect } from 'react';
import {
  ArrowDown,
  Download,
  Mail,
  ExternalLink,
  Sparkles,
  ArrowUpCircle,
  Atom,
  Code,
  Terminal,
  Cloud,
  Database,
  Boxes,
  Braces,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { personalInfo, techStackBadges } from '@/lib/data';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ArrowUpCircle,
  Atom,
  Code,
  Terminal,
  Cloud,
  Database,
  Boxes,
  Braces,
  Sparkles,
};

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-glow-purple/15 rounded-full blur-[120px] animate-glow-pulse" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-glow-cyan/10 rounded-full blur-[100px] animate-glow-pulse" style={{ animationDelay: '1.5s' }} />
      <div className="absolute bottom-1/4 left-1/3 w-[350px] h-[350px] bg-glow-blue/10 rounded-full blur-[100px] animate-glow-pulse" style={{ animationDelay: '0.8s' }} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center">
          {/* Availability badge */}
          <div
            className={cn(
              'inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8',
              mounted && 'animate-fade-in-down'
            )}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            <span className="text-xs font-medium text-muted-foreground">
              Available for new opportunities
            </span>
          </div>

          {/* Main heading */}
          <div
            className={cn(
              'space-y-4',
              mounted && 'animate-fade-in-up'
            )}
            style={{ animationDelay: '0.1s' }}
          >
            <p className="text-sm font-medium tracking-widest text-glow-cyan uppercase">
              Hello, I&apos;m
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.05]">
              <span className="block text-foreground">Rabby</span>
              <span className="block gradient-text">Mirza</span>
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-muted-foreground mt-4">
              {personalInfo.role}
            </h2>
            <p className="max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground/80 leading-relaxed mt-6 text-balance">
              {personalInfo.bio}
            </p>
          </div>

          {/* CTA buttons */}
          <div
            className={cn(
              'flex flex-col sm:flex-row items-center gap-4 mt-10',
              mounted && 'animate-fade-in-up'
            )}
            style={{ animationDelay: '0.3s' }}
          >
            <button
              onClick={() => scrollTo('projects')}
              className="glow-button group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-glow-purple to-glow-blue text-white font-semibold text-sm shadow-lg shadow-glow-purple/25 hover:shadow-glow-purple/40 transition-all duration-300 hover:scale-[1.02]"
            >
              View My Work
              <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="glow-button inline-flex items-center gap-2 px-7 py-3.5 rounded-xl glass-card glass-card-hover text-foreground font-semibold text-sm transition-all duration-300"
            >
              <Mail className="h-4 w-4 text-glow-cyan" />
              Get In Touch
            </button>
            <a
              href={personalInfo.resumeUrl}
              className="glow-button inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/10 text-muted-foreground hover:text-foreground hover:border-white/20 font-semibold text-sm transition-all duration-300"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </div>

          {/* Avatar with glowing border */}
          <div
            className={cn(
              'relative mt-16',
              mounted && 'animate-scale-in'
            )}
            style={{ animationDelay: '0.4s' }}
          >
            <div className="relative w-32 h-32 sm:w-40 sm:h-40">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-glow-purple via-glow-cyan to-glow-blue blur-lg opacity-50 animate-glow-pulse" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-glow-purple via-glow-cyan to-glow-blue p-[3px]">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-glow-purple/30 to-glow-cyan/20 flex items-center justify-center">
                    <span className="text-5xl font-bold gradient-text-static">
                      RM
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating tech badges */}
          <div
            className={cn(
              'relative mt-12 w-full max-w-4xl',
              mounted && 'animate-fade-in'
            )}
            style={{ animationDelay: '0.6s' }}
          >
            <p className="text-xs font-medium text-muted-foreground/60 uppercase tracking-wider mb-4">
              Tech I work with
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {techStackBadges.map((tech, i) => {
                const Icon = iconMap[tech.icon] || Code;
                return (
                  <div
                    key={tech.label}
                    className="group inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card glass-card-hover text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300"
                    style={{
                      animation: mounted
                        ? `float ${4 + i * 0.3}s ease-in-out infinite`
                        : undefined,
                      animationDelay: `${i * 0.2}s`,
                    }}
                  >
                    <Icon className="h-4 w-4 text-glow-purple group-hover:text-glow-cyan transition-colors" />
                    {tech.label}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Scroll indicator */}
          <button
            onClick={() => scrollTo('about')}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors animate-float"
            aria-label="Scroll down"
          >
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
