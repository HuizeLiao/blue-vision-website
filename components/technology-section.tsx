"use client"

import { Camera, Brain, Target, Layers, Sparkles, Shield } from "lucide-react"

const features = [
  {
    icon: Camera,
    title: "纯视觉感知",
    description: "仅使用摄像头作为传感器，模拟人类视觉系统的工作方式，无需激光、惯性传感器或电磁波设备。",
  },
  {
    icon: Brain,
    title: "深度学习驱动",
    description: "采用最先进的深度神经网络（DNN）模型，如SuperPoint、SuperGlue和LoFTR，实现高精度图像匹配。",
  },
  {
    icon: Target,
    title: "高精度检测",
    description: "通过数据冗余和创新算法，在不依赖传感器融合的情况下达到所需的精度水平。",
  },
  {
    icon: Layers,
    title: "模块化架构",
    description: "软硬件最大程度解耦，支持便捷的现场产品升级，系统性能主要依赖算法和软件。",
  },
  {
    icon: Sparkles,
    title: "环境适应性",
    description: "AI模型具备学习能力，能够适应动态和具有挑战性的环境，如低照度和恶劣天气条件。",
  },
  {
    icon: Shield,
    title: "法规合规",
    description: "零激光、超声波和电磁信号排放，确保在公共区域使用时符合法规要求。",
  },
]

export function TechnologySection() {
  return (
    <section id="technology" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-sm text-primary">核心技术</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              革命性的视觉AI技术
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            受人类视觉系统启发，我们开发了一套基于图像匹配和深度学习的创新解决方案，
            彻底改变传统AP/6DOF检测的实现方式。
          </p>
        </div>

        {/* Data Flow Diagram */}
        <div className="mb-20 p-8 rounded-2xl bg-card/50 border border-border backdrop-blur-sm">
          <h3 className="text-xl font-semibold text-foreground mb-8 text-center">系统数据流程</h3>
          <div className="relative">
            {/* Flow diagram visualization */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
              <div className="p-4 rounded-xl bg-primary/10 border border-primary/30 text-center">
                <Camera className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium text-foreground">图像采集</p>
                <p className="text-xs text-muted-foreground mt-1">参考图像 + 查询图像</p>
              </div>
              <div className="hidden md:flex items-center justify-center">
                <div className="h-0.5 w-full bg-gradient-to-r from-primary/50 to-accent/50" />
              </div>
              <div className="p-4 rounded-xl bg-accent/10 border border-accent/30 text-center">
                <Brain className="h-8 w-8 text-accent mx-auto mb-2" />
                <p className="text-sm font-medium text-foreground">DNN图像匹配</p>
                <p className="text-xs text-muted-foreground mt-1">SuperGlue / LoFTR</p>
              </div>
              <div className="hidden md:flex items-center justify-center">
                <div className="h-0.5 w-full bg-gradient-to-r from-accent/50 to-primary/50" />
              </div>
              <div className="p-4 rounded-xl bg-primary/10 border border-primary/30 text-center">
                <Target className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium text-foreground">AP/6DOF计算</p>
                <p className="text-xs text-muted-foreground mt-1">实时位置姿态输出</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-card/50 border border-border backdrop-blur-sm hover:bg-card/80 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Technical Advantages */}
        <div className="mt-20 p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            相比传统方案的优势
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-destructive" />
                传统解决方案
              </h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-destructive">✕</span>
                  依赖激光、惯性传感器或电磁波
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive">✕</span>
                  升级需要指数级增加的复杂度和成本
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive">✕</span>
                  需要特定的训练环境（如暗室）
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive">✕</span>
                  原始数据量有限，对噪声敏感
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive">✕</span>
                  多设备扩展成本高昂
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                Blue Vision Systems 方案
              </h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  仅使用摄像头，无需额外传感器
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  软件驱动，支持持续升级
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  适应各种操作环境
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  丰富的数据冗余，抗噪声能力强
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  线性扩展成本
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
