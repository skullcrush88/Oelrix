import { useEffect, useRef } from "react";

const CrosshairCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      const isInteractive = el.closest("button, a, input, [role='button']");
      if (cursorRef.current && dotRef.current) {
        if (isInteractive) {
          cursorRef.current.style.width = "48px";
          cursorRef.current.style.height = "48px";
          dotRef.current.style.backgroundColor = "hsl(221, 83%, 53%)";
        } else {
          cursorRef.current.style.width = "24px";
          cursorRef.current.style.height = "24px";
          dotRef.current.style.backgroundColor = "hsl(0, 0%, 100%)";
        }
      }
    };

    const animate = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.12;
      pos.current.y += (target.current.y - pos.current.y) * 0.12;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`;
      }
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  // Hide on touch devices
  const isTouchDevice = typeof window !== "undefined" && "ontouchstart" in window;
  if (isTouchDevice) return null;

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed left-0 top-0 z-[9999] flex items-center justify-center border border-foreground transition-[width,height] duration-200"
      style={{ width: 24, height: 24, mixBlendMode: "difference" }}
    >
      <div
        ref={dotRef}
        className="h-[2px] w-[2px] bg-foreground transition-colors duration-200"
      />
    </div>
  );
};

export default CrosshairCursor;
