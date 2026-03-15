"use client";

import { useEffect, useRef, useState } from "react";
import LightRays from "@/components/LightRays";
import MarqueeTicker from "@/src/components/MarqueeTicker";
import Footer from "@/src/components/Footer";

type InViewOptions = {
  threshold?: number;
  rootMargin?: string;
};

type PreviewCard = {
  label: string;
  href: string;
};

type Service = {
  tag: string;
  title: string;
  description: string;
  deliverables: string[];
  align: "left" | "right";
  previews: PreviewCard[];
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
    previews: [
      {
        label: "Project Preview 01",
        href: "https://placeholder.com",
      },
      {
        label: "Project Preview 02",
        href: "https://placeholder.com",
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
    previews: [
      {
        label: "Project Preview 01",
        href: "https://placeholder.com",
      },
      {
        label: "Project Preview 02",
        href: "https://placeholder.com",
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
    previews: [
      {
        label: "Project Preview 01",
        href: "https://placeholder.com",
      },
      {
        label: "Project Preview 02",
        href: "https://placeholder.com",
      },
    ],
  },
];

function useInView<T extends HTMLElement>({ threshold = 0.35, rootMargin = "0px" }: InViewOptions = {}) {
  const ref = useRef<T | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, isInView };
}

function revealClasses(isVisible: boolean) {
  return `transition-all duration-[600ms] ease-out ${
    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
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

function ServicePreviewCard({ preview, delay, isInView, shifted }: { preview: PreviewCard; delay: number; isInView: boolean; shifted?: boolean }) {
  return (
    <a
      href={preview.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block ${shifted ? "md:mt-8" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        className={`${revealClasses(isInView)} overflow-hidden rounded-3xl border-2 border-white/25 bg-gradient-to-br from-white/[0.12] via-white/[0.04] to-white/[0.02] p-5 shadow-[0_16px_48px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.1)] transition-all duration-300 group-hover:scale-105 group-hover:border-white/40 group-hover:shadow-[0_24px_64px_rgba(255,255,255,0.2),inset_0_1px_0_rgba(255,255,255,0.15)]`}
      >
        <div className="mb-4 flex items-center gap-3 px-1">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57] shadow-[0_2px_8px_rgba(255,95,87,0.3)]" />
          <span className="h-3 w-3 rounded-full bg-[#ffbd2e] shadow-[0_2px_8px_rgba(255,189,46,0.3)]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840] shadow-[0_2px_8px_rgba(40,200,64,0.3)]" />
        </div>
        <div className="relative overflow-hidden rounded-2xl border-2 border-white/20 bg-gradient-to-b from-black to-black/90 shadow-inner">
          {/* TODO: replace with real project URL */}
          <iframe
            src={preview.href}
            title={preview.label}
            className="h-48 w-full bg-neutral-950"
            loading="lazy"
          />
          <span className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 translate-y-4 rounded-full border-2 border-white/70 bg-white/20 px-4 py-2 text-xs font-semibold text-white opacity-0 shadow-lg backdrop-blur-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            View Site →
          </span>
        </div>
      </div>
      <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-white/65">{preview.label}</p>
    </a>
  );
}

function ServiceBlock({ service, hasBorder = true }: { service: Service; hasBorder?: boolean }) {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.25 });

  const textOrder = service.align === "left" ? "md:order-1" : "md:order-2";
  const previewOrder = service.align === "left" ? "md:order-2" : "md:order-1";
  const textAlign = service.align === "left" ? "text-left" : "text-left md:text-right";
  const listAlign = service.align === "left" ? "items-start" : "items-start md:items-end";

  return (
    <div
      ref={ref}
      className={`relative min-h-screen px-6 py-24 sm:px-8 md:px-12 ${hasBorder ? "border-b border-white/15" : ""}`}
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-20 md:grid-cols-2">
        <div className={`${textOrder} max-w-2xl ${textAlign}`}>
          <p className={`${revealClasses(isInView)} mb-6 text-xs uppercase tracking-[0.5em] text-white/45 font-bold`} style={{ transitionDelay: "0ms" }}>
            {service.tag}
          </p>
          <h2
            className={`${revealClasses(isInView)} mb-8 text-6xl font-black leading-tight tracking-tight sm:text-7xl md:text-8xl`}
            style={{ transitionDelay: "100ms" }}
          >
            {service.title}
          </h2>
          <p
            className={`${revealClasses(isInView)} text-lg leading-relaxed text-white/75 sm:text-xl md:text-base`}
            style={{ transitionDelay: "200ms" }}
          >
            {service.description}
          </p>

          <ul className={`mt-12 space-y-5 ${listAlign}`}>
            {service.deliverables.map((item, index) => (
              <li
                key={item}
                className={`${revealClasses(isInView)} flex max-w-md items-start gap-4 text-base text-white/80`}
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
              className="mt-12 inline-flex items-center gap-2 rounded-full border-2 border-white/80 bg-white/10 px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-[0_8px_24px_rgba(255,255,255,0.12)] transition-all duration-300 hover:bg-white hover:text-black hover:shadow-[0_16px_32px_rgba(255,255,255,0.3)]" 
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
  const [statementVisible, setStatementVisible] = useState<boolean[]>([false, false, false]);
  const [capabilityVisible, setCapabilityVisible] = useState<boolean[]>([false, false]);
  const [manifestoVisible, setManifestoVisible] = useState(false);
  const { ref: closingCtaRef, isInView: closingCtaVisible } = useInView<HTMLDivElement>({ threshold: 0.35 });

  const introRef = useRef<HTMLDivElement>(null);
  const statementRefs = useRef<(HTMLParagraphElement | null)[]>([null, null, null]);
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
            const index = statementRefs.current.indexOf(entry.target as HTMLParagraphElement);
            if (index >= 0) {
              setStatementVisible((prev) => {
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
    statementRefs.current.forEach((ref) => ref && observer.observe(ref));
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
      <section className="relative w-full flex flex-col justify-center px-6 pt-24 pb-24 sm:px-8 md:px-12">
        {/* LightRays Background */}
        <div className="absolute inset-0 w-full h-full">
          <LightRays
            raysOrigin="top-right"
            raysColor="#ffffff"
            raysSpeed={1}
            lightSpread={1}
            rayLength={2}
            pulsating={false}
            fadeDistance={1.6}
            saturation={1}
            followMouse
            mouseInfluence={0.1}
            noiseAmount={0}
            distortion={0}
          />
        </div>
        <div
          ref={introRef}
          className={`max-w-3xl relative z-10 transition-all duration-1000 ease-out ${
            introVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-12">Oelrix Studio</p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-tight mb-8">
            We build digital presence that defines how brands are perceived.
          </h1>
          <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl">
            Every project we take on is designed to communicate clarity, credibility, and intent. We focus on structure, precision, and presentation so what people see reflects what your brand truly is.
          </p>
        </div>
      </section>

      <MarqueeTicker />

      {/* STATEMENT STRIP */}
      <section className="relative w-full pt-24 pb-24 px-6 sm:px-8 md:px-12 overflow-hidden">
        <div className="relative max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-end">
            {/* Text on left */}
            <div className="space-y-2">
              {["Clarity over noise.", "Structure over decoration.", "Intent over excess."].map(
                (line, index) => (
                  <p
                    key={line}
                    ref={(el) => {
                      statementRefs.current[index] = el;
                    }}
                    className={`text-6xl md:text-7xl lg:text-8xl font-bold leading-tight transition-all duration-1000 ease-out ${
                      statementVisible[index]
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                  >
                    {line}
                  </p>
                )
              )}
            </div>
            
            {/* Image on right */}
            <div className="relative h-[560px] sm:h-[680px] overflow-hidden rounded-2xl">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/service.png')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
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

      {/* CAPABILITY STATEMENT */}
      <section className="w-full pt-24 px-6 sm:px-8 md:px-12 flex justify-start">
        <div className="max-w-2xl space-y-6">
          {["We don't build volume.", "We build clarity."].map((line, index) => (
            <p
              key={line}
              ref={(el) => {
                capabilityRefs.current[index] = el;
              }}
              className={`text-left text-4xl sm:text-5xl md:text-6xl font-bold leading-tight transition-all duration-1000 ease-out ${
                capabilityVisible[index]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              {line}
            </p>
          ))}
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="w-full pb-24 px-6 sm:px-8 md:px-12 flex justify-start">
        <div
          ref={manifestoRef}
          className={`text-left max-w-2xl transition-all duration-1000 ease-out ${
            manifestoVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-2xl sm:text-3xl md:text-4xl leading-relaxed text-white/60">
            What we create is designed to be understood instantly, trusted immediately, and remembered effortlessly.
          </p>
        </div>
      </section>

      <section className="relative w-full overflow-hidden border-y border-white/10 px-6 py-28 sm:px-8 md:px-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.12),transparent_45%),radial-gradient(circle_at_85%_80%,rgba(255,255,255,0.08),transparent_45%)]" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
        <div
          ref={closingCtaRef}
          className="relative mx-auto w-full max-w-5xl rounded-3xl border border-white/15 bg-white/[0.03] px-8 py-12 text-center backdrop-blur-sm sm:px-12 sm:py-14"
        >
          <div className="mx-auto max-w-3xl">
            <p
              className={`${revealClasses(closingCtaVisible)} mb-5 text-xs uppercase tracking-[0.28em] text-white/45`}
              style={{ transitionDelay: "0ms" }}
            >
              Final Step
            </p>
            <h3
              className={`${revealClasses(closingCtaVisible)} text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl`}
              style={{ transitionDelay: "100ms" }}
            >
              Not sure which fits you?
            </h3>
            <p
              className={`${revealClasses(closingCtaVisible)} mt-5 text-base leading-relaxed text-white/70 sm:text-lg`}
              style={{ transitionDelay: "200ms" }}
            >
              Tell us about your project and we'll point you in the right direction.
            </p>
          </div>
          <div
            className={`${revealClasses(closingCtaVisible)} mt-8`}
            style={{ transitionDelay: "300ms" }}
          >
            <a
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full border border-white/80 bg-white px-8 py-3 text-sm font-medium uppercase tracking-[0.14em] text-black shadow-[0_8px_30px_rgba(255,255,255,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90 hover:shadow-[0_10px_35px_rgba(255,255,255,0.28)]"
            >
              Let's Talk
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

