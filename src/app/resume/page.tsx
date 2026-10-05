import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PrintButton } from "@/components/ui/PrintButton";
import { site } from "@/content/site";
import { aboutParagraphs } from "@/content/about";
import { roles } from "@/content/experience";
import { toolkit } from "@/content/toolkit";

export const metadata: Metadata = {
  title: "Résumé",
  description: `Résumé summary for ${site.name}, ${site.title}.`,
  alternates: { canonical: "/resume" },
};

export default function ResumePage() {
  return (
    <article className="py-14 sm:py-20">
      <Container className="max-w-3xl">
        <div className="flex flex-col items-start gap-6 border-b border-line pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              {site.name}
            </h1>
            <p className="mt-2 font-mono text-sm font-medium uppercase tracking-wide text-accent-strong">
              {site.title}
            </p>
            <p className="mt-3 text-sm text-ink-muted">
              {site.email} &middot;{" "}
              <a href={site.social.linkedin} className="underline-offset-4 hover:underline">
                LinkedIn
              </a>{" "}
              &middot;{" "}
              <a href={site.social.github} className="underline-offset-4 hover:underline">
                GitHub
              </a>
            </p>
          </div>
          <PrintButton />
        </div>

        <section className="mt-10" aria-labelledby="resume-summary">
          <h2
            id="resume-summary"
            className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted"
          >
            Summary
          </h2>
          <p className="mt-3 text-base leading-relaxed text-ink sm:text-lg">{site.tagline}</p>
          <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">
            {aboutParagraphs[aboutParagraphs.length - 1]}
          </p>
        </section>

        <section className="mt-10" aria-labelledby="resume-experience">
          <h2
            id="resume-experience"
            className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted"
          >
            Experience
          </h2>
          <div className="mt-4 space-y-8">
            {roles.map((role) => (
              <div key={role.company}>
                <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                  <h3 className="text-lg font-semibold text-ink">{role.title}</h3>
                  <p className="text-sm font-medium text-ink-muted">{role.company}</p>
                </div>
                <p className="mt-1 text-sm font-medium text-accent-strong">
                  {role.progressionNote}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted sm:text-base">
                  {role.summary}
                </p>
                <ul className="mt-3 grid list-disc gap-1 pl-5 text-sm text-ink-muted sm:grid-cols-2 sm:text-base">
                  {role.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 pb-10" aria-labelledby="resume-toolkit">
          <h2
            id="resume-toolkit"
            className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted"
          >
            Technical Toolkit
          </h2>
          <div className="mt-4 space-y-4">
            {toolkit.map((group) => (
              <p key={group.category} className="text-sm leading-relaxed text-ink-muted sm:text-base">
                <span className="font-semibold text-ink">{group.category}:</span>{" "}
                {group.skills.join(", ")}
              </p>
            ))}
          </div>
        </section>

        <p className="mt-6 border-t border-line pt-6 font-mono text-[11px] text-ink-muted print:hidden">
          Prefer a traditional PDF? This page is built to print cleanly — use &ldquo;Save as
          PDF&rdquo; above, or swap this route for an uploaded résumé file whenever one is ready.
        </p>
      </Container>
    </article>
  );
}
