import { ProjectRequestForm } from "@/components/project-request-form"

export default function RequestProjectPage() {
  return (
    <div className="min-h-screen bg-background grid-pattern py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Start Your <span className="text-primary">Project</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Fill out our project request form and let's discuss how we can help you
            achieve your goals.
          </p>
        </div>

        <ProjectRequestForm />
      </div>
    </div>
  )
}
