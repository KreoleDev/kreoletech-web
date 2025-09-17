"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getProjectRequestStats } from "@/lib/mock-data"
import { Users, DollarSign, TrendingUp, Clock, CheckCircle, XCircle } from "lucide-react"

export function DashboardOverview() {
  const stats = getProjectRequestStats()

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="animate-fade-in-up">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Requests</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.total}</div>
            <p className="text-xs text-muted-foreground">Active pipeline</p>
          </CardContent>
        </Card>

        <Card className="animate-fade-in-up animate-delay-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pipeline Value</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(stats.totalValue)}</div>
            <p className="text-xs text-muted-foreground">Estimated total value</p>
          </CardContent>
        </Card>

        <Card className="animate-fade-in-up animate-delay-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.conversionRate}%</div>
            <p className="text-xs text-muted-foreground">Closed won rate</p>
          </CardContent>
        </Card>

        <Card className="animate-fade-in-up animate-delay-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.byStatus["in-progress"] || 0}</div>
            <p className="text-xs text-muted-foreground">Currently in progress</p>
          </CardContent>
        </Card>
      </div>

      {/* Status Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="animate-fade-in-up animate-delay-400">
          <CardHeader>
            <CardTitle>Request Status</CardTitle>
            <CardDescription>Breakdown of all project requests by status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {Object.entries(stats.byStatus).map(([status, count]) => {
                const getStatusColor = (status: string) => {
                  switch (status) {
                    case "new":
                      return "bg-blue-500"
                    case "contacted":
                      return "bg-yellow-500"
                    case "in-progress":
                      return "bg-orange-500"
                    case "proposal-sent":
                      return "bg-purple-500"
                    case "closed-won":
                      return "bg-green-500"
                    case "closed-lost":
                      return "bg-red-500"
                    default:
                      return "bg-gray-500"
                  }
                }

                const getStatusIcon = (status: string) => {
                  switch (status) {
                    case "closed-won":
                      return <CheckCircle className="h-4 w-4" />
                    case "closed-lost":
                      return <XCircle className="h-4 w-4" />
                    default:
                      return <Clock className="h-4 w-4" />
                  }
                }

                return (
                  <div key={status} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className={`w-3 h-3 rounded-full ${getStatusColor(status)}`} />
                      <span className="capitalize text-sm font-medium">{status.replace("-", " ")}</span>
                      {getStatusIcon(status)}
                    </div>
                    <Badge variant="secondary">{count}</Badge>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        <Card className="animate-fade-in-up animate-delay-500">
          <CardHeader>
            <CardTitle>Project Types</CardTitle>
            <CardDescription>Distribution of requests by project type</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {Object.entries(stats.byProjectType).map(([type, count]) => {
                const getTypeColor = (type: string) => {
                  switch (type) {
                    case "web":
                      return "bg-blue-500"
                    case "mobile":
                      return "bg-green-500"
                    case "desktop":
                      return "bg-purple-500"
                    case "consulting":
                      return "bg-orange-500"
                    case "other":
                      return "bg-gray-500"
                    default:
                      return "bg-gray-500"
                  }
                }

                return (
                  <div key={type} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className={`w-3 h-3 rounded-full ${getTypeColor(type)}`} />
                      <span className="capitalize text-sm font-medium">{type}</span>
                    </div>
                    <Badge variant="secondary">{count}</Badge>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
