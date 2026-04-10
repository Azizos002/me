import { HeroSection } from "@/components/hero/HeroSection";
import { PortfolioNavbar } from "@/components/layout/PortfolioNavbar";
import { SectionShell } from "@/components/sections/SectionShell";

export default function Home() {
  return (
    <>
      <PortfolioNavbar />

      <main>
        <section id="home">
          <HeroSection />
        </section>

        <SectionShell
          id="about"
          title="About"
          subtitle="Section framework ready for your background, philosophy, and professional story."
        />

        <SectionShell
          id="skills"
          title="Skills"
          subtitle="Section framework ready for your technical stack, tools, and domain expertise."
        />

        <SectionShell
          id="projects"
          title="Projects"
          subtitle="Section framework ready for selected case studies and premium project showcases."
        />

        <SectionShell
          id="contact"
          title="Contact"
          subtitle="Section framework ready for your contact channels and collaboration call-to-action."
        />
      </main>
    </>
  );
}
