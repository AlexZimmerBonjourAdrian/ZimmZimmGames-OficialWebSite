'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function WataMenu() {
  const router = useRouter();

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black">
      <style jsx global>{`
        @font-face {
          font-family: 'AliceWonderland';
          src: url('/Font/Alice_in_Wonderland_3.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
        }
        .wata-menu {
          position: absolute;
          top: 0;
          left: 0;
          width: 28vw;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          padding: 4vw 2vw;
          z-index: 10;
        }
        .wata-title {
          font-family: 'AliceWonderland', cursive;
          font-size: 2.8vw;
          color: #fff;
          text-shadow: 0 4px 24px #000, 0 2px 0 #bfae7c, 0 0 32px #fff8;
          margin-bottom: 3vw;
          letter-spacing: 0.12em;
          background: linear-gradient(90deg, #fff 60%, #ffe9a7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .wata-menu button {
          font-family: 'AliceWonderland', cursive;
          font-size: 2.2vw;
          color: #fff;
          background: rgba(0,0,0,0.35);
          border: 2px solid #fff2;
          border-radius: 1vw;
          margin-bottom: 2vw;
          padding: 1vw 2vw;
          cursor: pointer;
          transition: background 0.2s, color 0.2s, border 0.2s, transform 0.2s, box-shadow 0.2s;
          letter-spacing: 0.1em;
          box-shadow: 0 2px 12px 0 rgba(0,0,0,0.25);
        }
        .wata-menu button:hover {
          background: #fff;
          color: #222;
          border: 2px solid #fff;
          transform: scale(1.07) rotate(-2deg);
          box-shadow: 0 6px 32px 0 #ffe9a7cc;
        }
      `}</style>
      {/* Fondo del menú principal */}
      <Image
        src="/images/Wata/Menu-3.PNG"
        alt="Menú principal WATA"
        fill
        style={{ objectFit: 'cover', zIndex: 1 }}
        priority
      />
      {/* Menú de opciones en la zona izquierda */}
      <nav className="wata-menu">
        <h1 className="wata-title">Where are the Alices?</h1>
        <button onClick={() => router.push('/wata/play')}>Iniciar</button>
        <button onClick={() => router.push('/wata/options')}>Opciones</button>
        <button>Créditos</button>
        <button onClick={() => router.push('/')}>Salir</button>
      </nav>
    </div>
  );
} 