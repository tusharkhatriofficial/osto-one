import { Card, CardContent } from "@/components/ui/card"
import { Shield, Zap, Globe, Heart } from "lucide-react"

export function MissionStatement() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Mission</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
              "To empower every startup with enterprise-grade cybersecurity that's fast to deploy, simple to manage, and
              powerful enough to stop the most sophisticated threats."
            </p>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Why We Started Osto</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                After years of working with enterprise security solutions, our founders saw a critical gap: startups
                were either unprotected or struggling with complex, expensive security tools designed for large
                corporations.
              </p>
              <p>
                We realized that startups needed something different—security that could scale with their growth,
                protect their innovations, and enable their success without slowing them down.
              </p>
              <p>
                That's why we built Osto: to give every startup access to the same level of protection that Fortune
                500 companies enjoy, but with the speed and simplicity that startups demand.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <Card className="shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Security First</h4>
                <p className="text-sm text-muted-foreground">
                  Every feature is built with security as the foundation, not an afterthought.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-full mb-4">
                  <Zap className="w-6 h-6 text-secondary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Speed Matters</h4>
                <p className="text-sm text-muted-foreground">
                  From 9-minute setup to instant threat response, we optimize for startup velocity.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-950/20 rounded-full mb-4">
                  <Globe className="w-6 h-6 text-blue-500" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Global Scale</h4>
                <p className="text-sm text-muted-foreground">
                  Built to protect startups anywhere, with global threat intelligence and compliance.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 dark:bg-green-950/20 rounded-full mb-4">
                  <Heart className="w-6 h-6 text-green-500" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Startup Love</h4>
                <p className="text-sm text-muted-foreground">
                  We understand startup challenges because we've been there ourselves.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
