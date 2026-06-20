import { Project, EducationItem } from '@/types';

export const personalInfo = {
  name: 'Luis Enrique Galván Morales',
  title: 'Estudiante de Diseño y Desarrollo de Software | Desarrollador Full Stack | Desarrollador Móvil',
  description: 'Estudiante del 5to ciclo en TECSUP apasionado por construir soluciones web y móviles escalables, automatización de procesos y análisis de datos.',
  summary: 'Soy estudiante del 5to ciclo de la carrera de Diseño y Desarrollo de Software en TECSUP con un fuerte interés en el desarrollo web, aplicaciones móviles, tecnologías cloud, automatización de procesos de negocio y análisis de datos. Cuento con experiencia en el desarrollo de proyectos académicos y empresariales aplicando arquitecturas modernas y escalables.',
  bio: 'Me apasiona la tecnología, el desarrollo de software y resolver problemas del mundo real mediante soluciones digitales. A lo largo de mis estudios en TECSUP, he participado en múltiples proyectos que abarcan desarrollo web, desarrollo móvil, servicios en la nube, diseño de bases de datos y modelado de procesos de negocio. Me adapto rápidamente a diferentes entornos de desarrollo y disfruto del aprendizaje continuo y colaborativo.',
  email: 'lusen121502@gmail.com',
  phone: '+51 994058442',
  location: 'Lima, Perú',
  github: 'https://github.com/galvan-morales-enrique',
  linkedin: 'http://www.linkedin.com/in/galvan-morales-enrique',
  siteUrl: 'https://tuportafolio.com',
  avatar: 'https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
};

export const education: EducationItem = {
  institution: 'Instituto de Educación Superior TECSUP',
  program: 'Diseño y Desarrollo de Software',
  level: '5to Ciclo',
  period: '2024 - Presente',
};

export const technicalSkills = {
  frontend: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Flutter', 'SwiftUI', 'Jetpack Compose'],
  backend: ['Node.js', 'Express.js', 'Django', 'Laravel', 'Spring Boot', 'PHP', 'Java', 'Python', 'Kotlin', 'C++'],
  databases: ['PostgreSQL', 'MySQL', 'MongoDB', 'Oracle Database', 'SQL Server', 'CassandraDB', 'H2 Database'],
  cloud: ['AWS', 'Google Cloud Platform (GCP)', 'Supabase', 'Git', 'GitHub', 'Maven'],
  mobile: ['Flutter', 'Dart', 'Swift', 'SwiftUI', 'Xcode', 'Kotlin', 'Jetpack Compose'],
  design: ['Figma', 'Bizagi Modeler', 'BPMN', 'UML', 'Scrum', 'Metodologías Ágiles']
};

export const professionalSkills = [
  'Desarrollo Full Stack',
  'Desarrollo de Aplicaciones Móviles',
  'Desarrollo de APIs REST',
  'Diseño de Bases de Datos',
  'Integración de Servicios Cloud',
  'Modelado de Procesos de Negocio',
  'Análisis de Datos',
  'Colaboración en Equipo',
  'Resolución de Problemas',
  'Desarrollo Ágil',
  'Documentación de Software',
  'Aprendizaje Continuo'
];

export const projects: Project[] = [
  {
    slug: 'dewatering-solutions',
    title: 'Dewatering Solutions',
    description: 'Sitio Web Corporativo y Plataforma de Gestión Empresarial para Servicios Mineros e Industriales.',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    technologies: ['React 19', 'Vite', 'Node.js', 'Express.js', 'PostgreSQL', 'Supabase', 'Figma', 'Scrum'],
    demoUrl: 'https://dewatering-solutions.example.com',
    githubUrl: 'https://github.com/galvan-morales-enrique/dewatering-solutions',
    featured: true,
  },
  {
    slug: 'tecminer',
    title: 'TecMiner',
    description: 'Plataforma integral de gestión minera para controlar zonas de extracción, equipos, producción, inventario y control de calidad.',
    image: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    technologies: ['React', 'Django', 'Spring Boot', 'Kotlin', 'MySQL', 'AWS'],
    demoUrl: 'https://tecminer.example.com',
    githubUrl: 'https://github.com/galvan-morales-enrique/tecminer',
    featured: true,
  },
  {
    slug: 'candidatoinfo',
    title: 'CandidatoInfo',
    description: 'Aplicación móvil desarrollada para brindar información sobre los candidatos en las Elecciones Generales del Perú.',
    image: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2106&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    technologies: ['Kotlin', 'Jetpack Compose', 'Django', 'MySQL'],
    demoUrl: 'https://candidatoinfo.example.com',
    githubUrl: 'https://github.com/galvan-morales-enrique/candidatoinfo',
    featured: true,
  },
  {
    slug: 'zentrix-study-group',
    title: 'Zentrix Study Group',
    description: 'Plataforma web diseñada para gestionar estudiantes, cursos, actividades educativas y procesos académicos.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    technologies: ['PHP', 'Laravel', 'MySQL'],
    demoUrl: 'https://zentrix.example.com',
    githubUrl: 'https://github.com/galvan-morales-enrique/zentrix',
    featured: false,
  },
  {
    slug: 'legendaryclass',
    title: 'LegendaryClass',
    description: 'Plataforma educativa gamificada enfocada en aumentar el compromiso a través de misiones, logros y mecánicas de juego.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    technologies: ['PHP', 'Laravel', 'MongoDB'],
    demoUrl: 'https://legendaryclass.example.com',
    githubUrl: 'https://github.com/galvan-morales-enrique/legendaryclass',
    featured: false,
  },
];

export const interests = [
  'Ingeniería de Software',
  'Desarrollo Full Stack',
  'Desarrollo Móvil',
  'Computación en la Nube',
  'Inteligencia Artificial',
  'Análisis de Datos',
  'Sistemas de Negocios',
  'Tecnología Minera',
  'Soluciones Industriales',
  'Automatización de Procesos'
];

export const languages = [
  { name: 'Español', level: 'Nativo' },
  { name: 'Inglés', level: 'Básico a Intermedio (en mejora)' }
];
