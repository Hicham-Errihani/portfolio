// src/components/Projects.jsx
import { projectsData } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="border-t border-white/5 py-24">
      <div className="container-px mx-auto max-w-6xl">
        <p className="section-eyebrow mb-4">Projects</p>
        <h2 className="mb-12 text-3xl sm:text-4xl">Project Portfolio</h2>

        <div className="grid gap-6 md:grid-cols-2">
          {projectsData.map((project) => (
            <div key={project.id} className="card flex flex-col overflow-hidden">
              
              {/* 1. L'IMAGE EN PREMIER (Grande et pro) */}
              <div className="h-52 w-full overflow-hidden bg-slate-900">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  onError={(e) => { e.target.style.display = 'none' }}
                />
              </div>

              {/* 2. LE CONTENU */}
              <div className="p-6 flex flex-col flex-1">
                
                {/* Titre et catégorie */}
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan mb-2">{project.category}</p>
                <h3 className="font-display text-xl font-semibold text-white leading-tight">{project.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{project.shortDescription}</p>

                {/* 3. LES POINTS CLÉS (L'IMPACT) - Utilisation de "proves" */}
                <ul className="mt-4 space-y-2">
                  {project.proves && project.proves.slice(0, 3).map((prove, index) => (
                    <li key={index} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-mint flex-shrink-0"></span>
                      {prove}
                    </li>
                  ))}
                </ul>

                {/* Tags et bouton alignés en bas */}
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span key={tech} className="tag">{tech}</span>
                    ))}
                  </div>
                  
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn-secondary mt-5 w-full text-center">
                    View Case Study
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}