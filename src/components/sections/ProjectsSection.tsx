"use client";

import { useMemo, useState } from "react";
import { projectCategories, ProjectCategory, projectItems, ProjectItem } from "@/data/projects";

type ProjectCardProps = {
  project: ProjectItem;
  emphasize?: boolean;
};

function ProjectCard({ project, emphasize = false }: ProjectCardProps) {
  const { title, description, techStack, category, githubUrl, liveDemoUrl } = project;

  return (
    <article
      className={`group relative overflow-hidden rounded-2xl border border-cyan-100/15 bg-slate-950/45 p-5 backdrop-blur-md transition duration-500 hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-[0_0_45px_rgba(34,211,238,0.2)] sm:p-6 ${
        emphasize ? "lg:p-8" : ""
      }`}
    >
      <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-400/10 blur-2xl transition duration-500 group-hover:bg-cyan-300/20" />

      <div className="relative z-10">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs uppercase tracking-[0.22em] text-cyan-200/80">{category}</p>
          {project.featured ? (
            <span className="rounded-full border border-cyan-300/30 bg-cyan-400/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-cyan-100">
              Featured
            </span>
          ) : null}
        </div>

        <h3 className={`mt-4 font-semibold text-slate-100 ${emphasize ? "text-xl sm:text-2xl" : "text-lg"}`}>{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-300">{description}</p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-slate-700/80 bg-slate-900/70 px-2.5 py-1 text-xs text-slate-300 transition group-hover:border-cyan-300/40 group-hover:text-cyan-100"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-col gap-2 text-sm sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
          {githubUrl ? (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-10 items-center justify-center rounded-md border border-cyan-300/40 px-3 py-1.5 text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-500/10"
            >
              GitHub
            </a>
          ) : (
            <span className="inline-flex min-h-10 items-center justify-center rounded-md border border-slate-700/70 px-3 py-1.5 text-slate-400">GitHub on request</span>
          )}

          {liveDemoUrl ? (
            <a
              href={liveDemoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-10 items-center justify-center rounded-md border border-slate-500/70 px-3 py-1.5 text-slate-200 transition hover:border-cyan-300/40 hover:text-cyan-100"
            >
              Live Demo
            </a>
          ) : (
            <span className="inline-flex min-h-10 items-center justify-center rounded-md border border-slate-700/70 px-3 py-1.5 text-slate-500">Live demo optional</span>
          )}
        </div>
      </div>
    </article>
  );
}

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("Featured");

  const featuredProjects = useMemo(() => projectItems.filter((project) => project.featured), []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "Featured") {
      return featuredProjects;
    }

    return projectItems.filter((project) => project.category === activeCategory);
  }, [activeCategory, featuredProjects]);

  return (
    <section id="projects" className="relative border-t border-cyan-200/10 px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-3xl border border-cyan-100/10 bg-slate-950/40 p-6 backdrop-blur-md sm:p-10">
          <p className="text-xs uppercase tracking-[0.25em] text-cyan-200/80">Projects</p>
          <h2 className="mt-3 text-2xl font-semibold text-slate-100 sm:text-3xl">Real systems. Real clients. Real engineering depth.</h2>
          <p className="mt-3 max-w-3xl text-sm text-slate-300 sm:text-base">
            A curated selection of enterprise, freelance, and AI-driven projects built across full-stack platforms,
            infrastructure-aware workflows, and product-focused delivery.
          </p>

          <div className="-mx-1 mt-8 flex gap-2 overflow-x-auto px-1 pb-1">
            {projectCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`shrink-0 rounded-md px-3.5 py-2 text-sm transition-all duration-300 ${
                  activeCategory === category
                    ? "border border-cyan-200/50 bg-cyan-500/15 text-cyan-100 shadow-[0_0_20px_rgba(34,211,238,0.2)]"
                    : "border border-slate-700/80 text-slate-300 hover:border-cyan-300/40 hover:text-cyan-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {activeCategory === "Featured" ? (
            <div className="mt-8 grid gap-5 lg:grid-cols-2" key="featured-grid">
              {featuredProjects.map((project, index) => (
                <div key={project.title} className="animate-fade-up" style={{ animationDelay: `${index * 0.12}s` }}>
                  <ProjectCard project={project} emphasize />
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-8 grid gap-4 md:grid-cols-2" key={`filtered-${activeCategory}`}>
              {filteredProjects.map((project, index) => (
                <div key={project.title} className="animate-fade-up" style={{ animationDelay: `${index * 0.09}s` }}>
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
