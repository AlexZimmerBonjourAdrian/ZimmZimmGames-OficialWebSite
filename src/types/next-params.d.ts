import { ReactNode } from 'react';

declare module 'next/params' {
  export interface Params {
    [key: string]: string | string[];
  }
  
  export function generateParams(): Params | Promise<Params>;
} 