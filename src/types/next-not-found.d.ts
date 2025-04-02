import { ReactNode } from 'react';

declare module 'next/not-found' {
  export interface NotFoundProps {
    children?: ReactNode;
  }
  
  export default function NotFound(props: NotFoundProps): JSX.Element;
} 