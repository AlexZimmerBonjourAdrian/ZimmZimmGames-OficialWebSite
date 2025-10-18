import './globals.css';
import { GeistSans, GeistMono } from 'geist/font';
import DustParticles from '../components/Home/DustParticles';
//import HamburgerMenu from '../components/WataLanding/HamburgerMenu';
// import Navigation from '@/components/Navigation';

export const metadata = {
  title: {
    default: 'ZimmZimm Games - W.A.T.A | Where Are The Alices?',
    template: '%s | ZimmZimm Games'
  },
  description: "W.A.T.A (Where Are The Alices?) — A psychological horror experience inspired by Alice in Wonderland. A Wonderland detective fights to rescue the Alices from a fate worse than death at the hands of a 'monstrous' rabbit.",
  keywords: [
    'W.A.T.A',
    'Where Are The Alices?',
    'Alice in Wonderland',
    'visual novel',
    'psychological horror',
    'indie game',
    'dark fantasy',
    'noir',
    'political thriller',
    'detective',
    'rabbit',
    'queen',
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
      locale: 'en_US',
      url: 'https://zimmzimmgames.com',
      siteName: 'ZimmZimm Games',
      title: 'W.A.T.A - Where Are The Alices? | Psychological Horror',
      description: "A Wonderland detective fights to rescue the Alices from a fate worse than death at the hands of a 'monstrous' rabbit.",
    images: [
      {
        url: '/Gameplay/Case00-CB.jpg',
        width: 1280,
        height: 720,
        alt: 'W.A.T.A - CB interrogation - gameplay still',
        type: 'image/jpeg',
      },
      {
        url: '/ConceptArt/ConceptJunoAndCB.png',
        width: 1200,
        height: 630,
        alt: 'W.A.T.A - Juno and C.B. together',
        type: 'image/png',
      },
      {
        url: '/Characters/Profile/CB.png',
        width: 800,
        height: 800,
        alt: 'W.A.T.A - Character: C.B. profile',
        type: 'image/png',
      },
      {
        url: '/Characters/Profile/Juno.png',
        width: 800,
        height: 800,
        alt: 'W.A.T.A - Character: Juno profile',
        type: 'image/png',
      },
    ],
  },
      twitter: {
      card: 'summary_large_image',
      title: 'W.A.T.A - Where Are The Alices? | Psychological Horror',
      description: "A Wonderland detective fights to rescue the Alices from a fate worse than death at the hands of a 'monstrous' rabbit.",
    images: [
      '/Gameplay/Case00-CB.jpg',
      '/ConceptArt/ConceptJunoAndCB.png',
      '/Characters/Profile/CB.png',
      '/Characters/Profile/Juno.png'
    ],
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
        <link rel="icon" href="/Icon/ajuste_avatar_Documents-3-Black.png" type="image/png" />
        <link rel="icon" href="/Icon/ryanlerch-Alice-In-Wonderland-2-the-white-rabbit.svg" type="image/svg+xml" />
        <link rel="mask-icon" href="/Icon/ryanlerch-Alice-In-Wonderland-2-the-white-rabbit.svg" color="#000000" />
        <link rel="apple-touch-icon" href="/Icon/ajuste_avatar_Documents-3-Black.png" />
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
        {children}
      </body>
    </html>
  );
}
