"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface CursorHighlightProps {
  color?: string
  size?: number
  delay?: number
  blur?: number
}

export function CursorHighlight({
  color = "rgba(255, 0, 128, 0.15)",
  size = 300,
  delay = 0.1,
  blur = 40,
}: CursorHighlightProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener("mousemove", updateMousePosition)
    document.documentElement.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      document.documentElement.addEventListener("mouseleave", handleMouseLeave)
    }
  }, [isVisible])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 pointer-events-none z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute rounded-full pointer-events-none"
            style={{
              backgroundColor: color,
              width: size,
              height: size,
              filter: `blur(${blur}px)`,
              top: -size / 2,
              left: -size / 2,
            }}
            animate={{
              x: mousePosition.x,
              y: mousePosition.y,
            }}
            transition={{
              type: "spring",
              damping: 30,
              stiffness: 200,
              mass: 0.5,
              delay,
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
