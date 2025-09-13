import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Target, Award } from "lucide-react"
import Link from "next/link"

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium mb-8">
            <Users className="w-4 h-4 mr-2" />
            About Osto.one
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
            Securing the Future of <span className="text-primary">Startups</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto text-pretty">
            Founded by cybersecurity experts, Osto.one is on a mission to democratize enterprise-grade security for
            fast-growing startups. We believe every startup deserves protection without complexity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link href="/demo">
              <Button size="lg" className="text-lg px-8 py-6 group">
                Join Our Mission
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="#contact">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
                Get in Touch
              </Button>
            </Link>
          </div>

          {/* Key Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Mission-Driven</h3>
              <p className="text-muted-foreground">Protecting startups from cyber threats with innovative solutions</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4">
                <Users className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Customer-First</h3>
              <p className="text-muted-foreground">Every decision is made with our customers' success in mind</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-950/20 rounded-full mb-4">
                <Award className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Excellence</h3>
              <p className="text-muted-foreground">Delivering enterprise-grade security with startup agility</p>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  )
}
