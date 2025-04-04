import { Game } from '@/types/game';

export const games: Game[] = [
  {
    id: 'draconiano',
    title: 'Draconiano',
    description: 'Un RPG de acción ambientado en un mundo oscuro donde los dragones gobiernan.',
    image: 'https://placehold.co/600x400/000000/FFFFFF/png?text=Draconiano',
    platforms: ['PC', 'Xbox'],
    features: [
      'Sistema de combate dinámico',
      'Personalización profunda de personajes',
      'Mundo abierto con múltiples biomas',
      'Historia épica con decisiones morales'
    ],
    status: 'released',
    universe: 'dadasleep'
  },
  {
    id: 'where-are-the-alices',
    title: 'Where Are The Alices',
    description: 'Un thriller psicológico que te sumerge en un mundo donde la realidad y la fantasía se entrelazan.',
    image: '/images/WhereAreTheAlices.JPG',
    platforms: ['PC', 'PlayStation', 'Nintendo Switch'],
    features: [
      'Narrativa no lineal con múltiples finales',
      'Mecánicas de puzzle innovadoras',
      'Atmósfera psicológica envolvente',
      'Banda sonora original'
    ],
    status: 'released',
    universe: 'wonderland'
  }
]; 