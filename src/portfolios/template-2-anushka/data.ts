// ============================================================
// TEMPLATE 2 — ANUSHKA STYLE
// Dark purple gradient, Framer Motion, ProfileCard, ScrollStack
// Replace values here to personalise the portfolio
// ============================================================

export const person = {
  name: "Jordan Lee",
  handle: "jordanlee",
  title: "Data Analyst | Analytics & BI",
  status: "Open to Opportunities",
  location: "Dublin, Ireland",
  phone: "+353 89 000 0000",
  email: "jordan.lee@email.com",
  linkedin: "https://www.linkedin.com/in/jordan-lee/",
  linkedinHandle: "jordan-lee",
  profileImage: "/placeholder_pfp/woman1.avif",
  bio: "Detail-orientated data analyst with 1.5 years of experience leveraging data across IT, healthcare, and entertainment to drive business outcomes. I transform complex datasets into insights that improve customer experience, optimise processes, and support strategy—using SQL, Python, R, Excel, and Power BI. MSc Computer Science (Data Analytics) from a leading university, with Google Data Analytics and Microsoft Power BI certifications.",
  rotatingTexts: [
    "actionable insights.",
    "clear dashboards.",
    "smarter decisions.",
    "better outcomes.",
    "trusted metrics.",
    "measurable impact.",
  ],
};

export const experiences = [
  {
    title: "Data Analyst",
    company: "Tech Solutions Pvt Ltd, Mumbai, India",
    period: "April 2021 – December 2022",
    highlights: [
      "Boosted stakeholder decision-making by 30% with interactive Power BI dashboards visualising engagement and revenue trends.",
      "Increased user retention by 15% via data storytelling insights on customer behaviour.",
      "Enhanced campaign ROI by 12% by collaborating with the marketing team to produce visual performance reports.",
      "Cut manual reporting time by 30% by automating recurring reports and data summaries with Python (Pandas) and LLM-based scripts.",
      "Processed and validated 50,000+ records using SQL within a 5-member team, ensuring accurate datasets for reliable dashboard insights.",
      "Improved data reliability and reporting quality by cleaning and transforming datasets.",
      "Enabled trend analysis for non-technical teams by transforming complex data into charts and KPIs.",
    ],
  },
];

export const skillCategories = [
  {
    title: "Languages & Tools",
    color: "from-purple-500 to-purple-600",
    skills: ["Python", "SQL", "R", "Excel", "Power BI", "DAX", "Google Analytics", "Git"],
  },
  {
    title: "Databases & ML / AI",
    color: "from-purple-600 to-purple-700",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Microsoft SQL Server", "Pandas", "NumPy", "PyTorch", "Scikit-learn", "TensorFlow", "Predictive modelling", "LLMs"],
  },
  {
    title: "Analytics & Soft Skills",
    color: "from-purple-500 to-violet-600",
    skills: ["A/B testing", "EDA", "ETL pipelines", "Data cleaning", "Statistics", "Communication", "Problem-solving", "Analytical thinking", "Adaptability", "Teamwork"],
  },
];

export const education = [
  {
    degree: "Master of Science in Computer Science — Data Analytics",
    school: "University of Galway",
    details: "Ireland",
    period: "2022 – 2023",
  },
  {
    degree: "Bachelor of Electronics and Telecommunication Engineering",
    school: "University of Mumbai",
    details: "India",
    period: "2018 – 2022",
  },
];

export const projects = [
  {
    title: "Customer Churn Prediction Dashboard",
    description: "Built an end-to-end ML pipeline to predict customer churn using logistic regression and random forest models. Deployed an interactive Power BI dashboard for stakeholders to monitor churn risk in real time.",
    technologies: ["Python", "Scikit-learn", "Power BI", "SQL", "Pandas"],
    githubUrl: "https://github.com/username/project",
  },
  {
    title: "Sales Performance Analytics",
    description: "Designed and automated a monthly sales reporting system using Python and Excel, reducing manual effort by 40%. Created visualisations that surfaced regional trends and top-performing product lines.",
    technologies: ["Python", "Excel", "Pandas", "Matplotlib", "SQL"],
    githubUrl: "https://github.com/username/project",
  },
];

export const certificates = [
  { title: "Google Data Analytics Professional Certificate", description: "Data analysis foundations, SQL, spreadsheets, and data visualization.", year: "2026" },
  { title: "Microsoft Power BI Data Analyst", description: "Power BI dashboards, DAX, and data modelling.", year: "2025" },
  { title: "Python for Data Science", description: "Python programming fundamentals for data analysis.", year: "2022" },
  { title: "Introduction to Data Science", description: "Data science concepts and methodologies.", year: "2025" },
  { title: "The Complete AI Guide", description: "Comprehensive AI concepts and practical applications." },
  { title: "Six Sigma Foundations", description: "Process improvement and quality foundations." },
];
