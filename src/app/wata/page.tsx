import { Metadata } from 'next';
import WATA from './WATA';

export const metadata: Metadata = {
  title: 'W.A.T.A - Where Are The Alices? | Psychological Horror',
  description: "A Wonderland detective fights to rescue the Alices from a fate worse than death at the hands of a 'monstrous' rabbit.",
  keywords: [
    'W.A.T.A',
    'Where Are The Alices?',
    'psychological horror',
    'visual novel',
    'indie game',
    'Wonderland detective',
    "monstrous rabbit",
    'dark fantasy',
    'noir',
    'ZimmZimm Games'
  ],
  openGraph: {
    title: 'W.A.T.A - Where Are The Alices? | Psychological Horror',
    description: "A Wonderland detective fights to rescue the Alices from a fate worse than death at the hands of a 'monstrous' rabbit.",
    url: 'https://zimmzimmgames.com/wata',
    siteName: 'ZimmZimm Games',
    images: [
      {
        url: '/ConceptArt/ConceptJunoAndCB.png',
        width: 1200,
        height: 630,
        alt: 'W.A.T.A - Juno and C.B. together',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'W.A.T.A - Where Are The Alices? | Psychological Horror',
    description: "A Wonderland detective fights to rescue the Alices from a fate worse than death at the hands of a 'monstrous' rabbit.",
    images: ['/ConceptArt/ConceptJunoAndCB.png'],
  },
  alternates: {
    canonical: '/wata',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function WATAPage() {
  return <WATA />;
}