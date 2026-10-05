interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <div
        className={`flex items-center gap-3 font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span aria-hidden="true">{index}</span>
        <span className="h-px w-6 bg-accent/40" aria-hidden="true" />
        <span>{eyebrow}</span>
      </div>
      <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
