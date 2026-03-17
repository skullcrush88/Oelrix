import { HeroSection } from "@/components/hero-section"
import { StorySection } from "@/components/story-section"
import { CollectionSection } from "@/components/collection-section"
import { PhilosophySection } from "@/components/philosophy-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-background">
      <HeroSection />
      <StorySection />
      <CollectionSection />
      <PhilosophySection />
      <Footer />
    </main>
  )
}
