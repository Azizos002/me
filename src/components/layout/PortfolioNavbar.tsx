"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function PortfolioNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <nav
        className={`mx-auto w-full max-w-6xl rounded-2xl border transition-all duration-500 ${
          isScrolled
            ? "border-cyan-200/20 bg-slate-950/60 shadow-[0_16px_45px_rgba(0,0,0,0.4)] backdrop-blur-xl"
            : "border-transparent bg-transparent"
        } animate-fade-down`}
        aria-label="Primary"
      >
        <div className="flex items-center justify-between gap-3 px-4 py-3 sm:px-5 sm:py-4">
          <Link
            href="#home"
            className="group inline-flex min-w-0 items-center gap-2 text-[11px] font-medium tracking-[0.14em] text-cyan-100 sm:text-sm sm:tracking-[0.18em]"
            onClick={closeMenu}
          >
            <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.95)] transition-transform duration-300 group-hover:scale-125" />
            <span className="truncate">AZIZ DHIFAOUI</span>
          </Link>

          <button
            type="button"
            className="inline-flex min-h-10 items-center rounded-md border border-cyan-200/25 p-2 text-cyan-100 transition hover:border-cyan-200/60 hover:bg-cyan-400/10 md:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            <span className="sr-only">Open navigation menu</span>
            <span className="grid h-4 w-5 gap-1">
              <span className="h-0.5 w-full rounded bg-current" />
              <span className="h-0.5 w-full rounded bg-current" />
              <span className="h-0.5 w-full rounded bg-current" />
            </span>
          </button>

          <ul className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-md px-4 py-2 text-sm text-slate-200 transition duration-300 hover:bg-cyan-500/10 hover:text-cyan-100"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div
          id="mobile-menu"
          className={`overflow-hidden transition-[max-height,opacity] duration-300 md:hidden ${
            isMenuOpen ? "max-h-[75vh] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="space-y-1 px-4 pb-4 pt-1 sm:px-5">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  className="block rounded-md px-3 py-3 text-sm text-slate-200 transition duration-300 hover:bg-cyan-500/10 hover:text-cyan-100"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
