// src/components/Hero.jsx

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
    <section id="hero" className="hero pt-32 min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{profile.name}</h1>
        <p className="text-xl md:text-2xl text-cyan-400 mb-6">{profile.role}</p>
        <p className="max-w-2xl text-slate-300 mb-8">{profile.subtitle}</p>
        
        <div className="flex gap-4">
          <a href={`mailto:${profile.email}`} className="btn btn-primary">Contact Me</a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="btn btn-secondary">GitHub</a>
        </div>
      </div>
    </section>
  );
};

// 4. L'exportation par défaut attendue par App.jsx
export default Hero;