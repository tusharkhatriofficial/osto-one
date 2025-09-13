"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, Shield, FileCheck, Users, ArrowRight } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

const complianceFrameworks = [
  {
    icon: Shield,
    title: "SOC2 Type II",
    description: "System and Organization Controls for service organizations",
    requirements: [
      "Security controls implementation",
      "Availability monitoring",
      "Processing integrity",
      "Confidentiality measures",
      "Privacy protection",
    ],
    timeline: "3-6 months",
    support: "Full audit preparation and ongoing monitoring",
  },
  {
    icon: FileCheck,
    title: "GDPR Compliance",
    description: "General Data Protection Regulation for EU data protection",
    requirements: [
      "Data mapping and inventory",
      "Privacy impact assessments",
      "Consent management",
      "Data subject rights",
      "Breach notification procedures",
    ],
    timeline: "2-4 months",
    support: "Policy development and implementation guidance",
  },
  {
    icon: Users,
    title: "HIPAA Compliance",
    description: "Health Insurance Portability and Accountability Act",
    requirements: [
      "Administrative safeguards",
      "Physical safeguards",
      "Technical safeguards",
      "Risk assessments",
      "Employee training",
    ],
    timeline: "4-8 months",
    support: "Healthcare-specific security controls and training",
  },
]

const faqs = [
  {
    question: "How long does SOC2 compliance take?",
    answer:
      "SOC2 Type II compliance typically takes 3-6 months, including the initial assessment, control implementation, and the required 3-month observation period. Our team helps streamline this process with automated monitoring and reporting.",
  },
  {
    question: "What's included in a penetration test?",
    answer:
      "Our penetration testing includes external and internal network testing, web application security assessment, social engineering evaluation, and physical security testing. You'll receive a comprehensive report with executive summary, technical findings, and remediation recommendations.",
  },
  {
    question: "Do you provide ongoing compliance monitoring?",
    answer:
      "Yes, we offer continuous compliance monitoring with automated reporting, regular assessments, and real-time alerts for any compliance deviations. This ensures you maintain your certification status year-round.",
  },
  {
    question: "Can you help with multiple compliance frameworks?",
    answer:
      "Absolutely. We support SOC2, GDPR, HIPAA, PCI DSS, and other major compliance frameworks. Our platform can manage multiple compliance requirements simultaneously, reducing overlap and streamlining your compliance efforts.",
  },
]

export function ComplianceSupport() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (value: string) => {
    setOpenItems((prev) => (prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]))
  }

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Comprehensive Compliance Support</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expert guidance and automated tools to help you achieve and maintain compliance with major regulatory
            frameworks.
          </p>
        </div>

        {/* Compliance Frameworks */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {complianceFrameworks.map((framework, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="p-2 rounded-lg bg-primary/10 mr-3">
                    <framework.icon className="w-5 h-5 text-primary" />
                  </div>
                  {framework.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">{framework.description}</p>

                <div>
                  <h4 className="font-semibold text-foreground mb-2 text-sm">Key Requirements</h4>
                  <ul className="space-y-1">
                    {framework.requirements.slice(0, 3).map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-center text-xs text-muted-foreground">
                        <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                        {req}
                      </li>
                    ))}
                    {framework.requirements.length > 3 && (
                      <li className="text-xs text-muted-foreground">
                        +{framework.requirements.length - 3} more requirements
                      </li>
                    )}
                  </ul>
                </div>

                <div className="pt-4 border-t border-border space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Timeline:</span>
                    <span className="text-foreground font-medium">{framework.timeline}</span>
                  </div>
                  <div className="text-xs text-muted-foreground">{framework.support}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <Card className="shadow-2xl mb-16">
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Collapsible
                  key={index}
                  open={openItems.includes(`faq-${index}`)}
                  onOpenChange={() => toggleItem(`faq-${index}`)}
                >
                  <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                    <span className="font-medium text-foreground">{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-muted-foreground transition-transform ${
                        openItems.includes(`faq-${index}`) ? "rotate-180" : ""
                      }`}
                    />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="px-4 pb-4">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center bg-card rounded-2xl p-12 shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Ready to Achieve Compliance?</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get expert guidance on your compliance journey. Our team will help you navigate regulatory requirements and
            implement the right security controls.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/demo">
              <Button size="lg" className="text-lg px-8 py-6 group">
                Start Compliance Assessment
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/demo">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
