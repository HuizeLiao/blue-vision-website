"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Award, Handshake, Lightbulb, GraduationCap } from "lucide-react"

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Pushing the boundaries of what's possible with visual AI technology.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Committed to delivering the highest quality solutions and support.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    description: "Building lasting relationships with our clients and partners.",
  },
  {
    icon: GraduationCap,
    title: "Academia-Industry",
    description: "Bridging cutting-edge research with real-world industrial applications.",
  },
]

const founders = [
  {
    name: "Mr. Wen Li",
    role: "PI & Co-founder",
    description: "Decades of industrial experience in simulated firearm training systems and defense technology.",
  },
  {
    name: "Dr. Lucas Yang",
    role: "Co-founder",
    description: "University Professor specializing in image processing and computer vision research.",
  },
]

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/3 to-background" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              About Us
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
              A Successful Academia-Industry Partnership
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-pretty">
              Blue Vision Systems represents a successful collaboration between academic research 
              excellence and industrial expertise. Our team combines decades of experience in 
              simulated training systems with cutting-edge computer vision research to deliver 
              breakthrough pure-vision AI solutions.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed text-pretty">
              We specialize in high-precision aiming point detection and 6DOF pose estimation, 
              enabling laser-less firearm training, autonomous navigation, and immersive VR/AR 
              experiences with unprecedented accuracy.
            </p>

            {/* Mini Stats */}
            <div className="mt-8 grid grid-cols-2 gap-6">
              {[
                { value: "15+", label: "Patents" },
                { value: "Sub-mm", label: "Precision" },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative bg-card border border-border rounded-2xl p-8 overflow-hidden shadow-xl shadow-primary/5">
              {/* Grid Pattern */}
              <div className="absolute inset-0 grid-pattern opacity-30" />
              
              {/* Logo Display */}
              <div className="relative z-10 flex items-center justify-center py-12">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse" />
                  <Image
                    src="/images/logo.png"
                    alt="Blue Vision Systems Logo"
                    width={200}
                    height={200}
                    className="relative z-10 animate-float"
                  />
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 left-4 w-20 h-20 border border-primary/20 rounded-lg" />
              <div className="absolute bottom-4 right-4 w-16 h-16 border border-accent/20 rounded-full" />
            </div>
          </motion.div>
        </div>

        {/* Founders Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-foreground text-center mb-10">
            Leadership Team
          </h3>
          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {founders.map((founder, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">
                    {founder.name.split(' ').pop()?.charAt(0)}
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-foreground">
                  {founder.name}
                </h4>
                <p className="text-sm text-primary font-medium mb-2">
                  {founder.role}
                </p>
                <p className="text-sm text-muted-foreground">
                  {founder.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {value.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {value.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
