import { profile, about } from '../data/content'
import PipelineDiagram from './PipelineDiagram'

const socials = [
  {
    label: 'LinkedIn',
    href: profile.linkedin,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: profile.github,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.72-2.78.62-3.37-1.36-3.37-1.36-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.9-1.33 2.74-1.05 2.74-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: `mailto:${profile.email}`,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
        <path d="M3 6.5l9 6.5 9-6.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container-px mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="animate-rise">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-mint/30 bg-mint/5 px-3 py-1">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
              </span>
              <span className="font-body text-xs font-medium text-mint">
                Available for freelance & full-time roles
              </span>
            </div>

            <p className="section-eyebrow mb-5">{profile.role} · {profile.location}</p>
            <h1 className="text-4xl leading-[1.08] sm:text-5xl md:text-6xl">{profile.tagline}</h1>
            <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-slate-400">{profile.subtitle}</p>

            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
              {about.stats.map((s) => (
                <div key={s.label} className="flex items-baseline gap-2">
                  <span className="font-display text-xl font-bold text-cyan">{s.value}</span>
                  <span className="font-body text-xs text-slate-400">{s.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="btn-primary"
              >
                View my projects
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 11L11 3M11 3H4M11 3V10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="btn-secondary"
              >
                Get in touch for a mission
              </a>
              <a href="/cv-hicham-errihani.pdf" download className="btn-secondary">
                Download CV
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M7 1v8m0 0L4 6m3 3l3-3M2 12h10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            <div className="mt-7 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.label === 'Email' ? undefined : '_blank'}
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-slate-400 transition-colors hover:border-cyan/40 hover:text-cyan"
                >
                  {s.icon}
                </a>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-xs text-slate-500">
              <span>GDLS</span>
              <span className="h-1 w-1 rounded-full bg-slate-600" />
              <span>Leonardo DRS</span>
              <span className="h-1 w-1 rounded-full bg-slate-600" />
              <span>AUF</span>
              <span className="h-1 w-1 rounded-full bg-slate-600" />
              <span>ENSA Berrechid</span>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="card p-6">
              <p className="mb-4 font-mono text-[11px] text-slate-500">// pipeline signature — medallion architecture</p>
              <PipelineDiagram compact className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}