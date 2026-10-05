/**
 * Central site configuration.
 *
 * IMPORTANT: Fields marked "TODO" are placeholders — nothing here is a fabricated
 * fact. Replace each TODO with the real value before going live.
 */

export const site = {
  name: "Adrian Fontanilla",
  title: "Technical Program Manager",
  tagline:
    "Bringing a software development background to technical program leadership, engineering delivery, and cross-functional execution.",
  description:
    "Adrian Fontanilla is a Technical Program Manager with a background in software development and startup technical leadership — focused on engineering delivery, cross-functional execution, and helping teams ship.",
  // TODO: replace with the real production domain once deployed.
  url: "https://adrianfontanilla.com",
  // TODO: replace with Adrian's real contact email.
  email: "hello@adrianfontanilla.com",
  social: {
    // TODO: replace with Adrian's real LinkedIn URL.
    linkedin: "https://www.linkedin.com/in/adrianfontanilla",
    // TODO: replace with Adrian's real GitHub URL.
    github: "https://github.com/adrianfontanilla",
  },
  resumeHref: "/resume",
} as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Featured Work", href: "#work" },
  { label: "Toolkit", href: "#toolkit" },
  { label: "Contact", href: "#contact" },
] as const;
