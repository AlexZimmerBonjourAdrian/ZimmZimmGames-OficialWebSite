'use client';
import Image from 'next/image';

export default function PlayPage() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black">
      <style jsx global>{`
        @font-face {
          font-family: 'AliceWonderland';
          src: url('/Font/Alice_in_Wonderland_3.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
        }
        .play-content {
          position: absolute;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 10;
          padding: 6vw 2vw 2vw 2vw;
        }
        .play-title {
          font-family: 'AliceWonderland', cursive;
          font-size: 2.8vw;
          color: #fff;
          text-shadow: 0 4px 24px #000, 0 2px 0 #bfae7c, 0 0 32px #fff8;
          margin-bottom: 2vw;
          letter-spacing: 0.12em;
          background: linear-gradient(90deg, #fff 60%, #ffe9a7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .long-line {
          font-family: 'AliceWonderland', cursive;
          font-size: 1.5vw;
          color: #fff;
          background: rgba(0,0,0,0.45);
          border-radius: 1vw;
          padding: 2vw 3vw;
          margin-bottom: 2vw;
          max-width: 50vw;
          text-align: center;
          box-shadow: 0 2px 12px 0 rgba(0,0,0,0.25);
        }
        .trailer {
          width: 40vw;
          height: 22vw;
          background: rgba(0,0,0,0.6);
          border-radius: 1vw;
          margin-bottom: 2vw;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 1.5vw;
          font-family: 'AliceWonderland', cursive;
          box-shadow: 0 2px 12px 0 rgba(0,0,0,0.25);
        }
        .download-btn {
          font-family: 'AliceWonderland', cursive;
          font-size: 2vw;
          color: #fff;
          background: linear-gradient(90deg, #bfae7c 0%, #222 100%);
          border: 2px solid #fff2;
          border-radius: 1vw;
          padding: 1vw 4vw;
          cursor: pointer;
          transition: background 0.2s, color 0.2s, border 0.2s, transform 0.2s, box-shadow 0.2s;
          letter-spacing: 0.1em;
          box-shadow: 0 2px 12px 0 rgba(0,0,0,0.25);
          margin-top: 2vw;
        }
        .download-btn:hover {
          background: #fff;
          color: #222;
          border: 2px solid #fff;
          transform: scale(1.07) rotate(-2deg);
          box-shadow: 0 6px 32px 0 #ffe9a7cc;
        }
      `}</style>
      {/* Fondo del menú de play */}
      <Image
        src="/images/Wata/Menu.PNG"
        alt="Long line y trailer WATA"
        fill
        style={{ objectFit: 'cover', zIndex: 1 }}
        priority
      />
      <div className="play-content">
        <h2 className="play-title">Long Line & Trailer</h2>
        <div className="long-line">
          Sigue la historia de las Alices a través de un viaje psicológico y perturbador. Explora ambientes inquietantes, resuelve acertijos y descubre la verdad detrás de las desapariciones en este demo exclusivo.
        </div>
        <div className="trailer">
          {/* Aquí puedes insertar un iframe de YouTube o video real */}
          Trailer próximamente...
        </div>
        <button className="download-btn">Descargar Demo</button>
      </div>
    </div>
  );
} 