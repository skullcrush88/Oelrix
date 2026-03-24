import { useScrollReveal } from "../hooks/useScrollReveal";
import { useParallax } from "../hooks/useParallax";

interface FeatureSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reversed?: boolean;
}

const FeatureSection = ({ title, description, imageSrc, imageAlt, reversed = false }: FeatureSectionProps) => {
  const { ref, isVisible } = useScrollReveal(0.2);
  const parallaxRef = useParallax(0.15);

  const imageBlock = (
    <div className="relative h-[50vh] md:h-screen w-full overflow-hidden">
      <div ref={parallaxRef} className="absolute inset-0">
        <img
          src={imageSrc}
          alt={imageAlt}
          className={`h-full w-full object-cover transition-transform duration-[1200ms] ${isVisible ? "scale-100" : "scale-110"}`}
        />
      </div>
    </div>
  );

  const textBlock = (
    <div
      className={`flex h-[50vh] md:h-screen w-full flex-col justify-center px-8 md:px-16 lg:px-24 bg-background ${
        isVisible
          ? reversed
            ? "animate-slide-left"
            : "animate-slide-right"
          : "opacity-0"
      }`}
    >
      <h2 className="font-display text-[3rem] md:text-[4rem] lg:text-[5rem] text-foreground mb-6">
        {title}
      </h2>
      <p className="text-muted-foreground max-w-md leading-relaxed text-base">
        {description}
      </p>
    </div>
  );

  return (
    <section ref={ref} className="flex w-full flex-col md:flex-row">
      {reversed ? (
        <>
          {textBlock}
          {imageBlock}
        </>
      ) : (
        <>
          {imageBlock}
          {textBlock}
        </>
      )}
    </section>
  );
};

export default FeatureSection;
