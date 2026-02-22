"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full border-t border-white/5 bg-black text-white">
      <div className="mx-auto px-6 py-8 md:px-12">
        <div className="flex items-center justify-center text-center">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-xs text-white/30">
            <p>© {currentYear} Oelrix</p>
            <span className="hidden sm:inline">·</span>
            <p>All rights reserved</p>
            <span className="hidden sm:inline">·</span>
            <p>Crafted with precision</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
