// src/components/Hero.jsx
import profileImage from '../assets/profile.jpg';

// 1. Les données du profil
export const profile = {
  name: 'Hicham Errihani',
  role: 'Senior Data & BI Architect',
  location: 'Casablanca, Morocco',
  mobility: 'National mobility & remote',
  tagline: 'Industrial-Strength Data. Executive-Ready Decisions.',
  subtitle:
    'I design and deliver enterprise-grade data ecosystems—Azure ETL pipelines, predictive ML models, and high-impact Power BI dashboards—that cut through infrastructure complexity and put clear, actionable intelligence in the hands of leadership.',
  email: 'contact@hicham-errihani.dev',
  linkedin: 'https://linkedin.com/in/hicham-errihani',
  github: 'https://github.com/hicham-errihani',
}

// 2. Les données de disponibilité (TRADUITES EN ANGLAIS)
export const availability = {
  eyebrow: 'Availability',
  title: 'Two Ways to Work Together',
  recruiting: {
    label: 'Recruitment',
    title: 'Full-Time (CDI / CDD)',
    desc: 'Data Analyst, Data Engineer or Data Scientist roles. National mobility across Morocco. Availability to discuss according to notice period.',
    cta: 'Download my CV',
  },
  freelance: {
    label: 'Freelance',
    title: 'Mission / Consulting',
    desc: 'End-to-end data pipelines, Power BI dashboards, and cloud architecture setup. Short-term or recurring missions, fully remote or on-site.',
    cta: 'Discuss a mission',
  },
};

// 3. LE COMPOSANT REACT
const Hero = () => {
  return (
    // NOTE: Ajout de "relative overflow-hidden bg-[#050a16]" pour le fond et le masquage des effets
    <section id="hero" className="hero pt-32 min-h-screen flex items-center relative overflow-hidden bg-[#050a16]">
      
      {/* EFFET WOW 1 : Grille technique subtile en arrière-plan */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      {/* EFFET WOW 2 : Halo lumineux cyan à gauche (derrière le texte) */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-500/20 blur-[120px] rounded-full pointer-events-none"></div>

      {/* EFFET WOW 3 : Dégradé sombre en bas pour la transition vers la section suivante */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050a16] to-transparent pointer-events-none"></div>

      {/* Contenu principal (z-10 pour passer au-dessus des effets de fond) */}
      <div className="container mx-auto px-6 relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        
        {/* Bloc Texte (Gauche) HIÉRARCHISÉ */}
        <div className="md:w-1/2 text-left">
          {/* Badge de disponibilité et localisation */}
          <div className="inline-flex items-center gap-2 bg-slate-800/50 border border-cyan-400/30 text-cyan-300 text-sm px-3 py-1 rounded-full mb-4">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            {profile.location} • {profile.mobility}
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">{profile.name}</h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-6 font-semibold">{profile.role}</p>
          
          {/* Tagline en petit en haut pour donner le ton */}
          <p className="text-slate-400 text-sm uppercase tracking-widest mb-4 font-medium">{profile.tagline}</p>
          
          <p className="max-w-xl text-slate-300 mb-8 leading-relaxed">{profile.subtitle}</p>
          
          {/* Boutons */}
          <div className="flex flex-wrap gap-4">
            <a href={`mailto:${profile.email}`} className="btn btn-primary">Contact Me</a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="btn btn-secondary">GitHub</a>
            <a href="#projects" className="btn btn-outline">View Projects</a>
          </div>

          {/* Icônes Sociales */}
          <div className="flex gap-4 mt-8 text-slate-400">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-cyan-400 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-cyan-400 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-cyan-400 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Bloc Image (Droite) avec Halo */}
        <div className="md:w-1/2 flex justify-center relative">
          <div className="absolute inset-0 bg-cyan-500/20 blur-[80px] rounded-full"></div>
          
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.5)] ring-1 ring-cyan-400/50">
            <img src={profileImage} alt="Photo de Hicham Errihani" className="w-full h-full object-cover scale-[1.4]" />
          </div>
        </div>

      </div>
    </section>
  );
};

// 4. L'exportation par défaut attendue par App.jsx
export default Hero;