import { Game } from '@/types/game';

export const games: Game[] = [
  {
    id: 'draconiano',
    title: 'Draconiano',
    description: 'Tras pactar con una máscara demoníaca para saldar sus deudas, un estafador descubre que su cuerpo es ahora propiedad del ente: convertido en mero espectador de sus propios actos, deberá recuperar el control luchando contra sectas interdimensionales... antes de que su mente sea borrada para siempre.',
    image: 'https://placehold.co/600x400/000000/FFFFFF/png?text=Draconiano',
    platforms: ['PC'],
    features: [
      'Sistema de combate dinámico contra sectas interdimensionales',
      'Mecánica única de posesión demoníaca y lucha por el control',
      'Mundo abierto con múltiples dimensiones y biomas',
      'Historia épica con decisiones morales que afectan tu humanidad',
      'Sistema de alianzas con entidades sobrenaturales',
      'Banda sonora atmosférica que refleja la corrupción mental'
    ],
    status: 'released',
    universe: 'travelers',
    repository: 'https://github.com/zimmzimmgames/draconiano',
    steamUrl: 'https://store.steampowered.com/app/2471960/Draconiano/'
  },
  {
    id: 'where-are-the-alices',
    title: 'Where Are The Alices',
    description: 'Cuando la pequeña Alicia desaparece, una liebre detective se ve arrastrada al enfrentamiento con un antiguo enemigo: un conejo diminuto pero letal, cuya maldad es una peste olvidada. Este caso es solo la entrada a un infierno personal, una travesía donde resolver esta conspiración podría costarle la última pizca de su humanidad.',
    image: '/images/WhereAreTheAlices.JPG',
    platforms: ['PC', 'Android'],
    features: [
      'Narrativa no lineal con múltiples finales que afectan tu humanidad',
      'Mecánicas de detective innovadoras en un mundo surrealista',
      'Atmósfera psicológica envolvente con elementos de terror',
      'Sistema de pistas y conspiraciones interconectadas',
      'Banda sonora original que adapta la música a la tensión',
      'Múltiples dimensiones del Wonderland corrupto'
    ],
    status: 'development',
    universe: 'wonderland'
  }
]; 