# Sistema de Enrutamiento - ZimmZimm Games

Este documento describe el sistema de enrutamiento implementado para la aplicación ZimmZimm Games.

## Archivos del Sistema

### 1. `src/routes.ts`
Archivo principal que define todas las rutas de la aplicación.

**Rutas Existentes:**
- `/` - Página principal (HomeSection)
- `/wata` - Página principal del juego W.A.T.A
- `/wata/options` - Opciones de configuración del juego

**Rutas Planificadas:**
- `/wata/download` - Página de descarga
- `/wata/steam` - Página de Steam
- `/wata/itchio` - Página de Itch.io
- `/wata/gamejolt` - Página de GameJolt
- `/wata/demo` - Demo del juego
- `/wata/gallery` - Galería de imágenes
- `/wata/story` - Historia del juego
- `/wata/extras` - Contenido extra
- `/wata/credits` - Créditos
- `/about` - Página sobre nosotros
- `/dev-journal` - Diario de desarrollo
- `/faq` - Preguntas frecuentes
- `/support` - Soporte
- `/donaciones` - Donaciones
- `/draconiano` - Proyecto Draconiano

### 2. `src/lib/navigation.ts`
Configuración de navegación y utilidades.

**Funciones principales:**
- `getNavigationFromRoutes()` - Obtiene navegación basada en rutas existentes
- `routeExists(path)` - Verifica si una ruta existe
- `getRouteInfo(path)` - Obtiene información de una ruta
- `generateBreadcrumbs(path)` - Genera breadcrumbs para una ruta

### 3. `src/components/Navigation.tsx`
Componente de navegación reutilizable.

**Props:**
- `variant?: 'main' | 'wata'` - Tipo de navegación
- `className?: string` - Clases CSS adicionales

### 4. `src/components/Navigation.module.css`
Estilos para el componente de navegación.

## Uso

### Importar el sistema de enrutamiento

```typescript
import { routes, getExistingRoutes, findRouteByPath } from '@/routes';
import { mainNavigation, routeExists } from '@/lib/navigation';
import Navigation from '@/components/Navigation';
```

### Usar el componente de navegación

```tsx
// Navegación principal
<Navigation variant="main" />

// Navegación específica de W.A.T.A
<Navigation variant="wata" />
```

### Verificar si una ruta existe

```typescript
if (routeExists('/wata')) {
  // La ruta existe
}
```

### Obtener información de una ruta

```typescript
const routeInfo = getRouteInfo('/wata');
console.log(routeInfo?.name); // "W.A.T.A"
```

### Generar breadcrumbs

```typescript
const breadcrumbs = generateBreadcrumbs('/wata/options');
// Retorna: [{ label: 'W.A.T.A', href: '/wata' }, { label: 'W.A.T.A Options', href: '/wata/options' }]
```

## Estructura de Datos

### Route Interface

```typescript
interface Route {
  path: string;        // Ruta de la página
  name: string;        // Nombre para mostrar
  description: string; // Descripción de la página
  component: string;   // Nombre del componente
  exists: boolean;     // Si la ruta existe físicamente
}
```

### NavigationItem Interface

```typescript
interface NavigationItem {
  label: string;           // Texto del enlace
  href: string;           // URL del enlace
  description?: string;   // Descripción opcional
  isActive?: boolean;     // Si está activo
  children?: NavigationItem[]; // Submenús
}
```

## Características

- ✅ **Rutas existentes y planificadas** - Separación clara entre rutas implementadas y futuras
- ✅ **Navegación responsiva** - Funciona en desktop y móvil
- ✅ **Breadcrumbs automáticos** - Generación automática de breadcrumbs
- ✅ **Verificación de rutas** - Funciones para verificar existencia de rutas
- ✅ **Metadatos de rutas** - Configuración de SEO para cada ruta
- ✅ **Navegación anidada** - Soporte para submenús
- ✅ **Estados activos** - Detección automática de ruta activa
- ✅ **Animaciones suaves** - Transiciones y efectos visuales

## Extensión del Sistema

### Agregar una nueva ruta

1. **Agregar a `routes.ts`:**
```typescript
{
  path: '/nueva-ruta',
  name: 'Nueva Ruta',
  description: 'Descripción de la nueva ruta',
  component: 'NuevoComponente',
  exists: true
}
```

2. **Crear el archivo de página:**
```
src/app/nueva-ruta/page.tsx
```

3. **Agregar metadatos en `navigation.ts`:**
```typescript
'/nueva-ruta': {
  title: 'Nueva Ruta | ZimmZimm Games',
  description: 'Descripción para SEO',
  keywords: ['palabra1', 'palabra2']
}
```

### Agregar navegación personalizada

```typescript
const customNavigation: NavigationItem[] = [
  {
    label: 'Mi Página',
    href: '/mi-pagina',
    description: 'Descripción de mi página'
  }
];
```

## Mantenimiento

- **Actualizar rutas existentes** cuando se implementen nuevas páginas
- **Mover rutas de planificadas a existentes** cuando se creen los archivos
- **Actualizar metadatos** para mejorar SEO
- **Revisar navegación** cuando se agreguen nuevas secciones

## Compatibilidad

- ✅ Next.js 13+ (App Router)
- ✅ TypeScript
- ✅ CSS Modules
- ✅ Responsive Design
- ✅ Accesibilidad (ARIA labels)
