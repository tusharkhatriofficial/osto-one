import { Card, CardContent } from "@/components/ui/card"
import { Shield, Cpu, Lock, FileX } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Next-Gen Antimalware",
    description: "AI-powered malware detection that identifies and blocks known and unknown threats in real-time.",
    capabilities: [
      "Behavioral analysis",
      "Machine learning detection",
      "Cloud-based intelligence",
      "Zero-day protection",
    ],
  },
  {
    icon: Lock,
    title: "Device Control",
    description:
      "Granular control over USB devices, external storage, and peripheral connections to prevent data breaches.",
    capabilities: ["USB port management", "Device whitelisting", "Encryption enforcement", "Access logging"],
  },
  {
    icon: Cpu,
    title: "Application Control",
    description:
      "Whitelist and blacklist applications, control software installations, and monitor application behavior.",
    capabilities: ["Software inventory", "Installation blocking", "Runtime monitoring", "Policy enforcement"],
  },
  {
    icon: FileX,
    title: "Data Leakage Prevention",
    description: "Monitor and prevent sensitive data from leaving your organization through various channels.",
    capabilities: ["Content inspection", "Email monitoring", "File transfer blocking", "PII detection"],
  },
]

export function EndpointFeatures() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Comprehensive Endpoint Protection</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Four layers of security working together to protect every device in your network from advanced threats.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.capabilities.map((capability, capIndex) => (
                        <li key={capIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                          {capability}
                        </li>
                      ))}
                    </ul>
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
