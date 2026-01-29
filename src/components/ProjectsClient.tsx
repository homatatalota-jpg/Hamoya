"use client";

import { useMemo, useState } from "react";

import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { serviceCategories } from "@/lib/services";
import { type ProjectItem } from "@/lib/projects";

export function ProjectsClient({ projects }: { projects: ProjectItem[] }) {
  const [category, setCategory] = useState<string>("all");
  const [service, setService] = useState<string>("all");

  const selectedCategory = useMemo(() => {
    if (category === "all") return undefined;
    return serviceCategories.find((c) => c.slug === category);
  }, [category]);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const categoryOk = category === "all" ? true : p.categorySlug === category;
      const serviceOk =
        service === "all" ? true : p.serviceSlugs.some((s) => s === service);
      return categoryOk && serviceOk;
    });
  }, [projects, category, service]);

  return (
    <div className="space-y-10">
      <SectionHeading
        eyebrow="Work"
        title="Projects"
        description="Browse curated examples and filter by service category."
      />

      <div className="grid gap-4 rounded-2xl border border-[var(--border)] bg-[color-mix(in_srgb,var(--surface),transparent_45%)] p-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="space-y-2">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
            Category
          </div>
          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setService("all");
            }}
            className="h-11 w-full rounded-xl border border-[var(--border)] bg-[var(--bg)] px-3 text-sm text-[var(--text)]"
          >
            <option value="all">All categories</option>
            {serviceCategories.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.title}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
            Service
          </div>
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="h-11 w-full rounded-xl border border-[var(--border)] bg-[var(--bg)] px-3 text-sm text-[var(--text)]"
          >
            <option value="all">All services</option>
            {(selectedCategory ? selectedCategory.services : serviceCategories.flatMap((c) => c.services)).map(
              (s) => (
                <option key={s.slug} value={s.slug}>
                  {s.title}
                </option>
              )
            )}
          </select>
        </div>

        <div className="flex items-end justify-between gap-3">
          <div className="text-sm text-[var(--muted)]">Showing {filtered.length}</div>
          <button
            type="button"
            onClick={() => {
              setCategory("all");
              setService("all");
            }}
            className="h-11 rounded-xl border border-[var(--border)] px-4 text-sm font-medium text-[var(--text)] hover:border-[color-mix(in_srgb,var(--accent),var(--border)_60%)]"
          >
            Reset
          </button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => {
          const categoryLabel =
            serviceCategories.find((c) => c.slug === p.categorySlug)?.title ??
            p.categorySlug;

          return (
            <ProjectCard
              key={p.slug}
              title={p.title}
              summary={p.summary}
              year={p.year}
              categoryLabel={categoryLabel}
            />
          );
        })}
      </div>
    </div>
  );
}
