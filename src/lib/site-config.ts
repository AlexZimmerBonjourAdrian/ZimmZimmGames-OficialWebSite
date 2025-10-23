// Configuración consolidada de ZimmZimm Games - Optimizada para Alicia y Wonderland
export const siteConfig = {
  name: 'ZimmZimm Games',
  description: 'Indie studio specialized in creating unique psychological horror and mystery experiences inspired by Alice in Wonderland',
  url: 'https://zimmzimmgames.com',
  ogImage: '/images/Wata/WhereAreTheAlices.JPG',
  links: {
    twitter: 'https://twitter.com/ZimmZimmGames',
    discord: 'https://discord.gg/zimmzimm',
    youtube: 'https://youtube.com/@zimmzimmgames',
    github: 'https://github.com/ZimmZimmGames',
    patreon: 'https://www.patreon.com/zimmzimmgames',
    paypal: 'https://paypal.me/zimmzimmgames',
    kofi: 'https://ko-fi.com/zimmzimmgames',
  },
  contact: {
    email: 'contact@zimmzimmgames.com',
  },
  social: [
    {
      name: 'Discord',
      url: 'https://discord.gg/zimmzimm',
      icon: 'FaDiscord',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/ZimmZimmGames',
      icon: 'FaTwitter',
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/@zimmzimmgames',
      icon: 'FaYoutube',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/ZimmZimmGames',
      icon: 'FaGithub',
    },
  ],
  navigation: [
    { href: '/', label: 'Home' },
    { href: '/dev-journal', label: 'Dev Journal' },
    { href: '/about', label: 'About Us' },
    { href: '/faq', label: 'FAQ' },
    { href: '/support', label: 'Support' },
  ],
  universes: [
    { id: 'all', name: 'TODOS', color: 'gray' },
    { id: 'wonderland', name: 'WONDERLAND', color: 'purple' },
    { id: 'travelers', name: 'TRAVELERS', color: 'blue' },
    { id: 'dadasleep', name: 'DADASLEEP', color: 'green' },
    { id: 'cults', name: 'CULTS', color: 'red' },
    { id: 'corrupt', name: 'CORRUPT', color: 'orange' }
  ],
  features: [
    {
      title: 'Unique Experiences',
      description: 'We create games that challenge conventions',
      icon: 'FaGamepad',
    },
    {
      title: 'Active Community',
      description: 'We involve our fans in development',
      icon: 'FaUsers',
    },
    {
      title: 'Constant Innovation',
      description: 'We explore new forms of narrative',
      icon: 'FaRocket',
    },
  ],
  supportOptions: [
    {
      name: 'PayPal',
      url: 'https://paypal.me/zimmzimmgames',
      icon: 'FaPaypal',
      color: '#00457C',
      description: 'Make a one-time or recurring donation',
    },
    {
      name: 'Ko-fi',
      url: 'https://ko-fi.com/zimmzimmgames',
      icon: 'SiKofi',
      color: '#FF5E5B',
      description: 'Buy us a coffee and support our development',
    },
    {
      name: 'Patreon',
      url: 'https://www.patreon.com/zimmzimmgames',
      icon: 'FaPatreon',
      color: '#FF424D',
      description: 'Become a patron and get exclusive rewards',
    },
  ],
  benefits: [
    'Early access to our games',
    'Exclusive content and behind-the-scenes',
    'Your name in the credits of our games',
    'Participation in development decisions',
    'Exclusive Discord for patrons',
  ],
  faqs: [
    {
      question: 'When will "Where Are The Alices" be released?',
      answer: 'We are working hard on the development of "Where Are The Alices". The exact release date will be announced on our social media and in the development journal.',
    },
    {
      question: 'On which platforms will the games be available?',
      answer: 'Our games will be initially available on Steam for PC. We are considering other platforms for the future.',
    },
    {
      question: 'How can I report a bug?',
      answer: 'You can report bugs through our support page or directly on our Discord server. We appreciate all reports that help us improve our games.',
    },
    {
      question: 'Do you offer trial versions of your games?',
      answer: 'We occasionally release demos and closed betas. Follow our development journal and social media to stay updated on these opportunities.',
    },
    {
      question: 'How can I participate in betas?',
      answer: 'Betas are announced in our development journal and social media. Members of our Discord community usually have priority access.',
    },
  ],
} as const;

// Configuración del juego W.A.T.A con personajes y términos optimizados
export const gameConfig = {
  name: 'W.A.T.A - Where Are The Alices?',
  shortName: 'W.A.T.A',
  fullName: 'Where Are The Alices?',
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
  
  // Personajes principales
  characters: {
    main: [
      { name: 'C.B.', fullName: 'C.B.', role: 'Detective', description: 'Rabbit detective with a dark past' },
      { name: 'June', fullName: 'June Hare Star', aliases: ['Juno Hare Star'], role: 'Protagonist', description: 'Wonderland Hare detective and protagonist' },
    ],
    alices: [
      { name: 'Alice Maine', role: 'Missing Girl', description: 'The kidnapped girl C.B. must find' },
      { name: 'Alice Queenstone', role: 'Royal Alice', description: 'Alice connected to the Queen of Hearts' },
      { name: 'Alice Ludwig', role: 'Mysterious Alice', description: 'Alice with hidden secrets' },
      { name: 'Alice Deeps', role: 'Deep Alice', description: 'Alice from the depths of Wonderland' },
      { name: 'Alice Dinner', role: 'Dinner Alice', description: 'Alice from the Mad Tea Party' },
    ],
    wonderland: [
      { name: 'Cheshire Cat', role: 'Mysterious Guide', description: 'The enigmatic Cheshire Cat' },
      { name: 'Queen of Hearts', role: 'Tyrant Queen', description: 'The beheading tyrant queen' },
      { name: 'King of Hearts', role: 'King', description: 'The King of Hearts' },
      { name: 'Blue Hare', role: 'Character', description: 'Blue Hare character' },
      { name: 'Ashu Star', role: 'Character', description: 'Ashu Star character' },
    ]
  },
  
  // Términos específicos de Wonderland oscuro
  darkWonderland: {
    themes: ['Cannibals', 'Trauma', 'Corrupted Wonderland', 'Psychological Horror', 'Dark Fantasy'],
    locations: ['Corrupted Wonderland', 'Mad Tea Party', 'Queen\'s Court', 'Cheshire\'s Domain'],
    concepts: ['Trauma', 'Cannibalism', 'Psychological Horror', 'Corrupted Reality', 'Dark Wonderland']
  }
};

// SEO metadata optimizada para Alicia y Wonderland
export const seoMetadata = {
  home: {
    title: 'ZimmZimm Games - W.A.T.A | Where Are The Alices? | Alice in Wonderland Horror',
    description: 'Discover W.A.T.A, a psychological horror visual novel inspired by Alice in Wonderland. Play as June Hare Star, a Wonderland Hare detective and protagonist investigating missing Alices in a corrupted Wonderland. Available on Steam.',
    keywords: [
      'ZimmZimm Games', 'W.A.T.A', 'Where Are The Alices', 'Alice in Wonderland', 
      'visual novel', 'psychological horror', 'C.B.', 'June Hare Star', 'Juno Hare Star', 'Wonderland Hare detective',
      'corrupted Wonderland', 'dark Wonderland', 'Cheshire Cat', 'Queen of Hearts',
      'Alice Maine', 'Alice Queenstone', 'Alice Ludwig', 'Alice Deeps', 'Alice Dinner',
      'Blue Hare', 'Ashu Star', 'cannibals', 'trauma', 'Steam', 'indie game'
    ],
  },
  wata: {
    title: 'W.A.T.A - Where Are The Alices? | Alice in Wonderland Horror Visual Novel',
    description: 'Play as June Hare Star, a Wonderland Hare detective and protagonist investigating missing Alices in a corrupted Wonderland. A psychological horror visual novel featuring Cheshire Cat, Queen of Hearts, and dark Wonderland themes.',
    keywords: [
      'W.A.T.A', 'Where Are The Alices', 'Alice in Wonderland', 'C.B.', 'June Hare Star', 'Juno Hare Star',
      'Wonderland Hare detective', 'corrupted Wonderland', 'dark Wonderland', 'Cheshire Cat',
      'Queen of Hearts', 'King of Hearts', 'Alice Maine', 'Alice Queenstone', 
      'Alice Ludwig', 'Alice Deeps', 'Alice Dinner', 'Blue Hare', 'Ashu Star',
      'cannibals', 'trauma', 'psychological horror', 'visual novel', 'Steam'
    ],
  },
  about: {
    title: 'About ZimmZimm Games | Alice in Wonderland Horror Game Studio',
    description: 'Meet ZimmZimm Games, creators of W.A.T.A - Where Are The Alices?, a psychological horror visual novel inspired by Alice in Wonderland with dark themes.',
    keywords: [
      'ZimmZimm Games', 'indie studio', 'Alice in Wonderland', 'W.A.T.A',
      'psychological horror', 'visual novels', 'dark Wonderland', 'game development'
    ],
  },
};

// Datos estructurados optimizados para Alicia y Wonderland
export const structuredData = {
  organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ZimmZimm Games',
    url: 'https://zimmzimmgames.com',
    logo: 'https://zimmzimmgames.com/Icon/ajuste_avatar_Documents-3.png',
    description: 'Indie studio specialized in psychological horror and unique visual novels inspired by Alice in Wonderland',
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
    alternateName: 'Where Are The Alices?',
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
    // Personajes del juego
    character: [
      {
        '@type': 'Thing',
        name: 'C.B.',
        description: 'Rabbit detective with a dark past investigating missing Alices'
      },
      {
        '@type': 'Thing', 
        name: 'June Hare Star',
        alternateName: ['Juno Hare Star'],
        description: 'Wonderland Hare detective and protagonist'
      },
      {
        '@type': 'Thing',
        name: 'Alice Maine',
        description: 'The kidnapped girl C.B. must find'
      },
      {
        '@type': 'Thing',
        name: 'Cheshire Cat',
        description: 'The enigmatic Cheshire Cat from Wonderland'
      },
      {
        '@type': 'Thing',
        name: 'Queen of Hearts',
        description: 'The tyrannical Queen of Hearts'
      }
    ],
    // Temas del juego
    about: [
      'Alice in Wonderland',
      'Corrupted Wonderland', 
      'Psychological Horror',
      'Dark Fantasy',
      'Trauma',
      'Cannibals'
    ]
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
      '/Gameplay/Case00-CB.jpg',
      '/ConceptArt/ConceptJunoAndCB.png',
      '/Characters/Profile/CB.png',
      '/Characters/Profile/Juno.png'
    ],
  },
};
