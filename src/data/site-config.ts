export const siteConfig = {
  name: 'ZimmZimm Games',
  description: 'Estudio independiente especializado en crear experiencias únicas de terror y misterio',
  url: 'https://zimmzimmgames.com',
  ogImage: '/images/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/zimmzimmgames',
    discord: 'https://discord.gg/zimmzimm',
    youtube: 'https://youtube.com/@zimmzimmgames',
    github: 'https://github.com/zimmzimmgames',
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
      url: 'https://twitter.com/zimmzimmgames',
      icon: 'FaTwitter',
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/@zimmzimmgames',
      icon: 'FaYoutube',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/zimmzimmgames',
      icon: 'FaGithub',
    },
  ],
  navigation: [
    { href: '/', label: 'Inicio' },
    { href: '/dev-journal', label: 'Diario' },
    { href: '/about', label: 'Sobre Nosotros' },
    { href: '/faq', label: 'FAQ' },
    { href: '/support', label: 'Soporte' },
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
      title: 'Experiencias Únicas',
      description: 'Creamos juegos que desafían las convenciones',
      icon: 'FaGamepad',
    },
    {
      title: 'Comunidad Activa',
      description: 'Involucramos a nuestros fans en el desarrollo',
      icon: 'FaUsers',
    },
    {
      title: 'Innovación Constante',
      description: 'Exploramos nuevas formas de narrativa',
      icon: 'FaRocket',
    },
  ],
  supportOptions: [
    {
      name: 'PayPal',
      url: 'https://paypal.me/zimmzimmgames',
      icon: 'FaPaypal',
      color: '#00457C',
      description: 'Realiza una donación única o recurrente',
    },
    {
      name: 'Ko-fi',
      url: 'https://ko-fi.com/zimmzimmgames',
      icon: 'SiKofi',
      color: '#FF5E5B',
      description: 'Invítanos a un café y apoya nuestro desarrollo',
    },
    {
      name: 'Patreon',
      url: 'https://www.patreon.com/zimmzimmgames',
      icon: 'FaPatreon',
      color: '#FF424D',
      description: 'Conviértete en patrocinador y obtén recompensas exclusivas',
    },
  ],
  benefits: [
    'Acceso anticipado a nuestros juegos',
    'Contenido exclusivo y behind-the-scenes',
    'Tu nombre en los créditos de nuestros juegos',
    'Participación en decisiones de desarrollo',
    'Discord exclusivo para patrocinadores',
  ],
  faqs: [
    {
      question: '¿Cuándo se lanzará "Where Are The Alices"?',
      answer: 'Estamos trabajando arduamente en el desarrollo de "Where Are The Alices". La fecha exacta de lanzamiento será anunciada en nuestras redes sociales y en el diario de desarrollo.',
    },
    {
      question: '¿En qué plataformas estarán disponibles los juegos?',
      answer: 'Nuestros juegos estarán disponibles inicialmente en Steam para PC. Estamos considerando otras plataformas para el futuro.',
    },
    {
      question: '¿Cómo puedo reportar un bug?',
      answer: 'Puedes reportar bugs a través de nuestra página de soporte o directamente en nuestro servidor de Discord. Agradecemos todos los reportes que nos ayuden a mejorar nuestros juegos.',
    },
    {
      question: '¿Ofrecen versiones de prueba de sus juegos?',
      answer: 'Ocasionalmente lanzamos demos y betas cerradas. Sigue nuestro diario de desarrollo y redes sociales para estar al tanto de estas oportunidades.',
    },
    {
      question: '¿Cómo puedo participar en las betas?',
      answer: 'Las betas son anunciadas en nuestro diario de desarrollo y redes sociales. Los miembros de nuestra comunidad en Discord suelen tener acceso prioritario.',
    },
  ],
} as const; 