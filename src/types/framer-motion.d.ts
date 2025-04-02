import { ReactNode } from 'react';
import { HTMLMotionProps } from 'framer-motion';

declare module 'framer-motion' {
  export interface MotionProps extends HTMLMotionProps<"div"> {
    children?: ReactNode;
  }
  
  export interface MotionComponentProps<T extends keyof JSX.IntrinsicElements> {
    children?: ReactNode;
    [key: string]: any;
  }
} 