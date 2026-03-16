"use client";

import { usePathname } from "next/navigation";
import CustomCursor from "./CustomCursor";

export default function CursorWrapper() {
  const pathname = usePathname();

  if (pathname?.startsWith("/websites/")) {
    return null;
  }

  return <CustomCursor />;
}
