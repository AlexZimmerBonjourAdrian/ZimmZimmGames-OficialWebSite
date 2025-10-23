import { Metadata } from 'next';
import WATA from './WATA';
import { structuredData, seoMetadata } from '@/lib/site-config';

export const metadata: Metadata = {
  title: seoMetadata.wata.title,
  description: seoMetadata.wata.description,
  keywords: seoMetadata.wata.keywords,
  openGraph: {
    title: seoMetadata.wata.title,
    description: seoMetadata.wata.description,
    url: 'https://zimmzimmgames.com/wata',
    siteName: 'ZimmZimm Games',
    images: [
      {
        url: '/images/Wata/WhereAreTheAlices.JPG',
        width: 1200,
        height: 630,
        alt: 'W.A.T.A - Where Are The Alices? | Alice in Wonderland Horror Visual Novel',
        type: 'image/jpeg',
      },
      {
        url: '/Gameplay/Case00-CB.jpg',
        width: 1280,
        height: 720,
        alt: 'W.A.T.A - C.B. Detective Interrogation Scene',
        type: 'image/jpeg',
      },
      {
        url: '/ConceptArt/ConceptJunoAndCB.png',
        width: 1200,
        height: 630,
        alt: 'W.A.T.A - Juno and C.B. Character Concept Art',
        type: 'image/png',
      },
      { 
        url: '/Characters/Profile/CB.png', 
        width: 800, 
        height: 800, 
        alt: 'W.A.T.A - C.B. Character Profile', 
        type: 'image/png' 
      },
      { 
        url: '/Characters/Profile/Juno.png', 
        width: 800, 
        height: 800, 
        alt: 'W.A.T.A - Juno Hare Character Profile', 
        type: 'image/png' 
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: seoMetadata.wata.title,
    description: seoMetadata.wata.description,
    images: [
      '/images/Wata/WhereAreTheAlices.JPG',
      '/Gameplay/Case00-CB.jpg',
      '/ConceptArt/ConceptJunoAndCB.png',
      '/Characters/Profile/CB.png',
      '/Characters/Profile/Juno.png'
    ],
    creator: '@ZimmZimmGames',
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
  return (
    <>
      {/* DATOS ESTRUCTURADOS CRÍTICOS PARA EL JUEGO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData.videoGame),
        }}
      />
      <WATA />
    </>
  );
} 