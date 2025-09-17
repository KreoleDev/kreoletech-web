// Mock data for dashboard components

export interface ProjectRequest {
  id: string
  name: string
  email: string
  company?: string
  projectType: "web" | "mobile" | "desktop" | "consulting" | "other"
  budget: string
  timeline: string
  description: string
  status: "new" | "contacted" | "in-progress" | "proposal-sent" | "closed-won" | "closed-lost"
  priority: "low" | "medium" | "high"
  createdAt: string
  updatedAt: string
  estimatedValue?: number
}

export const mockProjectRequests: ProjectRequest[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    email: "sarah@techstartup.com",
    company: "TechStartup Inc",
    projectType: "web",
    budget: "$10,000 - $25,000",
    timeline: "3-4 months",
    description: "Need a modern e-commerce platform with payment integration and inventory management.",
    status: "new",
    priority: "high",
    createdAt: "2024-01-22T10:30:00Z",
    updatedAt: "2024-01-22T10:30:00Z",
    estimatedValue: 18000,
  },
  {
    id: "2",
    name: "Michael Chen",
    email: "m.chen@retailcorp.com",
    company: "RetailCorp",
    projectType: "mobile",
    budget: "$25,000 - $50,000",
    timeline: "4-6 months",
    description: "iOS and Android app for customer loyalty program with push notifications.",
    status: "contacted",
    priority: "medium",
    createdAt: "2024-01-21T14:15:00Z",
    updatedAt: "2024-01-22T09:45:00Z",
    estimatedValue: 35000,
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    email: "emily@designstudio.com",
    company: "Creative Design Studio",
    projectType: "web",
    budget: "$5,000 - $10,000",
    timeline: "2-3 months",
    description: "Portfolio website with CMS for showcasing design work and client testimonials.",
    status: "in-progress",
    priority: "medium",
    createdAt: "2024-01-20T16:20:00Z",
    updatedAt: "2024-01-22T11:00:00Z",
    estimatedValue: 8000,
  },
  {
    id: "4",
    name: "David Park",
    email: "david@healthtech.com",
    company: "HealthTech Solutions",
    projectType: "web",
    budget: "$50,000+",
    timeline: "6+ months",
    description: "HIPAA-compliant patient management system with telemedicine features.",
    status: "proposal-sent",
    priority: "high",
    createdAt: "2024-01-19T11:30:00Z",
    updatedAt: "2024-01-21T15:30:00Z",
    estimatedValue: 75000,
  },
  {
    id: "5",
    name: "Lisa Thompson",
    email: "lisa@nonprofit.org",
    company: "Community Nonprofit",
    projectType: "web",
    budget: "$2,500 - $5,000",
    timeline: "1-2 months",
    description: "Simple donation website with volunteer registration and event calendar.",
    status: "closed-won",
    priority: "low",
    createdAt: "2024-01-18T09:45:00Z",
    updatedAt: "2024-01-20T14:20:00Z",
    estimatedValue: 4000,
  },
  {
    id: "6",
    name: "Robert Kim",
    email: "robert@fintech.com",
    company: "FinTech Innovations",
    projectType: "mobile",
    budget: "$25,000 - $50,000",
    timeline: "4-5 months",
    description: "Cryptocurrency trading app with real-time market data and portfolio tracking.",
    status: "closed-lost",
    priority: "high",
    createdAt: "2024-01-17T13:15:00Z",
    updatedAt: "2024-01-19T10:30:00Z",
    estimatedValue: 40000,
  },
  {
    id: "7",
    name: "Amanda Wilson",
    email: "amanda@restaurant.com",
    company: "Wilson's Restaurant Group",
    projectType: "web",
    budget: "$10,000 - $25,000",
    timeline: "2-3 months",
    description: "Multi-location restaurant website with online ordering and reservation system.",
    status: "contacted",
    priority: "medium",
    createdAt: "2024-01-16T15:45:00Z",
    updatedAt: "2024-01-18T12:15:00Z",
    estimatedValue: 15000,
  },
  {
    id: "8",
    name: "James Martinez",
    email: "james@consulting.com",
    company: "Martinez Consulting",
    projectType: "consulting",
    budget: "$5,000 - $10,000",
    timeline: "1-2 months",
    description: "Technical audit and optimization recommendations for existing web application.",
    status: "in-progress",
    priority: "low",
    createdAt: "2024-01-15T10:20:00Z",
    updatedAt: "2024-01-21T16:45:00Z",
    estimatedValue: 7500,
  },
]

export function getProjectRequests(): ProjectRequest[] {
  return mockProjectRequests
}

export function getProjectRequestById(id: string): ProjectRequest | undefined {
  return mockProjectRequests.find((request) => request.id === id)
}

export function getProjectRequestStats() {
  const requests = getProjectRequests()

  const stats = {
    total: requests.length,
    totalValue: requests.reduce((sum, req) => sum + (req.estimatedValue || 0), 0),
    byStatus: {} as Record<string, number>,
    byProjectType: {} as Record<string, number>,
    byPriority: {} as Record<string, number>,
    conversionRate: 0,
  }

  // Calculate status distribution
  requests.forEach((req) => {
    stats.byStatus[req.status] = (stats.byStatus[req.status] || 0) + 1
    stats.byProjectType[req.projectType] = (stats.byProjectType[req.projectType] || 0) + 1
    stats.byPriority[req.priority] = (stats.byPriority[req.priority] || 0) + 1
  })

  // Calculate conversion rate
  const closedWon = stats.byStatus["closed-won"] || 0
  const totalClosed = (stats.byStatus["closed-won"] || 0) + (stats.byStatus["closed-lost"] || 0)
  stats.conversionRate = totalClosed > 0 ? Math.round((closedWon / totalClosed) * 100) : 0

  return stats
}

export function getRecentActivity() {
  return mockProjectRequests
    .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
    .slice(0, 5)
    .map((req) => ({
      id: req.id,
      type: "project_request",
      title: `${req.name} - ${req.projectType} project`,
      description: req.description.substring(0, 100) + "...",
      timestamp: req.updatedAt,
      status: req.status,
    }))
}
