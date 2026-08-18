import { flagshipProject } from '../data/content'
import { projectsData } from '../data/projects'
import PipelineDiagram from './PipelineDiagram'
import ProjectsGrid from './ProjectsGrid'

function ChallengeItem({ title, detail }) {
  return (
    <div className="border-l-2 border-cyan/40 pl-5">
      <h4 className="font-display text-sm font-semibold text-white">{title}</h4>
      <p className="mt-1.5 font-body text-sm leading-relaxed text-slate-400">{detail}</p>
    </div>
  )
}

function Screenshot({ src, alt }) {
  return (
    <div className="overflow-hidden rounded-lg border border-white/10 bg-ink-950/60">
      <img src={src} alt={alt} className="w-full object-cover transition-transform duration-300 hover:scale-105" loading="lazy" />
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
          {p.images && p.images.length > 0 && (
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-slate-500">Aperçu du dashboard</h4>
              <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {p.images.map((src, i) => (
                  <Screenshot key={i} src={src} alt={`${p.name} – capture ${i + 1}`} />
                ))}
              </div>
            </div>
          )}

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

export default function Projects() {
  return (
    <section id="projects" className="border-t border-white/5 py-24">
      <div className="container-px mx-auto max-w-6xl">
        <p className="section-eyebrow mb-4">Projets</p>
        <h2 className="mb-12 text-3xl sm:text-4xl">Études de cas</h2>

        <FlagshipCase />

        {projectsData.length > 0 && (
          <div className="mt-8">
            <ProjectsGrid projects={projectsData} />
          </div>
        )}
      </div>
    </section>
  )
}
