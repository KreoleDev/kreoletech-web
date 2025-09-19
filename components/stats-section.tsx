import { Card } from "@/components/ui/card"

const stats = [
  {
    value: "99%",
    label: "Client Satisfaction",
    description: "Quality guaranteed",
  },
  {
    value: "24/7",
    label: "Support Available",
    description: "Always here to help",
  },
  {
    value: "10+",
    label: "Years Experience",
    description: "Industry expertise",
  },
]

export function StatsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="container mx-auto">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className={`p-6 text-center bg-card/50 border-border hover:bg-card/80 transition-colors hover-lift animate-scale-in animate-delay-${(index + 1) * 100}`}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2 animate-pulse-slow">{stat.value}</div>
              <div className="text-sm font-medium text-foreground mb-1">{stat.label}</div>
              <div className="text-xs text-muted-foreground">{stat.description}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
