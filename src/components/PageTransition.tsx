"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const [active, setActive] = useState(false);
  const [showPage, setShowPage] = useState(true);
  const [label, setLabel] = useState("We Don't Build Average");
  const [bg, setBg] = useState("#000000");

  useEffect(() => {
    const start = (e: any) => {
      setLabel(e.detail?.label || "We Don't Build Average");
      setBg(e.detail?.color || "#000000");

      setActive(true);
      setShowPage(false);
    };

    const preview = () => {
      setLabel("Explore");
      setActive(true);

      setTimeout(() => {
        setActive(false);
      }, 400);
    };

    window.addEventListener("startTransition", start);
    window.addEventListener("previewTransition", preview);
    return () => {
      window.removeEventListener("startTransition", start);
      window.removeEventListener("previewTransition", preview);
    };
  }, []);

  return (
    <>
      {/* BACKGROUND (cinematic depth) */}
      <motion.div
        animate={{
          scale: active ? 0.96 : 1,
          filter: active ? "blur(10px) brightness(0.7)" : "blur(0px) brightness(1)",
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {showPage && children}
      </motion.div>

      <AnimatePresence
        onExitComplete={() => {
          setShowPage(true);
        }}
      >
        {active && (
          <motion.div
            key="overlay"
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black will-change-transform overflow-hidden"            style={{ backgroundColor: bg }}            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{
              duration: label === "Explore" ? 0.6 : 1.2,
              ease: [0.76, 0, 0.24, 1],
            }}
            onAnimationComplete={() => {
              setActive(false);
            }}
          >
            {/* FLUID WAVE */}
            <svg
              viewBox="0 0 1000 1000"
              preserveAspectRatio="none"
              className="absolute inset-0 w-full h-full"
            >
              <motion.path
                fill="black"
                initial={{
                  d: "M0,1000 Q500,1000 1000,1000 L1000,1000 L0,1000 Z",
                }}
                animate={{
                  d: "M0,550 Q500,-350 1000,550 L1000,1000 L0,1000 Z",
                }}
                exit={{
                  d: "M0,0 Q500,0 1000,0 L1000,1000 L0,1000 Z",
                }}
                transition={{
                  duration: label === "Explore" ? 0.6 : 1.2,
                  ease: [0.76, 0, 0.24, 1],
                }}
              />
            </svg>

            {/* TEXT BLOCK */}
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              className="z-10 text-center px-6"
            >
              <motion.h1
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 100,
                    filter: "blur(20px)",
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: {
                      duration: 0.7,
                      delay: 0.35,
                      ease: "easeOut",
                    },
                  },
                  exit: {
                    opacity: 0,
                    y: -80,
                    filter: "blur(10px)",
                    transition: {
                      duration: 0.4,
                    },
                  },
                }}
                className="text-white text-4xl md:text-7xl font-semibold tracking-tight"
                style={{
                  textShadow: "0px 0px 40px rgba(255,255,255,0.25)",
                }}
              >
                {label}
              </motion.h1>

              {/* CINEMATIC LINE */}
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "70%", opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="h-[1px] bg-white/30 mx-auto mt-6"
              />
            </motion.div>

            {/* LIGHT FLASH (very subtle) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.08 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 bg-white pointer-events-none"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
