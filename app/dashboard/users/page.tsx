import { UsersManagement } from "@/components/dashboard/users-management"

export default function DashboardUsersPage() {
  return (
    <div className="space-y-6">
      <div className="animate-fade-in-up">
        <h1 className="text-3xl font-bold">User Management</h1>
        <p className="text-muted-foreground">Manage team members, roles, and access permissions for the dashboard.</p>
      </div>

      <UsersManagement />
    </div>
  )
}
