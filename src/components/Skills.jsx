import { skills } from '../data/content'

export default function Skills() {
  return (
    <section id="skills" className="border-t border-white/5 py-24">
      <div className="container-px mx-auto max-w-6xl">
        <p className="section-eyebrow mb-4">{skills.eyebrow}</p>
        <h2 className="mb-12 text-3xl sm:text-4xl">Boîte à outils</h2>

        <div className="grid gap-6 md:grid-cols-3">
          {skills.groups.map((g) => (
            <div key={g.title} className="card p-6">
              <h3 className="font-display text-base font-semibold text-cyan">{g.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <li key={item} className="tag">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
