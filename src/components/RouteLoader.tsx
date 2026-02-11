"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Loader from "./Loader";
import { LavaLamp } from "../../components/fluid-blob";

export default function RouteLoader() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const firstRunRef = useRef(true);

  useEffect(() => {
    if (firstRunRef.current) {
      firstRunRef.current = false;
      return;
    }

    // Skip loading screen for contact page
    if (pathname === '/contact') {
      return;
    }

    setShow(true);
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      setShow(false);
    }, 800);

    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, [pathname]);

  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50">
      <div className="min-h-screen w-screen relative text-white overflow-hidden">
        <LavaLamp />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 flex min-h-screen items-center justify-center">
          <Loader scale={0.7} />
        </div>
      </div>
    </div>
  );
}
