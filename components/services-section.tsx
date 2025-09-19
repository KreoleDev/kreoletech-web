import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Smartphone, Globe, Palette, MessageSquare, Wrench, Code, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Modern, responsive web applications built with cutting-edge technologies and best practices.",
    features: ["React & Next.js", "Full-stack solutions", "Performance optimized"],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native iOS and Android apps that deliver exceptional user experiences across all devices.",
    features: ["iOS & Android", "Cross-platform", "App Store ready"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive designs that convert visitors into customers and users into advocates.",
    features: ["User research", "Prototyping", "Design systems"],
  },
  {
    icon: MessageSquare,
    title: "Consulting",
    description: "Strategic technology consulting to help you make informed decisions and optimize your tech stack.",
    features: ["Architecture review", "Tech strategy", "Code audits"],
  },
  {
    icon: Wrench,
    title: "Software Repair",
    description: "Expert troubleshooting and repair services for computers, phones, and software systems.",
    features: ["Bug fixes", "Performance tuning", "System recovery"],
  },
  {
    icon: Code,
    title: "Custom Solutions",
    description: "Tailored software solutions designed specifically for your unique business requirements.",
    features: ["API development", "Integrations", "Automation"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-balance mb-6">
            Our collection of tech services spans various needs at every stage of the{" "}
            <span className="text-primary">transformation process</span>.
          </h2>
          <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
            Explore how we help businesses transform with comprehensive software solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`p-8 bg-card/50 border-border hover:bg-card/80 transition-all duration-300 group hover-lift hover-glow animate-fade-in-up animate-delay-${((index % 3) + 1) * 100}`}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors float-animation">
                <service.icon className="w-6 h-6 text-primary" />
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 animate-pulse-slow" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
