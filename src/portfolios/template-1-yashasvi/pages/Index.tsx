// Template 1 — Yashasvi Style
// DarkVeil animated background, dark theme, glow effects
// Copy DarkVeil.jsx + DarkVeil.css from the source portfolio into this components/ folder

import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import ExperienceSection from "../components/ExperienceSection";
import ProjectsSection from "../components/ProjectsSection";
import EducationSection from "../components/EducationSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navigation />
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ExperienceSection />
    <ProjectsSection />
    <EducationSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
