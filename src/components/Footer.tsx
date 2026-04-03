"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const word = "OELRIX";

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const letterVariants: Variants = {
    hidden: { opacity: 0, x: 80, scale: 0.8 },
    visible: { 
      opacity: 1, 
      x: 0, 
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" } 
    },
  };

  return (
    <footer className="w-full bg-[#080808] border-t border-white/10 px-8 md:px-16 lg:px-24 overflow-hidden">
      {/* Top Block - Massive OELRIX Wordmark */}
      <div className="pt-24 pb-16 border-b border-white/10">
        <motion.h1 
          className="text-[12vw] tracking-tighter text-white leading-none flex" 
          style={{ fontFamily: 'Bebas Neue, sans-serif' }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {word.split("").map((char, index) => (
            <motion.span key={index} variants={letterVariants} className="inline-block">
              {char}
            </motion.span>
          ))}
        </motion.h1>
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
