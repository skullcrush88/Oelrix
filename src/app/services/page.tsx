"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import LightRays from "@/components/LightRays";
import MarqueeTicker from "@/src/components/MarqueeTicker";
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
        href: "https://v0-noxe-fragrance-website.vercel.app/",
        image: "/NOXE.png",
        description: "Luxury fragrance brand — dark editorial website",
        note: "An imaginary brand concept. Designed & built by Oelrix.",
      },
      {
        label: "ARCUS",
        href: "https://arcus-oelrix-p2.vercel.app/",
        image: "/ARCUS.png",
        description: "Premium architecture & interior design studio website",
        note: "An imaginary brand concept. Designed & built by Oelrix.",
      },
    ],
  },
  {
    tag: "ESTABLISH",
    title: "Focused Landing Pages",
    description:
      "High-clarity pages designed to guide attention, highlight your core value, and turn interest into action. Each element serves the conversion goal.",
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
        label: "Project Preview 01",
        href: "https://placeholder.com",
        image: "/Deliver.png",
        description: "High-converting landing page template",
        note: "Designed for maximum clarity and action.",
      },
      {
        label: "Project Preview 02",
        href: "https://placeholder.com",
        image: "/Design.png",
        description: "Lead generation focused design",
        note: "Optimized conversion funnel.",
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
        label: "Project Preview 01",
        href: "https://placeholder.com",
        image: "/Refine.png",
        description: "Modern redesign transformation",
        note: "Preserved SEO while improving design.",
      },
      {
        label: "Project Preview 02",
        href: "https://placeholder.com",
        image: "/Understand.png",
        description: "Performance-focused refinement",
        note: "Enhanced user experience and speed.",
      },
    ],
  },
];

function revealClasses(isVisible: boolean) {
  return `transition-all duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
    isVisible ? "opacity-100 translate-y-0 translate-x-0 scale-100" : "opacity-0"
  }`;
}

function fadeUp(isVisible: boolean, delay: number = 0) {
  return `transition-all duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[30px]"
  }`;
}

function slideInLeft(isVisible: boolean, delay: number = 0) {
  return `transition-all duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-[40px]"
  }`;
}

function slideInRight(isVisible: boolean, delay: number = 0) {
  return `transition-all duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
    isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[40px]"
  }`;
}

function scaleIn(isVisible: boolean) {
  return `transition-all duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
    isVisible ? "opacity-100 scale-100" : "opacity-0 scale-[0.97]"
  }`;
}

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
          className={`inline-block ${fadeUp(isVisible)} mr-3`}
          style={{
            transitionDelay: `${index * 80}ms`,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
          }}
        >
          {word}
        </span>
      ))}
    </>
  );
}

function ServicePreviewCard({ preview, delay, isInView, shifted }: { preview: PreviewCard; delay: number; isInView: boolean; shifted?: boolean }) {
  const isImage = preview.href.endsWith('.png') || preview.href.endsWith('.jpg') || preview.href.endsWith('.jpeg');
  
  return (
    <a
      href={isImage ? "#" : preview.href}
      target={isImage ? undefined : "_blank"}
      rel={isImage ? undefined : "noopener noreferrer"}
      onClick={isImage ? (e) => e.preventDefault() : undefined}
      className={`group block ${shifted ? "sm:mt-6 md:mt-8" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        className={`${revealClasses(isInView)} overflow-hidden rounded-2xl sm:rounded-3xl border-2 border-white/25 bg-gradient-to-br from-white/[0.12] via-white/[0.04] to-white/[0.02] p-3 sm:p-5 shadow-[0_16px_48px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.1)] transition-all duration-300 group-hover:scale-105 group-hover:border-white/40 group-hover:shadow-[0_24px_64px_rgba(255,255,255,0.2),inset_0_1px_0_rgba(255,255,255,0.15)]`}
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

function CleanProjectPreview({ preview, delay, isInView }: { preview: PreviewCard; delay: number; isInView: boolean }) {
  return (
    <a
      href={preview.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        className={`${scaleIn(isInView)} overflow-hidden rounded-sm`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        <img
          src={preview.image}
          alt={preview.label}
          className="w-full object-cover transition-all duration-400 group-hover:opacity-90 group-hover:scale-[1.01]"
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
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.25 });

  // Custom layout for Brand Websites
  if (service.customLayout) {
    return (
      <div
        ref={ref}
        className={`relative px-6 sm:px-8 md:px-12 py-16 sm:py-20 md:py-24 ${hasBorder ? "border-b border-white/15" : ""}`}
      >
        <div className="mx-auto max-w-7xl w-full">
          {/* Top block - text only, full width */}
          <div className="mb-24">
            <div className={`flex flex-col ${service.align === "left" ? "lg:flex-row-reverse" : "lg:flex-row"} gap-16 items-start`}>
              {/* Left column */}
              <div className="w-full lg:w-1/2">
                <p className={`${slideInRight(isInView)} text-xs uppercase tracking-[0.5em] text-white/45 font-bold`} style={{ transitionDelay: "0ms" }}>
                  {service.tag}
                </p>
                <h2
                  className={`${slideInRight(isInView)} mb-6 sm:mb-8 text-5xl sm:text-6xl md:text-7xl font-black leading-tight tracking-tight`}
                  style={{ transitionDelay: "100ms" }}
                >
                  {service.title}
                </h2>
                <p
                  className={`${slideInRight(isInView)} text-base sm:text-lg md:text-base leading-relaxed text-white/75`}
                  style={{ transitionDelay: "200ms" }}
                >
                  {service.description}
                </p>
              </div>

              {/* Right column */}
              <div className="w-full lg:w-1/2 pt-16">
                <p
                  className={`${slideInRight(isInView)} text-white/60 text-base leading-relaxed max-w-md`}
                  style={{ transitionDelay: "300ms" }}
                >
                  Every brand website we build is a fully custom digital experience — designed from scratch, built for performance, and crafted to communicate your value at first glance. From structure to typography to the smallest interaction, nothing is templated.
                </p>

                <div className={slideInRight(isInView)} style={{ transitionDelay: `400ms` }}>
                  <a
                    href="/contact"
                    className="mt-8 sm:mt-12 inline-flex items-center gap-2 rounded-full border-2 border-white/80 bg-white/10 px-6 sm:px-7 py-2.5 sm:py-3 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-[0_8px_24px_rgba(255,255,255,0.12)] transition-all duration-300 hover:bg-white hover:text-black hover:shadow-[0_16px_32px_rgba(255,255,255,0.3)]" 
                  >
                    Start this project
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom block - image grid */}
          <div className="border-t border-white/10 pt-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {service.previews.map((preview, index) => (
                <CleanProjectPreview
                  key={preview.label}
                  preview={preview}
                  delay={350 + index * 100}
                  isInView={isInView}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Standard layout for other services
  const textOrder = service.align === "left" ? "order-2 md:order-1" : "order-2 md:order-2";
  const previewOrder = service.align === "left" ? "order-1 md:order-2" : "order-1 md:order-1";
  const textAlign = service.align === "left" ? "text-left" : "text-left md:text-right";
  const listAlign = service.align === "left" ? "items-start" : "items-start md:items-end";

  return (
    <div
      ref={ref}
      className={`relative min-h-screen md:min-h-auto px-6 sm:px-8 md:px-12 py-16 sm:py-20 md:py-24 ${hasBorder ? "border-b border-white/15" : ""}`}
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-8 sm:gap-12 md:gap-20 md:grid-cols-2">
        <div className={`${textOrder} max-w-2xl w-full`}>
          <p className={`${revealClasses(isInView)} mb-4 sm:mb-6 text-xs uppercase tracking-[0.5em] text-white/45 font-bold`} style={{ transitionDelay: "0ms" }}>
            {service.tag}
          </p>
          <h2
            className={`${revealClasses(isInView)} mb-6 sm:mb-8 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight`}
            style={{ transitionDelay: "100ms" }}
          >
            {service.title}
          </h2>
          <p
            className={`${revealClasses(isInView)} text-base sm:text-lg md:text-base leading-relaxed text-white/75`}
            style={{ transitionDelay: "200ms" }}
          >
            {service.description}
          </p>

          <ul className={`mt-8 sm:mt-12 space-y-4 sm:space-y-5 ${listAlign}`}>
            {service.deliverables.map((item, index) => (
              <li
                key={item}
                className={`${revealClasses(isInView)} flex max-w-md items-start gap-3 sm:gap-4 text-sm sm:text-base text-white/80`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <span className="mt-1.5 flex-shrink-0 rounded-full bg-white/15 p-1">
                  <CheckIcon />
                </span>
                <span className="font-semibold leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          <div className={revealClasses(isInView)} style={{ transitionDelay: `${300 + service.deliverables.length * 100}ms` }}>
            <a
              href="/contact"
              className="mt-8 sm:mt-12 inline-flex items-center gap-2 rounded-full border-2 border-white/80 bg-white/10 px-6 sm:px-7 py-2.5 sm:py-3 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-[0_8px_24px_rgba(255,255,255,0.12)] transition-all duration-300 hover:bg-white hover:text-black hover:shadow-[0_16px_32px_rgba(255,255,255,0.3)]" 
            >
              Start this project
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>

        <div className={`${previewOrder} w-full max-w-xl justify-self-end md:justify-self-auto`}>
          <div className="relative">
            {service.previews.map((preview, index) => (
              <ServicePreviewCard
                key={preview.label}
                preview={preview}
                delay={300 + service.deliverables.length * 100 + 100 + index * 100}
                isInView={isInView}
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
  const [introVisible, setIntroVisible] = useState(false);
  const [capabilityVisible, setCapabilityVisible] = useState<boolean[]>([false, false]);
  const [manifestoVisible, setManifestoVisible] = useState(false);
  const { ref: closingCtaRef, isInView: closingCtaVisible } = useInView<HTMLDivElement>({ threshold: 0.35 });

  const introRef = useRef<HTMLDivElement>(null);
  const capabilityRefs = useRef<(HTMLParagraphElement | null)[]>([null, null]);
  const manifestoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!introRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntroVisible(true);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(introRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = capabilityRefs.current.indexOf(entry.target as HTMLParagraphElement);
            if (index >= 0) {
              setCapabilityVisible((prev) => {
                const next = [...prev];
                next[index] = true;
                return next;
              });
            }
          }
        });
      },
      { threshold: 0.5 }
    );
    capabilityRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!manifestoRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setManifestoVisible(true);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(manifestoRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <main className="w-full bg-black text-white overflow-hidden">
      {/* INTRO SECTION */}
      <section className="relative w-full overflow-hidden min-h-screen">
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
            background: 'linear-gradient(to right, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.85) 40%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0.2) 100%)'
          }}
        />
        <div
          ref={introRef}
          className={`relative z-10 px-6 sm:px-8 md:px-16 lg:px-24 py-24 sm:py-32 max-w-full md:max-w-[55%] transition-all duration-1000 ease-out flex items-end md:items-center h-full ${
            introVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="w-full">
            <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-8 sm:mb-12">Oelrix Studio</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-6 sm:mb-8">
              <WordSplit text="We build digital presence that defines how brands are perceived." isVisible={introVisible} />
            </h1>
            <p className={`${fadeUp(introVisible)} text-sm sm:text-base md:text-lg text-white/70 leading-relaxed max-w-2xl`}>
              Every project we take on is designed to communicate clarity, credibility, and intent. We focus on structure, precision, and presentation so what people see reflects what your brand truly is.
            </p>
          </div>
        </div>
      </section>

      <MarqueeTicker />

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
      <section className="relative w-full overflow-hidden min-h-[600px]">
        <Image
          src="/bg12.png"
          alt="Oelrix Studio"
          fill
          className="absolute inset-0 w-full h-full object-cover transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
            WebkitMaskImage: 'none',
            maskImage: 'none',
            opacity: 0.4,
            transform: closingCtaVisible ? "scale(1)" : "scale(1.05)",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 px-6 sm:px-8 md:px-16 lg:px-24 py-20 sm:py-32">
          <div className="space-y-6">
            <div>
              {["We don't build volume.", "We build clarity."].map((line, index) => (
                <p
                  key={line}
                  ref={(el) => {
                    capabilityRefs.current[index] = el;
                  }}
                  className={`text-left text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white transition-all duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    capabilityVisible[index]
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-[60px]"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {line}
                </p>
              ))}
            </div>
            <div
              ref={manifestoRef}
              className={`transition-all duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                manifestoVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDelay: `600ms` }}
            >
              <p className="text-lg sm:text-2xl md:text-3xl leading-relaxed text-white max-w-4xl">
                What we create is designed to be understood instantly, trusted immediately, and remembered effortlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={closingCtaRef}
        className="w-full bg-transparent py-24 sm:py-40 px-6 sm:px-8 md:px-12 flex flex-col items-center justify-center"
      >
        <div className="mx-auto max-w-4xl text-center">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white w-full"
          >
            <WordSplit text="Every great website starts with one conversation." isVisible={closingCtaVisible} />
          </h2>
          <div
            className={`transition-all duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)] mt-8 sm:mt-12`}
            style={{
              transitionDelay: `500ms`,
              opacity: closingCtaVisible ? 1 : 0,
              transform: closingCtaVisible ? "translateY(0)" : "translateY(16px)",
            }}
          >
            <a
              href="/contact"
              className="inline-block text-xs sm:text-sm uppercase tracking-widest text-white border-b border-white/40 pb-0.5 transition-all duration-300 hover:border-white"
            >
              Start yours →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

