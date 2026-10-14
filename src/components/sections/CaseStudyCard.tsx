import { Tag } from "@/components/ui/Tag";
import { ProcessFlow } from "@/components/ui/ProcessFlow";
import { DeliveryNote } from "@/components/ui/DeliveryNote";
import { ArrowUpRightIcon } from "@/components/ui/Icons";
import type { CaseStudy } from "@/content/caseStudies";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <article
      className={`rounded-3xl p-7 shadow-[0_1px_2px_rgba(37,43,45,0.04),0_16px_32px_-20px_rgba(37,43,45,0.3)] sm:p-10 ${
        study.featured ? "bg-slate text-paper" : "bg-surface"
      }`}
    >
      <p
        className={`font-mono text-[11px] font-medium uppercase tracking-[0.12em] ${
          study.featured ? "text-copper-light" : "text-copper-strong"
        }`}
      >
        {study.categories.join("  ·  ")}
      </p>

      <h3
        className={`mt-4 font-serif text-3xl font-medium tracking-tight sm:text-4xl ${
          study.featured ? "text-paper" : "text-ink"
        }`}
      >
        {study.title}
      </h3>

      <div
        className={`mt-4 max-w-3xl space-y-4 text-base leading-relaxed sm:text-lg ${
          study.featured ? "text-paper/75" : "text-ink-muted"
        }`}
      >
        {(Array.isArray(study.summary) ? study.summary : [study.summary]).map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      {study.link ? (
        <a
          href={study.link.href}
          target="_blank"
          rel="noreferrer noopener"
          className={`mt-5 inline-flex items-center gap-1.5 text-sm font-semibold underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
            study.featured ? "text-paper" : "text-accent-strong"
          }`}
        >
          {study.link.label}
          <ArrowUpRightIcon className="h-4 w-4" />
        </a>
      ) : null}

      {study.lifecycle ? (
        <div className="mt-10">
          <p
            className={`font-mono text-[11px] font-medium uppercase tracking-wide ${
              study.featured ? "text-copper-light" : "text-copper-strong"
            }`}
          >
            Delivery lifecycle
          </p>
          <div className={study.featured ? "mt-3 text-paper/70" : "mt-3 text-ink-muted"}>
            <ProcessFlow
              steps={study.lifecycle}
              variant="labeled"
              tone={study.featured ? "dark" : "light"}
            />
          </div>
        </div>
      ) : null}

      {study.scope ? (
        <ul className="mt-8 flex flex-wrap gap-2" aria-label="Project scope">
          {study.scope.map((item) => (
            <li key={item}>
              <Tag>{item}</Tag>
            </li>
          ))}
        </ul>
      ) : null}

      <div className="mt-8">
        <p
          className={`font-mono text-[11px] font-medium uppercase tracking-wide ${
            study.featured ? "text-copper-light" : "text-copper-strong"
          }`}
        >
          Technical environment
        </p>
        <ul className="mt-3 flex flex-wrap gap-2" aria-label="Technical environment">
          {study.stack.map((tech) => (
            <li key={tech}>
              <span
                className={`inline-flex items-center rounded-full px-3 py-1 font-mono text-[11px] font-medium ${
                  study.featured ? "bg-paper/10 text-paper/80" : "bg-ink/[0.06] text-ink-muted"
                }`}
              >
                {tech}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {study.incident ? (
        <div className="mt-9">
          {study.featured ? (
            <aside
              aria-label={study.incident.title}
              className="border-l-2 border-copper pl-5"
            >
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-accent">
                {study.incident.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-paper/75 sm:text-base">
                {study.incident.body}
              </p>
            </aside>
          ) : (
            <DeliveryNote title={study.incident.title}>{study.incident.body}</DeliveryNote>
          )}
        </div>
      ) : null}
    </article>
  );
}
