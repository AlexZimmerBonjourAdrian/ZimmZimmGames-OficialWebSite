import { ReactNode } from 'react';

declare module 'react' {
  interface ReactElement<P = any, T extends string | JSXElementConstructor<any> = string | JSXElementConstructor<any>> {
    type: T;
    props: P;
    key: Key | null;
  }
  
  interface ReactPortal extends ReactElement {
    key: null | string;
    children: ReactNode;
  }
} 