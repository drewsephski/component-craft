"use client"

import type React from "react"

import { forwardRef } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button, type ButtonProps } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

interface ExtendedButtonProps extends ButtonProps {
  isLoading?: boolean
  loadingText?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  hoverScale?: number
  activeScale?: number
  withRing?: boolean
}

export const PrimaryButton = forwardRef<HTMLButtonElement, ExtendedButtonProps>(
  (
    {
      className,
      children,
      isLoading,
      loadingText,
      leftIcon,
      rightIcon,
      hoverScale = 1.03,
      activeScale = 0.98,
      withRing = true,
      ...props
    },
    ref,
  ) => {
    return (
      <motion.div
        className="inline-block"
        whileHover={{ scale: hoverScale }}
        whileTap={{ scale: activeScale }}
        transition={{ duration: 0.3 }}
      >
        <Button
          ref={ref}
          className={cn(
            "bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl",
            withRing &&
              "ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            "transition-all duration-300 font-medium",
            "hover:shadow-lg",
            className,
          )}
          disabled={isLoading || props.disabled}
          {...props}
        >
          {isLoading ? (
            <div className="flex items-center">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              {loadingText || children}
            </div>
          ) : (
            <div className="flex items-center">
              {leftIcon && <span className="mr-2">{leftIcon}</span>}
              {children}
              {rightIcon && <span className="ml-2">{rightIcon}</span>}
            </div>
          )}
        </Button>
      </motion.div>
    )
  },
)

PrimaryButton.displayName = "PrimaryButton"

export const SecondaryButton = forwardRef<HTMLButtonElement, ExtendedButtonProps>(
  (
    {
      className,
      children,
      isLoading,
      loadingText,
      leftIcon,
      rightIcon,
      hoverScale = 1.03,
      activeScale = 0.98,
      withRing = true,
      ...props
    },
    ref,
  ) => {
    return (
      <motion.div
        className="inline-block"
        whileHover={{ scale: hoverScale }}
        whileTap={{ scale: activeScale }}
        transition={{ duration: 0.3 }}
      >
        <Button
          ref={ref}
          className={cn(
            "bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-xl",
            withRing &&
              "ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            "transition-all duration-300 font-medium",
            "hover:shadow-lg",
            className,
          )}
          disabled={isLoading || props.disabled}
          variant="secondary"
          {...props}
        >
          {isLoading ? (
            <div className="flex items-center">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              {loadingText || children}
            </div>
          ) : (
            <div className="flex items-center">
              {leftIcon && <span className="mr-2">{leftIcon}</span>}
              {children}
              {rightIcon && <span className="ml-2">{rightIcon}</span>}
            </div>
          )}
        </Button>
      </motion.div>
    )
  },
)

SecondaryButton.displayName = "SecondaryButton"

export const OutlineButton = forwardRef<HTMLButtonElement, ExtendedButtonProps>(
  (
    {
      className,
      children,
      isLoading,
      loadingText,
      leftIcon,
      rightIcon,
      hoverScale = 1.03,
      activeScale = 0.98,
      withRing = true,
      ...props
    },
    ref,
  ) => {
    return (
      <motion.div
        className="inline-block"
        whileHover={{ scale: hoverScale }}
        whileTap={{ scale: activeScale }}
        transition={{ duration: 0.3 }}
      >
        <Button
          ref={ref}
          className={cn(
            "border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-xl",
            withRing &&
              "ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            "transition-all duration-300 font-medium",
            "hover:shadow-lg",
            className,
          )}
          disabled={isLoading || props.disabled}
          variant="outline"
          {...props}
        >
          {isLoading ? (
            <div className="flex items-center">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              {loadingText || children}
            </div>
          ) : (
            <div className="flex items-center">
              {leftIcon && <span className="mr-2">{leftIcon}</span>}
              {children}
              {rightIcon && <span className="ml-2">{rightIcon}</span>}
            </div>
          )}
        </Button>
      </motion.div>
    )
  },
)

OutlineButton.displayName = "OutlineButton"
