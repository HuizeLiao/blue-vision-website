"use client"

import { motion } from "framer-motion"
import { BookOpen, Terminal, Cpu, FileCode, Rocket, Headset } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const resources = [
  {
    icon: BookOpen,
    title: "Documentation",
    description: "Comprehensive guides and API references to help you integrate our visual AI solutions.",
  },
  {
    icon: Terminal,
    title: "SDK & API Reference",
    description: "Complete software development kits and API documentation with code examples for on-device integration and system configuration.",
  },
  {
    icon: Cpu,
    title: "Hardware Integration",
    description: "Guidelines for camera selection, edge computing deployment, and system architecture design to ensure optimal performance.",
  },
  {
    icon: FileCode,
    title: "Sample Projects",
    description: "Ready-to-run example projects demonstrating common use cases and implementations.",
  },
  {
    icon: Rocket,
    title: "Quick Start Guide",
    description: "Get up and running in minutes with our step-by-step integration tutorials.",
  },
  {
    icon: Headset,
    title: "Technical Service & Support",
    description: "Customization and on-site technical service to adapt our solution to your specific operational environments.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function DeveloperPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Developer Resources
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Build with Blue Vision
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Everything you need to integrate our visual AI technology into your applications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Developer Resources
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tools, documentation, and technical services to help you embed our AP/6DOF detection engine into your products.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <resource.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {resource.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {resource.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
