export interface Skill {
  name: string;
  level: "Expert" | "Advanced" | "Intermediate";
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: "Frontend" | "Full-Stack" | "Design System" | "DevOps";
  tags: string[];
  image: string; // fallback or placeholder
  liveUrl: string;
  githubUrl: string;
  features: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  bullets: string[];
  isEducation?: boolean;
}

export const PORTFOLIO_DATA = {
  name: "Alex Morgan",
  subtitle: "Senior Full Stack Engineer & UI Architect",
  tagline: "I build fast, beautiful, and accessible web experiences.",
  bio: "I am a passionate software engineer with 6+ years of professional experience building high-performance web applications. Specializing in React, Next.js, Node.js, and Cloud Infrastructure, I focus on writing clean, scalable code and delivering exceptional user experiences that perform outstandingly on core web vitals and search engine rankings.",
  
  skillCategories: [
    {
      title: "Frontend Development",
      skills: [
        { name: "React / Next.js", level: "Expert" },
        { name: "TypeScript", level: "Expert" },
        { name: "Tailwind CSS", level: "Expert" },
        { name: "State Management (Redux/Zustand)", level: "Advanced" },
        { name: "HTML5 / CSS3 / SASS", level: "Expert" },
        { name: "Headless UI & Accessibility (WAI-ARIA)", level: "Advanced" }
      ]
    },
    {
      title: "Backend & Databases",
      skills: [
        { name: "Node.js / Express / NestJS", level: "Expert" },
        { name: "REST & GraphQL APIs", level: "Advanced" },
        { name: "PostgreSQL / Prisma", level: "Advanced" },
        { name: "MongoDB / Mongoose", level: "Advanced" },
        { name: "Redis Caching", level: "Intermediate" }
      ]
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "Vercel / Netlify", level: "Expert" },
        { name: "AWS (S3, EC2, CloudFront)", level: "Advanced" },
        { name: "Docker", level: "Intermediate" },
        { name: "GitHub Actions / CI-CD", level: "Advanced" },
        { name: "Linux / Bash scripting", level: "Intermediate" }
      ]
    },
    {
      title: "Quality & Performance",
      skills: [
        { name: "Jest / React Testing Library", level: "Advanced" },
        { name: "Web Performance (Lighthouse optimization)", level: "Expert" },
        { name: "SEO Audit & Structuring", level: "Expert" },
        { name: "Git Version Control", level: "Expert" }
      ]
    }
  ] as SkillCategory[],

  projects: [
    {
      id: "ecommerce-nexus",
      title: "E-Commerce Nexus",
      description: "A high-performance headless commerce storefront leveraging incremental static regeneration (ISR) and localized content.",
      longDescription: "A fully custom e-commerce solution targeting sub-second page loads. Leverages GraphQL APIs for dynamic queries, Stripe for secure checkout, and optimized image processing pipelines to achieve high Lighthouse scores on mobile layouts.",
      category: "Full-Stack",
      tags: ["Next.js", "GraphQL", "Tailwind CSS", "Stripe", "Prisma"],
      image: "/projects/nexus.svg",
      liveUrl: "https://nexus-commerce.example.com",
      githubUrl: "https://github.com/alexmorgan-dev/ecommerce-nexus",
      features: [
        "Lighthouse score of 100/100 for SEO & Accessibility",
        "Sub-second checkout flow using Stripe elements",
        "Incremental static regeneration (ISR) for instantly loading dynamic product updates",
        "Comprehensive localized support for multi-currency transactions"
      ]
    },
    {
      id: "aether-analytics",
      title: "Aether Analytics",
      description: "A real-time telemetry and user-activity dashboard tracking live client events over secure WebSocket channels.",
      longDescription: "A telemetry dashboard built for tracking distributed systems. Includes beautiful interactive charting systems built directly in SVG to prevent heavy external bundle dependencies, achieving zero layout shifts during render.",
      category: "Frontend",
      tags: ["React", "WebSockets", "D3.js", "Tailwind CSS", "Zustand"],
      image: "/projects/aether.svg",
      liveUrl: "https://aether-analytics.example.com",
      githubUrl: "https://github.com/alexmorgan-dev/aether-analytics",
      features: [
        "Real-time event feed powered by Tailwind transition micro-animations",
        "Zero-dependency SVG interactive chart renderer",
        "Fluid grid layouts allowing custom widget positioning",
        "Offline synchronization using local storage buffers"
      ]
    },
    {
      id: "synapse-lms",
      title: "Synapse LMS",
      description: "A serverless Learning Management System featuring interactive collaborative tools and rich markdown rendering.",
      longDescription: "Designed for internal enterprise training, this LMS utilizes serverless functions to scale under traffic peaks. Uses Edge middleware caching to deliver customized dashboards instantly for authenticated learners.",
      category: "Full-Stack",
      tags: ["Next.js", "NestJS", "PostgreSQL", "Tailwind CSS", "AWS S3"],
      image: "/projects/synapse.svg",
      liveUrl: "https://synapse-lms.example.com",
      githubUrl: "https://github.com/alexmorgan-dev/synapse-lms",
      features: [
        "Optimized image & video asset processing through AWS CloudFront",
        "Complete Markdown parser with live code compilation previews",
        "Collaborative workspaces with instant document synchronization",
        "Rigorous unit testing coverage exceeding 85%"
      ]
    },
    {
      id: "zephyr-ui",
      title: "Zephyr UI",
      description: "A lightweight, headless React component library designed with strict focus on WCAG 2.1 accessibility criteria.",
      longDescription: "An open-source library built to make accessible components standard. Supports comprehensive keyboard controls, focus rings, and screen-reader optimizations out of the box, with zero stylesheet bloat.",
      category: "Design System",
      tags: ["React", "TypeScript", "Tailwind CSS", "Storybook", "WAI-ARIA"],
      image: "/projects/zephyr.svg",
      liveUrl: "https://zephyr-ui.example.com",
      githubUrl: "https://github.com/alexmorgan-dev/zephyr-ui",
      features: [
        "Strict compliance with WCAG 2.1 AA and AAA accessibility standards",
        "Fully keyboard accessible components with automated visual focus styling",
        "Less than 5KB bundle footprint to minimize script evaluation cost",
        "Integrated Storybook documentation with live visual regression testing"
      ]
    }
  ] as Project[],

  experience: [
    {
      id: "innovate-tech",
      role: "Lead Software Engineer",
      company: "InnovateTech Systems",
      period: "2024 - Present",
      description: "Spearhead the design and development of modern SaaS platforms, leading a high-performing team of 5 developers to deliver accessible and performant web interfaces.",
      bullets: [
        "Migrated legacy dashboard stack to Next.js App Router, increasing Core Web Vitals performance by 42%.",
        "Introduced a unified Tailwind CSS design system that trimmed down stylesheet file sizes by 65%.",
        "Mentored team members on modern React compiler architectures, standard TypeScript paradigms, and advanced SEO strategies."
      ]
    },
    {
      id: "cloud-craft",
      role: "Senior Full Stack Developer",
      company: "CloudCraft Solutions",
      period: "2022 - 2024",
      description: "Designed robust, highly scalable serverless backends and real-time frontend applications.",
      bullets: [
        "Architected serverless API layers on AWS Lambda and API Gateway, cutting infrastructure costs by 30%.",
        "Optimized complex PostgreSQL query pathways, reducing page load latencies from 1.2s to 180ms.",
        "Implemented real-time telemetry streaming platforms utilizing secure WebSocket systems."
      ]
    },
    {
      id: "pixel-pulse",
      role: "Frontend Engineer",
      company: "PixelPulse Studios",
      period: "2020 - 2022",
      description: "Collaborated with UX design teams to translate complex mockups into interactive, smooth user interfaces.",
      bullets: [
        "Built responsive dashboards for high-visibility clients, increasing user engagement metrics by 25%.",
        "Integrated automated test pipelines with Jest, achieving 90% code coverage across key product segments.",
        "Crafted optimized marketing pages containing highly detailed Open Graph representations to enhance organic traffic."
      ]
    },
    {
      id: "edu-tech-univ",
      role: "B.S. in Computer Science & Engineering",
      company: "Tech University of Engineering",
      period: "2016 - 2020",
      description: "Graduated with honors. Specialized in Software Architecture, Algorithms, and Human-Computer Interaction.",
      bullets: [
        "Acquired deep theoretical background in data structures, systems engineering, and databases.",
        "Developed interactive full-stack senior projects applying responsive design methodologies.",
        "Recipient of Academic Excellence Award for consecutive semesters."
      ],
      isEducation: true
    }
  ] as ExperienceItem[]
};
