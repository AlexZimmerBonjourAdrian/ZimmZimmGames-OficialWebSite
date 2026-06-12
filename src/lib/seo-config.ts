// SEO Configuration for ZimmZimm Games - Optimized for Maximum Browser Visibility
export const siteConfig = {
  name: 'ZimmZimm Games',
  description: 'Indie studio specialized in psychological horror and unique visual novels like W.A.T.A',
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
  name: 'Where are The Alices?',
  description: 'Where are The Alices? A cinematic Noir psychological horror visual novel in a Wonderland gone mad.',
  genre: ['Visual Novel', 'Psychological Horror', 'Dark Fantasy', 'Noir', 'Cinematic', 'Political Thriller', 'Furry', 'Bad Romance'],
  platform: ['PC', 'Windows', 'Android'],
  releaseDate: '2025',
  developer: 'ZimmZimm Games',
  publisher: 'ZimmZimm Games',
  rating: '4.5',
  ratingCount: '150',
  price: '0',
  currency: 'USD',
  stores: ['Steam', 'itch.io', 'GameJolt'],
  themes: ['Alice in Wonderland', 'Dark Fantasy', 'Furry', 'Noir', 'Cinematic', 'Political Thriller', 'Psychological Horror'],
};

// SEO metadata optimized for maximum visibility in browsers
export const seoMetadata = {
  home: {
    title: 'Where are The Alices? Cinematic Noir Psychological Horror Visual Novel',
    description: 'Where are The Alices? A cinematic Noir psychological horror visual novel in a Wonderland gone mad.',
    keywords: [
      'Where are The Alices', 'visual novel', 'psychological horror', 
      'Alice in Wonderland', 'Noir', 'cinematic', 'indie game', 'Steam', 
      'dark fantasy', 'furry', 'political thriller', 'indie games'
    ],
  },
  wata: {
    title: 'Where are The Alices? Cinematic Noir Psychological Horror Visual Novel',
    description: 'Where are The Alices? A cinematic Noir psychological horror visual novel in a Wonderland gone mad.',
    keywords: [
      'Where Are The Alices', 'visual novel', 'psychological horror', 
      'Alice in Wonderland', 'Noir', 'cinematic', 'detective rabbit', 'evil rabbit', 
      'corrupt Wonderland', 'Steam', 'indie game', 'ZimmZimm Games'
    ],
  },
  about: {
    title: 'About ZimmZimm Games | Indie Game Studio Specialized in Horror',
    description: 'Meet ZimmZimm Games, an independent studio specialized in creating unique psychological horror and visual novel experiences like W.A.T.A: Where are the Alices?.',
    keywords: [
      'ZimmZimm Games', 'indie studio', 'game development', 
      'psychological horror', 'visual novels', 'unique games'
    ],
  },
};

// CRITICAL structured data for browser visibility
export const structuredData = {
  organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ZimmZimm Games',
    url: 'https://zimmzimmgames.com',
    logo: 'https://zimmzimmgames.com/Icon/ajuste_avatar_Documents-3.png',
    description: 'Indie studio specialized in psychological horror and unique visual novels',
    email: 'zimmzimmgames@gmail.com',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'zimmzimmgames@gmail.com',
      contactType: 'general contact'
    },
    sameAs: [
      'https://twitter.com/ZimmZimmGames',
      'https://github.com/ZimmZimmGames',
      'https://discord.gg/zimmzimm',
      'https://youtube.com/@zimmzimmgames'
    ],
  },
  videoGame: {
    '@context': 'https://schema.org',
    '@type': 'VideoGame',
    name: 'Where are The Alices?',
    description: 'Where are The Alices? A cinematic Noir psychological horror visual novel in a Wonderland gone mad.',
    genre: ['Visual Novel', 'Psychological Horror', 'Dark Fantasy', 'Noir', 'Cinematic', 'Political Thriller', 'Furry', 'Bad Romance'],
    gamePlatform: ['PC', 'Windows', 'Android'],
    applicationCategory: 'Game',
    operatingSystem: 'Windows',
    datePublished: '2025',
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