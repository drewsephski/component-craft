"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface ImageCardProps {
  imageSrc: string
  imageAlt: string
  title: string
  description: string
  tags?: string[]
  className?: string
  variant?: "default" | "hover-zoom" | "hover-lift" | "hover-reveal"
  aspectRatio?: "square" | "video" | "wide"
  imagePosition?: "top" | "bottom" | "left" | "right"
  onClick?: () => void
}

export function ImageCard({
  imageSrc,
  imageAlt,
  title,
  description,
  tags,
  className,
  variant = "default",
  aspectRatio = "video",
  imagePosition = "top",
  onClick,
}: ImageCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const isHorizontal = imagePosition === "left" || imagePosition === "right"

  const aspectRatioClasses = {
    square: "aspect-square",
    video: "aspect-video",
    wide: "aspect-[21/9]",
  }

  const variants = {
    default: {},
    "hover-zoom": {
      image: {
        scale: isHovered ? 1.05 : 1,
        transition: { duration: 0.3 },
      },
    },
    "hover-lift": {
      card: {
        y: isHovered ? -8 : 0,
        transition: { duration: 0.3 },
      },
    },
    "hover-reveal": {
      overlay: {
        opacity: isHovered ? 1 : 0,
        transition: { duration: 0.3 },
      },
    },
  }

  return (
    <motion.div
      className={cn(
        "group overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-all duration-300",
        isHorizontal ? "grid grid-cols-2 gap-4" : "flex flex-col",
        variant === "hover-lift" && "hover:shadow-lg",
        className,
      )}
      variants={variants["hover-lift"]}
      animate="card"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div
        className={cn(
          "relative overflow-hidden",
          !isHorizontal && aspectRatioClasses[aspectRatio],
          isHorizontal && "h-full",
          imagePosition === "right" && "order-last",
          imagePosition === "bottom" && "order-last",
        )}
      >
        <motion.div className="h-full w-full" variants={variants["hover-zoom"]} animate="image">
          <Image src={imageSrc || "/placeholder.svg"} alt={imageAlt} fill className="object-cover" />
        </motion.div>

        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4"
          variants={variants["hover-reveal"]}
          animate="overlay"
          initial={{ opacity: variant === "hover-reveal" ? 0 : 1 }}
        >
          {tags && variant === "hover-reveal" && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, i) => (
                <Badge key={i} variant="secondary" className="bg-primary/20 text-primary-foreground">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </motion.div>
      </div>

      <div className={cn("flex flex-col", isHorizontal ? "justify-center p-6" : "p-6")}>
        {tags && variant !== "hover-reveal" && (
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag, i) => (
              <Badge key={i} variant="secondary" className="bg-primary/20 text-primary-foreground">
                {tag}
              </Badge>
            ))}
          </div>
        )}

        <h3 className="text-xl font-semibold tracking-tight mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>

        <p className="text-muted-foreground mb-4 line-clamp-3">{description}</p>

        <div className="mt-auto">
          <Button variant="ghost" className="p-0 h-auto font-medium text-primary group/btn">
            Read more
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
