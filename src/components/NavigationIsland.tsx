'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import TransitionLink from './TransitionLink';
import './NavigationIsland.css';

export default function NavigationIsland() {
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);
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

  return (
    <div
      className={`nav-island-container ${scrolled ? 'scrolled' : ''} ${hovered ? 'hovered' : ''}`}
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
      </nav>
    </div>
  );
}
