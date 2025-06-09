"use client"

import type React from "react"

import { useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const isHomePage = pathname === "/"

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navigateToSection = (sectionId: string) => {
    setIsMenuOpen(false)

    if (isHomePage) {
      // If we're on the home page, scroll to the section
      const element = document.getElementById(sectionId)
      if (element) {
        const navbarHeight = 80 // Approximate navbar height
        const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight

        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        })
      }
    } else {
      // If we're not on the home page, navigate to the home page with hash
      router.push(`/#${sectionId}`)
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-[#f5f5f5] border-b-[3px] border-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button onClick={() => router.push("/")} className="flex items-center cursor-pointer">
            <div className="bg-[#4d7eff] text-white font-bold py-2 px-4 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform hover:-translate-y-1 transition-transform duration-200">
             RAHUL
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavLink onClick={() => navigateToSection("about")}>About</NavLink>
            <NavLink onClick={() => navigateToSection("experience")}>Experience</NavLink>
            <NavLink onClick={() => navigateToSection("projects")}>Projects</NavLink>
            <NavLink onClick={() => navigateToSection("contact")}>Contact</NavLink>
            <Link href="https://drive.google.com/file/d/1Wjjd0RZzKvbfzpDzj2lvW1m06huiY3D0/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <Button className="ml-4 bg-black text-white font-bold py-2 px-4 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(77,126,255,1)] hover:shadow-[2px_2px_0px_0px_rgba(77,126,255,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
                Resume
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="outline"
            size="icon"
            className="md:hidden border-[2px] border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#f5f5f5] border-b-[3px] border-black">
          <div className="px-4 py-4 space-y-2">
            <MobileNavLink onClick={() => navigateToSection("about")}>About</MobileNavLink>
            <MobileNavLink onClick={() => navigateToSection("experience")}>Experience</MobileNavLink>
            <MobileNavLink onClick={() => navigateToSection("projects")}>Projects</MobileNavLink>
            <MobileNavLink onClick={() => navigateToSection("contact")}>Contact</MobileNavLink>
            <Button className="w-full mt-4 bg-black text-white font-bold py-2 px-4 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(77,126,255,1)] hover:shadow-[2px_2px_0px_0px_rgba(77,126,255,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
              Resume
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

function NavLink({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className="relative font-bold px-4 py-2 hover:bg-[#4d7eff] hover:text-white hover:border-[2px] hover:border-black hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
    >
      {children}
    </button>
  )
}

function MobileNavLink({
  onClick,
  children,
}: {
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      onClick={onClick}
      className="block w-full text-left font-bold px-4 py-3 bg-white border-[2px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
    >
      {children}
    </button>
  )
}
