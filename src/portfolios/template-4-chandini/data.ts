// ============================================================
// TEMPLATE 4 — CHANDINI STYLE
// Photo background with overlays, resume download, KeyAchievements
// Replace values here to personalise the portfolio
// ============================================================

export const person = {
  name: "Taylor Kim",
  title: "Software Engineer | React | JavaScript | TypeScript | Frontend Specialist",
  subtitle: "Building scalable, high-performance web applications with modern JavaScript frameworks and enterprise-level impact.",
  location: "Dublin, Ireland",
  email: "taylor.kim@email.com",
  linkedin: "https://www.linkedin.com/in/taylor-kim/",
  linkedinHandle: "linkedin.com/in/taylor-kim",
  github: "https://github.com/taylor-kim",
  profileImage: "/placeholder_pfp/woman1.avif",
  heroBgImage: "/hero-background-modern.jpg",
  resumePath: "/Taylor_Kim_Resume.pdf",
  resumeFilename: "Taylor_Kim_Resume.pdf",
};

export const about = {
  paragraphs: [
    "Software Engineer with 2+ years of experience developing scalable enterprise web applications using React, TypeScript, and modern frontend technologies.",
    "Engineered platforms for enterprise clients, delivering performance improvements, real-time data solutions, and user-focused interfaces.",
    "Passionate about building clean, maintainable code and optimizing user experience through data-driven decisions.",
  ],
  quickFacts: [
    { label: "Location", value: "Dublin, Ireland" },
    { label: "Education", value: "Postgraduate Diploma in Business Analytics" },
    { label: "Experience", value: "2+ years" },
    { label: "Focus", value: "React, TypeScript, enterprise frontend" },
  ],
};

export const skills = [
  { title: "Frontend", skills: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Redux"] },
  { title: "Backend", skills: ["Node.js", "Express.js", "REST APIs"] },
  { title: "Tools", skills: ["Git", "Jira", "Jenkins", "GitHub Actions", "AWS"] },
  { title: "Testing", skills: ["Jest", "React Testing Library"] },
];

export const experiences = [
  {
    company: "Global Consulting Group",
    position: "React Developer",
    location: "India",
    duration: "Dec 2021 – March 2024",
    logoSrc: "/company-logo-placeholder.png",
    logoAlt: "Global Consulting Group",
    achievements: [
      { impact: "Scalable UI components", description: "Developed scalable and reusable UI components using React, TypeScript, HTML5, and CSS, improving maintainability across enterprise dashboards." },
      { impact: "Enterprise DRaaS platform", description: "Engineered responsive enterprise UIs for a cloud DRaaS platform — REST integrations for infrastructure views, disaster recovery telemetry, and real-time monitoring." },
      { impact: "Redux & predictable state", description: "Implemented Redux-based state management and component architecture, ensuring predictable data flow and improved application stability." },
      { impact: "35% faster page loads", description: "Improved application performance by implementing lazy loading, code splitting, and modular architecture, reducing page load time by 35%." },
      { impact: "Agile & delivery", description: "Collaborated with backend teams in Agile environments, contributing to CI/CD pipelines and automated testing." },
    ],
    technologies: ["React", "TypeScript", "Redux", "HTML5", "CSS", "REST APIs", "Jest", "CI/CD"],
  },
];

export const keyAchievements = [
  "Improved application performance by 35%",
  "Reduced UI bugs by 25%",
  "Built 20+ reusable components",
  "Integrated 8+ REST APIs",
];

export const projects = [
  {
    title: "Enterprise Dashboard Platform",
    subtitle: "Cloud Infrastructure Monitoring",
    highlights: [
      "Built real-time infrastructure monitoring dashboard with React and TypeScript.",
      "Integrated REST APIs for disaster recovery telemetry and live status updates.",
      "Implemented lazy loading and code splitting, reducing load time by 35%.",
    ],
    stack: ["React", "TypeScript", "Redux", "REST APIs", "CSS Modules"],
    image: "/project-placeholder-1.jpg",
    links: [{ label: "GitHub", href: "https://github.com/username/project" }],
  },
  {
    title: "Healthcare Data Portal",
    subtitle: "Patient Data Management System",
    highlights: [
      "Developed a responsive patient data management interface with role-based access control.",
      "Reduced manual data entry errors by 40% through form validation and guided workflows.",
      "Delivered accessible UI components meeting WCAG 2.1 AA standards.",
    ],
    stack: ["React", "TypeScript", "Node.js", "Express", "Jest"],
    image: "/project-placeholder-2.jpg",
    links: [{ label: "GitHub", href: "https://github.com/username/project" }],
  },
];

export const education = [
  {
    institution: "Dublin Business School",
    degree: "Postgraduate Diploma in Business Analytics",
    dates: "April 2024 – April 2025",
    coursework: ["Data Analysis & Visualization", "Predictive Analytics & Machine Learning", "Business Intelligence", "Applied Research Methods", "Programming for Data Analytics (Python)"],
    certifications: [
      { title: "Python Full Stack Development", issuer: "Online Platform", date: "2023", description: "Full-stack development with Python and modern frameworks." },
      { title: "Public Speaking & Communication", issuer: "Professional Institute", date: "2022", description: "Advanced communication and presentation skills." },
      { title: "Software Engineering Internship", issuer: "Tech Company", date: "2021", description: "Internship completion certificate." },
      { title: "Corporate Training Programme", issuer: "Enterprise Corp", date: "2022", description: "Enterprise software development training." },
    ],
  },
  {
    institution: "National Institute of Technology",
    degree: "Bachelor of Engineering (Computer Science)",
    dates: "Aug 2017 – Aug 2021",
    coursework: ["Data Structures & Algorithms", "Object-Oriented Programming", "DBMS", "Web Technologies", "Software Engineering", "Cloud Computing", "Artificial Intelligence"],
    certifications: [],
  },
];
