import { ReactNode } from 'react';

declare module 'next/page' {
  export interface PageProps {
    children?: ReactNode;
  }
  
  export default function Page(props: PageProps): JSX.Element;
} 