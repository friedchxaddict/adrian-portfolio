import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ArrowUpRightIcon, LinkedInIcon } from "@/components/ui/Icons";
import { site } from "@/content/site";

/**
 * Four workstreams (frontend, API, QA, infrastructure) converge into a single
 * release point — a visual metaphor for coordinating parallel efforts into one
 * delivery, rather than a generic flowchart or pipeline zigzag. Each thread has
 * its own color and weight so the diagram reads as a deliberate illustration,
 * not a systems-diagram placeholder.
 */
const THREADS = [
  {
    label: "Frontend",
    d: "M10,30 C140,30 170,100 300,130",
    dot: { x: 143, y: 62.5 },
    color: "#252b2d",
    width: 2,
    opacity: 0.6,
  },
  {
    label: "API & services",
    d: "M10,95 C150,95 180,118 300,130",
    dot: { x: 150, y: 106 },
    color: "#397e80",
    width: 2.25,
    opacity: 0.85,
  },
  {
    label: "QA & release validation",
    d: "M10,165 C150,165 180,142 300,130",
    dot: { x: 150, y: 154 },
    color: "#535d60",
    width: 2.25,
    opacity: 0.7,
  },
  {
    label: "Infrastructure",
    d: "M10,230 C140,230 170,160 300,130",
    dot: { x: 143, y: 197.5 },
    color: "#b8734f",
    width: 2,
    opacity: 0.85,
  },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden texture-dots">
      <Container className="grid items-center gap-14 py-20 sm:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:py-32">
        <div>
          <p className="font-serif text-lg italic text-copper-strong">Technical Program Manager</p>

          <h1 className="mt-3 text-balance font-serif text-5xl font-medium leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-[4.25rem]">
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
              external
            >
              View Résumé
            </ButtonLink>
          </div>

          {/* py-3 gives a 44px tap target; mt-1 / -mb-2 keep the visible text position
              and the hero's overall height identical to the 28px version. */}
          <div className="mt-1 -mb-2 flex items-center">
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Adrian Fontanilla on LinkedIn"
              className="inline-flex items-center gap-2 py-3 text-sm text-ink-muted transition-colors hover:text-accent-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <LinkedInIcon className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="justify-self-center lg:justify-self-end">
          <svg
            viewBox="0 0 320 260"
            width={440}
            height={357}
            className="h-auto w-full max-w-[400px] sm:max-w-[440px]"
            role="img"
            aria-label="Diagram of four workstreams — frontend, API and services, QA and release validation, and infrastructure — converging into a single coordinated release."
          >
            {THREADS.map((thread, i) => (
              <path
                key={thread.label}
                d={thread.d}
                pathLength={1}
                fill="none"
                stroke={thread.color}
                strokeOpacity={thread.opacity}
                strokeWidth={thread.width}
                strokeLinecap="round"
                className="hero-thread"
                style={{ animationDelay: `${i * 160}ms` }}
              >
                <title>{thread.label}</title>
              </path>
            ))}
            {THREADS.map((thread, i) => (
              <circle
                key={`${thread.label}-dot`}
                cx={thread.dot.x}
                cy={thread.dot.y}
                r={4.5}
                fill={thread.color}
                className="hero-thread-node"
                style={{ animationDelay: `${i * 160 + 420}ms` }}
              >
                <title>{thread.label}</title>
              </circle>
            ))}
            <circle
              cx={300}
              cy={130}
              r={20}
              fill="none"
              stroke="var(--color-copper)"
              strokeWidth={1.5}
              className="hero-converge-ring"
            />
            <circle
              cx={300}
              cy={130}
              r={8.5}
              fill="var(--color-ink)"
              stroke="var(--color-paper)"
              strokeWidth={2.5}
              className="hero-converge-point"
            >
              <title>Release</title>
            </circle>
          </svg>
          <p className="mt-5 max-w-[320px] text-center font-mono text-[11px] leading-relaxed text-ink-muted sm:text-right">
            Different workstreams, one coordinated release.
          </p>
        </div>
      </Container>
    </section>
  );
}
