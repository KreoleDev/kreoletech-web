import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/50 border border-border mb-8 animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-primary mr-2 animate-pulse-slow" />
            <span className="text-sm text-muted-foreground">Your Software Gurus</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance mb-6 animate-fade-in-up animate-delay-100">
            The complete platform to <span className="text-primary text-glow">build software</span> for any platform.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground text-balance mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animate-delay-200">
            Your team's toolkit to stop configuring and start innovating. We build, deploy, and scale the best software
            experiences across mobile, web, and beyond.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animate-delay-300">
            <Link href="#contact">
              <Button size="lg" className="glow-blue group hover-lift">
                Start Your Project From Scratch
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="#projects">
              <Button variant="outline" size="lg" className="border-border hover:bg-secondary bg-transparent hover-lift">
                Try Already Made Solutions
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
