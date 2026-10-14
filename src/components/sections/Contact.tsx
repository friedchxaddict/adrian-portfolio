import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ArrowUpRightIcon, LinkedInIcon } from "@/components/ui/Icons";
import { site } from "@/content/site";

export function Contact() {
  return (
    <section id="contact" className="bg-slate texture-dots-dark py-20 text-ink-paper sm:py-28">
      <Container className="flex flex-col items-center text-center">
        <SectionHeading
          index="05"
          eyebrow="Contact"
          title="Looking for the next team to help lead delivery"
          description="Open to Technical Program Management, Engineering Management, Technical Project Management, and related technical leadership opportunities."
          align="center"
          tone="dark"
        />

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <ButtonLink href={`mailto:${site.email}`} variant="primaryOnDark">
            Email Adrian
          </ButtonLink>
          <ButtonLink
            href={site.resumeHref}
            variant="secondaryOnDark"
            icon={<ArrowUpRightIcon className="h-4 w-4" />}
            external
          >
            View Résumé
          </ButtonLink>
        </div>

        <div className="mt-10 flex items-center gap-6">
          <a
            href={site.social.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-2 text-sm text-ink-muted-paper transition-colors hover:text-ink-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <LinkedInIcon className="h-4 w-4" />
            LinkedIn
          </a>
        </div>
      </Container>
    </section>
  );
}
