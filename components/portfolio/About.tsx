'use client';

import { useEffect, useRef, useState } from 'react';
import { User, Briefcase, GitBranch, Star } from 'lucide-react';
import { stats } from '@/lib/data';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  User,
  Briefcase,
  GitBranch,
  Star,
};

const statIcons = [Briefcase, GitBranch, Star, User];

function CountUp({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const steps = 60;
          const increment = end / steps;
          let current = 0;
          const interval = setInterval(() => {
            current += increment;
            if (current >= end) {
              setCount(end);
              clearInterval(interval);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
          return () => clearInterval(interval);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, hasAnimated]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 section-glow">
      <div className="absolute inset-0 bg-dots opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-glow-purple/5 rounded-full blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-sm font-medium tracking-widest text-glow-cyan uppercase mb-3">
            01. About Me
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Who I Am
          </h2>
          <div className="mt-4 h-px w-20 bg-gradient-to-r from-transparent via-glow-purple to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Bio */}
          <div className="space-y-6">
            <div className="glass-card rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-glow-purple/10 flex items-center justify-center glow-border-purple">
                  <User className="h-6 w-6 text-glow-purple" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Professional Summary
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I&apos;m a full-stack developer and AI engineer with{' '}
                    <span className="text-glow-cyan font-medium">
                      7+ years
                    </span>{' '}
                    of experience building production software. I specialize in
                    the intersection of web engineering and artificial
                    intelligence — crafting platforms that are not just
                    functional, but intelligent.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    My approach combines rigorous engineering practices with a
                    product mindset. I care about performance, developer
                    experience, and shipping things that matter. When I&apos;m
                    not coding, I&apos;m contributing to open source, writing
                    technical articles, or exploring the latest in AI research.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                What I&apos;m passionate about
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'AI/ML Integration',
                  'Developer Experience',
                  'Open Source',
                  'System Design',
                  'Performance',
                  'Clean Code',
                  'Mentorship',
                  'Tech Writing',
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 border border-white/10 text-muted-foreground hover:text-foreground hover:border-glow-purple/30 transition-colors cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => {
              const Icon = statIcons[i];
              const colors = [
                { text: 'text-glow-purple', bg: 'bg-glow-purple/10', glow: 'glow-border-purple' },
                { text: 'text-glow-cyan', bg: 'bg-glow-cyan/10', glow: 'glow-border-cyan' },
                { text: 'text-glow-blue', bg: 'bg-glow-blue/10', glow: 'glow-border-blue' },
                { text: 'text-glow-purple', bg: 'bg-glow-purple/10', glow: 'glow-border-purple' },
              ];
              const c = colors[i];
              return (
                <div
                  key={stat.label}
                  className={`glass-card glass-card-hover rounded-2xl p-6 ${c.glow}`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl ${c.bg} flex items-center justify-center mb-4`}
                  >
                    <Icon className={`h-5 w-5 ${c.text}`} />
                  </div>
                  <div className={`text-4xl font-bold ${c.text} mb-1`}>
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
