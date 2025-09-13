import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Activity, TrendingDown, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

const benefits = [
  {
    icon: Activity,
    title: "Real-time Monitoring",
    description: "24/7 continuous monitoring of all endpoints with instant threat detection and response.",
    metrics: "99.9% uptime",
  },
  {
    icon: TrendingDown,
    title: "Risk Reduction",
    description: "Dramatically reduce your attack surface with proactive threat prevention and automated remediation.",
    metrics: "85% fewer incidents",
  },
  {
    icon: CheckCircle,
    title: "Compliance Support",
    description: "Meet regulatory requirements with automated reporting and policy enforcement across all devices.",
    metrics: "SOC2, HIPAA, GDPR ready",
  },
]

export function EndpointBenefits() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Osto Endpoint Security</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive protection that scales with your business while maintaining peak performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="inline-flex p-4 rounded-full bg-primary/10 mb-6">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{benefit.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{benefit.description}</p>
                <div className="text-sm font-medium text-primary">{benefit.metrics}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-card rounded-2xl p-12 shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Ready to Secure Your Endpoints?</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get enterprise-grade endpoint protection up and running in minutes. Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/demo">
              <Button size="lg" className="text-lg px-8 py-6 group">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/demo">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
                Schedule Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
