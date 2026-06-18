"use client"

import { motion } from "framer-motion"
import { Eye, Target, Box, Zap, Layers, Shield, ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const products = [
  {
    icon: Eye,
    title: "Laser-less Tracking System",
    slug: "laser-less-tracking",
    description: "Revolutionary pure-vision tracking without laser components. No safety risks or high maintenance costs, making it ideal for military and public training scenarios.",
    features: ["No laser safety risks", "Low maintenance", "Military-grade reliability"],
  },
  {
    icon: Target,
    title: "Aiming Point Detection",
    slug: "ap-detection",
    description: "High-precision aiming point identification in real-time. Leveraging pure vision to deliver consistent inch-level tracking across diverse operational environments.",
    features: ["Inch-level precision", "Real-time processing", "Multi-environment support"],
  },
  {
    icon: Box,
    title: "6DOF Pose Estimation",
    slug: "6dof-estimation",
    description: "Complete six degrees of freedom tracking: position (X, Y, Z) and orientation (Roll, Pitch, Yaw) for comprehensive spatial awareness.",
    features: ["Full spatial tracking", "Position & orientation", "High refresh rate"],
  },
  {
    icon: Zap,
    title: "Real-time Processing Engine",
    slug: "realtime-processing",
    description: "Ultra-low latency processing engine optimized for demanding real-time applications, with adaptable performance for edge or cloud deployment.",
    features: ["Ultra-low latency", "Real-time performance", "Edge computing ready"],
  },
  {
    icon: Layers,
    title: "Multi-Object Tracking",
    slug: "multi-object-tracking",
    description: "Simultaneous tracking of multiple aiming devices with independent processing. System complexity and cost scale linearly as more devices are added.",
    features: ["Multiple device support", "Independent tracking", "Linear scalability"],
  },
  {
    icon: Shield,
    title: "Robust Detection Suite",
    slug: "robust-detection",
    description: "Reliable detection in challenging conditions including low light, occlusion, motion blur, and varying distances.",
    features: ["Low light support", "Occlusion handling", "Motion blur resistance"],
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

export default function ProductsPage() {
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
              Our Products
            </span>
            <h1 className="mt-4 text-xl sm:text-2xl lg:text-3xl font-bold text-foreground text-balance">
              Visual AI Solutions
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Cutting-edge computer vision technology for precision tracking, detection, and spatial intelligence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {products.map((product, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <product.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {product.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {product.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" size="sm" className="text-primary hover:text-primary-foreground hover:bg-primary p-0 px-3 py-1" asChild>
                  <Link href={`/products/${product.slug}`}>
                    Learn more <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground mb-8">
            Contact our team to discuss how our products can meet your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">Contact Sales</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/developer">View Documentation</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
