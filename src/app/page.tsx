import Image from 'next/image';
import Link from 'next/link';
import { personalInfo, projects, education, technicalSkills, interests, professionalSkills } from '@/lib/data';
import ProjectCard from '@/components/ProjectCard';
import TechBadge from '@/components/TechBadge';

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div className="space-y-24 pb-24 text-slate-100 bg-[#030712] relative overflow-hidden">
      {/* Background Decorative Glow Spheres */}
      <div className="absolute top-10 left-1/4 w-80 h-80 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* 1. Hero Section */}
      <section className="relative pt-20 pb-16 border-b border-slate-900/60 bg-slate-950/20">
        <div className="mx-auto max-w-5xl px-6 flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
          {/* Profile Avatar */}
          <div className="relative w-36 h-36 md:w-48 md:h-48 rounded-2xl overflow-hidden border-2 border-slate-800 bg-slate-900 shadow-2xl shadow-indigo-950/20 shrink-0">
            <Image
              src={personalInfo.avatar}
              alt={personalInfo.name}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 144px, 192px"
            />
          </div>

          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-ping" />
              <span>Disponible para proyectos / Prácticas</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Hola, soy{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                {personalInfo.name}
              </span>
            </h1>

            <p className="text-lg sm:text-xl font-medium text-slate-350">
              {personalInfo.title}
            </p>

            <p className="text-base text-slate-400 max-w-xl leading-relaxed">
              {personalInfo.description}
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-2">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center h-11 px-6 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold shadow-md shadow-indigo-600/10 transition active:scale-98"
              >
                Ver proyectos
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center h-11 px-6 rounded-lg border border-slate-800 bg-slate-900 hover:bg-slate-850 text-slate-200 font-semibold transition active:scale-98"
              >
                Escríbeme
              </Link>
              {/* LinkedIn integration */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-11 h-11 rounded-lg border border-slate-800 bg-slate-900 hover:bg-slate-850 text-slate-300 transition"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
              {/* Download CV button */}
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center justify-center h-11 px-5 rounded-lg border border-slate-850 bg-slate-900/50 hover:bg-slate-900 text-slate-350 text-sm font-semibold transition"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Descargar CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. About Me Section */}
      <section id="about" className="mx-auto max-w-5xl px-6 scroll-mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-xs font-bold tracking-wider uppercase text-indigo-400">
              SOBRE MÍ
            </h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-white leading-tight">
              Construyendo soluciones de software orientadas al valor
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              {personalInfo.summary}
            </p>
          </div>

          <div className="lg:col-span-7 space-y-6 text-slate-300 text-sm leading-relaxed">
            <p>{personalInfo.bio}</p>
            
            {/* Professional Skills list */}
            <div>
              <h4 className="font-bold text-white mb-3 text-xs uppercase tracking-wider text-slate-400">Habilidades Profesionales</h4>
              <div className="flex flex-wrap gap-2">
                {professionalSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs bg-slate-900/80 border border-slate-800 text-slate-300 rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Projects Section */}
      <section id="projects" className="mx-auto max-w-5xl px-6 scroll-mt-24">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-10 gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h2 className="text-xs font-bold tracking-wider uppercase text-indigo-400">
              PORTAFOLIO
            </h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-white">
              Proyectos Destacados
            </h3>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition gap-1.5"
          >
            <span>Ver todos los proyectos</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, idx) => (
            <ProjectCard key={project.slug} project={project} priority={idx === 0} />
          ))}
        </div>
      </section>

      {/* 4. Technical Skills & Technologies Section */}
      <section id="skills" className="mx-auto max-w-5xl px-6">
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-xs font-bold tracking-wider uppercase text-indigo-400 mb-1">
            HABILIDADES
          </h2>
          <h3 className="text-3xl font-extrabold tracking-tight text-white">
            Conocimientos Técnicos
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Frontend */}
          <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800/80">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">Frontend Development</h4>
            <div className="flex flex-wrap gap-2.5">
              {technicalSkills.frontend.map((skill) => (
                <TechBadge key={skill} tech={skill} />
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800/80">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">Backend Development</h4>
            <div className="flex flex-wrap gap-2.5">
              {technicalSkills.backend.map((skill) => (
                <TechBadge key={skill} tech={skill} />
              ))}
            </div>
          </div>

          {/* Mobile */}
          <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800/80">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">Mobile Development</h4>
            <div className="flex flex-wrap gap-2.5">
              {technicalSkills.mobile.map((skill) => (
                <TechBadge key={skill} tech={skill} />
              ))}
            </div>
          </div>

          {/* Databases */}
          <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800/80">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">Databases</h4>
            <div className="flex flex-wrap gap-2.5">
              {technicalSkills.databases.map((skill) => (
                <TechBadge key={skill} tech={skill} />
              ))}
            </div>
          </div>

          {/* Cloud & Infra */}
          <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800/80">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">Cloud & Infraestructura</h4>
            <div className="flex flex-wrap gap-2.5">
              {technicalSkills.cloud.map((skill) => (
                <TechBadge key={skill} tech={skill} />
              ))}
            </div>
          </div>

          {/* Modeling & Process */}
          <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800/80">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">Modelado & Metodología</h4>
            <div className="flex flex-wrap gap-2.5">
              {technicalSkills.design.map((skill) => (
                <TechBadge key={skill} tech={skill} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Experience Timeline & Education Section */}
      <section id="experience" className="mx-auto max-w-5xl px-6 scroll-mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Education timeline */}
          <div className="space-y-8">
            <div className="space-y-1">
              <h2 className="text-xs font-bold tracking-wider uppercase text-indigo-400">
                FORMACIÓN
              </h2>
              <h3 className="text-3xl font-extrabold tracking-tight text-white">
                Educación
              </h3>
            </div>
            
            <div className="relative pl-6 border-l border-slate-800 space-y-8">
              <div className="relative">
                {/* Timeline dot */}
                <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-indigo-500 border-4 border-slate-950" />
                <h4 className="text-lg font-bold text-white">{education.program}</h4>
                <p className="text-sm font-semibold text-indigo-400">{education.institution}</p>
                <div className="flex items-center gap-2 mt-1.5 text-xs text-slate-400">
                  <span>{education.level}</span>
                  <span className="w-1 h-1 bg-slate-700 rounded-full" />
                  <span>{education.period}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Interests Section */}
          <div className="space-y-8">
            <div className="space-y-1">
              <h2 className="text-xs font-bold tracking-wider uppercase text-indigo-400">
                INTERESES
              </h2>
              <h3 className="text-3xl font-extrabold tracking-tight text-white">
                Temas de Interés
              </h3>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {interests.map((interest) => (
                <span
                  key={interest}
                  className="px-4 py-2 bg-slate-900 border border-slate-800 text-sm rounded-xl font-medium hover:border-slate-750 transition"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Contact Section */}
      <section id="contact" className="mx-auto max-w-4xl px-6 scroll-mt-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 bg-slate-900/30 border border-slate-850 p-8 md:p-12 rounded-3xl">
          <div className="md:col-span-5 space-y-6">
            <div className="space-y-2">
              <h2 className="text-xs font-bold tracking-wider uppercase text-indigo-400">
                CONTACTO
              </h2>
              <h3 className="text-3xl font-extrabold tracking-tight text-white">
                ¿Trabajamos juntos?
              </h3>
            </div>
            
            <p className="text-sm text-slate-400 leading-relaxed">
              Envíame un mensaje y conversemos sobre cómo puedo aportar valor a tu equipo o proyecto.
            </p>

            <div className="space-y-4 pt-4 border-t border-slate-850">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L22 8gM5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${personalInfo.email}`} className="text-sm text-slate-350 hover:text-indigo-400 transition">
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={`https://wa.me/51994058442`} target="_blank" rel="noopener noreferrer" className="text-sm text-slate-350 hover:text-indigo-400 transition">
                  {personalInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm text-slate-350">{personalInfo.location}</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <form className="space-y-4">
              <div>
                <label htmlFor="form-name" className="block text-xs font-semibold text-slate-400 uppercase mb-1">
                  Nombre
                </label>
                <input
                  type="text"
                  id="form-name"
                  required
                  className="w-full px-4 py-2.5 text-sm bg-slate-950 border border-slate-850 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/25 focus:border-indigo-500 text-slate-100 placeholder-slate-600"
                  placeholder="Tu nombre completo"
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
                  className="w-full px-4 py-2.5 text-sm bg-slate-950 border border-slate-850 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/25 focus:border-indigo-500 text-slate-100 placeholder-slate-600"
                  placeholder="tu@correo.com"
                />
              </div>
              <div>
                <label htmlFor="form-message" className="block text-xs font-semibold text-slate-400 uppercase mb-1">
                  Mensaje
                </label>
                <textarea
                  id="form-message"
                  rows={4}
                  required
                  className="w-full px-4 py-2.5 text-sm bg-slate-950 border border-slate-850 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/25 focus:border-indigo-500 text-slate-100 placeholder-slate-600 resize-none"
                  placeholder="Hablemos sobre tu proyecto..."
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center h-11 px-6 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold shadow-sm transition cursor-pointer"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
