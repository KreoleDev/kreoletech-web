import { AnalyticsCharts } from "@/components/dashboard/analytics-charts"

export default function DashboardAnalyticsPage() {
  return (
    <div className="space-y-6">
      <div className="animate-fade-in-up">
        <h1 className="text-3xl font-bold">Analytics Overview</h1>
        <p className="text-muted-foreground">
          Detailed insights into your project requests, conversion rates, and business performance.
        </p>
      </div>

      <AnalyticsCharts />
    </div>
  )
}
