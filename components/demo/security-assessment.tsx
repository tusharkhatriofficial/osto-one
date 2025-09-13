"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { CheckCircle, AlertTriangle, Shield, ArrowRight } from "lucide-react"
import { useState } from "react"

const questions = [
  {
    id: 1,
    question: "How many employees does your company have?",
    options: [
      { value: "1-10", label: "1-10 employees", score: 1 },
      { value: "11-50", label: "11-50 employees", score: 2 },
      { value: "51-200", label: "51-200 employees", score: 3 },
      { value: "200+", label: "200+ employees", score: 4 },
    ],
  },
  {
    id: 2,
    question: "What type of data does your company handle?",
    options: [
      { value: "basic", label: "Basic business data only", score: 1 },
      { value: "customer", label: "Customer personal information", score: 2 },
      { value: "financial", label: "Financial or payment data", score: 3 },
      { value: "healthcare", label: "Healthcare or sensitive data", score: 4 },
    ],
  },
  {
    id: 3,
    question: "Do you currently have endpoint security software?",
    options: [
      { value: "none", label: "No endpoint security", score: 4 },
      { value: "basic", label: "Basic antivirus only", score: 3 },
      { value: "advanced", label: "Advanced endpoint protection", score: 2 },
      { value: "enterprise", label: "Enterprise security suite", score: 1 },
    ],
  },
  {
    id: 4,
    question: "How often do you perform security assessments?",
    options: [
      { value: "never", label: "Never", score: 4 },
      { value: "yearly", label: "Once a year", score: 3 },
      { value: "quarterly", label: "Quarterly", score: 2 },
      { value: "monthly", label: "Monthly or more", score: 1 },
    ],
  },
  {
    id: 5,
    question: "Do you have a dedicated security team or person?",
    options: [
      { value: "none", label: "No dedicated security resources", score: 4 },
      { value: "part-time", label: "Part-time security responsibility", score: 3 },
      { value: "dedicated", label: "One dedicated security person", score: 2 },
      { value: "team", label: "Full security team", score: 1 },
    ],
  },
]

export function SecurityAssessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [showResults, setShowResults] = useState(false)

  const handleAnswer = (questionId: number, score: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: score }))
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const calculateScore = () => {
    const totalScore = Object.values(answers).reduce((sum, score) => sum + score, 0)
    const maxScore = questions.length * 4
    return Math.round(((maxScore - totalScore) / maxScore) * 100)
  }

  const getScoreLevel = (score: number) => {
    if (score >= 80) return { level: "Excellent", color: "text-green-500", icon: CheckCircle }
    if (score >= 60) return { level: "Good", color: "text-blue-500", icon: Shield }
    if (score >= 40) return { level: "Fair", color: "text-yellow-500", icon: AlertTriangle }
    return { level: "Needs Improvement", color: "text-red-500", icon: AlertTriangle }
  }

  const resetAssessment = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setShowResults(false)
  }

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Free Security Assessment</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Take our 5-question interactive quiz to get a personalized security score and recommendations for your
            startup.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="shadow-2xl">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-primary" />
                  Security Assessment
                </div>
                {!showResults && (
                  <span className="text-sm text-muted-foreground">
                    {currentQuestion + 1} of {questions.length}
                  </span>
                )}
              </CardTitle>
              {!showResults && (
                <div className="mt-4">
                  <Progress value={((currentQuestion + 1) / questions.length) * 100} className="h-2" />
                </div>
              )}
            </CardHeader>
            <CardContent className="p-8">
              {!showResults ? (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-foreground mb-6">{questions[currentQuestion].question}</h3>

                  <RadioGroup
                    value={answers[questions[currentQuestion].id]?.toString()}
                    onValueChange={(value) =>
                      handleAnswer(
                        questions[currentQuestion].id,
                        questions[currentQuestion].options.find((opt) => opt.score.toString() === value)?.score || 0,
                      )
                    }
                  >
                    {questions[currentQuestion].options.map((option, index) => (
                      <div key={index} className="flex items-center space-x-2 p-3 rounded-lg hover:bg-muted/50">
                        <RadioGroupItem value={option.score.toString()} id={`option-${index}`} />
                        <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                          {option.label}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>

                  <div className="flex justify-between pt-6">
                    <Button
                      variant="outline"
                      onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                      disabled={currentQuestion === 0}
                      className="bg-transparent"
                    >
                      Previous
                    </Button>
                    <Button onClick={nextQuestion} disabled={!answers[questions[currentQuestion].id]} className="group">
                      {currentQuestion === questions.length - 1 ? "Get Results" : "Next"}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">Your Security Score</h3>
                    <div className="relative inline-flex items-center justify-center w-32 h-32 mb-6">
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
                          strokeDasharray={`${calculateScore()}, 100`}
                          strokeLinecap="round"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-3xl font-bold text-primary">{calculateScore()}</span>
                      </div>
                    </div>
                    <div className={`text-xl font-semibold ${getScoreLevel(calculateScore()).color} mb-2`}>
                      {getScoreLevel(calculateScore()).level}
                    </div>
                  </div>

                  <div className="bg-muted/50 rounded-lg p-6 text-left">
                    <h4 className="font-semibold text-foreground mb-4">Recommendations for Your Startup</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {calculateScore() < 60 && (
                        <>
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                            Implement comprehensive endpoint protection immediately
                          </li>
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                            Establish regular security assessment procedures
                          </li>
                        </>
                      )}
                      {calculateScore() < 80 && (
                        <>
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3"></div>
                            Consider upgrading to advanced threat protection
                          </li>
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3"></div>
                            Implement network security monitoring
                          </li>
                        </>
                      )}
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                        Schedule a demo to see how Osto.one can improve your security posture
                      </li>
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="group">
                      Schedule Demo Based on Results
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button variant="outline" onClick={resetAssessment} className="bg-transparent">
                      Retake Assessment
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
