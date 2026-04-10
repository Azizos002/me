export type ProjectCategory = "Full Stack" | "Networking" | "AI / IoT" | "Freelance" | "Hackathon";

export type ProjectItem = {
  title: string;
  description: string;
  techStack: string[];
  category: ProjectCategory;
  githubUrl?: string;
  liveDemoUrl?: string;
};

export const projectCategories: ProjectCategory[] = [
  "Full Stack",
  "Networking",
  "AI / IoT",
  "Freelance",
  "Hackathon",
];

export const projectStructureSeed: ProjectItem[] = [
  {
    title: "SUMUD",
    description:
      "Hackathon fintech platform built for Zitouna Bank to address real enterprise banking workflows.",
    techStack: ["Spring Boot", "Angular", "Fintech Workflows"],
    category: "Hackathon",
  },
  {
    title: "Designers Platform",
    description:
      "Asset-sharing designer platform inspired by Freepik, focused on creator workflows and UI-driven delivery.",
    techStack: ["Full Stack JavaScript", "UI Platform", "Asset Management"],
    category: "Freelance",
  },
  {
    title: "Intelligent Financial Management (PFE)",
    description:
      "MERN + AI financial management system with machine-learning-enhanced analysis and automation features.",
    techStack: ["MongoDB", "Express", "React", "Node.js", "Python", "Flask", "scikit-learn"],
    category: "AI / IoT",
  },
  {
    title: "Smart Light System",
    description:
      "IoT automation system combining embedded hardware control and AI-driven logic for smart lighting scenarios.",
    techStack: ["ESP32", "Arduino", "MicroPython", "Automation Logic"],
    category: "AI / IoT",
  },
  {
    title: "VerdaTun Project",
    description:
      "Freelance brand and website delivery for a real business client in the landscaping space.",
    techStack: ["Web Development", "Branding", "Client Delivery"],
    category: "Freelance",
  },
  {
    title: "Delta Formation Website",
    description:
      "Training center website built as a complete client-facing freelance solution.",
    techStack: ["Web Design", "Frontend", "Deployment"],
    category: "Freelance",
  },
];
