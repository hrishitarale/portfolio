import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import Navbar from "../components/Navbar";
import StarBackground from "../components/StarBackground";
import ThemeToggle from "../components/ThemeToggle";
import SkillsSection from "../components/SkillsSection";
import ProjectsSections from "../components/ProjectsSections";
import ContactSection from "../components/ContactSection";
const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme toggle */}
      <ThemeToggle />
      {/* BG effects */}
      <StarBackground />

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

      {/* footer */}
    </div>
  );
};

export default Home;
