import { Card, CardContent } from "@/components/ui/card"
import { FileX, Eye, Shield, AlertCircle } from "lucide-react"

const useCases = [
  {
    icon: FileX,
    title: "File Upload Blocking",
    description: "Automatically block malicious file uploads and downloads across all endpoints.",
    scenario:
      "An employee attempts to download a suspicious .exe file from an email attachment. Osto.one instantly blocks the download and quarantines the file.",
    result: "Prevented potential ransomware infection",
  },
  {
    icon: Eye,
    title: "PII Detection & Protection",
    description: "Identify and protect personally identifiable information from unauthorized access or transmission.",
    scenario:
      "A user tries to copy customer credit card data to a USB drive. The system detects PII patterns and blocks the transfer while alerting security teams.",
    result: "Compliance violation prevented",
  },
  {
    icon: Shield,
    title: "Policy Enforcement",
    description: "Enforce security policies consistently across all devices and user accounts.",
    scenario:
      "A new employee joins and their device is automatically configured with company security policies, including software restrictions and data handling rules.",
    result: "Instant compliance and protection",
  },
]

export function EndpointUseCases() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Real-world Protection Scenarios</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how Osto.one endpoint security protects your business in common attack scenarios.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="inline-flex p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors mb-4">
                    <useCase.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{useCase.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{useCase.description}</p>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-medium text-foreground mb-2 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-2 text-yellow-500" />
                      Scenario
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{useCase.scenario}</p>
                  </div>

                  <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                    <h4 className="font-medium text-foreground mb-2 flex items-center">
                      <Shield className="w-4 h-4 mr-2 text-green-500" />
                      Result
                    </h4>
                    <p className="text-sm text-green-700 dark:text-green-300 font-medium">{useCase.result}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
