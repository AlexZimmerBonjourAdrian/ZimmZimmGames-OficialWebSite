import './globals.css';
import { GeistSans, GeistMono } from 'geist/font';
// import Navigation from '@/components/Navigation'; // Componente no existe aún
import { structuredData } from '@/lib/seo-config';

export const metadata = {
  title: {
    default: 'ZimmZimm Games - W.A.T.A | Novela Visual de Terror Psicológico Indie',
    template: '%s | ZimmZimm Games'
  },
  description: 'Descubre W.A.T.A, novela visual de terror psicológico inspirada en Alicia en el País de las Maravillas. Juego indie único con fantasía oscura, furry y thriller político. Disponible en Steam.',
  keywords: [
    'ZimmZimm Games', 'W.A.T.A', 'novela visual', 'terror psicológico', 
    'Alicia en el País de las Maravillas', 'juego indie', 'Steam', 
    'fantasía oscura', 'furry', 'noir', 'thriller político', 'videojuegos indie'
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
    title: 'ZimmZimm Games - W.A.T.A | Novela Visual de Terror Psicológico Indie',
    description: 'Descubre W.A.T.A, novela visual de terror psicológico inspirada en Alicia en el País de las Maravillas. Juego indie único con fantasía oscura, furry y thriller político. Disponible en Steam.',
    url: 'https://zimmzimmgames.com',
    siteName: 'ZimmZimm Games',
    images: [
      {
        url: '/images/Wata/WhereAreTheAlices.JPG', // Imagen que SÍ existe
        width: 1200,
        height: 630,
        alt: 'ZimmZimm Games - W.A.T.A Novela Visual de Terror Psicológico',
        type: 'image/jpeg',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZimmZimm Games - W.A.T.A | Novela Visual de Terror Psicológico Indie',
    description: 'Descubre W.A.T.A, novela visual de terror psicológico inspirada en Alicia en el País de las Maravillas. Juego indie único con fantasía oscura, furry y thriller político. Disponible en Steam.',
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
