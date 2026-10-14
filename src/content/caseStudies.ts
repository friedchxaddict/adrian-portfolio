export interface IncidentNote {
  title: string;
  body: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  categories: string[];
  /** One paragraph, or several for longer descriptions that need to scan easily. */
  summary: string | string[];
  /** Delivery lifecycle steps shown as a visual process flow. */
  lifecycle?: string[];
  /** Scope of work, used for the "evidence of hands-on" case study. */
  scope?: string[];
  stack: string[];
  incident?: IncidentNote;
  link?: { href: string; label: string };
  featured?: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "tidal",
    title: "TIDAL",
    categories: [
      "Technical Program Leadership",
      "Software Development",
      "Cloud Delivery",
    ],
    summary: [
      "TIDAL was an interactive, browser-based compiler and code execution sandbox built to demonstrate ternary computing. Users could write C-like code, translate it through a RISC-V-inspired ternary representation using −1, 0, and +1, and run programs to view their output — from “Hello World” to simple arithmetic. The interface presented the G, TERN, and BTMC representations side by side, with controls for running code.",
      "At Tern Computers / Opes Associates, I led engineering delivery for TIDAL with a cross-functional team of up to 15 direct reports at peak — coordinating frontend, backend, QA, DevOps, CI/CD, and security work, and managing sprint execution, technical priorities, dependencies, testing, and releases. Working with the founders and executive board, I helped drive architecture decisions — including a monorepo migration, shared authentication, and CI/CD deployment strategy — while weighing technical tradeoffs and allocating resources to ship three website iterations and two major TIDAL releases.",
      "I stayed hands-on throughout, contributing frontend development, production troubleshooting, and deployments, and helped coordinate the integration of the G API and TERN API services into TIDAL's compiler sandbox.",
    ],
    lifecycle: ["Planning", "Development", "QA", "Release", "Validation"],
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Python APIs",
      "Firebase",
      "Docker",
      "GitHub",
      "GitHub Actions",
      "Google Cloud Platform",
      "Cypress",
    ],
    incident: {
      title: "Delivery Note — Production Incident",
      body: "During a release, the production deployment began returning 502 errors. I investigated directly — working through the deployment and build process step by step and tracing the failure to corrupted node_modules introduced during the build. I resolved it through a Next.js version update, verified the fix in production, and afterward used the incident to tighten our release-validation checklist.",
    },
    featured: true,
  },
  {
    slug: "counting-house-bookkeeping",
    title: "Counting House Bookkeeping",
    categories: ["Web Development", "Design & Delivery"],
    summary:
      "A production website for a bookkeeping firm, delivered independently from first conversation to live launch — requirements, design, build, deployment, and domain migration. Evidence that the technical fluency behind the program leadership is still hands-on.",
    scope: [
      "Requirements",
      "Design",
      "Development",
      "Responsive Implementation",
      "Deployment",
      "Domain Migration",
      "Contact Workflow",
      "SEO",
      "Search Console Configuration",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "Formspree"],
    link: { href: "https://www.chouseb.com", label: "Visit chouseb.com" },
  },
];
