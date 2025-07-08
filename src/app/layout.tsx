import './globals.css';
import { GeistSans, GeistMono } from 'geist/font';
import DustParticles from '../components/WataLanding/DustParticles';
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
      <head>
        <link rel="icon" href="/Icon/ajuste_avatar_Documents-3.png" type="image/png" />
      </head>
      <body className="bg-black">
        {/* <Navigation /> */}
        <DustParticles />
        {children}
      </body>
    </html>
  );
}
