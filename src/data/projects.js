// Centralised project data. Adding a future project requires ONLY a new
// entry in this array — no JSX or display logic needs to change.

export const projectsData = [
  {
    id: 'power-bi-sales-customer-analysis',
    title: 'Power BI — Sales Customer Product Analysis',
    shortDescription:
      "Dashboard exécutif complet sur AdventureWorks : du schéma en étoile SQL Server aux mesures DAX et au suivi budgétaire.",
    category: 'BI / Power BI',
    techStack: ['Power BI', 'SQL Server', 'DAX', 'Star Schema'],
    image: '/projects/powerbi-sales/exec-summary-page.png',
    githubUrl: 'https://github.com/Hicham-Errihani/power-bi-sales-customer-analysis',
    liveDemoUrl: null,
    status: 'Terminé',
    date: '2026-07',

    problem:
      "AdventureWorks, distributeur en ligne de vélos et équipements, ne disposait d'aucun reporting centralisé sur ses ventes 2016-2017. La direction commerciale (Head of Sales) avait besoin d'une vue d'ensemble par client, produit et ville, avec suivi du budget ; les commerciaux (Sales Rep) avaient besoin d'analyses détaillées par client et par produit, filtrables dynamiquement par année, mois et attributs produit.",
    stackDetailed: [
      { name: 'Power BI Desktop', role: 'Modélisation & rapports multi-pages' },
      { name: 'DAX', role: 'Mesures métier & indicateurs' },
      { name: 'SQL Server / T-SQL', role: 'Vues métier sur AdventureWorksDW2019' },
      { name: 'Power Query (M)', role: 'Import, nettoyage & transformation' },
      { name: 'Star Schema', role: 'Modélisation dimensionnelle manuelle' },
      { name: 'Power BI Service', role: 'Publication & accès web en lecture seule' },
    ],
    steps: [
      {
        label: 'Extraction',
        detail:
          "Exploration (EDA) de l'entrepôt AdventureWorksDW2019 pour identifier 7 tables sources, puis création de 4 vues SQL (vw_date, vw_customer, vw_product, vw_internet_sales) qui encapsulent la logique métier et découplent Power BI de la structure interne de la base.",
      },
      {
        label: 'Transformation',
        detail:
          "Import des 4 vues dans Power Query sous les noms Dim_Customer, Dim_Product, Dim_Date et Fact_Internet_Sales, plus import du fichier Budget.xlsx en tant que Fact_Budget. Nettoyage : correction des types, des en-têtes de colonnes.",
      },
      {
        label: 'Modélisation & restitution',
        detail:
          "Construction manuelle d'un modèle en étoile : Fact_Internet_Sales et Fact_Budget reliées aux dimensions Dim_Customer, Dim_Product et Dim_Date. Trois rapports publiés sur Power BI Service.",
      },
    ],
    challenges: [
      {
        title: 'Filtrage temporel sur un dataset restreint',
        detail:
          "Les données ne couvrent que 2016 et 2017. La vue vw_internet_sales filtre explicitement ces deux années (WHERE LEFT(OrderDateKey, 4) IN (2017, 2016)) pour éviter d'exposer des données hors périmètre et fausser les indicateurs de croissance.",
      },
      {
        title: 'Découplage via des vues SQL plutôt que des requêtes directes',
        detail:
          "Plutôt que d'interroger directement les tables de l'entrepôt depuis Power BI, j'ai créé 4 vues SQL Server qui encapsulent la logique métier. Si la logique de sélection change, seule la vue est modifiée — aucun changement requis côté Power BI.",
      },
      {
        title: 'Modélisation en étoile manuelle',
        detail:
          "Les vues et la table budget importées ne sont pas liées automatiquement par Power BI. J'ai construit manuellement les relations dans le modèle de données pour former un schéma en étoile propre.",
      },
    ],
    result:
      "Trois rapports interactifs publiés (Executive Summary, Customer Analysis, Product Analysis) remplaçant l'absence de reporting centralisé. KPI Sales vs Budget : $22,19M de ventes réalisées contre $30,3M budgétés (écart de -26,75%), avec croissance YoY de 179,9% et détail par ville, client et produit.",
    proves: [
      "Concevoir un pipeline SQL → Power Query → modèle en étoile → DAX, documenté de bout en bout",
      "Écrire des vues SQL Server (T-SQL) comme couche d'abstraction entre la base et l'outil BI",
      "Construire un schéma en étoile manuellement et l'exploiter avec des mesures DAX (KPI, variance, YoY)",
    ],
    images: [
      '/projects/powerbi-sales/exec-summary-page.png',
      '/projects/powerbi-sales/cust-analysis-page.png',
      '/projects/powerbi-sales/prod-analysis-page.png',
      '/projects/powerbi-sales/data-model.png',
    ],
  },
  {
    id: 'power-bi-superstore-dashboard',
    title: 'Power BI — Superstore Analytics Dashboard',
    shortDescription:
      "Dashboard Power BI multi-pages sur les ventes Superstore : KPIs exécutifs, analyse par produit/état/segment, et exploration du profit via Decomposition Tree.",
    category: 'BI / Power BI',
    techStack: ['Power BI', 'DAX', 'Power Query', 'Decomposition Tree'],
    image: '/projects/superstore-powerbi/dashboard-overview.png',
    githubUrl: 'https://github.com/Hicham-Errihani/superstore-powerbi-dashboard',
    liveDemoUrl: null,
    status: 'Terminé',
    date: '2026-07',

    problem:
      "L'équipe de vente de Superstore avait besoin d'un tableau de bord interactif pour suivre les performances commerciales à travers différentes régions, segments de clientèle et catégories de produits, avec la capacité d'explorer la racine des problèmes de rentabilité.",
    stackDetailed: [
      { name: 'Power BI', role: 'Rapports multi-pages & KPIs exécutifs' },
      { name: 'DAX', role: 'Mesures & comparaisons YoY' },
      { name: 'Power Query', role: 'Nettoyage & transformation des données' },
      { name: 'Decomposition Tree', role: 'Exploration du profit par facteur' },
    ],
    steps: [
      { label: 'Dashboard exécutif', detail: 'KPIs de haut niveau : Sales, Profit, % Returned Orders, avec filtres par année.' },
      { label: 'Analyse segmentée', detail: 'Panneaux de filtre par produit, état et segment client, avec tooltip de série temporelle.' },
      { label: 'Deep Dive', detail: "Arbre de décomposition (Decomposition Tree) pour explorer dynamiquement le profit par catégorie et région." },
    ],
    challenges: [],
    result:
      "Rapport interactif 4 pages (Dashboard, Slicer Panel, Time Series Tooltip, Deep Dive) avec comparaison YoY (Sales +46,9%, Profit +48,4%) et exploration dynamique par sous-catégorie via arbre de décomposition.",
    proves: [
      'Maîtrise de Power BI pour des visualisations complexes et interactives',
      'Utilisation avancée de DAX pour des calculs personnalisés',
      "Intégration de fonctionnalités d'exploration de données (Decomposition Tree)",
    ],
    images: [
      '/projects/superstore-powerbi/dashboard-overview.png',
      '/projects/superstore-powerbi/dashboard-full.png',
      '/projects/superstore-powerbi/deep-dive.png',
    ],
  },
]
