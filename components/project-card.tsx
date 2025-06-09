"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { Button } from "@/components/ui/button"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  imageUrl: string
  color?: string
  projectLink?: string
}

export function ProjectCard({ title, description, tags, imageUrl, color = "#4d7eff", projectLink = "/" }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`group relative bg-white border-[3px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 ${isHovered ? "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] translate-x-[4px] translate-y-[4px]" : "animate-float"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="overflow-hidden border-b-[3px] border-black h-[200px]">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          width={400}
          height={300}
          className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? "scale-110" : ""}`}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`inline-block text-sm font-medium py-1 px-3 border-[2px] border-black transition-transform duration-200 ${isHovered ? "translate-y-[-2px]" : ""}`}
              style={{
                backgroundColor: color,
                color: "white",
                transitionDelay: `${index * 50}ms`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        {projectLink && (
          <Link href={projectLink} target="_blank" rel="noopener noreferrer">
            <Button
              className={`w-full bg-white text-black hover:text-white font-bold py-2 px-4 border-[2px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center ${isHovered ? "animate-pulse-shadow" : ""}`}
            >
              View Project{" "}
              <ArrowUpRight
                className={`ml-2 h-4 w-4 transition-transform duration-300 ${isHovered ? "translate-x-1 -translate-y-1" : ""}`}
              />
            </Button>
          </Link>
        )}
      </div>
      <div
        className={`absolute top-0 right-0 bg-black text-white font-bold py-1 px-3 text-sm transition-transform duration-300 ${isHovered ? "scale-110" : ""}`}
      >
        Featured
      </div>
    </div>
  )
}
