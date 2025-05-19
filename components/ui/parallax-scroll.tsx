"use client"

import { useRef, type ReactNode } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

interface ParallaxScrollProps {
  children: ReactNode
  className?: string
  baseVelocity?: number
  direction?: "up" | "down" | "left" | "right"
  overflow?: boolean
}

export function ParallaxScroll({
  children,
  className,
  baseVelocity = 1,
  direction = "up",
  overflow = false,
}: ParallaxScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const isVertical = direction === "up" || direction === "down"
  const multiplier = direction === "up" || direction === "left" ? -1 : 1

  const transformValue = useTransform(scrollYProgress, [0, 1], ["0%", `${baseVelocity * 100 * multiplier}%`])

  return (
    <motion.div ref={containerRef} className={cn("relative", overflow ? "overflow-hidden" : "", className)}>
      <motion.div
        style={{
          [isVertical ? "y" : "x"]: transformValue,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}
