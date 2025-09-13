"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Shield, Users, Globe, TrendingUp } from "lucide-react"
import { useEffect, useState } from "react"

const stats = [
  {
    icon: Users,
    label: "Startups Protected",
    value: 100,
    suffix: "+",
    description: "Fast-growing companies trust us with their security",
  },
  {
    icon: Shield,
    label: "Threats Blocked",
    value: 1000000,
    suffix: "+",
    description: "Malicious attacks prevented across our network",
    format: "1M+",
  },
  {
    icon: Globe,
    label: "Countries Served",
    value: 25,
    suffix: "+",
    description: "Global reach with local compliance expertise",
  },
  {
    icon: TrendingUp,
    label: "Uptime Guarantee",
    value: 99.9,
    suffix: "%",
    description: "Reliable security monitoring around the clock",
  },
]

function AnimatedCounter({ value, suffix = "", format }: { value: number; suffix?: string; format?: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = value / steps
    const stepDuration = duration / steps

    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [value])

  if (format) {
    return <span>{format}</span>
  }

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

export function CompanyStats() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Impact</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Since our founding, we've been dedicated to protecting startups and helping them grow securely. Here's our
            impact by the numbers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} format={stat.format} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{stat.label}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Timeline */}
        <div className="mt-24">
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">Our Journey</h3>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20"></div>
            <div className="space-y-12">
              <div className="flex items-center">
                <div className="flex-1 text-right pr-8">
                  <h4 className="text-lg font-semibold text-foreground">Company Founded</h4>
                  <p className="text-muted-foreground">Started with a vision to democratize cybersecurity</p>
                </div>
                <div className="w-4 h-4 bg-primary rounded-full relative z-10"></div>
                <div className="flex-1 pl-8">
                  <div className="text-sm text-muted-foreground">2023</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-1 text-right pr-8">
                  <div className="text-sm text-muted-foreground">Q2 2023</div>
                </div>
                <div className="w-4 h-4 bg-primary rounded-full relative z-10"></div>
                <div className="flex-1 pl-8">
                  <h4 className="text-lg font-semibold text-foreground">First 10 Customers</h4>
                  <p className="text-muted-foreground">Early adopters helped shape our product vision</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-1 text-right pr-8">
                  <h4 className="text-lg font-semibold text-foreground">SOC2 Certification</h4>
                  <p className="text-muted-foreground">Achieved enterprise-grade compliance standards</p>
                </div>
                <div className="w-4 h-4 bg-primary rounded-full relative z-10"></div>
                <div className="flex-1 pl-8">
                  <div className="text-sm text-muted-foreground">Q4 2023</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-1 text-right pr-8">
                  <div className="text-sm text-muted-foreground">2024</div>
                </div>
                <div className="w-4 h-4 bg-secondary rounded-full relative z-10"></div>
                <div className="flex-1 pl-8">
                  <h4 className="text-lg font-semibold text-foreground">100+ Startups Protected</h4>
                  <p className="text-muted-foreground">Reached our first major milestone</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
