export type ProjectCategory = "Featured" | "Full Stack" | "Freelance" | "AI / IoT" | "Hackathon";

export type ProjectItem = {
  title: string;
  description: string;
  techStack: string[];
  category: Exclude<ProjectCategory, "Featured">;
  featured: boolean;
  githubUrl?: string;
  liveDemoUrl?: string;
};

export const projectCategories: ProjectCategory[] = ["Featured", "Full Stack", "Freelance", "AI / IoT", "Hackathon"];

export const projectItems: ProjectItem[] = [
  {
    title: "SUMUD",
    description: "Enterprise-focused fintech solution developed during a hackathon for Zitouna Bank banking workflows.",
    techStack: ["Spring Boot", "Angular", "Enterprise UX"],
    category: "Hackathon",
    featured: true,
  },
  {
    title: "Intelligent Financial Management System (PFE)",
    description:
      "AI-powered full-stack platform delivering intelligent financial analysis through MERN architecture and ML services.",
    techStack: ["MongoDB", "Express", "React", "Node.js", "Python", "Flask", "scikit-learn"],
    category: "AI / IoT",
    featured: true,
  },
  {
    title: "Designers Platform",
    description: "Full stack design-asset platform inspired by Freepik, built for scalable sharing and UI-first creator workflows.",
    techStack: ["JavaScript", "Platform Architecture", "Asset Management", "UI Engineering"],
    category: "Full Stack",
    featured: true,
  },
  {
    title: "VerdaTun Website",
    description: "Freelance client project delivering a complete digital presence and brand-aligned website for a landscaping business.",
    techStack: ["Client Delivery", "Brand Web Strategy", "Responsive Frontend"],
    category: "Freelance",
    featured: false,
  },
  {
    title: "Delta Formation Website",
    description: "Professional business website built for a training center with a clear service presentation and conversion-focused layout.",
    techStack: ["Business Website", "Frontend Development", "Deployment"],
    category: "Freelance",
    featured: false,
  },
  {
    title: "Smart Light System",
    description: "IoT automation system combining embedded control and AI-ready logic for intelligent lighting scenarios.",
    techStack: ["ESP32", "Arduino", "Automation Logic", "Sensor Integration"],
    category: "AI / IoT",
    featured: false,
  },
];
