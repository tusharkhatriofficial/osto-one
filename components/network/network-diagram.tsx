"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Server, Laptop, Smartphone, Globe, Lock, Eye, AlertTriangle } from "lucide-react"

export function NetworkDiagram() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Interactive Network Flow Diagram</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Visualize how Osto.one protects your network at every layer with real-time threat detection and response.
          </p>
        </div>

        <div className="relative">
          {/* Main Network Diagram */}
          <Card className="shadow-2xl overflow-hidden">
            <CardHeader className="bg-primary/5">
              <CardTitle className="flex items-center">
                <Shield className="w-5 h-5 mr-2 text-primary" />
                Network Security Architecture
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="relative">
                {/* Internet/External */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 dark:bg-red-950/20 rounded-full mb-3">
                    <Globe className="w-8 h-8 text-red-500" />
                  </div>
                  <div className="text-sm font-medium text-foreground">Internet</div>
                  <div className="text-xs text-muted-foreground">External Threats</div>
                </div>

                {/* Threat Detection Layer */}
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/20 to-primary/10 rounded-lg"></div>
                  <div className="relative p-6">
                    <div className="flex items-center justify-center mb-4">
                      <Badge className="bg-primary text-primary-foreground">Osto.one Security Layer</Badge>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {/* ZTNA Gateway */}
                      <div className="text-center group cursor-pointer">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-950/20 rounded-lg mb-3 group-hover:scale-110 transition-transform">
                          <Lock className="w-6 h-6 text-blue-500" />
                        </div>
                        <div className="text-sm font-medium text-foreground">ZTNA Gateway</div>
                        <div className="text-xs text-muted-foreground">Identity Verification</div>
                        <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="text-xs bg-card border rounded p-2 shadow-lg">
                            <div className="text-green-600 dark:text-green-400">✓ User authenticated</div>
                            <div className="text-green-600 dark:text-green-400">✓ Device verified</div>
                            <div className="text-green-600 dark:text-green-400">✓ Access granted</div>
                          </div>
                        </div>
                      </div>

                      {/* Web Filter */}
                      <div className="text-center group cursor-pointer">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 dark:bg-green-950/20 rounded-lg mb-3 group-hover:scale-110 transition-transform">
                          <Shield className="w-6 h-6 text-green-500" />
                        </div>
                        <div className="text-sm font-medium text-foreground">Web Filter</div>
                        <div className="text-xs text-muted-foreground">Content Filtering</div>
                        <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="text-xs bg-card border rounded p-2 shadow-lg">
                            <div className="text-red-600 dark:text-red-400">✗ Malicious site blocked</div>
                            <div className="text-green-600 dark:text-green-400">✓ Safe content allowed</div>
                            <div className="text-yellow-600 dark:text-yellow-400">⚠ Suspicious flagged</div>
                          </div>
                        </div>
                      </div>

                      {/* Traffic Analysis */}
                      <div className="text-center group cursor-pointer">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 dark:bg-purple-950/20 rounded-lg mb-3 group-hover:scale-110 transition-transform">
                          <Eye className="w-6 h-6 text-purple-500" />
                        </div>
                        <div className="text-sm font-medium text-foreground">Traffic Analysis</div>
                        <div className="text-xs text-muted-foreground">Deep Inspection</div>
                        <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="text-xs bg-card border rounded p-2 shadow-lg">
                            <div className="text-blue-600 dark:text-blue-400">📊 1.2TB analyzed</div>
                            <div className="text-red-600 dark:text-red-400">🚫 47 threats blocked</div>
                            <div className="text-green-600 dark:text-green-400">✓ Normal traffic</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Internal Network */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {/* Server */}
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg mb-3">
                      <Server className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                    </div>
                    <div className="text-sm font-medium text-foreground">Servers</div>
                    <div className="text-xs text-green-500">Protected</div>
                  </div>

                  {/* Laptops */}
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg mb-3">
                      <Laptop className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                    </div>
                    <div className="text-sm font-medium text-foreground">Laptops</div>
                    <div className="text-xs text-green-500">156 Protected</div>
                  </div>

                  {/* Mobile */}
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg mb-3">
                      <Smartphone className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                    </div>
                    <div className="text-sm font-medium text-foreground">Mobile</div>
                    <div className="text-xs text-green-500">13 Protected</div>
                  </div>

                  {/* Threat Alert */}
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 dark:bg-red-950/20 rounded-lg mb-3 animate-pulse">
                      <AlertTriangle className="w-6 h-6 text-red-500" />
                    </div>
                    <div className="text-sm font-medium text-foreground">Threat Detected</div>
                    <div className="text-xs text-red-500">Blocked & Quarantined</div>
                  </div>
                </div>

                {/* Connection Lines */}
                <div className="absolute inset-0 pointer-events-none">
                  <svg className="w-full h-full" viewBox="0 0 800 400">
                    <defs>
                      <marker
                        id="arrowhead"
                        markerWidth="10"
                        markerHeight="7"
                        refX="9"
                        refY="3.5"
                        orient="auto"
                        className="fill-primary"
                      >
                        <polygon points="0 0, 10 3.5, 0 7" />
                      </marker>
                    </defs>
                    {/* Animated flow lines */}
                    <line
                      x1="400"
                      y1="80"
                      x2="400"
                      y2="160"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                      markerEnd="url(#arrowhead)"
                      className="text-primary animate-pulse"
                    />
                    <line
                      x1="400"
                      y1="240"
                      x2="400"
                      y2="320"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                      markerEnd="url(#arrowhead)"
                      className="text-primary animate-pulse"
                    />
                  </svg>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Side Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Real-time Protection Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Network Coverage</span>
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">100%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Active Policies</span>
                    <span className="text-sm font-medium text-foreground">47</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Threats Blocked Today</span>
                    <span className="text-sm font-medium text-red-500">23</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Security Layers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-sm text-muted-foreground">Identity & Access Control</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-sm text-muted-foreground">Content & Web Filtering</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                    <span className="text-sm text-muted-foreground">Traffic Analysis & DPI</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
