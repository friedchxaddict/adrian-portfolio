import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CaseStudyCard } from "@/components/sections/CaseStudyCard";
import { caseStudies } from "@/content/caseStudies";

export function FeaturedWork() {
  return (
    <section id="work" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          index="03"
          eyebrow="Featured Work"
          title="Delivery in practice"
          description="Two different kinds of proof: leading delivery for a cross-functional engineering team, and staying hands-on by shipping a project solo, end to end."
        />

        <div className="mt-12 space-y-8">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
      </Container>
    </section>
  );
}
