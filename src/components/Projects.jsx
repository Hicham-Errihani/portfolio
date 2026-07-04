import { flagshipProject, projects } from '../data/content'
import PipelineDiagram from './PipelineDiagram'

function ChallengeItem({ title, detail }) {
  return (
    <div className="border-l-2 border-cyan/40 pl-5">
      <h4 className="font-display text-sm font-semibold text-white">{title}</h4>
      <p className="mt-1.5 font-body text-sm leading-relaxed text-slate-400">{detail}</p>
    </div>
  )
}

function FlagshipCase() {
  const p = flagshipProject
  return (
    <div className="card overflow-hidden">
      <div className="border-b border-white/10 bg-white/[0.02] p-8 sm:p-10">
        <p className="section-eyebrow mb-3">{p.eyebrow} · Projet phare</p>
        <h3 className="text-2xl sm:text-3xl">{p.name}</h3>
        <p className="mt-3 max-w-2xl font-body text-slate-400">{p.tagline}</p>
      </div>

      <div className="grid gap-10 p-8 sm:p-10 lg:grid-cols-2">
        <div className="space-y-8">
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-slate-500">Problème</h4>
            <p className="mt-2 font-body text-sm leading-relaxed text-slate-300">{p.problem}</p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-slate-500">Stack technique</h4>
            <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {p.stack.map((s) => (
                <li key={s.name} className="flex items-baseline gap-2 font-body text-sm text-slate-300">
                  <span className="tag shrink-0">{s.name}</span>
                  <span className="text-slate-500">{s.role}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-slate-500">Résultat</h4>
            <p className="mt-2 font-body text-sm leading-relaxed text-slate-300">{p.result}</p>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-slate-500">Architecture médaillon</h4>
            <div className="mt-3 rounded-xl border border-white/10 bg-ink-950/60 p-4">
              <PipelineDiagram className="w-full" />
              <ul className="mt-2 space-y-2 border-t border-white/5 pt-4 text-sm">
                <li><span className="font-mono text-[11px] text-bronze">BRONZE </span><span className="text-slate-400">{p.architecture.bronze}</span></li>
                <li><span className="font-mono text-[11px] text-silver">SILVER </span><span className="text-slate-400">{p.architecture.silver}</span></li>
                <li><span className="font-mono text-[11px] text-gold">GOLD </span><span className="text-slate-400">{p.architecture.gold}</span></li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-slate-500">Défis résolus</h4>
            <div className="mt-3 space-y-4">
              {p.challenges.map((c) => (
                <ChallengeItem key={c.title} title={c.title} detail={c.detail} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-mint/[0.03] p-8 sm:p-10">
        <h4 className="font-mono text-xs uppercase tracking-wider text-mint">Ce que ça prouve</h4>
        <ul className="mt-3 grid gap-2 sm:grid-cols-3">
          {p.proves.map((item) => (
            <li key={item} className="flex gap-2 font-body text-sm text-slate-300">
              <span className="mt-1 text-mint">✓</span>
              {item}
            </li>
          ))}
        </ul>
        {p.links && p.links.github && (
          <a href={p.links.github} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-1.5 font-mono text-xs text-cyan hover:underline">
            Voir le code sur GitHub →
          </a>
        )}
      </div>
    </div>
  )
}

function ProjectCard({ project }) {
  return (
    <div className="card flex h-full flex-col p-6 transition-transform duration-200 hover:-translate-y-1">
      <h4 className="font-display text-lg font-semibold text-white">{project.name}</h4>
      <p className="mt-2 flex-1 font-body text-sm leading-relaxed text-slate-400">{project.context}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.stack.map((s) => (
          <span key={s} className="tag">{s}</span>
        ))}
      </div>
      <p className="mt-4 border-t border-white/5 pt-4 font-body text-sm text-mint">{project.result}</p>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="border-t border-white/5 py-24">
      <div className="container-px mx-auto max-w-6xl">
        <p className="section-eyebrow mb-4">Projets</p>
        <h2 className="mb-12 text-3xl sm:text-4xl">Études de cas</h2>

        <FlagshipCase />

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
