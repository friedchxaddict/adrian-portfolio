export const careerProgression = [
  "Software Developer",
  "Technical / Operational Leadership",
  "COO / Technical Program Leadership",
] as const;

export interface Role {
  company: string;
  title: string;
  progressionNote: string;
  summary: string;
  highlights: string[];
}

export const roles: Role[] = [
  {
    company: "TERN / Opes Financial",
    title: "COO — Technical Program & Delivery Leadership",
    progressionNote: "Progressed from Software Developer to COO within the first year",
    summary:
      "Led day-to-day engineering delivery for a startup software team, coordinating developers and QA across product development, APIs, infrastructure, testing, and releases.",
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
