"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type ContactSectionProps = {
  includeNav?: boolean;
};

const contactOptions = [
  {
    label: "Email",
    href: "mailto:contact@oelrix.com",
    sublabel: "contact@oelrix.com",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
        <path
          d="M3 6.75h18v10.5H3V6.75zm1.5 1.5v7.5h15v-7.5l-7.5 4.5-7.5-4.5z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com/",
    sublabel: "@oelrix",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
        <path
          d="M7 3h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4zm5 5a5 5 0 100 10 5 5 0 000-10zm6-1.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/",
    sublabel: "Direct line",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
        <path
          d="M12 3a9 9 0 00-7.8 13.5L3 21l4.7-1.2A9 9 0 1012 3zm4.6 12.2c-.2.5-1 .9-1.6 1-.4.1-1 .1-1.7-.1-2.1-.7-3.7-2.4-4.5-4.3-.3-.7-.3-1.3-.2-1.7.1-.6.6-1.3 1.2-1.5.3-.1.6-.1.8.1.2.2.6.9.7 1.1.1.3.1.5 0 .7-.2.2-.3.4-.5.6-.1.1-.2.3-.1.6.2.6.8 1.6 1.8 2.5 1 .9 2.1 1.2 2.7 1.1.2 0 .4-.2.5-.3.2-.2.5-.8.7-1 .2-.2.4-.2.7-.1.3.1 1.7.8 1.9.9.2.1.4.2.4.4-.1.2-.2.5-.3.9z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/",
    sublabel: "Oelrix Studio",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
        <path
          d="M6.5 9H3.8v11h2.7V9zM5.1 4.1a1.6 1.6 0 100 3.2 1.6 1.6 0 000-3.2zM20.2 14.2c0-3-1.6-5.2-4.7-5.2-1.5 0-2.5.8-2.9 1.6V9H9.9v11h2.7v-5.9c0-1.6.3-3.1 2.2-3.1 1.9 0 1.9 1.8 1.9 3.2V20h2.7v-5.8z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

export default function ContactSection({ includeNav = false }: ContactSectionProps) {
  const [heroVisible, setHeroVisible] = useState(false);
  const [emailVisible, setEmailVisible] = useState(false);
  const emailRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setHeroVisible(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!emailRef.current) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setEmailVisible(true);
        }
      },
      { threshold: 0.6 }
    );
    observer.observe(emailRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="relative min-h-screen w-screen overflow-hidden bg-[#050505] text-white">
      <style jsx>{`
        @keyframes glowFloat {
          0% {
            transform: translate3d(0%, 0%, 0);
          }
          50% {
            transform: translate3d(-3%, -2%, 0);
          }
          100% {
            transform: translate3d(0%, 0%, 0);
          }
        }
        @keyframes letterRise {
          0% {
            letter-spacing: 0.6em;
            opacity: 0;
          }
          100% {
            letter-spacing: 0.18em;
            opacity: 1;
          }
        }
      `}</style>

      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-[#0a0a0a]" />
        <div
          className="absolute -top-40 left-1/4 h-[28rem] w-[28rem] rounded-full bg-white/10 blur-[140px]"
          style={{ animation: "glowFloat 18s ease-in-out infinite" }}
        />
        <div
          className="absolute bottom-0 right-10 h-[22rem] w-[22rem] rounded-full bg-white/5 blur-[120px]"
          style={{ animation: "glowFloat 22s ease-in-out infinite" }}
        />
      </div>

      <div className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 pb-20 pt-28 text-center">
        <div
          className={`transition-all duration-1000 ease-out ${
            heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
            Let’s Work Together
          </h1>
          <p className="mt-6 text-lg text-white/70 sm:text-xl">
            If you’re ready to elevate your online presence, we’d love to hear from you.
          </p>
        </div>
      </div>

      <section className="relative mx-auto max-w-5xl px-6 pb-24">
        <div className="grid gap-6 md:grid-cols-2">
          {contactOptions.map((option) => (
            <a
              key={option.label}
              href={option.href}
              target={option.href.startsWith("http") ? "_blank" : undefined}
              rel={option.href.startsWith("http") ? "noreferrer" : undefined}
              className="group relative flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 p-8 text-left transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01]"
            >
              <div className="absolute inset-0 rounded-3xl bg-white/5 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-white/80">
                  {option.icon}
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-white/50">{option.label}</p>
                  <p className="mt-2 text-lg font-semibold text-white">{option.sublabel}</p>
                </div>
              </div>
              <span className="relative text-sm uppercase tracking-[0.4em] text-white/50">Open</span>
            </a>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-5xl px-6 pb-24 text-center">
        <div
          ref={emailRef}
          className={`transition-all duration-1000 ${
            emailVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <p
            className="text-2xl font-semibold uppercase tracking-[0.18em] text-white/90 sm:text-4xl"
            style={{ animation: emailVisible ? "letterRise 1.2s ease-out" : "none" }}
          >
            contact@oelrix.com
          </p>
        </div>
      </section>

      <section className="relative px-6 pb-28 text-center">
        <p className="text-lg text-white/60 transition-opacity duration-1000">
          We work with brands that value presence.
        </p>
      </section>
    </section>
  );
}
