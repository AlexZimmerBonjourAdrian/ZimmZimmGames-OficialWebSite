import './globals.css';
import { GeistSans, GeistMono } from 'geist/font';
import Navigation from '@/components/Navigation';

export const metadata = {
  title: {
    default: 'ZimmZimm Games - Estudio Independiente de Videojuegos',
    template: '%s | ZimmZimm Games'
  },
  description: 'Estudio independiente especializado en crear experiencias únicas de terror y misterio. Descubre nuestros juegos que desafían las convenciones.',
  keywords: ['videojuegos', 'indie games', 'terror', 'misterio', 'RPG', 'aventura', 'ZimmZimm Games'],
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
    title: 'ZimmZimm Games - Estudio Independiente de Videojuegos',
    description: 'Estudio independiente especializado en crear experiencias únicas de terror y misterio.',
    url: 'https://zimmzimmgames.com',
    siteName: 'ZimmZimm Games',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ZimmZimm Games - Estudio de Videojuegos',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZimmZimm Games - Estudio Independiente de Videojuegos',
    description: 'Estudio independiente especializado en crear experiencias únicas de terror y misterio.',
    images: ['/images/twitter-image.jpg'],
    creator: '@zimmzimmgames',
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
    google: 'your-google-verification-code',
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
      </head>
      <body className="bg-black">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
