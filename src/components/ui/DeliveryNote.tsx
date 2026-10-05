interface DeliveryNoteProps {
  title: string;
  children: React.ReactNode;
}

export function DeliveryNote({ title, children }: DeliveryNoteProps) {
  return (
    <aside aria-label={title} className="border-l-2 border-accent pl-5">
      <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-accent-strong">
        {title}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">{children}</p>
    </aside>
  );
}
