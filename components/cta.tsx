"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Mail, MessageSquare, Shield, Globe, Zap, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FeedbackModal } from "./feedback-modal"

export function CTA() {
  const [feedbackOpen, setFeedbackOpen] = useState(false)

  return (
    <>
      <section id="contact" className="py-24 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        
        {/* Animated Orbs */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Ready to Transform Your Vision?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto text-pretty">
              Join hundreds of enterprises leveraging our visual AI technology. 
              Get started with a free consultation or explore our developer resources.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg glow">
                Schedule a Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-border hover:bg-muted hover:border-primary/30 px-8 py-6 text-lg"
                onClick={() => setFeedbackOpen(true)}
              >
                <MessageSquare className="mr-2 w-5 h-5" />
                Share Feedback
              </Button>
            </div>

            {/* Quick Contact Options */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
              <a 
                href="mailto:contact@bluevisionsys.com" 
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                contact@bluevisionsys.com
              </a>
              <span className="hidden sm:block text-border">|</span>
              <span>Response within 24 hours</span>
            </div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { icon: Shield, label: "SOC 2 Compliant" },
              { icon: Globe, label: "Global Coverage" },
              { icon: Zap, label: "99.99% Uptime" },
              { icon: Award, label: "Enterprise Ready" },
            ].map((item, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-4 text-center card-hover">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-2">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="text-sm text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Feedback Modal */}
      <FeedbackModal 
        isOpen={feedbackOpen} 
        onClose={() => setFeedbackOpen(false)} 
      />
    </>
  )
}
