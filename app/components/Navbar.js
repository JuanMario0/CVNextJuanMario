import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-green-800 p-4 text-white">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Mi Portafolio</h1>
        <div className="space-x-4">
          <Link href="/" className="hover:underline">Inicio</Link>
          <Link href="/about" className="hover:underline">Sobre mí</Link>
          <Link href="/contact" className="hover:underline">Contacto</Link>
          <Link href="/projects" className="hover:underline">Proyectos</Link>
        </div>
      </div>
    </nav>
  );
}
