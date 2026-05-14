// Template 4 — Chandini Style
// Photo background with layered overlays, resume download button, KeyAchievements section
// Carousel on mobile for experience achievements, Dialog for certifications

import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import ExperienceSection from "../components/ExperienceSection";
import KeyAchievementsSection from "../components/KeyAchievementsSection";
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
    <KeyAchievementsSection />
    <ProjectsSection />
    <EducationSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
