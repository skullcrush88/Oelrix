"use client";

import Link from "next/link";
import { LavaLamp } from "../../fluid-bob";

export default function Home() {
  return (
    <main className="w-full">
      <div className="min-h-screen w-screen flex flex-col justify-center items-center relative">
        <LavaLamp />
        <h1 className="text-[5rem] sm:text-[8rem] md:text-[18rem] font-extrabold tracking-tight mix-blend-exclusion text-white z-10 uppercase text-center sm:whitespace-nowrap">
          OELRIX
        </h1>
      </div>
    </main>
  );
}
