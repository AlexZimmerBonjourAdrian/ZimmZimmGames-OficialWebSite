import { ReactNode } from 'react';

declare module 'next/font/google' {
  export interface FontOptions {
    weight?: string | string[];
    style?: string | string[];
    subsets?: string[];
    display?: 'auto' | 'block' | 'swap' | 'fallback' | 'optional';
    variable?: string;
    preload?: boolean;
    fallback?: string[];
    adjustFontFallback?: boolean;
  }
  
  export function Inter(options: FontOptions): {
    className: string;
    style: React.CSSProperties;
    variable: string;
  };
  
  export function Roboto_Mono(options: FontOptions): {
    className: string;
    style: React.CSSProperties;
    variable: string;
  };
} 