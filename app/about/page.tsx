import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about/about-hero"
import { MissionStatement } from "@/components/about/mission-statement"
import { TeamProfiles } from "@/components/about/team-profiles"
import { CompanyStats } from "@/components/about/company-stats"
import { ContactInfo } from "@/components/about/contact-info"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <AboutHero />
      <MissionStatement />
      <TeamProfiles />
      <CompanyStats />
      <ContactInfo />
      <Footer />
    </main>
  )
}
