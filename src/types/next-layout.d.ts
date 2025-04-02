import { ReactNode } from 'react';

declare module 'next/layout' {
  export interface LayoutProps {
    children?: ReactNode;
  }
  
  export default function Layout(props: LayoutProps): JSX.Element;
} 