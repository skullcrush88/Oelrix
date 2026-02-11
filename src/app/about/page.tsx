"use client";

import Link from "next/link";
import { LavaLamp } from "../../../components/fluid-blob";

export default function AboutPage() {
  return (
    <main className="min-h-screen w-screen relative text-white overflow-hidden">
      <LavaLamp />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-16 pb-28 sm:pt-20 lg:pt-24">
        <header className="relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-black/50 to-black/30 backdrop-blur-xl p-8 sm:p-12 shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="relative">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.25em] text-white/90 font-semibold">About Us</p>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
              Building Modern Web Experiences
            </h1>
            <p className="text-lg text-white/70 leading-relaxed max-w-3xl">
              We create visually strong, practical websites that feel clear, calm, and easy to use. Our focus on simplicity, clarity, and aesthetics helps businesses show up online with confidence.
            </p>
          </div>
        </header>

        <section className="mt-20 grid gap-8 lg:grid-cols-2">
          <div className="group relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-xl p-8 shadow-2xl hover:border-white/40 transition-all duration-500">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-all duration-500" />
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="w-8 h-8 rounded-lg border-2 border-white/60" />
              </div>
              <h2 className="text-2xl font-bold mb-4">What We Do</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3 group/item">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover/item:bg-white transition-colors" />
                  <span className="text-white/80 group-hover/item:text-white transition-colors">Business Websites</span>
                </div>
                <div className="flex items-center gap-3 group/item">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover/item:bg-white transition-colors" />
                  <span className="text-white/80 group-hover/item:text-white transition-colors">Landing Pages</span>
                </div>
                <div className="flex items-center gap-3 group/item">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover/item:bg-white transition-colors" />
                  <span className="text-white/80 group-hover/item:text-white transition-colors">Portfolio Sites</span>
                </div>
                <div className="flex items-center gap-3 group/item">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover/item:bg-white transition-colors" />
                  <span className="text-white/80 group-hover/item:text-white transition-colors">UI-Focused Builds</span>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-white/10 text-xs text-white/70">Design</span>
                  <span className="px-3 py-1 rounded-full bg-white/10 text-xs text-white/70">Responsive</span>
                  <span className="px-3 py-1 rounded-full bg-white/10 text-xs text-white/70">UX</span>
                </div>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-xl p-8 shadow-2xl hover:border-white/40 transition-all duration-500">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-all duration-500" />
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Approach</h2>
              <p className="text-white/70 leading-relaxed mb-6">
                Show, don't tell. We build demo websites that let clients visualize exactly what they'll get—no guesswork, no empty promises.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-sm font-bold">1</div>
                  <span className="text-white/80">Simple Process</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-sm font-bold">2</div>
                  <span className="text-white/80">Transparent Communication</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-sm font-bold">3</div>
                  <span className="text-white/80">Fast Delivery</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">Why Choose Oelrix</h2>
            <p className="text-white/60">What sets us apart from the rest</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-black/30 to-black/10 backdrop-blur-xl p-6 hover:border-white/30 transition-all duration-300">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-2xl" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                  <svg className="w-6 h-6 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Modern Design</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  Contemporary layouts focused on your content
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-black/30 to-black/10 backdrop-blur-xl p-6 hover:border-white/30 transition-all duration-300">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-2xl" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                  <svg className="w-6 h-6 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Fast Delivery</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  Quick iterations that respect your timeline
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-black/30 to-black/10 backdrop-blur-xl p-6 hover:border-white/30 transition-all duration-300">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-2xl" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                  <svg className="w-6 h-6 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Direct Contact</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  Work directly with the builders
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-black/30 to-black/10 backdrop-blur-xl p-6 hover:border-white/30 transition-all duration-300">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-2xl" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                  <svg className="w-6 h-6 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Frontend Focus</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  Experts in UI details and interactions
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-20">
          <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-xl p-10 shadow-2xl">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-white/20 bg-white/5">
                <div className="w-2 h-2 rounded-full bg-white/60 animate-pulse" />
                <span className="text-xs uppercase tracking-wider text-white/80 font-semibold">Roadmap</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">Future Vision</h2>
              <p className="text-white/70 leading-relaxed mb-10 max-w-2xl">
                We're starting with frontend excellence and expanding into full-stack solutions, tools, and digital products.
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-xl blur-sm group-hover:blur-md transition-all" />
                  <div className="relative rounded-xl border border-white/20 bg-black/30 p-6 hover:border-white/40 transition-all">
                    <div className="text-4xl font-bold text-white/20 mb-2">01</div>
                    <h3 className="font-semibold mb-2">Frontend Excellence</h3>
                    <p className="text-sm text-white/60">Mastering modern web interfaces</p>
                  </div>
                </div>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-xl blur-sm group-hover:blur-md transition-all" />
                  <div className="relative rounded-xl border border-white/20 bg-black/30 p-6 hover:border-white/40 transition-all">
                    <div className="text-4xl font-bold text-white/20 mb-2">02</div>
                    <h3 className="font-semibold mb-2">Full-Stack Solutions</h3>
                    <p className="text-sm text-white/60">Complete web applications</p>
                  </div>
                </div>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-xl blur-sm group-hover:blur-md transition-all" />
                  <div className="relative rounded-xl border border-white/20 bg-black/30 p-6 hover:border-white/40 transition-all">
                    <div className="text-4xl font-bold text-white/20 mb-2">03</div>
                    <h3 className="font-semibold mb-2">Tools & Products</h3>
                    <p className="text-sm text-white/60">Developer resources & SaaS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
            className="text-white hover:scale-110 transition-all duration-300 text-xs sm:text-sm md:text-base font-medium tracking-wide"
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
            className="text-white/80 hover:text-white hover:scale-110 transition-all duration-300 text-xs sm:text-sm md:text-base font-medium tracking-wide"
          >
            Contact
          </Link>
        </nav>
      </div>
    </main>
  );
}
