import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { NetworkHero } from "@/components/network/network-hero"
import { NetworkFeatures } from "@/components/network/network-features"
import { NetworkDiagram } from "@/components/network/network-diagram"
import { NetworkBenefits } from "@/components/network/network-benefits"

export default function NetworkSecurityPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <NetworkHero />
      <NetworkFeatures />
      <NetworkDiagram />
      <NetworkBenefits />
      <Footer />
    </main>
  )
}
