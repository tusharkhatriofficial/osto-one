import { Card, CardContent } from "@/components/ui/card"
import { Shield, Cpu, FileCheck, Zap, Lock, Globe } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "End-to-end Protection",
    description: "Comprehensive security from endpoints to cloud infrastructure, covering every attack vector.",
  },
  {
    icon: Cpu,
    title: "AI-powered Automation",
    description:
      "Machine learning algorithms detect and respond to threats in real-time, reducing manual intervention.",
  },
  {
    icon: FileCheck,
    title: "Compliance Made Easy",
    description: "Automated compliance reporting for SOC2, GDPR, HIPAA, and other regulatory requirements.",
  },
  {
    icon: Zap,
    title: "Lightning Fast Setup",
    description: "Get enterprise-grade security up and running in just 9 minutes with our automated deployment.",
  },
  {
    icon: Lock,
    title: "Zero Trust Architecture",
    description: "Never trust, always verify. Our zero-trust approach ensures maximum security posture.",
  },
  {
    icon: Globe,
    title: "Global Threat Intelligence",
    description: "Real-time threat intelligence from our global network protects against emerging threats.",
  },
]

export function ValueProposition() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Startups Choose Osto</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built specifically for fast-growing startups that need enterprise-grade security without the complexity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 mr-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
