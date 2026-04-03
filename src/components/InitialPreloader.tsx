"use client";

import { useEffect, useState, useRef } from "react";
import { preloaderFrames } from "./PreloaderFrames";

export default function InitialPreloader() {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const totalFrames = preloaderFrames.length;

  useEffect(() => {
    // Optional: Add session storage check if you only want this to run once per user session
    // const hasSeenPreloader = sessionStorage.getItem("hasSeenPreloader");
    // if (hasSeenPreloader) {
    //   setIsCompleted(true);
    //   return;
    // }

    // Preload important images right away
    const images: HTMLImageElement[] = [];
    preloaderFrames.forEach((src) => {
      const img = new Image();
      img.src = src;
      images.push(img);
    });

    let frameIndex = 0;
    // 30 FPS playback for 81 frames = ~2.7 seconds duration
    const fps = 30;
    const interval = 1000 / fps;
    let timerId: NodeJS.Timeout;

    const playSequence = () => {
      timerId = setInterval(() => {
        frameIndex++;
        if (frameIndex >= totalFrames - 1) {
          clearInterval(timerId);
          setCurrentFrame(totalFrames - 1);
          
          // Hold the last frame briefly, then fade out
          setTimeout(() => {
            setIsFadingOut(true);
            setTimeout(() => {
              setIsCompleted(true);
              // sessionStorage.setItem("hasSeenPreloader", "true");
            }, 600); // Wait for fade out transition (0.6s)
          }, 400); 
        } else {
          setCurrentFrame(frameIndex);
        }
      }, interval);
    };

    // Tiny delay to let browser breathe, then start sequence
    const startDelay = setTimeout(playSequence, 100);

    return () => {
      clearInterval(timerId);
      clearTimeout(startDelay);
    };
  }, [totalFrames]);

  if (isCompleted) return null;

  return (
    <div
      className={`fixed inset-0 z-[100000] flex items-center justify-center transition-opacity duration-700 ease-in-out bg-[#020202] ${
        isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"
      }`}
    >
      <img
        src={preloaderFrames[currentFrame]}
        alt="Loading..."
        className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 object-contain"
        style={{
           // Optionally add blending or specific styles here for the frames
        }}
      />
    </div>
  );
}
