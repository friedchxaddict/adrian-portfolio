type IconProps = React.SVGProps<SVGSVGElement>;

export function LinkedInIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.15 1.45-2.15 2.94v5.66H9.33V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.28 2.37 4.28 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

export function GitHubIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.48 2 2 6.58 2 12.21c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.49 0-.24-.01-1.03-.01-1.87-2.78.52-3.5-.69-3.72-1.33-.13-.33-.68-1.33-1.16-1.6-.4-.22-.97-.75-.01-.77.9-.01 1.54.84 1.76 1.19 1.03 1.75 2.67 1.26 3.33.96.1-.75.4-1.26.73-1.55-2.56-.29-5.23-1.3-5.23-5.76 0-1.27.44-2.32 1.17-3.14-.12-.3-.52-1.5.11-3.12 0 0 .95-.31 3.12 1.2a10.6 10.6 0 0 1 5.68 0c2.17-1.51 3.12-1.2 3.12-1.2.63 1.62.23 2.82.11 3.12.73.82 1.17 1.86 1.17 3.14 0 4.47-2.68 5.47-5.24 5.76.42.37.78 1.08.78 2.19 0 1.58-.01 2.85-.01 3.25 0 .27.18.6.68.49A10.02 10.02 0 0 0 22 12.21C22 6.58 17.52 2 12 2z"
      />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      aria-hidden="true"
      {...props}
    >
      <rect x="3" y="5" width="18" height="14" rx="2.2" />
      <path d="m4 7 7.4 5.6a1 1 0 0 0 1.2 0L20 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      aria-hidden="true"
      {...props}
    >
      <path d="M7 17 17 7" strokeLinecap="round" />
      <path d="M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function DownloadIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      aria-hidden="true"
      {...props}
    >
      <path d="M12 4v11" strokeLinecap="round" />
      <path d="m7 11 5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 20h14" strokeLinecap="round" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      aria-hidden="true"
      {...props}
    >
      <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      aria-hidden="true"
      {...props}
    >
      <path d="M5 5l14 14M19 5 5 19" strokeLinecap="round" />
    </svg>
  );
}
