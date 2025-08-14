"use client";

import { LavaLamp } from "@/components/fluid-blob";

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center relative">
      <LavaLamp />
      <h1 className="text-7xl md:text-9xl font-extrabold tracking-tight mix-blend-exclusion text-white whitespace-nowrap z-10 uppercase">
        OELRIX
      </h1>
      <p className="text-lg md:text-xl text-center text-white mix-blend-exclusion max-w-2xl leading-relaxed z-10 mt-4">
        Launching soon. We are preparing to introduce innovative solutions to the market. Follow us on LinkedIn and X for the latest updates.
      </p>
      {/* Squircle SVG ClipPath Definition */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <clipPath id="squircleClip" clipPathUnits="objectBoundingBox">
            <path d="M 0,0.5 C 0,0 0,0 0.5,0 S 1,0 1,0.5 1,1 0.5,1 0,1 0,0.5"></path>
          </clipPath>
        </defs>
      </svg>
      <div className="relative mt-6 z-10 flex justify-center">
        <div className="grid grid-cols-2 gap-2 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl p-2" style={{maxWidth:'120px'}}>
          {/* LinkedIn Button */}
          <a
            href="https://www.linkedin.com/company/108120360/admin/dashboard/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ clipPath: 'url(#squircleClip)' }}
            className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg border border-blue-500/50 cursor-pointer transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2 hover:shadow-2xl"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          {/* X Button */}
          <a
            href="https://x.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ clipPath: 'url(#squircleClip)' }}
            className="w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center shadow-lg border border-gray-600/50 cursor-pointer transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2 hover:shadow-2xl"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.53 2.477h3.964l-8.63 9.86 10.16 12.186h-7.98l-6.25-7.51-7.15 7.51H.68l9.23-10.01L0 2.478h8.13l5.77 7.01zm-1.13 17.01h2.2L6.62 4.64H4.28z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
