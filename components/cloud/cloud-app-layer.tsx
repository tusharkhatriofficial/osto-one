import { Card, CardContent } from "@/components/ui/card"
import { Shield, Globe, Smartphone, Lock } from "lucide-react"

const appProtections = [
  {
    icon: Globe,
    title: "Web Application Security",
    description: "Comprehensive protection for web applications against OWASP Top 10 and emerging threats.",
    features: [
      "SQL injection protection",
      "Cross-site scripting (XSS) prevention",
      "DDoS mitigation",
      "Bot protection",
      "Rate limiting",
      "SSL/TLS encryption",
    ],
  },
  {
    icon: Lock,
    title: "API Security & Protection",
    description: "Secure your APIs with advanced threat detection, authentication, and access controls.",
    features: [
      "API gateway protection",
      "OAuth 2.0 / JWT validation",
      "Request/response filtering",
      "API rate limiting",
      "Schema validation",
      "Threat intelligence",
    ],
  },
]

export function CloudAppLayer() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Application Layer Protection</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Secure your web applications and APIs with enterprise-grade protection that scales with your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {appProtections.map((protection, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <protection.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{protection.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{protection.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {protection.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Visual Demo */}
        <div className="mt-16">
          <Card className="shadow-2xl overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10 p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Real-time Protection Dashboard</h3>
                  <p className="text-muted-foreground">Monitor and protect your applications in real-time</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-card rounded-lg p-6 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-semibold text-foreground">Web Apps</h4>
                      <Shield className="w-5 h-5 text-green-500" />
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Protected Apps</span>
                        <span className="text-foreground font-medium">8</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Threats Blocked</span>
                        <span className="text-red-500 font-medium">247</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Uptime</span>
                        <span className="text-green-500 font-medium">99.9%</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card rounded-lg p-6 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-semibold text-foreground">API Security</h4>
                      <Lock className="w-5 h-5 text-blue-500" />
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Protected APIs</span>
                        <span className="text-foreground font-medium">15</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Requests/min</span>
                        <span className="text-blue-500 font-medium">1.2K</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Auth Success</span>
                        <span className="text-green-500 font-medium">98.7%</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card rounded-lg p-6 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-semibold text-foreground">Mobile Apps</h4>
                      <Smartphone className="w-5 h-5 text-purple-500" />
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Protected Apps</span>
                        <span className="text-foreground font-medium">4</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Active Users</span>
                        <span className="text-purple-500 font-medium">12.5K</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Security Score</span>
                        <span className="text-green-500 font-medium">A+</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
