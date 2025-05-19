"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import { CheckCircle2, AlertCircle } from "lucide-react"

interface ProgressCardProps {
  title: string
  description?: string
  progress: number
  total: number
  status?: "default" | "success" | "warning" | "error" | "info"
  showPercentage?: boolean
  showFraction?: boolean
  className?: string
  variant?: "default" | "minimal" | "gradient" | "outlined"
  progressColor?: string
  trackColor?: string
  animated?: boolean
  icon?: React.ReactNode
}

export function ProgressCard({
  title,
  description,
  progress,
  total,
  status = "default",
  showPercentage = true,
  showFraction = false,
  className,
  variant = "default",
  progressColor,
  trackColor,
  animated = true,
  icon,
}: ProgressCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const controls = useAnimation()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const percentage = Math.round((progress / total) * 100)

  const statusColors = {
    default: "bg-primary",
    success: "bg-green-500",
    warning: "bg-yellow-500",
    error: "bg-red-500",
    info: "bg-blue-500",
  }

  const variantClasses = {
    default: "bg-card border shadow-sm",
    minimal: "bg-transparent",
    gradient: "bg-gradient-to-br from-red-900/20 to-gray-900/20 border border-red-900/10",
    outlined: "bg-transparent border-2 border-primary/20",
  }

  const progressColorClass = progressColor || statusColors[status]
  const trackColorClass = trackColor || "bg-muted"

  useEffect(() => {
    if (inView && animated) {
      controls.start({
        width: `${percentage}%`,
        transition: { duration: 1, ease: "easeOut" },
      })
    }
  }, [controls, inView, percentage, animated])

  const getStatusIcon = () => {
    switch (status) {
      case "success":
        return <CheckCircle2 className="h-5 w-5 text-green-500" />
      case "warning":
      case "error":
        return <AlertCircle className="h-5 w-5 text-red-500" />
      default:
        return null
    }
  }

  return (
    <motion.div
      ref={ref}
      className={cn("p-6 rounded-lg transition-all duration-300", variantClasses[variant], className)}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -3 }}
    >
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-2">
          {icon && (
            <motion.div
              animate={{ rotate: isHovered ? 10 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-primary"
            >
              {icon}
            </motion.div>
          )}
          <h3 className="text-lg font-medium tracking-tight">{title}</h3>
        </div>
        <div className="flex items-center gap-2">
          {getStatusIcon()}
          {showPercentage && <span className="text-sm font-medium">{percentage}%</span>}
          {showFraction && (
            <span className="text-sm text-muted-foreground">
              {progress}/{total}
            </span>
          )}
        </div>
      </div>

      {description && <p className="text-sm text-muted-foreground mb-3">{description}</p>}

      <div className={cn("h-2 rounded-full overflow-hidden", trackColorClass)}>
        <motion.div
          className={cn("h-full rounded-full", progressColorClass)}
          initial={{ width: "0%" }}
          animate={controls}
          style={!animated ? { width: `${percentage}%` } : {}}
        />
      </div>
    </motion.div>
  )
}
