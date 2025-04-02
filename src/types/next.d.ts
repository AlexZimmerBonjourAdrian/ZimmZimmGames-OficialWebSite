import { ReactNode } from 'react';
import { LinkProps as NextLinkProps } from 'next/link';

declare module 'next/link' {
  export interface LinkProps extends NextLinkProps {
    children?: ReactNode;
    href: string;
    className?: string;
  }
  
  export default function Link(props: LinkProps): JSX.Element;
} 