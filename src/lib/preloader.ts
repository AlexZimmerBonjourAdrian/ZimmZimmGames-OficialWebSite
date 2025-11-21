// Sistema de preloading optimizado para ZimmZimm Games
import React from 'react';

export interface PreloadResource {
  href: string;
  as: 'image' | 'font' | 'style' | 'script' | 'fetch';
  type?: string;
  crossorigin?: 'anonymous' | 'use-credentials';
  media?: string;
}

export interface PreloadConfig {
  images: string[];
  fonts: string[];
  scripts: string[];
  styles: string[];
}

// Configuración de recursos críticos para preloading
export const criticalResources: PreloadConfig = {
  images: [
    '/images/Wata/WhereAreTheAlices.JPG',
    '/images/Wata/Door.PNG',
    '/images/Wata/Menu.PNG',
    '/Characters/Profile/CB.png',
    '/Characters/Profile/Juno.png',
    '/ConceptArt/ConceptJunoAndCB.png',
    '/Gameplay/Case00-CB.jpg',
    '/Icon/ajuste_avatar_Documents-3-Black.png',
    '/Icon/ryanlerch-Alice-In-Wonderland-2-the-white-rabbit.svg'
  ],
  fonts: [
    '/Font/Alice_in_Wonderland_3.ttf',
    '/Font/CourierPrime-Regular.ttf',
    '/Font/CourierPrime-Bold.ttf'
  ],
  scripts: [],
  styles: []
};

// Hook para preloading con progreso
export class ResourcePreloader {
  private loadedResources = new Set<string>();
  private totalResources = 0;
  private onProgress?: (progress: number) => void;
  private onComplete?: () => void;

  constructor(
    onProgress?: (progress: number) => void,
    onComplete?: () => void
  ) {
    this.onProgress = onProgress;
    this.onComplete = onComplete;
  }

  // Preload de imágenes
  private async preloadImage(src: string): Promise<void> {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        this.loadedResources.add(src);
        this.updateProgress();
        resolve();
      };
      img.onerror = () => {
        console.warn(`Failed to preload image: ${src}`);
        this.loadedResources.add(src); // Contar como cargado para no bloquear
        this.updateProgress();
        resolve();
      };
      img.src = src;
    });
  }

  // Preload de fuentes
  private async preloadFont(href: string): Promise<void> {
    return new Promise((resolve) => {
      if ('fonts' in document) {
        const font = new FontFace('preload-font', `url(${href})`);
        font.load().then(() => {
          this.loadedResources.add(href);
          this.updateProgress();
          resolve();
        }).catch(() => {
          console.warn(`Failed to preload font: ${href}`);
          this.loadedResources.add(href);
          this.updateProgress();
          resolve();
        });
      } else {
        // Fallback para navegadores sin FontFace API
        if (typeof window !== 'undefined' && window.document) {
          const link = window.document.createElement('link');
          link.rel = 'preload';
          link.href = href;
          link.as = 'font';
          link.crossOrigin = 'anonymous';
          link.onload = () => {
            this.loadedResources.add(href);
            this.updateProgress();
            resolve();
          };
          link.onerror = () => {
            this.loadedResources.add(href);
            this.updateProgress();
            resolve();
          };
          window.document.head.appendChild(link);
        } else {
          // En entorno server-side, simular carga exitosa
          this.loadedResources.add(href);
          this.updateProgress();
          resolve();
        }
      }
    });
  }

  // Actualizar progreso
  private updateProgress(): void {
    const progress = Math.round((this.loadedResources.size / this.totalResources) * 100);
    this.onProgress?.(progress);
    
    if (this.loadedResources.size >= this.totalResources) {
      this.onComplete?.();
    }
  }

  // Iniciar preloading
  async startPreloading(config: PreloadConfig = criticalResources): Promise<void> {
    this.totalResources = config.images.length + config.fonts.length + config.scripts.length + config.styles.length;
    
    if (this.totalResources === 0) {
      this.onComplete?.();
      return;
    }

    // Preload imágenes en paralelo (máximo 3 a la vez para no sobrecargar)
    const imagePromises = this.chunkArray(config.images, 3).map(chunk =>
      Promise.all(chunk.map(img => this.preloadImage(img)))
    );

    // Preload fuentes
    const fontPromises = config.fonts.map(font => this.preloadFont(font));

    // Esperar a que terminen todos los preloads
    await Promise.all([
      ...imagePromises,
      ...fontPromises
    ]);
  }

  // Dividir array en chunks
  private chunkArray<T>(array: T[], size: number): T[][] {
    const chunks: T[][] = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  }

  // Verificar si un recurso ya está cargado
  isResourceLoaded(href: string): boolean {
    return this.loadedResources.has(href);
  }

  // Obtener progreso actual
  getProgress(): number {
    if (this.totalResources === 0) return 100;
    return Math.round((this.loadedResources.size / this.totalResources) * 100);
  }
}

// Función helper para crear elementos preload
export function createPreloadElement(resource: PreloadResource): HTMLLinkElement | null {
  if (typeof window === 'undefined' || !window.document) return null;
  
  const link = window.document.createElement('link');
  link.rel = 'preload';
  link.href = resource.href;
  link.as = resource.as;
  
  if (resource.type) link.type = resource.type;
  if (resource.crossorigin) link.crossOrigin = resource.crossorigin;
  if (resource.media) link.media = resource.media;
  
  return link;
}

// Función para agregar preload links al head
export function addPreloadLinks(resources: PreloadResource[]): void {
  if (typeof window === 'undefined' || !window.document) return;
  
  resources.forEach(resource => {
    const link = createPreloadElement(resource);
    if (link) {
      window.document.head.appendChild(link);
    }
  });
}

// Configuración de preload para diferentes páginas
export const pagePreloadConfigs = {
  home: {
    images: [
      '/images/Wata/WhereAreTheAlices.JPG',
      '/images/Wata/Door.PNG',
      '/Characters/Profile/CB.png',
      '/Characters/Profile/Juno.png'
    ],
    fonts: [
      '/Font/Alice_in_Wonderland_3.ttf',
      '/Font/CourierPrime-Regular.ttf'
    ],
    scripts: [],
    styles: []
  },
  wata: {
    images: [
      '/images/Wata/Menu.PNG',
      '/images/Wata/Menu-3.PNG',
      '/ConceptArt/ConceptJunoAndCB.png',
      '/Gameplay/Case00-CB.jpg'
    ],
    fonts: [
      '/Font/Alice_in_Wonderland_3.ttf',
      '/Font/CourierPrime-Bold.ttf'
    ],
    scripts: [],
    styles: []
  }
};

// Hook React para preloading
export function usePreloader(
  config: PreloadConfig = criticalResources,
  autoStart: boolean = true
) {
  const [progress, setProgress] = React.useState(0);
  const [isComplete, setIsComplete] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const preloaderRef = React.useRef<ResourcePreloader | null>(null);

  React.useEffect(() => {
    if (!autoStart) return;

    setIsLoading(true);
    preloaderRef.current = new ResourcePreloader(
      (progress) => setProgress(progress),
      () => {
        setIsComplete(true);
        setIsLoading(false);
      }
    );

    preloaderRef.current.startPreloading(config);

    return () => {
      preloaderRef.current = null;
    };
  }, [config, autoStart]);

  const startPreloading = React.useCallback(() => {
    if (preloaderRef.current) return;
    
    setIsLoading(true);
    setIsComplete(false);
    setProgress(0);
    
    preloaderRef.current = new ResourcePreloader(
      (progress) => setProgress(progress),
      () => {
        setIsComplete(true);
        setIsLoading(false);
      }
    );

    preloaderRef.current.startPreloading(config);
  }, [config]);

  return {
    progress,
    isComplete,
    isLoading,
    startPreloading
  };
}
