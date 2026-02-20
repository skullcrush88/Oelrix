"use client";

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function RouteLoader() {
  const pathname = usePathname();
  const [isChanging, setIsChanging] = useState(false);

  useEffect(() => {
    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'instant' });
    
    setIsChanging(true);
    const timer = setTimeout(() => {
      setIsChanging(false);
    }, 200);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div
      className={`fixed inset-0 bg-black pointer-events-none z-[9999] transition-opacity duration-200 ${
        isChanging ? 'opacity-10' : 'opacity-0'
      }`}
    />
  );
}
