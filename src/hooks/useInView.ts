import { useEffect, useRef, useState } from 'react'

export function useInView(options = {}) {
  const ref = useRef<HTMLElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
        observer.unobserve(el)
      }
    }, { threshold: 0.05, rootMargin: '0px 0px -5% 0px', ...options })
    const timer = setTimeout(() => observer.observe(el), 150)
    return () => { clearTimeout(timer); observer.disconnect() }
  }, [])

  return { ref, inView }
}
