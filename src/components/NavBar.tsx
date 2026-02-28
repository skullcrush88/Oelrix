"use client";

import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';

export default function NavBar() {
  const router = useRouter();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const isHomePage = pathname === '/';
  const navClass = isHomePage 
    ? "fixed top-0 left-0 right-0 z-[999] bg-black backdrop-blur-md border-b border-white/10"
    : "fixed top-0 left-0 right-0 z-[999] bg-black/5 backdrop-blur-md border-b border-white/10";

  return (
    <nav className={navClass}>
      <div className="mx-auto max-w-6xl px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <div 
            className="flex items-center gap-2.5 cursor-pointer group" 
            onClick={() => handleClick('/')}
          >
            <div className="relative h-8 w-8 transition-transform duration-300 group-hover:scale-110">
              <Image 
                src="/favicon.png" 
                alt="Oelrix Logo" 
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-lg font-semibold tracking-tight text-white">
              Oelrix
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleClick(item.path)}
                className={`relative px-3.5 py-1.5 text-[13px] font-medium transition-all duration-300 rounded-md cursor-pointer ${
                  pathname === item.path
                    ? 'text-white bg-white/10 shadow-lg shadow-white/5'
                    : 'text-white/70 hover:text-white hover:bg-white/5 hover:scale-105 hover:shadow-md hover:shadow-white/5 active:scale-95 active:bg-white/10'
                }`}
              >
                {item.label}
                {pathname === item.path && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-white rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => handleClick('/contact')}
              className="px-4 py-1.5 text-[13px] font-semibold text-white bg-white/10 border border-white/20 rounded-md transition-all duration-300 cursor-pointer hover:bg-white/15 hover:border-white/30 hover:scale-[1.05] hover:shadow-lg hover:shadow-white/10 active:scale-95 active:shadow-sm"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white/80 hover:text-white hover:bg-white/5 rounded-md transition-all cursor-pointer hover:scale-110 active:scale-95"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${mobileMenuOpen ? 'rotate-90' : ''}`}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            mobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-2 pb-2">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleClick(item.path)}
                className={`px-4 py-3 text-left text-sm font-medium rounded-md transition-all cursor-pointer ${
                  pathname === item.path
                    ? 'text-white bg-white/10 shadow-lg shadow-white/5'
                    : 'text-white/70 hover:text-white hover:bg-white/5 hover:translate-x-1 active:scale-95 active:bg-white/10'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleClick('/contact')}
              className="mt-2 px-4 py-3 text-sm font-semibold text-white bg-white/10 border border-white/20 rounded-md hover:bg-white/15 transition-all cursor-pointer hover:scale-[1.02] hover:shadow-lg hover:shadow-white/10 active:scale-95"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}