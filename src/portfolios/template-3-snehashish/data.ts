// ============================================================
// TEMPLATE 3 — SNEHASHISH STYLE
// Dark video background, carousel achievements, gradient text
// Replace values here to personalise the portfolio
// ============================================================

export const person = {
  name: "Sam Rivera",
  title: "Full-Stack Software Engineer",
  bio: "Experienced in building production-grade systems on cloud platforms and applying advanced optimization models to solve complex problems. Contributed to $1M+ systems using React, Python, and cloud technologies.",
  location: "United States",
  email: "sam.rivera@email.com",
  phone: "+1 (555) 000-0000",
  linkedin: "https://linkedin.com/in/sam-rivera",
  github: "https://github.com/sam-rivera",
  profileImage: "/placeholder_pfp/man3.avif",
  // Pexels free video — replace with any public .mp4 URL
  heroBgVideo: "https://videos.pexels.com/video-files/1722882/1722882-uhd_2560_1440_25fps.mp4",
};

export const about = {
  summary: "Full-stack SDE intern experienced in building production-grade document-processing pipelines on cloud platforms and applying advanced optimization models to solve NP-hard resource allocation problems.",
  highlights: [
    { metric: "$1M+ Investment Enablement", detail: "Contributed to a $1M+ enterprise system by delivering a key proof-of-concept using React/Next.js and Python." },
    { metric: "37% Cost Reduction", detail: "Reduced asset-tracking costs by 37% by developing a device-management portal for 10,000+ employees." },
  ],
  skillCategories: [
    { icon: "Code", title: "Languages", skills: ["Python", "Java", "JavaScript", "TypeScript", "SQL", "HTML/CSS"] },
    { icon: "Zap", title: "Frameworks", skills: ["Spring Boot", "React", "Next.js", "FastAPI", "Pytest", "JUnit", "Pandas"] },
    { icon: "Cloud", title: "Cloud & DevOps", skills: ["AWS", "Azure", "Docker", "CI/CD", "Git", "GCP", "Kubernetes", "Terraform"] },
    { icon: "Database", title: "Data & Databases", skills: ["PostgreSQL", "MongoDB", "OpenSearch", "Kafka", "Redis", "NoSQL"] },
  ],
  coreConcepts: ["System Design", "Distributed Systems", "Microservices", "Algorithms", "Data Structures"],
};

export const experiences = [
  {
    company: "Enterprise Software Co.",
    position: "Software Development Engineer Intern",
    location: "Bengaluru, KA",
    duration: "Jan 2024 – May 2024",
    logo: "E",
    achievements: [
      { impact: "$1M+ investment enablement", description: "Aided in enabling a $1M+ investment for an enterprise-wide Performance Management System by developing and delivering a key proof-of-concept in ReactJS and Fluent UI." },
      { impact: "37% cost reduction", description: "Minimized asset-tracking costs by 37% by building a full-stack Next.js portal that integrated with Azure AD, Graph API, and internal inventory systems for 10,000+ employees." },
      { impact: "25% efficiency improvement", description: "Shrank manual deployment effort by 25% by enhancing the team's CI/CD pipeline with automated build triggers and deployment scripts." },
    ],
    technologies: ["ReactJS", "Next.js", "Fluent UI", "Azure AD", "Graph API", "CI/CD"],
  },
  {
    company: "FinTech Capital Ltd.",
    position: "Software Development Engineer Intern",
    location: "Chennai, TN",
    duration: "Jul 2023 – Aug 2023",
    logo: "F",
    achievements: [
      { impact: "99%+ processing time reduction", description: "Contributed towards decreasing credit report processing time by 99%+ (from 3 months to 4 minutes) by building an automated document-processing pipeline using AWS Lambda, ECS, and Spring Boot microservices." },
      { impact: "80% lookup time reduction", description: "Cut analyst data lookup time by 80% by engineering an indexing solution in Amazon OpenSearch, featuring faceted search and on-demand CSV export capabilities for multi-gigabyte datasets." },
      { impact: "Data corruption elimination", description: "Verified data against a rule set of 40+ business logic checks programmatically, by architecting a validation pipeline, eliminating previously common data corruption errors." },
    ],
    technologies: ["AWS Lambda", "ECS", "Spring Boot", "Amazon OpenSearch", "Python", "Microservices"],
  },
];

export const keyAchievements = [
  { title: "$1M+ Investment Enablement", description: "Aided in enabling a $1M+ investment for an enterprise-wide Performance Management System.", company: "Enterprise Software Co.", category: "Business Impact", gradient: "from-green-500 to-emerald-500", metrics: ["$1M+ Investment", "Enterprise System", "Proof-of-Concept"] },
  { title: "37% Cost Reduction", description: "Minimized asset-tracking costs by 37% by building a full-stack Next.js portal for 10,000+ employees.", company: "Enterprise Software Co.", category: "Cost Optimization", gradient: "from-blue-500 to-cyan-500", metrics: ["37% Cost Reduction", "10,000+ Employees", "Full-Stack Portal"] },
  { title: "25% Efficiency Improvement", description: "Shrank manual deployment effort by 25% by enhancing the team's CI/CD pipeline.", company: "Enterprise Software Co.", category: "Process Optimization", gradient: "from-purple-500 to-pink-500", metrics: ["25% Efficiency Gain", "CI/CD Pipeline", "Automated Deployment"] },
  { title: "99%+ Processing Time Reduction", description: "Decreased credit report processing time by 99%+ (from 3 months to 4 minutes) using AWS Lambda, ECS, and Spring Boot.", company: "FinTech Capital Ltd.", category: "Performance", gradient: "from-orange-500 to-red-500", metrics: ["99%+ Time Reduction", "3 months → 4 minutes", "AWS Pipeline"] },
  { title: "80% Lookup Time Reduction", description: "Cut analyst data lookup time by 80% by engineering an indexing solution in Amazon OpenSearch.", company: "FinTech Capital Ltd.", category: "Data Optimization", gradient: "from-indigo-500 to-blue-500", metrics: ["80% Lookup Reduction", "OpenSearch", "Multi-GB Datasets"] },
  { title: "Data Corruption Elimination", description: "Architected a validation pipeline with 40+ business logic checks, eliminating data corruption errors.", company: "FinTech Capital Ltd.", category: "Quality Assurance", gradient: "from-teal-500 to-green-500", metrics: ["40+ Business Rules", "Validation Pipeline", "Zero Corruption"] },
];

export const projects = [
  {
    title: "Medical Image Classification Pipeline",
    description: "Advanced machine learning pipeline for medical image classification using novel CNN-UMAP-SVM architecture to improve early detection accuracy.",
    category: "Machine Learning",
    gradient: "from-purple-500 to-pink-500",
    achievements: [
      { metric: "12% F1 Score Increase", description: "Enhanced model performance through innovative CNN-UMAP-SVM pipeline architecture." },
      { metric: "<2% False Negatives", description: "Achieved critical accuracy threshold for medical diagnostics applications." },
    ],
    technologies: ["Python", "TensorFlow", "Keras", "scikit-learn", "UMAP", "OpenCV", "Pandas", "NumPy"],
    githubUrl: "https://github.com/username/project",
  },
  {
    title: "Resource Optimization System",
    description: "Intelligent resource allocation system using Integer Linear Programming to solve NP-hard assignment problems with real-time optimization capabilities.",
    category: "Optimization",
    gradient: "from-blue-500 to-cyan-500",
    achievements: [
      { metric: "90% Time Reduction", description: "Dramatically reduced manual allocation time through automated ILP optimization." },
      { metric: "<200ms Response Time", description: "Real-time API performance enabling interactive optimization workflows." },
    ],
    technologies: ["Python", "FastAPI", "PuLP", "OR-Tools", "Flutter", "Dart", "Firebase", "GitHub Actions"],
    githubUrl: "https://github.com/username/project",
  },
];

export const education = [
  { degree: "MS in Computer Science", school: "State University", period: "Aug 2024 – May 2026", gpa: "4.0", logo: "SU", coursework: ["Efficient Deep Learning", "Secure and Reliable Systems", "NLP", "Hardware Security"] },
  { degree: "B.Tech in Computer Science Engineering", school: "National Institute of Technology", period: "Oct 2020 – May 2024", gpa: "8.84/10", logo: "NIT", coursework: ["First Class with Distinction — highest academic honor"] },
];

export const summaryStats = [
  { value: "$1M+", label: "Investment Enabled" },
  { value: "37%", label: "Cost Reduction" },
  { value: "99%+", label: "Time Reduction" },
  { value: "10K+", label: "Users Impacted" },
];
