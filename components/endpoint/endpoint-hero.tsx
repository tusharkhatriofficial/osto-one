import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Monitor, Lock } from "lucide-react"
import Link from "next/link"

export function EndpointHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Monitor className="w-4 h-4 mr-2" />
              Endpoint Protection
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Secure Every <span className="text-primary">Endpoint</span> in Your Network
            </h1>

            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Advanced endpoint protection that stops threats before they spread. Real-time monitoring, AI-powered
              detection, and automated response for complete device security.
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
                99.9% Detection Rate
              </div>
              <div className="flex items-center">
                <Lock className="w-4 h-4 text-green-500 mr-2" />
                Zero-day Protection
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-card rounded-2xl shadow-2xl p-8 border">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-foreground">Endpoint Status</h3>
                  <div className="flex items-center text-green-500 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    All Protected
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-muted/50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-primary">247</div>
                    <div className="text-sm text-muted-foreground">Devices Protected</div>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-red-500">0</div>
                    <div className="text-sm text-muted-foreground">Active Threats</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Threat Detection</span>
                    <span className="text-green-500">Active</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Real-time Monitoring</span>
                    <span className="text-green-500">Online</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Auto-remediation</span>
                    <span className="text-green-500">Enabled</span>
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
