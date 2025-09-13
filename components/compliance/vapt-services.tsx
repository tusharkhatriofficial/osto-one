import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Shield, FileText, Calendar } from "lucide-react"

const vaptServices = [
  {
    icon: Search,
    title: "Vulnerability Assessment",
    description: "Comprehensive scanning and identification of security vulnerabilities across your infrastructure.",
    features: [
      "Network vulnerability scanning",
      "Web application testing",
      "Database security assessment",
      "Configuration review",
    ],
    duration: "1-2 weeks",
    deliverables: ["Vulnerability report", "Risk assessment", "Remediation roadmap"],
  },
  {
    icon: Shield,
    title: "Penetration Testing",
    description: "Simulated cyber attacks to test your defenses and identify exploitable vulnerabilities.",
    features: [
      "External penetration testing",
      "Internal network testing",
      "Social engineering assessment",
      "Physical security testing",
    ],
    duration: "2-4 weeks",
    deliverables: ["Executive summary", "Technical findings", "Proof of concepts", "Remediation plan"],
  },
]

export function VaptServices() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Vulnerability Assessment & Penetration Testing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional VAPT services to identify vulnerabilities, test your defenses, and strengthen your security
            posture with actionable insights.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {vaptServices.map((service, index) => (
            <Card key={index} className="shadow-2xl hover:shadow-3xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="p-3 rounded-lg bg-primary/10 mr-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 text-muted-foreground mr-2" />
                    <span className="text-sm text-muted-foreground">Duration: {service.duration}</span>
                  </div>
                  <Badge variant="secondary">{service.deliverables.length} Deliverables</Badge>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Deliverables</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.deliverables.map((deliverable, delIndex) => (
                      <Badge key={delIndex} variant="outline" className="text-xs">
                        {deliverable}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Timeline Graphic */}
        <Card className="shadow-2xl">
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="w-5 h-5 mr-2 text-primary" />
              VAPT Process Timeline
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <div className="flex items-center justify-between mb-8">
                <div className="text-center flex-1">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold mb-3 mx-auto">
                    1
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Planning & Scoping</h4>
                  <p className="text-sm text-muted-foreground">Define objectives and scope</p>
                  <div className="text-xs text-muted-foreground mt-1">Days 1-2</div>
                </div>

                <div className="text-center flex-1">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold mb-3 mx-auto">
                    2
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Information Gathering</h4>
                  <p className="text-sm text-muted-foreground">Reconnaissance and enumeration</p>
                  <div className="text-xs text-muted-foreground mt-1">Days 3-5</div>
                </div>

                <div className="text-center flex-1">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold mb-3 mx-auto">
                    3
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Vulnerability Assessment</h4>
                  <p className="text-sm text-muted-foreground">Identify and analyze vulnerabilities</p>
                  <div className="text-xs text-muted-foreground mt-1">Days 6-10</div>
                </div>

                <div className="text-center flex-1">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold mb-3 mx-auto">
                    4
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Exploitation & Testing</h4>
                  <p className="text-sm text-muted-foreground">Attempt to exploit vulnerabilities</p>
                  <div className="text-xs text-muted-foreground mt-1">Days 11-15</div>
                </div>

                <div className="text-center flex-1">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold mb-3 mx-auto">
                    5
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Reporting & Remediation</h4>
                  <p className="text-sm text-muted-foreground">Detailed report with recommendations</p>
                  <div className="text-xs text-muted-foreground mt-1">Days 16-20</div>
                </div>
              </div>

              {/* Connection lines */}
              <div className="absolute top-6 left-0 right-0 h-0.5 bg-primary/20 -z-10"></div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
