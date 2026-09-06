// Centralised project data. Adding a future project requires ONLY a new
// entry in this array — no JSX or display logic needs to change.

export const projectsData = [
  {
    id: 'manufacturing-downtime-oee-analytics-dashboard',
    title: 'Power BI — Manufacturing Downtime & OEE Analytics Dashboard',
    shortDescription:
      "Power BI suite for diagnosing production downtime: Pareto analysis of causes, productivity benchmarking, and What-If simulation of a targeted training program on human errors.",
    category: 'BI / Power BI',
    techStack: ['Power BI', 'DAX', 'Star Schema', 'What-If Analysis'],
    image: '/projects/manufacturing-downtime-oee-analytics-dashboard/overview.png',
    githubUrl: 'https://github.com/Hicham-Errihani/manufacturing-downtime-oee-analytics-dashboard',
    liveDemoUrl: null,
    status: 'Completed',
    date: '2026-09',

    problem:
      "The plant had no consolidated view of the real cost of its downtime or its root causes. Production management needed to understand where losses were concentrated (product, error type, cause), compare its net productivity to an industry benchmark, and be able to quantify the financial impact of a training program before committing to it.",
    stackDetailed: [
      { name: 'Power BI Desktop', role: 'Star Schema modeling & 2-page report (Overview / What-If Analysis)' },
      { name: 'DAX', role: "Downtime cost measures, net productivity rate vs benchmark, dynamic measures for the simulation parameter" },
      { name: 'Star Schema', role: 'Dimensional modeling by product, error type, and downtime cause' },
      { name: 'What-If Parameter', role: "DAX parameter for downtime reduction, driven by an interactive slider" },
    ],
    steps: [
      {
        label: 'Diagnosis (Overview page)',
        detail:
          "Overview of total downtime cost, comparison of net productivity rate to industry benchmark, quarterly trend, breakdown by error type (human vs machine), and Pareto analysis of downtime causes, cross-referenced by product.",
      },
      {
        label: 'Pareto Analysis',
        detail:
          "Ranking of downtime causes (product spillage, calibration error, labeling error, batch coding error, batch change, machine adjustment) with cumulative curve, isolating the causes responsible for the majority of the cost.",
      },
      {
        label: 'Simulation (What-If Analysis page)',
        detail:
          "Interactive downtime reduction parameter (%) recalculating in real-time the estimated annual savings of a training program, with Action vs No Action comparison on the monthly trend and Ideal vs Actual by cause and product.",
      },
    ],
    challenges: [
      {
        title: "Isolating the impact of human error to target training",
        detail:
          "Since human error accounted for the majority of downtime cost, the modeling had to precisely distinguish human error from machine error by cause and product, so training recommendations targeted the right factors rather than the entire production line.",
      },
      {
        title: 'Dynamic and consistent What-If simulation between the two pages',
        detail:
          "The downtime reduction parameter had to consistently recalculate annual savings, ideal vs actual monthly cost, and the Action vs No Action forecast, while staying synchronized with the year filters on the Overview page.",
      },
    ],
    result:
      "2-page dashboard identifying priority downtime causes (89% linked to human error) and quantifying significant annual savings potential through a targeted training program, with interactive simulation of the reduction rate before decision-making.",
    proves: [
      "Building a DAX What-If parameter to simulate the financial impact of an operational decision",
      "Performing a Pareto analysis to prioritize high-impact corrective actions",
      "Translating data analysis into actionable recommendations for production management",
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
      "Power BI dashboard for analyzing industrial KPIs: machine availability, quality rate, OEE/OER, and downtime analysis, with drill-through by machine.",
    category: 'BI / Power BI',
    techStack: ['Power BI', 'DAX', 'Star Schema', 'Row Level Security'],
    image: '/projects/kpi-analysis-dashboard/data-quality.png',
    githubUrl: 'https://github.com/Hicham-Errihani/kpi-analysis-dashboard',
    liveDemoUrl: null,
    status: 'Completed',
    date: '2026-09',

    problem:
      "Production and maintenance teams lacked a centralized view of industrial machine performance. They needed a tool to track real-time availability, quality, and overall effectiveness (OEE) of each machine, while quickly identifying segments and causes of downtime.",
    stackDetailed: [
      { name: 'Power BI Desktop', role: 'Star Schema modeling & multi-page report' },
      { name: 'DAX', role: "OEE/OER measures, availability, quality, and performance rates" },
      { name: 'Star Schema', role: 'Dimensional modeling of machine data' },
      { name: 'Row Level Security (RLS)', role: "Access restriction by user scope" },
      { name: 'Excel', role: 'Data source & KPI reference (V4 KPI List)' },
    ],
    steps: [
      {
        label: 'Modeling',
        detail:
          "Built a Star Schema from machine data (run time, stops, produced quantities, scrap), with a dedicated KPI reference table to centralize definitions and thresholds.",
      },
      {
        label: 'DAX Measures',
        detail:
          "Calculated OEE (Overall Equipment Effectiveness) and OER (Overall Efficiency Ratio) indicators by combining availability, performance, and quality, with downtime analysis by cause and machine.",
      },
      {
        label: '4 interactive views',
        detail:
          "Data Quality Overview (reliability of source data), Machine Analytics (overview of performance indicators), Machine Details (per-machine detail with drill-through), and Machine Segments (analysis by segment/production line).",
      },
    ],
    challenges: [
      {
        title: "Calculating OEE from heterogeneous raw data",
        detail:
          "Downtime, production quantities, and scrap came in different formats and granularities. Built DAX measures combining Availability × Performance × Quality to get reliable and comparable OEE across machines.",
      },
      {
        title: 'Securing access by scope',
        detail:
          "Implemented Row Level Security so each line manager only views machines in their scope, without duplicating the report.",
      },
    ],
    result:
      "4-page dashboard enabling real-time tracking of availability, quality, and OEE by machine, with drill-through to investigate causes of underperformance and secured access via RLS.",
    proves: [
      "Building advanced DAX measures for composite indicators (OEE, OER)",
      "Securing a Power BI report with Row Level Security (RLS)",
      "Designing a dashboard oriented towards maintenance and industrial production control",
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
      "Complete executive dashboard on AdventureWorks: from SQL Server Star Schema to DAX measures and budget tracking.",
    category: 'BI / Power BI',
    techStack: ['Power BI', 'SQL Server', 'DAX', 'Star Schema'],
    image: '/projects/powerbi-sales/exec-summary-page.png',
    githubUrl: 'https://github.com/Hicham-Errihani/power-bi-sales-customer-analysis',
    liveDemoUrl: null,
    status: 'Completed',
    date: '2026-07',

    problem:
      "AdventureWorks, an online retailer of bikes and equipment, had no centralized reporting on its 2016-2017 sales. The sales management (Head of Sales) needed an overview by customer, product, and city with budget tracking; the sales representatives (Sales Rep) needed detailed analyses by customer and product, dynamically filterable by year, month, and product attributes.",
    stackDetailed: [
      { name: 'Power BI Desktop', role: 'Modeling & multi-page reports' },
      { name: 'DAX', role: 'Business measures & indicators' },
      { name: 'SQL Server / T-SQL', role: 'Business views on AdventureWorksDW2019' },
      { name: 'Power Query (M)', role: 'Import, cleaning & transformation' },
      { name: 'Star Schema', role: 'Manual dimensional modeling' },
      { name: 'Power BI Service', role: 'Publishing & read-only web access' },
    ],
    steps: [
      {
        label: 'Extraction',
        detail:
          "Exploration (EDA) of the AdventureWorksDW2019 warehouse to identify 7 source tables, then creation of 4 SQL views (vw_date, vw_customer, vw_product, vw_internet_sales) that encapsulate business logic and decouple Power BI from the internal database structure.",
      },
      {
        label: 'Transformation',
        detail:
          "Imported the 4 views into Power Query as Dim_Customer, Dim_Product, Dim_Date, and Fact_Internet_Sales, plus imported the Budget.xlsx file as Fact_Budget. Cleaning: corrected types and column headers.",
      },
      {
        label: 'Modeling & delivery',
        detail:
          "Manually built a Star Schema: Fact_Internet_Sales and Fact_Budget linked to dimensions Dim_Customer, Dim_Product, and Dim_Date. Three reports published on Power BI Service.",
      },
    ],
    challenges: [
      {
        title: 'Time filtering on a restricted dataset',
        detail:
          "Data only covers 2016 and 2017. The vw_internet_sales view explicitly filters these two years (WHERE LEFT(OrderDateKey, 4) IN (2017, 2016)) to avoid exposing out-of-scope data and distorting growth indicators.",
      },
      {
        title: 'Decoupling via SQL views rather than direct queries',
        detail:
          "Instead of querying warehouse tables directly from Power BI, I created 4 SQL Server views that encapsulate business logic. If the selection logic changes, only the view is modified — no changes required on the Power BI side.",
      },
      {
        title: 'Manual Star Schema modeling',
        detail:
          "The imported views and budget table are not automatically linked by Power BI. I manually built the relationships in the data model to form a clean Star Schema.",
      },
    ],
    result:
      "Three interactive reports published (Executive Summary, Customer Analysis, Product Analysis) replacing the absence of centralized reporting. Sales vs Budget KPIs: $22.19M in actual sales against $30.3M budgeted (variance of -26.75%), with YoY growth of 179.9% and detail by city, customer, and product.",
    proves: [
      "Design a SQL → Power Query → Star Schema → DAX pipeline, documented end-to-end",
      "Write SQL Server views (T-SQL) as an abstraction layer between the database and the BI tool",
      "Manually build a Star Schema and exploit it with DAX measures (KPI, variance, YoY)",
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
      "Multi-page Power BI dashboard on Superstore sales: executive KPIs, analysis by product/state/segment, and profit exploration via Decomposition Tree.",
    category: 'BI / Power BI',
    techStack: ['Power BI', 'DAX', 'Power Query', 'Decomposition Tree'],
    image: '/projects/superstore-powerbi/dashboard-overview.png',
    githubUrl: 'https://github.com/Hicham-Errihani/superstore-powerbi-dashboard',
    liveDemoUrl: null,
    status: 'Completed',
    date: '2026-07',

    problem:
      "The Superstore sales team needed an interactive dashboard to track business performance across different regions, customer segments, and product categories, with the ability to explore the root of profitability issues.",
    stackDetailed: [
      { name: 'Power BI', role: 'Multi-page reports & executive KPIs' },
      { name: 'DAX', role: 'Measures & YoY comparisons' },
      { name: 'Power Query', role: 'Data cleaning & transformation' },
      { name: 'Decomposition Tree', role: 'Profit exploration by factor' },
    ],
    steps: [
      { label: 'Executive Dashboard', detail: 'High-level KPIs: Sales, Profit, % Returned Orders, with year filters.' },
      { label: 'Segmented Analysis', detail: 'Filter panels by product, state, and customer segment, with time series tooltips.' },
      { label: 'Deep Dive', detail: "Decomposition Tree to dynamically explore profit by category and region." },
    ],
    challenges: [],
    result:
      "Interactive 4-page report (Dashboard, Slicer Panel, Time Series Tooltip, Deep Dive) with YoY comparisons (Sales +46.9%, Profit +48.4%) and dynamic exploration by sub-category via a decomposition tree.",
    proves: [
      'Mastery of Power BI for complex, interactive visualizations',
      'Advanced use of DAX for custom calculations',
      "Integration of data exploration features (Decomposition Tree)",
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
      "Pharmaceutical sales analysis dashboard: distributor performance, sales team effectiveness, and tracking of sales by product, channel, and region.",
    category: 'BI / Power BI',
    techStack: ['Power BI', 'DAX', 'Power Query', 'Pandas', 'Star Schema'],
    image: '/projects/pharma-sales-powerbi/executive-summary.png',
    githubUrl: 'https://github.com/Hicham-Errihani/pharmaceutical-sales-analysis-powerbi',
    liveDemoUrl: null,
    status: 'Completed',
    date: '2026-08',

    problem:
      "A pharmaceutical company needed centralized reporting on its sales (2017-2020) to manage performance by distributor, sales team, and sales channel (hospital/pharmacy), with the ability to drill down to product and region level.",
    stackDetailed: [
      { name: 'Pandas', role: 'Initial Data Exploration (EDA)' },
      { name: 'Power Query', role: 'Data cleaning & transformation' },
      { name: 'Power BI Desktop', role: 'Star Schema modeling & reports' },
      { name: 'DAX', role: 'Measures & business indicators' },
    ],
    steps: [
      {
        label: 'Exploration (EDA)',
        detail:
          "Initial analysis with Pandas (data-exploration.ipynb notebook) to check for missing values, outliers (e.g., negative sales), and determine categorical vs numeric columns.",
      },
      {
        label: 'Star Schema modeling',
        detail:
          "Separated data into dimensions (DIM-channel, DIM-subchannel, DIM-distributor, DIM-customer, DIM-country, DIM-city, DIM-sales-team, DIM-sales-rep, DIM-month, DIM-product) linked to a fact table (FACT-sales) to form a complete Star Schema.",
      },
      {
        label: 'Interactive reports',
        detail:
          "Three published reports: Executive Summary (overview), Distributor & Customer Analysis (drill-down by distributor/customer), and Sales Team Performance (drill-down by team, month, and year, 2017-2020).",
      },
    ],
    challenges: [
      {
        title: 'Cleaning incorrect values',
        detail:
          "The dataset contained negative sales values and inconsistencies that needed correcting before modeling, identified during the exploration phase with Pandas.",
      },
      {
        title: "Star Schema from a single table",
        detail:
          "The provided data was in a single flat table. I identified dimensions and facts, then manually built relationships to obtain a clean and performant Star Schema.",
      },
    ],
    result:
      "Three interactive reports published covering 2017-2020: $11.80 billion in total sales analyzed, identifying the top product (Ionclotide, $169M), top product class (Analgesics, $2.37B), and top distributor (Gerlach LLC, $3.5B). Drill-down available by distributor, sales team, and product.",
    proves: [
      "Conducting data exploration (EDA) with Python/Pandas before modeling",
      "Building a Star Schema from a single flat data source",
      "Delivering multiple interactive reports with drill-down for different business audiences",
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
      "4-page Power BI dashboard on Global Superstore sales: executive view with KPIs and trends, detailed customer analysis with margin heatmap, product analysis by category, and interactive customer 360 view.",
    category: 'BI / Power BI',
    techStack: ['Power BI', 'DAX', 'Power Query', 'Star Schema', 'Time Intelligence'],
    image: '/projects/global-sales-dashboard/executive.png',
    githubUrl: 'https://github.com/Hicham-Errihani/global-sales-dashboard',
    liveDemoUrl: null,
    status: 'Completed',
    date: '2026-09',

    problem:
      "Global Superstore needed a management tool covering three complementary angles: an executive view for overall business health, a customer view to identify high-value accounts and their profitability, and a product view to spot the most and least profitable categories and sub-categories.",
    stackDetailed: [
      { name: 'Power BI Desktop', role: 'Star Schema modeling & 4 interactive reports' },
      { name: 'DAX', role: '18+ measures: base KPIs, Time Intelligence (YTD/MTD/QTD), dynamic title measure' },
      { name: 'Power Query', role: 'Cleaning & type correction (en-US typing, dates, relationships)' },
      { name: 'Star Schema', role: 'FactSales + DimCustomer, DimDate, DimGeography, DimProduct, DimShipMode' },
    ],
    steps: [
      {
        label: 'Modeling & cleaning',
        detail:
          "Built a Star Schema from the Global Superstore dataset, correcting data types (Profit/Sales/Quantity/Discount in en-US, Order Date converted to a real Date type) and fixing relationships between FactSales and dimension tables via Row.ID.",
      },
      {
        label: 'DAX Measures',
        detail:
          "18 measures organized in a dedicated _Measures folder: base indicators (Total Sales, Total Profit, Margin %, Order Count) and 12 Time Intelligence measures (YTD, MTD, QTD on Sales and Profit).",
      },
      {
        label: '4 interactive pages',
        detail:
          "Executive View (global KPIs, monthly trend, sales by market and category), Customer Detail (customer table with margin heatmap, Top 10, scatter Sales/Profit by segment), Product Analysis (sales by category/sub-category, cross table with margin), and Customer 360 (interactive customer profile filtered by slicer, with KPIs, individual trend, and category breakdown).",
      },
    ],
    challenges: [
      {
        title: 'Broken relationships between FactSales and dimensions',
        detail:
          "Joins between the fact table and the Geography and ShipMode dimensions failed due to inconsistent typing of Row.ID. Fixed by explicitly forcing Int64 type on the key in Power Query before modeling.",
      },
      {
        title: 'Inherited Top N filters when duplicating visuals',
        detail:
          "Copying existing visuals (to speed up creating new charts) sometimes led to inherited Top N filters or granularity fields (Details/Values area) that became inconsistent with the new context, requiring systematic verification of filters after each duplication.",
      },
    ],
    result:
      "Published 4-page dashboard with a clean, documented data model, coherent visual identity (floating cards, unified color palette) across all pages, and an interactive customer profile allowing quick visualization of KPIs, purchase trends, and category breakdown for any customer.",
    proves: [
      "Designing a clean Star Schema from a raw dataset, diagnosing and fixing broken relationships",
      "Building a library of reusable DAX measures, including Time Intelligence (YTD/MTD/QTD)",
      "Structuring a multi-page dashboard around a clear business logic (global view → customer → product)",
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
      "Executive Power BI dashboard on Global Superstore sales: KPI tracking by region, performance alerts, price increase simulation, and Top N customer filtering.",
    category: 'BI / Power BI',
    techStack: ['Power BI', 'DAX', 'Power Query', 'What-If Analysis'],
    image: '/projects/sales-dashboard-powerbi-superstore/1.webp',
    githubUrl: 'https://github.com/Hicham-Errihani/sales-dashboard-powerbi-superstore',
    liveDemoUrl: null,
    status: 'Completed',
    date: '2026-08',

    problem:
      "Needed an executive dashboard to track business health by region with automatic alerts on underperforming areas, and to simulate the impact of a price increase on sales.",
    stackDetailed: [
      { name: 'Power BI Desktop', role: 'Modeling & executive report' },
      { name: 'DAX', role: 'Status measures, conditional alerts, What-If simulation' },
      { name: 'Power Query', role: 'Data cleaning & transformation' },
    ],
    steps: [
      { label: 'Executive KPIs', detail: 'Track Total Sales, Sales % Change, Margin % context with health status indicator.' },
      { label: 'Regional Alerts', detail: "Region x Sales % Change table with visual status (Above/Below/Close to target) by context margin." },
      { label: 'What-If Simulation', detail: "Adjustable price increase parameter, dynamically recalculating indicators." },
    ],
    challenges: [],
    result:
      "Interactive executive dashboard with year and Top N customer filtering, enabling quick identification of underperforming regions and simulation of pricing scenarios.",
    proves: [
      "Building conditional status indicators (health, alerts) in DAX",
      "Implementing an interactive What-If simulation parameter",
      "Structuring an executive dashboard oriented towards quick decision-making",
    ],
    images: [
      '/projects/sales-dashboard-powerbi-superstore/1.webp',
      '/projects/sales-dashboard-powerbi-superstore/2.webp',
      '/projects/sales-dashboard-powerbi-superstore/3.webp',
    ],
  },
  // ==================== NEW PROJECT ADDED ====================
  {
    id: 'vendor-performance-analysis-sql-python-powerbi',
    title: 'Vendor Performance Analysis — SQL, Python & Power BI',
    shortDescription:
      "Complete ETL pipeline (SQL → Python → Power BI) for analyzing vendor performance. Tracking OTIF KPIs, defect rates, and cost variances. Interactive dashboard for procurement decision-making.",
    category: 'BI / Power BI',
    techStack: ['SQL', 'Python (Pandas)', 'Power BI', 'DAX', 'ETL Pipeline'],
    image: '/projects/vendor-performance-analysis-sql-python-powerbi/dashboard.png',
    githubUrl: 'https://github.com/Hicham-Errihani/vendor_performance_analysis_sql_python_powerbi',
    liveDemoUrl: null,
    status: 'Completed',
    date: '2026-09',

    problem:
      "The procurement team had no consolidated view of vendor performance. Data was scattered across multiple systems (ERP, Excel files), and performance reports were manually generated each month, which was incredibly time-consuming and prevented rapid reactions to delays or quality issues.",

    stackDetailed: [
      { name: 'SQL (PostgreSQL)', role: "Extraction of raw data from transactional tables (orders, deliveries, quality)" },
      { name: 'Python (Pandas, SQLAlchemy)', role: "ETL: cleaning, transformation, and calculation of aggregated KPIs (OTIF, defect rate, cost variance)" },
      { name: 'Power BI Desktop', role: "Star Schema modeling & interactive dashboard with drill-down by vendor and category" },
      { name: 'DAX', role: "Performance measures (OTIF %, Quality %, Total Cost, Variances)" },
    ],

    steps: [
      {
        label: 'Extraction & Cleaning (SQL & Python)',
        detail:
          "Extracted order, delivery, and quality data from a SQL database via optimized queries. Cleaned missing values and duplicates with Pandas."
      },
      {
        label: 'KPI Calculation (Python)',
        detail:
          "Calculated key business indicators: OTIF (On-Time In-Full) combining timeliness and quantity, Defect rate per vendor, and Cost variance (negotiated vs invoiced price)."
      },
      {
        label: 'Visualization & Analysis (Power BI)',
        detail:
          "Created an interactive dashboard allowing filtering by vendor, product category, and period. Pareto analysis of variance causes and performance trends."
      },
    ],

    challenges: [
      {
        title: 'Automating the ETL pipeline',
        detail:
          "Set up a reproducible pipeline that ingests raw data, transforms it, and generates KPIs without manual intervention, reducing reporting time from several days to a few minutes."
      },
      {
        title: 'Complex OTIF calculation on multiple criteria',
        detail:
          "OTIF requires considering both delivery time and order quantity/completeness. The logic was implemented in Python to aggregate data at the vendor level."
      },
    ],

    result:
      "Automated dashboard enabling real-time visualization of all vendor performance. Identification of at-risk vendors (recurring delays, poor quality) and highlighting of significant annual savings potential by renegotiating contracts with the best-performing vendors.",

    proves: [
      "Designing a complete end-to-end ETL pipeline (SQL → Python → Power BI)",
      "Automating the calculation of complex business KPIs (OTIF, defect rates)",
      "Transforming a business problem (vendor performance) into an interactive decision-support tool",
    ],

    images: [
      '/projects/vendor-performance-analysis-sql-python-powerbi/dashboard.png',
    ],
  },
];