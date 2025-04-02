import { ReactNode } from 'react';

declare module 'next/error' {
  export interface ErrorProps {
    statusCode?: number;
    title?: string;
    children?: ReactNode;
  }
  
  export default function Error(props: ErrorProps): JSX.Element;
} 