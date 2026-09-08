import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Oelrix | Multidisciplinary Design Studio",
  description: "Learn how Oelrix combines brand strategy, design, and development to create premium digital experiences for ambitious brands worldwide.",
  alternates: { canonical: "https://www.oelrix.com/about" },
  openGraph: {
    title: "About Oelrix | Multidisciplinary Design Studio",
    description: "The thinking and process behind Oelrix's custom websites, brand systems, and digital experiences.",
    url: "https://www.oelrix.com/about",
    type: "website",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}