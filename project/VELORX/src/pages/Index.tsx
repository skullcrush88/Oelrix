import CrosshairCursor from "@/components/CrosshairCursor";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import FeatureSection from "@/components/FeatureSection";
import SpecsSection from "@/components/SpecsSection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";

import featureSilence from "@/assets/feature-silence.jpg";
import featureIntelligent from "@/assets/feature-intelligent.jpg";
import featureCharged from "@/assets/feature-charged.jpg";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <CrosshairCursor />
      <HeroSection />
      <StatsSection />
      <FeatureSection
        title="ENGINEERED SILENCE"
        description="Every surface, every seal, every material has been selected to eliminate noise. What remains is pure, uninterrupted motion — a cabin so quiet you can hear yourself think."
        imageSrc={featureSilence}
        imageAlt="Close-up of VELOX aerodynamic body panel detail"
      />
      <FeatureSection
        title="INTELLIGENT BY DESIGN"
        description="An architecture built around anticipation. The vehicle learns your patterns, adapts to your preferences, and evolves with every journey — becoming more yours with each mile."
        imageSrc={featureIntelligent}
        imageAlt="VELOX intelligent dashboard and digital interface"
        reversed
      />
      <FeatureSection
        title="CHARGED IN MINUTES"
        description="800V ultra-rapid charging architecture delivers 80% capacity in under 18 minutes. The infrastructure of tomorrow, engineered for the demands of today."
        imageSrc={featureCharged}
        imageAlt="VELOX charging port with blue illumination"
      />
      <SpecsSection />
      <CTASection />
      <FooterSection />
    </main>
  );
};

export default Index;
