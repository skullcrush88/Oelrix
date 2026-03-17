"use client"

import { useEffect, useRef, useState } from "react"

export function PhilosophySection() {
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
      { threshold: 0.1 }
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
      id="philosophy"
      className="relative min-h-screen w-full bg-card overflow-hidden"
    >
      {/* Background subtle pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, var(--primary) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          transform: `translateY(${scrollProgress * -20}px)`
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 md:px-16 lg:px-24 py-32">
        <div className="max-w-5xl text-center">
          <span 
            className={`text-xs tracking-ultra-wide text-primary block mb-12 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            OUR PHILOSOPHY
          </span>
          
          <h2 
            className={`font-serif text-3xl md:text-5xl lg:text-7xl font-light text-foreground leading-tight mb-16 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="block text-balance">
              &ldquo;We do not create fragrances
            </span>
            <span className="block text-balance italic text-primary">
              for everyone.
            </span>
            <span className="block text-balance">
              We create for those who understand
            </span>
            <span className="block text-balance">
              that true luxury is
            </span>
            <span className="block text-balance italic text-primary">
              invisible.&rdquo;
            </span>
          </h2>

          <div 
            className={`flex flex-col items-center gap-4 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-primary to-transparent" />
            <span className="text-xs tracking-ultra-wide text-muted-foreground">
              ALEXANDRE NOXE
            </span>
            <span className="text-xs text-muted-foreground/60">
              Founder & Master Perfumer
            </span>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute left-8 md:left-16 lg:left-24 top-1/2 -translate-y-1/2 hidden md:block">
          <div 
            className={`flex flex-col gap-8 transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="w-px h-32 bg-gradient-to-b from-primary/50 to-transparent" />
            <span className="text-[10px] tracking-ultra-wide text-muted-foreground/30 -rotate-90 origin-center whitespace-nowrap">
              MMXV
            </span>
          </div>
        </div>

        <div className="absolute right-8 md:right-16 lg:right-24 top-1/2 -translate-y-1/2 hidden md:block">
          <div 
            className={`flex flex-col gap-8 transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="w-px h-32 bg-gradient-to-b from-transparent to-primary/50" />
            <span className="text-[10px] tracking-ultra-wide text-muted-foreground/30 rotate-90 origin-center whitespace-nowrap">
              PARIS
            </span>
          </div>
        </div>
      </div>

      {/* Bottom stats */}
      <div className="relative z-10 border-t border-border">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {[
            { value: "47", label: "RARE INGREDIENTS" },
            { value: "12", label: "MASTER PERFUMERS" },
            { value: "9", label: "YEARS OF CRAFT" },
            { value: "1", label: "VISION" },
          ].map((stat, index) => (
            <div 
              key={stat.label}
              className={`p-8 md:p-12 text-center border-r border-b md:border-b-0 border-border last:border-r-0 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${800 + index * 100}ms` }}
            >
              <span className="font-serif text-3xl md:text-4xl text-primary block mb-2">
                {stat.value}
              </span>
              <span className="text-[10px] tracking-ultra-wide text-muted-foreground">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
