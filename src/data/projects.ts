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
    title: "SUMUD — Banking Hackathon Platform",
    description:
      "Hackathon solution built for Zitouna Bank to address practical fintech workflows through an enterprise-style web architecture.",
    techStack: ["Spring Boot", "Angular", "Fintech Workflow Design"],
    category: "Hackathon",
    featured: true,
  },
  {
    title: "Intelligent Financial Management System (PFE)",
    description:
      "Graduation project delivering a full-stack financial platform with AI-assisted analysis to support clearer operational decisions.",
    techStack: ["MongoDB", "Express", "React", "Node.js", "Python", "Flask", "scikit-learn"],
    category: "AI / IoT",
    featured: true,
  },
  {
    title: "Designers Platform",
    description:
      "Full-stack platform inspired by Freepik, designed for creators to publish, organize, and share visual assets with a UI-first experience.",
    techStack: ["JavaScript", "Platform Engineering", "Asset Sharing", "UI Architecture"],
    category: "Full Stack",
    featured: true,
  },
  {
    title: "VerdaTun — Brand Website",
    description:
      "Freelance client website focused on translating brand identity into a credible online presence for a landscaping business.",
    techStack: ["Responsive Frontend", "Brand Integration", "Client Delivery"],
    category: "Freelance",
    featured: false,
  },
  {
    title: "Delta Formation — Training Center Website",
    description:
      "Freelance business website built to present training programs clearly and strengthen digital visibility for a learning center.",
    techStack: ["Business Website Development", "Frontend Delivery", "Production Deployment"],
    category: "Freelance",
    featured: false,
  },
  {
    title: "Smart Light Automation System",
    description:
      "IoT project combining embedded control and automation logic to deliver intelligent lighting behavior with AI-ready extension points.",
    techStack: ["ESP32", "Arduino", "IoT Automation", "Embedded Integration"],
    category: "AI / IoT",
    featured: false,
  },
];
