"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedText } from "@/components/ui/animated-text"
import { AnimatedGradientBorder } from "@/components/ui/animated-gradient-border"
import { ImageCard } from "@/components/ui-library/cards/image-card"
import { CtaCard } from "@/components/ui-library/cards/cta-card"
import { ProgressCard } from "@/components/ui-library/cards/progress-card"
import { GradientButton } from "@/components/ui-library/buttons/gradient-button"
import { PrimaryButton, SecondaryButton, OutlineButton } from "@/components/ui-library/buttons/button-variants"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/ui-library/animations/scroll-animations"
import { Sparkles, Zap, Layers, Palette, ArrowRight, CheckCircle, BookOpen, Lightbulb, Rocket } from "lucide-react"

export function ComponentLibraryShowcase() {
  const [activeTab, setActiveTab] = useState("cards")

  return (
    <section id="components" className="w-full py-12 md:py-24 lg:py-32 overflow-hidden">
      <div className="container px-6 md:px-8">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
            <div className="space-y-4">
              <AnimatedText
                text="Component Library"
                variant="heading"
                className="text-3xl font-heading font-bold tracking-tighter sm:text-5xl gradient-text"
                animation="slide"
              />
              <AnimatedText
                text="Explore our comprehensive collection of beautifully designed UI components"
                variant="paragraph"
                className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 opacity-70"
                animation="fade"
                delay={0.3}
              />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-8">
            <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
              <div className="flex justify-center mb-12">
                <AnimatedGradientBorder
                  colors={["#dc2626", "#4b5563", "#dc2626", "#4b5563"]}
                  borderWidth={1}
                  duration={8}
                  containerClassName="rounded-full"
                >
                  <TabsList className="glassmorphic-tabs border-0">
                    <TabsTrigger value="cards">Cards</TabsTrigger>
                    <TabsTrigger value="buttons">Buttons</TabsTrigger>
                    <TabsTrigger value="progress">Progress</TabsTrigger>
                  </TabsList>
                </AnimatedGradientBorder>
              </div>

              {/* Cards Tab */}
              <TabsContent value="cards" className="space-y-12">
                <div className="space-y-4">
                  <h3 className="text-2xl font-medium tracking-tight text-center">Image Cards</h3>
                  <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-8">
                    Versatile cards with images and text, perfect for showcasing content, products, or features
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <ScrollAnimation type="slide" direction="up" delay={0.1}>
                      <ImageCard
                        imageSrc="/placeholder.svg?height=300&width=500&text=Design"
                        imageAlt="Design System"
                        title="Modern Design System"
                        description="A comprehensive design system with consistent components and styles for your web applications."
                        tags={["Design", "UI/UX"]}
                        variant="default"
                        className="border-glow-red"
                      />
                    </ScrollAnimation>

                    <ScrollAnimation type="slide" direction="up" delay={0.2}>
                      <ImageCard
                        imageSrc="/placeholder.svg?height=300&width=500&text=Components"
                        imageAlt="Component Library"
                        title="Reusable Components"
                        description="Build faster with our library of pre-built, customizable UI components for any project."
                        tags={["React", "TypeScript"]}
                        variant="hover-zoom"
                        className="border-glow-blue"
                      />
                    </ScrollAnimation>

                    <ScrollAnimation type="slide" direction="up" delay={0.3}>
                      <ImageCard
                        imageSrc="/placeholder.svg?height=300&width=500&text=Animation"
                        imageAlt="Animation Library"
                        title="Smooth Animations"
                        description="Add life to your interfaces with our collection of performant, accessible animations."
                        tags={["Motion", "Interaction"]}
                        variant="hover-reveal"
                        className="border-glow-purple"
                      />
                    </ScrollAnimation>
                  </div>
                </div>

                <div className="space-y-4 pt-8">
                  <h3 className="text-2xl font-medium tracking-tight text-center">CTA Cards</h3>
                  <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-8">
                    Attention-grabbing call-to-action cards designed to convert visitors into customers
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <ScrollAnimation type="slide" direction="up" delay={0.1}>
                      <CtaCard
                        title="Get Started Today"
                        description="Join thousands of developers building amazing UIs with our component library."
                        primaryAction={{ text: "Sign Up Now" }}
                        secondaryAction={{ text: "Learn More" }}
                        variant="default"
                        icon={<Rocket className="h-6 w-6" />}
                        className="border-glow-green"
                      />
                    </ScrollAnimation>

                    <ScrollAnimation type="slide" direction="up" delay={0.2}>
                      <CtaCard
                        title="Premium Features"
                        description="Unlock advanced components and features with our premium plan."
                        primaryAction={{ text: "Upgrade" }}
                        variant="gradient"
                        alignment="center"
                        buttonVariant="gradient"
                        icon={<Sparkles className="h-6 w-6" />}
                        className="border-glow-yellow"
                      />
                    </ScrollAnimation>

                    <ScrollAnimation type="slide" direction="up" delay={0.3}>
                      <CtaCard
                        title="Need Help?"
                        description="Our support team is ready to assist you with any questions."
                        primaryAction={{ text: "Contact Support" }}
                        variant="glass"
                        alignment="right"
                        buttonVariant="magnetic"
                        icon={<Lightbulb className="h-6 w-6" />}
                        className="border-glow-orange"
                      />
                    </ScrollAnimation>
                  </div>
                </div>
              </TabsContent>

              {/* Buttons Tab */}
              <TabsContent value="buttons" className="space-y-12">
                <div className="space-y-4">
                  <h3 className="text-2xl font-medium tracking-tight text-center">Button Styles</h3>
                  <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-8">
                    A comprehensive collection of button styles for every use case
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <ScrollAnimation type="slide" direction="left" delay={0.1}>
                      <div className="p-6 rounded-xl border glassmorphic-card border-glow-red">
                        <h4 className="text-lg font-medium mb-6">Primary & Secondary</h4>
                        <div className="flex flex-wrap gap-6">
                          <StaggerContainer>
                            <StaggerItem>
                              <PrimaryButton>Primary Button</PrimaryButton>
                            </StaggerItem>
                            <StaggerItem>
                              <PrimaryButton leftIcon={<Zap className="h-4 w-4" />}>With Icon</PrimaryButton>
                            </StaggerItem>
                            <StaggerItem>
                              <SecondaryButton>Secondary</SecondaryButton>
                            </StaggerItem>
                            <StaggerItem>
                              <SecondaryButton rightIcon={<ArrowRight className="h-4 w-4" />}>
                                Learn More
                              </SecondaryButton>
                            </StaggerItem>
                          </StaggerContainer>
                        </div>
                      </div>
                    </ScrollAnimation>

                    <ScrollAnimation type="slide" direction="right" delay={0.1}>
                      <div className="p-6 rounded-xl border glassmorphic-card border-glow-blue">
                        <h4 className="text-lg font-medium mb-6">Outline & Gradient</h4>
                        <div className="flex flex-wrap gap-6">
                          <StaggerContainer>
                            <StaggerItem>
                              <OutlineButton>Outline Button</OutlineButton>
                            </StaggerItem>
                            <StaggerItem>
                              <OutlineButton leftIcon={<BookOpen className="h-4 w-4" />}>Documentation</OutlineButton>
                            </StaggerItem>
                            <StaggerItem>
                              <GradientButton>Gradient</GradientButton>
                            </StaggerItem>
                            <StaggerItem>
                              <GradientButton gradientFrom="from-blue-500" gradientTo="to-purple-600" glowAmount={4}>
                                With Glow
                              </GradientButton>
                            </StaggerItem>
                          </StaggerContainer>
                        </div>
                      </div>
                    </ScrollAnimation>

                    <ScrollAnimation type="slide" direction="up" delay={0.3}>
                      <div className="p-6 rounded-xl border glassmorphic-card border-glow-purple">
                        <h4 className="text-lg font-medium mb-6">Interactive Buttons</h4>
                        <div className="flex flex-wrap gap-6">
                          <StaggerContainer>
                            <StaggerItem>
                              <MagneticButton className="neumorphic-button-primary">
                                <span className="px-6 py-2.5">Magnetic Button</span>
                              </MagneticButton>
                            </StaggerItem>
                            <StaggerItem>
                              <GradientButton borderWidth={2}>Outline Gradient</GradientButton>
                            </StaggerItem>
                          </StaggerContainer>
                        </div>
                      </div>
                    </ScrollAnimation>

                    <ScrollAnimation type="slide" direction="up" delay={0.4}>
                      <div className="p-6 rounded-xl border glassmorphic-card border-glow-green">
                        <h4 className="text-lg font-medium mb-6">States & Variations</h4>
                        <div className="flex flex-wrap gap-6">
                          <StaggerContainer>
                            <StaggerItem>
                              <PrimaryButton isLoading loadingText="Loading...">
                                Submit
                              </PrimaryButton>
                            </StaggerItem>
                            <StaggerItem>
                              <SecondaryButton disabled>Disabled</SecondaryButton>
                            </StaggerItem>
                            <StaggerItem>
                              <OutlineButton size="sm">Small</OutlineButton>
                            </StaggerItem>
                            <StaggerItem>
                              <PrimaryButton size="lg">Large</PrimaryButton>
                            </StaggerItem>
                          </StaggerContainer>
                        </div>
                      </div>
                    </ScrollAnimation>
                  </div>
                </div>
              </TabsContent>

              {/* Progress Tab */}
              <TabsContent value="progress" className="space-y-12">
                <div className="space-y-4">
                  <h3 className="text-2xl font-medium tracking-tight text-center">Progress Cards</h3>
                  <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-8">
                    Visualize progress, completion status, and metrics with these interactive cards
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ScrollAnimation type="slide" direction="up" delay={0.1}>
                      <ProgressCard
                        title="Project Completion"
                        description="Track your project's progress toward completion."
                        progress={65}
                        total={100}
                        status="default"
                        showPercentage
                        variant="default"
                        icon={<Layers className="h-6 w-6" />}
                        className="border-glow-red"
                      />
                    </ScrollAnimation>

                    <ScrollAnimation type="slide" direction="up" delay={0.2}>
                      <ProgressCard
                        title="Download Status"
                        progress={80}
                        total={100}
                        status="success"
                        showPercentage
                        showFraction
                        variant="gradient"
                        progressColor="bg-gradient-to-r from-red-500 to-red-700"
                        icon={<CheckCircle className="h-6 w-6" />}
                        className="border-glow-blue"
                      />
                    </ScrollAnimation>

                    <ScrollAnimation type="slide" direction="up" delay={0.3}>
                      <ProgressCard
                        title="Storage Usage"
                        description="You're approaching your storage limit."
                        progress={85}
                        total={100}
                        status="warning"
                        showPercentage
                        variant="outlined"
                        icon={<Palette className="h-6 w-6" />}
                        className="border-glow-purple"
                      />
                    </ScrollAnimation>

                    <ScrollAnimation type="slide" direction="up" delay={0.4}>
                      <ProgressCard
                        title="Learning Progress"
                        description="Track your course completion status."
                        progress={30}
                        total={100}
                        status="info"
                        showFraction
                        variant="glass"
                        progressColor="bg-blue-500"
                        icon={<BookOpen className="h-6 w-6" />}
                        className="border-glow-green"
                      />
                    </ScrollAnimation>
                  </div>
                </div>

                <div className="mt-12 text-center">
                  <ScrollAnimation type="fade">
                    <AnimatedGradientBorder
                      colors={["#dc2626", "#4b5563", "#dc2626", "#4b5563"]}
                      borderWidth={1}
                      duration={6}
                    >
                      <PrimaryButton
                        size="lg"
                        className="bg-background border-0 text-foreground hover:text-white px-6 py-2.5"
                      >
                        <span className="flex items-center">
                          Explore Full Library
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </span>
                      </PrimaryButton>
                    </AnimatedGradientBorder>
                  </ScrollAnimation>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
