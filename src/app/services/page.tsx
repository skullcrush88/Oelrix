"use client";

import { useEffect, useRef, useState } from "react";
import LightRays from "@/components/LightRays";
import Footer from "@/src/components/Footer";

export default function Services() {
  const [introVisible, setIntroVisible] = useState(false);
  const [statementVisible, setStatementVisible] = useState<boolean[]>([false, false, false]);
  const [blockVisible, setBlockVisible] = useState<boolean[]>([false, false, false]);
  const [capabilityVisible, setCapabilityVisible] = useState<boolean[]>([false, false]);
  const [manifestoVisible, setManifestoVisible] = useState(false);

  const introRef = useRef<HTMLDivElement>(null);
  const statementRefs = useRef<(HTMLParagraphElement | null)[]>([null, null, null]);
  const blockRefs = useRef<(HTMLDivElement | null)[]>([null, null, null]);
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
            const index = blockRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index >= 0) {
              setBlockVisible((prev) => {
                const next = [...prev];
                next[index] = true;
                return next;
              });
            }
          }
        });
      },
      { threshold: 0.3 }
    );
    blockRefs.current.forEach((ref) => ref && observer.observe(ref));
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
      <section className="relative w-full min-h-screen flex flex-col justify-center px-6 sm:px-8 md:px-12 py-24">
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

      {/* STATEMENT STRIP */}
      <section className="w-full py-28 px-6 sm:px-8 md:px-12 flex justify-start">
        <div className="max-w-2xl space-y-8">
          {["Clarity over noise.", "Structure over decoration.", "Intent over excess."].map(
            (line, index) => (
              <p
                key={line}
                ref={(el) => {
                  statementRefs.current[index] = el;
                }}
                className={`text-3xl sm:text-4xl md:text-5xl font-bold leading-tight transition-all duration-1000 ease-out ${
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
      </section>

      {/* BUILD BLOCKS */}
      <section className="w-full">
        {/* BLOCK 01 */}
        <div
          ref={(el) => {
            blockRefs.current[0] = el;
          }}
          className={`min-h-screen flex flex-col justify-center px-6 sm:px-8 md:px-12 py-24 border-b border-white/10 transition-all duration-1000 ease-out ${
            blockVisible[0] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-6">Build 01</p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
              Brand Websites
            </h2>
            <p className="text-base sm:text-lg text-white/70 leading-relaxed">
              Structured digital spaces built to present your brand with confidence and clarity. We design every detail to communicate value, establish trust, and reflect your true standard.
            </p>
          </div>
        </div>

        {/* BLOCK 02 */}
        <div
          ref={(el) => {
            blockRefs.current[1] = el;
          }}
          className={`min-h-screen flex flex-col justify-center px-6 sm:px-8 md:px-12 py-24 border-b border-white/10 transition-all duration-1000 ease-out ${
            blockVisible[1] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="max-w-2xl ml-auto">
            <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-6">Build 02</p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
              Focused Landing Pages
            </h2>
            <p className="text-base sm:text-lg text-white/70 leading-relaxed">
              High-clarity pages designed to guide attention, highlight your core value, and turn interest into action. Each element serves the conversion goal.
            </p>
          </div>
        </div>

        {/* BLOCK 03 */}
        <div
          ref={(el) => {
            blockRefs.current[2] = el;
          }}
          className={`min-h-screen flex flex-col justify-center px-6 sm:px-8 md:px-12 py-24 transition-all duration-1000 ease-out ${
            blockVisible[2] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-6">Build 03</p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
              Site Refinement
            </h2>
            <p className="text-base sm:text-lg text-white/70 leading-relaxed">
              We elevate existing digital presence through strategic redesign and structural refinement. Every update aligns perception with your brand's true standard.
            </p>
          </div>
        </div>
      </section>

      {/* CAPABILITY STATEMENT */}
      <section className="w-full py-32 px-6 sm:px-8 md:px-12 flex justify-start">
        <div className="max-w-2xl space-y-8">
          {["We don't build volume.", "We build clarity."].map((line, index) => (
            <p
              key={line}
              ref={(el) => {
                capabilityRefs.current[index] = el;
              }}
              className={`text-4xl sm:text-5xl md:text-6xl font-bold leading-tight transition-all duration-1000 ease-out ${
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
      <section className="w-full py-32 px-6 sm:px-8 md:px-12 flex justify-center">
        <div
          ref={manifestoRef}
          className={`text-center max-w-3xl transition-all duration-1000 ease-out ${
            manifestoVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-2xl sm:text-3xl md:text-4xl leading-relaxed text-white/80">
            What we create is designed to be understood instantly, trusted immediately, and remembered effortlessly.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}

