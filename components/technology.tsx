"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

const techStack = [
  {
    title: "Deep Learning Neural Networks",
    description: "State-of-the-art convolutional and transformer architectures optimized for visual perception tasks.",
    features: [
      "Custom CNN architectures",
      "Attention mechanisms",
      "Transfer learning ready",
      "Continuous model updates",
    ],
  },
  {
    title: "Real-time Inference Engine",
    description: "Highly optimized inference pipeline delivering consistent sub-millisecond processing times.",
    features: [
      "GPU acceleration",
      "Batch processing",
      "Model quantization",
      "Dynamic optimization",
    ],
  },
  {
    title: "Sensor Fusion Framework",
    description: "Seamlessly integrate visual data with other sensor inputs for enhanced accuracy.",
    features: [
      "Multi-camera support",
      "IMU integration",
      "Temporal filtering",
      "Calibration tools",
    ],
  },
]

const codeSnippet = `import { BlueVision } from '@bluevision/sdk';

// Initialize the vision engine
const vision = new BlueVision({
  mode: '6dof',
  precision: 'high',
  fps: 120
});

// Start real-time detection
vision.detect(cameraStream, (result) => {
  console.log('Position:', result.position);
  console.log('Orientation:', result.orientation);
  console.log('Confidence:', result.confidence);
});`

export function Technology() {
  return (
    <section id="technology" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
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
              Technology
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Built for Developers
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Powerful APIs and SDKs that integrate seamlessly into your existing workflow.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Code Preview */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="bg-slate-900 border border-slate-700 rounded-xl overflow-hidden shadow-xl">
              {/* Code Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-800 border-b border-slate-700">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs text-slate-400 ml-2 font-mono">
                  detection.ts
                </span>
              </div>
              
              {/* Code Content */}
              <pre className="p-6 overflow-x-auto text-sm">
                <code className="font-mono text-slate-300">
                  {codeSnippet.split('\n').map((line, i) => (
                    <div key={i} className="leading-relaxed">
                      <span className="text-slate-600 select-none mr-4 inline-block w-6 text-right">
                        {i + 1}
                      </span>
                      <span 
                        dangerouslySetInnerHTML={{
                          __html: line
                            .replace(/import|from|const|new/g, '<span class="text-purple-400">$&</span>')
                            .replace(/'[^']*'/g, '<span class="text-green-400">$&</span>')
                            .replace(/BlueVision|vision|cameraStream|result/g, '<span class="text-blue-400">$&</span>')
                            .replace(/console\.log/g, '<span class="text-yellow-400">$&</span>')
                            .replace(/\/\/.*/g, '<span class="text-muted-foreground/60">$&</span>')
                        }}
                      />
                    </div>
                  ))}
                </code>
              </pre>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium shadow-lg shadow-primary/20">
              npm install @bluevision/sdk
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors"
              >
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {tech.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-pretty">
                  {tech.description}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {tech.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
