import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { toolkit } from "@/content/toolkit";

export function TechnicalToolkit() {
  return (
    <section id="toolkit" className="border-t border-line/70 py-20 sm:py-28">
      <Container>
        <SectionHeading
          index="04"
          eyebrow="Technical Toolkit"
          title="Fluent across program delivery and the stack underneath it"
          description="Organized by how the work actually breaks down — not a logo wall."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {toolkit.map((group) => (
            <div key={group.category} className="rounded-2xl border border-line p-6 sm:p-7">
              <h3 className="text-base font-semibold text-ink">{group.category}</h3>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${group.category} skills`}>
                {group.skills.map((skill) => (
                  <li key={skill}>
                    <Tag variant={group.category === "AI" ? "accent" : "default"}>{skill}</Tag>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
