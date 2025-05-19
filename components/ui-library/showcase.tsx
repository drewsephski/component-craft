"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ImageCard } from "@/components/ui-library/cards/image-card"
import { CtaCard } from "@/components/ui-library/cards/cta-card"
import { ProgressCard } from "@/components/ui-library/cards/progress-card"
import { GradientButton } from "@/components/ui-library/buttons/gradient-button"
import { PrimaryButton, SecondaryButton, OutlineButton } from "@/components/ui-library/buttons/button-variants"
import {
  ScrollAnimation,
  StaggerContainer,
  StaggerItem,
  Parallax,
} from "@/components/ui-library/animations/scroll-animations"
import { MouseGlow } from "@/components/ui-library/effects/mouse-glow"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { Sparkles, Zap, Code, Layers, Palette, ArrowRight, CheckCircle } from "lucide-react"

export function ComponentShowcase() {
  const [activeTab, setActiveTab] = useState("cards")

  return (
    <div className="container py-12 space-y-12">
      <MouseGlow color="rgba(220, 38, 38, 0.15)" size={500} blur={120} />

      <div className="text-center space-y-4">
        <ScrollAnimation type="fade" direction="up">
          <h2 className="text-3xl font-heading font-bold tracking-tighter sm:text-5xl">UI Component Library</h2>
        </ScrollAnimation>
        <ScrollAnimation type="fade" direction="up" delay={0.2}>
          <p className="text-muted-foreground max-w-[800px] mx-auto">
            A comprehensive collection of interactive components with consistent design and smooth animations.
          </p>
        </ScrollAnimation>
      </div>

      <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList className="glassmorphic-tabs">
            <TabsTrigger value="cards">Cards</TabsTrigger>
            <TabsTrigger value="buttons">Buttons</TabsTrigger>
            <TabsTrigger value="animations">Animations</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="cards" className="space-y-12">
          <section className="space-y-6">
            <h3 className="text-2xl font-medium tracking-tight">Image Cards</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ScrollAnimation type="slide" direction="up" delay={0.1}>
                <ImageCard
                  imageSrc="/placeholder.svg?height=300&width=500&text=Image"
                  imageAlt="Card image"
                  title="Default Image Card"
                  description="A simple card with an image, title, and description. Perfect for blog posts, articles, or product listings."
                  tags={["Design", "UI"]}
                  variant="default"
                />
              </ScrollAnimation>

              <ScrollAnimation type="slide" direction="up" delay={0.2}>
                <ImageCard
                  imageSrc="/placeholder.svg?height=300&width=500&text=Hover+Zoom"
                  imageAlt="Card with zoom effect"
                  title="Hover Zoom Effect"
                  description="This card zooms the image when hovered, creating an engaging interactive effect for featured content."
                  tags={["Interactive", "Animation"]}
                  variant="hover-zoom"
                />
              </ScrollAnimation>

              <ScrollAnimation type="slide" direction="up" delay={0.3}>
                <ImageCard
                  imageSrc="/placeholder.svg?height=300&width=500&text=Hover+Reveal"
                  imageAlt="Card with reveal effect"
                  title="Hover Reveal Effect"
                  description="This card reveals additional information when hovered, perfect for showcasing key details."
                  tags={["Motion", "Reveal"]}
                  variant="hover-reveal"
                />
              </ScrollAnimation>
            </div>
          </section>

          <section className="space-y-6">
            <h3 className="text-2xl font-medium tracking-tight">CTA Cards</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ScrollAnimation type="slide" direction="up" delay={0.1}>
                <CtaCard
                  title="Get Started Today"
                  description="Join thousands of developers building amazing UIs with our component library."
                  primaryAction={{ text: "Sign Up Now" }}
                  secondaryAction={{ text: "Learn More" }}
                  variant="default"
                  icon={<Zap className="h-6 w-6" />}
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
                  icon={<Code className="h-6 w-6" />}
                />
              </ScrollAnimation>
            </div>
          </section>

          <section className="space-y-6">
            <h3 className="text-2xl font-medium tracking-tight">Progress Cards</h3>
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
                />
              </ScrollAnimation>

              <ScrollAnimation type="slide" direction="up" delay={0.4}>
                <ProgressCard
                  title="Task Completion"
                  progress={3}
                  total={10}
                  status="info"
                  showFraction
                  variant="minimal"
                  progressColor="bg-blue-500"
                />
              </ScrollAnimation>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="buttons" className="space-y-12">
          <section className="space-y-6">
            <h3 className="text-2xl font-medium tracking-tight">Button Variants</h3>

            <Card>
              <CardHeader>
                <CardTitle>Primary Buttons</CardTitle>
                <CardDescription>The main call-to-action buttons with strong visual emphasis</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-4">
                <StaggerContainer>
                  <StaggerItem>
                    <PrimaryButton>Default</PrimaryButton>
                  </StaggerItem>
                  <StaggerItem>
                    <PrimaryButton leftIcon={<Zap className="h-4 w-4" />}>With Icon</PrimaryButton>
                  </StaggerItem>
                  <StaggerItem>
                    <PrimaryButton rightIcon={<ArrowRight className="h-4 w-4" />}>Learn More</PrimaryButton>
                  </StaggerItem>
                  <StaggerItem>
                    <PrimaryButton isLoading loadingText="Loading...">
                      Submit
                    </PrimaryButton>
                  </StaggerItem>
                </StaggerContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Secondary Buttons</CardTitle>
                <CardDescription>Used for secondary actions with moderate emphasis</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-4">
                <StaggerContainer>
                  <StaggerItem>
                    <SecondaryButton>Default</SecondaryButton>
                  </StaggerItem>
                  <StaggerItem>
                    <SecondaryButton leftIcon={<Zap className="h-4 w-4" />}>With Icon</SecondaryButton>
                  </StaggerItem>
                  <StaggerItem>
                    <SecondaryButton rightIcon={<ArrowRight className="h-4 w-4" />}>Learn More</SecondaryButton>
                  </StaggerItem>
                  <StaggerItem>
                    <SecondaryButton isLoading loadingText="Loading...">
                      Submit
                    </SecondaryButton>
                  </StaggerItem>
                </StaggerContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Outline Buttons</CardTitle>
                <CardDescription>Subtle buttons with a border and transparent background</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-4">
                <StaggerContainer>
                  <StaggerItem>
                    <OutlineButton>Default</OutlineButton>
                  </StaggerItem>
                  <StaggerItem>
                    <OutlineButton leftIcon={<Zap className="h-4 w-4" />}>With Icon</OutlineButton>
                  </StaggerItem>
                  <StaggerItem>
                    <OutlineButton rightIcon={<ArrowRight className="h-4 w-4" />}>Learn More</OutlineButton>
                  </StaggerItem>
                  <StaggerItem>
                    <OutlineButton isLoading loadingText="Loading...">
                      Submit
                    </OutlineButton>
                  </StaggerItem>
                </StaggerContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Gradient Buttons</CardTitle>
                <CardDescription>Eye-catching buttons with gradient backgrounds</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-4">
                <StaggerContainer>
                  <StaggerItem>
                    <GradientButton>Default</GradientButton>
                  </StaggerItem>
                  <StaggerItem>
                    <GradientButton
                      gradientFrom="from-blue-500"
                      gradientTo="to-purple-600"
                      gradientHoverFrom="from-blue-600"
                      gradientHoverTo="to-purple-700"
                    >
                      Custom Colors
                    </GradientButton>
                  </StaggerItem>
                  <StaggerItem>
                    <GradientButton borderWidth={2}>Outline Style</GradientButton>
                  </StaggerItem>
                  <StaggerItem>
                    <GradientButton glowAmount={5}>With Glow</GradientButton>
                  </StaggerItem>
                </StaggerContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Interactive Buttons</CardTitle>
                <CardDescription>Buttons with advanced interactive effects</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-4">
                <StaggerContainer>
                  <StaggerItem>
                    <MagneticButton className="neumorphic-button-primary">
                      <span className="px-4 py-2">Magnetic</span>
                    </MagneticButton>
                  </StaggerItem>
                </StaggerContainer>
              </CardContent>
            </Card>
          </section>
        </TabsContent>

        <TabsContent value="animations" className="space-y-12">
          <section className="space-y-6">
            <h3 className="text-2xl font-medium tracking-tight">Scroll Animations</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ScrollAnimation type="fade" direction="none">
                <Card>
                  <CardHeader>
                    <CardTitle>Fade Animation</CardTitle>
                    <CardDescription>Simple fade-in effect on scroll</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">This element fades in when it enters the viewport.</p>
                  </CardContent>
                </Card>
              </ScrollAnimation>

              <ScrollAnimation type="slide" direction="up">
                <Card>
                  <CardHeader>
                    <CardTitle>Slide Up Animation</CardTitle>
                    <CardDescription>Elements slide up as they enter the viewport</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">This element slides up when it enters the viewport.</p>
                  </CardContent>
                </Card>
              </ScrollAnimation>

              <ScrollAnimation type="slide" direction="left">
                <Card>
                  <CardHeader>
                    <CardTitle>Slide Left Animation</CardTitle>
                    <CardDescription>Elements slide in from the right</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      This element slides in from the right when it enters the viewport.
                    </p>
                  </CardContent>
                </Card>
              </ScrollAnimation>

              <ScrollAnimation type="scale" direction="none">
                <Card>
                  <CardHeader>
                    <CardTitle>Scale Animation</CardTitle>
                    <CardDescription>Elements scale up as they enter the viewport</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">This element scales up when it enters the viewport.</p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            </div>

            <h3 className="text-2xl font-medium tracking-tight mt-12">Staggered Animations</h3>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <StaggerItem key={item}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Item {item}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">This item appears with a staggered delay.</p>
                    </CardContent>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <h3 className="text-2xl font-medium tracking-tight mt-12">Parallax Effect</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Parallax speed={0.2}>
                <Card>
                  <CardHeader>
                    <CardTitle>Slow Parallax</CardTitle>
                    <CardDescription>This card moves slower than the scroll speed</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Parallax effects create depth by moving elements at different speeds relative to the scroll
                      position.
                    </p>
                  </CardContent>
                </Card>
              </Parallax>

              <Parallax speed={0.5} reverse>
                <Card>
                  <CardHeader>
                    <CardTitle>Reverse Parallax</CardTitle>
                    <CardDescription>This card moves in the opposite direction</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Reverse parallax creates an interesting effect by moving elements in the opposite direction of the
                      scroll.
                    </p>
                  </CardContent>
                </Card>
              </Parallax>
            </div>
          </section>
        </TabsContent>
      </Tabs>
    </div>
  )
}
