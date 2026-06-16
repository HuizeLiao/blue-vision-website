"use client"

import { motion } from "framer-motion"
import { Crosshair, Car, Headset, Bot } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const industries = [
  {
    icon: Crosshair,
    title: "Simulation & Training",
    badge: "Core Business",
    description: "Our flagship application in laser-less firearm training systems. Provides safe, cost-effective training solutions for military, law enforcement, and civilian applications.",
    highlights: [
      "No laser safety hazards",
      "Reduced maintenance costs",
      "Real-time hit detection",
      "Multi-shooter support",
    ],
  },
  {
    icon: Car,
    title: "Autonomous Driving & UAVs",
    description: "High-precision positioning for autonomous vehicles and drones, especially in GPS-denied environments such as indoor parking facilities, tunnels, and urban canyons.",
    highlights: [
      "GPS-denied navigation",
      "Indoor positioning",
      "Real-time obstacle detection",
      "Centimeter-level accuracy",
    ],
  },
  {
    icon: Headset,
    title: "VR/AR & Metaverse",
    description: "Enabling next-generation immersive experiences with sub-millimeter pose tracking for virtual and augmented reality applications.",
    highlights: [
      "6DOF head tracking",
      "Hand pose estimation",
      "Object interaction",
      "Low-latency rendering",
    ],
  },
  {
    icon: Bot,
    title: "Robotics",
    description: "Centimeter-level positioning for robotic arms, autonomous mobile robots, and collaborative robots in manufacturing and logistics.",
    highlights: [
      "Robotic arm guidance",
      "Pick-and-place operations",
      "Quality inspection",
      "Path planning support",
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function IndustriesPage() {
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
              Industry Applications
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Transforming Industries
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Our visual AI technology powers solutions across multiple sectors, 
              from defense training to autonomous systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-card border border-border rounded-2xl p-8 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <industry.icon className="w-8 h-8 text-primary" />
                  </div>
                  {industry.badge && (
                    <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                      {industry.badge}
                    </span>
                  )}
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {industry.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {industry.description}
                </p>
                
                <div className="grid grid-cols-2 gap-3">
                  {industry.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {highlight}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Explore Industry Solutions
          </h2>
          <p className="text-muted-foreground mb-8">
            Learn how our technology can address your specific industry challenges.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
