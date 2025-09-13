"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Brain, TrendingUp, AlertCircle, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

const recommendations = [
  {
    priority: "High",
    title: "Enable Multi-Factor Authentication",
    description: "Add MFA to admin accounts to prevent unauthorized access",
    impact: "Reduces account takeover risk by 99.9%",
    effort: "Low",
  },
  {
    priority: "Medium",
    title: "Update SSL/TLS Configuration",
    description: "Upgrade to TLS 1.3 and disable weak cipher suites",
    impact: "Improves data encryption security",
    effort: "Medium",
  },
  {
    priority: "Low",
    title: "Implement Security Headers",
    description: "Add HSTS, CSP, and X-Frame-Options headers",
    impact: "Prevents common web attacks",
    effort: "Low",
  },
]

export function CloudPosture() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Cloud Security Posture Management</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            AI-driven security recommendations and automated posture scoring to continuously improve your cloud security
            stance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Posture Score */}
          <Card className="shadow-2xl col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-primary" />
                Security Posture Score
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-6">
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
                    <span className="text-3xl font-bold text-primary">87</span>
                  </div>
                </div>
                <div className="text-lg font-semibold text-foreground mb-2">Excellent</div>
                <div className="text-sm text-muted-foreground">+5 points this week</div>
              </div>

              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Identity & Access</span>
                    <span className="text-foreground">92%</span>
                  </div>
                  <Progress value={92} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Network Security</span>
                    <span className="text-foreground">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Data Protection</span>
                    <span className="text-foreground">89%</span>
                  </div>
                  <Progress value={89} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* AI Recommendations */}
          <Card className="shadow-2xl col-span-1 lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Brain className="w-5 h-5 mr-2 text-primary" />
                AI-Driven Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recommendations.map((rec, index) => (
                  <div key={index} className="border border-border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-3 h-3 rounded-full ${
                            rec.priority === "High"
                              ? "bg-red-500"
                              : rec.priority === "Medium"
                                ? "bg-yellow-500"
                                : "bg-blue-500"
                          }`}
                        ></div>
                        <div>
                          <h4 className="font-medium text-foreground">{rec.title}</h4>
                          <p className="text-sm text-muted-foreground">{rec.description}</p>
                        </div>
                      </div>
                      <Badge
                        variant={rec.priority === "High" ? "destructive" : "secondary"}
                        className={
                          rec.priority === "Medium"
                            ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"
                            : ""
                        }
                      >
                        {rec.priority}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>Impact: {rec.impact}</span>
                      <span>Effort: {rec.effort}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Metrics Dashboard */}
        <Card className="shadow-2xl mb-16">
          <CardHeader>
            <CardTitle>Security Metrics Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 dark:bg-green-950/20 rounded-lg mx-auto mb-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">156</div>
                <div className="text-sm text-muted-foreground">Compliant Resources</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-red-100 dark:bg-red-950/20 rounded-lg mx-auto mb-3">
                  <AlertCircle className="w-6 h-6 text-red-500" />
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">7</div>
                <div className="text-sm text-muted-foreground">Non-compliant Resources</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-950/20 rounded-lg mx-auto mb-3">
                  <Brain className="w-6 h-6 text-blue-500" />
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">23</div>
                <div className="text-sm text-muted-foreground">AI Recommendations</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-purple-100 dark:bg-purple-950/20 rounded-lg mx-auto mb-3">
                  <TrendingUp className="w-6 h-6 text-purple-500" />
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">+12%</div>
                <div className="text-sm text-muted-foreground">Score Improvement</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center bg-card rounded-2xl p-12 shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready to Optimize Your Cloud Security?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get AI-powered security recommendations and comprehensive cloud protection. Start improving your security
            posture today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/demo">
              <Button size="lg" className="text-lg px-8 py-6 group">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/demo">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
                Schedule Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
