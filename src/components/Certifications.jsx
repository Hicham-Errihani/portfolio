import { certifications } from '../data/content'

export default function Certifications() {
  return (
    <section id="certifications" className="border-t border-white/5 py-24">
      <div className="container-px mx-auto max-w-6xl">
        <p className="section-eyebrow mb-4">Certifications</p>
        <h2 className="mb-12 text-3xl sm:text-4xl">Validées, pas juste listées</h2>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <a key={cert.name} href={cert.url} target="_blank" rel="noreferrer" className="card group flex items-center justify-between gap-3 p-4 transition-colors duration-200 hover:border-cyan/30">
              <div>
                <p className="font-body text-sm font-medium text-slate-200">{cert.name}</p>
                <p className="font-mono text-[11px] text-slate-500">{cert.issuer}</p>
              </div>
              <svg className="shrink-0 text-slate-600 transition-colors group-hover:text-cyan" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 11L11 3M11 3H4M11 3V10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
