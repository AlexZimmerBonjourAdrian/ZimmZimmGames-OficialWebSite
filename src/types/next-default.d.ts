import { ReactNode } from 'react';

declare module 'next/default' {
  export interface DefaultProps {
    children?: ReactNode;
  }
  
  export default function Default(props: DefaultProps): JSX.Element;
} 