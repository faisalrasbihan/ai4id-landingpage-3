"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from 'next/image'
import { JetBrains_Mono } from "next/font/google"

const jetBrains = JetBrains_Mono({
  weight: ['700'],  // Bold weight for the title
  subsets: ['latin'],
})

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black bg-opacity-90 shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className={`flex items-center space-x-2 text-2xl font-bold text-white tracking-tight ${jetBrains.className}`}>
          <Image
            src="/logo_putih.png"
            alt="AI4Indonesia Logo"
            width={40}
            height={40}
          />
          <span>AI4Indonesia</span>
        </Link>
        <div className="hidden md:flex space-x-6">
          {["solutions", "portfolio", "team", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-white hover:text-blue-400 transition-colors capitalize"
            >
              {item}
            </button>
          ))}
        </div>
      </nav>
    </header>
  )
}

