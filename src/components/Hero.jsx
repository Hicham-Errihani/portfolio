import { profile } from '../data/content'
import PipelineDiagram from './PipelineDiagram'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container-px mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="animate-rise">
            <p className="section-eyebrow mb-5">{profile.role} · {profile.location}</p>
            <h1 className="text-4xl leading-[1.08] sm:text-5xl md:text-6xl">{profile.tagline}</h1>
            <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-slate-400">{profile.subtitle}</p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#projects" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }} className="btn-primary">
                Voir mes projets
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 11L11 3M11 3H4M11 3V10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }} className="btn-secondary">
                Me contacter pour une mission
              </a>
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
              <p className="mb-4 font-mono text-[11px] text-slate-500">// pipeline signature — architecture médaillon</p>
              <PipelineDiagram compact className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
