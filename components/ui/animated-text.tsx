"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"

type AnimatedTextProps = {
  text: string
  variant?: "heading" | "paragraph"
  className?: string
  once?: boolean
  delay?: number
  duration?: number
  staggerChildren?: number
  animation?: "fade" | "slide" | "bounce" | "typewriter" | "wave"
  color?: string
}

const defaultAnimations = {
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slide: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  bounce: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.5 } },
  },
  typewriter: {
    hidden: { opacity: 0, width: 0 },
    visible: { opacity: 1, width: "100%" },
  },
  wave: {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
      },
    }),
  },
}

export function AnimatedText({
  text,
  variant = "heading",
  className,
  once = true,
  delay = 0,
  duration = 0.5,
  staggerChildren = 0.03,
  animation = "slide",
  color,
}: AnimatedTextProps) {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    } else if (!once) {
      controls.start("hidden")
    }
  }, [controls, inView, once])

  if (animation === "wave") {
    return (
      <motion.div
        ref={ref}
        className={cn("inline-block", className)}
        initial="hidden"
        animate={controls}
        transition={{ staggerChildren, delayChildren: delay }}
      >
        {text.split("").map((char, i) => (
          <motion.span key={`${char}-${i}`} className="inline-block" custom={i} variants={defaultAnimations.wave}>
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.div>
    )
  }

  if (animation === "typewriter") {
    return (
      <div className={cn("inline-block overflow-hidden", className)}>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={defaultAnimations.typewriter}
          transition={{ duration: duration * 2, delay, ease: "easeInOut" }}
          style={{ color }}
        >
          {text}
        </motion.div>
      </div>
    )
  }

  return (
    <motion.div
      ref={ref}
      className={cn(variant === "heading" ? "font-heading" : "text-muted-foreground opacity-70", className)}
      initial="hidden"
      animate={controls}
      variants={defaultAnimations[animation]}
      transition={{ duration, delay }}
      style={{ color }}
    >
      {text}
    </motion.div>
  )
}
