import { Button } from "@/components/ui/button"
import { ArrowRight, Network, Shield, Globe } from "lucide-react"
import Link from "next/link"

export function NetworkHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Network className="w-4 h-4 mr-2" />
              Network Protection
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Secure Your <span className="text-primary">Network</span> Infrastructure
            </h1>

            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Zero Trust Network Access, advanced web filtering, and comprehensive traffic analysis. Protect your
              network from internal and external threats with intelligent security controls.
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
                Zero Trust Architecture
              </div>
              <div className="flex items-center">
                <Globe className="w-4 h-4 text-green-500 mr-2" />
                Global Threat Intelligence
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-card rounded-2xl shadow-2xl p-8 border">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-foreground">Network Status</h3>
                  <div className="flex items-center text-green-500 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                    Monitoring Active
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-muted/50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-primary">1.2TB</div>
                    <div className="text-sm text-muted-foreground">Traffic Analyzed</div>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-red-500">47</div>
                    <div className="text-sm text-muted-foreground">Threats Blocked</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-sm font-medium">ZTNA Gateway</span>
                    </div>
                    <span className="text-xs text-green-600 dark:text-green-400">Online</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-sm font-medium">Web Filter</span>
                    </div>
                    <span className="text-xs text-blue-600 dark:text-blue-400">Active</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                      <span className="text-sm font-medium">Traffic Analysis</span>
                    </div>
                    <span className="text-xs text-purple-600 dark:text-purple-400">Scanning</span>
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
