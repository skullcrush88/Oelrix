"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setIsLoaded(true)
    
    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        if (rect.bottom > 0) {
          setScrollY(window.scrollY)
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section 
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden bg-background"
    >
      {/* Background with parallax */}
      <div 
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background z-10" />
        <Image
          src="/images/noxe-hero.jpg"
          alt="NOXE Signature Fragrance"
          fill
          className="object-cover object-center opacity-60"
          priority
        />
      </div>

      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between px-8 py-8 md:px-16 lg:px-24">
        <span className="font-serif text-2xl tracking-luxury text-foreground">
          NOXE
        </span>
        <div className="hidden md:flex items-center gap-12">
          <a href="#collection" className="text-xs tracking-ultra-wide text-muted-foreground hover:text-foreground transition-colors duration-500">
            COLLECTION
          </a>
          <a href="#story" className="text-xs tracking-ultra-wide text-muted-foreground hover:text-foreground transition-colors duration-500">
            STORY
          </a>
          <a href="#philosophy" className="text-xs tracking-ultra-wide text-muted-foreground hover:text-foreground transition-colors duration-500">
            PHILOSOPHY
          </a>
        </div>
        <button className="text-xs tracking-ultra-wide text-foreground border border-border px-6 py-3 hover:bg-foreground hover:text-background transition-all duration-500">
          DISCOVER
        </button>
      </nav>

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-[calc(100vh-120px)] px-8">
        <div 
          className={`text-center transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="text-xs tracking-ultra-wide text-primary mb-8 md:mb-12">
            THE ART OF SCENT
          </p>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-light tracking-tight text-foreground mb-6">
            <span className="block text-balance">Creation Without</span>
            <span className="block text-balance italic">Limitation</span>
          </h1>
          <p className="text-sm md:text-base text-muted-foreground max-w-md mx-auto tracking-wide leading-relaxed mt-8">
            Experience the essence of darkness. Crafted for those who dare to stand apart.
          </p>
        </div>
      </div>
    </section>
  )
}
