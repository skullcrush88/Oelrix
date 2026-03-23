"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LightRays from "@/components/LightRays";
import CustomCursor from "@/src/components/CustomCursor";
import SmoothScroll from "@/src/components/SmoothScroll";
import Footer from "@/src/components/Footer";
import { useInView } from "@/src/hooks/useInView";

type PreviewCard = {
  label: string;
  href: string;
  image: string;
  description?: string;
  note?: string;
};

type Service = {
  tag: string;
  title: string;
  description: string;
  deliverables: string[];
  align: "left" | "right";
  previews: PreviewCard[];
  customLayout?: boolean;
};

const SERVICES: Service[] = [
  {
    tag: "LAUNCH",
    title: "Brand Websites",
    description:
      "Structured digital spaces built to present your brand with confidence and clarity. We design every detail to communicate value, establish trust, and reflect your true standard.",
    deliverables: [
      "Up to 6 custom pages",
      "CMS integration",
      "SEO-ready structure",
      "Mobile-first design",
      "Analytics setup",
    ],
    align: "right",
    customLayout: true,
    previews: [
      {
        label: "NOXE",
        href: "/project/noxe",
        image: "/NOXE.png",
        description: "Luxury fragrance brand — dark editorial website",
        note: "An imaginary brand concept. Designed & built by Oelrix.",
      },
      {
        label: "ARCUS",
        href: "/project/arcus",
        image: "/ARCUS.png",
        description: "Custom architecture & interior design studio website",
        note: "An imaginary brand concept. Designed & built by Oelrix.",
      },
    ],
  },
  {
    tag: "ESTABLISH",
    title: "Focused Landing Pages",
    description:
      "One page. One goal. No distractions. Built for the moment when someone needs to be convinced — fast.",
    deliverables: [
      "Single conversion-focused page",
      "Lead capture form",
      "Mobile responsive",
      "2 rounds of revisions",
      "Fast load performance",
    ],
    align: "left",
    customLayout: true,
    previews: [
      {
        label: "VELORX",
        href: "/project/velorx",
        image: "/Velox.jpg",
        description: "Electric vehicle product launch page",
        note: "An imaginary brand concept. Designed & built by Oelrix.",
      },
      {
        label: "ZENIT",
        href: "#",
        image: "/zenit.png",
        description: "SaaS productivity app launch page",
        note: "An imaginary brand concept. Designed & built by Oelrix.",
      },
    ],
  },
  {
    tag: "EVOLVE",
    title: "Site Refinement",
    description:
      "We elevate existing digital presence through strategic redesign and structural refinement. Every update aligns perception with your brand's true standard.",
    deliverables: [
      "Full design audit",
      "Modern UI overhaul",
      "Performance improvements",
      "Preserved SEO equity",
      "Improved mobile experience",
    ],
    align: "right",
    customLayout: true,
    previews: [
      {
        label: "BEFORE",
        href: "#",
        image: "/before.jpg",
        description: "Local business website — full redesign & revamp",
        note: "A concept transformation. Designed & built by Oelrix.",
      },
      {
        label: "AFTER",
        href: "#",
        image: "/after.jpg",
        description: "Local business website — full redesign & revamp",
        note: "A concept transformation. Designed & built by Oelrix.",
      },
    ],
  },
];



function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="h-5 w-5 shrink-0 text-white"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="10" cy="10" r="9" fill="currentColor" />
      <path d="M6 10.4L8.6 13 14 7.6" stroke="#0A0A0A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WordSplit({ text, isVisible }: { text: string; isVisible: boolean }) {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, index) => (
        <span
          key={index}
          className="inline-block mr-3"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(32px)",
            transition: "opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1)",
            transitionDelay: `${index * 150}ms`,
          }}
        >
          {word}
        </span>
      ))}
    </>
  );
}

function ServicePreviewCard({ preview, delay, inView, shifted }: { preview: PreviewCard; delay: number; inView: boolean; shifted?: boolean }) {
  const isImage = preview.href.endsWith('.png') || preview.href.endsWith('.jpg') || preview.href.endsWith('.jpeg');
  const isExternal = /^https?:\/\//i.test(preview.href);
  
  return (
    <a
      href={isImage ? "#" : preview.href}
      target={isImage || !isExternal ? undefined : "_blank"}
      rel={isImage || !isExternal ? undefined : "noopener noreferrer"}
      onClick={isImage ? (e) => e.preventDefault() : undefined}
      className={`group block ${shifted ? "sm:mt-6 md:mt-8" : ""}`}
    >
      <div
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "scale(1)" : "scale(0.96)",
          transition: "opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1)",
          transitionDelay: `${delay}ms`,
        }}
        className="overflow-hidden rounded-2xl sm:rounded-3xl border-2 border-white/25 bg-gradient-to-br from-white/[0.12] via-white/[0.04] to-white/[0.02] p-3 sm:p-5 shadow-[0_16px_48px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.1)] transition-all duration-300 group-hover:scale-105 group-hover:border-white/40 group-hover:shadow-[0_24px_64px_rgba(255,255,255,0.2),inset_0_1px_0_rgba(255,255,255,0.15)]"
      >
        <div className="mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3 px-1">
          <span className="h-2.5 sm:h-3 w-2.5 sm:w-3 rounded-full bg-[#ff5f57] shadow-[0_2px_8px_rgba(255,95,87,0.3)]" />
          <span className="h-2.5 sm:h-3 w-2.5 sm:w-3 rounded-full bg-[#ffbd2e] shadow-[0_2px_8px_rgba(255,189,46,0.3)]" />
          <span className="h-2.5 sm:h-3 w-2.5 sm:w-3 rounded-full bg-[#28c840] shadow-[0_2px_8px_rgba(40,200,64,0.3)]" />
        </div>
        <div className="relative overflow-hidden rounded-lg sm:rounded-2xl border-2 border-white/20 bg-gradient-to-b from-black to-black/90 shadow-inner">
          {isImage ? (
            <img
              src={preview.href}
              alt={preview.label}
              className="h-32 sm:h-40 md:h-48 w-full object-contain bg-neutral-950"
            />
          ) : (
            <iframe
              src={preview.href}
              title={preview.label}
              className="h-32 sm:h-40 md:h-48 w-full bg-neutral-950"
              loading="lazy"
            />
          )}
          <span className="pointer-events-none absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 translate-y-4 rounded-full border-2 border-white/70 bg-white/20 px-3 sm:px-4 py-1.5 sm:py-2 text-xs font-semibold text-white opacity-0 shadow-lg backdrop-blur-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            View Site →
          </span>
        </div>
      </div>
      <p className="mt-3 sm:mt-4 text-xs font-bold uppercase tracking-[0.16em] text-white/65">{preview.label}</p>
    </a>
  );
}

function CleanProjectPreview({ preview, delay, inView }: { preview: PreviewCard; delay: number; inView: boolean }) {
  const isExternal = /^https?:\/\//i.test(preview.href);

  return (
    <a
      href={preview.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="group block"
    >
      <div
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "scale(1)" : "scale(0.96)",
          transition: "opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1)",
          transitionDelay: `${delay}ms`,
        }}
        className="overflow-hidden rounded-sm"
      >
        <img
          src={preview.image}
          alt={preview.label}
          className="w-full object-contain transition-all duration-400 group-hover:opacity-90 group-hover:scale-[1.01]"
          style={{ aspectRatio: '4/3' }}
        />
      </div>
      <div className="mt-4">
        <p className="text-xs uppercase tracking-widest text-white/40 font-semibold">{preview.label}</p>
        <p className="text-sm text-white/70 mt-1">{preview.description}</p>
        {preview.note && <p className="text-xs text-white/30 mt-2 italic">{preview.note}</p>}
      </div>
    </a>
  );
}

function ServiceBlock({ service, hasBorder = true }: { service: Service; hasBorder?: boolean }) {
  const { ref, inView } = useInView();

  // Custom layout for Brand Websites
  if (service.customLayout) {
    return (
      <div
        ref={ref as any}
        className={`relative px-6 md:px-12 py-16 sm:py-20 md:py-24 ${hasBorder ? "border-b border-white/15" : ""}`}
      >
        <div className="mx-auto max-w-7xl w-full">
          {/* Top block - text only, full width */}
          <div className="mb-24">
            <div className={`flex flex-col ${service.align === "left" ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 md:gap-16 items-start`}>
              {/* Left column */}
              <div className="w-full lg:w-1/2">
                <p 
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateY(0)" : "translateY(32px)",
                    transition: "opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1)",
                    transitionDelay: "0ms",
                  }}
                  className="text-xs uppercase tracking-[0.5em] text-white/45 font-bold"
                >
                  {service.tag}
                </p>
                <h2
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateY(0)" : "translateY(32px)",
                    transition: "opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1)",
                    transitionDelay: "150ms",
                  }}
                  className="mb-6 sm:mb-8 text-5xl sm:text-6xl md:text-7xl font-black leading-tight tracking-tight"
                >
                  {service.title}
                </h2>
                <p
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateY(0)" : "translateY(32px)",
                    transition: "opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1)",
                    transitionDelay: "300ms",
                  }}
                  className="text-base sm:text-lg md:text-base leading-relaxed text-white/75"
                >
                  {service.description}
                </p>
              </div>

              {/* Right column */}
              <div className="w-full lg:w-1/2 pt-0 md:pt-16">
                <p
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateY(0)" : "translateY(32px)",
                    transition: "opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1)",
                    transitionDelay: "450ms",
                  }}
                  className="text-white/60 text-base leading-relaxed max-w-md"
                >
                  {service.tag === "LAUNCH" 
                    ? "Every brand website we build is a fully custom digital experience — designed from scratch, built for performance, and crafted to communicate your value at first glance. From structure to typography to the smallest interaction, nothing is templated."
                    : service.tag === "ESTABLISH"
                    ? "A landing page has one job — and we build it to do that job exceptionally well. Every section, every line of copy, every visual decision is made with a single outcome in mind: turning the right visitor into a lead, a signup, or a sale."
                    : "Every refinement project begins with a full audit of what exists — structure, performance, and perception. We rebuild what needs rebuilding and sharpen what doesn't."}
                </p>

                <div 
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateY(0)" : "translateY(32px)",
                    transition: "opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1)",
                    transitionDelay: "600ms",
                  }}
                >
                  <Link
                    href="/contact"
                    className="mt-8 sm:mt-12 inline-flex items-center gap-2 rounded-none border-2 border-white/80 bg-white/10 px-6 sm:px-7 py-2.5 sm:py-3 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-[0_8px_24px_rgba(255,255,255,0.12)] transition-all duration-300 hover:bg-white hover:text-black hover:shadow-[0_16px_32px_rgba(255,255,255,0.3)]" 
                  >
                    {service.tag === "LAUNCH" ? "See how we build it" : service.tag === "ESTABLISH" ? "Explore this service" : "Talk about your site"}
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom block - image grid */}
          <div className="border-t border-white/10 pt-12">
            {service.tag === "EVOLVE" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Before Image */}
                <div
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? "scale(1)" : "scale(0.96)",
                    transition: "opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1)",
                    transitionDelay: "600ms",
                  }}
                >
                  <img
                    src="/before.jpg"
                    alt="Before"
                    className="w-full object-cover rounded-sm hover:opacity-80 transition-opacity duration-300"
                    style={{ aspectRatio: '16/10' }}
                  />
                  <p className="text-xs uppercase tracking-widest text-white/40 mt-4 mb-1">BEFORE</p>
                  <p className="text-sm text-white/70">A brand lost in the noise</p>
                </div>

                {/* After Image */}
                <div
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? "scale(1)" : "scale(0.96)",
                    transition: "opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1)",
                    transitionDelay: "750ms",
                  }}
                >
                  <img
                    src="/after.jpg"
                    alt="After"
                    className="w-full object-cover rounded-sm hover:opacity-80 transition-opacity duration-300"
                    style={{ aspectRatio: '16/10' }}
                  />
                  <p className="text-xs uppercase tracking-widest text-white/40 mt-4 mb-1">AFTER</p>
                  <p className="text-sm text-white/70">Clarity, structure, and intention — restored</p>
                  <p className="text-xs text-white/30 italic mt-1">A concept transformation. Designed & built by Oelrix.</p>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {service.previews.map((preview, index) => (
                  <CleanProjectPreview
                    key={preview.label}
                    preview={preview}
                    delay={600 + index * 150}
                    inView={inView}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Standard layout for other services
  const textOrder = service.align === "left" ? "order-2 md:order-1" : "order-2 md:order-2";
  const previewOrder = service.align === "left" ? "order-1 md:order-2" : "order-1 md:order-1";

  return (
    <div
      ref={ref as any}
      className={`relative min-h-screen md:min-h-auto px-5 md:px-12 lg:px-24 py-12 md:py-16 lg:py-24 ${hasBorder ? "border-b border-white/15" : ""}`}
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-8 sm:gap-12 md:gap-20 md:grid-cols-2">
        <div className={`${textOrder} max-w-2xl w-full`}>
          <p 
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(32px)",
              transition: "opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1)",
              transitionDelay: "0ms",
            }}
            className="mb-4 sm:mb-6 text-xs uppercase tracking-[0.5em] text-white/45 font-bold"
          >
            {service.tag}
          </p>
          <h2
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(32px)",
              transition: "opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1)",
              transitionDelay: "150ms",
            }}
            className="mb-6 sm:mb-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight"
          >
            {service.title}
          </h2>
          <p
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(32px)",
              transition: "opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1)",
              transitionDelay: "300ms",
            }}
            className="text-sm sm:text-base md:text-lg leading-relaxed text-white/75"
          >
            {service.description}
          </p>

          <ul className="mt-8 sm:mt-12 space-y-4 sm:space-y-5">
            {service.deliverables.map((item, index) => (
              <li
                key={item}
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(32px)",
                  transition: "opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1)",
                  transitionDelay: `${450 + index * 150}ms`,
                }}
                className="flex max-w-md items-start gap-3 sm:gap-4 text-sm sm:text-base text-white/80"
              >
                <span className="mt-1.5 flex-shrink-0 rounded-full bg-white/15 p-1">
                  <CheckIcon />
                </span>
                <span className="font-semibold leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          <div 
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(32px)",
              transition: "opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1)",
              transitionDelay: `${600 + service.deliverables.length * 150}ms`,
            }}
          >
            <Link
              href="/contact"
              className="mt-8 sm:mt-12 flex md:inline-flex w-full md:w-auto justify-center items-center gap-2 rounded-none border-2 border-white/80 bg-white/10 px-6 sm:px-7 py-2.5 sm:py-3 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-[0_8px_24px_rgba(255,255,255,0.12)] transition-all duration-300 hover:bg-white hover:text-black hover:shadow-[0_16px_32px_rgba(255,255,255,0.3)]" 
            >
              {service.tag === "LAUNCH" ? "See how we build it" : service.tag === "ESTABLISH" ? "Explore this service" : "Talk about your site"}
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>

        <div className={`${previewOrder} w-full max-w-xl justify-self-end md:justify-self-auto`}>
          <div className="relative">
            {service.previews.map((preview, index) => (
              <ServicePreviewCard
                key={preview.label}
                preview={preview}
                delay={600 + service.deliverables.length * 150 + 100 + index * 150}
                inView={inView}
                shifted={index === 1}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    // Hero appears on page load after delay
    setHeroVisible(true);
  }, []);

  const { ref: closingCtaRef, inView: closingCtaVisible } = useInView();

  // Manifesto section with early trigger: 0.05 threshold and -5% rootMargin
  const { ref: manifestoRef, inView: manifestoInView } = useInView({ threshold: 0.05, rootMargin: '0px 0px -5% 0px' });

  return (
    <SmoothScroll>
      <main className="w-full bg-black text-white overflow-hidden">
        <CustomCursor />
        {/* INTRO SECTION */}
        <section className="relative w-full overflow-hidden min-h-[70vh] sm:min-h-screen">
          <Image
            src="/bg10.png"
            alt=""
            fill
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{ opacity: 0.5 }}
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.70) 40%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0.2) 100%)'
            }}
          />
          <div
            className="relative z-10 px-5 md:px-12 lg:px-24 py-20 sm:py-24 md:py-32 pb-12 md:pb-16 flex items-end md:items-center h-full"
          >
            <div className="w-full">
              <p 
                style={{
                  opacity: heroVisible ? 1 : 0,
                  transform: heroVisible ? "translateY(0)" : "translateY(32px)",
                  transition: "opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1)",
                  transitionDelay: "300ms",
                }}
                className="text-xs uppercase tracking-[0.3em] text-white/40 mb-6 md:mb-8 lg:mb-12"
              >
                Oelrix Studio
              </p>
              <h1 
                style={{
                  opacity: heroVisible ? 1 : 0,
                  transitionDuration: "1s",
                  transition: "opacity 1s cubic-bezier(0.16, 1, 0.3, 1)",
                  transitionDelay: "500ms",
                }}
                className="w-full text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[6vw] font-bold tracking-tight leading-[0.9] mb-4 md:mb-6 lg:mb-8"
              >
                We build digital presence that defines how brands are perceived.
              </h1>
              <p 
                style={{
                  opacity: heroVisible ? 1 : 0,
                  transform: heroVisible ? "translateY(0)" : "translateY(32px)",
                  transition: "opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1)",
                  transitionDelay: "1100ms",
                }}
                className="mt-8 md:mt-12 text-xs sm:text-sm text-white/50 leading-relaxed max-w-sm md:max-w-md"
              >
                Every project we take on is designed to communicate clarity, credibility, and intent. We focus on structure, precision, and presentation so what people see reflects what your brand truly is.
              </p>
            </div>
          </div>
        </section>

        {/* BUILD BLOCKS */}
        <section className="w-full">
          {SERVICES.map((service, index) => (
            <ServiceBlock
              key={service.tag}
              service={service}
              hasBorder={index < SERVICES.length - 1}
            />
          ))}
        </section>

        {/* CAPABILITY STATEMENT & MANIFESTO */}
        <section
          ref={manifestoRef as any}
          className="relative w-full overflow-hidden min-h-[500px] md:min-h-[600px]"
        >
          <Image
            src="/bg12.png"
            alt="Oelrix Studio"
            fill
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
              opacity: 0.4,
              transform: closingCtaVisible ? "scale(1)" : "scale(1.05)",
              transition: "transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          />
          <div className="absolute inset-0 bg-black/75 md:bg-black/50" />
          <div className="relative z-10 py-16 md:py-20 lg:py-32">
            <div className="space-y-6 sm:space-y-8 md:space-y-12">
              <div className="w-full overflow-hidden">
                {["We don't build volume.", "We build clarity."].map((line, index) => (
                  <div key={line} className="w-full overflow-hidden">
                    <p
                      style={{
                        opacity: manifestoInView ? 1 : 0,
                        transform: manifestoInView ? "translateX(0)" : "translateX(-48px)",
                        transition: "opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)",
                        transitionDelay: `${index * 200}ms`,
                        willChange: "opacity, transform",
                      }}
                      className="text-2xl sm:text-4xl md:text-6xl lg:text-[8vw] px-5 md:px-12 lg:px-24 pt-8 md:pt-12 lg:pt-16 pb-8 md:pb-12 lg:pb-16 font-bold leading-tight text-white"
                    >
                      {line}
                    </p>
                  </div>
                ))}
              </div>
              <div
                style={{
                  opacity: manifestoInView ? 1 : 0,
                  transform: manifestoInView ? "translateY(0)" : "translateY(32px)",
                  transition: "opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1)",
                  transitionDelay: "600ms",
                  willChange: "opacity, transform",
                }}
                className="px-5 md:px-12 lg:px-24"
              >
                <p className="text-sm sm:text-base md:text-lg lg:text-2xl leading-relaxed text-white max-w-4xl">
                  What we create is designed to be understood instantly, trusted immediately, and remembered effortlessly.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          ref={closingCtaRef}
          className="w-full bg-transparent py-16 md:py-24 lg:py-40 px-5 md:px-12 lg:px-24 flex flex-col items-center justify-center border-t border-white/10"
        >
          <div className="mx-auto max-w-5xl text-center relative">
            <p 
              style={{
                opacity: closingCtaVisible ? 1 : 0,
                transform: closingCtaVisible ? "translateY(0)" : "translateY(32px)",
                transition: "opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1)",
                transitionDelay: "0ms",
              }}
              className="text-xs uppercase tracking-widest text-white/20 mb-6 sm:mb-8"
            >
              Oelrix Studio
            </p>
            
            {/* Radial glow behind heading */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)',
                pointerEvents: 'none',
                zIndex: 0,
              }}
            />
            
            <h2
              style={{
                opacity: closingCtaVisible ? 1 : 0,
                transitionDuration: "1.4s",
                transition: "opacity 1.4s cubic-bezier(0.16, 1, 0.3, 1)",
                transitionDelay: "150ms",
              }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white w-full relative z-10"
            >
              Every great website starts with one conversation.
            </h2>
            <div
              style={{
                opacity: closingCtaVisible ? 1 : 0,
                transform: closingCtaVisible ? "translateY(0)" : "translateY(24px)",
                transition: "opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1)",
                transitionDelay: "750ms",
                position: 'relative',
                zIndex: 10,
              }}
              className="mt-8 sm:mt-12"
            >
              <Link
                href="/contact"
                className="inline-block text-xs sm:text-sm uppercase tracking-widest text-white border-b border-white/40 pb-0.5 transition-all duration-300 hover:border-white"
              >
                Let's talk about your project →
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </SmoothScroll>
  );
}

