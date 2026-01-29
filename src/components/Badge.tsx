import { type ReactNode } from "react";

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[var(--border)] bg-[color-mix(in_srgb,var(--surface),transparent_45%)] px-3 py-1 text-xs font-medium text-[var(--muted)]">
      {children}
    </span>
  );
}
