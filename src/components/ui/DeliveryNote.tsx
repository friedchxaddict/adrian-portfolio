interface DeliveryNoteProps {
  title: string;
  children: React.ReactNode;
}

export function DeliveryNote({ title, children }: DeliveryNoteProps) {
  return (
    <aside
      aria-label={title}
      className="rounded-2xl border border-line bg-surface p-6 sm:p-7"
    >
      <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-accent-strong">
        {title}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">{children}</p>
    </aside>
  );
}
