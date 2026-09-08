import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Design Services | Oelrix",
  description: "Explore Oelrix web design services: custom brand websites, focused landing pages, and strategic website refinement for ambitious businesses.",
  alternates: { canonical: "https://www.oelrix.com/services" },
  openGraph: {
    title: "Web Design Services | Oelrix",
    description: "Custom brand websites, focused landing pages, and strategic website redesign from Oelrix.",
    url: "https://www.oelrix.com/services",
    type: "website",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}