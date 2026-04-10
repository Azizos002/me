export function AboutSection() {
  return (
    <section id="about" className="relative border-t border-cyan-200/10 px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="rounded-2xl border border-cyan-100/10 bg-slate-950/35 p-6 backdrop-blur-sm sm:p-10">
          <p className="text-xs uppercase tracking-[0.25em] text-cyan-200/80">About</p>
          <h2 className="mt-3 text-2xl font-semibold text-slate-100 sm:text-3xl">
            Full Stack Engineer × Network Expert × System Builder
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-slate-300 sm:text-base">
            I&apos;m Aziz Dhifaoui, a Full Stack JavaScript Developer and Network Engineering student focused
            on building end-to-end systems that are scalable, reliable, and production-ready. My foundation
            combines software engineering, information systems, and advanced network expertise.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
            From telecom maintenance at Tunisie Telecom to full-stack product development at Trimbak
            InfoTech and AI-powered financial systems at XalBox, I approach every project with infrastructure
            awareness and system-level thinking.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
            I build across web platforms, AI workflows, and IoT-driven solutions with one objective: design
            systems that solve real-world problems and perform under real constraints.
          </p>
        </article>

        <aside className="rounded-2xl border border-cyan-100/10 bg-slate-950/35 p-6 backdrop-blur-sm sm:p-10">
          <p className="text-xs uppercase tracking-[0.25em] text-cyan-200/80">Experience Highlights</p>
          <ul className="mt-6 space-y-4">
            <li className="rounded-xl border border-cyan-300/10 bg-cyan-500/5 p-4">
              <h3 className="text-sm font-semibold text-cyan-100">Tunisie Telecom</h3>
              <p className="mt-2 text-sm text-slate-300">
                Network maintenance and monitoring in a real telecom environment.
              </p>
            </li>
            <li className="rounded-xl border border-cyan-300/10 bg-cyan-500/5 p-4">
              <h3 className="text-sm font-semibold text-cyan-100">Trimbak InfoTech</h3>
              <p className="mt-2 text-sm text-slate-300">
                Built a production-oriented web application using the MEAN stack.
              </p>
            </li>
            <li className="rounded-xl border border-cyan-300/10 bg-cyan-500/5 p-4">
              <h3 className="text-sm font-semibold text-cyan-100">XalBox</h3>
              <p className="mt-2 text-sm text-slate-300">
                Developed intelligent financial management features using MERN and AI tooling.
              </p>
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
