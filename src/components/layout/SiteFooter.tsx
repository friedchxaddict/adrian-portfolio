import { Container } from "@/components/ui/Container";
import { LinkedInIcon, MailIcon } from "@/components/ui/Icons";
import { site } from "@/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line/70 print:hidden">
      <Container className="flex flex-col items-center gap-6 py-10 sm:flex-row sm:justify-between">
        <p className="font-mono text-xs text-ink-muted">
          © {year} {site.name}. Built with Next.js &amp; Tailwind CSS.
        </p>

        <div className="flex items-center gap-4">
          <a
            href={`mailto:${site.email}`}
            aria-label="Email Adrian Fontanilla"
            className="text-ink-muted transition-colors hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <MailIcon className="h-5 w-5" />
          </a>
          <a
            href={site.social.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Adrian Fontanilla on LinkedIn"
            className="text-ink-muted transition-colors hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <LinkedInIcon className="h-5 w-5" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
