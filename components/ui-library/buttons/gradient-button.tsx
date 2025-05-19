"use client"

import { forwardRef } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button, type ButtonProps } from "@/components/ui/button"

interface GradientButtonProps extends ButtonProps {
  gradientFrom?: string
  gradientTo?: string
  gradientHoverFrom?: string
  gradientHoverTo?: string
  borderWidth?: number
  glowAmount?: number
}

export const GradientButton = forwardRef<HTMLButtonElement, GradientButtonProps>(
  (
    {
      className,
      variant,
      children,
      gradientFrom = "from-red-600",
      gradientTo = "to-red-900",
      gradientHoverFrom = "from-red-500",
      gradientHoverTo = "to-red-800",
      borderWidth = 0,
      glowAmount = 0,
      ...props
    },
    ref,
  ) => {
    const gradientClasses = cn(
      "bg-gradient-to-r",
      gradientFrom,
      gradientTo,
      "hover:bg-gradient-to-r",
      `hover:${gradientHoverFrom}`,
      `hover:${gradientHoverTo}`,
    )

    return (
      <motion.div
        className="relative inline-block"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.3 }}
      >
        {glowAmount > 0 && (
          <div
            className={cn(
              "absolute inset-0 rounded-xl bg-gradient-to-r",
              gradientFrom,
              gradientTo,
              "opacity-70 blur-md -z-10 transition-opacity duration-300",
              "group-hover:opacity-100",
            )}
            style={{ padding: glowAmount }}
          />
        )}
        <Button
          ref={ref}
          className={cn(
            gradientClasses,
            "text-white border-0 relative group rounded-xl",
            borderWidth > 0 && "p-[2px] bg-clip-padding",
            className,
          )}
          variant="default"
          {...props}
        >
          {borderWidth > 0 ? (
            <span
              className={cn(
                "rounded-[0.6rem] bg-background px-4 py-2 flex items-center justify-center h-full w-full",
                "transition-colors duration-300 group-hover:bg-transparent group-hover:text-white",
              )}
            >
              {children}
            </span>
          ) : (
            children
          )}
        </Button>
      </motion.div>
    )
  },
)

GradientButton.displayName = "GradientButton"
