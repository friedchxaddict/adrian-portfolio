interface CareerProgressionProps {
  stages: readonly string[];
}

export function CareerProgression({ stages }: CareerProgressionProps) {
  return (
    <ol className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-0">
      {stages.map((stage, i) => (
        <li key={stage} className="flex items-center gap-3 sm:flex-1">
          <div className="flex items-center gap-3 sm:flex-col sm:items-start sm:gap-2">
            <span
              aria-hidden="true"
              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border font-mono text-[11px] font-semibold sm:h-8 sm:w-8 ${
                i === stages.length - 1
                  ? "border-accent bg-accent text-paper"
                  : "border-line text-ink-muted"
              }`}
            >
              {i + 1}
            </span>
            <span
              className={`text-sm font-medium sm:text-base ${
                i === stages.length - 1
                  ? "font-serif text-lg italic text-ink"
                  : "text-ink-muted"
              }`}
            >
              {stage}
            </span>
          </div>
          {i < stages.length - 1 ? (
            <span
              aria-hidden="true"
              className="hidden h-px flex-1 bg-line sm:mx-4 sm:block"
            />
          ) : null}
        </li>
      ))}
    </ol>
  );
}
