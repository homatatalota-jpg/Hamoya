import { Badge } from "@/components/Badge";

export function ProjectCard({
  title,
  summary,
  year,
  categoryLabel,
}: {
  title: string;
  summary: string;
  year: string;
  categoryLabel: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[color-mix(in_srgb,var(--surface),transparent_35%)] p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[color-mix(in_srgb,var(--accent),var(--border)_60%)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
      <div className="flex items-center justify-between gap-3">
        <Badge>{categoryLabel}</Badge>
        <div className="text-xs font-medium text-[var(--muted)]">{year}</div>
      </div>
      <div className="mt-4 text-base font-semibold tracking-tight text-[var(--text)]">
        {title}
      </div>
      <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{summary}</p>
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-[color-mix(in_srgb,var(--accent),transparent_70%)] blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-[color-mix(in_srgb,var(--accent2),transparent_75%)] blur-3xl" />
      </div>
    </div>
  );
}
