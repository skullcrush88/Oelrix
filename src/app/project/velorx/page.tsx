"use client";

import CrosshairCursor from "../../../../project/VELORX/src/components/CrosshairCursor";
import HeroSection from "../../../../project/VELORX/src/components/HeroSection";
import StatsSection from "../../../../project/VELORX/src/components/StatsSection";
import FeatureSection from "../../../../project/VELORX/src/components/FeatureSection";
import SpecsSection from "../../../../project/VELORX/src/components/SpecsSection";
import CTASection from "../../../../project/VELORX/src/components/CTASection";
import FooterSection from "../../../../project/VELORX/src/components/FooterSection";

export default function VelorxPage() {
  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500&family=JetBrains+Mono:wght@400;500&display=swap");

        .velorx-native-shell {
          --background: 0 0% 3%;
          --foreground: 0 0% 100%;
          --surface: 0 0% 7%;
          --card: 0 0% 7%;
          --card-foreground: 0 0% 100%;
          --popover: 0 0% 7%;
          --popover-foreground: 0 0% 100%;
          --primary: 0 0% 100%;
          --primary-foreground: 0 0% 3%;
          --secondary: 0 0% 7%;
          --secondary-foreground: 0 0% 100%;
          --muted: 0 0% 15%;
          --muted-foreground: 0 0% 55%;
          --accent: 221 83% 53%;
          --accent-foreground: 0 0% 100%;
          --destructive: 0 84% 60%;
          --destructive-foreground: 0 0% 100%;
          --border: 0 0% 100% / 0.1;
          --input: 0 0% 100% / 0.1;
          --ring: 221 83% 53%;
          --radius: 0px;
          --chart-1: 221 83% 53%;
          --chart-2: 221 66% 46%;
          --chart-3: 221 50% 38%;
          --chart-4: 221 38% 30%;
          --chart-5: 221 25% 22%;
          --sidebar-background: 0 0% 3%;
          --sidebar-foreground: 0 0% 100%;
          --sidebar-primary: 221 83% 53%;
          --sidebar-primary-foreground: 0 0% 100%;
          --sidebar-accent: 0 0% 7%;
          --sidebar-accent-foreground: 0 0% 100%;
          --sidebar-border: 0 0% 100% / 0.1;
          --sidebar-ring: 221 83% 53%;
          --glow-primary: 221 83% 53% / 0.15;
          --glow-intense: 221 83% 53% / 0.4;

          background: hsl(var(--background));
          color: hsl(var(--foreground));
          font-family: "Inter", sans-serif;
          font-weight: 300;
          letter-spacing: 0.01em;
          cursor: none;
        }

        .velorx-native-shell * {
          cursor: none;
        }

        .velorx-native-shell .font-display {
          font-family: "Bebas Neue", sans-serif;
          line-height: 0.85;
          letter-spacing: -0.02em;
        }

        .velorx-native-shell .font-mono-tech {
          font-family: "JetBrains Mono", monospace;
          text-transform: uppercase;
          font-size: 0.7rem;
          letter-spacing: 0.2em;
        }

        .velorx-native-shell .velox-border {
          border: 1px solid hsl(var(--border));
        }

        .velorx-native-shell .velox-button {
          border: 2px solid hsl(var(--foreground));
          background: transparent;
          padding: 1rem 3rem;
          transition: all 500ms;
        }

        .velorx-native-shell .velox-button:hover {
          background-color: hsl(var(--accent));
          border-color: hsl(var(--accent));
          letter-spacing: 0.5em;
        }

        @keyframes electric-glow {
          0%,
          100% {
            filter: drop-shadow(0 0 20px hsl(var(--glow-primary)));
          }
          50% {
            filter: drop-shadow(0 0 40px hsl(var(--glow-intense)));
          }
        }

        @keyframes word-reveal {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes slide-in-left {
          from {
            transform: translateX(-100px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slide-in-right {
          from {
            transform: translateX(100px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .velorx-native-shell .animate-electric-glow {
          animation: electric-glow 3s ease-in-out infinite;
        }

        .velorx-native-shell .animate-word-reveal {
          animation: word-reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .velorx-native-shell .animate-slide-left {
          animation: slide-in-left 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .velorx-native-shell .animate-slide-right {
          animation: slide-in-right 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      <div className="velorx-native-shell overflow-x-hidden">
        <main className="overflow-x-hidden">
          <CrosshairCursor />
          <HeroSection />
          <StatsSection />
          <FeatureSection
            title="ENGINEERED SILENCE"
            description="Every surface, every seal, every material has been selected to eliminate noise. What remains is pure, uninterrupted motion - a cabin so quiet you can hear yourself think."
            imageSrc="/velorx/feature-silence.jpg"
            imageAlt="Close-up of VELOX aerodynamic body panel detail"
          />
          <FeatureSection
            title="INTELLIGENT BY DESIGN"
            description="An architecture built around anticipation. The vehicle learns your patterns, adapts to your preferences, and evolves with every journey - becoming more yours with each mile."
            imageSrc="/velorx/feature-intelligent.jpg"
            imageAlt="VELOX intelligent dashboard and digital interface"
            reversed
          />
          <FeatureSection
            title="CHARGED IN MINUTES"
            description="800V ultra-rapid charging architecture delivers 80% capacity in under 18 minutes. The infrastructure of tomorrow, engineered for the demands of today."
            imageSrc="/velorx/feature-charged.jpg"
            imageAlt="VELOX charging port with blue illumination"
          />
          <SpecsSection />
          <CTASection />
          <FooterSection />
        </main>
      </div>
    </>
  );
}
