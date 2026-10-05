interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
}: SectionHeadingProps) {
  const isDark = tone === "dark";

  return (
    <div
      className={`relative ${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}
    >
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute -top-10 select-none font-serif text-[7rem] font-medium leading-none sm:text-[9rem] ${
          align === "center" ? "left-1/2 -translate-x-1/2" : "-left-1 sm:-left-2"
        } ${isDark ? "text-paper/[0.06]" : "text-ink/[0.05]"}`}
      >
        {index}
      </span>

      <p
        className={`relative font-serif text-lg italic ${
          isDark ? "text-ink-accent" : "text-accent-strong"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`relative mt-2 text-balance font-serif text-3xl font-medium tracking-tight sm:text-4xl ${
          isDark ? "text-ink-paper" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`relative mt-4 text-base leading-relaxed sm:text-lg ${
            isDark ? "text-ink-muted-paper" : "text-ink-muted"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
