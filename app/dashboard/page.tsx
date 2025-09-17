import { DashboardOverview } from "@/components/dashboard/dashboard-overview"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="animate-fade-in-up">
        <h1 className="text-3xl font-bold">Dashboard Overview</h1>
        <p className="text-muted-foreground">
          Welcome to your dashboard. Here's an overview of your project requests and business metrics.
        </p>
      </div>

      <DashboardOverview />
    </div>
  )
}
