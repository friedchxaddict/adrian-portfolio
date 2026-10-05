import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ArrowUpRightIcon, GitHubIcon, LinkedInIcon } from "@/components/ui/Icons";
import { site } from "@/content/site";

export function Contact() {
  return (
    <section id="contact" className="border-t border-line/70 py-20 sm:py-28">
      <Container className="flex flex-col items-center text-center">
        <SectionHeading
          index="05"
          eyebrow="Contact"
          title="Let's talk about your team's next delivery challenge"
          description="Open to Technical Program Manager, Technical Project Manager, Program Manager, and Technical Product / Product Operations roles."
          align="center"
        />

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <ButtonLink href={`mailto:${site.email}`} variant="primary">
            Email Adrian
          </ButtonLink>
          <ButtonLink
            href={site.resumeHref}
            variant="secondary"
            icon={<ArrowUpRightIcon className="h-4 w-4" />}
          >
            View Résumé
          </ButtonLink>
        </div>

        <div className="mt-10 flex items-center gap-6">
          <a
            href={site.social.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-2 text-sm text-ink-muted transition-colors hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <LinkedInIcon className="h-4 w-4" />
            LinkedIn
          </a>
          <a
            href={site.social.github}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-2 text-sm text-ink-muted transition-colors hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <GitHubIcon className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </Container>
    </section>
  );
}
