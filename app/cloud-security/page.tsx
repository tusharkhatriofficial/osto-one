import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CloudHero } from "@/components/cloud/cloud-hero"
import { CloudAppLayer } from "@/components/cloud/cloud-app-layer"
import { CloudScanners } from "@/components/cloud/cloud-scanners"
import { CloudPosture } from "@/components/cloud/cloud-posture"

export default function CloudSecurityPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <CloudHero />
      <CloudAppLayer />
      <CloudScanners />
      <CloudPosture />
      <Footer />
    </main>
  )
}
