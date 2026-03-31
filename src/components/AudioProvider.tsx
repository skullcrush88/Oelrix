"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

export default function AudioProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    // Unlock audio on first interaction
    const unlockAudio = () => {
      if (audioRef.current && !isUnlocked) {
        audioRef.current
          .play()
          .then(() => {
            audioRef.current?.pause();
            setIsUnlocked(true);
            console.log("✓ Audio context unlocked");
          })
          .catch(() => {});
      }
      document.removeEventListener("click", unlockAudio);
      document.removeEventListener("touchstart", unlockAudio);
    };

    document.addEventListener("click", unlockAudio);
    document.addEventListener("touchstart", unlockAudio);

    const handlePlaySound = () => {
      if (audioRef.current) {
        try {
          audioRef.current.currentTime = 0;
          audioRef.current.volume = 0.6;
          const playPromise = audioRef.current.play();
          if (playPromise !== undefined) {
            playPromise
              .then(() => {
                console.log("✓ Sound played");
              })
              .catch((err) => {
                console.log("✗ Sound error:", err.message);
              });
          }
        } catch (err) {
          console.log("✗ Play error:", err);
        }
      }
    };

    window.addEventListener("playTransitionSound", handlePlaySound);
    return () => {
      window.removeEventListener("playTransitionSound", handlePlaySound);
      document.removeEventListener("click", unlockAudio);
      document.removeEventListener("touchstart", unlockAudio);
    };
  }, [isUnlocked]);

  return (
    <>
      <audio
        ref={audioRef}
        src="/transition.mp3"
        preload="auto"
        onError={(e) => {
          console.log("Audio load error:", e);
        }}
        onLoadedData={() => {
          console.log("✓ Audio file loaded");
        }}
      />
      {children}
    </>
  );
}
