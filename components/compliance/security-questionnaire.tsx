"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { FileText, Zap, CheckCircle, Clock } from "lucide-react"
import { useState } from "react"

export function SecurityQuestionnaire() {
  const [isAnimating, setIsAnimating] = useState(false)

  const handleAutoFill = () => {
    setIsAnimating(true)
    setTimeout(() => setIsAnimating(false), 2000)
  }

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Automated Security Questionnaire</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Streamline vendor security assessments with AI-powered questionnaire automation. Save hours of manual work
            with intelligent form completion.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Sample Form */}
          <Card className="shadow-2xl">
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="w-5 h-5 mr-2 text-primary" />
                Sample Security Questionnaire
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="company">Company Name</Label>
                <Input
                  id="company"
                  placeholder="Enter company name"
                  className={isAnimating ? "animate-pulse bg-primary/10" : ""}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="industry">Industry</Label>
                <Select>
                  <SelectTrigger className={isAnimating ? "animate-pulse bg-primary/10" : ""}>
                    <SelectValue placeholder="Select industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="technology">Technology</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="data-types">Types of Data Processed</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="pii"
                      className={isAnimating ? "animate-pulse border-primary" : ""}
                      checked={isAnimating}
                    />
                    <Label htmlFor="pii" className="text-sm">
                      Personally Identifiable Information (PII)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="financial"
                      className={isAnimating ? "animate-pulse border-primary" : ""}
                      checked={isAnimating}
                    />
                    <Label htmlFor="financial" className="text-sm">
                      Financial Data
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="health" className={isAnimating ? "animate-pulse border-primary" : ""} />
                    <Label htmlFor="health" className="text-sm">
                      Health Information
                    </Label>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="security-measures">Current Security Measures</Label>
                <Textarea
                  id="security-measures"
                  placeholder="Describe your current security measures..."
                  className={isAnimating ? "animate-pulse bg-primary/10" : ""}
                />
              </div>

              <div className="flex space-x-4">
                <Button onClick={handleAutoFill} className="flex-1 group">
                  <Zap className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                  Auto-Fill with AI
                </Button>
                <Button variant="outline" className="flex-1 bg-transparent">
                  Submit
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Benefits */}
          <div className="space-y-8">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-green-100 dark:bg-green-950/20">
                    <Clock className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Save 90% of Time</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Reduce questionnaire completion time from hours to minutes with intelligent automation and
                      pre-filled responses.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-950/20">
                    <CheckCircle className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Ensure Accuracy</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      AI-powered responses based on your actual security posture and compliance status, ensuring
                      consistent and accurate answers.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-purple-100 dark:bg-purple-950/20">
                    <FileText className="w-6 h-6 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Maintain Compliance</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Automatically update responses as your security posture improves, keeping questionnaires current
                      with your compliance status.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-6 bg-card rounded-lg shadow-lg">
                <div className="text-3xl font-bold text-primary mb-2">90%</div>
                <div className="text-sm text-muted-foreground">Time Saved</div>
              </div>
              <div className="text-center p-6 bg-card rounded-lg shadow-lg">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Questions Automated</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
