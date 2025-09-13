import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Video, Users } from "lucide-react"

const timeSlots = [
  { time: "9:00 AM", available: true },
  { time: "10:30 AM", available: false },
  { time: "12:00 PM", available: true },
  { time: "2:00 PM", available: true },
  { time: "3:30 PM", available: false },
  { time: "5:00 PM", available: true },
]

const demoTypes = [
  {
    icon: Video,
    title: "Live Product Demo",
    duration: "30 minutes",
    description: "See Osto.one in action with real threat scenarios",
  },
  {
    icon: Users,
    title: "Technical Deep Dive",
    duration: "45 minutes",
    description: "Detailed technical discussion with our security experts",
  },
  {
    icon: Clock,
    title: "Quick Overview",
    duration: "15 minutes",
    description: "Fast introduction to our key security features",
  },
]

export function CalendarIntegration() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Schedule Your Demo</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose a time that works for you. All demos are conducted by our security experts and tailored to your
            specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Demo Types */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6">Choose Your Demo Type</h3>
            {demoTypes.map((demo, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <demo.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-semibold text-foreground">{demo.title}</h4>
                        <span className="text-sm text-muted-foreground">{demo.duration}</span>
                      </div>
                      <p className="text-muted-foreground">{demo.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Calendar */}
          <Card className="shadow-2xl">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-primary" />
                Available Time Slots
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center mb-6">
                  <h4 className="font-semibold text-foreground mb-2">Today - December 15, 2024</h4>
                  <p className="text-sm text-muted-foreground">All times shown in PST</p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {timeSlots.map((slot, index) => (
                    <Button
                      key={index}
                      variant={slot.available ? "outline" : "secondary"}
                      disabled={!slot.available}
                      className={`h-12 ${
                        slot.available
                          ? "bg-transparent hover:bg-primary hover:text-primary-foreground"
                          : "opacity-50 cursor-not-allowed"
                      }`}
                    >
                      {slot.time}
                    </Button>
                  ))}
                </div>

                <div className="pt-6 border-t border-border">
                  <h4 className="font-semibold text-foreground mb-4">Tomorrow - December 16, 2024</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      variant="outline"
                      className="h-12 bg-transparent hover:bg-primary hover:text-primary-foreground"
                    >
                      9:00 AM
                    </Button>
                    <Button
                      variant="outline"
                      className="h-12 bg-transparent hover:bg-primary hover:text-primary-foreground"
                    >
                      11:00 AM
                    </Button>
                    <Button
                      variant="outline"
                      className="h-12 bg-transparent hover:bg-primary hover:text-primary-foreground"
                    >
                      1:00 PM
                    </Button>
                    <Button
                      variant="outline"
                      className="h-12 bg-transparent hover:bg-primary hover:text-primary-foreground"
                    >
                      4:00 PM
                    </Button>
                  </div>
                </div>

                <div className="pt-6 border-t border-border text-center">
                  <p className="text-sm text-muted-foreground mb-4">Can't find a suitable time? We're flexible!</p>
                  <Button variant="outline" className="bg-transparent">
                    Request Custom Time
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
