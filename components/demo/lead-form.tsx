"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { CheckCircle, Send, Users, ArrowRight } from "lucide-react"
import { useState } from "react"

export function LeadForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get Started Today</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tell us about your startup and security needs. We'll customize a demo that shows exactly how Osto can
            protect your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Lead Form */}
          <Card className="shadow-2xl">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="w-5 h-5 mr-2 text-primary" />
                Request Personalized Demo
              </CardTitle>
            </CardHeader>
            <CardContent>
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Doe" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Work Email *</Label>
                    <Input id="email" type="email" placeholder="john@company.com" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name *</Label>
                    <Input id="company" placeholder="Your Startup Inc." required />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="role">Your Role</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ceo">CEO/Founder</SelectItem>
                          <SelectItem value="cto">CTO</SelectItem>
                          <SelectItem value="ciso">CISO</SelectItem>
                          <SelectItem value="it">IT Manager</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="employees">Company Size</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Number of employees" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-10">1-10 employees</SelectItem>
                          <SelectItem value="11-50">11-50 employees</SelectItem>
                          <SelectItem value="51-200">51-200 employees</SelectItem>
                          <SelectItem value="200+">200+ employees</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="securityNeeds">Current Security Challenges</Label>
                    <Textarea
                      id="securityNeeds"
                      placeholder="Tell us about your current security setup and main concerns..."
                      rows={4}
                    />
                  </div>

                  <div className="space-y-4">
                    <Label>Areas of Interest (select all that apply)</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="endpoint" />
                        <Label htmlFor="endpoint" className="text-sm">
                          Endpoint Security
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="network" />
                        <Label htmlFor="network" className="text-sm">
                          Network Security
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="cloud" />
                        <Label htmlFor="cloud" className="text-sm">
                          Cloud Security
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="compliance" />
                        <Label htmlFor="compliance" className="text-sm">
                          Compliance & VAPT
                        </Label>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="newsletter" />
                    <Label htmlFor="newsletter" className="text-sm">
                      I'd like to receive security tips and product updates
                    </Label>
                  </div>

                  <Button type="submit" className="w-full group">
                    <Send className="mr-2 h-4 w-4" />
                    Request Demo
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              ) : (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-950/20 rounded-full mb-6">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Thank You!</h3>
                  <p className="text-muted-foreground mb-6">
                    We've received your demo request. Our team will contact you within 2 hours to schedule your
                    personalized demo.
                  </p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>✓ Demo scheduled within 24 hours</p>
                    <p>✓ Customized to your security needs</p>
                    <p>✓ No sales pressure, just solutions</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Benefits */}
          <div className="space-y-8">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">What to Expect in Your Demo</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
                    <div>
                      <p className="font-medium text-foreground">Live Threat Detection</p>
                      <p className="text-sm text-muted-foreground">
                        Watch real threats being blocked in real-time across endpoints, network, and cloud
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
                    <div>
                      <p className="font-medium text-foreground">Custom Security Assessment</p>
                      <p className="text-sm text-muted-foreground">
                        Get insights into your current security posture and improvement recommendations
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
                    <div>
                      <p className="font-medium text-foreground">ROI Calculator</p>
                      <p className="text-sm text-muted-foreground">
                        See potential cost savings and security improvements for your specific use case
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
                    <div>
                      <p className="font-medium text-foreground">Implementation Roadmap</p>
                      <p className="text-sm text-muted-foreground">
                        Get a clear plan for deploying Osto in your environment
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">Why Startups Choose Us</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">9 min</div>
                    <div className="text-sm text-muted-foreground">Setup Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">99.9%</div>
                    <div className="text-sm text-muted-foreground">Detection Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">100+</div>
                    <div className="text-sm text-muted-foreground">Startups Protected</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                    <div className="text-sm text-muted-foreground">Monitoring</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg bg-primary/5 border-primary/20">
              <CardContent className="p-8 text-center">
                <h3 className="text-lg font-semibold text-foreground mb-2">Urgent Security Needs?</h3>
                <p className="text-muted-foreground mb-4">
                  If you're dealing with an active security incident or need immediate protection, call us directly.
                </p>
                <Button
                  variant="outline"
                  className="bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Call Emergency Line: +1 (555) 911-HELP
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
