"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedGradientBorderProps {
  children: ReactNode
  className?: string
  containerClassName?: string
  duration?: number
  borderWidth?: number
  colors?: string[]
  hoverEffect?: boolean
  rounded?: boolean
}

export function AnimatedGradientBorder({
  children,
  className,
  containerClassName,
  duration = 8,
  borderWidth = 2,
  colors = ["#ff0080", "#7928ca", "#ff4d4d", "#0070f3"],
  hoverEffect = true,
  rounded = true,
}: AnimatedGradientBorderProps) {
  return (
    <div className={cn("relative p-[1px] overflow-hidden", rounded ? "rounded-lg" : "", containerClassName)}>
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          background: `linear-gradient(to right, ${colors.join(", ")})`,
          backgroundSize: "300% 300%",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
      <div
        className={cn("relative z-10 bg-background", rounded ? "rounded-lg" : "", className)}
        style={{
          margin: borderWidth,
        }}
      >
        {children}
      </div>
    </div>
  )
}
