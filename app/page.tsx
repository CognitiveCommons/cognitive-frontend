import { Hero } from "@/components/sections/Hero";
import { ThreePillars } from "@/components/sections/ThreePillars";
import { ImpactStats } from "@/components/sections/ImpactStats";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero
        title="Democratizing AI for All Canadians"
        subtitle="Making artificial intelligence accessible, affordable, and ethical for Canadian SMEs and communities—not just tech elites."
        primaryCta="Start Free Training"
        primaryCtaLink="/courses"
        secondaryCta="Explore AI Tools"
        secondaryCtaLink="/tools"
      />

      <ThreePillars />

      <ImpactStats />

      {/* More sections will be added */}
    </main>
  );
}
