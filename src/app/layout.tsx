import type { Metadata } from "next";
import "./globals.css";
import "../lib/debugRepeat";
import NavBar from "../components/NavBar";
import RouteLoader from "../components/RouteLoader";
import RepeatDebugClient from "../components/RepeatDebugClient";
import CursorWrapper from "../components/CursorWrapper";

export const metadata: Metadata = {
  metadataBase: new URL('https://oelrix.tech'),
  title: {
    default: 'Oelrix — Web Design Studio',
    template: '%s'
  },
  description: 'Oelrix is a web design studio building high-quality, custom digital experiences for brands, businesses, and individuals. Based in London.',
  keywords: [
    'web design studio',
    'brand websites',
    'landing page design',
    'UI UX design',
    'Next.js web development',
    'custom website design',
    'London web design studio',
    'web design agency',
    'Oelrix'
  ],
  authors: [{ name: 'Oelrix Studio', url: 'https://oelrix.tech' }],
  creator: 'Oelrix Studio',
  publisher: 'Oelrix Studio',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    }
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://oelrix.tech',
    siteName: 'Oelrix',
    title: 'Oelrix — Web Design Studio',
    description: 'Oelrix is a web design studio building high-quality, custom digital experiences for brands, businesses, and individuals.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Oelrix — Web Design Studio',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oelrix — Web Design Studio',
    description: 'Oelrix is a web design studio building high-quality, custom digital experiences for brands, businesses, and individuals.',
    images: ['/og-image.jpg'],
    creator: '@oelrix'
  },
  alternates: {
    canonical: 'https://oelrix.tech'
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: { 
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ background: '#000' }}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Oelrix" />
      </head>
      <body style={{ background: '#000' }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Oelrix",
              "url": "https://oelrix.tech",
              "logo": "https://oelrix.tech/favicon.png",
              "description": "Web design studio building high-quality custom digital experiences for brands and businesses.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "London",
                "addressCountry": "GB"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "contact@oelrix.tech",
                "contactType": "customer service"
              },
              "sameAs": [
                "https://www.linkedin.com/company/oelrix"
              ],
              "serviceType": [
                "Brand Website Design",
                "Landing Page Design",
                "Website Redesign",
                "UI/UX Design"
              ]
            })
          }}
        />
        <CursorWrapper />
        {children}
        <RepeatDebugClient />
        <NavBar />
        <RouteLoader />
      </body>
    </html>
  );
}


