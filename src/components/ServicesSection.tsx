"use client";

import Link from "next/link";
import { LavaLamp } from "../../components/fluid-blob";

type ServicesSectionProps = {
  includeNav?: boolean;
};

export default function ServicesSection({ includeNav = false }: ServicesSectionProps) {
  return (
    <section id="services" className="min-h-screen w-screen relative text-white overflow-hidden">
      <LavaLamp />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-16 pb-28 sm:pt-20 lg:pt-24">
        <header className="relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-black/50 to-black/20 backdrop-blur-xl p-8 sm:p-12 shadow-2xl">
          <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-white/5 blur-3xl" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-white/20 bg-white/5">
              <span className="text-xs uppercase tracking-[0.25em] text-white/80 font-semibold">
                Our Sites
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-4 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
              Live Demos That Speak
            </h1>
            <p className="text-lg text-white/70 leading-relaxed max-w-3xl">
              We showcase capability through real, working demo sites. Each build
              is designed to be modern, responsive, and production-ready.
            </p>
          </div>
        </header>

        <section className="mt-16 grid gap-6 lg:grid-cols-3">
          {[
            {
              name: "Craftrix",
              type: "UI Assets Platform",
              status: "Live",
              tags: ["Design System", "Components", "Landing"],
            },
            {
              name: "Pulse Studio",
              type: "Agency Website",
              status: "Demo",
              tags: ["Branding", "Portfolio", "Responsive"],
            },
            {
              name: "Nova SaaS",
              type: "Product Landing",
              status: "Demo",
              tags: ["Conversion", "Pricing", "UI"],
            },
            {
              name: "Atlas Works",
              type: "Business Site",
              status: "Demo",
              tags: ["Corporate", "Clean", "Fast"],
            },
            {
              name: "Mono Gallery",
              type: "Portfolio",
              status: "Demo",
              tags: ["Minimal", "Grid", "Typography"],
            },
            {
              name: "Beacon",
              type: "Startup Landing",
              status: "Demo",
              tags: ["Hero", "CTA", "Modern"],
            },
          ].map((site) => (
            <div
              key={site.name}
              className="group relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-black/40 to-black/15 backdrop-blur-xl p-6 shadow-2xl hover:border-white/35 transition-all duration-500"
            >
              <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-white/5 blur-2xl group-hover:bg-white/10 transition-all duration-500" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-white/60">{site.type}</p>
                  <span className="text-xs uppercase tracking-wider px-2.5 py-1 rounded-full border border-white/20 bg-white/5 text-white/70">
                    {site.status}
                  </span>
                </div>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                  {site.name}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {site.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-2 text-sm text-white/70">
                  <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
                  <span>Interactive preview ready</span>
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className="mt-16 grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 rounded-3xl border border-white/20 bg-black/30 backdrop-blur-xl p-8 shadow-2xl">
            <h2 className="text-2xl font-semibold mb-3">How We Present Work</h2>
            <p className="text-white/70 leading-relaxed">
              Instead of long proposals, we build real demos. You see layout,
              motion, and responsiveness before committing. It’s the fastest way
              to validate fit.
            </p>
          </div>
          <div className="rounded-3xl border border-white/20 bg-black/30 backdrop-blur-xl p-8 shadow-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-white/60 mb-3">
              Focus
            </p>
            <ul className="space-y-3 text-white/75">
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
                Clean visual systems
              </li>
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
                Responsive by default
              </li>
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
                UX-first interactions
              </li>
            </ul>
          </div>
        </section>
      </div>

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
              className="text-white hover:scale-110 transition-all duration-300 text-xs sm:text-sm md:text-base font-medium tracking-wide"
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
