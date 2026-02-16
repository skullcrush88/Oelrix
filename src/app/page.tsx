"use client";

import Link from "next/link";
import { LavaLamp } from "../../components/fluid-blob";

export default function Home() {
  return (
    <main className="w-full">
      <div className="min-h-screen w-screen flex flex-col justify-center items-center relative">
        <LavaLamp />
        <h1 className="text-[5rem] sm:text-[8rem] md:text-[18rem] font-extrabold tracking-tight mix-blend-exclusion text-white z-10 uppercase text-center sm:whitespace-nowrap">
          OELRIX
        </h1>
        <div className="fixed bottom-8 left-0 right-0 z-[999] flex justify-center px-4">
          <nav className="flex flex-row gap-2 sm:gap-4 md:gap-8 bg-black/30 backdrop-blur-xl rounded-full border border-white/20 shadow-2xl px-3 sm:px-6 md:px-10 py-2 sm:py-3 md:py-4">
            <Link
              href="/"
              className="text-white hover:scale-110 transition-all duration-300 text-xs sm:text-sm md:text-base font-medium tracking-wide"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-white hover:scale-110 transition-all duration-300 text-xs sm:text-sm md:text-base font-medium tracking-wide"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-white hover:scale-110 transition-all duration-300 text-xs sm:text-sm md:text-base font-medium tracking-wide"
            >
              Our Services
            </Link>
            <Link
              href="/contact"
              className="text-white hover:scale-110 transition-all duration-300 text-xs sm:text-sm md:text-base font-medium tracking-wide"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </main>
  );
}
