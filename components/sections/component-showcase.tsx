"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BentoGrid } from "@/components/ui/bento-grid"
import { TiltCard } from "@/components/ui/tilt-card"
import { Palette, Layers, Code, Sparkles } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedText } from "@/components/ui/animated-text"
import { AnimatedGradientBorder } from "@/components/ui/animated-gradient-border"

export function ComponentShowcase() {
  const [activeTab, setActiveTab] = useState("buttons")

  return (
    <section id="components" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <AnimatedText
                text="Explore Our Components"
                variant="heading"
                className="text-3xl font-heading font-bold tracking-tighter sm:text-5xl"
                animation="slide"
              />
              <AnimatedText
                text="Browse our collection of beautifully designed components for your next project."
                variant="paragraph"
                className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 opacity-70"
                animation="fade"
                delay={0.3}
              />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-12">
            <Tabs defaultValue="buttons" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <div className="flex justify-center mb-8">
                <AnimatedGradientBorder
                  colors={["#dc2626", "#4b5563", "#dc2626", "#4b5563"]}
                  borderWidth={1}
                  duration={8}
                  containerClassName="rounded-full"
                >
                  <TabsList className="glassmorphic-tabs border-0">
                    <TabsTrigger value="buttons">Buttons</TabsTrigger>
                    <TabsTrigger value="cards">Cards</TabsTrigger>
                    <TabsTrigger value="bento">Bento Grid</TabsTrigger>
                    <TabsTrigger value="forms">Forms</TabsTrigger>
                  </TabsList>
                </AnimatedGradientBorder>
              </div>

              <AnimatePresence mode="wait">
                <TabsContent value="buttons" className="mt-4">
                  <motion.div
                    key="buttons"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  >
                    <div className="flex flex-col gap-4 p-6 border rounded-lg glassmorphic-card">
                      <h3 className="text-lg font-medium tracking-tight">Primary Buttons</h3>
                      <div className="flex flex-wrap gap-2">
                        <motion.button
                          className="neumorphic-button-primary inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Default
                        </motion.button>
                        <motion.button
                          className="neumorphic-button-primary inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Small
                        </motion.button>
                        <motion.button
                          className="neumorphic-button-primary inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Large
                        </motion.button>
                      </div>
                    </div>

                    <div className="flex flex-col gap-4 p-6 border rounded-lg glassmorphic-card">
                      <h3 className="text-lg font-medium tracking-tight">Secondary Buttons</h3>
                      <div className="flex flex-wrap gap-2">
                        <motion.button
                          className="neumorphic-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Default
                        </motion.button>
                        <motion.button
                          className="neumorphic-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-9 rounded-md px-3"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Small
                        </motion.button>
                        <motion.button
                          className="neumorphic-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-11 rounded-md px-8"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Large
                        </motion.button>
                      </div>
                    </div>

                    <div className="flex flex-col gap-4 p-6 border rounded-lg glassmorphic-card">
                      <h3 className="text-lg font-medium tracking-tight">Outline Buttons</h3>
                      <div className="flex flex-wrap gap-2">
                        <motion.button
                          className="neumorphic-button-outline inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Default
                        </motion.button>
                        <motion.button
                          className="neumorphic-button-outline inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Small
                        </motion.button>
                        <motion.button
                          className="neumorphic-button-outline inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Large
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                </TabsContent>

                <TabsContent value="cards" className="mt-4">
                  <motion.div
                    key="cards"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  >
                    <TiltCard className="p-6 border rounded-lg glassmorphic-card group">
                      <h3 className="text-lg font-medium mb-2 tracking-tight group-hover:text-red-500 transition-colors">
                        3D Tilt Card
                      </h3>
                      <p className="text-muted-foreground opacity-70 group-hover:opacity-100 transition-opacity">
                        Interactive card with 3D tilt effect on hover.
                      </p>
                    </TiltCard>

                    <TiltCard className="p-6 border rounded-lg glassmorphic-card bg-gradient-to-br from-red-900/20 to-gray-900/20 group">
                      <h3 className="text-lg font-medium mb-2 tracking-tight group-hover:text-red-500 transition-colors">
                        Gradient Card
                      </h3>
                      <p className="text-muted-foreground opacity-70 group-hover:opacity-100 transition-opacity">
                        Card with gradient background and tilt effect.
                      </p>
                    </TiltCard>

                    <TiltCard className="p-6 border rounded-lg glassmorphic-card bg-muted/50 group">
                      <h3 className="text-lg font-medium mb-2 tracking-tight group-hover:text-red-500 transition-colors">
                        Muted Card
                      </h3>
                      <p className="text-muted-foreground opacity-70 group-hover:opacity-100 transition-opacity">
                        Subtle background with interactive tilt effect.
                      </p>
                    </TiltCard>
                  </motion.div>
                </TabsContent>

                <TabsContent value="bento" className="mt-4">
                  <motion.div
                    key="bento"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <BentoGrid className="max-w-4xl mx-auto">
                      <BentoGrid.Item
                        title="Modern Design"
                        description="Clean and minimal design for modern web applications."
                        className="col-span-2 md:row-span-2 group"
                        icon={
                          <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.8, ease: "easeInOut" }}>
                            <Palette className="h-6 w-6" />
                          </motion.div>
                        }
                      />
                      <BentoGrid.Item
                        title="Responsive"
                        description="Fully responsive components that work on all devices."
                        className="group"
                        icon={
                          <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
                            <Layers className="h-6 w-6" />
                          </motion.div>
                        }
                      />
                      <BentoGrid.Item
                        title="Accessible"
                        description="Built with accessibility in mind for all users."
                        className="group"
                        icon={
                          <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
                            <Code className="h-6 w-6" />
                          </motion.div>
                        }
                      />
                      <BentoGrid.Item
                        title="Interactive"
                        description="Engaging interactive elements and animations."
                        className="col-span-2 group"
                        icon={
                          <motion.div
                            animate={{
                              scale: [1, 1.2, 1],
                              rotate: [0, 5, 0, -5, 0],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Number.POSITIVE_INFINITY,
                              repeatDelay: 1,
                            }}
                          >
                            <Sparkles className="h-6 w-6" />
                          </motion.div>
                        }
                      />
                    </BentoGrid>
                  </motion.div>
                </TabsContent>

                <TabsContent value="forms" className="mt-4">
                  <motion.div
                    key="forms"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="max-w-md mx-auto"
                  >
                    <AnimatedGradientBorder
                      colors={["#dc2626", "#4b5563", "#dc2626", "#4b5563"]}
                      borderWidth={1}
                      duration={8}
                    >
                      <div className="p-6 glassmorphic-card">
                        <form className="space-y-4">
                          <div className="space-y-2">
                            <label
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              htmlFor="email"
                            >
                              Email
                            </label>
                            <input
                              className="flex h-10 w-full rounded-md border border-input bg-background/50 backdrop-blur-sm px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all focus-visible:scale-[1.01]"
                              id="email"
                              placeholder="Enter your email"
                              type="email"
                            />
                          </div>
                          <div className="space-y-2">
                            <label
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              htmlFor="password"
                            >
                              Password
                            </label>
                            <input
                              className="flex h-10 w-full rounded-md border border-input bg-background/50 backdrop-blur-sm px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all focus-visible:scale-[1.01]"
                              id="password"
                              placeholder="Enter your password"
                              type="password"
                            />
                          </div>
                          <motion.button
                            className="neumorphic-button-primary inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            Sign In
                          </motion.button>
                        </form>
                      </div>
                    </AnimatedGradientBorder>
                  </motion.div>
                </TabsContent>
              </AnimatePresence>
            </Tabs>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
