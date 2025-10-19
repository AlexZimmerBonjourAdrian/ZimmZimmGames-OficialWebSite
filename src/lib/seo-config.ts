// SEO Configuration for ZimmZimm Games - Optimized for Maximum Browser Visibility
export const siteConfig = {
  name: 'ZimmZimm Games',
  description: 'Estudio independiente de desarrollo de videojuegos especializado en terror psicológico y novelas visuales únicas como W.A.T.A',
  url: 'https://zimmzimmgames.com',
  ogImage: '/images/Wata/WhereAreTheAlices.JPG', // Imagen que SÍ existe
  links: {
    twitter: 'https://twitter.com/ZimmZimmGames',
    github: 'https://github.com/ZimmZimmGames',
    discord: 'https://discord.gg/zimmzimm',
    youtube: 'https://youtube.com/@zimmzimmgames',
  },
};

export const gameConfig = {
  name: 'W.A.T.A - Where Are The Alices?',
  description: 'Novela visual de terror psicológico inspirada en Alicia en el País de las Maravillas. Combina fantasía oscura, furry, noir y thriller político.',
  genre: ['Novela Visual', 'Terror Psicológico', 'Fantasía Oscura', 'Noir', 'Thriller Político', 'Furry', 'Bad Romance'],
  platform: ['PC', 'Windows', 'Android'],
  releaseDate: '2024',
  developer: 'ZimmZimm Games',
  publisher: 'ZimmZimm Games',
  rating: '4.5',
  ratingCount: '150',
  price: '0',
  currency: 'USD',
  stores: ['Steam', 'itch.io', 'GameJolt'],
  themes: ['Alicia en el País de las Maravillas', 'Fantasía Oscura', 'Furry', 'Noir', 'Thriller Político', 'Terror Psicológico'],
};

// SEO metadata optimizada para máxima visibilidad en navegadores
export const seoMetadata = {
  home: {
    title: 'ZimmZimm Games - W.A.T.A | Novela Visual de Terror Psicológico Indie',
    description: 'Descubre W.A.T.A, novela visual de terror psicológico inspirada en Alicia en el País de las Maravillas. Juego indie único con fantasía oscura, furry y thriller político. Disponible en Steam.',
    keywords: [
      'ZimmZimm Games', 'W.A.T.A', 'novela visual', 'terror psicológico', 
      'Alicia en el País de las Maravillas', 'juego indie', 'Steam', 
      'fantasía oscura', 'furry', 'noir', 'thriller político', 'videojuegos indie'
    ],
  },
  wata: {
    title: 'W.A.T.A - Where Are The Alices? | Novela Visual de Terror Psicológico',
    description: 'W.A.T.A es una novela visual de terror psicológico donde una liebre detective investiga la desaparición de Alicia en un Wonderland corrupto. Juego indie único disponible en Steam.',
    keywords: [
      'W.A.T.A', 'Where Are The Alices', 'novela visual', 'terror psicológico', 
      'Alicia en el País de las Maravillas', 'liebre detective', 'conejo malvado', 
      'Wonderland corrupto', 'Steam', 'juego indie', 'ZimmZimm Games'
    ],
  },
  about: {
    title: 'Sobre ZimmZimm Games | Estudio de Videojuegos Indie Especializado en Terror',
    description: 'Conoce a ZimmZimm Games, estudio independiente especializado en crear experiencias únicas de terror psicológico y novelas visuales como W.A.T.A.',
    keywords: [
      'ZimmZimm Games', 'estudio indie', 'desarrollo de videojuegos', 
      'terror psicológico', 'novelas visuales', 'juegos únicos'
    ],
  },
};

// Datos estructurados CRÍTICOS para visibilidad en navegadores
export const structuredData = {
  organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ZimmZimm Games',
    url: 'https://zimmzimmgames.com',
    logo: 'https://zimmzimmgames.com/Icon/ajuste_avatar_Documents-3.png',
    description: 'Estudio independiente de desarrollo de videojuegos especializado en terror psicológico y novelas visuales únicas',
    sameAs: [
      'https://twitter.com/ZimmZimmGames',
      'https://github.com/ZimmZimmGames',
    ],
  },
  videoGame: {
    '@context': 'https://schema.org',
    '@type': 'VideoGame',
    name: 'W.A.T.A - Where Are The Alices?',
    description: 'Novela visual de terror psicológico inspirada en Alicia en el País de las Maravillas. Combina fantasía oscura, furry, noir y thriller político.',
    genre: ['Novela Visual', 'Terror Psicológico', 'Fantasía Oscura', 'Noir', 'Thriller Político', 'Furry', 'Bad Romance'],
    gamePlatform: ['PC', 'Windows', 'Android'],
    applicationCategory: 'Game',
    operatingSystem: 'Windows',
    datePublished: '2024',
    publisher: {
      '@type': 'Organization',
      name: 'ZimmZimm Games',
    },
    creator: {
      '@type': 'Organization',
      name: 'ZimmZimm Games',
    },
    image: 'https://zimmzimmgames.com/images/Wata/WhereAreTheAlices.JPG',
    url: 'https://zimmzimmgames.com/wata',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: 'https://zimmzimmgames.com/wata',
    },
  },
};

// Performance optimization settings
export const performanceConfig = {
  imageOptimization: {
    formats: ['webp', 'avif'],
    sizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    quality: 85,
  },
  preload: {
    fonts: [
      '/Font/Alice_in_Wonderland_3.ttf',
      '/Font/CourierPrime-Regular.ttf',
    ],
    images: [
      '/images/Wata/WhereAreTheAlices.JPG',
      '/images/Wata/Door.PNG',
    ],
  },
}; 