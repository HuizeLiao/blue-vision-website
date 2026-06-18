"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Check } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function LaserLessTrackingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/products" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
              Laser-less Tracking System
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Revolutionary pure-vision tracking technology that eliminates the need for laser components, 
              providing a safer and more cost-effective solution for training and simulation applications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card border border-border rounded-xl p-8 mb-8"
          >
            <h2 className="text-xl font-semibold text-foreground mb-6">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "No laser safety certification required",
                "Zero eye-safety risks for trainees",
                "Significantly lower maintenance costs",
                "Defense-grade reliability",
                "Adapts to challenging environments",
                "Simple configuration and calibration process",
              ].map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card border border-border rounded-xl p-8 mb-8"
          >
            <h2 className="text-xl font-semibold text-foreground mb-4">Technical Specifications</h2>
            <div className="space-y-4">
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">Detection Capability</span>
                <span className="text-foreground font-medium">6DOF (Position X, Y, Z + Orientation Roll, Pitch, Yaw)</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">Sensor</span>
                <span className="text-foreground font-medium">Pure vision (camera only) — no laser, no markers, no sensor fusion</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">Processing</span>
                <span className="text-foreground font-medium">Real-time, low latency</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">Accuracy</span>
                <span className="text-foreground font-medium">High-precision, inch-level tracking</span>
              </div>
              <div className="flex justify-between py-2 ">
                <span className="text-muted-foreground">Scalability</span>
                <span className="text-foreground font-medium">Linear complexity growth for multiple devices</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex gap-4"
          >
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">Request Demo</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/products">View All Products</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
