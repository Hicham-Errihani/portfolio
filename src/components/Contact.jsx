import { useState } from 'react'
import { profile } from '../data/content'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Contact portfolio — ${form.name || 'sans nom'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="border-t border-white/5 py-24">
      <div className="container-px mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="section-eyebrow mb-4">Contact</p>
            <h2 className="text-3xl sm:text-4xl">Parlons de votre projet</h2>
            <p className="mt-4 max-w-md font-body text-slate-400">
              Une question, un poste à pourvoir, une mission à cadrer — je réponds sous 48h.
            </p>

            <ul className="mt-8 space-y-3 font-mono text-sm">
              <li>
                <a href={`mailto:${profile.email}`} className="text-slate-300 transition-colors hover:text-cyan">
                  {profile.email}
                </a>
              </li>
              <li>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-slate-300 transition-colors hover:text-cyan">
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <a href={profile.github} target="_blank" rel="noreferrer" className="text-slate-300 transition-colors hover:text-cyan">
                  GitHub ↗
                </a>
              </li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="card space-y-5 p-8">
            <div>
              <label htmlFor="name" className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-slate-500">
                Nom
              </label>
              <input
                id="name"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-lg border border-white/10 bg-ink-950/60 px-4 py-3 font-body text-sm text-white outline-none transition-colors focus:border-cyan/50"
                placeholder="Votre nom"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-slate-500">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-white/10 bg-ink-950/60 px-4 py-3 font-body text-sm text-white outline-none transition-colors focus:border-cyan/50"
                placeholder="vous@exemple.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-slate-500">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="w-full resize-none rounded-lg border border-white/10 bg-ink-950/60 px-4 py-3 font-body text-sm text-white outline-none transition-colors focus:border-cyan/50"
                placeholder="Décrivez le poste ou la mission…"
              />
            </div>
            <button type="submit" className="btn-primary w-full">
              Envoyer le message
            </button>
            {sent && (
              <p className="font-body text-xs text-mint" role="status">
                Votre client mail va s'ouvrir avec le message pré-rempli.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
