import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ComplianceHero } from "@/components/compliance/compliance-hero"
import { SecurityQuestionnaire } from "@/components/compliance/security-questionnaire"
import { VaptServices } from "@/components/compliance/vapt-services"
import { ComplianceSupport } from "@/components/compliance/compliance-support"

export default function CompliancePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ComplianceHero />
      <SecurityQuestionnaire />
      <VaptServices />
      <ComplianceSupport />
      <Footer />
    </main>
  )
}
