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
      "Led a cross-functional engineering team of up to 15 direct reports across software development, QA, DevOps, CI/CD, and security — managing sprint execution, technical priorities, dependencies, testing, and releases for a startup. At peak, the team included eight developers across two Scrum groups, four QA professionals, and three DevOps, CI/CD, and security specialists.",
    highlights: [
      "Sprint planning",
      "Two-week Agile/Scrum sprint cadence",
      "Backlog and priority management",
      "Dependency and blocker management",
      "Release coordination",
      "Developer and QA coordination",
      "Cross-functional stakeholder communication",
      "Production issue management",
      "Hiring, onboarding, and performance management",
      "Engineering process improvement",
    ],
  },
];
