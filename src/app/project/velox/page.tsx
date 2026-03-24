import type { Metadata } from 'next';
import { VelorxContent } from './velorx-content';

export const metadata: Metadata = {
  title: 'Velorx — Electric Vehicle Brand Website | Oelrix',
  description: 'An electric vehicle brand website designed and built entirely by Oelrix. Futuristic, innovative, and cutting-edge.',
  alternates: {
    canonical: 'https://oelrix.tech/project/velox',
  },
  openGraph: {
    title: 'Velorx — Electric Vehicle Brand Website',
    description: 'An electric vehicle brand website designed and built entirely by Oelrix.',
    images: [{ url: '/Velorx.png', width: 1200, height: 630, alt: 'Velorx by Oelrix' }],
    url: 'https://oelrix.tech/project/velox',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Velorx — Electric Vehicle Brand Website',
    description: 'An electric vehicle brand website designed and built entirely by Oelrix.',
    images: ['/Velorx.png'],
  }
}

export default function VelorxPage() {
  return <VelorxContent />;
}
