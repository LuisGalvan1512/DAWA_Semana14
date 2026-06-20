import { PORTFOLIO_DATA } from "@/constants/data";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-20">
      {/* Decorative Blur Spheres for Glassmorphism Background */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none animate-pulse duration-10000" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-35" 
        style={{ pointerEvents: "none" }}
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        {/* Available for Hire Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-indigo-400 text-xs font-semibold mb-6 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span>Available for new opportunities</span>
        </div>

        {/* Big Bold Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1] sm:leading-[1.1]">
          Hi, I am{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
            {PORTFOLIO_DATA.name}
          </span>
        </h1>

        {/* Professional Subheading */}
        <p className="text-xl sm:text-2xl font-semibold text-slate-200 mb-4 max-w-2xl">
          {PORTFOLIO_DATA.subtitle}
        </p>

        {/* Short bio tagline */}
        <p className="text-base sm:text-lg text-slate-400 mb-8 max-w-xl leading-relaxed">
          {PORTFOLIO_DATA.tagline} Specialize in constructing state-of-the-art websites optimizing for raw speed, clean code, and search visibility.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a
            href="#projects"
            className="flex items-center justify-center h-12 px-8 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/30 hover:brightness-110 active:scale-98 transition-all duration-200"
          >
            Explore My Work
          </a>
          <a
            href="#contact"
            className="flex items-center justify-center h-12 px-8 rounded-xl border border-slate-700 bg-slate-900/50 hover:bg-slate-900 hover:border-slate-600 text-slate-200 font-semibold active:scale-98 transition-all duration-200"
          >
            Get In Touch
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 animate-bounce">
          <span className="text-xs tracking-widest uppercase">Scroll Down</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
