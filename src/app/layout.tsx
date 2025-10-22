import './globals.css';
import { GeistSans, GeistMono } from 'geist/font';
// import Navigation from '@/components/Navigation'; // Componente no existe aún
import { structuredData } from '@/lib/seo-config';

export const metadata = {
  title: {
    default: 'ZimmZimm Games | Indie Studio Specialized in Psychological Horror and Mystery',
    template: '%s | ZimmZimm Games'
  },
  description: 'ZimmZimm Games is an indie studio specialized in creating unique psychological horror and mystery experiences. Discover W.A.T.A: Where Are The Alices? and other immersive games.',
  keywords: [
    'ZimmZimm Games', 'W.A.T.A', 'psychological horror', 'visual novel', 
    'Alice in Wonderland', 'indie game', 'Steam', 
    'dark fantasy', 'noir', 'mystery games', 'indie studio'
  ],
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
    title: 'ZimmZimm Games | Indie Studio Specialized in Psychological Horror and Mystery',
    description: 'ZimmZimm Games is an indie studio specialized in creating unique psychological horror and mystery experiences. Discover W.A.T.A: Where Are The Alices? and other immersive games.',
    url: 'https://zimmzimmgames.com',
    siteName: 'ZimmZimm Games',
    images: [
      {
        url: '/images/Wata/WhereAreTheAlices.JPG', // Imagen que SÍ existe
        width: 1200,
        height: 630,
        alt: 'ZimmZimm Games - Indie Studio Specialized in Psychological Horror and Mystery',
        type: 'image/jpeg',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZimmZimm Games | Indie Studio Specialized in Psychological Horror and Mystery',
    description: 'ZimmZimm Games is an indie studio specialized in creating unique psychological horror and mystery experiences. Discover W.A.T.A: Where Are The Alices? and other immersive games.',
    images: ['/images/Wata/WhereAreTheAlices.JPG'], // Imagen que SÍ existe
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
