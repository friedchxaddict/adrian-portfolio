"use client";

import { DownloadIcon } from "@/components/ui/Icons";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="print:hidden inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-ink/85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <DownloadIcon className="h-4 w-4" />
      Save as PDF
    </button>
  );
}
