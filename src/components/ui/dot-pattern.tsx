"use client"

import React, { useMemo } from "react"
import { cn } from "@/lib/utils"

interface DotPatternProps {
  className?: string
  density?: number // 0-100, higher = more characters
  speed?: number // seconds for one loop
  chars?: string[] // characters to use
  size?: "sm" | "md" | "lg" // text size
}

export function DotPattern({
  className,
  density = 8,
  speed = 300,
  chars = [".", "·", "•", "∙","L","e","v","e","l","z"],
  size = "md",
}: DotPatternProps) {
  const pattern = useMemo(() => {
    const rows = 400
    const cols = 400 // Increased for full width coverage
    let result = ""
    
    for (let i = 0; i < rows * 2; i++) {
      for (let j = 0; j < cols; j++) {
        const random = Math.random() * 100
        if (random < density) {
          const char = chars[Math.floor(Math.random() * chars.length)]
          result += char
        } else {
          result += " "
        }
      }
      result += "\n"
    }
    return result
  }, [density, chars])

  const sizeClasses = {
    sm: "text-[4px] leading-[6px]",
    md: "text-[6px] leading-[8px]",
    lg: "text-[8px] leading-[10px]",
  }

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      <pre
        className={cn(
          "absolute font-mono select-none animate-float w-full",
          sizeClasses[size],
          "text-neutral-400/40 dark:text-neutral-500/30"
        )}
        style={{ 
          whiteSpace: "pre",
          animationDuration: `${speed}s`,
          minWidth: "100%"
        }}
      >
        {pattern}
      </pre>
    </div>
  )
}


