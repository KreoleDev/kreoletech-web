import { ProjectRequestsTable } from "@/components/dashboard/project-requests-table"

export default function DashboardRequestsPage() {
  return (
    <div className="space-y-6">
      <div className="animate-fade-in-up">
        <h1 className="text-3xl font-bold">Project Requests</h1>
        <p className="text-muted-foreground">Manage and track all incoming project requests from potential clients.</p>
      </div>

      <ProjectRequestsTable />
    </div>
  )
}
