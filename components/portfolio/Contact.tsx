'use client';

import { useState } from 'react';
import {
  Mail,
  MapPin,
  Send,
  Github,
  Linkedin,
  CheckCircle2,
  Loader2,
} from 'lucide-react';
import { personalInfo } from '@/lib/data';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus('sending');
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus('sent');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputClass =
    'w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-glow-purple/50 focus:bg-white/8 transition-all duration-200 text-sm';

  return (
    <section id="contact" className="relative py-24 lg:py-32 section-glow">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 left-1/3 w-[500px] h-[400px] bg-glow-purple/8 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-glow-cyan/5 rounded-full blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-sm font-medium tracking-widest text-glow-cyan uppercase mb-3">
            06. Contact
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Let&apos;s Talk
          </h2>
          <div className="mt-4 h-px w-20 bg-gradient-to-r from-transparent via-glow-purple to-transparent" />
          <p className="mt-6 text-muted-foreground max-w-2xl text-balance">
            Have a project in mind or just want to connect? I&apos;m always open
            to discussing new opportunities and interesting ideas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Contact info sidebar */}
          <div className="lg:col-span-2 space-y-4">
            <div className="glass-card rounded-2xl p-6 glow-border-purple">
              <h3 className="text-lg font-semibold mb-6">Get in touch</h3>

              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group"
              >
                <div className="w-11 h-11 rounded-xl bg-glow-purple/10 flex items-center justify-center group-hover:glow-border-purple transition-all">
                  <Mail className="h-5 w-5 text-glow-purple" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Email</div>
                  <div className="text-sm font-medium text-foreground">
                    {personalInfo.email}
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-3 rounded-xl">
                <div className="w-11 h-11 rounded-xl bg-glow-cyan/10 flex items-center justify-center glow-border-cyan">
                  <MapPin className="h-5 w-5 text-glow-cyan" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Location</div>
                  <div className="text-sm font-medium text-foreground">
                    {personalInfo.location}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/8">
                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-3">
                  Find me on
                </div>
                <div className="flex items-center gap-3">
                  {[
                    { Icon: Github, href: 'https://github.com', label: 'GitHub', color: 'text-glow-purple' },
                    { Icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: 'text-glow-cyan' },
                    { Icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email', color: 'text-glow-blue' },
                  ].map(({ Icon, href, label, color }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-11 h-11 rounded-xl glass-card glass-card-hover flex items-center justify-center group"
                    >
                      <Icon className={`h-5 w-5 ${color} group-hover:scale-110 transition-transform`} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <span className="flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400" />
                  </span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">
                    Available for work
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Usually responds within 24 hours
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="glass-card rounded-2xl p-8 space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium text-muted-foreground mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium text-muted-foreground mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs font-medium text-muted-foreground mb-2"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Let's build something great"
                  className={inputClass}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-medium text-muted-foreground mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending' || status === 'sent'}
                className="glow-button w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-glow-purple to-glow-blue text-white font-semibold text-sm shadow-lg shadow-glow-purple/25 hover:shadow-glow-purple/40 transition-all duration-300 hover:scale-[1.01] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'sending' && (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                )}
                {status === 'sent' && (
                  <>
                    <CheckCircle2 className="h-4 w-4" />
                    Message Sent!
                  </>
                )}
                {status === 'idle' && (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
                {status === 'error' && (
                  <>
                    <Send className="h-4 w-4" />
                    Try Again
                  </>
                )}
              </button>

              {status === 'sent' && (
                <p className="text-sm text-green-400 text-center animate-fade-in">
                  Thanks for reaching out! I&apos;ll get back to you soon.
                </p>
              )}
              {status === 'error' && (
                <p className="text-sm text-red-400 text-center animate-fade-in">
                  Something went wrong. Please try emailing me directly.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
