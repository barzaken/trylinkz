import { HeroSection } from "@/components/sections/HeroSection";
import { WaysToUseSection } from "@/components/sections/WaysToUseSection";
import { FaqsSection } from "@/components/sections/FaqsSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { WorksOnPlatformsSection } from "@/components/sections/WorksOnPlatformsSection";
import { StepsExpalined } from "@/components/sections/StepsExpalined";
import { CompareSection } from "@/components/sections/CompareSection";
export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <StepsExpalined />
      <BenefitsSection />
      <WaysToUseSection />
      <CompareSection />
      <WorksOnPlatformsSection />
      <AboutSection />
      <FaqsSection />
    </div>
  );
}


