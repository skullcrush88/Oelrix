import { useEffect, useState } from "react";
import { useParallax } from "../hooks/useParallax";

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);
  const parallaxRef = useParallax(0.3);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const words1 = ["SILENCE", "IS", "THE"];
  const words2 = ["NEW", "SPEED."];

  return (
    <section className="relative flex h-screen w-full items-center overflow-hidden bg-background">
      {/* Car image - right side */}
      <div className="absolute inset-0" ref={parallaxRef}>
        <img
          src="/velorx/hero-car.jpg"
          alt="VELOX electric vehicle side profile emerging from darkness"
          className={`h-full w-full object-cover transition-opacity duration-[1500ms] ${loaded ? "opacity-100" : "opacity-0"}`}
          style={{
            maskImage: "linear-gradient(to right, transparent 0%, black 40%, black 100%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 40%, black 100%)",
          }}
        />
      </div>

      {/* Atmospheric blue glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 60% at 70% 50%, hsl(221 83% 53% / 0.08), transparent)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full px-8 md:px-16 lg:px-24">
        {/* Wordmark */}
        <p className="font-mono-tech mb-16 text-muted-foreground">VELOX</p>

        {/* Main heading */}
        <h1 className="font-display mb-6">
          <span className="flex flex-wrap gap-x-[0.3em]">
            {words1.map((word, i) => (
              <span key={word} className="overflow-hidden inline-block">
                <span
                  className={`inline-block text-[12vw] md:text-[10vw] lg:text-[8vw] text-foreground ${loaded ? "animate-word-reveal" : "opacity-0 translate-y-full"}`}
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  {word}
                </span>
              </span>
            ))}
          </span>
          <span className="flex flex-wrap gap-x-[0.3em]">
            {words2.map((word, i) => (
              <span key={word} className="overflow-hidden inline-block">
                <span
                  className={`inline-block text-[12vw] md:text-[10vw] lg:text-[8vw] text-foreground ${loaded ? "animate-word-reveal" : "opacity-0 translate-y-full"}`}
                  style={{ animationDelay: `${(i + words1.length) * 80}ms` }}
                >
                  {word}
                </span>
              </span>
            ))}
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className={`font-mono-tech mb-12 text-accent transition-all duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
          style={{ transitionDelay: "600ms" }}
        >
          PURE ELECTRIC · 2026
        </p>

        {/* CTA Button */}
        <button
          className={`velox-button text-foreground transition-all duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
          style={{ transitionDelay: "800ms" }}
        >
          RESERVE →
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
