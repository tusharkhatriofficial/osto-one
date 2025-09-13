import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Shield, Zap, CheckCircle, ArrowRight } from "lucide-react"

const features = [
  {
    title: "Endpoint Protection",
    description: "Real-time malware detection and device control",
    included: true,
  },
  {
    title: "Network Security",
    description: "Zero trust access and web filtering",
    included: true,
  },
  {
    title: "Cloud Security",
    description: "Application and API protection",
    included: true,
  },
  {
    title: "Compliance Tools",
    description: "Automated reporting and assessments",
    included: true,
  },
  {
    title: "24/7 Monitoring",
    description: "Continuous threat detection and response",
    included: true,
  },
  {
    title: "Expert Support",
    description: "Direct access to security experts",
    included: false,
    note: "Available in paid plans",
  },
]

export function TrialAccess() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Launch Your Security Sandbox</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get hands-on experience with Osto in a safe sandbox environment. No credit card required, full access to
            all features for 14 days.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Trial Features */}
          <div>
            <Card className="shadow-2xl">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Play className="w-5 h-5 mr-2 text-primary" />
                    Free Trial Features
                  </div>
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                    14 Days Free
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="mt-1">
                      {feature.included ? (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      ) : (
                        <div className="w-5 h-5 rounded-full border-2 border-muted"></div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                      {feature.note && <p className="text-xs text-muted-foreground italic mt-1">{feature.note}</p>}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Trial Setup */}
          <div className="space-y-8">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <Zap className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Quick Setup Process</h3>
                  <p className="text-muted-foreground">Get protected in minutes, not hours</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">
                      1
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Create Account</p>
                      <p className="text-sm text-muted-foreground">Sign up with your work email</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">
                      2
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Deploy Agents</p>
                      <p className="text-sm text-muted-foreground">Install on your devices and servers</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">
                      3
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Configure Policies</p>
                      <p className="text-sm text-muted-foreground">Set up security rules and monitoring</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      ✓
                    </div>
                    <div>
                      <p className="font-medium text-foreground">You're Protected!</p>
                      <p className="text-sm text-muted-foreground">Full security coverage active</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg bg-gradient-to-r from-primary/5 to-secondary/5">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold text-foreground mb-4">Ready to Get Started?</h3>
                <p className="text-muted-foreground mb-6">
                  Join 100+ startups already protected by Osto. No credit card required.
                </p>
                <Button size="lg" className="w-full group">
                  <Shield className="mr-2 h-5 w-5" />
                  Launch Sandbox
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <p className="text-xs text-muted-foreground mt-4">14-day free trial • No setup fees • Cancel anytime</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-3">What Our Trial Users Say</h4>
                <div className="space-y-3">
                  <div className="border-l-4 border-primary pl-4">
                    <p className="text-sm text-muted-foreground italic">
                      "Setup was incredibly fast. We were protected within 10 minutes of signing up."
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">- Sarah K., CTO at TechFlow</p>
                  </div>
                  <div className="border-l-4 border-secondary pl-4">
                    <p className="text-sm text-muted-foreground italic">
                      "The trial gave us confidence that this was the right solution for our startup."
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">- Marcus R., Founder at DataVault</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
