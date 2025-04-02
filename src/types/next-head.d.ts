import { ReactNode } from 'react';

declare module 'next/head' {
  export interface HeadProps {
    children?: ReactNode;
  }
  
  export default function Head(props: HeadProps): JSX.Element;
} 