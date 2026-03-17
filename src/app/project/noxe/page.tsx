import type { Metadata } from 'next';
import { NoxeContent } from './noxe-content';

export const metadata: Metadata = {
  title: 'NOXE — Luxury Fragrance Brand Website | Oelrix',
  description: 'A luxury fragrance brand website designed and built entirely by Oelrix. Dark, editorial, and intentional.',
  openGraph: {
    title: 'NOXE — Luxury Fragrance Brand Website',
    description: 'A luxury fragrance brand website designed and built entirely by Oelrix.',
    images: [{ url: '/NOXE.png', width: 1200, height: 630, alt: 'NOXE by Oelrix' }],
  }
}

export default function NoxePage() {
  return <NoxeContent />;
}
