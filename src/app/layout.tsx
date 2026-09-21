import type { Metadata } from "next";
import "./globals.css";
import "../lib/debugRepeat";
import NavigationIsland from "../components/NavigationIsland";
import GradualBlurWrapper from "../components/GradualBlurWrapper";
import RouteLoader from "../components/RouteLoader";
import RepeatDebugClient from "../components/RepeatDebugClient";
import CursorWrapper from "../components/CursorWrapper";
import PageTransition from "../components/PageTransition";
import AudioProvider from "../components/AudioProvider";
import CursorGlow from "../components/CursorGlow";
import InitialPreloader from "../components/InitialPreloader";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.oelrix.com/'),
  title: {
    default: 'Oelrix — Global Multidisciplinary Design Studio',
    template: '%s'
  },
  description: 'Oelrix is a global multidisciplinary design studio creating premium websites, brand systems and digital experiences for ambitious businesses worldwide.',
  keywords: [
    'multidisciplinary design studio',
    'digital experience design',
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
  authors: [{ name: 'Oelrix Studio', url: 'https://www.oelrix.com/' }],
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
    locale: 'en_US',
    url: 'https://www.oelrix.com/',
    siteName: 'Oelrix',
    title: 'Oelrix — Global Multidisciplinary Design Studio',
    description: 'Oelrix is a global multidisciplinary design studio creating premium websites, brand systems and digital experiences for ambitious businesses worldwide.',
    images: [
      {
        url: 'https://www.oelrix.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Oelrix — Global Multidisciplinary Design Studio',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oelrix — Global Multidisciplinary Design Studio',
    description: 'Oelrix is a global multidisciplinary design studio creating premium websites, brand systems and digital experiences for ambitious businesses worldwide.',
    images: [{ url: 'https://www.oelrix.com/og-image.png', alt: 'Oelrix — Global Multidisciplinary Design Studio' }],
  },
  alternates: {
    canonical: 'https://www.oelrix.com/'
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "manifest",
        url: "/site.webmanifest",
      },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Oelrix",
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
        <AudioProvider>
          <CursorGlow />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@graph": [
                  {
                    "@type": "ProfessionalService",
                    "@id": "https://www.oelrix.com/#organization",
                    "name": "Oelrix",
                    "url": "https://www.oelrix.com/",
                    "logo": "https://www.oelrix.com/newlogo.png",
                    "description": "Oelrix is a global multidisciplinary design studio creating premium websites, brand systems and digital experiences for ambitious businesses worldwide.",
                    "areaServed": [
                      { "@type": "City", "name": "London" },
                      { "@type": "City", "name": "New York" },
                      { "@type": "City", "name": "Melbourne" },
                      { "@type": "Country", "name": "United Kingdom" },
                      { "@type": "Country", "name": "United States" },
                      { "@type": "Country", "name": "Australia" },
                      { "@type": "Country", "name": "United Arab Emirates" },
                      { "@type": "Country", "name": "India" },
                      { "@type": "City", "name": "Los Angeles" },
                      { "@type": "Country", "name": "Malaysia" },
                      { "@type": "City", "name": "Dubai" }
                    ],
                    "address": {
                      "@type": "PostalAddress",
                      "addressLocality": "London",
                      "addressCountry": "GB"
                    },
                    "contactPoint": {
                      "@type": "ContactPoint",
                      "email": "oelrix.inc@gmail.com",
                      "contactType": "customer service",
                      "areaServed": ["GB", "US", "IN", "MY", "AE"],
                      "availableLanguage": "English"
                    },
                    "sameAs": [
                      "https://www.linkedin.com/company/oelrix"
                    ],
                    "serviceType": [
                      "Brand Website Design",
                      "Landing Page Design",
                      "Website Redesign",
                      "UI/UX Design",
                      "Digital Experience Design",
                      "Brand Strategy",
                      "Art Direction"
                    ],
                    "knowsAbout": [
                      "Brand identity",
                      "Web design",
                      "Digital product design",
                      "User experience design",
                      "Creative development"
                    ]
                  },
                  {
                    "@type": "WebSite",
                    "@id": "https://www.oelrix.com/#website",
                    "url": "https://www.oelrix.com/",
                    "name": "Oelrix",
                    "description": "Global multidisciplinary design studio building premium websites, brand systems and digital experiences for ambitious brands and businesses worldwide.",
                    "publisher": { "@id": "https://www.oelrix.com/#organization" },
                    "inLanguage": "en"
                  }
                ]
              })
            }}
          />
          <CursorWrapper />
          <InitialPreloader />
          <PageTransition>
            {children}
          </PageTransition>
          <NavigationIsland />
          <GradualBlurWrapper />
          <RepeatDebugClient />
          <RouteLoader />
        </AudioProvider>
      </body>
    </html>
  );
}


