import { about } from '../data/content'

export default function About() {
  return (
    <section id="about" className="border-t border-white/5 py-24">
      <div className="container-px mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="section-eyebrow mb-4">{about.eyebrow}</p>
             <h2>Built on Industrial Rigor, Delivered Through Data</h2>

            <dl className="mt-10 grid grid-cols-3 gap-6">
              {about.stats.map((s) => (
                <div key={s.label}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="font-display text-3xl font-semibold text-cyan">{s.value}</dd>
                  <dd className="mt-1 font-body text-xs leading-snug text-slate-500">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="space-y-5">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="font-body text-base leading-relaxed text-slate-300">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
