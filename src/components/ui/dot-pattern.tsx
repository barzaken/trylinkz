// "use client"

// import  { useMemo } from "react"
// import { cn } from "@/lib/utils"

// interface DotPatternProps {
//   className?: string
//   density?: number // 0-100, higher = more characters
//   speed?: number // seconds for one loop
//   chars?: string[] // characters to use
//   size?: "sm" | "md" | "lg" // text size
// }

// export function DotPattern({
//   className,
//   density = 8,
//   speed = 300,
//   chars = [".", "·", "•", "∙","L","e","v","e","l","z"],
//   size = "md",
// }: DotPatternProps) {


//   const pattern = useMemo(() => {
//     const rows = 400
//     const cols = 400 // Increased for full width coverage
//     let result = ""
    
//     for (let i = 0; i < rows * 2; i++) {
//       for (let j = 0; j < cols; j++) {
//         const random = Math.random() * 100
//         if (random < density) {
//           const char = chars[Math.floor(Math.random() * chars.length)]
//           result += char
//         } else {
//           result += " "
//         }
//       }
//       result += "\n"
//     }
//     return result
//   }, [density, chars])

//   const sizeClasses = {
//     sm: "text-[4px] leading-[6px]",
//     md: "text-[6px] leading-[8px]",
//     lg: "text-[8px] leading-[10px]",
//   }

//   return (
//     <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
//       <pre
//         className={cn(
//           "absolute font-mono select-none animate-float w-full",
//           sizeClasses[size],
//           "text-neutral-400/40 dark:text-neutral-500/30"
//         )}
//         style={{ 
//           whiteSpace: "pre",
//           animationDuration: `${speed}s`,
//           minWidth: "100%"
//         }}
//       >
//         {pattern}
//       </pre>
//     </div>
//   )
// }


// "use client"

// import { useState, useEffect } from "react"
// import { cn } from "@/lib/utils"

// interface DotPatternProps {
//   className?: string
//   density?: number
//   speed?: number
//   chars?: string[]
//   size?: "sm" | "md" | "lg"
// }

// export function DotPattern({
//   className,
//   density = 8,
//   speed = 300,
//   chars = [".", "·", "•", "∙", "L", "e", "v", "e", "l", "z"],
//   size = "md",
// }: DotPatternProps) {
//   const [pattern, setPattern] = useState("")

//   useEffect(() => {
//     // run once after mount, or when density changes
//     const rows = 400
//     const cols = 400
//     let result = ""

//     for (let i = 0; i < rows * 2; i++) {
//       for (let j = 0; j < cols; j++) {
//         if (Math.random() * 100 < density) {
//           result += chars[Math.floor(Math.random() * chars.length)]
//         } else {
//           result += " "
//         }
//       }
//       result += "\n"
//     }

//     setPattern(result)
//   }, [
//     density,
//     // ⚠️ DO NOT include chars — it breaks the effect
//   ])

//   const sizeClasses = {
//     sm: "text-[4px] leading-[6px]",
//     md: "text-[6px] leading-[8px]",
//     lg: "text-[8px] leading-[10px]",
//   }

//   return (
//     <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
//       <pre
//         className={cn(
//           "absolute font-mono select-none animate-float w-full",
//           sizeClasses[size],
//           "text-neutral-400/40 dark:text-neutral-500/30"
//         )}
//         style={{
//           whiteSpace: "pre",
//           animationDuration: `${speed}s`,
//           minWidth: "100%",
//         }}
//       >
//         {pattern}
//       </pre>
//     </div>
//   )
// }



"use client"

import { useState, useEffect, useRef } from "react"

interface DotPatternProps {
  className?: string
  density?: number
  speed?: number
  chars?: string[]
  size?: "sm" | "md" | "lg"
}

export function DotPattern({
  className = "",
  density = 8,
  speed = 300,
  chars = [".", "·", "•", "∙", "L", "e", "v", "e", "l", "z"],
  size = "md",
}: DotPatternProps) {
  const [pattern, setPattern] = useState("")
  const preRef = useRef<HTMLPreElement>(null)
  const rafRef = useRef<number | undefined>(undefined)
  const startTimeRef = useRef<number | undefined>(undefined)


  useEffect(() => {
    const rows = 400
    const cols = 400
    let result = ""

    for (let i = 0; i < rows * 2; i++) {
      for (let j = 0; j < cols; j++) {
        if (Math.random() * 100 < density) {
          result += chars[Math.floor(Math.random() * chars.length)]
        } else {
          result += " "
        }
      }
      result += "\n"
    }

    setPattern(result)
  }, [density])

  // Use JavaScript animation for better mobile support
  useEffect(() => {
    const el = preRef.current
    if (!el) return

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp
      const elapsed = timestamp - startTimeRef.current
      
      // Calculate position based on speed (convert speed in seconds to ms)
      const cycle = speed * 1000
      const progress = (elapsed % cycle) / cycle
      const yOffset = -50 * progress // Move from 0% to -50%
      
      el.style.transform = `translateY(${yOffset}%)`
      
      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [speed])

  const sizeClasses = {
    sm: "text-[4px] leading-[6px]",
    md: "text-[6px] leading-[8px]",
    lg: "text-[8px] leading-[10px]",
  }

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <pre
        ref={preRef}
        className={`absolute font-mono select-none w-full ${sizeClasses[size]} text-neutral-400/40 dark:text-neutral-500/30`}
        style={{
          whiteSpace: "pre",
          minWidth: "100%",
          willChange: "transform",
        }}
      >
        {pattern}
      </pre>
    </div>
  )
}