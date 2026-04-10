import { HeroSection } from "@/components/hero/HeroSection";
import { PortfolioFooter } from "@/components/layout/PortfolioFooter";
import { PortfolioNavbar } from "@/components/layout/PortfolioNavbar";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";

export default function Home() {
  return (
    <>
      <PortfolioNavbar />

      <main>
        <section id="home">
          <HeroSection />
        </section>

        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <PortfolioFooter />
    </>
  );
}
