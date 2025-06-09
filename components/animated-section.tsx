"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface AnimatedSectionProps {
  children: React.ReactNode
  id?: string
  className?: string
  animation?: "fade-up" | "fade-in" | "slide-in" | "scale-up"
  delay?: number
}

export function AnimatedSection({
  children,
  id,
  className = "",
  animation = "fade-up",
  delay = 0,
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const getAnimationClass = () => {
    if (!isVisible) return "opacity-0"

    switch (animation) {
      case "fade-up":
        return "animate-fade-up"
      case "fade-in":
        return "animate-fade-in"
      case "slide-in":
        return "animate-slide-in"
      case "scale-up":
        return "animate-scale-up"
      default:
        return "animate-fade-in"
    }
  }

  return (
    <div
      id={id}
      ref={sectionRef}
      className={`${className} ${getAnimationClass()}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
