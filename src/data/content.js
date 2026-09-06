// src/data/content.js

export const profile = {
  name: 'Hicham Errihani',
  role: 'Senior Data Scientist / BI Architect', 
  location: 'Casablanca, Morocco',
  mobility: 'National mobility & remote', 
  tagline: 'Turning Raw Data into Strategic Decisions.', 
  subtitle: 'I design and deploy production-grade data ecosystems—Azure ETL pipelines, ML-driven predictive models, and interactive Power BI dashboards—that bridge complex infrastructure with clear executive decisions.',
  email: 'contact@hicham-errihani.dev',
  linkedin: 'https://linkedin.com/in/hicham-errihani',
  github: 'https://github.com/hicham-errihani',
}

export const about = {
  eyebrow: 'About',
  heading: 'Built on Industrial Rigor, Delivered Through Data',
  paragraphs: [
    "With over 18 years analyzing technical and production data in high-stakes industrial environments — 11 years at GDLS, followed by 7.5 years at Leonardo DRS as a BI Expert — I've learned that reliable systems are non-negotiable.",
    "At Leonardo DRS, I designed and deployed end-to-end Power BI solutions for industrial production monitoring.",
    "I complemented that hands-on experience with a Master's in Computer Engineering & Big Data from ENSA Berrechid.",
    "Based in Casablanca, mobile across Morocco, and available for both senior full-time roles and freelance consulting missions.",
  ],
  stats: [
    { value: '18+', label: 'years of analytical experience (industry + data)' },
    { value: '8+', label: 'years specialized in Business Intelligence (Power BI)' },
    { value: '10+', label: 'cloud & data certifications' },
  ],
}

export const skills = {
  eyebrow: 'SKILLS',
  groups: [
    { title: 'Cloud & Data Engineering', items: ['Azure Data Factory', 'Databricks', 'ADLS Gen2', 'Synapse Analytics', 'Unity Catalog', 'AWS', 'Oracle OCI'] },
    { title: 'Data & Analytics', items: ['Power BI / DAX', 'SQL', 'Spark / PySpark', 'Machine Learning', 'Statistics', 'ETL / Medallion Architecture'] },
    { title: 'Languages', items: ['Python', 'SQL', 'Java', 'PySpark'] },
  ],
}

export const certifications = [
  { name: 'Oracle OCI Generative AI', issuer: 'Oracle', url: '#' },
  { name: 'AWS Cloud Technical Essentials', issuer: 'AWS', url: '#' },
  { name: 'Databricks Fundamentals', issuer: 'Databricks', url: '#' },
]

export const availability = {
  eyebrow: 'Availability',
  title: 'Two Ways to Work Together',
  recruiting: { label: 'Recruitment', title: 'Full-Time (CDI / CDD)', desc: 'Senior roles in Data Analysis, Engineering, or Science. National mobility across Morocco.', cta: 'Download my CV' },
  freelance: { label: 'Freelance', title: 'Mission / Consulting', desc: 'End-to-end data pipelines, Power BI dashboards, cloud architecture advisory. Fully remote or on-site.', cta: 'Discuss a mission' },
}

export const flagshipProject = {
  eyebrow: 'Case Study',
  name: 'Power BI — Sales Customer Product Analysis',
  tagline: 'Complete executive dashboard on AdventureWorks: from SQL Server Star Schema to DAX measures and budget tracking.',
  problem: "AdventureWorks had no centralized reporting on its 2016-2017 sales.",
  result: "Three interactive reports published replacing the absence of centralized reporting.",
  links: { github: 'https://github.com/Hicham-Errihani/power-bi-sales-customer-analysis', demo: '' },
  images: ['/projects/powerbi-sales/exec-summary-page.png']
}

export const projects = []