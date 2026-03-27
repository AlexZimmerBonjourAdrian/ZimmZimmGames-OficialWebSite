import './globals.css';
import { GeistSans, GeistMono } from 'geist/font';
import { Header, Footer } from '@/components';
import { structuredData } from '@/lib/seo-config';

export const metadata = {
  title: {
    default: 'ZimmZimm Games - W.A.T.A: Where are the Alices? | Psychological Horror Visual Novel',
    template: '%s | ZimmZimm Games'
  },
  description: 'Discover W.A.T.A: Where are the Alices?, a psychological horror visual novel inspired by Alice in Wonderland. Unique indie game with dark fantasy, furry, and political thriller elements. Available on Steam.',
  keywords: [
    'ZimmZimm Games', 'W.A.T.A', 'Where are the Alices', 'visual novel', 'psychological horror', 
    'Alice in Wonderland', 'indie game', 'Steam', 
    'dark fantasy', 'furry', 'noir', 'political thriller', 'indie games'
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
    title: 'ZimmZimm Games - W.A.T.A: Where are the Alices? | Psychological Horror Visual Novel',
    description: 'Discover W.A.T.A: Where are the Alices?, a psychological horror visual novel inspired by Alice in Wonderland. Unique indie game with dark fantasy, furry, and political thriller elements. Available on Steam.',
    url: 'https://zimmzimmgames.com',
    siteName: 'ZimmZimm Games',
    images: [
      {
        url: '/Steam/Capsulas de Steam/Capsula de Biblioteca/Capsula_de_Biblioteca.jpg',
        width: 1200,
        height: 630,
        alt: 'ZimmZimm Games - W.A.T.A: Where are the Alices? Psychological Horror Visual Novel',
        type: 'image/jpeg',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZimmZimm Games - W.A.T.A: Where are the Alices? | Psychological Horror Visual Novel',
    description: 'Discover W.A.T.A: Where are the Alices?, a psychological horror visual novel inspired by Alice in Wonderland. Unique indie game with dark fantasy, furry, and political thriller elements. Available on Steam.',
    images: ['/Steam/Capsulas de Steam/Capsula de Biblioteca/Capsula_de_Biblioteca.jpg'],
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
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <link rel="icon" href="/Steam/Capsulas de Steam/Icono de App y Icono Acceso directo/icono-de-acceso-directo.png" />
        <link rel="apple-touch-icon" href="/Steam/Capsulas de Steam/Icono de App y Icono Acceso directo/icono-de-acceso-directo.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Resource hints para recursos externos */}
        <link rel="dns-prefetch" href="https://forms.gle" />
        <link rel="preconnect" href="https://forms.gle" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://store.steampowered.com" />
        <link rel="preconnect" href="https://store.steampowered.com" crossOrigin="anonymous" />
        
        {/* Preload de recursos críticos para carga rápida */}
        <link
          rel="preload"
          href="/Font/Alice_in_Wonderland_3.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/Font/CourierPrime-Regular.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/Steam/Capsulas de Steam/Título del juego/titulo-wata-editable.png"
          as="image"
        />
        <link
          rel="preload"
          href="/images/Wata/Door.PNG"
          as="image"
        />
        
        {/* Structured Data para SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="bg-black">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
