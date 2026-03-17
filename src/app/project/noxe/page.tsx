"use client";

import { HeroSection } from "../../../../project/NOXE/components/hero-section";
import { StorySection } from "../../../../project/NOXE/components/story-section";
import { CollectionSection } from "../../../../project/NOXE/components/collection-section";
import { PhilosophySection } from "../../../../project/NOXE/components/philosophy-section";
import { Footer } from "../../../../project/NOXE/components/footer";

export default function NoxePage() {
  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,400&display=swap");

        .noxe-native-shell {
          --background: 0 0% 8%;
          --foreground: 38 25% 95%;
          --card: 0 0% 12%;
          --card-foreground: 38 25% 95%;
          --popover: 0 0% 10%;
          --popover-foreground: 38 25% 95%;
          --primary: 43 42% 66%;
          --primary-foreground: 0 0% 8%;
          --secondary: 0 0% 15%;
          --secondary-foreground: 38 25% 95%;
          --muted: 0 0% 20%;
          --muted-foreground: 0 0% 60%;
          --accent: 43 42% 66%;
          --accent-foreground: 0 0% 8%;
          --border: 0 0% 25%;
          --input: 0 0% 15%;
          --ring: 43 42% 66%;
          --chart-1: 43 42% 66%;
          --chart-2: 43 35% 56%;
          --chart-3: 43 28% 46%;
          --chart-4: 43 22% 36%;
          --chart-5: 43 16% 28%;
          --radius: 0rem;
          --sidebar: 0 0% 10%;
          --sidebar-foreground: 38 25% 95%;
          --sidebar-primary: 43 42% 66%;
          --sidebar-primary-foreground: 0 0% 8%;
          --sidebar-accent: 0 0% 15%;
          --sidebar-accent-foreground: 38 25% 95%;
          --sidebar-border: 0 0% 25%;
          --sidebar-ring: 43 42% 66%;

          font-family: "Inter", sans-serif;
          background: hsl(var(--background));
          color: hsl(var(--foreground));
        }

        .noxe-native-shell h1,
        .noxe-native-shell h2,
        .noxe-native-shell h3,
        .noxe-native-shell h4,
        .noxe-native-shell h5,
        .noxe-native-shell h6,
        .noxe-native-shell .font-serif {
          font-family: "Cormorant Garamond", serif;
        }

        .noxe-native-shell .tracking-ultra-wide {
          letter-spacing: 0.3em;
        }

        .noxe-native-shell .tracking-luxury {
          letter-spacing: 0.15em;
        }
      `}</style>

      <div className="noxe-native-shell">
        <main className="bg-background text-foreground">
          <HeroSection />
          <StorySection />
          <CollectionSection />
          <PhilosophySection />
          <Footer />
        </main>
      </div>
    </>
  );
}
