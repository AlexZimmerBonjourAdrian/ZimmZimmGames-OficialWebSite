import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bg-pattern.png')] opacity-10"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl font-bold mb-4 tracking-wider text-red-600 font-[family-name:var(--font-geist-sans)]">
            ZIMMZIMM GAMES
          </h1>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Sumérgete en experiencias de terror psicológico que desafiarán tu percepción de la realidad
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
            Explorar Juegos
          </button>
        </div>
      </div>

      {/* Featured Games Section */}
      <section className="py-20 px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Nuestros Juegos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Game Card 1 */}
          <div className="bg-gray-800 rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <div className="relative h-64">
              <Image
                src="/game1.jpg"
                alt="Game 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">Whispers in the Dark</h3>
              <p className="text-gray-400 mb-4">Una experiencia psicológica que te hará cuestionar tu propia mente</p>
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full text-sm">
                Ver más
              </button>
            </div>
          </div>

          {/* Game Card 2 */}
          <div className="bg-gray-800 rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <div className="relative h-64">
              <Image
                src="/game2.jpg"
                alt="Game 2"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">Echoes of the Past</h3>
              <p className="text-gray-400 mb-4">Descubre los secretos ocultos en una mansión abandonada</p>
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full text-sm">
                Ver más
              </button>
            </div>
          </div>

          {/* Game Card 3 */}
          <div className="bg-gray-800 rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <div className="relative h-64">
              <Image
                src="/game3.jpg"
                alt="Game 3"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">The Mind's Eye</h3>
              <p className="text-gray-400 mb-4">Una pesadilla que se vuelve realidad</p>
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full text-sm">
                Ver más
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-800 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">Mantente al tanto</h2>
          <p className="text-gray-400 mb-8">Suscríbete para recibir actualizaciones sobre nuestros próximos lanzamientos</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="flex-1 px-4 py-3 rounded-full bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full">
              Suscribirse
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400">
        <p>© 2024 ZimmZimm Games. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
