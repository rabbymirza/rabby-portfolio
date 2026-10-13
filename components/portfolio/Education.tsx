'use client';

import { GraduationCap, Award, Calendar } from 'lucide-react';
import { education } from '@/lib/data';

export default function Education() {
  return (
    <section id="education" className="relative py-24 lg:py-32 section-glow">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 right-1/4 w-[400px] h-[300px] bg-glow-purple/5 rounded-full blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-sm font-medium tracking-widest text-glow-cyan uppercase mb-3">
            04. Education
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Education & Credentials
          </h2>
          <div className="mt-4 h-px w-20 bg-gradient-to-r from-transparent via-glow-purple to-transparent" />
          <p className="mt-6 text-muted-foreground max-w-2xl text-balance">
            Formal training, certifications, and continuous learning that
            shape my expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {education.map((item, i) => {
            const isCert = item.degree.includes('Certification');
            const Icon = isCert ? Award : GraduationCap;
            return (
              <div
                key={item.institution}
                className="glass-card glass-card-hover rounded-2xl p-6 group"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${
                      isCert
                        ? 'bg-glow-cyan/10 glow-border-cyan'
                        : 'bg-glow-purple/10 glow-border-purple'
                    }`}
                  >
                    <Icon
                      className={`h-6 w-6 ${
                        isCert ? 'text-glow-cyan' : 'text-glow-purple'
                      }`}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                      <Calendar className="h-3.5 w-3.5" />
                      {item.period}
                    </div>
                    <h3 className="text-base font-bold text-foreground leading-snug">
                      {item.institution}
                    </h3>
                    <p
                      className={`text-sm font-medium mt-1 ${
                        isCert ? 'text-glow-cyan' : 'gradient-text-static'
                      }`}
                    >
                      {item.degree}
                    </p>
                    <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                      {item.details}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Resume CTA */}
        <div id="resume" className="mt-16 flex flex-col items-center -scroll-mt-24">
          <div className="glass-card rounded-2xl px-8 py-6 text-center glow-border-purple max-w-md w-full">
            <h3 className="text-lg font-semibold mb-2">Want the full story?</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Download my complete résumé with detailed work history and
              projects.
            </p>
            <a
              href="#"
              className="glow-button inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-glow-purple to-glow-blue text-white font-semibold text-sm shadow-lg shadow-glow-purple/25 hover:shadow-glow-purple/40 transition-all duration-300 hover:scale-[1.02]"
            >
              <GraduationCap className="h-4 w-4" />
              Download Résumé
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
