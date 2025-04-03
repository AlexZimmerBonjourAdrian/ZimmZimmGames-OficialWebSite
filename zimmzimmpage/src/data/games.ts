export interface Game {
  id: string;
  title: string;
  status: 'released' | 'in_production';
  platforms: string[];
  description: string;
  image: string;
  features: string[];
  releaseDate?: string;
  universe: 'wonderland' | 'travelers' | 'dadasleep' | 'cults' | 'corrupt';
}

export const games: Game[] = [
  // Universo Wonderland
  {
    id: 'where-are-the-alices',
    title: 'Where are the Alices?',
    status: 'released',
    platforms: ['PC', 'Nintendo Switch', 'PlayStation'],
    description: 'Un thriller psicológico que te sumerge en un mundo donde la realidad y la fantasía se entrelazan.',
    image: '/where-are-the-alices.jpg',
    features: [
      'Narrativa no lineal con múltiples finales',
      'Mecánicas de puzzle innovadoras',
      'Atmósfera psicológica envolvente'
    ],
    releaseDate: '2024',
    universe: 'wonderland'
  },
  /*{
    id: 'wonderland-horror',
    title: 'Wonderland of Horror',
    status: 'in_production',
    platforms: ['PC', 'PlayStation', 'Xbox'],
    description: 'Una versión oscura y retorcida del País de las Maravillas.',
    image: '/wonderland-horror.jpg',
    features: [
      'Atmósfera de terror psicológico',
      'Puzzles desafiantes',
      'Enemigos únicos y memorables'
    ],
    universe: 'wonderland'
  },
  {
    id: 'the-younguer-wonderland',
    title: 'The Younguer Wonderland',
    status: 'in_production',
    platforms: ['PC', 'Nintendo Switch'],
    description: 'Una precuela oscura de Wonderland of Horror que explora los orígenes del terror en el País de las Maravillas.',
    image: '/the-younguer-wonderland.jpg',
    features: [
      'Atmósfera de terror psicológico',
      'Mecánicas de sigilo mejoradas',
      'Sistema de cordura dinámico',
      'Múltiples finales basados en tus decisiones'
    ],
    universe: 'wonderland'
  },*/

  // Universo Travelers
  {
    id: 'draconiano',
    title: 'Draconiano',
    status: 'in_production',
    platforms: ['PC', 'Xbox'],
    description: 'Un RPG de acción ambientado en un mundo oscuro donde los dragones gobiernan.',
    image: '/draconiano.jpg',
    features: [
      'Sistema de combate dinámico',
      'Personalización profunda de personajes',
      'Mundo abierto con múltiples biomas'
    ],
    universe: 'travelers'
  },
  /*{
    id: 'draconiano-vendetta',
    title: 'Draconiano: Spirit of Vendetta',
    status: 'in_production',
    platforms: ['PC', 'PlayStation', 'Xbox'],
    description: 'La secuela de Draconiano te lleva a una nueva aventura donde la venganza es el motor principal.',
    image: '/draconiano-vendetta.jpg',
    features: [
      'Nuevo sistema de combate mejorado',
      'Habilidades especiales únicas',
      'Mundo expandido con nuevas regiones'
    ],
    universe: 'travelers'
  },

  // Universo DadaSleep
  {
    id: 'should-i-forgotten-myself',
    title: 'Should I Forgotten Myself?',
    status: 'in_production',
    platforms: ['PC', 'PlayStation'],
    description: 'Un thriller psicológico donde la pérdida de memoria se convierte en tu peor enemigo.',
    image: '/should-i-forgotten-myself.jpg',
    features: [
      'Sistema de memoria dinámico',
      'Realidad distorsionada',
      'Múltiples personalidades'
    ],
    universe: 'dadasleep'
  },
  {
    id: 'chat-below',
    title: 'Chat Below',
    status: 'in_production',
    platforms: ['PC', 'Nintendo Switch'],
    description: 'Un juego de terror donde la comunicación con otros jugadores puede ser tu salvación o tu perdición.',
    image: '/chat-below.jpg',
    features: [
      'Chat en tiempo real con otros jugadores',
      'Mecánicas de cooperación y traición',
      'Múltiples finales basados en tus decisiones'
    ],
    universe: 'dadasleep'
  },

  // Universo Cults
  {
    id: 'outside-of-the-cult',
    title: 'Outside of the Cult',
    status: 'in_production',
    platforms: ['PC', 'PlayStation', 'Xbox'],
    description: 'Un juego de terror psicológico donde debes escapar de una secta oscura mientras descubres horribles secretos.',
    image: '/outside-of-the-cult.jpg',
    features: [
      'Sistema de sigilo avanzado',
      'Múltiples rutas de escape',
      'Enemigos con IA adaptativa'
    ],
    universe: 'cults'
  },
  {
    id: 'yellow-king',
    title: 'Yellow King',
    status: 'in_production',
    platforms: ['PC', 'PlayStation', 'Xbox'],
    description: 'Un juego de terror lovecraftiano que te sumerge en un mundo de locura y misterio.',
    image: '/yellow-king.jpg',
    features: [
      'Sistema de cordura dinámico',
      'Mundo abierto con múltiples rutas',
      'Enemigos lovecraftianos'
    ],
    universe: 'cults'
  },

  // Universo Corrupt
  {
    id: 'cryptcard',
    title: 'CryptCard',
    status: 'in_production',
    platforms: ['PC', 'Mobile'],
    description: 'Un juego de cartas con elementos de terror donde cada carta cuenta una historia macabra.',
    image: '/cryptcard.jpg',
    features: [
      'Sistema de cartas coleccionables',
      'Modo historia con narrativa profunda',
      'Modo multijugador competitivo'
    ],
    universe: 'corrupt'
  },
  {
    id: 'sir-dark-general',
    title: 'Sir Dark General',
    status: 'in_production',
    platforms: ['PC', 'PlayStation', 'Xbox'],
    description: 'Un juego de acción y terror donde encarnas a un general oscuro en busca de venganza.',
    image: '/sir-dark-general.jpg',
    features: [
      'Combate fluido y brutal',
      'Sistema de habilidades oscuras',
      'Mundo abierto con múltiples rutas'
    ],
    universe: 'corrupt'
  },
  {
    id: 'air-creepyr',
    title: 'Air Creepyr',
    status: 'in_production',
    platforms: ['PC', 'Nintendo Switch'],
    description: 'Un juego de terror en primera persona ambientado en un avión abandonado.',
    image: '/air-creepyr.jpg',
    features: [
      'Terror psicológico intenso',
      'Mecánicas de sigilo',
      'Atmósfera claustrofóbica'
    ],
    universe: 'corrupt'
  },
  {
    id: 'order-darkness',
    title: 'Order in Darkness',
    status: 'in_production',
    platforms: ['PC', 'PlayStation'],
    description: 'Un juego de estrategia por turnos ambientado en un mundo de magia oscura.',
    image: '/order-darkness.jpg',
    features: [
      'Sistema de combate táctico profundo',
      'Personalización de unidades',
      'Modo campaña extenso'
    ],
    universe: 'corrupt'
  }*/
]; 