"use client"

import { TrendingUp, DollarSign, Users, Award } from "lucide-react"

const marketData = [
  {
    segment: "VR/AR",
    size2023: "$5.77M",
    size2028: "$11.61M",
    growth: "15%",
  },
  {
    segment: "自动驾驶",
    size2023: "$41M",
    size2028: "$220.51M",
    growth: "40%",
  },
  {
    segment: "机器人",
    size2023: "$7.47M",
    size2028: "$9.02M",
    growth: "3.83%",
  },
  {
    segment: "商用无人机",
    size2023: "$7.42M",
    size2028: "$15.81M",
    growth: "16.34%",
  },
  {
    segment: "模拟训练",
    size2023: "$1.95M",
    size2028: "$2.58M",
    growth: "5.8%",
  },
]

const businessModels = [
  {
    icon: Users,
    title: "技术服务",
    description: "为系统集成商提供技术支持，将我们的解决方案集成到其产品中。",
    revenue: "$500K-1M/年",
  },
  {
    icon: Award,
    title: "IP许可",
    description: "向使用我们专利技术的制造商收取许可费用。",
    revenue: "$500K-1M/年",
  },
  {
    icon: DollarSign,
    title: "COTS模块",
    description: "设计标准化的商用现成模块，集成软硬件于一体。",
    revenue: "$25.95M/年",
  },
]

export function MarketSection() {
  return (
    <section id="market" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-sm text-primary">市场机遇</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              蓬勃发展的市场前景
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            AP/6DOF检测组件市场正在快速增长，预计2028年将达到$259.53M，
            为我们的创新技术提供了巨大的商业机会。
          </p>
        </div>

        {/* Total Market Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/20 text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-xl bg-primary/20">
              <DollarSign className="h-8 w-8 text-primary" />
            </div>
            <p className="text-sm text-muted-foreground mb-2">2023年市场规模</p>
            <p className="text-4xl font-bold text-foreground">$63.61M</p>
          </div>
          <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/20 text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-xl bg-primary/20">
              <TrendingUp className="h-8 w-8 text-primary" />
            </div>
            <p className="text-sm text-muted-foreground mb-2">2028年预计规模</p>
            <p className="text-4xl font-bold text-primary">$259.53M</p>
          </div>
          <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/20 text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-xl bg-primary/20">
              <TrendingUp className="h-8 w-8 text-accent" />
            </div>
            <p className="text-sm text-muted-foreground mb-2">市场增长倍数</p>
            <p className="text-4xl font-bold text-accent">4x</p>
          </div>
        </div>

        {/* Market Segments Table */}
        <div className="mb-16 p-8 rounded-2xl bg-card/50 border border-border backdrop-blur-sm">
          <h3 className="text-xl font-bold text-foreground mb-8 text-center">
            AP/6DOF组件各细分市场规模（美元）
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 text-sm font-semibold text-muted-foreground">行业领域</th>
                  <th className="text-right py-4 px-4 text-sm font-semibold text-muted-foreground">2023年规模</th>
                  <th className="text-right py-4 px-4 text-sm font-semibold text-muted-foreground">2028年预计</th>
                  <th className="text-right py-4 px-4 text-sm font-semibold text-muted-foreground">年增长率</th>
                </tr>
              </thead>
              <tbody>
                {marketData.map((item, index) => (
                  <tr key={index} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                    <td className="py-4 px-4">
                      <span className="font-medium text-foreground">{item.segment}</span>
                    </td>
                    <td className="text-right py-4 px-4 text-muted-foreground">{item.size2023}</td>
                    <td className="text-right py-4 px-4 text-primary font-semibold">{item.size2028}</td>
                    <td className="text-right py-4 px-4">
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-primary/10 text-primary text-sm">
                        <TrendingUp className="h-3 w-3" />
                        {item.growth}
                      </span>
                    </td>
                  </tr>
                ))}
                <tr className="bg-muted/30">
                  <td className="py-4 px-4 font-bold text-foreground">总计</td>
                  <td className="text-right py-4 px-4 font-bold text-foreground">$63.61M</td>
                  <td className="text-right py-4 px-4 font-bold text-primary">$259.53M</td>
                  <td className="text-right py-4 px-4"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Business Model */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            商业模式与收入潜力
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {businessModels.map((model, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-card/50 border border-border backdrop-blur-sm hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-primary/10">
                  <model.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{model.title}</h4>
                <p className="text-sm text-muted-foreground mb-4">{model.description}</p>
                <p className="text-sm font-medium text-primary">预计收入: {model.revenue}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Market Validation */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border border-border">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-foreground mb-4">市场验证</h3>
              <p className="text-muted-foreground leading-relaxed">
                2022年7月，美国陆军授予了士兵虚拟训练器（SVT）原型合同，
                明确表示偏好"无激光"训练解决方案。该计划金额高达<span className="text-primary font-semibold">$120M</span>。
                这一发展验证了市场对我们创新技术的真实需求正在成熟。
              </p>
            </div>
            <div className="flex-shrink-0 p-6 rounded-xl bg-card/80 border border-primary/20">
              <p className="text-sm text-muted-foreground mb-2">SVT项目合同金额</p>
              <p className="text-4xl font-bold text-primary">$120M</p>
              <p className="text-sm text-muted-foreground mt-2">美国陆军</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
