import { Metadata } from 'next';
import AboutPageClient from './AboutPageClient';

export const metadata: Metadata = {
  title: 'Sobre ZimmZimm Games | Estudio de Videojuegos Indie Especializado en Terror',
  description: 'Conoce a ZimmZimm Games, estudio independiente especializado en crear experiencias únicas de terror psicológico y novelas visuales como W.A.T.A.',
  keywords: [
    'ZimmZimm Games', 'estudio indie', 'desarrollo de videojuegos', 
    'terror psicológico', 'novelas visuales', 'juegos únicos'
  ],
  openGraph: {
    title: 'Sobre ZimmZimm Games | Estudio de Videojuegos Indie Especializado en Terror',
    description: 'Conoce a ZimmZimm Games, estudio independiente especializado en crear experiencias únicas de terror psicológico y novelas visuales como W.A.T.A.',
    url: 'https://zimmzimmgames.com/about',
    siteName: 'ZimmZimm Games',
    images: [
      {
        url: '/images/Wata/WhereAreTheAlices.JPG',
        width: 1200,
        height: 630,
        alt: 'ZimmZimm Games - Estudio de Desarrollo de Videojuegos',
        type: 'image/jpeg',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sobre ZimmZimm Games | Estudio de Videojuegos Indie Especializado en Terror',
    description: 'Conoce a ZimmZimm Games, estudio independiente especializado en crear experiencias únicas de terror psicológico y novelas visuales como W.A.T.A.',
    images: ['/images/Wata/WhereAreTheAlices.JPG'],
    creator: '@ZimmZimmGames',
  },
  alternates: {
    canonical: '/about',
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

export default function AboutPage() {
  return <AboutPageClient />;
}
