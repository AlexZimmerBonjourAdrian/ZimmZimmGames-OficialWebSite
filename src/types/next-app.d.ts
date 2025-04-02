import { ReactNode } from 'react';

declare module 'next/app' {
  export interface AppProps {
    Component: any;
    pageProps: any;
  }
  
  export default function App({ Component, pageProps }: AppProps): JSX.Element;
} 