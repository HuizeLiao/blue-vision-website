"use client"

import { Building2, GraduationCap, Briefcase, Target, Calendar, MapPin } from "lucide-react"

const milestones = [
  {
    phase: "M1",
    title: "概念验证平台开发",
    timeline: "第11个月",
    description: "完成可行性研究和概念验证",
  },
  {
    phase: "M2",
    title: "商业产品原型",
    timeline: "第30个月",
    description: "开发商业化产品原型",
  },
  {
    phase: "M3",
    title: "技术服务交付",
    timeline: "持续进行",
    description: "为系统集成提供技术服务",
  },
  {
    phase: "M4",
    title: "客户产品交付",
    timeline: "持续进行",
    description: "系统集成商交付嵌入我们技术的产品",
  },
  {
    phase: "M5",
    title: "COTS模块交付",
    timeline: "第60个月",
    description: "交付全功能商用现成模块",
  },
]

const team = [
  {
    name: "Wen Li",
    role: "联合创始人 & CEO",
    background: "工程与科学硕士学位",
    experience: "前InVeris培训解决方案公司高级工程总监，拥有27年武器训练系统行业经验",
    expertise: "AP/6DOF检测技术、系统架构设计、项目管理",
  },
  {
    name: "Ming Yang 博士",
    role: "联合创始人 & 首席科学家",
    background: "计算机科学博士",
    experience: "肯尼索州立大学终身教授，发表70余篇同行评审论文",
    expertise: "图像处理、计算机视觉、机器学习",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-sm text-primary">关于我们</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Blue Vision Systems
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            我们致力于将前沿的学术研究与最新的工业经验和洞察相结合，
            创造性地解决市场需求与学术研究之间的差距。
          </p>
        </div>

        {/* Company Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="p-8 rounded-2xl bg-card/50 border border-border backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10">
                <Building2 className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">公司概况</h3>
                <p className="text-sm text-muted-foreground">Blue Vision Systems LLC</p>
              </div>
            </div>
            <div className="space-y-4 text-foreground/80">
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-primary" />
                <span>成立于2020年10月</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span>美国乔治亚州亚特兰大Alpharetta</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mt-4">
                公司毗邻Google、Microsoft、NCR等高科技公司，
                以及佐治亚理工学院、佐治亚大学、佐治亚州立大学等研究机构，
                并靠近全国知名的技术孵化器。
              </p>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-card/50 border border-border backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10">
                <Target className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">公司愿景</h3>
                <p className="text-sm text-muted-foreground">技术就绪度TRL 2-7</p>
              </div>
            </div>
            <p className="text-foreground/80 leading-relaxed mb-4">
              我们专注于将前沿的概念和理论转化为产品原型（TRL 2-7），
              下游企业将我们的成果集成到其产品中并推向市场。
            </p>
            <div className="p-4 rounded-xl bg-muted/30">
              <p className="text-sm font-medium text-foreground mb-2">已取得进展</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• 完成初步研发，获得实验室环境下的promising结果</li>
                <li>• 已提交专利申请保护核心创新</li>
                <li>• 与行业领先客户建立了合作关系</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Founding Team */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">创始团队</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-card/50 border border-border backdrop-blur-sm hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 flex-shrink-0">
                    {index === 0 ? (
                      <Briefcase className="h-8 w-8 text-primary" />
                    ) : (
                      <GraduationCap className="h-8 w-8 text-primary" />
                    )}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground">{member.name}</h4>
                    <p className="text-primary font-medium">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.background}</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium text-foreground mb-1">专业经验</p>
                    <p className="text-muted-foreground">{member.experience}</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">专业领域</p>
                    <p className="text-muted-foreground">{member.expertise}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Development Roadmap */}
        <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">发展路线图</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary via-accent to-primary hidden md:block" />
            
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center z-10">
                    <span className="text-primary font-bold">{milestone.phase}</span>
                  </div>
                  <div className="flex-1 p-4 rounded-xl bg-card/50 border border-border">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                      <h4 className="font-semibold text-foreground">{milestone.title}</h4>
                      <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary w-fit">
                        {milestone.timeline}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
