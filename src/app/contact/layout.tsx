import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start a Website Project | Oelrix",
  description: "Talk to Oelrix about a custom website, landing page, or redesign for your brand. Request a project quote from our London studio.",
  alternates: { canonical: "https://oelrix.com/contact" },
  openGraph: {
    title: "Start a Website Project | Oelrix",
    description: "Request a custom website design quote from Oelrix's London studio.",
    url: "https://oelrix.com/contact",
    type: "website",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}