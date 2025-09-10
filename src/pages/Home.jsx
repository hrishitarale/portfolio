import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import Navbar from "../components/Navbar";
import ThemeToggle from "../components/ThemeToggle";
import SkillsSection from "../components/SkillsSection";
import ProjectsSections from "../components/ProjectsSections";
import ContactSection from "../components/ContactSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-background/80 text-foreground overflow-x-hidden">
      {/* Theme toggle */}
      <ThemeToggle />
      {/* nav bar */}
      <Navbar />
      {/* main */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSections />
        <ContactSection />
      </main>
    </div>
  );
};

export default Home;
