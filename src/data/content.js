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
  eyebrow: 'About',
  heading: 'Built on Industrial Rigor, Delivered Through Data',
  paragraphs: [
    "Over 18 years analyzing technical and production data in demanding industrial environments — 11 years at GDLS, then 7.5 years at Leonardo DRS as a BI Expert — taught me that reliable systems are non-negotiable. I bring that same standard to every dashboard and pipeline I build.",
    "At Leonardo DRS, I designed and deployed end-to-end Power BI solutions for industrial production monitoring: Star Schema and Snowflake models, advanced DAX measures, Row-Level Security, and governed workspace deployment — turning raw production data into decisions leadership could act on.",
    "I complemented that expertise with a Master's in Computer Engineering & Big Data from ENSA Berrechid and certifications across Azure, AWS, Databricks, and Oracle. Today, as a Data Scientist/Analyst at AUF, I design end-to-end Azure pipelines and Power BI dashboards, and train teams to maintain them — because a system nobody else understands isn't a deliverable, it's a liability.",
    "Based in Casablanca, mobile across Morocco, available for full-time roles as well as freelance missions.",
  ],
  stats: [
    { value: '18+', label: 'years of analytical experience (industry + data)' },
    { value: '8+', label: 'years specialized in Business Intelligence (Power BI)' },
    { value: '10+', label: 'cloud & data certifications' },
  ],
}

export const medallion = [
  { key: 'bronze', label: 'Bronze', desc: 'Ingestion brute', color: '#B8794C' },
  { key: 'silver', label: 'Silver', desc: 'Nettoyage & jointures', color: '#B9C2CC' },
  { key: 'gold', label: 'Gold', desc: 'Agrégats métier', color: '#E8B84B' },
]

export const flagshipProject = {
  eyebrow: 'Étude de cas',
  name: 'Power BI — Sales Customer Product Analysis',
  tagline: 'Dashboard exécutif complet sur AdventureWorks : du schéma en étoile SQL Server aux mesures DAX et au suivi budgétaire.',
  problem:
    "AdventureWorks, distributeur en ligne de vélos et équipements, ne disposait d'aucun reporting centralisé sur ses ventes 2016-2017. La direction commerciale (Head of Sales) avait besoin d'une vue d'ensemble par client, produit et ville, avec suivi du budget ; les commerciaux (Sales Rep) avaient besoin d'analyses détaillées par client et par produit, filtrables dynamiquement par année, mois et attributs produit.",
  stack: [
    { name: 'Power BI Desktop', role: 'Modélisation & rapports multi-pages' },
    { name: 'DAX', role: 'Mesures métier & indicateurs' },
    { name: 'SQL Server / T-SQL', role: 'Vues métier sur AdventureWorksDW2019' },
    { name: 'Power Query (M)', role: 'Import, nettoyage & transformation' },
    { name: 'Star Schema', role: 'Modélisation dimensionnelle manuelle' },
    { name: 'Power BI Service', role: 'Publication & accès web en lecture seule' },
  ],
  architecture: {
    bronze: "Exploration (EDA) de l'entrepôt AdventureWorksDW2019 pour identifier 7 tables sources (DimDate, DimCustomer, DimGeography, DimProduct, DimProductCategory, DimProductSubcategory, FactInternetSales), puis création de 4 vues SQL (vw_date, vw_customer, vw_product, vw_internet_sales) qui encapsulent la logique métier et découplent Power BI de la structure interne de la base.",
    silver: "Import des 4 vues dans Power Query sous les noms Dim_Customer, Dim_Product, Dim_Date et Fact_Internet_Sales, plus import du fichier Budget.xlsx en tant que Fact_Budget. Nettoyage : correction des types, des en-têtes de colonnes.",
    gold: "Construction manuelle d'un modèle en étoile (les tables importées ne sont pas liées automatiquement) : Fact_Internet_Sales et Fact_Budget reliées aux dimensions Dim_Customer, Dim_Product et Dim_Date. Trois rapports publiés sur Power BI Service.",
  },
  challenges: [
    {
      title: 'Filtrage temporel sur un dataset restreint',
      detail:
        "Les données ne couvrent que 2016 et 2017. La vue vw_internet_sales filtre explicitement ces deux années (WHERE LEFT(OrderDateKey, 4) IN (2017, 2016)) pour éviter d'exposer des données hors périmètre et fausser les indicateurs de croissance.",
    },
    {
      title: 'Découplage via des vues SQL plutôt que des requêtes directes',
      detail:
        "Plutôt que d'interroger directement les tables de l'entrepôt depuis Power BI, j'ai créé 4 vues SQL Server qui encapsulent la logique métier (jointures, renommages, décodage des codes M/F, S/M). Si la logique de sélection change, seule la vue est modifiée — aucun changement requis côté Power BI.",
    },
    {
      title: 'Modélisation en étoile manuelle',
      detail:
        "Les vues et la table budget importées ne sont pas liées automatiquement par Power BI. J'ai construit manuellement les relations dans le modèle de données pour former un schéma en étoile propre (Dim_Customer, Dim_Product, Dim_Date autour de Fact_Internet_Sales et Fact_Budget).",
    },
  ],
  result:
    "Trois rapports interactifs publiés (Executive Summary, Customer Analysis, Product Analysis) remplaçant l'absence de reporting centralisé. KPI Sales vs Budget : $22,19M de ventes réalisées contre $30,3M budgétés (écart de -26,75%), avec croissance YoY de 179,9% et détail par ville, client et produit.",
  proves: [
    "Concevoir un pipeline SQL → Power Query → modèle en étoile → DAX, documenté de bout en bout",
    "Écrire des vues SQL Server (T-SQL) comme couche d'abstraction entre la base et l'outil BI",
    "Construire un schéma en étoile manuellement et l'exploiter avec des mesures DAX (KPI, variance, YoY)",
  ],
  links: {
    github: 'https://github.com/Hicham-Errihani/power-bi-sales-customer-analysis',
    demo: '',
  },
  images: [
    '/projects/powerbi-sales/exec-summary-page.png',
    '/projects/powerbi-sales/cust-analysis-page.png',
    '/projects/powerbi-sales/prod-analysis-page.png',
    '/projects/powerbi-sales/data-model.png',
  ],
}

export const projects = []

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
