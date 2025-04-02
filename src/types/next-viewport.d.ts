import { ReactNode } from 'react';

declare module 'next/viewport' {
  export interface Viewport {
    width?: string | number;
    height?: string | number;
    initialScale?: number;
    minimumScale?: number;
    maximumScale?: number;
    userScalable?: boolean;
  }
  
  export function generateViewport(): Viewport | Promise<Viewport>;
} 