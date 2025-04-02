import { ReactNode } from 'react';
import { SVGProps } from 'react';

declare module '@heroicons/react/24/outline' {
  export interface IconProps extends SVGProps<SVGSVGElement> {
    children?: ReactNode;
  }
  
  export const ArrowRightIcon: React.FC<IconProps>;
  export const Bars3Icon: React.FC<IconProps>;
  export const XMarkIcon: React.FC<IconProps>;
} 