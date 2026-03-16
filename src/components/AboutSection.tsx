"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Waves from "./Waves";
import Footer from "./Footer";
import SmoothScroll from "./SmoothScroll";
import { useInView } from "@/src/hooks/useInView";

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

const clientTypes = [
  { name: "Brands", description: "Established names ready to be seen differently" },
  { name: "Startups", description: "New ventures that need presence from day one" },
  { name: "Businesses", description: "Growing companies outpacing their current site" },
  { name: "Creators", description: "Individuals who treat their work as a brand" },
];
const actionWords = ["build", "create", "design", "deploy"];

const approachSteps = [
  {
    title: "Understand",
    body: "We study the signal a brand needs to send before we shape the form.",
    accent: "from-white/20 via-white/5 to-transparent",
    image: "/Understand.png",
  },
  {
    title: "Design",
    body: "We translate intention into structure, light, and rhythm.",
    accent: "from-white/10 via-white/15 to-transparent",
    image: "/Design.png",
  },
  {
    title: "Refine",
    body: "We tune contrast, pace, and texture until the experience feels exact.",
    accent: "from-white/15 via-white/10 to-transparent",
    image: "/Refine.png",
  },
  {
    title: "Deliver",
    body: "We release with discipline, protecting the standard we set.",
    accent: "from-white/20 via-white/5 to-transparent",
    image: "/Deliver.png",
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
  const [hoveredApproachStep, setHoveredApproachStep] = useState(0);
  const [approachFadeIn, setApproachFadeIn] = useState(true);
  const [heroParallax, setHeroParallax] = useState(0);
  const autoRotateRef = useRef<number | null>(null);
  const lineRefs = useRef<Array<HTMLParagraphElement | null>>([]);
  const valueCardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const finalRef = useRef<HTMLDivElement | null>(null);

  const statementSectionRef = useRef<HTMLElement | null>(null);
  const statementBgRef = useRef<HTMLDivElement | null>(null);

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
    const startAutoRotate = () => {
      autoRotateRef.current = window.setInterval(() => {
        setApproachFadeIn(false);
        setTimeout(() => {
          setActiveApproach((prev) => (prev + 1) % approachSteps.length);
          setApproachFadeIn(true);
        }, 300);
      }, 4000);
    };

    startAutoRotate();
    return () => {
      if (autoRotateRef.current) clearInterval(autoRotateRef.current);
    };
  }, []);

  const handlePrevApproach = () => {
    if (autoRotateRef.current) clearInterval(autoRotateRef.current);
    setApproachFadeIn(false);
    setTimeout(() => {
      setActiveApproach((prev) => (prev - 1 + approachSteps.length) % approachSteps.length);
      setApproachFadeIn(true);
    }, 300);
  };

  const handleNextApproach = () => {
    if (autoRotateRef.current) clearInterval(autoRotateRef.current);
    setApproachFadeIn(false);
    setTimeout(() => {
      setActiveApproach((prev) => (prev + 1) % approachSteps.length);
      setApproachFadeIn(true);
    }, 300);
  };

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
    <SmoothScroll>
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
        <div className="relative z-10 mx-auto max-w-6xl px-6 flex flex-col sm:block">
          <div className="max-w-none sm:max-w-3xl space-y-3 sm:space-y-6 w-1/2 sm:w-auto text-sm sm:text-base">
            {statementLines.map((line, index) => (
              <p
                key={line}
                ref={(node) => {
                  lineRefs.current[index] = node;
                }}
                className={`text-lg sm:text-4xl font-light tracking-tight text-white/90 transition-all duration-700 ease-out ${
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

      <section className="relative w-full overflow-hidden">
        <div className="relative w-full px-8 md:px-16 lg:px-24 py-24 space-y-6">
          <p className="text-xs uppercase tracking-[0.5em] text-white/40">Values</p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight max-w-4xl">Layered by intent.</h2>
        </div>
        <div className="w-full">
          {layeredValues.map((value, index) => (
            <div
              key={value.title}
              ref={(node) => {
                valueCardRefs.current[index] = node;
              }}
              className={`group relative min-h-screen overflow-hidden flex flex-col justify-center items-start px-8 md:px-16 lg:px-24 border-b border-white/10 transition-all duration-700 ease-out ${
                valueVisible[index] ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <p className="absolute top-12 left-8 md:left-16 lg:left-24 text-xs uppercase tracking-widest text-white/20">
                0{index + 1}
              </p>

              <h3 className="text-[15vw] font-bold leading-none text-white">
                {value.title}
              </h3>

              <p className="absolute bottom-12 right-8 md:right-16 lg:right-24 max-w-sm text-right text-sm text-white/0 group-hover:text-white/60 transition-all duration-700">
                {value.body}
              </p>

              <div className="absolute bottom-0 left-0 h-px bg-white/20 w-0 group-hover:w-full transition-all duration-700" />
            </div>
          ))}
        </div>
      </section>

      <section className="relative w-full px-6 py-24 pb-24 border-t border-white/10">
        <div className="mb-16 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between max-w-6xl mx-auto">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-white/50">Who we work with</p>
            <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">Partners with ambition.</h2>
          </div>
          <p className="max-w-md text-sm text-white/60">
            We partner with people who believe brand is felt before it is understood.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 max-w-6xl mx-auto">
          {clientTypes.map((type, index) => (
            <div
              key={type.name}
              className={`group relative overflow-hidden transition-all duration-700 ease-out ${
                valueVisible[index] ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms`, aspectRatio: '4/3' }}
            >
              <Image
                src={["/brands.jpg", "/startups.jpg", "/businesses.jpg", "/creators.jpg"][index]}
                alt={type.name}
                fill
                className="object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-500" />

              <div
                className="absolute bottom-0 left-0 right-0 h-2/3 transition-all duration-500"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)' }}
              />

              <h3 className="absolute bottom-8 left-8 text-3xl font-bold text-white group-hover:-translate-y-8 transition-all duration-500">
                {type.name}
              </h3>

              <p className="absolute bottom-8 left-8 text-sm text-white/70 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                {type.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 py-28 pb-24 border-t border-white/10">
        <div className="space-y-10">
          <p className="text-xs uppercase tracking-[0.4em] text-white/50">Approach</p>
          <h2 className="text-4xl font-semibold sm:text-5xl">A calm, precise process.</h2>
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            {/* Left side - Steps list */}
            <div className="w-full lg:w-1/2 space-y-0 border-t border-white/10">
              {approachSteps.map((step, index) => (
                <div
                  key={step.title}
                  onMouseEnter={() => setHoveredApproachStep(index)}
                  className={`cursor-pointer transition-all duration-300 ease-out py-6 border-b border-white/10 group hover:bg-white/[0.01] px-6 -mx-6 ${
                    valueVisible[index] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                  }`}
                  style={{ transitionDelay: `${index * 120}ms` }}
                >
                  <p className="text-xs uppercase tracking-[0.4em] text-white/20 group-hover:text-white/40 transition-colors duration-300">
                    Step 0{index + 1}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight group-hover:scale-[1.02] transition-transform duration-300 origin-left text-white/80 group-hover:text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/60 sm:text-base">
                    {step.body}
                  </p>
                </div>
              ))}
            </div>

            {/* Right side - Dynamic card */}
            <div className="w-full lg:w-1/2 sticky top-32">
              <div className="rounded-none border border-white/10 overflow-hidden bg-black/40 backdrop-blur-sm">
                {/* Image container */}
                <div className="relative w-full aspect-square overflow-hidden bg-white/5">
                  <Image
                    key={hoveredApproachStep}
                    src={["/Understand.png", "/Design.png", "/Refine.png", "/Deliver.png"][hoveredApproachStep]}
                    alt={approachSteps[hoveredApproachStep]?.title || "Step"}
                    fill
                    className="object-cover transition-opacity duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>

                {/* Info strip */}
                <div className="bg-black/80 px-6 py-4 border-t border-white/10">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                    {String(hoveredApproachStep + 1).padStart(2, '0')} — Step
                  </p>
                  <h4 className="mt-2 text-xl font-semibold text-white">
                    {approachSteps[hoveredApproachStep]?.title}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      </section>
    </SmoothScroll>
  );
}


