import { useMemo, useState } from 'react'
import ProjectCard from './ProjectCard'

const PAGE_SIZE = 6

export default function ProjectsGrid({ projects, onSelect }) {
  const [activeCategory, setActiveCategory] = useState('Tous')
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)

  const categories = useMemo(() => {
    const unique = Array.from(new Set(projects.map((p) => p.category)))
    return ['Tous', ...unique]
  }, [projects])

  const sorted = useMemo(
    () => [...projects].sort((a, b) => (b.date || '').localeCompare(a.date || '')),
    [projects]
  )

  const filtered = useMemo(
    () => (activeCategory === 'Tous' ? sorted : sorted.filter((p) => p.category === activeCategory)),
    [sorted, activeCategory]
  )

  const visible = filtered.slice(0, visibleCount)
  const hasMore = visibleCount < filtered.length

  const handleCategoryClick = (cat) => {
    setActiveCategory(cat)
    setVisibleCount(PAGE_SIZE)
  }

  if (projects.length === 0) return null

  return (
    <div>
      {categories.length > 2 && (
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryClick(cat)}
              className={`rounded-full border px-4 py-1.5 font-mono text-xs transition-colors duration-200 ${
                activeCategory === cat
                  ? 'border-cyan/40 bg-cyan/10 text-cyan'
                  : 'border-white/10 text-slate-400 hover:border-white/20 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => (
          <ProjectCard key={project.id} project={project} onSelect={onSelect} />
        ))}
      </div>

      {hasMore && (
        <div className="mt-8 flex justify-center">
          <button onClick={() => setVisibleCount((v) => v + PAGE_SIZE)} className="btn-secondary">
            Voir plus de projets
          </button>
        </div>
      )}
    </div>
  )
}
