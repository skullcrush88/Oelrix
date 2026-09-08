import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Oelrix | Web Design Studio",
  description: "Learn how Oelrix combines strategy, design, and refinement to create clear, high-performing websites for ambitious brands.",
  alternates: { canonical: "https://oelrix.com/about" },
  openGraph: {
    title: "About Oelrix | Web Design Studio",
    description: "The thinking and process behind Oelrix's custom websites and digital experiences.",
    url: "https://oelrix.com/about",
    type: "website",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}