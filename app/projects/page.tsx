"use client"

import { useEffect } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { Navbar } from "@/components/navbar"
import { AnimatedSection } from "@/components/animated-section"

export default function ProjectsPage() {
  const searchParams = useSearchParams()

  useEffect(() => {
    // Check if there's a hash in the URL and scroll to that element
    if (typeof window !== "undefined") {
      const hash = window.location.hash
      if (hash) {
        const element = document.getElementById(hash.substring(1))
        if (element) {
          const navbarHeight = 80 // Approximate navbar height
          const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          })
        }
      }
    }
  }, [searchParams])

  return (
    <div className="min-h-screen bg-[#f5f5f5] bg-[linear-gradient(rgba(200,200,200,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(200,200,200,0.4)_1px,transparent_1px)] bg-[size:30px_30px]">
      <Navbar />

      <div className="py-20 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <AnimatedSection animation="slide-in">
            <h1 className="text-4xl font-bold inline-block bg-[#4d7eff] text-white py-2 px-4 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              All Projects
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="fade-in">
            <Link href="/#projects">
              <Button className="bg-white font-bold text-black hover:text-white py-2 px-4 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
              </Button>
            </Link>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Hotel Booking App",
              description: "A smart hotel booking web app that helps users find, compare, and reserve rooms with ease-designed for a smooth and reliable travel experience.",
              tags: ["Next.js", "Stripe", "Tailwind CSS","ShadCn","OpenAi",],
              imageUrl: "https://res.cloudinary.com/dxeycobng/image/upload/v1744876156/Screenshot_2025-04-17_131802_rirhxg.png",
              color: "#4d7eff",
              delay: 200,
              projectLink:"https://hotel-booking-app-frontend-sigma.vercel.app/"
            },
            {
              title: "Paint Plus",
              description: "Paint Plus connects paint dealers with customers, making it easy to buy and sell premium paints and tools in one place.",
              tags: ["React.js", "Tailwind Css", "Redux" , "JavaScript"],
              imageUrl:"https://res.cloudinary.com/dxeycobng/image/upload/v1744876348/Screenshot_2025-04-17_131632_ysed4y.png",
              color: "#ff5757",
              delay: 400,
              projectLink:"https://paint-plus.onrender.com/"
            },
            {
              title: "Shadow Chat",
              description: "Shadow Chat is a web app that lets users send and receive anonymous messages, enabling private and unfiltered conversations.",
              tags: ["Next.js","Tailwind CSS","ShadCn", "Node.js","MongoDB", ],
              imageUrl: "https://res.cloudinary.com/dxeycobng/image/upload/v1744876155/Screenshot_2025-04-17_131701_qniqel.png",
              color: "#ffde59",
              delay: 600,
              projectLink:"https://shdow-chat-box.vercel.app/"
            },
            {
              title: "Code Collab",
              description: "An online coding platform enabling real-time collaborative coding with features like room-based connectivity, CodeMirror editor integration, and live code execution for HTML, CSS, and JavaScript.",
              tags: ["React.js", "Express", "Socket.IO", "JavaScript"],
              imageUrl: "https://res.cloudinary.com/dxeycobng/image/upload/v1749283966/Screenshot_2025-06-07_134126_hnh8pc.png",
              color: "#4CAF50",
              delay: 800,
              projectLink: "https://code-collab-r2h.vercel.app/"
            },
            {
              title: "Job Portal",
              description: "A comprehensive job portal featuring advanced search filters for location, experience, and salary. Users can browse job listings, apply for positions, and track their applications. Built with modern web technologies for a seamless user experience.",
              tags: ["Next.js", "Tailwind CSS", "ShadCn", "JavaScript"],
              imageUrl: "https://res.cloudinary.com/dxeycobng/image/upload/v1749283966/Screenshot_2025-06-07_132503_jmcarg.png",
              color: "#6366F1",
              delay: 1000,
              projectLink: "https://job-portal-tau-sandy.vercel.app/"
            },
            {
              title: "Note-Box",
              description: "A personalized note-taking application that allows users to create, edit, and organize their notes efficiently. Features include real-time saving, categorization, and a clean, intuitive interface for seamless note management.",
              tags: ["React.js", "Node.js", "MongoDB", "CSS"],
              imageUrl: "https://res.cloudinary.com/dxeycobng/image/upload/v1749283967/Screenshot_2025-06-07_133310_xlhhw2.png",
              color: "#FF6B6B",
              delay: 1200,
              projectLink: "https://note-box-app.vercel.app/"
            },
          ].map((project, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={project.delay}>
              <ProjectCard
                title={project.title}
                description={project.description}
                tags={project.tags}
                imageUrl={project.imageUrl}
                color={project.color}
                projectLink={project.projectLink}
              />
            </AnimatedSection>
          ))}

          

        

          

         
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto border-t-[3px] border-black mt-20">
        <div className="text-center">
          <h3 className="text-2xl font-bold">Portfolio</h3>
          <p>© {new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </footer>
    </div>
  )
}
