import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const specs = [
  { label: "TOP SPEED", value: "200 MPH" },
  { label: "RANGE", value: "480 MI" },
  { label: "BATTERY", value: "120 KWH" },
  { label: "DRIVE", value: "AWD" },
  { label: "TORQUE", value: "1100 NM" },
  { label: "WEIGHT", value: "2250 KG" },
  { label: "CHARGE", value: "18 MIN" },
  { label: "SEATS", value: "4+1" },
];

const SpecsSection = () => {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section ref={ref} className="min-h-screen w-full bg-background flex flex-col justify-center px-8 md:px-16 lg:px-24 py-24">
      <h2
        className={`font-display text-[3rem] md:text-[5rem] lg:text-[6rem] text-foreground mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        THE NUMBERS
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4">
        {specs.map((spec, i) => (
          <SpecCell key={spec.label} spec={spec} isVisible={isVisible} delay={i * 80} />
        ))}
      </div>
    </section>
  );
};

const SpecCell = ({
  spec,
  isVisible,
  delay,
}: {
  spec: { label: string; value: string };
  isVisible: boolean;
  delay: number;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`velox-border flex flex-col justify-center px-6 py-10 md:py-14 transition-all duration-500 ${
        hovered ? "bg-surface" : "bg-transparent"
      } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className="font-mono-tech text-muted-foreground mb-3">{spec.label}</span>
      <span
        className={`font-display text-[2rem] md:text-[2.5rem] transition-colors duration-300 ${
          hovered ? "text-accent" : "text-foreground"
        }`}
      >
        {spec.value}
      </span>
    </div>
  );
};

export default SpecsSection;
