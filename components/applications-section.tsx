"use client"

import { useState } from "react"
import { 
  Glasses, 
  Car, 
  Bot, 
  Plane, 
  Target,
  ChevronRight 
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const applications = [
  {
    id: "vrar",
    icon: Glasses,
    title: "VR/AR",
    shortDesc: "虚拟现实与增强现实",
    description: "捕获头盔的6DOF位置姿态和设备的视线方向，为沉浸式体验提供精确的空间定位。适用于游戏、教育、医疗培训等多个领域。",
    features: ["头盔位置追踪", "手部设备定位", "视线方向检测", "低延迟响应"],
    marketSize: "$59.07B",
    growth: "15%",
  },
  {
    id: "autonomous",
    icon: Car,
    title: "自动驾驶",
    shortDesc: "智能车辆导航系统",
    description: "在小范围空间（如停车场）提供英寸级精确追踪，弥补传统GPS在室内环境的不足。Tesla等公司正在从雷达/激光雷达转向纯视觉方案。",
    features: ["英寸级定位精度", "室内导航支持", "多传感器融合", "实时路径规划"],
    marketSize: "$1,102.54B",
    growth: "40%",
  },
  {
    id: "robotics",
    icon: Bot,
    title: "机器人",
    shortDesc: "工业与服务机器人",
    description: "为手术机器人手臂提供精确的瞄准和定位能力，确保医疗操作的安全性和精确性。同样适用于工业自动化和服务机器人领域。",
    features: ["亚毫米级精度", "实时反馈控制", "多轴协调", "安全边界检测"],
    marketSize: "$45.09B",
    growth: "3.83%",
  },
  {
    id: "drone",
    icon: Plane,
    title: "无人机",
    shortDesc: "商用无人机系统",
    description: "检测精确位置，分辨率和精度超越GPS的能力。适用于测绘、物流配送、农业监测和安防巡检等应用场景。",
    features: ["超越GPS精度", "室内外无缝切换", "目标锁定追踪", "编队协调飞行"],
    marketSize: "$79.04B",
    growth: "16.34%",
  },
  {
    id: "training",
    icon: Target,
    title: "模拟训练",
    shortDesc: "军事与民用训练系统",
    description: "检测训练者的瞄准点和武器的6DOF位置姿态。美国陆军的下一代SVT系统明确要求\"无激光\"解决方案，这正是我们的核心优势。",
    features: ["无激光安全方案", "多人同时训练", "真实场景模拟", "实时反馈分析"],
    marketSize: "$12.90B",
    growth: "5.8%",
  },
]

export function ApplicationsSection() {
  const [activeApp, setActiveApp] = useState(applications[0])

  return (
    <section id="applications" className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-sm text-primary">应用场景</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              赋能多个行业领域
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            我们的视觉AI解决方案可广泛应用于需要精确位置和姿态检测的各个领域，
            为系统集成商提供革命性的技术支持。
          </p>
        </div>

        {/* Interactive Application Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Application Tabs */}
          <div className="space-y-3">
            {applications.map((app) => (
              <button
                key={app.id}
                onClick={() => setActiveApp(app)}
                className={cn(
                  "w-full p-4 rounded-xl text-left transition-all duration-300 flex items-center gap-4",
                  activeApp.id === app.id
                    ? "bg-primary/10 border border-primary/30"
                    : "bg-card/50 border border-border hover:bg-card/80"
                )}
              >
                <div className={cn(
                  "flex items-center justify-center w-12 h-12 rounded-lg transition-colors",
                  activeApp.id === app.id ? "bg-primary/20" : "bg-muted"
                )}>
                  <app.icon className={cn(
                    "h-6 w-6",
                    activeApp.id === app.id ? "text-primary" : "text-muted-foreground"
                  )} />
                </div>
                <div className="flex-1">
                  <h3 className={cn(
                    "font-semibold",
                    activeApp.id === app.id ? "text-primary" : "text-foreground"
                  )}>
                    {app.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{app.shortDesc}</p>
                </div>
                <ChevronRight className={cn(
                  "h-5 w-5 transition-transform",
                  activeApp.id === app.id ? "text-primary rotate-90" : "text-muted-foreground"
                )} />
              </button>
            ))}
          </div>

          {/* Active Application Detail */}
          <div className="lg:col-span-2 p-8 rounded-2xl bg-card/50 border border-border backdrop-blur-sm">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10">
                <activeApp.icon className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {activeApp.title}
                </h3>
                <p className="text-muted-foreground">{activeApp.shortDesc}</p>
              </div>
            </div>

            <p className="text-foreground/80 leading-relaxed mb-8">
              {activeApp.description}
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {activeApp.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            {/* Market Stats */}
            <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-muted/30">
              <div>
                <p className="text-sm text-muted-foreground mb-1">2028年预计市场规模</p>
                <p className="text-2xl font-bold text-primary">{activeApp.marketSize}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">年增长率</p>
                <p className="text-2xl font-bold text-accent">{activeApp.growth}</p>
              </div>
            </div>

            <Button className="mt-8 glow">
              了解详细方案
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
