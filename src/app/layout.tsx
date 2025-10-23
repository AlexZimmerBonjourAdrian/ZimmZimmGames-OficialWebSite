import './globals.css';
import { GeistSans, GeistMono } from 'geist/font';
// import Navigation from '@/components/Navigation'; // Componente no existe aún
import { structuredData, seoMetadata } from '@/lib/site-config';

export const metadata = {
  title: {
    default: seoMetadata.home.title,
    template: '%s | ZimmZimm Games'
  },
  description: seoMetadata.home.description,
  keywords: seoMetadata.home.keywords,
  authors: [{ name: 'ZimmZimm Games' }],
  creator: 'ZimmZimm Games',
  publisher: 'ZimmZimm Games',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://zimmzimmgames.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: seoMetadata.home.title,
    description: seoMetadata.home.description,
    url: 'https://zimmzimmgames.com',
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
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: seoMetadata.home.title,
    description: seoMetadata.home.description,
    images: [
      '/images/Wata/WhereAreTheAlices.JPG',
      '/Gameplay/Case00-CB.jpg',
      '/ConceptArt/ConceptJunoAndCB.png'
    ],
    creator: '@ZimmZimmGames',
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
  verification: {
    google: 'HDPNeSBJ5V-Ky_nmGbiWlhO1gteiXdTwhSeuR5IhL9w',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* DATOS ESTRUCTURADOS CRÍTICOS PARA VISIBILIDAD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData.organization),
          }}
        />
      </head>
      <body className="bg-black">
        {/* <Navigation /> */}
        {children}
      </body>
    </html>
  );
}
