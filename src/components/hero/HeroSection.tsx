import { NetworkBackground } from "./NetworkBackground";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#02050d] px-4 pb-16 pt-28 sm:px-6 sm:pt-32">
      <NetworkBackground />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.4)_0%,rgba(2,6,23,0.92)_65%,#02050d_100%)]" />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center animate-fade-up">
        <span className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-500/10 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-cyan-200/90 sm:px-4 sm:text-xs sm:tracking-[0.35em] md:text-sm">
          Network-Driven Engineering
        </span>

        <h1 className="text-3xl font-semibold text-white sm:text-5xl md:text-6xl">
          Aziz Dhifaoui
        </h1>

        <p className="mt-4 max-w-3xl text-sm text-cyan-100/85 sm:text-xl md:text-2xl">
          Full Stack JavaScript Developer &amp; Network Expert
        </p>

        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-lg">
          Building scalable web platforms and intelligent network-driven systems
        </p>

        <div className="mt-10 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
          <a
            href="#projects"
            className="rounded-md border border-cyan-300/50 bg-cyan-400/15 px-7 py-3 text-sm font-medium text-cyan-50 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-200 hover:bg-cyan-400/25 hover:shadow-[0_0_30px_rgba(34,211,238,0.35)] sm:px-7"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-md border border-slate-300/30 bg-slate-900/20 px-7 py-3 text-sm font-medium text-slate-100 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-200/60 hover:text-cyan-100"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
