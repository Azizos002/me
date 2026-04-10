import { HeroSection } from "@/components/hero/HeroSection";
import { PortfolioNavbar } from "@/components/layout/PortfolioNavbar";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SectionShell } from "@/components/sections/SectionShell";
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

        <SectionShell
          id="contact"
          title="Contact"
          subtitle="Section framework ready for your contact channels and collaboration call-to-action."
        />
      </main>
    </>
  );
}
