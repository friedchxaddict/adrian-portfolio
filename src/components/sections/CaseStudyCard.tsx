import { Tag } from "@/components/ui/Tag";
import { ProcessFlow } from "@/components/ui/ProcessFlow";
import { DeliveryNote } from "@/components/ui/DeliveryNote";
import { ArrowUpRightIcon } from "@/components/ui/Icons";
import type { CaseStudy } from "@/content/caseStudies";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <article
      className={`rounded-2xl border border-line p-7 sm:p-10 ${
        study.featured ? "bg-ink text-paper" : "bg-paper"
      }`}
    >
      <div className="flex flex-wrap items-center gap-2.5">
        {study.categories.map((category) => (
          <span
            key={category}
            className={`inline-flex items-center rounded-full border px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-wide ${
              study.featured
                ? "border-paper/25 text-paper/80"
                : "border-line bg-surface text-ink-muted"
            }`}
          >
            {category}
          </span>
        ))}
      </div>

      <h3
        className={`mt-5 text-2xl font-semibold tracking-tight sm:text-3xl ${
          study.featured ? "text-paper" : "text-ink"
        }`}
      >
        {study.title}
      </h3>

      <p
        className={`mt-4 max-w-3xl text-base leading-relaxed sm:text-lg ${
          study.featured ? "text-paper/75" : "text-ink-muted"
        }`}
      >
        {study.summary}
      </p>

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
        <div className="mt-9">
          <p
            className={`font-mono text-[11px] font-medium uppercase tracking-wide ${
              study.featured ? "text-paper/60" : "text-ink-muted"
            }`}
          >
            Delivery lifecycle
          </p>
          <div className={study.featured ? "mt-3 text-paper/70" : "mt-3 text-ink-muted"}>
            <ProcessFlow steps={study.lifecycle} variant="labeled" />
          </div>
        </div>
      ) : null}

      {study.scope ? (
        <ul className="mt-8 flex flex-wrap gap-2.5" aria-label="Project scope">
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
            study.featured ? "text-paper/60" : "text-ink-muted"
          }`}
        >
          Technical environment
        </p>
        <ul className="mt-3 flex flex-wrap gap-2.5" aria-label="Technical environment">
          {study.stack.map((tech) => (
            <li key={tech}>
              <span
                className={`inline-flex items-center rounded-full border px-3 py-1 font-mono text-[11px] font-medium ${
                  study.featured
                    ? "border-paper/25 text-paper/80"
                    : "border-line bg-surface text-ink-muted"
                }`}
              >
                {tech}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {study.incident ? (
        <div className="mt-8">
          {study.featured ? (
            <aside
              aria-label={study.incident.title}
              className="rounded-2xl border border-paper/20 bg-paper/5 p-6 sm:p-7"
            >
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-paper/80">
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
