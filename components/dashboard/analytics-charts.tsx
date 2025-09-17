"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getAnalyticsData } from "@/lib/analytics-data"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts"

const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#06b6d4"]

export function AnalyticsCharts() {
  const analytics = getAnalyticsData()

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  const formatBudgetLabel = (budget: string) => {
    const labels = {
      "under-10k": "Under $10K",
      "10k-25k": "$10K-$25K",
      "25k-50k": "$25K-$50K",
      "50k-100k": "$50K-$100K",
      "over-100k": "Over $100K",
    }
    return labels[budget as keyof typeof labels] || budget
  }

  return (
    <div className="space-y-6">
      {/* Requests Over Time */}
      <Card className="animate-fade-in-up">
        <CardHeader>
          <CardTitle>Requests Over Time</CardTitle>
          <CardDescription>Track incoming project requests and their estimated value</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={analytics.requestsOverTime}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="date"
                  tickFormatter={(value) =>
                    new Date(value).toLocaleDateString("en-US", { month: "short", day: "numeric" })
                  }
                />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" tickFormatter={(value) => formatCurrency(value)} />
                <Tooltip
                  labelFormatter={(value) => new Date(value).toLocaleDateString()}
                  formatter={(value, name) => [
                    name === "requests" ? value : formatCurrency(Number(value)),
                    name === "requests" ? "Requests" : "Estimated Value",
                  ]}
                />
                <Bar yAxisId="left" dataKey="requests" fill="#3b82f6" name="requests" />
                <Line yAxisId="right" type="monotone" dataKey="value" stroke="#10b981" strokeWidth={2} name="value" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Source Breakdown */}
        <Card className="animate-fade-in-up animate-delay-100">
          <CardHeader>
            <CardTitle>Lead Sources</CardTitle>
            <CardDescription>Where your project requests are coming from</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={analytics.sourceBreakdown}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ source, percentage }) => `${source} (${percentage}%)`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="count"
                  >
                    {analytics.sourceBreakdown.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 space-y-2">
              {analytics.sourceBreakdown.map((item, index) => (
                <div key={item.source} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }} />
                    <span className="capitalize text-sm">{item.source}</span>
                  </div>
                  <Badge variant="secondary">
                    {item.count} ({item.percentage}%)
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Budget Distribution */}
        <Card className="animate-fade-in-up animate-delay-200">
          <CardHeader>
            <CardTitle>Budget Distribution</CardTitle>
            <CardDescription>Project requests by budget range</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={analytics.budgetDistribution} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" tickFormatter={(value) => formatCurrency(value)} />
                  <YAxis type="category" dataKey="budget" tickFormatter={formatBudgetLabel} width={80} />
                  <Tooltip
                    formatter={(value, name) => [
                      name === "count" ? value : formatCurrency(Number(value)),
                      name === "count" ? "Requests" : "Total Value",
                    ]}
                    labelFormatter={(label) => formatBudgetLabel(label)}
                  />
                  <Bar dataKey="value" fill="#10b981" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Conversion Funnel */}
        <Card className="animate-fade-in-up animate-delay-300">
          <CardHeader>
            <CardTitle>Conversion Funnel</CardTitle>
            <CardDescription>Track requests through the sales process</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {analytics.conversionFunnel.map((stage, index) => (
                <div key={stage.stage} className="relative">
                  <div className="flex items-center justify-between mb-2">
                    <span className="capitalize font-medium">{stage.stage}</span>
                    <Badge variant="outline">
                      {stage.count} ({stage.percentage}%)
                    </Badge>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3">
                    <div
                      className="bg-primary h-3 rounded-full transition-all duration-500"
                      style={{ width: `${stage.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Timeline Analysis */}
        <Card className="animate-fade-in-up animate-delay-400">
          <CardHeader>
            <CardTitle>Timeline Analysis</CardTitle>
            <CardDescription>Project timelines and average budget</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {analytics.timelineAnalysis.map((item) => (
                <div key={item.timeline} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <div className="font-medium capitalize">{item.timeline.replace("-", " ")}</div>
                    <div className="text-sm text-muted-foreground">{item.count} requests</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">{formatCurrency(item.avgBudget)}</div>
                    <div className="text-sm text-muted-foreground">avg budget</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Priority Breakdown */}
      <Card className="animate-fade-in-up animate-delay-500">
        <CardHeader>
          <CardTitle>Priority Distribution</CardTitle>
          <CardDescription>Breakdown of project requests by priority level</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {analytics.priorityBreakdown.map((item) => {
              const priorityColors = {
                low: "bg-gray-100 text-gray-800 border-gray-200",
                medium: "bg-yellow-100 text-yellow-800 border-yellow-200",
                high: "bg-red-100 text-red-800 border-red-200",
              }

              return (
                <div
                  key={item.priority}
                  className={`p-4 rounded-lg border-2 ${priorityColors[item.priority as keyof typeof priorityColors]}`}
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold">{item.count}</div>
                    <div className="text-sm font-medium capitalize">{item.priority} Priority</div>
                    <div className="text-xs mt-1">{item.percentage}% of total</div>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
