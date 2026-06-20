import { PORTFOLIO_DATA } from "@/constants/data";

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-900/30 border-y border-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center md:text-left mb-16">
          <h2 className="text-sm font-semibold tracking-wider uppercase text-indigo-400 mb-3">
            About Me
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white">
            My Background & Core Strengths
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Bio Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h3 className="text-2xl font-bold text-slate-100">
              Architecting fast web solutions with clean engineering practices
            </h3>
            <p className="text-slate-450 text-base leading-relaxed">
              {PORTFOLIO_DATA.bio}
            </p>
            <p className="text-slate-450 text-base leading-relaxed">
              My engineering philosophy revolves around efficiency: maximizing asset caching, eliminating unused code bloat, optimizing script executions, and writing clean semantic structures. I believe a website should be as responsive and lightning-fast as a native operating system view.
            </p>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-800">
              <div>
                <p className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
                  6+
                </p>
                <p className="text-xs font-semibold text-slate-450 mt-1 uppercase tracking-wider">
                  Years Exp
                </p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400">
                  30+
                </p>
                <p className="text-xs font-semibold text-slate-450 mt-1 uppercase tracking-wider">
                  Projects Done
                </p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400">
                  99%
                </p>
                <p className="text-xs font-semibold text-slate-450 mt-1 uppercase tracking-wider">
                  Perf Score
                </p>
              </div>
            </div>
          </div>

          {/* Skills Column */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {PORTFOLIO_DATA.skillCategories.map((category) => (
              <div
                key={category.title}
                className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700/60 transition-all duration-300 shadow-md shadow-slate-950/10"
              >
                <h4 className="text-base font-bold text-indigo-350 mb-4 border-b border-slate-800/60 pb-2">
                  {category.title}
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => {
                    const levelColors = {
                      Expert: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
                      Advanced: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
                      Intermediate: "bg-amber-500/10 text-amber-400 border-amber-500/20"
                    };
                    const colorClass = levelColors[skill.level];

                    return (
                      <div
                        key={skill.name}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border bg-slate-950/60 border-slate-800 text-xs font-medium text-slate-350 group hover:border-slate-700 hover:text-white transition-all duration-200"
                      >
                        <span>{skill.name}</span>
                        <span
                          className={`text-[9px] px-1 py-0.5 rounded font-semibold border ${colorClass}`}
                        >
                          {skill.level}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
