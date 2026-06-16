"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Blue Vision Systems has revolutionized our autonomous navigation capabilities. The precision and reliability of their 6DOF detection is unmatched in the industry.",
    author: "Dr. Sarah Chen",
    role: "CTO, Autonomous Robotics Inc.",
    company: "Robotics Leader",
  },
  {
    quote: "We integrated their SDK in just two days. The real-time performance exceeded our expectations, enabling features we thought were years away.",
    author: "Michael Torres",
    role: "Head of Engineering",
    company: "VR Innovation Labs",
  },
  {
    quote: "The accuracy of their aiming point detection has transformed our defense simulation systems. Mission-critical reliability that we can count on.",
    author: "Col. James Wright",
    role: "Program Director",
    company: "Defense Contractor",
  },
]

const partners = [
  "NVIDIA",
  "Intel",
  "Qualcomm",
  "ARM",
  "Microsoft",
  "Amazon Web Services",
]

export function Testimonials() {
  return (
    <section className="py-24 relative bg-muted/20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      
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
              Testimonials
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Trusted by Industry Leaders
            </h2>
          </motion.div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <p className="text-foreground mb-6 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="border-t border-border pt-4">
                <div className="font-semibold text-foreground">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                <div className="text-xs text-primary mt-1">{testimonial.company}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partners Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-20"
        >
          <p className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-wider">
            Technology Partners & Integrations
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="text-lg md:text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors"
              >
                {partner}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
