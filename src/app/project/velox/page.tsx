import type { Metadata } from 'next';
import { VelorxContent } from './velorx-content';

export const metadata: Metadata = {
  title: 'Velox — Electric Vehicle Brand Website | Oelrix',
  description: 'An electric vehicle product launch website designed and built entirely by Oelrix. Futuristic, clear, and conversion-focused.',
  alternates: {
    canonical: 'https://oelrix.com/project/velox',
  },
  openGraph: {
    title: 'Velox — Electric Vehicle Brand Website',
    description: 'An electric vehicle product launch website designed and built entirely by Oelrix.',
    images: [{ url: '/Velox.jpg', width: 1200, height: 630, alt: 'Velox by Oelrix' }],
    url: 'https://oelrix.com/project/velox',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Velox — Electric Vehicle Brand Website',
    description: 'An electric vehicle product launch website designed and built entirely by Oelrix.',
    images: ['/Velox.jpg'],
  }
}

export default function VelorxPage() {
  return <VelorxContent />;
}
