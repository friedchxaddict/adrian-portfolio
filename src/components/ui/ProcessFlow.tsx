interface ProcessFlowProps {
  steps: string[];
  /** "abstract" renders unlabeled nodes; "labeled" shows step names (e.g. lifecycle diagrams). */
  variant?: "abstract" | "labeled";
  className?: string;
}

/**
 * A restrained, CSS-based node-and-line diagram representing a delivery pipeline.
 * Uses flex layout (not scaled SVG) so nodes stay perfectly circular at any width.
 * Animates once on mount via CSS only (no client JS), respects prefers-reduced-motion.
 */
export function ProcessFlow({ steps, variant = "labeled", className = "" }: ProcessFlowProps) {
  const count = steps.length;

  return (
    <div className={`process-flow ${className}`}>
      <div
        className="relative flex h-3 items-center justify-between sm:h-4"
        role={variant === "labeled" ? "img" : "presentation"}
        aria-label={variant === "labeled" ? `Delivery lifecycle: ${steps.join(" to ")}` : undefined}
        aria-hidden={variant === "abstract" ? "true" : undefined}
      >
        <span
          aria-hidden="true"
          className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-current opacity-25"
        />
        {steps.map((_, i) => (
          <span
            key={i}
            aria-hidden="true"
            className="process-flow-node relative h-2.5 w-2.5 shrink-0 rounded-full bg-accent sm:h-3 sm:w-3"
            style={{ animationDelay: `${i * 120}ms` }}
          />
        ))}
      </div>
      {variant === "labeled" ? (
        <ol
          className="mt-3 grid gap-2 sm:gap-4"
          style={{ gridTemplateColumns: `repeat(${count}, minmax(0, 1fr))` }}
        >
          {steps.map((step, i) => (
            <li
              key={step}
              className="text-center font-mono text-[10px] font-medium uppercase tracking-wide text-ink-muted sm:text-xs"
            >
              <span className="text-accent-strong">{String(i + 1).padStart(2, "0")}</span>
              <br />
              {step}
            </li>
          ))}
        </ol>
      ) : null}
    </div>
  );
}
