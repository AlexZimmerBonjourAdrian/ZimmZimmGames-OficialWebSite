export const siteConfig = {
  name: 'ZimmZimm Games',
  description: 'Indie studio specialized in creating unique psychological horror and mystery experiences',
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