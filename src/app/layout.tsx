import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ZimmZimm Games',
  description: 'Bienvenido a ZimmZimm Games - Tu destino para juegos indie únicos',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-zinc-950 text-zinc-100 min-h-screen`}>
        <div className="relative">
          {/* Efecto de niebla/bruma */}
          <div className="fixed inset-0 pointer-events-none z-50" 
               style={{
                 background: 'radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)',
                 opacity: 0.4
               }}>
          </div>
          
          {/* Efecto de scanlines más sutil */}
          <div className="fixed inset-0 pointer-events-none z-40" 
               style={{
                 background: 'linear-gradient(transparent 50%, rgba(0, 0, 0, 0.15) 50%)',
                 backgroundSize: '100% 3px',
                 opacity: 0.15
               }}>
          </div>
          
          <Header />
          
          <main className="container mx-auto px-4 py-8 relative z-10">
            {children}
          </main>
          
          <footer className="border-t border-zinc-800 mt-8 py-6 relative z-10">
            <div className="container mx-auto px-4 text-center">
              <p className="text-sm tracking-wider text-zinc-500">
                © {new Date().getFullYear()} ZIMMZIMM GAMES. TODOS LOS DERECHOS RESERVADOS.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
} 