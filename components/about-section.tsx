import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Award, Zap, Shield } from "lucide-react"

const values = [
  {
    icon: Users,
    title: "Expert Team",
    description:
      "Our collective of world-class passionate techies bound together by our deep tech knowledge, our human-centric mindset and a passion for using technology and digital solutions to drive business transformation.",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description:
      "We help you ensure quality from business planning to IT operations and end-user experience. We offer the best-in-class consultancy on all aspects of your business.",
  },
  {
    icon: Zap,
    title: "Innovation Focus",
    description:
      "We keep your business by actively identifying and maintaining cyber threats, malware testing and prevention, as well as network testing and prevention.",
  },
  {
    icon: Shield,
    title: "Security First",
    description:
      "We are the tech software of integrated Consultant Group, a leading management consultancy helping countries implement and strategic transformations.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-scale-in">
              <span className="text-sm text-primary font-medium">About Us</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-balance mb-6 animate-fade-in-up animate-delay-100">
              Where deep tech meets a human mindset.
            </h2>

            <p className="text-lg text-muted-foreground text-balance mb-8 leading-relaxed animate-fade-in-up animate-delay-200">
              We are a collective of world-class passionate techies bound together by our deep tech knowledge, our
              human-centric mindset and a passion for using technology and digital solutions to drive business
              transformation.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed animate-fade-in-up animate-delay-300">
              Our collection of tech services spans various needs at every stage of the transformation process. Explore
              how we help businesses transform.
            </p>

            <Button className="glow-blue hover-lift animate-fade-in-up animate-delay-400">Join the Collective</Button>
          </div>

          {/* Right Content - Values Grid */}
          <div className="grid sm:grid-cols-2 gap-6 animate-fade-in-right">
            {values.map((value, index) => (
              <Card
                key={index}
                className={`p-6 bg-card/50 border-border hover-lift hover-glow animate-scale-in animate-delay-${(index + 1) * 100}`}
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4 float-animation">
                  <value.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
