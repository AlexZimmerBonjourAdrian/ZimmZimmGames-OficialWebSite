import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-amber-500">ZimmZimm Games</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="#home" className="text-white hover:text-amber-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">Inicio</Link>
                <Link href="#games" className="text-white hover:text-amber-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">Juegos</Link>
                <Link href="#faq" className="text-white hover:text-amber-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">FAQ</Link>
                <Link href="#about" className="text-white hover:text-amber-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">Sobre Nosotros</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bg-pattern.png')] opacity-5"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-amber-500">Where are the Alices?</h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Un juego de terror psicológico donde las pesadillas cobran vida y las muñecas guardan oscuros secretos.
          </p>
          <div className="bg-black/50 p-8 rounded-lg backdrop-blur-sm border border-amber-500/20">
            <h3 className="text-2xl font-bold mb-4 text-amber-500">Próximamente</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-black/30 p-4 rounded-lg border border-amber-500/20">
                <h4 className="text-amber-500 mb-2">Nintendo Switch</h4>
                <p className="text-gray-400">Próximamente</p>
              </div>
              <div className="bg-black/30 p-4 rounded-lg border border-amber-500/20">
                <h4 className="text-amber-500 mb-2">PC / Mac</h4>
                <p className="text-gray-400">Próximamente</p>
              </div>
              <div className="bg-black/30 p-4 rounded-lg border border-amber-500/20">
                <h4 className="text-amber-500 mb-2">PlayStation</h4>
                <p className="text-gray-400">Próximamente</p>
              </div>
            </div>
            <button className="bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
              Ver Tráiler
            </button>
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section id="games" className="py-20 px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-amber-500">Nuestros Juegos</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-black/50 rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 border border-amber-500/20">
            <div className="relative h-64">
              <Image
                src="/where-are-the-alices.jpg"
                alt="Where are the Alices?"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex gap-2 mb-4">
                <span className="bg-black/30 px-3 py-1 rounded-full text-sm border border-amber-500/20">PC</span>
                <span className="bg-black/30 px-3 py-1 rounded-full text-sm border border-amber-500/20">Nintendo Switch</span>
                <span className="bg-black/30 px-3 py-1 rounded-full text-sm border border-amber-500/20">PlayStation</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-amber-500">Where are the Alices?</h3>
              <p className="text-gray-400 mb-4">Un thriller psicológico que te sumerge en un mundo donde la realidad y la fantasía se entrelazan.</p>
              <ul className="text-gray-300 mb-6 space-y-2">
                <li className="flex items-center">
                  <span className="text-amber-500 mr-2">•</span>
                  Narrativa no lineal con múltiples finales
                </li>
                <li className="flex items-center">
                  <span className="text-amber-500 mr-2">•</span>
                  Mecánicas de puzzle innovadoras
                </li>
                <li className="flex items-center">
                  <span className="text-amber-500 mr-2">•</span>
                  Atmósfera psicológica envolvente
                </li>
              </ul>
              <button className="w-full bg-amber-500 hover:bg-amber-600 text-black px-4 py-2 rounded-full transition-colors duration-300">
                Descargar Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 bg-black/50 border-t border-b border-amber-500/20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-amber-500">Apoya el Desarrollo</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black/30 p-6 rounded-lg border border-amber-500/20">
              <h3 className="text-xl font-bold mb-4 text-amber-500">PayPal</h3>
              <p className="text-gray-300 mb-4">Contribución única para el desarrollo</p>
              <button className="w-full bg-amber-500 hover:bg-amber-600 text-black px-4 py-2 rounded-full transition-colors duration-300">
                Donar
              </button>
            </div>
            <div className="bg-black/30 p-6 rounded-lg border border-amber-500/20">
              <h3 className="text-xl font-bold mb-4 text-amber-500">Patreon</h3>
              <p className="text-gray-300 mb-4">Acceso exclusivo al desarrollo y contenido especial</p>
              <button className="w-full bg-amber-500 hover:bg-amber-600 text-black px-4 py-2 rounded-full transition-colors duration-300">
                Unirse
              </button>
            </div>
            <div className="bg-black/30 p-6 rounded-lg border border-amber-500/20">
              <h3 className="text-xl font-bold mb-4 text-amber-500">Ko-fi</h3>
              <p className="text-gray-300 mb-4">Ayúdanos a mantener las pesadillas vivas</p>
              <button className="w-full bg-amber-500 hover:bg-amber-600 text-black px-4 py-2 rounded-full transition-colors duration-300">
                Comprar un Café
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Preguntas Frecuentes</h2>
          <div className="space-y-6">
            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">¿Cómo puedo descargar los juegos?</h3>
              <p className="text-gray-300">Nuestros juegos están disponibles en las principales plataformas digitales. Cada juego tiene su propia página con enlaces de descarga.</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">¿Los juegos son gratuitos?</h3>
              <p className="text-gray-300">Algunos de nuestros juegos son gratuitos, mientras que otros son de pago. Cada juego tiene su propia política de precios.</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">¿Qué requisitos necesito para jugar?</h3>
              <p className="text-gray-300">Los requisitos varían según el juego. Puedes encontrar los requisitos específicos en la página de cada juego.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Sobre Nosotros</h2>
          <div className="bg-gray-800 p-8 rounded-lg">
            <p className="text-gray-300 mb-8 text-lg">
              Somos un equipo de desarrolladores apasionados por crear experiencias de juego únicas y emocionantes. Nuestra misión es sumergir a los jugadores en mundos oscuros y misteriosos donde cada decisión cuenta.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-700 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-2 text-red-600">Director Creativo</h4>
                <p className="text-gray-300">El visionario detrás de nuestros mundos oscuros</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-2 text-red-600">Desarrollador Principal</h4>
                <p className="text-gray-300">El arquitecto de nuestras pesadillas digitales</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 border-t border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center">
            <div className="flex space-x-6 mb-6">
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors duration-300">
                <i className="fab fa-discord text-2xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors duration-300">
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors duration-300">
                <i className="fab fa-youtube text-2xl"></i>
              </a>
            </div>
            <p className="text-gray-400">&copy; 2024 ZimmZimm Games. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
