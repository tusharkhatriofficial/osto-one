import { Card, CardContent } from "@/components/ui/card"
import { Shield, Filter, BarChart3 } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Zero Trust Network Access (ZTNA)",
    description:
      "Implement zero trust principles with identity-based access controls and micro-segmentation for maximum security.",
    capabilities: [
      "Identity verification",
      "Micro-segmentation",
      "Conditional access",
      "Session monitoring",
      "Least privilege access",
      "Multi-factor authentication",
    ],
    benefits: "Reduce attack surface by 90%",
  },
  {
    icon: Filter,
    title: "Advanced Web Filtering",
    description:
      "Block malicious websites, control access to inappropriate content, and prevent data exfiltration through web channels.",
    capabilities: [
      "URL categorization",
      "Malware protection",
      "Content filtering",
      "SSL inspection",
      "Application control",
      "Bandwidth management",
    ],
    benefits: "99.9% malicious site blocking",
  },
  {
    icon: BarChart3,
    title: "Intelligent Traffic Analysis",
    description:
      "Deep packet inspection and behavioral analysis to detect anomalies, threats, and policy violations in real-time.",
    capabilities: [
      "Deep packet inspection",
      "Behavioral analysis",
      "Anomaly detection",
      "Protocol analysis",
      "Threat correlation",
      "Performance monitoring",
    ],
    benefits: "Real-time threat detection",
  },
]

export function NetworkFeatures() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Complete Network Security Suite</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three powerful layers of network protection working together to secure your infrastructure and data flows.
          </p>
        </div>

        <div className="space-y-12">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center mb-6">
                      <div className="p-3 rounded-lg bg-primary/10 mr-4">
                        <feature.icon className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-foreground">{feature.title}</h3>
                        <div className="text-sm text-secondary font-medium mt-1">{feature.benefits}</div>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed text-lg">{feature.description}</p>
                    <div className="grid grid-cols-2 gap-3">
                      {feature.capabilities.map((capability, capIndex) => (
                        <div key={capIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                          {capability}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div
                    className={`bg-gradient-to-br from-primary/5 to-secondary/5 p-8 lg:p-12 flex items-center justify-center ${
                      index % 2 === 1 ? "lg:col-start-1" : ""
                    }`}
                  >
                    <div className="w-full max-w-sm">
                      <div className="bg-card rounded-xl shadow-lg p-6 border">
                        <div className="text-center mb-4">
                          <feature.icon className="w-16 h-16 text-primary mx-auto mb-3" />
                          <h4 className="font-semibold text-foreground">{feature.title.split(" ")[0]} Dashboard</h4>
                        </div>
                        <div className="space-y-3">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Status</span>
                            <span className="text-green-500 font-medium">Active</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Policies</span>
                            <span className="text-foreground font-medium">24 Active</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Coverage</span>
                            <span className="text-foreground font-medium">100%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
