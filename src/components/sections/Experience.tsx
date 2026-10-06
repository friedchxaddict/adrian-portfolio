import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CareerProgression } from "@/components/ui/CareerProgression";
import { careerProgression, roles } from "@/content/experience";

export function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          index="02"
          eyebrow="Experience"
          title="A path from writing code to running delivery"
          description="One company, three stages of growth — from software development to leading the engineering team's delivery process end to end."
        />

        <div className="mt-14">
          <CareerProgression stages={careerProgression} />
        </div>

        <div className="mt-14 space-y-8">
          {roles.map((role) => (
            <article
              key={role.company}
              className="rounded-3xl bg-surface p-7 shadow-[0_1px_2px_rgba(26,21,18,0.04),0_12px_28px_-18px_rgba(26,21,18,0.25)] sm:p-10"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <h3 className="font-serif text-2xl font-medium text-ink sm:text-3xl">
                  {role.title}
                </h3>
                <p className="font-mono text-xs font-medium uppercase tracking-wide text-ink-muted">
                  {role.company} &middot; {role.dates}
                </p>
              </div>

              <p className="mt-2 font-serif text-base text-accent-strong">
                {role.progressionNote}
              </p>

              <p className="mt-5 max-w-3xl text-base leading-relaxed text-ink-muted sm:text-lg">
                {role.summary}
              </p>

              <ul
                className="mt-7 grid gap-x-8 gap-y-3 border-t border-line pt-6 sm:grid-cols-2"
                aria-label="Key responsibilities"
              >
                {role.highlights.map((item) => (
                  <li key={item} className="flex items-baseline gap-3 text-sm text-ink sm:text-base">
                    <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
