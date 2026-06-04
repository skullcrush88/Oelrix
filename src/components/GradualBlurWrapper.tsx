'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import GradualBlur from './GradualBlur';

export default function GradualBlurWrapper() {
  const pathname = usePathname();

  // Render on all pages except the home page
  if (pathname === '/') return null;

  return (
    <GradualBlur
      target="page"
      position="bottom"
      height="7rem"
      strength={3}
      divCount={6}
      curve="bezier"
      exponential={true}
      opacity={0.95}
      zIndex={50} // Below NavigationIsland (100) but above page content
    />
  );
}
