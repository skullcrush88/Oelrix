import type { Metadata } from 'next';
import { NoxeContent } from './noxe-content';

export const metadata: Metadata = {
  title: 'NOXE — Luxury Fragrance Brand Website | Oelrix',
  description: 'A luxury fragrance brand website designed and built entirely by Oelrix. Dark, editorial, and intentional.',
  alternates: {
    canonical: 'https://oelrix.tech/project/noxe',
  },
  openGraph: {
    title: 'NOXE — Luxury Fragrance Brand Website',
    description: 'A luxury fragrance brand website designed and built entirely by Oelrix.',
    images: [{ url: '/NOXE.png', width: 1200, height: 630, alt: 'NOXE by Oelrix' }],
    url: 'https://oelrix.tech/project/noxe',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NOXE — Luxury Fragrance Brand Website',
    description: 'A luxury fragrance brand website designed and built entirely by Oelrix.',
    images: ['/NOXE.png'],
  }
}

export default function NoxePage() {
  return <NoxeContent />;
}
