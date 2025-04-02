import { ReactNode } from 'react';

declare module 'next/script' {
  export interface ScriptProps {
    src: string;
    strategy?: 'beforeInteractive' | 'afterInteractive' | 'lazyOnload';
    children?: ReactNode;
  }
  
  export default function Script(props: ScriptProps): JSX.Element;
} 