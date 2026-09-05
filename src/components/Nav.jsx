import { useEffect, useState } from 'react'

const links = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'availability', label: 'Availability' },
  { id: 'contact', label: 'Contact' },
]

export default function Nav() {
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const sections = links.map((l) => document.getElementById(l.id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleClick = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-ink-950/80 backdrop-blur-md">
      <nav className="container-px mx-auto flex h-16 max-w-6xl items-center justify-between">
        <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }} className="font-display text-sm font-semibold text-white">
          H. Errihani<span className="text-cyan">.</span>
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.id}>
              <button onClick={() => handleClick(l.id)} className={`rounded-md px-3 py-2 font-body text-sm transition-colors ${active === l.id ? 'text-cyan' : 'text-slate-400 hover:text-white'}`}>
                {l.label}
              </button>
            </li>
          ))}
        </ul>
        <button onClick={() => handleClick('contact')} className="hidden rounded-md border border-cyan/30 px-4 py-2 font-display text-sm font-semibold text-cyan transition-colors hover:bg-cyan/10 md:inline-flex">
          Get in Touch
        </button>
        <button aria-label="Open menu" aria-expanded={open} onClick={() => setOpen((v) => !v)} className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-white md:hidden">
          <span className="sr-only">Menu</span>
          {open ? (
            <svg width="18" height="18" viewBox="0 0 18 18"><path d="M1 1L17 17M17 1L1 17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 18 18"><path d="M1 3H17M1 9H17M1 15H17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
          )}
        </button>
      </nav>
      {open && (
        <ul className="border-t border-white/5 bg-ink-950 md:hidden">
          {links.map((l) => (
            <li key={l.id}>
              <button onClick={() => handleClick(l.id)} className={`block w-full px-6 py-3 text-left font-body text-sm ${active === l.id ? 'text-cyan' : 'text-slate-300'}`}>
                {l.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}