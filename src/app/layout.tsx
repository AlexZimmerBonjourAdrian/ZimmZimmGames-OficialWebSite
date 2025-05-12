import './globals.css';
import { GeistSans, GeistMono } from 'geist/font';
// import Navigation from '@/components/Navigation';

export const metadata = {
  title: 'ZimmZimm Games',
  description: 'Estudio independiente de desarrollo de videojuegos',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="bg-black">
        {/* <Navigation /> */}
        {children}
      </body>
    </html>
  );
}
