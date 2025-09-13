import { Button } from "@/components/ui/button"
import { ArrowRight, Cloud, Shield, Zap } from "lucide-react"
import Link from "next/link"

export function CloudHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Cloud className="w-4 h-4 mr-2" />
              Cloud Protection
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Comprehensive <span className="text-primary">Cloud Security</span> for Modern Apps
            </h1>

            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Protect your cloud infrastructure from application layer to posture management. AI-driven security
              recommendations and automated vulnerability scanning for complete cloud protection.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/demo">
                <Button size="lg" className="text-lg px-8 py-6 group">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/demo">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
                  View Demo
                </Button>
              </Link>
            </div>

            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Shield className="w-4 h-4 text-green-500 mr-2" />
                Multi-Cloud Support
              </div>
              <div className="flex items-center">
                <Zap className="w-4 h-4 text-green-500 mr-2" />
                AI-Powered Analysis
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-card rounded-2xl shadow-2xl p-8 border">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-foreground">Cloud Security Score</h3>
                  <div className="flex items-center text-green-500 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Excellent
                  </div>
                </div>

                <div className="text-center">
                  <div className="relative inline-flex items-center justify-center w-32 h-32 mb-4">
                    <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-muted stroke-current"
                        strokeWidth="3"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-primary stroke-current"
                        strokeWidth="3"
                        strokeDasharray="87, 100"
                        strokeLinecap="round"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">87</span>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">Security Posture Score</div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-muted/50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-500">12</div>
                    <div className="text-sm text-muted-foreground">Apps Protected</div>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-yellow-500">3</div>
                    <div className="text-sm text-muted-foreground">Recommendations</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Web App Security</span>
                    <span className="text-green-500">Active</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">API Protection</span>
                    <span className="text-green-500">Enabled</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Posture Management</span>
                    <span className="text-blue-500">Monitoring</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
