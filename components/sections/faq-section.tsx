"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ScrollReveal } from "@/components/scroll-reveal"

export function FaqSection() {
  const faqs = [
    {
      question: "What is ComponentCraft?",
      answer:
        "ComponentCraft is a premium UI component library built with shadcn/ui and Aceternity UI for modern web applications. It provides a collection of beautifully designed, accessible, and customizable components for React and Next.js applications.",
    },
    {
      question: "How do I get started with ComponentCraft?",
      answer:
        "To get started, purchase a license that fits your needs, download the component library, and follow our comprehensive documentation to integrate the components into your project.",
    },
    {
      question: "Can I customize the components?",
      answer:
        "Yes, all components are fully customizable. You can modify colors, sizes, animations, and other properties to match your brand identity and design requirements.",
    },
    {
      question: "Is ComponentCraft compatible with my tech stack?",
      answer:
        "ComponentCraft is designed to work seamlessly with React and Next.js applications. It integrates well with Tailwind CSS and TypeScript, making it a perfect fit for modern web development workflows.",
    },
    {
      question: "Do you offer support?",
      answer:
        "Yes, we offer support based on your license tier. The Pro and Enterprise plans include priority support to help you with any issues or questions you may have.",
    },
  ]

  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-heading font-bold tracking-tighter sm:text-5xl">
                Frequently Asked Questions
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 opacity-70">
                Find answers to common questions about our component library.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="mx-auto max-w-3xl py-12">
          <ScrollReveal>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="glassmorphic-accordion-item">
                  <AccordionTrigger className="text-left font-medium tracking-tight">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground opacity-70">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
