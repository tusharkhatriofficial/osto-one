"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { AlertTriangle, CheckCircle, Shield, Activity, Laptop, Smartphone, Monitor } from "lucide-react"

export function EndpointDashboard() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Real-time Threat Detection Dashboard</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get complete visibility into your endpoint security posture with our intuitive dashboard and real-time
            monitoring.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Dashboard */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Activity className="w-5 h-5 mr-2 text-primary" />
                  Threat Detection Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Recent Threats */}
                  <div>
                    <h4 className="font-medium text-foreground mb-4">Recent Security Events</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                        <div className="flex items-center">
                          <AlertTriangle className="w-4 h-4 text-red-500 mr-3" />
                          <div>
                            <p className="text-sm font-medium text-foreground">Malware Blocked</p>
                            <p className="text-xs text-muted-foreground">Trojan.Win32.Agent detected on LAPTOP-001</p>
                          </div>
                        </div>
                        <Badge variant="destructive">Blocked</Badge>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                        <div className="flex items-center">
                          <AlertTriangle className="w-4 h-4 text-yellow-500 mr-3" />
                          <div>
                            <p className="text-sm font-medium text-foreground">Suspicious Activity</p>
                            <p className="text-xs text-muted-foreground">Unusual network traffic from DESKTOP-042</p>
                          </div>
                        </div>
                        <Badge variant="secondary">Investigating</Badge>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                        <div className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                          <div>
                            <p className="text-sm font-medium text-foreground">Policy Compliance</p>
                            <p className="text-xs text-muted-foreground">
                              All devices updated to latest security policies
                            </p>
                          </div>
                        </div>
                        <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                          Resolved
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Protection Status */}
                  <div>
                    <h4 className="font-medium text-foreground mb-4">Protection Coverage</h4>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-muted-foreground">Antimalware Protection</span>
                          <span className="text-foreground">98%</span>
                        </div>
                        <Progress value={98} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-muted-foreground">Device Control</span>
                          <span className="text-foreground">95%</span>
                        </div>
                        <Progress value={95} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-muted-foreground">Data Loss Prevention</span>
                          <span className="text-foreground">92%</span>
                        </div>
                        <Progress value={92} className="h-2" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Stats */}
          <div className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-primary" />
                  Security Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-500 mb-1">247</div>
                    <div className="text-sm text-muted-foreground">Protected Devices</div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <Laptop className="w-6 h-6 mx-auto mb-2 text-primary" />
                      <div className="text-lg font-semibold text-foreground">156</div>
                      <div className="text-xs text-muted-foreground">Laptops</div>
                    </div>
                    <div>
                      <Monitor className="w-6 h-6 mx-auto mb-2 text-primary" />
                      <div className="text-lg font-semibold text-foreground">78</div>
                      <div className="text-xs text-muted-foreground">Desktops</div>
                    </div>
                    <div>
                      <Smartphone className="w-6 h-6 mx-auto mb-2 text-primary" />
                      <div className="text-lg font-semibold text-foreground">13</div>
                      <div className="text-xs text-muted-foreground">Mobile</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Threat Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Threats Blocked Today</span>
                    <span className="text-lg font-semibold text-red-500">23</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">This Week</span>
                    <span className="text-lg font-semibold text-red-500">156</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">This Month</span>
                    <span className="text-lg font-semibold text-red-500">1,247</span>
                  </div>
                  <div className="pt-2 border-t border-border">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">Detection Rate</span>
                      <span className="text-lg font-bold text-green-500">99.9%</span>
                    </div>
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
