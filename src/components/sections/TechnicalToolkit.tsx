import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { toolkit } from "@/content/toolkit";

export function TechnicalToolkit() {
  return (
    <section id="toolkit" className="bg-paper-deep py-20 sm:py-28">
      <Container>
        <SectionHeading
          index="04"
          eyebrow="Technical Toolkit"
          title="Technical fluency across delivery and development"
          description="Organized by how the work actually breaks down — not a logo wall."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {toolkit.map((group) => (
            <div
              key={group.category}
              className="rounded-3xl bg-paper p-6 shadow-[0_1px_2px_rgba(26,21,18,0.04),0_12px_28px_-18px_rgba(26,21,18,0.25)] sm:p-7"
            >
              <h3 className="font-serif text-lg font-medium text-ink">{group.category}</h3>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${group.category} skills`}>
                {group.skills.map((skill) => (
                  <li key={skill}>
                    <Tag variant={group.category === "AI" ? "accent" : "default"}>{skill}</Tag>
                  </li>
                ))}
              </ul>
              {group.note ? (
                <p className="mt-4 text-sm leading-relaxed text-ink-muted">{group.note}</p>
              ) : null}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
