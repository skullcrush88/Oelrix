import type { Metadata } from 'next';
import { ArcusContent } from './arcus-content';

export const metadata: Metadata = {
  title: 'Arcus — Luxury Jewelry Brand Website | Oelrix',
  description: 'A luxury jewelry brand website designed and built entirely by Oelrix. Elegant, timeless, and sophisticated.',
  alternates: {
    canonical: 'https://oelrix.com/project/arcus',
  },
  openGraph: {
    title: 'Arcus — Luxury Jewelry Brand Website',
    description: 'A luxury jewelry brand website designed and built entirely by Oelrix.',
    images: [{ url: '/Arcus.png', width: 1200, height: 630, alt: 'Arcus by Oelrix' }],
    url: 'https://oelrix.com/project/arcus',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arcus — Luxury Jewelry Brand Website',
    description: 'A luxury jewelry brand website designed and built entirely by Oelrix.',
    images: ['/Arcus.png'],
  }
}

export default function ArcusPage() {
  return <ArcusContent />;
}
