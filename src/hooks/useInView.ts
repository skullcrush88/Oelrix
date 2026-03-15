import { useEffect, useRef, useState } from "react";

type UseInViewOptions = {
  threshold?: number | number[];
  rootMargin?: string;
};

export function useInView<T extends HTMLElement>({
  threshold = 0.25,
  rootMargin = "0px",
}: UseInViewOptions = {}) {
  const ref = useRef<T | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(ref.current!);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, isInView };
}
