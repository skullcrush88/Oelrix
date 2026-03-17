"use client";

import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function NavBar() {
  const router = useRouter();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
    }

    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleClick = (path: string) => {
    router.push(path);
    setMobileMenuOpen(false);
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' },
  ];

  if (pathname?.startsWith('/project/')) {
    return null;
  }

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-6 transition-all duration-500 ${
          scrolled ? 'backdrop-blur-md bg-black/60 border-b border-white/5' : ''
        }`}
      >
        {/* Logo - far left */}
        <div 
          className="flex items-center gap-2.5 cursor-pointer" 
          onClick={() => handleClick('/')}
        >
          <div className="relative w-8 h-8 opacity-80">
            <Image 
              src="/favicon.png" 
              alt="Oelrix Logo" 
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="text-lg font-bold tracking-widest text-white uppercase">
            OELRIX
          </span>
        </div>

        {/* Navigation links - perfectly centered */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-12">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => handleClick(item.path)}
              className={`relative text-xs uppercase tracking-widest transition-colors duration-300 ${
                pathname === item.path
                  ? 'text-white'
                  : 'text-white/50 hover:text-white'
              }`}
            >
              {item.label}
              {pathname === item.path && (
                <span className="absolute -bottom-1 left-0 w-full h-px bg-white" />
              )}
            </button>
          ))}
        </div>

        {/* CTA - far right */}
        <div className="hidden md:block">
          <button
            onClick={() => handleClick('/contact')}
            className="text-xs uppercase tracking-widest text-white/70 hover:text-white transition-colors duration-300 cursor-pointer"
          >
            Get Started →
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 z-50 relative"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          style={{ cursor: 'pointer' }}
        >
          <span className={`w-5 h-px bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-5 h-px bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-5 h-px bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile Menu - Separate from nav */}
      {mobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/95 backdrop-blur-md z-[999]"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div 
            className="flex flex-col pt-24 px-6 h-full overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-6 right-8 z-50 flex flex-col gap-1.5"
              aria-label="Close menu"
            >
              <span className="w-5 h-px bg-white rotate-45 translate-y-2" />
              <span className="opacity-0" />
              <span className="w-5 h-px bg-white -rotate-45 -translate-y-2" />
            </button>

            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleClick(item.path)}
                className={`w-full py-5 text-center text-lg font-semibold uppercase tracking-widest border-b border-white/5 ${
                  pathname === item.path
                    ? 'text-white'
                    : 'text-white/50 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleClick('/contact')}
              className="w-full mt-6 py-5 text-center text-lg font-semibold uppercase tracking-widest text-white"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </>
  );
}
