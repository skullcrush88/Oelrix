"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const fragrances = [
  {
    id: 1,
    name: "NOIR ABSOLU",
    description: "Deep. Mysterious. Unforgettable.",
    notes: "Black Amber • Leather • Musk",
    image: "/images/noxe-noir.jpg",
    price: "€295"
  },
  {
    id: 2,
    name: "OUD IMPERIAL",
    description: "The essence of ancient royalty.",
    notes: "Aged Oud • Saffron • Sandalwood",
    image: "/images/noxe-oud.jpg",
    price: "€385"
  },
  {
    id: 3,
    name: "SANTAL NOIR",
    description: "Whispers of the forbidden.",
    notes: "Black Sandalwood • Iris • Vanilla",
    image: "/images/noxe-santal.jpg",
    price: "€265"
  },
  {
    id: 4,
    name: "ROSE OBSCUR",
    description: "Darkness blooms at midnight.",
    notes: "Bulgarian Rose • Oud • Incense",
    image: "/images/noxe-rose.jpg",
    price: "€325"
  }
]

export function CollectionSection() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = itemRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => [...new Set([...prev, index])])
          }
        },
        { threshold: 0.2 }
      )

      if (ref) {
        observer.observe(ref)
      }

      return observer
    })

    return () => {
      observers.forEach(observer => observer.disconnect())
    }
  }, [])

  return (
    <section 
      ref={sectionRef}
      id="collection"
      className="relative w-full bg-background py-32 md:py-48"
    >
      {/* Header */}
      <div className="px-8 md:px-16 lg:px-24 mb-20 md:mb-32">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <span className="text-xs tracking-ultra-wide text-primary block mb-6">
              THE COLLECTION
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground">
              Signature<br />
              <span className="italic">Fragrances</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
            Each scent is a journey into the unknown—crafted for those who refuse to be ordinary.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="px-8 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {fragrances.map((fragrance, index) => (
            <div
              key={fragrance.id}
              ref={el => { itemRefs.current[index] = el }}
              className={`group cursor-pointer transition-all duration-700 ${
                visibleItems.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-16'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Image container */}
              <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-card">
                <Image
                  src={fragrance.image}
                  alt={fragrance.name}
                  fill
                  className={`object-cover transition-transform duration-700 ${
                    hoveredItem === index ? 'scale-110' : 'scale-100'
                  }`}
                />
                <div className={`absolute inset-0 bg-background/20 transition-opacity duration-500 ${
                  hoveredItem === index ? 'opacity-0' : 'opacity-100'
                }`} />
                
                {/* Hover overlay */}
                <div className={`absolute inset-0 flex items-end justify-center pb-8 transition-all duration-500 ${
                  hoveredItem === index ? 'opacity-100' : 'opacity-0'
                }`}>
                  <span className="text-xs tracking-ultra-wide text-foreground bg-background/90 px-6 py-3 backdrop-blur-sm">
                    DISCOVER
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-lg tracking-wide text-foreground">
                    {fragrance.name}
                  </h3>
                  <span className="text-sm text-primary">
                    {fragrance.price}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground italic">
                  {fragrance.description}
                </p>
                <p className="text-xs tracking-wide text-muted-foreground/60">
                  {fragrance.notes}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* View all link */}
      <div className="flex justify-center mt-20 md:mt-32">
        <a 
          href="#"
          className="text-xs tracking-ultra-wide text-foreground border border-border px-12 py-4 hover:bg-foreground hover:text-background transition-all duration-500"
        >
          VIEW ALL FRAGRANCES
        </a>
      </div>
    </section>
  )
}
