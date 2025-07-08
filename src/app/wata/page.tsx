import { Metadata } from 'next';
import WATA from '../../components/WATA/WATA';

export const metadata: Metadata = {
  title: 'W.A.T.A - Where Are The Alices? | Juego de Terror Psicológico',
  description: 'Descubre W.A.T.A, un juego de terror psicológico independiente inspirado en Alicia en el País de las Maravillas. ¿Dónde están las Alicias? Explora un mundo donde la realidad se desvanece.',
  keywords: [
    'W.A.T.A',
    'Where Are The Alices?',
    'juego de terror psicológico',
    'horror psicológico',
    'Alicia en el País de las Maravillas',
    'juego independiente',
    'terror indie',
    'psychological horror game',
    'Alice in Wonderland game',
    'ZimmZimm Games'
  ],
  openGraph: {
    title: 'W.A.T.A - Where Are The Alices? | Terror Psicológico',
    description: 'Un juego de terror psicológico que desafía la realidad. Inspirado en Alicia en el País de las Maravillas.',
    url: 'https://zimmzimmgames.com/wata',
    siteName: 'ZimmZimm Games',
    images: [
      {
        url: '/images/Wata/WhereAreTheAlices.JPG',
        width: 1200,
        height: 630,
        alt: 'W.A.T.A - Where Are The Alices? - Terror psicológico independiente',
      },
      {
        url: '/images/Wata/Door.PNG',
        width: 1280,
        height: 720,
        alt: 'La puerta hacia el misterio en W.A.T.A',
      }
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'W.A.T.A - Where Are The Alices? | Terror Psicológico',
    description: 'Un juego de terror psicológico que desafía la realidad. Inspirado en Alicia en el País de las Maravillas.',
    images: ['/images/Wata/WhereAreTheAlices.JPG'],
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