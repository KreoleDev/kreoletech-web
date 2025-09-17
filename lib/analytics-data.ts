import { getProjectRequests } from "./mock-data"

export interface AnalyticsData {
  requestsOverTime: Array<{ date: string; requests: number; value: number }>
  sourceBreakdown: Array<{ source: string; count: number; percentage: number }>
  budgetDistribution: Array<{ budget: string; count: number; value: number }>
  conversionFunnel: Array<{ stage: string; count: number; percentage: number }>
  timelineAnalysis: Array<{ timeline: string; count: number; avgBudget: number }>
  priorityBreakdown: Array<{ priority: string; count: number; percentage: number }>
}

export const getAnalyticsData = (): AnalyticsData => {
  const requests = getProjectRequests()

  // Requests over time (mock monthly data)
  const requestsOverTime = [
    { date: "2024-01-01", requests: 2, value: 42500 },
    { date: "2024-01-08", requests: 1, value: 5000 },
    { date: "2024-01-12", requests: 1, value: 17500 },
    { date: "2024-01-15", requests: 1, value: 37500 },
    { date: "2024-01-18", requests: 1, value: 150000 },
    { date: "2024-01-20", requests: 1, value: 75000 },
  ]

  // Source breakdown
  const sourceData = requests.reduce(
    (acc, request) => {
      acc[request.source] = (acc[request.source] || 0) + 1
      return acc
    },
    {} as Record<string, number>,
  )

  const totalRequests = requests.length
  const sourceBreakdown = Object.entries(sourceData).map(([source, count]) => ({
    source,
    count,
    percentage: Math.round((count / totalRequests) * 100),
  }))

  // Budget distribution
  const budgetData = requests.reduce(
    (acc, request) => {
      acc[request.budget] = (acc[request.budget] || 0) + 1
      return acc
    },
    {} as Record<string, number>,
  )

  const budgetValues = {
    "under-10k": 5000,
    "10k-25k": 17500,
    "25k-50k": 37500,
    "50k-100k": 75000,
    "over-100k": 150000,
  }

  const budgetDistribution = Object.entries(budgetData).map(([budget, count]) => ({
    budget,
    count,
    value: budgetValues[budget as keyof typeof budgetValues] * count,
  }))

  // Conversion funnel
  const statusOrder = ["new", "contacted", "proposal-sent", "in-progress", "closed-won"]
  const statusData = requests.reduce(
    (acc, request) => {
      acc[request.status] = (acc[request.status] || 0) + 1
      return acc
    },
    {} as Record<string, number>,
  )

  const conversionFunnel = statusOrder.map((status) => ({
    stage: status.replace("-", " "),
    count: statusData[status] || 0,
    percentage: Math.round(((statusData[status] || 0) / totalRequests) * 100),
  }))

  // Timeline analysis
  const timelineData = requests.reduce(
    (acc, request) => {
      if (!acc[request.timeline]) {
        acc[request.timeline] = { count: 0, totalBudget: 0 }
      }
      acc[request.timeline].count += 1
      acc[request.timeline].totalBudget += budgetValues[request.budget]
      return acc
    },
    {} as Record<string, { count: number; totalBudget: number }>,
  )

  const timelineAnalysis = Object.entries(timelineData).map(([timeline, data]) => ({
    timeline,
    count: data.count,
    avgBudget: Math.round(data.totalBudget / data.count),
  }))

  // Priority breakdown
  const priorityData = requests.reduce(
    (acc, request) => {
      acc[request.priority] = (acc[request.priority] || 0) + 1
      return acc
    },
    {} as Record<string, number>,
  )

  const priorityBreakdown = Object.entries(priorityData).map(([priority, count]) => ({
    priority,
    count,
    percentage: Math.round((count / totalRequests) * 100),
  }))

  return {
    requestsOverTime,
    sourceBreakdown,
    budgetDistribution,
    conversionFunnel,
    timelineAnalysis,
    priorityBreakdown,
  }
}
