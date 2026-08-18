const statusStyles = {
  'Terminé': 'text-mint border-mint/30 bg-mint/5',
  'En cours': 'text-gold border-gold/30 bg-gold/5',
}

export default function ProjectCard({ project }) {
  const { title, shortDescription, category, techStack, image, githubUrl, liveDemoUrl, status } = project

  return (
    <div className="card flex h-full flex-col overflow-hidden transition-transform duration-200 hover:-translate-y-1">
      {image && (
        <div className="overflow-hidden border-b border-white/10 bg-ink-950/60">
          <img src={image} alt={`${title} – aperçu`} className="h-40 w-full object-cover object-top" loading="lazy" />
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-2 flex items-center justify-between gap-2">
          <span className="font-mono text-[11px] uppercase tracking-wider text-cyan">{category}</span>
          {status && (
            <span className={`rounded-full border px-2 py-0.5 font-mono text-[10px] ${statusStyles[status] ?? 'text-slate-400 border-white/10'}`}>
              {status}
            </span>
          )}
        </div>

        <h4 className="font-display text-lg font-semibold text-white">{title}</h4>
        <p className="mt-2 flex-1 font-body text-sm leading-relaxed text-slate-400">{shortDescription}</p>

        {techStack && techStack.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {techStack.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        )}

        {(githubUrl || liveDemoUrl) && (
          <div className="mt-4 flex flex-wrap gap-4 border-t border-white/5 pt-4">
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 font-mono text-xs text-cyan hover:underline">
                Voir sur GitHub →
              </a>
            )}
            {liveDemoUrl && (
              <a href={liveDemoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 font-mono text-xs text-mint hover:underline">
                Démo live →
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
