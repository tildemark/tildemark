import { HeroSection } from "@/components/HeroSection";
import { ExecutivePillars } from "@/components/ExecutivePillars";
import { NavLinks } from "@/components/NavLinks";
import { ExperimentsSection } from "@/components/ExperimentsSection";
import { ToolboxSection } from "@/components/ToolboxSection";
import { VisualsSection } from "@/components/VisualsSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 space-y-6">
      {/* Executive Hero & Summary */}
      <HeroSection />

      {/* Strategic Focus Pillars (IT Leadership, DPO, Maritime IoT) */}
      <ExecutivePillars />

      {/* Core Properties (CV, Solutions, Tech Blog) */}
      <NavLinks />

      {/* Flagship Projects & Systems */}
      <ExperimentsSection />

      {/* Enterprise Tooling & Tech Stack */}
      <ToolboxSection />

      {/* Spotting & Fleet Documentation */}
      <VisualsSection />

      {/* Direct Contact & Footer */}
      <Footer />
    </main>
  );
}
