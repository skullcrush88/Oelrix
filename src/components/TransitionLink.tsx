"use client";

import { useRouter } from "next/navigation";
import { ReactNode } from "react";

export default function TransitionLink({
  href,
  children,
  label,
  color = "#000000",
}: {
  href: string;
  children: ReactNode;
  label?: string;
  color?: string;
}) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    // Trigger sound
    window.dispatchEvent(new Event("playTransitionSound"));

    window.dispatchEvent(
      new CustomEvent("startTransition", {
        detail: { label, color },
      })
    );

    setTimeout(() => {
      router.push(href);
    }, 700);
  };

  const handleHover = () => {
    window.dispatchEvent(new Event("previewTransition"));
  };

  return (
    <a href={href} onClick={handleClick} onMouseEnter={handleHover}>
      {children}
    </a>
  );
}
