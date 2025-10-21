# Sistema de Preloading - ZimmZimm Games

## Descripción

Se ha implementado un sistema completo de preloading optimizado que mejora significativamente la experiencia de usuario al cargar recursos críticos antes de que sean necesarios.

## Características Principales

### 1. **ResourcePreloader Class**
- Preloading inteligente de imágenes y fuentes
- Progreso en tiempo real
- Manejo de errores robusto
- Compatibilidad con SSR

### 2. **LoadingPage Mejorado**
- Integración con preloading real
- Textos dinámicos según el progreso
- Indicadores visuales de preloading
- Duración mínima configurable

### 3. **PreloadManager Component**
- Wrapper para manejar preloading a nivel de página
- Indicador de progreso global
- Configuración por página

## Uso

### LoadingPage con Preloading

```tsx
import { LoadingPage } from '@/components';

// Uso básico con preloading
<LoadingPage 
  onComplete={handleComplete}
  duration={2000}
  page="home"
  enablePreloading={true}
/>

// Sin preloading (comportamiento original)
<LoadingPage 
  onComplete={handleComplete}
  duration={2000}
  enablePreloading={false}
/>
```

### PreloadManager

```tsx
import { PreloadManager } from '@/components';

<PreloadManager 
  page="home"
  enablePreloading={true}
  onPreloadComplete={() => console.log('Preloading complete')}
>
  <YourAppContent />
</PreloadManager>
```

### Configuración de Recursos

```tsx
import { criticalResources, pagePreloadConfigs } from '@/lib/preloader';

// Recursos críticos globales
const globalResources = criticalResources;

// Recursos específicos por página
const homeResources = pagePreloadConfigs.home;
const wataResources = pagePreloadConfigs.wata;
```

## Configuración

### Recursos Críticos

Los recursos se configuran en `src/lib/preloader.ts`:

```typescript
export const criticalResources: PreloadConfig = {
  images: [
    '/images/Wata/WhereAreTheAlices.JPG',
    '/images/Wata/Door.PNG',
    // ... más imágenes
  ],
  fonts: [
    '/Font/Alice_in_Wonderland_3.ttf',
    '/Font/CourierPrime-Regular.ttf',
    // ... más fuentes
  ],
  scripts: [],
  styles: []
};
```

### Preload Links en HTML

Se han agregado preload links en `layout.tsx`:

```html
<link rel="preload" href="/Font/Alice_in_Wonderland_3.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
<link rel="preload" href="/images/Wata/WhereAreTheAlices.JPG" as="image" />
```

## Optimizaciones Implementadas

### 1. **Next.js Config**
- Headers de cache optimizados
- Compresión habilitada
- Optimizaciones experimentales

### 2. **Carga Paralela**
- Máximo 3 imágenes simultáneas
- Fuentes cargadas en paralelo
- Manejo de errores no bloqueante

### 3. **Progreso Inteligente**
- Progreso real basado en recursos cargados
- Duración mínima respetada
- Indicadores visuales claros

## Beneficios

1. **Carga Más Rápida**: Los recursos críticos se cargan antes de ser necesarios
2. **Mejor UX**: Indicadores de progreso reales y informativos
3. **Fallback Robusto**: Funciona sin preloading si hay problemas
4. **Configurable**: Fácil personalización por página
5. **SSR Compatible**: Funciona en servidor y cliente

## Monitoreo

El sistema incluye logging para monitorear:
- Recursos que fallan al cargar
- Tiempo de preloading
- Progreso de carga

## Próximas Mejoras

1. **Service Worker**: Cache offline de recursos
2. **Bundle Analysis**: Análisis de tamaño de bundles
3. **Critical CSS**: Inline de CSS crítico
4. **Lazy Loading**: Carga diferida de componentes no críticos

## Compatibilidad

- ✅ Next.js 15
- ✅ React 19
- ✅ TypeScript
- ✅ SSR/SSG
- ✅ Todos los navegadores modernos
