import React from 'react';

export default function TechBadge({ tech }: { tech: string }) {
  const name = tech.trim().toLowerCase();

  let category = 'other';
  let icon = null;

  // Category determination
  if (['react', 'react 19', 'next.js', 'typescript', 'javascript', 'html5', 'css3', 'swiftui', 'jetpack compose', 'vite', 'tailwind css'].includes(name)) {
    category = 'frontend';
  } else if (['node.js', 'express.js', 'django', 'laravel', 'spring boot', 'php', 'java', 'python', 'kotlin', 'c++'].includes(name)) {
    category = 'backend';
  } else if (['postgresql', 'mysql', 'mongodb', 'oracle database', 'sql server', 'cassandradb', 'h2 database'].includes(name)) {
    category = 'database';
  } else if (['aws', 'google cloud platform (gcp)', 'supabase', 'git', 'github', 'maven'].includes(name)) {
    category = 'cloud';
  } else if (['flutter', 'dart', 'swift', 'xcode'].includes(name)) {
    category = 'mobile';
  } else if (['figma', 'bizagi modeler', 'bpmn', 'uml', 'scrum', 'metodologías ágiles'].includes(name)) {
    category = 'design';
  }

  // Category styles (modern slate cards, colored borders and text)
  const styles: Record<string, string> = {
    frontend: 'text-sky-400 bg-sky-500/5 border-sky-500/10 hover:border-sky-500/35 hover:bg-sky-500/10 shadow-sky-950/5',
    backend: 'text-emerald-400 bg-emerald-500/5 border-emerald-500/10 hover:border-emerald-500/35 hover:bg-emerald-500/10 shadow-emerald-950/5',
    database: 'text-amber-400 bg-amber-500/5 border-amber-500/10 hover:border-amber-500/35 hover:bg-amber-500/10 shadow-amber-950/5',
    cloud: 'text-cyan-400 bg-cyan-500/5 border-cyan-500/10 hover:border-cyan-500/35 hover:bg-cyan-500/10 shadow-cyan-950/5',
    mobile: 'text-purple-400 bg-purple-500/5 border-purple-500/10 hover:border-purple-500/35 hover:bg-purple-500/10 shadow-purple-950/5',
    design: 'text-rose-400 bg-rose-500/5 border-rose-500/10 hover:border-rose-500/35 hover:bg-rose-500/10 shadow-rose-950/5',
    other: 'text-slate-400 bg-slate-500/5 border-slate-500/10 hover:border-slate-500/35 hover:bg-slate-500/10 shadow-slate-950/5',
  };

  const styleClass = styles[category] || styles.other;

  // Custom inline SVG icons for visual excellence
  if (name.includes('react')) {
    icon = (
      <svg className="w-3.5 h-3.5 animate-spin-slow" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
      </svg>
    );
  } else if (name.includes('next.js')) {
    icon = (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/>
      </svg>
    );
  } else if (name.includes('typescript') || name.includes('javascript')) {
    icon = (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 3h18v18H3V3zm12.5 12.5c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5H13v6h2.5zm-1-4.5h1v3h-1v-3zM7 11v1h2v-1H7zm0 2.5c0 .83.67 1.5 1.5 1.5H10v-3H8.5v1H9v1H8.5V11H7v2.5z"/>
      </svg>
    );
  } else if (name.includes('node')) {
    icon = (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm6 14.25l-6 3-6-3v-7.5l6-3 6 3v7.5z"/>
      </svg>
    );
  } else if (name.includes('postgres') || name.includes('sql') || name.includes('mysql') || name.includes('database') || name.includes('mongo')) {
    icon = (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
      </svg>
    );
  } else if (name.includes('aws') || name.includes('cloud')) {
    icon = (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19A3.5 3.5 0 0 0 21 15.5c0-2.79-2.54-4.5-5-4.5-.47 0-.89.09-1.3.27A5 5 0 0 0 5 14c0 .34.03.67.1 1a4.5 4.5 0 0 0 6.5 5h6" />
      </svg>
    );
  } else if (name.includes('figma') || name.includes('design') || name.includes('bizagi')) {
    icon = (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 2 12 22Z" />
        <path d="M12 6V18" />
        <path d="M6 12H18" />
      </svg>
    );
  } else if (name.includes('git')) {
    icon = (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M2.6 10.5l9-9c.4-.4 1-.4 1.4 0l9 9c.4.4.4 1 0 1.4l-9 9c-.4.4-1 .4-1.4 0l-9-9c-.4-.4-.4-1 0-1.4zm10.7 4.1V12c0-.6-.4-1-1-1H9.8c-.6 0-1 .4-1 1v2.1c-.6.3-1 .9-1 1.6 0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8c0-.7-.4-1.3-1-1.6V13h1.5v1.6c-.6.3-1 .9-1 1.6 0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8c0-.7-.4-1.3-1-1.6z"/>
      </svg>
    );
  } else {
    // Default code tag
    icon = (
      <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    );
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-semibold select-none transform hover:scale-105 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 cursor-default ${styleClass}`}
    >
      {icon}
      <span>{tech}</span>
    </span>
  );
}
