"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Animated orbs */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="text-sm text-primary">开启视觉AI新时代</span>
        </div>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
          准备好革新您的<br />
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            AP/6DOF检测方案？
          </span>
        </h2>
        
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          无论您是想升级现有产品，还是开发全新应用，我们的视觉AI技术都能为您提供革命性的解决方案。
          现在就联系我们，探索无限可能。
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="glow group">
            预约技术演示
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button size="lg" variant="outline">
            下载技术白皮书
          </Button>
        </div>
        
        <p className="mt-8 text-sm text-muted-foreground">
          已有多家行业领导者选择与我们合作
        </p>
      </div>
    </section>
  )
}
