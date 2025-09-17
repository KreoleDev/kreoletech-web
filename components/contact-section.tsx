"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: "hello@kreoletech.com",
    description: "Send us an email anytime!",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "+1 (555) 123-4567",
    description: "Mon-Fri from 8am to 5pm",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: "123 Tech Street, Digital City",
    description: "Come say hello at our office",
  },
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-balance mb-6">
            Ready to experience our services?
            <br />
            <span className="text-primary">Let's start planning</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
            Get in touch with our team to discuss your project and see how we can help transform your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="animate-fade-in-left">
            <h3 className="text-2xl font-semibold text-foreground mb-8">Get in Touch</h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className={`flex items-start space-x-4 hover-lift animate-fade-in-up animate-delay-${(index + 1) * 100}`}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 float-animation">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                    <p className="text-primary font-medium mb-1">{info.details}</p>
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Card className="p-6 bg-primary/5 border-primary/20 hover-lift animate-scale-in animate-delay-400">
              <h4 className="font-semibold text-foreground mb-2">Want to be a techie too?</h4>
              <p className="text-sm text-muted-foreground mb-4">
                We are the tech software of integrated Consultant Group, a leading management consultancy helping
                countries implement and strategic transformations.
              </p>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent hover-lift"
              >
                Join the Collective
              </Button>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-8 bg-card/50 border-border hover-lift animate-fade-in-right">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="animate-fade-in-up animate-delay-100">
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="transition-all duration-300 focus:scale-105"
                  />
                </div>
                <div className="animate-fade-in-up animate-delay-200">
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="transition-all duration-300 focus:scale-105"
                  />
                </div>
              </div>

              <div className="animate-fade-in-up animate-delay-300">
                <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                  Company
                </label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company"
                  className="transition-all duration-300 focus:scale-105"
                />
              </div>

              <div className="animate-fade-in-up animate-delay-400">
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={5}
                  required
                  className="transition-all duration-300 focus:scale-105"
                />
              </div>

              <Button type="submit" className="w-full glow-blue group hover-lift animate-fade-in-up animate-delay-500">
                Send Message
                <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}
