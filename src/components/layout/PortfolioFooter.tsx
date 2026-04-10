const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/azizos002",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aziz-dhifaoui-legacy",
  },
  {
    label: "Email",
    href: "mailto:azizdhifaoui06@gmail.com",
  },
];

export function PortfolioFooter() {
  return (
    <footer className="relative border-t border-cyan-200/10 px-6 py-10 sm:py-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_100%,rgba(34,211,238,0.08),transparent_45%)]" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-8 rounded-2xl border border-cyan-100/10 bg-slate-950/45 px-6 py-7 backdrop-blur-md sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-lg font-semibold text-slate-100">Aziz Dhifaoui</p>
            <p className="mt-1 text-sm text-slate-300">Full Stack JavaScript Developer &amp; Network Expert</p>
            <p className="mt-3 text-sm text-cyan-100/90">Building modern web systems with network intelligence.</p>
          </div>

          <nav aria-label="Footer social links">
            <ul className="flex flex-wrap items-center gap-2">
              {socialLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    className="inline-flex rounded-md border border-cyan-200/15 bg-cyan-400/[0.04] px-3 py-1.5 text-sm text-slate-200 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/45 hover:bg-cyan-500/10 hover:text-cyan-100"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="border-t border-cyan-200/10 pt-4 text-xs text-slate-400">
          © {new Date().getFullYear()} Aziz Dhifaoui. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
