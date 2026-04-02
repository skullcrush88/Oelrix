"use client";

import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import MagneticWrapper from './MagneticWrapper';

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

  const handleClick = (path: string, label: string = "We Don't Build Average") => {
    // Trigger sound
    window.dispatchEvent(new Event("playTransitionSound"));

    // Trigger transition animation with label
    window.dispatchEvent(
      new CustomEvent("startTransition", {
        detail: { label },
      })
    );
    
    // Wait for animation before navigating
    setTimeout(() => {
      router.push(path);
      setMobileMenuOpen(false);
    }, 700);
  };

  const navItems = [
    { path: '/', label: 'Home', transitionLabel: "We Don't Build Average" },
    { path: '/about', label: 'About', transitionLabel: 'Who We Are' },
    { path: '/services', label: 'Services', transitionLabel: 'What We Build' },
    { path: '/contact', label: 'Contact', transitionLabel: "Let's Build Something" },
  ];

  if (pathname?.startsWith('/project/')) {
    return null;
  }

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-start md:justify-between px-8 md:px-16 py-1.5 transition-all duration-500 ${
          scrolled ? 'backdrop-blur-md bg-black/60 border-b border-white/5' : ''
        }`}
      >
        {/* Logo - far left */}
        <div 
          className="flex items-center gap-0 cursor-pointer" 
          onClick={() => handleClick('/', "We Don't Build Average")}
        >
          <div className="relative w-20 h-20 opacity-80 hover:opacity-100 transition-opacity">
            <Image 
              src="/newlogo.png" 
              alt="Oelrix Logo" 
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="text-xl font-light tracking-wider text-white" style={{ marginLeft: '-1rem' }}>
            oelrix
          </span>
        </div>

        {/* Navigation links - perfectly centered */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-12">
          {navItems.map((item) => (
            <MagneticWrapper key={item.path}>
              <button
                onClick={() => handleClick(item.path, item.transitionLabel)}
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
            </MagneticWrapper>
          ))}
        </div>

        {/* CTA - far right */}
        <div className="hidden md:block">
          <MagneticWrapper>
            <button
              onClick={() => handleClick('/contact', "Let's Build Something")}
              className="text-xs uppercase tracking-widest text-white/70 hover:text-white transition-colors duration-300 cursor-pointer"
            >
              Get Started →
            </button>
          </MagneticWrapper>
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
              <MagneticWrapper key={item.path}>
                <button
                  onClick={() => handleClick(item.path, item.transitionLabel)}
                  className={`w-full py-5 text-center text-lg font-semibold uppercase tracking-widest border-b border-white/5 ${
                    pathname === item.path
                      ? 'text-white'
                      : 'text-white/50 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              </MagneticWrapper>
            ))}
            <MagneticWrapper>
              <button
                onClick={() => handleClick('/contact', "Let's Build Something")}
                className="w-full mt-6 py-5 text-center text-lg font-semibold uppercase tracking-widest text-white"
              >
                Get Started
              </button>
            </MagneticWrapper>
          </div>
        </div>
      )}
    </>
  );
}
