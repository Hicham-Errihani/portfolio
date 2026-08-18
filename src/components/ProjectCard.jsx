const statusStyles = { 'Terminé': 'text-mint border-mint/30 bg-mint/5', 'En cours': 'text-gold border-gold/30 bg-gold/5' }

export default function ProjectCard({ project, onSelect }) {
  const { title, shortDescription, category, techStack, image, githubUrl, status } = project

  return (
    <button onClick={() => onSelect(project.id)} className="card group flex h-full flex-col overflow-hidden text-left transition-transform duration-200 hover:-translate-y-1">
      {image && (
        <div className="overflow-hidden border-b border-white/10 bg-ink-950/60">
          <img src={image} alt={`${title} – aperçu`} className="h-40 w-full object-cover object-top" loading="lazy" />
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-2 flex items-center justify-between gap-2">
          <span className="font-mono text-[11px] uppercase tracking-wider text-cyan">{category}</span>
          {status && <span className={`rounded-full border px-2 py-0.5 font-mono text-[10px] ${statusStyles[status] ?? 'text-slate-400 border-white/10'}`}>{status}</span>}
        </div>

        <h4 className="font-display text-lg font-semibold text-white">{title}</h4>
        <p className="mt-2 flex-1 font-body text-sm leading-relaxed text-slate-400">{shortDescription}</p>

        {techStack && techStack.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {techStack.map((t) => (<span key={t} className="tag">{t}</span>))}
          </div>
        )}

        <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-4">
          <span className="font-mono text-xs text-cyan group-hover:underline">Voir le détail →</span>
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="font-mono text-xs text-slate-500 hover:text-mint hover:underline">GitHub</a>
          )}
        </div>
      </div>
    </button>
  )
}
