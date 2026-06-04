'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
        <Link href="/" className="nav-brand">
          <img src="/newlogo.png" alt="Oelrix logo" className="nav-logo" />
        </Link>

        {/* Dynamic Links Menu */}
        <ul className="nav-links-list">
          <li className="nav-link-item">
            <Link 
              href="/about" 
              className={pathname === '/about' ? 'active' : ''}
            >
              About Us
            </Link>
          </li>
          <li className="nav-link-item">
            <Link 
              href="/services" 
              className={pathname === '/services' ? 'active' : ''}
            >
              Services
            </Link>
          </li>
        </ul>

        {/* CTA booking button */}
        <Link href="/contact" className="nav-action-btn">
          Let's work
        </Link>
      </nav>
    </div>
  );
}
