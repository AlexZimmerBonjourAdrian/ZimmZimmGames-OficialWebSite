import { ReactNode } from 'react';

declare module 'next/searchparams' {
  export interface SearchParams {
    [key: string]: string | string[];
  }
  
  export function generateSearchParams(): SearchParams | Promise<SearchParams>;
} 