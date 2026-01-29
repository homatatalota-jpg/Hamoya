import { type ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  right,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  right?: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-2xl">
        {eyebrow ? (
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
            {eyebrow}
          </div>
        ) : null}
        <h2 className="mt-2 text-balance text-2xl font-semibold tracking-tight text-[var(--text)] sm:text-3xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-3 text-pretty text-base leading-7 text-[var(--muted)]">
            {description}
          </p>
        ) : null}
      </div>
      {right ? <div className="shrink-0">{right}</div> : null}
    </div>
  );
}
