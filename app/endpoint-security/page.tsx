import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { EndpointHero } from "@/components/endpoint/endpoint-hero"
import { EndpointFeatures } from "@/components/endpoint/endpoint-features"
import { EndpointDashboard } from "@/components/endpoint/endpoint-dashboard"
import { EndpointUseCases } from "@/components/endpoint/endpoint-use-cases"
import { EndpointBenefits } from "@/components/endpoint/endpoint-benefits"

export default function EndpointSecurityPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <EndpointHero />
      <EndpointFeatures />
      <EndpointDashboard />
      <EndpointUseCases />
      <EndpointBenefits />
      <Footer />
    </main>
  )
}
