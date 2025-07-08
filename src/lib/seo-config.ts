// SEO Configuration for ZimmZimm Games
export const siteConfig = {
  name: 'ZimmZimm Games',
  description: 'Estudio independiente de desarrollo de videojuegos',
  url: 'https://zimmzimmgames.com',
  ogImage: '/images/Wata/WhereAreTheAlices.JPG',
  links: {
    twitter: 'https://twitter.com/ZimmZimmGames',
    github: 'https://github.com/ZimmZimmGames',
  },
};

export const gameConfig = {
  name: 'W.A.T.A - Where Are The Alices?',
  description: 'Una novela visual de terror psicológico inspirada en Alicia en el País de las Maravillas. Dark fantasy, furry, noir y thriller político.',
  genre: ['Visual Novel', 'Terror Psicológico', 'Dark Fantasy', 'Noir', 'Thriller Político', 'Furry', 'Bad Romance'],
  platform: ['PC', 'Windows', 'Android'],
  releaseDate: '2024',
  developer: 'ZimmZimm Games',
  publisher: 'ZimmZimm Games',
  rating: '4.5',
  ratingCount: '150',
  price: '0',
  currency: 'USD',
  stores: ['Steam', 'itch.io', 'GameJolt'],
  themes: ['Alice in Wonderland', 'Dark Fantasy', 'Furry', 'Noir', 'Political Thriller', 'Psychological Horror'],
};

// SEO metadata for different pages
export const   seoMetadata = {
    home: {
      title: 'ZimmZimm Games - W.A.T.A | Novela Visual de Terror Psicológico',
      description: 'W.A.T.A (Where Are The Alices?) - Una novela visual de terror psicológico inspirada en Alicia en el País de las Maravillas. Dark fantasy, furry, noir y thriller político.',
      keywords: ['W.A.T.A', 'Where Are The Alices?', 'Alicia en el País de las Maravillas', 'Alice in Wonderland', 'visual novel', 'novela visual', 'dark fantasy', 'furry', 'noir', 'thriller político', 'terror psicológico', 'ZimmZimm Games'],
    },
    wata: {
      title: 'W.A.T.A - Where Are The Alices? | Novela Visual de Terror Psicológico',
      description: 'Una novela visual de terror psicológico inspirada en Alicia en el País de las Maravillas. Combina dark fantasy, furry, noir y thriller político en una experiencia única.',
      keywords: ['W.A.T.A', 'Where Are The Alices?', 'Alicia en el País de las Maravillas', 'Alice in Wonderland', 'visual novel', 'novela visual', 'dark fantasy', 'furry', 'noir', 'thriller político', 'conejo', 'rabbit', 'reina', 'queen', 'detective', 'bad romance', 'Steam', 'itch.io', 'GameJolt'],
    },
  about: {
    title: 'Acerca de ZimmZimm Games | Estudio de Desarrollo Independiente',
    description: 'Conoce más sobre ZimmZimm Games, un estudio independiente dedicado a crear experiencias únicas en videojuegos.',
    keywords: ['ZimmZimm Games', 'estudio independiente', 'desarrollo de videojuegos', 'juegos indie'],
  },
  support: {
    title: 'Soporte | ZimmZimm Games',
    description: 'Obtén ayuda y soporte para nuestros juegos. Encuentra respuestas a preguntas frecuentes y contacta con nuestro equipo.',
    keywords: ['soporte', 'ayuda', 'ZimmZimm Games', 'W.A.T.A', 'preguntas frecuentes'],
  },
};

// Structured data for different content types
export const structuredData = {
  organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ZimmZimm Games',
    url: 'https://zimmzimmgames.com',
    logo: 'https://zimmzimmgames.com/Icon/ajuste_avatar_Documents-3.png',
    description: 'Estudio independiente de desarrollo de videojuegos',
    sameAs: [
      'https://twitter.com/ZimmZimmGames',
      'https://github.com/ZimmZimmGames',
    ],
  },
      videoGame: {
      '@context': 'https://schema.org',
      '@type': 'VideoGame',
      name: 'W.A.T.A - Where Are The Alices?',
      description: 'Una novela visual de terror psicológico inspirada en Alicia en el País de las Maravillas. Combina dark fantasy, furry, noir y thriller político en una experiencia única.',
      genre: ['Visual Novel', 'Terror Psicológico', 'Dark Fantasy', 'Noir', 'Thriller Político', 'Furry', 'Bad Romance'],
      gamePlatform: ['PC', 'Windows', 'Android'],
    applicationCategory: 'Game',
    operatingSystem: 'Windows',
    softwareVersion: '1.0',
    datePublished: '2024',
    publisher: {
      '@type': 'Organization',
      name: 'ZimmZimm Games',
      url: 'https://zimmzimmgames.com',
    },
    creator: {
      '@type': 'Organization',
      name: 'ZimmZimm Games',
    },
    image: 'https://zimmzimmgames.com/images/Wata/WhereAreTheAlices.JPG',
    url: 'https://zimmzimmgames.com/wata',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.5',
      ratingCount: '150',
      bestRating: '5',
      worstRating: '1',
    },
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