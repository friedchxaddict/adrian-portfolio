import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ArrowUpRightIcon, GitHubIcon, LinkedInIcon } from "@/components/ui/Icons";
import { site } from "@/content/site";

const PIPELINE_NODES = [
  { x: 40, y: 170, r: 7 },
  { x: 140, y: 90, r: 5 },
  { x: 230, y: 150, r: 9 },
  { x: 320, y: 60, r: 5 },
  { x: 410, y: 120, r: 7 },
  { x: 480, y: 50, r: 5 },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <Container className="grid items-center gap-12 py-20 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:py-32">
        <div>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
            Technical Program Manager
          </p>

          <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Adrian Fontanilla
          </h1>

          <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-ink-muted sm:text-xl">
            {site.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <ButtonLink href="#work" variant="primary">
              View My Work
            </ButtonLink>
            <ButtonLink
              href={site.resumeHref}
              variant="secondary"
              icon={<ArrowUpRightIcon className="h-4 w-4" />}
            >
              View Résumé
            </ButtonLink>
          </div>

          <div className="mt-10 flex items-center gap-5">
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Adrian Fontanilla on LinkedIn"
              className="flex items-center gap-2 text-sm text-ink-muted transition-colors hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <LinkedInIcon className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href={site.social.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Adrian Fontanilla on GitHub"
              className="flex items-center gap-2 text-sm text-ink-muted transition-colors hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <GitHubIcon className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </div>

        <div aria-hidden="true" className="hidden justify-self-end lg:block">
          <svg
            viewBox="0 0 520 220"
            width={480}
            height={200}
            className="text-accent"
          >
            {PIPELINE_NODES.slice(0, -1).map((node, i) => {
              const next = PIPELINE_NODES[i + 1];
              return (
                <line
                  key={`line-${i}`}
                  x1={node.x}
                  y1={node.y}
                  x2={next.x}
                  y2={next.y}
                  pathLength={1}
                  stroke="currentColor"
                  strokeOpacity={0.35}
                  strokeWidth={1.5}
                  className="hero-pipeline-line"
                  style={{ animationDelay: `${i * 140}ms` }}
                />
              );
            })}
            {PIPELINE_NODES.map((node, i) => (
              <circle
                key={`node-${i}`}
                cx={node.x}
                cy={node.y}
                r={node.r}
                fill={i === PIPELINE_NODES.length - 1 ? "currentColor" : "none"}
                stroke="currentColor"
                strokeWidth={1.5}
                className="hero-pipeline-node"
                style={{ animationDelay: `${i * 140 + 80}ms` }}
              />
            ))}
          </svg>
          <p className="mt-4 max-w-[260px] text-right font-mono text-[11px] leading-relaxed text-ink-muted">
            Program delivery, visualized — plan, build, and ship, kept aligned end to end.
          </p>
        </div>
      </Container>
    </section>
  );
}
