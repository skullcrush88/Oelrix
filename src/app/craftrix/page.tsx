import React from "react";

export default function CraftrixHome() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 to-blue-900 text-white flex flex-col">
      <header className="w-full px-8 py-6 flex items-center justify-between border-b border-white/10 bg-white/5 backdrop-blur-md">
        <h1 className="text-3xl font-extrabold tracking-tight">Craftrix</h1>
        <nav className="flex gap-6 text-lg font-medium">
          <a href="#components" className="hover:text-blue-400 transition">Components</a>
          <a href="#collections" className="hover:text-blue-400 transition">Collections</a>
          <a href="#about" className="hover:text-blue-400 transition">About</a>
        </nav>
      </header>
      <section className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-5xl md:text-7xl font-bold mb-4">Discover, Copy & Use UI Components</h2>
        <p className="text-lg md:text-2xl max-w-2xl mb-8 opacity-80">Browse a growing library of beautiful, ready-to-use UI components for your next project. Click any component to copy the code instantly.</p>
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {/* Placeholder cards for UI components */}
          <div className="rounded-2xl bg-white/10 border border-white/10 shadow-lg p-6 flex flex-col items-center justify-center min-h-[180px] hover:scale-105 hover:shadow-2xl transition cursor-pointer">
            <span className="text-2xl font-semibold mb-2">Button</span>
            <span className="opacity-70">A modern animated button</span>
          </div>
          <div className="rounded-2xl bg-white/10 border border-white/10 shadow-lg p-6 flex flex-col items-center justify-center min-h-[180px] hover:scale-105 hover:shadow-2xl transition cursor-pointer">
            <span className="text-2xl font-semibold mb-2">Card</span>
            <span className="opacity-70">A glassmorphic card UI</span>
          </div>
          <div className="rounded-2xl bg-white/10 border border-white/10 shadow-lg p-6 flex flex-col items-center justify-center min-h-[180px] hover:scale-105 hover:shadow-2xl transition cursor-pointer">
            <span className="text-2xl font-semibold mb-2">Navbar</span>
            <span className="opacity-70">A responsive navigation bar</span>
          </div>
        </div>
      </section>
      <footer className="w-full py-4 text-center text-white/60 text-sm border-t border-white/10 bg-white/5 backdrop-blur-md">
        © {new Date().getFullYear()} Craftrix by Oelrix.
      </footer>
    </main>
  );
}
