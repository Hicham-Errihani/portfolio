import { availability } from '../data/content'

function Track({ data, accent, onClick }) {
  const isMint = accent === 'mint'
  return (
    <div className={`card flex flex-col p-8 ${isMint ? 'hover:border-mint/30' : 'hover:border-cyan/30'} transition-colors duration-200`}>
      <span className={`font-mono text-xs uppercase tracking-[0.2em] ${isMint ? 'text-mint' : 'text-cyan'}`}>
        {data.label}
      </span>
      <h3 className="mt-3 font-display text-2xl font-semibold text-white">{data.title}</h3>
      <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-slate-400">{data.desc}</p>
      <button onClick={onClick} className={isMint ? 'btn-secondary mt-6' : 'btn-primary mt-6'}>
        {data.cta}
      </button>
    </div>
  )
}

export default function Availability() {
  const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="availability" className="border-t border-white/5 py-24">
      <div className="container-px mx-auto max-w-6xl">
        <p className="section-eyebrow mb-4">{availability.eyebrow}</p>
        <h2 className="mb-12 text-3xl sm:text-4xl">{availability.title}</h2>

        <div className="grid gap-6 md:grid-cols-2">
          <Track data={availability.recruiting} accent="cyan" onClick={scrollToContact} />
          <Track data={availability.freelance} accent="mint" onClick={scrollToContact} />
        </div>
      </div>
    </section>
  )
}
