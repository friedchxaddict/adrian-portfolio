interface TagProps {
  children: React.ReactNode;
  variant?: "default" | "accent";
}

export function Tag({ children, variant = "default" }: TagProps) {
  const styles =
    variant === "accent"
      ? "border-accent/30 bg-accent/[0.07] text-accent-strong"
      : "border-line bg-surface text-ink-muted";

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-wide ${styles}`}
    >
      {children}
    </span>
  );
}
