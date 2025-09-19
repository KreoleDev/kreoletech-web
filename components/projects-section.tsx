"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Globe, Smartphone, Monitor, Users } from "lucide-react"

const projects = [
  {
    title: "NutriPlan Pro",
    description: "Complete nutrition management platform for dietitians and nutritionists",
    category: "Healthcare",
    icon: <Users className="w-6 h-6" />,
    link: "https://mapped-out-nutrition.vercel.app",
    image: "/nutrition-app-dashboard.png",
  },
  {
    title: "Salon Booking System",
    description: "Modern appointment booking and management system for beauty salons",
    category: "Beauty & Wellness",
    icon: <Monitor className="w-6 h-6" />,
    link: "https://salon-gilt.vercel.app/",
    image: "/salon-booking-app-interface.jpg",
  },
  {
    title: "Food/Drinks",
    description: "Complete restaurant Website with online ordering and management features",
    category: "Food & Beverage",
    icon: <Globe className="w-6 h-6" />,
    link: "https://el-vaquero.vercel.app/",
    image: "/restaurant-management-dashboard.png",
  },
  {
    title: "Mislenious Art Business",
    description: "Portfolio and e-commerce site for artists and designers",
    category: "Art & Design",
    icon: <Monitor className="w-6 h-6" />,
    link: "https://timelessstrokes.vercel.app",
    image: "/misleniusart.png",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Try <span className="text-primary"> These Already Built Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore some of the innovative solutions we've built thinking about your business. Each project
            showcases our expertise in creating tailored software solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card border-border animate-slide-up cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => window.open(project.link, "_blank")}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </div>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 p-2 rounded-full">
                      <ExternalLink className="w-4 h-4 text-gray-800" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-primary">{project.icon}</div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-primary font-medium">View Live Demo</span>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  )
}
