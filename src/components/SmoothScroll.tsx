'use client';

import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

interface SmoothScrollProps {
  children: React.ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const lenisRef = useRef<Lenis | null>(null);
  const animationFrameIdRef = useRef<number | null>(null);

  useEffect(() => {
    // Disable Lenis on mobile devices with device detection + viewport check
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth < 768;
    if (isMobile) {
      return; // skip Lenis on mobile, use native scroll
    }

    // Initialize Lenis with custom settings
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    // Animation loop with requestAnimationFrame
    const animate = (time: number) => {
      lenis.raf(time);
      animationFrameIdRef.current = requestAnimationFrame(animate);
    };

    animationFrameIdRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
