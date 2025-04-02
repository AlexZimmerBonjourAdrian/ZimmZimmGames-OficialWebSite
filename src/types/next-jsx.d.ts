import { ReactNode } from 'react';

declare module 'next' {
  export interface NextPage<P = {}, IP = P> {
    (props: P): JSX.Element | null;
    getInitialProps?(context: any): IP | Promise<IP>;
  }
  
  export interface AppProps {
    Component: NextPage;
    pageProps: any;
  }
  
  export interface AppContext {
    Component: NextPage;
    ctx: any;
  }
} 