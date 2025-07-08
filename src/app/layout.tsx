import './globals.css';
import { GeistSans, GeistMono } from 'geist/font';
import DustParticles from '../components/WataLanding/DustParticles';
import MusicPlayer from '../components/WataLanding/MusicPlayer';
//import HamburgerMenu from '../components/WataLanding/HamburgerMenu';
// import Navigation from '@/components/Navigation';

export const metadata = {
  title: {
    default: 'ZimmZimm Games - W.A.T.A | Where Are The Alices?',
    template: '%s | ZimmZimm Games'
  },
  description: 'W.A.T.A (Where Are The Alices?) - Una novela visual de terror psicológico inspirada en Alicia en el País de las Maravillas. Dark fantasy, furry, noir y thriller político en un mundo donde la realidad se desvanece. Disponible en Steam, itch.io y GameJolt.',
  keywords: [
    'W.A.T.A',
    'Where Are The Alices?',
    'Alicia en el País de las Maravillas',
    'Alice in Wonderland',
    'visual novel',
    'novela visual',
    'furry',
    'dark fantasy',
    'fantasía oscura',
    'bad romance',
    'romance oscuro',
    'noir',
    'thriller político',
    'political thriller',
    'detective',
    'conejo',
    'rabbit',
    'reina',
    'queen',
    'terror psicológico',
    'psychological horror',
    'horror',
    'terror',
    'juego indie',
    'indie game',
    'Steam',
    'itch.io',
    'GameJolt',
    'Android',
    'Windows',
    'ZimmZimm Games'
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
      type: 'website',
      locale: 'es_ES',
      url: 'https://zimmzimmgames.com',
      siteName: 'ZimmZimm Games',
      title: 'W.A.T.A - Where Are The Alices? | Novela Visual de Terror Psicológico',
      description: 'Una novela visual de terror psicológico inspirada en Alicia en el País de las Maravillas. Dark fantasy, furry, noir y thriller político.',
    images: [
      {
        url: '/images/Wata/WhereAreTheAlices.JPG',
        width: 1200,
        height: 630,
        alt: 'W.A.T.A - Where Are The Alices? - Terror psicológico independiente',
      },
    ],
  },
      twitter: {
      card: 'summary_large_image',
      title: 'W.A.T.A - Where Are The Alices? | Novela Visual de Terror Psicológico',
      description: 'Una novela visual de terror psicológico inspirada en Alicia en el País de las Maravillas. Dark fantasy, furry, noir y thriller político.',
    images: ['/images/Wata/WhereAreTheAlices.JPG'],
    creator: '@ZimmZimmGames',
    site: '@ZimmZimmGames',
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
    google: 'tu-codigo-de-verificacion-google',
    yandex: 'tu-codigo-de-verificacion-yandex',
    yahoo: 'tu-codigo-de-verificacion-yahoo',
  },
  category: 'games',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <link rel="icon" href="/Icon/ajuste_avatar_Documents-3.png" type="image/png" />
        <link rel="apple-touch-icon" href="/Icon/ajuste_avatar_Documents-3.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Preconnect para mejorar performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch para recursos externos */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        
        {/* Schema.org markup para el juego */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "VideoGame",
                          "name": "W.A.T.A - Where Are The Alices?",
            "description": "Una novela visual de terror psicológico inspirada en Alicia en el País de las Maravillas. Combina dark fantasy, furry, noir y thriller político en una experiencia única.",
            "genre": ["Visual Novel", "Terror Psicológico", "Dark Fantasy", "Noir", "Thriller Político", "Furry", "Bad Romance"],
            "gamePlatform": ["PC", "Windows", "Android"],
              "applicationCategory": "Game",
              "operatingSystem": "Windows",
              "softwareVersion": "1.0",
              "datePublished": "2024",
              "publisher": {
                "@type": "Organization",
                "name": "ZimmZimm Games",
                "url": "https://zimmzimmgames.com"
              },
              "creator": {
                "@type": "Organization",
                "name": "ZimmZimm Games"
              },
              "image": [
                "https://zimmzimmgames.com/images/Wata/WhereAreTheAlices.JPG",
                "https://zimmzimmgames.com/images/Wata/Door.PNG"
              ],
              "screenshot": [
                "https://zimmzimmgames.com/images/Wata/Menu.PNG",
                "https://zimmzimmgames.com/images/Wata/Menu-3.PNG",
                "https://zimmzimmgames.com/images/Wata/Menu-4.PNG"
              ],
              "url": "https://zimmzimmgames.com",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.5",
                "ratingCount": "150",
                "bestRating": "5",
                "worstRating": "1"
              },
                          "offers": [
              {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock",
                "url": "https://zimmzimmgames.com/wata",
                "seller": {
                  "@type": "Organization",
                  "name": "ZimmZimm Games"
                }
              },
              {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock",
                "url": "https://store.steampowered.com/app/wata",
                "seller": {
                  "@type": "Organization",
                  "name": "Steam"
                }
              },
              {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock",
                "url": "https://zimmzimmgames.itch.io/wata",
                "seller": {
                  "@type": "Organization",
                  "name": "itch.io"
                }
              },
              {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock",
                "url": "https://gamejolt.com/games/wata",
                "seller": {
                  "@type": "Organization",
                  "name": "GameJolt"
                }
              }
            ]
            })
          }}
        />
      </head>
      <body className="bg-black">
       
        {/*  <HamburgerMenu />*/}
        <DustParticles />
        <MusicPlayer />
        {children}
      </body>
    </html>
  );
}
