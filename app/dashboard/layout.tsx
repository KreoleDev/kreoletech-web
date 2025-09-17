"use client"
import type React from "react"
import { usePathname } from "next/navigation"
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar"
import { AuthProvider } from "@/lib/auth"
import { AuthGuard } from "@/components/dashboard/auth-guard"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isLoginPage = pathname === "/dashboard/login"

  return (
    <AuthProvider>
      {isLoginPage ? (
        <main className="min-h-screen flex items-center justify-center bg-background">
          {children}
        </main>
      ) : (
        <AuthGuard>
          <div className="min-h-screen bg-background">
            <DashboardSidebar />
            <div className="lg:pl-64">
              <main className="p-6 lg:p-8">{children}</main>
            </div>
          </div>
        </AuthGuard>
      )}
    </AuthProvider>
  )
}