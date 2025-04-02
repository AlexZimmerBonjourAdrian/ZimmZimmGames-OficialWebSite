import { ReactNode } from 'react';

declare module 'next/document' {
  export interface DocumentProps {
    html: string;
    head?: ReactNode[];
    main?: ReactNode[];
    nextScripts?: ReactNode[];
  }
  
  export default class Document extends React.Component<DocumentProps> {
    static getInitialProps(ctx: any): Promise<DocumentProps>;
    render(): JSX.Element;
  }
} 