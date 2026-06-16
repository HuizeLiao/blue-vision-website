"use client"

import { Building2 } from "lucide-react"

const partners = [
  { name: "MILO Range", type: "战略合作伙伴" },
  { name: "InVeris Training", type: "行业领导者" },
  { name: "HawkEye TCG", type: "市场专家" },
  { name: "US Army", type: "终端客户" },
  { name: "US Marines", type: "终端客户" },
]

export function TrustedBySection() {
  return (
    <section className="relative py-16 border-y border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-muted-foreground mb-8">
          与行业领导者建立合作关系
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {partners.map((partner, index) => (
            <div key={index} className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-muted/50">
                <Building2 className="h-6 w-6 text-muted-foreground" />
              </div>
              <span className="text-sm font-medium text-foreground">{partner.name}</span>
              <span className="text-xs text-muted-foreground">{partner.type}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
