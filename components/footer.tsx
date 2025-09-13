import Link from "next/link"
import { Shield, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-primary">Osto</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              Enterprise-grade cybersecurity for startups. Protect your business from endpoint to cloud with our fast,
              automated, and reliable security solutions.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-muted-foreground">
                <Mail className="w-4 h-4 mr-2" />
                <span>hello@Osto</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Phone className="w-4 h-4 mr-2" />
                <span>+91 9968290156</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Gurugram, India</span>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/endpoint-security" className="text-muted-foreground hover:text-primary transition-colors">
                  Endpoint Security
                </Link>
              </li>
              <li>
                <Link href="/network-security" className="text-muted-foreground hover:text-primary transition-colors">
                  Network Security
                </Link>
              </li>
              <li>
                <Link href="/cloud-security" className="text-muted-foreground hover:text-primary transition-colors">
                  Cloud Security
                </Link>
              </li>
              <li>
                <Link href="/compliance" className="text-muted-foreground hover:text-primary transition-colors">
                  Compliance & VAPT
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/demo" className="text-muted-foreground hover:text-primary transition-colors">
                  Request Demo
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">© 2024 Osto. All rights reserved.</p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-sm text-muted-foreground">
                <Shield className="w-4 h-4 mr-1 text-green-500" />
                SOC2 Compliant
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Shield className="w-4 h-4 mr-1 text-green-500" />
                ISO27001 Certified
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
