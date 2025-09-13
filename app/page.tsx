import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ValueProposition } from "@/components/value-proposition"
import { SocialProof } from "@/components/social-proof"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ValueProposition />
      <SocialProof />
      <Footer />
    </main>
  )
}
