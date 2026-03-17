"use client"

import { useEffect, useRef, useState } from "react"

export function Footer() {
  const [isVisible, setIsVisible] = useState(false)
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (footerRef.current) {
      observer.observe(footerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <footer 
      ref={footerRef}
      className="relative w-full bg-background border-t border-border"
    >
      {/* Newsletter section */}
      <div className="px-8 md:px-16 lg:px-24 py-20 md:py-32 border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          <span 
            className={`text-xs tracking-ultra-wide text-primary block mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            STAY INFORMED
          </span>
          <h3 
            className={`font-serif text-2xl md:text-3xl text-foreground mb-8 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Join the inner circle
          </h3>
          <p 
            className={`text-sm text-muted-foreground mb-12 max-w-md mx-auto transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Be the first to discover new creations, exclusive releases, and invitations to private events.
          </p>
          <form 
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <input
              type="email"
              placeholder="Your email address"
              className="w-full sm:flex-1 bg-transparent border border-border px-6 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors duration-300"
            />
            <button
              type="submit"
              className="w-full sm:w-auto text-xs tracking-ultra-wide text-foreground border border-foreground px-8 py-4 hover:bg-foreground hover:text-background transition-all duration-500"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      {/* Main footer content */}
      <div className="px-8 md:px-16 lg:px-24 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-4">
            <span className="font-serif text-3xl tracking-luxury text-foreground block mb-6">
              NOXE
            </span>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mb-8">
              Luxury fragrances crafted in Paris. For those who dare to be different.
            </p>
            <div className="flex items-center gap-6">
              {["Instagram", "Pinterest", "YouTube"].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="text-xs tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {social.toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-2">
            <span className="text-xs tracking-ultra-wide text-foreground block mb-6">
              EXPLORE
            </span>
            <nav className="flex flex-col gap-4">
              {["Collection", "The Atelier", "Our Story", "Locations"].map((link) => (
                <a 
                  key={link}
                  href="#" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          <div className="md:col-span-2">
            <span className="text-xs tracking-ultra-wide text-foreground block mb-6">
              SUPPORT
            </span>
            <nav className="flex flex-col gap-4">
              {["Contact", "Shipping", "Returns", "FAQ"].map((link) => (
                <a 
                  key={link}
                  href="#" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          <div className="md:col-span-2">
            <span className="text-xs tracking-ultra-wide text-foreground block mb-6">
              LEGAL
            </span>
            <nav className="flex flex-col gap-4">
              {["Privacy", "Terms", "Cookies"].map((link) => (
                <a 
                  key={link}
                  href="#" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="md:col-span-2">
            <span className="text-xs tracking-ultra-wide text-foreground block mb-6">
              FLAGSHIP
            </span>
            <address className="not-italic text-sm text-muted-foreground leading-relaxed">
              27 Rue du Faubourg<br />
              Saint-HonorÃ©<br />
              75008 Paris, France
            </address>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="px-8 md:px-16 lg:px-24 py-8 border-t border-border">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xs text-muted-foreground">
            Â© 2025 NOXE. All rights reserved.
          </span>
          <span className="text-xs text-muted-foreground/50">
            Crafted with obsession in Paris
          </span>
        </div>
        <p className="mt-4 text-center text-[10px] tracking-[0.2em] uppercase text-muted-foreground/35">
          Designed by Oelrix
        </p>
      </div>
    </footer>
  )
}

