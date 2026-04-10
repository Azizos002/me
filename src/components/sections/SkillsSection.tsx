const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "REST APIs"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "SQL", "NoSQL"],
  },
  {
    title: "DevOps / Tools",
    skills: ["Docker", "Git", "Linux", "VirtualBox"],
  },
  {
    title: "Networking",
    skills: ["TCP/IP", "Routing", "Network Security", "Cisco Packet Tracer", "GNS3", "Kali Linux"],
  },
  {
    title: "AI / Data",
    skills: ["Python", "Flask", "scikit-learn"],
  },
  {
    title: "IoT",
    skills: ["ESP32", "Arduino", "MicroPython"],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="relative border-t border-cyan-200/10 px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-2xl border border-cyan-100/10 bg-slate-950/35 p-6 backdrop-blur-sm sm:p-10">
          <p className="text-xs uppercase tracking-[0.25em] text-cyan-200/80">Skills</p>
          <h2 className="mt-3 text-2xl font-semibold text-slate-100 sm:text-3xl">Systems-focused technical stack</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <article
                key={group.title}
                className="group rounded-xl border border-cyan-300/10 bg-cyan-500/[0.04] p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-cyan-500/[0.08]"
              >
                <h3 className="text-sm font-semibold text-cyan-100">{group.title}</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-md border border-slate-700/80 bg-slate-900/70 px-2.5 py-1 text-xs text-slate-300 transition group-hover:border-cyan-400/30 group-hover:text-cyan-100"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
