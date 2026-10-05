import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CareerProgression } from "@/components/ui/CareerProgression";
import { Tag } from "@/components/ui/Tag";
import { careerProgression, roles } from "@/content/experience";

export function Experience() {
  return (
    <section id="experience" className="border-t border-line/70 py-20 sm:py-28">
      <Container>
        <SectionHeading
          index="02"
          eyebrow="Experience"
          title="A path from writing code to running delivery"
          description="One company, three stages of growth — from shipping features to running the engineering team's delivery process end to end."
        />

        <div className="mt-12 rounded-2xl border border-line bg-surface p-6 sm:p-8">
          <CareerProgression stages={careerProgression} />
        </div>

        <div className="mt-10 space-y-8">
          {roles.map((role) => (
            <article
              key={role.company}
              className="rounded-2xl border border-line p-7 sm:p-9"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <h3 className="text-xl font-semibold text-ink sm:text-2xl">{role.title}</h3>
                <p className="font-mono text-xs font-medium uppercase tracking-wide text-ink-muted">
                  {role.company}
                </p>
              </div>

              <p className="mt-2 text-sm font-medium text-accent-strong">{role.progressionNote}</p>

              <p className="mt-5 max-w-3xl text-base leading-relaxed text-ink-muted sm:text-lg">
                {role.summary}
              </p>

              <ul className="mt-6 flex flex-wrap gap-2.5" aria-label="Key responsibilities">
                {role.highlights.map((item) => (
                  <li key={item}>
                    <Tag>{item}</Tag>
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
