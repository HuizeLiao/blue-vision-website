"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"
import { FieldGroup, Field, FieldLabel } from "@/components/ui/field"

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/50" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-sm text-primary">联系我们</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              开启合作之旅
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            无论您是系统集成商、技术合作伙伴还是投资机构，
            我们都期待与您探讨如何将视觉AI技术应用于您的产品和项目。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">联系方式</h3>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">公司地址</h4>
                  <p className="text-muted-foreground">
                    Alpharetta, Georgia<br />
                    United States
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">电子邮件</h4>
                  <p className="text-muted-foreground">
                    contact@bluevisionsys.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">商务咨询</h4>
                  <p className="text-muted-foreground">
                    欢迎通过邮件预约商务洽谈
                  </p>
                </div>
              </div>
            </div>

            {/* Target Customers */}
            <div className="p-6 rounded-xl bg-card/50 border border-border">
              <h4 className="font-semibold text-foreground mb-4">我们的目标客户</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary mt-1.5" />
                  <span>VR/AR、自动驾驶、机器人、无人机领域的系统集成商</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary mt-1.5" />
                  <span>军事模拟与训练系统开发商</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary mt-1.5" />
                  <span>寻求创新AP/6DOF解决方案的初创公司</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary mt-1.5" />
                  <span>技术投资机构和战略合作伙伴</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 rounded-2xl bg-card/50 border border-border backdrop-blur-sm">
            <h3 className="text-xl font-bold text-foreground mb-6">发送消息</h3>
            
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  消息已发送！
                </h4>
                <p className="text-muted-foreground">
                  我们会尽快回复您的咨询。
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <FieldGroup>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field>
                      <FieldLabel>姓名</FieldLabel>
                      <Input placeholder="您的姓名" required />
                    </Field>
                    <Field>
                      <FieldLabel>公司</FieldLabel>
                      <Input placeholder="公司名称" />
                    </Field>
                  </div>
                  <Field>
                    <FieldLabel>电子邮件</FieldLabel>
                    <Input type="email" placeholder="your@email.com" required />
                  </Field>
                  <Field>
                    <FieldLabel>您感兴趣的领域</FieldLabel>
                    <Input placeholder="如：VR/AR、自动驾驶、机器人等" />
                  </Field>
                  <Field>
                    <FieldLabel>消息内容</FieldLabel>
                    <Textarea
                      placeholder="请描述您的需求或问题..."
                      rows={5}
                      required
                    />
                  </Field>
                  <Button type="submit" className="w-full glow" size="lg">
                    <Send className="mr-2 h-4 w-4" />
                    发送消息
                  </Button>
                </FieldGroup>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
