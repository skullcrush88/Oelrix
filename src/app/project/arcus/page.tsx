import type { Metadata } from 'next';
import { ArcusContent } from './arcus-content';

export const metadata: Metadata = {
  title: 'Arcus — Architecture Studio Website | Oelrix',
  description: 'An architecture and interior design studio website designed and built entirely by Oelrix. Spatial, refined, and intentional.',
  alternates: {
    canonical: 'https://oelrix.com/project/arcus',
  },
  openGraph: {
    title: 'Arcus — Architecture Studio Website',
    description: 'An architecture and interior design studio website designed and built entirely by Oelrix.',
    images: [{ url: '/Arcus.png', width: 1200, height: 630, alt: 'Arcus by Oelrix' }],
    url: 'https://oelrix.com/project/arcus',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arcus — Architecture Studio Website',
    description: 'An architecture and interior design studio website designed and built entirely by Oelrix.',
    images: ['/Arcus.png'],
  }
}

export default function ArcusPage() {
  return <ArcusContent />;
}
