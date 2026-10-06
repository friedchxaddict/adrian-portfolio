export const careerProgression = [
  "Software Developer",
  "Technical / Operational Leadership",
  "COO / Technical Program Leadership",
] as const;

export interface Role {
  company: string;
  dates: string;
  title: string;
  progressionNote: string;
  summary: string;
  highlights: string[];
}

export const roles: Role[] = [
  {
    company: "Tern Computers / Opes Associates",
    dates: "2024–2026",
    title: "COO — Technical Program & Delivery Leadership",
    progressionNote: "Progressed from Software Developer to COO within the first year",
    summary:
      "Led day-to-day engineering delivery for a cross-functional team of 15+ spanning frontend, backend, QA, DevOps, and security — coordinating product development, APIs, infrastructure, testing, and releases for a growth-stage startup.",
    highlights: [
      "Two-week Agile/Scrum sprint cadence",
      "Sprint planning",
      "Backlog and priority management",
      "Developer and QA coordination",
      "Cross-functional stakeholder communication",
      "Dependency and blocker management",
      "Release coordination",
      "Production issue management",
      "Hiring and onboarding",
      "Engineering process improvement",
    ],
  },
];
