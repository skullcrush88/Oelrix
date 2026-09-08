import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Design Services | Oelrix",
  description: "Oelrix is a multidisciplinary design studio creating brand websites, digital experiences, landing pages, and strategic redesigns.",
  alternates: { canonical: "https://www.oelrix.com/services" },
  openGraph: {
    title: "Web Design Services | Oelrix",
    description: "Multidisciplinary design services from Oelrix: brand websites, digital experiences, focused landing pages, and redesigns.",
    url: "https://www.oelrix.com/services",
    type: "website",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}