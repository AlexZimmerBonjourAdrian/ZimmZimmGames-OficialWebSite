export interface BlogEntry {
  id: string;
  date: string;
  title: string;
  content: string;
  game: string;
  author: string;
}

export const blogEntries: BlogEntry[] = [
  {
    id: '1',
    date: '2024-04-03',
    title: 'Inicio del Desarrollo de Where Are The Alices',
    content: `Hoy comenzamos oficialmente el desarrollo de "Where Are The Alices", nuestro nuevo thriller psicológico. El equipo está emocionado por crear esta experiencia única que mezclará realidad y fantasía.

Algunos puntos clave que hemos definido:
- El juego se desarrollará en un mundo surrealista inspirado en el País de las Maravillas
- La mecánica principal será la resolución de puzzles psicológicos
- La narrativa no lineal permitirá múltiples finales
- La atmósfera será oscura y misteriosa

En las próximas semanas nos centraremos en desarrollar el primer prototipo jugable con las mecánicas básicas.`,
    game: 'Where Are The Alices',
    author: 'Director del Proyecto'
  },
  {
    id: '2',
    date: '2024-04-02',
    title: 'Actualización del Sistema de Combate de Draconiano',
    content: `El equipo de desarrollo ha estado trabajando arduamente en mejorar el sistema de combate de Draconiano. Hemos implementado varias mejoras significativas:

1. Sistema de combo más fluido
2. Nuevas animaciones de ataque
3. Mejora en el feedback visual de los golpes
4. Balance de daño y resistencia

Las pruebas iniciales han sido muy positivas, y los jugadores de la versión alpha han notado una mejora significativa en la sensación de combate.`,
    game: 'Draconiano',
    author: 'Lead Programmer'
  },
  {
    id: '3',
    date: '2024-04-01',
    title: 'Lanzamiento de la Nueva Web',
    content: `Nos complace anunciar el lanzamiento de nuestra nueva página web. Este espacio servirá como hub central para todas nuestras comunicaciones y actualizaciones de desarrollo.

La web incluye:
- Páginas dedicadas para cada juego
- Blog de desarrollo
- Información sobre el estudio
- Enlaces directos a nuestras redes sociales

Esperamos que este nuevo espacio nos ayude a mantener una mejor comunicación con nuestra comunidad.`,
    game: 'General',
    author: 'Community Manager'
  }
]; 