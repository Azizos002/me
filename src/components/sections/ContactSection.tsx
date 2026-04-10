"use client";

import { FormEvent, useState } from "react";

const contactMethods = [
  {
    label: "Email",
    value: "azizdhifaoui06@gmail.com",
    href: "mailto:azizdhifaoui06@gmail.com",
  },
  {
    label: "GitHub",
    value: "/azizos002",
    href: "https://github.com/azizos002",
  },
  {
    label: "LinkedIn",
    value: "/azizdhifaoui",
    href: "https://www.linkedin.com/in/aziz-dhifaoui-legacy",
  },
];

const credibilityHighlights = [
  "Bachelor's Degree in Computer Science",
  "Master's in Computer Engineering (Network Expertise)",
  "Internships: Tunisie Telecom, Trimbak InfoTech, XalBox",
  "Certifications: Scrum Fundamentals, Intro to IoT (Cisco), Intro to Machine Learning",
  "Active in IEEE, Enactus, and student technical organizations",
];

const quickStats = [
  { label: "Domains", value: "Web • Network • AI • IoT" },
  { label: "Engagement", value: "Internship / Freelance / Collaboration" },
  { label: "Focus", value: "Scalable systems with infrastructure awareness" },
];

type ContactForm = {
  name: string;
  email: string;
  message: string;
};

export function ContactSection() {
  const [form, setForm] = useState<ContactForm>({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = (await response.json()) as { success: boolean; error?: string };

      if (!response.ok || !result.success) {
        setErrorMessage(result.error ?? "Unable to send your message. Please try again.");
        return;
      }

      setSuccessMessage("Message sent successfully. I will get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setErrorMessage("Unexpected error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative border-t border-cyan-200/10 px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {quickStats.map((item, index) => (
            <article
              key={item.label}
              className="animate-fade-up rounded-2xl border border-cyan-200/10 bg-slate-950/40 p-5 backdrop-blur-md"
              style={{ animationDelay: `${index * 0.09}s` }}
            >
              <p className="text-xs uppercase tracking-[0.22em] text-cyan-200/75">{item.label}</p>
              <p className="mt-3 text-sm font-medium text-slate-100">{item.value}</p>
            </article>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="rounded-3xl border border-cyan-100/10 bg-slate-950/45 p-8 backdrop-blur-md sm:p-10">
            <p className="text-xs uppercase tracking-[0.25em] text-cyan-200/80">Contact</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-100 sm:text-3xl">Let&apos;s build resilient, high-impact systems together.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Open to internships, freelance projects, and technical collaborations where software engineering,
              networks, and intelligent systems intersect.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {contactMethods.map((method) => (
                <a
                  key={method.label}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group rounded-xl border border-cyan-200/15 bg-cyan-400/[0.05] p-4 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-400/[0.1]"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/75">{method.label}</p>
                  <p className="mt-2 text-sm text-slate-100 transition group-hover:text-cyan-100">{method.value}</p>
                </a>
              ))}
            </div>

            <a
              href="/resume.pdf"
              className="mt-7 inline-flex rounded-md border border-cyan-300/40 bg-cyan-500/10 px-5 py-2.5 text-sm font-medium text-cyan-100 transition hover:-translate-y-0.5 hover:border-cyan-200 hover:bg-cyan-500/20"
            >
              Download CV / Resume
            </a>
          </article>

          <article className="rounded-3xl border border-cyan-100/10 bg-slate-950/45 p-8 backdrop-blur-md sm:p-10">
            <p className="text-xs uppercase tracking-[0.25em] text-cyan-200/80">Credibility</p>
            <h3 className="mt-3 text-xl font-semibold text-slate-100">Engineering profile at a glance</h3>

            <ul className="mt-5 space-y-3">
              {credibilityHighlights.map((highlight, index) => (
                <li
                  key={highlight}
                  className="animate-fade-up rounded-xl border border-cyan-200/10 bg-slate-900/55 px-4 py-3 text-sm text-slate-300"
                  style={{ animationDelay: `${0.1 + index * 0.07}s` }}
                >
                  {highlight}
                </li>
              ))}
            </ul>

            <form className="mt-6 space-y-3" aria-label="Contact form preview" onSubmit={handleSubmit}>
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/75">Quick message (UI preview)</p>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
                placeholder="Your name"
                required
                className="w-full rounded-lg border border-slate-700/80 bg-slate-900/70 px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-cyan-300/50"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
                placeholder="Your email"
                required
                className="w-full rounded-lg border border-slate-700/80 bg-slate-900/70 px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-cyan-300/50"
              />
              <textarea
                name="message"
                value={form.message}
                onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
                placeholder="Project brief"
                rows={4}
                required
                className="w-full resize-none rounded-lg border border-slate-700/80 bg-slate-900/70 px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-cyan-300/50"
              />
              {successMessage ? <p className="text-sm text-emerald-300">{successMessage}</p> : null}
              {errorMessage ? <p className="text-sm text-rose-300">{errorMessage}</p> : null}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-lg border border-cyan-300/35 bg-cyan-500/10 px-4 py-2.5 text-sm font-medium text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-500/20 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Sending..." : "Send Inquiry"}
              </button>
            </form>
          </article>
        </div>
      </div>
    </section>
  );
}
