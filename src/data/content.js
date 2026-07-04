// Centralised content — edit copy here without touching components.

export const profile = {
  name: 'Hicham Errihani',
  role: 'Data Scientist / Data Analyst',
  location: 'Casablanca, Maroc',
  mobility: 'Mobilité nationale',
  tagline: 'Je transforme des données brutes en décisions.',
  subtitle:
    "Pipelines Azure, modèles prédictifs, dashboards Power BI — du terrain industriel à la salle de classe, je construis des systèmes de données qui tiennent en production.",
  email: 'contact@hicham-errihani.dev',
  linkedin: 'https://linkedin.com/in/hicham-errihani',
  github: 'https://github.com/hicham-errihani',
}

export const about = {
  eyebrow: 'À propos',
  paragraphs: [
    "22 ans dans les Forces Armées Royales m'ont appris une chose : un système mal conçu tombe en panne au pire moment. J'applique la même exigence à la donnée.",
    "Après GDLS et Leonardo DRS — deux environnements industriels où l'erreur coûte cher — j'ai orienté ma carrière vers la data : Master Génie Informatique & Big Data à l'ENSA Berrechid, puis une dizaine de certifications cloud et data en 18 mois.",
    "Aujourd'hui Data Scientist/Analyst à l'AUF, je conçois des pipelines Azure de bout en bout et je forme les équipes à les maintenir — parce qu'un pipeline que personne d'autre ne comprend n'est pas un livrable, c'est une dette.",
    "Basé à Casablanca, mobile sur tout le territoire marocain, disponible en CDI comme en mission freelance.",
  ],
  stats: [
    { value: '22', label: 'ans d\'expérience terrain (Défense + Data)' },
    { value: '10+', label: 'certifications cloud & data' },
    { value: '3', label: 'couches Bronze/Silver/Gold maîtrisées de bout en bout' },
  ],
}

// Medallion architecture stage metadata — reused by the PipelineDiagram
// signature component across the Hero, nav indicator, and case study.
export const medallion = [
  { key: 'bronze', label: 'Bronze', desc: 'Ingestion brute', color: '#B8794C' },
  { key: 'silver', label: 'Silver', desc: 'Nettoyage & jointures', color: '#B9C2CC' },
  { key: 'gold', label: 'Gold', desc: 'Agrégats métier', color: '#E8B84B' },
]

export const flagshipProject = {
  eyebrow: 'Étude de cas',
  name: 'Gender Sales Dashboard',
  tagline: 'Un pipeline Azure complet, de la donnée brute au dashboard exécutif.',
  problem:
    "Une direction commerciale voulait suivre ses ventes par segment démographique en quasi temps réel, mais ses données arrivaient de trois sources hétérogènes (POS, CRM, fichiers plats), sans historisation ni contrôle d'accès. Chaque rapport était refait à la main, dans Excel, chaque mois.",
  stack: [
    { name: 'Azure Data Factory', role: 'Orchestration & ingestion' },
    { name: 'Azure Databricks', role: 'Transformation Spark (PySpark)' },
    { name: 'ADLS Gen2', role: 'Lac de données (Bronze/Silver/Gold)' },
    { name: 'Azure Key Vault', role: 'Secrets & identités managées' },
    { name: 'Unity Catalog', role: 'Gouvernance & lignage des données' },
    { name: 'Synapse Analytics', role: 'Requêtage SQL sur le lac' },
    { name: 'Power BI', role: 'Restitution & pilotage' },
  ],
  architecture: {
    bronze: 'Ingestion brute des 3 sources via ADF, horodatée et versionnée dans ADLS Gen2.',
    silver: 'Nettoyage, dédoublonnage et jointures PySpark dans Databricks ; schéma imposé.',
    gold: 'Agrégats métier (CA par segment, tendance, saisonnalité) exposés à Synapse et Power BI.',
  },
  challenges: [
    {
      title: 'Authentification SQL en Mixed Mode',
      detail:
        "Synapse refusait les connexions Power BI en mode Azure AD seul sur certains postes clients. Résolu en configurant l'authentification SQL Mixed Mode côté serveur, avec rotation des secrets via Key Vault plutôt que des mots de passe en dur.",
    },
    {
      title: 'RBAC multi-identités désaligné',
      detail:
        "Trois identités managées (ADF, Databricks, Synapse) avaient des permissions incohérentes sur ADLS Gen2, provoquant des échecs silencieux en Silver. Audit complet des rôles IAM et alignement sur le principe du moindre privilège, par couche.",
    },
    {
      title: 'Configuration Unity Catalog & external location',
      detail:
        "La liaison entre le workspace Databricks et le stockage externe échouait au niveau des credentials de storage. Reconfiguration des external locations et storage credentials pour rendre le lignage de données traçable de bout en bout.",
    },
  ],
  result:
    "Rapport mensuel manuel remplacé par un dashboard Power BI rafraîchi automatiquement, avec traçabilité complète de la donnée (source → Bronze → Silver → Gold) et gouvernance via Unity Catalog.",
  proves: [
    'Concevoir une architecture cloud de bout en bout, pas juste un notebook isolé',
    'Diagnostiquer et résoudre des pannes IAM/réseau en environnement Azure réel',
    'Documenter un pipeline pour qu\'une équipe puisse le reprendre sans moi',
  ],
  links: { github: 'https://github.com/hicham-errihani/gender-sales-dashboard' },
}

export const projects = [
  {
    slug: 'churn-prediction',
    name: 'Modèle prédictif de churn client',
    context:
      "Anticiper la résiliation d'abonnement à partir de l'historique d'usage, pour prioriser les relances commerciales.",
    stack: ['Python', 'scikit-learn', 'Pandas', 'XGBoost'],
    result: 'AUC de 0.87 sur jeu de test ; top 20% des clients à risque capturent 68% des résiliations réelles.',
  },
  {
    slug: 'sales-powerbi',
    name: 'Dashboard exécutif Ventes & Marketing',
    context:
      "Consolidation de sources CRM et publicitaires en un modèle DAX unique, avec sécurité au niveau ligne (RLS) par région.",
    stack: ['Power BI', 'DAX', 'SQL Server', 'Power Query'],
    result: 'Temps de reporting mensuel réduit de 3 jours à 20 minutes.',
  },
  {
    slug: 'etl-batch',
    name: 'Pipeline ETL par lots — données publiques',
    context:
      "Automatisation de la collecte, du nettoyage et du chargement de jeux de données publics volumineux pour analyse statistique.",
    stack: ['Python', 'Airflow', 'PostgreSQL', 'Docker'],
    result: 'Traitement hebdomadaire de +2M lignes sans intervention manuelle.',
  },
]

export const skills = {
  eyebrow: 'Compétences',
  groups: [
    {
      title: 'Cloud & Data Engineering',
      items: ['Azure Data Factory', 'Databricks', 'ADLS Gen2', 'Synapse Analytics', 'Unity Catalog', 'AWS', 'Oracle OCI', 'Key Vault / IAM'],
    },
    {
      title: 'Data & Analyse',
      items: ['Power BI / DAX', 'SQL', 'Spark / PySpark', 'Machine Learning', 'Statistiques', 'ETL / architecture médaillon'],
    },
    {
      title: 'Langages',
      items: ['Python', 'SQL', 'Java', 'PySpark'],
    },
  ],
}

export const certifications = [
  { name: 'Oracle OCI Generative AI', issuer: 'Oracle', url: '#' },
  { name: 'Oracle Java SE 17', issuer: 'Oracle', url: '#' },
  { name: 'AWS Cloud Technical Essentials', issuer: 'AWS', url: '#' },
  { name: 'Databricks Fundamentals', issuer: 'Databricks', url: '#' },
  { name: 'Google Data Analytics', issuer: 'Google', url: '#' },
  { name: 'IBM Data Engineering & ML', issuer: 'IBM', url: '#' },
  { name: 'PCAP — Programming in Python', issuer: 'Python Institute', url: '#' },
  { name: 'Cisco IT Essentials', issuer: 'Cisco', url: '#' },
  { name: 'Supervised Machine Learning', issuer: 'Stanford / DeepLearning.AI', url: '#' },
]

export const availability = {
  eyebrow: 'Disponibilité',
  title: 'Deux façons de travailler ensemble',
  recruiting: {
    label: 'Recrutement',
    title: 'CDI / CDD',
    desc: "Poste de Data Analyst, Data Engineer ou Data Scientist. Mobilité nationale sur tout le Maroc, disponibilité à discuter selon préavis.",
    cta: 'Recevoir mon CV',
  },
  freelance: {
    label: 'Freelance',
    title: 'Mission / Consulting',
    desc: "Pipelines de données, dashboards Power BI, mise en place d'architecture cloud. Missions courtes ou récurrentes, à distance ou sur site.",
    cta: 'Discuter d\'une mission',
  },
}
