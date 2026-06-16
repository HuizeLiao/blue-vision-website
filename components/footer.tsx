"use client"

import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Twitter, Youtube, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const footerLinks = {
  products: {
    title: "Products",
    links: [
      { label: "Laser-less Tracking", href: "/products/laser-less-tracking" },
      { label: "AP Detection", href: "/products/ap-detection" },
      { label: "6DOF Estimation", href: "/products/6dof-estimation" },
      { label: "Multi-Object Tracking", href: "/products/multi-object-tracking" },
    ],
  },
  industries: {
    title: "Industries",
    links: [
      { label: "Simulation & Training", href: "/industries" },
      { label: "Autonomous Driving", href: "/industries" },
      { label: "VR/AR", href: "/industries" },
      { label: "Robotics", href: "/industries" },
    ],
  },
  developer: {
    title: "Developer",
    links: [
      { label: "Documentation", href: "/developer" },
      { label: "API Reference", href: "/developer" },
      { label: "Sample Projects", href: "/developer" },
      { label: "Quick Start", href: "/developer" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Contact Us", href: "/contact" },
      { label: "Careers", href: "/contact" },
      { label: "Community", href: "/community" },
    ],
  },
}

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo.png"
                alt="Blue Vision Systems"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-lg font-semibold text-foreground">
                Blue Vision
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4 max-w-xs">
              Pioneering visual AI solutions for the next generation of intelligent systems.
            </p>
            
            {/* Community Button */}
            <Button
              variant="outline"
              size="sm"
              asChild
              className="mb-6 border-primary/30 text-primary hover:bg-primary hover:text-white"
            >
              <Link href="/community">
                <MessageCircle className="w-4 h-4 mr-2" />
                Join Community
              </Link>
            </Button>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.values(footerLinks).map((section, index) => (
            <div key={index}>
              <h3 className="text-sm font-semibold text-foreground mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Blue Vision Systems LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
