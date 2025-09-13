"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Osto.one transformed our security posture overnight. What used to take weeks now happens in minutes.",
    author: "Sarah Chen",
    role: "CTO, TechFlow",
    rating: 5,
  },
  {
    quote: "The AI-powered threat detection caught vulnerabilities our previous solution missed completely.",
    author: "Marcus Rodriguez",
    role: "Security Lead, DataVault",
    rating: 5,
  },
  {
    quote: "Finally, enterprise security that doesn't slow us down. The 9-minute setup was no joke.",
    author: "Emily Watson",
    role: "Founder, CloudSync",
    rating: 5,
  },
]

const logos = [
  { name: "TechFlow", width: 120 },
  { name: "DataVault", width: 140 },
  { name: "CloudSync", width: 130 },
  { name: "StartupX", width: 110 },
  { name: "InnovateCorp", width: 150 },
  { name: "ScaleUp", width: 100 },
]

export function SocialProof() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trusted by section */}
        <div className="text-center mb-16">
          <p className="text-muted-foreground mb-8">Trusted by 100+ fast-growing startups</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="h-12 bg-muted rounded flex items-center justify-center px-6"
                style={{ width: logo.width }}
              >
                <span className="text-muted-foreground font-medium">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Our Customers Say</h2>
          <p className="text-xl text-muted-foreground">
            Don't just take our word for it—hear from the startups we protect.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                <p className="text-foreground mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center">
          <div>
            <div className="text-4xl font-bold text-primary mb-2">100+</div>
            <div className="text-muted-foreground">Startups Protected</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">1M+</div>
            <div className="text-muted-foreground">Threats Blocked</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
            <div className="text-muted-foreground">Uptime Guaranteed</div>
          </div>
        </div>
      </div>
    </section>
  )
}
