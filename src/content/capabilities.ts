/**
 * Capabilities demonstrated through real work. Every example is drawn from the
 * résumé or the existing Experience / Featured Work content — nothing is
 * inferred or invented. Verbs are chosen to distinguish work Adrian personally
 * implemented from work he coordinated or helped shape.
 */
export interface Capability {
  title: string;
  description: string;
  /** Two or three short, verified examples of actual work or deliverables. */
  examples: string[];
  /** Relevant tools or technologies, where applicable. */
  tools?: string[];
}

export const capabilities: Capability[] = [
  {
    title: "Engineering Delivery & Program Coordination",
    description:
      "Managed delivery for a cross-functional engineering team — turning priorities into sprint plans, and sprint plans into coordinated releases.",
    examples: [
      "Structured and ran a two-week Scrum cadence across two developer groups: sprint planning, backlog refinement, and priority management",
      "Coordinated frontend, backend, QA, and DevOps work across TIDAL releases, surfacing blockers and dependencies early",
      "Coordinated release scheduling and validation with engineering and business stakeholders",
    ],
    tools: ["Agile/Scrum", "Jira", "GitHub"],
  },
  {
    title: "Engineering Team Leadership",
    description:
      "Directly managed the engineers doing the work — up to 15 direct reports at peak — and kept founders and the board informed in terms they could act on.",
    examples: [
      "Interviewed and evaluated technical candidates; onboarded and mentored developers",
      "Managed workload and performance for a team spanning development, QA, DevOps, CI/CD, and security",
      "Translated engineering tradeoffs and risks into decisions for non-technical leadership",
    ],
  },
  {
    title: "Software Development & Technical Execution",
    description:
      "Hands-on frontend development alongside the program role, with working depth in APIs and production debugging.",
    examples: [
      "Implemented the Counting House Bookkeeping website end to end — requirements through launch",
      "Contributed frontend development on TIDAL's compiler sandbox, and helped coordinate the G API and TERN API integrations",
      "Hands-on production troubleshooting and deployments on TIDAL",
    ],
    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Python", "REST APIs", "Postman"],
  },
  {
    title: "Cloud Infrastructure & Deployment",
    description:
      "Coordinated how code reached production and stayed close enough to the pipeline to debug it myself when needed.",
    examples: [
      "Helped shape CI/CD deployment strategy and cloud infrastructure decisions for TIDAL with founders and the board",
      "Contributed to TIDAL production deployments and hands-on production support",
      "Deployed the Counting House site to Vercel, including the domain migration",
    ],
    tools: ["Google Cloud Platform", "Docker", "GitHub Actions", "Firebase", "Vercel"],
  },
  {
    title: "Quality, Reliability & Incident Response",
    description:
      "Managed QA and release validation across the team, and personally debugged production issues when they surfaced.",
    examples: [
      "Managed QA across TIDAL releases, with Cypress as part of the testing environment",
      "Investigated a production 502 incident hands-on — traced it to corrupted node_modules in the build and resolved it with a Next.js version update",
      "Used the incident to tighten the team's release-validation checklist",
    ],
    tools: ["Cypress", "Release Validation"],
  },
  {
    title: "AI-Assisted Development & Automation",
    description:
      "Applies AI tooling to day-to-day engineering work — and has designed and implemented one automation end to end.",
    examples: [
      "Designed and implemented an AI-assisted pull request review workflow using GitHub Actions, local LLMs, and Jira",
      "AI-assisted development in day-to-day coding",
      "LLM-assisted technical research and problem solving",
    ],
    tools: ["GitHub Actions", "Local LLMs", "Jira"],
  },
];
