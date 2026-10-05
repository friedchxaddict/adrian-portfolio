import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  icon?: ReactNode;
  external?: boolean;
  className?: string;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const variants: Record<string, string> = {
  primary: "bg-ink text-paper hover:bg-ink/85",
  secondary: "border border-line text-ink hover:border-ink/40 hover:bg-surface",
  ghost: "text-ink-muted hover:text-ink",
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

  if (external || href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={classes}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer noopener" : undefined}
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
