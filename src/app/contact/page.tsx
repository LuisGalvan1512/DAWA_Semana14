import { Metadata } from 'next';
import Link from 'next/link';
import { personalInfo } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Contacto',
  description: `Ponte en contacto con ${personalInfo.name} para proyectos de desarrollo de software y consultas profesionales.`,
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl text-slate-100 bg-[#030712]">
      <Link
        href="/"
        className="text-indigo-400 hover:underline mb-6 inline-block"
      >
        &larr; Volver al Inicio
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mt-4 bg-slate-900/40 border border-slate-800 p-8 md:p-12 rounded-2xl shadow-xl">
        {/* Contact Info */}
        <div className="md:col-span-5 space-y-6">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Contacto</h1>
            <p className="text-slate-400 text-sm">
              ¿Tienes una consulta, propuesta de trabajo o proyecto? Ponte en contacto conmigo y conversemos.
            </p>
          </div>

          <div className="space-y-4 pt-6 border-t border-slate-800">
            {/* Email */}
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-slate-950 border border-slate-850 text-indigo-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L22 8gM5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-450 uppercase">Correo Electrónico</p>
                <a href={`mailto:${personalInfo.email}`} className="text-sm text-slate-300 hover:text-indigo-450 transition font-medium">
                  {personalInfo.email}
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-slate-950 border border-slate-850 text-indigo-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-450 uppercase">Teléfono / WhatsApp</p>
                <a href="https://wa.me/51994058442" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-300 hover:text-indigo-450 transition font-medium">
                  {personalInfo.phone}
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-slate-950 border border-slate-850 text-indigo-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-450 uppercase">Ubicación</p>
                <p className="text-sm text-slate-300 font-medium">{personalInfo.location}</p>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-800 space-y-3">
            <h4 className="text-xs font-semibold text-slate-450 uppercase">Redes Profesionales</h4>
            <div className="flex gap-3">
              {/* LinkedIn Button */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition"
              >
                LinkedIn
              </a>
              {/* GitHub Button */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold bg-slate-800 hover:bg-slate-750 text-white rounded-lg border border-slate-700 transition"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Message Form */}
        <div className="md:col-span-7">
          <form className="space-y-4">
            <div>
              <label htmlFor="form-name" className="block text-xs font-semibold text-slate-400 uppercase mb-1">
                Nombre Completo
              </label>
              <input
                type="text"
                id="form-name"
                required
                className="w-full px-4 py-2.5 text-sm bg-slate-950 border border-slate-850 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/25 focus:border-indigo-500 text-slate-100 placeholder-slate-650"
                placeholder="Juan Pérez"
              />
            </div>
            <div>
              <label htmlFor="form-email" className="block text-xs font-semibold text-slate-400 uppercase mb-1">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="form-email"
                required
                className="w-full px-4 py-2.5 text-sm bg-slate-950 border border-slate-850 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/25 focus:border-indigo-500 text-slate-100 placeholder-slate-650"
                placeholder="juan@correo.com"
              />
            </div>
            <div>
              <label htmlFor="form-message" className="block text-xs font-semibold text-slate-400 uppercase mb-1">
                Mensaje
              </label>
              <textarea
                id="form-message"
                rows={5}
                required
                className="w-full px-4 py-2.5 text-sm bg-slate-950 border border-slate-850 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/25 focus:border-indigo-500 text-slate-100 placeholder-slate-650 resize-none"
                placeholder="Detalla tu propuesta o consulta..."
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center h-11 px-6 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold shadow-md transition cursor-pointer"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
