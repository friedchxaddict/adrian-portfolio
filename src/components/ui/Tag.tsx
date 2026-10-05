interface TagProps {
  children: React.ReactNode;
  variant?: "default" | "accent";
}

export function Tag({ children, variant = "default" }: TagProps) {
  const styles =
    variant === "accent"
      ? "bg-accent/[0.12] text-accent-strong"
      : "bg-ink/[0.06] text-ink-muted";

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 font-mono text-[11px] font-medium tracking-wide ${styles}`}
    >
      {children}
    </span>
  );
}
