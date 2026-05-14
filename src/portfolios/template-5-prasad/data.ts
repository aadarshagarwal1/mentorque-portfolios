// ============================================================
// TEMPLATE 5 — PRASAD STYLE
// Video bg hero + floating particles, light white cards
// Replace values here to personalise the portfolio
// ============================================================

export const person = {
  name: "Morgan Patel",
  title: "Data Analyst with 3+ years of experience in building dashboards, automating data workflows, and analyzing large datasets",
  location: "Dublin, Ireland",
  phone: "+353 89 000 0000",
  email: "morgan.patel@email.com",
  linkedin: "https://www.linkedin.com/in/morgan-patel/",
  profileImage: "/placeholder_pfp/man4.avif",
  // Pexels free video — replace with any public .mp4 URL
  heroBgVideo: "https://videos.pexels.com/video-files/1722882/1722882-uhd_2560_1440_25fps.mp4",
  heroBgImage: "/hero-background-modern.jpg",
};

export const about = {
  summary:
    "Data Analyst with 3+ years of experience in building dashboards, automating data workflows, and analyzing large datasets using SQL, Python, Databricks, and Power BI. Delivered data insights and automation that contributed to a 60% uplift across multiple business performance metrics. Skilled in stakeholder collaboration, problem-solving, and delivering insights with clarity and impact.",
  quickFacts: [
    { label: "Location", value: "Dublin, Ireland" },
    { label: "Education", value: "Master's in Data Analytics" },
    { label: "Experience", value: "3+ years" },
    { label: "Specialization", value: "Data Analytics & Business Intelligence" },
  ],
};

export const skills = [
  { title: "Programming & Data Analysis", skills: ["Python", "R programming", "Pandas", "Numpy", "SQL", "MySQL"] },
  { title: "Data Visualization & BI Tools", skills: ["Power BI", "Tableau", "Data Visualization", "DAX query", "Analytical skills"] },
  { title: "Cloud & Data Platforms", skills: ["AWS", "GCP", "Databricks", "ETL", "Data Warehousing"] },
  { title: "Machine Learning & AI", skills: ["LLM", "RAG", "Matplotlib", "Scikit-learn", "TensorFlow", "XGBoost", "CatBoost", "LightGBM"] },
  { title: "Business Tools & Frameworks", skills: ["Microsoft Excel", "Microsoft Word", "KPI frameworks", "Jira", "Confluence", "Stakeholder management"] },
  { title: "Professional Skills", skills: ["Presentation skills", "Problem-solving", "Data-driven decision making", "Automation"] },
];

export const experiences = [
  {
    title: "Data Analyst",
    company: "Retail Analytics Corp",
    location: "Dublin, Ireland",
    dates: "Jan 2024 – May 2025",
    responsibilities: [
      "Identified sales gaps across 500K+ records, driving corrective actions that boosted quarterly sales by 60%.",
      "Unified POS, CRM, and marketing data via SQL/Excel, improving data reliability by 90% and enabling €150K cost savings.",
      "Built Python time-series model revealing intent patterns, increasing conversions by 18% and optimizing budget allocation.",
      "Delivered Power BI insights that cut low-ROI spend by 25% and accelerated data-driven decisions across regions.",
    ],
  },
  {
    title: "Data Analyst",
    company: "Enterprise Software Ltd",
    location: "Pune, India",
    dates: "March 2021 – Aug 2022",
    responsibilities: [
      "Improved sales forecasting accuracy by 20% using SQL, Excel, and automated ETL pipelines on 5M+ records.",
      "Built Power BI dashboards with real-time insights across 12 units and 50+ KPIs, speeding decisions by 30%.",
      "Reduced stockouts by 15% by defining requirements and building predictive models for inventory planning.",
      "Improved new-product forecasting by 20% using A/B testing and statistical modeling across 10+ market segments.",
    ],
  },
];

export const projects = [
  {
    title: "Sales Performance Dashboard",
    description: "Built an interactive Power BI dashboard with robust data modelling, DAX measures, and drill-through visuals to analyse sales, profit, delivery performance, and key KPIs across regions, categories, and customer segments.",
    image: "/project-placeholder-1.jpg",
    technologies: ["Power BI", "DAX query", "CSV", "Data Visualization", "KPI Analysis"],
  },
  {
    title: "Fraud Detection Model",
    description: "Built a multi-model classification architecture to overcome severe data sparsity and class imbalance, implementing and tuning various boosting algorithms (XGBoost, CatBoost, LightGBM).",
    image: "/project-placeholder-2.jpg",
    technologies: ["Python", "Pandas", "Scikit-learn", "TensorFlow", "XGBoost", "CatBoost", "LightGBM"],
  },
];

export const education = [
  {
    institution: "City University",
    degree: "Master's Degree in Data Analytics",
    dates: "2022 – 2023",
    coursework: [],
  },
  {
    institution: "National University",
    degree: "BE in Computer Science Engineering",
    dates: "2015 – 2020",
    coursework: [],
  },
];

export const certifications = [
  {
    title: "PL-300: Microsoft Power BI Data Analyst",
    issuer: "Microsoft",
    description: "Power BI, DAX query, RLS, Data cleaning. Demonstrates proficiency in data preparation, data modeling, DAX, data analysis, report building, visualization best practices, performance optimization, and managing/deploying Power BI solutions.",
  },
  {
    title: "DP-100: Microsoft Azure Data Scientist Associate",
    issuer: "Microsoft",
    description: "LLM, RAG, Azure. Skilled in data prep, feature engineering, ML model development, Azure ML pipelines and deployment, plus experience with LLM applications and RAG systems.",
  },
];
