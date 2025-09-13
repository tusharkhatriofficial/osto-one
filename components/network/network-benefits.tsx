import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Lock, Eye, Shield, ArrowRight } from "lucide-react"
import Link from "next/link"

const benefits = [
  {
    icon: Lock,
    title: "Secure Remote Access",
    description:
      "Enable secure remote work with zero trust network access that verifies every user and device before granting access.",
    metrics: "99.9% secure connections",
  },
  {
    icon: Eye,
    title: "Complete Threat Visibility",
    description:
      "Gain full visibility into network traffic, user behavior, and potential threats with comprehensive monitoring and analytics.",
    metrics: "Real-time monitoring",
  },
  {
    icon: Shield,
    title: "Automated Policy Enforcement",
    description:
      "Automatically enforce security policies across your entire network infrastructure with intelligent rule-based controls.",
    metrics: "24/7 policy enforcement",
  },
]

export function NetworkBenefits() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Network Security Benefits</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive network protection that scales with your business while maintaining optimal performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="inline-flex p-4 rounded-full bg-primary/10 mb-6">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{benefit.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{benefit.description}</p>
                <div className="text-sm font-medium text-secondary">{benefit.metrics}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16 text-center">
          <div>
            <div className="text-4xl font-bold text-primary mb-2">90%</div>
            <div className="text-muted-foreground">Attack Surface Reduction</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">1.2TB</div>
            <div className="text-muted-foreground">Daily Traffic Analyzed</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
            <div className="text-muted-foreground">Threat Detection Rate</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">Continuous Monitoring</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-card rounded-2xl p-12 shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Ready to Secure Your Network?</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Implement zero trust network security and gain complete visibility into your network traffic. Start your
            free trial today.
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
