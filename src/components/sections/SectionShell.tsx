import { ReactNode } from "react";

type SectionShellProps = {
  id: "about" | "skills" | "projects" | "contact";
  title: string;
  subtitle: string;
  children?: ReactNode;
};

export function SectionShell({ id, title, subtitle, children }: SectionShellProps) {
  return (
    <section id={id} className="relative border-t border-cyan-200/10 px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-2xl border border-cyan-100/10 bg-slate-950/35 p-8 backdrop-blur-sm sm:p-10">
          <p className="text-xs uppercase tracking-[0.25em] text-cyan-200/80">{id}</p>
          <h2 className="mt-3 text-2xl font-semibold text-slate-100 sm:text-3xl">{title}</h2>
          <p className="mt-3 max-w-2xl text-sm text-slate-400 sm:text-base">{subtitle}</p>
          {children ? <div className="mt-6">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}
