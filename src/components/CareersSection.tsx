"use client";

import Link from "next/link";

type CareersSectionProps = {
  includeNav?: boolean;
};

export default function CareersSection({ includeNav = false }: CareersSectionProps) {
  return (
    <section id="careers" className="flex flex-col items-center justify-center min-h-[60vh] p-8 text-white bg-black">
      <h2 className="text-4xl font-bold mb-4">Careers</h2>
      <p className="text-lg text-center max-w-2xl text-white/80">
        Interested in joining Oelrix? We’re always looking for creative, driven people. Email us or check back soon for open roles!
      </p>

      {includeNav && (
        <div className="fixed bottom-8 left-0 right-0 z-[999] flex justify-center px-4">
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
              Our Services
            </Link>
            <Link
              href="/contact"
              className="text-white/80 hover:text-white hover:scale-110 transition-all duration-300 text-xs sm:text-sm md:text-base font-medium tracking-wide"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </section>
  );
}
