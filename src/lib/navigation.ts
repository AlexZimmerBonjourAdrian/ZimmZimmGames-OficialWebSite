/**
 * Configuración de navegación para ZimmZimm Games
 * Utiliza las rutas definidas en routes.ts
 */

import { routes, getExistingRoutes, getWATARoutes, getMainRoutes } from '../routes';

export interface NavigationItem {
  label: string;
  href: string;
  description?: string;
  isActive?: boolean;
  children?: NavigationItem[];
}

/**
 * Configuración del menú principal
 */
export const mainNavigation: NavigationItem[] = [
  {
    label: 'Inicio',
    href: '/',
    description: 'Página principal'
  },
  {
    label: 'W.A.T.A',
    href: '/wata',
    description: 'Where Are The Alices?',
    children: [
      {
        label: 'Juego',
        href: '/wata',
        description: 'Página principal del juego'
      },
      {
        label: 'Opciones',
        href: '/wata/options',
        description: 'Configuración del juego'
      }
    ]
  }
];

/**
 * Configuración del menú de W.A.T.A
 */
export const wataNavigation: NavigationItem[] = [
  {
    label: 'Inicio',
    href: '/wata',
    description: 'Página principal de W.A.T.A'
  },
  {
    label: 'Opciones',
    href: '/wata/options',
    description: 'Configuración del juego'
  }
];

/**
 * Configuración del footer
 */
export const footerNavigation: NavigationItem[] = [
  {
    label: 'Inicio',
    href: '/'
  },
  {
    label: 'W.A.T.A',
    href: '/wata'
  },
  {
    label: 'Opciones',
    href: '/wata/options'
  }
];

/**
 * Obtiene la navegación basada en las rutas existentes
 */
export const getNavigationFromRoutes = () => {
  const existingRoutes = getExistingRoutes();
  
  return {
    main: existingRoutes.filter(route => !route.path.startsWith('/wata')),
    wata: existingRoutes.filter(route => route.path.startsWith('/wata'))
  };
};

/**
 * Verifica si una ruta existe
 */
export const routeExists = (path: string): boolean => {
  return routes.some(route => route.path === path && route.exists);
};

/**
 * Obtiene información de una ruta
 */
export const getRouteInfo = (path: string) => {
  return routes.find(route => route.path === path);
};

/**
 * Genera breadcrumbs para una ruta
 */
export const generateBreadcrumbs = (currentPath: string): NavigationItem[] => {
  const breadcrumbs: NavigationItem[] = [];
  const pathSegments = currentPath.split('/').filter(Boolean);
  
  let currentPathAccumulator = '';
  
  for (const segment of pathSegments) {
    currentPathAccumulator += `/${segment}`;
    const route = getRouteInfo(currentPathAccumulator);
    
    if (route) {
      breadcrumbs.push({
        label: route.name,
        href: route.path,
        description: route.description
      });
    }
  }
  
  return breadcrumbs;
};

/**
 * Configuración de metadatos para cada ruta
 */
export const routeMetadata = {
  '/': {
    title: 'ZimmZimm Games - W.A.T.A | Where Are The Alices?',
    description: 'W.A.T.A (Where Are The Alices?) - Una novela visual de terror psicológico inspirada en Alicia en el País de las Maravillas.',
    keywords: ['W.A.T.A', 'Where Are The Alices?', 'terror psicológico', 'novela visual', 'ZimmZimm Games']
  },
  '/wata': {
    title: 'W.A.T.A - Where Are The Alices? | Juego de Terror Psicológico',
    description: 'Descubre W.A.T.A, un juego de terror psicológico independiente inspirado en Alicia en el País de las Maravillas.',
    keywords: ['W.A.T.A', 'Where Are The Alices?', 'juego de terror psicológico', 'horror psicológico', 'Alicia en el País de las Maravillas']
  },
  '/wata/options': {
    title: 'W.A.T.A - Opciones | Configuración del Juego',
    description: 'Configura las opciones del juego W.A.T.A - Where Are The Alices?',
    keywords: ['W.A.T.A', 'opciones', 'configuración', 'juego']
  }
};

export default {
  mainNavigation,
  wataNavigation,
  footerNavigation,
  getNavigationFromRoutes,
  routeExists,
  getRouteInfo,
  generateBreadcrumbs,
  routeMetadata
};
