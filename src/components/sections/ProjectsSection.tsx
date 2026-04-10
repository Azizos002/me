"use client";

import { useMemo, useState } from "react";
import { projectCategories, ProjectCategory, projectStructureSeed } from "@/data/projects";

type ProjectCardProps = {
  title: string;
  description: string;
  techStack: string[];
  category: ProjectCategory;
  githubUrl?: string;
  liveDemoUrl?: string;
};

function ProjectCard({ title, description, techStack, category, githubUrl, liveDemoUrl }: ProjectCardProps) {
  return (
    <article className="group rounded-2xl border border-cyan-100/10 bg-slate-950/40 p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:shadow-[0_0_35px_rgba(34,211,238,0.12)]">
      <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/70">{category}</p>
      <h3 className="mt-3 text-lg font-semibold text-slate-100">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-300">{description}</p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <li key={tech} className="rounded-md border border-slate-700/80 bg-slate-900/70 px-2.5 py-1 text-xs text-slate-300">
            {tech}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex items-center gap-3 text-sm">
        <a
          href={githubUrl ?? "#"}
          className="rounded-md border border-cyan-300/30 px-3 py-1.5 text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-500/10"
        >
          GitHub link
        </a>
        <a
          href={liveDemoUrl ?? "#"}
          className="rounded-md border border-slate-600/60 px-3 py-1.5 text-slate-300 transition hover:border-cyan-300/40 hover:text-cyan-100"
        >
          Live demo
        </a>
      </div>
    </article>
  );
}

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "All">("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return projectStructureSeed;
    }

    return projectStructureSeed.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="projects" className="relative border-t border-cyan-200/10 px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-2xl border border-cyan-100/10 bg-slate-950/35 p-8 backdrop-blur-sm sm:p-10">
          <p className="text-xs uppercase tracking-[0.25em] text-cyan-200/80">Projects</p>
          <h2 className="mt-3 text-2xl font-semibold text-slate-100 sm:text-3xl">Project architecture ready for detailed case studies</h2>
          <p className="mt-3 max-w-3xl text-sm text-slate-300 sm:text-base">
            Structured around your real portfolio work. Cards already support title, description, tech stack,
            category, GitHub, and optional live demo links.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setActiveCategory("All")}
              className={`rounded-md px-3 py-1.5 text-sm transition ${
                activeCategory === "All"
                  ? "border border-cyan-200/40 bg-cyan-500/15 text-cyan-100"
                  : "border border-slate-700/80 text-slate-300 hover:border-cyan-300/40 hover:text-cyan-100"
              }`}
            >
              All
            </button>
            {projectCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-md px-3 py-1.5 text-sm transition ${
                  activeCategory === category
                    ? "border border-cyan-200/40 bg-cyan-500/15 text-cyan-100"
                    : "border border-slate-700/80 text-slate-300 hover:border-cyan-300/40 hover:text-cyan-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
