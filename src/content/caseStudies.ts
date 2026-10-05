export interface IncidentNote {
  title: string;
  body: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  categories: string[];
  summary: string;
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
    summary:
      "At TERN, I managed the development and delivery of our TIDAL platform, coordinating frontend, backend API, QA, and cloud deployment work across a cross-functional engineering team. The complexity came from managing dependencies across multiple applications and APIs, balancing shifting priorities within two-week sprints, and keeping development, testing, and releases aligned while working with a lean startup team.",
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
      "Selenium",
      "Cypress",
    ],
    incident: {
      title: "Delivery Note — Production Incident",
      body: "During a release, the production deployment began returning 502 errors. I coordinated the incident response with engineering — working through the deployment pipeline step by step to help isolate the cause, which was eventually traced to corrupted node_modules introduced during the build process. I helped guide the team's troubleshooting, tracked the fix (resolved through a Next.js version update) through to validation, and used the incident afterward to tighten our release-validation checklist.",
    },
    featured: true,
  },
  {
    slug: "counting-house-bookkeeping",
    title: "Counting House Bookkeeping",
    categories: ["Web Development", "Design & Delivery"],
    summary:
      "An end-to-end client website project, handled independently from first conversation to live launch — evidence that the technical fluency behind the program leadership is still hands-on today.",
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
