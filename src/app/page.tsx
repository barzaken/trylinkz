import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSectionDemo } from "@/components/sections/FeaturesSection";
import { PointerHighlightDemo } from "@/components/sections/PointerHighlight";
import { ExpandableCardDemo } from "@/components/sections/ExpandableCards";
import { AnimatedBeamDemo } from "@/components/sections/AnimatedBeamDemo";
import { AboutSection } from "@/components/sections/AboutSection";
import { CTASection } from "@/components/sections/CTASection";
import { IconCloudDemo } from "@/components/sections/IconsDemo";
import ExpandableTechCards from "@/components/sections/ExpandableTechCards";
import { StepsExpalined } from "@/components/sections/StepsExpalined";
import { WhyLinkzSection } from "@/components/sections/WhyLinkzSection";
export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <StepsExpalined />
      <AnimatedBeamDemo />
      <PointerHighlightDemo />
      {/* <FeaturesSectionDemo /> */}
      <WhyLinkzSection />
      <IconCloudDemo />
      <AboutSection />
      {/* <ExpandableTechCards /> */}
      <ExpandableCardDemo />
      {/* <CTASection /> */}
    </div>
  );
}


