"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedBackgroundProps {
  className?: string
  variant?: "dots" | "grid" | "waves" | "gradient"
  color?: string
  secondaryColor?: string
  speed?: number
  density?: number
  interactive?: boolean
}

export function AnimatedBackground({
  className,
  variant = "dots",
  color = "rgba(255, 255, 255, 0.03)",
  secondaryColor = "rgba(255, 255, 255, 0.05)",
  speed = 5,
  density = 30,
  interactive = true,
}: AnimatedBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  if (variant === "gradient") {
    return (
      <motion.div
        className={cn("absolute inset-0 -z-10 overflow-hidden", className)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${color}, transparent 80%)`,
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: speed * 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 70% 30%, ${secondaryColor}, transparent 70%)`,
          }}
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: speed * 3,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </motion.div>
    )
  }

  return (
    <div ref={containerRef} className={cn("absolute inset-0 -z-10 overflow-hidden", className)}>
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <defs>
          <pattern
            id={`${variant}-pattern`}
            width={variant === "dots" ? density : density * 2}
            height={variant === "dots" ? density : density * 2}
            patternUnits="userSpaceOnUse"
          >
            {variant === "dots" && <circle cx={density / 2} cy={density / 2} r="1" fill={color} />}
            {variant === "grid" && (
              <path d={`M ${density} 0 L 0 0 0 ${density}`} fill="none" stroke={color} strokeWidth="0.5" />
            )}
            {variant === "waves" && (
              <path
                d={`M 0 ${density} Q ${density / 2} 0 ${density} ${density} T ${density * 2} ${density}`}
                fill="none"
                stroke={color}
                strokeWidth="0.5"
              />
            )}
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${variant}-pattern)`} />
      </svg>
    </div>
  )
}
