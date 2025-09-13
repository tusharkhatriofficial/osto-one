"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Linkedin, Twitter, Mail } from "lucide-react"

const founders = [
  {
    name: "Karmesh Gupta",
    role: "Co-Founder & CEO",
    bio: "Co-Founded WiJungle, a state of the art Network Security Product, focused primarily towards government. With deployments over 550+ Organisations",
    image: "https://media.licdn.com/dms/image/v2/D5603AQH_Ee8IoB10dg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1711996778669?e=1760572800&v=beta&t=tvpFygIdUsd8TgbxPXqD1iaM2d2mWWkrGPFwL0FQFho",
    linkedin: "#",
    twitter: "#",
    email: "sarah@Osto",
    expertise: ["Strategic Leadership", "Enterprise Security", "Compliance"],
  },
  {
    name: "Praveen Gupta",
    role: "Co-Founder & CTO",
    bio: "Ex-Samsung, working with a vision to transform 1 million+ SMBs into security powerhouses through our upcoming product. I am deeply passionate about solving complex problems and excel at finding innovative solutions.",
    image: "https://github-production-user-asset-6210df.s3.amazonaws.com/64004539/489161074-13aa1954-ed4f-4744-97f5-add9dcaf62ae.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250913%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250913T115855Z&X-Amz-Expires=300&X-Amz-Signature=be87e8b33ecf42fedc69661e24717662bf92fe537efb49b3cf8a4f98266d6866&X-Amz-SignedHeaders=host",
    linkedin: "#",
    twitter: "#",
    email: "marcus@Osto",
    expertise: ["Security Architecture", "AI/ML", "Cloud Security"],
  },
  {
    name: "Prabhat Ranjan",
    role: "Senior SWE",
    bio: "Senior Software Engineer | Problem-Solver | Distributed Systems Enthusiast Passionate about building scalable and reliable distributed software systems that solve real-world problems.",
    image: "http://media.licdn.com/dms/image/v2/D4D03AQH5Zbix6zb4Kg/profile-displayphoto-shrink_400_400/B4DZaXUb7SHEAk-/0/1746295440265?e=1760572800&v=beta&t=HcPXvuI17FyaGQ5GwQNfmlbGTNd4ZBtDC2B6cD73FA4",
    linkedin: "#",
    twitter: "#",
    email: "emily@Osto",
    expertise: ["Product Strategy", "User Experience", "Security UX"],
  },
]

export function TeamProfiles() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Meet Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Security experts, startup veterans, and passionate builders working together to protect the next generation
            of innovative companies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {founders.map((founder, index) => (
            <Card key={index} className="shadow-2xl hover:shadow-3xl transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="relative inline-block mb-4">
                    <img
                      src={founder.image || "/placeholder.svg"}
                      alt={founder.name}
                      className="w-32 h-32 rounded-full object-cover mx-auto group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{founder.name}</h3>
                  <p className="text-primary font-medium mb-4">{founder.role}</p>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6 text-center">{founder.bio}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3 text-center">Expertise</h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {founder.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center space-x-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="hover:bg-blue-50 hover:border-blue-200 bg-transparent"
                  >
                    <Linkedin className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="hover:bg-blue-50 hover:border-blue-200 bg-transparent"
                  >
                    <Twitter className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="hover:bg-blue-50 hover:border-blue-200 bg-transparent"
                  >
                    <Mail className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Values */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">Our Team Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl mb-3">🚀</div>
              <h4 className="font-semibold text-foreground mb-2">Move Fast</h4>
              <p className="text-sm text-muted-foreground">Speed is a competitive advantage in cybersecurity</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🔒</div>
              <h4 className="font-semibold text-foreground mb-2">Security First</h4>
              <p className="text-sm text-muted-foreground">Every decision prioritizes customer security</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🤝</div>
              <h4 className="font-semibold text-foreground mb-2">Customer Obsessed</h4>
              <p className="text-sm text-muted-foreground">Our customers' success is our success</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">💡</div>
              <h4 className="font-semibold text-foreground mb-2">Innovate Always</h4>
              <p className="text-sm text-muted-foreground">Continuous improvement and innovation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
