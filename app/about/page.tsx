"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Award, Users, Lightbulb, Target } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Pushing the boundaries of visual AI through continuous research and development.",
  },
  {
    icon: Target,
    title: "Precision",
    description: "Delivering sub-millimeter accuracy for the most demanding applications.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Building strong partnerships between academia and industry.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Committed to the highest standards in everything we do.",
  },
]

const founders = [
  {
    name: "Mr. Wen Li",
    role: "PI & Co-founder",
    description: "Decades of industrial experience in simulated firearm training systems.",
  },
  {
    name: "Dr. Ming Yang",
    role: "Co-founder",
    description: "University Professor specializing in image processing and computer vision.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              About Us
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
              A Successful Academia-Industry Partnership
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              Blue Vision Systems represents a successful collaboration between academic research 
              and industrial expertise, pioneering visual AI solutions for real-world applications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We are dedicated to advancing the field of computer vision through innovative 
                pure-vision AI solutions. Our technology eliminates the need for lasers and 
                complex hardware, making high-precision tracking accessible and safe for 
                diverse applications.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                By bridging academic research with practical industrial applications, we deliver 
                software-defined solutions that continuously improve through algorithmic advances, 
                independent of expensive hardware upgrades.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-card border border-border rounded-2xl p-8 shadow-xl shadow-primary/5">
                <Image
                  src="/images/logo.png"
                  alt="Blue Vision Systems"
                  width={120}
                  height={120}
                  className="mx-auto mb-6"
                />
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Blue Vision Systems
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Pioneering Visual AI Technology
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Leadership Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our founders bring together decades of experience in both academia and industry.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {founders.map((founder, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-card border border-border rounded-xl p-8 text-center hover:border-primary/50 transition-colors"
              >
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {founder.name}
                </h3>
                <p className="text-sm text-primary font-medium mb-4">
                  {founder.role}
                </p>
                <p className="text-muted-foreground text-sm">
                  {founder.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our work and partnerships.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
