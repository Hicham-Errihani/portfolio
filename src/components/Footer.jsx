import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="container-px mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 font-mono text-xs text-slate-600 sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>Casablanca, Maroc — {profile.mobility}</p>
      </div>
    </footer>
  )
}
