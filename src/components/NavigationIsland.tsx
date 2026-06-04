'use client';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import TransitionLink from './TransitionLink';
import { Menu, X } from 'lucide-react';
import './NavigationIsland.css';

export default function NavigationIsland() {
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 1. Check if scrolled past threshold
      if (currentScrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page transition
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <div
      className={`nav-island-container ${scrolled ? 'scrolled' : ''} ${hovered ? 'hovered' : ''} ${mobileOpen ? 'mobile-open' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <nav className="nav-island-inner">
        {/* Brand Logo */}
        <TransitionLink href="/" label="We Don't Build Average" className="nav-brand">
          <img src="/newlogo.png" alt="Oelrix logo" className="nav-logo" />
        </TransitionLink>

        {/* Dynamic Links Menu */}
        <ul className="nav-links-list">
          <li className="nav-link-item">
            <TransitionLink 
              href="/about" 
              label="Who We Are"
              className={pathname === '/about' ? 'active' : ''}
            >
              About Us
            </TransitionLink>
          </li>
          <li className="nav-link-item">
            <TransitionLink 
              href="/services" 
              label="What We Build"
              className={pathname === '/services' ? 'active' : ''}
            >
              Services
            </TransitionLink>
          </li>
        </ul>

        {/* CTA booking button */}
        <TransitionLink href="/contact" label="Let's Build Something" className="nav-action-btn">
          Let's work
        </TransitionLink>

        {/* Mobile Hamburger Toggle */}
        <button 
          className="nav-mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
    </div>
  );
}
