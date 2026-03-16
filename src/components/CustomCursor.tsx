'use client';

import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const [isMobile, setIsMobile] = useState(true);
  const dotRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const circleLagPos = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef<number | null>(null);
  const isFirstMove = useRef(true);

  useEffect(() => {
    // Check if device is mobile/touch
    const checkMobile = () => {
      const isMobileDevice = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth < 768;
      setIsMobile(isMobileDevice);
      return isMobileDevice;
    };

    const isMobileDevice = checkMobile();
    if (isMobileDevice) {
      return; // Skip custom cursor on mobile, use native cursor
    }

    // Hide default cursor
    document.body.style.cursor = 'none';

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      // Update small dot with no delay
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX - 3}px`;
        dotRef.current.style.top = `${e.clientY - 3}px`;
      }

      // Initialize circle position on first move
      if (isFirstMove.current) {
        circleLagPos.current = { x: e.clientX, y: e.clientY };
        isFirstMove.current = false;
      }
    };

    const isClickableOrImage = (element: HTMLElement): 'clickable' | 'image' | null => {
      if (element.tagName === 'A' || element.tagName === 'BUTTON') return 'clickable';
      if (element.tagName === 'IMG') return 'image';
      return null;
    };

    const updateCursorState = (type: 'clickable' | 'image' | null) => {
      if (!circleRef.current || !dotRef.current) return;

      switch (type) {
        case 'clickable':
          dotRef.current.style.opacity = '0';
          circleRef.current.style.width = '60px';
          circleRef.current.style.height = '60px';
          circleRef.current.style.opacity = '0.8';
          circleRef.current.style.backgroundColor = 'transparent';
          circleRef.current.style.borderColor = 'rgba(255, 255, 255, 0.8)';
          circleRef.current.innerHTML = '';
          break;

        case 'image':
          dotRef.current.style.opacity = '0';
          circleRef.current.style.width = '40px';
          circleRef.current.style.height = '40px';
          circleRef.current.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
          circleRef.current.style.borderColor = 'transparent';
          circleRef.current.style.opacity = '1';
          circleRef.current.innerHTML = '<span style="font-size: 8px; font-weight: bold; letter-spacing: 0.1em; color: white;">VIEW</span>';
          break;

        default:
          dotRef.current.style.opacity = '1';
          circleRef.current.style.width = '40px';
          circleRef.current.style.height = '40px';
          circleRef.current.style.backgroundColor = 'transparent';
          circleRef.current.style.borderColor = 'rgba(255, 255, 255, 0.4)';
          circleRef.current.style.opacity = '0.4';
          circleRef.current.innerHTML = '';
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const type = isClickableOrImage(target);
      if (type) {
        updateCursorState(type);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isClickableOrImage(target)) {
        updateCursorState(null);
      }
    };

    // Animation loop for smooth circle lag
    const animate = () => {
      const speed = 0.08;
      circleLagPos.current.x += (mousePos.current.x - circleLagPos.current.x) * speed;
      circleLagPos.current.y += (mousePos.current.y - circleLagPos.current.y) * speed;

      if (circleRef.current) {
        circleRef.current.style.left = `${circleLagPos.current.x - 20}px`;
        circleRef.current.style.top = `${circleLagPos.current.y - 20}px`;
      }

      animationFrameId.current = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver, true);
    document.addEventListener('mouseout', handleMouseOut, true);
    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver, true);
      document.removeEventListener('mouseout', handleMouseOut, true);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      document.body.style.cursor = 'auto';
    };
  }, []);

  return isMobile ? null : (
    <>
      {/* Small dot */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          width: '6px',
          height: '6px',
          backgroundColor: 'white',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          left: '-3px',
          top: '-3px',
          opacity: 1,
          transition: 'opacity 0.15s ease-out',
          boxShadow: '0 0 8px rgba(255, 255, 255, 0.6)',
        }}
      />
      {/* Large circle */}
      <div
        ref={circleRef}
        style={{
          position: 'fixed',
          width: '40px',
          height: '40px',
          border: '1px solid rgba(255, 255, 255, 0.4)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          left: '-20px',
          top: '-20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: 0.4,
          transition: 'width 0.2s ease-out, height 0.2s ease-out, opacity 0.15s ease-out, border-color 0.15s ease-out, background-color 0.15s ease-out',
          fontSize: '0px',
          fontWeight: 'bold',
          letterSpacing: '0.1em',
          color: 'white',
        }}
      />
    </>
  );
}
