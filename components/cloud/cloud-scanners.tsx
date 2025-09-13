import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Globe, Lock, Smartphone, FileText, AlertTriangle, CheckCircle } from "lucide-react"

const scanners = [
  {
    icon: Globe,
    title: "Web Scanner",
    description: "Comprehensive web application vulnerability scanning with OWASP compliance.",
    features: ["OWASP Top 10 detection", "SSL/TLS analysis", "Cookie security", "Header analysis"],
  },
  {
    icon: Lock,
    title: "API Scanner",
    description: "Advanced API security testing including authentication and authorization flaws.",
    features: ["REST/GraphQL testing", "Authentication bypass", "Rate limiting tests", "Data exposure checks"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Scanner",
    description: "Mobile application security assessment for iOS and Android applications.",
    features: ["Static code analysis", "Dynamic testing", "Privacy compliance", "Store policy checks"],
  },
]

export function CloudScanners() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Advanced Security Scanners</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Automated vulnerability scanning across web, API, and mobile applications with detailed security reports.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {scanners.map((scanner, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="p-2 rounded-lg bg-primary/10 mr-3">
                    <scanner.icon className="w-6 h-6 text-primary" />
                  </div>
                  {scanner.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">{scanner.description}</p>
                <ul className="space-y-2">
                  {scanner.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sample Scan Report */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="shadow-2xl">
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="w-5 h-5 mr-2 text-primary" />
                Sample Scan Report
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-foreground">Overall Security Score</span>
                    <span className="text-lg font-bold text-green-500">87/100</span>
                  </div>
                  <Progress value={87} className="h-3" />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                    <div className="flex items-center">
                      <AlertTriangle className="w-4 h-4 text-red-500 mr-3" />
                      <div>
                        <p className="text-sm font-medium text-foreground">High Risk</p>
                        <p className="text-xs text-muted-foreground">SQL Injection vulnerability</p>
                      </div>
                    </div>
                    <Badge variant="destructive">Critical</Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                    <div className="flex items-center">
                      <AlertTriangle className="w-4 h-4 text-yellow-500 mr-3" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Medium Risk</p>
                        <p className="text-xs text-muted-foreground">Missing security headers</p>
                      </div>
                    </div>
                    <Badge variant="secondary">Medium</Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Secure</p>
                        <p className="text-xs text-muted-foreground">HTTPS properly configured</p>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">Pass</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-2xl">
            <CardHeader>
              <CardTitle>Scan Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-500 mb-1">2</div>
                    <div className="text-sm text-muted-foreground">Critical Issues</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-500 mb-1">5</div>
                    <div className="text-sm text-muted-foreground">Medium Issues</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-500 mb-1">12</div>
                    <div className="text-sm text-muted-foreground">Low Issues</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-500 mb-1">156</div>
                    <div className="text-sm text-muted-foreground">Passed Tests</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Web Security</span>
                      <span className="text-foreground">85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">API Security</span>
                      <span className="text-foreground">92%</span>
                    </div>
                    <Progress value={92} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Mobile Security</span>
                      <span className="text-foreground">78%</span>
                    </div>
                    <Progress value={78} className="h-2" />
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Last Scan</span>
                    <span className="text-sm font-medium text-foreground">2 hours ago</span>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-sm text-muted-foreground">Next Scan</span>
                    <span className="text-sm font-medium text-foreground">In 22 hours</span>
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
