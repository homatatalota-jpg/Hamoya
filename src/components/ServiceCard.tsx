import Link from "next/link";

export function ServiceCard({
  title,
  summary,
  href,
}: {
  title: string;
  summary: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col justify-between rounded-2xl border border-[var(--border)] bg-[color-mix(in_srgb,var(--surface),transparent_35%)] p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[color-mix(in_srgb,var(--accent),var(--border)_60%)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
    >
      <div>
        <div className="text-sm font-semibold tracking-tight text-[var(--text)]">
          {title}
        </div>
        <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{summary}</p>
      </div>
      <div className="mt-6 text-sm font-medium text-[var(--text)]">
        <span className="inline-flex items-center gap-2">
          Explore
          <span className="transition-transform duration-200 group-hover:translate-x-0.5">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
