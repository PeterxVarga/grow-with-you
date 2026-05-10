import { HeroSection } from "@/components/sections/HeroSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { PainPointsSection } from "@/components/sections/PainPointsSection";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <PainPointsSection />
      <HowItWorksSection />
    </main>
  );
}
