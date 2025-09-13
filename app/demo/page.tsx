import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { DemoHero } from "@/components/demo/demo-hero"
import { LeadForm } from "@/components/demo/lead-form"
import { CalendarIntegration } from "@/components/demo/calendar-integration"
import { TrialAccess } from "@/components/demo/trial-access"
import { SecurityAssessment } from "@/components/demo/security-assessment"

export default function DemoPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <DemoHero />
      <LeadForm />
      <CalendarIntegration />
      <TrialAccess />
      <SecurityAssessment />
      <Footer />
    </main>
  )
}
