"use client"

import { motion } from "framer-motion"
import {
  Eye,
  Target,
  Box,
  Zap,
  Layers,
  Shield,
} from "lucide-react"

const features = [
  {
    icon: Eye,
    title: "Laser-less Tracking",
    description: "No laser safety risks or high maintenance, making it ideal for military and public scenarios.",
  },
  {
    icon: Target,
    title: "Aiming Point Detection",
    description: "Sub-millimeter accuracy for precise aiming point identification in real-time across diverse environments.",
  },
  {
    icon: Box,
    title: "6DOF Pose Estimation",
    description: "Complete six degrees of freedom tracking: position (X, Y, Z) and orientation (Roll, Pitch, Yaw).",
  },
  {
    icon: Zap,
    title: "Software-defined Performance",
    description: "Performance upgrades are driven by software algorithms, decoupling from expensive hardware.",
  },
  {
    icon: Layers,
    title: "Multi-Object Tracking",
    description: "Simultaneous tracking of multiple objects with unique identification and trajectory prediction.",
  },
  {
    icon: Shield,
    title: "Robust Performance",
    description: "Reliable detection in challenging conditions: low light, occlusion, motion blur, and varying distances.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export function Features() {
  return (
    <section id="solutions" className="py-24 relative bg-muted/30">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Core Capabilities
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Cutting-Edge Visual Intelligence
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Our proprietary technology stack delivers unmatched precision and performance
              for the most demanding visual AI applications.
            </p>
          </motion.div>
        </div>

        {/* Features Grid - 3x2 layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
