import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutHighlights, aboutParagraphs } from "@/content/about";

export function About() {
  return (
    <section id="about" className="bg-slate py-20 text-ink-paper sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <div>
          <SectionHeading
            index="01"
            eyebrow="About"
            title="From the floor to the executive board"
            tone="dark"
          />

          <div className="mt-8 space-y-5 text-base leading-relaxed text-ink-muted-paper sm:text-lg">
            {aboutParagraphs.map((paragraph, i) => (
              <p key={i} className={i === 0 ? "text-ink-paper" : undefined}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="lg:pt-2">
          <dl className="space-y-6 border-l border-ink-paper/15 pl-6">
            {aboutHighlights.map((item) => (
              <div key={item.label}>
                <dt className="font-mono text-[11px] font-medium uppercase tracking-wide text-copper-light">
                  {item.label}
                </dt>
                <dd className="mt-1.5 font-serif text-xl font-medium text-ink-paper">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
