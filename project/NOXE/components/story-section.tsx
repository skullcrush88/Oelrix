"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function StorySection() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const sectionHeight = sectionRef.current.offsetHeight
        const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (sectionHeight + window.innerHeight)))
        setScrollProgress(progress)
      }
    }

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <section 
      ref={sectionRef}
      id="story"
      className="relative min-h-screen w-full bg-background overflow-hidden"
    >
      {/* Full screen image with parallax */}
      <div 
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${scrollProgress * -50}px)` }}
      >
        <Image
          src="/images/noxe-story.jpg"
          alt="The NOXE Atelier"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center min-h-screen px-8 md:px-16 lg:px-24 py-24">
        <div className="max-w-2xl">
          <div 
            className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          >
            <span className="text-xs tracking-ultra-wide text-primary block mb-8">
              THE ATELIER
            </span>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-foreground mb-8 leading-tight">
              <span className="block">Born from</span>
              <span className="block italic text-primary">Obsession</span>
            </h2>
          </div>
          
          <div 
            className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          >
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg">
              In the shadows of our atelier, master perfumers spend years perfecting a single note. 
              Each NOXE fragrance is an obsessive pursuit of olfactory perfection—where tradition 
              meets the uncharted.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-12 max-w-lg">
              We source the rarest ingredients from the world&apos;s most remote corners: Bulgarian rose 
              harvested at dawn, aged oud from ancient trees, and essences that exist nowhere else.
            </p>
            <a 
              href="#philosophy"
              className="inline-flex items-center gap-4 text-xs tracking-ultra-wide text-foreground group"
            >
              <span className="border-b border-foreground pb-1 group-hover:border-primary group-hover:text-primary transition-colors duration-500">
                EXPLORE OUR CRAFT
              </span>
              <svg 
                className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Side text */}
      <div className="hidden lg:block absolute right-24 top-1/2 z-10 -translate-y-1/2">
        <span 
          className="text-xs tracking-ultra-wide text-muted-foreground/30 block"
          style={{ writingMode: 'vertical-rl' }}
        >
          SINCE MMXV — PARIS — NOXE
        </span>
      </div>
    </section>
  )
}
