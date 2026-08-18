// Centralised project data. Adding a future project requires ONLY a new
// entry in this array — no JSX or display logic needs to change.
//
// Shape of each entry:
// {
//   id: string              — unique slug, used as React key and for routing/anchors
//   title: string
//   shortDescription: string  — 1-2 sentences, shown on the card
//   longDescription: string   — longer text, reserved for a future detail page
//   category: string          — used to build the filter buttons automatically
//   techStack: string[]       — tags shown on the card
//   image: string             — path under /public, or a full URL
//   githubUrl: string
//   liveDemoUrl: string | null
//   status: 'Terminé' | 'En cours'
//   date: string               — 'YYYY-MM', used for sorting (most recent first)
// }

export const projectsData = [
  {
    id: 'power-bi-superstore-dashboard',
    title: 'Power BI — Superstore Analytics Dashboard',
    shortDescription:
      "Dashboard Power BI multi-pages sur les ventes Superstore : KPIs exécutifs, analyse par produit/état/segment, et exploration du profit via Decomposition Tree.",
    longDescription:
      "Dashboard Power BI multi-pages sur les ventes Superstore : KPIs exécutifs (Sales, Profit, % Returned Orders), analyse par produit, état et segment, et Deep Dive avec Decomposition Tree pour explorer le profit par catégorie et région. Rapport interactif 4 pages (Dashboard, Slicer Panel, Time Series Tooltip, Deep Dive) avec comparaison YoY (Sales +46,9%, Profit +48,4%) et exploration dynamique par sous-catégorie via arbre de décomposition.",
    category: 'BI / Power BI',
    techStack: ['Power BI', 'DAX', 'Power Query', 'Decomposition Tree', 'Data Visualization'],
    image: '/projects/superstore-powerbi/dashboard-overview.png',
    githubUrl: 'https://github.com/Hicham-Errihani/superstore-powerbi-dashboard',
    liveDemoUrl: null,
    status: 'Terminé',
    date: '2026-07',
  },
]
