"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#080808] border-t border-white/10 px-8 md:px-16 lg:px-24">
      {/* Top Block - Massive OELRIX Wordmark */}
      <div className="pt-24 pb-16 border-b border-white/10">
        <h1 className="text-[12vw] tracking-tighter text-white leading-none" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>OELRIX</h1>
      </div>

      {/* Middle Block */}
      <div className="py-12 flex flex-col md:flex-row justify-between items-start gap-12 md:gap-0">
        {/* Left Side - Description */}
        <div className="w-full md:flex-1">
          <p className="text-sm text-white/30 max-w-xs">Web design studio</p>
        </div>

        {/* Right Side - Three Columns */}
        <div className="w-full md:flex-1 flex flex-col sm:flex-row gap-8 sm:gap-16 justify-start md:justify-end">
          {/* Column 1: Navigation */}
          <div>
            <p className="text-xs tracking-widest text-white/20 mb-4 uppercase">Navigation</p>
            <nav className="space-y-2">
              <Link href="/" className="text-sm text-white/40 hover:text-white transition-colors duration-200 block">Home</Link>
              <Link href="/about" className="text-sm text-white/40 hover:text-white transition-colors duration-200 block">About</Link>
              <Link href="/services" className="text-sm text-white/40 hover:text-white transition-colors duration-200 block">Services</Link>
              <Link href="/contact" className="text-sm text-white/40 hover:text-white transition-colors duration-200 block">Contact</Link>
            </nav>
          </div>

          {/* Column 2: Contact */}
          <div>
            <p className="text-xs tracking-widest text-white/20 mb-4 uppercase">Contact</p>
            <a href="mailto:contact@oelrix.tech" className="text-sm text-white/40 hover:text-white transition-colors duration-200 block">contact@oelrix.tech</a>
          </div>

          {/* Column 3: Follow */}
          <div>
            <p className="text-xs tracking-widest text-white/20 mb-4 uppercase">Follow</p>
            <div className="space-y-2">
              <a href="#" className="text-sm text-white/40 hover:text-white transition-colors duration-200 block">LinkedIn</a>
              <a href="#" className="text-sm text-white/40 hover:text-white transition-colors duration-200 block">Instagram</a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 py-6 flex justify-between items-center">
        <p className="text-xs text-white/20">© {currentYear} Oelrix</p>
        <p className="text-xs text-white/20 italic">Crafted with precision.</p>
      </div>
    </footer>
  );
}
