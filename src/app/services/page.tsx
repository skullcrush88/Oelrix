"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

const services = [
  {
    title: "Business Websites",
    description:
      "Multi-page sites with clear IA, refined layout systems, and strong brand presentation.",
  },
  {
    title: "Landing Pages",
    description:
      "Focused landing experiences with crisp messaging, bold CTAs, and campaign-ready flow.",
  },
  {
    title: "Website Redesign",
    description:
      "Rebuilds that clean up visuals, update structure, and modernize the user journey.",
  },
];

const servicesOverview = [
  {
    title: "Strategy Sprint",
    description:
      "Rapid discovery to align goals, audience, and content before design begins.",
  },
  {
    title: "UX & Content",
    description:
      "Information architecture, wireflows, and copy guidance for clear user paths.",
  },
  {
    title: "UI System",
    description:
      "A scalable visual system with components, tokens, and layout rules.",
  },
];

const introLines = [
  "Clear scope, clean systems, and measurable outcomes.",
  "Every deliverable is mapped to a client goal.",
  "You get a site that performs, not just a site that looks good.",
];

const processSteps = ["Discovery", "Design", "Build", "Launch"];
const processStepColors = [
  "text-blue-400",
  "text-yellow-400",
  "text-red-400",
  "text-green-400",
];

export default function Services() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeService, setActiveService] = useState(0);

  const introRefs = useRef<Array<HTMLParagraphElement | null>>([]);
  const stepRefs = useRef<Array<HTMLDivElement | null>>([]);
  const detailRefs = useRef<Array<HTMLDivElement | null>>([]);
  const closingRef = useRef<HTMLDivElement | null>(null);

  const [introVisible, setIntroVisible] = useState<boolean[]>(
    () => introLines.map(() => false)
  );
  const [stepsVisible, setStepsVisible] = useState<boolean[]>(
    () => processSteps.map(() => false)
  );
  const [closingVisible, setClosingVisible] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsLoaded(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const introObserver = new IntersectionObserver(
      (entries) => {
        setIntroVisible((prev) => {
          const next = [...prev];
          for (const entry of entries) {
            const index = introRefs.current.indexOf(
              entry.target as HTMLParagraphElement
            );
            if (index >= 0 && entry.isIntersecting) {
              next[index] = true;
            }
          }
          return next;
        });
      },
      { threshold: 0.6 }
    );

    introRefs.current.forEach((node) => node && introObserver.observe(node));

    return () => introObserver.disconnect();
  }, []);

  useEffect(() => {
    const stepsObserver = new IntersectionObserver(
      (entries) => {
        setStepsVisible((prev) => {
          const next = [...prev];
          for (const entry of entries) {
            const index = stepRefs.current.indexOf(
              entry.target as HTMLDivElement
            );
            if (index >= 0 && entry.isIntersecting) {
              next[index] = true;
            }
          }
          return next;
        });
      },
      { threshold: 0.4 }
    );

    stepRefs.current.forEach((node) => node && stepsObserver.observe(node));

    return () => stepsObserver.disconnect();
  }, []);

  useEffect(() => {
    const detailObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = detailRefs.current.indexOf(
              entry.target as HTMLDivElement
            );
            if (index >= 0) {
              setActiveService(index);
            }
          }
        });
      },
      {
        threshold: 0.6,
        rootMargin: "-10% 0% -40% 0%",
      }
    );

    detailRefs.current.forEach((node) => node && detailObserver.observe(node));

    return () => detailObserver.disconnect();
  }, []);

  useEffect(() => {
    if (!closingRef.current) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setClosingVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(closingRef.current);
    return () => observer.disconnect();
  }, []);

  const detailCardClasses = useMemo(
    () =>
      services.map((_, index) => {
        const isActive = index === activeService;
        const isBefore = index < activeService;
        return [
          "transition-all duration-700 ease-out",
          "rounded-3xl border border-white/10 bg-white/5",
          "backdrop-blur-xl shadow-[0_30px_80px_rgba(0,0,0,0.4)]",
          isActive
            ? "opacity-100 scale-100 translate-y-0 z-30"
            : isBefore
            ? "opacity-40 scale-95 -translate-y-6 z-10"
            : "opacity-60 scale-95 translate-y-6 z-20",
        ].join(" ");
      }),
    [activeService]
  );

  const headingFontClass = `font-black uppercase services-heading`;

  return (
    <main className="bg-[#090909] text-white">
      <style jsx global>{`
        @keyframes ambientShift {
          0% {
            transform: translate3d(0%, 0%, 0);
          }
          50% {
            transform: translate3d(-4%, -2%, 0);
          }
          100% {
            transform: translate3d(0%, 0%, 0);
          }
        }
        .services-heading {
          letter-spacing: 0.06em;
        }
      `}</style>

      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10 opacity-70"
          style={{
            background:
              "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.06), transparent 45%), radial-gradient(circle at 80% 10%, rgba(255,255,255,0.05), transparent 40%), radial-gradient(circle at 50% 80%, rgba(255,255,255,0.08), transparent 55%)",
            animation: "ambientShift 18s ease-in-out infinite",
          }}
        />

        <div className="mx-auto flex min-h-[70vh] max-w-6xl flex-col items-center justify-center px-6 py-24 text-center">
          <p
            className={`mb-6 text-sm uppercase tracking-[0.4em] text-white/50 transition-all duration-700 ease-out ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Oelrix Studio
          </p>
          <h1
            className={`${headingFontClass} w-fit mx-auto text-6xl leading-[1.02] tracking-tight text-white md:text-8xl lg:text-9xl transition-all duration-700 ease-out ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Our Services.
          </h1>
          <p
            className={`mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg transition-all duration-700 ease-out ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Oelrix delivers focused web work with clear outputs, timelines, and launch-ready assets.
          </p>
        </div>
      </section>

      <section className="relative mx-auto max-w-5xl px-6 pb-16 pt-10">
        <div className="sticky top-24 space-y-8">
          {introLines.map((line, index) => (
            <p
              key={line}
              ref={(node) => {
                introRefs.current[index] = node;
              }}
              className={`text-2xl leading-relaxed text-white/80 md:text-3xl transition-all duration-700 ease-out ${
                introVisible[index]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              {line}
            </p>
          ))}
        </div>
        <div className="h-24" aria-hidden="true" />
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-28">
        <div className="grid gap-8 md:grid-cols-3">
          {servicesOverview.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-white/30"
            >
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
              </div>
              <h3 className={`${headingFontClass} relative text-3xl text-white md:text-4xl`}>
                {service.title}
              </h3>
              <p className="relative mt-4 text-sm leading-relaxed text-white/70">
                {service.description}
              </p>
              <span className="relative mt-10 inline-flex text-xs uppercase tracking-[0.3em] text-white/50">
                Explore
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-5xl px-6 pb-32">
        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.4em] text-white/50">
            Focused Delivery
          </p>
          <h2 className={`${headingFontClass} mt-4 text-5xl text-white md:text-6xl`}>
            What clients receive, clearly defined.
          </h2>
        </div>

        <div className="space-y-12">
          {services.map((service, index) => (
            <div
              key={`${service.title}-detail`}
              ref={(node) => {
                detailRefs.current[index] = node;
              }}
              className={detailCardClasses[index]}
            >
              <div className="px-8 py-10 md:px-12">
                <p className="text-xs uppercase tracking-[0.4em] text-white/40">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className={`${headingFontClass} mt-4 text-4xl text-white md:text-5xl`}>
                  {service.title}
                </h3>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-32">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.4em] text-white/50">
            Process
          </p>
          <h2 className={`${headingFontClass} mt-4 text-5xl text-white md:text-6xl`}>
            Clarity from first call to launch.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-4">
          {processSteps.map((step, index) => (
            <div
              key={step}
              ref={(node) => {
                stepRefs.current[index] = node;
              }}
              className={`rounded-2xl border border-white/10 bg-white/5 px-6 py-8 text-center transition-all duration-700 ease-out ${
                stepsVisible[index]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              <p className="text-xs uppercase tracking-[0.4em] text-white/40">
                Step {index + 1}
              </p>
              <p
                className={`${headingFontClass} mt-4 text-2xl md:text-3xl ${
                  processStepColors[index] || "text-white"
                }`}
              >
                {step}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-24">
        <div
          ref={closingRef}
          className={`rounded-3xl border border-white/10 bg-white/5 px-8 py-16 text-center transition-all duration-700 ease-out ${
            closingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className={`${headingFontClass} text-4xl leading-[1.1] text-white md:text-5xl`}>
            We ship websites that feel premium and work on day one.
          </p>
        </div>
      </section>
    </main>
  );
}
