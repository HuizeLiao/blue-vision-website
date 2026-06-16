"use client"

import { motion } from "framer-motion"
import { 
  Target, 
  Car, 
  Bot, 
  Glasses,
} from "lucide-react"

const industries = [
  {
    icon: Target,
    title: "Simulation & Training",
    description: "Laser-less firearm training systems for military and law enforcement. Safe, maintenance-free, and highly accurate for public and tactical scenarios.",
    color: "from-blue-500 to-cyan-500",
    highlight: "Core Business",
  },
  {
    icon: Car,
    title: "Autonomous Driving & UAVs",
    description: "Precise localization and navigation in GPS-denied environments such as indoor parking, tunnels, and urban canyons. Real-time 6DOF pose estimation for autonomous vehicles and drones.",
    color: "from-purple-500 to-pink-500",
    highlight: null,
  },
  {
    icon: Glasses,
    title: "VR/AR & Metaverse",
    description: "High-precision pose capture for immersive experiences. Sub-millimeter tracking enables natural hand interactions and accurate spatial mapping for next-gen virtual reality.",
    color: "from-green-500 to-emerald-500",
    highlight: null,
  },
  {
    icon: Bot,
    title: "Robotics",
    description: "Centimeter-level precision for robotic arm positioning, pick-and-place operations, and human-robot collaboration. Enabling precise manipulation in industrial automation.",
    color: "from-orange-500 to-red-500",
    highlight: null,
  },
]

export function Industries() {
  return (
    <section id="industries" className="py-24 relative bg-muted/20">
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
              Industries
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Key Application Areas
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Our pure-vision AI technology powers mission-critical applications across 
              industries where precision and reliability are paramount.
            </p>
          </motion.div>
        </div>

        {/* Industries Grid - 2x2 layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-card border border-border rounded-xl p-8 h-full overflow-hidden hover:border-primary/30 transition-all duration-300">
                {/* Gradient Background on Hover */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} 
                />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${industry.color} flex items-center justify-center shadow-lg`}>
                      <industry.icon className="w-7 h-7 text-white" />
                    </div>
                    {industry.highlight && (
                      <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                        {industry.highlight}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {industry.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 bg-card border border-border rounded-2xl p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "< 1ms", label: "Detection Latency" },
              { value: "Sub-mm", label: "Precision" },
              { value: "6DOF", label: "Pose Tracking" },
              { value: "Real-time", label: "Processing" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
