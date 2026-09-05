// Centralised project data. Adding a future project requires ONLY a new
// entry in this array — no JSX or display logic needs to change.

export const projectsData = [
  {
    id: 'manufacturing-downtime-oee-analytics-dashboard',
    title: 'Power BI — Manufacturing Downtime & OEE Analytics Dashboard',
    shortDescription:
      "Suite Power BI de diagnostic des temps d'arrêt de production : analyse Pareto des causes, benchmark de productivité, et simulation What-If d'un programme de formation ciblée sur les erreurs humaines.",
    category: 'BI / Power BI',
    techStack: ['Power BI', 'DAX', 'Star Schema', 'What-If Analysis'],
    image: '/projects/manufacturing-downtime-oee-analytics-dashboard/overview.png',
    githubUrl: 'https://github.com/Hicham-Errihani/manufacturing-downtime-oee-analytics-dashboard',
    liveDemoUrl: null,
    status: 'Terminé',
    date: '2026-09',

    problem:
      "L'usine ne disposait d'aucune vue consolidée sur le coût réel de ses temps d'arrêt ni sur leurs causes profondes. La direction production avait besoin de comprendre où se concentraient les pertes (produit, type d'erreur, cause), de comparer sa productivité nette à un benchmark sectoriel, et de pouvoir chiffrer à l'avance l'impact financier d'un programme de formation avant de l'engager.",
    stackDetailed: [
      { name: 'Power BI Desktop', role: 'Modélisation en étoile & rapport 2 pages (Overview / What-If Analysis)' },
      { name: 'DAX', role: "Mesures de coût de downtime, taux de productivité nette vs benchmark, mesures dynamiques du paramètre de simulation" },
      { name: 'Star Schema', role: 'Modélisation dimensionnelle par produit, type d\'erreur et cause de downtime' },
      { name: 'What-If Parameter', role: "Paramètre DAX de réduction du downtime, piloté par un slider interactif" },
    ],
    steps: [
      {
        label: 'Diagnostic (page Overview)',
        detail:
          "Vue d'ensemble du coût total des temps d'arrêt, comparaison du taux de productivité nette au benchmark industriel, tendance trimestrielle, répartition par type d'erreur (humaine vs machine) et analyse de Pareto des causes de downtime, avec croisement par produit.",
      },
      {
        label: 'Analyse de Pareto',
        detail:
          "Classement des causes de downtime (déversement produit, erreur de calibration, erreur d'étiquetage, erreur de codage de lot, changement de lot, ajustement machine) avec courbe de cumul, permettant d'isoler les causes responsables de la majorité du coût.",
      },
      {
        label: 'Simulation (page What-If Analysis)',
        detail:
          "Paramètre interactif de réduction du downtime (%) recalculant en temps réel l'économie annuelle estimée d'un programme de formation, avec comparaison Action vs No Action sur la tendance mensuelle et Idéal vs Actuel par cause et par produit.",
      },
    ],
    challenges: [
      {
        title: "Isoler l'impact de l'erreur humaine pour cibler la formation",
        detail:
          "L'erreur humaine représentant l'essentiel du coût de downtime, la modélisation devait distinguer précisément erreur humaine et erreur machine par cause et par produit, afin que les recommandations de formation ciblent les bons facteurs plutôt que l'ensemble de la production.",
      },
      {
        title: 'Simulation What-If dynamique et cohérente entre les deux pages',
        detail:
          "Le paramètre de réduction du downtime devait recalculer de façon cohérente l'économie annuelle, le coût mensuel idéal vs actuel et la prévision Action vs No Action, tout en restant synchronisé avec les filtres d'année de la page Overview.",
      },
    ],
    result:
      "Dashboard 2 pages permettant d'identifier les causes prioritaires de downtime (89 % liées à l'erreur humaine) et de chiffrer un potentiel d'économie annuelle significatif via un programme de formation ciblé, avec simulation interactive du taux de réduction avant décision.",
    proves: [
      "Construire un paramètre What-If DAX pour simuler l'impact financier d'une décision opérationnelle",
      "Réaliser une analyse de Pareto pour prioriser les actions correctives à fort impact",
      "Traduire une analyse de données en recommandations actionnables pour la direction production",
    ],
    images: [
      '/projects/manufacturing-downtime-oee-analytics-dashboard/overview.png',
      '/projects/manufacturing-downtime-oee-analytics-dashboard/what-if-analysis.png',
    ],
  },
  {
    id: 'kpi-analysis-dashboard',
    title: 'Power BI — Industrial KPI Analysis Dashboard',
    shortDescription:
      "Dashboard Power BI d'analyse des KPIs industriels : disponibilité machine, taux de qualité, OEE/OER et analyse des temps d'arrêt, avec drill-through par machine.",
    category: 'BI / Power BI',
    techStack: ['Power BI', 'DAX', 'Star Schema', 'Row Level Security'],
    image: '/projects/kpi-analysis-dashboard/data-quality.png',
    githubUrl: 'https://github.com/Hicham-Errihani/kpi-analysis-dashboard',
    liveDemoUrl: null,
    status: 'Terminé',
    date: '2026-09',

    problem:
      "Les équipes de production et de maintenance ne disposaient pas d'une vue centralisée sur la performance des machines industrielles. Il fallait un outil permettant de suivre en temps réel la disponibilité, la qualité et l'efficacité globale (OEE) de chaque machine, tout en identifiant rapidement les segments et les causes de temps d'arrêt.",
    stackDetailed: [
      { name: 'Power BI Desktop', role: 'Modélisation en étoile & rapport multi-pages' },
      { name: 'DAX', role: "Mesures OEE/OER, taux de disponibilité, qualité et performance" },
      { name: 'Star Schema', role: 'Modélisation dimensionnelle des données machine' },
      { name: 'Row Level Security (RLS)', role: "Restriction d'accès par périmètre utilisateur" },
      { name: 'Excel', role: 'Source de données & référentiel KPI (V4 KPI List)' },
    ],
    steps: [
      {
        label: 'Modélisation',
        detail:
          "Construction d'un schéma en étoile à partir des données machine (temps de fonctionnement, arrêts, quantités produites, rebuts), avec une table de référence KPI dédiée pour centraliser les définitions et seuils.",
      },
      {
        label: 'Mesures DAX',
        detail:
          "Calcul des indicateurs OEE (Overall Equipment Effectiveness) et OER (Overall Efficiency Ratio) en combinant disponibilité, performance et qualité, avec analyse des temps d'arrêt par cause et par machine.",
      },
      {
        label: '4 vues interactives',
        detail:
          "Data Quality Overview (fiabilité des données sources), Machine Analytics (vue d'ensemble des indicateurs de performance), Machine Details (détail par machine avec drill-through) et Machine Segments (analyse par segment/ligne de production).",
      },
    ],
    challenges: [
      {
        title: "Calcul de l'OEE à partir de données brutes hétérogènes",
        detail:
          "Les temps d'arrêt, quantités produites et rebuts provenaient de formats et granularités différents. Construction de mesures DAX combinant Disponibilité × Performance × Qualité pour obtenir un OEE fiable et comparable entre machines.",
      },
      {
        title: 'Sécurisation des accès par périmètre',
        detail:
          "Mise en place de Row Level Security pour que chaque responsable de ligne ne visualise que les machines de son périmètre, sans dupliquer le rapport.",
      },
    ],
    result:
      "Dashboard 4 pages permettant un suivi en temps réel de la disponibilité, de la qualité et de l'OEE par machine, avec drill-through pour investiguer les causes de sous-performance et sécurisation des accès par RLS.",
    proves: [
      "Construire des mesures DAX avancées pour des indicateurs composites (OEE, OER)",
      "Sécuriser un rapport Power BI avec Row Level Security (RLS)",
      "Concevoir un dashboard orienté maintenance et pilotage de production industrielle",
    ],
    images: [
      '/projects/kpi-analysis-dashboard/data-quality.png',
      '/projects/kpi-analysis-dashboard/machine-analytics.png',
      '/projects/kpi-analysis-dashboard/machine-details.png',
      '/projects/kpi-analysis-dashboard/machine-segments.png',
    ],
  },
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
  {
    id: 'pharmaceutical-sales-analysis-powerbi',
    title: 'Power BI — Pharmaceutical Sales Analysis',
    shortDescription:
      "Dashboard d'analyse des ventes pharmaceutiques : performance des distributeurs, efficacité des équipes commerciales et suivi des ventes par produit, canal et région.",
    category: 'BI / Power BI',
    techStack: ['Power BI', 'DAX', 'Power Query', 'Pandas', 'Star Schema'],
    image: '/projects/pharma-sales-powerbi/executive-summary.png',
    githubUrl: 'https://github.com/Hicham-Errihani/pharmaceutical-sales-analysis-powerbi',
    liveDemoUrl: null,
    status: 'Terminé',
    date: '2026-08',

    problem:
      "Une entreprise pharmaceutique avait besoin d'un reporting centralisé sur ses ventes (2017-2020) pour piloter la performance par distributeur, par équipe commerciale et par canal de vente (hôpital/pharmacie), avec la possibilité de descendre au niveau produit et région.",
    stackDetailed: [
      { name: 'Pandas', role: 'Exploration de données (EDA) initiale' },
      { name: 'Power Query', role: 'Nettoyage & transformation des données' },
      { name: 'Power BI Desktop', role: 'Modélisation en étoile & rapports' },
      { name: 'DAX', role: 'Mesures & indicateurs métier' },
    ],
    steps: [
      {
        label: 'Exploration (EDA)',
        detail:
          "Analyse initiale avec Pandas (notebook data-exploration.ipynb) pour vérifier les valeurs manquantes, les valeurs aberrantes (ex : ventes négatives), et déterminer les colonnes catégorielles vs numériques.",
      },
      {
        label: 'Modélisation en étoile',
        detail:
          "Séparation des données en dimensions (DIM-channel, DIM-subchannel, DIM-distributor, DIM-customer, DIM-country, DIM-city, DIM-sales-team, DIM-sales-rep, DIM-month, DIM-product) reliées à une table de faits FACT-sales, pour former un schéma en étoile complet.",
      },
      {
        label: 'Rapports interactifs',
        detail:
          "Trois rapports publiés : Executive Summary (vue d'ensemble), Distributor & Customer Analysis (drill-down par distributeur/client), et Sales Team Performance (drill-down par équipe, mois et année, 2017-2020).",
      },
    ],
    challenges: [
      {
        title: 'Nettoyage de valeurs incorrectes',
        detail:
          "Le dataset contenait des valeurs de ventes négatives et des incohérences à corriger avant modélisation, identifiées dès la phase d'exploration avec Pandas.",
      },
      {
        title: "Modèle en étoile à partir d'une table unique",
        detail:
          "Les données fournies étaient dans une seule table plate. J'ai identifié les dimensions et les faits, puis construit manuellement les relations pour obtenir un schéma en étoile propre et performant.",
      },
    ],
    result:
      "Trois rapports interactifs publiés couvrant 2017-2020 : $11,80 milliards de ventes totales analysées, avec identification du top produit (Ionclotide, $169M), de la top classe de produit (Analgésiques, $2,37Mds) et du top distributeur (Gerlach LLC, $3,5Mds). Drill-down disponible par distributeur, équipe commerciale et produit.",
    proves: [
      "Mener une exploration de données (EDA) avec Python/Pandas avant modélisation",
      "Construire un schéma en étoile à partir d'une source de données plate unique",
      "Livrer plusieurs rapports interactifs avec drill-down pour différents publics métier",
    ],
    images: [
      '/projects/pharma-sales-powerbi/executive-summary.png',
      '/projects/pharma-sales-powerbi/distributor-customer-analysis.png',
      '/projects/pharma-sales-powerbi/sales-team-performance.png',
      '/projects/pharma-sales-powerbi/data-model.png',
    ],
  },
  {
    id: 'power-bi-global-sales-dashboard',
    title: 'Power BI — Global Sales Dashboard',
    shortDescription:
      "Dashboard Power BI 4 pages sur les ventes Global Superstore : vue exécutive avec KPIs et tendances, analyse client détaillée avec heatmap de marge, analyse produit par catégorie, et fiche client 360 interactive.",
    category: 'BI / Power BI',
    techStack: ['Power BI', 'DAX', 'Power Query', 'Star Schema', 'Time Intelligence'],
    image: '/projects/global-sales-dashboard/executive.png',
    githubUrl: 'https://github.com/Hicham-Errihani/global-sales-dashboard',
    liveDemoUrl: null,
    status: 'Terminé',
    date: '2026-09',

    problem:
      "Global Superstore avait besoin d'un outil de pilotage couvrant trois angles complémentaires : une vue exécutive pour la santé commerciale globale, une vue client pour identifier les comptes à forte valeur et leur rentabilité, et une vue produit pour repérer les catégories et sous-catégories les plus performantes et les moins rentables.",
    stackDetailed: [
      { name: 'Power BI Desktop', role: 'Modélisation en étoile & 4 rapports interactifs' },
      { name: 'DAX', role: '18+ mesures : KPIs de base, Time Intelligence (YTD/MTD/QTD), mesure dynamique de titre' },
      { name: 'Power Query', role: 'Nettoyage & correction de types (typage en-US, dates, relations)' },
      { name: 'Star Schema', role: 'FactSales + DimCustomer, DimDate, DimGeography, DimProduct, DimShipMode' },
    ],
    steps: [
      {
        label: 'Modélisation & nettoyage',
        detail:
          "Construction d'un modèle en étoile à partir du dataset Global Superstore, avec correction des types de données (Profit/Sales/Quantity/Discount en en-US, Order Date converti en vrai type Date) et réparation des relations entre FactSales et les tables de dimension via Row.ID.",
      },
      {
        label: 'Mesures DAX',
        detail:
          "18 mesures organisées dans un dossier dédié _Mesures : indicateurs de base (Total Ventes, Total Profit, Marge %, Nb Commandes) et 12 mesures de Time Intelligence (YTD, MTD, QTD sur Ventes et Profit).",
      },
      {
        label: '4 pages interactives',
        detail:
          "Vue Exécutive (KPIs globaux, tendance mensuelle, ventes par marché et catégorie), Customer Detail (table clients avec heatmap de marge, Top 10, scatter Ventes/Profit par segment), Product Analysis (ventes par catégorie/sous-catégorie, table croisée avec marge) et Customer 360 (fiche client interactive filtrée par slicer, avec KPIs, tendance individuelle et répartition par catégorie).",
      },
    ],
    challenges: [
      {
        title: 'Relations cassées entre FactSales et les dimensions',
        detail:
          "Les jointures entre la table de faits et les dimensions Geography et ShipMode échouaient à cause d'un typage incohérent de Row.ID. Corrigé en forçant explicitement le type Int64 sur la clé dans Power Query avant modélisation.",
      },
      {
        title: 'Filtres Top N hérités lors de la duplication de visuels',
        detail:
          "La copie de visuels existants (pour accélérer la création de nouveaux graphiques) entraînait parfois l'héritage de filtres Top N ou de champs de granularité (zone Détails/Valeurs) devenus incohérents avec le nouveau contexte, nécessitant une vérification systématique des filtres après chaque duplication.",
      },
    ],
    result:
      "Dashboard 4 pages publié, avec un modèle de données propre et documenté, une identité visuelle cohérente (cartes flottantes, palette de couleurs unifiée) sur l'ensemble des pages, et une fiche client interactive permettant de visualiser en un coup d'œil les KPIs, la tendance d'achat et la répartition par catégorie de n'importe quel client.",
    proves: [
      "Concevoir un modèle en étoile propre à partir d'un dataset brut, avec diagnostic et correction de relations cassées",
      "Construire une bibliothèque de mesures DAX réutilisables, incluant du Time Intelligence (YTD/MTD/QTD)",
      "Structurer un dashboard multi-pages autour d'une logique métier claire (vue globale → client → produit)",
    ],
    images: [
      '/projects/global-sales-dashboard/executive.png',
      '/projects/global-sales-dashboard/customer-detail.png',
      '/projects/global-sales-dashboard/product-analysis.png',
      '/projects/global-sales-dashboard/customer-360.png',
    ],
  },
  {
    id: 'sales-dashboard-powerbi-superstore',
    title: 'Power BI — Sales Executive Dashboard',
    shortDescription:
      "Dashboard exécutif Power BI sur les ventes Global Superstore : suivi des KPIs par région, alertes de performance, simulation d'augmentation de prix et filtrage Top N clients.",
    category: 'BI / Power BI',
    techStack: ['Power BI', 'DAX', 'Power Query', 'What-If Analysis'],
    image: '/projects/sales-dashboard-powerbi-superstore/1.webp',
    githubUrl: 'https://github.com/Hicham-Errihani/sales-dashboard-powerbi-superstore',
    liveDemoUrl: null,
    status: 'Terminé',
    date: '2026-08',

    problem:
      "Besoin d'un dashboard exécutif permettant de suivre la santé commerciale par région avec des alertes automatiques sur les zones sous-performantes, et de simuler l'impact d'une augmentation de prix sur les ventes.",
    stackDetailed: [
      { name: 'Power BI Desktop', role: 'Modélisation & rapport exécutif' },
      { name: 'DAX', role: 'Mesures de statut, alertes conditionnelles, simulation What-If' },
      { name: 'Power Query', role: 'Nettoyage & transformation des données' },
    ],
    steps: [
      { label: 'KPIs exécutifs', detail: 'Suivi de Total Sales, Évolution Sales %, Marge % Contexte avec indicateur de statut santé.' },
      { label: 'Alertes régionales', detail: "Table Région x Évolution Sales % avec statut visuel (Au-dessus/En dessous/Proche objectif) par marge de contexte." },
      { label: 'Simulation What-If', detail: "Paramètre d'augmentation de prix ajustable, recalculant dynamiquement les indicateurs." },
    ],
    challenges: [],
    result:
      "Dashboard exécutif interactif avec filtrage par année et Top N clients, permettant d'identifier rapidement les régions sous-performantes et de simuler des scénarios de prix.",
    proves: [
      "Construire des indicateurs de statut conditionnels (santé, alertes) en DAX",
      "Implémenter un paramètre de simulation What-If interactif",
      "Structurer un dashboard exécutif orienté prise de décision rapide",
    ],
    images: [
      '/projects/sales-dashboard-powerbi-superstore/1.webp',
      '/projects/sales-dashboard-powerbi-superstore/2.webp',
      '/projects/sales-dashboard-powerbi-superstore/3.webp',
    ],
  },
  // ==================== NOUVEAU PROJET AJOUTÉ ====================
  {
    id: 'vendor-performance-analysis-sql-python-powerbi',
    title: 'Vendor Performance Analysis — SQL, Python & Power BI',
    shortDescription:
      "Pipeline ETL complet (SQL → Python → Power BI) pour l'analyse des performances fournisseurs. Suivi des KPIs OTIF, taux de défauts et écarts de coûts. Tableau de bord interactif pour l'aide à la décision en achats.",
    category: 'BI / Power BI',
    techStack: ['SQL', 'Python (Pandas)', 'Power BI', 'DAX', 'ETL Pipeline'],
    image: '/projects/vendor-performance-analysis-sql-python-powerbi/dashboard.png',
    githubUrl: 'https://github.com/Hicham-Errihani/vendor_performance_analysis_sql_python_powerbi',
    liveDemoUrl: null,
    status: 'Terminé',
    date: '2026-09',

    problem:
      "L'équipe achats ne disposait d'aucune vue consolidée sur la performance des fournisseurs. Les données étaient éparpillées entre plusieurs systèmes (ERP, fichiers Excel), et les rapports de performance étaient générés manuellement chaque mois, ce qui prenait un temps considérable et ne permettait pas une réaction rapide face aux retards ou aux problèmes de qualité.",

    stackDetailed: [
      { name: 'SQL (PostgreSQL)', role: "Extraction des données brutes depuis les tables transactionnelles (commandes, livraisons, qualité)" },
      { name: 'Python (Pandas, SQLAlchemy)', role: "ETL : nettoyage, transformation et calcul des KPIs agrégés (OTIF, taux de défauts, écart de coût)" },
      { name: 'Power BI Desktop', role: "Modélisation en étoile & tableau de bord interactif avec drill-down par fournisseur et catégorie" },
      { name: 'DAX', role: "Mesures de performance (OTIF %, Qualité %, Coût total, Écarts)" },
    ],

    steps: [
      {
        label: 'Extraction & Nettoyage (SQL & Python)',
        detail:
          "Extraction des données de commandes, livraisons et qualité depuis une base SQL via des requêtes optimisées. Nettoyage des valeurs manquantes et des doublons avec Pandas."
      },
      {
        label: 'Calcul des KPIs (Python)',
        detail:
          "Calcul des indicateurs métier clés : OTIF (On-Time In-Full) combinant délais et quantité, Taux de défauts par fournisseur, et Écart de coût (prix négocié vs facturé)."
      },
      {
        label: 'Visualisation & Analyse (Power BI)',
        detail:
          "Création d'un tableau de bord interactif permettant de filtrer par fournisseur, catégorie de produit et période. Analyse de Pareto des causes d'écart et tendances de performance."
      },
    ],

    challenges: [
      {
        title: 'Automatisation du pipeline ETL',
        detail:
          "Mise en place d'un pipeline reproductible qui ingère les données brutes, les transforme et génère les KPIs sans intervention manuelle, réduisant le temps de reporting de plusieurs jours à quelques minutes."
      },
      {
        title: 'Calcul complexe de l\'OTIF sur plusieurs critères',
        detail:
          "L'OTIF exige de considérer à la fois le délai de livraison et la quantité/complétude de la commande. La logique a été implémentée en Python pour agréger les données au niveau fournisseur."
      },
    ],

    result:
      "Tableau de bord automatisé permettant de visualiser la performance de tous les fournisseurs en temps réel. Identification des fournisseurs à risque (retards récurrents, qualité défaillante) et mise en évidence d'un potentiel d'économie annuel significatif en renégociant les contrats des fournisseurs les plus performants.",

    proves: [
      "Concevoir un pipeline ETL complet de bout en bout (SQL → Python → Power BI)",
      "Automatiser le calcul de KPIs métier complexes (OTIF, taux de défauts)",
      "Transformer une problématique métier (performance fournisseur) en un outil d'aide à la décision interactif",
    ],

    images: [
      '/projects/vendor-performance-analysis-sql-python-powerbi/dashboard.png',
    ],
  },
];