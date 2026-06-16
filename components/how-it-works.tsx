"use client"

import { motion } from "framer-motion"
import { Camera, Cpu, Target, Rocket } from "lucide-react"

const steps = [
  {
    step: "01",
    icon: Camera,
    title: "Capture",
    description: "Input video streams from any camera source — RGB, infrared, or depth sensors.",
  },
  {
    step: "02",
    icon: Cpu,
    title: "Process",
    description: "Our neural network analyzes frames in real-time, extracting key features and patterns.",
  },
  {
    step: "03",
    icon: Target,
    title: "Detect",
    description: "Precise aiming points and 6DOF poses are computed with sub-millisecond latency.",
  },
  {
    step: "04",
    icon: Rocket,
    title: "Deploy",
    description: "Results are streamed to your application via API, SDK, or direct integration.",
  },
]

export function HowItWorks() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/3 via-background to-accent/3" />
      
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
              How It Works
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
              From Vision to Intelligence
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              A streamlined pipeline that transforms raw visual data into actionable intelligence.
            </p>
          </motion.div>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-center">
                  {/* Step Number */}
                  <div className="text-6xl font-bold text-primary/10 mb-4">
                    {step.step}
                  </div>
                  
                  {/* Icon */}
                  <div className="relative mx-auto w-16 h-16 rounded-2xl bg-card border border-border flex items-center justify-center mb-4 group-hover:border-primary/50 transition-colors">
                    <step.icon className="w-8 h-8 text-primary" />
                    
                    {/* Pulse Ring */}
                    <div className="absolute inset-0 rounded-2xl border border-primary/30 animate-ping opacity-20" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow for mobile/tablet */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <div className="w-0.5 h-8 bg-gradient-to-b from-border to-transparent" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Performance Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20 bg-card border border-border rounded-2xl p-8 lg:p-12 shadow-lg shadow-primary/5"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 text-balance">
                Benchmark Performance
              </h3>
              <p className="text-muted-foreground mb-6 text-pretty">
                Our technology consistently outperforms industry standards across all key metrics, 
                delivering enterprise-grade reliability for mission-critical applications.
              </p>
            </div>
            
            <div className="space-y-4">
              {[
                { label: "Detection Accuracy", value: 99.9, color: "bg-primary" },
                { label: "Processing Speed", value: 98, color: "bg-accent" },
                { label: "Edge Efficiency", value: 95, color: "bg-primary" },
                { label: "Reliability Score", value: 99.99, color: "bg-accent" },
              ].map((metric, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">{metric.label}</span>
                    <span className="text-foreground font-medium">{metric.value}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${metric.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className={`h-full ${metric.color} rounded-full`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
