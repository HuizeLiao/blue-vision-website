"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Check } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function MultiObjectTrackingPage() {
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
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Multi-Object Tracking
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Simultaneous tracking of multiple aiming devices with independent spatial awareness. System complexity and cost scale linearly as more devices are added.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card border border-border rounded-xl p-8 mb-8"
          >
            <h2 className="text-2xl font-semibold text-foreground mb-6">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Multiple device support",
                "Independent tracking per device",
                "Linear scalability",
                "Robust against occlusion",
                "Unique device identification",
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
            <h2 className="text-2xl font-semibold text-foreground mb-4">Performance Highlights</h2>
            <div className="space-y-4">
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">Architecture</span>
                <span className="text-foreground font-medium">Decentralized, device-independent processing</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">Scalability</span>
                <span className="text-foreground font-medium">Linear cost increase per additional device</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-muted-foreground">Output</span>
                <span className="text-foreground font-medium">Position (X, Y, Z) and orientation (Roll, Pitch, Yaw) for each device</span>
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
