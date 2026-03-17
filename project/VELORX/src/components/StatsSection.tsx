import { useScrollReveal } from "../hooks/useScrollReveal";
import { useCountUp } from "../hooks/useCountUp";

const stats = [
  { value: 2.4, label: "0–60 SECONDS", isDecimal: true },
  { value: 480, label: "MILE RANGE", isDecimal: false },
  { value: 1020, label: "HORSEPOWER", isDecimal: false },
  { value: 2026, label: "DELIVERY", isDecimal: false },
];

const StatsSection = () => {
  const { ref, isVisible } = useScrollReveal(0.3);

  return (
    <section ref={ref} className="w-full bg-background">
      <div className="grid grid-cols-2 md:grid-cols-4">
        {stats.map((stat, i) => (
          <StatItem key={stat.label} stat={stat} isVisible={isVisible} index={i} />
        ))}
      </div>
    </section>
  );
};

const StatItem = ({
  stat,
  isVisible,
  index,
}: {
  stat: { value: number; label: string; isDecimal: boolean };
  isVisible: boolean;
  index: number;
}) => {
  const count = useCountUp(stat.value, isVisible, 2000, stat.isDecimal);

  return (
    <div
      className={`flex flex-col items-center justify-center py-16 md:py-24 ${index < 3 ? "border-r border-border" : ""} ${index < 2 ? "border-b border-border md:border-b-0" : index >= 2 ? "border-b border-border md:border-b-0" : ""}`}
    >
      <span className="font-display text-[4rem] md:text-[5rem] lg:text-[6rem] text-foreground leading-none">
        {stat.isDecimal ? count.toFixed(1) : count}
      </span>
      <span className="font-mono-tech mt-4 text-muted-foreground">
        {stat.label}
      </span>
    </div>
  );
};

export default StatsSection;
