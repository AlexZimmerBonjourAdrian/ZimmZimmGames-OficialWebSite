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
  name: 'W.A.T.A - Where Are The Alices?',
  description: 'A sadistic villain forces a detective, who hides a past of madness, to return to her own Wonderland to solve a girl\'s kidnapping, in a twisted psychological game where sanity is the greatest threat.',
  genre: ['Visual Novel', 'Psychological Horror', 'Dark Fantasy', 'Noir', 'Political Thriller', 'Furry', 'Bad Romance'],
  platform: ['PC', 'Windows', 'Android'],
  releaseDate: '2025',
  developer: 'ZimmZimm Games',
  publisher: 'ZimmZimm Games',
  rating: '4.5',
  ratingCount: '150',
  price: '0',
  currency: 'USD',
  stores: ['Steam', 'itch.io', 'GameJolt'],
  themes: ['Alice in Wonderland', 'Dark Fantasy', 'Furry', 'Noir', 'Political Thriller', 'Psychological Horror'],
};

// SEO metadata optimizada para máxima visibilidad en navegadores
export const seoMetadata = {
  home: {
    title: 'ZimmZimm Games - W.A.T.A | Psychological Horror Visual Novel Indie',
    description: 'Discover W.A.T.A, a psychological horror visual novel inspired by Alice in Wonderland. Unique indie game with dark fantasy, furry and political thriller elements. Available on Steam.',
    keywords: [
      'ZimmZimm Games', 'W.A.T.A', 'visual novel', 'psychological horror', 
      'Alice in Wonderland', 'indie game', 'Steam', 
      'dark fantasy', 'furry', 'noir', 'political thriller', 'indie games'
    ],
  },
  wata: {
    title: 'W.A.T.A - Where Are The Alices? | Psychological Horror Visual Novel',
    description: 'A sadistic villain forces a detective, who hides a past of madness, to return to her own Wonderland to solve a girl\'s kidnapping, in a twisted psychological game where sanity is the greatest threat.',
    keywords: [
      'W.A.T.A', 'Where Are The Alices', 'visual novel', 'psychological horror', 
      'Alice in Wonderland', 'detective rabbit', 'evil rabbit', 
      'corrupt Wonderland', 'Steam', 'indie game', 'ZimmZimm Games'
    ],
  },
  about: {
    title: 'About ZimmZimm Games | Indie Game Studio Specialized in Horror',
    description: 'Meet ZimmZimm Games, an independent studio specialized in creating unique psychological horror and visual novel experiences like W.A.T.A.',
    keywords: [
      'ZimmZimm Games', 'indie studio', 'game development', 
      'psychological horror', 'visual novels', 'unique games'
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
    description: 'Indie studio specialized in psychological horror and unique visual novels',
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
    name: 'W.A.T.A - Where Are The Alices?',
    description: 'A sadistic villain forces a detective, who hides a past of madness, to return to her own Wonderland to solve a girl\'s kidnapping, in a twisted psychological game where sanity is the greatest threat.',
    genre: ['Visual Novel', 'Psychological Horror', 'Dark Fantasy', 'Noir', 'Political Thriller', 'Furry', 'Bad Romance'],
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