"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface BentoGridProps {
  className?: string
  children?: React.ReactNode
}

export function BentoGrid({ className, children }: BentoGridProps) {
  return <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-4", className)}>{children}</div>
}

interface BentoGridItemProps {
  className?: string
  title?: string
  description?: string
  icon?: React.ReactNode
  children?: React.ReactNode
}

BentoGrid.Item = function BentoGridItem({ className, title, description, icon, children }: BentoGridItemProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={cn("row-span-1 rounded-xl p-4 glassmorphic-card group/bento", className)}
    >
      {children ? (
        children
      ) : (
        <div className="flex flex-col gap-2 h-full">
          <div className="flex items-center gap-2">
            {icon && <div className="p-2 w-fit rounded-md bg-muted/50">{icon}</div>}
            {title && <h3 className="font-medium tracking-tight text-lg">{title}</h3>}
          </div>
          {description && <p className="text-sm text-muted-foreground opacity-70">{description}</p>}
        </div>
      )}
    </motion.div>
  )
}
