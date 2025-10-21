'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function MusicMenu() {
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
        .music-menu {
          position: absolute;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-end;
          z-index: 10;
          padding: 4vw;
        }
        .music-title {
          font-family: 'AliceWonderland', cursive;
          font-size: 2.5vw;
          color: #fff;
          text-shadow: 0 4px 24px #000, 0 2px 0 #bfae7c, 0 0 32px #fff8;
          margin-bottom: 2vw;
          letter-spacing: 0.12em;
        }
        .music-controls {
          display: flex;
          gap: 2vw;
        }
        .music-controls button {
          font-family: 'AliceWonderland', cursive;
          font-size: 1.5vw;
          color: #fff;
          background: rgba(0,0,0,0.35);
          border: 2px solid #fff2;
          border-radius: 1vw;
          padding: 1vw 2vw;
          cursor: pointer;
          transition: background 0.2s, color 0.2s, border 0.2s, transform 0.2s, box-shadow 0.2s;
          letter-spacing: 0.1em;
          box-shadow: 0 2px 12px 0 rgba(0,0,0,0.25);
        }
        .music-controls button:hover {
          background: #fff;
          color: #222;
          border: 2px solid #fff;
          transform: scale(1.07) rotate(-2deg);
          box-shadow: 0 6px 32px 0 #ffe9a7cc;
        }
        .back-btn {
          position: absolute;
          bottom: 2vw;
          right: 2vw;
          font-family: 'AliceWonderland', cursive;
          font-size: 1vw;
          color: #fff;
          background: linear-gradient(90deg, #222 0%, #bfae7c 100%);
          border: 2px solid #fff2;
          border-radius: 0.7vw;
          padding: 0.5vw 1.5vw;
          cursor: pointer;
          transition: background 0.2s, color 0.2s, border 0.2s, transform 0.2s, box-shadow 0.2s;
          letter-spacing: 0.1em;
          box-shadow: 0 2px 12px 0 rgba(0,0,0,0.25);
          z-index: 20;
        }
        .back-btn:hover {
          background: #fff;
          color: #222;
          border: 2px solid #fff;
          transform: scale(1.07) rotate(-2deg);
          box-shadow: 0 6px 32px 0 #ffe9a7cc;
        }
      `}</style>
      {/* Fondo del menú de música */}
      <Image
        src="/images/Wata/Menu-4.PNG"
        alt="Menú de música WATA"
        fill
        style={{ objectFit: 'cover', zIndex: 1 }}
        priority
      />
      <div className="music-menu">
        <h2 className="music-title">Música</h2>
        <div className="music-controls">
          <button>Anterior</button>
          <button>Reproducir</button>
          <button>Pausar</button>
          <button>Siguiente</button>
        </div>
      </div>
      <button className="back-btn" onClick={() => router.push('/wata')}>Volver al menú</button>
    </div>
  );
} 