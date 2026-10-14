import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { capabilities } from "@/content/capabilities";

export function TechnicalToolkit() {
  return (
    <section id="toolkit" className="bg-paper-deep py-20 sm:py-28">
      <Container>
        <SectionHeading
          index="04"
          eyebrow="Capabilities & Delivery"
          title="Technical fluency across delivery and development"
          description="Organized by how the work actually breaks down — what was coordinated, what was built, and what came out of it."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability) => (
            <article
              key={capability.title}
              className="flex flex-col rounded-3xl bg-surface p-6 shadow-[0_1px_2px_rgba(37,43,45,0.04),0_12px_28px_-18px_rgba(37,43,45,0.25)] sm:p-7"
            >
              <h3 className="font-serif text-lg font-medium text-ink">{capability.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-ink-muted sm:text-[0.9375rem]">
                {capability.description}
              </p>

              <ul className="mt-5 space-y-3" aria-label={`${capability.title} examples`}>
                {capability.examples.map((example) => (
                  <li
                    key={example}
                    className="flex items-baseline gap-2.5 text-sm leading-relaxed text-ink sm:text-[0.9375rem]"
                  >
                    <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {example}
                  </li>
                ))}
              </ul>

              {capability.tools ? (
                <div className="mt-auto pt-5">
                  <ul
                    className="flex flex-wrap gap-2 border-t border-line pt-4"
                    aria-label={`${capability.title} tools`}
                  >
                    {capability.tools.map((tool) => (
                      <li key={tool}>
                        <Tag>{tool}</Tag>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
