"use client"

import { useState } from "react"

interface SkillBadgeProps {
  name: string
  color: string
}

export function SkillBadge({ name, color }: SkillBadgeProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`inline-block font-bold py-2 px-4 border-[2px] border-black transition-all duration-200 ${
        isHovered
          ? "shadow-none translate-x-[2px] translate-y-[2px] animate-shake"
          : "shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
      } cursor-default`}
      style={{ backgroundColor: color, color: isLightColor(color) ? "black" : "white" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {name}
    </div>
  )
}

// Helper function to determine if a color is light or dark
function isLightColor(color: string): boolean {
  // Convert hex to RGB
  let r = 0,
    g = 0,
    b = 0

  if (color.startsWith("#")) {
    color = color.slice(1)

    if (color.length === 3) {
      r = Number.parseInt(color[0] + color[0], 16)
      g = Number.parseInt(color[1] + color[1], 16)
      b = Number.parseInt(color[2] + color[2], 16)
    } else if (color.length === 6) {
      r = Number.parseInt(color.slice(0, 2), 16)
      g = Number.parseInt(color.slice(2, 4), 16)
      b = Number.parseInt(color.slice(4, 6), 16)
    }
  }

  // Calculate brightness (using YIQ formula)
  const brightness = (r * 299 + g * 587 + b * 114) / 1000

  // Return true if the color is light
  return brightness > 128
}
