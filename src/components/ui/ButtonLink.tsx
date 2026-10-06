import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "primaryOnDark" | "secondaryOnDark";
  icon?: ReactNode;
  external?: boolean;
  className?: string;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const variants: Record<string, string> = {
  primary: "bg-ink text-paper hover:bg-accent-strong",
  secondary:
    "text-ink underline decoration-accent/60 decoration-2 underline-offset-[6px] hover:text-accent-strong hover:decoration-accent-strong",
  ghost: "text-ink-muted hover:text-ink",
  primaryOnDark: "bg-paper text-ink hover:bg-ink-accent",
  secondaryOnDark:
    "text-ink-paper underline decoration-ink-accent/70 decoration-2 underline-offset-[6px] hover:text-ink-accent hover:decoration-ink-accent",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  icon,
  external = false,
  className = "",
}: ButtonLinkProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  const isExternal = external || href.startsWith("http") || href.startsWith("mailto:");

  if (isExternal) {
    const opensNewTab = external || href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        target={opensNewTab ? "_blank" : undefined}
        rel={opensNewTab ? "noreferrer noopener" : undefined}
      >
        {children}
        {icon}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
      {icon}
    </Link>
  );
}
