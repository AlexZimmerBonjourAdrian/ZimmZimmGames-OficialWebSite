import { ReactNode } from 'react';

declare module 'next/loading' {
  export interface LoadingProps {
    children?: ReactNode;
  }
  
  export default function Loading(props: LoadingProps): JSX.Element;
} 