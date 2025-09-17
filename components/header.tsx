"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Code2 } from "lucide-react"
import Link from "next/link"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border animate-slide-in-down">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 animate-fade-in-left">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center glow-blue hover-lift">
              <Code2 className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">KreoleTech</span>
          </div>
          <Link href="/dashboard">
            <button className="btn btn-primary">Go to Dashboard</button>
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 animate-fade-in-right">
            <a
              href="#services"
              className="text-muted-foreground hover:text-primary transition-colors hover:scale-105 transform"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-muted-foreground hover:text-primary transition-colors hover:scale-105 transform"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-muted-foreground hover:text-primary transition-colors hover:scale-105 transform"
            >
              Contact
            </a>
            <Button className="glow-blue hover-lift">Get Started</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden hover:scale-110 transition-transform" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6 text-foreground" /> : <Menu className="w-6 h-6 text-foreground" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in-up">
            <nav className="flex flex-col space-y-4">
              <a
                href="#services"
                className="text-muted-foreground hover:text-primary transition-colors animate-fade-in-left animate-delay-100"
              >
                Services
              </a>
              <a
                href="#about"
                className="text-muted-foreground hover:text-primary transition-colors animate-fade-in-left animate-delay-200"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-muted-foreground hover:text-primary transition-colors animate-fade-in-left animate-delay-300"
              >
                Contact
              </a>
              <Button className="w-fit glow-blue hover-lift animate-fade-in-left animate-delay-400">Get Started</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
