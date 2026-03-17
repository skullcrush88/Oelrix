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
        className="md:hidden flex flex-col gap-1.5"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`w-5 h-px bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`w-5 h-px bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
        <span className={`w-5 h-px bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed inset-0 top-20 bg-black/95 backdrop-blur-md z-40 overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col gap-0 p-6 pt-12 h-full items-center justify-start">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => handleClick(item.path)}
              className={`w-full py-4 text-center text-2xl font-semibold uppercase tracking-widest transition-colors duration-300 ${
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
            className="w-full mt-8 py-4 text-center text-2xl font-semibold uppercase tracking-widest text-white hover:text-white transition-colors duration-300"
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
