"use client";

import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <main className="relative min-h-screen w-screen">
      {/* Mobile Image */}
      <div className="md:hidden absolute inset-0">
        <Image
          src="/phonepic.png"
          alt="Under Construction"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Desktop Image */}
      <div className="hidden md:block absolute inset-0">
        <Image
          src="/cons1.png"
          alt="Under Construction"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      <div className="fixed bottom-8 left-0 right-0 z-10 flex justify-center px-4">
        <nav className="flex flex-row gap-2 sm:gap-4 md:gap-8 bg-black/30 backdrop-blur-xl rounded-full border border-white/20 shadow-2xl px-3 sm:px-6 md:px-10 py-2 sm:py-3 md:py-4">
          <Link
            href="/"
            className="text-white/80 hover:text-white hover:scale-110 transition-all duration-300 text-xs sm:text-sm md:text-base font-medium tracking-wide"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-white/80 hover:text-white hover:scale-110 transition-all duration-300 text-xs sm:text-sm md:text-base font-medium tracking-wide"
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-white/80 hover:text-white hover:scale-110 transition-all duration-300 text-xs sm:text-sm md:text-base font-medium tracking-wide"
          >
            Our Sites
          </Link>
          <Link
            href="/contact"
            className="text-white hover:scale-110 transition-all duration-300 text-xs sm:text-sm md:text-base font-medium tracking-wide"
          >
            Contact
          </Link>
        </nav>
      </div>
    </main>
  );
}
