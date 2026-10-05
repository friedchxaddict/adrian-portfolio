import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { MobileNav } from "@/components/layout/MobileNav";
import { navLinks, site } from "@/content/site";

export function SiteHeader() {
  return (
    <header
      className="sticky top-0 z-50 border-b border-line/70 bg-paper/90 backdrop-blur-sm print:hidden"
      style={{ height: "var(--header-height)" }}
    >
      <Container className="flex h-full items-center justify-between">
        <Link
          href="#top"
          className="font-mono text-sm font-semibold tracking-tight text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Adrian Fontanilla
        </Link>

        <nav aria-label="Primary" className="hidden sm:block">
          <ul className="flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-ink-muted transition-colors hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 sm:flex">
          <ButtonLink href={site.resumeHref} variant="secondary" className="px-5 py-2 text-xs">
            View Résumé
          </ButtonLink>
        </div>

        <MobileNav links={navLinks} />
      </Container>
    </header>
  );
}
