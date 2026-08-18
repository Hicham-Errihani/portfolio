import { useState } from 'react'
import { projectsData } from '../data/projects'
import ProjectDetail from './ProjectDetail'
import ProjectsGrid from './ProjectsGrid'

export default function Projects() {
  const [selectedId, setSelectedId] = useState(null)
  const selectedProject = projectsData.find((p) => p.id === selectedId) || null

  const scrollToSection = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleSelect = (id) => {
    setSelectedId(id)
    scrollToSection()
  }

  const handleBack = () => {
    setSelectedId(null)
    scrollToSection()
  }

  return (
    <section id="projects" className="border-t border-white/5 py-24">
      <div className="container-px mx-auto max-w-6xl">
        <p className="section-eyebrow mb-4">Projets</p>
        <h2 className="mb-12 text-3xl sm:text-4xl">
          {selectedProject ? 'Étude de cas' : 'Portfolio de projets'}
        </h2>

        {selectedProject ? (
          <ProjectDetail project={selectedProject} onBack={handleBack} />
        ) : (
          <ProjectsGrid projects={projectsData} onSelect={handleSelect} />
        )}
      </div>
    </section>
  )
}
