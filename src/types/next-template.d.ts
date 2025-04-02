import { ReactNode } from 'react';

declare module 'next/template' {
  export interface TemplateProps {
    children?: ReactNode;
  }
  
  export default function Template(props: TemplateProps): JSX.Element;
} 