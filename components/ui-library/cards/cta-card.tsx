"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { GradientButton } from "@/components/ui-library/buttons/gradient-button"
import { MagneticButton } from "@/components/ui/magnetic-button"

interface CtaCardProps {
  title: string
  description: string
  primaryAction: {
    text: string
    onClick?: () => void
    href?: string
  }
  secondaryAction?: {
    text: string
    onClick?: () => void
    href?: string
  }
  className?: string
  variant?: "default" | "gradient" | "outlined" | "glass"
  alignment?: "left" | "center" | "right"
  buttonVariant?: "default" | "gradient" | "magnetic"
  icon?: React.ReactNode
}

export function CtaCard({
  title,
  description,
  primaryAction,
  secondaryAction,
  className,
  variant = "default",
  alignment = "left",
  buttonVariant = "default",
  icon,
}: CtaCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  }

  const variantClasses = {
    default: "bg-card",
    gradient: "bg-gradient-to-br from-red-900/40 to-gray-900/40",
    outlined: "bg-transparent border-2 border-primary/20",
    glass: "bg-background/60 backdrop-blur-lg border border-white/10",
  }

  const renderButton = () => {
    const props = {
      onClick: primaryAction.onClick,
      className: "mt-2",
      asChild: !!primaryAction.href,
    }

    if (buttonVariant === "gradient") {
      return (
        <GradientButton {...props}>
          {primaryAction.href ? <a href={primaryAction.href}>{primaryAction.text}</a> : primaryAction.text}
        </GradientButton>
      )
    }

    if (buttonVariant === "magnetic") {
      return (
        <MagneticButton className="neumorphic-button-primary">
          {primaryAction.href ? (
            <a href={primaryAction.href} className="px-4 py-2">
              {primaryAction.text}
            </a>
          ) : (
            <button onClick={primaryAction.onClick} className="px-4 py-2">
              {primaryAction.text}
            </button>
          )}
        </MagneticButton>
      )
    }

    return (
      <Button {...props}>
        {primaryAction.href ? <a href={primaryAction.href}>{primaryAction.text}</a> : primaryAction.text}
      </Button>
    )
  }

  return (
    <motion.div
      className={cn(
        "flex flex-col p-6 rounded-lg shadow-sm transition-all duration-300",
        variantClasses[variant],
        alignmentClasses[alignment],
        className,
      )}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
    >
      {icon && (
        <motion.div
          className="mb-4 text-primary"
          animate={{ rotate: isHovered ? 360 : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {icon}
        </motion.div>
      )}

      <h3 className="text-xl font-semibold tracking-tight mb-2">{title}</h3>
      <p className="text-muted-foreground mb-6">{description}</p>

      <div className={cn("flex gap-3 mt-auto", alignment === "center" && "justify-center")}>
        {renderButton()}

        {secondaryAction && (
          <Button variant="outline" onClick={secondaryAction.onClick} className="mt-2" asChild={!!secondaryAction.href}>
            {secondaryAction.href ? <a href={secondaryAction.href}>{secondaryAction.text}</a> : secondaryAction.text}
          </Button>
        )}
      </div>
    </motion.div>
  )
}
