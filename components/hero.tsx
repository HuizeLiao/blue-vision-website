"use client"

import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-40" />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse delay-500" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-primary font-medium">Pioneering Visual AI Technology</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight text-balance"
          >
            See Beyond.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient">
              Perceive Intelligence.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-[13px] sm:text-[15px] text-muted-foreground max-w-3xl mx-auto text-pretty"
          >
            Revolutionary pure-vision AI solutions for high-precision Aiming Point detection 
            and 6DOF pose estimation. Empowering the next generation of autonomous systems, 
            robotics, and immersive experiences. 
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 text-base sm:text-lg text-muted-foreground/80 max-w-3xl mx-auto text-pretty"
          >
            No markers. No laser. No sensor fusion. Just pure vision.
          </motion.p>



          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {[
              { value: "Ultra-low", label: "Latency" },
              { value: "High", label: "Accuracy" },
              { value: "6DOF", label: "Pose Detection" },
              { value: "Real-time", label: "Processing" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

          {/* 3D Visual Representation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 relative"
        >
          <div className="relative mx-auto max-w-5xl">
            {/* Main Visual Container */}
            <div className="relative bg-card rounded-2xl border border-border p-8 overflow-hidden shadow-xl shadow-primary/5">
              {/* Grid Lines */}
              <div className="absolute inset-0 grid-pattern opacity-30" />
              
              {/* Detection Visualization */}
              <div className="relative z-10 aspect-video bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-xl border border-slate-700 overflow-hidden">
                
                {/* 图片 + 圆角边框 + 四角脉冲点 */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative border-2 border-primary/60 rounded-xl shadow-[0_0_30px_rgba(0,180,216,0.15)] p-2 bg-slate-800/50 backdrop-blur-sm">
                    
                    {/* 四角脉冲点 */}
                    <div className="absolute -top-2 -left-2 w-4 h-4 bg-primary rounded-full animate-ping" />
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full animate-ping delay-100" />
                    <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-primary rounded-full animate-ping delay-200" />
                    <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-primary rounded-full animate-ping delay-300" />
                    
                    {/* image */}
                    <img 
                      src="/images/CalculateCamera6DOF.drawio.png"   // 改成你的图片路径
                      alt="AP/6DOF Detection Principle"
                      className="w-auto h-auto max-w-[460px] max-h-[300px] object-contain rounded-lg"
                    />
                  </div>
                </div>

                {/* HUD Elements - 左侧 */}
                <div className="absolute top-4 left-4 font-mono text-xs text-primary">
                  <div>TRACKING: ACTIVE</div>
                  <div>FPS: 120</div>
                  <div>PRECISION: Inch-level</div>
                </div>
                
                {/* HUD Elements - right */}
                <div className="absolute top-4 right-4 font-mono text-xs text-accent text-right">
                  <div>6DOF ENABLED</div>
                  <div>X: 0.00 Y: 0.00 Z: 0.00</div>
                  <div>Roll | Pitch | Yaw</div>
                </div>
                
                {/* HUD Elements - botton */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between font-mono text-xs text-slate-400">
                  <span>Blue Vision Systems AI Engine v3.0</span>
                  <span>LATENCY: Real-time</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
