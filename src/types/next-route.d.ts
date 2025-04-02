import { ReactNode } from 'react';

declare module 'next/route' {
  export interface Route {
    params: {
      [key: string]: string | string[];
    };
    searchParams: {
      [key: string]: string | string[];
    };
  }
  
  export function generateRoute(): Route | Promise<Route>;
} 