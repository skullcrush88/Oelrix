"use client";

import { LavaLamp } from "../../components/fluid-blob";
import Loader from "../components/Loader";

export default function Loading() {
  return (
    <main className="min-h-screen w-screen relative text-white overflow-hidden">
      <LavaLamp />
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 flex min-h-screen items-center justify-center">
        <Loader scale={0.7} />
      </div>
    </main>
  );
}
