"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Waves from "./Waves";
import Footer from "./Footer";

type AboutSectionProps = {
  includeNav?: boolean;
};

const statementLines = [
  "Oelrix was built on a simple belief.",
  "Design is not decoration.",
  "It is perception.",
  "It is presence.",
  "It is trust.",
];

const layeredValues = [
  {
    title: "Precision",
    body: "We treat detail as a language. It is how the brand whispers before it speaks.",
  },
  {
    title: "Clarity",
    body: "We remove noise until meaning remains. What stays is what matters.",
  },
  {
    title: "Refinement",
    body: "We shape the surface until it feels inevitable, calm, and exact.",
  },
  {
    title: "Intent",
    body: "Every decision serves the message. Nothing exists without a reason.",
  },
];

const clientTypes = ["Brands", "Startups", "Businesses", "Creators"];
const actionWords = ["build", "create", "design", "deploy"];

const approachSteps = [
  {
    title: "Understand",
    body: "We study the signal a brand needs to send before we shape the form.",
    accent: "from-white/20 via-white/5 to-transparent",
  },
  {
    title: "Design",
    body: "We translate intention into structure, light, and rhythm.",
    accent: "from-white/10 via-white/15 to-transparent",
  },
  {
    title: "Refine",
    body: "We tune contrast, pace, and texture until the experience feels exact.",
    accent: "from-white/15 via-white/10 to-transparent",
  },
  {
    title: "Deliver",
    body: "We release with discipline, protecting the standard we set.",
    accent: "from-white/20 via-white/5 to-transparent",
  },
];

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

export default function AboutSection({ includeNav = false }: AboutSectionProps) {
  const [heroVisible, setHeroVisible] = useState(false);
  const [activeActionWord, setActiveActionWord] = useState(0);
  const [lineVisible, setLineVisible] = useState<boolean[]>(
    () => statementLines.map(() => false)
  );
  const [statementBgVisible, setStatementBgVisible] = useState(false);
  const [statementScaleRef, setStatementScaleRef] = useState(0);
  const [statementParallaxRef, setStatementParallaxRef] = useState(0);
  const [valueVisible, setValueVisible] = useState<boolean[]>(
    () => layeredValues.map(() => false)
  );
  const [finalVisible, setFinalVisible] = useState(false);
  const [activeApproach, setActiveApproach] = useState(0);
  const [heroParallax, setHeroParallax] = useState(0);
  const lineRefs = useRef<Array<HTMLParagraphElement | null>>([]);
  const valueCardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const finalRef = useRef<HTMLDivElement | null>(null);
  const approachRefs = useRef<Array<HTMLDivElement | null>>([]);
  const statementSectionRef = useRef<HTMLElement | null>(null);
  const statementBgRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setHeroVisible(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveActionWord((prev) => (prev + 1) % actionWords.length);
    }, 2600);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setLineVisible((prev) => {
          const next = [...prev];
          entries.forEach((entry) => {
            const index = lineRefs.current.indexOf(
              entry.target as HTMLParagraphElement
            );
            if (index >= 0 && entry.isIntersecting) {
              next[index] = true;
            }
          });
          return next;
        });
      },
      { threshold: 0.6 }
    );

    lineRefs.current.forEach((node) => node && observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!statementSectionRef.current) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatementBgVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(statementSectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setValueVisible((prev) => {
          const next = [...prev];
          entries.forEach((entry) => {
            const index = valueCardRefs.current.indexOf(
              entry.target as HTMLDivElement
            );
            if (index >= 0 && entry.isIntersecting) {
              next[index] = true;
            }
          });
          return next;
        });
      },
      { threshold: 0.35, rootMargin: "0px 0px -8% 0px" }
    );

    valueCardRefs.current.forEach((node) => node && observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!finalRef.current) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFinalVisible(true);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(finalRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = approachRefs.current.indexOf(
              entry.target as HTMLDivElement
            );
            if (index >= 0) {
              setActiveApproach(index);
            }
          }
        });
      },
      { threshold: 0.6 }
    );

    approachRefs.current.forEach((node) => node && observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const offset = clamp(1 - rect.top / window.innerHeight, 0, 1);
        setHeroParallax(offset * 24);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (statementBgRef.current) {
        const rect = statementBgRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const positionRatio = (viewportHeight - rect.top) / (viewportHeight + rect.height);
        const scale = clamp(0.8 + positionRatio * 0.4, 0.8, 1.2);
        const isMobile = window.innerWidth < 768;
        const parallax = (positionRatio - 0.5) * (isMobile ? 20 : 40);
        setStatementScaleRef(scale);
        setStatementParallaxRef(parallax);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleTileMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    target.style.transform = `rotateX(${(-y * 8).toFixed(2)}deg) rotateY(${(
      x * 10
    ).toFixed(2)}deg) translateY(-6px)`;
    target.style.boxShadow = `0 24px 60px rgba(0,0,0,0.45)`;
  };

  const handleTileLeave = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.currentTarget;
    target.style.transform = "rotateX(0deg) rotateY(0deg) translateY(0px)";
    target.style.boxShadow = "0 20px 50px rgba(0,0,0,0.35)";
  };

  return (
    <section id="about" className="relative w-screen overflow-hidden bg-[#050505] text-white">
      <style jsx>{`
        @keyframes gradientFloat {
          0% {
            transform: translate3d(0%, 0%, 0);
          }
          50% {
            transform: translate3d(-3%, -2%, 0);
          }
          100% {
            transform: translate3d(0%, 0%, 0);
          }
        }
        @keyframes letterRise {
          0% {
            letter-spacing: 0.6em;
            opacity: 0;
          }
          100% {
            letter-spacing: 0.18em;
            opacity: 1;
          }
        }
        @keyframes wordLiftFade {
          0% {
            opacity: 0;
            transform: translate3d(0, 18px, 0);
            filter: blur(5px);
          }
          20% {
            opacity: 1;
            transform: translate3d(0, 0, 0);
            filter: blur(0);
          }
          80% {
            opacity: 1;
            transform: translate3d(0, 0, 0);
            filter: blur(0);
          }
          100% {
            opacity: 0;
            transform: translate3d(0, -14px, 0);
            filter: blur(3px);
          }
        }
      `}</style>

      <div ref={heroRef} className="relative min-h-screen overflow-hidden">
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-[#0c0c0c]" />
          <Waves
            className="pointer-events-none z-20 mix-blend-screen opacity-95"
            lineColor="rgba(255,255,255,0.42)"
            backgroundColor="transparent"
            waveSpeedX={0.0125}
            waveSpeedY={0.01}
            waveAmpX={40}
            waveAmpY={20}
            friction={0.9}
            tension={0.01}
            maxCursorMove={120}
            xGap={12}
            yGap={36}
          />
          <div
            className="absolute -top-32 left-1/3 h-[28rem] w-[28rem] rounded-full bg-white/10 blur-[140px]"
            style={{ animation: "gradientFloat 18s ease-in-out infinite" }}
          />
          <div
            className="absolute bottom-0 right-10 h-[22rem] w-[22rem] rounded-full bg-white/5 blur-[120px]"
            style={{ animation: "gradientFloat 22s ease-in-out infinite" }}
          />
        </div>

        <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pb-24 pt-28">
          <div
            className={`max-w-3xl transition-all duration-1000 ease-out ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transform: `translateY(${heroParallax * -1}px) scale(${heroVisible ? 1 : 0.96})` }}
          >
            <p className="mb-4 text-xs uppercase tracking-[0.5em] text-white/60">About</p>
            <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
              At Oelrix
            </h1>
            <div className="mt-8 flex items-center gap-4 text-[clamp(2.25rem,7.5vw,5.25rem)] leading-[1.08] tracking-[-0.02em]">
              <span className="font-semibold tracking-tight text-white normal-case">We</span>
              <span className="relative inline-flex min-w-[3.2ch] items-center overflow-visible">
                <span
                  key={actionWords[activeActionWord]}
                  className="inline-block font-semibold leading-[1.05] text-white"
                  style={{ animation: "wordLiftFade 2.6s ease-in-out infinite" }}
                >
                  {actionWords[activeActionWord]}
                </span>
              </span>
            </div>
            <p className="mt-10 text-lg text-white/70 sm:text-xl">
          We are a studio devoted to presence, where design serves as the quiet authority that defines a brand’s perception. At Oelrix, we craft every detail with precision and purpose, ensuring what you present communicates credibility, clarity, and distinction.
            </p>
          </div>
        </div>
      </div>

      <section
        ref={statementSectionRef}
        className="relative w-full overflow-hidden pb-8 pt-12 sm:pb-16 sm:pt-24"
      >
        <div className="pointer-events-none absolute inset-0">
          <div
            ref={statementBgRef}
            className="absolute inset-0 bg-contain bg-center bg-no-repeat transition-all duration-[1600ms] ease-out"
            style={{
              backgroundImage: "url('/silver_surfer__.jpg')",
              transform: `scale(${statementScaleRef}) translateY(${statementParallaxRef}px) ${statementBgVisible
                ? "translate3d(0,0,0)"
                : "translate3d(0,40px,0)"}`,
            }}
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <div className="max-w-3xl space-y-6">
            {statementLines.map((line, index) => (
              <p
                key={line}
                ref={(node) => {
                  lineRefs.current[index] = node;
                }}
                className={`text-3xl font-light tracking-tight text-white/90 transition-all duration-700 ease-out sm:text-4xl ${
                  lineVisible[index]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 pt-16 pb-28">
        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.4em] text-white/50">Values</p>
          <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">Layered by intent.</h2>
        </div>
        <div className="grid gap-6">
          {layeredValues.map((value, index) => {
            const direction = index === 1 ? 1 : -1;
            const offset = direction * 100;
            return (
            <div
              key={value.title}
              ref={(node) => {
                valueCardRefs.current[index] = node;
              }}
              className="rounded-3xl bg-gradient-to-b from-white/20 via-white/10 to-white/15 p-[1px] shadow-[0_22px_60px_rgba(0,0,0,0.5)] transition-[transform,opacity,filter] duration-[1050ms]"
              style={{
                transform: valueVisible[index]
                  ? "translate3d(0,0,0)"
                  : `translate3d(${offset}px,0,0)`,
                opacity: valueVisible[index] ? 1 : 0,
                filter: valueVisible[index] ? "blur(0px)" : "blur(7px)",
                transitionDelay: `${index * 160}ms`,
                transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
                willChange: "transform, opacity, filter",
              }}
            >
              <div className="rounded-[calc(1.5rem-1px)] border border-white/10 bg-gradient-to-b from-[#121316] via-[#0d0f12] to-[#090a0c] p-8 backdrop-blur-2xl">
                <div className="flex items-start justify-between">
                  <h3 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                    {value.title}
                  </h3>
                  <span className="pt-1 text-xs uppercase tracking-[0.45em] text-white/35">
                    0{index + 1}
                  </span>
                </div>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/60">
                  {value.body}
                </p>
              </div>
            </div>
          );
          })}
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 py-24">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-white/50">Who we work with</p>
            <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">Partners with ambition.</h2>
          </div>
          <p className="max-w-md text-sm text-white/60">
            We partner with people who believe brand is felt before it is understood.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {clientTypes.map((type) => (
            <div
              key={type}
              onMouseMove={handleTileMove}
              onMouseLeave={handleTileLeave}
              className="group relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-transparent to-transparent p-8 transition-all duration-300"
              style={{ transformStyle: "preserve-3d", boxShadow: "0 20px 50px rgba(0,0,0,0.35)" }}
            >
              <div className="absolute inset-0 rounded-3xl bg-white/5 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative">
                <p className="text-xs uppercase tracking-[0.4em] text-white/50">Focus</p>
                <h3 className="mt-4 text-3xl font-semibold tracking-tight">
                  {type}
                </h3>
                <p className="mt-3 text-sm text-white/60">
                  Teams seeking a point of view, not just a layout.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 py-28">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-10">
            <p className="text-xs uppercase tracking-[0.4em] text-white/50">Approach</p>
            <h2 className="text-4xl font-semibold sm:text-5xl">A calm, precise process.</h2>
            <div className="space-y-16">
              {approachSteps.map((step, index) => (
                <div
                  key={step.title}
                  ref={(node) => {
                    approachRefs.current[index] = node;
                  }}
                  className="max-w-lg"
                >
                  <p className="text-xs uppercase tracking-[0.4em] text-white/40">
                    Step 0{index + 1}
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm text-white/60 sm:text-base">
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="sticky top-24">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-10 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
                <div
                  className={`mb-6 h-40 w-full rounded-2xl bg-gradient-to-br ${
                    approachSteps[activeApproach].accent
                  }`}
                />
                <p className="text-xs uppercase tracking-[0.4em] text-white/50">Now</p>
                <h3 className="mt-3 text-3xl font-semibold">
                  {approachSteps[activeApproach].title}
                </h3>
                <p className="mt-4 text-sm text-white/60 sm:text-base">
                  {approachSteps[activeApproach].body}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-6 pb-28">
        <div
          ref={finalRef}
          className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-gradient-to-br from-black via-black to-white/5 px-8 py-20 text-center shadow-[0_30px_80px_rgba(0,0,0,0.5)]"
        >
          <div className="absolute inset-0 -z-10 rounded-3xl bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_65%)]" />
          <p
            className={`text-3xl font-semibold uppercase tracking-[0.18em] transition-all duration-1000 sm:text-4xl ${
              finalVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{ animation: finalVisible ? "letterRise 1.2s ease-out" : "none" }}
          >
            Presence is the product.
          </p>
        </div>
      </section>

      <Footer />
    </section>
  );
}

