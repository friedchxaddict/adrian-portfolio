export interface ToolkitCategory {
  category: string;
  skills: string[];
}

export const toolkit: ToolkitCategory[] = [
  {
    category: "Program & Delivery",
    skills: [
      "Agile/Scrum",
      "Sprint Planning",
      "Backlog Management",
      "Cross-functional Coordination",
      "Risk & Dependency Management",
      "Release Coordination",
      "Stakeholder Communication",
      "Jira",
      "Technical Documentation",
    ],
  },
  {
    category: "Development",
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "HTML/CSS",
      "Python",
      "REST APIs",
      "Postman",
      "Git/GitHub",
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      "Google Cloud Platform",
      "Docker",
      "GitHub Actions",
      "CI/CD",
      "Firebase",
      "Vercel",
    ],
  },
  {
    category: "Quality",
    skills: ["QA Coordination", "Cypress", "Release Validation"],
  },
  {
    category: "AI",
    skills: [
      "AI-assisted development",
      "AI workflow automation",
      "LLM-assisted research and problem solving",
    ],
  },
];
