/**
 * Central site configuration.
 *
 * Nothing here is a fabricated fact — every value is confirmed by Adrian.
 */

export const site = {
  name: "Adrian Fontanilla",
  title: "Technical Program Manager",
  location: "Chicago, IL",
  tagline:
    "Bringing a software development background to technical program leadership, engineering delivery, and cross-functional execution.",
  description:
    "Adrian Fontanilla is a Technical Program Manager with a background in software development and startup technical leadership — focused on engineering delivery, cross-functional execution, and helping teams ship.",
  url: "https://adrianfontanilla.vercel.app",
  email: "adrianfontanilla@gmail.com",
  social: {
    linkedin: "https://www.linkedin.com/in/adrian-f-8a722022a",
  },
  // Real résumé PDF, served from /public/resume. The auto-generated /resume
  // page remains live as a secondary, unlinked fallback.
  resumeHref: "/resume/Adrian-Fontanilla-Resume-TPM.pdf",
} as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Featured Work", href: "#work" },
  { label: "Toolkit", href: "#toolkit" },
  { label: "Contact", href: "#contact" },
] as const;
