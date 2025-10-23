import { Metadata } from 'next';
import WATA from './WATA';
import { structuredData } from '@/lib/seo-config';

export const metadata: Metadata = {
  title: 'W.A.T.A - Where Are The Alices? | Novela Visual de Terror Psicológico',
  description: 'W.A.T.A es una novela visual de terror psicológico donde una liebre detective investiga la desaparición de Alicia en un Wonderland corrupto. Juego indie único disponible en Steam.',
  keywords: [
    'W.A.T.A', 'Where Are The Alices', 'novela visual', 'terror psicológico', 
    'Alicia en el País de las Maravillas', 'liebre detective', 'conejo malvado', 
    'Wonderland corrupto', 'Steam', 'juego indie', 'ZimmZimm Games'
  ],
  openGraph: {
    title: 'W.A.T.A - Where Are The Alices? | Novela Visual de Terror Psicológico',
    description: 'W.A.T.A es una novela visual de terror psicológico donde una liebre detective investiga la desaparición de Alicia en un Wonderland corrupto. Juego indie único disponible en Steam.',
    url: 'https://zimmzimmgames.com/wata',
    siteName: 'ZimmZimm Games',
    images: [
      {
        url: '/Gameplay/Case00-CB.jpg',
        width: 1280,
        height: 720,
        alt: 'W.A.T.A - Interrogatorio de CB - Captura de gameplay',
        type: 'image/jpeg',
      },
      {
        url: '/ConceptArt/ConceptJunoAndCB.png',
        width: 1200,
        height: 630,
        alt: 'W.A.T.A - Juno y C.B. juntos - Arte conceptual',
        type: 'image/png',
      },
      { url: '/Characters/Profile/CB.png', width: 800, height: 800, alt: 'W.A.T.A - Personaje: C.B. perfil', type: 'image/png' },
      { url: '/Characters/Profile/Juno.png', width: 800, height: 800, alt: 'W.A.T.A - Personaje: Juno perfil', type: 'image/png' },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'W.A.T.A - Where Are The Alices? | Novela Visual de Terror Psicológico',
    description: 'W.A.T.A es una novela visual de terror psicológico donde una liebre detective investiga la desaparición de Alicia en un Wonderland corrupto. Juego indie único disponible en Steam.',
    images: [
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