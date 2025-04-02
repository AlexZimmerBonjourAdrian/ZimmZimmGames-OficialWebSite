import { ReactNode } from 'react';

declare module 'next/image' {
  export interface ImageProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    layout?: 'fixed' | 'intrinsic' | 'responsive' | 'fill';
    objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
    quality?: number;
    priority?: boolean;
    loading?: 'lazy' | 'eager';
    placeholder?: 'blur' | 'empty';
    blurDataURL?: string;
    unoptimized?: boolean;
    children?: ReactNode;
  }
  
  export default function Image(props: ImageProps): JSX.Element;
} 