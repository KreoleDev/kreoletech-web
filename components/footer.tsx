import { Code2, Github, Twitter, Linkedin, Mail } from "lucide-react"

const footerLinks = {
  Services: ["Web Development", "Mobile Apps", "UI/UX Design", "Consulting", "Software Repair", "Custom Solutions"],
  Company: ["About Us", "Our Team", "Careers", "Contact", "Blog", "Case Studies"],
  Resources: ["Documentation", "Help Center", "Privacy Policy", "Terms of Service", "Cookie Policy", "Sitemap"],
}

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Mail, href: "#", label: "Email" },
]

export function Footer() {
  return (
    <footer className="bg-secondary/20 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2 animate-fade-in-up">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center glow-blue hover-lift">
                <Code2 className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">KreoleTech</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Your trusted software gurus delivering exceptional digital experiences across all platforms. We transform
              ideas into powerful software solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors hover-lift animate-scale-in animate-delay-${(index + 1) * 100}`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <div key={category} className={`animate-fade-in-up animate-delay-${(categoryIndex + 1) * 100}`}>
              <h3 className="font-semibold text-foreground mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 transform inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center animate-fade-in-up animate-delay-500">
          <p className="text-muted-foreground text-sm">© 2024 KreoleTech. All rights reserved.</p>
          <p className="text-muted-foreground text-sm mt-4 md:mt-0">Powered by Innovation</p>
        </div>
      </div>
    </footer>
  )
}
