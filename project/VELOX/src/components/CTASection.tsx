import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const CTASection = () => {
  const { ref, isVisible } = useScrollReveal(0.3);
  const [email, setEmail] = useState("");

  return (
    <section
      ref={ref}
      className="flex min-h-screen w-full flex-col items-center justify-center bg-background px-8 text-center"
    >
      {/* Glow behind text */}
      <div
        className="absolute pointer-events-none animate-electric-glow"
        style={{
          width: "400px",
          height: "200px",
          background: "radial-gradient(ellipse, hsl(221 83% 53% / 0.15), transparent)",
          filter: "blur(60px)",
        }}
      />

      <h2
        className={`font-display relative text-[4rem] md:text-[6rem] lg:text-[8rem] text-foreground mb-12 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        JOIN THE MOVEMENT.
      </h2>

      <div
        className={`flex flex-col sm:flex-row items-center gap-4 w-full max-w-xl transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{ transitionDelay: "200ms" }}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="YOUR EMAIL"
          className="w-full bg-transparent border-b-2 border-foreground px-0 py-4 font-mono-tech text-foreground placeholder:text-muted-foreground outline-none focus:border-accent transition-colors duration-300"
        />
        <button className="velox-button shrink-0 text-foreground">
          SUBMIT
        </button>
      </div>
    </section>
  );
};

export default CTASection;
