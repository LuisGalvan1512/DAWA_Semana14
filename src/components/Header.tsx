import Link from 'next/link';
import { personalInfo } from '@/lib/data';

export default function Header() {
  return (
    <header className="bg-slate-950/80 backdrop-blur-md border-b border-slate-900 sticky top-0 z-50 text-white">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tight text-indigo-400 font-display hover:text-indigo-300 transition-colors">
            {personalInfo.name}
          </Link>
          <ul className="flex gap-6">
            <li>
              <Link
                href="/"
                className="text-slate-300 hover:text-indigo-400 transition"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="text-slate-300 hover:text-indigo-400 transition"
              >
                Proyectos
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-slate-300 hover:text-indigo-400 transition"
              >
                Sobre Mí
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-slate-300 hover:text-indigo-400 transition"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
