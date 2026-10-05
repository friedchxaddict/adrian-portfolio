import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutHighlights, aboutParagraphs } from "@/content/about";

export function About() {
  return (
    <section id="about" className="border-t border-line/70 py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <div>
          <SectionHeading index="01" eyebrow="About" title="From the floor to the executive board" />

          <div className="mt-8 space-y-5 text-base leading-relaxed text-ink-muted sm:text-lg">
            {aboutParagraphs.map((paragraph, i) => (
              <p key={i} className={i === 0 ? "text-ink" : undefined}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="lg:pt-2">
          <dl className="space-y-6 rounded-2xl border border-line bg-surface p-7">
            {aboutHighlights.map((item) => (
              <div key={item.label} className="border-b border-line pb-5 last:border-0 last:pb-0">
                <dt className="font-mono text-[11px] font-medium uppercase tracking-wide text-ink-muted">
                  {item.label}
                </dt>
                <dd className="mt-1.5 text-lg font-semibold text-ink">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
