// Template 5 — Prasad Style
// Video bg hero + floating particles, light white cards (not dark)
// Distinct from Template 1: video instead of DarkVeil shader, white cards instead of dark

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
