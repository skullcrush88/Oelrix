"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

// Words to italicize by default
const ITALIC_WORDS = ["Build", "Explore", "Discover", "Innovate", "Craft", "Design"];

// Function to render text with italic words
function RenderTextWithItalics({ text }: { text: string }) {
  const words = text.split(" ");
  const isWhoWeAre = text.includes("Who We Are");

  return (
    <>
      {words.map((word, index) => {
        const cleanWord = word.replace(/[^\w]/g, "");
        const shouldItalicize =
          (isWhoWeAre && cleanWord.toLowerCase() === "we") ||
          ITALIC_WORDS.some(
            (iWord) => cleanWord.toLowerCase() === iWord.toLowerCase()
          );

        return (
          <span key={index}>
            {shouldItalicize ? (
              <span className="italic text-white/75">{word}</span>
            ) : (
              word
            )}
            {index < words.length - 1 && " "}
          </span>
        );
      })}
    </>
  );
}

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
      {/* BACKGROUND (refined) */}
      <motion.div
        animate={{
          scale: active ? 0.98 : 1,
          filter: active ? "blur(6px) brightness(0.85)" : "blur(0px) brightness(1)",
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
              className="z-10 text-center px-6 flex flex-col items-center"
            >
              {/* HEADLINE */}
              <div className="relative inline-block leading-none">
                <motion.h1
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 80,
                      scale: 0.96,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: {
                        duration: 1,
                        delay: 0.35,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    },
                    exit: {
                      opacity: 0,
                      y: -60,
                      scale: 0.98,
                      transition: {
                        duration: 0.4,
                      },
                    },
                  }}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="font-serif leading-[1.05] tracking-[-0.02em] text-white text-center pr-2"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(1.75rem, 4vw, 3.5rem)",
                    textShadow: "0 0 20px rgba(255,255,255,0.05)",
                  }}
                >
                  <RenderTextWithItalics text={label} />
                </motion.h1>
              </div>

            </motion.div>

            {/* LIGHT FLASH (minimal) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.03 }}
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
